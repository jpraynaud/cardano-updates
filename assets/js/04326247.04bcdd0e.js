"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[25759],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,s=d["".concat(p,".").concat(m)]||d[m]||h[m]||o;return a?n.createElement(s,l(l({ref:t},c),{},{components:a})):n.createElement(s,l({ref:t},c))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Node API & CLI Team Update",slug:"2023-01-25-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},l="Node-Api-Cli Update",i={permalink:"/2023-01-25-node-cli-api",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-01-25-node-cli-api.md",source:"@site/blog/2023-01-25-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2023-01-25T00:00:00.000Z",formattedDate:"January 25, 2023",tags:[{label:"cli-api",permalink:"/tags/cli-api"}],readingTime:1.585,hasTruncateMarker:!1,authors:[{name:"Jordan Millar",title:"Node Team Lead",url:"https://github.com/Jimbo4350",imageURL:"https://github.com/Jimbo4350.png",key:"Jimbo4350"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2023-01-25-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/2023-01-25-consensus"},nextItem:{title:"Crypto Team Update",permalink:"/2023-01-20-crypto"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Completed",id:"completed",level:2},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3},{value:"Developer experience",id:"developer-experience",level:3},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3},{value:"In Progress",id:"in-progress",level:2},{value:"CI &amp; project mainteance",id:"ci--project-mainteance",level:2},{value:"cardano-cli",id:"cardano-cli-1",level:3},{value:"cardano-api",id:"cardano-api-1",level:3},{value:"cardano-node",id:"cardano-node-1",level:3},{value:"cardano-testnet",id:"cardano-testnet-1",level:3}],c={toc:u},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2023-01-25---2023-02-07"},"2023-01-25 - 2023-02-07"),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"General clean up (error message improvement) and focus on CI maintenance. Multiple pools now supported in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-cli query stake-snapshot")," command. "),(0,r.kt)("h2",{id:"completed"},"Completed"),(0,r.kt)("h3",{id:"docs"},"docs"),(0,r.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4853"},"Fix how changed files are selected in stylish-haskell CI check")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4755"},"Copyright updates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4848"},"Remove hlint from nix required CI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4838"},"Remove reconfigure-hlint.sh script")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4837"},"Fix hlint warnings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4833"},"Implement ADR-2: Restructure modules for generators")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4803"},"Stylish Haskell in CI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4802"},"Revert skip doc in ci")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4800"},"Skip CI on doc only changes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4792"},"Skip CI if only changes are documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4776"},"Build all of cardano-node in CI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4766"},"Check cabal files in CI"))),(0,r.kt)("h3",{id:"developer-experience"},"Developer experience"),(0,r.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4785"},"Straight line error handling")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4279"},"Multiple pools support in query stake snapshot"))),(0,r.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4787"},"New NodeToClientVersionOf typeclass")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4832"},"Remove NoImplicitPrelude from cardano-api")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4809"},"Add ReaderT of NodeToClientVersion to LocalStateQueryExpr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4808"},"Use hoistMaybe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4788"},"Better error message for query utxo without oops"))),(0,r.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,r.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4805"},"New query stake-snapshot integration test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4671"},"Make leadership-schedule test less flaky"))),(0,r.kt)("h2",{id:"in-progress"},"In Progress"),(0,r.kt)("h2",{id:"ci--project-mainteance"},"CI & project mainteance"),(0,r.kt)("h3",{id:"cardano-cli-1"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4761"},"Fix bug in hash computation in cardano-cli genesis create-cardano")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4636"},"Cleanup exports of cardano-testnet")),(0,r.kt)("li",{parentName:"ul"},"[BUGFIX]"," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4537"},"Stop the cli from changing the bytes in user-supplied data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/3819"},"Debug output for transaction submit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4625"},"Handle pipes in cardano-cli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4713"},"Fully remove the cli intermediate TxBody format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4659"},"Render consistent plutus script failure output")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4666"},"Read network ID from environment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4647"},"CLI option to append additional signatures to a transactions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4664"},"Cardano ping")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4777"},"Better error message for query utxo on oops"))),(0,r.kt)("h3",{id:"cardano-api-1"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4458"},"Make TxBodyContent an instance of Monoid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4450"},"Auto-balance multiasset transactions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4763"},"Remove simple script distinction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4753"},"Export SubmitResult from Cardano.Api"))),(0,r.kt)("h3",{id:"cardano-node-1"},"cardano-node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4263"},"Stop running CI when the only changes are to docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4341"},"Rename TestEnableDevelopmentHardForkEras"))),(0,r.kt)("h3",{id:"cardano-testnet-1"},"cardano-testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4845"},"Use Haskell variables for passing values"))))}h.isMDXComponent=!0}}]);