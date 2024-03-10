"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9907],{42003:function(X,h){var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};h.Z=e},5717:function(X,h){var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"};h.Z=e},18899:function(X,h,e){e.r(h),e.d(h,{default:function(){return ge}});var t=e(5574),v=e.n(t),C=e(80854),P=e(8232),S=e(34041),w=e(2453),U=e(38703),j=e(96365),$=e(55241),V=e(78957),p=e(71230),s=e(15746),l=e(14726),r=e(67294),u=e(15009),a=e.n(u),m=e(99289),A=e.n(m);function R(J){return B.apply(this,arguments)}function B(){return B=A()(a()().mark(function J(T){return a()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.abrupt("return",(0,C.request)("/api/register",{method:"POST",data:T}));case 1:case"end":return F.stop()}},J)})),B.apply(this,arguments)}var G=e(45318),Y=(0,G.kc)(function(J){var T=J.token;return{main:{width:"368px",margin:"0 auto",h3:{marginBottom:"20px",fontSize:"16px"}},password:{marginBottom:"24px",".ant-form-item-explain":{display:"none"}},getCaptcha:{display:"block",width:"100%"},footer:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},submit:{width:"50%"},success:{transition:"color 0.3s",color:T.colorSuccess},warning:{transition:"color 0.3s",color:T.colorWarning},error:{transition:"color 0.3s",color:T.colorError},"progress-pass > .progress":{".ant-progress-bg":{backgroundColor:T.colorWarning}}}}),K=Y,n=e(85893),x=P.Z.Item,b=S.Z.Option,ve={ok:"success",pass:"normal",poor:"exception"},pe=function(){var T=K(),Z=T.styles,F=(0,r.useState)(0),he=v()(F,2),o=he[0],E=he[1],d=(0,r.useState)(!1),c=v()(d,2),f=c[0],D=c[1],k=(0,r.useState)("86"),z=v()(k,2),q=z[0],ee=z[1],Q=(0,r.useState)(!1),W=v()(Q,2),de=W[0],_=W[1],ae=!1,H,fe={ok:(0,n.jsx)("div",{className:Z.success,children:(0,n.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u5F3A"})}),pass:(0,n.jsx)("div",{className:Z.warning,children:(0,n.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u4E2D"})}),poor:(0,n.jsx)("div",{className:Z.error,children:(0,n.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u592A\u77ED"})})},te=P.Z.useForm(),le=v()(te,1),y=le[0];(0,r.useEffect)(function(){return function(){clearInterval(H)}},[H]);var me=function(){var i=59;E(i),H=window.setInterval(function(){i-=1,E(i),i===0&&clearInterval(H)},1e3)},ne=function(){var i=y.getFieldValue("password");return i&&i.length>9?"ok":i&&i.length>5?"pass":"poor"},N=(0,C.useRequest)(R,{manual:!0,onSuccess:function(i,O){i.status==="ok"&&(w.ZP.success("\u6CE8\u518C\u6210\u529F\uFF01"),C.history.push({pathname:"/user/register-result?account=".concat(O[0].email)}))}}),L=N.loading,se=N.run,re=function(i){se(i)},ie=function(i,O){var oe=Promise;return O&&O!==y.getFieldValue("password")?oe.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u5339\u914D!"):oe.resolve()},ce=function(i,O){var oe=Promise;return O?(f||D(!!O),_(!de),O.length<6?oe.reject(""):(O&&ae&&y.validateFields(["confirm"]),oe.resolve())):(D(!!O),oe.reject("\u8BF7\u8F93\u5165\u5BC6\u7801!"))},Ee=function(i){ee(i)},Ce=function(){var i=y.getFieldValue("password"),O=ne();return i&&i.length?(0,n.jsx)("div",{className:Z["progress-".concat(O)],children:(0,n.jsx)(U.Z,{status:ve[O],strokeWidth:6,percent:i.length*10>100?100:i.length*10,showInfo:!1})}):null};return(0,n.jsxs)("div",{className:Z.main,children:[(0,n.jsx)("h3",{children:"\u6CE8\u518C"}),(0,n.jsxs)(P.Z,{form:y,name:"UserRegister",onFinish:re,children:[(0,n.jsx)(x,{name:"email",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740!"},{type:"email",message:"\u90AE\u7BB1\u5730\u5740\u683C\u5F0F\u9519\u8BEF!"}],children:(0,n.jsx)(j.Z,{size:"large",placeholder:"\u90AE\u7BB1"})}),(0,n.jsx)($.Z,{getPopupContainer:function(i){return i&&i.parentNode?i.parentNode:i},content:f&&(0,n.jsxs)("div",{style:{padding:"4px 0"},children:[fe[ne()],Ce(),(0,n.jsx)("div",{style:{marginTop:10},children:(0,n.jsx)("span",{children:"\u8BF7\u81F3\u5C11\u8F93\u5165 6 \u4E2A\u5B57\u7B26\u3002\u8BF7\u4E0D\u8981\u4F7F\u7528\u5BB9\u6613\u88AB\u731C\u5230\u7684\u5BC6\u7801\u3002"})})]}),overlayStyle:{width:240},placement:"right",open:f,children:(0,n.jsx)(x,{name:"password",className:y.getFieldValue("password")&&y.getFieldValue("password").length>0&&Z.password,rules:[{validator:ce}],children:(0,n.jsx)(j.Z,{size:"large",type:"password",placeholder:"\u81F3\u5C116\u4F4D\u5BC6\u7801\uFF0C\u533A\u5206\u5927\u5C0F\u5199"})})}),(0,n.jsx)(x,{name:"confirm",rules:[{required:!0,message:"\u786E\u8BA4\u5BC6\u7801"},{validator:ie}],children:(0,n.jsx)(j.Z,{size:"large",type:"password",placeholder:"\u786E\u8BA4\u5BC6\u7801"})}),(0,n.jsx)(x,{name:"mobile",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7!"},{pattern:/^\d{11}$/,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF!"}],children:(0,n.jsxs)(V.Z.Compact,{style:{width:"100%"},children:[(0,n.jsxs)(S.Z,{size:"large",value:q,onChange:Ee,style:{width:"30%"},children:[(0,n.jsx)(b,{value:"86",children:"+86"}),(0,n.jsx)(b,{value:"87",children:"+87"})]}),(0,n.jsx)(j.Z,{size:"large",placeholder:"\u624B\u673A\u53F7"})]})}),(0,n.jsxs)(p.Z,{gutter:8,children:[(0,n.jsx)(s.Z,{span:16,children:(0,n.jsx)(x,{name:"captcha",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801!"}],children:(0,n.jsx)(j.Z,{size:"large",placeholder:"\u9A8C\u8BC1\u7801"})})}),(0,n.jsx)(s.Z,{span:8,children:(0,n.jsx)(l.ZP,{size:"large",disabled:!!o,className:Z.getCaptcha,onClick:me,children:o?"".concat(o," s"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"})})]}),(0,n.jsx)(x,{children:(0,n.jsxs)("div",{className:Z.footer,children:[(0,n.jsx)(l.ZP,{size:"large",loading:L,className:Z.submit,type:"primary",htmlType:"submit",children:(0,n.jsx)("span",{children:"\u6CE8\u518C"})}),(0,n.jsx)(C.Link,{to:"/user/login",children:(0,n.jsx)("span",{children:"\u4F7F\u7528\u5DF2\u6709\u8D26\u6237\u767B\u5F55"})})]})})]})]})},ge=pe},81643:function(X,h,e){e.d(h,{Z:function(){return t}});const t=v=>v?typeof v=="function"?v():v:null},96365:function(X,h,e){e.d(h,{Z:function(){return he}});var t=e(67294),v=e(93967),C=e.n(v),P=e(53124),S=e(65223),w=e(47673),j=o=>{const{getPrefixCls:E,direction:d}=(0,t.useContext)(P.E_),{prefixCls:c,className:f}=o,D=E("input-group",c),k=E("input"),[z,q]=(0,w.ZP)(k),ee=C()(D,{[`${D}-lg`]:o.size==="large",[`${D}-sm`]:o.size==="small",[`${D}-compact`]:o.compact,[`${D}-rtl`]:d==="rtl"},q,f),Q=(0,t.useContext)(S.aM),W=(0,t.useMemo)(()=>Object.assign(Object.assign({},Q),{isFormItemInput:!1}),[Q]);return z(t.createElement("span",{className:ee,style:o.style,onMouseEnter:o.onMouseEnter,onMouseLeave:o.onMouseLeave,onFocus:o.onFocus,onBlur:o.onBlur},t.createElement(S.aM.Provider,{value:W},o.children)))},$=e(72599),V=e(87462),p=e(42003),s=e(93771),l=function(E,d){return t.createElement(s.Z,(0,V.Z)({},E,{ref:d,icon:p.Z}))},r=t.forwardRef(l),u=e(1208),a=e(98423),m=e(42550),A=e(72922),R=function(o,E){var d={};for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&E.indexOf(c)<0&&(d[c]=o[c]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,c=Object.getOwnPropertySymbols(o);f<c.length;f++)E.indexOf(c[f])<0&&Object.prototype.propertyIsEnumerable.call(o,c[f])&&(d[c[f]]=o[c[f]]);return d};const B=o=>o?t.createElement(u.Z,null):t.createElement(r,null),G={click:"onClick",hover:"onMouseOver"};var K=t.forwardRef((o,E)=>{const{visibilityToggle:d=!0}=o,c=typeof d=="object"&&d.visible!==void 0,[f,D]=(0,t.useState)(()=>c?d.visible:!1),k=(0,t.useRef)(null);t.useEffect(()=>{c&&D(d.visible)},[c,d]);const z=(0,A.Z)(k),q=()=>{const{disabled:ne}=o;ne||(f&&z(),D(N=>{var L;const se=!N;return typeof d=="object"&&((L=d.onVisibleChange)===null||L===void 0||L.call(d,se)),se}))},ee=ne=>{const{action:N="click",iconRender:L=B}=o,se=G[N]||"",re=L(f),ie={[se]:q,className:`${ne}-icon`,key:"passwordIcon",onMouseDown:ce=>{ce.preventDefault()},onMouseUp:ce=>{ce.preventDefault()}};return t.cloneElement(t.isValidElement(re)?re:t.createElement("span",null,re),ie)},{className:Q,prefixCls:W,inputPrefixCls:de,size:_}=o,ae=R(o,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:H}=t.useContext(P.E_),fe=H("input",de),te=H("input-password",W),le=d&&ee(te),y=C()(te,Q,{[`${te}-${_}`]:!!_}),me=Object.assign(Object.assign({},(0,a.Z)(ae,["suffix","iconRender","visibilityToggle"])),{type:f?"text":"password",className:y,prefixCls:fe,suffix:le});return _&&(me.size=_),t.createElement($.Z,Object.assign({ref:(0,m.sQ)(E,k)},me))}),n=e(25783),x=e(96159),b=e(14726),ve=e(98675),pe=e(4173),ge=function(o,E){var d={};for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&E.indexOf(c)<0&&(d[c]=o[c]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,c=Object.getOwnPropertySymbols(o);f<c.length;f++)E.indexOf(c[f])<0&&Object.prototype.propertyIsEnumerable.call(o,c[f])&&(d[c[f]]=o[c[f]]);return d},T=t.forwardRef((o,E)=>{const{prefixCls:d,inputPrefixCls:c,className:f,size:D,suffix:k,enterButton:z=!1,addonAfter:q,loading:ee,disabled:Q,onSearch:W,onChange:de,onCompositionStart:_,onCompositionEnd:ae}=o,H=ge(o,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:fe,direction:te}=t.useContext(P.E_),le=t.useRef(!1),y=fe("input-search",d),me=fe("input",c),{compactSize:ne}=(0,pe.ri)(y,te),N=(0,ve.Z)(g=>{var M;return(M=D!=null?D:ne)!==null&&M!==void 0?M:g}),L=t.useRef(null),se=g=>{g&&g.target&&g.type==="click"&&W&&W(g.target.value,g,{source:"clear"}),de&&de(g)},re=g=>{var M;document.activeElement===((M=L.current)===null||M===void 0?void 0:M.input)&&g.preventDefault()},ie=g=>{var M,ue;W&&W((ue=(M=L.current)===null||M===void 0?void 0:M.input)===null||ue===void 0?void 0:ue.value,g,{source:"input"})},ce=g=>{le.current||ee||ie(g)},Ee=typeof z=="boolean"?t.createElement(n.Z,null):null,Ce=`${y}-button`;let I;const i=z||{},O=i.type&&i.type.__ANT_BUTTON===!0;O||i.type==="button"?I=(0,x.Tm)(i,Object.assign({onMouseDown:re,onClick:g=>{var M,ue;(ue=(M=i==null?void 0:i.props)===null||M===void 0?void 0:M.onClick)===null||ue===void 0||ue.call(M,g),ie(g)},key:"enterButton"},O?{className:Ce,size:N}:{})):I=t.createElement(b.ZP,{className:Ce,type:z?"primary":void 0,size:N,disabled:Q,key:"enterButton",onMouseDown:re,onClick:ie,loading:ee,icon:Ee},z),q&&(I=[I,(0,x.Tm)(q,{key:"addonAfter"})]);const oe=C()(y,{[`${y}-rtl`]:te==="rtl",[`${y}-${N}`]:!!N,[`${y}-with-button`]:!!z},f),Pe=g=>{le.current=!0,_==null||_(g)},xe=g=>{le.current=!1,ae==null||ae(g)};return t.createElement($.Z,Object.assign({ref:(0,m.sQ)(L,E),onPressEnter:ce},H,{size:N,onCompositionStart:Pe,onCompositionEnd:xe,prefixCls:me,addonAfter:I,suffix:k,onChange:se,className:oe,disabled:Q}))}),Z=e(22913);const F=$.Z;F.Group=j,F.Search=T,F.TextArea=Z.Z,F.Password=K;var he=F},66330:function(X,h,e){var t=e(67294),v=e(93967),C=e.n(v),P=e(92419),S=e(81643),w=e(53124),U=e(20136),j=function(s,l){var r={};for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&l.indexOf(u)<0&&(r[u]=s[u]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,u=Object.getOwnPropertySymbols(s);a<u.length;a++)l.indexOf(u[a])<0&&Object.prototype.propertyIsEnumerable.call(s,u[a])&&(r[u[a]]=s[u[a]]);return r};const $=(s,l,r)=>!l&&!r?null:t.createElement(t.Fragment,null,l&&t.createElement("div",{className:`${s}-title`},(0,S.Z)(l)),t.createElement("div",{className:`${s}-inner-content`},(0,S.Z)(r))),V=s=>{const{hashId:l,prefixCls:r,className:u,style:a,placement:m="top",title:A,content:R,children:B}=s;return t.createElement("div",{className:C()(l,r,`${r}-pure`,`${r}-placement-${m}`,u),style:a},t.createElement("div",{className:`${r}-arrow`}),t.createElement(P.G,Object.assign({},s,{className:l,prefixCls:r}),B||$(r,A,R)))},p=s=>{const{prefixCls:l,className:r}=s,u=j(s,["prefixCls","className"]),{getPrefixCls:a}=t.useContext(w.E_),m=a("popover",l),[A,R,B]=(0,U.Z)(m);return A(t.createElement(V,Object.assign({},u,{prefixCls:m,hashId:R,className:C()(r,B)})))};h.ZP=p},55241:function(X,h,e){var t=e(67294),v=e(93967),C=e.n(v),P=e(81643),S=e(33603),w=e(53124),U=e(83062),j=e(66330),$=e(20136),V=function(l,r){var u={};for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&r.indexOf(a)<0&&(u[a]=l[a]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,a=Object.getOwnPropertySymbols(l);m<a.length;m++)r.indexOf(a[m])<0&&Object.prototype.propertyIsEnumerable.call(l,a[m])&&(u[a[m]]=l[a[m]]);return u};const p=l=>{let{title:r,content:u,prefixCls:a}=l;return t.createElement(t.Fragment,null,r&&t.createElement("div",{className:`${a}-title`},(0,P.Z)(r)),t.createElement("div",{className:`${a}-inner-content`},(0,P.Z)(u)))},s=t.forwardRef((l,r)=>{const{prefixCls:u,title:a,content:m,overlayClassName:A,placement:R="top",trigger:B="hover",mouseEnterDelay:G=.1,mouseLeaveDelay:Y=.1,overlayStyle:K={}}=l,n=V(l,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:x}=t.useContext(w.E_),b=x("popover",u),[ve,pe,ge]=(0,$.Z)(b),J=x(),T=C()(A,pe,ge);return ve(t.createElement(U.Z,Object.assign({placement:R,trigger:B,mouseEnterDelay:G,mouseLeaveDelay:Y,overlayStyle:K},n,{prefixCls:b,overlayClassName:T,ref:r,overlay:a||m?t.createElement(p,{prefixCls:b,title:a,content:m}):null,transitionName:(0,S.m)(J,"zoom-big",n.transitionName),"data-popover-inject":!0})))});s._InternalPanelDoNotUseOrYouWillBeFired=j.ZP,h.Z=s},20136:function(X,h,e){var t=e(14747),v=e(50438),C=e(97414),P=e(8796),S=e(91945),w=e(45503),U=e(79511);const j=p=>{const{componentCls:s,popoverColor:l,titleMinWidth:r,fontWeightStrong:u,innerPadding:a,boxShadowSecondary:m,colorTextHeading:A,borderRadiusLG:R,zIndexPopup:B,titleMarginBottom:G,colorBgElevated:Y,popoverBg:K,titleBorderBottom:n,innerContentPadding:x,titlePadding:b}=p;return[{[s]:Object.assign(Object.assign({},(0,t.Wf)(p)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:B,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":Y,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${s}-content`]:{position:"relative"},[`${s}-inner`]:{backgroundColor:K,backgroundClip:"padding-box",borderRadius:R,boxShadow:m,padding:a},[`${s}-title`]:{minWidth:r,marginBottom:G,color:A,fontWeight:u,borderBottom:n,padding:b},[`${s}-inner-content`]:{color:l,padding:x}})},(0,C.ZP)(p,"var(--antd-arrow-background-color)"),{[`${s}-pure`]:{position:"relative",maxWidth:"none",margin:p.sizePopupArrow,display:"inline-block",[`${s}-content`]:{display:"inline-block"}}}]},$=p=>{const{componentCls:s}=p;return{[s]:P.i.map(l=>{const r=p[`${l}6`];return{[`&${s}-${l}`]:{"--antd-arrow-background-color":r,[`${s}-inner`]:{backgroundColor:r},[`${s}-arrow`]:{background:"transparent"}}}})}},V=p=>{const{lineWidth:s,controlHeight:l,fontHeight:r,padding:u,wireframe:a,zIndexPopupBase:m,borderRadiusLG:A,marginXS:R,lineType:B,colorSplit:G,paddingSM:Y}=p,K=l-r,n=K/2,x=K/2-s,b=u;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:m+30},(0,U.w)(p)),(0,C.wZ)({contentRadius:A,limitVerticalRadius:!0})),{innerPadding:a?0:12,titleMarginBottom:a?0:R,titlePadding:a?`${n}px ${b}px ${x}px`:0,titleBorderBottom:a?`${s}px ${B} ${G}`:"none",innerContentPadding:a?`${Y}px ${b}px`:0})};h.Z=(0,S.I$)("Popover",p=>{const{colorBgElevated:s,colorText:l}=p,r=(0,w.TS)(p,{popoverBg:s,popoverColor:l});return[j(r),$(r),(0,v._y)(r,"zoom-big")]},V,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})},1208:function(X,h,e){var t=e(87462),v=e(67294),C=e(5717),P=e(93771),S=function(U,j){return v.createElement(P.Z,(0,t.Z)({},U,{ref:j,icon:C.Z}))};h.Z=v.forwardRef(S)}}]);
