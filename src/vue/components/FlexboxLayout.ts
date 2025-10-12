import { defineComponent, h } from 'vue';

export const FlexboxLayout = defineComponent({
  name: 'NSFlexboxLayout',
  props: {
    flexDirection: { type: String, default: 'row' },
    justifyContent: { type: String, default: 'flex-start' },
    alignItems: { type: String, default: 'stretch' }
  },
  emits: ['tap'],
  setup(props, { slots, attrs, emit }) {
    const { class: userClass, style: userStyle, ...rest } = (attrs || {}) as any;
    const defaultClass = 'ns-flexbox-layout';
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