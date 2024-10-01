# Bitcoin/Note Actions (草案)

Bitcoin/Note Actions 受 [Solana Actions](https://solana.com/docs/advanced/actions) 的启发。

Bitcoin/NOTE Actions 是一套规范的交互流程。使用它可以实现比特币区块链上的代币发送，PSBT交易签名，不需要第三方类似Wallet Connect的连接服务，也不需要钱包内置浏览器进行网页脚本植入。结合[Open Graph protocol](https://ogp.me/)，可以实现在X，Discord，Telegram等社交媒体上的预览交易。它兼容BIP21比特币支付协议。

## 时序图

Action协议定义4组URI Schema，钱包应该同时支持4组Schema，至少应该支持Bitcoin相关的两组。交互时序图如下：

![image](/actions/sequence.png)

## 比特币支付方案 (BIP21)

参考：https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki

比特币支付方案完全符合 BIP21。
方案格式如下：

```text
bitcoin:<address>[?amount=<amount>][?label=<label>][?message=<message>]
```

- `<address>`：这是比特币接收地址（必需）。
- `amount=<amount>`：指定要发送的比特币数量（可选）。
- `label=<label>`：用于为接收者添加标签或名称（可选）。
- `message=<message>`：附加支付消息（可选）。

示例：

```text
bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.1&label=Donation&message=Thank%20you
```

此 URI 表示向地址 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa 发送 0.1 BTC，标签为 "Donation"，消息为 "Thank you"。

## NOTE 支付方案

类似于 BIP21，NOTE 支付方案定义如下：

```text
note:<address>?tick=<tick>[&p=n20][&amount=<amount>][&label=<label>][&message=<message>][&network=BTClivenet]
```

字段说明：

1. `note:`：协议前缀，表示这是基于 NOTE 协议的 URI，类似于 BIP21 中的 bitcoin: 前缀，用于标识 NOTE 协议的支付或交互。

2. `<address>`：NOTE 协议中的接收地址，必需。可以是公钥地址或资产在 NOTE 协议中的账户地址。

3. `tick=<tick>`：资产名称，必需。例如，可以是特定的代币名称（如 NOTE）或其他用户定义的资产标识符。此字段表示交易中涉及的资产类型。

4. `p=n20`（可选，默认值为 n20）：资产协议类型。
   - n20：表示基于 NOTE 协议的标准代币，类似于 ERC-20 标准代币。
   - n721：表示基于 NOTE 协议的 NFT（非同质化代币），类似于 ERC-721 标准 NFT。
   - alias：表示基于 NOTE 协议的公钥别名。
   - 如果未提供 p 参数，则默认为 n20，表示常规代币交易。

5. `amount=<amount>`（可选）：交易中的资产数量。通常用于指定要转移的代币数量。在 p=n20 的情况下，通常表示标准代币的数量；对于 p=n721，amount 可能表示 NFT 的数量，通常为 1。

6. `label=<label>`（可选）：为接收者添加标签，通常用于描述地址或账户名称以便于识别。例如，label=Donation 可以表示这是一次捐赠。

7. `message=<message>`（可选）：附加信息，用户可以添加简短的文本消息以进行支付说明或备注。

8. `network=BTClivenet`（可选，默认值为 BTClivenet）：用于交易的区块链网络。默认值为 BTClivenet，表示使用比特币主网。支持的钱包还可以指定其他网络，如测试网或其他链上的网络。
   - BTClivenet：比特币主网。
   - BTCtestnet：比特币测试网。
   - 其他网络：如果钱包支持其他区块链或网络（如第 2 层或侧链），可以在此字段中指定。

方案示例：

1. 常规代币交易（默认值为 n20）：

```text
note:bc1pcuh2nlk4zld8ljklal64ks4hznh7q94lxkguzrsk55dg84qgrt6qswzywl?tick=NOTE&amount=100&label=Payment&message=Invoice%20123&network=BTClivenet
```

- 向地址 bc1pcuh2nlk4zld8ljklal64ks4hznh7q94lxkguzrsk55dg84qgrt6qswzywl 发送 100 NOTE 代币
- label=Payment 表示此交易为支付。
- message=Invoice 123 是附加的交易备注。
- network=BTClivenet 指定使用比特币主网。

2. NFT 交易（n721）：

```text
note:tb1plvfewft7ewsm29eery598syzpy34hdnzfqh2a0m92ctsgskh7pgq75jg49?tick=NFTArt&p=n721&label=ArtTrade&message=ExclusiveArtwork&network=BTCtestnet
```

- 向地址 tb1plvfewft7ewsm29eery598syzpy34hdnzfqh2a0m92ctsgskh7pgq75jg49 发送名为 NFTArt 的 NFT。
  - p=n721 表示这是一次 NFT 交易。
  - label=ArtTrade 表示这是一次艺术品交易。
  - message=ExclusiveArtwork 是附加的交易描述。
  - network=BTCtestnet 表示使用比特币测试网。

## 简化类型定义

此 README 文件中声明的类型和接口通常是简化版本，以便于阅读。

为了更好的类型安全性和改进的开发者体验，`@note-protocol/actions-spec` 包含更复杂的类型定义。

## 规范

Bitcoin/Note Actions 规范包括作为请求/响应交互流程一部分的关键部分：

- Bitcoin/Note Action [URL 方案](#url-scheme) 提供一个 Action URL
- [GET 请求](#get-request) 到 Action URL
- 来自服务器的 [GET 响应](#get-response)
- [POST 请求](#post-request) 到 Action URL
- 来自服务器的 [POST 响应](#post-response)

这些请求由 _Action 客户端_（例如钱包应用、浏览器扩展、dApp、网站等）发出，以收集特定的元数据用于丰富的用户界面，并促进用户输入到 Actions API。

这些响应由应用程序（例如网站、服务器后端等）制作并返回给 _Action 客户端_。最终，提供一个可签名的交易或消息，供钱包提示用户批准、签名并发送到区块链。

服务器 API 应遵守 [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) 要求，以确保客户端可以安全地发出请求。

### URL 方案

Bitcoin/Note Action URL 描述了一个使用 `bitcoin-action` 或 `note-action` 协议的可签名比特币 PSBT 交易或消息的交互请求。

请求是交互式的，因为 URL 中的参数由客户端用于发出一系列标准化的 HTTP 请求，以为用户组成一个可签名的交易或消息，供用户使用他们的钱包签名。

```text
bitcoin-action:<link>
```

```text
note-action:<link>
```

- 单个 `link` 字段是必需的，作为路径名。该值必须是有条件的 [URL 编码](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 的绝对 HTTPS URL。

- 如果 URL 包含查询参数，则必须进行 URL 编码。URL 编码的值可以防止与任何可能通过协议规范添加的 Actions 协议参数冲突。

- 如果 URL 不包含查询参数，则不应进行 URL 编码。这会生成更短的 URL 和更不密集的二维码。

在任何情况下，客户端都必须 [URL 解码](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent) 该值。如果该值未进行 URL 编码，则不会产生任何影响。如果解码后的值不是绝对的 HTTPS URL，钱包必须将其拒绝为 **格式错误**。

### GET 请求

Action 客户端（例如钱包、浏览器扩展等）应向 Action 的 URL 端点发出 HTTP `GET` JSON 请求。

- 请求不应识别钱包或用户。
- 客户端应使用 [`Accept-Encoding` 头](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) 发出请求。
- 客户端应在请求发出时显示 URL 的域名。

### GET 响应

Action 的 URL 端点（例如应用程序或服务器后端）应以 HTTP `OK` JSON 响应（正文中包含有效负载）或适当的 HTTP 错误进行响应。

- 客户端必须处理 HTTP [客户端错误](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses)、[服务器错误](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses) 和 [重定向响应](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages)。
- 端点应使用 [`Content-Encoding` 头](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding) 进行 HTTP 压缩响应。
- 端点应使用 [`Content-Type` 头](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) 响应 `application/json`。

- 除非 HTTP 缓存响应头另有指示，客户端不应缓存响应。
- 客户端应显示 `title` 并向用户渲染 `icon` 图像。

#### GET 响应正文

HTTP `OK` JSON 响应的 `GET` 响应应包含符合接口规范的正文负载：

```ts filename="ActionGetResponse"
export interface ActionGetResponse {
  /** 表示操作请求来源的图标 URL */
  icon: string;
  /** 描述操作请求的来源 */
  title: string;
  /** 对要执行的操作的简要总结 */
  description: string;
  /** 向用户呈现的按钮文本 */
  label: string;
  /** 向用户呈现的按钮的 UI 状态 */
  disabled?: boolean;
  links?: {
    /** 用户可以执行的相关操作列表 */
    actions: LinkedAction[];
  };
  /** 向用户显示的非致命错误消息 */
  error?: ActionError;
}
```

- `icon` - 该值必须是图标图像的绝对 HTTP 或 HTTPS URL。文件必须是 SVG、PNG 或 WebP 图像，否则客户端/钱包必须将其拒绝为 **格式错误**。

- `title` - 该值必须是表示操作请求来源的 UTF-8 字符串。例如，这可能是发出请求的品牌、商店、应用程序或个人的名称。

- `description` - 该值必须是提供操作信息的 UTF-8 字符串。描述应显示给用户。

- `label` - 该值必须是将呈现在用户点击的按钮上的 UTF-8 字符串。所有标签不应超过 5 个单词短语，并应以动词开头，以明确您希望用户采取的操作。例如，“铸造 NFT”、“投票赞成”或“质押 1 SOL”。

- `disabled` - 该值必须是布尔值，表示呈现的按钮（显示 `label` 字符串）的禁用状态。如果未提供值，`disabled` 应默认为 `false`（即默认启用）。例如，如果操作端点是已关闭的治理投票，请设置 `disabled=true`，并且 `label` 可以是“投票已关闭”。

- `error` - 非致命错误的可选错误指示。如果存在，客户端应将其显示给用户。如果设置，它不应阻止客户端解释操作或将其显示给用户。例如，错误可以与 `disabled` 一起使用，以显示业务约束、授权、状态或外部资源错误等原因。

```ts filename="ActionError"
export interface ActionError {
  /** 向用户显示的非致命错误消息 */
  message: string;
}
```

- `links.actions` - 端点的相关操作的可选数组。用户应为每个列出的操作显示 UI，并期望仅执行一个操作。例如，治理投票操作端点可能会返回三个选项供用户选择：“投票赞成”、“投票反对”和“弃权”。

  - 如果未提供 `links.actions`，客户端应使用根 `label` 字符串呈现一个按钮，并向与初始 GET 请求相同的操作 URL 端点发出 POST 请求。

  - 如果提供了任何 `links.actions`，客户端应仅基于 `links.actions` 字段中列出的项目呈现按钮。客户端不应为根 `label` 的内容呈现按钮。

```ts filename="LinkedAction"
export interface LinkedAction {
  /** 操作的 URL 端点 */
  href: string;
  /** 向用户呈现的按钮文本 */
  label: string;
  /**
   * 在操作中接受用户输入的参数
   * @see {ActionParameter}
   * @see {ActionParameterSelectable}
   */
  parameters?: Array<TypedActionParameter>;
}
```

`ActionParameter` 允许声明 Action API 请求用户输入的内容：

```ts filename="ActionParameter"
/**
 * 在操作中接受用户输入的参数
 * 注意：为了便于阅读，这是实际类型的简化版本
 */
export interface ActionParameter {
  /** URL 中的参数名称 */
  name: string;
  /** 用户输入字段的占位符文本 */
  label?: string;
  /** 声明此字段是否为必填字段（默认为 `false`） */
  required?: boolean;
}
```

基于 URI 类型触发转账：

- BIP21 URI：当 href 包含 BIP21 URI（例如，`bitcoin:<address>?amount=<amount>&label=<label>`）时，钱包或客户端将其解释为比特币转账请求。客户端提示用户批准并签署比特币交易。
- NOTE 支付 URI：如果 href 包含 NOTE 支付 URI（例如，`note:<address>?tick=<tick>[&amount=<amount>]`），客户端将其识别为 NOTE 协议下的资产转移。提示用户发起并签署 NOTE 资产转移。

### POST 请求

客户端必须向操作 URL 发出 HTTP `POST` JSON 请求，正文负载为：

```json
{
  "account": "<account>",
  "walletId": "<id>",
  "address":"<address>",
  "tokenAddress":"<address>"
}
```

- `account` - 该值必须是可能签署交易的账户的十六进制编码公钥。
- `walletId` - 该值是可选的，用于标识当前钱包的唯一 ID。
- `address` - 该值是可选的，用于标识当前钱包的主地址。
- `tokenAddress` - 该值是可选的，用于标识当前钱包的 NOTE 协议代币地址。

客户端应使用 [Accept-Encoding 头](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) 发出请求，应用程序可以使用 [Content-Encoding 头](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding) 进行 HTTP 压缩响应。

客户端应在请求发出时显示操作 URL 的域名。如果发出了 `GET` 请求，客户端还应显示 `title` 并渲染来自该 GET 响应的 `icon` 图像。

### POST 响应

Action 的 `POST` 端点应以 HTTP `OK` JSON 响应（正文中包含有效负载）或适当的 HTTP 错误进行响应。

- 客户端必须处理 HTTP [客户端错误](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses)、[服务器错误](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses) 和 [重定向响应](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages)。
- 端点应使用 [`Content-Type` 头](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) 响应 `application/json`。

#### POST 响应正文

HTTP `OK` JSON 响应的 `POST` 响应应包含符合接口规范的正文负载：

```ts filename="ActionPostResponse"
export interface ActionPostResponse {
  /** Bitcoin/Note BIP21 URI */
  href?: string;
  /** 十六进制编码的序列化交易 */
  psbtHex?: string;
  /** 描述交易的性质 */
  message?: string;
  /** 用于交易或消息的方法，默认为 `sign` */
  method?: "sign" | "finish";
  /** msgpack 编码的序列化 note 负载 */
  payload?: string;
  /** 要花费的 note utxos */
  noteUtxo?: any;
  /** 要创建的 note 输出 */
  extOutputs?: Array<any>;
  /** 在交易签署后使用 POST 方法调用的回调 URL */
  callback?: string;
  /** 向用户显示的非致命错误消息 */
  error?: ActionError;
}
```

- `href` - 一个 Bitcoin/Note 支付 URI。如果不符合规则，将被忽略。

- `psbtHex` - 该值必须是十六进制编码的序列化 PSBT（部分签名的比特币交易）。客户端必须对 PSBT 进行十六进制解码并反序列化。

- `message` - 该值必须是描述响应中包含的交易性质的 UTF-8 字符串。客户端应将此值显示给用户。例如，这可能是购买商品的名称、购买时应用的折扣或感谢信。

- `method` - 该值必须是 "sign" 或 "finish"，表示用于交易或消息的方法。如果未提供，默认为 "sign"。

- `payload` - 该值必须是 msgpack 编码的序列化 note 负载。

- `noteUtxo` - 表示要在交易中花费的 note UTXOs。

- `extOutputs` - 表示要在交易中创建的 note 输出的数组。

- `callback` - 在交易签署后使用 POST 方法调用的回调 URL。客户端应处理回调的返回值作为下一个 ActionPostResponse。

客户端按照 `href`、`psbtHex`、`payload`、`callback` 的顺序处理。如果 `href` 存在，则忽略 `psbtHex` 和 `payload`。如果 `psbtHex` 存在，则忽略 `payload`。如果 `callback` 存在，则最后处理。

客户端和应用程序应允许请求正文和响应正文中的其他字段，这些字段可能是未来规范更新添加的。

> 应用程序可能会响应一个部分或完全签名的交易。客户端和钱包必须将交易验证为 **不受信任**。

## 关于 BLinks

Bitcoin/Note Actions 的目的是完善和简化钱包和dApp之间的交互流程，未提供类似Solana的 BLinks 规范。建议dApp结合[Open Graph protocol](https://ogp.me/)，可以实现在X，Discord，Telegram等社交媒体上的预览交易。如下图的事例所示。

![image](/actions/x.png)
![image](/actions/tg.png)

## 许可证

Bitcoin/Note Actions JavaScript SDK 是开源的，并在 Apache License, Version 2.0 下可用。
