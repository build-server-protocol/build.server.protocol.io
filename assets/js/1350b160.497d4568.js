"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[u]="string"==typeof e?e:s,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=n(7462),s=n(3366),i=(n(7294),n(3905)),l=["components"],r={id:"scala",title:"Scala Extension",sidebar_label:"Scala"},o=void 0,c={unversionedId:"extensions/scala",id:"extensions/scala",title:"Scala Extension",description:"The following section contains Scala-specific extensions to the build server",source:"@site/target/docs/extensions/scala.md",sourceDirName:"extensions",slug:"/extensions/scala",permalink:"/docs/extensions/scala",draft:!1,editUrl:"https://github.com/build-server-protocol/build-server-protocol/edit/master/docs/extensions/scala.md",tags:[],version:"current",frontMatter:{id:"scala",title:"Scala Extension",sidebar_label:"Scala"},sidebar:"docs",previous:{title:"JVM",permalink:"/docs/extensions/jvm"},next:{title:"sbt",permalink:"/docs/extensions/sbt"}},p={},u=[{value:"Scala Build Target",id:"scala-build-target",level:2},{value:"Scala Test Params",id:"scala-test-params",level:2},{value:"Scalac Options Request",id:"scalac-options-request",level:2},{value:"Scala Test Classes Request",id:"scala-test-classes-request",level:2},{value:"Scala Main Classes Request",id:"scala-main-classes-request",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,s.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following section contains Scala-specific extensions to the build server\nprotocol."),(0,i.kt)("h2",{id:"scala-build-target"},"Scala Build Target"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ScalaBuildTarget")," is a basic data structure that contains scala-specific\nmetadata for compiling a target containing Scala sources. This metadata is\nembedded in the ",(0,i.kt)("inlineCode",{parentName:"p"},"data: Option[Json]")," field of the ",(0,i.kt)("inlineCode",{parentName:"p"},"BuildTarget")," definition, when\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"dataKind"),' field contains "scala".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ScalaBuildTarget {\n  /** The Scala organization that is used for a target. */\n  scalaOrganization: String;\n\n  /** The scala version to compile this target */\n  scalaVersion: String;\n\n  /** The binary version of scalaVersion.\n   * For example, 2.12 if scalaVersion is 2.12.4. */\n  scalaBinaryVersion: String;\n\n  /** The target platform for this target */\n  platform: Int;\n\n  /** A sequence of Scala jars such as scala-library, scala-compiler and scala-reflect. */\n  jars: String[];\n\n  /** The jvm build target describing jdk to be used */\n  jvmBuildTarget?: JvmBuildTarget;\n}\n\nexport namespace ScalaPlatform {\n  export const JVM = 1;\n  export const JS = 2;\n  export const Native = 3;\n}\n")),(0,i.kt)("h2",{id:"scala-test-params"},"Scala Test Params"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ScalaTestParams")," contains scala-specific metadata for testing Scala targets.\nThis metadata is embedded in the ",(0,i.kt)("inlineCode",{parentName:"p"},"data: Option[Json]")," field of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"buildTarget/test")," request when the ",(0,i.kt)("inlineCode",{parentName:"p"},"dataKind"),' field contains "scala-test".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ScalaTestParams {\n  /** The test classes to be run in this test execution.\n   * It is the result of `buildTarget/scalaTestClasses`. */\n  testClasses?: ScalaTestClassesItem[];\n\n  /** The JVM options to run tests with. They replace any options\n   * that are defined by the build server if defined.\n   */\n  jvmOptions?: String[];\n}\n")),(0,i.kt)("h2",{id:"scalac-options-request"},"Scalac Options Request"),(0,i.kt)("p",null,"The build target scalac options request is sent from the client to the server to\nquery for the list of compiler options necessary to compile in a given list of\ntargets."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"method: ",(0,i.kt)("inlineCode",{parentName:"li"},"buildTarget/scalacOptions")),(0,i.kt)("li",{parentName:"ul"},"params: ",(0,i.kt)("inlineCode",{parentName:"li"},"ScalacOptionsParams"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ScalacOptionsParams {\n  targets: BuildTargetIdentifier[];\n}\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"result: ",(0,i.kt)("inlineCode",{parentName:"li"},"ScalacOptionsResult"),", defined as follows")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ScalacOptionsResult {\n  items: List[ScalacOptionsItem];\n}\n\nexport interface ScalacOptionsItem {\n  target: BuildTargetIdentifier;\n\n  /** Additional arguments to the compiler.\n   * For example, -deprecation. */\n  options: List[String];\n\n  /** The dependency classpath for this target, must be\n   * identical to what is passed as arguments to\n   * the -classpath flag in the command line interface\n   * of scalac. */\n  classpath: List[Uri];\n\n  /** The output directory for classfiles produced by this target */\n  classDirectory: Uri;\n}\n")),(0,i.kt)("h2",{id:"scala-test-classes-request"},"Scala Test Classes Request"),(0,i.kt)("p",null,"The build target scala test options request is sent from the client to the\nserver to query for the list of fully qualified names of test clases in a given\nlist of targets."),(0,i.kt)("p",null,"This method can for example be used by a client to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Show a list of the discovered classes that can be tested."),(0,i.kt)("li",{parentName:"ul"},'Attach a "Run test suite" button above the definition of a test suite via\n',(0,i.kt)("inlineCode",{parentName:"li"},"textDocument/codeLens"),".")),(0,i.kt)("p",null,"(To render the code lens, the language server needs to map the fully qualified\nnames of the test targets to the defining source file via\n",(0,i.kt)("inlineCode",{parentName:"p"},"textDocument/definition"),". Then, once users click on the button, the language\nserver can pass the fully qualified name of the test class as an argument to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"buildTarget/test")," request.)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"method: ",(0,i.kt)("inlineCode",{parentName:"li"},"buildTarget/scalaTestClasses")),(0,i.kt)("li",{parentName:"ul"},"params: ",(0,i.kt)("inlineCode",{parentName:"li"},"ScalaTestClassesParams"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ScalaTestClassesParams {\n  targets: BuildTargetIdentifier[];\n\n  /** An optional number uniquely identifying a client request. */\n  originId?: String;\n}\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"result: ",(0,i.kt)("inlineCode",{parentName:"li"},"ScalaTestClassesResult"),", defined as follows"),(0,i.kt)("li",{parentName:"ul"},"error: code and message set in case an exception happens during shutdown\nrequest.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ScalaTestClassesResult {\n  items: ScalaTestClassesItem[];\n\n  /** An optional id of the request that triggered this result. */\n  originId?: String;\n}\n\nexport interface ScalaTestClassesItem {\n  /** The build target that contains the test classes. */\n  target: BuildTargetIdentifier;\n\n  /**\n   * Name of the the framework to which classes belong. \n   * It's optional in order to maintain compatibility, however it is expected \n   * from the newer implementations to not leave that field unspecified.\n   */\n  framework?: String;\n\n  /** The fully qualified names of the test classes in this target */\n  classes: String[];\n}\n")),(0,i.kt)("p",null,"This request may trigger a compilation on the selected build targets. The server\nis free to send any number of ",(0,i.kt)("inlineCode",{parentName:"p"},"build/task*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"build/publishDiagnostics")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"build/logMessage")," notifications during compilation before completing the\nresponse."),(0,i.kt)("p",null,"The client will get a ",(0,i.kt)("inlineCode",{parentName:"p"},"originId")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"ScalaTestClassesResult")," if the\n",(0,i.kt)("inlineCode",{parentName:"p"},"originId")," field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ScalaTestClassesParams")," is defined."),(0,i.kt)("h2",{id:"scala-main-classes-request"},"Scala Main Classes Request"),(0,i.kt)("p",null,"The build target main classes request is sent from the client to the server to\nquery for the list of main classes that can be fed as arguments to\n",(0,i.kt)("inlineCode",{parentName:"p"},"buildTarget/run"),". This method can be used for the same use cases than the\n",(0,i.kt)("a",{parentName:"p",href:"#scala-test-classes-request"},"Scala Test Classes Request")," enables."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"method: ",(0,i.kt)("inlineCode",{parentName:"li"},"buildTarget/scalaMainClasses")),(0,i.kt)("li",{parentName:"ul"},"params: ",(0,i.kt)("inlineCode",{parentName:"li"},"ScalaMainClassesParams"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ScalaMainClassesParams {\n  targets: BuildTargetIdentifier[];\n\n  /** An optional number uniquely identifying a client request. */\n  originId?: String;\n}\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"result: ",(0,i.kt)("inlineCode",{parentName:"li"},"ScalaMainClassesResult"),", defined as follows"),(0,i.kt)("li",{parentName:"ul"},"error: code and message set in case an exception happens during shutdown\nrequest.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ScalaMainClassesResult {\n  items: ScalaMainClassesItem[];\n\n  /** An optional id of the request that triggered this result. */\n  originId?: String;\n}\n\nexport interface ScalaMainClassesItem {\n  /** The build target that contains the test classes. */\n  target: BuildTargetIdentifier;\n\n  /** The main class item. */\n  classes: ScalaMainClass[];\n}\n\nexport interface ScalaMainClass {\n  /** The main class to run. */\n  class: String;\n\n  /** The user arguments to the main entrypoint. */\n  arguments: String[];\n\n  /** The jvm options for the application. */\n  jvmOptions: String[];\n\n  /** The environment variables for the application. */\n  environmentVariables?: String[];\n}\n")),(0,i.kt)("p",null,"This request may trigger a compilation on the selected build targets. The server\nis free to send any number of ",(0,i.kt)("inlineCode",{parentName:"p"},"build/taskStart"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"build/taskProgress"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"build/taskFinish"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"build/publishDiagnostics")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"build/logMessage"),"\nnotifications during compilation before completing the response."),(0,i.kt)("p",null,"The client will get a ",(0,i.kt)("inlineCode",{parentName:"p"},"originId")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"ScalaMainClassesResult")," if the\n",(0,i.kt)("inlineCode",{parentName:"p"},"originId")," field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ScalaMainClassesParams")," is defined."))}m.isMDXComponent=!0}}]);