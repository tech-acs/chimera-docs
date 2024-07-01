"use strict";(self.webpackChunkchimera_docs_use=self.webpackChunkchimera_docs_use||[]).push([[3200],{27:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=t(4848),a=t(8453);const n={sidebar_position:7,slug:"../building-your-dashboard/creating-reports"},s="Creating reports",i={id:"Building your dashboard/Creating reports",title:"Creating reports",description:"Reports are compiled tabular datasets presented as CSV or Excel file formats. They are automatically generated based on a set schedule and can also be automatically emailed to designated users of the dashboard.",source:"@site/docs/developer/Building your dashboard/Creating reports.md",sourceDirName:"Building your dashboard",slug:"/building-your-dashboard/creating-reports",permalink:"/chimera-docs/docs/developer/building-your-dashboard/creating-reports",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,slug:"../building-your-dashboard/creating-reports"},sidebar:"docsSidebar",previous:{title:"Indicator organization",permalink:"/chimera-docs/docs/developer/building-your-dashboard/indicator-organization"},next:{title:"Creating map based indicators",permalink:"/chimera-docs/docs/developer/building-your-dashboard/creating-map-based-indicators"}},d={},c=[{value:"Make report command",id:"make-report-command",level:2},{value:"Implementing reports",id:"implementing-reports",level:2}];function l(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"creating-reports",children:"Creating reports"}),"\n",(0,o.jsx)(r.p,{children:"Reports are compiled tabular datasets presented as CSV or Excel file formats. They are automatically generated based on a set schedule and can also be automatically emailed to designated users of the dashboard."}),"\n",(0,o.jsx)(r.h2,{id:"make-report-command",children:"Make report command"}),"\n",(0,o.jsxs)(r.p,{children:["The one and only way to create reports is by running the ",(0,o.jsx)(r.code,{children:"chimera:make-report"})," command."]}),"\n",(0,o.jsx)(r.h2,{id:"implementing-reports",children:"Implementing reports"}),"\n",(0,o.jsx)(r.p,{children:"Obviously, you will have to write some code in your generated report file so that it queries and returns the data that needs to be present in the generated report file."}),"\n",(0,o.jsx)(r.p,{children:"You need to implement the getData() method and make sure it returns a Collection. The keys of the collection will become the column headers of the report spreadsheet and the values will become the rows."})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>i});var o=t(6540);const a={},n=o.createContext(a);function s(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);