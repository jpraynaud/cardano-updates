"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[1686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Network Team Update",slug:"2024-04-15-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2024-04-15-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-04-18-network.md",source:"@site/blog/2024-04-18-network.md",title:"Network Team Update",description:"High-level overview of sprint 58 and sprint 59",date:"2024-04-18T00:00:00.000Z",formattedDate:"April 18, 2024",tags:[{label:"network",permalink:"/tags/network"}],readingTime:3.22,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2024-04-15-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Performance & Tracing Update",permalink:"/2024-04-19-performance-and-tracing"},nextItem:{title:"Consensus Team Update",permalink:"/2024-04-17-consensus"}},l={authorsImageUrls:[void 0]},p=[{value:"High-level overview of sprint 58 and sprint 59",id:"high-level-overview-of-sprint-58-and-sprint-59",level:2},{value:"Releases",id:"releases",level:3},{value:"Genesis",id:"genesis",level:3},{value:"TxSubmission",id:"txsubmission",level:3},{value:"Churn and EKG metrics",id:"churn-and-ekg-metrics",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Low level details",id:"low-level-details",level:2},{value:"Peer Sharing Testing",id:"peer-sharing-testing",level:3},{value:"EKG / Prometheus Counters",id:"ekg--prometheus-counters",level:3},{value:"Deprecation policy",id:"deprecation-policy",level:4},{value:"Grafana graphs",id:"grafana-graphs",level:4},{value:"Active Peers Metrics",id:"active-peers-metrics",level:5},{value:"Established Peers Metrics",id:"established-peers-metrics",level:5},{value:"Known Peers Metrics",id:"known-peers-metrics",level:5},{value:"Churn Metrics",id:"churn-metrics",level:5}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"high-level-overview-of-sprint-58-and-sprint-59"},"High-level overview of ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/orgs/IntersectMBO/projects/5/views/1?visibleFields=%5B%22Title%22%2C%22Labels%22%2C%22Assignees%22%2C%22Status%22%2C%22Linked+pull+requests%22%2C69151865%2C%22Repository%22%5D&filterQuery=sprint%3A%22Sprint+58%22"},"sprint 58")," and ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/orgs/IntersectMBO/projects/5/views/1?visibleFields=%5B%22Title%22%2C%22Labels%22%2C%22Assignees%22%2C%22Status%22%2C%22Linked+pull+requests%22%2C69151865%2C%22Repository%22%5D&filterQuery=sprint%3A%22Sprint+59%22"},"sprint 59")),(0,o.kt)("h3",{id:"releases"},"Releases"),(0,o.kt)("p",null,"We released ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-node/releases/tag/8.9.1"},(0,o.kt)("inlineCode",{parentName:"a"},"cardano-node-8.9.1")),", and we tagged a soon to be released\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-node/releases/tag/8.9.2"},(0,o.kt)("inlineCode",{parentName:"a"},"cardano-node-8.9.2")),"\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"8.9.2")," release will have a fixed peer sharing support, which we\nincidentally broke in ",(0,o.kt)("inlineCode",{parentName:"p"},"8.9.1"),".  We expanded our test suite to cover discovered\nbugs (see below for more details). Please also see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/IntersectMBO/projects/5/views/18"},"the release\ntab")," in our project to see which PRs / issues were\nincluded in a given release, the following mapping might also be useful:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ouroboros-network-0.13.1.0")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"cardano-node-8.9.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ouroboros-entwork-0.14.0.0")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"cardano-node-8.9.2"))),(0,o.kt)("h3",{id:"genesis"},"Genesis"),(0,o.kt)("p",null,"We continued working on network Genesis support: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/3396"},"ouroboros-network#3396")," - churn policy for Genesis;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4813"},"ouroboros-network#4813")," - outbound governor support for Genesis;"),(0,o.kt)("li",{parentName:"ul"},"support for ",(0,o.kt)("inlineCode",{parentName:"li"},"cardano-cli")," to write a big ledger peers snapshot to disk and\nfor ",(0,o.kt)("inlineCode",{parentName:"li"},"cardano-node")," to pass it to ",(0,o.kt)("inlineCode",{parentName:"li"},"ouroboros-network"),".")),(0,o.kt)("p",null,"As well as a feature required by consensus:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4815"},"ouroboros-network#4815")," - inform consensus about outbound connections state")),(0,o.kt)("h3",{id:"txsubmission"},"TxSubmission"),(0,o.kt)("p",null,"Only a little progress was made due to one of us being on vacation."),(0,o.kt)("h3",{id:"churn-and-ekg-metrics"},"Churn and EKG metrics"),(0,o.kt)("p",null,"While working on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4815"},"ouroboros-network#4815"),", we addressed technical debt\nin churn.  The PR removes implicit synchronisation (in terms of delays) in\nfavour of explicit synchronisation with the outbound governor.   The PR extends\nEKG counters traced by the node.  See below for some graphs."),(0,o.kt)("h3",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"We updated the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node-wiki/wiki/understanding-config-files#the-p2p-topologyjson-file"},"documentation")," on peer sharing, see\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node-wiki/pull/44"},"cardano-node-wiki#44"),"."),(0,o.kt)("h2",{id:"low-level-details"},"Low level details"),(0,o.kt)("h3",{id:"peer-sharing-testing"},"Peer Sharing Testing"),(0,o.kt)("p",null,"We wrote a testing scenario for peer sharing, which simulates a node setup:\n",(0,o.kt)("inlineCode",{parentName:"p"},"A -> B <- C"),", where neither of the nodes ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," have any local roots; they only learn about other nodes through (light) peer sharing.  ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," learns\nabout ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," because they connect to it, while ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," should learn about ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"\nthrough peer sharing.  This test scenario should prevent us from breaking peer sharing in the\nfuture in some obvious ways.  In the future, we will also work on extending our\ntest suite with peer sharing in mind.  See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4839"},"ouroboros-network#4839"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/issues/4841"},"ouroboros-network#4841"),"."),(0,o.kt)("h3",{id:"ekg--prometheus-counters"},"EKG / Prometheus Counters"),(0,o.kt)("p",null,"Note that this is in progress, so some things might still change."),(0,o.kt)("p",null,"We will provide counters for ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," (also known as ",(0,o.kt)("inlineCode",{parentName:"p"},"hot"),") peers,\n",(0,o.kt)("inlineCode",{parentName:"p"},"established")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"hot")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"warm"),") peers and ",(0,o.kt)("inlineCode",{parentName:"p"},"known")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"hot"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"warm")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"cold"),") peers.  This is the same way one specifies targets in the node's\nconfiguration.  In addition, the three groups are split into five categories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ledger peers"),(0,o.kt)("li",{parentName:"ul"},"big ledger peers"),(0,o.kt)("li",{parentName:"ul"},"local root peers"),(0,o.kt)("li",{parentName:"ul"},"bootstrap peers"),(0,o.kt)("li",{parentName:"ul"},"shared peers")),(0,o.kt)("p",null,"In addition, we also provide a counter for root peers, which counts ledger peers,\nbig ledger peers, local roots and bootstrap peers, which correspond to the\nroot peers target ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetNumberOfRootPeers")," in the configuration."),(0,o.kt)("p",null,"We also provide counters for ongoing promotions and demotions."),(0,o.kt)("p",null,"Ledger peers are affected by ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetNumberOf{Known,Established,Active}Peers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetNumberOfRootPeers"),".\nThe gap between ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetNumberOfRootPeers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetNumberOfKnownPeers")," will\nbe filled either with ledger peers or peers, which the node discovered through\npeer sharing.\nBig ledger peers are affected by ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetNumberOf{Known,Established,Active}BigLedgerPeers"),"."),(0,o.kt)("p",null,"Below are some Grafana graphs from an experimental ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," branch:"),(0,o.kt)("h4",{id:"deprecation-policy"},"Deprecation policy"),(0,o.kt)("p",null,"The previous ",(0,o.kt)("inlineCode",{parentName:"p"},"hot"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"warm")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"cold")," EKG counters will also be available,\nalthough deprecated after the new ones are released.  Sometime in the future\nthey will be removed."),(0,o.kt)("h4",{id:"grafana-graphs"},"Grafana graphs"),(0,o.kt)("p",null,"The screenshots are from a node, which is configured without any bootstrap\npeers, which is why all bootstrap metrics are ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),".  The node is configured with the following targets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "TargetNumberOfRootPeers": 60,\n  "TargetNumberOfKnownPeers": 100,\n  "TargetNumberOfEstablishedPeers": 40,\n  "TargetNumberOfActivePeers": 15,\n  "TargetNumberOfKnownBigLedgerPeers": 15,\n  "TargetNumberOfEstablishedBigLedgerPeers": 10,\n  "TargetNumberOfActiveBigLedgerPeers": 5,\n')),(0,o.kt)("p",null,"and has a small number of local root peers and one peer in its ",(0,o.kt)("inlineCode",{parentName:"p"},"publicRoots"),"\nconfiguration."),(0,o.kt)("h5",{id:"active-peers-metrics"},"Active Peers Metrics"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"P2P relays",src:n(29569).Z,width:"2074",height:"960"})),(0,o.kt)("h5",{id:"established-peers-metrics"},"Established Peers Metrics"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"P2P relays",src:n(60655).Z,width:"2073",height:"1211"})),(0,o.kt)("h5",{id:"known-peers-metrics"},"Known Peers Metrics"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"P2P relays",src:n(42134).Z,width:"2081",height:"938"})),(0,o.kt)("h5",{id:"churn-metrics"},"Churn Metrics"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"P2P relays",src:n(83775).Z,width:"2087",height:"770"})))}c.isMDXComponent=!0},29569:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2024-04-15-active-peers-1048a75d3033f9e32ea51c0b817e0cd1.png"},83775:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2024-04-15-churn-d816c6f07c8e3ee8d28de78989e2ed65.png"},60655:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2024-04-15-established-peers-fbb9abf021fc68a884b86b8b3fd415d4.png"},42134:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2024-04-15-known-peers-f59994b77d7964be1157d0ed55b21261.png"}}]);