<script lang="ts" setup>
import { Frame } from "@nativescript/core";
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="WrapLayout" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <WrapLayout>
        <Label v-for="i in 8" :key="i" :text="`Item ${i}`" class="text-white mr-2" />
      </WrapLayout>
    </StackLayout>
  </Page>
</template>
