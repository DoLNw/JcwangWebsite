"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[942],{33389:function(ve,H,a){a.r(H),a.d(H,{default:function(){return pe}});var K=a(15009),f=a.n(K),J=a(99289),D=a.n(J),Q=a(97857),U=a.n(Q),X=a(13769),k=a.n(X),q=a(5574),p=a.n(q),$=a(2618),_=a(45629),ee=a(17644),ae=a(2236),se=a(91595),s=a(80854),L=a(2453),te=a(96365),B=a(14726),re=a(85265),d=a(67294),ne=a(51042),le=a(37476),W=a(5966),G=a(90672),e=a(85893),ue=function(i){var g=i.reload,b=L.ZP.useMessage(),v=p()(b,2),n=v[0],P=v[1],M=(0,s.useIntl)(),l=(0,s.useRequest)($.HP,{manual:!0,onSuccess:function(){n.success("Added successfully"),g==null||g()},onError:function(){n.error("Adding failed, please try again!")}}),x=l.run,Z=l.loading;return(0,e.jsxs)(e.Fragment,{children:[P,(0,e.jsxs)(le.Y,{title:M.formatMessage({id:"pages.searchTable.createForm.newRule",defaultMessage:"New rule"}),trigger:(0,e.jsx)(B.ZP,{type:"primary",icon:(0,e.jsx)(ne.Z,{}),children:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.new",defaultMessage:"New"})}),width:"400px",modalProps:{okButtonProps:{loading:Z}},onFinish:function(){var m=D()(f()().mark(function o(S){return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,x({data:S});case 2:return c.abrupt("return",!0);case 3:case"end":return c.stop()}},o)}));return function(o){return m.apply(this,arguments)}}(),children:[(0,e.jsx)(W.Z,{rules:[{required:!0,message:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.ruleName",defaultMessage:"Rule name is required"})}],width:"md",name:"name"}),(0,e.jsx)(G.Z,{width:"md",name:"desc"})]})]})},oe=ue,I=a(38020),N=a(64317),de=a(86615),ie=a(22452),ce=a(17788),ge=function(i){var g=i.onOk,b=i.values,v=i.trigger,n=(0,s.useIntl)(),P=(0,d.useState)(!1),M=p()(P,2),l=M[0],x=M[1],Z=L.ZP.useMessage(),m=p()(Z,2),o=m[0],S=m[1],C=(0,s.useRequest)($.D7,{manual:!0,onSuccess:function(){o.success("Configuration is successful"),g==null||g()},onError:function(){o.error("Configuration failed, please try again!")}}),c=C.run,R=(0,d.useCallback)(function(){x(!1)},[]),A=(0,d.useCallback)(function(){x(!0)},[]),O=(0,d.useCallback)(function(){var F=D()(f()().mark(function j(E){return f()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,c({data:E});case 2:R();case 3:case"end":return y.stop()}},j)}));return function(j){return F.apply(this,arguments)}}(),[R,c]);return(0,e.jsxs)(e.Fragment,{children:[S,v?(0,d.cloneElement)(v,{onClick:A}):null,(0,e.jsxs)(I.L0,{stepsProps:{size:"small"},stepsFormRender:function(j,E){return(0,e.jsx)(ce.Z,{width:640,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:n.formatMessage({id:"pages.searchTable.updateForm.ruleConfig",defaultMessage:"\u89C4\u5219\u914D\u7F6E"}),open:l,footer:E,onCancel:R,children:j})},onFinish:O,children:[(0,e.jsxs)(I.L0.StepForm,{initialValues:b,title:n.formatMessage({id:"pages.searchTable.updateForm.basicConfig",defaultMessage:"\u57FA\u672C\u4FE1\u606F"}),children:[(0,e.jsx)(W.Z,{name:"name",label:n.formatMessage({id:"pages.searchTable.updateForm.ruleName.nameLabel",defaultMessage:"\u89C4\u5219\u540D\u79F0"}),width:"md",rules:[{required:!0,message:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.updateForm.ruleName.nameRules",defaultMessage:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0\uFF01"})}]}),(0,e.jsx)(G.Z,{name:"desc",width:"md",label:n.formatMessage({id:"pages.searchTable.updateForm.ruleDesc.descLabel",defaultMessage:"\u89C4\u5219\u63CF\u8FF0"}),placeholder:n.formatMessage({id:"pages.searchTable.updateForm.ruleDesc.descPlaceholder",defaultMessage:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"}),rules:[{required:!0,message:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.updateForm.ruleDesc.descRules",defaultMessage:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u89C4\u5219\u63CF\u8FF0\uFF01"}),min:5}]})]}),(0,e.jsxs)(I.L0.StepForm,{initialValues:{target:"0",template:"0"},title:n.formatMessage({id:"pages.searchTable.updateForm.ruleProps.title",defaultMessage:"\u914D\u7F6E\u89C4\u5219\u5C5E\u6027"}),children:[(0,e.jsx)(N.Z,{name:"target",width:"md",label:n.formatMessage({id:"pages.searchTable.updateForm.object",defaultMessage:"\u76D1\u63A7\u5BF9\u8C61"}),valueEnum:{0:"\u8868\u4E00",1:"\u8868\u4E8C"}}),(0,e.jsx)(N.Z,{name:"template",width:"md",label:n.formatMessage({id:"pages.searchTable.updateForm.ruleProps.templateLabel",defaultMessage:"\u89C4\u5219\u6A21\u677F"}),valueEnum:{0:"\u89C4\u5219\u6A21\u677F\u4E00",1:"\u89C4\u5219\u6A21\u677F\u4E8C"}}),(0,e.jsx)(de.Z.Group,{name:"type",label:n.formatMessage({id:"pages.searchTable.updateForm.ruleProps.typeLabel",defaultMessage:"\u89C4\u5219\u7C7B\u578B"}),options:[{value:"0",label:"\u5F3A"},{value:"1",label:"\u5F31"}]})]}),(0,e.jsxs)(I.L0.StepForm,{initialValues:{type:"1",frequency:"month"},title:n.formatMessage({id:"pages.searchTable.updateForm.schedulingPeriod.title",defaultMessage:"\u8BBE\u5B9A\u8C03\u5EA6\u5468\u671F"}),children:[(0,e.jsx)(ie.Z,{name:"time",width:"md",label:n.formatMessage({id:"pages.searchTable.updateForm.schedulingPeriod.timeLabel",defaultMessage:"\u5F00\u59CB\u65F6\u95F4"}),rules:[{required:!0,message:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.updateForm.schedulingPeriod.timeRules",defaultMessage:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\uFF01"})}]}),(0,e.jsx)(N.Z,{name:"frequency",label:n.formatMessage({id:"pages.searchTable.updateForm.object",defaultMessage:"\u76D1\u63A7\u5BF9\u8C61"}),width:"md",valueEnum:{month:"\u6708",week:"\u5468"}})]})]})]})},me=ge,fe=["defaultRender"],he=function(){var i=(0,d.useRef)(),g=(0,d.useState)(!1),b=p()(g,2),v=b[0],n=b[1],P=(0,d.useState)(),M=p()(P,2),l=M[0],x=M[1],Z=(0,d.useState)([]),m=p()(Z,2),o=m[0],S=m[1],C=(0,s.useIntl)(),c=L.ZP.useMessage(),R=p()(c,2),A=R[0],O=R[1],F=(0,s.useRequest)($.DV,{manual:!0,onSuccess:function(){var t,r;S([]),(t=i.current)===null||t===void 0||(r=t.reloadAndRest)===null||r===void 0||r.call(t),A.success("Deleted successfully and will refresh soon")},onError:function(){A.error("Delete failed, please try again")}}),j=F.run,E=F.loading,w=[{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.updateForm.ruleName.nameLabel",defaultMessage:"Rule name"}),dataIndex:"name",tip:"The rule name is the unique key",render:function(t,r){return(0,e.jsx)("a",{onClick:function(){x(r),n(!0)},children:t})}},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.titleDesc",defaultMessage:"Description"}),dataIndex:"desc",valueType:"textarea"},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.titleCallNo",defaultMessage:"Number of service calls"}),dataIndex:"callNo",sorter:!0,hideInForm:!0,renderText:function(t){return"".concat(t).concat(C.formatMessage({id:"pages.searchTable.tenThousand",defaultMessage:" \u4E07 "}))}},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.titleStatus",defaultMessage:"Status"}),dataIndex:"status",hideInForm:!0,valueEnum:{0:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.nameStatus.default",defaultMessage:"Shut down"}),status:"Default"},1:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.nameStatus.running",defaultMessage:"Running"}),status:"Processing"},2:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.nameStatus.online",defaultMessage:"Online"}),status:"Success"},3:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.nameStatus.abnormal",defaultMessage:"Abnormal"}),status:"Error"}}},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.titleUpdatedAt",defaultMessage:"Last scheduled time"}),sorter:!0,dataIndex:"updatedAt",valueType:"dateTime",renderFormItem:function(t,r,T){var h=r.defaultRender,V=k()(r,fe),Y=T.getFieldValue("status");return"".concat(Y)==="0"?!1:"".concat(Y)==="3"?(0,e.jsx)(te.Z,U()(U()({},V),{},{placeholder:C.formatMessage({id:"pages.searchTable.exception",defaultMessage:"Please enter the reason for the exception!"})})):h(t)}},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(t,r){var T;return[(0,e.jsx)(me,{trigger:(0,e.jsx)("a",{children:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.config",defaultMessage:"Configuration"})}),onOk:(T=i.current)===null||T===void 0?void 0:T.reload,values:r},"config"),(0,e.jsx)("a",{href:"https://procomponents.ant.design/",children:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.subscribeAlert",defaultMessage:"Subscribe to alerts"})},"subscribeAlert")]}}],y=(0,d.useCallback)(function(){var u=D()(f()().mark(function t(r){return f()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(r!=null&&r.length){h.next=3;break}return A.warning("\u8BF7\u9009\u62E9\u5220\u9664\u9879"),h.abrupt("return");case 3:return h.next=5,j({data:{key:r.map(function(V){return V.key})}});case 5:case"end":return h.stop()}},t)}));return function(t){return u.apply(this,arguments)}}(),[j]);return(0,e.jsxs)(_._z,{children:[O,(0,e.jsx)(ee.Z,{headerTitle:C.formatMessage({id:"pages.searchTable.title",defaultMessage:"Enquiry form"}),actionRef:i,rowKey:"key",search:{labelWidth:120},toolBarRender:function(){var t;return[(0,e.jsx)(oe,{reload:(t=i.current)===null||t===void 0?void 0:t.reload},"create")]},request:$.jR,columns:w,rowSelection:{onChange:function(t,r){S(r)}}}),(o==null?void 0:o.length)>0&&(0,e.jsxs)(ae.S,{extra:(0,e.jsxs)("div",{children:[(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.chosen",defaultMessage:"Chosen"})," ",(0,e.jsx)("a",{style:{fontWeight:600},children:o.length})," ",(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.item",defaultMessage:"\u9879"}),"\xA0\xA0",(0,e.jsxs)("span",{children:[(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.totalServiceCalls",defaultMessage:"Total number of service calls"})," ",o.reduce(function(u,t){return u+t.callNo},0)," ",(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.tenThousand",defaultMessage:"\u4E07"})]})]}),children:[(0,e.jsx)(B.ZP,{loading:E,onClick:function(){y(o)},children:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.batchDeletion",defaultMessage:"Batch deletion"})}),(0,e.jsx)(B.ZP,{type:"primary",children:(0,e.jsx)(s.FormattedMessage,{id:"pages.searchTable.batchApproval",defaultMessage:"Batch approval"})})]}),(0,e.jsx)(re.Z,{width:600,open:v,onClose:function(){x(void 0),n(!1)},closable:!1,children:(l==null?void 0:l.name)&&(0,e.jsx)(se.vY,{column:2,title:l==null?void 0:l.name,request:D()(f()().mark(function u(){return f()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",{data:l||{}});case 1:case"end":return r.stop()}},u)})),params:{id:l==null?void 0:l.name},columns:w})})]})},pe=he}}]);
