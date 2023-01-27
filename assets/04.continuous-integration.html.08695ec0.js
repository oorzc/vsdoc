import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a as s,b as n,d as a,e as t,r}from"./app.ed9f300c.js";const c={},p=s("h1",{id:"持续集成",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#持续集成","aria-hidden":"true"},"#"),n(" 持续集成")],-1),u={href:"https://travis-ci.org/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/Microsoft/vscode-test",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"vscode-test",-1),m={href:"https://github.com/microsoft/vscode-test/tree/master/sample",target:"_blank",rel:"noopener noreferrer"},k={href:"https://dev.azure.com/vscode/vscode-test/_build?definitionId=15",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/microsoft/vscode-test/blob/master/sample/azure-pipelines.yml",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"azure-pipelines.yml",-1),h=s("h2",{id:"azure-pipelines",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#azure-pipelines","aria-hidden":"true"},"#"),n(" Azure Pipelines")],-1),_=s("hr",null,null,-1),f=s("p",null,[s("img",{src:"https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/working-with-extensions/images/continuous-integration/pipelines-logo.png",alt:"pipelines-logo"})],-1),y={href:"https://azure.microsoft.com/services/devops/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://azure.microsoft.com/services/devops/pipelines/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://azure.microsoft.com/services/devops/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://azure.microsoft.com/en-us/features/devops-projects/",target:"_blank",rel:"noopener noreferrer"},I=t(`<p>然后，把<code>azure-pipelines.yml</code>文件添加到插件仓库的根目录下，不同于 Linux 中的<code>xvfb</code>配置脚本，需要 VS Code 运行在 Linux 的无头 CI 机器上，我们的配置文件非常简单：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">trigger</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> master

<span class="token key atrule">strategy</span><span class="token punctuation">:</span>
  <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
    <span class="token key atrule">linux</span><span class="token punctuation">:</span>
      <span class="token key atrule">imageName</span><span class="token punctuation">:</span> <span class="token string">&quot;ubuntu-16.04&quot;</span>
    <span class="token key atrule">mac</span><span class="token punctuation">:</span>
      <span class="token key atrule">imageName</span><span class="token punctuation">:</span> <span class="token string">&quot;macos-10.13&quot;</span>
    <span class="token key atrule">windows</span><span class="token punctuation">:</span>
      <span class="token key atrule">imageName</span><span class="token punctuation">:</span> <span class="token string">&quot;vs2017-win2016&quot;</span>

<span class="token key atrule">pool</span><span class="token punctuation">:</span>
  <span class="token key atrule">vmImage</span><span class="token punctuation">:</span> $(imageName)

<span class="token key atrule">steps</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">task</span><span class="token punctuation">:</span> NodeTool@0
    <span class="token key atrule">inputs</span><span class="token punctuation">:</span>
      <span class="token key atrule">versionSpec</span><span class="token punctuation">:</span> <span class="token string">&quot;8.x&quot;</span>
    <span class="token key atrule">displayName</span><span class="token punctuation">:</span> <span class="token string">&quot;Install Node.js&quot;</span>

  <span class="token punctuation">-</span> <span class="token key atrule">bash</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      /usr/bin/Xvfb :99 -screen 0 1024x768x24 &gt; /dev/null 2&gt;&amp;1 &amp;
      echo &quot;&gt;&gt;&gt; Started xvfb&quot;</span>
    <span class="token key atrule">displayName</span><span class="token punctuation">:</span> Start xvfb
    <span class="token key atrule">condition</span><span class="token punctuation">:</span> and(succeeded()<span class="token punctuation">,</span> eq(variables<span class="token punctuation">[</span><span class="token string">&#39;Agent.OS&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> &#39;Linux&#39;))

  <span class="token punctuation">-</span> <span class="token key atrule">bash</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      echo &quot;&gt;&gt;&gt; Compile vscode-test&quot;
      yarn &amp;&amp; yarn compile
      echo &quot;&gt;&gt;&gt; Compiled vscode-test&quot;
      cd sample
      echo &quot;&gt;&gt;&gt; Run sample integration test&quot;
      yarn &amp;&amp; yarn compile &amp;&amp; yarn test</span>
    <span class="token key atrule">displayName</span><span class="token punctuation">:</span> Run Tests
    <span class="token key atrule">env</span><span class="token punctuation">:</span>
      <span class="token key atrule">DISPLAY</span><span class="token punctuation">:</span> <span class="token string">&quot;:99.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),N={href:"https://docs.microsoft.com/azure/devops/pipelines/get-started-yaml?view=vsts#get-your-first-build",target:"_blank",rel:"noopener noreferrer"},A=s("code",null,"azure-pipelines.yml",-1),C=s("p",null,[s("img",{src:"https://media.githubusercontent.com/media/Microsoft/vscode-docs/master/api/working-with-extensions/images/continuous-integration/pipelines.png",alt:"pipelines"})],-1),S={href:"https://docs.microsoft.com/azure/devops/pipelines/build/triggers",target:"_blank",rel:"noopener noreferrer"},w=s("h2",{id:"travis-ci",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#travis-ci","aria-hidden":"true"},"#"),n(" Travis CI")],-1),L=s("hr",null,null,-1),T={href:"https://github.com/microsoft/vscode-test",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/microsoft/vscode-test/blob/master/.travis.yml",target:"_blank",rel:"noopener noreferrer"},D=s("code",null,"xvfb",-1),V=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">language</span><span class="token punctuation">:</span> node_js
<span class="token key atrule">os</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> osx
  <span class="token punctuation">-</span> linux
<span class="token key atrule">node_js</span><span class="token punctuation">:</span> <span class="token number">8</span>

<span class="token key atrule">install</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">|</span><span class="token scalar string">
    if [ $TRAVIS_OS_NAME == &quot;linux&quot; ]; then
      export DISPLAY=&#39;:99.0&#39;
      /usr/bin/Xvfb :99 -screen 0 1024x768x24 &gt; /dev/null 2&gt;&amp;1 &amp;
    fi</span>
<span class="token key atrule">script</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">|</span><span class="token scalar string">
    echo &quot;&gt;&gt;&gt; Compile vscode-test&quot;
    yarn &amp;&amp; yarn compile
    echo &quot;&gt;&gt;&gt; Compiled vscode-test&quot;
    cd sample
    echo &quot;&gt;&gt;&gt; Run sample integration test&quot;
    yarn &amp;&amp; yarn compile &amp;&amp; yarn test</span>
<span class="token key atrule">cache</span><span class="token punctuation">:</span> yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function j(E,M){const e=r("ExternalLinkIcon");return o(),l("div",null,[p,s("p",null,[n("插件测试也可以用诸如"),s("a",u,[n("Travis CI"),a(e)]),n("自动运行测试。"),s("a",d,[v,a(e)]),n("库可以基于 CI 设置插件测试，而且里面还包含了一个 Azure Pipelines 的"),s("a",m,[n("示例插件"),a(e)]),n("。你可以先看看"),s("a",k,[n("构建管线"),a(e)]),n("是什么样子的，或者直接查看"),s("a",b,[g,n("file"),a(e)]),n("。")]),h,_,f,s("p",null,[n("你可以在"),s("a",y,[n("Azure DevOps"),a(e)]),n("上创建免费的项目，它为你提供了代码托管、看板、构建和测试基础设施等等。最重要的是，你可以获得"),s("a",x,[n("10 个免费的并行任务"),a(e)]),n("容量，用于你构建项目，不论是在 Windows, macOS 还是 Linux 上。")]),s("p",null,[n("首先，你需要创建一个免费的"),s("a",q,[n("Azure DevOps"),a(e)]),n("账号，然后给你的插件创建一个"),s("a",z,[n("Azure DevOps 项目"),a(e)]),n("。")]),I,s("p",null,[n("最后，在你的 DveOps 项目里"),s("a",N,[n("创建一个新的管线"),a(e)]),n("，然后指向"),A,n("文件，启动 build，然后……真香~")]),C,s("p",null,[n("你可以启用持续构建——每当有 pull requests 进入特定分支的时候自动进行构建。相关内容请查看"),s("a",S,[n("构建管线触发器"),a(e)]),n("。")]),w,L,s("p",null,[s("a",T,[n("vscode-test"),a(e)]),n("还包含了一份"),s("a",O,[n("Travis CI 构建文件"),a(e)]),n("，因为 Travis 上的环境变量定义和 Azure 所有不同，"),D,n("脚本也有些许不一样：")]),V])}const B=i(c,[["render",j],["__file","04.continuous-integration.html.vue"]]);export{B as default};
