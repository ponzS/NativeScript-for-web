<template>
  <input class="ns-slider" type="range" :min="min" :max="max" :step="step" :value="value" @input="onInput" />
</template>

<script setup lang="ts">
defineOptions({ name: 'Slider' });
const props = defineProps<{ value?: number; min?: number; max?: number; step?: number }>();
const emit = defineEmits<{ (e: 'update:value', v: number): void; (e: 'change', v: number): void }>();
function onInput(e: Event) {
  const v = Number((e.target as HTMLInputElement).value);
  emit('update:value', v);
  emit('change', v);
}
</script>

<style scoped>
.ns-slider { width: 100%; }
</style>