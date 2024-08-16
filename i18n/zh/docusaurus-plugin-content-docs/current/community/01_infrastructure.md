---
title: "基础建设"
sidebar_position: 1
sidebar_label: 基础建设
---

### 钱包软件

- **[NoteWallet](https://github.com/NoteProtocol/NoteWallet)**: NoteWallet 是一个开源的命令行钱包，同时支持BTC主网和测试网，演示了合约代码的上传，合约部署，代币挖矿，交易转账等等功能。它的代码展示了大量NOTE协议的技术细节，同时是一个最小化的比特币钱包，支持多种地址格式，展示了从UTXO到交易构建的全过程。`#TypeScript` `#开源`
- **[ChainBow Wallet](https://chainbow.io)**: ChainBow Wallet 是一个iOS/Android智能手机版比特币钱包App，遵照BIP44标准设计，支持多币种，支持主网和测试网，支持App内创建多钱包，每个钱包支持多地址，界面提供中日英等多语言，明暗主题。内置的DAPP浏览器非常强大，目前处于测试阶段。`#iOS` `#Android` `#DApp`
- **[NOTE Market Wallet](https://github.com/notemarketio/notemarket-wallet)**: NOTE Market Wallet 是开源的浏览器插件版钱包，支持Chrome/Firefox浏览器。其代码Fork自UniSat浏览器插件钱包，拥有一致的产品质量和使用体验。支持BTC主网和测试网，支持创建多钱包，支持DAPP。`#Chrome` `#FireFox` `#DApp`
- **[pyNoteWallet](https://github.com/NoteScan/pyNoteWallet)**: pyNoteWallet 是一个Python语言写的命令行钱包，兼容TypeScript版，便于Python程序员更好地理解NOTE协议和比特币的交易过程。`#Python` `#开源`

### DEX去中心化交易市场

- **[NoteMarket](https://notemarket.io)**: NoteMarket 是第一个NOTE协议去中心化的交易市场，支持BTC主网，直接交易钱包地址里的NOTE UTXO，提供分割UTXO的功能。`#DEX`
- **[UtxoExchange](https://utxo.exchange)**: UtxoExchange 是一个去中心化的比特币交易市场，支持BTC主网和测试网，提供交易锁币功能，不影响钱包正常使用，无需分割UTXO直接挂单，可以交易测试网代币，拥有交易挖矿获取积分功能，可以折扣大部分交易手续费。`#DEX`
- **[Satsx](https://www.satsx.io/otc/note/listed)**: 最早的交易网站，提供NOTE的OTC交易。`#已停止`

### 区块链浏览器

- **[Explorer](https://explorer.noteprotocol.org)**: Explorer 是一个为NOTE协议定制的区块链浏览器，可以查看地址余额，区块高度，交易打包状况，交易细节。提供BTC主网和测试网。除了作为普通的余额查询使用之外，还是程序员的必备工具。`#区块链浏览器`

### 数据服务

- **[UrChain](https://btc.urchain.com)**: UrChain 是一个专业区块链基础平台，提供比特币等多币种的数据服务，支持UTXO查询，交易广播。通过API为钱包和DEX等服务提供区块链访问入口。支持多币种，支持主网和测试网。`#Infura` `#数据服务`

### 开发工具

- **[sCrypt](https://scrypt.io)**: sCrypt 是一个高级比特币智能合约语言，用它提供的编译器可以编译成比特币原生操作码。配套提供了开发链上合约需要的文档，VSCode插件和开发测试工具，并且在[GitHub](https://github.com/sCrypt-Inc/boilerplate)提供了大量的代码示例。NOTE协议使用其开发链下合约，无需学习全部知识点。`#编译器` `#开发工具` `#示例`
