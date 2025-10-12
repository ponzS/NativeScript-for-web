import { defineComponent, h } from 'vue';

export const ContentView = defineComponent({
  name: 'NSContentView',
  setup(_, { slots, attrs }) {
    const { class: userClass, style: userStyle, ...rest } = (attrs || {}) as any;
    const defaultClass = 'ns-content-view';
    const defaultStyle = {} as Record<string, any>;
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