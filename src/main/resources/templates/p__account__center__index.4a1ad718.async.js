"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4679],{43992:function(_t,U,a){a.r(U),a.d(U,{default:function(){return Jt}});var J=a(19632),O=a.n(J),Q=a(5574),z=a.n(Q),w=a(51042),q=a(59257),_=a(40717),tt=a(73403),et=a(88372),y=a(80854),L=a(66309),at=a(96365),W=a(71230),D=a(15746),S=a(4393),K=a(96074),C=a(7134),p=a(67294),T=a(45318),nt=(0,T.kc)(function(s){var e=s.token;return{avatarHolder:{marginBottom:"24px",textAlign:"center","& > img":{width:"104px",height:"104px",marginBottom:"20px"}},name:{marginBottom:"4px",color:e.colorTextHeading,fontWeight:"500",fontSize:"20px",lineHeight:"28px"},detail:{p:{position:"relative",marginBottom:"8px",paddingLeft:"26px","&:last-child":{marginBottom:"0"}},i:{position:"absolute",top:"4px",left:"0",width:"14px",height:"14px"}},tagsTitle:{marginBottom:"12px",color:e.colorTextHeading,fontWeight:"500"},teamTitle:{marginBottom:"12px",color:e.colorTextHeading,fontWeight:"500"},tags:{".ant-tag":{marginBottom:"8px"}},team:{".ant-avatar":{marginRight:"12px"},a:{display:"block",marginBottom:"24px",overflow:"hidden",color:e.colorText,whiteSpace:"nowrap",textOverflow:"ellipsis",wordBreak:"break-all",transition:"color 0.3s","&:hover":{color:e.colorPrimary}}},tabsCard:{".ant-card-head":{padding:"0 16px"}}}}),F=nt,rt=a(69753),st=a(47389),it=a(20046),lt=a(3471),f=a(2487),B=a(83062),ot=a(85418),dt=a(92077),ct=a.n(dt),ut=a(15009),N=a.n(ut),vt=a(99289),G=a.n(vt);function xt(){return E.apply(this,arguments)}function E(){return E=G()(N()().mark(function s(){return N()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,y.request)("/api/currentUserDetail"));case 1:case"end":return n.stop()}},s)})),E.apply(this,arguments)}function R(s){return P.apply(this,arguments)}function P(){return P=G()(N()().mark(function s(e){return N()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,y.request)("/api/fake_list_Detail",{params:e}));case 1:case"end":return i.stop()}},s)})),P.apply(this,arguments)}var ht=(0,T.kc)(function(s){var e=s.token;return{filterCardList:{marginBottom:"-24px",".ant-card-meta-content":{marginTop:"0"},".ant-card-meta-avatar":{fontSize:"0"},".ant-list .ant-list-item-content-single":{maxWidth:"100%"}},cardInfo:{marginTop:"16px",marginLeft:"40px",zoom:"1","&::before, &::after":{display:"table",content:"' '"},"&::after":{clear:"both",height:"0",fontSize:"0",visibility:"hidden"},"& > div":{position:"relative",float:"left",width:"50%",textAlign:"left",p:{margin:"0",fontSize:"24px",lineHeight:"32px"},"p:first-child":{marginBottom:"4px",color:e.colorTextSecondary,fontSize:"12px",lineHeight:"20px"}}}}}),mt=ht,t=a(85893);function pt(s){var e=s*1;if(!e||Number.isNaN(e))return"";var n=s;return s>1e4&&(n=(0,t.jsxs)("span",{children:[Math.floor(s/1e4),(0,t.jsx)("span",{style:{position:"relative",top:-2,fontSize:14,fontStyle:"normal",marginLeft:2},children:"\u4E07"})]})),n}var gt=function(){var e=mt(),n=e.styles,i=(0,y.useRequest)(function(){return R({count:30})}),o=i.data,d=function(r){var l=r.activeUser,v=r.newUser;return(0,t.jsxs)("div",{className:n.cardInfo,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"\u6D3B\u8DC3\u7528\u6237"}),(0,t.jsx)("p",{children:l})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"\u65B0\u589E\u7528\u6237"}),(0,t.jsx)("p",{children:v})]})]})};return(0,t.jsx)(f.Z,{rowKey:"id",className:n.filterCardList,grid:{gutter:24,xxl:3,xl:2,lg:2,md:2,sm:2,xs:1},dataSource:(o==null?void 0:o.list)||[],renderItem:function(r){return(0,t.jsx)(f.Z.Item,{children:(0,t.jsxs)(S.Z,{hoverable:!0,bodyStyle:{paddingBottom:20},actions:[(0,t.jsx)(B.Z,{title:"\u4E0B\u8F7D",children:(0,t.jsx)(rt.Z,{})},"download"),(0,t.jsx)(B.Z,{title:"\u7F16\u8F91",children:(0,t.jsx)(st.Z,{})},"edit"),(0,t.jsx)(B.Z,{title:"\u5206\u4EAB",children:(0,t.jsx)(it.Z,{})},"share"),(0,t.jsx)(ot.Z,{items:[{key:"1",title:"1st menu item"},{key:"2",title:"2nd menu item"}],children:(0,t.jsx)(lt.Z,{})},"ellipsis")],children:[(0,t.jsx)(S.Z.Meta,{avatar:(0,t.jsx)(C.C,{size:"small",src:r.avatar}),title:r.title}),(0,t.jsx)("div",{children:(0,t.jsx)(d,{activeUser:pt(r.activeUser),newUser:ct()(r.newUser).format("0,0")})})]})},r.id)}})},ft=gt,jt=a(34218),yt=a(65429),St=a(37017),Ct=a(27484),M=a.n(Ct),Tt=a(9783),H=a.n(Tt),It=(0,T.kc)(function(s){var e=s.token;return{description:{maxWidth:"720px",lineHeight:"22px"},extra:H()({marginTop:"16px",color:e.colorTextSecondary,lineHeight:"22px","& > em":{marginLeft:"16px",color:e.colorTextDisabled,fontStyle:"normal"}},"@media screen and (max-width: ".concat(e.screenXS,"px)"),{"& > em":{display:"block",marginTop:"8px",marginLeft:"0"}})}}),Lt=It,Zt=function(e){var n=e.data,i=n.content,o=n.updatedAt,d=n.avatar,c=n.owner,r=n.href,l=Lt(),v=l.styles;return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:v.description,children:i}),(0,t.jsxs)("div",{className:v.extra,children:[(0,t.jsx)(C.C,{src:d,size:"small"}),(0,t.jsx)("a",{href:r,children:c})," \u53D1\u5E03\u5728 ",(0,t.jsx)("a",{href:r,children:r}),(0,t.jsx)("em",{children:M()(o).format("YYYY-MM-DD HH:mm")})]})]})},At=Zt,zt=(0,T.kc)(function(s){var e=s.token;return{articleList:{".ant-list-item:first-child":{paddingTop:"0"}},listItemMetaTitle:{color:e.colorTextHeading}}}),Bt=zt,Nt=function(){var e=Bt(),n=e.styles,i=function(r){var l=r.icon,v=r.text;return(0,t.jsxs)("span",{children:[l," ",v]})},o=(0,y.useRequest)(function(){return R({count:30})}),d=o.data;return(0,t.jsx)(f.Z,{size:"large",className:n.articleList,rowKey:"id",itemLayout:"vertical",dataSource:(d==null?void 0:d.list)||[],renderItem:function(r){return(0,t.jsxs)(f.Z.Item,{actions:[(0,t.jsx)(i,{icon:(0,t.jsx)(jt.Z,{}),text:r.star},"star"),(0,t.jsx)(i,{icon:(0,t.jsx)(yt.Z,{}),text:r.like},"like"),(0,t.jsx)(i,{icon:(0,t.jsx)(St.Z,{}),text:r.message},"message")],children:[(0,t.jsx)(f.Z.Item.Meta,{title:(0,t.jsx)("a",{className:n.listItemMetaTitle,href:r.href,children:r.title}),description:(0,t.jsxs)("span",{children:[(0,t.jsx)(L.Z,{children:"Ant Design"}),(0,t.jsx)(L.Z,{children:"\u8BBE\u8BA1\u8BED\u8A00"}),(0,t.jsx)(L.Z,{children:"\u8682\u8681\u91D1\u670D"})]})}),(0,t.jsx)(At,{data:r})]},r.id)}})},Ht=Nt,Dt=a(84110),Et=a.n(Dt),Rt=a(97857),b=a.n(Rt),Pt=a(13769),Mt=a.n(Pt),Ut=a(93967),Ot=a.n(Ut),Wt=(0,T.kc)(function(s){var e=s.token;return{avatarList:{display:"inline-block",ul:{display:"inline-block",marginLeft:"8px",fontSize:"0"}},avatarItem:{display:"inline-block",width:e.controlHeight,height:e.controlHeight,marginLeft:"-8px",fontSize:e.fontSize,".ant-avatar":{border:"1px solid ".concat(e.colorBorder)}},avatarItemLarge:{width:e.controlHeightLG,height:e.controlHeightLG},avatarItemSmall:{width:e.controlHeightSM,height:e.controlHeightSM},avatarItemMini:{width:"20px",height:"20px",".ant-avatar":{width:"20px",height:"20px",lineHeight:"20px",".ant-avatar-string":{fontSize:"12px",lineHeight:"18px"}}}}}),Y=Wt,Kt=["children","size","maxLength","excessItemsStyle"],Ft=function(e){var n=e.src,i=e.size,o=e.tips,d=e.onClick,c=d===void 0?function(){}:d,r=Y(),l=r.styles,v=function(u){return Ot()(l.avatarItem,H()(H()(H()({},l.avatarItemLarge,u==="large"),l.avatarItemSmall,u==="small"),l.avatarItemMini,u==="mini"))},m=v(i);return(0,t.jsx)("li",{className:m,onClick:c,children:o?(0,t.jsx)(B.Z,{title:o,children:(0,t.jsx)(C.C,{src:n,size:i,style:{cursor:"pointer"}})}):(0,t.jsx)(C.C,{src:n,size:i})})},$=function(e){var n=e.children,i=e.size,o=e.maxLength,d=o===void 0?5:o,c=e.excessItemsStyle,r=Mt()(e,Kt),l=Y(),v=l.styles,m=p.Children.count(n),g=d>=m?m:d,u=p.Children.toArray(n),x=u.slice(0,g).map(function(I){return p.cloneElement(I,{size:i})});if(g<m){var Z=avatarSizeToClassName(i);x.push((0,t.jsx)("li",{className:Z,children:(0,t.jsx)(C.C,{size:i,style:c,children:"+".concat(m-d)})},"exceed"))}return(0,t.jsx)("div",b()(b()({},r),{},{className:v.avatarList,children:(0,t.jsxs)("ul",{children:[" ",x," "]})}))};$.Item=Ft;var V=$,Gt=(0,T.kc)(function(s){var e=s.token;return{card:{".ant-card-meta-title":{marginBottom:"4px","& > a":{display:"inline-block",maxWidth:"100%",color:e.colorTextHeading}},".ant-card-meta-description":{height:"44px",overflow:"hidden",lineHeight:"22px"},"&:hover":{".ant-card-meta-title > a":{color:e.colorPrimary}}},cardItemContent:{display:"flex",height:"20px",marginTop:"16px",marginBottom:"-4px",lineHeight:"20px","& > span":{flex:"1",color:e.colorTextSecondary,fontSize:"12px"}},avatarList:{flex:"0 1 auto"},cardList:{marginTop:"24px"},coverCardList:{".ant-list .ant-list-item-content-single":{maxWidth:"100%"}}}}),bt=Gt;M().extend(Et());var Yt=function(){var e=bt(),n=e.styles,i=(0,y.useRequest)(function(){return R({count:30})}),o=i.data;return(0,t.jsx)(f.Z,{className:n.coverCardList,rowKey:"id",grid:{gutter:24,xxl:3,xl:2,lg:2,md:2,sm:2,xs:1},dataSource:(o==null?void 0:o.list)||[],renderItem:function(c){return(0,t.jsx)(f.Z.Item,{children:(0,t.jsxs)(S.Z,{className:n.card,hoverable:!0,cover:(0,t.jsx)("img",{alt:c.title,src:c.cover}),children:[(0,t.jsx)(S.Z.Meta,{title:(0,t.jsx)("a",{children:c.title}),description:c.subDescription}),(0,t.jsxs)("div",{className:n.cardItemContent,children:[(0,t.jsx)("span",{children:M()(c.updatedAt).fromNow()}),(0,t.jsx)("div",{className:n.avatarList,children:(0,t.jsx)(V,{size:"small",children:c.members.map(function(r){return(0,t.jsx)(V.Item,{src:r.avatar,tips:r.name},"".concat(c.id,"-avatar-").concat(r.id))})})})]})]})})}})},$t=Yt,Vt=[{key:"articles",tab:(0,t.jsxs)("span",{children:["\u6587\u7AE0"," ",(0,t.jsx)("span",{style:{fontSize:14},children:"(8)"})]})},{key:"applications",tab:(0,t.jsxs)("span",{children:["\u5E94\u7528"," ",(0,t.jsx)("span",{style:{fontSize:14},children:"(8)"})]})},{key:"projects",tab:(0,t.jsxs)("span",{children:["\u9879\u76EE"," ",(0,t.jsx)("span",{style:{fontSize:14},children:"(8)"})]})}],kt=function(e){var n=e.tags,i=F(),o=i.styles,d=(0,p.useRef)(null),c=(0,p.useState)([]),r=z()(c,2),l=r[0],v=r[1],m=(0,p.useState)(!1),g=z()(m,2),u=g[0],x=g[1],Z=(0,p.useState)(""),I=z()(Z,2),j=I[0],k=I[1],Qt=function(){if(x(!0),d.current){var h;(h=d.current)===null||h===void 0||h.focus()}},wt=function(h){k(h.target.value)},X=function(){var h=O()(l);j&&h.filter(function(qt){return qt.label===j}).length===0&&(h=[].concat(O()(h),[{key:"new-".concat(h.length),label:j}])),v(h),x(!1),k("")};return(0,t.jsxs)("div",{className:o.tags,children:[(0,t.jsx)("div",{className:o.tagsTitle,children:"\u6807\u7B7E"}),(n||[]).concat(l).map(function(A){return(0,t.jsx)(L.Z,{children:A.label},A.key)}),u&&(0,t.jsx)(at.Z,{ref:d,type:"text",size:"small",style:{width:78},value:j,onChange:wt,onBlur:X,onPressEnter:X}),!u&&(0,t.jsx)(L.Z,{onClick:Qt,style:{borderStyle:"dashed"},children:(0,t.jsx)(w.Z,{})})]})},Xt=function(){var e=F(),n=e.styles,i=(0,p.useState)("articles"),o=z()(i,2),d=o[0],c=o[1],r=(0,y.useRequest)(function(){return xt()}),l=r.data,v=r.loading,m=function(x){var Z=x.title,I=x.group,j=x.geographic;return(0,t.jsxs)("div",{className:n.detail,children:[(0,t.jsxs)("p",{children:[(0,t.jsx)(q.Z,{style:{marginRight:8}}),Z]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(_.Z,{style:{marginRight:8}}),I]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(tt.Z,{style:{marginRight:8}}),(j||{province:{label:""}}).province.label,(j||{city:{label:""}}).city.label]})]})},g=function(x){return x==="projects"?(0,t.jsx)($t,{}):x==="applications"?(0,t.jsx)(ft,{}):x==="articles"?(0,t.jsx)(Ht,{}):null};return(0,t.jsx)(et.f,{children:(0,t.jsxs)(W.Z,{gutter:24,children:[(0,t.jsx)(D.Z,{lg:7,md:24,children:(0,t.jsx)(S.Z,{bordered:!1,style:{marginBottom:24},loading:v,children:!v&&l&&(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:n.avatarHolder,children:[(0,t.jsx)("img",{alt:"",src:l.avatar}),(0,t.jsx)("div",{className:n.name,children:l.name}),(0,t.jsx)("div",{children:l==null?void 0:l.signature})]}),m(l),(0,t.jsx)(K.Z,{dashed:!0}),(0,t.jsx)(kt,{tags:l.tags||[]}),(0,t.jsx)(K.Z,{style:{marginTop:16},dashed:!0}),(0,t.jsxs)("div",{className:n.team,children:[(0,t.jsx)("div",{className:n.teamTitle,children:"\u56E2\u961F"}),(0,t.jsx)(W.Z,{gutter:36,children:l.notice&&l.notice.map(function(u){return(0,t.jsx)(D.Z,{lg:24,xl:12,children:(0,t.jsxs)("a",{href:u.href,children:[(0,t.jsx)(C.C,{size:"small",src:u.logo}),u.member]})},u.id)})})]})]})})}),(0,t.jsx)(D.Z,{lg:17,md:24,children:(0,t.jsx)(S.Z,{className:n.tabsCard,bordered:!1,tabList:Vt,activeTabKey:d,onTabChange:function(x){c(x)},children:g(d)})})]})})},Jt=Xt}}]);
