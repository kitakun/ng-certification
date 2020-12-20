import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-multi-day-forecast-page',
    templateUrl: './multi-day-forecast-page.component.html',
    styleUrls: []
})
export class MultiDayForecastPageComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        const routeZipCode = this.activatedRoute.snapshot.paramMap.get('zipCode');
    }
}