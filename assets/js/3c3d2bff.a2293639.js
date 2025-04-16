"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[49706],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>y});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(i),h=a,y=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return i?n.createElement(y,o(o({ref:t},c),{},{components:i})):n.createElement(y,o({ref:t},c))}));function y(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},46019:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));const r={title:"SECP bindings Security Issue Report",slug:"2023-08-17-secp-issue",authors:"iquerejeta",tags:["crypto","incident"],hide_table_of_contents:!1},o=void 0,s={permalink:"/2023-08-17-secp-issue",editUrl:"https://github.com/intersectmbo/cardano-updates/tree/main/blog/2023-08-17-secp-security-issue-report.md",source:"@site/blog/2023-08-17-secp-security-issue-report.md",title:"SECP bindings Security Issue Report",description:"Security Issue Report: SECP256k1 bug",date:"2023-08-17T00:00:00.000Z",formattedDate:"August 17, 2023",tags:[{label:"crypto",permalink:"/tags/crypto"},{label:"incident",permalink:"/tags/incident"}],readingTime:3.3,hasTruncateMarker:!1,authors:[{name:"I\xf1igo Querejeta Azurmendi",title:"Cardano Lead Cryptography Engineer",url:"https://github.com/iquerejeta",imageURL:"https://github.com/iquerejeta.png",key:"iquerejeta"}],frontMatter:{title:"SECP bindings Security Issue Report",slug:"2023-08-17-secp-issue",authors:"iquerejeta",tags:["crypto","incident"],hide_table_of_contents:!1},prevItem:{title:"DB-sync Team Update",permalink:"/2023-08-17-db-sync"},nextItem:{title:"Node API & CLI Team Update",permalink:"/2023-08-15-node-cli-api"}},l={authorsImageUrls:[void 0]},u=[{value:"Security Issue Report: SECP256k1 bug",id:"security-issue-report-secp256k1-bug",level:2},{value:"Summary of Issue",id:"summary-of-issue",level:3},{value:"Criticality Level",id:"criticality-level",level:4},{value:"What Action was Taken",id:"what-action-was-taken",level:4},{value:"Potential Effect",id:"potential-effect",level:4},{value:"Actual Effect",id:"actual-effect",level:4},{value:"Ongoing Mitigations Needed, if any",id:"ongoing-mitigations-needed-if-any",level:4},{value:"Responsibility for Mitigations",id:"responsibility-for-mitigations",level:4},{value:"Detailed description of Incident",id:"detailed-description-of-incident",level:3},{value:"Recommendations",id:"recommendations",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"security-issue-report-secp256k1-bug"},"Security Issue Report: SECP256k1 bug"),(0,a.kt)("p",null,"Date Occurred: July 15, 2022\nSeverity:  Potentially Very High if exploited on Mainnet\nAuthors: I\xf1igo Querejeta Azurmendi"),(0,a.kt)("p",null,"Date of Report: August 17, 2023"),(0,a.kt)("h3",{id:"summary-of-issue"},"Summary of Issue"),(0,a.kt)("h4",{id:"criticality-level"},"Criticality Level"),(0,a.kt)("p",null,"Actually low (since the issue was detected prior to deployment) but potentially very high if it had been deployed to mainnet\nContext"),(0,a.kt)("p",null,"New SECP256k1 Plutus bindings were being introduced in order to support interoperability with other major chains, such as Bitcoin and Ethereum.  The intention was to deploy these as part of the Vasil hard-fork. The bindings were considered to be a low-security risk since the underlying library functions were well tested and had been deployed on other blockchains.\nHow was the Issue Detected"),(0,a.kt)("p",null,"The issue was detected via specific End-to-End tests that had been commissioned.  It was (accidentally) triggered on the Cardano Testnet before a fix could be deployed there."),(0,a.kt)("h4",{id:"what-action-was-taken"},"What Action was Taken"),(0,a.kt)("p",null,"The Cardano Testnet was permanently halted, and new test environments were deployed (Preview and Pre-Prod).\nFixes were applied to prevent the use of the primitives.\nA full security audit was carried out on the bindings.\nThe rollout of the primitives was postponed to a new hard fork (Valentine)"),(0,a.kt)("h4",{id:"potential-effect"},"Potential Effect"),(0,a.kt)("p",null,"The potential effect was that an adversary might be able to craft invalid Plutus transactions to crash any node, requiring execution of the Cardano disaster recovery plan to revert to a safe state and bypass the transaction."),(0,a.kt)("h4",{id:"actual-effect"},"Actual Effect"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delay to the Vasil hard-fork"),(0,a.kt)("li",{parentName:"ul"},"Temporary removal of SECP256k1 primitives"),(0,a.kt)("li",{parentName:"ul"},"Additional hard-fork to introduce SECP256k1 primitives")),(0,a.kt)("h4",{id:"ongoing-mitigations-needed-if-any"},"Ongoing Mitigations Needed, if any"),(0,a.kt)("p",null,"None"),(0,a.kt)("h4",{id:"responsibility-for-mitigations"},"Responsibility for Mitigations"),(0,a.kt)("p",null,"Core team"),(0,a.kt)("h3",{id:"detailed-description-of-incident"},"Detailed description of Incident"),(0,a.kt)("p",null,"New Plutus ",(0,a.kt)("strong",{parentName:"p"},"secp256k1")," cryptographic primitives for Plutus v2 failed to apply the necessary validity checks on the input data, meaning that the primitives could theoretically be used in an unsafe environment.  The vulnerability was present in recent node versions (1.35.0 onwards), including ones deployed to Cardano Testnet."),(0,a.kt)("p",null,"The problem was not in the deserialization functions of the underlying library (Bitcoin's library) but rather that the Haskell functions that implemented the Plutus builtins were not calling them correctly.  In particular, the library functions were designed to take structured data as input. However, the Haskell FFI implementation that was produced for the Plutus builtins allowed a caller to pass in (possibly) unstructured data. There were no checks that these data were structured in the correct way.  This issue was detected during End-to-End testing."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bitcoin-core/secp256k1/blob/master/include/secp256k1.h#L518"},"This")," is the ECDSA signature verification algorithm that was used. It takes a SECP256k1_pubkey as input. That type is an opaque type with an ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bitcoin-core/secp256k1/blob/master/include/secp256k1.h#L61"},"expected")," structure: a parsed and valid public key.  It was not immediately obvious that structured data needed to be passed to allow the function to be used safely."),(0,a.kt)("li",{parentName:"ul"},"The same happened with the Schnorr ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bitcoin-core/secp256k1/blob/master/include/secp256k1_schnorrsig.h#L170"},"verification function"),". It takes as input a SECP256k1_xonly_pubkey, which is again an ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bitcoin-core/secp256k1/blob/master/include/secp256k1_extrakeys.h#L10"},"opaque structure")," that holds a parsed and valid public key.")),(0,a.kt)("p",null,"The FFI skipped checks over these structured keys and directly passed the raw bytes that were given as arguments. If an adversary were to pass in data that was not properly structured, then it could result in unexpected behavior of the library. This could perhaps translate into an adversary being able to crash the nodes that ran these functions.  All nodes in the network could be crashed by a single transaction that would then be executed repeatedly, so stalling the network until the disaster recovery process was initiated."),(0,a.kt)("p",null,"The fix was addressed in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-base/pull/289"},"this")," PR. It consisted of using the external representation that the deserialization function expects and running the deserialization prior to signature verification.  This was audited by security experts."),(0,a.kt)("h3",{id:"recommendations"},"Recommendations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check all new Plutus bindings for correct use."),(0,a.kt)("li",{parentName:"ul"},"Audit all new Plutus built-in bindings."),(0,a.kt)("li",{parentName:"ul"},"Continue to develop specific End-to-End tests for all new Plutus features."),(0,a.kt)("li",{parentName:"ul"},'Do not assume that any existing library functions are "safe". Treat all external calls circumspectly.')))}p.isMDXComponent=!0}}]);