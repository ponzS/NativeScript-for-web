<script lang="ts" setup>
import ActionBarDemo from "../pages/ActionBarDemo.vue";
import SegmentedBarDemo from "../pages/SegmentedBarDemo.vue";
import TabViewDemo from "../pages/TabViewDemo.vue";
import SearchBarDemo from "../pages/SearchBarDemo.vue";
import TextFieldDemo from "../pages/TextFieldDemo.vue";
import TextViewDemo from "../pages/TextViewDemo.vue";
import DatePickerDemo from "../pages/DatePickerDemo.vue";
import TimePickerDemo from "../pages/TimePickerDemo.vue";
import ListPickerDemo from "../pages/ListPickerDemo.vue";
import ActivityIndicatorDemo from "../pages/ActivityIndicatorDemo.vue";
import ProgressDemo from "../pages/ProgressDemo.vue";
import SliderDemo from "../pages/SliderDemo.vue";
import LabelDemo from "../pages/LabelDemo.vue";
import ButtonDemo from "../pages/ButtonDemo.vue";
import ImageDemo from "../pages/ImageDemo.vue";
import HtmlViewDemo from "../pages/HtmlViewDemo.vue";
import ImageCacheItDemo from "../pages/ImageCacheItDemo.vue";
import StackLayoutDemo from "../pages/StackLayoutDemo.vue";
import GridLayoutDemo from "../pages/GridLayoutDemo.vue";
import FlexboxLayoutDemo from "../pages/FlexboxLayoutDemo.vue";
import WrapLayoutDemo from "../pages/WrapLayoutDemo.vue";
import DockLayoutDemo from "../pages/DockLayoutDemo.vue";
import AbsoluteLayoutDemo from "../pages/AbsoluteLayoutDemo.vue";
import ScrollViewDemo from "../pages/ScrollViewDemo.vue";
import WebViewDemo from "../pages/WebViewDemo.vue";
import PlaceholderDemo from "../pages/PlaceholderDemo.vue";
import SwitchDemo from "../pages/SwitchDemo.vue";

</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar class="ActionBar">
      <Label text="NativeScript for Web" class="font-bold text-lg" />
    </ActionBar>

    <ScrollView>
  
        <StackLayout class="gradient-purple p-6 rounded-lg">
          <Label class="text-2xl font-bold text-[#e5e5e5]" text="npm i nativescript-web-adapter" />
          <Label class="text-white mt-2" text="Web adapter and showcase components for NativeScript projects" />

          <GridLayout columns="*,*" class="mt-4">
            <StackLayout col="0" class="p-4 border-2 border-[#3a3a3a] rounded-lg">
              <Label class="text-white font-bold" text="Quick Start" />
              <Label class="text-[#e5e5e5] mt-2" text="iOS: ns debug ios" />
              <Label class="text-[#e5e5e5] mt-1" text="Android: ns debug android" />
            </StackLayout>
            <StackLayout col="1" class="p-4 border-2 border-[#3a3a3a] rounded-lg">
              <Label class="text-white font-bold" text="Web Build" />
              <Label class="text-[#e5e5e5] mt-2" text="Vue: npx ns-web vue" />
              <Label class="text-[#e5e5e5] mt-1" text="Nuxt: npx ns-web nuxt" />
            </StackLayout>
          </GridLayout>
        </StackLayout>


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

<style scoped>
Button{
  background-color: #111111;
  color: #e5e5e5;
  border: 1px solid #3a3a3a;
  border-radius: 6px;
}
.ActionBar{
  background-color: #1cc3aa;
  color: #e5e5e5;
}
</style>
