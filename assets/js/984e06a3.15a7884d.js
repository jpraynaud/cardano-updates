"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[57724],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return t?r.createElement(h,o(o({ref:n},m),{},{components:t})):r.createElement(h,o({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={title:"Performance & Tracing Update",slug:"2024-07-23-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-07-23-performance-and-tracing",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-07-23-performance-and-tracing.md",source:"@site/blog/2024-07-23-performance-and-tracing.md",title:"Performance & Tracing Update",description:"High level summary",date:"2024-07-23T00:00:00.000Z",formattedDate:"July 23, 2024",tags:[{label:"performance-tracing",permalink:"/tags/performance-tracing"}],readingTime:2.5,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & Tracing Update",slug:"2024-07-23-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-07-24-mithril"},nextItem:{title:"Network Team Update",permalink:"/2024-07-19-network"}},s={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Development",id:"development",level:3},{value:"Workbench",id:"workbench",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Consensus QTAs",id:"consensus-qtas",level:3}],m={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: Release benchmarks for Node ",(0,a.kt)("inlineCode",{parentName:"li"},"9.0"),"; Plutus execution budget scaling benchmarks."),(0,a.kt)("li",{parentName:"ul"},"Development: Improved shutdown behaviour for ",(0,a.kt)("inlineCode",{parentName:"li"},"tx-generator")," merged to ",(0,a.kt)("inlineCode",{parentName:"li"},"master"),". Work on governance action benchmarking workload is ongoing."),(0,a.kt)("li",{parentName:"ul"},"Workbench: Haskell profile content definition merged to ",(0,a.kt)("inlineCode",{parentName:"li"},"master"),"."),(0,a.kt)("li",{parentName:"ul"},"Tracing: Factoring out RTView was merged to ",(0,a.kt)("inlineCode",{parentName:"li"},"master"),". Work on metrics naming ongoing, minimizing migration effort."),(0,a.kt)("li",{parentName:"ul"},"Consensus QTAs: Design for automating and data warehousing ",(0,a.kt)("inlineCode",{parentName:"li"},"beacon")," measurements is complete.")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"Runs and analyses for a full set of release benchmarks have been performed - and published - for Node version ",(0,a.kt)("inlineCode",{parentName:"p"},"9.0.0"),". Comparing with the latest mainnet release ",(0,a.kt)("inlineCode",{parentName:"p"},"8.12.1"),", we could not observe any performance regression. ",(0,a.kt)("inlineCode",{parentName:"p"},"9.0.0")," exhibits\nan improvement in Block Fetch duration, which results in slightly better overall network performance.  "),(0,a.kt)("p",null,"Additionally, we've performed scaling benchmarks of Plutus execution budgets. In these series of benchmarks, we measure the performance impact of changes to those budgets in the protocol parameters. Steps (CPU) and memory budgets\nare scaled independently of each other, and performance testing takes place using Plutus scripts that either are heavy on allocations but light on CPU, or vice versa. These performance tests are meant to explore the headroom of those budgets, taking\ninto account cost model changes, and recent optimization capabilites of the Plutus compiler."),(0,a.kt)("h3",{id:"development"},"Development"),(0,a.kt)("p",null,"Our workload submission service ",(0,a.kt)("inlineCode",{parentName:"p"},"tx-generator")," has been equipped with the ability to handle POSIX signals for graceful shutdown scenarios. Furthermore, as it is highly concurrent, error reporting on a per-thread basis has been added, enhancing feedback from the service.\nAlong with some quality-of-life improvements, these changes have landed in ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),".  "),(0,a.kt)("p",null,"The Conway governance action workloads for benchmarking have completed design phase, and we've settled on an implementation plan. Implementation work itself has started."),(0,a.kt)("h3",{id:"workbench"},"Workbench"),(0,a.kt)("p",null,"Generating the contents for any benchmarking profile has now become a dedicated Haskell tool, ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-profile"),", which has landed in ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),". Adding type safety and a test suite to profile definitions is a major improvement over\nshell code that directly manipulates JSON objects. Furthermore, it makes reliably modifying, or creating, benchmarking profiles much more accessible to engineers outside of our team."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"With factoring out RTView, and making it an opt-in component of the ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-tracer")," build, we've reduced the service's dependency graph significantly. Furthermore, the service has become more lightweight on resources. We'll continue to maintain\nRTView, and guarantee it will remain buildable and usable in the future.  "),(0,a.kt)("p",null,"Aligning metrics naming and semantics of new and legacy tracing is ongoing work. This task is part of a larger endeavour to minimize the effort necessary for users to migrate to the new system."),(0,a.kt)("h3",{id:"consensus-qtas"},"Consensus QTAs"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"beacon"),", which currently measures performance of certain ledger operations on actual workload fragments, is a first step in building a benchmarking framework based on Delta-Q system design and quantitative timeliness agreements. We've finished the\ndesign of how to automate those measurements at sensible points in time, and provide a storage schema which will enable access and analysis that fits with the framwork."))}d.isMDXComponent=!0}}]);