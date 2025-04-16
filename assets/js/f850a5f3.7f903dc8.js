"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[25403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),h=o,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},23498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Network Team Update",slug:"2023-01-20-network",authors:"coot",tags:["network","release"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2023-01-20-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-01-20-network.md",source:"@site/blog/2023-01-20-network.md",title:"Network Team Update",description:"High level summary",date:"2023-01-20T00:00:00.000Z",formattedDate:"January 20, 2023",tags:[{label:"network",permalink:"/tags/network"},{label:"release",permalink:"/tags/release"}],readingTime:1.045,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2023-01-20-network",authors:"coot",tags:["network","release"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-01-20-hydra"},nextItem:{title:"SRE Team Update",permalink:"/2023-01-20-sre"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2}],s={toc:u},m="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,o.kt)("p",null,"We have been working towards ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node-1.35.5")," release.  QA & benchmarking\nteams gave a green light for the release, and we made decent progress with some\nCI problem which we encountered on the way (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/4612"},"PR #4612"),"). We are also working on\npeer sharing, making improvements in our testing infrastructure, reducing\ntechnical debt and making progress towards ",(0,o.kt)("inlineCode",{parentName:"p"},"io-sim-1.0.0.0"),". Galois is making\nprogress on Handshake improvements."),(0,o.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,o.kt)("p",null,"Our diffusion simulation network now includes a mixed network of ",(0,o.kt)("inlineCode",{parentName:"p"},"initiator\nonly")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"initiator and responder")," nodes. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4222"},"issue #4222")),(0,o.kt)("p",null,"We are now reviewing the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4019"},"peer sharing pull request"),"."),(0,o.kt)("p",null,"We are also reviewing pull request which introduces handshake query flag. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4256"},"PR #4256")),(0,o.kt)("p",null,"We fixed a bug in our network simulator.  The bug was triggered when a node\ndied when performing a simultaneous TCP open (a corner case of a corner case!). ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4265"},"PR #4265")),(0,o.kt)("p",null,"We also refactored ",(0,o.kt)("inlineCode",{parentName:"p"},"Snocket")," interface and removed the bearer construction from\nits methods. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4260"},"PR #4260")),(0,o.kt)("p",null,"We are working towards releasing ",(0,o.kt)("inlineCode",{parentName:"p"},"io-sim-1.0.0.0")," on Hackage, which includes\nreviewing two PRs: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/57"},"PR #57")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/60"},"PR #60")," as well as writing an announcement\nblog post.  "))}c.isMDXComponent=!0}}]);