(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forecast-module-forecast-module"],{

/***/ "+nC0":
/*!*****************************************************!*\
  !*** ./src/app/forecast-module/forecast.routing.ts ***!
  \*****************************************************/
/*! exports provided: ForecastRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastRoutingModule", function() { return ForecastRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "7kDb");



// Components

const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["ForecastPageComponent"],
    },
    {
        path: ':zipCode',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["MultiDayForecastPageComponent"],
        data: {
            days: 5
        }
    }
];
let ForecastRoutingModule = class ForecastRoutingModule {
};
ForecastRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)] })
], ForecastRoutingModule);



/***/ }),

/***/ "0rlr":
/*!*************************************************!*\
  !*** ./src/app/forecast-module/config/index.ts ***!
  \*************************************************/
/*! exports provided: WEATHER_API_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-api.config */ "MyGh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WEATHER_API_CONFIG", function() { return _weather_api_config__WEBPACK_IMPORTED_MODULE_0__["WEATHER_API_CONFIG"]; });




/***/ }),

/***/ "4wnp":
/*!*****************************************************************!*\
  !*** ./src/app/forecast-module/services/weather-api.service.ts ***!
  \*****************************************************************/
/*! exports provided: WeatcherApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatcherApiService", function() { return WeatcherApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "0rlr");




let WeatcherApiService = class WeatcherApiService {
    constructor(weatherApiConfigs, http) {
        this.weatherApiConfigs = weatherApiConfigs;
        this.http = http;
    }
    getCurrentWeatherByZipCode(zipCode) {
        const url = `http://${this.weatherApiConfigs.apiUrl}/weather?zip=${zipCode}&appid=${this.weatherApiConfigs.appId}`;
        return this.http.get(url);
    }
    getMultipleDaysWeatherByZipCode(zipCode) {
        const url = `http://${this.weatherApiConfigs.apiUrl}/forecast?zip=${zipCode}&appid=${this.weatherApiConfigs.appId}`;
        return this.http.get(url);
    }
};
WeatcherApiService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_config__WEBPACK_IMPORTED_MODULE_3__["WEATHER_API_CONFIG"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
WeatcherApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], WeatcherApiService);



/***/ }),

/***/ "7kDb":
/*!*****************************************************!*\
  !*** ./src/app/forecast-module/components/index.ts ***!
  \*****************************************************/
/*! exports provided: ForecastPageComponent, MultiDayForecastPageComponent, ForecastDetailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forecast_page_forecast_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast-page/forecast-page.component */ "UABY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForecastPageComponent", function() { return _forecast_page_forecast_page_component__WEBPACK_IMPORTED_MODULE_0__["ForecastPageComponent"]; });

/* harmony import */ var _multi_day_forecast_page_multi_day_forecast_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi-day-forecast-page/multi-day-forecast-page.component */ "cmkj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiDayForecastPageComponent", function() { return _multi_day_forecast_page_multi_day_forecast_page_component__WEBPACK_IMPORTED_MODULE_1__["MultiDayForecastPageComponent"]; });

/* harmony import */ var _forecast_detailed_forecast_detailed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast-detailed/forecast-detailed.component */ "wKXc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForecastDetailedComponent", function() { return _forecast_detailed_forecast_detailed_component__WEBPACK_IMPORTED_MODULE_2__["ForecastDetailedComponent"]; });






/***/ }),

/***/ "Br1w":
/*!****************************************************!*\
  !*** ./src/app/forecast-module/forecast.module.ts ***!
  \****************************************************/
/*! exports provided: ForecastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastModule", function() { return ForecastModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _forecast_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast.routing */ "+nC0");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-module/shared.module */ "Dk7Y");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "7kDb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "c84x");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "0rlr");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes */ "HGky");


// Routes

// Modules

// Locals




let ForecastModule = class ForecastModule {
};
ForecastModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _forecast_routing__WEBPACK_IMPORTED_MODULE_2__["ForecastRoutingModule"],
        ],
        declarations: [
            // Pages
            _components__WEBPACK_IMPORTED_MODULE_4__["ForecastPageComponent"],
            _components__WEBPACK_IMPORTED_MODULE_4__["MultiDayForecastPageComponent"],
            // Components
            _components__WEBPACK_IMPORTED_MODULE_4__["ForecastDetailedComponent"],
            // pipes
            _pipes__WEBPACK_IMPORTED_MODULE_7__["ToCelsiusPipe"],
        ],
        providers: [
            _services__WEBPACK_IMPORTED_MODULE_5__["ForecastService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["WeatcherApiService"],
            { provide: _config__WEBPACK_IMPORTED_MODULE_6__["WEATHER_API_CONFIG"], useValue: { apiUrl: 'api.openweathermap.org/data/2.5', appId: '5a4b2d457ecbef9eb2a71e480b947604' } }
        ],
        exports: []
    })
], ForecastModule);



