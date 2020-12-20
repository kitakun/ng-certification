import { InjectionToken } from '@angular/core';

export const WEATHER_API_CONFIG = new InjectionToken<WeatherApiConfigParams>('WEATHER_API_CONFIG');

export interface WeatherApiConfigParams {
    apiUrl: string;
    appId: string;
}