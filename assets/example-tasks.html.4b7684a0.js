import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,a as s,b as n,d as e,e as c,r as i}from"./app.ed9f300c.js";const l={},r=s("h1",{id:"示例-任务",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#示例-任务","aria-hidden":"true"},"#"),n(" 示例-任务")],-1),u=s("code",null,"task.json",-1),d={href:"https://code.visualstudio.com/docs/editor/tasks",target:"_blank",rel:"noopener noreferrer"},k=s("h2",{id:"定义任务",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#定义任务","aria-hidden":"true"},"#"),n(" 定义任务")],-1),v=s("hr",null,null,-1),m=s("p",null,"想要定义一个系统级别的任务，插件需要通过properties定义任务，在下面叫做Rake的例子中，任务是这样定义的：",-1),b={href:"https://rubygems.org/gems/rake/",target:"_blank",rel:"noopener noreferrer"},h=c(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;taskDefinitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rake&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;task&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;task&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The Rake task to customize&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The Rake file that provides the task. Can be omitted.&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码里面，我们为<code>rake</code><em>任务集</em>配置了一个<strong>任务定义</strong>。任务定义有两个属性<code>task</code>和<code>file</code>，<code>task</code>是Rake任务的名字，file指向了包含任务的文件。<code>task</code>属性是必须的，<code>file</code>则为可选。如果省略了<code>file</code>属性，则会使用工作区根目录下名为rake的文件。</p><h2 id="任务供应器函数" tabindex="-1"><a class="header-anchor" href="#任务供应器函数" aria-hidden="true">#</a> 任务供应器函数</h2><hr><p>和语言供应器函数相同，任务供应器使插件支持代码补全，一个插件可以只注册一个任务供应器函数然后执行所有可用的任务集合。使用<code>vscode.tasks</code>命名空间达成这一目标：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vscode <span class="token keyword">from</span> <span class="token string">&#39;vscode&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> rakePromise<span class="token operator">:</span> Thenable<span class="token operator">&lt;</span>vscode<span class="token punctuation">.</span>Task<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> taskProvider <span class="token operator">=</span> vscode<span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">registerTaskProvider</span><span class="token punctuation">(</span><span class="token string">&#39;rake&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">provideTasks</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>rakePromise<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rakePromise <span class="token operator">=</span> <span class="token function">getRakeTasks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> rakePromise<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">resolveTask</span><span class="token punctuation">(</span>_task<span class="token operator">:</span> vscode<span class="token punctuation">.</span>Task<span class="token punctuation">)</span><span class="token operator">:</span> vscode<span class="token punctuation">.</span>Task <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前<code>resolveTask</code>只返回了<code>undefined</code>，而将来VS Code会通过这个方法优化任务的加载。</p><p><code>getRakeTasks</code>的实现做了下面的事情：</p><ul><li>使用<code>rake -AT -f Rakefile</code>命令列出rake文件中的所有rake任务</li><li>转换为stdio输出</li><li>对每个任务创建一个<code>vscode.task</code>实现</li></ul><p>因为一个rake任务初始化需要<code>package.json</code>中有对应的任务定义，VS Code会用TypeScript接口定义出结构，像这样：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RakeTaskDefinition</span> <span class="token keyword">extends</span> <span class="token class-name">vscode</span><span class="token punctuation">.</span>TaskDefinition <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * The task name
     */</span>
    task<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * The rake file containing the task
     */</span>
    file<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设我们的输出最终来自于一个叫<code>compile</code>的任务，那么对应的任务创建过程如下所示：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> task <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">vscode</span><span class="token punctuation">.</span><span class="token function">Task</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;rake&#39;</span><span class="token punctuation">,</span> task<span class="token operator">:</span> <span class="token string">&#39;compile&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;compile&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rake&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">vscode</span><span class="token punctuation">.</span><span class="token function">ShellExecution</span><span class="token punctuation">(</span><span class="token string">&#39;rake compile&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>每个输出任务都对应着上述过程，最后通过调用<code>getRakeTasks</code>会返回一个任务数组。</p><p><code>ShellExecution</code>会针对不同的系统在shell中执行<code>rake compile</code>命令（如：在Windows下会在PowerShell中执行，Ubuntu则是bash）。如果某个任务需要直接执行进程（不通过shell生成），则可以使用<code>vscode.ProcessExecution</code>。<code>ProcessExecution</code>的优势在于插件可以完全控制传入进程的参数，<code>ShellExecution</code>则会使用shell命令转义（比如：bash中的*展开）。如果<code>ShellExecution</code>是通过单个命令创建的，那么插件需要在命令内部确保引号和转义符的正确使用（比如，如何处理空格）。</p>`,15);function g(f,y){const a=i("ExternalLinkIcon");return o(),p("div",null,[r,s("p",null,[n("通常，在VS Code中，用户可以通过"),u,n("定义一个"),s("a",d,[n("任务"),e(a)]),n("。不过在软件开发中，VS Code会自动检测某些任务。本节介绍了插件应该怎样自动检测任务，为最终用户提供任务。")]),k,v,m,s("p",null,[n("?>**译者注：**rake是ruby实现的任务管理和自动构建工具，详细请参考"),s("a",b,[n("rake"),e(a)])]),h])}const x=t(l,[["render",g],["__file","example-tasks.html.vue"]]);export{x as default};