"use strict";(self.webpackChunkchimera_docs_use=self.webpackChunkchimera_docs_use||[]).push([[7893],{731:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>s,default:()=>l,frontMatter:()=>t,metadata:()=>o,toc:()=>r});var c=n(4848),i=n(8453);const t={sidebar_position:2,slug:"../advanced-topics/caching"},s="Caching",o={id:"Advanced topics/Caching",title:"Caching",description:"The Dashboard Starter Kit comes with a complete caching strategy built-in.",source:"@site/docs/developer/Advanced topics/Caching.md",sourceDirName:"Advanced topics",slug:"/advanced-topics/caching",permalink:"/chimera-docs/fr/docs/developer/advanced-topics/caching",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"../advanced-topics/caching"},sidebar:"docsSidebar",previous:{title:"Under the hood",permalink:"/chimera-docs/fr/docs/developer/advanced-topics/under-the-hood"},next:{title:"Localization",permalink:"/chimera-docs/fr/docs/developer/advanced-topics/localization"}},h={},r=[{value:"chimera",id:"chimera",level:3},{value:"chimera",id:"chimera-1",level:3},{value:"chimera",id:"chimera-2",level:3},{value:"Cache clearing",id:"cache-clearing",level:2},{value:"Cached data time stamp",id:"cached-data-time-stamp",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.h1,{id:"caching",children:"Caching"}),"\n",(0,c.jsx)(a.p,{children:"The Dashboard Starter Kit comes with a complete caching strategy built-in."}),"\n",(0,c.jsxs)(a.p,{children:["Caching of results is always happening behind the scenes. Every published indicator, scorecard, case stat and map indicator will be cached for a set amount of time that is determined by the CACHE_TTL_SECONDS setting in your .env file. The default value of the caching time is ",(0,c.jsx)(a.strong,{children:"thirty minutes"}),"."]}),"\n",(0,c.jsxs)(a.p,{children:["You will most likely want to use your own caching strategy that is appropriate to your data size and other needs. You will therefore need to schedule tasks to update these caches regularly. This is achieved by using the ",(0,c.jsx)(a.code,{children:"chimera:cache"})," group of commands. You can run them manually as such but you should schedule them using Laravel's scheduled tasks. Data cached using any of the cache commands does not expire. It is cached ",(0,c.jsx)(a.em,{children:'"forever"'})," as cache replacement strategy is relinquished to the developer and should be achieved through a well thought out scheduling of the cache commands."]}),"\n",(0,c.jsxs)(a.p,{children:["For details, please refer to the ",(0,c.jsx)(a.a,{href:"https://laravel.com/docs/9.x/scheduling#scheduling-artisan-commands",children:"Task Scheduling"})," section of the Laravel documentation."]}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-php",children:"$schedule->command('chimera:cache --data-source=enumeration')->everySixHours();\n"})}),"\n",(0,c.jsxs)(a.p,{children:["Basically, you add the above type of code to the schedule() method of your ",(0,c.jsx)(a.code,{children:"App\\Console\\Kernel"})," class file for each of your cache commands."]}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{children:"php artisan chimera:cache-indicators\nphp artisan chimera:cache-scorecards\nphp artisan chimera:cache-mapindicators\nphp artisan chimera:cache-casestats\n"})}),"\n",(0,c.jsxs)(a.h3,{id:"chimera",children:["chimera",":cache-indicators"]}),"\n",(0,c.jsx)(a.p,{children:"The command has three options which you can use to control how caching happens"}),"\n",(0,c.jsxs)(a.ul,{children:["\n",(0,c.jsxs)(a.li,{children:["\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.em,{children:"max-level"})," : this option, when passed, will control the level depth of caching that will occur for indicators. By default, only national and first area levels will be cached. Accepts a number between 1 and the total number of area hierarchies you have"]}),"\n"]}),"\n",(0,c.jsxs)(a.li,{children:["\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.em,{children:"data-source"})," : this option can be used to update the cache of indicators that belong to that specific data source. By default, indicators across all data sources will be updated"]}),"\n"]}),"\n",(0,c.jsxs)(a.li,{children:["\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.em,{children:"tag"})," : this option, when passed, will specifically target indicators that have been assigned the given tag, excluding all other untagged indicators"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(a.p,{children:"Example: the first command would update all indicators (published and untagged), the second will update all indicators (published and untagged) within the enumeration questionnaire and the third one will update indicators that have the 'priority' tag"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{children:"php artisan chimera:cache-indicators\nphp artisan chimera:cache-indicators --data-source=enumeration\nphp artisan chimera:cache-indicators --tag=priority\n"})}),"\n",(0,c.jsxs)(a.admonition,{type:"info",children:[(0,c.jsx)(a.p,{children:"You can manage the tag list by editing the tags key under the cache chimera config"}),(0,c.jsx)(a.p,{children:"Example (in file config\\chimera.php):"}),(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-php",children:"'cache' => [\n    'ttl' => env('CACHE_TTL_SECONDS', 60 * 30),\n    'tags' => ['priority', 'secondary'],\n],\n"})}),(0,c.jsx)(a.p,{children:"then, when editing indicators you will see a dropdown named 'Cache Tags' which you can use to assign one of the tags you have set in the chimera config to each of your indicators. By default, indicators will have no assigned tag and you do not need to assign tags for indicators you\ndo not want to target specifically."})]}),"\n",(0,c.jsxs)(a.h3,{id:"chimera-1",children:["chimera",":cache-scorecards"]}),"\n",(0,c.jsx)(a.p,{children:"The command has two options which you can include to control how caching happens"}),"\n",(0,c.jsxs)(a.ul,{children:["\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.em,{children:"data-source"})," : this option can be used to update the cache of scorecards that belong to that specific questionnaire. By default, scorecards across all questionnaires will be updated"]}),"\n"]}),"\n",(0,c.jsxs)(a.h3,{id:"chimera-2",children:["chimera",":casestats"]}),"\n",(0,c.jsx)(a.p,{children:"The command has one option which you can include to control how caching happens"}),"\n",(0,c.jsxs)(a.ul,{children:["\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.em,{children:"data-source"})," : this option can be used to update the cache of CaseStats that belong to that specific questionnaire. By default, casestats across all questionnaires will be updated"]}),"\n"]}),"\n",(0,c.jsx)(a.h2,{id:"cache-clearing",children:"Cache clearing"}),"\n",(0,c.jsxs)(a.p,{children:["If, for some reason, you need to clear cached data, you can use the ",(0,c.jsx)(a.code,{children:"chimera:cache-clear"})," command. It has two options"]}),"\n",(0,c.jsxs)(a.ul,{children:["\n",(0,c.jsxs)(a.li,{children:["\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.em,{children:"data-source"})," : this option can be used to clear the cache of all items stored under the given questionnaire"]}),"\n"]}),"\n",(0,c.jsxs)(a.li,{children:["\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.em,{children:"type"})," : this option can be used to clear specific types of cached data. Possible values for this option are: ",(0,c.jsx)(a.em,{children:"indicators, scorecards, casestats or mapindicators"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(a.admonition,{type:"danger",children:(0,c.jsx)(a.p,{children:"Executing the cache-clear command without any options will clear the cache of everything! It will remove all entries from the cache. Consider this carefully before executing the command."})}),"\n",(0,c.jsx)(a.h2,{id:"cached-data-time-stamp",children:"Cached data time stamp"}),"\n",(0,c.jsx)(a.p,{children:"When caching is enabled, a small, faded rubber stamp icon will appear somewhere over each indicator, scorecard and case stats table."}),"\n",(0,c.jsx)(a.p,{children:"When hovered over, it will display the time the data being displayed was cached at."}),"\n",(0,c.jsx)(a.p,{children:(0,c.jsx)(a.img,{alt:"Cache time stamp display",src:n(1995).A+"",width:"1000",height:"335"})})]})}function l(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},1995:(e,a,n)=>{n.d(a,{A:()=>c});const c=n.p+"assets/images/cache-timestamp-icon-3534a57371bebae53549a72bd486327e.png"},8453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>o});var c=n(6540);const i={},t=c.createContext(i);function s(e){const a=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),c.createElement(t.Provider,{value:a},e.children)}}}]);