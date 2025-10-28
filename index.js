import * as core from './core/index.js';

export default {
  install(app) {
    // register components
    Object.entries(core.components || {}).forEach(([name, comp]) => {
      app.component(name, comp);
    });
    // attach composables under $ns
    app.config.globalProperties.$ns = core.composables || {};
  }
};

export { core };