/***/ }),

/***/ "FQ7g":
/*!*********************************************************!*\
  !*** ./src/app/forecast-module/pipes/toCelsius.pipe.ts ***!
  \*********************************************************/
/*! exports provided: ToCelsiusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToCelsiusPipe", function() { return ToCelsiusPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ToCelsiusPipe = class ToCelsiusPipe {
    transform(fahrenheitTemp, ...args) {
        return Math.round(fahrenheitTemp - 273);
    }
};
ToCelsiusPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'toCelsius',
    })
], ToCelsiusPipe);



/***/ }),

/***/ "HGky":
/*!************************************************!*\
  !*** ./src/app/forecast-module/pipes/index.ts ***!
  \************************************************/
/*! exports provided: ToCelsiusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toCelsius_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toCelsius.pipe */ "FQ7g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToCelsiusPipe", function() { return _toCelsius_pipe__WEBPACK_IMPORTED_MODULE_0__["ToCelsiusPipe"]; });




/***/ }),

/***/ "MyGh":
/*!**************************************************************!*\
  !*** ./src/app/forecast-module/config/weather-api.config.ts ***!
  \**************************************************************/
/*! exports provided: WEATHER_API_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEATHER_API_CONFIG", function() { return WEATHER_API_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const WEATHER_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WEATHER_API_CONFIG');


/***/ }),

/***/ "UABY":
/*!*************************************************************************************!*\
  !*** ./src/app/forecast-module/components/forecast-page/forecast-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ForecastPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastPageComponent", function() { return ForecastPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forecast_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forecast-page.component.html */ "bVuB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "c84x");



// Locals

let ForecastPageComponent = class ForecastPageComponent {
    constructor(forecastService) {
        this.forecastService = forecastService;
    }
    get zipCodesForecast$() {
        return this.forecastService.addedZipCodes$;
    }
    // events
    onAddLocationClicked() {
        if (this.zipcodeInputValue) {
            this.forecastService.addNewZipCode(this.zipcodeInputValue);
        }
        else {
            console.warn('We can\'t add empyt zip code!');
        }
    }
    onDeleteForecast(forecast) {
        this.forecastService.removeZipCode(forecast.zipCode);
    }
};
ForecastPageComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["ForecastService"] }
];
ForecastPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-forecast-page',
        template: _raw_loader_forecast_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["ForecastService"]])
], ForecastPageComponent);



/***/ }),

/***/ "Yuvo":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forecast-module/components/forecast-detailed/forecast-detailed.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"well flex\">\r\n    <div>\r\n        <h3>{{forecast.locationName}} ({{forecast.zipCode}})</h3>\r\n        <h4>Current conditions: {{ forecast.currentConditions }}</h4>\r\n        <h4>Temperatures today:</h4>\r\n        <p>\r\n            Current <b>{{forecast.temperature | toCelsius}}</b>\r\n        </p>\r\n        <p>\r\n            Max <b>{{forecast.maxToday | toCelsius}}</b>\r\n        </p>\r\n        <p>\r\n            Min <b>{{forecast.minToday | toCelsius}}</b>\r\n        </p>\r\n        <p>\r\n            <a [routerLink]=\"['/forecast', forecast.zipCode]\">Show 5-day forecast for Rancho Cordova</a>\r\n        </p>\r\n    </div>\r\n    <div>\r\n        <span class=\"close\" (click)=\"onClose()\">×</span>\r\n        <app-weather-icon [weatherName]=\"forecast.currentConditions\"></app-weather-icon>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "bVuB":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forecast-module/components/forecast-page/forecast-page.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n\r\n    <div class=\"well\">\r\n        <h2>Enter a zipcode:</h2>\r\n        <input class=\"form-control\" placeholder=\"Zipcode\" type=\"text\" [(ngModel)]=\"zipcodeInputValue\">\r\n        <br>\r\n        <button class=\"btn btn-primary\" (click)=\"onAddLocationClicked()\">\r\n        Add location\r\n      </button>\r\n    </div>\r\n    <div>\r\n        <app-forecast-detailed *ngFor=\"let forecast of zipCodesForecast$ | async\" [forecast]=\"forecast\" (close)=\"onDeleteForecast($event)\"></app-forecast-detailed>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "c84x":
/*!***************************************************!*\
  !*** ./src/app/forecast-module/services/index.ts ***!
  \***************************************************/
