import { defineComponent, h } from 'vue';

export const TabViewItem = defineComponent({
  name: 'NSTabViewItem',
  props: {
    title: { type: String, default: '' },
    iconSource: { type: String, default: undefined }
  },
  setup(_, { slots, attrs }) {
    const { class: userClass, style: userStyle, ...rest } = (attrs || {}) as any;
    const defaultClass = 'ns-tab-view-item';
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