<template>
  <input class="ns-timepicker" type="time" :value="valueStr" @input="onInput" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
defineOptions({ name: 'TimePicker' });
const props = defineProps<{ time?: string }>();
const emit = defineEmits<{ (e: 'update:time', v: string): void; (e: 'change', v: string): void }>();

const valueStr = computed(() => props.time ?? '');
function onInput(e: Event) {
  const v = (e.target as HTMLInputElement).value;
  emit('update:time', v);
  emit('change', v);
}
</script>

<style scoped>
.ns-timepicker { padding: 6px 8px; }
</style>