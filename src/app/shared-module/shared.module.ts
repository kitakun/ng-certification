import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// locals
import {
    LoadingIndicatorComponent,
    NotFoundComponent,
    WeatherIconComponent,
} from './components';


const sharedComponents = [
    NotFoundComponent,
    WeatherIconComponent,
    LoadingIndicatorComponent,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
    ],
    declarations: [
        ...sharedComponents,
    ],
    exports: [
        // Angular
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        // Components
        ...sharedComponents,
    ]
})
export class SharedModule { }
