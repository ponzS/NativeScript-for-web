import { ref } from 'vue';

export function useActionBar() {
  const title = ref('');
  function setTitle(t) { title.value = t; }
  return { title, setTitle };
}
