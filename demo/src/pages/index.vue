<script lang="ts" setup>
import Home from "@/components/Home.vue";
import Test from "./Test.vue";
// Use $navigateTo(Test) in templates for native navigation.
// During web generation, the transform replaces it with router.push('/Test').
</script>

<template>
  <Frame>
    <Page class="bg-[#0b0b0b]">
      <ActionBar>
        <Label text="NativeScript for web" class="font-bold text-lg" />
      </ActionBar>

      <GridLayout rows="auto, *">
        <GridLayout row="1" rows="auto,*" class="p-4">
          <TabView >
            <TabViewItem title="Home">
              <Home />
            </TabViewItem>
            <TabViewItem title="Second">
              <StackLayout>
                <Label text="Second Tab Content" class="text-white" />
                <Button class="mt-4 p-3 border rounded text-white" @tap="$navigateTo(Test)">
                  Go To Test 
                </Button>
              </StackLayout>
            </TabViewItem>
            <TabViewItem title="Third">
              <Label text="Third Tab Content" class="text-white" />
            </TabViewItem>
          </TabView>
        </GridLayout>
      </GridLayout>
    </Page>
  </Frame>
</template>
