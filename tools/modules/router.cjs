const fs = require('fs');
const path = require('path');

function buildRouterFromPages(webDir) {
  const pagesDir = path.join(webDir, 'src', 'pages');
  const lines = [];
  lines.push(`import { createRouter, createWebHistory } from 'vue-router'`);
  let routes = [];
  if (fs.existsSync(pagesDir)) {
    const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isFile()) continue;
      if (!/\.vue$/i.test(entry.name)) continue;
      const base = entry.name.replace(/\.vue$/i, '');
      const importName = toIdentifier(base);
      lines.push(`import ${importName} from '../pages/${entry.name}'`);
      const routePath = base.toLowerCase() === 'index' ? '/' : `/${base}`;
      routes.push(`  { path: '${routePath}', name: '${base}', component: ${importName} }`);
    }
  }
  if (routes.length === 0) {
    lines.push(`import Home from '../components/Home.vue'`);
    routes.push(`  { path: '/', name: 'Home', component: Home }`);
  }
  lines.push('');
  lines.push('const routes = [');
  lines.push(routes.join(',\n'));
  lines.push(']');
  lines.push('');
  lines.push('const router = createRouter({');
  lines.push('  history: createWebHistory(),');
  lines.push('  routes');
  lines.push('})');
  lines.push('');
  lines.push('export default router');
  return lines.join('\n');
}

function toIdentifier(name) {
  let id = name.replace(/[^a-zA-Z0-9_$]/g, '_');
  if (/^[0-9]/.test(id)) id = '_' + id;
  id = id.replace(/(^|_)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
  return id;
}

module.exports = { buildRouterFromPages, toIdentifier };