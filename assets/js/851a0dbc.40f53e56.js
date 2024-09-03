"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[7309],{8542:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=o(6070),a=o(5296);const r={title:"",sidebar_position:4.2,sidebar_label:"Data Storage"},s=void 0,c={id:"protocol/Token/4.2-Data",title:"",description:"4.2 Data Storage",source:"@site/docs/protocol/04-Token/4.2-Data.md",sourceDirName:"protocol/04-Token",slug:"/protocol/Token/4.2-Data",permalink:"/docs/protocol/Token/4.2-Data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4.2,frontMatter:{title:"",sidebar_position:4.2,sidebar_label:"Data Storage"},sidebar:"docsSidebar",previous:{title:"Off-chain Smart Contracts",permalink:"/docs/protocol/Token/4.1-OffchainContracts"},next:{title:"Deployment",permalink:"/docs/protocol/Token/4.3-Deploy"}},i={},d=[{value:"4.2 Data Storage",id:"42-data-storage",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"42-data-storage",children:"4.2 Data Storage"}),"\n",(0,n.jsxs)(t.p,{children:["On the Bitcoin (BTC) network, each PUSH DATA has a length limit, with ",(0,n.jsx)(t.code,{children:"MAX_SCRIPT_ELEMENT_SIZE = 520"})," or a strict requirement of ",(0,n.jsx)(t.code,{children:"MAX_STANDARD_STACK_ITEM_SIZE = 80"})," on nodes enforcing standard script policies. Large block blockchains do not have a limit on PUSH DATA length, allowing for up to 4M bytes."]}),"\n",(0,n.jsxs)(t.p,{children:["The protocol sets five data areas: ",(0,n.jsx)(t.code,{children:"data0, data1, data2, data3, data4"}),". On BTC, up to 400 bytes or 2600 bytes can be used."]}),"\n",(0,n.jsx)(t.p,{children:"After being packaged with msgpack, the N20 Payload is segmented."}),"\n",(0,n.jsx)(t.p,{children:"Transactions exceeding 400 or 2600 bytes of data will be rejected by BTC nodes. Some data service providers can only accept smaller transactions."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5296:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>c});var n=o(758);const a={},r=n.createContext(a);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);