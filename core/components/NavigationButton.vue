<template>
  <button class="ns-navbutton" @click="onClick">
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';
const props = defineProps<{ text?: string }>();
const emit = defineEmits<{ (e: 'tap', evt: MouseEvent): void }>();
defineOptions({ name: 'NavigationButton' });

function onClick(e: MouseEvent) {
  emit('tap', e);
  // 默认行为：若未监听 tap，则尝试返回上一页
  const inst = getCurrentInstance();
  const hasTapListener = !!(inst?.vnode?.props && (inst.vnode.props as any).onTap);
  if (!hasTapListener) {
    const router = (inst?.appContext?.config?.globalProperties as any)?.$router;
    if (router?.go) router.go(-1);
    else if (window?.history?.back) window.history.back();
  }
}
</script>

<style scoped>
.ns-navbutton { background: transparent; border: none; color: inherit; cursor: pointer; padding: 8px; }
</style>