import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import {
    ForecastPageComponent,
    MultiDayForecastPageComponent,
} from './components';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ForecastPageComponent,
    },
    {
        path: ':zipCode',
        component: MultiDayForecastPageComponent,
    }
];

@NgModule({ imports: [RouterModule.forChild(routes)] })
export class ForecastRoutingModule { }
