<template>
  <header class="ns-actionbar"><slot /></header>
</template>

<script setup lang="ts">
defineOptions({ name: 'ActionBar' });
</script>

<style scoped>
.ns-actionbar { background: #1f1140; color: white; padding: 12px; }
</style>
