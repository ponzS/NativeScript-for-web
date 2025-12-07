<template>
  <div class="ns-flex"><slot /></div>
</template>

<script setup lang="ts">
defineOptions({ name: 'FlexboxLayout' });
</script>

<style scoped>
.ns-flex { display: flex; }
</style>