"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[2231],{5471:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var i=n(6070),o=n(5710);const a={slug:"n20-upgrade",title:"Continuous Upgrades to the NOTE Protocol",tags:["NoteProtocol"]},s=void 0,r={permalink:"/blog/n20-upgrade",source:"@site/blog/2024-04-04-upgrade-n20.md",title:"Continuous Upgrades to the NOTE Protocol",description:"Since the public release of its Proof of Concept indexer in February 2024, the NOTE protocol has garnered widespread attention. Following feedback and demands from users, the protocol has been continuously upgraded.",date:"2024-04-04T00:00:00.000Z",tags:[{inline:!0,label:"NoteProtocol",permalink:"/blog/tags/note-protocol"}],readingTime:5.235,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"n20-upgrade",title:"Continuous Upgrades to the NOTE Protocol",tags:["NoteProtocol"]},unlisted:!1,nextItem:{title:"N20 Token protocol draft is out",permalink:"/blog/n20-draft"}},c={authorsImageUrls:[]},h=[];function l(t){const e={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Since the public release of its Proof of Concept indexer in February 2024, the NOTE protocol has garnered widespread attention. Following feedback and demands from users, the protocol has been continuously upgraded."}),"\n",(0,i.jsx)(e.p,{children:"As of April 4th, the following upgrades have been implemented:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"The Payload data area has been fully expanded, meaning that Payload data can now be stored either in the unlocking script or in the redemption script."}),"\n",(0,i.jsx)(e.li,{children:"Added a Burn method to N20. Tokens can now be burned."}),"\n",(0,i.jsx)(e.li,{children:"The off-chain contract execution environment has been enriched with a plethora of environmental variables, including block information such as block time, block hash, block height, as well as transaction information like transaction hash, all inputs and outputs. Ticker information, such as the total mint amount, etc., has also been included."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"The indexer code has undergone extensive refactoring."}),"\n",(0,i.jsx)(e.p,{children:"One of the goals of this upgrade is to enable anyone to participate in the development of NOTE smart contracts. This allows for the creation of unique smart contracts that can be published to the NOTE indexer, facilitating the issuance of digital assets. A comprehensive tutorial on contract creation is currently being developed."}),"\n",(0,i.jsxs)(e.p,{children:["The capabilities of the NOTE protocol can be seen in the ",(0,i.jsx)(e.a,{href:"https://github.com/NoteProtocol/scryptdemo/blob/main/src/contracts/n20-pow.ts",children:"POW mining contract"})," released in February."]}),"\n",(0,i.jsx)(e.p,{children:"We've added some comments to help everyone understand:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"// Each contract is a subclass of SmartContract, and its member variables are read-only and need to be decorated with @prop().\nexport class N20_Pow extends SmartContract {\n    @prop()\n    readonly tick: ByteString\n\n    @prop()\n    readonly max: bigint\n\n    @prop()\n    readonly lim: bigint\n\n    @prop()\n    readonly dec: bigint\n\n    @prop()\n    readonly bitwork: ByteString\n\n    @prop()\n    readonly start: bigint\n\n    // If the contract includes member variables, they need to be initialized using a constructor.\n    constructor(tick: ByteString, max: bigint, lim: bigint, dec: bigint, bitwork: ByteString, start: bigint) {\n        super(...arguments)\n        // The identifier of the digital asset, its name.\n        this.tick = tick\n        // The maximum issuance of the digital asset, if there is no limit, it can be specified as 0.\n        this.max = max\n        // The mining limit per transaction, it cannot exceed the maximum value.\n        this.lim = lim\n        // The decimal unit of the digital asset, for example, if dec=8, then 1 token should be followed by 8 zeros, all quantity values amt, including max and lim, are affected by this. 100000000 represents 1.00000000.\n        this.dec = dec\n        // Mining difficulty, the required leading characters of each transaction's hash256.\n        this.bitwork = bitwork \n        // The starting height of the mining contract, used to prevent pre-mining.\n        this.start = start\n    }\n\n    // The block limit algorithm for mining, needs to be decorated with @method().\n    @method()\n    getBlockLimit(height: bigint): bigint {\n        assert(height >= this.start, 'Block height is too low')\n        // Halving occurs every 1000 blocks, the number of halvings is determined by the block height minus the starting height.\n        let halvings = (height - this.start) / 1000n\n        // A maximum of 7 halvings.\n        halvings = halvings > 7n ? 7n : halvings\n        // The mining quantity limit is halved with each halving. Here, the binary rshift operator is used to perform the division by 2 operation.\n        const subsidy = rshift(this.lim, halvings)\n        return subsidy\n    }\n\n// The quantity limit algorithm for mining, needs to be decorated with @method().\n    @method()\n    getAmountLimit(currentMined: bigint): bigint {\n        // The quantity limit starts from how much of the total amount has already been mined.\n        let miningAmount = this.lim\n        let threshold = this.max / 2n\n\n        // Loop 7 times, each loop, if the current mined amount reaches the threshold, then the mining amount is halved, and the threshold is updated.\n        for (let halving = 0n; halving < 7n; halving++) {\n            if (currentMined >= threshold) {\n                miningAmount /= 2n // Halve the mining amount\n                threshold += rshift(this.max, halving + 2n) // Update the next threshold\n            }\n        }\n\n        return miningAmount\n    }\n\n    @method()\n    public mint(tick: ByteString, amt: bigint, total: bigint, height: bigint, tx: ByteString) {\n        // Check if the transaction's hash256 leading characters match the mining contract's difficulty requirement.\n        const txid = hash256(tx)\n        assert(slice(txid, 0n, len(this.bitwork)) == this.bitwork, 'not match target')\n        // Check if the total mining amount exceeds the maximum issuance.\n        assert(this.max == 0n || total <= this.max, 'Over max')\n        assert(tick == this.tick, 'Tick does not match')\n        // Check if the mining amount exceeds the block limit and the total halving limit.\n        const limit1 = this.getBlockLimit(height)\n        const limit2 = this.getAmountLimit(total)\n        const limit = limit1 > limit2 ? limit2 : limit1\n        assert(amt <= limit && amt <= this.max - total, 'Amount check failed')\n    }\n\n    // The method for transferring Tokens, needs to be decorated with @method().\n    @method()\n    public transfer(tick: ByteString) {\n        assert(tick == this.tick, 'Tick does not match')\n    }\n}\n\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"there is a bug in the above code about max=0. if you want to use it in your assets, please DONT set max=0."}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["This upgrade added the Burn method, allowing for the burning of Tokens. ",(0,i.jsx)(e.a,{href:"https://github.com/NoteProtocol/scryptdemo/blob/main/src/contracts/n20-joss.ts",children:"A new example"})," is as follows."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"// This example does not use a constructor but instead uses a static setting of parameters, because the values are entirely within the contract and cannot be reused for other digital assets.\nexport class N20_Joss extends SmartContract {\n    // Joss paper: A type of paper made to resemble money and burned in front of deities.\n    @prop()\n    static tick: ByteString = toByteString('JOSS', true)\n\n    // No issuance limit.\n    @prop()\n    static max: bigint = 0n\n\n    // Can issue 10,000 at a time.\n    @prop()\n    static lim: bigint = 10000n\n\n    // No decimal places.\n    @prop()\n    static dec: bigint = 0n\n\n    @method()\n    public mint(tick: ByteString, amt: bigint) {\n        assert(tick == N20_Joss.tick, 'Tick does not match')\n        // The issuance amount cannot exceed the limit of 10,000.\n        assert(amt == N20_Joss.lim, 'Limit does not match')\n    }\n\n    @method()\n    public transfer() {\n        // Cannot transfer.\n        assert(false)\n    }\n\n    @method()\n    public burn(tick: ByteString) {\n        // Can be burned.\n        assert(tick == N20_Joss.tick, 'Tick does not match')\n    }\n}\n\n"})}),"\n",(0,i.jsxs)(e.p,{children:["The N20_Joss contract was released at\n",(0,i.jsx)(e.a,{href:"https://mempool.space/tx/c2cda4c9da3a91bd245d9f6250b5ca8f2ec81d50c14821e87a033fde1f3b5561",children:"https://mempool.space/tx/c2cda4c9da3a91bd245d9f6250b5ca8f2ec81d50c14821e87a033fde1f3b5561"})]}),"\n",(0,i.jsx)(e.p,{children:"Support for smart contracts is the biggest difference between the NOTE protocol and other protocols. The NOTE wallet and indexer create an execution environment for smart contracts, allowing users to write their own smart contracts. For basic knowledge about smart contracts, you can refer to:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://scrypt.io/",children:"sCrypt"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://xiaohuiliu.medium.com/",children:"sCrypt Medium"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Why Bitcoin smart contracts are Turing complete:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://medium.com/coinmonks/turing-machine-on-bitcoin-7f0ebe0d52b1",children:"Turing Machines on Bitcoin"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"A tutorial on smart contract development for the NOTE protocol is being created, so stay tuned."})]})}function d(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}},5710:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>r});var i=n(758);const o={},a=i.createContext(o);function s(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);