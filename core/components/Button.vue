<template>
  <button class="ns-button" :style="btnStyle" @click="$emit('tap', $event)"><slot /></button>
  
</template>

<script setup lang="ts">
import { computed } from 'vue';
defineOptions({ name: 'Button' });
const emit = defineEmits<{ (e: 'tap', evt: MouseEvent): void }>();
const props = defineProps<{ horizontalAlignment?: string }>();

const btnStyle = computed<Record<string, string>>(() => {
  const style: Record<string, string> = {};
  const h = props.horizontalAlignment?.toLowerCase();
  if (h === 'center') {
    style.display = 'block';
    style.width = 'fit-content';
    style.marginLeft = 'auto';
    style.marginRight = 'auto';
    style.alignSelf = 'center';
    style.justifySelf = 'center';
  } else if (h === 'right') {
    style.display = 'block';
    style.width = 'fit-content';
    style.marginLeft = 'auto';
    style.alignSelf = 'flex-end';
    style.justifySelf = 'end';
  } else if (h === 'left') {
    style.display = 'block';
    style.width = 'fit-content';
    style.marginRight = 'auto';
    style.alignSelf = 'flex-start';
    style.justifySelf = 'start';
  }
  return style;
});
</script>

<style scoped>
.ns-button { cursor: pointer; }
</style>