import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
// Locals
import { StorageService } from 'src/app/core-module/services';
import { IForecastData, WeatherResponseData } from '../models';
import { WeatcherApiService } from './weather-api.service';

const forecastStorageKey = 'forecast-zip-codes';

@Injectable()
export class ForecastService {
    readonly addedZipCodes$ = new ReplaySubject<IForecastData[]>(1);
    private forecastData: IForecastData[] = [];

    constructor(
        private readonly dataService: StorageService,
        private readonly weatherApi: WeatcherApiService,
    ) {
        this.loadForecastFromStorage();
    }

    addNewZipCode(zipCode: string): void {
        const currentZipCodes = this.dataService.getData<string[]>(forecastStorageKey) || [];
        // make sure we have only unique zip codes
        if (currentZipCodes.indexOf(zipCode) < 0) {
            // add new value
            currentZipCodes.push(zipCode);
            this.dataService.saveData(forecastStorageKey, currentZipCodes);
            this.weatherApi.getCurrentWeatherByZipCode(zipCode)
                .subscribe(
                    loadedData => this.addNewForecast(zipCode, loadedData),
                    err => this.onForecastError(zipCode, err));
        }
    }

    removeZipCode(zipCode: string): void {
        const currentZipCodes = this.dataService.getData<string[]>(forecastStorageKey) || [];
        const usedIndex = currentZipCodes.indexOf(zipCode);
        if (usedIndex >= 0) {
            // remove existing zip-code
            currentZipCodes.splice(usedIndex, 1);
            this.dataService.saveData(forecastStorageKey, currentZipCodes);
            this.forecastData = this.forecastData.filter(f => f.zipCode !== zipCode);
            this.addedZipCodes$.next(this.forecastData);
        }
    }

    getForecastForDays(zipCode: string, days: number): Observable<IForecastData[]> {
        return this.weatherApi.getMultipleDaysWeatherByZipCode(zipCode)
            .pipe(map(resp => {
                const currentDay = new Date().setHours(0, 0, 0, 0);
                const resultArray: IForecastData[] = [];
                let previousDate = null;
                for (const respDay of resp.list) {
                    const respDayDate = new Date(respDay.dt * 1000).setHours(0, 0, 0, 0);
                    const diffTime = Math.abs(respDayDate - currentDay);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    if (diffDays >= days) {
                        break;
                    }
                    previousDate = new Date(respDay.dt * 1000).setHours(0, 0, 0, 0);
                    // TODO do I need to make totals?
                    if (!resultArray.find(f => f.date === previousDate)) {
                        resultArray.push({
                            zipCode: zipCode,
                            // Loaded
                            locationName: resp.city.name,
                            currentConditions: respDay.weather[0].main,
                            maxToday: respDay.main.temp_max,
                            minToday: respDay.main.temp_min,
                            temperature: respDay.main.temp,
                            date: previousDate,
                        });
                    }
                }
                return resultArray;
            }));
    }

    private loadForecastFromStorage(): void {
        const existingZipCodesData = this.dataService.getData<string[]>(forecastStorageKey);
        if (existingZipCodesData) {
            for (const zipCode of existingZipCodesData) {
                this.weatherApi.getCurrentWeatherByZipCode(zipCode)
                    .subscribe(
                        loadedData => this.addNewForecast(zipCode, loadedData),
                        err => this.onForecastError(zipCode, err));
            }
        }
    }

    private addNewForecast(zipCode: string, loadedData: WeatherResponseData): void {
        if (loadedData && loadedData.weather && loadedData.weather.length) {
            this.forecastData.push({
                zipCode: zipCode,
                // Loaded
                locationName: loadedData.name,
                currentConditions: loadedData.weather[0].main,
                maxToday: loadedData.main.temp_max,
                minToday: loadedData.main.temp_min,
                temperature: loadedData.main.temp,
                date: loadedData.dt * 1000,
            });
            this.addedZipCodes$.next(this.forecastData);
        } else {
            console.warn('Got incorrect forecast response');
        }
    }

    private onForecastError(zipCode: string, err: HttpErrorResponse): void {
        if (err.status === 404) {
            // incorrect zip code
            // just remove it
            this.removeZipCode(zipCode);
            console.warn(`ZipCode=${zipCode} can't be found, we will delete it from your storage!`);
        }
    }
}
