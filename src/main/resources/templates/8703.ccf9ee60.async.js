"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8703],{38703:function(at,pe,v){v.d(pe,{Z:function(){return ot}});var s=v(67294),me=v(76278),ve=v(64894),he=v(17012),Ce=v(62208),ye=v(93967),T=v.n(ye),Se=v(98423),be=v(53124),te=v(87462),X=v(1413),re=v(91),oe={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},ne=function(){var t=(0,s.useRef)([]),r=(0,s.useRef)(null);return(0,s.useEffect)(function(){var o=Date.now(),n=!1;t.current.forEach(function(l){if(l){n=!0;var i=l.style;i.transitionDuration=".3s, .3s, .3s, .06s",r.current&&o-r.current<100&&(i.transitionDuration="0s, 0s")}}),n&&(r.current=Date.now())}),t.current},ke=["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"],$e=function(t){var r=(0,X.Z)((0,X.Z)({},oe),t),o=r.className,n=r.percent,l=r.prefixCls,i=r.strokeColor,a=r.strokeLinecap,c=r.strokeWidth,u=r.style,d=r.trailColor,g=r.trailWidth,h=r.transition,y=(0,re.Z)(r,ke);delete y.gapPosition;var C=Array.isArray(n)?n:[n],p=Array.isArray(i)?i:[i],f=ne(),k=c/2,S=100-c/2,b="M ".concat(a==="round"?k:0,",").concat(k,`
         L `).concat(a==="round"?S:100,",").concat(k),m="0 0 100 ".concat(c),E=0;return s.createElement("svg",(0,te.Z)({className:T()("".concat(l,"-line"),o),viewBox:m,preserveAspectRatio:"none",style:u},y),s.createElement("path",{className:"".concat(l,"-line-trail"),d:b,strokeLinecap:a,stroke:d,strokeWidth:g||c,fillOpacity:"0"}),C.map(function(O,L){var $=1;switch(a){case"round":$=1-c/100;break;case"square":$=1-c/2/100;break;default:$=1;break}var N={strokeDasharray:"".concat(O*$,"px, 100px"),strokeDashoffset:"-".concat(E,"px"),transition:h||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},I=p[L]||p[p.length-1];return E+=O,s.createElement("path",{key:L,className:"".concat(l,"-line-path"),d:b,strokeLinecap:a,stroke:I,strokeWidth:c,fillOpacity:"0",ref:function(A){f[L]=A},style:N})}))},xe=$e,R=v(71002),Ee=v(97685),Pe=v(98924),se=0,Oe=(0,Pe.Z)();function Le(){var e;return Oe?(e=se,se+=1):e="TEST_OR_SSR",e}var Ie=function(e){var t=s.useState(),r=(0,Ee.Z)(t,2),o=r[0],n=r[1];return s.useEffect(function(){n("rc_progress_".concat(Le()))},[]),e||o},ie=function(t){var r=t.bg,o=t.children;return s.createElement("div",{style:{width:"100%",height:"100%",background:r}},o)};function ae(e,t){return Object.keys(e).map(function(r){var o=parseFloat(r),n="".concat(Math.floor(o*t),"%");return"".concat(e[r]," ").concat(n)})}var We=s.forwardRef(function(e,t){var r=e.prefixCls,o=e.color,n=e.gradientId,l=e.radius,i=e.style,a=e.ptg,c=e.strokeLinecap,u=e.strokeWidth,d=e.size,g=e.gapDegree,h=o&&(0,R.Z)(o)==="object",y=h?"#FFF":void 0,C=d/2,p=s.createElement("circle",{className:"".concat(r,"-circle-path"),r:l,cx:C,cy:C,stroke:y,strokeLinecap:c,strokeWidth:u,opacity:a===0?0:1,style:i,ref:t});if(!h)return p;var f="".concat(n,"-conic"),k=g?"".concat(180+g/2,"deg"):"0deg",S=ae(o,(360-g)/360),b=ae(o,1),m="conic-gradient(from ".concat(k,", ").concat(S.join(", "),")"),E="linear-gradient(to ".concat(g?"bottom":"top",", ").concat(b.join(", "),")");return s.createElement(s.Fragment,null,s.createElement("mask",{id:f},p),s.createElement("foreignObject",{x:0,y:0,width:d,height:d,mask:"url(#".concat(f,")")},s.createElement(ie,{bg:E},s.createElement(ie,{bg:m}))))}),De=We,F=100,Q=function(t,r,o,n,l,i,a,c,u,d){var g=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,h=o/100*360*((360-i)/360),y=i===0?0:{bottom:0,top:180,left:90,right:-90}[a],C=(100-n)/100*r;u==="round"&&n!==100&&(C+=d/2,C>=r&&(C=r-.01));var p=F/2;return{stroke:typeof c=="string"?c:void 0,strokeDasharray:"".concat(r,"px ").concat(t),strokeDashoffset:C+g,transform:"rotate(".concat(l+h+y,"deg)"),transformOrigin:"".concat(p,"px ").concat(p,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},Ne=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function ce(e){var t=e!=null?e:[];return Array.isArray(t)?t:[t]}var je=function(t){var r=(0,X.Z)((0,X.Z)({},oe),t),o=r.id,n=r.prefixCls,l=r.steps,i=r.strokeWidth,a=r.trailWidth,c=r.gapDegree,u=c===void 0?0:c,d=r.gapPosition,g=r.trailColor,h=r.strokeLinecap,y=r.style,C=r.className,p=r.strokeColor,f=r.percent,k=(0,re.Z)(r,Ne),S=F/2,b=Ie(o),m="".concat(b,"-gradient"),E=S-i/2,O=Math.PI*2*E,L=u>0?90+u/2:-90,$=O*((360-u)/360),N=(0,R.Z)(l)==="object"?l:{count:l,space:2},I=N.count,j=N.space,A=ce(f),P=ce(p),x=P.find(function(V){return V&&(0,R.Z)(V)==="object"}),D=x&&(0,R.Z)(x)==="object",w=D?"butt":h,q=Q(O,$,0,100,L,u,d,g,w,i),fe=ne(),nt=function(){var K=0;return A.map(function(M,Z){var _=P[Z]||P[P.length-1],B=Q(O,$,K,M,L,u,d,_,w,i);return K+=M,s.createElement(De,{key:Z,color:_,ptg:M,radius:E,prefixCls:n,gradientId:m,style:B,strokeLinecap:w,strokeWidth:i,gapDegree:u,ref:function(ee){fe[Z]=ee},size:F})}).reverse()},st=function(){var K=Math.round(I*(A[0]/100)),M=100/I,Z=0;return new Array(I).fill(null).map(function(_,B){var U=B<=K-1?P[0]:g,ee=U&&(0,R.Z)(U)==="object"?"url(#".concat(m,")"):void 0,ge=Q(O,$,Z,M,L,u,d,U,"butt",i,j);return Z+=($-ge.strokeDashoffset+j)*100/$,s.createElement("circle",{key:B,className:"".concat(n,"-circle-path"),r:E,cx:S,cy:S,stroke:ee,strokeWidth:i,opacity:1,style:ge,ref:function(it){fe[B]=it}})})};return s.createElement("svg",(0,te.Z)({className:T()("".concat(n,"-circle"),C),viewBox:"0 0 ".concat(F," ").concat(F),style:y,id:o,role:"presentation"},k),!I&&s.createElement("circle",{className:"".concat(n,"-circle-trail"),r:E,cx:S,cy:S,stroke:g,strokeLinecap:w,strokeWidth:a||i,style:q}),I?st():nt())},le=je,ct={Line:xe,Circle:le},we=v(83062),Y=v(78589);function W(e){return!e||e<0?0:e>100?100:e}function z(e){let{success:t,successPercent:r}=e,o=r;return t&&"progress"in t&&(o=t.progress),t&&"percent"in t&&(o=t.percent),o}const Ae=e=>{let{percent:t,success:r,successPercent:o}=e;const n=W(z({success:r,successPercent:o}));return[n,W(W(t)-n)]},Ze=e=>{let{success:t={},strokeColor:r}=e;const{strokeColor:o}=t;return[o||Y.ez.green,r||null]},G=(e,t,r)=>{var o,n,l,i;let a=-1,c=-1;if(t==="step"){const u=r.steps,d=r.strokeWidth;typeof e=="string"||typeof e=="undefined"?(a=e==="small"?2:14,c=d!=null?d:8):typeof e=="number"?[a,c]=[e,e]:[a=14,c=8]=e,a*=u}else if(t==="line"){const u=r==null?void 0:r.strokeWidth;typeof e=="string"||typeof e=="undefined"?c=u||(e==="small"?6:8):typeof e=="number"?[a,c]=[e,e]:[a=-1,c=8]=e}else(t==="circle"||t==="dashboard")&&(typeof e=="string"||typeof e=="undefined"?[a,c]=e==="small"?[60,60]:[120,120]:typeof e=="number"?[a,c]=[e,e]:(a=(n=(o=e[0])!==null&&o!==void 0?o:e[1])!==null&&n!==void 0?n:120,c=(i=(l=e[0])!==null&&l!==void 0?l:e[1])!==null&&i!==void 0?i:120));return[a,c]},Te=3,Re=e=>Te/e*100;var Fe=e=>{const{prefixCls:t,trailColor:r=null,strokeLinecap:o="round",gapPosition:n,gapDegree:l,width:i=120,type:a,children:c,success:u,size:d=i}=e,[g,h]=G(d,"circle");let{strokeWidth:y}=e;y===void 0&&(y=Math.max(Re(g),6));const C={width:g,height:h,fontSize:g*.15+6},p=s.useMemo(()=>{if(l||l===0)return l;if(a==="dashboard")return 75},[l,a]),f=n||a==="dashboard"&&"bottom"||void 0,k=Object.prototype.toString.call(e.strokeColor)==="[object Object]",S=Ze({success:u,strokeColor:e.strokeColor}),b=T()(`${t}-inner`,{[`${t}-circle-gradient`]:k}),m=s.createElement(le,{percent:Ae(e),strokeWidth:y,trailWidth:y,strokeColor:S,strokeLinecap:o,trailColor:r,prefixCls:t,gapDegree:p,gapPosition:f});return s.createElement("div",{className:b,style:C},g<=20?s.createElement(we.Z,{title:c},s.createElement("span",null,m)):s.createElement(s.Fragment,null,m,c))},J=v(54548),Me=v(14747),Be=v(91945),Xe=v(45503);const H="--progress-line-stroke-color",de="--progress-percent",ue=e=>{const t=e?"100%":"-100%";return new J.E4(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},ze=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:Object.assign(Object.assign({},(0,Me.Wf)(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize,marginInlineEnd:e.marginXS,marginBottom:e.marginXS},[`${t}-outer`]:{display:"inline-block",width:"100%"},[`&${t}-show-info`]:{[`${t}-outer`]:{marginInlineEnd:`calc(-2em - ${(0,J.bf)(e.marginXS)})`,paddingInlineEnd:`calc(2em + ${(0,J.bf)(e.paddingXS)})`}},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",background:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-bg`]:{overflow:"hidden","&::after":{content:'""',background:{_multi_value_:!0,value:["inherit",`var(${H})`]},height:"100%",width:`calc(1 / var(${de}) * 100%)`,display:"block"}},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",width:"2em",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[r]:{fontSize:e.fontSize}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:ue(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:ue(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},Ge=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[r]:{fontSize:e.circleIconFontSize}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},He=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}},Ve=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]:{fontSize:e.fontSizeSM}}}},Ke=e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em",circleIconFontSize:`${e.fontSize/e.fontSizeSM}em`});var Ue=(0,Be.I$)("Progress",e=>{const t=e.calc(e.marginXXS).div(2).equal(),r=(0,Xe.TS)(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[ze(r),Ge(r),He(r),Ve(r)]},Ke),Qe=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const Ye=e=>{let t=[];return Object.keys(e).forEach(r=>{const o=parseFloat(r.replace(/%/g,""));isNaN(o)||t.push({key:o,value:e[r]})}),t=t.sort((r,o)=>r.key-o.key),t.map(r=>{let{key:o,value:n}=r;return`${n} ${o}%`}).join(", ")},Je=(e,t)=>{const{from:r=Y.ez.blue,to:o=Y.ez.blue,direction:n=t==="rtl"?"to left":"to right"}=e,l=Qe(e,["from","to","direction"]);if(Object.keys(l).length!==0){const a=Ye(l),c=`linear-gradient(${n}, ${a})`;return{background:c,[H]:c}}const i=`linear-gradient(${n}, ${r}, ${o})`;return{background:i,[H]:i}};var qe=e=>{const{prefixCls:t,direction:r,percent:o,size:n,strokeWidth:l,strokeColor:i,strokeLinecap:a="round",children:c,trailColor:u=null,success:d}=e,g=i&&typeof i!="string"?Je(i,r):{[H]:i,background:i},h=a==="square"||a==="butt"?0:void 0,y=n!=null?n:[-1,l||(n==="small"?6:8)],[C,p]=G(y,"line",{strokeWidth:l}),f={backgroundColor:u||void 0,borderRadius:h},k=Object.assign(Object.assign({width:`${W(o)}%`,height:p,borderRadius:h},g),{[de]:W(o)/100}),S=z(e),b={width:`${W(S)}%`,height:p,borderRadius:h,backgroundColor:d==null?void 0:d.strokeColor},m={width:C<0?"100%":C,height:p};return s.createElement(s.Fragment,null,s.createElement("div",{className:`${t}-outer`,style:m},s.createElement("div",{className:`${t}-inner`,style:f},s.createElement("div",{className:`${t}-bg`,style:k}),S!==void 0?s.createElement("div",{className:`${t}-success-bg`,style:b}):null)),c)},_e=e=>{const{size:t,steps:r,percent:o=0,strokeWidth:n=8,strokeColor:l,trailColor:i=null,prefixCls:a,children:c}=e,u=Math.round(r*(o/100)),d=t==="small"?2:14,g=t!=null?t:[d,n],[h,y]=G(g,"step",{steps:r,strokeWidth:n}),C=h/r,p=new Array(r);for(let f=0;f<r;f++){const k=Array.isArray(l)?l[f]:l;p[f]=s.createElement("div",{key:f,className:T()(`${a}-steps-item`,{[`${a}-steps-item-active`]:f<=u-1}),style:{backgroundColor:f<=u-1?k:i,width:C,height:y}})}return s.createElement("div",{className:`${a}-steps-outer`},p,c)},et=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const ft=null,tt=["normal","exception","active","success"];var rt=s.forwardRef((e,t)=>{const{prefixCls:r,className:o,rootClassName:n,steps:l,strokeColor:i,percent:a=0,size:c="default",showInfo:u=!0,type:d="line",status:g,format:h,style:y}=e,C=et(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style"]),p=s.useMemo(()=>{var P,x;const D=z(e);return parseInt(D!==void 0?(P=D!=null?D:0)===null||P===void 0?void 0:P.toString():(x=a!=null?a:0)===null||x===void 0?void 0:x.toString(),10)},[a,e.success,e.successPercent]),f=s.useMemo(()=>!tt.includes(g)&&p>=100?"success":g||"normal",[g,p]),{getPrefixCls:k,direction:S,progress:b}=s.useContext(be.E_),m=k("progress",r),[E,O,L]=Ue(m),$=s.useMemo(()=>{if(!u)return null;const P=z(e);let x;const D=h||(q=>`${q}%`),w=d==="line";return h||f!=="exception"&&f!=="success"?x=D(W(a),W(P)):f==="exception"?x=w?s.createElement(he.Z,null):s.createElement(Ce.Z,null):f==="success"&&(x=w?s.createElement(me.Z,null):s.createElement(ve.Z,null)),s.createElement("span",{className:`${m}-text`,title:typeof x=="string"?x:void 0},x)},[u,a,p,f,d,m,h]),N=Array.isArray(i)?i[0]:i,I=typeof i=="string"||Array.isArray(i)?i:void 0;let j;d==="line"?j=l?s.createElement(_e,Object.assign({},e,{strokeColor:I,prefixCls:m,steps:l}),$):s.createElement(qe,Object.assign({},e,{strokeColor:N,prefixCls:m,direction:S}),$):(d==="circle"||d==="dashboard")&&(j=s.createElement(Fe,Object.assign({},e,{strokeColor:N,prefixCls:m,progressStatus:f}),$));const A=T()(m,`${m}-status-${f}`,`${m}-${d==="dashboard"&&"circle"||l&&"steps"||d}`,{[`${m}-inline-circle`]:d==="circle"&&G(c,"circle")[0]<=20,[`${m}-show-info`]:u,[`${m}-${c}`]:typeof c=="string",[`${m}-rtl`]:S==="rtl"},b==null?void 0:b.className,o,n,O,L);return E(s.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},b==null?void 0:b.style),y),className:A,role:"progressbar","aria-valuenow":p},(0,Se.Z)(C,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),j))}),ot=rt}}]);
