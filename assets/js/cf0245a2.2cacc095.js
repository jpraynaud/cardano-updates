"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[9502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||i;return r?o.createElement(d,a(a({ref:t},u),{},{components:r})):o.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={title:"Network Team Update",slug:"2024-07-19-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},a=void 0,s={permalink:"/2024-07-19-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-07-19-network.md",source:"@site/blog/2024-07-19-network.md",title:"Network Team Update",description:"High-level overview of sprint 66",date:"2024-07-19T00:00:00.000Z",formattedDate:"July 19, 2024",tags:[{label:"network",permalink:"/tags/network"}],readingTime:1.745,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2024-07-19-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Performance & Tracing Update",permalink:"/2024-07-23-performance-and-tracing"},nextItem:{title:"Node API & CLI Team Update",permalink:"/2024-07-19-node-cli-api"}},l={authorsImageUrls:[void 0]},p=[{value:"High-level overview of sprint 66",id:"high-level-overview-of-sprint-66",level:2},{value:"Introduction to Ouroboros Network, NWG, part 1",id:"introduction-to-ouroboros-network-nwg-part-1",level:3},{value:"Introduction to Ouroboros Network, NWG, part 2",id:"introduction-to-ouroboros-network-nwg-part-2",level:3},{value:"Tx-Submission",id:"tx-submission",level:3},{value:"Genesis integration",id:"genesis-integration",level:3},{value:"Mithril Integration",id:"mithril-integration",level:3},{value:"Smaller tasks",id:"smaller-tasks",level:2},{value:"Open-Source contributions",id:"open-source-contributions",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview-of-sprint-66"},"High-level overview of ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/orgs/IntersectMBO/projects/5/views/1?filterQuery=sprint%3A%22Sprint+66%22"},"sprint 66")),(0,n.kt)("p",null,"We held The Network Working Group (NWG) in the last sprint.  Below, we share\nrecordings of this and earlier NWG meetings, which introduce basic notions of\n",(0,n.kt)("inlineCode",{parentName:"p"},"ouroboros-network"),".  These recordings should be accessible to a technical\naudience."),(0,n.kt)("h3",{id:"introduction-to-ouroboros-network-nwg-part-1"},"Introduction to Ouroboros Network, NWG, part 1"),(0,n.kt)("iframe",{src:"https://drive.google.com/file/d/1J_o2iGy4jeIR6X1x9D6p_nHKLCNjgX6h/preview",width:"640",height:"480"}),(0,n.kt)("h3",{id:"introduction-to-ouroboros-network-nwg-part-2"},"Introduction to Ouroboros Network, NWG, part 2"),(0,n.kt)("iframe",{src:"https://drive.google.com/file/d/1CsqC1R_GMliWkKJaeSCf-xrZG6F6yvMv/preview",width:"640",height:"480"}),(0,n.kt)("iframe",{src:"https://drive.google.com/file/d/1QV46QqmpkfPVcoKxueYHg4Qe7rPQzOer/preview",width:"640",height:"480"}),(0,n.kt)("h3",{id:"tx-submission"},"Tx-Submission"),(0,n.kt)("p",null,"We continued working on the new design of tx-submission.  We progressed in writing\na new tx-submission server (inbound side of tx-submission protocol)\ninstrumented by decision logic.  The next step is writing a simulation that\nruns N-pairs of ",(0,n.kt)("inlineCode",{parentName:"p"},"client"),"-",(0,n.kt)("inlineCode",{parentName:"p"},"server")," communications in which the same decision logic governs all ",(0,n.kt)("inlineCode",{parentName:"p"},"server"),"s - emulating the behaviour of ",(0,n.kt)("inlineCode",{parentName:"p"},"cardano-node")," once the new tx-submission is integrated.  For more details, see\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/3311"},"ouroboros-network#3311")),(0,n.kt)("h3",{id:"genesis-integration"},"Genesis integration"),(0,n.kt)("p",null,"All outstanding PRs related to Genesis have been reviewed and accepted.  Soon\nthey will be merged."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Big Ledger Peer Targets for Genesis")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4832"},"ouroboros-network#4832")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Feed peer selection governor with big ledger peers obtained from a snapshot")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4850"},"ouroboros-network#4850")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Introduction of serialization instances in support of ledger peer snapshot")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4851"},"ouroboros-network#4851")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Verification of big ledger peer snapshot file")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4888"},"ouroboros-network#4888"))),(0,n.kt)("h3",{id:"mithril-integration"},"Mithril Integration"),(0,n.kt)("p",null,"We presented ideas on how to run mithril functionalities with\n",(0,n.kt)("inlineCode",{parentName:"p"},"cardano-node")," while taking into account the risks that such integration would impose on\nthe system.  The technical description will be part of a CIP, which will then go to\nthe Technical Steering Committee (TSC) for an evaluation."),(0,n.kt)("h2",{id:"smaller-tasks"},"Smaller tasks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Small improvements and bug fix in the Signal API"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4909"},"ouroboros-network#4909")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Improved memory foot-print of tests on ghc-9.8"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4912"},"ouroboros-network#4912")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Error cardano-ping whenever there's a decoding error"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/pull/4916"},"ouroboros-network#4916"))),(0,n.kt)("h3",{id:"open-source-contributions"},"Open-Source contributions"),(0,n.kt)("p",null,"We found out and fixed a bug in the ",(0,n.kt)("inlineCode",{parentName:"p"},"iproute")," parser of ",(0,n.kt)("inlineCode",{parentName:"p"},"IPv4")," addresses:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Check that IPv4 addresses terminate"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kazu-yamamoto/iproute/pull/63"},"iproute#63")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"IPv4 address with mask should not contain a white space"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kazu-yamamoto/iproute/pull/64"},"iproute#64"))))}m.isMDXComponent=!0}}]);