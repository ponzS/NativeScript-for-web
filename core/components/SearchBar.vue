<template>
  <div class="ns-searchbar">
    <input type="search" :value="text" @input="onInput" @keyup.enter="onSubmit" />
  </div>
  
</template>

<script setup lang="ts">
defineOptions({ name: 'SearchBar' });
const props = defineProps<{ text?: string }>();
const emit = defineEmits<{ (e: 'update:text', v: string): void; (e: 'submit', v: string): void }>();
function onInput(e: Event) {
  emit('update:text', (e.target as HTMLInputElement).value);
}
function onSubmit(e: KeyboardEvent) {
  emit('submit', (e.target as HTMLInputElement).value);
}
</script>

<style scoped>
.ns-searchbar input { width: 100%; padding: 6px 8px; }
</style>