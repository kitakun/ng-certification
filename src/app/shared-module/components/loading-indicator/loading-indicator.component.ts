import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-loading-indicator',
    templateUrl: './loading-indicator.component.html',
    styleUrls: []
})
export class LoadingIndicatorComponent implements OnInit, OnDestroy {
    timer: number;
    dots = '.';
    ngOnInit(): void {
        if (!this.timer) {
            this.timer = setInterval(() => {
                if (this.dots.length == 3) {
                    this.dots = '.';
                } else {
                    this.dots += '.';
                }
            }, 330);
        }
    }
    ngOnDestroy(): void {
        clearInterval(this.timer);
    }
}
