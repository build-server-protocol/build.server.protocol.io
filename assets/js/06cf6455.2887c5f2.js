"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],p={id:"cpp",title:"C++ Extension",sidebar_label:"cpp"},s=void 0,l={unversionedId:"extensions/cpp",id:"extensions/cpp",title:"C++ Extension",description:"The following section contains C++-specific extensions to the build server",source:"@site/target/docs/extensions/cpp.md",sourceDirName:"extensions",slug:"/extensions/cpp",permalink:"/docs/extensions/cpp",draft:!1,editUrl:"https://github.com/build-server-protocol/build-server-protocol/edit/master/docs/extensions/cpp.md",tags:[],version:"current",frontMatter:{id:"cpp",title:"C++ Extension",sidebar_label:"cpp"},sidebar:"docs",previous:{title:"Build Server Discovery",permalink:"/docs/overview/server-discovery"},next:{title:"Java",permalink:"/docs/extensions/java"}},c={},u=[{value:"Common shapes",id:"common-shapes",level:2},{value:"CppBuildTarget",id:"cppbuildtarget",level:4},{value:"URI",id:"uri",level:4},{value:"BSP Server remote interface",id:"bsp-server-remote-interface",level:2},{value:"CppOptions: request",id:"cppoptions-request",level:3},{value:"CppOptionsParams",id:"cppoptionsparams",level:4},{value:"BuildTargetIdentifier",id:"buildtargetidentifier",level:4},{value:"CppOptionsResult",id:"cppoptionsresult",level:4},{value:"CppOptionsItem",id:"cppoptionsitem",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following section contains C++-specific extensions to the build server\nprotocol."),(0,a.kt)("h2",{id:"common-shapes"},"Common shapes"),(0,a.kt)("h4",{id:"cppbuildtarget"},"CppBuildTarget"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CppBuildTarget")," is a basic data structure that contains c++-specific\nmetadata, specifically compiler reference. This metadata is embedded in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"data: Option[Json]")," field of the ",(0,a.kt)("inlineCode",{parentName:"p"},"BuildTarget")," definition, when\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"dataKind"),' field contains "cpp".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CppBuildTarget {\n  /** The c++ version this target is supposed to use.\n   * For example: C++11 */\n  version?: String;\n\n  /** The type of compiler this target is supposed to use.\n   * For example: gcc */\n  compiler?: String;\n\n  /** Uri representating path to the c compiler.\n   * For example: file:///usr/bin/gcc */\n  cCompiler?: URI;\n\n  /** Uri representating path to the c++ compiler.\n   * For example: file:///usr/bin/g++ */\n  cppCompiler?: URI;\n}\n")),(0,a.kt)("h4",{id:"uri"},"URI"),(0,a.kt)("p",null,"A resource identifier that is a valid URI according to rfc3986:\n",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3986"},"https://tools.ietf.org/html/rfc3986")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type URI = String;\n")),(0,a.kt)("h2",{id:"bsp-server-remote-interface"},"BSP Server remote interface"),(0,a.kt)("h3",{id:"cppoptions-request"},"CppOptions: request"),(0,a.kt)("p",null,"The build target cpp options request is sent from the client to the server to\nquery for the list of compiler options necessary to compile in a given list of\ntargets."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"method: ",(0,a.kt)("inlineCode",{parentName:"li"},"buildTarget/cppOptions")),(0,a.kt)("li",{parentName:"ul"},"params: ",(0,a.kt)("inlineCode",{parentName:"li"},"CppOptionsParams")),(0,a.kt)("li",{parentName:"ul"},"result: ",(0,a.kt)("inlineCode",{parentName:"li"},"CppOptionsResult"))),(0,a.kt)("h4",{id:"cppoptionsparams"},"CppOptionsParams"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CppOptionsParams {\n  /** The targets for which the options are requested. */\n  targets: BuildTargetIdentifier[];\n}\n")),(0,a.kt)("h4",{id:"buildtargetidentifier"},"BuildTargetIdentifier"),(0,a.kt)("p",null,"A unique identifier for a target, can use any URI-compatible encoding as long as it is unique within the workspace.\nClients should not infer metadata out of the URI structure such as the path or query parameters, use ",(0,a.kt)("inlineCode",{parentName:"p"},"BuildTarget")," instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BuildTargetIdentifier {\n  /** The target\u2019s Uri */\n  uri: URI;\n}\n")),(0,a.kt)("h4",{id:"cppoptionsresult"},"CppOptionsResult"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CppOptionsResult {\n  /** The list of options for each target. */\n  items: CppOptionsItem[];\n}\n")),(0,a.kt)("h4",{id:"cppoptionsitem"},"CppOptionsItem"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CppOptionsItem {\n  /** The target identifier for which the options are requested. */\n  target: BuildTargetIdentifier;\n\n  /** Attributes added in the given order to COPTS\n   * before compiling the target.\n   * For example: -Iexternal/gtest/include */\n  copts: String[];\n\n  /** Attributes prepended with -D\n   * and added to the compile command line\n   * For example: BOOST_FALLTHROUGH */\n  defines: String[];\n\n  /** Attributes added to the linker command\n   * For example: -pthread */\n  linkopts: String[];\n\n  /** Create a shared library.\n   * The presence of this flag means that linking occurs with the -shared flag */\n  linkshared?: Boolean;\n}\n")))}m.isMDXComponent=!0}}]);