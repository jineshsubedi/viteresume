import{_ as t,D as s,o as i,c as o,k as e,I as r,a as n,R as l}from"./chunks/framework.VSMmk2HC.js";const L=JSON.parse('{"title":"Oracle to PostgreSQL SQL Converter Tool","description":"Convert Oracle SQL queries to PostgreSQL with this handy tool.","frontmatter":{"title":"Oracle to PostgreSQL SQL Converter Tool","description":"Convert Oracle SQL queries to PostgreSQL with this handy tool.","author":"Jinesh Subedi","date":"2024-01-01","tags":["Oracle","PostgreSQL","SQL","Conversion"]},"headers":[],"relativePath":"blog/oracletopgsql.md","filePath":"blog/oracletopgsql.md"}'),h={name:"blog/oracletopgsql.md"},c={id:"",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#","aria-label":'Permalink to "<BadgeBlog type="tip" title="Oracle, PostgreSQL, SQL, Conversion" />"'},"​",-1),d=l(`<h1 id="oracle-to-postgresql-sql-converter-tool" tabindex="-1">Oracle to PostgreSQL SQL Converter Tool <a class="header-anchor" href="#oracle-to-postgresql-sql-converter-tool" aria-label="Permalink to &quot;Oracle to PostgreSQL SQL Converter Tool&quot;">​</a></h1><p>If you&#39;re transitioning from Oracle to PostgreSQL and need to convert your SQL queries, this simple tool can help streamline the process. It provides a user-friendly interface for converting Oracle-specific syntax to PostgreSQL.</p><h2 id="how-to-use" tabindex="-1">How to Use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to Use&quot;">​</a></h2><ol><li>Paste your Oracle SQL query in the left textarea.</li><li>Click the &quot;Convert to PGSQL&quot; button to transform the SQL into PostgreSQL-compatible syntax.</li><li>You can further fine-tune the converted SQL if needed.</li><li>Click the &quot;Copy&quot; button to copy the converted SQL to your clipboard.</li></ol><h2 id="conversion-features" tabindex="-1">Conversion Features <a class="header-anchor" href="#conversion-features" aria-label="Permalink to &quot;Conversion Features&quot;">​</a></h2><h3 id="_1-nvl-to-coalesce" tabindex="-1">1. NVL to COALESCE <a class="header-anchor" href="#_1-nvl-to-coalesce" aria-label="Permalink to &quot;1. NVL to COALESCE&quot;">​</a></h3><p>The tool automatically converts Oracle&#39;s <code>NVL</code> function to PostgreSQL&#39;s <code>COALESCE</code> function.</p><h3 id="_2-trunc-to-date-trunc" tabindex="-1">2. TRUNC to DATE_TRUNC <a class="header-anchor" href="#_2-trunc-to-date-trunc" aria-label="Permalink to &quot;2. TRUNC to DATE_TRUNC&quot;">​</a></h3><p>Converts Oracle&#39;s <code>TRUNC</code> function to PostgreSQL&#39;s <code>DATE_TRUNC</code> function for date truncation.</p><h3 id="_3-sysdate-to-currenttime" tabindex="-1">3. SYSDATE to CURRENTTIME <a class="header-anchor" href="#_3-sysdate-to-currenttime" aria-label="Permalink to &quot;3. SYSDATE to CURRENTTIME&quot;">​</a></h3><p>Replaces Oracle&#39;s <code>SYSDATE</code> with PostgreSQL&#39;s equivalent, <code>CURRENTTIME</code>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Oracle SQL</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NVL(column1, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;default_value&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_table </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TRUNC(date_column) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SYSDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Converted PostgreSQL SQL</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> COALESCE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(column1, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;default_value&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_table </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DATE_TRUNC(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;day&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, date_column) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CURRENTTIME;</span></span></code></pre></div><h2 id="link" tabindex="-1">Link <a class="header-anchor" href="#link" aria-label="Permalink to &quot;Link&quot;">​</a></h2><p>Thanks to <a href="https://github.com/sujanshsh" target="_blank" rel="noreferrer">Sujan Shakya</a> for this awesome <a href="https://github.com/sujanshsh/html-javascript-utilities" target="_blank" rel="noreferrer">Github Repo</a></p>`,15);function k(E,u,g,S,y,C){const a=s("BadgeBlog");return i(),o("div",null,[e("h3",c,[r(a,{type:"tip",title:"Oracle, PostgreSQL, SQL, Conversion"}),n(),p]),d])}const m=t(h,[["render",k]]);export{L as __pageData,m as default};
