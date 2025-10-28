#!/usr/bin/env node
const { program } = require('commander');
const { createWebPlatform } = require('./create-web-platform');

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

program.parse();