"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[130],{4347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(3955),a=n(8379);const i={id:"java",title:"Java Extension",sidebar_label:"Java"},r=void 0,o={id:"extensions/java",title:"Java Extension",description:"The following section contains Java-specific extensions to the build server",source:"@site/generated/extensions/java.md",sourceDirName:"extensions",slug:"/extensions/java",permalink:"/docs/extensions/java",draft:!1,unlisted:!1,editUrl:"https://github.com/build-server-protocol/build-server-protocol/edit/master/docs/extensions/java.md",tags:[],version:"current",frontMatter:{id:"java",title:"Java Extension",sidebar_label:"Java"},sidebar:"docs",previous:{title:"cpp",permalink:"/docs/extensions/cpp"},next:{title:"JVM",permalink:"/docs/extensions/jvm"}},c={},l=[{value:"BSP version",id:"bsp-version",level:2},{value:"BSP Server remote interface",id:"bsp-server-remote-interface",level:2},{value:"BuildTargetJavacOptions: request",id:"buildtargetjavacoptions-request",level:3},{value:"JavacOptionsParams",id:"javacoptionsparams",level:4},{value:"JavacOptionsResult",id:"javacoptionsresult",level:4},{value:"JavacOptionsItem",id:"javacoptionsitem",level:4}];function d(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The following section contains Java-specific extensions to the build server\nprotocol."}),"\n",(0,s.jsx)(t.h2,{id:"bsp-version",children:"BSP version"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"2.2.0"})}),"\n",(0,s.jsx)(t.h2,{id:"bsp-server-remote-interface",children:"BSP Server remote interface"}),"\n",(0,s.jsx)(t.h3,{id:"buildtargetjavacoptions-request",children:"BuildTargetJavacOptions: request"}),"\n",(0,s.jsx)(t.p,{children:"The build target javac options request is sent from the client to the server to\nquery for the list of compiler options necessary to compile in a given list of\ntargets."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["method: ",(0,s.jsx)(t.code,{children:"buildTarget/javacOptions"})]}),"\n",(0,s.jsxs)(t.li,{children:["params: ",(0,s.jsx)(t.code,{children:"JavacOptionsParams"})]}),"\n",(0,s.jsxs)(t.li,{children:["result: ",(0,s.jsx)(t.code,{children:"JavacOptionsResult"})]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"javacoptionsparams",children:"JavacOptionsParams"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"export interface JavacOptionsParams {\n  targets: BuildTargetIdentifier[];\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"javacoptionsresult",children:"JavacOptionsResult"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"export interface JavacOptionsResult {\n  items: JavacOptionsItem[];\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"javacoptionsitem",children:"JavacOptionsItem"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"export interface JavacOptionsItem {\n  target: BuildTargetIdentifier;\n\n  /** Additional arguments to the compiler.\n   * For example, -deprecation. */\n  options: string[];\n\n  /** The dependency classpath for this target, must be\n   * identical to what is passed as arguments to\n   * the -classpath flag in the command line interface\n   * of javac.\n   * Deprecated: When the jvmCompileClasspath capability is supported, this might be empty and the buildTarget/jvmCompileClasspath endpoint should be used instead. */\n  classpath: string[];\n\n  /** The output directory for classfiles produced by this target */\n  classDirectory: string;\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8379:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(2515);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);