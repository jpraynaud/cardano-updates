"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[69574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"SRE Q4 2023 Update",slug:"2023-Q4-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},i=void 0,l={permalink:"/quarterly/2023-Q4-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/quarterly/2023-Q4-sre.md",source:"@site/quarterly/2023-Q4-sre.md",title:"SRE Q4 2023 Update",description:"2023-10 - 2023-12",date:"2024-01-10T01:52:35.000Z",formattedDate:"January 10, 2024",tags:[{label:"sre",permalink:"/quarterly/tags/sre"}],readingTime:.915,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Q4 2023 Update",slug:"2023-Q4-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Consensus Q4 2023 Update",permalink:"/quarterly/2023-Q4-consensus"},nextItem:{title:"Performance & Tracing Q3 2023 Update",permalink:"/quarterly/2023-Q3-performance-and-tracing"}},p={authorsImageUrls:[void 0]},s=[{value:"2023-10 - 2023-12",id:"2023-10---2023-12",level:2},{value:"Main achievements",id:"main-achievements",level:3},{value:"Next steps",id:"next-steps",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"2023-10---2023-12"},"2023-10 - 2023-12"),(0,a.kt)("h3",{id:"main-achievements"},"Main achievements"),(0,a.kt)("p",null,"In addition to ongoing general maintenance and support of cardano environments,\nmain SRE achievements for this quarter include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cardano-parts support was added for cardano-db-sync, cardano-smash,\ncardano-faucet, cardano-metadata, grafana monitoring along with a number of\nother features")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Completed migration of testnets from cardano-world to the cardano-playground cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Completed migration of the cardano book from cardano-world to the cardano-playground\ncluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Completed migration of pools from cardano-ops to the cardano-mainnet cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Creation of a mainnet p2p bootstrap cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cardano sanchonet environment respins during the quarter for testing new\ncardano-node pre-release Conway era functionality")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All environments were upgraded to cardano-node 8.7.2 or 8.7.3 by the end of\nthe quarter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Completion of a govtool backend deployment for Voltaire chain testing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Creation of a cardano-monitoring repository,\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-monitoring"},"cardano-monitoring"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A new repository enabling agile deployment of EC2 monitoring servers,\ncompatible with OpenTofu grafana and mimir providers")))),(0,a.kt)("h3",{id:"next-steps"},"Next steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Scale down the mainnet non-p2p legacy cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add deployment support for new network services, such as Mithril")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Continue cardano-parts and operations improvements"))))}m.isMDXComponent=!0}}]);