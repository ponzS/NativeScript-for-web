<script lang="ts" setup>
import { Frame } from "@nativescript/core";
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="ScrollView" class="font-bold text-lg" />
    </ActionBar>
    <ScrollView>
      <StackLayout class="p-6">
        <Label v-for="i in 30" :key="i" :text="`Line ${i}`" class="text-white" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>
