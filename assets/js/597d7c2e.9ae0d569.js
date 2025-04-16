"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[90427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},23570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"Ledger Team Update",slug:"2025-04-09-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/2025-04-09-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-04-09-ledger.md",source:"@site/blog/2025-04-09-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2025-04-09T00:00:00.000Z",formattedDate:"April 9, 2025",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:1.88,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2025-04-09-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/2025-04-11-sre"},nextItem:{title:"Mithril Team Update",permalink:"/2025-04-09-mithril"}},s={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Features",id:"features",level:3},{value:"Testing",id:"testing",level:3},{value:"Infrastructure and releasing",id:"infrastructure-and-releasing",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"Major technical debt items have been taken care of during this period:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We've finalized the adjustment of mechanism of how we retain the original bytes of a transaction during deserialization, which will have positive impact on performance as well as correctness of our transaction deserializers. This was an especially necessary task to handle for the upcoming work on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-foundation/CIPs/pull/862"},"Nested Transactions")),(0,n.kt)("li",{parentName:"ul"},"We finished adjusting the representation of ",(0,n.kt)("inlineCode",{parentName:"li"},"CertState"),", which is the part of the ledger state responsible for managing the state of entities that are manipulated with transaction certificates. This representation now more accurately reflects the difference between pre vs post-Conway eras."),(0,n.kt)("li",{parentName:"ul"},"We did a minor performance improvement of transaction size calculation"),(0,n.kt)("li",{parentName:"ul"},"Improved the ",(0,n.kt)("inlineCode",{parentName:"li"},"MemoBytes")," interface to disallow unsafe construction and improved the consistency of transaction related modules."),(0,n.kt)("li",{parentName:"ul"},"Did ",(0,n.kt)("inlineCode",{parentName:"li"},"AccountState")," type rename as preparation for potential promotion of reward accounts to full blown accounts, which might be needed for Leios later down the road.")),(0,n.kt)("p",null,"We've also accomplished a very nice simplification to our constraint based generation framework. Fixed our example Plutus scripts that we use for testing. Got rid of a couple of redundant Byron test packages, which were causing rebuilds of the same code twice and caused unnecessary maintenance overhead. Besides that we also did some other minor quality of life improvements to the Ledger codebase."),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4914"},"pull-4914")," - Add ",(0,n.kt)("inlineCode",{parentName:"li"},"ConwayCertState")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4959"},"pull-4959")," - Improve performance of sizeTxF"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4971"},"pull-4971")," - Rename ",(0,n.kt)("inlineCode",{parentName:"li"},"AccountState")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"ChainAccountState")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4973"},"pull-4973")," - Make ",(0,n.kt)("inlineCode",{parentName:"li"},"MemoBytes")," interface safe"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4968"},"pull-4968")," - Move annotator to testlib")),(0,n.kt)("h3",{id:"testing"},"Testing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4954"},"pull-4954")," - Add ",(0,n.kt)("inlineCode",{parentName:"li"},"expectTxSuccess")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"ShelleyEraImp")," and use it in ",(0,n.kt)("inlineCode",{parentName:"li"},"trySubmitTx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4958"},"pull-4958")," - Update spec","'","s code location"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4921"},"pull-4921")," - Refactor the constrained generators to get rid of the Fn stuff"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4972"},"pull-4972")," - Fix and bump cardano-ledger-executable-spec"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4923"},"pull-4923")," - Update V3 scripts in plutus-preprocessor to use the new ",(0,n.kt)("inlineCode",{parentName:"li"},"Data")," api")),(0,n.kt)("h3",{id:"infrastructure-and-releasing"},"Infrastructure and releasing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4956"},"pull-4956")," - Convert byron test packages to sublibraries"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4957"},"pull-4957")," - Add script for bumping CHANGELOGS post-release"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4965"},"pull-4965")," - Expose Byron CDDLs in ",(0,n.kt)("inlineCode",{parentName:"li"},"Test.Cardano.Chain.Binary.Cddl"))))}d.isMDXComponent=!0}}]);