"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[5451],{4070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var i=n(614),o=n(6070),s=n(6599);const a={slug:"turing-complete-halting-problem",title:"Turing completeness & Halting Problem",tags:["NoteProtocol"]},r=void 0,l={authorsImageUrls:[]},c=[];function p(e){const t={img:"img",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"If we say the native Bitcoin scripting language is Turing complete, many people will criticize us."}),"\n",(0,o.jsx)(t.p,{children:"Turing Completeness refers to a programming language that can implement any computation a Turing machine is capable of. This concept comes from Alan Turing, who proposed the Turing Machine model. It\u2019s an abstract machine that performs calculations by reading and writing symbols on an infinitely long tape."}),"\n",(0,o.jsx)(t.p,{children:"If a programming language is Turing complete, it means it can simulate all computational functions of a Turing machine. Typically, this requires the language to support conditional branching (like if/else statements) and loops (or recursion) to make decisions based on data and repeatedly perform certain actions until a specific condition is met."}),"\n",(0,o.jsx)(t.p,{children:"Is it reasonable that a program in an infinite loop could run indefinitely on an infinitely long tape? Is it reasonable to say that a program that can implement an infinite loop is Turing complete?"}),"\n",(0,o.jsx)(t.p,{children:"In fact, simple infinite loops can be implemented with a very basic set of instructions, but if there's insufficient control structure (like conditional branches) and data handling capabilities, such systems cannot be considered Turing complete. Turing completeness requires the ability to express any complex algorithmic logic, including but not limited to loop structures. Furthermore, infinite loops introduce another issue: the Halting Problem."}),"\n",(0,o.jsx)(t.p,{children:"The Halting Problem, proposed by Alan Turing in the 1930s, is a well-known problem in computation theory. It explores whether there exists an algorithm that can determine whether any given program and its input will eventually stop executing."}),"\n",(0,o.jsx)(t.p,{children:"Turing proved the Halting Problem is unsolvable. Turing-complete systems can express and execute all possible programs, including those that never halt. The unsolvability of the Halting Problem arises directly from the capabilities of these systems. In short, the robust computational power of Turing-complete systems introduces uncertainty because we cannot predict in advance whether a program will stop in all cases."}),"\n",(0,o.jsx)(t.p,{children:"Now let\u2019s see why some claim Bitcoin's script is not Turing complete. Because it lacks loop commands in its opcode, some argue it's not Turing complete. However, assembly language also lacks loop commands, yet no one disputes its Turing completeness. Assembly language provides the necessary tools to implement loops primarily through conditional jump instructions. Bitcoin script is similar to assembly in that loops can be unrolled. For example, to sum from 1 to 100, you could keep adding: 1+2=3, 3+3=6, 6+4=10, and so on until 100. This approach has a benefit\u2014it addresses the Halting Problem. We know that Bitcoin transactions and blocks are limited in size, from 1MB to 4MB, potentially larger. Therefore, an unrolled script will eventually hit this size limit and force the program to stop."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Image1",src:n(8975).A+"",width:"628",height:"328"})}),"\n",(0,o.jsx)(t.p,{children:"One might say: Bitcoin script language is Turing complete and also solves the Halting Problem."}),"\n",(0,o.jsx)(t.p,{children:"In Ethereum, the Halting Problem is addressed by charging a fee (gas) for each operation. Theoretically, a wealthy Ethereum user could pay to run a program for a year, potentially clogging the EVM."}),"\n",(0,o.jsx)(t.p,{children:"However, on Bitcoin , no amount of money can infinitely increase block size, ensuring programs must stop. This is part of the consensus."}),"\n",(0,o.jsx)(t.p,{children:"In the computing field, there\u2019s an important principle: the KISS principle (Keep It Simple, Stupid). Satoshi Nakamoto adhered to this principle."}),"\n",(0,o.jsx)(t.p,{children:"Maintaining simplicity in a system is a crucial consideration for designers. In environments like Note Protocol, script size is still controlled, currently providing about 2.5K of script JSON storage space. In the future, it could expand to between 1MB and 4MB."})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8975:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/scrypt-loop-e351b2a32aad4299ca293566d86b3e73.png"},6599:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(758);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}},614:e=>{e.exports=JSON.parse('{"permalink":"/blog/turing-complete-halting-problem","source":"@site/blog/2024-06-11-turing-complete-halting-problem.md","title":"Turing completeness & Halting Problem","description":"If we say the native Bitcoin scripting language is Turing complete, many people will criticize us.","date":"2024-06-11T00:00:00.000Z","tags":[{"inline":true,"label":"NoteProtocol","permalink":"/blog/tags/note-protocol"}],"readingTime":2.865,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"turing-complete-halting-problem","title":"Turing completeness & Halting Problem","tags":["NoteProtocol"]},"unlisted":false,"prevItem":{"title":"NOTE Protocol: A New Milestone in Bitcoin Smart Contracts","permalink":"/blog/2024/07/9/note-protocol-bitcoin-smart-contracts"},"nextItem":{"title":"Continuous Upgrades to the NOTE Protocol","permalink":"/blog/n20-upgrade"}}')}}]);