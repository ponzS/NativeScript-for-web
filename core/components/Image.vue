<template>
  <img class="ns-image" :src="src" />
</template>

<script setup lang="ts">
defineOptions({ name: 'Image' });
const props = defineProps<{ src: string; stretch?: string }>();
</script>

<style scoped>
.ns-image { display: block; max-width: 100%; height: auto; }
</style>