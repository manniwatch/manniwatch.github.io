(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{eZlm:function(t,e,s){"use strict";s.r(e),s.d(e,"StopsModule",(function(){return B}));var n=s("ofXK"),o=s("0IaG"),i=s("NFeN"),a=s("MutI"),c=s("bTqV"),r=s("fXoL");let l=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,i.b,c.b,o.f],n.c,i.b,c.b,o.f]}),t})();function b(t,e){if(1&t&&(r.Sb(0,"p"),r.Dc(1),r.Rb()),2&t){const t=r.gc();r.Cb(1),r.Fc("Code: ",t.data.code,"")}}let p=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}onNoClick(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(o.g),r.Nb(o.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-retry-dialog"]],decls:11,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[4,"ngIf"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(t,e){1&t&&(r.Sb(0,"h1",0),r.Dc(1,"Error"),r.Rb(),r.Sb(2,"div",1),r.Sb(3,"p"),r.Dc(4),r.Rb(),r.Bc(5,b,2,1,"p",2),r.Rb(),r.Sb(6,"div",3),r.Sb(7,"button",4),r.cc("click",(function(){return e.onNoClick()})),r.Dc(8,"No Thanks"),r.Rb(),r.Sb(9,"button",5),r.Dc(10,"Ok"),r.Rb(),r.Rb()),2&t&&(r.Cb(4),r.Ec(e.data.message),r.Cb(1),r.mc("ngIf",e.data.code),r.Cb(4),r.mc("mat-dialog-close",!0))},directives:[o.h,o.e,n.l,o.c,c.a,o.d],styles:["[_nghost-%COMP%]{background:red}"]}),t})();var u=s("tyNb"),d=s("FKr1"),m=s("f0Cb");function f(t,e){1&t&&r.Ob(0,"mat-divider")}function h(t,e){if(1&t&&(r.Sb(0,"h3",8),r.Dc(1),r.Rb()),2&t){const t=r.gc().$implicit;r.Cb(1),r.Ec(t.name.charAt(0))}}const g=function(t){return["/stop",t]};function v(t,e){if(1&t&&(r.Qb(0),r.Bc(1,f,1,0,"mat-divider",2),r.Bc(2,h,2,1,"h3",3),r.Sb(3,"a",4),r.Sb(4,"mat-list-item",5),r.Sb(5,"mat-icon",6),r.Dc(6,"place"),r.Rb(),r.Sb(7,"h4",7),r.Dc(8),r.Rb(),r.Rb(),r.Rb(),r.Pb()),2&t){const t=e.$implicit,s=e.index,n=r.gc();r.Cb(1),r.mc("ngIf",n.hasHeader(s)&&s>0),r.Cb(1),r.mc("ngIf",n.hasHeader(s)),r.Cb(1),r.nc("title",null==t?null:t.name),r.mc("routerLink",r.rc(5,g,t.shortName)),r.Cb(5),r.Ec(null==t?null:t.name)}}let C=(()=>{class t{constructor(t){this.activatedRoute=t,this.mStops=[];const e=this.activatedRoute.snapshot.data.stops.stops.sort((t,e)=>t.name.localeCompare(e.name));this.mStops=e}hasHeader(t){return 0===t||this.stops[t].name.charAt(0)!==this.stops[t-1].name.charAt(0)}get stops(){return this.mStops}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(u.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-stops-info"]],decls:2,vars:1,consts:[["role","list",1,"stoplist"],[4,"ngFor","ngForOf"],[4,"ngIf"],["mat-subheader","",4,"ngIf"],[3,"routerLink","title"],["role","listitem"],["mat-list-icon",""],["mat-line",""],["mat-subheader",""]],template:function(t,e){1&t&&(r.Sb(0,"mat-nav-list",0),r.Bc(1,v,9,7,"ng-container",1),r.Rb()),2&t&&(r.Cb(1),r.mc("ngForOf",e.stops))},directives:[a.f,n.k,n.l,u.h,a.c,i.a,a.b,d.f,m.a,a.e],styles:["mat-nav-list.stoplist[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden;flex:1}@media (min-width:401px){mat-nav-list.stoplist[_ngcontent-%COMP%]{padding-top:100px}}"]}),t})();var k=s("EY2u"),w=s("z6cu"),S=s("JIr8"),y=s("MtjB"),R=s("7o/Q");class O{constructor(t){this.predicate=t}call(t,e){return e.subscribe(new x(t,this.predicate))}}class x extends R.a{constructor(t,e){super(t),this.predicate=e,this.skipping=!0,this.index=0}_next(t){const e=this.destination;this.skipping&&this.tryCallPredicate(t),this.skipping||e.next(t)}tryCallPredicate(t){try{const e=this.predicate(t,this.index++);this.skipping=Boolean(e)}catch(e){this.destination.error(e)}}}var I=s("5+tZ"),N=s("lJxs"),j=s("o0su");let D=(()=>{class t{constructor(t,e,s){this.api=t,this.router=e,this.dialog=s}resolve(t,e){return this.api.getStopLocations().pipe(Object(S.a)(t=>404===t.status?(this.router.navigate(["error","not-found"]),k.a):Object(w.a)(t)),Object(y.a)((s=t=>this.dialog.open(p,{data:{code:t.status?t.status:void 0,message:"test"}}),t=>{let e=!1;return t.pipe((n=()=>e,t=>t.lift(new O(n))),Object(I.a)(t=>(e=!0,s(t).afterClosed().pipe(Object(N.a)(s=>{if(e=!1,!s)throw t;return!0})))));var n})));var s}}return t.\u0275fac=function(e){return new(e||t)(r.Yb(j.a),r.Yb(u.f),r.Yb(o.b))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac}),t})();const F=[{component:C,path:"",resolve:{stops:D}}];let L=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},imports:[[u.i.forChild(F)],u.i]}),t})(),B=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},providers:[D],imports:[[L,n.c,i.b,a.d,l,o.f]]}),t})()}}]);