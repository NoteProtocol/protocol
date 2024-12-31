"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[353],{808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"protocol/Token/4.6-Burn","title":"","description":"4.6 Burn","source":"@site/docs/protocol/04-Token/4.6-Burn.md","sourceDirName":"protocol/04-Token","slug":"/protocol/Token/4.6-Burn","permalink":"/docs/protocol/Token/4.6-Burn","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4.6,"frontMatter":{"title":"","sidebar_position":4.6,"sidebar_label":"Burn"},"sidebar":"docsSidebar","previous":{"title":"Transfer","permalink":"/docs/protocol/Token/4.5-Transfer"},"next":{"title":"Binding","permalink":"/docs/protocol/Token/4.7-Up"}}');var r=n(6070),l=n(6599);const o={title:"",sidebar_position:4.6,sidebar_label:"Burn"},i=void 0,d={},c=[{value:"4.6 Burn",id:"46-burn",level:2}];function a(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"46-burn",children:"4.6 Burn"}),"\n",(0,r.jsx)(t.p,{children:"The Burn operation is defined by the following data structure:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "p": "n20",\n  "op": "burn",\n  "tick": "note",\n  "amt": "1000"\n  ... ...\n}\n'})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Required?"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"p"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Protocol name, n20, lowercase"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"op"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Operation name, transfer, lowercase"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"tick"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Token name, up to 16 bytes, case-insensitive"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"amt"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Bigint, a large integer representing the quantity to be destroyed, must be greater than 0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"..."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Other variables needed during the transfer operation"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"If a smart contract was set during the deployment stage, the Burn operation must pass contract validation.\nIf the account has more tokens than the amount to be burned, the excess tokens will be assigned to the first transaction output's token address. Otherwise, it is not necessary to specify a token address."})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},6599:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(758);const r={},l=s.createContext(r);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);