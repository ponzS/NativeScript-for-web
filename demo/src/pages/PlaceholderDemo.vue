<script lang="ts" setup>
import { Frame, Label } from "@nativescript/core";
function goBack() { Frame.goBack(); }
function onCreatingView(args: any) {
  const lbl = new Label();
  lbl.text = 'Native Placeholder created';
  args.view = lbl;
}
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="Placeholder" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <Placeholder :creatingView="onCreatingView" />
      <Label class="text-white mt-2" text="On web, Placeholder is an empty container" />
    </StackLayout>
  </Page>
</template>
