import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as d,a as e,b as n,d as s,w as i,e as o,r as l}from"./app.ed9f300c.js";const r={},u=o('<h1 id="激活事件-package-json" tabindex="-1"><a class="header-anchor" href="#激活事件-package-json" aria-hidden="true">#</a> 激活事件 - package.json</h1><p>在VS Code中，插件都是懒加载的，所以你得为VS Code提供插件激活的时机。 我们提供了下列激活时机：</p><ul><li><a href="extensibility-reference/activation-events#activationeventsonlanguage"><code>onLanguage:${language}</code></a></li><li><a href="extensibility-reference/activation-events#activationeventsoncommand"><code>onCommand:${command}</code></a></li><li><a href="extensibility-reference/activation-events#activationeventsondebug"><code>onDebug</code></a></li><li><a href="extensibility-reference/activation-events#activationeventsworkspacecontains"><code>workspaceContains:${toplevelfilename}</code></a></li><li><a href="extensibility-reference/activation-events#activationeventsonfilesystem"><code>onFileSystem:${scheme}</code></a></li><li><a href="extensibility-reference/activation-events#activationeventsonview"><code>onView:${viewId}</code></a></li><li><a href="extensibility-reference/activation-events#activationeventsonuri"><code>onUri</code></a></li><li><a href="extensibility-reference/activation-events#activationevents"><code>*</code></a></li></ul>',3),v=e("code",null,"package.json",-1),p=o(`<h2 id="activationevents-onlanguage" tabindex="-1"><a class="header-anchor" href="#activationevents-onlanguage" aria-hidden="true">#</a> activationEvents.onLanguage</h2><p>特定语言文件打开时激活：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>...
<span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;onLanguage:python&quot;</span>
<span class="token punctuation">]</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g=e("code",null,"onLanguage",-1),b=o(`<p>在<code>activationEvents</code>数组中声明多个<code>onLanguage</code>入口实现多语言支持</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;onLanguage:json&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;onLanguage:markdown&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;onLanguage:typescript&quot;</span>
<span class="token punctuation">]</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="activationevents-oncommand" tabindex="-1"><a class="header-anchor" href="#activationevents-oncommand" aria-hidden="true">#</a> activationEvents.onCommand</h2><p>当调用命令时激活事件：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>...
<span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;onCommand:extension.sayHello&quot;</span>
<span class="token punctuation">]</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="activationevents-ondebug" tabindex="-1"><a class="header-anchor" href="#activationevents-ondebug" aria-hidden="true">#</a> activationEvents.onDebug</h2><p>调试会话（debug session）启动前激活：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>...
<span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;onDebug&quot;</span>
<span class="token punctuation">]</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ondebuginitialconfigurations-and-ondebugresolve" tabindex="-1"><a class="header-anchor" href="#ondebuginitialconfigurations-and-ondebugresolve" aria-hidden="true">#</a> onDebugInitialConfigurations and onDebugResolve</h3><p>这是两个粒度更细的激活事件：</p><ul><li><code>onDebugInitialConfigurations</code> 在<code>DebugConfigurationProvider</code>中的 <code>provideDebugConfigurations</code>方法之前触发。</li><li><code>onDebugResolve:type</code> 在<code>DebugConfigurationProvider</code>的<code>resolveDebugConfiguration</code>方法之前触发。</li></ul>`,11),m=e("strong",null,"首要原则：",-1),h=e("code",null,"onDebug",-1),f=e("code",null,"DebugConfigurationProvider",-1),k=e("code",null,"provideDebugConfigurations",-1),_=e("code",null,"resolveDebugConfiguration",-1),q=e("code",null,"onDebugInitialConfigurations",-1),x=e("code",null,"onDebugResolve",-1),j=o(`<h2 id="activationevents-workspacecontains" tabindex="-1"><a class="header-anchor" href="#activationevents-workspacecontains" aria-hidden="true">#</a> activationEvents.workspaceContains</h2><p>文件夹打开后，且文件夹中至少包含一个符合glob模式的文件时触发。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>...
<span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;workspaceContains:**/.editorconfig&quot;</span>
<span class="token punctuation">]</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="activationevents-onfilesystem" tabindex="-1"><a class="header-anchor" href="#activationevents-onfilesystem" aria-hidden="true">#</a> activationEvents.onFileSystem</h2><p>从*协议（scheme）*打开的文件或文件夹打开时触发。通常是<code>file</code>-协议，也可以用自定义的文件供应器函数替换掉，比如<code>ftp</code>、<code>ssh</code>。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>...
<span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;onFileSystem:sftp&quot;</span>
<span class="token punctuation">]</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="activationevents-onview" tabindex="-1"><a class="header-anchor" href="#activationevents-onview" aria-hidden="true">#</a> activationEvents.onView</h2><p>指定的视图id展开时触发：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>...
<span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;onView:nodeDependencies&quot;</span>
<span class="token punctuation">]</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="activationevents-onuri" tabindex="-1"><a class="header-anchor" href="#activationevents-onuri" aria-hidden="true">#</a> activationEvents.onUri</h2><p>插件的系统级URI打开时触发。这个URI协议需要带上<code>vscode</code> 或者 <code>vscode-insiders</code>协议。URI授权必须是插件的唯一标识，剩余的URI是可选的。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>...
<span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;onUri&quot;</span>
<span class="token punctuation">]</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 <code>vscode.git</code>插件定义了<code>onUri</code>激活事件，那么下列任意URI打开时就会触发：</p><ul><li><code>vscode://vscode.git/init</code></li><li><code>vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2FMicrosoft%2Fvscode-vsce.git</code></li><li><code>vscode-insiders://vscode.git/init</code> (for VS Code Insiders)</li></ul><h2 id="activationevents" tabindex="-1"><a class="header-anchor" href="#activationevents" aria-hidden="true">#</a> activationEvents.*</h2><p>当VS Code启动时触发。为了保证良好的用户体验，只在你的插件没有其他任何激活事件的前提下，添加这个激活事件。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>...
<span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;*&quot;</span>
<span class="token punctuation">]</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!&gt; <strong>注意：</strong> 一个插件如果侦听了多个激活事件，那么最好用<code>&quot;*&quot;</code>替换掉。</p><p>!&gt; <strong>注意：</strong> 插件<strong>必须</strong>从它的主模块中输出一个<code>activate()</code>函数，当任意的激活事件触发时，VS Code会<strong>仅仅调用一次这个函数</strong>。此外，插件也<strong>应该</strong> 导出一个<code>deactivate()</code>函数，当VS Code关闭时执行清理的任务。如果清理进程是异步的，插件的<code>deactivate()</code><strong>必须</strong>返回一个Promise。如果这个清理任务是同步的，那么<code>deactivate()</code>可以返回<code>undefined</code>。</p><h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步" aria-hidden="true">#</a> 下一步</h2><p>学习更多VS Code扩展性模型，看看下列主题：</p>`,21);function y(C,E){const a=l("RouterLink");return c(),d("div",null,[u,e("p",null,[n("我们在"),s(a,{to:"/extensibility-reference/extensibility-reference/extension-manifest.html"},{default:i(()=>[v,n(" 插件清单")]),_:1}),n("中提供了一个插件最少所需的激活事件。")]),p,e("p",null,[g,n("只支持"),s(a,{to:"/docs/languages/identifiers.html"},{default:i(()=>[n("语言标识符")]),_:1}),n("中的值。")]),b,e("p",null,[m,n(" 如果调试插件的激活事件比较轻量，那么就用"),h,n("。相反，根据"),f,n("实现的对应方法（ "),k,n("或"),_,n("），使用"),q,n("或"),x,n(" 。参见 "),s(a,{to:"/docs/extensionAPI/api-debugging.html#debug-type-specific-hooks"},{default:i(()=>[n("Debug Type specific Hooks")]),_:1}),n("。")]),j,e("ul",null,[e("li",null,[s(a,{to:"/docs/extensionAPI/extension-manifest.html"},{default:i(()=>[n("插件清单")]),_:1}),n(" - VS Code package.json 插件清单文件参考")]),e("li",null,[s(a,{to:"/docs/extensionAPI/extension-points.html"},{default:i(()=>[n("发布内容配置点")]),_:1}),n(" - VS Code 发布内容配置点参考")])])])}const V=t(r,[["render",y],["__file","activation-events.html.vue"]]);export{V as default};
