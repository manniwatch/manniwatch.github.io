(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-stop-point"],{

/***/ "JpNi":
/*!****************************************************************!*\
  !*** ./src/app/routes/stop-point/stop-point-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: StopPointRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopPointRoutingModule", function() { return StopPointRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _stop_point_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stop-point-info.component */ "dkjo");
/* harmony import */ var _stop_point_info_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stop-point-info.resolver */ "rR/C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const tripPassagesRoute = [
    {
        component: _stop_point_info_component__WEBPACK_IMPORTED_MODULE_1__["StopPointInfoComponent"],
        data: {
            openSidebar: true,
        },
        path: ':stopPointId',
        resolve: {
            stopPoint: _stop_point_info_resolver__WEBPACK_IMPORTED_MODULE_2__["StopPointInfoResolver"],
        },
    },
];
class StopPointRoutingModule {
}
StopPointRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: StopPointRoutingModule });
StopPointRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function StopPointRoutingModule_Factory(t) { return new (t || StopPointRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(tripPassagesRoute),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StopPointRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "NHX4":
/*!********************************************!*\
  !*** ./src/app/routes/stop-point/index.ts ***!
  \********************************************/
/*! exports provided: StopPointModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stop_point_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stop-point.module */ "vKE1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StopPointModule", function() { return _stop_point_module__WEBPACK_IMPORTED_MODULE_0__["StopPointModule"]; });

/*!
 * Source https://github.com/manniwatch/manniwatch Package: client-ng
 */



/***/ }),

/***/ "WBrc":
/*!**************************************************************!*\
  !*** ./src/app/routes/stop-point/stop-point-info.service.ts ***!
  \**************************************************************/
/*! exports provided: StopPointInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopPointInfoService", function() { return StopPointInfoService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ "o0su");





class StopPointInfoService {
    constructor(route, apiService, stopService, appRef) {
        this.route = route;
        this.apiService = apiService;
        this.stopService = stopService;
        this.appRef = appRef;
        this.stopPassageObservable = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((params) => {
            return params.stopPoint;
        }));
    }
    createStopPassageRefreshObservable() {
        return this.stopPassageObservable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((value) => {
            return this.appRef
                .isStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])((state) => state), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(5000)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => this.apiService
                    .getStopPointPassages(value.stopShortName)));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(value));
        }));
    }
    createStopPointLocationObservable() {
        return this.stopPassageObservable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((stopPassage) => {
            return this.stopService.watchStopPoint(stopPassage.stopShortName)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(undefined));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((stop) => {
            // tslint:disable-next-line:triple-equals
            if (stop == undefined) {
                return { map: { blur: true } };
            }
            else {
                return {
                    map: {
                        blur: false,
                        center: stop,
                    },
                };
            }
        }));
    }
}
StopPointInfoService.ɵfac = function StopPointInfoService_Factory(t) { return new (t || StopPointInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["StopPointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"])); };
StopPointInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StopPointInfoService, factory: StopPointInfoService.ɵfac });


/***/ }),

/***/ "dkjo":
/*!****************************************************************!*\
  !*** ./src/app/routes/stop-point/stop-point-info.component.ts ***!
  \****************************************************************/
