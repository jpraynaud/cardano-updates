"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[64350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Benchmarking -- Node 9.0.0",slug:"2024-07-performance-9.0.0",authors:"mgmeier",tags:["benchmarking-reports"],hide_table_of_contents:!1},l=void 0,i={permalink:"/reports/2024-07-performance-9.0.0",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/reports/2024-07-performance-9.0.0.md",source:"@site/reports/2024-07-performance-9.0.0.md",title:"Benchmarking -- Node 9.0.0",description:"Setup",date:"2024-03-13T09:34:49.000Z",formattedDate:"March 13, 2024",tags:[{label:"benchmarking-reports",permalink:"/reports/tags/benchmarking-reports"}],readingTime:3.11,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Benchmarking -- Node 9.0.0",slug:"2024-07-performance-9.0.0",authors:"mgmeier",tags:["benchmarking-reports"],hide_table_of_contents:!1},prevItem:{title:"Benchmarking -- Node 8.12.1",permalink:"/reports/2024-06-performance-8.12.1"},nextItem:{title:"Benchmarking -- Node 9.2.0",permalink:"/reports/2024-09-performance-9.2.0"}},s={authorsImageUrls:[void 0]},c=[{value:"Setup",id:"setup",level:2},{value:"Observations",id:"observations",level:2},{value:"Resource Usage",id:"resource-usage",level:3},{value:"Forging Loop",id:"forging-loop",level:3},{value:"Peer propagation",id:"peer-propagation",level:3},{value:"End-to-end propagation",id:"end-to-end-propagation",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Contact",id:"contact",level:2},{value:"Attachments",id:"attachments",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"8.12.1")," - baseline from a previous mainnet release"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"9.0.0")," - the current mainnet release")),(0,o.kt)("p",null,"For each version, we're gathering various metrics under 2 different workloads:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"value-only"),": Each transaction consumes 2 inputs and creates 2 outputs, changing the UTxO set. This workload produces full blocks (> 80kB) exclusively."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Plutus"),": Each transaction contains a Plutus script exhausting the per-tx execution budget. This workload produces small blocks (< 3kB) exclusively.")),(0,o.kt)("p",null,"Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs\nwere performed in the Conway era."),(0,o.kt)("h2",{id:"observations"},"Observations"),(0,o.kt)("p",null,"These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  "),(0,o.kt)("h3",{id:"resource-usage"},"Resource Usage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Under value workload Process and Mutator CPU usage are slightly higher on ",(0,o.kt)("inlineCode",{parentName:"li"},"9.0")," - 7% - 8% (4% each under Plutus workload). GC CPU is increased by 11%, but decreases under Putus workload by 3%."),(0,o.kt)("li",{parentName:"ol"},"Only under value workload, Allocation Rate and Minor GCs increase by 5% and the live GC dataset grows by 3%. Heap size is constant."),(0,o.kt)("li",{parentName:"ol"},"CPU 85% spans are 8% shorter (3% under Plutus workload).")),(0,o.kt)("p",null,"Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness."),(0,o.kt)("h3",{id:"forging-loop"},"Forging Loop"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Mempool Snapshotting and Self Adoption time on the block producer increase very slightly under value workload - 2ms (or 3%) each."),(0,o.kt)("li",{parentName:"ol"},"Under Plutus workload, however, a decrease in Self Adoption time by 2ms (or 4%) is the only significant change in the forging loop.")),(0,o.kt)("p",null,"The metric ",(0,o.kt)("em",{parentName:"p"},"'Slot start to announced'")," (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header."),(0,o.kt)("h3",{id:"peer-propagation"},"Peer propagation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Block Fetch duration is 21ms faster (6%) - 7ms or 5% under Plutus workload."),(0,o.kt)("li",{parentName:"ol"},"Fetched to Sending increases slightly by 3ms (7%) - only under value workload."),(0,o.kt)("li",{parentName:"ol"},"Adoption times on the peers increase slightly by 4ms (5%) - under Plutus workload, however, they are 3ms (6%) faster.")),(0,o.kt)("h3",{id:"end-to-end-propagation"},"End-to-end propagation"),(0,o.kt)("p",null,"This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Under value workload / full blocks on ",(0,o.kt)("inlineCode",{parentName:"li"},"9.0"),", we can observe a 4% - 5% improvement of cluster adoption times in the 80th centile and above."),(0,o.kt)("li",{parentName:"ol"},"Under Plutus workload / small blocks, the corresponding improvement is 5% - 6%."),(0,o.kt)("li",{parentName:"ol"},"The main contributing factor is the improvement in Block Fetch duration.")),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Network performance clearly improves by ~%5 for 80% to full cluster adoption - independent of workload."),(0,o.kt)("li",{parentName:"ul"},"RAM usage is unchanged on ",(0,o.kt)("inlineCode",{parentName:"li"},"9.0"),". The slight rise in CPU usage is expected, given improved network performance, and does not pose cause for concern."),(0,o.kt)("li",{parentName:"ul"},"We have not observed any performance regression being introduced in ",(0,o.kt)("inlineCode",{parentName:"li"},"9.0.0."),".")),(0,o.kt)("p",null,"NB. These benchmarks were performed in the Conway ledger era. As such, they do not cover the one-time performance cost of transitioning from Babbage and enabling the new features of the Conway ledger."),(0,o.kt)("h2",{id:"contact"},"Contact"),(0,o.kt)("p",null,"As for publishing such benchmarking results, we are aware that more context and detail may be needed with regard to specfic metrics or benchmarking methodology. "),(0,o.kt)("p",null,"We are still looking to gather questions, both general and specific, so that we can provide a suitable FAQ and possibly improve presentation in the future."),(0,o.kt)("h2",{id:"attachments"},"Attachments"),(0,o.kt)("p",null,"Full report for ",(0,o.kt)("em",{parentName:"p"},"value-only workload"),", PDF downloadable ",(0,o.kt)("a",{target:"_blank",href:n(27243).Z},"here"),"."),(0,o.kt)("p",null,"Full report for ",(0,o.kt)("em",{parentName:"p"},"Plutus workload"),", PDF downloadable ",(0,o.kt)("a",{target:"_blank",href:n(87728).Z},"here"),"."))}d.isMDXComponent=!0},87728:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/release-9.0.0.plutus-8385e89a67774584329c93e59dcfe545.pdf"},27243:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/release-9.0.0.value-only-8ef8064d6bb04de733985e12e9a9e5ea.pdf"}}]);