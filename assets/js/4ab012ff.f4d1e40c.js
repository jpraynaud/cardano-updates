"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[7555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Consensus Team Update",slug:"2023-06-28-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,i={permalink:"/2023-06-28-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-06-28-consensus.md",source:"@site/blog/2023-06-28-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2023-06-28T00:00:00.000Z",formattedDate:"June 28, 2023",tags:[{label:"consensus",permalink:"/tags/consensus"}],readingTime:1.85,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2023-06-28-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2023-06-29-mithril"},nextItem:{title:"Performance & tracing update",permalink:"/2023-06-28-performance-and-tracing"}},l={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Genesis",id:"genesis",level:3},{value:"UTxO-HD",id:"utxo-hd",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"During the past two weeks the team working on the Genesis implementation continued to engage with the researchers, which resulted in various simplifications of the correctness argument for the historical Genesis window. They also decided on an approach for a syncing node to decide that it is (no longer) caught up. This functionality was requested by the networking team. "),(0,r.kt)("p",null,"The team working on the UTxO-HD implementation ran ad-hoc benchmarks that showed performance issues, which are being investigated. They also merged several improvements required for the first UTxO-HD release, and added a package for easing integration with other downstream components."),(0,r.kt)("p",null,"Regarding our support activities, we integrated the latest Ledger changes into Consensus in preparation for release 8.2 of node. "),(0,r.kt)("h3",{id:"genesis"},"Genesis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We continued to engage with the researchers on our probabilistic model for historical Genesis window, resulting in various simplifications that make the correctness argument more clear while not being excessively conservative.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-consensus/issues/101#issuecomment-1607767722"},"decided on an approach")," of how to implement functionality requested by the Networking team; namely, how a syncing node can safely conclude that it is (no longer) caught up. Certain parameters are still subject to discussion with the researchers, and we have still have to agree on a concrete API for this functionality with the Networking team."))),(0,r.kt)("h3",{id:"utxo-hd"},"UTxO-HD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We merged the last of the PRs that were part of UTxO-HD improvements for version ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/issues/149"},"0.1"),": expose UTxO-HD configuration options in the node, refactor ledger tables, and expose a method of computing the UTxO set size."),(0,r.kt)("li",{parentName:"ul"},"We ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/87"},"added"),' a new "legacy" cardano block in a new ',(0,r.kt)("inlineCode",{parentName:"li"},"ouroboros-consensus-cardano-legacy-block")," package that should ease the transition for some downstream packages to UTxO-HD, like ",(0,r.kt)("inlineCode",{parentName:"li"},"db-sync"),". This is really only useful for downstream packages that use the parts of consensus that don't involve the storage components, in which case we can largely ignore ledger tables. Ignoring ledger tables could also make functionality like block (re-)application more performant for the legacy Cardano block as compared to the actual (UTxO-HD compatible) Cardano block."),(0,r.kt)("li",{parentName:"ul"},"We performed ad-hoc benchmarks of the UTxO-HD implementation, observing a regression in sync speed in the LMDB implementation as well as a regression in memory usage on the in-memory implementation. We are investigating this.")))}m.isMDXComponent=!0}}]);