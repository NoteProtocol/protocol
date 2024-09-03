# NOTE Protocol: A New Milestone in Bitcoin Smart Contracts

Since its inception, Bitcoin has undergone countless technological innovations. The emergence of the NOTE Protocol marks a significant milestone in Bitcoin's history. After six months of meticulous protocol and ecosystem development, the NOTE Protocol is now officially available to the global audience. Our vision aligns with Bitcoin's: to provide a peer-to-peer digital currency for 6 billion people worldwide.

<!--truncate-->

## 1. Introduction to the NOTE Protocol

The NOTE Protocol is a digital asset issuance protocol based on the Bitcoin UTXO model, designed to develop blockchain products that can impact over 6 billion people worldwide. Unlike other protocols, the NOTE Protocol is genuinely built on Bitcoin's UTXO model. It uses the sCrypt smart contract language, compatible with TypeScript, and compiles to native Bitcoin opcodes. The protocol is Turing complete and supports powerful features such as Oracle integration. The NOTE Protocol also supports on-chain multi-signature, MAST, and the Lightning Network while providing an off-chain environment with state inheritance functionality.

## 2. Unique Advantages of the NOTE Protocol

Unlike protocols such as Ordinals and Atomicals, all operations in the NOTE Protocol are cryptographically based, with Bitcoin miners ensuring asset ownership. The transaction costs are incredibly low, eliminating the need for dual transactions like other protocols. More importantly, the NOTE Protocol supports smart contracts, with its first example contract implementing functionalities such as Bitwork mining and time-decaying mining rewards. This opens up new possibilities beyond Ethereum's EVM smart contracts, leveraging Bitcoin's UTXO model for efficient concurrency and maximum consensus, offering new choices for all blockchain developers. The sCrypt team provides a comprehensive development, compilation, and testing environment, making the development process revolutionary in terms of learning curve, environment setup, fair launch, and complex functionality implementation.

## 3. Contributing Teams

The NOTE Protocol is an open-source, VC-free geek protocol, licensed under MIT, with community contributions. The initial core contributing team hails from Tokyo, Japan, with extensive experience in blockchain technology. They have developed products like the multi-chain Ethereum EVM wallet Wallet3.io, the Bitcoin UTXO wallet ChainBow.io, a licensed Japanese Bitcoin exchange, an award-winning Web3 project by Japan's Digital Minister, an early DeFi prototype from 2018, blockchain data services, and blockchain explorers. Additionally, numerous experts have contributed Python and Go versions of open-source wallets, along with browser plugin wallets and a trading marketplace from the NoteMarket team.

## 4. Technical Details

The NOTE Protocol employs an innovative approach to manage Bitcoin transactions and assets. In traditional Bitcoin transactions, the input unlocks old UTXOs and generates new UTXOs. In the NOTE Protocol, the transaction output is viewed as a user account, represented by the transaction output script hash, offering strong privacy. Asset types and amounts derive from transaction inputs, simplifying asset tracking and enhancing privacy.

Unlike Ordinals and Atomicals, which use P2TR (Taproot) to add inaccessible script areas, the NOTE Protocol allows direct operation on unlock data via opcodes, increasing data usability. Additionally, the NOTE Protocol can be implemented via P2SH, P2WSH, and other methods, enhancing flexibility and cross-chain capability.

The off-chain smart contract environment is based on the unaltered first version of BVM from Satoshi Nakamoto, sourced from the Bitcore core codebase, and has been running stably for over a decade. The NOTE Protocol provides multiple runtime variables, including asset issuance quantities, current block height, block time, transaction inputs and outputs, and transaction initiator accounts. Previous transaction variables can be inherited and accessed by subsequent transactions, facilitating state transfer and validation, laying the technical foundation for new DeFi models based on the UTXO model.

## 5. Smart Contracts and Future Prospects

The NOTE Protocol has released multiple N20 asset issuance smart contracts on GitHub, showcasing its capability to execute complex logic on the Bitcoin network. Developers can create smart contracts for real-world applications like AI problem-solving bounties, leveraging Bitcoin's vast user base and strong consensus to demonstrate the practicality and innovation of their products. The first password management and encrypted note management software based on the NOTE Protocol has already been launched [https://note.sv](https://note.sv). It is a real blockchain application developed entirely for ordinary users. We believe that with the influx of many developers, more ecosystem applications will emerge. The NOTE Protocol is also developing and refining N721 NFT asset issuance and Alias DID protocols.

Designed with foresight for high-performance blockchain products, the NOTE Protocol enables asset transfer across chains without bridges, greatly expanding future possibilities.

## 6. Conclusion

The NOTE Protocol represents a crucial advancement in extending Bitcoin's functionality to include smart contracts. Its key features include:

- **Smart Contract Support**: Expands Bitcoin's application range, supporting complex logic and transaction types.
- **UTXO Model**: Leverages Bitcoin's security and efficiency.
- **Cross-Chain Capability**: Supports asset transfers between different UTXO chains.
- **Real-World Applications**: Employs advanced cryptographic techniques to support complex scenarios.
- **Low Cost and High Efficiency**: Optimizes data storage to reduce transaction costs.
- **Open Source and Community-Driven**: Emphasizes open-source principles, promoting transparency and trustworthiness.

As the NOTE Protocol evolves, we can anticipate more innovative applications, enhancing user experiences while adhering to Bitcoin's core values.

---

## NOTE Protocol

- Website: [https://noteprotocol.org](https://noteprotocol.org)
- X: [https://twitter.com/NoteProtocol](https://twitter.com/NoteProtocol)
- GitHub: [https://github.com/NoteProtocol](https://github.com/NoteProtocol)
