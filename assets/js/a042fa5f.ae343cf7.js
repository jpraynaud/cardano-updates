"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[14552],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65091:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"SRE Team Update",slug:"2025-02-28-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},l=void 0,i={permalink:"/2025-02-28-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-02-28-sre.md",source:"@site/blog/2025-02-28-sre.md",title:"SRE Team Update",description:"High level summary",date:"2025-02-28T00:00:00.000Z",formattedDate:"February 28, 2025",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:1.475,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2025-02-28-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2025-02-28-node-cli-api"},nextItem:{title:"Ledger Team Update",permalink:"/2025-02-26-ledger"}},p={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Repository Work -- Merged",id:"repository-work----merged",level:2},{value:"Capkgs:",id:"capkgs",level:3},{value:"Cardano-parts",id:"cardano-parts",level:3},{value:"Cardano-playground",id:"cardano-playground",level:3},{value:"Cardano-mainnet",id:"cardano-mainnet",level:3},{value:"Iohk-nix",id:"iohk-nix",level:3},{value:"Repository Work In Progress -- PRs and Branches",id:"repository-work-in-progress----prs-and-branches",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"The SRE team continues work on Cardano environment improvements and general maintenance."),(0,r.kt)("p",null,"Some notable recent changes, updates or improvements include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-node and cardano-cli pre-release (-ng) are now set to ",(0,r.kt)("inlineCode",{parentName:"p"},"10.2.1")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"10.4.0.0"),", respectively, in cardano-parts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IoE Sanchonet environment and resources were retired.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cardano-parts added module and template support for SRV DNS records which an\nupcoming version of cardano-node will utilize."))),(0,r.kt)("h2",{id:"repository-work----merged"},"Repository Work -- Merged"),(0,r.kt)("h3",{id:"capkgs"},"Capkgs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adjusts the package fetchClosure path to avoid store re-writing"),(0,r.kt)("li",{parentName:"ul"},"Adds some just recipe env checks"),(0,r.kt)("li",{parentName:"ul"},"Updates the check recipe to work with package attrs with embedded ",(0,r.kt)("inlineCode",{parentName:"li"},'"'),(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/capkgs/pull/3"},"capkgs-pr-3"))),(0,r.kt)("h3",{id:"cardano-parts"},"Cardano-parts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets node pre-release (-ng) to ",(0,r.kt)("inlineCode",{parentName:"li"},"10.2.1"),", cardano-cli pre-release to ",(0,r.kt)("inlineCode",{parentName:"li"},"10.4.0.0"),"\nand mithril-cli to ",(0,r.kt)("inlineCode",{parentName:"li"},"v2506.0"),". Cleans up deprecated environments such as\nprivate, shelley-qa and sanchonet. Includes a number of improvements with\ndetails available in the release notes:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/releases/tag/v2025-02-26"},"cardano-parts-release-v2025-02-26"))),(0,r.kt)("h3",{id:"cardano-playground"},"Cardano-playground"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets node pre-release (-ng) to ",(0,r.kt)("inlineCode",{parentName:"li"},"10.2.1"),", cardano-cli pre-release to ",(0,r.kt)("inlineCode",{parentName:"li"},"10.4.0.0"),"\nand mithril-cli to ",(0,r.kt)("inlineCode",{parentName:"li"},"v2506.0"),". Cleans up deprecated environments such as\nprivate, shelley-qa and sanchonet. More detail is available in the PR\ndescription.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/41"},"cardano-playground-pr-41"))),(0,r.kt)("h3",{id:"cardano-mainnet"},"Cardano-mainnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets node pre-release (-ng) to ",(0,r.kt)("inlineCode",{parentName:"li"},"10.2.1"),", cardano-cli pre-release to ",(0,r.kt)("inlineCode",{parentName:"li"},"10.4.0.0"),"\nand mithril-cli to ",(0,r.kt)("inlineCode",{parentName:"li"},"v2506.0"),". Cleans up deprecated environments such as\nprivate, shelley-qa and sanchonet. More detail is available in the PR description.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-mainnet/pull/31"},"cardano-mainnet-pr-31"))),(0,r.kt)("h3",{id:"iohk-nix"},"Iohk-nix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This PR removes cardano-lib private, sanchonet, shelley_qa and legacy testnet\nenvironments, all of which are shutdown. It also adds a default peer snapshot\nfile per environment, updates the ",(0,r.kt)("inlineCode",{parentName:"li"},"usePeersFromLedgerAfterSlot")," value per\nenvironment, cleans up some unused code and makes some lsp lint suggested\nchanges:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/iohk-nix/pull/593"},"iohk-nix-pr-593"))),(0,r.kt)("h2",{id:"repository-work-in-progress----prs-and-branches"},"Repository Work In Progress -- PRs and Branches"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cardano-node: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/6110"},"https://github.com/IntersectMBO/cardano-node/pull/6110")),(0,r.kt)("li",{parentName:"ul"},"Cardano-node: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/6123"},"https://github.com/IntersectMBO/cardano-node/pull/6123")),(0,r.kt)("li",{parentName:"ul"},"Cardano-node: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/6133"},"https://github.com/IntersectMBO/cardano-node/pull/6133")),(0,r.kt)("li",{parentName:"ul"},"Cardano-parts: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/59"},"https://github.com/input-output-hk/cardano-parts/pull/59")),(0,r.kt)("li",{parentName:"ul"},"Cardano-playground: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/42"},"https://github.com/input-output-hk/cardano-playground/pull/42")),(0,r.kt)("li",{parentName:"ul"},"Cardano-mainnet: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-mainnet/pull/32"},"https://github.com/input-output-hk/cardano-mainnet/pull/32")),(0,r.kt)("li",{parentName:"ul"},"Iohk-nix: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/iohk-nix/pull/594"},"https://github.com/input-output-hk/iohk-nix/pull/594"))))}c.isMDXComponent=!0}}]);