(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-search"],{

/***/ "E4Qi":
/*!********************************************************!*\
  !*** ./src/app/routes/search/search-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_result_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-result.resolver */ "ILPs");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ "m7zM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const tripPassagesRoute = [
    {
        component: _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"],
        path: '',
        resolve: {
            results: _search_result_resolver__WEBPACK_IMPORTED_MODULE_1__["SearchResultResolver"],
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    },
];
class SearchRoutingModule {
}
SearchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SearchRoutingModule });
SearchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function SearchRoutingModule_Factory(t) { return new (t || SearchRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(tripPassagesRoute),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SearchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ILPs":
/*!*********************************************************!*\
  !*** ./src/app/routes/search/search-result.resolver.ts ***!
  \*********************************************************/
/*! exports provided: SearchResultResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultResolver", function() { return SearchResultResolver; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_stop_point_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stop-point.service */ "actC");



class SearchResultResolver {
    constructor(stopService) {
        this.stopService = stopService;
    }
    resolve(route, state) {
        return this.stopService.stopObservable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((stops) => stops
            /**
             * Filter by search term
             */
            .filter((option) => option.name.toLowerCase().includes(route.queryParams.q))
            .sort((a, b) => a.name.localeCompare(b.name))));
    }
}
SearchResultResolver.ɵfac = function SearchResultResolver_Factory(t) { return new (t || SearchResultResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_stop_point_service__WEBPACK_IMPORTED_MODULE_2__["StopPointService"])); };
SearchResultResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SearchResultResolver, factory: SearchResultResolver.ɵfac });


/***/ }),

/***/ "cHiq":
/*!************************************************!*\
  !*** ./src/app/routes/search/search.module.ts ***!
  \************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _search_result_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-result.resolver */ "ILPs");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-routing.module */ "E4Qi");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.component */ "m7zM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/*!
 * Source https://github.com/manniwatch/manniwatch Package: client-ng
 */







class SearchModule {
}
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, providers: [
        _search_result_resolver__WEBPACK_IMPORTED_MODULE_3__["SearchResultResolver"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_4__["SearchRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _search_routing_module__WEBPACK_IMPORTED_MODULE_4__["SearchRoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]] }); })();


/***/ }),

/***/ "m7zM":
/*!***************************************************!*\
  !*** ./src/app/routes/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");









const _c0 = function (a1) { return ["/stop", a1]; };
function SearchComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, item_r1.shortName));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.name);
} }
class SearchComponent {
    constructor(activatedRoute, titleService) {
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.data = '';
        this.resultObservable = rxjs__WEBPACK_IMPORTED_MODULE_0__["NEVER"];
    }
    get results() {
        return this.resultObservable;
    }
    ngOnInit() {
        this.searchParamSubscription = this.activatedRoute
            .queryParams.subscribe((value) => {
            this.data = value.q ? value.q : '';
            this.titleService.setTitle('Search - \"' + this.data + '\"');
        });
        this.resultObservable = this.activatedRoute.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((val) => {
            if (val.results) {
                return val.results;
            }
            return [];
        }));
    }
    ngOnDestroy() {
        if (this.searchParamSubscription) {
            this.searchParamSubscription.unsubscribe();
        }
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 3, vars: 3, consts: [["role", "navigation"], ["role", "listitem", 3, "routerLink", 4, "ngFor", "ngForOf"], ["role", "listitem", 3, "routerLink"], ["mat-list-icon", ""], ["mat-line", ""]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-nav-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchComponent_a_1_Template, 6, 4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.results));
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLine"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["[_nghost-%COMP%]    > mat-nav-list[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n@media (max-width: 440px) and (min-width: 401px) {\n  [_nghost-%COMP%]    > mat-nav-list[_ngcontent-%COMP%] {\n    padding-top: calc(50px + 1.25*(100vw - 400px) );\n  }\n}\n\n@media (max-width: 400px) {\n  [_nghost-%COMP%]    > mat-nav-list[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFBO0FBRko7O0FBSUE7RUFDSTtJQUNJLCtDQUFBO0VBRE47QUFDRjs7QUFHQTtFQUNJO0lBQ0ksZ0JBQUE7RUFETjtBQUNGIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCAnLi8uLi8uLi9ib3gtc2V0dGluZ3Muc2Nzcyc7XG4kdG9wcGFkZGluZzogMTAwcHg7XG46aG9zdCA+IG1hdC1uYXYtbGlzdHtcbiAgICBwYWRkaW5nLXRvcDoxMDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAjeyRib3hNYXhXaWR0aCArICgyICogJGJveE1hcmdpbkhvcml6b250YWwpfSkgYW5kIChtaW4td2lkdGg6ICN7JGJveE1heFdpZHRoICsgMX0pe1xuICAgIDpob3N0ID4gbWF0LW5hdi1saXN0e1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyg1MHB4ICsgI3skdG9wcGFkZGluZyAvKDQgKiAkYm94TWFyZ2luSG9yaXpvbnRhbCl9KigxMDB2dyAtICN7JGJveE1heFdpZHRofSkgKTtcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogI3skYm94TWF4V2lkdGh9KXtcbiAgICA6aG9zdCA+IG1hdC1uYXYtbGlzdHtcbiAgICAgICAgcGFkZGluZy10b3A6MHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "z9s+":
/*!****************************************!*\
  !*** ./src/app/routes/search/index.ts ***!
  \****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.module */ "cHiq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return _search_module__WEBPACK_IMPORTED_MODULE_0__["SearchModule"]; });

/*!
 * Source https://github.com/manniwatch/manniwatch Package: client-ng
 */



/***/ })

}]);
//# sourceMappingURL=routes-search-es2015.js.map