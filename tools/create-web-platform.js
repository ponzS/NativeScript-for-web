// 文件扩展名应为 .cjs 以兼容 CommonJS require

const fs = require('fs');
const path = require('path');

// CommonJS export will be set at the end of the file
function createWebPlatform(options = {}) {
  const cwd = process.cwd();
  const platformsDir = path.join(cwd, 'platforms');
  const webDir = path.join(platformsDir, 'web');
  const srcDir = path.join(cwd, 'src');
  
  // 确保platforms/web目录存在
  if (!fs.existsSync(webDir)) {
    fs.mkdirSync(webDir, { recursive: true });
  }

  // 复制源代码到web平台
  copySourceFiles(srcDir, path.join(webDir, 'src'));
  // 复制适配器的 composables 到 web 项目的 src/composables/websfc
  try {
    const adapterComposablesDir = path.join(__dirname, '..', 'core', 'composables');
    const targetComposablesDir = path.join(webDir, 'src', 'composables', 'websfc');
    copyAdapterDir(adapterComposablesDir, targetComposablesDir);
  } catch (err) {
    console.warn('[web-adapter] 复制适配器 composables 失败:', err);
  }
  
  // 创建web平台特定的文件
  createWebPlatformFiles(webDir);
  
  // 安装依赖
  installDependencies(webDir);
}

function copyAdapterDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    // no composables to copy
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
      copyAdapterDir(srcPath, destPath);
    } else {
      try {
        fs.copyFileSync(srcPath, destPath);
      } catch (err) {
        console.error('[web-adapter] 复制文件失败:', srcPath, err);
      }
    }
  }
}

function copySourceFiles(src, dest) {
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
      // 转换并复制文件
      let content = fs.readFileSync(srcPath, 'utf8');
      content = transformContent(content);
      fs.writeFileSync(destPath, content);
    }
  }
}

function transformContent(content) {
  // 将nativescript特定的导入替换为web版本
  content = content.replace(/from\s+['"](nativescript-vue)['"]/g, "from 'vue'");
  content = content.replace(/from\s+['"]([@]nativescript\/core)['"]/g, "from 'nativescript-web-adapter'");
  
  // 移除registerElement调用
  content = content.replace(/registerElement\([^)]+\);?\n?/g, '// registerElement removed for web\n');
  
  // 移除平台特定代码
  if (content.includes('__ANDROID__') || content.includes('Application.launchEvent')) {
    content = content.replace(/Application\.on[\s\S]*?}\);/g, '');
  }
  
  return content;
}

function createWebPlatformFiles(webDir) {
  // 创建index.html
  const indexHtml = `<!DOCTYPE html>
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
</html>`;

  fs.writeFileSync(path.join(webDir, 'index.html'), indexHtml);

  // 创建web平台的package.json
  const packageJson = {
    name: "ns-vue-web-platform",
    private: true,
    scripts: {
      dev: "vite",
      build: "vite build"
    },
    dependencies: {
      "vue": "^3.4.0",
      "nativescript-web-adapter": "file:../../nativescript-web-adapter"
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

  // 创建vite.config.ts（设置 dev server 端口为 3005，避免冲突）
  const viteConfig = `import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@nativescript/core': 'nativescript-web-adapter'
    }
  },
  server: {
    port: 3005,
    strictPort: true
  }
});`;

  fs.writeFileSync(path.join(webDir, 'vite.config.ts'), viteConfig);

  // 创建postcss.config.js
  const postcssConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`;

  fs.writeFileSync(path.join(webDir, 'postcss.config.js'), postcssConfig);

  // 创建tailwind.config.js
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

module.exports = {
  createWebPlatform
};