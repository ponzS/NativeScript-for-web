import { Ref, ref } from 'vue';

export interface ActionBarState {
  title: Ref<string>;
  setTitle: (value: string) => void;
}

export function useActionBar(): ActionBarState {
  const title = ref('');
  
  function setTitle(value: string) {
    title.value = value;
  }

  return {
    title,
    setTitle
  };
}