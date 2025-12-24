<script lang="ts" setup>
import { Frame } from "@nativescript/core";
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="DockLayout" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <DockLayout>
        <Label dock="top" text="Top" class="text-white" />
        <Label dock="left" text="Left" class="text-white" />
        <Label dock="right" text="Right" class="text-white" />
        <Label dock="bottom" text="Bottom" class="text-white" />
        <Label text="Center" class="text-white" />
      </DockLayout>
    </StackLayout>
  </Page>
</template>
