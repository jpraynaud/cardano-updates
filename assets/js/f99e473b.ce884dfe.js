"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[88904],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(r),c=n,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||a;return r?i.createElement(d,o(o({ref:t},u),{},{components:r})):i.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},29417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={title:"Mithril Team Update",slug:"2024-04-17-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-04-17-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-04-17-mithril.md",source:"@site/blog/2024-04-17-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2024-04-17T00:00:00.000Z",formattedDate:"April 17, 2024",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.625,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2024-04-17-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"DB Sync Team Update",permalink:"/2024-04-17-db-sync"},nextItem:{title:"Node API & CLI Team Update",permalink:"/2024-04-15-node-cli-api"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"This week, the Mithril team continued implementing the certification of Cardano transactions in Mithril networks. They worked on scaling the signature and proof generation for ",(0,n.kt)("inlineCode",{parentName:"p"},"mainnet")," with the compression of the transaction Merkle tree by using sub-Merkle trees of transactions by block ranges. They also made progress in designing low latency certification, investigated a memory leak in the signature/proof process, and worked on retrieving the tip of the chain with the Pallas chain observer. The team almost completed the prototype for decentralizing signer registration with the relay and a peer-to-peer (P2P) network. Additionally, they completed the refactoring of the database providers of the aggregator and re-span the ",(0,n.kt)("inlineCode",{parentName:"p"},"testing-sanchonet")," network following the release of Cardano node ",(0,n.kt)("inlineCode",{parentName:"p"},"8.10.0-pre"),"."),(0,n.kt)("p",null,"Finally, the team made some optimizations on the compilation of their pre-built binaries to fix panics occurring on CPUs without ADX instructions, and created a network configuration file on the repository to facilitate automatic compatibility checks."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Create file with Cardano minimum versions in repository")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1615"},"#1615")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Deploy ",(0,n.kt)("inlineCode",{parentName:"strong"},"testing-mainnet")," network")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1617"},"#1617")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Refactor ",(0,n.kt)("inlineCode",{parentName:"strong"},"database")," module in aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1583"},"#1583")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Client deprecation notice should be written in JSON when ",(0,n.kt)("inlineCode",{parentName:"strong"},"--json")," option is used")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1616"},"#1616")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Activate ",(0,n.kt)("inlineCode",{parentName:"strong"},"portable")," feature in ",(0,n.kt)("inlineCode",{parentName:"strong"},"mithril-stm")," by default")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1613"},"#1613")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("strong",{parentName:"li"},"Prepare ",(0,n.kt)("inlineCode",{parentName:"strong"},"testing-sanchonet")," for respin with Cardano ",(0,n.kt)("inlineCode",{parentName:"strong"},"8.10"))," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1618"},"#1618")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Store Block Range Merkle roots in signer and aggregator databases")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1633"},"#1633")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Memory leak in Cardano transactions signature/proof")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1629"},"#1629")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Mithril relay broadcasts signer registrations with P2P PubSub")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1587"},"#1587")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"ChainObserver")," supports retrieving the Chain Point of the tip of the chain")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1589"},"#1589")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Add section for manual setup of squid in SPO guide")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1610"},"#1610")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("strong",{parentName:"li"},"Mithril Signer Local Error Policy : Error 182 - MuxError")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1632"},"#1632"))))}m.isMDXComponent=!0}}]);