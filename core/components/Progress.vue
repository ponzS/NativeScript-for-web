<template>
  <progress class="ns-progress" :value="value" :max="max"></progress>
</template>

<script setup lang="ts">
defineOptions({ name: 'Progress' });
const props = defineProps<{ value?: number; max?: number }>();
</script>

<style scoped>
.ns-progress { width: 100%; }
</style>