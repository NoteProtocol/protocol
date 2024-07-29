# The Birth and Realization of Bitcoin Action

During EDCON 2024, the chief contributor to the NOTE protocol, Japan's blockchain technology company ChainBow, released a new interaction protocol between Bitcoin and dApps called Bitcoin Action, and demonstrated interactions between wallets and dApps.

![Image1](/blog/action.png)

From the Bitcoin BIP21 protocol in 2011 to Ethereum's [Wallet Connect](https://walletconnect.com/), and then to the [Solana Action](https://solana.com/solutions/actions) protocol, wallet and dApp interaction protocols have undergone multiple technological updates, continuously improving user experience.

The earliest [BIP21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) protocol provided a URI schema for payments, consisting of a receiving address and a transfer amount. Users made payments by scanning QR codes with their wallets, which was a one-way interaction process. Subsequently, updated versions such as [BIP70](https://bitcoinops.org/en/topics/bip70-payment-protocol/)/71/72 emerged, focusing on secure interactions for merchants in Bitcoin payment scenarios.

Since 2017, the rise of dApp applications has extended wallet and dApp interactions beyond payment scenarios. Decentralized applications have become more powerful, involving interactions like smart contract calls, various signature scenarios, and the emergence of decentralized identities (DID), increasing the complexity and diversity of concepts, which has confused users. Currently, specific Web3 applications are still not widely adopted.

In June 2024, Solana released the new Action protocol, greatly simplifying the interaction process between wallets and dApps by removing the Connect Wallet step. It improved usability in scenarios such as payments, airdrop claims, Minting NFTs, obtaining Meme Coins, and interacting with DEXs.

Now, in July 2024, the Bitcoin Action protocol has officially arrived. This new protocol has made appropriate improvements based on the Solana Action process. Unlike Solana, Bitcoin uses the Partially Signed Bitcoin Transaction (PSBT) format and supports the excellent asset issuance NOTE protocol, bringing a convenient interaction experience to Bitcoin users. Receiving and sending BTC, NOTE Tokens, claiming airdrops of the NOTE protocol, Minting NFTs, and purchasing digital assets on the DEX [UtxoExchange](https://utxo.exchange) have become very simple. The new technology allows developers to create new products and applications on Bitcoin, bringing new wealth effects to users.

The complete protocol, [Wallet](https://chainbow.io), and open-source sample code will be publicly available soon.

![Image2](/blog/action-sample.png)
