import { Ref, ref } from 'vue';

export interface FrameState {
  stack: Ref<any[]>;
  push: (page: any) => void;
  pop: () => any;
}

export function useFrame(): FrameState {
  const stack = ref<any[]>([]);
  
  function push(page: any) {
    stack.value.push(page);
  }
  
  function pop() {
    return stack.value.pop();
  }

  return {
    stack,
    push,
    pop
  };
}