!function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}(self.webpackChunk_manniwatch_client_ng=self.webpackChunk_manniwatch_client_ng||[]).push([[526],{17526:function(n,o,i){i.r(o),i.d(o,{StopsModule:function(){return F}});var a=i(38583),r=i(22238),s=i(76627),u=i(77746),c=i(92328),f=i(57391),l=i(37716),p=i(72458),d=i(1769);function m(t,n){1&t&&l._UZ(0,"mat-divider")}function g(t,n){if(1&t&&(l.TgZ(0,"h3",8),l._uU(1),l.qZA()),2&t){var e=l.oxw().$implicit;l.xp6(1),l.Oqu(e.name.charAt(0))}}var h=function(t){return["/stop",t]};function v(t,n){if(1&t&&(l.ynx(0),l.YNc(1,m,1,0,"mat-divider",2),l.YNc(2,g,2,1,"h3",3),l.TgZ(3,"a",4),l.TgZ(4,"mat-list-item",5),l.TgZ(5,"mat-icon",6),l._uU(6,"place"),l.qZA(),l.TgZ(7,"h4",7),l._uU(8),l.qZA(),l.qZA(),l.qZA(),l.BQk()),2&t){var e=n.$implicit,o=n.index,i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.hasHeader(o)&&o>0),l.xp6(1),l.Q6J("ngIf",i.hasHeader(o)),l.xp6(1),l.s9C("title",null==e?null:e.name),l.Q6J("routerLink",l.VKq(5,h,e.shortName)),l.xp6(5),l.Oqu(null==e?null:e.name)}}var Z,k=((Z=function(){function n(e){t(this,n),this.activatedRoute=e,this.mStops=[];var o=this.activatedRoute.snapshot.data.stops.stops.sort(function(t,n){return t.name.localeCompare(n.name)});this.mStops=o}return e(n,[{key:"hasHeader",value:function(t){return 0===t||this.stops[t].name.charAt(0)!==this.stops[t-1].name.charAt(0)}},{key:"stops",get:function(){return this.mStops}}]),n}()).\u0275fac=function(t){return new(t||Z)(l.Y36(f.gz))},Z.\u0275cmp=l.Xpm({type:Z,selectors:[["app-stops-info"]],decls:2,vars:1,consts:[["role","list",1,"stoplist"],[4,"ngFor","ngForOf"],[4,"ngIf"],["mat-subheader","",4,"ngIf"],[3,"routerLink","title"],["role","listitem"],["mat-list-icon",""],["mat-line",""],["mat-subheader",""]],template:function(t,n){1&t&&(l.TgZ(0,"mat-nav-list",0),l.YNc(1,v,9,7,"ng-container",1),l.qZA()),2&t&&(l.xp6(1),l.Q6J("ngForOf",n.stops))},directives:[u.Hk,a.sg,a.O5,f.yS,u.Tg,s.Hw,u.Nh,p.X2,d.d,u.gs],styles:["mat-nav-list.stoplist[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden;flex:1}@media (min-width: 401px){mat-nav-list.stoplist[_ngcontent-%COMP%]{padding-top:100px}}"]}),Z),w=i(9018),x=i(83787),y=i(33568),_=i(35780),A=i(51095);function q(t,n){if(1&t&&(l.TgZ(0,"p"),l._uU(1),l.qZA()),2&t){var e=l.oxw();l.xp6(1),l.hij("Code: ",e.data.code,"")}}var T=function(){var n=function(){function n(e,o){t(this,n),this.dialogRef=e,this.data=o}return e(n,[{key:"onNoClick",value:function(){this.dialogRef.close(!1)}}]),n}();return n.\u0275fac=function(t){return new(t||n)(l.Y36(r.so),l.Y36(r.WI))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-retry-dialog"]],decls:11,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[4,"ngIf"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(t,n){1&t&&(l.TgZ(0,"h1",0),l._uU(1,"Error"),l.qZA(),l.TgZ(2,"div",1),l.TgZ(3,"p"),l._uU(4),l.qZA(),l.YNc(5,q,2,1,"p",2),l.qZA(),l.TgZ(6,"div",3),l.TgZ(7,"button",4),l.NdJ("click",function(){return n.onNoClick()}),l._uU(8,"No Thanks"),l.qZA(),l.TgZ(9,"button",5),l._uU(10,"Ok"),l.qZA(),l.qZA()),2&t&&(l.xp6(4),l.Oqu(n.data.message),l.xp6(1),l.Q6J("ngIf",n.data.code),l.xp6(4),l.Q6J("mat-dialog-close",!0))},directives:[r.uh,r.xY,a.O5,r.H8,A.lW,r.ZT],styles:["[_nghost-%COMP%]{background:red}"]}),n}(),b=i(32085),C=i(28499),O=i(63159),N=i(27969),U=i(37695),I=function(){var n=function(){function n(e,o,i){t(this,n),this.api=e,this.router=o,this.dialog=i}return e(n,[{key:"resolve",value:function(t,n){var e=this;return this.api.getStopLocations().pipe((0,y.K)(function(t){return 404===t.status?(e.router.navigate(["error","not-found"]),w.E):(0,x._)(t)}),(0,_.a)(function(t){var n=!1;return t.pipe(function(t){return(0,b.e)(function(n,e){var o=!1;n.subscribe(new C.Q(e,function(n){return(o||(o=!t()))&&e.next(n)}))})}(function(){return n}),(0,O.z)(function(t){return n=!0,(o=t,e.dialog.open(T,{data:{code:o.status?o.status:void 0,message:"test"}})).afterClosed().pipe((0,N.U)(function(e){if(n=!1,!e)throw t;return!0}));var o}))}))}}]),n}();return n.\u0275fac=function(t){return new(t||n)(l.LFG(U.sM),l.LFG(f.F0),l.LFG(r.uw))},n.\u0275prov=l.Yz7({token:n,factory:n.\u0275fac}),n}(),J=[{component:k,path:"",resolve:{stops:I}}],Y=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[f.Bz.forChild(J)],f.Bz]}),n}(),F=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({providers:[I],imports:[[Y,a.ez,s.Ps,u.ie,c.G,r.Is]]}),n}()}}])}();