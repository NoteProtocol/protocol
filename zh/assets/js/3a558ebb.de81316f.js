"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[8456],{5996:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=o(4848),r=o(8453);const s={slug:"release-2.0-draft",title:"NoteProtocol v2.0 \u8349\u6848\u95ee\u4e16",tags:["NoteProtocol"]},c=void 0,l={permalink:"/zh/blog/release-2.0-draft",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2024-01-01-release-2.0-draft.md",title:"NoteProtocol v2.0 \u8349\u6848\u95ee\u4e16",description:"\ud83d\ude80 \u6211\u4eec\u56e2\u961f\u7684\u6fc0\u52a8\u4eba\u5fc3\u7684\u66f4\u65b0\uff1a\u6211\u4eec\u8bbe\u8ba1\u4e86\u4e00\u79cd #\u6bd4\u7279\u5e01 #\u7b2c\u4e8c\u5c42\u534f\u8bae\uff0c\u4e13\u4e3a #UTXO \u57fa\u7840\u7684\u533a\u5757\u94fe\u91cf\u8eab\u5b9a\u505a\u3002\u8fd9\u4e2a\u534f\u8bae\u4e0d\u4ec5\u5141\u8bb8\u521b\u5efa\u4ee3\u5e01\u548cNFT\uff0c\u8fd8\u6574\u5408\u4e86\u53ef\u9009\u7684\u6570\u636e #\u52a0\u5bc6\u3001#\u667a\u80fd\u5408\u7ea6 \u548c #DID \u5b9a\u4e49\uff0c\u6240\u6709\u8fd9\u4e9b\u90fd\u5728 MIT \u8bb8\u53ef\u8bc1\u4e0b\u3002",date:"2024-01-01T00:00:00.000Z",tags:[{label:"NoteProtocol",permalink:"/zh/blog/tags/note-protocol"}],readingTime:1.58,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"release-2.0-draft",title:"NoteProtocol v2.0 \u8349\u6848\u95ee\u4e16",tags:["NoteProtocol"]},unlisted:!1,prevItem:{title:"NOTE\uff0c\u9996\u4e2a\u5b9e\u7528\u7684\u539f\u751f\u6bd4\u7279\u5e01\u667a\u80fd\u5408\u7ea6\u534f\u8bae",permalink:"/zh/blog/n20-draft"}},a={authorsImageUrls:[]},i=[];function u(t){const e={p:"p",...(0,r.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"\ud83d\ude80 \u6211\u4eec\u56e2\u961f\u7684\u6fc0\u52a8\u4eba\u5fc3\u7684\u66f4\u65b0\uff1a\u6211\u4eec\u8bbe\u8ba1\u4e86\u4e00\u79cd #\u6bd4\u7279\u5e01 #\u7b2c\u4e8c\u5c42\u534f\u8bae\uff0c\u4e13\u4e3a #UTXO \u57fa\u7840\u7684\u533a\u5757\u94fe\u91cf\u8eab\u5b9a\u505a\u3002\u8fd9\u4e2a\u534f\u8bae\u4e0d\u4ec5\u5141\u8bb8\u521b\u5efa\u4ee3\u5e01\u548cNFT\uff0c\u8fd8\u6574\u5408\u4e86\u53ef\u9009\u7684\u6570\u636e #\u52a0\u5bc6\u3001#\u667a\u80fd\u5408\u7ea6 \u548c #DID \u5b9a\u4e49\uff0c\u6240\u6709\u8fd9\u4e9b\u90fd\u5728 MIT \u8bb8\u53ef\u8bc1\u4e0b\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\ud83d\udd2c \u7b2c\u4e00\u90e8\u5206\u5df2\u5728 #BTC\u3001#RXD \u548c #BSV \u7f51\u7edc\u4e0a\u6210\u529f\u6d4b\u8bd5\u3002#NFT/#\u4ee3\u5e01/\u7d22\u5f15\u5668\u529f\u80fd\u5373\u5c06\u5b8c\u6210\uff0c\u7ecf\u8fc7\u5f7b\u5e95\u9a8c\u8bc1\u4ee5\u786e\u4fdd\u9ad8\u5b89\u5168\u6807\u51c6\u540e\uff0c\u8ba1\u5212\u4e8e\u4e00\u6708\u53d1\u5e03\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\ud83c\udf0d \u968f\u7740\u6211\u4eec\u524d\u8fdb\uff0c\u6211\u4eec\u9080\u8bf7\u793e\u533a\u4e3a\u8fd9\u4e2a\u4e0d\u65ad\u8fdb\u5316\u7684\u9879\u76ee\u505a\u51fa\u8d21\u732e\u3002\u6211\u4eec\u7684\u76ee\u6807\u662f\u5efa\u7acb\u4e00\u4e2a\u534f\u8bae\u59d4\u5458\u4f1a\uff0c\u7531\u8d21\u732e\u8005\u7ec4\u6210\uff0c\u81f4\u529b\u4e8e\u63a8\u5e7f\u548c\u589e\u5f3a\u534f\u8bae\uff0c\u786e\u4fdd\u5b83\u6709\u6548\u5730\u670d\u52a1\u4e8e\u5168\u7403\u6bd4\u7279\u5e01\u793e\u533a\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\ud83d\udd27 \u5728\u8fd9\u4e00\u521b\u65b0\u4e0e\u5408\u4f5c\u7684\u65c5\u7a0b\u4e2d\uff0c\u4f60\u7684\u53c2\u4e0e\u81f3\u5173\u91cd\u8981\u3002\u6211\u4eec\u5728\u8fd9\u91cc\u652f\u6301\u5229\u7528\u8fd9\u4e00\u534f\u8bae\u7684\u9879\u76ee\uff0c\u4fc3\u8fdb\u4e00\u4e2a\u5b89\u5168\u800c\u52a8\u6001\u7684\u533a\u5757\u94fe\u751f\u6001\u7cfb\u7edf\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\ud83d\udd14 \u8bf7\u4fdd\u6301\u5173\u6ce8\u8be6\u7ec6\u66f4\u65b0\uff0c\u5e76\u6210\u4e3a\u5851\u9020\u533a\u5757\u94fe\u6280\u672f\u672a\u6765\u7684\u4e00\u90e8\u5206\u3002#\u533a\u5757\u94fe\u5de5\u7a0b #\u6bd4\u7279\u5e01\u534f\u8bae #\u53bb\u4e2d\u5fc3\u5316\u521b\u65b0 #\u5f00\u6e90\u672a\u6765"}),"\n",(0,n.jsx)(e.p,{children:"\u65b0\u5e74\u5feb\u4e50\u5927\u5bb6\uff01"})]})}function p(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(u,{...t})}):u(t)}},8453:(t,e,o)=>{o.d(e,{R:()=>c,x:()=>l});var n=o(6540);const r={},s=n.createContext(r);function c(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);