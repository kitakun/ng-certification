import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { NotFoundComponent } from './shared-module/components';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./forecast-module/forecast.module').then(m => m.ForecastModule),
    },
    {
        path: 'forecast',
        loadChildren: () => import('./forecast-module/forecast.module').then(m => m.ForecastModule),
    },
    {
        path: '**', component: NotFoundComponent,
        canActivate: []
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
