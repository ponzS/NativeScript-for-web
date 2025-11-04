<template>
  <div class="ns-tabview">
    <div class="ns-tabview-header">
      <button
        v-for="(title, i) in items"
        :key="i"
        class="ns-tabview-tab"
        :class="{ active: i === currentIndex }"
        @click="select(i)"
      >{{ title }}</button>
    </div>
    <div class="ns-tabview-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue';

defineOptions({ name: 'TabView' });

const props = defineProps<{ selectedIndex?: number }>();
const currentIndex = ref(props.selectedIndex ?? 0);
watch(() => props.selectedIndex, (v) => {
  if (typeof v === 'number') currentIndex.value = v;
});

const items = ref<string[]>([]);
function register(title: string) {
  const idx = items.value.length;
  items.value.push(title);
  return idx;
}
function select(i: number) {
  currentIndex.value = i;
}

provide('ns-tabview', { register, selectedIndex: currentIndex });
</script>

<style scoped>
.ns-tabview { display: block; }
.ns-tabview-header { display: flex; gap: 8px; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 8px; }
.ns-tabview-tab { background: transparent; border: none; color: inherit; padding: 8px 12px; cursor: pointer; opacity: 0.7; }
.ns-tabview-tab.active { opacity: 1; border-bottom: 2px solid currentColor; }
.ns-tabview-body { padding-top: 12px; }
</style>