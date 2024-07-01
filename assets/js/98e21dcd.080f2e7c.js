"use strict";(self.webpackChunkchimera_docs_use=self.webpackChunkchimera_docs_use||[]).push([[5411],{258:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var i=t(4848),r=t(8453);const o={sidebar_position:2,slug:"../building-your-dashboard/core-configuration"},n="Core configuration",s={id:"Building your dashboard/Core configuration",title:"Core configuration",description:"Now that you have scaffolded a new dashboard, it is time to start filling it out with indicators and all the other things that make it a useful dashboard.",source:"@site/docs/developer/Building your dashboard/Core configuration.md",sourceDirName:"Building your dashboard",slug:"/building-your-dashboard/core-configuration",permalink:"/chimera-docs/docs/developer/building-your-dashboard/core-configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"../building-your-dashboard/core-configuration"},sidebar:"docsSidebar",previous:{title:"Folder structure",permalink:"/chimera-docs/docs/developer/building-your-dashboard/folder-structure"},next:{title:"Creating scorecards",permalink:"/chimera-docs/docs/developer/building-your-dashboard/creating-scorecards"}},d={},h=[{value:"Data sources/questionnaires",id:"data-sourcesquestionnaires",level:2},{value:"Area hierarchy \ud83d\udee0",id:"area-hierarchy-",level:2},{value:"Area importation \ud83d\udee0",id:"area-importation-",level:2},{value:"Reference value importation \ud83d\udee0",id:"reference-value-importation-",level:2}];function c(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"core-configuration",children:"Core configuration"}),"\n",(0,i.jsx)(a.p,{children:"Now that you have scaffolded a new dashboard, it is time to start filling it out with indicators and all the other things that make it a useful dashboard."}),"\n",(0,i.jsx)(a.p,{children:"The first thing you need to put in place are your core settings and configurations."}),"\n",(0,i.jsx)(a.p,{children:"These are:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Data source setting"}),"\n",(0,i.jsx)(a.li,{children:"Area hierarchy configuration"}),"\n",(0,i.jsx)(a.li,{children:"Areas importation"}),"\n",(0,i.jsx)(a.li,{children:"Reference values importation"}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"data-sourcesquestionnaires",children:"Data sources/questionnaires"}),"\n",(0,i.jsx)(a.p,{children:"Your dashboard can connect to and work with multiple data sources (databases) and your census/survey does not need to be using CSPro. Our dashboard works with any kind of data in any kind of database as long as Laravel has a driver for it."}),"\n",(0,i.jsx)(a.p,{children:"Out-of-the-box, we support MySQL, MariaDB, Microsoft SQL, PostgreSQL and SQLite databases as data sources."}),"\n",(0,i.jsx)(a.p,{children:"As you should already be logged in using a 'Manager/Super Admin' type account, you can directly head to the 'Management' menu (see screenshot below) in your dashboard and start adding data sources."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Management menu",src:t(3895).A+"",width:"561",height:"128"})}),"\n",(0,i.jsx)(a.p,{children:"To create a data source, you need to provide two sets of information. The first one deals with the census/survey exercise and the second one pertains to the database where the respective data is stored."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Management menu",src:t(2426).A+"",width:"1236",height:"723"})}),"\n",(0,i.jsxs)(a.admonition,{type:"info",children:[(0,i.jsxs)(a.p,{children:["To be able to set/apply the core configurations, you need to enable ",(0,i.jsx)(a.em,{children:"developer"})," mode \ud83d\udee0"]}),(0,i.jsxs)(a.p,{children:["Developer mode can only be enabled if you are logged in using a ",(0,i.jsx)(a.em,{children:"Super Admin"})," account. To enable it, go to the user profile page and tap/click seven times in the small blank area just above the first horizontal divider."]}),(0,i.jsx)(a.p,{children:"Once enabled, it will stay so only for the current logged-in session and can also be manually disabled after you are done applying the desired core configurations."})]}),"\n",(0,i.jsx)(a.h2,{id:"area-hierarchy-",children:"Area hierarchy \ud83d\udee0"}),"\n",(0,i.jsx)(a.p,{children:"What we refer to as area hierarchy is the administrative division (administrative unit, country subdivision, administrative region, subnational entity, etc.) you choose to employ in your census/survey exercise."}),"\n",(0,i.jsx)(a.p,{children:"These are usually the mandate of one branch of the government and are either adopted as is or modified by National Statistical Offices (NSOs) to fit their particular need."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:'The common names for the principal (largest) administrative divisions are: states (i.e. "subnational states", rather than sovereign states), provinces, lands, oblasts, governorates, cantons, prefectures, counties, regions, departments, and emirates. These, in turn, are often subdivided into smaller administrative units known by names such as circuits, counties, comarcas, raions, jude\u021be, or districts, which are further subdivided into the municipalities, communes or communities constituting the smallest units of subdivision.'})}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:["Source Wikipedia article: ",(0,i.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Administrative_division",children:"Administrative division"})]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Go to the 'Area Hierarchy' menu item under the management dropdown menu."}),"\n",(0,i.jsx)(a.p,{children:"You should see an 'Add' button as long as you are in development mode, otherwise, you will only see a list of area hierarchies you have already added or an empty table."}),"\n",(0,i.jsxs)(a.p,{children:["(You need to have ",(0,i.jsx)(a.em,{children:"developer mode"})," enabled to be able to create your area hierarchy. If developer mode is not enabled, you will not see the 'Add' button.)"]}),"\n",(0,i.jsx)(a.p,{children:"Please note that the order of appearance of the area entries is important. It signifies hierarchy."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Management menu",src:t(1971).A+"",width:"1237",height:"275"})}),"\n",(0,i.jsx)(a.h2,{id:"area-importation-",children:"Area importation \ud83d\udee0"}),"\n",(0,i.jsx)(a.p,{children:"Once you define your area hierarchy, the next step is to actually import your areas into the system so that it can be used for filtering various indicators, creating maps, etc."}),"\n",(0,i.jsx)(a.p,{children:"You have the option of importing the data from two file formats:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Shapefiles (preferred)"})}),"\n",(0,i.jsx)(a.p,{children:"Shapefile (.shp, .shx and .dbf) is the preferred file format for importing areas into your dashboard because it contains both the spatial data and the area metadata (names and codes)."}),"\n",(0,i.jsxs)(a.p,{children:["When importing the various levels via shapefiles, the dashboard will take care of associating them with each other (creates the parent-child relationship) by matching them ",(0,i.jsx)(a.strong,{children:"spatially"}),". Therefore, it is important to make sure that all your shapefiles are consistent and that they are ",(0,i.jsx)(a.strong,{children:"spatially"})," contained by one another."]}),"\n",(0,i.jsx)(a.p,{children:'The algorithm has a threshold of about 70% minimum containment that it uses to pair parent-child areas. If you choose to "simplify" you shapefiles, make sure that you do not over do it. You can overlay them to check that lower levels are still contained (at least 70%) by their immediate higher level area.'}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Importing areas from shapefile",src:t(3534).A+"",width:"1242",height:"465"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.admonition,{type:"caution",children:(0,i.jsx)(a.p,{children:"Please make sure that the shapefile you are attempting to import has the EPSG:4326 - WGS 84 Coordinate Reference System (CRS)."})}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Spreadsheets (.csv)"})}),"\n",(0,i.jsx)(a.p,{children:"You can also import your areas via a csv file but here you will not have the maps and therefore can not have map based indicators in you dashboard."}),"\n",(0,i.jsx)(a.p,{children:"When importing, you can use the interface to map which columns of your spreadsheet hold which area level (name and code) and are also able to apply zero padding to your codes to match how they appear in your source data (questionnaire)."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Importing areas from csv",src:t(9199).A+"",width:"1242",height:"746"})}),"\n",(0,i.jsx)(a.p,{children:"The imported data should look something like the following"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Imported area hierarchy",src:t(788).A+"",width:"1241",height:"955"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:["The example spreadsheet data for South Africa, seen above, was sourced from ",(0,i.jsx)(a.a,{href:"https://data.humdata.org/",children:"The Humanitarian Data Exchange"})]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:'When the process has completed, you will receive a notification. If the importation was successful, you will find the path column formula in the notification message, which you can use on the same spreadsheet file to\ngenerate a new "path" column which will be used to uniquely identify the areas and which is also required when you import reference values.'}),"\n",(0,i.jsx)(a.admonition,{type:"caution",children:(0,i.jsx)(a.p,{children:"You must make sure that your area codes in the csv or shapefiles match your codes from the database. If they need zero padding, the csv importer can help you with that but you will have to apply the zero-padding to the shapefiles yourself. If they also need concatenation, make sure you take care of that before attempting to import them."})}),"\n",(0,i.jsx)(a.admonition,{type:"tip",children:(0,i.jsx)(a.p,{children:"In case you have already imported your areas (EA Frame) via a csv file, you can then also import your shapefile to augment them with spatial data. Make sure the codes in the shapefiles match the ones you have already imported in the csv file."})}),"\n",(0,i.jsxs)(a.admonition,{type:"info",children:[(0,i.jsx)(a.p,{children:"When trying to import a file, if you get an error message stating that the file must not be of size greater than 12MB, then you can override this default file size limit in the livewire.php config file."}),(0,i.jsxs)(a.p,{children:["Just follow the instructions in the Laravel Livewire documentation ",(0,i.jsx)(a.a,{href:"https://livewire.laravel.com/docs/uploads#global-validation",children:"here"})]})]}),"\n",(0,i.jsx)(a.h2,{id:"reference-value-importation-",children:"Reference value importation \ud83d\udee0"}),"\n",(0,i.jsx)(a.p,{children:"What we generally refer to as reference values are concepts such as 'expected values' and 'target values'. These are used for comparing your actual data against so that you have some frame of reference to better understand the data/indicator your are viewing."}),"\n",(0,i.jsx)(a.p,{children:"To import reference values, you will need to have the data in a CSV file and it needs to be at the lowest area hierarchy level (usually EA)."}),"\n",(0,i.jsx)(a.p,{children:"The file needs to have at least two columns. One for path (can be generated using the formula provided on the top of the form) of your lowest area hierarchy and another for the value of the reference value you are importing. It is common to have multiple columns, each named by the reference value they represent, in the same spreadsheet."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Sample reference values CSV file",src:t(8010).A+"",width:"1429",height:"633"})}),"\n",(0,i.jsx)(a.p,{children:"The following screenshot depicts how one would do mapping of columns to import reference values from the above CSV file."}),"\n",(0,i.jsx)(a.p,{children:'You can see that the number of households (number_of_hh) and population are being imported here. Also note that since the data is at the last area hierarchy level, and as it is population data, the "Is additive" option has been selected and therefore the data will be summed and saved for the respective higher level areas. We are also selecting the column containing the paths we have generated after having imported the areas, in an earlier step. It is used to join the reference values with their respective areas.'}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Importing reference values from CSV file",src:t(7514).A+"",width:"1249",height:"446"})})]})}function l(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1971:(e,a,t)=>{t.d(a,{A:()=>i});const i="data:image/png;base64,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"},2426:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/create-questionnaire-c75e8b075f6064602efd58df3d9f5b27.png"},788:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/imported-area-hierarchy-a5a59c92f844ce037d0195f9fdccdd6f.png"},9199:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/importing-area-hierarchy-from-csv-cf052e10b3af8c64d30b96c5cacf72eb.png"},3534:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/importing-area-hierarchy-from-shapefile-4a4eabe2b7ffbd31583239801f4515dc.png"},7514:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/importing-reference-values-bdc7853ea51ae83e76a540762c38b1c8.png"},3895:(e,a,t)=>{t.d(a,{A:()=>i});const i="data:image/png;base64,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"},8010:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/reference-value-spreadsheet-252b08ce37489bed9c10fb4ab2299a99.png"},8453:(e,a,t)=>{t.d(a,{R:()=>n,x:()=>s});var i=t(6540);const r={},o=i.createContext(r);function n(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);