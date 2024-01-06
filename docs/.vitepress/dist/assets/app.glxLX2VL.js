import{_,o as l,c,E as v,F as w,t as s,D as h,k as n,I as f,a as S,u as x,m as p,f as d,n as A,v as m,a4 as P,a5 as $,a6 as C,a7 as D,a8 as T,a9 as k,aa as q,ab as L,ac as E,ad as B,Y as R,d as V,j as F,z as O,ae as U,af as j,ag as H,ah as I}from"./chunks/framework.VSMmk2HC.js";import{t as N}from"./chunks/theme.XeAjpqse.js";const z={props:{title:{type:String,required:!0}},computed:{titlesArray(){return this.title.split(",").filter(e=>e.trim()!=="")}}};function Q(e,a,t,r,i,u){return l(!0),c(w,null,v(u.titlesArray,(g,b)=>(l(),c("a",{key:b,href:"#",class:"relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"},s(g),1))),128)}const G=_(z,[["render",Q]]),M={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},image:{type:String,required:!1},date:{type:String,required:!0},href:{type:String,required:!0},tag:{type:String,required:!1}},computed:{formattedDate(){const e=new Date(this.date),a=e.getDate(),t=e.toLocaleString("default",{month:"short"}),r=e.getFullYear().toString();return`${a} ${t.toUpperCase()} ${r}`}}},Y=["href"],J={class:"flex max-w-xl flex-col items-start justify-between"},K={class:"flex items-center gap-x-4 text-xs"},W={datetime:"{{ formattedDate }}",class:"text-gray-500"},X={class:"group relative"},Z={class:"mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"},ee=["href"],te=n("span",{class:"absolute inset-0"},null,-1),ae={class:"mt-5 line-clamp-3 text-sm leading-6 text-gray-600"};function re(e,a,t,r,i,u){const g=h("Tag");return l(),c("a",{href:t.href,class:"xl:flex-grow-0 w-full xl:w-[38rem] p-3 border-2 rounded-2xl hover:border-sky-500"},[n("article",J,[n("div",K,[n("time",W,[n("b",null,s(u.formattedDate),1)]),f(g,{title:t.tag},null,8,["title"])]),n("div",X,[n("h3",Z,[n("a",{href:t.href},[te,S(" "+s(t.title),1)],8,ee)]),n("p",ae,s(t.excerpt),1)])])],8,Y)}const ne=_(M,[["render",re]]),se={class:"bg-white"},oe={class:"mx-auto max-w-7xl px-6 lg:px-8"},ie={class:"mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2"},le={__name:"LandingBlog",setup(e){return x(),(a,t)=>{const r=h("ArticleCard");return l(),c("div",se,[n("div",oe,[n("div",ie,[f(r,{title:"Changing PHP Version in Ubuntu - A Step-by-Step Guide",excerpt:"If you're running a web server on Ubuntu and need to upgrade your PHP version, this guide will walk you through...",image:p(d)("hero_banner.png"),href:p(d)("blog/change-php-version-in-ubuntu"),date:"2024-01-03",tag:"PHP, Ubuntu"},null,8,["image","href"]),f(r,{title:"Oracle to PostgreSQL SQL Converter Tool",excerpt:"If you're running a web server on Ubuntu and need to upgrade your PHP version, this guide will walk you through...",image:p(d)("hero_banner.png"),href:p(d)("blog/oracletopgsql"),date:"2024-01-01",tag:"Oracle, PgSQL"},null,8,["image","href"])])])])}}},ce={props:{title_back:{type:String,required:!0},title_front:{type:String,required:!0},class:{type:String,required:!1}}},ue={class:"display-1 text-uppercase text-white",style:{"-webkit-text-stroke":"1px #dee2e6"}},pe={class:"position-absolute text-uppercase text-primary"};function de(e,a,t,r,i,u){return l(),c("div",{class:A(t.class)},[n("h1",ue,s(t.title_back),1),n("h1",pe,s(t.title_front),1)],2)}const ge=_(ce,[["render",de]]),fe={extends:N,enhanceApp(e){e.app.component("Tag",G),e.app.component("ArticleCard",ne),e.app.component("LandingBlog",le),e.app.component("SectionTitle",ge)}};function y(e){if(e.extends){const a=y(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=y(fe),me=V({name:"VitePressApp",setup(){const{site:e}=x();return F(()=>{O(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&U(),j(),H(),o.setup&&o.setup(),()=>I(o.Layout)}});async function _e(){const e=xe(),a=he();a.provide($,e);const t=C(e.route);return a.provide(D,t),a.component("Content",T),a.component("ClientOnly",k),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:q}),{app:a,router:e,data:t}}function he(){return L(me)}function xe(){let e=m,a;return E(t=>{let r=B(t),i=null;return r&&(e&&(a=r),(e||a===r)&&(r=r.replace(/\.js$/,".lean.js")),i=R(()=>import(r),__vite__mapDeps([]))),m&&(e=!1),i},o.NotFound)}m&&_e().then(({app:e,router:a,data:t})=>{a.go().then(()=>{P(a.route,t.site),e.mount("#app")})});export{_e as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}