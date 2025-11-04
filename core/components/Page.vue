<template>
  <div class="ns-page"><slot /></div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Page' });
</script>

<style scoped>
.ns-page { 
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  min-height: 100%;
  padding: 0px;
}
</style>
