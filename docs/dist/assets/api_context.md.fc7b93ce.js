import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.bfdd83ff.js";const E=JSON.parse('{"title":"Context","description":"","frontmatter":{},"headers":[],"relativePath":"api/context.md","filePath":"api/context.md"}'),o={name:"api/context.md"},p=l(`<h1 id="context" tabindex="-1">Context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;Context&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>Context 是 pkgs 的上下文，挂载了多种实例用于处理文件。例如 version、publish 和 run 都使用到了上下文中的 git和包处理等能力</p><h2 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Context</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">config</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ExecuteCommandConfig</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">argv</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">args</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">ttArgv</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 配置</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ExecuteCommandConfig</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 图表依赖</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">contextAnalysisDiagram</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ContextAnalysisDiagramApi</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 文件仓库</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">fileStore</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FileStoreApi</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 包管理器</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">packageManager</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ManagerApi</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 命令管理</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">executeManage</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ExecuteApi</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// NodeJS.Process[&#39;argv&#39;]</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">argv</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ContextParams</span><span style="color:#BABED8;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">argv</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 处理后的命令，从中获取插件定义的命令</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">args</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ContextParams</span><span style="color:#BABED8;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">args</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 一般要先启用allowUnknownOption，用来将插件非定义的民乐参数透传</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">ttArgv</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ContextParams</span><span style="color:#BABED8;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ttArgv</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// cli命名，例如用来读取配置文件</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">static</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">cli</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Agent</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 创建上下文实例</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">static</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">create</span><span style="color:#89DDFF;">({</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">config</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">git</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">argv</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">args</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">ttArgv</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ContextParams</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Context</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 配置合并</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">static</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">assignConfig</span><span style="color:#89DDFF;">(...</span><span style="color:#BABED8;font-style:italic;">config</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ExecuteCommandCli</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ExecuteCommandConfig</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取默认配置</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">static</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">getDefault</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">config</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ContextParams</span><span style="color:#BABED8;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">config</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ExecuteCommandConfig</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取处理后的args</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">get</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">argvValue</span><span style="color:#89DDFF;">():</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 配置合并</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">assignOptions</span><span style="color:#89DDFF;">(...</span><span style="color:#BABED8;font-style:italic;">config</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ExecuteCommandCli</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">this</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;config&quot;">​</a></h3><p>配置</p><h4 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h4><p>混合多方配置生成</p><p><code>项目配置文件 + 包管理器配置 + 默认配置 = config</code></p><p>优先级：项目配置文件 &gt; 包管理器配置 &gt; 默认配置</p><h4 id="类型-1" tabindex="-1">类型 <a class="header-anchor" href="#类型-1" aria-label="Permalink to &quot;类型&quot;">​</a></h4><p><a href="/pkgs/docs/dist/config/#类型">配置索引-类型</a></p><h3 id="contextanalysisdiagram" tabindex="-1">contextAnalysisDiagram <a class="header-anchor" href="#contextanalysisdiagram" aria-label="Permalink to &quot;contextAnalysisDiagram&quot;">​</a></h3><p>依赖图表</p><h4 id="描述-1" tabindex="-1">描述 <a class="header-anchor" href="#描述-1" aria-label="Permalink to &quot;描述&quot;">​</a></h4><p>寻找包，并且对包依赖进行分析</p><h4 id="类型-2" tabindex="-1">类型 <a class="header-anchor" href="#类型-2" aria-label="Permalink to &quot;类型&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ContextAnalysisDiagramApi</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 工作区</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">packagesPath</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ExecuteCommandConfig</span><span style="color:#BABED8;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">packagesPath</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 图表依赖</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">analysisDiagram</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AnalysisDiagram</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">get</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">allDirs</span><span style="color:#89DDFF;">():</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[] </span><span style="color:#676E95;font-style:italic;">// 获取所有包地址</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">get</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">allFilesPath</span><span style="color:#89DDFF;">():</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[] </span><span style="color:#676E95;font-style:italic;">// 获取所有包package.json地址</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">get</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">allPackagesJSON</span><span style="color:#89DDFF;">():</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">IPackageJson</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">[] </span><span style="color:#676E95;font-style:italic;">// 获取所有包的package.json</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">initData</span><span style="color:#89DDFF;">():</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">this</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 初始化图表依赖</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取依赖我的包目录</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">getRelatedDir</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">forCD</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cd</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">source</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AnalysisBlockItem</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 通过文件路径获取包目录</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">getRelatedPackagesDir</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">files</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[] </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 拓扑排序</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">getDirTopologicalSorting</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">dirs</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// package.json交换包信息</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">packageJsonToAnalysisBlock</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">IPackageJson</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AnalysisBlockItem</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">null</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 目录交换包信息</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">dirToAnalysisBlock</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AnalysisBlockItem</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">null</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 包名: AnalysisBlockItem</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AnalysisDiagram</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AnalysisBlockItem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AnalysisBlockItem</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">packageJson</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">IPackageJson</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 包 package.json</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 包名</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">filePath</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 包 package.json 路径</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">dir</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 包目录路径</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">relyMyDir</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[] </span><span style="color:#676E95;font-style:italic;">// 依赖我的包</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">myRelyDir</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[] </span><span style="color:#676E95;font-style:italic;">// 我依赖的包</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="filestore" tabindex="-1">fileStore <a class="header-anchor" href="#filestore" aria-label="Permalink to &quot;fileStore&quot;">​</a></h3><p>文件仓库</p><h4 id="描述-2" tabindex="-1">描述 <a class="header-anchor" href="#描述-2" aria-label="Permalink to &quot;描述&quot;">​</a></h4><p>基于 git 和图表依赖通过多种方式处理文件，模式：diff、sync，git：工作区、暂存区、版本区</p><h4 id="类型-3" tabindex="-1">类型 <a class="header-anchor" href="#类型-3" aria-label="Permalink to &quot;类型&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FileStoreApi</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 图表依赖实例</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">contextAnalysisDiagram</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ContextAnalysisDiagramApi</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// git实例</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">git</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">SimpleGit</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取所有包路径</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">getAllFile</span><span style="color:#89DDFF;">():</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取工作区包路径</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">workDiffFile</span><span style="color:#89DDFF;">():</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取暂存区包路径</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">stageDiffFile</span><span style="color:#89DDFF;">():</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取版本区diff模式包路径</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">repositoryDiffFile</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">separator</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取版本区sync模式包路径</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">repositorySyncFile</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">separator</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// sync模式循环版本区</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">forRepositorySyncPack</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ForPackCallback</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">separator</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// diff模式循环版本区</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">forRepositoryDiffPack</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ForPackCallback</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">separator</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="packagemanager" tabindex="-1">packageManager <a class="header-anchor" href="#packagemanager" aria-label="Permalink to &quot;packageManager&quot;">​</a></h3><p>包管理器</p><h4 id="描述-3" tabindex="-1">描述 <a class="header-anchor" href="#描述-3" aria-label="Permalink to &quot;描述&quot;">​</a></h4><p>实现包管理器的一些命令行为</p><h4 id="类型-4" tabindex="-1">类型 <a class="header-anchor" href="#类型-4" aria-label="Permalink to &quot;类型&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ManagerApi</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// npm、pnpm之类</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">agent</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AgentType</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取包工作区配置</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">getConfig</span><span style="color:#89DDFF;">():</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ExecuteCommandCli</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 例如：npm run [cmd]</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">cmd</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">args</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Options</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">CommandResult</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 例如：npm publish</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">publish</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#BABED8;font-style:italic;">packageJson</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">IPackageJson</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#BABED8;font-style:italic;">args</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 命令参数</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Options</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 触发命令方法的参数</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">CommandResult</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="executemanage" tabindex="-1">executeManage <a class="header-anchor" href="#executemanage" aria-label="Permalink to &quot;executeManage&quot;">​</a></h3><p>命令管理</p><h4 id="描述-4" tabindex="-1">描述 <a class="header-anchor" href="#描述-4" aria-label="Permalink to &quot;描述&quot;">​</a></h4><p>用来执行各种命令</p><h4 id="类型-5" tabindex="-1">类型 <a class="header-anchor" href="#类型-5" aria-label="Permalink to &quot;类型&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ExecuteApi</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 录入命令数据</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">enterMainResult</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">commandMainResult</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">HandleMainResult</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">this</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 返回命令数据</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">getCommandData</span><span style="color:#89DDFF;">():</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">analysisBlockList</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AnalysisBlockItem</span><span style="color:#BABED8;">[]</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">commandData</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">CommandResult</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">[]</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 执行</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">execute</span><span style="color:#89DDFF;">():</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">any</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,38),t=[p];function e(c,r,y,B,D,F){return a(),n("div",null,t)}const A=s(o,[["render",e]]);export{E as __pageData,A as default};