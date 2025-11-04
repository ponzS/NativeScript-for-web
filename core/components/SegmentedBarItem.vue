<template>
  <div class="ns-segmentedbar-item" v-show="isActive"><slot /></div>
  
</template>

<script setup lang="ts">
import { inject, onMounted, ref, computed } from 'vue';
defineOptions({ name: 'SegmentedBarItem' });
const props = defineProps<{ title: string }>();
const sb = inject<{ register: (t: string) => number; selectedIndex: any } | undefined>('ns-segmentedbar', undefined);
const index = ref<number>(-1);
onMounted(() => { index.value = sb ? sb.register(props.title) : -1; });
const isActive = computed(() => {
  if (!sb || index.value < 0) return true;
  return sb.selectedIndex.value === index.value;
});
</script>

<style scoped>
.ns-segmentedbar-item { display: block; }
</style>