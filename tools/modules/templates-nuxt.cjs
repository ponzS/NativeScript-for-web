const fs = require('fs');
const path = require('path');

function createNuxtPlatformFiles(nuxtDir) {
  const projectRoot = path.dirname(path.dirname(nuxtDir));

  const pkg = {
    name: 'ns-nuxt-platform',
    private: true,
    scripts: {
      dev: 'nuxt dev',
      build: 'nuxt build',
      preview: 'nuxt preview'
    },
    dependencies: {
      nuxt: '^3.12.0'
    },
    devDependencies: {
      typescript: '^5.0.0',
      tailwindcss: '^3.4.0',
      postcss: '^8.4.31',
      autoprefixer: '^10.4.16'
    }
  };
  fs.writeFileSync(path.join(nuxtDir, 'package.json'), JSON.stringify(pkg, null, 2));

  const appVue = `<template>\n  <NuxtPage />\n</template>`;
  fs.writeFileSync(path.join(nuxtDir, 'app.vue'), appVue);

  const nuxtConfig = `import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  components: [{ path: '~/components/websfc', global: true }],
  css: ['~/assets/app.css']
})`;
  fs.writeFileSync(path.join(nuxtDir, 'nuxt.config.ts'), nuxtConfig);

  const pluginsDir = path.join(nuxtDir, 'plugins');
  if (!fs.existsSync(pluginsDir)) fs.mkdirSync(pluginsDir, { recursive: true });
  const pluginContent = `import { initGlobals } from '~/globals'
import * as ns from '~/composables/websfc/index.ts'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$ns = ns
  initGlobals()
})`;
  fs.writeFileSync(path.join(pluginsDir, 'ns-web.ts'), pluginContent);

  const rootPostcss = path.join(projectRoot, 'postcss.config.js');
  const rootTailwind = path.join(projectRoot, 'tailwind.config.js');
  if (fs.existsSync(rootPostcss)) {
    fs.copyFileSync(rootPostcss, path.join(nuxtDir, 'postcss.config.js'));
  } else {
    const postcssConfig = `module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};`;
    fs.writeFileSync(path.join(nuxtDir, 'postcss.config.js'), postcssConfig);
  }
  if (fs.existsSync(rootTailwind)) {
    fs.copyFileSync(rootTailwind, path.join(nuxtDir, 'tailwind.config.js'));
  } else {
    const tailwindConfig = `/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [\n    './app.vue',\n    './components/**/*.{vue,js,ts}',\n    './pages/**/*.{vue,js,ts}',\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n};`;
    fs.writeFileSync(path.join(nuxtDir, 'tailwind.config.js'), tailwindConfig);
  }
}

module.exports = { createNuxtPlatformFiles };
