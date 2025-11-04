const fs = require('fs');
const path = require('path');

function patchAppForWeb(webDir) {
  try {
    const appPath = path.join(webDir, 'src', 'app.ts');
    if (!fs.existsSync(appPath)) {
      console.warn('[web-adapter] 未找到 app.ts，跳过 app 修补');
      return;
    }

    // 动态扫描 websfc 组件目录，生成 import 与注册语句
    const websfcDir = path.join(webDir, 'src', 'components', 'websfc');
    const entries = fs.existsSync(websfcDir) ? fs.readdirSync(websfcDir) : [];
    const vueFiles = entries.filter(f => f.endsWith('.vue'));
    const imports = vueFiles.map(f => `import ${path.basename(f, '.vue')} from './components/websfc/${f}';`).join('\n');
    const registers = vueFiles.map(f => `app.component("${path.basename(f, '.vue')}", ${path.basename(f, '.vue')});`).join('\n');
    const content = `${imports}\nimport * as ns from './composables/websfc/index.ts';\nimport { createApp } from 'vue';\nimport { initGlobals } from "./globals";\nimport router from './router';\nimport App from './App.vue';\nimport './app.css';\n\ninitGlobals();\n\nconst app = createApp(App);\n\n// Register web components\n${registers}\n\n// Register global composables for dialogs, frame, page, etc.\napp.config.globalProperties.$ns = ns;\n\napp.use(router);\napp.mount('#app');`;

    fs.writeFileSync(appPath, content, 'utf8');
    console.log('[web-adapter] 已修补 app.ts');
  } catch (err) {
    console.error('[web-adapter] 修补 app.ts 时出错:', err);
  }
}

module.exports = { patchAppForWeb };