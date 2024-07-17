---
title: "Basic Concepts"
sidebar_position: 1
sidebar_label: Basic Concepts
---

In the Bitcoin UTXO model, it is essential to understand the following concepts first.

:::info
Some aspects differ slightly from the Ethereum account model.
:::

- Mnemonic: A mnemonic is a set of words, usually consisting of 12 or 24 English words (other languages and other numbers of words are also possible). It can be generated through wallet software, specialized software, hardware, or even by rolling dice. Mnemonics need to be strictly safeguarded, preferably written down with paper and pen and stored physically.
- Wallet: A wallet can derive multiple public and private keys from a mnemonic (seed). The wallet is mainly responsible for generating and managing addresses, signing transactions, broadcasting them to the blockchain, obtaining transaction records from data providers, and displaying them to the user.
- Cryptocurrency: Wallets manage multiple blockchains, including BTC/BCH/BSV/RXD, and their corresponding cryptocurrencies according to standards such as BIP44. Each blockchain (cryptocurrency) can have both a mainnet and a testnet.
- Address: Each time a wallet generates a set of public and private keys, it can generate various formats of addresses according to templates. Common formats include P2PKH, P2WPKH, P2WSH, and P2TR. The NOTE protocol has two default templates, P2TR-NOTE and P2TR-COMMIT-NOTE.
- Multiple Addresses: A wallet can generate multiple sets of public and private keys, and thus multiple addresses. There is generally no limit to the number of addresses that can be generated.

![Image0](/tutorial/01_basic_image0_en.png)

:::info
Blockchains with account models like Ethereum do not differentiate between mainnet and testnet. Each account corresponding to a set of public and private keys has a fixed address. In the Bitcoin UTXO model, there is no concept of an account. Each set of public and private keys can generate multiple addresses according to templates. All these addresses, although different in form, are controlled by the private key.
:::

## Core Concepts of the NOTE Protocol

### Account

In Bitcoin, there is no concept of an account, only addresses. Each address is constructed from a transaction output template, and an address is essentially an encoding of the transaction output script.

![Image1](/tutorial/01_basic_image1.png)

In the NOTE protocol, we define the hash value of a transaction output script as an account. This definition is derived from the [Electrum protocol](https://electrumx.readthedocs.io/en/latest/protocol-basics.html?highlight=script%20hash#script-hashes).

`scriptHash = sha256(script).reverse()`

In summary, an account is the hash value of a transaction output, with a fixed length of 256 bits (32 bytes), and a hex string length of 64. An address is the encoding of a transaction output, with its length varying depending on the script content and encoding rules. An address can be converted to an account, but an account cannot be converted back to an address.

### On-chain Contracts

In the NOTE protocol, digital asset accounts are constructed using special script templates, different from standard P2PKH, P2WSH, and P2TR addresses. They are defined using Taproot Script in BTC. The simplest script is `NOTE OP_2DROP OP_2DROP OP_2DROP Pubkey OP_CHECKSIG`.

More complex script templates can also be used, such as multisig. These scripts are collectively referred to as "on-chain contracts." We can write simple on-chain contracts using Bitcoin Script opcodes (OpCode), or more complex on-chain contracts using the sCrypt language.

### Account Ownership

The ownership of an account belongs to the holder(s) of one or more private keys that can unlock the transaction output. In common Bitcoin transactions, a single private key holder gains ownership by providing the unlocking script for the UTXO, which is then verified by miners. Similarly, if it is a multisig address, ownership is obtained after multiple private key holders jointly sign the transaction.

![Image2](/tutorial/01_basic_image2.png)

### Digital Assets

Digital assets are defined by the protocol and include N20 Tokens, N721 NFTs, etc. These digital assets are bound to transaction outputs. Unlike colored coins, this binding does not depend on the number of satoshis in the transaction output but is instead related to the UTXO itself.

![Image3](/tutorial/01_basic_image3.png)

### Operations

Operations refer to actions such as minting, transferring, burning, etc., as defined by the protocol, to be performed on digital assets. These operations are defined by a set of key-value pairs encoded in msgpack, which we call Payload, and placed in the unlocking script. This means that if the account owner needs to operate on digital assets, they must first unlock the account UTXO by signing. This process is essentially the Bitcoin transaction process, executing on-chain contracts, with security ensured by Bitcoin's mining mechanism.

For example, a Payload instance:

```typescript
{
  "p": "n20",
  "op": "transfer",
  "tick": "NOTE",
  "amt": 100
}
```

It indicates unlocking the UTXO and transferring the digital asset named NOTE bound in the UTXO to the first transaction output. If the digital asset in the UTXO exceeds 100, the balance will be transferred to the second transaction output.

Once the transaction is published on the blockchain, it means the on-chain contract execution has succeeded, and ownership has been confirmed. The NOTE protocol indexer retrieves this transaction from the blockchain, interprets the Payload in the unlocking script, checks whether the Payload is valid, and if the unlocked UTXO contains a sufficient amount of tokens. It then executes the off-chain smart contract, invoking the method behind the tick name in the smart contract, with the method name being the value of op, such as transfer. Once the contract executes successfully, the corresponding amount of digital assets will be bound to the transaction output.

![Image4](/tutorial/01_basic_image4.png)
