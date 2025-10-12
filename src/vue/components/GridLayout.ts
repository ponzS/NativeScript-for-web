import { defineComponent, h } from 'vue';

export const GridLayout = defineComponent({
  name: 'NSGridLayout',
  props: {
    rows: { type: String, default: undefined },
    columns: { type: String, default: undefined }
  },
  emits: ['tap'],
  setup(_, { slots, attrs, emit }) {
    const { class: userClass, style: userStyle, ...rest } = (attrs || {}) as any;
    const defaultClass = 'ns-grid-layout';
    const defaultStyle = {} as Record<string, any>;
    const onClick = (e: MouseEvent) => emit('tap', { eventName: 'tap', object: e.currentTarget });
    return () =>
      h(
        'div',
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