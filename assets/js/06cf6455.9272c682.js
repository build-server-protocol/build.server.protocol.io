"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],p={id:"cpp",title:"C++ Extension",sidebar_label:"cpp"},l=void 0,s={unversionedId:"extensions/cpp",id:"extensions/cpp",title:"C++ Extension",description:"The following section contains C++-specific extensions to the build server",source:"@site/target/docs/extensions/cpp.md",sourceDirName:"extensions",slug:"/extensions/cpp",permalink:"/docs/extensions/cpp",draft:!1,editUrl:"https://github.com/build-server-protocol/build-server-protocol/edit/master/docs/extensions/cpp.md",tags:[],version:"current",frontMatter:{id:"cpp",title:"C++ Extension",sidebar_label:"cpp"},sidebar:"docs",previous:{title:"Build Server Discovery",permalink:"/docs/overview/server-discovery"},next:{title:"Java",permalink:"/docs/extensions/java"}},c={},d=[{value:"C++ Build Target",id:"c-build-target",level:2},{value:"Cpp Options Request",id:"cpp-options-request",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following section contains C++-specific extensions to the build server\nprotocol."),(0,o.kt)("h2",{id:"c-build-target"},"C++ Build Target"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CppBuildTarget")," is a basic data structure that contains c++-specific\nmetadata, specifically compiler reference. This metadata is embedded in\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"data: Option[Json]")," field of the ",(0,o.kt)("inlineCode",{parentName:"p"},"BuildTarget")," definition, when\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"dataKind"),' field contains "cpp".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CppBuildTarget {\n  /** The c++ version this target is supposed to use.\n   * For example: C++11 */\n  version?: String;\n\n  /** The type of compiler this target is supposed to use.\n   * For example: gcc */\n  compiler?: String;\n\n  /** Uri representating path to the c compiler.\n   * For example: file:///usr/bin/gcc */\n  cCompiler?: Uri;\n\n  /** Uri representating path to the c++ compiler.\n   * For example: file:///usr/bin/g++ */\n  cppCompiler?: Uri;\n}\n")),(0,o.kt)("h2",{id:"cpp-options-request"},"Cpp Options Request"),(0,o.kt)("p",null,"The build target cpp options request is sent from the client to the server to\nquery for the list of compiler options necessary to compile in a given list of\ntargets."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"method: ",(0,o.kt)("inlineCode",{parentName:"li"},"buildTarget/cppOptions")),(0,o.kt)("li",{parentName:"ul"},"params: ",(0,o.kt)("inlineCode",{parentName:"li"},"CppOptionsParams"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CppOptionsParams {\n  targets: BuildTargetIdentifier[];\n}\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"result: ",(0,o.kt)("inlineCode",{parentName:"li"},"CppOptionsResult"),", defined as follows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CppOptionsResult {\n  items: List[CppOptionsItem];\n}\n\nexport interface CppOptionsItem {\n  target: BuildTargetIdentifier;\n\n  /** Attributes added in the given order to COPTS\n   * before compiling the target.\n   * For example: -Iexternal/gtest/include */\n  copts: String[];\n\n  /** Attributes prepended with -D\n   * and added to the compile command line\n   * For example: BOOST_FALLTHROUGH */\n  defines: String[];\n\n  /** Attributes added to the linker command\n   * For example: -pthread */\n  linkopts: String[];\n\n  /** Create a shared library.\n   * The presence of this flag means that linking occurs with the -shared flag\n   * For example: gcc */\n  linkshared?: Boolean;\n}\n")))}m.isMDXComponent=!0}}]);