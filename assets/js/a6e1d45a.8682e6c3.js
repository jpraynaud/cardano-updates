"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[8737],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(a),m=n,c=h["".concat(p,".").concat(m)]||h[m]||d[m]||i;return a?r.createElement(c,o(o({ref:t},s),{},{components:a})):r.createElement(c,o({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},30221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2023-10-27-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2023-10-27-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-10-27-hydra.md",source:"@site/blog/2023-10-27-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-10-27T00:00:00.000Z",formattedDate:"October 27, 2023",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.895,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-10-27-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Goedel Team Update",permalink:"/2023-10-27-goedel"},nextItem:{title:"Network Team Update",permalink:"/2023-10-27-network"}},p={authorsImageUrls:[void 0]},u=[{value:"High-level summary",id:"high-level-summary",level:3},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:3},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:3}],s={toc:u},h="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team fixed the ",(0,n.kt)("inlineCode",{parentName:"p"},"gen-hydra-keys")," command to avoid\noverwriting existing keys, and resolved issues related to the rewritten\n",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-tui"),'. They also worked on a \\"dirt road\\" implementation for the\n\\"Ignored init tx\\" notification, improving the robustness of the system.'),(0,n.kt)("p",null,"The team finalized preparations for the Cardano Summit presentation, including\nimplementation of the ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-poll")," example DApp."),(0,n.kt)("p",null,'If you happen to read this and attend the Summit in Dubai, make sure to check\nout our Masterclass about \\"Developing Hydra + Mithril for Scaling Cardano\\" on\nFriday, November 3 at 14:00-15:30 local time in the \\"Al Dar\\" room!'),(0,n.kt)("h3",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix ",(0,n.kt)("inlineCode",{parentName:"li"},"gen-hydra-keys")," command to not overwrite existing keys\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1136"},"#1136")),(0,n.kt)("li",{parentName:"ul"},"Fixed the rewritten ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-tui"),(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1113"},"#1113"),(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1137"},"#1137")),(0,n.kt)("li",{parentName:"ul"},"Finalized cardano summit preparation\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1109"},"#1109")),(0,n.kt)("li",{parentName:"ul"},"Implemented the ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-poll")," example DApp ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra-poll"},"link to\nrepository")),(0,n.kt)("li",{parentName:"ul"},'Dirt road implementation for \\"Ignored init tx\\" notification\n',(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/529"},"#529"))),(0,n.kt)("h3",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Attend cardano summit and deliver presentation"),(0,n.kt)("li",{parentName:"ul"},"Clarify / close user created issues"),(0,n.kt)("li",{parentName:"ul"},"Build ",(0,n.kt)("inlineCode",{parentName:"li"},"aarch64-darwin")," binaries in CI")))}d.isMDXComponent=!0}}]);