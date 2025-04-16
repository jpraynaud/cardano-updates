"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[80613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Consensus Team Update",slug:"2022-09-20-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},i="Executive summary",s={permalink:"/2022-09-20-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2022-09-20-consensus.md",source:"@site/blog/2022-09-20-consensus.md",title:"Consensus Team Update",description:"- We proposed a fix for the performance degradation observed when running",date:"2022-09-20T00:00:00.000Z",formattedDate:"September 20, 2022",tags:[{label:"consensus",permalink:"/tags/consensus"}],readingTime:3.895,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2022-09-20-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/2022-09-27-network"},nextItem:{title:"DB Sync Team Update",permalink:"/2022-09-19-db-sync"}},l={authorsImageUrls:[void 0]},p=[{value:"UTxO HD",id:"utxo-hd",level:2},{value:"Genesis",id:"genesis",level:2},{value:"Technical debt",id:"technical-debt",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We proposed a fix for the performance degradation observed when running\ndistributed multi-node benchmarks in the UTxO HD feature branch. While this\nfixed the problems observed when running local benchmarks, it broke the\n",(0,r.kt)("inlineCode",{parentName:"li"},"ThreadNet")," tests due to concurrency issues. Therefore, we think it is wise to\nstart redesigning the UTxO HD mempool integration."),(0,r.kt)("li",{parentName:"ul"},"We did several rounds of code review on the alternative implementation of\ndiff-sequences required by the UTxO HD feature based on the idea of\nanti-diffs. This alternative implementation is close to being merged, and the\nnext step is to integrate this to the UTxO HD branch, so that we can run\nad-hoc replaying and syncing from scratch benchmarks and compare these with\nthe baseline. The micro-benchmarks we elaborated for the alternative\nimplementation show speedups of up to 4x, so we are optimistic about the\nperformance of replaying and syncing from scratch benchmarks, however it is\nimportant to notice that ",(0,r.kt)("em",{parentName:"li"},"due to the nature of UTxO HD")," we will still be\nslower than the baseline."),(0,r.kt)("li",{parentName:"ul"},"The final draft of the Genesis implementation specification is ready for\nreview."),(0,r.kt)("li",{parentName:"ul"},"We implemented a prototype for the happy path of Genesis' ChainSync Jumping\n(CSJ). The prototype is slower than the baseline, however it is not the latest\nversion of the prototype and the jump interval is very small."),(0,r.kt)("li",{parentName:"ul"},"Work on integrating Conway has ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/3971#issuecomment-1252524031"},"stopped")," since\npriorities have changed."),(0,r.kt)("li",{parentName:"ul"},"We started work on benchmarking epoch-boundaries and epoch overhead\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4014"},"pr-4014"),". To this end, we made use of a modified version of our\n",(0,r.kt)("inlineCode",{parentName:"li"},"db-analyser")," tool. We ran the new benchmarking setup using the Cardano\nmainnet chain, and we can see that block tick and application take\nsubstantially longer at epoch boundaries, although there are a couple of slots\nduring an epoch in which these computations take more than normal. We notified\nthe ledger team about these findings. We will use this modified version of\n",(0,r.kt)("inlineCode",{parentName:"li"},"db-analyser")," to investigate the epoch overhead.")),(0,r.kt)("h1",{id:"workstreams"},"Workstreams"),(0,r.kt)("h2",{id:"utxo-hd"},"UTxO HD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Spent quite some time investigating the root cause of the degradation in\nperformance observed in the benchmarks. We run the ",(0,r.kt)("inlineCode",{parentName:"p"},"make forge-stress"),"\nbenchmarks locally in order to debug this behavior."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transaction batching doesn't make a notable difference in the outcome\n(considering we are using the in-memory backend).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The mempool batching implementation required asynchronous transaction\nvalidation which is a violation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalTxSubmission")," protocol\ncontract and therefore if we continued on that route, the impact would\nhave been quite big.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The STM logic we implemented by using a ",(0,r.kt)("inlineCode",{parentName:"p"},"TMVar")," for the mempool internal\nstate was buggy and under certain circumstances it seemed to lock.\nReverting the mempool internal state to be stored in a ",(0,r.kt)("inlineCode",{parentName:"p"},"TVar")," seems to\nsolve this problem.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The results we get after this change look almost identical to the ones\nfrom the baseline.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/3997"},"The anti-diff prototype (PR\n#3997)")," has\nbeen reviewed and is close to being merged."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A follow-up issue (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4010"},"issue\n#4010"),")\nto integrate the anti-diff prototype in the various ",(0,r.kt)("inlineCode",{parentName:"li"},"consensus"),' packages\nwas created. A first version of the integration exists, and all tests\npass. A next step is to get some indication of the "real" performance gain\nby profiling ',(0,r.kt)("inlineCode",{parentName:"li"},"db-analyser")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"cardano-node"),").")))),(0,r.kt)("h2",{id:"genesis"},"Genesis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Final draft of the Genesis implementation specification, now up for review.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Local benchmark setup for parameter tuning via the happy path ChainSync\nJumping (CSJ) prototype (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/3987"},"Issue 3987"),")."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Context: Our Genesis design requires us to check in with a large (~20)\nnumber of servers periodically while syncing. These servers are offered\njump requests via the ChainSync protocol (hence the name), which they can\naccept or decline. If a peer declines, the Genesis rule allows us to\ndetermine whether a node actually has a better chain.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'The "happy path" is when no peer declines a jump. We want this to have\nclose to no overhead compared to status quo, i.e. syncing without Genesis.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We implemented a prototype for this happy path, and are now starting to\ntest in various configurations (number of peers, latency, bandwidth) to\ntune the performance of ChainSync jumping, i.e. how complicated our logic\nof choosing when to jump needs to be."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Simulated connection: 50 MBit/s, 50ms latency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jump interval: 3000 slots (on the low end, could be increased to up to\n",(0,r.kt)("inlineCode",{parentName:"p"},"3k/f"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Red: baseline (1.35.3), one peer in topology file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Blue: Preliminary version of our prototype, with 10 peers."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(88213).Z,width:"654",height:"459"})),(0,r.kt)("p",{parentName:"li"},"It is slower by about ~30%, but it is not the latest version of the\nprototype, and the jump interval is very small, making CSJ more of a\nbottleneck."))))),(0,r.kt)("h2",{id:"technical-debt"},"Technical debt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix flakiness in ChainDB QSM tests (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/3990"},"PR 3990"),").")))}c.isMDXComponent=!0},88213:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/happy-path-csj-prototype-prelim-5bbe2e2a20a2740e6238a7c73e618168.svg"}}]);