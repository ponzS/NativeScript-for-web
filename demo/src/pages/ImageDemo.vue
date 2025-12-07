<script lang="ts" setup>
import { Frame } from "@nativescript/core";
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="Image" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <Image src="https://picsum.photos/200" class="mt-2" />
      <Label class="text-white mt-2" text="Random placeholder image (changes by network)" />
    </StackLayout>
  </Page>
</template>
