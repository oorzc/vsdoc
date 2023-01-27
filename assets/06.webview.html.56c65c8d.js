import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,a as n,b as s,d as a,w as u,e,r as p}from"./app.ed9f300c.js";const d={},r=n("h1",{id:"webview-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webview-api","aria-hidden":"true"},"#"),s(" Webview API")],-1),v=n("p",null,"webview API为开发者提供了完全自定义视图的能力，例如内置的Markdown插件使用了webview渲染Markdown预览文件。Webview也能用于构建比VS Code原生API支持构建的更加复杂的用户交互界面。",-1),k=n("p",null,[s("可以把webview看成是VS Code中的"),n("code",null,"iframe"),s("，它可以渲染几乎全部的HTML内容，它通过消息机制和插件通信。这样的自由度令我们的webview非常强劲并将插件的潜力提升到了新的高度。")],-1),m=n("h2",{id:"相关链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关链接","aria-hidden":"true"},"#"),s(" 相关链接")],-1),b=n("hr",null,null,-1),w={href:"https://github.com/Microsoft/vscode-extension-samples/blob/master/webview-sample/README.md",target:"_blank",rel:"noopener noreferrer"},g=n("h3",{id:"使用的vs-code-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用的vs-code-api","aria-hidden":"true"},"#"),s(" 使用的VS Code API")],-1),h={href:"https://code.visualstudio.com/api/references/vscode-api#window.createWebviewPanel",target:"_blank",rel:"noopener noreferrer"},f={href:"https://code.visualstudio.com/api/references/vscode-api#window.registerWebviewPanelSerializer",target:"_blank",rel:"noopener noreferrer"},y=e('<h2 id="我应该用webview吗" tabindex="-1"><a class="header-anchor" href="#我应该用webview吗" aria-hidden="true">#</a> 我应该用webview吗？</h2><hr><p>webview虽然很赞，但是我们应该节制地使用这个功能——比如当VS Code原生API不够用时。Webview重度依赖资源，所以它脱离插件的进程而单独运行在其他环境中。在VS Code中使用设计不良的webview会让用户抓狂。</p><p>在使用webview之前，请作以下考虑：</p><ul><li>这个功能真的需要VS Code来提供吗？分离成一个应用或者网站会不会更好？</li><li>webview是实现这个特性的最后方案吗？VS Code原生API是否能达到同样的目的呢？</li><li>你的webview所牺牲的高资源占用是否能换得同样的用户价值？</li></ul><p>请记住：不要因为能使用webview而滥用webview。相反，如果你有充足的理由和自信，那么本篇教程对你来说会非常有用，现在就让我们开始吧。</p><h2 id="webviews-api-基础" tabindex="-1"><a class="header-anchor" href="#webviews-api-基础" aria-hidden="true">#</a> Webviews API 基础</h2><hr><p>为了解释webviewAPI，我们先构建一个简单的<strong>Cat Coding</strong>插件。这个插件会用一个webview显示猫写代码的gif。随着我们不断了解API，我们会不断地给插件添加功能，包括我们的猫写了多少行代码的计数跟踪器，如果猫猫写出了bug还会有一个提示弹出框。</p>',9),C=n("strong",null,"Cat Coding",-1),q=n("code",null,"package.json",-1),x={href:"https://github.com/Microsoft/vscode-extension-samples/blob/master/webview-sample/README.md",target:"_blank",rel:"noopener noreferrer"},S=n("a",{href:"/extensibility-reference/contribution-points#contributescommands"},"提供了一个命令",-1),_=n("code",null,"catCoding.start",-1),P=n("strong",null,"命令面板",-1),E=n("em",null,"Cat Coding: Start new cat coding session",-1),W=n("em",null,"键绑定",-1),I=e(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cat-coding&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Cat Coding&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;publisher&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bierner&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;engines&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vscode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.23.0&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;onCommand:catCoding.start&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./out/src/extension&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;contributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commands&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;catCoding.start&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Start new cat coding session&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Cat Coding&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vscode:prepublish&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc -p ./&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;compile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc -watch -p ./&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;postinstall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./node_modules/vscode/bin/install&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vscode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@types/node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^9.4.6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.8.3&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在让我们实现<code>catCoding.start</code>命令，在我们的主文件中，像下面这样注册一个基础的webview：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vscode <span class="token keyword">from</span> <span class="token string">&#39;vscode&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.start&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 创建并显示新的webview</span>
      <span class="token keyword">const</span> panel <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">createWebviewPanel</span><span class="token punctuation">(</span>
        <span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 只供内部使用，这个webview的标识</span>
        <span class="token string">&#39;Cat Coding&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 给用户显示的面板标题</span>
        vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token punctuation">,</span> <span class="token comment">// 给新的webview面板一个编辑器视图</span>
        <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// Webview选项。我们稍后会用上</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>vscode.window.createWebviewPanel</code>函数创建并在编辑区展示了一个webview，下图显示了如果你试着运行<code>catCoding.start</code>命令会显示的东西：</p><p><img src="https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/extension-guides/images/webview/basics-no_content.png" alt="一个空的webview"></p><p>我们的命令以正确的标题打开了一个新的webview面板，但是没有任何内容！要想把我们的猫加到这个面板里面，我们需要<code>webview.html</code>设置HTML内容。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vscode <span class="token keyword">from</span> <span class="token string">&#39;vscode&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.start&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 创建和显示webview</span>
      <span class="token keyword">const</span> panel <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">createWebviewPanel</span><span class="token punctuation">(</span>
        <span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Cat Coding&#39;</span><span class="token punctuation">,</span>
        vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 设置HTML内容</span>
      panel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;!DOCTYPE html&gt;
        &lt;html lang=&quot;en&quot;&gt;
        &lt;head&gt;
            &lt;meta charset=&quot;UTF-8&quot;&gt;
            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
            &lt;title&gt;Cat Coding&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;img src=&quot;https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif&quot; width=&quot;300&quot; /&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你再次运行命令，应该能看到下图：</p><p><img src="https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/extension-guides/images/webview/basics-html.png" alt="含有html内容的webview"></p><p>大功告成！</p><p><code>webview.html</code>应该是一个完整的HTML文档。使用HTML片段或者格式错乱的HTML会造成异常。</p><h3 id="更新webview内容" tabindex="-1"><a class="header-anchor" href="#更新webview内容" aria-hidden="true">#</a> 更新webview内容</h3><p><code>webview.html</code>也能在webview创建后更新内容，让我们用猫猫轮播图使<strong>Cat Coding</strong>具有动态性：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vscode <span class="token keyword">from</span> <span class="token string">&#39;vscode&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> cats <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;Coding Cat&#39;</span><span class="token operator">:</span> <span class="token string">&#39;https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;Compiling Cat&#39;</span><span class="token operator">:</span> <span class="token string">&#39;https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.start&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> panel <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">createWebviewPanel</span><span class="token punctuation">(</span>
        <span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Cat Coding&#39;</span><span class="token punctuation">,</span>
        vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">let</span> iteration <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token function-variable function">updateWebview</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> cat <span class="token operator">=</span> iteration<span class="token operator">++</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">&#39;Compiling Cat&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;Coding Cat&#39;</span><span class="token punctuation">;</span>
        panel<span class="token punctuation">.</span>title <span class="token operator">=</span> cat<span class="token punctuation">;</span>
        panel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span>cat<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token comment">// 设置初始化内容</span>
      <span class="token function">updateWebview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 每秒更新内容</span>
      <span class="token function">setInterval</span><span class="token punctuation">(</span>updateWebview<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span>cat<span class="token operator">:</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> cats<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;!DOCTYPE html&gt;
        &lt;html lang=&quot;en&quot;&gt;
        &lt;head&gt;
            &lt;meta charset=&quot;UTF-8&quot;&gt;
            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
            &lt;title&gt;Cat Coding&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;img src=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>cats<span class="token punctuation">[</span>cat<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; width=&quot;300&quot; /&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/extension-guides/images/webview/basics-update.gif" alt="更新webview内容"></p><p>因为<code>webview.html</code>方法替换了整个webview内容，页面看起来像重新加载了一个iframe。记住：如果你在webview中使用了脚本，那就意味着<code>webview.html</code>的重置会使脚本状态重置。</p><p>上述示例也使用了<code>webview.title</code>改变编辑器中的展示的文件名称，设置标题不会使webview重载。</p><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3><p>webview从属于创建他们的插件，插件必须保持住从webview返回的<code>createWebviewPanel</code>。如果你的插件失去了这个关联，它就不能再访问webview了，不过即使这样，webview还会继续展示在VS Code中。</p><p>因为webview是一个文本编辑器视图，所以用户可以随时关闭webview。当用户关闭了webview面板后，webview就被销毁了。在我们的例子中，销毁webview时抛出了一个异常，说明我们上面的示例中使用的<code>seInterval</code>实际上产生了非常严重的Bug：如果用户关闭了面板，<code>setInterval</code>会继续触发，而且还会尝试更新<code>panel.webview.html</code>，这当然会抛出异常。喵星人可不喜欢异常，我们现在就来解决这个问题吧。</p><p><code>onDidDispose</code>事件在webview被销毁时触发，我们在这个事件结束之后更新并释放webview资源。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vscode <span class="token keyword">from</span> <span class="token string">&#39;vscode&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> cats <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;Coding Cat&#39;</span><span class="token operator">:</span> <span class="token string">&#39;https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;Compiling Cat&#39;</span><span class="token operator">:</span> <span class="token string">&#39;https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.start&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> panel <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">createWebviewPanel</span><span class="token punctuation">(</span>
        <span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Cat Coding&#39;</span><span class="token punctuation">,</span>
        vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">let</span> iteration <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token function-variable function">updateWebview</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> cat <span class="token operator">=</span> iteration<span class="token operator">++</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">&#39;Compiling Cat&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;Coding Cat&#39;</span><span class="token punctuation">;</span>
        panel<span class="token punctuation">.</span>title <span class="token operator">=</span> cat<span class="token punctuation">;</span>
        panel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span>cat<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token function">updateWebview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span>updateWebview<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      panel<span class="token punctuation">.</span><span class="token function">onDidDispose</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// 当面板关闭时，取消webview内容之后的更新</span>
          <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        context<span class="token punctuation">.</span>subscriptions
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插件也可以通过编程方式关闭webview视图——调用它们的<code>dispose()</code>方法。我们假设，现在限制我们的猫猫每天工作5秒钟：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.start&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> panel <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">createWebviewPanel</span><span class="token punctuation">(</span>
        <span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Cat Coding&#39;</span><span class="token punctuation">,</span>
        vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

      panel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span>cats<span class="token punctuation">[</span><span class="token string">&#39;Coding Cat&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 5秒后，程序性地关闭webview面板</span>
      <span class="token keyword">const</span> timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> panel<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      panel<span class="token punctuation">.</span><span class="token function">onDidDispose</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// 在第五秒结束之前处理用户手动的关闭动作</span>
          <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        context<span class="token punctuation">.</span>subscriptions
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移动和可见性" tabindex="-1"><a class="header-anchor" href="#移动和可见性" aria-hidden="true">#</a> 移动和可见性</h3><p>当webview面板被移动到了非激活标签上，它就隐藏起来了。但这时并不是销毁，当重新激活标签后，VS Code会从<code>webview.html</code>自动恢复webview的内容。</p><p><img src="https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/extension-guides/images/webview/basics-restore.gif" alt="webview自动恢复内容"></p><p><code>.visible</code>属性告诉你当前webview面板是否是可见的。</p><p>插件也可以通过调用<code>reveal()</code>方法，程序性地将webview面板激活。这个方法可以接受一个用于放置面板的目标视图布局。一个面板一次只能显示在一个编辑布局中。调用<code>reveal()</code>或者拖动webview面板到新的编辑布局中去。</p><p><img src="https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/extension-guides/images/webview/basics-drag.gif" alt="在标签页中移动webview视图"></p><p>现在更新我们的插件，一次只允许存在一个webview视图。如果面板处于非激活状态，那<code>catCoding.start</code>命令就把这个面板激活。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 追踪当前webview面板</span>
  <span class="token keyword">let</span> currentPanel<span class="token operator">:</span> vscode<span class="token punctuation">.</span>WebviewPanel <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

  context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.start&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> columnToShowIn <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span>activeTextEditor
        <span class="token operator">?</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span>activeTextEditor<span class="token punctuation">.</span>viewColumn
        <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentPanel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果我们已经有了一个面板，那就把它显示到目标列布局中</span>
        currentPanel<span class="token punctuation">.</span><span class="token function">reveal</span><span class="token punctuation">(</span>columnToShowIn<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 不然，创建一个新面板</span>
        currentPanel <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">createWebviewPanel</span><span class="token punctuation">(</span>
          <span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;Cat Coding&#39;</span><span class="token punctuation">,</span>
          columnToShowIn<span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        currentPanel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span>cats<span class="token punctuation">[</span><span class="token string">&#39;Coding Cat&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 当前面板被关闭后重置</span>
        currentPanel<span class="token punctuation">.</span><span class="token function">onDidDispose</span><span class="token punctuation">(</span>
          <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            currentPanel <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token keyword">null</span><span class="token punctuation">,</span>
          context<span class="token punctuation">.</span>subscriptions
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个新插件的行为：</p><p><img src="https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/extension-guides/images/webview/basics-single_panel.gif" alt="在单个面板中展示"></p><p>不论何时，如果webview的可见性改变了，或者当webview移动到了新的视图布局中，就会触发<code>onDidChangeViewState</code>。我们的插件可以利用这个时间改变布局中的webview显示的猫：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> cats <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;Coding Cat&#39;</span><span class="token operator">:</span> <span class="token string">&#39;https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;Compiling Cat&#39;</span><span class="token operator">:</span> <span class="token string">&#39;https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;Testing Cat&#39;</span><span class="token operator">:</span> <span class="token string">&#39;https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.start&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> panel <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">createWebviewPanel</span><span class="token punctuation">(</span>
        <span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Cat Coding&#39;</span><span class="token punctuation">,</span>
        vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      panel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span>cats<span class="token punctuation">[</span><span class="token string">&#39;Coding Cat&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 根据视图状态变动更新内容</span>
      panel<span class="token punctuation">.</span><span class="token function">onDidChangeViewState</span><span class="token punctuation">(</span>
        e <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> panel <span class="token operator">=</span> e<span class="token punctuation">.</span>webviewPanel<span class="token punctuation">;</span>
          <span class="token keyword">switch</span> <span class="token punctuation">(</span>panel<span class="token punctuation">.</span>viewColumn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token operator">:</span>
              <span class="token function">updateWebviewForCat</span><span class="token punctuation">(</span>panel<span class="token punctuation">,</span> <span class="token string">&#39;Coding Cat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">return</span><span class="token punctuation">;</span>

            <span class="token keyword">case</span> vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>Two<span class="token operator">:</span>
              <span class="token function">updateWebviewForCat</span><span class="token punctuation">(</span>panel<span class="token punctuation">,</span> <span class="token string">&#39;Compiling Cat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">return</span><span class="token punctuation">;</span>

            <span class="token keyword">case</span> vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>Three<span class="token operator">:</span>
              <span class="token function">updateWebviewForCat</span><span class="token punctuation">(</span>panel<span class="token punctuation">,</span> <span class="token string">&#39;Testing Cat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">return</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        context<span class="token punctuation">.</span>subscriptions
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">updateWebviewForCat</span><span class="token punctuation">(</span>panel<span class="token operator">:</span> vscode<span class="token punctuation">.</span>WebviewPanel<span class="token punctuation">,</span> catName<span class="token operator">:</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> cats<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  panel<span class="token punctuation">.</span>title <span class="token operator">=</span> catName<span class="token punctuation">;</span>
  panel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span>cats<span class="token punctuation">[</span>catName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/extension-guides/images/webview/basics-ondidchangeviewstate.gif" alt="响应onDidChangeViewState事件"></p><h3 id="检查和调试webviews" tabindex="-1"><a class="header-anchor" href="#检查和调试webviews" aria-hidden="true">#</a> 检查和调试webviews</h3><p>在命令面板中输入<strong>Developer: Toggle Developer Tools</strong>能帮助你调试webview。运行命令之后会为当前可见的webview加载一个devtool：</p><p><img src="https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/extension-guides/images/webview/basics-developer_tools.png" alt="Webview开发者工具"></p><p>webview的内容是在webview文档中的一个iframe中的，用开发者工具检查和修改webview的DOM，在webview内调试脚本。</p><p>如果你用了webview开发者工具的console，确保你在Console面板左上角的下拉框里选中了当前<strong>激活窗体</strong>环境：</p><p><img src="https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/extension-guides/images/webview/debug-active-frame.png" alt="选择激活窗体"></p><p><strong>激活窗体</strong>环境是webview脚本执行的地方。</p><p>另外，<strong>Developer: Reload Webview</strong>命令会刷新所有已激活的webview。如果你需要重置一个webview的状态，这个命令会非常有用，或者你想要读取硬盘内容的webview更新一下，也可以使用这个方法。</p><h2 id="加载本地内容" tabindex="-1"><a class="header-anchor" href="#加载本地内容" aria-hidden="true">#</a> 加载本地内容</h2><hr><p>webview运行在独立的环境中，因此不能直接访问本地资源，这是出于安全性考虑的做法。这也意味着要想从你的插件中加载图片、样式等其他资源，或是从用户当前的工作区加载任何内容的话，你必须使用webview中的<code>vscode-resource:</code>协议。</p><p><code>vscode-resource:</code>协议就像<code>file:</code>协议一样，不过它只允许访问本地文件。和<code>file:</code>一样的是，<code>vscode-resource:</code>只能从绝对路径中加载资源。</p><p>想象一下，我们想要从本地把喵喵们的gif打包进来，而不是从Giphy（国外出名的gif收集站）里加载进来。要想做到这点，我们首先给本地文件新建一个URI，然后用<code>vscode-resource:</code>协议更新这些URI：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vscode <span class="token keyword">from</span> <span class="token string">&#39;vscode&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.start&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> panel <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">createWebviewPanel</span><span class="token punctuation">(</span>
        <span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Cat Coding&#39;</span><span class="token punctuation">,</span>
        vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 获取磁盘上的资源路径</span>
      <span class="token keyword">const</span> onDiskPath <span class="token operator">=</span> vscode<span class="token punctuation">.</span>Uri<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span>
        path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>extensionPath<span class="token punctuation">,</span> <span class="token string">&#39;media&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cat.gif&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 获取在webview中使用的特殊URI</span>
      <span class="token keyword">const</span> catGifSrc <span class="token operator">=</span> onDiskPath<span class="token punctuation">.</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token punctuation">{</span> scheme<span class="token operator">:</span> <span class="token string">&#39;vscode-resource&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      panel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span>catGifSrc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>catGifSrc</code>的值最后会像这样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vscode-resource:/Users/toonces/projects/vscode-cat-coding/media/cat.gif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认情况下，<code>scode-resource:</code>只能访问下列地址的资源：</p><ul><li>你的插件安装的目录</li><li>用户当前激活的工作区</li></ul><p>你也可以用data URI将资源直接嵌套到webview中去。</p><h3 id="控制本地资源访问" tabindex="-1"><a class="header-anchor" href="#控制本地资源访问" aria-hidden="true">#</a> 控制本地资源访问</h3><p>使用<code>localResourceRoots</code>选项，webview可以控制<code>vscode-resource:</code>加载的的资源。 <code>localResourceRoots</code>定义了可能被加载的本地内容的根URI。</p><p>我们用<code>localResourceRoots</code>去约束<strong>Cat Coding</strong>webview只加载我们插件的<code>media</code>目录下的内容：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vscode <span class="token keyword">from</span> <span class="token string">&#39;vscode&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.start&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> panel <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">createWebviewPanel</span><span class="token punctuation">(</span>
        <span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Cat Coding&#39;</span><span class="token punctuation">,</span>
        vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token comment">// 只允许webview加载我们插件的\`media\`目录下的资源</span>
          localResourceRoots<span class="token operator">:</span> <span class="token punctuation">[</span>vscode<span class="token punctuation">.</span>Uri<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>extensionPath<span class="token punctuation">,</span> <span class="token string">&#39;media&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> onDiskPath <span class="token operator">=</span> vscode<span class="token punctuation">.</span>Uri<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span>
        path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>extensionPath<span class="token punctuation">,</span> <span class="token string">&#39;media&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cat.gif&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> catGifSrc <span class="token operator">=</span> onDiskPath<span class="token punctuation">.</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token punctuation">{</span> scheme<span class="token operator">:</span> <span class="token string">&#39;vscode-resource&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      panel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span>catGifSrc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了禁止所有的本地资源，只要把<code>localResourceRoots</code>设为<code>[]</code>就好了。</p><p>通常来说，webview应该和加载本地资源一样严格，然而，<code>vscode-resource</code>和<code>localResourceRoots</code>并不保证百分百的安全性。请确保你的webview遵循<a href="/extension-guides/webview#%E5%AE%89%E5%85%A8%E6%80%A7">安全性最佳实践</a>，强烈建议考虑添加一个<a href="/extension-guides/webview#%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E7%AD%96%E7%95%A5">内容安全政策</a>以便约束之后加载的内容。</p><h3 id="给webview内容加上主题" tabindex="-1"><a class="header-anchor" href="#给webview内容加上主题" aria-hidden="true">#</a> 给webview内容加上主题</h3><p>webview可以基于当前的VS Code主题和CSS改变自身的样式。VS Code将主题分成3中类别，而且在<code>body</code>元素上加上了特殊类名以表明当前主题：</p><ul><li><code>vscode-light</code>——亮色主题</li><li><code>vscode-dark</code>——暗色主题</li><li><code>vscode-high-contrast</code>——高反差主题</li></ul><p>下列CSS改变了基于用户当前主题的webview字体颜色：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body.vscode-light</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body.vscode-dark</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body.vscode-high-contrast</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当开发一个webview应用的时候，请保证应用能在三种主题下都可以运作，务必在高反差模式下测试你的webview，以便有视觉障碍的用户也能正常使用。</p>`,68),V={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"vscode",-1),T=n("code",null,"-",-1),D=n("code",null,".",-1),M=n("code",null,"editor.foreground",-1),O=n("code",null,"var(--vscode-editor-foreground)",-1),R=e(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">code</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vscode-editor-foreground<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多可用的主题变量，参阅<a href="/references/theme-color">主题色彩</a>。</p><p>下面也定义了一些与字体有关的变量：</p><ul><li><code>-vscode-editor-font-family</code> - 编辑器的文字类型(设置中的<code>editor.fontFamily</code>配置项)</li><li><code>-vscode-editor-font-weight</code> - 编辑器的文字粗细(设置中的<code>editor.fontWeight</code>配置项)</li><li><code>-vscode-editor-font-size</code> - 编辑器文字大小(设置中的<code>editor.fontSize</code>配置项)</li></ul><h2 id="脚本和信息传递" tabindex="-1"><a class="header-anchor" href="#脚本和信息传递" aria-hidden="true">#</a> 脚本和信息传递</h2><hr><p>既然webview就像iframe一样，也就是说它们也可以运行脚本，webview中的Javascript默认是禁用的，不过我们能用<code>enableScripts: true</code>打开它。</p><p>让我们写一段脚本，追踪我们家喵星人写代码的行数。运行一个基础脚本非常的容易，但是注意这个示例只作演示用途，在实践中，你的webview应该遵循<a href="#%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E7%AD%96%E7%95%A5">内容安全政策</a>，禁止行内脚本。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vscode <span class="token keyword">from</span> <span class="token string">&#39;vscode&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.start&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> panel <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">createWebviewPanel</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cat Coding&quot;</span><span class="token punctuation">,</span> vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token comment">// 在webview中启用脚本</span>
            enableScripts<span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        panel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
            &lt;!DOCTYPE html&gt;
            &lt;html lang=&quot;en&quot;&gt;
            &lt;head&gt;
                &lt;meta charset=&quot;UTF-8&quot;&gt;
                &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
                &lt;title&gt;Cat Coding&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;img src=&quot;https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif&quot; width=&quot;300&quot; /&gt;
                &lt;h1 id=&quot;lines-of-code-counter&quot;&gt;0&lt;/h1&gt;

                &lt;script&gt;
                    const counter = document.getElementById(&#39;lines-of-code-counter&#39;);

                    let count = 0;
                    setInterval(() =&gt; {
                        counter.textContent = count++;
                    }, 100);
                &lt;/script&gt;
            &lt;/body&gt;
            &lt;/html&gt;
        </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/extension-guides/images/webview/scripts-basic.gif" alt="在webview中运行脚本"></p><p>哇！真是位高产的喵主子!</p><p>!&gt; webveiw的脚本能做到任何普通网页脚本能做到的事情，但是webview运行在自己的上下文中，脚本不能访问VS Code API。</p><h3 id="将插件的信息传递到webview" tabindex="-1"><a class="header-anchor" href="#将插件的信息传递到webview" aria-hidden="true">#</a> 将插件的信息传递到webview</h3><p>插件可以用<code>webview.postMessage()</code>将数据发送到它的webview中。这个方法能发送任何序列化的JSON数据到webview中，在webview中则通过<code>message</code>事件接受信息。</p><p>我们现在就来看看这个实现，在Cat Coding中新增一个命令来表示我们家的喵在重构他的代码（所以会减少代码总行数）。新增<code>catCoding.doRefactor</code>命令，利用<code>postMessage</code>把指示发送到webview中，webview中的<code>window.addEventListener(&#39;message&#39; event =&gt; { ... })</code>则会处理这些信息：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 现在只有一只喵喵程序员了</span>
    <span class="token keyword">let</span> currentPanel<span class="token operator">:</span> vscode<span class="token punctuation">.</span>WebviewPanel <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

    context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.start&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentPanel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            currentPanel<span class="token punctuation">.</span><span class="token function">reveal</span><span class="token punctuation">(</span>vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            currentPanel <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">createWebviewPanel</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cat Coding&quot;</span><span class="token punctuation">,</span> vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                enableScripts<span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            currentPanel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            currentPanel<span class="token punctuation">.</span><span class="token function">onDidDispose</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> currentPanel <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 我们新的命令</span>
    context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.doRefactor&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>currentPanel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 把信息发送到webview</span>
        <span class="token comment">// 你可以发送任何序列化的JSON数据</span>
        currentPanel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token string">&#39;refactor&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
            &lt;!DOCTYPE html&gt;
            &lt;html lang=&quot;en&quot;&gt;
            &lt;head&gt;
                &lt;meta charset=&quot;UTF-8&quot;&gt;
                &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
                &lt;title&gt;Cat Coding&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;img src=&quot;https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif&quot; width=&quot;300&quot; /&gt;
                &lt;h1 id=&quot;lines-of-code-counter&quot;&gt;0&lt;/h1&gt;

                &lt;script&gt;
                    const counter = document.getElementById(&#39;lines-of-code-counter&#39;);

                    let count = 0;
                    setInterval(() =&gt; {
                        counter.textContent = count++;
                    }, 100);

                    // Handle the message inside the webview
                    window.addEventListener(&#39;message&#39;, event =&gt; {

                        const message = event.data; // The JSON data our extension sent

                        switch (message.command) {
                            case &#39;refactor&#39;:
                                count = Math.ceil(count * 0.5);
                                counter.textContent = count;
                                break;
                        }
                    });
                &lt;/script&gt;
            &lt;/body&gt;
            &lt;/html&gt;
        </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/extension-guides/images/webview/scripts-extension_to_webview.gif" alt="向webview传递信息"></p><h3 id="将webview的信息传递到插件中" tabindex="-1"><a class="header-anchor" href="#将webview的信息传递到插件中" aria-hidden="true">#</a> 将webview的信息传递到插件中</h3><p>webview也可以把信息传递回对应的插件中，用VS Code API 为webview提供的<code>postMessage</code>函数我们就可以完成这个目标。调用webview中的<code>acquireVsCodeApi</code>获取VS Code API对象。这个函数在一个会话中只能调用一次，你必须保持住这个方法返回的VS Code API实例，然后再转交到需要调用这个实例的地方。</p><p>现在我们在<strong>Cat Coding</strong>添加一个弹出bug的警示框：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.start&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> panel <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">createWebviewPanel</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cat Coding&quot;</span><span class="token punctuation">,</span> vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            enableScripts<span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        panel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 处理webview中的信息</span>
        panel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span><span class="token function">onDidReceiveMessage</span><span class="token punctuation">(</span>message <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token string">&#39;alert&#39;</span><span class="token operator">:</span>
                    vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">showErrorMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
            &lt;!DOCTYPE html&gt;
            &lt;html lang=&quot;en&quot;&gt;
            &lt;head&gt;
                &lt;meta charset=&quot;UTF-8&quot;&gt;
                &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
                &lt;title&gt;Cat Coding&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;img src=&quot;https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif&quot; width=&quot;300&quot; /&gt;
                &lt;h1 id=&quot;lines-of-code-counter&quot;&gt;0&lt;/h1&gt;

                &lt;script&gt;
                    (function() {
                        const vscode = acquireVsCodeApi();
                        const counter = document.getElementById(&#39;lines-of-code-counter&#39;);

                        let count = 0;
                        setInterval(() =&gt; {
                            counter.textContent = count++;

                            // Alert the extension when our cat introduces a bug
                            if (Math.random() &lt; 0.001 * count) {
                                vscode.postMessage({
                                    command: &#39;alert&#39;,
                                    text: &#39;🐛  on line &#39; + count
                                })
                            }
                        }, 100);
                    }())
                &lt;/script&gt;
            &lt;/body&gt;
            &lt;/html&gt;
        </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/extension-guides/images/webview/scripts-webview_to_extension.gif" alt="从webview向插件传递信息"></p><p>出于安全性考虑，你必须保证VS Code API的私有性，也不会泄露到全局状态中去。</p><h2 id="安全性" tabindex="-1"><a class="header-anchor" href="#安全性" aria-hidden="true">#</a> 安全性</h2><hr><p>每一个你创建的webview都必须遵循这些基础的安全性最佳实践。</p><h3 id="限制能力" tabindex="-1"><a class="header-anchor" href="#限制能力" aria-hidden="true">#</a> 限制能力</h3><p>webview应该留有它所需的最小功能集合即可。例如：如果你的webview不需要运行脚本，就不要设置<code>enableScripts: true</code>。如果你的webview不需要加载用户工作区的资源，就把<code>localResourceRoots</code>设置为<code>[vscode.Uri.file(extensionContext.extensionPath)]</code>或者<code>[]</code>以便禁止访问任何本地资源。</p><h3 id="内容安全策略" tabindex="-1"><a class="header-anchor" href="#内容安全策略" aria-hidden="true">#</a> 内容安全策略</h3>`,29),B={href:"https://developers.google.com/web/fundamentals/security/csp/",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"https",-1),N=e(`<p>要想加上内容安全策略，将<code>&lt;meta http-equiv=&quot;Content-Security-Policy&quot;&gt;</code>指令放到webview的<code>&lt;head&gt;</code>中</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
            &lt;!DOCTYPE html&gt;
            &lt;html lang=&quot;en&quot;&gt;
            &lt;head&gt;
                &lt;meta charset=&quot;UTF-8&quot;&gt;

                &lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;default-src &#39;none&#39;;&quot;&gt;

                &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;

                &lt;title&gt;Cat Coding&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
                ...
            &lt;/body&gt;
            &lt;/html&gt;
        </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>default-src &#39;none&#39;;</code>策略直接禁止了所有内容。我们可以按插件需要的最少内容修改这个指令，如只允许通过<code>https</code>加载本地脚本、样式和图片：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
    <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Content-Security-Policy<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default-src &#39;none&#39;; img-src vscode-resource: https:; script-src vscode-resource:; style-src vscode-resource:;<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述策略也隐式地禁用了内联脚本和样式。把内联样式和脚本提取到外部文件中是一个非常好的实践，也不会与内容安全策略冲突。</p><h3 id="只通过https加载内容" tabindex="-1"><a class="header-anchor" href="#只通过https加载内容" aria-hidden="true">#</a> 只通过https加载内容</h3><p>如果你的webview允许加载外部资源，我们强烈建议你只允许通过<code>https</code>加载而不要使用http，上面的例子已经用内容安全策略展示了使用<code>https</code>的方式。</p><h3 id="审查用户输入" tabindex="-1"><a class="header-anchor" href="#审查用户输入" aria-hidden="true">#</a> 审查用户输入</h3><p>就像构建普通HTML页面一样，你也同样需要在webview中审查用户输入的内容。 没有审查输入内容可能会导致内容注入，也就意味着将用户置于了危险之中。</p><p>可能需要审查的值：</p><ul><li>文件内容</li><li>文件和文件夹路径</li><li>用户工作区设置</li></ul><p>可以考虑用一个辅助库去构建HTML模板，或者确保所有来自用户工作区的内容都通过了审查</p><p>只依赖审查内容的安全性是不够的，你也要遵循其他<a href="#%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E7%AD%96%E7%95%A5">安全性的最佳实践</a>，尽可能减少潜在的内容注入。</p><h2 id="持久性" tabindex="-1"><a class="header-anchor" href="#持久性" aria-hidden="true">#</a> 持久性</h2><hr><p>在webview的标准<a href="#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">生命周期</a>中，<code>createWebviewPanel</code>负责创建和销毁（用户关闭或者调用<code>.dispose()</code>方法）webview。而webview的内容再是在webview可见时创建的，在webview处于非激活状态时销毁。webview处于非激活标签中时，任何webview中的保留的状态都会丢失。</p><p>所以最好减少webview中的状态，取而代之用<a href="#%E5%B0%86webview%E7%9A%84%E4%BF%A1%E6%81%AF%E4%BC%A0%E9%80%92%E5%88%B0%E6%8F%92%E4%BB%B6%E4%B8%AD">消息传递</a>储存状态。</p><h3 id="getstate和setstate" tabindex="-1"><a class="header-anchor" href="#getstate和setstate" aria-hidden="true">#</a> getState和setState</h3><p>运行在webview中的脚本可以使用<code>getState</code>和<code>setState</code>方法保存和恢复JSON序列化的状态对象。这个状态可以一直保留，即使webview面板已经被隐藏，只有当它销毁时，状态则会一起销毁。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// webview中的脚本</span>
<span class="token keyword">const</span> vscode <span class="token operator">=</span> <span class="token function">acquireVsCodeApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> counter <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;lines-of-code-counter&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 检查是否需要恢复状态</span>
<span class="token keyword">const</span> previousState <span class="token operator">=</span> vscode<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> previousState <span class="token operator">?</span> previousState<span class="token punctuation">.</span>count <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
counter<span class="token punctuation">.</span>textContent <span class="token operator">=</span> count<span class="token punctuation">;</span>

<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    counter<span class="token punctuation">.</span>textContent <span class="token operator">=</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token comment">// 更新已经保存的状态</span>
    vscode<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>getState</code>和<code>setState</code>是用来保存状态的比较好的办法，因为他们的性能消耗要远低于<code>retainContextWhenHidden</code>。</p><h3 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化" aria-hidden="true">#</a> 序列化</h3><p>使用<code>WebviewPanelSerializer</code>之后，你的webview可以在VS Code关闭后自动恢复。序列化构建于<code>getState</code>和<code>setState</code>之上，只有你的插件注册了<code>WebviewPanelSerializer</code>，这个功能才会生效。</p><p>给插件的<code>package.json</code>添加一个<code>onWebviewPanel</code>激活事件，然后我们的代码喵就能在VS Code重启后继续工作了：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    ...<span class="token punctuation">,</span>
    <span class="token string">&quot;onWebviewPanel:catCoding&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个激活事件确保我们的插件不论VS Code何时恢复<code>catCoding</code>webview时都会启动。</p><p>然后在我们插件的<code>activate</code>方法中调用<code>registerWebviewPanelSerializer</code>注册一个新的<code>WebviewPanelSerializer</code>，这个函数负责恢复webview之前保存的内容。其中的state就是webview用<code>setState</code>设置的JSON格式的状态。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 常见设置...</span>

    <span class="token comment">// 确保我们注册了一个序列化器</span>
    vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">registerWebviewPanelSerializer</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">CatCodingSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CatCodingSerializer</span> <span class="token keyword">implements</span> <span class="token class-name">vscode</span><span class="token punctuation">.</span>WebviewPanelSerializer <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">deserializeWebviewPanel</span><span class="token punctuation">(</span>webviewPanel<span class="token operator">:</span> vscode<span class="token punctuation">.</span>WebviewPanel<span class="token punctuation">,</span> state<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \`state\`是webview内调用\`setState\`保留住的</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Got state: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>state<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 恢复我们的webview内容</span>
        <span class="token comment">//</span>
        <span class="token comment">// 确保我们将\`webviewPanel\`传递到了这里</span>
        <span class="token comment">// 然后用事件侦听器恢复我们的内容</span>
        webviewPanel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在VS Code中打开一个喵喵打代码的面板，关闭后重启就能看到这个面板恢复到了之前的状态和位置。</p><h3 id="隐藏时保留上下文" tabindex="-1"><a class="header-anchor" href="#隐藏时保留上下文" aria-hidden="true">#</a> 隐藏时保留上下文</h3><p>如果webview的视图非常复杂，或者状态不能很快地保存和恢复，你则可以用<code>retainContextWhenHidden</code>选项，这个选项在不可见的状态中保存了webview的内容，即使webview本身不处于激活状态。</p><p>虽然<strong>Cat Coding</strong>说不上有很复杂的状态，不过我们可以打开<code>retainContextWhenHidden</code>看看webview的行为会发生什么变化：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vscode <span class="token keyword">from</span> <span class="token string">&#39;vscode&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;catCoding.start&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> panel <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">createWebviewPanel</span><span class="token punctuation">(</span>
        <span class="token string">&#39;catCoding&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Cat Coding&#39;</span><span class="token punctuation">,</span>
        vscode<span class="token punctuation">.</span>ViewColumn<span class="token punctuation">.</span>One<span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          enableScripts<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          retainContextWhenHidden<span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      panel<span class="token punctuation">.</span>webview<span class="token punctuation">.</span>html <span class="token operator">=</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getWebviewContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;!DOCTYPE html&gt;
        &lt;html lang=&quot;en&quot;&gt;
        &lt;head&gt;
            &lt;meta charset=&quot;UTF-8&quot;&gt;
            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
            &lt;title&gt;Cat Coding&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;img src=&quot;https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif&quot; width=&quot;300&quot; /&gt;
            &lt;h1 id=&quot;lines-of-code-counter&quot;&gt;0&lt;/h1&gt;

            &lt;script&gt;
                const counter = document.getElementById(&#39;lines-of-code-counter&#39;);

                let count = 0;
                setInterval(() =&gt; {
                    counter.textContent = count++;
                }, 100);
            &lt;/script&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/extension-guides/images/webview/persistence-retrain.gif" alt="持久化保留"></p><p>我们可以注意到计数器没有重置，webview隐藏之后就恢复了。而且不需要多余的代码！<code>retainContextWhenHidden</code>的行为就像浏览器一样，脚本和其他内容被暂时挂起，但是一旦webview可见之后就会立即恢复。但是在webview隐藏状态下，你还是不能给它发送消息的。</p><p>虽然<code>retainContextWhenHidden</code>很吸引人，但是记住这个功能的内容占用很高，只有其他的持久化技术无能为力之时再选择这种方式。</p><h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步" aria-hidden="true">#</a> 下一步</h2><p>如果你想了解学习更多VS Code扩展性的内容，请查看下列主题：</p>`,38),U=n("li",null,[n("a",{href:"/extension-capabilities/README"},"插件功能"),s(" - 其它拓展VS Code功能的方式")],-1);function F(H,z){const t=p("ExternalLinkIcon"),o=p("RouterLink");return c(),l("div",null,[r,v,k,m,b,n("ul",null,[n("li",null,[n("a",w,[s("Webview 示例"),a(t)])])]),g,n("ul",null,[n("li",null,[n("a",h,[s("window.createWebviewPanel"),a(t)])]),n("li",null,[n("a",f,[s("window.registerWebviewPanelSerializer"),a(t)])])]),y,n("p",null,[s("这是"),C,s("插件的第一版"),q,s("，你可以在"),n("a",x,[s("这里"),a(t)]),s("找到完整的代码。我们的第一版插件"),S,s("，叫做"),_,s("。当用户从"),P,s("调用"),E,s("，或者一个创建好的"),W,s("命令，我们的猫猫会出现在webview窗口内。")]),I,n("p",null,[s("webview可以通过"),n("a",V,[s("CSS variables"),a(t)]),s("访问VS Code主题，这些变量以"),A,s("为前缀，并且用"),T,s("替代了"),D,s("，例如"),M,s("变成了"),O,s("：")]),R,n("p",null,[n("a",B,[s("内容安全策略"),a(t)]),s("可以进一步限制webview可以加载和执行的内容。例如：内容安全策略强制可以运行在webview中的脚本白名单，或者告诉webview只加载带"),j,s("协议的图片。")]),N,n("ul",null,[n("li",null,[a(o,{to:"/"},{default:u(()=>[s("插件API")]),_:1}),s(" - 所有的VS Code插件API")]),U])])}const Z=i(d,[["render",F],["__file","06.webview.html.vue"]]);export{Z as default};
