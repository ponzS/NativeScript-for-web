import { defineComponent, h } from 'vue';

export const Frame = defineComponent({
  name: 'NSFrame',
  setup(_, { slots, attrs }) {
    const { class: userClass, style: userStyle, ...rest } = (attrs || {}) as any;
    const defaultClass = 'ns-frame';
    const defaultStyle = {
    
    } as Record<string, any>; 

    return () =>
      h(
        'div',
        {
          ...rest,
          class: [defaultClass, userClass].filter(Boolean),
          style: { ...defaultStyle, ...(userStyle as any) }
        },
        slots.default?.()
      );
  }
});