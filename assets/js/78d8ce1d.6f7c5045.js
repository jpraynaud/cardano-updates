"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[73320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"DB Sync Team Update",slug:"2022-11-01-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},o=void 0,s={permalink:"/2022-11-01-db-sync",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2022-11-01-db-sync.md",source:"@site/blog/2022-11-01-db-sync.md",title:"DB Sync Team Update",description:"High level summary",date:"2022-11-01T00:00:00.000Z",formattedDate:"November 1, 2022",tags:[{label:"db-sync",permalink:"/tags/db-sync"}],readingTime:.86,hasTruncateMarker:!1,authors:[{name:"Kostas Dermentzis",title:"Cardano DB-Sync Software Engineer",url:"https://github.com/kderme",imageURL:"https://github.com/kderme.png",key:"kderme"}],frontMatter:{title:"DB Sync Team Update",slug:"2022-11-01-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},prevItem:{title:"System Test Team Update",permalink:"/2022-11-02-system-test"},nextItem:{title:"Hydra Team Update",permalink:"/2022-10-28-hydra"}},l={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Schema simplifications",id:"schema-simplifications",level:3},{value:"Performance",id:"performance",level:3},{value:"Migrations and resyncing",id:"migrations-and-resyncing",level:3},{value:"Release",id:"release",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"The DBSync team is preparing a release which introduces schema simplifications, removes indexes,\nunique and foreign keys. It also provides a way to fix older values and migrates without the need to\nresync from genesis."),(0,a.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,a.kt)("h3",{id:"schema-simplifications"},"Schema simplifications"),(0,a.kt)("p",null,"Indexes, Unique and Foreign keys are removed in order to speedup syncing\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1295"},"#1295"),"\nThe same pr also introduces a different way to rollback, which doesn't rely on foreign keys and\nindexes."),(0,a.kt)("h3",{id:"performance"},"Performance"),(0,a.kt)("p",null,"The DBSync team ran a big number of benchmarks and investigated ways to speedup syncing. A\nconservative number of these will be included in the next release and the rest can be found in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/52/views/7"},"performance view"),"."),(0,a.kt)("h3",{id:"migrations-and-resyncing"},"Migrations and resyncing"),(0,a.kt)("p",null,"The next release will be 13.1.0, it will enable a migration without the need to resync. It will also\nintroduce a procedure that fixes bytes values of Datum and RedeemerData in existing databases\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1294"},"#1294")),(0,a.kt)("h3",{id:"release"},"Release"),(0,a.kt)("p",null,"The release has been mostly cherry-picked from master\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1294"},"#1294")," and its scope can be seen\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/52/views/6"},"release view")))}m.isMDXComponent=!0}}]);