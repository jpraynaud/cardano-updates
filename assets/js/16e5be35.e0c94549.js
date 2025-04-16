"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[5510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Consensus Team Update",slug:"2025-01-22-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,i={permalink:"/2025-01-22-consensus",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-01-22-consensus.md",source:"@site/blog/2025-01-22-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2025-01-22T00:00:00.000Z",formattedDate:"January 22, 2025",tags:[{label:"consensus",permalink:"/tags/consensus"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2025-01-22-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2025-01-23-hydra"},nextItem:{title:"Mithril Team Update",permalink:"/2025-01-22-mithril"}},l={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"Our quarterly objectives are now drafted and can be accessed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-consensus/milestone/6"},"here"),"."),(0,a.kt)("p",null,"The team continued working on documentation improvements, enhancing the security of the Consensus layer, and being involved in the early stages of the Peras workstream."),(0,a.kt)("p",null,"We are updating the UTXO-HD branch to make use of the forward-deserializability of transaction outputs (",(0,a.kt)("inlineCode",{parentName:"p"},"TxOut"),"s) (see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1360"},"#1360"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1361"},"#1361"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1362"},"#1362"),").\nWe performed a local chain sync with a the latest version of an UTXO-HD enabled node, using the in-memory backend."))}m.isMDXComponent=!0}}]);