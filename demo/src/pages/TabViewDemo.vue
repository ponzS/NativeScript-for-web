<script lang="ts" setup>
import { Frame } from "@nativescript/core";
function goBack() { Frame.goBack(); }
</script>

<template>
  <Page class="bg-[#0b0b0b]">
    <ActionBar>
      <NavigationButton text="Back" @tap="goBack" />
      <Label text="TabView" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="p-6">
      <TabView>
        <TabViewItem title="Tab A">
          <StackLayout><Label text="Content A" class="text-white" /></StackLayout>
        </TabViewItem>
        <TabViewItem title="Tab B">
          <StackLayout><Label text="Content B" class="text-white" /></StackLayout>
        </TabViewItem>
        <TabViewItem title="Tab C">
          <StackLayout><Label text="Content C" class="text-white" /></StackLayout>
        </TabViewItem>
      </TabView>
    </StackLayout>
  </Page>
</template>
