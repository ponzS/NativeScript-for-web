<template>
  <header class="ns-actionbar"><slot /></header>
</template>

<script setup lang="ts">
defineOptions({ name: 'ActionBar' });
</script>

<style scoped>
.ns-actionbar { padding: 12px; }
</style>
