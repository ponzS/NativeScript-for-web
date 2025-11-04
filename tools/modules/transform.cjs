// Transform module: handle script-level transformations only
// - Replace 'nativescript-vue' imports with 'vue'
// - Remove '@nativescript/core' and adapter imports
// - Clean platform-specific globals and handlers
// - Keep template tags intact for custom web components to handle

function transformContent(content, srcPath) {
  // globals.ts shim for web
  if (srcPath && /globals\.ts$/.test(srcPath)) {
    return "export function initGlobals() { /* web shim: no-op */ }\n";
  }

  // Import replacements
  content = content.replace(/from\s+['\"](nativescript-vue)['\"]/g, "from 'vue'");
  content = content.replace(/import\s+.*@nativescript\/core.*;?\n?/g, '');
  content = content.replace(/import\s+.*nativescript-web-adapter.*;?\n?/g, '');

  // Platform/global cleanup
  content = content.replace(/declare\s+var\s+com[:\s\w]*;?\n?/g, '');

  // Demo-specific native function replacement
  content = content.replace(/function\s+enterNow\([^\)]*\)\s*\{[\s\S]*?\}\n?/g, "function enterNow() { window.open(\"https://viteconf.amsterdam\", '_blank'); }\n");
  content = content.replace(/function\s+enterNow\([^\)]*\)\s*\{[\s\S]*?\}\s*[\s\S]*?let interval/g, 'function enterNow() { window.open("https://viteconf.amsterdam", \'_blank\'); }\n\nlet interval');

  // Navigation: compile-time transform for web
  // $navigateTo(Test) -> router.push('/Test')
  // $navigateBack()   -> router.go(-1)
  // Frame.navigate(...) -> router.push('/...')
  // Frame.goBack()      -> router.go(-1)
  if (srcPath && /\.vue$/i.test(srcPath)) {
    const hasNavigateTo = /\$navigateTo\(\s*[A-Za-z_][A-Za-z0-9_]*\s*\)/.test(content);
    const hasNavigateBack = /\$navigateBack\(\s*\)/.test(content);
    const hasFrameNav = /Frame\.(navigate|goBack)\(/.test(content);
    const hasFrameTopmost = /Frame\.topmost\(\)\.(navigate|goBack)\(/.test(content);
    if (hasNavigateTo || hasNavigateBack || hasFrameNav || hasFrameTopmost) {
      // Replace any property chain ending with $navigateTo(Symbol) -> router.push('/Symbol')
      content = content.replace(/(?:this\.|[A-Za-z_$]+\?\.|[A-Za-z_$]+\.)*\$navigateTo\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)/g, "router.push('/$1')");
      // Replace any property chain ending with $navigateBack() -> router.go(-1)
      content = content.replace(/(?:this\.|[A-Za-z_$]+\?\.|[A-Za-z_$]+\.)*\$navigateBack\(\s*\)/g, 'router.go(-1)');
      // Replace Frame.goBack() -> router.go(-1)
      content = content.replace(/Frame\.goBack\(\s*\)/g, 'router.go(-1)');
      // Replace Frame.navigate(Identifier) -> router.push('/Identifier')
      content = content.replace(/Frame\.navigate\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)/g, "router.push('/$1')");
      // Replace Frame.navigate('pages/Test') or module path -> router.push('/Test')
      content = content.replace(/Frame\.navigate\(\s*['\"]([^'\"]+)['\"]\s*\)/g, (m, p1) => {
        const base = String(p1).split('/')?.pop()?.replace(/\.vue$/i, '') || p1;
        return `router.push('/${base}')`;
      });
      // Replace Frame.navigate({ moduleName: 'pages/Test' }) -> router.push('/Test')
      content = content.replace(/Frame\.navigate\(\s*\{[\s\S]*?moduleName\s*:\s*['\"]([^'\"]+)['\"][\s\S]*?\}\s*\)/g, (m, p1) => {
        const base = String(p1).split('/')?.pop()?.replace(/\.vue$/i, '') || p1;
        return `router.push('/${base}')`;
      });
      // Replace Frame.topmost().goBack() -> router.go(-1)
      content = content.replace(/Frame\.topmost\(\)\.goBack\(\s*\)/g, 'router.go(-1)');
      // Replace Frame.topmost().navigate(Identifier) -> router.push('/Identifier')
      content = content.replace(/Frame\.topmost\(\)\.navigate\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)/g, "router.push('/$1')");
      // Replace Frame.topmost().navigate('pages/Test') -> router.push('/Test')
      content = content.replace(/Frame\.topmost\(\)\.navigate\(\s*['\"]([^'\"]+)['\"]\s*\)/g, (m, p1) => {
        const base = String(p1).split('/')?.pop()?.replace(/\.vue$/i, '') || p1;
        return `router.push('/${base}')`;
      });
      // Replace Frame.topmost().navigate({ moduleName: 'pages/Test' }) -> router.push('/Test')
      content = content.replace(/Frame\.topmost\(\)\.navigate\(\s*\{[\s\S]*?moduleName\s*:\s*['\"]([^'\"]+)['\"][\s\S]*?\}\s*\)/g, (m, p1) => {
        const base = String(p1).split('/')?.pop()?.replace(/\.vue$/i, '') || p1;
        return `router.push('/${base}')`;
      });
      // Ensure router import inside <script> block
      if (!/import\s+router\s+from\s+['\"]@\/router['\"]/.test(content)) {
        content = content.replace(/(<script[^>]*>)/i, "$1\nimport router from '@/router';\n");
      }
    }
  }

  // Remove platform residual lines and blocks
  content = content.replace(/.*(nativeApp|android\.|UIApplication|NSURL|NSDictionary|com\.tns|intent|startActivity|android\.content).*/g, '');
  content = content.replace(/else\s*\{[\s\S]*?\}/g, '');

  // Fix markup formatting artifacts
  content = content.replace(/\/\s+\/>/g, '\/>');

  // Remove registerElement
  content = content.replace(/registerElement\([^)]+\);?\n?/g, '// registerElement removed for web\n');

  // Remove Application.on handlers if present
  if (content.includes('__ANDROID__') || content.includes('Application.launchEvent')) {
    content = content.replace(/Application\.on[\s\S]*?}\);/g, '');
  }

  return content;
}

module.exports = { transformContent };