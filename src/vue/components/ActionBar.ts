import { defineComponent, h } from 'vue';

export const ActionBar = defineComponent({
  name: 'NSActionBar',
  emits: ['tap'],
  setup(_, { slots, attrs, emit }) {
    const { class: userClass, style: userStyle, ...rest } = (attrs || {}) as any;
    const defaultClass = 'ns-action-bar';
    const defaultStyle = {} as Record<string, any>;
    const onClick = (e: MouseEvent) => emit('tap', { eventName: 'tap', object: e.currentTarget });
    return () =>
      h(
        'header',
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