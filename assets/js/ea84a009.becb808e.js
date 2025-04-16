"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[92501],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,h=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Crypto Team Update",slug:"2023-03-03-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2023-03-03-crypto",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-03-03-crypto.md",source:"@site/blog/2023-03-03-crypto.md",title:"Crypto Team Update",description:"High level summary",date:"2023-03-03T00:00:00.000Z",formattedDate:"March 3, 2023",tags:[{label:"crypto",permalink:"/tags/crypto"}],readingTime:1.155,hasTruncateMarker:!1,authors:[{name:"I\xf1igo Querejeta Azurmendi",title:"Cardano Lead Cryptography Engineer",url:"https://github.com/iquerejeta",imageURL:"https://github.com/iquerejeta.png",key:"iquerejeta"}],frontMatter:{title:"Crypto Team Update",slug:"2023-03-03-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},prevItem:{title:"Performance & tracing update",permalink:"/2023-03-08-performance-and-tracing"},nextItem:{title:"Goedel Team Update",permalink:"/2023-03-03-goedel"}},u={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Mithril",id:"mithril",level:3},{value:"cardano-base",id:"cardano-base",level:3},{value:"KES agent",id:"kes-agent",level:3},{value:"Sidechains",id:"sidechains",level:3}],s={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The open fronts that the crypto team is working on are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mithril: Updated KES crate to force user to allocate buffer of bytes for the key. Include proper testing for batch mtree opening and STM batch verify. Progressed with RFP for audit."),(0,n.kt)("li",{parentName:"ul"},"cardano-base: BLS branch is now ready for review. We are workign forward its merge. "),(0,n.kt)("li",{parentName:"ul"},"KES agent: time off of part of the team, but in general continuing with the adaptation of the KES agent with consensus codebase."),(0,n.kt)("li",{parentName:"ul"},"Sidechains: We are exploring and starting discussion on how sidechains could leverage BLS12-381 bindings for SNARKs")),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"mithril"},"Mithril"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bumped to version ",(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/kes-summed-ed25519/0.2.0"},"0.2.0")," the implementation of KES. Redesigned the representation of the secret key to allow user to allocate a buffer using ",(0,n.kt)("inlineCode",{parentName:"li"},"mlock"),"."),(0,n.kt)("li",{parentName:"ul"},"Opened ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/pull/783"},"PR#783")," to update dependency"),(0,n.kt)("li",{parentName:"ul"},"Improved testing for batch opening of mtree, ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/pull/773"},"PR#773")),(0,n.kt)("li",{parentName:"ul"},"Improved testing for batch verification of STM sigs ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/pull/774"},"PR#774")),(0,n.kt)("li",{parentName:"ul"},"RFP for crypto audit almost ready.")),(0,n.kt)("h3",{id:"cardano-base"},"cardano-base"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"BLS12-381 branch finally ready for review ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/266"},"PR#266"))),(0,n.kt)("h3",{id:"kes-agent"},"KES agent"),(0,n.kt)("p",null,"Team off for one week. Other progress:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learning about raw direct-bearer abstraction. An interface for sockets in consensus."),(0,n.kt)("li",{parentName:"ul"},"use that for direct ser/deser"),(0,n.kt)("li",{parentName:"ul"},"written those syntaxes for ouroboros (coming PR)"),(0,n.kt)("li",{parentName:"ul"},"the kes agent will depend on that. \t")),(0,n.kt)("h3",{id:"sidechains"},"Sidechains"),(0,n.kt)("p",null,"Progress with familiarisation of Halo2 library to write circuits."))}m.isMDXComponent=!0}}]);