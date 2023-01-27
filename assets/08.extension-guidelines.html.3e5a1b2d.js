import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as n,a as e,b as i,d as a,e as l,r as o}from"./app.ed9f300c.js";const p={},c=l('<h1 id="插件开发准则" tabindex="-1"><a class="header-anchor" href="#插件开发准则" aria-hidden="true">#</a> 插件开发准则</h1><h2 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h2><p>VS Code UI 包含了两类元素：容器和容器项。容器是指视图的顶层层级，它包括：</p><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/architecture-groups.png" alt="Overview of Visual Studio Code containers elements"></p><ol><li>活动栏(<a href="/references/extension-guidelines#%E8%A7%86%E5%9B%BE%E5%AE%B9%E5%99%A8">Activiti Bar</a>)</li><li>侧边栏(Sidebar)</li><li>编辑器(Editor)</li><li>面板(Panel)</li><li>状态栏(Status Bar)</li></ol><p>容器项则在容器的内部，他们的种类就很丰富了：</p><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/architecture-sections.png" alt="Overview of Visual Studio Code item elements"></p><ol><li>视图容器(View Container)</li><li>视图(<a href="/references/extension-guidelines#%E8%A7%86%E5%9B%BE">View</a>)</li><li>视图工具区(View Toolbar)</li><li>侧边栏工具区(Sidebar Toolbar)</li><li>编辑器工具区(Editor Toolbar)</li><li>面板工具区(Pannel Toolbar)</li><li>状态栏项(<a href="/references/extension-guidelines#%E7%8A%B6%E6%80%81%E6%A0%8F">Status Bar Item</a>)</li></ol><h2 id="通知框" tabindex="-1"><a class="header-anchor" href="#通知框" aria-hidden="true">#</a> 通知框</h2><p><a href="/extension-capabilities/common-capabilities#display-notifications">通知框</a> 会从 VS Code 右下角弹出，它可以展示一些简要的信息。你能够设置的通知类型有三种：</p>',10),d={href:"https://code.visualstudio.com/api/references/vscode-api#window.showInformationMessage",target:"_blank",rel:"noopener noreferrer"},u={href:"https://code.visualstudio.com/api/references/vscode-api#window.showWarningMessage",target:"_blank",rel:"noopener noreferrer"},h={href:"https://code.visualstudio.com/api/references/vscode-api#window.showErrorMessage",target:"_blank",rel:"noopener noreferrer"},m=l('<p>不要过多地发送通知，以免分散用户的注意力。</p><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/notification-info.png" alt="Information notification"></p><p><em>这条通知是用户<strong>更新版本</strong>后弹出的，注意这个通知中仅仅展示了信息不含任何操作。</em></p><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/notification-warning.png" alt="Warning notification"></p><p><em>这个例子中带有一个黄色的高亮警告，附带 3 个按钮——它要求用户进行介入处理。</em></p><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/notification-error.png" alt="Error notification"></p><p><em>这个例子是无操作的错误通知。</em></p><p>✔建议</p><ul><li>发送通知的时候不要过分吸引用户的注意力</li><li>为每个通知添加 <strong>不要再提示</strong> 按钮</li><li>短时间内只提示一次</li></ul><p>❌ 不要</p><ul><li>发送重复通知</li><li>用于促销广告</li><li>插件首次安装后用户收集用户反馈</li><li>没有必要的操作还硬加按钮</li></ul><h3 id="进度通知" tabindex="-1"><a class="header-anchor" href="#进度通知" aria-hidden="true">#</a> 进度通知</h3><p>当你需要展示一个不知何时才能完成的任务进度时（比如：初始化环境），你可以使用进度通知。这种类型的通知应该作为当前上下文（在视图或者编辑器内）处理进度通知类型的最后手段。</p><p>✔建议</p><ul><li>提供一个查看详情的链接（比如进度日志）</li><li>处理过程中给出信息（比如：初始化、构建，等等）</li><li>提供取消操作（如果可用的话）</li><li>如果有超时场景，提供倒计时</li></ul><p>❌ 不要</p><ul><li>不销毁进度通知</li></ul><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/notification-progress.png" alt="Progress notification"></p><p><em>这个例子演示了远程连接初始化时的进度通知，它同时也提供了输出日志（details）</em></p><h2 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h2><p><a href="/references/contribution-points#contributesviews">视图</a>是内容的容器，它们会出现在注入侧边栏或者面板这样的地方。视图可以包含树视图或者自定义视图，这些视图可以包含视图操作。视图可被用户调整位置，比如放到其他视图、活动栏和面板中。请控制你的视图数量以便其他插件的视图还有空间展示。</p><p>✔建议</p><ul><li>如果可以的话，使用现有的图标</li><li>为语言文件使用文件图标</li><li>用树视图展示数据</li><li>为每个视图提供活动栏图标</li><li>控制视图数量最小化</li><li>控制名称长度最小化</li><li>克制地使用自定义 webview 视图</li></ul><p>❌ 不要</p><ul><li>对已有功能重新造轮子</li><li>使用树视图项作为唯一的操作入口（如，搜索栏）</li><li>非必要的情况下也使用自定义 webview</li><li>在编辑器中使用视图容器装载 webview</li></ul><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/views-example.png" alt="Views example"></p><p><em>这个例子使用了树视图展示一组测试的测试状态。每种测试结果都有其唯一图标类型与之对应。</em></p><h3 id="视图位置" tabindex="-1"><a class="header-anchor" href="#视图位置" aria-hidden="true">#</a> 视图位置</h3><p>视图可被放在<a href="/references/contribution-points#contributesviews">现有的视图容器</a>中，比如文件管理器、源管理器(SCM)和调试视图容器中。你也可以在活动栏中添加自定义视图容器，然后再往里添加视图。另外，视图可被添加到任何面板或者他们自己所属的自定义视图容器中。</p><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/views-locations.png" alt="View locations"></p><h3 id="视图容器" tabindex="-1"><a class="header-anchor" href="#视图容器" aria-hidden="true">#</a> 视图容器</h3><p><a href="/references/contribution-points#contributesviewsContainers">视图容器</a>是活动栏的一部分，每个容器都有其独有的图标。</p><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/view-container.png" alt="View Container"></p><p>这个例子用了一个边框图标来展示自定义视图容器。</p><h3 id="视图中的进度条" tabindex="-1"><a class="header-anchor" href="#视图中的进度条" aria-hidden="true">#</a> 视图中的进度条</h3>',35),f={href:"https://code.visualstudio.com/api/references/vscode-api#ProgressLocation",target:"_blank",rel:"noopener noreferrer"},g=l('<h3 id="欢迎视图" tabindex="-1"><a class="header-anchor" href="#欢迎视图" aria-hidden="true">#</a> 欢迎视图</h3><p>当视图没有任何内容时，你可以<a href="/references/contribution-points#contributesviewsWelcome">添加一些内容来引导用户</a>如何使用你的插件。欢迎视图支持链接和图标。</p><p>✔建议</p><ul><li>仅在必要时使用欢迎视图</li><li>如有需要可使用链接而不是按钮</li><li>按钮仅用于基础性的操作</li><li>描述清楚链接指向</li><li>控制内容的长度</li><li>控制欢迎视图的数量</li><li>控制视图中的按钮数量</li></ul><p>❌ 不要</p><ul><li>非必要的场景中也使用按钮</li><li>将欢迎视图当成销售页面</li><li>每个链接的标题都叫&quot;查看更多&quot;</li></ul><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/welcome-views.png" alt="Welcome Views"></p><p>这个例子使用了一个基础按钮，其他视图则包含了期待用户知晓的具体文档链接。</p><h2 id="webviews" tabindex="-1"><a class="header-anchor" href="#webviews" aria-hidden="true">#</a> Webviews</h2><p>如果你需要展示的自定义功能超出了VS Code API 的能力，那么你可以使用完全可定制的 <a href="/extension-guides/webview">webview</a>。再次提示开发者：仅在必要时使用 webview。</p><p>✔建议</p>',11),b=e("li",null,"仅在绝对必要时使用 webview",-1),w=e("li",null,"在合适的场景中启动你的插件",-1),v=e("li",null,"为激活窗口打开 webview",-1),_={href:"https://github.com/microsoft/vscode-extension-samples/blob/main/webview-view-sample/media/main.css",target:"_blank",rel:"noopener noreferrer"},x=e("a",{href:"/references/theme-color"},"color tokens",-1),E={href:"https://code.visualstudio.com/docs/editor/accessibility",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,"在视图的工具区使用命令操作",-1),S=l('<p>❌ 不要</p><ul><li>用于广告宣传（包括升级、捐助等等）</li><li>作为插件的向导页面</li><li>在所有窗口中打开</li><li>插件升级后打开（请使用通知）</li><li>添加和编辑器或者工作区无关的功能</li><li>重复发明轮子（比如：欢迎页、设置、配置等等）</li></ul><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3><p><strong>浏览器预览</strong> 这个插件在编辑器旁边打开了一个浏览器效果预览 <img src="https://code.visualstudio.com/assets/api/references/guidelines/webview-browser.png" alt="Weview Sample - Browser"></p><p><strong>Pull Request</strong> 这个插件为自定义树视图中的工作区仓库展示了一个 Pull Request 页面，它用 webview 显示了 PR 的详细信息。</p><p><strong>初次使用培训</strong> 这个插件打开了一个快速启动页面，它包含了有用的操作、链接和更多信息。这个 Webview 仅仅在用户首次打开特定文件时展示，帮助用户检查是否遵循了特定步骤（比如安装或创建一个文件时）。</p><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/webview-onboarding.png" alt="Webview Sample - Onboarding"></p><h3 id="webview-视图" tabindex="-1"><a class="header-anchor" href="#webview-视图" aria-hidden="true">#</a> webview 视图</h3>',8),V={href:"https://code.visualstudio.com/api/references/vscode-api#WebviewView",target:"_blank",rel:"noopener noreferrer"},B=l('<p><img src="https://code.visualstudio.com/assets/api/references/guidelines/webview-view.png" alt="Webview View"></p><p>这个 webview 视图内容展示了创建一个 PR 所需的下拉菜单、输入框和按钮。</p><h2 id="状态栏" tabindex="-1"><a class="header-anchor" href="#状态栏" aria-hidden="true">#</a> 状态栏</h2><p><a href="/extension-capabilities/extending-workbench#%E7%8A%B6%E6%80%81%E6%A0%8F%E9%A1%B9">状态栏</a>位于 VS Code 工作台底部，用于展示和你的工作区相关的信息和操作。状态栏项分为两类：基础的（左）和次级的（右）。状态栏中和整个工作区（状态、问题/警告、同步状态）相关的位于左边，次级状态或者上下文相关的（语言、间距、反馈）处于右边。注意控制添加的状态栏项目数，为其他插件腾出空间。</p><p>✔建议</p><ul><li>使用短的文本标签</li><li>仅在必要时使用图标</li><li>使用语义清晰的图标</li><li>把首要（全局）项目放在左边</li><li>把次要（上下文）项目放在右边</li></ul><p>❌ 不要</p><ul><li>添加自定义颜色</li><li>添加的图标数量在 1 个以上（除非必要）</li><li>添加的状态栏项数量在 1 个以上（除非必要）</li></ul><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/statusbar-item.png" alt="Status Bar Item"></p><p><em>这个例子中，状态栏项的信息和整个工作区相关，所以展示在左边</em></p><h3 id="进度状态栏项目" tabindex="-1"><a class="header-anchor" href="#进度状态栏项目" aria-hidden="true">#</a> 进度状态栏项目</h3><p>当需要展示静默进度（进度在后台处理）时，建议用带有加载图标（你可以添加旋转动画）的状态栏项来展示。如果进度状态是需要用户注意到的，我们建议你将其提升到通知维度。</p><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/status-bar-progress.png" alt="Status Bar Progress"></p><p><em>这个例子中，状态栏展示静默进度</em></p><h3 id="错误状态栏项" tabindex="-1"><a class="header-anchor" href="#错误状态栏项" aria-hidden="true">#</a> 错误状态栏项</h3><p>如果你需要展示的项目出于警示目的需要高亮，你可以使用错误状态栏项。请将错误状态栏项作为特殊场景下的最后手段。 <img src="https://code.visualstudio.com/assets/api/references/guidelines/status-bar-error.png" alt="Status Bar Error"></p><p><em>这个例子中，错误状态栏项展示了文件中的代码错误</em></p><h2 id="快速选择" tabindex="-1"><a class="header-anchor" href="#快速选择" aria-hidden="true">#</a> 快速选择</h2><p><a href="/extension-capabilities/common-capabilities#quick-pick">快速选择</a>是一个展示操作和接受用户输入的简易手段。在选择配置、过滤内容或者从列表中挑选项目时尤为有用。 <img src="https://code.visualstudio.com/assets/api/references/guidelines/quickpick.png" alt="Quick Pick"></p><p><em>快速选择可以包含非常多的选项。而且选项可以由图标、详情和标签组成，而且还包括默认项。在这个例子的顶部，你可以看到多步骤模式下的后退、恢复和前进等操作。</em></p><p>✔建议</p><ul><li>使用语义清晰的图标</li><li>使用具体的描述展示当前项（如果需要的话）</li><li>使用详情提供额外（简短）的说明</li><li>在需要多选输入的场景中使用多步骤模式（比如：初始化向导）</li><li>提供一个创建更多的选项（如果需要的话）</li></ul><p>❌ 不要</p><ul><li>重复造轮子</li><li>多种选项公用一个图标</li><li>列表中超过 6 种图标</li></ul><h2 id="编辑器操作" tabindex="-1"><a class="header-anchor" href="#编辑器操作" aria-hidden="true">#</a> 编辑器操作</h2><p>编辑器的工具区会展示<a href="/references/contribution-points#contributescommands">编辑器操作</a>。你可以添加图标作为快速操作，或者在悬浮菜单中添加菜单项（...）。</p><p>✔建议</p><ul><li>在特定上下文场景中展示操作</li><li>尽量使用内置图标库中的图标</li><li>悬浮菜单中的项目应作为二级操作</li></ul><p>❌ 不要</p><ul><li>添加多类图标</li><li>添加自定义颜色</li><li>使用 emoji</li></ul><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/editor-actions.png" alt="Editor Actions"></p><p><em>仅在 HTML 页面中展示这个图标来表示加载页面预览</em></p><h2 id="上下文菜单" tabindex="-1"><a class="header-anchor" href="#上下文菜单" aria-hidden="true">#</a> 上下文菜单</h2><p><a href="/references/contribution-points#contributesmenus">菜单项</a>会展示在视图、操作、右击菜单中。要额外注意菜单组中的菜单项要保持其一致性。如果你的插件操作和文件相关，请将操作配置到文件管理器菜单中（适时）。如果插件是针对特定文件类型的，请仅仅在此类场景中展示操作。</p><p>✔建议</p><ul><li>当场景合适时才展示操作</li><li>相似操作分组</li><li>一个组中的操作过多时，使用子菜单</li></ul><p>❌ 不要</p><ul><li>在所有场景中都展示操作</li></ul><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/context-menu.png" alt="Context Menu"></p><p><em>将 <strong>Copy Github Link</strong> 和其他复制命令放在一起。这个操作只会在 GitHub 仓库项目中可用</em></p><h2 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h2><p><a href="/references/contribution-points#contributesconfiguration">设置</a>是用户配置插件的入口。设置可以是输入框、布尔值、下拉菜单、列表、键值对。如果你的插件要求用户配置特定设置，你可以打开设置 UI 然后用设置 ID 查询你的插件设置。</p><p>✔建议</p><ul><li>为每项设置添加默认值</li><li>为每项设置添加清晰的描述</li><li>为复杂设置添加文档链接</li><li>为相关设置添加链接</li><li>当用户需要配置特定设置项时，提供设置 ID 链接</li></ul><p>❌ 不要</p><ul><li>创建你自己的设置页面/webview</li><li>使用超长的描述</li></ul><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/settings.png" alt="Settings"></p><p><em>使用设置 ID 链接到特定设置项上</em></p><h2 id="命令面板" tabindex="-1"><a class="header-anchor" href="#命令面板" aria-hidden="true">#</a> 命令面板</h2><p><a href="/references/contribution-points#contributescommands">命令面板</a>可以找到所有命令。注意：为你的命令使用清晰的名称和标签，便于用户查找。</p><p>✔建议</p><ul><li>必要时添加快捷键</li><li>为命令添加清晰的名字</li><li>为同类命令分组</li></ul><p>❌ 不要</p><ul><li>重写已有的快捷键</li><li>命名命令时使用 emoji</li></ul><p><img src="https://code.visualstudio.com/assets/api/references/guidelines/command-palette.png" alt="Command Palette"></p><p><em>命令被分组到 &quot;Debug&quot; 类目中， 而且每个命令都有清晰的名字，少部分命令有其快捷键</em></p>',56);function C(A,I){const s=o("ExternalLinkIcon");return r(),n("div",null,[c,e("ul",null,[e("li",null,[e("a",d,[i("信息提示"),a(s)])]),e("li",null,[e("a",u,[i("警告提示"),a(s)])]),e("li",null,[e("a",h,[i("错误提示"),a(s)])])]),m,e("p",null,[i("如果你的视图在 源(SCM)视图容器中，你也可以"),e("a",f,[i("显示进度条"),a(s)])]),g,e("ul",null,[b,w,v,e("li",null,[i("确保视图中的所有元素都是可定制主题的（查看 "),e("a",_,[i("webview-view-sample"),a(s)]),i("和"),x,i("文档）")]),e("li",null,[i("确保你的视图遵循"),e("a",E,[i("可访问性指南"),a(s)]),i("(色彩对比度、ARIA 标签、键盘导航)")]),k]),S,e("p",null,[i("你可以在任意视图容器（侧边栏和面板）中添加 webview，这样的 webview 被称为 "),e("a",V,[i("webview 视图"),a(s)]),i("。它的使用方式和常规的 webview 是一样的。")]),B])}const q=t(p,[["render",C],["__file","08.extension-guidelines.html.vue"]]);export{q as default};
