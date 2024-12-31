"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[9653],{8088:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tutorial/basic","title":"\u5f00\u53d1\u6307\u5357","description":"\u5728\u6bd4\u7279\u5e01UTXO\u6a21\u578b\u4e2d\uff0c\u9996\u5148\u9700\u8981\u7406\u89e3\u4ee5\u4e0b\u7684\u540d\u8bcd\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorial/01_basic.md","sourceDirName":"tutorial","slug":"/tutorial/basic","permalink":"/zh/docs/tutorial/basic","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"\u5f00\u53d1\u6307\u5357","sidebar_position":1,"sidebar_label":"\u5f00\u53d1\u6307\u5357"},"sidebar":"tutorialSidebar","previous":{"title":"\u7528\u6237\u6307\u5357","permalink":"/zh/docs/tutorial/guide"},"next":{"title":"\u5feb\u901f\u5f00\u59cb","permalink":"/zh/docs/tutorial/quick-start"}}');var t=i(6070),r=i(6599);const c={title:"\u5f00\u53d1\u6307\u5357",sidebar_position:1,sidebar_label:"\u5f00\u53d1\u6307\u5357"},a=void 0,l={},d=[{value:"NOTE\u6838\u5fc3\u6982\u5ff5",id:"note\u6838\u5fc3\u6982\u5ff5",level:2},{value:"\u8d26\u53f7",id:"\u8d26\u53f7",level:3},{value:"\u94fe\u4e0a\u5408\u7ea6",id:"\u94fe\u4e0a\u5408\u7ea6",level:3},{value:"\u8d26\u53f7\u7684\u6240\u6709\u6743",id:"\u8d26\u53f7\u7684\u6240\u6709\u6743",level:3},{value:"\u6570\u5b57\u8d44\u4ea7",id:"\u6570\u5b57\u8d44\u4ea7",level:3},{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u5728\u6bd4\u7279\u5e01UTXO\u6a21\u578b\u4e2d\uff0c\u9996\u5148\u9700\u8981\u7406\u89e3\u4ee5\u4e0b\u7684\u540d\u8bcd\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\u90e8\u5206\u6982\u5ff5\u5185\u5bb9\u540c\u4ee5\u592a\u574a\u8d26\u53f7\u6a21\u578b\u7a0d\u6709\u4e0d\u540c\u3002"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u52a9\u8bb0\u8bcd\uff1a\u52a9\u8bb0\u8bcd\u662f\u4e00\u7ec4\u5355\u8bcd\uff0c\u901a\u5e38\u753112\u4e2a\u6216\u800524\u4e2a\u82f1\u6587\u5355\u8bcd\u7ec4\u6210\uff08\u4e5f\u6709\u5176\u4ed6\u8bed\u8a00\u5176\u4ed6\u5355\u8bcd\u6570\u7684\u52a9\u8bb0\u8bcd\uff09\u3002\u53ef\u4ee5\u901a\u8fc7\u94b1\u5305\u8f6f\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e13\u95e8\u8f6f\u4ef6\u6216\u8005\u786c\u4ef6\uff0c\u751a\u81f3\u63b7\u80a1\u5b50\u751f\u6210\u3002\u52a9\u8bb0\u8bcd\u9700\u8981\u4e25\u683c\u4fdd\u5b58\u597d\uff0c\u6700\u597d\u4f7f\u7528\u7eb8\u548c\u7b14\u8bb0\u5f55\u4e0b\u6765\uff0c\u7269\u7406\u4fdd\u7ba1\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u94b1\u5305\uff1a\u94b1\u5305\u4ece\u52a9\u8bb0\u8bcd(\u79cd\u5b50)\u53ef\u4ee5\u6d3e\u751f\u51fa\u591a\u4e2a\u516c\u79c1\u94a5\u3002\u94b1\u5305\u4e3b\u8981\u8d1f\u8d23\u5730\u5740\u7684\u751f\u6210\u4e0e\u7ba1\u7406\uff0c\u5bf9\u4ea4\u6613\u8fdb\u884c\u7b7e\u540d\u548c\u5e7f\u64ad\u5230\u533a\u5757\u94fe\uff0c\u4ece\u6570\u636e\u670d\u52a1\u5546\u83b7\u53d6\u4ea4\u6613\u8bb0\u5f55\uff0c\u5c55\u793a\u7ed9\u7528\u6237\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u6570\u5b57\u8d27\u5e01\uff1a\u94b1\u5305\u901a\u8fc7BIP44\u7b49\u89c4\u8303\uff0c\u7ba1\u7406\u5305\u62ecBTC/BCH/BSV/RXD\u5728\u5185\u7684\u591a\u79cd\u533a\u5757\u94fe\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u540c\u540d\u6570\u5b57\u8d27\u5e01\u3002\u6bcf\u4e2a\u533a\u5757\u94fe\uff08\u6570\u5b57\u8d27\u5e01\uff09\u8fd8\u53ef\u4ee5\u5206\u4e3b\u7f51\u548c\u6d4b\u8bd5\u7f51\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5730\u5740\uff1a\u94b1\u5305\u6bcf\u751f\u6210\u4e00\u7ec4\u516c\u79c1\u94a5\uff0c\u53ef\u4ee5\u6309\u7167\u6a21\u7248\u751f\u6210\u591a\u79cd\u683c\u5f0f\u7684\u5730\u5740\u3002\u5e38\u89c1\u7684\u5305\u62ecP2PKH\uff0cP2WPKH\uff0cP2WSH\uff0cP2TR\u3002NOTE\u534f\u8bae\u6709\u4e24\u79cd\u7f3a\u7701\u7684\u6a21\u7248\uff0cP2TR-NOTE\u548cP2TR-COMMIT-NOTE\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u591a\u5730\u5740\uff1a\u94b1\u5305\u53ef\u4ee5\u751f\u6210\u591a\u7ec4\u516c\u79c1\u94a5\uff0c\u4e5f\u5c31\u53ef\u4ee5\u751f\u6210\u591a\u7ec4\u5730\u5740\u3002\u751f\u6210\u6570\u91cf\u4e00\u822c\u6ca1\u6709\u9650\u5236\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image0",src:i(9376).A+"",width:"2414",height:"2040"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u4ee5\u592a\u574a\u7b49\u8d26\u53f7\u6a21\u578b\u7684\u533a\u5757\u94fe\u4e0d\u5206\u4e3b\u7f51\u548c\u6d4b\u8bd5\u7f51\uff0c\u6bcf\u7ec4\u516c\u79c1\u94a5\u5bf9\u5e94\u7684\u8d26\u53f7\u6709\u4e00\u4e2a\u56fa\u5b9a\u7684\u5730\u5740\u3002\u800c\u5728\u6bd4\u7279\u5e01UTXO\u6a21\u578b\u4e2d\uff0c\u6ca1\u6709\u8d26\u53f7\u7684\u6982\u5ff5\uff0c\u6bcf\u7ec4\u516c\u79c1\u94a5\u6309\u7167\u6a21\u7248\u53ef\u4ee5\u751f\u6210\u591a\u79cd\u5730\u5740\uff0c\u6240\u6709\u7684\u5730\u5740\u5f62\u5f0f\u4e0d\u540c\uff0c\u4f46\u90fd\u53d7\u79c1\u94a5\u63a7\u5236\u3002"})}),"\n",(0,t.jsx)(n.h2,{id:"note\u6838\u5fc3\u6982\u5ff5",children:"NOTE\u6838\u5fc3\u6982\u5ff5"}),"\n",(0,t.jsx)(n.h3,{id:"\u8d26\u53f7",children:"\u8d26\u53f7"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6bd4\u7279\u5e01\u4e2d\u6ca1\u6709\u8d26\u53f7\u7684\u6982\u5ff5\uff0c\u53ea\u6709\u5730\u5740\u3002\u6bcf\u79cd\u5730\u5740\u7531\u4ea4\u6613\u8f93\u51fa\u6a21\u7248\u6784\u9020\u800c\u6210\uff0c\u4e00\u4e2a\u5730\u5740\u5c31\u662f\u5bf9\u4ea4\u6613\u8f93\u51fa\u811a\u672c\u7684\u7f16\u7801\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image1",src:i(6152).A+"",width:"1098",height:"932"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728NOTE\u534f\u8bae\u4e2d\uff0c\u6211\u4eec\u89c4\u5b9a\u4e00\u4e2a\u4ea4\u6613\u8f93\u51fa\u7684\u811a\u672c\u54c8\u5e0c\u503c\u4e3a\u8d26\u53f7\u3002\u8fd9\u4e2a\u5b9a\u4e49\u6765\u81ea",(0,t.jsx)(n.a,{href:"https://electrumx.readthedocs.io/en/latest/protocol-basics.html?highlight=script%20hash#script-hashes",children:"Electrum\u534f\u8bae"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"scriptHash = sha256(script).reverse()"})}),"\n",(0,t.jsx)(n.p,{children:"\u603b\u7ed3\uff0c\u8d26\u53f7\u662f\u4ea4\u6613\u8f93\u51fa\u7684\u54c8\u5e0c\u503c\uff0c\u957f\u5ea6\u56fa\u5b9a\u4e3a256\u4f4d(32\u4e2a\u5b57\u8282)\uff0chex\u5b57\u7b26\u4e32\u957f\u5ea6\u662f64\u3002\u5730\u5740\u662f\u4ea4\u6613\u8f93\u51fa\u7684\u7f16\u7801\uff0c\u957f\u5ea6\u6839\u636e\u811a\u672c\u7684\u5185\u5bb9\u548c\u7f16\u7801\u89c4\u5219\u4e0d\u540c\u3002\u4ece\u5730\u5740\u53ef\u4ee5\u8f6c\u6362\u4e3a\u8d26\u53f7\uff0c\u53cd\u8fc7\u6765\uff0c\u4ece\u8d26\u53f7\u65e0\u6cd5\u8f6c\u6362\u4e3a\u5730\u5740\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u94fe\u4e0a\u5408\u7ea6",children:"\u94fe\u4e0a\u5408\u7ea6"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728NOTE\u534f\u8bae\u4e2d\uff0c\u6570\u5b57\u8d44\u4ea7\u8d26\u53f7\u4f7f\u7528\u7279\u6b8a\u7684\u811a\u672c\u6a21\u7248\u6784\u9020\uff0c\u4e0d\u540c\u4e8e\u6807\u51c6\u7684P2PKH\uff0cP2WSH\uff0cP2TR\u5730\u5740\uff0c\u5b83\u5728BTC\u4e2d\u4f7f\u7528Taproot Script\u5b9a\u4e49\uff0c\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u811a\u672c\u662f",(0,t.jsx)(n.code,{children:"NOTE OP_2DROP OP_2DROP OP_2DROP Pubkey OP_CHECKSIG"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd8\u53ef\u4ee5\u662f\u66f4\u52a0\u590d\u6742\u7684\u811a\u672c\u6a21\u7248\uff0c\u6bd4\u5982\u591a\u7b7e\u7b49\u7b49\u3002\u7edf\u79f0\u8fd9\u79cd\u811a\u672c\u4e3a\uff1a",(0,t.jsx)(n.code,{children:"\u94fe\u4e0a\u5408\u7ea6"}),"\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6bd4\u7279\u5e01\u811a\u672c\u64cd\u4f5c\u7801\uff08OpCode\uff09\u5199\u7b80\u5355\u7684\u94fe\u4e0a\u5408\u7ea6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528sCrypt\u8bed\u8a00\u5199\u590d\u6742\u7684\u94fe\u4e0a\u5408\u7ea6\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u8d26\u53f7\u7684\u6240\u6709\u6743",children:"\u8d26\u53f7\u7684\u6240\u6709\u6743"}),"\n",(0,t.jsx)(n.p,{children:"\u8d26\u53f7\u7684\u6240\u6709\u6743\u5f52\u5c5e\u4e8e\u53ef\u4ee5\u89e3\u9501\u4ea4\u6613\u8f93\u51fa\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u79c1\u94a5\u6301\u6709\u8005\u3002\u5728\u5e38\u89c1\u666e\u901a\u7684\u6bd4\u7279\u5e01\u4ea4\u6613\u4e2d\uff0c\u4e00\u4e2a\u79c1\u94a5\u6301\u6709\u8005\uff0c\u901a\u8fc7\u5bf9UTXO\u7684\u63d0\u4f9b\u89e3\u9501\u811a\u672c\uff0c\u7ecf\u8fc7\u77ff\u5de5\u68c0\u67e5\u540e\u83b7\u5f97\u6240\u6709\u6743\u3002\u540c\u7406\uff0c\u5982\u679c\u662f\u4e00\u4e2a\u591a\u7b7e\u5730\u5740\uff0c\u5219\u7531\u591a\u4e2a\u4eba\u7684\u79c1\u94a5\u5171\u540c\u7b7e\u540d\u540e\u83b7\u53d6\u6240\u6709\u6743\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image2",src:i(3011).A+"",width:"1270",height:"604"})}),"\n",(0,t.jsx)(n.h3,{id:"\u6570\u5b57\u8d44\u4ea7",children:"\u6570\u5b57\u8d44\u4ea7"}),"\n",(0,t.jsx)(n.p,{children:"\u6570\u5b57\u8d44\u4ea7\u7531\u534f\u8bae\u5b9a\u4e49\uff0c\u5305\u62ecN20 Token\u548cN721 NFT\u7b49\u7b49\uff0c\u6570\u5b57\u8d44\u4ea7\u7ed1\u5b9a\u5728\u4ea4\u6613\u8f93\u51fa\u4e0a\u3002\u4e0d\u540c\u4e8e\u67d3\u8272\u5e01\uff0c\u8fd9\u79cd\u7ed1\u5b9a\u4e0d\u4f9d\u8d56\u4e8e\u4ea4\u6613\u8f93\u51fa\u7684satoshi\u6570\u91cf\uff0c\u53ea\u8ddfUTXO\u672c\u8eab\u6709\u5173\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image3",src:i(5258).A+"",width:"1076",height:"724"})}),"\n",(0,t.jsx)(n.h3,{id:"\u64cd\u4f5c",children:"\u64cd\u4f5c"}),"\n",(0,t.jsx)(n.p,{children:"\u64cd\u4f5c\u662f\u6307mint\uff0ctransfer, burn\u7b49\u7531\u534f\u8bae\u5b9a\u4e49\uff0c\u5bf9\u6570\u5b57\u8d44\u4ea7\u7684\u8fdb\u884c\u7684\u64cd\u4f5c\u3002\u64cd\u4f5c\u7531msgpack\u7f16\u7801\u7684\u4e00\u7ec4key-value\u5b9a\u4e49\uff0c\u6211\u4eec\u53eb\u505aPayload\uff0c\u653e\u7f6e\u5728\u89e3\u9501\u811a\u672c\u4e2d\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u8d26\u53f7\u7684\u6240\u6709\u8005\u9700\u8981\u64cd\u4f5c\u6570\u5b57\u8d44\u4ea7\uff0c\u9996\u5148\u9700\u8981\u901a\u8fc7\u7b7e\u540d\u89e3\u9501\u8d26\u53f7UTXO\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u5c31\u662f\u6bd4\u7279\u5e01\u7684\u4ea4\u6613\u8fc7\u7a0b\uff0c\u6267\u884c\u4e86\u94fe\u4e0a\u5408\u7ea6\uff0c\u5b89\u5168\u6027\u7531\u6bd4\u7279\u5e01\u7684\u77ff\u5de5\u673a\u5236\u786e\u4fdd\u3002\n\u6bd4\u5982\u4e00\u4e2aPayload\u4f8b\u5b50"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'{\n  "p": "n20",\n  "op": "transfer",\n  "tick": "NOTE",\n  "amt": 100\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5b83\u8868\u793a\u89e3\u9501UTXO\uff0c\u5c06\u7ed1\u5b9a\u5728UTXO\u4e2d\u7684\u540d\u4e3aNOTE\u7684\u6570\u5b57\u8d44\u4ea7\u8f6c\u79fb\u7ed9\u7b2c\u4e00\u4e2a\u4ea4\u6613\u8f93\u51fa\uff0c\u5982\u679cUTXO\u4e2d\u7684\u6570\u5b57\u8d44\u4ea7\u5927\u4e8e100\uff0c\u90a3\u4e48\u4f59\u989d\u5c06\u8f6c\u7ed9\u7b2c\u4e8c\u4e2a\u4ea4\u6613\u8f93\u51fa\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u65e6\u4ea4\u6613\u88ab\u53d1\u5e03\u5230\u533a\u5757\u94fe\u4e0a\uff0c\u610f\u5473\u7740\u94fe\u4e0a\u5408\u7ea6\u6267\u884c\u6210\u529f\u6240\u6709\u6743\u5df2\u7ecf\u786e\u8ba4\u3002NOTE\u534f\u8bae\u7d22\u5f15\u5668\u4ece\u533a\u5757\u94fe\u4e0a\u83b7\u53d6\u6b64\u7b14\u4ea4\u6613\uff0c\u5bf9\u89e3\u9501\u811a\u672c\u4e2d\u7684Payload\u8fdb\u884c\u89e3\u91ca\uff0c\u68c0\u67e5Payload\u662f\u5426\u6709\u6548\uff0c\u88ab\u89e3\u9501\u7684UTXO\u4e2d\u662f\u5426\u5305\u542b\u8db3\u591f\u7684\u4ee3\u5e01\u6570\u91cf\uff0c\u7136\u540e\u6267\u884c\u94fe\u4e0b\u667a\u80fd\u5408\u7ea6\uff0c\u6267\u884ctick\u540d\u5b57\u80cc\u540e\u7684\u667a\u80fd\u5408\u7ea6\u91cc\u7684\u65b9\u6cd5\uff0c\u65b9\u6cd5\u540d\u5c31\u662fop\u7684\u503c\uff0c\u6bd4\u5982transfer\u3002\u4e00\u65e6\u5408\u7ea6\u6267\u884c\u6210\u529f\uff0c\u76f8\u5e94\u6570\u91cf\u7684\u6570\u5b57\u8d44\u4ea7\u5c06\u88ab\u7ed1\u5b9a\u5728\u4ea4\u6613\u8f93\u51fa\u4e0a\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image4",src:i(9029).A+"",width:"1912",height:"1568"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},9376:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/01_basic_image0_zh-4afbfc48e7316b933654134e35276379.png"},6152:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/01_basic_image1-2bd1e943023e90441c2eedbc4d012111.png"},3011:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/01_basic_image2-879f8bc23d3d84e44d5f39e942be3fca.png"},5258:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/01_basic_image3-c91bf2ac6b7576e963eb1b2638348bd9.png"},9029:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/01_basic_image4-456010a40dc297be041af4ebf8951c23.png"},6599:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>a});var s=i(758);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);