"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[6128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"Ledger Team Update",slug:"2024-08-28-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/2024-08-28-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-08-28-ledger.md",source:"@site/blog/2024-08-28-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2024-08-28T00:00:00.000Z",formattedDate:"August 28, 2024",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:1.585,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2024-08-28-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/2024-08-30-network"},nextItem:{title:"Mithril Team Update",permalink:"/2024-08-28-mithril"}},s={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Features",id:"features",level:3},{value:"Testing",id:"testing",level:3},{value:"Infrastructure and releasing",id:"infrastructure-and-releasing",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"Ledger team continued working on conformance tests and other improvements to the ledger test suite. There was a lot of communication with community members and other core teams about the upcoming hard fork. Some of the Conway specific changes that could affect DApp developer where documented:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/issues/4571"},"Deposit and refund amounts in stake credentials certificates are not visible to ",(0,n.kt)("inlineCode",{parentName:"a"},"PlutusV3"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4554"},"Effect of empty redeemers on the data integrity hash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/blob/master/docs/adr/2024-08-14_009-refscripts-fee-change.md"},"Effect of reference scripts on the transaction fee computation"))),(0,n.kt)("p",null,"There was a minor bug discovered and fixed in how DRep expiration was initialized, which doesn't have any impact on the upcoming Chang hard fork, since DReps cannot affect ratification during the bootstrap phase."),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4547"},"pull-4547")," - Drep registration expiration fix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4554"},"pull-4554")," - Fix cddl hash data comment"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4550"},"pull-4550")," - ADR for fee computation changes in Conway"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4570"},"pull-4570")," - Fix wording in the spec where unclaimed rewards go into treasury")),(0,n.kt)("h3",{id:"testing"},"Testing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4529"},"pull-4529")," - Alternative Agda cert- steps in conformance tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4528"},"pull-4528")," - Add tools for debugging CBOR dumps"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4548"},"pull-4548")," - Enable ",(0,n.kt)("inlineCode",{parentName:"li"},"QuerySpec")," in cardano-ledger-api for both Conway versions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4561"},"pull-4561")," - Configure Imp tests with realistic SPO voting thresholds"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4579"},"pull-4579")," - Added overlooked no registered test for RegCert"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4576"},"pull-4576")," - Remove ",(0,n.kt)("inlineCode",{parentName:"li"},"minMajorPV")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"maxMajorPV")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"Constants"))),(0,n.kt)("h3",{id:"infrastructure-and-releasing"},"Infrastructure and releasing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4534"},"pull-4534")," - Use compression for archiving"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4551"},"pull-4551")," - Add GHA check for formal spec SRP validity"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4558"},"pull-4558")," - Stop including VCS directories in data passed to test jobs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4562"},"pull-4562")," - Fix incorrect version in Conway CHANGELOG"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4560"},"pull-4560")," - cardano-node 9.2 release test suite fix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4573"},"pull-4573")," - Fixup changelogs and versions")))}m.isMDXComponent=!0}}]);