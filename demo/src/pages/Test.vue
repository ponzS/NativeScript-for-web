<script lang="ts" setup>
import { Frame } from "@nativescript/core";
import SegmentedBarDemo from "./SegmentedBarDemo.vue";
import TabViewDemo from "./TabViewDemo.vue";
import WebViewDemo from "./WebViewDemo.vue";
import SearchBarDemo from "./SearchBarDemo.vue";
import DatePickerDemo from "./DatePickerDemo.vue";
import TimePickerDemo from "./TimePickerDemo.vue";
import ActionBarDemo from "./ActionBarDemo.vue";
import LabelDemo from "./LabelDemo.vue";
import ButtonDemo from "./ButtonDemo.vue";
import ImageDemo from "./ImageDemo.vue";
import HtmlViewDemo from "./HtmlViewDemo.vue";
import ImageCacheItDemo from "./ImageCacheItDemo.vue";
import ActivityIndicatorDemo from "./ActivityIndicatorDemo.vue";
import ProgressDemo from "./ProgressDemo.vue";
import SliderDemo from "./SliderDemo.vue";
import SwitchDemo from "./SwitchDemo.vue";
import TextFieldDemo from "./TextFieldDemo.vue";
import TextViewDemo from "./TextViewDemo.vue";
import ListPickerDemo from "./ListPickerDemo.vue";
import StackLayoutDemo from "./StackLayoutDemo.vue";
import GridLayoutDemo from "./GridLayoutDemo.vue";
import FlexboxLayoutDemo from "./FlexboxLayoutDemo.vue";
import WrapLayoutDemo from "./WrapLayoutDemo.vue";
import DockLayoutDemo from "./DockLayoutDemo.vue";
import AbsoluteLayoutDemo from "./AbsoluteLayoutDemo.vue";
import ScrollViewDemo from "./ScrollViewDemo.vue";
import PlaceholderDemo from "./PlaceholderDemo.vue";

function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="Components" class="font-bold text-lg" />
    </ActionBar>

    <ScrollView>
      <StackLayout class="p-6">
        <Label class="text-white text-lg font-bold mb-4" text="Components" />

        <StackLayout class="gap-2">
          <Label class="text-white text-base" text="Navigation / Header" />
          <Button class="p-2 border text-white" @tap="$navigateTo(ActionBarDemo)">ActionBar</Button>
          
          <Label class="text-white text-base mt-4" text="Tabs / Segments" />
          <Button class="p-2 border text-white" @tap="$navigateTo(SegmentedBarDemo)">SegmentedBar</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(TabViewDemo)">TabView</Button>
          
          <Label class="text-white text-base mt-4" text="Inputs / Forms" />
          <Button class="p-2 border text-white" @tap="$navigateTo(SearchBarDemo)">SearchBar</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(TextFieldDemo)">TextField</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(TextViewDemo)">TextView</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(DatePickerDemo)">DatePicker</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(TimePickerDemo)">TimePicker</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(ListPickerDemo)">ListPicker</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(SliderDemo)">Slider</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(SwitchDemo)">Switch</Button>
          
          <Label class="text-white text-base mt-4" text="Indicators / Display" />
          <Button class="p-2 border text-white" @tap="$navigateTo(ActivityIndicatorDemo)">ActivityIndicator</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(ProgressDemo)">Progress</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(LabelDemo)">Label</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(ButtonDemo)">Button</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(ImageDemo)">Image</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(HtmlViewDemo)">HtmlView</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(ImageCacheItDemo)">ImageCacheIt</Button>
          
          <Label class="text-white text-base mt-4" text="Layout Containers" />
          <Button class="p-2 border text-white" @tap="$navigateTo(StackLayoutDemo)">StackLayout</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(GridLayoutDemo)">GridLayout</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(FlexboxLayoutDemo)">FlexboxLayout</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(WrapLayoutDemo)">WrapLayout</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(DockLayoutDemo)">DockLayout</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(AbsoluteLayoutDemo)">AbsoluteLayout</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(ScrollViewDemo)">ScrollView</Button>
          
          <Label class="text-white text-base mt-4" text="Others" />
          <Button class="p-2 border text-white" @tap="$navigateTo(WebViewDemo)">WebView</Button>
          <Button class="p-2 border text-white" @tap="$navigateTo(PlaceholderDemo)">Placeholder</Button>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>
