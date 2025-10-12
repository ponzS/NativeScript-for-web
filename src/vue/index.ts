import type { App, Plugin } from 'vue';
import './adapter.css';
import { Label } from './components/Label';
import { Button } from './components/Button';
import { StackLayout } from './components/StackLayout';
import { FlexboxLayout } from './components/FlexboxLayout';
import { GridLayout } from './components/GridLayout';
import { Page } from './components/Page';
import { Frame } from './components/Frame';
import { ActionBar } from './components/ActionBar';
import { ActionItem } from './components/ActionItem';
import { ImageCacheIt } from './components/ImageCacheIt';
import { ContentView } from './components/ContentView';
import { ListView } from './components/ListView';
import { TabView } from './components/TabView';
import { TabViewItem } from './components/TabViewItem';

export const NativeScriptWebPlugin: Plugin = {
  install(app: App) {
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

export { Label, Button, StackLayout, FlexboxLayout, GridLayout, Page, Frame, ActionBar, ActionItem, ImageCacheIt, ContentView, ListView, TabView, TabViewItem };
