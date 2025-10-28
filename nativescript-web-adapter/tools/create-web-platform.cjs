console.log('[web-adapter] create-web-platform.cjs 脚本已启动');
const fs = require('fs');
const path = require('path');

function createWebPlatform(options = {}) {
  // 适配器目录（本文件所在目录的上级）
  const adapterDir = path.resolve(__dirname, '..');
  // 项目根目录（适配器目录的上级）
  const projectRoot = path.resolve(adapterDir, '..');
  const platformsDir = path.join(projectRoot, 'platforms');
  const webDir = path.join(platformsDir, 'web');
  const srcDir = path.join(projectRoot, 'src');
  console.log('[web-adapter] 项目根目录:', projectRoot);
  console.log('[web-adapter] platforms 目录:', platformsDir);
  console.log('[web-adapter] web 目录:', webDir);
  console.log('[web-adapter] src 目录:', srcDir);
  try {
    if (!fs.existsSync(webDir)) {
      fs.mkdirSync(webDir, { recursive: true });
      console.log('[web-adapter] 已创建 web 目录');
    } else {
      console.log('[web-adapter] web 目录已存在');
    }
    // 复制源代码到web平台
    copySourceFiles(srcDir, path.join(webDir, 'src'));
    console.log('[web-adapter] 已复制 src 源代码');
    // 复制适配器中的 web 组件到 web 项目的 websfc 目录
    try {
      const adapterComponentsDir = path.join(adapterDir, 'core', 'components');
      const targetComponentsDir = path.join(webDir, 'src', 'components', 'websfc');
      copyAdapterComponents(adapterComponentsDir, targetComponentsDir);
      console.log('[web-adapter] 已复制适配器组件到 web 项目的 websfc 目录');
    } catch (err) {
      console.warn('[web-adapter] 复制适配器组件失败:', err);
    }
    // 复制适配器的 composables 到 web 项目的 src/composables/websfc
    try {
      const adapterComposablesDir = path.join(adapterDir, 'core', 'composables');
      const targetComposablesDir = path.join(webDir, 'src', 'composables', 'websfc');
      copyAdapterComposables(adapterComposablesDir, targetComposablesDir);
      console.log('[web-adapter] 已复制适配器 composables 到 websfc');
    } catch (err) {
      console.warn('[web-adapter] 复制适配器 composables 失败:', err);
    }
    
    // 创建 App.vue
    try {
      const appVueContent = `<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
// App root component
</script>`;
      fs.writeFileSync(path.join(webDir, 'src', 'App.vue'), appVueContent, 'utf8');
      console.log('[web-adapter] 已创建 App.vue');
    } catch (err) {
      console.warn('[web-adapter] 创建 App.vue 失败:', err);
    }

    // 创建路由配置
    try {
      const routerDirPath = path.join(webDir, 'src', 'router');
      if (!fs.existsSync(routerDirPath)) {
        fs.mkdirSync(routerDirPath, { recursive: true });
      }
      const routerContent = `import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router`;
      fs.writeFileSync(path.join(routerDirPath, 'index.ts'), routerContent, 'utf8');
      console.log('[web-adapter] 已创建路由配置');
    } catch (err) {
      console.warn('[web-adapter] 创建路由配置失败:', err);
    }
    // 创建web平台特定的文件
    createWebPlatformFiles(webDir);
    console.log('[web-adapter] 已生成 web 平台配置文件');
    // 修补 app.ts，注册组件并替换 start -> mount
    try {
      patchAppForWeb(webDir);
    } catch (err) {
      console.warn('[web-adapter] 修补 app.ts 时出错:', err);
    }
    // 安装依赖
  // installDependencies(webDir);
  // console.log('[web-adapter] 已安装依赖');
  } catch (err) {
    console.error('[web-adapter] 生成 web 平台时出错:', err);
  }
}

function copyAdapterComponents(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    console.warn('[web-adapter] 适配器组件目录不存在:', srcDir);
    return;
  }
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
      copyAdapterComponents(srcPath, destPath);
    } else {
      try {
        fs.copyFileSync(srcPath, destPath);
      } catch (err) {
        console.error('[web-adapter] 复制组件失败:', srcPath, err);
      }
    }
  }
}

function copyAdapterComposables(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    console.warn('[web-adapter] 适配器 composables 目录不存在:', srcDir);
    return;
  }
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
      copyAdapterComposables(srcPath, destPath);
    } else {
      try {
        fs.copyFileSync(srcPath, destPath);
      } catch (err) {
        console.error('[web-adapter] 复制 composable 文件失败:', srcPath, err);
      }
    }
  }
}

function patchAppForWeb(webDir) {
  try {
    const appPath = path.join(webDir, 'src', 'app.ts');
    if (!fs.existsSync(appPath)) {
      console.warn('[web-adapter] 未找到 app.ts，跳过 app 修补');
      return;
    }
    
    // 使用新的 app.ts 模板
    const content = `import ActionBar from './components/websfc/ActionBar.vue';
import Page from './components/websfc/Page.vue';
import Frame from './components/websfc/Frame.vue';
import { createApp } from 'vue';
import { initGlobals } from "./globals";
import router from './router';
import App from './App.vue';

initGlobals();

const app = createApp(App);

// Register web components
app.component("ActionBar", ActionBar);
app.component("Page", Page);
app.component("Frame", Frame);

app.use(router);
app.mount('#app');`;
    
    fs.writeFileSync(appPath, content, 'utf8');
    console.log('[web-adapter] 已修补 app.ts');
  } catch (err) {
    console.error('[web-adapter] 修补 app.ts 时出错:', err);
  }
}

