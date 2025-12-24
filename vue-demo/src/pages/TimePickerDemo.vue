<script lang="ts" setup>
import { Frame } from "@nativescript/core";
import { ref } from "nativescript-vue";
const timeVal = ref<Date>(new Date());
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="TimePicker" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <TimePicker v-model:time="timeVal" class="mt-2" />
      <Label class="text-white mt-2" :text="`Time: ${timeVal?.toLocaleTimeString?.()}`" />
    </StackLayout>
  </Page>
</template>
