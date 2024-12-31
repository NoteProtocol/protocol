# Bitcoin/Note Actions (Draft)

Bitcoin/Note Actions was inspired by [Solana Actions](https://solana.com/docs/advanced/actions).

Bitcoin/NOTE Actions is a standardized interaction process. It enables token transfers and PSBT transaction signing on the Bitcoin blockchain without the need for third-party services like Wallet Connect or wallet-embedded browsers for web script injection. Combined with the [Open Graph protocol](https://ogp.me/), it allows for transaction previews on social media platforms like X, Discord, and Telegram. It is compatible with the BIP21 Bitcoin payment protocol.

## Sequence Diagram

The Action protocol defines 4 sets of URI Schemas. Wallets should support all 4 schemas, with at least support for the two Bitcoin-related schemas. The interaction sequence diagram is as follows:

![image](/actions/sequence.png)

## Bitcoin Payment Scheme (BIP21)

Reference: https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki

The Bitcoin Payment Scheme is fully consistent with BIP21.
The Scheme format is:

```text
bitcoin:<address>[?amount=<amount>][?label=<label>][?message=<message>]
```

- `<address>`: This is the Bitcoin receiving address (required).
- `amount=<amount>`: Specifies the amount of Bitcoin to send (optional).
- `label=<label>`: Used to add a label or name for the recipient (optional).
- `message=<message>`: Attaches a payment message (optional).

Example:

```text
bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.1&label=Donation&message=Thank%20you
```

This URI indicates sending 0.1 BTC to the address 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa, with a "Donation" label and a "Thank you" message.

## NOTE Payment Scheme

Similar to BIP21, the NOTE Payment Scheme is defined as follows:

```text
note:<address>?tick=<tick>[&p=n20][&amount=<amount>][&label=<label>][&message=<message>][&network=BTClivenet]
```

Field explanations:

1. `note:`: Protocol prefix, indicating this is a URI based on the NOTE protocol, similar to the bitcoin: prefix in BIP21, used to identify the NOTE protocol for payment or interaction.

2. `<address>`: The recipient's address in the NOTE protocol, required. It can be a public key address or account address for assets in the NOTE protocol.

3. `tick=<tick>`: Asset name, required. For example, it can be a specific token name (e.g., NOTE) or other user-defined asset identifier. This field represents the type of asset involved in the transaction.

4. `p=n20` (optional, default is n20): Asset protocol type.
   - n20: Represents a standard token based on the NOTE protocol, similar to ERC-20 standard tokens.
   - n721: Represents an NFT (Non-Fungible Token) based on the NOTE protocol, similar to ERC-721 standard NFTs.
   - alias: Represents a public key alias based on the NOTE protocol.
   - If the p parameter is not provided, it defaults to n20, indicating a regular token transaction.

5. `amount=<amount>` (optional): The amount of assets in the transaction. Typically used to specify the number of tokens to transfer. In the case of p=n20, this usually represents the number of standard tokens; for p=n721, amount might represent the number of NFTs, typically 1.

6. `label=<label>` (optional): Adds a label for the recipient, usually used to describe the address or account name for easy identification. For example, label=Donation can indicate that this is a donation.

7. `message=<message>` (optional): Additional information, users can add a short text message for payment instructions or notes.

8. `network=BTClivenet` (optional, default is BTClivenet): The blockchain network used for the transaction. The default value is BTClivenet, indicating the use of the Bitcoin mainnet. Supported wallets can also specify other networks, such as testnets or networks on other chains.
   - BTClivenet: Bitcoin mainnet.
   - BTCtestnet: Bitcoin testnet.
   - Other networks: If the wallet supports other blockchains or networks (e.g., layer 2 or sidechains), they can be specified in this field.

Scheme Examples:

1. Regular token transaction (default is n20):

```text
note:bc1pcuh2nlk4zld8ljklal64ks4hznh7q94lxkguzrsk55dg84qgrt6qswzywl?tick=NOTE&amount=100&label=Payment&message=Invoice%20123&network=BTClivenet
```

- Sends 100 NOTE tokens to the address bc1pcuh2nlk4zld8ljklal64ks4hznh7q94lxkguzrsk55dg84qgrt6qswzywl
- label=Payment indicates that this transaction is a payment.
- message=Invoice 123 is an additional transaction note.
- network=BTClivenet specifies the use of the Bitcoin mainnet.

2. NFT transaction (n721):

```text
note:tb1plvfewft7ewsm29eery598syzpy34hdnzfqh2a0m92ctsgskh7pgq75jg49?tick=NFTArt&p=n721&label=ArtTrade&message=ExclusiveArtwork&network=BTCtestnet
```

- Sends an NFT named NFTArt to the address tb1plvfewft7ewsm29eery598syzpy34hdnzfqh2a0m92ctsgskh7pgq75jg49.
  - p=n721 indicates that this is an NFT transaction.
  - label=ArtTrade indicates that this is an artwork trade.
  - message=ExclusiveArtwork is an additional description of the transaction.
  - network=BTCtestnet indicates the use of the Bitcoin testnet.

## Simplified Type Definitions

The types and interfaces declared within this readme files are often the
simplified version of the types to aid in readability.

For better type safety and improved developer experience, the
`@note-protocol/actions-spec` package contains more complex type definitions.

## Specification

The Bitcoin/Note Actions specification consists of key sections that are part of a
request/response interaction flow:

- Bitcoin/Note Action [URL scheme](#url-scheme) providing an Action URL
- [GET request](#get-request) to an Action URL
- [GET response](#get-response) from the server
- [POST request](#post-request) to an Action URL
- [POST response](#post-response) from the server

Each of these requests are made by the _Action client_ (e.g. wallet app, browser
extension, dApp, website, etc) to gather specific metadata for rich user
interfaces and to facilitate user input to the Actions API.

Each of the responses are crafted by an application (e.g. website, server
backend, etc) and returned to the _Action client_. Ultimately, providing a
signable transaction or message for a wallet to prompt the user to approve,
sign, and send to the blockchain.

The server API should comply with [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) requirements to ensure that clients can make requests safely.

### URL Scheme

A Bitcoin/Note Action URL describes an interactive request for a signable Bitcoin PSBT
transaction or message using the `bitcoin-action` or `note-action` protocol.

The request is interactive because the parameters in the URL are used by a
client to make a series of standardized HTTP requests to compose a signable
transaction or message for the user to sign with their wallet.

```text
bitcoin-action:<link>
```

```text
note-action:<link>
```

- A single `link` field is required as the pathname. The value must be a
  conditionally
  [URL-encoded](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
  absolute HTTPS URL.

- If the URL contains query parameters, it must be URL-encoded. URL-encoding the
  value prevents conflicting with any Actions protocol parameters, which may be
  added via the protocol specification.

- If the URL does not contain query parameters, it should not be URL-encoded.
  This produces a shorter URL and a less dense QR code.

In either case, clients must
[URL-decode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)
the value. This has no effect if the value isn't URL-encoded. If the decoded
value is not an absolute HTTPS URL, the wallet must reject it as **malformed**.

### GET Request

The Action client (e.g. wallet, browser extension, etc) should make an HTTP
`GET` JSON request to the Action's URL endpoint.

- The request should not identify the wallet or the user.
- The client should make the request with an
  [`Accept-Encoding` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding).
- The client should display the domain of the URL as the request is being made.

### GET Response

The Action's URL endpoint (e.g. application or server backend) should respond
with an HTTP `OK` JSON response (with a valid payload in the body) or an
appropriate HTTP error.

- The client must handle HTTP
  [client errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses),
  [server errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses),
  and
  [redirect responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages).
- The endpoint should respond with a
  [`Content-Encoding` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding)
  for HTTP compression.
- The endpoint should respond with a
  [`Content-Type` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
  of `application/json`.

- The client should not cache the response except as instructed by
  [HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#controlling_caching)
  response headers.
- The client should display the `title` and render the `icon` image to user.

#### GET Response Body

A `GET` response with an HTTP `OK` JSON response should include a body payload
that follows the interface specification:

```ts filename="ActionGetResponse"
export interface ActionGetResponse {
  /** image url that represents the source of the action request */
  icon: string;
  /** describes the source of the action request */
  title: string;
  /** brief summary of the action to be performed */
  description: string;
  /** button text rendered to the user */
  label: string;
  /** UI state for the button being rendered to the user */
  disabled?: boolean;
  links?: {
    /** list of related Actions a user could perform */
    actions: LinkedAction[];
  };
  /** non-fatal error message to be displayed to the user */
  error?: ActionError;
}
```

- `icon` - The value must be an absolute HTTP or HTTPS URL of an icon image. The
  file must be an SVG, PNG, or WebP image, or the client/wallet must reject it
  as **malformed**.

- `title` - The value must be a UTF-8 string that represents the source of the
  action request. For example, this might be the name of a brand, store,
  application, or person making the request.

- `description` - The value must be a UTF-8 string that provides information on
  the action. The description should be displayed to the user.

- `label` - The value must be a UTF-8 string that will be rendered on a button
  for the user to click. All labels should not exceed 5 word phrases and should
  start with a verb to solidify the action you want the user to take. For
  example, "Mint NFT", "Vote Yes", or "Stake 1 SOL".

- `disabled` - The value must be boolean to represent the disabled state of the
  rendered button (which displays the `label` string). If no value is provided,
  `disabled` should default to `false` (i.e. enabled by default). For example,
  if the action endpoint is for a governance vote that has closed, set
  `disabled=true` and the `label` could be "Vote Closed".

- `error` - An optional error indication for non-fatal errors. If present, the
  client should display it to the user. If set, it should not prevent the client from interpreting the action or displaying it to the user. For example, the error can be used together with `disabled` to display a reason like business constraints, authorization, the state, or an error of external resource.

```ts filename="ActionError"
export interface ActionError {
  /** non-fatal error message to be displayed to the user */
  message: string;
}
```

- `links.actions` - An optional array of related actions for the endpoint. Users
  should be displayed UI for each of the listed actions and expected to only
  perform one. For example, a governance vote action endpoint may return three
  options for the user: "Vote Yes", "Vote No", and "Abstain from Vote".

  - If no `links.actions` is provided, the client should render a single button
    using the root `label` string and make the POST request to the same action
    URL endpoint as the initial GET request.

  - If any `links.actions` are provided, the client should only render buttons
    based on the items listed in the `links.actions` field. The
    client should not render a button for the contents of the root `label`.

```ts filename="LinkedAction"
export interface LinkedAction {
  /** URL endpoint for an action */
  href: string;
  /** button text rendered to the user */
  label: string;
  /**
   * Parameters to accept user input within an action
   * @see {ActionParameter}
   * @see {ActionParameterSelectable}
   */
  parameters?: Array<TypedActionParameter>;
}
```

The `ActionParameter` allows declaring what input the Action API is requesting
from the user:

```ts filename="ActionParameter"
/**
 * Parameter to accept user input within an action
 * note: for ease of reading, this is a simplified type of the actual
 */
export interface ActionParameter {
  /** parameter name in url */
  name: string;
  /** placeholder text for the user input field */
  label?: string;
  /** declare if this field is required (defaults to `false`) */
  required?: boolean;
}
```

Triggering Transfers Based on URI Type:

- BIP21 URI: When the href contains a BIP21 URI (e.g., `bitcoin:<address>?amount=<amount>&label=<label>`), the wallet or client interprets it as a Bitcoin transfer request. The client prompts the user to approve and sign the Bitcoin transaction.
- NOTE Payment URI: If the href contains a NOTE Payment URI (e.g., `note:<address>?tick=<tick>[&amount=<amount>]`), the client recognizes this as an asset transfer under the NOTE protocol. The user is prompted to initiate and sign the NOTE asset transfer.

### POST Request

The client must make an HTTP `POST` JSON request to the action URL with a body
payload of:

```json
{
  "account": "<account>",
  "walletId": "<id>",
  "address":"<address>",
  "tokenAddress":"<address>"
}
```

- `account` - The value must be the hex-encoded public key of an account that
  may sign the transaction.
- `walletId` - The value is optional and used to identify the unique ID of the current wallet.
- `address` - The value is optional and used to identify the main address of the current wallet.
- `tokenAddress` - The value is optional and used to identify the NOTE protocol token address of the current wallet.

The client should make the request with an
[Accept-Encoding header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding)
and the application may respond with a
[Content-Encoding header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding)
for HTTP compression.

The client should display the domain of the action URL as the request is being
made. If a `GET` request was made, the client should also display the `title`
and render the `icon` image from that GET response.

### POST Response

The Action's `POST` endpoint should respond with an HTTP `OK` JSON response
(with a valid payload in the body) or an appropriate HTTP error.

- The client must handle HTTP
  [client errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses),
  [server errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses),
  and
  [redirect responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages).
- The endpoint should respond with a
  [`Content-Type` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
  of `application/json`.

#### POST Response Body

A `POST` response with an HTTP `OK` JSON response should include a body payload
that follows the interface specification:

```ts filename="ActionPostResponse"
export interface ActionPostResponse {
  /** Bitcoin/Note BIP21 URI */
  href?: string;
  /** hex encoded serialized transaction */
  psbtHex?: string;
  /** describes the nature of the transaction */
  message?: string;
  /** method to be used for the transaction or message, defaults to `sign` */
  method?: "sign" | "finish";
  /** msgpack encoded serialized note payload */
  payload?: string;
  /** note utxos to be spent */
  noteUtxo?: any;
  /** note outputs to be created */
  extOutputs?: Array<any>;
  /** callback URL to be invoked after the transaction is signed, using the `POST` method */
  callback?: string;
  /** non-fatal error message to be displayed to the user */
  error?: ActionError;
}
```

- `href` - A Bitcoin/Note Payment URI. It will be ignored if it doesn't comply with the rules.

- `psbtHex` - The value must be a hex-encoded serialized PSBT (Partially Signed Bitcoin Transaction). The client must hex-decode the PSBT and deserialize it.

- `message` - The value must be a UTF-8 string that describes the nature of the transaction included in the response. The client should display this value to the user. For example, this might be the name of an item being purchased, a discount applied to a purchase, or a thank you note.

- `method` - The value must be either "sign" or "finish", indicating the method to be used for the transaction or message. If not provided, it defaults to "sign".

- `payload` - The value must be a msgpack encoded serialized note payload.

- `noteUtxo` - Represents the note UTXOs to be spent in the transaction.

- `extOutputs` - An array representing the note outputs to be created in the transaction.

- `callback` - A URL to be invoked after the transaction is signed, using the POST method. The client should handle the return value of the callback as the next ActionPostResponse.

The client processes in the order of `href`, `psbtHex`, `payload`, `callback`. If `href` exists, `psbtHex` and `payload` are ignored. If `psbtHex` exists, `payload` is ignored. If `callback` exists, it will be processed last.

The client and application should allow additional fields in the request body and response body, which may be added by future specification updates.

> The application may respond with a partially or fully signed transaction. The client and wallet must validate the transaction as **untrusted**.

## About BLinks

The purpose of Bitcoin/Note Actions is to improve and simplify the interaction process between wallets and dApps, without providing a specification similar to Solana's BLinks. It is recommended that dApps integrate with the [Open Graph protocol](https://ogp.me/) to enable transaction previews on social media platforms like X, Discord, and Telegram, as shown in the examples below.

![image](/actions/x.png)
![image](/actions/tg.png)

## License

The Bitcoin/Note Actions JavaScript SDK is open source and available under the Apache License, Version 2.0.
