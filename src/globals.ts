import { CoreTypes, TouchManager, View } from "@nativescript/core";

const originalTransformMap = new WeakMap<View, any>();
export function initGlobals() {
  // default Touch animations
  TouchManager.enableGlobalTapAnimations = true;
  TouchManager.animations = {
    down: (view: View) => {
      if (__APPLE__) {
        UIView.animateWithDurationDelayUsingSpringWithDampingInitialSpringVelocityOptionsAnimationsCompletion(
          0.3,
          0,
          0.5,
          3,
          UIViewAnimationOptions.CurveEaseInOut |
            UIViewAnimationOptions.AllowUserInteraction,
          () => {
            if (view?.ios) {
              if (!originalTransformMap.has(view)) {
                originalTransformMap.set(view, view.ios.transform);
              }

              view.ios.transform = CGAffineTransformConcat(
                originalTransformMap.get(view),
                CGAffineTransformMakeScale(0.97, 0.97)
              );
            }
          },
          (success) => {}
        );
      } else {
        view
          ?.animate({
            scale: { x: 0.97, y: 0.97 },
            duration: 120,
            curve: CoreTypes.AnimationCurve.easeInOut,
          })
          .then(() => {})
          .catch(() => {});
      }
    },
    up: (view: View) => {
      if (__APPLE__) {
        UIView.animateWithDurationDelayUsingSpringWithDampingInitialSpringVelocityOptionsAnimationsCompletion(
          0.3,
          0,
          0.5,
          3,
          UIViewAnimationOptions.CurveEaseInOut |
            UIViewAnimationOptions.AllowUserInteraction,
          () => {
            if (view?.ios) {
              view.ios.transform =
                originalTransformMap.get(view) ??
                CGAffineTransformMakeScale(1, 1);
            }
          },
          (success) => {}
        );
      } else {
        view
          ?.animate({
            scale: { x: 1, y: 1 },
            duration: 120,
            curve: CoreTypes.AnimationCurve.easeInOut,
          })
          .then(() => {})
          .catch(() => {});
      }
    },
  };
}
