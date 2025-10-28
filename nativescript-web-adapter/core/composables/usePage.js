import { ref } from 'vue';

export function usePage() {
  const isVisible = ref(true);
  function show() { isVisible.value = true; }
  function hide() { isVisible.value = false; }
  return { isVisible, show, hide };
}
