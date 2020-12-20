import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toCelsius',
})
export class ToCelsiusPipe implements PipeTransform {
    transform(fahrenheitTemp: number, ...args: any[]) {
        return Math.round(fahrenheitTemp - 273);
    }
}
