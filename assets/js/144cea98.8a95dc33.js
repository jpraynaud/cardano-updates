"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[50881],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>s});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(a),h=o,s=d["".concat(p,".").concat(h)]||d[h]||m[h]||r;return a?n.createElement(s,l(l({ref:e},c),{},{components:a})):n.createElement(s,l({ref:e},c))}));function s(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},86528:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));const r={title:"Node API & CLI Team Update",slug:"2023-02-22-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},l="Node-Api-Cli Update",i={permalink:"/2023-02-22-node-cli-api",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-02-22-node-cli-api.md",source:"@site/blog/2023-02-22-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2023-02-22T00:00:00.000Z",formattedDate:"February 22, 2023",tags:[{label:"cli-api",permalink:"/tags/cli-api"}],readingTime:1.385,hasTruncateMarker:!1,authors:[{name:"Jordan Millar",title:"Node Team Lead",url:"https://github.com/Jimbo4350",imageURL:"https://github.com/Jimbo4350.png",key:"Jimbo4350"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2023-02-22-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/2023-02-22-consensus"},nextItem:{title:"DB-sync Team Update",permalink:"/2023-02-21-db-sync"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Completed",id:"completed",level:2},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3},{value:"Developer experience",id:"developer-experience",level:3},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3},{value:"In Progress",id:"in-progress",level:2},{value:"Documentation",id:"documentation",level:2},{value:"CI &amp; project mainteance",id:"ci--project-mainteance",level:2},{value:"cardano-cli",id:"cardano-cli-1",level:3},{value:"cardano-api",id:"cardano-api-1",level:3},{value:"cardano-node",id:"cardano-node-1",level:3},{value:"cardano-testnet",id:"cardano-testnet-1",level:3}],c={toc:u},d="wrapper";function m(t){let{components:e,...a}=t;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2023-02-22---2023-03-07"},"2023-02-22 - 2023-03-07"),(0,o.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,o.kt)("p",null,"General bug fixes "),(0,o.kt)("h2",{id:"completed"},"Completed"),(0,o.kt)("h3",{id:"docs"},"docs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4882"},"Fix some markdown links")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4881"},"Update changelog with PR4788 changes"))),(0,o.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"),(0,o.kt)("h3",{id:"developer-experience"},"Developer experience"),(0,o.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4761"},"Fix bug in hash computation in cardano-cli genesis create-cardano")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4636"},"Cleanup exports of cardano-testnet")),(0,o.kt)("li",{parentName:"ul"},"[BUGFIX]"," - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4537"},"Stop the cli from changing the bytes in user-supplied data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4625"},"Handle pipes in cardano-cli")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4753"},"Export SubmitResult from Cardano.Api"))),(0,o.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4901"},"Remove pattern Tx"))),(0,o.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4263"},"Stop running CI when the only changes are to docs"))),(0,o.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,o.kt)("h2",{id:"in-progress"},"In Progress"),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4949"},"Fix path to mkfiles.sh script in documentation"))),(0,o.kt)("h2",{id:"ci--project-mainteance"},"CI & project mainteance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4932"},"New build complete job")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4764"},"Update ouroboros-network"))),(0,o.kt)("h3",{id:"cardano-cli-1"},"cardano-cli"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/3819"},"Debug output for transaction submit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4713"},"Fully remove the cli intermediate TxBody format")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4659"},"Render consistent plutus script failure output")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4666"},"Read network ID from environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4647"},"CLI option to append additional signatures to a transactions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4664"},"Cardano ping")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4777"},"Better error message for query utxo on oops")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4910"},"New --node-socket-path cli option")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4909"},"Fix qKesKesKeyExpiry to not always be null")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4880"},"Detect invalid counter and certificate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4823"},"Straight line code for tx commands")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4664"},"New cardano-cli ping command.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4655"},"Move cardano-ping from ouroboros-network to cardano-node project"))),(0,o.kt)("h3",{id:"cardano-api-1"},"cardano-api"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4450"},"Auto-balance multiasset transactions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4763"},"Remove simple script distinction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4941"},"Combinators for TxBodyCon\u017btent and related types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4903"},"Reduce number of calls to toLedgerPParams")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4825"},"Better error message for query utxo without oops 2"))),(0,o.kt)("h3",{id:"cardano-node-1"},"cardano-node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4341"},"Rename TestEnableDevelopmentHardForkEras")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4911"},"Less verbose node-to-client and node-to-node version logging"))),(0,o.kt)("h3",{id:"cardano-testnet-1"},"cardano-testnet"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4845"},"Use Haskell variables for passing values")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4879"},"Re-enable kes-period-info test")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/3783"},"Transaction debug script command"))))}m.isMDXComponent=!0}}]);