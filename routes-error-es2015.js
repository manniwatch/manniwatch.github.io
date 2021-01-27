(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-error"],{

/***/ "+1lk":
/*!*****************************************************!*\
  !*** ./src/app/routes/error/not-found.component.ts ***!
  \*****************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _not_found_msg_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found-msg-switch.component */ "Ahdb");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");








const _c0 = function (a0) { return [a0]; };
function NotFoundComponent_mat_list_item_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const endpoint_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, endpoint_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](endpoint_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](endpoint_r1.title);
} }
/**
 * Component to be displayed for Errors with non found resources.
 * Offers links to common entry points
 */
class NotFoundComponent {
    constructor() {
        /**
         * List of entry points
         */
        this.endpoints = [{
                icon: 'home',
                path: '/',
                title: 'Home',
            }, {
                icon: 'place',
                path: '/stops',
                title: 'Stops',
            }];
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 12, vars: 1, consts: [[1, "header"], [1, "content"], ["role", "list"], ["role", "listitem", 3, "routerLink", 4, "ngFor", "ngForOf"], ["role", "listitem", 3, "routerLink"], ["matListIcon", ""], ["matLine", ""]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-not-found-msg-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "You might want to go to:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NotFoundComponent_mat_list_item_11_Template, 5, 5, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.endpoints);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _not_found_msg_switch_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundMessageSwitchComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLine"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-flow: column;\n  height: 100%;\n  background: #F9F9F9;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vw / 4 * 3);\n  width: 100%;\n  max-height: 250px;\n  min-height: 150px;\n  background: #999999;\n}\n\n.header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  margin: auto;\n  width: 64px;\n  height: 64px;\n  font-size: 64px;\n}\n\ndiv.content[_ngcontent-%COMP%] {\n  margin: 10px 20px 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVSOztBQUNBO0VBQ0ksMkJBQUE7QUFFSiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRjlGOUY5O1xufVxuXG4uaGVhZGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6Y2FsYygxMDB2dyAvIDQgKiAzKTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgIG1pbi1oZWlnaHQ6MTUwcHg7XG4gICAgYmFja2dyb3VuZDojOTk5OTk5O1xuICAgIG1hdC1pY29ue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDowcHg7XG4gICAgICAgIHJpZ2h0OjBweDtcbiAgICAgICAgYm90dG9tOjBweDtcbiAgICAgICAgbGVmdDowcHg7XG4gICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICB3aWR0aDo2NHB4O1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICB9XG59XG5kaXYuY29udGVudHtcbiAgICBtYXJnaW46MTBweCAyMHB4IDEwcHggMjBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "Ahdb":
/*!****************************************************************!*\
  !*** ./src/app/routes/error/not-found-msg-switch.component.ts ***!
  \****************************************************************/
/*! exports provided: NotFoundMessageSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundMessageSwitchComponent", function() { return NotFoundMessageSwitchComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _error_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-type */ "bv2a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NotFoundMessageSwitchComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "The passage could not be found. It either expired or has yet to start.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Please select another passage.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function NotFoundMessageSwitchComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "The requested vehicle could not be found. It might not be active at the moment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function NotFoundMessageSwitchComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "The requested resource can not be found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
/**
 * Component showing eventually more helpful error message for non found elements.
 */
class NotFoundMessageSwitchComponent {
    constructor(route) {
        this.route = route;
        this.errorTypeObservable = this.route.queryParams
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((value) => {
            if (value.type) {
                return value.type;
            }
            return _error_type__WEBPACK_IMPORTED_MODULE_1__["ErrorType"].UNKNOWN;
        }));
    }
}
NotFoundMessageSwitchComponent.ɵfac = function NotFoundMessageSwitchComponent_Factory(t) { return new (t || NotFoundMessageSwitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
NotFoundMessageSwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NotFoundMessageSwitchComponent, selectors: [["app-not-found-msg-switch"]], decls: 5, vars: 5, consts: [[1, "info", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]], template: function NotFoundMessageSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NotFoundMessageSwitchComponent_ng_container_2_Template, 5, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NotFoundMessageSwitchComponent_ng_container_3_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NotFoundMessageSwitchComponent_ng_container_4_Template, 3, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx.errorTypeObservable));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchDefault"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vdC1mb3VuZC1tc2ctc3dpdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6Im5vdC1mb3VuZC1tc2ctc3dpdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"] });


/***/ }),

/***/ "CnLE":
/*!***************************************!*\
  !*** ./src/app/routes/error/index.ts ***!
  \***************************************/
