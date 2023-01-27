import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.ed9f300c.js";const t={},p=e(`<h1 id="声明文件" tabindex="-1"><a class="header-anchor" href="#声明文件" aria-hidden="true">#</a> 声明文件</h1><p>当你在使用VS Code编写TypeScript文件时，你不太可能在每个文件上都标明<code>interface</code>字样的接口，一旦某个文件的方法或者变量比较多，你的代码可能就会被非常多的类型注解占据，在大型项目或者是你生成的库文件中为了保持代码的整洁，你就可能需要<strong>声明文件</strong>的帮助。</p><h2 id="创建一个声明文件" tabindex="-1"><a class="header-anchor" href="#创建一个声明文件" aria-hidden="true">#</a> 创建一个声明文件</h2><hr><p>声明文件以<code>.d.ts</code>结尾，与TypeScript文件<code>.ts</code>稍有区别。当你的项目目录中出现了<code>.d.ts</code>结尾的文件时，所有与之关联的规则都会自动应用。声明文件支持我们前面介绍的各类语法，但是你得在语法前面加上<code>declare</code>。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><hr><h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h3><p><strong>文档</strong></p><blockquote><p>全局变量foo包含了存在组件总数。</p></blockquote><p><strong>代码</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Half the number of widgets is &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>foo <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>声明</strong></p><p>使用declare var声明变量。 如果变量是只读的，那么可以使用 declare const。 你还可以使用 declare let如果变量拥有块级作用域。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 组件总数 */</span>
<span class="token keyword">declare</span> <span class="token keyword">var</span> foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局函数" tabindex="-1"><a class="header-anchor" href="#全局函数" aria-hidden="true">#</a> 全局函数</h3><p><strong>文档</strong></p><blockquote><p>用一个字符串参数调用greet函数向用户显示一条欢迎信息。</p></blockquote><p><strong>代码</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&quot;hello, world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>声明</strong></p><p>使用declare function声明函数。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>greeting<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="带属性的对象" tabindex="-1"><a class="header-anchor" href="#带属性的对象" aria-hidden="true">#</a> 带属性的对象</h3><p><strong>文档</strong></p><blockquote><p>全局变量myLib包含一个makeGreeting函数， 还有一个属性 numberOfGreetings指示目前为止欢迎数量。</p></blockquote><p><strong>代码</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> result <span class="token operator">=</span> myLib<span class="token punctuation">.</span><span class="token function">makeGreeting</span><span class="token punctuation">(</span><span class="token string">&quot;hello, world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;The computed greeting is:&quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> count <span class="token operator">=</span> myLib<span class="token punctuation">.</span>numberOfGreetings<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>声明</strong></p><p>使用declare namespace描述用点表示法访问的类型或值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">namespace</span> myLib <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">makeGreeting</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> numberOfGreetings<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数重载" tabindex="-1"><a class="header-anchor" href="#函数重载" aria-hidden="true">#</a> 函数重载</h3><p><strong>文档</strong></p><p>getWidget函数接收一个数字，返回一个组件，或接收一个字符串并返回一个组件数组。</p><p><strong>代码</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">:</span> Widget <span class="token operator">=</span> <span class="token function">getWidget</span><span class="token punctuation">(</span><span class="token number">43</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> arr<span class="token operator">:</span> Widget<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getWidget</span><span class="token punctuation">(</span><span class="token string">&quot;all of them&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>声明</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">getWidget</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> Widget<span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">getWidget</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Widget<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可重用类型-接口" tabindex="-1"><a class="header-anchor" href="#可重用类型-接口" aria-hidden="true">#</a> 可重用类型（接口）</h3><p><strong>文档</strong></p><blockquote><p>当指定一个欢迎词时，你必须传入一个GreetingSettings对象。 这个对象具有以下几个属性：</p><p>1- greeting：必需的字符串</p><p>2- duration: 可选的时长（毫秒表示）</p><p>3- color: 可选字符串，比如‘#ff00ff’</p></blockquote><p><strong>代码</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  greeting<span class="token operator">:</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span>
  duration<span class="token operator">:</span> <span class="token number">4000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>声明</strong></p><p>使用interface定义一个带有属性的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GreetingSettings</span> <span class="token punctuation">{</span>
  greeting<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  duration<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>setting<span class="token operator">:</span> GreetingSettings<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可重用类型-类型别名" tabindex="-1"><a class="header-anchor" href="#可重用类型-类型别名" aria-hidden="true">#</a> 可重用类型（类型别名）</h3><p><strong>文档</strong></p><blockquote><p>在任何需要欢迎词的地方，你可以提供一个string，一个返回string的函数或一个Greeter实例。</p></blockquote><p><strong>代码</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getGreeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;howdy&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">MyGreeter</span> <span class="token keyword">extends</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">greet</span><span class="token punctuation">(</span>getGreeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">greet</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyGreeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>声明</strong></p><p>你可以使用类型别名来定义类型的短名：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">GreetingLike</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">|</span> MyGreeter<span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>g<span class="token operator">:</span> GreetingLike<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组织类型" tabindex="-1"><a class="header-anchor" href="#组织类型" aria-hidden="true">#</a> 组织类型</h3><p><strong>文档</strong></p><blockquote><p>greeter对象能够记录到文件或显示一个警告。 你可以为 .log(...)提供LogOptions和为.alert(...)提供选项。</p></blockquote><p><strong>代码</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greeter</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> verbose<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span> modal<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&quot;Current Greeting&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>声明</strong></p><p>使用命名空间组织类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">namespace</span> GreetingLib <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">LogOptions</span> <span class="token punctuation">{</span>
        verbose<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">interface</span> <span class="token class-name">AlertOptions</span> <span class="token punctuation">{</span>
        modal<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
        title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以在一个声明中创建嵌套的命名空间：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">namespace</span> GreetingLib<span class="token punctuation">.</span>Options <span class="token punctuation">{</span>
    <span class="token comment">// Refer to via GreetingLib.Options.Log</span>
    <span class="token keyword">interface</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span>
        verbose<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">interface</span> <span class="token class-name">Alert</span> <span class="token punctuation">{</span>
        modal<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
        title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h3><p><strong>文档</strong></p><blockquote><p>你可以通过实例化Greeter对象来创建欢迎词，或者继承Greeter对象来自定义欢迎词。</p></blockquote><p><strong>代码</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> myGreeter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greeter</span><span class="token punctuation">(</span><span class="token string">&quot;hello, world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myGreeter<span class="token punctuation">.</span>greeting <span class="token operator">=</span> <span class="token string">&quot;howdy&quot;</span><span class="token punctuation">;</span>
myGreeter<span class="token punctuation">.</span><span class="token function">showGreeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">SpecialGreeter</span> <span class="token keyword">extends</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&quot;Very special greetings&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>声明</strong></p><p>使用declare class描述一个类或像类一样的对象。 类可以有属性和方法，就和构造函数一样。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>greeting<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    greeting<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token function">showGreeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,72),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","06.declaration-files.html.vue"]]);export{d as default};