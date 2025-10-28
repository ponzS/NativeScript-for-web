<template>
  <header class="ns-actionbar"><slot /></header>
</template>

<script lang="ts">
import type { DefineComponent } from 'vue';

export default {
  name: 'ActionBar'
} as DefineComponent;
</script>

<style scoped>
.ns-actionbar { background: #1f1140; color: white; padding: 12px; }
</style>
