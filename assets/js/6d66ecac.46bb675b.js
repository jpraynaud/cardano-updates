"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[14671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(r),p=n,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"Hydra Team Update",slug:"2024-01-26-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-01-26-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-01-26-hydra.md",source:"@site/blog/2024-01-26-hydra.md",title:"Hydra Team Update",description:"High-level Summary",date:"2024-01-26T00:00:00.000Z",formattedDate:"January 26, 2024",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.75,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2024-01-26-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"DB Sync Team Update",permalink:"/2024-01-30-db-sync"},nextItem:{title:"Consensus Team Update",permalink:"/2024-01-24-consensus"}},c={authorsImageUrls:[void 0]},s=[{value:"High-level Summary",id:"high-level-summary",level:3},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:3},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:3}],u={toc:s},h="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"high-level-summary"},"High-level Summary"),(0,n.kt)("p",null,"This week, the Hydra team conducted yearly roadmapping sessions, introduced a\nbreaking API change to eliminate JSON encoding of transactions (refer to issue\n#1213 for details), completed off-chain logic for incremental decommits through,\nand implemented a hydra-explorer backend."),(0,n.kt)("h3",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Conducted yearly roadmapping sessions"),(0,n.kt)("li",{parentName:"ul"},"Merged a breaking API change to drop JSON encoding of transactions ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1213"},"#1213")," - contact us if you were relying on this."),(0,n.kt)("li",{parentName:"ul"},"Completed off-chain logic for incremental decommits ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1223"},"#1223")),(0,n.kt)("li",{parentName:"ul"},"Implemented a hydra-explorer backend ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1235"},"#1235"))),(0,n.kt)("h3",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Publish the monthly report"),(0,n.kt)("li",{parentName:"ul"},"Prepare PRs for hydra clients to switch to CBOR due to the changed API (see above)"),(0,n.kt)("li",{parentName:"ul"},"Enhance the model testing framework to cover close/contest (needed to fix a bug and incremental decommit development)"),(0,n.kt)("li",{parentName:"ul"},"Fix new bugs (all minors) and finish things before starting new")))}d.isMDXComponent=!0}}]);