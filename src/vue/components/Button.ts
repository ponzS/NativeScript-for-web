import { defineComponent, h } from 'vue';

export const Button = defineComponent({
  name: 'NSButton',
  props: {
    text: { type: String, default: '' },
    horizontalAlignment: { type: String, default: undefined }
  },
  emits: ['tap'],
  setup(props, { emit, slots, attrs }) {
    const { class: userClass, style: userStyle, ...rest } = (attrs || {}) as any;
    const defaultClass = 'ns-button';
    const defaultStyle = (() => {
      const style: Record<string, any> = {};
      if (props.horizontalAlignment === 'center') {
        // Center within GridLayout and StackLayout (column flex)
        style.justifySelf = 'center';
        style.alignSelf = 'center';
      } else if (props.horizontalAlignment === 'right') {
        style.justifySelf = 'end';
        style.alignSelf = 'flex-end';
      } else if (props.horizontalAlignment === 'left') {
        style.justifySelf = 'start';
        style.alignSelf = 'flex-start';
      }
      return style;
    })();
    const onClick = (e: MouseEvent) => emit('tap', { eventName: 'tap', object: e.currentTarget });
    return () =>
      h(
        'button',
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