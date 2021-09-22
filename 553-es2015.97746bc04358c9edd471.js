"use strict";(self.webpackChunk_manniwatch_client_ng=self.webpackChunk_manniwatch_client_ng||[]).push([[553],{61553:function(t,s,e){e.r(s),e.d(s,{TripPassagesModule:function(){return j}});var a=e(38583),n=e(76627),i=e(77746),r=e(52576),o=e(64702),p=e(72882),c=e(53054),l=e(45094),u=e(33763),g=e(98468),f=e(47920),h=e(83864),d=e(5207),m=e(26074),O=e(99922),_=e(37540),b=e(74294),v=e(41964),P=e(75894),I=(()=>{return(t=I||(I={}))[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED",t[t.ERROR=3]="ERROR",t[t.PAUSED=4]="PAUSED",t[t.UNKNOWN=5]="UNKNOWN",t[t.NOT_FOUND=404]="NOT_FOUND",t[t.SERVER_ERROR=500]="SERVER_ERROR",I;var t})();class R{static convertResponse(t){return(0,d.U)(t=>({failures:0,status:I.LOADED,timestamp:Date.now(),tripId:t.tripId,tripInfo:t}))}static handleError(t){return(0,P.K)(s=>(0,v.of)(s&&s.status?{failures:1,passages:void 0,status:s.status>=500&&s.status<600?I.SERVER_ERROR:s.status,timestamp:Date.now(),tripId:t}:{failures:1,passages:void 0,status:I.ERROR,timestamp:Date.now(),tripId:t}))}}var M=e(37716),S=e(37695);let D=(()=>{class t{constructor(t,s,e,a){this.route=t,this.apiService=s,this.vehicleService=e,this.appRef=a,this.statusSubject=new l.X(t.snapshot.data.tripPassages),this.statusObservable=this.createStatusObservable(this.statusSubject)}createStatusObservable(t){const s=this.createRefreshPollObservable(t);return this.appRef.isStable.pipe((0,f.P)(),(0,h.z)(()=>(0,u.T)(this.route.data.pipe((0,d.U)(t=>t.tripPassages)),s).pipe((0,m.R)((t,s,e)=>{if(s.failures>0){const e=Object.assign({},s);return e.failures=s.failures+t.failures,e}return s}),(0,O.b)(s=>t.next(s)))))}createRefreshPollObservable(t){return t.pipe((0,_.w)(t=>this.createDelayedPassageRequest(t.tripId,t.status===I.LOADED?1e4:2e4)))}createDelayedPassageRequest(t,s){return(0,g.H)(s).pipe((0,b.q)(1),(0,h.z)(()=>this.apiService.getTripPassages(t)),R.convertResponse(t),R.handleError(t))}createStopLocationObservable(){return this.route.data.pipe((0,d.U)(t=>t.tripPassages),(0,_.w)(t=>this.vehicleService.getVehicleByTripId(t.tripId)))}}return t.\u0275fac=function(s){return new(s||t)(M.LFG(p.gz),M.LFG(S.sM),M.LFG(S.fi),M.LFG(M.z2F))},t.\u0275prov=M.Yz7({token:t,factory:t.\u0275fac}),t})();var C=e(29656),x=e(71959),T=e(67316),Z=e(83902),N=e(61785),w=e(30188),y=e(8257),A=e(72458);const E=function(t){return["/stop",t]};let L=(()=>{class t{get departed(){return!!this.passage&&this.passage.status===T.F.DEPARTED}get stopping(){return!!this.passage&&this.passage.status===T.F.STOPPING}get passageTime(){if(this.passage){const t=this.passage.actualTime||this.passage.plannedTime;if(t){const s=(0,Z.Z)(t,"HH:mm",new Date),e=(0,N.Z)(s,new Date);return Math.abs(e)<15?(0,w.Z)(s,{addSuffix:!0}):(0,y.Z)(s,"p")}}return"No departure time"}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=M.Xpm({type:t,selectors:[["app-trip-passages-list-item"]],hostVars:4,hostBindings:function(t,s){2&t&&M.ekj("departed",s.departed)("stopping",s.stopping)},inputs:{passage:"passage"},decls:9,vars:6,consts:function(){let t,s;return t=$localize`:@@busStopIcon␟c5b9c1505998539fbe7799f39d5599f65afb24cb␟2554385076132608454:Bus stop icon`,s=$localize`:@@stopName␟cda036c397ca09cd2a0a308899f03908182f5e6b␟6695271591602705899:Stop name`,[["mat-list-item","","role","listitem",3,"routerLink"],["matListIcon","","role","figure","aria-label",t],["matLine","","aria-label",s,1,"title"],["matLine","",1,"subtitle"],["role","timer"],["role","status",1,"demo-2"]]},template:function(t,s){1&t&&(M.TgZ(0,"a",0),M._UZ(1,"mat-icon",1),M.TgZ(2,"h4",2),M._uU(3),M.qZA(),M.TgZ(4,"p",3),M.TgZ(5,"span",4),M._uU(6),M.TgZ(7,"span",5),M._uU(8),M.qZA(),M.qZA(),M.qZA(),M.qZA()),2&t&&(M.Q6J("routerLink",M.VKq(4,E,null==s.passage||null==s.passage.stop?null:s.passage.stop.shortName)),M.xp6(3),M.Oqu(null==s.passage||null==s.passage.stop?null:s.passage.stop.name),M.xp6(3),M.Oqu(s.passageTime),M.xp6(2),M.hij("\xa0-- ",null==s.passage?null:s.passage.status,""))},directives:[i.Tg,p.yS,n.Hw,i.Nh,A.X2],styles:['mat-icon[matListIcon][_ngcontent-%COMP%]:after{content:"directions_bus"}.departed[_nghost-%COMP%]   a[_ngcontent-%COMP%], .departed   [_nghost-%COMP%]   a[_ngcontent-%COMP%]{opacity:.75!important;background-color:#0000001a}.departed[_nghost-%COMP%]   mat-icon[matListIcon][_ngcontent-%COMP%]:after, .departed   [_nghost-%COMP%]   mat-icon[matListIcon][_ngcontent-%COMP%]:after{content:"transfer_within_a_station"}.stopping[_nghost-%COMP%]   a[_ngcontent-%COMP%], .stopping   [_nghost-%COMP%]   a[_ngcontent-%COMP%]{background-color:#00ff001a}.stopping[_nghost-%COMP%]   mat-icon[matListIcon][_ngcontent-%COMP%]:after, .stopping   [_nghost-%COMP%]   mat-icon[matListIcon][_ngcontent-%COMP%]:after{content:"place"}h4.title[_ngcontent-%COMP%]{font-size:16px!important;font-family:Roboto,"Helvetica Neue",sans-serif;font-weight:700!important;opacity:.87}p.subtitle[_ngcontent-%COMP%]{font-size:12px!important;font-family:Roboto,"Helvetica Neue",sans-serif;line-height:20px;font-weight:600!important;opacity:.6}'],changeDetection:0}),t})();function U(t,s){1&t&&M._UZ(0,"app-trip-passages-list-item",4),2&t&&M.Q6J("passage",s.$implicit)}function q(t,s){if(1&t&&(M.TgZ(0,"mat-nav-list",2),M.YNc(1,U,1,1,"app-trip-passages-list-item",3),M.qZA()),2&t){const t=M.oxw();M.xp6(1),M.Q6J("ngForOf",t.passages)}}function z(t,s){1&t&&(M.TgZ(0,"h3"),M._uU(1,"No Passages"),M.qZA())}let k=(()=>{class t{constructor(){this.passages=[]}set tripInfo(t){if(t){const s=[];return t.actual&&s.push(...t.actual),t.old&&t.old.length>0&&s.push(...t.old),s.sort((t,s)=>parseInt(t.stop_seq_num,10)-parseInt(s.stop_seq_num,10)),void(this.passages=s)}this.passages=[]}hasPassages(){return Array.isArray(this.passages)&&this.passages.length>0}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=M.Xpm({type:t,selectors:[["app-trip-passages-list"]],inputs:{tripInfo:"tripInfo"},decls:3,vars:2,consts:[["role","list",4,"ngIf","ngIfElse"],["noPassagesBlock",""],["role","list"],[3,"passage",4,"ngFor","ngForOf"],[3,"passage"]],template:function(t,s){if(1&t&&(M.YNc(0,q,2,1,"mat-nav-list",0),M.YNc(1,z,2,0,"ng-template",null,1,M.W1O)),2&t){const t=M.MAs(2);M.Q6J("ngIf",s.hasPassages())("ngIfElse",t)}},directives:[a.O5,i.Hk,a.sg,L],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),t})();function F(t,s){1&t&&(M.TgZ(0,"div",5),M.TgZ(1,"h4"),M._uU(2,"not found"),M.qZA(),M.qZA())}function B(t,s){if(1&t&&(M.ynx(0),M.TgZ(1,"app-header-box",1),M._UZ(2,"map",2),M.qZA(),M.YNc(3,F,3,0,"div",3),M._UZ(4,"app-trip-passages-list",4),M.BQk()),2&t){const t=s.ngIf,e=M.oxw();M.xp6(1),M.hYB("title","",null==t?null:t.tripInfo.routeName," - ",null==t?null:t.tripInfo.directionText,""),M.xp6(1),M.Q6J("mapData",e.headerMapData),M.xp6(1),M.Q6J("ngIf",t.status==e.STATUS_OPS.NOT_FOUND),M.xp6(1),M.Q6J("tripInfo",t.tripInfo)}}let J=(()=>{class t{constructor(t,s){this.zone=t,this.passageService=s,this.subscriptions=[],this.STATUS_OPS=I}ngOnInit(){this.subscriptions.push(this.passageService.createStopLocationObservable().pipe((0,c.y)(this.zone)).subscribe({next:t=>{this.headerMapData=t?{map:{center:t},stops:void 0,vehicles:[t]}:{map:{blur:!0,center:void 0}}}}))}ngOnDestroy(){this.subscriptions.forEach(t=>{t.unsubscribe()}),this.subscriptions=[]}}return t.\u0275fac=function(s){return new(s||t)(M.Y36(M.R0b),M.Y36(D))},t.\u0275cmp=M.Xpm({type:t,selectors:[["app-trip-passages"]],features:[M._Bn([D])],decls:2,vars:3,consts:[[4,"ngIf"],[3,"title"],["appOlStatic","",3,"mapData"],["class","not-found",4,"ngIf"],[3,"tripInfo"],[1,"not-found"]],template:function(t,s){1&t&&(M.YNc(0,B,5,5,"ng-container",0),M.ALo(1,"async")),2&t&&M.Q6J("ngIf",M.lcZ(1,1,s.passageService.statusObservable))},directives:[a.O5,C.c,x.C,k],pipes:[a.Ov],styles:["h3.route-title[_ngcontent-%COMP%]{padding:24px}div.error-box[_ngcontent-%COMP%]{background:#F44336;padding:16px;flex:0 0 auto}div.error-box[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{text-transform:capitalize;font-weight:bold;display:block;font-size:16px}div.error-box[_ngcontent-%COMP%]   span.text[_ngcontent-%COMP%]{font-size:12px}mat-nav-list[_ngcontent-%COMP%]{flex-grow:1}"]}),t})(),Y=(()=>{class t{constructor(t){this.api=t}resolve(t,s){const e=t.params.tripId;return this.api.getTripPassages(e).pipe(R.convertResponse(e),R.handleError(e))}}return t.\u0275fac=function(s){return new(s||t)(M.LFG(S.sM))},t.\u0275prov=M.Yz7({token:t,factory:t.\u0275fac}),t})();const Q=[{component:J,data:{openSidebar:!0},path:":tripId",resolve:{tripPassages:Y}}];let G=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=M.oAB({type:t}),t.\u0275inj=M.cJS({imports:[[p.Bz.forChild(Q)],p.Bz]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=M.oAB({type:t}),t.\u0275inj=M.cJS({providers:[Y],imports:[[a.ez,n.Ps,i.ie,G,r.D,o.qe]]}),t})()}}]);