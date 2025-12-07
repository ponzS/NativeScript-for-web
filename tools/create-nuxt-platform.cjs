const fs = require('fs');
const path = require('path');
const copy = require('./modules/copy.cjs');
const transformNuxt = require('./modules/transform-nuxt.cjs');
const templatesNuxt = require('./modules/templates-nuxt.cjs');

function createNuxtPlatform(options = {}) {
  const adapterDir = path.resolve(__dirname, '..');
  const projectRoot = options.projectRoot ? path.resolve(options.projectRoot) : process.cwd();
  const platformsDir = path.join(projectRoot, 'platforms');
  const nuxtDir = path.join(platformsDir, 'nuxt');
  const srcDir = path.join(projectRoot, 'src');

  if (!fs.existsSync(nuxtDir)) {
    fs.mkdirSync(nuxtDir, { recursive: true });
  }

  const adapterComponentsDir = path.join(adapterDir, 'core', 'components');
  const adapterComposablesDir = path.join(adapterDir, 'core', 'composables');
  const targetComponentsDir = path.join(nuxtDir, 'components', 'websfc');
  const targetComposablesDir = path.join(nuxtDir, 'composables', 'websfc');

  copy.copyAdapterComponents(adapterComponentsDir, targetComponentsDir);
  copy.copyAdapterComposables(adapterComposablesDir, targetComposablesDir);

  const srcPagesDir = path.join(srcDir, 'pages');
  const srcComponentsDir = path.join(srcDir, 'components');
  const targetPagesDir = path.join(nuxtDir, 'pages');
  const targetUserComponentsDir = path.join(nuxtDir, 'components');

  copy.copySourceFiles(srcPagesDir, targetPagesDir, transformNuxt.transformNuxtContent);
  copy.copySourceFiles(srcComponentsDir, targetUserComponentsDir, transformNuxt.transformNuxtContent);

  const srcGlobals = path.join(srcDir, 'globals.ts');
  const nuxtGlobals = path.join(nuxtDir, 'globals.ts');
  if (fs.existsSync(srcGlobals)) {
    const content = fs.readFileSync(srcGlobals, 'utf8');
    const transformed = transformNuxt.transformNuxtContent(content, srcGlobals);
    fs.writeFileSync(nuxtGlobals, transformed, 'utf8');
  }

  const srcCss = path.join(srcDir, 'app.css');
  const assetsDir = path.join(nuxtDir, 'assets');
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });
  if (fs.existsSync(srcCss)) {
    fs.copyFileSync(srcCss, path.join(assetsDir, 'app.css'));
  }

  templatesNuxt.createNuxtPlatformFiles(nuxtDir);
}

module.exports = { createNuxtPlatform };

if (require.main === module) {
  createNuxtPlatform();
}

