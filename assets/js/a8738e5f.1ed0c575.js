"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[99881],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>d});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),h=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=h(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=h(i),c=n,d=u["".concat(p,".").concat(c)]||u[c]||m[c]||a;return i?r.createElement(d,o(o({ref:t},s),{},{components:i})):r.createElement(d,o({ref:t},s))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var h=2;h<a;h++)o[h]=i[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},67461:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var r=i(87462),n=(i(67294),i(3905));const a={title:"Mithril Team Update",slug:"2023-04-20-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2023-04-20-mithril",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-04-20-mithril.md",source:"@site/blog/2023-04-20-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-04-20T00:00:00.000Z",formattedDate:"April 20, 2023",tags:[{label:"mithril",permalink:"/tags/mithril"}],readingTime:1.245,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-04-20-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/2023-04-21-ledger"},nextItem:{title:"Node API & CLI Team Update",permalink:"/2023-04-20-node-cli-api"}},p={authorsImageUrls:[void 0]},h=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],s={toc:h},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"The Mithril team released a new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/2315.0"},(0,n.kt)("inlineCode",{parentName:"a"},"2315.0"))," distribution that implements the first part of the migration of the aggregator stores along with minor improvements and bug fixes. They finished the migration of the aggregator stores to a relational design by completing the adaptation and migration of the signed entity, signer and single signature stores. They also created a new tick service that provides beacons to other services of the aggregator. Additionally, they started implementing the new new certifier service of the aggregator that is in charge of producing certificates for multi-signatures."),(0,n.kt)("p",null,"Finally, they completed the design and definition of the interfaces that must be implemented to provide certification for a new type of data in a Mithril network."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Released the new distribution ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/releases/tag/2315.0"},(0,n.kt)("inlineCode",{parentName:"a"},"2315.0"))),(0,n.kt)("li",{parentName:"ul"},"Completed the epic that implements a relational store in the aggregator ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/779"},"#779"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the migration/adaptation of the ",(0,n.kt)("inlineCode",{parentName:"li"},"signed_entity")," table ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/816"},"#816")),(0,n.kt)("li",{parentName:"ul"},"Completed the creation of the ",(0,n.kt)("inlineCode",{parentName:"li"},"signer")," table ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/814"},"#814")),(0,n.kt)("li",{parentName:"ul"},"Completed the migration/adaptation of the ",(0,n.kt)("inlineCode",{parentName:"li"},"single_signature")," table ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/829"},"#829")))),(0,n.kt)("li",{parentName:"ul"},"Worked on the epic that designs and implement generic signing/verification of entity services ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/780"},"#780"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the definition of the interface of the generic entity service for signing ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/847"},"#847")),(0,n.kt)("li",{parentName:"ul"},"Worked on the implementation of the ",(0,n.kt)("inlineCode",{parentName:"li"},"Certifier")," service in the aggregator ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/850"},"#850")),(0,n.kt)("li",{parentName:"ul"},"Completed the extension of the ",(0,n.kt)("inlineCode",{parentName:"li"},"SignedEntityType")," type ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/848"},"#848")),(0,n.kt)("li",{parentName:"ul"},"Completed the implementation of the ",(0,n.kt)("inlineCode",{parentName:"li"},"Tick")," service in the aggregator ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/849"},"#849")),(0,n.kt)("li",{parentName:"ul"},"Worked on implementing the signable builder for the ",(0,n.kt)("inlineCode",{parentName:"li"},"Mithril Stake Distribution")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/851"},"#851"))))))}m.isMDXComponent=!0}}]);