function copySourceFiles(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn('[web-adapter] 源代码目录不存在:', src);
    return;
  }
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copySourceFiles(srcPath, destPath);
    } else {
      try {
        let content = fs.readFileSync(srcPath, 'utf8');
        content = transformContent(content, srcPath);
        fs.writeFileSync(destPath, content);
      } catch (err) {
        console.error('[web-adapter] 复制文件失败:', srcPath, err);
      }
    }
  }
}

function transformContent(content, srcPath) {
  // 仅对 globals.ts 使用 web shim（避免把 Vue 组件覆盖为 shim）
  if (srcPath && /globals\.ts$/.test(srcPath)) {
    return "export function initGlobals() { /* web shim: no-op */ }\n";
  }
  content = content.replace(/from\s+['"](nativescript-vue)['"]/g, "from 'vue'");
  // 移除对 @nativescript/core 的导入（替换为本地 web 组件）
  content = content.replace(/import\s+.*@nativescript\/core.*;?\n?/g, '');
  // 移除对 @nativescript/web-adapter 的导入（生成的 web 项目应使用本地组件）
  content = content.replace(/import\s+.*@nativescript\/web-adapter.*;?\n?/g, '');
  // 移除 declare var com 等原生声明
  content = content.replace(/declare\s+var\s+com[:\s\w]*;?\n?/g, '');
  // 将原生打开链接的函数替换为 web 实现（针对示例中的 enterNow）
  content = content.replace(/function\s+enterNow\([^\)]*\)\s*\{[\s\S]*?\}\n?/g, "function enterNow() { window.open(\"https://viteconf.amsterdam\", '_blank'); }\n");
  // 如果替换后还有残留（例如复杂的 if/else 原生分支），移除从 enterNow 到 let interval 之间的所有内容并插入简化实现
  content = content.replace(/function\s+enterNow\([^\)]*\)\s*\{[\s\S]*?\}\s*[\s\S]*?let interval/g, 'function enterNow() { window.open("https://viteconf.amsterdam", \'' + '_blank' + '\'); }\n\nlet interval');
  // 将 GridLayout 转为 div
  content = content.replace(/<GridLayout(.*?)>/g, '<div$1>');
  content = content.replace(/<\/GridLayout>/g, '</div>');
  // 将 Label 的 :text 绑定转换为 Mustache 内容
  content = content.replace(/<Label[^>]*:text=\"([^\"]+)\"[^>]*\/>/g, '<div class="label">{{ $1 }}</div>');
  content = content.replace(/<Label[^>]*text=\"([^\"]+)\"[^>]*\/>/g, '<div class="label">$1</div>');
  // 将 Button 的 @tap 转为 @click
  content = content.replace(/<Button([^>]*)@tap=\"([^\"]+)\"([^>]*)>/g, '<button$1 @click="$2"$3>');
  content = content.replace(/<\/Button>/g, '</button>');
  // 将 ImageCacheIt 转为 img
  content = content.replace(/<ImageCacheIt([^>]*)src=\"([^\"]+)\"([^>]*)\/?>/g, '<img$1 src="$2"$3 />');
  // 移除常见原生平台残留代码行
  content = content.replace(/.*(nativeApp|android\.|UIApplication|NSURL|NSDictionary|com\.tns|intent|startActivity|android\.content).*/g, '');
  // 移除 else {...} 块残留
  content = content.replace(/else\s*\{[\s\S]*?\}/g, '');
  // 修复 img 标签可能产生的冗余空格 '/ />' -> '/>'
  content = content.replace(/\/\s+\/>/g, '/>');
  content = content.replace(/registerElement\([^)]+\);?\n?/g, '// registerElement removed for web\n');
  if (content.includes('__ANDROID__') || content.includes('Application.launchEvent')) {
    content = content.replace(/Application\.on[\s\S]*?}\);/g, '');
  }
  return content;
}

function createWebPlatformFiles(webDir) {
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

  // 创建 index.html
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

  // 创建 vite.config.ts
//   const viteConfig = `import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import path from 'path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src')
//     }
//   }
// })`;
//   fs.writeFileSync(path.join(webDir, 'vite.config.ts'), viteConfig);
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
    strictPort: true
  }
});`;
  fs.writeFileSync(path.join(webDir, 'vite.config.ts'), viteConfig);
  const postcssConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`;
  fs.writeFileSync(path.join(webDir, 'postcss.config.js'), postcssConfig);
  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`;
  fs.writeFileSync(path.join(webDir, 'tailwind.config.js'), tailwindConfig);
}

function installDependencies(webDir) {
  const { execSync } = require('child_process');
  execSync('npm install', { cwd: webDir, stdio: 'inherit' });
}

// CommonJS export for Node compatibility
module.exports = { createWebPlatform };

// 自动执行主方法
if (require.main === module) {
  createWebPlatform();
}
