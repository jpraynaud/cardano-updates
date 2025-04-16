"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[39575],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5937:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"Node API & CLI Team Update",slug:"2025-01-30-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},i="Node-Api-Cli Update",o={permalink:"/2025-01-30-node-cli-api",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-01-30-node-cli-api.md",source:"@site/blog/2025-01-30-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2025-01-30T00:00:00.000Z",formattedDate:"January 30, 2025",tags:[{label:"cli-api",permalink:"/tags/cli-api"}],readingTime:1.525,hasTruncateMarker:!1,authors:[{name:"Jordan Millar",title:"Node Team Lead",url:"https://github.com/Jimbo4350",imageURL:"https://github.com/Jimbo4350.png",key:"Jimbo4350"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2025-01-30-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/2025-01-31-sre"},nextItem:{title:"Ledger Team Update",permalink:"/2025-01-29-ledger"}},p={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2025-01-15t000000z---2025-01-30t000000z"},"2025-01-15T00:00:00Z - 2025-01-30T00:00:00Z"),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"cardano-cli updates")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added certificates support to ",(0,r.kt)("inlineCode",{parentName:"li"},"compatible transaction-sign")),(0,r.kt)("li",{parentName:"ul"},"Integrated changes for node v10.2.0 release"),(0,r.kt)("li",{parentName:"ul"},"Implemented query for big ledger peers snapshot"),(0,r.kt)("li",{parentName:"ul"},"Refactored node connection handling using ",(0,r.kt)("inlineCode",{parentName:"li"},"LocalNodeConnectInfo")),(0,r.kt)("li",{parentName:"ul"},"Released v10.3.0.0"),(0,r.kt)("li",{parentName:"ul"},"Removed deprecated ",(0,r.kt)("inlineCode",{parentName:"li"},"ScriptWitnessFiles")," usage"),(0,r.kt)("li",{parentName:"ul"},"Simplified GHA workflows using Nix"),(0,r.kt)("li",{parentName:"ul"},"Updated Nix tooling and dependencies"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"cardano-api improvements")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added support for ratify-state query"),(0,r.kt)("li",{parentName:"ul"},"Reorganized certificate witnesses into ordered maps"),(0,r.kt)("li",{parentName:"ul"},"Deprecated and removed outdated patterns"),(0,r.kt)("li",{parentName:"ul"},"Downgraded Plutus to v1.37"),(0,r.kt)("li",{parentName:"ul"},"Fixed Plutus CBOR encoding bug"),(0,r.kt)("li",{parentName:"ul"},"Exposed GovActionState from Ledger"),(0,r.kt)("li",{parentName:"ul"},"Released versions 10.6.0.0 and 10.7.0.0"),(0,r.kt)("li",{parentName:"ul"},"Added Plutus script language conversion exports")))),(0,r.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1020"},"Adapt to removal of some patterns in API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/972"},"Add certificates to CLI interface in ",(0,r.kt)("inlineCode",{parentName:"a"},"compatible transaction-sign")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/986"},"Integrate in preparation for cardano-node release 10.2.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/980"},"Misc refactors in pretty printing and replacing unnecessary functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/727"},"Query a node for a snapshot of big ledger peers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1034"},"Refactor node connection passing to make it use ",(0,r.kt)("inlineCode",{parentName:"a"},"LocalNodeConnectInfo")," type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1019"},"Release cardano-cli-10.3.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1025"},"Remove use of ",(0,r.kt)("inlineCode",{parentName:"a"},"ScriptWitnessFiles")," in spending scripts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1026"},"Remove use of script witness files in certifying scripts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1030"},"Update nix cabal version & flake inputs"))),(0,r.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/737"},"Add support for the ratify-state query")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/734"},"Change a representation of witnesses in transaction's certificates to an ordered map where a certificate is the key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/733"},"Deprecate a lot of patterns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/728"},"Deprecate some patterns, remove their internal use")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/727"},"Downgrade plutus version to 1.37")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/730"},"Expose GovActionState from Ledger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/720"},"Fix plutus double CBOR encoding bug")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/738"},"Re-export getBlockTxs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/736"},"Release 10.7.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/725"},"Release cardano-api-10.6.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/731"},"Shelley: export {to,from}AlonzoLanguage (Plutus script language conversions)"))),(0,r.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h3",{id:"docs"},"docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/1029"},"Simplify GHAs using nix, update nix shell haskell tools"))))}m.isMDXComponent=!0}}]);