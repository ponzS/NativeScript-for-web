<template>
  <div class="ns-scroll"><slot /></div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ScrollView' });
</script>

<style scoped>
.ns-scroll { overflow: auto; max-height: 100%; }
</style>