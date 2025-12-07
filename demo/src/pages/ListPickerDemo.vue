<script lang="ts" setup>
import { Frame } from "@nativescript/core";
import { ref } from "nativescript-vue";
const items = ref(["Apple","Banana","Cherry"]);
const selectedIndex = ref(0);
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="ListPicker" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <ListPicker :items="items" v-model:selectedIndex="selectedIndex" />
      <Label class="text-white mt-2" :text="`Selected: ${items[selectedIndex]}`" />
    </StackLayout>
  </Page>
</template>
