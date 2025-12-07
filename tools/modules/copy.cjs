const fs = require('fs');
const path = require('path');

function copyAdapterComponents(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    console.warn('[web-adapter] 适配器组件目录不存在:', srcDir);
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
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
      copyAdapterComponents(srcPath, destPath);
    } else {
      try {
        fs.copyFileSync(srcPath, destPath);
      } catch (err) {
        console.error('[web-adapter] 复制组件失败:', srcPath, err);
      }
    }
  }
}

function copyAdapterComposables(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    console.warn('[web-adapter] 适配器 composables 目录不存在:', srcDir);
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
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
      copyAdapterComposables(srcPath, destPath);
    } else {
      try {
        fs.copyFileSync(srcPath, destPath);
      } catch (err) {
        console.error('[web-adapter] 复制 composable 文件失败:', srcPath, err);
      }
    }
  }
}

function copySourceFiles(src, dest, transformContent) {
  if (!fs.existsSync(src)) {
    console.warn('[web-adapter] 源代码目录不存在:', src);
    return;
  }
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copySourceFiles(srcPath, destPath, transformContent);
    } else {
      try {
        let content = fs.readFileSync(srcPath, 'utf8');
        content = transformContent ? transformContent(content, srcPath) : content;
        fs.writeFileSync(destPath, content);
      } catch (err) {
        console.error('[web-adapter] 复制文件失败:', srcPath, err);
      }
    }
  }
}

module.exports = {
  copyAdapterComponents,
  copyAdapterComposables,
  copySourceFiles,
};