<template>
  <div class="ns-stack"><slot /></div>
</template>

<script setup lang="ts">
defineOptions({ name: 'StackLayout' });
</script>

<style scoped>
.ns-stack { display: flex; flex-direction: column; }
</style>