/*! exports provided: ForecastService, WeatcherApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forecast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast.service */ "iGZ/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForecastService", function() { return _forecast_service__WEBPACK_IMPORTED_MODULE_0__["ForecastService"]; });

/* harmony import */ var _weather_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-api.service */ "4wnp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatcherApiService", function() { return _weather_api_service__WEBPACK_IMPORTED_MODULE_1__["WeatcherApiService"]; });





/***/ }),

/***/ "cmkj":
/*!*********************************************************************************************************!*\
  !*** ./src/app/forecast-module/components/multi-day-forecast-page/multi-day-forecast-page.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MultiDayForecastPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiDayForecastPageComponent", function() { return MultiDayForecastPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_multi_day_forecast_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./multi-day-forecast-page.component.html */ "fWo2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "c84x");




// Locals

const defaultDaysForForecast = 5;
let MultiDayForecastPageComponent = class MultiDayForecastPageComponent {
    constructor(activatedRoute, forecastService) {
        this.activatedRoute = activatedRoute;
        this.forecastService = forecastService;
        this.forecastDetails = [];
        this.isLoading = false;
        this.daysLength = this.activatedRoute.snapshot.data.days || defaultDaysForForecast;
    }
    ngOnInit() {
        const routeZipCode = this.activatedRoute.snapshot.paramMap.get('zipCode');
        if (routeZipCode && routeZipCode.length) {
            this.isLoading = true;
            this.forecastService
                .getForecastForDays(routeZipCode, this.daysLength)
                .subscribe(resp => this.forecastDetails = resp, (err) => console.error(err), () => this.isLoading = false);
        }
        else {
            console.error(`Zip code is missed! We can't show you forecast`);
        }
    }
};
MultiDayForecastPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["ForecastService"] }
];
MultiDayForecastPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-multi-day-forecast-page',
        template: _raw_loader_multi_day_forecast_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services__WEBPACK_IMPORTED_MODULE_4__["ForecastService"]])
], MultiDayForecastPageComponent);



/***/ }),

/***/ "fWo2":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forecast-module/components/multi-day-forecast-page/multi-day-forecast-page.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Template for {{daysLength}}-day forecast page:</h4>\r\n<div class=\"container-fluid\">\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title\">{{daysLength}}-day forecast for Rancho Cordova</h3>\r\n        </div>\r\n        <app-loading-indicator *ngIf=\"isLoading\"></app-loading-indicator>\r\n        <ul class=\"list-group\">\r\n            <!---->\r\n            <li class=\"list-group-item\" *ngFor=\"let forecast of forecastDetails\">\r\n                {{forecast.date | date: 'EEEE'}}: {{forecast.currentConditions}} - Min: {{forecast.minToday | toCelsius}} - Max: {{forecast.maxToday | toCelsius}}\r\n\r\n                <app-weather-icon class=\"icon\" [weatherName]=\"forecast.currentConditions\"></app-weather-icon>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <button class=\"btn btn-success\" tabindex=\"0\" [routerLink]=\"['../']\">&lt; Back to main page</button>\r\n</div>");

/***/ }),

/***/ "iGZ/":
/*!**************************************************************!*\
  !*** ./src/app/forecast-module/services/forecast.service.ts ***!
  \**************************************************************/
/*! exports provided: ForecastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastService", function() { return ForecastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_module_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-module/services */ "syQv");
/* harmony import */ var _weather_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather-api.service */ "4wnp");




// Locals


