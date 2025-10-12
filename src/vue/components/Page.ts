import { defineComponent, h } from 'vue';

export const Page = defineComponent({
  name: 'NSPage',
  emits: ['tap'],
  setup(_, { slots, attrs, emit }) {
    const { class: userClass, style: userStyle, ...rest } = (attrs || {}) as any;
    const defaultClass = 'ns-page';
    const defaultStyle = {} as Record<string, any>;
    const onClick = (e: MouseEvent) => emit('tap', { eventName: 'tap', object: e.currentTarget });
    return () =>
      h(
        'main',
        {
          onClick,
          ...rest,
          class: [defaultClass, userClass].filter(Boolean),
          style: { ...defaultStyle, ...(userStyle as any) }
        },
        slots.default?.()
      );
  }
});