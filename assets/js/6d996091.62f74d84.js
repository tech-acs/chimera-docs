"use strict";(self.webpackChunkchimera_docs_use=self.webpackChunkchimera_docs_use||[]).push([[515],{7561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(4848),a=n(8453);const i={sidebar_position:3,slug:"../deployment-guide/migrating-data"},r="Migrating data",s={id:"Deployment guide/Migrating data",title:"Migrating data",description:"When you are developing your dashboard by using tools such as the various make commands, data will be inserted into the postgres database.",source:"@site/docs/developer/Deployment guide/Migrating data.md",sourceDirName:"Deployment guide",slug:"/deployment-guide/migrating-data",permalink:"/chimera-docs/docs/developer/deployment-guide/migrating-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"../deployment-guide/migrating-data"},sidebar:"docsSidebar",previous:{title:"Deploy using docker",permalink:"/chimera-docs/docs/developer/deployment-guide/deploy-using-docker"},next:{title:"Running queue workers",permalink:"/chimera-docs/docs/developer/deployment-guide/running-queue-workers"}},d={},l=[];function c(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"migrating-data",children:"Migrating data"}),"\n",(0,o.jsx)(t.p,{children:"When you are developing your dashboard by using tools such as the various make commands, data will be inserted into the postgres database.\nWhen you are ready for deployment, you can use the data-export and data-import commands to migrate the data from your development machine\nto the production server."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"php artisan chimera:data-export\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Running the above command will generate a file named ",(0,o.jsx)(t.em,{children:"data-export.sql"}),". It contains the relevant parts of your postgres database (some tables only).\nYou can check this file into git so that it becomes available on your production server."]}),"\n",(0,o.jsx)(t.p,{children:"And on your production server, you can run the following command to import the data you have exported on your development server. If it encounters data\nthat has already been inserted, it will be ignored."}),"\n",(0,o.jsx)(t.p,{children:"To learn about all the options this command offers, you can run it with the --help option which will display an exhaustive list of all available options and their meanings."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"php artisan chimera:data-import\n"})}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["In order to use these two commands, you will need to have the ",(0,o.jsx)(t.em,{children:"PostgreSQL Client"})," installed on the system (not PostgreSQL server itself, just the client)"]}),(0,o.jsxs)(t.p,{children:["chimera",":data-export"," makes use of ",(0,o.jsx)(t.strong,{children:"pg_dump"})," and chimera",":data-import"," uses ",(0,o.jsx)(t.strong,{children:"psql"})]}),(0,o.jsx)(t.p,{children:"On Ubuntu, you would install PostgresQL Client like so,"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sudo apt install postgresql-client\n"})})]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(6540);const a={},i=o.createContext(a);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);