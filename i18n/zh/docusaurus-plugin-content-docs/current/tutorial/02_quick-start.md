# 快速开始

## 1. 安装开发环境

### 1.1 安装 Node.js

下载并安装 Node.js

验证安装：

```bash
node -v
npm -v
```

可选择安装pnpm

```bash
npm install -g pnpm
pnpm -v
```

### 1.2 克隆模版项目

克隆模版项目，安装依赖，运行测试代码：

```bash
git clone https://github.com/NoteProtocol/note-contract.git
cd note-contract
npm i
npm test
```

## 2. 创建和测试智能合约

### 2.1 使用VSCode，创建编写自己的合约文件

在 src/contacts 目录下创建一个新的智能合约文件 MyFirstContract.ts

```ts
import { assert, ByteString, method, prop, SmartContract } from 'scrypt-ts'

export class MyFirstContract extends SmartContract {
    @prop()
    readonly tick: ByteString

    @prop()
    readonly max: bigint

    @prop()
    readonly lim: bigint

    @prop()
    readonly dec: bigint

    constructor(tick: ByteString, max: bigint, lim: bigint, dec: bigint) {
        super(...arguments)
        this.tick = tick
        this.max = max
        this.lim = lim
        this.dec = dec
    }

    @method()
    public mint(tick: ByteString, amt: bigint, total: bigint) {
        assert(this.max == 0n || total <= this.max, 'Over max')
        assert(tick == this.tick, 'Tick does not match')
        assert(amt <= this.lim, 'Amount check failed')
    }

    @method()
    public transfer(tick: ByteString) {
        assert(tick == this.tick, 'Tick does not match')
    }
}

```

### 2.2 在tests目录创建合约的测试代码

```ts

import { expect, use } from 'chai'
import { toByteString } from 'scrypt-ts'
import { MyFirstContract } from '../src/contracts/MyFirstContract'
import { getDefaultSigner } from './utils/txHelper'
import chaiAsPromised from 'chai-as-promised'
use(chaiAsPromised)

import { stringToBytes } from 'scryptlib'
import { offlineVerify } from 'scrypt-verify'
import simpleJson from '../artifacts/MyFirstContract.json'

describe('Test SmartContract `MyFirstContract`', () => {
    let instance: MyFirstContract

    before(async () => {
        await MyFirstContract.loadArtifact()

        instance = new MyFirstContract(toByteString('NOTE', true), 21000000n * 10n ** 8n, 1000n * 10n ** 8n, 8n)

        await instance.connect(getDefaultSigner())
    })

    it('should offline verify', async () => {
        const dataMap = {
            constructor: {
                tick: stringToBytes('NOTE'),
                max: 21000000n * 10n ** 8n,
                lim: 1000n * 10n ** 8n,
                dec: 8n,
            },
            mint: { tick: stringToBytes('NOTE'), amt: 1000n * 10n ** 8n, total: 5000n * 10n ** 8n },
            transfer: { tick: stringToBytes('NOTE'), amt: 1000n * 10n ** 8n },
        }

        const result = offlineVerify(simpleJson, dataMap, 'mint')
        console.log('🚀 ~ result:', result)
        expect(result.success).is.true
    })

    it('should pass the public method unit test successfully.', async () => {
        const deployTx = await instance.deploy(1)

        const call = async () => {
            const callRes = await instance.methods.mint(toByteString('NOTE', true), 1000n * 10n ** 8n, 5000n * 10n ** 8n)
        }
        await expect(call()).not.to.be.rejected
    })

    it('should throw with Tick does not match message.', async () => {
        await instance.deploy(1)

        const call = async () => instance.methods.mint(toByteString('AAAA', true), 1000n * 10n ** 8n, 5000n * 10n ** 8n)
        await expect(call()).to.be.rejectedWith(/Tick does not match/)
    })

    it('should throw with Amount check failed message.', async () => {
        await instance.deploy(1)

        const call = async () => instance.methods.mint(toByteString('NOTE', true), 1001n * 10n ** 8n, 5000n * 10n ** 8n)
        await expect(call()).to.be.rejectedWith(/Amount check failed/)
    })
})


```

