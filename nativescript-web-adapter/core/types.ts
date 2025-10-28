import type { DefineComponent } from 'vue';
import type { FrameState } from './composables/useFrame';
import type { PageState } from './composables/usePage';
import type { ActionBarState } from './composables/useActionBar';

// 重新导出Vue组件类型
export type ActionBarComponent = DefineComponent;
export type PageComponent = DefineComponent;
export type FrameComponent = DefineComponent;

// 重新导出composables类型
export type { FrameState, PageState, ActionBarState };