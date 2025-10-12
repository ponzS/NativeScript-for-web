# NativeScript for Web

Read this in Chinese: [README_ZH.md](README_ZH.md)

Map common NativeScript UI tags to browser-ready Vue 3 components, enabling the same SFC to run on both Native and Web. Inspired by React Native for Web.

— Ideal for quickly previewing, debugging, or shipping a simplified web version of existing NativeScript Vue projects.

## Features

- Same tag names: use `Page`, `ActionBar`, `GridLayout`, `Label`, `Button`, `ImageCacheIt` directly in SFCs.
- Prop and event mapping: common props/events are translated to DOM (e.g., `tap` → `click`).
- Lightweight implementation: focuses on frequently used layouts and controls.
- Pluggable: registered as a Vue plugin; no invasive app changes.

## Installation

Install the adapter from npm:

```
npm install nativescript-web-adapter
```

This package expects `vue` as a peer dependency. If not already present:

```
npm install vue@^3.4.0
```

## Quick Start (Web)

1) Register the plugin

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

2) Vite aliases (map NS deps to the adapter for browser)

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
      // map SFC imports of nativescript-vue to browser vue
      'nativescript-vue': 'vue',
      // map @nativescript/core types/APIs to adapter core (browser-only)
      '@nativescript/core': 'nativescript-web-adapter/core'
    }
  }
});
```

3) Start the dev server

```bash
npm run dev:web
```

## Usage Example

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

## Component Mapping

- `Page` → DOM `main`
- `ActionBar` → DOM `header`
- `Frame` → DOM `div`
- `Label` → DOM `span`
- `Button` → DOM `button`
- `StackLayout` → DOM `div` (`display:flex; flex-direction:column`)
- `FlexboxLayout` → DOM `div` (`display:flex`; supports `flexDirection`, `justifyContent`, `alignItems`)
- `GridLayout` → DOM `div` (`display:grid`; details below)
- `ImageCacheIt` → DOM `img` (simple replacement; uses `img` with `stretch` support)

## Newly Supported Components

- `ActionItem` → DOM `div` inside `ActionBar`
  - Renders slot content (e.g., a `Button`)
  - Supports `ios.position="right"` to push the item to the right (`margin-left:auto`)

- `ContentView` → DOM `div`
  - A simple container that passes classes and styles through

- `ListView` → DOM `div`
  - Accepts `:items` (array) and renders the default slot for each item
  - Supports `separatorColor` (e.g., `transparent` or `rgba(...)`)
  - Minimal, performant rendering aimed at common list use cases

## Custom CSS Usage

- Built-in base classes are provided for web rendering in `dist/vue.css`.
  - Optional import (recommended for consistent base styles):

```ts
// src/web/main.ts
import 'nativescript-web-adapter/dist/vue.css';
```

- You can define your own classes in `src/app.css` and apply them to NS tags.
  - Example list styling that pairs well with `ListView` and `GridLayout`:

```css
/* src/app.css */
.list-container {}
.list-item { display:grid; grid-template-columns:1fr auto; align-items:center; padding:12px 16px; border-bottom:1px solid rgba(255,255,255,0.12); }
.list-item:hover { background:rgba(255,255,255,0.06); border-radius:12px; }
.list-title { font-size:18px; color:#fff; }
.list-dot { width:20px; height:20px; border-radius:9999px; background:#fff; }
.back-button { padding:8px 12px; color:#fff; font-weight:600; border:2px solid #77c9fa; border-radius:12px; font-size:14px; background:linear-gradient(to bottom, #6544b7, #251353); }
```

- Example usage in a SFC:

```vue
<template>
  <Page>
    <ActionBar title="Details">
      <!-- Web-only back button; native uses system back -->
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

## Extending the Adapter & Contributing

### Add a New Component

1. Create the component under `src/vue/components/YourComponent.ts` using `defineComponent` and map props/events to DOM.
2. Register it in `src/vue/index.ts` under the plugin so it becomes available in Vue.
3. Export its types in `src/vue/index.types.ts` to keep type parity.
4. Add baseline styles in `src/vue/adapter.css` (class name convention: `.ns-your-component`).
5. Build the adapter with `npm run build` and test in the demo project (`npm run dev:web`).

### PR Guidelines

- Keep implementations lightweight and focused on common use cases.
- Preserve NativeScript semantics where reasonable; document any deviations.
- Map events consistently (e.g., `tap` → `click`).
- Include type exports, baseline CSS, and an example snippet in the docs.
- Add or update tests where applicable (`tests/*`).
- Keep code style consistent with existing files; avoid introducing heavy dependencies.

## GridLayout: Design & Behavior

- Container styles
  - `display: grid`
  - `grid-template-columns`: defaults to single column `1fr` when `columns` is not provided
  - `grid-template-rows`: parsed from `rows` (optional)
  - `grid-auto-flow: row`: auto-stacks vertically by rows
  - `width: 100%`, `height: 100%`

- Track parsing (`rows`/`columns`)
  - Comma-separated: e.g., `"auto,*"`, `"*,auto,*"`
  - `*` → `1fr`, `auto` → `auto`, numbers → pixels (e.g., `60` → `60px`)
  - Example: `rows="auto,*"` → `grid-template-rows: auto 1fr`

- Child placement & span
  - Indexing: NativeScript is 0-based; CSS Grid is 1-based. `row=0` → `grid-row-start:1`, `col=0` → `grid-column-start:1`
  - Default column: if `col`/`column` is not set, we enforce `grid-column-start:1` to avoid implicit multi-column side-by-side layout
  - Span: `rowSpan` → `grid-row-end: span n`; `colSpan` → `grid-column-end: span n`

- Alignment
  - Horizontal: `horizontalAlignment` (`left|center|right|stretch`) → `justify-self`
  - Vertical: `verticalAlignment` (`top|center|bottom|stretch`) → `align-self`

## Other Props & Events

- Events: `tap` → DOM `click` (the adapter emits `tap` on `onClick`)
- `Label` alignment: `horizontalAlignment="center"` → `text-align:center`
- `ImageCacheIt`:
  - `stretch="aspectFill"` → `object-fit: cover`
  - `stretch="aspectFit"` → `object-fit: contain`
  - default styles: `width:100%`, `display:block`, `object-position:center`

## Layout Tips (Aligning Web with iOS)

- Make the outer `main` full viewport height: `main { height: 100vh; }` to match Grid remaining-space behavior.
- For full-width images: use `style="width:100dvw"` or container `width:100%`; ensure no implicit columns. Optionally set inner `GridLayout` `columns="1*"`.
- If children appear side-by-side: check if `columns` is declared or `col` is set; by default we fix to column 1.

## Compatibility & Limitations

- The adapter focuses on common UI/layout features; complex native measurements, animations, and platform APIs are out of scope for the browser.
- Visual differences (fonts, line height, shadows) exist between iOS/Android and browsers; tweak via Tailwind/CSS.
- Events follow the DOM model; certain native events are not applicable.

## Development & Build

- Build the adapter: `npm run build` (outputs `dist/index.js`, `dist/vue.js`, `dist/core.js` and types)
- Run tests: `npm run test`
- Demo project in this repo: `npm run dev:web` starts the browser preview.

## Package Structure (Adapter Subpackage)

- `src/vue/components/*`: implementation of UI components
- `src/vue/index.ts`: Vue plugin entry (registers all components)
- `src/core`: minimal types/placeholders for `@nativescript/core` in browser
- `dist/*`: build outputs and type declarations

## Design Rationale

- Keep NativeScript tag parity to reduce migration and dual-edge maintenance costs.
- Use standard web layout primitives (Flex/Grid) for debuggability and extensibility.
- Clear mapping rules: 0→1 index conversion, `*`/`auto`/px track parsing, and alignment/span mapping — minimal surprises.

## Feedback & Improvements

Try it in your projects and share feedback. If you need more components or refined behaviors (absolute positioning, interactions), add implementations under `src/vue/components` following the existing pattern, and submit a PR.