### 2.3 编译并且运行测试代码

```bash
npm run compile
npm test
```

## 3. 发布智能合约

### 3.1 准备钱包

下载或者clone开源命令行NoteWallet钱包

```bash
git clone https://github.com/NoteProtocol/NoteWallet
cd NoteWallet
pnpm install
```

运行钱包，选择测试网，输入info命令，查看自动生成的助记词，备份助记词。

```bash
pnpm start
use BTCtestnet
info
```

复制`.env.example`文件为`.env`文件，并修改里面的`WALLET_MNEMONIC`，添加备份的助记词。

```bash
cp .env.example .env
```

输入`info`命令查看钱包地址`mainAddress`，发送一部分测试币进入钱包地址。然后输入`balance`命令查看钱包余额。

```bash
[nodemon] starting `ts-node ./src/command-line.ts`
[ 'BTClivenet', 'BTCtestnet' ]
> use BTCtestnet
use BTCtestnet
using BTCtestnet wallet
[ 'BTClivenet', 'BTCtestnet' ]
BTCtestnet 0> balance
balance
Balance: {
  mainAddress: { confirmed: 0n, unconfirmed: 99466n },
  tokenAddress: { confirmed: 0n, unconfirmed: 0n }
}
```

### 3.2 准备发布合约

拷贝编译后的合约json文件到命令行钱包的contracts目录下。

```bash
cp note-contratct/artifacts/MyFirstContract.json NoteWallet/src/contracts
```

### 3.3 创建合约发布代码

参照NoteWallet的`publish.ts`里的代码，编写自己的发布代码，修改发布函数。

```ts
import myFirstContract from "./contracts/MyFirstContract.json";

export async function uploadMyFirstContract(wallet: Wallet) {
  const json: Partial<any> = Object.assign({}, myFirstContract);
  json.file && delete json.file;
  json.sourceMapFile && delete json.sourceMapFile;
  const payload = wallet.buildN20Payload(json, true);
  const tx = await wallet.buildCommitPayloadTransaction(
    payload,
    wallet.currentAccount.mainAddress!.address!
  );
  return await wallet.broadcastTransaction(tx);
}

//Wrirte your smart contract upload function here
export async function publishSmartContract(wallet: Wallet) {
  // Upload the smart contract
  return await uploadMyFirstContract(wallet);
}

```

### 3.4 发布合约代码

在比特币测试网发布合约代码。

```bash
BTCtestnet 0> publish
publish
Succeeded: https://testnet4.noteprotocol.org/transaction?txId=2c68cb601b218a452464f6dd6270bd950ccd6cb38cbc14f016679ad6056b25d8&blockchain=BTCtestnet
```

合约一旦发布,等待合约内容上链，大概需要10分钟。一旦上链将可以在区块链浏览器上看到。

https://testnet4.noteprotocol.org/contract

找到自己发布的合约，拷贝合约的hash值，例子代码的合约地址是

https://testnet4.noteprotocol.org/contract/8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801

其hash值是`8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801`

:::note
此处的例子代码，已经发布成功，不必再次发布同样的合约代码，否则会浪费资金，同样的代码只需要发布一次，在部署N20 Token时可以反复利用。
:::

## 4. 部署N20 Token

### 4.1 编写Token部署代码

一个Token使用合约的hash值构造Payload结构，进行广播，待被索引器接受以后，既可以进行挖矿等操作。
首先查看NoteWallet钱包的mint.ts代码，理解deploy函数，编写自己的deploy函数。比如

```ts
const tick = "MyFirstToken";

const deployData: IDeployN20Data = {
  p: "n20",
  op: "deploy",
  tick,
  max: 2100n * 10000n * 10n ** 8n,//2100万个
  lim: 5000n * 10n ** 8n,//每次可以挖5000
  dec: 8,//8位小数
  sch: "8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801",//合约的hash值
};

export async function deployMyFirstContract(wallet: Wallet) {
  const toAddress = wallet.currentAccount.mainAddress!.address!;

  const tx = await wallet.buildCommitPayloadTransaction(
    wallet.buildN20Payload(deployData),
    toAddress
  );
  const result = await wallet.broadcastTransaction(tx);
  return {success: true, result};
}

```

