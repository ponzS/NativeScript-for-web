# NativeScript for Web

[![npm](https://img.shields.io/npm/v/nativescript-web-adapter.svg?logo=npm&label=npm)](https://www.npmjs.com/package/nativescript-web-adapter)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)


本项目是NativeScript-Vue-Vite的“web 适配器”可将原生应用代码一键生成可在浏览器运行的纯 Vue Web 项目（位于 `platforms/web/`）。

---

## 快速开始

临时把本地 bin 加入 PATH，使 `ns-web` 命令可用

```bash
export PATH="$PWD/node_modules/.bin:$PATH"
```

编译web模版 - 安装依赖项 - 启动 web 项目开发服务器

web

```bash
ns-web dev 
```

ios

```bash
ns run ios
```

Android

```bash
ns run android
```

## 目录

- 背景与目标
- 技术栈与依赖
- 原生端（NativeScript）
- Web 端（生成的 Vue 项目）
- Web 适配器（生成器与包）
- 运行与构建
- 转换与适配规则（详解）
- 样式与 Tailwind 配置
- 类型与 TS 配置
- HMR（热模块替换）工作机制
- 常见问题与限制
- 改进与升级建议

---

## 背景与目标

- 提供一个使用 `nativescript-vue` + `@nativescript/vite` 的原生应用示例，展示在 iOS/Android 上的开发与 HMR 体验。
- 提供一个“web 适配器”（本地包 `nativescript-web-adapter`），可扫描并转换原生项目的 `src/` 代码，生成一个可运行在浏览器的 Vue 应用，便于在桌面浏览器进行快速预览与联调。
- 生成的 Web 项目位于 `platforms/web/`，拥有独立的 Vite 配置、依赖与入口文件，不影响原生端。

---

## 技术栈与依赖

- 原生端（NativeScript）：
  - `nativescript-vue@3.0.1`（使用 `patch-package` 注入 HMR 辅助）
  - `@nativescript/core@alpha`、`@nativescript/vite@^0.0.1-alpha.7`（NativeScript v9 预发布）
  - 原生插件示例：`@triniwiz/nativescript-image-cache-it`、`@valor/nativescript-websockets`、`nativescript-inappbrowser`
- Web 端（生成项目）：
  - `vue@^3.4`、`vue-router@^4.2`
  - `vite@^5`、`@vitejs/plugin-vue@^5`
  - `tailwindcss@^3.4`、`postcss`、`autoprefixer`
- 适配器包（本地）：
  - `nativescript-web-adapter/` 使用 Vite 库模式构建 UMD/ESM，内置生成脚本与简易 CLI。

---

## 原生端（NativeScript）

- 入口 `src/app.ts`：
  - 使用 `nativescript-vue` 的 `createApp(Home).start()` 启动原生应用。
  - 注册原生元素 `ImageCacheIt`。
  - 在 Android 平台通过 `Application.on(Application.launchEvent)` 修改系统状态栏与导航栏样式。
- 页面 `src/components/Home.vue`：
  - 使用 NS 布局与组件，如 `Frame/Page/ActionBar/GridLayout/Label/Button/ImageCacheIt`。
  - 使用 `@tap` 触发原生链接打开（iOS 使用 `UIApplication.openURL`，Android 通过 `Intent`）。
  - 在 mounted/unmounted 中维护一个计数器示例（演示 HMR 与状态刷新）。
- 全局初始化 `src/globals.ts`：
  - 定义触摸动画（iOS 使用 `UIView.animate`，Android 使用 `View.animate`），Web 端将被替换为 no-op shim。
- 原生 Vite 配置 `vite.config.ts`：
  - `export default defineConfig(({ mode }) => mergeConfig(vueConfig({ mode }), {}))`，合并 NS 官方 Vite 模板以支持 HMR 与构建。
- Tailwind 与样式：
  - `src/app.css` 定义主题色与渐变类（`gradient-purple/gradient-light-purple`），并为 `ActionBar` 设置主色。
  - `tailwind.config.js` 使用 `darkMode: ["class", ".ns-dark"]` 并关闭 `preflight`（贴合原生渲染）。

---

## Web 端（生成的 Vue 项目）

- 生成位置：`platforms/web/`
- 生成结构（示例）：

```
platforms/web/
  package.json          # 生成（含 vue + vue-router）
  vite.config.ts        # 生成（server.port = 3005, strictPort = true）
  index.html
  postcss.config.js
  tailwind.config.js
  src/
    App.vue             # 根组件（<router-view />）
    app.ts              # 入口（注册适配器 Web 组件，mount '#app'）
    router/index.ts     # 默认路由（Home）
    globals.ts          # Web shim：initGlobals() no-op
    components/
      Home.vue          # 从原生拷贝并转换而来
      websfc/           # 适配器 Web 组件(ActionBar/Page/Frame)
    composables/
      websfc/           # 适配器组合式 API（useActionBar/usePage/useFrame）
```

- 运行地址：默认 `http://localhost:3005/`（如端口被占用会直接失败，可在 `vite.config.ts` 将 `strictPort` 设为 `false` 启用回退）。

---

## Web 适配器（生成器与包）

- 位置：`nativescript-web-adapter/`
- 关键文件：
  - `tools/create-web-platform.cjs`：生成脚本（复制、转换、模板写入）。
  - `core/components/*.vue`：Web SFC 容器（`ActionBar/Page/Frame`）。
  - `core/composables/*.ts`：组合式 API（`useActionBar/usePage/useFrame`）。
  - `core/types.ts`：组件类型别名与组合式类型导出。
  - `index.ts`：适配器安装器（`install(app)` 注册组件并挂载 `$ns`）。
  - `vite.config.ts`：库模式构建（`external: ['vue']`，输出 UMD/ESM）。
- CLI：`tools/cli.js`
  - 本地命令：`node nativescript-web-adapter/tools/cli.js init`
  - 包含 `create:web` NPM 脚本（供根项目调用）。

---

## 运行与构建

- 原生端（带 HMR）：
  - `npm run dev:ios`：并行运行 Vite（端口 `5173`）与 NS iOS 调试。
  - `npm run dev:android`：并行运行 Vite 与 NS Android 调试。
  - `npm run ios` / `npm run android`：使用 `ns debug` 调试构建。
- 生成并运行 Web 项目：
  - `npm run dev:web`：在适配器目录运行生成器、进入 `platforms/web` 安装依赖并启动 Web Vite。
  - 首次执行会创建 `platforms/web` 以及必要模板与配置。

---

## 转换与适配规则（详解）

生成器的 `transformContent()` 目前仅做必要的代码层替换，不再将 SFC 模板中的 NS 标签替换为原生 HTML 标签；UI 由自定义 Web 组件负责：

- 导入替换与删除：
  - `from 'nativescript-vue'` → `from 'vue'`
  - 删除 `import ... from '@nativescript/core'`（Web 不加载原生运行时）
  - 删除 `import ... from '@nativescript/web-adapter'`（生成的 Web 项目直接使用本地组件）
- 平台声明与原生调用清理：
  - 删除常见的原生声明（如 `declare var com;`）。
  - 删除 `Application.on(...)` 等平台事件注册（如含 `__ANDROID__` 或 `Application.launchEvent`）。
- 模板保留 NS 标签：
  - 保留并在 Web 注册的组件：`ActionBar/Page/Frame/StackLayout/GridLayout/FlexboxLayout/WrapLayout/ScrollView/Label/Button/Image/HtmlView/ImageCacheIt`
  - 特例降级：`ImageCacheIt` 在 Web 以 `<img>` 的简单实现提供降级（也提供同名 Web 组件以统一用法）。
- 原生链接打开逻辑统一：
  - 示例中的 `enterNow(...)` 将被替换为浏览器实现：`window.open('https://viteconf.amsterdam', '_blank')`。
- 其他清理：
  - 移除涉及 `android.*`、`UIApplication`、`NSURL`、`NSDictionary`、`intent` 等的原生代码行。
  - 移除残留 `else { ... }` 原生分支块。
  - 将 `registerElement(...)` 注释掉（Web 不需要）。
- 特殊文件处理：
  - `globals.ts` 被替换为 no-op shim：`export function initGlobals() { /* web shim: no-op */ }`。

> 提示：当前转换为正则驱动，覆盖常见模式。对于复杂条件分支、动态模板与高级原生 API，建议后续用 AST（TS/HTML）替换以提高准确性与可维护性。

---

## 样式与 Tailwind 配置

- 原生端：
  - `src/app.css` 中使用 `@tailwind base/components/utilities` 并定义主题样式与渐变背景。
  - `tailwind.config.js`：
    - `content: ["./src/**/*.{css,vue,ts,tsx}"]`
    - `darkMode: ["class", ".ns-dark"]`
    - `corePlugins.preflight: false`（禁用浏览器预设重置）。
- Web 端（生成）：
  - `tailwind.config.js` 扫描 `./index.html` 与 `./src/**/*.{vue,js,ts,jsx,tsx}`，使用标准浏览器预设。
  - `postcss.config.js`：启用 `tailwindcss` 与 `autoprefixer`。

---

## 类型与 TS 配置

- 根 `tsconfig.json`：
  - `strict: true`，目标与模块为 `esnext`。
  - 路径别名：`~/*`、`@/*` → `src/*`。
  - `vueCompilerOptions.lib = "nativescript-vue"` 指示 SFC 编译面向 NS 环境。
- 类型声明：
  - 原生端 `types/shims.vue.d.ts`：将 `*.vue` 类型声明指向 `nativescript-vue` 的 `DefineComponent`。
  - 适配器端 `core/env.d.ts`：将 `*.vue` 类型指向 `vue` 的 `DefineComponent`，与浏览器编译一致。
- 适配器 `core/types.ts`：提供 `ActionBar/Page/Frame` 组件类型别名与 `useActionBar/usePage/useFrame` 的状态类型导出。

---

## HMR（热模块替换）工作机制

- 原生端：
  - 通过 `@nativescript/vite` 与 `vite serve -- --env.hmr` 建立 HMR 通道，将变更推送到设备。
  - `patches/nativescript-vue+3.0.1.patch` 在 `app.start` 内注入：`globalThis.__NS_VUE_APP__ = app`，便于在深层导航栈中进行状态恢复（例如 HMR 时返回栈管理）。
- Web 端：
  - 独立的 Vite（`platforms/web/vite.config.ts`）运行在 `3005` 端口，使用常规 Vue HMR 与路由刷新。

---

## 常见问题与限制

- 原生 API 与插件：
  - 复杂的原生交互（平台专用模块、系统服务）无法自动转换为 Web，需要手动替换或提供浏览器降级实现（如 `InAppBrowser` → `window.open` 包装）。
- 布局与语义映射范围有限：
  - 已提供基础 Web 组件（`ActionBar/Page/Frame/Grid/Stack/Flex/Wrap/Scroll/Label/Button/Image/HtmlView/ImageCacheIt`）。复杂布局语义仍有限，后续将补充属性到样式的细粒度映射（如 `flexDirection/row`、`grid rows/columns` 的细化）。
- 正则驱动的转换：
  - 对复杂代码与模板可能存在边缘情况，建议逐渐转向 AST 级转换以提升稳定性。
- 生成器模板重复写入：
  - 目前生成器对 `platforms/web/package.json` 有两次写入（不同依赖版本），可精简为一次以减少维护成本。

---

## 改进与升级建议

1. 转换引擎升级：
   - 用 TypeScript 与 Vue SFC AST 替换正则，精确处理导入、调用、模板与指令映射。
2. 全局初始化与动画：
   - 为 `globals.ts` 提供可选的 Web 动画实现（CSS transitions/GSAP），保持一致交互体验。
3. 测试与校验：
   - 为转换规则与模板生成增加单元测试与 e2e 测试，保证不同项目结构下的稳定性。

---

