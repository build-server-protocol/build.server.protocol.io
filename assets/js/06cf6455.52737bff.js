"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||p;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,a=new Array(p);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<p;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),i=n(3366),p=(n(7294),n(3905)),a=["components"],o={id:"cpp",title:"C++ Extension",sidebar_label:"cpp"},s=void 0,l={unversionedId:"extensions/cpp",id:"extensions/cpp",title:"C++ Extension",description:"The following section contains C++-specific extensions to the build server",source:"@site/target/docs/extensions/cpp.md",sourceDirName:"extensions",slug:"/extensions/cpp",permalink:"/docs/extensions/cpp",draft:!1,editUrl:"https://github.com/build-server-protocol/build-server-protocol/edit/master/docs/extensions/cpp.md",tags:[],version:"current",frontMatter:{id:"cpp",title:"C++ Extension",sidebar_label:"cpp"},sidebar:"docs",previous:{title:"Build Server Discovery",permalink:"/docs/overview/server-discovery"},next:{title:"Java",permalink:"/docs/extensions/java"}},c={},d=[{value:"BSP version",id:"bsp-version",level:2},{value:"BSP Server remote interface",id:"bsp-server-remote-interface",level:2},{value:"BuildTargetCppOptions: request",id:"buildtargetcppoptions-request",level:3},{value:"CppOptionsParams",id:"cppoptionsparams",level:4},{value:"CppOptionsResult",id:"cppoptionsresult",level:4},{value:"CppOptionsItem",id:"cppoptionsitem",level:4},{value:"BuildTargetData kinds",id:"buildtargetdata-kinds",level:2},{value:"CppBuildTarget",id:"cppbuildtarget",level:3},{value:"CppBuildTarget",id:"cppbuildtarget-1",level:4}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The following section contains C++-specific extensions to the build server\nprotocol."),(0,p.kt)("h2",{id:"bsp-version"},"BSP version"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"2.1.0")),(0,p.kt)("h2",{id:"bsp-server-remote-interface"},"BSP Server remote interface"),(0,p.kt)("h3",{id:"buildtargetcppoptions-request"},"BuildTargetCppOptions: request"),(0,p.kt)("p",null,"The build target cpp options request is sent from the client to the server to\nquery for the list of compiler options necessary to compile in a given list of\ntargets."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"method: ",(0,p.kt)("inlineCode",{parentName:"li"},"buildTarget/cppOptions")),(0,p.kt)("li",{parentName:"ul"},"params: ",(0,p.kt)("inlineCode",{parentName:"li"},"CppOptionsParams")),(0,p.kt)("li",{parentName:"ul"},"result: ",(0,p.kt)("inlineCode",{parentName:"li"},"CppOptionsResult"))),(0,p.kt)("h4",{id:"cppoptionsparams"},"CppOptionsParams"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CppOptionsParams {\n  /** The targets for which the options are requested. */\n  targets: BuildTargetIdentifier[];\n}\n")),(0,p.kt)("h4",{id:"cppoptionsresult"},"CppOptionsResult"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CppOptionsResult {\n  /** The list of options for each target. */\n  items: CppOptionsItem[];\n}\n")),(0,p.kt)("h4",{id:"cppoptionsitem"},"CppOptionsItem"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CppOptionsItem {\n  /** The target identifier for which the options are requested. */\n  target: BuildTargetIdentifier;\n\n  /** Attributes added in the given order to COPTS\n   * before compiling the target.\n   * For example: -Iexternal/gtest/include */\n  copts: string[];\n\n  /** Attributes prepended with -D\n   * and added to the compile command line\n   * For example: BOOST_FALLTHROUGH */\n  defines: string[];\n\n  /** Attributes added to the linker command\n   * For example: -pthread */\n  linkopts: string[];\n\n  /** Create a shared library.\n   * The presence of this flag means that linking occurs with the -shared flag */\n  linkshared?: boolean;\n}\n")),(0,p.kt)("h2",{id:"buildtargetdata-kinds"},"BuildTargetData kinds"),(0,p.kt)("h3",{id:"cppbuildtarget"},"CppBuildTarget"),(0,p.kt)("p",null,"This structure is embedded in\nthe ",(0,p.kt)("inlineCode",{parentName:"p"},"data?: BuildTargetData")," field, when\nthe ",(0,p.kt)("inlineCode",{parentName:"p"},"dataKind")," field contains ",(0,p.kt)("inlineCode",{parentName:"p"},'"cpp"'),"."),(0,p.kt)("h4",{id:"cppbuildtarget-1"},"CppBuildTarget"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"CppBuildTarget")," is a basic data structure that contains c++-specific\nmetadata, specifically compiler reference."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CppBuildTarget {\n  /** The c++ version this target is supposed to use.\n   * For example: C++11 */\n  version?: string;\n\n  /** The type of compiler this target is supposed to use.\n   * For example: gcc */\n  compiler?: string;\n\n  /** Uri representating path to the c compiler.\n   * For example: file:///usr/bin/gcc */\n  cCompiler?: URI;\n\n  /** Uri representating path to the c++ compiler.\n   * For example: file:///usr/bin/g++ */\n  cppCompiler?: URI;\n}\n")))}m.isMDXComponent=!0}}]);