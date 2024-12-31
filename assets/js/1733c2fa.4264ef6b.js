"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[9525],{9606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"protocol/Secure Data/3.1-Format","title":"","description":"3.1 Data Format and Sequence","source":"@site/docs/protocol/03-Secure Data/3.1-Format.md","sourceDirName":"protocol/03-Secure Data","slug":"/protocol/Secure Data/3.1-Format","permalink":"/docs/protocol/Secure Data/3.1-Format","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3.1,"frontMatter":{"title":"","sidebar_position":3.1,"sidebar_label":"Format and Sequence"},"sidebar":"docsSidebar","previous":{"title":"Security Precautions","permalink":"/docs/protocol/Problems And Solutions/2.5-Security"},"next":{"title":"Creation","permalink":"/docs/protocol/Secure Data/3.2-Create"}}');var i=n(6070),r=n(6599);const o={title:"",sidebar_position:3.1,sidebar_label:"Format and Sequence"},s=void 0,c={},l=[{value:"3.1 Data Format and Sequence",id:"31-data-format-and-sequence",level:2},{value:"3.1.1 Data Relationship Diagram",id:"311-data-relationship-diagram",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"31-data-format-and-sequence",children:"3.1 Data Format and Sequence"}),"\n",(0,i.jsx)(t.p,{children:"The format and sequence of data on the blockchain are established as follows."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"Public Key HASH, Plain Data Hash, Data, Signature, Note Annotation\n"})}),"\n",(0,i.jsx)(t.p,{children:"The breakdown is as follows:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"data0: Public Key HASH, representing the HASH160 of the account public key of the owner."}),"\n",(0,i.jsxs)(t.li,{children:["data1: Plain HASH","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"For encrypted messages, this is the SHA256 hash of the plaintext."}),"\n",(0,i.jsx)(t.li,{children:"For public data, this is 0x00."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"data2: Either plaintext or ciphertext, with the data being either encrypted or publicly accessible. Original data is encoded using the Msgpack protocol, ensuring keys are sorted (sortKeys=true)."}),"\n",(0,i.jsx)(t.li,{children:"data3: Signature, which is generated by the owner's account private key signing the plain HASH. The signature can be authenticated using the owner's account public key. The signing method adheres to the Bitcoin Message standard. If a transaction's public key signature is provided, this field is 0x00; otherwise, a signature is mandatory."}),"\n",(0,i.jsxs)(t.li,{children:["data4: Specifies the data's format","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"An 8-byte integer, 0x00, denotes encryption with the owner's account public key."}),"\n",(0,i.jsx)(t.li,{children:"A 1-byte integer, 0x01, signifies the data is unencrypted."}),"\n",(0,i.jsx)(t.li,{children:"An 8-byte integer, within the range of 16 to 2^53 - 16, indicates encryption with the data encryption public key."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"NOTE: A protocol identifier, always in uppercase."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"311-data-relationship-diagram",children:"3.1.1 Data Relationship Diagram"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"data",src:n(5005).A+"",width:"2282",height:"1244"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5005:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/data_en-5a9d47a4bcdbbdff6aa27e41f282ba9c.png"},6599:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(758);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);