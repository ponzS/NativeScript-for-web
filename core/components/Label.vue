<template>
  <span class="ns-label">
    <slot v-if="!text" />
    <template v-else>{{ text }}</template>
  </span>
</template>

<script setup lang="ts">
defineOptions({ name: 'Label' });
const props = defineProps<{ text?: string }>();
</script>

<style scoped>
.ns-label { display: inline-block; }
</style>