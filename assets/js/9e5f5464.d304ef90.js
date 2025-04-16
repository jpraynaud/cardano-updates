"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[98803],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},34146:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"SRE Team Update",slug:"2024-08-23-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-08-23-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-08-23-sre.md",source:"@site/blog/2024-08-23-sre.md",title:"SRE Team Update",description:"High level summary",date:"2024-08-23T00:00:00.000Z",formattedDate:"August 23, 2024",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:2.065,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2024-08-23-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-08-28-mithril"},nextItem:{title:"Consensus Team Update",permalink:"/2024-08-21-consensus"}},p={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Repository Work",id:"repository-work",level:2},{value:"Cardano Parts",id:"cardano-parts",level:3},{value:"Cardano-mainnet",id:"cardano-mainnet",level:3},{value:"Cardano-ops (Legacy Mainnet)",id:"cardano-ops-legacy-mainnet",level:3},{value:"Cardano-playground",id:"cardano-playground",level:3},{value:"Cardano-world",id:"cardano-world",level:3}],d={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"The SRE team continues work on Cardano environment improvements and general maintenance."),(0,r.kt)("p",null,"Some notable recent changes, updates or improvements include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The preprod network was hard forked to Conway era.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The nixosModule ",(0,r.kt)("inlineCode",{parentName:"p"},"profile-blockperf")," in cardano-parts now includes prometheus\nmetrics, automatically scraped with grafana-agent along with a dashboard.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A nixosModule ",(0,r.kt)("inlineCode",{parentName:"p"},"profile-tcpdump")," in cardano-parts is now available to push\non-going pcaps to s3 for historical reference.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Old dev environments were cleaned up and retired after the completion of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-network-ops")," cluster migration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-parts")," stack.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Causes of blockperf indicated mainnet relay delayed block headers were\ninvestigated and improved with adjustments to RTS parameters and machine\nclass.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Conway-era mempool log volume increase was investigated and resolved with\n",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-network")," improvements.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Scaling capability was added to the cardano-mainnet bootstrap cluster."))),(0,r.kt)("h2",{id:"repository-work"},"Repository Work"),(0,r.kt)("h3",{id:"cardano-parts"},"Cardano Parts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets cardano-db-sync (release) to 13.4.0.0. Includes nixosModule improvements\nto cardano-db-sync snapshots module with a manual trigger, blockperf module\nnew prom metrics, grafana-agent module with auto-blockperf scrape config and\na new tcpdump module for persistent pcaps to s3. Recipe improvements for\nconfiguration consistency checking and openTofu improved AMI and DNS\nfiltering have been made. The AWS machine reference spec has been updated and\none alert tuned for better sensitivity. More detail is available in the PR\ndescription:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/46"},"cardano-parts-pull-46"))),(0,r.kt)("h3",{id:"cardano-mainnet"},"Cardano-mainnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploys cardano-db-sync (release) to 13.4.0.0. Deploys nixosModule\nimprovements for cardano-db-sync snapshots module with a manual trigger,\nblockperf module with new prom metrics, grafana-agent module with\nauto-blockperf scrape config and a new tcpdump module for persistent pcaps to\ns3. Recipes improvements for configuration consistency checking and openTofu\nimproved AMI and DNS filtering have been made. Makes changes to pool group\nrelays to eliminate or reduce delayed block headers. Tests additional dev\npatches for missingBlock errors. Adds bootstrap cluster scaling capability\nand a bootstrap cluster dashboard. Improvements made in cardano-parts PR#46\nare included in this PR. More detail is available in the PR description:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-mainnet/pull/20"},"cardano-mainnet-pull-20"))),(0,r.kt)("h3",{id:"cardano-ops-legacy-mainnet"},"Cardano-ops (Legacy Mainnet)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Over a two week period the legacy relay nodes were scaled down 50% further from the recent machine quantity peak.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ops/compare/825d35c...6955150"},"commit-compare"))),(0,r.kt)("h3",{id:"cardano-playground"},"Cardano-playground"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Preprod was hard-forked to Conway. Deploys cardano-db-sync to ",(0,r.kt)("inlineCode",{parentName:"li"},"13.4.0.0"),".\nRecipe improvements for configuration consistency checking and openTofu\nimproved AMI and DNS filtering have been made. Improvements made in\ncardano-parts PR#46 are included in this PR. More detail is available in the PR\ndescription:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/30"},"cardano-playground-pull-30"))),(0,r.kt)("h3",{id:"cardano-world"},"Cardano-world"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updates openssh to 9.8p1 on remaining cardano-world (soon-to-be-retired) cluster machines\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-world/commit/e9f9559f1263d32224d3b8d13a8e3b5f771440dc"},"commit"))))}m.isMDXComponent=!0}}]);