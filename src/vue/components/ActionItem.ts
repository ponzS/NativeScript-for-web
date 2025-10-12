import { defineComponent, h } from 'vue';

export const ActionItem = defineComponent({
  name: 'NSActionItem',
  props: {
    iosPosition: { type: String, default: undefined }
  },
  setup(props, { slots, attrs }) {
    const { class: userClass, style: userStyle, ...rest } = (attrs || {}) as any;
    // Support attribute `ios.position="right"` via attrs['ios.position']
    const pos = (attrs as any)['ios.position'] ?? props.iosPosition;
    const defaultClass = 'ns-action-item';
    const defaultStyle: Record<string, any> = {};
    if (pos === 'right') {
      defaultStyle.marginLeft = 'auto';
    }
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