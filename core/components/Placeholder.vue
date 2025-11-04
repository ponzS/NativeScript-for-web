<template>
  <div class="ns-placeholder"><slot /></div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Placeholder' });
</script>

<style scoped>
.ns-placeholder { display: contents; }
</style>