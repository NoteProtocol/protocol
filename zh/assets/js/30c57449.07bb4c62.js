"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[2866],{111:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"tutorial/quick-start","title":"\u5feb\u901f\u5f00\u59cb","description":"1. \u5b89\u88c5\u5f00\u53d1\u73af\u5883","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorial/02_quick-start.md","sourceDirName":"tutorial","slug":"/tutorial/quick-start","permalink":"/zh/docs/tutorial/quick-start","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u5f00\u53d1\u6307\u5357","permalink":"/zh/docs/tutorial/basic"},"next":{"title":"\u5408\u7ea6\u5f00\u53d1","permalink":"/zh/docs/tutorial/develop"}}');var c=t(6070),a=t(6599);const l={},r="\u5feb\u901f\u5f00\u59cb",o={},i=[{value:"1. \u5b89\u88c5\u5f00\u53d1\u73af\u5883",id:"1-\u5b89\u88c5\u5f00\u53d1\u73af\u5883",level:2},{value:"1.1 \u5b89\u88c5 Node.js",id:"11-\u5b89\u88c5-nodejs",level:3},{value:"1.2 \u514b\u9686\u6a21\u7248\u9879\u76ee",id:"12-\u514b\u9686\u6a21\u7248\u9879\u76ee",level:3},{value:"2. \u521b\u5efa\u548c\u6d4b\u8bd5\u667a\u80fd\u5408\u7ea6",id:"2-\u521b\u5efa\u548c\u6d4b\u8bd5\u667a\u80fd\u5408\u7ea6",level:2},{value:"2.1 \u4f7f\u7528VSCode\uff0c\u521b\u5efa\u7f16\u5199\u81ea\u5df1\u7684\u5408\u7ea6\u6587\u4ef6",id:"21-\u4f7f\u7528vscode\u521b\u5efa\u7f16\u5199\u81ea\u5df1\u7684\u5408\u7ea6\u6587\u4ef6",level:3},{value:"2.2 \u5728tests\u76ee\u5f55\u521b\u5efa\u5408\u7ea6\u7684\u6d4b\u8bd5\u4ee3\u7801",id:"22-\u5728tests\u76ee\u5f55\u521b\u5efa\u5408\u7ea6\u7684\u6d4b\u8bd5\u4ee3\u7801",level:3},{value:"2.3 \u7f16\u8bd1\u5e76\u4e14\u8fd0\u884c\u6d4b\u8bd5\u4ee3\u7801",id:"23-\u7f16\u8bd1\u5e76\u4e14\u8fd0\u884c\u6d4b\u8bd5\u4ee3\u7801",level:3},{value:"3. \u53d1\u5e03\u667a\u80fd\u5408\u7ea6",id:"3-\u53d1\u5e03\u667a\u80fd\u5408\u7ea6",level:2},{value:"3.1 \u51c6\u5907\u94b1\u5305",id:"31-\u51c6\u5907\u94b1\u5305",level:3},{value:"3.2 \u51c6\u5907\u53d1\u5e03\u5408\u7ea6",id:"32-\u51c6\u5907\u53d1\u5e03\u5408\u7ea6",level:3},{value:"3.3 \u521b\u5efa\u5408\u7ea6\u53d1\u5e03\u4ee3\u7801",id:"33-\u521b\u5efa\u5408\u7ea6\u53d1\u5e03\u4ee3\u7801",level:3},{value:"3.4 \u53d1\u5e03\u5408\u7ea6\u4ee3\u7801",id:"34-\u53d1\u5e03\u5408\u7ea6\u4ee3\u7801",level:3},{value:"4. \u90e8\u7f72N20 Token",id:"4-\u90e8\u7f72n20-token",level:2},{value:"4.1 \u7f16\u5199Token\u90e8\u7f72\u4ee3\u7801",id:"41-\u7f16\u5199token\u90e8\u7f72\u4ee3\u7801",level:3},{value:"4.2 \u8d44\u4ea7\u53d1\u884c",id:"42-\u8d44\u4ea7\u53d1\u884c",level:3},{value:"4.3 \u8d44\u4ea7\u8f6c\u8d26",id:"43-\u8d44\u4ea7\u8f6c\u8d26",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"})}),"\n",(0,c.jsx)(e.h2,{id:"1-\u5b89\u88c5\u5f00\u53d1\u73af\u5883",children:"1. \u5b89\u88c5\u5f00\u53d1\u73af\u5883"}),"\n",(0,c.jsx)(e.h3,{id:"11-\u5b89\u88c5-nodejs",children:"1.1 \u5b89\u88c5 Node.js"}),"\n",(0,c.jsx)(e.p,{children:"\u4e0b\u8f7d\u5e76\u5b89\u88c5 Node.js"}),"\n",(0,c.jsx)(e.p,{children:"\u9a8c\u8bc1\u5b89\u88c5\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"node -v\nnpm -v\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u53ef\u9009\u62e9\u5b89\u88c5pnpm"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"npm install -g pnpm\npnpm -v\n"})}),"\n",(0,c.jsx)(e.h3,{id:"12-\u514b\u9686\u6a21\u7248\u9879\u76ee",children:"1.2 \u514b\u9686\u6a21\u7248\u9879\u76ee"}),"\n",(0,c.jsx)(e.p,{children:"\u514b\u9686\u6a21\u7248\u9879\u76ee\uff0c\u5b89\u88c5\u4f9d\u8d56\uff0c\u8fd0\u884c\u6d4b\u8bd5\u4ee3\u7801\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/NoteProtocol/note-contract.git\ncd note-contract\nnpm i\nnpm test\n"})}),"\n",(0,c.jsx)(e.h2,{id:"2-\u521b\u5efa\u548c\u6d4b\u8bd5\u667a\u80fd\u5408\u7ea6",children:"2. \u521b\u5efa\u548c\u6d4b\u8bd5\u667a\u80fd\u5408\u7ea6"}),"\n",(0,c.jsx)(e.h3,{id:"21-\u4f7f\u7528vscode\u521b\u5efa\u7f16\u5199\u81ea\u5df1\u7684\u5408\u7ea6\u6587\u4ef6",children:"2.1 \u4f7f\u7528VSCode\uff0c\u521b\u5efa\u7f16\u5199\u81ea\u5df1\u7684\u5408\u7ea6\u6587\u4ef6"}),"\n",(0,c.jsx)(e.p,{children:"\u5728 src/contacts \u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u667a\u80fd\u5408\u7ea6\u6587\u4ef6 MyFirstContract.ts"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"import { assert, ByteString, method, prop, SmartContract } from 'scrypt-ts'\n\nexport class MyFirstContract extends SmartContract {\n    @prop()\n    readonly tick: ByteString\n\n    @prop()\n    readonly max: bigint\n\n    @prop()\n    readonly lim: bigint\n\n    @prop()\n    readonly dec: bigint\n\n    constructor(tick: ByteString, max: bigint, lim: bigint, dec: bigint) {\n        super(...arguments)\n        this.tick = tick\n        this.max = max\n        this.lim = lim\n        this.dec = dec\n    }\n\n    @method()\n    public mint(tick: ByteString, amt: bigint, total: bigint) {\n        assert(this.max == 0n || total <= this.max, 'Over max')\n        assert(tick == this.tick, 'Tick does not match')\n        assert(amt <= this.lim, 'Amount check failed')\n    }\n\n    @method()\n    public transfer(tick: ByteString) {\n        assert(tick == this.tick, 'Tick does not match')\n    }\n}\n\n"})}),"\n",(0,c.jsx)(e.h3,{id:"22-\u5728tests\u76ee\u5f55\u521b\u5efa\u5408\u7ea6\u7684\u6d4b\u8bd5\u4ee3\u7801",children:"2.2 \u5728tests\u76ee\u5f55\u521b\u5efa\u5408\u7ea6\u7684\u6d4b\u8bd5\u4ee3\u7801"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"\nimport { expect, use } from 'chai'\nimport { toByteString } from 'scrypt-ts'\nimport { MyFirstContract } from '../src/contracts/MyFirstContract'\nimport { getDefaultSigner } from './utils/txHelper'\nimport chaiAsPromised from 'chai-as-promised'\nuse(chaiAsPromised)\n\nimport { stringToBytes } from 'scryptlib'\nimport { offlineVerify } from 'scrypt-verify'\nimport simpleJson from '../artifacts/MyFirstContract.json'\n\ndescribe('Test SmartContract `MyFirstContract`', () => {\n    let instance: MyFirstContract\n\n    before(async () => {\n        await MyFirstContract.loadArtifact()\n\n        instance = new MyFirstContract(toByteString('NOTE', true), 21000000n * 10n ** 8n, 1000n * 10n ** 8n, 8n)\n\n        await instance.connect(getDefaultSigner())\n    })\n\n    it('should offline verify', async () => {\n        const dataMap = {\n            constructor: {\n                tick: stringToBytes('NOTE'),\n                max: 21000000n * 10n ** 8n,\n                lim: 1000n * 10n ** 8n,\n                dec: 8n,\n            },\n            mint: { tick: stringToBytes('NOTE'), amt: 1000n * 10n ** 8n, total: 5000n * 10n ** 8n },\n            transfer: { tick: stringToBytes('NOTE'), amt: 1000n * 10n ** 8n },\n        }\n\n        const result = offlineVerify(simpleJson, dataMap, 'mint')\n        console.log('\ud83d\ude80 ~ result:', result)\n        expect(result.success).is.true\n    })\n\n    it('should pass the public method unit test successfully.', async () => {\n        const deployTx = await instance.deploy(1)\n\n        const call = async () => {\n            const callRes = await instance.methods.mint(toByteString('NOTE', true), 1000n * 10n ** 8n, 5000n * 10n ** 8n)\n        }\n        await expect(call()).not.to.be.rejected\n    })\n\n    it('should throw with Tick does not match message.', async () => {\n        await instance.deploy(1)\n\n        const call = async () => instance.methods.mint(toByteString('AAAA', true), 1000n * 10n ** 8n, 5000n * 10n ** 8n)\n        await expect(call()).to.be.rejectedWith(/Tick does not match/)\n    })\n\n    it('should throw with Amount check failed message.', async () => {\n        await instance.deploy(1)\n\n        const call = async () => instance.methods.mint(toByteString('NOTE', true), 1001n * 10n ** 8n, 5000n * 10n ** 8n)\n        await expect(call()).to.be.rejectedWith(/Amount check failed/)\n    })\n})\n\n\n"})}),"\n",(0,c.jsx)(e.h3,{id:"23-\u7f16\u8bd1\u5e76\u4e14\u8fd0\u884c\u6d4b\u8bd5\u4ee3\u7801",children:"2.3 \u7f16\u8bd1\u5e76\u4e14\u8fd0\u884c\u6d4b\u8bd5\u4ee3\u7801"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"npm run compile\nnpm test\n"})}),"\n",(0,c.jsx)(e.h2,{id:"3-\u53d1\u5e03\u667a\u80fd\u5408\u7ea6",children:"3. \u53d1\u5e03\u667a\u80fd\u5408\u7ea6"}),"\n",(0,c.jsx)(e.h3,{id:"31-\u51c6\u5907\u94b1\u5305",children:"3.1 \u51c6\u5907\u94b1\u5305"}),"\n",(0,c.jsx)(e.p,{children:"\u4e0b\u8f7d\u6216\u8005clone\u5f00\u6e90\u547d\u4ee4\u884cNoteWallet\u94b1\u5305"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/NoteProtocol/NoteWallet\ncd NoteWallet\npnpm install\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u8fd0\u884c\u94b1\u5305\uff0c\u9009\u62e9\u6d4b\u8bd5\u7f51\uff0c\u8f93\u5165info\u547d\u4ee4\uff0c\u67e5\u770b\u81ea\u52a8\u751f\u6210\u7684\u52a9\u8bb0\u8bcd\uff0c\u5907\u4efd\u52a9\u8bb0\u8bcd\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"pnpm start\nuse BTCtestnet\ninfo\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u590d\u5236",(0,c.jsx)(e.code,{children:".env.example"}),"\u6587\u4ef6\u4e3a",(0,c.jsx)(e.code,{children:".env"}),"\u6587\u4ef6\uff0c\u5e76\u4fee\u6539\u91cc\u9762\u7684",(0,c.jsx)(e.code,{children:"WALLET_MNEMONIC"}),"\uff0c\u6dfb\u52a0\u5907\u4efd\u7684\u52a9\u8bb0\u8bcd\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u8f93\u5165",(0,c.jsx)(e.code,{children:"info"}),"\u547d\u4ee4\u67e5\u770b\u94b1\u5305\u5730\u5740",(0,c.jsx)(e.code,{children:"mainAddress"}),"\uff0c\u53d1\u9001\u4e00\u90e8\u5206\u6d4b\u8bd5\u5e01\u8fdb\u5165\u94b1\u5305\u5730\u5740\u3002\u7136\u540e\u8f93\u5165",(0,c.jsx)(e.code,{children:"balance"}),"\u547d\u4ee4\u67e5\u770b\u94b1\u5305\u4f59\u989d\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"[nodemon] starting `ts-node ./src/command-line.ts`\n[ 'BTClivenet', 'BTCtestnet' ]\n> use BTCtestnet\nuse BTCtestnet\nusing BTCtestnet wallet\n[ 'BTClivenet', 'BTCtestnet' ]\nBTCtestnet 0> balance\nbalance\nBalance: {\n  mainAddress: { confirmed: 0n, unconfirmed: 99466n },\n  tokenAddress: { confirmed: 0n, unconfirmed: 0n }\n}\n"})}),"\n",(0,c.jsx)(e.h3,{id:"32-\u51c6\u5907\u53d1\u5e03\u5408\u7ea6",children:"3.2 \u51c6\u5907\u53d1\u5e03\u5408\u7ea6"}),"\n",(0,c.jsx)(e.p,{children:"\u62f7\u8d1d\u7f16\u8bd1\u540e\u7684\u5408\u7ea6json\u6587\u4ef6\u5230\u547d\u4ee4\u884c\u94b1\u5305\u7684contracts\u76ee\u5f55\u4e0b\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"cp note-contratct/artifacts/MyFirstContract.json NoteWallet/src/contracts\n"})}),"\n",(0,c.jsx)(e.h3,{id:"33-\u521b\u5efa\u5408\u7ea6\u53d1\u5e03\u4ee3\u7801",children:"3.3 \u521b\u5efa\u5408\u7ea6\u53d1\u5e03\u4ee3\u7801"}),"\n",(0,c.jsxs)(e.p,{children:["\u53c2\u7167NoteWallet\u7684",(0,c.jsx)(e.code,{children:"publish.ts"}),"\u91cc\u7684\u4ee3\u7801\uff0c\u7f16\u5199\u81ea\u5df1\u7684\u53d1\u5e03\u4ee3\u7801\uff0c\u4fee\u6539\u53d1\u5e03\u51fd\u6570\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:'import myFirstContract from "./contracts/MyFirstContract.json";\n\nexport async function uploadMyFirstContract(wallet: Wallet) {\n  const json: Partial<any> = Object.assign({}, myFirstContract);\n  json.file && delete json.file;\n  json.sourceMapFile && delete json.sourceMapFile;\n  const payload = wallet.buildN20Payload(json, true);\n  const tx = await wallet.buildCommitPayloadTransaction(\n    payload,\n    wallet.currentAccount.mainAddress!.address!\n  );\n  return await wallet.broadcastTransaction(tx);\n}\n\n//Wrirte your smart contract upload function here\nexport async function publishSmartContract(wallet: Wallet) {\n  // Upload the smart contract\n  return await uploadMyFirstContract(wallet);\n}\n\n'})}),"\n",(0,c.jsx)(e.h3,{id:"34-\u53d1\u5e03\u5408\u7ea6\u4ee3\u7801",children:"3.4 \u53d1\u5e03\u5408\u7ea6\u4ee3\u7801"}),"\n",(0,c.jsx)(e.p,{children:"\u5728\u6bd4\u7279\u5e01\u6d4b\u8bd5\u7f51\u53d1\u5e03\u5408\u7ea6\u4ee3\u7801\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"BTCtestnet 0> publish\npublish\nSucceeded: https://testnet4.noteprotocol.org/transaction?txId=2c68cb601b218a452464f6dd6270bd950ccd6cb38cbc14f016679ad6056b25d8&blockchain=BTCtestnet\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5408\u7ea6\u4e00\u65e6\u53d1\u5e03,\u7b49\u5f85\u5408\u7ea6\u5185\u5bb9\u4e0a\u94fe\uff0c\u5927\u6982\u9700\u898110\u5206\u949f\u3002\u4e00\u65e6\u4e0a\u94fe\u5c06\u53ef\u4ee5\u5728\u533a\u5757\u94fe\u6d4f\u89c8\u5668\u4e0a\u770b\u5230\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://testnet4.noteprotocol.org/contract",children:"https://testnet4.noteprotocol.org/contract"})}),"\n",(0,c.jsx)(e.p,{children:"\u627e\u5230\u81ea\u5df1\u53d1\u5e03\u7684\u5408\u7ea6\uff0c\u62f7\u8d1d\u5408\u7ea6\u7684hash\u503c\uff0c\u4f8b\u5b50\u4ee3\u7801\u7684\u5408\u7ea6\u5730\u5740\u662f"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://testnet4.noteprotocol.org/contract/8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801",children:"https://testnet4.noteprotocol.org/contract/8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5176hash\u503c\u662f",(0,c.jsx)(e.code,{children:"8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801"})]}),"\n",(0,c.jsx)(e.admonition,{type:"note",children:(0,c.jsx)(e.p,{children:"\u6b64\u5904\u7684\u4f8b\u5b50\u4ee3\u7801\uff0c\u5df2\u7ecf\u53d1\u5e03\u6210\u529f\uff0c\u4e0d\u5fc5\u518d\u6b21\u53d1\u5e03\u540c\u6837\u7684\u5408\u7ea6\u4ee3\u7801\uff0c\u5426\u5219\u4f1a\u6d6a\u8d39\u8d44\u91d1\uff0c\u540c\u6837\u7684\u4ee3\u7801\u53ea\u9700\u8981\u53d1\u5e03\u4e00\u6b21\uff0c\u5728\u90e8\u7f72N20 Token\u65f6\u53ef\u4ee5\u53cd\u590d\u5229\u7528\u3002"})}),"\n",(0,c.jsx)(e.h2,{id:"4-\u90e8\u7f72n20-token",children:"4. \u90e8\u7f72N20 Token"}),"\n",(0,c.jsx)(e.h3,{id:"41-\u7f16\u5199token\u90e8\u7f72\u4ee3\u7801",children:"4.1 \u7f16\u5199Token\u90e8\u7f72\u4ee3\u7801"}),"\n",(0,c.jsx)(e.p,{children:"\u4e00\u4e2aToken\u4f7f\u7528\u5408\u7ea6\u7684hash\u503c\u6784\u9020Payload\u7ed3\u6784\uff0c\u8fdb\u884c\u5e7f\u64ad\uff0c\u5f85\u88ab\u7d22\u5f15\u5668\u63a5\u53d7\u4ee5\u540e\uff0c\u65e2\u53ef\u4ee5\u8fdb\u884c\u6316\u77ff\u7b49\u64cd\u4f5c\u3002\n\u9996\u5148\u67e5\u770bNoteWallet\u94b1\u5305\u7684mint.ts\u4ee3\u7801\uff0c\u7406\u89e3deploy\u51fd\u6570\uff0c\u7f16\u5199\u81ea\u5df1\u7684deploy\u51fd\u6570\u3002\u6bd4\u5982"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:'const tick = "MyFirstToken";\n\nconst deployData: IDeployN20Data = {\n  p: "n20",\n  op: "deploy",\n  tick,\n  max: 2100n * 10000n * 10n ** 8n,//2100\u4e07\u4e2a\n  lim: 5000n * 10n ** 8n,//\u6bcf\u6b21\u53ef\u4ee5\u63165000\n  dec: 8,//8\u4f4d\u5c0f\u6570\n  sch: "8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801",//\u5408\u7ea6\u7684hash\u503c\n};\n\nexport async function deployMyFirstContract(wallet: Wallet) {\n  const toAddress = wallet.currentAccount.mainAddress!.address!;\n\n  const tx = await wallet.buildCommitPayloadTransaction(\n    wallet.buildN20Payload(deployData),\n    toAddress\n  );\n  const result = await wallet.broadcastTransaction(tx);\n  return {success: true, result};\n}\n\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u4fee\u6539",(0,c.jsx)(e.code,{children:"command-line.ts"}),"\u7684deploy\u547d\u4ee4\uff0c\u4f7f\u7528\u547d\u4ee4\u884c\u90e8\u7f72Token"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:'      .command(\n        "deploy",\n        "Deploy N20 Token",\n        (yargs) => {},\n        async (argv) => {\n          if (!this.currentWallet) {\n            console.log("No wallet selected");\n            return;\n          }\n          //\u4fee\u6539\u6b64\u5904\n          const {result} = await deployMyFirstContract(this.currentWallet);\n          if (result.success) {\n            console.log(\n              "Succeeded:",\n              interpolate(this.currentWallet.explorer!.tx, {\n                txId: result.txId,\n              })\n            );\n          } else {\n            console.log(result.error);\n          }\n        }\n      )\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u8f93\u5165",(0,c.jsx)(e.code,{children:"deploy"}),"\u547d\u4ee4\u8fdb\u884c\u90e8\u7f72"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"BTCtestnet 0> deploy\ndeploy\nSucceeded: https://testnet4.noteprotocol.org/transaction?txId=5a6d4cf0ab92943bce10358b417aa3dec2406d5c0ffa3409bde6fd27f85dadd7&blockchain=BTCtestnet\n"})}),"\n",(0,c.jsx)(e.h3,{id:"42-\u8d44\u4ea7\u53d1\u884c",children:"4.2 \u8d44\u4ea7\u53d1\u884c"}),"\n",(0,c.jsx)(e.p,{children:"\u5728Token\u90e8\u7f72\u4e4b\u540e\uff0c\u53ef\u4ee5\u5bf9\u81ea\u5df1\u53d1\u884c\u7684Token\u8fdb\u884c\u8d44\u4ea7\u53d1\u884c\uff0c\u4e5f\u5c31\u662f\u5e38\u8bf4\u7684\u6316\u77ff\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u7f16\u5199mint\u51fd\u6570\uff0c\u4f8b\u5b50\u4ee3\u7801\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"\nexport async function mintMyFirstToken(wallet: Wallet) {\n  const toAddress = wallet.currentAccount.tokenAddress!.address!;\n\n  const tx = await wallet.buildN20PayloadTransaction(\n    wallet.buildN20Payload(mintData),\n    toAddress\n  );\n  const result = await wallet.broadcastTransaction(tx);\n  return {success: true, result};\n}\n\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4fee\u6539",(0,c.jsx)(e.code,{children:"command-line.ts"}),"\u7684mint\u547d\u4ee4\uff0c\u4f7f\u7528\u547d\u4ee4\u884c\u8fdb\u884c\u6316\u77ff"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:'      .command(\n        "mint",\n        "Mint N20 Token",\n        (yargs) => {},\n        async (argv) => {\n          if (!this.currentWallet) {\n            console.log("No wallet selected");\n            return;\n          }\n          //\u4fee\u6539\u6b64\u5904\n          const {result} = await mintMyFirstToken(this.currentWallet);\n          if (result.success) {\n            console.log(\n              "Succeeded:",\n              interpolate(this.currentWallet.explorer!.tx, {\n                txId: result.txId,\n              })\n            );\n          } else {\n            console.log(result.error);\n          }\n        }\n      )\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u8f93\u5165",(0,c.jsx)(e.code,{children:"mint"}),"\u547d\u4ee4\u8fdb\u884c\u6316\u77ff"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"BTCtestnet 0> mint\nmint\nSucceeded: https://testnet4.noteprotocol.org/transaction?txId=03011457f15ac907edf800b2a269414dda806d2025e0602700caeb429ade8364&blockchain=BTCtestnet\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u8f93\u5165",(0,c.jsx)(e.code,{children:"tokenlist"}),"\u547d\u4ee4\u67e5\u770b\u4f59\u989d"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"BTCtestnet 0> tokenlist\ntokenlist\nToken Balance: [\n  {\n    tick: 'MyFirstToken',\n    confirmed: '0',\n    unconfirmed: '500000000000',\n    scriptHash: '3da74c9a4214d040149412a4644723e6268c169729d3b58e312bcae3e0eeea13',\n    dec: 8,\n    p: 'n20'\n  }\n]\n"})}),"\n",(0,c.jsx)(e.h3,{id:"43-\u8d44\u4ea7\u8f6c\u8d26",children:"4.3 \u8d44\u4ea7\u8f6c\u8d26"}),"\n",(0,c.jsxs)(e.p,{children:["\u8f93\u5165sendtoken\u547d\u4ee4\u8fdb\u884c\u8d44\u4ea7\u8f6c\u8d26\uff0c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u7ed9\u5730\u5740",(0,c.jsx)(e.code,{children:"tb1ptnku9z4yqxkvn2syfxgh32pjlu0p5nuytu2jvmm0cmktjes6sptsdwxmkx"}),"\u8f6c\u8d261000\u4e2aMyFirstToken\uff0c\u5c0f\u6570\u4f4d\u6570\u662f8\u4e2a\u96f6\uff0c\u6240\u4ee5\u6700\u540e\u7684\u6570\u91cf\u662f",(0,c.jsx)(e.code,{children:"1000*10**8=100000000000"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"BTCtestnet 0> sendtoken tb1ptnku9z4yqxkvn2syfxgh32pjlu0p5nuytu2jvmm0cmktjes6sptsdwxmkx MyFirstToken 100000000000\nSucceeded: https://testnet4.noteprotocol.org/transaction?txId=dee12db0c3363720ff86aecebdbf8a013b4b31548e807b4f3e8e6ee36d030da7&blockchain=BTCtestnet\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,c.jsx)(e.p,{children:"\u901a\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u6211\u4eec\u5b8c\u6210\u4e86"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"\u5408\u7ea6\u7f16\u5199\u548c\u6d4b\u8bd5"}),"\n",(0,c.jsx)(e.li,{children:"\u5408\u7ea6\u53d1\u5e03"}),"\n",(0,c.jsx)(e.li,{children:"N20 Token\u7684\u90e8\u7f72"}),"\n",(0,c.jsx)(e.li,{children:"\u8d44\u4ea7\u53d1\u884c(\u6316\u77ff)"}),"\n",(0,c.jsx)(e.li,{children:"\u8d44\u4ea7\u8f6c\u8d26"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u5b66\u4e60Note Protocol\u7684\u6280\u672f\u539f\u7406\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},6599:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>r});var s=t(758);const c={},a=s.createContext(c);function l(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);