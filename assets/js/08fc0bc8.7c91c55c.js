"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[9413],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,h=s["".concat(c,".").concat(u)]||s[u]||m[u]||l;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},80390:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Node API & CLI Team Update",slug:"2024-10-16-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},o="Node-Api-Cli Update",i={permalink:"/2024-10-16-node-cli-api",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-10-16-node-cli-api.md",source:"@site/blog/2024-10-16-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2024-10-16T00:00:00.000Z",formattedDate:"October 16, 2024",tags:[{label:"cli-api",permalink:"/tags/cli-api"}],readingTime:1.335,hasTruncateMarker:!1,authors:[{name:"Jordan Millar",title:"Node Team Lead",url:"https://github.com/Jimbo4350",imageURL:"https://github.com/Jimbo4350.png",key:"Jimbo4350"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2024-10-16-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-10-16-mithril"},nextItem:{title:"Network Team Update",permalink:"/2024-10-11-network"}},c={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3}],d={toc:p},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2024-10-02t000000z---2024-10-16t000000z"},"2024-10-02T00:00:00Z - 2024-10-16T00:00:00Z"),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"More anchor data hash checks were added to cardano-cli commands."),(0,r.kt)("li",{parentName:"ul"},"Support to create certificates that can register and delegate stake."),(0,r.kt)("li",{parentName:"ul"},"Moved various era agnostic commands to the top level of cardano-cli. "),(0,r.kt)("li",{parentName:"ul"},"Added Cardano.Api.Tx.Compatible to cardano-api which allows the creation of simple unbalanced transactions that can submit protocol updates in any era.")),(0,r.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/916"},"Add hash checks for ",(0,r.kt)("inlineCode",{parentName:"a"},"drep registration-certificate")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"drep update-certificate"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/932"},"Add metadata validation, hash checking, and URL support to ",(0,r.kt)("inlineCode",{parentName:"a"},"stake-pool registration-certificate"),", and hash checking and URL support to ",(0,r.kt)("inlineCode",{parentName:"a"},"stake-pool metadata-hash"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/927"},"Add url support to metadata hash cmd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/919"},"Add support for certificates to register and delegate stake simultaneously")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/921"},"Hide free instances of ",(0,r.kt)("inlineCode",{parentName:"a"},"HashCheckParamInfo")," into functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/934"},"Move address commands to top level")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/931"},"Move key commands to top level")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/929"},"Move node commands to top level")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/935"},"Remove unnecessary era parameters and use ShelleyBasedEra era"))),(0,r.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/644"},"Add Cardano.Api.Tx.Compatible")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/648"},"Add voting to simple tx interface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/652"},"Export GenesisHashByron")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/649"},"Expose AnyVote")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/647"},"Expose functions and types from ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-ledger-alonzo")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-ledger-byron")," required by cardano-cli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/650"},"Handle plutus related ledger events in Conway")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/651"},"Make ",(0,r.kt)("inlineCode",{parentName:"a"},"Some")," accept forall k. instead of Type kind")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/653"},"Release 9.4.0.0"))),(0,r.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/6002"},"cardano-tracer: Fix multiple empty logs being produced."))),(0,r.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/6007"},"cardano-testnet | configurable SPO and relays count, enable parallel execution of the test suite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5992"},"cardano-testnet | Reenable chairman test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/6013"},"cardano-testnet | Remove ",(0,r.kt)("inlineCode",{parentName:"a"},"NodeRuntime")," type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/6001"},"cardano-testnet: don't specify delegated supply anymore. Use create-testnet-data default behavior")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/6006"},"cardano-testnet: remove unused ForkPoint datatype"))),(0,r.kt)("h3",{id:"docs"},"docs"),(0,r.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"))}m.isMDXComponent=!0}}]);