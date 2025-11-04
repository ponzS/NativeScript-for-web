# NativeScript for Web

中文: [README_ZH.md](README_ZH.md)

[![npm](https://img.shields.io/npm/v/nativescript-web-adapter.svg?logo=npm&label=npm)](https://www.npmjs.com/package/nativescript-web-adapter)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This project is a “web adapter” for NativeScript‑Vue‑Vite. It can transform native app code into a pure Vue Web project that runs in the browser (generated under `platforms/web/`).

---

## Quick Start

Temporarily add the local bin to `PATH` to make the `ns-web` command available:

```bash
export PATH="$PWD/node_modules/.bin:$PATH"
```

Compile the web template – install dependencies – start the web project's dev server:

Web

```bash
ns-web dev
```

iOS

```bash
ns run ios
```

Android

```bash
ns run android
```

## Table of Contents

- Background & Goals
- Tech Stack & Dependencies
- Native Side (NativeScript)
- Web Side (Generated Vue Project)
- Web Adapter (Generator & Package)
- Run & Build
- Transformation & Adaptation Rules (Detailed)
- Styles & Tailwind Configuration
- Types & TS Configuration
- HMR (Hot Module Replacement)
- FAQ & Limitations
- Improvements & Upgrade Suggestions

---

## Background & Goals

- Provide a native app example using `nativescript-vue` + `@nativescript/vite`, showcasing development and HMR on iOS/Android.
- Provide a “web adapter” (local package `nativescript-web-adapter`) that scans and transforms the project's `src/` code to generate a Vue application that runs in the browser, enabling quick preview and collaboration on desktop browsers.
- The generated Web project lives in `platforms/web/` with its own Vite config, dependencies, and entry files, without affecting the native side.

---

## Tech Stack & Dependencies

- Native side (NativeScript):
  - `nativescript-vue@3.0.1` (uses `patch-package` to inject HMR helpers)
  - `@nativescript/core@alpha`, `@nativescript/vite@^0.0.1-alpha.7` (NativeScript v9 prerelease)
  - Example native plugins: `@triniwiz/nativescript-image-cache-it`, `@valor/nativescript-websockets`, `nativescript-inappbrowser`
- Web side (generated project):
  - `vue@^3.4`, `vue-router@^4.2`
  - `vite@^5`, `@vitejs/plugin-vue@^5`
  - `tailwindcss@^3.4`, `postcss`, `autoprefixer`
- Adapter package (local):
  - `nativescript-web-adapter/` uses Vite library mode to build UMD/ESM, with built-in generator scripts and a simple CLI.

---

## Native Side (NativeScript)

- Entry `src/app.ts`:
  - Starts the native app via `createApp(Home).start()` from `nativescript-vue`.
  - Registers the native element `ImageCacheIt`.
  - On Android, uses `Application.on(Application.launchEvent)` to adjust system status/navigation bar styles.
- Page `src/components/Home.vue`:
  - Uses NS layouts and components such as `Frame/Page/ActionBar/GridLayout/Label/Button/ImageCacheIt`.
  - Uses `@tap` to open native links (iOS uses `UIApplication.openURL`, Android uses `Intent`).
  - Maintains a simple counter in `mounted/unmounted` to demonstrate HMR and state refresh.
- Global init `src/globals.ts`:
  - Defines touch animations (iOS: `UIView.animate`, Android: `View.animate`), replaced by a no‑op shim on the Web side.
- Native Vite config `vite.config.ts`:
  - `export default defineConfig(({ mode }) => mergeConfig(vueConfig({ mode }), {}))` merges the NS official Vite template to support HMR and build.
- Tailwind & styles:
  - `src/app.css` defines theme colors and gradient classes (`gradient-purple/gradient-light-purple`), and sets the `ActionBar` primary color.
  - `tailwind.config.js` uses `darkMode: ["class", ".ns-dark"]` and disables `preflight` (matching native rendering).

---

## Web Side (Generated Vue Project)

- Output location: `platforms/web/`
- Example structure:

```
platforms/web/
  package.json          # generated (includes vue + vue-router)
  vite.config.ts        # generated (server.port = 3005, strictPort = true)
  index.html
  postcss.config.js
  tailwind.config.js
  src/
    App.vue             # root component (<router-view />)
    app.ts              # entry (register adapter web components, mount '#app')
    router/index.ts     # default route (Home)
    globals.ts          # web shim: initGlobals() no-op
    components/
      Home.vue          # copied and transformed from native
      websfc/           # adapter web components (ActionBar/Page/Frame)
    composables/
      websfc/           # adapter composables (useActionBar/usePage/useFrame)
```

- Default dev URL: `http://localhost:3005/` (if the port is taken, it fails directly; set `strictPort` to `false` in `vite.config.ts` to enable fallback).

---

## Web Adapter (Generator & Package)

- Location: `nativescript-web-adapter/`
- Key files:
  - `tools/create-web-platform.cjs`: generation script (copy, transform, write templates).
  - `core/components/*.vue`: web SFC containers (`ActionBar/Page/Frame`).
  - `core/composables/*.ts`: composables (`useActionBar/usePage/useFrame`).
  - `core/types.ts`: component type aliases and composable type exports.
  - `index.ts`: adapter installer (`install(app)` registers components and attaches `$ns`).
  - `vite.config.ts`: library mode build (`external: ['vue']`, outputs UMD/ESM).
- CLI: `tools/cli.cjs`
  - Local command: `node nativescript-web-adapter/tools/cli.cjs init`
  - Includes a `create:web` NPM script (for the root project to call).

---

## Run & Build

- Native side (with HMR):
  - `npm run dev:ios`: run Vite (port `5173`) and NS iOS debug in parallel.
  - `npm run dev:android`: run Vite and NS Android debug in parallel.
  - `npm run ios` / `npm run android`: use `ns debug` for debugging builds.
- Generate and run the Web project:
  - `npm run dev:web`: run the adapter generator, then enter `platforms/web`, install deps, and start the Web Vite dev server.
  - On first run, it creates `platforms/web` along with required templates and configuration.

---

## Transformation & Adaptation Rules (Detailed)

The generator’s `transformContent()` currently performs only necessary code‑level replacements and no longer replaces NS tags in SFC templates with native HTML tags; the UI is handled by custom web components.

- Import replacements and removals:
  - `from 'nativescript-vue'` → `from 'vue'`
  - Remove `import ... from '@nativescript/core'` (the web build does not load the native runtime)
  - Remove `import ... from '@nativescript/web-adapter'` (the generated web project uses local components directly)
- Platform declarations and native calls cleanup:
  - Remove common native declarations (e.g., `declare var com;`).
  - Remove `Application.on(...)` and similar platform event registrations (including those with `__ANDROID__` or `Application.launchEvent`).
- Template retains NS tags:
  - Components kept and registered on the Web: `ActionBar/Page/Frame/StackLayout/GridLayout/FlexboxLayout/WrapLayout/ScrollView/Label/Button/Image/HtmlView/ImageCacheIt`.
  - Special downgrade: `ImageCacheIt` is implemented as a simple `<img>` on the Web (also provided as a web component of the same name for consistent usage).
- Unified native link opening logic:
  - Replace the example `enterNow(...)` with the browser implementation: `window.open('https://viteconf.amsterdam', '_blank')`.
- Other cleanup:
  - Remove lines involving `android.*`, `UIApplication`, `NSURL`, `NSDictionary`, `intent`, etc.
  - Remove leftover `else { ... }` native branch blocks.
  - Comment out `registerElement(...)` (not needed on the Web).
- Special file handling:
  - Replace `globals.ts` with a no‑op shim: `export function initGlobals() { /* web shim: no-op */ }`.

> Tip: The current transformation is regex‑driven and covers common patterns. For complex conditional branches, dynamic templates, and advanced native APIs, consider moving to TypeScript/Vue SFC AST‑based transformations to improve accuracy and maintainability.

---

## Styles & Tailwind Configuration

- Native side:
  - `src/app.css` uses `@tailwind base/components/utilities` and defines theme styles and gradient backgrounds.
  - `tailwind.config.js`:
    - `content: ["./src/**/*.{css,vue,ts,tsx}"]`
    - `darkMode: ["class", ".ns-dark"]`
    - `corePlugins.preflight: false` (disables browser preset resets)
- Web side (generated):
  - `tailwind.config.js` scans `./index.html` and `./src/**/*.{vue,js,ts,jsx,tsx}` and uses standard browser presets.
  - `postcss.config.js`: enables `tailwindcss` and `autoprefixer`.

---

## Types & TS Configuration

- Root `tsconfig.json`:
  - `strict: true`, target and module set to `esnext`.
  - Path aliases: `~/*`, `@/*` → `src/*`.
  - `vueCompilerOptions.lib = "nativescript-vue"` instructs SFC compilation for the NS environment.
- Type declarations:
  - Native side `types/shims.vue.d.ts`: points `*.vue` types to `nativescript-vue`’s `DefineComponent`.
  - Adapter side `core/env.d.ts`: points `*.vue` types to `vue`’s `DefineComponent`, consistent with browser compilation.
- Adapter `core/types.ts`: provides type aliases for `ActionBar/Page/Frame` components and exports state types for `useActionBar/usePage/useFrame`.

---

## HMR (Hot Module Replacement)

- Native side:
  - Uses `@nativescript/vite` with `vite serve -- --env.hmr` to establish an HMR channel, pushing changes to the device.
  - `patches/nativescript-vue+3.0.1.patch` injects within `app.start`: `globalThis.__NS_VUE_APP__ = app`, helping restore state in deep navigation stacks (e.g., when returning during HMR).
- Web side:
  - Independent Vite (`platforms/web/vite.config.ts`) runs on port `3005`, using standard Vue HMR and route refresh.

---

## FAQ & Limitations

- Native APIs & plugins:
  - Complex native interactions (platform‑specific modules, system services) cannot be automatically converted to the Web. They require manual replacement or browser fallback implementations (e.g., `InAppBrowser` → `window.open` wrapper).
- Layout & semantic mapping is limited:
  - Basic web components are provided (`ActionBar/Page/Frame/Grid/Stack/Flex/Wrap/Scroll/Label/Button/Image/HtmlView/ImageCacheIt`). More detailed property‑to‑style mappings will be added later (e.g., `flexDirection/row`, grid rows/columns).
- Regex‑driven transformation:
  - Edge cases may exist for complex code and templates. Gradually moving to AST‑level transformation is recommended.
- Generator template duplicate writes:
  - The generator currently writes `platforms/web/package.json` twice (with different dependency versions). This can be streamlined into a single write to reduce maintenance cost.

---

## Improvements & Upgrade Suggestions

1. Transformation engine upgrade:
   - Replace regex with TypeScript and Vue SFC AST to precisely handle imports, calls, templates, and directive mappings.
2. Global initialization & animations:
   - Provide optional web animation implementations (CSS transitions/GSAP) for `globals.ts` to keep interaction behavior consistent.
3. Tests & validation:
   - Add unit tests and e2e tests for transformation rules and template generation to ensure stability across different project structures.

---