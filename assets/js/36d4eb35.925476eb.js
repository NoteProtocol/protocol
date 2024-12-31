"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[2669],{4569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>i});const o=JSON.parse('{"id":"tutorial/quick-start","title":"","description":"1. Set Up Development Environment","source":"@site/docs/tutorial/02_quick-start.md","sourceDirName":"tutorial","slug":"/tutorial/quick-start","permalink":"/docs/tutorial/quick-start","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"","sidebar_position":2,"sidebar_label":"Quick Start"},"sidebar":"tutorialSidebar","previous":{"title":"Basic Concepts","permalink":"/docs/tutorial/basic"},"next":{"title":"Contract Development","permalink":"/docs/tutorial/develop"}}');var s=t(6070),c=t(6599);const a={title:"",sidebar_position:2,sidebar_label:"Quick Start"},r=void 0,l={},i=[{value:"1. Set Up Development Environment",id:"1-set-up-development-environment",level:2},{value:"1.1 Install Node.js",id:"11-install-nodejs",level:3},{value:"1.2 Clone the template project",id:"12-clone-the-template-project",level:3},{value:"2. Create and Test Smart Contracts",id:"2-create-and-test-smart-contracts",level:2},{value:"2.1 Use VSCode to create and write your own contract file",id:"21-use-vscode-to-create-and-write-your-own-contract-file",level:3},{value:"2.2 Create the test code for the contract in the tests directory.",id:"22-create-the-test-code-for-the-contract-in-the-tests-directory",level:3},{value:"2.3 Compile and run the test code.",id:"23-compile-and-run-the-test-code",level:3},{value:"3. Deploy Smart Contracts",id:"3-deploy-smart-contracts",level:2},{value:"3.1 Prepare Wallet",id:"31-prepare-wallet",level:3},{value:"3.2 Prepare to Deploy the Contract",id:"32-prepare-to-deploy-the-contract",level:3},{value:"3.3 Create Contract Deployment Code",id:"33-create-contract-deployment-code",level:3},{value:"3.4 Deploy Contract",id:"34-deploy-contract",level:3},{value:"4. Deploy N20 Token",id:"4-deploy-n20-token",level:2},{value:"4.1 Write Token Deployment Code",id:"41-write-token-deployment-code",level:3},{value:"4.2 Asset Issuance",id:"42-asset-issuance",level:3},{value:"4.3 Asset transfer",id:"43-asset-transfer",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"1-set-up-development-environment",children:"1. Set Up Development Environment"}),"\n",(0,s.jsx)(n.h3,{id:"11-install-nodejs",children:"1.1 Install Node.js"}),"\n",(0,s.jsx)(n.p,{children:"Download and install Node.js"}),"\n",(0,s.jsx)(n.p,{children:"Verify the installation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"node -v\nnpm -v\n"})}),"\n",(0,s.jsx)(n.p,{children:"Optionally, install pnpm"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install -g pnpm\npnpm -v\n"})}),"\n",(0,s.jsx)(n.h3,{id:"12-clone-the-template-project",children:"1.2 Clone the template project"}),"\n",(0,s.jsx)(n.p,{children:"Clone the template project, install dependencies, run the test code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NoteProtocol/note-contract.git\ncd note-contract\nnpm i\nnpm test\n"})}),"\n",(0,s.jsx)(n.h2,{id:"2-create-and-test-smart-contracts",children:"2. Create and Test Smart Contracts"}),"\n",(0,s.jsx)(n.h3,{id:"21-use-vscode-to-create-and-write-your-own-contract-file",children:"2.1 Use VSCode to create and write your own contract file"}),"\n",(0,s.jsx)(n.p,{children:"Create a new smart contract file named MyFirstContract.ts in the src/contracts directory."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { assert, ByteString, method, prop, SmartContract } from 'scrypt-ts'\n\nexport class MyFirstContract extends SmartContract {\n    @prop()\n    readonly tick: ByteString\n\n    @prop()\n    readonly max: bigint\n\n    @prop()\n    readonly lim: bigint\n\n    @prop()\n    readonly dec: bigint\n\n    constructor(tick: ByteString, max: bigint, lim: bigint, dec: bigint) {\n        super(...arguments)\n        this.tick = tick\n        this.max = max\n        this.lim = lim\n        this.dec = dec\n    }\n\n    @method()\n    public mint(tick: ByteString, amt: bigint, total: bigint) {\n        assert(this.max == 0n || total <= this.max, 'Over max')\n        assert(tick == this.tick, 'Tick does not match')\n        assert(amt <= this.lim, 'Amount check failed')\n    }\n\n    @method()\n    public transfer(tick: ByteString) {\n        assert(tick == this.tick, 'Tick does not match')\n    }\n}\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"22-create-the-test-code-for-the-contract-in-the-tests-directory",children:"2.2 Create the test code for the contract in the tests directory."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"\nimport { expect, use } from 'chai'\nimport { toByteString } from 'scrypt-ts'\nimport { MyFirstContract } from '../src/contracts/MyFirstContract'\nimport { getDefaultSigner } from './utils/txHelper'\nimport chaiAsPromised from 'chai-as-promised'\nuse(chaiAsPromised)\n\nimport { stringToBytes } from 'scryptlib'\nimport { offlineVerify } from 'scrypt-verify'\nimport simpleJson from '../artifacts/MyFirstContract.json'\n\ndescribe('Test SmartContract `MyFirstContract`', () => {\n    let instance: MyFirstContract\n\n    before(async () => {\n        await MyFirstContract.loadArtifact()\n\n        instance = new MyFirstContract(toByteString('NOTE', true), 21000000n * 10n ** 8n, 1000n * 10n ** 8n, 8n)\n\n        await instance.connect(getDefaultSigner())\n    })\n\n    it('should offline verify', async () => {\n        const dataMap = {\n            constructor: {\n                tick: stringToBytes('NOTE'),\n                max: 21000000n * 10n ** 8n,\n                lim: 1000n * 10n ** 8n,\n                dec: 8n,\n            },\n            mint: { tick: stringToBytes('NOTE'), amt: 1000n * 10n ** 8n, total: 5000n * 10n ** 8n },\n            transfer: { tick: stringToBytes('NOTE'), amt: 1000n * 10n ** 8n },\n        }\n\n        const result = offlineVerify(simpleJson, dataMap, 'mint')\n        console.log('\ud83d\ude80 ~ result:', result)\n        expect(result.success).is.true\n    })\n\n    it('should pass the public method unit test successfully.', async () => {\n        const deployTx = await instance.deploy(1)\n\n        const call = async () => {\n            const callRes = await instance.methods.mint(toByteString('NOTE', true), 1000n * 10n ** 8n, 5000n * 10n ** 8n)\n        }\n        await expect(call()).not.to.be.rejected\n    })\n\n    it('should throw with Tick does not match message.', async () => {\n        await instance.deploy(1)\n\n        const call = async () => instance.methods.mint(toByteString('AAAA', true), 1000n * 10n ** 8n, 5000n * 10n ** 8n)\n        await expect(call()).to.be.rejectedWith(/Tick does not match/)\n    })\n\n    it('should throw with Amount check failed message.', async () => {\n        await instance.deploy(1)\n\n        const call = async () => instance.methods.mint(toByteString('NOTE', true), 1001n * 10n ** 8n, 5000n * 10n ** 8n)\n        await expect(call()).to.be.rejectedWith(/Amount check failed/)\n    })\n})\n\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"23-compile-and-run-the-test-code",children:"2.3 Compile and run the test code."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run compile\nnpm test\n"})}),"\n",(0,s.jsx)(n.h2,{id:"3-deploy-smart-contracts",children:"3. Deploy Smart Contracts"}),"\n",(0,s.jsx)(n.h3,{id:"31-prepare-wallet",children:"3.1 Prepare Wallet"}),"\n",(0,s.jsx)(n.p,{children:"Download or clone the open-source command-line NoteWallet wallet."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NoteProtocol/NoteWallet\ncd NoteWallet\npnpm install\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Run the wallet, select the testnet, and enter the ",(0,s.jsx)(n.code,{children:"info"})," command to view the automatically generated mnemonic. Back up the mnemonic."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm start\nuse BTCtestnet\ninfo\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Copy the ",(0,s.jsx)(n.code,{children:".env.example"})," file to ",(0,s.jsx)(n.code,{children:".env"})," and modify the ",(0,s.jsx)(n.code,{children:"WALLET_MNEMONIC"})," inside, adding the backed-up mnemonic."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Enter the ",(0,s.jsx)(n.code,{children:"info"})," command to view the wallet address ",(0,s.jsx)(n.code,{children:"mainAddress"}),", send some test coins to the wallet address. Then enter the ",(0,s.jsx)(n.code,{children:"balance"})," command to check the wallet balance."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[nodemon] starting `ts-node ./src/command-line.ts`\n[ 'BTClivenet', 'BTCtestnet' ]\n> use BTCtestnet\nuse BTCtestnet\nusing BTCtestnet wallet\n[ 'BTClivenet', 'BTCtestnet' ]\nBTCtestnet 0> balance\nbalance\nBalance: {\n  mainAddress: { confirmed: 0n, unconfirmed: 99466n },\n  tokenAddress: { confirmed: 0n, unconfirmed: 0n }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-prepare-to-deploy-the-contract",children:"3.2 Prepare to Deploy the Contract"}),"\n",(0,s.jsx)(n.p,{children:"Copy the compiled contract JSON file to the contracts directory of the command-line wallet."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp note-contratct/artifacts/MyFirstContract.json NoteWallet/src/contracts\n"})}),"\n",(0,s.jsx)(n.h3,{id:"33-create-contract-deployment-code",children:"3.3 Create Contract Deployment Code"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the code in NoteWallet's ",(0,s.jsx)(n.code,{children:"publish.ts"})," and write your own deployment code, modifying the deployment function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import myFirstContract from "./contracts/MyFirstContract.json";\n\nexport async function uploadMyFirstContract(wallet: Wallet) {\n  const json: Partial<any> = Object.assign({}, myFirstContract);\n  json.file && delete json.file;\n  json.sourceMapFile && delete json.sourceMapFile;\n  const payload = wallet.buildN20Payload(json, true);\n  const tx = await wallet.buildCommitPayloadTransaction(\n    payload,\n    wallet.currentAccount.mainAddress!.address!\n  );\n  return await wallet.broadcastTransaction(tx);\n}\n\n//Wrirte your smart contract upload function here\nexport async function publishSmartContract(wallet: Wallet) {\n  // Upload the smart contract\n  return await uploadMyFirstContract(wallet);\n}\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"34-deploy-contract",children:"3.4 Deploy Contract"}),"\n",(0,s.jsx)(n.p,{children:"Deploy the contract code on the Bitcoin testnet."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BTCtestnet 0> publish\npublish\nSucceeded: https://testnet4.noteprotocol.org/transaction?txId=2c68cb601b218a452464f6dd6270bd950ccd6cb38cbc14f016679ad6056b25d8&blockchain=BTCtestnet\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once the contract is deployed, wait for the contract details to be recorded on the blockchain, which takes about 10 minutes. Once it is on the blockchain, it can be viewed on the blockchain explorer."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://testnet4.noteprotocol.org/contract",children:"https://testnet4.noteprotocol.org/contract"})}),"\n",(0,s.jsx)(n.p,{children:"Find your deployed contract and copy the contract's hash value. The example contract is"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://testnet4.noteprotocol.org/contract/8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801",children:"https://testnet4.noteprotocol.org/contract/8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801"})}),"\n",(0,s.jsxs)(n.p,{children:["Its hash value is ",(0,s.jsx)(n.code,{children:"8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"In this example, the code has already been successfully deployed, so there is no need to deploy the same contract code again, as it would waste funds. The same code only needs to be deployed once and can be reused when deploying N20 Tokens."})}),"\n",(0,s.jsx)(n.h2,{id:"4-deploy-n20-token",children:"4. Deploy N20 Token"}),"\n",(0,s.jsx)(n.h3,{id:"41-write-token-deployment-code",children:"4.1 Write Token Deployment Code"}),"\n",(0,s.jsx)(n.p,{children:"A token uses the contract's hash value to construct a Payload structure, which is then broadcasted. Once accepted by the indexer, mining and other operations can proceed. First, review the mint.ts code in the NoteWallet wallet to understand the deploy function, then write your own deploy function. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const tick = "MyFirstToken";\n\nconst deployData: IDeployN20Data = {\n  p: "n20",\n  op: "deploy",\n  tick,\n  max: 2100n * 10000n * 10n ** 8n,//21 million\n  lim: 5000n * 10n ** 8n,//5,000 can be mined each time.\n  dec: 8,//8 decimal places.\n  sch: "8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801",//The contract\'s hash value.\n};\n\nexport async function deployMyFirstContract(wallet: Wallet) {\n  const toAddress = wallet.currentAccount.mainAddress!.address!;\n\n  const tx = await wallet.buildCommitPayloadTransaction(\n    wallet.buildN20Payload(deployData),\n    toAddress\n  );\n  const result = await wallet.broadcastTransaction(tx);\n  return {success: true, result};\n}\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Modify the ",(0,s.jsx)(n.code,{children:"deploy"})," command in ",(0,s.jsx)(n.code,{children:"command-line.ts"})," to deploy the token using the command line."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'      .command(\n        "deploy",\n        "Deploy N20 Token",\n        (yargs) => {},\n        async (argv) => {\n          if (!this.currentWallet) {\n            console.log("No wallet selected");\n            return;\n          }\n          //Fix here\n          const {result} = await deployMyFirstContract(this.currentWallet);\n          if (result.success) {\n            console.log(\n              "Succeeded:",\n              interpolate(this.currentWallet.explorer!.tx, {\n                txId: result.txId,\n              })\n            );\n          } else {\n            console.log(result.error);\n          }\n        }\n      )\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Enter the ",(0,s.jsx)(n.code,{children:"deploy"})," command to deploy."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BTCtestnet 0> deploy\ndeploy\nSucceeded: https://testnet4.noteprotocol.org/transaction?txId=5a6d4cf0ab92943bce10358b417aa3dec2406d5c0ffa3409bde6fd27f85dadd7&blockchain=BTCtestnet\n"})}),"\n",(0,s.jsx)(n.h3,{id:"42-asset-issuance",children:"4.2 Asset Issuance"}),"\n",(0,s.jsx)(n.p,{children:"After deploying the token, you can proceed with asset issuance, commonly known as mining."}),"\n",(0,s.jsx)(n.p,{children:"Write the mint function, example code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"\nexport async function mintMyFirstToken(wallet: Wallet) {\n  const toAddress = wallet.currentAccount.tokenAddress!.address!;\n\n  const tx = await wallet.buildN20PayloadTransaction(\n    wallet.buildN20Payload(mintData),\n    toAddress\n  );\n  const result = await wallet.broadcastTransaction(tx);\n  return {success: true, result};\n}\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Modify the mint command in command-line.ts to perform mining using the command line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'      .command(\n        "mint",\n        "Mint N20 Token",\n        (yargs) => {},\n        async (argv) => {\n          if (!this.currentWallet) {\n            console.log("No wallet selected");\n            return;\n          }\n          //Fix here\n          const {result} = await mintMyFirstToken(this.currentWallet);\n          if (result.success) {\n            console.log(\n              "Succeeded:",\n              interpolate(this.currentWallet.explorer!.tx, {\n                txId: result.txId,\n              })\n            );\n          } else {\n            console.log(result.error);\n          }\n        }\n      )\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"mint"})," command to mine."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BTCtestnet 0> mint\nmint\nSucceeded: https://testnet4.noteprotocol.org/transaction?txId=03011457f15ac907edf800b2a269414dda806d2025e0602700caeb429ade8364&blockchain=BTCtestnet\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"tokenlist"})," command to check the balance."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BTCtestnet 0> tokenlist\ntokenlist\nToken Balance: [\n  {\n    tick: 'MyFirstToken',\n    confirmed: '0',\n    unconfirmed: '500000000000',\n    scriptHash: '3da74c9a4214d040149412a4644723e6268c169729d3b58e312bcae3e0eeea13',\n    dec: 8,\n    p: 'n20'\n  }\n]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"43-asset-transfer",children:"4.3 Asset transfer"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"sendtoken"})," command to perform an asset transfer. The following command will transfer 1000 MyFirstTokens to the address ",(0,s.jsx)(n.code,{children:"tb1ptnku9z4yqxkvn2syfxgh32pjlu0p5nuytu2jvmm0cmktjes6sptsdwxmkx"}),". With 8 decimal places, the final amount is ",(0,s.jsx)(n.code,{children:"1000*10**8=100000000000"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BTCtestnet 0> sendtoken tb1ptnku9z4yqxkvn2syfxgh32pjlu0p5nuytu2jvmm0cmktjes6sptsdwxmkx MyFirstToken 100000000000\nSucceeded: https://testnet4.noteprotocol.org/transaction?txId=dee12db0c3363720ff86aecebdbf8a013b4b31548e807b4f3e8e6ee36d030da7&blockchain=BTCtestnet\n"})}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"Through the above steps, we have completed:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Contract writing and testing"}),"\n",(0,s.jsx)(n.li,{children:"Contract deployment"}),"\n",(0,s.jsx)(n.li,{children:"N20 Token deployment"}),"\n",(0,s.jsx)(n.li,{children:"Asset issuance (mining)"}),"\n",(0,s.jsx)(n.li,{children:"Asset transfer"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Next, you can continue learning the technical principles of the Note Protocol."})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6599:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(758);const s={},c=o.createContext(s);function a(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);