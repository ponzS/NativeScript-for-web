import * as vue from 'vue';
import { Plugin } from 'vue';

declare const Label: vue.DefineComponent<vue.ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    horizontalAlignment: {
        type: StringConstructor;
        default: any;
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, "tap"[], "tap", vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    horizontalAlignment: {
        type: StringConstructor;
        default: any;
    };
}>> & Readonly<{
    onTap?: (...args: any[]) => any;
}>, {
    text: string;
    horizontalAlignment: string;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const Button: vue.DefineComponent<vue.ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    horizontalAlignment: {
        type: StringConstructor;
        default: any;
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, "tap"[], "tap", vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    horizontalAlignment: {
        type: StringConstructor;
        default: any;
    };
}>> & Readonly<{
    onTap?: (...args: any[]) => any;
}>, {
    text: string;
    horizontalAlignment: string;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const StackLayout: vue.DefineComponent<{}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, "tap"[], "tap", vue.PublicProps, Readonly<{}> & Readonly<{
    onTap?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const FlexboxLayout: vue.DefineComponent<vue.ExtractPropTypes<{
    flexDirection: {
        type: StringConstructor;
        default: string;
    };
    justifyContent: {
        type: StringConstructor;
        default: string;
    };
    alignItems: {
        type: StringConstructor;
        default: string;
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, "tap"[], "tap", vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    flexDirection: {
        type: StringConstructor;
        default: string;
    };
    justifyContent: {
        type: StringConstructor;
        default: string;
    };
    alignItems: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onTap?: (...args: any[]) => any;
}>, {
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const GridLayout: vue.DefineComponent<vue.ExtractPropTypes<{
    rows: {
        type: StringConstructor;
        default: any;
    };
    columns: {
        type: StringConstructor;
        default: any;
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, "tap"[], "tap", vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    rows: {
        type: StringConstructor;
        default: any;
    };
    columns: {
        type: StringConstructor;
        default: any;
    };
}>> & Readonly<{
    onTap?: (...args: any[]) => any;
}>, {
    rows: string;
    columns: string;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const Page: vue.DefineComponent<{}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, "tap"[], "tap", vue.PublicProps, Readonly<{}> & Readonly<{
    onTap?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const Frame: vue.DefineComponent<{}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const ActionBar: vue.DefineComponent<{}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, "tap"[], "tap", vue.PublicProps, Readonly<{}> & Readonly<{
    onTap?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const ActionItem: vue.DefineComponent<vue.ExtractPropTypes<{
    iosPosition: {
        type: StringConstructor;
        default: any;
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    iosPosition: {
        type: StringConstructor;
        default: any;
    };
}>> & Readonly<{}>, {
    iosPosition: string;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const ImageCacheIt: vue.DefineComponent<vue.ExtractPropTypes<{
    src: {
        type: StringConstructor;
        required: true;
    };
    stretch: {
        type: StringConstructor;
        default: string;
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    src: {
        type: StringConstructor;
        required: true;
    };
    stretch: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    stretch: string;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const ContentView: vue.DefineComponent<{}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const ListView: vue.DefineComponent<vue.ExtractPropTypes<{
    items: {
        type: () => any[];
        default: () => any[];
    };
    separatorColor: {
        type: StringConstructor;
        default: string;
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    items: {
        type: () => any[];
        default: () => any[];
    };
    separatorColor: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    items: any[];
    separatorColor: string;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const TabView: vue.DefineComponent<vue.ExtractPropTypes<{
    selectedIndex: {
        type: NumberConstructor;
        default: number;
    };
    androidTabsPosition: {
        type: StringConstructor;
        default: string;
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, "selectedIndexChange"[], "selectedIndexChange", vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    selectedIndex: {
        type: NumberConstructor;
        default: number;
    };
    androidTabsPosition: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onSelectedIndexChange?: (...args: any[]) => any;
}>, {
    selectedIndex: number;
    androidTabsPosition: string;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const TabViewItem: vue.DefineComponent<vue.ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    iconSource: {
        type: StringConstructor;
        default: any;
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    iconSource: {
        type: StringConstructor;
        default: any;
    };
}>> & Readonly<{}>, {
    title: string;
    iconSource: string;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const NativeScriptWebPlugin: Plugin;

export { ActionBar, ActionItem, Button, ContentView, FlexboxLayout, Frame, GridLayout, ImageCacheIt, Label, ListView, NativeScriptWebPlugin, Page, StackLayout, TabView, TabViewItem };
