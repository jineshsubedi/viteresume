import{_ as s,o as e,c as a,R as i}from"./chunks/framework.1FgxV26S.js";const k=JSON.parse('{"title":"Changing PHP Version in Ubuntu - A Step-by-Step Guide","description":"Learn how to switch from PHP 7.4 to PHP 8.2 on Ubuntu using the update-alternatives command.","frontmatter":{"title":"Changing PHP Version in Ubuntu - A Step-by-Step Guide","author":"Your Name","date":"2024-01-03T00:00:00.000Z","description":"Learn how to switch from PHP 7.4 to PHP 8.2 on Ubuntu using the update-alternatives command.","tags":["PHP","Ubuntu","Server","Tutorial"]},"headers":[],"relativePath":"blog/change-php-version-in-ubuntu.md","filePath":"blog/change-php-version-in-ubuntu.md"}'),t={name:"blog/change-php-version-in-ubuntu.md"},n=i(`<h1 id="changing-php-version-in-ubuntu-a-step-by-step-guide" tabindex="-1">Changing PHP Version in Ubuntu: A Step-by-Step Guide <a class="header-anchor" href="#changing-php-version-in-ubuntu-a-step-by-step-guide" aria-label="Permalink to &quot;Changing PHP Version in Ubuntu: A Step-by-Step Guide&quot;">​</a></h1><p>If you&#39;re running a web server on Ubuntu and need to upgrade your PHP version, this guide will walk you through the process step by step. We&#39;ll demonstrate how to switch from PHP 7.4 to PHP 8.2 using the <code>update-alternatives</code> command.</p><h2 id="step-1-install-php-8-2" tabindex="-1">Step 1: Install PHP 8.2 <a class="header-anchor" href="#step-1-install-php-8-2" aria-label="Permalink to &quot;Step 1: Install PHP 8.2&quot;">​</a></h2><p>First, ensure that PHP 8.2 is installed on your system. Open your terminal and run the following commands:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.2</span></span></code></pre></div><h2 id="step-2-list-available-php-versions" tabindex="-1">Step 2: List Available PHP Versions <a class="header-anchor" href="#step-2-list-available-php-versions" aria-label="Permalink to &quot;Step 2: List Available PHP Versions&quot;">​</a></h2><p>Use the following command to list the available PHP versions installed on your system:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update-alternatives</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php</span></span></code></pre></div><p>This will display a list of installed PHP versions.</p><h2 id="step-3-choose-php-version" tabindex="-1">step 3: Choose PHP Version <a class="header-anchor" href="#step-3-choose-php-version" aria-label="Permalink to &quot;step 3: Choose PHP Version&quot;">​</a></h2><p>Run the following command to select the desired PHP version (replace &quot;X.Y&quot; with the version you want, e.g., 8.2):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update-alternatives</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> phpX.Y</span></span></code></pre></div><h2 id="step-4-verify-the-php-version" tabindex="-1">step 4: Verify the PHP version <a class="header-anchor" href="#step-4-verify-the-php-version" aria-label="Permalink to &quot;step 4: Verify the PHP version&quot;">​</a></h2><p>Check the active PHP version to ensure the change has taken effect:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><p>This should display the version you selected.</p><h2 id="step-5-restart-the-web-server" tabindex="-1">step 5: Restart the web server <a class="header-anchor" href="#step-5-restart-the-web-server" aria-label="Permalink to &quot;step 5: Restart the web server&quot;">​</a></h2><p>If you&#39;re using PHP with a web server like Apache or Nginx, restart it to apply the changes:</p><p>For Apache:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apache2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span></span></code></pre></div><p>For Nginx:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span></span></code></pre></div><p>Now, your system should be using PHP 8.2. You can confirm this by running php -v and checking the version number.</p><p>Remember that updating PHP versions might require adjustments to your PHP code to ensure compatibility with the new version. Make sure to test your applications thoroughly after the version change.</p>`,24),h=[n];function p(o,l,r,d,u,c){return e(),a("div",null,h)}const b=s(t,[["render",p]]);export{k as __pageData,b as default};
