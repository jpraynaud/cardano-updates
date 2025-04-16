"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[85911],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2024-09-03-hydra",authors:["noonio"],tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-09-03-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-09-03-hydra.md",source:"@site/blog/2024-09-03-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2024-09-03T00:00:00.000Z",formattedDate:"September 3, 2024",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:1.13,hasTruncateMarker:!1,authors:[{name:"Noon van der Silk",title:"Software Engineering Lead",url:"https://github.com/noonio",imageURL:"https://github.com/noonio.png",key:"noonio"}],frontMatter:{title:"Hydra Team Update",slug:"2024-09-03-hydra",authors:["noonio"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-09-04-mithril"},nextItem:{title:"Node API & CLI Team Update",permalink:"/2024-09-03-node-cli-api"}},s={authorsImageUrls:[void 0]},c=[{value:"High-level summary",id:"high-level-summary",level:3},{value:"What did the team achieve?",id:"what-did-the-team-achieve",level:3},{value:"What&#39;s next?",id:"whats-next",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"high-level-summary"},"High-level summary"),(0,r.kt)("p",null,'We have put together a nice base of network-resiliance tests to build from,\nand already started exploring potential improvements to our networking.\nWe\'ve made good progress on incremental commits, by way of deposits, and\nsettled on an approach to tackle a few of the known problems related to\n"stuck funds", and finally we completed some work related to usability of\nnew functionality and documentation in our changelog. Up next we will\nswitch the ledger to Conway and prepare a release, and we will continue\nworking on incremental commits.'),(0,r.kt)("h3",{id:"what-did-the-team-achieve"},"What did the team achieve?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implemented initial suite of network-resiliance tests ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1532"},"#1532")),(0,r.kt)("li",{parentName:"ul"},"We explored persistence as an improvement to our networking layer ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1593"},"#1593")),(0,r.kt)("li",{parentName:"ul"},"Incremental commits (coming in a 0.19 release) have pivoted to a deposit-based scheme based on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/199"},"open discussions")," (thanks ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/GeorgeFlerovsky"},"@GeorgeFlerovsky!"),")"),(0,r.kt)("li",{parentName:"ul"},"Settled on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1468"},"Partial Fanout")," as a good solution to ",(0,r.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/docs/known-issues#head-protocol-limits"},"a few known problems")),(0,r.kt)("li",{parentName:"ul"},"Split out some functionality into a new library, ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra-tx"),", to eventually support user workflows around deposit/recover transactions ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1587"},"#1587")),(0,r.kt)("li",{parentName:"ul"},"Golden tests to help track breaking data changes in the changelog ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1554"},"#1554"))),(0,r.kt)("h3",{id:"whats-next"},"What's next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Switch ledger to Conway ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1178"},"#1178")),(0,r.kt)("li",{parentName:"ul"},"Update our networking page with the findings from our resiliance work"),(0,r.kt)("li",{parentName:"ul"},"Fix search on the docs ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1556"},"#1556")),(0,r.kt)("li",{parentName:"ul"},"Release 0.19.0 with L2 Ledger in Conway"),(0,r.kt)("li",{parentName:"ul"},"Continued work on incremental commit ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/199"},"#199"))))}m.isMDXComponent=!0}}]);