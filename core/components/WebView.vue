<template>
  <iframe class="ns-webview" :src="src" v-if="src"></iframe>
  <div class="ns-webview" v-else><slot /></div>
</template>

<script setup lang="ts">
defineOptions({ name: 'WebView' });
const props = defineProps<{ src?: string }>();
</script>

<style scoped>
.ns-webview { width: 100%; height: 100%; border: none; }
</style>