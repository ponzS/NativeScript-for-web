<script lang="ts" setup>
import { Frame } from "@nativescript/core";
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="StackLayout" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <StackLayout class="border p-2">
        <Label text="Row1" class="text-white" />
        <Label text="Row2" class="text-white" />
        <Label text="Row3" class="text-white" />
      </StackLayout>
    </StackLayout>
  </Page>
</template>
