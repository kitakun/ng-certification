import { Component, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { IForecastData } from "../../models";
// Locals
import { ForecastService } from "../../services";

@Component({
    selector: 'app-forecast-page',
    templateUrl: './forecast-page.component.html',
    styleUrls: []
})
export class ForecastPageComponent {

    zipcodeInputValue: string;

    get zipCodesForecast$(): Observable<IForecastData[]> {
        return this.forecastService.addedZipCodes$;
    }

    constructor(
        public readonly forecastService: ForecastService,
    ) {
    }

    // events
    onAddLocationClicked(): void {
        if (this.zipcodeInputValue) {
            this.forecastService.addNewZipCode(this.zipcodeInputValue);
        } else {
            console.warn('We can\'t add empyt zip code!');
        }
    }

    onDeleteForecast(forecast: IForecastData): void {
        this.forecastService.removeZipCode(forecast.zipCode);
    }
}