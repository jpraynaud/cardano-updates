"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[47605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Network Team Update",slug:"2023-09-01-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2023-09-01-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-09-01-network.md",source:"@site/blog/2023-09-01-network.md",title:"Network Team Update",description:"High-level overview of sprint 43",date:"2023-09-01T00:00:00.000Z",formattedDate:"September 1, 2023",tags:[{label:"network",permalink:"/tags/network"}],readingTime:2.765,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2023-09-01-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/2023-09-01-ledger"},nextItem:{title:"SRE Team Update",permalink:"/2023-09-01-sre"}},l={authorsImageUrls:[void 0]},p=[{value:"High-level overview of sprint 43",id:"high-level-overview-of-sprint-43",level:2},{value:"Progress on P2P addoption",id:"progress-on-p2p-addoption",level:3},{value:"SPO relays",id:"spo-relays",level:4},{value:"IOG relays",id:"iog-relays",level:4},{value:"Detailed description",id:"detailed-description",level:2},{value:"Peer Sharing",id:"peer-sharing",level:2},{value:"Async Demotion Test Fix",id:"async-demotion-test-fix",level:2}],u={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"high-level-overview-of-sprint-43"},"High-level overview of ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/orgs/input-output-hk/projects/19/views/16?filterQuery=sprint%3A%22sprint+43%22"},"sprint 43")),(0,o.kt)("p",null,"In this sprint, we received contributions from ",(0,o.kt)("a",{parentName:"p",href:"https://cardanofoundation.org/"},"CF")," & ",(0,o.kt)("a",{parentName:"p",href:"https://galois.com/"},"Galois"),".  Karl Knutsson\n(",(0,o.kt)("a",{parentName:"p",href:"https://cardanofoundation.org/"},"CF"),") has addressed various issues regarding peer churning in P2P, timeouts\nand our ",(0,o.kt)("inlineCode",{parentName:"p"},"WireShark")," dissector.  While the ",(0,o.kt)("a",{parentName:"p",href:"https://galois.com/"},"Galois")," developers focused on\naddressing issues from their review last year. See below for more details."),(0,o.kt)("p",null,"We continued working on bootstrap peers ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4661"},"ouroboros-network-#4661"),"."),(0,o.kt)("p",null,"We refactored our test suites: they are split into ",(0,o.kt)("inlineCode",{parentName:"p"},"io-tests")," which require to\nbe run natively on all platforms (these tests mostly contain tests that\nrequire ",(0,o.kt)("inlineCode",{parentName:"p"},"IO")," system calls) and ",(0,o.kt)("inlineCode",{parentName:"p"},"sim-tests")," which are platform independent.  We\nrun ",(0,o.kt)("inlineCode",{parentName:"p"},"io-tests")," on all supported platforms (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"x86_64-linux"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"x86-64-darwin"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"aarch64-darwin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"x86_64-w64-mingw32")," (Windows)) natively.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"sim-tests")," are not executed on ",(0,o.kt)("inlineCode",{parentName:"p"},"Windows")," due to memory limitations on\nGitHub Actions runners. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4653"},"ouroboros-network-#4653")),(0,o.kt)("p",null,"We also started rebasing ",(0,o.kt)("inlineCode",{parentName:"p"},"typed-protocols")," refactoring branches."),(0,o.kt)("p",null,"Marcin was appointed as the ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," release engineer for the ",(0,o.kt)("inlineCode",{parentName:"p"},"8.4.0-pre"),"\nversion.  So far he integrated ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-ledger-conway-1.8")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"ouroboros-network-0.9.1.0")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-api"),".  Once we will have an integration branch for ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-ledger-conway-1.8")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus")," packages can be released\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"CHaP")," and PRs can be merged once they go through review & CI."),(0,o.kt)("p",null,"We also fixed some smaller issues regarding peer sharing (both were discovered\nby Karl from ",(0,o.kt)("a",{parentName:"p",href:"https://cardanofoundation.org/"},"CF"),"). More details are included below."),(0,o.kt)("h3",{id:"progress-on-p2p-addoption"},"Progress on P2P addoption"),(0,o.kt)("h4",{id:"spo-relays"},"SPO relays"),(0,o.kt)("p",null,"There are currently ~2000 relays running P2P\nenabled nodes that belong to 557 pools with a combined stake of 7900Mil Ada. On\n16th of August it was ~1700 relays, 531 pools with a combined stake of 7700Mil\nAda."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"P2P relays",src:n(86597).Z,width:"2034",height:"1588"})),(0,o.kt)("p",null,"The following graphs show several different versions of relays running on the mainnet.  The\ngreen line ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeToNodeVersionV10.True")," denotes P2P relays, which slowly\nincrease over time.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"V9")," and earlier versions of the ",(0,o.kt)("inlineCode",{parentName:"p"},"node-to-node"),"\nthe protocol indicates nodes version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.35.x")," or earlier.\n",(0,o.kt)("img",{alt:"node versions",src:n(31567).Z,width:"2038",height:"1594"})),(0,o.kt)("p",null,"Data has been kindly provided by ",(0,o.kt)("a",{parentName:"p",href:"https://cardanofoundation.org/"},"CF")," and their mainnet monitoring\ninfrastructure."),(0,o.kt)("h4",{id:"iog-relays"},"IOG relays"),(0,o.kt)("p",null,"As of this week, 90% of IOG relays are running a P2P setup. In the next sprint all\nIOG relays will be running P2P."),(0,o.kt)("h2",{id:"detailed-description"},"Detailed description"),(0,o.kt)("p",null,"In this sprint, we got a few contributions from ",(0,o.kt)("a",{parentName:"p",href:"https://cardanofoundation.org/"},"CF"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Karl made peer churning mechanism less aggressive ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4656"},"ouroboros-network-#4656"),"; and"),(0,o.kt)("li",{parentName:"ul"},"he added timeouts for idle states in ",(0,o.kt)("inlineCode",{parentName:"li"},"ChainSync")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"KeepAlive"),"\nminiprotocols.  These timeouts help a node remove idle connections from the\nresponder (server) side ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4648"},"ouroboros-network-#4648"),"."),(0,o.kt)("li",{parentName:"ul"},"he improved the ",(0,o.kt)("inlineCode",{parentName:"li"},"WireShark")," dissector by adding support for the ",(0,o.kt)("inlineCode",{parentName:"li"},"peer-sharing")," mini-protocol ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4656"},"ouroboros-network-#4656"),".")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://galois.com/"},"Galois")," has been making progress in addressing some of the issues they raised in their review (last year):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mark Tullsen (",(0,o.kt)("a",{parentName:"li",href:"https://galois.com/"},"Galois"),") has been working on refactoring the main entry function of P2P ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4661"},"ouroboros-network-#4661")," (in review);"),(0,o.kt)("li",{parentName:"ul"},"Sam Cowger (",(0,o.kt)("a",{parentName:"li",href:"https://galois.com/"},"Galois"),") has been reviewing all use cases of ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"unsafe")," calls\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4661"},"ouroboros-network-#4661")," (in review).")),(0,o.kt)("h2",{id:"peer-sharing"},"Peer Sharing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Light peer sharing is only enabled when peer sharing is turned on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4652"},"ouroboros-network-#4652"),";"),(0,o.kt)("li",{parentName:"ul"},"Handshake incorrectly reports peer sharing value.  It's supposed to relay the\nremote value, but instead, it returns the local value. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4642"},"ouroboros-network-#4642")," (in review).")),(0,o.kt)("h2",{id:"async-demotion-test-fix"},"Async Demotion Test Fix"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We fixed an async demotion test failure which turned out to be a weakness of\nthe test itself rather than a bug in the connection manager. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4655"},"ouroboros-network-#4655"))))}h.isMDXComponent=!0},86597:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-08-31-p2p-relays-8e5be189ad8437375c5067026c003556.png"},31567:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-08-31-relay-versions-0a8d445e1b0f3a793ccdd94f4aacd421.png"}}]);