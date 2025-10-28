<template>
  <div class="ns-page"><slot /></div>
</template>

<script lang="ts">
import type { DefineComponent } from 'vue';

export default {
  name: 'Page'
} as DefineComponent;
</script>

<style scoped>
.ns-page { min-height: 100vh; display: block; }
</style>
