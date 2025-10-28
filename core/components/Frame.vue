<template>
  <div class="ns-frame"><slot /></div>
</template>

<script lang="ts">
import type { DefineComponent } from 'vue';

export default {
  name: 'Frame'
} as DefineComponent;
</script>

<style scoped>
.ns-frame { display:block; }
</style>
