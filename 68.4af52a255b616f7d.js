"use strict";(self.webpackChunkmanniwatch=self.webpackChunkmanniwatch||[]).push([[68],{3068:(O,v,s)=>{s.r(v),s.d(v,{StopsModule:()=>A});var u=s(6895),g=s(5412),m=s(7392),l=s(4046),h=s(2328),r=s(6159),t=s(4650),M=s(3238),E=s(4850);function p(o,e){1&o&&t._UZ(0,"mat-divider")}function d(o,e){if(1&o&&(t.TgZ(0,"h3",8),t._uU(1),t.qZA()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.name.charAt(0))}}const S=function(o){return["/stop",o]};function i(o,e){if(1&o&&(t.ynx(0),t.YNc(1,p,1,0,"mat-divider",2),t.YNc(2,d,2,1,"h3",3),t.TgZ(3,"a",4)(4,"mat-list-item",5)(5,"mat-icon",6),t._uU(6,"place"),t.qZA(),t.TgZ(7,"h4",7),t._uU(8),t.qZA()()(),t.BQk()),2&o){const n=e.$implicit,a=e.index,c=t.oxw();t.xp6(1),t.Q6J("ngIf",c.hasHeader(a)&&a>0),t.xp6(1),t.Q6J("ngIf",c.hasHeader(a)),t.xp6(1),t.s9C("title",null==n?null:n.name),t.Q6J("routerLink",t.VKq(5,S,n.shortName)),t.xp6(5),t.Oqu(null==n?null:n.name)}}let f=(()=>{class o{constructor(n){this.activatedRoute=n,this.mStops=[];const c=this.activatedRoute.snapshot.data?.stops?.stops;this.mStops=c?c.sort((y,D)=>y.name.localeCompare(D.name)):[]}hasHeader(n){return 0===n||this.stops[n].name.charAt(0)!==this.stops[n-1].name.charAt(0)}get stops(){return this.mStops}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-stops-info"]],decls:2,vars:1,consts:[["role","list",1,"stoplist"],[4,"ngFor","ngForOf"],[4,"ngIf"],["mat-subheader","",4,"ngIf"],[3,"routerLink","title"],["role","listitem"],["mat-list-icon",""],["mat-line",""],["mat-subheader",""]],template:function(n,a){1&n&&(t.TgZ(0,"mat-nav-list",0),t.YNc(1,i,9,7,"ng-container",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",a.stops))},dependencies:[r.yS,u.sg,u.O5,m.Hw,l.Hk,l.Tg,M.X2,l.Nh,l.gs,E.d],styles:["mat-nav-list.stoplist[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden;flex:1}@media (min-width: 401px){mat-nav-list.stoplist[_ngcontent-%COMP%]{padding-top:100px}}"]}),o})();var I=s(3411),x=s(3948);let C=(()=>{class o extends I.Z{constructor(n,a,c){super(a,c),this.api=n}createLoader(n,a){return this.api.getStopLocations()}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(x.sM),t.LFG(r.F0),t.LFG(x.jn))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();const R=[{component:f,path:"",resolve:{stops:C}}];let P=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.Bz.forChild(R),r.Bz]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[C],imports:[P,u.ez,m.Ps,l.ie,h.G,g.Is]}),o})()},3411:(O,v,s)=>{s.d(v,{Z:()=>M});var u=s(529),g=s(5535),m=s(5577),l=s(515),h=s(9646),r=s(2843),t=s(2076);class M{constructor(p,d){this.router=p,this.dialog=d}resolve(p,d){return this.createLoader(p,d).pipe((0,g.a)(S=>S.pipe((0,m.z)(i=>{if(i instanceof u.UA){if(404===i.status)return this.navigate(["error","not-found"]).pipe((0,m.z)(f=>l.E));if(i.status>=500&&i.status<600)return this.dialog.getRetryDialog({msg:"Error"}).pipe((0,m.z)(f=>f?(0,h.of)(f):(0,r._)(()=>i)))}return(0,r._)(()=>i)}))))}navigate(...p){return(0,t.D)(this.router.navigate(...p))}}}}]);