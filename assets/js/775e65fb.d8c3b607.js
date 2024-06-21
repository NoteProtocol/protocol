"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[3956],{4390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(6070),o=n(5710);const s={slug:"n20-draft",title:"N20 Token protocol draft is out",tags:["N20","Draft"]},a=void 0,r={permalink:"/blog/n20-draft",source:"@site/blog/2024-02-21-open-n20-draft.md",title:"N20 Token protocol draft is out",description:"NOTE: The Bitcoin Protocol with Smart Contract Capabilities",date:"2024-02-21T00:00:00.000Z",tags:[{inline:!0,label:"N20",permalink:"/blog/tags/n-20"},{inline:!0,label:"Draft",permalink:"/blog/tags/draft"}],readingTime:9.725,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"n20-draft",title:"N20 Token protocol draft is out",tags:["N20","Draft"]},unlisted:!1,prevItem:{title:"Continuous Upgrades to the NOTE Protocol",permalink:"/blog/n20-upgrade"},nextItem:{title:"NoteProtocol v2.0 Draft is out",permalink:"/blog/release-2.0-draft"}},c={authorsImageUrls:[]},l=[{value:"NOTE: The Bitcoin Protocol with Smart Contract Capabilities",id:"note-the-bitcoin-protocol-with-smart-contract-capabilities",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",h2:"h2",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"note-the-bitcoin-protocol-with-smart-contract-capabilities",children:"NOTE: The Bitcoin Protocol with Smart Contract Capabilities"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"The NOTE protocol marks a significant advancement in the history of Bitcoin."})}),"\n",(0,i.jsx)(t.p,{children:"The NOTE protocol is a digital asset issuance protocol based on Bitcoin's UTXO model, distinct from many recently emerged protocols, as NOTE is genuinely rooted in Bitcoin's UTXO model. It utilizes a smart contract language compatible with Typescript, whose compilation results in Bitcoin native opcodes, enabling a powerful feature set that includes Oracles and zero-knowledge proofs."}),"\n",(0,i.jsx)(t.p,{children:"Unlike protocols such as Ordinals and Atomicals, NOTE also uses an indexer to tally user assets, but it is entirely based on cryptography, secured by Bitcoin miners to ensure asset ownership, thus avoiding misoperations due to indexer tagging. Moreover, NOTE's transaction costs are extremely low, eliminating the need to send two transactions as with Ordinals and Atomicals. More importantly, the NOTE protocol supports smart contracts, for instance, enabling Bitwork mining and a diminishing mining quantity over time. It employs actual Token values, not based on prime protocols numbered by Satoshi nor dependent on UTXO balance coloring schemes."}),"\n",(0,i.jsx)(t.p,{children:'Compared to many "inter-chain bridging protocols," NOTE issues native Bitcoin assets, avoiding operations that involve using BTC as collateral to issue and trade assets on other chains.'}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Protocol"}),(0,i.jsx)(t.th,{children:"Ordinals/BRC20"}),(0,i.jsx)(t.th,{children:"Atomicals/ARC20"}),(0,i.jsx)(t.th,{children:"EVM/Zk Layer2"}),(0,i.jsx)(t.th,{children:"NOTE/N20"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"UTXO"}),(0,i.jsx)(t.td,{children:"YES"}),(0,i.jsx)(t.td,{children:"YES"}),(0,i.jsx)(t.td,{children:"NO"}),(0,i.jsx)(t.td,{children:"YES"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Bitcoin Assets"}),(0,i.jsx)(t.td,{children:"YES"}),(0,i.jsx)(t.td,{children:"YES"}),(0,i.jsx)(t.td,{children:"NO"}),(0,i.jsx)(t.td,{children:"YES"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Smart Contract"}),(0,i.jsx)(t.td,{children:"NO"}),(0,i.jsx)(t.td,{children:"NO"}),(0,i.jsx)(t.td,{children:"YES(EVM)"}),(0,i.jsx)(t.td,{children:"YES(Bitcoin OP Codes)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Indexer"}),(0,i.jsx)(t.td,{children:"YES"}),(0,i.jsx)(t.td,{children:"YES"}),(0,i.jsx)(t.td,{children:"NO"}),(0,i.jsx)(t.td,{children:"YES"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Index Logic"}),(0,i.jsx)(t.td,{children:"Satoshi Ordinals"}),(0,i.jsx)(t.td,{children:"Colored Satoshi"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Cryptography"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cross Chain Transfer"}),(0,i.jsx)(t.td,{children:"NO"}),(0,i.jsx)(t.td,{children:"NO"}),(0,i.jsx)(t.td,{children:"YES with bridge"}),(0,i.jsx)(t.td,{children:"YES"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Fee(Gas)"}),(0,i.jsx)(t.td,{children:"High"}),(0,i.jsx)(t.td,{children:"High"}),(0,i.jsx)(t.td,{children:"Medium-Low"}),(0,i.jsx)(t.td,{children:"Low"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Fund"}),(0,i.jsx)(t.td,{children:"NO"}),(0,i.jsx)(t.td,{children:"unknown"}),(0,i.jsx)(t.td,{children:"YES or unknown"}),(0,i.jsx)(t.td,{children:"NO"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"The NOTE protocol supports cross-chain functionality, allowing native assets on Bitcoin to be sent to other UTXO chains, as well as receiving assets from these chains. All of this is based on cryptography and the consensus of the Bitcoin blockchain."}),"\n",(0,i.jsx)(t.p,{children:"This protocol is entirely the result of open-source contributions from Bitcoin development luminaries, with no institutional investment involved."}),"\n",(0,i.jsxs)(t.p,{children:["Now, let's delve into a detailed ",(0,i.jsx)(t.strong,{children:"technical interpretation"}),":"]}),"\n",(0,i.jsx)(t.p,{children:"The last bull market was ignited by a large number of institutional investment projects and ultimately collapsed with the downfall of institutions like FTX. Starting from the bear market bottom in 2023, the market has returned to the grassroots and developer enthusiasts' home ground. Inscriptions led the market trend without any investment, bringing the advantages of the UTXO model back into the public eye. As the anchor of digital currency, Bitcoin needs usable and practical technological solutions to achieve asset appreciation and practical applications."}),"\n",(0,i.jsx)(t.p,{children:"Compared to the EVM, Bitcoin's UTXO model has significant efficiency and concurrency advantages. However, issuing native assets on Bitcoin's UTXO model involves several challenging issues, mainly how assets are identified. Another issue is how assets are preserved in closely linked transactions."}),"\n",(0,i.jsx)(t.p,{children:"A UTXO-style transaction is illustrated as follows:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Image1",src:n(9716).A+"",width:"1050",height:"1278"})}),"\n",(0,i.jsx)(t.p,{children:"The NOTE protocol adopts an innovative approach to managing Bitcoin transactions and assets, significantly different from other protocol solutions. In traditional Bitcoin transactions, the input part of a transaction unlocks a previous transaction's output (i.e., the old UTXO) and generates new transaction outputs (i.e., new UTXOs). In other protocol solutions, assets are tied to newly generated UTXOs, causing users' assets to be scattered across different UTXOs. This method requires indexers and wallets to maintain a comprehensive list of UTXOs to ensure the accuracy of asset binding relationships. It also necessitates careful management of UTXOs with asset tags to avoid spending mistakes, and the entire UTXO must be spent at once."}),"\n",(0,i.jsx)(t.p,{children:"In contrast, the NOTE protocol employs a method that treats transaction outputs as user accounts, where a user's account is represented by the transaction output script hash, as illustrated by the TX1 transaction output in the example. This account is entirely private, and the types and quantities of assets tied to it are derived from the unlocking inputs of TX1. When these assets are spent in TX2, after being unlocked and confirmed by Bitcoin miners, new transaction outputs are generated. During this process, the indexer of the NOTE protocol only needs to record the transaction details disclosed at the time of unlocking and can provide a Merkle proof after block confirmation to verify the transaction's validity."}),"\n",(0,i.jsx)(t.p,{children:"This design not only simplifies asset tracking and management, reducing the issue of asset fragmentation, but also enhances transaction privacy. By using transaction outputs as accounts and relying on the verification by Bitcoin network miners and the blockchain consensus mechanism, the NOTE protocol offers a more secure, efficient, and privacy-preserving method for managing digital assets."}),"\n",(0,i.jsx)(t.p,{children:"A typical Taproot P2TR format transaction is illustrated as follows:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Image2",src:n(3279).A+"",width:"2220",height:"746"})}),"\n",(0,i.jsx)(t.p,{children:"The technical strategy adopted by the NOTE protocol significantly differs from the Ordinals and Atomicals protocols. Ordinals and Atomicals utilize the redemption script of P2TR (Taproot) to create an inaccessible data area by adding OP_FALSE OP_IF opcodes, embedding additional data. In contrast, the NOTE protocol allows direct manipulation of unlocking data through opcodes, enhancing data usability. In the NOTE protocol, example scripts can directly pop data from the stack, while more complex scripts can perform on-chain checks such as hashlock."}),"\n",(0,i.jsx)(t.p,{children:"Moreover, the NOTE protocol is not limited to using P2TR; it can also be implemented through P2SH (Pay to Script Hash), P2WSH (Pay to Witness Script Hash), and non-standard scripts, increasing the protocol's flexibility and the capability for cross-chain asset transactions. A key innovation of the NOTE protocol is its use of msgpack encoding instead of json encoding for data, which is more compact and helps reduce the data volume per transaction, thereby lowering transaction costs for users."}),"\n",(0,i.jsx)(t.p,{children:"In the NOTE protocol, addresses constructed by specific redemption scripts act as user accounts. These account addresses can only be confirmed by miners when correctly unlocked. The asset transaction data contained in the unlocking script is recognized by the indexer upon unlocking and processed by off-chain smart contracts. Only asset transactions verified by off-chain contracts are recorded by the indexer, effectively preventing Bitcoin wallets from mistakenly spending NOTE's UTXO and allowing the recovery of small amounts of Bitcoin (e.g., 546 Satoshi) in UTXOs."}),"\n",(0,i.jsxs)(t.p,{children:["The design of the NOTE protocol considers multiple upgrades to privacy and transaction space optimization in the Bitcoin network since 2017. At the same time, it draws on the large block strategy represented by BSV (Bitcoin SV), delving into the potential of Bitcoin scripting. The smart contract solution of the NOTE protocol is based on the Bitcoin smart contract language developed by the ",(0,i.jsx)(t.a,{href:"https://scrypt.io",children:"sCrypt"})," team, which supports off-chain contract verification. Since the Bitcoin script language is Turing complete and ensures execution within a given script length, indexers are not trapped in infinite loops due to poorly designed smart contracts, ensuring system stability and efficiency."]}),"\n",(0,i.jsx)(t.p,{children:"A demo smart contract project has been released on GitHub."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/NoteProtocol/scryptdemo",children:"https://github.com/NoteProtocol/scryptdemo"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Image3",src:n(5190).A+"",width:"1106",height:"299"})}),"\n",(0,i.jsx)(t.p,{children:"It demonstrates the capability of the NOTE protocol to implement complex logic on the Bitcoin network through simulating Bitcoin mining's halving mechanism and Atomicals' Bitwork difficulty mining with a PoW contract. By generating a 1KB Bitcoin script, the contract allows indexers to call and verify whether transactions comply with the protocol, showcasing the feasibility and flexibility of smart contracts on the Bitcoin network."}),"\n",(0,i.jsx)(t.p,{children:"The use of Rabin signature algorithm Oracles and complex contracts based on zero-knowledge proofs provides a higher level of security and privacy protection. These technologies play a crucial role in the implementation of smart contracts, especially when verifying specific conditions or executing particular logic."}),"\n",(0,i.jsx)(t.p,{children:"Leveraging these smart contracts, asset issuance on Bitcoin can be used to realize real-world application scenarios, such as bounty scenarios for solving problems with AI. In such scenarios, anyone who can submit a verifiable computational result can receive a reward. This not only demonstrates the practicality of Bitcoin smart contracts but also shows how they can facilitate the realization of complex applications beyond traditional financial transactions and asset management."}),"\n",(0,i.jsx)(t.p,{children:"The application prospects and implementation mechanisms of smart contracts on the Bitcoin network reflect an important direction in the development of cryptocurrency technology: combining blockchain's decentralization and immutability with complex business logic and application scenarios to explore new possibilities. For those interested in delving deeper or participating in development, following and learning from these smart contract projects and their implementations on GitHub is undoubtedly a valuable resource."}),"\n",(0,i.jsx)(t.p,{children:"The latest developments and announcements of the NOTE protocol showcase its depth and breadth in the blockchain technology field. The issuance of N20 Token assets is just one of the many functions of the NOTE protocol. It also includes DID (Decentralized Identity), encrypted data, and ownership identification, and with the formulation and verification process of N721 NFTs and Alias (Bitcoin alias system), the capabilities and application scope of the NOTE protocol are expected to expand further."}),"\n",(0,i.jsx)(t.p,{children:"Currently, to allow users to experience the minting and transferring of N20 Tokens, a command-line wallet has been released on GitHub, and an open-source indexer is also planned to be released. The openness of these tools and resources aims to encourage community member participation and practical experience with the NOTE protocol's functions, thereby accelerating the protocol's testing, improvement, and application development."}),"\n",(0,i.jsx)(t.p,{children:"The open-source contributors behind the NOTE protocol emphasize that all content is for technical discussion only, and any asset issuance and speculation are unrelated to the contributors. This stance encourages a community environment centered on technology and innovation, rather than speculation and investment."}),"\n",(0,i.jsx)(t.p,{children:"As the NOTE protocol continues to be developed and refined, it is foreseeable that more real applications based on this protocol will emerge. These applications will leverage the unique functions and advantages of the NOTE protocol to create new value and possibilities in Bitcoin and broader blockchain fields. The ongoing contributions and collaborative spirit of the open-source community are indispensable forces driving this process."}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"The NOTE protocol represents a significant advancement in the expansion of the Bitcoin network towards smart contract functionality. By introducing smart contracts to Bitcoin, the most original and widely used cryptocurrency platform, the NOTE protocol not only enhances Bitcoin's functionality but also offers unprecedented possibilities for innovation to developers and users. Here are several key features of the NOTE protocol:"}),"\n",(0,i.jsx)(t.p,{children:"Smart Contract Support: The NOTE protocol extends the application range of Bitcoin through smart contracts, allowing for the creation and execution of more complex logic and transaction types on the Bitcoin network. This includes, but is not limited to, asset issuance, decentralized finance (DeFi) applications, and other scenarios requiring conditional execution."}),"\n",(0,i.jsx)(t.p,{children:"UTXO-based Model: Unlike account-based smart contract platforms, the NOTE protocol is built on Bitcoin's UTXO model, leveraging Bitcoin's security and efficiency."}),"\n",(0,i.jsx)(t.p,{children:"Cross-chain Functionality: The NOTE protocol supports cross-chain transactions, enabling digital assets to move between different UTXO chains, further enhancing its flexibility and application scope."}),"\n",(0,i.jsx)(t.p,{children:"Real-world Applications: The NOTE protocol supports advanced cryptographic technologies, such as zero-knowledge proofs and Rabin signature algorithms, which can be applied in more complex real-world application scenarios."}),"\n",(0,i.jsx)(t.p,{children:"Low Cost and High Efficiency: By optimizing data storage and using msgpack encoding, the NOTE protocol aims to reduce transaction costs and improve network efficiency."}),"\n",(0,i.jsx)(t.p,{children:"Open Source and Community-driven: The NOTE protocol emphasizes the spirit of open source and community contribution, promoting the transparency and trustworthiness of the technology while also encouraging broader development and application innovation."}),"\n",(0,i.jsx)(t.p,{children:"As the NOTE protocol continues to develop and its applications deepen, we can expect to see more innovative applications and services emerging in the Bitcoin ecosystem, all of which will provide users with richer functionality and a better experience while maintaining Bitcoin's core values."}),"\n",(0,i.jsxs)(t.p,{children:["Website: ",(0,i.jsx)(t.a,{href:"https://noteprotocol.org",children:"https://noteprotocol.org"})]}),"\n",(0,i.jsxs)(t.p,{children:["X: ",(0,i.jsx)(t.a,{href:"https://twitter.com/NoteProtocol",children:"https://twitter.com/NoteProtocol"})]}),"\n",(0,i.jsxs)(t.p,{children:["GitHub: ",(0,i.jsx)(t.a,{href:"https://github.com/NoteProtocol",children:"https://github.com/NoteProtocol"})]}),"\n",(0,i.jsxs)(t.p,{children:["Smart Contract Language: ",(0,i.jsx)(t.a,{href:"https://docs.scrypt.io/",children:"https://docs.scrypt.io/"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9716:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/n20-1-cde9054912c3c65fdf5c79ee220b87ad.png"},3279:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/n20-2-1af9d959293b44e237e1417fd33f3b81.png"},5190:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/n20-3-f5e48b9da809ebcf49af3a978d9b7b58.png"},5710:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(758);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);