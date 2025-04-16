"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[43396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Benchmarking -- Node 10.1.4",slug:"2025-01-performance-10.1.4",authors:"mgmeier",tags:["benchmarking-reports"],hide_table_of_contents:!1},i=void 0,l={permalink:"/reports/2025-01-performance-10.1.4",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/reports/2025-01-performance-10.1.4.md",source:"@site/reports/2025-01-performance-10.1.4.md",title:"Benchmarking -- Node 10.1.4",description:"Setup",date:"2025-01-10T12:16:13.000Z",formattedDate:"January 10, 2025",tags:[{label:"benchmarking-reports",permalink:"/reports/tags/benchmarking-reports"}],readingTime:2.605,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Benchmarking -- Node 10.1.4",slug:"2025-01-performance-10.1.4",authors:"mgmeier",tags:["benchmarking-reports"],hide_table_of_contents:!1},prevItem:{title:"Benchmarking -- Node 10.2.1",permalink:"/reports/2025-02-performance-10.2.1"},nextItem:{title:"Benchmarking -- Node 10.1.1",permalink:"/reports/2024-10-performance-10.1.1"}},s={authorsImageUrls:[void 0]},c=[{value:"Setup",id:"setup",level:2},{value:"Observations",id:"observations",level:2},{value:"Resource Usage",id:"resource-usage",level:3},{value:"Forging Loop",id:"forging-loop",level:3},{value:"Peer propagation",id:"peer-propagation",level:3},{value:"End-to-end propagation",id:"end-to-end-propagation",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Attachments",id:"attachments",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"10.1.1")," - baseline from a previous mainnet release"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"10.1.4")," - the current mainnet release")),(0,a.kt)("p",null,"For this benchmark, we're gathering various metrics under 2 different workloads:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"value-only"),": Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Plutus"),": Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.")),(0,a.kt)("p",null,"Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs\nwere performed in the Conway era."),(0,a.kt)("h2",{id:"observations"},"Observations"),(0,a.kt)("p",null,"These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  "),(0,a.kt)("h3",{id:"resource-usage"},"Resource Usage"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"CPU 85% spans slightly increase by 6% or ~0.2 slots (26% or ~2.9 slots under Plutus workload)."),(0,a.kt)("li",{parentName:"ol"},"We can observe a tiny increase in memory usage by 1-2% (132-160 MiB).")),(0,a.kt)("p",null,"Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness."),(0,a.kt)("h3",{id:"forging-loop"},"Forging Loop"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Under value workload, Ledger Ticking and Self Adoption exhibit a very slight increase (2ms each)."),(0,a.kt)("li",{parentName:"ol"},"Block Context Acquisition has improved by 2ms."),(0,a.kt)("li",{parentName:"ol"},"Under Plutus workload, there are no significant changes to forger metrics.")),(0,a.kt)("p",null,"The metric ",(0,a.kt)("em",{parentName:"p"},"'Slot start to announced'")," (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header."),(0,a.kt)("h3",{id:"peer-propagation"},"Peer propagation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"There's a minor increase of 1% (3ms) in Block Fetch duration under value workload only."),(0,a.kt)("li",{parentName:"ol"},"Under Plutus workload, we can measure a small improvement by 2% for adoption times on the peers.")),(0,a.kt)("h3",{id:"end-to-end-propagation"},"End-to-end propagation"),(0,a.kt)("p",null,"This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  "),(0,a.kt)("p",null,"As a result of the above, on ",(0,a.kt)("inlineCode",{parentName:"p"},"10.1.4")," we can observe:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"a tiny increase in cluster adoption times of 1%-2% in the 80th centile and above under value workload."),(0,a.kt)("li",{parentName:"ol"},"an improvement in cluster adoption times of 3%-4% in the tail end (95th centile and above) under Plutus workload.")),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"For ",(0,a.kt)("inlineCode",{parentName:"li"},"10.1.4"),", we could not detect any regressions or performance risks."),(0,a.kt)("li",{parentName:"ol"},"All increases or decreases in forger and peer metrics are 3ms and less. This indicates network performance of ",(0,a.kt)("inlineCode",{parentName:"li"},"10.1.4")," will very closely match that of ",(0,a.kt)("inlineCode",{parentName:"li"},"10.1.1")," and subsequent patch releases."),(0,a.kt)("li",{parentName:"ol"},"There's no significant change in the resource usage pattern. The increased CPU 85% spans tend to barely manifest when the system is under heavy load (value workload); as such, they pose no cause for concern. ")),(0,a.kt)("h2",{id:"attachments"},"Attachments"),(0,a.kt)("p",null,"Full report for ",(0,a.kt)("em",{parentName:"p"},"value-only workload"),", PDF downloadable ",(0,a.kt)("a",{target:"_blank",href:n(88625).Z},"here"),"."),(0,a.kt)("p",null,"Full report for ",(0,a.kt)("em",{parentName:"p"},"Plutus workload"),", PDF downloadable ",(0,a.kt)("a",{target:"_blank",href:n(2313).Z},"here"),".  "),(0,a.kt)("p",null,"NB. The benchmarks for ",(0,a.kt)("inlineCode",{parentName:"p"},"10.1.1")," were performed on tag ",(0,a.kt)("inlineCode",{parentName:"p"},"10.0.0-pre"),". The minor version bump did not include changes relevant to performance; thus, measurements taken on ",(0,a.kt)("inlineCode",{parentName:"p"},"10.0.0-pre")," remain a valid baseline."))}d.isMDXComponent=!0},2313:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/release-10.1.4.plutus-6272430f9ef6c8d53cfeaacced5bf04c.pdf"},88625:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/release-10.1.4.value-only-7e81a4debde7bea0f719279ffb8ebd51.pdf"}}]);