<template>
  <div class="ns-root"><slot /></div>
</template>

<script setup lang="ts">
defineOptions({ name: 'RootLayout' });
</script>

<style scoped>
.ns-root { position: relative; width: 100%; height: 100%; display: block; }
</style>