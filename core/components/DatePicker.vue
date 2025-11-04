<template>
  <input class="ns-datepicker" type="date" :value="valueStr" @input="onInput" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
defineOptions({ name: 'DatePicker' });
const props = defineProps<{ date?: string | Date }>();
const emit = defineEmits<{ (e: 'update:date', v: string | Date): void; (e: 'change', v: string | Date): void }>();

function pad(n: number) { return n < 10 ? `0${n}` : String(n); }
const valueStr = computed(() => {
  if (!props.date) return '';
  const d = typeof props.date === 'string' ? new Date(props.date) : props.date;
  if (isNaN(d.getTime())) return '';
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
});
function onInput(e: Event) {
  const v = (e.target as HTMLInputElement).value;
  emit('update:date', v);
  emit('change', v);
}
</script>

<style scoped>
.ns-datepicker { padding: 6px 8px; }
</style>