<script lang="ts" setup>
import { Frame } from "@nativescript/core";
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="WebView" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <WebView src="https://ponzs.com" class="border" />
    </StackLayout>
  </Page>
</template>
