"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[8130],{7735:t=>{t.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2024/07/9/note-protocol-bitcoin-smart-contracts","metadata":{"permalink":"/blog/2024/07/9/note-protocol-bitcoin-smart-contracts","source":"@site/blog/2024-07-9-note-protocol-bitcoin-smart-contracts.md","title":"NOTE Protocol: A New Milestone in Bitcoin Smart Contracts","description":"Since its inception, Bitcoin has undergone countless technological innovations. The emergence of the NOTE Protocol marks a significant milestone in Bitcoin\'s history. After six months of meticulous protocol and ecosystem development, the NOTE Protocol is now officially available to the global audience.","date":"2024-07-09T00:00:00.000Z","tags":[],"readingTime":3.905,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"nextItem":{"title":"Turing completeness & Halting Problem","permalink":"/blog/turing-complete-halting-problem"}},"content":"Since its inception, Bitcoin has undergone countless technological innovations. The emergence of the NOTE Protocol marks a significant milestone in Bitcoin\'s history. After six months of meticulous protocol and ecosystem development, the NOTE Protocol is now officially available to the global audience.\\n\\n## 1. Introduction to the NOTE Protocol\\n\\nThe NOTE Protocol is a digital asset issuance protocol based on the Bitcoin UTXO model, designed to develop blockchain products that can impact over 6 billion people worldwide. Unlike other protocols, the NOTE Protocol is genuinely built on Bitcoin\'s UTXO model. It uses the sCrypt smart contract language, compatible with TypeScript, and compiles to native Bitcoin opcodes. The protocol is Turing complete and supports powerful features such as Oracle integration. The NOTE Protocol also supports on-chain multi-signature, MAST, and the Lightning Network while providing an off-chain environment with state inheritance functionality.\\n\\n## 2. Unique Advantages of the NOTE Protocol\\n\\nUnlike protocols such as Ordinals and Atomicals, all operations in the NOTE Protocol are cryptographically based, with Bitcoin miners ensuring asset ownership. The transaction costs are incredibly low, eliminating the need for dual transactions like other protocols. More importantly, the NOTE Protocol supports smart contracts, with its first example contract implementing functionalities such as Bitwork mining and time-decaying mining rewards. This opens up new possibilities beyond Ethereum\'s EVM smart contracts, leveraging Bitcoin\'s UTXO model for efficient concurrency and maximum consensus, offering new choices for all blockchain developers. The sCrypt team provides a comprehensive development, compilation, and testing environment, making the development process revolutionary in terms of learning curve, environment setup, fair launch, and complex functionality implementation.\\n\\n## 3. Contributing Teams\\n\\nThe NOTE Protocol is an open-source, VC-free geek protocol, licensed under MIT, with community contributions. The initial core contributing team hails from Tokyo, Japan, with extensive experience in blockchain technology. They have developed products like the multi-chain Ethereum EVM wallet Wallet3.io, the Bitcoin UTXO wallet ChainBow.io, a licensed Japanese Bitcoin exchange, an award-winning Web3 project by Japan\'s Digital Minister, an early DeFi prototype from 2018, blockchain data services, and blockchain explorers. Additionally, numerous experts have contributed Python and Go versions of open-source wallets, along with browser plugin wallets and a trading marketplace from the NoteMarket team.\\n\\n## 4. Technical Details\\n\\nThe NOTE Protocol employs an innovative approach to manage Bitcoin transactions and assets. In traditional Bitcoin transactions, the input unlocks old UTXOs and generates new UTXOs. In the NOTE Protocol, the transaction output is viewed as a user account, represented by the transaction output script hash, offering strong privacy. Asset types and amounts derive from transaction inputs, simplifying asset tracking and enhancing privacy.\\n\\nUnlike Ordinals and Atomicals, which use P2TR (Taproot) to add inaccessible script areas, the NOTE Protocol allows direct operation on unlock data via opcodes, increasing data usability. Additionally, the NOTE Protocol can be implemented via P2SH, P2WSH, and other methods, enhancing flexibility and cross-chain capability.\\n\\nThe off-chain smart contract environment is based on the unaltered first version of BVM from Satoshi Nakamoto, sourced from the Bitcore core codebase, and has been running stably for over a decade. The NOTE Protocol provides multiple runtime variables, including asset issuance quantities, current block height, block time, transaction inputs and outputs, and transaction initiator accounts. Previous transaction variables can be inherited and accessed by subsequent transactions, facilitating state transfer and validation, laying the technical foundation for new DeFi models based on the UTXO model.\\n\\n## 5. Smart Contracts and Future Prospects\\n\\nThe NOTE Protocol has released multiple N20 asset issuance smart contracts on GitHub, showcasing its capability to execute complex logic on the Bitcoin network. Developers can create smart contracts for real-world applications like AI problem-solving bounties, leveraging Bitcoin\'s vast user base and strong consensus to demonstrate the practicality and innovation of their products. The NOTE Protocol is also developing and refining N721 NFT asset issuance and Alias DID protocols.\\n\\nDesigned with foresight for high-performance blockchain products, the NOTE Protocol enables asset transfer across chains without bridges, greatly expanding future possibilities.\\n\\n## 6. Conclusion\\n\\nThe NOTE Protocol represents a crucial advancement in extending Bitcoin\'s functionality to include smart contracts. Its key features include:\\n\\n- **Smart Contract Support**: Expands Bitcoin\'s application range, supporting complex logic and transaction types.\\n- **UTXO Model**: Leverages Bitcoin\'s security and efficiency.\\n- **Cross-Chain Capability**: Supports asset transfers between different UTXO chains.\\n- **Real-World Applications**: Employs advanced cryptographic techniques to support complex scenarios.\\n- **Low Cost and High Efficiency**: Optimizes data storage to reduce transaction costs.\\n- **Open Source and Community-Driven**: Emphasizes open-source principles, promoting transparency and trustworthiness.\\n\\nAs the NOTE Protocol evolves, we can anticipate more innovative applications, enhancing user experiences while adhering to Bitcoin\'s core values.\\n\\n---\\n\\n## NOTE Protocol\\n\\n- Website: [https://noteprotocol.org](https://noteprotocol.org)\\n- X: [https://twitter.com/NoteProtocol](https://twitter.com/NoteProtocol)\\n- GitHub: [https://github.com/NoteProtocol](https://github.com/NoteProtocol)"},{"id":"turing-complete-halting-problem","metadata":{"permalink":"/blog/turing-complete-halting-problem","source":"@site/blog/2024-06-11-turing-complete-halting-problem.md","title":"Turing completeness & Halting Problem","description":"If we say the native Bitcoin scripting language is Turing complete, many people will criticize us.","date":"2024-06-11T00:00:00.000Z","tags":[{"inline":true,"label":"NoteProtocol","permalink":"/blog/tags/note-protocol"}],"readingTime":2.86,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"turing-complete-halting-problem","title":"Turing completeness & Halting Problem","tags":["NoteProtocol"]},"unlisted":false,"prevItem":{"title":"NOTE Protocol: A New Milestone in Bitcoin Smart Contracts","permalink":"/blog/2024/07/9/note-protocol-bitcoin-smart-contracts"},"nextItem":{"title":"Continuous Upgrades to the NOTE Protocol","permalink":"/blog/n20-upgrade"}},"content":"If we say the native Bitcoin scripting language is Turing complete, many people will criticize us.\\n\\nTuring Completeness refers to a programming language that can implement any computation a Turing machine is capable of. This concept comes from Alan Turing, who proposed the Turing Machine model. It\u2019s an abstract machine that performs calculations by reading and writing symbols on an infinitely long tape.\\n\\nIf a programming language is Turing complete, it means it can simulate all computational functions of a Turing machine. Typically, this requires the language to support conditional branching (like if/else statements) and loops (or recursion) to make decisions based on data and repeatedly perform certain actions until a specific condition is met.\\n\\nIs it reasonable that a program in an infinite loop could run indefinitely on an infinitely long tape? Is it reasonable to say that a program that can implement an infinite loop is Turing complete?\\n\\nIn fact, simple infinite loops can be implemented with a very basic set of instructions, but if there\'s insufficient control structure (like conditional branches) and data handling capabilities, such systems cannot be considered Turing complete. Turing completeness requires the ability to express any complex algorithmic logic, including but not limited to loop structures. Furthermore, infinite loops introduce another issue: the Halting Problem.\\n\\nThe Halting Problem, proposed by Alan Turing in the 1930s, is a well-known problem in computation theory. It explores whether there exists an algorithm that can determine whether any given program and its input will eventually stop executing.\\n\\nTuring proved the Halting Problem is unsolvable. Turing-complete systems can express and execute all possible programs, including those that never halt. The unsolvability of the Halting Problem arises directly from the capabilities of these systems. In short, the robust computational power of Turing-complete systems introduces uncertainty because we cannot predict in advance whether a program will stop in all cases.\\n\\nNow let\u2019s see why some claim Bitcoin\'s script is not Turing complete. Because it lacks loop commands in its opcode, some argue it\'s not Turing complete. However, assembly language also lacks loop commands, yet no one disputes its Turing completeness. Assembly language provides the necessary tools to implement loops primarily through conditional jump instructions. Bitcoin script is similar to assembly in that loops can be unrolled. For example, to sum from 1 to 100, you could keep adding: 1+2=3, 3+3=6, 6+4=10, and so on until 100. This approach has a benefit\u2014it addresses the Halting Problem. We know that Bitcoin transactions and blocks are limited in size, from 1MB to 4MB, potentially larger. Therefore, an unrolled script will eventually hit this size limit and force the program to stop.\\n\\n![Image1](/blog/scrypt-loop.png)\\n\\nOne might say: Bitcoin script language is Turing complete and also solves the Halting Problem.\\n\\nIn Ethereum, the Halting Problem is addressed by charging a fee (gas) for each operation. Theoretically, a wealthy Ethereum user could pay to run a program for a year, potentially clogging the EVM.\\n\\nHowever, on Bitcoin , no amount of money can infinitely increase block size, ensuring programs must stop. This is part of the consensus.\\n\\nIn the computing field, there\u2019s an important principle: the KISS principle (Keep It Simple, Stupid). Satoshi Nakamoto adhered to this principle.\\n\\nMaintaining simplicity in a system is a crucial consideration for designers. In environments like Note Protocol, script size is still controlled, currently providing about 2.5K of script JSON storage space. In the future, it could expand to between 1MB and 4MB."},{"id":"n20-upgrade","metadata":{"permalink":"/blog/n20-upgrade","source":"@site/blog/2024-04-04-upgrade-n20.md","title":"Continuous Upgrades to the NOTE Protocol","description":"Since the public release of its Proof of Concept indexer in February 2024, the NOTE protocol has garnered widespread attention. Following feedback and demands from users, the protocol has been continuously upgraded.","date":"2024-04-04T00:00:00.000Z","tags":[{"inline":true,"label":"NoteProtocol","permalink":"/blog/tags/note-protocol"}],"readingTime":5.235,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"n20-upgrade","title":"Continuous Upgrades to the NOTE Protocol","tags":["NoteProtocol"]},"unlisted":false,"prevItem":{"title":"Turing completeness & Halting Problem","permalink":"/blog/turing-complete-halting-problem"},"nextItem":{"title":"N20 Token protocol draft is out","permalink":"/blog/n20-draft"}},"content":"Since the public release of its Proof of Concept indexer in February 2024, the NOTE protocol has garnered widespread attention. Following feedback and demands from users, the protocol has been continuously upgraded.\\n\\nAs of April 4th, the following upgrades have been implemented:\\n\\n- The Payload data area has been fully expanded, meaning that Payload data can now be stored either in the unlocking script or in the redemption script.\\n- Added a Burn method to N20. Tokens can now be burned.\\n- The off-chain contract execution environment has been enriched with a plethora of environmental variables, including block information such as block time, block hash, block height, as well as transaction information like transaction hash, all inputs and outputs. Ticker information, such as the total mint amount, etc., has also been included.\\n\\nThe indexer code has undergone extensive refactoring.\\n\\nOne of the goals of this upgrade is to enable anyone to participate in the development of NOTE smart contracts. This allows for the creation of unique smart contracts that can be published to the NOTE indexer, facilitating the issuance of digital assets. A comprehensive tutorial on contract creation is currently being developed.\\n\\nThe capabilities of the NOTE protocol can be seen in the [POW mining contract](https://github.com/NoteProtocol/scryptdemo/blob/main/src/contracts/n20-pow.ts) released in February.\\n\\nWe\'ve added some comments to help everyone understand:\\n\\n\\n```typescript\\n// Each contract is a subclass of SmartContract, and its member variables are read-only and need to be decorated with @prop().\\nexport class N20_Pow extends SmartContract {\\n    @prop()\\n    readonly tick: ByteString\\n\\n    @prop()\\n    readonly max: bigint\\n\\n    @prop()\\n    readonly lim: bigint\\n\\n    @prop()\\n    readonly dec: bigint\\n\\n    @prop()\\n    readonly bitwork: ByteString\\n\\n    @prop()\\n    readonly start: bigint\\n\\n    // If the contract includes member variables, they need to be initialized using a constructor.\\n    constructor(tick: ByteString, max: bigint, lim: bigint, dec: bigint, bitwork: ByteString, start: bigint) {\\n        super(...arguments)\\n        // The identifier of the digital asset, its name.\\n        this.tick = tick\\n        // The maximum issuance of the digital asset, if there is no limit, it can be specified as 0.\\n        this.max = max\\n        // The mining limit per transaction, it cannot exceed the maximum value.\\n        this.lim = lim\\n        // The decimal unit of the digital asset, for example, if dec=8, then 1 token should be followed by 8 zeros, all quantity values amt, including max and lim, are affected by this. 100000000 represents 1.00000000.\\n        this.dec = dec\\n        // Mining difficulty, the required leading characters of each transaction\'s hash256.\\n        this.bitwork = bitwork \\n        // The starting height of the mining contract, used to prevent pre-mining.\\n        this.start = start\\n    }\\n\\n    // The block limit algorithm for mining, needs to be decorated with @method().\\n    @method()\\n    getBlockLimit(height: bigint): bigint {\\n        assert(height >= this.start, \'Block height is too low\')\\n        // Halving occurs every 1000 blocks, the number of halvings is determined by the block height minus the starting height.\\n        let halvings = (height - this.start) / 1000n\\n        // A maximum of 7 halvings.\\n        halvings = halvings > 7n ? 7n : halvings\\n        // The mining quantity limit is halved with each halving. Here, the binary rshift operator is used to perform the division by 2 operation.\\n        const subsidy = rshift(this.lim, halvings)\\n        return subsidy\\n    }\\n\\n// The quantity limit algorithm for mining, needs to be decorated with @method().\\n    @method()\\n    getAmountLimit(currentMined: bigint): bigint {\\n        // The quantity limit starts from how much of the total amount has already been mined.\\n        let miningAmount = this.lim\\n        let threshold = this.max / 2n\\n\\n        // Loop 7 times, each loop, if the current mined amount reaches the threshold, then the mining amount is halved, and the threshold is updated.\\n        for (let halving = 0n; halving < 7n; halving++) {\\n            if (currentMined >= threshold) {\\n                miningAmount /= 2n // Halve the mining amount\\n                threshold += rshift(this.max, halving + 2n) // Update the next threshold\\n            }\\n        }\\n\\n        return miningAmount\\n    }\\n\\n    @method()\\n    public mint(tick: ByteString, amt: bigint, total: bigint, height: bigint, tx: ByteString) {\\n        // Check if the transaction\'s hash256 leading characters match the mining contract\'s difficulty requirement.\\n        const txid = hash256(tx)\\n        assert(slice(txid, 0n, len(this.bitwork)) == this.bitwork, \'not match target\')\\n        // Check if the total mining amount exceeds the maximum issuance.\\n        assert(this.max == 0n || total <= this.max, \'Over max\')\\n        assert(tick == this.tick, \'Tick does not match\')\\n        // Check if the mining amount exceeds the block limit and the total halving limit.\\n        const limit1 = this.getBlockLimit(height)\\n        const limit2 = this.getAmountLimit(total)\\n        const limit = limit1 > limit2 ? limit2 : limit1\\n        assert(amt <= limit && amt <= this.max - total, \'Amount check failed\')\\n    }\\n\\n    // The method for transferring Tokens, needs to be decorated with @method().\\n    @method()\\n    public transfer(tick: ByteString) {\\n        assert(tick == this.tick, \'Tick does not match\')\\n    }\\n}\\n\\n```\\n\\n> there is a bug in the above code about max=0. if you want to use it in your assets, please DONT set max=0.\\n\\nThis upgrade added the Burn method, allowing for the burning of Tokens. [A new example](https://github.com/NoteProtocol/scryptdemo/blob/main/src/contracts/n20-joss.ts) is as follows.\\n\\n```typescript\\n// This example does not use a constructor but instead uses a static setting of parameters, because the values are entirely within the contract and cannot be reused for other digital assets.\\nexport class N20_Joss extends SmartContract {\\n    // Joss paper: A type of paper made to resemble money and burned in front of deities.\\n    @prop()\\n    static tick: ByteString = toByteString(\'JOSS\', true)\\n\\n    // No issuance limit.\\n    @prop()\\n    static max: bigint = 0n\\n\\n    // Can issue 10,000 at a time.\\n    @prop()\\n    static lim: bigint = 10000n\\n\\n    // No decimal places.\\n    @prop()\\n    static dec: bigint = 0n\\n\\n    @method()\\n    public mint(tick: ByteString, amt: bigint) {\\n        assert(tick == N20_Joss.tick, \'Tick does not match\')\\n        // The issuance amount cannot exceed the limit of 10,000.\\n        assert(amt == N20_Joss.lim, \'Limit does not match\')\\n    }\\n\\n    @method()\\n    public transfer() {\\n        // Cannot transfer.\\n        assert(false)\\n    }\\n\\n    @method()\\n    public burn(tick: ByteString) {\\n        // Can be burned.\\n        assert(tick == N20_Joss.tick, \'Tick does not match\')\\n    }\\n}\\n\\n```\\n\\nThe N20_Joss contract was released at\\nhttps://mempool.space/tx/c2cda4c9da3a91bd245d9f6250b5ca8f2ec81d50c14821e87a033fde1f3b5561\\n\\nSupport for smart contracts is the biggest difference between the NOTE protocol and other protocols. The NOTE wallet and indexer create an execution environment for smart contracts, allowing users to write their own smart contracts. For basic knowledge about smart contracts, you can refer to:\\n\\n- [sCrypt](https://scrypt.io/)\\n- [sCrypt Medium](https://xiaohuiliu.medium.com/)\\n\\nWhy Bitcoin smart contracts are Turing complete:\\n\\n- [Turing Machines on Bitcoin](https://medium.com/coinmonks/turing-machine-on-bitcoin-7f0ebe0d52b1)\\n\\nA tutorial on smart contract development for the NOTE protocol is being created, so stay tuned."},{"id":"n20-draft","metadata":{"permalink":"/blog/n20-draft","source":"@site/blog/2024-02-21-open-n20-draft.md","title":"N20 Token protocol draft is out","description":"NOTE: The Bitcoin Protocol with Smart Contract Capabilities","date":"2024-02-21T00:00:00.000Z","tags":[{"inline":true,"label":"N20","permalink":"/blog/tags/n-20"},{"inline":true,"label":"Draft","permalink":"/blog/tags/draft"}],"readingTime":9.725,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"n20-draft","title":"N20 Token protocol draft is out","tags":["N20","Draft"]},"unlisted":false,"prevItem":{"title":"Continuous Upgrades to the NOTE Protocol","permalink":"/blog/n20-upgrade"},"nextItem":{"title":"NoteProtocol v2.0 Draft is out","permalink":"/blog/release-2.0-draft"}},"content":"## NOTE: The Bitcoin Protocol with Smart Contract Capabilities\\n\\n**The NOTE protocol marks a significant advancement in the history of Bitcoin.**\\n\\nThe NOTE protocol is a digital asset issuance protocol based on Bitcoin\'s UTXO model, distinct from many recently emerged protocols, as NOTE is genuinely rooted in Bitcoin\'s UTXO model. It utilizes a smart contract language compatible with Typescript, whose compilation results in Bitcoin native opcodes, enabling a powerful feature set that includes Oracles and zero-knowledge proofs.\\n\\nUnlike protocols such as Ordinals and Atomicals, NOTE also uses an indexer to tally user assets, but it is entirely based on cryptography, secured by Bitcoin miners to ensure asset ownership, thus avoiding misoperations due to indexer tagging. Moreover, NOTE\'s transaction costs are extremely low, eliminating the need to send two transactions as with Ordinals and Atomicals. More importantly, the NOTE protocol supports smart contracts, for instance, enabling Bitwork mining and a diminishing mining quantity over time. It employs actual Token values, not based on prime protocols numbered by Satoshi nor dependent on UTXO balance coloring schemes.\\n\\nCompared to many \\"inter-chain bridging protocols,\\" NOTE issues native Bitcoin assets, avoiding operations that involve using BTC as collateral to issue and trade assets on other chains.\\n\\n| Protocol | Ordinals/BRC20 | Atomicals/ARC20 | EVM/Zk Layer2 | NOTE/N20 |\\n|-------|-------|-------|-------|-------|\\n| UTXO | YES | YES | NO | YES| \\n| Bitcoin Assets | YES | YES | NO | YES | \\n| Smart Contract | NO | NO | YES(EVM) | YES(Bitcoin OP Codes) | \\n| Indexer | YES | YES | NO | YES | \\n| Index Logic | Satoshi Ordinals | Colored Satoshi | - | Cryptography | \\n| Cross Chain Transfer | NO | NO | YES with bridge | YES | \\n| Fee(Gas) | High | High | Medium-Low | Low | \\n| Fund | NO | unknown | YES or unknown | NO | \\n\\nThe NOTE protocol supports cross-chain functionality, allowing native assets on Bitcoin to be sent to other UTXO chains, as well as receiving assets from these chains. All of this is based on cryptography and the consensus of the Bitcoin blockchain.\\n\\nThis protocol is entirely the result of open-source contributions from Bitcoin development luminaries, with no institutional investment involved.\\n\\nNow, let\'s delve into a detailed **technical interpretation**:\\n\\nThe last bull market was ignited by a large number of institutional investment projects and ultimately collapsed with the downfall of institutions like FTX. Starting from the bear market bottom in 2023, the market has returned to the grassroots and developer enthusiasts\' home ground. Inscriptions led the market trend without any investment, bringing the advantages of the UTXO model back into the public eye. As the anchor of digital currency, Bitcoin needs usable and practical technological solutions to achieve asset appreciation and practical applications.\\n\\nCompared to the EVM, Bitcoin\'s UTXO model has significant efficiency and concurrency advantages. However, issuing native assets on Bitcoin\'s UTXO model involves several challenging issues, mainly how assets are identified. Another issue is how assets are preserved in closely linked transactions.\\n\\nA UTXO-style transaction is illustrated as follows:\\n\\n![Image1](/blog/n20-1.png)\\n\\nThe NOTE protocol adopts an innovative approach to managing Bitcoin transactions and assets, significantly different from other protocol solutions. In traditional Bitcoin transactions, the input part of a transaction unlocks a previous transaction\'s output (i.e., the old UTXO) and generates new transaction outputs (i.e., new UTXOs). In other protocol solutions, assets are tied to newly generated UTXOs, causing users\' assets to be scattered across different UTXOs. This method requires indexers and wallets to maintain a comprehensive list of UTXOs to ensure the accuracy of asset binding relationships. It also necessitates careful management of UTXOs with asset tags to avoid spending mistakes, and the entire UTXO must be spent at once.\\n\\nIn contrast, the NOTE protocol employs a method that treats transaction outputs as user accounts, where a user\'s account is represented by the transaction output script hash, as illustrated by the TX1 transaction output in the example. This account is entirely private, and the types and quantities of assets tied to it are derived from the unlocking inputs of TX1. When these assets are spent in TX2, after being unlocked and confirmed by Bitcoin miners, new transaction outputs are generated. During this process, the indexer of the NOTE protocol only needs to record the transaction details disclosed at the time of unlocking and can provide a Merkle proof after block confirmation to verify the transaction\'s validity.\\n\\nThis design not only simplifies asset tracking and management, reducing the issue of asset fragmentation, but also enhances transaction privacy. By using transaction outputs as accounts and relying on the verification by Bitcoin network miners and the blockchain consensus mechanism, the NOTE protocol offers a more secure, efficient, and privacy-preserving method for managing digital assets.\\n\\nA typical Taproot P2TR format transaction is illustrated as follows:\\n\\n![Image2](/blog/n20-2.png)\\n\\nThe technical strategy adopted by the NOTE protocol significantly differs from the Ordinals and Atomicals protocols. Ordinals and Atomicals utilize the redemption script of P2TR (Taproot) to create an inaccessible data area by adding OP_FALSE OP_IF opcodes, embedding additional data. In contrast, the NOTE protocol allows direct manipulation of unlocking data through opcodes, enhancing data usability. In the NOTE protocol, example scripts can directly pop data from the stack, while more complex scripts can perform on-chain checks such as hashlock.\\n\\nMoreover, the NOTE protocol is not limited to using P2TR; it can also be implemented through P2SH (Pay to Script Hash), P2WSH (Pay to Witness Script Hash), and non-standard scripts, increasing the protocol\'s flexibility and the capability for cross-chain asset transactions. A key innovation of the NOTE protocol is its use of msgpack encoding instead of json encoding for data, which is more compact and helps reduce the data volume per transaction, thereby lowering transaction costs for users.\\n\\nIn the NOTE protocol, addresses constructed by specific redemption scripts act as user accounts. These account addresses can only be confirmed by miners when correctly unlocked. The asset transaction data contained in the unlocking script is recognized by the indexer upon unlocking and processed by off-chain smart contracts. Only asset transactions verified by off-chain contracts are recorded by the indexer, effectively preventing Bitcoin wallets from mistakenly spending NOTE\'s UTXO and allowing the recovery of small amounts of Bitcoin (e.g., 546 Satoshi) in UTXOs.\\n\\nThe design of the NOTE protocol considers multiple upgrades to privacy and transaction space optimization in the Bitcoin network since 2017. At the same time, it draws on the large block strategy represented by BSV (Bitcoin SV), delving into the potential of Bitcoin scripting. The smart contract solution of the NOTE protocol is based on the Bitcoin smart contract language developed by the [sCrypt](https://scrypt.io) team, which supports off-chain contract verification. Since the Bitcoin script language is Turing complete and ensures execution within a given script length, indexers are not trapped in infinite loops due to poorly designed smart contracts, ensuring system stability and efficiency.\\n\\nA demo smart contract project has been released on GitHub.\\n\\nhttps://github.com/NoteProtocol/scryptdemo \\n\\n![Image3](/blog/n20-3.png)\\n\\nIt demonstrates the capability of the NOTE protocol to implement complex logic on the Bitcoin network through simulating Bitcoin mining\'s halving mechanism and Atomicals\' Bitwork difficulty mining with a PoW contract. By generating a 1KB Bitcoin script, the contract allows indexers to call and verify whether transactions comply with the protocol, showcasing the feasibility and flexibility of smart contracts on the Bitcoin network.\\n\\nThe use of Rabin signature algorithm Oracles and complex contracts based on zero-knowledge proofs provides a higher level of security and privacy protection. These technologies play a crucial role in the implementation of smart contracts, especially when verifying specific conditions or executing particular logic.\\n\\nLeveraging these smart contracts, asset issuance on Bitcoin can be used to realize real-world application scenarios, such as bounty scenarios for solving problems with AI. In such scenarios, anyone who can submit a verifiable computational result can receive a reward. This not only demonstrates the practicality of Bitcoin smart contracts but also shows how they can facilitate the realization of complex applications beyond traditional financial transactions and asset management.\\n\\nThe application prospects and implementation mechanisms of smart contracts on the Bitcoin network reflect an important direction in the development of cryptocurrency technology: combining blockchain\'s decentralization and immutability with complex business logic and application scenarios to explore new possibilities. For those interested in delving deeper or participating in development, following and learning from these smart contract projects and their implementations on GitHub is undoubtedly a valuable resource.\\n\\nThe latest developments and announcements of the NOTE protocol showcase its depth and breadth in the blockchain technology field. The issuance of N20 Token assets is just one of the many functions of the NOTE protocol. It also includes DID (Decentralized Identity), encrypted data, and ownership identification, and with the formulation and verification process of N721 NFTs and Alias (Bitcoin alias system), the capabilities and application scope of the NOTE protocol are expected to expand further.\\n\\nCurrently, to allow users to experience the minting and transferring of N20 Tokens, a command-line wallet has been released on GitHub, and an open-source indexer is also planned to be released. The openness of these tools and resources aims to encourage community member participation and practical experience with the NOTE protocol\'s functions, thereby accelerating the protocol\'s testing, improvement, and application development.\\n\\nThe open-source contributors behind the NOTE protocol emphasize that all content is for technical discussion only, and any asset issuance and speculation are unrelated to the contributors. This stance encourages a community environment centered on technology and innovation, rather than speculation and investment.\\n\\nAs the NOTE protocol continues to be developed and refined, it is foreseeable that more real applications based on this protocol will emerge. These applications will leverage the unique functions and advantages of the NOTE protocol to create new value and possibilities in Bitcoin and broader blockchain fields. The ongoing contributions and collaborative spirit of the open-source community are indispensable forces driving this process.\\n\\n## Summary\\n\\nThe NOTE protocol represents a significant advancement in the expansion of the Bitcoin network towards smart contract functionality. By introducing smart contracts to Bitcoin, the most original and widely used cryptocurrency platform, the NOTE protocol not only enhances Bitcoin\'s functionality but also offers unprecedented possibilities for innovation to developers and users. Here are several key features of the NOTE protocol:\\n\\nSmart Contract Support: The NOTE protocol extends the application range of Bitcoin through smart contracts, allowing for the creation and execution of more complex logic and transaction types on the Bitcoin network. This includes, but is not limited to, asset issuance, decentralized finance (DeFi) applications, and other scenarios requiring conditional execution.\\n\\nUTXO-based Model: Unlike account-based smart contract platforms, the NOTE protocol is built on Bitcoin\'s UTXO model, leveraging Bitcoin\'s security and efficiency.\\n\\nCross-chain Functionality: The NOTE protocol supports cross-chain transactions, enabling digital assets to move between different UTXO chains, further enhancing its flexibility and application scope.\\n\\nReal-world Applications: The NOTE protocol supports advanced cryptographic technologies, such as zero-knowledge proofs and Rabin signature algorithms, which can be applied in more complex real-world application scenarios.\\n\\nLow Cost and High Efficiency: By optimizing data storage and using msgpack encoding, the NOTE protocol aims to reduce transaction costs and improve network efficiency.\\n\\nOpen Source and Community-driven: The NOTE protocol emphasizes the spirit of open source and community contribution, promoting the transparency and trustworthiness of the technology while also encouraging broader development and application innovation.\\n\\nAs the NOTE protocol continues to develop and its applications deepen, we can expect to see more innovative applications and services emerging in the Bitcoin ecosystem, all of which will provide users with richer functionality and a better experience while maintaining Bitcoin\'s core values.\\n\\nWebsite: https://noteprotocol.org\\n\\nX: https://twitter.com/NoteProtocol\\n\\nGitHub: https://github.com/NoteProtocol\\n\\nSmart Contract Language: https://docs.scrypt.io/"},{"id":"release-2.0-draft","metadata":{"permalink":"/blog/release-2.0-draft","source":"@site/blog/2024-01-01-release-2.0-draft.md","title":"NoteProtocol v2.0 Draft is out","description":"\ud83d\ude80 Exciting update from our team: We\u2019ve crafted a #Bitcoin protocol, tailored for #UTXO-based blockchains. This protocol not only allows for the creation of tokens and NFTs but also integrates optional data #encryption, #SmartContracts, and #DID definitions, all under the MIT License.","date":"2024-01-01T00:00:00.000Z","tags":[{"inline":true,"label":"NoteProtocol","permalink":"/blog/tags/note-protocol"}],"readingTime":0.825,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"release-2.0-draft","title":"NoteProtocol v2.0 Draft is out","tags":["NoteProtocol"]},"unlisted":false,"prevItem":{"title":"N20 Token protocol draft is out","permalink":"/blog/n20-draft"}},"content":"\ud83d\ude80 Exciting update from our team: We\u2019ve crafted a #Bitcoin protocol, tailored for #UTXO-based blockchains. This protocol not only allows for the creation of tokens and NFTs but also integrates optional data #encryption, #SmartContracts, and #DID definitions, all under the MIT License.\\n\\n\ud83d\udd2c The first segment has been successfully tested on #BTC, #RXD, and #BSV networks. The #NFT/#Token/Indexer features are nearing completion, with a January release following thorough validation to ensure a high-security standard.\\n\\n\ud83c\udf0d As we move forward, we\u2019re inviting the community to contribute to this evolving project. Our goal is to establish a protocol committee of contributors, dedicated to promoting and enhancing the protocol, ensuring it serves the global Bitcoin community effectively.\\n\\n\ud83d\udd27 Your input is vital in this journey of innovation and collaboration. We\u2019re here to support projects leveraging this protocol, fostering a secure and dynamic blockchain ecosystem.\\n\\n\ud83d\udd14 Stay connected for detailed updates and be part of shaping the future of blockchain technology. #BlockchainEngineering #BitcoinProtocol #DecentralizedInnovation #OpenSourceFuture\\n\\nHappy New Year everyone!"}]}}')}}]);