<!-- 快速跳转：查看中文文档 -->
[查看中文文档](README.zh-CN.md)

# NativeScript Vue with Vite Demo

Play around with NativeScript Vue and Vite.

https://github.com/user-attachments/assets/5fd4f6d6-d849-42b5-9437-a4c41ed9a4d5

*Prerelease features coming to NativeScript v9.*

Install the prerelease cli: `npm install -g nativescript@alpha`

Then setup the repo:
```
npm install
```

## Develop with HMR

This will start Vite dev server and open a socket to the NativeScript app to develop with HMR for quick edits.

```
npm run dev:web

// Or...

npm run dev:ios

// Or...

# NativeScript Vue with Vite Demo

This repository demonstrates a workflow that can generate a pure Vue (web) project from a NativeScript + Vue codebase using the included generator. It also contains a working demo app and tooling to run the generated web project with Vite.

## Quick setup

Install dependencies for the main repo:

```bash
npm install
```

To generate the web platform and run the generated web app (this runs the generator, installs the generated project's deps and starts Vite):

```bash
npm run dev:web
```

Notes:
- The generator produces files under `platforms/web`.
- The generated Vite dev server is configured to run on port 3005 by default to avoid conflicts with the main project's Vite instance.

## What the generator does (implementation summary)

The generator lives in `nativescript-web-adapter/tools/create-web-platform.*` and performs these main steps:

- Copies your app `src/` into `platforms/web/src` while applying content transformations to remove NativeScript-only constructs and convert them to web-friendly equivalents.
- Copies web adapter components from the adapter (the adapter's `core/components` folder) into `platforms/web/src/components/websfc`. These are the lightweight web SFC implementations for common NativeScript UI pieces (ActionBar, Page, Frame, etc.).
- Generates a small Vue web scaffold under `platforms/web` including:
	- `App.vue` (root component with a `<router-view />`)
	- `src/router/index.ts` (vue-router setup with `Home.vue` as the default route)
	- `src/app.ts` (entry file wired to use `App.vue`, registers the web adapter components and mounts the app)
	- `vite.config.ts`, `package.json`, `tsconfig.json`, and other standard web tooling files.
- Patches or replaces `src/globals.ts` with a no-op `initGlobals()` shim so code that calls `initGlobals()` keeps working in the browser.

Transformation highlights (examples):

- `nativescript-vue` imports are rewritten to `vue`.
- `@nativescript/core` imports and other native platform imports are removed or redirected to `@nativescript/web-adapter` in the generated project's `vite.config.ts` aliases.
- Common XML-based NativeScript layout tags get converted to HTML equivalents (e.g. `GridLayout` -> `div`).
- `@tap`/`@tap` handlers are converted to `@click` and some component bindings are adapted for Vue web usage.

These transformations are intentionally conservative — they target the common patterns found in this demo and can be extended in the generator.

## Generated project structure

After running the generator you'll find `platforms/web` with a structure similar to:

```
platforms/web/
	package.json          # generated (includes vue + vue-router)
	vite.config.ts        # generated (server.port = 3005)
	index.html
	src/
		App.vue
		app.ts
		router/index.ts
		globals.ts          # shim for browser
		components/
			Home.vue          # your app's Home (copied and transformed)
			websfc/           # web adapter components (ActionBar/Page/Frame...)
```

## How to change the dev port

The generator templates `vite.config.ts` with `server.port: 3005` and `strictPort: true` to avoid accidental port collisions. To change this behavior:

- Edit the generator template at `nativescript-web-adapter/tools/create-web-platform.js` and update the `server` section.
- Or, after generation, modify `platforms/web/vite.config.ts` directly.

If `strictPort` is `true` and the port is already in use, Vite will fail instead of automatically using another port — this is intentional to make conflicts obvious. Set `strictPort: false` if you prefer an automatic fallback.

## Troubleshooting & tips

- If the generated `platforms/web/package.json` is missing `vue-router`, the generator will still create `src/router/index.ts` but you must install `vue-router` inside `platforms/web`:

```bash
cd platforms/web
npm install
# or, to add router if missing:
npm install vue-router@4
```

- The generator aims to produce a working web scaffold for typical app code. If your app uses advanced NativeScript APIs or heavy native-only logic, manual adjustments may be required in the generated code.

