<template>
  <div class="ns-dock">
    <div class="ns-dock-top"><slot name="top" /></div>
    <div class="ns-dock-middle">
      <div class="ns-dock-left"><slot name="left" /></div>
      <div class="ns-dock-center"><slot /></div>
      <div class="ns-dock-right"><slot name="right" /></div>
    </div>
    <div class="ns-dock-bottom"><slot name="bottom" /></div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'DockLayout' });
</script>

<style scoped>
.ns-dock { display: flex; flex-direction: column; width: 100%; height: 100%; }
.ns-dock-top, .ns-dock-bottom { flex: 0 0 auto; }
.ns-dock-middle { display: flex; flex: 1 1 auto; min-height: 0; }
.ns-dock-left, .ns-dock-right { flex: 0 0 auto; }
.ns-dock-center { flex: 1 1 auto; min-width: 0; }
</style>