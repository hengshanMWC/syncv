import{_ as a,o as e,c as t,Q as i}from"./chunks/framework.fb0c8ff2.js";const o="/assets/workspace.bcc0e7fe.png",m=JSON.parse('{"title":"内部运行","description":"","frontmatter":{},"headers":[],"relativePath":"principle.md","filePath":"principle.md"}'),r={name:"principle.md"},c=i('<h1 id="内部运行" tabindex="-1">内部运行 <a class="header-anchor" href="#内部运行" aria-label="Permalink to &quot;内部运行&quot;">​</a></h1><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><p>通过语义和项目结构收集包，实现0配置运行。 基于 git 做对比，实现所有命令支持多种方式按需调用</p><h3 id="语义化" tabindex="-1">语义化？ <a class="header-anchor" href="#语义化" aria-label="Permalink to &quot;语义化？&quot;">​</a></h3><p>pkgs 有一个鼻子，首先会判断项目使用的包管理器，基于包管理器的 workspace 读取工作区，没有读取到工作区会默认检测 packages/* 目录，检测失败则会认为该项目是 MultiRepo。当然你也可以通过 <code>pkgs.config.json</code> 来定义workspace，项目会优先读取该配置文件的字段</p><p><img src="'+o+'" alt="workspace检测"></p><h3 id="git做了什么" tabindex="-1">git做了什么？ <a class="header-anchor" href="#git做了什么" aria-label="Permalink to &quot;git做了什么？&quot;">​</a></h3><ul><li>围绕 <code>git tag</code> 做版本管理</li><li>基于 git 的工作区、暂存区和版本库做按需调用</li></ul>',8),s=[c];function n(l,p,d,_,h,u){return e(),t("div",null,s)}const f=a(r,[["render",n]]);export{m as __pageData,f as default};
