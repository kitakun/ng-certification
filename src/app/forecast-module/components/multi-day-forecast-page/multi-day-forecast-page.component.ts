import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
// Locals
import { ForecastService } from "../../services";

const defaultDaysForForecast = 5;

@Component({
    selector: 'app-multi-day-forecast-page',
    templateUrl: './multi-day-forecast-page.component.html',
    styleUrls: []
})
export class MultiDayForecastPageComponent implements OnInit {
    readonly daysLength: number;
    forecastDetails = [];
    isLoading = false;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly forecastService: ForecastService,
    ) {
        this.daysLength = this.activatedRoute.snapshot.data.days || defaultDaysForForecast;
    }

    ngOnInit() {
        const routeZipCode = this.activatedRoute.snapshot.paramMap.get('zipCode');
        if (routeZipCode && routeZipCode.length) {
            this.isLoading = true;
            this.forecastService
                .getForecastForDays(routeZipCode, this.daysLength)
                .subscribe(
                    resp => this.forecastDetails = resp,
                    (err) => console.error(err),
                    () => this.isLoading = false);
        } else {
            console.error(`Zip code is missed! We can't show you forecast`);
        }
    }
}