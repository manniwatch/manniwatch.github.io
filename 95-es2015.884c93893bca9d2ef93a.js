(self.webpackChunk_manniwatch_client_ng=self.webpackChunk_manniwatch_client_ng||[]).push([[95],{84095:function(t,e,s){"use strict";s.r(e),s.d(e,{StopPointModule:function(){return I}});var a=s(61116),r=s(77307),o=s(85078),n=s(87672),i=s(57173),p=s(37112),c=s(30304),u=s(13096),l=s(85496),h=s(70035),g=s(14951),b=s(51816),f=s(35366),d=s(10682),P=s(32860);let v=(()=>{class t{constructor(t,e){this.api=t,this.router=e}resolve(t,e){return this.api.getStopPointPassages(t.params.stopPointId).pipe((0,b.K)(t=>(404===t.status&&this.router.navigate(["stops"]),g.E)))}}return t.\u0275fac=function(e){return new(e||t)(f.LFG(d.sM),f.LFG(P.F0))},t.\u0275prov=f.Yz7({token:t,factory:t.\u0275fac}),t})();var m=s(90273),S=s(91681),x=s(14324),O=s(18606),_=s(47228),Z=s(81258);let w=(()=>{class t{constructor(t,e,s,a){this.route=t,this.apiService=e,this.stopService=s,this.appRef=a,this.stopPassageObservable=this.route.data.pipe((0,S.U)(t=>t.stopPoint))}createStopPassageRefreshObservable(){return this.stopPassageObservable.pipe((0,x.w)(t=>this.appRef.isStable.pipe((0,O.P)(t=>t),(0,_.z)(()=>(0,m.F)(5e3).pipe((0,x.w)(()=>this.apiService.getStopPointPassages(t.stopShortName)))),(0,Z.O)(t))))}createStopPointLocationObservable(){return this.stopPassageObservable.pipe((0,x.w)(t=>this.stopService.watchStopPoint(t.stopShortName).pipe((0,Z.O)(void 0))),(0,S.U)(t=>null==t?{map:{blur:!0}}:{map:{blur:!1,center:t}}))}}return t.\u0275fac=function(e){return new(e||t)(f.LFG(P.gz),f.LFG(d.sM),f.LFG(d.gd),f.LFG(f.z2F))},t.\u0275prov=f.Yz7({token:t,factory:t.\u0275fac}),t})();var z=s(45567),C=s(98139),M=s(28604),q=s(48802);function y(t,e){1&t&&(f.TgZ(0,"div",8),f.TgZ(1,"h3"),f._uU(2,"Error occured"),f.qZA(),f.TgZ(3,"p"),f._uU(4,"Will retry in a 0s"),f.qZA(),f.qZA())}function A(t,e){1&t&&f.YNc(0,y,5,0,"ng-template")}const F=[{component:(()=>{class t{constructor(t){this.stopInfoService=t,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.stopInfoService.createStopPointLocationObservable().subscribe({next:t=>{this.headerMapData=t}})),this.subscriptions.push(this.stopInfoService.createStopPassageRefreshObservable().subscribe({next:t=>{this.stopPassage=t}}))}ngOnDestroy(){this.subscriptions.forEach(t=>{t.unsubscribe()}),this.subscriptions=[]}}return t.\u0275fac=function(e){return new(e||t)(f.Y36(w))},t.\u0275cmp=f.Xpm({type:t,selectors:[["app-stop-point-info"]],features:[f._Bn([w])],decls:8,vars:5,consts:function(){let t,e;return t=$localize`:tab header departures|Departures@@departures␟891e36a38df10a0b8940219f4a51a03ea982c084␟1335502203219771538:Departures`,e=$localize`:tab header routes|Routes@@Routes␟41f0d60bbecc9f4b18c97c3656eeafe9a8f6d101␟99095597038876536:Routes`,[[3,"title"],["appOlStatic","",3,"mapData"],["mat-stretch-tabs","","dynamicHeight",""],["label",t],[3,"departures"],["label",e],[3,"routes"],[4,"ngIf"],[1,"error-box"]]},template:function(t,e){1&t&&(f.TgZ(0,"app-header-box",0),f._UZ(1,"map",1),f.qZA(),f.TgZ(2,"mat-tab-group",2),f.TgZ(3,"mat-tab",3),f._UZ(4,"app-departure-list",4),f.qZA(),f.TgZ(5,"mat-tab",5),f._UZ(6,"app-route-list",6),f.qZA(),f.qZA(),f.YNc(7,A,1,0,void 0,7)),2&t&&(f.s9C("title",null==e.stopPassage?null:e.stopPassage.stopName),f.xp6(1),f.Q6J("mapData",e.headerMapData),f.xp6(3),f.Q6J("departures",null==e.stopPassage?null:e.stopPassage.actual),f.xp6(2),f.Q6J("routes",null==e.stopPassage?null:e.stopPassage.routes),f.xp6(1),f.Q6J("ngIf",!1))},directives:[z.c,C.C,i.SP,i.uX,M.e,q.q,a.O5],styles:["mat-tab-group[_ngcontent-%COMP%]{flex-grow:1}div.error-box[_ngcontent-%COMP%]{flex:0 0 auto;background:#b00020;color:#fff;padding:5px 20px}div.error-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;line-height:30px;padding:0;margin:0}div.error-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;line-height:20px;padding:0;margin:0}"]}),t})(),data:{openSidebar:!0},path:":stopPointId",resolve:{stopPoint:v}}];let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f.oAB({type:t}),t.\u0275inj=f.cJS({imports:[[P.Bz.forChild(F)],P.Bz]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f.oAB({type:t}),t.\u0275inj=f.cJS({providers:[v],imports:[[a.ez,c.nJ,r.Ps,o.ie,p.g0,n.Cq,D,i.Nh,u.D,l.qe,h.W]]}),t})()}}]);