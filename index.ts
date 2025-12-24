import * as core from './core';
import type { App } from 'vue';
import * as angular from './angular';

export default {
  install(app: App) {
    // 注册组件
    Object.entries(core.components || {}).forEach(([name, component]) => {
      app.component(name, component);
    });
    
    // 注册全局composables
    app.config.globalProperties.$ns = core.composables || {};
  }
};

export { core };
export { angular };
