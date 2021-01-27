(function () {
  function _templateObject2() {
    var data = _taggedTemplateLiteral([":tab header routes|Routes@@Routes\u241F41f0d60bbecc9f4b18c97c3656eeafe9a8f6d101\u241F99095597038876536:Routes"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral([":tab header departures|Departures@@departures\u241F891e36a38df10a0b8940219f4a51a03ea982c084\u241F1335502203219771538:Departures"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-stop"], {
    /***/
    "0Vwa":
    /*!**************************************!*\
      !*** ./src/app/routes/stop/index.ts ***!
      \**************************************/

    /*! exports provided: StopModule */

    /***/
    function Vwa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _stop_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stop.module */
      "bxZ4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StopModule", function () {
        return _stop_module__WEBPACK_IMPORTED_MODULE_0__["StopModule"];
      });
      /*!
       * Source https://github.com/manniwatch/manniwatch Package: client-ng
       */

      /***/

    },

    /***/
    "L/v7":
    /*!****************************************************!*\
      !*** ./src/app/routes/stop/stop-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: StopRoutingModule */

    /***/
    function LV7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StopRoutingModule", function () {
        return StopRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _stop_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stop-info.component */
      "L5AK");
      /* harmony import */


      var _stop_info_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stop-info.resolver */
      "Nn71");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var tripPassagesRoute = [{
        component: _stop_info_component__WEBPACK_IMPORTED_MODULE_1__["StopInfoComponent"],
        data: {
          openSidebar: true
        },
        path: ':stopId',
        resolve: {
          stopInfo: _stop_info_resolver__WEBPACK_IMPORTED_MODULE_2__["StopInfoResolver"]
        }
      }];

      var StopRoutingModule = function StopRoutingModule() {
        _classCallCheck(this, StopRoutingModule);
      };

      StopRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: StopRoutingModule
      });
      StopRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function StopRoutingModule_Factory(t) {
          return new (t || StopRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(tripPassagesRoute)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StopRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "L5AK":
    /*!****************************************************!*\
      !*** ./src/app/routes/stop/stop-info.component.ts ***!
      \****************************************************/

    /*! exports provided: StopInfoComponent */

    /***/
    function L5AK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StopInfoComponent", function () {
        return StopInfoComponent;
      });
      /* harmony import */


      var _stop_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stop-info.service */
      "pISL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _modules_header_box_header_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../modules/header-box/header-box.component */
      "FSSf");
      /* harmony import */


      var _modules_openlayers_ol_static_map_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../modules/openlayers/ol-static-map.directive */
      "2UN5");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _modules_departure_list_departure_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../modules/departure-list/departure-list.component */
      "rIFM");
      /* harmony import */


      var _modules_route_list_route_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../modules/route-list/route-list.component */
      "S256");

      var StopInfoComponent = /*#__PURE__*/function () {
        function StopInfoComponent(stopInfoService) {
          _classCallCheck(this, StopInfoComponent);

          this.stopInfoService = stopInfoService;
          this.subscriptions = [];
        }

        _createClass(StopInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscriptions.push(this.stopInfoService.createStopPassageRefreshObservable().subscribe({
              next: function next(val) {
                _this.stopPassage = val;
              }
            }));
            this.subscriptions.push(this.stopInfoService.createStopLocationObservable().subscribe({
              next: function next(stopLocation) {
                if (stopLocation) {
                  _this.headerMapData = {
                    map: {
                      center: stopLocation
                    },
                    stops: [stopLocation],
                    vehicles: undefined
                  };
                } else {
                  _this.headerMapData = {
                    map: {
                      blur: true,
                      center: undefined
                    }
                  };
                }
              }
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sub) {
              sub.unsubscribe();
            });
            this.subscriptions = [];
          }
        }]);

        return StopInfoComponent;
      }();

      StopInfoComponent.ɵfac = function StopInfoComponent_Factory(t) {
        return new (t || StopInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stop_info_service__WEBPACK_IMPORTED_MODULE_0__["StopInfoService"]));
      };

      StopInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: StopInfoComponent,
        selectors: [["app-stop-info"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_stop_info_service__WEBPACK_IMPORTED_MODULE_0__["StopInfoService"]])],
        decls: 7,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            /**
             * @desc Departures
             * @meaning tab header departures
             */
            var MSG_EXTERNAL_departures$$SRC_APP_ROUTES_STOP_STOP_INFO_COMPONENT_TS_1 = goog.getMsg("Departures");
            i18n_0 = MSG_EXTERNAL_departures$$SRC_APP_ROUTES_STOP_STOP_INFO_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject());
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            /**
             * @desc Routes
             * @meaning tab header routes
             */
            var MSG_EXTERNAL_Routes$$SRC_APP_ROUTES_STOP_STOP_INFO_COMPONENT_TS_3 = goog.getMsg("Routes");
            i18n_2 = MSG_EXTERNAL_Routes$$SRC_APP_ROUTES_STOP_STOP_INFO_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject2());
          }

          return [[3, "title"], ["appOlStatic", "", 3, "mapData"], ["mat-stretch-tabs", "", "dynamicHeight", ""], ["label", i18n_0], [3, "departures"], ["label", i18n_2], [3, "routes"]];
        },
        template: function StopInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.stopPassage == null ? null : ctx.stopPassage.stopName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mapData", ctx.headerMapData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("departures", ctx.stopPassage == null ? null : ctx.stopPassage.actual);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routes", ctx.stopPassage == null ? null : ctx.stopPassage.routes);
          }
        },
        directives: [_modules_header_box_header_box_component__WEBPACK_IMPORTED_MODULE_2__["HeaderBoxComponent"], _modules_openlayers_ol_static_map_directive__WEBPACK_IMPORTED_MODULE_3__["OlStaticMapDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _modules_departure_list_departure_list_component__WEBPACK_IMPORTED_MODULE_5__["DepartureListComponent"], _modules_route_list_route_list_component__WEBPACK_IMPORTED_MODULE_6__["RouteListComponent"]],
        styles: ["mat-tab-group[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\ndiv.error-box[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  background: #B00020;\n  color: white;\n  padding: 5px 20px 5px 20px;\n}\n\ndiv.error-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 30px;\n  padding: 0px;\n  margin: 0px;\n}\n\ndiv.error-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 20px;\n  padding: 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0b3AtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUVKOztBQURJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHUjs7QUFESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR1IiLCJmaWxlIjoic3RvcC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRhYi1ncm91cHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5kaXYuZXJyb3ItYm94e1xuICAgIGZsZXg6MCAwIGF1dG87XG4gICAgYmFja2dyb3VuZDojQjAwMDIwO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6NXB4IDIwcHggNXB4IDIwcHg7XG4gICAgaDN7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6MHB4O1xuICAgICAgICBtYXJnaW46MHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgbWFyZ2luOjBweDtcbiAgICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "Nn71":
    /*!***************************************************!*\
      !*** ./src/app/routes/stop/stop-info.resolver.ts ***!
      \***************************************************/

    /*! exports provided: StopInfoResolver */

    /***/
    function Nn71(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StopInfoResolver", function () {
        return StopInfoResolver;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /**
       * Resolves information for a stop provided in the route parameter 'stopId'
       * Redirects to /stops if the server responds with an 404 status
       */


      var StopInfoResolver = /*#__PURE__*/function () {
        /**
         * Constructor
         * @param api the {@ApiService}
         * @param router the {@Router}
         */
        function StopInfoResolver(api, router) {
          _classCallCheck(this, StopInfoResolver);

          this.api = api;
          this.router = router;
        }
        /**
         * Resolves the stop information via the stopId param inside the route
         * @param route The RouteSnapshot
         * @param state The RouterState
         */


        _createClass(StopInfoResolver, [{
          key: "resolve",
          value: function resolve(route, state) {
            var _this2 = this;

            return this.api.getStopPassages(route.params.stopId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              if (err.status === 404) {
                _this2.router.navigate(['stops']);
              }

              return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
            }));
          }
        }]);

        return StopInfoResolver;
      }();

      StopInfoResolver.ɵfac = function StopInfoResolver_Factory(t) {
        return new (t || StopInfoResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      StopInfoResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: StopInfoResolver,
        factory: StopInfoResolver.ɵfac
      });
      /***/
    },

    /***/
    "bxZ4":
    /*!********************************************!*\
      !*** ./src/app/routes/stop/stop.module.ts ***!
      \********************************************/

    /*! exports provided: StopModule */

    /***/
    function bxZ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StopModule", function () {
        return StopModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var src_app_modules_departure_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/departure-list */
      "adpU");
      /* harmony import */


      var src_app_modules_header_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/header-box */
      "3cPY");
      /* harmony import */


      var src_app_modules_openlayers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modules/openlayers */
      "RSro");
      /* harmony import */


      var src_app_modules_route_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/modules/route-list */
      "Rfd2");
      /* harmony import */


      var _stop_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./stop-info.component */
      "L5AK");
      /* harmony import */


      var _stop_info_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./stop-info.resolver */
      "Nn71");
      /* harmony import */


      var _stop_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./stop-routing.module */
      "L/v7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /*!
       * Source https://github.com/manniwatch/manniwatch Package: client-ng
       */


      var StopModule = function StopModule() {
        _classCallCheck(this, StopModule);
      };

      StopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: StopModule
      });
      StopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        factory: function StopModule_Factory(t) {
          return new (t || StopModule)();
        },
        providers: [_stop_info_resolver__WEBPACK_IMPORTED_MODULE_11__["StopInfoResolver"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _stop_routing_module__WEBPACK_IMPORTED_MODULE_12__["StopRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], src_app_modules_departure_list__WEBPACK_IMPORTED_MODULE_6__["DepartureListModule"], src_app_modules_header_box__WEBPACK_IMPORTED_MODULE_7__["HeaderBoxModule"], src_app_modules_openlayers__WEBPACK_IMPORTED_MODULE_8__["OlStaticMapModule"], src_app_modules_route_list__WEBPACK_IMPORTED_MODULE_9__["RouteListModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](StopModule, {
          declarations: [_stop_info_component__WEBPACK_IMPORTED_MODULE_10__["StopInfoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _stop_routing_module__WEBPACK_IMPORTED_MODULE_12__["StopRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], src_app_modules_departure_list__WEBPACK_IMPORTED_MODULE_6__["DepartureListModule"], src_app_modules_header_box__WEBPACK_IMPORTED_MODULE_7__["HeaderBoxModule"], src_app_modules_openlayers__WEBPACK_IMPORTED_MODULE_8__["OlStaticMapModule"], src_app_modules_route_list__WEBPACK_IMPORTED_MODULE_9__["RouteListModule"]]
        });
      })();
      /***/

    },

    /***/
    "pISL":
    /*!**************************************************!*\
      !*** ./src/app/routes/stop/stop-info.service.ts ***!
      \**************************************************/

    /*! exports provided: StopInfoService */

    /***/
    function pISL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StopInfoService", function () {
        return StopInfoService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services */
      "o0su");

      var StopInfoService = /*#__PURE__*/function () {
        function StopInfoService(route, apiService, stopService, appRef) {
          _classCallCheck(this, StopInfoService);

          this.route = route;
          this.apiService = apiService;
          this.stopService = stopService;
          this.appRef = appRef;
          this.stopInfoObservable = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return data.stopInfo;
          }));
        }

        _createClass(StopInfoService, [{
          key: "createStopLocationObservable",
          value: function createStopLocationObservable() {
            var _this3 = this;

            return this.stopInfoObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (value) {
              return _this3.stopService.filterStop(value.stopShortName);
            }));
          }
        }, {
          key: "createStopPassageRefreshObservable",
          value: function createStopPassageRefreshObservable() {
            var _this4 = this;

            return this.stopInfoObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (value) {
              return _this4.appRef.isStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(function (state) {
                return state;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(10000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function () {
                  return _this4.apiService.getStopPassages(value.stopShortName);
                }));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(value));
            }));
          }
        }]);

        return StopInfoService;
      }();

      StopInfoService.ɵfac = function StopInfoService_Factory(t) {
        return new (t || StopInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["StopPointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"]));
      };

      StopInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: StopInfoService,
        factory: StopInfoService.ɵfac
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=routes-stop-es5.js.map