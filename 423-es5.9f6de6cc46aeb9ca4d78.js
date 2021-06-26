!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(self.webpackChunk_manniwatch_client_ng=self.webpackChunk_manniwatch_client_ng||[]).push([[423],{92423:function(n,e,o){"use strict";o.r(e),o.d(e,{ErrorModule:function(){return A},ErrorType:function(){return r}});var i,r=((i=r||(r={}))[i.PASSAGE_NOT_FOUND=1]="PASSAGE_NOT_FOUND",i[i.VEHICLE_NOT_FOUND=2]="VEHICLE_NOT_FOUND",i[i.STOP_NOT_FOUND=3]="STOP_NOT_FOUND",i[i.UNKNOWN=0]="UNKNOWN",r),c=o(38583),a=o(1769),s=o(76627),u=o(77746),p=o(72882),h=o(37716),l=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=h.Xpm({type:n,selectors:[["app-common-error"]],decls:7,vars:0,consts:[[1,"header"]],template:function(t,n){1&t&&(h.TgZ(0,"div",0),h.TgZ(1,"mat-icon"),h._uU(2,"help_outline"),h.qZA(),h.qZA(),h.TgZ(3,"h3"),h._uU(4,"Error Occured"),h.qZA(),h.TgZ(5,"p"),h._uU(6,"An error occured while performing an action."),h.qZA())},directives:[s.Hw],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-flow:column;height:100%;background:#f9f9f9}.header[_ngcontent-%COMP%]{position:relative;height:calc(100vw / 4 * 3);width:100%;max-height:250px;min-height:150px;background:#999}.header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:64px;height:64px;font-size:64px}"]}),n}(),g=o(5207);function f(t,n){1&t&&(h.ynx(0),h.TgZ(1,"p"),h._uU(2,"The passage could not be found. It either expired or has yet to start."),h.qZA(),h.TgZ(3,"p"),h._uU(4,"Please select another passage."),h.qZA(),h.BQk())}function d(t,n){1&t&&(h.ynx(0),h.TgZ(1,"p"),h._uU(2,"The requested vehicle could not be found. It might not be active at the moment."),h.qZA(),h.BQk())}function m(t,n){1&t&&(h.ynx(0),h.TgZ(1,"p"),h._uU(2,"The requested resource can not be found."),h.qZA(),h.BQk())}var _=function(){var n=function n(e){t(this,n),this.route=e,this.errorTypeObservable=this.route.queryParams.pipe((0,g.U)(function(t){return t.type?t.type:r.UNKNOWN}))};return n.\u0275fac=function(t){return new(t||n)(h.Y36(p.gz))},n.\u0275cmp=h.Xpm({type:n,selectors:[["app-not-found-msg-switch"]],decls:5,vars:5,consts:[[1,"info",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(t,n){1&t&&(h.TgZ(0,"div",0),h.ALo(1,"async"),h.YNc(2,f,5,0,"ng-container",1),h.YNc(3,d,3,0,"ng-container",1),h.YNc(4,m,3,0,"ng-container",2),h.qZA()),2&t&&(h.Q6J("ngSwitch",h.lcZ(1,3,n.errorTypeObservable)),h.xp6(2),h.Q6J("ngSwitchCase",1),h.xp6(1),h.Q6J("ngSwitchCase",2))},directives:[c.RF,c.n9,c.ED],pipes:[c.Ov],styles:["[_nghost-%COMP%]{display:block}"]}),n}(),Z=o(72458),O=function(t){return[t]};function T(t,n){if(1&t&&(h.TgZ(0,"mat-list-item",4),h.TgZ(1,"mat-icon",5),h._uU(2),h.qZA(),h.TgZ(3,"h3",6),h._uU(4),h.qZA(),h.qZA()),2&t){var e=n.$implicit;h.Q6J("routerLink",h.VKq(3,O,e.path)),h.xp6(2),h.Oqu(e.icon),h.xp6(2),h.Oqu(e.title)}}var w,v,x=[{component:l,path:""},{component:(w=function n(){t(this,n),this.endpoints=[{icon:"home",path:"/",title:"Home"},{icon:"place",path:"/stops",title:"Stops"}]},w.\u0275fac=function(t){return new(t||w)},w.\u0275cmp=h.Xpm({type:w,selectors:[["app-not-found"]],decls:12,vars:1,consts:[[1,"header"],[1,"content"],["role","list"],["role","listitem",3,"routerLink",4,"ngFor","ngForOf"],["role","listitem",3,"routerLink"],["matListIcon",""],["matLine",""]],template:function(t,n){1&t&&(h.TgZ(0,"div",0),h.TgZ(1,"mat-icon"),h._uU(2,"help_outline"),h.qZA(),h.qZA(),h.TgZ(3,"div",1),h.TgZ(4,"h3"),h._uU(5,"Not Found"),h.qZA(),h._UZ(6,"app-not-found-msg-switch"),h._UZ(7,"mat-divider"),h.TgZ(8,"h5"),h._uU(9,"You might want to go to:"),h.qZA(),h.TgZ(10,"mat-nav-list",2),h.YNc(11,T,5,5,"mat-list-item",3),h.qZA(),h.qZA()),2&t&&(h.xp6(11),h.Q6J("ngForOf",n.endpoints))},directives:[s.Hw,_,a.d,u.Hk,c.sg,u.Tg,p.rH,u.Nh,Z.X2],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-flow:column;height:100%;background:#f9f9f9}.header[_ngcontent-%COMP%]{position:relative;height:calc(100vw / 4 * 3);width:100%;max-height:250px;min-height:150px;background:#999}.header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:64px;height:64px;font-size:64px}div.content[_ngcontent-%COMP%]{margin:10px 20px}"]}),w),path:"not-found"},{path:"**",redirectTo:"not-found"}],N=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=h.oAB({type:n}),n.\u0275inj=h.cJS({imports:[[p.Bz.forChild(x)],p.Bz]}),n}(),A=((v=function n(){t(this,n)}).\u0275fac=function(t){return new(t||v)},v.\u0275mod=h.oAB({type:v}),v.\u0275inj=h.cJS({providers:[],imports:[[N,c.ez,u.ie,s.Ps,a.t]]}),v)}}])}();