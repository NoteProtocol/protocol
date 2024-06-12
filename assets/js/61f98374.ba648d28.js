"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[6393],{4135:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=o(6070),i=o(5710);const r={title:"",sidebar_position:2.5,sidebar_label:"Security Precautions"},s=void 0,c={id:"protocol/Problems And Solutions/2.5-Security",title:"",description:"2.5 Security Precautions",source:"@site/docs/protocol/02-Problems And Solutions/2.5-Security.md",sourceDirName:"protocol/02-Problems And Solutions",slug:"/protocol/Problems And Solutions/2.5-Security",permalink:"/docs/protocol/Problems And Solutions/2.5-Security",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2.5,frontMatter:{title:"",sidebar_position:2.5,sidebar_label:"Security Precautions"},sidebar:"docsSidebar",previous:{title:"On-Chain Contracts",permalink:"/docs/protocol/Problems And Solutions/2.4-Contracts"},next:{title:"Format and Sequence",permalink:"/docs/protocol/Secure Data/3.1-Format"}},a={},l=[{value:"2.5 Security Precautions",id:"25-security-precautions",level:3}];function d(e){const t={h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"25-security-precautions",children:"2.5 Security Precautions"}),"\n",(0,n.jsx)(t.p,{children:"As the NOTE protocol is in the initial stages of development, certain limitations are enforced for security purposes."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Replace-by-Fee (RBF) is forbidden. For inputs adhering to the NOTE protocol and not having the maximum potential value (0xffffffff), indexers should enforce a ban."}),"\n",(0,n.jsx)(t.li,{children:"Priority by Block: Transactions are processed based on the sequence they are incorporated into blocks. In the event of a block reorganization, the block hash is updated. The security of transactions is underpinned by Bitcoin node."}),"\n",(0,n.jsx)(t.li,{children:"The Principle of Foreseeing: Transactions entering the mempool are promptly identified by indexers, enabling the advance notification to wallets and other client interfaces about invalid transactions to save on unnecessary fees."}),"\n",(0,n.jsx)(t.li,{children:"Notification of Transactions: Owing to the foresight principle, wallets and other clients are advised to use indexers for transaction broadcasting or to conduct node broadcasts in parallel."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5710:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>c});var n=o(758);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);