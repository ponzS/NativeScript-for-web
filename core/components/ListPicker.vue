<template>
  <select class="ns-listpicker" :value="selectedIndex" @change="onChange">
    <option v-for="(item, i) in items" :key="i" :value="i">{{ item }}</option>
  </select>
</template>

<script setup lang="ts">
defineOptions({ name: 'ListPicker' });
const props = defineProps<{ items: string[]; selectedIndex?: number }>();
const emit = defineEmits<{ (e: 'update:selectedIndex', v: number): void; (e: 'change', v: number): void }>();

function onChange(e: Event) {
  const v = Number((e.target as HTMLSelectElement).value);
  emit('update:selectedIndex', v);
  emit('change', v);
}
</script>

<style scoped>
.ns-listpicker { padding: 6px 8px; }
</style>