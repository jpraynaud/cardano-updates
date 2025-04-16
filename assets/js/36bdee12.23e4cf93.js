"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[93179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Network Team Update",slug:"2024-11-08-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2024-11-08-network",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-11-08-network.md",source:"@site/blog/2024-11-08-network.md",title:"Network Team Update",description:"Overview of sprint 74",date:"2024-11-08T00:00:00.000Z",formattedDate:"November 8, 2024",tags:[{label:"network",permalink:"/tags/network"}],readingTime:1.335,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2024-11-08-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/2024-11-13-mithril"},nextItem:{title:"Ledger Team Update",permalink:"/2024-11-06-ledger"}},p={authorsImageUrls:[void 0]},s=[{value:"Overview of sprint 74",id:"overview-of-sprint-74",level:2},{value:"Dropping NonP2P network stack",id:"dropping-nonp2p-network-stack",level:3},{value:"Node-to-Client versions",id:"node-to-client-versions",level:3},{value:"Mithril Design",id:"mithril-design",level:3},{value:"Next Cardano-Node release",id:"next-cardano-node-release",level:3},{value:"Typed-Protocols",id:"typed-protocols",level:4},{value:"Genesis",id:"genesis",level:4},{value:"Connection Manager",id:"connection-manager",level:3},{value:"Outbound Governor",id:"outbound-governor",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview-of-sprint-74"},"Overview of ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/orgs/IntersectMBO/projects/5/views/1?filterQuery=sprint%3A+%22Sprint+74%22"},"sprint 74")),(0,o.kt)("h3",{id:"dropping-nonp2p-network-stack"},"Dropping NonP2P network stack"),(0,o.kt)("p",null,"We are advertising that we will drop the non-p2p network stack.  This will\nhappen after the next hard fork.  Please comment on the PR if this will be\nproblematic for you.  Here's the PR: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/pull/5007"},"ouroboros-network#5007"),"."),(0,o.kt)("h3",{id:"node-to-client-versions"},"Node-to-Client versions"),(0,o.kt)("p",null,"We dropped ",(0,o.kt)("inlineCode",{parentName:"p"},"node-to-client")," versions earlier than version ",(0,o.kt)("inlineCode",{parentName:"p"},"16"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/pull/5002"},"ouroboros-network#5002"),"."),(0,o.kt)("h3",{id:"mithril-design"},"Mithril Design"),(0,o.kt)("p",null,"We completed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/wiki/Reusable-Diffusion-Investigation"},"review")," how to adopt ouroboros-network for\nMithril design.  We started to experiment with ",(0,o.kt)("inlineCode",{parentName:"p"},"ouroboros-network")," in that\ndirection."),(0,o.kt)("h3",{id:"next-cardano-node-release"},"Next Cardano-Node release"),(0,o.kt)("p",null,"The next ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," release will include the following changes from the\nnetworking team:"),(0,o.kt)("h4",{id:"typed-protocols"},"Typed-Protocols"),(0,o.kt)("p",null,"The integration of ",(0,o.kt)("inlineCode",{parentName:"p"},"ouroboros-network-0.18"),", which is using the new\n",(0,o.kt)("inlineCode",{parentName:"p"},"typed-protocols-0.3")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus"),", was merged,\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-consensus/pull/1223"},"ouroboros-consensus#1223"),".  Integration with ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-api"),"\nwas rebased and handed to the release engineer.  Integration with ",(0,o.kt)("inlineCode",{parentName:"p"},"ekg-forward"),"\nwas merged: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ekg-forward/pull/35"},"ekg-forward#35"),"."),(0,o.kt)("h4",{id:"genesis"},"Genesis"),(0,o.kt)("p",null,"The following changes to support Genesis (both creating big ledger peer\nsnapshots & providing them in a topology file)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-api/pull/521"},(0,o.kt)("inlineCode",{parentName:"a"},"cardano-api"),": ",(0,o.kt)("strong",{parentName:"a"},"Added a new query for a snapshot of big ledger peers"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-cli/pull/727"},(0,o.kt)("inlineCode",{parentName:"a"},"cardano-cli"),": ",(0,o.kt)("strong",{parentName:"a"},"Query a node for a snapshot of big ledger peers"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/pull/5787"},(0,o.kt)("inlineCode",{parentName:"a"},"cardano-node"),": ",(0,o.kt)("strong",{parentName:"a"},"Support for big ledger peer snapshot in the topology file")))),(0,o.kt)("h3",{id:"connection-manager"},"Connection Manager"),(0,o.kt)("p",null,"We merged the documentation review of the connection manager, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/pull/5001"},"ouroboros-network#5001"),".\nWe also renamed connection manager methods (as suggested by Neil Davies\n(","[PNSOL]",")): ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/ouroboros-network/pull/5000"},"ouroboros-network#5000"),"."),(0,o.kt)("h3",{id:"outbound-governor"},"Outbound Governor"),(0,o.kt)("p",null,"We started to experiment with using FRP to implement the outbound governor in a way\nthat is both easier to maintain and reason about."))}u.isMDXComponent=!0}}]);