/*! exports provided: StopPointInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopPointInfoComponent", function() { return StopPointInfoComponent; });
/* harmony import */ var _stop_point_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stop-point-info.service */ "WBrc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_header_box_header_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/header-box/header-box.component */ "FSSf");
/* harmony import */ var _modules_openlayers_ol_static_map_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/openlayers/ol-static-map.directive */ "2UN5");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _modules_departure_list_departure_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/departure-list/departure-list.component */ "rIFM");
/* harmony import */ var _modules_route_list_route_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/route-list/route-list.component */ "S256");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function StopPointInfoComponent_7_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Error occured");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Will retry in a 0s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StopPointInfoComponent_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, StopPointInfoComponent_7_ng_template_0_Template, 5, 0, "ng-template");
} }
class StopPointInfoComponent {
    constructor(stopInfoService) {
        this.stopInfoService = stopInfoService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.stopInfoService
            .createStopPointLocationObservable()
            .subscribe({
            next: (mapData) => {
                this.headerMapData = mapData;
            },
        }));
        this.subscriptions.push(this.stopInfoService
            .createStopPassageRefreshObservable()
            .subscribe({
            next: (mapData) => {
                this.stopPassage = mapData;
            },
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
        this.subscriptions = [];
    }
}
StopPointInfoComponent.ɵfac = function StopPointInfoComponent_Factory(t) { return new (t || StopPointInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stop_point_info_service__WEBPACK_IMPORTED_MODULE_0__["StopPointInfoService"])); };
StopPointInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StopPointInfoComponent, selectors: [["app-stop-point-info"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_stop_point_info_service__WEBPACK_IMPORTED_MODULE_0__["StopPointInfoService"]])], decls: 8, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Departures
         * @meaning tab header departures
         */
        const MSG_EXTERNAL_departures$$SRC_APP_ROUTES_STOP_POINT_STOP_POINT_INFO_COMPONENT_TS_1 = goog.getMsg("Departures");
        i18n_0 = MSG_EXTERNAL_departures$$SRC_APP_ROUTES_STOP_POINT_STOP_POINT_INFO_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:tab header departures|Departures@@departures␟891e36a38df10a0b8940219f4a51a03ea982c084␟1335502203219771538:Departures`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Routes
         * @meaning tab header routes
         */
        const MSG_EXTERNAL_Routes$$SRC_APP_ROUTES_STOP_POINT_STOP_POINT_INFO_COMPONENT_TS_3 = goog.getMsg("Routes");
        i18n_2 = MSG_EXTERNAL_Routes$$SRC_APP_ROUTES_STOP_POINT_STOP_POINT_INFO_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:tab header routes|Routes@@Routes␟41f0d60bbecc9f4b18c97c3656eeafe9a8f6d101␟99095597038876536:Routes`;
    } return [[3, "title"], ["appOlStatic", "", 3, "mapData"], ["mat-stretch-tabs", "", "dynamicHeight", ""], ["label", i18n_0], [3, "departures"], ["label", i18n_2], [3, "routes"], [4, "ngIf"], [1, "error-box"]]; }, template: function StopPointInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-header-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "map", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-departure-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-route-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StopPointInfoComponent_7_Template, 1, 0, undefined, 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx.stopPassage == null ? null : ctx.stopPassage.stopName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mapData", ctx.headerMapData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("departures", ctx.stopPassage == null ? null : ctx.stopPassage.actual);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routes", ctx.stopPassage == null ? null : ctx.stopPassage.routes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", false);
    } }, directives: [_modules_header_box_header_box_component__WEBPACK_IMPORTED_MODULE_2__["HeaderBoxComponent"], _modules_openlayers_ol_static_map_directive__WEBPACK_IMPORTED_MODULE_3__["OlStaticMapDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _modules_departure_list_departure_list_component__WEBPACK_IMPORTED_MODULE_5__["DepartureListComponent"], _modules_route_list_route_list_component__WEBPACK_IMPORTED_MODULE_6__["RouteListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["mat-tab-group[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\ndiv.error-box[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  background: #B00020;\n  color: white;\n  padding: 5px 20px 5px 20px;\n}\n\ndiv.error-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 30px;\n  padding: 0px;\n  margin: 0px;\n}\n\ndiv.error-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 20px;\n  padding: 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0b3AtcG9pbnQtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUVKOztBQURJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHUjs7QUFESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR1IiLCJmaWxlIjoic3RvcC1wb2ludC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRhYi1ncm91cHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5kaXYuZXJyb3ItYm94e1xuICAgIGZsZXg6MCAwIGF1dG87XG4gICAgYmFja2dyb3VuZDojQjAwMDIwO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6NXB4IDIwcHggNXB4IDIwcHg7XG4gICAgaDN7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6MHB4O1xuICAgICAgICBtYXJnaW46MHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgbWFyZ2luOjBweDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "rR/C":
/*!***************************************************************!*\
  !*** ./src/app/routes/stop-point/stop-point-info.resolver.ts ***!
  \***************************************************************/
/*! exports provided: StopPointInfoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopPointInfoResolver", function() { return StopPointInfoResolver; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





/**
 * Resolves information for a stop provided in the route parameter 'stopId'
 * Redirects to /stops if the server responds with an 404 status
 */
class StopPointInfoResolver {
    /**
     * Constructor
     * @param api the {@ApiService}
     * @param router the {@Router}
     */
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    /**
     * Resolves the stop information via the stopId param inside the route
     * @param route The RouteSnapshot
     * @param state The RouterState
     */
    resolve(route, state) {
        return this.api
            .getStopPointPassages(route.params.stopPointId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            if (err.status === 404) {
                this.router.navigate(['stops']);
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
        }));
    }
}
StopPointInfoResolver.ɵfac = function StopPointInfoResolver_Factory(t) { return new (t || StopPointInfoResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
StopPointInfoResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StopPointInfoResolver, factory: StopPointInfoResolver.ɵfac });


/***/ }),

/***/ "vKE1":
/*!********************************************************!*\
  !*** ./src/app/routes/stop-point/stop-point.module.ts ***!
  \********************************************************/
/*! exports provided: StopPointModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopPointModule", function() { return StopPointModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var src_app_modules_departure_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/departure-list */ "adpU");
/* harmony import */ var src_app_modules_header_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/header-box */ "3cPY");
/* harmony import */ var src_app_modules_openlayers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/openlayers */ "RSro");
/* harmony import */ var src_app_modules_route_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/route-list */ "Rfd2");
/* harmony import */ var _stop_point_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stop-point-info.component */ "dkjo");
/* harmony import */ var _stop_point_info_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stop-point-info.resolver */ "rR/C");
/* harmony import */ var _stop_point_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stop-point-routing.module */ "JpNi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
/*!
 * Source https://github.com/manniwatch/manniwatch Package: client-ng
 */














class StopPointModule {
}
StopPointModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: StopPointModule });
StopPointModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function StopPointModule_Factory(t) { return new (t || StopPointModule)(); }, providers: [
        _stop_point_info_resolver__WEBPACK_IMPORTED_MODULE_11__["StopPointInfoResolver"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_modules_departure_list__WEBPACK_IMPORTED_MODULE_6__["DepartureListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _stop_point_routing_module__WEBPACK_IMPORTED_MODULE_12__["StopPointRoutingModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            src_app_modules_header_box__WEBPACK_IMPORTED_MODULE_7__["HeaderBoxModule"],
            src_app_modules_openlayers__WEBPACK_IMPORTED_MODULE_8__["OlStaticMapModule"],
            src_app_modules_route_list__WEBPACK_IMPORTED_MODULE_9__["RouteListModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](StopPointModule, { declarations: [_stop_point_info_component__WEBPACK_IMPORTED_MODULE_10__["StopPointInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_modules_departure_list__WEBPACK_IMPORTED_MODULE_6__["DepartureListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
        _stop_point_routing_module__WEBPACK_IMPORTED_MODULE_12__["StopPointRoutingModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
        src_app_modules_header_box__WEBPACK_IMPORTED_MODULE_7__["HeaderBoxModule"],
        src_app_modules_openlayers__WEBPACK_IMPORTED_MODULE_8__["OlStaticMapModule"],
        src_app_modules_route_list__WEBPACK_IMPORTED_MODULE_9__["RouteListModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=routes-stop-point-es2015.js.map