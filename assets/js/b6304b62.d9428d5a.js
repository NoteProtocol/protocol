"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[824],{5435:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"protocol/Token/4.4-Mint","title":"","description":"4.4 Minting","source":"@site/docs/protocol/04-Token/4.4-Mint.md","sourceDirName":"protocol/04-Token","slug":"/protocol/Token/4.4-Mint","permalink":"/docs/protocol/Token/4.4-Mint","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4.4,"frontMatter":{"title":"","sidebar_position":4.4,"sidebar_label":"Minting"},"sidebar":"docsSidebar","previous":{"title":"Deployment","permalink":"/docs/protocol/Token/4.3-Deploy"},"next":{"title":"Transfer","permalink":"/docs/protocol/Token/4.5-Transfer"}}');var s=n(6070),r=n(6599);const l={title:"",sidebar_position:4.4,sidebar_label:"Minting"},o=void 0,d={},c=[{value:"4.4 Minting",id:"44-minting",level:2}];function a(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"44-minting",children:"4.4 Minting"}),"\n",(0,s.jsx)(e.p,{children:"Minting is defined by the following data structure:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{ \n  "p": "n20",\n  "op": "mint",\n  "tick": "note",\n  "amt": "1000"\n  ... ...\n}\n'})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Key"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Required?"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"p"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{children:"Protocol name, n20, lowercase"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"op"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{children:"Operation name, mint, lowercase"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"tick"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{children:"Token name, up to 12 characters, case-insensitive"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"amt"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{children:"Bigint, a large integer representing the quantity mined, must be greater than 0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"..."}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"}),(0,s.jsx)(e.td,{children:"Other variables needed during the Mint operation"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"If a smart contract was set during the deployment stage, the Mint operation must pass contract validation."})]})}function h(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(a,{...t})}):a(t)}},6599:(t,e,n)=>{n.d(e,{R:()=>l,x:()=>o});var i=n(758);const s={},r=i.createContext(s);function l(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:l(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);