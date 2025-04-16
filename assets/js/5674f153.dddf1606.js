"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[14392],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(a),m=n,h=s["".concat(i,".").concat(m)]||s[m]||c[m]||o;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={title:"SRE Team Update",slug:"2023-09-15-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2023-09-15-sre",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-09-15-sre.md",source:"@site/blog/2023-09-15-sre.md",title:"SRE Team Update",description:"High level summary",date:"2023-09-15T00:00:00.000Z",formattedDate:"September 15, 2023",tags:[{label:"sre",permalink:"/tags/sre"}],readingTime:1.055,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2023-09-15-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/2023-09-15-network"},nextItem:{title:"DB-sync Team Update",permalink:"/2023-09-14-db-sync"}},i={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Capkgs",id:"capkgs",level:3},{value:"Cardano-ops",id:"cardano-ops",level:3},{value:"Cardano-parts",id:"cardano-parts",level:3},{value:"Cardano-perf",id:"cardano-perf",level:3},{value:"Cardano-playground",id:"cardano-playground",level:3},{value:"Cardano-world",id:"cardano-world",level:3}],d={toc:u},s="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The SRE team continues work on cardano environment improvements and general environment maintenance."),(0,n.kt)("p",null,"Some notable recent updates or improvements include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sanchonet environment was updated to 8.3.0-pre."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts"},"Cardano-parts")," now enables downstream consumers to spin up multiple cardano-networks per repository, an example of which is ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/blob/main/flake/colmena.nix#L89-L108"},"here"),".")),(0,n.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,n.kt)("h3",{id:"capkgs"},"Capkgs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a readme, optimize flake inputs, improve nu and ruby parsing scripts: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/capkgs/compare/f3dcffb...c2c7680"},"capkgs-compare"))),(0,n.kt)("h3",{id:"cardano-ops"},"Cardano-ops"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adjust mainnet p2p relays to ~100%, with a legacy canary: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ops/commit/d3cce2585fae6a52ff5833373137af3cddbc6710"},"cardano-ops-commit"))),(0,n.kt)("h3",{id:"cardano-parts"},"Cardano-parts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Utilize content addressed binaries to significantly improve eval, build and devShell performance: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/8"},"cardano-parts-pull-8")),(0,n.kt)("li",{parentName:"ul"},"Add an aws flakeModule for obtaining ec2 specs, fix node.socket devShell error: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/10"},"cardano-parts-pull-10")),(0,n.kt)("li",{parentName:"ul"},"Fix warns thrown during some builds and devShell usage: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/11"},"cardano-parts-pull-11")),(0,n.kt)("li",{parentName:"ul"},"Add flakeModules and nixosModules in preparation for cardano-node grouped deployments: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/12"},"cardano-parts-pull-12")),(0,n.kt)("li",{parentName:"ul"},"Enable group deployments by: adding several module, profile and role nixosModules; updating flakeModules; adding sops age secrets handling: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/13"},"cardano-parts-pull-13"))),(0,n.kt)("h3",{id:"cardano-perf"},"Cardano-perf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modify the wireguard network from mesh to star, enable ICMP, enable Nomad raw_exec and add hydraJobs: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-perf/compare/9f9917c...7fc1b4c"},"cardano-perf-compare"))),(0,n.kt)("h3",{id:"cardano-playground"},"Cardano-playground"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Define preliminary cardano-world networks on cardano-playground: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-playground/pull/1"},"cardano-playground"))),(0,n.kt)("h3",{id:"cardano-world"},"Cardano-world"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rotate KES on preview and preprod, purge unused subnets, adjust explorer rate limits: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/compare/306ef6c...e9b2ed2"},"cardano-world-compare")),(0,n.kt)("li",{parentName:"ul"},"Update sanchonet network to 8.3.0: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/compare/master...sanchonet-updated"},"cardano-world-compare"))))}c.isMDXComponent=!0}}]);