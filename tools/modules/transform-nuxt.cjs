function transformNuxtContent(content, srcPath) {
  if (srcPath && /globals\.ts$/.test(srcPath)) {
    return "export function initGlobals() {}\n";
  }

  content = content.replace(/from\s+['\"](nativescript-vue)['\"]/g, "from 'vue'");
  content = content.replace(/import\s+.*@nativescript\/core.*;?\n?/g, '');
  content = content.replace(/import\s+.*nativescript-web-adapter.*;?\n?/g, '');
  content = content.replace(/declare\s+var\s+com[:\s\w]*;?\n?/g, '');

  content = content.replace(/function\s+enterNow\([^\)]*\)\s*\{[\s\S]*?\}\n?/g, "function enterNow() { window.open(\"https://viteconf.amsterdam\", '_blank'); }\n");
  content = content.replace(/function\s+enterNow\([^\)]*\)\s*\{[\s\S]*?\}\s*[\s\S]*?let interval/g, 'function enterNow() { window.open("https://viteconf.amsterdam", "_blank"); }\n\nlet interval');

  if (srcPath && /\.vue$/i.test(srcPath)) {
    const hasNavigateTo = /\$navigateTo\(\s*[A-Za-z_][A-Za-z0-9_]*\s*\)/.test(content);
    const hasNavigateBack = /\$navigateBack\(\s*\)/.test(content);
    const hasFrameNav = /Frame\.(navigate|goBack)\(/.test(content);
    const hasFrameTopmost = /Frame\.topmost\(\)\.(navigate|goBack)\(/.test(content);
    if (hasNavigateTo || hasNavigateBack || hasFrameNav || hasFrameTopmost) {
      content = content.replace(/(?:this\.|[A-Za-z_$]+\?\.|[A-Za-z_$]+\.)*\$navigateTo\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)/g, "router.push('/$1')");
      content = content.replace(/(?:this\.|[A-Za-z_$]+\?\.|[A-Za-z_$]+\.)*\$navigateBack\(\s*\)/g, 'router.go(-1)');
      content = content.replace(/Frame\.goBack\(\s*\)/g, 'router.go(-1)');
      content = content.replace(/Frame\.navigate\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)/g, "router.push('/$1')");
      content = content.replace(/Frame\.navigate\(\s*['\"]([^'\"]+)['\"]\s*\)/g, (m, p1) => {
        const base = String(p1).split('/')?.pop()?.replace(/\.vue$/i, '') || p1;
        return `router.push('/${base}')`;
      });
      content = content.replace(/Frame\.navigate\(\s*\{[\s\S]*?moduleName\s*:\s*['\"]([^'\"]+)['\"][\s\S]*?\}\s*\)/g, (m, p1) => {
        const base = String(p1).split('/')?.pop()?.replace(/\.vue$/i, '') || p1;
        return `router.push('/${base}')`;
      });
      content = content.replace(/Frame\.topmost\(\)\.goBack\(\s*\)/g, 'router.go(-1)');
      content = content.replace(/Frame\.topmost\(\)\.navigate\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)/g, "router.push('/$1')");
      content = content.replace(/Frame\.topmost\(\)\.navigate\(\s*['\"]([^'\"]+)['\"]\s*\)/g, (m, p1) => {
        const base = String(p1).split('/')?.pop()?.replace(/\.vue$/i, '') || p1;
        return `router.push('/${base}')`;
      });
      content = content.replace(/Frame\.topmost\(\)\.navigate\(\s*\{[\s\S]*?moduleName\s*:\s*['\"]([^'\"]+)['\"][\s\S]*?\}\s*\)/g, (m, p1) => {
        const base = String(p1).split('/')?.pop()?.replace(/\.vue$/i, '') || p1;
        return `router.push('/${base}')`;
      });
      if (!/useRouter\s*\(/.test(content)) {
        content = content.replace(/(<script[^>]*>)/i, "$1\nimport { useRouter } from 'vue-router';\nconst router = useRouter();\n");
      }
    }
  }

  content = content.replace(/.*(nativeApp|android\.|UIApplication|NSURL|NSDictionary|com\.tns|intent|startActivity|android\.content).*/g, '');
  content = content.replace(/else\s*\{[\s\S]*?\}/g, '');
  content = content.replace(/\/\s+\/>/g, '\/>');
  content = content.replace(/registerElement\([^)]+\);?\n?/g, '');
  if (content.includes('__ANDROID__') || content.includes('Application.launchEvent')) {
    content = content.replace(/Application\.on[\s\S]*?}\);/g, '');
  }

  return content;
}

module.exports = { transformNuxtContent };
