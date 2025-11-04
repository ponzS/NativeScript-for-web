<template>
  <div class="ns-wrap"><slot /></div>
</template>

<script setup lang="ts">
defineOptions({ name: 'WrapLayout' });
</script>

<style scoped>
.ns-wrap { display: flex; flex-wrap: wrap; }
</style>