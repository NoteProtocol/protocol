---
title: ""
sidebar_position: 2
sidebar_label: Quick Start
---

## 1. Set Up Development Environment

### 1.1 Install Node.js

Download and install Node.js

Verify the installation:

```bash
node -v
npm -v
```

Optionally, install pnpm

```bash
npm install -g pnpm
pnpm -v
```

### 1.2 Clone the template project

Clone the template project, install dependencies, run the test code:

```bash
git clone https://github.com/NoteProtocol/note-contract.git
cd note-contract
npm i
npm test
```

## 2. Create and Test Smart Contracts

### 2.1 Use VSCode to create and write your own contract file

Create a new smart contract file named MyFirstContract.ts in the src/contracts directory.

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

### 2.2 Create the test code for the contract in the tests directory.

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

### 2.3 Compile and run the test code.

```bash
npm run compile
npm test
```

## 3. Deploy Smart Contracts

### 3.1 Prepare Wallet

Download or clone the open-source command-line NoteWallet wallet.

```bash
git clone https://github.com/NoteProtocol/NoteWallet
cd NoteWallet
pnpm install
```

Run the wallet, select the testnet, and enter the `info` command to view the automatically generated mnemonic. Back up the mnemonic.

```bash
pnpm start
use BTCtestnet
info
```

Copy the `.env.example` file to `.env` and modify the `WALLET_MNEMONIC` inside, adding the backed-up mnemonic.

```bash
cp .env.example .env
```

Enter the `info` command to view the wallet address `mainAddress`, send some test coins to the wallet address. Then enter the `balance` command to check the wallet balance.

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

### 3.2 Prepare to Deploy the Contract

Copy the compiled contract JSON file to the contracts directory of the command-line wallet.

```bash
cp note-contratct/artifacts/MyFirstContract.json NoteWallet/src/contracts
```

### 3.3 Create Contract Deployment Code

Refer to the code in NoteWallet's `publish.ts` and write your own deployment code, modifying the deployment function.

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

### 3.4 Deploy Contract

Deploy the contract code on the Bitcoin testnet.

```bash
BTCtestnet 0> publish
publish
Succeeded: https://testnet4.noteprotocol.org/transaction?txId=2c68cb601b218a452464f6dd6270bd950ccd6cb38cbc14f016679ad6056b25d8&blockchain=BTCtestnet
```

Once the contract is deployed, wait for the contract details to be recorded on the blockchain, which takes about 10 minutes. Once it is on the blockchain, it can be viewed on the blockchain explorer.

https://testnet4.noteprotocol.org/contract

Find your deployed contract and copy the contract's hash value. The example contract is

https://testnet4.noteprotocol.org/contract/8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801

Its hash value is `8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801`.

:::note
In this example, the code has already been successfully deployed, so there is no need to deploy the same contract code again, as it would waste funds. The same code only needs to be deployed once and can be reused when deploying N20 Tokens.
:::

## 4. Deploy N20 Token

### 4.1 Write Token Deployment Code

A token uses the contract's hash value to construct a Payload structure, which is then broadcasted. Once accepted by the indexer, mining and other operations can proceed. First, review the mint.ts code in the NoteWallet wallet to understand the deploy function, then write your own deploy function. For example:

```ts
const tick = "MyFirstToken";

const deployData: IDeployN20Data = {
  p: "n20",
  op: "deploy",
  tick,
  max: 2100n * 10000n * 10n ** 8n,//21 million
  lim: 5000n * 10n ** 8n,//5,000 can be mined each time.
  dec: 8,//8 decimal places.
  sch: "8903b3a0c40e87314d9f8f7699e13bb56cc9a07a75acde2b3069d6eb098dd801",//The contract's hash value.
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

Modify the `deploy` command in `command-line.ts` to deploy the token using the command line.

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
          //Fix here
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

Enter the `deploy` command to deploy.

```bash
BTCtestnet 0> deploy
deploy
Succeeded: https://testnet4.noteprotocol.org/transaction?txId=5a6d4cf0ab92943bce10358b417aa3dec2406d5c0ffa3409bde6fd27f85dadd7&blockchain=BTCtestnet
```

### 4.2 Asset Issuance

After deploying the token, you can proceed with asset issuance, commonly known as mining.

Write the mint function, example code:

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

Modify the mint command in command-line.ts to perform mining using the command line:

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
          //Fix here
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

Use the `mint` command to mine.

```bash
BTCtestnet 0> mint
mint
Succeeded: https://testnet4.noteprotocol.org/transaction?txId=03011457f15ac907edf800b2a269414dda806d2025e0602700caeb429ade8364&blockchain=BTCtestnet
```

Use the `tokenlist` command to check the balance.

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

### 4.3 Asset transfer

Use the `sendtoken` command to perform an asset transfer. The following command will transfer 1000 MyFirstTokens to the address `tb1ptnku9z4yqxkvn2syfxgh32pjlu0p5nuytu2jvmm0cmktjes6sptsdwxmkx`. With 8 decimal places, the final amount is `1000*10**8=100000000000`.

```bash
BTCtestnet 0> sendtoken tb1ptnku9z4yqxkvn2syfxgh32pjlu0p5nuytu2jvmm0cmktjes6sptsdwxmkx MyFirstToken 100000000000
Succeeded: https://testnet4.noteprotocol.org/transaction?txId=dee12db0c3363720ff86aecebdbf8a013b4b31548e807b4f3e8e6ee36d030da7&blockchain=BTCtestnet
```

## Summary

Through the above steps, we have completed:

1. Contract writing and testing
2. Contract deployment
3. N20 Token deployment
4. Asset issuance (mining)
5. Asset transfer

Next, you can continue learning the technical principles of the Note Protocol.
