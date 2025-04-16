"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[91760],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,c=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return a?r.createElement(c,o(o({ref:t},h),{},{components:a})):r.createElement(c,o({ref:t},h))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},49627:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2023-02-24-hydra",authors:"ffakenz",tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2023-02-24-hydra",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-02-24-hydra.md",source:"@site/blog/2023-02-24-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-02-24T00:00:00.000Z",formattedDate:"February 24, 2023",tags:[{label:"hydra",permalink:"/tags/hydra"}],readingTime:.93,hasTruncateMarker:!1,authors:[{name:"Franco Testagrossa",title:"Hydra Software Engineer",url:"https://github.com/ffakenz",imageURL:"https://github.com/ffakenz.png",key:"ffakenz"}],frontMatter:{title:"Hydra Team Update",slug:"2023-02-24-hydra",authors:"ffakenz",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/2023-03-02-network"},nextItem:{title:"Mithril Team Update",permalink:"/2023-02-23-mithril"}},u={authorsImageUrls:[void 0]},p=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],h={toc:p},s="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team continue closing many gaps and aligning the\nimplementation with the specification. More over, they have groomed a plan to\nmake Hydra Mainnet compatible. Also, they continue moving forward with the\ninternal auditing and have published some auditing guidelines to receive\ncontributions from the community."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Completed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/452"},"#452")," (what is\nremaining in there)"),(0,n.kt)("li",{parentName:"ul"},"Aligned the Head protocol logic implementation with the specification"),(0,n.kt)("li",{parentName:"ul"},"Completed full minting policy implementation and spec\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/720"},"#720")),(0,n.kt)("li",{parentName:"ul"},"Clarified message authentication with researchers"),(0,n.kt)("li",{parentName:"ul"},"Groomed what is left to do for Mainnet compatibility\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/713"},"#713")," and drafted a\n0.10.0 version"),(0,n.kt)("li",{parentName:"ul"},"Added a tutorial by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/perturbing/"},"@perturbing")," to the\nwebsite ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/docs/tutorial/"},"LINK")),(0,n.kt)("li",{parentName:"ul"},"Published auditing guidelines\n",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/audit-guidelines"},"LINK")),(0,n.kt)("li",{parentName:"ul"},"Made hydra-node work for macos\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/746"},"#746")," and added support\nfor building on aarch64\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/673"},"#673")),(0,n.kt)("li",{parentName:"ul"},"Met with a potential customer of Hydra for Payments")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Have the monthly review meeting incl. the report"),(0,n.kt)("li",{parentName:"ul"},"Have smoke tests fixed and running regularly"),(0,n.kt)("li",{parentName:"ul"},"Release 0.9.0 with updated scripts"),(0,n.kt)("li",{parentName:"ul"},"Redraw transaction graphs for specification")))}m.isMDXComponent=!0}}]);