import { Component, EventEmitter, Input, Output } from "@angular/core";
// Locals
import { IForecastData } from "../../models";

@Component({
    selector: 'app-forecast-detailed',
    templateUrl: './forecast-detailed.component.html',
    styleUrls: []
})
export class ForecastDetailedComponent {
    @Input()
    forecast: IForecastData;

    @Output()
    close = new EventEmitter<IForecastData>();

    // events
    onClose() {
        this.close.emit(this.forecast);
    }
}