"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[3497],{5404:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=e(6070),c=e(5710);const r={title:"",sidebar_position:4.1,sidebar_label:"Off-chain Smart Contracts"},o=void 0,s={id:"protocol/Token/4.1-OffchainContracts",title:"",description:"4.1 Off-chain Smart Contracts",source:"@site/docs/protocol/04-Token/4.1-OffchainContracts.md",sourceDirName:"protocol/04-Token",slug:"/protocol/Token/4.1-OffchainContracts",permalink:"/docs/protocol/Token/4.1-OffchainContracts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4.1,frontMatter:{title:"",sidebar_position:4.1,sidebar_label:"Off-chain Smart Contracts"},sidebar:"docsSidebar",previous:{title:"Token",permalink:"/docs/protocol/Token/4.0-Token"},next:{title:"Data Storage",permalink:"/docs/protocol/Token/4.2-Data"}},a={},l=[{value:"4.1 Off-chain Smart Contracts",id:"41-off-chain-smart-contracts",level:2},{value:"Contract Runtime",id:"contract-runtime",level:3}];function h(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"41-off-chain-smart-contracts",children:"4.1 Off-chain Smart Contracts"}),"\n",(0,i.jsx)(t.p,{children:"The smart contracts are written in Bitcoin's advanced smart contract language provided by sCrypt, ensuring that the index validator completes execution within a limited time. Additionally, it supports advanced use cases including Swaps, Oracles, and Zero-Knowledge Proofs."}),"\n",(0,i.jsx)(t.p,{children:"Here is a simple example of an off-chain contract:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"export class N20_Sample extends SmartContract {\n    @prop()\n    readonly tick: ByteString\n\n    @prop()\n    readonly max: bigint\n\n    @prop()\n    readonly lim: bigint\n\n    @prop()\n    readonly dec: bigint\n\n    constructor(tick: ByteString, max: bigint, lim: bigint, dec: bigint) {\n        super(...arguments)\n        this.tick = tick\n        this.max = max\n        this.lim = lim\n        this.dec = dec\n    }\n\n    @method()\n    public mint(tick: ByteString, amt: bigint) {\n        assert(tick == this.tick, 'Tick does not match')\n        assert(amt <= this.lim, 'Amount check failed')\n    }\n\n    @method()\n    public transfer(tick: ByteString, amt: bigint) {\n        assert(tick == this.tick, 'Tick does not match')\n        assert(amt <= this.lim, 'Amount check failed')\n    }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"mint"})," and ",(0,i.jsx)(t.code,{children:"transfer"})," functions validate whether the two actions of N20 can be executed. Only after the operations pass contract validation will the indexer record changes in the account balances."]}),"\n",(0,i.jsx)(t.h3,{id:"contract-runtime",children:"Contract Runtime"}),"\n",(0,i.jsx)(t.p,{children:"During the runtime of the smart contract, the indexer provides constants and environmental variables as follows:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"account"}),": ByteString, the initiator's ID (ScriptHash unlocking the UTXO)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"inputSatoshis"}),": bigint, the satoshis of the current input (Satoshi amount unlocking the UTXO)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"height"}),": bigint, current height; when the transaction is unconfirmed, it is the latest height plus 6"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"blockHash"}),": ByteString, the hash of the current block, empty string when unconfirmed"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"blockTime"}),": bigint, the timestamp of the current block, 0 when unconfirmed"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"indexInBlock"}),": bigint, the index of the current transaction in the block, 0 when unconfirmed"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"indexInChain"}),": bigint, the index of the current transaction in the chain, 0 when unconfirmed"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"tx"}),": ByteString, the HEX of the current transaction"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"txId"}),": ByteString, the ID of the current transaction"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"version"}),": bigint, the version number of the current transaction, typically 2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"nLockTime"}),": bigint, the nLockTime of the current transaction"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"inputs"}),": array of current transaction inputs, each input includes:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"prevTxId"}),": ByteString, the ID of the previous transaction"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"outputIndex"}),": bigint, the output index of the previous transaction"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"sequenceNumber"}),": bigint, the unlocking sequenceNumber"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"outputs"}),": array of current transaction outputs, each output includes:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"script"}),": ByteString, the script of the output"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"satoshis"}),": bigint, the satoshis of the output"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:t}={...(0,c.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},5710:(n,t,e)=>{e.d(t,{R:()=>o,x:()=>s});var i=e(758);const c={},r=i.createContext(c);function o(n){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);