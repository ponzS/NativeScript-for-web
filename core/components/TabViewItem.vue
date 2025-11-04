<template>
  <div class="ns-tabview-item" v-show="isActive">
    <slot />
  </div>
  
</template>

<script setup lang="ts">
import { inject, onMounted, ref, computed } from 'vue';

defineOptions({ name: 'TabViewItem' });

const props = defineProps<{ title: string }>();
const tv = inject<{ register: (t: string) => number; selectedIndex: any } | undefined>('ns-tabview', undefined);
const index = ref<number>(-1);
onMounted(() => {
  index.value = tv ? tv.register(props.title) : -1;
});
const isActive = computed(() => {
  if (!tv || index.value < 0) return true;
  return tv.selectedIndex.value === index.value;
});
</script>

<style scoped>
.ns-tabview-item { display: block; }
</style>