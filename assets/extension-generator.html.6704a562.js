import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as i,e as s}from"./app.ed9f300c.js";const d={},n=s(`<h1 id="插件生成器" tabindex="-1"><a class="header-anchor" href="#插件生成器" aria-hidden="true">#</a> 插件生成器</h1><h2 id="预先准备" tabindex="-1"><a class="header-anchor" href="#预先准备" aria-hidden="true">#</a> 预先准备</h2><p>你需要安装Node.js，并配置好<code>$PATH</code>。Node.js安装好之后通常会包含npm——Node.js的包管理器，也就是我们马上要用来安装插件生成器的东西。</p><h2 id="安装生成器" tabindex="-1"><a class="header-anchor" href="#安装生成器" aria-hidden="true">#</a> 安装生成器</h2><hr><p>在终端（windows环境下为cmd, powershell）输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> yo generator-code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="运行yo-code😎" tabindex="-1"><a class="header-anchor" href="#运行yo-code😎" aria-hidden="true">#</a> 运行Yo Code😎</h4><p>听起来好像有点啰嗦？我们马上就开始了，将下列命令输入到终端：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yo code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensions/images/yocode/yocode.png" alt="run yo code"></p><p>!&gt; 注意：yo code会根据最新的vscode版本生成发开目录，如果遇到运行失败的问题，请检查<code>package.json</code>中<code>engines.vscode</code>的版本号是否与您当前的vscode一致</p><h2 id="生成器选项" tabindex="-1"><a class="header-anchor" href="#生成器选项" aria-hidden="true">#</a> 生成器选项</h2><hr><blockquote><p>Yeoman生成器能帮你创建一个新插件的骨架，也可以基于已有的TetMate配置文件创建一个开箱即用的语言、主题或者片段。</p></blockquote><h4 id="新插件-typescript" tabindex="-1"><a class="header-anchor" href="#新插件-typescript" aria-hidden="true">#</a> 新插件（TypeScript）</h4><p>我们接下来要创建一个&quot;hello world&quot;项目作为本节示例，请：</p><ul><li>输入插件名称，在当前目录下生成同名文件夹</li><li>新建几个基础文件夹，source，test，output</li><li>模板生成器会创建<code>package.json</code>和一些基本文件</li><li>新建<code>launch.json</code>和<code>tasks.json</code>，以便到时候按F5能debugger代码</li><li>（可选）生成Git仓库</li></ul><p>创建好之后，用vscode打开这个文件夹，查看<code>vsc-extension-quickstart.md</code>，你就知道接下来要干什么了。</p><h4 id="新插件-javascript" tabindex="-1"><a class="header-anchor" href="#新插件-javascript" aria-hidden="true">#</a> 新插件（JavaScript）</h4><p>和上面的过程一样，不过是用JavaScript语言。</p><h4 id="新主题" tabindex="-1"><a class="header-anchor" href="#新主题" aria-hidden="true">#</a> 新主题</h4><p>基于已有的TextMate文件生成主题插件，或者直接来个全新的。</p><ul><li>推荐你使用已有的基础样式生成新的主题。</li><li>根据<code>.tmTheme</code>文件生成一个新主题。</li></ul><p>接下来：</p><ul><li>输入主题名称，同时会生成对应的色彩主题名称(light/dark)。</li><li>输入插件名称，创建同名的项目文件夹。</li></ul><p>同样，一旦你都做完了这些事情，去查看目录下的<code>vsc-extension-quickstart.md</code>吧。</p><h4 id="新的语法高亮" tabindex="-1"><a class="header-anchor" href="#新的语法高亮" aria-hidden="true">#</a> 新的语法高亮</h4><p>生成一个色彩高亮插件</p><ul><li>输入已有的TextMate文件（.tmLanguage，.plist，.json），文件会自动导入到新插件中。如果你需要用新的语法创建高亮，把名字留空就行了。</li><li>输入插件名称，你就能得到一个同名文件夹。</li></ul><h4 id="新的代码片段" tabindex="-1"><a class="header-anchor" href="#新的代码片段" aria-hidden="true">#</a> 新的代码片段</h4><ul><li>输入包含TextMate snippets (.tmSnippet) 或者 Sublime snippets (.sublime-snippet)的文件夹目录，这些文件待会会自动转为vscode代码片段。</li><li>选择需要激活的编程语言</li><li>输入插件名称，得到同名项目文件夹</li></ul><p>然后继续去看<code>vsc-extension-quickstart.md</code>咯</p><h4 id="新的插件包" tabindex="-1"><a class="header-anchor" href="#新的插件包" aria-hidden="true">#</a> 新的插件包</h4><p>用你喜欢的插件创建一个插件包</p><ul><li>输入已经安装的插件名称，加入到你的插件包里</li><li>输入插件名称，得到同名项目文件夹</li></ul><h2 id="我的插件目录在哪" tabindex="-1"><a class="header-anchor" href="#我的插件目录在哪" aria-hidden="true">#</a> 我的插件目录在哪？</h2><hr><p>每个操作系统的插件目录都不一样，你可能会用到的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Windows %USERPROFILE%<span class="token punctuation">\\</span>.vscode<span class="token punctuation">\\</span>extensions
macOS ~/.vscode/extensions
Linux ~/.vscode/extensions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你需要在每次vscode运行时加载插件，把你的项目复制到<code>.vscode/extensions</code>目录下。如：<code>~/.vscode/extensions/myextension</code></p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><hr><p><strong>问: 为什么<code>yo code</code>在我的windows 10上无法识别键盘方向键？</strong></p><p><img src="https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensions/images/yocode/yo-workaround.png" alt="yo-workaround"></p><p>答： 如果方向键没有任何反应，可以试试在管理员权限下运行终端。</p><h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步" aria-hidden="true">#</a> 下一步</h2><ul><li><a href="/extension-authoring/publish-extension">发布工具</a></li><li><a href="/extension-authoring/example-hello-world">Hello World</a></li><li><a href="/extension-authoring/samples">其他例子</a></li></ul>`,48),o=[n];function r(c,t){return a(),i("div",null,o)}const p=e(d,[["render",r],["__file","extension-generator.html.vue"]]);export{p as default};
