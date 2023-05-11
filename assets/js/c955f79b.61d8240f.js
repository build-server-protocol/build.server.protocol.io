"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"sbt",title:"sbt Extension",sidebar_label:"sbt"},s=void 0,d={unversionedId:"extensions/sbt",id:"extensions/sbt",title:"sbt Extension",description:"The following section contains sbt-specific extensions to the build server",source:"@site/target/docs/extensions/sbt.md",sourceDirName:"extensions",slug:"/extensions/sbt",permalink:"/docs/extensions/sbt",draft:!1,editUrl:"https://github.com/build-server-protocol/build-server-protocol/edit/master/docs/extensions/sbt.md",tags:[],version:"current",frontMatter:{id:"sbt",title:"sbt Extension",sidebar_label:"sbt"},sidebar:"docs",previous:{title:"Python",permalink:"/docs/extensions/python"},next:{title:"Scala",permalink:"/docs/extensions/scala"}},p={},c=[{value:"Common shapes",id:"common-shapes",level:2},{value:"SbtBuildTarget",id:"sbtbuildtarget",level:4},{value:"ScalaBuildTarget",id:"scalabuildtarget",level:4},{value:"ScalaPlatform",id:"scalaplatform",level:4},{value:"URI",id:"uri",level:4},{value:"JvmBuildTarget",id:"jvmbuildtarget",level:4},{value:"BuildTargetIdentifier",id:"buildtargetidentifier",level:4}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following section contains sbt-specific extensions to the build server\nprotocol. This extension allows BSP clients to provide language support for sbt\nbuild files."),(0,r.kt)("h2",{id:"common-shapes"},"Common shapes"),(0,r.kt)("h4",{id:"sbtbuildtarget"},"SbtBuildTarget"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SbtBuildTarget")," is a basic data structure that contains sbt-specific metadata\nfor providing editor support for sbt build files. This metadata is embedded in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"data: Option[Json]")," field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildTarget")," definition when the\n",(0,r.kt)("inlineCode",{parentName:"p"},"dataKind"),' field contains "sbt".'),(0,r.kt)("p",null,"For example, say we have a project in ",(0,r.kt)("inlineCode",{parentName:"p"},"/foo/bar")," defining projects ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),"\nand two meta builds ",(0,r.kt)("inlineCode",{parentName:"p"},"M1")," (defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"/foo/bar/project"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"M2")," (defined in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/foo/bar/project/project"),")."),(0,r.kt)("p",null,"The sbt build target for ",(0,r.kt)("inlineCode",{parentName:"p"},"M1")," will have ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," as the defined targets and\n",(0,r.kt)("inlineCode",{parentName:"p"},"M2")," as the parent. Similarly, the sbt build target for ",(0,r.kt)("inlineCode",{parentName:"p"},"M2")," will have ",(0,r.kt)("inlineCode",{parentName:"p"},"M1")," as\nthe defined target and no parent."),(0,r.kt)("p",null,"Clients can use this information to reconstruct the tree of sbt meta builds. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"parent")," information can be defined from ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," but it's provided by the\nserver to simplify the data processing on the client side."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface SbtBuildTarget {\n  sbtVersion: String;\n\n  autoImports: String[];\n\n  scalaBuildTarget: ScalaBuildTarget;\n\n  parent?: BuildTargetIdentifier;\n\n  children: BuildTargetIdentifier[];\n}\n")),(0,r.kt)("h4",{id:"scalabuildtarget"},"ScalaBuildTarget"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ScalaBuildTarget")," is a basic data structure that contains scala-specific\nmetadata for compiling a target containing Scala sources. This metadata is\nembedded in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data: Option[Json]")," field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildTarget")," definition, when\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"dataKind"),' field contains "scala".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ScalaBuildTarget {\n  /** The Scala organization that is used for a target. */\n  scalaOrganization: String;\n\n  /** The scala version to compile this target */\n  scalaVersion: String;\n\n  /** The binary version of scalaVersion.\n   * For example, 2.12 if scalaVersion is 2.12.4. */\n  scalaBinaryVersion: String;\n\n  /** The target platform for this target */\n  platform: ScalaPlatform;\n\n  /** A sequence of Scala jars such as scala-library, scala-compiler and scala-reflect. */\n  jars: URI[];\n\n  /** The jvm build target describing jdk to be used */\n  jvmBuildTarget?: JvmBuildTarget;\n}\n")),(0,r.kt)("h4",{id:"scalaplatform"},"ScalaPlatform"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ScalaPlatform {\n  Jvm = 1,\n\n  Js = 2,\n\n  Native = 3,\n}\n")),(0,r.kt)("h4",{id:"uri"},"URI"),(0,r.kt)("p",null,"A resource identifier that is a valid URI according to rfc3986:\n",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3986"},"https://tools.ietf.org/html/rfc3986")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export type URI = String;\n")),(0,r.kt)("h4",{id:"jvmbuildtarget"},"JvmBuildTarget"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JvmBuildTarget")," is a basic data structure that contains jvm-specific\nmetadata, specifically JDK reference. This metadata is embedded in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"data: Option[Json]")," field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildTarget")," definition, when\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"dataKind"),' field contains "jvm".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface JvmBuildTarget {\n  /** Uri representing absolute path to jdk\n   * For example: file:///usr/lib/jvm/java-8-openjdk-amd64 */\n  javaHome?: URI;\n\n  /** The java version this target is supposed to use.\n   * For example: 1.8 */\n  javaVersion?: String;\n}\n")),(0,r.kt)("h4",{id:"buildtargetidentifier"},"BuildTargetIdentifier"),(0,r.kt)("p",null,"A unique identifier for a target, can use any URI-compatible encoding as long as it is unique within the workspace.\nClients should not infer metadata out of the URI structure such as the path or query parameters, use ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildTarget")," instead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BuildTargetIdentifier {\n  /** The target\u2019s Uri */\n  uri: URI;\n}\n")))}m.isMDXComponent=!0}}]);