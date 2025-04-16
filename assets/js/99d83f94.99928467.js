"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[44635],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,d=m["".concat(s,".").concat(c)]||m[c]||h[c]||n;return r?i.createElement(d,o(o({ref:t},p),{},{components:r})):i.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<n;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},21475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var i=r(87462),a=(r(67294),r(3905));const n={title:"Mithril Team Update",slug:"2024-07-17-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-07-17-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-07-17-mithril.md",source:"@site/blog/2024-07-17-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2024-07-17T00:00:00.000Z",formattedDate:"July 17, 2024",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.365,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2024-07-17-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/2024-07-17-ledger"},nextItem:{title:"Consensus Team Update",permalink:"/2024-07-10-consensus"}},s={authorsImageUrls:[void 0]},u=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],p={toc:u},m="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,a.kt)("p",null,"This week, the Mithril team released the new distribution ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/2428.0"},(0,a.kt)("inlineCode",{parentName:"a"},"2428.0")),", which includes support for Cardano node version ",(0,a.kt)("inlineCode",{parentName:"p"},"9.0.0"),", as well as bug fixes and optimizations. They also continued implementing the certification of Cardano transactions in Mithril networks by calibrating the signature parameters for mainnet, fixing a bug preventing the signature of the last block advertised as certified, optimizing a part of the artifact production that was blocking the certification, and starting removing the code reading transactions from the immutable files."),(0,a.kt)("p",null,"Finally, the team started working on the certification of the Cardano stake distribution and continued redacting a CIP for the diffusion of Mithril signatures through the Cardano network."),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Released the new distribution ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/releases/tag/2428.0"},(0,a.kt)("inlineCode",{parentName:"a"},"2428.0"))),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Release ",(0,a.kt)("inlineCode",{parentName:"strong"},"2428")," distribution")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1810"},"#1810")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Calibrate Cardano transaction signature parameters")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1814"},"#1814")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Non blocking artifact production in aggregator")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1792"},"#1792")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Cardano transaction importer does not import the last block advertised as certified")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1785"},"#1785")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"A recorded but non certified Cardano transaction creates an error in prover")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1819"},"#1819")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Signer ",(0,a.kt)("inlineCode",{parentName:"strong"},"make test")," command fails")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1816"},"#1816")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Document Prometheus metrics and Grafana Dahsboard for signer")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1834"},"#1834")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("strong",{parentName:"li"},"Explorer keeps previous Cardano transaction error")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1818"},"#1818")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Implement signable and artifacts builders for Cardano Stake Distribution")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1832"},"#1832")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"CIP for Mithril signature diffusion through Cardano network")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1775"},"#1775")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Cleanup Immutable File in Cardano transaction")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1825"},"#1825")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("strong",{parentName:"li"},"Upgrade ",(0,a.kt)("inlineCode",{parentName:"strong"},"testing-sanchonet")," for respin with Cardano ",(0,a.kt)("inlineCode",{parentName:"strong"},"9.0.0"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1822"},"#1822"))))}h.isMDXComponent=!0}}]);