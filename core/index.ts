// Explicitly collect components and composables into objects so consumers
// can reference `core.components` and `core.composables` at runtime.
import ActionBar from './components/ActionBar.vue';
import Page from './components/Page.vue';
import Frame from './components/Frame.vue';

export const components = {
	ActionBar,
	Page,
	Frame,
};

import * as composablesNS from './composables';
export const composables = composablesNS;

// Re-export types for convenience
export * from './types';

// Also provide the original named exports for compatibility
export { ActionBar, Page, Frame };