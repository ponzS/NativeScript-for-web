<script lang="ts" setup>
import { Frame } from "@nativescript/core";
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="FlexboxLayout" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <FlexboxLayout>
        <Label text="Item1" class="text-white mr-2" />
        <Label text="Item2" class="text-white mr-2" />
        <Label text="Item3" class="text-white" />
      </FlexboxLayout>
    </StackLayout>
  </Page>
</template>
