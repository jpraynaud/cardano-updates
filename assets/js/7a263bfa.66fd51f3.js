"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[98450],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>k});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(o),h=n,k=c["".concat(l,".").concat(h)]||c[h]||m[h]||a;return o?r.createElement(k,i(i({ref:t},u),{},{components:o})):r.createElement(k,i({ref:t},u))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},56210:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const a={title:"Network Team Update",slug:"2023-10-27-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2023-10-27-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-10-27-network.md",source:"@site/blog/2023-10-27-network.md",title:"Network Team Update",description:"High-level overview of sprint 47",date:"2023-10-27T00:00:00.000Z",formattedDate:"October 27, 2023",tags:[{label:"network",permalink:"/tags/network"}],readingTime:1.765,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2023-10-27-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-10-27-hydra"},nextItem:{title:"SRE Team Update",permalink:"/2023-10-27-sre"}},l={authorsImageUrls:[void 0]},p=[{value:"High-level overview of sprint 47",id:"high-level-overview-of-sprint-47",level:2},{value:"Bootstrap Peers",id:"bootstrap-peers",level:3},{value:"CI / Tests",id:"ci--tests",level:3},{value:"KeepAlive client",id:"keepalive-client",level:3},{value:"Galois",id:"galois",level:3},{value:"Cardano Network Service Assurance (CNSA)",id:"cardano-network-service-assurance-cnsa",level:3},{value:"New CHaP Release",id:"new-chap-release",level:3},{value:"More details",id:"more-details",level:2},{value:"CI / Tests",id:"ci--tests-1",level:3},{value:"Release Process",id:"release-process",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview-of-sprint-47"},"High-level overview of ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/orgs/input-output-hk/projects/19/views/16?filterQuery=sprint%3A%22sprint+47%22"},"sprint 47")),(0,n.kt)("h3",{id:"bootstrap-peers"},"Bootstrap Peers"),(0,n.kt)("p",null,"We continued to review the process of bootstrap peers, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4555"},"ouroboros-network#4555")),(0,n.kt)("h3",{id:"ci--tests"},"CI / Tests"),(0,n.kt)("p",null,"We investigated our CI issues. We found a memory leak in ",(0,n.kt)("inlineCode",{parentName:"p"},"typed-protocols"),"\nfunction used for testing codecs which triggered out of memory manager (OOM) on\nsome platforms (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/typed-protocols/pull/43"},"typed-protocols#43"),"); we also found a bug in the connection manager which resulted in CI\n",(0,n.kt)("inlineCode",{parentName:"p"},"timeouts")," (see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4696/commits/010d9b2bd76356373d8c139eaedd8aea7ad90680"},"connection-manager-fix"),").  "),(0,n.kt)("h3",{id:"keepalive-client"},"KeepAlive client"),(0,n.kt)("p",null,"We found two small issues with the keep-alive client, which were addressed\nby Karl Knutsson (",(0,n.kt)("a",{parentName:"p",href:"https://cardanofoundation.org/"},"Cardano Foundation"),"), ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4689"},"ouroboros-network#4689"),"."),(0,n.kt)("h3",{id:"galois"},"Galois"),(0,n.kt)("p",null,"We merged two large PRs prepared by ",(0,n.kt)("a",{parentName:"p",href:"https://galois.com/"},"Galois"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4660"},"inspect ",(0,n.kt)("inlineCode",{parentName:"a"},"error")," call sites")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4663"},"implement micro benchmarks for ",(0,n.kt)("inlineCode",{parentName:"a"},"PeerMetrics")))),(0,n.kt)("h3",{id:"cardano-network-service-assurance-cnsa"},"Cardano Network Service Assurance (CNSA)"),(0,n.kt)("p",null,"Galois made the following progress on CNSA:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a simple ","[InfuxDB]"," database backend has been added;"),(0,n.kt)("li",{parentName:"ul"},"the documentation has been updated;"),(0,n.kt)("li",{parentName:"ul"},"internal improvements to the code;"),(0,n.kt)("li",{parentName:"ul"},'progress on a new "CSNA analysis" that provides, for each sampler node, the\nblock download throughput in bytes over time.')),(0,n.kt)("h3",{id:"new-chap-release"},"New CHaP Release"),(0,n.kt)("p",null,"We cut a new release of ",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-netowrk")," packages to ",(0,n.kt)("inlineCode",{parentName:"p"},"CHaP"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-haskell-packages/pull/547"},"chap#547")),(0,n.kt)("h2",{id:"more-details"},"More details"),(0,n.kt)("h3",{id:"ci--tests-1"},"CI / Tests"),(0,n.kt)("p",null,"We improved the memory footprint of some of our tests by analysing a stream of\n",(0,n.kt)("inlineCode",{parentName:"p"},"IOSim")," traces without retaining them, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4696"},"ouroboros-network#4696")),(0,n.kt)("p",null,"As a safety measure, we introduced an upper bound for heap memory used by test\nartefacts in our ",(0,n.kt)("inlineCode",{parentName:"p"},"nix")," tests.  We use ",(0,n.kt)("inlineCode",{parentName:"p"},"200MB")," limit for all tests except for\n",(0,n.kt)("inlineCode",{parentName:"p"},"network-mux")," tests which use ",(0,n.kt)("inlineCode",{parentName:"p"},"350MB")," limit, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4702"},"ouroboros-network#4702"),"."),(0,n.kt)("p",null,"We refactored one of our tests to use ephemeral ports thus allowing it to\nrun concurrently, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4702"},"ouroboros-network#4702"),"."),(0,n.kt)("p",null,"We merged ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4623"},"ouroboros-network#4623")," which fixes a bunch of test failures."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4694"},"inbound-governor: connection leak")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4607"},"connection-manager: assertion failure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4605"},"not released connection"))),(0,n.kt)("p",null,"All of them were due to a bug in test logic rather than a bug in production\ncode."),(0,n.kt)("h3",{id:"release-process"},"Release Process"),(0,n.kt)("p",null,"We updated our release process & associated scripts, see\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4705"},"ouroboros-network#4705"),"."))}m.isMDXComponent=!0}}]);