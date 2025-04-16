"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[22057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={title:"Consensus Q4 2023 Update",slug:"2023-Q4-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},o=void 0,i={permalink:"/quarterly/2023-Q4-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/quarterly/2023-Q4-consensus.md",source:"@site/quarterly/2023-Q4-consensus.md",title:"Consensus Q4 2023 Update",description:"Areas of focus",date:"2024-01-23T10:58:30.000Z",formattedDate:"January 23, 2024",tags:[{label:"consensus",permalink:"/quarterly/tags/consensus"}],readingTime:2.66,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Q4 2023 Update",slug:"2023-Q4-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Performance & Tracing Q4 2023 Update",permalink:"/quarterly/2023-Q4-performance-and-tracing"},nextItem:{title:"SRE Q4 2023 Update",permalink:"/quarterly/2023-Q4-sre"}},l={authorsImageUrls:[void 0]},p=[{value:"Areas of focus",id:"areas-of-focus",level:2},{value:"Highlights",id:"highlights",level:2},{value:"Implement legacy mode for UTxO-HD to keep baseline performance",id:"implement-legacy-mode-for-utxo-hd-to-keep-baseline-performance",level:3},{value:"Assist mainnet node release with initial Conway capabilities, test, benchmark, and improvements to CIP 1694",id:"assist-mainnet-node-release-with-initial-conway-capabilities-test-benchmark-and-improvements-to-cip-1694",level:3},{value:"Assist with P2P IOG relay network shut down",id:"assist-with-p2p-iog-relay-network-shut-down",level:3},{value:"Assist with repo transfer to Intersect",id:"assist-with-repo-transfer-to-intersect",level:3},{value:"Support vendors to deliver contracts",id:"support-vendors-to-deliver-contracts",level:3},{value:"Operation serenity Q4 2023",id:"operation-serenity-q4-2023",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"areas-of-focus"},"Areas of focus"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Issue"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/IntersectMBO/ouroboros-consensus/issues/429"},"Implement legacy mode for UTxO-HD to keep baseline performance")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705 Done")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/IntersectMBO/ouroboros-consensus/issues/423"},"Assist mainnet node release with initial Conway capabilities")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705 Done")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/IntersectMBO/ouroboros-consensus/issues/424"},"Assist with test, benchmark, and improvements to CIP 1694")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705 Done")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/IntersectMBO/ouroboros-consensus/issues/414"},"Assist with P2P IOG relay network shut down")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705 Done")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/IntersectMBO/ouroboros-consensus/issues/425"},"Assist with repo transfer to Intersect")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705 Done")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/IntersectMBO/ouroboros-consensus/issues/427"},"Support vendors to deliver contracts")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705 Done")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/IntersectMBO/ouroboros-consensus/issues/415"},"Operation serenity Q4 2023")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705 Done")))),(0,a.kt)("h2",{id:"highlights"},"Highlights"),(0,a.kt)("h3",{id:"implement-legacy-mode-for-utxo-hd-to-keep-baseline-performance"},"Implement legacy mode for UTxO-HD to keep baseline performance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 We managed to run a UTxO-HD capable node in legacy mode, maintaining the baseline memory usage while keeping all the ledger state in memory.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"While the legacy mode is not production-ready (it requires further integration and testing), it remains as a plan B should the need arise to release UTxO-HD if our stakeholders so demand it."))),(0,a.kt)("li",{parentName:"ul"},"\u2705 We pivoted to redesigning the Ledger DB API because:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is needed for integrating the LSM-tree backend."),(0,a.kt)("li",{parentName:"ul"},"The redesign opened the possibility of implementing an in-memory backend that would keep the same performance and resource requirements as the baseline version (which needs to be confirmed by benchmarks)."))),(0,a.kt)("li",{parentName:"ul"},"\u2705 We created a more general Ledger DB API."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udee0\ufe0f We are integrating (into the feature branch) the existing Ledger DB implementations with the new API."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udee0\ufe0f We are implementing the new in-memory backend.")),(0,a.kt)("h3",{id:"assist-mainnet-node-release-with-initial-conway-capabilities-test-benchmark-and-improvements-to-cip-1694"},"Assist mainnet node release with initial Conway capabilities, test, benchmark, and improvements to CIP 1694"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705  We recognized that Conway introduces a new challenge in the versioning of NTC queries, and we resolved it (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/issues/864"},"864")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4770"},"4770"),").")),(0,a.kt)("h3",{id:"assist-with-p2p-iog-relay-network-shut-down"},"Assist with P2P IOG relay network shut down"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 We created a prototype for the pre-Genesis State Machine for bootstrap peers, which is currently under test (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/808"},"this PR"),").")),(0,a.kt)("h3",{id:"assist-with-repo-transfer-to-intersect"},"Assist with repo transfer to Intersect"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 We transferred the ",(0,a.kt)("inlineCode",{parentName:"li"},"ouroboros-consensus")," repository to the Intersect GitHub organization.")),(0,a.kt)("h3",{id:"support-vendors-to-deliver-contracts"},"Support vendors to deliver contracts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Genesis",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u2705 Interacted with the Consensus team and addressed resulting feedback on past deliverables."),(0,a.kt)("li",{parentName:"ul"},"\u2705 Finished implementation of the testing infrastructure of Genesis"),(0,a.kt)("li",{parentName:"ul"},"\u2705 Started to refine the Proof of Concept demo into an actual implementation of the core components of the Genesis design."))),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udcbe LSM-tree implementation. Well Typed:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u2705 Finished the design of the public facing API."),(0,a.kt)("li",{parentName:"ul"},"\u2705 Defined the LSM-tree database file-type formats."),(0,a.kt)("li",{parentName:"ul"},"\u2705 Implemented property and model-based tests.")))),(0,a.kt)("h3",{id:"operation-serenity-q4-2023"},"Operation serenity Q4 2023"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf89 We welcomed our newest team member @RenateEilers and assisted with her (ongoing) onboarding."),(0,a.kt)("li",{parentName:"ul"},"\u2705 We implemented a simplification in the ChainSync mini-protocol that is also a step towards Ouroboros Chronos."),(0,a.kt)("li",{parentName:"ul"},"\u2705 We added tests to check Consensus emits valid CBOR, which prevents the generation of invalid binary encoding."),(0,a.kt)("li",{parentName:"ul"},"\u2705 We established and implemented an interface between Consensus tooling and P&T tooling, which constitutes a step towards incorporating component level benchmarks in our development process.")))}c.isMDXComponent=!0}}]);