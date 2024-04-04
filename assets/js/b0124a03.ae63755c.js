"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[1822],{26:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(4848),i=n(8453);const r={title:"",sidebar_position:3.1,sidebar_label:"Format and Sequence"},s=void 0,o={id:"Secure Data/3.1-Format",title:"",description:"3.1 Data Format and Sequence",source:"@site/docs/03-Secure Data/3.1-Format.md",sourceDirName:"03-Secure Data",slug:"/Secure Data/3.1-Format",permalink:"/docs/Secure Data/3.1-Format",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3.1,frontMatter:{title:"",sidebar_position:3.1,sidebar_label:"Format and Sequence"},sidebar:"docsSidebar",previous:{title:"Security Precautions",permalink:"/docs/Problems And Solutions/2.5-Security"},next:{title:"Creation",permalink:"/docs/Secure Data/3.2-Create"}},c={},d=[{value:"3.1 Data Format and Sequence",id:"31-data-format-and-sequence",level:2},{value:"3.1.1 Data Relationship Diagram",id:"311-data-relationship-diagram",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"31-data-format-and-sequence",children:"3.1 Data Format and Sequence"}),"\n",(0,a.jsx)(t.p,{children:"The format and sequence of data on the blockchain are established as follows."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Public Key HASH, Plain Data Hash, Data, Signature, Note Annotation\n"})}),"\n",(0,a.jsx)(t.p,{children:"The breakdown is as follows:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"data0: Public Key HASH, representing the HASH160 of the account public key of the owner."}),"\n",(0,a.jsxs)(t.li,{children:["data1: Plain HASH","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"For encrypted messages, this is the SHA256 hash of the plaintext."}),"\n",(0,a.jsx)(t.li,{children:"For public data, this is 0x00."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"data2: Either plaintext or ciphertext, with the data being either encrypted or publicly accessible. Original data is encoded using the Msgpack protocol, ensuring keys are sorted (sortKeys=true)."}),"\n",(0,a.jsx)(t.li,{children:"data3: Signature, which is generated by the owner's account private key signing the plain HASH. The signature can be authenticated using the owner's account public key. The signing method adheres to the Bitcoin Message standard. If a transaction's public key signature is provided, this field is 0x00; otherwise, a signature is mandatory."}),"\n",(0,a.jsxs)(t.li,{children:["data4: Specifies the data's format","\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"An 8-byte integer, 0x00, denotes encryption with the owner's account public key."}),"\n",(0,a.jsx)(t.li,{children:"A 1-byte integer, 0x01, signifies the data is unencrypted."}),"\n",(0,a.jsx)(t.li,{children:"An 8-byte integer, within the range of 16 to 2^53 - 16, indicates encryption with the data encryption public key."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"NOTE: A protocol identifier, always in uppercase."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"311-data-relationship-diagram",children:"3.1.1 Data Relationship Diagram"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"data",src:n(9689).A+"",width:"2282",height:"1244"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},9689:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/data_zh-edbf493ea5d97b4ea91c2e33c01f75d8.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(6540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);