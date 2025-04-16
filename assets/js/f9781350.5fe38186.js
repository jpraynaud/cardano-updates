"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[95174],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={title:"Performance & Tracing Update",slug:"2024-03-27-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-03-27-performance-and-tracing",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-03-27-performance-and-tracing.md",source:"@site/blog/2024-03-27-performance-and-tracing.md",title:"Performance & Tracing Update",description:"High level summary",date:"2024-03-27T00:00:00.000Z",formattedDate:"March 27, 2024",tags:[{label:"performance-tracing",permalink:"/tags/performance-tracing"}],readingTime:2.99,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & Tracing Update",slug:"2024-03-27-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-03-27-mithril"},nextItem:{title:"Hydra Team Update",permalink:"/2024-03-22-hydra"}},s={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Development",id:"development",level:3},{value:"Workbench",id:"workbench",level:3},{value:"Tracing",id:"tracing",level:3},{value:"UTxO Growth",id:"utxo-growth",level:3},{value:"Nomad cluster",id:"nomad-cluster",level:3}],d={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: Release benchmarks for ",(0,a.kt)("inlineCode",{parentName:"li"},"8.9.1")," have been performed and analysed."),(0,a.kt)("li",{parentName:"ul"},"Development: We've implemented a benchmarking setup for UTxO-HD's LMDB (on-disk) backend."),(0,a.kt)("li",{parentName:"ul"},"Workbench: The now modular, ",(0,a.kt)("inlineCode",{parentName:"li"},"nix"),"-based genesis creation has been merged to ",(0,a.kt)("inlineCode",{parentName:"li"},"master"),"; ",(0,a.kt)("inlineCode",{parentName:"li"},"DRep")," delegation and integration of a new ",(0,a.kt)("inlineCode",{parentName:"li"},"cardano-cli")," command are ongoing."),(0,a.kt)("li",{parentName:"ul"},"Tracing: Benchmarking the new handle registry feature in ",(0,a.kt)("inlineCode",{parentName:"li"},"cardano-tracer")," is complete; quality-of-life improvements to Prometheus output."),(0,a.kt)("li",{parentName:"ul"},"UTxO Growth: We've adjusted our framework to support running UTxO scaling benchmarks on both a single node and a cluster."),(0,a.kt)("li",{parentName:"ul"},"Nomad cluster: new multi-cluster support with the capability to quickly adjust to changes in deployed hardware")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"We've performed a full set of release benchmarks for Node ",(0,a.kt)("inlineCode",{parentName:"p"},"8.9.1"),". Comparing with release ",(0,a.kt)("inlineCode",{parentName:"p"},"8.9.0"),", we could not detect any performance risks for that version. "),(0,a.kt)("h3",{id:"development"},"Development"),(0,a.kt)("p",null,"In context of UTxO scaling, we want to assess the feasability of the current on-disk solution (which is LMDB) of a UTxO-HD enabled node. Using that, the UTxO set will be kept\nin live tables and snapshots on disk, significantly reducing memory requirements.  "),(0,a.kt)("p",null,"We've implemented a benchmark setting, and a node service configuration, supporting direct disk access to a dedicated device which can be initialized with optimized\nfile system and mount settings. It's purpose is to serve as storage for the highly performance-critical disk I/O of the LMDB component."),(0,a.kt)("h3",{id:"workbench"},"Workbench"),(0,a.kt)("p",null,"Our automation for creating all flavours of geneses has seen cleanup and refactoring - which has been merged to ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),". It can now use a more principled, and rigorously checked, modular approach\nto define, create and cache the desired genesis files.  "),(0,a.kt)("p",null,"Working on integrating new ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-cli")," functionality in our automation is ongoing. The performance workbench will support a different, and updated, CLI command which will allow injection of ",(0,a.kt)("inlineCode",{parentName:"p"},"DRep")," delegations into genesis."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"Benchmarking ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-tracer"),"'s new handle registry feature has been performed and evaluated. We're satisfied with seeing clear performance improvements along with cleaner code, and much better test coverage.\nEspecially allocation rate and number of garbage collections (GC) could be significantly reduced, along with the CPU time required for performing GCs. This will allow for higher trace message throughput given\nidentiacal system resources - plus less system calls issued to the OS in the process.  "),(0,a.kt)("p",null,"Furthermore, the new tracing system is getting improvements for its Prometheus output - like providing version numbers as metrics, or annotating metrics with their type - enhancing the output's overall utility."),(0,a.kt)("h3",{id:"utxo-growth"},"UTxO Growth"),(0,a.kt)("p",null,"The performance workbench now supports profiles aimed at simulating UTxO growth both for a single node and an entire cluster. Additionally, simulating different\nRAM sizes in combination with specific UTxO set sizes is supported. For a single block producing node, the focus is on quick turnaround when running\na benchmark, gaining insight into the node's RAM usage and possible impact on the forging loop.  "),(0,a.kt)("p",null,"The cluster profiles enable capturing block diffusion metrics as well, however they require a much longer runtime. We can now successfully benchmark the node's behaviour\nwhen dealing with UTxO set sizes 4x - 5x of current mainnet, as well as a possible change in behaviour when operating close to phsyical RAM limit due to that."),(0,a.kt)("h3",{id:"nomad-cluster"},"Nomad cluster"),(0,a.kt)("p",null,"Our backend now supports allocating and deploying Nomad jobs for multiple clusters simultaneously - all while keeping existing automations operational. We've taken special precautions\na cluster, as seen by the backend, can be efficiently and easily modified to reflect newly deployed, or changed, hardware. Additionally, we've added support for host volumes inside a Nomad\nallocation - which will be needed for benchmarking UTxO-HD's on-disk solution."))}p.isMDXComponent=!0}}]);