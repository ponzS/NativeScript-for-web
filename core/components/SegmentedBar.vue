<template>
  <div class="ns-segmentedbar">
    <div class="ns-segmentedbar-header">
      <button
        v-for="(t, i) in displayItems"
        :key="i"
        class="ns-segment"
        :class="{ active: i === currentIndex }"
        @click="select(i)"
      >{{ t }}</button>
    </div>
    <div class="ns-segmentedbar-body">
      <slot />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref, watch, computed, provide } from 'vue';
defineOptions({ name: 'SegmentedBar' });
const props = defineProps<{ items?: string[]; selectedIndex?: number }>();
const emit = defineEmits<{ (e: 'update:selectedIndex', v: number): void; (e: 'change', v: number): void }>();

// Selected index
const currentIndex = ref(props.selectedIndex ?? 0);
watch(() => props.selectedIndex, v => { if (typeof v === 'number') currentIndex.value = v; });
function select(i: number) { currentIndex.value = i; emit('update:selectedIndex', i); emit('change', i); }

// Child registration for SegmentedBarItem titles when using child components
const registeredTitles = ref<string[]>([]);
function register(title: string): number {
  registeredTitles.value.push(title);
  return registeredTitles.value.length - 1;
}

// Provide to children so they can register and know selectedIndex
provide('ns-segmentedbar', { register, selectedIndex: currentIndex });

// Items to display: prefer props.items if provided; else use registered child titles
const displayItems = computed(() => (props.items && props.items.length ? props.items : registeredTitles.value));
</script>

<style scoped>
.ns-segmentedbar { display: block; color: inherit; }
.ns-segmentedbar-header { display: flex; gap: 8px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 8px; }
.ns-segment { background: transparent; border: none; color: #fff; padding: 8px 12px; cursor: pointer; opacity: 0.95; }
.ns-segment.active { opacity: 1; border-bottom: 2px solid currentColor; }
.ns-segmentedbar-body { padding-top: 12px; }
</style>