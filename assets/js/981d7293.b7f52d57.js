"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[36945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"SRE Team Update",slug:"2024-03-01-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-03-01-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-03-01-sre.md",source:"@site/blog/2024-03-01-sre.md",title:"SRE Team Update",description:"High level summary",date:"2024-03-01T00:00:00.000Z",formattedDate:"March 1, 2024",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:1.26,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2024-03-01-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2024-03-01-hydra"},nextItem:{title:"Node API & CLI Team Update",permalink:"/2024-02-29-node-cli-api"}},s={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Work in progress",id:"work-in-progress",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"The SRE team continues work on cardano environment improvements and general\nenvironment maintenance."),(0,a.kt)("p",null,"Some notable recent changes, updates or improvements include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cardano-node 8.8.1-pre is now deployed to sanchonet, two-thirds of preprod,\none-third of preview and also voltaire private chain networks.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Catalyst Voltaire private chain was respun and an updated db-sync and govtool\nbackend deployed after hard fork to Conway era.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"IOG sanchonet pool block producers are now also signing mithril\ncertificates.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A mithril-signer-verifier service now runs on all IOG SRE mithril signers and\ngenerates alerts if no recent mithril certificates have been signed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All cardano-parts mithril clients, whether via nixosConfiguration,\nprocess-compose jobs or the nix cardano-node entrypoint, will now\nautomatically verify that a trusted IOG pool has signed a mithril certificate\nprior to using the associated mithril state.  If no trusted IOG pool has\nsigned a recent mithril certificate, mithril state usage with be skipped and\na classic sync from genesis to tip will be performed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A significant amount of effort was applied towards the upcoming cardano-node\n8.9.x-pre release in order to align nixos service module code between\ncardano-node nixos services, iohk-nix topology generation, cardano-ops legacy\ncode, and cardano-parts module compatibility."))),(0,a.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,a.kt)("h3",{id:"work-in-progress"},"Work in progress"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The following PRs contain the mentioned work above and will be finalized and\nmerged once cardano-node 8.9.x-pre or equivalent is tagged.  Summary details\nfor each PR will be added in the next biweekly update once merged.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/34"},"cardano-parts-pull-34")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/18"},"cardano-playground-pull-18")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-mainnet/pull/9"},"cardano-mainnet-pull-9"))))))}m.isMDXComponent=!0}}]);