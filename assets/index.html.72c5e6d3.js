import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as d,a as e,b as o,d as t,w as l,e as c,r}from"./app.ed9f300c.js";const h={},u=e("h1",{id:"插件-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#插件-api","aria-hidden":"true"},"#"),o(" 插件 API")],-1),_={href:"https://github.com/Microsoft/vscode/tree/master/extensions",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"本文档将介绍：",-1),f=e("li",null,"如何构建、运行、调试、测试和发布插件",-1),g=e("li",null,"如何利用好VS Code丰富的插件API",-1),m={href:"https://marketplace.visualstudio.com/vscode",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"插件能做什么",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#插件能做什么","aria-hidden":"true"},"#"),o(" 插件能做什么？")],-1),v=e("hr",null,null,-1),b=e("p",null,"下面我们看看使用插件API能做到些什么：",-1),k=e("h2",{id:"如何构建插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何构建插件","aria-hidden":"true"},"#"),o(" 如何构建插件？")],-1),I=e("hr",null,null,-1),S=e("p",null,"想要做出一个好插件需要花费不少精力，我们来看看这个教程的每个章节能为你做点什么：",-1),A=c('<li><strong>第一步</strong> <a href="">Hello World示例</a>会教你贯穿于制作插件时的基本概念</li><li><strong>开发插件</strong> 包含了各类插件开发更深的主题，比如<a href="">发布</a>和<a href="">测试</a>插件</li><li><strong>插件功能</strong> 将VS Code庞杂的API拆解成了几个小分类，帮你掌握到每个主题下的开发细节</li><li><strong>插件指南</strong> 包括指南和代码实例，详细介绍特定API的使用场景</li><li><strong>语言插件</strong> 通过代码和指南阐述如何添加编程语言支持</li>',5),M=e("strong",null,"进阶主题",-1),P=e("h2",{id:"最新进度",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#最新进度","aria-hidden":"true"},"#"),o(" 最新进度")],-1),V=e("p",null,"VS Code 每个月更新一次，插件 API 也随着每个版本的发布而更新。新功能和新的 API会在每个迭代中扩展 VS Code 插件的能力。",-1),C=e("p",null,[o("要想跟上潮流，你可以看看 "),e("strong",null,"每月发布报告"),o("，其中的以下部分是你需要关注的：")],-1),w={href:"https://code.visualstudio.com/updates#_extension-authoring",target:"_blank",rel:"noopener noreferrer"},N={href:"https://code.visualstudio.com/updates#_proposed-extension-apis",target:"_blank",rel:"noopener noreferrer"},Y=e("h2",{id:"寻求帮助",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#寻求帮助","aria-hidden":"true"},"#"),o(" 寻求帮助")],-1),j=e("hr",null,null,-1),z=e("p",null,"如果你在开发中遇到了问题，请尝试：",-1),W={href:"https://stackoverflow.com/questions/tagged/visual-studio-code",target:"_blank",rel:"noopener noreferrer"},B={href:"https://stackoverflow.com/questions/tagged/visual-studio-code",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"visual-studio-code",-1),L={href:"https://gitter.im/Microsoft/vscode",target:"_blank",rel:"noopener noreferrer"},T={href:"https://join.slack.com/t/vscode-dev-community/shared_invite/enQtMjIxOTgxNDE3NzM0LWU5M2ZiZDU1YjBlMzdlZjA2YjBjYzRhYTM5NTgzMTAxMjdiNWU0ZmQzYWI3MWU5N2Q1YjBiYmQ4MzY0NDE1MzY",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/Microsoft/vscode-docs/issues",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/Microsoft/vscode/issues",target:"_blank",rel:"noopener noreferrer"};function Q(Z,R){const n=r("ExternalLinkIcon"),s=r("RouterLink");return a(),d("div",null,[u,e("p",null,[o("VS Code内置了扩展能力，在插件API加持之下，VS Code几乎每一个部分都可以自定义或者加强。而且，VS Code中的很多核心功能已编译为"),e("a",_,[o("插件"),t(n)]),o("，它们都共用了一套插件API。")]),p,e("ul",null,[f,g,e("li",null,[o("代码示例和各个指南的位置，方便你快速入门。如果你只是想看看已经发布的插件，可移步至"),e("a",m,[o("VS Code插件市场"),t(n)])])]),x,v,b,e("ul",null,[e("li",null,[o("改变VS Code的颜色和图标主题——"),t(s,{to:"/extension-capabilities/theming.html"},{default:l(()=>[o("主题")]),_:1})]),e("li",null,[o("在UI中添加自定义组件和视图——"),t(s,{to:"/extension-capabilities/extending-workbench.html"},{default:l(()=>[o("扩展工作台")]),_:1})]),e("li",null,[o("创建Webview，使用HTML/CSS/JS显示自定义网页——"),t(s,{to:"/extension-guides/webview.html"},{default:l(()=>[o("Webview指南")]),_:1})]),e("li",null,[o("支持新的编程语言——"),t(s,{to:"/language-extensions/"},{default:l(()=>[o("语言插件概览")]),_:1})]),e("li",null,[o("支持特定运行时的调试——"),t(s,{to:"/extension-guides/debugger-extension.html"},{default:l(()=>[o("调试插件指南")]),_:1})])]),e("p",null,[o("如果你想大概浏览一下所有的插件API，请参阅"),t(s,{to:"/extension-capabilities/"},{default:l(()=>[o("插件功能概述")]),_:1}),o("。"),t(s,{to:"/extension-guides/"},{default:l(()=>[o("插件指南")]),_:1}),o("列出了各种插件API使用的示例代码和指南。")]),k,I,S,e("ul",null,[A,e("li",null,[M,o(" 解释了"),t(s,{to:"/advanced-topics/extension-host.html"},{default:l(()=>[o("插件主机")]),_:1}),o("和"),t(s,{to:"/advanced-topics/using-proposed-api.html"},{default:l(()=>[o("使用不稳定的API")]),_:1}),o("等更深层级的概念")])]),P,V,C,e("ul",null,[e("li",null,[e("a",w,[o("Extension authoring"),t(n)]),o(" - 学习新版中的插件 API")]),e("li",null,[e("a",N,[o("Proposed extension APIs"),t(n)]),o(" - 给即将到来的实验性 API 提供反馈")])]),Y,j,z,e("ul",null,[e("li",null,[e("p",null,[e("a",W,[o(" Stack Overflow"),t(n)]),o("：其中有将近"),e("a",B,[o("12k"),t(n)]),o("个打了"),E,o("标签的问题，而且半数以上都已经有了答案，搜索你遇到的问题，提问，或者帮助其他人解决VS Code中遇到的问题。")])]),e("li",null,[e("p",null,[e("a",L,[o("Gitter频道"),t(n)]),o("和"),e("a",T,[o("VS Code Dev Slack"),t(n)]),o("：插件开发人员的公共聊天室，VS Code项目组成员偶尔也会出现。")])])]),e("p",null,[o("你若对本文档有任何建议，请在"),e("a",U,[o("Microsoft/vscode-docs"),t(n)]),o("中创建issue。如果你的插件问题无法解决，或者对VS Code插件API有任何建议，请在"),e("a",D,[o("Microsoft/vscode"),t(n)]),o("中新建issue。")])])}const O=i(h,[["render",Q],["__file","index.html.vue"]]);export{O as default};