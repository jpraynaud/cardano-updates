"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[54176],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>c});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(i),d=a,c=s["".concat(p,".").concat(d)]||s[d]||h[d]||r;return i?n.createElement(c,l(l({ref:t},m),{},{components:i})):n.createElement(c,l({ref:t},m))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=i[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},87628:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));const r={title:"Mithril Team Update",slug:"2023-06-15-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},l=void 0,o={permalink:"/2023-06-15-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-06-15-mithril.md",source:"@site/blog/2023-06-15-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-06-15T00:00:00.000Z",formattedDate:"June 15, 2023",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.795,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-06-15-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-06-16-hydra"},nextItem:{title:"Consensus Team Update",permalink:"/2023-06-14-consensus"}},p={authorsImageUrls:[void 0]},u=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],m={toc:u},s="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(s,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,a.kt)("p",null,"The Mithril team completed the implementation of the new sub-command for restoring a Mithril stake distribution in the client. They also updated the client\u2019s developer documentation and architecture documentation, and did some refactoring on the client and its dependency injection mechanism. Additionally, they completed and deployed infrastructure enhancements on the test Mithril networks. They also completed the performance tests of the new stake distribution computation on the Cardano mainnet."),(0,a.kt)("p",null,"Finally, the team worked on fixing a bug on the client multi-platform test, a bug on the aggregator state machine, and some flakiness on the CI."),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Completed on the epic that designs and implements generic signing/verification of entity services ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/780"},"#780"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Create the sub-command for 'Mithril Stake Distribution' in client")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/896"},"#896")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Adapt end to end tests to handle new types of data")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/899"},"#899")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Update client documentation")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/897"},"#897")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Update architecture documentations for new types of data")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/898"},"#898")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Refactoring client")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/960"},"#960")))),(0,a.kt)("li",{parentName:"ul"},"Worked on the epic that prepares the Mithril infrastructure for ",(0,a.kt)("inlineCode",{parentName:"li"},"mainnet")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/767"},"#767"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Enhance terraform infrastructure")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/930"},"#930")))),(0,a.kt)("li",{parentName:"ul"},"Completed the epic that implements the computation of the stake distribution for ",(0,a.kt)("inlineCode",{parentName:"li"},"mainnet")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/880"},"#880"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Check performance impact of new stake distribution command on the 'mainnet'")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/962"},"#962")))),(0,a.kt)("li",{parentName:"ul"},"Worked on the epic ",(0,a.kt)("inlineCode",{parentName:"li"},"Prepare Mithril Signer deployment model for SPO")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/862"},"#862"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Design recommended deployment model for SPOs on 'mainnet' and  'preview'/'preprod'")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/961"},"#961")))),(0,a.kt)("li",{parentName:"ul"},"Worked on bugs and optimizations:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Aggregator does not always detect new immutable file")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/953"},"#953")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"CI tests fail with Rust '1.70.0'")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/958"},"#958")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"End to end tests are flaky")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/954"},"#954")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Certificate dates in metadata are not on the same timezone")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/946"},"#946")),(0,a.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Refactor 'MithrilStakeDistribution' entity")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/967"},"#967")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Fix 'Mithril Client multi-platform test' with new client interface")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/956"},"#956")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Enhance 'ImmutableDigesterError::NotEnoughImmutable' error")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/969"},"#969")),(0,a.kt)("li",{parentName:"ul"},"Completed the issue ",(0,a.kt)("inlineCode",{parentName:"li"},"Client 'snapshot download' command fails with option '--download-dir'")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/979"},"#979"))))))}h.isMDXComponent=!0}}]);