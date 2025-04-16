"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[75748],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Developer Experience Update",slug:"2023-07-06-developer-experience",authors:"angerman",tags:["devx"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2023-07-06-developer-experience",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-07-06-developer-experience.md",source:"@site/blog/2023-07-06-developer-experience.md",title:"Developer Experience Update",description:"High level summary",date:"2023-07-06T00:00:00.000Z",formattedDate:"July 6, 2023",tags:[{label:"devx",permalink:"/tags/devx"}],readingTime:1.145,hasTruncateMarker:!1,authors:[{name:"Moritz Angermann",title:"Head of Developer Experience",url:"https://github.com/angerman",imageURL:"https://github.com/angerman.png",key:"angerman"}],frontMatter:{title:"Developer Experience Update",slug:"2023-07-06-developer-experience",authors:"angerman",tags:["devx"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/2023-07-07-sre"},nextItem:{title:"DB-sync Team Update",permalink:"/2023-07-04-db-sync"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"build support &amp; maintainance",id:"build-support--maintainance",level:3},{value:"compiler upgrades",id:"compiler-upgrades",level:3},{value:"Hydra Tools",id:"hydra-tools",level:3},{value:"haskell.nix",id:"haskellnix",level:3},{value:"devx",id:"devx",level:3},{value:"upstream tooling",id:"upstream-tooling",level:3}],s={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"The Developer Experience team has been dealing with day-to-day troubleshooting and support of various elements including build failures, compiler upgrades, CI migration from Cicero to Hydra, and Buildkite to GitHub Actions. iohk-nix, haskell.nix, and devx have seen improvements."),(0,a.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,a.kt)("h3",{id:"build-support--maintainance"},"build support & maintainance"),(0,a.kt)("p",null,"The DevX team has helped troubleshoot a few CI issues, and focused on helping to migrate from Cicero to Hydra, as well as from Buildkite to GitHub Actions."),(0,a.kt)("h3",{id:"compiler-upgrades"},"compiler upgrades"),(0,a.kt)("p",null,"Compatibility with 9.6 has been continued and most of our libraries are not 9.6 compatible. Only a few are not, we hope to have this done by the end of the month. We've also started preliminarily adding GHC 9.8 to our infrastructure for early compiler regression tests."),(0,a.kt)("h3",{id:"hydra-tools"},"Hydra Tools"),(0,a.kt)("p",null,"Our repository, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-tools"},"input-output-hk/actions"),", has seen quite some improvements to facility the hydra <-> github integration."),(0,a.kt)("h3",{id:"haskellnix"},"haskell.nix"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/haskell.nix"},"Haskell.nix")," has been maintained and updated with the addition of preliminary GHC 9.8 support."),(0,a.kt)("h3",{id:"devx"},"devx"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/devx"},"devx")," repository has seen significant improvements, including the addition of GitHub Codespaces, and DevContainers. Integrated with our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/actions"},"actions/devx")," GitHub Actions, we have a consistent set of tooling for"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"nix develop shells"),(0,a.kt)("li",{parentName:"ul"},"GitHub CodeSpaces integration"),(0,a.kt)("li",{parentName:"ul"},"VSCode DevContainer support"),(0,a.kt)("li",{parentName:"ul"},"GitHub Actions integration")),(0,a.kt)("h3",{id:"upstream-tooling"},"upstream tooling"),(0,a.kt)("p",null,"Our team remains committed to enhancing upstream tooling, with ongoing contributions to GHC, Cabal, and Nix."))}m.isMDXComponent=!0}}]);