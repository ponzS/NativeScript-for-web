<template>
  <ul class="ns-listview"><slot /></ul>
</template>

<script setup lang="ts">
defineOptions({ name: 'ListView' });
</script>

<style scoped>
.ns-listview { list-style: none; margin: 0; padding: 0; }
.ns-listview > li { padding: 8px 12px; border-bottom: 1px solid rgba(255,255,255,0.1); }
</style>