"use strict";(self.webpackChunkmanniwatch=self.webpackChunkmanniwatch||[]).push([[78],{5078:(J,c,o)=>{o.r(c),o.d(c,{StopPointModule:()=>G});var u=o(9462),S=o(3141),h=o(764),v=o(6430),p=o(7361),O=o(5686),m=o(223),T=o(7980),b=o(8312),I=o(455),M=o(6723),t=o(2093),r=o(3769),i=o(4918);let P=(()=>{class e extends M.Z{api;constructor(s,a,n){super(a,n),this.api=s}createLoader(s,a){return this.api.getStopPointPassages(s.params.stopPointId)}static \u0275fac=function(a){return new(a||e)(t.LFG(r.sM),t.LFG(i.F0),t.LFG(r.jn))};static \u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var N=o(339),d=o(8412),l=o(2835),C=o(6966),R=o(5473),f=o(19);let g=(()=>{class e{route;apiService;stopService;appRef;stopPassageObservable;constructor(s,a,n,D){this.route=s,this.apiService=a,this.stopService=n,this.appRef=D,this.stopPassageObservable=this.route.data.pipe((0,d.U)($=>$.stopPoint))}createStopPassageRefreshObservable(){return this.stopPassageObservable.pipe((0,l.w)(s=>this.appRef.isStable.pipe((0,C.P)(a=>a),(0,R.z)(()=>(0,N.F)(5e3).pipe((0,l.w)(()=>this.apiService.getStopPointPassages(s.stopShortName)))),(0,f.O)(s))))}createStopPointLocationObservable(){return this.stopPassageObservable.pipe((0,l.w)(s=>this.stopService.watchStopPoint(s.stopShortName).pipe((0,f.O)(void 0))),(0,d.U)(s=>null==s?{map:{blur:!0}}:{map:{blur:!1,center:s}}))}static \u0275fac=function(a){return new(a||e)(t.LFG(i.gz),t.LFG(r.sM),t.LFG(r.gd),t.LFG(t.z2F))};static \u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var F=o(3070),y=o(243),E=o(8639),x=o(8403);function A(e,U){1&e&&(t.TgZ(0,"div",8)(1,"h3"),t._uU(2,"Error occured"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Will retry in a 0s"),t.qZA()())}function L(e,U){1&e&&t.YNc(0,A,5,0,"ng-template")}const Z=[{component:(()=>{class e{stopInfoService;headerMapData;subscriptions=[];stopPassage;constructor(s){this.stopInfoService=s}ngOnInit(){this.subscriptions.push(this.stopInfoService.createStopPointLocationObservable().subscribe({next:s=>{this.headerMapData=s}})),this.subscriptions.push(this.stopInfoService.createStopPassageRefreshObservable().subscribe({next:s=>{this.stopPassage=s}}))}ngOnDestroy(){this.subscriptions.forEach(s=>{s.unsubscribe()}),this.subscriptions=[]}static \u0275fac=function(a){return new(a||e)(t.Y36(g))};static \u0275cmp=t.Xpm({type:e,selectors:[["app-stop-point-info"]],features:[t._Bn([g])],decls:8,vars:5,consts:()=>{let s,a;return s=$localize`:tab header departures|Departures@@departures␟891e36a38df10a0b8940219f4a51a03ea982c084␟1335502203219771538:Departures`,a=$localize`:tab header routes|Routes@@Routes␟41f0d60bbecc9f4b18c97c3656eeafe9a8f6d101␟99095597038876536:Routes`,[[3,"title"],["appOlStatic","",3,"mapData"],["mat-stretch-tabs","","dynamicHeight",""],["label",s],[3,"departures"],["label",a],[3,"routes"],[4,"ngIf"],[1,"error-box"]]},template:function(a,n){1&a&&(t.TgZ(0,"app-header-box",0),t._UZ(1,"map",1),t.qZA(),t.TgZ(2,"mat-tab-group",2)(3,"mat-tab",3),t._UZ(4,"app-departure-list",4),t.qZA(),t.TgZ(5,"mat-tab",5),t._UZ(6,"app-route-list",6),t.qZA()(),t.YNc(7,L,1,0,null,7)),2&a&&(t.s9C("title",null==n.stopPassage?null:n.stopPassage.stopName),t.xp6(1),t.Q6J("mapData",n.headerMapData),t.xp6(3),t.Q6J("departures",null==n.stopPassage?null:n.stopPassage.actual),t.xp6(2),t.Q6J("routes",null==n.stopPassage?null:n.stopPassage.routes),t.xp6(1),t.Q6J("ngIf",!1))},dependencies:[u.O5,F.e,p.uX,p.SP,y.c,E.C,x.q],styles:["mat-tab-group[_ngcontent-%COMP%]{flex-grow:1}div.error-box[_ngcontent-%COMP%]{flex:0 0 auto;background:#b00020;color:#fff;padding:5px 20px}div.error-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;line-height:30px;padding:0;margin:0}div.error-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;line-height:20px;padding:0;margin:0}"]})}return e})(),data:{openSidebar:!0},path:":stopPointId",resolve:{stopPoint:P}}];let z=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=t.oAB({type:e});static \u0275inj=t.cJS({imports:[i.Bz.forChild(Z),i.Bz]})}return e})(),G=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=t.oAB({type:e});static \u0275inj=t.cJS({providers:[P],imports:[u.ez,m.nJ,S.Ps,h.ie,O.g0,v.Cq,z,p.Nh,T.D,b.qe,I.W]})}return e})()}}]);