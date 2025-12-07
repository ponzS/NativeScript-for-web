import { defineConfig, mergeConfig, UserConfig } from "vite";
import { vueConfig } from "@nativescript/vite";

export default defineConfig(({ mode }): UserConfig => {
  return mergeConfig(vueConfig({ mode }), {});
});

