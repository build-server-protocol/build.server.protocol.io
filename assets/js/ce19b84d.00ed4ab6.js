"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],l={id:"server-discovery",title:"Build Server Discovery"},s=void 0,c={unversionedId:"overview/server-discovery",id:"overview/server-discovery",title:"Build Server Discovery",description:"The Build Server Protocol defines a standard convention for clients to connect",source:"@site/target/docs/overview/server-discovery.md",sourceDirName:"overview",slug:"/overview/server-discovery",permalink:"/docs/overview/server-discovery",draft:!1,editUrl:"https://github.com/build-server-protocol/build-server-protocol/edit/master/docs/overview/server-discovery.md",tags:[],version:"current",frontMatter:{id:"server-discovery",title:"Build Server Discovery"},sidebar:"docs",previous:{title:"Implementations",permalink:"/docs/overview/implementations"},next:{title:"cpp",permalink:"/docs/extensions/cpp"}},p={},d=[{value:"The BSP Connection Details",id:"the-bsp-connection-details",level:2},{value:"Default Locations for BSP Connection Files",id:"default-locations-for-bsp-connection-files",level:3},{value:"Policy around Connection Files Generation",id:"policy-around-connection-files-generation",level:3},{value:"Build Tool Commands to Start BSP Servers",id:"build-tool-commands-to-start-bsp-servers",level:3},{value:"Example with <code>my-build-tool</code>",id:"example-with-my-build-tool",level:4},{value:"Clients Connecting to BSP Servers",id:"clients-connecting-to-bsp-servers",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Build Server Protocol defines a standard convention for clients to connect\nto BSP servers. This protocol has been designed such that:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clients do not require beforehand knowledge about a specific build tool to be\nable to connect to its server."),(0,a.kt)("li",{parentName:"ol"},"Clients can connect to build tools installed at the machine and at the\nworkspace level."),(0,a.kt)("li",{parentName:"ol"},"Multiple build tools can run in the same workspace directory."),(0,a.kt)("li",{parentName:"ol"},"Multiple connections to a single build tool can run in the same workspace directory (as long as the build scopes for\neach of the connections do not overlap).")),(0,a.kt)("h2",{id:"the-bsp-connection-details"},"The BSP Connection Details"),(0,a.kt)("p",null,"The following JSON object defines the BSP connection details:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BspConnectionDetails {\n  /** The name of the build tool. */\n  name: String;\n  /** The version of the build tool. */\n  version: String;\n  /** The bsp version of the build tool. */\n  bspVersion: String;\n  /** A collection of languages supported by this BSP server. */\n  languages: String[];\n  /** Command arguments runnable via system processes to start a BSP server */\n  argv: String[];\n}\n")),(0,a.kt)("p",null,"Every build tool supporting BSP must implement a build-tool-specific command to\ngenerate the BSP connection details in one of the standard BSP locations for BSP\nconnection files."),(0,a.kt)("p",null,"BSP connection files:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"must be unique per build tool name, version and build scope to enable different versions\nof the same build tool to select different BSP connection mechanisms."),(0,a.kt)("li",{parentName:"ol"},"multiple connection files for a single build tool name and version may co-exist in a single workspace root as long as\nthere is no overlap in their build scopes; this enables clients to request running separate builds within a single\nworkspace."),(0,a.kt)("li",{parentName:"ol"},"can be updated by the build tool at any point in time, including during the\nstartup of the build tool in a workspace."),(0,a.kt)("li",{parentName:"ol"},"can be added to version control if and only if they do not contain\nmachine-dependent information like absolute paths or workspace-specific data.")),(0,a.kt)("p",null,"This is an example of a BSP connection file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "My Build Tool",\n  "version": "21.3",\n  "bspVersion": "2.0.0",\n  "languages": ["scala", "javascript", "rust"],\n  "argv": ["my-build-tool", "bsp"]\n}\n')),(0,a.kt)("h3",{id:"default-locations-for-bsp-connection-files"},"Default Locations for BSP Connection Files"),(0,a.kt)("p",null,"A BSP connection file can be located in a number of locations. BSP connection\nfiles may be located in the project workspace, or for bsp servers installed\nlocally, in a system-wide or user-specific data directory, depending on the\noperating system:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Unix + Mac"),(0,a.kt)("th",{parentName:"tr",align:null},"Windows"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Workspace"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<workspace-dir>/.bsp/")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<workspace-dir>\\.bsp\\"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"User"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$XDG_DATA_HOME/bsp/")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"%LOCALAPPDATA%\\bsp\\"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$HOME/Library/Application Support/bsp/")," (Mac only)"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$XDG_DATA_DIRS/bsp/")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"%PROGRAMDATA%\\bsp\\"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/Library/Application Support/bsp/")," (Mac only)"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"Note that:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"<workspace-dir>")," refers to the workspace base directory."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"$XDG_DATA_HOME")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"$XDG_DATA_DIRS")," are defined by the\n",(0,a.kt)("a",{parentName:"li",href:"https://specifications.freedesktop.org/basedir-spec/basedir-spec-0.6.html"},"XDG Base Directory Specification")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"%PROGRAMDATA%")," are defined by the\n",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-gb/windows/desktop/shell/csidl"},"Windows Documentation"),"\n(see also:\n",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-gb/windows/desktop/shell/knownfolderid"},"Default Known Folders"),")"),(0,a.kt)("li",{parentName:"ol"},"on Macs, both standard macOS and Unix directories are supported")),(0,a.kt)("p",null,"The workspace location always has higher priority than the user or system\nlocation, so if a client finds a BSP connection file that meets its criteria\ninside a workspace location it must pick it over other BSP connection files in\nthe user or system location."),(0,a.kt)("p",null,"Workspace-defined build tools must not write BSP connection files to the user or\nsystem locations. That location is only reserved for BSP connection files that\ndo not contain any workspace-specific data."),(0,a.kt)("h3",{id:"policy-around-connection-files-generation"},"Policy around Connection Files Generation"),(0,a.kt)("p",null,"To have a successful first-time connection to servers, at least one BSP\nconnection file must exist before users import a project in an IDE or invoke a\nBSP client in a workspace."),(0,a.kt)("p",null,"Build tools installed globally by the user should write a BSP connection file to\nthe system location to minimize the chances that a client doesn't discover it.\nThe BSP connection file should also be deleted when the build tool is\nuninstalled."),(0,a.kt)("p",null,"However, in the more general case, build tools are required to implement a\ncommand to generate a BSP connection file either in the user or system location.\nThis command must be runnable in the workspace base directory."),(0,a.kt)("p",null,"With such command, the following workflows become possible:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Users can manually install a BSP connection file for any build tool."),(0,a.kt)("li",{parentName:"ol"},"Clients can implement smart discovery capabilities to:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Detect the build tool(s) used in a workspace."),(0,a.kt)("li",{parentName:"ol"},"Invoke the command to generate a BSP connection file for them.")))),(0,a.kt)("p",null,"These workflows help improve the user experience for clients that want a more\nout-of-the-box experience and provide a escape hatch for users to generate BSP\nconnection files for exotic and unsupported build tools."),(0,a.kt)("h3",{id:"build-tool-commands-to-start-bsp-servers"},"Build Tool Commands to Start BSP Servers"),(0,a.kt)("p",null,"The most important data field in the connection file is the ",(0,a.kt)("inlineCode",{parentName:"p"},"argv")," JSON field.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"argv")," field contains the command arguments that start a BSP server via\nsystem process."),(0,a.kt)("p",null,"Clients must meet the following requirements when using ",(0,a.kt)("inlineCode",{parentName:"p"},"argv")," via system\nprocess:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The first element of the ",(0,a.kt)("inlineCode",{parentName:"li"},"argv")," collection can be a simple name, a relative\npath or an absolute path. A relative path is always relative to the workspace\nbase directory, so the client must prepend the value of the workspace folder\nto the relative path before spawning ",(0,a.kt)("inlineCode",{parentName:"li"},"argv"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"argv")," must always be invoked in the workspace base directory."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"argv")," must be invoked with the same environment variables of the client.")),(0,a.kt)("p",null,"Build tools must make sure that their ",(0,a.kt)("inlineCode",{parentName:"p"},"argv")," invocation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Creates a fresh BSP connection to a server every time. This is required in\ncase there is more than one client connecting to a server or a server crashes\nand a client wants to reconnect."),(0,a.kt)("li",{parentName:"ol"},"Uses ",(0,a.kt)("inlineCode",{parentName:"li"},"stdin")," to send messages and ",(0,a.kt)("inlineCode",{parentName:"li"},"stdout")," to receive responses to/from the\nBSP server."),(0,a.kt)("li",{parentName:"ol"},"Uses ",(0,a.kt)("inlineCode",{parentName:"li"},"stderr")," to report execution progress to the user.")),(0,a.kt)("p",null,"The use of ",(0,a.kt)("inlineCode",{parentName:"p"},"stdin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout")," to communicate with the build server simplifies\nthe life of clients and allows build tools to implement their own underlying\nprotocol to connect to a local/remote build tool instance/daemon."),(0,a.kt)("p",null,"In addition, build tools can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"argv")," invocation for other purposes such\nas:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Spawn a daemon if it's not already running."),(0,a.kt)("li",{parentName:"ol"},"Install the build tool if it's not already installed in a user's machine.")),(0,a.kt)("h4",{id:"example-with-my-build-tool"},"Example with ",(0,a.kt)("inlineCode",{parentName:"h4"},"my-build-tool")),(0,a.kt)("p",null,"To illustrate the responsibilities of the build tool, let's go through a small\nexample where:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"my-build-tool")," build tool is installed in the user's machine."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"argv")," field is set to ",(0,a.kt)("inlineCode",{parentName:"li"},'["my-build-tool", "bsp"]'),"."),(0,a.kt)("li",{parentName:"ol"},"There is no running build tool instance in a workspace directory\n",(0,a.kt)("inlineCode",{parentName:"li"},"<workspace>"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"my-build-tool")," supports BSP connections with a running instance of the build\ntool via\n",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Unix_domain_socket"},"UNIX domain sockets")," and\n",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/desktop/ipc/named-pipes"},"Windows Named Pipes"),".")),(0,a.kt)("p",null,"The invocation of ",(0,a.kt)("inlineCode",{parentName:"p"},"my-build-tool bsp"),", with current working directory\n",(0,a.kt)("inlineCode",{parentName:"p"},"<workspace>"),", will need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run a background process of the build tool for the given ",(0,a.kt)("inlineCode",{parentName:"li"},"<workspace>"),"."),(0,a.kt)("li",{parentName:"ol"},"Pick the best way to connect to the running process depending on the machine\nit runs. For example, it would use UNIX sockets in a Linux machine."),(0,a.kt)("li",{parentName:"ol"},"Fire up a BSP server in the build tool with script-specific connection\ndetails. In the case of Unix sockets, the script will generate the socket\nfile and pass it to the background process of the build tool."),(0,a.kt)("li",{parentName:"ol"},"Connect to the running BSP server, forward anything that comes from ",(0,a.kt)("inlineCode",{parentName:"li"},"stdin"),"\nto the BSP server and print anything that comes from the server's output\nstreams to ",(0,a.kt)("inlineCode",{parentName:"li"},"stdout"),". Execution progress will be shown in ",(0,a.kt)("inlineCode",{parentName:"li"},"stderr"),".")),(0,a.kt)("p",null,"If the build tool is already running for a given project, the ",(0,a.kt)("inlineCode",{parentName:"p"},"argv")," invocation\nwill only perform the last two steps."),(0,a.kt)("h2",{id:"clients-connecting-to-bsp-servers"},"Clients Connecting to BSP Servers"),(0,a.kt)("p",null,"The BSP Server Discovery aims to simplify clients the process of connecting to\nservers."),(0,a.kt)("p",null,"Clients can connect to servers by locating connection files in the standard BSP\nlocations. BSP clients must look up connection files first in the bsp user\nlocation and, only if the lookup of a connection file meeting certain criteria\nfails, continue the search in the system location."),(0,a.kt)("p",null,"When more than a single BSP connection file is found, BSP clients can use connection\nmetadata to pick only the BSP servers they are interested in. If there are still\nambiguities, BSP clients are free to choose how to react, for example by asking\nthe end user to select a build server. Clients may also make it possible for the user to select\nmultiple connections, effectively having multiple, separate BSP builds running at one time."),(0,a.kt)("p",null,"When no BSP connection file is found (because, for example, the user has not run\nthe build tool command to generate BSP connection details), the BSP client can:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fail gracefully."),(0,a.kt)("li",{parentName:"ol"},"Ask users to type the command to generate the BSP connection details with\ntheir preferred build tool and then connect to the BSP server."),(0,a.kt)("li",{parentName:"ol"},"Discover the build tool used in a project manually, run the command to\ngenerate the BSP connection details and then connect to the BSP server.")),(0,a.kt)("p",null,"When BSP clients have found a valid connection file, they can connect to the\nserver by running the ",(0,a.kt)("inlineCode",{parentName:"p"},"argv")," invocation via system process; listening to its\nsystem output and writing to its system input. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"argv")," invocation fails,\nthe output in ",(0,a.kt)("inlineCode",{parentName:"p"},"stderr")," must be shown to the user."))}m.isMDXComponent=!0}}]);