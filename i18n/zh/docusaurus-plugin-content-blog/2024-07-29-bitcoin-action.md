# Bitcoin Action的诞生和实现

NOTE协议的首席贡献者、日本区块链技术公司ChainBow在EDCON 2024期间发布了新的比特币与dApp交互协议 Bitcoin Action，并演示了钱包和dApp之间的交互。

![Image1](/blog/action.png)

<!--truncate-->

自2011年的比特币BIP21协议起，到以太坊的[Wallet Connect](https://walletconnect.com/)，再到 [Solana Action](https://solana.com/solutions/actions)协议，钱包和dApp的交互协议经历了多次技术更新，用户体验不断提升。

最早的[BIP21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki)协议提供了一个支付用的URI schema，由接收地址和转账金额组成。用户通过钱包扫描二维码进行支付，这是一个单向的交互过程。随后，[BIP70](https://bitcoinops.org/en/topics/bip70-payment-protocol/)/71/72等更新的版本出现，其主要针对比特币在支付场景中商家的安全交互。

2017年之后，dApp 应用的兴起使钱包和dApp的交互不仅限于支付场景。去中心化应用功能更强大，交互涉及智能合约调用、各种场景的签名以及 DID（去中心化身份）的兴起，增加了交互的复杂性和概念的多样性，这让用户感到困惑。目前，具体的 Web3 应用仍未被广泛采用。

2024年6月，Solana发布了新的Action协议，大幅简化了钱包和dApp的交互流程，去掉了 Connect Wallet 这一步骤。在支付、领取空投、Mint NFT、获取 Meme Coin以及与 DEX 交互等场景中，提高了易用性。

如今到了2024年7月，Bitcoin Action协议也正式到来。这个新协议在遵循Solana Action流程的基础上进行了适当改进。比特币与Solana不同，使用部分签名交易（PSBT）格式，支持优秀的资产发行NOTE协议，从而在比特币上也可以为用户带来便捷的交互体验。收发BTC、NOTE Token、领取NOTE协议的空投、Mint NFT以及在DEX 
[UtxoExchange](https://utxo.exchange) 上购买数字资产变得非常简洁。新技术为开发者在比特币上创造新的产品和应用，为用户带来新的财富效应。

完整的协议、钱包[ChainBow](https://chainbow.io)以及开源示例代码将于近日公开。

![Image2](/blog/action-sample.png)
