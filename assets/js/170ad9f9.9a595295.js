"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[59256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Consensus Team Update",slug:"2024-03-20-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,i={permalink:"/2024-03-20-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-03-20-consensus.md",source:"@site/blog/2024-03-20-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2024-03-20T00:00:00.000Z",formattedDate:"March 20, 2024",tags:[{label:"consensus",permalink:"/tags/consensus"}],readingTime:.485,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2024-03-20-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2024-03-22-hydra"},nextItem:{title:"Mithril Team Update",permalink:"/2024-03-20-mithril"}},l={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/fs-sim/pull/46"},"Merged")," the alternative ",(0,a.kt)("inlineCode",{parentName:"li"},"fs-api")," interface for I/O using user-supplied buffers. This feature is important because it defines lower-level primitives for the filesystem API, which opens op avenues for more use cases and more efficient I/O operations (for instance when implementing ",(0,a.kt)("inlineCode",{parentName:"li"},"lsm-tree"),", which is part of our efforts to move the ledger state to disk).  This feature has not been released yet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/955"},"Implemented")," new diffusion pipelining criterion ."),(0,a.kt)("li",{parentName:"ul"},"Released Consensus packages containing backports for Node ",(0,a.kt)("inlineCode",{parentName:"li"},"8.9.1"),"."),(0,a.kt)("li",{parentName:"ul"},"Focused on fixing the tests for ",(0,a.kt)("inlineCode",{parentName:"li"},"ouroboros-consensus")," in the UTXO-HD branch. Work is ongoing.")))}m.isMDXComponent=!0}}]);