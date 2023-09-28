import{_ as s,o as n,c as e,f as a}from"./app-f47179b6.js";const i="/Blog/frontEnd/gitBashHere.png",t="/Blog/frontEnd/deploy.png",r="/Blog/frontEnd/npmrundeploy.png",d="/Blog/frontEnd/githubpage.png",p="/Blog/frontEnd/GitHubaccess1.png",l="/Blog/frontEnd/GitHubaccess2.png",o="/Blog/frontEnd/domainname.png",c="/Blog/frontEnd/CNAMEName.png",u="/Blog/frontEnd/base1.png",h="/Blog/frontEnd/base2.png",m="/Blog/frontEnd/githubpage1.png",v={},b=a(`<h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> VuePress</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>VuePress2.0链接：https://v2.vuepress.vuejs.org/zh/
创建VuePress参考网页链接：https://juejin.cn/post/7275608678827933715#heading-2
网页代码参考网页链接：https://github.com/mqyqingfeng/Blog/issues/235
将项目提交Github仓库参考网页：https://juejin.cn/post/6844903974814875656?searchId=20230914093206C1C9197882DAB5ABEF68
https://juejin.cn/post/7277026974005067811
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化-并选择-2-x" tabindex="-1"><a class="header-anchor" href="#初始化-并选择-2-x" aria-hidden="true">#</a> 初始化，并选择 2.x</h2><pre><code>npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
</code></pre><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><blockquote><p>npm run dev</p></blockquote><h2 id="提交" tabindex="-1"><a class="header-anchor" href="#提交" aria-hidden="true">#</a> 提交</h2><blockquote><p>git push -u origin master</p></blockquote><h2 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   打开 git Bash Here
   执行 sh deploy.sh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h2><p>https://blog.csdn.net/weixin_43742708/article/details/109559070</p><h2 id="一、首先准备ssh" tabindex="-1"><a class="header-anchor" href="#一、首先准备ssh" aria-hidden="true">#</a> 一、首先准备ssh</h2><pre><code>  如果您的电脑已经配置好 GitHub 的 ssh 的话，可以跳过这一步。
</code></pre><h3 id="_1-1-生成-ssh" tabindex="-1"><a class="header-anchor" href="#_1-1-生成-ssh" aria-hidden="true">#</a> 1.1 生成 ssh</h3><p><img src="`+i+'" alt="git"></p><p><strong>输入<code>注意：命令没有空格，请直接复制</code></strong></p><blockquote><p>ssh-keygen</p></blockquote><p>之后会在：C:\\Users\\用户名.ssh\\ 目录下生成两个文件：<br> 私钥：id_rsa 必须要放在自己的电脑上<br> 公钥：id_rsa.pub 放到 GitHub上。</p><h3 id="_1-2-把公钥配置到-github" tabindex="-1"><a class="header-anchor" href="#_1-2-把公钥配置到-github" aria-hidden="true">#</a> 1.2 把公钥配置到 GitHub</h3><p>登陆 GitHub =&gt; Settings =&gt; SSH and GPG keys =&gt; New SSH key 然后直接把我们刚刚生成的 id_rsa.pub 文件打开，复制里边的全部内容，放到 Key 文本框内，标题随便起一个就是。</p><h2 id="二、配置-vuepress" tabindex="-1"><a class="header-anchor" href="#二、配置-vuepress" aria-hidden="true">#</a> 二、配置 VuePress</h2><p>在 VuePress 项目的目录下，新建一个文件 deploy.sh <img src="'+t+`" alt="deploy"></p><p><em>并在该文件中添加如下内容：</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># 请把 penggang-home/blog-two.git 换成你的项目地址</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:penggang-home/blog-two.git master:gh-pages
<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意 这里我是发布到 GitHhub，所以我是直接push到我的 GitHub地址的，请把penggang-home/blog-two.git换成你的项目地址，不然你会部署失败！</p><p>关于该文件的其他详细配置，请移步官网。</p><p>接下来在我们的 package.json文件的插件部分，新增如下内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span><span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
 <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span><span class="token string">&quot;vuepress build docs&quot;</span><span class="token punctuation">,</span>
 <span class="token string-property property">&quot;deploy&quot;</span><span class="token operator">:</span><span class="token string">&quot;bash deploy.sh&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来,npm run deploy 即可推送到GitHub。 <em><strong>注意： 请使用 Git Bash Here 工具，windows 自带的 cmd 不认识 Shell命令。</strong></em><img src="`+r+'" alt="npmrundeploy"></p><p>接下来去 GitHub 查看分支，如果有 gh-pages分支，则说明推送成功。 <img src="'+d+'" alt="githubpage"></p><h2 id="三、如何从github服务器访问项目" tabindex="-1"><a class="header-anchor" href="#三、如何从github服务器访问项目" aria-hidden="true">#</a> 三、如何从GitHub服务器访问项目</h2><p>第一步： <img src="'+p+'" alt="GitHubaccess1"></p><p>第二步： 往下拉找到 GitHub Pages : <img src="'+l+'" alt="GitHubaccess2"> 蓝色链接就是你的访问地址！</p><p><em>你也可以自定义域名，就是下边的 Custom domain</em></p><h2 id="四、发布到自定义记录值的域名" tabindex="-1"><a class="header-anchor" href="#四、发布到自定义记录值的域名" aria-hidden="true">#</a> 四、发布到自定义记录值的域名</h2><p>比如说我有一个项目是在 penggang-home/blog-two下： <img src="'+o+`" alt="domainname"></p><pre><code>通过GitHub Pages 服务，我们拿到了一个链接 **http://pengsir.top/blog-two/** ，通过这个在线链接，我们能正常访问我们的项目，
</code></pre><p>但是我们不太喜欢这个链接怎么办呢？ 答案是：自定义域名</p><p>通过自定义记录值的域名，我们能实现通过 http://blog.pengsir.top/ 访问我们博客，是不是很棒，那还等什么，赶快开始吧！</p><h3 id="_4-1-新增域名解析" tabindex="-1"><a class="header-anchor" href="#_4-1-新增域名解析" aria-hidden="true">#</a> 4.1 新增域名解析</h3><p>我们需要在域名供应商处新增一个，CNAME类型的域名域名解析。</p><p>这里以 腾讯云 为例： <img src="`+c+'" alt="CNAMEName"></p><p>主机记录就是域名前缀,假设你的记录值是 blog ，我的域名是 pengsir.top,那么等下你就只能通过 blog.pengsir.top来访问，<br> 记录类型固定的是 ：CNAME<br> 记录值就是你的GitHub地址</p><h3 id="_4-2-修改我们的配置文件" tabindex="-1"><a class="header-anchor" href="#_4-2-修改我们的配置文件" aria-hidden="true">#</a> 4.2 修改我们的配置文件</h3><p>把 config.js的base属性给去掉（注释掉） <img src="'+u+'" alt="base1"></p><h3 id="_4-3-修改-deploy-sh" tabindex="-1"><a class="header-anchor" href="#_4-3-修改-deploy-sh" aria-hidden="true">#</a> 4.3 修改 deploy.sh</h3><p><img src="'+h+`" alt="base2"> 在这里插入图片描述 注意这里你的域名前缀 blog要和 刚才新增的记录值一致！</p><pre><code>  接下来就是见证奇迹的时刻，打开 GitHub!
</code></pre><p><img src="`+m+`" alt="githubpage1"></p><pre><code>  点此访问：彭先生的主页
</code></pre><h2 id="五、自动化部署-暂未实现" tabindex="-1"><a class="header-anchor" href="#五、自动化部署-暂未实现" aria-hidden="true">#</a> 五、自动化部署 暂未实现</h2><h3 id="_5-1-新建-travis-yml" tabindex="-1"><a class="header-anchor" href="#_5-1-新建-travis-yml" aria-hidden="true">#</a> 5.1 新建 .travis.yml</h3><p>在项目的根目录创建一个名为 .travis.yml 的文件； 并添加如下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   language: node_js
   node_js:
   - lts /* 
   install:
   - <span class="token function">npm</span> ci <span class="token comment"># yarn install</span>
   script:
   - <span class="token function">npm</span> run docs:build <span class="token comment"># yarn docs:build</span>
   - <span class="token function">npm</span> run cname
   deploy:
   provider: pages
   skip_cleanup: <span class="token boolean">true</span>
   local_dir: docs/.vuepress/dist
   <span class="token comment"># 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面</span>
   github_token: <span class="token variable">$GITHUB_TOKEN</span>进行配置，设置为 secure variable
   keep_history: <span class="token boolean">true</span>
   on:
      branch: master

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-更改默认推送位置" tabindex="-1"><a class="header-anchor" href="#_5-2-更改默认推送位置" aria-hidden="true">#</a> 5.2 更改默认推送位置</h3><p>默认的话会推送到 GitHub Pages 上，我们需要把他修改为推送到自定义域名</p><p>因此，在项目根目录下，创建 cname.sh,并添加如下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token comment"># cname.sh</span>

   <span class="token comment">#!/user/bin/env sh</span>

   <span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

   <span class="token builtin class-name">echo</span> <span class="token string">&#39;blog.pengsir.top&#39;</span> <span class="token operator">&gt;</span> docs/.vuepress/dist/CNAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意: blog.pengsir.top 是自定义域名，根据自己的域名来改。</p><h3 id="_5-3-修改-package-json" tabindex="-1"><a class="header-anchor" href="#_5-3-修改-package-json" aria-hidden="true">#</a> 5.3 修改 package.json</h3><p>新增一个:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token string-property property">&quot;cname&quot;</span><span class="token operator">:</span><span class="token string">&quot;bash cname.sh&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-登录-https-travis-ci-com" tabindex="-1"><a class="header-anchor" href="#_5-4-登录-https-travis-ci-com" aria-hidden="true">#</a> 5.4 登录 https://travis-ci.com/</h3><pre><code>  Dashboard =&gt; 找到你需要部署的项目，点击 Trigger a build
</code></pre>`,65),g=[b];function k(_,f){return n(),e("div",null,g)}const y=s(v,[["render",k],["__file","vuepress.html.vue"]]);export{y as default};
