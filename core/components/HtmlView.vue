<template>
  <div class="ns-htmlview" v-if="html" v-html="html"></div>
  <div class="ns-htmlview" v-else><slot /></div>
</template>

<script setup lang="ts">
defineOptions({ name: 'HtmlView' });
defineProps<{ html?: string }>();
</script>

<style scoped>
.ns-htmlview { display: block; }
</style>
