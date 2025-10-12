import { defineComponent, h } from 'vue';

export const ListView = defineComponent({
  name: 'NSListView',
  props: {
    items: { type: Array as () => any[], default: () => [] },
    separatorColor: { type: String, default: 'transparent' }
  },
  setup(props, { slots, attrs }) {
    const { class: userClass, style: userStyle, ...rest } = (attrs || {}) as any;
    const defaultClass = 'ns-list-view';
    const defaultStyle: Record<string, any> = { overflow: 'auto' };
    return () =>
      h(
        'div',
        { ...rest, class: [defaultClass, userClass].filter(Boolean), style: { ...defaultStyle, ...(userStyle as any) } },
        props.items.map((item: any, index: number) =>
          h(
            'div',
            { class: 'ns-list-item', style: { borderBottom: `1px solid ${props.separatorColor}` } },
            slots.default ? slots.default({ item, index }) : String(item)
          )
        )
      );
  }
});