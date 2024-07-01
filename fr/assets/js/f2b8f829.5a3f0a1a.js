"use strict";(self.webpackChunkchimera_docs_use=self.webpackChunkchimera_docs_use||[]).push([[5948],{9605:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=i(4848),n=i(8453);const o={sidebar_position:5,slug:"../deployment-guide/linking-storage-directory"},s="Linking storage directory",c={id:"Deployment guide/Linking storage directory",title:"Linking storage directory",description:"Files are by default stored in the storage/app directory. This prevents files from been publicly accessible (that is, anyone assessing your files over the internet without needing permission).",source:"@site/docs/developer/Deployment guide/Linking storage directory.md",sourceDirName:"Deployment guide",slug:"/deployment-guide/linking-storage-directory",permalink:"/chimera-docs/fr/docs/developer/deployment-guide/linking-storage-directory",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"../deployment-guide/linking-storage-directory"},sidebar:"docsSidebar",previous:{title:"Running queue workers",permalink:"/chimera-docs/fr/docs/developer/deployment-guide/running-queue-workers"},next:{title:"Production checklist",permalink:"/chimera-docs/fr/docs/developer/deployment-guide/production-checklist"}},d={},l=[];function a(e){const t={a:"a",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"linking-storage-directory",children:"Linking storage directory"}),"\n",(0,r.jsxs)(t.p,{children:["Files are by default stored in the ",(0,r.jsx)(t.em,{children:"storage/app"})," directory. This prevents files from been publicly accessible (that is, anyone assessing your files over the internet without needing permission)."]}),"\n",(0,r.jsx)(t.p,{children:"So to display files in our application from the storage directory correctly, we will create a symbolic link to the public directory using the following artisan command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"php artisan storage:link\n"})}),"\n",(0,r.jsx)(t.p,{children:"For example, profile photos are stored in the storage directory and unless you have created the symbolic link, profile pictures will not be visible."}),"\n",(0,r.jsxs)(t.p,{children:["Please refer to the ",(0,r.jsx)(t.a,{href:"https://laravel.com/docs/9.x/filesystem#the-public-disk",children:"relevant section"})," of the Laravel documentation to read more about it."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>c});var r=i(6540);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);