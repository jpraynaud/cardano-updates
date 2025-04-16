"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[28348],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,h=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},63962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2024-07-17-hydra",authors:["noonio"],tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2024-07-17-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-07-17-hydra.md",source:"@site/blog/2024-07-17-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2024-07-17T00:00:00.000Z",formattedDate:"July 17, 2024",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.93,hasTruncateMarker:!1,authors:[{name:"Noon van der Silk",title:"Software Engineering Lead",url:"https://github.com/noonio",imageURL:"https://github.com/noonio.png",key:"noonio"}],frontMatter:{title:"Hydra Team Update",slug:"2024-07-17-hydra",authors:["noonio"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/2024-07-19-node-cli-api"},nextItem:{title:"Ledger Team Update",permalink:"/2024-07-17-ledger"}},c={authorsImageUrls:[void 0]},d=[{value:"High-level summary",id:"high-level-summary",level:3},{value:"What did the team achieve?",id:"what-did-the-team-achieve",level:3},{value:"What&#39;s next?",id:"whats-next",level:3}],p={toc:d},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"high-level-summary"},"High-level summary"),(0,r.kt)("p",null,"This week, the Hydra team made significant progress on incremental decommits\nby closing the last gaps and cleaning up the specification. They collected\nscenarios and prepared for incremental commits, updated dependencies for\ncompatibility with cardano-node 9.0.0, and continued tidying up documentation.\nWork continued on an easy spin-up of the getting-started demo via\nprocess-compose. Additionally, the team onboarded a new contributor and held\nan early design meeting about payment channels and Blockfrost. They also\nrefined the SDK wallet idea."),(0,r.kt)("h3",{id:"what-did-the-team-achieve"},"What did the team achieve?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Incremental decommit progress: closed last gaps, cleanup specification ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1483"},"#1483")),(0,r.kt)("li",{parentName:"ul"},"Collected scenarios and preparing for incremental commit ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1484"},"#1484")),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies, compatibility cardano-node 9.0.0 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1481"},"#1481")),(0,r.kt)("li",{parentName:"ul"},"Continued documentation tidyups"),(0,r.kt)("li",{parentName:"ul"},"WIP easy spin-up of the getting-started demo via process-compose ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/pull/1503"},"#1503")),(0,r.kt)("li",{parentName:"ul"},"Onboarded new contributor"),(0,r.kt)("li",{parentName:"ul"},"Early design meeting about payment channels and Blockfrost ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1305"},"#1305")),(0,r.kt)("li",{parentName:"ul"},"SDK wallet idea refinement ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/1509"},"#1509"))),(0,r.kt)("h3",{id:"whats-next"},"What's next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Merge and release incremental decommit"),(0,r.kt)("li",{parentName:"ul"},"Continued work on incremental commit"),(0,r.kt)("li",{parentName:"ul"},"Support Hydra demo at Rare Evo"),(0,r.kt)("li",{parentName:"ul"},"Have a Head open on ",(0,r.kt)("inlineCode",{parentName:"li"},"preview")," to see it working through the upcoming hard fork")))}m.isMDXComponent=!0}}]);