/*! exports provided: ErrorType, ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-type */ "bv2a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return _error_type__WEBPACK_IMPORTED_MODULE_0__["ErrorType"]; });

/* harmony import */ var _error_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.module */ "xguD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return _error_module__WEBPACK_IMPORTED_MODULE_1__["ErrorModule"]; });

/*!
 * Source https://github.com/manniwatch/manniwatch Package: client-ng
 */




/***/ }),

/***/ "bv2a":
/*!********************************************!*\
  !*** ./src/app/routes/error/error-type.ts ***!
  \********************************************/
/*! exports provided: ErrorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return ErrorType; });
/*!
 * Source https://github.com/manniwatch/manniwatch Package: client-ng
 */
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["PASSAGE_NOT_FOUND"] = 1] = "PASSAGE_NOT_FOUND";
    ErrorType[ErrorType["VEHICLE_NOT_FOUND"] = 2] = "VEHICLE_NOT_FOUND";
    ErrorType[ErrorType["STOP_NOT_FOUND"] = 3] = "STOP_NOT_FOUND";
    ErrorType[ErrorType["UNKNOWN"] = 0] = "UNKNOWN";
})(ErrorType || (ErrorType = {}));


/***/ }),

/***/ "ii8z":
/*!******************************************************!*\
  !*** ./src/app/routes/error/error-routing.module.ts ***!
  \******************************************************/
/*! exports provided: ErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function() { return ErrorRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-error.component */ "zj5l");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "+1lk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const errorRoutes = [
    {
        component: _common_error_component__WEBPACK_IMPORTED_MODULE_1__["CommonErrorComponent"],
        path: '',
    },
    {
        component: _not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"],
        path: 'not-found',
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];
class ErrorRoutingModule {
}
ErrorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ErrorRoutingModule });
ErrorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ErrorRoutingModule_Factory(t) { return new (t || ErrorRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(errorRoutes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ErrorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xguD":
/*!**********************************************!*\
  !*** ./src/app/routes/error/error.module.ts ***!
  \**********************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _common_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-error.component */ "zj5l");
/* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-routing.module */ "ii8z");
/* harmony import */ var _not_found_msg_switch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found-msg-switch.component */ "Ahdb");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found.component */ "+1lk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/*!
 * Source https://github.com/manniwatch/manniwatch Package: client-ng
 */









class ErrorModule {
}
ErrorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ErrorModule });
ErrorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function ErrorModule_Factory(t) { return new (t || ErrorModule)(); }, providers: [], imports: [[
            _error_routing_module__WEBPACK_IMPORTED_MODULE_5__["ErrorRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ErrorModule, { declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
        _common_error_component__WEBPACK_IMPORTED_MODULE_4__["CommonErrorComponent"],
        _not_found_msg_switch_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundMessageSwitchComponent"]], imports: [_error_routing_module__WEBPACK_IMPORTED_MODULE_5__["ErrorRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"]] }); })();


/***/ }),

/***/ "zj5l":
/*!********************************************************!*\
  !*** ./src/app/routes/error/common-error.component.ts ***!
  \********************************************************/
/*! exports provided: CommonErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonErrorComponent", function() { return CommonErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


/**
 * Common Error component
 */
class CommonErrorComponent {
}
CommonErrorComponent.ɵfac = function CommonErrorComponent_Factory(t) { return new (t || CommonErrorComponent)(); };
CommonErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonErrorComponent, selectors: [["app-common-error"]], decls: 7, vars: 0, consts: [[1, "header"]], template: function CommonErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Error Occured");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "An error occured while performing an action.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-flow: column;\n  height: 100%;\n  background: #F9F9F9;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vw / 4 * 3);\n  width: 100%;\n  max-height: 250px;\n  min-height: 150px;\n  background: #999999;\n}\n\n.header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  margin: auto;\n  width: 64px;\n  height: 64px;\n  font-size: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbW1vbi1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVSIiwiZmlsZSI6ImNvbW1vbi1lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNGOUY5Rjk7XG59XG5cbi5oZWFkZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDpjYWxjKDEwMHZ3IC8gNCAqIDMpO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgbWluLWhlaWdodDoxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiM5OTk5OTk7XG4gICAgbWF0LWljb257XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOjBweDtcbiAgICAgICAgcmlnaHQ6MHB4O1xuICAgICAgICBib3R0b206MHB4O1xuICAgICAgICBsZWZ0OjBweDtcbiAgICAgICAgbWFyZ2luOmF1dG87XG4gICAgICAgIHdpZHRoOjY0cHg7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgIH1cbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=routes-error-es2015.js.map