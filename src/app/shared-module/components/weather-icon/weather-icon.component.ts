import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-weather-icon',
    templateUrl: './weather-icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherIconComponent {
    @Input()
    weatherName: 'Clear' | 'Clouds' | 'Rain' | 'Snow' = 'Clear';

    @Input()
    isSmall = false;

    get iconUrl(): SafeResourceUrl {
        switch (this.weatherName) {
            case 'Clear':
                return this.sanitizer.bypassSecurityTrustResourceUrl('/assets/weather/sun.png');
            case 'Clouds':
                return this.sanitizer.bypassSecurityTrustResourceUrl('/assets/weather/clouds.png');
            case 'Rain':
                return this.sanitizer.bypassSecurityTrustResourceUrl('/assets/weather/rain.png');
            case 'Snow':
                return this.sanitizer.bypassSecurityTrustResourceUrl('/assets/weather/snow.png');
        }
        return '';
    }

    constructor(
        private readonly sanitizer: DomSanitizer,
    ) {
    }
}
