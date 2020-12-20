(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Codes\jsProjs\ngCert\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1VHI":
    /*!************************************!*\
      !*** ./src/app/hello.component.ts ***!
      \************************************/

    /*! exports provided: HelloComponent */

    /***/
    function VHI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelloComponent", function () {
        return HelloComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HelloComponent = function HelloComponent() {
        _classCallCheck(this, HelloComponent);
      };

      HelloComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'hello',
        template: "<h1>Hello {{name}}!</h1>",
        styles: ["h1 { font-family: Lato; }"]
      })], HelloComponent);
      /***/
    },

    /***/
    "4ae2":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-module/components/not-found/not-found.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ae2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4>We can't find the page that you're looking for</h4>";
      /***/
    },

    /***/
    "6tkn":
    /*!***************************************************************************!*\
      !*** ./src/app/shared-module/components/not-found/not-found.component.ts ***!
      \***************************************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function tkn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "4ae2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotFoundComponent = function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      };

      NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], NotFoundComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\r\n  font-family: Lato;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "B+dw":
    /*!********************************************!*\
      !*** ./src/app/core-module/core.module.ts ***!
      \********************************************/

    /*! exports provided: CoreModule */

    /***/
    function BDw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services */
      "syQv"); // Services


      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [],
        providers: [// Services
        _services__WEBPACK_IMPORTED_MODULE_3__["StorageService"]],
        exports: []
      })], CoreModule);
      /***/
    },

    /***/
    "CfCS":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-module/components/loading-indicator/loading-indicator.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CfCS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4>Loading{{dots}}</h4>";
      /***/
    },

    /***/
    "Dk7Y":
    /*!************************************************!*\
      !*** ./src/app/shared-module/shared.module.ts ***!
      \************************************************/

    /*! exports provided: SharedModule */

    /***/
    function Dk7Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components */
      "X6ln"); // locals


      var sharedComponents = [_components__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["WeatherIconComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["LoadingIndicatorComponent"]];

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
        declarations: [].concat(sharedComponents),
        exports: [// Angular
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]].concat(sharedComponents)
      })], SharedModule);
      /***/
    },

    /***/
    "EsDi":
    /*!*******************************************************************************!*\
      !*** ./src/app/shared-module/components/weather-icon/weather-icon.styles.css ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function EsDi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXItaWNvbi5zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJ3ZWF0aGVyLWljb24uc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "KpR3":
    /*!*********************************************************************************!*\
      !*** ./src/app/shared-module/components/weather-icon/weather-icon.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: WeatherIconComponent */

    /***/
    function KpR3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeatherIconComponent", function () {
        return WeatherIconComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_weather_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./weather-icon.component.html */
      "qCIs");
      /* harmony import */


      var _weather_icon_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./weather-icon.styles.css */
      "EsDi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var WeatherIconComponent = /*#__PURE__*/function () {
        function WeatherIconComponent(sanitizer) {
          _classCallCheck(this, WeatherIconComponent);

          this.sanitizer = sanitizer;
          this.weatherName = 'Clear';
        }

        _createClass(WeatherIconComponent, [{
          key: "iconUrl",
          get: function get() {
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
        }]);

        return WeatherIconComponent;
      }();

      WeatherIconComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }];
      };

      WeatherIconComponent.propDecorators = {
        weatherName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      WeatherIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-weather-icon',
        template: _raw_loader_weather_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_weather_icon_styles_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])], WeatherIconComponent);
      /***/
    },

    /***/
    "LT/0":
    /*!*********************************************************!*\
      !*** ./src/app/core-module/services/storage.service.ts ***!
      \*********************************************************/

    /*! exports provided: StorageService */

    /***/
    function LT0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var storageDataKey = 'storageData';

      var StorageService = /*#__PURE__*/function () {
        function StorageService() {
          _classCallCheck(this, StorageService);
        }

        _createClass(StorageService, [{
          key: "getData",
          value: function getData(key) {
            var dataFromStore = window.localStorage[this.createLocalKey(key)];

            if (dataFromStore) {
              return JSON.parse(dataFromStore);
            }

            return null;
          }
        }, {
          key: "saveData",
          value: function saveData(key, data) {
            window.localStorage[this.createLocalKey(key)] = JSON.stringify(data);
          }
        }, {
          key: "destroyData",
          value: function destroyData(key) {
            window.localStorage.removeItem(this.createLocalKey(key));
          }
        }, {
          key: "createLocalKey",
          value: function createLocalKey(inputKey) {
            return "".concat(storageDataKey, "-").concat(inputKey);
          }
        }]);

        return StorageService;
      }();

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], StorageService);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.name = 'Angular';
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "X6ln":
    /*!***************************************************!*\
      !*** ./src/app/shared-module/components/index.ts ***!
      \***************************************************/

    /*! exports provided: NotFoundComponent, WeatherIconComponent, LoadingIndicatorComponent */

    /***/
    function X6ln(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      "6tkn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"];
      });
      /* harmony import */


      var _weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./weather-icon/weather-icon.component */
      "KpR3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WeatherIconComponent", function () {
        return _weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_1__["WeatherIconComponent"];
      });
      /* harmony import */


      var _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loading-indicator/loading-indicator.component */
      "trrD");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoadingIndicatorComponent", function () {
        return _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_2__["LoadingIndicatorComponent"];
      });
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_module_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core-module/core.module */
      "B+dw");
      /* harmony import */


      var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared-module/shared.module */
      "Dk7Y");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _hello_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./hello.component */
      "1VHI"); // Modules
      // Locals


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [// angular
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], // imports
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _core_module_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _hello_component__WEBPACK_IMPORTED_MODULE_8__["HelloComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/
      // import 'core-js/es6/symbol';
      // import 'core-js/es6/object';
      // import 'core-js/es6/function';
      // import 'core-js/es6/parse-int';
      // import 'core-js/es6/parse-float';
      // import 'core-js/es6/number';
      // import 'core-js/es6/math';
      // import 'core-js/es6/string';
      // import 'core-js/es6/date';
      // import 'core-js/es6/array';
      // import 'core-js/es6/regexp';
      // import 'core-js/es6/map';
      // import 'core-js/es6/set';

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /** Evergreen browsers require these. **/
      // import 'core-js/es6/reflect';
      // import 'core-js/es7/reflect';

      /**
       * Web Animations `@angular/platform-browser/animations`
       * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
       * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
       */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    },

    /***/
    "qCIs":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-module/components/weather-icon/weather-icon.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qCIs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"iconUrl\">\r\n    <img [src]=\"iconUrl\" />\r\n</ng-container>";
      /***/
    },

    /***/
    "syQv":
    /*!***********************************************!*\
      !*** ./src/app/core-module/services/index.ts ***!
      \***********************************************/

    /*! exports provided: StorageService */

    /***/
    function syQv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./storage.service */
      "LT/0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return _storage_service__WEBPACK_IMPORTED_MODULE_0__["StorageService"];
      });
      /***/

    },

    /***/
    "trrD":
    /*!*******************************************************************************************!*\
      !*** ./src/app/shared-module/components/loading-indicator/loading-indicator.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: LoadingIndicatorComponent */

    /***/
    function trrD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingIndicatorComponent", function () {
        return LoadingIndicatorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_loading_indicator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./loading-indicator.component.html */
      "CfCS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoadingIndicatorComponent = /*#__PURE__*/function () {
        function LoadingIndicatorComponent() {
          _classCallCheck(this, LoadingIndicatorComponent);

          this.dots = '.';
        }

        _createClass(LoadingIndicatorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (!this.timer) {
              this.timer = setInterval(function () {
                if (_this.dots.length == 3) {
                  _this.dots = '.';
                } else {
                  _this.dots += '.';
                }
              }, 330);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearInterval(this.timer);
          }
        }]);

        return LoadingIndicatorComponent;
      }();

      LoadingIndicatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-loading-indicator',
        template: _raw_loader_loading_indicator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LoadingIndicatorComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _shared_module_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared-module/components */
      "X6ln"); // Components


      var routes = [{
        path: '',
        pathMatch: 'full',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forecast-module-forecast-module */
          "forecast-module-forecast-module").then(__webpack_require__.bind(null,
          /*! ./forecast-module/forecast.module */
          "Br1w")).then(function (m) {
            return m.ForecastModule;
          });
        }
      }, {
        path: 'forecast',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forecast-module-forecast-module */
          "forecast-module-forecast-module").then(__webpack_require__.bind(null,
          /*! ./forecast-module/forecast.module */
          "Br1w")).then(function (m) {
            return m.ForecastModule;
          });
        }
      }, {
        path: '**',
        component: _shared_module_components__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
        canActivate: []
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          useHash: true
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map