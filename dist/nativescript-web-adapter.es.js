import { defineComponent as r, createElementBlock as s, openBlock as a, renderSlot as c, ref as u } from "vue";
const p = { class: "ns-actionbar" }, d = /* @__PURE__ */ r({
  name: "ActionBar",
  __name: "ActionBar",
  setup(e) {
    return (t, o) => (a(), s("header", p, [
      c(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), _ = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, f] of t)
    o[n] = f;
  return o;
}, m = /* @__PURE__ */ _(d, [["__scopeId", "data-v-f3af35bf"]]), v = { class: "ns-page" }, b = /* @__PURE__ */ r({
  name: "Page",
  __name: "Page",
  setup(e) {
    return (t, o) => (a(), s("div", v, [
      c(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), g = /* @__PURE__ */ _(b, [["__scopeId", "data-v-87719fa5"]]), h = { class: "ns-frame" }, $ = /* @__PURE__ */ r({
  name: "Frame",
  __name: "Frame",
  setup(e) {
    return (t, o) => (a(), s("div", h, [
      c(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), O = /* @__PURE__ */ _($, [["__scopeId", "data-v-a66356e7"]]), i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionBar: m,
  Frame: O,
  Page: g
}, Symbol.toStringTag, { value: "Module" }));
function P() {
  const e = u("");
  function t(o) {
    e.value = o;
  }
  return { title: e, setTitle: t };
}
function j() {
  const e = u(!0);
  function t() {
    e.value = !0;
  }
  function o() {
    e.value = !1;
  }
  return { isVisible: e, show: t, hide: o };
}
function y() {
  const e = u([]);
  function t(n) {
    e.value.push(n);
  }
  function o() {
    return e.value.pop();
  }
  return { stack: e, push: t, pop: o };
}
const l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useActionBar: P,
  useFrame: y,
  usePage: j
}, Symbol.toStringTag, { value: "Module" })), x = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  components: i,
  composables: l
}, Symbol.toStringTag, { value: "Module" })), B = {
  install(e) {
    Object.entries(i || {}).forEach(([t, o]) => {
      e.component(t, o);
    }), e.config.globalProperties.$ns = l || {};
  }
};
export {
  x as core,
  B as default
};
