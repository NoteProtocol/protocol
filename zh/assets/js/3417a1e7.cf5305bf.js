"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[2904],{8954:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"protocol/Token/4.0-Token","title":"","description":"4. \u4ee3\u5e01\uff08Token\uff09","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/protocol/04-Token/4.0-Token.md","sourceDirName":"protocol/04-Token","slug":"/protocol/Token/4.0-Token","permalink":"/zh/docs/protocol/Token/4.0-Token","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"","sidebar_position":4,"sidebar_label":"\u4ee3\u5e01\uff08Token\uff09"},"sidebar":"docsSidebar","previous":{"title":"\u6570\u636e\u89e3\u6790","permalink":"/zh/docs/protocol/Secure Data/3.6-Analyse"},"next":{"title":"\u94fe\u4e0b\u667a\u80fd\u5408\u7ea6","permalink":"/zh/docs/protocol/Token/4.1-OffchainContracts"}}');var i=o(6070),r=o(6599);const l={title:"",sidebar_position:4,sidebar_label:"\u4ee3\u5e01\uff08Token\uff09"},s=void 0,c={},a=[{value:"4. \u4ee3\u5e01\uff08Token\uff09",id:"4-\u4ee3\u5e01token",level:2},{value:"UTXO\u7ed1\u5b9a",id:"utxo\u7ed1\u5b9a",level:3},{value:"\u4ee3\u5e01\u7684UTXO\u7ed1\u5b9a",id:"\u4ee3\u5e01\u7684utxo\u7ed1\u5b9a",level:4},{value:"\u4ee3\u5e01\u7684UTXO\u89e3\u7ed1",id:"\u4ee3\u5e01\u7684utxo\u89e3\u7ed1",level:4}];function d(e){const n={h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"4-\u4ee3\u5e01token",children:"4. \u4ee3\u5e01\uff08Token\uff09"}),"\n",(0,i.jsx)(n.p,{children:"\u57fa\u4e8eNOTE\u534f\u8bae\u7684\u4ee3\u5e01\uff08Token\uff09\uff0c\u547d\u540d\u4e3an20\uff0cPayload\u6309\u7167\u4ee5\u4e0b\u89c4\u5219\u5b9a\u4e49\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6570\u636e\u4f7f\u7528msgpack\u7f16\u7801\u7684\u660e\u6587\u8fdb\u884c\u5b58\u50a8\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u4e00\u4e2aToken\u5305\u542b\u90e8\u7f72\uff08deploy\uff09\u3001\u5206\u53d1\uff08mint\uff09\u3001\u8f6c\u79fb\uff08transfer\uff09\u7b49\u64cd\u4f5c\u7684\u6570\u636e\u7ed3\u6784\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6240\u6709\u64cd\u4f5c\u90fd\u56f4\u7ed5\u8d26\u6237\u548c\u4f59\u989d\u5c55\u5f00\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6bcf\u4e2a\u64cd\u4f5c\u90fd\u9700\u8981\u7ecf\u8fc7\u90e8\u7f72\u65f6\u7684\u667a\u80fd\u5408\u7ea6\u8fdb\u884c\u94fe\u4e0b\u9a8c\u8bc1\uff0c\u53ea\u6709\u9a8c\u8bc1\u901a\u8fc7\u540e\u624d\u5bf9\u8d26\u6237\u4f59\u989d\u8fdb\u884c\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6570\u636e\u683c\u5f0f\u53ef\u4ee5\u4efb\u610f\u6269\u5c55\uff0c\u6240\u6709\u7684\u6269\u5c55\u53c2\u6570\u5c06\u4f20\u9012\u7ed9\u667a\u80fd\u5408\u7ea6\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"utxo\u7ed1\u5b9a",children:"UTXO\u7ed1\u5b9a"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee3\u5e01\u5206\u4e3a\u7ed1\u5b9aUTXO\u548c\u975e\u7ed1\u5b9a\u4e24\u79cd\u72b6\u6001\u3002\u5728\u5177\u4f53\u7684\u533a\u5757\u94fe\u4e2d\uff0c\u4f8b\u5982BTC\u94fe\u4e0a\uff0cToken\u7684\u6570\u91cf\u88ab\u7ed1\u5b9a\u5728UTXO\u4e0a\uff0c\u5728\u8f6c\u79fb\u548c\u9500\u6bc1\u7b49\u64cd\u4f5c\u65f6\uff0cToken\u6570\u91cf\u4ece\u4ea4\u6613\u8f93\u5165\u8f6c\u79fb\u5230\u4ea4\u6613\u8f93\u51fa\u4e0a\u7684\u65b0UTXO\u3002\n\u5982\u679c\u9700\u8981\u8de8\u94fe\u8f6c\u79fbToken\uff0c\u5219\u7ed1\u5b9a\u7684UTXO\u5c06\u88ab\u6d88\u8017\u5e76\u89e3\u7ed1\uff0c\u5728\u65b0\u7684\u94fe\u4e0a\u91cd\u65b0\u7ed1\u5b9a\u4e8e\u65b0\u94fe\u7684UTXO\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u4ee3\u5e01\u7684utxo\u7ed1\u5b9a",children:"\u4ee3\u5e01\u7684UTXO\u7ed1\u5b9a"}),"\n",(0,i.jsx)(n.p,{children:"\u6bd4\u7279\u5e01\u7684\u57fa\u672c\u4ea4\u6613\u5355\u4f4d\u662fUTXO\uff0c\u6bcf\u4e00\u4e2a\u7ed1\u5b9a\u7684UTXO\u901a\u8fc7\u534f\u8bae\u88ab\u8d4b\u4e88\u4ee3\u5e01\u7684\u79cd\u7c7b\u548c\u6570\u91cf\u3002\u4e0e\u67d3\u8272\u5e01\uff08colored coin\uff09\u4e0d\u540c\u7684\u662f\uff0cUTXO\u4e2d\u7684Satoshi\u6570\u91cf\u4e0eNOTE\u534f\u8bae\u4e0b\u4ee3\u5e01\u7684\u6570\u91cf\u65e0\u5173\uff0c\u4e0d\u53d7Satoshi\u6570\u91cf\u7684\u9650\u5236\u3002\u4ee3\u5e01\u4e0eUTXO\u7ed1\u5b9a\u540e\uff0c\u53ef\u4ee5\u907f\u514d\u6bd4\u7279\u5e01\u7684\u533a\u5757\u91cd\u7ec4\u548cRBF\uff08Replace By Fee\uff09\u5e26\u6765\u7684\u5404\u79cd\u590d\u6742\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u4ee3\u5e01\u7684utxo\u89e3\u7ed1",children:"\u4ee3\u5e01\u7684UTXO\u89e3\u7ed1"}),"\n",(0,i.jsx)(n.p,{children:"\u5904\u4e8e\u89e3\u7ed1\u72b6\u6001\u7684\u4ee3\u5e01\u65e0\u6cd5\u76f4\u63a5\u8fdb\u884c\u8f6c\u8d26\uff0c\u9700\u8981\u5728\u7279\u5b9a\u7684\u533a\u5757\u94fe\u4e0a\u8fdb\u884c\u7ed1\u5b9a\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6599:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>s});var t=o(758);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);