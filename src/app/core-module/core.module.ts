import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services
import * as services from './services';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
    ],
    providers: [
        // Services
        services.StorageService,
    ],
    exports: [
    ]
})
export class CoreModule { }