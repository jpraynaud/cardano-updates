"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[46800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Performance & tracing update",slug:"2023-07-12-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,c={permalink:"/2023-07-12-performance-and-tracing",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-07-12-performance-and-tracing.md",source:"@site/blog/2023-07-12-performance-and-tracing.md",title:"Performance & tracing update",description:"High level summary",date:"2023-07-12T00:00:00.000Z",formattedDate:"July 12, 2023",tags:[{label:"performance-tracing",permalink:"/tags/performance-tracing"}],readingTime:2.29,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & tracing update",slug:"2023-07-12-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/2023-07-12-consensus"},nextItem:{title:"Crypto Team Update",permalink:"/2023-07-07-crypto"}},l={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Infrastructure",id:"infrastructure",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Nomad backend",id:"nomad-backend",level:3}],m={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: The peformance investigation into the compiler switch to GHC9 is ongoing. Additionally, a roadmap for implementing Consensus QTAs has been developed."),(0,a.kt)("li",{parentName:"ul"},"Infrastructure: Our workbench has undergone some refactoring to seamlessly integrate its profiles into all available backends."),(0,a.kt)("li",{parentName:"ul"},"Tracing: Optimization of the new tracing system is ongoing and yielding good performance results."),(0,a.kt)("li",{parentName:"ul"},"Nomad backend: We developed a new feature for the nomad backend which allows pinning deployments to specific machines.")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"Our analysis of the GHC9 build of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node")," has produced several locations in the code base where the new compiler seems to miss opportunities for optimization. Our hypothesis is, that those can account for the difference in resource usage we observe when benchmarking with a full cluster run. Instructing the compiler on how to perform the optimizations which GHC8 apparently applied out of the box requires further investigation.  "),(0,a.kt)("p",null,"In an effort to define Quantitative Timeliness Agreements (QTAs) on a per-component basis, we have coordinated with the Consensus team and developed a roadmap for providing those on consensus level. Making use of the insight that system-level benchmarks allow, we intend to set up and calibrate a benchmark that can reliably predict a regression or optimization for select metrics before needing full integration into ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node"),". This will help tremendously in various ways: catching regressions much earlier, localizing them much easier, avoiding repeated component integration and much shorter feedback cycle."),(0,a.kt)("h3",{id:"infrastructure"},"Infrastructure"),(0,a.kt)("p",null,"We have worked on seamless integration of our benchmarking profiles into the many available backends that the workbench provides. The goal was to be backend-agnostic, to guarantee that all benchmarking run artifacts be structurally identical as far as their file name, format and location are concerned. This lead to refactoring work and has already landed in ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),"."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"Much effort went into further optimization of the new tracing system. After working on configuration to align both new and legacy tracing system with regard to their trace frequencies, we could uncover some increase in resource usage. This occurred for corner cases under very heavy load. These cases have been addressed already, and do now surpass the legacy tracing system in terms of performance."),(0,a.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,a.kt)("p",null,"For reliable benchmarking results it is vital to introduce as few confounding factors as possible when performing runs. This includes hardware and network topology. The nomad backend has been outfitted with a mechanism to pin the nomad job for some node in our benhcmarking cluster to a specific machine instance. This greatly increases confidence in the metrics observed from a run.  "),(0,a.kt)("p",null,"Furthermore this feature will detect any change in the underlying hardware or topology so it can be taken into account. The new feature has been merged to ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),"."))}d.isMDXComponent=!0}}]);