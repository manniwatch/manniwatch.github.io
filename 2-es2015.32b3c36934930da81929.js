(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"6uoJ":function(t,e,n){"use strict";n.d(e,"a",(function(){return C}));var i=n("oOFT"),a=n("/h9T"),s=n("/Tr7"),r=n("jIYg");function o(t,e){Object(r.a)(2,arguments);var n=Object(s.a)(t),i=Object(a.a)(e);return isNaN(i)?new Date(NaN):i?(n.setDate(n.getDate()+i),n):n}function c(t,e){Object(r.a)(2,arguments);var n=Object(s.a)(t),i=Object(a.a)(e);if(isNaN(i))return new Date(NaN);if(!i)return n;var o=n.getDate(),c=new Date(n.getTime());c.setMonth(n.getMonth()+i+1,0);var l=c.getDate();return o>=l?c:(n.setFullYear(c.getFullYear(),c.getMonth(),o),n)}var l=n("jG/O"),b=n("7xvl"),d=n("sWYD"),h=n("LPPQ"),u=n("fXoL"),p=n("MutI"),m=n("tyNb"),g=n("NFeN"),f=n("ofXK"),_=n("FKr1");const y=function(t,e){return{late:t,early:e}};function x(t,e){if(1&t&&(u.Qb(0,"span",6),u.Ac(1),u.Pb()),2&t){const t=u.dc();u.jc("ngClass",u.pc(2,y,t.delay>0,t.delay<0)),u.Ab(1),u.Bc(t.delay)}}const v=function(t){return["/passages",t]};let C=(()=>{class t{constructor(){this.mDeparture=void 0,this.mDelay=!1,this.mTime=""}set departure(t){this.mDeparture=t,this.mDelay=this.calculateDelay(t),this.mTime=this.convertTime(t)}get departure(){return this.mDeparture}get time(){return this.mTime}get statusIcon(){switch(this.mDeparture.status){case i.VEHICLE_STATUS.PREDICTED:case i.VEHICLE_STATUS.DEPARTED:return"directions_bus";case i.VEHICLE_STATUS.STOPPING:return"departure_board";case i.VEHICLE_STATUS.PLANNED:default:return"query_builder"}}get status(){return this.mDeparture.status}convertTime(t){if(t){const e=function(t,e){if(Object(r.a)(2,arguments),!e||"object"!=typeof e)return new Date(NaN);var n="years"in e?Object(a.a)(e.years):0,i="months"in e?Object(a.a)(e.months):0,l="weeks"in e?Object(a.a)(e.weeks):0,b="days"in e?Object(a.a)(e.days):0,d="hours"in e?Object(a.a)(e.hours):0,h="minutes"in e?Object(a.a)(e.minutes):0,u="seconds"in e?Object(a.a)(e.seconds):0,p=Object(s.a)(t),m=i||n?c(p,i+12*n):p,g=b||l?o(m,b+7*l):m,f=h+60*d,_=u+60*f,y=1e3*_,x=new Date(g.getTime()+y);return x}(new Date,{seconds:t.actualRelativeTime}),n=Object(l.a)(e,new Date);return Math.abs(n)<15?Object(b.a)(e,{addSuffix:!0}):Object(d.a)(e,"p")}return"No departure time"}get delay(){return this.mDelay}calculateDelay(t){if(t&&t.actualTime&&t.plannedTime&&t.actualTime!==t.plannedTime){const e=Object(h.a)(t.actualTime,"HH:mm",new Date),n=Object(h.a)(t.plannedTime,"HH:mm",new Date);let i=Object(l.a)(e,n);return i>720?i-=1440:i<-720&&(i+=1440),i}return!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Fb({type:t,selectors:[["app-departure-list-item"]],inputs:{departure:"departure"},decls:9,vars:10,consts:[["mat-list-item","","role","listitem",3,"routerLink"],["matListIcon","",3,"title"],["class","pattern-text",3,"ngClass",4,"ngIf"],["matLine","",1,"title"],["matLine","",1,"subtitle"],[3,"title"],[1,"pattern-text",3,"ngClass"]],template:function(t,e){1&t&&(u.Qb(0,"a",0),u.Qb(1,"mat-icon",1),u.Ac(2),u.Pb(),u.yc(3,x,2,5,"span",2),u.Qb(4,"h4",3),u.Ac(5),u.Pb(),u.Qb(6,"p",4),u.Qb(7,"span",5),u.Ac(8),u.Pb(),u.Pb(),u.Pb()),2&t&&(u.jc("routerLink",u.oc(8,v,e.departure.tripId)),u.Ab(1),u.kc("title",e.status),u.Ab(1),u.Bc(e.statusIcon),u.Ab(1),u.jc("ngIf",!1!==e.delay),u.Ab(2),u.Dc("",null==e.departure?null:e.departure.patternText," ",null==e.departure?null:e.departure.direction,""),u.Ab(2),u.lc("title","Planned: ",null==e.departure?null:e.departure.plannedTime,""),u.Ab(1),u.Bc(e.time))},directives:[p.c,m.h,g.a,p.b,f.l,_.f,f.j],styles:['[_nghost-%COMP%]{display:block}div.no-departures[_ngcontent-%COMP%]{margin:15px}span.pattern-text[_ngcontent-%COMP%]{font-weight:700}span.pattern-text.late[_ngcontent-%COMP%]{color:#f44336}@media (prefers-color-scheme:dark){span.pattern-text.late[_ngcontent-%COMP%]{color:#ff5722}}span.pattern-text.late[_ngcontent-%COMP%]:before{content:"+"}span.pattern-text.early[_ngcontent-%COMP%]{color:#ff4081}@media (prefers-color-scheme:dark){span.pattern-text.early[_ngcontent-%COMP%]{color:#ffd740}}h4.title[_ngcontent-%COMP%]{font-size:16px!important;font-weight:700!important;opacity:.87}h4.title[_ngcontent-%COMP%], p.subtitle[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}p.subtitle[_ngcontent-%COMP%]{font-size:12px!important;line-height:20px;font-weight:600!important;opacity:.6}'],changeDetection:0}),t})()},Rfd2:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n("S256");var i=n("ofXK"),a=n("f0Cb"),s=n("MutI"),r=n("fXoL");let o=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[i.c,a.b,s.d],i.c,a.b,s.d]}),t})()},S256:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n("fXoL"),a=n("ofXK"),s=n("MutI"),r=n("f0Cb"),o=n("FKr1");function c(t,e){if(1&t&&(i.Qb(0,"mat-list-item"),i.Qb(1,"h4",5),i.Ac(2),i.Pb(),i.Pb()),2&t){const t=e.$implicit;i.Ab(2),i.Bc(t)}}function l(t,e){if(1&t&&(i.Ob(0),i.Qb(1,"h3",4),i.Ac(2),i.Pb(),i.Mb(3,"mat-divider"),i.yc(4,c,3,1,"mat-list-item",3),i.Nb()),2&t){const t=e.$implicit;i.Ab(2),i.Bc(null==t?null:t.shortName),i.Ab(2),i.jc("ngForOf",t.directions)}}function b(t,e){if(1&t&&(i.Qb(0,"mat-list",2),i.yc(1,l,5,2,"ng-container",3),i.Pb()),2&t){const t=i.dc();i.Ab(1),i.jc("ngForOf",t.routes)}}function d(t,e){1&t&&(i.Qb(0,"div",6),i.Qb(1,"h4"),i.Ac(2,"No Routes"),i.Pb(),i.Pb())}let h=(()=>{class t{constructor(){this.mDepartures=[]}set routes(t){this.mDepartures=t||[]}get routes(){return this.mDepartures}get hasRoutes(){return this.mDepartures&&this.mDepartures.length>0}convertTime(t,e){return t>300?e.actualTime:Math.ceil(t/60)+"min"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["app-route-list"]],inputs:{routes:"routes"},decls:2,vars:2,consts:[["role","list",4,"ngIf"],["class","no-routes",4,"ngIf"],["role","list"],[4,"ngFor","ngForOf"],["matSubheader",""],["matLine",""],[1,"no-routes"]],template:function(t,e){1&t&&(i.yc(0,b,2,1,"mat-list",0),i.yc(1,d,3,0,"div",1)),2&t&&(i.jc("ngIf",e.hasRoutes),i.Ab(1),i.jc("ngIf",!e.hasRoutes))},directives:[a.l,s.a,a.k,s.e,r.a,s.c,o.f],styles:["[_nghost-%COMP%]{display:block}mat-list-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:red;display:block;list-style-type:circle;list-style-position:outside}mat-list-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:list-item;padding:0 20px}div.no-routes[_ngcontent-%COMP%]{margin:15px}"]}),t})()},adpU:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n("6uoJ"),n("rIFM");var i=n("ofXK"),a=n("NFeN"),s=n("MutI"),r=n("Xa2L"),o=n("tyNb"),c=n("fXoL");let l=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[i.c,a.b,s.d,r.a,o.i]]}),t})()},l5mm:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("HDdC"),a=n("D0XW"),s=n("Y7HM");function r(t=0,e=a.a){return(!Object(s.a)(t)||t<0)&&(t=0),e&&"function"==typeof e.schedule||(e=a.a),new i.a(n=>(n.add(e.schedule(o,t,{subscriber:n,counter:0,period:t})),n))}function o(t){const{subscriber:e,counter:n,period:i}=t;e.next(n),this.schedule({subscriber:e,counter:n+1,period:i},i)}},rIFM:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var i=n("fXoL"),a=n("ofXK"),s=n("MutI"),r=n("6uoJ");function o(t,e){1&t&&i.Mb(0,"app-departure-list-item",4),2&t&&i.jc("departure",e.$implicit)}function c(t,e){if(1&t&&(i.Qb(0,"mat-nav-list",2),i.yc(1,o,1,1,"app-departure-list-item",3),i.Pb()),2&t){const t=i.dc();i.Ab(1),i.jc("ngForOf",t.departures)}}function l(t,e){1&t&&(i.Qb(0,"div",5),i.Qb(1,"h4"),i.Ac(2,"No Departures"),i.Pb(),i.Pb())}let b=(()=>{class t{constructor(){this.mDepartures=[]}set departures(t){this.mDepartures=t||[]}get departures(){return this.mDepartures?this.mDepartures:[]}hasDepartures(){return void 0!==this.mDepartures&&this.mDepartures.length>0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["app-departure-list"]],inputs:{departures:"departures"},decls:2,vars:2,consts:[["role","list",4,"ngIf"],["class","no-departures",4,"ngIf"],["role","list"],[3,"departure",4,"ngFor","ngForOf"],[3,"departure"],[1,"no-departures"]],template:function(t,e){1&t&&(i.yc(0,c,2,1,"mat-nav-list",0),i.yc(1,l,3,0,"div",1)),2&t&&(i.jc("ngIf",e.hasDepartures()),i.Ab(1),i.jc("ngIf",!e.hasDepartures()))},directives:[a.l,s.f,a.k,r.a],styles:["[_nghost-%COMP%]{display:block}div.no-departures[_ngcontent-%COMP%]{margin:15px}"],changeDetection:0}),t})()},wZkO:function(t,e,n){"use strict";n.d(e,"a",(function(){return K})),n.d(e,"b",(function(){return st})),n.d(e,"c",(function(){return ut}));var i=n("u47x"),a=n("GU7r"),s=n("+rOU"),r=n("ofXK"),o=n("fXoL"),c=n("FKr1"),l=n("R1ws"),b=n("XNiG"),d=n("quSY"),h=n("VRyK"),u=n("xgIS"),p=n("LRne"),m=n("PqYM"),g=n("R0Ic"),f=n("JX91"),_=n("/uUt"),y=n("1G5W"),x=n("8LU1"),v=n("nLfN"),C=n("FtGj"),L=n("cH1L"),P=n("vxfF");function I(t,e){1&t&&o.hc(0)}const w=["*"];function D(t,e){}const T=function(t){return{animationDuration:t}},O=function(t,e){return{value:t,params:e}},k=["tabBodyWrapper"],j=["tabHeader"];function S(t,e){}function A(t,e){if(1&t&&o.yc(0,S,0,0,"ng-template",9),2&t){const t=o.dc().$implicit;o.jc("cdkPortalOutlet",t.templateLabel)}}function M(t,e){if(1&t&&o.Ac(0),2&t){const t=o.dc().$implicit;o.Bc(t.textLabel)}}function F(t,e){if(1&t){const t=o.Rb();o.Qb(0,"div",6),o.Zb("click",(function(){o.sc(t);const n=e.$implicit,i=e.index,a=o.dc(),s=o.rc(1);return a._handleClick(n,s,i)})),o.Qb(1,"div",7),o.yc(2,A,1,1,"ng-template",8),o.yc(3,M,1,1,"ng-template",8),o.Pb(),o.Pb()}if(2&t){const t=e.$implicit,n=e.index,i=o.dc();o.Cb("mat-tab-label-active",i.selectedIndex==n),o.jc("id",i._getTabLabelId(n))("disabled",t.disabled)("matRippleDisabled",t.disabled||i.disableRipple),o.Bb("tabIndex",i._getTabIndex(t,n))("aria-posinset",n+1)("aria-setsize",i._tabs.length)("aria-controls",i._getTabContentId(n))("aria-selected",i.selectedIndex==n)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),o.Ab(2),o.jc("ngIf",t.templateLabel),o.Ab(1),o.jc("ngIf",!t.templateLabel)}}function R(t,e){if(1&t){const t=o.Rb();o.Qb(0,"mat-tab-body",10),o.Zb("_onCentered",(function(){return o.sc(t),o.dc()._removeTabBodyWrapperHeight()}))("_onCentering",(function(e){return o.sc(t),o.dc()._setTabBodyWrapperHeight(e)})),o.Pb()}if(2&t){const t=e.$implicit,n=e.index,i=o.dc();o.Cb("mat-tab-body-active",i.selectedIndex==n),o.jc("id",i._getTabContentId(n))("content",t.content)("position",t.position)("origin",t.origin)("animationDuration",i.animationDuration),o.Bb("aria-labelledby",i._getTabLabelId(n))}}const E=["tabListContainer"],B=["tabList"],H=["nextPaginator"],Q=["previousPaginator"],W=new o.q("MatInkBarPositioner",{providedIn:"root",factory:function(){return t=>({left:t?(t.offsetLeft||0)+"px":"0",width:t?(t.offsetWidth||0)+"px":"0"})}});let N=(()=>{class t{constructor(t,e,n,i){this._elementRef=t,this._ngZone=e,this._inkBarPositioner=n,this._animationMode=i}alignToElement(t){this.show(),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._setStyles(t))}):this._setStyles(t)}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}_setStyles(t){const e=this._inkBarPositioner(t),n=this._elementRef.nativeElement;n.style.left=e.left,n.style.width=e.width}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.l),o.Lb(o.z),o.Lb(W),o.Lb(l.a,8))},t.\u0275dir=o.Gb({type:t,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(t,e){2&t&&o.Cb("_mat-animation-noopable","NoopAnimations"===e._animationMode)}}),t})(),z=(()=>{class t{constructor(t){this.template=t}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.L))},t.\u0275dir=o.Gb({type:t,selectors:[["","matTabContent",""]]}),t})(),q=(()=>{class t extends s.b{}t.\u0275fac=function(n){return e(n||t)},t.\u0275dir=o.Gb({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[o.xb]});const e=o.Sb(t);return t})();class G{}const X=Object(c.u)(G),$=new o.q("MAT_TAB_GROUP");let K=(()=>{class t extends X{constructor(t,e){super(),this._viewContainerRef=t,this._closestTabGroup=e,this.textLabel="",this._contentPortal=null,this._stateChanges=new b.a,this.position=null,this.origin=null,this.isActive=!1}get templateLabel(){return this._templateLabel}set templateLabel(t){t&&(this._templateLabel=t)}get content(){return this._contentPortal}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new s.i(this._explicitContent||this._implicitContent,this._viewContainerRef)}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.Q),o.Lb($,8))},t.\u0275cmp=o.Fb({type:t,selectors:[["mat-tab"]],contentQueries:function(t,e,n){var i;1&t&&(o.Eb(n,q,!0),o.vc(n,z,!0,o.L)),2&t&&(o.qc(i=o.ac())&&(e.templateLabel=i.first),o.qc(i=o.ac())&&(e._explicitContent=i.first))},viewQuery:function(t,e){var n;1&t&&o.wc(o.L,!0),2&t&&o.qc(n=o.ac())&&(e._implicitContent=n.first)},inputs:{disabled:"disabled",textLabel:["label","textLabel"],ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"]},exportAs:["matTab"],features:[o.xb,o.yb],ngContentSelectors:w,decls:1,vars:0,template:function(t,e){1&t&&(o.ic(),o.yc(0,I,1,0,"ng-template"))},encapsulation:2}),t})();const Z={translateTab:Object(g.j)("translateTab",[Object(g.g)("center, void, left-origin-center, right-origin-center",Object(g.h)({transform:"none"})),Object(g.g)("left",Object(g.h)({transform:"translate3d(-100%, 0, 0)",minHeight:"1px"})),Object(g.g)("right",Object(g.h)({transform:"translate3d(100%, 0, 0)",minHeight:"1px"})),Object(g.i)("* => left, * => right, left => center, right => center",Object(g.e)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),Object(g.i)("void => left-origin-center",[Object(g.h)({transform:"translate3d(-100%, 0, 0)"}),Object(g.e)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),Object(g.i)("void => right-origin-center",[Object(g.h)({transform:"translate3d(100%, 0, 0)"}),Object(g.e)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])])};let V=(()=>{class t extends s.c{constructor(t,e,n,i){super(t,e,i),this._host=n,this._centeringSub=d.a.EMPTY,this._leavingSub=d.a.EMPTY}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Object(f.a)(this._host._isCenterPosition(this._host._position))).subscribe(t=>{t&&!this.hasAttached()&&this.attach(this._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this.detach()})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.j),o.Lb(o.Q),o.Lb(Object(o.U)(()=>U)),o.Lb(r.d))},t.\u0275dir=o.Gb({type:t,selectors:[["","matTabBodyHost",""]],features:[o.xb]}),t})(),Y=(()=>{class t{constructor(t,e,n){this._elementRef=t,this._dir=e,this._dirChangeSubscription=d.a.EMPTY,this._translateTabComplete=new b.a,this._onCentering=new o.n,this._beforeCentering=new o.n,this._afterLeavingCenter=new o.n,this._onCentered=new o.n(!0),this.animationDuration="500ms",e&&(this._dirChangeSubscription=e.change.subscribe(t=>{this._computePositionAnimationState(t),n.markForCheck()})),this._translateTabComplete.pipe(Object(_.a)((t,e)=>t.fromState===e.fromState&&t.toState===e.toState)).subscribe(t=>{this._isCenterPosition(t.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(t.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()})}set position(t){this._positionIndex=t,this._computePositionAnimationState()}ngOnInit(){"center"==this._position&&null!=this.origin&&(this._position=this._computePositionFromOrigin(this.origin))}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._translateTabComplete.complete()}_onTranslateTabStarted(t){const e=this._isCenterPosition(t.toState);this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_isCenterPosition(t){return"center"==t||"left-origin-center"==t||"right-origin-center"==t}_computePositionAnimationState(t=this._getLayoutDirection()){this._position=this._positionIndex<0?"ltr"==t?"left":"right":this._positionIndex>0?"ltr"==t?"right":"left":"center"}_computePositionFromOrigin(t){const e=this._getLayoutDirection();return"ltr"==e&&t<=0||"rtl"==e&&t>0?"left-origin-center":"right-origin-center"}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.l),o.Lb(L.b,8),o.Lb(o.h))},t.\u0275dir=o.Gb({type:t,inputs:{animationDuration:"animationDuration",position:"position",_content:["content","_content"],origin:"origin"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_afterLeavingCenter:"_afterLeavingCenter",_onCentered:"_onCentered"}}),t})(),U=(()=>{class t extends Y{constructor(t,e,n){super(t,e,n)}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.l),o.Lb(L.b,8),o.Lb(o.h))},t.\u0275cmp=o.Fb({type:t,selectors:[["mat-tab-body"]],viewQuery:function(t,e){var n;1&t&&o.Fc(s.f,!0),2&t&&o.qc(n=o.ac())&&(e._portalHost=n.first)},hostAttrs:[1,"mat-tab-body"],features:[o.xb],decls:3,vars:6,consts:[[1,"mat-tab-body-content"],["content",""],["matTabBodyHost",""]],template:function(t,e){1&t&&(o.Qb(0,"div",0,1),o.Zb("@translateTab.start",(function(t){return e._onTranslateTabStarted(t)}))("@translateTab.done",(function(t){return e._translateTabComplete.next(t)})),o.yc(2,D,0,0,"ng-template",2),o.Pb()),2&t&&o.jc("@translateTab",o.pc(3,O,e._position,o.oc(1,T,e.animationDuration)))},directives:[V],styles:[".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[Z.translateTab]}}),t})();const J=new o.q("MAT_TABS_CONFIG");let tt=0;class et{}class nt{constructor(t){this._elementRef=t}}const it=Object(c.s)(Object(c.t)(nt),"primary");let at=(()=>{class t extends it{constructor(t,e,n,i){super(t),this._changeDetectorRef=e,this._animationMode=i,this._tabs=new o.D,this._indexToSelect=0,this._tabBodyWrapperHeight=0,this._tabsSubscription=d.a.EMPTY,this._tabLabelSubscription=d.a.EMPTY,this._dynamicHeight=!1,this._selectedIndex=null,this.headerPosition="above",this.selectedIndexChange=new o.n,this.focusChange=new o.n,this.animationDone=new o.n,this.selectedTabChange=new o.n(!0),this._groupId=tt++,this.animationDuration=n&&n.animationDuration?n.animationDuration:"500ms",this.disablePagination=!(!n||null==n.disablePagination)&&n.disablePagination}get dynamicHeight(){return this._dynamicHeight}set dynamicHeight(t){this._dynamicHeight=Object(x.b)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=Object(x.e)(t,null)}get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=/^\d+$/.test(t)?t+"ms":t}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const e=this._elementRef.nativeElement;e.classList.remove("mat-background-"+this.backgroundColor),t&&e.classList.add("mat-background-"+t),this._backgroundColor=t}ngAfterContentChecked(){const t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){const e=null==this._selectedIndex;e||this.selectedTabChange.emit(this._createChangeEvent(t)),Promise.resolve().then(()=>{this._tabs.forEach((e,n)=>e.isActive=n===t),e||this.selectedIndexChange.emit(t)})}this._tabs.forEach((e,n)=>{e.position=n-t,null==this._selectedIndex||0!=e.position||e.origin||(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{if(this._clampTabIndex(this._indexToSelect)===this._selectedIndex){const t=this._tabs.toArray();for(let e=0;e<t.length;e++)if(t[e].isActive){this._indexToSelect=this._selectedIndex=e;break}}this._changeDetectorRef.markForCheck()})}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Object(f.a)(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(t=>!t._closestTabGroup||t._closestTabGroup===this)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}_focusChanged(t){this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){const e=new et;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Object(h.a)(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t){return`mat-tab-label-${this._groupId}-${t}`}_getTabContentId(t){return`mat-tab-content-${this._groupId}-${t}`}_setTabBodyWrapperHeight(t){if(!this._dynamicHeight||!this._tabBodyWrapperHeight)return;const e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){const t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this.animationDone.emit()}_handleClick(t,e,n){t.disabled||(this.selectedIndex=e.focusIndex=n)}_getTabIndex(t,e){return t.disabled?null:this.selectedIndex===e?0:-1}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.l),o.Lb(o.h),o.Lb(J,8),o.Lb(l.a,8))},t.\u0275dir=o.Gb({type:t,inputs:{headerPosition:"headerPosition",animationDuration:"animationDuration",disablePagination:"disablePagination",dynamicHeight:"dynamicHeight",selectedIndex:"selectedIndex",backgroundColor:"backgroundColor"},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},features:[o.xb]}),t})(),st=(()=>{class t extends at{constructor(t,e,n,i){super(t,e,n,i)}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.l),o.Lb(o.h),o.Lb(J,8),o.Lb(l.a,8))},t.\u0275cmp=o.Fb({type:t,selectors:[["mat-tab-group"]],contentQueries:function(t,e,n){var i;1&t&&o.Eb(n,K,!0),2&t&&o.qc(i=o.ac())&&(e._allTabs=i)},viewQuery:function(t,e){var n;1&t&&(o.Fc(k,!0),o.Fc(j,!0)),2&t&&(o.qc(n=o.ac())&&(e._tabBodyWrapper=n.first),o.qc(n=o.ac())&&(e._tabHeader=n.first))},hostAttrs:[1,"mat-tab-group"],hostVars:4,hostBindings:function(t,e){2&t&&o.Cb("mat-tab-group-dynamic-height",e.dynamicHeight)("mat-tab-group-inverted-header","below"===e.headerPosition)},inputs:{color:"color",disableRipple:"disableRipple"},exportAs:["matTabGroup"],features:[o.zb([{provide:$,useExisting:t}]),o.xb],decls:6,vars:7,consts:[[3,"selectedIndex","disableRipple","disablePagination","indexFocused","selectFocusedIndex"],["tabHeader",""],["class","mat-tab-label mat-focus-indicator","role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",3,"id","mat-tab-label-active","disabled","matRippleDisabled","click",4,"ngFor","ngForOf"],[1,"mat-tab-body-wrapper"],["tabBodyWrapper",""],["role","tabpanel",3,"id","mat-tab-body-active","content","position","origin","animationDuration","_onCentered","_onCentering",4,"ngFor","ngForOf"],["role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",1,"mat-tab-label","mat-focus-indicator",3,"id","disabled","matRippleDisabled","click"],[1,"mat-tab-label-content"],[3,"ngIf"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"id","content","position","origin","animationDuration","_onCentered","_onCentering"]],template:function(t,e){1&t&&(o.Qb(0,"mat-tab-header",0,1),o.Zb("indexFocused",(function(t){return e._focusChanged(t)}))("selectFocusedIndex",(function(t){return e.selectedIndex=t})),o.yc(2,F,4,14,"div",2),o.Pb(),o.Qb(3,"div",3,4),o.yc(5,R,1,8,"mat-tab-body",5),o.Pb()),2&t&&(o.jc("selectedIndex",e.selectedIndex||0)("disableRipple",e.disableRipple)("disablePagination",e.disablePagination),o.Ab(2),o.jc("ngForOf",e._tabs),o.Ab(1),o.Cb("_mat-animation-noopable","NoopAnimations"===e._animationMode),o.Ab(2),o.jc("ngForOf",e._tabs))},directives:function(){return[ht,r.k,ct,c.n,i.c,r.l,s.c,U]},styles:[".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],encapsulation:2}),t})();class rt{}const ot=Object(c.u)(rt);let ct=(()=>{class t extends ot{constructor(t){super(),this.elementRef=t}focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.l))},t.\u0275dir=o.Gb({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,e){2&t&&(o.Bb("aria-disabled",!!e.disabled),o.Cb("mat-tab-disabled",e.disabled))},inputs:{disabled:"disabled"},features:[o.xb]}),t})();const lt=Object(v.f)({passive:!0});let bt=(()=>{class t{constructor(t,e,n,i,a,s,r){this._elementRef=t,this._changeDetectorRef=e,this._viewportRuler=n,this._dir=i,this._ngZone=a,this._platform=s,this._animationMode=r,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new b.a,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new b.a,this.disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new o.n,this.indexFocused=new o.n,a.runOutsideAngular(()=>{Object(u.a)(t.nativeElement,"mouseleave").pipe(Object(y.a)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){t=Object(x.e)(t),this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}ngAfterViewInit(){Object(u.a)(this._previousPaginator.nativeElement,"touchstart",lt).pipe(Object(y.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),Object(u.a)(this._nextPaginator.nativeElement,"touchstart",lt).pipe(Object(y.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const t=this._dir?this._dir.change:Object(p.a)(null),e=this._viewportRuler.change(150),n=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new i.d(this._items).withHorizontalOrientation(this._getLayoutDirection()).withWrap(),this._keyManager.updateActiveItem(0),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(n):n(),Object(h.a)(t,e,this._items.changes).pipe(Object(y.a)(this._destroyed)).subscribe(()=>{Promise.resolve().then(n),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe(Object(y.a)(this._destroyed)).subscribe(t=>{this.indexFocused.emit(t),this._setTabFocus(t)})}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Object(C.o)(t))switch(t.keyCode){case C.f:this._keyManager.setFirstItemActive(),t.preventDefault();break;case C.c:this._keyManager.setLastItemActive(),t.preventDefault();break;case C.d:case C.j:this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){const t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){this._isValidIndex(t)&&this.focusIndex!==t&&this._keyManager&&this._keyManager.setActiveItem(t)}_isValidIndex(t){if(!this._items)return!0;const e=this._items?this._items.toArray()[t]:null;return!!e&&!e.disabled}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();const e=this._tabListContainer.nativeElement,n=this._getLayoutDirection();e.scrollLeft="ltr"==n?0:e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const t=this.scrollDistance,e=this._platform,n="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(n)}px)`,e&&(e.TRIDENT||e.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){return this._scrollTo(this._scrollDistance+("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;const e=this._items?this._items.toArray()[t]:null;if(!e)return;const n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:a}=e.elementRef.nativeElement;let s,r;"ltr"==this._getLayoutDirection()?(s=i,r=s+a):(r=this._tabList.nativeElement.offsetWidth-i,s=r-a);const o=this.scrollDistance,c=this.scrollDistance+n;s<o?this.scrollDistance-=o-s+60:r>c&&(this.scrollDistance+=r-c+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const t=this._tabList.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabList.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&null!=e.button&&0!==e.button||(this._stopInterval(),Object(m.a)(650,100).pipe(Object(y.a)(Object(h.a)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:e,distance:n}=this._scrollHeader(t);(0===n||n>=e)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.l),o.Lb(o.h),o.Lb(P.e),o.Lb(L.b,8),o.Lb(o.z),o.Lb(v.a),o.Lb(l.a,8))},t.\u0275dir=o.Gb({type:t,inputs:{disablePagination:"disablePagination"}}),t})(),dt=(()=>{class t extends bt{constructor(t,e,n,i,a,s,r){super(t,e,n,i,a,s,r),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Object(x.b)(t)}_itemSelected(t){t.preventDefault()}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.l),o.Lb(o.h),o.Lb(P.e),o.Lb(L.b,8),o.Lb(o.z),o.Lb(v.a),o.Lb(l.a,8))},t.\u0275dir=o.Gb({type:t,inputs:{disableRipple:"disableRipple"},features:[o.xb]}),t})(),ht=(()=>{class t extends dt{constructor(t,e,n,i,a,s,r){super(t,e,n,i,a,s,r)}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.l),o.Lb(o.h),o.Lb(P.e),o.Lb(L.b,8),o.Lb(o.z),o.Lb(v.a),o.Lb(l.a,8))},t.\u0275cmp=o.Fb({type:t,selectors:[["mat-tab-header"]],contentQueries:function(t,e,n){var i;1&t&&o.Eb(n,ct,!1),2&t&&o.qc(i=o.ac())&&(e._items=i)},viewQuery:function(t,e){var n;1&t&&(o.wc(N,!0),o.wc(E,!0),o.wc(B,!0),o.Fc(H,!0),o.Fc(Q,!0)),2&t&&(o.qc(n=o.ac())&&(e._inkBar=n.first),o.qc(n=o.ac())&&(e._tabListContainer=n.first),o.qc(n=o.ac())&&(e._tabList=n.first),o.qc(n=o.ac())&&(e._nextPaginator=n.first),o.qc(n=o.ac())&&(e._previousPaginator=n.first))},hostAttrs:[1,"mat-tab-header"],hostVars:4,hostBindings:function(t,e){2&t&&o.Cb("mat-tab-header-pagination-controls-enabled",e._showPaginationControls)("mat-tab-header-rtl","rtl"==e._getLayoutDirection())},inputs:{selectedIndex:"selectedIndex"},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[o.xb],ngContentSelectors:w,decls:13,vars:8,consts:[["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-label-container",3,"keydown"],["tabListContainer",""],["role","tablist",1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-labels"],["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(t,e){1&t&&(o.ic(),o.Qb(0,"div",0,1),o.Zb("click",(function(){return e._handlePaginatorClick("before")}))("mousedown",(function(t){return e._handlePaginatorPress("before",t)}))("touchend",(function(){return e._stopInterval()})),o.Mb(2,"div",2),o.Pb(),o.Qb(3,"div",3,4),o.Zb("keydown",(function(t){return e._handleKeydown(t)})),o.Qb(5,"div",5,6),o.Zb("cdkObserveContent",(function(){return e._onContentChanges()})),o.Qb(7,"div",7),o.hc(8),o.Pb(),o.Mb(9,"mat-ink-bar"),o.Pb(),o.Pb(),o.Qb(10,"div",8,9),o.Zb("mousedown",(function(t){return e._handlePaginatorPress("after",t)}))("click",(function(){return e._handlePaginatorClick("after")}))("touchend",(function(){return e._stopInterval()})),o.Mb(12,"div",2),o.Pb()),2&t&&(o.Cb("mat-tab-header-pagination-disabled",e._disableScrollBefore),o.jc("matRippleDisabled",e._disableScrollBefore||e.disableRipple),o.Ab(5),o.Cb("_mat-animation-noopable","NoopAnimations"===e._animationMode),o.Ab(5),o.Cb("mat-tab-header-pagination-disabled",e._disableScrollAfter),o.jc("matRippleDisabled",e._disableScrollAfter||e.disableRipple))},directives:[c.n,a.a,N],styles:['.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n'],encapsulation:2}),t})(),ut=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[r.c,c.e,s.h,c.o,a.c,i.a],c.e]}),t})()}}]);