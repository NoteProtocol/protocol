"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[3507],{4933:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"n20-draft","metadata":{"permalink":"/zh/blog/n20-draft","source":"@site/i18n/zh/docusaurus-plugin-content-blog/2024-02-21-open-n20-draft.md","title":"NOTE\uff0c\u9996\u4e2a\u5b9e\u7528\u7684\u539f\u751f\u6bd4\u7279\u5e01\u667a\u80fd\u5408\u7ea6\u534f\u8bae","description":"NOTE\u534f\u8bae\u6807\u5fd7\u7740\u6bd4\u7279\u5e01\u5386\u53f2\u4e0a\u7684\u4e00\u9879\u91cd\u5927\u8fdb\u5c55\u3002","date":"2024-02-21T00:00:00.000Z","tags":[{"label":"NoteProtocol","permalink":"/zh/blog/tags/note-protocol"}],"readingTime":14.4,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"n20-draft","title":"NOTE\uff0c\u9996\u4e2a\u5b9e\u7528\u7684\u539f\u751f\u6bd4\u7279\u5e01\u667a\u80fd\u5408\u7ea6\u534f\u8bae","tags":["NoteProtocol"]},"unlisted":false,"nextItem":{"title":"NoteProtocol v2.0 Draft is out","permalink":"/zh/blog/release-2.0-draft"}},"content":"**NOTE\u534f\u8bae\u6807\u5fd7\u7740\u6bd4\u7279\u5e01\u5386\u53f2\u4e0a\u7684\u4e00\u9879\u91cd\u5927\u8fdb\u5c55\u3002**\\n\\nNOTE\u534f\u8bae\u662f\u57fa\u4e8e\u6bd4\u7279\u5e01UTXO\u6a21\u578b\u7684\u6570\u5b57\u8d44\u4ea7\u53d1\u884c\u534f\u8bae\uff0c\u533a\u522b\u4e8e\u6700\u8fd1\u51fa\u73b0\u7684\u5176\u4ed6\u534f\u8bae\uff0c\u5b83\u771f\u6b63\u6784\u5efa\u5728\u6bd4\u7279\u5e01\u7684UTXO\u6a21\u578b\u4e4b\u4e0a\u3002\u91c7\u7528\u4e0eTypeScript\u517c\u5bb9\u7684\u667a\u80fd\u5408\u7ea6\u8bed\u8a00\uff0c\u5176\u7ea6\u7f16\u8bd1\u7ed3\u679c\u4e3a\u6bd4\u7279\u5e01\u539f\u751f\u64cd\u4f5c\u7801\uff0c\u56fe\u7075\u5b8c\u5907\uff0c\u53ef\u5305\u62ecOracle\u548c\u96f6\u77e5\u8bc6\u8bc1\u660e\u5728\u5185\u7684\u5f3a\u5927\u529f\u80fd\u96c6\u5408\u3002\\n\\n\u4e0eOrdinals\u548cAtomicals\u7b49\u534f\u8bae\u4e0d\u540c\uff0cNOTE\u867d\u7136\u4e5f\u901a\u8fc7\u7d22\u5f15\u5668\u6765\u7edf\u8ba1\u7528\u6237\u8d44\u4ea7\uff0c\u4f46\u5176\u5168\u90e8\u57fa\u4e8e\u5bc6\u7801\u5b66\uff0c\u7531\u6bd4\u7279\u5e01\u77ff\u5de5\u786e\u4fdd\u8d44\u4ea7\u6240\u6709\u6743\uff0c\u907f\u514d\u4e86\u56e0\u7d22\u5f15\u5668\u6807\u8bb0\u800c\u53d1\u751f\u7684\u8bef\u64cd\u4f5c\u95ee\u9898\u3002\u6b64\u5916\uff0cNOTE\u7684\u4ea4\u6613\u6210\u672c\u6781\u4f4e\uff0c\u65e0\u9700\u50cfOrdinals\u548cAtomicals\u90a3\u6837\u53d1\u9001\u4e24\u7b14\u4ea4\u6613\u3002\u66f4\u4e3a\u91cd\u8981\u7684\u662f\uff0cNOTE\u534f\u8bae\u652f\u6301\u667a\u80fd\u5408\u7ea6\uff0c\u6bd4\u5982\u5b9e\u73b0Bitwork\u6316\u77ff\u548c\u968f\u65f6\u95f4\u9012\u51cf\u7684\u6316\u77ff\u91cf\u3002\u5b83\u4f7f\u7528\u7684\u662f\u5b9e\u9645\u7684Token\u6570\u503c\uff0c\u800c\u975e\u57fa\u4e8eSatoshi\u7f16\u53f7\u7684\u7d20\u6570\u534f\u8bae\u4e5f\u975e\u4f9d\u8d56UTXO\u4f59\u989d\u7684\u67d3\u8272\u5e01\u65b9\u6848\u3002\\n\\n\u76f8\u8f83\u4e8e\u8bb8\u591a\u201c\u94fe\u95f4\u6865\u63a5\u534f\u8bae\u201d\uff0cNOTE\u53d1\u884c\u7684\u662f\u6bd4\u7279\u5e01\u539f\u751f\u8d44\u4ea7\uff0c\u4e0d\u6d89\u53ca\u4f7f\u7528BTC\u4f5c\u4e3a\u62b5\u62bc\u5728\u5176\u4ed6\u94fe\u4e0a\u53d1\u884c\u548c\u4ea4\u6613\u8d44\u4ea7\u7684\u64cd\u4f5c\u3002\\n\\n| Protocol | Ordinals/BRC20 | Atomicals/ARC20 | EVM/Zk Layer2 | NOTE/N20 |\\n|-------|-------|-------|-------|-------|\\n| UTXO | YES | YES | NO | YES| \\n| Bitcoin Assets | YES | YES | NO | YES | \\n| Smart Contract | NO | NO | YES(EVM) | YES(Bitcoin OP Codes) | \\n| Indexer | YES | YES | NO | YES | \\n| Index Logic | Satoshi Ordinals | Colored Satoshi | - | Cryptography | \\n| Cross Chain Transfer | NO | NO | YES with bridge | YES | \\n| Fee(Gas) | High | High | Medium-Low | Low | \\n| Fund | NO | Unknown | YES or Unknown | NO | \\n\\nNOTE\u534f\u8bae\u652f\u6301\u8de8\u94fe\uff0c\u5b83\u53ef\u4ee5\u5c06\u6bd4\u7279\u5e01\u4e0a\u7684\u539f\u751f\u8d44\u4ea7\u53d1\u9001\u7ed9\u5176\u4ed6UTXO\u94fe\uff0c\u4ee5\u53ca\u63a5\u6536\u6765\u81ea\u5176\u4ed6UTXO\u94fe\u7684\u8d44\u4ea7\u3002\u8fd9\u4e00\u5207\u90fd\u57fa\u4e8e\u5bc6\u7801\u5b66\u548c\u6bd4\u7279\u5e01\u533a\u5757\u94fe\u5171\u8bc6\u3002\\n\\nNOTE\u534f\u8bae\uff0c\u5b8c\u5168\u6765\u81ea\u6bd4\u7279\u5e01\u5f00\u53d1\u793e\u533a\u5f00\u53d1\u8005\u7684\u5f00\u53d1\u3002\\n\\n\u4e0b\u9762\u8fdb\u884c\u8be6\u7ec6\u7684**\u6280\u672f\u89e3\u8bfb**\uff1a\\n\\nUTXO\u6a21\u578b\u7684\u4f18\u52bf\u6b63\u5728\u91cd\u65b0\u56de\u5230\u5927\u4f17\u89c6\u91ce\u3002\u6bd4\u7279\u5e01\u4f5c\u4e3a\u6570\u5b57\u8d27\u5e01\u7684\u5b9a\u6d77\u795e\u9488\uff0c\u9700\u8981\u53ef\u7528\u800c\u4e14\u597d\u7528\u7684\u6280\u672f\u65b9\u6848\uff0cNOTE\u534f\u8bae\u5e94\u8fd0\u800c\u751f\u3002\\n\\n\u6bd4\u7279\u5e01UTXO\u6a21\u578b\u76f8\u6bd4\u8f83EVM\u6a21\u578b\u6709\u5de8\u5927\u7684\u6548\u7387\u548c\u5e76\u53d1\u4f18\u52bf\u3002\u4f46\u5728UTXO\u6a21\u578b\u7684\u6bd4\u7279\u5e01\u4e0a\u53d1\u884c\u539f\u751f\u8d44\u4ea7\uff0c\u6d89\u53ca\u5230\u591a\u4e2a\u96be\u4ee5\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u4e3b\u8981\u8bfe\u9898\u662f\u8d44\u4ea7\u5982\u4f55\u6807\u8bc6\u3002\u53e6\u5916\u5c31\u662f\u7d27\u5bc6\u7684\u4ea4\u6613\u7ed3\u6784\u4e2d\u8d44\u4ea7\u5982\u4f55\u4fdd\u5b58\u3002\\n\\n\u4e00\u4e2aUTXO\u5f62\u5f0f\u7684\u4ea4\u6613\u5982\u4e0b\u56fe\\n\\n![Image1](./n20-1.png)\\n\\nNOTE\u534f\u8bae\u91c7\u53d6\u4e86\u4e00\u79cd\u521b\u65b0\u7684\u65b9\u6cd5\u6765\u5904\u7406\u6bd4\u7279\u5e01\u4ea4\u6613\u548c\u8d44\u4ea7\u7684\u7ba1\u7406\uff0c\u8fd9\u79cd\u65b9\u6cd5\u4e0e\u5176\u4ed6\u534f\u8bae\u65b9\u6848\u6709\u663e\u8457\u7684\u4e0d\u540c\u3002\u5728\u4f20\u7edf\u7684\u6bd4\u7279\u5e01\u4ea4\u6613\u4e2d\uff0c\u4ea4\u6613\u7684\u8f93\u5165\u90e8\u5206\u89e3\u9501\u4e86\u4e4b\u524d\u4ea4\u6613\u7684\u8f93\u51fa\uff08\u5373\u65e7\u7684UTXO\uff09\uff0c\u5e76\u751f\u6210\u65b0\u7684\u4ea4\u6613\u8f93\u51fa\uff08\u5373\u65b0\u7684UTXO\uff09\u3002\u5728\u5176\u4ed6\u534f\u8bae\u65b9\u6848\u4e2d\uff0c\u8d44\u4ea7\u88ab\u7ed1\u5b9a\u5728\u65b0\u751f\u6210\u7684UTXO\u4e0a\uff0c\u5bfc\u81f4\u7528\u6237\u7684\u8d44\u4ea7\u5206\u6563\u5728\u4e0d\u540c\u7684UTXO\u4e2d\u3002\u8fd9\u79cd\u65b9\u5f0f\u9700\u8981\u7d22\u5f15\u5668\u548c\u94b1\u5305\u7ef4\u62a4\u4e00\u4e2a\u8be6\u5c3d\u7684UTXO\u5217\u8868\u6765\u786e\u4fdd\u8d44\u4ea7\u7ed1\u5b9a\u5173\u7cfb\u7684\u51c6\u786e\u6027\uff0c\u540c\u65f6\u5fc5\u987b\u975e\u5e38\u8c28\u614e\u5730\u7ba1\u7406\u5e26\u6709\u8d44\u4ea7\u6807\u8bb0\u7684UTXO\uff0c\u4ee5\u907f\u514d\u8bef\u82b1\u8d39\uff0c\u5e76\u4e14\u5fc5\u987b\u4e00\u6b21\u6027\u82b1\u8d39\u6574\u4e2aUTXO\u3002\\n\\n\u76f8\u6bd4\u4e4b\u4e0b\uff0cNOTE\u534f\u8bae\u91c7\u7528\u4e86\u4e00\u79cd\u5c06\u4ea4\u6613\u8f93\u51fa\u89c6\u4e3a\u7528\u6237\u8d26\u53f7\u7684\u65b9\u6cd5\uff0c\u5176\u4e2d\u7528\u6237\u7684\u8d26\u53f7\u7531\u5176\u4ea4\u6613\u8f93\u51fa\u811a\u672c\u54c8\u5e0c\u8868\u793a\uff0c\u5982\u540c\u793a\u4f8b\u4e2d\u7684TX1\u4ea4\u6613\u8f93\u51fa\u6240\u793a\u3002\u8fd9\u79cd\u8d26\u53f7\u662f\u5b8c\u5168\u9690\u79c1\u7684\uff0c\u5176\u7ed1\u5b9a\u7684\u8d44\u4ea7\u7c7b\u578b\u548c\u6570\u91cf\u6e90\u81ea\u4e8eTX1\u7684\u89e3\u9501\u8f93\u5165\u3002\u5f53\u5728TX2\u4e2d\u82b1\u8d39\u8fd9\u4e9b\u8d44\u4ea7\u65f6\uff0c\u7ecf\u8fc7\u6bd4\u7279\u5e01\u77ff\u5de5\u7684\u786e\u8ba4\u89e3\u9501\u540e\uff0c\u4f1a\u751f\u6210\u65b0\u7684\u4ea4\u6613\u8f93\u51fa\u3002\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0cNOTE\u534f\u8bae\u7684\u7d22\u5f15\u5668\u4ec5\u9700\u8bb0\u5f55\u5728\u89e3\u9501\u65f6\u516c\u5f00\u7684\u4ea4\u6613\u7ec6\u8282\uff0c\u5e76\u4e14\u80fd\u591f\u5728\u533a\u5757\u786e\u8ba4\u540e\u63d0\u4f9b\u9ed8\u514b\u5c14\u8bc1\u660e\u6765\u9a8c\u8bc1\u4ea4\u6613\u7684\u6709\u6548\u6027\u3002\\n\\n\u8fd9\u79cd\u8bbe\u8ba1\u4e0d\u4ec5\u7b80\u5316\u4e86\u8d44\u4ea7\u7684\u8ffd\u8e2a\u548c\u7ba1\u7406\uff0c\u51cf\u5c11\u4e86\u7528\u6237\u8d44\u4ea7\u5206\u5272\u7684\u95ee\u9898\uff0c\u8fd8\u589e\u52a0\u4e86\u4ea4\u6613\u7684\u9690\u79c1\u6027\u3002\u901a\u8fc7\u5c06\u4ea4\u6613\u8f93\u51fa\u7528\u4f5c\u8d26\u53f7\uff0c\u5e76\u4f9d\u8d56\u4e8e\u6bd4\u7279\u5e01\u7f51\u7edc\u7684\u77ff\u5de5\u9a8c\u8bc1\u548c\u533a\u5757\u94fe\u5171\u8bc6\u673a\u5236\uff0cNOTE\u534f\u8bae\u4e3a\u6570\u5b57\u8d44\u4ea7\u7684\u7ba1\u7406\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u52a0\u5b89\u5168\u3001\u9ad8\u6548\u548c\u9690\u79c1\u4fdd\u62a4\u7684\u65b9\u6cd5\u3002\\n\\n\u4e00\u4e2a\u5178\u578b\u7684Taproot P2TR\u683c\u5f0f\u7684\u4ea4\u6613\u5982\u4e0b\u6240\u793a\\n![Image2](./n20-2.png)\\n\\nNOTE\u534f\u8bae\u91c7\u7528\u7684\u6280\u672f\u7b56\u7565\u4e0eOrdinals\u548cAtomicals\u534f\u8bae\u6709\u663e\u8457\u7684\u4e0d\u540c\u4e4b\u5904\u3002Ordinals\u548cAtomicals\u5229\u7528P2TR\uff08Taproot\uff09\u7684\u8d4e\u56de\u811a\u672c\uff0c\u901a\u8fc7\u6dfb\u52a0OP_FALSE OP_IF\u64cd\u4f5c\u7801\u6784\u9020\u4e86\u4e00\u4e2a\u4e0d\u53ef\u8bbf\u95ee\u7684\u6570\u636e\u533a\u57df\uff0c\u4ee5\u6b64\u6765\u5d4c\u5165\u989d\u5916\u6570\u636e\u3002\u800cNOTE\u534f\u8bae\u5219\u5141\u8bb8\u901a\u8fc7\u64cd\u4f5c\u7801\u76f4\u63a5\u64cd\u4f5c\u89e3\u9501\u6570\u636e\uff0c\u63d0\u9ad8\u4e86\u6570\u636e\u7684\u53ef\u7528\u6027\u3002\u5728NOTE\u534f\u8bae\u4e2d\uff0c\u793a\u4f8b\u811a\u672c\u80fd\u591f\u76f4\u63a5\u4ece\u5806\u6808\u4e2d\u5f39\u51fa\u6570\u636e\uff0c\u66f4\u590d\u6742\u7684\u811a\u672c\u5219\u80fd\u5b9e\u73b0\u5982hashlock\u7b49\u94fe\u4e0a\u7684\u68c0\u67e5\u529f\u80fd\u3002\\n\\n\u6b64\u5916\uff0cNOTE\u534f\u8bae\u4e0d\u9650\u4e8e\u4f7f\u7528P2TR\uff0c\u5b83\u8fd8\u53ef\u4ee5\u901a\u8fc7P2SH\uff08Pay to Script Hash\uff09\u3001P2WSH\uff08Pay to Witness Script Hash\uff09\u548c\u975e\u6807\u51c6\u811a\u672c\u6765\u5b9e\u73b0\uff0c\u8fd9\u589e\u52a0\u4e86\u534f\u8bae\u7684\u7075\u6d3b\u6027\u548c\u8de8\u94fe\u8d44\u4ea7\u4ea4\u6613\u7684\u80fd\u529b\u3002NOTE\u534f\u8bae\u4f7f\u7528msgpack\u6570\u636e\u7f16\u7801\u800c\u4e0d\u662fjson\u7f16\u7801\uff0c\u8fd9\u79cd\u65b9\u5f0f\u66f4\u4e3a\u7d27\u51d1\uff0c\u6709\u52a9\u4e8e\u51cf\u5c11\u6bcf\u7b14\u4ea4\u6613\u7684\u6570\u636e\u91cf\uff0c\u4ece\u800c\u964d\u4f4e\u7528\u6237\u7684\u4ea4\u6613\u6210\u672c\u3002\\n\\n\u5728NOTE\u534f\u8bae\u4e2d\uff0c\u7531\u7279\u5b9a\u7684\u8d4e\u56de\u811a\u672c\u6784\u5efa\u7684\u5730\u5740\u5145\u5f53\u7528\u6237\u8d26\u6237\u3002\u8fd9\u4e9b\u8d26\u6237\u5730\u5740\u5728\u88ab\u6b63\u786e\u89e3\u9501\u65f6\u624d\u80fd\u88ab\u77ff\u5de5\u786e\u8ba4\u3002\u89e3\u9501\u811a\u672c\u4e2d\u5305\u542b\u7684\u8d44\u4ea7\u4ea4\u6613\u6570\u636e\u5728\u89e3\u9501\u65f6\u88ab\u7d22\u5f15\u5668\u8bc6\u522b\uff0c\u5e76\u8fdb\u884c\u94fe\u4e0b\u667a\u80fd\u5408\u7ea6\u5904\u7406\u3002\u53ea\u6709\u5728\u94fe\u4e0b\u5408\u7ea6\u9a8c\u8bc1\u901a\u8fc7\u7684\u8d44\u4ea7\u4ea4\u6613\u624d\u4f1a\u88ab\u7d22\u5f15\u5668\u8bb0\u5f55\uff0c\u8fd9\u4e00\u673a\u5236\u6709\u6548\u9632\u6b62\u4e86\u6bd4\u7279\u5e01\u94b1\u5305\u8bef\u82b1\u8d39NOTE\u7684UTXO\uff0c\u5e76\u4e14\u4f7f\u5f97UTXO\u4e2d\u7684\u5fae\u91cf\u6bd4\u7279\u5e01\uff08\u4f8b\u5982546 Satoshi\uff09\u53ef\u4ee5\u88ab\u56de\u6536\u3002\\n\\nNOTE\u534f\u8bae\u7684\u8bbe\u8ba1\u8003\u8651\u4e86\u6bd4\u7279\u5e01\u7f51\u7edc\u81ea2017\u5e74\u4ee5\u6765\u5173\u4e8e\u9690\u79c1\u548c\u4ea4\u6613\u7a7a\u95f4\u4f18\u5316\u7684\u591a\u6b21\u5347\u7ea7\u3002\u4e0e\u6b64\u540c\u65f6\uff0c\u5b83\u4e5f\u501f\u9274\u4e86BSV\uff08Bitcoin SV\uff09\u6240\u4ee3\u8868\u7684\u5927\u533a\u5757\u7b56\u7565\uff0c\u6df1\u5165\u6316\u6398\u6bd4\u7279\u5e01\u811a\u672c\u7684\u6f5c\u80fd\u3002NOTE\u534f\u8bae\u7684\u667a\u80fd\u5408\u7ea6\u89e3\u51b3\u65b9\u6848\u662f\u57fa\u4e8esCrypt\u56e2\u961f\u5f00\u53d1\u7684\u6bd4\u7279\u5e01\u667a\u80fd\u5408\u7ea6\u8bed\u8a00\uff0c\u8be5\u8bed\u8a00\u652f\u6301\u94fe\u4e0b\u5408\u7ea6\u9a8c\u8bc1\u3002\u7531\u4e8e\u6bd4\u7279\u5e01\u811a\u672c\u8bed\u8a00\u662f\u56fe\u7075\u5b8c\u5907\u7684\u4e14\u53ef\u4ee5\u786e\u4fdd\u5728\u7ed9\u5b9a\u7684\u811a\u672c\u957f\u5ea6\u5185\u6267\u884c\u5b8c\u6210\uff0c\u56e0\u6b64\u7d22\u5f15\u5668\u4e0d\u4f1a\u56e0\u667a\u80fd\u5408\u7ea6\u8bbe\u8ba1\u4e0d\u5f53\u800c\u9677\u5165\u6b7b\u5faa\u73af\uff0c\u4fdd\u8bc1\u4e86\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u548c\u6548\u7387\u3002\\n\\n\u6f14\u793a\u7528\u7684N20\u8d44\u4ea7\u53d1\u884c\u667a\u80fd\u5408\u7ea6\u9879\u76ee\u5df2\u7ecf\u88ab\u53d1\u5e03\u5728GitHub\u4e0a\u3002\\nhttps://github.com/NoteProtocol/scryptdemo \\n\\n![Image3](./n20-3.png)\\n\\n\u5b83\u6f14\u793a\u4e86NOTE\u534f\u8bae\u4e0b\u7684Pow\u5408\u7ea6\u901a\u8fc7\u6a21\u62df\u6bd4\u7279\u5e01\u6316\u77ff\u7684\u51cf\u534a\u673a\u5236\u548cAtomicals\u7684Bitwork\u96be\u5ea6\u6316\u77ff\uff0c\u5c55\u793a\u4e86\u5728\u6bd4\u7279\u5e01\u7f51\u7edc\u4e0a\u5b9e\u73b0\u590d\u6742\u903b\u8f91\u7684\u80fd\u529b\u3002\u901a\u8fc7\u751f\u62101KB\u5927\u5c0f\u7684\u6bd4\u7279\u5e01\u811a\u672c\uff0c\u8be5\u5408\u7ea6\u5141\u8bb8\u7d22\u5f15\u5668\u8c03\u7528\u5e76\u6821\u9a8c\u4ea4\u6613\u662f\u5426\u7b26\u5408\u534f\u8bae\u89c4\u5b9a\uff0c\u8fd9\u4e00\u8fc7\u7a0b\u4f53\u73b0\u4e86\u667a\u80fd\u5408\u7ea6\u5728\u6bd4\u7279\u5e01\u7f51\u7edc\u4e2d\u5e94\u7528\u7684\u53ef\u884c\u6027\u548c\u7075\u6d3b\u6027\u3002\\n\\n\u66f4\u590d\u6742\u7684\u57fa\u4e8eRabin\u7b7e\u540d\u7b97\u6cd5\u7684Oracle\u548c\u57fa\u4e8e\u96f6\u77e5\u8bc6\u8bc1\u660e\u7684\u590d\u6742\u5408\u7ea6\u5219\u63d0\u4f9b\u4e86\u9ad8\u7ea7\u522b\u7684\u5e94\u7528\u573a\u666f\u3002\u8fd9\u4e9b\u6280\u672f\u5728\u667a\u80fd\u5408\u7ea6\u7684\u5b9e\u73b0\u4e2d\uff0c\u7279\u522b\u662f\u5728\u9700\u8981\u9a8c\u8bc1\u7279\u5b9a\u6761\u4ef6\u6216\u6267\u884c\u7279\u5b9a\u903b\u8f91\u65f6\uff0c\u53d1\u6325\u7740\u81f3\u5173\u91cd\u8981\u7684\u4f5c\u7528\u3002\\n\\n\u901a\u8fc7\u5229\u7528\u8fd9\u4e9b\u667a\u80fd\u5408\u7ea6\uff0c\u6bd4\u7279\u5e01\u4e0a\u7684\u8d44\u4ea7\u53d1\u884c\u53ef\u4ee5\u88ab\u7528\u4e8e\u5b9e\u73b0\u771f\u5b9e\u4e16\u754c\u7684\u5e94\u7528\u573a\u666f\uff0c\u4f8b\u5982AI\u89e3\u51b3\u95ee\u9898\u7684\u60ac\u8d4f\u91d1\u573a\u666f\u3002\u5728\u8fd9\u7c7b\u573a\u666f\u4e2d\uff0c\u53ea\u8981\u6709\u4eba\u80fd\u63d0\u4ea4\u4e00\u4e2a\u53ef\u9a8c\u8bc1\u7684\u8ba1\u7b97\u7ed3\u679c\uff0c\u5c31\u80fd\u83b7\u5f97\u5956\u8d4f\u3002\u8fd9\u4e0d\u4ec5\u663e\u793a\u4e86\u6bd4\u7279\u5e01\u667a\u80fd\u5408\u7ea6\u7684\u5b9e\u7528\u6027\uff0c\u8fd8\u5c55\u793a\u4e86\u5b83\u4eec\u5982\u4f55\u4fc3\u8fdb\u590d\u6742\u5e94\u7528\u7684\u5b9e\u73b0\uff0c\u8fd9\u4e9b\u5e94\u7528\u8d85\u8d8a\u4e86\u4f20\u7edf\u7684\u91d1\u878d\u4ea4\u6613\u548c\u8d44\u4ea7\u7ba1\u7406\u3002\\n\\nN20 Token\u8d44\u4ea7\u53d1\u884c\u529f\u80fd\u662fNOTE\u534f\u8bae\u4e2d\u4f17\u591a\u529f\u80fd\u4e2d\u7684\u4e00\u90e8\u5206\u3002NOTE\u534f\u8bae\u8fd8\u5305\u62ecDID\uff08\u53bb\u4e2d\u5fc3\u5316\u8eab\u4efd\uff09\u4ee5\u53ca\u52a0\u5bc6\u6570\u636e\u548c\u6240\u6709\u6743\u6807\u8bc6\uff0c\u5e76\u4e14\u968f\u7740N721 NFT\u548cAlias\uff08\u6bd4\u7279\u5e01\u522b\u540d\u7cfb\u7edf\uff09\u7684\u5236\u5b9a\u548c\u9a8c\u8bc1\u8fdb\u7a0b\uff0cNOTE\u534f\u8bae\u7684\u80fd\u529b\u548c\u5e94\u7528\u8303\u56f4\u9884\u8ba1\u5c06\u8fdb\u4e00\u6b65\u6269\u5c55\u3002\\n\\n\u4e3a\u4e86\u8ba9\u7528\u6237\u80fd\u591f\u4f53\u9a8cN20 Token\u7684\u94f8\u9020\uff08mint\uff09\u548c\u8f6c\u79fb\uff08transfer\uff09\uff0c\u4e00\u4e2a\u547d\u4ee4\u884c\u94b1\u5305\u5df2\u7ecf\u53d1\u5e03\u5728GitHub\u4e0a\uff0c\u800c\u5f00\u6e90\u7684\u7d22\u5f15\u5668\u4e5f\u8ba1\u5212\u5c06\u88ab\u53d1\u5e03\u3002\\n\\nNOTE\u534f\u8bae\u80cc\u540e\u7684\u5f00\u6e90\u4ee3\u7801\u8d21\u732e\u8005\u4eec\u5f3a\u8c03\uff0c\u6240\u6709\u5185\u5bb9\u4ec5\u7528\u4e8e\u6280\u672f\u63a2\u8ba8\uff0c\u4efb\u4f55\u8d44\u4ea7\u7684\u53d1\u884c\u548c\u7092\u4f5c\u90fd\u4e0e\u4ee3\u7801\u8d21\u732e\u8005\u65e0\u5173\u3002NOTE\u4ec5\u4ec5\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u6280\u672f\u9879\u76ee\u3002\\n\\n\u968f\u7740NOTE\u534f\u8bae\u7684\u8fdb\u4e00\u6b65\u5f00\u53d1\u548c\u5b8c\u5584\uff0c\u53ef\u4ee5\u9884\u89c1\u5c06\u6709\u66f4\u591a\u57fa\u4e8e\u6b64\u534f\u8bae\u7684\u771f\u5b9e\u5e94\u7528\u8bde\u751f\uff0c\u8fd9\u4e9b\u5e94\u7528\u5c06\u5229\u7528NOTE\u534f\u8bae\u7684\u72ec\u7279\u529f\u80fd\u548c\u4f18\u52bf\uff0c\u5728\u6bd4\u7279\u5e01\u4ee5\u53ca\u66f4\u5e7f\u6cdb\u7684\u533a\u5757\u94fe\u9886\u57df\u521b\u9020\u65b0\u7684\u4ef7\u503c\u548c\u53ef\u80fd\u6027\u3002\u5f00\u6e90\u793e\u533a\u7684\u6301\u7eed\u8d21\u732e\u548c\u534f\u4f5c\u7cbe\u795e\u662f\u63a8\u52a8\u8fd9\u4e00\u8fdb\u7a0b\u4e0d\u53ef\u6216\u7f3a\u7684\u529b\u91cf\u3002\\n\\n\\n**\u603b\u7ed3**\\n\\nNOTE\u534f\u8bae\u4ee3\u8868\u4e86\u6bd4\u7279\u5e01\u7f51\u7edc\u5411\u667a\u80fd\u5408\u7ea6\u529f\u80fd\u6269\u5c55\u7684\u4e00\u4e2a\u91cd\u8981\u8fdb\u5c55\u3002\u901a\u8fc7\u5728\u6bd4\u7279\u5e01\u8fd9\u4e2a\u6700\u4e3a\u539f\u59cb\u548c\u5e7f\u6cdb\u4f7f\u7528\u7684\u52a0\u5bc6\u8d27\u5e01\u5e73\u53f0\u4e0a\u5f15\u5165\u667a\u80fd\u5408\u7ea6\uff0cNOTE\u534f\u8bae\u4e0d\u4ec5\u589e\u5f3a\u4e86\u6bd4\u7279\u5e01\u7684\u529f\u80fd\u6027\uff0c\u8fd8\u4e3a\u5f00\u53d1\u8005\u548c\u7528\u6237\u63d0\u4f9b\u4e86\u524d\u6240\u672a\u6709\u7684\u521b\u65b0\u53ef\u80fd\u6027\u3002\u4ee5\u4e0b\u662fNOTE\u534f\u8bae\u7684\u51e0\u4e2a\u5173\u952e\u7279\u70b9\uff1a\\n\\n\u667a\u80fd\u5408\u7ea6\u652f\u6301\uff1aNOTE\u534f\u8bae\u901a\u8fc7\u667a\u80fd\u5408\u7ea6\u6269\u5c55\u4e86\u6bd4\u7279\u5e01\u7684\u5e94\u7528\u8303\u56f4\uff0c\u5141\u8bb8\u5728\u6bd4\u7279\u5e01\u7f51\u7edc\u4e0a\u521b\u5efa\u548c\u6267\u884c\u66f4\u590d\u6742\u7684\u903b\u8f91\u548c\u4ea4\u6613\u7c7b\u578b\u3002\u8fd9\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u8d44\u4ea7\u53d1\u884c\u3001\u53bb\u4e2d\u5fc3\u5316\u91d1\u878d\uff08DeFi\uff09\u5e94\u7528\u3001\u4ee5\u53ca\u5176\u4ed6\u9700\u8981\u6761\u4ef6\u6267\u884c\u7684\u573a\u666f\u3002\\n\\n\u57fa\u4e8eUTXO\u7684\u6a21\u578b\uff1a\u4e0e\u57fa\u4e8e\u8d26\u6237\u7684\u667a\u80fd\u5408\u7ea6\u5e73\u53f0\u4e0d\u540c\uff0cNOTE\u534f\u8bae\u5efa\u7acb\u5728\u6bd4\u7279\u5e01\u7684UTXO\u6a21\u578b\u4e4b\u4e0a\uff0c\u501f\u529b\u4e86\u6bd4\u7279\u5e01\u7684\u5b89\u5168\u6027\u548c\u9ad8\u6548\u7387\u3002\\n\\n\u8de8\u94fe\u529f\u80fd\uff1aNOTE\u534f\u8bae\u652f\u6301\u8de8\u94fe\u4ea4\u6613\uff0c\u4f7f\u6570\u5b57\u8d44\u4ea7\u80fd\u591f\u5728\u4e0d\u540c\u7684UTXO\u94fe\u4e4b\u95f4\u79fb\u52a8\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8\u4e86\u5176\u7075\u6d3b\u6027\u548c\u5e94\u7528\u8303\u56f4\u3002\\n\\n\u771f\u5b9e\u4e16\u754c\u7684\u5e94\u7528\uff1aNOTE\u534f\u8bae\u652f\u6301\u5148\u8fdb\u7684\u5bc6\u7801\u5b66\u6280\u672f\uff0c\u5982\u96f6\u77e5\u8bc6\u8bc1\u660e\u548cRabin\u7b7e\u540d\u7b97\u6cd5\uff0c\u53ef\u4ee5\u5e94\u7528\u5728\u66f4\u590d\u6742\u7684\u771f\u5b9e\u4e16\u754c\u5e94\u7528\u573a\u666f\u4e2d\u3002\\n\\n\u4f4e\u6210\u672c\u548c\u9ad8\u6548\u7387\uff1a\u901a\u8fc7\u4f18\u5316\u6570\u636e\u5b58\u50a8\u548c\u4f7f\u7528msgpack\u7f16\u7801\uff0cNOTE\u534f\u8bae\u65e8\u5728\u51cf\u5c11\u4ea4\u6613\u6210\u672c\u548c\u63d0\u9ad8\u7f51\u7edc\u6548\u7387\u3002\\n\\n\u5f00\u6e90\u548c\u793e\u533a\u9a71\u52a8\uff1aNOTE\u534f\u8bae\u5f3a\u8c03\u5f00\u6e90\u7cbe\u795e\u548c\u793e\u533a\u7684\u8d21\u732e\uff0c\u4fc3\u8fdb\u4e86\u6280\u672f\u7684\u900f\u660e\u6027\u548c\u53ef\u4fe1\u8d56\u6027\uff0c\u540c\u65f6\u4e5f\u9f13\u52b1\u4e86\u66f4\u5e7f\u6cdb\u7684\u5f00\u53d1\u548c\u5e94\u7528\u521b\u65b0\u3002\\n\\n\u968f\u7740NOTE\u534f\u8bae\u7684\u53d1\u5c55\u548c\u5e94\u7528\u7684\u6df1\u5165\uff0c\u6211\u4eec\u53ef\u4ee5\u671f\u5f85\u5728\u6bd4\u7279\u5e01\u751f\u6001\u4e2d\u51fa\u73b0\u66f4\u591a\u521b\u65b0\u7684\u5e94\u7528\u548c\u670d\u52a1\uff0c\u8fd9\u4e9b\u90fd\u5c06\u5728\u4fdd\u6301\u6bd4\u7279\u5e01\u6838\u5fc3\u4ef7\u503c\u89c2\u7684\u540c\u65f6\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u4e30\u5bcc\u7684\u529f\u80fd\u548c\u66f4\u597d\u7684\u4f53\u9a8c\u3002\\n\\nNOTE\u534f\u8bae\\n\\n\u7f51\u7ad9: https://noteprotocol.org\\n\\nX: https://twitter.com/NoteProtocol\\n\\nGitHub: https://github.com/NoteProtocol"},{"id":"release-2.0-draft","metadata":{"permalink":"/zh/blog/release-2.0-draft","source":"@site/i18n/zh/docusaurus-plugin-content-blog/2024-01-01-release-2.0-draft.md","title":"NoteProtocol v2.0 Draft is out","description":"\ud83d\ude80 \u6211\u4eec\u56e2\u961f\u7684\u6fc0\u52a8\u4eba\u5fc3\u7684\u66f4\u65b0\uff1a\u6211\u4eec\u8bbe\u8ba1\u4e86\u4e00\u79cd #\u6bd4\u7279\u5e01 #\u7b2c\u4e8c\u5c42\u534f\u8bae\uff0c\u4e13\u4e3a #UTXO \u57fa\u7840\u7684\u533a\u5757\u94fe\u91cf\u8eab\u5b9a\u505a\u3002\u8fd9\u4e2a\u534f\u8bae\u4e0d\u4ec5\u5141\u8bb8\u521b\u5efa\u4ee3\u5e01\u548cNFT\uff0c\u8fd8\u6574\u5408\u4e86\u53ef\u9009\u7684\u6570\u636e #\u52a0\u5bc6\u3001#\u667a\u80fd\u5408\u7ea6 \u548c #DID \u5b9a\u4e49\uff0c\u6240\u6709\u8fd9\u4e9b\u90fd\u5728 MIT \u8bb8\u53ef\u8bc1\u4e0b\u3002","date":"2024-01-01T00:00:00.000Z","tags":[{"label":"NoteProtocol","permalink":"/zh/blog/tags/note-protocol"}],"readingTime":1.58,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"release-2.0-draft","title":"NoteProtocol v2.0 Draft is out","tags":["NoteProtocol"]},"unlisted":false,"prevItem":{"title":"NOTE\uff0c\u9996\u4e2a\u5b9e\u7528\u7684\u539f\u751f\u6bd4\u7279\u5e01\u667a\u80fd\u5408\u7ea6\u534f\u8bae","permalink":"/zh/blog/n20-draft"}},"content":"\ud83d\ude80 \u6211\u4eec\u56e2\u961f\u7684\u6fc0\u52a8\u4eba\u5fc3\u7684\u66f4\u65b0\uff1a\u6211\u4eec\u8bbe\u8ba1\u4e86\u4e00\u79cd #\u6bd4\u7279\u5e01 #\u7b2c\u4e8c\u5c42\u534f\u8bae\uff0c\u4e13\u4e3a #UTXO \u57fa\u7840\u7684\u533a\u5757\u94fe\u91cf\u8eab\u5b9a\u505a\u3002\u8fd9\u4e2a\u534f\u8bae\u4e0d\u4ec5\u5141\u8bb8\u521b\u5efa\u4ee3\u5e01\u548cNFT\uff0c\u8fd8\u6574\u5408\u4e86\u53ef\u9009\u7684\u6570\u636e #\u52a0\u5bc6\u3001#\u667a\u80fd\u5408\u7ea6 \u548c #DID \u5b9a\u4e49\uff0c\u6240\u6709\u8fd9\u4e9b\u90fd\u5728 MIT \u8bb8\u53ef\u8bc1\u4e0b\u3002\\n\\n\ud83d\udd2c \u7b2c\u4e00\u90e8\u5206\u5df2\u5728 #BTC\u3001#RXD \u548c #BSV \u7f51\u7edc\u4e0a\u6210\u529f\u6d4b\u8bd5\u3002#NFT/#\u4ee3\u5e01/\u7d22\u5f15\u5668\u529f\u80fd\u5373\u5c06\u5b8c\u6210\uff0c\u7ecf\u8fc7\u5f7b\u5e95\u9a8c\u8bc1\u4ee5\u786e\u4fdd\u9ad8\u5b89\u5168\u6807\u51c6\u540e\uff0c\u8ba1\u5212\u4e8e\u4e00\u6708\u53d1\u5e03\u3002\\n\\n\ud83c\udf0d \u968f\u7740\u6211\u4eec\u524d\u8fdb\uff0c\u6211\u4eec\u9080\u8bf7\u793e\u533a\u4e3a\u8fd9\u4e2a\u4e0d\u65ad\u8fdb\u5316\u7684\u9879\u76ee\u505a\u51fa\u8d21\u732e\u3002\u6211\u4eec\u7684\u76ee\u6807\u662f\u5efa\u7acb\u4e00\u4e2a\u534f\u8bae\u59d4\u5458\u4f1a\uff0c\u7531\u8d21\u732e\u8005\u7ec4\u6210\uff0c\u81f4\u529b\u4e8e\u63a8\u5e7f\u548c\u589e\u5f3a\u534f\u8bae\uff0c\u786e\u4fdd\u5b83\u6709\u6548\u5730\u670d\u52a1\u4e8e\u5168\u7403\u6bd4\u7279\u5e01\u793e\u533a\u3002\\n\\n\ud83d\udd27 \u5728\u8fd9\u4e00\u521b\u65b0\u4e0e\u5408\u4f5c\u7684\u65c5\u7a0b\u4e2d\uff0c\u4f60\u7684\u53c2\u4e0e\u81f3\u5173\u91cd\u8981\u3002\u6211\u4eec\u5728\u8fd9\u91cc\u652f\u6301\u5229\u7528\u8fd9\u4e00\u534f\u8bae\u7684\u9879\u76ee\uff0c\u4fc3\u8fdb\u4e00\u4e2a\u5b89\u5168\u800c\u52a8\u6001\u7684\u533a\u5757\u94fe\u751f\u6001\u7cfb\u7edf\u3002\\n\\n\ud83d\udd14 \u8bf7\u4fdd\u6301\u5173\u6ce8\u8be6\u7ec6\u66f4\u65b0\uff0c\u5e76\u6210\u4e3a\u5851\u9020\u533a\u5757\u94fe\u6280\u672f\u672a\u6765\u7684\u4e00\u90e8\u5206\u3002#\u533a\u5757\u94fe\u5de5\u7a0b #\u6bd4\u7279\u5e01\u534f\u8bae #\u53bb\u4e2d\u5fc3\u5316\u521b\u65b0 #\u5f00\u6e90\u672a\u6765\\n\\n\u65b0\u5e74\u5feb\u4e50\u5927\u5bb6\uff01"}]}')}}]);