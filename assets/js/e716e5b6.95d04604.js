"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[94379],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"SRE Q3 2023 Update",slug:"2023-Q3-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},i=void 0,l={permalink:"/quarterly/2023-Q3-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/quarterly/2023-Q3-sre.md",source:"@site/quarterly/2023-Q3-sre.md",title:"SRE Q3 2023 Update",description:"2023-07 - 2023-09",date:"2023-10-19T23:39:19.000Z",formattedDate:"October 19, 2023",tags:[{label:"sre",permalink:"/quarterly/tags/sre"}],readingTime:.905,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Q3 2023 Update",slug:"2023-Q3-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Performance & Tracing Q3 2023 Update",permalink:"/quarterly/2023-Q3-performance-and-tracing"},nextItem:{title:"SRE Q2 2023 Update",permalink:"/quarterly/2023-Q2-sre"}},p={authorsImageUrls:[void 0]},s=[{value:"2023-07 - 2023-09",id:"2023-07---2023-09",level:2},{value:"Main achievements",id:"main-achievements",level:3},{value:"Next steps",id:"next-steps",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"2023-07---2023-09"},"2023-07 - 2023-09"),(0,a.kt)("h3",{id:"main-achievements"},"Main achievements"),(0,a.kt)("p",null,"In addition to ongoing general maintenance and support of cardano environments, main SRE achievements for this quarter include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Completion of mainnet relay networking conversion to p2p topology"),(0,a.kt)("li",{parentName:"ul"},"Cardano sanchonet environment respins for testing new cardano-node pre-release Conway era functionality"),(0,a.kt)("li",{parentName:"ul"},"Stabilization of cardano-explorer in cardano-world using high IOPS bare metal machines"),(0,a.kt)("li",{parentName:"ul"},"Creation of a nix content addressed packages repository, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/capkgs"},"capkgs"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To provide lightweight release binaries thereby avoiding sluggish nix flakes and devShells"))),(0,a.kt)("li",{parentName:"ul"},"Creation of a cardano performance benchmarking cluster, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-perf"},"cardano-perf"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To replace legacy cluster benchmark tooling"))),(0,a.kt)("li",{parentName:"ul"},"Creation of a cardano cluster composition repository, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts"},"cardano-parts"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For enabling multi-cluster, multi-role cardano network deployments"))),(0,a.kt)("li",{parentName:"ul"},"Creation of a cardano testnets repository, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground"},"cardano-playground"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Utilizing cardano-parts for testnet deployments"))),(0,a.kt)("li",{parentName:"ul"},"Creation of a sanchonet demo repository, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/sanchonet-demo"},"sanchonet-demo"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Utilizing cardano-parts for fast sanchonet test environment and demo purposes")))),(0,a.kt)("h3",{id:"next-steps"},"Next steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Continue with migration of cardano-world testnets to cardano-playground"),(0,a.kt)("li",{parentName:"ul"},"Proceed with spinup of mainnet p2p bootstrap cluster"),(0,a.kt)("li",{parentName:"ul"},"Scale down mainnet non-p2p legacy cluster at the appropriate time")))}m.isMDXComponent=!0}}]);