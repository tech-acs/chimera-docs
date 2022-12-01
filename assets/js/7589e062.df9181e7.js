"use strict";(self.webpackChunkchimera_docs_use=self.webpackChunkchimera_docs_use||[]).push([[8148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4,slug:"../building-your-dashboard/creating-indicators"},r="Creating indicators",l={unversionedId:"Building your dashboard/Creating indicators",id:"Building your dashboard/Creating indicators",title:"Creating indicators",description:"Now that you have your core configuration in place, you can start creating indicators. Indicator creation involves running a chimera command (interactive) on the command line and will result in the creation of files (component class) and addition of entries in to the database for created indicators, including permissions.",source:"@site/docs/developer/Building your dashboard/Creating indicators.md",sourceDirName:"Building your dashboard",slug:"/building-your-dashboard/creating-indicators",permalink:"/chimera-docs/docs/developer/building-your-dashboard/creating-indicators",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"../building-your-dashboard/creating-indicators"},sidebar:"docsSidebar",previous:{title:"Creating scorecards",permalink:"/chimera-docs/docs/developer/building-your-dashboard/creating-scorecards"},next:{title:"Indicator organization",permalink:"/chimera-docs/docs/developer/building-your-dashboard/indicator-organization"}},d={},c=[{value:"Make indicator command",id:"make-indicator-command",level:2},{value:"Indicator templates",id:"indicator-templates",level:2},{value:"Deleting indicators",id:"deleting-indicators",level:2},{value:"Editing and publishing indicators",id:"editing-and-publishing-indicators",level:2},{value:"Implementing generated indicators",id:"implementing-generated-indicators",level:2}],s={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-indicators"},"Creating indicators"),(0,i.kt)("p",null,"Now that you have your core configuration in place, you can start creating indicators. Indicator creation involves running a chimera command (interactive) on the command line and will result in the creation of files (component class) and addition of entries in to the database for created indicators, including permissions."),(0,i.kt)("p",null,"The created indicator file will contain the basics of an indicator and it extends the base Chart class but will still require you two write some PHP code to implement your indicator fully."),(0,i.kt)("h2",{id:"make-indicator-command"},"Make indicator command"),(0,i.kt)("p",null,"The one and only way to create indicators is by running the ",(0,i.kt)("inlineCode",{parentName:"p"},"chimera:make-indicator")," command."),(0,i.kt)("p",null,"The command is interactive and allows you to control various aspects of the generated file."),(0,i.kt)("p",null,"You can choose to have some working sample code included in the generated file so that you can immediately start seeing realistic looking indicators in your dashboard. "),(0,i.kt)("p",null,"You can also choose to download and use indicator templates that have already been partially built out by us (and hopefully other contributors)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"php artisan chimera:make-indicator\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please pay special attention when you provide a name for your indicator. It is what will became both the class and file name for you indicator and will create directories if you specify it.\nPlease read the instructions and examples on the command line very carefully.")),(0,i.kt)("p",null,"For example, the following will result in the creation of a folder called Enumeration in the ",(0,i.kt)("span",{className:"text--danger text--light"},"app/Http/Livewire")," directory and a file named ",(0,i.kt)("em",{parentName:"p"},"HouseholdsEnumerated.php")," inside the Enumeration directory."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Make indicator command example",src:n(9640).Z,width:"963",height:"271"})),(0,i.kt)("h2",{id:"indicator-templates"},"Indicator templates"),(0,i.kt)("p",null,"Indicator templates are partial implementations of common indicators such as population pyramid, household size, sex ratio, etc."),(0,i.kt)("p",null,"You can find more information about implemented indicators from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tech-acs/chimera-indicator-templates"},"chimera-indicator-templates")," github repository."),(0,i.kt)("p",null,"You can make use of them by first downloading them into your dashboard so that they become available for selection when you are running the chimera:make-indicator command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"php artisan chimera:download-indicator-templates\n")),(0,i.kt)("p",null,"Once you have generated your indicator file, you can then edit it in your IDE of choice. Coding indicators is a rather simple affair.\nThe following are the three methods that you usually need to implement to have a functioning indicator. As they are all implemented in the base class, you can choose to override them and provide implementations for one or all of them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"getData(array $filter): Collection\n\ngetTraces(Collection $data, array $filter): array\n\ngetLayout(array $filter): array\n")),(0,i.kt)("p",null,"getData() is expected to have your database query and must return an Eloquent Collection"),(0,i.kt)("p",null,"getTraces() uses the data returned by getData() and formulates the traces you intend to have in your indicator."),(0,i.kt)("p",null,"getLayout() just like the other methods, getLayout() returns the default layout provided which you can receive, modify and return."),(0,i.kt)("h2",{id:"deleting-indicators"},"Deleting indicators"),(0,i.kt)("p",null,"Deleting indicators (including permissions and database entry) can be accomplished by using the generic chimera:delete command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"php artisan chimera:delete\n")),(0,i.kt)("h2",{id:"editing-and-publishing-indicators"},"Editing and publishing indicators"),(0,i.kt)("p",null,"Editing and publishing indicators can be accomplished via the 'Manage' menu."),(0,i.kt)("p",null,"There, you can edit indicator titles, descriptions, contextual help text and also provide multilingual translations for applicable fields."),(0,i.kt)("p",null,"You can also add the indicator to one or more of the pages you have already created. "),(0,i.kt)("p",null,"The default state of indicators when they are created on the command line is to be in 'draft' mode. You can publish them so that they can become visible on the pages they are added to by using the status toggle button."),(0,i.kt)("h2",{id:"implementing-generated-indicators"},"Implementing generated indicators"),(0,i.kt)("p",null,"There are three possible versions your generated indicator file might be in."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Empty"))),(0,i.kt)("p",null,"If you choose not to use indicator templates and also opt out of the inclusion of sample code during the generation, you will end up with the following file. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Http\\Livewire\\Households;\n\nuse App\\Http\\Livewire\\Chart;\n\nclass BirthRate extends Chart\n{\n\n}\n\n")),(0,i.kt)("p",null,"If you publish it and see the results on the destination page, you will see an empty graph that displays a standard text stating the lack of data for the indicator."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"With sample code"))),(0,i.kt)("p",null,"If you choose to include sample code during the generation of the indicator, the resulting file will have three methods implemented (overriding the base class implementations) inside the class. "),(0,i.kt)("p",null,"If you previewed it, you would see something like the following"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Preview of indicator with sample code",src:n(6100).Z,width:"1227",height:"600"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"From a template"))),(0,i.kt)("p",null,'If you select an existing template during the generation of the indicator, the resulting file will have a "standard" implementation of the said indicator. In this scenario, you just need to replace the getData() method with your own implementation so that you are displaying actual data from your own questionnaire (data source).'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Preview of indicator with sample code",src:n(2475).Z,width:"1238",height:"615"})))}u.isMDXComponent=!0},9640:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/make-indicator-command-4b74c2e26c50c68bfd438bbf51a69145.png"},2475:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/preview-of-indicator-from-template-19009496cb79a5cf512782c98ac232df.png"},6100:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/preview-of-indicator-with-sample-code-68dc9dee849e305f4390692a5a38543b.png"}}]);