"use strict";(self.webpackChunkmanniwatch=self.webpackChunkmanniwatch||[]).push([[466],{7466:(F,u,s)=>{s.r(u),s.d(u,{SearchModule:()=>R});var c=s(9808),m=s(5245),r=s(3379),v=s(5698),h=s(4004),e=s(5e3),d=s(2146);let p=(()=>{class t{constructor(a){this.stopService=a}resolve(a,i){return this.stopService.stopObservable.pipe((0,v.q)(1),(0,h.U)(M=>M.filter(l=>l.name.toLowerCase().includes(a.queryParams.q)).sort((l,x)=>l.name.localeCompare(x.name))))}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(d.g))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var o=s(5357),g=s(1848),S=s(2313),f=s(508);const C=function(t){return["/stop",t]};function O(t,n){if(1&t&&(e.TgZ(0,"a",2)(1,"mat-list-item")(2,"mat-icon",3),e._uU(3,"place"),e.qZA(),e.TgZ(4,"h4",4),e._uU(5),e.qZA()()()),2&t){const a=n.$implicit;e.Q6J("routerLink",e.VKq(2,C,a.shortName)),e.xp6(5),e.Oqu(null==a?null:a.name)}}const y=[{component:(()=>{class t{constructor(a,i){this.activatedRoute=a,this.titleService=i,this.data="",this.resultObservable=g.C}get results(){return this.resultObservable}ngOnInit(){this.searchParamSubscription=this.activatedRoute.queryParams.subscribe(a=>{this.data=a.q||"",this.titleService.setTitle(`Search - "${this.data}"`)}),this.resultObservable=this.activatedRoute.data.pipe((0,h.U)(a=>a.results||[]))}ngOnDestroy(){this.searchParamSubscription&&this.searchParamSubscription.unsubscribe()}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(o.gz),e.Y36(S.Dx))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-search"]],decls:3,vars:3,consts:[["role","navigation"],["role","listitem",3,"routerLink",4,"ngFor","ngForOf"],["role","listitem",3,"routerLink"],["mat-list-icon",""],["mat-line",""]],template:function(a,i){1&a&&(e.TgZ(0,"mat-nav-list",0),e.YNc(1,O,6,4,"a",1),e.ALo(2,"async"),e.qZA()),2&a&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,i.results)))},directives:[r.Hk,c.sg,o.yS,r.Tg,m.Hw,r.Nh,f.X2],pipes:[c.Ov],styles:["[_nghost-%COMP%] > mat-nav-list[_ngcontent-%COMP%]{padding-top:100px}@media (max-width: 440px) and (min-width: 401px){[_nghost-%COMP%] > mat-nav-list[_ngcontent-%COMP%]{padding-top:calc(50px + 1.25*(100vw - 400px))}}@media (max-width: 400px){[_nghost-%COMP%] > mat-nav-list[_ngcontent-%COMP%]{padding-top:0}}"]}),t})(),path:"",resolve:{results:p},runGuardsAndResolvers:"paramsOrQueryParamsChange"}];let P=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[o.Bz.forChild(y)],o.Bz]}),t})(),R=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[p],imports:[[c.ez,P,m.Ps,r.ie]]}),t})()}}]);