---
title: "Infrastructure"
sidebar_position: 1
sidebar_label: Infrastructure
---

### Wallet Software

- **[NoteWallet](https://github.com/NoteProtocol/NoteWallet)**: NoteWallet is an open-source command-line wallet that supports both BTC mainnet and testnet. It demonstrates functionalities such as contract code upload, contract deployment, token mining, and transaction transfers. Its code showcases many technical details of the NOTE protocol and serves as a minimalist Bitcoin wallet, supporting various address formats and illustrating the complete process from UTXO to transaction construction. `#TypeScript` `#OpenSource`
- **[ChainBow Wallet](https://chainbow.io)**: ChainBow Wallet is a smart mobile Bitcoin wallet app for iOS/Android, designed according to the BIP44 standard. It supports multiple cryptocurrencies, mainnet and testnet, allows multiple wallets creation within the app, and each wallet supports multiple addresses. The interface offers multiple languages including Chinese, Japanese, and English, with light and dark themes. The built-in DAPP browser is very powerful, and the app is currently in the testing phase. `#iOS` `#Android` `#DApp`
- **[NOTE Market Wallet](https://github.com/notemarketio/notemarket-wallet)**: NOTE Market Wallet is an open-source browser plugin wallet that supports Chrome/Firefox browsers. Its code is forked from the UniSat browser plugin wallet, maintaining consistent product quality and user experience. It supports BTC mainnet and testnet, allows multiple wallet creation, and supports DAPP. `#Chrome` `#FireFox` `#DApp`
- **[pyNoteWallet](https://github.com/NoteScan/pyNoteWallet)**: pyNoteWallet is a command-line wallet written in Python, compatible with the TypeScript version, making it easier for Python developers to understand the NOTE protocol and the Bitcoin transaction process. `#Python` `#OpenSource`

### DEX Decentralized Exchanges

- **[NoteMarket](https://notemarket.io)**: NoteMarket is the first decentralized exchange market for the NOTE protocol, supporting BTC mainnet, allowing direct trading of NOTE UTXO from wallet addresses, and providing UTXO splitting functionality. `#DEX`
- **[UtxoExchange](https://utxo.exchange)**: UtxoExchange is a decentralized Bitcoin exchange market supporting BTC mainnet and testnet, offering locked coin trading without affecting wallet usage, direct order posting without UTXO splitting, testnet token trading, and mining rewards for transactions, significantly reducing most transaction fees. `#DEX`
- **[Satsx](https://www.satsx.io/otc/note/listed)**: The earliest trading website providing OTC trading for NOTE. `#Discontinued`

### Blockchain Explorer

- **[Explorer](https://explorer.noteprotocol.org)**: Explorer is a blockchain explorer customized for the NOTE protocol. It allows users to view address balances, block heights, transaction statuses, and details. It supports both BTC mainnet and testnet. Besides being a regular balance query tool, it is an essential tool for developers. `#BlockchainExplorer`

### Data Services

- **[UrChain](https://btc.urchain.com)**: UrChain is a professional blockchain infrastructure platform providing data services for Bitcoin and other cryptocurrencies, supporting UTXO queries and transaction broadcasting. Through its API, it offers blockchain access for wallets and DEX services. It supports multiple cryptocurrencies and both mainnet and testnet. `#Infura` `#DataServices`

### Development Tools

- **[sCrypt](https://scrypt.io)**: sCrypt is an advanced Bitcoin smart contract language. Its compiler can compile into native Bitcoin opcodes. It provides necessary documentation, a VSCode plugin, and development and testing tools, with numerous code examples available on [GitHub](https://github.com/sCrypt-Inc/boilerplate). The NOTE protocol uses it for off-chain contract development, eliminating the need to learn all the concepts. `#Compiler` `#DevelopmentTools` `#Examples`
