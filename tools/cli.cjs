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
  .description('根据项目配置自动选择框架并在对应 platforms/<framework> 内构建')
  .option('--skip-install', '跳过依赖安装')
  .action(async (opts) => {
    const res = await createWebPlatform();
    const webDir = res?.webDir || path.join(process.cwd(), 'platforms', 'vue');
    if (!opts.skipInstall) {
      execSync('npm install', { stdio: 'inherit', cwd: webDir });
    }
    execSync('npm run build', { stdio: 'inherit', cwd: webDir });
  });

program
  .command('vue')
  .description('生成 Vue 平台并在 platforms/vue 内启动开发服务器')
  .option('--skip-install', '跳过依赖安装')
  .action(async (opts) => {
    await createWebPlatform({ framework: 'vue' });
    const webDir = path.join(process.cwd(), 'platforms', 'vue');
    if (!opts.skipInstall) {
      execSync('npm install', { stdio: 'inherit', cwd: webDir });
    }
    execSync('npm run dev', { stdio: 'inherit', cwd: webDir });
  });

program
  .command('angular')
  .description('生成 Angular 平台并在 platforms/angular 内执行构建')
  .option('--skip-install', '跳过依赖安装')
  .action(async (opts) => {
    const res = await createWebPlatform({ framework: 'angular' });
    const webDir = res?.webDir || path.join(process.cwd(), 'platforms', 'angular');
    if (!opts.skipInstall) {
      execSync('npm install', { stdio: 'inherit', cwd: webDir });
    }
    execSync('npm run build', { stdio: 'inherit', cwd: webDir });
  });

program
  .command('nuxt')
  .description('生成 Nuxt 平台并在 platforms/nuxt 内执行构建')
  .option('--skip-install', '跳过依赖安装')
  .action(async (opts) => {
    const { createNuxtPlatform } = require('./create-nuxt-platform.cjs');
    await createNuxtPlatform();
    const nuxtDir = path.join(process.cwd(), 'platforms', 'nuxt');
    if (!opts.skipInstall) {
      execSync('npm install', { stdio: 'inherit', cwd: nuxtDir });
    }
    execSync('npm run build', { stdio: 'inherit', cwd: nuxtDir });
  });

program.parse();
