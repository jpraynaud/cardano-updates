"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[37221],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>d});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=u(i),c=n,d=h["".concat(p,".").concat(c)]||h[c]||m[c]||a;return i?r.createElement(d,l(l({ref:t},s),{},{components:i})):r.createElement(d,l({ref:t},s))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[h]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<a;u++)l[u]=i[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},73760:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=i(87462),n=(i(67294),i(3905));const a={title:"Mithril Team Update",slug:"2023-07-27-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},l=void 0,o={permalink:"/2023-07-27-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-07-27-mithril.md",source:"@site/blog/2023-07-27-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-07-27T00:00:00.000Z",formattedDate:"July 27, 2023",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.715,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-07-27-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/2023-07-28-hydra"},nextItem:{title:"Consensus Team Update",permalink:"/2023-07-26-consensus"}},p={authorsImageUrls:[void 0]},u=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],s={toc:u},h="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"The Mithril team launched ",(0,n.kt)("strong",{parentName:"p"},"Mithril protocol\u2019s mainnet beta"),": the ",(0,n.kt)("inlineCode",{parentName:"p"},"release-mainnet")," network is now open for signer registrations, and its genesis certificate has been created. The team is monitoring the network, and expects it to start producing certificates during the next Cardano epoch. "),(0,n.kt)("p",null,"They have released a new distribution ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/2329.0"},(0,n.kt)("inlineCode",{parentName:"a"},"2329.0")),", which is running on the ",(0,n.kt)("inlineCode",{parentName:"p"},"release-mainnet")," network. They also kept working on the implementation of the stress test tool for benchmarking the aggregator. The team kept working on the refactoring of the serialization/deserialization of the entities of the cryptographic library. Additionally, they completed the cleanup of the legacy store adapters in the aggregator."),(0,n.kt)("p",null,"Finally, they have worked on enhancing the documentation for ",(0,n.kt)("a",{parentName:"p",href:"https://mithril.network/doc/manual/getting-started/SPO-on-boarding-guide"},"onboarding SPOs")," and setting up a ",(0,n.kt)("a",{parentName:"p",href:"https://mithril.network/doc/manual/getting-started/run-signer-node"},"Mithril signer"),", and fixing installation bugs of the binary artifacts produced in the CI."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Created the dev blog post ",(0,n.kt)("a",{parentName:"li",href:"https://mithril.network/doc/dev-blog/2023/07/21/mainnet-beta-launch"},"Mithril Protocol\u2019s Mainnet Beta Launch")),(0,n.kt)("li",{parentName:"ul"},"Released the new distribution ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/releases/tag/2329.0"},(0,n.kt)("inlineCode",{parentName:"a"},"2329.0"))),(0,n.kt)("li",{parentName:"ul"},"Closed the epic that prepares the Mithril infrastructure for ",(0,n.kt)("inlineCode",{parentName:"li"},"mainnet")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/767"},"#767"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Deploy 'mainnet' infrastructure")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/988"},"#988")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Handle Secrets management")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/989"},"#989")))),(0,n.kt)("li",{parentName:"ul"},"Worked on the epic ",(0,n.kt)("inlineCode",{parentName:"li"},"Release 'mainnet' Mithril network")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/918"},"#918"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Prepare SPO on-boarding guide")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1049"},"#1049")))),(0,n.kt)("li",{parentName:"ul"},"Worked on the epic ",(0,n.kt)("inlineCode",{parentName:"li"},"Benchmark performances of Mithril Aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/904"},"#904"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Design & implement basic stress test tool for aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/991"},"#991")))),(0,n.kt)("li",{parentName:"ul"},"Worked on optimizations:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Enhance the configuration of Mithril relay")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1080"},"#1080")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Remove legacy store adapters from aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1053"},"#1053")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Add a 'sign' sub-command to 'genesis' command in aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1081"},"#1081")))),(0,n.kt)("li",{parentName:"ul"},"Worked on refactoring:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Refactor (de)serialization of crypto entities")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/668"},"#668")))),(0,n.kt)("li",{parentName:"ul"},"Worked on documentation:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Enhance 'Run a Mithril Signer node (SPO)' guide")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1055"},"#1055")))),(0,n.kt)("li",{parentName:"ul"},"Worked on bugs:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Shared library error in CI binaries")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1073"},"#1073")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Debian package does not install cleanly on older ubuntu versions")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/834"},"#834")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Aggregator panics with new (de)serialization of 'ProtocolVerificationKey'")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1083"},"#1083"))))))}m.isMDXComponent=!0}}]);