(self.webpackChunk_manniwatch_client_ng=self.webpackChunk_manniwatch_client_ng||[]).push([[822],{57173:function(t,e,i){"use strict";i.d(e,{uX:function(){return z},SP:function(){return st},Nh:function(){return bt}});var n=i(97388),a=i(27853),s=i(82151),r=i(61116),o=i(35366),l=i(87064),c=i(26136),d=i(89666),h=i(76042),u=i(15446),b=i(65960),p=i(32041),m=i(49234),g=i(99713),_=i(81258),f=i(76424),x=i(69568),y=i(19861),v=i(93169),C=i(99235),T=i(94720),w=i(79314);function I(t,e){1&t&&o.Hsn(0)}const k=["*"];function D(t,e){}const P=function(t){return{animationDuration:t}},S=function(t,e){return{value:t,params:e}},R=["tabBodyWrapper"],L=["tabHeader"];function O(t,e){}function Z(t,e){if(1&t&&o.YNc(0,O,0,0,"ng-template",9),2&t){const t=o.oxw().$implicit;o.Q6J("cdkPortalOutlet",t.templateLabel)}}function M(t,e){if(1&t&&o._uU(0),2&t){const t=o.oxw().$implicit;o.Oqu(t.textLabel)}}function A(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",6),o.NdJ("click",function(){const e=o.CHM(t),i=e.$implicit,n=e.index,a=o.oxw(),s=o.MAs(1);return a._handleClick(i,s,n)})("cdkFocusChange",function(e){const i=o.CHM(t).index;return o.oxw()._tabFocusChanged(e,i)}),o.TgZ(1,"div",7),o.YNc(2,Z,1,1,"ng-template",8),o.YNc(3,M,1,1,"ng-template",8),o.qZA(),o.qZA()}if(2&t){const t=e.$implicit,i=e.index,n=o.oxw();o.ekj("mat-tab-label-active",n.selectedIndex==i),o.Q6J("id",n._getTabLabelId(i))("disabled",t.disabled)("matRippleDisabled",t.disabled||n.disableRipple),o.uIk("tabIndex",n._getTabIndex(t,i))("aria-posinset",i+1)("aria-setsize",n._tabs.length)("aria-controls",n._getTabContentId(i))("aria-selected",n.selectedIndex==i)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),o.xp6(2),o.Q6J("ngIf",t.templateLabel),o.xp6(1),o.Q6J("ngIf",!t.templateLabel)}}function B(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"mat-tab-body",10),o.NdJ("_onCentered",function(){return o.CHM(t),o.oxw()._removeTabBodyWrapperHeight()})("_onCentering",function(e){return o.CHM(t),o.oxw()._setTabBodyWrapperHeight(e)}),o.qZA()}if(2&t){const t=e.$implicit,i=e.index,n=o.oxw();o.ekj("mat-tab-body-active",n.selectedIndex==i),o.Q6J("id",n._getTabContentId(i))("content",t.content)("position",t.position)("origin",t.origin)("animationDuration",n.animationDuration),o.uIk("aria-labelledby",n._getTabLabelId(i))}}const H=["tabListContainer"],Y=["tabList"],F=["nextPaginator"],E=["previousPaginator"],q=new o.OlP("MatInkBarPositioner",{providedIn:"root",factory:function(){return t=>({left:t?(t.offsetLeft||0)+"px":"0",width:t?(t.offsetWidth||0)+"px":"0"})}});let N=(()=>{class t{constructor(t,e,i,n){this._elementRef=t,this._ngZone=e,this._inkBarPositioner=i,this._animationMode=n}alignToElement(t){this.show(),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._setStyles(t))}):this._setStyles(t)}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}_setStyles(t){const e=this._inkBarPositioner(t),i=this._elementRef.nativeElement;i.style.left=e.left,i.style.width=e.width}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(o.R0b),o.Y36(q),o.Y36(c.Qb,8))},t.\u0275dir=o.lG2({type:t,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(t,e){2&t&&o.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode)}}),t})();const G=new o.OlP("MatTabContent"),Q=new o.OlP("MatTabLabel");class W{}const J=(0,l.Id)(W),j=new o.OlP("MAT_TAB_GROUP");let z=(()=>{class t extends J{constructor(t,e){super(),this._viewContainerRef=t,this._closestTabGroup=e,this.textLabel="",this._contentPortal=null,this._stateChanges=new d.x,this.position=null,this.origin=null,this.isActive=!1}get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}get content(){return this._contentPortal}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new s.UE(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&(this._templateLabel=t)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(j))},t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-tab"]],contentQueries:function(t,e,i){if(1&t&&(o.Suo(i,Q,5),o.Suo(i,G,7,o.Rgc)),2&t){let t;o.iGM(t=o.CRH())&&(e.templateLabel=t.first),o.iGM(t=o.CRH())&&(e._explicitContent=t.first)}},viewQuery:function(t,e){if(1&t&&o.Gf(o.Rgc,7),2&t){let t;o.iGM(t=o.CRH())&&(e._implicitContent=t.first)}},inputs:{disabled:"disabled",textLabel:["label","textLabel"],ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"]},exportAs:["matTab"],features:[o.qOj,o.TTD],ngContentSelectors:k,decls:1,vars:0,template:function(t,e){1&t&&(o.F$t(),o.YNc(0,I,1,0,"ng-template"))},encapsulation:2}),t})();const $={translateTab:(0,g.X$)("translateTab",[(0,g.SB)("center, void, left-origin-center, right-origin-center",(0,g.oB)({transform:"none"})),(0,g.SB)("left",(0,g.oB)({transform:"translate3d(-100%, 0, 0)",minHeight:"1px"})),(0,g.SB)("right",(0,g.oB)({transform:"translate3d(100%, 0, 0)",minHeight:"1px"})),(0,g.eR)("* => left, * => right, left => center, right => center",(0,g.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),(0,g.eR)("void => left-origin-center",[(0,g.oB)({transform:"translate3d(-100%, 0, 0)"}),(0,g.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),(0,g.eR)("void => right-origin-center",[(0,g.oB)({transform:"translate3d(100%, 0, 0)"}),(0,g.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])])};let U=(()=>{class t extends s.Pl{constructor(t,e,i,n){super(t,e,n),this._host=i,this._centeringSub=h.w0.EMPTY,this._leavingSub=h.w0.EMPTY}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe((0,_.O)(this._host._isCenterPosition(this._host._position))).subscribe(t=>{t&&!this.hasAttached()&&this.attach(this._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this.detach()})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o._Vd),o.Y36(o.s_b),o.Y36((0,o.Gpc)(()=>V)),o.Y36(r.K0))},t.\u0275dir=o.lG2({type:t,selectors:[["","matTabBodyHost",""]],features:[o.qOj]}),t})(),X=(()=>{class t{constructor(t,e,i){this._elementRef=t,this._dir=e,this._dirChangeSubscription=h.w0.EMPTY,this._translateTabComplete=new d.x,this._onCentering=new o.vpe,this._beforeCentering=new o.vpe,this._afterLeavingCenter=new o.vpe,this._onCentered=new o.vpe(!0),this.animationDuration="500ms",e&&(this._dirChangeSubscription=e.change.subscribe(t=>{this._computePositionAnimationState(t),i.markForCheck()})),this._translateTabComplete.pipe((0,f.x)((t,e)=>t.fromState===e.fromState&&t.toState===e.toState)).subscribe(t=>{this._isCenterPosition(t.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(t.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()})}set position(t){this._positionIndex=t,this._computePositionAnimationState()}ngOnInit(){"center"==this._position&&null!=this.origin&&(this._position=this._computePositionFromOrigin(this.origin))}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._translateTabComplete.complete()}_onTranslateTabStarted(t){const e=this._isCenterPosition(t.toState);this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_isCenterPosition(t){return"center"==t||"left-origin-center"==t||"right-origin-center"==t}_computePositionAnimationState(t=this._getLayoutDirection()){this._position=this._positionIndex<0?"ltr"==t?"left":"right":this._positionIndex>0?"ltr"==t?"right":"left":"center"}_computePositionFromOrigin(t){const e=this._getLayoutDirection();return"ltr"==e&&t<=0||"rtl"==e&&t>0?"left-origin-center":"right-origin-center"}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(T.Is,8),o.Y36(o.sBO))},t.\u0275dir=o.lG2({type:t,inputs:{animationDuration:"animationDuration",position:"position",_content:["content","_content"],origin:"origin"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_afterLeavingCenter:"_afterLeavingCenter",_onCentered:"_onCentered"}}),t})(),V=(()=>{class t extends X{constructor(t,e,i){super(t,e,i)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(T.Is,8),o.Y36(o.sBO))},t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-tab-body"]],viewQuery:function(t,e){if(1&t&&o.Gf(s.Pl,5),2&t){let t;o.iGM(t=o.CRH())&&(e._portalHost=t.first)}},hostAttrs:[1,"mat-tab-body"],features:[o.qOj],decls:3,vars:6,consts:[["cdkScrollable","",1,"mat-tab-body-content"],["content",""],["matTabBodyHost",""]],template:function(t,e){1&t&&(o.TgZ(0,"div",0,1),o.NdJ("@translateTab.start",function(t){return e._onTranslateTabStarted(t)})("@translateTab.done",function(t){return e._translateTabComplete.next(t)}),o.YNc(2,D,0,0,"ng-template",2),o.qZA()),2&t&&o.Q6J("@translateTab",o.WLB(3,S,e._position,o.VKq(1,P,e.animationDuration)))},directives:[U],styles:[".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[$.translateTab]}}),t})();const K=new o.OlP("MAT_TABS_CONFIG");let tt=0;class et{}class it{constructor(t){this._elementRef=t}}const nt=(0,l.pj)((0,l.Kr)(it),"primary");let at=(()=>{class t extends nt{constructor(t,e,i,n){super(t),this._changeDetectorRef=e,this._animationMode=n,this._tabs=new o.n_E,this._indexToSelect=0,this._tabBodyWrapperHeight=0,this._tabsSubscription=h.w0.EMPTY,this._tabLabelSubscription=h.w0.EMPTY,this._selectedIndex=null,this.headerPosition="above",this.selectedIndexChange=new o.vpe,this.focusChange=new o.vpe,this.animationDone=new o.vpe,this.selectedTabChange=new o.vpe(!0),this._groupId=tt++,this.animationDuration=i&&i.animationDuration?i.animationDuration:"500ms",this.disablePagination=!(!i||null==i.disablePagination)&&i.disablePagination,this.dynamicHeight=!(!i||null==i.dynamicHeight)&&i.dynamicHeight}get dynamicHeight(){return this._dynamicHeight}set dynamicHeight(t){this._dynamicHeight=(0,y.Ig)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=(0,y.su)(t,null)}get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=/^\d+$/.test(t)?t+"ms":t}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const e=this._elementRef.nativeElement;e.classList.remove(`mat-background-${this.backgroundColor}`),t&&e.classList.add(`mat-background-${t}`),this._backgroundColor=t}ngAfterContentChecked(){const t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){const e=null==this._selectedIndex;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));const e=this._tabBodyWrapper.nativeElement;e.style.minHeight=e.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((e,i)=>e.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,i)=>{e.position=i-t,null==this._selectedIndex||0!=e.position||e.origin||(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{if(this._clampTabIndex(this._indexToSelect)===this._selectedIndex){const t=this._tabs.toArray();for(let e=0;e<t.length;e++)if(t[e].isActive){this._indexToSelect=this._selectedIndex=e;break}}this._changeDetectorRef.markForCheck()})}_subscribeToAllTabChanges(){this._allTabs.changes.pipe((0,_.O)(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(t=>t._closestTabGroup===this)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}focusTab(t){const e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){const e=new et;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=(0,u.T)(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t){return`mat-tab-label-${this._groupId}-${t}`}_getTabContentId(t){return`mat-tab-content-${this._groupId}-${t}`}_setTabBodyWrapperHeight(t){if(!this._dynamicHeight||!this._tabBodyWrapperHeight)return;const e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){const t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this.animationDone.emit()}_handleClick(t,e,i){t.disabled||(this.selectedIndex=e.focusIndex=i)}_getTabIndex(t,e){return t.disabled?null:this.selectedIndex===e?0:-1}_tabFocusChanged(t,e){t&&(this._tabHeader.focusIndex=e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(K,8),o.Y36(c.Qb,8))},t.\u0275dir=o.lG2({type:t,inputs:{headerPosition:"headerPosition",animationDuration:"animationDuration",disablePagination:"disablePagination",dynamicHeight:"dynamicHeight",selectedIndex:"selectedIndex",backgroundColor:"backgroundColor"},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},features:[o.qOj]}),t})(),st=(()=>{class t extends at{constructor(t,e,i,n){super(t,e,i,n)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(K,8),o.Y36(c.Qb,8))},t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-tab-group"]],contentQueries:function(t,e,i){if(1&t&&o.Suo(i,z,5),2&t){let t;o.iGM(t=o.CRH())&&(e._allTabs=t)}},viewQuery:function(t,e){if(1&t&&(o.Gf(R,5),o.Gf(L,5)),2&t){let t;o.iGM(t=o.CRH())&&(e._tabBodyWrapper=t.first),o.iGM(t=o.CRH())&&(e._tabHeader=t.first)}},hostAttrs:[1,"mat-tab-group"],hostVars:4,hostBindings:function(t,e){2&t&&o.ekj("mat-tab-group-dynamic-height",e.dynamicHeight)("mat-tab-group-inverted-header","below"===e.headerPosition)},inputs:{color:"color",disableRipple:"disableRipple"},exportAs:["matTabGroup"],features:[o._Bn([{provide:j,useExisting:t}]),o.qOj],decls:6,vars:7,consts:[[3,"selectedIndex","disableRipple","disablePagination","indexFocused","selectFocusedIndex"],["tabHeader",""],["class","mat-tab-label mat-focus-indicator","role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",3,"id","mat-tab-label-active","disabled","matRippleDisabled","click","cdkFocusChange",4,"ngFor","ngForOf"],[1,"mat-tab-body-wrapper"],["tabBodyWrapper",""],["role","tabpanel",3,"id","mat-tab-body-active","content","position","origin","animationDuration","_onCentered","_onCentering",4,"ngFor","ngForOf"],["role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",1,"mat-tab-label","mat-focus-indicator",3,"id","disabled","matRippleDisabled","click","cdkFocusChange"],[1,"mat-tab-label-content"],[3,"ngIf"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"id","content","position","origin","animationDuration","_onCentered","_onCentering"]],template:function(t,e){1&t&&(o.TgZ(0,"mat-tab-header",0,1),o.NdJ("indexFocused",function(t){return e._focusChanged(t)})("selectFocusedIndex",function(t){return e.selectedIndex=t}),o.YNc(2,A,4,14,"div",2),o.qZA(),o.TgZ(3,"div",3,4),o.YNc(5,B,1,8,"mat-tab-body",5),o.qZA()),2&t&&(o.Q6J("selectedIndex",e.selectedIndex||0)("disableRipple",e.disableRipple)("disablePagination",e.disablePagination),o.xp6(2),o.Q6J("ngForOf",e._tabs),o.xp6(1),o.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode),o.xp6(2),o.Q6J("ngForOf",e._tabs))},directives:function(){return[ut,r.sg,lt,l.wG,n.kH,r.O5,s.Pl,V]},styles:[".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],encapsulation:2}),t})();class rt{}const ot=(0,l.Id)(rt);let lt=(()=>{class t extends ot{constructor(t){super(),this.elementRef=t}focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,e){2&t&&(o.uIk("aria-disabled",!!e.disabled),o.ekj("mat-tab-disabled",e.disabled))},inputs:{disabled:"disabled"},features:[o.qOj]}),t})();const ct=(0,v.i$)({passive:!0});let dt=(()=>{class t{constructor(t,e,i,n,a,s,r){this._elementRef=t,this._changeDetectorRef=e,this._viewportRuler=i,this._dir=n,this._ngZone=a,this._platform=s,this._animationMode=r,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new d.x,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new d.x,this.disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new o.vpe,this.indexFocused=new o.vpe,a.runOutsideAngular(()=>{(0,b.R)(t.nativeElement,"mouseleave").pipe((0,x.R)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){t=(0,y.su)(t),this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}ngAfterViewInit(){(0,b.R)(this._previousPaginator.nativeElement,"touchstart",ct).pipe((0,x.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),(0,b.R)(this._nextPaginator.nativeElement,"touchstart",ct).pipe((0,x.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const t=this._dir?this._dir.change:(0,p.of)("ltr"),e=this._viewportRuler.change(150),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new n.Em(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap(),this._keyManager.updateActiveItem(this._selectedIndex),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(i):i(),(0,u.T)(t,e,this._items.changes).pipe((0,x.R)(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>Promise.resolve().then(i)),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe((0,x.R)(this._destroyed)).subscribe(t=>{this.indexFocused.emit(t),this._setTabFocus(t)})}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!(0,C.Vb)(t))switch(t.keyCode){case C.K5:case C.L_:this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){const t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){this._isValidIndex(t)&&this.focusIndex!==t&&this._keyManager&&this._keyManager.setActiveItem(t)}_isValidIndex(t){if(!this._items)return!0;const e=this._items?this._items.toArray()[t]:null;return!!e&&!e.disabled}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();const e=this._tabListContainer.nativeElement,i=this._getLayoutDirection();e.scrollLeft="ltr"==i?0:e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const t=this.scrollDistance,e="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){return this._scrollTo(this._scrollDistance+("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;const e=this._items?this._items.toArray()[t]:null;if(!e)return;const i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:n,offsetWidth:a}=e.elementRef.nativeElement;let s,r;"ltr"==this._getLayoutDirection()?(s=n,r=s+a):(r=this._tabList.nativeElement.offsetWidth-n,s=r-a);const o=this.scrollDistance,l=this.scrollDistance+i;s<o?this.scrollDistance-=o-s+60:r>l&&(this.scrollDistance+=r-l+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const t=this._tabList.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabList.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&null!=e.button&&0!==e.button||(this._stopInterval(),(0,m.H)(650,100).pipe((0,x.R)((0,u.T)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:e,distance:i}=this._scrollHeader(t);(0===i||i>=e)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(w.rL),o.Y36(T.Is,8),o.Y36(o.R0b),o.Y36(v.t4),o.Y36(c.Qb,8))},t.\u0275dir=o.lG2({type:t,inputs:{disablePagination:"disablePagination"}}),t})(),ht=(()=>{class t extends dt{constructor(t,e,i,n,a,s,r){super(t,e,i,n,a,s,r),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=(0,y.Ig)(t)}_itemSelected(t){t.preventDefault()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(w.rL),o.Y36(T.Is,8),o.Y36(o.R0b),o.Y36(v.t4),o.Y36(c.Qb,8))},t.\u0275dir=o.lG2({type:t,inputs:{disableRipple:"disableRipple"},features:[o.qOj]}),t})(),ut=(()=>{class t extends ht{constructor(t,e,i,n,a,s,r){super(t,e,i,n,a,s,r)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(w.rL),o.Y36(T.Is,8),o.Y36(o.R0b),o.Y36(v.t4),o.Y36(c.Qb,8))},t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-tab-header"]],contentQueries:function(t,e,i){if(1&t&&o.Suo(i,lt,4),2&t){let t;o.iGM(t=o.CRH())&&(e._items=t)}},viewQuery:function(t,e){if(1&t&&(o.Gf(N,7),o.Gf(H,7),o.Gf(Y,7),o.Gf(F,5),o.Gf(E,5)),2&t){let t;o.iGM(t=o.CRH())&&(e._inkBar=t.first),o.iGM(t=o.CRH())&&(e._tabListContainer=t.first),o.iGM(t=o.CRH())&&(e._tabList=t.first),o.iGM(t=o.CRH())&&(e._nextPaginator=t.first),o.iGM(t=o.CRH())&&(e._previousPaginator=t.first)}},hostAttrs:[1,"mat-tab-header"],hostVars:4,hostBindings:function(t,e){2&t&&o.ekj("mat-tab-header-pagination-controls-enabled",e._showPaginationControls)("mat-tab-header-rtl","rtl"==e._getLayoutDirection())},inputs:{selectedIndex:"selectedIndex"},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[o.qOj],ngContentSelectors:k,decls:13,vars:8,consts:[["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-label-container",3,"keydown"],["tabListContainer",""],["role","tablist",1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-labels"],["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(t,e){1&t&&(o.F$t(),o.TgZ(0,"div",0,1),o.NdJ("click",function(){return e._handlePaginatorClick("before")})("mousedown",function(t){return e._handlePaginatorPress("before",t)})("touchend",function(){return e._stopInterval()}),o._UZ(2,"div",2),o.qZA(),o.TgZ(3,"div",3,4),o.NdJ("keydown",function(t){return e._handleKeydown(t)}),o.TgZ(5,"div",5,6),o.NdJ("cdkObserveContent",function(){return e._onContentChanges()}),o.TgZ(7,"div",7),o.Hsn(8),o.qZA(),o._UZ(9,"mat-ink-bar"),o.qZA(),o.qZA(),o.TgZ(10,"div",8,9),o.NdJ("mousedown",function(t){return e._handlePaginatorPress("after",t)})("click",function(){return e._handlePaginatorClick("after")})("touchend",function(){return e._stopInterval()}),o._UZ(12,"div",2),o.qZA()),2&t&&(o.ekj("mat-tab-header-pagination-disabled",e._disableScrollBefore),o.Q6J("matRippleDisabled",e._disableScrollBefore||e.disableRipple),o.xp6(5),o.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode),o.xp6(5),o.ekj("mat-tab-header-pagination-disabled",e._disableScrollAfter),o.Q6J("matRippleDisabled",e._disableScrollAfter||e.disableRipple))},directives:[l.wG,a.wD,N],styles:['.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n'],encapsulation:2}),t})(),bt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.ez,l.BQ,s.eL,l.si,a.Q8,n.rt],l.BQ]}),t})()},90273:function(t,e,i){"use strict";i.d(e,{F:function(){return s}});var n=i(22948),a=i(49234);function s(t,e){return void 0===t&&(t=0),void 0===e&&(e=n.z),t<0&&(t=0),(0,a.H)(t,t,e)}},72883:function(t,e,i){"use strict";i.d(e,{r:function(){return C}});var n=i(70853),a=i(51948),s=i(35090),r=i(86280);function o(t,e){(0,r.Z)(2,arguments);var i=(0,s.Z)(t),n=(0,a.Z)(e);return isNaN(n)?new Date(NaN):n?(i.setDate(i.getDate()+n),i):i}function l(t,e){(0,r.Z)(2,arguments);var i=(0,s.Z)(t),n=(0,a.Z)(e);if(isNaN(n))return new Date(NaN);if(!n)return i;var o=i.getDate(),l=new Date(i.getTime());l.setMonth(i.getMonth()+n+1,0);var c=l.getDate();return o>=c?l:(i.setFullYear(l.getFullYear(),l.getMonth(),o),i)}var c=i(93779),d=i(10220),h=i(66705),u=i(57554),b=i(35366),p=i(85078),m=i(32860),g=i(77307),_=i(61116),f=i(87064);const x=function(t,e){return{late:t,early:e}};function y(t,e){if(1&t&&(b.TgZ(0,"span",6),b._uU(1),b.qZA()),2&t){const t=b.oxw();b.Q6J("ngClass",b.WLB(2,x,t.delay>0,t.delay<0)),b.xp6(1),b.Oqu(t.delay)}}const v=function(t){return["/passages",t]};let C=(()=>{class t{constructor(){this.mDeparture=void 0,this.mDelay=!1,this.mTime=""}set departure(t){this.mDeparture=t,this.mDelay=this.calculateDelay(t),this.mTime=this.convertTime(t)}get departure(){return this.mDeparture}get time(){return this.mTime}get statusIcon(){switch(this.mDeparture.status){case n.F.PREDICTED:case n.F.DEPARTED:return"directions_bus";case n.F.STOPPING:return"departure_board";case n.F.PLANNED:default:return"query_builder"}}get status(){return this.mDeparture.status}convertTime(t){if(t){const e=function(t,e){if((0,r.Z)(2,arguments),!e||"object"!=typeof e)return new Date(NaN);var i="years"in e?(0,a.Z)(e.years):0,n="months"in e?(0,a.Z)(e.months):0,c="weeks"in e?(0,a.Z)(e.weeks):0,d="days"in e?(0,a.Z)(e.days):0,h="hours"in e?(0,a.Z)(e.hours):0,u="minutes"in e?(0,a.Z)(e.minutes):0,b="seconds"in e?(0,a.Z)(e.seconds):0,p=(0,s.Z)(t),m=n||i?l(p,n+12*i):p,g=d||c?o(m,d+7*c):m,_=1e3*(b+60*(u+60*h));return new Date(g.getTime()+_)}(new Date,{seconds:t.actualRelativeTime}),i=(0,c.Z)(e,new Date);return Math.abs(i)<15?(0,d.Z)(e,{addSuffix:!0}):(0,h.Z)(e,"p")}return"No departure time"}get delay(){return this.mDelay}calculateDelay(t){if(t&&t.actualTime&&t.plannedTime&&t.actualTime!==t.plannedTime){const e=(0,u.Z)(t.actualTime,"HH:mm",new Date),i=(0,u.Z)(t.plannedTime,"HH:mm",new Date);let n=(0,c.Z)(e,i);return n>720?n-=1440:n<-720&&(n+=1440),n}return!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Xpm({type:t,selectors:[["app-departure-list-item"]],inputs:{departure:"departure"},decls:9,vars:10,consts:[["mat-list-item","","role","listitem",3,"routerLink"],["matListIcon","",3,"title"],["class","pattern-text",3,"ngClass",4,"ngIf"],["matLine","",1,"title"],["matLine","",1,"subtitle"],[3,"title"],[1,"pattern-text",3,"ngClass"]],template:function(t,e){1&t&&(b.TgZ(0,"a",0),b.TgZ(1,"mat-icon",1),b._uU(2),b.qZA(),b.YNc(3,y,2,5,"span",2),b.TgZ(4,"h4",3),b._uU(5),b.qZA(),b.TgZ(6,"p",4),b.TgZ(7,"span",5),b._uU(8),b.qZA(),b.qZA(),b.qZA()),2&t&&(b.Q6J("routerLink",b.VKq(8,v,e.departure.tripId)),b.xp6(1),b.s9C("title",e.status),b.xp6(1),b.Oqu(e.statusIcon),b.xp6(1),b.Q6J("ngIf",!1!==e.delay),b.xp6(2),b.AsE("",null==e.departure?null:e.departure.patternText," ",null==e.departure?null:e.departure.direction,""),b.xp6(2),b.MGl("title","Planned: ",null==e.departure?null:e.departure.plannedTime,""),b.xp6(1),b.Oqu(e.time))},directives:[p.Tg,m.yS,g.Hw,p.Nh,_.O5,f.X2,_.mk],styles:['[_nghost-%COMP%]{display:block}div.no-departures[_ngcontent-%COMP%]{margin:15px}span.pattern-text[_ngcontent-%COMP%]{font-weight:700}span.pattern-text.late[_ngcontent-%COMP%]{color:#f44336}@media (prefers-color-scheme:dark){span.pattern-text.late[_ngcontent-%COMP%]{color:#ff5722}}span.pattern-text.late[_ngcontent-%COMP%]:before{content:"+"}span.pattern-text.early[_ngcontent-%COMP%]{color:#ff4081}@media (prefers-color-scheme:dark){span.pattern-text.early[_ngcontent-%COMP%]{color:#ffd740}}h4.title[_ngcontent-%COMP%]{font-size:16px!important;font-weight:700!important;opacity:.87}h4.title[_ngcontent-%COMP%], p.subtitle[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}p.subtitle[_ngcontent-%COMP%]{font-size:12px!important;line-height:20px;font-weight:600!important;opacity:.6}'],changeDetection:0}),t})()},28604:function(t,e,i){"use strict";i.d(e,{e:function(){return d}});var n=i(35366),a=i(61116),s=i(85078),r=i(72883);function o(t,e){1&t&&n._UZ(0,"app-departure-list-item",4),2&t&&n.Q6J("departure",e.$implicit)}function l(t,e){if(1&t&&(n.TgZ(0,"mat-nav-list",2),n.YNc(1,o,1,1,"app-departure-list-item",3),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.departures)}}function c(t,e){1&t&&(n.TgZ(0,"div",5),n.TgZ(1,"h4"),n._uU(2,"No Departures"),n.qZA(),n.qZA())}let d=(()=>{class t{constructor(){this.mDepartures=[]}set departures(t){this.mDepartures=t||[]}get departures(){return this.mDepartures?this.mDepartures:[]}hasDepartures(){return void 0!==this.mDepartures&&this.mDepartures.length>0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-departure-list"]],inputs:{departures:"departures"},decls:2,vars:2,consts:[["role","list",4,"ngIf"],["class","no-departures",4,"ngIf"],["role","list"],[3,"departure",4,"ngFor","ngForOf"],[3,"departure"],[1,"no-departures"]],template:function(t,e){1&t&&(n.YNc(0,l,2,1,"mat-nav-list",0),n.YNc(1,c,3,0,"div",1)),2&t&&(n.Q6J("ngIf",e.hasDepartures()),n.xp6(1),n.Q6J("ngIf",!e.hasDepartures()))},directives:[a.O5,s.Hk,a.sg,r.r],styles:["[_nghost-%COMP%]{display:block}div.no-departures[_ngcontent-%COMP%]{margin:15px}"],changeDetection:0}),t})()},30304:function(t,e,i){"use strict";i.d(e,{nJ:function(){return c}}),i(72883),i(28604);var n=i(61116),a=i(77307),s=i(85078),r=i(87672),o=i(32860),l=i(35366);let c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[n.ez,a.Ps,s.ie,r.Cq,o.Bz]]}),t})()},48802:function(t,e,i){"use strict";i.d(e,{q:function(){return u}});var n=i(35366),a=i(61116),s=i(85078),r=i(36278),o=i(87064);function l(t,e){if(1&t&&(n.TgZ(0,"mat-list-item"),n.TgZ(1,"h4",5),n._uU(2),n.qZA(),n.qZA()),2&t){const t=e.$implicit;n.xp6(2),n.Oqu(t)}}function c(t,e){if(1&t&&(n.ynx(0),n.TgZ(1,"h3",4),n._uU(2),n.qZA(),n._UZ(3,"mat-divider"),n.YNc(4,l,3,1,"mat-list-item",3),n.BQk()),2&t){const t=e.$implicit;n.xp6(2),n.Oqu(null==t?null:t.shortName),n.xp6(2),n.Q6J("ngForOf",t.directions)}}function d(t,e){if(1&t&&(n.TgZ(0,"mat-list",2),n.YNc(1,c,5,2,"ng-container",3),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.routes)}}function h(t,e){1&t&&(n.TgZ(0,"div",6),n.TgZ(1,"h4"),n._uU(2,"No Routes"),n.qZA(),n.qZA())}let u=(()=>{class t{constructor(){this.mDepartures=[]}set routes(t){this.mDepartures=t||[]}get routes(){return this.mDepartures}get hasRoutes(){return this.mDepartures&&this.mDepartures.length>0}convertTime(t,e){return t>300?e.actualTime:`${Math.ceil(t/60)}min`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-route-list"]],inputs:{routes:"routes"},decls:2,vars:2,consts:[["role","list",4,"ngIf"],["class","no-routes",4,"ngIf"],["role","list"],[4,"ngFor","ngForOf"],["matSubheader",""],["matLine",""],[1,"no-routes"]],template:function(t,e){1&t&&(n.YNc(0,d,2,1,"mat-list",0),n.YNc(1,h,3,0,"div",1)),2&t&&(n.Q6J("ngIf",e.hasRoutes),n.xp6(1),n.Q6J("ngIf",!e.hasRoutes))},directives:[a.O5,s.i$,a.sg,s.gs,r.d,s.Tg,o.X2],styles:["[_nghost-%COMP%]{display:block}mat-list-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:red;display:block;list-style-type:circle;list-style-position:outside}mat-list-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:list-item;padding:0 20px}div.no-routes[_ngcontent-%COMP%]{margin:15px}"]}),t})()},70035:function(t,e,i){"use strict";i.d(e,{W:function(){return o}});var n=i(61116),a=i(36278),s=i(85078),r=i(35366);let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({providers:[],imports:[[n.ez,a.t,s.ie],n.ez,a.t,s.ie]}),t})()}}]);