"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2839],{32839:function(e,t,n){n.d(t,{Z:function(){return ec}});var a=n(4942),r=n(87462),o=n(96494),i=n(76164),c=n(1413),l=n(67294),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},s=n(32206),f=function(e,t){return l.createElement(s.Z,(0,c.Z)((0,c.Z)({},e),{},{ref:t,icon:u}))};f.displayName="PlusOutlined";var d=l.forwardRef(f),v=n(93967),m=n.n(v),b=n(97685),p=n(71002),h=n(45987),y=n(83599),Z=n(21640),g=n(82225),E=(0,l.createContext)(null),k=l.forwardRef(function(e,t){var n=e.prefixCls,a=e.className,r=e.style,o=e.id,i=e.active,c=e.tabKey,u=e.children;return l.createElement("div",{id:o&&"".concat(o,"-panel-").concat(c),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(c),"aria-hidden":!i,style:r,className:m()(n,i&&"".concat(n,"-active"),a),ref:t},u)}),x=["key","forceRender","style","className"];function C(e){var t=e.id,n=e.activeKey,o=e.animated,i=e.tabPosition,u=e.destroyInactiveTabPane,s=l.useContext(E),f=s.prefixCls,d=s.tabs,v=o.tabPane,b="".concat(f,"-tabpane");return l.createElement("div",{className:m()("".concat(f,"-content-holder"))},l.createElement("div",{className:m()("".concat(f,"-content"),"".concat(f,"-content-").concat(i),(0,a.Z)({},"".concat(f,"-content-animated"),v))},d.map(function(e){var a=e.key,i=e.forceRender,s=e.style,f=e.className,d=(0,h.Z)(e,x),p=a===n;return l.createElement(g.default,(0,r.Z)({key:a,visible:p,forceRender:i,removeOnLeave:!!u,leavedClassName:"".concat(b,"-hidden")},o.tabPaneMotion),function(e,n){var o=e.style,i=e.className;return l.createElement(k,(0,r.Z)({},d,{prefixCls:b,id:t,tabKey:a,animated:v,active:p,style:(0,c.Z)((0,c.Z)({},s),o),className:m()(f,i),ref:n}))})})))}var w=n(74902),P=n(48555),N=n(62762),T=n(90985),S=n(21396),I={width:0,height:0,left:0,top:0};function R(e,t){var n=l.useRef(e),a=l.useState({}),r=(0,b.Z)(a,2)[1];return[n.current,function(e){var a="function"==typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var M=n(56040);function B(e){var t=(0,l.useState)(0),n=(0,b.Z)(t,2),a=n[0],r=n[1],o=(0,l.useRef)(0),i=(0,l.useRef)();return i.current=e,(0,M.o)(function(){var e;null===(e=i.current)||void 0===e||e.call(i)},[a]),function(){o.current===a&&(o.current+=1,r(o.current))}}var O={width:0,height:0,left:0,top:0,right:0};function L(e){var t;return e instanceof Map?(t={},e.forEach(function(e,n){t[n]=e})):t=e,JSON.stringify(t)}function A(e){return String(e).replace(/"/g,"TABS_DQ")}var D=l.forwardRef(function(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?l.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null==r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}),j=l.forwardRef(function(e,t){var n,a=e.position,r=e.prefixCls,o=e.extra;if(!o)return null;var i={};return"object"!==(0,p.Z)(o)||l.isValidElement(o)?i.right=o:i=o,"right"===a&&(n=i.right),"left"===a&&(n=i.left),n?l.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},n):null}),K=n(60057),_=n(97868),q=n(79097),W=l.memo(l.forwardRef(function(e,t){var n=e.prefixCls,r=e.id,o=e.tabs,i=e.locale,c=e.mobile,u=e.moreIcon,s=e.moreTransitionName,f=e.style,d=e.className,v=e.editable,p=e.tabBarGutter,h=e.rtl,y=e.removeAriaLabel,Z=e.onTabClick,g=e.getPopupContainer,E=e.popupClassName,k=(0,l.useState)(!1),x=(0,b.Z)(k,2),C=x[0],w=x[1],P=(0,l.useState)(null),N=(0,b.Z)(P,2),T=N[0],S=N[1],I="".concat(r,"-more-popup"),R="".concat(n,"-dropdown"),M=null!==T?"".concat(I,"-").concat(T):null,B=null==i?void 0:i.dropdownAriaLabel,O=l.createElement(_.ZP,{onClick:function(e){Z(e.key,e.domEvent),w(!1)},prefixCls:"".concat(R,"-menu"),id:I,tabIndex:-1,role:"listbox","aria-activedescendant":M,selectedKeys:[T],"aria-label":void 0!==B?B:"expanded dropdown"},o.map(function(e){var t=v&&!1!==e.closable&&!e.disabled;return l.createElement(_.sN,{key:e.key,id:"".concat(I,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},l.createElement("span",null,e.label),t&&l.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:"".concat(R,"-menu-item-remove"),onClick:function(t){var n;t.stopPropagation(),n=e.key,t.preventDefault(),t.stopPropagation(),v.onEdit("remove",{key:n,event:t})}},e.closeIcon||v.removeIcon||"\xd7"))}));function L(e){for(var t=o.filter(function(e){return!e.disabled}),n=t.findIndex(function(e){return e.key===T})||0,a=t.length,r=0;r<a;r+=1){var i=t[n=(n+e+a)%a];if(!i.disabled){S(i.key);return}}}(0,l.useEffect)(function(){var e=document.getElementById(M);e&&e.scrollIntoView&&e.scrollIntoView(!1)},[T]),(0,l.useEffect)(function(){C||S(null)},[C]);var A=(0,a.Z)({},h?"marginRight":"marginLeft",p);o.length||(A.visibility="hidden",A.order=1);var j=m()((0,a.Z)({},"".concat(R,"-rtl"),h)),W=c?null:l.createElement(K.Z,{prefixCls:R,overlay:O,trigger:["hover"],visible:!!o.length&&C,transitionName:s,onVisibleChange:w,overlayClassName:m()(j,E),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:g},l.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:A,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":I,id:"".concat(r,"-more"),"aria-expanded":C,onKeyDown:function(e){var t=e.which;if(!C){[q.Z.DOWN,q.Z.SPACE,q.Z.ENTER].includes(t)&&(w(!0),e.preventDefault());return}switch(t){case q.Z.UP:L(-1),e.preventDefault();break;case q.Z.DOWN:L(1),e.preventDefault();break;case q.Z.ESC:w(!1);break;case q.Z.SPACE:case q.Z.ENTER:null!==T&&Z(T,e)}}},void 0===u?"More":u));return l.createElement("div",{className:m()("".concat(n,"-nav-operations"),d),style:f,ref:t},W,l.createElement(D,{prefixCls:n,locale:i,editable:v}))}),function(e,t){return t.tabMoving}),V=function(e){var t,n=e.prefixCls,r=e.id,o=e.active,i=e.tab,c=i.key,u=i.label,s=i.disabled,f=i.closeIcon,d=e.closable,v=e.renderWrapper,b=e.removeAriaLabel,p=e.editable,h=e.onClick,y=e.onFocus,Z=e.style,g="".concat(n,"-tab"),E=p&&!1!==d&&!s;function k(e){s||h(e)}var x=l.createElement("div",{key:c,"data-node-key":A(c),className:m()(g,(t={},(0,a.Z)(t,"".concat(g,"-with-remove"),E),(0,a.Z)(t,"".concat(g,"-active"),o),(0,a.Z)(t,"".concat(g,"-disabled"),s),t)),style:Z,onClick:k},l.createElement("div",{role:"tab","aria-selected":o,id:r&&"".concat(r,"-tab-").concat(c),className:"".concat(g,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(c),"aria-disabled":s,tabIndex:s?null:0,onClick:function(e){e.stopPropagation(),k(e)},onKeyDown:function(e){[q.Z.SPACE,q.Z.ENTER].includes(e.which)&&(e.preventDefault(),k(e))},onFocus:y},u),E&&l.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(g,"-remove"),onClick:function(e){e.stopPropagation(),e.preventDefault(),e.stopPropagation(),p.onEdit("remove",{key:c,event:e})}},f||p.removeIcon||"\xd7"));return v?v(x):x},z=function(e){var t=e.current||{},n=t.offsetWidth,a=t.offsetHeight;return[void 0===n?0:n,void 0===a?0:a]},G=function(e,t){return e[t?0:1]},F=l.forwardRef(function(e,t){var n,o,i,u,s,f,d,v,p,h,y,Z,g,k,x,C,M,K,_,q,F,H,X,Y,J,Q,U,$,ee,et,en,ea,er,eo,ei,ec,el,eu,es,ef,ed=l.useContext(E),ev=ed.prefixCls,em=ed.tabs,eb=e.className,ep=e.style,eh=e.id,ey=e.animated,eZ=e.activeKey,eg=e.rtl,eE=e.extra,ek=e.editable,ex=e.locale,eC=e.tabPosition,ew=e.tabBarGutter,eP=e.children,eN=e.onTabClick,eT=e.onTabScroll,eS=(0,l.useRef)(),eI=(0,l.useRef)(),eR=(0,l.useRef)(),eM=(0,l.useRef)(),eB=(0,l.useRef)(),eO=(0,l.useRef)(),eL=(0,l.useRef)(),eA="top"===eC||"bottom"===eC,eD=R(0,function(e,t){eA&&eT&&eT({direction:e>t?"left":"right"})}),ej=(0,b.Z)(eD,2),eK=ej[0],e_=ej[1],eq=R(0,function(e,t){!eA&&eT&&eT({direction:e>t?"top":"bottom"})}),eW=(0,b.Z)(eq,2),eV=eW[0],ez=eW[1],eG=(0,l.useState)([0,0]),eF=(0,b.Z)(eG,2),eH=eF[0],eX=eF[1],eY=(0,l.useState)([0,0]),eJ=(0,b.Z)(eY,2),eQ=eJ[0],eU=eJ[1],e$=(0,l.useState)([0,0]),e0=(0,b.Z)(e$,2),e1=e0[0],e2=e0[1],e8=(0,l.useState)([0,0]),e6=(0,b.Z)(e8,2),e4=e6[0],e9=e6[1],e7=(n=new Map,o=(0,l.useRef)([]),i=(0,l.useState)({}),u=(0,b.Z)(i,2)[1],s=(0,l.useRef)("function"==typeof n?n():n),f=B(function(){var e=s.current;o.current.forEach(function(t){e=t(e)}),o.current=[],s.current=e,u({})}),[s.current,function(e){o.current.push(e),f()}]),e5=(0,b.Z)(e7,2),e3=e5[0],te=e5[1],tt=(d=eQ[0],(0,l.useMemo)(function(){for(var e=new Map,t=e3.get(null===(r=em[0])||void 0===r?void 0:r.key)||I,n=t.left+t.width,a=0;a<em.length;a+=1){var r,o,i=em[a].key,l=e3.get(i);l||(l=e3.get(null===(o=em[a-1])||void 0===o?void 0:o.key)||I);var u=e.get(i)||(0,c.Z)({},l);u.right=n-u.left-u.width,e.set(i,u)}return e},[em.map(function(e){return e.key}).join("_"),e3,d])),tn=G(eH,eA),ta=G(eQ,eA),tr=G(e1,eA),to=G(e4,eA),ti=tn<ta+tr,tc=ti?tn-to:tn-tr,tl="".concat(ev,"-nav-operations-hidden"),tu=0,ts=0;function tf(e){return e<tu?tu:e>ts?ts:e}eA&&eg?(tu=0,ts=Math.max(0,ta-tc)):(tu=Math.min(0,tc-ta),ts=0);var td=(0,l.useRef)(),tv=(0,l.useState)(),tm=(0,b.Z)(tv,2),tb=tm[0],tp=tm[1];function th(){tp(Date.now())}function ty(){window.clearTimeout(td.current)}v=function(e,t){function n(e,t){e(function(e){return tf(e+t)})}return!!ti&&(eA?n(e_,e):n(ez,t),ty(),th(),!0)},p=(0,l.useState)(),y=(h=(0,b.Z)(p,2))[0],Z=h[1],g=(0,l.useState)(0),x=(k=(0,b.Z)(g,2))[0],C=k[1],M=(0,l.useState)(0),_=(K=(0,b.Z)(M,2))[0],q=K[1],F=(0,l.useState)(),X=(H=(0,b.Z)(F,2))[0],Y=H[1],J=(0,l.useRef)(),Q=(0,l.useRef)(),(U=(0,l.useRef)(null)).current={onTouchStart:function(e){var t=e.touches[0];Z({x:t.screenX,y:t.screenY}),window.clearInterval(J.current)},onTouchMove:function(e){if(y){e.preventDefault();var t=e.touches[0],n=t.screenX,a=t.screenY;Z({x:n,y:a});var r=n-y.x,o=a-y.y;v(r,o);var i=Date.now();C(i),q(i-x),Y({x:r,y:o})}},onTouchEnd:function(){if(y&&(Z(null),Y(null),X)){var e=X.x/_,t=X.y/_;if(!(.1>Math.max(Math.abs(e),Math.abs(t)))){var n=e,a=t;J.current=window.setInterval(function(){if(.01>Math.abs(n)&&.01>Math.abs(a)){window.clearInterval(J.current);return}n*=.9046104802746175,a*=.9046104802746175,v(20*n,20*a)},20)}}},onWheel:function(e){var t=e.deltaX,n=e.deltaY,a=0,r=Math.abs(t),o=Math.abs(n);r===o?a="x"===Q.current?t:n:r>o?(a=t,Q.current="x"):(a=n,Q.current="y"),v(-a,-a)&&e.preventDefault()}},l.useEffect(function(){function e(e){U.current.onTouchMove(e)}function t(e){U.current.onTouchEnd(e)}return document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("touchend",t,{passive:!1}),eM.current.addEventListener("touchstart",function(e){U.current.onTouchStart(e)},{passive:!1}),eM.current.addEventListener("wheel",function(e){U.current.onWheel(e)}),function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",t)}},[]),(0,l.useEffect)(function(){return ty(),tb&&(td.current=window.setTimeout(function(){tp(0)},100)),ty},[tb]);var tZ=($=eA?eK:eV,er=(ee=(0,c.Z)((0,c.Z)({},e),{},{tabs:em})).tabs,eo=ee.tabPosition,ei=ee.rtl,["top","bottom"].includes(eo)?(et="width",en=ei?"right":"left",ea=Math.abs($)):(et="height",en="top",ea=-$),(0,l.useMemo)(function(){if(!er.length)return[0,0];for(var e=er.length,t=e,n=0;n<e;n+=1){var a=tt.get(er[n].key)||O;if(a[en]+a[et]>ea+tc){t=n-1;break}}for(var r=0,o=e-1;o>=0;o-=1)if((tt.get(er[o].key)||O)[en]<ea){r=o+1;break}return[r,t]},[tt,tc,ta,tr,to,ea,eo,er.map(function(e){return e.key}).join("_"),ei])),tg=(0,b.Z)(tZ,2),tE=tg[0],tk=tg[1],tx=(0,N.Z)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:eZ,t=tt.get(e)||{width:0,height:0,left:0,right:0,top:0};if(eA){var n=eK;eg?t.right<eK?n=t.right:t.right+t.width>eK+tc&&(n=t.right+t.width-tc):t.left<-eK?n=-t.left:t.left+t.width>-eK+tc&&(n=-(t.left+t.width-tc)),ez(0),e_(tf(n))}else{var a=eV;t.top<-eV?a=-t.top:t.top+t.height>-eV+tc&&(a=-(t.top+t.height-tc)),e_(0),ez(tf(a))}}),tC={};"top"===eC||"bottom"===eC?tC[eg?"marginRight":"marginLeft"]=ew:tC.marginTop=ew;var tw=em.map(function(e,t){var n=e.key;return l.createElement(V,{id:eh,prefixCls:ev,key:n,tab:e,style:0===t?void 0:tC,closable:e.closable,editable:ek,active:n===eZ,renderWrapper:eP,removeAriaLabel:null==ex?void 0:ex.removeAriaLabel,onClick:function(e){eN(n,e)},onFocus:function(){tx(n),th(),eM.current&&(eg||(eM.current.scrollLeft=0),eM.current.scrollTop=0)}})}),tP=function(){return te(function(){var e=new Map;return em.forEach(function(t){var n,a=t.key,r=null===(n=eB.current)||void 0===n?void 0:n.querySelector('[data-node-key="'.concat(A(a),'"]'));r&&e.set(a,{width:r.offsetWidth,height:r.offsetHeight,left:r.offsetLeft,top:r.offsetTop})}),e})};(0,l.useEffect)(function(){tP()},[em.map(function(e){return e.key}).join("_")]);var tN=B(function(){var e=z(eS),t=z(eI),n=z(eR);eX([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=z(eL);e2(a),e9(z(eO));var r=z(eB);eU([r[0]-a[0],r[1]-a[1]]),tP()}),tT=em.slice(0,tE),tS=em.slice(tk+1),tI=[].concat((0,w.Z)(tT),(0,w.Z)(tS)),tR=(0,l.useState)(),tM=(0,b.Z)(tR,2),tB=tM[0],tO=tM[1],tL=tt.get(eZ),tA=(0,l.useRef)();function tD(){T.Z.cancel(tA.current)}(0,l.useEffect)(function(){var e={};return tL&&(eA?(eg?e.right=tL.right:e.left=tL.left,e.width=tL.width):(e.top=tL.top,e.height=tL.height)),tD(),tA.current=(0,T.Z)(function(){tO(e)}),tD},[tL,eA,eg]),(0,l.useEffect)(function(){tx()},[eZ,tu,ts,L(tL),L(tt),eA]),(0,l.useEffect)(function(){tN()},[eg]);var tj=!!tI.length,tK="".concat(ev,"-nav-wrap");return eA?eg?(eu=eK>0,el=eK!==ts):(el=eK<0,eu=eK!==tu):(es=eV<0,ef=eV!==tu),l.createElement(P.default,{onResize:tN},l.createElement("div",{ref:(0,S.x1)(t,eS),role:"tablist",className:m()("".concat(ev,"-nav"),eb),style:ep,onKeyDown:function(){th()}},l.createElement(j,{ref:eI,position:"left",extra:eE,prefixCls:ev}),l.createElement("div",{className:m()(tK,(ec={},(0,a.Z)(ec,"".concat(tK,"-ping-left"),el),(0,a.Z)(ec,"".concat(tK,"-ping-right"),eu),(0,a.Z)(ec,"".concat(tK,"-ping-top"),es),(0,a.Z)(ec,"".concat(tK,"-ping-bottom"),ef),ec)),ref:eM},l.createElement(P.default,{onResize:tN},l.createElement("div",{ref:eB,className:"".concat(ev,"-nav-list"),style:{transform:"translate(".concat(eK,"px, ").concat(eV,"px)"),transition:tb?"none":void 0}},tw,l.createElement(D,{ref:eL,prefixCls:ev,locale:ex,editable:ek,style:(0,c.Z)((0,c.Z)({},0===tw.length?void 0:tC),{},{visibility:tj?"hidden":null})}),l.createElement("div",{className:m()("".concat(ev,"-ink-bar"),(0,a.Z)({},"".concat(ev,"-ink-bar-animated"),ey.inkBar)),style:tB})))),l.createElement(W,(0,r.Z)({},e,{removeAriaLabel:null==ex?void 0:ex.removeAriaLabel,ref:eO,prefixCls:ev,tabs:tI,className:!tj&&tl,tabMoving:!!tb})),l.createElement(j,{ref:eR,position:"right",extra:eE,prefixCls:ev})))}),H=["renderTabBar"],X=["label","key"];function Y(e){var t=e.renderTabBar,n=(0,h.Z)(e,H),a=l.useContext(E).tabs;return t?t((0,c.Z)((0,c.Z)({},n),{},{panes:a.map(function(e){var t=e.label,n=e.key,a=(0,h.Z)(e,X);return l.createElement(k,(0,r.Z)({tab:t,key:n,tabKey:n},a))})}),F):l.createElement(F,n)}n(5464);var J=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],Q=0,U=l.forwardRef(function(e,t){var n,o,i=e.id,u=e.prefixCls,s=void 0===u?"rc-tabs":u,f=e.className,d=e.items,v=e.direction,g=e.activeKey,k=e.defaultActiveKey,x=e.editable,w=e.animated,P=e.tabPosition,N=void 0===P?"top":P,T=e.tabBarGutter,S=e.tabBarStyle,I=e.tabBarExtraContent,R=e.locale,M=e.moreIcon,B=e.moreTransitionName,O=e.destroyInactiveTabPane,L=e.renderTabBar,A=e.onChange,D=e.onTabClick,j=e.onTabScroll,K=e.getPopupContainer,_=e.popupClassName,q=(0,h.Z)(e,J),W=l.useMemo(function(){return(d||[]).filter(function(e){return e&&"object"===(0,p.Z)(e)&&"key"in e})},[d]),V="rtl"===v,z=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,c.Z)({inkBar:!0},"object"===(0,p.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(w),G=(0,l.useState)(!1),F=(0,b.Z)(G,2),H=F[0],X=F[1];(0,l.useEffect)(function(){X((0,y.Z)())},[]);var U=(0,Z.Z)(function(){var e;return null===(e=W[0])||void 0===e?void 0:e.key},{value:g,defaultValue:k}),$=(0,b.Z)(U,2),ee=$[0],et=$[1],en=(0,l.useState)(function(){return W.findIndex(function(e){return e.key===ee})}),ea=(0,b.Z)(en,2),er=ea[0],eo=ea[1];(0,l.useEffect)(function(){var e,t=W.findIndex(function(e){return e.key===ee});-1===t&&(t=Math.max(0,Math.min(er,W.length-1)),et(null===(e=W[t])||void 0===e?void 0:e.key)),eo(t)},[W.map(function(e){return e.key}).join("_"),ee,er]);var ei=(0,Z.Z)(null,{value:i}),ec=(0,b.Z)(ei,2),el=ec[0],eu=ec[1];(0,l.useEffect)(function(){i||(eu("rc-tabs-".concat(Q)),Q+=1)},[]);var es={id:el,activeKey:ee,animated:z,tabPosition:N,rtl:V,mobile:H},ef=(0,c.Z)((0,c.Z)({},es),{},{editable:x,locale:R,moreIcon:M,moreTransitionName:B,tabBarGutter:T,onTabClick:function(e,t){null==D||D(e,t);var n=e!==ee;et(e),n&&(null==A||A(e))},onTabScroll:j,extra:I,style:S,panes:null,getPopupContainer:K,popupClassName:_});return l.createElement(E.Provider,{value:{tabs:W,prefixCls:s}},l.createElement("div",(0,r.Z)({ref:t,id:i,className:m()(s,"".concat(s,"-").concat(N),(n={},(0,a.Z)(n,"".concat(s,"-mobile"),H),(0,a.Z)(n,"".concat(s,"-editable"),x),(0,a.Z)(n,"".concat(s,"-rtl"),V),n),f)},q),o,l.createElement(Y,(0,r.Z)({},ef,{renderTabBar:L})),l.createElement(C,(0,r.Z)({destroyInactiveTabPane:O},es,{animated:z}))))}),$=n(71946),ee=n(41395),et=n(37474),en={motionAppear:!1,motionEnter:!0,motionLeave:!0},ea=n(78086),er=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},eo=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};function ei(e){var t,n=e.type,c=e.className,u=e.size,s=e.onEdit,f=e.hideAdd,v=e.centered,b=e.addIcon,h=e.children,y=e.items,Z=e.animated,g=eo(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),E=g.prefixCls,k=g.moreIcon,x=void 0===k?l.createElement(i.Z,null):k,C=l.useContext($.E_),w=C.getPrefixCls,P=C.direction,N=C.getPopupContainer,T=w("tabs",E);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null==s||s("add"===e?a:n,e)},removeIcon:l.createElement(o.Z,null),addIcon:b||l.createElement(d,null),showAdd:!0!==f});var S=w(),I=y||(0,ea.Z)(h).map(function(e){if(l.isValidElement(e)){var t=e.key,n=e.props||{},a=n.tab,o=er(n,["tab"]);return(0,r.Z)((0,r.Z)({key:String(t)},o),{label:a})}return null}).filter(function(e){return e}),R=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:(0,r.Z)({inkBar:!0},"object"===(0,p.Z)(n)?n:{})).tabPane&&(t.tabPaneMotion=(0,r.Z)((0,r.Z)({},en),{motionName:(0,et.mL)(e,"switch")})),t}(T,Z);return l.createElement(ee.Z.Consumer,null,function(e){var o=void 0!==u?u:e;return l.createElement(U,(0,r.Z)({direction:P,getPopupContainer:N,moreTransitionName:"".concat(S,"-slide-up")},g,{items:I,className:m()((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(T,"-").concat(o),o),"".concat(T,"-card"),["card","editable-card"].includes(n)),"".concat(T,"-editable-card"),"editable-card"===n),"".concat(T,"-centered"),v),c),editable:t,moreIcon:x,prefixCls:T,animated:R}))})}ei.TabPane=function(){return null};var ec=ei}}]);