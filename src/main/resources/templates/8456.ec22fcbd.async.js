"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8456],{47389:function(Oe,q,n){var o=n(1413),E=n(67294),I=n(27363),$=n(91146),i=function(k,Q){return E.createElement($.Z,(0,o.Z)((0,o.Z)({},k),{},{ref:Q,icon:I.Z}))};i.displayName="EditOutlined",q.Z=E.forwardRef(i)},51042:function(Oe,q,n){var o=n(1413),E=n(67294),I=n(42110),$=n(91146),i=function(k,Q){return E.createElement($.Z,(0,o.Z)((0,o.Z)({},k),{},{ref:Q,icon:I.Z}))};i.displayName="PlusOutlined",q.Z=E.forwardRef(i)},91595:function(Oe,q,n){n.d(q,{vY:function(){return rt}});var o=n(74902),E=n(74165),I=n(15861),$=n(91),i=n(1413),Z=n(67294),k=n(89503),Q=n(91146),Y=function(t,r){return Z.createElement(Q.Z,(0,i.Z)((0,i.Z)({},t),{},{ref:r,icon:k.Z}))};Y.displayName="CloseOutlined";var K=Z.forwardRef(Y),le=n(32857),ie=function(t,r){return Z.createElement(Q.Z,(0,i.Z)((0,i.Z)({},t),{},{ref:r,icon:le.Z}))};ie.displayName="CheckOutlined";var H=Z.forwardRef(ie),A=n(47389),W=n(952),B=n(54919),f=n(99559),de=n(75302),h=n(4393),x=n(96074),N=n(78957),e=n(85893),fe=function(t){var r=t.padding;return(0,e.jsx)("div",{style:{padding:r||"0 24px"},children:(0,e.jsx)(x.Z,{style:{margin:0}})})},ce={xs:2,sm:2,md:4,lg:4,xl:6,xxl:6},ue=function(t){var r=t.size,s=t.active,v=(0,Z.useMemo)(function(){return{lg:!0,md:!0,sm:!1,xl:!1,xs:!1,xxl:!1}},[]),p=de.ZP.useBreakpoint()||v,S=Object.keys(p).filter(function(M){return p[M]===!0})[0]||"md",j=r===void 0?ce[S]||6:r,z=function(y){return y===0?0:j>2?42:16};return(0,e.jsx)(h.Z,{bordered:!1,style:{marginBlockEnd:16},children:(0,e.jsx)("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(j).fill(null).map(function(M,y){return(0,e.jsxs)("div",{style:{borderInlineStart:j>2&&y===1?"1px solid rgba(0,0,0,0.06)":void 0,paddingInlineStart:z(y),flex:1,marginInlineEnd:y===0?16:0},children:[(0,e.jsx)(f.Z,{active:s,paragraph:!1,title:{width:100,style:{marginBlockStart:0}}}),(0,e.jsx)(f.Z.Button,{active:s,style:{height:48}})]},y)})})})},oe=function(t){var r=t.active;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(h.Z,{bordered:!1,style:{borderRadius:0},bodyStyle:{padding:24},children:(0,e.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("div",{style:{maxWidth:"100%",flex:1},children:(0,e.jsx)(f.Z,{active:r,title:{width:100,style:{marginBlockStart:0}},paragraph:{rows:1,style:{margin:0}}})}),(0,e.jsx)(f.Z.Button,{active:r,size:"small",style:{width:165,marginBlockStart:12}})]})}),(0,e.jsx)(fe,{})]})},pe=function(t){var r=t.size,s=t.active,v=s===void 0?!0:s,p=t.actionButton;return(0,e.jsxs)(h.Z,{bordered:!1,bodyStyle:{padding:0},children:[new Array(r).fill(null).map(function(S,j){return(0,e.jsx)(oe,{active:!!v},j)}),p!==!1&&(0,e.jsx)(h.Z,{bordered:!1,style:{borderStartEndRadius:0,borderTopLeftRadius:0},bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(f.Z.Button,{style:{width:102},active:v,size:"small"})})]})},w=function(t){var r=t.active;return(0,e.jsxs)("div",{style:{marginBlockEnd:16},children:[(0,e.jsx)(f.Z,{paragraph:!1,title:{width:185}}),(0,e.jsx)(f.Z.Button,{active:r,size:"small"})]})},ee=function(t){var r=t.active;return(0,e.jsx)(h.Z,{bordered:!1,style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},bodyStyle:{paddingBlockEnd:8},children:(0,e.jsxs)(N.Z,{style:{width:"100%",justifyContent:"space-between"},children:[(0,e.jsx)(f.Z.Button,{active:r,style:{width:200},size:"small"}),(0,e.jsxs)(N.Z,{children:[(0,e.jsx)(f.Z.Button,{active:r,size:"small",style:{width:120}}),(0,e.jsx)(f.Z.Button,{active:r,size:"small",style:{width:80}})]})]})})},Ue=function(t){var r=t.active,s=r===void 0?!0:r,v=t.statistic,p=t.actionButton,S=t.toolbar,j=t.pageHeader,z=t.list,M=z===void 0?5:z;return(0,e.jsxs)("div",{style:{width:"100%"},children:[j!==!1&&(0,e.jsx)(w,{active:s}),v!==!1&&(0,e.jsx)(ue,{size:v,active:s}),(S!==!1||M!==!1)&&(0,e.jsxs)(h.Z,{bordered:!1,bodyStyle:{padding:0},children:[S!==!1&&(0,e.jsx)(ee,{active:s}),M!==!1&&(0,e.jsx)(pe,{size:M,active:s,actionButton:p})]})]})},He=Ue,Fe={xs:1,sm:2,md:3,lg:3,xl:3,xxl:4},Ge=function(t){var r=t.active;return(0,e.jsxs)("div",{style:{marginBlockStart:32},children:[(0,e.jsx)(f.Z.Button,{active:r,size:"small",style:{width:100,marginBlockEnd:16}}),(0,e.jsxs)("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:[(0,e.jsxs)("div",{style:{flex:1,marginInlineEnd:24,maxWidth:300},children:[(0,e.jsx)(f.Z,{active:r,paragraph:!1,title:{style:{marginBlockStart:0}}}),(0,e.jsx)(f.Z,{active:r,paragraph:!1,title:{style:{marginBlockStart:8}}}),(0,e.jsx)(f.Z,{active:r,paragraph:!1,title:{style:{marginBlockStart:8}}})]}),(0,e.jsx)("div",{style:{flex:1,alignItems:"center",justifyContent:"center"},children:(0,e.jsxs)("div",{style:{maxWidth:300,margin:"auto"},children:[(0,e.jsx)(f.Z,{active:r,paragraph:!1,title:{style:{marginBlockStart:0}}}),(0,e.jsx)(f.Z,{active:r,paragraph:!1,title:{style:{marginBlockStart:8}}})]})})]})]})},Ve=function(t){var r=t.size,s=t.active,v=(0,Z.useMemo)(function(){return{lg:!0,md:!0,sm:!1,xl:!1,xs:!1,xxl:!1}},[]),p=de.ZP.useBreakpoint()||v,S=Object.keys(p).filter(function(z){return p[z]===!0})[0]||"md",j=r===void 0?Fe[S]||3:r;return(0,e.jsx)("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(j).fill(null).map(function(z,M){return(0,e.jsxs)("div",{style:{flex:1,paddingInlineStart:M===0?0:24,paddingInlineEnd:M===j-1?0:24},children:[(0,e.jsx)(f.Z,{active:s,paragraph:!1,title:{style:{marginBlockStart:0}}}),(0,e.jsx)(f.Z,{active:s,paragraph:!1,title:{style:{marginBlockStart:8}}}),(0,e.jsx)(f.Z,{active:s,paragraph:!1,title:{style:{marginBlockStart:8}}})]},M)})})},Ae=function(t){var r=t.active,s=t.header,v=s===void 0?!1:s,p=(0,Z.useMemo)(function(){return{lg:!0,md:!0,sm:!1,xl:!1,xs:!1,xxl:!1}},[]),S=de.ZP.useBreakpoint()||p,j=Object.keys(S).filter(function(M){return S[M]===!0})[0]||"md",z=Fe[j]||3;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{display:"flex",background:v?"rgba(0,0,0,0.02)":"none",padding:"24px 8px"},children:[new Array(z).fill(null).map(function(M,y){return(0,e.jsx)("div",{style:{flex:1,paddingInlineStart:v&&y===0?0:20,paddingInlineEnd:32},children:(0,e.jsx)(f.Z,{active:r,paragraph:!1,title:{style:{margin:0,height:24,width:v?"75px":"100%"}}})},y)}),(0,e.jsx)("div",{style:{flex:3,paddingInlineStart:32},children:(0,e.jsx)(f.Z,{active:r,paragraph:!1,title:{style:{margin:0,height:24,width:v?"75px":"100%"}}})})]}),(0,e.jsx)(fe,{padding:"0px 0px"})]})},Xe=function(t){var r=t.active,s=t.size,v=s===void 0?4:s;return(0,e.jsxs)(h.Z,{bordered:!1,children:[(0,e.jsx)(f.Z.Button,{active:r,size:"small",style:{width:100,marginBlockEnd:16}}),(0,e.jsx)(Ae,{header:!0,active:r}),new Array(v).fill(null).map(function(p,S){return(0,e.jsx)(Ae,{active:r},S)}),(0,e.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",paddingBlockStart:16},children:(0,e.jsx)(f.Z,{active:r,paragraph:!1,title:{style:{margin:0,height:32,float:"right",maxWidth:"630px"}}})})]})},We=function(t){var r=t.active;return(0,e.jsxs)(h.Z,{bordered:!1,style:{borderStartEndRadius:0,borderTopLeftRadius:0},children:[(0,e.jsx)(f.Z.Button,{active:r,size:"small",style:{width:100,marginBlockEnd:16}}),(0,e.jsx)(Ve,{active:r}),(0,e.jsx)(Ge,{active:r})]})},ke=function(t){var r=t.active,s=r===void 0?!0:r,v=t.pageHeader,p=t.list;return(0,e.jsxs)("div",{style:{width:"100%"},children:[v!==!1&&(0,e.jsx)(w,{active:s}),(0,e.jsx)(We,{active:s}),p!==!1&&(0,e.jsx)(fe,{}),p!==!1&&(0,e.jsx)(Xe,{active:s,size:p})]})},a=ke,l=function(t){var r=t.active,s=r===void 0?!0:r,v=t.pageHeader;return(0,e.jsxs)("div",{style:{width:"100%"},children:[v!==!1&&(0,e.jsx)(w,{active:s}),(0,e.jsx)(h.Z,{children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:128},children:[(0,e.jsx)(f.Z.Avatar,{size:64,style:{marginBlockEnd:32}}),(0,e.jsx)(f.Z.Button,{active:s,style:{width:214,marginBlockEnd:8}}),(0,e.jsx)(f.Z.Button,{active:s,style:{width:328},size:"small"}),(0,e.jsxs)(N.Z,{style:{marginBlockStart:24},children:[(0,e.jsx)(f.Z.Button,{active:s,style:{width:116}}),(0,e.jsx)(f.Z.Button,{active:s,style:{width:116}})]})]})})]})},g=l,u=["type"],m=function(t){var r=t.type,s=r===void 0?"list":r,v=(0,$.Z)(t,u);return s==="result"?(0,e.jsx)(g,(0,i.Z)({},v)):s==="descriptions"?(0,e.jsx)(a,(0,i.Z)({},v)):(0,e.jsx)(He,(0,i.Z)({},v))},R=m,C=n(2026),ve=n(90081),ge=n(1977),ae=n(77398),J=n(86333),me=n(53914),xe=n(97685),ye=n(10915),De=n(2453),Te=n(21770),Pe=n(51544),Me=function(t){return(De.ZP.warn||De.ZP.warning)(t)};function Ie(c){var t=c.data,r=c.row;return(0,i.Z)((0,i.Z)({},t),r)}function he(c){var t=c.type||"single",r=(0,ye.YB)(),s=(0,Te.Z)([],{value:c.editableKeys,onChange:c.onChange?function(D){var T;c==null||(T=c.onChange)===null||T===void 0||T.call(c,D,c.dataSource)}:void 0}),v=(0,xe.Z)(s,2),p=v[0],S=v[1],j=(0,Z.useMemo)(function(){var D=t==="single"?p==null?void 0:p.slice(0,1):p;return new Set(D)},[(p||[]).join(","),t]),z=(0,Z.useCallback)(function(D){return!!(p!=null&&p.includes((0,Pe.sN)(D)))},[(p||[]).join(",")]),M=function(T){return j.size>0&&t==="single"?(Me(c.onlyOneLineEditorAlertMessage||r.getMessage("editableTable.onlyOneLineEditor","\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C")),!1):(j.add((0,Pe.sN)(T)),S(Array.from(j)),!0)},y=function(T){return j.delete((0,Pe.sN)(T)),S(Array.from(j)),!0},U=function(){var D=(0,I.Z)((0,E.Z)().mark(function T(V,L,_,ne){var se,X;return(0,E.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,c==null||(se=c.onCancel)===null||se===void 0?void 0:se.call(c,V,L,_,ne);case 2:if(X=d.sent,X!==!1){d.next=5;break}return d.abrupt("return",!1);case 5:return d.abrupt("return",!0);case 6:case"end":return d.stop()}},T)}));return function(V,L,_,ne){return D.apply(this,arguments)}}(),te=function(){var D=(0,I.Z)((0,E.Z)().mark(function T(V,L,_){var ne,se,X;return(0,E.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,c==null||(ne=c.onSave)===null||ne===void 0?void 0:ne.call(c,V,L,_);case 2:if(se=d.sent,se!==!1){d.next=5;break}return d.abrupt("return",!1);case 5:return d.next=7,y(V);case 7:return X={data:c.dataSource,row:L,key:V,childrenColumnName:c.childrenColumnName||"children"},c.setDataSource(Ie(X)),d.abrupt("return",!0);case 10:case"end":return d.stop()}},T)}));return function(V,L,_){return D.apply(this,arguments)}}(),G=r.getMessage("editableTable.action.save","\u4FDD\u5B58"),Ee=r.getMessage("editableTable.action.delete","\u5220\u9664"),O=r.getMessage("editableTable.action.cancel","\u53D6\u6D88"),je=(0,Z.useCallback)(function(D,T){var V=(0,i.Z)({recordKey:D,cancelEditable:y,onCancel:U,onSave:te,editableKeys:p,setEditableRowKeys:S,saveText:G,cancelText:O,deleteText:Ee,deletePopconfirmMessage:"".concat(r.getMessage("deleteThisLine","\u5220\u9664\u6B64\u9879"),"?"),editorType:"Map"},T),L=(0,Pe.aX)(c.dataSource,V);return c.actionRender?c.actionRender(c.dataSource,V,{save:L.save,delete:L.delete,cancel:L.cancel}):[L.save,L.delete,L.cancel]},[p&&p.join(","),c.dataSource]);return{editableKeys:p,setEditableRowKeys:S,isEditable:z,actionRender:je,startEditable:M,cancelEditable:y}}var re=n(78164),Ce=n(67159),Se=n(26412),Qe=n(28459),Le=n(50344),Ye=n(88306),Je=function(t,r){var s=r||{},v=s.onRequestError,p=s.effects,S=s.manual,j=s.dataSource,z=s.defaultDataSource,M=s.onDataSourceChange,y=(0,Te.Z)(z,{value:j,onChange:M}),U=(0,xe.Z)(y,2),te=U[0],G=U[1],Ee=(0,Te.Z)(r==null?void 0:r.loading,{value:r==null?void 0:r.loading,onChange:r==null?void 0:r.onLoadingChange}),O=(0,xe.Z)(Ee,2),je=O[0],D=O[1],T=function(_){G(_),D(!1)},V=function(){var L=(0,I.Z)((0,E.Z)().mark(function _(){var ne,se,X;return(0,E.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!je){d.next=2;break}return d.abrupt("return");case 2:return D(!0),d.prev=3,d.next=6,t();case 6:if(d.t0=d.sent,d.t0){d.next=9;break}d.t0={};case 9:ne=d.t0,se=ne.data,X=ne.success,X!==!1&&T(se),d.next=23;break;case 15:if(d.prev=15,d.t1=d.catch(3),v!==void 0){d.next=21;break}throw new Error(d.t1);case 21:v(d.t1);case 22:D(!1);case 23:return d.prev=23,D(!1),d.finish(23);case 26:case"end":return d.stop()}},_,null,[[3,15,23,26]])}));return function(){return L.apply(this,arguments)}}();return(0,Z.useEffect)(function(){S||V()},[].concat((0,o.Z)(p||[]),[S])),{dataSource:te,setDataSource:G,loading:je,reload:function(){return V()}}},qe=Je,Ke=n(98082),et=["valueEnum","render","renderText","mode","plain","dataIndex","request","params","editable"],Be=["request","columns","params","dataSource","onDataSourceChange","formProps","editable","loading","onLoadingChange","actionRef","onRequestError","emptyText"],we=function(t,r){var s=t.dataIndex;if(s){var v=Array.isArray(s)?(0,Ye.Z)(r,s):r[s];if(v!==void 0||v!==null)return v}return t.children},nt=function(t){var r,s=t.valueEnum,v=t.action,p=t.index,S=t.text,j=t.entity,z=t.mode,M=t.render,y=t.editableUtils,U=t.valueType,te=t.plain,G=t.dataIndex,Ee=t.request,O=t.renderFormItem,je=t.params,D=t.emptyText,T=W.ZP.useFormInstance(),V=(r=Ke.Ow.useToken)===null||r===void 0?void 0:r.call(Ke.Ow),L=V.token,_={text:S,valueEnum:s,mode:z||"read",proFieldProps:{emptyText:D,render:M?function(X){return M==null?void 0:M(X,j,p,v,(0,i.Z)((0,i.Z)({},t),{},{type:"descriptions"}))}:void 0},ignoreFormItem:!0,valueType:U,request:Ee,params:je,plain:te};if(z==="read"||!z||U==="option"){var ne=(0,C.w)(t.fieldProps,void 0,(0,i.Z)((0,i.Z)({},t),{},{rowKey:G,isEditable:!1}));return(0,e.jsx)(B.Z,(0,i.Z)((0,i.Z)({name:G},_),{},{fieldProps:ne}))}var se=function(){var P,d=(0,C.w)(t.formItemProps,T,(0,i.Z)((0,i.Z)({},t),{},{rowKey:G,isEditable:!0})),Ze=(0,C.w)(t.fieldProps,T,(0,i.Z)((0,i.Z)({},t),{},{rowKey:G,isEditable:!0}));return(0,e.jsxs)("div",{style:{display:"flex",gap:L.marginXS,alignItems:"baseline"},children:[(0,e.jsx)(ve.U,(0,i.Z)((0,i.Z)({name:G},d),{},{style:(0,i.Z)({margin:0},(d==null?void 0:d.style)||{}),initialValue:S||(d==null?void 0:d.initialValue),children:(0,e.jsx)(B.Z,(0,i.Z)((0,i.Z)({},_),{},{proFieldProps:(0,i.Z)({},_.proFieldProps),renderFormItem:O?function(){return O==null?void 0:O((0,i.Z)((0,i.Z)({},t),{},{type:"descriptions"}),{isEditable:!0,recordKey:G,record:T.getFieldValue([G].flat(1)),defaultRender:function(){return(0,e.jsx)(B.Z,(0,i.Z)((0,i.Z)({},_),{},{fieldProps:Ze}))},type:"descriptions"},T)}:void 0,fieldProps:Ze}))})),(0,e.jsx)("div",{style:{display:"flex",maxHeight:L.controlHeight,alignItems:"center",gap:L.marginXS},children:y==null||(P=y.actionRender)===null||P===void 0?void 0:P.call(y,G||p,{cancelText:(0,e.jsx)(K,{}),saveText:(0,e.jsx)(H,{}),deleteText:!1})})]})};return(0,e.jsx)("div",{style:{marginTop:-5,marginBottom:-5,marginLeft:0,marginRight:0},children:se()})},lt=function(t,r,s,v,p){var S,j=[],z=(0,ge.n)(Ce.Z,"5.8.0")>=0,M=t==null||(S=t.map)===null||S===void 0?void 0:S.call(t,function(y,U){var te,G,Ee;if(Z.isValidElement(y))return z?{children:y}:y;var O=y,je=O.valueEnum,D=O.render,T=O.renderText,V=O.mode,L=O.plain,_=O.dataIndex,ne=O.request,se=O.params,X=O.editable,P=(0,$.Z)(O,et),d=(te=we(y,r))!==null&&te!==void 0?te:P.children,Ze=T?T(d,r,U,s):d,be=typeof P.title=="function"?P.title(y,"descriptions",null):P.title,b=typeof P.valueType=="function"?P.valueType(r||{},"descriptions"):P.valueType,F=v==null?void 0:v.isEditable(_||U),Re=V||F?"edit":"read",$e=v&&Re==="read"&&X!==!1&&(X==null?void 0:X(Ze,r,U))!==!1,ze=$e?N.Z:Z.Fragment,_e=Re==="edit"?Ze:(0,ae.X)(Ze,y,Ze),Ne=z&&b!=="option"?(0,i.Z)((0,i.Z)({},P),{},{key:P.key||((G=P.label)===null||G===void 0?void 0:G.toString())||U,label:(be||P.label||P.tooltip||P.tip)&&(0,e.jsx)(J.G,{label:be||P.label,tooltip:P.tooltip||P.tip,ellipsis:y.ellipsis}),children:(0,e.jsxs)(ze,{children:[(0,e.jsx)(nt,(0,i.Z)((0,i.Z)({},y),{},{dataIndex:y.dataIndex||U,mode:Re,text:_e,valueType:b,entity:r,index:U,emptyText:p,action:s,editableUtils:v})),$e&&(0,e.jsx)(A.Z,{onClick:function(){v==null||v.startEditable(_||U)}})]})}):(0,Z.createElement)(Se.Z.Item,(0,i.Z)((0,i.Z)({},P),{},{key:P.key||((Ee=P.label)===null||Ee===void 0?void 0:Ee.toString())||U,label:(be||P.label||P.tooltip||P.tip)&&(0,e.jsx)(J.G,{label:be||P.label,tooltip:P.tooltip||P.tip,ellipsis:y.ellipsis})}),(0,e.jsxs)(ze,{children:[(0,e.jsx)(nt,(0,i.Z)((0,i.Z)({},y),{},{dataIndex:y.dataIndex||U,mode:Re,text:_e,valueType:b,entity:r,index:U,action:s,editableUtils:v})),$e&&b!=="option"&&(0,e.jsx)(A.Z,{onClick:function(){v==null||v.startEditable(_||U)}})]}));return b==="option"?(j.push(Ne),null):Ne}).filter(function(y){return y});return{options:j!=null&&j.length?j:null,children:M}},at=function(t){return(0,e.jsx)(Se.Z.Item,(0,i.Z)((0,i.Z)({},t),{},{children:t.children}))};at.displayName="ProDescriptionsItem";var it=function(t){return t.children},rt=function(t){var r,s=t.request,v=t.columns,p=t.params,S=t.dataSource,j=t.onDataSourceChange,z=t.formProps,M=t.editable,y=t.loading,U=t.onLoadingChange,te=t.actionRef,G=t.onRequestError,Ee=t.emptyText,O=(0,$.Z)(t,Be),je=(0,Z.useContext)(Qe.ZP.ConfigContext),D=qe((0,I.Z)((0,E.Z)().mark(function Ze(){var be;return(0,E.Z)().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if(!s){F.next=6;break}return F.next=3,s(p||{});case 3:F.t0=F.sent,F.next=7;break;case 6:F.t0={data:{}};case 7:return be=F.t0,F.abrupt("return",be);case 9:case"end":return F.stop()}},Ze)})),{onRequestError:G,effects:[(0,me.ZP)(p)],manual:!s,dataSource:S,loading:y,onLoadingChange:U,onDataSourceChange:j}),T=he((0,i.Z)((0,i.Z)({},t.editable),{},{childrenColumnName:void 0,dataSource:D.dataSource,setDataSource:D.setDataSource}));if((0,Z.useEffect)(function(){te&&(te.current=(0,i.Z)({reload:D.reload},T))},[D,te,T]),D.loading||D.loading===void 0&&s)return(0,e.jsx)(R,{type:"descriptions",list:!1,pageHeader:!1});var V=function(){var be=(0,Le.Z)(t.children).filter(Boolean).map(function(b){if(!Z.isValidElement(b))return b;var F=b==null?void 0:b.props,Re=F.valueEnum,$e=F.valueType,ze=F.dataIndex,_e=F.ellipsis,Ne=F.copyable,tt=F.request;return!$e&&!Re&&!ze&&!tt&&!_e&&!Ne&&b.type.displayName!=="ProDescriptionsItem"?b:(0,i.Z)((0,i.Z)({},b==null?void 0:b.props),{},{entity:S})});return[].concat((0,o.Z)(v||[]),(0,o.Z)(be)).filter(function(b){return!b||b!=null&&b.valueType&&["index","indexBorder"].includes(b==null?void 0:b.valueType)?!1:!(b!=null&&b.hideInDescriptions)}).sort(function(b,F){return F.order||b.order?(F.order||0)-(b.order||0):(F.index||0)-(b.index||0)})},L=lt(V(),D.dataSource||{},(te==null?void 0:te.current)||D,M?T:void 0,t.emptyText),_=L.options,ne=L.children,se=M?W.ZP:it,X=null;(O.title||O.tooltip||O.tip)&&(X=(0,e.jsx)(J.G,{label:O.title,tooltip:O.tooltip||O.tip}));var P=je.getPrefixCls("pro-descriptions"),d=(0,ge.n)(Ce.Z,"5.8.0")>=0;return(0,e.jsx)(re.S,{children:(0,e.jsx)(se,(0,i.Z)((0,i.Z)({form:(r=t.editable)===null||r===void 0?void 0:r.form,component:!1,submitter:!1},z),{},{onFinish:void 0,children:(0,e.jsx)(Se.Z,(0,i.Z)((0,i.Z)({className:P},O),{},{contentStyle:{minWidth:0},extra:O.extra?(0,e.jsxs)(N.Z,{children:[_,O.extra]}):_,title:X,items:d?ne:void 0,children:d?null:ne}))}),"form")})};rt.Item=at;var ot=null},22452:function(Oe,q,n){var o=n(1413),E=n(91),I=n(67294),$=n(66758),i=n(54919),Z=n(85893),k=["fieldProps","proFieldProps"],Q="dateTime",Y=I.forwardRef(function(K,le){var ie=K.fieldProps,H=K.proFieldProps,A=(0,E.Z)(K,k),W=(0,I.useContext)($.Z);return(0,Z.jsx)(i.Z,(0,o.Z)({ref:le,fieldProps:(0,o.Z)({getPopupContainer:W.getPopupContainer},ie),valueType:Q,proFieldProps:H,filedConfig:{valueType:Q,customLightMode:!0}},A))});q.Z=Y},86615:function(Oe,q,n){var o=n(1413),E=n(91),I=n(22270),$=n(78045),i=n(67294),Z=n(90789),k=n(54919),Q=n(85893),Y=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],K=i.forwardRef(function(A,W){var B=A.fieldProps,f=A.options,de=A.radioType,h=A.layout,x=A.proFieldProps,N=A.valueEnum,e=(0,E.Z)(A,Y);return(0,Q.jsx)(k.Z,(0,o.Z)((0,o.Z)({valueType:de==="button"?"radioButton":"radio",ref:W,valueEnum:(0,I.h)(N,void 0)},e),{},{fieldProps:(0,o.Z)({options:f,layout:h},B),proFieldProps:x,filedConfig:{customLightMode:!0}}))}),le=i.forwardRef(function(A,W){var B=A.fieldProps,f=A.children;return(0,Q.jsx)($.ZP,(0,o.Z)((0,o.Z)({},B),{},{ref:W,children:f}))}),ie=(0,Z.G)(le,{valuePropName:"checked",ignoreWidth:!0}),H=ie;H.Group=K,H.Button=$.ZP.Button,H.displayName="ProFormComponent",q.Z=H},64317:function(Oe,q,n){var o=n(1413),E=n(91),I=n(22270),$=n(67294),i=n(66758),Z=n(54919),k=n(85893),Q=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],Y=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],K=function(B,f){var de=B.fieldProps,h=B.children,x=B.params,N=B.proFieldProps,e=B.mode,fe=B.valueEnum,ce=B.request,ue=B.showSearch,oe=B.options,pe=(0,E.Z)(B,Q),w=(0,$.useContext)(i.Z);return(0,k.jsx)(Z.Z,(0,o.Z)((0,o.Z)({valueEnum:(0,I.h)(fe),request:ce,params:x,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:oe,mode:e,showSearch:ue,getPopupContainer:w.getPopupContainer},de),ref:f,proFieldProps:N},pe),{},{children:h}))},le=$.forwardRef(function(W,B){var f=W.fieldProps,de=W.children,h=W.params,x=W.proFieldProps,N=W.mode,e=W.valueEnum,fe=W.request,ce=W.options,ue=(0,E.Z)(W,Y),oe=(0,o.Z)({options:ce,mode:N||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},f),pe=(0,$.useContext)(i.Z);return(0,k.jsx)(Z.Z,(0,o.Z)((0,o.Z)({valueEnum:(0,I.h)(e),request:fe,params:h,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({getPopupContainer:pe.getPopupContainer},oe),ref:B,proFieldProps:x},ue),{},{children:de}))}),ie=$.forwardRef(K),H=le,A=ie;A.SearchSelect=H,A.displayName="ProFormComponent",q.Z=A},5966:function(Oe,q,n){var o=n(97685),E=n(1413),I=n(91),$=n(21770),i=n(8232),Z=n(55241),k=n(97435),Q=n(67294),Y=n(54919),K=n(85893),le=["fieldProps","proFieldProps"],ie=["fieldProps","proFieldProps"],H="text",A=function(h){var x=h.fieldProps,N=h.proFieldProps,e=(0,I.Z)(h,le);return(0,K.jsx)(Y.Z,(0,E.Z)({valueType:H,fieldProps:x,filedConfig:{valueType:H},proFieldProps:N},e))},W=function(h){var x=(0,$.Z)(h.open||!1,{value:h.open,onChange:h.onOpenChange}),N=(0,o.Z)(x,2),e=N[0],fe=N[1];return(0,K.jsx)(i.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(ue){var oe,pe=ue.getFieldValue(h.name||[]);return(0,K.jsx)(Z.Z,(0,E.Z)((0,E.Z)({getPopupContainer:function(ee){return ee&&ee.parentNode?ee.parentNode:ee},onOpenChange:fe,content:(0,K.jsxs)("div",{style:{padding:"4px 0"},children:[(oe=h.statusRender)===null||oe===void 0?void 0:oe.call(h,pe),h.strengthText?(0,K.jsx)("div",{style:{marginTop:10},children:(0,K.jsx)("span",{children:h.strengthText})}):null]}),overlayStyle:{width:240},placement:"right"},h.popoverProps),{},{open:e,children:h.children}))}})},B=function(h){var x=h.fieldProps,N=h.proFieldProps,e=(0,I.Z)(h,ie),fe=(0,Q.useState)(!1),ce=(0,o.Z)(fe,2),ue=ce[0],oe=ce[1];return x!=null&&x.statusRender&&e.name?(0,K.jsx)(W,{name:e.name,statusRender:x==null?void 0:x.statusRender,popoverProps:x==null?void 0:x.popoverProps,strengthText:x==null?void 0:x.strengthText,open:ue,onOpenChange:oe,children:(0,K.jsx)(Y.Z,(0,E.Z)({valueType:"password",fieldProps:(0,E.Z)((0,E.Z)({},(0,k.Z)(x,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(w){var ee;x==null||(ee=x.onBlur)===null||ee===void 0||ee.call(x,w),oe(!1)},onClick:function(w){var ee;x==null||(ee=x.onClick)===null||ee===void 0||ee.call(x,w),oe(!0)}}),proFieldProps:N,filedConfig:{valueType:H}},e))}):(0,K.jsx)(Y.Z,(0,E.Z)({valueType:"password",fieldProps:x,proFieldProps:N,filedConfig:{valueType:H}},e))},f=A;f.Password=B,f.displayName="ProFormComponent",q.Z=f},90672:function(Oe,q,n){var o=n(1413),E=n(91),I=n(67294),$=n(54919),i=n(85893),Z=["fieldProps","proFieldProps"],k=function(Y,K){var le=Y.fieldProps,ie=Y.proFieldProps,H=(0,E.Z)(Y,Z);return(0,i.jsx)($.Z,(0,o.Z)({ref:K,valueType:"textarea",fieldProps:le,proFieldProps:ie},H))};q.Z=I.forwardRef(k)},26412:function(Oe,q,n){n.d(q,{Z:function(){return ke}});var o=n(67294),E=n(93967),I=n.n(E),$=n(74443),i=n(53124),Z=n(98675),k=n(25378),Y={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},le=o.createContext({}),ie=n(50344),H=function(a,l){var g={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&l.indexOf(u)<0&&(g[u]=a[u]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,u=Object.getOwnPropertySymbols(a);m<u.length;m++)l.indexOf(u[m])<0&&Object.prototype.propertyIsEnumerable.call(a,u[m])&&(g[u[m]]=a[u[m]]);return g};const A=a=>(0,ie.Z)(a).map(l=>Object.assign(Object.assign({},l==null?void 0:l.props),{key:l.key}));function W(a,l,g){const u=o.useMemo(()=>l||A(g),[l,g]);return o.useMemo(()=>u.map(R=>{var{span:C}=R,ve=H(R,["span"]);return Object.assign(Object.assign({},ve),{span:typeof C=="number"?C:(0,$.m9)(a,C)})}),[u,a])}function B(a,l,g){let u=a,m=!1;return(g===void 0||g>l)&&(u=Object.assign(Object.assign({},a),{span:l}),m=g!==void 0),[u,m]}function f(a,l){const g=[];let u=[],m=l,R=!1;return a.filter(C=>C).forEach((C,ve)=>{const ge=C==null?void 0:C.span,ae=ge||1;if(ve===a.length-1){const[J,me]=B(C,m,ge);R=R||me,u.push(J),g.push(u);return}if(ae<m)m-=ae,u.push(C);else{const[J,me]=B(C,m,ae);R=R||me,u.push(J),g.push(u),m=l,u=[]}}),[g,R]}var h=(a,l)=>{const[g,u]=(0,o.useMemo)(()=>f(l,a),[l,a]);return g},N=a=>{let{children:l}=a;return l};function e(a){return a!=null}var ce=a=>{const{itemPrefixCls:l,component:g,span:u,className:m,style:R,labelStyle:C,contentStyle:ve,bordered:ge,label:ae,content:J,colon:me,type:xe}=a,ye=g;return ge?o.createElement(ye,{className:I()({[`${l}-item-label`]:xe==="label",[`${l}-item-content`]:xe==="content"},m),style:R,colSpan:u},e(ae)&&o.createElement("span",{style:C},ae),e(J)&&o.createElement("span",{style:ve},J)):o.createElement(ye,{className:I()(`${l}-item`,m),style:R,colSpan:u},o.createElement("div",{className:`${l}-item-container`},(ae||ae===0)&&o.createElement("span",{className:I()(`${l}-item-label`,{[`${l}-item-no-colon`]:!me}),style:C},ae),(J||J===0)&&o.createElement("span",{className:I()(`${l}-item-content`),style:ve},J)))};function ue(a,l,g){let{colon:u,prefixCls:m,bordered:R}=l,{component:C,type:ve,showLabel:ge,showContent:ae,labelStyle:J,contentStyle:me}=g;return a.map((xe,ye)=>{let{label:De,children:Te,prefixCls:Pe=m,className:Me,style:Ie,labelStyle:he,contentStyle:re,span:Ce=1,key:Se}=xe;return typeof C=="string"?o.createElement(ce,{key:`${ve}-${Se||ye}`,className:Me,style:Ie,labelStyle:Object.assign(Object.assign({},J),he),contentStyle:Object.assign(Object.assign({},me),re),span:Ce,colon:u,component:C,itemPrefixCls:Pe,bordered:R,label:ge?De:null,content:ae?Te:null,type:ve}):[o.createElement(ce,{key:`label-${Se||ye}`,className:Me,style:Object.assign(Object.assign(Object.assign({},J),Ie),he),span:1,colon:u,component:C[0],itemPrefixCls:Pe,bordered:R,label:De,type:"label"}),o.createElement(ce,{key:`content-${Se||ye}`,className:Me,style:Object.assign(Object.assign(Object.assign({},me),Ie),re),span:Ce*2-1,component:C[1],itemPrefixCls:Pe,bordered:R,content:Te,type:"content"})]})}var pe=a=>{const l=o.useContext(le),{prefixCls:g,vertical:u,row:m,index:R,bordered:C}=a;return u?o.createElement(o.Fragment,null,o.createElement("tr",{key:`label-${R}`,className:`${g}-row`},ue(m,a,Object.assign({component:"th",type:"label",showLabel:!0},l))),o.createElement("tr",{key:`content-${R}`,className:`${g}-row`},ue(m,a,Object.assign({component:"td",type:"content",showContent:!0},l)))):o.createElement("tr",{key:R,className:`${g}-row`},ue(m,a,Object.assign({component:C?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},l)))},w=n(54548),ee=n(14747),Ue=n(91945),He=n(45503);const Fe=a=>{const{componentCls:l,labelBg:g}=a;return{[`&${l}-bordered`]:{[`> ${l}-view`]:{border:`${(0,w.bf)(a.lineWidth)} ${a.lineType} ${a.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"},[`${l}-row`]:{borderBottom:`${(0,w.bf)(a.lineWidth)} ${a.lineType} ${a.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${l}-item-label, > ${l}-item-content`]:{padding:`${(0,w.bf)(a.padding)} ${(0,w.bf)(a.paddingLG)}`,borderInlineEnd:`${(0,w.bf)(a.lineWidth)} ${a.lineType} ${a.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${l}-item-label`]:{color:a.colorTextSecondary,backgroundColor:g,"&::after":{display:"none"}}}},[`&${l}-middle`]:{[`${l}-row`]:{[`> ${l}-item-label, > ${l}-item-content`]:{padding:`${(0,w.bf)(a.paddingSM)} ${(0,w.bf)(a.paddingLG)}`}}},[`&${l}-small`]:{[`${l}-row`]:{[`> ${l}-item-label, > ${l}-item-content`]:{padding:`${(0,w.bf)(a.paddingXS)} ${(0,w.bf)(a.padding)}`}}}}}},Ge=a=>{const{componentCls:l,extraColor:g,itemPaddingBottom:u,colonMarginRight:m,colonMarginLeft:R,titleMarginBottom:C}=a;return{[l]:Object.assign(Object.assign(Object.assign({},(0,ee.Wf)(a)),Fe(a)),{["&-rtl"]:{direction:"rtl"},[`${l}-header`]:{display:"flex",alignItems:"center",marginBottom:C},[`${l}-title`]:Object.assign(Object.assign({},ee.vS),{flex:"auto",color:a.titleColor,fontWeight:a.fontWeightStrong,fontSize:a.fontSizeLG,lineHeight:a.lineHeightLG}),[`${l}-extra`]:{marginInlineStart:"auto",color:g,fontSize:a.fontSize},[`${l}-view`]:{width:"100%",borderRadius:a.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${l}-row`]:{"> th, > td":{paddingBottom:u},"&:last-child":{borderBottom:"none"}},[`${l}-item-label`]:{color:a.colorTextTertiary,fontWeight:"normal",fontSize:a.fontSize,lineHeight:a.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,w.bf)(R)} ${(0,w.bf)(m)}`},[`&${l}-item-no-colon::after`]:{content:'""'}},[`${l}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${l}-item-content`]:{display:"table-cell",flex:1,color:a.contentColor,fontSize:a.fontSize,lineHeight:a.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${l}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${l}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${l}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${l}-row`]:{"> th, > td":{paddingBottom:a.paddingSM}}},"&-small":{[`${l}-row`]:{"> th, > td":{paddingBottom:a.paddingXS}}}})}},Ve=a=>({labelBg:a.colorFillAlter,titleColor:a.colorText,titleMarginBottom:a.fontSizeSM*a.lineHeightSM,itemPaddingBottom:a.padding,colonMarginRight:a.marginXS,colonMarginLeft:a.marginXXS/2,contentColor:a.colorText,extraColor:a.colorText});var Ae=(0,Ue.I$)("Descriptions",a=>{const l=(0,He.TS)(a,{});return Ge(l)},Ve),Xe=function(a,l){var g={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&l.indexOf(u)<0&&(g[u]=a[u]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,u=Object.getOwnPropertySymbols(a);m<u.length;m++)l.indexOf(u[m])<0&&Object.prototype.propertyIsEnumerable.call(a,u[m])&&(g[u[m]]=a[u[m]]);return g};const We=a=>{const{prefixCls:l,title:g,extra:u,column:m,colon:R=!0,bordered:C,layout:ve,children:ge,className:ae,rootClassName:J,style:me,size:xe,labelStyle:ye,contentStyle:De,items:Te}=a,Pe=Xe(a,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:Me,direction:Ie,descriptions:he}=o.useContext(i.E_),re=Me("descriptions",l),Ce=(0,k.Z)(),Se=o.useMemo(()=>{var Be;return typeof m=="number"?m:(Be=(0,$.m9)(Ce,Object.assign(Object.assign({},Y),m)))!==null&&Be!==void 0?Be:3},[Ce,m]),Qe=W(Ce,Te,ge),Le=(0,Z.Z)(xe),Ye=h(Se,Qe),[Je,qe,Ke]=Ae(re),et=o.useMemo(()=>({labelStyle:ye,contentStyle:De}),[ye,De]);return Je(o.createElement(le.Provider,{value:et},o.createElement("div",Object.assign({className:I()(re,he==null?void 0:he.className,{[`${re}-${Le}`]:Le&&Le!=="default",[`${re}-bordered`]:!!C,[`${re}-rtl`]:Ie==="rtl"},ae,J,qe,Ke),style:Object.assign(Object.assign({},he==null?void 0:he.style),me)},Pe),(g||u)&&o.createElement("div",{className:`${re}-header`},g&&o.createElement("div",{className:`${re}-title`},g),u&&o.createElement("div",{className:`${re}-extra`},u)),o.createElement("div",{className:`${re}-view`},o.createElement("table",null,o.createElement("tbody",null,Ye.map((Be,we)=>o.createElement(pe,{key:we,index:we,colon:R,prefixCls:re,vertical:ve==="vertical",bordered:C,row:Be}))))))))};We.Item=N;var ke=We}}]);
