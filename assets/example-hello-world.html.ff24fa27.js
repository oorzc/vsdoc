import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c,a as s,b as n,d as a,w as o,e as t,r as l}from"./app.ed9f300c.js";const d={},u=t(`<h1 id="示例-hello-world" tabindex="-1"><a class="header-anchor" href="#示例-hello-world" aria-hidden="true">#</a> 示例：Hello World</h1><h2 id="你的第一个插件" tabindex="-1"><a class="header-anchor" href="#你的第一个插件" aria-hidden="true">#</a> 你的第一个插件</h2><hr><p>本节通过Hello World这个完整的项目手把手教你掌握VS Code扩展性概念。 在本项目中，我们会给VS Code添加一个新的命令，虽然只是用来显示&quot;Hello World&quot;信息。在本节的最后，你将和编辑器编辑器互动，查找用户选中的文本。</p><h4 id="预备工作" tabindex="-1"><a class="header-anchor" href="#预备工作" aria-hidden="true">#</a> 预备工作</h4><p>请查看<a href="/extension-authoring/extension-generator?id=%E9%A2%84%E5%85%88%E5%87%86%E5%A4%87">生成插件-预备工作</a></p><h4 id="生成新插件" tabindex="-1"><a class="header-anchor" href="#生成新插件" aria-hidden="true">#</a> 生成新插件</h4><p>请查看<a href="/extension-authoring/extension-generator?id=%E8%BF%90%E8%A1%8Cyo-code%F0%9F%98%8E">生成插件-运行Yo</a></p><h2 id="运行插件" tabindex="-1"><a class="header-anchor" href="#运行插件" aria-hidden="true">#</a> 运行插件</h2><hr><ul><li>打开VS Code，选择<code>文件</code>&gt;<code>打开文件夹</code>，选择你刚刚生成的项目目录</li><li>点击<code>F5</code>或者<code>Debug</code>按钮，然后点击<code>开始</code></li><li>新的VS Code实例会运行在特殊环境中（<code>Extension Development Host</code></li><li>按下<code>⇧⌘P</code>(windows <code>shift + ctrl + p</code>)，输入命令<code>Hello world</code></li><li>恭喜！你的第一个VS Code插件执行成功了</li></ul><p><img src="https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensions/images/example-hello-world/running.png" alt=""></p><h2 id="插件的目录结构" tabindex="-1"><a class="header-anchor" href="#插件的目录结构" aria-hidden="true">#</a> 插件的目录结构</h2><hr><p>构建完毕之后，你的插件开发目录看起来应该是这样的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── .gitignore
├── .vscode                     // VS Code 文件
│   ├── launch.json
│   ├── settings.json
│   └── tasks.json
├── .vscodeignore               // 发布插件时忽略的文件
├── README.md
├── src
│   └── extension.ts            // 插件的入口（源文件）
├── test                        // 测试文件夹
│   ├── extension.test.ts       // extension.test.js, 如果是 JavaScript 插件的话
│   └── index.ts                // index.js, 如果是 JavaScript 插件的话
├── node_modules
│   ├── vscode                  // 包含了vscode插件开发时的类型定义文件
│   └── typescript              // typescript的编译器 (TypeScript only)
├── out                         // 编译出口 (TypeScript only)
│   ├── extension.js            // 插件入口
│   ├── extension.js.map
│   └── test
│       ├── extension.test.js
│       ├── extension.test.js.map
│       ├── index.js
│       └── index.js.map
├── package.json                // 插件清单
├── tsconfig.json               // jsconfig.json, 如果是 JavaScript 插件的话
└── vsc-extension-quickstart.md // 快速上手插件开发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们看看这些文件夹都是干什么用的：</p><h4 id="插件清单-package-json" tabindex="-1"><a class="header-anchor" href="#插件清单-package-json" aria-hidden="true">#</a> 插件清单：<code>package.json</code></h4>`,18),r=s("li",null,[n("每个VS Code插件都有"),s("code",null,"package.json"),n("文件，文件内包含了这个插件功能和用处。")],-1),v=s("li",null,[n("当项目启动时，VS Code会立即读取这个文件中的每个"),s("code",null,"配置(contributes)"),n("部分并作出响应。")],-1),k=t(`<p>?&gt; 译者注：为了便于理解，<code>contribution / contributes</code>在本教程中译为<strong>发布内容配置/配置</strong>，<code>contribution points</code>译为<strong>发布内容配置点/配置点</strong>。</p><p><strong>示例：基于TypeScript的pacakge.json</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myFirstExtension&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;publisher&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;engines&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;vscode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.5.0&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;categories&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Other&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;onCommand:extension.sayHello&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./out/extension&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;contributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;commands&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extension.sayHello&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;vscode:prepublish&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc -p ./&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;compile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc -watch -p ./&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;postinstall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./node_modules/vscode/bin/install&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./node_modules/vscode/bin/test&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vscode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.5.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mocha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.3.3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;@types/node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^6.0.40&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;@types/mocha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.2.32&quot;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!&gt; 提示: 基于JavaScript的插件没有scripts部分，因为不需要编译。</p><p>这份<code>package.json</code>文件说了什么呢？</p><ul><li>**配置部分(contributes)**给<em>命令面板</em>定义了一个叫做<code>Hello world</code>的入口，它会调用&#39;extension.sayHello&#39;。</li><li>当命令&quot;extension.sayHello&quot;调用时，执行<code>loaded</code>(激活事件)请求。</li><li>在&quot;<code>./out/extension.js</code>&quot;中，存放着我们的主文件。</li></ul><p>!&gt; 注意：VS Code <strong>不会一启动就加载插件</strong>。插件必须在<code>activationEvents</code>中描述它的启动时机，比如<code>loaded</code>事件。</p><h4 id="生成的代码" tabindex="-1"><a class="header-anchor" href="#生成的代码" aria-hidden="true">#</a> 生成的代码</h4><p>自动生成的代码存放在<strong>extension.ts</strong>（或者<strong>extension.js</strong>中）。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// &#39;vscode&#39;模块包含了VS Code extensibility API</span>
<span class="token comment">// 按下述方式导入这个模块</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vscode <span class="token keyword">from</span> <span class="token string">&#39;vscode&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 一旦你的插件激活，vscode会立刻调用下述方法</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 用console输出诊断信息(console.log)和错误(console.error)</span>
    <span class="token comment">// 下面的代码只会在你的插件激活时执行一次</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Congratulations, your extension &quot;my-first-extension&quot; is now active!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 入口命令已经在package.json文件中定义好了，现在调用registerCommand方法</span>
    <span class="token comment">// registerCommand中的参数必须与package.json中的command保持一致</span>
    <span class="token keyword">let</span> disposable <span class="token operator">=</span> vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;extension.sayHello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 把你的代码写在这里，每次命令执行时都会调用这里的代码</span>
        <span class="token comment">// ...</span>
        <span class="token comment">// 给用户显示一个消息提示</span>
        vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">showInformationMessage</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>disposable<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>每个插件都应该在主文件中注册一个<code>activate()</code>函数，因为这个函数只会调用一次。你只有<code>在package.json</code>中注册了<code>activationEvents</code>列表中的事件，激活事件才会被调用。</li><li>如果插件使用了系统资源(如：生成进程），则需要从主文件中导出名为<code>deactive()</code>的函数去清理释放这些资源，VS Code会在关闭时调用这个方法。</li><li>这个插件导入了VS Code API，然后注册了&quot;extension.sayHello&quot;命令和回调函数，执行后在VS Code中显示一条&quot;Hello World!&quot;消息。</li></ul><p>!&gt; 注意： <code>package.json</code>的<code>contributes</code>部分给<em>命令面板</em>添加了一个调用入口。<code>extension.ts/.js</code>定义了<code>extension.sayHello</code>的实现。对于 Typescript类型的插件来说，生成的<code>out/extension.js</code>会在运行时加载。</p><h4 id="其他文件" tabindex="-1"><a class="header-anchor" href="#其他文件" aria-hidden="true">#</a> 其他文件</h4><ul><li><code>vscode/launch.json</code> 告诉VS Code启用插件开发模式。它也描述了<code>.vscode/tasks.json</code>中需要Typescript编译器的预加载任务。</li><li><code>vscode/settings.json</code> 默认排除外部文件夹。你如果想隐藏一些文件，可以修改这个配置。</li><li><code>gitignore</code> - 告诉git不跟踪哪些文件。</li><li><code>vscodeignore</code> - 告诉打包工具，发布插件时应该忽略哪些文件。</li><li><code>README.md</code> - 为插件的使用用户提供良好的文档。</li><li><code>vsc-extension-quickstart.md</code> - 你的快速开始指南。</li><li><code>test/extension.test.ts</code> - 把你的单元测试放在这里，看看和VS Code API有哪些出入。</li></ul><h2 id="插件激活过程" tabindex="-1"><a class="header-anchor" href="#插件激活过程" aria-hidden="true">#</a> 插件激活过程</h2><hr><p>我们刚刚已经了解了开发目录下的每个文件，现在我们看看你的插件是怎么运行起来的：</p><ol><li>插件开发环境发现了这个插件，然后读取它的<code>package.json</code></li><li>你按下<code>ctrl shift p</code>时，<em>命令面板</em>显示出已注册的命令列表</li><li>在列表中你找到<code>package.json</code>中定义的<code>Hello world</code>命令入口</li><li>选中并执行<code>Hello world</code>，随即执行真实的&quot;<code>extension.sayHello</code>&quot;命令 <ul><li>创建<code>&quot;onCommand:extension.sayHello&quot;</code>激活事件</li><li>激活所有注册在<code>activationEvents</code>的事件 <ul><li>Javascript虚拟机加载<code>./out/extension.js</code>文件</li><li>VS Code查找导出的<code>activate</code>函数，并调用</li></ul></li></ul></li><li>调用<code>&quot;extension.sayHello&quot;</code>注册的函数</li><li>函数执行，显示出&quot;Hello world&quot;消息</li></ol><h2 id="调试插件" tabindex="-1"><a class="header-anchor" href="#调试插件" aria-hidden="true">#</a> 调试插件</h2><hr><p>直接在你的代码里打上断点就可以调试了，很简单吧。</p><p><img src="https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensions/images/example-hello-world/hitbp.png" alt="调试"></p><p>!&gt; 注意：VS Code具有解析sourcemap的能力，所以你可以直接在Typescript代码中调试。</p><p>?&gt;小提示：调试控制台(Debug Console)能输出所有console打印的日志。</p>`,24),m=t(`<h2 id="小小的改造" tabindex="-1"><a class="header-anchor" href="#小小的改造" aria-hidden="true">#</a> 小小的改造</h2><hr><p>试着修改你的<code>extension.ts</code>（或者<code>extension.js</code>）中<code>extension.sayHello</code>的实现，我们把它改造成一个对选中文本计数的功能。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> disposable <span class="token operator">=</span> vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;extension.sayHello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 每当你执行命令，这里的代码都会执行一次</span>

    <span class="token keyword">let</span> editor <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span>activeTextEditor<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>editor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 没有打开的编辑器</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> selection <span class="token operator">=</span> editor<span class="token punctuation">.</span>selection<span class="token punctuation">;</span>
    <span class="token keyword">let</span> text <span class="token operator">=</span> editor<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span>selection<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 给用户一个消息提示框</span>
    vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">showInformationMessage</span><span class="token punctuation">(</span><span class="token string">&#39;Selected characters: &#39;</span> <span class="token operator">+</span> text<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!&gt; 当你修改了代码，你需要按<kbd>Ctrl + R</kbd>(macOS <kbd>Cmd + R</kbd>)重启Extension Development Host，或者直接按VS Code上面的重启按钮</p><p>新建一个文件，输入一些文本然后选中。当你运行<strong>Hello World</strong>命令，你应该能看到字符计数的消息框。</p><p><img src="https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensions/images/example-hello-world/selection-length.png" alt="文字计数"></p><h2 id="在本地安装你的插件" tabindex="-1"><a class="header-anchor" href="#在本地安装你的插件" aria-hidden="true">#</a> 在本地安装你的插件</h2><hr><p>好了，现在你已经完成了一个运行在开发模式下的插件，为了让你的插件运行在所有VS Code实例中，你需要在本地插件目录下新建一个文件夹，然后复制过去：</p><ul><li>Windows: <code>%USERPROFILE%\\.vscode\\extensions</code></li><li>macOS/Linux: <code>$HOME\\.vscode\\extensions</code></li></ul><h2 id="发布插件" tabindex="-1"><a class="header-anchor" href="#发布插件" aria-hidden="true">#</a> 发布插件</h2><hr>`,13),h=s("h2",{id:"下一步",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#下一步","aria-hidden":"true"},"#"),n(" 下一步")],-1),b=s("hr",null,null,-1),g=s("p",null,"如果你想查看更多extension API的概述，看看这些主题吧：",-1);function x(q,y){const e=l("RouterLink");return p(),c("div",null,[u,s("ul",null,[r,v,s("li",null,[n("请阅读"),a(e,{to:"/extensibility-reference/extension-manifest.html"},{default:o(()=>[n("package.json插件清单")]),_:1}),n("参考文档")]),s("li",null,[n("更多信息请参阅"),a(e,{to:"/extensibility-reference/contribution-points.html"},{default:o(()=>[n("package.json发布内容配置")]),_:1}),n("参考文档")])]),k,s("p",null,[n("查看更多关于插件"),a(e,{to:"/extension-authoring/developing-extensions.html"},{default:o(()=>[n("开发环境")]),_:1}),n("的东西。")]),m,s("p",null,[n("参阅"),a(e,{to:"/extension-authoring/publish-extension.html"},{default:o(()=>[n("分享插件")]),_:1})]),h,b,s("p",null,[n("在本篇指引中，我们实现了一个小小的插件。在"),a(e,{to:"/extension-authoring/docs/extension-authoring/example-word-count.html"},{default:o(()=>[n("示例-Word Count")]),_:1}),n("中你能找到完整的例子，学习如何在Markdown文件中监听编辑器的文档变动事件、显示文本字数。")]),g,s("ul",null,[s("li",null,[a(e,{to:"/extensibility-reference/overview.html"},{default:o(()=>[n("Extension API 概览")]),_:1}),n(" - 了解完整的VS Code扩展性模型。")]),s("li",null,[a(e,{to:"/extensibility-reference/principles-patterns.html"},{default:o(()=>[n("API原则和模式")]),_:1}),n(" - VS Code的扩展性基于这些指导性原则和模式。")]),s("li",null,[a(e,{to:"/extensibility-reference/contribution-points.html"},{default:o(()=>[n("发布内容配置")]),_:1}),n(" - 各种各样的VS Code发布内容配置项")]),s("li",null,[a(e,{to:"/extensibility-reference/activation-events.html"},{default:o(()=>[n("激活事件")]),_:1}),n(" - VS Code激活事件参考")]),s("li",null,[a(e,{to:"/extension-authoring/samples.html"},{default:o(()=>[n("更多插件示例")]),_:1}),n(" - 看看我们的插件示例列表")])])])}const _=i(d,[["render",x],["__file","example-hello-world.html.vue"]]);export{_ as default};