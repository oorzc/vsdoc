import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as l,a as s,b as n,d as a,w as u,e,r as o}from"./app.ed9f300c.js";const r={},d=s("h1",{id:"测试插件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#测试插件","aria-hidden":"true"},"#"),n(" 测试插件")],-1),k=s("code",null,"扩展开发环境",-1),v={href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://jasmine.github.io/",target:"_blank",rel:"noopener noreferrer"},h=s("h2",{id:"概述",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),n(" 概述")],-1),b=s("hr",null,null,-1),g=s("p",null,[s("em",null,[n("如果你原本使用"),s("code",null,"vscode"),n("库进行测试，可以参考"),s("a",{href:"#%E4%BB%8E-vscode-%E8%BF%81%E7%A7%BB"},[n("从"),s("code",null,"vscode"),n("迁移")]),n("部分")])],-1),f={href:"https://github.com/Microsoft/vscode-generator-code",target:"_blank",rel:"noopener noreferrer"},_=s("p",null,[n("使用"),s("code",null,"npm run test"),n("或者"),s("code",null,"yarn test"),n("启动集成测试，测试工程随后会：")],-1),q=s("li",null,"下载并解压最新的 VS Code 版本",-1),x=s("strong",null,"测试脚本",-1),y={href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/microsoft/vscode-extension-samples/tree/master/helloworld-test-sample",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/microsoft/vscode-extension-samples/blob/master/helloworld-test-sample/src/test/runTest.ts",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/microsoft/vscode-extension-samples/blob/master/helloworld-test-sample/src/test/suite/index.ts",target:"_blank",rel:"noopener noreferrer"},E=e(`<h2 id="测试入口" tabindex="-1"><a class="header-anchor" href="#测试入口" aria-hidden="true">#</a> 测试入口</h2><hr><p>VS Code 提供了 2 个 CLI 参数来运行插件测试——<code>--extensionDevelopmentPath</code>和<code>--extensionTestsPath</code>。</p><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># - Launches VS Code Extension Host</span>
<span class="token comment"># - Loads the extension at &lt;EXTENSION-ROOT-PATH&gt;</span>
<span class="token comment"># - Executes the test runner script at &lt;TEST-RUNNER-SCRIPT-PATH&gt;</span>
code <span class="token punctuation">\\</span>
<span class="token parameter variable">--extensionDevelopmentPath</span><span class="token operator">=</span><span class="token operator">&lt;</span>EXTENSION-ROOT-<span class="token environment constant">PATH</span><span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--extensionTestsPath</span><span class="token operator">=</span><span class="token operator">&lt;</span>TEST-RUNNER-SCRIPT-<span class="token environment constant">PATH</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),C=s("strong",null,"测试入口",-1),S={href:"https://github.com/microsoft/vscode-extension-samples/blob/master/helloworld-test-sample/src/test/runTest.ts",target:"_blank",rel:"noopener noreferrer"},V=s("code",null,"vscode-test",-1),A=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> runTests <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vscode-test&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// The folder containing the Extension Manifest package.json</span>
    <span class="token comment">// Passed to \`--extensionDevelopmentPath\`</span>
    <span class="token keyword">const</span> extensionDevelopmentPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../../&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// The path to the extension test runner script</span>
    <span class="token comment">// Passed to --extensionTestsPath</span>
    <span class="token keyword">const</span> extensionTestsPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./suite/index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Download VS Code, unzip it and run the integration test</span>
    <span class="token keyword">await</span> <span class="token function">runTests</span><span class="token punctuation">(</span><span class="token punctuation">{</span> extensionDevelopmentPath<span class="token punctuation">,</span> extensionTestsPath <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to run tests&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>vscode-test</code>还支持：</p><ul><li>启动 VS Code 时打开指定工作区</li><li>下载不同版本的 VS Code</li><li>使用其他 CLI 参数启动</li></ul>`,3),I={href:"https://github.com/microsoft/vscode-test",target:"_blank",rel:"noopener noreferrer"},j=s("h2",{id:"测试脚本",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#测试脚本","aria-hidden":"true"},"#"),n(" 测试脚本")],-1),R=s("hr",null,null,-1),F=s("code",null,"--extensionTestsPath",-1),D=s("strong",null,"测试脚本",-1),N={href:"https://github.com/microsoft/vscode-extension-samples/blob/master/helloworld-test-sample/src/test/suite/index.ts",target:"_blank",rel:"noopener noreferrer"},B=s("code",null,"helloworld-test-sample",-1),O={href:"https://github.com/microsoft/vscode-extension-samples/blob/master/helloworld-test-sample/src/test/suite/index.ts",target:"_blank",rel:"noopener noreferrer"},M={href:"https://mochajs.org/api/mocha",target:"_blank",rel:"noopener noreferrer"},$=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Mocha <span class="token keyword">from</span> <span class="token string">&quot;mocha&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> glob <span class="token keyword">from</span> <span class="token string">&quot;glob&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Create the mocha test</span>
  <span class="token keyword">const</span> mocha <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mocha</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    ui<span class="token operator">:</span> <span class="token string">&quot;tdd&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  mocha<span class="token punctuation">.</span><span class="token function">useColors</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> testsRoot <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;..&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&quot;**/**.test.js&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> cwd<span class="token operator">:</span> testsRoot <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> files<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">e</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// Add files to the test suite</span>
      files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>f <span class="token operator">=&gt;</span> mocha<span class="token punctuation">.</span><span class="token function">addFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>testsRoot<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// Run the mocha test</span>
        mocha<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>failures <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>failures <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">e</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>failures<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> tests failed.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">e</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),H=s("code",null,"*.test.js",-1),L={href:"https://github.com/microsoft/vscode-extension-samples/blob/master/helloworld-test-sample/src/test/suite/extension.test.ts",target:"_blank",rel:"noopener noreferrer"},U=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> assert <span class="token keyword">from</span> <span class="token string">&quot;assert&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> after <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;mocha&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// You can import and use all API from the &#39;vscode&#39; module</span>
<span class="token comment">// as well as import your extension to test it</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vscode <span class="token keyword">from</span> <span class="token string">&quot;vscode&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// import * as myExtension from &#39;../extension&#39;;</span>

<span class="token function">suite</span><span class="token punctuation">(</span><span class="token string">&quot;Extension Test Suite&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">showInformationMessage</span><span class="token punctuation">(</span><span class="token string">&quot;All tests done!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;Sample test&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    assert<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    assert<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调试测试文件" tabindex="-1"><a class="header-anchor" href="#调试测试文件" aria-hidden="true">#</a> 调试测试文件</h2><hr><p>调试测试文件和调试插件是一样的，我们看一个<code>launch.json</code>调试器配置的例子：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Extension Tests&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extensionHost&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtimeExecutable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${execPath}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;--extensionDevelopmentPath=\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;--extensionTestsPath=\${workspaceFolder}/out/test/suite/index&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outFiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\${workspaceFolder}/out/test/**/*.js&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),z=s("video",{loop:"",muted:"",playsinline:"",controls:""},[s("source",{src:"https://code.visualstudio.com/api/working-with-extensions/testing-extension/debug.mp4",type:"video/mp4"})],-1),X=e(`<h2 id="提示" tabindex="-1"><a class="header-anchor" href="#提示" aria-hidden="true">#</a> 提示</h2><hr><h4 id="使用-insider-版本开发插件" tabindex="-1"><a class="header-anchor" href="#使用-insider-版本开发插件" aria-hidden="true">#</a> 使用 Insider 版本开发插件</h4><p>由于 VS Code 的限制，如果你使用 VS Code 稳定版来运行集成测试，它会报错：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Running extension tests from the command line is currently only supported if no other instance of Code is running.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),J={href:"https://code.visualstudio.com/insiders/",target:"_blank",rel:"noopener noreferrer"},Y=e(`<h4 id="调试时禁用其他插件" tabindex="-1"><a class="header-anchor" href="#调试时禁用其他插件" aria-hidden="true">#</a> 调试时禁用其他插件</h4><p>当你在 VS Code 中对测试进行调试时，VS Code 使用的是全局安装的 VS Code 实例，它会加载所有插件。你可以在<code>launch.json</code>中添加<code>--disable-extensions</code>或者在<code>runTests</code>的<code>launchArgs</code>选项中添加该项以禁用其他插件。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Extension Tests&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extensionHost&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtimeExecutable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${execPath}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;--disable-extensions&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;--extensionDevelopmentPath=\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;--extensionTestsPath=\${workspaceFolder}/out/test/suite/index&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outFiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\${workspaceFolder}/out/test/**/*.js&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">await</span> <span class="token function">runTests</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  extensionDevelopmentPath<span class="token punctuation">,</span>
  extensionTestsPath<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * A list of launch arguments passed to VS Code executable, in addition to \`--extensionDevelopmentPath\`
   * and \`--extensionTestsPath\` which are provided by \`extensionDevelopmentPath\` and \`extensionTestsPath\`
   * options.
   *
   * If the first argument is a path to a file/folder/workspace, the launched VS Code instance
   * will open it.
   *
   * See \`code --help\` for possible arguments.
   */</span>
  launchArgs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;--disable-extensions&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用vscode-test自定义配置" tabindex="-1"><a class="header-anchor" href="#使用vscode-test自定义配置" aria-hidden="true">#</a> 使用<code>vscode-test</code>自定义配置</h4><p>你可能会需要自定义一些启动配置，比如启动测试前执行<code>code --install-extension</code>安装一些其他插件这样的场景。<code>vscode-test</code>提供粒度更细的 API 来操作这样的场景：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> cp <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;child_process&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  downloadAndUnzipVSCode<span class="token punctuation">,</span>
  resolveCliPathFromExecutablePath
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;vscode-test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> vscodeExecutablePath <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">downloadAndUnzipVSCode</span><span class="token punctuation">(</span><span class="token string">&quot;1.34.0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cliPath <span class="token operator">=</span> <span class="token function">resolveCliPathFromExecutablePath</span><span class="token punctuation">(</span>vscodeExecutablePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Use cp.spawn / cp.exec for custom setup</span>
cp<span class="token punctuation">.</span><span class="token function">spawnSync</span><span class="token punctuation">(</span>
  cliPath<span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&quot;--install-extension&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;EXTENSION-ID-OR-PATH-TO-VSIX&gt;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    encoding<span class="token operator">:</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">,</span>
    stdio<span class="token operator">:</span> <span class="token string">&quot;inherit&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Run the extension test</span>
<span class="token keyword">await</span> <span class="token function">runTests</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// Use the specified \`code\` executable</span>
  vscodeExecutablePath<span class="token punctuation">,</span>
  extensionPath<span class="token punctuation">,</span>
  testRunnerPath
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="从-vscode-迁移" tabindex="-1"><a class="header-anchor" href="#从-vscode-迁移" aria-hidden="true">#</a> 从 vscode 迁移</h4><p><code>vscode</code>中的集成测试模块已迁移到<code>vscode-test</code>，你可以按下面的步骤进行迁移：</p>`,9),G=e('<li><p>移除<code>vscode</code>依赖</p></li><li><p>添加<code>vscode-test</code>依赖</p></li><li><p>由于旧的<code>vscode</code>模块会下载 VS Code 类型定义，所以你需要</p><ul><li>手动安装<code>@types/vscode</code>，这个版本需和你<code>package.json</code>的<code>engine.vscode</code>版本一致，比如你的<code>engine.vscode</code>版本是<code>1.30</code>，那么就安装<code>@types/vscode@1.30</code></li><li>删除<code>package.json</code>中的<code>&quot;postinstall&quot;: &quot;node ./node_modules/vscode/bin/install&quot;</code></li></ul></li><li><p>添加一个<a href="#%E6%B5%8B%E8%AF%95%E5%85%A5%E5%8F%A3">测试入口</a>，你可以像我们的示例一样，用<code>runTest.ts</code>作为入口。</p></li><li><p>指定<code>package.json</code>中的<code>test</code>脚本，运行编译后的<code>runTest.ts</code>。</p></li>',5),K=s("a",{href:"#%E6%B5%8B%E8%AF%95%E8%84%9A%E6%9C%AC"},"测试脚本",-1),Q={href:"https://github.com/microsoft/vscode-extension-samples/blob/master/helloworld-test-sample/src/test/suite/index.ts",target:"_blank",rel:"noopener noreferrer"},W=s("code",null,"vscode",-1),Z=s("code",null,"mocha@4",-1),nn=s("code",null,"glob",-1),sn=s("code",null,"devDependency",-1),an=s("h2",{id:"下一步",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#下一步","aria-hidden":"true"},"#"),n(" 下一步")],-1);function tn(en,on){const t=o("ExternalLinkIcon"),p=o("RouterLink");return i(),l("div",null,[d,s("p",null,[n("VS Code 为你的插件提供了运行和调试的能力。测试会运行在一个特殊的 VS Code 实例中——"),k,n("，这个特殊实例拥有访问 VS Code API 的全部权限。本篇侧重于 VS Code 的集成测试，至于单元测试，你可以使用任何流行的测试框架，如"),s("a",v,[n("Mocha"),a(t)]),n("或者"),s("a",m,[n("Jasmine"),a(t)]),n("。")]),h,b,g,s("p",null,[n("如果你正在使用"),s("a",f,[n("yo code 生成器"),a(t)]),n("，那么生成的项目中应该已经包含了一些测试示例和指引。")]),_,s("ul",null,[q,s("li",null,[n("运行插件的"),x,n("中所规定的"),s("a",y,[n("Mocha"),a(t)]),n("测试")])]),s("p",null,[n("你可以在"),s("a",w,[n("helloworld-test-sample"),a(t)]),n("中找到本篇示例，本篇剩余部分将解释例子中的如下部分：")]),s("ul",null,[s("li",null,[n("测试入口（"),s("a",P,[n("src/test/runTest.ts"),a(t)]),n("）")]),s("li",null,[n("测试脚本("),s("a",T,[n("src/test/suite/index.ts"),a(t)]),n(")")])]),E,s("p",null,[C,n("（"),s("a",S,[n("src/test/runTest.ts"),a(t)]),n("）使用了"),V,n("API，简化了下载、解压、启动 VS Code 的测试流程：")]),A,s("p",null,[n("你可以在"),s("a",I,[n("microsoft/vscode-test"),a(t)]),n("中找到更多用法。")]),j,R,s("p",null,[n("当你运行插件的集成测试时，"),F,n("会指向"),D,n("("),s("a",N,[n("src/test/suite/index.ts"),a(t)]),n(")，然后这个脚本会进一步运行测试套件。下面是"),B,n("中的"),s("a",O,[n("测试脚本"),a(t)]),n("，它使用了 Mocha 运行测试套件。你可以把这个文件视为测试的起点，你可以用"),s("a",M,[n("Mocha 的 API"),a(t)]),n("自定义启动时的配置，你也可以用其他任意喜欢的测试框架替代 Mocha。")]),$,s("p",null,[n("所有测试脚本和"),H,n("文件都有访问 VS Code API 的权限。 看看这个例子("),s("a",L,[n("src/test/suite/extension.test.ts"),a(t)]),n(")")]),U,z,X,s("p",null,[n("所以推荐你使用"),s("a",J,[n("VS Code Insiders"),a(t)]),n("测试插件。")]),Y,s("ul",null,[G,s("li",null,[s("p",null,[n("添加一个"),K,n("，你可以用"),s("a",Q,[n("sample test runner script"),a(t)]),n("作为入口。注意"),W,n("过去依赖"),Z,n("和"),nn,n("，现在你需要自己安装到"),sn,n("里去。")])])]),an,s("ul",null,[s("li",null,[a(p,{to:"/working-with-extensions/continuous-integration.html"},{default:u(()=>[n("持续集成")]),_:1}),n("：将你的插件运行在持续集成服务中，比如 Azure Devops。")])])])}const ln=c(r,[["render",tn],["__file","01.testing-extension.html.vue"]]);export{ln as default};
