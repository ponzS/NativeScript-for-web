<script lang="ts" setup>
import { Frame } from "@nativescript/core";
import { ref } from "nativescript-vue";
const checked = ref(true);
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="Switch" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-9">
      <FlexboxLayout alignItems="center">

        <Switch v-model:checked="checked" />
    
      </FlexboxLayout>
   
    </StackLayout>
  </Page>
</template>
