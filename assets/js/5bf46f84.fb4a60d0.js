"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[4852],{5524:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"research/action","title":"Bitcoin/Note Actions (Draft)","description":"Bitcoin/Note Actions was inspired by Solana Actions.","source":"@site/docs/research/action.md","sourceDirName":"research","slug":"/research/action","permalink":"/docs/research/action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"actionsSidebar","next":{"title":"Note Chain Whitepaper (Draft)","permalink":"/docs/research/chain"}}');var i=s(6070),o=s(6599);const r={},a="Bitcoin/Note Actions (Draft)",l={},c=[{value:"Sequence Diagram",id:"sequence-diagram",level:2},{value:"Bitcoin Payment Scheme (BIP21)",id:"bitcoin-payment-scheme-bip21",level:2},{value:"NOTE Payment Scheme",id:"note-payment-scheme",level:2},{value:"Simplified Type Definitions",id:"simplified-type-definitions",level:2},{value:"Specification",id:"specification",level:2},{value:"URL Scheme",id:"url-scheme",level:3},{value:"GET Request",id:"get-request",level:3},{value:"GET Response",id:"get-response",level:3},{value:"GET Response Body",id:"get-response-body",level:4},{value:"POST Request",id:"post-request",level:3},{value:"POST Response",id:"post-response",level:3},{value:"POST Response Body",id:"post-response-body",level:4},{value:"About BLinks",id:"about-blinks",level:2},{value:"License",id:"license",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"bitcoinnote-actions-draft",children:"Bitcoin/Note Actions (Draft)"})}),"\n",(0,i.jsxs)(n.p,{children:["Bitcoin/Note Actions was inspired by ",(0,i.jsx)(n.a,{href:"https://solana.com/docs/advanced/actions",children:"Solana Actions"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Bitcoin/NOTE Actions is a standardized interaction process. It enables token transfers and PSBT transaction signing on the Bitcoin blockchain without the need for third-party services like Wallet Connect or wallet-embedded browsers for web script injection. Combined with the ",(0,i.jsx)(n.a,{href:"https://ogp.me/",children:"Open Graph protocol"}),", it allows for transaction previews on social media platforms like X, Discord, and Telegram. It is compatible with the BIP21 Bitcoin payment protocol."]}),"\n",(0,i.jsx)(n.h2,{id:"sequence-diagram",children:"Sequence Diagram"}),"\n",(0,i.jsx)(n.p,{children:"The Action protocol defines 4 sets of URI Schemas. Wallets should support all 4 schemas, with at least support for the two Bitcoin-related schemas. The interaction sequence diagram is as follows:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image",src:s(261).A+"",width:"764",height:"838"})}),"\n",(0,i.jsx)(n.h2,{id:"bitcoin-payment-scheme-bip21",children:"Bitcoin Payment Scheme (BIP21)"}),"\n",(0,i.jsxs)(n.p,{children:["Reference: ",(0,i.jsx)(n.a,{href:"https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki",children:"https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki"})]}),"\n",(0,i.jsx)(n.p,{children:"The Bitcoin Payment Scheme is fully consistent with BIP21.\nThe Scheme format is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"bitcoin:<address>[?amount=<amount>][?label=<label>][?message=<message>]\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<address>"}),": This is the Bitcoin receiving address (required)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amount=<amount>"}),": Specifies the amount of Bitcoin to send (optional)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"label=<label>"}),": Used to add a label or name for the recipient (optional)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"message=<message>"}),": Attaches a payment message (optional)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.1&label=Donation&message=Thank%20you\n"})}),"\n",(0,i.jsx)(n.p,{children:'This URI indicates sending 0.1 BTC to the address 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa, with a "Donation" label and a "Thank you" message.'}),"\n",(0,i.jsx)(n.h2,{id:"note-payment-scheme",children:"NOTE Payment Scheme"}),"\n",(0,i.jsx)(n.p,{children:"Similar to BIP21, the NOTE Payment Scheme is defined as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"note:<address>?tick=<tick>[&p=n20][&amount=<amount>][&label=<label>][&message=<message>][&network=BTClivenet]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Field explanations:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"note:"}),": Protocol prefix, indicating this is a URI based on the NOTE protocol, similar to the bitcoin: prefix in BIP21, used to identify the NOTE protocol for payment or interaction."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<address>"}),": The recipient's address in the NOTE protocol, required. It can be a public key address or account address for assets in the NOTE protocol."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tick=<tick>"}),": Asset name, required. For example, it can be a specific token name (e.g., NOTE) or other user-defined asset identifier. This field represents the type of asset involved in the transaction."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"p=n20"})," (optional, default is n20): Asset protocol type."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"n20: Represents a standard token based on the NOTE protocol, similar to ERC-20 standard tokens."}),"\n",(0,i.jsx)(n.li,{children:"n721: Represents an NFT (Non-Fungible Token) based on the NOTE protocol, similar to ERC-721 standard NFTs."}),"\n",(0,i.jsx)(n.li,{children:"alias: Represents a public key alias based on the NOTE protocol."}),"\n",(0,i.jsx)(n.li,{children:"If the p parameter is not provided, it defaults to n20, indicating a regular token transaction."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"amount=<amount>"})," (optional): The amount of assets in the transaction. Typically used to specify the number of tokens to transfer. In the case of p=n20, this usually represents the number of standard tokens; for p=n721, amount might represent the number of NFTs, typically 1."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"label=<label>"})," (optional): Adds a label for the recipient, usually used to describe the address or account name for easy identification. For example, label=Donation can indicate that this is a donation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"message=<message>"})," (optional): Additional information, users can add a short text message for payment instructions or notes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"network=BTClivenet"})," (optional, default is BTClivenet): The blockchain network used for the transaction. The default value is BTClivenet, indicating the use of the Bitcoin mainnet. Supported wallets can also specify other networks, such as testnets or networks on other chains."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BTClivenet: Bitcoin mainnet."}),"\n",(0,i.jsx)(n.li,{children:"BTCtestnet: Bitcoin testnet."}),"\n",(0,i.jsx)(n.li,{children:"Other networks: If the wallet supports other blockchains or networks (e.g., layer 2 or sidechains), they can be specified in this field."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Scheme Examples:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Regular token transaction (default is n20):"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"note:bc1pcuh2nlk4zld8ljklal64ks4hznh7q94lxkguzrsk55dg84qgrt6qswzywl?tick=NOTE&amount=100&label=Payment&message=Invoice%20123&network=BTClivenet\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sends 100 NOTE tokens to the address bc1pcuh2nlk4zld8ljklal64ks4hznh7q94lxkguzrsk55dg84qgrt6qswzywl"}),"\n",(0,i.jsx)(n.li,{children:"label=Payment indicates that this transaction is a payment."}),"\n",(0,i.jsx)(n.li,{children:"message=Invoice 123 is an additional transaction note."}),"\n",(0,i.jsx)(n.li,{children:"network=BTClivenet specifies the use of the Bitcoin mainnet."}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"NFT transaction (n721):"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"note:tb1plvfewft7ewsm29eery598syzpy34hdnzfqh2a0m92ctsgskh7pgq75jg49?tick=NFTArt&p=n721&label=ArtTrade&message=ExclusiveArtwork&network=BTCtestnet\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Sends an NFT named NFTArt to the address tb1plvfewft7ewsm29eery598syzpy34hdnzfqh2a0m92ctsgskh7pgq75jg49.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"p=n721 indicates that this is an NFT transaction."}),"\n",(0,i.jsx)(n.li,{children:"label=ArtTrade indicates that this is an artwork trade."}),"\n",(0,i.jsx)(n.li,{children:"message=ExclusiveArtwork is an additional description of the transaction."}),"\n",(0,i.jsx)(n.li,{children:"network=BTCtestnet indicates the use of the Bitcoin testnet."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"simplified-type-definitions",children:"Simplified Type Definitions"}),"\n",(0,i.jsx)(n.p,{children:"The types and interfaces declared within this readme files are often the\nsimplified version of the types to aid in readability."}),"\n",(0,i.jsxs)(n.p,{children:["For better type safety and improved developer experience, the\n",(0,i.jsx)(n.code,{children:"@note-protocol/actions-spec"})," package contains more complex type definitions."]}),"\n",(0,i.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsx)(n.p,{children:"The Bitcoin/Note Actions specification consists of key sections that are part of a\nrequest/response interaction flow:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Bitcoin/Note Action ",(0,i.jsx)(n.a,{href:"#url-scheme",children:"URL scheme"})," providing an Action URL"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#get-request",children:"GET request"})," to an Action URL"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#get-response",children:"GET response"})," from the server"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#post-request",children:"POST request"})," to an Action URL"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#post-response",children:"POST response"})," from the server"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Each of these requests are made by the ",(0,i.jsx)(n.em,{children:"Action client"})," (e.g. wallet app, browser\nextension, dApp, website, etc) to gather specific metadata for rich user\ninterfaces and to facilitate user input to the Actions API."]}),"\n",(0,i.jsxs)(n.p,{children:["Each of the responses are crafted by an application (e.g. website, server\nbackend, etc) and returned to the ",(0,i.jsx)(n.em,{children:"Action client"}),". Ultimately, providing a\nsignable transaction or message for a wallet to prompt the user to approve,\nsign, and send to the blockchain."]}),"\n",(0,i.jsxs)(n.p,{children:["The server API should comply with ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"CORS"})," requirements to ensure that clients can make requests safely."]}),"\n",(0,i.jsx)(n.h3,{id:"url-scheme",children:"URL Scheme"}),"\n",(0,i.jsxs)(n.p,{children:["A Bitcoin/Note Action URL describes an interactive request for a signable Bitcoin PSBT\ntransaction or message using the ",(0,i.jsx)(n.code,{children:"bitcoin-action"})," or ",(0,i.jsx)(n.code,{children:"note-action"})," protocol."]}),"\n",(0,i.jsx)(n.p,{children:"The request is interactive because the parameters in the URL are used by a\nclient to make a series of standardized HTTP requests to compose a signable\ntransaction or message for the user to sign with their wallet."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"bitcoin-action:<link>\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"note-action:<link>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A single ",(0,i.jsx)(n.code,{children:"link"})," field is required as the pathname. The value must be a\nconditionally\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent",children:"URL-encoded"}),"\nabsolute HTTPS URL."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the URL contains query parameters, it must be URL-encoded. URL-encoding the\nvalue prevents conflicting with any Actions protocol parameters, which may be\nadded via the protocol specification."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the URL does not contain query parameters, it should not be URL-encoded.\nThis produces a shorter URL and a less dense QR code."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In either case, clients must\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent",children:"URL-decode"}),"\nthe value. This has no effect if the value isn't URL-encoded. If the decoded\nvalue is not an absolute HTTPS URL, the wallet must reject it as ",(0,i.jsx)(n.strong,{children:"malformed"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"get-request",children:"GET Request"}),"\n",(0,i.jsxs)(n.p,{children:["The Action client (e.g. wallet, browser extension, etc) should make an HTTP\n",(0,i.jsx)(n.code,{children:"GET"})," JSON request to the Action's URL endpoint."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The request should not identify the wallet or the user."}),"\n",(0,i.jsxs)(n.li,{children:["The client should make the request with an\n",(0,i.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding",children:[(0,i.jsx)(n.code,{children:"Accept-Encoding"})," header"]}),"."]}),"\n",(0,i.jsx)(n.li,{children:"The client should display the domain of the URL as the request is being made."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"get-response",children:"GET Response"}),"\n",(0,i.jsxs)(n.p,{children:["The Action's URL endpoint (e.g. application or server backend) should respond\nwith an HTTP ",(0,i.jsx)(n.code,{children:"OK"})," JSON response (with a valid payload in the body) or an\nappropriate HTTP error."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The client must handle HTTP\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses",children:"client errors"}),",\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses",children:"server errors"}),",\nand\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages",children:"redirect responses"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The endpoint should respond with a\n",(0,i.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding",children:[(0,i.jsx)(n.code,{children:"Content-Encoding"})," header"]}),"\nfor HTTP compression."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The endpoint should respond with a\n",(0,i.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type",children:[(0,i.jsx)(n.code,{children:"Content-Type"})," header"]}),"\nof ",(0,i.jsx)(n.code,{children:"application/json"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The client should not cache the response except as instructed by\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#controlling_caching",children:"HTTP caching"}),"\nresponse headers."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The client should display the ",(0,i.jsx)(n.code,{children:"title"})," and render the ",(0,i.jsx)(n.code,{children:"icon"})," image to user."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"get-response-body",children:"GET Response Body"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"GET"})," response with an HTTP ",(0,i.jsx)(n.code,{children:"OK"})," JSON response should include a body payload\nthat follows the interface specification:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'filename="ActionGetResponse"',children:"export interface ActionGetResponse {\n  /** image url that represents the source of the action request */\n  icon: string;\n  /** describes the source of the action request */\n  title: string;\n  /** brief summary of the action to be performed */\n  description: string;\n  /** button text rendered to the user */\n  label: string;\n  /** UI state for the button being rendered to the user */\n  disabled?: boolean;\n  links?: {\n    /** list of related Actions a user could perform */\n    actions: LinkedAction[];\n  };\n  /** non-fatal error message to be displayed to the user */\n  error?: ActionError;\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"icon"})," - The value must be an absolute HTTP or HTTPS URL of an icon image. The\nfile must be an SVG, PNG, or WebP image, or the client/wallet must reject it\nas ",(0,i.jsx)(n.strong,{children:"malformed"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"title"})," - The value must be a UTF-8 string that represents the source of the\naction request. For example, this might be the name of a brand, store,\napplication, or person making the request."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"description"})," - The value must be a UTF-8 string that provides information on\nthe action. The description should be displayed to the user."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"label"}),' - The value must be a UTF-8 string that will be rendered on a button\nfor the user to click. All labels should not exceed 5 word phrases and should\nstart with a verb to solidify the action you want the user to take. For\nexample, "Mint NFT", "Vote Yes", or "Stake 1 SOL".']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"disabled"})," - The value must be boolean to represent the disabled state of the\nrendered button (which displays the ",(0,i.jsx)(n.code,{children:"label"})," string). If no value is provided,\n",(0,i.jsx)(n.code,{children:"disabled"})," should default to ",(0,i.jsx)(n.code,{children:"false"})," (i.e. enabled by default). For example,\nif the action endpoint is for a governance vote that has closed, set\n",(0,i.jsx)(n.code,{children:"disabled=true"})," and the ",(0,i.jsx)(n.code,{children:"label"}),' could be "Vote Closed".']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"error"})," - An optional error indication for non-fatal errors. If present, the\nclient should display it to the user. If set, it should not prevent the client from interpreting the action or displaying it to the user. For example, the error can be used together with ",(0,i.jsx)(n.code,{children:"disabled"})," to display a reason like business constraints, authorization, the state, or an error of external resource."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'filename="ActionError"',children:"export interface ActionError {\n  /** non-fatal error message to be displayed to the user */\n  message: string;\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"links.actions"}),' - An optional array of related actions for the endpoint. Users\nshould be displayed UI for each of the listed actions and expected to only\nperform one. For example, a governance vote action endpoint may return three\noptions for the user: "Vote Yes", "Vote No", and "Abstain from Vote".']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If no ",(0,i.jsx)(n.code,{children:"links.actions"})," is provided, the client should render a single button\nusing the root ",(0,i.jsx)(n.code,{children:"label"})," string and make the POST request to the same action\nURL endpoint as the initial GET request."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If any ",(0,i.jsx)(n.code,{children:"links.actions"})," are provided, the client should only render buttons\nbased on the items listed in the ",(0,i.jsx)(n.code,{children:"links.actions"})," field. The\nclient should not render a button for the contents of the root ",(0,i.jsx)(n.code,{children:"label"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'filename="LinkedAction"',children:"export interface LinkedAction {\n  /** URL endpoint for an action */\n  href: string;\n  /** button text rendered to the user */\n  label: string;\n  /**\n   * Parameters to accept user input within an action\n   * @see {ActionParameter}\n   * @see {ActionParameterSelectable}\n   */\n  parameters?: Array<TypedActionParameter>;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ActionParameter"})," allows declaring what input the Action API is requesting\nfrom the user:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'filename="ActionParameter"',children:"/**\n * Parameter to accept user input within an action\n * note: for ease of reading, this is a simplified type of the actual\n */\nexport interface ActionParameter {\n  /** parameter name in url */\n  name: string;\n  /** placeholder text for the user input field */\n  label?: string;\n  /** declare if this field is required (defaults to `false`) */\n  required?: boolean;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Triggering Transfers Based on URI Type:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["BIP21 URI: When the href contains a BIP21 URI (e.g., ",(0,i.jsx)(n.code,{children:"bitcoin:<address>?amount=<amount>&label=<label>"}),"), the wallet or client interprets it as a Bitcoin transfer request. The client prompts the user to approve and sign the Bitcoin transaction."]}),"\n",(0,i.jsxs)(n.li,{children:["NOTE Payment URI: If the href contains a NOTE Payment URI (e.g., ",(0,i.jsx)(n.code,{children:"note:<address>?tick=<tick>[&amount=<amount>]"}),"), the client recognizes this as an asset transfer under the NOTE protocol. The user is prompted to initiate and sign the NOTE asset transfer."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"post-request",children:"POST Request"}),"\n",(0,i.jsxs)(n.p,{children:["The client must make an HTTP ",(0,i.jsx)(n.code,{children:"POST"})," JSON request to the action URL with a body\npayload of:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "account": "<account>",\n  "walletId": "<id>",\n  "address":"<address>",\n  "tokenAddress":"<address>"\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"account"})," - The value must be the hex-encoded public key of an account that\nmay sign the transaction."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"walletId"})," - The value is optional and used to identify the unique ID of the current wallet."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"address"})," - The value is optional and used to identify the main address of the current wallet."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tokenAddress"})," - The value is optional and used to identify the NOTE protocol token address of the current wallet."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The client should make the request with an\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding",children:"Accept-Encoding header"}),"\nand the application may respond with a\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding",children:"Content-Encoding header"}),"\nfor HTTP compression."]}),"\n",(0,i.jsxs)(n.p,{children:["The client should display the domain of the action URL as the request is being\nmade. If a ",(0,i.jsx)(n.code,{children:"GET"})," request was made, the client should also display the ",(0,i.jsx)(n.code,{children:"title"}),"\nand render the ",(0,i.jsx)(n.code,{children:"icon"})," image from that GET response."]}),"\n",(0,i.jsx)(n.h3,{id:"post-response",children:"POST Response"}),"\n",(0,i.jsxs)(n.p,{children:["The Action's ",(0,i.jsx)(n.code,{children:"POST"})," endpoint should respond with an HTTP ",(0,i.jsx)(n.code,{children:"OK"})," JSON response\n(with a valid payload in the body) or an appropriate HTTP error."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The client must handle HTTP\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses",children:"client errors"}),",\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses",children:"server errors"}),",\nand\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages",children:"redirect responses"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The endpoint should respond with a\n",(0,i.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type",children:[(0,i.jsx)(n.code,{children:"Content-Type"})," header"]}),"\nof ",(0,i.jsx)(n.code,{children:"application/json"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"post-response-body",children:"POST Response Body"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"POST"})," response with an HTTP ",(0,i.jsx)(n.code,{children:"OK"})," JSON response should include a body payload\nthat follows the interface specification:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'filename="ActionPostResponse"',children:'export interface ActionPostResponse {\n  /** Bitcoin/Note BIP21 URI */\n  href?: string;\n  /** hex encoded serialized transaction */\n  psbtHex?: string;\n  /** describes the nature of the transaction */\n  message?: string;\n  /** method to be used for the transaction or message, defaults to `sign` */\n  method?: "sign" | "finish";\n  /** msgpack encoded serialized note payload */\n  payload?: string;\n  /** note utxos to be spent */\n  noteUtxo?: any;\n  /** note outputs to be created */\n  extOutputs?: Array<any>;\n  /** callback URL to be invoked after the transaction is signed, using the `POST` method */\n  callback?: string;\n  /** non-fatal error message to be displayed to the user */\n  error?: ActionError;\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"href"})," - A Bitcoin/Note Payment URI. It will be ignored if it doesn't comply with the rules."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"psbtHex"})," - The value must be a hex-encoded serialized PSBT (Partially Signed Bitcoin Transaction). The client must hex-decode the PSBT and deserialize it."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"message"})," - The value must be a UTF-8 string that describes the nature of the transaction included in the response. The client should display this value to the user. For example, this might be the name of an item being purchased, a discount applied to a purchase, or a thank you note."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"method"}),' - The value must be either "sign" or "finish", indicating the method to be used for the transaction or message. If not provided, it defaults to "sign".']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"payload"})," - The value must be a msgpack encoded serialized note payload."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"noteUtxo"})," - Represents the note UTXOs to be spent in the transaction."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"extOutputs"})," - An array representing the note outputs to be created in the transaction."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"callback"})," - A URL to be invoked after the transaction is signed, using the POST method. The client should handle the return value of the callback as the next ActionPostResponse."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The client processes in the order of ",(0,i.jsx)(n.code,{children:"href"}),", ",(0,i.jsx)(n.code,{children:"psbtHex"}),", ",(0,i.jsx)(n.code,{children:"payload"}),", ",(0,i.jsx)(n.code,{children:"callback"}),". If ",(0,i.jsx)(n.code,{children:"href"})," exists, ",(0,i.jsx)(n.code,{children:"psbtHex"})," and ",(0,i.jsx)(n.code,{children:"payload"})," are ignored. If ",(0,i.jsx)(n.code,{children:"psbtHex"})," exists, ",(0,i.jsx)(n.code,{children:"payload"})," is ignored. If ",(0,i.jsx)(n.code,{children:"callback"})," exists, it will be processed last."]}),"\n",(0,i.jsx)(n.p,{children:"The client and application should allow additional fields in the request body and response body, which may be added by future specification updates."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The application may respond with a partially or fully signed transaction. The client and wallet must validate the transaction as ",(0,i.jsx)(n.strong,{children:"untrusted"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"about-blinks",children:"About BLinks"}),"\n",(0,i.jsxs)(n.p,{children:["The purpose of Bitcoin/Note Actions is to improve and simplify the interaction process between wallets and dApps, without providing a specification similar to Solana's BLinks. It is recommended that dApps integrate with the ",(0,i.jsx)(n.a,{href:"https://ogp.me/",children:"Open Graph protocol"})," to enable transaction previews on social media platforms like X, Discord, and Telegram, as shown in the examples below."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"image",src:s(4088).A+"",width:"400",height:"257"}),"\n",(0,i.jsx)(n.img,{alt:"image",src:s(7777).A+"",width:"400",height:"300"})]}),"\n",(0,i.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,i.jsx)(n.p,{children:"The Bitcoin/Note Actions JavaScript SDK is open source and available under the Apache License, Version 2.0."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},261:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/sequence-8941d709bf24721be23a516b63dcbe9c.png"},7777:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/tg-576dc30d57efc3fb219cc90a9c51e503.png"},4088:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/x-63675357195872487ff72faebfa45ecc.png"},6599:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(758);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);