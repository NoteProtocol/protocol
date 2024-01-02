"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[950],{395:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=o(5893),s=o(1151);const r={},a="Welcome",i={id:"Index",title:"Welcome",description:"The NOTE protocol enables blockchain systems based on the Bitcoin UTXO model to create and manage digital assets. This protocol supports secure encrypted data storage and communication, and is also applicable to public and transparent data storage, including the management of ownership rights for digital assets such as Tokens and NFTs.",source:"@site/docs/Index.md",sourceDirName:".",slug:"/",permalink:"/protocol/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Index.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",next:{title:"NOTE\u534f\u8bae(draft)",permalink:"/protocol/docs/Protocol/NOTE-Protocol-V2-Chinese"}},c={},l=[];function d(e){const n={a:"a",h1:"h1",hr:"hr",p:"p",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"welcome",children:"Welcome"}),"\n",(0,t.jsx)(n.p,{children:"The NOTE protocol enables blockchain systems based on the Bitcoin UTXO model to create and manage digital assets. This protocol supports secure encrypted data storage and communication, and is also applicable to public and transparent data storage, including the management of ownership rights for digital assets such as Tokens and NFTs."}),"\n",(0,t.jsx)(n.p,{children:"This protocol is grounded in the BIP32 standard to determine the generation rules for Decentralized Identities (DID)."}),"\n",(0,t.jsx)(n.p,{children:"For encrypted data, the protocol employs DID rules. Each record is encrypted and decrypted with unpredictable random public and private keys, using the Electrum BIE1 ECIES algorithm for data encryption."}),"\n",(0,t.jsx)(n.p,{children:"The protocol specifies the data storage format and defines the rules for data creation, deletion, modification, retrieval, and sharing."}),"\n",(0,t.jsx)(n.p,{children:"Information security does not rely on third-party trust; only the holders of mnemonic phrases can access the data, ensuring both data and storage security."}),"\n",(0,t.jsx)(n.p,{children:"Utilizing on-chain smart contracts for Bitcoin consensus-level asset verification, combined with off-chain asset indexers, the protocol efficiently interprets on-chain assets and provides Merkle proofs for these assets."}),"\n",(0,t.jsx)(n.p,{children:"This is a second-layer solution built upon the unshakeable Bitcoin protocol and its underlying blockchain consensus rules. The protocol also lays the foundational application requirements for Layer 2 networks."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"./Protocol/NOTE-Protocol-V2-English",children:"Protocol English version"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"./Protocol/NOTE-Protocol-V2-Chinese",children:"Protocol Chinese version"})}),"\n",(0,t.jsx)(n.p,{children:"If there are any language errors or logic problems, please let us know."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"NOTE\u534f\u8bae\u4f7f\u57fa\u4e8e\u6bd4\u7279\u5e01UTXO\u6a21\u578b\u7684\u533a\u5757\u94fe\u80fd\u591f\u521b\u5efa\u53ca\u7ba1\u7406\u6570\u5b57\u8d44\u4ea7\u3002\u8be5\u534f\u8bae\u652f\u6301\u5f3a\u52a0\u5bc6\u6570\u636e\u5b58\u50a8\u4e0e\u901a\u4fe1\uff0c\u4ea6\u9002\u7528\u4e8e\u516c\u5f00\u900f\u660e\u7684\u6570\u636e\u5b58\u50a8\uff0c\u5305\u62ecToken\u4e0eNFT\u7b49\u6570\u5b57\u8d44\u4ea7\u7684\u6240\u6709\u6743\u7ba1\u7406\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u534f\u8bae\u57fa\u4e8eBIP32\u6807\u51c6\uff0c\u786e\u5b9a\u53bb\u4e2d\u5fc3\u5316\u8eab\u4efd\uff08DID\uff09\u7684\u751f\u6210\u89c4\u5219\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u9488\u5bf9\u52a0\u5bc6\u6570\u636e\uff0c\u672c\u534f\u8bae\u91c7\u7528DID\u89c4\u5219\uff0c\u5bf9\u6bcf\u6761\u8bb0\u5f55\u4ee5\u96be\u4ee5\u9884\u6d4b\u7684\u968f\u673a\u516c\u79c1\u94a5\u52a0\u5bc6\u89e3\u5bc6\uff0c\u5e76\u4f7f\u7528Electrum BIE1 ECIES\u7b97\u6cd5\u8fdb\u884c\u6570\u636e\u52a0\u5bc6\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u534f\u8bae\u660e\u786e\u6570\u636e\u5b58\u50a8\u683c\u5f0f\uff0c\u5e76\u5b9a\u4e49\u4e86\u6570\u636e\u7684\u589e\u5220\u6539\u67e5\u53ca\u5206\u4eab\u89c4\u5219\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4fe1\u606f\u5b89\u5168\u65e0\u987b\u4f9d\u8d56\u7b2c\u4e09\u65b9\u4fe1\u4efb\uff0c\u4ec5\u52a9\u8bb0\u8bcd\u6301\u6709\u8005\u53ef\u8bbf\u95ee\u6570\u636e\uff0c\u786e\u4fdd\u6570\u636e\u5b89\u5168\u4e0e\u5b58\u50a8\u5b89\u5168\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5229\u7528\u94fe\u4e0a\u667a\u80fd\u5408\u7ea6\u8fdb\u884c\u6bd4\u7279\u5e01\u5171\u8bc6\u7ea7\u522b\u7684\u8d44\u4ea7\u6821\u9a8c\uff0c\u7ed3\u5408\u94fe\u4e0b\u8d44\u4ea7\u7d22\u5f15\u5668\uff0c\u9ad8\u6548\u89e3\u8bfb\u94fe\u4e0a\u8d44\u4ea7\u5e76\u63d0\u4f9b\u8d44\u4ea7\u7684\u9ed8\u514b\u5c14\u8bc1\u660e\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u4e3a\u4e00\u79cd\u7b2c\u4e8c\u5c42\u89e3\u51b3\u65b9\u6848\uff0c\u57fa\u4e8e\u7262\u4e0d\u53ef\u7834\u7684\u6bd4\u7279\u5e01\u534f\u8bae\u53ca\u5176\u5e95\u5c42\u533a\u5757\u94fe\u5171\u8bc6\u89c4\u5219\u3002\u672c\u534f\u8bae\u4e5f\u4e3aLayer 2\u7f51\u7edc\u5960\u5b9a\u5e94\u7528\u57fa\u7840\u9700\u6c42\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"./Protocol/NOTE-Protocol-V2-Chinese",children:"\u4e2d\u6587\u7248\u534f\u8bae"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"./Protocol/NOTE-Protocol-V2-English",children:"\u82f1\u6587\u7248\u534f\u8bae"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u6709\u4efb\u4f55\u8bed\u8a00\u9519\u8bef\u6216\u8005\u903b\u8f91\u95ee\u9898\uff0c\u8bf7\u544a\u77e5"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>a});var t=o(7294);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);