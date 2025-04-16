"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[50919],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(a),m=n,c=h["".concat(s,".").concat(m)]||h[m]||d[m]||i;return a?r.createElement(c,o(o({ref:t},p),{},{components:a})):r.createElement(c,o({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2023-05-19-hydra",authors:"ffakenz",tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2023-05-19-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-05-19-hydra.md",source:"@site/blog/2023-05-19-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-05-19T00:00:00.000Z",formattedDate:"May 19, 2023",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:1.045,hasTruncateMarker:!1,authors:[{name:"Franco Testagrossa",title:"Hydra Software Engineer",url:"https://github.com/ffakenz",imageURL:"https://github.com/ffakenz.png",key:"ffakenz"}],frontMatter:{title:"Hydra Team Update",slug:"2023-05-19-hydra",authors:"ffakenz",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2023-05-24-node-cli-api"},nextItem:{title:"Consensus Team Update",permalink:"/2023-05-17-consensus"}},s={authorsImageUrls:[void 0]},u=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],p={toc:u},h="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,'This week, the Hydra team has worked on several fronts, including improvements of their CI speed, logs, documentation pages and adding the support for timed transactions. They also updated the "Coding Standards" for the project, improved the troubleshooting page on their website and wrote a section about how to operate a hydra node. Finally the team completed a feature request that allows clients to submit and validate transactions to their hydra nodes using time validity ranges, ensuring isomorphism with L1.'),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complete validation of timed transactions feature ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/196"},"#196"),"."),(0,n.kt)("li",{parentName:"ul"},"Write ","\u201c","ops","\u201d"," instructions and troubleshooting ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/569"},"#569")," and improve logs."),(0,n.kt)("li",{parentName:"ul"},"Remove ",(0,n.kt)("inlineCode",{parentName:"li"},"--ledger-genesis")," argument to hydra-node options ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/863"},"#863"),"."),(0,n.kt)("li",{parentName:"ul"},"Fix issue with garbage collected caches by using a new cardano-scaling.cachix in more workflows ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/877"},"#877"),"."),(0,n.kt)("li",{parentName:"ul"},"Use nix to build test binaries to increase CI speed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/867"},"#867"),"."),(0,n.kt)("li",{parentName:"ul"},"Updated our ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/wiki/Coding-Standards"},"Coding Standards"),".")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Monthly report & review meeting."),(0,n.kt)("li",{parentName:"ul"},'Have a first end-to-end journey for external commits implementing "Option A" ',(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/215"},"#215"),"."),(0,n.kt)("li",{parentName:"ul"},"Integrate spanish translation ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/866"},"#866"),"."),(0,n.kt)("li",{parentName:"ul"},"Improve and provide regular benchmarks for Hydra ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/186"},"#186"),"."),(0,n.kt)("li",{parentName:"ul"},"Allow commit transactions with multiple UTxO ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/774"},"#774"),"."),(0,n.kt)("li",{parentName:"ul"},"Explored stateless observation and refined hydra explorer ticket ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/696"},"#696"),".")))}d.isMDXComponent=!0}}]);