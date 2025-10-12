import { defineComponent, h, ref, watch, cloneVNode } from 'vue';

const Label = defineComponent({
    name: 'NSLabel',
    props: {
        text: { type: String, default: '' },
        horizontalAlignment: { type: String, default: undefined }
    },
    emits: ['tap'],
    setup(props, { slots, attrs, emit }) {
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        const defaultClass = 'ns-label';
        const defaultStyle = {};
        const onClick = (e) => emit('tap', { eventName: 'tap', object: e.currentTarget });
        return () => h('span', {
            onClick,
            ...rest,
            class: [defaultClass, userClass].filter(Boolean),
            style: { ...defaultStyle, ...userStyle }
        }, slots.default ? slots.default() : props.text);
    }
});

const Button = defineComponent({
    name: 'NSButton',
    props: {
        text: { type: String, default: '' },
        horizontalAlignment: { type: String, default: undefined }
    },
    emits: ['tap'],
    setup(props, { emit, slots, attrs }) {
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        const defaultClass = 'ns-button';
        const defaultStyle = (() => {
            const style = {};
            if (props.horizontalAlignment === 'center') {
                // Center within GridLayout and StackLayout (column flex)
                style.justifySelf = 'center';
                style.alignSelf = 'center';
            }
            else if (props.horizontalAlignment === 'right') {
                style.justifySelf = 'end';
                style.alignSelf = 'flex-end';
            }
            else if (props.horizontalAlignment === 'left') {
                style.justifySelf = 'start';
                style.alignSelf = 'flex-start';
            }
            return style;
        })();
        const onClick = (e) => emit('tap', { eventName: 'tap', object: e.currentTarget });
        return () => h('button', {
            onClick,
            ...rest,
            class: [defaultClass, userClass].filter(Boolean),
            style: { ...defaultStyle, ...userStyle }
        }, slots.default ? slots.default() : props.text);
    }
});

