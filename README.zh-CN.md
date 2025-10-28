# NativeScript Vue + Vite 示例（中文）

此仓库展示了如何从一个 NativeScript + Vue 代码库生成一个纯 Vue（Web）项目，并通过生成器将应用迁移到 `platforms/web` 以便使用 Vite 运行。

## 快速开始

安装主仓库依赖：

```bash
npm install
```

生成 web 平台并运行生成的 Web 应用（该命令会运行生成器、在 `platforms/web` 中安装依赖并启动 Vite）：

```bash
npm run dev:web
```

注意：生成器会把 web 项目放在 `platforms/web` 下。生成的 Vite 开发服务器默认使用 3005 端口以避免与主项目（5173）发生冲突。

## 生成器实现摘要

生成器位于 `nativescript-web-adapter/tools/create-web-platform.*`，主要步骤如下：

- 将你的 `src/` 目录复制到 `platforms/web/src`，并在复制过程中对文件内容进行转换，以去除或替换 NativeScript 专用的写法，使其兼容浏览器。
- 将适配器中的 Web 组件（位于适配器的 `core/components`）复制到 `platforms/web/src/components/websfc`，这些组件是针对 Web 的 SFC（例如 ActionBar、Page、Frame 等）的实现。
- 生成一个简单的 Vue Web 项目骨架，包括：
  - `App.vue`（包含 `<router-view />`）
  - `src/router/index.ts`（vue-router 配置，Home.vue 作为默认路由）
  - `src/app.ts`（入口文件，挂载 `App.vue`，并注册 web 组件）
  - `vite.config.ts`、`package.json`、`tsconfig.json` 等工具链文件
- 用一个 no-op 的 `initGlobals()` Shim 覆盖或替换 `src/globals.ts`，以便在浏览器中保持对 `initGlobals()` 的调用不报错。

转换示例（部分）：

- `nativescript-vue` 的导入会被替换为 `vue`。
- 对 `@nativescript/core` 或原生平台的导入会被删除或通过 `vite.config.ts` 中的别名指向 `@nativescript/web-adapter`。
- 常见的 XML 布局标签会转换为 HTML（例如 `GridLayout` -> `div`）。
- 原生事件修饰（如 `@tap`）会转换为 `@click`，部分绑定会被调整为在 Vue Web 环境下可用的形式。

这些转换是保守的，主要覆盖示例中的常见用法；如果你的项目中使用了更复杂的原生 API，可能需要在生成后进行手动调整。

## 生成项目结构示例

```
platforms/web/
  package.json          # 生成（包含 vue + vue-router）
  vite.config.ts        # 生成（server.port = 3005）
  index.html
  src/
    App.vue
    app.ts
    router/index.ts
    globals.ts          # browser shim
    components/
      Home.vue          # 你的 Home 组件（复制并转换）
      websfc/           # web 适配器组件（ActionBar/Page/Frame...）
```

## 更改开发端口

生成器会在模板中把 `server.port` 设置为 `3005` 并启用 `strictPort: true`，以避免端口冲突。要修改端口：

- 编辑生成器模板 `nativescript-web-adapter/tools/create-web-platform.js` 中的 `server` 配置；或
- 在生成后直接修改 `platforms/web/vite.config.ts`。

当 `strictPort` 为 `true` 且端口已被占用时，Vite 会失败而不是自动切换端口；如果你希望自动回退，请设置 `strictPort: false`。

## 故障排查与建议

- 如果 `platforms/web/package.json` 中缺少 `vue-router`，但生成器创建了 `src/router/index.ts`，请在 `platforms/web` 目录下安装 `vue-router`：

```bash
cd platforms/web
npm install
# 或单独安装 router
npm install vue-router@4
```

- 如果你的应用依赖大量原生 API（例如平台特定插件或原生模块），生成器可能无法自动转换所有逻辑，需要手动修改生成后的代码。



