function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function _templateObject2(){var t=_taggedTemplateLiteral([":@@stopName\u241fcda036c397ca09cd2a0a308899f03908182f5e6b\u241f6695271591602705899:Stop name"]);return _templateObject2=function(){return t},t}function _templateObject(){var t=_taggedTemplateLiteral([":@@busStopIcon\u241fc5b9c1505998539fbe7799f39d5599f65afb24cb\u241f2554385076132608454:Bus stop icon"]);return _templateObject=function(){return t},t}function _taggedTemplateLiteral(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{SIQ7:function(t,e,a){"use strict";a.r(e),a.d(e,"TripPassagesModule",(function(){return et}));var n,s,r=a("ofXK"),i=a("NFeN"),o=a("MutI"),c=a("3cPY"),p=a("RSro"),u=a("tyNb"),l=a("2Vo4"),f=a("VRyK"),b=a("PqYM"),g=a("SxV6"),h=a("5+tZ"),d=a("lJxs"),O=a("Kqap"),m=a("vkgz"),_=a("eIep"),v=a("IzEk"),y=a("LRne"),P=a("JIr8"),C=function(t){return t[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED",t[t.ERROR=3]="ERROR",t[t.PAUSED=4]="PAUSED",t[t.UNKNOWN=5]="UNKNOWN",t[t.NOT_FOUND=404]="NOT_FOUND",t[t.SERVER_ERROR=500]="SERVER_ERROR",t}({}),I=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"convertResponse",value:function(t){return Object(d.a)((function(t){return{failures:0,status:C.LOADED,timestamp:Date.now(),tripId:t.tripId,tripInfo:t}}))}},{key:"handleError",value:function(t){return Object(P.a)((function(e){return e&&e.status?Object(y.a)({failures:1,passages:void 0,status:e.status>=500&&e.status<600?C.SERVER_ERROR:e.status,timestamp:Date.now(),tripId:t}):Object(y.a)({failures:1,passages:void 0,status:C.ERROR,timestamp:Date.now(),tripId:t})}))}}]),t}(),j=a("fXoL"),S=a("o0su"),A=((n=function(){function t(e,a,n,s){_classCallCheck(this,t),this.route=e,this.apiService=a,this.vehicleService=n,this.appRef=s,this.statusSubject=new l.a(e.snapshot.data.tripPassages),this.statusObservable=this.createStatusObservable(this.statusSubject)}return _createClass(t,[{key:"createStatusObservable",value:function(t){var e=this,a=this.createRefreshPollObservable(t);return this.appRef.isStable.pipe(Object(g.a)(),Object(h.a)((function(){return Object(f.a)(e.route.data.pipe(Object(d.a)((function(t){return t.tripPassages}))),a).pipe(Object(O.a)((function(t,e,a){if(e.failures>0){var n=Object.assign({},e);return n.failures=e.failures+t.failures,n}return e})),Object(m.a)((function(e){return t.next(e)})))})))}},{key:"createRefreshPollObservable",value:function(t){var e=this;return t.pipe(Object(_.a)((function(t){return e.createDelayedPassageRequest(t.tripId,t.status===C.LOADED?1e4:2e4)})))}},{key:"createDelayedPassageRequest",value:function(t,e){var a=this;return Object(b.a)(e).pipe(Object(v.a)(1),Object(h.a)((function(){return a.apiService.getTripPassages(t)})),I.convertResponse(t),I.handleError(t))}},{key:"createStopLocationObservable",value:function(){var t=this;return this.route.data.pipe(Object(d.a)((function(t){return t.tripPassages})),Object(_.a)((function(e){return t.vehicleService.getVehicleByTripId(e.tripId)})))}}]),t}()).\u0275fac=function(t){return new(t||n)(j.Wb(u.a),j.Wb(S.a),j.Wb(S.d),j.Wb(j.g))},n.\u0275prov=j.Hb({token:n,factory:n.\u0275fac}),n),k=a("FSSf"),M=a("2UN5"),R=a("oOFT"),T=a("LPPQ"),E=a("jG/O"),D=a("7xvl"),w=a("sWYD"),L=a("FKr1"),N=["aria-label",$localize(_templateObject())],x=["aria-label",$localize(_templateObject2())],z=function(t){return["/stop",t]},F=((s=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"departed",get:function(){return!!this.passage&&this.passage.status===R.VEHICLE_STATUS.DEPARTED}},{key:"stopping",get:function(){return!!this.passage&&this.passage.status===R.VEHICLE_STATUS.STOPPING}},{key:"passageTime",get:function(){if(this.passage){var t=this.passage.actualTime||this.passage.plannedTime;if(t){var e=Object(T.a)(t,"HH:mm",new Date),a=Object(E.a)(e,new Date);return Math.abs(a)<15?Object(D.a)(e,{addSuffix:!0}):Object(w.a)(e,"p")}}return"No departure time"}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=j.Fb({type:s,selectors:[["app-trip-passages-list-item"]],hostVars:4,hostBindings:function(t,e){2&t&&j.Cb("departed",e.departed)("stopping",e.stopping)},inputs:{passage:"passage"},decls:11,vars:6,consts:[["mat-list-item","","role","listitem",3,"routerLink"],["matListIcon","","role","figure",6,"aria-label"],["matLine","",1,"title",6,"aria-label"],["matLine","",1,"subtitle"],["role","timer"],["role","status",1,"demo-2"]],template:function(t,e){1&t&&(j.Qb(0,"a",0),j.Qb(1,"mat-icon",1),j.Vb(2,N),j.Pb(),j.Qb(3,"h4",2),j.Vb(4,x),j.Ac(5),j.Pb(),j.Qb(6,"p",3),j.Qb(7,"span",4),j.Ac(8),j.Qb(9,"span",5),j.Ac(10),j.Pb(),j.Pb(),j.Pb(),j.Pb()),2&t&&(j.jc("routerLink",j.oc(4,z,null==e.passage||null==e.passage.stop?null:e.passage.stop.shortName)),j.Ab(5),j.Bc(null==e.passage||null==e.passage.stop?null:e.passage.stop.name),j.Ab(3),j.Bc(e.passageTime),j.Ab(2),j.Cc("\xa0-- ",null==e.passage?null:e.passage.status,""))},directives:[o.c,u.h,i.a,o.b,L.f],styles:['mat-icon[matListIcon][_ngcontent-%COMP%]:after{content:"directions_bus"}.departed[_nghost-%COMP%]   a[_ngcontent-%COMP%], .departed   [_nghost-%COMP%]   a[_ngcontent-%COMP%]{opacity:.75!important;background-color:rgba(0,0,0,.1)}.departed[_nghost-%COMP%]   mat-icon[matListIcon][_ngcontent-%COMP%]:after, .departed   [_nghost-%COMP%]   mat-icon[matListIcon][_ngcontent-%COMP%]:after{content:"transfer_within_a_station"}.stopping[_nghost-%COMP%]   a[_ngcontent-%COMP%], .stopping   [_nghost-%COMP%]   a[_ngcontent-%COMP%]{background-color:rgba(0,255,0,.1)}.stopping[_nghost-%COMP%]   mat-icon[matListIcon][_ngcontent-%COMP%]:after, .stopping   [_nghost-%COMP%]   mat-icon[matListIcon][_ngcontent-%COMP%]:after{content:"place"}h4.title[_ngcontent-%COMP%]{font-size:16px!important;font-weight:700!important;opacity:.87}h4.title[_ngcontent-%COMP%], p.subtitle[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}p.subtitle[_ngcontent-%COMP%]{font-size:12px!important;line-height:20px;font-weight:600!important;opacity:.6}'],changeDetection:0}),s);function Q(t,e){1&t&&j.Mb(0,"app-trip-passages-list-item",4),2&t&&j.jc("passage",e.$implicit)}function U(t,e){if(1&t&&(j.Qb(0,"mat-nav-list",2),j.yc(1,Q,1,1,"app-trip-passages-list-item",3),j.Pb()),2&t){var a=j.dc();j.Ab(1),j.jc("ngForOf",a.passages)}}function V(t,e){1&t&&(j.Qb(0,"h3"),j.Ac(1,"No Passages"),j.Pb())}var W,H=((W=function(){function t(){_classCallCheck(this,t),this.passages=[]}return _createClass(t,[{key:"hasPassages",value:function(){return Array.isArray(this.passages)&&this.passages.length>0}},{key:"tripInfo",set:function(t){if(t){var e=[];return t.actual&&e.push.apply(e,_toConsumableArray(t.actual)),t.old&&t.old.length>0&&e.push.apply(e,_toConsumableArray(t.old)),e.sort((function(t,e){return parseInt(t.stop_seq_num,10)-parseInt(e.stop_seq_num,10)})),void(this.passages=e)}this.passages=[]}}]),t}()).\u0275fac=function(t){return new(t||W)},W.\u0275cmp=j.Fb({type:W,selectors:[["app-trip-passages-list"]],inputs:{tripInfo:"tripInfo"},decls:3,vars:2,consts:[["role","list",4,"ngIf","ngIfElse"],["noPassagesBlock",""],["role","list"],[3,"passage",4,"ngFor","ngForOf"],[3,"passage"]],template:function(t,e){if(1&t&&(j.yc(0,U,2,1,"mat-nav-list",0),j.yc(1,V,2,0,"ng-template",null,1,j.zc)),2&t){var a=j.rc(2);j.jc("ngIf",e.hasPassages())("ngIfElse",a)}},directives:[r.l,o.f,r.k,F],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),W);function q(t,e){1&t&&(j.Qb(0,"div",5),j.Qb(1,"h4"),j.Ac(2,"not found"),j.Pb(),j.Pb())}function B(t,e){if(1&t&&(j.Ob(0),j.Qb(1,"app-header-box",1),j.Mb(2,"map",2),j.Pb(),j.yc(3,q,3,0,"div",3),j.Mb(4,"app-trip-passages-list",4),j.Nb()),2&t){var a=e.ngIf,n=j.dc();j.Ab(1),j.mc("title","",null==a?null:a.tripInfo.routeName," - ",null==a?null:a.tripInfo.directionText,""),j.Ab(1),j.jc("mapData",n.headerMapData),j.Ab(1),j.jc("ngIf",a.status==n.STATUS_OPS.NOT_FOUND),j.Ab(1),j.jc("tripInfo",a.tripInfo)}}var J,K,G,$,Y=((K=function(){function t(e){_classCallCheck(this,t),this.passageService=e,this.subscriptions=[],this.STATUS_OPS=C}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.subscriptions.push(this.passageService.createStopLocationObservable().subscribe({next:function(e){t.headerMapData=e?{map:{center:e},stops:void 0,vehicles:[e]}:{map:{blur:!0,center:void 0}}}}))}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach((function(t){t.unsubscribe()})),this.subscriptions=[]}}]),t}()).\u0275fac=function(t){return new(t||K)(j.Lb(A))},K.\u0275cmp=j.Fb({type:K,selectors:[["app-trip-passages"]],features:[j.zb([A])],decls:2,vars:3,consts:[[4,"ngIf"],[3,"title"],["appOlStatic","",3,"mapData"],["class","not-found",4,"ngIf"],[3,"tripInfo"],[1,"not-found"]],template:function(t,e){1&t&&(j.yc(0,B,5,5,"ng-container",0),j.ec(1,"async")),2&t&&j.jc("ngIf",j.fc(1,1,e.passageService.statusObservable))},directives:[r.l,k.a,M.a,H],pipes:[r.b],styles:["h3.route-title[_ngcontent-%COMP%]{padding:24px}div.error-box[_ngcontent-%COMP%]{background:#f44336;padding:16px;flex:0 0 auto}div.error-box[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{text-transform:capitalize;font-weight:700;display:block;font-size:16px}div.error-box[_ngcontent-%COMP%]   span.text[_ngcontent-%COMP%]{font-size:12px}mat-nav-list[_ngcontent-%COMP%]{flex-grow:1}"]}),K),X=((J=function(){function t(e){_classCallCheck(this,t),this.api=e}return _createClass(t,[{key:"resolve",value:function(t,e){var a=t.params.tripId;return this.api.getTripPassages(a).pipe(I.convertResponse(a),I.handleError(a))}}]),t}()).\u0275fac=function(t){return new(t||J)(j.Wb(S.a))},J.\u0275prov=j.Hb({token:J,factory:J.\u0275fac}),J),Z=[{component:Y,data:{openSidebar:!0},path:":tripId",resolve:{tripPassages:X}}],tt=(($=function t(){_classCallCheck(this,t)}).\u0275mod=j.Jb({type:$}),$.\u0275inj=j.Ib({factory:function(t){return new(t||$)},imports:[[u.i.forChild(Z)],u.i]}),$),et=((G=function t(){_classCallCheck(this,t)}).\u0275mod=j.Jb({type:G}),G.\u0275inj=j.Ib({factory:function(t){return new(t||G)},providers:[X],imports:[[r.c,i.b,o.d,tt,c.a,p.b]]}),G)}}]);