(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forecast-module-forecast-module"], {
    /***/
    "+nC0":
    /*!*****************************************************!*\
      !*** ./src/app/forecast-module/forecast.routing.ts ***!
      \*****************************************************/

    /*! exports provided: ForecastRoutingModule */

    /***/
    function nC0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForecastRoutingModule", function () {
        return ForecastRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components */
      "7kDb"); // Components


      var routes = [{
        path: '',
        pathMatch: 'full',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["ForecastPageComponent"]
      }, {
        path: ':zipCode',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["MultiDayForecastPageComponent"],
        data: {
          days: 5
        }
      }];

      var ForecastRoutingModule = function ForecastRoutingModule() {
        _classCallCheck(this, ForecastRoutingModule);
      };

      ForecastRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
      })], ForecastRoutingModule);
      /***/
    },

    /***/
    "0rlr":
    /*!*************************************************!*\
      !*** ./src/app/forecast-module/config/index.ts ***!
      \*************************************************/

    /*! exports provided: WEATHER_API_CONFIG */

    /***/
    function rlr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _weather_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./weather-api.config */
      "MyGh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WEATHER_API_CONFIG", function () {
        return _weather_api_config__WEBPACK_IMPORTED_MODULE_0__["WEATHER_API_CONFIG"];
      });
      /***/

    },

    /***/
    "4wnp":
    /*!*****************************************************************!*\
      !*** ./src/app/forecast-module/services/weather-api.service.ts ***!
      \*****************************************************************/

    /*! exports provided: WeatcherApiService */

    /***/
    function wnp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeatcherApiService", function () {
        return WeatcherApiService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../config */
      "0rlr");

      var WeatcherApiService = /*#__PURE__*/function () {
        function WeatcherApiService(weatherApiConfigs, http) {
          _classCallCheck(this, WeatcherApiService);

          this.weatherApiConfigs = weatherApiConfigs;
          this.http = http;
        }

        _createClass(WeatcherApiService, [{
          key: "getCurrentWeatherByZipCode",
          value: function getCurrentWeatherByZipCode(zipCode) {
            var url = "http://".concat(this.weatherApiConfigs.apiUrl, "/weather?zip=").concat(zipCode, "&appid=").concat(this.weatherApiConfigs.appId);
            return this.http.get(url);
          }
        }, {
          key: "getMultipleDaysWeatherByZipCode",
          value: function getMultipleDaysWeatherByZipCode(zipCode) {
            var url = "http://".concat(this.weatherApiConfigs.apiUrl, "/forecast?zip=").concat(zipCode, "&appid=").concat(this.weatherApiConfigs.appId);
            return this.http.get(url);
          }
        }]);

        return WeatcherApiService;
      }();

      WeatcherApiService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_config__WEBPACK_IMPORTED_MODULE_3__["WEATHER_API_CONFIG"]]
          }]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      WeatcherApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], WeatcherApiService);
      /***/
    },

    /***/
    "7kDb":
    /*!*****************************************************!*\
      !*** ./src/app/forecast-module/components/index.ts ***!
      \*****************************************************/

    /*! exports provided: ForecastPageComponent, MultiDayForecastPageComponent, ForecastDetailedComponent */

    /***/
    function kDb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _forecast_page_forecast_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forecast-page/forecast-page.component */
      "UABY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ForecastPageComponent", function () {
        return _forecast_page_forecast_page_component__WEBPACK_IMPORTED_MODULE_0__["ForecastPageComponent"];
      });
      /* harmony import */


      var _multi_day_forecast_page_multi_day_forecast_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./multi-day-forecast-page/multi-day-forecast-page.component */
      "cmkj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MultiDayForecastPageComponent", function () {
        return _multi_day_forecast_page_multi_day_forecast_page_component__WEBPACK_IMPORTED_MODULE_1__["MultiDayForecastPageComponent"];
      });
      /* harmony import */


      var _forecast_detailed_forecast_detailed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forecast-detailed/forecast-detailed.component */
      "wKXc");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ForecastDetailedComponent", function () {
        return _forecast_detailed_forecast_detailed_component__WEBPACK_IMPORTED_MODULE_2__["ForecastDetailedComponent"];
      });
      /***/

    },

    /***/
    "Br1w":
    /*!****************************************************!*\
      !*** ./src/app/forecast-module/forecast.module.ts ***!
      \****************************************************/

    /*! exports provided: ForecastModule */

    /***/
    function Br1w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForecastModule", function () {
        return ForecastModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _forecast_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forecast.routing */
      "+nC0");
      /* harmony import */


      var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared-module/shared.module */
      "Dk7Y");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components */
      "7kDb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services */
      "c84x");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./config */
      "0rlr");
      /* harmony import */


      var _pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pipes */
      "HGky"); // Routes
      // Modules
      // Locals


      var ForecastModule = function ForecastModule() {
        _classCallCheck(this, ForecastModule);
      };

      ForecastModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _forecast_routing__WEBPACK_IMPORTED_MODULE_2__["ForecastRoutingModule"]],
        declarations: [// Pages
        _components__WEBPACK_IMPORTED_MODULE_4__["ForecastPageComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["MultiDayForecastPageComponent"], // Components
        _components__WEBPACK_IMPORTED_MODULE_4__["ForecastDetailedComponent"], // pipes
        _pipes__WEBPACK_IMPORTED_MODULE_7__["ToCelsiusPipe"]],
        providers: [_services__WEBPACK_IMPORTED_MODULE_5__["ForecastService"], _services__WEBPACK_IMPORTED_MODULE_5__["WeatcherApiService"], {
          provide: _config__WEBPACK_IMPORTED_MODULE_6__["WEATHER_API_CONFIG"],
          useValue: {
            apiUrl: 'api.openweathermap.org/data/2.5',
            appId: '5a4b2d457ecbef9eb2a71e480b947604'
          }
        }],
        exports: []
      })], ForecastModule);
      /***/
    },

    /***/
    "FQ7g":
    /*!*********************************************************!*\
      !*** ./src/app/forecast-module/pipes/toCelsius.pipe.ts ***!
      \*********************************************************/

    /*! exports provided: ToCelsiusPipe */

    /***/
    function FQ7g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToCelsiusPipe", function () {
        return ToCelsiusPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ToCelsiusPipe = /*#__PURE__*/function () {
        function ToCelsiusPipe() {
          _classCallCheck(this, ToCelsiusPipe);
        }

        _createClass(ToCelsiusPipe, [{
          key: "transform",
          value: function transform(fahrenheitTemp) {
            return Math.round(fahrenheitTemp - 273);
          }
        }]);

        return ToCelsiusPipe;
      }();

      ToCelsiusPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'toCelsius'
      })], ToCelsiusPipe);
      /***/
    },

    /***/
    "HGky":
    /*!************************************************!*\
      !*** ./src/app/forecast-module/pipes/index.ts ***!
      \************************************************/

    /*! exports provided: ToCelsiusPipe */

    /***/
    function HGky(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _toCelsius_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./toCelsius.pipe */
      "FQ7g");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToCelsiusPipe", function () {
        return _toCelsius_pipe__WEBPACK_IMPORTED_MODULE_0__["ToCelsiusPipe"];
      });
      /***/

    },

    /***/
    "MyGh":
    /*!**************************************************************!*\
      !*** ./src/app/forecast-module/config/weather-api.config.ts ***!
      \**************************************************************/

    /*! exports provided: WEATHER_API_CONFIG */

    /***/
    function MyGh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WEATHER_API_CONFIG", function () {
        return WEATHER_API_CONFIG;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WEATHER_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WEATHER_API_CONFIG');
      /***/
    },

    /***/
    "UABY":
    /*!*************************************************************************************!*\
      !*** ./src/app/forecast-module/components/forecast-page/forecast-page.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ForecastPageComponent */

    /***/
    function UABY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForecastPageComponent", function () {
        return ForecastPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forecast_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forecast-page.component.html */
      "bVuB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services */
      "c84x"); // Locals


      var ForecastPageComponent = /*#__PURE__*/function () {
        function ForecastPageComponent(forecastService) {
          _classCallCheck(this, ForecastPageComponent);

          this.forecastService = forecastService;
        }

        _createClass(ForecastPageComponent, [{
          key: "onAddLocationClicked",
          // events
          value: function onAddLocationClicked() {
            if (this.zipcodeInputValue) {
              this.forecastService.addNewZipCode(this.zipcodeInputValue);
            } else {
              console.warn('We can\'t add empyt zip code!');
            }
          }
        }, {
          key: "onDeleteForecast",
          value: function onDeleteForecast(forecast) {
            this.forecastService.removeZipCode(forecast.zipCode);
          }
        }, {
          key: "zipCodesForecast$",
          get: function get() {
            return this.forecastService.addedZipCodes$;
          }
        }]);

        return ForecastPageComponent;
      }();

      ForecastPageComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_3__["ForecastService"]
        }];
      };

      ForecastPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-forecast-page',
        template: _raw_loader_forecast_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["ForecastService"]])], ForecastPageComponent);
      /***/
    },

    /***/
    "Yuvo":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forecast-module/components/forecast-detailed/forecast-detailed.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Yuvo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"well flex\">\r\n    <div>\r\n        <h3>{{forecast.locationName}} ({{forecast.zipCode}})</h3>\r\n        <h4>Current conditions: {{ forecast.currentConditions }}</h4>\r\n        <h4>Temperatures today:</h4>\r\n        <p>\r\n            Current <b>{{forecast.temperature | toCelsius}}</b>\r\n        </p>\r\n        <p>\r\n            Max <b>{{forecast.maxToday | toCelsius}}</b>\r\n        </p>\r\n        <p>\r\n            Min <b>{{forecast.minToday | toCelsius}}</b>\r\n        </p>\r\n        <p>\r\n            <a [routerLink]=\"['/forecast', forecast.zipCode]\">Show 5-day forecast for Rancho Cordova</a>\r\n        </p>\r\n    </div>\r\n    <div>\r\n        <span class=\"close\" (click)=\"onClose()\">×</span>\r\n        <app-weather-icon [weatherName]=\"forecast.currentConditions\"></app-weather-icon>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "bVuB":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forecast-module/components/forecast-page/forecast-page.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bVuB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\r\n    <div class=\"well\">\r\n        <h2>Enter a zipcode:</h2>\r\n        <input class=\"form-control\" placeholder=\"Zipcode\" type=\"text\" [(ngModel)]=\"zipcodeInputValue\">\r\n        <br>\r\n        <button class=\"btn btn-primary\" (click)=\"onAddLocationClicked()\">\r\n        Add location\r\n      </button>\r\n    </div>\r\n    <div>\r\n        <app-forecast-detailed *ngFor=\"let forecast of zipCodesForecast$ | async\" [forecast]=\"forecast\" (close)=\"onDeleteForecast($event)\"></app-forecast-detailed>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "c84x":
    /*!***************************************************!*\
      !*** ./src/app/forecast-module/services/index.ts ***!
      \***************************************************/

    /*! exports provided: ForecastService, WeatcherApiService */

    /***/
    function c84x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _forecast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forecast.service */
      "iGZ/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ForecastService", function () {
        return _forecast_service__WEBPACK_IMPORTED_MODULE_0__["ForecastService"];
      });
      /* harmony import */


      var _weather_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./weather-api.service */
      "4wnp");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WeatcherApiService", function () {
        return _weather_api_service__WEBPACK_IMPORTED_MODULE_1__["WeatcherApiService"];
      });
      /***/

    },

    /***/
    "cmkj":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/forecast-module/components/multi-day-forecast-page/multi-day-forecast-page.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: MultiDayForecastPageComponent */

    /***/
    function cmkj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiDayForecastPageComponent", function () {
        return MultiDayForecastPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_multi_day_forecast_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./multi-day-forecast-page.component.html */
      "fWo2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services */
      "c84x"); // Locals


      var defaultDaysForForecast = 5;

      var MultiDayForecastPageComponent = /*#__PURE__*/function () {
        function MultiDayForecastPageComponent(activatedRoute, forecastService) {
          _classCallCheck(this, MultiDayForecastPageComponent);

          this.activatedRoute = activatedRoute;
          this.forecastService = forecastService;
          this.forecastDetails = [];
          this.isLoading = false;
          this.daysLength = this.activatedRoute.snapshot.data.days || defaultDaysForForecast;
        }

        _createClass(MultiDayForecastPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var routeZipCode = this.activatedRoute.snapshot.paramMap.get('zipCode');

            if (routeZipCode && routeZipCode.length) {
              this.isLoading = true;
              this.forecastService.getForecastForDays(routeZipCode, this.daysLength).subscribe(function (resp) {
                return _this.forecastDetails = resp;
              }, function (err) {
                return console.error(err);
              }, function () {
                return _this.isLoading = false;
              });
            } else {
              console.error("Zip code is missed! We can't show you forecast");
            }
          }
        }]);

        return MultiDayForecastPageComponent;
      }();

      MultiDayForecastPageComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_4__["ForecastService"]
        }];
      };

      MultiDayForecastPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-multi-day-forecast-page',
        template: _raw_loader_multi_day_forecast_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services__WEBPACK_IMPORTED_MODULE_4__["ForecastService"]])], MultiDayForecastPageComponent);
      /***/
    },

    /***/
    "fWo2":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forecast-module/components/multi-day-forecast-page/multi-day-forecast-page.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fWo2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4>Template for {{daysLength}}-day forecast page:</h4>\r\n<div class=\"container-fluid\">\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title\">{{daysLength}}-day forecast for Rancho Cordova</h3>\r\n        </div>\r\n        <app-loading-indicator *ngIf=\"isLoading\"></app-loading-indicator>\r\n        <ul class=\"list-group\">\r\n            <!---->\r\n            <li class=\"list-group-item\" *ngFor=\"let forecast of forecastDetails\">\r\n                {{forecast.date | date: 'EEEE'}}: {{forecast.currentConditions}} - Min: {{forecast.minToday | toCelsius}} - Max: {{forecast.maxToday | toCelsius}}\r\n\r\n                <app-weather-icon class=\"icon\" [weatherName]=\"forecast.currentConditions\"></app-weather-icon>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <button class=\"btn btn-success\" tabindex=\"0\" [routerLink]=\"['../']\">&lt; Back to main page</button>\r\n</div>";
      /***/
    },

    /***/
    "iGZ/":
    /*!**************************************************************!*\
      !*** ./src/app/forecast-module/services/forecast.service.ts ***!
      \**************************************************************/

    /*! exports provided: ForecastService */

    /***/
    function iGZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForecastService", function () {
        return ForecastService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_core_module_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core-module/services */
      "syQv");
      /* harmony import */


      var _weather_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./weather-api.service */
      "4wnp"); // Locals


      var forecastStorageKey = 'forecast-zip-codes';

      var ForecastService = /*#__PURE__*/function () {
        function ForecastService(dataService, weatherApi) {
          _classCallCheck(this, ForecastService);

          this.dataService = dataService;
          this.weatherApi = weatherApi;
          this.addedZipCodes$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
          this.forecastData = [];
          this.loadForecastFromStorage();
        }

        _createClass(ForecastService, [{
          key: "addNewZipCode",
          value: function addNewZipCode(zipCode) {
            var _this2 = this;

            var currentZipCodes = this.dataService.getData(forecastStorageKey) || []; // make sure we have only unique zip codes

            if (currentZipCodes.indexOf(zipCode) < 0) {
              // add new value
              currentZipCodes.push(zipCode);
              this.dataService.saveData(forecastStorageKey, currentZipCodes);
              this.weatherApi.getCurrentWeatherByZipCode(zipCode).subscribe(function (loadedData) {
                return _this2.addNewForecast(zipCode, loadedData);
              }, function (err) {
                return _this2.onForecastError(zipCode, err);
              });
            }
          }
        }, {
          key: "removeZipCode",
          value: function removeZipCode(zipCode) {
            var currentZipCodes = this.dataService.getData(forecastStorageKey) || [];
            var usedIndex = currentZipCodes.indexOf(zipCode);

            if (usedIndex >= 0) {
              // remove existing zip-code
              currentZipCodes.splice(usedIndex, 1);
              this.dataService.saveData(forecastStorageKey, currentZipCodes);
              this.forecastData = this.forecastData.filter(function (f) {
                return f.zipCode !== zipCode;
              });
              this.addedZipCodes$.next(this.forecastData);
            }
          }
        }, {
          key: "getForecastForDays",
          value: function getForecastForDays(zipCode, days) {
            return this.weatherApi.getMultipleDaysWeatherByZipCode(zipCode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
              var currentDay = new Date().setHours(0, 0, 0, 0);
              var resultArray = [];
              var previousDate = null;

              var _iterator = _createForOfIteratorHelper(resp.list),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var respDay = _step.value;
                  var respDayDate = new Date(respDay.dt * 1000).setHours(0, 0, 0, 0);
                  var diffTime = Math.abs(respDayDate - currentDay);
                  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                  if (diffDays >= days) {
                    break;
                  }

                  previousDate = new Date(respDay.dt * 1000).setHours(0, 0, 0, 0); // TODO do I need to make totals?

                  if (!resultArray.find(function (f) {
                    return f.date === previousDate;
                  })) {
                    resultArray.push({
                      zipCode: zipCode,
                      // Loaded
                      locationName: resp.city.name,
                      currentConditions: respDay.weather[0].main,
                      maxToday: respDay.main.temp_max,
                      minToday: respDay.main.temp_min,
                      temperature: respDay.main.temp,
                      date: previousDate
                    });
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return resultArray;
            }));
          }
        }, {
          key: "loadForecastFromStorage",
          value: function loadForecastFromStorage() {
            var _this3 = this;

            var existingZipCodesData = this.dataService.getData(forecastStorageKey);

            if (existingZipCodesData) {
              var _iterator2 = _createForOfIteratorHelper(existingZipCodesData),
                  _step2;

              try {
                var _loop = function _loop() {
                  var zipCode = _step2.value;

                  _this3.weatherApi.getCurrentWeatherByZipCode(zipCode).subscribe(function (loadedData) {
                    return _this3.addNewForecast(zipCode, loadedData);
                  }, function (err) {
                    return _this3.onForecastError(zipCode, err);
                  });
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        }, {
          key: "addNewForecast",
          value: function addNewForecast(zipCode, loadedData) {
            if (loadedData && loadedData.weather && loadedData.weather.length) {
              this.forecastData.push({
                zipCode: zipCode,
                // Loaded
                locationName: loadedData.name,
                currentConditions: loadedData.weather[0].main,
                maxToday: loadedData.main.temp_max,
                minToday: loadedData.main.temp_min,
                temperature: loadedData.main.temp,
                date: loadedData.dt * 1000
              });
              this.addedZipCodes$.next(this.forecastData);
            } else {
              console.warn('Got incorrect forecast response');
            }
          }
        }, {
          key: "onForecastError",
          value: function onForecastError(zipCode, err) {
            if (err.status === 404) {
              // incorrect zip code
              // just remove it
              this.removeZipCode(zipCode);
              console.warn("ZipCode=".concat(zipCode, " can't be found, we will delete it from your storage!"));
            }
          }
        }]);

        return ForecastService;
      }();

      ForecastService.ctorParameters = function () {
        return [{
          type: src_app_core_module_services__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _weather_api_service__WEBPACK_IMPORTED_MODULE_5__["WeatcherApiService"]
        }];
      };

      ForecastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_module_services__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _weather_api_service__WEBPACK_IMPORTED_MODULE_5__["WeatcherApiService"]])], ForecastService);
      /***/
    },

    /***/
    "wKXc":
    /*!*********************************************************************************************!*\
      !*** ./src/app/forecast-module/components/forecast-detailed/forecast-detailed.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ForecastDetailedComponent */

    /***/
    function wKXc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForecastDetailedComponent", function () {
        return ForecastDetailedComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forecast_detailed_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forecast-detailed.component.html */
      "Yuvo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ForecastDetailedComponent = /*#__PURE__*/function () {
        function ForecastDetailedComponent() {
          _classCallCheck(this, ForecastDetailedComponent);

          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        } // events


        _createClass(ForecastDetailedComponent, [{
          key: "onClose",
          value: function onClose() {
            this.close.emit(this.forecast);
          }
        }]);

        return ForecastDetailedComponent;
      }();

      ForecastDetailedComponent.propDecorators = {
        forecast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      ForecastDetailedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-forecast-detailed',
        template: _raw_loader_forecast_detailed_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ForecastDetailedComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forecast-module-forecast-module-es5.js.map