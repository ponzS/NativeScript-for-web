<script lang="ts" setup>
import { Frame } from "@nativescript/core";
import { ref } from "nativescript-vue";
const text = ref("Hello");
const submitted = ref("");
function onSubmit(v: string) { submitted.value = v; }
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="TextField" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <TextField v-model:text="text" @submit="onSubmit" />
      <Label class="text-white mt-2" :text="`Text: ${text}`" />
      <Label class="text-white" :text="`Submitted: ${submitted}`" />
    </StackLayout>
  </Page>
</template>
