<template>
  <img class="ns-imagecacheit" :src="src" />
</template>

<script setup lang="ts">
defineOptions({ name: 'ImageCacheIt' });
const props = defineProps<{ src: string }>();
</script>

<style scoped>
.ns-imagecacheit { display: block; max-width: 100%; height: auto; }
</style>