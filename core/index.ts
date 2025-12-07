// Explicitly collect components and composables into objects so consumers
// can reference `core.components` and `core.composables` at runtime.
import ActionBar from './components/ActionBar.vue';
import Page from './components/Page.vue';
import Frame from './components/Frame.vue';
import StackLayout from './components/StackLayout.vue';
import GridLayout from './components/GridLayout.vue';
import FlexboxLayout from './components/FlexboxLayout.vue';
import WrapLayout from './components/WrapLayout.vue';
import ScrollView from './components/ScrollView.vue';
import Label from './components/Label.vue';
import Button from './components/Button.vue';
import Image from './components/Image.vue';
import HtmlView from './components/HtmlView.vue';
import ImageCacheIt from './components/ImageCacheIt.vue';
import TabView from './components/TabView.vue';
import TabViewItem from './components/TabViewItem.vue';
import RootLayout from './components/RootLayout.vue';
import DockLayout from './components/DockLayout.vue';
import AbsoluteLayout from './components/AbsoluteLayout.vue';
import ActionItem from './components/ActionItem.vue';
import NavigationButton from './components/NavigationButton.vue';
import ActivityIndicator from './components/ActivityIndicator.vue';
import DatePicker from './components/DatePicker.vue';
import TimePicker from './components/TimePicker.vue';
import ListPicker from './components/ListPicker.vue';
import ListView from './components/ListView.vue';
import Placeholder from './components/Placeholder.vue';
import Progress from './components/Progress.vue';
import SearchBar from './components/SearchBar.vue';
import SegmentedBar from './components/SegmentedBar.vue';
import SegmentedBarItem from './components/SegmentedBarItem.vue';
import Slider from './components/Slider.vue';
import SwitchComp from './components/Switch.vue';
import TextField from './components/TextField.vue';
import TextView from './components/TextView.vue';
import WebView from './components/WebView.vue';

export const components = {
	ActionBar,
	Page,
	Frame,
	StackLayout,
	GridLayout,
	FlexboxLayout,
	WrapLayout,
	ScrollView,
	Label,
	Button,
	Image,
	HtmlView,
	ImageCacheIt,
	TabView,
	TabViewItem,
  RootLayout,
  DockLayout,
  AbsoluteLayout,
  ActionItem,
  NavigationButton,
  ActivityIndicator,
  DatePicker,
  TimePicker,
  ListPicker,
  ListView,
  Placeholder,
  Progress,
  SearchBar,
  SegmentedBar,
  SegmentedBarItem,
  Slider,
  Switch: SwitchComp,
  TextField,
  TextView,
  WebView,
};

import * as composablesNS from './composables';
export const composables = composablesNS;

// Re-export types for convenience
export * from './types';

// Also provide the original named exports for compatibility
export { ActionBar, Page, Frame, StackLayout, GridLayout, FlexboxLayout, WrapLayout, ScrollView, Label, Button, Image, HtmlView, ImageCacheIt, TabView, TabViewItem };
export { RootLayout, DockLayout, AbsoluteLayout, ActionItem, NavigationButton, ActivityIndicator, DatePicker, TimePicker, ListPicker, ListView, Placeholder, Progress, SearchBar, SegmentedBar, SegmentedBarItem, Slider, SwitchComp as Switch, TextField, TextView, WebView };