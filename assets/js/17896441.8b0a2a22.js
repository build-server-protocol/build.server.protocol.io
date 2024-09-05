(self.webpackChunk=self.webpackChunk||[]).push([[401],{774:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>ot});var a=t(2515),s=t(2750),i=t(1321),r=t(3955);function o(){var e,n=(0,i.u)(),t=n.metadata,a=n.frontMatter,o=n.assets;return(0,r.jsx)(s.be,{title:t.title,description:t.description,keywords:a.keywords,image:null!=(e=o.image)?e:a.image})}var c=t(7993),l=t(5149),d=t(803),u=t(6392);function m(e){var n=e.permalink,t=e.title,a=e.subLabel,s=e.isNext;return(0,r.jsxs)(u.A,{className:(0,c.A)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[a&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,r.jsx)("div",{className:"pagination-nav__label",children:t})]})}function h(e){var n=e.previous,t=e.next;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,r.jsx)(m,Object.assign({},n,{subLabel:(0,r.jsx)(d.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),t&&(0,r.jsx)(m,Object.assign({},t,{subLabel:(0,r.jsx)(d.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}function f(){var e=(0,i.u)().metadata;return(0,r.jsx)(h,{previous:e.previous,next:e.next})}var v=t(272),p=t(2076),b=t(6911),g=t(9327),x=t(258);var j={unreleased:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,r.jsx)(d.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,r.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,r.jsx)(d.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,r.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function N(e){var n=j[e.versionMetadata.banner];return(0,r.jsx)(n,Object.assign({},e))}function A(e){var n=e.versionLabel,t=e.to,a=e.onClick;return(0,r.jsx)(d.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(u.A,{to:t,onClick:a,children:(0,r.jsx)(d.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function C(e){var n,t=e.className,a=e.versionMetadata,s=(0,v.A)().siteConfig.title,i=(0,p.useActivePlugin)({failfast:!0}).pluginId,o=(0,g.g1)(i).savePreferredVersionName,l=(0,p.useDocVersionSuggestions)(i),d=l.latestDocSuggestion,u=l.latestVersionSuggestion,m=null!=d?d:(n=u).docs.find((function(e){return e.id===n.mainDocId}));return(0,r.jsxs)("div",{className:(0,c.A)(t,b.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(N,{siteTitle:s,versionMetadata:a})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(A,{versionLabel:u.label,to:m.path,onClick:function(){return o(u.name)}})})]})}function y(e){var n=e.className,t=(0,x.r)();return t.banner?(0,r.jsx)(C,{className:n,versionMetadata:t}):null}function k(e){var n=e.className,t=(0,x.r)();return t.badge?(0,r.jsx)("span",{className:(0,c.A)(n,b.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(d.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}const L={tag:"tag_aP4_",tagRegular:"tagRegular_AhIZ",tagWithCount:"tagWithCount_dgqd"};function B(e){var n=e.permalink,t=e.label,a=e.count,s=e.description;return(0,r.jsxs)(u.A,{href:n,title:s,className:(0,c.A)(L.tag,a?L.tagWithCount:L.tagRegular),children:[t,a&&(0,r.jsx)("span",{children:a})]})}const w={tags:"tags_w0am",tag:"tag_dneu"};function _(e){var n=e.tags;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,c.A)(w.tags,"padding--none","margin-left--sm"),children:n.map((function(e){return(0,r.jsx)("li",{className:w.tag,children:(0,r.jsx)(B,Object.assign({},e))},e.permalink)}))})]})}var T=t(7713);const O={iconEdit:"iconEdit_yXSC"};var E=["className"];function H(e){var n=e.className,t=(0,T.A)(e,E);return(0,r.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.A)(O.iconEdit,n),"aria-hidden":"true"},t,{children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function M(e){var n=e.editUrl;return(0,r.jsxs)(u.A,{to:n,className:b.G.common.editThisPage,children:[(0,r.jsx)(H,{}),(0,r.jsx)(d.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function I(e){void 0===e&&(e={});var n=(0,v.A)().i18n.currentLocale,t=function(){var e=(0,v.A)().i18n,n=e.currentLocale;return e.localeConfigs[n].calendar}();return new Intl.DateTimeFormat(n,Object.assign({calendar:t},e))}function S(e){var n=e.lastUpdatedAt,t=new Date(n),a=I({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,r.jsx)(d.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:a})})},children:" on {date}"})}function U(e){var n=e.lastUpdatedBy;return(0,r.jsx)(d.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:n})},children:" by {user}"})}function R(e){var n=e.lastUpdatedAt,t=e.lastUpdatedBy;return(0,r.jsxs)("span",{className:b.G.common.lastUpdated,children:[(0,r.jsx)(d.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,r.jsx)(S,{lastUpdatedAt:n}):"",byUser:t?(0,r.jsx)(U,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const V={lastUpdated:"lastUpdated_OBxM"};function z(e){var n=e.className,t=e.editUrl,a=e.lastUpdatedAt,s=e.lastUpdatedBy;return(0,r.jsxs)("div",{className:(0,c.A)("row",n),children:[(0,r.jsx)("div",{className:"col",children:t&&(0,r.jsx)(M,{editUrl:t})}),(0,r.jsx)("div",{className:(0,c.A)("col",V.lastUpdated),children:(a||s)&&(0,r.jsx)(R,{lastUpdatedAt:a,lastUpdatedBy:s})})]})}function G(){var e=(0,i.u)().metadata,n=e.editUrl,t=e.lastUpdatedAt,a=e.lastUpdatedBy,s=e.tags,o=s.length>0,l=!!(n||t||a);return o||l?(0,r.jsxs)("footer",{className:(0,c.A)(b.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,r.jsx)("div",{className:(0,c.A)("row margin-top--sm",b.G.docs.docFooterTagsRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(_,{tags:s})})}),l&&(0,r.jsx)(z,{className:(0,c.A)("margin-top--sm",b.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:a})]}):null}var D=t(9990),P=t(4494),W=["parentIndex"];function F(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,s=(0,T.A)(e,W);t>=0?n[t].children.push(s):a.push(s)})),a}function q(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=q({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function Z(e){var n=e.getBoundingClientRect();return n.top===n.bottom?Z(e.parentNode):n}function Y(e,n){var t,a,s=n.anchorTopOffset,i=e.find((function(e){return Z(e).top>=s}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Z(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(t=e[e.length-1])?t:null}function Q(){var e=(0,a.useRef)(0),n=(0,P.p)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function X(e){var n=(0,a.useRef)(void 0),t=Q();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,s=e.linkActiveClassName,i=e.minHeadingLevel,r=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],s=n;s<=t;s+=1)a.push("h"+s+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),c=Y(o,{anchorTopOffset:t.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===l)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}function $(e){var n=e.toc,t=e.className,a=e.linkClassName,s=e.isChild;return n.length?(0,r.jsx)("ul",{className:s?void 0:t,children:n.map((function(e){return(0,r.jsxs)("li",{children:[(0,r.jsx)(u.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,r.jsx)($,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const J=a.memo($);var K=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function ee(e){var n=e.toc,t=e.className,s=void 0===t?"table-of-contents table-of-contents__left-border":t,i=e.linkClassName,o=void 0===i?"table-of-contents__link":i,c=e.linkActiveClassName,l=void 0===c?void 0:c,d=e.minHeadingLevel,u=e.maxHeadingLevel,m=(0,T.A)(e,K),h=(0,P.p)(),f=null!=d?d:h.tableOfContents.minHeadingLevel,v=null!=u?u:h.tableOfContents.maxHeadingLevel,p=function(e){var n=e.toc,t=e.minHeadingLevel,s=e.maxHeadingLevel;return(0,a.useMemo)((function(){return q({toc:F(n),minHeadingLevel:t,maxHeadingLevel:s})}),[n,t,s])}({toc:n,minHeadingLevel:f,maxHeadingLevel:v});return X((0,a.useMemo)((function(){if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:v}}),[o,l,f,v])),(0,r.jsx)(J,Object.assign({toc:p,className:s,linkClassName:o},m))}const ne={tocCollapsibleButton:"tocCollapsibleButton_yCEE",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_XBlg"};var te=["collapsed"];function ae(e){var n=e.collapsed,t=(0,T.A)(e,te);return(0,r.jsx)("button",Object.assign({type:"button"},t,{className:(0,c.A)("clean-btn",ne.tocCollapsibleButton,!n&&ne.tocCollapsibleButtonExpanded,t.className),children:(0,r.jsx)(d.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const se={tocCollapsible:"tocCollapsible_lujx",tocCollapsibleContent:"tocCollapsibleContent_qEYG",tocCollapsibleExpanded:"tocCollapsibleExpanded_zG5v"};function ie(e){var n=e.toc,t=e.className,a=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,D.u)({initialState:!0}),o=i.collapsed,l=i.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,c.A)(se.tocCollapsible,!o&&se.tocCollapsibleExpanded,t),children:[(0,r.jsx)(ae,{collapsed:o,onClick:l}),(0,r.jsx)(D.N,{lazy:!0,className:se.tocCollapsibleContent,collapsed:o,children:(0,r.jsx)(ee,{toc:n,minHeadingLevel:a,maxHeadingLevel:s})})]})}const re={tocMobile:"tocMobile_wu1Z"};function oe(){var e=(0,i.u)(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(ie,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,c.A)(b.G.docs.docTocMobile,re.tocMobile)})}const ce={tableOfContents:"tableOfContents_xBht",docItemContainer:"docItemContainer_WrQD"};var le=["className"],de="table-of-contents__link toc-highlight",ue="table-of-contents__link--active";function me(e){var n=e.className,t=(0,T.A)(e,le);return(0,r.jsx)("div",{className:(0,c.A)(ce.tableOfContents,"thin-scrollbar",n),children:(0,r.jsx)(ee,Object.assign({},t,{linkClassName:de,linkActiveClassName:ue}))})}function he(){var e=(0,i.u)(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(me,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.G.docs.docTocDesktop})}var fe=t(9803),ve=t(7862),pe=t(3958),be=t(1297),ge=t(693);function xe(){var e=(0,P.p)().prism,n=(0,ge.G)().colorMode,t=e.theme,a=e.darkTheme||t;return"dark"===n?a:t}var je=t(9895),Ne=t(1342),Ae=t.n(Ne),Ce=(0,je.A)(/title=(["'])(.*?)\1/,{quote:1,title:2}),ye=(0,je.A)(/\{([\d,-]+)\}/,{range:1}),ke={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},Le=Object.assign({},ke,{lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}}),Be=Object.keys(ke);function we(e,n){var t=e.map((function(e){var t=Le[e],a=t.start,s=t.end;return"(?:"+a+"\\s*("+n.flatMap((function(e){var n,t;return[e.line,null==(n=e.block)?void 0:n.start,null==(t=e.block)?void 0:t.end].filter(Boolean)})).join("|")+")\\s*"+s+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")}function _e(e,n){var t=e.replace(/\n$/,""),a=n.language,s=n.magicComments,i=n.metastring;if(i&&ye.test(i)){var r=i.match(ye).groups.range;if(0===s.length)throw new Error("A highlight range has been given in code block's metastring (``` "+i+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var o=s[0].className,c=Ae()(r).filter((function(e){return e>0})).map((function(e){return[e-1,[o]]}));return{lineClassNames:Object.fromEntries(c),code:t}}if(void 0===a)return{lineClassNames:{},code:t};for(var l=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return we(["js","jsBlock"],n);case"jsx":case"tsx":return we(["js","jsBlock","jsx"],n);case"html":return we(["js","jsBlock","html"],n);case"python":case"py":case"bash":return we(["bash"],n);case"markdown":case"md":return we(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return we(["tex"],n);case"lua":case"haskell":case"sql":return we(["lua"],n);case"wasm":return we(["wasm"],n);case"vb":case"vba":case"visual-basic":return we(["vb","rem"],n);case"vbnet":return we(["vbnet","rem"],n);case"batch":return we(["rem"],n);case"basic":return we(["rem","f90"],n);case"fsharp":return we(["js","ml"],n);case"ocaml":case"sml":return we(["ml"],n);case"fortran":return we(["f90"],n);case"cobol":return we(["cobol"],n);default:return we(Be,n)}}(a,s),d=t.split("\n"),u=Object.fromEntries(s.map((function(e){return[e.className,{start:0,range:""}]}))),m=Object.fromEntries(s.filter((function(e){return e.line})).map((function(e){var n=e.className;return[e.line,n]}))),h=Object.fromEntries(s.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.start,n]}))),f=Object.fromEntries(s.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.end,n]}))),v=0;v<d.length;){var p=d[v].match(l);if(p){var b=p.slice(1).find((function(e){return void 0!==e}));m[b]?u[m[b]].range+=v+",":h[b]?u[h[b]].start=v:f[b]&&(u[f[b]].range+=u[f[b]].start+"-"+(v-1)+","),d.splice(v,1)}else v+=1}t=d.join("\n");var g={};return Object.entries(u).forEach((function(e){var n=e[0],t=e[1].range;Ae()(t).forEach((function(e){null!=g[e]||(g[e]=[]),g[e].push(n)}))})),{lineClassNames:g,code:t}}const Te={codeBlockContainer:"codeBlockContainer_I85C"};var Oe=["as"];function Ee(e){var n=e.as,t=(0,T.A)(e,Oe),a=function(e){var n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach((function(e){var a=e[0],s=e[1],i=n[a];i&&"string"==typeof s&&(t[i]=s)})),t}(xe());return(0,r.jsx)(n,Object.assign({},t,{style:a,className:(0,c.A)(t.className,Te.codeBlockContainer,b.G.common.codeBlock)}))}const He={codeBlockContent:"codeBlockContent_LawX",codeBlockTitle:"codeBlockTitle_TvIQ",codeBlock:"codeBlock_PMad",codeBlockStandalone:"codeBlockStandalone_drS8",codeBlockLines:"codeBlockLines_yvpm",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_ACvS",buttonGroup:"buttonGroup_DRGQ"};function Me(e){var n=e.children,t=e.className;return(0,r.jsx)(Ee,{as:"pre",tabIndex:0,className:(0,c.A)(He.codeBlockStandalone,"thin-scrollbar",t),children:(0,r.jsx)("code",{className:He.codeBlockLines,children:n})})}var Ie=t(5770),Se={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Ue(e,n){var t=(0,a.useState)(),s=t[0],i=t[1],r=(0,a.useCallback)((function(){var n;i(null==(n=e.current)?void 0:n.closest("[role=tabpanel][hidden]"))}),[e,i]);(0,a.useEffect)((function(){r()}),[r]),function(e,n,t){void 0===t&&(t=Se);var s=(0,Ie._q)(n),i=(0,Ie.Be)(t);(0,a.useEffect)((function(){var n=new MutationObserver(s);return e&&n.observe(e,i),function(){return n.disconnect()}}),[e,s,i])}(s,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(n(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Re=t(7809);const Ve={codeLine:"codeLine_MpFC",codeLineNumber:"codeLineNumber_bE9k",codeLineContent:"codeLineContent_VcU9"};function ze(e){var n=e.line,t=e.classNames,a=e.showLineNumbers,s=e.getLineProps,i=e.getTokenProps;1===n.length&&"\n"===n[0].content&&(n[0].content="");var o=s({line:n,className:(0,c.A)(t,a&&Ve.codeLine)}),l=n.map((function(e,n){return(0,r.jsx)("span",Object.assign({},i({token:e})),n)}));return(0,r.jsxs)("span",Object.assign({},o,{children:[a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:Ve.codeLineNumber}),(0,r.jsx)("span",{className:Ve.codeLineContent,children:l})]}):l,(0,r.jsx)("br",{})]}))}function Ge(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function De(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const Pe={copyButtonCopied:"copyButtonCopied_CJDM",copyButtonIcons:"copyButtonIcons_rGGE",copyButtonIcon:"copyButtonIcon_BTyd",copyButtonSuccessIcon:"copyButtonSuccessIcon_vWfO"};function We(e){var n=e.code,t=e.className,s=(0,a.useState)(!1),i=s[0],o=s[1],l=(0,a.useRef)(void 0),u=(0,a.useCallback)((function(){!function(e,n){var t=(void 0===n?{}:n).target,a=void 0===t?document.body:t;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var s=document.createElement("textarea"),i=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";var r=document.getSelection(),o=r.rangeCount>0&&r.getRangeAt(0);a.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(l){}s.remove(),o&&(r.removeAllRanges(),r.addRange(o)),i&&i.focus()}(n),o(!0),l.current=window.setTimeout((function(){o(!1)}),1e3)}),[n]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),(0,r.jsx)("button",{type:"button","aria-label":i?(0,d.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,d.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,d.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.A)("clean-btn",t,Pe.copyButton,i&&Pe.copyButtonCopied),onClick:u,children:(0,r.jsxs)("span",{className:Pe.copyButtonIcons,"aria-hidden":"true",children:[(0,r.jsx)(Ge,{className:Pe.copyButtonIcon}),(0,r.jsx)(De,{className:Pe.copyButtonSuccessIcon})]})})}function Fe(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const qe={wordWrapButtonIcon:"wordWrapButtonIcon_v2yM",wordWrapButtonEnabled:"wordWrapButtonEnabled_ZxYZ"};function Ze(e){var n=e.className,t=e.onClick,a=e.isEnabled,s=(0,d.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,r.jsx)("button",{type:"button",onClick:t,className:(0,c.A)("clean-btn",n,a&&qe.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,r.jsx)(Fe,{className:qe.wordWrapButtonIcon,"aria-hidden":"true"})})}function Ye(e){var n,t,s,i,o,l,d,u,m,h,f,v=e.children,p=e.className,b=void 0===p?"":p,g=e.metastring,x=e.title,j=e.showLineNumbers,N=e.language,A=(0,P.p)().prism,C=A.defaultLanguage,y=A.magicComments,k=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=N?N:null==(t=b.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:t.replace(/language-/,""))?n:C),L=xe(),B=(s=(0,a.useState)(!1),i=s[0],o=s[1],l=(0,a.useState)(!1),d=l[0],u=l[1],m=(0,a.useRef)(null),h=(0,a.useCallback)((function(){var e=m.current.querySelector("code");i?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),o((function(e){return!e}))}),[m,i]),f=(0,a.useCallback)((function(){var e=m.current,n=e.scrollWidth>e.clientWidth||m.current.querySelector("code").hasAttribute("style");u(n)}),[m]),Ue(m,f),(0,a.useEffect)((function(){f()}),[i,f]),(0,a.useEffect)((function(){return window.addEventListener("resize",f,{passive:!0}),function(){window.removeEventListener("resize",f)}}),[f]),{codeBlockRef:m,isEnabled:i,isCodeScrollable:d,toggle:h}),w=function(e){var n,t;return null!=(n=null==e||null==(t=e.match(Ce))?void 0:t.groups.title)?n:""}(g)||x,_=_e(v,{metastring:g,language:k,magicComments:y}),T=_.lineClassNames,O=_.code,E=null!=j?j:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(g);return(0,r.jsxs)(Ee,{as:"div",className:(0,c.A)(b,k&&!b.includes("language-"+k)&&"language-"+k),children:[w&&(0,r.jsx)("div",{className:He.codeBlockTitle,children:w}),(0,r.jsxs)("div",{className:He.codeBlockContent,children:[(0,r.jsx)(Re.f4,{theme:L,code:O,language:null!=k?k:"text",children:function(e){var n=e.className,t=e.style,a=e.tokens,s=e.getLineProps,i=e.getTokenProps;return(0,r.jsx)("pre",{tabIndex:0,ref:B.codeBlockRef,className:(0,c.A)(n,He.codeBlock,"thin-scrollbar"),style:t,children:(0,r.jsx)("code",{className:(0,c.A)(He.codeBlockLines,E&&He.codeBlockLinesWithNumbering),children:a.map((function(e,n){return(0,r.jsx)(ze,{line:e,getLineProps:s,getTokenProps:i,classNames:T[n],showLineNumbers:E},n)}))})})}}),(0,r.jsxs)("div",{className:He.buttonGroup,children:[(B.isEnabled||B.isCodeScrollable)&&(0,r.jsx)(Ze,{className:He.codeButton,onClick:function(){return B.toggle()},isEnabled:B.isEnabled}),(0,r.jsx)(We,{className:He.codeButton,code:O})]})]})]})}var Qe=["children"];function Xe(e){var n=e.children,t=(0,T.A)(e,Qe),s=(0,be.A)(),i=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),o="string"==typeof i?Ye:Me;return(0,r.jsx)(o,Object.assign({},t,{children:i}),String(s))}function $e(e){return(0,r.jsx)("code",Object.assign({},e))}var Je=t(8548);const Ke={details:"details_LAow",isBrowser:"isBrowser_pYkn",collapsibleContent:"collapsibleContent_PdnH"};var en=["summary","children"];function nn(e){return!!e&&("SUMMARY"===e.tagName||nn(e.parentElement))}function tn(e,n){return!!e&&(e===n||tn(e.parentElement,n))}function an(e){var n=e.summary,t=e.children,s=(0,T.A)(e,en);(0,Je.A)().collectAnchor(s.id);var i=(0,be.A)(),o=(0,a.useRef)(null),l=(0,D.u)({initialState:!s.open}),d=l.collapsed,u=l.setCollapsed,m=(0,a.useState)(s.open),h=m[0],f=m[1],v=a.isValidElement(n)?n:(0,r.jsx)("summary",{children:null!=n?n:"Details"});return(0,r.jsxs)("details",Object.assign({},s,{ref:o,open:h,"data-collapsed":d,className:(0,c.A)(Ke.details,i&&Ke.isBrowser,s.className),onMouseDown:function(e){nn(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;nn(n)&&tn(n,o.current)&&(e.preventDefault(),d?(u(!1),f(!0)):u(!0))},children:[v,(0,r.jsx)(D.N,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){u(e),f(!e)},children:(0,r.jsx)("div",{className:Ke.collapsibleContent,children:t})})]}))}const sn={details:"details_weYW"};var rn="alert alert--info";function on(e){var n=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return(0,r.jsx)(an,Object.assign({},n,{className:(0,c.A)(rn,sn.details,n.className)}))}function cn(e){var n=a.Children.toArray(e.children),t=n.find((function(e){return a.isValidElement(e)&&"summary"===e.type})),s=(0,r.jsx)(r.Fragment,{children:n.filter((function(e){return e!==t}))});return(0,r.jsx)(on,Object.assign({},e,{summary:t,children:s}))}function ln(e){return(0,r.jsx)(fe.A,Object.assign({},e))}const dn={containsTaskList:"containsTaskList_lUNE"};function un(e){if(void 0!==e)return(0,c.A)(e,(null==e?void 0:e.includes("contains-task-list"))&&dn.containsTaskList)}const mn={img:"img_MIb7"};function hn(e){var n,t=function(e){var n=a.Children.toArray(e),t=n.find((function(e){return a.isValidElement(e)&&"mdxAdmonitionTitle"===e.type})),s=n.filter((function(e){return e!==t}));return{mdxAdmonitionTitle:null==t?void 0:t.props.children,rest:s.length>0?(0,r.jsx)(r.Fragment,{children:s}):null}}(e.children),s=t.mdxAdmonitionTitle,i=t.rest,o=null!=(n=e.title)?n:s;return Object.assign({},e,o&&{title:o},{children:i})}const fn={admonition:"admonition_Yh8J",admonitionHeading:"admonitionHeading_IyQO",admonitionIcon:"admonitionIcon_JrM1",admonitionContent:"admonitionContent_BMis"};function vn(e){var n=e.type,t=e.className,a=e.children;return(0,r.jsx)("div",{className:(0,c.A)(b.G.common.admonition,b.G.common.admonitionType(n),fn.admonition,t),children:a})}function pn(e){var n=e.icon,t=e.title;return(0,r.jsxs)("div",{className:fn.admonitionHeading,children:[(0,r.jsx)("span",{className:fn.admonitionIcon,children:n}),t]})}function bn(e){var n=e.children;return n?(0,r.jsx)("div",{className:fn.admonitionContent,children:n}):null}function gn(e){var n=e.type,t=e.icon,a=e.title,s=e.children,i=e.className;return(0,r.jsxs)(vn,{type:n,className:i,children:[a||t?(0,r.jsx)(pn,{title:a,icon:t}):null,(0,r.jsx)(bn,{children:s})]})}function xn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}))}var jn={icon:(0,r.jsx)(xn,{}),title:(0,r.jsx)(d.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function Nn(e){return(0,r.jsx)(gn,Object.assign({},jn,e,{className:(0,c.A)("alert alert--secondary",e.className),children:e.children}))}function An(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}))}var Cn={icon:(0,r.jsx)(An,{}),title:(0,r.jsx)(d.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function yn(e){return(0,r.jsx)(gn,Object.assign({},Cn,e,{className:(0,c.A)("alert alert--success",e.className),children:e.children}))}function kn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}))}var Ln={icon:(0,r.jsx)(kn,{}),title:(0,r.jsx)(d.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function Bn(e){return(0,r.jsx)(gn,Object.assign({},Ln,e,{className:(0,c.A)("alert alert--info",e.className),children:e.children}))}function wn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}))}var _n={icon:(0,r.jsx)(wn,{}),title:(0,r.jsx)(d.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function Tn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}))}var On={icon:(0,r.jsx)(Tn,{}),title:(0,r.jsx)(d.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};var En={icon:(0,r.jsx)(wn,{}),title:(0,r.jsx)(d.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var Hn={note:Nn,tip:yn,info:Bn,warning:function(e){return(0,r.jsx)(gn,Object.assign({},_n,e,{className:(0,c.A)("alert alert--warning",e.className),children:e.children}))},danger:function(e){return(0,r.jsx)(gn,Object.assign({},On,e,{className:(0,c.A)("alert alert--danger",e.className),children:e.children}))}},Mn={secondary:function(e){return(0,r.jsx)(Nn,Object.assign({title:"secondary"},e))},important:function(e){return(0,r.jsx)(Bn,Object.assign({title:"important"},e))},success:function(e){return(0,r.jsx)(yn,Object.assign({title:"success"},e))},caution:function(e){return(0,r.jsx)(gn,Object.assign({},En,e,{className:(0,c.A)("alert alert--warning",e.className),children:e.children}))}};const In=Object.assign({},Hn,Mn);function Sn(e){var n,t=hn(e),a=(n=t.type,In[n]||(console.warn('No admonition component found for admonition type "'+n+'". Using Info as fallback.'),In.info));return(0,r.jsx)(a,Object.assign({},t))}const Un={Head:pe.A,details:cn,Details:cn,code:function(e){return function(e){return void 0!==e.children&&a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))}(e)?(0,r.jsx)($e,Object.assign({},e)):(0,r.jsx)(Xe,Object.assign({},e))},a:function(e){return(0,r.jsx)(u.A,Object.assign({},e))},pre:function(e){return(0,r.jsx)(r.Fragment,{children:e.children})},ul:function(e){return(0,r.jsx)("ul",Object.assign({},e,{className:un(e.className)}))},li:function(e){return(0,Je.A)().collectAnchor(e.id),(0,r.jsx)("li",Object.assign({},e))},img:function(e){return(0,r.jsx)("img",Object.assign({decoding:"async",loading:"lazy"},e,{className:(n=e.className,(0,c.A)(n,mn.img))}));var n},h1:function(e){return(0,r.jsx)(ln,Object.assign({as:"h1"},e))},h2:function(e){return(0,r.jsx)(ln,Object.assign({as:"h2"},e))},h3:function(e){return(0,r.jsx)(ln,Object.assign({as:"h3"},e))},h4:function(e){return(0,r.jsx)(ln,Object.assign({as:"h4"},e))},h5:function(e){return(0,r.jsx)(ln,Object.assign({as:"h5"},e))},h6:function(e){return(0,r.jsx)(ln,Object.assign({as:"h6"},e))},admonition:Sn,mermaid:function(){return null}};function Rn(e){var n=e.children;return(0,r.jsx)(ve.x,{components:Un,children:n})}function Vn(e){var n,t,a,s,o=e.children,l=(n=(0,i.u)(),t=n.metadata,a=n.frontMatter,s=n.contentTitle,a.hide_title||void 0!==s?null:t.title);return(0,r.jsxs)("div",{className:(0,c.A)(b.G.docs.docMarkdown,"markdown"),children:[l&&(0,r.jsx)("header",{children:(0,r.jsx)(fe.A,{as:"h1",children:l})}),(0,r.jsx)(Rn,{children:o})]})}var zn=t(7936),Gn=t(5305),Dn=t(8075);function Pn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const Wn={breadcrumbHomeIcon:"breadcrumbHomeIcon_cRws"};function Fn(){var e=(0,Dn.Ay)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(u.A,{"aria-label":(0,d.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,r.jsx)(Pn,{className:Wn.breadcrumbHomeIcon})})})}const qn={breadcrumbsContainer:"breadcrumbsContainer_dS81"};function Zn(e){var n=e.children,t=e.href,a="breadcrumbs__link";return e.isLast?(0,r.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,r.jsx)(u.A,{className:a,href:t,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:n})}):(0,r.jsx)("span",{className:a,children:n})}function Yn(e){var n=e.children,t=e.active,a=e.index,s=e.addMicrodata;return(0,r.jsxs)("li",Object.assign({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,c.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,r.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function Qn(){var e=(0,zn.OF)(),n=(0,Gn.Dt)();return e?(0,r.jsx)("nav",{className:(0,c.A)(b.G.docs.docBreadcrumbs,qn.breadcrumbsContainer),"aria-label":(0,d.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,r.jsx)(Fn,{}),e.map((function(n,t){var a=t===e.length-1,s="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,r.jsx)(Yn,{active:a,index:t,addMicrodata:!!s,children:(0,r.jsx)(Zn,{href:s,isLast:a,children:n.label})},t)}))]})}):null}function Xn(){return(0,r.jsx)(d.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function $n(){return(0,r.jsx)(d.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function Jn(){return(0,r.jsx)(pe.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Kn(){return(0,r.jsx)(d.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function et(){return(0,r.jsx)(d.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}function nt(e){var n=e.className;return(0,r.jsx)(Sn,{type:"caution",title:(0,r.jsx)(Kn,{}),className:(0,c.A)(n,b.G.common.draftBanner),children:(0,r.jsx)(et,{})})}function tt(e){var n=e.className;return(0,r.jsx)(Sn,{type:"caution",title:(0,r.jsx)(Xn,{}),className:(0,c.A)(n,b.G.common.unlistedBanner),children:(0,r.jsx)($n,{})})}function at(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Jn,{}),(0,r.jsx)(tt,Object.assign({},e))]})}function st(e){var n=e.metadata,t=n.unlisted,a=n.frontMatter;return(0,r.jsxs)(r.Fragment,{children:[(t||a.unlisted)&&(0,r.jsx)(at,{}),a.draft&&(0,r.jsx)(nt,{})]})}const it={docItemContainer:"docItemContainer_VVuS",docItemCol:"docItemCol_XIiB"};function rt(e){var n,t,a,s,o,d,u=e.children,m=(n=(0,i.u)(),t=n.frontMatter,a=n.toc,s=(0,l.l)(),o=t.hide_table_of_contents,d=!o&&a.length>0,{hidden:o,mobile:d?(0,r.jsx)(oe,{}):void 0,desktop:!d||"desktop"!==s&&"ssr"!==s?void 0:(0,r.jsx)(he,{})}),h=(0,i.u)().metadata;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,c.A)("col",!m.hidden&&it.docItemCol),children:[(0,r.jsx)(st,{metadata:h}),(0,r.jsx)(y,{}),(0,r.jsxs)("div",{className:it.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(Qn,{}),(0,r.jsx)(k,{}),m.mobile,(0,r.jsx)(Vn,{children:u}),(0,r.jsx)(G,{})]}),(0,r.jsx)(f,{})]})]}),m.desktop&&(0,r.jsx)("div",{className:"col col--3",children:m.desktop})]})}function ot(e){var n="docs-doc-id-"+e.content.metadata.id,t=e.content;return(0,r.jsx)(i._,{content:e.content,children:(0,r.jsxs)(s.e3,{className:n,children:[(0,r.jsx)(o,{}),(0,r.jsx)(rt,{children:(0,r.jsx)(t,{})})]})})}},1342:(e,n)=>{function t(e){let n,t=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))t.push(parseInt(a,10));else if(n=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,s,i]=n;if(a&&i){a=parseInt(a),i=parseInt(i);const e=a<i?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(i+=e);for(let n=a;n!==i;n+=e)t.push(n)}}return t}n.default=t,e.exports=t},7862:(e,n,t)=>{"use strict";t.d(n,{R:()=>r,x:()=>o});var a=t(2515);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);