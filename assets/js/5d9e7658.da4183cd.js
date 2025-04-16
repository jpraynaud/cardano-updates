"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[40650],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(r),c=o,k=h["".concat(s,".").concat(c)]||h[c]||m[c]||a;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},80123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Network Team Update",slug:"2024-02-05-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-02-05-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-02-05-network.md",source:"@site/blog/2024-02-05-network.md",title:"Network Team Update",description:"High-level overview of sprint 54",date:"2024-02-05T00:00:00.000Z",formattedDate:"February 5, 2024",tags:[{label:"network",permalink:"/tags/network"}],readingTime:1.375,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2024-02-05-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-02-07-mithril"},nextItem:{title:"SRE Team Update",permalink:"/2024-02-02-sre"}},s={authorsImageUrls:[void 0]},p=[{value:"High-level overview of sprint 54",id:"high-level-overview-of-sprint-54",level:2},{value:"Open Source Contributions",id:"open-source-contributions",level:2},{value:"IOSim",id:"iosim",level:3},{value:"NoThunks",id:"nothunks",level:3},{value:"Low-level summary",id:"low-level-summary",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"high-level-overview-of-sprint-54"},"High-level overview of ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/orgs/IntersectMBO/projects/5/views/1?visibleFields=%5B%22Title%22%2C%22Labels%22%2C%22Assignees%22%2C%22Status%22%2C%22Linked+pull+requests%22%2C69151865%2C%22Repository%22%5D&filterQuery=sprint%3A%22Sprint+54%22"},"sprint 54")),(0,o.kt)("p",null,"In this sprint, we merged the bootstrap peers (aka weak genesis) changes to\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"ouroboros-network")," repository (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4615"},"ouroboros-network#4615"),").  We continued\nworking on integration & testing it using an early development version of\n",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-node/pull/5485"},"cardano-node#5485"),")."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/AndrewWestberg"},"Andrew Westberg")," (",(0,o.kt)("a",{parentName:"p",href:"https://dripdropz.io/"},"DripDropz"),") noticed and fixed a mistake in the cddl spec which resulted in\nmisleading documentation; ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4790"},"ouroboros-network#4790"),". The Handshake protocol flag\nshould be called ",(0,o.kt)("inlineCode",{parentName:"p"},"initiatorOnlyDiffusionMode"),".  Library authors providing\nconnectivity with other nodes via the ",(0,o.kt)("inlineCode",{parentName:"p"},"node-to-node")," protocol are advised to review\ntheir implementation."),(0,o.kt)("p",null,"We continued working on the ",(0,o.kt)("inlineCode",{parentName:"p"},"tx-submission")," decision logic;\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/3311"},"ouroboros-network#3311"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/karknu"},"Karl Knutsson")," (",(0,o.kt)("a",{parentName:"p",href:"https://cardanofoundation.org"},"CF"),") implemented:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a debugging feature which dumps outbound governor state on the ",(0,o.kt)("inlineCode",{parentName:"li"},"SIGUSR1")," event\n(supported on ",(0,o.kt)("em",{parentName:"li"},"POSIX")," compatible OSes); ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4730"},"ouroboros-network#4730"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4789"},"ouroboros-network#4789"),"."),(0,o.kt)("li",{parentName:"ul"},"limited the rate at which one can discover nodes through peer sharing;\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4778"},"ouroboros-network#4778"),".")),(0,o.kt)("h2",{id:"open-source-contributions"},"Open Source Contributions"),(0,o.kt)("h3",{id:"iosim"},"IOSim"),(0,o.kt)("p",null,"We released a new version of ",(0,o.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/io-sim"},"io-sim to Hackage"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ch1bo"},"Sebastian Nagel")," (IOG) fixed a bug in the ",(0,o.kt)("inlineCode",{parentName:"li"},"flushTQueue")," implementation; ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim/pull/135"},"io-sim#135")),(0,o.kt)("li",{parentName:"ul"},"We fixed the underflow error in ",(0,o.kt)("inlineCode",{parentName:"li"},"threadDelay")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"si-timers")," library\n(",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim/pull/129"},"io-sim#129"),") reported by ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nfrisby"},"Nick Frisby")," (Tweag)")),(0,o.kt)("h3",{id:"nothunks"},"NoThunks"),(0,o.kt)("p",null,"We released a new version of ",(0,o.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/nothunks"},"nothunks to Hackage"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wherefrom")," support; ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/nothunks/pull/46"},"nothunks#46")),(0,o.kt)("li",{parentName:"ul"},"added ",(0,o.kt)("inlineCode",{parentName:"li"},"Solo")," instance; ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/nothunks/pull/45"},"nothunks#45")),(0,o.kt)("li",{parentName:"ul"},"added instances for ",(0,o.kt)("inlineCode",{parentName:"li"},"Monoid")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Semigroup")," newtype wrappers; ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/nothunks/pull/43"},"nothunks#43"))),(0,o.kt)("h2",{id:"low-level-summary"},"Low-level summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We started using the ",(0,o.kt)("inlineCode",{parentName:"li"},"ImportQualifiedPost")," extension, hence a large\n(autogenerated) syntax change; ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4715"},"ouroboros-network#4715"),"."),(0,o.kt)("li",{parentName:"ul"},"Code cleanup; ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4792"},"ouroboros-network#4792"))))}m.isMDXComponent=!0}}]);