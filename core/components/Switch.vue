<template>
  <label class="ns-switch">
    <input type="checkbox" :checked="checked" @change="onChange" />
    <span class="track"><span class="thumb"></span></span>
  </label>
</template>

<script setup lang="ts">
defineOptions({ name: 'Switch' });
const props = defineProps<{ checked?: boolean }>();
const emit = defineEmits<{ (e: 'update:checked', v: boolean): void; (e: 'change', v: boolean): void }>();
function onChange(e: Event) {
  const v = (e.target as HTMLInputElement).checked;
  emit('update:checked', v);
  emit('change', v);
}
</script>

<style scoped>
.ns-switch { display: inline-flex; align-items: center; cursor: pointer; }
.ns-switch input { display: none; }
.ns-switch .track { width: 40px; height: 22px; background: rgba(255,255,255,0.3); border-radius: 11px; position: relative; transition: background .2s; }
.ns-switch .thumb { width: 18px; height: 18px; background: rgb(0, 255, 174); border-radius: 50%; position: absolute; top: 2px; left: 2px; transition: left .2s; }
.ns-switch input:checked + .track { background: currentColor; opacity: .5; }
.ns-switch input:checked + .track .thumb { left: 20px; }
</style>