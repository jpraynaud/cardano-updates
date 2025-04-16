"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[91252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=l,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||n;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var a=r(87462),l=(r(67294),r(3905));const n={title:"Ledger Team Update",slug:"2024-10-23-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/2024-10-23-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-10-23-ledger.md",source:"@site/blog/2024-10-23-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2024-10-23T00:00:00.000Z",formattedDate:"October 23, 2024",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:1.445,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2024-10-23-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2024-10-29-node-cli-api"},nextItem:{title:"Mithril Team Update",permalink:"/2024-10-23-mithril"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Features",id:"features",level:3},{value:"Testing",id:"testing",level:3},{value:"Infrastructure and releasing",id:"infrastructure-and-releasing",level:3}],s={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,l.kt)("p",null,"Final changes for the next Hard Fork to protocol version 10.0:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ensure that it is still possible to unregister the reward account and withdraw the funds in the same transaction"),(0,l.kt)("li",{parentName:"ul"},"Fix a bug in recently introduced feature, which ensures DRep existence for all stake credential delegations.")),(0,l.kt)("p",null,"More Conway testing and continued progress on conformance tests."),(0,l.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,l.kt)("h3",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4684"},"pull-4684")," - Revert ",(0,l.kt)("inlineCode",{parentName:"li"},"Mismatch"),"-related changes of ",(0,l.kt)("inlineCode",{parentName:"li"},"ShelleyPoolPredFailure")," serialization"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4661"},"pull-4661")," - Add GovRemovedVotes event"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4697"},"pull-4697")," - Minor fixups from internal audit"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4709"},"pull-4709")," - Fix drep delegation invariant preservation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4715"},"pull-4715")," - Adjust semantics of ",(0,l.kt)("inlineCode",{parentName:"li"},"ConwayWdrlNotDelegatedToDRep"))),(0,l.kt)("h3",{id:"testing"},"Testing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4683"},"pull-4683")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"constrained-generators"),": Improve some error messages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4689"},"pull-4689")," - Set ",(0,l.kt)("inlineCode",{parentName:"li"},"maxTxSize")," relative to generated tx in Utxo conformance tests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4680"},"pull-4680")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"constrained-generators"),": More tests for append and singleton"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4665"},"pull-4665")," - Remove the proposals workaround from UTXO conformance, add LEDGER conformance"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4705"},"pull-4705")," - Implement some of the tests in Alonzo.Imp.UtxowSpec.Valid"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4707"},"pull-4707")," - Add imp tests for drep delegation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4677"},"pull-4677")," - Added example Tx specification")),(0,l.kt)("h3",{id:"infrastructure-and-releasing"},"Infrastructure and releasing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4681"},"pull-4681")," - Update CHANGELOG files following release for 10.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4686"},"pull-4686")," - Bump up version in cardano-ledger-shelley changelog"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4688"},"pull-4688")," - Add ",(0,l.kt)("inlineCode",{parentName:"li"},"nix develop")," to main ",(0,l.kt)("inlineCode",{parentName:"li"},"README.md")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4701"},"pull-4701")," - Ensure repo is buildable on Windows"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4656"},"pull-4656")," - Align with Governance audit"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4706"},"pull-4706")," - Add changelog section for cardano-node-10.0 and 9.2.1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4710"},"pull-4710")," - Cardano ledger conway 1.17.1.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4716"},"pull-4716")," - Release/cardano ledger conway 1.17.2.0")))}d.isMDXComponent=!0}}]);