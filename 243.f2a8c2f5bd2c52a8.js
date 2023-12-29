"use strict";(self.webpackChunkmanniwatch=self.webpackChunkmanniwatch||[]).push([[243],{2243:(Z,l,s)=>{s.r(l),s.d(l,{StopModule:()=>L});var h=s(9462),g=s(3141),S=s(764),v=s(6430),i=s(7361),m=s(5686),O=s(223),P=s(7980),M=s(8312),b=s(455),T=s(6723),t=s(2093),r=s(3769),p=s(4918);let c=(()=>{class a extends T.Z{api;constructor(e,o,n){super(o,n),this.api=e}createLoader(e,o){return this.api.getStopPassages(e.params.stopId)}static \u0275fac=function(o){return new(o||a)(t.LFG(r.sM),t.LFG(p.F0),t.LFG(r.jn))};static \u0275prov=t.Yz7({token:a,factory:a.\u0275fac})}return a})();var C=s(339),R=s(8412),u=s(5473),d=s(2835),I=s(6966),N=s(19);let f=(()=>{class a{route;apiService;stopService;appRef;stopInfoObservable;constructor(e,o,n,D){this.route=e,this.apiService=o,this.stopService=n,this.appRef=D,this.stopInfoObservable=this.route.data.pipe((0,R.U)(G=>G.stopInfo))}createStopLocationObservable(){return this.stopInfoObservable.pipe((0,u.z)(e=>this.stopService.filterStop(e.stopShortName)))}createStopPassageRefreshObservable(){return this.stopInfoObservable.pipe((0,d.w)(e=>this.appRef.isStable.pipe((0,I.P)(o=>o),(0,u.z)(()=>(0,C.F)(1e4).pipe((0,d.w)(()=>this.apiService.getStopPassages(e.stopShortName)))),(0,N.O)(e))))}static \u0275fac=function(o){return new(o||a)(t.LFG(p.gz),t.LFG(r.sM),t.LFG(r.gd),t.LFG(t.z2F))};static \u0275prov=t.Yz7({token:a,factory:a.\u0275fac})}return a})();var F=s(3070),y=s(243),E=s(8639),x=s(8403);const z=[{component:(()=>{class a{stopInfoService;headerMapData;subscriptions=[];stopPassage;constructor(e){this.stopInfoService=e}ngOnInit(){this.subscriptions.push(this.stopInfoService.createStopPassageRefreshObservable().subscribe({next:e=>{this.stopPassage=e}})),this.subscriptions.push(this.stopInfoService.createStopLocationObservable().subscribe({next:e=>{this.headerMapData=e?{map:{center:e},stops:[e],vehicles:void 0}:{map:{blur:!0,center:void 0}}}}))}ngOnDestroy(){this.subscriptions.forEach(e=>{e.unsubscribe()}),this.subscriptions=[]}static \u0275fac=function(o){return new(o||a)(t.Y36(f))};static \u0275cmp=t.Xpm({type:a,selectors:[["app-stop-info"]],features:[t._Bn([f])],decls:7,vars:4,consts:()=>{let e,o;return e=$localize`:tab header departures|Departures@@departures␟891e36a38df10a0b8940219f4a51a03ea982c084␟1335502203219771538:Departures`,o=$localize`:tab header routes|Routes@@Routes␟41f0d60bbecc9f4b18c97c3656eeafe9a8f6d101␟99095597038876536:Routes`,[[3,"title"],["appOlStatic","",3,"mapData"],["mat-stretch-tabs","","dynamicHeight",""],["label",e],[3,"departures"],["label",o],[3,"routes"]]},template:function(o,n){1&o&&(t.TgZ(0,"app-header-box",0),t._UZ(1,"map",1),t.qZA(),t.TgZ(2,"mat-tab-group",2)(3,"mat-tab",3),t._UZ(4,"app-departure-list",4),t.qZA(),t.TgZ(5,"mat-tab",5),t._UZ(6,"app-route-list",6),t.qZA()()),2&o&&(t.Q6J("title",null==n.stopPassage?null:n.stopPassage.stopName),t.xp6(1),t.Q6J("mapData",n.headerMapData),t.xp6(3),t.Q6J("departures",null==n.stopPassage?null:n.stopPassage.actual),t.xp6(2),t.Q6J("routes",null==n.stopPassage?null:n.stopPassage.routes))},dependencies:[i.uX,i.SP,F.e,y.c,E.C,x.q],styles:["mat-tab-group[_ngcontent-%COMP%]{flex-grow:1}div.error-box[_ngcontent-%COMP%]{flex:0 0 auto;background:#b00020;color:#fff;padding:5px 20px}div.error-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;line-height:30px;padding:0;margin:0}div.error-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;line-height:20px;padding:0;margin:0}"]})}return a})(),data:{openSidebar:!0},path:":stopId",resolve:{stopInfo:c}}];let A=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=t.oAB({type:a});static \u0275inj=t.cJS({imports:[p.Bz.forChild(z),p.Bz]})}return a})(),L=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=t.oAB({type:a});static \u0275inj=t.cJS({providers:[c],imports:[h.ez,g.Ps,S.ie,m.g0,v.Cq,A,i.Nh,O.nJ,P.D,M.qe,b.W]})}return a})()}}]);