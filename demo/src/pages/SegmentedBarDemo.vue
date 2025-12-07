<script lang="ts" setup>
import { Frame } from "@nativescript/core";
import { ref } from "nativescript-vue";
const index = ref(0);
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="SegmentedBar" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <SegmentedBar v-model:selectedIndex="index" class="mt-2">
        <SegmentedBarItem title="One" />
        <SegmentedBarItem title="Two" />
        <SegmentedBarItem title="Three" />
      </SegmentedBar>
      <Label class="text-white mt-4" :text="`Current Index: ${index}`" />
    </StackLayout>
  </Page>
</template>
