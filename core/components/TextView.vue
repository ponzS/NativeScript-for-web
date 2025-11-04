<template>
  <textarea class="ns-textview" :value="text" @input="onInput"></textarea>
</template>

<script setup lang="ts">
defineOptions({ name: 'TextView' });
const props = defineProps<{ text?: string }>();
const emit = defineEmits<{ (e: 'update:text', v: string): void; (e: 'change', v: string): void }>();
function onInput(e: Event) {
  const v = (e.target as HTMLTextAreaElement).value;
  emit('update:text', v);
  emit('change', v);
}
</script>

<style scoped>
.ns-textview { width: 100%; min-height: 80px; padding: 6px 8px; }
</style>