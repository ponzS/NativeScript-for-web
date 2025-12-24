<script lang="ts" setup>
import { Frame } from "@nativescript/core";
import { ref } from "nativescript-vue";
const value = ref(50);
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="Slider" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <Slider v-model:value="value" :min="0" :max="100" />
      <Label class="text-white mt-2" :text="`Value: ${value}`" />
    </StackLayout>
  </Page>
</template>
