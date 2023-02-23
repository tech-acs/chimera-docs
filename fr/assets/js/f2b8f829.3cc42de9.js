"use strict";(self.webpackChunkchimera_docs_use=self.webpackChunkchimera_docs_use||[]).push([[4160],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),y=o,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5497:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:5,slug:"../deployment-guide/linking-storage-directory"},a="Linking storage directory",s={unversionedId:"Deployment guide/Linking storage directory",id:"Deployment guide/Linking storage directory",title:"Linking storage directory",description:"Files are by default stored in the storage/app directory. This prevents files from been publicly accessible (that is, anyone assessing your files over the internet without needing permission).",source:"@site/docs/developer/Deployment guide/Linking storage directory.md",sourceDirName:"Deployment guide",slug:"/deployment-guide/linking-storage-directory",permalink:"/chimera-docs/fr/docs/developer/deployment-guide/linking-storage-directory",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"../deployment-guide/linking-storage-directory"},sidebar:"docsSidebar",previous:{title:"Running queue workers",permalink:"/chimera-docs/fr/docs/developer/deployment-guide/running-queue-workers"},next:{title:"Production checklist",permalink:"/chimera-docs/fr/docs/developer/deployment-guide/production-checklist"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"linking-storage-directory"},"Linking storage directory"),(0,o.kt)("p",null,"Files are by default stored in the ",(0,o.kt)("em",{parentName:"p"},"storage/app")," directory. This prevents files from been publicly accessible (that is, anyone assessing your files over the internet without needing permission)."),(0,o.kt)("p",null,"So to display files in our application from the storage directory correctly, we will create a symbolic link to the public directory using the following artisan command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php artisan storage:link\n")),(0,o.kt)("p",null,"For example, profile photos are stored in the storage directory and unless you have created the symbolic link, profile pictures will not be visible."),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/9.x/filesystem#the-public-disk"},"relevant section")," of the Laravel documentation to read more about it."))}u.isMDXComponent=!0}}]);