"use strict";(self.webpackChunkmanniwatch=self.webpackChunkmanniwatch||[]).push([[117],{8117:(w,m,i)=>{i.r(m),i.d(m,{ErrorModule:()=>v,ErrorType:()=>s});var s=(()=>{return(n=s||(s={}))[n.PASSAGE_NOT_FOUND=1]="PASSAGE_NOT_FOUND",n[n.VEHICLE_NOT_FOUND=2]="VEHICLE_NOT_FOUND",n[n.STOP_NOT_FOUND=3]="STOP_NOT_FOUND",n[n.UNKNOWN=0]="UNKNOWN",s;var n})(),c=i(6895),l=i(4850),p=i(7392),a=i(4046),u=i(6159),t=i(4650);let d=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-common-error"]],decls:7,vars:0,consts:[[1,"header"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"mat-icon"),t._uU(2,"help_outline"),t.qZA()(),t.TgZ(3,"h3"),t._uU(4,"Error Occured"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"An error occured while performing an action."),t.qZA())},dependencies:[p.Hw],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-flow:column;height:100%;background:#f9f9f9}.header[_ngcontent-%COMP%]{position:relative;height:75vw;width:100%;max-height:250px;min-height:150px;background:#999999}.header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;width:64px;height:64px;font-size:64px}"]}),n})();var h=i(3238),g=i(4004);function f(n,e){1&n&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"The passage could not be found. It either expired or has yet to start."),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Please select another passage."),t.qZA(),t.BQk())}function N(n,e){1&n&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"The requested vehicle could not be found. It might not be active at the moment."),t.qZA(),t.BQk())}function C(n,e){1&n&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"The requested resource can not be found."),t.qZA(),t.BQk())}let O=(()=>{class n{constructor(o){this.route=o,this.errorTypeObservable=this.route.queryParams.pipe((0,g.U)(r=>r.type?r.type:s.UNKNOWN))}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(u.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-not-found-msg-switch"]],decls:5,vars:5,consts:[[1,"info",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.ALo(1,"async"),t.YNc(2,f,5,0,"ng-container",1),t.YNc(3,N,3,0,"ng-container",1),t.YNc(4,C,3,0,"ng-container",2),t.qZA()),2&o&&(t.Q6J("ngSwitch",t.lcZ(1,3,r.errorTypeObservable)),t.xp6(2),t.Q6J("ngSwitchCase",1),t.xp6(1),t.Q6J("ngSwitchCase",2))},dependencies:[c.RF,c.n9,c.ED,c.Ov],styles:["[_nghost-%COMP%]{display:block}"]}),n})();const x=function(n){return[n]};function T(n,e){if(1&n&&(t.TgZ(0,"mat-list-item",4)(1,"mat-icon",5),t._uU(2),t.qZA(),t.TgZ(3,"h3",6),t._uU(4),t.qZA()()),2&n){const o=e.$implicit;t.Q6J("routerLink",t.VKq(3,x,o.path)),t.xp6(2),t.Oqu(o.icon),t.xp6(2),t.Oqu(o.title)}}const Z=[{component:d,path:""},{component:(()=>{class n{constructor(){this.endpoints=[{icon:"home",path:"/",title:"Home"},{icon:"place",path:"/stops",title:"Stops"}]}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-not-found"]],decls:12,vars:1,consts:[[1,"header"],[1,"content"],["role","list"],["role","listitem",3,"routerLink",4,"ngFor","ngForOf"],["role","listitem",3,"routerLink"],["matListIcon",""],["matLine",""]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"mat-icon"),t._uU(2,"help_outline"),t.qZA()(),t.TgZ(3,"div",1)(4,"h3"),t._uU(5,"Not Found"),t.qZA(),t._UZ(6,"app-not-found-msg-switch")(7,"mat-divider"),t.TgZ(8,"h5"),t._uU(9,"You might want to go to:"),t.qZA(),t.TgZ(10,"mat-nav-list",2),t.YNc(11,T,5,5,"mat-list-item",3),t.qZA()()),2&o&&(t.xp6(11),t.Q6J("ngForOf",r.endpoints))},dependencies:[u.rH,c.sg,a.Hk,a.Tg,h.X2,a.Nh,l.d,p.Hw,O],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-flow:column;height:100%;background:#f9f9f9}.header[_ngcontent-%COMP%]{position:relative;height:75vw;width:100%;max-height:250px;min-height:150px;background:#999999}.header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;width:64px;height:64px;font-size:64px}div.content[_ngcontent-%COMP%]{margin:10px 20px}"]}),n})(),path:"not-found"},{path:"**",redirectTo:"not-found"}];let F=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(Z),u.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[F,c.ez,a.ie,p.Ps,l.t]}),n})()}}]);