const forecastStorageKey = 'forecast-zip-codes';
let ForecastService = class ForecastService {
    constructor(dataService, weatherApi) {
        this.dataService = dataService;
        this.weatherApi = weatherApi;
        this.addedZipCodes$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.forecastData = [];
        this.loadForecastFromStorage();
    }
    addNewZipCode(zipCode) {
        const currentZipCodes = this.dataService.getData(forecastStorageKey) || [];
        // make sure we have only unique zip codes
        if (currentZipCodes.indexOf(zipCode) < 0) {
            // add new value
            currentZipCodes.push(zipCode);
            this.dataService.saveData(forecastStorageKey, currentZipCodes);
            this.weatherApi.getCurrentWeatherByZipCode(zipCode)
                .subscribe(loadedData => this.addNewForecast(zipCode, loadedData), err => this.onForecastError(zipCode, err));
        }
    }
    removeZipCode(zipCode) {
        const currentZipCodes = this.dataService.getData(forecastStorageKey) || [];
        const usedIndex = currentZipCodes.indexOf(zipCode);
        if (usedIndex >= 0) {
            // remove existing zip-code
            currentZipCodes.splice(usedIndex, 1);
            this.dataService.saveData(forecastStorageKey, currentZipCodes);
            this.forecastData = this.forecastData.filter(f => f.zipCode !== zipCode);
            this.addedZipCodes$.next(this.forecastData);
        }
    }
    getForecastForDays(zipCode, days) {
        return this.weatherApi.getMultipleDaysWeatherByZipCode(zipCode)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            const currentDay = new Date().setHours(0, 0, 0, 0);
            const resultArray = [];
            let previousDate = null;
            for (const respDay of resp.list) {
                const respDayDate = new Date(respDay.dt * 1000).setHours(0, 0, 0, 0);
                const diffTime = Math.abs(respDayDate - currentDay);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays >= days) {
                    break;
                }
                previousDate = new Date(respDay.dt * 1000).setHours(0, 0, 0, 0);
                // TODO do I need to make totals?
                if (!resultArray.find(f => f.date === previousDate)) {
                    resultArray.push({
                        zipCode: zipCode,
                        // Loaded
                        locationName: resp.city.name,
                        currentConditions: respDay.weather[0].main,
                        maxToday: respDay.main.temp_max,
                        minToday: respDay.main.temp_min,
                        temperature: respDay.main.temp,
                        date: previousDate,
                    });
                }
            }
            return resultArray;
        }));
    }
    loadForecastFromStorage() {
        const existingZipCodesData = this.dataService.getData(forecastStorageKey);
        if (existingZipCodesData) {
            for (const zipCode of existingZipCodesData) {
                this.weatherApi.getCurrentWeatherByZipCode(zipCode)
                    .subscribe(loadedData => this.addNewForecast(zipCode, loadedData), err => this.onForecastError(zipCode, err));
            }
        }
    }
    addNewForecast(zipCode, loadedData) {
        if (loadedData && loadedData.weather && loadedData.weather.length) {
            this.forecastData.push({
                zipCode: zipCode,
                // Loaded
                locationName: loadedData.name,
                currentConditions: loadedData.weather[0].main,
                maxToday: loadedData.main.temp_max,
                minToday: loadedData.main.temp_min,
                temperature: loadedData.main.temp,
                date: loadedData.dt * 1000,
            });
            this.addedZipCodes$.next(this.forecastData);
        }
        else {
            console.warn('Got incorrect forecast response');
        }
    }
    onForecastError(zipCode, err) {
        if (err.status === 404) {
            // incorrect zip code
            // just remove it
            this.removeZipCode(zipCode);
            console.warn(`ZipCode=${zipCode} can't be found, we will delete it from your storage!`);
        }
    }
};
ForecastService.ctorParameters = () => [
    { type: src_app_core_module_services__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _weather_api_service__WEBPACK_IMPORTED_MODULE_5__["WeatcherApiService"] }
];
ForecastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_module_services__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _weather_api_service__WEBPACK_IMPORTED_MODULE_5__["WeatcherApiService"]])
], ForecastService);



/***/ }),

/***/ "wKXc":
/*!*********************************************************************************************!*\
  !*** ./src/app/forecast-module/components/forecast-detailed/forecast-detailed.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ForecastDetailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastDetailedComponent", function() { return ForecastDetailedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forecast_detailed_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forecast-detailed.component.html */ "Yuvo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ForecastDetailedComponent = class ForecastDetailedComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    // events
    onClose() {
        this.close.emit(this.forecast);
    }
};
ForecastDetailedComponent.propDecorators = {
    forecast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
ForecastDetailedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-forecast-detailed',
        template: _raw_loader_forecast_detailed_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ForecastDetailedComponent);



/***/ })

}]);
//# sourceMappingURL=forecast-module-forecast-module-es2015.js.map