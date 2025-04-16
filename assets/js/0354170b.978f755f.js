"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[18756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Consensus Team Update",slug:"2025-02-19-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,i={permalink:"/2025-02-19-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-02-19-consensus.md",source:"@site/blog/2025-02-19-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2025-02-19T00:00:00.000Z",formattedDate:"February 19, 2025",tags:[{label:"consensus",permalink:"/tags/consensus"}],readingTime:.66,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2025-02-19-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Performance & Tracing Update",permalink:"/2025-02-21-performance-and-tracing"},nextItem:{title:"Hydra Team Update",permalink:"/2025-02-19-hydra"}},c={authorsImageUrls:[void 0]},l=[{value:"High level summary",id:"high-level-summary",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added a document that discuses ticking and how its used within the Consensus layer (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/138"},"#1385"),"). The rendered version of this document can be accessed in our ",(0,a.kt)("a",{parentName:"li",href:"https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/Ticking"},"documentation page"),"."),(0,a.kt)("li",{parentName:"ul"},"The benchmarks for the UTXO-HD version of Node with the in-memory backend confirmed that its resource usage is on par-with the baseline version of the Node. There is a slight decrease in CPU usage (-9%), and a slight increase in memory consumption (+3%)."),(0,a.kt)("li",{parentName:"ul"},"Fixed the mempool snapshotting regression in the UTXO-HD branch (from +185% to -21%) (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1382"},"#1382"),")."),(0,a.kt)("li",{parentName:"ul"},"Added a Consensus section to the Cardano Blueprints (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/cardano-blueprint/pull/7"},"#7"),")."),(0,a.kt)("li",{parentName:"ul"},"Held the technical-working group meeting. The recording can be accessed using ",(0,a.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1z1of19KJJD92Gv7Xt9ybC53vC_OqskcM/view"},"this link"),". In particular, the importance of the KES agent and its roadmap were discussed during this meeting.")))}m.isMDXComponent=!0}}]);