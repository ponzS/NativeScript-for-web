const fs = require('fs');
const path = require('path');

function createWebPlatformFiles(webDir, options = {}) {
  const framework = options.framework || 'vue';
  const projectRoot = path.dirname(path.dirname(webDir));

  const srcDir = path.join(webDir, 'src');
  if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });

  const packageJson = buildPackageJson(framework);
  fs.writeFileSync(path.join(webDir, 'package.json'), JSON.stringify(packageJson, null, 2));

  const indexHtml = buildIndexHtml(framework);
  fs.writeFileSync(path.join(webDir, 'index.html'), indexHtml);

  const viteConfig = buildViteConfig(framework);
  fs.writeFileSync(path.join(webDir, 'vite.config.ts'), viteConfig);

  if (framework === 'angular') {
    writeAngularTsconfigs(webDir);
  }

  copyOrWritePostcssAndTailwind(projectRoot, webDir, framework);

  if (framework === 'vue') {
    const appVueContent = `<template>
  <router-view></router-view>
</template>`;
    fs.writeFileSync(path.join(srcDir, 'App.vue'), appVueContent, 'utf8');
  }
}

function writeAngularTsconfigs(webDir) {
  const tsconfig = {
    compilerOptions: {
      target: 'ES2022',
      useDefineForClassFields: true,
      module: 'ESNext',
      moduleResolution: 'Bundler',
      experimentalDecorators: true,
      strict: true,
      skipLibCheck: true,
      lib: ['ES2022', 'DOM'],
      types: [],
    },
    angularCompilerOptions: {
      strictTemplates: false,
      strictInjectionParameters: false,
    },
  };
  fs.writeFileSync(path.join(webDir, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));

  const appTsconfig = {
    extends: './tsconfig.json',
    include: ['src/**/*.ts'],
  };
  fs.writeFileSync(path.join(webDir, 'tsconfig.app.json'), JSON.stringify(appTsconfig, null, 2));
}

function buildPackageJson(framework) {
  if (framework === 'angular') {
    return {
      name: 'ns-angular-web-platform',
      private: true,
      scripts: {
        dev: 'vite',
        build: 'vite build',
        preview: 'vite preview',
      },
      dependencies: {
        '@angular/common': '^18.2.0',
        '@angular/core': '^18.2.0',
        '@angular/platform-browser': '^18.2.0',
        '@angular/router': '^18.2.0',
        rxjs: '^7.8.1',
        'zone.js': '^0.14.10',
      },
      devDependencies: {
        '@angular/build': '^18.2.0',
        '@analogjs/vite-plugin-angular': '^1.8.0',
        typescript: '^5.0.0',
        vite: '^6.0.0',
        autoprefixer: '^10.4.16',
        postcss: '^8.4.31',
        tailwindcss: '^3.4.0',
      },
    };
  }

  return {
    name: 'ns-vue-web-platform',
    private: true,
    scripts: {
      dev: 'vite',
      build: 'vue-tsc --noEmit && vite build',
      preview: 'vite preview',
    },
    dependencies: {
      vue: '^3.4.0',
      'vue-router': '^4.2.5',
    },
    devDependencies: {
      '@vitejs/plugin-vue': '^5.0.0',
      typescript: '^5.0.0',
      vite: '^5.0.0',
      'vue-tsc': '^2.2.12',
      autoprefixer: '^10.4.16',
      postcss: '^8.4.31',
      tailwindcss: '^3.4.0',
    },
  };
}

function buildIndexHtml(framework) {
  if (framework === 'angular') {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NS Angular Web</title>
  </head>
  <body>
    <ns-app></ns-app>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>`;
  }

  return `<!DOCTYPE html>
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
}

function buildViteConfig(framework) {
  if (framework === 'angular') {
    return `import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(async () => {
  const { default: angular } = await import('@analogjs/vite-plugin-angular');
  return {
    plugins: [angular()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3006,
    strictPort: false
  }
  };
});`;
  }

  return `import { defineConfig } from 'vite';
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
}

function copyOrWritePostcssAndTailwind(projectRoot, webDir, framework) {
  const rootPostcss = path.join(projectRoot, 'postcss.config.js');
  const rootTailwind = path.join(projectRoot, 'tailwind.config.js');

  const defaultPostcss = `module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};`;
  const defaultTailwind = `/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [\n    \"./index.html\",\n    \"./src/**/*.{${framework === 'angular' ? 'html,ts,js,jsx,tsx' : 'vue,js,ts,jsx,tsx'}}\",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n};`;

  try {
    if (fs.existsSync(rootPostcss)) fs.copyFileSync(rootPostcss, path.join(webDir, 'postcss.config.js'));
    else fs.writeFileSync(path.join(webDir, 'postcss.config.js'), defaultPostcss);
  } catch (e) {
    fs.writeFileSync(path.join(webDir, 'postcss.config.js'), defaultPostcss);
  }

  try {
    if (fs.existsSync(rootTailwind)) fs.copyFileSync(rootTailwind, path.join(webDir, 'tailwind.config.js'));
    else fs.writeFileSync(path.join(webDir, 'tailwind.config.js'), defaultTailwind);
  } catch (e) {
    fs.writeFileSync(path.join(webDir, 'tailwind.config.js'), defaultTailwind);
  }
}

module.exports = { createWebPlatformFiles };
