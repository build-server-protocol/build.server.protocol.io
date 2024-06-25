"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[389],{889:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var r=s(3955),i=s(8379);const l={id:"implementations",title:"Implementations"},n=void 0,d={id:"overview/implementations",title:"Implementations",description:"Build Servers",source:"@site/generated/overview/implementations.md",sourceDirName:"overview",slug:"/overview/implementations",permalink:"/docs/overview/implementations",draft:!1,unlisted:!1,editUrl:"https://github.com/build-server-protocol/build-server-protocol/edit/master/docs/overview/implementations.md",tags:[],version:"current",frontMatter:{id:"implementations",title:"Implementations"},sidebar:"docs",previous:{title:"Frequently Asked Questions",permalink:"/docs/overview/faq"},next:{title:"Build Server Discovery",permalink:"/docs/overview/server-discovery"}},c={},a=[{value:"Build Servers",id:"build-servers",level:2},{value:"Build Clients",id:"build-clients",level:2}];function h(e){const t={a:"a",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"build-servers",children:"Build Servers"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Build tool"}),(0,r.jsx)(t.th,{children:"Link"}),(0,r.jsx)(t.th,{children:"Implementation language"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Bazel"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/JetBrains/bazel-bsp",children:"bazel-bsp"})}),(0,r.jsx)(t.td,{children:"Kotlin"}),(0,r.jsx)(t.td,{children:"Supports Java, Scala, and Kotlin."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Bloop"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/scalacenter/bloop/",children:"scalacenter/bloop"})}),(0,r.jsx)(t.td,{children:"Scala"}),(0,r.jsx)(t.td,{children:"Supports sbt, Gradle, Maven and Mill."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Mill"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/lihaoyi/mill/",children:"mill"})}),(0,r.jsx)(t.td,{children:"Scala"}),(0,r.jsx)(t.td,{children:"Built-in since mill 0.9.3, before as contrib plugin."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sbt"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.scala-sbt.org/",children:"sbt"})}),(0,r.jsx)(t.td,{children:"Scala"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/sbt/sbt/releases/tag/v1.4.0",children:"Since 1.4.0"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"scala-cli"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://scala-cli.virtuslab.org/",children:"scala-cli"})}),(0,r.jsx)(t.td,{children:"Scala"}),(0,r.jsx)(t.td,{children:"Supports Scala and Java."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Cargo"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/cargo-bsp/cargo-bsp",children:"cargo-bsp"})}),(0,r.jsx)(t.td,{children:"Rust"}),(0,r.jsx)(t.td,{children:"(Work in progress) Supports Rust."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Gradle"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/microsoft/build-server-for-gradle",children:"build-server-for-gradle"})}),(0,r.jsx)(t.td,{children:"Java"}),(0,r.jsx)(t.td,{children:"Supports Java."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"build-clients",children:"Build Clients"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Supporting Tool"}),(0,r.jsx)(t.th,{children:"Link"}),(0,r.jsx)(t.th,{children:"Implementation language"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IntelliJ Scala"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/JetBrains/intellij-scala",children:"JetBrains/intellij-scala"})}),(0,r.jsx)(t.td,{children:"Scala"}),(0,r.jsx)(t.td,{children:"Implementation focused on Scala, supports Java."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IntelliJ-BSP"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/JetBrains/intellij-bsp",children:"JetBrains/intellij-bsp"})}),(0,r.jsx)(t.td,{children:"Kotlin"}),(0,r.jsx)(t.td,{children:"New implementation with broader language support."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Metals"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/scalameta/metals",children:"scalameta/metals"})}),(0,r.jsx)(t.td,{children:"Scala"}),(0,r.jsx)(t.td,{children:"LSP language server."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"scala-cli"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://scala-cli.virtuslab.org/",children:"scala-cli"})}),(0,r.jsx)(t.td,{children:"Scala"}),(0,r.jsx)(t.td,{children:"Act as BSP client towards Bloop."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Gradle for Java"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/microsoft/vscode-gradle",children:"Microsoft/vscode-gradle"})}),(0,r.jsx)(t.td,{children:"Java and TypeScript"}),(0,r.jsx)(t.td,{children:"Act as BSP client towards Build Server for Gradle."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bsp.nvim"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/616b2f/bsp.nvim",children:"616b2f/bsp.nvim"})}),(0,r.jsx)(t.td,{children:"Lua"}),(0,r.jsx)(t.td,{children:"BSP client for Neovim (in Alpha)"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8379:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>d});var r=s(2515);const i={},l=r.createContext(i);function n(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);