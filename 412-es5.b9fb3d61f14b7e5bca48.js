!function(){var e,t;function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(self.webpackChunk_manniwatch_client_ng=self.webpackChunk_manniwatch_client_ng||[]).push([[412],{74412:function(a,s,i){"use strict";i.r(s),i.d(s,{StopModule:function(){return G}});var u,p,c=i(38583),f=i(76627),l=i(77746),h=i(4885),b=i(65939),v=i(12522),g=i(80083),d=i(52576),m=i(64702),S=i(98507),P=i(66149),O=i(75894),x=i(37716),y=i(79373),w=i(72882),_=function(){var e=function(){function e(t,n){r(this,e),this.api=t,this.router=n}return o(e,[{key:"resolve",value:function(e,t){var n=this;return this.api.getStopPassages(e.params.stopId).pipe((0,O.K)(function(e){return 404===e.status&&n.router.navigate(["stops"]),P.E}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(x.LFG(y.sM),x.LFG(w.F0))},e.\u0275prov=x.Yz7({token:e,factory:e.\u0275fac}),e}(),z=i(41565),k=i(5207),C=i(83864),I=i(37540),M=i(47920),Z=i(69978),F=function(){var e=function(){function e(t,n,a,o){r(this,e),this.route=t,this.apiService=n,this.stopService=a,this.appRef=o,this.stopInfoObservable=this.route.data.pipe((0,k.U)(function(e){return e.stopInfo}))}return o(e,[{key:"createStopLocationObservable",value:function(){var e=this;return this.stopInfoObservable.pipe((0,C.z)(function(t){return e.stopService.filterStop(t.stopShortName)}))}},{key:"createStopPassageRefreshObservable",value:function(){var e=this;return this.stopInfoObservable.pipe((0,I.w)(function(t){return e.appRef.isStable.pipe((0,M.P)(function(e){return e}),(0,C.z)(function(){return(0,z.F)(1e4).pipe((0,I.w)(function(){return e.apiService.getStopPassages(t.stopShortName)}))}),(0,Z.O)(t))}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(x.LFG(w.gz),x.LFG(y.sM),x.LFG(y.gd),x.LFG(x.z2F))},e.\u0275prov=x.Yz7({token:e,factory:e.\u0275fac}),e}(),D=i(29656),L=i(71959),q=i(51322),R=i(8277),j=[{component:(u=function(){function e(t){r(this,e),this.stopInfoService=t,this.subscriptions=[]}return o(e,[{key:"ngOnInit",value:function(){var e=this;this.subscriptions.push(this.stopInfoService.createStopPassageRefreshObservable().subscribe({next:function(t){e.stopPassage=t}})),this.subscriptions.push(this.stopInfoService.createStopLocationObservable().subscribe({next:function(t){e.headerMapData=t?{map:{center:t},stops:[t],vehicles:void 0}:{map:{blur:!0,center:void 0}}}}))}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(e){e.unsubscribe()}),this.subscriptions=[]}}]),e}(),u.\u0275fac=function(e){return new(e||u)(x.Y36(F))},u.\u0275cmp=x.Xpm({type:u,selectors:[["app-stop-info"]],features:[x._Bn([F])],decls:7,vars:4,consts:function(){return[[3,"title"],["appOlStatic","",3,"mapData"],["mat-stretch-tabs","","dynamicHeight",""],["label",$localize(e||(e=n([":tab header departures|Departures@@departures\u241f891e36a38df10a0b8940219f4a51a03ea982c084\u241f1335502203219771538:Departures"])))],[3,"departures"],["label",$localize(t||(t=n([":tab header routes|Routes@@Routes\u241f41f0d60bbecc9f4b18c97c3656eeafe9a8f6d101\u241f99095597038876536:Routes"])))],[3,"routes"]]},template:function(e,t){1&e&&(x.TgZ(0,"app-header-box",0),x._UZ(1,"map",1),x.qZA(),x.TgZ(2,"mat-tab-group",2),x.TgZ(3,"mat-tab",3),x._UZ(4,"app-departure-list",4),x.qZA(),x.TgZ(5,"mat-tab",5),x._UZ(6,"app-route-list",6),x.qZA(),x.qZA()),2&e&&(x.Q6J("title",null==t.stopPassage?null:t.stopPassage.stopName),x.xp6(1),x.Q6J("mapData",t.headerMapData),x.xp6(3),x.Q6J("departures",null==t.stopPassage?null:t.stopPassage.actual),x.xp6(2),x.Q6J("routes",null==t.stopPassage?null:t.stopPassage.routes))},directives:[D.c,L.C,b.SP,b.uX,q.e,R.q],styles:["mat-tab-group[_ngcontent-%COMP%]{flex-grow:1}div.error-box[_ngcontent-%COMP%]{flex:0 0 auto;background:#b00020;color:#fff;padding:5px 20px}div.error-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;line-height:30px;padding:0;margin:0}div.error-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;line-height:20px;padding:0;margin:0}"]}),u),data:{openSidebar:!0},path:":stopId",resolve:{stopInfo:_}}],A=function(){var e=function e(){r(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=x.oAB({type:e}),e.\u0275inj=x.cJS({imports:[[w.Bz.forChild(j)],w.Bz]}),e}(),G=((p=function e(){r(this,e)}).\u0275fac=function(e){return new(e||p)},p.\u0275mod=x.oAB({type:p}),p.\u0275inj=x.cJS({providers:[_],imports:[[c.ez,f.Ps,l.ie,v.g0,h.Cq,A,b.Nh,g.n,d.D,m.qe,S.W]]}),p)}}])}();