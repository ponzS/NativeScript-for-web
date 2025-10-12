import { defineComponent, h, ref, watch, cloneVNode } from 'vue';

export const TabView = defineComponent({
  name: 'NSTabView',
  props: {
    selectedIndex: { type: Number, default: 0 },
    androidTabsPosition: { type: String, default: 'bottom' }
  },
  emits: ['selectedIndexChange'],
  setup(props, { slots, emit, attrs }) {
    const { class: userClass, style: userStyle, ...rest } = (attrs || {}) as any;
    const defaultClass = 'ns-tab-view';
    const currentIndex = ref(props.selectedIndex ?? 0);

    watch(
      () => props.selectedIndex,
      (val) => {
        if (typeof val === 'number') currentIndex.value = val;
      }
    );

    const onSelect = (idx: number) => {
      currentIndex.value = idx;
      emit('selectedIndexChange', { value: idx, object: null });
    };

    return () => {
      const children = slots.default?.() ?? [];
      const items = children.filter((v: any) => (v?.type?.name ?? '') === 'NSTabViewItem');
      const useChildren = items.length ? items : children;

      const barItems = useChildren.map((v: any) => {
        const p = v.props || {};
        const title = p.title ?? '';
        const icon = p['android:iconSource'] ?? p.iconSource ?? undefined;
        return { title, icon };
      });

      const renderedContent = useChildren.map((v: any, idx: number) =>
        cloneVNode(v, {
          class: ['ns-tab-view-item', v.props?.class].filter(Boolean),
          style: { ...(v.props?.style || {}), display: idx === currentIndex.value ? '' : 'none' }
        })
      );

      const tabBar = h(
        'nav',
        { class: 'ns-tab-bar' },
        barItems.map((item, idx) =>
          h(
            'button',
            {
              class: ['ns-tab-bar-item', idx === currentIndex.value ? 'active' : ''].filter(Boolean),
              onClick: () => onSelect(idx)
            },
            item.title || '•'
          )
        )
      );

      return h(
        'div',
        {
          ...rest,
          class: [defaultClass, userClass].filter(Boolean),
          style: { ...(userStyle as any) }
        },
        [h('div', { class: 'ns-tab-content' }, renderedContent), props.androidTabsPosition === 'bottom' ? tabBar : null]
      );
    };
  }
});