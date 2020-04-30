(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{SIQ7:function(t,e,s){"use strict";s.r(e),s.d(e,"TripPassagesModule",(function(){return X}));var a=s("ofXK"),n=s("NFeN"),r=s("MutI"),i=s("3cPY"),o=s("RSro"),c=s("tyNb"),p=s("2Vo4"),l=s("VRyK"),u=s("PqYM"),b=s("lJxs"),g=s("Kqap"),f=s("vkgz"),d=s("eIep"),O=s("IzEk"),h=s("5+tZ"),m=s("LRne"),P=s("JIr8"),v=function(t){return t[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED",t[t.ERROR=3]="ERROR",t[t.PAUSED=4]="PAUSED",t[t.UNKNOWN=5]="UNKNOWN",t[t.NOT_FOUND=404]="NOT_FOUND",t[t.SERVER_ERROR=500]="SERVER_ERROR",t}({});class S{static convertResponse(t){return Object(b.a)(t=>({failures:0,status:v.LOADED,timestamp:Date.now(),tripId:t.tripId,tripInfo:t}))}static handleError(t){return Object(P.a)(e=>e&&e.status?Object(m.a)({failures:1,passages:void 0,status:e.status>=500&&e.status<600?v.SERVER_ERROR:e.status,timestamp:Date.now(),tripId:t}):Object(m.a)({failures:1,passages:void 0,status:v.ERROR,timestamp:Date.now(),tripId:t}))}}var I=s("fXoL"),R=s("o0su");let _=(()=>{class t{constructor(t,e,s){this.route=t,this.apiService=e,this.vehicleService=s,this.statusSubject=new p.a(t.snapshot.data.tripPassages),this.statusObservable=this.createStatusObservable(this.statusSubject)}createStatusObservable(t){const e=this.createRefreshPollObservable(t);return Object(l.a)(this.route.data.pipe(Object(b.a)(t=>t.tripPassages)),e).pipe(Object(g.a)((t,e,s)=>{if(e.failures>0){const s=Object.assign({},e);return s.failures=e.failures+t.failures,s}return e}),Object(f.a)(e=>t.next(e)))}createRefreshPollObservable(t){return t.pipe(Object(d.a)(t=>this.createDelayedPassageRequest(t.tripId,t.status===v.LOADED?1e4:2e4)))}createDelayedPassageRequest(t,e){return Object(u.a)(e).pipe(Object(O.a)(1),Object(h.a)(()=>this.apiService.getTripPassages(t)),S.convertResponse(t),S.handleError(t))}createStopLocationObservable(){return this.route.data.pipe(Object(b.a)(t=>t.tripPassages),Object(d.a)(t=>this.vehicleService.getVehicleByTripId(t.tripId)))}}return t.\u0275fac=function(e){return new(e||t)(I.Xb(c.a),I.Xb(R.a),I.Xb(R.d))},t.\u0275prov=I.Jb({token:t,factory:t.\u0275fac}),t})();var C=s("FSSf"),D=s("2UN5"),E=s("7z+Z"),M=s("LPPQ"),L=s("jG/O"),N=s("7xvl"),j=s("sWYD"),y=s("FKr1");const w=["aria-label",$localize`:@@busStopIcon␟c5b9c1505998539fbe7799f39d5599f65afb24cb␟2554385076132608454:Bus stop icon`],T=["aria-label",$localize`:@@stopName␟cda036c397ca09cd2a0a308899f03908182f5e6b␟6695271591602705899:Stop name`],A=function(t){return["/stop",t]};let x=(()=>{class t{get departed(){return!!this.passage&&this.passage.status===E.VEHICLE_STATUS.DEPARTED}get stopping(){return!!this.passage&&this.passage.status===E.VEHICLE_STATUS.STOPPING}get passageTime(){if(this.passage){const t=Object(M.a)(this.passage.actualTime,"HH:mm",new Date),e=Object(L.a)(t,new Date);return Math.abs(e)<15?Object(N.a)(t,{addSuffix:!0}):Object(j.a)(t,"p")}return"No departure time"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=I.Hb({type:t,selectors:[["app-trip-passages-list-item"]],hostVars:4,hostBindings:function(t,e){2&t&&I.Eb("departed",e.departed)("stopping",e.stopping)},inputs:{passage:"passage"},decls:11,vars:6,consts:[["mat-list-item","","role","listitem",3,"routerLink"],["matListIcon","","role","figure",6,"aria-label"],["matLine","",6,"aria-label"],["matLine",""],["role","timer"],["role","status",1,"demo-2"]],template:function(t,e){1&t&&(I.Sb(0,"a",0),I.Sb(1,"mat-icon",1),I.Wb(2,w),I.Rb(),I.Sb(3,"h3",2),I.Wb(4,T),I.Cc(5),I.Rb(),I.Sb(6,"p",3),I.Sb(7,"span",4),I.Cc(8),I.Sb(9,"span",5),I.Cc(10),I.Rb(),I.Rb(),I.Rb(),I.Rb()),2&t&&(I.lc("routerLink",I.qc(4,A,null==e.passage||null==e.passage.stop?null:e.passage.stop.shortName)),I.Cb(5),I.Dc(null==e.passage||null==e.passage.stop?null:e.passage.stop.name),I.Cb(3),I.Dc(e.passageTime),I.Cb(2),I.Ec("\xa0-- ",null==e.passage?null:e.passage.status,""))},directives:[r.c,c.h,n.a,r.b,y.f],styles:['mat-icon[matListIcon][_ngcontent-%COMP%]:after{content:"directions_bus"}.departed[_nghost-%COMP%]   a[_ngcontent-%COMP%], .departed   [_nghost-%COMP%]   a[_ngcontent-%COMP%]{opacity:.75!important;background-color:rgba(0,0,0,.1)}.departed[_nghost-%COMP%]   mat-icon[matListIcon][_ngcontent-%COMP%]:after, .departed   [_nghost-%COMP%]   mat-icon[matListIcon][_ngcontent-%COMP%]:after{content:"transfer_within_a_station"}.stopping[_nghost-%COMP%]   a[_ngcontent-%COMP%], .stopping   [_nghost-%COMP%]   a[_ngcontent-%COMP%]{background-color:rgba(0,255,0,.1)}.stopping[_nghost-%COMP%]   mat-icon[matListIcon][_ngcontent-%COMP%]:after, .stopping   [_nghost-%COMP%]   mat-icon[matListIcon][_ngcontent-%COMP%]:after{content:"place"}'],changeDetection:0}),t})();function k(t,e){1&t&&I.Ob(0,"app-trip-passages-list-item",4),2&t&&I.lc("passage",e.$implicit)}function U(t,e){if(1&t&&(I.Sb(0,"mat-nav-list",2),I.Ac(1,k,1,1,"app-trip-passages-list-item",3),I.Rb()),2&t){const t=I.fc();I.Cb(1),I.lc("ngForOf",t.passages)}}function F(t,e){1&t&&(I.Sb(0,"h3"),I.Cc(1,"No Passages"),I.Rb())}let V=(()=>{class t{constructor(){this.passages=[]}set tripInfo(t){if(t){const e=[];return t.actual&&e.push(...t.actual),t.old&&t.old.length>0&&e.push(...t.old),e.sort((t,e)=>parseInt(t.stop_seq_num,10)-parseInt(e.stop_seq_num,10)),void(this.passages=e)}this.passages=[]}hasPassages(){return Array.isArray(this.passages)&&this.passages.length>0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=I.Hb({type:t,selectors:[["app-trip-passages-list"]],inputs:{tripInfo:"tripInfo"},decls:3,vars:2,consts:[["role","list",4,"ngIf","ngIfElse"],["noPassagesBlock",""],["role","list"],[3,"passage",4,"ngFor","ngForOf"],[3,"passage"]],template:function(t,e){if(1&t&&(I.Ac(0,U,2,1,"mat-nav-list",0),I.Ac(1,F,2,0,"ng-template",null,1,I.Bc)),2&t){const t=I.tc(2);I.lc("ngIf",e.hasPassages())("ngIfElse",t)}},directives:[a.l,r.f,a.k,x],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),t})();function z(t,e){1&t&&(I.Sb(0,"div",5),I.Sb(1,"h4"),I.Cc(2,"not found"),I.Rb(),I.Rb())}function K(t,e){if(1&t&&(I.Qb(0),I.Sb(1,"app-header-box",1),I.Ob(2,"map",2),I.Rb(),I.Ac(3,z,3,0,"div",3),I.Ob(4,"app-trip-passages-list",4),I.Pb()),2&t){const t=e.ngIf,s=I.fc();I.Cb(1),I.oc("title","",null==t?null:t.tripInfo.routeName," - ",null==t?null:t.tripInfo.directionText,""),I.Cb(1),I.lc("mapData",s.headerMapData),I.Cb(1),I.lc("ngIf",t.status==s.STATUS_OPS.NOT_FOUND),I.Cb(1),I.lc("tripInfo",t.tripInfo)}}let q=(()=>{class t{constructor(t){this.passageService=t,this.subscriptions=[],this.STATUS_OPS=v}ngOnInit(){this.subscriptions.push(this.passageService.createStopLocationObservable().subscribe({next:t=>{this.headerMapData=t?{map:{center:t},stops:void 0,vehicles:[t]}:{map:{blur:!0,center:void 0}}}}))}ngOnDestroy(){this.subscriptions.forEach(t=>{t.unsubscribe()}),this.subscriptions=[]}}return t.\u0275fac=function(e){return new(e||t)(I.Nb(_))},t.\u0275cmp=I.Hb({type:t,selectors:[["app-trip-passages"]],features:[I.Bb([_])],decls:2,vars:3,consts:[[4,"ngIf"],[3,"title"],["appOlStatic","",3,"mapData"],["class","not-found",4,"ngIf"],[3,"tripInfo"],[1,"not-found"]],template:function(t,e){1&t&&(I.Ac(0,K,5,5,"ng-container",0),I.gc(1,"async")),2&t&&I.lc("ngIf",I.hc(1,1,e.passageService.statusObservable))},directives:[a.l,C.a,D.a,V],pipes:[a.b],styles:["h3.route-title[_ngcontent-%COMP%]{padding:24px}div.error-box[_ngcontent-%COMP%]{background:#f44336;padding:16px;flex:0 0 auto}div.error-box[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{text-transform:capitalize;font-weight:700;display:block;font-size:16px}div.error-box[_ngcontent-%COMP%]   span.text[_ngcontent-%COMP%]{font-size:12px}mat-nav-list[_ngcontent-%COMP%]{flex-grow:1}"]}),t})(),H=(()=>{class t{constructor(t){this.api=t}resolve(t,e){const s=t.params.tripId;return this.api.getTripPassages(s).pipe(S.convertResponse(s),S.handleError(s))}}return t.\u0275fac=function(e){return new(e||t)(I.Xb(R.a))},t.\u0275prov=I.Jb({token:t,factory:t.\u0275fac}),t})();const B=[{component:q,data:{openSidebar:!0},path:":tripId",resolve:{tripPassages:H}}];let J=(()=>{class t{}return t.\u0275mod=I.Lb({type:t}),t.\u0275inj=I.Kb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(B)],c.i]}),t})(),X=(()=>{class t{}return t.\u0275mod=I.Lb({type:t}),t.\u0275inj=I.Kb({factory:function(e){return new(e||t)},providers:[H],imports:[[a.c,n.b,r.d,J,i.a,o.b]]}),t})()}}]);