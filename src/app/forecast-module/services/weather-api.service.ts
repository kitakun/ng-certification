import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Locals
import { WeatherResponseData } from '../models';
import { WEATHER_API_CONFIG, WeatherApiConfigParams } from '../config';

@Injectable()
export class WeatcherApiService {

    constructor(
        @Inject(WEATHER_API_CONFIG) private readonly weatherApiConfigs: WeatherApiConfigParams,
        private readonly http: HttpClient
    ) {
    }

    getCurrentWeatherByZipCode(
        zipCode: string
    ): Observable<WeatherResponseData> {
        return this.http.get<WeatherResponseData>(
            `http://${this.weatherApiConfigs.apiUrl}/weather?zip=${zipCode}&appid=${this.weatherApiConfigs.appId}`
        );
    }
}
