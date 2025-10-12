# NativeScript for Web

将 NativeScript 的常用 UI 标签映射为可在浏览器中运行的 Vue 3 组件，面向“同一 SFC 同时可在 Native 与 Web 端运行”的开发体验。灵感来自 React Native for Web。

—— 适用于将现有 NativeScript Vue 项目快速在 Web 中预览、调试或发布简单的 Web 版本。

## 特性

- 同名标签：直接在 SFC 中使用 `Page`、`ActionBar`、`GridLayout`、`Label`、`Button`、`ImageCacheIt` 等标签。
- 属性与事件映射：常用属性与事件自动映射到 DOM（如 `tap` → `click`）。
- 轻量实现：仅覆盖常用布局与控件；保留简洁、易维护的代码结构。
- 可插拔：作为 Vue 插件注册，无侵入应用结构。

## 安装（npm）

通过 npm 安装适配层：

```
npm install nativescript-web-adapter
```

本包依赖 `vue`（peer dependency）。如未安装，请先执行：

```
npm install vue@^3.4.0
```

## 快速开始（Web）

1) 安装与引用插件

```ts
// src/web/main.ts
import { createApp } from 'vue';
import { NativeScriptWebPlugin } from 'nativescript-web-adapter';
import Home from '@/components/Home.vue';
import '@/app.css';

const app = createApp(Home);
app.use(NativeScriptWebPlugin);
app.mount('#app');
```

2) Vite 别名配置（将 NS 依赖映射到 Web 适配层）

```ts
// vite.web.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src'),
      // 将 SFC 中的 nativescript-vue 引用映射到浏览器端的 vue
      'nativescript-vue': 'vue',
      // 将 @nativescript/core 类型和 API 映射到适配层 core（仅浏览器场景）
      '@nativescript/core': 'nativescript-web-adapter/core'
    }
  }
});
```

3) 启动开发服务器

```bash
npm run dev:web
```

## 使用示例

```vue
<template>
  <Frame>
    <Page class="bg-[#251353]">
      <ActionBar>
        <Label text="ViteConf 2025" class="font-bold text-lg" />
      </ActionBar>

      <GridLayout rows="auto,*">
        <ImageCacheIt
          src="https://example.com/cover.jpg"
          stretch="aspectFill"
          class="align-top"
          style="width:100dvw"
        />

        <GridLayout row="1" rows="*,auto,*" class="gradient-purple p-6">
          <Label
            class="text-xl align-middle text-center text-[#77c9fa] font-bold"
            text="Hype Counter: 31485"
          />

          <Button
            row="1"
            class="p-6 text-white font-bold border-4 border-[#77c9fa] rounded-lg text-xl gradient-light-purple"
            horizontalAlignment="center"
          >
            Enter Now
          </Button>
        </GridLayout>
      </GridLayout>
    </Page>
  </Frame>
  </template>
```

## 组件与映射

- `Page` → DOM `main`
- `ActionBar` → DOM `header`
- `Frame` → DOM `div`
- `Label` → DOM `span`
- `Button` → DOM `button`
- `StackLayout` → DOM `div`（`display:flex; flex-direction:column`）
- `FlexboxLayout` → DOM `div`（`display:flex`，支持 `flexDirection`、`justifyContent`、`alignItems`）
- `GridLayout` → DOM `div`（`display:grid`，详见下一节）
- `ImageCacheIt` → DOM `img`（支持缓存库的简单替代，Web 下直接使用 `img`，支持 `stretch`）

## 新增支持的组件

- `ActionItem` → `ActionBar` 内部的 DOM `div`
  - 渲染插槽内容（例如一个 `Button`）
  - 支持 `ios.position="right"`，通过 `margin-left:auto` 将项目右对齐

- `ContentView` → DOM `div`
  - 简单容器，透传类名与样式，便于自定义

- `ListView` → DOM `div`
  - 接收 `:items`（数组），为每个项渲染默认插槽
  - 支持 `separatorColor`（如 `transparent` 或 `rgba(...)`）
  - 轻量实现，面向常见的列表场景，兼顾性能

## 自定义 CSS 使用教程

- 适配层提供了基础渲染样式（`dist/vue.css`）。
  - 可选（推荐）在浏览器入口引入，保证基础结构样式一致：

```ts
// src/web/main.ts
import 'nativescript-web-adapter/dist/vue.css';
```

- 你可以在 `src/app.css` 中自定义类，并直接应用到 NS 标签。
  - 以下示例为列表视觉与交互的统一样式，适配 `ListView` 与 `GridLayout`：

```css
/* src/app.css */
.list-container {}
.list-item { display:grid; grid-template-columns:1fr auto; align-items:center; padding:12px 16px; border-bottom:1px solid rgba(255,255,255,0.12); }
.list-item:hover { background:rgba(255,255,255,0.06); border-radius:12px; }
.list-title { font-size:18px; color:#fff; }
.list-dot { width:20px; height:20px; border-radius:9999px; background:#fff; }
.back-button { padding:8px 12px; color:#fff; font-weight:600; border:2px solid #77c9fa; border-radius:12px; font-size:14px; background:linear-gradient(to bottom, #6544b7, #251353); }
```

- SFC 中的使用示例：

