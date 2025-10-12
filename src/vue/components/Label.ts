import { defineComponent, h } from 'vue';

export const Label = defineComponent({
  name: 'NSLabel',
  props: {
    text: { type: String, default: '' },
    horizontalAlignment: { type: String, default: undefined }
  },
  emits: ['tap'],
  setup(props, { slots, attrs, emit }) {
    const { class: userClass, style: userStyle, ...rest } = (attrs || {}) as any;
    const defaultClass = 'ns-label';
    const defaultStyle = {} as Record<string, any>;
    const onClick = (e: MouseEvent) => emit('tap', { eventName: 'tap', object: e.currentTarget });
    return () =>
      h(
        'span',
        {
          onClick,
          ...rest,
          class: [defaultClass, userClass].filter(Boolean),
          style: { ...defaultStyle, ...(userStyle as any) }
        },
        slots.default ? slots.default() : props.text
      );
  }
});