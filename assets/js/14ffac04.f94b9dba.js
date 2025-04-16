"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[59494],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(a),s=l,h=d["".concat(p,".").concat(s)]||d[s]||c[s]||n;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},16801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var r=a(87462),l=(a(67294),a(3905));const n={title:"Ledger Team Update",slug:"2023-09-01-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},o=void 0,i={permalink:"/2023-09-01-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-09-01-ledger.md",source:"@site/blog/2023-09-01-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2023-09-01T00:00:00.000Z",formattedDate:"September 1, 2023",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:1.355,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2023-09-01-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-09-01-hydra"},nextItem:{title:"Network Team Update",permalink:"/2023-09-01-network"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Conway era",id:"conway-era",level:3},{value:"Improvements and releasing",id:"improvements-and-releasing",level:3},{value:"Testing",id:"testing",level:3}],m={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,l.kt)("p",null,"Broadly speaking the Ledger team focused on a few main areas of Conway era:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Creation of voting state snapshots in order to correctly delay ratification for one epoch"),(0,l.kt)("li",{parentName:"ul"},"Validation of the Governance Actions sequencing and ordering"),(0,l.kt)("li",{parentName:"ul"},"Proper expiry of DReps and Proposal Procedures"),(0,l.kt)("li",{parentName:"ul"},"Expanding Conway Genesis functionality"),(0,l.kt)("li",{parentName:"ul"},"Utilization of some of the new Protocol Parameters in ledger validation rules")),(0,l.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,l.kt)("h3",{id:"conway-era"},"Conway era"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3659"},"pull-3659")," - Validate Network for ProposalProcedure and TreasuryWithdrawal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3637"},"pull-3637")," - Avoid using sequence of tuples, by adding GovActionId to GovActionState"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3651"},"pull-3651")," - Inactive DReps"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3664"},"pull-3664")," - Track proposal expiry"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3668"},"pull-3668")," - Add min committee size predicate to NewCommittee"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3669"},"pull-3669")," - Add Proposal deposit check against PParam"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3676"},"pull-3676")," - Fix inactive PoolStake not counting as Drep Stake"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3635"},"pull-3635")," - Make snapshots of GovActionsState"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3670"},"pull-3670")," - Validate previously enacted govAction"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3694"},"pull-3694")," - Improve error reporting on the positive coin decoder"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3674"},"pull-3674")," - Added RATIFY thresholds"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3684"},"pull-3684")," - Add proposal delaying, remove predicate failure from ENACT"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3688"},"pull-3688")," - DRep Refunds and update evalTransactionBalance")),(0,l.kt)("h3",{id:"improvements-and-releasing"},"Improvements and releasing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3677"},"pull-3677")," - Minor patch that fixes the DRep distribution computation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3686"},"pull-3686")," - Post patch release fixup"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3695"},"pull-3695")," - Changelog for cardano-node-8.3 release"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3683"},"pull-3683")," - Add two new bench mark programs")),(0,l.kt)("h3",{id:"testing"},"Testing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3662"},"pull-3662")," - Equality on raw types")))}c.isMDXComponent=!0}}]);