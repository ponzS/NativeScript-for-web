<template>
  <div class="ns-activity-indicator" :class="{ busy }" />
</template>

<script setup lang="ts">
const props = defineProps<{ busy?: boolean }>();
const busy = props.busy ?? true;
defineOptions({ name: 'ActivityIndicator' });
</script>

<style scoped>
.ns-activity-indicator { width: 20px; height: 20px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.3); border-top-color: currentColor; opacity: 0.8; }
.ns-activity-indicator.busy { animation: ns-spin 0.8s linear infinite; }
@keyframes ns-spin { to { transform: rotate(360deg) } }
</style>