"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[36402],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"Ledger Team Update",slug:"2025-02-12-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/2025-02-12-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-02-12-ledger.md",source:"@site/blog/2025-02-12-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2025-02-12T00:00:00.000Z",formattedDate:"February 12, 2025",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:.99,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2025-02-12-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/2025-02-14-sre"},nextItem:{title:"Mithril Team Update",permalink:"/2025-02-12-mithril"}},u={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Features",id:"features",level:3},{value:"Testing",id:"testing",level:3},{value:"Infrastructure and releasing",id:"infrastructure-and-releasing",level:3}],s={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"There were a few important performance improvements that had to do with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Avoiding redundant computation when constructing context for plutus scripts"),(0,n.kt)("li",{parentName:"ul"},"Reduction of memory overhead of some of the governance features"),(0,n.kt)("li",{parentName:"ul"},"Removal of a space leak that retained transactions in memory for longer than it was necessary")),(0,n.kt)("p",null,"Other than improving performance we also focused on improving ledger interface and code\norganization, as well as some minor improvements to the test suite."),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4854"},"pull-4854")," - ",(0,n.kt)("inlineCode",{parentName:"li"},"TxInfo")," memoization"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4826"},"pull-4826")," - Reduce memory usage with sharing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4860"},"pull-4860")," - Add CBOR instances for DefaultVote"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4867"},"pull-4867")," - Add ",(0,n.kt)("inlineCode",{parentName:"li"},"CanGetUTxO")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"CanSetUTxO")," type classes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4868"},"pull-4868")," - Organize ledger state"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4872"},"pull-4872")," - Make ",(0,n.kt)("inlineCode",{parentName:"li"},"utxosDeposited")," field strict.")),(0,n.kt)("h3",{id:"testing"},"Testing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4862"},"pull-4862")," - Bumped the spec to include fixes to ",(0,n.kt)("inlineCode",{parentName:"li"},"SecurityGroup")," parameters"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4877"},"pull-4877")," - Add ",(0,n.kt)("inlineCode",{parentName:"li"},"genIssuerKeys")," that can be used in consensus"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4878"},"pull-4878")," - Upgrade ",(0,n.kt)("inlineCode",{parentName:"li"},"cborg")," dependency"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4879"},"pull-4879")," - Improve ",(0,n.kt)("inlineCode",{parentName:"li"},"mkAddr")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"mkCred")," interface")),(0,n.kt)("h3",{id:"infrastructure-and-releasing"},"Infrastructure and releasing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4883"},"pull-4883")," - Remove broken symlink")))}c.isMDXComponent=!0}}]);