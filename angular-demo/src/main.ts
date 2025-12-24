import {
  bootstrapApplication,
  provideNativeScriptHttpClient,
  provideNativeScriptRouter,
  registerElement,
  runNativeScriptAngularApp,
} from "@nativescript/angular";
import { provideZonelessChangeDetection } from "@angular/core";
import { withInterceptorsFromDi } from "@angular/common/http";
import { routes } from "./app/app.routes";
import { AppComponent } from "./app/app.component";
import {
  B,
  Code,
  Div,
  H1,
  H2,
  H3,
  H4,
  P,
  Span,
} from "@triniwiz/nativescript-masonkit/web";
import { Button, Img, View } from "@triniwiz/nativescript-masonkit";

registerElement("view", () => View);
registerElement("div", () => Div);
registerElement("img", () => Img);
registerElement("text", () => Text);
registerElement("p", () => P);
registerElement("span", () => Span);
registerElement("b", () => B);
registerElement("h1", () => H1);
registerElement("h2", () => H2);
registerElement("h3", () => H3);
registerElement("h4", () => H4);
registerElement("code", () => Code);
registerElement("button", () => Button);

runNativeScriptAngularApp({
  appModuleBootstrap: () => {
    return bootstrapApplication(AppComponent, {
      providers: [
        provideNativeScriptHttpClient(withInterceptorsFromDi()),
        provideNativeScriptRouter(routes),
        provideZonelessChangeDetection(),
      ],
    });
  },
});
