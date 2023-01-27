import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as p,a as n,b as e,d as s,w as o,e as i,r as d}from"./app.ed9f300c.js";const r={},u=i('<h1 id="扩展性原则和模式" tabindex="-1"><a class="header-anchor" href="#扩展性原则和模式" aria-hidden="true">#</a> 扩展性原则和模式</h1><h2 id="扩展性实现" tabindex="-1"><a class="header-anchor" href="#扩展性实现" aria-hidden="true">#</a> 扩展性实现</h2><hr><p>VS Code有着非常丰富的扩展性模型和生产插件的方法。不过我们没有给插件作者提供直接操作底层UI DOM的方法。在VS Code开发中，我们会不断优化底层web技术的使用使其达到高可用、高响应的状态，我们会随着这些技术和产品的演进继续调整DOM的使用方式。为了维持其性能和兼容性，插件在独立的进程中运行同时阻止插件作者直接操作DOM，这样有助于保持不同编程语言实现的插件一致性，VS Code还为很多场景提供了一整套内置的UI组件，如IntelliSense，这样一来，插件开发者也就不需要重复造轮子了。</p><p>这些规定乍看可能比较严格，我们也一直在寻找更好的方法改进我们的扩展性，增加插件的能力，期待聆听你的反馈和意见。</p><h2 id="核心" tabindex="-1"><a class="header-anchor" href="#核心" aria-hidden="true">#</a> 核心</h2><hr><h4 id="插件独立-稳定性" tabindex="-1"><a class="header-anchor" href="#插件独立-稳定性" aria-hidden="true">#</a> 插件独立 - 稳定性</h4><p>插件虽好但是它会影响到VS Code的启动性能和整体稳定性，所以VS Code为插件的加载和执行单独开辟了一条进程，<code>extension host process</code>，这样一来出错的插件就不会影响到VS Code，尤其是在VS Code刚启动的时候。</p><p>这样的架构确保了终端用户能控制住VS Code：不论什么时候，用户都可以打开、输入、保存文件，不管插件在做什么VS Code都需要保证UI的及时响应。</p><p><code>extension host</code>是一个Node.js进程，并将VS Code API暴露给了插件开发者。VS Code在<code>extension host</code>下为插件提供了debug支持。</p><h4 id="插件激活时机-性能" tabindex="-1"><a class="header-anchor" href="#插件激活时机-性能" aria-hidden="true">#</a> 插件激活时机 - 性能</h4><p>VS Code会尽可能晚地加载插件，为了达到控制内存的目的，如果插件在会话期间没有用到就不会加载。为了帮助开发者理解插件的懒加载机制，VS Code提供了称之为<code>activation events</code>的事件表。激活事件定义了特定的触发时机，比如：一个Markdown辅助插件只需要在用户打开Markdown文件的时候启动。</p><h4 id="extension-manifest-插件配置清单" tabindex="-1"><a class="header-anchor" href="#extension-manifest-插件配置清单" aria-hidden="true">#</a> Extension Manifest（插件配置清单）</h4>',14),h=n("code",null,"插件清单（extension manifest）",-1),_=n("code",null,"package.json",-1),b=n("code",null,"发布内容配置（contribution points）",-1),m=n("code",null,"commands",-1),k=n("code",null,"package.json",-1),f=n("p",null,[e("?> "),n("strong",null,"译者注"),e("：定义在发布内容配置中的有些东西会暴露在用户的"),n("strong",null,"配置"),e("中，用户可以通过setting.json等文件修改你的插件行为，因此叫做这个略拗口的名字——发布内容配置。"),n("strong",null,"配置点"),e("则是构成发布内容配置的一个个键值对。")],-1),v=n("h4",{id:"扩展性api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#扩展性api","aria-hidden":"true"},"#"),e(" 扩展性API")],-1),x=i(`<p>为了修改和自定义UI，VS Code采用了强有力的Web技术（HTML，CSS）。你可以很轻松地给DOM添加节点，然后使用CSS定义它的样式。不过，这个技术也并非没有缺陷，尤其是在实现像VS Code这样复杂的应用时。</p><p>易变的界面结构和紧密绑定到UI上的插件一起工作时可能会导致崩溃，因此VS Code采用了预防性的措施避免这种问题——不提供操作DOM的API。</p><h4 id="基于协议的插件" tabindex="-1"><a class="header-anchor" href="#基于协议的插件" aria-hidden="true">#</a> 基于协议的插件</h4><p>在VS Code中比较常见的场景是插件在各自独立的进程中运行，然后通过特定协议与VS Code进行通信，比如：语言服务器和调试适配器。</p><p>一般来说，这个通信协议使用 stdin/stdout 标准和JSON载荷进行消息传输。</p><p>使用分离的进程有助于插件建立独立的边界，维持VS Code核心编辑器进程的稳定性，同时也有助于插件开发人员为特定的插件实现选择合适的编程语言。</p><h2 id="扩展性模式" tabindex="-1"><a class="header-anchor" href="#扩展性模式" aria-hidden="true">#</a> 扩展性模式</h2><hr><p>扩展性API遵循下列模式。</p><h4 id="promises-异步" tabindex="-1"><a class="header-anchor" href="#promises-异步" aria-hidden="true">#</a> Promises（异步）</h4><p>VS Code API完全采用了promise的实现。对于插件来说允许任何promise形式的返回格式，如ES6，WinJS，A+等。</p><p>一个promise库需要它的API使用<code>Thenable</code>类型来表达，<code>Thenable</code>类型代表了一种通用特性的实现——then方法。</p><p>大多数时候promise是一个可选项，VS Code调用插件之后，它能直接处理正常的返回结果也能处理<code>Thenable</code>的结果类型。当promise是可选的API返回结果时，API会在返回类型中用<code>Thenable</code>表示。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">provideNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> Thenable<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="cancellation-tokens-取消式令牌" tabindex="-1"><a class="header-anchor" href="#cancellation-tokens-取消式令牌" aria-hidden="true">#</a> Cancellation Tokens（取消式令牌）</h4><p>有些事件可能从不稳定的变化状态开始，而随着状态变化这一事件最后肯能被取消了。比如：IntelliSense（智能补全）被触发后，用户持续输入的行为使得这一操作最终被取消了。</p><p>API也为这种行为提供了解决方案，你可以通过<code>CancellationToken</code>检查取消的状态（<code>isCancellationRequested</code>）或者当<em>取消</em>发生时得到通知（<code>onCancellationRequested</code>）。取消式令牌通常是API函数的最后一个（可选）参数。</p><h4 id="disposables-释放器" tabindex="-1"><a class="header-anchor" href="#disposables-释放器" aria-hidden="true">#</a> Disposables（释放器）</h4>`,18),S={href:"https://en.wikipedia.org/wiki/Dispose_pattern",target:"_blank",rel:"noopener noreferrer"},C=i(`<p>例如：<code>setStatusBarMessage(value: string)</code>事件返回一个<code>Disposable</code>对象，这个对象最终调用<code>dispose</code>方法移除message。</p><h4 id="events-事件" tabindex="-1"><a class="header-anchor" href="#events-事件" aria-hidden="true">#</a> Events（事件）</h4><p>事件在API中被暴露为函数，当你订阅一个事件侦听器时绑定。事件侦听器调用后会返回一个<code>Disposable</code>，它会在dispose触发后，移除事件侦听器。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">var</span> <span class="token function-variable function">listener</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;It happened&quot;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 开始侦听</span>
<span class="token keyword">var</span> subscription <span class="token operator">=</span> fsWatcher<span class="token punctuation">.</span><span class="token function">onDidDelete</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 你的代码</span>

subscription<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 停止侦听</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事件的命名规则遵循<code>on[Will | Did] 动词 + 名词</code>的形式。通过<code>onWill</code>表示将要发生，<code>onDid</code>表示已经发生，<code>动词</code>表示行为，<code>名词</code>指代上下文或目标。</p><p>举个栗子：<code>window.onDidChangeActiveTextEditor</code>中，激活的编辑器（ActiveTextEditor：<code>名词</code>）变动（change：<code>动词</code>）后（<code>onDid</code>）会触发事件。</p><h2 id="严格null检查" tabindex="-1"><a class="header-anchor" href="#严格null检查" aria-hidden="true">#</a> 严格null检查</h2><hr>`,8),V=n("code",null,"undefined",-1),g=n("code",null,"null",-1),I={href:"https://github.com/Microsoft/TypeScript/pull/7140",target:"_blank",rel:"noopener noreferrer"},A=n("h2",{id:"在插件中使用node-js模块",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#在插件中使用node-js模块","aria-hidden":"true"},"#"),e(" 在插件中使用Node.js模块")],-1),P=n("hr",null,null,-1),w=n("code",null,"pacakge.json",-1),y=n("code",null,"dependencies",-1),D={href:"https://code.visualstudio.com/docs/extensionAPI/extension-manifest#_useful-node-modules",target:"_blank",rel:"noopener noreferrer"},j=n("p",null,"安装和打包",-1),T=n("p",null,[e("VS Code不会在用户安装插件时，把你的依赖安装起来，所以你需要在发布之前使用"),n("code",null,"npm install"),e("。插件的发布包中包含着所有的依赖。使用"),n("code",null,"vsce ls"),e("命令列出"),n("code",null,"vsce"),e("之后会包含的依赖包。")],-1),M=n("code",null,".vscodeignore",-1),N=n("code",null,"vsce",-1),E={href:"https://code.visualstudio.com/docs/extensions/publish-extension#_vscodeignore",target:"_blank",rel:"noopener noreferrer"},O=i('<h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><hr><p><strong>问：我能在插件中使用原生Node.js模块吗？</strong></p><p>答：如果你在Windows平台上开发了一个原生模块插件，当你发布插件时，Windows上的编译器会将原生依赖编译进去，这样一来，macOS或者Linux的用户就用不了插件了。</p><p>目前这个问题的唯一方案是，将4个平台（Windows x86和x64，Linux，macOS）的所有二进制文件包含进来，并让这些代码在不同平台上动态加载。</p><p>我们不建议插件使用原生npm模块，因为原生模块会和插件打包，每当VS Code更新，这个包会随VS Code内置的node.js版本重新编译。你能在开发者工具(帮助 &gt; 打开开发者工具)中运行<code>process.versions</code>找到Node.js和模块版本。</p><h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步" aria-hidden="true">#</a> 下一步</h2>',7);function W(L,U){const a=d("RouterLink"),t=d("ExternalLinkIcon");return l(),p("div",null,[u,n("p",null,[e("为了激活一个懒加载插件，VS Code需要一份插件的描述文件，"),h,e("是一份添加了"),s(a,{to:"/extensibility-reference/extension-manifest.html"},{default:o(()=>[e("VS Code特定字段")]),_:1}),e("的"),_,e("文件，其中包含了激活事件的配置位置。VS Code提供了一系列插件可以使用的"),b,e("。例如，想给VS Code添加一个指令，则需要你在名为"),m,e("的配置点中定义指令。一旦你在"),k,e("中定义好了配置。VS Code 在启动时会读取、解析这个清单然后准备相应的UI界面。")]),f,n("p",null,[e("查看更多的"),s(a,{to:"/extensibility-reference/contribution-points.html"},{default:o(()=>[e("package.json 发布内容配置")]),_:1})]),v,n("p",null,[e("查看"),s(a,{to:"/extensibility-reference/vscode-api.html"},{default:o(()=>[e("扩展性API")]),_:1}),e("取得更多细节。")]),x,n("p",null,[e("VS Code API使用了"),n("a",S,[e("释放器模式"),s(t)]),e("，这个模式被用于事件侦听，命令，UI交互和各类语言配置上。")]),C,n("p",null,[e("VS CodeAPI使用"),V,e("和"),g,e("的Typescript类型，同样也支持"),n("a",I,[e("严格null检查"),s(t)]),e("。")]),A,P,n("p",null,[e("就像一个node模块，你可以把依赖添加到"),w,e("中的"),y,e("字段中去，甚至把VS Code"),n("a",D,[e("专用的node模块包"),s(t)]),e("加进去。")]),j,T,n("p",null,[e("使用"),M,e("文件排除掉已经在你插件依赖中的包。查看"),N,e("发布工具，查看更多"),n("a",E,[e("相关细节"),s(t)]),e("。")]),O,n("p",null,[s(a,{to:"/extensibility-reference/extension-manifest.html"},{default:o(()=>[e("插件配置清单")]),_:1}),e(" - VS Code的专有package.json文件参考")]),n("p",null,[s(a,{to:"/extensibility-reference/contribution-points.html"},{default:o(()=>[e("发布内容配置点")]),_:1}),e(" - VS Code属性表参考")]),n("p",null,[s(a,{to:"/extensibility-reference/activation-events.html"},{default:o(()=>[e("激活事件")]),_:1}),e(" - VS Code激活事件参考")])])}const R=c(r,[["render",W],["__file","principles-patterns.html.vue"]]);export{R as default};