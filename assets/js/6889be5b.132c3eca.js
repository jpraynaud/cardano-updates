"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[17191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=i,d=m["".concat(s,".").concat(c)]||m[c]||h[c]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},12199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"Mithril Team Update",slug:"2025-03-05-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2025-03-05-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-03-05-mithril.md",source:"@site/blog/2025-03-05-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2025-03-05T00:00:00.000Z",formattedDate:"March 5, 2025",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.235,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2025-03-05-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/2025-03-05-consensus"},nextItem:{title:"Node API & CLI Team Update",permalink:"/2025-02-28-node-cli-api"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},m="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,i.kt)("p",null,"This week, the Mithril team continued implementing incremental certification of the Cardano database, focusing on feature stabilization, production readiness, testing, and optimization. They also worked on implementing a prototype 'slave' mode of the aggregator to support the signer registration across multiple aggregators. Additionally, they kept working on supporting the upcoming Cardano node v.10.2."),(0,i.kt)("p",null,"Finally, the team continued investigating the source of failing builds in the Hydra CI and worked on setting up code ADRs in the repository."),(0,i.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Enhance artifact structure for Incremental Cardano DB")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2291"},"#2291")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Enhance computation of required disk space for Incremental Cardano DB in client CLI")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2292"},"#2292")),(0,i.kt)("li",{parentName:"ul"},"Completed the issue ",(0,i.kt)("strong",{parentName:"li"},"Add integration test for Incremental Cardano DB client")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2328"},"#2328")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Optimize artifact downloads when restoring an Incremental Cardano DB")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2327"},"#2327")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Document Incremental Cardano DB usage in the clients")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2329"},"#2329")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Use consistent naming in the client Cardano database APIs")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2248"},"#2248")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Implement a ",(0,i.kt)("inlineCode",{parentName:"strong"},"slave")," mode for the signer registration in the aggregator")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2334"},"#2334")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Add integration test for mode for the signer registration in the aggregator")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2335"},"#2335")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Create a ",(0,i.kt)("inlineCode",{parentName:"strong"},"Code ADR")," record in the repository")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2342"},"#2342")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Hydra CI fails with ",(0,i.kt)("inlineCode",{parentName:"strong"},"OpenSSL")," error on Linux x86_64 runners")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2295"},"#2295")),(0,i.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,i.kt)("strong",{parentName:"li"},"Upgrade to Cardano ",(0,i.kt)("inlineCode",{parentName:"strong"},"10.2"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/2333"},"#2333"))))}h.isMDXComponent=!0}}]);