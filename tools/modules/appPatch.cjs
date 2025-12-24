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

function patchAngularAppForWeb(webDir) {
  try {
    const srcDir = path.join(webDir, 'src');
    const appDir = path.join(srcDir, 'app');
    if (!fs.existsSync(appDir)) {
      console.warn('[web-adapter] 未找到 src/app，跳过 Angular 修补');
      return;
    }

    const appHtml = path.join(appDir, 'app.component.html');
    if (fs.existsSync(appHtml)) {
      const html = fs.readFileSync(appHtml, 'utf8');
      const next = html.replace(/<\s*page-router-outlet\s*><\s*\/\s*page-router-outlet\s*>/g, '<router-outlet></router-outlet>');
      if (next !== html) fs.writeFileSync(appHtml, next, 'utf8');
    }

    const componentFiles = [];
    walkFiles(appDir, (p) => {
      if (p.endsWith('.component.ts')) componentFiles.push(p);
    });

    for (const filePath of componentFiles) {
      let content = fs.readFileSync(filePath, 'utf8');

      content = content.replace(/import\s+\{\s*PageRouterOutlet\s*\}\s+from\s+['"]@nativescript\/angular['"]\s*;?/g, "import { RouterOutlet } from '@angular/router';");
      content = content.replace(/\bPageRouterOutlet\b/g, 'RouterOutlet');
      content = content.replace(/<\s*page-router-outlet\b/g, '<router-outlet');
      content = content.replace(/<\/\s*page-router-outlet\s*>/g, '</router-outlet>');

      content = removeImportsFromModule(content, '@nativescript/angular');

      if (/\bRouterOutlet\b/.test(content) && !/import\s+\{[^}]*\bRouterOutlet\b[^}]*\}\s+from\s+['"]@angular\/router['"]/.test(content)) {
        content = `import { RouterOutlet } from '@angular/router';\n` + content;
      }

      if (/\bNativeScriptCommonModule\b/.test(content)) {
        if (!/from\s+['"]@angular\/common['"]/.test(content)) {
          content = `import { CommonModule } from '@angular/common';\n` + content;
        }
        content = content.replace(/\bNativeScriptCommonModule\b/g, 'CommonModule');
      }

      if (/\bNativeScriptRouterModule\b/.test(content)) {
        if (!/from\s+['"]@angular\/router['"]/.test(content)) {
          content = `import { RouterModule } from '@angular/router';\n` + content;
        }
        content = content.replace(/\bNativeScriptRouterModule\b/g, 'RouterModule');
      }

      const rel = toPosix(path.relative(path.dirname(filePath), path.join(srcDir, 'components', 'websfc')));
      const importPath = rel.startsWith('.') ? rel : `./${rel}`;
      if (!/nsWebAdapterImports/.test(content)) {
        content = `import { imports as nsWebAdapterImports } from '${importPath}';\n` + content;
      }

      if (/imports\s*:\s*\[/.test(content)) {
        content = content.replace(/imports\s*:\s*\[([\s\S]*?)\]/m, (m, inner) => {
          if (/\.\.\.\s*nsWebAdapterImports/.test(inner)) return m;
          const trimmed = inner.trim();
          const suffix = trimmed.endsWith(',') || trimmed.length === 0 ? '' : ',';
          return `imports: [${inner}${suffix} ...nsWebAdapterImports]`;
        });
      } else {
        content = content.replace(/schemas\s*:\s*\[/m, `imports: [...nsWebAdapterImports],\n  schemas: [`);
        if (!/imports\s*:\s*\[/.test(content)) {
          content = content.replace(/templateUrl\s*:\s*['"][^'"]+['"]\s*,/m, (m) => `${m}\n  imports: [...nsWebAdapterImports],`);
        }
      }

      if (/@Component\(\{[\s\S]*?\bimports\s*:/.test(content) && !/@Component\(\{[\s\S]*?\bstandalone\s*:/.test(content)) {
        if (/\bselector\s*:/.test(content)) {
          content = content.replace(/(\bselector\s*:\s*['"][^'"]+['"]\s*,)/, '$1\n  standalone: true,');
        } else {
          content = content.replace(/@Component\(\{\s*\n?/, (m) => `${m}  standalone: true,\n`);
        }
      }

      fs.writeFileSync(filePath, content, 'utf8');
    }
  } catch (err) {
    console.error('[web-adapter] 修补 Angular 应用时出错:', err);
  }
}

function removeImportsFromModule(code, moduleName) {
  const lines = String(code || '').split(/\r?\n/);
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*import\b/.test(line)) {
      const stmtLines = [line];
      while (i < lines.length - 1 && !/;\s*$/.test(lines[i])) {
        i++;
        stmtLines.push(lines[i]);
      }
      const stmt = stmtLines.join('\n');
      if (new RegExp(`from\\s+['"]${escapeRegExp(moduleName)}['"]`).test(stmt)) {
        continue;
      }
      out.push(...stmtLines);
      continue;
    }
    out.push(line);
  }
  return out.join('\n');
}

function walkFiles(dir, onFile) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(p, onFile);
    else onFile(p);
  }
}

function toPosix(p) {
  return p.split(path.sep).join('/');
}

function escapeRegExp(str) {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = { patchAppForWeb, patchAngularAppForWeb };
