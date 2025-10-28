import { createApp, registerElement } from "nativescript-vue";
import { ImageCacheIt } from "@triniwiz/nativescript-image-cache-it";
import { initGlobals } from "./globals";
initGlobals();

import Home from "./components/Home.vue";
import { Application, Color, Utils } from "@nativescript/core";

registerElement("ImageCacheIt", () => ImageCacheIt);

Application.on(Application.launchEvent, function (args) {
  if (__ANDROID__) {
    const activity = Utils.android.getCurrentActivity();
    if (!activity) return;

    const window = activity.getWindow();

    // light/white icons
    if (android.os.Build.VERSION.SDK_INT >= 30) {
      // Android 11 (API 30+)
      const controller = window.getInsetsController?.();
      if (!controller) return;

      const flag =
        android.view.WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS;
      controller.setSystemBarsAppearance(0, flag); // clear -> white icons/text
    } else if (android.os.Build.VERSION.SDK_INT >= 23) {
      // Android 6.0–10 (API 23–29)
      const decor = window.getDecorView();
      const LIGHT = android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR; // dark icons
      const vis = decor.getSystemUiVisibility();
      decor.setSystemUiVisibility(vis & ~LIGHT); // clear -> white icons/text
    }
    Utils.android.setNavigationBarColor(new Color('#000000'));
  }
});
createApp(Home).start();
