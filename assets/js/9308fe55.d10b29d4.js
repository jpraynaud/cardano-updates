"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[18355],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"Ledger Team Update",slug:"2024-03-27-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/2024-03-27-ledger",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2024-03-27-ledger.md",source:"@site/blog/2024-03-27-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2024-03-27T00:00:00.000Z",formattedDate:"March 27, 2024",tags:[{label:"ledger",permalink:"/tags/ledger"}],readingTime:.81,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2024-03-27-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2024-03-28-hydra"},nextItem:{title:"Mithril Team Update",permalink:"/2024-03-27-mithril"}},p={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Conway",id:"conway",level:3},{value:"Testing",id:"testing",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Releasing",id:"releasing",level:3}],u={toc:s},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"We continued focusing on adding tests and improving the test frameworks, including the quality of the generated data used in tests."),(0,a.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,a.kt)("h3",{id:"conway"},"Conway"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4205"},"pull-4205")," - Disable CC ratification when number of members is below ",(0,a.kt)("inlineCode",{parentName:"li"},"ppCommitteeMinSize")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4169"},"pull-4169")," - Add ",(0,a.kt)("inlineCode",{parentName:"li"},"GovInfoEvent")," and add event testing capabilities to ",(0,a.kt)("inlineCode",{parentName:"li"},"ImpTest")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4208"},"pull-4208")," - Remove missingScriptsSymmetricDifference")),(0,a.kt)("h3",{id:"testing"},"Testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4121"},"pull-4121")," - Newconstraints phase3, Add newtypes: Size, SizeSpec and class Sized."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4197"},"pull-4197")," - add unsafeMkProposals to be used for testing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4200"},"pull-4200")," - Fix ",(0,a.kt)("inlineCode",{parentName:"li"},"prop_GOV")," so that it runs again"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4216"},"pull-4216")," - improve the ",(0,a.kt)("inlineCode",{parentName:"li"},"GOV")," generator to generate more interesting signals")),(0,a.kt)("h3",{id:"improvements"},"Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4195"},"pull-4195")," - Fix Haddocks CI"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4175"},"pull-4175")," - Set the ",(0,a.kt)("inlineCode",{parentName:"li"},"column-limit")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"fourmolu")," config"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4210"},"pull-4210")," - Remove small steps test folder")),(0,a.kt)("h3",{id:"releasing"},"Releasing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-ledger/pull/4206"},"pull-4206")," - Update hackage flake")))}c.isMDXComponent=!0}}]);