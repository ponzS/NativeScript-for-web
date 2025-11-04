const fs = require('fs');
const path = require('path');

function createWebPlatformFiles(webDir) {
  const projectRoot = path.dirname(path.dirname(webDir));
  // 创建或更新 package.json
  fs.writeFileSync(path.join(webDir, 'package.json'), JSON.stringify({
    "name": "web-platform",
    "version": "1.0.0",
    "private": true,
    "scripts": {
      "dev": "vite",
      "build": "vue-tsc --noEmit && vite build",
      "preview": "vite preview"
    },
    "dependencies": {
      "vue": "^3.3.4",
      "vue-router": "^4.2.5"
    },
    "devDependencies": {
      "@vitejs/plugin-vue": "^4.2.3",
      "typescript": "^5.0.2",
      "vite": "^4.4.5",
      "vue-tsc": "^1.8.5",
      "autoprefixer": "^10.4.16",
      "postcss": "^8.4.31",
      "tailwindcss": "^3.4.0"
    }
  }, null, 2));

  // index.html
  fs.writeFileSync(path.join(webDir, 'index.html'), `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NS Vue Web</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/app.ts"></script>
  </body>
</html>`);

  // vite.config.ts
  const packageJson = { 
    name: "ns-vue-web-platform",
    private: true,
    scripts: {
      dev: "vite",
      build: "vite build"
    },
    dependencies: {
      "vue": "^3.4.0",
      "vue-router": "^4.2.5"
    },
    devDependencies: {
      "@vitejs/plugin-vue": "^5.0.0",
      "typescript": "^5.0.0",
      "vite": "^5.0.0",
      "autoprefixer": "^10.4.16",
      "postcss": "^8.4.31",
      "tailwindcss": "^3.4.0"
    }
  };
  fs.writeFileSync(
    path.join(webDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  const viteConfig = `import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3005,
    strictPort: false
  }
});`;
  fs.writeFileSync(path.join(webDir, 'vite.config.ts'), viteConfig);

  // postcss & tailwind configs: 复用根配置（如果存在），否则写默认
  const rootPostcss = path.join(projectRoot, 'postcss.config.js');
  const rootTailwind = path.join(projectRoot, 'tailwind.config.js');
  try {
    if (fs.existsSync(rootPostcss)) {
      fs.copyFileSync(rootPostcss, path.join(webDir, 'postcss.config.js'));
    } else {
      const postcssConfig = `module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};`;
      fs.writeFileSync(path.join(webDir, 'postcss.config.js'), postcssConfig);
    }
  } catch (e) {
    console.warn('[web-adapter] 复制 postcss 配置失败，使用默认:', e?.message);
    const postcssConfig = `module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};`;
    fs.writeFileSync(path.join(webDir, 'postcss.config.js'), postcssConfig);
  }
  try {
    if (fs.existsSync(rootTailwind)) {
      fs.copyFileSync(rootTailwind, path.join(webDir, 'tailwind.config.js'));
    } else {
      const tailwindConfig = `/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [\n    "./index.html",\n    "./src/**/*.{vue,js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n};`;
      fs.writeFileSync(path.join(webDir, 'tailwind.config.js'), tailwindConfig);
    }
  } catch (e) {
    console.warn('[web-adapter] 复制 tailwind 配置失败，使用默认:', e?.message);
    const tailwindConfig = `/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [\n    "./index.html",\n    "./src/**/*.{vue,js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n};`;
    fs.writeFileSync(path.join(webDir, 'tailwind.config.js'), tailwindConfig);
  }

  // App.vue（根组件占位，仅渲染 <router-view/>）
  const appVueContent = `<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
// App root component
</script>`;
  const appVuePath = path.join(webDir, 'src', 'App.vue');
  const srcDir = path.join(webDir, 'src');
  if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });
  fs.writeFileSync(appVuePath, appVueContent, 'utf8');
}

module.exports = { createWebPlatformFiles };