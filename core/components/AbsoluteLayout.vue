<template>
  <div class="ns-absolute"><slot /></div>
</template>

<script setup lang="ts">
defineOptions({ name: 'AbsoluteLayout' });
</script>

<style scoped>
.ns-absolute { position: relative; width: 100%; height: 100%; }
</style>