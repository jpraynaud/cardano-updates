"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[16348],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),h=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=h(r),m=n,d=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var h=2;h<o;h++)i[h]=r[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37534:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=r(87462),n=(r(67294),r(3905));const o={title:"Hydra Team Update",slug:"2023-04-07-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2023-04-07-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-04-07-hydra.md",source:"@site/blog/2023-04-07-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-04-07T00:00:00.000Z",formattedDate:"April 7, 2023",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.875,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-04-07-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-04-14-hydra"},nextItem:{title:"Mithril Team Update",permalink:"/2023-04-06-mithril"}},s={authorsImageUrls:[void 0]},h=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],u={toc:h},p="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team published the monthly report for March, created\nseparate links for different versions of documentation, and clarified potential\nsolutions for the Rollbacks bug. The team also discussed Query API requests for\nthe Hydra Voting project and met with community members to answer questions\nabout Hydra. Moving forward, the team plans to integrate the specification into\nthe repository, implement a short-term fix for the Rollbacks issue, and draft a\nQuery API ADR."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Published monthly reports on ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/monthly/2023-03"},"website")),(0,n.kt)("li",{parentName:"ul"},"Separate last released and latest versions of docs (e.g. normal ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/core-concepts/behavior/#replay-of-past-server-outputs"},"released")," vs. ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/unstable/core-concepts/behavior/#replay-of-past-server-outputs"},"/unstable"),")"),(0,n.kt)("li",{parentName:"ul"},"Discussed Query API concerns from Hydra Voting project (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/discussions/797"},"link"),")"),(0,n.kt)("li",{parentName:"ul"},"Clarified rollbacks bug and defined possible solutions (short and long term) ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/784"},"#784")),(0,n.kt)("li",{parentName:"ul"},"Met with community members to answer questions about Hydra")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Finally get the docs integrated into the repository ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/693"},"#693")),(0,n.kt)("li",{parentName:"ul"},"Dirt road fix for rollbacks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/784"},"#784")),(0,n.kt)("li",{parentName:"ul"},"Disclaimer text and detail known issues about mainnet compatibility\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/713"},"#713"))))}c.isMDXComponent=!0}}]);