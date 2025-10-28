import { ref } from 'vue';

export function useFrame() {
  const stack = ref([]);
  function push(page) { stack.value.push(page); }
  function pop() { return stack.value.pop(); }
  return { stack, push, pop };
}
