import{_ as m,o as l,c,E as v,F as w,t as s,D as h,k as r,I as f,a as S,u as x,m as u,f as d,v as _,a4 as A,a5 as P,a6 as $,a7 as C,a8 as D,a9 as T,aa as k,ab as L,ac as q,ad as E,Y as B,d as R,j as V,z as j,ae as F,af as O,ag as U,ah as H}from"./chunks/framework.VSMmk2HC.js";import{t as I}from"./chunks/theme.i-R0PxZY.js";const N={props:{title:{type:String,required:!0}},computed:{titlesArray(){return this.title.split(",").filter(e=>e.trim()!=="")}}};function Q(e,a,t,n,i,p){return l(!0),c(w,null,v(p.titlesArray,(g,b)=>(l(),c("a",{key:b,href:"#",class:"relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"},s(g),1))),128)}const z=m(N,[["render",Q]]),G={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},image:{type:String,required:!1},date:{type:String,required:!0},href:{type:String,required:!0},tag:{type:String,required:!1}},computed:{formattedDate(){const e=new Date(this.date),a=e.getDate(),t=e.toLocaleString("default",{month:"short"}),n=e.getFullYear().toString();return`${a} ${t.toUpperCase()} ${n}`}}},M=["href"],Y={class:"flex max-w-xl flex-col items-start justify-between"},J={class:"flex items-center gap-x-4 text-xs"},K={datetime:"{{ formattedDate }}",class:"text-gray-500"},W={class:"group relative"},X={class:"mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"},Z=["href"],ee=r("span",{class:"absolute inset-0"},null,-1),te={class:"mt-5 line-clamp-3 text-sm leading-6 text-gray-600"};function ae(e,a,t,n,i,p){const g=h("Tag");return l(),c("a",{href:t.href,class:"xl:flex-grow-0 w-full xl:w-[38rem] p-3 border-2 rounded-2xl hover:border-sky-500"},[r("article",Y,[r("div",J,[r("time",K,[r("b",null,s(p.formattedDate),1)]),f(g,{title:t.tag},null,8,["title"])]),r("div",W,[r("h3",X,[r("a",{href:t.href},[ee,S(" "+s(t.title),1)],8,Z)]),r("p",te,s(t.excerpt),1)])])],8,M)}const ne=m(G,[["render",ae]]),re={class:"bg-white"},se={class:"mx-auto max-w-7xl px-6 lg:px-8"},oe={class:"mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2"},ie={__name:"LandingBlog",setup(e){return x(),(a,t)=>{const n=h("ArticleCard");return l(),c("div",re,[r("div",se,[r("div",oe,[f(n,{title:"Changing PHP Version in Ubuntu - A Step-by-Step Guide",excerpt:"If you're running a web server on Ubuntu and need to upgrade your PHP version, this guide will walk you through...",image:u(d)("hero_banner.png"),href:u(d)("blog/change-php-version-in-ubuntu"),date:"2024-01-03",tag:"PHP, Ubuntu"},null,8,["image","href"]),f(n,{title:"Oracle to PostgreSQL SQL Converter Tool",excerpt:"If you're running a web server on Ubuntu and need to upgrade your PHP version, this guide will walk you through...",image:u(d)("hero_banner.png"),href:u(d)("blog/oracletopgsql"),date:"2024-01-01",tag:"Oracle, PgSQL"},null,8,["image","href"])])])])}}},le={props:{title_back:{type:String,required:!0},title_front:{type:String,required:!0}}},ce={class:"position-relative d-flex align-items-center justify-content-center"},pe={class:"display-1 text-uppercase text-white",style:{"-webkit-text-stroke":"1px #dee2e6"}},ue={class:"position-absolute text-uppercase text-primary"};function de(e,a,t,n,i,p){return l(),c("div",ce,[r("h1",pe,s(t.title_back),1),r("h1",ue,s(t.title_front),1)])}const ge=m(le,[["render",de]]),fe={extends:I,enhanceApp(e){e.app.component("Tag",z),e.app.component("ArticleCard",ne),e.app.component("LandingBlog",ie),e.app.component("SectionTitle",ge)}};function y(e){if(e.extends){const a=y(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=y(fe),_e=R({name:"VitePressApp",setup(){const{site:e}=x();return V(()=>{j(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&F(),O(),U(),o.setup&&o.setup(),()=>H(o.Layout)}});async function me(){const e=xe(),a=he();a.provide(P,e);const t=$(e.route);return a.provide(C,t),a.component("Content",D),a.component("ClientOnly",T),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:k}),{app:a,router:e,data:t}}function he(){return L(_e)}function xe(){let e=_,a;return q(t=>{let n=E(t),i=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),i=B(()=>import(n),__vite__mapDeps([]))),_&&(e=!1),i},o.NotFound)}_&&me().then(({app:e,router:a,data:t})=>{a.go().then(()=>{A(a.route,t.site),e.mount("#app")})});export{me as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}