"use strict";(self.webpackChunkchimera_docs_use=self.webpackChunkchimera_docs_use||[]).push([[8955],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},733:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:1,slug:"../deployment-guide/configuring-email-server"},a="Configuring email server",l={unversionedId:"Deployment guide/Configuring email server",id:"Deployment guide/Configuring email server",title:"Configuring email server",description:"By default, emailing is disabled.",source:"@site/docs/developer/Deployment guide/Configuring email server.md",sourceDirName:"Deployment guide",slug:"/deployment-guide/configuring-email-server",permalink:"/chimera-docs/fr/docs/developer/deployment-guide/configuring-email-server",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"../deployment-guide/configuring-email-server"},sidebar:"docsSidebar",previous:{title:"Customizing the look and feel",permalink:"/chimera-docs/fr/docs/developer/building-your-dashboard/customizing-the-look-and-feel"},next:{title:"Deploy using docker",permalink:"/chimera-docs/fr/docs/developer/deployment-guide/deploy-using-docker"}},s={},c=[],u={toc:c};function p(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-email-server"},"Configuring email server"),(0,i.kt)("p",null,"By default, emailing is disabled. "),(0,i.kt)("p",null,"There are various emails that can be sent by the dashboard. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Invitation links")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Password recovery links (forgot password), etc."))),(0,i.kt)("p",null,"To be able to send emails from the dashboard, you will need to have a mail server prepared."),(0,i.kt)("p",null,"Configurations can be entered in the production .env file as described ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/getting-started/configuration#mail"},"here")))}p.isMDXComponent=!0}}]);