<script lang="ts" setup>
import { Frame } from "@nativescript/core";
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="GridLayout" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <GridLayout rows="auto, auto" columns="*,*" class="gap-4">
        <Label row="0" col="0" text="A" class="text-white" />
        <Label row="0" col="1" text="B" class="text-white" />
        <Label row="1" col="0" text="C" class="text-white" />
        <Label row="1" col="1" text="D" class="text-white" />
      </GridLayout>
    </StackLayout>
  </Page>
</template>
