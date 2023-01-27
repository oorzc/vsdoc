import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as l,a as n,b as s,d as a,w as o,e as p,r as c}from"./app.ed9f300c.js";const d={},u=n("h1",{id:"vs-code中的源控制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vs-code中的源控制","aria-hidden":"true"},"#"),s(" VS Code中的源控制")],-1),k=n("hr",null,null,-1),m=n("p",null,[s("VS Code 允许插件创作者通过扩展API去定义"),n("em",null,"源控制管理"),s("特性（Source Control Management，SCM），VS Code整合了各式各样的SCM体系，而只给用户展现了一组小巧、强大的API接口，还是带用户界面的那种。")],-1),v=n("p",null,[n("img",{src:"https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensionAPI/images/api-scm/main.png",alt:"main.png"})],-1),g=n("p",null,"VS Code自带一个源控制器：Git，本篇能帮你在VS Code中加入你自己的SCM系统。",-1),h={href:"https://github.com/Microsoft/vscode-docs/blob/master/docs/extensionAPI/vscode-api.md#scm",target:"_blank",rel:"noopener noreferrer"},b=p(`<h2 id="源控制模型" tabindex="-1"><a class="header-anchor" href="#源控制模型" aria-hidden="true">#</a> 源控制模型</h2><hr><p><code>SourceControl</code>负责生产源控制模型的实体，它里面有<code>SourceControlResourceState</code>实例的<strong>资源状态</strong>，而资源状态又是<code>SourceControlResourceGroup</code>实例整理成<strong>组</strong>的。</p><p>通过<code>vscode.scm.createSourceControl</code>创建一个新的<em>源控制器</em>。</p><p>为了更好地理解这几种实体的交互，让我们拿Git来做例子，考虑下列<code>git status</code>输出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vsce master* → <span class="token function">git</span> status
On branch master
Your branch is up-to-date with <span class="token string">&#39;origin/master&#39;</span><span class="token builtin class-name">.</span>
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>

        modified:   README.md
        renamed:    src/api.ts -<span class="token operator">&gt;</span> src/test/api.ts

Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add/rm &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

        deleted:    .travis.yml
        modified:   README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个工作区里面发生了很多事，首先，<code>README.md</code>文件已经被修改了但还没有提交，然后立刻又被修改了。 其次，<code>src/api.ts</code>文件被移动到了<code>src/test/api.ts</code>，这个修改已经存备（staged）， 最后，<code>.travis.yml</code>文件被删除。</p><p>对于这个工作区而言，Git定义了两个资源组：<strong>工作中（Working tree）<strong>和</strong>已索引（Index）</strong>，对于单个组而言，每次<strong>文件修改</strong>就会产生一些资源状态：</p><ul><li><strong>已索引</strong> - 资源组 <ul><li>修改<code>README.md</code> - 资源状态</li><li>移动<code>src/api.ts</code>到<code>src/test/api.ts</code> - 资源状态</li></ul></li><li><strong>工作中</strong> - 资源组 <ul><li>删除<code>.travis.yml</code> - 资源状态</li><li>修改<code>README.md</code> - 资源状态</li></ul></li></ul><p>同一个<code>README.md</code>是怎么成为两组截然不同的资源状态呢？</p><p>下面揭秘Git是如何创建这个模型的：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createResourceUri</span><span class="token punctuation">(</span>relativePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> vscode<span class="token punctuation">.</span>Uri <span class="token punctuation">{</span>
  <span class="token keyword">const</span> absolutePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>vscode<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span>rootPath<span class="token punctuation">,</span> relativePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> vscode<span class="token punctuation">.</span>Uri<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span>absolutePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> gitSCM <span class="token operator">=</span> vscode<span class="token punctuation">.</span>scm<span class="token punctuation">.</span><span class="token function">createSourceControl</span><span class="token punctuation">(</span><span class="token string">&#39;git&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;Git&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> index <span class="token operator">=</span> gitSCM<span class="token punctuation">.</span><span class="token function">createResourceGroup</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;Index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
index<span class="token punctuation">.</span>resourceStates <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> resourceUri<span class="token operator">:</span> <span class="token function">createResourceUri</span><span class="token punctuation">(</span><span class="token string">&#39;README.md&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> resourceUri<span class="token operator">:</span> <span class="token function">createResourceUri</span><span class="token punctuation">(</span><span class="token string">&#39;src/test/api.ts&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> workingTree <span class="token operator">=</span> gitSCM<span class="token punctuation">.</span><span class="token function">createResourceGroup</span><span class="token punctuation">(</span><span class="token string">&#39;workingTree&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;Changes&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
workingTree<span class="token punctuation">.</span>resourceStates <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> resourceUri<span class="token operator">:</span> <span class="token function">createResourceUri</span><span class="token punctuation">(</span><span class="token string">&#39;.travis.yml&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> resourceUri<span class="token operator">:</span> <span class="token function">createResourceUri</span><span class="token punctuation">(</span><span class="token string">&#39;README.md&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源变动和最终产生的资源组会传递到源控制视图上。</p><h2 id="源控制视图" tabindex="-1"><a class="header-anchor" href="#源控制视图" aria-hidden="true">#</a> 源控制视图</h2><hr><p>当源变动时，VS Code会生成源控制视图。源状态可通过<code>SourceControlResourceDecorations</code>自定义：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SourceControlResourceState</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> decorations<span class="token operator">?</span><span class="token operator">:</span> SourceControlResourceDecorations<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述例子已经足以让源控制视图生成一个简单的列表，不过用户可能想要在不同的资源状态上进行不同的操作。比如，当用户点击资源状态时，会发生什么呢？资源状态提供了一个可选命令去处理这类场景：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SourceControlResourceState</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> command<span class="token operator">?</span><span class="token operator">:</span> Command<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="菜单" tabindex="-1"><a class="header-anchor" href="#菜单" aria-hidden="true">#</a> 菜单</h3><p>要想提供更加丰富的交互效果，我们提供了5个源控制菜单项供你使用。</p><p><code>scm/title</code>菜单在源控制视图的顶部右上方，菜单项水平排列在标题栏中，另外一些会在<code>...</code>下拉菜单中。<code>scm/resourceGroup/context</code>和<code>scm/resourceState/context</code>是类似的，你可以通过前者自定义资源组，后者则是定义资源状态。将菜单项放在<code>inline</code>组里，可以水平在视图中展示它们。而其他的菜单项可以通过鼠标右击的形式展示在菜单中。菜单中调用的命令会传入资源状态作为参数。注意SCM视图提供多选，因此命令函数可能一次性会接收一个或多个参数。</p><p>例如，Git支持往<code>scm/resourceState/context</code>菜单中添加<code>git.stage</code>命令和使用下列方法，提供多个文件的存备（staged）：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">stage</span><span class="token punctuation">(</span><span class="token operator">...</span>resourceStates<span class="token operator">:</span> SourceControlResourceState<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),f=n("code",null,"SourceControl",-1),_=n("code",null,"SourceControlResourceGroup",-1),y=n("code",null,"id",-1),C=n("code",null,"scmProvider",-1),x=n("code",null,"scmResourceGroup",-1),S=n("code",null,"when",-1),w={href:"https://code.visualstudio.com/docs/getstarted/keybindings#_when-clause-contexts",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"git.stage",-1),q=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;command&quot;: &quot;git.stage&quot;,
  &quot;when&quot;: &quot;scmProvider == git &amp;&amp; scmResourceGroup == merge&quot;,
  &quot;group&quot;: &quot;inline&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>scm/change/title</code>可以对<em>行内变动</em>配置标题栏的命令（contribute commands to the title bar of an inline change）。命令中的参数有文档的URI，变动数组，当前行内变动所在索引。例如下面是一个可以配置菜单的Git<code>stageChange</code>命令声明：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token function">stageChange</span><span class="token punctuation">(</span>uri<span class="token operator">:</span> Uri<span class="token punctuation">,</span> changes<span class="token operator">:</span> LineChange<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>scm/sourceControl</code>菜单根据环境出现在源控制实例的边上。</p><p><img src="https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensionAPI/images/api-scm/sourcecontrol-menu.png" alt=""></p><p>最后，<code>scm/change/title</code>菜单是和快速Diff功能相关联的，越新的文件越靠前，你可以针对特定的代码变动调用命令。</p><h3 id="scm-输入框" tabindex="-1"><a class="header-anchor" href="#scm-输入框" aria-hidden="true">#</a> SCM 输入框</h3><p>源控制输入框位于每个源控制视图的顶部，接收用户输入的信息。你可以获取（或设置）这个信息供后续使用。在Git中，比如说，这可以作为一个commit框，用户输入了提交信息后，触发<code>git commit</code>命令：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SourceControlInputBox</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SourceControl</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> inputBox<span class="token operator">:</span> SourceControlInputBox<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户可以通过<kbd>Ctrl+Enter</kbd>（Mac上是<kbd>Cmd+Enter</kbd>）接收任意信息，在<code>SourceControl</code>中的<code>acceptInputCommand</code>处理这类事件。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SourceControl</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> acceptInputCommand<span class="token operator">?</span><span class="token operator">:</span> Command<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速diff" tabindex="-1"><a class="header-anchor" href="#快速diff" aria-hidden="true">#</a> 快速Diff</h2><hr><p>VS Code支持显示快速Diff编辑器的高亮槽，点击这些槽会出现一个内部diff交互器，你可以在这里为上下文配置命令。</p><p><img src="https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensionAPI/images/api-scm/quickdiff.png" alt=""></p><p>这些高亮槽是VS Code自己计算出来的，你要做的就是根据给定的文件提供原始文件内容</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SourceControl</span> <span class="token punctuation">{</span>
  quickDiffProvider<span class="token operator">?</span><span class="token operator">:</span> QuickDiffProvider<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>QuickDiffProvider</code>，你的实现需要告诉VS Code——参数传入的给定资源URI所对应的原始资源URI。</p><h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步" aria-hidden="true">#</a> 下一步</h2><p>想要学习更多关于VS Code扩展性模型，请参考：</p>`,20),M={href:"https://code.visualstudio.com/docs/extensionAPI/vscode-api#_scm",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/Microsoft/vscode/tree/master/extensions/git",target:"_blank",rel:"noopener noreferrer"};function E(I,A){const e=c("ExternalLinkIcon"),t=c("RouterLink");return r(),l("div",null,[u,k,m,v,g,n("p",null,[s("如果你需要帮助，请查看"),n("a",h,[s("vscode命名空间API"),a(e)]),s("。")]),b,n("p",null,[s("创建它们的时候，"),f,s("和"),_,s("实例会需要你提供一个string类型的"),y,s("，这些值最终会在"),C,s("和"),x,s("以上下文键值的形式出现。在菜单项的"),S,s("语法中使用这些"),n("a",w,[s("上下文键值"),a(e)]),s("。看个Git如何通过"),R,s("命令显示菜单项的：")]),q,n("ul",null,[n("li",null,[n("a",M,[s("SCM API 参考"),a(e)]),s(" - 查看完整的SCM API文档")]),n("li",null,[n("a",P,[s("Git 插件"),a(e)]),s(" - 学习Git插件实现")]),n("li",null,[a(t,{to:"/extensibility-reference/overview.html"},{default:o(()=>[s("插件API概览")]),_:1}),s(" - 学习全部的VS Code扩展性模型")]),n("li",null,[a(t,{to:"/extensibility-reference/extension-manifest.html"},{default:o(()=>[s("插件配置清单")]),_:1}),s(" - VS Code package.json插件配置清单参考")]),n("li",null,[a(t,{to:"/extensibility-reference/contribution-points.html"},{default:o(()=>[s("发布内容配置点")]),_:1}),s(" - VS Code发布内容配置点参考")])])])}const V=i(d,[["render",E],["__file","api-scm.html.vue"]]);export{V as default};
