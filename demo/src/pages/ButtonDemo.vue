<script lang="ts" setup>
import { Frame } from "@nativescript/core";
import { ref } from "nativescript-vue";
const count = ref(0);
function inc() { count.value++; }
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="Button" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <Button class="p-2 border text-white" @tap="inc">Tap me</Button>
      <Label class="text-white mt-2" :text="`count:${count}`" />
    </StackLayout>
  </Page>
</template>
