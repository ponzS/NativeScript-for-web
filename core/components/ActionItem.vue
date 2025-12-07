<template>
  <button class="ns-actionitem"><slot /></button>
</template>

<script setup lang="ts">
defineOptions({ name: 'ActionItem' });
</script>

<style scoped>
.ns-actionitem { background: transparent; border: none; color: inherit; cursor: pointer; padding: 8px; }
</style>