修改`command-line.ts`的deploy命令，使用命令行部署Token

```ts
      .command(
        "deploy",
        "Deploy N20 Token",
        (yargs) => {},
        async (argv) => {
          if (!this.currentWallet) {
            console.log("No wallet selected");
            return;
          }
          //修改此处
          const {result} = await deployMyFirstContract(this.currentWallet);
          if (result.success) {
            console.log(
              "Succeeded:",
              interpolate(this.currentWallet.explorer!.tx, {
                txId: result.txId,
              })
            );
          } else {
            console.log(result.error);
          }
        }
      )
```

输入`deploy`命令进行部署

```bash
BTCtestnet 0> deploy
deploy
Succeeded: https://testnet4.noteprotocol.org/transaction?txId=5a6d4cf0ab92943bce10358b417aa3dec2406d5c0ffa3409bde6fd27f85dadd7&blockchain=BTCtestnet
```

### 4.2 资产发行

在Token部署之后，可以对自己发行的Token进行资产发行，也就是常说的挖矿。

编写mint函数，例子代码：

```ts

export async function mintMyFirstToken(wallet: Wallet) {
  const toAddress = wallet.currentAccount.tokenAddress!.address!;

  const tx = await wallet.buildN20PayloadTransaction(
    wallet.buildN20Payload(mintData),
    toAddress
  );
  const result = await wallet.broadcastTransaction(tx);
  return {success: true, result};
}

```

修改`command-line.ts`的mint命令，使用命令行进行挖矿

```ts
      .command(
        "mint",
        "Mint N20 Token",
        (yargs) => {},
        async (argv) => {
          if (!this.currentWallet) {
            console.log("No wallet selected");
            return;
          }
          //修改此处
          const {result} = await mintMyFirstToken(this.currentWallet);
          if (result.success) {
            console.log(
              "Succeeded:",
              interpolate(this.currentWallet.explorer!.tx, {
                txId: result.txId,
              })
            );
          } else {
            console.log(result.error);
          }
        }
      )
```

输入`mint`命令进行挖矿

```bash
BTCtestnet 0> mint
mint
Succeeded: https://testnet4.noteprotocol.org/transaction?txId=03011457f15ac907edf800b2a269414dda806d2025e0602700caeb429ade8364&blockchain=BTCtestnet
```

输入`tokenlist`命令查看余额

```bash
BTCtestnet 0> tokenlist
tokenlist
Token Balance: [
  {
    tick: 'MyFirstToken',
    confirmed: '0',
    unconfirmed: '500000000000',
    scriptHash: '3da74c9a4214d040149412a4644723e6268c169729d3b58e312bcae3e0eeea13',
    dec: 8,
    p: 'n20'
  }
]
```

### 4.3 资产转账

输入sendtoken命令进行资产转账，以下命令将给地址`tb1ptnku9z4yqxkvn2syfxgh32pjlu0p5nuytu2jvmm0cmktjes6sptsdwxmkx`转账1000个MyFirstToken，小数位数是8个零，所以最后的数量是`1000*10**8=100000000000`

```bash
BTCtestnet 0> sendtoken tb1ptnku9z4yqxkvn2syfxgh32pjlu0p5nuytu2jvmm0cmktjes6sptsdwxmkx MyFirstToken 100000000000
Succeeded: https://testnet4.noteprotocol.org/transaction?txId=dee12db0c3363720ff86aecebdbf8a013b4b31548e807b4f3e8e6ee36d030da7&blockchain=BTCtestnet
```

## 总结

通过以上步骤，我们完成了

1. 合约编写和测试
2. 合约发布
3. N20 Token的部署
4. 资产发行(挖矿)
5. 资产转账

接下来，你可以继续学习Note Protocol的技术原理。
