<script lang="ts" setup>
import { Frame } from "@nativescript/core";
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="ImageCacheIt" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <ImageCacheIt src="https://picsum.photos/200" class="mt-2" />
    </StackLayout>
  </Page>
</template>
