#!/usr/bin/env node
const { program } = require('commander');
const { createWebPlatform } = require('./create-web-platform.cjs');
const path = require('path');
const { execSync } = require('child_process');

program
  .name('ns-web')
  .description('CLI工具用于创建和管理NativeScript应用的web平台')
  .version('1.0.0');

program
  .command('init')
  .description('为NativeScript项目初始化web平台支持')
  .action(async () => {
    await createWebPlatform();
  });

program
  .command('build')
  .description('生成web平台并在 platforms/web 内构建')
  .option('--skip-install', '跳过依赖安装')
  .action(async (opts) => {
    await createWebPlatform();
    const webDir = path.join(process.cwd(), 'platforms', 'web');
    if (!opts.skipInstall) {
      execSync('npm install', { stdio: 'inherit', cwd: webDir });
    }
    execSync('npm run build', { stdio: 'inherit', cwd: webDir });
  });

program
  .command('dev')
  .description('生成web平台并在 platforms/web 内启动开发服务器')
  .option('--skip-install', '跳过依赖安装')
  .action(async (opts) => {
    await createWebPlatform();
    const webDir = path.join(process.cwd(), 'platforms', 'web');
    if (!opts.skipInstall) {
      execSync('npm install', { stdio: 'inherit', cwd: webDir });
    }
    execSync('npm run dev', { stdio: 'inherit', cwd: webDir });
  });

program.parse();
