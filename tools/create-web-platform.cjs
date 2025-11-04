console.log('[web-adapter] create-web-platform.cjs 脚本已启动');
const fs = require('fs');
const path = require('path');

// 模块入口（全部实现下沉到 modules/*）
const copy = require('./modules/copy.cjs');
const transform = require('./modules/transform.cjs');
const routerGen = require('./modules/router.cjs');
const appPatch = require('./modules/appPatch.cjs');
const templates = require('./modules/templates.cjs');

function createWebPlatform(options = {}) {
  const adapterDir = path.resolve(__dirname, '..');
  // 当作为 node_modules 使用时，项目根应为当前工作目录
  const projectRoot = options.projectRoot ? path.resolve(options.projectRoot) : process.cwd();
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

    // 1) 复制源码（仅脚本层转换，保留模板标签）
    copy.copySourceFiles(srcDir, path.join(webDir, 'src'), transform.transformContent);
    console.log('[web-adapter] 已复制 src 源代码');

    // 2) 复制适配器 web 组件与 composables
    const adapterComponentsDir = path.join(adapterDir, 'core', 'components');
    const targetComponentsDir = path.join(webDir, 'src', 'components', 'websfc');
    copy.copyAdapterComponents(adapterComponentsDir, targetComponentsDir);
    console.log('[web-adapter] 已复制适配器组件到 websfc');

    const adapterComposablesDir = path.join(adapterDir, 'core', 'composables');
    const targetComposablesDir = path.join(webDir, 'src', 'composables', 'websfc');
    copy.copyAdapterComposables(adapterComposablesDir, targetComposablesDir);
    console.log('[web-adapter] 已复制适配器 composables 到 websfc');

    // 3) 写入 web 项目模板（index.html、package.json、vite.config、postcss、tailwind、App.vue）
    templates.createWebPlatformFiles(webDir);
    console.log('[web-adapter] 已生成 web 平台模板与配置');

    // 4) 生成路由（根据 pages 目录）
    const routerDirPath = path.join(webDir, 'src', 'router');
    if (!fs.existsSync(routerDirPath)) {
      fs.mkdirSync(routerDirPath, { recursive: true });
    }
    const routerContent = routerGen.buildRouterFromPages(webDir);
    fs.writeFileSync(path.join(routerDirPath, 'index.ts'), routerContent, 'utf8');
    console.log('[web-adapter] 已创建路由配置');

    // 5) 修补 app.ts：注册所有 Web 适配组件并挂载应用
    appPatch.patchAppForWeb(webDir);
    console.log('[web-adapter] 正在安装依赖项...');

    // 如需安装依赖，可在此调用（默认跳过以加快生成速度）
    // installDependencies(webDir);
  } catch (err) {
    console.error('[web-adapter] 生成 web 平台时出错:', err);
  }
}

module.exports = { createWebPlatform };

if (require.main === module) {
  createWebPlatform();
}