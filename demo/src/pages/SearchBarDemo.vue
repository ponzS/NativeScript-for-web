<script lang="ts" setup>
import { Frame } from "@nativescript/core";
import { ref } from "nativescript-vue";
const searchText = ref("");
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page >
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="SearchBar" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <SearchBar v-model:text="searchText" />
      <Label class="text-white mt-2" :text="`Search: ${searchText}`" />
    </StackLayout>
  </Page>
</template>
