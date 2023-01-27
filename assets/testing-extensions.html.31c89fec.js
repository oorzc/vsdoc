import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as l,a as e,b as n,d as s,w as o,e as i,r as c}from"./app.ed9f300c.js";const p={},u=e("h1",{id:"测试你的插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#测试你的插件","aria-hidden":"true"},"#"),n(" 测试你的插件")],-1),h=e("code",null,"扩展开发环境",-1),v={href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://jasmine.github.io/",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"yo-code测试脚手架",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yo-code测试脚手架","aria-hidden":"true"},"#"),n(" Yo Code测试脚手架")],-1),k=e("hr",null,null,-1),_=i('<p>!&gt; **注意：**本篇假设你已经创建了一个Typescript插件（或Javascript插件），不然先参考<a href="extension-authoring/extension-generator">基础部分</a></p><p>打开一个插件项目目录，打开<strong>调试</strong>侧边栏选择<code>Extension Tests</code>配置。</p><p><img src="https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensions/images/testing-extensions/launch-tests.png" alt="launch-tests"></p><p>选中配置之后，点击绿色的小角标，启动调试。VS Code会在<code>扩展开发环境</code>实例中加载插件，然后运行调试。测试的输出会进入<em>调试控制台</em>：</p><p><img src="https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensions/images/testing-extensions/test-output.png" alt="test-output"></p>',5),g={href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"},x=i(`<p>插件项目文件夹中的附带了<code>src/test</code>，其中有一个<code>index.ts</code>文件，定义了Mocha测试运行器的配置，<code>extension.test.ts</code>中包含着测试示例<code>Something 1</code>。通常来说你可以不管<code>index.ts</code>，不过你也可以调整Mocha的配置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── src
│   └── test
│       ├── extension.test.ts
│       └── index.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在<code>test</code>目录下创建更多的<code>test.ts</code>文件，它们会被自动构建（到<code>out/test</code>）然后运行。测试运行器只会匹配<code>*.test.ts</code>模式的文件。</p><h2 id="加载测试配置" tabindex="-1"><a class="header-anchor" href="#加载测试配置" aria-hidden="true">#</a> 加载测试配置</h2><hr><p><code>Extension Tests</code>的配置文件在项目的<code>.vscode\\launch.json</code>的文件中。就像<code>Extension</code>配置一样，通过<code>--extensionTestsPath</code>参数，指定编译的测试文件位置（假设是Typescript项目）。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Extension Tests&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extensionHost&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;runtimeExecutable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${execPath}&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;--extensionDevelopmentPath=\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;--extensionTestsPath=\${workspaceFolder}/out/test&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outFiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;\${workspaceFolder}/out/test/**/*.js&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将参数传递到扩展开发环境中" tabindex="-1"><a class="header-anchor" href="#将参数传递到扩展开发环境中" aria-hidden="true">#</a> 将参数传递到扩展开发环境中</h2><hr><p>在加载配置中添加参数列表，然后测试示例就能在你指定的目录或文件中启动测试了。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;file or folder name&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;--extensionDevelopmentPath=\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;--extensionTestsPath=\${workspaceFolder}/out/test&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用这个方式，你的测试就可以运行在可预测的文件结构中运行了。</p><h2 id="从项目中排除测试文件" tabindex="-1"><a class="header-anchor" href="#从项目中排除测试文件" aria-hidden="true">#</a> 从项目中排除测试文件</h2><hr>`,14),f=e("em",null,"插件包",-1),q={href:"https://github.com/Microsoft/vscode-docs/blob/master/docs/extensions/publish-extension.md#advance-usage",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/Microsoft/vscode-docs/blob/master/docs/extensions/publish-extension.md",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"yo code",-1),S=e("code",null,"test",-1),E=e("code",null,"out/test",-1),T=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>out/test/**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用travis-ci自动测试" tabindex="-1"><a class="header-anchor" href="#使用travis-ci自动测试" aria-hidden="true">#</a> 使用Travis CI自动测试</h2><hr>`,3),V={href:"https://travis-ci.org/",target:"_blank",rel:"noopener noreferrer"},w=i(`<p>为了启动自动插件测试，<code>vscode</code>包需要提供一个可以运行下列任务的测试命令：</p><ul><li>下载和解压VS Code</li><li>在VS Code内加载插件测试任务</li><li>将测试结果输出到控制台中，或在异常中退出</li></ul><p>为了完成这项命令，打开你的<code>package.json</code>然后将下列代码添加到<code>scripts</code>中：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./node_modules/vscode/bin/test&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以在顶层配置一个<code>.travis.yml</code>文件，就可以轻松地启用Travis CI了：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">sudo</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">os</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> osx
  <span class="token punctuation">-</span> linux

<span class="token key atrule">before_install</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> if <span class="token punctuation">[</span> $TRAVIS_OS_NAME == &quot;linux&quot; <span class="token punctuation">]</span>; then
      export CXX=&quot;g++<span class="token punctuation">-</span>4.9&quot; CC=&quot;gcc<span class="token punctuation">-</span>4.9&quot; DISPLAY=<span class="token punctuation">:</span>99.0;
      sh <span class="token punctuation">-</span>e /etc/init.d/xvfb start;
      sleep 3;
    fi

<span class="token key atrule">install</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> npm install
  <span class="token punctuation">-</span> npm run vscode<span class="token punctuation">:</span>prepublish

<span class="token key atrule">script</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> npm test <span class="token punctuation">-</span><span class="token punctuation">-</span>silent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述脚本可以运行在Linux和macOS上，值得注意的一点是为了在Linux上运行测试，你需要配置一个<code>before_install</code>告诉Linux在构建中启动VS Code。</p><p>下面是一些用于测试运行器的可选的环境变量：</p><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>CODE_VERSION</td><td>运行测试的VS Code版本（如：0.10.10）</td></tr><tr><td>CODE_DOWNLOAD_URL</td><td>下载VS Code的完整URL</td></tr><tr><td>CODE_TESTS_PATH</td><td>执行测试的位置（默认是process.cwd()/out/test or process.cwd()/test）</td></tr><tr><td>CODE_EXTENSIONS_PATH</td><td>加载插件的位置（默认是process.cwd()）</td></tr><tr><td>CODE_TESTS_WORKSPACE</td><td>test实例打开的工作区位置（默认是CODE_TESTS_PATH）</td></tr></tbody></table><h2 id="在windows中使用appveyor测试" tabindex="-1"><a class="header-anchor" href="#在windows中使用appveyor测试" aria-hidden="true">#</a> 在Windows中使用AppVeyor测试</h2><hr>`,11),j={href:"https://www.appveyor.com/",target:"_blank",rel:"noopener noreferrer"},P=e("h2",{id:"下一步",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下一步","aria-hidden":"true"},"#"),n(" 下一步")],-1),A={href:"https://github.com/Microsoft/vscode-docs/blob/master/docs/extensions/publish-extension.md",target:"_blank",rel:"noopener noreferrer"};function I(O,D){const t=c("ExternalLinkIcon"),a=c("RouterLink");return r(),l("div",null,[u,e("p",null,[n("VS Code可以运行和调试支持VS Code API的插件。这些测试会运行在VS Code的特殊实例"),h,n("中，这个环境有权访问全部的API。我们将这样的测试称为集成测试，因为它远远超越了单独运行在VS Code中的单元测试。本篇侧重于VS Code的集成测试，至于单元测试，你可以使用任何流行的测试框架，如"),e("a",v,[n("Mocha"),s(t)]),n("或者"),e("a",m,[n("Jasmine"),s(t)]),n("。")]),b,k,e("p",null,[s(a,{to:"/extension-authoring/extension-generator.html"},{default:o(()=>[n("yo code 生成器")]),_:1}),n("基础插件项目包含了一些示例测试和必要的基础设施。")]),_,e("p",null,[n("生成的测试使用了"),e("a",g,[n("Mocha 测试框架"),s(t)]),n("的测试运行器和库。")]),x,e("p",null,[n("当你想要分享插件的时候，你可能就不需要测试文件出现在"),f,n("里了。"),e("a",q,[n(".vscodeignore"),s(t)]),n("文件可以让你在使用"),e("a",y,[n("vsce构建工具"),s(t)]),n("的时候排除测试文件。默认情况下，"),C,n("生成的项目会排除"),S,n("和"),E,n("文件夹。")]),T,e("p",null,[n("你也可以用诸如"),e("a",V,[n("Travis CI"),s(t)]),n("自动构建机器来自动运行测试。")]),w,e("p",null,[n("你也可以在Windows中用"),e("a",j,[n("AppVeyor"),s(t)]),n("进行测试")]),P,e("ul",null,[e("li",null,[s(a,{to:"/extension-authoring/developing-extensions.html"},{default:o(()=>[n("发开插件")]),_:1}),n(" - 学习更多调试插件的内容。")]),e("li",null,[e("a",A,[n("vsce"),s(t)]),n(" - 使用VSCE命令行工具发布插件。")]),e("li",null,[s(a,{to:"/extensibility-reference/extension-manifest.html"},{default:o(()=>[n("插件配置清单")]),_:1}),n(" - VS Code插件配置清单参阅。")]),e("li",null,[s(a,{to:"/extensibility-reference/vscode-api.html"},{default:o(()=>[n("扩展API")]),_:1}),n(" - 学习更多VS Code扩展性API。")])])])}const N=d(p,[["render",I],["__file","testing-extensions.html.vue"]]);export{N as default};