const StackLayout = defineComponent({
    name: 'NSStackLayout',
    emits: ['tap'],
    setup(_, { slots, attrs, emit }) {
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        const defaultClass = 'ns-stack-layout';
        const defaultStyle = {};
        const onClick = (e) => emit('tap', { eventName: 'tap', object: e.currentTarget });
        return () => {
            var _a;
            return h('div', {
                onClick,
                ...rest,
                class: [defaultClass, userClass].filter(Boolean),
                style: { ...defaultStyle, ...userStyle }
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    }
});

const FlexboxLayout = defineComponent({
    name: 'NSFlexboxLayout',
    props: {
        flexDirection: { type: String, default: 'row' },
        justifyContent: { type: String, default: 'flex-start' },
        alignItems: { type: String, default: 'stretch' }
    },
    emits: ['tap'],
    setup(props, { slots, attrs, emit }) {
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        const defaultClass = 'ns-flexbox-layout';
        const defaultStyle = {};
        const onClick = (e) => emit('tap', { eventName: 'tap', object: e.currentTarget });
        return () => {
            var _a;
            return h('div', {
                onClick,
                ...rest,
                class: [defaultClass, userClass].filter(Boolean),
                style: { ...defaultStyle, ...userStyle }
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    }
});

const GridLayout = defineComponent({
    name: 'NSGridLayout',
    props: {
        rows: { type: String, default: undefined },
        columns: { type: String, default: undefined }
    },
    emits: ['tap'],
    setup(_, { slots, attrs, emit }) {
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        const defaultClass = 'ns-grid-layout';
        const defaultStyle = {};
        const onClick = (e) => emit('tap', { eventName: 'tap', object: e.currentTarget });
        return () => {
            var _a;
            return h('div', {
                onClick,
                ...rest,
                class: [defaultClass, userClass].filter(Boolean),
                style: { ...defaultStyle, ...userStyle }
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    }
});

const Page = defineComponent({
    name: 'NSPage',
    emits: ['tap'],
    setup(_, { slots, attrs, emit }) {
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        const defaultClass = 'ns-page';
        const defaultStyle = {};
        const onClick = (e) => emit('tap', { eventName: 'tap', object: e.currentTarget });
        return () => {
            var _a;
            return h('main', {
                onClick,
                ...rest,
                class: [defaultClass, userClass].filter(Boolean),
                style: { ...defaultStyle, ...userStyle }
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    }
});

const Frame = defineComponent({
    name: 'NSFrame',
    setup(_, { slots, attrs }) {
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        const defaultClass = 'ns-frame';
        const defaultStyle = {};
        return () => {
            var _a;
            return h('div', {
                ...rest,
                class: [defaultClass, userClass].filter(Boolean),
                style: { ...defaultStyle, ...userStyle }
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    }
});

const ActionBar = defineComponent({
    name: 'NSActionBar',
    emits: ['tap'],
    setup(_, { slots, attrs, emit }) {
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        const defaultClass = 'ns-action-bar';
        const defaultStyle = {};
        const onClick = (e) => emit('tap', { eventName: 'tap', object: e.currentTarget });
        return () => {
            var _a;
            return h('header', {
                onClick,
                ...rest,
                class: [defaultClass, userClass].filter(Boolean),
                style: { ...defaultStyle, ...userStyle }
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    }
});

const ActionItem = defineComponent({
    name: 'NSActionItem',
    props: {
        iosPosition: { type: String, default: undefined }
    },
    setup(props, { slots, attrs }) {
        var _a;
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        // Support attribute `ios.position="right"` via attrs['ios.position']
        const pos = (_a = attrs['ios.position']) !== null && _a !== void 0 ? _a : props.iosPosition;
        const defaultClass = 'ns-action-item';
        const defaultStyle = {};
        if (pos === 'right') {
            defaultStyle.marginLeft = 'auto';
        }
        return () => {
            var _a;
            return h('div', {
                ...rest,
                class: [defaultClass, userClass].filter(Boolean),
                style: { ...defaultStyle, ...userStyle }
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    }
});

const ImageCacheIt = defineComponent({
    name: 'ImageCacheIt',
    props: {
        src: { type: String, required: true },
        stretch: { type: String, default: 'aspectFill' }
    },
    setup(props, { attrs }) {
        var _a;
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        const defaultClass = 'ns-image-cache-it';
        const objectFitMap = {};
        const defaultStyle = {
            objectFit: (_a = objectFitMap[props.stretch]) !== null && _a !== void 0 ? _a : 'cover',
            display: 'block'
        };
        return () => h('img', {
            ...rest,
            src: props.src,
            class: [defaultClass, userClass].filter(Boolean),
            style: { ...defaultStyle, ...userStyle }
        });
    }
});

const ContentView = defineComponent({
    name: 'NSContentView',
    setup(_, { slots, attrs }) {
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        const defaultClass = 'ns-content-view';
        const defaultStyle = {};
        return () => {
            var _a;
            return h('div', {
                ...rest,
                class: [defaultClass, userClass].filter(Boolean),
                style: { ...defaultStyle, ...userStyle }
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    }
});

const ListView = defineComponent({
    name: 'NSListView',
    props: {
        items: { type: Array, default: () => [] },
        separatorColor: { type: String, default: 'transparent' }
    },
    setup(props, { slots, attrs }) {
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        const defaultClass = 'ns-list-view';
        const defaultStyle = { overflow: 'auto' };
        return () => h('div', { ...rest, class: [defaultClass, userClass].filter(Boolean), style: { ...defaultStyle, ...userStyle } }, props.items.map((item, index) => h('div', { class: 'ns-list-item', style: { borderBottom: `1px solid ${props.separatorColor}` } }, slots.default ? slots.default({ item, index }) : String(item))));
    }
});

const TabView = defineComponent({
    name: 'NSTabView',
    props: {
        selectedIndex: { type: Number, default: 0 },
        androidTabsPosition: { type: String, default: 'bottom' }
    },
    emits: ['selectedIndexChange'],
    setup(props, { slots, emit, attrs }) {
        var _a;
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        const defaultClass = 'ns-tab-view';
        const currentIndex = ref((_a = props.selectedIndex) !== null && _a !== void 0 ? _a : 0);
        watch(() => props.selectedIndex, (val) => {
            if (typeof val === 'number')
                currentIndex.value = val;
        });
        const onSelect = (idx) => {
            currentIndex.value = idx;
            emit('selectedIndexChange', { value: idx, object: null });
        };
        return () => {
            var _a, _b;
            const children = (_b = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) !== null && _b !== void 0 ? _b : [];
            const items = children.filter((v) => { var _a, _b; return ((_b = (_a = v === null || v === void 0 ? void 0 : v.type) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '') === 'NSTabViewItem'; });
            const useChildren = items.length ? items : children;
            const barItems = useChildren.map((v) => {
                var _a, _b, _c;
                const p = v.props || {};
                const title = (_a = p.title) !== null && _a !== void 0 ? _a : '';
                const icon = (_c = (_b = p['android:iconSource']) !== null && _b !== void 0 ? _b : p.iconSource) !== null && _c !== void 0 ? _c : undefined;
                return { title, icon };
            });
            const renderedContent = useChildren.map((v, idx) => {
                var _a, _b;
                return cloneVNode(v, {
                    class: ['ns-tab-view-item', (_a = v.props) === null || _a === void 0 ? void 0 : _a.class].filter(Boolean),
                    style: { ...(((_b = v.props) === null || _b === void 0 ? void 0 : _b.style) || {}), display: idx === currentIndex.value ? '' : 'none' }
                });
            });
            const tabBar = h('nav', { class: 'ns-tab-bar' }, barItems.map((item, idx) => h('button', {
                class: ['ns-tab-bar-item', idx === currentIndex.value ? 'active' : ''].filter(Boolean),
                onClick: () => onSelect(idx)
            }, item.title || '•')));
            return h('div', {
                ...rest,
                class: [defaultClass, userClass].filter(Boolean),
                style: { ...userStyle }
            }, [h('div', { class: 'ns-tab-content' }, renderedContent), props.androidTabsPosition === 'bottom' ? tabBar : null]);
        };
    }
});

const TabViewItem = defineComponent({
    name: 'NSTabViewItem',
    props: {
        title: { type: String, default: '' },
        iconSource: { type: String, default: undefined }
    },
    setup(_, { slots, attrs }) {
        const { class: userClass, style: userStyle, ...rest } = (attrs || {});
        const defaultClass = 'ns-tab-view-item';
        const defaultStyle = {};
        return () => {
            var _a;
            return h('div', {
                ...rest,
                class: [defaultClass, userClass].filter(Boolean),
                style: { ...defaultStyle, ...userStyle }
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    }
});

const NativeScriptWebPlugin = {
    install(app) {
        app.component('Label', Label);
        app.component('Button', Button);
        app.component('StackLayout', StackLayout);
        app.component('FlexboxLayout', FlexboxLayout);
        app.component('GridLayout', GridLayout);
        app.component('Page', Page);
        app.component('Frame', Frame);
        app.component('ActionBar', ActionBar);
        app.component('ActionItem', ActionItem);
        app.component('ImageCacheIt', ImageCacheIt);
        app.component('ContentView', ContentView);
        app.component('ListView', ListView);
        app.component('TabView', TabView);
        app.component('TabViewItem', TabViewItem);
    }
};

export { ActionBar, ActionItem, Button, ContentView, FlexboxLayout, Frame, GridLayout, ImageCacheIt, Label, ListView, NativeScriptWebPlugin, Page, StackLayout, TabView, TabViewItem };
//# sourceMappingURL=vue.js.map
