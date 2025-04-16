"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[51402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Performance & Tracing Update",slug:"2025-03-28-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2025-03-28-performance-and-tracing",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2025-03-28-performance-and-tracing.md",source:"@site/blog/2025-03-28-performance-and-tracing.md",title:"Performance & Tracing Update",description:"High level summary",date:"2025-03-28T00:00:00.000Z",formattedDate:"March 28, 2025",tags:[{label:"performance-tracing",permalink:"/tags/performance-tracing"}],readingTime:4.41,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & Tracing Update",slug:"2025-03-28-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2025-03-31-node-cli-api"},nextItem:{title:"SRE Team Update",permalink:"/2025-03-28-sre"}},s={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Preliminary <code>10.3</code> integration",id:"preliminary-103-integration",level:5},{value:"Compiler versions: <code>GHC9.6.5</code> vs. <code>GHC8.10.7</code>",id:"compiler-versions-ghc965-vs-ghc8107",level:5},{value:"Plutus budget scaling",id:"plutus-budget-scaling",level:5},{value:"Runtime system (RTS) settings",id:"runtime-system-rts-settings",level:5},{value:"Development",id:"development",level:3},{value:"Infrastructure",id:"infrastructure",level:3},{value:"New Tracing",id:"new-tracing",level:3}],m={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: Preliminary ",(0,a.kt)("inlineCode",{parentName:"li"},"10.3")," benchmarks; ",(0,a.kt)("inlineCode",{parentName:"li"},"GHC8")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"GHC9")," compiler version comparison; Plutus budget scaling; runtime parameter tuning on ",(0,a.kt)("inlineCode",{parentName:"li"},"GHC9"),"."),(0,a.kt)("li",{parentName:"ul"},"Development: Started new Plutus script calibration tool; maintenance updates to benchmarking profiles."),(0,a.kt)("li",{parentName:"ul"},"Infrastructure: Adjusted tooling to latest Cardano API version; simplification of performance workbench nearing completion."),(0,a.kt)("li",{parentName:"ul"},"New Tracing: Battle-tested metrics monitoring on mainnet; generalized nix service config for ",(0,a.kt)("inlineCode",{parentName:"li"},"cardano-tracer"),". ")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"We've run and analyzed several benchmarks these last two weeks:"),(0,a.kt)("h5",{id:"preliminary-103-integration"},"Preliminary ",(0,a.kt)("inlineCode",{parentName:"h5"},"10.3")," integration"),(0,a.kt)("p",null,"As performance improvement is a stated goal for the ",(0,a.kt)("inlineCode",{parentName:"p"},"10.3")," release, we became involved early in the release cycle. Benchmarking the earliest version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"10.3")," integration branch, we could already\ndetermine that the effort put in has yielded promising results and confirm improvements in both resource usage and block production metrics. A regular release benchmark will be performed, and published, from the final\nrelease tag.  "),(0,a.kt)("h5",{id:"compiler-versions-ghc965-vs-ghc8107"},"Compiler versions: ",(0,a.kt)("inlineCode",{parentName:"h5"},"GHC9.6.5")," vs. ",(0,a.kt)("inlineCode",{parentName:"h5"},"GHC8.10.7")),(0,a.kt)("p",null,"So far, code generation with ",(0,a.kt)("inlineCode",{parentName:"p"},"GHC9.6")," has resulted in a performance regression for block production under heavy load - we've established that in various past benchmarks. The optimization efforts on ",(0,a.kt)("inlineCode",{parentName:"p"},"10.3")," also\nfocused on removing that performance blocker. Benchmarking the integration branch with the newer compiler version has now confirmed it has not only vanished; moreover, code generated with ",(0,a.kt)("inlineCode",{parentName:"p"},"GHC9.6"),"\neven exhibited slightly more favourable performance characteristics. So in all likelihood, Node ",(0,a.kt)("inlineCode",{parentName:"p"},"10.3")," will be the last release to support ",(0,a.kt)("inlineCode",{parentName:"p"},"GHC8.10"),", and we will recommend ",(0,a.kt)("inlineCode",{parentName:"p"},"GHC9.6")," as the default build platform for it."),(0,a.kt)("h5",{id:"plutus-budget-scaling"},"Plutus budget scaling"),(0,a.kt)("p",null,"We've repeated several Plutus budget scaling benchmarks on Node version ",(0,a.kt)("inlineCode",{parentName:"p"},"10.3")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"GHC9.6"),". By scaling execution budgets to 1.5x and 2x their current mainnet values, we can determine the performance impact on the\nnetwork of potential increases of said budgets. We independently measured bumping the steps (CPU) limit with a CPU-intensive script, and bumping the memory limit with a script performing lots of allocations. We could\nobserve the performance impact to correspond linearly with the limit bump in each case. This gives certainty and predictability of the impact when suggesting changes to mainnet protocol parameters.  "),(0,a.kt)("p",null,"Our team presented those findings and the data to the Parameter Comittee for discussion."),(0,a.kt)("h5",{id:"runtime-system-rts-settings"},"Runtime system (RTS) settings"),(0,a.kt)("p",null,"The recommended RTS settings for ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node")," encompass number of CPU cores to use, behaviour of the allocator, and behaviour of the garbage collector. The recommended settings so far are tuned to ",(0,a.kt)("inlineCode",{parentName:"p"},"GHC8.10"),"'s RTS - one\ncannot assume the same settings are optimal for ",(0,a.kt)("inlineCode",{parentName:"p"},"GHC9.6"),"'s RTS, too. So we've started a series of short, exploratory benchmarks comparing a matrix of promising changes to update our recommendation in the future."),(0,a.kt)("h3",{id:"development"},"Development"),(0,a.kt)("p",null,"We've started to develop a new tool that calibrates our Plutus benchmarking scripts given a range of constraints on the expected workload. These entail exhausting a certain budget (block or transaction), or calibrating\nfor a constant number of transactions per block while exhausting available steps, or memory, budget(s). The result of that directly serves as input to our benchmarking profile definition. This tool may also be of wider interest, as it\nallows for modifying various inputs, such as Plutus cost models, or script serializations generated by different compilers or compiler versions. That way, one can compare at a glance how effective a given script makes\nuse of the available budgets, given a specific cost model.  "),(0,a.kt)("p",null,"Additonally, our benchmarking profiles are currently undergoing a maintenance cycle. This means, setups for which motivation has ceased to exist are removed, several are updated to use the Voltaire performance baseline, others\nneed to be tested for their conformity with the Plomin hard-fork protocol updates."),(0,a.kt)("h3",{id:"infrastructure"},"Infrastructure"),(0,a.kt)("p",null,"The extensive work of simplifying the performance workbench is almost finished and about to enter testing phase. We have been moving away from scripting to declarative (Haskell) definitions of all benchmark profiles and workloads in\npast PRs. The simplification work now reaps the benefits of that: We can optimize away many recursive / redundant invocations or nix evaluations, we can collate many nix store paths into just a couple ones, reduce the workbench's\noverall closure size and complexity. Apart from saving significant resources and time for CI runners, this will reduce maintence effort necessary on our end.  "),(0,a.kt)("p",null,"Furthermore, we've done maintenance on our tooling by adjusting to the latest changes in ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-api"),". This included porting the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProtocolParameters")," type and type class instances over to us, as our use case requires\nwe continue supporting it. However, it's considered deprecated in the API, and so this unblocks the team for eventually removing it."),(0,a.kt)("h3",{id:"new-tracing"},"New Tracing"),(0,a.kt)("p",null,"Having addressed all feature and change requests relevant for the Node 10.3 release, we performed thorough mainnet testing of the new system's metrics in a monitoring context. We relied on the extremely diligent and helpful\nfeedback from the SRE team. This enabled us to iron out a couple of remaining inconsistencies - a big shout-out and thank you to John Lotoski.  "),(0,a.kt)("p",null,"Additionally, again with SRE, a nix service configuration (SVC) has been created for ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-tracer")," that was generalized and aligned in structure with the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node")," SVC. It was evolved from the existing\nSVC in our performance workbench, which however was tied tightly to our team's use case. With the general approach we hope other teams, and the community, can reliably and easily set up and deploy ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-tracer"),"."))}p.isMDXComponent=!0}}]);