```vue
<template>
  <Page>
    <ActionBar title="详情">
      <!-- Web 左上角返回；原生端使用系统默认返回 -->
      <ActionItem>
        <Button text="Back" class="back-button" @tap="goBack" />
      </ActionItem>
    </ActionBar>

    <ListView :items="items" separatorColor="rgba(255,255,255,0.12)" class="list-container">
      <template #default="{ item }">
        <GridLayout columns="*, auto" class="list-item">
          <Label :text="item" class="list-title" />
          <ContentView col="1" class="list-dot" />
        </GridLayout>
      </template>
    </ListView>
  </Page>
  </template>
```

## 扩展组件与提交 PR 指南

### 如何新增一个适配组件

1. 在 `src/vue/components/YourComponent.ts` 下创建组件，使用 `defineComponent`，将常用属性/事件映射到 DOM。
2. 在 `src/vue/index.ts` 中注册到插件，确保在 Vue 中可用。
3. 在 `src/vue/index.types.ts` 中导出对应类型，保持类型对齐。
4. 在 `src/vue/adapter.css` 中补充基础样式（建议类名规范：`.ns-your-component`）。
5. 运行 `npm run build` 构建适配层，并在示例项目中验证（`npm run dev:web`）。

### 提交 PR 的建议

- 实现尽量轻量，聚焦常见场景，避免过度复杂。
- 尽量保持与 NativeScript 语义一致；若有差异，请在文档中说明。
- 事件映射统一（例如 `tap` → `click`）。
- 提交时包含类型导出、基础 CSS，以及文档中的示例代码。
- 在适合的地方增加或更新测试（`tests/*`）。
- 保持代码风格与现有文件一致，避免引入沉重依赖。

## GridLayout 原理与行为

- 容器样式
  - `display: grid`
  - `grid-template-columns`: 未声明 `columns` 时默认单列：`1fr`
  - `grid-template-rows`: 由 `rows` 解析得到（可选）
  - `grid-auto-flow: row`：默认按“行”自动堆叠
  - `width: 100%`, `height: 100%`

- 轨道解析（`rows`/`columns`）
  - 使用逗号分隔：如 `"auto,*"`、`"*,auto,*"`
  - `*` → `1fr`，`auto` → `auto`，纯数字 → 像素（如 `60` → `60px`）
  - 示例：`rows="auto,*"` → `grid-template-rows: auto 1fr`

- 子项定位与跨度
  - 行/列索引：NativeScript 使用 0 基；CSS Grid 使用 1 基。适配层将 `row=0` 映射到 `grid-row-start:1`，`col=0` 映射到 `grid-column-start:1`
  - 默认列：若未声明列（未设置 `col`/`column`），适配层强制 `grid-column-start:1`，避免隐式多列导致并排
  - 跨度：`rowSpan` → `grid-row-end: span n`，`colSpan` → `grid-column-end: span n`

- 对齐
  - 水平：`horizontalAlignment`（`left|center|right|stretch`）→ `justify-self`
  - 垂直：`verticalAlignment`（`top|center|bottom|stretch`）→ `align-self`

## 其它属性与事件映射

- 事件：`tap` → DOM `click`（在适配层内统一通过 `onClick` 触发 `tap`）
- `Label` 文本居中：`horizontalAlignment="center"` → `text-align:center`
- `ImageCacheIt`：
  - `stretch="aspectFill"` → `object-fit: cover`
  - `stretch="aspectFit"` → `object-fit: contain`
  - 默认样式：`width:100%`, `display:block`, `object-position:center`

## 常见布局建议（Web 对齐 iOS）

- 将外层 `main` 设为满视口高度：`main { height: 100vh; }`，避免 Grid 的剩余空间计算与移动端差异。
- 如果图片需要满宽：使用 `style="width:100dvw"` 或容器 `width:100%`，确保无隐式列；必要时在内层 `GridLayout` 显式 `columns="1*"`。
- 当出现子项并排而非堆叠时：检查是否声明了 `columns`，或确认未设置 `col` 导致隐式列行为；适配层已默认固定到第 1 列。

## 兼容性与局限

- 适配层仅覆盖常用 UI 与布局特性；复杂测量、原生动画、平台 API 等不在 Web 场景提供。
- 字体渲染、行高、阴影等在 iOS/Android 与浏览器存在视觉差异；可通过 Tailwind 或 CSS 微调。
- 事件模型统一为 DOM 模式；部分原生事件不适用浏览器。

## 开发与构建

- 构建适配层：`npm run build`（输出 `dist/index.js`、`dist/vue.js`、`dist/core.js` 及类型文件）
- 运行测试：`npm run test`
- 本仓库示例项目：根目录下 `npm run dev:web` 启动浏览器预览。

## 目录结构（适配层子包）

- `src/vue/components/*`：各 UI 组件实现
- `src/vue/index.ts`：Vue 插件入口（注册所有组件）
- `src/core`：浏览器场景的 `@nativescript/core` 最小类型与占位实现
- `dist/*`：构建产物与类型文件

## 为什么这样设计

- 保持与 NativeScript 标签一致，降低迁移与双端维护成本。
- 使用标准 Web 技术（Flex 与 Grid）实现布局，便于调试与扩展。
- 映射规则最小而明确：索引从 0→1 的转换、`*`/`auto`/像素的轨道解析、对齐与跨度的直观对应，避免隐藏行为。

## 反馈与改进

欢迎在实际项目中试用并反馈。如果你需要扩展更多组件或更精细的行为（如绝对定位、交互增强），可以在 `src/vue/components` 中按现有模式添加实现，并提交 PR。