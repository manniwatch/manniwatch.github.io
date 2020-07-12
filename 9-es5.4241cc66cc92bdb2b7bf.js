function _templateObject2(){var e=_taggedTemplateLiteral([":tab header routes|Routes@@Routes\u241f41f0d60bbecc9f4b18c97c3656eeafe9a8f6d101\u241f99095597038876536:Routes"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":tab header departures|Departures@@departures\u241f891e36a38df10a0b8940219f4a51a03ea982c084\u241f1335502203219771538:Departures"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{NHX4:function(e,t,a){"use strict";a.r(t),a.d(t,"StopPointModule",(function(){return E}));var n,r,s=a("ofXK"),o=a("NFeN"),i=a("MutI"),c=a("Xa2L"),p=a("wZkO"),u=a("/t3+"),b=a("adpU"),l=a("3cPY"),f=a("RSro"),h=a("Rfd2"),d=a("EY2u"),g=a("JIr8"),v=a("fXoL"),P=a("o0su"),m=a("tyNb"),O=((n=function(){function e(t,a){_classCallCheck(this,e),this.api=t,this.router=a}return _createClass(e,[{key:"resolve",value:function(e,t){var a=this;return this.api.getStopPointPassages(e.params.stopPointId).pipe(Object(g.a)((function(e){return 404===e.status&&a.router.navigate(["stops"]),d.a})))}}]),e}()).\u0275fac=function(e){return new(e||n)(v.Wb(P.a),v.Wb(m.f))},n.\u0275prov=v.Hb({token:n,factory:n.\u0275fac}),n),_=a("l5mm"),j=a("lJxs"),S=a("eIep"),C=a("SxV6"),y=a("5+tZ"),k=a("JX91"),w=((r=function(){function e(t,a,n,r){_classCallCheck(this,e),this.route=t,this.apiService=a,this.stopService=n,this.appRef=r,this.stopPassageObservable=this.route.data.pipe(Object(j.a)((function(e){return e.stopPoint})))}return _createClass(e,[{key:"createStopPassageRefreshObservable",value:function(){var e=this;return this.stopPassageObservable.pipe(Object(S.a)((function(t){return e.appRef.isStable.pipe(Object(C.a)((function(e){return e})),Object(y.a)((function(){return Object(_.a)(5e3).pipe(Object(S.a)((function(){return e.apiService.getStopPointPassages(t.stopShortName)})))})),Object(k.a)(t))})))}},{key:"createStopPointLocationObservable",value:function(){var e=this;return this.stopPassageObservable.pipe(Object(S.a)((function(t){return e.stopService.watchStopPoint(t.stopShortName).pipe(Object(k.a)(void 0))})),Object(j.a)((function(e){return null==e?{map:{blur:!0}}:{map:{blur:!1,center:e}}})))}}]),e}()).\u0275fac=function(e){return new(e||r)(v.Wb(m.a),v.Wb(P.a),v.Wb(P.c),v.Wb(v.g))},r.\u0275prov=v.Hb({token:r,factory:r.\u0275fac}),r),x=a("FSSf"),I=a("2UN5"),M=a("rIFM"),R=a("S256"),L=["label",$localize(_templateObject())],N=["label",$localize(_templateObject2())];function z(e,t){1&e&&(v.Qb(0,"div",7),v.Qb(1,"h3"),v.Ac(2,"Error occured"),v.Pb(),v.Qb(3,"p"),v.Ac(4,"Will retry in a 0s"),v.Pb(),v.Pb())}function D(e,t){1&e&&v.yc(0,z,5,0,"ng-template")}var J,Q,W,A=[{component:(J=function(){function e(t){_classCallCheck(this,e),this.stopInfoService=t,this.subscriptions=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.subscriptions.push(this.stopInfoService.createStopPointLocationObservable().subscribe({next:function(t){e.headerMapData=t}})),this.subscriptions.push(this.stopInfoService.createStopPassageRefreshObservable().subscribe({next:function(t){e.stopPassage=t}}))}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach((function(e){e.unsubscribe()})),this.subscriptions=[]}}]),e}(),J.\u0275fac=function(e){return new(e||J)(v.Lb(w))},J.\u0275cmp=v.Fb({type:J,selectors:[["app-stop-point-info"]],features:[v.zb([w])],decls:10,vars:5,consts:[[3,"title"],["appOlStatic","",3,"mapData"],["mat-stretch-tabs","","dynamicHeight",""],[6,"label"],[3,"departures"],[3,"routes"],[4,"ngIf"],[1,"error-box"]],template:function(e,t){1&e&&(v.Qb(0,"app-header-box",0),v.Mb(1,"map",1),v.Pb(),v.Qb(2,"mat-tab-group",2),v.Qb(3,"mat-tab",3),v.Vb(4,L),v.Mb(5,"app-departure-list",4),v.Pb(),v.Qb(6,"mat-tab",3),v.Vb(7,N),v.Mb(8,"app-route-list",5),v.Pb(),v.Pb(),v.yc(9,D,1,0,void 0,6)),2&e&&(v.kc("title",null==t.stopPassage?null:t.stopPassage.stopName),v.Ab(1),v.jc("mapData",t.headerMapData),v.Ab(4),v.jc("departures",null==t.stopPassage?null:t.stopPassage.actual),v.Ab(3),v.jc("routes",null==t.stopPassage?null:t.stopPassage.routes),v.Ab(1),v.jc("ngIf",!1))},directives:[x.a,I.a,p.b,p.a,M.a,R.a,s.l],styles:["mat-tab-group[_ngcontent-%COMP%]{flex-grow:1}div.error-box[_ngcontent-%COMP%]{flex:0 0 auto;background:#b00020;color:#fff;padding:5px 20px}div.error-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;line-height:30px;padding:0;margin:0}div.error-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;line-height:20px;padding:0;margin:0}"]}),J),data:{openSidebar:!0},path:":stopPointId",resolve:{stopPoint:O}}],X=((W=function e(){_classCallCheck(this,e)}).\u0275mod=v.Jb({type:W}),W.\u0275inj=v.Ib({factory:function(e){return new(e||W)},imports:[[m.i.forChild(A)],m.i]}),W),E=((Q=function e(){_classCallCheck(this,e)}).\u0275mod=v.Jb({type:Q}),Q.\u0275inj=v.Ib({factory:function(e){return new(e||Q)},providers:[O],imports:[[s.c,b.a,o.b,i.d,u.b,c.a,X,p.c,l.a,f.b,h.a]]}),Q)}}]);