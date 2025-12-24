<script lang="ts" setup>
import { Frame } from "@nativescript/core";
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="AbsoluteLayout" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <AbsoluteLayout>
        <Label text="Absolute Container" class="text-white" />
      </AbsoluteLayout>
    </StackLayout>
  </Page>
</template>
