"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[28050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return a?r.createElement(h,i(i({ref:t},s),{},{components:a})):r.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"Node API & CLI Team Update",slug:"2024-04-15-node-cli-api",authors:"carlos",tags:["cli-api"],hide_table_of_contents:!1},i="Node-Api-Cli Update",o={permalink:"/2024-04-15-node-cli-api",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-04-15-node-cli-api.md",source:"@site/blog/2024-04-15-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2024-04-15T00:00:00.000Z",formattedDate:"April 15, 2024",tags:[{label:"cli-api",permalink:"/tags/cli-api"}],readingTime:1.16,hasTruncateMarker:!1,authors:[{name:"Carlos LopezDeLara",title:"Node Product Owner",url:"https://github.com/CarlosLopezDeLara",imageURL:"https://github.com/CarlosLopezDeLara.png",key:"carlos"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2024-04-15-node-cli-api",authors:"carlos",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-04-17-mithril"},nextItem:{title:"Hydra Team Update",permalink:"/2024-04-12-hydra"}},c={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3}],s={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"2024-04-01---2024-04-15"},"2024-04-01 - 2024-04-15"),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"Adding support for script based committee members certificates: authorization and resignation. It is now possible to convert extended signing Drep and Committee keys to a Shelley-format key. Improvements to Conway era tests. Use threshold instead of quorum for committee members. "),(0,n.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/716"},"Provide a default value for ",(0,n.kt)("inlineCode",{parentName:"a"},"calculate-min-fee --reference-script-size"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/714"},"Improvements to governance tests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/713"},"Add transaction metadata golden test")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/710"},"key non-extended-key: make pattern matches exhaustive, so that we are notified of possible extensions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/708"},"foldSomeAddressVerificationKey->mapSomeAddressVerificationKey")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/699"},"Enable both --cold-script-file and --cold-script-hash for committee auth and resig commands")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/698"},'Fix inversion in --include-stake parser + print "stake" field even when there is no stake (do not hide stake absence)')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/697"},"Release cardano-cli-8.22.0.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/694"},"Fix broken golden tests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/693"},"Fix protocol params order for minFeeA and minFeeB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/691"},"convert-cardano-address-key: support DRep and CC keys")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/689"},"updating cli to use threshold instead of quorum for constitutional co\u2026"))),(0,n.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/517"},"Sort metadata keys for no-schema json for canonical CBOR")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/514"},"Add support for CC keys in the SomeAddressVerificationKey type")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/511"},"Implement estimateBalancedTxBody and estimateOrCalculateBalancedTxBody")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/506"},"Release cardano-api-8.44.0.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/503"},"LedgerState.hs improvements"))),(0,n.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5766"},"Updated copyright")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5758"},"Set NumThreads to 1 in cardano-testnet-test")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5749"},"Remove manual DRep registration from InfoAction test")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5748"},"DRep deposits test")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5747"},"Add tx fee check to hprop_transaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5746"},"cardano-testnet: Avoid rewrite of sgMaxLovelaceSupply"))),(0,n.kt)("h3",{id:"docs"},"docs"),(0,n.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"))}d.isMDXComponent=!0}}]);