import { NgModule } from '@angular/core';
// Routes
import { ForecastRoutingModule } from './forecast.routing';
// Modules
import { SharedModule } from '../shared-module/shared.module';
// Locals
import {
    ForecastPageComponent,
    MultiDayForecastPageComponent,
    ForecastDetailedComponent,
} from './components';
import {
    ForecastService,
    WeatcherApiService,
} from './services';
import { WEATHER_API_CONFIG, WeatherApiConfigParams } from './config';
import * as pipes from './pipes';

@NgModule({
    imports: [
        SharedModule,
        ForecastRoutingModule,
    ],
    declarations: [
        // Pages
        ForecastPageComponent,
        MultiDayForecastPageComponent,
        // Components
        ForecastDetailedComponent,
        // pipes
        pipes.ToCelsiusPipe,
    ],
    providers: [
        ForecastService,
        WeatcherApiService,
        { provide: WEATHER_API_CONFIG, useValue: { apiUrl: 'api.openweathermap.org/data/2.5', appId: '5a4b2d457ecbef9eb2a71e480b947604' } as WeatherApiConfigParams }
    ],
    exports: [

    ]
})
export class ForecastModule { }
