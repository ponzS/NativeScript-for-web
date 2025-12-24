var zT = Object.defineProperty;
var GT = (e, t, n) => t in e ? zT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var S = (e, t, n) => GT(e, typeof t != "symbol" ? t + "" : t, n);
import { defineComponent as Dp, createElementBlock as Ep, openBlock as Cp, renderSlot as Ip, ref as bp } from "vue";
const WT = { class: "ns-actionbar" }, ZT = /* @__PURE__ */ Dp({
  name: "ActionBar",
  __name: "ActionBar",
  setup(e) {
    return (t, n) => (Cp(), Ep("header", WT, [
      Ip(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), wp = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, qT = /* @__PURE__ */ wp(ZT, [["__scopeId", "data-v-f3af35bf"]]), QT = { class: "ns-page" }, YT = /* @__PURE__ */ Dp({
  name: "Page",
  __name: "Page",
  setup(e) {
    return (t, n) => (Cp(), Ep("div", QT, [
      Ip(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), KT = /* @__PURE__ */ wp(YT, [["__scopeId", "data-v-87719fa5"]]), JT = { class: "ns-frame" }, XT = /* @__PURE__ */ Dp({
  name: "Frame",
  __name: "Frame",
  setup(e) {
    return (t, n) => (Cp(), Ep("div", JT, [
      Ip(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), e1 = /* @__PURE__ */ wp(XT, [["__scopeId", "data-v-a66356e7"]]), kE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionBar: qT,
  Frame: e1,
  Page: KT
}, Symbol.toStringTag, { value: "Module" }));
function t1() {
  const e = bp("");
  function t(n) {
    e.value = n;
  }
  return { title: e, setTitle: t };
}
function n1() {
  const e = bp(!0);
  function t() {
    e.value = !0;
  }
  function n() {
    e.value = !1;
  }
  return { isVisible: e, show: t, hide: n };
}
function r1() {
  const e = bp([]);
  function t(r) {
    e.value.push(r);
  }
  function n() {
    return e.value.pop();
  }
  return { stack: e, push: t, pop: n };
}
const LE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useActionBar: t1,
  useFrame: r1,
  usePage: n1
}, Symbol.toStringTag, { value: "Module" })), V8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  components: kE,
  composables: LE
}, Symbol.toStringTag, { value: "Module" }));
async function jE(e, t, n) {
  window.alert(t ? `${t}

${e}` : e);
}
async function $E(e, t, n, r) {
  return window.confirm(t ? `${t}

${e}` : e);
}
async function BE(e, t = "", n, r, o) {
  const s = window.prompt(n ? `${n}

${e}` : e, t);
  return { result: s !== null, text: s ?? "" };
}
async function HE(e = "登录", t = "", n = "", r, o, s) {
  const i = window.prompt(r ? `${r}

${e} - 用户名` : `${e} - 用户名`, t);
  if (i === null) return { result: !1, userName: "", password: "" };
  const a = window.prompt(r ? `${r}

${e} - 密码` : `${e} - 密码`, n);
  return a === null ? { result: !1, userName: "", password: "" } : { result: !0, userName: i, password: a };
}
async function UE(e, t) {
  const n = typeof e == "string" ? e : e.message || "选择一个操作", r = typeof e == "string" ? [] : e.actions || [], o = t ? `${t}

${n}${r.length ? `
选项: ${r.join(", ")}` : ""}` : `${n}${r.length ? `
选项: ${r.join(", ")}` : ""}`, s = window.prompt(o);
  return s ? r.length ? r.find((a) => a.toLowerCase() === s.toLowerCase()) ?? void 0 : s : void 0;
}
function bc(e) {
  return { value: e };
}
function VE() {
  const e = bc("");
  function t(n) {
    e.value = n;
  }
  return {
    title: e,
    setTitle: t
  };
}
function zE() {
  const e = bc([]);
  function t(r) {
    e.value.push(r);
  }
  function n() {
    return e.value.pop();
  }
  return {
    stack: e,
    push: t,
    pop: n
  };
}
function GE() {
  const e = bc(!0);
  function t() {
    e.value = !0;
  }
  function n() {
    e.value = !1;
  }
  return {
    isVisible: e,
    show: t,
    hide: n
  };
}
const o1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: UE,
  alert: jE,
  confirm: $E,
  login: HE,
  prompt: BE,
  ref: bc,
  useActionBar: VE,
  useFrame: zE,
  usePage: GE
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license Angular v18.2.14
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */
function WE(e, t) {
  return Object.is(e, t);
}
let Te = null, la = !1, _u = 1;
const ft = /* @__PURE__ */ Symbol("SIGNAL");
function U(e) {
  const t = Te;
  return Te = e, t;
}
function _p() {
  return Te;
}
function s1() {
  return la;
}
const wc = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {
  },
  consumerMarkedDirty: () => {
  },
  consumerOnSignalRead: () => {
  }
};
function $l(e) {
  if (la)
    throw new Error(typeof ngDevMode < "u" && ngDevMode ? "Assertion error: signal read during notification phase" : "");
  if (Te === null)
    return;
  Te.consumerOnSignalRead(e);
  const t = Te.nextProducerIndex++;
  if (Hl(Te), t < Te.producerNode.length && Te.producerNode[t] !== e && Ra(Te)) {
    const n = Te.producerNode[t];
    Bl(n, Te.producerIndexOfThis[t]);
  }
  Te.producerNode[t] !== e && (Te.producerNode[t] = e, Te.producerIndexOfThis[t] = Ra(Te) ? KE(e, Te, t) : 0), Te.producerLastReadVersion[t] = e.version;
}
function i1() {
  _u++;
}
function ZE(e) {
  if (!(Ra(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === _u)) {
    if (!e.producerMustRecompute(e) && !Sp(e)) {
      e.dirty = !1, e.lastCleanEpoch = _u;
      return;
    }
    e.producerRecomputeValue(e), e.dirty = !1, e.lastCleanEpoch = _u;
  }
}
function qE(e) {
  if (e.liveConsumerNode === void 0)
    return;
  const t = la;
  la = !0;
  try {
    for (const n of e.liveConsumerNode)
      n.dirty || YE(n);
  } finally {
    la = t;
  }
}
function QE() {
  return (Te == null ? void 0 : Te.consumerAllowSignalWrites) !== !1;
}
function YE(e) {
  var t;
  e.dirty = !0, qE(e), (t = e.consumerMarkedDirty) == null || t.call(e, e);
}
function Hu(e) {
  return e && (e.nextProducerIndex = 0), U(e);
}
function Mp(e, t) {
  if (U(t), !(!e || e.producerNode === void 0 || e.producerIndexOfThis === void 0 || e.producerLastReadVersion === void 0)) {
    if (Ra(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        Bl(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(), e.producerLastReadVersion.pop(), e.producerIndexOfThis.pop();
  }
}
function Sp(e) {
  Hl(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    const n = e.producerNode[t], r = e.producerLastReadVersion[t];
    if (r !== n.version || (ZE(n), r !== n.version))
      return !0;
  }
  return !1;
}
function Tp(e) {
  if (Hl(e), Ra(e))
    for (let t = 0; t < e.producerNode.length; t++)
      Bl(e.producerNode[t], e.producerIndexOfThis[t]);
  e.producerNode.length = e.producerLastReadVersion.length = e.producerIndexOfThis.length = 0, e.liveConsumerNode && (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function KE(e, t, n) {
  if (JE(e), e.liveConsumerNode.length === 0 && XE(e))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = KE(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function Bl(e, t) {
  if (JE(e), typeof ngDevMode < "u" && ngDevMode && t >= e.liveConsumerNode.length)
    throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);
  if (e.liveConsumerNode.length === 1 && XE(e))
    for (let r = 0; r < e.producerNode.length; r++)
      Bl(e.producerNode[r], e.producerIndexOfThis[r]);
  const n = e.liveConsumerNode.length - 1;
  if (e.liveConsumerNode[t] = e.liveConsumerNode[n], e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n], e.liveConsumerNode.length--, e.liveConsumerIndexOfThis.length--, t < e.liveConsumerNode.length) {
    const r = e.liveConsumerIndexOfThis[t], o = e.liveConsumerNode[t];
    Hl(o), o.producerIndexOfThis[r] = t;
  }
}
function Ra(e) {
  var t;
  return e.consumerIsAlwaysLive || (((t = e == null ? void 0 : e.liveConsumerNode) == null ? void 0 : t.length) ?? 0) > 0;
}
function Hl(e) {
  e.producerNode ?? (e.producerNode = []), e.producerIndexOfThis ?? (e.producerIndexOfThis = []), e.producerLastReadVersion ?? (e.producerLastReadVersion = []);
}
function JE(e) {
  e.liveConsumerNode ?? (e.liveConsumerNode = []), e.liveConsumerIndexOfThis ?? (e.liveConsumerIndexOfThis = []);
}
function XE(e) {
  return e.producerNode !== void 0;
}
function eC(e) {
  const t = Object.create(a1);
  t.computation = e;
  const n = () => {
    if (ZE(t), $l(t), t.value === Mu)
      throw t.error;
    return t.value;
  };
  return n[ft] = t, n;
}
const af = /* @__PURE__ */ Symbol("UNSET"), cf = /* @__PURE__ */ Symbol("COMPUTING"), Mu = /* @__PURE__ */ Symbol("ERRORED"), a1 = {
  ...wc,
  value: af,
  dirty: !0,
  error: null,
  equal: WE,
  producerMustRecompute(e) {
    return e.value === af || e.value === cf;
  },
  producerRecomputeValue(e) {
    if (e.value === cf)
      throw new Error("Detected cycle in computations.");
    const t = e.value;
    e.value = cf;
    const n = Hu(e);
    let r;
    try {
      r = e.computation();
    } catch (o) {
      r = Mu, e.error = o;
    } finally {
      Mp(e, n);
    }
    if (t !== af && t !== Mu && r !== Mu && e.equal(t, r)) {
      e.value = t;
      return;
    }
    e.value = r, e.version++;
  }
};
function c1() {
  throw new Error();
}
let tC = c1;
function nC() {
  tC();
}
function u1(e) {
  tC = e;
}
function l1(e) {
  const t = Object.create(rC);
  t.value = e;
  const n = () => ($l(t), t.value);
  return n[ft] = t, n;
}
function Ul(e, t) {
  QE() || nC(), e.equal(e.value, t) || (e.value = t, f1(e));
}
function d1(e, t) {
  QE() || nC(), Ul(e, t(e.value));
}
const rC = {
  ...wc,
  equal: WE,
  value: void 0
};
function f1(e) {
  e.version++, i1(), qE(e);
}
function h1(e, t, n) {
  const r = Object.create(p1);
  n && (r.consumerAllowSignalWrites = !0), r.fn = e, r.schedule = t;
  const o = (c) => {
    r.cleanupFn = c;
  };
  function s(c) {
    return c.fn === null && c.schedule === null;
  }
  function i(c) {
    s(c) || (Tp(c), c.cleanupFn(), c.fn = null, c.schedule = null, c.cleanupFn = Zf);
  }
  const a = () => {
    if (r.fn === null)
      return;
    if (s1())
      throw new Error("Schedulers cannot synchronously execute watches while scheduling.");
    if (r.dirty = !1, r.hasRun && !Sp(r))
      return;
    r.hasRun = !0;
    const c = Hu(r);
    try {
      r.cleanupFn(), r.cleanupFn = Zf, r.fn(o);
    } finally {
      Mp(r, c);
    }
  };
  return r.ref = {
    notify: () => YE(r),
    run: a,
    cleanup: () => r.cleanupFn(),
    destroy: () => i(r),
    [ft]: r
  }, r.ref;
}
const Zf = () => {
}, p1 = {
  ...wc,
  consumerIsAlwaysLive: !0,
  consumerAllowSignalWrites: !1,
  consumerMarkedDirty: (e) => {
    e.schedule !== null && e.schedule(e.ref);
  },
  hasRun: !1,
  cleanupFn: Zf
};
var qf = function(e, t) {
  return qf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
  }, qf(e, t);
};
function wi(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  qf(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function Qf(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Yf(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), o, s = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) s.push(o.value);
  } catch (a) {
    i = { error: a };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (i) throw i.error;
    }
  }
  return s;
}
function Kf(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function an(e) {
  return typeof e == "function";
}
function Ap(e) {
  var t = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = e(t);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var uf = Ap(function(e) {
  return function(n) {
    e(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, o) {
      return o + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Jf(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var Po = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, n, r, o, s;
    if (!this.closed) {
      this.closed = !0;
      var i = this._parentage;
      if (i)
        if (this._parentage = null, Array.isArray(i))
          try {
            for (var a = Qf(i), c = a.next(); !c.done; c = a.next()) {
              var u = c.value;
              u.remove(this);
            }
          } catch (g) {
            t = { error: g };
          } finally {
            try {
              c && !c.done && (n = a.return) && n.call(a);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          i.remove(this);
      var l = this.initialTeardown;
      if (an(l))
        try {
          l();
        } catch (g) {
          s = g instanceof uf ? g.errors : [g];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var f = Qf(d), h = f.next(); !h.done; h = f.next()) {
            var p = h.value;
            try {
              gv(p);
            } catch (g) {
              s = s ?? [], g instanceof uf ? s = Kf(Kf([], Yf(s)), Yf(g.errors)) : s.push(g);
            }
          }
        } catch (g) {
          r = { error: g };
        } finally {
          try {
            h && !h.done && (o = f.return) && o.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (s)
        throw new uf(s);
    }
  }, e.prototype.add = function(t) {
    var n;
    if (t && t !== this)
      if (this.closed)
        gv(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var n = this._parentage;
    return n === t || Array.isArray(n) && n.includes(t);
  }, e.prototype._addParent = function(t) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }, e.prototype._removeParent = function(t) {
    var n = this._parentage;
    n === t ? this._parentage = null : Array.isArray(n) && Jf(n, t);
  }, e.prototype.remove = function(t) {
    var n = this._finalizers;
    n && Jf(n, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), oC = Po.EMPTY;
function sC(e) {
  return e instanceof Po || e && "closed" in e && an(e.remove) && an(e.add) && an(e.unsubscribe);
}
function gv(e) {
  an(e) ? e() : e.unsubscribe();
}
var g1 = {
  Promise: void 0
}, m1 = {
  setTimeout: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Kf([e, t], Yf(n)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function y1(e) {
  m1.setTimeout(function() {
    throw e;
  });
}
function mv() {
}
function Su(e) {
  e();
}
var Op = function(e) {
  wi(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, sC(n) && n.add(r)) : r.destination = E1, r;
  }
  return t.create = function(n, r, o) {
    return new Xf(n, r, o);
  }, t.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, t.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(n) {
    this.destination.next(n);
  }, t.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(Po), v1 = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(t);
      } catch (r) {
        iu(r);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (r) {
        iu(r);
      }
    else
      iu(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        iu(n);
      }
  }, e;
}(), Xf = function(e) {
  wi(t, e);
  function t(n, r, o) {
    var s = e.call(this) || this, i;
    return an(n) || !n ? i = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: o ?? void 0
    } : i = n, s.destination = new v1(i), s;
  }
  return t;
}(Op);
function iu(e) {
  y1(e);
}
function D1(e) {
  throw e;
}
var E1 = {
  closed: !0,
  next: mv,
  error: D1,
  complete: mv
}, C1 = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function iC(e) {
  return e;
}
function I1(e) {
  return e.length === 0 ? iC : e.length === 1 ? e[0] : function(n) {
    return e.reduce(function(r, o) {
      return o(r);
    }, n);
  };
}
var eh = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, r) {
    var o = this, s = w1(t) ? t : new Xf(t, n, r);
    return Su(function() {
      var i = o, a = i.operator, c = i.source;
      s.add(a ? a.call(s, c) : c ? o._subscribe(s) : o._trySubscribe(s));
    }), s;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (n) {
      t.error(n);
    }
  }, e.prototype.forEach = function(t, n) {
    var r = this;
    return n = yv(n), new n(function(o, s) {
      var i = new Xf({
        next: function(a) {
          try {
            t(a);
          } catch (c) {
            s(c), i.unsubscribe();
          }
        },
        error: s,
        complete: o
      });
      r.subscribe(i);
    });
  }, e.prototype._subscribe = function(t) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t);
  }, e.prototype[C1] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    return I1(t)(this);
  }, e.prototype.toPromise = function(t) {
    var n = this;
    return t = yv(t), new t(function(r, o) {
      var s;
      n.subscribe(function(i) {
        return s = i;
      }, function(i) {
        return o(i);
      }, function() {
        return r(s);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function yv(e) {
  var t;
  return (t = e ?? g1.Promise) !== null && t !== void 0 ? t : Promise;
}
function b1(e) {
  return e && an(e.next) && an(e.error) && an(e.complete);
}
function w1(e) {
  return e && e instanceof Op || b1(e) && sC(e);
}
function _1(e) {
  return an(e == null ? void 0 : e.lift);
}
function _c(e) {
  return function(t) {
    if (_1(t))
      return t.lift(function(n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Mc(e, t, n, r, o) {
  return new M1(e, t, n, r, o);
}
var M1 = function(e) {
  wi(t, e);
  function t(n, r, o, s, i, a) {
    var c = e.call(this, n) || this;
    return c.onFinalize = i, c.shouldUnsubscribe = a, c._next = r ? function(u) {
      try {
        r(u);
      } catch (l) {
        n.error(l);
      }
    } : e.prototype._next, c._error = s ? function(u) {
      try {
        s(u);
      } catch (l) {
        n.error(l);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, c._complete = o ? function() {
      try {
        o();
      } catch (u) {
        n.error(u);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, c;
  }
  return t.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      e.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, t;
}(Op), S1 = Ap(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Fa = function(e) {
  wi(t, e);
  function t() {
    var n = e.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return t.prototype.lift = function(n) {
    var r = new vv(this, this);
    return r.operator = n, r;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new S1();
  }, t.prototype.next = function(n) {
    var r = this;
    Su(function() {
      var o, s;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var i = Qf(r.currentObservers), a = i.next(); !a.done; a = i.next()) {
            var c = a.value;
            c.next(n);
          }
        } catch (u) {
          o = { error: u };
        } finally {
          try {
            a && !a.done && (s = i.return) && s.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    });
  }, t.prototype.error = function(n) {
    var r = this;
    Su(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var o = r.observers; o.length; )
          o.shift().error(n);
      }
    });
  }, t.prototype.complete = function() {
    var n = this;
    Su(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n);
  }, t.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, t.prototype._innerSubscribe = function(n) {
    var r = this, o = this, s = o.hasError, i = o.isStopped, a = o.observers;
    return s || i ? oC : (this.currentObservers = null, a.push(n), new Po(function() {
      r.currentObservers = null, Jf(a, n);
    }));
  }, t.prototype._checkFinalizedStatuses = function(n) {
    var r = this, o = r.hasError, s = r.thrownError, i = r.isStopped;
    o ? n.error(s) : i && n.complete();
  }, t.prototype.asObservable = function() {
    var n = new eh();
    return n.source = this, n;
  }, t.create = function(n, r) {
    return new vv(n, r);
  }, t;
}(eh), vv = function(e) {
  wi(t, e);
  function t(n, r) {
    var o = e.call(this) || this;
    return o.destination = n, o.source = r, o;
  }
  return t.prototype.next = function(n) {
    var r, o;
    (o = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || o === void 0 || o.call(r, n);
  }, t.prototype.error = function(n) {
    var r, o;
    (o = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || o === void 0 || o.call(r, n);
  }, t.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, t.prototype._subscribe = function(n) {
    var r, o;
    return (o = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && o !== void 0 ? o : oC;
  }, t;
}(Fa), T1 = function(e) {
  wi(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r._value = n, r;
  }
  return Object.defineProperty(t.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._subscribe = function(n) {
    var r = e.prototype._subscribe.call(this, n);
    return !r.closed && n.next(this._value), r;
  }, t.prototype.getValue = function() {
    var n = this, r = n.hasError, o = n.thrownError, s = n._value;
    if (r)
      throw o;
    return this._throwIfClosed(), s;
  }, t.prototype.next = function(n) {
    e.prototype.next.call(this, this._value = n);
  }, t;
}(Fa), A1 = new eh(function(e) {
  return e.complete();
}), aC = Ap(function(e) {
  return function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function O1(e, t) {
  return _c(function(n, r) {
    var o = 0;
    n.subscribe(Mc(r, function(s) {
      r.next(e.call(t, s, o++));
    }));
  });
}
function P1(e, t) {
  return _c(function(n, r) {
    var o = 0;
    n.subscribe(Mc(r, function(s) {
      return e.call(t, s, o++) && r.next(s);
    }));
  });
}
function x1(e) {
  return _c(function(t, n) {
    var r = !1;
    t.subscribe(Mc(n, function(o) {
      r = !0, n.next(o);
    }, function() {
      r || n.next(e), n.complete();
    }));
  });
}
function N1(e) {
  return e <= 0 ? function() {
    return A1;
  } : _c(function(t, n) {
    var r = 0;
    t.subscribe(Mc(n, function(o) {
      ++r <= e && (n.next(o), e <= r && n.complete());
    }));
  });
}
function R1(e) {
  return e === void 0 && (e = F1), _c(function(t, n) {
    var r = !1;
    t.subscribe(Mc(n, function(o) {
      r = !0, n.next(o);
    }, function() {
      return r ? n.complete() : n.error(e());
    }));
  });
}
function F1() {
  return new aC();
}
function k1(e, t) {
  var n = arguments.length >= 2;
  return function(r) {
    return r.pipe(e ? P1(function(o, s) {
      return e(o, s, r);
    }) : iC, N1(1), n ? x1(t) : R1(function() {
      return new aC();
    }));
  };
}
/**
 * @license Angular v18.2.14
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */
const Uu = {
  /**
   * The jsaction attribute defines a mapping of a DOM event to a
   * generic event (aka jsaction), to which the actual event handlers
   * that implement the behavior of the application are bound. The
   * value is a semicolon separated list of colon separated pairs of
   * an optional DOM event name and a jsaction name. If the optional
   * DOM event name is omitted, 'click' is assumed. The jsaction names
   * are dot separated pairs of a namespace and a simple jsaction
   * name.
   *
   * See grammar in README.md for expected syntax in the attribute value.
   */
  JSACTION: "jsaction"
}, Pp = {
  /**
   * The parsed value of the jsaction attribute is stored in this
   * property on the DOM node. The parsed value is an Object. The
   * property names of the object are the events; the values are the
   * names of the actions. This property is attached even on nodes
   * that don't have a jsaction attribute as an optimization, because
   * property lookup is faster than attribute access.
   */
  JSACTION: "__jsaction",
  /**
   * The owner property references an a logical owner for a DOM node. JSAction
   * will follow this reference instead of parentNode when traversing the DOM
   * to find jsaction attributes. This allows overlaying a logical structure
   * over a document where the DOM structure can't reflect that structure.
   */
  OWNER: "__owner"
}, cC = {};
function L1(e) {
  return e[Pp.JSACTION];
}
function Dv(e, t) {
  e[Pp.JSACTION] = t;
}
function j1(e) {
  return cC[e];
}
function $1(e, t) {
  cC[e] = t;
}
const N = {
  /**
   * The click event. In addEvent() refers to all click events, in the
   * jsaction attribute it refers to the unmodified click and Enter/Space
   * keypress events.  In the latter case, a jsaction click will be triggered,
   * for accessibility reasons.  See clickmod and clickonly, below.
   */
  CLICK: "click",
  /**
   * Specifies the jsaction for a modified click event (i.e. a mouse
   * click with the modifier key Cmd/Ctrl pressed). This event isn't
   * separately enabled in addEvent(), because in the DOM, it's just a
   * click event.
   */
  CLICKMOD: "clickmod",
  /**
   * The dblclick event.
   */
  DBLCLICK: "dblclick",
  /**
   * Focus doesn't bubble, but you can use it in addEvent() and
   * jsaction anyway. EventContract does the right thing under the
   * hood.
   */
  FOCUS: "focus",
  /**
   * This event only exists in IE. For addEvent() and jsaction, use
   * focus instead; EventContract does the right thing even though
   * focus doesn't bubble.
   */
  FOCUSIN: "focusin",
  /**
   * Analog to focus.
   */
  BLUR: "blur",
  /**
   * Analog to focusin.
   */
  FOCUSOUT: "focusout",
  /**
   * Submit doesn't bubble, so it cannot be used with event
   * contract. However, the browser helpfully fires a click event on
   * the submit button of a form (even if the form is not submitted by
   * a click on the submit button). So you should handle click on the
   * submit button instead.
   */
  SUBMIT: "submit",
  /**
   * The keydown event. In addEvent() and non-click jsaction it represents the
   * regular DOM keydown event. It represents click actions in non-Gecko
   * browsers.
   */
  KEYDOWN: "keydown",
  /**
   * The keypress event. In addEvent() and non-click jsaction it represents the
   * regular DOM keypress event. It represents click actions in Gecko browsers.
   */
  KEYPRESS: "keypress",
  /**
   * The keyup event. In addEvent() and non-click jsaction it represents the
   * regular DOM keyup event. It represents click actions in non-Gecko
   * browsers.
   */
  KEYUP: "keyup",
  /**
   * The mouseover event. Can either be used directly or used implicitly to
   * capture mouseenter events. In addEvent(), it represents a regular DOM
   * mouseover event.
   */
  MOUSEOVER: "mouseover",
  /**
   * The mouseout event. Can either be used directly or used implicitly to
   * capture mouseover events. In addEvent(), it represents a regular DOM
   * mouseout event.
   */
  MOUSEOUT: "mouseout",
  /**
   * The mouseenter event. Does not bubble and fires individually on each
   * element being entered within a DOM tree.
   */
  MOUSEENTER: "mouseenter",
  /**
   * The mouseleave event. Does not bubble and fires individually on each
   * element being entered within a DOM tree.
   */
  MOUSELEAVE: "mouseleave",
  /**
   * The pointerover event. Can either be used directly or used implicitly to
   * capture pointerenter events. In addEvent(), it represents a regular DOM
   * pointerover event.
   */
  POINTEROVER: "pointerover",
  /**
   * The pointerout event. Can either be used directly or used implicitly to
   * capture pointerover events. In addEvent(), it represents a regular DOM
   * pointerout event.
   */
  POINTEROUT: "pointerout",
  /**
   * The pointerenter event. Does not bubble and fires individually on each
   * element being entered within a DOM tree.
   */
  POINTERENTER: "pointerenter",
  /**
   * The pointerleave event. Does not bubble and fires individually on each
   * element being entered within a DOM tree.
   */
  POINTERLEAVE: "pointerleave",
  /**
   * The error event. The error event doesn't bubble, but you can use it in
   * addEvent() and jsaction anyway. EventContract does the right thing under
   * the hood (except in IE8 which does not use error events).
   */
  ERROR: "error",
  /**
   * The load event. The load event doesn't bubble, but you can use it in
   * addEvent() and jsaction anyway. EventContract does the right thing
   * under the hood.
   */
  LOAD: "load",
  /**
   * The touchstart event. Bubbles, will only ever fire in browsers with
   * touch support.
   */
  TOUCHSTART: "touchstart",
  /**
   * The touchend event. Bubbles, will only ever fire in browsers with
   * touch support.
   */
  TOUCHEND: "touchend",
  /**
   * The touchmove event. Bubbles, will only ever fire in browsers with
   * touch support.
   */
  TOUCHMOVE: "touchmove",
  /**
   * The toggle event. The toggle event doesn't bubble, but you can use it in
   * addEvent() and jsaction anyway. EventContract does the right thing
   * under the hood.
   */
  TOGGLE: "toggle"
}, B1 = [
  N.MOUSEENTER,
  N.MOUSELEAVE,
  "pointerenter",
  "pointerleave"
], H1 = [
  N.CLICK,
  N.DBLCLICK,
  N.FOCUSIN,
  N.FOCUSOUT,
  N.KEYDOWN,
  N.KEYUP,
  N.KEYPRESS,
  N.MOUSEOVER,
  N.MOUSEOUT,
  N.SUBMIT,
  N.TOUCHSTART,
  N.TOUCHEND,
  N.TOUCHMOVE,
  "touchcancel",
  "auxclick",
  "change",
  "compositionstart",
  "compositionupdate",
  "compositionend",
  "beforeinput",
  "input",
  "select",
  "copy",
  "cut",
  "paste",
  "mousedown",
  "mouseup",
  "wheel",
  "contextmenu",
  "dragover",
  "dragenter",
  "dragleave",
  "drop",
  "dragstart",
  "dragend",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointercancel",
  "pointerover",
  "pointerout",
  "gotpointercapture",
  "lostpointercapture",
  // Video events.
  "ended",
  "loadedmetadata",
  // Page visibility events.
  "pagehide",
  "pageshow",
  "visibilitychange",
  // Content visibility events.
  "beforematch"
], uC = [
  N.FOCUS,
  N.BLUR,
  N.ERROR,
  N.LOAD,
  N.TOGGLE
], xp = (e) => uC.indexOf(e) >= 0, U1 = H1.concat(uC), V1 = (e) => U1.indexOf(e) >= 0;
function z1(e) {
  return e === N.MOUSEENTER ? N.MOUSEOVER : e === N.MOUSELEAVE ? N.MOUSEOUT : e === N.POINTERENTER ? N.POINTEROVER : e === N.POINTERLEAVE ? N.POINTEROUT : e;
}
function G1(e, t, n) {
  let r = !1;
  return xp(t) && (r = !0), e.addEventListener(t, n, r), { eventType: t, handler: n, capture: r };
}
function W1(e, t) {
  e.removeEventListener ? e.removeEventListener(t.eventType, t.handler, t.capture) : e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler);
}
function Z1(e) {
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
}
let Ev = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function q1(e) {
  return (
    // `which` is an old DOM API.
    // tslint:disable-next-line:no-any
    e.which === 2 || // `which` is an old DOM API.
    // tslint:disable-next-line:no-any
    e.which == null && // `button` is an old DOM API.
    // tslint:disable-next-line:no-any
    e.button === 4
  );
}
function Q1(e) {
  return (
    // `metaKey` is an old DOM API.
    // tslint:disable-next-line:no-any
    Ev && e.metaKey || // `ctrlKey` is an old DOM API.
    // tslint:disable-next-line:no-any
    !Ev && e.ctrlKey || q1(e) || // `shiftKey` is an old DOM API.
    // tslint:disable-next-line:no-any
    e.shiftKey
  );
}
function Y1(e, t, n) {
  const r = e.relatedTarget;
  return (e.type === N.MOUSEOVER && t === N.MOUSEENTER || e.type === N.MOUSEOUT && t === N.MOUSELEAVE || e.type === N.POINTEROVER && t === N.POINTERENTER || e.type === N.POINTEROUT && t === N.POINTERLEAVE) && (!r || r !== n && !n.contains(r));
}
function K1(e, t) {
  const n = {};
  for (const r in e) {
    if (r === "srcElement" || r === "target")
      continue;
    const o = r, s = e[o];
    typeof s != "function" && (n[o] = s);
  }
  return e.type === N.MOUSEOVER ? n.type = N.MOUSEENTER : e.type === N.MOUSEOUT ? n.type = N.MOUSELEAVE : e.type === N.POINTEROVER ? n.type = N.POINTERENTER : n.type = N.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n;
}
const J1 = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent);
class X1 {
  /**
   * @param element The container Element.
   */
  constructor(t) {
    this.element = t, this.handlerInfos = [];
  }
  /**
   * Installs the provided installer on the element owned by this container,
   * and maintains a reference to resulting handler in order to remove it
   * later if desired.
   */
  addEventListener(t, n) {
    J1 && (this.element.style.cursor = "pointer"), this.handlerInfos.push(G1(this.element, t, n(this.element)));
  }
  /**
   * Removes all the handlers installed on this container.
   */
  cleanUp() {
    for (let t = 0; t < this.handlerInfos.length; t++)
      W1(this.element, this.handlerInfos[t]);
    this.handlerInfos = [];
  }
}
const eA = {
  /**
   * The separator between the event name and action in the jsaction
   * attribute value.
   */
  EVENT_ACTION_SEPARATOR: ":"
};
function Ln(e) {
  return e.eventType;
}
function Np(e, t) {
  e.eventType = t;
}
function Tu(e) {
  return e.event;
}
function lC(e, t) {
  e.event = t;
}
function dC(e) {
  return e.targetElement;
}
function fC(e, t) {
  e.targetElement = t;
}
function hC(e) {
  return e.eic;
}
function tA(e, t) {
  e.eic = t;
}
function nA(e) {
  return e.timeStamp;
}
function rA(e, t) {
  e.timeStamp = t;
}
function Au(e) {
  return e.eia;
}
function pC(e, t, n) {
  e.eia = [t, n];
}
function th(e) {
  e.eia = void 0;
}
function au(e) {
  return e[1];
}
function oA(e) {
  return e.eirp;
}
function gC(e, t) {
  e.eirp = t;
}
function mC(e) {
  return e.eir;
}
function yC(e, t) {
  e.eir = t;
}
function vC(e) {
  return {
    eventType: e.eventType,
    event: e.event,
    targetElement: e.targetElement,
    eic: e.eic,
    eia: e.eia,
    timeStamp: e.timeStamp,
    eirp: e.eirp,
    eiack: e.eiack,
    eir: e.eir
  };
}
function sA(e, t, n, r, o, s, i, a) {
  return {
    eventType: e,
    event: t,
    targetElement: n,
    eic: r,
    timeStamp: o,
    eia: s,
    eirp: i,
    eiack: a
  };
}
class Rp {
  constructor(t) {
    this.eventInfo = t;
  }
  getEventType() {
    return Ln(this.eventInfo);
  }
  setEventType(t) {
    Np(this.eventInfo, t);
  }
  getEvent() {
    return Tu(this.eventInfo);
  }
  setEvent(t) {
    lC(this.eventInfo, t);
  }
  getTargetElement() {
    return dC(this.eventInfo);
  }
  setTargetElement(t) {
    fC(this.eventInfo, t);
  }
  getContainer() {
    return hC(this.eventInfo);
  }
  setContainer(t) {
    tA(this.eventInfo, t);
  }
  getTimestamp() {
    return nA(this.eventInfo);
  }
  setTimestamp(t) {
    rA(this.eventInfo, t);
  }
  getAction() {
    const t = Au(this.eventInfo);
    if (t)
      return {
        name: t[0],
        element: t[1]
      };
  }
  setAction(t) {
    if (!t) {
      th(this.eventInfo);
      return;
    }
    pC(this.eventInfo, t.name, t.element);
  }
  getIsReplay() {
    return oA(this.eventInfo);
  }
  setIsReplay(t) {
    gC(this.eventInfo, t);
  }
  getResolved() {
    return mC(this.eventInfo);
  }
  setResolved(t) {
    yC(this.eventInfo, t);
  }
  clone() {
    return new Rp(vC(this.eventInfo));
  }
}
const iA = {}, aA = /\s*;\s*/, cA = N.CLICK;
class uA {
  constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) {
    this.a11yClickSupport = !1, this.clickModSupport = !0, this.updateEventInfoForA11yClick = void 0, this.preventDefaultForA11yClick = void 0, this.populateClickOnlyAction = void 0, this.syntheticMouseEventSupport = t, this.clickModSupport = n;
  }
  resolveEventType(t) {
    this.clickModSupport && Ln(t) === N.CLICK && Q1(Tu(t)) ? Np(t, N.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t);
  }
  resolveAction(t) {
    mC(t) || (this.populateAction(t, dC(t)), yC(t, !0));
  }
  resolveParentAction(t) {
    const n = Au(t), r = n && au(n);
    th(t);
    const o = r && this.getParentNode(r);
    o && this.populateAction(t, o);
  }
  /**
   * Searches for a jsaction that the DOM event maps to and creates an
   * object containing event information used for dispatching by
   * jsaction.Dispatcher. This method populates the `action` and `actionElement`
   * fields of the EventInfo object passed in by finding the first
   * jsaction attribute above the target Node of the event, and below
   * the container Node, that specifies a jsaction for the event
   * type. If no such jsaction is found, then action is undefined.
   *
   * @param eventInfo `EventInfo` to set `action` and `actionElement` if an
   *    action is found on any `Element` in the path of the `Event`.
   */
  populateAction(t, n) {
    let r = n;
    for (; r && r !== hC(t) && (r.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(r, t), !Au(t)); )
      r = this.getParentNode(r);
    const o = Au(t);
    if (o && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (Ln(t) === N.MOUSEENTER || Ln(t) === N.MOUSELEAVE || Ln(t) === N.POINTERENTER || Ln(t) === N.POINTERLEAVE)))
      if (Y1(Tu(t), Ln(t), au(o))) {
        const s = K1(Tu(t), au(o));
        lC(t, s), fC(t, au(o));
      } else
        th(t);
  }
  /**
   * Walk to the parent node, unless the node has a different owner in
   * which case we walk to the owner. Attempt to walk to host of a
   * shadow root if needed.
   */
  getParentNode(t) {
    const n = t[Pp.OWNER];
    if (n)
      return n;
    const r = t.parentNode;
    return (r == null ? void 0 : r.nodeName) === "#document-fragment" ? (r == null ? void 0 : r.host) ?? null : r;
  }
  /**
   * Accesses the jsaction map on a node and retrieves the name of the
   * action the given event is mapped to, if any. It parses the
   * attribute value and stores it in a property on the node for
   * subsequent retrieval without re-parsing and re-accessing the
   * attribute.
   *
   * @param actionElement The DOM node to retrieve the jsaction map from.
   * @param eventInfo `EventInfo` to set `action` and `actionElement` if an
   *    action is found on the `actionElement`.
   */
  populateActionOnElement(t, n) {
    const r = this.parseActions(t), o = r[Ln(n)];
    o !== void 0 && pC(n, o, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, r);
  }
  /**
   * Parses and caches an element's jsaction element into a map.
   *
   * This is primarily for internal use.
   *
   * @param actionElement The DOM node to retrieve the jsaction map from.
   * @return Map from event to qualified name of the jsaction bound to it.
   */
  parseActions(t) {
    let n = L1(t);
    if (!n) {
      const r = t.getAttribute(Uu.JSACTION);
      if (!r)
        n = iA, Dv(t, n);
      else {
        if (n = j1(r), !n) {
          n = {};
          const o = r.split(aA);
          for (let s = 0; s < o.length; s++) {
            const i = o[s];
            if (!i)
              continue;
            const a = i.indexOf(eA.EVENT_ACTION_SEPARATOR), c = a !== -1, u = c ? i.substr(0, a).trim() : cA, l = c ? i.substr(a + 1).trim() : i;
            n[u] = l;
          }
          $1(r, n);
        }
        Dv(t, n);
      }
    }
    return n;
  }
  addA11yClickSupport(t, n, r) {
    this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = r;
  }
}
var nh;
(function(e) {
  e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK";
})(nh || (nh = {}));
class lA {
  /**
   * Options are:
   *   - `eventReplayer`: When the event contract dispatches replay events
   *      to the Dispatcher, the Dispatcher collects them and in the next tick
   *      dispatches them to the `eventReplayer`. Defaults to dispatching to `dispatchDelegate`.
   * @param dispatchDelegate A function that should handle dispatching an `EventInfoWrapper` to handlers.
   */
  constructor(t, { actionResolver: n, eventReplayer: r } = {}) {
    this.dispatchDelegate = t, this.eventReplayScheduled = !1, this.replayEventInfoWrappers = [], this.actionResolver = n, this.eventReplayer = r;
  }
  /**
   * Receives an event or the event queue from the EventContract. The event
   * queue is copied and it attempts to replay.
   * If event info is passed in it looks for an action handler that can handle
   * the given event.  If there is no handler registered queues the event and
   * checks if a loader is registered for the given namespace. If so, calls it.
   *
   * Alternatively, if in global dispatch mode, calls all registered global
   * handlers for the appropriate event type.
   *
   * The three functionalities of this call are deliberately not split into
   * three methods (and then declared as an abstract interface), because the
   * interface is used by EventContract, which lives in a different jsbinary.
   * Therefore the interface between the three is defined entirely in terms that
   * are invariant under jscompiler processing (Function and Array, as opposed
   * to a custom type with method names).
   *
   * @param eventInfo The info for the event that triggered this call or the
   *     queue of events from EventContract.
   */
  dispatch(t) {
    var o, s;
    const n = new Rp(t);
    (o = this.actionResolver) == null || o.resolveEventType(t), (s = this.actionResolver) == null || s.resolveAction(t);
    const r = n.getAction();
    if (r && dA(r.element, n) && Z1(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
      this.scheduleEventInfoWrapperReplay(n);
      return;
    }
    this.dispatchDelegate(n);
  }
  /**
   * Schedules an `EventInfoWrapper` for replay. The replaying will happen in its own
   * stack once the current flow cedes control. This is done to mimic
   * browser event handling.
   */
  scheduleEventInfoWrapperReplay(t) {
    this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => {
      this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers);
    }));
  }
}
function dA(e, t) {
  return e.tagName === "A" && (t.getEventType() === N.CLICK || t.getEventType() === N.CLICKMOD);
}
const DC = Symbol.for("propagationStopped"), fA = {
  REPLAY: 101
}, hA = " Because event replay occurs after browser dispatch, `preventDefault` would have no effect. You can check whether an event is being replayed by accessing the event phase: `event.eventPhase === EventPhase.REPLAY`.", pA = "`preventDefault` called during event replay.", gA = " Because event replay occurs after browser dispatch, `composedPath()` will be empty. Iterate parent nodes from `event.target` or `event.currentTarget` if you need to check elements in the event path.", mA = "`composedPath` called during event replay.";
class yA {
  constructor(t, n = !0) {
    this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new uA({ clickModSupport: n }), this.dispatcher = new lA((r) => {
      this.dispatchToDelegate(r);
    }, {
      actionResolver: this.actionResolver
    });
  }
  /**
   * The entrypoint for the `EventContract` dispatch.
   */
  dispatch(t) {
    this.dispatcher.dispatch(t);
  }
  /** Internal method that does basic disaptching. */
  dispatchToDelegate(t) {
    for (t.getIsReplay() && EA(t), vA(t); t.getAction(); ) {
      if (CA(t), xp(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), DA(t)))
        return;
      this.actionResolver.resolveParentAction(t.eventInfo);
    }
  }
}
function vA(e) {
  const t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), r = () => {
    t[DC] = !0, n();
  };
  eo(t, "stopPropagation", r), eo(t, "stopImmediatePropagation", r);
}
function DA(e) {
  return !!e.getEvent()[DC];
}
function EA(e) {
  const t = e.getEvent(), n = e.getTargetElement(), r = t.preventDefault.bind(t);
  eo(t, "target", n), eo(t, "eventPhase", fA.REPLAY), eo(t, "preventDefault", () => {
    throw r(), new Error(pA + (ngDevMode ? hA : ""));
  }), eo(t, "composedPath", () => {
    throw new Error(mA + (ngDevMode ? gA : ""));
  });
}
function CA(e) {
  var r;
  const t = e.getEvent(), n = (r = e.getAction()) == null ? void 0 : r.element;
  n && eo(t, "currentTarget", n, {
    // `currentTarget` is going to get reassigned every dispatch.
    configurable: !0
  });
}
function eo(e, t, n, { configurable: r = !1 } = {}) {
  Object.defineProperty(e, t, { value: n, configurable: r });
}
function IA(e, t) {
  e.ecrd((n) => {
    t.dispatch(n);
  }, nh.I_AM_THE_JSACTION_FRAMEWORK);
}
function bA(e) {
  return (e == null ? void 0 : e.q) ?? [];
}
function wA(e) {
  e && (Cv(e.c, e.et, e.h), Cv(e.c, e.etc, e.h, !0));
}
function Cv(e, t, n, r) {
  for (let o = 0; o < t.length; o++)
    e.removeEventListener(
      t[o],
      n,
      /* useCapture */
      r
    );
}
const _A = !1, Nl = class Nl {
  constructor(t) {
    this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = [], this.containerManager = t;
  }
  handleEvent(t, n, r) {
    const o = sA(
      /* eventType= */
      t,
      /* event= */
      n,
      /* targetElement= */
      n.target,
      /* container= */
      r,
      /* timestamp= */
      Date.now()
    );
    this.handleEventInfo(o);
  }
  /**
   * Handle an `EventInfo`.
   */
  handleEventInfo(t) {
    var n;
    if (!this.dispatcher) {
      gC(t, !0), (n = this.queuedEventInfos) == null || n.push(t);
      return;
    }
    this.dispatcher(t);
  }
  /**
   * Enables jsaction handlers to be called for the event type given by
   * name.
   *
   * If the event is already registered, this does nothing.
   *
   * @param prefixedEventType If supplied, this event is used in
   *     the actual browser event registration instead of the name that is
   *     exposed to jsaction. Use this if you e.g. want users to be able
   *     to subscribe to jsaction="transitionEnd:foo" while the underlying
   *     event is webkitTransitionEnd in one browser and mozTransitionEnd
   *     in another.
   */
  addEvent(t, n) {
    if (t in this.eventHandlers || !this.containerManager || !Nl.MOUSE_SPECIAL_SUPPORT && B1.indexOf(t) >= 0)
      return;
    const r = (s, i, a) => {
      this.handleEvent(s, i, a);
    };
    this.eventHandlers[t] = r;
    const o = z1(n || t);
    if (o !== t) {
      const s = this.browserEventTypeToExtraEventTypes[o] || [];
      s.push(t), this.browserEventTypeToExtraEventTypes[o] = s;
    }
    this.containerManager.addEventListener(o, (s) => (i) => {
      r(t, i, s);
    });
  }
  /**
   * Gets the queued early events and replay them using the appropriate handler
   * in the provided event contract. Once all the events are replayed, it cleans
   * up the early contract.
   */
  replayEarlyEvents(t = window._ejsa) {
    t && (this.replayEarlyEventInfos(t.q), wA(t), delete window._ejsa);
  }
  /**
   * Replays all the early `EventInfo` objects, dispatching them through the normal
   * `EventContract` flow.
   */
  replayEarlyEventInfos(t) {
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = this.getEventTypesForBrowserEventType(r.eventType);
      for (let s = 0; s < o.length; s++) {
        const i = vC(r);
        Np(i, o[s]), this.handleEventInfo(i);
      }
    }
  }
  /**
   * Returns all JSAction event types that have been registered for a given
   * browser event type.
   */
  getEventTypesForBrowserEventType(t) {
    const n = [];
    return this.eventHandlers[t] && n.push(t), this.browserEventTypeToExtraEventTypes[t] && n.push(...this.browserEventTypeToExtraEventTypes[t]), n;
  }
  /**
   * Returns the event handler function for a given event type.
   */
  handler(t) {
    return this.eventHandlers[t];
  }
  /**
   * Cleans up the event contract. This resets all of the `EventContract`'s
   * internal state. Users are responsible for not using this `EventContract`
   * after it has been cleaned up.
   */
  cleanUp() {
    this.containerManager.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = [];
  }
  /**
   * Register a dispatcher function. Event info of each event mapped to
   * a jsaction is passed for handling to this callback. The queued
   * events are passed as well to the dispatcher for later replaying
   * once the dispatcher is registered. Clears the event queue to null.
   *
   * @param dispatcher The dispatcher function.
   * @param restriction
   */
  registerDispatcher(t, n) {
    this.ecrd(t, n);
  }
  /**
   * Unrenamed alias for registerDispatcher. Necessary for any codebases that
   * split the `EventContract` and `Dispatcher` code into different compilation
   * units.
   */
  ecrd(t, n) {
    var r;
    if (this.dispatcher = t, (r = this.queuedEventInfos) != null && r.length) {
      for (let o = 0; o < this.queuedEventInfos.length; o++)
        this.handleEventInfo(this.queuedEventInfos[o]);
      this.queuedEventInfos = null;
    }
  }
};
Nl.MOUSE_SPECIAL_SUPPORT = _A;
let rh = Nl;
function MA(e, t = window) {
  var n;
  return bA((n = t._ejsas) == null ? void 0 : n[e]);
}
function SA(e, t = window) {
  t._ejsas && (t._ejsas[e] = void 0);
}
/**
 * @license Angular v18.2.14
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */
const TA = "https://angular.dev/errors", xo = "https://g.co/ng/security#xss";
class v extends Error {
  constructor(t, n) {
    super(fe(t, n)), this.code = t;
  }
}
function fe(e, t) {
  const n = `NG0${Math.abs(e)}`;
  let r = `${n}${t ? ": " + t : ""}`;
  if (ngDevMode && e < 0) {
    const s = !r.match(/[.,;!?\n]$/) ? "." : "";
    r = `${r}${s} Find more at ${TA}/${n}`;
  }
  return r;
}
const Vl = /* @__PURE__ */ Symbol("InputSignalNode#UNSET"), EC = {
  ...rC,
  transformFn: void 0,
  applyValueToInputSignal(e, t) {
    Ul(e, t);
  }
}, AA = /* @__PURE__ */ Symbol();
function CC(e, t) {
  const n = Object.create(EC);
  n.value = e, n.transformFn = t == null ? void 0 : t.transform;
  function r() {
    if ($l(n), n.value === Vl)
      throw new v(-950, ngDevMode && "Input is required but no value is available yet.");
    return n.value;
  }
  return r[ft] = n, ngDevMode && (r.toString = () => `[Input Signal: ${r()}]`), r;
}
function hn(e) {
  return { toString: e }.toString();
}
const Zo = "__annotations__", qo = "__parameters__", Qo = "__prop__metadata__";
function Sc(e, t, n, r, o) {
  return hn(() => {
    const s = Fp(t);
    function i(...a) {
      if (this instanceof i)
        return s.call(this, ...a), this;
      const c = new i(...a);
      return function(l) {
        return o && o(l, ...a), (l.hasOwnProperty(Zo) ? l[Zo] : Object.defineProperty(l, Zo, { value: [] })[Zo]).push(c), l;
      };
    }
    return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i;
  });
}
function Fp(e) {
  return function(...n) {
    if (e) {
      const r = e(...n);
      for (const o in r)
        this[o] = r[o];
    }
  };
}
function _i(e, t, n) {
  return hn(() => {
    const r = Fp(t);
    function o(...s) {
      if (this instanceof o)
        return r.apply(this, s), this;
      const i = new o(...s);
      return a.annotation = i, a;
      function a(c, u, l) {
        const d = c.hasOwnProperty(qo) ? c[qo] : Object.defineProperty(c, qo, { value: [] })[qo];
        for (; d.length <= l; )
          d.push(null);
        return (d[l] = d[l] || []).push(i), c;
      }
    }
    return o.prototype.ngMetadataName = e, o.annotationCls = o, o;
  });
}
function yr(e, t, n, r) {
  return hn(() => {
    const o = Fp(t);
    function s(...i) {
      if (this instanceof s)
        return o.apply(this, i), this;
      const a = new s(...i);
      function c(u, l) {
        if (u === void 0)
          throw new Error("Standard Angular field decorators are not supported in JIT mode.");
        const d = u.constructor, f = d.hasOwnProperty(Qo) ? d[Qo] : Object.defineProperty(d, Qo, { value: {} })[Qo];
        f[l] = f.hasOwnProperty(l) && f[l] || [], f[l].unshift(a);
      }
      return c;
    }
    return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s;
  });
}
const Ae = globalThis;
function OA() {
  const e = typeof location < "u" ? location.toString() : "", t = {
    namedConstructors: e.indexOf("ngDevMode=namedConstructors") != -1,
    firstCreatePass: 0,
    tNode: 0,
    tView: 0,
    rendererCreateTextNode: 0,
    rendererSetText: 0,
    rendererCreateElement: 0,
    rendererAddEventListener: 0,
    rendererSetAttribute: 0,
    rendererRemoveAttribute: 0,
    rendererSetProperty: 0,
    rendererSetClassName: 0,
    rendererAddClass: 0,
    rendererRemoveClass: 0,
    rendererSetStyle: 0,
    rendererRemoveStyle: 0,
    rendererDestroy: 0,
    rendererDestroyNode: 0,
    rendererMoveNode: 0,
    rendererRemoveNode: 0,
    rendererAppendChild: 0,
    rendererInsertBefore: 0,
    rendererCreateComment: 0,
    hydratedNodes: 0,
    hydratedComponents: 0,
    dehydratedViewsRemoved: 0,
    dehydratedViewsCleanupRuns: 0,
    componentsSkippedHydration: 0
  };
  return e.indexOf("ngDevMode=false") === -1 ? (typeof Ae.ngDevMode != "object" && (Ae.ngDevMode = {}), Object.assign(Ae.ngDevMode, t)) : Ae.ngDevMode = !1, t;
}
function kp() {
  return typeof ngDevMode > "u" || ngDevMode ? ((typeof ngDevMode != "object" || Object.keys(ngDevMode).length === 0) && OA(), typeof ngDevMode < "u" && !!ngDevMode) : !1;
}
function ce(e) {
  for (let t in e)
    if (e[t] === ce)
      return t;
  throw Error("Could not find renamed property on target object.");
}
function PA(e, t) {
  for (const n in t)
    t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function J(e) {
  if (typeof e == "string")
    return e;
  if (Array.isArray(e))
    return "[" + e.map(J).join(", ") + "]";
  if (e == null)
    return "" + e;
  if (e.overriddenName)
    return `${e.overriddenName}`;
  if (e.name)
    return `${e.name}`;
  const t = e.toString();
  if (t == null)
    return "" + t;
  const n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}
function oh(e, t) {
  return e == null || e === "" ? t === null ? "" : t : t == null || t === "" ? e : e + " " + t;
}
function xA(e, t = 100) {
  if (!e || t < 1 || e.length <= t)
    return e;
  if (t == 1)
    return e.substring(0, 1) + "...";
  const n = Math.round(t / 2);
  return e.substring(0, n) + "..." + e.substring(e.length - n);
}
const NA = ce({ __forward_ref__: ce });
function zl(e) {
  return e.__forward_ref__ = zl, e.toString = function() {
    return J(this());
  }, e;
}
function $(e) {
  return Gl(e) ? e() : e;
}
function Gl(e) {
  return typeof e == "function" && e.hasOwnProperty(NA) && e.__forward_ref__ === zl;
}
function ie(e, t) {
  typeof e != "number" && A(t, typeof e, "number", "===");
}
function ka(e, t, n) {
  ie(e, "Expected a number"), wC(e, n, "Expected number to be less than or equal to"), Pn(e, t, "Expected number to be greater than or equal to");
}
function Mi(e, t) {
  typeof e != "string" && A(t, e === null ? "null" : typeof e, "string", "===");
}
function IC(e, t) {
  typeof e != "function" && A(t, e === null ? "null" : typeof e, "function", "===");
}
function O(e, t, n) {
  e != t && A(n, e, t, "==");
}
function Lt(e, t, n) {
  e == t && A(n, e, t, "!=");
}
function bC(e, t, n) {
  e !== t && A(n, e, t, "===");
}
function Si(e, t, n) {
  e === t && A(n, e, t, "!==");
}
function Zn(e, t, n) {
  e < t || A(n, e, t, "<");
}
function wC(e, t, n) {
  e <= t || A(n, e, t, "<=");
}
function vr(e, t, n) {
  e > t || A(n, e, t, ">");
}
function Pn(e, t, n) {
  e >= t || A(n, e, t, ">=");
}
function b(e, t) {
  e == null && A(t, e, null, "!=");
}
function A(e, t, n, r) {
  throw new Error(`ASSERTION ERROR: ${e}` + (r == null ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`));
}
function Un(e) {
  e instanceof Node || A(`The provided value must be an instance of a DOM Node but got ${J(e)}`);
}
function RA(e) {
  e instanceof Element || A(`The provided value must be an element but got ${J(e)}`);
}
function _e(e, t) {
  b(e, "Array must be defined.");
  const n = e.length;
  (t < 0 || t >= n) && A(`Index expected to be less than ${n} but got ${t}`);
}
function FA(e, ...t) {
  if (t.indexOf(e) !== -1)
    return !0;
  A(`Expected value to be one of ${JSON.stringify(t)} but was ${JSON.stringify(e)}.`);
}
function Lp(e) {
  _p() !== null && A(`${e}() should never be called in a reactive context.`);
}
function se(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0
  };
}
const kA = se;
function Wl(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function Tc(e) {
  return Iv(e, La) || Iv(e, _C);
}
function LA(e) {
  return Tc(e) !== null;
}
function Iv(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function jA(e) {
  const t = e && (e[La] || e[_C]);
  return t ? (ngDevMode && console.warn(`DEPRECATED: DI is instantiating a token "${e.name}" that inherits its @Injectable decorator but does not provide one itself.
This will become an error in a future version of Angular. Please add @Injectable() to the "${e.name}" class.`), t) : null;
}
function Vu(e) {
  return e && (e.hasOwnProperty(zu) || e.hasOwnProperty($A)) ? e[zu] : null;
}
const La = ce({ ɵprov: ce }), zu = ce({ ɵinj: ce }), _C = ce({ ngInjectableDef: ce }), $A = ce({ ngInjectorDef: ce });
class F {
  /**
   * @param _desc   Description for the token,
   *                used only for debugging purposes,
   *                it should but does not need to be unique
   * @param options Options for the token's usage, as described above
   */
  constructor(t, n) {
    this._desc = t, this.ngMetadataName = "InjectionToken", this.ɵprov = void 0, typeof n == "number" ? ((typeof ngDevMode > "u" || ngDevMode) && Zn(n, 0, "Only negative numbers are supported here"), this.__NG_ELEMENT_ID__ = n) : n !== void 0 && (this.ɵprov = se({
      token: this,
      providedIn: n.providedIn || "root",
      factory: n.factory
    }));
  }
  /**
   * @internal
   */
  get multi() {
    return this;
  }
  toString() {
    return `InjectionToken ${this._desc}`;
  }
}
let sh;
function jp() {
  return !ngDevMode && A("getInjectorProfilerContext should never be called in production mode"), sh;
}
function Xe(e) {
  !ngDevMode && A("setInjectorProfilerContext should never be called in production mode");
  const t = sh;
  return sh = e, t;
}
let ih = null;
const BA = (e) => {
  !ngDevMode && A("setInjectorProfiler should never be called in production mode"), ih = e;
};
function $p(e) {
  !ngDevMode && A("Injector profiler should never be called in production mode"), ih != null && ih(e);
}
function ah(e, t = !1) {
  !ngDevMode && A("Injector profiler should never be called in production mode");
  let n;
  typeof e == "function" || e instanceof F ? n = e : n = $(e.provide);
  let r = e;
  e instanceof F && (r = e.ɵprov || e), $p({
    type: 2,
    context: jp(),
    providerRecord: { token: n, provider: r, isViewProvider: t }
  });
}
function Gu(e) {
  !ngDevMode && A("Injector profiler should never be called in production mode"), $p({
    type: 1,
    context: jp(),
    instance: { value: e }
  });
}
function MC(e, t, n) {
  !ngDevMode && A("Injector profiler should never be called in production mode"), $p({
    type: 0,
    context: jp(),
    service: { token: e, value: t, flags: n }
  });
}
function da(e, t, n) {
  !ngDevMode && A("runInInjectorProfilerContext should never be called in production mode");
  const r = Xe({ injector: e, token: t });
  try {
    n();
  } finally {
    Xe(r);
  }
}
function Ac(e) {
  return e && !!e.ɵproviders;
}
const Ti = ce({ ɵcmp: ce }), Zl = ce({ ɵdir: ce }), ql = ce({ ɵpipe: ce }), Bp = ce({ ɵmod: ce }), wn = ce({ ɵfac: ce }), Ts = ce({ __NG_ELEMENT_ID__: ce }), bv = ce({ __NG_ENV_ID__: ce });
function H(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function W(e) {
  return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : H(e);
}
function HA(e) {
  let t = e[Ti] || null;
  return t !== null && t.debugInfo ? UA(t.debugInfo) : W(e);
}
function UA(e) {
  return !e.filePath || !e.lineNumber ? e.className : `${e.className} (at ${e.filePath}:${e.lineNumber})`;
}
function Hp(e, t) {
  const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new v(-200, ngDevMode ? `Circular dependency in DI detected for ${e}${n}` : e);
}
function wv() {
  throw new Error("Cannot mix multi providers and regular providers");
}
function ch(e, t, n) {
  if (e && t) {
    const r = t.map((o) => o == n ? "?" + n + "?" : "...");
    throw new Error(`Invalid provider for the NgModule '${J(e)}' - only instances of Provider and Type are allowed, got: [${r.join(", ")}]`);
  } else throw Ac(n) ? n.ɵfromNgModule ? new v(207, "Invalid providers from 'importProvidersFrom' present in a non-environment injector. 'importProvidersFrom' can't be used for component providers.") : new v(207, "Invalid providers present in a non-environment injector. 'EnvironmentProviders' can't be used for component providers.") : new Error("Invalid provider");
}
function Up(e, t) {
  const n = ngDevMode && `No provider for ${W(e)} found${t ? ` in ${t}` : ""}`;
  throw new v(-201, n);
}
var Z;
(function(e) {
  e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional";
})(Z || (Z = {}));
let Wu;
function SC() {
  return Wu;
}
function ut(e) {
  const t = Wu;
  return Wu = e, t;
}
function TC(e, t, n) {
  const r = Tc(e);
  if (r && r.providedIn == "root")
    return r.value === void 0 ? r.value = r.factory() : r.value;
  if (n & Z.Optional)
    return null;
  if (t !== void 0)
    return t;
  Up(e, "Injector");
}
function VA(e) {
  ngDevMode && Lt(Wu, e, "Calling ɵɵinject would cause infinite recursion");
}
const zA = {}, ja = zA, uh = "__NG_DI_FLAG__", Zu = "ngTempTokenPath", GA = "ngTokenPath", WA = /\n/gm, ZA = "ɵ", _v = "__source";
let As;
function qA() {
  return As;
}
function Cn(e) {
  const t = As;
  return As = e, t;
}
function QA(e, t = Z.Default) {
  if (As === void 0)
    throw new v(-203, ngDevMode && "inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`.");
  if (As === null)
    return TC(e, void 0, t);
  {
    const n = As.get(e, t & Z.Optional ? null : void 0, t);
    return ngDevMode && MC(e, n, t), n;
  }
}
function He(e, t = Z.Default) {
  return (SC() || QA)($(e), t);
}
function Vp(e) {
  throw new v(202, ngDevMode && `This constructor is not compatible with Angular Dependency Injection because its dependency at index ${e} of the parameter list is invalid.
This can happen if the dependency type is a primitive like a string or if an ancestor of this class is missing an Angular decorator.

Please check that 1) the type for the parameter at index ${e} is correct and 2) the correct Angular decorators are defined for this class and its ancestors.`);
}
function I(e, t = Z.Default) {
  return He(e, Oc(t));
}
function Oc(e) {
  return typeof e > "u" || typeof e == "number" ? e : 0 | // comment to force a line break in the formatter
  (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function lh(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = $(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0)
        throw new v(900, ngDevMode && "Arguments array must have arguments.");
      let o, s = Z.Default;
      for (let i = 0; i < r.length; i++) {
        const a = r[i], c = YA(a);
        typeof c == "number" ? c === -1 ? o = a.token : s |= c : o = a;
      }
      t.push(He(o, s));
    } else
      t.push(He(r));
  }
  return t;
}
function Pc(e, t) {
  return e[uh] = t, e.prototype[uh] = t, e;
}
function YA(e) {
  return e[uh];
}
function KA(e, t, n, r) {
  const o = e[Zu];
  throw t[_v] && o.unshift(t[_v]), e.message = JA(`
` + e.message, o, n, r), e[GA] = o, e[Zu] = null, e;
}
function JA(e, t, n, r = null) {
  e = e && e.charAt(0) === `
` && e.charAt(1) == ZA ? e.slice(2) : e;
  let o = J(t);
  if (Array.isArray(t))
    o = t.map(J).join(" -> ");
  else if (typeof t == "object") {
    let s = [];
    for (let i in t)
      if (t.hasOwnProperty(i)) {
        let a = t[i];
        s.push(i + ":" + (typeof a == "string" ? JSON.stringify(a) : J(a)));
      }
    o = `{${s.join(", ")}}`;
  }
  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(WA, `
  `)}`;
}
const Et = Pc(
  // Disable tslint because `DecoratorFlags` is a const enum which gets inlined.
  _i("Inject", (e) => ({ token: e })),
  -1
  /* DecoratorFlags.Inject */
), Ot = (
  // Disable tslint because `InternalInjectFlags` is a const enum which gets inlined.
  // tslint:disable-next-line: no-toplevel-property-access
  Pc(
    _i("Optional"),
    8
    /* InternalInjectFlags.Optional */
  )
), AC = (
  // Disable tslint because `InternalInjectFlags` is a const enum which gets inlined.
  // tslint:disable-next-line: no-toplevel-property-access
  Pc(
    _i("Self"),
    2
    /* InternalInjectFlags.Self */
  )
), Ql = (
  // Disable tslint because `InternalInjectFlags` is a const enum which gets inlined.
  // tslint:disable-next-line: no-toplevel-property-access
  Pc(
    _i("SkipSelf"),
    4
    /* InternalInjectFlags.SkipSelf */
  )
), xc = (
  // Disable tslint because `InternalInjectFlags` is a const enum which gets inlined.
  // tslint:disable-next-line: no-toplevel-property-access
  Pc(
    _i("Host"),
    1
    /* InternalInjectFlags.Host */
  )
);
function so(e, t) {
  const n = e.hasOwnProperty(wn);
  if (!n && t === !0 && ngDevMode)
    throw new Error(`Type ${J(e)} does not have 'ɵfac' property.`);
  return n ? e[wn] : null;
}
function XA(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r], s = t[r];
    if (n && (o = n(o), s = n(s)), s !== o)
      return !1;
  }
  return !0;
}
function lt(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function Rs(e, t) {
  e.forEach((n) => Array.isArray(n) ? Rs(n, t) : t(n));
}
function OC(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function qu(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function fa(e, t) {
  const n = [];
  for (let r = 0; r < e; r++)
    n.push(t);
  return n;
}
function Mv(e, t, n) {
  const r = e.length - n;
  for (; t < r; )
    e[t] = e[t + n], t++;
  for (; n--; )
    e.pop();
}
function PC(e, t, n, r) {
  ngDevMode && wC(t, e.length, "Can't insert past array end.");
  let o = e.length;
  if (o == t)
    e.push(n, r);
  else if (o === 1)
    e.push(r, e[0]), e[0] = n;
  else {
    for (o--, e.push(e[o - 1], e[o]); o > t; ) {
      const s = o - 2;
      e[o] = e[s], o--;
    }
    e[t] = n, e[t + 1] = r;
  }
}
function wt(e, t, n) {
  let r = Nc(e, t);
  return r >= 0 ? e[r | 1] = n : (r = ~r, PC(e, r, t, n)), r;
}
function lf(e, t) {
  const n = Nc(e, t);
  if (n >= 0)
    return e[n | 1];
}
function Nc(e, t) {
  return eO(e, t, 1);
}
function eO(e, t, n) {
  ngDevMode && O(Array.isArray(e), !0, "Expecting an array");
  let r = 0, o = e.length >> n;
  for (; o !== r; ) {
    const s = r + (o - r >> 1), i = e[s << n];
    if (t === i)
      return s << n;
    i > t ? o = s : r = s + 1;
  }
  return ~(o << n);
}
const zt = {}, K = [];
(typeof ngDevMode > "u" || ngDevMode) && kp() && (Object.freeze(zt), Object.freeze(K));
const Gt = new F(ngDevMode ? "ENVIRONMENT_INITIALIZER" : ""), zp = new F(
  ngDevMode ? "INJECTOR" : "",
  // Disable tslint because this is const enum which gets inlined not top level prop access.
  // tslint:disable-next-line: no-toplevel-property-access
  -1
  /* InjectorMarkers.Injector */
), Gp = new F(ngDevMode ? "INJECTOR_DEF_TYPES" : "");
class Yl {
  get(t, n = ja) {
    if (n === ja) {
      const r = new Error(`NullInjectorError: No provider for ${J(t)}!`);
      throw r.name = "NullInjectorError", r;
    }
    return n;
  }
}
var V;
(function(e) {
  e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default";
})(V || (V = {}));
var _n;
(function(e) {
  e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom";
})(_n || (_n = {}));
var Mn;
(function(e) {
  e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform";
})(Mn || (Mn = {}));
function tO(e, t, n) {
  ngDevMode && Lt(t, "", 'can not look for "" string.');
  let r = e.length;
  for (; ; ) {
    const o = e.indexOf(t, n);
    if (o === -1)
      return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      const s = t.length;
      if (o + s === r || e.charCodeAt(o + s) <= 32)
        return o;
    }
    n = o + 1;
  }
}
function dh(e, t, n) {
  let r = 0;
  for (; r < n.length; ) {
    const o = n[r];
    if (typeof o == "number") {
      if (o !== 0)
        break;
      r++;
      const s = n[r++], i = n[r++], a = n[r++];
      ngDevMode && ngDevMode.rendererSetAttribute++, e.setAttribute(t, i, a, s);
    } else {
      const s = o, i = n[++r];
      ngDevMode && ngDevMode.rendererSetAttribute++, NC(s) ? e.setProperty(t, s, i) : e.setAttribute(t, s, i), r++;
    }
  }
  return r;
}
function xC(e) {
  return e === 3 || e === 4 || e === 6;
}
function NC(e) {
  return e.charCodeAt(0) === 64;
}
function $a(e, t) {
  if (!(t === null || t.length === 0)) if (e === null || e.length === 0)
    e = t.slice();
  else {
    let n = -1;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      typeof o == "number" ? n = o : n === 0 || (n === -1 || n === 2 ? Sv(e, n, o, null, t[++r]) : Sv(e, n, o, null, null));
    }
  }
  return e;
}
function Sv(e, t, n, r, o) {
  let s = 0, i = e.length;
  if (t === -1)
    i = -1;
  else
    for (; s < e.length; ) {
      const a = e[s++];
      if (typeof a == "number") {
        if (a === t) {
          i = -1;
          break;
        } else if (a > t) {
          i = s - 1;
          break;
        }
      }
    }
  for (; s < e.length; ) {
    const a = e[s];
    if (typeof a == "number")
      break;
    if (a === n) {
      o !== null && (e[s + 1] = o);
      return;
    }
    s++, o !== null && s++;
  }
  i !== -1 && (e.splice(i, 0, t), s = i + 1), e.splice(s++, 0, n), o !== null && e.splice(s++, 0, o);
}
const RC = "ng-template";
function nO(e, t, n, r) {
  ngDevMode && O(n, n.toLowerCase(), "Class name expected to be lowercase.");
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
      if (t[o] === "class" && tO(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (Wp(e))
    return !1;
  if (o = t.indexOf(1, o), o > -1) {
    let s;
    for (; ++o < t.length && typeof (s = t[o]) == "string"; )
      if (s.toLowerCase() === n)
        return !0;
  }
  return !1;
}
function Wp(e) {
  return e.type === 4 && e.value !== RC;
}
function rO(e, t, n) {
  const r = e.type === 4 && !n ? RC : e.value;
  return t === r;
}
function oO(e, t, n) {
  ngDevMode && b(t[0], "Selector should have a tag name");
  let r = 4;
  const o = e.attrs, s = o !== null ? aO(o) : 0;
  let i = !1;
  for (let a = 0; a < t.length; a++) {
    const c = t[a];
    if (typeof c == "number") {
      if (!i && !Bt(r) && !Bt(c))
        return !1;
      if (i && Bt(c))
        continue;
      i = !1, r = c | r & 1;
      continue;
    }
    if (!i)
      if (r & 4) {
        if (r = 2 | r & 1, c !== "" && !rO(e, c, n) || c === "" && t.length === 1) {
          if (Bt(r))
            return !1;
          i = !0;
        }
      } else if (r & 8) {
        if (o === null || !nO(e, o, c, n)) {
          if (Bt(r))
            return !1;
          i = !0;
        }
      } else {
        const u = t[++a], l = sO(c, o, Wp(e), n);
        if (l === -1) {
          if (Bt(r))
            return !1;
          i = !0;
          continue;
        }
        if (u !== "") {
          let d;
          if (l > s ? d = "" : (ngDevMode && Lt(o[l], 0, "We do not match directives on namespaced attributes"), d = o[l + 1].toLowerCase()), r & 2 && u !== d) {
            if (Bt(r))
              return !1;
            i = !0;
          }
        }
      }
  }
  return Bt(r) || i;
}
function Bt(e) {
  return (e & 1) === 0;
}
function sO(e, t, n, r) {
  if (t === null)
    return -1;
  let o = 0;
  if (r || !n) {
    let s = !1;
    for (; o < t.length; ) {
      const i = t[o];
      if (i === e)
        return o;
      if (i === 3 || i === 6)
        s = !0;
      else if (i === 1 || i === 2) {
        let a = t[++o];
        for (; typeof a == "string"; )
          a = t[++o];
        continue;
      } else {
        if (i === 4)
          break;
        if (i === 0) {
          o += 4;
          continue;
        }
      }
      o += s ? 1 : 2;
    }
    return -1;
  } else
    return cO(t, e);
}
function FC(e, t, n = !1) {
  for (let r = 0; r < t.length; r++)
    if (oO(e, t[r], n))
      return !0;
  return !1;
}
function iO(e) {
  const t = e.attrs;
  if (t != null) {
    const n = t.indexOf(
      5
      /* AttributeMarker.ProjectAs */
    );
    if (!(n & 1))
      return t[n + 1];
  }
  return null;
}
function aO(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    if (xC(n))
      return t;
  }
  return e.length;
}
function cO(e, t) {
  let n = e.indexOf(
    4
    /* AttributeMarker.Template */
  );
  if (n > -1)
    for (n++; n < e.length; ) {
      const r = e[n];
      if (typeof r == "number")
        return -1;
      if (r === t)
        return n;
      n++;
    }
  return -1;
}
function uO(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++)
        if (e[o] !== r[o])
          continue e;
      return !0;
    }
  }
  return !1;
}
function Tv(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function lO(e) {
  let t = e[0], n = 1, r = 2, o = "", s = !1;
  for (; n < e.length; ) {
    let i = e[n];
    if (typeof i == "string")
      if (r & 2) {
        const a = e[++n];
        o += "[" + i + (a.length > 0 ? '="' + a + '"' : "") + "]";
      } else r & 8 ? o += "." + i : r & 4 && (o += " " + i);
    else
      o !== "" && !Bt(i) && (t += Tv(s, o), o = ""), r = i, s = s || !Bt(r);
    n++;
  }
  return o !== "" && (t += Tv(s, o)), t;
}
function kC(e) {
  return e.map(lO).join(",");
}
function dO(e) {
  const t = [], n = [];
  let r = 1, o = 2;
  for (; r < e.length; ) {
    let s = e[r];
    if (typeof s == "string")
      o === 2 ? s !== "" && t.push(s, e[++r]) : o === 8 && n.push(s);
    else {
      if (!Bt(o))
        break;
      o = s;
    }
    r++;
  }
  return { attrs: t, classes: n };
}
function LC(e) {
  return hn(() => {
    (typeof ngDevMode > "u" || ngDevMode) && kp();
    const t = BC(e), n = {
      ...t,
      decls: e.decls,
      vars: e.vars,
      template: e.template,
      consts: e.consts || null,
      ngContentSelectors: e.ngContentSelectors,
      onPush: e.changeDetection === V.OnPush,
      directiveDefs: null,
      // assigned in noSideEffects
      pipeDefs: null,
      // assigned in noSideEffects
      dependencies: t.standalone && e.dependencies || null,
      getStandaloneInjector: null,
      signals: e.signals ?? !1,
      data: e.data || {},
      encapsulation: e.encapsulation || _n.Emulated,
      styles: e.styles || K,
      _: null,
      schemas: e.schemas || null,
      tView: null,
      id: ""
    };
    HC(n);
    const r = e.dependencies;
    return n.directiveDefs = Qu(
      r,
      /* pipeDef */
      !1
    ), n.pipeDefs = Qu(
      r,
      /* pipeDef */
      !0
    ), n.id = pO(n), n;
  });
}
function fO(e) {
  return q(e) || Be(e);
}
function hO(e) {
  return e !== null;
}
function Zp(e) {
  return hn(() => ({
    type: e.type,
    bootstrap: e.bootstrap || K,
    declarations: e.declarations || K,
    imports: e.imports || K,
    exports: e.exports || K,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null
  }));
}
function Av(e, t) {
  if (e == null)
    return zt;
  const n = {};
  for (const r in e)
    if (e.hasOwnProperty(r)) {
      const o = e[r];
      let s, i, a = Mn.None;
      Array.isArray(o) ? (a = o[0], s = o[1], i = o[2] ?? s) : (s = o, i = o), t ? (n[s] = a !== Mn.None ? [r, a] : r, t[s] = i) : n[s] = r;
    }
  return n;
}
function jC(e) {
  return hn(() => {
    const t = BC(e);
    return HC(t), t;
  });
}
function $C(e) {
  return {
    type: e.type,
    name: e.name,
    factory: null,
    pure: e.pure !== !1,
    standalone: e.standalone === !0,
    onDestroy: e.type.prototype.ngOnDestroy || null
  };
}
function q(e) {
  return e[Ti] || null;
}
function Be(e) {
  return e[Zl] || null;
}
function vt(e) {
  return e[ql] || null;
}
function Vn(e) {
  const t = q(e) || Be(e) || vt(e);
  return t !== null ? t.standalone : !1;
}
function It(e, t) {
  const n = e[Bp] || null;
  if (!n && t === !0)
    throw new Error(`Type ${J(e)} does not have 'ɵmod' property.`);
  return n;
}
function BC(e) {
  const t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputTransforms: null,
    inputConfig: e.inputs || zt,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || K,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: Av(e.inputs, t),
    outputs: Av(e.outputs),
    debugInfo: null
  };
}
function HC(e) {
  var t;
  (t = e.features) == null || t.forEach((n) => n(e));
}
function Qu(e, t) {
  if (!e)
    return null;
  const n = t ? vt : fO;
  return () => (typeof e == "function" ? e() : e).map((r) => n(r)).filter(hO);
}
const Ou = /* @__PURE__ */ new Map();
function pO(e) {
  let t = 0;
  const n = [
    e.selectors,
    e.ngContentSelectors,
    e.hostVars,
    e.hostAttrs,
    e.consts,
    e.vars,
    e.decls,
    e.encapsulation,
    e.standalone,
    e.signals,
    e.exportAs,
    JSON.stringify(e.inputs),
    JSON.stringify(e.outputs),
    // We cannot use 'componentDef.type.name' as the name of the symbol will change and will not
    // match in the server and browser bundles.
    Object.getOwnPropertyNames(e.type.prototype),
    !!e.contentQueries,
    !!e.viewQuery
  ].join("|");
  for (const o of n)
    t = Math.imul(31, t) + o.charCodeAt(0) << 0;
  t += 2147483648;
  const r = "c" + t;
  if (typeof ngDevMode > "u" || ngDevMode)
    if (Ou.has(r)) {
      const o = Ou.get(r);
      o !== e.type && console.warn(fe(-912, `Component ID generation collision detected. Components '${o.name}' and '${e.type.name}' with selector '${kC(e.selectors)}' generated the same component ID. To fix this, you can change the selector of one of those components or add an extra host attribute to force a different ID.`));
    } else
      Ou.set(r, e.type);
  return r;
}
function Fs(e) {
  return {
    ɵproviders: e
  };
}
function UC(...e) {
  return {
    ɵproviders: qp(!0, e),
    ɵfromNgModule: !0
  };
}
function qp(e, ...t) {
  const n = [], r = /* @__PURE__ */ new Set();
  let o;
  const s = (i) => {
    n.push(i);
  };
  return Rs(t, (i) => {
    if ((typeof ngDevMode > "u" || ngDevMode) && e) {
      const c = q(i);
      if (c != null && c.standalone)
        throw new v(800, `Importing providers supports NgModule or ModuleWithProviders but got a standalone component "${W(i)}"`);
    }
    const a = i;
    Yu(a, s, [], r) && (o || (o = []), o.push(a));
  }), o !== void 0 && VC(o, s), n;
}
function VC(e, t) {
  for (let n = 0; n < e.length; n++) {
    const { ngModule: r, providers: o } = e[n];
    Qp(o, (s) => {
      ngDevMode && zC(s, o || K, r), t(s, r);
    });
  }
}
function Yu(e, t, n, r) {
  if (e = $(e), !e)
    return !1;
  let o = null, s = Vu(e);
  const i = !s && q(e);
  if (!s && !i) {
    const c = e.ngModule;
    if (s = Vu(c), s)
      o = c;
    else
      return !1;
  } else {
    if (i && !i.standalone)
      return !1;
    o = e;
  }
  if (ngDevMode && n.indexOf(o) !== -1) {
    const c = J(o), u = n.map(J);
    Hp(c, u);
  }
  const a = r.has(o);
  if (i) {
    if (a)
      return !1;
    if (r.add(o), i.dependencies) {
      const c = typeof i.dependencies == "function" ? i.dependencies() : i.dependencies;
      for (const u of c)
        Yu(u, t, n, r);
    }
  } else if (s) {
    if (s.imports != null && !a) {
      ngDevMode && n.push(o), r.add(o);
      let u;
      try {
        Rs(s.imports, (l) => {
          Yu(l, t, n, r) && (u || (u = []), u.push(l));
        });
      } finally {
        ngDevMode && n.pop();
      }
      u !== void 0 && VC(u, t);
    }
    if (!a) {
      const u = so(o) || (() => new o());
      t({ provide: o, useFactory: u, deps: K }, o), t({ provide: Gp, useValue: o, multi: !0 }, o), t({ provide: Gt, useValue: () => He(o), multi: !0 }, o);
    }
    const c = s.providers;
    if (c != null && !a) {
      const u = e;
      Qp(c, (l) => {
        ngDevMode && zC(l, c, u), t(l, u);
      });
    }
  } else
    return !1;
  return o !== e && e.providers !== void 0;
}
function zC(e, t, n) {
  if (io(e) || Kl(e) || WC(e) || GC(e))
    return;
  $(e && (e.useClass || e.provide)) || ch(n, t, e);
}
function Qp(e, t) {
  for (let n of e)
    Ac(n) && (n = n.ɵproviders), Array.isArray(n) ? Qp(n, t) : t(n);
}
const gO = ce({
  provide: String,
  useValue: ce
});
function Kl(e) {
  return e !== null && typeof e == "object" && gO in e;
}
function GC(e) {
  return !!(e && e.useExisting);
}
function WC(e) {
  return !!(e && e.useFactory);
}
function io(e) {
  return typeof e == "function";
}
function mO(e) {
  return !!e.useClass;
}
const Yp = new F(ngDevMode ? "Set Injector scope." : ""), Pu = {}, Ov = {};
let df;
function Jl() {
  return df === void 0 && (df = new Yl()), df;
}
class Pt {
}
class Ai extends Pt {
  /**
   * Flag indicating that this injector was previously destroyed.
   */
  get destroyed() {
    return this._destroyed;
  }
  constructor(t, n, r, o) {
    super(), this.parent = n, this.source = r, this.scopes = o, this.records = /* @__PURE__ */ new Map(), this._ngOnDestroyHooks = /* @__PURE__ */ new Set(), this._onDestroyHooks = [], this._destroyed = !1, hh(t, (i) => this.processProvider(i)), this.records.set(zp, Yo(void 0, this)), o.has("environment") && this.records.set(Pt, Yo(void 0, this));
    const s = this.records.get(Yp);
    s != null && typeof s.value == "string" && this.scopes.add(s.value), this.injectorDefTypes = new Set(this.get(Gp, K, Z.Self));
  }
  /**
   * Destroy the injector and release references to every instance or provider associated with it.
   *
   * Also calls the `OnDestroy` lifecycle hooks of every instance that was created for which a
   * hook was found.
   */
  destroy() {
    this.assertNotDestroyed(), this._destroyed = !0;
    const t = U(null);
    try {
      for (const r of this._ngOnDestroyHooks)
        r.ngOnDestroy();
      const n = this._onDestroyHooks;
      this._onDestroyHooks = [];
      for (const r of n)
        r();
    } finally {
      this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), U(t);
    }
  }
  onDestroy(t) {
    return this.assertNotDestroyed(), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t);
  }
  runInContext(t) {
    this.assertNotDestroyed();
    const n = Cn(this), r = ut(void 0);
    let o;
    ngDevMode && (o = Xe({ injector: this, token: null }));
    try {
      return t();
    } finally {
      Cn(n), ut(r), ngDevMode && Xe(o);
    }
  }
  get(t, n = ja, r = Z.Default) {
    if (this.assertNotDestroyed(), t.hasOwnProperty(bv))
      return t[bv](this);
    r = Oc(r);
    let o;
    ngDevMode && (o = Xe({ injector: this, token: t }));
    const s = Cn(this), i = ut(void 0);
    try {
      if (!(r & Z.SkipSelf)) {
        let c = this.records.get(t);
        if (c === void 0) {
          const u = CO(t) && Tc(t);
          u && this.injectableDefInScope(u) ? (ngDevMode && da(this, t, () => {
            ah(t);
          }), c = Yo(fh(t), Pu)) : c = null, this.records.set(t, c);
        }
        if (c != null)
          return this.hydrate(t, c);
      }
      const a = r & Z.Self ? Jl() : this.parent;
      return n = r & Z.Optional && n === ja ? null : n, a.get(t, n);
    } catch (a) {
      if (a.name === "NullInjectorError") {
        if ((a[Zu] = a[Zu] || []).unshift(J(t)), s)
          throw a;
        return KA(a, t, "R3InjectorError", this.source);
      } else
        throw a;
    } finally {
      ut(i), Cn(s), ngDevMode && Xe(o);
    }
  }
  /** @internal */
  resolveInjectorInitializers() {
    const t = U(null), n = Cn(this), r = ut(void 0);
    let o;
    ngDevMode && (o = Xe({ injector: this, token: null }));
    try {
      const s = this.get(Gt, K, Z.Self);
      if (ngDevMode && !Array.isArray(s))
        throw new v(-209, `Unexpected type of the \`ENVIRONMENT_INITIALIZER\` token value (expected an array, but got ${typeof s}). Please check that the \`ENVIRONMENT_INITIALIZER\` token is configured as a \`multi: true\` provider.`);
      for (const i of s)
        i();
    } finally {
      Cn(n), ut(r), ngDevMode && Xe(o), U(t);
    }
  }
  toString() {
    const t = [], n = this.records;
    for (const r of n.keys())
      t.push(J(r));
    return `R3Injector[${t.join(", ")}]`;
  }
  assertNotDestroyed() {
    if (this._destroyed)
      throw new v(205, ngDevMode && "Injector has already been destroyed.");
  }
  /**
   * Process a `SingleProvider` and add it.
   */
  processProvider(t) {
    t = $(t);
    let n = io(t) ? t : $(t && t.provide);
    const r = vO(t);
    if (ngDevMode && da(this, n, () => {
      Kl(t) && Gu(t.useValue), ah(t);
    }), !io(t) && t.multi === !0) {
      let o = this.records.get(n);
      o ? ngDevMode && o.multi === void 0 && wv() : (o = Yo(void 0, Pu, !0), o.factory = () => lh(o.multi), this.records.set(n, o)), n = t, o.multi.push(t);
    } else if (ngDevMode) {
      const o = this.records.get(n);
      o && o.multi !== void 0 && wv();
    }
    this.records.set(n, r);
  }
  hydrate(t, n) {
    const r = U(null);
    try {
      return ngDevMode && n.value === Ov ? Hp(J(t)) : n.value === Pu && (n.value = Ov, ngDevMode ? da(this, t, () => {
        n.value = n.factory(), Gu(n.value);
      }) : n.value = n.factory()), typeof n.value == "object" && n.value && EO(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
    } finally {
      U(r);
    }
  }
  injectableDefInScope(t) {
    if (!t.providedIn)
      return !1;
    const n = $(t.providedIn);
    return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n);
  }
  removeOnDestroy(t) {
    const n = this._onDestroyHooks.indexOf(t);
    n !== -1 && this._onDestroyHooks.splice(n, 1);
  }
}
function fh(e) {
  const t = Tc(e), n = t !== null ? t.factory : so(e);
  if (n !== null)
    return n;
  if (e instanceof F)
    throw new v(204, ngDevMode && `Token ${J(e)} is missing a ɵprov definition.`);
  if (e instanceof Function)
    return yO(e);
  throw new v(204, ngDevMode && "unreachable");
}
function yO(e) {
  const t = e.length;
  if (t > 0)
    throw new v(204, ngDevMode && `Can't resolve all parameters for ${J(e)}: (${fa(t, "?").join(", ")}).`);
  const n = jA(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function vO(e) {
  if (Kl(e))
    return Yo(void 0, e.useValue);
  {
    const t = ZC(e);
    return Yo(t, Pu);
  }
}
function ZC(e, t, n) {
  let r;
  if (ngDevMode && Ac(e) && ch(void 0, n, e), io(e)) {
    const o = $(e);
    return so(o) || fh(o);
  } else if (Kl(e))
    r = () => $(e.useValue);
  else if (WC(e))
    r = () => e.useFactory(...lh(e.deps || []));
  else if (GC(e))
    r = () => He($(e.useExisting));
  else {
    const o = $(e && (e.useClass || e.provide));
    if (ngDevMode && !o && ch(t, n, e), DO(e))
      r = () => new o(...lh(e.deps));
    else
      return so(o) || fh(o);
  }
  return r;
}
function Yo(e, t, n = !1) {
  return {
    factory: e,
    value: t,
    multi: n ? [] : void 0
  };
}
function DO(e) {
  return !!e.deps;
}
function EO(e) {
  return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function";
}
function CO(e) {
  return typeof e == "function" || typeof e == "object" && e instanceof F;
}
function hh(e, t) {
  for (const n of e)
    Array.isArray(n) ? hh(n, t) : n && Ac(n) ? hh(n.ɵproviders, t) : t(n);
}
function IO(e, t) {
  e instanceof Ai && e.assertNotDestroyed();
  let n;
  ngDevMode && (n = Xe({ injector: e, token: null }));
  const r = Cn(e), o = ut(void 0);
  try {
    return t();
  } finally {
    Cn(r), ngDevMode && Xe(n), ut(o);
  }
}
function qC() {
  return SC() !== void 0 || qA() != null;
}
function pt(e) {
  if (!qC())
    throw new v(-203, ngDevMode && e.name + "() can only be used within an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`");
}
var B;
(function(e) {
  e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule";
})(B || (B = {}));
var Pv;
(function(e) {
  e[e.Directive = 0] = "Directive", e[e.Pipe = 1] = "Pipe", e[e.NgModule = 2] = "NgModule";
})(Pv || (Pv = {}));
var xv;
(function(e) {
  e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom";
})(xv || (xv = {}));
function Le(e) {
  const t = Ae.ng;
  if (t && t.ɵcompilerFacade)
    return t.ɵcompilerFacade;
  if (typeof ngDevMode > "u" || ngDevMode) {
    console.error(`JIT compilation failed for ${e.kind}`, e.type);
    let n = `The ${e.kind} '${e.type.name}' needs to be compiled using the JIT compiler, but '@angular/compiler' is not available.

`;
    throw e.usage === 1 ? (n += `The ${e.kind} is part of a library that has been partially compiled.
`, n += `However, the Angular Linker has not processed the library such that JIT compilation is used as fallback.
`, n += `
`, n += `Ideally, the library is processed using the Angular Linker to become fully AOT compiled.
`) : n += `JIT compilation is discouraged for production use-cases! Consider using AOT mode instead.
`, n += `Alternatively, the JIT compiler should be loaded by bootstrapping using '@angular/platform-browser-dynamic' or '@angular/platform-server',
`, n += `or manually provide the compiler with 'import "@angular/compiler";' before bootstrapping.`, new Error(n);
  } else
    throw new Error("JIT compiler unavailable");
}
const Nv = {
  ɵɵdefineInjectable: se,
  ɵɵdefineInjector: Wl,
  ɵɵinject: He,
  ɵɵinvalidFactoryDep: Vp,
  resolveForwardRef: $
}, QC = Function;
function sa(e) {
  return typeof e == "function";
}
const bO = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, wO = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, _O = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, MO = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function SO(e) {
  return bO.test(e) || MO.test(e) || wO.test(e) && !_O.test(e);
}
class YC {
  constructor(t) {
    this._reflect = t || Ae.Reflect;
  }
  factory(t) {
    return (...n) => new t(...n);
  }
  /** @internal */
  _zipTypesAndAnnotations(t, n) {
    let r;
    typeof t > "u" ? r = fa(n.length) : r = fa(t.length);
    for (let o = 0; o < r.length; o++)
      typeof t > "u" ? r[o] = [] : t[o] && t[o] != Object ? r[o] = [t[o]] : r[o] = [], n && n[o] != null && (r[o] = r[o].concat(n[o]));
    return r;
  }
  _ownParameters(t, n) {
    const r = t.toString();
    if (SO(r))
      return null;
    if (t.parameters && t.parameters !== n.parameters)
      return t.parameters;
    const o = t.ctorParameters;
    if (o && o !== n.ctorParameters) {
      const a = typeof o == "function" ? o() : o, c = a.map((l) => l && l.type), u = a.map((l) => l && ff(l.decorators));
      return this._zipTypesAndAnnotations(c, u);
    }
    const s = t.hasOwnProperty(qo) && t[qo], i = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t);
    return i || s ? this._zipTypesAndAnnotations(i, s) : fa(t.length);
  }
  parameters(t) {
    if (!sa(t))
      return [];
    const n = cu(t);
    let r = this._ownParameters(t, n);
    return !r && n !== Object && (r = this.parameters(n)), r || [];
  }
  _ownAnnotations(t, n) {
    if (t.annotations && t.annotations !== n.annotations) {
      let r = t.annotations;
      return typeof r == "function" && r.annotations && (r = r.annotations), r;
    }
    return t.decorators && t.decorators !== n.decorators ? ff(t.decorators) : t.hasOwnProperty(Zo) ? t[Zo] : null;
  }
  annotations(t) {
    if (!sa(t))
      return [];
    const n = cu(t), r = this._ownAnnotations(t, n) || [];
    return (n !== Object ? this.annotations(n) : []).concat(r);
  }
  _ownPropMetadata(t, n) {
    if (t.propMetadata && t.propMetadata !== n.propMetadata) {
      let r = t.propMetadata;
      return typeof r == "function" && r.propMetadata && (r = r.propMetadata), r;
    }
    if (t.propDecorators && t.propDecorators !== n.propDecorators) {
      const r = t.propDecorators, o = {};
      return Object.keys(r).forEach((s) => {
        o[s] = ff(r[s]);
      }), o;
    }
    return t.hasOwnProperty(Qo) ? t[Qo] : null;
  }
  propMetadata(t) {
    if (!sa(t))
      return {};
    const n = cu(t), r = {};
    if (n !== Object) {
      const s = this.propMetadata(n);
      Object.keys(s).forEach((i) => {
        r[i] = s[i];
      });
    }
    const o = this._ownPropMetadata(t, n);
    return o && Object.keys(o).forEach((s) => {
      const i = [];
      r.hasOwnProperty(s) && i.push(...r[s]), i.push(...o[s]), r[s] = i;
    }), r;
  }
  ownPropMetadata(t) {
    return sa(t) ? this._ownPropMetadata(t, cu(t)) || {} : {};
  }
  hasLifecycleHook(t, n) {
    return t instanceof QC && n in t.prototype;
  }
}
function ff(e) {
  return e ? e.map((t) => {
    const r = t.type.annotationCls, o = t.args ? t.args : [];
    return new r(...o);
  }) : [];
}
function cu(e) {
  const t = e.prototype ? Object.getPrototypeOf(e.prototype) : null;
  return (t ? t.constructor : null) || Object;
}
const me = 0, C = 1, P = 2, Ne = 3, Ut = 4, Ve = 5, nt = 6, zn = 7, he = 8, Re = 9, Vt = 10, L = 11, Ba = 12, Rv = 13, qn = 14, De = 15, ao = 16, Ko = 17, Ct = 18, co = 19, KC = 20, Gn = 21, Os = 22, At = 23, M = 25, Kp = 1, Ha = 6, cn = 7, Ku = 8, uo = 9, ve = 10;
var Ua;
(function(e) {
  e[e.None = 0] = "None", e[e.HasTransplantedViews = 2] = "HasTransplantedViews";
})(Ua || (Ua = {}));
function je(e) {
  return Array.isArray(e) && typeof e[Kp] == "object";
}
function ze(e) {
  return Array.isArray(e) && e[Kp] === !0;
}
function Jp(e) {
  return (e.flags & 4) !== 0;
}
function Dr(e) {
  return e.componentOffset > -1;
}
function Xl(e) {
  return (e.flags & 1) === 1;
}
function xt(e) {
  return !!e.template;
}
function Va(e) {
  return (e[P] & 512) !== 0;
}
function JC(e) {
  return (e.type & 16) === 16;
}
function TO(e) {
  return (e[P] & 32) === 32;
}
function ph(e) {
  return (e[P] & 256) === 256;
}
function ot(e, t) {
  Oi(e, t[C]);
}
function Oi(e, t) {
  Qn(e);
  const n = t.data;
  for (let r = M; r < n.length; r++)
    if (n[r] === e)
      return;
  A("This TNode does not belong to this TView.");
}
function Qn(e) {
  b(e, "TNode must be defined"), e && typeof e == "object" && e.hasOwnProperty("directiveStylingLast") || A("Not of type TNode, got: " + e);
}
function ed(e) {
  b(e, "Expected TIcu to be defined"), typeof e.currentCaseLViewIndex != "number" && A("Object is not of TIcu type.");
}
function AO(e, t = "Type passed in is not ComponentType, it does not have 'ɵcmp' property.") {
  q(e) || A(t);
}
function OO(e, t = "Type passed in is not NgModuleType, it does not have 'ɵmod' property.") {
  It(e) || A(t);
}
function XC(e) {
  b(e, "currentTNode should exist!"), b(e.parent, "currentTNode should have a parent");
}
function jt(e) {
  b(e, "LContainer must be defined"), O(ze(e), !0, "Expecting LContainer");
}
function eI(e) {
  e && O(je(e), !0, "Expecting LView or undefined or null");
}
function pn(e) {
  b(e, "LView must be defined"), O(je(e), !0, "Expecting LView");
}
function ht(e, t) {
  O(e.firstCreatePass, !0, t || "Should only be called in first create pass.");
}
function Xp(e, t) {
  O(e.firstUpdatePass, !0, "Should only be called in first update pass.");
}
function PO(e) {
  (e.type === void 0 || e.selectors == null || e.inputs === void 0) && A("Expected a DirectiveDef/ComponentDef and this object does not seem to have the expected shape.");
}
function Rc(e, t) {
  tI(M, e.bindingStartIndex, t);
}
function Ju(e, t) {
  const n = e[1];
  tI(n.expandoStartIndex, e.length, t);
}
function tI(e, t, n) {
  e <= n && n < t || A(`Index out of range (expecting ${e} <= ${n} < ${t})`);
}
function xO(e, t) {
  b(e[De], "Component views should exist."), b(e[De][Ve].projection, "Components with projection nodes (<ng-content>) must have projection slots defined.");
}
function nI(e, t) {
  b(e, "Component views should always have a parent view (component's host view)");
}
function rI(e) {
  if (e.length < 2)
    return;
  const t = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (t.has(n))
      throw new v(309, `Directive ${n.type.name} matches multiple times on the same element. Directives can only match an element once.`);
    t.add(n);
  }
}
function oI(e, t) {
  Ju(e, t), Ju(
    e,
    t + 8
    /* NodeInjectorOffset.PARENT */
  ), ie(e[t + 0], "injectorIndex should point to a bloom filter"), ie(e[t + 1], "injectorIndex should point to a bloom filter"), ie(e[t + 2], "injectorIndex should point to a bloom filter"), ie(e[t + 3], "injectorIndex should point to a bloom filter"), ie(e[t + 4], "injectorIndex should point to a bloom filter"), ie(e[t + 5], "injectorIndex should point to a bloom filter"), ie(e[t + 6], "injectorIndex should point to a bloom filter"), ie(e[t + 7], "injectorIndex should point to a bloom filter"), ie(e[
    t + 8
    /* NodeInjectorOffset.PARENT */
  ], "injectorIndex should point to parent injector");
}
class sI {
  constructor(t, n, r) {
    this.previousValue = t, this.currentValue = n, this.firstChange = r;
  }
  /**
   * Check whether the new value is the first value assigned.
   */
  isFirstChange() {
    return this.firstChange;
  }
}
function iI(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : e[n] = r;
}
function eg() {
  return aI;
}
function aI(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = RO), NO;
}
eg.ngInherit = !0;
function NO() {
  const e = uI(this), t = e == null ? void 0 : e.current;
  if (t) {
    const n = e.previous;
    if (n === zt)
      e.previous = t;
    else
      for (let r in t)
        n[r] = t[r];
    e.current = null, this.ngOnChanges(t);
  }
}
function RO(e, t, n, r, o) {
  const s = this.declaredInputs[r];
  ngDevMode && Mi(s, "Name of input in ngOnChanges has to be a string");
  const i = uI(e) || FO(e, { previous: zt, current: null }), a = i.current || (i.current = {}), c = i.previous, u = c[s];
  a[s] = new sI(u && u.currentValue, n, c === zt), iI(e, t, o, n);
}
const cI = "__ngSimpleChanges__";
function uI(e) {
  return e[cI] || null;
}
function FO(e, t) {
  return e[cI] = t;
}
let gh = null;
const kO = (e) => {
  gh = e;
}, nn = function(e, t, n) {
  gh != null && gh(e, t, n);
}, lI = "svg", dI = "math";
function X(e) {
  for (; Array.isArray(e); )
    e = e[me];
  return e;
}
function tg(e) {
  for (; Array.isArray(e); ) {
    if (typeof e[Kp] == "object")
      return e;
    e = e[me];
  }
  return null;
}
function Fc(e, t) {
  return ngDevMode && _e(t, e), ngDevMode && Pn(e, M, "Expected to be past HEADER_OFFSET"), X(t[e]);
}
function Ye(e, t) {
  return ngDevMode && ot(e, t), ngDevMode && _e(t, e.index), X(t[e.index]);
}
function LO(e, t) {
  const n = e === null ? -1 : e.index;
  return n !== -1 ? (ngDevMode && ot(e, t), X(t[n])) : null;
}
function kc(e, t) {
  ngDevMode && vr(t, -1, "wrong index for TNode"), ngDevMode && Zn(t, e.data.length, "wrong index for TNode");
  const n = e.data[t];
  return ngDevMode && n !== null && Qn(n), n;
}
function No(e, t) {
  return ngDevMode && _e(e, t), e[t];
}
function bt(e, t) {
  ngDevMode && _e(t, e);
  const n = t[e];
  return je(n) ? n : n[me];
}
function Lc(e) {
  return (e[P] & 4) === 4;
}
function ng(e) {
  return (e[P] & 128) === 128;
}
function jO(e) {
  return ze(e[Ne]);
}
function Nt(e, t) {
  return t == null ? null : (ngDevMode && _e(e, t), e[t]);
}
function fI(e) {
  e[Ko] = 0;
}
function hI(e) {
  e[P] & 1024 || (e[P] |= 1024, ng(e) && nd(e));
}
function pI(e, t) {
  for (; e > 0; )
    ngDevMode && b(t[qn], "Declaration view should be defined if nesting level is greater than 0."), t = t[qn], e--;
  return t;
}
function td(e) {
  var t;
  return !!(e[P] & 9216 || (t = e[At]) != null && t.dirty);
}
function mh(e) {
  var t;
  (t = e[Vt].changeDetectionScheduler) == null || t.notify(8), e[P] & 64 && (e[P] |= 1024), td(e) && nd(e);
}
function nd(e) {
  var n;
  (n = e[Vt].changeDetectionScheduler) == null || n.notify(0);
  let t = Sn(e);
  for (; t !== null && !(t[P] & 8192 || (t[P] |= 8192, !ng(t))); )
    t = Sn(t);
}
function rd(e, t) {
  if ((e[P] & 256) === 256)
    throw new v(911, ngDevMode && "View has already been destroyed.");
  e[Gn] === null && (e[Gn] = []), e[Gn].push(t);
}
function rg(e, t) {
  if (e[Gn] === null)
    return;
  const n = e[Gn].indexOf(t);
  n !== -1 && e[Gn].splice(n, 1);
}
function Sn(e) {
  ngDevMode && pn(e);
  const t = e[Ne];
  return ze(t) ? t[Ne] : t;
}
const j = {
  lFrame: TI(null),
  bindingsEnabled: !0,
  skipHydrationRootTNode: null
};
var Yn;
(function(e) {
  e[e.Off = 0] = "Off", e[e.Exhaustive = 1] = "Exhaustive", e[e.OnlyDirtyViews = 2] = "OnlyDirtyViews";
})(Yn || (Yn = {}));
let og = 0, gI = !1;
function $O() {
  return j.lFrame.elementDepthCount;
}
function BO() {
  j.lFrame.elementDepthCount++;
}
function HO() {
  j.lFrame.elementDepthCount--;
}
function mI() {
  return j.bindingsEnabled;
}
function Ro() {
  return j.skipHydrationRootTNode !== null;
}
function UO(e) {
  return j.skipHydrationRootTNode === e;
}
function yI() {
  j.bindingsEnabled = !0;
}
function VO(e) {
  j.skipHydrationRootTNode = e;
}
function vI() {
  j.bindingsEnabled = !1;
}
function zO() {
  j.skipHydrationRootTNode = null;
}
function y() {
  return j.lFrame.lView;
}
function k() {
  return j.lFrame.tView;
}
function DI(e) {
  return j.lFrame.contextLView = e, e[he];
}
function EI(e) {
  return j.lFrame.contextLView = null, e;
}
function re() {
  let e = CI();
  for (; e !== null && e.type === 64; )
    e = e.parent;
  return e;
}
function CI() {
  return j.lFrame.currentTNode;
}
function za() {
  const e = j.lFrame, t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function Wt(e, t) {
  ngDevMode && e && Oi(e, j.lFrame.tView);
  const n = j.lFrame;
  n.currentTNode = e, n.isParent = t;
}
function sg() {
  return j.lFrame.isParent;
}
function ig() {
  j.lFrame.isParent = !1;
}
function II() {
  const e = j.lFrame.contextLView;
  return ngDevMode && b(e, "contextLView must be defined."), e;
}
function Fo() {
  return !ngDevMode && A("Must never be called in production mode"), og !== Yn.Off;
}
function ag() {
  return !ngDevMode && A("Must never be called in production mode"), og === Yn.Exhaustive;
}
function Fv(e) {
  !ngDevMode && A("Must never be called in production mode"), og = e;
}
function bI() {
  return gI;
}
function kv(e) {
  gI = e;
}
function st() {
  const e = j.lFrame;
  let t = e.bindingRootIndex;
  return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
}
function ae() {
  return j.lFrame.bindingIndex;
}
function wI(e) {
  return j.lFrame.bindingIndex = e;
}
function qt() {
  return j.lFrame.bindingIndex++;
}
function xn(e) {
  const t = j.lFrame, n = t.bindingIndex;
  return t.bindingIndex = t.bindingIndex + e, n;
}
function GO() {
  return j.lFrame.inI18n;
}
function _I(e) {
  j.lFrame.inI18n = e;
}
function WO(e, t) {
  const n = j.lFrame;
  n.bindingIndex = n.bindingRootIndex = e, yh(t);
}
function ZO() {
  return j.lFrame.currentDirectiveIndex;
}
function yh(e) {
  j.lFrame.currentDirectiveIndex = e;
}
function cg(e) {
  const t = j.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function ug() {
  return j.lFrame.currentQueryIndex;
}
function od(e) {
  j.lFrame.currentQueryIndex = e;
}
function qO(e) {
  const t = e[C];
  return t.type === 2 ? (ngDevMode && b(t.declTNode, "Embedded TNodes should have declaration parents."), t.declTNode) : t.type === 1 ? e[Ve] : null;
}
function MI(e, t, n) {
  if (ngDevMode && eI(e), n & Z.SkipSelf) {
    ngDevMode && Oi(t, e[C]);
    let o = t, s = e;
    for (; ngDevMode && b(o, "Parent TNode should be defined"), o = o.parent, o === null && !(n & Z.Host); )
      if (o = qO(s), o === null || (ngDevMode && b(s, "Parent LView should be defined"), s = s[qn], o.type & 10))
        break;
    if (o === null)
      return !1;
    t = o, e = s;
  }
  ngDevMode && ot(t, e);
  const r = j.lFrame = SI();
  return r.currentTNode = t, r.lView = e, !0;
}
function lg(e) {
  ngDevMode && Lt(e[0], e[1], "????"), ngDevMode && eI(e);
  const t = SI();
  ngDevMode && (O(t.isParent, !0, "Expected clean LFrame"), O(t.lView, null, "Expected clean LFrame"), O(t.tView, null, "Expected clean LFrame"), O(t.selectedIndex, -1, "Expected clean LFrame"), O(t.elementDepthCount, 0, "Expected clean LFrame"), O(t.currentDirectiveIndex, -1, "Expected clean LFrame"), O(t.currentNamespace, null, "Expected clean LFrame"), O(t.bindingRootIndex, -1, "Expected clean LFrame"), O(t.currentQueryIndex, 0, "Expected clean LFrame"));
  const n = e[C];
  j.lFrame = t, ngDevMode && n.firstChild && Oi(n.firstChild, n), t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1;
}
function SI() {
  const e = j.lFrame, t = e === null ? null : e.child;
  return t === null ? TI(e) : t;
}
function TI(e) {
  const t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1
  };
  return e !== null && (e.child = t), t;
}
function AI() {
  const e = j.lFrame;
  return j.lFrame = e.parent, e.currentTNode = null, e.lView = null, e;
}
const OI = AI;
function dg() {
  const e = AI();
  e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0;
}
function QO(e) {
  return (j.lFrame.contextLView = pI(e, j.lFrame.contextLView))[he];
}
function Ge() {
  return j.lFrame.selectedIndex;
}
function lo(e) {
  ngDevMode && e !== -1 && Pn(e, M, "Index must be past HEADER_OFFSET (or -1)."), ngDevMode && Zn(e, j.lFrame.lView.length, "Can't set index passed end of LView"), j.lFrame.selectedIndex = e;
}
function ge() {
  const e = j.lFrame;
  return kc(e.tView, e.selectedIndex);
}
function PI() {
  j.lFrame.currentNamespace = lI;
}
function xI() {
  j.lFrame.currentNamespace = dI;
}
function NI() {
  YO();
}
function YO() {
  j.lFrame.currentNamespace = null;
}
function RI() {
  return j.lFrame.currentNamespace;
}
let FI = !0;
function jc() {
  return FI;
}
function gn(e) {
  FI = e;
}
function KO(e, t, n) {
  ngDevMode && ht(n);
  const { ngOnChanges: r, ngOnInit: o, ngDoCheck: s } = t.type.prototype;
  if (r) {
    const i = aI(t);
    (n.preOrderHooks ?? (n.preOrderHooks = [])).push(e, i), (n.preOrderCheckHooks ?? (n.preOrderCheckHooks = [])).push(e, i);
  }
  o && (n.preOrderHooks ?? (n.preOrderHooks = [])).push(0 - e, o), s && ((n.preOrderHooks ?? (n.preOrderHooks = [])).push(e, s), (n.preOrderCheckHooks ?? (n.preOrderCheckHooks = [])).push(e, s));
}
function sd(e, t) {
  ngDevMode && ht(e);
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    const o = e.data[n];
    ngDevMode && b(o, "Expecting DirectiveDef");
    const s = o.type.prototype, { ngAfterContentInit: i, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: u, ngOnDestroy: l } = s;
    i && (e.contentHooks ?? (e.contentHooks = [])).push(-n, i), a && ((e.contentHooks ?? (e.contentHooks = [])).push(n, a), (e.contentCheckHooks ?? (e.contentCheckHooks = [])).push(n, a)), c && (e.viewHooks ?? (e.viewHooks = [])).push(-n, c), u && ((e.viewHooks ?? (e.viewHooks = [])).push(n, u), (e.viewCheckHooks ?? (e.viewCheckHooks = [])).push(n, u)), l != null && (e.destroyHooks ?? (e.destroyHooks = [])).push(n, l);
  }
}
function xu(e, t, n) {
  kI(e, t, 3, n);
}
function Nu(e, t, n, r) {
  ngDevMode && Lt(n, 3, "Init pre-order hooks should not be called more than once"), (e[P] & 3) === n && kI(e, t, n, r);
}
function hf(e, t) {
  ngDevMode && Lt(t, 3, "Init hooks phase should not be incremented after all init hooks have been run.");
  let n = e[P];
  (n & 3) === t && (n &= 16383, n += 1, e[P] = n);
}
function kI(e, t, n, r) {
  ngDevMode && O(Fo(), !1, "Hooks should never be run when in check no changes mode.");
  const o = r !== void 0 ? e[Ko] & 65535 : 0, s = r ?? -1, i = t.length - 1;
  let a = 0;
  for (let c = o; c < i; c++)
    if (typeof t[c + 1] == "number") {
      if (a = t[c], r != null && a >= r)
        break;
    } else
      t[c] < 0 && (e[Ko] += 65536), (a < s || s == -1) && (JO(e, n, t, c), e[Ko] = (e[Ko] & 4294901760) + c + 2), c++;
}
function Lv(e, t) {
  nn(4, e, t);
  const n = U(null);
  try {
    t.call(e);
  } finally {
    U(n), nn(5, e, t);
  }
}
function JO(e, t, n, r) {
  const o = n[r] < 0, s = n[r + 1], i = o ? -n[r] : n[r], a = e[i];
  o ? e[P] >> 14 < e[Ko] >> 16 && (e[P] & 3) === t && (e[P] += 16384, Lv(a, s)) : Lv(a, s);
}
const Ps = -1;
class $c {
  constructor(t, n, r) {
    this.factory = t, this.resolving = !1, ngDevMode && b(t, "Factory not specified"), ngDevMode && O(typeof t, "function", "Expected factory function."), this.canSeeViewProviders = n, this.injectImpl = r;
  }
}
function XO(e) {
  return e instanceof $c;
}
function vh(e) {
  let t = "";
  return e & 1 && (t += "|Text"), e & 2 && (t += "|Element"), e & 4 && (t += "|Container"), e & 8 && (t += "|ElementContainer"), e & 16 && (t += "|Projection"), e & 32 && (t += "|IcuContainer"), e & 64 && (t += "|Placeholder"), e & 128 && (t += "|LetDeclaration"), t.length > 0 ? t.substring(1) : t;
}
function LI(e) {
  return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex));
}
function eP(e) {
  return !!(e.type & 128);
}
function tP(e) {
  return (e.flags & 8) !== 0;
}
function nP(e) {
  return (e.flags & 16) !== 0;
}
function Qe(e, t, n) {
  b(e, "should be called with a TNode"), e.type & t || A(n || `Expected [${vh(t)}] but got ${vh(e.type)}.`);
}
function rP(e) {
  e === 2 || e === 1 || e === 4 || e === 8 || e === 32 || e === 16 || e === 64 || e === 128 || A(`Expected TNodeType to have only a single type selected, but got ${vh(e)}.`);
}
const Ru = {};
class ro {
  constructor(t, n) {
    this.injector = t, this.parentInjector = n;
  }
  get(t, n, r) {
    r = Oc(r);
    const o = this.injector.get(t, Ru, r);
    return o !== Ru || n === Ru ? o : this.parentInjector.get(t, n, r);
  }
}
function fg(e) {
  return e !== Ps;
}
function Ga(e) {
  if (ngDevMode) {
    ie(e, "Number expected"), Lt(e, -1, "Not a valid state.");
    const t = e & 32767;
    vr(t, M, "Parent injector must be pointing past HEADER_OFFSET.");
  }
  return e & 32767;
}
function oP(e) {
  return e >> 16;
}
function Wa(e, t) {
  let n = oP(e), r = t;
  for (; n > 0; )
    r = r[qn], n--;
  return r;
}
function sP(e) {
  return e instanceof ro && typeof e.injector.__ngOutletInjector == "function";
}
let Dh = !0;
function Xu(e) {
  const t = Dh;
  return Dh = e, t;
}
const iP = 256, jI = iP - 1, $I = 5;
let aP = 0;
const rn = {};
function cP(e, t, n) {
  ngDevMode && O(t.firstCreatePass, !0, "expected firstCreatePass to be true");
  let r;
  typeof n == "string" ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(Ts) && (r = n[Ts]), r == null && (r = n[Ts] = aP++);
  const o = r & jI, s = 1 << o;
  t.data[e + (o >> $I)] |= s;
}
function el(e, t) {
  const n = BI(e, t);
  if (n !== -1)
    return n;
  const r = t[C];
  r.firstCreatePass && (e.injectorIndex = t.length, pf(r.data, e), pf(t, null), pf(r.blueprint, null));
  const o = id(e, t), s = e.injectorIndex;
  if (fg(o)) {
    const i = Ga(o), a = Wa(o, t), c = a[C].data;
    for (let u = 0; u < 8; u++)
      t[s + u] = a[i + u] | c[i + u];
  }
  return t[
    s + 8
    /* NodeInjectorOffset.PARENT */
  ] = o, s;
}
function pf(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function BI(e, t) {
  return e.injectorIndex === -1 || // If the injector index is the same as its parent's injector index, then the index has been
  // copied down from the parent node. No injector has been created yet on this node.
  e.parent && e.parent.injectorIndex === e.injectorIndex || // After the first template pass, the injector index might exist but the parent values
  // might not have been calculated yet for this instance
  t[
    e.injectorIndex + 8
    /* NodeInjectorOffset.PARENT */
  ] === null ? -1 : (ngDevMode && _e(t, e.injectorIndex), e.injectorIndex);
}
function id(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex;
  let n = 0, r = null, o = t;
  for (; o !== null; ) {
    if (r = WI(o), r === null)
      return Ps;
    if (ngDevMode && r && ot(r, o[qn]), n++, o = o[qn], r.injectorIndex !== -1)
      return r.injectorIndex | n << 16;
  }
  return Ps;
}
function Eh(e, t, n) {
  cP(e, t, n);
}
function uP(e, t) {
  if (ngDevMode && Qe(
    e,
    15
    /* TNodeType.AnyRNode */
  ), ngDevMode && b(e, "expecting tNode"), t === "class")
    return e.classes;
  if (t === "style")
    return e.styles;
  const n = e.attrs;
  if (n) {
    const r = n.length;
    let o = 0;
    for (; o < r; ) {
      const s = n[o];
      if (xC(s))
        break;
      if (s === 0)
        o = o + 2;
      else if (typeof s == "number")
        for (o++; o < r && typeof n[o] == "string"; )
          o++;
      else {
        if (s === t)
          return n[o + 1];
        o = o + 2;
      }
    }
  }
  return null;
}
function HI(e, t, n) {
  if (n & Z.Optional || e !== void 0)
    return e;
  Up(t, "NodeInjector");
}
function UI(e, t, n, r) {
  if (n & Z.Optional && r === void 0 && (r = null), !(n & (Z.Self | Z.Host))) {
    const o = e[Re], s = ut(void 0);
    try {
      return o ? o.get(t, r, n & Z.Optional) : TC(t, r, n & Z.Optional);
    } finally {
      ut(s);
    }
  }
  return HI(r, t, n);
}
function VI(e, t, n, r = Z.Default, o) {
  if (e !== null) {
    if (t[P] & 2048 && // The token must be present on the current node injector when the `Self`
    // flag is set, so the lookup on embedded view injector(s) can be skipped.
    !(r & Z.Self)) {
      const i = hP(e, t, n, r, rn);
      if (i !== rn)
        return i;
    }
    const s = zI(e, t, n, r, rn);
    if (s !== rn)
      return s;
  }
  return UI(t, n, r, o);
}
function zI(e, t, n, r, o) {
  const s = dP(n);
  if (typeof s == "function") {
    if (!MI(t, e, r))
      return r & Z.Host ? HI(o, n, r) : UI(t, n, r, o);
    try {
      let i;
      if (ngDevMode ? da(new Ce(re(), y()), n, () => {
        i = s(r), i != null && Gu(i);
      }) : i = s(r), i == null && !(r & Z.Optional))
        Up(n);
      else
        return i;
    } finally {
      OI();
    }
  } else if (typeof s == "number") {
    let i = null, a = BI(e, t), c = Ps, u = r & Z.Host ? t[De][Ve] : null;
    for ((a === -1 || r & Z.SkipSelf) && (c = a === -1 ? id(e, t) : t[
      a + 8
      /* NodeInjectorOffset.PARENT */
    ], c === Ps || !$v(r, !1) ? a = -1 : (i = t[C], a = Ga(c), t = Wa(c, t))); a !== -1; ) {
      ngDevMode && oI(t, a);
      const l = t[C];
      if (ngDevMode && ot(l.data[
        a + 8
        /* NodeInjectorOffset.TNODE */
      ], t), jv(s, a, l.data)) {
        const d = lP(a, t, n, i, r, u);
        if (d !== rn)
          return d;
      }
      c = t[
        a + 8
        /* NodeInjectorOffset.PARENT */
      ], c !== Ps && $v(r, t[C].data[
        a + 8
        /* NodeInjectorOffset.TNODE */
      ] === u) && jv(s, a, t) ? (i = l, a = Ga(c), t = Wa(c, t)) : a = -1;
    }
  }
  return o;
}
function lP(e, t, n, r, o, s) {
  const i = t[C], a = i.data[
    e + 8
    /* NodeInjectorOffset.TNODE */
  ], c = r == null ? (
    // 1) This is the first invocation `previousTView == null` which means that we are at the
    // `TNode` of where injector is starting to look. In such a case the only time we are allowed
    // to look into the ViewProviders is if:
    // - we are on a component
    // - AND the injector set `includeViewProviders` to true (implying that the token can see
    // ViewProviders because it is the Component or a Service which itself was declared in
    // ViewProviders)
    Dr(a) && Dh
  ) : (
    // 2) `previousTView != null` which means that we are now walking across the parent nodes.
    // In such a case we are only allowed to look into the ViewProviders if:
    // - We just crossed from child View to Parent View `previousTView != currentTView`
    // - AND the parent TNode is an Element.
    // This means that we just came from the Component's View and therefore are allowed to see
    // into the ViewProviders.
    r != i && (a.type & 3) !== 0
  ), u = o & Z.Host && s === a, l = Fu(a, i, n, c, u);
  return l !== null ? fo(t, i, l, a) : rn;
}
function Fu(e, t, n, r, o) {
  const s = e.providerIndexes, i = t.data, a = s & 1048575, c = e.directiveStart, u = e.directiveEnd, l = s >> 20, d = r ? a : a + l, f = o ? a + l : u;
  for (let h = d; h < f; h++) {
    const p = i[h];
    if (h < c && n === p || h >= c && p.type === n)
      return h;
  }
  if (o) {
    const h = i[c];
    if (h && xt(h) && h.type === n)
      return c;
  }
  return null;
}
function fo(e, t, n, r) {
  let o = e[n];
  const s = t.data;
  if (XO(o)) {
    const i = o;
    i.resolving && Hp(W(s[n]));
    const a = Xu(i.canSeeViewProviders);
    i.resolving = !0;
    let c;
    if (ngDevMode) {
      const d = s[n].type || s[n], f = new Ce(r, e);
      c = Xe({ injector: f, token: d });
    }
    const u = i.injectImpl ? ut(i.injectImpl) : null, l = MI(e, r, Z.Default);
    ngDevMode && O(l, !0, "Because flags do not contain `SkipSelf' we expect this to always succeed.");
    try {
      o = e[n] = i.factory(void 0, s, e, r), ngDevMode && Gu(o), t.firstCreatePass && n >= r.directiveStart && (ngDevMode && PO(s[n]), KO(n, s[n], t));
    } finally {
      ngDevMode && Xe(c), u !== null && ut(u), Xu(a), i.resolving = !1, OI();
    }
  }
  return o;
}
function dP(e) {
  if (ngDevMode && b(e, "token must be defined"), typeof e == "string")
    return e.charCodeAt(0) || 0;
  const t = (
    // First check with `hasOwnProperty` so we don't get an inherited ID.
    e.hasOwnProperty(Ts) ? e[Ts] : void 0
  );
  return typeof t == "number" ? t >= 0 ? t & jI : (ngDevMode && O(t, -1, "Expecting to get Special Injector Id"), fP) : t;
}
function jv(e, t, n) {
  const r = 1 << e;
  return !!(n[t + (e >> $I)] & r);
}
function $v(e, t) {
  return !(e & Z.Self) && !(e & Z.Host && t);
}
function Pi(e) {
  return e._lView;
}
function xi(e) {
  return e._tNode;
}
class Ce {
  constructor(t, n) {
    this._tNode = t, this._lView = n;
  }
  get(t, n, r) {
    return VI(this._tNode, this._lView, t, Oc(r), n);
  }
}
function fP() {
  return new Ce(re(), y());
}
function GI(e) {
  return hn(() => {
    const t = e.prototype.constructor, n = t[wn] || Ch(t), r = Object.prototype;
    let o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      const s = o[wn] || Ch(o);
      if (s && s !== n)
        return s;
      o = Object.getPrototypeOf(o);
    }
    return (s) => new s();
  });
}
function Ch(e) {
  return Gl(e) ? () => {
    const t = Ch($(e));
    return t && t();
  } : so(e);
}
function hP(e, t, n, r, o) {
  let s = e, i = t;
  for (; s !== null && i !== null && i[P] & 2048 && !(i[P] & 512); ) {
    ngDevMode && ot(s, i);
    const a = zI(s, i, n, r | Z.Self, rn);
    if (a !== rn)
      return a;
    let c = s.parent;
    if (!c) {
      const u = i[KC];
      if (u) {
        const l = u.get(n, rn, r);
        if (l !== rn)
          return l;
      }
      c = WI(i), i = i[qn];
    }
    s = c;
  }
  return o;
}
function WI(e) {
  const t = e[C], n = t.type;
  return n === 2 ? (ngDevMode && b(t.declTNode, "Embedded TNodes should have declaration parents."), t.declTNode) : n === 1 ? e[Ve] : null;
}
function ad(e) {
  return uP(re(), e);
}
const hg = _i("Attribute", (e) => ({
  attributeName: e,
  __NG_ELEMENT_ID__: () => ad(e)
}));
let Bv = null;
function pg() {
  return Bv = Bv || new YC();
}
function cd(e) {
  return ZI(pg().parameters(e));
}
function ZI(e) {
  return e.map((t) => pP(t));
}
function pP(e) {
  const t = {
    token: null,
    attribute: null,
    host: !1,
    optional: !1,
    self: !1,
    skipSelf: !1
  };
  if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (r === void 0)
        continue;
      const o = Object.getPrototypeOf(r);
      if (r instanceof Ot || o.ngMetadataName === "Optional")
        t.optional = !0;
      else if (r instanceof Ql || o.ngMetadataName === "SkipSelf")
        t.skipSelf = !0;
      else if (r instanceof AC || o.ngMetadataName === "Self")
        t.self = !0;
      else if (r instanceof xc || o.ngMetadataName === "Host")
        t.host = !0;
      else if (r instanceof Et)
        t.token = r.token;
      else if (r instanceof hg) {
        if (r.attributeName === void 0)
          throw new v(204, ngDevMode && "Attribute name must be defined.");
        t.attribute = r.attributeName;
      } else
        t.token = r;
    }
  else e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e;
  return t;
}
function gP(e, t) {
  let n = null, r = null;
  e.hasOwnProperty(La) || Object.defineProperty(e, La, {
    get: () => (n === null && (n = Le({
      usage: 0,
      kind: "injectable",
      type: e
    }).compileInjectable(Nv, `ng:///${e.name}/ɵprov.js`, DP(e, t))), n)
  }), e.hasOwnProperty(wn) || Object.defineProperty(e, wn, {
    get: () => {
      if (r === null) {
        const o = Le({
          usage: 0,
          kind: "injectable",
          type: e
        });
        r = o.compileFactory(Nv, `ng:///${e.name}/ɵfac.js`, {
          name: e.name,
          type: e,
          typeArgumentCount: 0,
          // In JIT mode types are not available nor used.
          deps: cd(e),
          target: o.FactoryTarget.Injectable
        });
      }
      return r;
    },
    // Leave this configurable so that the factories from directives or pipes can take precedence.
    configurable: !0
  });
}
const mP = ce({
  provide: String,
  useValue: ce
});
function Hv(e) {
  return e.useClass !== void 0;
}
function yP(e) {
  return mP in e;
}
function Uv(e) {
  return e.useFactory !== void 0;
}
function vP(e) {
  return e.useExisting !== void 0;
}
function DP(e, t) {
  const n = t || { providedIn: null }, r = {
    name: e.name,
    type: e,
    typeArgumentCount: 0,
    providedIn: n.providedIn
  };
  return (Hv(n) || Uv(n)) && n.deps !== void 0 && (r.deps = ZI(n.deps)), Hv(n) ? r.useClass = n.useClass : yP(n) ? r.useValue = n.useValue : Uv(n) ? r.useFactory = n.useFactory : vP(n) && (r.useExisting = n.useExisting), r;
}
const Ee = Sc("Injectable", void 0, void 0, void 0, (e, t) => gP(e, t));
function Ih(e, t = null, n = null, r) {
  const o = qI(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function qI(e, t = null, n = null, r, o = /* @__PURE__ */ new Set()) {
  const s = [n || K, UC(e)];
  return r = r || (typeof e == "object" ? void 0 : J(e)), new Ai(s, t || Jl(), r || null, o);
}
const Tr = class Tr {
  static create(t, n) {
    if (Array.isArray(t))
      return Ih({ name: "" }, n, t, "");
    {
      const r = t.name ?? "";
      return Ih({ name: r }, t.parent, t.providers, r);
    }
  }
};
Tr.THROW_IF_NOT_FOUND = ja, Tr.NULL = new Yl(), Tr.ɵprov = se({
  token: Tr,
  providedIn: "any",
  factory: () => He(zp)
}), Tr.__NG_ELEMENT_ID__ = -1;
let $e = Tr;
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
class EP {
  constructor(t) {
    this.attributeName = t, this.__NG_ELEMENT_ID__ = () => ad(this.attributeName);
  }
  toString() {
    return `HostAttributeToken ${this.attributeName}`;
  }
}
const QI = new F(ngDevMode ? "HOST_TAG_NAME" : "");
QI.__NG_ELEMENT_ID__ = (e) => {
  const t = re();
  if (t === null)
    throw new v(204, ngDevMode && "HOST_TAG_NAME can only be injected in directives and components during construction time (in a class constructor or as a class field initializer)");
  if (t.type & 2)
    return t.value;
  if (e & Z.Optional)
    return null;
  throw new v(204, ngDevMode && `HOST_TAG_NAME was used on ${CP(t)} which doesn't have an underlying element in the DOM. This is invalid, and so the dependency should be marked as optional.`);
};
function CP(e) {
  return e.type & 8 ? "an <ng-container>" : e.type & 4 ? "an <ng-template>" : e.type & 128 ? "an @let declaration" : "a node";
}
const IP = "ngOriginalError";
function gf(e) {
  return e[IP];
}
const YI = !0, Rl = class Rl {
};
Rl.__NG_ELEMENT_ID__ = wP, Rl.__NG_ENV_ID__ = (t) => t;
let Kn = Rl;
class bP extends Kn {
  constructor(t) {
    super(), this._lView = t;
  }
  onDestroy(t) {
    return rd(this._lView, t), () => rg(this._lView, t);
  }
}
function wP() {
  return new bP(y());
}
const Sa = class Sa {
  constructor() {
    this.taskId = 0, this.pendingTasks = /* @__PURE__ */ new Set(), this.hasPendingTasks = new T1(!1);
  }
  get _hasPendingTasks() {
    return this.hasPendingTasks.value;
  }
  add() {
    this._hasPendingTasks || this.hasPendingTasks.next(!0);
    const t = this.taskId++;
    return this.pendingTasks.add(t), t;
  }
  remove(t) {
    this.pendingTasks.delete(t), this.pendingTasks.size === 0 && this._hasPendingTasks && this.hasPendingTasks.next(!1);
  }
  ngOnDestroy() {
    this.pendingTasks.clear(), this._hasPendingTasks && this.hasPendingTasks.next(!1);
  }
};
Sa.ɵprov = se({
  token: Sa,
  providedIn: "root",
  factory: () => new Sa()
});
let un = Sa;
const Ta = class Ta {
  constructor() {
    this.internalPendingTasks = I(un);
  }
  /**
   * Adds a new task that should block application's stability.
   * @returns A cleanup function that removes a task when called.
   */
  add() {
    const t = this.internalPendingTasks.add();
    return () => this.internalPendingTasks.remove(t);
  }
};
Ta.ɵprov = se({
  token: Ta,
  providedIn: "root",
  factory: () => new Ta()
});
let bh = Ta;
class _P extends Fa {
  constructor(t = !1) {
    super(), this.destroyRef = void 0, this.pendingTasks = void 0, this.__isAsync = t, qC() && (this.destroyRef = I(Kn, { optional: !0 }) ?? void 0, this.pendingTasks = I(un, { optional: !0 }) ?? void 0);
  }
  emit(t) {
    const n = U(null);
    try {
      super.next(t);
    } finally {
      U(n);
    }
  }
  subscribe(t, n, r) {
    var c, u, l;
    let o = t, s = n || (() => null), i = r;
    if (t && typeof t == "object") {
      const d = t;
      o = (c = d.next) == null ? void 0 : c.bind(d), s = (u = d.error) == null ? void 0 : u.bind(d), i = (l = d.complete) == null ? void 0 : l.bind(d);
    }
    this.__isAsync && (s = this.wrapInTimeout(s), o && (o = this.wrapInTimeout(o)), i && (i = this.wrapInTimeout(i)));
    const a = super.subscribe({ next: o, error: s, complete: i });
    return t instanceof Po && t.add(a), a;
  }
  wrapInTimeout(t) {
    return (n) => {
      var o;
      const r = (o = this.pendingTasks) == null ? void 0 : o.add();
      setTimeout(() => {
        var s;
        t(n), r !== void 0 && ((s = this.pendingTasks) == null || s.remove(r));
      });
    };
  }
}
const ne = _P;
function tl(...e) {
}
function KI(e) {
  let t, n;
  function r() {
    e = tl;
    try {
      n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
    } catch {
    }
  }
  return t = setTimeout(() => {
    e(), r();
  }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => {
    e(), r();
  })), () => r();
}
function Vv(e) {
  return queueMicrotask(() => e()), () => {
    e = tl;
  };
}
class MP {
  constructor(t, n = console) {
    this.name = "asyncStackTagging for " + t, this.createTask = (n == null ? void 0 : n.createTask) ?? (() => null);
  }
  onScheduleTask(t, n, r, o) {
    return o.consoleTask = this.createTask(`Zone - ${o.source || o.type}`), t.scheduleTask(r, o);
  }
  onInvokeTask(t, n, r, o, s, i) {
    let a;
    return o.consoleTask ? a = o.consoleTask.run(() => t.invokeTask(r, o, s, i)) : a = t.invokeTask(r, o, s, i), a;
  }
}
const gg = "isAngularZone", nl = gg + "_ID";
let SP = 0;
class oe {
  constructor(t) {
    this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new ne(!1), this.onMicrotaskEmpty = new ne(!1), this.onStable = new ne(!1), this.onError = new ne(!1);
    const { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: r = !1, shouldCoalesceRunChangeDetection: o = !1, scheduleInRootZone: s = YI } = t;
    if (typeof Zone > "u")
      throw new v(908, ngDevMode && "In this configuration Angular requires Zone.js");
    Zone.assertZonePatched();
    const i = this;
    i._nesting = 0, i._outer = i._inner = Zone.current, ngDevMode && (i._inner = i._inner.fork(new MP("Angular"))), Zone.TaskTrackingZoneSpec && (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec())), n && Zone.longStackTraceZoneSpec && (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)), i.shouldCoalesceEventChangeDetection = !o && r, i.shouldCoalesceRunChangeDetection = o, i.callbackScheduled = !1, i.scheduleInRootZone = s, OP(i);
  }
  /**
    This method checks whether the method call happens within an Angular Zone instance.
  */
  static isInAngularZone() {
    return typeof Zone < "u" && Zone.current.get(gg) === !0;
  }
  /**
    Assures that the method is called within the Angular Zone, otherwise throws an error.
  */
  static assertInAngularZone() {
    if (!oe.isInAngularZone())
      throw new v(909, ngDevMode && "Expected to be in Angular Zone, but it is not!");
  }
  /**
    Assures that the method is called outside of the Angular Zone, otherwise throws an error.
  */
  static assertNotInAngularZone() {
    if (oe.isInAngularZone())
      throw new v(909, ngDevMode && "Expected to not be in Angular Zone, but it is!");
  }
  /**
   * Executes the `fn` function synchronously within the Angular zone and returns value returned by
   * the function.
   *
   * Running functions via `run` allows you to reenter Angular zone from a task that was executed
   * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
   *
   * Any future tasks or microtasks scheduled from within this function will continue executing from
   * within the Angular zone.
   *
   * If a synchronous error happens it will be rethrown and not reported via `onError`.
   */
  run(t, n, r) {
    return this._inner.run(t, n, r);
  }
  /**
   * Executes the `fn` function synchronously within the Angular zone as a task and returns value
   * returned by the function.
   *
   * Running functions via `run` allows you to reenter Angular zone from a task that was executed
   * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
   *
   * Any future tasks or microtasks scheduled from within this function will continue executing from
   * within the Angular zone.
   *
   * If a synchronous error happens it will be rethrown and not reported via `onError`.
   */
  runTask(t, n, r, o) {
    const s = this._inner, i = s.scheduleEventTask("NgZoneEvent: " + o, t, TP, tl, tl);
    try {
      return s.runTask(i, n, r);
    } finally {
      s.cancelTask(i);
    }
  }
  /**
   * Same as `run`, except that synchronous errors are caught and forwarded via `onError` and not
   * rethrown.
   */
  runGuarded(t, n, r) {
    return this._inner.runGuarded(t, n, r);
  }
  /**
   * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
   * the function.
   *
   * Running functions via {@link #runOutsideAngular} allows you to escape Angular's zone and do
   * work that
   * doesn't trigger Angular change-detection or is subject to Angular's error handling.
   *
   * Any future tasks or microtasks scheduled from within this function will continue executing from
   * outside of the Angular zone.
   *
   * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
   */
  runOutsideAngular(t) {
    return this._outer.run(t);
  }
}
const TP = {};
function mg(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if (e._nesting--, !e.hasPendingMicrotasks)
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function AP(e) {
  if (e.isCheckStableRunning || e.callbackScheduled)
    return;
  e.callbackScheduled = !0;
  function t() {
    KI(() => {
      e.callbackScheduled = !1, wh(e), e.isCheckStableRunning = !0, mg(e), e.isCheckStableRunning = !1;
    });
  }
  e.scheduleInRootZone ? Zone.root.run(() => {
    t();
  }) : e._outer.run(() => {
    t();
  }), wh(e);
}
function OP(e) {
  const t = () => {
    AP(e);
  }, n = SP++;
  e._inner = e._inner.fork({
    name: "angular",
    properties: {
      [gg]: !0,
      [nl]: n,
      [nl + n]: !0
    },
    onInvokeTask: (r, o, s, i, a, c) => {
      if (PP(c))
        return r.invokeTask(s, i, a, c);
      try {
        return zv(e), r.invokeTask(s, i, a, c);
      } finally {
        (e.shouldCoalesceEventChangeDetection && i.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), Gv(e);
      }
    },
    onInvoke: (r, o, s, i, a, c, u) => {
      try {
        return zv(e), r.invoke(s, i, a, c, u);
      } finally {
        e.shouldCoalesceRunChangeDetection && // Do not delay change detection when the task is the scheduler's tick.
        // We need to synchronously trigger the stability logic so that the
        // zone-based scheduler can prevent a duplicate ApplicationRef.tick
        // by first checking if the scheduler tick is running. This does seem a bit roundabout,
        // but we _do_ still want to trigger all the correct events when we exit the zone.run
        // (`onMicrotaskEmpty` and `onStable` _should_ emit; developers can have code which
        // relies on these events happening after change detection runs).
        // Note: `zone.callbackScheduled` is already in delayChangeDetectionForEventsDelegate
        // but is added here as well to prevent reads of applyArgs when not necessary
        !e.callbackScheduled && !xP(c) && t(), Gv(e);
      }
    },
    onHasTask: (r, o, s, i) => {
      r.hasTask(s, i), o === s && (i.change == "microTask" ? (e._hasPendingMicrotasks = i.microTask, wh(e), mg(e)) : i.change == "macroTask" && (e.hasPendingMacrotasks = i.macroTask));
    },
    onHandleError: (r, o, s, i) => (r.handleError(s, i), e.runOutsideAngular(() => e.onError.emit(i)), !1)
  });
}
function wh(e) {
  e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1;
}
function zv(e) {
  e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null));
}
function Gv(e) {
  e._nesting--, mg(e);
}
class ud {
  constructor() {
    this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ne(), this.onMicrotaskEmpty = new ne(), this.onStable = new ne(), this.onError = new ne();
  }
  run(t, n, r) {
    return t.apply(n, r);
  }
  runGuarded(t, n, r) {
    return t.apply(n, r);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, n, r, o) {
    return t.apply(n, r);
  }
}
function PP(e) {
  return JI(e, "__ignore_ng_zone__");
}
function xP(e) {
  return JI(e, "__scheduler_tick__");
}
function JI(e, t) {
  var n, r;
  return !Array.isArray(e) || e.length !== 1 ? !1 : ((r = (n = e[0]) == null ? void 0 : n.data) == null ? void 0 : r[t]) === !0;
}
function NP(e = "zone.js", t) {
  return e === "noop" ? new ud() : e === "zone.js" ? new oe(t) : e;
}
class Nn {
  constructor() {
    this._console = console;
  }
  handleError(t) {
    const n = this._findOriginalError(t);
    this._console.error("ERROR", t), n && this._console.error("ORIGINAL ERROR", n);
  }
  /** @internal */
  _findOriginalError(t) {
    let n = t && gf(t);
    for (; n && gf(n); )
      n = gf(n);
    return n || null;
  }
}
const XI = new F(typeof ngDevMode > "u" || ngDevMode ? "internal error handler" : "", {
  providedIn: "root",
  factory: () => {
    const e = I(oe), t = I(Nn);
    return (n) => e.runOutsideAngular(() => t.handleError(n));
  }
});
class yg {
  constructor() {
    this.destroyed = !1, this.listeners = null, this.errorHandler = I(Nn, { optional: !0 }), this.destroyRef = I(Kn), this.destroyRef.onDestroy(() => {
      this.destroyed = !0, this.listeners = null;
    });
  }
  subscribe(t) {
    if (this.destroyed)
      throw new v(953, ngDevMode && "Unexpected subscription to destroyed `OutputRef`. The owning directive/component is destroyed.");
    return (this.listeners ?? (this.listeners = [])).push(t), {
      unsubscribe: () => {
        var r, o;
        const n = (r = this.listeners) == null ? void 0 : r.indexOf(t);
        n !== void 0 && n !== -1 && ((o = this.listeners) == null || o.splice(n, 1));
      }
    };
  }
  /** Emits a new value to the output. */
  emit(t) {
    var r;
    if (this.destroyed)
      throw new v(953, ngDevMode && "Unexpected emit for destroyed `OutputRef`. The owning directive/component is destroyed.");
    if (this.listeners === null)
      return;
    const n = U(null);
    try {
      for (const o of this.listeners)
        try {
          o(t);
        } catch (s) {
          (r = this.errorHandler) == null || r.handleError(s);
        }
    } finally {
      U(n);
    }
  }
}
function RP(e) {
  return e.destroyRef;
}
function eb(e) {
  return ngDevMode && pt(eb), new yg();
}
function Wv(e, t) {
  return ngDevMode && pt(vg), CC(e, t);
}
function FP(e) {
  return ngDevMode && pt(vg), CC(Vl, e);
}
const vg = (Wv.required = FP, Wv);
function kP() {
  return Ni(re(), y());
}
function Ni(e, t) {
  return new Rt(Ye(e, t));
}
const uv = class uv {
  constructor(t) {
    this.nativeElement = t;
  }
};
uv.__NG_ELEMENT_ID__ = kP;
let Rt = uv;
function tb(e) {
  return e instanceof Rt ? e.nativeElement : e;
}
function LP() {
  return this._results[Symbol.iterator]();
}
class ld {
  /**
   * Returns `Observable` of `QueryList` notifying the subscriber of changes.
   */
  get changes() {
    return this._changes ?? (this._changes = new ne());
  }
  /**
   * @param emitDistinctChangesOnly Whether `QueryList.changes` should fire only when actual change
   *     has occurred. Or if it should fire when query is recomputed. (recomputing could resolve in
   *     the same result)
   */
  constructor(t = !1) {
    this._emitDistinctChangesOnly = t, this.dirty = !0, this._onDirty = void 0, this._results = [], this._changesDetected = !1, this._changes = void 0, this.length = 0, this.first = void 0, this.last = void 0;
    const n = ld.prototype;
    n[Symbol.iterator] || (n[Symbol.iterator] = LP);
  }
  /**
   * Returns the QueryList entry at `index`.
   */
  get(t) {
    return this._results[t];
  }
  /**
   * See
   * [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
   */
  map(t) {
    return this._results.map(t);
  }
  filter(t) {
    return this._results.filter(t);
  }
  /**
   * See
   * [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
   */
  find(t) {
    return this._results.find(t);
  }
  /**
   * See
   * [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
   */
  reduce(t, n) {
    return this._results.reduce(t, n);
  }
  /**
   * See
   * [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
   */
  forEach(t) {
    this._results.forEach(t);
  }
  /**
   * See
   * [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
   */
  some(t) {
    return this._results.some(t);
  }
  /**
   * Returns a copy of the internal results list as an Array.
   */
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  /**
   * Updates the stored data of the query list, and resets the `dirty` flag to `false`, so that
   * on change detection, it will not notify of changes to the queries, unless a new change
   * occurs.
   *
   * @param resultsTree The query results to store
   * @param identityAccessor Optional function for extracting stable object identity from a value
   *    in the array. This function is executed for each element of the query result list while
   *    comparing current query list with the new one (provided as a first argument of the `reset`
   *    function) to detect if the lists are different. If the function is not provided, elements
   *    are compared as is (without any pre-processing).
   */
  reset(t, n) {
    this.dirty = !1;
    const r = lt(t);
    (this._changesDetected = !XA(this._results, r, n)) && (this._results = r, this.length = r.length, this.last = r[this.length - 1], this.first = r[0]);
  }
  /**
   * Triggers a change event by emitting on the `changes` {@link EventEmitter}.
   */
  notifyOnChanges() {
    this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this);
  }
  /** @internal */
  onDirty(t) {
    this._onDirty = t;
  }
  /** internal */
  setDirty() {
    var t;
    this.dirty = !0, (t = this._onDirty) == null || t.call(this);
  }
  /** internal */
  destroy() {
    this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe());
  }
}
const Za = "ngSkipHydration", jP = "ngskiphydration";
function Dg(e) {
  const t = e.mergedAttrs;
  if (t === null)
    return !1;
  for (let n = 0; n < t.length; n += 2) {
    const r = t[n];
    if (typeof r == "number")
      return !1;
    if (typeof r == "string" && r.toLowerCase() === jP)
      return !0;
  }
  return !1;
}
function nb(e) {
  return e.hasAttribute(Za);
}
function qa(e) {
  return (e.flags & 128) === 128;
}
function Qa(e) {
  if (qa(e))
    return !0;
  let t = e.parent;
  for (; t; ) {
    if (qa(e) || Dg(t))
      return !0;
    t = t.parent;
  }
  return !1;
}
function rb(e) {
  return qa(e) || Dg(e) || Qa(e);
}
const Eg = /* @__PURE__ */ new Map();
let $P = 0;
function BP() {
  return $P++;
}
function HP(e) {
  ngDevMode && ie(e[co], "LView must have an ID in order to be registered"), Eg.set(e[co], e);
}
function ob(e) {
  return ngDevMode && ie(e, "ID used for LView lookup must be a number"), Eg.get(e) || null;
}
function _h(e) {
  ngDevMode && ie(e[co], "Cannot stop tracking an LView that does not have an ID"), Eg.delete(e[co]);
}
class sb {
  /** Component's parent view data. */
  get lView() {
    return ob(this.lViewId);
  }
  constructor(t, n, r) {
    this.lViewId = t, this.nodeIndex = n, this.native = r;
  }
}
function dt(e) {
  let t = ha(e);
  if (t) {
    if (je(t)) {
      const n = t;
      let r, o, s;
      if (cb(e)) {
        if (r = ub(n, e), r == -1)
          throw new Error("The provided component was not found in the application");
        o = e;
      } else if (UP(e)) {
        if (r = zP(n, e), r == -1)
          throw new Error("The provided directive was not found in the application");
        s = lb(r, n);
      } else if (r = Zv(n, e), r == -1)
        return null;
      const i = X(n[r]), a = ha(i), c = a && !Array.isArray(a) ? a : Mh(n, r, i);
      if (o && c.component === void 0 && (c.component = o, qe(c.component, c)), s && c.directives === void 0) {
        c.directives = s;
        for (let u = 0; u < s.length; u++)
          qe(s[u], c);
      }
      qe(c.native, c), t = c;
    }
  } else {
    const n = e;
    ngDevMode && Un(n);
    let r = n;
    for (; r = r.parentNode; ) {
      const o = ha(r);
      if (o) {
        const s = Array.isArray(o) ? o : o.lView;
        if (!s)
          return null;
        const i = Zv(s, n);
        if (i >= 0) {
          const a = X(s[i]), c = Mh(s, i, a);
          qe(a, c), t = c;
          break;
        }
      }
    }
  }
  return t || null;
}
function Mh(e, t, n) {
  return new sb(e[co], t, n);
}
function ib(e) {
  let t = ha(e), n;
  if (je(t)) {
    const r = t, o = ub(r, e);
    n = bt(o, r);
    const s = Mh(r, o, n[me]);
    s.component = e, qe(e, s), qe(s.native, s);
  } else {
    const r = t, o = r.lView;
    ngDevMode && pn(o), n = bt(r.nodeIndex, o);
  }
  return n;
}
const Sh = "__ngContext__";
function qe(e, t) {
  ngDevMode && b(e, "Target expected"), je(t) ? (e[Sh] = t[co], HP(t)) : e[Sh] = t;
}
function ha(e) {
  ngDevMode && b(e, "Target expected");
  const t = e[Sh];
  return typeof t == "number" ? ob(t) : t || null;
}
function ab(e) {
  const t = ha(e);
  return t ? je(t) ? t : t.lView : null;
}
function cb(e) {
  return e && e.constructor && e.constructor.ɵcmp;
}
function UP(e) {
  return e && e.constructor && e.constructor.ɵdir;
}
function Zv(e, t) {
  const n = e[C];
  for (let r = M; r < n.bindingStartIndex; r++)
    if (X(e[r]) === t)
      return r;
  return -1;
}
function VP(e) {
  if (e.child)
    return e.child;
  if (e.next)
    return e.next;
  for (; e.parent && !e.parent.next; )
    e = e.parent;
  return e.parent && e.parent.next;
}
function ub(e, t) {
  const n = e[C].components;
  if (n)
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      if (bt(o, e)[he] === t)
        return o;
    }
  else if (bt(M, e)[he] === t)
    return M;
  return -1;
}
function zP(e, t) {
  let n = e[C].firstChild;
  for (; n; ) {
    const r = n.directiveStart, o = n.directiveEnd;
    for (let s = r; s < o; s++)
      if (e[s] === t)
        return n.index;
    n = VP(n);
  }
  return -1;
}
function lb(e, t) {
  const n = t[C].data[e];
  if (n.directiveStart === 0)
    return K;
  const r = [];
  for (let o = n.directiveStart; o < n.directiveEnd; o++) {
    const s = t[o];
    cb(s) || r.push(s);
  }
  return r;
}
function GP(e, t) {
  const n = t[C].data[e], { directiveStart: r, componentOffset: o } = n;
  return o > -1 ? t[r + o] : null;
}
function WP(e, t) {
  const n = e[C].data[t];
  if (n && n.localNames) {
    const r = {};
    let o = n.index + 1;
    for (let s = 0; s < n.localNames.length; s += 2)
      r[n.localNames[s]] = e[o], o++;
    return r;
  }
  return null;
}
function ZP(e) {
  ngDevMode && b(e, "component");
  let t = je(e) ? e : ab(e);
  for (; t && !(t[P] & 512); )
    t = Sn(t);
  return ngDevMode && pn(t), t;
}
function qP(e) {
  const t = ZP(e);
  return ngDevMode && b(t[he], "Root view has no context. Perhaps it is disconnected?"), t[he];
}
function db(e) {
  return hb(e[Ba]);
}
function fb(e) {
  return hb(e[Ut]);
}
function hb(e) {
  for (; e !== null && !ze(e); )
    e = e[Ut];
  return e;
}
function rl(e) {
  ngDevMode && Cg(e);
  const t = dt(e);
  if (t === null)
    return null;
  if (t.component === void 0) {
    const n = t.lView;
    if (n === null)
      return null;
    t.component = GP(t.nodeIndex, n);
  }
  return t.component;
}
function pb(e) {
  Cg(e);
  const t = dt(e), n = t ? t.lView : null;
  return n === null ? null : n[he];
}
function gb(e) {
  const t = dt(e);
  let n = t ? t.lView : null;
  if (n === null)
    return null;
  let r;
  for (; n[C].type === 2 && (r = Sn(n)); )
    n = r;
  return n[P] & 512 ? null : n[he];
}
function mb(e) {
  const t = ab(e);
  return t !== null ? [qP(t)] : [];
}
function yb(e) {
  const t = dt(e), n = t ? t.lView : null;
  if (n === null)
    return $e.NULL;
  const r = n[C].data[t.nodeIndex];
  return new Ce(r, n);
}
function QP(e) {
  const t = dt(e), n = t ? t.lView : null;
  if (n === null)
    return [];
  const r = n[C], o = r.data[t.nodeIndex], s = [], i = o.providerIndexes & 1048575, a = o.directiveEnd;
  for (let c = i; c < a; c++) {
    let u = r.data[c];
    XP(u) && (u = u.type), s.push(u);
  }
  return s;
}
function vb(e) {
  if (e instanceof Text)
    return [];
  const t = dt(e), n = t ? t.lView : null;
  if (n === null)
    return [];
  const r = n[C], o = t.nodeIndex;
  return r != null && r.data[o] ? (t.directives === void 0 && (t.directives = lb(o, n)), t.directives === null ? [] : [...t.directives]) : [];
}
function YP(e) {
  const { constructor: t } = e;
  if (!t)
    throw new Error("Unable to find the instance constructor");
  const n = q(t);
  if (n)
    return {
      inputs: qv(n.inputs),
      outputs: n.outputs,
      encapsulation: n.encapsulation,
      changeDetection: n.onPush ? V.OnPush : V.Default
    };
  const r = Be(t);
  return r ? { inputs: qv(r.inputs), outputs: r.outputs } : null;
}
function KP(e) {
  const t = dt(e);
  if (t === null)
    return {};
  if (t.localRefs === void 0) {
    const n = t.lView;
    if (n === null)
      return {};
    t.localRefs = WP(n, t.nodeIndex);
  }
  return t.localRefs || {};
}
function Db(e) {
  return dt(e).native;
}
function Eb(e) {
  ngDevMode && Cg(e);
  const t = dt(e), n = t === null ? null : t.lView;
  if (n === null)
    return [];
  const r = n[C], o = n[zn], s = r.cleanup, i = [];
  if (s && o)
    for (let a = 0; a < s.length; ) {
      const c = s[a++], u = s[a++];
      if (typeof c == "string") {
        const l = c, d = X(n[u]), f = o[s[a++]], h = s[a++], p = typeof h == "boolean" || h >= 0 ? "dom" : "output", g = typeof h == "boolean" ? h : !1;
        e == d && i.push({ element: e, name: l, callback: f, useCapture: g, type: p });
      }
    }
  return i.sort(JP), i;
}
function JP(e, t) {
  return e.name == t.name ? 0 : e.name < t.name ? -1 : 1;
}
function XP(e) {
  return e.type !== void 0 && e.declaredInputs !== void 0 && e.findHostDirectiveDefs !== void 0;
}
function Cg(e) {
  if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element");
}
function qv(e) {
  const t = {};
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const r = e[n];
    if (r === void 0)
      continue;
    let o;
    Array.isArray(r) ? o = r[0] : o = r, t[n] = o;
  }
  return t;
}
let Th;
function ex(e) {
  Th = e;
}
function Jn() {
  if (Th !== void 0)
    return Th;
  if (typeof document < "u")
    return document;
  throw new v(210, (typeof ngDevMode > "u" || ngDevMode) && "The document object is not available in this context. Make sure the DOCUMENT injection token is provided.");
}
const dd = new F(ngDevMode ? "AppId" : "", {
  providedIn: "root",
  factory: () => tx
}), tx = "ng", Cb = new F(ngDevMode ? "Platform Initializer" : ""), Er = new F(ngDevMode ? "Platform ID" : "", {
  providedIn: "platform",
  factory: () => "unknown"
  // set a default platform name, when none set explicitly
}), nx = new F(ngDevMode ? "Application Packages Root URL" : ""), rx = new F(ngDevMode ? "AnimationModuleType" : ""), ox = new F(ngDevMode ? "CSP nonce" : "", {
  providedIn: "root",
  factory: () => {
    var e, t;
    return ((t = (e = Jn().body) == null ? void 0 : e.querySelector("[ngCspNonce]")) == null ? void 0 : t.getAttribute("ngCspNonce")) || null;
  }
}), Ig = {
  breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  placeholderResolution: 30,
  disableImageSizeWarning: !1,
  disableImageLazyLoadWarning: !1
}, bg = new F(ngDevMode ? "ImageConfig" : "", {
  providedIn: "root",
  factory: () => Ig
});
function sx(e) {
  return e;
}
function ix() {
  const e = new ho();
  return I(Er) === "browser" && (e.store = ax(Jn(), I(dd))), e;
}
const Fl = class Fl {
  constructor() {
    this.store = {}, this.onSerializeCallbacks = {};
  }
  /**
   * Get the value corresponding to a key. Return `defaultValue` if key is not found.
   */
  get(t, n) {
    return this.store[t] !== void 0 ? this.store[t] : n;
  }
  /**
   * Set the value corresponding to a key.
   */
  set(t, n) {
    this.store[t] = n;
  }
  /**
   * Remove a key from the store.
   */
  remove(t) {
    delete this.store[t];
  }
  /**
   * Test whether a key exists in the store.
   */
  hasKey(t) {
    return this.store.hasOwnProperty(t);
  }
  /**
   * Indicates whether the state is empty.
   */
  get isEmpty() {
    return Object.keys(this.store).length === 0;
  }
  /**
   * Register a callback to provide the value for a key when `toJson` is called.
   */
  onSerialize(t, n) {
    this.onSerializeCallbacks[t] = n;
  }
  /**
   * Serialize the current state of the store to JSON.
   */
  toJson() {
    for (const t in this.onSerializeCallbacks)
      if (this.onSerializeCallbacks.hasOwnProperty(t))
        try {
          this.store[t] = this.onSerializeCallbacks[t]();
        } catch (n) {
          console.warn("Exception in onSerialize callback: ", n);
        }
    return JSON.stringify(this.store).replace(/</g, "\\u003C");
  }
};
Fl.ɵprov = se({
  token: Fl,
  providedIn: "root",
  factory: ix
});
let ho = Fl;
function ax(e, t) {
  const n = e.getElementById(t + "-state");
  if (n != null && n.textContent)
    try {
      return JSON.parse(n.textContent);
    } catch (r) {
      console.warn("Exception while restoring TransferState for app " + t, r);
    }
  return {};
}
const wg = "h", _g = "b";
var po;
(function(e) {
  e.FirstChild = "f", e.NextSibling = "n";
})(po || (po = {}));
const Jo = "e", ia = "t", to = "c", Xo = "x", ks = "r", Ah = "i", es = "n", wr = "d", aa = "l", cx = "__nghData__", Mg = cx, pa = "ngh", Ib = "nghm";
let bb = () => null;
function ux(e, t, n = !1) {
  let r = e.getAttribute(pa);
  if (r == null)
    return null;
  const [o, s] = r.split("|");
  if (r = n ? s : o, !r)
    return null;
  const i = s ? `|${s}` : "", a = n ? o : i;
  let c = {};
  if (r !== "") {
    const l = t.get(ho, null, { optional: !0 });
    l !== null && (c = l.get(Mg, [])[Number(r)], ngDevMode && b(c, "Unable to retrieve hydration info from the TransferState."));
  }
  const u = {
    data: c,
    firstChild: e.firstChild ?? null
  };
  return n && (u.firstChild = e, fd(u, 0, e.nextSibling)), a ? e.setAttribute(pa, a) : e.removeAttribute(pa), ngDevMode && ko(
    e,
    /* checkIfAlreadyClaimed */
    !1
  ), ngDevMode && ngDevMode.hydratedComponents++, u;
}
function lx() {
  bb = ux;
}
function Sg(e, t, n = !1) {
  return bb(e, t, n);
}
function wb(e) {
  let t = e._lView;
  return t[C].type === 2 ? null : (Va(t) && (t = t[M]), t);
}
function dx(e) {
  var t;
  return (t = e.textContent) == null ? void 0 : t.replace(/\s/gm, "");
}
function fx(e) {
  const t = Jn(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, {
    acceptNode(s) {
      const i = dx(s);
      return i === "ngetn" || i === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  let r;
  const o = [];
  for (; r = n.nextNode(); )
    o.push(r);
  for (const s of o)
    s.textContent === "ngetn" ? s.replaceWith(t.createTextNode("")) : s.remove();
}
var Ls;
(function(e) {
  e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched";
})(Ls || (Ls = {}));
const _b = "__ngDebugHydrationInfo__";
function Tg(e, t) {
  e[_b] = t;
}
function Mb(e) {
  return e[_b] ?? null;
}
function ko(e, t = !0) {
  if (!ngDevMode)
    throw new Error("Calling `markRNodeAsClaimedByHydration` in prod mode is not supported and likely a mistake.");
  if (t && px(e))
    throw new Error("Trying to claim a node, which was claimed already.");
  Tg(e, { status: Ls.Hydrated }), ngDevMode.hydratedNodes++;
}
function hx(e) {
  if (!ngDevMode)
    throw new Error("Calling `markRNodeAsSkippedByHydration` in prod mode is not supported and likely a mistake.");
  Tg(e, { status: Ls.Skipped }), ngDevMode.componentsSkippedHydration++;
}
function Ya(e, t = null, n = null) {
  if (!ngDevMode)
    throw new Error("Calling `markRNodeAsMismatchedByHydration` in prod mode is not supported and likely a mistake.");
  for (; e && !rl(e); )
    e = e == null ? void 0 : e.parentNode;
  e && Tg(e, {
    status: Ls.Mismatched,
    expectedNodeDetails: t,
    actualNodeDetails: n
  });
}
function px(e) {
  var t;
  return ((t = Mb(e)) == null ? void 0 : t.status) === Ls.Hydrated;
}
function fd(e, t, n) {
  e.segmentHeads ?? (e.segmentHeads = {}), e.segmentHeads[t] = n;
}
function Oh(e, t) {
  var n;
  return ((n = e.segmentHeads) == null ? void 0 : n[t]) ?? null;
}
function Sb(e, t) {
  var o, s;
  const n = e.data;
  let r = ((o = n[Jo]) == null ? void 0 : o[t]) ?? null;
  return r === null && ((s = n[to]) != null && s[t]) && (r = Ag(e, t)), r;
}
function gx(e, t) {
  var n;
  return ((n = e.data[Jo]) == null ? void 0 : n[t]) !== void 0;
}
function Tb(e, t) {
  var n;
  return ((n = e.data[to]) == null ? void 0 : n[t]) ?? null;
}
function Ag(e, t) {
  const n = Tb(e, t) ?? [];
  let r = 0;
  for (let o of n)
    r += o[ks] * (o[Xo] ?? 1);
  return r;
}
function Ab(e) {
  if (typeof e.disconnectedNodes > "u") {
    const t = e.data[wr];
    e.disconnectedNodes = t ? new Set(t) : null;
  }
  return e.disconnectedNodes;
}
function Lo(e, t) {
  var n;
  if (typeof e.disconnectedNodes > "u") {
    const r = e.data[wr];
    e.disconnectedNodes = r ? new Set(r) : null;
  }
  return !!((n = Ab(e)) != null && n.has(t));
}
function Ob(e, t) {
  var o;
  const n = t, r = e.corruptedTextNodes;
  n.textContent === "" ? r.set(
    n,
    "ngetn"
    /* TextNodeMarker.EmptyNode */
  ) : ((o = n.nextSibling) == null ? void 0 : o.nodeType) === Node.TEXT_NODE && r.set(
    n,
    "ngtns"
    /* TextNodeMarker.Separator */
  );
}
const ca = new F(typeof ngDevMode > "u" || ngDevMode ? "IS_HYDRATION_DOM_REUSE_ENABLED" : ""), Pb = !1, xb = new F(typeof ngDevMode > "u" || ngDevMode ? "PRESERVE_HOST_CONTENT" : "", {
  providedIn: "root",
  factory: () => Pb
}), Nb = new F(typeof ngDevMode > "u" || ngDevMode ? "IS_I18N_HYDRATION_ENABLED" : ""), Og = new F(typeof ngDevMode > "u" || ngDevMode ? "IS_EVENT_REPLAY_ENABLED" : ""), Rb = !1;
let uu;
function Fb() {
  if (uu === void 0 && (uu = null, Ae.trustedTypes))
    try {
      uu = Ae.trustedTypes.createPolicy("angular", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e
      });
    } catch {
    }
  return uu;
}
function Ri(e) {
  var t;
  return ((t = Fb()) == null ? void 0 : t.createHTML(e)) || e;
}
function mx(e) {
  var t;
  return ((t = Fb()) == null ? void 0 : t.createScriptURL(e)) || e;
}
let lu;
function Pg() {
  if (lu === void 0 && (lu = null, Ae.trustedTypes))
    try {
      lu = Ae.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e
      });
    } catch {
    }
  return lu;
}
function Qv(e) {
  var t;
  return ((t = Pg()) == null ? void 0 : t.createHTML(e)) || e;
}
function Yv(e) {
  var t;
  return ((t = Pg()) == null ? void 0 : t.createScript(e)) || e;
}
function Kv(e) {
  var t;
  return ((t = Pg()) == null ? void 0 : t.createScriptURL(e)) || e;
}
class jo {
  constructor(t) {
    this.changingThisBreaksApplicationSecurity = t;
  }
  toString() {
    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${xo})`;
  }
}
class yx extends jo {
  getTypeName() {
    return "HTML";
  }
}
class vx extends jo {
  getTypeName() {
    return "Style";
  }
}
class Dx extends jo {
  getTypeName() {
    return "Script";
  }
}
class Ex extends jo {
  getTypeName() {
    return "URL";
  }
}
class Cx extends jo {
  getTypeName() {
    return "ResourceURL";
  }
}
function mn(e) {
  return e instanceof jo ? e.changingThisBreaksApplicationSecurity : e;
}
function Fi(e, t) {
  const n = kb(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
      return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${xo})`);
  }
  return n === t;
}
function kb(e) {
  return e instanceof jo && e.getTypeName() || null;
}
function Ix(e) {
  return new yx(e);
}
function bx(e) {
  return new vx(e);
}
function wx(e) {
  return new Dx(e);
}
function _x(e) {
  return new Ex(e);
}
function Mx(e) {
  return new Cx(e);
}
function Lb(e) {
  const t = new Tx(e);
  return Ax() ? new Sx(t) : t;
}
class Sx {
  constructor(t) {
    this.inertDocumentHelper = t;
  }
  getInertBodyElement(t) {
    var n;
    t = "<body><remove></remove>" + t;
    try {
      const r = new window.DOMParser().parseFromString(Ri(t), "text/html").body;
      return r === null ? this.inertDocumentHelper.getInertBodyElement(t) : ((n = r.firstChild) == null || n.remove(), r);
    } catch {
      return null;
    }
  }
}
class Tx {
  constructor(t) {
    this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");
  }
  getInertBodyElement(t) {
    const n = this.inertDocument.createElement("template");
    return n.innerHTML = Ri(t), n;
  }
}
function Ax() {
  try {
    return !!new window.DOMParser().parseFromString(Ri(""), "text/html");
  } catch {
    return !1;
  }
}
const Ox = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function hd(e) {
  return e = String(e), e.match(Ox) ? e : ((typeof ngDevMode > "u" || ngDevMode) && console.warn(`WARNING: sanitizing unsafe URL value ${e} (see ${xo})`), "unsafe:" + e);
}
function Rn(e) {
  const t = {};
  for (const n of e.split(","))
    t[n] = !0;
  return t;
}
function Bc(...e) {
  const t = {};
  for (const n of e)
    for (const r in n)
      n.hasOwnProperty(r) && (t[r] = !0);
  return t;
}
const jb = Rn("area,br,col,hr,img,wbr"), $b = Rn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), Bb = Rn("rp,rt"), Px = Bc(Bb, $b), xx = Bc($b, Rn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Nx = Bc(Bb, Rn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Ph = Bc(jb, xx, Nx, Px), xg = Rn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), Rx = Rn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), Fx = Rn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), Hb = Bc(xg, Rx, Fx), kx = Rn("script,style,template");
class Lx {
  constructor() {
    this.sanitizedSomething = !1, this.buf = [];
  }
  sanitizeChildren(t) {
    let n = t.firstChild, r = !0, o = [];
    for (; n; ) {
      if (n.nodeType === Node.ELEMENT_NODE ? r = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, r && n.firstChild) {
        o.push(n), n = Bx(n);
        continue;
      }
      for (; n; ) {
        n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
        let s = $x(n);
        if (s) {
          n = s;
          break;
        }
        n = o.pop();
      }
    }
    return this.buf.join("");
  }
  /**
   * Sanitizes an opening element tag (if valid) and returns whether the element's contents should
   * be traversed. Element content must always be traversed (even if the element itself is not
   * valid/safe), unless the element is one of `SKIP_TRAVERSING_CONTENT_IF_INVALID_ELEMENTS`.
   *
   * @param element The element to sanitize.
   * @return True if the element's contents should be traversed.
   */
  startElement(t) {
    const n = Jv(t).toLowerCase();
    if (!Ph.hasOwnProperty(n))
      return this.sanitizedSomething = !0, !kx.hasOwnProperty(n);
    this.buf.push("<"), this.buf.push(n);
    const r = t.attributes;
    for (let o = 0; o < r.length; o++) {
      const s = r.item(o), i = s.name, a = i.toLowerCase();
      if (!Hb.hasOwnProperty(a)) {
        this.sanitizedSomething = !0;
        continue;
      }
      let c = s.value;
      xg[a] && (c = hd(c)), this.buf.push(" ", i, '="', Xv(c), '"');
    }
    return this.buf.push(">"), !0;
  }
  endElement(t) {
    const n = Jv(t).toLowerCase();
    Ph.hasOwnProperty(n) && !jb.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
  }
  chars(t) {
    this.buf.push(Xv(t));
  }
}
function jx(e, t) {
  return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY;
}
function $x(e) {
  const t = e.nextSibling;
  if (t && e !== t.previousSibling)
    throw Ub(t);
  return t;
}
function Bx(e) {
  const t = e.firstChild;
  if (t && jx(e, t))
    throw Ub(t);
  return t;
}
function Jv(e) {
  const t = e.nodeName;
  return typeof t == "string" ? t : "FORM";
}
function Ub(e) {
  return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);
}
const Hx = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Ux = /([^\#-~ |!])/g;
function Xv(e) {
  return e.replace(/&/g, "&amp;").replace(Hx, function(t) {
    const n = t.charCodeAt(0), r = t.charCodeAt(1);
    return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";";
  }).replace(Ux, function(t) {
    return "&#" + t.charCodeAt(0) + ";";
  }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
let du;
function Vb(e, t) {
  let n = null;
  try {
    du = du || Lb(e);
    let r = t ? String(t) : "";
    n = du.getInertBodyElement(r);
    let o = 5, s = r;
    do {
      if (o === 0)
        throw new Error("Failed to sanitize html because the input is unstable");
      o--, r = s, s = n.innerHTML, n = du.getInertBodyElement(r);
    } while (r !== s);
    const i = new Lx(), a = i.sanitizeChildren(xh(n) || n);
    return (typeof ngDevMode > "u" || ngDevMode) && i.sanitizedSomething && console.warn(`WARNING: sanitizing HTML stripped some content, see ${xo}`), Ri(a);
  } finally {
    if (n) {
      const r = xh(n) || n;
      for (; r.firstChild; )
        r.firstChild.remove();
    }
  }
}
function xh(e) {
  return "content" in e && Vx(e) ? e.content : null;
}
function Vx(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE";
}
var Xn;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL";
})(Xn || (Xn = {}));
function zb(e) {
  const t = Hc();
  return t ? Qv(t.sanitize(Xn.HTML, e) || "") : Fi(
    e,
    "HTML"
    /* BypassType.Html */
  ) ? Qv(mn(e)) : Vb(Jn(), H(e));
}
function Gb(e) {
  const t = Hc();
  return t ? t.sanitize(Xn.STYLE, e) || "" : Fi(
    e,
    "Style"
    /* BypassType.Style */
  ) ? mn(e) : H(e);
}
function Ng(e) {
  const t = Hc();
  return t ? t.sanitize(Xn.URL, e) || "" : Fi(
    e,
    "URL"
    /* BypassType.Url */
  ) ? mn(e) : hd(H(e));
}
function Rg(e) {
  const t = Hc();
  if (t)
    return Kv(t.sanitize(Xn.RESOURCE_URL, e) || "");
  if (Fi(
    e,
    "ResourceURL"
    /* BypassType.ResourceUrl */
  ))
    return Kv(mn(e));
  throw new v(904, ngDevMode && `unsafe value used in a resource URL context (see ${xo})`);
}
function Wb(e) {
  const t = Hc();
  if (t)
    return Yv(t.sanitize(Xn.SCRIPT, e) || "");
  if (Fi(
    e,
    "Script"
    /* BypassType.Script */
  ))
    return Yv(mn(e));
  throw new v(905, ngDevMode && "unsafe value used in a script context");
}
function Zb(e) {
  if (ngDevMode && (!Array.isArray(e) || !Array.isArray(e.raw) || e.length !== 1))
    throw new Error(`Unexpected interpolation in trusted HTML constant: ${e.join("?")}`);
  return Ri(e[0]);
}
function qb(e) {
  if (ngDevMode && (!Array.isArray(e) || !Array.isArray(e.raw) || e.length !== 1))
    throw new Error(`Unexpected interpolation in trusted URL constant: ${e.join("?")}`);
  return mx(e[0]);
}
function zx(e, t) {
  return t === "src" && (e === "embed" || e === "frame" || e === "iframe" || e === "media" || e === "script") || t === "href" && (e === "base" || e === "link") ? Rg : Ng;
}
function Qb(e, t, n) {
  return zx(t, n)(e);
}
function Gx(e) {
  if (e.toLowerCase().startsWith("on")) {
    const t = `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.`;
    throw new v(306, t);
  }
}
function Wx(e) {
  if (e.toLowerCase().startsWith("on")) {
    const t = `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...`;
    throw new v(306, t);
  }
}
function Hc() {
  const e = y();
  return e && e[Vt].sanitizer;
}
const Zx = /^>|^->|<!--|-->|--!>|<!-$/g, qx = /(<|>)/g, Qx = "​$1​";
function Yb(e) {
  return e.replace(Zx, (t) => t.replace(qx, Qx));
}
function Yx(e) {
  return e = Jx(e.replace(/[$@]/g, "_")), `ng-reflect-${e}`;
}
const Kx = /([A-Z])/g;
function Jx(e) {
  return e.replace(Kx, (...t) => "-" + t[1].toLowerCase());
}
function Xx(e) {
  try {
    return e != null ? e.toString().slice(0, 30) : e;
  } catch {
    return "[ERROR] Exception while trying to serialize the value";
  }
}
const Kb = {
  name: "custom-elements"
}, Jb = {
  name: "no-errors-schema"
};
let Fg = !1;
function eN(e) {
  Fg = e;
}
function tN() {
  return Fg;
}
let kg = !1;
function nN(e) {
  kg = e;
}
function rN() {
  return kg;
}
function oN(e, t, n, r, o) {
  if (r !== null && !o && n !== null && // Note that we can't check for `typeof HTMLUnknownElement === 'function'` because
  // Domino doesn't expose HTMLUnknownElement globally.
  (typeof HTMLUnknownElement < "u" && HTMLUnknownElement && e instanceof HTMLUnknownElement || typeof customElements < "u" && n.indexOf("-") > -1 && !customElements.get(n)) && !Lg(r, n)) {
    const i = gd(t), a = md(t), c = `'${i ? "@Component" : "@NgModule"}.schemas'`;
    let u = `'${n}' is not a known element${a}:
`;
    if (u += `1. If '${n}' is an Angular component, then verify that it is ${i ? "included in the '@Component.imports' of this component" : "a part of an @NgModule where this component is declared"}.
`, n && n.indexOf("-") > -1 ? u += `2. If '${n}' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the ${c} of this component to suppress this message.` : u += `2. To allow any element add 'NO_ERRORS_SCHEMA' to the ${c} of this component.`, Fg)
      throw new v(304, u);
    console.error(fe(304, u));
  }
}
function sN(e, t, n, r) {
  return r === null || Lg(r, n) || t in e || NC(t) ? !0 : typeof Node > "u" || Node === null || !(e instanceof Node);
}
function eD(e, t, n, r) {
  !t && n === 4 && (t = "ng-template");
  const o = gd(r), s = md(r);
  let i = `Can't bind to '${e}' since it isn't a known property of '${t}'${s}.`;
  const a = `'${o ? "@Component" : "@NgModule"}.schemas'`, c = o ? "included in the '@Component.imports' of this component" : "a part of an @NgModule where this component is declared";
  if (tD.has(e)) {
    const u = tD.get(e);
    i += `
If the '${e}' is an Angular control flow directive, please make sure that either the '${u}' directive or the 'CommonModule' is ${c}.`;
  } else
    i += `
1. If '${t}' is an Angular component and it has the '${e}' input, then verify that it is ${c}.`, t && t.indexOf("-") > -1 ? (i += `
2. If '${t}' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the ${a} of this component to suppress this message.`, i += `
3. To allow any property add 'NO_ERRORS_SCHEMA' to the ${a} of this component.`) : i += `
2. To allow any property add 'NO_ERRORS_SCHEMA' to the ${a} of this component.`;
  Xb(i);
}
function Xb(e) {
  if (kg)
    throw new v(303, e);
  console.error(fe(303, e));
}
function pd(e) {
  !ngDevMode && A("Must never be called in production mode");
  const n = e[De][he];
  return n && n.constructor ? q(n.constructor) : null;
}
function gd(e) {
  !ngDevMode && A("Must never be called in production mode");
  const t = pd(e);
  return !!(t != null && t.standalone);
}
function md(e) {
  var r;
  !ngDevMode && A("Must never be called in production mode");
  const t = pd(e), n = (r = t == null ? void 0 : t.type) == null ? void 0 : r.name;
  return n ? ` (used in the '${n}' component template)` : "";
}
const tD = /* @__PURE__ */ new Map([
  ["ngIf", "NgIf"],
  ["ngFor", "NgFor"],
  ["ngSwitchCase", "NgSwitchCase"],
  ["ngSwitchDefault", "NgSwitchDefault"]
]);
function Lg(e, t) {
  if (e !== null)
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (r === Jb || r === Kb && t && t.indexOf("-") > -1)
        return !0;
    }
  return !1;
}
function e0(e) {
  return e.ownerDocument.defaultView;
}
function t0(e) {
  return e.ownerDocument;
}
function jg(e) {
  return e.ownerDocument.body;
}
const js = "�";
function on(e) {
  return e instanceof Function ? e() : e;
}
function Dt(e) {
  return (e ?? I($e)).get(Er) === "browser";
}
const nD = 200;
function iN(e) {
  if (n0(e), !q(e).standalone)
    throw new v(907, `The ${W(e)} component is not marked as standalone, but Angular expects to have a standalone component here. Please make sure the ${W(e)} component has the \`standalone: true\` flag in the decorator.`);
}
function n0(e) {
  if (!q(e))
    throw new v(906, `The ${W(e)} is not an Angular component, make sure it has the \`@Component\` decorator.`);
}
function aN(e, t, n) {
  throw new v(-300, `Multiple components match node with tagname ${e.value}: ${W(t)} and ${W(n)}`);
}
function cN(e, t, n, r, o) {
  var u;
  const s = pd(o), i = (u = s == null ? void 0 : s.type) == null ? void 0 : u.name;
  let c = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value${r ? ` for '${r}'` : ""}: '${rD(t)}'. Current value: '${rD(n)}'.${i ? ` Expression location: ${i} component` : ""}`;
  throw e && (c += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook?"), new v(-100, c);
}
function rD(e) {
  let t = String(e);
  try {
    (Array.isArray(e) || t === "[object Object]") && (t = JSON.stringify(e));
  } catch {
  }
  return t.length > nD ? t.substring(0, nD) + "…" : t;
}
function oD(e, t, n, r, o) {
  const [s, i, ...a] = r.split(js);
  let c = i, u = i;
  for (let l = 0; l < a.length; l++) {
    const d = t + l;
    c += `${e[d]}${a[l]}`, u += `${d === n ? o : e[d]}${a[l]}`;
  }
  return { propName: s, oldValue: c, newValue: u };
}
function uN(e, t, n, r) {
  const o = e[C].data, s = o[t];
  if (typeof s == "string")
    return s.indexOf(js) > -1 ? oD(e, t, t, s, r) : { propName: s, oldValue: n, newValue: r };
  if (s === null) {
    let i = t - 1;
    for (; typeof o[i] != "string" && o[i + 1] === null; )
      i--;
    const a = o[i];
    if (typeof a == "string") {
      const c = a.match(new RegExp(js, "g"));
      if (c && c.length - 1 > t - i)
        return oD(e, i, t, a, r);
    }
  }
  return { propName: void 0, oldValue: n, newValue: r };
}
var $s;
(function(e) {
  e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase";
})($s || ($s = {}));
let Nh;
function $g(e, t) {
  return Nh(e, t);
}
function lN(e) {
  Nh === void 0 && (Nh = e());
}
function ts(e, t, n, r, o) {
  if (r != null) {
    let s, i = !1;
    ze(r) ? s = r : je(r) && (i = !0, ngDevMode && b(r[me], "HOST must be defined for a component LView"), r = r[me]);
    const a = X(r);
    e === 0 && n !== null ? o == null ? u0(t, n, a) : go(t, n, a, o || null, !0) : e === 1 && n !== null ? go(t, n, a, o || null, !0) : e === 2 ? Uc(t, a, i) : e === 3 && (ngDevMode && ngDevMode.rendererDestroyNode++, t.destroyNode(a)), s != null && yN(t, e, s, n, o);
  }
}
function Bg(e, t) {
  return ngDevMode && ngDevMode.rendererCreateTextNode++, ngDevMode && ngDevMode.rendererSetText++, e.createText(t);
}
function r0(e, t, n) {
  ngDevMode && ngDevMode.rendererSetText++, e.setValue(t, n);
}
function Hg(e, t) {
  return ngDevMode && ngDevMode.rendererCreateComment++, e.createComment(Yb(t));
}
function yd(e, t, n) {
  return ngDevMode && ngDevMode.rendererCreateElement++, e.createElement(t, n);
}
function dN(e, t) {
  o0(e, t), t[me] = null, t[Ve] = null;
}
function fN(e, t, n, r, o, s) {
  r[me] = o, r[Ve] = t, Ed(e, r, n, 1, o, s);
}
function o0(e, t) {
  var n;
  (n = t[Vt].changeDetectionScheduler) == null || n.notify(9), Ed(e, t, t[L], 2, null, null);
}
function hN(e) {
  let t = e[Ba];
  if (!t)
    return mf(e[C], e);
  for (; t; ) {
    let n = null;
    if (je(t))
      n = t[Ba];
    else {
      ngDevMode && jt(t);
      const r = t[ve];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[Ut] && t !== e; )
        je(t) && mf(t[C], t), t = t[Ne];
      t === null && (t = e), je(t) && mf(t[C], t), n = t && t[Ut];
    }
    t = n;
  }
}
function pN(e, t, n, r) {
  ngDevMode && pn(t), ngDevMode && jt(n);
  const o = ve + r, s = n.length;
  r > 0 && (n[o - 1][Ut] = t), r < s - ve ? (t[Ut] = n[o], OC(n, ve + r, t)) : (n.push(t), t[Ut] = null), t[Ne] = n;
  const i = t[ao];
  i !== null && n !== i && s0(i, t);
  const a = t[Ct];
  a !== null && a.insertView(e), mh(t), t[P] |= 128;
}
function s0(e, t) {
  ngDevMode && b(t, "LView required"), ngDevMode && jt(e);
  const n = e[uo], r = t[Ne];
  if (ngDevMode && b(r, "missing parent"), je(r))
    e[P] |= Ua.HasTransplantedViews;
  else {
    const o = r[Ne][De];
    ngDevMode && b(o, "Missing insertedComponentLView");
    const s = t[De];
    ngDevMode && b(s, "Missing declaredComponentLView"), s !== o && (e[P] |= Ua.HasTransplantedViews);
  }
  n === null ? e[uo] = [t] : n.push(t);
}
function Ug(e, t) {
  ngDevMode && jt(e), ngDevMode && b(e[uo], "A projected view should belong to a non-empty projected views collection");
  const n = e[uo], r = n.indexOf(t);
  n.splice(r, 1);
}
function Ka(e, t) {
  if (e.length <= ve)
    return;
  const n = ve + t, r = e[n];
  if (r) {
    const o = r[ao];
    o !== null && o !== e && Ug(o, r), t > 0 && (e[n - 1][Ut] = r[Ut]);
    const s = qu(e, ve + t);
    dN(r[C], r);
    const i = s[Ct];
    i !== null && i.detachView(s[C]), r[Ne] = null, r[Ut] = null, r[P] &= -129;
  }
  return r;
}
function vd(e, t) {
  if (!(t[P] & 256)) {
    const n = t[L];
    n.destroyNode && Ed(e, t, n, 3, null, null), hN(t);
  }
}
function mf(e, t) {
  if (t[P] & 256)
    return;
  const n = U(null);
  try {
    t[P] &= -129, t[P] |= 256, t[At] && Tp(t[At]), a0(e, t), i0(e, t), t[C].type === 1 && (ngDevMode && ngDevMode.rendererDestroy++, t[L].destroy());
    const r = t[ao];
    if (r !== null && ze(t[Ne])) {
      r !== t[Ne] && Ug(r, t);
      const o = t[Ct];
      o !== null && o.detachView(e);
    }
    _h(t);
  } finally {
    U(n);
  }
}
function i0(e, t) {
  ngDevMode && Lp(i0.name);
  const n = e.cleanup, r = t[zn];
  if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
      if (typeof n[s] == "string") {
        const i = n[s + 3];
        ngDevMode && ie(i, "cleanup target must be a number"), i >= 0 ? r[i]() : r[-i].unsubscribe(), s += 2;
      } else {
        const i = r[n[s + 1]];
        n[s].call(i);
      }
  r !== null && (t[zn] = null);
  const o = t[Gn];
  if (o !== null) {
    t[Gn] = null;
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      ngDevMode && IC(i, "Expecting destroy hook to be a function."), i();
    }
  }
}
function a0(e, t) {
  ngDevMode && Lp(a0.name);
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      const o = t[n[r]];
      if (!(o instanceof $c)) {
        const s = n[r + 1];
        if (Array.isArray(s))
          for (let i = 0; i < s.length; i += 2) {
            const a = o[s[i]], c = s[i + 1];
            nn(4, a, c);
            try {
              c.call(a);
            } finally {
              nn(5, a, c);
            }
          }
        else {
          nn(4, o, s);
          try {
            s.call(o);
          } finally {
            nn(5, o, s);
          }
        }
      }
    }
}
function Vg(e, t, n) {
  return c0(e, t.parent, n);
}
function c0(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; )
    t = r, r = t.parent;
  if (r === null)
    return n[me];
  {
    ngDevMode && Qe(
      r,
      7
      /* TNodeType.Container */
    );
    const { componentOffset: o } = r;
    if (o > -1) {
      ngDevMode && ot(r, n);
      const { encapsulation: s } = e.data[r.directiveStart + o];
      if (s === _n.None || s === _n.Emulated)
        return null;
    }
    return Ye(r, n);
  }
}
function go(e, t, n, r, o) {
  ngDevMode && ngDevMode.rendererInsertBefore++, e.insertBefore(t, n, r, o);
}
function u0(e, t, n) {
  ngDevMode && ngDevMode.rendererAppendChild++, ngDevMode && b(t, "parent node must be defined"), e.appendChild(t, n);
}
function sD(e, t, n, r, o) {
  r !== null ? go(e, t, n, r, o) : u0(e, t, n);
}
function zg(e, t) {
  return e.parentNode(t);
}
function gN(e, t) {
  return e.nextSibling(t);
}
function l0(e, t, n) {
  return f0(e, t, n);
}
function d0(e, t, n) {
  return e.type & 40 ? Ye(e, n) : null;
}
let f0 = d0, Rh;
function h0(e, t) {
  f0 = e, Rh = t;
}
function Dd(e, t, n, r) {
  const o = Vg(e, r, t), s = t[L], i = r.parent || t[Ve], a = l0(i, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let c = 0; c < n.length; c++)
        sD(s, o, n[c], a, !1);
    else
      sD(s, o, n, a, !1);
  Rh !== void 0 && Rh(s, r, t, n, o);
}
function no(e, t) {
  if (t !== null) {
    ngDevMode && Qe(
      t,
      191
      /* TNodeType.LetDeclaration */
    );
    const n = t.type;
    if (n & 3)
      return Ye(t, e);
    if (n & 4)
      return Fh(-1, e[t.index]);
    if (n & 8) {
      const r = t.child;
      if (r !== null)
        return no(e, r);
      {
        const o = e[t.index];
        return ze(o) ? Fh(-1, o) : X(o);
      }
    } else {
      if (n & 128)
        return no(e, t.next);
      if (n & 32)
        return $g(t, e)() || X(e[t.index]);
      {
        const r = p0(e, t);
        if (r !== null) {
          if (Array.isArray(r))
            return r[0];
          const o = Sn(e[De]);
          return ngDevMode && nI(o), no(o, r);
        } else
          return no(e, t.next);
      }
    }
  }
  return null;
}
function p0(e, t) {
  if (t !== null) {
    const r = e[De][Ve], o = t.projection;
    return ngDevMode && xO(e), r.projection[o];
  }
  return null;
}
function Fh(e, t) {
  const n = ve + e + 1;
  if (n < t.length) {
    const r = t[n], o = r[C].firstChild;
    if (o !== null)
      return no(r, o);
  }
  return t[cn];
}
function Uc(e, t, n) {
  ngDevMode && ngDevMode.rendererRemoveNode++, e.removeChild(null, t, n);
}
function g0(e) {
  e.textContent = "";
}
function Gg(e, t, n, r, o, s, i) {
  for (; n != null; ) {
    if (ngDevMode && ot(n, r), n.type === 128) {
      n = n.next;
      continue;
    }
    ngDevMode && Qe(
      n,
      63
      /* TNodeType.Icu */
    );
    const a = r[n.index], c = n.type;
    if (i && t === 0 && (a && qe(X(a), r), n.flags |= 2), (n.flags & 32) !== 32)
      if (c & 8)
        Gg(e, t, n.child, r, o, s, !1), ts(t, e, o, a, s);
      else if (c & 32) {
        const u = $g(n, r);
        let l;
        for (; l = u(); )
          ts(t, e, o, l, s);
        ts(t, e, o, a, s);
      } else c & 16 ? m0(e, t, r, n, o, s) : (ngDevMode && Qe(
        n,
        7
        /* TNodeType.Container */
      ), ts(t, e, o, a, s));
    n = i ? n.projectionNext : n.next;
  }
}
function Ed(e, t, n, r, o, s) {
  Gg(n, r, e.firstChild, t, o, s, !1);
}
function mN(e, t, n) {
  const r = t[L], o = Vg(e, n, t), s = n.parent || t[Ve];
  let i = l0(s, n, t);
  m0(r, 0, t, n, o, i);
}
function m0(e, t, n, r, o, s) {
  const i = n[De], a = i[Ve];
  ngDevMode && O(typeof r.projection, "number", "expecting projection index");
  const c = a.projection[r.projection];
  if (Array.isArray(c))
    for (let u = 0; u < c.length; u++) {
      const l = c[u];
      ts(t, e, o, l, s);
    }
  else {
    let u = c;
    const l = i[Ne];
    qa(r) && (u.flags |= 128), Gg(e, t, u, l, o, s, !0);
  }
}
function yN(e, t, n, r, o) {
  ngDevMode && jt(n);
  const s = n[cn], i = X(n);
  s !== i && ts(t, e, r, s, o);
  for (let a = ve; a < n.length; a++) {
    const c = n[a];
    Ed(c[C], c, e, t, r, s);
  }
}
function vN(e, t, n, r, o) {
  if (t)
    o ? (ngDevMode && ngDevMode.rendererAddClass++, e.addClass(n, r)) : (ngDevMode && ngDevMode.rendererRemoveClass++, e.removeClass(n, r));
  else {
    let s = r.indexOf("-") === -1 ? void 0 : $s.DashCase;
    o == null ? (ngDevMode && ngDevMode.rendererRemoveStyle++, e.removeStyle(n, r, s)) : (typeof o == "string" && o.endsWith("!important") && (o = o.slice(0, -10), s |= $s.Important), ngDevMode && ngDevMode.rendererSetStyle++, e.setStyle(n, r, o, s));
  }
}
function DN(e, t, n) {
  ngDevMode && Mi(n, "'newValue' should be a string"), e.setAttribute(t, "style", n), ngDevMode && ngDevMode.rendererSetStyle++;
}
function y0(e, t, n) {
  ngDevMode && Mi(n, "'newValue' should be a string"), n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n), ngDevMode && ngDevMode.rendererSetClassName++;
}
function v0(e, t, n) {
  const { mergedAttrs: r, classes: o, styles: s } = n;
  r !== null && dh(e, t, r), o !== null && y0(e, t, o), s !== null && DN(e, t, s);
}
const x = typeof ngDevMode > "u" || ngDevMode ? { __brand__: "NO_CHANGE" } : {};
function D0(e = 1) {
  ngDevMode && vr(e, 0, "Can only advance forward"), E0(k(), y(), Ge() + e, !!ngDevMode && Fo());
}
function E0(e, t, n, r) {
  if (ngDevMode && Rc(t[C], n), !r)
    if ((t[P] & 3) === 3) {
      const s = e.preOrderCheckHooks;
      s !== null && xu(t, s, n);
    } else {
      const s = e.preOrderHooks;
      s !== null && Nu(t, s, 0, n);
    }
  lo(n);
}
function $o(e, t = Z.Default) {
  const n = y();
  if (n === null)
    return ngDevMode && VA($o), He(e, t);
  const r = re(), o = VI(r, n, $(e), t);
  return ngDevMode && MC(e, o, t), o;
}
function C0() {
  const e = ngDevMode ? "This constructor was not compatible with Dependency Injection." : "invalid";
  throw new Error(e);
}
function I0(e, t, n, r, o, s) {
  const i = U(null);
  try {
    let a = null;
    o & Mn.SignalBased && (a = t[r][ft]), a !== null && a.transformFn !== void 0 && (s = a.transformFn(s)), o & Mn.HasDecoratorInputTransform && (s = e.inputTransforms[r].call(t, s)), e.setInput !== null ? e.setInput(t, a, s, n, r) : iI(t, a, r, s);
  } finally {
    U(i);
  }
}
function EN(e, t) {
  const n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        const o = n[r];
        if (o < 0)
          lo(~o);
        else {
          const s = o, i = n[++r], a = n[++r];
          WO(i, s);
          const c = t[s];
          a(2, c);
        }
      }
    } finally {
      lo(-1);
    }
}
function Cd(e, t, n, r, o, s, i, a, c, u, l) {
  const d = t.blueprint.slice();
  return d[me] = o, d[P] = r | 4 | 128 | 8 | 64, (u !== null || e && e[P] & 2048) && (d[P] |= 2048), fI(d), ngDevMode && t.declTNode && e && ot(t.declTNode, e), d[Ne] = d[qn] = e, d[he] = n, d[Vt] = i || e && e[Vt], ngDevMode && b(d[Vt], "LViewEnvironment is required"), d[L] = a || e && e[L], ngDevMode && b(d[L], "Renderer is required"), d[Re] = c || e && e[Re] || null, d[Ve] = s, d[co] = BP(), d[nt] = l, d[KC] = u, ngDevMode && O(t.type == 2 ? e !== null : !0, !0, "Embedded views must have parentLView"), d[De] = t.type == 2 ? e[De] : d, d;
}
function Bo(e, t, n, r, o) {
  ngDevMode && t !== 0 && // 0 are bogus nodes and they are OK. See `createContainerRef` in
  // `view_engine_compatibility` for additional context.
  Pn(t, M, "TNodes can't be in the LView header."), ngDevMode && rP(n);
  let s = e.data[t];
  if (s === null)
    s = Wg(e, t, n, r, o), GO() && (s.flags |= 32);
  else if (s.type & 64) {
    s.type = n, s.value = r, s.attrs = o;
    const i = za();
    s.injectorIndex = i === null ? -1 : i.injectorIndex, ngDevMode && Oi(s, e), ngDevMode && O(t, s.index, "Expecting same index");
  }
  return Wt(s, !0), s;
}
function Wg(e, t, n, r, o) {
  const s = CI(), i = sg(), a = i ? s : s && s.parent, c = e.data[t] = SN(e, a, n, t, r, o);
  return e.firstChild === null && (e.firstChild = c), s !== null && (i ? s.child == null && c.parent !== null && (s.child = c) : s.next === null && (s.next = c, c.prev = s)), c;
}
function Vc(e, t, n, r) {
  if (n === 0)
    return -1;
  ngDevMode && (ht(e), bC(e, t[C], "`LView` must be associated with `TView`!"), O(e.data.length, t.length, "Expecting LView to be same size as TView"), O(e.data.length, e.blueprint.length, "Expecting Blueprint to be same size as TView"), Xp(e));
  const o = t.length;
  for (let s = 0; s < n; s++)
    t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function b0(e, t, n, r, o) {
  const s = Ge(), i = r & 2;
  try {
    lo(-1), i && t.length > M && E0(e, t, M, !!ngDevMode && Fo()), nn(i ? 2 : 0, o), n(r, o);
  } finally {
    lo(s), nn(i ? 3 : 1, o);
  }
}
function Zg(e, t, n) {
  if (Jp(t)) {
    const r = U(null);
    try {
      const o = t.directiveStart, s = t.directiveEnd;
      for (let i = o; i < s; i++) {
        const a = e.data[i];
        if (a.contentQueries) {
          const c = n[i];
          ngDevMode && b(i, "Incorrect reference to a directive defining a content query"), a.contentQueries(1, c, i);
        }
      }
    } finally {
      U(r);
    }
  }
}
function qg(e, t, n) {
  mI() && (RN(e, t, n, Ye(n, t)), (n.flags & 64) === 64 && T0(e, t, n));
}
function Qg(e, t, n = Ye) {
  const r = t.localNames;
  if (r !== null) {
    let o = t.index + 1;
    for (let s = 0; s < r.length; s += 2) {
      const i = r[s + 1], a = i === -1 ? n(t, e) : e[i];
      e[o++] = a;
    }
  }
}
function w0(e) {
  const t = e.tView;
  return t === null || t.incompleteFirstPass ? e.tView = Yg(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t;
}
function Yg(e, t, n, r, o, s, i, a, c, u, l) {
  ngDevMode && ngDevMode.tView++;
  const d = M + r, f = d + o, h = CN(d, f), p = typeof u == "function" ? u() : u, g = h[C] = {
    type: e,
    blueprint: h,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: h.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: f,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof s == "function" ? s() : s,
    pipeRegistry: typeof i == "function" ? i() : i,
    firstChild: null,
    schemas: c,
    consts: p,
    incompleteFirstPass: !1,
    ssrId: l
  };
  return ngDevMode && Object.seal(g), g;
}
function CN(e, t) {
  const n = [];
  for (let r = 0; r < t; r++)
    n.push(r < e ? null : x);
  return n;
}
function IN(e, t, n, r) {
  const s = r.get(xb, Pb) || n === _n.ShadowDom, i = e.selectRootElement(t, s);
  return bN(i), i;
}
function bN(e) {
  _0(e);
}
let _0 = () => null;
function wN(e) {
  nb(e) ? g0(e) : fx(e);
}
function _N() {
  _0 = wN;
}
function MN(e, t, n, r) {
  const o = P0(t);
  ngDevMode && b(n, "Cleanup context is mandatory when registering framework-level destroy hooks"), o.push(n), e.firstCreatePass ? jh(e).push(r, o.length - 1) : ngDevMode && Object.freeze(jh(e));
}
function SN(e, t, n, r, o, s) {
  ngDevMode && r !== 0 && // 0 are bogus nodes and they are OK. See `createContainerRef` in
  // `view_engine_compatibility` for additional context.
  Pn(r, M, "TNodes can't be in the LView header."), ngDevMode && Si(s, void 0, "'undefined' is not valid value for 'attrs'"), ngDevMode && ngDevMode.tNode++, ngDevMode && t && Oi(t, e);
  let i = t ? t.injectorIndex : -1, a = 0;
  Ro() && (a |= 128);
  const c = {
    type: n,
    index: r,
    insertBeforeIndex: null,
    injectorIndex: i,
    directiveStart: -1,
    directiveEnd: -1,
    directiveStylingLast: -1,
    componentOffset: -1,
    propertyBindings: null,
    flags: a,
    providerIndexes: 0,
    value: o,
    attrs: s,
    mergedAttrs: null,
    localNames: null,
    initialInputs: void 0,
    inputs: null,
    outputs: null,
    tView: null,
    next: null,
    prev: null,
    projectionNext: null,
    child: null,
    parent: t,
    projection: null,
    styles: null,
    stylesWithoutHost: null,
    residualStyles: void 0,
    classes: null,
    classesWithoutHost: null,
    residualClasses: void 0,
    classBindings: 0,
    styleBindings: 0
  };
  return ngDevMode && Object.seal(c), c;
}
function iD(e, t, n, r, o) {
  for (let s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const i = t[s];
    if (i === void 0)
      continue;
    r ?? (r = {});
    let a, c = Mn.None;
    Array.isArray(i) ? (a = i[0], c = i[1]) : a = i;
    let u = s;
    if (o !== null) {
      if (!o.hasOwnProperty(s))
        continue;
      u = o[s];
    }
    e === 0 ? aD(r, n, u, a, c) : aD(r, n, u, a);
  }
  return r;
}
function aD(e, t, n, r, o) {
  let s;
  e.hasOwnProperty(n) ? (s = e[n]).push(t, r) : s = e[n] = [t, r], o !== void 0 && s.push(o);
}
function TN(e, t, n) {
  ngDevMode && ht(e);
  const r = t.directiveStart, o = t.directiveEnd, s = e.data, i = t.attrs, a = [];
  let c = null, u = null;
  for (let l = r; l < o; l++) {
    const d = s[l], f = n ? n.get(d) : null, h = f ? f.inputs : null, p = f ? f.outputs : null;
    c = iD(0, d.inputs, l, c, h), u = iD(1, d.outputs, l, u, p);
    const g = c !== null && i !== null && !Wp(t) ? VN(c, l, i) : null;
    a.push(g);
  }
  c !== null && (c.hasOwnProperty("class") && (t.flags |= 8), c.hasOwnProperty("style") && (t.flags |= 16)), t.initialInputs = a, t.inputs = c, t.outputs = u;
}
function AN(e) {
  return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e;
}
function gt(e, t, n, r, o, s, i, a) {
  ngDevMode && Si(o, x, "Incoming value should never be NO_CHANGE.");
  const c = Ye(t, n);
  let u = t.inputs, l;
  !a && u != null && (l = u[r]) ? (Xg(e, n, l, r, o), Dr(t) && ON(n, t.index), ngDevMode && PN(n, c, t.type, l, o)) : t.type & 3 ? (r = AN(r), ngDevMode && (Gx(r), sN(c, r, t.value, e.schemas) || eD(r, t.value, t.type, n), ngDevMode.rendererSetProperty++), o = i != null ? i(o, t.value || "", r) : o, s.setProperty(c, r, o)) : t.type & 12 && ngDevMode && !Lg(e.schemas, t.value) && eD(r, t.value, t.type, n);
}
function ON(e, t) {
  ngDevMode && pn(e);
  const n = bt(t, e);
  n[P] & 16 || (n[P] |= 64);
}
function M0(e, t, n, r, o) {
  const s = e[L];
  r = Yx(r);
  const i = Xx(o);
  if (n & 3)
    o == null ? s.removeAttribute(t, r) : s.setAttribute(t, r, i);
  else {
    const a = Yb(`bindings=${JSON.stringify({ [r]: i }, null, 2)}`);
    s.setValue(t, a);
  }
}
function PN(e, t, n, r, o) {
  if (n & 7)
    for (let s = 0; s < r.length; s += 3)
      M0(e, t, n, r[s + 1], o);
}
function Kg(e, t, n, r) {
  if (ngDevMode && ht(e), mI()) {
    const o = r === null ? null : { "": -1 }, s = kN(e, n);
    let i, a;
    s === null ? i = a = null : [i, a] = s, i !== null && S0(e, t, n, i, o, a), o && LN(n, r, o);
  }
  n.mergedAttrs = $a(n.mergedAttrs, n.attrs);
}
function S0(e, t, n, r, o, s) {
  ngDevMode && ht(e);
  for (let u = 0; u < r.length; u++)
    Eh(el(n, t), e, r[u].type);
  $N(n, e.data.length, r.length);
  for (let u = 0; u < r.length; u++) {
    const l = r[u];
    l.providersResolver && l.providersResolver(l);
  }
  let i = !1, a = !1, c = Vc(e, t, r.length, null);
  ngDevMode && bC(c, n.directiveStart, "TNode.directiveStart should point to just allocated space");
  for (let u = 0; u < r.length; u++) {
    const l = r[u];
    n.mergedAttrs = $a(n.mergedAttrs, l.hostAttrs), BN(e, n, t, c, l), jN(c, l, o), l.contentQueries !== null && (n.flags |= 4), (l.hostBindings !== null || l.hostAttrs !== null || l.hostVars !== 0) && (n.flags |= 64);
    const d = l.type.prototype;
    !i && (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) && ((e.preOrderHooks ?? (e.preOrderHooks = [])).push(n.index), i = !0), !a && (d.ngOnChanges || d.ngDoCheck) && ((e.preOrderCheckHooks ?? (e.preOrderCheckHooks = [])).push(n.index), a = !0), c++;
  }
  TN(e, n, s);
}
function xN(e, t, n, r, o) {
  ngDevMode && ht(e);
  const s = o.hostBindings;
  if (s) {
    let i = e.hostBindingOpCodes;
    i === null && (i = e.hostBindingOpCodes = []);
    const a = ~t.index;
    NN(i) != a && i.push(a), i.push(n, r, s);
  }
}
function NN(e) {
  let t = e.length;
  for (; t > 0; ) {
    const n = e[--t];
    if (typeof n == "number" && n < 0)
      return n;
  }
  return 0;
}
function RN(e, t, n, r) {
  const o = n.directiveStart, s = n.directiveEnd;
  Dr(n) && (ngDevMode && Qe(
    n,
    3
    /* TNodeType.AnyRNode */
  ), HN(t, n, e.data[o + n.componentOffset])), e.firstCreatePass || el(n, t), qe(r, t);
  const i = n.initialInputs;
  for (let a = o; a < s; a++) {
    const c = e.data[a], u = fo(t, e, a, n);
    if (qe(u, t), i !== null && UN(t, a - o, u, c, n, i), xt(c)) {
      const l = bt(n.index, t);
      l[he] = fo(t, e, a, n);
    }
  }
}
function T0(e, t, n) {
  const r = n.directiveStart, o = n.directiveEnd, s = n.index, i = ZO();
  try {
    lo(s);
    for (let a = r; a < o; a++) {
      const c = e.data[a], u = t[a];
      yh(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && FN(c, u);
    }
  } finally {
    lo(-1), yh(i);
  }
}
function FN(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function kN(e, t) {
  var s;
  ngDevMode && ht(e), ngDevMode && Qe(
    t,
    15
    /* TNodeType.AnyContainer */
  );
  const n = e.directiveRegistry;
  let r = null, o = null;
  if (n)
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      if (FC(
        t,
        a.selectors,
        /* isProjectionMode */
        !1
      ))
        if (r || (r = []), xt(a))
          if (ngDevMode && (Qe(t, 2, `"${t.value}" tags cannot be used as component hosts. Please use a different tag to activate the ${J(a.type)} component.`), Dr(t) && aN(t, r.find(xt).type, a.type)), a.findHostDirectiveDefs !== null) {
            const c = [];
            o = o || /* @__PURE__ */ new Map(), a.findHostDirectiveDefs(a, c, o), r.unshift(...c, a);
            const u = c.length;
            kh(e, t, u);
          } else
            r.unshift(a), kh(e, t, 0);
        else
          o = o || /* @__PURE__ */ new Map(), (s = a.findHostDirectiveDefs) == null || s.call(a, a, r, o), r.push(a);
    }
  return ngDevMode && r !== null && rI(r), r === null ? null : [r, o];
}
function kh(e, t, n) {
  ngDevMode && ht(e), ngDevMode && vr(n, -1, "componentOffset must be great than -1"), t.componentOffset = n, (e.components ?? (e.components = [])).push(t.index);
}
function LN(e, t, n) {
  if (t) {
    const r = e.localNames = [];
    for (let o = 0; o < t.length; o += 2) {
      const s = n[t[o + 1]];
      if (s == null)
        throw new v(-301, ngDevMode && `Export of name '${t[o + 1]}' not found!`);
      r.push(t[o], s);
    }
  }
}
function jN(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++)
        n[t.exportAs[r]] = e;
    xt(t) && (n[""] = e);
  }
}
function $N(e, t, n) {
  ngDevMode && Lt(n, e.directiveEnd - e.directiveStart, "Reached the max number of directives"), e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t;
}
function BN(e, t, n, r, o) {
  ngDevMode && Pn(r, M, "Must be in Expando section"), e.data[r] = o;
  const s = o.factory || (o.factory = so(o.type, !0)), i = new $c(s, xt(o), $o);
  e.blueprint[r] = i, n[r] = i, xN(e, t, r, Vc(e, n, o.hostVars, x), o);
}
function HN(e, t, n) {
  const r = Ye(t, e), o = w0(n), s = e[Vt].rendererFactory;
  let i = 16;
  n.signals ? i = 4096 : n.onPush && (i = 64);
  const a = Id(e, Cd(e, o, null, i, r, t, null, s.createRenderer(r, n), null, null, null));
  e[t.index] = a;
}
function yn(e, t, n, r, o, s) {
  ngDevMode && (Si(r, x, "Incoming value should never be NO_CHANGE."), Wx(n), Qe(e, 2, `Attempted to set attribute \`${n}\` on a container node. Host bindings are not valid on ng-container or ng-template.`));
  const i = Ye(e, t);
  Jg(t[L], i, s, e.value, n, r, o);
}
function Jg(e, t, n, r, o, s, i) {
  if (s == null)
    ngDevMode && ngDevMode.rendererRemoveAttribute++, e.removeAttribute(t, o, n);
  else {
    ngDevMode && ngDevMode.rendererSetAttribute++;
    const a = i == null ? H(s) : i(s, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}
function UN(e, t, n, r, o, s) {
  const i = s[t];
  if (i !== null)
    for (let a = 0; a < i.length; ) {
      const c = i[a++], u = i[a++], l = i[a++], d = i[a++];
      if (I0(r, n, c, u, l, d), ngDevMode) {
        const f = Ye(o, e);
        M0(e, f, o.type, u, d);
      }
    }
}
function VN(e, t, n) {
  let r = null, o = 0;
  for (; o < n.length; ) {
    const s = n[o];
    if (s === 0) {
      o += 4;
      continue;
    } else if (s === 5) {
      o += 2;
      continue;
    }
    if (typeof s == "number")
      break;
    if (e.hasOwnProperty(s)) {
      r === null && (r = []);
      const i = e[s];
      for (let a = 0; a < i.length; a += 3)
        if (i[a] === t) {
          r.push(s, i[a + 1], i[a + 2], n[o + 1]);
          break;
        }
    }
    o += 2;
  }
  return r;
}
function A0(e, t, n, r) {
  ngDevMode && pn(t);
  const o = [
    e,
    // host native
    !0,
    // Boolean `true` in this position signifies that this is an `LContainer`
    0,
    // flags
    t,
    // parent
    null,
    // next
    r,
    // t_host
    null,
    // dehydrated views
    n,
    // native,
    null,
    // view refs
    null
    // moved views
  ];
  return ngDevMode && O(o.length, ve, "Should allocate correct number of slots for LContainer header."), o;
}
function O0(e, t) {
  const n = e.contentQueries;
  if (n !== null) {
    const r = U(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        const s = n[o], i = n[o + 1];
        if (i !== -1) {
          const a = e.data[i];
          ngDevMode && b(a, "DirectiveDef not found."), ngDevMode && b(a.contentQueries, "contentQueries function should be defined"), od(s), a.contentQueries(2, t[i], i);
        }
      }
    } finally {
      U(r);
    }
  }
}
function Id(e, t) {
  return e[Ba] ? e[Rv][Ut] = t : e[Ba] = t, e[Rv] = t, t;
}
function Lh(e, t, n) {
  ngDevMode && b(t, "View queries function to execute must be defined."), od(0);
  const r = U(null);
  try {
    t(e, n);
  } finally {
    U(r);
  }
}
function Ie(e, t, n, r, ...o) {
  if (e[r] === null && (t.inputs == null || !t.inputs[n])) {
    (t.propertyBindings || (t.propertyBindings = [])).push(r);
    let i = n;
    o.length > 0 && (i += js + o.join(js)), e[r] = i;
  }
}
function P0(e) {
  return e[zn] ?? (e[zn] = []);
}
function jh(e) {
  return e.cleanup ?? (e.cleanup = []);
}
function x0(e, t, n) {
  return (e === null || xt(e)) && (n = tg(n[t.index])), n[L];
}
function bd(e, t) {
  const n = e[Re], r = n ? n.get(Nn, null) : null;
  r && r.handleError(t);
}
function Xg(e, t, n, r, o) {
  for (let s = 0; s < n.length; ) {
    const i = n[s++], a = n[s++], c = n[s++], u = t[i];
    ngDevMode && _e(t, i);
    const l = e.data[i];
    I0(l, u, r, a, c, o);
  }
}
function Fn(e, t, n) {
  ngDevMode && Mi(n, "Value should be a string"), ngDevMode && Si(n, x, "value should not be NO_CHANGE"), ngDevMode && _e(e, t);
  const r = Fc(t, e);
  ngDevMode && b(r, "native element should exist"), r0(e[L], r, n);
}
function zN(e, t) {
  ngDevMode && O(Lc(e), !0, "Should be run in creation mode");
  const n = bt(t, e), r = n[C];
  GN(r, n);
  const o = n[me];
  o !== null && n[nt] === null && (n[nt] = Sg(o, n[Re])), wd(r, n, n[he]);
}
function GN(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]);
}
function wd(e, t, n) {
  var r;
  ngDevMode && O(Lc(t), !0, "Should be run in creation mode"), ngDevMode && Lp(wd.name), lg(t);
  try {
    const o = e.viewQuery;
    o !== null && Lh(1, o, n);
    const s = e.template;
    s !== null && b0(e, t, s, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), (r = t[Ct]) == null || r.finishViewCreation(e), e.staticContentQueries && O0(e, t), e.staticViewQueries && Lh(2, e.viewQuery, n);
    const i = e.components;
    i !== null && WN(t, i);
  } catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
  } finally {
    t[P] &= -5, dg();
  }
}
function WN(e, t) {
  for (let n = 0; n < t.length; n++)
    zN(e, t[n]);
}
function ki(e, t, n, r) {
  const o = U(null);
  try {
    const s = t.tView;
    ngDevMode && b(s, "TView must be defined for a template node."), ngDevMode && ot(t, e);
    const a = e[P] & 4096 ? 4096 : 16, c = Cd(e, s, n, a, null, t, null, null, (r == null ? void 0 : r.injector) ?? null, (r == null ? void 0 : r.embeddedViewInjector) ?? null, (r == null ? void 0 : r.dehydratedView) ?? null), u = e[t.index];
    ngDevMode && jt(u), c[ao] = u;
    const l = e[Ct];
    return l !== null && (c[Ct] = l.createEmbeddedView(s)), wd(s, c, n), c;
  } finally {
    U(o);
  }
}
function N0(e, t) {
  const n = ve + t;
  if (n < e.length) {
    const r = e[n];
    return ngDevMode && pn(r), r;
  }
}
function mo(e, t) {
  return !t || t.firstChild === null || qa(e);
}
function Li(e, t, n, r = !0) {
  const o = t[C];
  if (pN(o, t, e, n), r) {
    const i = Fh(n, e), a = t[L], c = zg(a, e[cn]);
    c !== null && fN(o, e[Ve], a, t, c, i);
  }
  const s = t[nt];
  s !== null && s.firstChild !== null && (s.firstChild = null);
}
function em(e, t) {
  const n = Ka(e, t);
  return n !== void 0 && vd(n[C], n), n;
}
function Ja(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    ngDevMode && Qe(
      n,
      63
      /* TNodeType.Icu */
    );
    const s = t[n.index];
    s !== null && r.push(X(s)), ze(s) && R0(s, r);
    const i = n.type;
    if (i & 8)
      Ja(e, t, n.child, r);
    else if (i & 32) {
      const a = $g(n, t);
      let c;
      for (; c = a(); )
        r.push(c);
    } else if (i & 16) {
      const a = p0(t, n);
      if (Array.isArray(a))
        r.push(...a);
      else {
        const c = Sn(t[De]);
        ngDevMode && nI(c), Ja(c[C], c, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function R0(e, t) {
  for (let n = ve; n < e.length; n++) {
    const r = e[n], o = r[C].firstChild;
    o !== null && Ja(r[C], r, o, t);
  }
  e[cn] !== e[me] && t.push(e[cn]);
}
let F0 = [];
function ZN(e) {
  return e[At] ?? qN(e);
}
function qN(e) {
  const t = F0.pop() ?? Object.create(YN);
  return t.lView = e, t;
}
function QN(e) {
  e.lView[At] !== e && (e.lView = null, F0.push(e));
}
const YN = {
  ...wc,
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    nd(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[At] = this;
  }
};
function KN(e) {
  const t = e[At] ?? Object.create(JN);
  return t.lView = e, t;
}
const JN = {
  ...wc,
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    let t = Sn(e.lView);
    for (; t && !k0(t[C]); )
      t = Sn(t);
    t && hI(t);
  },
  consumerOnSignalRead() {
    this.lView[At] = this;
  }
};
function k0(e) {
  return e.type !== 2;
}
const XN = 100;
function _d(e, t = !0, n = 0) {
  var i, a, c;
  const r = e[Vt], o = r.rendererFactory, s = !!ngDevMode && Fo();
  s || (i = o.begin) == null || i.call(o);
  try {
    eR(e, n);
  } catch (u) {
    throw t && bd(e, u), u;
  } finally {
    s || ((a = o.end) == null || a.call(o), (c = r.inlineEffectRunner) == null || c.flush());
  }
}
function eR(e, t) {
  const n = bI();
  try {
    if (kv(!0), $h(e, t), ngDevMode && ag())
      return;
    let r = 0;
    for (; td(e); ) {
      if (r === XN)
        throw new v(103, ngDevMode && "Infinite change detection while trying to refresh views. There may be components which each cause the other to require a refresh, causing an infinite loop.");
      r++, $h(
        e,
        1
        /* ChangeDetectionMode.Targeted */
      );
    }
  } finally {
    kv(n);
  }
}
function tm(e, t, n = !0) {
  Fv(t);
  try {
    _d(e, n);
  } finally {
    Fv(Yn.Off);
  }
}
function tR(e, t, n, r) {
  var l;
  ngDevMode && O(Lc(t), !1, "Should be run in update mode");
  const o = t[P];
  if ((o & 256) === 256)
    return;
  const s = ngDevMode && Fo(), i = ngDevMode && ag();
  !s && ((l = t[Vt].inlineEffectRunner) == null || l.flush()), lg(t);
  let a = !0, c = null, u = null;
  s || (k0(e) ? (u = ZN(t), c = Hu(u)) : _p() === null ? (a = !1, u = KN(t), c = Hu(u)) : t[At] && (Tp(t[At]), t[At] = null));
  try {
    fI(t), wI(e.bindingStartIndex), n !== null && b0(e, t, n, 2, r);
    const d = (o & 3) === 3;
    if (!s)
      if (d) {
        const p = e.preOrderCheckHooks;
        p !== null && xu(t, p, null);
      } else {
        const p = e.preOrderHooks;
        p !== null && Nu(t, p, 0, null), hf(
          t,
          0
          /* InitPhaseState.OnInitHooksToBeRun */
        );
      }
    if (i || nR(t), L0(
      t,
      0
      /* ChangeDetectionMode.Global */
    ), e.contentQueries !== null && O0(e, t), !s)
      if (d) {
        const p = e.contentCheckHooks;
        p !== null && xu(t, p);
      } else {
        const p = e.contentHooks;
        p !== null && Nu(
          t,
          p,
          1
          /* InitPhaseState.AfterContentInitHooksToBeRun */
        ), hf(
          t,
          1
          /* InitPhaseState.AfterContentInitHooksToBeRun */
        );
      }
    EN(e, t);
    const f = e.components;
    f !== null && $0(
      t,
      f,
      0
      /* ChangeDetectionMode.Global */
    );
    const h = e.viewQuery;
    if (h !== null && Lh(2, h, r), !s)
      if (d) {
        const p = e.viewCheckHooks;
        p !== null && xu(t, p);
      } else {
        const p = e.viewHooks;
        p !== null && Nu(
          t,
          p,
          2
          /* InitPhaseState.AfterViewInitHooksToBeRun */
        ), hf(
          t,
          2
          /* InitPhaseState.AfterViewInitHooksToBeRun */
        );
      }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Os]) {
      for (const p of t[Os])
        p();
      t[Os] = null;
    }
    s || (t[P] &= -73);
  } catch (d) {
    throw s || nd(t), d;
  } finally {
    u !== null && (Mp(u, c), a && QN(u)), dg();
  }
}
function L0(e, t) {
  for (let n = db(e); n !== null; n = fb(n))
    for (let r = ve; r < n.length; r++) {
      const o = n[r];
      j0(o, t);
    }
}
function nR(e) {
  for (let t = db(e); t !== null; t = fb(t)) {
    if (!(t[P] & Ua.HasTransplantedViews))
      continue;
    const n = t[uo];
    ngDevMode && b(n, "Transplanted View flags set but missing MOVED_VIEWS");
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      hI(o);
    }
  }
}
function rR(e, t, n) {
  ngDevMode && O(Lc(e), !1, "Should be run in update mode");
  const r = bt(t, e);
  j0(r, n);
}
function j0(e, t) {
  ng(e) && $h(e, t);
}
function $h(e, t) {
  const n = ngDevMode && Fo(), r = e[C], o = e[P], s = e[At];
  let i = !!(t === 0 && o & 16);
  if (i || (i = !!(o & 64 && t === 0 && !n)), i || (i = !!(o & 1024)), i || (i = !!(s != null && s.dirty && Sp(s))), i || (i = !!(ngDevMode && ag())), s && (s.dirty = !1), e[P] &= -9217, i)
    tR(r, e, r.template, e[he]);
  else if (o & 8192) {
    L0(
      e,
      1
      /* ChangeDetectionMode.Targeted */
    );
    const a = r.components;
    a !== null && $0(
      e,
      a,
      1
      /* ChangeDetectionMode.Targeted */
    );
  }
}
function $0(e, t, n) {
  for (let r = 0; r < t.length; r++)
    rR(e, t[r], n);
}
function zc(e, t) {
  var r;
  const n = bI() ? (
    // When we are actively refreshing views, we only use the `Dirty` bit to mark a view
    64
  ) : (
    // When we are not actively refreshing a view tree, it is absolutely
    // valid to update state and mark views dirty. We use the `RefreshView` flag in this
    // case to allow synchronously rerunning change detection. This applies today to
    // afterRender hooks as well as animation listeners which execute after detecting
    // changes in a view when the render factory flushes.
    1088
  );
  for ((r = e[Vt].changeDetectionScheduler) == null || r.notify(t); e; ) {
    e[P] |= n;
    const o = Sn(e);
    if (Va(e) && !o)
      return e;
    e = o;
  }
  return null;
}
class Bs {
  get rootNodes() {
    const t = this._lView, n = t[C];
    return Ja(n, t, n.firstChild, []);
  }
  constructor(t, n, r = !0) {
    this._lView = t, this._cdRefInjectingView = n, this.notifyErrorHandler = r, this._appRef = null, this._attachedToViewContainer = !1;
  }
  get context() {
    return this._lView[he];
  }
  /**
   * @deprecated Replacing the full context object is not supported. Modify the context
   *   directly, or consider using a `Proxy` if you need to replace the full object.
   * // TODO(devversion): Remove this.
   */
  set context(t) {
    ngDevMode && console.warn("Angular: Replacing the `context` object of an `EmbeddedViewRef` is deprecated."), this._lView[he] = t;
  }
  get destroyed() {
    return (this._lView[P] & 256) === 256;
  }
  destroy() {
    if (this._appRef)
      this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
      const t = this._lView[Ne];
      if (ze(t)) {
        const n = t[Ku], r = n ? n.indexOf(this) : -1;
        r > -1 && (ngDevMode && O(r, t.indexOf(this._lView) - ve, "An attached view should be in the same position within its container as its ViewRef in the VIEW_REFS array."), Ka(t, r), qu(n, r));
      }
      this._attachedToViewContainer = !1;
    }
    vd(this._lView[C], this._lView);
  }
  onDestroy(t) {
    rd(this._lView, t);
  }
  /**
   * Marks a view and all of its ancestors dirty.
   *
   * This can be used to ensure an {@link ChangeDetectionStrategy#OnPush} component is
   * checked when it needs to be re-rendered but the two normal triggers haven't marked it
   * dirty (i.e. inputs haven't changed and events haven't fired in the view).
   *
   * <!-- TODO: Add a link to a chapter on OnPush components -->
   *
   * @usageNotes
   * ### Example
   *
   * ```typescript
   * @Component({
   *   selector: 'app-root',
   *   template: `Number of ticks: {{numberOfTicks}}`
   *   changeDetection: ChangeDetectionStrategy.OnPush,
   * })
   * class AppComponent {
   *   numberOfTicks = 0;
   *
   *   constructor(private ref: ChangeDetectorRef) {
   *     setInterval(() => {
   *       this.numberOfTicks++;
   *       // the following is required, otherwise the view will not be updated
   *       this.ref.markForCheck();
   *     }, 1000);
   *   }
   * }
   * ```
   */
  markForCheck() {
    zc(
      this._cdRefInjectingView || this._lView,
      4
      /* NotificationSource.MarkForCheck */
    );
  }
  /**
   * Detaches the view from the change detection tree.
   *
   * Detached views will not be checked during change detection runs until they are
   * re-attached, even if they are dirty. `detach` can be used in combination with
   * {@link ChangeDetectorRef#detectChanges} to implement local change
   * detection checks.
   *
   * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
   * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
   *
   * @usageNotes
   * ### Example
   *
   * The following example defines a component with a large list of readonly data.
   * Imagine the data changes constantly, many times per second. For performance reasons,
   * we want to check and update the list every five seconds. We can do that by detaching
   * the component's change detector and doing a local check every five seconds.
   *
   * ```typescript
   * class DataProvider {
   *   // in a real application the returned data will be different every time
   *   get data() {
   *     return [1,2,3,4,5];
   *   }
   * }
   *
   * @Component({
   *   selector: 'giant-list',
   *   template: `
   *     <li *ngFor="let d of dataProvider.data">Data {{d}}</li>
   *   `,
   * })
   * class GiantList {
   *   constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) {
   *     ref.detach();
   *     setInterval(() => {
   *       this.ref.detectChanges();
   *     }, 5000);
   *   }
   * }
   *
   * @Component({
   *   selector: 'app',
   *   providers: [DataProvider],
   *   template: `
   *     <giant-list><giant-list>
   *   `,
   * })
   * class App {
   * }
   * ```
   */
  detach() {
    this._lView[P] &= -129;
  }
  /**
   * Re-attaches a view to the change detection tree.
   *
   * This can be used to re-attach views that were previously detached from the tree
   * using {@link ChangeDetectorRef#detach}. Views are attached to the tree by default.
   *
   * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
   *
   * @usageNotes
   * ### Example
   *
   * The following example creates a component displaying `live` data. The component will detach
   * its change detector from the main change detector tree when the component's live property
   * is set to false.
   *
   * ```typescript
   * class DataProvider {
   *   data = 1;
   *
   *   constructor() {
   *     setInterval(() => {
   *       this.data = this.data * 2;
   *     }, 500);
   *   }
   * }
   *
   * @Component({
   *   selector: 'live-data',
   *   inputs: ['live'],
   *   template: 'Data: {{dataProvider.data}}'
   * })
   * class LiveData {
   *   constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) {}
   *
   *   set live(value) {
   *     if (value) {
   *       this.ref.reattach();
   *     } else {
   *       this.ref.detach();
   *     }
   *   }
   * }
   *
   * @Component({
   *   selector: 'app-root',
   *   providers: [DataProvider],
   *   template: `
   *     Live Update: <input type="checkbox" [(ngModel)]="live">
   *     <live-data [live]="live"><live-data>
   *   `,
   * })
   * class AppComponent {
   *   live = true;
   * }
   * ```
   */
  reattach() {
    mh(this._lView), this._lView[P] |= 128;
  }
  /**
   * Checks the view and its children.
   *
   * This can also be used in combination with {@link ChangeDetectorRef#detach} to implement
   * local change detection checks.
   *
   * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
   * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
   *
   * @usageNotes
   * ### Example
   *
   * The following example defines a component with a large list of readonly data.
   * Imagine, the data changes constantly, many times per second. For performance reasons,
   * we want to check and update the list every five seconds.
   *
   * We can do that by detaching the component's change detector and doing a local change detection
   * check every five seconds.
   *
   * See {@link ChangeDetectorRef#detach} for more information.
   */
  detectChanges() {
    this._lView[P] |= 1024, _d(this._lView, this.notifyErrorHandler);
  }
  /**
   * Checks the change detector and its children, and throws if any changes are detected.
   *
   * This is used in development mode to verify that running change detection doesn't
   * introduce other changes.
   */
  checkNoChanges() {
    ngDevMode && tm(this._lView, Yn.OnlyDirtyViews, this.notifyErrorHandler);
  }
  attachToViewContainerRef() {
    if (this._appRef)
      throw new v(902, ngDevMode && "This view is already attached directly to the ApplicationRef!");
    this._attachedToViewContainer = !0;
  }
  detachFromAppRef() {
    this._appRef = null;
    const t = Va(this._lView), n = this._lView[ao];
    n !== null && !t && Ug(n, this._lView), o0(this._lView[C], this._lView);
  }
  attachToAppRef(t) {
    if (this._attachedToViewContainer)
      throw new v(902, ngDevMode && "This view is already attached to a ViewContainer!");
    this._appRef = t;
    const n = Va(this._lView), r = this._lView[ao];
    r !== null && !n && s0(r, this._lView), mh(this._lView);
  }
}
const lv = class lv {
};
lv.__NG_ELEMENT_ID__ = iR;
let Ue = lv;
const oR = Ue, sR = class extends oR {
  constructor(t, n, r) {
    super(), this._declarationLView = t, this._declarationTContainer = n, this.elementRef = r;
  }
  /**
   * Returns an `ssrId` associated with a TView, which was used to
   * create this instance of the `TemplateRef`.
   *
   * @internal
   */
  get ssrId() {
    var t;
    return ((t = this._declarationTContainer.tView) == null ? void 0 : t.ssrId) || null;
  }
  createEmbeddedView(t, n) {
    return this.createEmbeddedViewImpl(t, n);
  }
  /**
   * @internal
   */
  createEmbeddedViewImpl(t, n, r) {
    const o = ki(this._declarationLView, this._declarationTContainer, t, { embeddedViewInjector: n, dehydratedView: r });
    return new Bs(o);
  }
};
function iR() {
  return Md(re(), y());
}
function Md(e, t) {
  return e.type & 4 ? (ngDevMode && b(e.tView, "TView must be allocated"), new sR(t, e, Ni(e, t))) : null;
}
const Bh = "<-- AT THIS LOCATION";
function aR(e) {
  switch (e) {
    case 4:
      return "view container";
    case 2:
      return "element";
    case 8:
      return "ng-container";
    case 32:
      return "icu";
    case 64:
      return "i18n";
    case 16:
      return "projection";
    case 1:
      return "text";
    case 128:
      return "@let";
    default:
      return "<unknown>";
  }
}
function Gc(e, t, n, r, o, s = !1) {
  var i;
  if (!e || e.nodeType !== t || e.nodeType === Node.ELEMENT_NODE && e.tagName.toLowerCase() !== (n == null ? void 0 : n.toLowerCase())) {
    let c = `During hydration Angular expected ${uD(t, n, null)} but `;
    const u = pd(r), l = (i = u == null ? void 0 : u.type) == null ? void 0 : i.name, d = nm(r, o, s), f = `Angular expected this DOM:

${d}

`;
    let h = "";
    const p = X(r[me]);
    if (!e)
      c += `the node was not found.

`, Ya(p, d);
    else {
      const E = uD(e.nodeType, e.tagName ?? null, e.textContent ?? null);
      c += `found ${E}.

`;
      const m = Td(e);
      h = `Actual DOM is:

${m}

`, Ya(p, d, m);
    }
    const g = Wc(l), D = c + f + h + H0() + g;
    throw new v(-500, D);
  }
}
function B0(e) {
  if (Sd(e), !e.nextSibling) {
    const t = `During hydration Angular expected more sibling nodes to be present.

`, n = `Actual DOM is:

${Td(e)}

`, r = Wc(), o = t + n + r;
    throw Ya(e, "", n), new v(-501, o);
  }
}
function Sd(e, t = null, n = null) {
  if (!e) {
    const r = `During hydration, Angular expected an element to be present at this location.

`;
    let o = "", s = "";
    throw t !== null && n !== null && (o = nm(t, n, !1), s = Wc(), Ya(X(t[me]), o, "")), new v(-502, `${r}${o}

${s}`);
  }
}
function cR(e, t) {
  const n = `During serialization, Angular was unable to find an element in the DOM:

`, r = `${nm(e, t, !1)}

`, o = Wc();
  throw new v(-502, n + r + o);
}
function cD(e, t) {
  const n = `During hydration Angular was unable to locate a node using the "${t}" path, starting from the ${ga(e)} node.

`, r = Wc();
  throw Ya(e), new v(-502, n + r);
}
function uR(e) {
  const t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${Td(e)}

`, r = t + n + H0();
  return new v(-503, r);
}
function lR(e) {
  const t = "The `ngSkipHydration` flag is applied on a node that doesn't act as a component host. Hydration can be skipped only on per-component basis.\n\n", n = `${Td(e)}

`, o = t + n + "Please move the `ngSkipHydration` attribute to the component host element.\n\n";
  return new v(-504, o);
}
function dR(e) {
  const t = [];
  if (e.attrs)
    for (let n = 0; n < e.attrs.length; ) {
      const r = e.attrs[n++];
      if (typeof r == "number")
        break;
      const o = e.attrs[n++];
      t.push(`${r}="${Xa(o)}"`);
    }
  return t.join(" ");
}
const fR = /* @__PURE__ */ new Set(["ngh", "ng-version", "ng-server-context"]);
function hR(e) {
  const t = [];
  for (let n = 0; n < e.attributes.length; n++) {
    const r = e.attributes[n];
    fR.has(r.name) || t.push(`${r.name}="${Xa(r.value)}"`);
  }
  return t.join(" ");
}
function yf(e, t = "…") {
  switch (e.type) {
    case 1:
      return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
      const r = dR(e), o = e.value.toLowerCase();
      return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case 8:
      return "<!-- ng-container -->";
    case 4:
      return "<!-- container -->";
    default:
      return `#node(${aR(e.type)})`;
  }
}
function ga(e, t = "…") {
  const n = e;
  switch (n.nodeType) {
    case Node.ELEMENT_NODE:
      const r = n.tagName.toLowerCase(), o = hR(n);
      return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case Node.TEXT_NODE:
      const s = n.textContent ? Xa(n.textContent) : "";
      return `#text${s ? `(${s})` : ""}`;
    case Node.COMMENT_NODE:
      return `<!-- ${Xa(n.textContent ?? "")} -->`;
    default:
      return `#node(${n.nodeType})`;
  }
}
function nm(e, t, n) {
  const r = "  ";
  let o = "";
  t.prev ? (o += r + `…
`, o += r + yf(t.prev) + `
`) : t.type && t.type & 12 && (o += r + `…
`), n ? (o += r + yf(t) + `
`, o += r + `<!-- container -->  ${Bh}
`) : o += r + yf(t) + `  ${Bh}
`, o += r + `…
`;
  const s = t.type ? Vg(e[C], t, e) : null;
  return s && (o = ga(s, `
` + o)), o;
}
function Td(e) {
  const t = "  ";
  let n = "";
  const r = e;
  return r.previousSibling && (n += t + `…
`, n += t + ga(r.previousSibling) + `
`), n += t + ga(r) + `  ${Bh}
`, e.nextSibling && (n += t + `…
`), e.parentNode && (n = ga(r.parentNode, `
` + n)), n;
}
function uD(e, t, n) {
  switch (e) {
    case Node.ELEMENT_NODE:
      return `<${t.toLowerCase()}>`;
    case Node.TEXT_NODE:
      return `a text node${n ? ` (with the "${Xa(n)}" content)` : ""}`;
    case Node.COMMENT_NODE:
      return "a comment node";
    default:
      return `#node(nodeType=${e})`;
  }
}
function Wc(e) {
  return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function H0() {
  return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function pR(e) {
  return e.replace(/\s+/gm, "");
}
function Xa(e, t = 50) {
  return e ? (e = pR(e), e.length > t ? `${e.substring(0, t - 1)}…` : e) : "";
}
function U0(e, t, n) {
  const r = t.insertBeforeIndex, o = Array.isArray(r) ? r[0] : r;
  return o === null ? d0(e, t, n) : (ngDevMode && _e(n, o), X(n[o]));
}
function V0(e, t, n, r, o) {
  const s = t.insertBeforeIndex;
  if (Array.isArray(s)) {
    ngDevMode && Un(r);
    let i = r, a = null;
    if (t.type & 3 || (a = i, i = o), i !== null && t.componentOffset === -1)
      for (let c = 1; c < s.length; c++) {
        const u = n[s[c]];
        go(e, i, u, a, !1);
      }
  }
}
function z0(e, t) {
  if (ngDevMode && O(t.insertBeforeIndex, null, "We expect that insertBeforeIndex is not set"), e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
      const r = e[n];
      G0(r) || gR(r, t) && mR(r) === null && yR(r, t.index);
    }
}
function G0(e) {
  return !(e.type & 64);
}
function gR(e, t) {
  return G0(t) || e.index > t.index;
}
function mR(e) {
  const t = e.insertBeforeIndex;
  return Array.isArray(t) ? t[0] : t;
}
function yR(e, t) {
  const n = e.insertBeforeIndex;
  Array.isArray(n) ? n[0] = t : (h0(U0, V0), e.insertBeforeIndex = t);
}
function ma(e, t) {
  const n = e.data[t];
  if (n === null || typeof n == "string")
    return null;
  ngDevMode && !(n.hasOwnProperty("tView") || n.hasOwnProperty("currentCaseLViewIndex")) && A("We expect to get 'null'|'TIcu'|'TIcuContainer', but got: " + n);
  const r = n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value;
  return ngDevMode && ed(r), r;
}
function vR(e, t, n) {
  const r = e.data[t];
  ngDevMode && O(r === null || r.hasOwnProperty("tView"), !0, "We expect to get 'null'|'TIcuContainer'"), r === null ? e.data[t] = n : (ngDevMode && Qe(
    r,
    32
    /* TNodeType.Icu */
  ), r.value = n);
}
function DR(e, t) {
  ngDevMode && Qn(e);
  let n = e.insertBeforeIndex;
  n === null ? (h0(U0, V0), n = e.insertBeforeIndex = [
    null,
    t
  ]) : (O(Array.isArray(n), !0, "Expecting array here"), n.push(t));
}
function ER(e, t, n) {
  const r = Wg(e, n, 64, null, null);
  return z0(t, r), r;
}
function Ad(e, t) {
  const n = t[e.currentCaseLViewIndex];
  return n === null ? n : n < 0 ? ~n : n;
}
function W0(e) {
  return e >>> 17;
}
function Z0(e) {
  return (e & 131070) >>> 1;
}
function lD(e) {
  return e & 1;
}
function CR(e, t, n) {
  return ngDevMode && Pn(t, 0, "Missing parent index"), ngDevMode && vr(n, 0, "Missing ref index"), e | t << 17 | n << 1;
}
function q0(e) {
  return e === -1;
}
function rm(e, t, n) {
  e.index = 0;
  const r = Ad(t, n);
  r !== null ? (ngDevMode && ka(r, 0, t.cases.length - 1), e.removes = t.remove[r]) : e.removes = K;
}
function ol(e) {
  if (e.index < e.removes.length) {
    const t = e.removes[e.index++];
    if (ngDevMode && ie(t, "Expecting OpCode number"), t > 0) {
      const n = e.lView[t];
      return ngDevMode && Un(n), n;
    } else {
      e.stack.push(e.index, e.removes);
      const n = ~t, r = e.lView[C].data[n];
      return ngDevMode && ed(r), rm(e, r, e.lView), ol(e);
    }
  } else
    return e.stack.length === 0 ? null : (e.removes = e.stack.pop(), e.index = e.stack.pop(), ol(e));
}
function IR() {
  const e = {
    stack: [],
    index: -1
  };
  function t(n, r) {
    for (e.lView = r; e.stack.length; )
      e.stack.pop();
    return ngDevMode && ot(n, r), rm(e, n.value, r), ol.bind(null, e);
  }
  return t;
}
function bR(e, t) {
  const n = {
    stack: [],
    index: -1,
    lView: t
  };
  return ngDevMode && ed(e), rm(n, e, t), ol.bind(null, n);
}
const wR = new RegExp(`^(\\d+)*(${_g}|${wg})*(.*)`);
function _R(e, t) {
  const n = [e];
  for (const r of t) {
    const o = n.length - 1;
    if (o > 0 && n[o - 1] === r) {
      const s = n[o] || 1;
      n[o] = s + 1;
    } else
      n.push(r, "");
  }
  return n.join("");
}
function MR(e) {
  const t = e.match(wR), [n, r, o, s] = t, i = r ? parseInt(r, 10) : o, a = [];
  for (const [c, u, l] of s.matchAll(/(f|n)(\d*)/g)) {
    const d = parseInt(l, 10) || 1;
    a.push(u, d);
  }
  return [i, ...a];
}
function SR(e) {
  var t;
  return !e.prev && ((t = e.parent) == null ? void 0 : t.type) === 8;
}
function vf(e) {
  return e.index - M;
}
function ec(e, t) {
  return !(e.type & 144) && !!t[e.index] && Q0(X(t[e.index]));
}
function Q0(e) {
  return !!e && !e.isConnected;
}
function Y0(e, t) {
  const n = e.i18nNodes;
  if (n)
    return n.get(t);
}
function TR(e, t, n) {
  const r = e.data[es], o = r == null ? void 0 : r[n];
  return o ? K0(o, t) : null;
}
function Zc(e, t, n, r) {
  const o = vf(r);
  let s = Y0(e, o);
  if (s === void 0) {
    const i = e.data[es];
    if (i != null && i[o])
      s = K0(i[o], n);
    else if (t.firstChild === r)
      s = e.firstChild;
    else {
      const a = r.prev === null, c = r.prev ?? r.parent;
      if (ngDevMode && b(c, "Unexpected state: current TNode does not have a connection to the previous node or a parent node."), SR(r)) {
        const u = vf(r.parent);
        s = Oh(e, u);
      } else {
        let u = Ye(c, n);
        if (a)
          s = u.firstChild;
        else {
          const l = vf(c), d = Oh(e, l);
          if (c.type === 2 && d) {
            const h = Ag(e, l) + 1;
            s = Od(h, d);
          } else
            s = u.nextSibling;
        }
      }
    }
  }
  return s;
}
function Od(e, t) {
  let n = t;
  for (let r = 0; r < e; r++)
    ngDevMode && B0(n), n = n.nextSibling;
  return n;
}
function dD(e) {
  const t = [];
  for (let n = 0; n < e.length; n += 2) {
    const r = e[n], o = e[n + 1];
    for (let s = 0; s < o; s++)
      t.push(r === po.FirstChild ? "firstChild" : "nextSibling");
  }
  return t.join(".");
}
function AR(e, t) {
  let n = e;
  for (let r = 0; r < t.length; r += 2) {
    const o = t[r], s = t[r + 1];
    for (let i = 0; i < s; i++) {
      if (ngDevMode && !n)
        throw cD(e, dD(t));
      switch (o) {
        case po.FirstChild:
          n = n.firstChild;
          break;
        case po.NextSibling:
          n = n.nextSibling;
          break;
      }
    }
  }
  if (ngDevMode && !n)
    throw cD(e, dD(t));
  return n;
}
function K0(e, t) {
  const [n, ...r] = MR(e);
  let o;
  if (n === wg)
    o = t[De][me];
  else if (n === _g)
    o = jg(t[De][me]);
  else {
    const s = Number(n);
    o = X(t[s + M]);
  }
  return AR(o, r);
}
function Hh(e, t) {
  if (e === t)
    return [];
  if (e.parentElement == null || t.parentElement == null)
    return null;
  if (e.parentElement === t.parentElement)
    return OR(e, t);
  {
    const n = t.parentElement, r = Hh(e, n), o = Hh(n.firstChild, t);
    return !r || !o ? null : [
      // First navigate to `finish`'s parent
      ...r,
      // Then to its first child.
      po.FirstChild,
      // And finally from that node to `finish` (maybe a no-op if we're already there).
      ...o
    ];
  }
}
function OR(e, t) {
  const n = [];
  let r = null;
  for (r = e; r != null && r !== t; r = r.nextSibling)
    n.push(po.NextSibling);
  return r == null ? null : n;
}
function fD(e, t, n) {
  const r = Hh(e, t);
  return r === null ? null : _R(n, r);
}
function PR(e, t, n) {
  let r = e.parent, o, s, i;
  for (; r !== null && (ec(r, t) || n != null && n.has(r.index)); )
    r = r.parent;
  r === null || !(r.type & 3) ? (o = i = wg, s = t[De][me]) : (o = r.index, s = X(t[o]), i = H(o - M));
  let a = X(t[e.index]);
  if (e.type & 44) {
    const u = no(t, e);
    u && (a = u);
  }
  let c = fD(s, a, i);
  if (c === null && s !== a) {
    const u = s.ownerDocument.body;
    if (c = fD(u, a, _g), c === null)
      throw cR(t, e);
  }
  return c;
}
let J0 = !1, X0 = () => {
};
function ew(e) {
  J0 = e;
}
function om() {
  return J0;
}
function xR(e, t, n, r) {
  X0(e, t, n, r);
}
function NR() {
  X0 = HR;
}
function RR(e) {
  return e = e ?? I($e), e.get(Nb, !1);
}
function FR(e, t) {
  let n = t.i18nChildren.get(e);
  return n === void 0 && (n = kR(e), t.i18nChildren.set(e, n)), n;
}
function kR(e) {
  const t = /* @__PURE__ */ new Set();
  function n(r) {
    switch (t.add(r.index), r.kind) {
      case 1:
      case 2: {
        for (const o of r.children)
          n(o);
        break;
      }
      case 3: {
        for (const o of r.cases)
          for (const s of o)
            n(s);
        break;
      }
    }
  }
  for (let r = M; r < e.bindingStartIndex; r++) {
    const o = e.data[r];
    if (!(!o || !o.ast))
      for (const s of o.ast)
        n(s);
  }
  return t.size === 0 ? null : t;
}
function LR(e, t, n) {
  if (!n.isI18nHydrationEnabled)
    return null;
  const r = e[C], o = r.data[t];
  if (!o || !o.ast)
    return null;
  const s = r.data[o.parentTNodeIndex];
  if (s && rb(s))
    return null;
  const i = {
    caseQueue: [],
    disconnectedNodes: /* @__PURE__ */ new Set(),
    disjointNodes: /* @__PURE__ */ new Set()
  };
  return Uh(e, i, n, o.ast), i.caseQueue.length === 0 && i.disconnectedNodes.size === 0 && i.disjointNodes.size === 0 ? null : i;
}
function Uh(e, t, n, r) {
  let o = null;
  for (const s of r) {
    const i = $R(e, t, n, s);
    i && (jR(o, i) && t.disjointNodes.add(s.index - M), o = i);
  }
  return o;
}
function jR(e, t) {
  return e && e.nextSibling !== t;
}
function $R(e, t, n, r) {
  const o = X(e[r.index]);
  if (!o || Q0(o))
    return t.disconnectedNodes.add(r.index - M), null;
  const s = o;
  switch (r.kind) {
    case 0: {
      Ob(n, s);
      break;
    }
    case 1:
    case 2: {
      Uh(e, t, n, r.children);
      break;
    }
    case 3: {
      const i = e[r.currentCaseLViewIndex];
      if (i != null) {
        const a = i < 0 ? ~i : i;
        t.caseQueue.push(a), Uh(e, t, n, r.cases[a]);
      }
      break;
    }
  }
  return BR(e, r);
}
function BR(e, t) {
  const r = e[C].data[t.index];
  return LI(r) ? no(e, r) : t.kind === 3 ? bR(r, e)() ?? X(e[t.index]) : X(e[t.index]) ?? null;
}
function Ir(e, t) {
  e.currentNode = t;
}
function na(e, t, n) {
  const r = n.index - M, { disconnectedNodes: o } = e, s = t.currentNode;
  return t.isConnected ? (e.i18nNodes.set(r, s), o.delete(r)) : o.add(r), s;
}
function Df(e, t) {
  let n = e.currentNode;
  for (let r = 0; r < t && n; r++)
    n = (n == null ? void 0 : n.nextSibling) ?? null;
  return n;
}
function Ef(e, t) {
  return { currentNode: t, isConnected: e.isConnected };
}
function HR(e, t, n, r) {
  var h;
  const o = e[nt];
  if (!o || !om() || n && (rb(n) || Lo(o, n.index - M)))
    return;
  const s = e[C], i = s.data[t];
  ngDevMode && b(i, "Expected i18n data to be present in a given TView slot during hydration");
  function a() {
    if (q0(r)) {
      ngDevMode && b(n, "Expected parent TNode while hydrating i18n root");
      const p = Zc(o, s, e, n);
      return n.type & 8 ? p : p.firstChild;
    }
    return o == null ? void 0 : o.firstChild;
  }
  const c = a();
  ngDevMode && b(c, "Expected root i18n node during hydration");
  const u = Ab(o) ?? /* @__PURE__ */ new Set(), l = o.i18nNodes ?? (o.i18nNodes = /* @__PURE__ */ new Map()), d = ((h = o.data[aa]) == null ? void 0 : h[t - M]) ?? [], f = o.dehydratedIcuData ?? (o.dehydratedIcuData = /* @__PURE__ */ new Map());
  Wo({ hydrationInfo: o, lView: e, i18nNodes: l, disconnectedNodes: u, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, i.ast), o.disconnectedNodes = u.size === 0 ? null : u;
}
function Wo(e, t, n) {
  var r, o;
  if (Array.isArray(n)) {
    let s = t;
    for (const i of n) {
      const a = TR(e.hydrationInfo, e.lView, i.index - M);
      a && (s = Ef(t, a)), Wo(e, s, i);
    }
  } else {
    if (e.disconnectedNodes.has(n.index - M))
      return;
    switch (n.kind) {
      case 0: {
        const s = na(e, t, n);
        Ir(t, (s == null ? void 0 : s.nextSibling) ?? null);
        break;
      }
      case 1: {
        Wo(e, Ef(t, ((r = t.currentNode) == null ? void 0 : r.firstChild) ?? null), n.children);
        const s = na(e, t, n);
        Ir(t, (s == null ? void 0 : s.nextSibling) ?? null);
        break;
      }
      case 2: {
        const s = n.index - M, { hydrationInfo: i } = e, a = Sb(i, s);
        switch (n.type) {
          case 0: {
            const c = na(e, t, n);
            if (gx(i, s)) {
              Wo(e, t, n.children);
              const u = Df(t, 1);
              Ir(t, u);
            } else if (Wo(e, Ef(t, ((o = t.currentNode) == null ? void 0 : o.firstChild) ?? null), n.children), Ir(t, (c == null ? void 0 : c.nextSibling) ?? null), a !== null) {
              const u = Df(t, a + 1);
              Ir(t, u);
            }
            break;
          }
          case 1: {
            ngDevMode && Lt(a, null, "Expected a container size while hydrating i18n subtemplate"), na(e, t, n);
            const c = Df(t, a + 1);
            Ir(t, c);
            break;
          }
        }
        break;
      }
      case 3: {
        const s = t.isConnected ? e.caseQueue.shift() : null, i = { currentNode: null, isConnected: !1 };
        for (let c = 0; c < n.cases.length; c++)
          Wo(e, c === s ? t : i, n.cases[c]);
        s !== null && e.dehydratedIcuData.set(n.index, { case: s, node: n });
        const a = na(e, t, n);
        Ir(t, (a == null ? void 0 : a.nextSibling) ?? null);
        break;
      }
    }
  }
}
let tw = () => {
};
function UR(e, t, n) {
  tw(e, t, n);
}
function VR() {
  tw = zR;
}
function zR(e, t, n) {
  var o;
  const r = (o = e[nt]) == null ? void 0 : o.dehydratedIcuData;
  if (r) {
    const s = r.get(t);
    (s == null ? void 0 : s.case) === n && r.delete(t);
  }
}
function GR(e) {
  const t = e[nt];
  if (t) {
    const { i18nNodes: n, dehydratedIcuData: r } = t;
    if (n && r) {
      const o = e[L];
      for (const s of r.values())
        WR(o, n, s);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
  }
}
function WR(e, t, n) {
  for (const r of n.node.cases[n.case]) {
    const o = t.get(r.index - M);
    o && Uc(e, o, !1);
  }
}
function nw(e) {
  const t = e[Ha] ?? [], r = e[Ne][L];
  for (const o of t)
    ZR(o, r), ngDevMode && ngDevMode.dehydratedViewsRemoved++;
  e[Ha] = K;
}
function ZR(e, t) {
  let n = 0, r = e.firstChild;
  if (r) {
    const o = e.data[ks];
    for (; n < o; ) {
      ngDevMode && B0(r);
      const s = r.nextSibling;
      Uc(t, r, !1), r = s, n++;
    }
  }
}
function rw(e) {
  nw(e);
  const t = e[me];
  je(t) && sl(t);
  for (let n = ve; n < e.length; n++)
    sl(e[n]);
}
function sl(e) {
  GR(e);
  const t = e[C];
  for (let n = M; n < t.bindingStartIndex; n++)
    if (ze(e[n])) {
      const r = e[n];
      rw(r);
    } else je(e[n]) && sl(e[n]);
}
function qR(e) {
  const t = e._views;
  for (const n of t) {
    const r = wb(n);
    r !== null && r[me] !== null && (je(r) ? sl(r) : rw(r), ngDevMode && ngDevMode.dehydratedViewsCleanupRuns++);
  }
}
function QR(e, t) {
  const n = [];
  for (const r of t)
    for (let o = 0; o < (r[Xo] ?? 1); o++) {
      const s = {
        data: r,
        firstChild: null
      };
      r[ks] > 0 && (s.firstChild = e, e = Od(r[ks], e)), n.push(s);
    }
  return [e, n];
}
let ow = () => null;
function YR(e, t) {
  const n = e[Ha];
  return !t || n === null || n.length === 0 ? null : n[0].data[Ah] === t ? n.shift() : (nw(e), null);
}
function KR() {
  ow = YR;
}
function yo(e, t) {
  return ow(e, t);
}
class Ho {
}
const ji = new F(typeof ngDevMode > "u" || ngDevMode ? "Zoneless enabled" : "", { providedIn: "root", factory: () => !1 }), sw = new F(typeof ngDevMode > "u" || ngDevMode ? "Zoneless provided" : "", { providedIn: "root", factory: () => !1 }), iw = new F(typeof ngDevMode > "u" || ngDevMode ? "scheduler disabled" : ""), sm = new F(typeof ngDevMode > "u" || ngDevMode ? "run changes outside zone in root" : "");
class aw {
}
class il {
}
function JR(e) {
  const t = Error(`No component factory found for ${J(e)}.`);
  return t[XR] = e, t;
}
const XR = "ngComponent";
class eF {
  resolveComponentFactory(t) {
    throw JR(t);
  }
}
const dv = class dv {
};
dv.NULL = new eF();
let vo = dv;
class im {
}
const fv = class fv {
  constructor() {
    this.destroyNode = null;
  }
};
fv.__NG_ELEMENT_ID__ = () => tF();
let er = fv;
function tF() {
  const e = y(), t = re(), n = bt(t.index, e);
  return (je(n) ? n : e)[L];
}
const kl = class kl {
};
kl.ɵprov = se({
  token: kl,
  providedIn: "root",
  factory: () => null
});
let al = kl;
function am(e) {
  return e.ngModule !== void 0;
}
function _r(e) {
  return !!It(e);
}
function fu(e) {
  return !!vt(e);
}
function hD(e) {
  return !!Be(e);
}
function ya(e) {
  return !!q(e);
}
function nF(e) {
  return q(e) ? "component" : Be(e) ? "directive" : vt(e) ? "pipe" : "type";
}
function Vh(e, t) {
  if (Gl(e) && (e = $(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${W(t)}", to return a standalone entity or NgModule but got "${W(e) || e}".`);
  if (It(e) == null) {
    const n = q(e) || Be(e) || vt(e);
    if (n != null) {
      if (!n.standalone)
        throw new Error(`The "${W(e)}" ${nF(e)}, imported from "${W(t)}", is not standalone. Did you forget to add the standalone: true flag?`);
    } else
      throw am(e) ? new Error(`A module with providers was imported from "${W(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${W(e)}" type, imported from "${W(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
  }
}
const rF = !0;
class oF {
  constructor() {
    this.ownerNgModule = /* @__PURE__ */ new Map(), this.ngModulesWithSomeUnresolvedDecls = /* @__PURE__ */ new Set(), this.ngModulesScopeCache = /* @__PURE__ */ new Map(), this.standaloneComponentsScopeCache = /* @__PURE__ */ new Map();
  }
  /**
   * Attempts to resolve ng module's forward ref declarations as much as possible and add them to
   * the `ownerNgModule` map. This method normally should be called after the initial parsing when
   * all the forward refs are resolved (e.g., when trying to render a component)
   */
  resolveNgModulesDecls() {
    if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
      for (const t of this.ngModulesWithSomeUnresolvedDecls) {
        const n = It(t);
        if (n != null && n.declarations)
          for (const r of on(n.declarations))
            ya(r) && this.ownerNgModule.set(r, t);
      }
      this.ngModulesWithSomeUnresolvedDecls.clear();
    }
  }
  /** @override */
  getComponentDependencies(t, n) {
    this.resolveNgModulesDecls();
    const r = q(t);
    if (r === null)
      throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`);
    if (r.standalone) {
      const o = this.getStandaloneComponentScope(t, n);
      return o.compilation.isPoisoned ? { dependencies: [] } : {
        dependencies: [
          ...o.compilation.directives,
          ...o.compilation.pipes,
          ...o.compilation.ngModules
        ]
      };
    } else {
      if (!this.ownerNgModule.has(t))
        return { dependencies: [] };
      const o = this.getNgModuleScope(this.ownerNgModule.get(t));
      return o.compilation.isPoisoned ? { dependencies: [] } : {
        dependencies: [...o.compilation.directives, ...o.compilation.pipes]
      };
    }
  }
  /**
   * @override
   * This implementation does not make use of param scopeInfo since it assumes the scope info is
   * already added to the type itself through methods like {@link ɵɵsetNgModuleScope}
   */
  registerNgModule(t, n) {
    if (!_r(t))
      throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`);
    this.ngModulesWithSomeUnresolvedDecls.add(t);
  }
  /** @override */
  clearScopeCacheFor(t) {
    this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t);
  }
  /** @override */
  getNgModuleScope(t) {
    if (this.ngModulesScopeCache.has(t))
      return this.ngModulesScopeCache.get(t);
    const n = this.computeNgModuleScope(t);
    return this.ngModulesScopeCache.set(t, n), n;
  }
  /** Compute NgModule scope afresh. */
  computeNgModuleScope(t) {
    const n = It(t, !0), r = {
      exported: { directives: /* @__PURE__ */ new Set(), pipes: /* @__PURE__ */ new Set() },
      compilation: { directives: /* @__PURE__ */ new Set(), pipes: /* @__PURE__ */ new Set() }
    };
    for (const o of on(n.imports))
      if (_r(o)) {
        const s = this.getNgModuleScope(o);
        kn(s.exported.directives, r.compilation.directives), kn(s.exported.pipes, r.compilation.pipes);
      } else if (Vn(o))
        if (hD(o) || ya(o))
          r.compilation.directives.add(o);
        else if (fu(o))
          r.compilation.pipes.add(o);
        else
          throw new v(1e3, "The standalone imported type is neither a component nor a directive nor a pipe");
      else {
        r.compilation.isPoisoned = !0;
        break;
      }
    if (!r.compilation.isPoisoned)
      for (const o of on(n.declarations)) {
        if (_r(o) || Vn(o)) {
          r.compilation.isPoisoned = !0;
          break;
        }
        fu(o) ? r.compilation.pipes.add(o) : r.compilation.directives.add(o);
      }
    for (const o of on(n.exports))
      if (_r(o)) {
        const s = this.getNgModuleScope(o);
        kn(s.exported.directives, r.exported.directives), kn(s.exported.pipes, r.exported.pipes), kn(s.exported.directives, r.compilation.directives), kn(s.exported.pipes, r.compilation.pipes);
      } else fu(o) ? r.exported.pipes.add(o) : r.exported.directives.add(o);
    return r;
  }
  /** @override */
  getStandaloneComponentScope(t, n) {
    if (this.standaloneComponentsScopeCache.has(t))
      return this.standaloneComponentsScopeCache.get(t);
    const r = this.computeStandaloneComponentScope(t, n);
    return this.standaloneComponentsScopeCache.set(t, r), r;
  }
  computeStandaloneComponentScope(t, n) {
    const r = {
      compilation: {
        // Standalone components are always able to self-reference.
        directives: /* @__PURE__ */ new Set([t]),
        pipes: /* @__PURE__ */ new Set(),
        ngModules: /* @__PURE__ */ new Set()
      }
    };
    for (const o of lt(n ?? [])) {
      const s = $(o);
      try {
        Vh(s, t);
      } catch {
        return r.compilation.isPoisoned = !0, r;
      }
      if (_r(s)) {
        r.compilation.ngModules.add(s);
        const i = this.getNgModuleScope(s);
        if (i.exported.isPoisoned)
          return r.compilation.isPoisoned = !0, r;
        kn(i.exported.directives, r.compilation.directives), kn(i.exported.pipes, r.compilation.pipes);
      } else if (fu(s))
        r.compilation.pipes.add(s);
      else if (hD(s) || ya(s))
        r.compilation.directives.add(s);
      else
        return r.compilation.isPoisoned = !0, r;
    }
    return r;
  }
  /** @override */
  isOrphanComponent(t) {
    const n = q(t);
    return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t));
  }
}
function kn(e, t) {
  for (const n of e)
    t.add(n);
}
const Do = new oF();
function cl(e, t, n) {
  ngDevMode && ht(k(), "Expecting to be called in first template pass only");
  let r = n ? e.styles : null, o = n ? e.classes : null, s = 0;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      const a = t[i];
      if (typeof a == "number")
        s = a;
      else if (s == 1)
        o = oh(o, a);
      else if (s == 2) {
        const c = a, u = t[++i];
        r = oh(r, c + ": " + u + ";");
      }
    }
  n ? e.styles = r : e.stylesWithoutHost = r, n ? e.classes = o : e.classesWithoutHost = o;
}
class cw extends vo {
  /**
   * @param ngModule The NgModuleRef to which all resolved factories are bound.
   */
  constructor(t) {
    super(), this.ngModule = t;
  }
  resolveComponentFactory(t) {
    ngDevMode && AO(t);
    const n = q(t);
    return new $i(n, this.ngModule);
  }
}
function pD(e, t) {
  const n = [];
  for (const r in e) {
    if (!e.hasOwnProperty(r))
      continue;
    const o = e[r];
    if (o === void 0)
      continue;
    const s = Array.isArray(o), i = s ? o[0] : o, a = s ? o[1] : Mn.None;
    t ? n.push({
      propName: i,
      templateName: r,
      isSignal: (a & Mn.SignalBased) !== 0
    }) : n.push({
      propName: i,
      templateName: r
    });
  }
  return n;
}
function sF(e) {
  const t = e.toLowerCase();
  return t === "svg" ? lI : t === "math" ? dI : null;
}
class $i extends il {
  get inputs() {
    const t = this.componentDef, n = t.inputTransforms, r = pD(t.inputs, !0);
    if (n !== null)
      for (const o of r)
        n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
    return r;
  }
  get outputs() {
    return pD(this.componentDef.outputs, !1);
  }
  /**
   * @param componentDef The component definition.
   * @param ngModule The NgModuleRef to which the factory is bound.
   */
  constructor(t, n) {
    super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = kC(t.selectors), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!n;
  }
  create(t, n, r, o) {
    var i;
    const s = U(null);
    try {
      if (ngDevMode && (typeof ngJitMode > "u" || ngJitMode) && ((i = this.componentDef.debugInfo) != null && i.forbidOrphanRendering) && Do.isOrphanComponent(this.componentType))
        throw new v(1001, `Orphan component found! Trying to render the component ${HA(this.componentType)} without first loading the NgModule that declares it. It is recommended to make this component standalone in order to avoid this error. If this is not possible now, import the component's NgModule in the appropriate NgModule, or the standalone component in which you are trying to render this component. If this is a lazy import, load the NgModule lazily as well and use its module injector.`);
      o = o || this.ngModule;
      let a = o instanceof Pt ? o : o == null ? void 0 : o.injector;
      a && this.componentDef.getStandaloneInjector !== null && (a = this.componentDef.getStandaloneInjector(a) || a);
      const c = a ? new ro(t, a) : t, u = c.get(im, null);
      if (u === null)
        throw new v(407, ngDevMode && "Angular was not able to inject a renderer (RendererFactory2). Likely this is due to a broken DI hierarchy. Make sure that any injector used to create this component has a correct parent.");
      const l = c.get(al, null), d = c.get(Ho, null), f = {
        rendererFactory: u,
        sanitizer: l,
        // We don't use inline effects (yet).
        inlineEffectRunner: null,
        changeDetectionScheduler: d
      }, h = u.createRenderer(null, this.componentDef), p = this.componentDef.selectors[0][0] || "div", g = r ? IN(h, r, this.componentDef.encapsulation, c) : yd(h, p, sF(p));
      let D = 512;
      this.componentDef.signals ? D |= 4096 : this.componentDef.onPush || (D |= 16);
      let E = null;
      g !== null && (E = Sg(
        g,
        c,
        !0
        /* isRootView */
      ));
      const m = Yg(0, null, null, 1, 0, null, null, null, null, null, null), T = Cd(null, m, null, D, null, null, f, h, c, null, E);
      lg(T);
      let R, Q, Se = null;
      try {
        const be = this.componentDef;
        let $t, su = null;
        be.findHostDirectiveDefs ? ($t = [], su = /* @__PURE__ */ new Map(), be.findHostDirectiveDefs(be, $t, su), $t.push(be), ngDevMode && rI($t)) : $t = [be];
        const VT = iF(T, g);
        Se = aF(VT, g, be, $t, T, f, h), Q = kc(m, M), g && lF(h, be, g, r), n !== void 0 && dF(Q, this.ngContentSelectors, n), R = uF(Se, be, $t, su, T, [lw]), wd(m, T, null);
      } catch (be) {
        throw Se !== null && _h(Se), _h(T), be;
      } finally {
        dg();
      }
      return new uw(this.componentType, R, Ni(Q, T), T, Q);
    } finally {
      U(s);
    }
  }
}
class uw extends aw {
  constructor(t, n, r, o, s) {
    super(), this.location = r, this._rootLView = o, this._tNode = s, this.previousInputValues = null, this.instance = n, this.hostView = this.changeDetectorRef = new Bs(
      o,
      void 0,
      !1
      /* notifyErrorHandler */
    ), this.componentType = t;
  }
  setInput(t, n) {
    const r = this._tNode.inputs;
    let o;
    if (r !== null && (o = r[t])) {
      if (this.previousInputValues ?? (this.previousInputValues = /* @__PURE__ */ new Map()), this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return;
      const s = this._rootLView;
      Xg(s[C], s, o, t, n), this.previousInputValues.set(t, n);
      const i = bt(this._tNode.index, s);
      zc(
        i,
        1
        /* NotificationSource.SetInput */
      );
    } else if (ngDevMode) {
      const s = W(this.componentType);
      let i = `Can't set value of the '${t}' input on the '${s}' component. `;
      i += `Make sure that the '${t}' property is annotated with @Input() or a mapped @Input('${t}') exists.`, Xb(i);
    }
  }
  get injector() {
    return new Ce(this._tNode, this._rootLView);
  }
  destroy() {
    this.hostView.destroy();
  }
  onDestroy(t) {
    this.hostView.onDestroy(t);
  }
}
function iF(e, t) {
  const n = e[C], r = M;
  return ngDevMode && _e(e, r), e[r] = t, Bo(n, r, 2, "#host", null);
}
function aF(e, t, n, r, o, s, i) {
  const a = o[C];
  cF(r, e, t, i);
  let c = null;
  t !== null && (c = Sg(t, o[Re]));
  const u = s.rendererFactory.createRenderer(t, n);
  let l = 16;
  n.signals ? l = 4096 : n.onPush && (l = 64);
  const d = Cd(o, w0(n), null, l, o[e.index], e, s, u, null, null, c);
  return a.firstCreatePass && kh(a, e, r.length - 1), Id(o, d), o[e.index] = d;
}
function cF(e, t, n, r) {
  for (const o of e)
    t.mergedAttrs = $a(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null && (cl(t, t.mergedAttrs, !0), n !== null && v0(r, n, t));
}
function uF(e, t, n, r, o, s) {
  const i = re();
  ngDevMode && b(i, "tNode should have been already created");
  const a = o[C], c = Ye(i, o);
  S0(a, o, i, n, null, r);
  for (let l = 0; l < n.length; l++) {
    const d = i.directiveStart + l, f = fo(o, a, d, i);
    qe(f, o);
  }
  T0(a, o, i), c && qe(c, o), ngDevMode && vr(i.componentOffset, -1, "componentOffset must be great than -1");
  const u = fo(o, a, i.directiveStart + i.componentOffset, i);
  if (e[he] = o[he] = u, s !== null)
    for (const l of s)
      l(u, t);
  return Zg(a, i, o), u;
}
function lF(e, t, n, r) {
  if (r)
    dh(e, n, ["ng-version", "18.2.14"]);
  else {
    const { attrs: o, classes: s } = dO(t.selectors[0]);
    o && dh(e, n, o), s && s.length > 0 && y0(e, n, s.join(" "));
  }
}
function dF(e, t, n) {
  const r = e.projection = [];
  for (let o = 0; o < t.length; o++) {
    const s = n[o];
    r.push(s != null ? Array.from(s) : null);
  }
}
function lw() {
  const e = re();
  ngDevMode && b(e, "TNode is required"), sd(y()[C], e);
}
const hv = class hv {
};
hv.__NG_ELEMENT_ID__ = fF;
let Fe = hv;
function fF() {
  const e = re();
  return fw(e, y());
}
const hF = Fe, dw = class extends hF {
  constructor(t, n, r) {
    super(), this._lContainer = t, this._hostTNode = n, this._hostLView = r;
  }
  get element() {
    return Ni(this._hostTNode, this._hostLView);
  }
  get injector() {
    return new Ce(this._hostTNode, this._hostLView);
  }
  /** @deprecated No replacement */
  get parentInjector() {
    const t = id(this._hostTNode, this._hostLView);
    if (fg(t)) {
      const n = Wa(t, this._hostLView), r = Ga(t);
      ngDevMode && oI(n, r);
      const o = n[C].data[
        r + 8
        /* NodeInjectorOffset.TNODE */
      ];
      return new Ce(o, n);
    } else
      return new Ce(null, this._hostLView);
  }
  clear() {
    for (; this.length > 0; )
      this.remove(this.length - 1);
  }
  get(t) {
    const n = gD(this._lContainer);
    return n !== null && n[t] || null;
  }
  get length() {
    return this._lContainer.length - ve;
  }
  createEmbeddedView(t, n, r) {
    let o, s;
    typeof r == "number" ? o = r : r != null && (o = r.index, s = r.injector);
    const i = yo(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, s, i);
    return this.insertImpl(a, o, mo(this._hostTNode, i)), a;
  }
  createComponent(t, n, r, o, s) {
    const i = t && !sa(t);
    let a;
    if (i)
      ngDevMode && O(typeof n != "object", !0, "It looks like Component factory was provided as the first argument and an options object as the second argument. This combination of arguments is incompatible. You can either change the first argument to provide Component type or change the second argument to be a number (representing an index at which to insert the new component's host view into this container)"), a = n;
    else {
      ngDevMode && (b(q(t), "Provided Component class doesn't contain Component definition. Please check whether provided class has @Component decorator."), O(typeof n != "number", !0, "It looks like Component type was provided as the first argument and a number (representing an index at which to insert the new component's host view into this container as the second argument. This combination of arguments is incompatible. Please use an object as the second argument instead."));
      const p = n || {};
      ngDevMode && p.environmentInjector && p.ngModuleRef && A("Cannot pass both environmentInjector and ngModuleRef options to createComponent()."), a = p.index, r = p.injector, o = p.projectableNodes, s = p.environmentInjector || p.ngModuleRef;
    }
    const c = i ? t : new $i(q(t)), u = r || this.parentInjector;
    if (!s && c.ngModule == null) {
      const g = (i ? u : this.parentInjector).get(Pt, null);
      g && (s = g);
    }
    const l = q(c.componentType ?? {}), d = yo(this._lContainer, (l == null ? void 0 : l.id) ?? null), f = (d == null ? void 0 : d.firstChild) ?? null, h = c.create(u, o, f, s);
    return this.insertImpl(h.hostView, a, mo(this._hostTNode, d)), h;
  }
  insert(t, n) {
    return this.insertImpl(t, n, !0);
  }
  insertImpl(t, n, r) {
    const o = t._lView;
    if (ngDevMode && t.destroyed)
      throw new Error("Cannot insert a destroyed View in a ViewContainer!");
    if (jO(o)) {
      const a = this.indexOf(t);
      if (a !== -1)
        this.detach(a);
      else {
        const c = o[Ne];
        ngDevMode && O(ze(c), !0, "An attached view should have its PARENT point to a container.");
        const u = new dw(c, c[Ve], c[Ne]);
        u.detach(u.indexOf(t));
      }
    }
    const s = this._adjustIndex(n), i = this._lContainer;
    return Li(i, o, s, r), t.attachToViewContainerRef(), OC(Cf(i), s, t), t;
  }
  move(t, n) {
    if (ngDevMode && t.destroyed)
      throw new Error("Cannot move a destroyed View in a ViewContainer!");
    return this.insert(t, n);
  }
  indexOf(t) {
    const n = gD(this._lContainer);
    return n !== null ? n.indexOf(t) : -1;
  }
  remove(t) {
    const n = this._adjustIndex(t, -1), r = Ka(this._lContainer, n);
    r && (qu(Cf(this._lContainer), n), vd(r[C], r));
  }
  detach(t) {
    const n = this._adjustIndex(t, -1), r = Ka(this._lContainer, n);
    return r && qu(Cf(this._lContainer), n) != null ? new Bs(r) : null;
  }
  _adjustIndex(t, n = 0) {
    return t == null ? this.length + n : (ngDevMode && (vr(t, -1, `ViewRef index must be positive, got ${t}`), Zn(t, this.length + 1 + n, "index")), t);
  }
};
function gD(e) {
  return e[Ku];
}
function Cf(e) {
  return e[Ku] || (e[Ku] = []);
}
function fw(e, t) {
  ngDevMode && Qe(
    e,
    15
    /* TNodeType.AnyRNode */
  );
  let n;
  const r = t[e.index];
  return ze(r) ? n = r : (n = A0(r, t, null, e), t[e.index] = n, Id(t, n)), hw(n, t, e, r), new dw(n, e, t);
}
function pF(e, t) {
  const n = e[L];
  ngDevMode && ngDevMode.rendererCreateComment++;
  const r = n.createComment(ngDevMode ? "container" : ""), o = Ye(t, e), s = zg(n, o);
  return go(n, s, r, gN(n, o), !1), r;
}
let hw = gw, cm = () => !1;
function pw(e, t, n) {
  return cm(e, t, n);
}
function gw(e, t, n, r) {
  if (e[cn])
    return;
  let o;
  n.type & 8 ? o = X(r) : o = pF(t, n), e[cn] = o;
}
function gF(e, t, n) {
  var l;
  if (e[cn] && e[Ha])
    return !0;
  const r = n[nt], o = t.index - M;
  if (!r || Qa(t) || Lo(r, o))
    return !1;
  const i = Oh(r, o), a = (l = r.data[to]) == null ? void 0 : l[o];
  ngDevMode && b(a, "Unexpected state: no hydration info available for a given TNode, which represents a view container.");
  const [c, u] = QR(i, a);
  return ngDevMode && (Gc(c, Node.COMMENT_NODE, null, n, t, !0), ko(c, !1)), e[cn] = c, e[Ha] = u, !0;
}
function mF(e, t, n, r) {
  cm(e, n, t) || gw(e, t, n, r);
}
function yF() {
  hw = mF, cm = gF;
}
class um {
  constructor(t) {
    this.queryList = t, this.matches = null;
  }
  clone() {
    return new um(this.queryList);
  }
  setDirty() {
    this.queryList.setDirty();
  }
}
class lm {
  constructor(t = []) {
    this.queries = t;
  }
  createEmbeddedView(t) {
    const n = t.queries;
    if (n !== null) {
      const r = t.contentQueries !== null ? t.contentQueries[0] : n.length, o = [];
      for (let s = 0; s < r; s++) {
        const i = n.getByIndex(s), a = this.queries[i.indexInDeclarationView];
        o.push(a.clone());
      }
      return new lm(o);
    }
    return null;
  }
  insertView(t) {
    this.dirtyQueriesWithMatches(t);
  }
  detachView(t) {
    this.dirtyQueriesWithMatches(t);
  }
  finishViewCreation(t) {
    this.dirtyQueriesWithMatches(t);
  }
  dirtyQueriesWithMatches(t) {
    for (let n = 0; n < this.queries.length; n++)
      pm(t, n).matches !== null && this.queries[n].setDirty();
  }
}
class mw {
  constructor(t, n, r = null) {
    this.flags = n, this.read = r, typeof t == "string" ? this.predicate = IF(t) : this.predicate = t;
  }
}
class dm {
  constructor(t = []) {
    this.queries = t;
  }
  elementStart(t, n) {
    ngDevMode && ht(t, "Queries should collect results on the first template pass only");
    for (let r = 0; r < this.queries.length; r++)
      this.queries[r].elementStart(t, n);
  }
  elementEnd(t) {
    for (let n = 0; n < this.queries.length; n++)
      this.queries[n].elementEnd(t);
  }
  embeddedTView(t) {
    let n = null;
    for (let r = 0; r < this.length; r++) {
      const o = n !== null ? n.length : 0, s = this.getByIndex(r).embeddedTView(t, o);
      s && (s.indexInDeclarationView = r, n !== null ? n.push(s) : n = [s]);
    }
    return n !== null ? new dm(n) : null;
  }
  template(t, n) {
    ngDevMode && ht(t, "Queries should collect results on the first template pass only");
    for (let r = 0; r < this.queries.length; r++)
      this.queries[r].template(t, n);
  }
  getByIndex(t) {
    return ngDevMode && _e(this.queries, t), this.queries[t];
  }
  get length() {
    return this.queries.length;
  }
  track(t) {
    this.queries.push(t);
  }
}
class fm {
  constructor(t, n = -1) {
    this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n;
  }
  elementStart(t, n) {
    this.isApplyingToNode(n) && this.matchTNode(t, n);
  }
  elementEnd(t) {
    this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
  }
  template(t, n) {
    this.elementStart(t, n);
  }
  embeddedTView(t, n) {
    return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new fm(this.metadata)) : null;
  }
  isApplyingToNode(t) {
    if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
      const n = this._declarationNodeIndex;
      let r = t.parent;
      for (; r !== null && r.type & 8 && r.index !== n; )
        r = r.parent;
      return n === (r !== null ? r.index : -1);
    }
    return this._appliesToNextNode;
  }
  matchTNode(t, n) {
    const r = this.metadata.predicate;
    if (Array.isArray(r))
      for (let o = 0; o < r.length; o++) {
        const s = r[o];
        this.matchTNodeWithReadOption(t, n, vF(n, s)), this.matchTNodeWithReadOption(t, n, Fu(n, t, s, !1, !1));
      }
    else
      r === Ue ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Fu(n, t, r, !1, !1));
  }
  matchTNodeWithReadOption(t, n, r) {
    if (r !== null) {
      const o = this.metadata.read;
      if (o !== null)
        if (o === Rt || o === Fe || o === Ue && n.type & 4)
          this.addMatch(n.index, -2);
        else {
          const s = Fu(n, t, o, !1, !1);
          s !== null && this.addMatch(n.index, s);
        }
      else
        this.addMatch(n.index, r);
    }
  }
  addMatch(t, n) {
    this.matches === null ? this.matches = [t, n] : this.matches.push(t, n);
  }
}
function vF(e, t) {
  const n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2)
      if (n[r] === t)
        return n[r + 1];
  }
  return null;
}
function DF(e, t) {
  return e.type & 11 ? Ni(e, t) : e.type & 4 ? Md(e, t) : null;
}
function EF(e, t, n, r) {
  return n === -1 ? DF(t, e) : n === -2 ? CF(e, t, r) : fo(e, e[C], n, t);
}
function CF(e, t, n) {
  if (n === Rt)
    return Ni(t, e);
  if (n === Ue)
    return Md(t, e);
  if (n === Fe)
    return ngDevMode && Qe(
      t,
      15
      /* TNodeType.AnyContainer */
    ), fw(t, e);
  ngDevMode && A(`Special token to read should be one of ElementRef, TemplateRef or ViewContainerRef but got ${J(n)}.`);
}
function yw(e, t, n, r) {
  const o = t[Ct].queries[r];
  if (o.matches === null) {
    const s = e.data, i = n.matches, a = [];
    for (let c = 0; i !== null && c < i.length; c += 2) {
      const u = i[c];
      if (u < 0)
        a.push(null);
      else {
        ngDevMode && _e(s, u);
        const l = s[u];
        a.push(EF(t, l, i[c + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function zh(e, t, n, r) {
  const o = e.queries.getByIndex(n), s = o.matches;
  if (s !== null) {
    const i = yw(e, t, o, n);
    for (let a = 0; a < s.length; a += 2) {
      const c = s[a];
      if (c > 0)
        r.push(i[a / 2]);
      else {
        const u = s[a + 1], l = t[-c];
        ngDevMode && jt(l);
        for (let d = ve; d < l.length; d++) {
          const f = l[d];
          f[ao] === f[Ne] && zh(f[C], f, u, r);
        }
        if (l[uo] !== null) {
          const d = l[uo];
          for (let f = 0; f < d.length; f++) {
            const h = d[f];
            zh(h[C], h, u, r);
          }
        }
      }
    }
  }
  return r;
}
function hm(e, t) {
  return ngDevMode && b(e[Ct], "LQueries should be defined when trying to load a query"), ngDevMode && _e(e[Ct].queries, t), e[Ct].queries[t].queryList;
}
function vw(e, t, n) {
  const r = new ld(
    (n & 4) === 4
    /* QueryFlags.emitDistinctChangesOnly */
  );
  return MN(e, t, r, r.destroy), (t[Ct] ?? (t[Ct] = new lm())).queries.push(new um(r)) - 1;
}
function Dw(e, t, n) {
  ngDevMode && ie(t, "Expecting flags");
  const r = k();
  return r.firstCreatePass && (Cw(r, new mw(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)), vw(r, y(), t);
}
function Ew(e, t, n, r) {
  ngDevMode && ie(n, "Expecting flags");
  const o = k();
  if (o.firstCreatePass) {
    const s = re();
    Cw(o, new mw(t, n, r), s.index), bF(o, e), (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return vw(o, y(), n);
}
function IF(e) {
  return e.split(",").map((t) => t.trim());
}
function Cw(e, t, n) {
  e.queries === null && (e.queries = new dm()), e.queries.track(new fm(t, n));
}
function bF(e, t) {
  const n = e.contentQueries || (e.contentQueries = []), r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}
function pm(e, t) {
  return ngDevMode && b(e.queries, "TQueries must be defined to retrieve a TQuery"), e.queries.getByIndex(t);
}
function Iw(e, t) {
  const n = e[C], r = pm(n, t);
  return r.crossesNgTemplate ? zh(n, e, t, []) : yw(n, e, r, t);
}
const mD = /* @__PURE__ */ new Set();
function We(e) {
  var t;
  mD.has(e) || (mD.add(e), (t = performance == null ? void 0 : performance.mark) == null || t.call(performance, "mark_feature_usage", { detail: { feature: e } }));
}
function gm(e) {
  return typeof e == "function" && e[ft] !== void 0;
}
function wF(e) {
  return null;
}
function bw(e, t) {
  We("NgSignals");
  const n = l1(e), r = n[ft];
  return t != null && t.equal && (r.equal = t.equal), n.set = (o) => Ul(r, o), n.update = (o) => d1(r, o), n.asReadonly = ww.bind(n), ngDevMode && (n.toString = () => `[Signal: ${n()}]`), n;
}
function ww() {
  const e = this[ft];
  if (e.readonlyFn === void 0) {
    const t = () => this();
    t[ft] = e, e.readonlyFn = t;
  }
  return e.readonlyFn;
}
function _w(e) {
  return gm(e) && typeof e.set == "function";
}
function mm(e, t) {
  let n;
  const r = eC(() => {
    n._dirtyCounter();
    const o = _F(n, e);
    if (t && o === void 0)
      throw new v(-951, ngDevMode && "Child query result is required but no value is available.");
    return o;
  });
  return n = r[ft], n._dirtyCounter = bw(0), n._flatValue = void 0, ngDevMode && (r.toString = () => "[Query Signal]"), r;
}
function Mw() {
  return mm(
    /* firstOnly */
    !0,
    /* required */
    !1
  );
}
function Sw() {
  return mm(
    /* firstOnly */
    !0,
    /* required */
    !0
  );
}
function Tw() {
  return mm(
    /* firstOnly */
    !1,
    /* required */
    !1
  );
}
function Aw(e, t) {
  const n = e[ft];
  n._lView = y(), n._queryIndex = t, n._queryList = hm(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update((r) => r + 1));
}
function _F(e, t) {
  const n = e._lView, r = e._queryIndex;
  if (n === void 0 || r === void 0 || n[P] & 4)
    return t ? void 0 : K;
  const o = hm(n, r), s = Iw(n, r);
  return o.reset(s, tb), t ? o.first : o._changesDetected || e._flatValue === void 0 ? e._flatValue = o.toArray() : e._flatValue;
}
function yD(e, t) {
  return ngDevMode && pt(ym), Mw();
}
function MF(e, t) {
  return ngDevMode && pt(ym), Sw();
}
const ym = (yD.required = MF, yD);
function Ow(e, t) {
  return ngDevMode && pt(Ow), Tw();
}
function vD(e, t) {
  return ngDevMode && pt(Pw), Mw();
}
function SF(e, t) {
  return ngDevMode && pt(xw), Sw();
}
const Pw = (vD.required = SF, vD);
function xw(e, t) {
  return Tw();
}
function Nw(e) {
  const t = Object.create(EC), n = new yg();
  t.value = e;
  function r() {
    return $l(t), DD(t.value), t.value;
  }
  return r[ft] = t, r.asReadonly = ww.bind(r), r.set = (o) => {
    t.equal(t.value, o) || (Ul(t, o), n.emit(o));
  }, r.update = (o) => {
    DD(t.value), r.set(o(t.value));
  }, r.subscribe = n.subscribe.bind(n), r.destroyRef = n.destroyRef, ngDevMode && (r.toString = () => `[Model Signal: ${r()}]`), r;
}
function DD(e) {
  if (e === Vl)
    throw new v(952, ngDevMode && "Model is required but no value is available yet.");
}
function ED(e) {
  return ngDevMode && pt(vm), Nw(e);
}
function TF() {
  return ngDevMode && pt(vm), Nw(Vl);
}
const vm = (ED.required = TF, ED), Rw = !0;
class qc {
}
const Dm = yr("ContentChildren", (e, t = {}) => ({
  selector: e,
  first: !1,
  isViewQuery: !1,
  descendants: !1,
  emitDistinctChangesOnly: Rw,
  ...t
}), qc), AF = yr("ContentChild", (e, t = {}) => ({
  selector: e,
  first: !0,
  isViewQuery: !1,
  descendants: !0,
  ...t
}), qc), OF = yr("ViewChildren", (e, t = {}) => ({
  selector: e,
  first: !1,
  isViewQuery: !0,
  descendants: !0,
  emitDistinctChangesOnly: Rw,
  ...t
}), qc), PF = yr("ViewChild", (e, t) => ({
  selector: e,
  first: !0,
  isViewQuery: !0,
  descendants: !0,
  ...t
}), qc);
function Fw(e) {
  const t = [], n = /* @__PURE__ */ new Map();
  function r(o) {
    let s = n.get(o);
    if (!s) {
      const i = e(o);
      n.set(o, s = i.then(kF));
    }
    return s;
  }
  return Hs.forEach((o, s) => {
    var u, l;
    const i = [];
    o.templateUrl && i.push(r(o.templateUrl).then((d) => {
      o.template = d;
    }));
    const a = typeof o.styles == "string" ? [o.styles] : o.styles || [];
    if (o.styles = a, o.styleUrl && ((u = o.styleUrls) != null && u.length))
      throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");
    if ((l = o.styleUrls) != null && l.length) {
      const d = o.styles.length, f = o.styleUrls;
      o.styleUrls.forEach((h, p) => {
        a.push(""), i.push(r(h).then((g) => {
          a[d + p] = g, f.splice(f.indexOf(h), 1), f.length == 0 && (o.styleUrls = void 0);
        }));
      });
    } else o.styleUrl && i.push(r(o.styleUrl).then((d) => {
      a.push(d), o.styleUrl = void 0;
    }));
    const c = Promise.all(i).then(() => LF(s));
    t.push(c);
  }), Lw(), Promise.all(t).then(() => {
  });
}
let Hs = /* @__PURE__ */ new Map();
const tc = /* @__PURE__ */ new Set();
function xF(e, t) {
  kw(t) && (Hs.set(e, t), tc.add(e));
}
function NF(e) {
  return tc.has(e);
}
function kw(e) {
  return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls && e.styleUrls.length || e.styleUrl);
}
function Lw() {
  const e = Hs;
  return Hs = /* @__PURE__ */ new Map(), e;
}
function RF(e) {
  tc.clear(), e.forEach((t, n) => tc.add(n)), Hs = e;
}
function FF() {
  return Hs.size === 0;
}
function kF(e) {
  return typeof e == "string" ? e : e.text();
}
function LF(e) {
  tc.delete(e);
}
const Gh = /* @__PURE__ */ new Map();
let jw = !0;
function jF(e, t, n) {
  if (t && t !== n && jw)
    throw new Error(`Duplicate module registered for ${e} - ${J(t)} vs ${J(t.name)}`);
}
function Em(e, t) {
  const n = Gh.get(t) || null;
  jF(t, n, e), Gh.set(t, e);
}
function $w(e) {
  return Gh.get(e);
}
function $F(e) {
  jw = !e;
}
function Bw(e, t, n) {
  const r = y(), o = ge(), s = Ye(o, r);
  if (o.type === 2 && t.toLowerCase() === "iframe") {
    const i = s;
    i.src = "", i.srcdoc = Ri(""), Uc(r[L], i);
    const a = ngDevMode && `Angular has detected that the \`${n}\` was applied as a binding to an <iframe>${md(r)}. For security reasons, the \`${n}\` can be set on an <iframe> as a static attribute only. 
To fix this, switch the \`${n}\` binding to a static attribute in a template or in host bindings section.`;
    throw new v(-910, a);
  }
  return e;
}
function Hw(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function Cm(e) {
  let t = Hw(e.type), n = !0;
  const r = [e];
  for (; t; ) {
    let o;
    if (xt(e))
      o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp)
        throw new v(903, ngDevMode && `Directives cannot inherit Components. Directive ${W(e.type)} is attempting to extend component ${W(t)}`);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        const i = e;
        i.inputs = hu(e.inputs), i.inputTransforms = hu(e.inputTransforms), i.declaredInputs = hu(e.declaredInputs), i.outputs = hu(e.outputs);
        const a = o.hostBindings;
        a && zF(e, a);
        const c = o.viewQuery, u = o.contentQueries;
        if (c && UF(e, c), u && VF(e, u), BF(e, o), PA(e.outputs, o.outputs), xt(o) && o.data.animation) {
          const l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      const s = o.features;
      if (s)
        for (let i = 0; i < s.length; i++) {
          const a = s[i];
          a && a.ngInherit && a(e), a === Cm && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  HF(r);
}
function BF(e, t) {
  for (const n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
      continue;
    const r = t.inputs[n];
    if (r !== void 0 && (e.inputs[n] = r, e.declaredInputs[n] = t.declaredInputs[n], t.inputTransforms !== null)) {
      const o = Array.isArray(r) ? r[0] : r;
      if (!t.inputTransforms.hasOwnProperty(o))
        continue;
      e.inputTransforms ?? (e.inputTransforms = {}), e.inputTransforms[o] = t.inputTransforms[o];
    }
  }
}
function HF(e) {
  let t = 0, n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    o.hostVars = t += o.hostVars, o.hostAttrs = $a(o.hostAttrs, n = $a(n, o.hostAttrs));
  }
}
function hu(e) {
  return e === zt ? {} : e === K ? [] : e;
}
function UF(e, t) {
  const n = e.viewQuery;
  n ? e.viewQuery = (r, o) => {
    t(r, o), n(r, o);
  } : e.viewQuery = t;
}
function VF(e, t) {
  const n = e.contentQueries;
  n ? e.contentQueries = (r, o, s) => {
    t(r, o, s), n(r, o, s);
  } : e.contentQueries = t;
}
function zF(e, t) {
  const n = e.hostBindings;
  n ? e.hostBindings = (r, o) => {
    t(r, o), n(r, o);
  } : e.hostBindings = t;
}
const GF = [
  // The child class should use the providers of its parent.
  "providersResolver"
  // Not listed here are any fields which are handled by the `ɵɵInheritDefinitionFeature`, such
  // as inputs, outputs, and host binding functions.
], WF = [
  // The child class should use the template function of its parent, including all template
  // semantics.
  "template",
  "decls",
  "consts",
  "vars",
  "onPush",
  "ngContentSelectors",
  // The child class should use the CSS styles of its parent, including all styling semantics.
  "styles",
  "encapsulation",
  // The child class should be checked by the runtime in the same way as its parent.
  "schemas"
];
function Uw(e) {
  let t = Hw(e.type), n;
  xt(e) ? n = t.ɵcmp : n = t.ɵdir;
  const r = e;
  for (const o of GF)
    r[o] = n[o];
  if (xt(n))
    for (const o of WF)
      r[o] = n[o];
}
function Vw(e) {
  const t = (n) => {
    const r = Array.isArray(e);
    n.hostDirectives === null ? (n.findHostDirectiveDefs = zw, n.hostDirectives = r ? e.map(Wh) : [e]) : r ? n.hostDirectives.unshift(...e.map(Wh)) : n.hostDirectives.unshift(e);
  };
  return t.ngInherit = !0, t;
}
function zw(e, t, n) {
  if (e.hostDirectives !== null)
    for (const r of e.hostDirectives)
      if (typeof r == "function") {
        const o = r();
        for (const s of o)
          CD(Wh(s), t, n);
      } else
        CD(r, t, n);
}
function CD(e, t, n) {
  const r = Be(e.directive);
  (typeof ngDevMode > "u" || ngDevMode) && qF(e, r), ZF(r.declaredInputs, e.inputs), zw(r, t, n), n.set(r, e), t.push(r);
}
function Wh(e) {
  return typeof e == "function" ? { directive: $(e), inputs: zt, outputs: zt } : {
    directive: $(e.directive),
    inputs: ID(e.inputs),
    outputs: ID(e.outputs)
  };
}
function ID(e) {
  if (e === void 0 || e.length === 0)
    return zt;
  const t = {};
  for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1];
  return t;
}
function ZF(e, t) {
  for (const n in t)
    if (t.hasOwnProperty(n)) {
      const r = t[n], o = e[n];
      (typeof ngDevMode > "u" || ngDevMode) && e.hasOwnProperty(r) && O(e[r], e[n], `Conflicting host directive input alias ${n}.`), e[r] = o;
    }
}
function qF(e, t) {
  const n = e.directive;
  if (t === null)
    throw q(n) !== null ? new v(310, `Host directive ${n.name} cannot be a component.`) : new v(307, `Could not resolve metadata for host directive ${n.name}. Make sure that the ${n.name} class is annotated with an @Directive decorator.`);
  if (!t.standalone)
    throw new v(308, `Host directive ${t.type.name} must be standalone.`);
  bD("input", t, e.inputs), bD("output", t, e.outputs);
}
function bD(e, t, n) {
  const r = t.type.name, o = e === "input" ? t.inputs : t.outputs;
  for (const s in n)
    if (n.hasOwnProperty(s)) {
      if (!o.hasOwnProperty(s))
        throw new v(311, `Directive ${r} does not have an ${e} with a public name of ${s}.`);
      const i = n[s];
      if (o.hasOwnProperty(i) && i !== s)
        throw new v(312, `Cannot alias ${e} ${s} of host directive ${r} to ${i}, because it already has a different ${e} with the same public name.`);
    }
}
function Gw(e) {
  const t = e.inputConfig, n = {};
  for (const r in t)
    if (t.hasOwnProperty(r)) {
      const o = t[r];
      Array.isArray(o) && o[3] && (n[r] = o[3]);
    }
  e.inputTransforms = n;
}
class tr {
}
class Ww {
}
function Im(e, t) {
  return new Pd(e, t ?? null, []);
}
const QF = Im;
class Pd extends tr {
  constructor(t, n, r, o = !0) {
    super(), this.ngModuleType = t, this._parent = n, this._bootstrapComponents = [], this.destroyCbs = [], this.componentFactoryResolver = new cw(this);
    const s = It(t);
    ngDevMode && b(s, `NgModule '${J(t)}' is not a subtype of 'NgModuleType'.`), this._bootstrapComponents = on(s.bootstrap), this._r3Injector = qI(t, n, [
      { provide: tr, useValue: this },
      {
        provide: vo,
        useValue: this.componentFactoryResolver
      },
      ...r
    ], J(t), /* @__PURE__ */ new Set(["environment"])), o && this.resolveInjectorInitializers();
  }
  resolveInjectorInitializers() {
    this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType);
  }
  get injector() {
    return this._r3Injector;
  }
  destroy() {
    ngDevMode && b(this.destroyCbs, "NgModule already destroyed");
    const t = this._r3Injector;
    !t.destroyed && t.destroy(), this.destroyCbs.forEach((n) => n()), this.destroyCbs = null;
  }
  onDestroy(t) {
    ngDevMode && b(this.destroyCbs, "NgModule already destroyed"), this.destroyCbs.push(t);
  }
}
class xd extends Ww {
  constructor(t) {
    super(), this.moduleType = t;
  }
  create(t) {
    return new Pd(this.moduleType, t, []);
  }
}
function YF(e, t, n) {
  return new Pd(e, t, n, !1);
}
class Zw extends tr {
  constructor(t) {
    super(), this.componentFactoryResolver = new cw(this), this.instance = null;
    const n = new Ai([
      ...t.providers,
      { provide: tr, useValue: this },
      { provide: vo, useValue: this.componentFactoryResolver }
    ], t.parent || Jl(), t.debugName, /* @__PURE__ */ new Set(["environment"]));
    this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
}
function bm(e, t, n = null) {
  return new Zw({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0
  }).injector;
}
const Aa = class Aa {
  constructor() {
    this.cachedInjectors = /* @__PURE__ */ new Map();
  }
  getOrCreateInjector(t, n, r, o) {
    if (!this.cachedInjectors.has(t)) {
      const s = r.length > 0 ? bm(r, n, o) : null;
      this.cachedInjectors.set(t, s);
    }
    return this.cachedInjectors.get(t);
  }
  ngOnDestroy() {
    try {
      for (const t of this.cachedInjectors.values())
        t !== null && t.destroy();
    } finally {
      this.cachedInjectors.clear();
    }
  }
};
Aa.ɵprov = se({
  token: Aa,
  providedIn: "environment",
  factory: () => new Aa()
});
let Zh = Aa;
function ul(e) {
  return wm(e) ? Array.isArray(e) || !(e instanceof Map) && // JS Map are iterables but return entries as [k, v]
  Symbol.iterator in e : !1;
}
function KF(e, t, n) {
  const r = e[Symbol.iterator](), o = t[Symbol.iterator]();
  for (; ; ) {
    const s = r.next(), i = o.next();
    if (s.done && i.done)
      return !0;
    if (s.done || i.done || !n(s.value, i.value))
      return !1;
  }
}
function JF(e, t) {
  if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      t(e[n]);
  else {
    const n = e[Symbol.iterator]();
    let r;
    for (; !(r = n.next()).done; )
      t(r.value);
  }
}
function wm(e) {
  return e !== null && (typeof e == "function" || typeof e == "object");
}
function _m(e, t) {
  const n = ul(e), r = ul(t);
  return n && r ? KF(e, t, _m) : !n && (e && (typeof e == "object" || typeof e == "function")) && !r && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t);
}
function vn(e, t, n) {
  return e[t] = n;
}
function Qc(e, t) {
  return ngDevMode && _e(e, t), ngDevMode && Si(e[t], x, "Stored value should never be NO_CHANGE."), e[t];
}
function Oe(e, t, n) {
  ngDevMode && Si(n, x, "Incoming value should never be NO_CHANGE."), ngDevMode && Zn(t, e.length, "Slot should have been initialized to NO_CHANGE");
  const r = e[t];
  if (Object.is(r, n))
    return !1;
  if (ngDevMode && Fo()) {
    const o = r !== x ? r : void 0;
    if (!_m(o, n)) {
      const s = uN(e, t, o, n);
      cN(r === x, s.oldValue, s.newValue, s.propName, e);
    }
    return !1;
  }
  return e[t] = n, !0;
}
function Eo(e, t, n, r) {
  const o = Oe(e, t, n);
  return Oe(e, t + 1, r) || o;
}
function Nd(e, t, n, r, o) {
  const s = Eo(e, t, n, r);
  return Oe(e, t + 2, o) || s;
}
function Ft(e, t, n, r, o, s) {
  const i = Eo(e, t, n, r);
  return Eo(e, t + 2, o, s) || i;
}
function Bi(e) {
  return (e.flags & 32) === 32;
}
function XF(e, t, n, r, o, s, i, a, c) {
  ngDevMode && ht(t), ngDevMode && ngDevMode.firstCreatePass++;
  const u = t.consts, l = Bo(t, e, 4, i || null, a || null);
  Kg(t, n, l, Nt(u, c)), sd(t, l);
  const d = l.tView = Yg(
    2,
    l,
    r,
    o,
    s,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    u,
    null
    /* ssrId */
  );
  return t.queries !== null && (t.queries.template(t, l), d.queries = t.queries.embeddedTView(l)), l;
}
function nc(e, t, n, r, o, s, i, a, c, u) {
  const l = n + M, d = t.firstCreatePass ? XF(l, t, e, r, o, s, i, a, c) : t.data[l];
  Wt(d, !1);
  const f = qw(t, e, d, n);
  jc() && Dd(t, e, f, d), qe(f, e);
  const h = A0(f, e, f, d);
  return e[l] = h, Id(e, h), pw(h, d, e), Xl(d) && qg(t, e, d), c != null && Qg(e, d, u), d;
}
function Mm(e, t, n, r, o, s, i, a) {
  const c = y(), u = k(), l = Nt(u.consts, s);
  return nc(c, u, e, t, n, r, o, l, i, a), Mm;
}
let qw = Qw;
function Qw(e, t, n, r) {
  return gn(!0), t[L].createComment(ngDevMode ? "container" : "");
}
function ek(e, t, n, r) {
  var l;
  const o = t[nt], s = !o || Ro() || Bi(n) || Lo(o, r);
  if (gn(s), s)
    return Qw(e, t);
  const i = ((l = o.data[ia]) == null ? void 0 : l[r]) ?? null;
  i !== null && n.tView !== null && (n.tView.ssrId === null ? n.tView.ssrId = i : ngDevMode && O(n.tView.ssrId, i, "Unexpected value of the `ssrId` for this TView"));
  const a = Zc(o, e, t, n);
  ngDevMode && Sd(a, t, n), fd(o, r, a);
  const c = Ag(o, r), u = Od(c, a);
  return ngDevMode && (Gc(u, Node.COMMENT_NODE, null, t, n), ko(u)), u;
}
function tk() {
  qw = ek;
}
var we;
(function(e) {
  e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED";
})(we || (we = {}));
const wD = 0, nk = 1;
var ye;
(function(e) {
  e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error";
})(ye || (ye = {}));
var Us;
(function(e) {
  e[e.Initial = -1] = "Initial";
})(Us || (Us = {}));
const xs = 0, Yc = 1, ua = 2, pu = 3, Yw = 4, Kw = 5;
var ll;
(function(e) {
  e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough";
})(ll || (ll = {}));
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
function Rd(e, t, n) {
  const r = e === 1 ? Kw : Yw;
  t[r] === null && (t[r] = []), t[r].push(n);
}
function qh(e, t) {
  const n = e === 1 ? Kw : Yw, r = t[n];
  if (r !== null) {
    for (const o of r)
      o();
    t[n] = null;
  }
}
function Jw(e) {
  qh(1, e), qh(0, e);
}
function Sm(e, t) {
  if (_p() !== null)
    throw new v(-602, ngDevMode && `${e.name}() cannot be called from within a reactive context.${t ? ` ${t}` : ""}`);
}
var Hn;
(function(e) {
  e[e.EarlyRead = 0] = "EarlyRead", e[e.Write = 1] = "Write", e[e.MixedReadWrite = 2] = "MixedReadWrite", e[e.Read = 3] = "Read";
})(Hn || (Hn = {}));
const Oa = class Oa {
  constructor() {
    this.impl = null;
  }
  execute() {
    var t;
    (t = this.impl) == null || t.execute();
  }
};
Oa.ɵprov = se({
  token: Oa,
  providedIn: "root",
  factory: () => new Oa()
});
let rc = Oa;
const Ar = class Ar {
  constructor() {
    this.ngZone = I(oe), this.scheduler = I(Ho), this.errorHandler = I(Nn, { optional: !0 }), this.sequences = /* @__PURE__ */ new Set(), this.deferredRegistrations = /* @__PURE__ */ new Set(), this.executing = !1;
  }
  /**
   * Run the sequence of phases of hooks, once through. As a result of executing some hooks, more
   * might be scheduled.
   */
  execute() {
    var t;
    this.executing = !0;
    for (const n of Ar.PHASES)
      for (const r of this.sequences)
        if (!(r.erroredOrDestroyed || !r.hooks[n]))
          try {
            r.pipelinedValue = this.ngZone.runOutsideAngular(() => r.hooks[n](r.pipelinedValue));
          } catch (o) {
            r.erroredOrDestroyed = !0, (t = this.errorHandler) == null || t.handleError(o);
          }
    this.executing = !1;
    for (const n of this.sequences)
      n.afterRun(), n.once && (this.sequences.delete(n), n.destroy());
    for (const n of this.deferredRegistrations)
      this.sequences.add(n);
    this.deferredRegistrations.size > 0 && this.scheduler.notify(
      7
      /* NotificationSource.DeferredRenderHook */
    ), this.deferredRegistrations.clear();
  }
  register(t) {
    this.executing ? this.deferredRegistrations.add(t) : (this.sequences.add(t), this.scheduler.notify(
      6
      /* NotificationSource.RenderHook */
    ));
  }
  unregister(t) {
    this.executing && this.sequences.has(t) ? (t.erroredOrDestroyed = !0, t.pipelinedValue = void 0, t.once = !0) : (this.sequences.delete(t), this.deferredRegistrations.delete(t));
  }
};
Ar.PHASES = [
  Hn.EarlyRead,
  Hn.Write,
  Hn.MixedReadWrite,
  Hn.Read
], Ar.ɵprov = se({
  token: Ar,
  providedIn: "root",
  factory: () => new Ar()
});
let Qh = Ar;
class rk {
  constructor(t, n, r, o) {
    this.impl = t, this.hooks = n, this.once = r, this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.unregisterOnDestroy = o == null ? void 0 : o.onDestroy(() => this.destroy());
  }
  afterRun() {
    this.erroredOrDestroyed = !1, this.pipelinedValue = void 0;
  }
  destroy() {
    var t;
    this.impl.unregister(this), (t = this.unregisterOnDestroy) == null || t.call(this);
  }
}
function Yh(e, t) {
  ngDevMode && Sm(Yh, "Call `afterRender` outside of a reactive context. For example, schedule the render callback inside the component constructor`."), !(t != null && t.injector) && pt(Yh);
  const n = (t == null ? void 0 : t.injector) ?? I($e);
  return Dt(n) ? (We("NgAfterRender"), Xw(
    e,
    n,
    t,
    /* once */
    !1
  )) : e_;
}
function dl(e, t) {
  !(t != null && t.injector) && pt(dl);
  const n = (t == null ? void 0 : t.injector) ?? I($e);
  return Dt(n) ? (We("NgAfterNextRender"), Xw(
    e,
    n,
    t,
    /* once */
    !0
  )) : e_;
}
function ok(e, t) {
  if (e instanceof Function) {
    const n = [void 0, void 0, void 0, void 0];
    return n[t] = e, n;
  } else
    return [
      e.earlyRead,
      e.write,
      e.mixedReadWrite,
      e.read
    ];
}
function Xw(e, t, n, r) {
  const o = t.get(rc);
  o.impl ?? (o.impl = t.get(Qh));
  const s = (n == null ? void 0 : n.phase) ?? Hn.MixedReadWrite, i = (n == null ? void 0 : n.manualCleanup) !== !0 ? t.get(Kn) : null, a = new rk(o.impl, ok(e, s), r, i);
  return o.impl.register(a), a;
}
const e_ = {
  destroy() {
  }
};
function Fd(e) {
  return e + 1;
}
function Cr(e, t) {
  const n = e[C], r = Fd(t.index);
  return ngDevMode && Rc(n, r), e[r];
}
function sk(e, t, n) {
  const r = e[C], o = Fd(t);
  ngDevMode && Rc(r, o), e[o] = n;
}
function _t(e, t) {
  const n = Fd(t.index);
  return ngDevMode && Rc(e, n), e.data[n];
}
function ik(e, t, n) {
  const r = Fd(t);
  ngDevMode && Rc(e, r), e.data[r] = n;
}
function ak(e, t, n) {
  const r = t[C], o = _t(r, n);
  switch (e) {
    case ye.Complete:
      return o.primaryTmplIndex;
    case ye.Loading:
      return o.loadingTmplIndex;
    case ye.Error:
      return o.errorTmplIndex;
    case ye.Placeholder:
      return o.placeholderTmplIndex;
    default:
      return ngDevMode && A(`Unexpected defer block state: ${e}`), null;
  }
}
function Kh(e, t) {
  var n, r;
  return t === ye.Placeholder ? ((n = e.placeholderBlockConfig) == null ? void 0 : n[wD]) ?? null : t === ye.Loading ? ((r = e.loadingBlockConfig) == null ? void 0 : r[wD]) ?? null : null;
}
function t_(e) {
  var t;
  return ((t = e.loadingBlockConfig) == null ? void 0 : t[nk]) ?? null;
}
function _D(e, t) {
  if (!e || e.length === 0)
    return t;
  const n = new Set(e);
  for (const r of t)
    n.add(r);
  return e.length === n.size ? e : Array.from(n);
}
function ck(e, t) {
  const n = t.primaryTmplIndex + M;
  return kc(e, n);
}
function n_(e) {
  O(e.loadingState, we.COMPLETE, "Expecting all deferred dependencies to be loaded.");
}
function uk(e) {
  return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number";
}
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
const fl = {
  passive: !0,
  capture: !0
}, If = /* @__PURE__ */ new WeakMap(), bf = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap(), MD = ["click", "keydown"], SD = ["mouseenter", "focusin"];
let Xt = null, wf = 0;
class Tm {
  constructor() {
    this.callbacks = /* @__PURE__ */ new Set(), this.listener = () => {
      for (const t of this.callbacks)
        t();
    };
  }
}
function r_(e, t) {
  let n = bf.get(e);
  if (!n) {
    n = new Tm(), bf.set(e, n);
    for (const r of MD)
      e.addEventListener(r, n.listener, fl);
  }
  return n.callbacks.add(t), () => {
    const { callbacks: r, listener: o } = n;
    if (r.delete(t), r.size === 0) {
      bf.delete(e);
      for (const s of MD)
        e.removeEventListener(s, o, fl);
    }
  };
}
function o_(e, t) {
  let n = If.get(e);
  if (!n) {
    n = new Tm(), If.set(e, n);
    for (const r of SD)
      e.addEventListener(r, n.listener, fl);
  }
  return n.callbacks.add(t), () => {
    const { callbacks: r, listener: o } = n;
    if (r.delete(t), r.size === 0) {
      for (const s of SD)
        e.removeEventListener(s, o, fl);
      If.delete(e);
    }
  };
}
function s_(e, t, n) {
  const r = n.get(oe);
  let o = Vo.get(e);
  return Xt = Xt || r.runOutsideAngular(() => new IntersectionObserver((s) => {
    for (const i of s)
      i.isIntersecting && Vo.has(i.target) && r.run(Vo.get(i.target).listener);
  })), o || (o = new Tm(), r.runOutsideAngular(() => Xt.observe(e)), Vo.set(e, o), wf++), o.callbacks.add(t), () => {
    Vo.has(e) && (o.callbacks.delete(t), o.callbacks.size === 0 && (Xt == null || Xt.unobserve(e), Vo.delete(e), wf--), wf === 0 && (Xt == null || Xt.disconnect(), Xt = null));
  };
}
function lk(e, t, n) {
  if (n == null)
    return e;
  if (n >= 0)
    return pI(n, e);
  const r = e[t.index];
  ngDevMode && jt(r);
  const o = r[ve] ?? null;
  if (ngDevMode && o !== null) {
    const i = Cr(e, t)[Yc];
    O(i, ye.Placeholder, "Expected a placeholder to be rendered in this defer block."), pn(o);
  }
  return o;
}
function dk(e, t) {
  const n = Fc(M + t, e);
  return ngDevMode && RA(n), n;
}
function Hi(e, t, n, r, o, s, i) {
  const a = e[Re], c = a.get(oe);
  function u() {
    if (ph(e))
      return;
    const l = Cr(e, t), d = l[Yc];
    if (d !== Us.Initial && d !== ye.Placeholder)
      return;
    const f = lk(e, t, r);
    if (!f) {
      dl({ read: u }, { injector: a });
      return;
    }
    if (ph(f))
      return;
    const h = dk(f, n), p = o(h, () => {
      c.run(() => {
        e !== f && rg(f, p), s();
      });
    }, a);
    e !== f && rd(f, p), Rd(i, l, p);
  }
  dl({ read: u }, { injector: a });
}
function i_(e, t) {
  const r = t[Re].get(Jh), o = () => r.remove(e);
  return r.add(e), o;
}
const fk = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, hk = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, Pa = class Pa {
  constructor() {
    this.executingCallbacks = !1, this.idleId = null, this.current = /* @__PURE__ */ new Set(), this.deferred = /* @__PURE__ */ new Set(), this.ngZone = I(oe), this.requestIdleCallbackFn = fk().bind(globalThis), this.cancelIdleCallbackFn = hk().bind(globalThis);
  }
  add(t) {
    (this.executingCallbacks ? this.deferred : this.current).add(t), this.idleId === null && this.scheduleIdleCallback();
  }
  remove(t) {
    const { current: n, deferred: r } = this;
    n.delete(t), r.delete(t), n.size === 0 && r.size === 0 && this.cancelIdleCallback();
  }
  scheduleIdleCallback() {
    const t = () => {
      this.cancelIdleCallback(), this.executingCallbacks = !0;
      for (const n of this.current)
        n();
      if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (const n of this.deferred)
          this.current.add(n);
        this.deferred.clear(), this.scheduleIdleCallback();
      }
    };
    this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(t));
  }
  cancelIdleCallback() {
    this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null);
  }
  ngOnDestroy() {
    this.cancelIdleCallback(), this.current.clear(), this.deferred.clear();
  }
};
Pa.ɵprov = se({
  token: Pa,
  providedIn: "root",
  factory: () => new Pa()
});
let Jh = Pa;
function a_(e) {
  return (t, n) => c_(e, t, n);
}
function c_(e, t, n) {
  const o = n[Re].get(Xh), s = () => o.remove(t);
  return o.add(e, t), s;
}
const xa = class xa {
  constructor() {
    this.executingCallbacks = !1, this.timeoutId = null, this.invokeTimerAt = null, this.current = [], this.deferred = [];
  }
  add(t, n) {
    const r = this.executingCallbacks ? this.deferred : this.current;
    this.addToQueue(r, Date.now() + t, n), this.scheduleTimer();
  }
  remove(t) {
    const { current: n, deferred: r } = this;
    this.removeFromQueue(n, t) === -1 && this.removeFromQueue(r, t), n.length === 0 && r.length === 0 && this.clearTimeout();
  }
  addToQueue(t, n, r) {
    let o = t.length;
    for (let s = 0; s < t.length; s += 2)
      if (t[s] > n) {
        o = s;
        break;
      }
    PC(t, o, n, r);
  }
  removeFromQueue(t, n) {
    let r = -1;
    for (let o = 0; o < t.length; o += 2)
      if (t[o + 1] === n) {
        r = o;
        break;
      }
    return r > -1 && Mv(t, r, 2), r;
  }
  scheduleTimer() {
    const t = () => {
      this.clearTimeout(), this.executingCallbacks = !0;
      const r = [...this.current], o = Date.now();
      for (let i = 0; i < r.length; i += 2) {
        const a = r[i], c = r[i + 1];
        if (a <= o)
          c();
        else
          break;
      }
      let s = -1;
      for (let i = 0; i < this.current.length && this.current[i] <= o; i += 2)
        s = i + 1;
      if (s >= 0 && Mv(this.current, 0, s + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let i = 0; i < this.deferred.length; i += 2) {
          const a = this.deferred[i], c = this.deferred[i + 1];
          this.addToQueue(this.current, a, c);
        }
        this.deferred.length = 0;
      }
      this.scheduleTimer();
    };
    if (this.current.length > 0) {
      const r = Date.now(), o = this.current[0];
      if (this.timeoutId === null || // Reschedule a timer in case a queue contains an item with
      // an earlier timestamp and the delta is more than an average
      // frame duration.
      this.invokeTimerAt && this.invokeTimerAt - o > 16) {
        this.clearTimeout();
        const s = Math.max(o - r, 16);
        this.invokeTimerAt = o, this.timeoutId = setTimeout(t, s);
      }
    }
  }
  clearTimeout() {
    this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  ngOnDestroy() {
    this.clearTimeout(), this.current.length = 0, this.deferred.length = 0;
  }
};
xa.ɵprov = se({
  token: xa,
  providedIn: "root",
  factory: () => new xa()
});
let Xh = xa;
const u_ = new F("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), l_ = new F(ngDevMode ? "DEFER_BLOCK_CONFIG" : "");
function Am(e) {
  const t = e.get(l_, null, { optional: !0 });
  return (t == null ? void 0 : t.behavior) === ll.Manual ? !1 : Dt(e);
}
let hl = null;
function d_(e, t, n, r) {
  const o = e.consts;
  n != null && (t.placeholderBlockConfig = Nt(o, n)), r != null && (t.loadingBlockConfig = Nt(o, r)), hl === null && (hl = gk);
}
function f_(e, t, n, r, o, s, i, a, c) {
  const u = y(), l = k(), d = e + M, f = nc(u, l, e, null, 0, 0);
  if (l.firstCreatePass) {
    We("NgDefer");
    const D = {
      primaryTmplIndex: t,
      loadingTmplIndex: r ?? null,
      placeholderTmplIndex: o ?? null,
      errorTmplIndex: s ?? null,
      placeholderBlockConfig: null,
      loadingBlockConfig: null,
      dependencyResolverFn: n ?? null,
      loadingState: we.NOT_STARTED,
      loadingPromise: null,
      providers: null
    };
    c == null || c(l, D, a, i), ik(l, d, D);
  }
  const h = u[d];
  pw(h, f, u);
  const p = [
    null,
    // NEXT_DEFER_BLOCK_STATE
    Us.Initial,
    // DEFER_BLOCK_STATE
    null,
    // STATE_IS_FROZEN_UNTIL
    null,
    // LOADING_AFTER_CLEANUP_FN
    null,
    // TRIGGER_CLEANUP_FNS
    null
    // PREFETCH_TRIGGER_CLEANUP_FNS
  ];
  sk(u, d, p);
  const g = () => Jw(p);
  Rd(0, p, () => rg(u, g)), rd(u, g);
}
function h_(e) {
  const t = y(), n = qt();
  if (Oe(t, n, e)) {
    const r = U(null);
    try {
      const o = !!e, s = ge(), a = Cr(t, s)[Yc];
      o === !1 && a === Us.Initial ? Ui(t, s) : o === !0 && (a === Us.Initial || a === ye.Placeholder) && Vi(t, s);
    } finally {
      U(r);
    }
  }
}
function p_(e) {
  const t = y(), n = qt();
  if (Oe(t, n, e)) {
    const r = U(null);
    try {
      const o = !!e, s = t[C], i = ge(), a = _t(s, i);
      o === !0 && a.loadingState === we.NOT_STARTED && Kc(a, t, i);
    } finally {
      U(r);
    }
  }
}
function g_() {
  S_(i_);
}
function m_() {
  T_(i_);
}
function y_() {
  const e = y(), t = re(), n = e[C], r = e[Re], o = _t(n, t);
  (!Am(r) || o.loadingTmplIndex === null) && Ui(e, t), Vi(e, t);
}
function v_() {
  const e = y(), t = re(), n = e[C], r = _t(n, t);
  r.loadingState === we.NOT_STARTED && kd(r, e, t);
}
function D_(e) {
  S_(a_(e));
}
function E_(e) {
  T_(a_(e));
}
function C_(e, t) {
  const n = y(), r = re();
  Ui(n, r), Hi(
    n,
    r,
    e,
    t,
    o_,
    () => Vi(n, r),
    0
    /* TriggerType.Regular */
  );
}
function I_(e, t) {
  const n = y(), r = re(), o = n[C], s = _t(o, r);
  s.loadingState === we.NOT_STARTED && Hi(
    n,
    r,
    e,
    t,
    o_,
    () => Kc(s, n, r),
    1
    /* TriggerType.Prefetch */
  );
}
function b_(e, t) {
  const n = y(), r = re();
  Ui(n, r), Hi(
    n,
    r,
    e,
    t,
    r_,
    () => Vi(n, r),
    0
    /* TriggerType.Regular */
  );
}
function w_(e, t) {
  const n = y(), r = re(), o = n[C], s = _t(o, r);
  s.loadingState === we.NOT_STARTED && Hi(
    n,
    r,
    e,
    t,
    r_,
    () => Kc(s, n, r),
    1
    /* TriggerType.Prefetch */
  );
}
function __(e, t) {
  const n = y(), r = re();
  Ui(n, r), Hi(
    n,
    r,
    e,
    t,
    s_,
    () => Vi(n, r),
    0
    /* TriggerType.Regular */
  );
}
function M_(e, t) {
  const n = y(), r = re(), o = n[C], s = _t(o, r);
  s.loadingState === we.NOT_STARTED && Hi(
    n,
    r,
    e,
    t,
    s_,
    () => Kc(s, n, r),
    1
    /* TriggerType.Prefetch */
  );
}
function S_(e) {
  const t = y(), n = re();
  if (Ui(t, n), Dt(t[Re])) {
    const r = e(() => Vi(t, n), t), o = Cr(t, n);
    Rd(0, o, r);
  }
}
function T_(e) {
  const t = y();
  if (Dt(t[Re])) {
    const n = re(), r = t[C], o = _t(r, n);
    if (o.loadingState === we.NOT_STARTED) {
      const s = Cr(t, n), a = e(() => Kc(o, t, n), t);
      Rd(1, s, a);
    }
  }
}
function In(e, t, n, r = !1) {
  const o = n[Ne], s = o[C];
  if (ph(o))
    return;
  ngDevMode && ot(t, o);
  const i = Cr(o, t);
  ngDevMode && b(i, "Expected a defer block state defined");
  const a = i[Yc];
  if (AD(a, e) && AD(i[xs] ?? -1, e)) {
    const c = o[Re], u = _t(s, t), l = !r && Dt(c) && (t_(u) !== null || Kh(u, ye.Loading) !== null || Kh(u, ye.Placeholder));
    ngDevMode && l && b(hl, "Expected scheduling function to be defined");
    const d = l ? hl : A_;
    try {
      d(e, i, n, t, o);
    } catch (f) {
      bd(o, f);
    }
  }
}
function _f(e, t, n) {
  return e.get(Zh).getOrCreateInjector(t, e, n, ngDevMode ? "DeferBlock Injector" : "");
}
function pk(e, t, n) {
  if (e instanceof ro) {
    const o = e.injector, s = e.parentInjector, i = _f(s, t, n);
    return new ro(o, i);
  }
  const r = e.get(Pt);
  if (r !== e) {
    const o = _f(r, t, n);
    return new ro(e, o);
  }
  return _f(e, t, n);
}
function A_(e, t, n, r, o) {
  const s = ak(e, o, r);
  if (s !== null) {
    t[Yc] = e;
    const i = o[C], a = s + M, c = kc(i, a), u = 0;
    em(n, u);
    let l;
    if (e === ye.Complete) {
      const h = _t(i, r), p = h.providers;
      p && p.length > 0 && (l = pk(o[Re], h, p));
    }
    const d = yo(n, c.tView.ssrId), f = ki(o, c, null, {
      dehydratedView: d,
      injector: l
    });
    Li(n, f, u, mo(c, d)), zc(
      f,
      2
      /* NotificationSource.DeferBlockStateUpdate */
    );
  }
}
function gk(e, t, n, r, o) {
  const s = Date.now(), i = o[C], a = _t(i, r);
  if (t[ua] === null || t[ua] <= s) {
    t[ua] = null;
    const c = t_(a), u = t[pu] !== null;
    if (e === ye.Loading && c !== null && !u) {
      t[xs] = e;
      const l = TD(c, t, r, n, o);
      t[pu] = l;
    } else {
      e > ye.Loading && u && (t[pu](), t[pu] = null, t[xs] = null), A_(e, t, n, r, o);
      const l = Kh(a, e);
      l !== null && (t[ua] = s + l, TD(l, t, r, n, o));
    }
  } else
    t[xs] = e;
}
function TD(e, t, n, r, o) {
  return c_(e, () => {
    const i = t[xs];
    t[ua] = null, t[xs] = null, i !== null && In(i, n, r);
  }, o);
}
function AD(e, t) {
  return e < t;
}
function Kc(e, t, n) {
  t[Re] && Am(t[Re]) && kd(e, t, n);
}
function kd(e, t, n) {
  const r = t[Re], o = t[C];
  if (e.loadingState !== we.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve();
  const s = Cr(t, n), i = ck(o, e);
  e.loadingState = we.IN_PROGRESS, qh(1, s);
  let a = e.dependencyResolverFn;
  if (ngDevMode) {
    const l = r.get(u_, null, {
      optional: !0
    });
    l && (a = l.intercept(a));
  }
  const c = r.get(un), u = c.add();
  return a ? (e.loadingPromise = Promise.allSettled(a()).then((l) => {
    let d = !1;
    const f = [], h = [];
    for (const p of l)
      if (p.status === "fulfilled") {
        const g = p.value, D = q(g) || Be(g);
        if (D)
          f.push(D);
        else {
          const E = vt(g);
          E && h.push(E);
        }
      } else {
        d = !0;
        break;
      }
    if (e.loadingPromise = null, c.remove(u), d) {
      if (e.loadingState = we.FAILED, e.errorTmplIndex === null) {
        const p = ngDevMode ? md(t) : "", g = new v(750, ngDevMode && `Loading dependencies for \`@defer\` block failed, but no \`@error\` block was configured${p}. Consider using the \`@error\` block to render an error state.`);
        bd(t, g);
      }
    } else {
      e.loadingState = we.COMPLETE;
      const p = i.tView;
      if (f.length > 0) {
        p.directiveRegistry = _D(p.directiveRegistry, f);
        const g = f.map((E) => E.type), D = qp(!1, ...g);
        e.providers = D;
      }
      h.length > 0 && (p.pipeRegistry = _D(p.pipeRegistry, h));
    }
  }), e.loadingPromise) : (e.loadingPromise = Promise.resolve().then(() => {
    e.loadingPromise = null, e.loadingState = we.COMPLETE, c.remove(u);
  }), e.loadingPromise);
}
function Ui(e, t) {
  const n = e[t.index];
  ngDevMode && jt(n), In(ye.Placeholder, t, n);
}
function OD(e, t, n) {
  ngDevMode && b(e.loadingPromise, "Expected loading Promise to exist on this defer block"), e.loadingPromise.then(() => {
    e.loadingState === we.COMPLETE ? (ngDevMode && n_(e), In(ye.Complete, t, n)) : e.loadingState === we.FAILED && In(ye.Error, t, n);
  });
}
function Vi(e, t) {
  const n = e[C], r = e[t.index], o = e[Re];
  if (ngDevMode && jt(r), !Am(o))
    return;
  const s = Cr(e, t), i = _t(n, t);
  switch (Jw(s), i.loadingState) {
    case we.NOT_STARTED:
      In(ye.Loading, t, r), kd(i, e, t), i.loadingState === we.IN_PROGRESS && OD(i, t, r);
      break;
    case we.IN_PROGRESS:
      In(ye.Loading, t, r), OD(i, t, r);
      break;
    case we.COMPLETE:
      ngDevMode && n_(i), In(ye.Complete, t, r);
      break;
    case we.FAILED:
      In(ye.Error, t, r);
      break;
    default:
      ngDevMode && A("Unknown defer block state");
  }
}
function Om(e, t, n, r) {
  const o = y(), s = qt();
  if (Oe(o, s, t)) {
    const i = k(), a = ge();
    yn(a, o, e, t, n, r), ngDevMode && Ie(i.data, a, "attr." + e, s);
  }
  return Om;
}
function zi(e, t) {
  ngDevMode && Zn(2, t.length, "should have at least 3 values"), ngDevMode && O(t.length % 2, 1, "should have an odd number of values");
  let n = !1, r = ae();
  for (let s = 1; s < t.length; s += 2)
    n = Oe(e, r++, t[s]) || n;
  if (wI(r), !n)
    return x;
  let o = t[0];
  for (let s = 1; s < t.length; s += 2)
    o += H(t[s]) + t[s + 1];
  return o;
}
function Gi(e, t, n, r) {
  return Oe(e, qt(), n) ? t + H(n) + r : x;
}
function Wi(e, t, n, r, o, s) {
  const i = ae(), a = Eo(e, i, n, o);
  return xn(2), a ? t + H(n) + r + H(o) + s : x;
}
function Zi(e, t, n, r, o, s, i, a) {
  const c = ae(), u = Nd(e, c, n, o, i);
  return xn(3), u ? t + H(n) + r + H(o) + s + H(i) + a : x;
}
function qi(e, t, n, r, o, s, i, a, c, u) {
  const l = ae(), d = Ft(e, l, n, o, i, c);
  return xn(4), d ? t + H(n) + r + H(o) + s + H(i) + a + H(c) + u : x;
}
function Qi(e, t, n, r, o, s, i, a, c, u, l, d) {
  const f = ae();
  let h = Ft(e, f, n, o, i, c);
  return h = Oe(e, f + 4, l) || h, xn(5), h ? t + H(n) + r + H(o) + s + H(i) + a + H(c) + u + H(l) + d : x;
}
function Yi(e, t, n, r, o, s, i, a, c, u, l, d, f, h) {
  const p = ae();
  let g = Ft(e, p, n, o, i, c);
  return g = Eo(e, p + 4, l, f) || g, xn(6), g ? t + H(n) + r + H(o) + s + H(i) + a + H(c) + u + H(l) + d + H(f) + h : x;
}
function Ki(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g) {
  const D = ae();
  let E = Ft(e, D, n, o, i, c);
  return E = Nd(e, D + 4, l, f, p) || E, xn(7), E ? t + H(n) + r + H(o) + s + H(i) + a + H(c) + u + H(l) + d + H(f) + h + H(p) + g : x;
}
function Ji(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D, E) {
  const m = ae();
  let T = Ft(e, m, n, o, i, c);
  return T = Ft(e, m + 4, l, f, p, D) || T, xn(8), T ? t + H(n) + r + H(o) + s + H(i) + a + H(c) + u + H(l) + d + H(f) + h + H(p) + g + H(D) + E : x;
}
function Pm(e, t, n, r, o, s) {
  const i = y(), a = Gi(i, t, n, r);
  if (a !== x) {
    const c = ge();
    yn(c, i, e, a, o, s), ngDevMode && Ie(k().data, c, "attr." + e, ae() - 1, t, r);
  }
  return Pm;
}
function xm(e, t, n, r, o, s, i, a) {
  const c = y(), u = Wi(c, t, n, r, o, s);
  if (u !== x) {
    const l = ge();
    yn(l, c, e, u, i, a), ngDevMode && Ie(k().data, l, "attr." + e, ae() - 2, t, r, s);
  }
  return xm;
}
function Nm(e, t, n, r, o, s, i, a, c, u) {
  const l = y(), d = Zi(l, t, n, r, o, s, i, a);
  if (d !== x) {
    const f = ge();
    yn(f, l, e, d, c, u), ngDevMode && Ie(k().data, f, "attr." + e, ae() - 3, t, r, s, a);
  }
  return Nm;
}
function Rm(e, t, n, r, o, s, i, a, c, u, l, d) {
  const f = y(), h = qi(f, t, n, r, o, s, i, a, c, u);
  if (h !== x) {
    const p = ge();
    yn(p, f, e, h, l, d), ngDevMode && Ie(k().data, p, "attr." + e, ae() - 4, t, r, s, a, u);
  }
  return Rm;
}
function Fm(e, t, n, r, o, s, i, a, c, u, l, d, f, h) {
  const p = y(), g = Qi(p, t, n, r, o, s, i, a, c, u, l, d);
  if (g !== x) {
    const D = ge();
    yn(D, p, e, g, f, h), ngDevMode && Ie(k().data, D, "attr." + e, ae() - 5, t, r, s, a, u, d);
  }
  return Fm;
}
function km(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g) {
  const D = y(), E = Yi(D, t, n, r, o, s, i, a, c, u, l, d, f, h);
  if (E !== x) {
    const m = ge();
    yn(m, D, e, E, p, g), ngDevMode && Ie(k().data, m, "attr." + e, ae() - 6, t, r, s, a, u, d, h);
  }
  return km;
}
function Lm(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D, E) {
  const m = y(), T = Ki(m, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g);
  if (T !== x) {
    const R = ge();
    yn(R, m, e, T, D, E), ngDevMode && Ie(k().data, R, "attr." + e, ae() - 7, t, r, s, a, u, d, h, g);
  }
  return Lm;
}
function jm(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D, E, m, T) {
  const R = y(), Q = Ji(R, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D, E);
  if (Q !== x) {
    const Se = ge();
    yn(Se, R, e, Q, m, T), ngDevMode && Ie(k().data, Se, "attr." + e, ae() - 8, t, r, s, a, u, d, h, g, E);
  }
  return jm;
}
function $m(e, t, n, r) {
  const o = y(), s = zi(o, t);
  if (s !== x) {
    const i = ge();
    if (yn(i, o, e, s, n, r), ngDevMode) {
      const a = [t[0]];
      for (let c = 2; c < t.length; c += 2)
        a.push(t[c]);
      Ie(k().data, i, "attr." + e, ae() - a.length + 1, ...a);
    }
  }
  return $m;
}
function gu(e, t) {
  return ngDevMode && ka(
    e,
    0,
    32767
    /* StylingRange.UNSIGNED_MASK */
  ), ngDevMode && ka(
    t,
    0,
    32767
    /* StylingRange.UNSIGNED_MASK */
  ), e << 17 | t << 2;
}
function Co(e) {
  return ngDevMode && ie(e, "expected number"), e >> 17 & 32767;
}
function mk(e) {
  return ngDevMode && ie(e, "expected number"), (e & 2) == 2;
}
function yk(e, t) {
  return ngDevMode && ie(e, "expected number"), ngDevMode && ka(
    t,
    0,
    32767
    /* StylingRange.UNSIGNED_MASK */
  ), e & 131071 | t << 17;
}
function ep(e) {
  return ngDevMode && ie(e, "expected number"), e | 2;
}
function Io(e) {
  return ngDevMode && ie(e, "expected number"), (e & 131068) >> 2;
}
function Mf(e, t) {
  return ngDevMode && ie(e, "expected number"), ngDevMode && ka(
    t,
    0,
    32767
    /* StylingRange.UNSIGNED_MASK */
  ), e & -131069 | //
  t << 2;
}
function vk(e) {
  return ngDevMode && ie(e, "expected number"), (e & 1) === 1;
}
function tp(e) {
  return ngDevMode && ie(e, "expected number"), e | 1;
}
function Dk(e, t, n, r, o, s) {
  ngDevMode && Xp(k());
  let i = s ? t.classBindings : t.styleBindings, a = Co(i), c = Io(i);
  e[r] = n;
  let u = !1, l;
  if (Array.isArray(n)) {
    const d = n;
    l = d[1], (l === null || Nc(d, l) > 0) && (u = !0);
  } else
    l = n;
  if (o)
    if (c !== 0) {
      const f = Co(e[a + 1]);
      e[r + 1] = gu(f, a), f !== 0 && (e[f + 1] = Mf(e[f + 1], r)), e[a + 1] = yk(e[a + 1], r);
    } else
      e[r + 1] = gu(a, 0), a !== 0 && (e[a + 1] = Mf(e[a + 1], r)), a = r;
  else
    e[r + 1] = gu(c, 0), ngDevMode && O(a !== 0 && c === 0, !1, "Adding template bindings after hostBindings is not allowed."), a === 0 ? a = r : e[c + 1] = Mf(e[c + 1], r), c = r;
  u && (e[r + 1] = ep(e[r + 1])), PD(e, l, r, !0), PD(e, l, r, !1), Ek(t, l, e, r, s), i = gu(a, c), s ? t.classBindings = i : t.styleBindings = i;
}
function Ek(e, t, n, r, o) {
  const s = o ? e.residualClasses : e.residualStyles;
  s != null && typeof t == "string" && Nc(s, t) >= 0 && (n[r + 1] = tp(n[r + 1]));
}
function PD(e, t, n, r) {
  const o = e[n + 1], s = t === null;
  let i = r ? Co(o) : Io(o), a = !1;
  for (; i !== 0 && (a === !1 || s); ) {
    ngDevMode && _e(e, i);
    const c = e[i], u = e[i + 1];
    Ck(c, t) && (a = !0, e[i + 1] = r ? tp(u) : ep(u)), i = r ? Co(u) : Io(u);
  }
  a && (e[n + 1] = r ? ep(o) : tp(o));
}
function Ck(e, t) {
  return ngDevMode && Lt(Array.isArray(t), !0, "Expected that 'tStylingKey' has been unwrapped"), e === null || // If the cursor is `null` it means that we have map at that
  // location so we must assume that we have a match.
  t == null || // If `tStylingKey` is `null` then it is a map therefor assume that it
  // contains a match.
  (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Nc(e, t) >= 0 : !1;
}
const ke = {
  textEnd: 0,
  key: 0,
  keyEnd: 0,
  value: 0,
  valueEnd: 0
};
function O_(e) {
  return e.substring(ke.key, ke.keyEnd);
}
function Ik(e) {
  return e.substring(ke.value, ke.valueEnd);
}
function bk(e) {
  return N_(e), P_(e, Vs(e, 0, ke.textEnd));
}
function P_(e, t) {
  const n = ke.textEnd;
  return n === t ? -1 : (t = ke.keyEnd = _k(e, ke.key = t, n), Vs(e, t, n));
}
function wk(e) {
  return N_(e), x_(e, Vs(e, 0, ke.textEnd));
}
function x_(e, t) {
  const n = ke.textEnd;
  let r = ke.key = Vs(e, t, n);
  return n === r ? -1 : (r = ke.keyEnd = Mk(e, r, n), r = xD(
    e,
    r,
    n,
    58
    /* CharCode.COLON */
  ), r = ke.value = Vs(e, r, n), r = ke.valueEnd = Sk(e, r, n), xD(
    e,
    r,
    n,
    59
    /* CharCode.SEMI_COLON */
  ));
}
function N_(e) {
  ke.key = 0, ke.keyEnd = 0, ke.value = 0, ke.valueEnd = 0, ke.textEnd = e.length;
}
function Vs(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; )
    t++;
  return t;
}
function _k(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; )
    t++;
  return t;
}
function Mk(e, t, n) {
  let r;
  for (; t < n && ((r = e.charCodeAt(t)) === 45 || r === 95 || (r & -33) >= 65 && (r & -33) <= 90 || r >= 48 && r <= 57); )
    t++;
  return t;
}
function xD(e, t, n, r) {
  return t = Vs(e, t, n), t < n && (ngDevMode && e.charCodeAt(t) !== r && R_(e, String.fromCharCode(r), t), t++), t;
}
function Sk(e, t, n) {
  let r = -1, o = -1, s = -1, i = t, a = i;
  for (; i < n; ) {
    const c = e.charCodeAt(i++);
    if (c === 59)
      return a;
    c === 34 || c === 39 ? a = i = ND(e, c, i, n) : t === i - 4 && // We have seen only 4 characters so far "URL(" (Ignore "foo_URL()")
    s === 85 && o === 82 && r === 76 && c === 40 ? a = i = ND(e, 41, i, n) : c > 32 && (a = i), s = o, o = r, r = c & -33;
  }
  return a;
}
function ND(e, t, n, r) {
  let o = -1, s = n;
  for (; s < r; ) {
    const i = e.charCodeAt(s++);
    if (i == t && o !== 92)
      return s;
    i == 92 && o === 92 ? o = 0 : o = i;
  }
  throw ngDevMode ? R_(e, String.fromCharCode(t), r) : new Error();
}
function R_(e, t, n) {
  throw ngDevMode && O(typeof e == "string", !0, "String expected here"), A(`Malformed style at location ${n} in string '` + e.substring(0, n) + "[>>" + e.substring(n, n + 1) + "<<]" + e.slice(n + 1) + `'. Expecting '${t}'.`);
}
function Bm(e, t, n) {
  const r = y(), o = qt();
  if (Oe(r, o, t)) {
    const s = k(), i = ge();
    gt(s, i, r, e, t, r[L], n, !1), ngDevMode && Ie(s.data, i, e, o);
  }
  return Bm;
}
function np(e, t, n, r, o) {
  const s = t.inputs, i = o ? "class" : "style";
  Xg(e, n, s[i], i, r);
}
function Hm(e, t, n) {
  return Yt(e, t, n, !1), Hm;
}
function Um(e, t) {
  return Yt(e, t, null, !0), Um;
}
function Qt(e) {
  Kt(j_, Tk, e, !1);
}
function Tk(e, t) {
  for (let n = wk(t); n >= 0; n = x_(t, n))
    j_(e, O_(t), Ik(t));
}
function F_(e) {
  Kt(Rk, Dn, e, !0);
}
function Dn(e, t) {
  for (let n = bk(t); n >= 0; n = P_(t, n))
    wt(e, O_(t), !0);
}
function Yt(e, t, n, r) {
  const o = y(), s = k(), i = xn(2);
  if (s.firstUpdatePass && L_(s, e, i, r), t !== x && Oe(o, i, t)) {
    const a = s.data[Ge()];
    $_(s, a, o, o[L], e, o[i + 1] = kk(t, n), r, i);
  }
}
function Kt(e, t, n, r) {
  const o = k(), s = xn(2);
  o.firstUpdatePass && L_(o, null, s, r);
  const i = y();
  if (n !== x && Oe(i, s, n)) {
    const a = o.data[Ge()];
    if (B_(a, r) && !k_(o, s)) {
      if (ngDevMode) {
        const u = o.data[s];
        O(Array.isArray(u) ? u[1] : u, !1, "Styling linked list shadow input should be marked as 'false'");
      }
      let c = r ? a.classesWithoutHost : a.stylesWithoutHost;
      ngDevMode && r === !1 && c !== null && O(c.endsWith(";"), !0, "Expecting static portion to end with ';'"), c !== null && (n = oh(c, n || "")), np(o, a, i, n, r);
    } else
      Fk(o, a, i, i[L], i[s + 1], i[s + 1] = Nk(e, t, n), r, s);
  }
}
function k_(e, t) {
  return t >= e.expandoStartIndex;
}
function L_(e, t, n, r) {
  ngDevMode && Xp(e);
  const o = e.data;
  if (o[n + 1] === null) {
    const s = o[Ge()];
    ngDevMode && b(s, "TNode expected");
    const i = k_(e, n);
    B_(s, r) && t === null && !i && (t = !1), t = Ak(o, s, t, r), Dk(o, s, t, n, i, r);
  }
}
function Ak(e, t, n, r) {
  const o = cg(e);
  let s = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 && (n = Sf(null, e, t, n, r), n = oc(n, t.attrs, r), s = null);
  else {
    const i = t.directiveStylingLast;
    if (i === -1 || e[i] !== o)
      if (n = Sf(o, e, t, n, r), s === null) {
        let c = Ok(e, t, r);
        c !== void 0 && Array.isArray(c) && (c = Sf(null, e, t, c[1], r), c = oc(c, t.attrs, r), Pk(e, t, r, c));
      } else
        s = xk(e, t, r);
  }
  return s !== void 0 && (r ? t.residualClasses = s : t.residualStyles = s), n;
}
function Ok(e, t, n) {
  const r = n ? t.classBindings : t.styleBindings;
  if (Io(r) !== 0)
    return e[Co(r)];
}
function Pk(e, t, n, r) {
  const o = n ? t.classBindings : t.styleBindings;
  ngDevMode && Lt(Io(o), 0, "Expecting to have at least one template styling binding."), e[Co(o)] = r;
}
function xk(e, t, n) {
  let r;
  const o = t.directiveEnd;
  ngDevMode && Lt(t.directiveStylingLast, -1, "By the time this function gets called at least one hostBindings-node styling instruction must have executed.");
  for (let s = 1 + t.directiveStylingLast; s < o; s++) {
    const i = e[s].hostAttrs;
    r = oc(r, i, n);
  }
  return oc(r, t.attrs, n);
}
function Sf(e, t, n, r, o) {
  let s = null;
  const i = n.directiveEnd;
  let a = n.directiveStylingLast;
  for (a === -1 ? a = n.directiveStart : a++; a < i && (s = t[a], ngDevMode && b(s, "expected to be defined"), r = oc(r, s.hostAttrs, o), s !== e); )
    a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function oc(e, t, n) {
  const r = n ? 1 : 2;
  let o = -1;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      typeof i == "number" ? o = i : o === r && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), wt(e, i, n ? !0 : t[++s]));
    }
  return e === void 0 ? null : e;
}
function Nk(e, t, n) {
  if (n == null || n === "")
    return K;
  const r = [], o = mn(n);
  if (Array.isArray(o))
    for (let s = 0; s < o.length; s++)
      e(r, o[s], !0);
  else if (typeof o == "object")
    for (const s in o)
      o.hasOwnProperty(s) && e(r, s, o[s]);
  else typeof o == "string" ? t(r, o) : ngDevMode && A("Unsupported styling type " + typeof o + ": " + o);
  return r;
}
function j_(e, t, n) {
  wt(e, t, mn(n));
}
function Rk(e, t, n) {
  const r = String(t);
  r !== "" && !r.includes(" ") && wt(e, r, n);
}
function Fk(e, t, n, r, o, s, i, a) {
  o === x && (o = K);
  let c = 0, u = 0, l = 0 < o.length ? o[0] : null, d = 0 < s.length ? s[0] : null;
  for (; l !== null || d !== null; ) {
    ngDevMode && Zn(c, 999, "Are we stuck in infinite loop?"), ngDevMode && Zn(u, 999, "Are we stuck in infinite loop?");
    const f = c < o.length ? o[c + 1] : void 0, h = u < s.length ? s[u + 1] : void 0;
    let p = null, g;
    l === d ? (c += 2, u += 2, f !== h && (p = d, g = h)) : d === null || l !== null && l < d ? (c += 2, p = l) : (ngDevMode && b(d, "Expecting to have a valid key"), u += 2, p = d, g = h), p !== null && $_(e, t, n, r, p, g, i, a), l = c < o.length ? o[c] : null, d = u < s.length ? s[u] : null;
  }
}
function $_(e, t, n, r, o, s, i, a) {
  if (!(t.type & 3))
    return;
  const c = e.data, u = c[a + 1], l = vk(u) ? RD(c, t, n, o, Io(u), i) : void 0;
  if (!pl(l)) {
    pl(s) || mk(u) && (s = RD(c, null, n, o, a, i));
    const d = Fc(Ge(), n);
    vN(r, i, d, o, s);
  }
}
function RD(e, t, n, r, o, s) {
  const i = t === null;
  let a;
  for (; o > 0; ) {
    const c = e[o], u = Array.isArray(c), l = u ? c[1] : c, d = l === null;
    let f = n[o + 1];
    f === x && (f = d ? K : void 0);
    let h = d ? lf(f, r) : l === r ? f : void 0;
    if (u && !pl(h) && (h = lf(c, r)), pl(h) && (a = h, i))
      return a;
    const p = e[o + 1];
    o = i ? Co(p) : Io(p);
  }
  if (t !== null) {
    let c = s ? t.residualClasses : t.residualStyles;
    c != null && (a = lf(c, r));
  }
  return a;
}
function pl(e) {
  return e !== void 0;
}
function kk(e, t) {
  return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = J(mn(e)))), e;
}
function B_(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
function H_(e, t, n) {
  const r = y(), o = Gi(r, e, t, n);
  Kt(wt, Dn, o, !0);
}
function U_(e, t, n, r, o) {
  const s = y(), i = Wi(s, e, t, n, r, o);
  Kt(wt, Dn, i, !0);
}
function V_(e, t, n, r, o, s, i) {
  const a = y(), c = Zi(a, e, t, n, r, o, s, i);
  Kt(wt, Dn, c, !0);
}
function z_(e, t, n, r, o, s, i, a, c) {
  const u = y(), l = qi(u, e, t, n, r, o, s, i, a, c);
  Kt(wt, Dn, l, !0);
}
function G_(e, t, n, r, o, s, i, a, c, u, l) {
  const d = y(), f = Qi(d, e, t, n, r, o, s, i, a, c, u, l);
  Kt(wt, Dn, f, !0);
}
function W_(e, t, n, r, o, s, i, a, c, u, l, d, f) {
  const h = y(), p = Yi(h, e, t, n, r, o, s, i, a, c, u, l, d, f);
  Kt(wt, Dn, p, !0);
}
function Z_(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p) {
  const g = y(), D = Ki(g, e, t, n, r, o, s, i, a, c, u, l, d, f, h, p);
  Kt(wt, Dn, D, !0);
}
function q_(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D) {
  const E = y(), m = Ji(E, e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D);
  Kt(wt, Dn, m, !0);
}
function Q_(e) {
  const t = y(), n = zi(t, e);
  Kt(wt, Dn, n, !0);
}
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
function Y_() {
  const e = y()[De][he];
  return ngDevMode && b(e, "Expected component instance to be defined"), e;
}
class Lk {
  destroy(t) {
  }
  updateValue(t, n) {
  }
  // operations below could be implemented on top of the operations defined so far, but having
  // them explicitly allow clear expression of intent and potentially more performant
  // implementations
  swap(t, n) {
    const r = Math.min(t, n), o = Math.max(t, n), s = this.detach(o);
    if (o - r > 1) {
      const i = this.detach(r);
      this.attach(r, s), this.attach(o, i);
    } else
      this.attach(r, s);
  }
  move(t, n) {
    this.attach(n, this.detach(t));
  }
}
function Tf(e, t, n, r, o) {
  return e === n && Object.is(t, r) ? 1 : Object.is(o(e, t), o(n, r)) ? -1 : 0;
}
function Af(e, t, n) {
  const r = e.get(t);
  r !== void 0 ? r.add(n) : e.set(t, /* @__PURE__ */ new Set([n]));
}
function jk(e, t, n) {
  let r, o, s = 0, i = e.length - 1;
  const a = ngDevMode ? /* @__PURE__ */ new Map() : void 0;
  if (Array.isArray(t)) {
    let c = t.length - 1;
    for (; s <= i && s <= c; ) {
      const u = e.at(s), l = t[s];
      ngDevMode && Af(a, n(s, l), s);
      const d = Tf(s, u, s, l, n);
      if (d !== 0) {
        d < 0 && e.updateValue(s, l), s++;
        continue;
      }
      const f = e.at(i), h = t[c];
      ngDevMode && Af(a, n(c, h), c);
      const p = Tf(i, f, c, h, n);
      if (p !== 0) {
        p < 0 && e.updateValue(i, h), i--, c--;
        continue;
      }
      const g = n(s, u), D = n(i, f), E = n(s, l);
      if (Object.is(E, D)) {
        const m = n(c, h);
        Object.is(m, g) ? (e.swap(s, i), e.updateValue(i, h), c--, i--) : e.move(i, s), e.updateValue(s, l), s++;
        continue;
      }
      if (r ?? (r = new LD()), o ?? (o = kD(e, s, i, n)), rp(e, r, s, E))
        e.updateValue(s, l), s++, i++;
      else if (o.has(E))
        r.set(g, e.detach(s)), i--;
      else {
        const m = e.create(s, t[s]);
        e.attach(s, m), s++, i++;
      }
    }
    for (; s <= c; )
      FD(e, r, n, s, t[s]), s++;
  } else if (t != null) {
    const c = t[Symbol.iterator]();
    let u = c.next();
    for (; !u.done && s <= i; ) {
      const l = e.at(s), d = u.value;
      ngDevMode && Af(a, n(s, d), s);
      const f = Tf(s, l, s, d, n);
      if (f !== 0)
        f < 0 && e.updateValue(s, d), s++, u = c.next();
      else {
        r ?? (r = new LD()), o ?? (o = kD(e, s, i, n));
        const h = n(s, d);
        if (rp(e, r, s, h))
          e.updateValue(s, d), s++, i++, u = c.next();
        else if (!o.has(h))
          e.attach(s, e.create(s, d)), s++, i++, u = c.next();
        else {
          const p = n(s, l);
          r.set(p, e.detach(s)), i--;
        }
      }
    }
    for (; !u.done; )
      FD(e, r, n, e.length, u.value), u = c.next();
  }
  for (; s <= i; )
    e.destroy(e.detach(i--));
  if (r == null || r.forEach((c) => {
    e.destroy(c);
  }), ngDevMode) {
    let c = [];
    for (const [u, l] of a)
      if (l.size > 1) {
        const d = [...l].sort((f, h) => f - h);
        for (let f = 1; f < d.length; f++)
          c.push(`key "${W(u)}" at index "${d[f - 1]}" and "${d[f]}"`);
      }
    if (c.length > 0) {
      const u = fe(-955, `The provided track expression resulted in duplicated keys for a given collection. Adjust the tracking expression such that it uniquely identifies all the items in the collection. Duplicated keys were: 
` + c.join(`, 
`) + ".");
      console.warn(u);
    }
  }
}
function rp(e, t, n, r) {
  return t !== void 0 && t.has(r) ? (e.attach(n, t.get(r)), t.delete(r), !0) : !1;
}
function FD(e, t, n, r, o) {
  if (rp(e, t, r, n(r, o)))
    e.updateValue(r, o);
  else {
    const s = e.create(r, o);
    e.attach(r, s);
  }
}
function kD(e, t, n, r) {
  const o = /* @__PURE__ */ new Set();
  for (let s = t; s <= n; s++)
    o.add(r(s, e.at(s)));
  return o;
}
class LD {
  constructor() {
    this.kvMap = /* @__PURE__ */ new Map(), this._vMap = void 0;
  }
  has(t) {
    return this.kvMap.has(t);
  }
  delete(t) {
    if (!this.has(t))
      return !1;
    const n = this.kvMap.get(t);
    return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0;
  }
  get(t) {
    return this.kvMap.get(t);
  }
  set(t, n) {
    if (this.kvMap.has(t)) {
      let r = this.kvMap.get(t);
      if (ngDevMode && r === n)
        throw new Error(`Detected a duplicated value ${n} for the key ${t}`);
      this._vMap === void 0 && (this._vMap = /* @__PURE__ */ new Map());
      const o = this._vMap;
      for (; o.has(r); )
        r = o.get(r);
      o.set(r, n);
    } else
      this.kvMap.set(t, n);
  }
  forEach(t) {
    for (let [n, r] of this.kvMap)
      if (t(r, n), this._vMap !== void 0) {
        const o = this._vMap;
        for (; o.has(r); )
          r = o.get(r), t(r, n);
      }
  }
}
function K_(e, t) {
  We("NgControlFlow");
  const n = y(), r = qt(), o = n[r] !== x ? n[r] : -1, s = o !== -1 ? gl(n, M + o) : void 0, i = 0;
  if (Oe(n, r, e)) {
    const a = U(null);
    try {
      if (s !== void 0 && em(s, i), e !== -1) {
        const c = M + e, u = gl(n, c), l = op(n[C], c), d = yo(u, l.tView.ssrId), f = ki(n, l, t, {
          dehydratedView: d
        });
        Li(u, f, i, mo(l, d));
      }
    } finally {
      U(a);
    }
  } else if (s !== void 0) {
    const a = N0(s, i);
    a !== void 0 && (a[he] = t);
  }
}
class $k {
  constructor(t, n, r) {
    this.lContainer = t, this.$implicit = n, this.$index = r;
  }
  get $count() {
    return this.lContainer.length - ve;
  }
}
function J_(e) {
  return e;
}
function Vm(e, t) {
  return t;
}
class Bk {
  constructor(t, n, r) {
    this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = r;
  }
}
function X_(e, t, n, r, o, s, i, a, c, u, l, d, f) {
  We("NgControlFlow"), ngDevMode && IC(i, `A track expression must be a function, was ${typeof i} instead.`);
  const h = y(), p = k(), g = c !== void 0, D = y(), E = a ? (
    // We only want to bind when necessary, because it produces a
    // new function. For pure functions it's not necessary.
    i.bind(D[De][he])
  ) : i, m = new Bk(g, E);
  D[M + e] = m, nc(h, p, e + 1, t, n, r, o, Nt(p.consts, s)), g && (ngDevMode && b(u, "Missing number of declarations for the empty repeater block."), ngDevMode && b(l, "Missing number of bindings for the empty repeater block."), nc(h, p, e + 2, c, u, l, d, Nt(p.consts, f)));
}
function Hk(e) {
  return e.length - M > 2;
}
class Uk {
  constructor() {
    this.created = 0, this.destroyed = 0;
  }
  reset() {
    this.created = 0, this.destroyed = 0;
  }
  recordCreate() {
    this.created++;
  }
  recordDestroy() {
    this.destroyed++;
  }
  /**
   * A method indicating if the entire collection was re-created as part of the reconciliation pass.
   * Used to warn developers about the usage of a tracking function that might result in excessive
   * amount of view creation / destroy operations.
   *
   * @returns boolean value indicating if a live collection was re-created
   */
  wasReCreated(t) {
    return t > 0 && this.created === this.destroyed && this.created === t;
  }
}
class Vk extends Lk {
  constructor(t, n, r) {
    super(), this.lContainer = t, this.hostLView = n, this.templateTNode = r, this.operationsCounter = ngDevMode ? new Uk() : void 0, this.needsIndexUpdate = !1;
  }
  get length() {
    return this.lContainer.length - ve;
  }
  at(t) {
    return this.getLView(t)[he].$implicit;
  }
  attach(t, n) {
    const r = n[nt];
    this.needsIndexUpdate || (this.needsIndexUpdate = t !== this.length), Li(this.lContainer, n, t, mo(this.templateTNode, r));
  }
  detach(t) {
    return this.needsIndexUpdate || (this.needsIndexUpdate = t !== this.length - 1), zk(this.lContainer, t);
  }
  create(t, n) {
    var s;
    const r = yo(this.lContainer, this.templateTNode.tView.ssrId), o = ki(this.hostLView, this.templateTNode, new $k(this.lContainer, n, t), { dehydratedView: r });
    return (s = this.operationsCounter) == null || s.recordCreate(), o;
  }
  destroy(t) {
    var n;
    vd(t[C], t), (n = this.operationsCounter) == null || n.recordDestroy();
  }
  updateValue(t, n) {
    this.getLView(t)[he].$implicit = n;
  }
  reset() {
    var t;
    this.needsIndexUpdate = !1, (t = this.operationsCounter) == null || t.reset();
  }
  updateIndexes() {
    if (this.needsIndexUpdate)
      for (let t = 0; t < this.length; t++)
        this.getLView(t)[he].$index = t;
  }
  getLView(t) {
    return tM(this.lContainer, t);
  }
}
function eM(e) {
  var r;
  const t = U(null), n = Ge();
  try {
    const o = y(), s = o[C], i = o[n], a = n + 1, c = gl(o, a);
    if (i.liveCollection === void 0) {
      const l = op(s, a);
      i.liveCollection = new Vk(c, o, l);
    } else
      i.liveCollection.reset();
    const u = i.liveCollection;
    if (jk(u, e, i.trackByFn), ngDevMode && i.trackByFn === Vm && ((r = u.operationsCounter) != null && r.wasReCreated(u.length)) && Hk(tM(c, 0))) {
      const l = fe(-956, `The configured tracking expression (track by identity) caused re-creation of the entire collection of size ${u.length}. This is an expensive operation requiring destruction and subsequent creation of DOM nodes, directives, components etc. Please review the "track expression" and make sure that it uniquely identifies items in a collection.`);
      console.warn(l);
    }
    if (u.updateIndexes(), i.hasEmptyBlock) {
      const l = qt(), d = u.length === 0;
      if (Oe(o, l, d)) {
        const f = n + 2, h = gl(o, f);
        if (d) {
          const p = op(s, f), g = yo(h, p.tView.ssrId), D = ki(o, p, void 0, { dehydratedView: g });
          Li(h, D, 0, mo(p, g));
        } else
          em(h, 0);
      }
    }
  } finally {
    U(t);
  }
}
function gl(e, t) {
  const n = e[t];
  return ngDevMode && jt(n), n;
}
function zk(e, t) {
  const n = Ka(e, t);
  return ngDevMode && pn(n), n;
}
function tM(e, t) {
  const n = N0(e, t);
  return ngDevMode && pn(n), n;
}
function op(e, t) {
  const n = kc(e, t);
  return ngDevMode && Qn(n), n;
}
function Gk(e, t, n, r, o, s) {
  ngDevMode && ht(t), ngDevMode && ngDevMode.firstCreatePass++;
  const i = t.consts, a = Nt(i, o), c = Bo(t, e, 2, r, a);
  return Kg(t, n, c, Nt(i, s)), c.attrs !== null && cl(c, c.attrs, !1), c.mergedAttrs !== null && cl(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c;
}
function Ld(e, t, n, r) {
  const o = y(), s = k(), i = M + e;
  ngDevMode && O(ae(), s.bindingStartIndex, "elements should be created before any bindings"), ngDevMode && _e(o, i);
  const a = o[L], c = s.firstCreatePass ? Gk(i, s, o, t, n, r) : s.data[i], u = nM(s, o, c, a, t, e);
  o[i] = u;
  const l = Xl(c);
  return ngDevMode && s.firstCreatePass && oN(u, o, c.value, s.schemas, l), Wt(c, !0), v0(a, u, c), !Bi(c) && jc() && Dd(s, o, u, c), $O() === 0 && qe(u, o), BO(), l && (qg(s, o, c), Zg(s, c, o)), r !== null && Qg(o, c), Ld;
}
function jd() {
  let e = re();
  ngDevMode && b(e, "No parent node to close."), sg() ? ig() : (ngDevMode && XC(re()), e = e.parent, Wt(e, !1));
  const t = e;
  ngDevMode && Qe(
    t,
    3
    /* TNodeType.AnyRNode */
  ), UO(t) && zO(), HO();
  const n = k();
  return n.firstCreatePass && (sd(n, e), Jp(e) && n.queries.elementEnd(e)), t.classesWithoutHost != null && tP(t) && np(n, t, y(), t.classesWithoutHost, !0), t.stylesWithoutHost != null && nP(t) && np(n, t, y(), t.stylesWithoutHost, !1), jd;
}
function zm(e, t, n, r) {
  return Ld(e, t, n, r), jd(), zm;
}
let nM = (e, t, n, r, o, s) => (gn(!0), yd(r, o, RI()));
function Wk(e, t, n, r, o, s) {
  const i = t[nt], a = !i || Ro() || Bi(n) || Lo(i, s);
  if (gn(a), a)
    return yd(r, o, RI());
  const c = Zc(i, e, t, n);
  if (ngDevMode && Gc(c, Node.ELEMENT_NODE, o, t, n), ngDevMode && ko(c), Tb(i, s) && (ngDevMode && Sd(c.nextSibling, t, n), fd(i, s, c.nextSibling)), i && (Dg(n) || nb(c))) {
    if (Dr(n))
      VO(n), g0(c), ngDevMode && hx(c);
    else if (ngDevMode)
      throw lR(c);
  }
  return c;
}
function Zk() {
  nM = Wk;
}
function qk(e, t, n, r, o) {
  ngDevMode && ngDevMode.firstCreatePass++;
  const s = t.consts, i = Nt(s, r), a = Bo(t, e, 8, "ng-container", i);
  i !== null && cl(a, i, !0);
  const c = Nt(s, o);
  return Kg(t, n, a, c), t.queries !== null && t.queries.elementStart(t, a), a;
}
function $d(e, t, n) {
  const r = y(), o = k(), s = e + M;
  ngDevMode && _e(r, s), ngDevMode && O(ae(), o.bindingStartIndex, "element containers should be created before any bindings");
  const i = o.firstCreatePass ? qk(s, o, r, t, n) : o.data[s];
  Wt(i, !0);
  const a = rM(o, r, i, e);
  return r[s] = a, jc() && Dd(o, r, a, i), qe(a, r), Xl(i) && (qg(o, r, i), Zg(o, i, r)), n != null && Qg(r, i), $d;
}
function Bd() {
  let e = re();
  const t = k();
  return sg() ? ig() : (ngDevMode && XC(e), e = e.parent, Wt(e, !1)), ngDevMode && Qe(
    e,
    8
    /* TNodeType.ElementContainer */
  ), t.firstCreatePass && (sd(t, e), Jp(e) && t.queries.elementEnd(e)), Bd;
}
function Gm(e, t, n) {
  return $d(e, t, n), Bd(), Gm;
}
let rM = (e, t, n, r) => (gn(!0), Hg(t[L], ngDevMode ? "ng-container" : ""));
function Qk(e, t, n, r) {
  let o;
  const s = t[nt], i = !s || Ro() || Lo(s, r) || Bi(n);
  if (gn(i), i)
    return Hg(t[L], ngDevMode ? "ng-container" : "");
  const a = Zc(s, e, t, n);
  ngDevMode && Sd(a, t, n);
  const c = Sb(s, r);
  return ngDevMode && ie(c, "Unexpected state: hydrating an <ng-container>, but no hydration info is available."), fd(s, r, a), o = Od(c, a), ngDevMode && (Gc(o, Node.COMMENT_NODE, null, t, n), ko(o)), o;
}
function Yk() {
  rM = Qk;
}
function oM() {
  return y();
}
function Wm(e, t, n) {
  const r = y(), o = qt();
  if (Oe(r, o, t)) {
    const s = k(), i = ge();
    gt(s, i, r, e, t, r[L], n, !0), ngDevMode && Ie(s.data, i, e, o);
  }
  return Wm;
}
function Zm(e, t, n) {
  const r = y(), o = qt();
  if (Oe(r, o, t)) {
    const s = k(), i = ge(), a = cg(s.data), c = x0(a, i, r);
    gt(s, i, r, e, t, c, n, !0), ngDevMode && Ie(s.data, i, e, o);
  }
  return Zm;
}
typeof ngI18nClosureMode > "u" && function() {
  Ae.ngI18nClosureMode = // TODO(FW-1250): validate that this actually, you know, works.
  // tslint:disable-next-line:no-toplevel-property-access
  typeof goog < "u" && typeof goog.getMsg == "function";
}();
const br = void 0;
function Kk(e) {
  const t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
  return t === 1 && n === 0 ? 1 : 5;
}
var Jk = ["en", [["a", "p"], ["AM", "PM"], br], [["AM", "PM"], br, br], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], br, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], br, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", br, "{1} 'at' {0}", br], [".", ",", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "¤#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", Kk];
let Ns = {};
function Xk(e, t, n) {
  typeof t != "string" && (n = t, t = e[le.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), Ns[t] = e, n && (Ns[t][le.ExtraData] = n);
}
function Ke(e) {
  const t = nL(e);
  let n = jD(t);
  if (n)
    return n;
  const r = t.split("-")[0];
  if (n = jD(r), n)
    return n;
  if (r === "en")
    return Jk;
  throw new v(701, ngDevMode && `Missing locale data for the locale "${e}".`);
}
function eL(e) {
  return Ke(e)[le.CurrencyCode] || null;
}
function qm(e) {
  return Ke(e)[le.PluralCase];
}
function jD(e) {
  return e in Ns || (Ns[e] = Ae.ng && Ae.ng.common && Ae.ng.common.locales && Ae.ng.common.locales[e]), Ns[e];
}
function tL() {
  Ns = {};
}
var le;
(function(e) {
  e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData";
})(le || (le = {}));
function nL(e) {
  return e.toLowerCase().replace(/_/g, "-");
}
const rL = ["zero", "one", "two", "few", "many"];
function oL(e, t) {
  const n = qm(t)(parseInt(e, 10)), r = rL[n];
  return r !== void 0 ? r : "other";
}
const sc = "en-US", sL = "USD", Hd = {
  marker: "element"
}, Ud = {
  marker: "ICU"
};
var et;
(function(e) {
  e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT";
})(et || (et = {}));
let sM = sc;
function iM(e) {
  ngDevMode && b(e, "Expected localeId to be defined"), typeof e == "string" && (sM = e.toLowerCase().replace(/_/g, "-"));
}
function iL() {
  return sM;
}
let ic = 0, va = 0;
function aL(e) {
  e && (ic = ic | 1 << Math.min(va, 31)), va++;
}
function cL(e, t, n) {
  if (va > 0) {
    ngDevMode && b(e, "tView should be defined");
    const r = e.data[n], o = Array.isArray(r) ? r : r.update, s = ae() - va - 1;
    uM(e, t, o, s, ic);
  }
  ic = 0, va = 0;
}
function aM(e, t, n) {
  const r = e[L];
  switch (n) {
    case Node.COMMENT_NODE:
      return Hg(r, t);
    case Node.TEXT_NODE:
      return Bg(r, t);
    case Node.ELEMENT_NODE:
      return yd(r, t, null);
  }
}
let Da = (e, t, n, r) => (gn(!0), aM(e, n, r));
function uL(e, t, n, r) {
  const o = e[nt], s = t - M, i = !om() || !o || Ro() || Lo(o, s);
  if (gn(i), i)
    return aM(e, n, r);
  const a = Y0(o, s);
  return ngDevMode && b(a, "expected native element"), ngDevMode && O(a.nodeType, r, "expected matching nodeType"), ngDevMode && r === Node.ELEMENT_NODE && O(a.tagName.toLowerCase(), n.toLowerCase(), "expecting matching tagName"), ngDevMode && ko(a), a;
}
function lL() {
  Da = uL;
}
function dL(e, t, n, r) {
  const o = e[L];
  for (let s = 0; s < t.length; s++) {
    const i = t[s++], a = t[s], c = (i & et.COMMENT) === et.COMMENT, u = (i & et.APPEND_EAGERLY) === et.APPEND_EAGERLY, l = i >>> et.SHIFT;
    let d = e[l], f = !1;
    d === null && (d = e[l] = Da(e, l, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = jc()), u && n !== null && f && go(o, n, d, r, !1);
  }
}
function cM(e, t, n, r) {
  ngDevMode && Un(r);
  const o = n[L];
  let s = null, i;
  for (let a = 0; a < t.length; a++) {
    const c = t[a];
    if (typeof c == "string") {
      const u = t[++a];
      n[u] === null && (ngDevMode && ngDevMode.rendererCreateTextNode++, ngDevMode && _e(n, u), n[u] = Da(n, u, c, Node.TEXT_NODE));
    } else if (typeof c == "number")
      switch (c & 1) {
        case 0:
          const u = W0(c);
          s === null && (s = u, i = zg(o, r));
          let l, d;
          if (u === s ? (l = r, d = i) : (l = null, d = X(n[u])), d !== null) {
            ngDevMode && Un(d);
            const g = Z0(c);
            ngDevMode && vr(g, M, "Missing ref");
            const D = n[g];
            ngDevMode && Un(D), go(o, d, D, l, !1);
            const E = ma(e, g);
            if (E !== null && typeof E == "object") {
              ngDevMode && ed(E);
              const m = Ad(E, n);
              m !== null && cM(e, E.create[m], n, n[E.anchorIdx]);
            }
          }
          break;
        case 1:
          const f = c >>> 1, h = t[++a], p = t[++a];
          Jg(o, Fc(f, n), null, null, h, p, null);
          break;
        default:
          if (ngDevMode)
            throw new v(700, `Unable to determine the type of mutate operation for "${c}"`);
      }
    else
      switch (c) {
        case Ud:
          const u = t[++a], l = t[++a];
          if (n[l] === null) {
            ngDevMode && O(typeof u, "string", `Expected "${u}" to be a comment node value`), ngDevMode && ngDevMode.rendererCreateComment++, ngDevMode && Ju(n, l);
            const h = n[l] = Da(n, l, u, Node.COMMENT_NODE);
            qe(h, n);
          }
          break;
        case Hd:
          const d = t[++a], f = t[++a];
          if (n[f] === null) {
            ngDevMode && O(typeof d, "string", `Expected "${d}" to be an element node tag name`), ngDevMode && ngDevMode.rendererCreateElement++, ngDevMode && Ju(n, f);
            const h = n[f] = Da(n, f, d, Node.ELEMENT_NODE);
            qe(h, n);
          }
          break;
        default:
          ngDevMode && A(`Unable to determine the type of mutate operation for "${c}"`);
      }
  }
}
function uM(e, t, n, r, o) {
  for (let s = 0; s < n.length; s++) {
    const i = n[s], a = n[++s];
    if (i & o) {
      let c = "";
      for (let u = s + 1; u <= s + a; u++) {
        const l = n[u];
        if (typeof l == "string")
          c += l;
        else if (typeof l == "number")
          if (l < 0)
            c += H(t[r - l]);
          else {
            const d = l >>> 2;
            switch (l & 3) {
              case 1:
                const f = n[++u], h = n[++u], p = e.data[d];
                ngDevMode && b(p, "Experting TNode or string"), typeof p == "string" ? Jg(t[L], t[d], null, p, f, c, h) : gt(e, p, t, f, c, t[L], h, !1);
                break;
              case 0:
                const g = t[d];
                g !== null && r0(t[L], g, c);
                break;
              case 2:
                fL(e, ma(e, d), t, c);
                break;
              case 3:
                $D(e, ma(e, d), r, t);
                break;
            }
          }
      }
    } else {
      const c = n[s + 1];
      if (c > 0 && (c & 3) === 3) {
        const u = c >>> 2, l = ma(e, u);
        t[l.currentCaseLViewIndex] < 0 && $D(e, l, r, t);
      }
    }
    s += a;
  }
}
function $D(e, t, n, r) {
  ngDevMode && _e(r, t.currentCaseLViewIndex);
  let o = r[t.currentCaseLViewIndex];
  if (o !== null) {
    let s = ic;
    o < 0 && (o = r[t.currentCaseLViewIndex] = ~o, s = -1), uM(e, r, t.update[o], n, s);
  }
}
function fL(e, t, n, r) {
  const o = hL(t, r);
  if (Ad(t, n) !== o && (lM(e, t, n), n[t.currentCaseLViewIndex] = o === null ? null : ~o, o !== null)) {
    const i = n[t.anchorIdx];
    i && (ngDevMode && Un(i), cM(e, t.create[o], n, i)), UR(n, t.anchorIdx, o);
  }
}
function lM(e, t, n) {
  let r = Ad(t, n);
  if (r !== null) {
    const o = t.remove[r];
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      if (i > 0) {
        const a = Fc(i, n);
        a !== null && Uc(n[L], a);
      } else
        lM(e, ma(e, ~i), n);
    }
  }
}
function hL(e, t) {
  let n = e.cases.indexOf(t);
  if (n === -1)
    switch (e.type) {
      case 1: {
        const r = oL(t, iL());
        n = e.cases.indexOf(r), n === -1 && r !== "other" && (n = e.cases.indexOf("other"));
        break;
      }
      case 0: {
        n = e.cases.indexOf("other");
        break;
      }
    }
  return n === -1 ? null : n;
}
function pL(e) {
  const t = e || (Array.isArray(this) ? this : []);
  let n = [];
  for (let r = 0; r < t.length; r++) {
    const o = t[r++], s = t[r], i = (o & et.COMMENT) === et.COMMENT, a = (o & et.APPEND_EAGERLY) === et.APPEND_EAGERLY, c = o >>> et.SHIFT;
    n.push(`lView[${c}] = document.${i ? "createComment" : "createText"}(${JSON.stringify(s)});`), a && n.push(`parent.appendChild(lView[${c}]);`);
  }
  return n;
}
function Vd(e) {
  const t = new dM(e || (Array.isArray(this) ? this : []));
  let n = [];
  function r(o) {
    const s = o >>> 2;
    switch (o & 3) {
      case 0:
        return `(lView[${s}] as Text).textContent = $$$`;
      case 1:
        const a = t.consumeString(), c = t.consumeFunction(), u = c ? `(${c})($$$)` : "$$$";
        return `(lView[${s}] as Element).setAttribute('${a}', ${u})`;
      case 2:
        return `icuSwitchCase(${s}, $$$)`;
      case 3:
        return `icuUpdateCase(${s})`;
    }
    throw new Error("unexpected OpCode");
  }
  for (; t.hasMore(); ) {
    let o = t.consumeNumber(), s = t.consumeNumber();
    const i = t.i + s, a = [];
    let c = "";
    for (; t.i < i; ) {
      let u = t.consumeNumberOrString();
      if (typeof u == "string")
        c += u;
      else if (u < 0)
        c += "${lView[i" + u + "]}";
      else {
        const l = r(u);
        a.push(l.replace("$$$", "`" + c + "`") + ";"), c = "";
      }
    }
    n.push(`if (mask & 0b${o.toString(2)}) { ${a.join(" ")} }`);
  }
  return n;
}
function gL(e) {
  const t = new dM(e || (Array.isArray(this) ? this : []));
  let n = [];
  function r(s) {
    const i = W0(s), a = Z0(s);
    switch (lD(s)) {
      case 0:
        return `(lView[${i}] as Element).appendChild(lView[${o}])`;
      case 1:
        return `(lView[${a}] as Element).setAttribute("${t.consumeString()}", "${t.consumeString()}")`;
    }
    throw new Error("Unexpected OpCode: " + lD(s));
  }
  let o = -1;
  for (; t.hasMore(); ) {
    let s = t.consumeNumberStringOrMarker();
    if (s === Ud) {
      const i = t.consumeString();
      o = t.consumeNumber(), n.push(`lView[${o}] = document.createComment("${i}")`);
    } else if (s === Hd) {
      const i = t.consumeString();
      o = t.consumeNumber(), n.push(`lView[${o}] = document.createElement("${i}")`);
    } else if (typeof s == "string")
      o = t.consumeNumber(), n.push(`lView[${o}] = document.createTextNode("${s}")`);
    else if (typeof s == "number") {
      const i = r(s);
      i && n.push(i);
    } else
      throw new Error("Unexpected value");
  }
  return n;
}
function mL(e) {
  const t = e || (Array.isArray(this) ? this : []);
  let n = [];
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    o > 0 ? n.push(`remove(lView[${o}])`) : n.push(`removeNestedICU(${~o})`);
  }
  return n;
}
class dM {
  constructor(t) {
    this.i = 0, this.codes = t;
  }
  hasMore() {
    return this.i < this.codes.length;
  }
  consumeNumber() {
    let t = this.codes[this.i++];
    return ie(t, "expecting number in OpCode"), t;
  }
  consumeString() {
    let t = this.codes[this.i++];
    return Mi(t, "expecting string in OpCode"), t;
  }
  consumeFunction() {
    let t = this.codes[this.i++];
    if (t === null || typeof t == "function")
      return t;
    throw new Error("expecting function in OpCode");
  }
  consumeNumberOrString() {
    let t = this.codes[this.i++];
    return typeof t == "string" || ie(t, "expecting number or string in OpCode"), t;
  }
  consumeNumberStringOrMarker() {
    let t = this.codes[this.i++];
    return typeof t == "string" || typeof t == "number" || t == Ud || t == Hd || ie(t, "expecting number, string, ICU_MARKER or ELEMENT_MARKER in OpCode"), t;
  }
}
const ml = /�(\d+):?\d*�/gi, yL = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, vL = /�(\d+)�/, fM = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Ea = "�", DL = /�\/?\*(\d+:\d+)�/gi, EL = /�(\/?[#*]\d+):?\d*�/gi, CL = /\uE500/g;
function IL(e) {
  return e.replace(CL, " ");
}
function oo(e, t) {
  if (ngDevMode)
    Object.defineProperty(e, "debug", { get: t, enumerable: !1 });
  else
    throw new Error("This method should be guarded with `ngDevMode` so that it can be tree shaken in production!");
}
function bL(e, t, n, r, o, s) {
  const i = za(), a = [], c = [], u = [[]], l = [[]];
  ngDevMode && (oo(a, pL), oo(c, Vd)), o = SL(o, s);
  const d = IL(o).split(EL);
  for (let f = 0; f < d.length; f++) {
    let h = d[f];
    if (f & 1) {
      const p = h.charCodeAt(0) === 47, g = h.charCodeAt(p ? 1 : 0);
      ngDevMode && FA(
        g,
        42,
        35
        /* CharCode.HASH */
      );
      const D = M + Number.parseInt(h.substring(p ? 2 : 1));
      if (p)
        u.shift(), l.shift(), Wt(za(), !1);
      else {
        const E = ER(e, u[0], D);
        u.unshift([]), Wt(E, !0);
        const m = {
          kind: 2,
          index: D,
          children: [],
          type: g === 35 ? 0 : 1
        };
        l[0].push(m), l.unshift(m.children);
      }
    } else {
      const p = sp(h);
      for (let g = 0; g < p.length; g++) {
        let D = p[g];
        if (g & 1) {
          const E = D;
          if (typeof E != "object")
            throw new Error(`Unable to parse ICU expression in "${o}" message.`);
          const T = hM(e, i, u[0], n, a, ngDevMode ? `ICU ${r}:${E.mainBinding}` : "", !0).index;
          ngDevMode && Pn(T, M, "Index must be in absolute LView offset"), gM(l[0], e, n, c, t, E, T);
        } else {
          const E = D;
          ngDevMode && Mi(E, "Parsed ICU part should be string"), E !== "" && wL(l[0], e, i, u[0], a, c, n, E);
        }
      }
    }
  }
  e.data[r] = {
    create: a,
    update: c,
    ast: l[0],
    parentTNodeIndex: t
  };
}
function hM(e, t, n, r, o, s, i) {
  const a = Vc(e, r, 1, null);
  let c = a << et.SHIFT, u = za();
  t === u && (u = null), u === null && (c |= et.APPEND_EAGERLY), i && (c |= et.COMMENT, lN(IR)), o.push(c, s === null ? "" : s);
  const l = Wg(e, a, i ? 32 : 1, s === null ? ngDevMode ? "{{?}}" : "" : s, null);
  z0(n, l);
  const d = l.index;
  return Wt(
    l,
    !1
    /* Text nodes are self closing */
  ), u !== null && t !== u && DR(u, d), l;
}
function wL(e, t, n, r, o, s, i, a) {
  const c = a.match(ml), l = hM(t, n, r, i, o, c ? null : a, !1).index;
  c && Ca(s, a, l, null, 0, null), e.push({ kind: 0, index: l });
}
function _L(e, t, n) {
  const o = re().index, s = [];
  if (ngDevMode && oo(s, Vd), e.firstCreatePass && e.data[t] === null) {
    for (let i = 0; i < n.length; i += 2) {
      const a = n[i], c = n[i + 1];
      if (c !== "") {
        if (yL.test(c))
          throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
        Ca(s, c, o, a, ML(s), null);
      }
    }
    e.data[t] = s;
  }
}
function Ca(e, t, n, r, o, s) {
  ngDevMode && Pn(n, M, "Index must be in absolute LView offset");
  const i = e.length, a = i + 1;
  e.push(null, null);
  const c = i + 2;
  ngDevMode && oo(e, Vd);
  const u = t.split(ml);
  let l = 0;
  for (let d = 0; d < u.length; d++) {
    const f = u[d];
    if (d & 1) {
      const h = o + parseInt(f, 10);
      e.push(-1 - h), l = l | pM(h);
    } else f !== "" && e.push(f);
  }
  return e.push(n << 2 | (r ? 1 : 0)), r && e.push(r, s), e[i] = l, e[a] = e.length - c, l;
}
function ML(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    typeof r == "number" && r < 0 && t++;
  }
  return t;
}
function pM(e) {
  return 1 << Math.min(e, 31);
}
function BD(e) {
  let t, n = "", r = 0, o = !1, s;
  for (; (t = DL.exec(e)) !== null; )
    o ? t[0] === `${Ea}/*${s}${Ea}` && (r = t.index, o = !1) : (n += e.substring(r, t.index + t[0].length), s = t[1], o = !0);
  return ngDevMode && O(o, !1, `Tag mismatch: unable to find the end of the sub-template in the translation "${e}"`), n += e.slice(r), n;
}
function SL(e, t) {
  if (q0(t))
    return BD(e);
  {
    const n = e.indexOf(`:${t}${Ea}`) + 2 + t.toString().length, r = e.search(new RegExp(`${Ea}\\/\\*\\d+:${t}${Ea}`));
    return BD(e.substring(n, r));
  }
}
function gM(e, t, n, r, o, s, i) {
  ngDevMode && b(s, "ICU expression must be defined");
  let a = 0;
  const c = {
    type: s.type,
    currentCaseLViewIndex: Vc(t, n, 1, null),
    anchorIdx: i,
    cases: [],
    create: [],
    remove: [],
    update: []
  };
  PL(r, s, i), vR(t, i, c);
  const u = s.values, l = [];
  for (let d = 0; d < u.length; d++) {
    const f = u[d], h = [];
    for (let g = 0; g < f.length; g++) {
      const D = f[g];
      if (typeof D != "string") {
        const E = h.push(D) - 1;
        f[g] = `<!--�${E}�-->`;
      }
    }
    const p = [];
    l.push(p), a = AL(p, t, c, n, r, o, s.cases[d], f.join(""), h) | a;
  }
  a && xL(r, a, i), e.push({
    kind: 3,
    index: i,
    cases: l,
    currentCaseLViewIndex: c.currentCaseLViewIndex
  });
}
function TL(e) {
  const t = [], n = [];
  let r = 1, o = 0;
  e = e.replace(fM, function(i, a, c) {
    return c === "select" ? r = 0 : r = 1, o = parseInt(a.slice(1), 10), "";
  });
  const s = sp(e);
  for (let i = 0; i < s.length; ) {
    let a = s[i++].trim();
    r === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    const c = sp(s[i++]);
    t.length > n.length && n.push(c);
  }
  return { type: r, mainBinding: o, cases: t, values: n };
}
function sp(e) {
  if (!e)
    return [];
  let t = 0;
  const n = [], r = [], o = /[{}]/g;
  o.lastIndex = 0;
  let s;
  for (; s = o.exec(e); ) {
    const a = s.index;
    if (s[0] == "}") {
      if (n.pop(), n.length == 0) {
        const c = e.substring(t, a);
        fM.test(c) ? r.push(TL(c)) : r.push(c), t = a + 1;
      }
    } else {
      if (n.length == 0) {
        const c = e.substring(t, a);
        r.push(c), t = a + 1;
      }
      n.push("{");
    }
  }
  const i = e.substring(t);
  return r.push(i), r;
}
function AL(e, t, n, r, o, s, i, a, c) {
  const u = [], l = [], d = [];
  ngDevMode && (oo(u, gL), oo(l, mL), oo(d, Vd)), n.cases.push(i), n.create.push(u), n.remove.push(l), n.update.push(d);
  const h = Lb(Jn()).getInertBodyElement(a);
  ngDevMode && b(h, "Unable to generate inert body element");
  const p = xh(h) || h;
  return p ? mM(e, t, n, r, o, u, l, d, p, s, c, 0) : 0;
}
function mM(e, t, n, r, o, s, i, a, c, u, l, d) {
  let f = 0, h = c.firstChild;
  for (; h; ) {
    const p = Vc(t, r, 1, null);
    switch (h.nodeType) {
      case Node.ELEMENT_NODE:
        const g = h, D = g.tagName.toLowerCase();
        if (Ph.hasOwnProperty(D)) {
          Of(s, Hd, D, u, p), t.data[p] = D;
          const R = g.attributes;
          for (let Se = 0; Se < R.length; Se++) {
            const be = R.item(Se), $t = be.name.toLowerCase();
            !!be.value.match(ml) ? Hb.hasOwnProperty($t) ? xg[$t] ? Ca(a, be.value, p, be.name, 0, hd) : Ca(a, be.value, p, be.name, 0, null) : ngDevMode && console.warn(`WARNING: ignoring unsafe attribute value ${$t} on element ${D} (see ${xo})`) : NL(s, p, be);
          }
          const Q = {
            kind: 1,
            index: p,
            children: []
          };
          e.push(Q), f = mM(Q.children, t, n, r, o, s, i, a, h, p, l, d + 1) | f, HD(i, p, d);
        }
        break;
      case Node.TEXT_NODE:
        const E = h.textContent || "", m = E.match(ml);
        Of(s, null, m ? "" : E, u, p), HD(i, p, d), m && (f = Ca(a, E, p, null, 0, null) | f), e.push({
          kind: 0,
          index: p
        });
        break;
      case Node.COMMENT_NODE:
        const T = vL.exec(h.textContent || "");
        if (T) {
          const R = parseInt(T[1], 10), Q = l[R];
          Of(s, Ud, ngDevMode ? `nested ICU ${R}` : "", u, p), gM(e, t, r, o, u, Q, p), OL(i, p, d);
        }
        break;
    }
    h = h.nextSibling;
  }
  return f;
}
function HD(e, t, n) {
  n === 0 && e.push(t);
}
function OL(e, t, n) {
  n === 0 && (e.push(~t), e.push(t));
}
function PL(e, t, n) {
  e.push(
    pM(t.mainBinding),
    2,
    -1 - t.mainBinding,
    n << 2 | 2
    /* I18nUpdateOpCode.IcuSwitch */
  );
}
function xL(e, t, n) {
  e.push(
    t,
    1,
    n << 2 | 3
    /* I18nUpdateOpCode.IcuUpdate */
  );
}
function Of(e, t, n, r, o) {
  t !== null && e.push(t), e.push(n, o, CR(0, r, o));
}
function NL(e, t, n) {
  e.push(t << 1 | 1, n.name, n.value);
}
const UD = 0, RL = /\[(�.+?�?)\]/, FL = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, kL = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, LL = /{([A-Z0-9_]+)}/g, jL = /�I18N_EXP_(ICU(_\d+)?)�/g, $L = /\/\*/, BL = /\d+\:(\d+)/;
function HL(e, t = {}) {
  let n = e;
  if (RL.test(e)) {
    const r = {}, o = [UD];
    n = n.replace(FL, (s, i, a) => {
      const c = i || a, u = r[c] || [];
      if (u.length || (c.split("|").forEach((g) => {
        const D = g.match(BL), E = D ? parseInt(D[1], 10) : UD, m = $L.test(g);
        u.push([E, m, g]);
      }), r[c] = u), !u.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`);
      const l = o[o.length - 1];
      let d = 0;
      for (let g = 0; g < u.length; g++)
        if (u[g][0] === l) {
          d = g;
          break;
        }
      const [f, h, p] = u[d];
      return h ? o.pop() : l !== f && o.push(f), u.splice(d, 1), p;
    });
  }
  return Object.keys(t).length && (n = n.replace(kL, (r, o, s, i, a, c) => t.hasOwnProperty(s) ? `${o}${t[s]}${c}` : r), n = n.replace(LL, (r, o) => t.hasOwnProperty(o) ? t[o] : r), n = n.replace(jL, (r, o) => {
    if (t.hasOwnProperty(o)) {
      const s = t[o];
      if (!s.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${r} with key: ${o}`);
      return s.shift();
    }
    return r;
  })), n;
}
function Qm(e, t, n = -1) {
  const r = k(), o = y(), s = M + e;
  ngDevMode && b(r, "tView should be defined");
  const i = Nt(r.consts, t), a = za();
  if (r.firstCreatePass && bL(r, a === null ? 0 : a.index, o, s, i, n), r.type === 2) {
    const f = o[De];
    f[P] |= 32;
  } else
    o[P] |= 32;
  const c = r.data[s], u = a === o[Ve] ? null : a, l = c0(r, u, o), d = a && a.type & 8 ? o[a.index] : null;
  xR(o, s, a, n), dL(o, c.create, l, d), _I(!0);
}
function Ym() {
  _I(!1);
}
function yM(e, t, n) {
  Qm(e, t, n), Ym();
}
function vM(e, t) {
  const n = k();
  ngDevMode && b(n, "tView should be defined");
  const r = Nt(n.consts, t);
  _L(n, e + M, r);
}
function Km(e) {
  const t = y();
  return aL(Oe(t, qt(), e)), Km;
}
function DM(e) {
  cL(k(), y(), e + M);
}
function EM(e, t = {}) {
  return HL(e, t);
}
let CM = (e, t, n) => {
};
function VD(e) {
  CM = e;
}
function Jm(e, t, n, r) {
  const o = y(), s = k(), i = re();
  return ey(s, o, o[L], i, e, t, r), Jm;
}
function Xm(e, t) {
  const n = re(), r = y(), o = k(), s = cg(o.data), i = x0(s, n, r);
  return ey(o, r, i, n, e, t), Xm;
}
function UL(e, t, n, r) {
  const o = e.cleanup;
  if (o != null)
    for (let s = 0; s < o.length - 1; s += 2) {
      const i = o[s];
      if (i === n && o[s + 1] === r) {
        const a = t[zn], c = o[s + 2];
        return a.length > c ? a[c] : null;
      }
      typeof i == "string" && (s += 2);
    }
  return null;
}
function ey(e, t, n, r, o, s, i) {
  const a = Xl(r), u = e.firstCreatePass && jh(e), l = t[he], d = P0(t);
  ngDevMode && Qe(
    r,
    15
    /* TNodeType.AnyContainer */
  );
  let f = !0;
  if (r.type & 3 || i) {
    const g = Ye(r, t), D = i ? i(g) : g, E = d.length, m = i ? (R) => i(X(R[r.index])) : r.index;
    let T = null;
    if (!i && a && (T = UL(e, t, o, r.index)), T !== null) {
      const R = T.__ngLastListenerFn__ || T;
      R.__ngNextListenerFn__ = s, T.__ngLastListenerFn__ = s, f = !1;
    } else {
      s = GD(r, t, l, s), CM(g, o, s);
      const R = n.listen(D, o, s);
      ngDevMode && ngDevMode.rendererAddEventListener++, d.push(s, R), u && u.push(o, m, E, E + 1);
    }
  } else
    s = GD(r, t, l, s);
  const h = r.outputs;
  let p;
  if (f && h !== null && (p = h[o])) {
    const g = p.length;
    if (g)
      for (let D = 0; D < g; D += 2) {
        const E = p[D];
        ngDevMode && _e(t, E);
        const m = p[D + 1], T = t[E], R = T[m];
        if (ngDevMode && !VL(R))
          throw new Error(`@Output ${m} not initialized in '${T.constructor.name}'.`);
        const Q = R.subscribe(s), Se = d.length;
        d.push(s, Q), u && u.push(o, r.index, Se, -(Se + 1));
      }
  }
}
function zD(e, t, n, r) {
  const o = U(null);
  try {
    return nn(6, t, n), n(r) !== !1;
  } catch (s) {
    return bd(e, s), !1;
  } finally {
    nn(7, t, n), U(o);
  }
}
function GD(e, t, n, r) {
  return function o(s) {
    if (s === Function)
      return r;
    const i = e.componentOffset > -1 ? bt(e.index, t) : t;
    zc(
      i,
      5
      /* NotificationSource.Listener */
    );
    let a = zD(t, n, r, s), c = o.__ngNextListenerFn__;
    for (; c; )
      a = zD(t, n, c, s) && a, c = c.__ngNextListenerFn__;
    return a;
  };
}
function VL(e) {
  return e != null && typeof e.subscribe == "function";
}
function IM(e = 1) {
  return QO(e);
}
function zL(e, t) {
  let n = null;
  const r = iO(e);
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    if (s === "*") {
      n = o;
      continue;
    }
    if (r === null ? FC(
      e,
      s,
      /* isProjectionMode */
      !0
    ) : uO(r, s))
      return o;
  }
  return n;
}
function bM(e) {
  const t = y()[De][Ve];
  if (!t.projection) {
    const n = e ? e.length : 1, r = t.projection = fa(n, null), o = r.slice();
    let s = t.child;
    for (; s !== null; ) {
      if (s.type !== 128) {
        const i = e ? zL(s, e) : 0;
        i !== null && (o[i] ? o[i].projectionNext = s : r[i] = s, o[i] = s);
      }
      s = s.next;
    }
  }
}
function wM(e, t = 0, n, r, o, s) {
  const i = y(), a = k(), c = r ? e + 1 : null;
  c !== null && nc(i, a, c, r, o, s, null, n);
  const u = Bo(a, M + e, 16, null, n || null);
  u.projection === null && (u.projection = t), ig();
  const d = !i[nt] || Ro();
  i[De][Ve].projection[u.projection] === null && c !== null ? GL(i, a, c) : d && (u.flags & 32) !== 32 && mN(a, i, u);
}
function GL(e, t, n) {
  const r = M + n, o = t.data[r], s = e[r];
  ngDevMode && Qn(o), ngDevMode && jt(s);
  const i = yo(s, o.tView.ssrId), a = ki(e, o, void 0, {
    dehydratedView: i
  });
  Li(s, a, 0, mo(o, i));
}
function ty(e, t, n) {
  return zd(e, "", t, "", n), ty;
}
function zd(e, t, n, r, o) {
  const s = y(), i = Gi(s, t, n, r);
  if (i !== x) {
    const a = k(), c = ge();
    gt(a, c, s, e, i, s[L], o, !1), ngDevMode && Ie(a.data, c, e, ae() - 1, t, r);
  }
  return zd;
}
function ny(e, t, n, r, o, s, i) {
  const a = y(), c = Wi(a, t, n, r, o, s);
  if (c !== x) {
    const u = k(), l = ge();
    gt(u, l, a, e, c, a[L], i, !1), ngDevMode && Ie(u.data, l, e, ae() - 2, t, r, s);
  }
  return ny;
}
function ry(e, t, n, r, o, s, i, a, c) {
  const u = y(), l = Zi(u, t, n, r, o, s, i, a);
  if (l !== x) {
    const d = k(), f = ge();
    gt(d, f, u, e, l, u[L], c, !1), ngDevMode && Ie(d.data, f, e, ae() - 3, t, r, s, a);
  }
  return ry;
}
function oy(e, t, n, r, o, s, i, a, c, u, l) {
  const d = y(), f = qi(d, t, n, r, o, s, i, a, c, u);
  if (f !== x) {
    const h = k(), p = ge();
    gt(h, p, d, e, f, d[L], l, !1), ngDevMode && Ie(h.data, p, e, ae() - 4, t, r, s, a, u);
  }
  return oy;
}
function sy(e, t, n, r, o, s, i, a, c, u, l, d, f) {
  const h = y(), p = Qi(h, t, n, r, o, s, i, a, c, u, l, d);
  if (p !== x) {
    const g = k(), D = ge();
    gt(g, D, h, e, p, h[L], f, !1), ngDevMode && Ie(g.data, D, e, ae() - 5, t, r, s, a, u, d);
  }
  return sy;
}
function iy(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p) {
  const g = y(), D = Yi(g, t, n, r, o, s, i, a, c, u, l, d, f, h);
  if (D !== x) {
    const E = k(), m = ge();
    gt(E, m, g, e, D, g[L], p, !1), ngDevMode && Ie(E.data, m, e, ae() - 6, t, r, s, a, u, d, h);
  }
  return iy;
}
function ay(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D) {
  const E = y(), m = Ki(E, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g);
  if (m !== x) {
    const T = k(), R = ge();
    gt(T, R, E, e, m, E[L], D, !1), ngDevMode && Ie(T.data, R, e, ae() - 7, t, r, s, a, u, d, h, g);
  }
  return ay;
}
function cy(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D, E, m) {
  const T = y(), R = Ji(T, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D, E);
  if (R !== x) {
    const Q = k(), Se = ge();
    gt(Q, Se, T, e, R, T[L], m, !1), ngDevMode && Ie(Q.data, Se, e, ae() - 8, t, r, s, a, u, d, h, g, E);
  }
  return cy;
}
function uy(e, t, n) {
  const r = y(), o = zi(r, t);
  if (o !== x) {
    const s = k(), i = ge();
    if (gt(s, i, r, e, o, r[L], n, !1), ngDevMode) {
      const a = [t[0]];
      for (let c = 2; c < t.length; c += 2)
        a.push(t[c]);
      Ie(s.data, i, e, ae() - a.length + 1, ...a);
    }
  }
  return uy;
}
function _M(e, t, n, r) {
  Ew(e, t, n, r);
}
function MM(e, t, n) {
  Dw(e, t, n);
}
function SM(e) {
  const t = y(), n = k(), r = ug();
  od(r + 1);
  const o = pm(n, r);
  if (e.dirty && Lc(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null)
      e.reset([]);
    else {
      const s = Iw(t, r);
      e.reset(s, tb), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function TM() {
  return hm(y(), ug());
}
function AM(e, t, n, r, o) {
  Aw(t, Ew(e, n, r, o));
}
function OM(e, t, n, r) {
  Aw(e, Dw(t, n, r));
}
function PM(e = 1) {
  od(ug() + e);
}
function Gd(e, t, n, r) {
  n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = r;
}
function xM(e) {
  const t = II();
  return No(t, M + e);
}
function NM(e, t, n) {
  const r = y(), o = Gi(r, e, t, n);
  Qt(o);
}
function RM(e, t, n, r, o) {
  const s = y(), i = Wi(s, e, t, n, r, o);
  Qt(i);
}
function FM(e, t, n, r, o, s, i) {
  const a = y(), c = Zi(a, e, t, n, r, o, s, i);
  Qt(c);
}
function kM(e, t, n, r, o, s, i, a, c) {
  const u = y(), l = qi(u, e, t, n, r, o, s, i, a, c);
  Qt(l);
}
function LM(e, t, n, r, o, s, i, a, c, u, l) {
  const d = y(), f = Qi(d, e, t, n, r, o, s, i, a, c, u, l);
  Qt(f);
}
function jM(e, t, n, r, o, s, i, a, c, u, l, d, f) {
  const h = y(), p = Yi(h, e, t, n, r, o, s, i, a, c, u, l, d, f);
  Qt(p);
}
function $M(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p) {
  const g = y(), D = Ki(g, e, t, n, r, o, s, i, a, c, u, l, d, f, h, p);
  Qt(D);
}
function BM(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D) {
  const E = y(), m = Ji(E, e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D);
  Qt(m);
}
function HM(e) {
  const t = y(), n = zi(t, e);
  Qt(n);
}
function ly(e, t, n, r, o) {
  const s = y(), i = Gi(s, t, n, r);
  return Yt(e, i, o, !1), ly;
}
function dy(e, t, n, r, o, s, i) {
  const a = y(), c = Wi(a, t, n, r, o, s);
  return Yt(e, c, i, !1), dy;
}
function fy(e, t, n, r, o, s, i, a, c) {
  const u = y(), l = Zi(u, t, n, r, o, s, i, a);
  return Yt(e, l, c, !1), fy;
}
function hy(e, t, n, r, o, s, i, a, c, u, l) {
  const d = y(), f = qi(d, t, n, r, o, s, i, a, c, u);
  return Yt(e, f, l, !1), hy;
}
function py(e, t, n, r, o, s, i, a, c, u, l, d, f) {
  const h = y(), p = Qi(h, t, n, r, o, s, i, a, c, u, l, d);
  return Yt(e, p, f, !1), py;
}
function gy(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p) {
  const g = y(), D = Yi(g, t, n, r, o, s, i, a, c, u, l, d, f, h);
  return Yt(e, D, p, !1), gy;
}
function my(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D) {
  const E = y(), m = Ki(E, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g);
  return Yt(e, m, D, !1), my;
}
function yy(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D, E, m) {
  const T = y(), R = Ji(T, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D, E);
  return Yt(e, R, m, !1), yy;
}
function vy(e, t, n) {
  const r = y(), o = zi(r, t);
  return Yt(e, o, n, !1), vy;
}
function UM(e, t = "") {
  const n = y(), r = k(), o = e + M;
  ngDevMode && O(ae(), r.bindingStartIndex, "text nodes should be created before any bindings"), ngDevMode && _e(n, o);
  const s = r.firstCreatePass ? Bo(r, o, 1, t, null) : r.data[o], i = VM(r, n, s, t, e);
  n[o] = i, jc() && Dd(r, n, i, s), Wt(s, !1);
}
let VM = (e, t, n, r, o) => (gn(!0), Bg(t[L], r));
function WL(e, t, n, r, o) {
  const s = t[nt], i = !s || Ro() || Bi(n) || Lo(s, o);
  if (gn(i), i)
    return Bg(t[L], r);
  const a = Zc(s, e, t, n);
  return ngDevMode && Gc(a, Node.TEXT_NODE, null, t, n), ngDevMode && ko(a), a;
}
function ZL() {
  VM = WL;
}
function Dy(e) {
  return Wd("", e, ""), Dy;
}
function Wd(e, t, n) {
  const r = y(), o = Gi(r, e, t, n);
  return o !== x && Fn(r, Ge(), o), Wd;
}
function Ey(e, t, n, r, o) {
  const s = y(), i = Wi(s, e, t, n, r, o);
  return i !== x && Fn(s, Ge(), i), Ey;
}
function Cy(e, t, n, r, o, s, i) {
  const a = y(), c = Zi(a, e, t, n, r, o, s, i);
  return c !== x && Fn(a, Ge(), c), Cy;
}
function Iy(e, t, n, r, o, s, i, a, c) {
  const u = y(), l = qi(u, e, t, n, r, o, s, i, a, c);
  return l !== x && Fn(u, Ge(), l), Iy;
}
function by(e, t, n, r, o, s, i, a, c, u, l) {
  const d = y(), f = Qi(d, e, t, n, r, o, s, i, a, c, u, l);
  return f !== x && Fn(d, Ge(), f), by;
}
function wy(e, t, n, r, o, s, i, a, c, u, l, d, f) {
  const h = y(), p = Yi(h, e, t, n, r, o, s, i, a, c, u, l, d, f);
  return p !== x && Fn(h, Ge(), p), wy;
}
function _y(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p) {
  const g = y(), D = Ki(g, e, t, n, r, o, s, i, a, c, u, l, d, f, h, p);
  return D !== x && Fn(g, Ge(), D), _y;
}
function My(e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D) {
  const E = y(), m = Ji(E, e, t, n, r, o, s, i, a, c, u, l, d, f, h, p, g, D);
  return m !== x && Fn(E, Ge(), m), My;
}
function Sy(e) {
  const t = y(), n = zi(t, e);
  return n !== x && Fn(t, Ge(), n), Sy;
}
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
function Ty(e, t, n) {
  _w(t) && (t = t());
  const r = y(), o = qt();
  if (Oe(r, o, t)) {
    const s = k(), i = ge();
    gt(s, i, r, e, t, r[L], n, !1), ngDevMode && Ie(s.data, i, e, o);
  }
  return Ty;
}
function zM(e, t) {
  const n = _w(e);
  return n && e.set(t), n;
}
function Ay(e, t) {
  const n = y(), r = k(), o = re();
  return ey(r, n, n[L], o, e, t), Ay;
}
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
const GM = {};
function Oy(e) {
  const t = k(), n = y(), r = e + M, o = Bo(t, r, 128, null, null);
  return Wt(o, !1), Gd(t, n, r, GM), Oy;
}
function WM(e) {
  We("NgLet");
  const t = k(), n = y(), r = Ge();
  return Gd(t, n, r, e), e;
}
function ZM(e) {
  const t = II(), n = No(t, M + e);
  if (n === GM)
    throw new v(314, ngDevMode && "Attempting to access a @let declaration whose value is not available yet");
  return n;
}
function qL(e, t, n) {
  const r = k();
  if (r.firstCreatePass) {
    const o = xt(e);
    ip(n, r.data, r.blueprint, o, !0), ip(t, r.data, r.blueprint, o, !1);
  }
}
function ip(e, t, n, r, o) {
  if (e = $(e), Array.isArray(e))
    for (let s = 0; s < e.length; s++)
      ip(e[s], t, n, r, o);
  else {
    const s = k(), i = y(), a = re();
    let c = io(e) ? e : $(e.provide);
    const u = ZC(e);
    if (ngDevMode) {
      const h = new Ce(a, i);
      da(h, c, () => {
        ah(e, o);
      });
    }
    const l = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (io(e) || !e.multi) {
      const h = new $c(u, o, $o), p = xf(c, t, o ? l : l + f, d);
      p === -1 ? (Eh(el(a, i), s, c), Pf(s, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, o && (a.providerIndexes += 1048576), n.push(h), i.push(h)) : (n[p] = h, i[p] = h);
    } else {
      const h = xf(c, t, l + f, d), p = xf(c, t, l, l + f), g = h >= 0 && n[h], D = p >= 0 && n[p];
      if (o && !D || !o && !g) {
        Eh(el(a, i), s, c);
        const E = KL(o ? YL : QL, n.length, o, r, u);
        !o && D && (n[p].providerFactory = E), Pf(s, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, o && (a.providerIndexes += 1048576), n.push(E), i.push(E);
      } else {
        const E = qM(n[o ? p : h], u, !o && r);
        Pf(s, e, h > -1 ? h : p, E);
      }
      !o && r && D && n[p].componentProviders++;
    }
  }
}
function Pf(e, t, n, r) {
  const o = io(t), s = mO(t);
  if (o || s) {
    const c = (s ? $(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
      const u = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        ngDevMode && b(r, "indexInFactory when registering multi factory destroy hook");
        const l = u.indexOf(n);
        l === -1 ? u.push(n, [r, c]) : u[l + 1].push(r, c);
      } else
        u.push(n, c);
    }
  }
}
function qM(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function xf(e, t, n, r) {
  for (let o = n; o < r; o++)
    if (t[o] === e)
      return o;
  return -1;
}
function QL(e, t, n, r) {
  return ap(this.multi, []);
}
function YL(e, t, n, r) {
  const o = this.multi;
  let s;
  if (this.providerFactory) {
    const i = this.providerFactory.componentProviders, a = fo(n, n[C], this.providerFactory.index, r);
    s = a.slice(0, i), ap(o, s);
    for (let c = i; c < a.length; c++)
      s.push(a[c]);
  } else
    s = [], ap(o, s);
  return s;
}
function ap(e, t) {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r());
  }
  return t;
}
function KL(e, t, n, r, o) {
  const s = new $c(e, n, $o);
  return s.multi = [], s.index = t, s.componentProviders = 0, qM(s, o, r && !n), s;
}
function QM(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => qL(
      r,
      //
      o ? o(e) : e,
      //
      t
    );
  };
}
const Na = class Na {
  constructor(t) {
    this._injector = t, this.cachedInjectors = /* @__PURE__ */ new Map();
  }
  getOrCreateStandaloneInjector(t) {
    if (!t.standalone)
      return null;
    if (!this.cachedInjectors.has(t)) {
      const n = qp(!1, t.type), r = n.length > 0 ? bm([n], this._injector, `Standalone[${t.type.name}]`) : null;
      this.cachedInjectors.set(t, r);
    }
    return this.cachedInjectors.get(t);
  }
  ngOnDestroy() {
    try {
      for (const t of this.cachedInjectors.values())
        t !== null && t.destroy();
    } finally {
      this.cachedInjectors.clear();
    }
  }
};
Na.ɵprov = se({
  token: Na,
  providedIn: "environment",
  factory: () => new Na(He(Pt))
});
let cp = Na;
function YM(e) {
  We("NgStandalone"), e.getStandaloneInjector = (t) => t.get(cp).getOrCreateStandaloneInjector(e);
}
function KM(e, t, n) {
  const r = e.ɵcmp;
  r.directiveDefs = Qu(
    t,
    /* pipeDef */
    !1
  ), r.pipeDefs = Qu(
    n,
    /* pipeDef */
    !0
  );
}
function JM(e, t) {
  return hn(() => {
    const n = It(e, !0);
    n.declarations = mu(t.declarations || K), n.imports = mu(t.imports || K), n.exports = mu(t.exports || K), t.bootstrap && (n.bootstrap = mu(t.bootstrap)), Do.registerNgModule(e, t);
  });
}
function mu(e) {
  if (typeof e == "function")
    return e;
  const t = lt(e);
  return t.some(Gl) ? () => t.map($).map(WD) : t.map(WD);
}
function WD(e) {
  return am(e) ? e.ngModule : e;
}
const ku = "__ngAsyncComponentMetadataFn__";
function JL(e) {
  return e[ku] ?? null;
}
function XM(e, t, n) {
  const r = e;
  return r[ku] = () => Promise.all(t()).then((o) => (n(...o), r[ku] = null, o)), r[ku];
}
function it(e, t, n, r) {
  return hn(() => {
    const o = e;
    t !== null && (o.hasOwnProperty("decorators") && o.decorators !== void 0 ? o.decorators.push(...t) : o.decorators = t), n !== null && (o.ctorParameters = n), r !== null && (o.hasOwnProperty("propDecorators") && o.propDecorators !== void 0 ? o.propDecorators = { ...o.propDecorators, ...r } : o.propDecorators = r);
  });
}
function eS(e, t, n) {
  const r = st() + e, o = y();
  return o[r] === x ? vn(o, r, n ? t.call(n) : t()) : Qc(o, r);
}
function tS(e, t, n, r) {
  return lS(y(), st(), e, t, n, r);
}
function nS(e, t, n, r, o) {
  return dS(y(), st(), e, t, n, r, o);
}
function rS(e, t, n, r, o, s) {
  return fS(y(), st(), e, t, n, r, o, s);
}
function oS(e, t, n, r, o, s, i) {
  return hS(y(), st(), e, t, n, r, o, s, i);
}
function sS(e, t, n, r, o, s, i, a) {
  const c = st() + e, u = y(), l = Ft(u, c, n, r, o, s);
  return Oe(u, c + 4, i) || l ? vn(u, c + 5, a ? t.call(a, n, r, o, s, i) : t(n, r, o, s, i)) : Qc(u, c + 5);
}
function iS(e, t, n, r, o, s, i, a, c) {
  const u = st() + e, l = y(), d = Ft(l, u, n, r, o, s);
  return Eo(l, u + 4, i, a) || d ? vn(l, u + 6, c ? t.call(c, n, r, o, s, i, a) : t(n, r, o, s, i, a)) : Qc(l, u + 6);
}
function aS(e, t, n, r, o, s, i, a, c, u) {
  const l = st() + e, d = y();
  let f = Ft(d, l, n, r, o, s);
  return Nd(d, l + 4, i, a, c) || f ? vn(d, l + 7, u ? t.call(u, n, r, o, s, i, a, c) : t(n, r, o, s, i, a, c)) : Qc(d, l + 7);
}
function cS(e, t, n, r, o, s, i, a, c, u, l) {
  const d = st() + e, f = y(), h = Ft(f, d, n, r, o, s);
  return Ft(f, d + 4, i, a, c, u) || h ? vn(f, d + 8, l ? t.call(l, n, r, o, s, i, a, c, u) : t(n, r, o, s, i, a, c, u)) : Qc(f, d + 8);
}
function uS(e, t, n, r) {
  return pS(y(), st(), e, t, n, r);
}
function Jc(e, t) {
  ngDevMode && _e(e, t);
  const n = e[t];
  return n === x ? void 0 : n;
}
function lS(e, t, n, r, o, s) {
  const i = t + n;
  return Oe(e, i, o) ? vn(e, i + 1, s ? r.call(s, o) : r(o)) : Jc(e, i + 1);
}
function dS(e, t, n, r, o, s, i) {
  const a = t + n;
  return Eo(e, a, o, s) ? vn(e, a + 2, i ? r.call(i, o, s) : r(o, s)) : Jc(e, a + 2);
}
function fS(e, t, n, r, o, s, i, a) {
  const c = t + n;
  return Nd(e, c, o, s, i) ? vn(e, c + 3, a ? r.call(a, o, s, i) : r(o, s, i)) : Jc(e, c + 3);
}
function hS(e, t, n, r, o, s, i, a, c) {
  const u = t + n;
  return Ft(e, u, o, s, i, a) ? vn(e, u + 4, c ? r.call(c, o, s, i, a) : r(o, s, i, a)) : Jc(e, u + 4);
}
function pS(e, t, n, r, o, s) {
  let i = t + n, a = !1;
  for (let c = 0; c < o.length; c++)
    Oe(e, i++, o[c]) && (a = !0);
  return a ? vn(e, i, r.apply(s, o)) : Jc(e, i);
}
function gS(e, t) {
  const n = k();
  let r;
  const o = e + M;
  n.firstCreatePass ? (r = XL(t, n.pipeRegistry), n.data[o] = r, r.onDestroy && (n.destroyHooks ?? (n.destroyHooks = [])).push(o, r.onDestroy)) : r = n.data[o];
  const s = r.factory || (r.factory = so(r.type, !0));
  let i;
  ngDevMode && (i = Xe({
    injector: new Ce(re(), y()),
    token: r.type
  }));
  const a = ut($o);
  try {
    const c = Xu(!1), u = s();
    return Xu(c), Gd(n, y(), o, u), u;
  } finally {
    ut(a), ngDevMode && Xe(i);
  }
}
function XL(e, t) {
  if (t) {
    ngDevMode && t.filter((r) => r.name === e).length > 1 && console.warn(fe(313, e2(e)));
    for (let n = t.length - 1; n >= 0; n--) {
      const r = t[n];
      if (e === r.name)
        return r;
    }
  }
  if (ngDevMode)
    throw new v(-302, t2(e));
}
function e2(e) {
  const t = y(), r = t[De][he], o = gd(t), s = r ? ` in the '${r.constructor.name}' component` : "";
  return `Multiple pipes match the name \`${e}\`${s}. ${`check ${o ? "'@Component.imports' of this component" : "the imports of this module"}`}`;
}
function t2(e) {
  const t = y(), r = t[De][he], o = gd(t), s = r ? ` in the '${r.constructor.name}' component` : "";
  return `The pipe '${e}' could not be found${s}. ${`Verify that it is ${o ? "included in the '@Component.imports' of this component" : "declared or imported in this module"}`}`;
}
function mS(e, t, n) {
  const r = e + M, o = y(), s = No(o, r);
  return Xc(o, r) ? lS(o, st(), t, s.transform, n, s) : s.transform(n);
}
function yS(e, t, n, r) {
  const o = e + M, s = y(), i = No(s, o);
  return Xc(s, o) ? dS(s, st(), t, i.transform, n, r, i) : i.transform(n, r);
}
function vS(e, t, n, r, o) {
  const s = e + M, i = y(), a = No(i, s);
  return Xc(i, s) ? fS(i, st(), t, a.transform, n, r, o, a) : a.transform(n, r, o);
}
function DS(e, t, n, r, o, s) {
  const i = e + M, a = y(), c = No(a, i);
  return Xc(a, i) ? hS(a, st(), t, c.transform, n, r, o, s, c) : c.transform(n, r, o, s);
}
function ES(e, t, n) {
  const r = e + M, o = y(), s = No(o, r);
  return Xc(o, r) ? pS(o, st(), t, s.transform, n, s) : s.transform.apply(s, n);
}
function Xc(e, t) {
  return e[C].data[t].pure;
}
function CS(e, t) {
  return Md(e, t);
}
function IS(e, t) {
  return () => {
    try {
      return Do.getComponentDependencies(e, t).dependencies;
    } catch (n) {
      throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
    }
  };
}
function bS(e, t) {
  const n = q(e);
  n !== null && (n.debugInfo = t);
}
const tt = {
  ɵɵattribute: Om,
  ɵɵattributeInterpolate1: Pm,
  ɵɵattributeInterpolate2: xm,
  ɵɵattributeInterpolate3: Nm,
  ɵɵattributeInterpolate4: Rm,
  ɵɵattributeInterpolate5: Fm,
  ɵɵattributeInterpolate6: km,
  ɵɵattributeInterpolate7: Lm,
  ɵɵattributeInterpolate8: jm,
  ɵɵattributeInterpolateV: $m,
  ɵɵdefineComponent: LC,
  ɵɵdefineDirective: jC,
  ɵɵdefineInjectable: se,
  ɵɵdefineInjector: Wl,
  ɵɵdefineNgModule: Zp,
  ɵɵdefinePipe: $C,
  ɵɵdirectiveInject: $o,
  ɵɵgetInheritedFactory: GI,
  ɵɵinject: He,
  ɵɵinjectAttribute: ad,
  ɵɵinvalidFactory: C0,
  ɵɵinvalidFactoryDep: Vp,
  ɵɵtemplateRefExtractor: CS,
  ɵɵresetView: EI,
  ɵɵHostDirectivesFeature: Vw,
  ɵɵNgOnChangesFeature: eg,
  ɵɵProvidersFeature: QM,
  ɵɵCopyDefinitionFeature: Uw,
  ɵɵInheritDefinitionFeature: Cm,
  ɵɵInputTransformsFeature: Gw,
  ɵɵStandaloneFeature: YM,
  ɵɵnextContext: IM,
  ɵɵnamespaceHTML: NI,
  ɵɵnamespaceMathML: xI,
  ɵɵnamespaceSVG: PI,
  ɵɵenableBindings: yI,
  ɵɵdisableBindings: vI,
  ɵɵelementStart: Ld,
  ɵɵelementEnd: jd,
  ɵɵelement: zm,
  ɵɵelementContainerStart: $d,
  ɵɵelementContainerEnd: Bd,
  ɵɵelementContainer: Gm,
  ɵɵpureFunction0: eS,
  ɵɵpureFunction1: tS,
  ɵɵpureFunction2: nS,
  ɵɵpureFunction3: rS,
  ɵɵpureFunction4: oS,
  ɵɵpureFunction5: sS,
  ɵɵpureFunction6: iS,
  ɵɵpureFunction7: aS,
  ɵɵpureFunction8: cS,
  ɵɵpureFunctionV: uS,
  ɵɵgetCurrentView: oM,
  ɵɵrestoreView: DI,
  ɵɵlistener: Jm,
  ɵɵprojection: wM,
  ɵɵsyntheticHostProperty: Zm,
  ɵɵsyntheticHostListener: Xm,
  ɵɵpipeBind1: mS,
  ɵɵpipeBind2: yS,
  ɵɵpipeBind3: vS,
  ɵɵpipeBind4: DS,
  ɵɵpipeBindV: ES,
  ɵɵprojectionDef: bM,
  ɵɵhostProperty: Wm,
  ɵɵproperty: Bm,
  ɵɵpropertyInterpolate: ty,
  ɵɵpropertyInterpolate1: zd,
  ɵɵpropertyInterpolate2: ny,
  ɵɵpropertyInterpolate3: ry,
  ɵɵpropertyInterpolate4: oy,
  ɵɵpropertyInterpolate5: sy,
  ɵɵpropertyInterpolate6: iy,
  ɵɵpropertyInterpolate7: ay,
  ɵɵpropertyInterpolate8: cy,
  ɵɵpropertyInterpolateV: uy,
  ɵɵpipe: gS,
  ɵɵqueryRefresh: SM,
  ɵɵqueryAdvance: PM,
  ɵɵviewQuery: MM,
  ɵɵviewQuerySignal: OM,
  ɵɵloadQuery: TM,
  ɵɵcontentQuery: _M,
  ɵɵcontentQuerySignal: AM,
  ɵɵreference: xM,
  ɵɵclassMap: F_,
  ɵɵclassMapInterpolate1: H_,
  ɵɵclassMapInterpolate2: U_,
  ɵɵclassMapInterpolate3: V_,
  ɵɵclassMapInterpolate4: z_,
  ɵɵclassMapInterpolate5: G_,
  ɵɵclassMapInterpolate6: W_,
  ɵɵclassMapInterpolate7: Z_,
  ɵɵclassMapInterpolate8: q_,
  ɵɵclassMapInterpolateV: Q_,
  ɵɵstyleMap: Qt,
  ɵɵstyleMapInterpolate1: NM,
  ɵɵstyleMapInterpolate2: RM,
  ɵɵstyleMapInterpolate3: FM,
  ɵɵstyleMapInterpolate4: kM,
  ɵɵstyleMapInterpolate5: LM,
  ɵɵstyleMapInterpolate6: jM,
  ɵɵstyleMapInterpolate7: $M,
  ɵɵstyleMapInterpolate8: BM,
  ɵɵstyleMapInterpolateV: HM,
  ɵɵstyleProp: Hm,
  ɵɵstylePropInterpolate1: ly,
  ɵɵstylePropInterpolate2: dy,
  ɵɵstylePropInterpolate3: fy,
  ɵɵstylePropInterpolate4: hy,
  ɵɵstylePropInterpolate5: py,
  ɵɵstylePropInterpolate6: gy,
  ɵɵstylePropInterpolate7: my,
  ɵɵstylePropInterpolate8: yy,
  ɵɵstylePropInterpolateV: vy,
  ɵɵclassProp: Um,
  ɵɵadvance: D0,
  ɵɵtemplate: Mm,
  ɵɵconditional: K_,
  ɵɵdefer: f_,
  ɵɵdeferWhen: h_,
  ɵɵdeferOnIdle: g_,
  ɵɵdeferOnImmediate: y_,
  ɵɵdeferOnTimer: D_,
  ɵɵdeferOnHover: C_,
  ɵɵdeferOnInteraction: b_,
  ɵɵdeferOnViewport: __,
  ɵɵdeferPrefetchWhen: p_,
  ɵɵdeferPrefetchOnIdle: m_,
  ɵɵdeferPrefetchOnImmediate: v_,
  ɵɵdeferPrefetchOnTimer: E_,
  ɵɵdeferPrefetchOnHover: I_,
  ɵɵdeferPrefetchOnInteraction: w_,
  ɵɵdeferPrefetchOnViewport: M_,
  ɵɵdeferEnableTimerScheduling: d_,
  ɵɵrepeater: eM,
  ɵɵrepeaterCreate: X_,
  ɵɵrepeaterTrackByIndex: J_,
  ɵɵrepeaterTrackByIdentity: Vm,
  ɵɵcomponentInstance: Y_,
  ɵɵtext: UM,
  ɵɵtextInterpolate: Dy,
  ɵɵtextInterpolate1: Wd,
  ɵɵtextInterpolate2: Ey,
  ɵɵtextInterpolate3: Cy,
  ɵɵtextInterpolate4: Iy,
  ɵɵtextInterpolate5: by,
  ɵɵtextInterpolate6: wy,
  ɵɵtextInterpolate7: _y,
  ɵɵtextInterpolate8: My,
  ɵɵtextInterpolateV: Sy,
  ɵɵi18n: yM,
  ɵɵi18nAttributes: vM,
  ɵɵi18nExp: Km,
  ɵɵi18nStart: Qm,
  ɵɵi18nEnd: Ym,
  ɵɵi18nApply: DM,
  ɵɵi18nPostprocess: EM,
  ɵɵresolveWindow: e0,
  ɵɵresolveDocument: t0,
  ɵɵresolveBody: jg,
  ɵɵsetComponentScope: KM,
  ɵɵsetNgModuleScope: JM,
  ɵɵregisterNgModuleType: Em,
  ɵɵgetComponentDepsFactory: IS,
  ɵsetClassDebugInfo: bS,
  ɵɵdeclareLet: Oy,
  ɵɵstoreLet: WM,
  ɵɵreadContextLet: ZM,
  ɵɵsanitizeHtml: zb,
  ɵɵsanitizeStyle: Gb,
  ɵɵsanitizeResourceUrl: Rg,
  ɵɵsanitizeScript: Wb,
  ɵɵsanitizeUrl: Ng,
  ɵɵsanitizeUrlOrResourceUrl: Qb,
  ɵɵtrustConstantHtml: Zb,
  ɵɵtrustConstantResourceUrl: qb,
  ɵɵvalidateIframeAttribute: Bw,
  forwardRef: zl,
  resolveForwardRef: $,
  ɵɵtwoWayProperty: Ty,
  ɵɵtwoWayBindingSet: zM,
  ɵɵtwoWayListener: Ay
};
let ns = null;
function n2(e) {
  if (ns !== null) {
    if (e.defaultEncapsulation !== ns.defaultEncapsulation) {
      ngDevMode && console.error("Provided value for `defaultEncapsulation` can not be changed once it has been set.");
      return;
    }
    if (e.preserveWhitespaces !== ns.preserveWhitespaces) {
      ngDevMode && console.error("Provided value for `preserveWhitespaces` can not be changed once it has been set.");
      return;
    }
  }
  ns = e;
}
function r2() {
  return ns;
}
function o2() {
  ns = null;
}
const Ia = [];
function s2(e, t) {
  Ia.push({ moduleType: e, ngModule: t });
}
let Nf = !1;
function wS() {
  if (!Nf) {
    Nf = !0;
    try {
      for (let e = Ia.length - 1; e >= 0; e--) {
        const { moduleType: t, ngModule: n } = Ia[e];
        n.declarations && n.declarations.every(_S) && (Ia.splice(e, 1), c2(t, n));
      }
    } finally {
      Nf = !1;
    }
  }
}
function _S(e) {
  return Array.isArray(e) ? e.every(_S) : !!$(e);
}
function MS(e, t = {}) {
  SS(e, t), t.id !== void 0 && Em(e, t.id), s2(e, t);
}
function SS(e, t, n = !1) {
  ngDevMode && b(e, "Required value moduleType"), ngDevMode && b(t, "Required value ngModule");
  const r = lt(t.declarations || K);
  let o = null;
  Object.defineProperty(e, Bp, {
    configurable: !0,
    get: () => {
      if (o === null) {
        if (ngDevMode && t.imports && t.imports.indexOf(e) > -1)
          throw new Error(`'${W(e)}' module can't import itself`);
        o = Le({
          usage: 0,
          kind: "NgModule",
          type: e
        }).compileNgModule(tt, `ng:///${e.name}/ɵmod.js`, {
          type: e,
          bootstrap: lt(t.bootstrap || K).map($),
          declarations: r.map($),
          imports: lt(t.imports || K).map($).map(qD),
          exports: lt(t.exports || K).map($).map(qD),
          schemas: t.schemas ? lt(t.schemas) : null,
          id: t.id || null
        }), o.schemas || (o.schemas = []);
      }
      return o;
    }
  });
  let s = null;
  Object.defineProperty(e, wn, {
    get: () => {
      if (s === null) {
        const a = Le({
          usage: 0,
          kind: "NgModule",
          type: e
        });
        s = a.compileFactory(tt, `ng:///${e.name}/ɵfac.js`, {
          name: e.name,
          type: e,
          deps: cd(e),
          target: a.FactoryTarget.NgModule,
          typeArgumentCount: 0
        });
      }
      return s;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  });
  let i = null;
  Object.defineProperty(e, zu, {
    get: () => {
      if (i === null) {
        ngDevMode && yl(e, n);
        const a = {
          name: e.name,
          type: e,
          providers: t.providers || K,
          imports: [
            (t.imports || K).map($),
            (t.exports || K).map($)
          ]
        };
        i = Le({
          usage: 0,
          kind: "NgModule",
          type: e
        }).compileInjector(tt, `ng:///${e.name}/ɵinj.js`, a);
      }
      return i;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  });
}
function TS(e, t) {
  const n = `Unexpected "${W(e)}" found in the "declarations" array of the`, r = `"${W(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`;
  return `${n} ${t}, ${r}`;
}
function yl(e, t, n) {
  if (up.get(e) || Vn(e))
    return;
  up.set(e, !0), e = $(e);
  let r;
  if (n) {
    if (r = It(e), !r)
      throw new Error(`Unexpected value '${e.name}' imported by the module '${n.name}'. Please add an @NgModule annotation.`);
  } else
    r = It(e, !0);
  const o = [], s = on(r.declarations), i = on(r.imports);
  lt(i).map(ZD).forEach((m) => {
    E(m, e), yl(m, !1, e);
  });
  const a = on(r.exports);
  s.forEach(l), s.forEach(d), s.forEach((m) => f(m, e));
  const c = [
    ...s.map($),
    ...lt(i.map(AS)).map($)
  ];
  a.forEach(h), s.forEach((m) => p(m, t));
  const u = i2(e, "NgModule");
  if (u && (u.imports && lt(u.imports).map(ZD).forEach((m) => {
    E(m, e), yl(m, !1, e);
  }), u.bootstrap && Rs(u.bootstrap, D), u.bootstrap && Rs(u.bootstrap, g)), o.length)
    throw new Error(o.join(`
`));
  function l(m) {
    m = $(m), q(m) || Be(m) || vt(m) || o.push(`Unexpected value '${W(m)}' declared by the module '${W(e)}'. Please add a @Pipe/@Directive/@Component annotation.`);
  }
  function d(m) {
    m = $(m);
    const T = Be(m);
    !q(m) && T && T.selectors.length == 0 && o.push(`Directive ${W(m)} has no selector, please add it!`);
  }
  function f(m, T) {
    m = $(m);
    const R = q(m) || Be(m) || vt(m);
    if (R != null && R.standalone) {
      const Q = `"${W(T)}" NgModule`;
      o.push(TS(m, Q));
    }
  }
  function h(m) {
    m = $(m);
    const T = q(m) && "component" || Be(m) && "directive" || vt(m) && "pipe";
    T && c.lastIndexOf(m) === -1 && o.push(`Can't export ${T} ${W(m)} from ${W(e)} as it was neither declared nor imported!`);
  }
  function p(m, T) {
    m = $(m);
    const R = Lu.get(m);
    if (R && R !== e) {
      if (!T) {
        const Q = [R, e].map(W).sort();
        o.push(`Type ${W(m)} is part of the declarations of 2 modules: ${Q[0]} and ${Q[1]}! Please consider moving ${W(m)} to a higher module that imports ${Q[0]} and ${Q[1]}. You can also create a new NgModule that exports and includes ${W(m)} then import that NgModule in ${Q[0]} and ${Q[1]}.`);
      }
    } else
      Lu.set(m, e);
  }
  function g(m) {
    m = $(m), !Lu.get(m) && !Vn(m) && o.push(`Component ${W(m)} is not part of any NgModule or the module has not been imported into your module.`);
  }
  function D(m) {
    m = $(m), q(m) || o.push(`${W(m)} cannot be used as an entry component.`), Vn(m) && o.push(`The \`${W(m)}\` class is a standalone component, which can not be used in the \`@NgModule.bootstrap\` array. Use the \`bootstrapApplication\` function for bootstrap instead.`);
  }
  function E(m, T) {
    m = $(m);
    const R = q(m) || Be(m);
    if (R !== null && !R.standalone)
      throw new Error(`Unexpected directive '${m.name}' imported by the module '${T.name}'. Please add an @NgModule annotation.`);
    const Q = vt(m);
    if (Q !== null && !Q.standalone)
      throw new Error(`Unexpected pipe '${m.name}' imported by the module '${T.name}'. Please add an @NgModule annotation.`);
  }
}
function ZD(e) {
  return e = $(e), e.ngModule || e;
}
function i2(e, t) {
  let n = null;
  return r(e.__annotations__), r(e.decorators), n;
  function r(s) {
    s && s.forEach(o);
  }
  function o(s) {
    n || (Object.getPrototypeOf(s).ngMetadataName == t ? n = s : s.type && Object.getPrototypeOf(s.type).ngMetadataName == t && (n = s.args[0]));
  }
}
let Lu = /* @__PURE__ */ new WeakMap(), up = /* @__PURE__ */ new WeakMap();
function a2() {
  Lu = /* @__PURE__ */ new WeakMap(), up = /* @__PURE__ */ new WeakMap(), Ia.length = 0, Ou.clear();
}
function AS(e) {
  e = $(e);
  const t = It(e);
  return t === null ? [e] : lt(on(t.exports).map((n) => It(n) ? (yl(n, !1), AS(n)) : n));
}
function c2(e, t) {
  const n = lt(t.declarations || K), r = xy(e);
  n.forEach((o) => {
    if (o = $(o), o.hasOwnProperty(Ti)) {
      const i = q(o);
      Py(i, r);
    } else !o.hasOwnProperty(Zl) && !o.hasOwnProperty(ql) && (o.ngSelectorScope = e);
  });
}
function Py(e, t) {
  e.directiveDefs = () => Array.from(t.compilation.directives).map((n) => n.hasOwnProperty(Ti) ? q(n) : Be(n)).filter((n) => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map((n) => vt(n)), e.schemas = t.schemas, e.tView = null;
}
function xy(e) {
  if (_r(e)) {
    const t = Do.getNgModuleScope(e);
    return {
      schemas: It(e, !0).schemas || null,
      ...t
    };
  } else if (Vn(e)) {
    if ((q(e) || Be(e)) !== null)
      return {
        schemas: null,
        compilation: {
          directives: /* @__PURE__ */ new Set(),
          pipes: /* @__PURE__ */ new Set()
        },
        exported: {
          directives: /* @__PURE__ */ new Set([e]),
          pipes: /* @__PURE__ */ new Set()
        }
      };
    if (vt(e) !== null)
      return {
        schemas: null,
        compilation: {
          directives: /* @__PURE__ */ new Set(),
          pipes: /* @__PURE__ */ new Set()
        },
        exported: {
          directives: /* @__PURE__ */ new Set(),
          pipes: /* @__PURE__ */ new Set([e])
        }
      };
  }
  throw new Error(`${e.name} does not have a module def (ɵmod property)`);
}
function qD(e) {
  return am(e) ? e.ngModule : e;
}
let Rf = 0;
function OS(e, t) {
  (typeof ngDevMode > "u" || ngDevMode) && kp();
  let n = null;
  xF(e, t), xS(e, t), Object.defineProperty(e, Ti, {
    get: () => {
      if (n === null) {
        const r = Le({
          usage: 0,
          kind: "component",
          type: e
        });
        if (kw(t)) {
          const u = [`Component '${e.name}' is not resolved:`];
          throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
        }
        const o = r2();
        let s = t.preserveWhitespaces;
        s === void 0 && (o !== null && o.preserveWhitespaces !== void 0 ? s = o.preserveWhitespaces : s = !1);
        let i = t.encapsulation;
        i === void 0 && (o !== null && o.defaultEncapsulation !== void 0 ? i = o.defaultEncapsulation : i = _n.Emulated);
        const a = t.templateUrl || `ng:///${e.name}/template.html`, c = {
          ...NS(e, t),
          typeSourceSpan: r.createParseSourceSpan("Component", e.name, a),
          template: t.template || "",
          preserveWhitespaces: s,
          styles: typeof t.styles == "string" ? [t.styles] : t.styles || K,
          animations: t.animations,
          // JIT components are always compiled against an empty set of `declarations`. Instead, the
          // `directiveDefs` and `pipeDefs` are updated at a later point:
          //  * for NgModule-based components, they're set when the NgModule which declares the
          //    component resolves in the module scoping queue
          //  * for standalone components, they're set just below, after `compileComponent`.
          declarations: [],
          changeDetection: t.changeDetection,
          encapsulation: i,
          interpolation: t.interpolation,
          viewProviders: t.viewProviders || null
        };
        Rf++;
        try {
          if (c.usesInheritance && RS(e), n = r.compileComponent(tt, a, c), t.standalone) {
            const u = lt(t.imports || K), { directiveDefs: l, pipeDefs: d } = u2(e, u);
            n.directiveDefs = l, n.pipeDefs = d, n.dependencies = () => u.map($);
          }
        } finally {
          Rf--;
        }
        if (Rf === 0 && wS(), l2(e)) {
          const u = xy(e.ngSelectorScope);
          Py(n, u);
        }
        if (t.schemas)
          if (t.standalone)
            n.schemas = t.schemas;
          else
            throw new Error(`The 'schemas' was specified for the ${W(e)} but is only valid on a component that is standalone.`);
        else t.standalone && (n.schemas = []);
      }
      return n;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  });
}
function u2(e, t) {
  return {
    directiveDefs: () => {
      {
        if (ngDevMode)
          for (const s of t)
            Vh(s, e);
        return ya(e) ? [...Do.getStandaloneComponentScope(e, t).compilation.directives].map((s) => q(s) || Be(s)).filter((s) => s !== null) : [];
      }
    },
    pipeDefs: () => {
      {
        if (ngDevMode)
          for (const s of t)
            Vh(s, e);
        return ya(e) ? [...Do.getStandaloneComponentScope(e, t).compilation.pipes].map((s) => vt(s)).filter((s) => s !== null) : [];
      }
    }
  };
}
function l2(e) {
  return e.ngSelectorScope !== void 0;
}
function Ny(e, t) {
  let n = null;
  xS(e, t || {}), Object.defineProperty(e, Zl, {
    get: () => {
      if (n === null) {
        const r = PS(e, t || {});
        n = Le({
          usage: 0,
          kind: "directive",
          type: e
        }).compileDirective(tt, r.sourceMapUrl, r.metadata);
      }
      return n;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  });
}
function PS(e, t) {
  const n = e && e.name, r = `ng:///${n}/ɵdir.js`, o = Le({ usage: 0, kind: "directive", type: e }), s = NS(e, t);
  return s.typeSourceSpan = o.createParseSourceSpan("Directive", n, r), s.usesInheritance && RS(e), { metadata: s, sourceMapUrl: r };
}
function xS(e, t) {
  let n = null;
  Object.defineProperty(e, wn, {
    get: () => {
      if (n === null) {
        const r = PS(e, t), o = Le({
          usage: 0,
          kind: "directive",
          type: e
        });
        n = o.compileFactory(tt, `ng:///${e.name}/ɵfac.js`, {
          name: r.metadata.name,
          type: r.metadata.type,
          typeArgumentCount: 0,
          deps: cd(e),
          target: o.FactoryTarget.Directive
        });
      }
      return n;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  });
}
function d2(e) {
  return Object.getPrototypeOf(e.prototype) === Object.prototype;
}
function NS(e, t) {
  var o;
  const n = pg(), r = n.ownPropMetadata(e);
  return {
    name: e.name,
    type: e,
    selector: t.selector !== void 0 ? t.selector : null,
    host: t.host || zt,
    propMetadata: r,
    inputs: t.inputs || K,
    outputs: t.outputs || K,
    queries: QD(e, r, FS),
    lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") },
    typeSourceSpan: null,
    usesInheritance: !d2(e),
    exportAs: p2(t.exportAs),
    providers: t.providers || null,
    viewQueries: QD(e, r, kS),
    isStandalone: !!t.standalone,
    isSignal: !!t.signals,
    hostDirectives: ((o = t.hostDirectives) == null ? void 0 : o.map((s) => typeof s == "function" ? { directive: s } : s)) || null
  };
}
function RS(e) {
  const t = Object.prototype;
  let n = Object.getPrototypeOf(e.prototype).constructor;
  for (; n && n !== t; )
    !Be(n) && !q(n) && m2(n) && Ny(n, null), n = Object.getPrototypeOf(n);
}
function f2(e) {
  return typeof e == "string" ? jS(e) : $(e);
}
function h2(e, t) {
  return {
    propertyName: e,
    predicate: f2(t.selector),
    descendants: t.descendants,
    first: t.first,
    read: t.read ? t.read : null,
    static: !!t.static,
    emitDistinctChangesOnly: !!t.emitDistinctChangesOnly,
    isSignal: !!t.isSignal
  };
}
function QD(e, t, n) {
  const r = [];
  for (const o in t)
    if (t.hasOwnProperty(o)) {
      const s = t[o];
      s.forEach((i) => {
        if (n(i)) {
          if (!i.selector)
            throw new Error(`Can't construct a query for the property "${o}" of "${W(e)}" since the query selector wasn't defined.`);
          if (s.some(LS))
            throw new Error("Cannot combine @Input decorators with query decorators");
          r.push(h2(o, i));
        }
      });
    }
  return r;
}
function p2(e) {
  return e === void 0 ? null : jS(e);
}
function FS(e) {
  const t = e.ngMetadataName;
  return t === "ContentChild" || t === "ContentChildren";
}
function kS(e) {
  const t = e.ngMetadataName;
  return t === "ViewChild" || t === "ViewChildren";
}
function LS(e) {
  return e.ngMetadataName === "Input";
}
function jS(e) {
  return e.split(",").map((t) => t.trim());
}
const g2 = [
  "ngOnChanges",
  "ngOnInit",
  "ngOnDestroy",
  "ngDoCheck",
  "ngAfterViewInit",
  "ngAfterViewChecked",
  "ngAfterContentInit",
  "ngAfterContentChecked"
];
function m2(e) {
  const t = pg();
  if (g2.some((r) => t.hasLifecycleHook(e, r)))
    return !0;
  const n = t.propMetadata(e);
  for (const r in n) {
    const o = n[r];
    for (let s = 0; s < o.length; s++) {
      const i = o[s], a = i.ngMetadataName;
      if (LS(i) || FS(i) || kS(i) || a === "Output" || a === "HostBinding" || a === "HostListener")
        return !0;
    }
  }
  return !1;
}
function $S(e, t) {
  let n = null, r = null;
  Object.defineProperty(e, wn, {
    get: () => {
      if (r === null) {
        const o = YD(e, t), s = Le({
          usage: 0,
          kind: "pipe",
          type: o.type
        });
        r = s.compileFactory(tt, `ng:///${o.name}/ɵfac.js`, {
          name: o.name,
          type: o.type,
          typeArgumentCount: 0,
          deps: cd(e),
          target: s.FactoryTarget.Pipe
        });
      }
      return r;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  }), Object.defineProperty(e, ql, {
    get: () => {
      if (n === null) {
        const o = YD(e, t);
        n = Le({
          usage: 0,
          kind: "pipe",
          type: o.type
        }).compilePipe(tt, `ng:///${o.name}/ɵpipe.js`, o);
      }
      return n;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  });
}
function YD(e, t) {
  return {
    type: e,
    name: e.name,
    pipeName: t.name,
    pure: t.pure !== void 0 ? t.pure : !0,
    isStandalone: !!t.standalone
  };
}
const Je = Sc("Directive", (e = {}) => e, void 0, void 0, (e, t) => Ny(e, t)), Y = Sc("Component", (e = {}) => ({ changeDetection: V.Default, ...e }), Je, void 0, (e, t) => OS(e, t)), mt = Sc("Pipe", (e) => ({ pure: !0, ...e }), void 0, void 0, (e, t) => $S(e, t)), _ = yr("Input", (e) => e ? typeof e == "string" ? { alias: e } : e : {}), Me = yr("Output", (e) => ({ alias: e })), Ry = yr("HostBinding", (e) => ({ hostPropertyName: e })), y2 = yr("HostListener", (e, t) => ({ eventName: e, args: t })), Fy = Sc(
  "NgModule",
  (e) => e,
  void 0,
  void 0,
  /**
   * Decorator that marks the following class as an NgModule, and supplies
   * configuration metadata for it.
   *
   * * The `declarations` option configures the compiler
   * with information about what belongs to the NgModule.
   * * The `providers` options configures the NgModule's injector to provide
   * dependencies the NgModule members.
   * * The `imports` and `exports` options bring in members from other modules, and make
   * this module's members available to others.
   */
  (e, t) => MS(e, t)
);
class ky {
  constructor(t) {
    this.full = t;
    const n = t.split(".");
    this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join(".");
  }
}
const v2 = new ky("18.2.14"), Or = class Or {
  log(t) {
    console.log(t);
  }
  // Note: for reporting errors use `DOM.logError()` as it is platform specific
  warn(t) {
    console.warn(t);
  }
};
Or.ɵfac = function(n) {
  return new (n || Or)();
}, Or.ɵprov = /* @__PURE__ */ se({ token: Or, factory: Or.ɵfac, providedIn: "platform" });
let nr = Or;
(typeof ngDevMode > "u" || ngDevMode) && it(nr, [{
  type: Ee,
  args: [{ providedIn: "platform" }]
}], null, null);
class D2 {
  constructor() {
    this.resolverToTokenToDependencies = /* @__PURE__ */ new WeakMap(), this.resolverToProviders = /* @__PURE__ */ new WeakMap(), this.standaloneInjectorToComponent = /* @__PURE__ */ new WeakMap();
  }
  reset() {
    this.resolverToTokenToDependencies = /* @__PURE__ */ new WeakMap(), this.resolverToProviders = /* @__PURE__ */ new WeakMap(), this.standaloneInjectorToComponent = /* @__PURE__ */ new WeakMap();
  }
}
let eu = new D2();
function Zd() {
  return eu;
}
function E2() {
  eu.reset(), BA((e) => C2(e));
}
function C2(e) {
  const { context: t, type: n } = e;
  n === 0 ? I2(t, e.service) : n === 1 ? w2(t, e.instance) : n === 2 && M2(t, e.providerRecord);
}
function I2(e, t) {
  const n = BS(e.injector);
  n === null && A("An Inject event must be run within an injection context.");
  const r = eu.resolverToTokenToDependencies;
  if (r.has(n) || r.set(n, /* @__PURE__ */ new WeakMap()), !S2(e.token))
    return;
  const o = r.get(n);
  o.has(e.token) || o.set(e.token, []);
  const { token: s, value: i, flags: a } = t;
  b(e.token, "Injector profiler context token is undefined.");
  const c = o.get(e.token);
  b(c, "Could not resolve dependencies for token."), e.injector instanceof Ce ? c.push({ token: s, value: i, flags: a, injectedIn: b2(e.injector) }) : c.push({ token: s, value: i, flags: a });
}
function b2(e) {
  e instanceof Ce || A("getNodeInjectorContext must be called with a NodeInjector");
  const t = Pi(e), n = xi(e);
  if (n !== null)
    return ot(n, t), { lView: t, tNode: n };
}
function w2(e, t) {
  const { value: n } = t;
  BS(e.injector) === null && A("An InjectorCreatedInstance event must be run within an injection context.");
  let r;
  if (typeof n == "object" && (r = n == null ? void 0 : n.constructor), r == null || !_2(r))
    return;
  const o = e.injector.get(Pt, null, { optional: !0 });
  if (o === null)
    return;
  const { standaloneInjectorToComponent: s } = eu;
  s.has(o) || s.set(o, r);
}
function _2(e) {
  const t = q(e);
  return !!(t != null && t.standalone);
}
function M2(e, t) {
  const { resolverToProviders: n } = eu;
  let r;
  (e == null ? void 0 : e.injector) instanceof Ce ? r = xi(e.injector) : r = e.injector, r === null && A("A ProviderConfigured event must be run within an injection context."), n.has(r) || n.set(r, []), n.get(r).push(t);
}
function BS(e) {
  let t = null;
  return e === void 0 || (e instanceof Ce ? t = Pi(e) : t = e), t;
}
function S2(e) {
  return e !== null && (typeof e == "object" || typeof e == "function" || typeof e == "symbol");
}
function T2(e) {
  ngDevMode && b(e, "component"), zc(
    ib(e),
    3
    /* NotificationSource.DebugApplyChanges */
  ), mb(e).forEach((t) => A2(t));
}
function A2(e) {
  const t = ib(e);
  t[P] |= 1024, _d(t);
}
function O2(e, t) {
  const n = e.get(t, null, { self: !0, optional: !0 });
  if (n === null)
    throw new Error(`Unable to determine instance of ${t} in given injector`);
  const r = P2(t, e), o = HS(e), s = r.map((i) => {
    const a = {
      value: i.value
    }, c = i.flags;
    a.flags = {
      optional: (8 & c) === 8,
      host: (1 & c) === 1,
      self: (2 & c) === 2,
      skipSelf: (4 & c) === 4
    };
    for (let u = 0; u < o.length; u++) {
      const l = o[u];
      if (u === 0 && a.flags.skipSelf)
        continue;
      if (a.flags.host && l instanceof Pt)
        break;
      if (l.get(i.token, null, {
        self: !0,
        optional: !0
      }) !== null) {
        if (a.flags.host) {
          o[0].get(i.token, null, {
            ...a.flags,
            optional: !0
          }) !== null && (a.providedIn = l);
          break;
        }
        a.providedIn = l;
        break;
      }
      if (u === 0 && a.flags.self)
        break;
    }
    return i.token && (a.token = i.token), a;
  });
  return { instance: n, dependencies: s };
}
function P2(e, t) {
  var i, a;
  const { resolverToTokenToDependencies: n } = Zd();
  if (!(t instanceof Ce))
    return ((a = (i = n.get(t)) == null ? void 0 : i.get) == null ? void 0 : a.call(i, e)) ?? [];
  const r = Pi(t), o = n.get(r);
  return ((o == null ? void 0 : o.get(e)) ?? []).filter((c) => {
    var d;
    const u = (d = c.injectedIn) == null ? void 0 : d.tNode;
    if (u === void 0)
      return !1;
    const l = xi(t);
    return Qn(u), Qn(l), u === l;
  });
}
function x2(e) {
  const { standaloneInjectorToComponent: t } = Zd();
  if (t.has(e))
    return t.get(e);
  const n = e.get(tr, null, { self: !0, optional: !0 });
  return n === null || n.instance === null ? null : n.instance.constructor;
}
function N2(e) {
  const t = xi(e), { resolverToProviders: n } = Zd();
  return n.get(t) ?? [];
}
function R2(e) {
  const t = /* @__PURE__ */ new Map(), r = F2(t, /* @__PURE__ */ new Set());
  return Yu(e, r, [], /* @__PURE__ */ new Set()), t;
}
function F2(e, t) {
  return (n, r) => {
    if (e.has(n) || e.set(n, [r]), !t.has(r))
      for (const o of e.keys()) {
        const s = e.get(o);
        let i = Vu(r);
        if (!i) {
          const u = r.ngModule;
          i = Vu(u);
        }
        if (!i)
          return;
        const a = s[0];
        let c = !1;
        Rs(i.imports, (u) => {
          var l;
          c || (c = u.ngModule === a || u === a, c && ((l = e.get(o)) == null || l.unshift(r)));
        });
      }
    t.add(r);
  };
}
function k2(e) {
  const t = Zd().resolverToProviders.get(e) ?? [];
  if (L2(e))
    return t;
  const n = x2(e);
  if (n === null)
    return t;
  const r = R2(n), o = [];
  for (const s of t) {
    const i = s.provider, a = i.provide;
    if (a === Gt || a === Gp)
      continue;
    let c = r.get(i) ?? [];
    const u = q(n);
    !!(u != null && u.standalone) && (c = [n, ...c]), o.push({ ...s, importPath: c });
  }
  return o;
}
function L2(e) {
  return e instanceof Ai && e.scopes.has("platform");
}
function j2(e) {
  if (e instanceof Ce)
    return N2(e);
  if (e instanceof Pt)
    return k2(e);
  A("getInjectorProviders only supports NodeInjector and EnvironmentInjector");
}
function $2(e) {
  if (e instanceof Ce) {
    const t = Pi(e), n = xi(e);
    return ot(n, t), { type: "element", source: Ye(n, t) };
  }
  return e instanceof Ai ? { type: "environment", source: e.source ?? null } : e instanceof Yl ? { type: "null", source: null } : null;
}
function HS(e) {
  const t = [e];
  return lp(e, t), t;
}
function lp(e, t) {
  const n = B2(e);
  if (n === null) {
    if (e instanceof Ce) {
      const r = t[0];
      if (r instanceof Ce) {
        const o = H2(r);
        o === null && A("NodeInjector must have some connection to the module injector tree"), t.push(o), lp(o, t);
      }
      return t;
    }
  } else
    t.push(n), lp(n, t);
  return t;
}
function B2(e) {
  var o;
  if (e instanceof Ai) {
    const s = e.parent;
    return sP(s) ? s.parentInjector : s;
  }
  let t, n;
  if (e instanceof Ce)
    t = xi(e), n = Pi(e);
  else {
    if (e instanceof Yl)
      return null;
    if (e instanceof ro)
      return e.parentInjector;
    A("getInjectorParent only support injectors of type R3Injector, NodeInjector, NullInjector");
  }
  const r = id(t, n);
  if (fg(r)) {
    const s = Ga(r), i = Wa(r, n), c = i[C].data[
      s + 8
      /* NodeInjectorOffset.TNODE */
    ];
    return new Ce(c, i);
  } else {
    const i = (o = n[Re].injector) == null ? void 0 : o.parent;
    if (i instanceof Ce)
      return i;
  }
  return null;
}
function H2(e) {
  let t;
  e instanceof Ce ? t = Pi(e) : A("getModuleInjectorOfNodeInjector must be called with a NodeInjector");
  const n = t[Re], r = n instanceof ro ? n.parentInjector : n.parent;
  return r || A("NodeInjector must have some connection to the module injector tree"), r;
}
const yu = "ng", U2 = {
  /**
   * Warning: functions that start with `ɵ` are considered *INTERNAL* and should not be relied upon
   * in application's code. The contract of those functions might be changed in any release and/or a
   * function can be removed completely.
   */
  ɵgetDependenciesFromInjectable: O2,
  ɵgetInjectorProviders: j2,
  ɵgetInjectorResolutionPath: HS,
  ɵgetInjectorMetadata: $2,
  ɵsetProfiler: kO,
  getDirectiveMetadata: YP,
  getComponent: rl,
  getContext: pb,
  getListeners: Eb,
  getOwningComponent: gb,
  getHostElement: Db,
  getInjector: yb,
  getRootComponents: mb,
  getDirectives: vb,
  applyChanges: T2,
  isSignal: gm
};
let KD = !1;
function V2() {
  if (!KD) {
    KD = !0, typeof window < "u" && E2();
    for (const [e, t] of Object.entries(U2))
      z2(e, t);
  }
}
function z2(e, t) {
  if (typeof COMPILED > "u" || !COMPILED) {
    const n = Ae;
    ngDevMode && b(t, "function not defined"), n[yu] ?? (n[yu] = {}), n[yu][e] = t;
  }
}
const US = new F(""), Ly = new F(""), Pr = class Pr {
  constructor(t, n, r) {
    this._ngZone = t, this.registry = n, this._isZoneStable = !0, this._callbacks = [], this.taskTrackingZone = null, ba || (VS(r), r.addToWindow(n)), this._watchAngularEvents(), t.run(() => {
      this.taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone");
    });
  }
  _watchAngularEvents() {
    this._ngZone.onUnstable.subscribe({
      next: () => {
        this._isZoneStable = !1;
      }
    }), this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.subscribe({
        next: () => {
          oe.assertNotInAngularZone(), queueMicrotask(() => {
            this._isZoneStable = !0, this._runCallbacksIfReady();
          });
        }
      });
    });
  }
  /**
   * Whether an associated application is stable
   */
  isStable() {
    return this._isZoneStable && !this._ngZone.hasPendingMacrotasks;
  }
  _runCallbacksIfReady() {
    if (this.isStable())
      queueMicrotask(() => {
        for (; this._callbacks.length !== 0; ) {
          let t = this._callbacks.pop();
          clearTimeout(t.timeoutId), t.doneCb();
        }
      });
    else {
      let t = this.getPendingTasks();
      this._callbacks = this._callbacks.filter((n) => n.updateCb && n.updateCb(t) ? (clearTimeout(n.timeoutId), !1) : !0);
    }
  }
  getPendingTasks() {
    return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map((t) => ({
      source: t.source,
      // From TaskTrackingZone:
      // https://github.com/angular/zone.js/blob/master/lib/zone-spec/task-tracking.ts#L40
      creationLocation: t.creationLocation,
      data: t.data
    })) : [];
  }
  addCallback(t, n, r) {
    let o = -1;
    n && n > 0 && (o = setTimeout(() => {
      this._callbacks = this._callbacks.filter((s) => s.timeoutId !== o), t();
    }, n)), this._callbacks.push({ doneCb: t, timeoutId: o, updateCb: r });
  }
  /**
   * Wait for the application to be stable with a timeout. If the timeout is reached before that
   * happens, the callback receives a list of the macro tasks that were pending, otherwise null.
   *
   * @param doneCb The callback to invoke when Angular is stable or the timeout expires
   *    whichever comes first.
   * @param timeout Optional. The maximum time to wait for Angular to become stable. If not
   *    specified, whenStable() will wait forever.
   * @param updateCb Optional. If specified, this callback will be invoked whenever the set of
   *    pending macrotasks changes. If this callback returns true doneCb will not be invoked
   *    and no further updates will be issued.
   */
  whenStable(t, n, r) {
    if (r && !this.taskTrackingZone)
      throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
    this.addCallback(t, n, r), this._runCallbacksIfReady();
  }
  /**
   * Registers an application with a testability hook so that it can be tracked.
   * @param token token of application, root element
   *
   * @internal
   */
  registerApplication(t) {
    this.registry.registerApplication(t, this);
  }
  /**
   * Unregisters an application.
   * @param token token of application, root element
   *
   * @internal
   */
  unregisterApplication(t) {
    this.registry.unregisterApplication(t);
  }
  /**
   * Find providers by name
   * @param using The root element to search from
   * @param provider The name of binding variable
   * @param exactMatch Whether using exactMatch
   */
  findProviders(t, n, r) {
    return [];
  }
};
Pr.ɵfac = function(n) {
  return new (n || Pr)(He(oe), He(zs), He(Ly));
}, Pr.ɵprov = /* @__PURE__ */ se({ token: Pr, factory: Pr.ɵfac });
let vl = Pr;
(typeof ngDevMode > "u" || ngDevMode) && it(vl, [{
  type: Ee
}], () => [{ type: oe }, { type: zs }, { type: void 0, decorators: [{
  type: Et,
  args: [Ly]
}] }], null);
const xr = class xr {
  constructor() {
    this._applications = /* @__PURE__ */ new Map();
  }
  /**
   * Registers an application with a testability hook so that it can be tracked
   * @param token token of application, root element
   * @param testability Testability hook
   */
  registerApplication(t, n) {
    this._applications.set(t, n);
  }
  /**
   * Unregisters an application.
   * @param token token of application, root element
   */
  unregisterApplication(t) {
    this._applications.delete(t);
  }
  /**
   * Unregisters all applications
   */
  unregisterAllApplications() {
    this._applications.clear();
  }
  /**
   * Get a testability hook associated with the application
   * @param elem root element
   */
  getTestability(t) {
    return this._applications.get(t) || null;
  }
  /**
   * Get all registered testabilities
   */
  getAllTestabilities() {
    return Array.from(this._applications.values());
  }
  /**
   * Get all registered applications(root elements)
   */
  getAllRootElements() {
    return Array.from(this._applications.keys());
  }
  /**
   * Find testability of a node in the Tree
   * @param elem node
   * @param findInAncestors whether finding testability in ancestors if testability was not found in
   * current node
   */
  findTestabilityInTree(t, n = !0) {
    return (ba == null ? void 0 : ba.findTestabilityInTree(this, t, n)) ?? null;
  }
};
xr.ɵfac = function(n) {
  return new (n || xr)();
}, xr.ɵprov = /* @__PURE__ */ se({ token: xr, factory: xr.ɵfac, providedIn: "platform" });
let zs = xr;
(typeof ngDevMode > "u" || ngDevMode) && it(zs, [{
  type: Ee,
  args: [{ providedIn: "platform" }]
}], null, null);
function VS(e) {
  ba = e;
}
let ba;
function qd(e) {
  return !!e && typeof e.then == "function";
}
function jy(e) {
  return !!e && typeof e.subscribe == "function";
}
const zS = new F(ngDevMode ? "Application Initializer" : ""), Nr = class Nr {
  constructor() {
    if (this.initialized = !1, this.done = !1, this.donePromise = new Promise((t, n) => {
      this.resolve = t, this.reject = n;
    }), this.appInits = I(zS, { optional: !0 }) ?? [], (typeof ngDevMode > "u" || ngDevMode) && !Array.isArray(this.appInits))
      throw new v(-209, `Unexpected type of the \`APP_INITIALIZER\` token value (expected an array, but got ${typeof this.appInits}). Please check that the \`APP_INITIALIZER\` token is configured as a \`multi: true\` provider.`);
  }
  /** @internal */
  runInitializers() {
    if (this.initialized)
      return;
    const t = [];
    for (const r of this.appInits) {
      const o = r();
      if (qd(o))
        t.push(o);
      else if (jy(o)) {
        const s = new Promise((i, a) => {
          o.subscribe({ complete: i, error: a });
        });
        t.push(s);
      }
    }
    const n = () => {
      this.done = !0, this.resolve();
    };
    Promise.all(t).then(() => {
      n();
    }).catch((r) => {
      this.reject(r);
    }), t.length === 0 && n(), this.initialized = !0;
  }
};
Nr.ɵfac = function(n) {
  return new (n || Nr)();
}, Nr.ɵprov = /* @__PURE__ */ se({ token: Nr, factory: Nr.ɵfac, providedIn: "root" });
let Gs = Nr;
(typeof ngDevMode > "u" || ngDevMode) && it(Gs, [{
  type: Ee,
  args: [{ providedIn: "root" }]
}], () => [], null);
const Qd = new F(ngDevMode ? "appBootstrapListener" : "");
function GS() {
  ngDevMode && V2();
}
function WS() {
  u1(() => {
    throw new v(600, ngDevMode && "Writing to signals is not allowed in a `computed` or an `effect` by default. Use `allowSignalWrites` in the `CreateEffectOptions` to enable this inside effects.");
  });
}
function ZS(e) {
  return e.isBoundToModule;
}
class G2 {
  constructor(t, n) {
    this.name = t, this.token = n;
  }
}
const JD = 10;
function W2(e, t, n) {
  try {
    const r = n();
    return qd(r) ? r.catch((o) => {
      throw t.runOutsideAngular(() => e.handleError(o)), o;
    }) : r;
  } catch (r) {
    throw t.runOutsideAngular(() => e.handleError(r)), r;
  }
}
function qS(e, t) {
  return Array.isArray(t) ? t.reduce(qS, e) : { ...e, ...t };
}
const Rr = class Rr {
  constructor() {
    this._bootstrapListeners = [], this._runningTick = !1, this._destroyed = !1, this._destroyListeners = [], this._views = [], this.internalErrorHandler = I(XI), this.afterRenderManager = I(rc), this.zonelessEnabled = I(ji), this.dirtyFlags = 0, this.deferredDirtyFlags = 0, this.externalTestViews = /* @__PURE__ */ new Set(), this.beforeRender = new Fa(), this.afterTick = new Fa(), this.componentTypes = [], this.components = [], this.isStable = I(un).hasPendingTasks.pipe(O1((t) => !t)), this._injector = I(Pt);
  }
  /** @internal */
  get allViews() {
    return [...this.externalTestViews.keys(), ...this._views];
  }
  /**
   * Indicates whether this instance was destroyed.
   */
  get destroyed() {
    return this._destroyed;
  }
  /**
   * @returns A promise that resolves when the application becomes stable
   */
  whenStable() {
    let t;
    return new Promise((n) => {
      t = this.isStable.subscribe({
        next: (r) => {
          r && n();
        }
      });
    }).finally(() => {
      t.unsubscribe();
    });
  }
  /**
   * The `EnvironmentInjector` used to create this application.
   */
  get injector() {
    return this._injector;
  }
  /**
   * Bootstrap a component onto the element identified by its selector or, optionally, to a
   * specified element.
   *
   * @usageNotes
   * ### Bootstrap process
   *
   * When bootstrapping a component, Angular mounts it onto a target DOM element
   * and kicks off automatic change detection. The target DOM element can be
   * provided using the `rootSelectorOrNode` argument.
   *
   * If the target DOM element is not provided, Angular tries to find one on a page
   * using the `selector` of the component that is being bootstrapped
   * (first matched element is used).
   *
   * ### Example
   *
   * Generally, we define the component to bootstrap in the `bootstrap` array of `NgModule`,
   * but it requires us to know the component while writing the application code.
   *
   * Imagine a situation where we have to wait for an API call to decide about the component to
   * bootstrap. We can use the `ngDoBootstrap` hook of the `NgModule` and call this method to
   * dynamically bootstrap a component.
   *
   * {@example core/ts/platform/platform.ts region='componentSelector'}
   *
   * Optionally, a component can be mounted onto a DOM element that does not match the
   * selector of the bootstrapped component.
   *
   * In the following example, we are providing a CSS selector to match the target element.
   *
   * {@example core/ts/platform/platform.ts region='cssSelector'}
   *
   * While in this example, we are providing reference to a DOM node.
   *
   * {@example core/ts/platform/platform.ts region='domNode'}
   */
  bootstrap(t, n) {
    (typeof ngDevMode > "u" || ngDevMode) && this.warnIfDestroyed();
    const r = t instanceof il;
    if (!this._injector.get(Gs).done) {
      const d = !r && Vn(t), f = (typeof ngDevMode > "u" || ngDevMode) && "Cannot bootstrap as there are still asynchronous initializers running." + (d ? "" : " Bootstrap components in the `ngDoBootstrap` method of the root module.");
      throw new v(405, f);
    }
    let s;
    r ? s = t : s = this._injector.get(vo).resolveComponentFactory(t), this.componentTypes.push(s.componentType);
    const i = ZS(s) ? void 0 : this._injector.get(tr), a = n || s.selector, c = s.create($e.NULL, [], a, i), u = c.location.nativeElement, l = c.injector.get(US, null);
    return l == null || l.registerApplication(u), c.onDestroy(() => {
      this.detachView(c.hostView), ju(this.components, c), l == null || l.unregisterApplication(u);
    }), this._loadComponent(c), (typeof ngDevMode > "u" || ngDevMode) && this._injector.get(nr).log("Angular is running in development mode."), c;
  }
  /**
   * Invoke this method to explicitly process change detection and its side-effects.
   *
   * In development mode, `tick()` also performs a second change detection cycle to ensure that no
   * further changes are detected. If additional changes are picked up during this second cycle,
   * bindings in the app have side-effects that cannot be resolved in a single change detection
   * pass.
   * In this case, Angular throws an error, since an Angular application can only have one change
   * detection pass during which all change detection must complete.
   */
  tick() {
    this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
  }
  /** @internal */
  _tick() {
    if ((typeof ngDevMode > "u" || ngDevMode) && this.warnIfDestroyed(), this._runningTick)
      throw new v(101, ngDevMode && "ApplicationRef.tick is called recursively");
    const t = U(null);
    try {
      if (this._runningTick = !0, this.synchronize(), typeof ngDevMode > "u" || ngDevMode)
        for (let n of this._views)
          n.checkNoChanges();
    } catch (n) {
      this.internalErrorHandler(n);
    } finally {
      this._runningTick = !1, U(t), this.afterTick.next();
    }
  }
  /**
   * Performs the core work of synchronizing the application state with the UI, resolving any
   * pending dirtiness (potentially in a loop).
   */
  synchronize() {
    let t = null;
    this._injector.destroyed || (t = this._injector.get(im, null, { optional: !0 })), this.dirtyFlags |= this.deferredDirtyFlags, this.deferredDirtyFlags = 0;
    let n = 0;
    for (; this.dirtyFlags !== 0 && n++ < JD; )
      this.synchronizeOnce(t);
    if ((typeof ngDevMode > "u" || ngDevMode) && n >= JD)
      throw new v(103, ngDevMode && "Infinite change detection while refreshing application views. Ensure views are not calling `markForCheck` on every template execution or that afterRender hooks always mark views for check.");
  }
  /**
   * Perform a single synchronization pass.
   */
  synchronizeOnce(t) {
    var n, r;
    if (this.dirtyFlags |= this.deferredDirtyFlags, this.deferredDirtyFlags = 0, this.dirtyFlags & 7) {
      const o = !!(this.dirtyFlags & 1);
      this.dirtyFlags &= -8, this.dirtyFlags |= 8, this.beforeRender.next(o);
      for (let { _lView: s, notifyErrorHandler: i } of this._views)
        QS(s, i, o, this.zonelessEnabled);
      if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 7)
        return;
    } else
      (n = t == null ? void 0 : t.begin) == null || n.call(t), (r = t == null ? void 0 : t.end) == null || r.call(t);
    this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews();
  }
  /**
   * Checks `allViews` for views which require refresh/traversal, and updates `dirtyFlags`
   * accordingly, with two potential behaviors:
   *
   * 1. If any of our views require updating, then this adds the `ViewTreeTraversal` dirty flag.
   *    This _should_ be a no-op, since the scheduler should've added the flag at the same time the
   *    view was marked as needing updating.
   *
   *    TODO(alxhub): figure out if this behavior is still needed for edge cases.
   *
   * 2. If none of our views require updating, then clear the view-related `dirtyFlag`s. This
   *    happens when the scheduler is notified of a view becoming dirty, but the view itself isn't
   *    reachable through traversal from our roots (e.g. it's detached from the CD tree).
   */
  syncDirtyFlagsWithViews() {
    if (this.allViews.some(({ _lView: t }) => td(t))) {
      this.dirtyFlags |= 2;
      return;
    } else
      this.dirtyFlags &= -8;
  }
  /**
   * Attaches a view so that it will be dirty checked.
   * The view will be automatically detached when it is destroyed.
   * This will throw if the view is already attached to a ViewContainer.
   */
  attachView(t) {
    (typeof ngDevMode > "u" || ngDevMode) && this.warnIfDestroyed();
    const n = t;
    this._views.push(n), n.attachToAppRef(this);
  }
  /**
   * Detaches a view from dirty checking again.
   */
  detachView(t) {
    (typeof ngDevMode > "u" || ngDevMode) && this.warnIfDestroyed();
    const n = t;
    ju(this._views, n), n.detachFromAppRef();
  }
  _loadComponent(t) {
    this.attachView(t.hostView), this.tick(), this.components.push(t);
    const n = this._injector.get(Qd, []);
    if (ngDevMode && !Array.isArray(n))
      throw new v(-209, `Unexpected type of the \`APP_BOOTSTRAP_LISTENER\` token value (expected an array, but got ${typeof n}). Please check that the \`APP_BOOTSTRAP_LISTENER\` token is configured as a \`multi: true\` provider.`);
    [...this._bootstrapListeners, ...n].forEach((r) => r(t));
  }
  /** @internal */
  ngOnDestroy() {
    if (!this._destroyed)
      try {
        this._destroyListeners.forEach((t) => t()), this._views.slice().forEach((t) => t.destroy());
      } finally {
        this._destroyed = !0, this._views = [], this._bootstrapListeners = [], this._destroyListeners = [];
      }
  }
  /**
   * Registers a listener to be called when an instance is destroyed.
   *
   * @param callback A callback function to add as a listener.
   * @returns A function which unregisters a listener.
   */
  onDestroy(t) {
    return (typeof ngDevMode > "u" || ngDevMode) && this.warnIfDestroyed(), this._destroyListeners.push(t), () => ju(this._destroyListeners, t);
  }
  /**
   * Destroys an Angular application represented by this `ApplicationRef`. Calling this function
   * will destroy the associated environment injectors as well as all the bootstrapped components
   * with their views.
   */
  destroy() {
    if (this._destroyed)
      throw new v(406, ngDevMode && "This instance of the `ApplicationRef` has already been destroyed.");
    const t = this._injector;
    t.destroy && !t.destroyed && t.destroy();
  }
  /**
   * Returns the number of attached views.
   */
  get viewCount() {
    return this._views.length;
  }
  warnIfDestroyed() {
    (typeof ngDevMode > "u" || ngDevMode) && this._destroyed && console.warn(fe(406, "This instance of the `ApplicationRef` has already been destroyed."));
  }
};
Rr.ɵfac = function(n) {
  return new (n || Rr)();
}, Rr.ɵprov = /* @__PURE__ */ se({ token: Rr, factory: Rr.ɵfac, providedIn: "root" });
let rt = Rr;
(typeof ngDevMode > "u" || ngDevMode) && it(rt, [{
  type: Ee,
  args: [{ providedIn: "root" }]
}], null, null);
function ju(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
let zo;
function Yd(e) {
  zo ?? (zo = /* @__PURE__ */ new WeakMap());
  const t = zo.get(e);
  if (t)
    return t;
  const n = e.isStable.pipe(k1((r) => r)).toPromise().then(() => {
  });
  return zo.set(e, n), e.onDestroy(() => zo == null ? void 0 : zo.delete(e)), n;
}
function QS(e, t, n, r) {
  if (!n && !td(e))
    return;
  _d(e, t, n && !r ? (
    // The first pass is always in Global mode, which includes `CheckAlways` views.
    0
  ) : (
    // Only refresh views with the `RefreshView` flag or views is a changed signal
    1
  ));
}
class YS {
  constructor(t, n) {
    this.ngModuleFactory = t, this.componentFactories = n;
  }
}
const Fr = class Fr {
  /**
   * Compiles the given NgModule and all of its components. All templates of the components
   * have to be inlined.
   */
  compileModuleSync(t) {
    return new xd(t);
  }
  /**
   * Compiles the given NgModule and all of its components
   */
  compileModuleAsync(t) {
    return Promise.resolve(this.compileModuleSync(t));
  }
  /**
   * Same as {@link Compiler#compileModuleSync compileModuleSync} but also creates ComponentFactories for all components.
   */
  compileModuleAndAllComponentsSync(t) {
    const n = this.compileModuleSync(t), r = It(t), o = on(r.declarations).reduce((s, i) => {
      const a = q(i);
      return a && s.push(new $i(a)), s;
    }, []);
    return new YS(n, o);
  }
  /**
   * Same as {@link Compiler#compileModuleAsync compileModuleAsync} but also creates ComponentFactories for all components.
   */
  compileModuleAndAllComponentsAsync(t) {
    return Promise.resolve(this.compileModuleAndAllComponentsSync(t));
  }
  /**
   * Clears all caches.
   */
  clearCache() {
  }
  /**
   * Clears the cache for the given component/ngModule.
   */
  clearCacheFor(t) {
  }
  /**
   * Returns the id for a given NgModule, if one is defined and known to the compiler.
   */
  getModuleId(t) {
  }
};
Fr.ɵfac = function(n) {
  return new (n || Fr)();
}, Fr.ɵprov = /* @__PURE__ */ se({ token: Fr, factory: Fr.ɵfac, providedIn: "root" });
let Dl = Fr;
(typeof ngDevMode > "u" || ngDevMode) && it(Dl, [{
  type: Ee,
  args: [{ providedIn: "root" }]
}], null, null);
const KS = new F(ngDevMode ? "compilerOptions" : "");
class Z2 {
}
function JS(e, t, n) {
  ngDevMode && OO(n);
  const r = new xd(n);
  if (typeof ngJitMode < "u" && !ngJitMode)
    return Promise.resolve(r);
  const o = e.get(KS, []).concat(t);
  if (n2({
    defaultEncapsulation: XD(o.map((u) => u.defaultEncapsulation)),
    preserveWhitespaces: XD(o.map((u) => u.preserveWhitespaces))
  }), FF())
    return Promise.resolve(r);
  const s = o.flatMap((u) => u.providers ?? []);
  if (s.length === 0)
    return Promise.resolve(r);
  const i = Le({
    usage: 0,
    kind: "NgModule",
    type: n
  }), c = $e.create({ providers: s }).get(i.ResourceLoader);
  return Fw((u) => Promise.resolve(c.get(u))).then(() => r);
}
function XD(e) {
  for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
      return e[t];
}
const kr = class kr {
  constructor() {
    this.zone = I(oe), this.changeDetectionScheduler = I(Ho), this.applicationRef = I(rt);
  }
  initialize() {
    this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
      next: () => {
        this.changeDetectionScheduler.runningTick || this.zone.run(() => {
          this.applicationRef.tick();
        });
      }
    }));
  }
  ngOnDestroy() {
    var t;
    (t = this._onMicrotaskEmptySubscription) == null || t.unsubscribe();
  }
};
kr.ɵfac = function(n) {
  return new (n || kr)();
}, kr.ɵprov = /* @__PURE__ */ se({ token: kr, factory: kr.ɵfac, providedIn: "root" });
let El = kr;
(typeof ngDevMode > "u" || ngDevMode) && it(El, [{
  type: Ee,
  args: [{ providedIn: "root" }]
}], null, null);
const $y = new F(typeof ngDevMode > "u" || ngDevMode ? "provideZoneChangeDetection token" : "", { factory: () => !1 });
function Kd({ ngZoneFactory: e, ignoreChangesOutsideZone: t, scheduleInRootZone: n }) {
  return e ?? (e = () => new oe({ ...By(), scheduleInRootZone: n })), [
    { provide: oe, useFactory: e },
    {
      provide: Gt,
      multi: !0,
      useFactory: () => {
        const r = I(El, {
          optional: !0
        });
        if ((typeof ngDevMode > "u" || ngDevMode) && r === null)
          throw new v(402, "A required Injectable was not found in the dependency injection tree. If you are bootstrapping an NgModule, make sure that the `BrowserModule` is imported.");
        return () => r.initialize();
      }
    },
    {
      provide: Gt,
      multi: !0,
      useFactory: () => {
        const r = I(Cl);
        return () => {
          r.initialize();
        };
      }
    },
    // Always disable scheduler whenever explicitly disabled, even if another place called
    // `provideZoneChangeDetection` without the 'ignore' option.
    t === !0 ? { provide: iw, useValue: !0 } : [],
    {
      provide: sm,
      useValue: n ?? YI
    }
  ];
}
function q2(e) {
  const t = e == null ? void 0 : e.ignoreChangesOutsideZone, n = e == null ? void 0 : e.scheduleInRootZone, r = Kd({
    ngZoneFactory: () => {
      const o = By(e);
      return o.scheduleInRootZone = n, o.shouldCoalesceEventChangeDetection && We("NgZone_CoalesceEvent"), new oe(o);
    },
    ignoreChangesOutsideZone: t,
    scheduleInRootZone: n
  });
  return Fs([
    { provide: $y, useValue: !0 },
    { provide: ji, useValue: !1 },
    r
  ]);
}
function By(e) {
  return {
    enableLongStackTrace: typeof ngDevMode > "u" ? !1 : !!ngDevMode,
    shouldCoalesceEventChangeDetection: (e == null ? void 0 : e.eventCoalescing) ?? !1,
    shouldCoalesceRunChangeDetection: (e == null ? void 0 : e.runCoalescing) ?? !1
  };
}
const Lr = class Lr {
  constructor() {
    this.subscription = new Po(), this.initialized = !1, this.zone = I(oe), this.pendingTasks = I(un);
  }
  initialize() {
    if (this.initialized)
      return;
    this.initialized = !0;
    let t = null;
    !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (t = this.pendingTasks.add()), this.zone.runOutsideAngular(() => {
      this.subscription.add(this.zone.onStable.subscribe(() => {
        oe.assertNotInAngularZone(), queueMicrotask(() => {
          t !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(t), t = null);
        });
      }));
    }), this.subscription.add(this.zone.onUnstable.subscribe(() => {
      oe.assertInAngularZone(), t ?? (t = this.pendingTasks.add());
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
Lr.ɵfac = function(n) {
  return new (n || Lr)();
}, Lr.ɵprov = /* @__PURE__ */ se({ token: Lr, factory: Lr.ɵfac, providedIn: "root" });
let Cl = Lr;
(typeof ngDevMode > "u" || ngDevMode) && it(Cl, [{
  type: Ee,
  args: [{ providedIn: "root" }]
}], null, null);
const eE = 100;
let $u = 0, dp = [];
function Q2() {
  if ($u++, eE - $u < 5) {
    const e = new Error().stack;
    e && dp.push(e);
  }
  if ($u === eE)
    throw new v(103, `Angular could not stabilize because there were endless change notifications within the browser event loop. The stack from the last several notifications: 
` + dp.join(`
`));
}
const jr = class jr {
  constructor() {
    var t;
    this.appRef = I(rt), this.taskService = I(un), this.ngZone = I(oe), this.zonelessEnabled = I(ji), this.disableScheduling = I(iw, { optional: !0 }) ?? !1, this.zoneIsDefined = typeof Zone < "u" && !!Zone.root.run, this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }], this.subscriptions = new Po(), this.angularZoneId = this.zoneIsDefined ? (t = this.ngZone._inner) == null ? void 0 : t.get(nl) : null, this.scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (I(sm, { optional: !0 }) ?? !1), this.cancelScheduledCallback = null, this.useMicrotaskScheduler = !1, this.runningTick = !1, this.pendingRenderTaskId = null, this.subscriptions.add(this.appRef.afterTick.subscribe(() => {
      this.runningTick || this.cleanup();
    })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => {
      this.runningTick || this.cleanup();
    })), this.disableScheduling || (this.disableScheduling = !this.zonelessEnabled && // NoopNgZone without enabling zoneless means no scheduling whatsoever
    (this.ngZone instanceof ud || // The same goes for the lack of Zone without enabling zoneless scheduling
    !this.zoneIsDefined));
  }
  notify(t) {
    if (!this.zonelessEnabled && t === 5)
      return;
    switch (t) {
      case 0: {
        this.appRef.dirtyFlags |= 2;
        break;
      }
      case 3:
      case 2:
      case 4:
      case 5:
      case 1: {
        this.appRef.dirtyFlags |= 4;
        break;
      }
      case 7: {
        this.appRef.deferredDirtyFlags |= 8;
        break;
      }
      case 9:
      case 8:
      case 6:
      case 10:
      default:
        this.appRef.dirtyFlags |= 8;
    }
    if (!this.shouldScheduleTick())
      return;
    (typeof ngDevMode > "u" || ngDevMode) && (this.useMicrotaskScheduler ? Q2() : ($u = 0, dp.length = 0));
    const n = this.useMicrotaskScheduler ? Vv : KI;
    this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => n(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => n(() => this.tick()));
  }
  shouldScheduleTick() {
    return !(this.disableScheduling || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(nl + this.angularZoneId));
  }
  /**
   * Calls ApplicationRef._tick inside the `NgZone`.
   *
   * Calling `tick` directly runs change detection and cancels any change detection that had been
   * scheduled previously.
   *
   * @param shouldRefreshViews Passed directly to `ApplicationRef._tick` and skips straight to
   *     render hooks when `false`.
   */
  tick() {
    if (this.runningTick || this.appRef.destroyed)
      return;
    !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1);
    const t = this.taskService.add();
    try {
      this.ngZone.run(() => {
        this.runningTick = !0, this.appRef._tick();
      }, void 0, this.schedulerTickApplyArgs);
    } catch (n) {
      throw this.taskService.remove(t), n;
    } finally {
      this.cleanup();
    }
    this.useMicrotaskScheduler = !0, Vv(() => {
      this.useMicrotaskScheduler = !1, this.taskService.remove(t);
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe(), this.cleanup();
  }
  cleanup() {
    var t;
    if (this.runningTick = !1, (t = this.cancelScheduledCallback) == null || t.call(this), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
      const n = this.pendingRenderTaskId;
      this.pendingRenderTaskId = null, this.taskService.remove(n);
    }
  }
};
jr.ɵfac = function(n) {
  return new (n || jr)();
}, jr.ɵprov = /* @__PURE__ */ se({ token: jr, factory: jr.ɵfac, providedIn: "root" });
let Tn = jr;
(typeof ngDevMode > "u" || ngDevMode) && it(Tn, [{
  type: Ee,
  args: [{ providedIn: "root" }]
}], () => [], null);
function Y2() {
  if (We("NgZoneless"), (typeof ngDevMode > "u" || ngDevMode) && typeof Zone < "u" && Zone) {
    const e = fe(914, 'The application is using zoneless change detection, but is still loading Zone.js. Consider removing Zone.js to get the full benefits of zoneless. In applications using the Angular CLI, Zone.js is typically included in the "polyfills" section of the angular.json file.');
    console.warn(e);
  }
  return Fs([
    { provide: Ho, useExisting: Tn },
    { provide: oe, useClass: ud },
    { provide: ji, useValue: !0 },
    { provide: sm, useValue: !1 },
    typeof ngDevMode > "u" || ngDevMode ? [{ provide: sw, useValue: !0 }] : []
  ]);
}
function K2() {
  return typeof ngI18nClosureMode < "u" && ngI18nClosureMode && typeof goog < "u" && goog.LOCALE !== "en" ? goog.LOCALE : typeof $localize < "u" && $localize.locale || sc;
}
const at = new F(ngDevMode ? "LocaleId" : "", {
  providedIn: "root",
  factory: () => I(at, Z.Optional | Z.SkipSelf) || K2()
}), Hy = new F(ngDevMode ? "DefaultCurrencyCode" : "", {
  providedIn: "root",
  factory: () => sL
}), J2 = new F(ngDevMode ? "Translations" : ""), X2 = new F(ngDevMode ? "TranslationsFormat" : "");
var fp;
(function(e) {
  e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore";
})(fp || (fp = {}));
const ej = 200, tE = 1200, $r = class $r {
  constructor() {
    this.window = null, this.observer = null, this.options = I(bg), this.isBrowser = I(Er) === "browser";
  }
  start() {
    var r, o;
    if (!this.isBrowser || typeof PerformanceObserver > "u" || (r = this.options) != null && r.disableImageSizeWarning && ((o = this.options) != null && o.disableImageLazyLoadWarning))
      return;
    this.observer = this.initPerformanceObserver();
    const t = Jn(), n = t.defaultView;
    if (typeof n < "u") {
      this.window = n;
      const s = () => {
        setTimeout(this.scanImages.bind(this), ej);
      }, i = () => {
        var a;
        t.readyState === "complete" ? s() : (a = this.window) == null || a.addEventListener("load", s, { once: !0 });
      };
      typeof Zone < "u" ? Zone.root.run(() => i()) : i();
    }
  }
  ngOnDestroy() {
    var t;
    (t = this.observer) == null || t.disconnect();
  }
  initPerformanceObserver() {
    if (typeof PerformanceObserver > "u")
      return null;
    const t = new PerformanceObserver((n) => {
      var i;
      const r = n.getEntries();
      if (r.length === 0)
        return;
      const s = ((i = r[r.length - 1].element) == null ? void 0 : i.src) ?? "";
      s.startsWith("data:") || s.startsWith("blob:") || (this.lcpImageUrl = s);
    });
    return t.observe({ type: "largest-contentful-paint", buffered: !0 }), t;
  }
  scanImages() {
    var o;
    const t = Jn().querySelectorAll("img");
    let n, r = !1;
    t.forEach((s) => {
      var i, a;
      (i = this.options) != null && i.disableImageSizeWarning || !s.getAttribute("ng-img") && this.isOversized(s) && nj(s.src), !((a = this.options) != null && a.disableImageLazyLoadWarning) && this.lcpImageUrl && s.src === this.lcpImageUrl && (n = !0, (s.loading !== "lazy" || s.getAttribute("ng-img")) && (r = !0));
    }), n && !r && this.lcpImageUrl && !((o = this.options) != null && o.disableImageLazyLoadWarning) && tj(this.lcpImageUrl);
  }
  isOversized(t) {
    if (!this.window)
      return !1;
    const n = [
      // SVG images are vector-based, which means they can scale
      // to any size without losing quality.
      ".svg"
    ], r = (t.src || "").toLowerCase();
    if (n.some((g) => r.endsWith(g)))
      return !1;
    const o = this.window.getComputedStyle(t);
    let s = parseFloat(o.getPropertyValue("width")), i = parseFloat(o.getPropertyValue("height"));
    const a = o.getPropertyValue("box-sizing");
    if (o.getPropertyValue("object-fit") === "cover")
      return !1;
    if (a === "border-box") {
      const g = o.getPropertyValue("padding-top"), D = o.getPropertyValue("padding-right"), E = o.getPropertyValue("padding-bottom"), m = o.getPropertyValue("padding-left");
      s -= parseFloat(D) + parseFloat(m), i -= parseFloat(g) + parseFloat(E);
    }
    const u = t.naturalWidth, l = t.naturalHeight, d = this.window.devicePixelRatio * s, f = this.window.devicePixelRatio * i, h = u - d >= tE, p = l - f >= tE;
    return h || p;
  }
};
$r.ɵfac = function(n) {
  return new (n || $r)();
}, $r.ɵprov = /* @__PURE__ */ se({ token: $r, factory: $r.ɵfac, providedIn: "root" });
let Il = $r;
(typeof ngDevMode > "u" || ngDevMode) && it(Il, [{
  type: Ee,
  args: [{ providedIn: "root" }]
}], null, null);
function tj(e) {
  console.warn(fe(-913, `An image with src ${e} is the Largest Contentful Paint (LCP) element but was given a "loading" value of "lazy", which can negatively impact application loading performance. This warning can be addressed by changing the loading value of the LCP image to "eager", or by using the NgOptimizedImage directive's prioritization utilities. For more information about addressing or disabling this warning, see https://angular.dev/errors/NG0913`));
}
function nj(e) {
  console.warn(fe(-913, `An image with src ${e} has intrinsic file dimensions much larger than its rendered size. This can negatively impact application loading performance. For more information about addressing or disabling this warning, see https://angular.dev/errors/NG0913`));
}
const bl = new F(ngDevMode ? "PlatformDestroyListeners" : "");
function ra(e) {
  return !e.moduleRef;
}
function XS(e) {
  const t = ra(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(oe);
  return n.run(() => {
    ra(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers();
    const r = t.get(Nn, null);
    if (typeof ngDevMode > "u" || ngDevMode) {
      if (r === null) {
        const s = ra(e) ? "No `ErrorHandler` found in the Dependency Injection tree." : "No ErrorHandler. Is platform module (BrowserModule) included";
        throw new v(402, s);
      }
      if (t.get(sw) && t.get($y))
        throw new v(408, "Invalid change detection configuration: provideZoneChangeDetection and provideExperimentalZonelessChangeDetection cannot be used together.");
    }
    let o;
    if (n.runOutsideAngular(() => {
      o = n.onError.subscribe({
        next: (s) => {
          r.handleError(s);
        }
      });
    }), ra(e)) {
      const s = () => t.destroy(), i = e.platformInjector.get(bl);
      i.add(s), t.onDestroy(() => {
        o.unsubscribe(), i.delete(s);
      });
    } else {
      const s = () => e.moduleRef.destroy(), i = e.platformInjector.get(bl);
      i.add(s), e.moduleRef.onDestroy(() => {
        ju(e.allPlatformModules, e.moduleRef), o.unsubscribe(), i.delete(s);
      });
    }
    return W2(r, n, () => {
      const s = t.get(Gs);
      return s.runInitializers(), s.donePromise.then(() => {
        const i = t.get(at, sc);
        if (iM(i || sc), (typeof ngDevMode > "u" || ngDevMode) && t.get(Il).start(), ra(e)) {
          const a = t.get(rt);
          return e.rootComponent !== void 0 && a.bootstrap(e.rootComponent), a;
        } else
          return rj(e.moduleRef, e.allPlatformModules), e.moduleRef;
      });
    });
  });
}
function rj(e, t) {
  const n = e.injector.get(rt);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
  else
    throw new v(-403, ngDevMode && `The module ${J(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);
  t.push(e);
}
const Br = class Br {
  /** @internal */
  constructor(t) {
    this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1;
  }
  /**
   * Creates an instance of an `@NgModule` for the given platform.
   *
   * @deprecated Passing NgModule factories as the `PlatformRef.bootstrapModuleFactory` function
   *     argument is deprecated. Use the `PlatformRef.bootstrapModule` API instead.
   */
  bootstrapModuleFactory(t, n) {
    const r = n == null ? void 0 : n.scheduleInRootZone, o = () => NP(n == null ? void 0 : n.ngZone, {
      ...By({
        eventCoalescing: n == null ? void 0 : n.ngZoneEventCoalescing,
        runCoalescing: n == null ? void 0 : n.ngZoneRunCoalescing
      }),
      scheduleInRootZone: r
    }), s = n == null ? void 0 : n.ignoreChangesOutsideZone, i = [
      Kd({
        ngZoneFactory: o,
        ignoreChangesOutsideZone: s
      }),
      { provide: Ho, useExisting: Tn }
    ], a = YF(t.moduleType, this.injector, i);
    return XS({
      moduleRef: a,
      allPlatformModules: this._modules,
      platformInjector: this.injector
    });
  }
  /**
   * Creates an instance of an `@NgModule` for a given platform.
   *
   * @usageNotes
   * ### Simple Example
   *
   * ```typescript
   * @NgModule({
   *   imports: [BrowserModule]
   * })
   * class MyModule {}
   *
   * let moduleRef = platformBrowser().bootstrapModule(MyModule);
   * ```
   *
   */
  bootstrapModule(t, n = []) {
    const r = qS({}, n);
    return JS(this.injector, r, t).then((o) => this.bootstrapModuleFactory(o, r));
  }
  /**
   * Registers a listener to be called when the platform is destroyed.
   */
  onDestroy(t) {
    this._destroyListeners.push(t);
  }
  /**
   * Retrieves the platform {@link Injector}, which is the parent injector for
   * every Angular application on the page and provides singleton providers.
   */
  get injector() {
    return this._injector;
  }
  /**
   * Destroys the current Angular platform and all Angular applications on the page.
   * Destroys all modules and listeners registered with the platform.
   */
  destroy() {
    if (this._destroyed)
      throw new v(404, ngDevMode && "The platform has already been destroyed!");
    this._modules.slice().forEach((n) => n.destroy()), this._destroyListeners.forEach((n) => n());
    const t = this._injector.get(bl, null);
    t && (t.forEach((n) => n()), t.clear()), this._destroyed = !0;
  }
  /**
   * Indicates whether this instance was destroyed.
   */
  get destroyed() {
    return this._destroyed;
  }
};
Br.ɵfac = function(n) {
  return new (n || Br)(He($e));
}, Br.ɵprov = /* @__PURE__ */ se({ token: Br, factory: Br.ɵfac, providedIn: "platform" });
let Ws = Br;
(typeof ngDevMode > "u" || ngDevMode) && it(Ws, [{
  type: Ee,
  args: [{ providedIn: "platform" }]
}], () => [{ type: $e }], null);
let tn = null;
const bo = new F(ngDevMode ? "AllowMultipleToken" : "");
function eT(e) {
  if (tu())
    throw new v(400, ngDevMode && "There can be only one platform. Destroy the previous one to create a new one.");
  GS(), WS(), tn = e.get(bo, !1) ? null : e;
  const n = e.get(Ws);
  return oT(e), n;
}
function tT(e, t, n = []) {
  const r = `Platform: ${t}`, o = new F(r);
  return (s = []) => {
    let i = tu();
    if (!i || i.injector.get(bo, !1)) {
      const c = [
        ...n,
        ...s,
        { provide: o, useValue: !0 }
      ];
      i = (e == null ? void 0 : e(c)) ?? eT(nT(c, r));
    }
    return i.injector.get(bo, !1) ? i : rT(o);
  };
}
function nT(e = [], t) {
  return $e.create({
    name: t,
    providers: [
      { provide: Yp, useValue: "platform" },
      { provide: bl, useValue: /* @__PURE__ */ new Set([() => tn = null]) },
      ...e
    ]
  });
}
function rT(e) {
  const t = tu();
  if (!t)
    throw new v(401, ngDevMode && "No platform exists!");
  if ((typeof ngDevMode > "u" || ngDevMode) && !t.injector.get(e, null))
    throw new v(400, "A platform with a different configuration has been created. Please destroy it first.");
  return t;
}
function tu() {
  return tn && tn.get(bo, !1) ? null : (tn == null ? void 0 : tn.get(Ws)) ?? null;
}
function oj() {
  var e;
  (e = tu()) == null || e.destroy();
}
function sj(e = []) {
  if (tn)
    return tn;
  GS();
  const t = nT(e);
  return t.get(bo, !1) || (tn = t), WS(), oT(t), t;
}
function oT(e) {
  const t = e.get(Cb, null);
  t == null || t.forEach((n) => n());
}
function ij(e) {
  if (typeof ngDevMode > "u" || ngDevMode) {
    if (e.interval === void 0 && !e.useNgZoneOnStable)
      throw new Error("Must provide one of `useNgZoneOnStable` or `interval`");
    const t = (e == null ? void 0 : e.exhaustive) === !1 ? Yn.OnlyDirtyViews : Yn.Exhaustive;
    return Fs([
      e != null && e.useNgZoneOnStable ? { provide: oe, useFactory: () => new nE(t) } : [],
      (e == null ? void 0 : e.interval) !== void 0 ? aj(e.interval, t) : [],
      {
        provide: Gt,
        multi: !0,
        useValue: () => {
          if (e != null && e.useNgZoneOnStable && !(I(oe) instanceof nE))
            throw new Error("`provideExperimentalCheckNoChangesForDebug` with `useNgZoneOnStable` must be after any other provider for `NgZone`.");
        }
      }
    ]);
  } else
    return Fs([]);
}
class nE extends oe {
  constructor(t) {
    const n = I(ji);
    super({
      shouldCoalesceEventChangeDetection: !0,
      shouldCoalesceRunChangeDetection: n
    }), this.checkNoChangesMode = t, this.injector = I(Pt), n ? (this.onMicrotaskEmpty.emit = () => {
    }, this.onStable.emit = () => {
      this.scheduler || (this.scheduler = this.injector.get(Tn)), !(this.scheduler.pendingRenderTaskId || this.scheduler.runningTick) && this.checkApplicationViews();
    }, this.onUnstable.emit = () => {
    }) : this.runOutsideAngular(() => {
      this.onStable.subscribe(() => {
        this.checkApplicationViews();
      });
    });
  }
  checkApplicationViews() {
    this.applicationRef || (this.applicationRef = this.injector.get(rt));
    for (const t of this.applicationRef.allViews)
      try {
        tm(t._lView, this.checkNoChangesMode, t.notifyErrorHandler);
      } catch (n) {
        this.errorHandler || (this.errorHandler = this.injector.get(Nn)), this.errorHandler.handleError(n);
      }
  }
}
function aj(e, t) {
  return {
    provide: Gt,
    multi: !0,
    useFactory: () => {
      const n = I(rt), r = I(Nn), o = I(Tn), s = I(oe);
      return () => {
        function i() {
          s.runOutsideAngular(() => {
            setTimeout(() => {
              if (!n.destroyed) {
                if (o.pendingRenderTaskId || o.runningTick) {
                  i();
                  return;
                }
                for (const a of n.allViews)
                  try {
                    tm(a._lView, t, a.notifyErrorHandler);
                  } catch (c) {
                    r.handleError(c);
                  }
                i();
              }
            }, e);
          });
        }
        i();
      };
    }
  };
}
function cj() {
  return typeof ngDevMode > "u" || !!ngDevMode;
}
function uj() {
  (typeof ngDevMode > "u" || ngDevMode) && (Ae.ngDevMode = !1);
}
function lj(e) {
  const t = $w(e);
  if (!t)
    throw sT(e);
  return new xd(t);
}
function dj(e) {
  const t = $w(e);
  if (!t)
    throw sT(e);
  return t;
}
function sT(e) {
  return new Error(`No module with ID ${e} loaded`);
}
const pv = class pv {
};
pv.__NG_ELEMENT_ID__ = iT;
let rr = pv;
function iT(e) {
  return fj(
    re(),
    y(),
    (e & 16) === 16
    /* InternalInjectFlags.ForPipe */
  );
}
function fj(e, t, n) {
  if (Dr(e) && !n) {
    const r = bt(e.index, t);
    return new Bs(r, r);
  } else if (e.type & 175) {
    const r = t[De];
    return new Bs(r, t);
  }
  return null;
}
class aT extends rr {
}
class hj extends aT {
}
class pj {
  constructor(t, n) {
    this.name = t, this.callback = n;
  }
}
function gj(e) {
  return e.map((t) => t.nativeElement);
}
class Uy {
  constructor(t) {
    this.nativeNode = t;
  }
  /**
   * The `DebugElement` parent. Will be `null` if this is the root element.
   */
  get parent() {
    const t = this.nativeNode.parentNode;
    return t ? new nu(t) : null;
  }
  /**
   * The host dependency injector. For example, the root element's component instance injector.
   */
  get injector() {
    return yb(this.nativeNode);
  }
  /**
   * The element's own component instance, if it has one.
   */
  get componentInstance() {
    const t = this.nativeNode;
    return t && (rl(t) || gb(t));
  }
  /**
   * An object that provides parent context for this element. Often an ancestor component instance
   * that governs this element.
   *
   * When an element is repeated within *ngFor, the context is an `NgForOf` whose `$implicit`
   * property is the value of the row instance value. For example, the `hero` in `*ngFor="let hero
   * of heroes"`.
   */
  get context() {
    return rl(this.nativeNode) || pb(this.nativeNode);
  }
  /**
   * The callbacks attached to the component's @Output properties and/or the element's event
   * properties.
   */
  get listeners() {
    return Eb(this.nativeNode).filter((t) => t.type === "dom");
  }
  /**
   * Dictionary of objects associated with template local variables (e.g. #foo), keyed by the local
   * variable name.
   */
  get references() {
    return KP(this.nativeNode);
  }
  /**
   * This component's injector lookup tokens. Includes the component itself plus the tokens that the
   * component lists in its providers metadata.
   */
  get providerTokens() {
    return QP(this.nativeNode);
  }
}
class nu extends Uy {
  constructor(t) {
    ngDevMode && Un(t), super(t);
  }
  /**
   * The underlying DOM element at the root of the component.
   */
  get nativeElement() {
    return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null;
  }
  /**
   * The element tag name, if it is an element.
   */
  get name() {
    const t = dt(this.nativeNode), n = t ? t.lView : null;
    return n !== null ? n[C].data[t.nodeIndex].value : this.nativeNode.nodeName;
  }
  /**
   *  Gets a map of property names to property values for an element.
   *
   *  This map includes:
   *  - Regular property bindings (e.g. `[id]="id"`)
   *  - Host property bindings (e.g. `host: { '[id]': "id" }`)
   *  - Interpolated property bindings (e.g. `id="{{ value }}")
   *
   *  It does not include:
   *  - input property bindings (e.g. `[myCustomInput]="value"`)
   *  - attribute bindings (e.g. `[attr.role]="menu"`)
   */
  get properties() {
    const t = dt(this.nativeNode), n = t ? t.lView : null;
    if (n === null)
      return {};
    const r = n[C].data, o = r[t.nodeIndex], s = {};
    return mj(this.nativeElement, s), vj(s, o, n, r), s;
  }
  /**
   *  A map of attribute names to attribute values for an element.
   */
  // TODO: replace null by undefined in the return type
  get attributes() {
    const t = {}, n = this.nativeElement;
    if (!n)
      return t;
    const r = dt(n), o = r ? r.lView : null;
    if (o === null)
      return {};
    const s = o[C].data[r.nodeIndex].attrs, i = [];
    if (s) {
      let a = 0;
      for (; a < s.length; ) {
        const c = s[a];
        if (typeof c != "string")
          break;
        const u = s[a + 1];
        t[c] = u, i.push(c.toLowerCase()), a += 2;
      }
    }
    for (const a of n.attributes)
      i.includes(a.name) || (t[a.name] = a.value);
    return t;
  }
  /**
   * The inline styles of the DOM element.
   */
  // TODO: replace null by undefined in the return type
  get styles() {
    const t = this.nativeElement;
    return (t == null ? void 0 : t.style) ?? {};
  }
  /**
   * A map containing the class names on the element as keys.
   *
   * This map is derived from the `className` property of the DOM element.
   *
   * Note: The values of this object will always be `true`. The class key will not appear in the KV
   * object if it does not exist on the element.
   *
   * @see [Element.className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)
   */
  get classes() {
    const t = {}, r = this.nativeElement.className;
    return (typeof r != "string" ? r.baseVal.split(" ") : r.split(" ")).forEach((s) => t[s] = !0), t;
  }
  /**
   * The `childNodes` of the DOM element as a `DebugNode` array.
   *
   * @see [Node.childNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)
   */
  get childNodes() {
    const t = this.nativeNode.childNodes, n = [];
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      n.push(Zs(o));
    }
    return n;
  }
  /**
   * The immediate `DebugElement` children. Walk the tree by descending through `children`.
   */
  get children() {
    const t = this.nativeElement;
    if (!t)
      return [];
    const n = t.children, r = [];
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      r.push(Zs(s));
    }
    return r;
  }
  /**
   * @returns the first `DebugElement` that matches the predicate at any depth in the subtree.
   */
  query(t) {
    return this.queryAll(t)[0] || null;
  }
  /**
   * @returns All `DebugElement` matches for the predicate at any depth in the subtree.
   */
  queryAll(t) {
    const n = [];
    return rE(this, t, n, !0), n;
  }
  /**
   * @returns All `DebugNode` matches for the predicate at any depth in the subtree.
   */
  queryAllNodes(t) {
    const n = [];
    return rE(this, t, n, !1), n;
  }
  /**
   * Triggers the event by its name if there is a corresponding listener in the element's
   * `listeners` collection.
   *
   * If the event lacks a listener or there's some other problem, consider
   * calling `nativeElement.dispatchEvent(eventObject)`.
   *
   * @param eventName The name of the event to trigger
   * @param eventObj The _event object_ expected by the handler
   *
   * @see [Testing components scenarios](guide/testing/components-scenarios#trigger-event-handler)
   */
  triggerEventHandler(t, n) {
    const r = this.nativeNode, o = [];
    this.listeners.forEach((s) => {
      if (s.name === t) {
        const i = s.callback;
        i.call(r, n), o.push(i);
      }
    }), typeof r.eventListeners == "function" && r.eventListeners(t).forEach((s) => {
      if (s.toString().indexOf("__ngUnwrap__") !== -1) {
        const i = s("__ngUnwrap__");
        return o.indexOf(i) === -1 && i.call(r, n);
      }
    });
  }
}
function mj(e, t) {
  if (e) {
    let n = Object.getPrototypeOf(e);
    const r = Node.prototype;
    for (; n !== null && n !== r; ) {
      const o = Object.getOwnPropertyDescriptors(n);
      for (let s in o)
        if (!s.startsWith("__") && !s.startsWith("on")) {
          const i = e[s];
          yj(i) && (t[s] = i);
        }
      n = Object.getPrototypeOf(n);
    }
  }
}
function yj(e) {
  return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null;
}
function rE(e, t, n, r) {
  const o = dt(e.nativeNode), s = o ? o.lView : null;
  if (s !== null) {
    const i = s[C].data[o.nodeIndex];
    Mr(i, s, t, n, r, e.nativeNode);
  } else
    Vy(e.nativeNode, t, n, r);
}
function Mr(e, t, n, r, o, s) {
  ngDevMode && ot(e, t);
  const i = LO(e, t);
  if (e.type & 11) {
    if (Ff(i, n, r, o, s), Dr(e)) {
      const c = bt(e.index, t);
      c && c[C].firstChild && Mr(c[C].firstChild, c, n, r, o, s);
    } else
      e.child && Mr(e.child, t, n, r, o, s), i && Vy(i, n, r, o);
    const a = t[e.index];
    ze(a) && oE(a, n, r, o, s);
  } else if (e.type & 4) {
    const a = t[e.index];
    Ff(a[cn], n, r, o, s), oE(a, n, r, o, s);
  } else if (e.type & 16) {
    const a = t[De], u = a[Ve].projection[e.projection];
    if (Array.isArray(u))
      for (let l of u)
        Ff(l, n, r, o, s);
    else if (u) {
      const l = a[Ne], d = l[C].data[u.index];
      Mr(d, l, n, r, o, s);
    }
  } else e.child && Mr(e.child, t, n, r, o, s);
  if (s !== i) {
    const a = e.flags & 2 ? e.projectionNext : e.next;
    a && Mr(a, t, n, r, o, s);
  }
}
function oE(e, t, n, r, o) {
  for (let s = ve; s < e.length; s++) {
    const i = e[s], a = i[C].firstChild;
    a && Mr(a, i, t, n, r, o);
  }
}
function Ff(e, t, n, r, o) {
  if (o !== e) {
    const s = Zs(e);
    if (!s)
      return;
    (r && s instanceof nu && t(s) && n.indexOf(s) === -1 || !r && t(s) && n.indexOf(s) === -1) && n.push(s);
  }
}
function Vy(e, t, n, r) {
  const o = e.childNodes, s = o.length;
  for (let i = 0; i < s; i++) {
    const a = o[i], c = Zs(a);
    c && ((r && c instanceof nu && t(c) && n.indexOf(c) === -1 || !r && t(c) && n.indexOf(c) === -1) && n.push(c), Vy(a, t, n, r));
  }
}
function vj(e, t, n, r) {
  let o = t.propertyBindings;
  if (o !== null)
    for (let s = 0; s < o.length; s++) {
      const i = o[s], c = r[i].split(js), u = c[0];
      if (c.length > 1) {
        let l = c[1];
        for (let d = 1; d < c.length - 1; d++)
          l += H(n[i + d - 1]) + c[d + 1];
        e[u] = l;
      } else
        e[u] = n[i];
    }
}
const kf = "__ng_debug__";
function Zs(e) {
  return e instanceof Node ? (e.hasOwnProperty(kf) || (e[kf] = e.nodeType == Node.ELEMENT_NODE ? new nu(e) : new Uy(e)), e[kf]) : null;
}
class cT {
  constructor() {
  }
  supports(t) {
    return ul(t);
  }
  create(t) {
    return new uT(t);
  }
}
const Dj = (e, t) => t;
class uT {
  constructor(t) {
    this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || Dj;
  }
  forEachItem(t) {
    let n;
    for (n = this._itHead; n !== null; n = n._next)
      t(n);
  }
  forEachOperation(t) {
    let n = this._itHead, r = this._removalsHead, o = 0, s = null;
    for (; n || r; ) {
      const i = !r || n && n.currentIndex < iE(r, o, s) ? n : r, a = iE(i, o, s), c = i.currentIndex;
      if (i === r)
        o--, r = r._nextRemoved;
      else if (n = n._next, i.previousIndex == null)
        o++;
      else {
        s || (s = []);
        const u = a - o, l = c - o;
        if (u != l) {
          for (let f = 0; f < u; f++) {
            const h = f < s.length ? s[f] : s[f] = 0, p = h + f;
            l <= p && p < u && (s[f] = h + 1);
          }
          const d = i.previousIndex;
          s[d] = l - u;
        }
      }
      a !== c && t(i, a, c);
    }
  }
  forEachPreviousItem(t) {
    let n;
    for (n = this._previousItHead; n !== null; n = n._nextPrevious)
      t(n);
  }
  forEachAddedItem(t) {
    let n;
    for (n = this._additionsHead; n !== null; n = n._nextAdded)
      t(n);
  }
  forEachMovedItem(t) {
    let n;
    for (n = this._movesHead; n !== null; n = n._nextMoved)
      t(n);
  }
  forEachRemovedItem(t) {
    let n;
    for (n = this._removalsHead; n !== null; n = n._nextRemoved)
      t(n);
  }
  forEachIdentityChange(t) {
    let n;
    for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
      t(n);
  }
  diff(t) {
    if (t == null && (t = []), !ul(t))
      throw new v(900, ngDevMode && `Error trying to diff '${J(t)}'. Only arrays and iterables are allowed`);
    return this.check(t) ? this : null;
  }
  onDestroy() {
  }
  check(t) {
    this._reset();
    let n = this._itHead, r = !1, o, s, i;
    if (Array.isArray(t)) {
      this.length = t.length;
      for (let a = 0; a < this.length; a++)
        s = t[a], i = this._trackByFn(a, s), n === null || !Object.is(n.trackById, i) ? (n = this._mismatch(n, s, i, a), r = !0) : (r && (n = this._verifyReinsertion(n, s, i, a)), Object.is(n.item, s) || this._addIdentityChange(n, s)), n = n._next;
    } else
      o = 0, JF(t, (a) => {
        i = this._trackByFn(o, a), n === null || !Object.is(n.trackById, i) ? (n = this._mismatch(n, a, i, o), r = !0) : (r && (n = this._verifyReinsertion(n, a, i, o)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, o++;
      }), this.length = o;
    return this._truncate(n), this.collection = t, this.isDirty;
  }
  /* CollectionChanges is considered dirty if it has any additions, moves, removals, or identity
   * changes.
   */
  get isDirty() {
    return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null;
  }
  /**
   * Reset the state of the change objects to show no changes. This means set previousKey to
   * currentKey, and clear all of the queues (additions, moves, removals).
   * Set the previousIndexes of moved and added items to their currentIndexes
   * Reset the list of additions, moves and removals
   *
   * @internal
   */
  _reset() {
    if (this.isDirty) {
      let t;
      for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
        t._nextPrevious = t._next;
      for (t = this._additionsHead; t !== null; t = t._nextAdded)
        t.previousIndex = t.currentIndex;
      for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
        t.previousIndex = t.currentIndex;
      this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    }
  }
  /**
   * This is the core function which handles differences between collections.
   *
   * - `record` is the record which we saw at this position last time. If null then it is a new
   *   item.
   * - `item` is the current item in the collection
   * - `index` is the position of the item in the collection
   *
   * @internal
   */
  _mismatch(t, n, r, o) {
    let s;
    return t === null ? s = this._itTail : (s = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, s, o)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(r, o), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, s, o)) : t = this._addAfter(new Ej(n, r), s, o)), t;
  }
  /**
   * This check is only needed if an array contains duplicates. (Short circuit of nothing dirty)
   *
   * Use case: `[a, a]` => `[b, a, a]`
   *
   * If we did not have this check then the insertion of `b` would:
   *   1) evict first `a`
   *   2) insert `b` at `0` index.
   *   3) leave `a` at index `1` as is. <-- this is wrong!
   *   3) reinsert `a` at index 2. <-- this is wrong!
   *
   * The correct behavior is:
   *   1) evict first `a`
   *   2) insert `b` at `0` index.
   *   3) reinsert `a` at index 1.
   *   3) move `a` at from `1` to `2`.
   *
   *
   * Double check that we have not evicted a duplicate item. We need to check if the item type may
   * have already been removed:
   * The insertion of b will evict the first 'a'. If we don't reinsert it now it will be reinserted
   * at the end. Which will show up as the two 'a's switching position. This is incorrect, since a
   * better way to think of it is as insert of 'b' rather then switch 'a' with 'b' and then add 'a'
   * at the end.
   *
   * @internal
   */
  _verifyReinsertion(t, n, r, o) {
    let s = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null);
    return s !== null ? t = this._reinsertAfter(s, t._prev, o) : t.currentIndex != o && (t.currentIndex = o, this._addToMoves(t, o)), t;
  }
  /**
   * Get rid of any excess {@link IterableChangeRecord_}s from the previous collection
   *
   * - `record` The first excess {@link IterableChangeRecord_}.
   *
   * @internal
   */
  _truncate(t) {
    for (; t !== null; ) {
      const n = t._next;
      this._addToRemovals(this._unlink(t)), t = n;
    }
    this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null);
  }
  /** @internal */
  _reinsertAfter(t, n, r) {
    this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
    const o = t._prevRemoved, s = t._nextRemoved;
    return o === null ? this._removalsHead = s : o._nextRemoved = s, s === null ? this._removalsTail = o : s._prevRemoved = o, this._insertAfter(t, n, r), this._addToMoves(t, r), t;
  }
  /** @internal */
  _moveAfter(t, n, r) {
    return this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t;
  }
  /** @internal */
  _addAfter(t, n, r) {
    return this._insertAfter(t, n, r), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t;
  }
  /** @internal */
  _insertAfter(t, n, r) {
    const o = n === null ? this._itHead : n._next;
    return t._next = o, t._prev = n, o === null ? this._itTail = t : o._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new sE()), this._linkedRecords.put(t), t.currentIndex = r, t;
  }
  /** @internal */
  _remove(t) {
    return this._addToRemovals(this._unlink(t));
  }
  /** @internal */
  _unlink(t) {
    this._linkedRecords !== null && this._linkedRecords.remove(t);
    const n = t._prev, r = t._next;
    return n === null ? this._itHead = r : n._next = r, r === null ? this._itTail = n : r._prev = n, t;
  }
  /** @internal */
  _addToMoves(t, n) {
    return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t;
  }
  _addToRemovals(t) {
    return this._unlinkedRecords === null && (this._unlinkedRecords = new sE()), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t;
  }
  /** @internal */
  _addIdentityChange(t, n) {
    return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t;
  }
}
class Ej {
  constructor(t, n) {
    this.item = t, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null;
  }
}
class Cj {
  constructor() {
    this._head = null, this._tail = null;
  }
  /**
   * Append the record to the list of duplicates.
   *
   * Note: by design all records in the list of duplicates hold the same value in record.item.
   */
  add(t) {
    this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t);
  }
  // Returns a IterableChangeRecord_ having IterableChangeRecord_.trackById == trackById and
  // IterableChangeRecord_.currentIndex >= atOrAfterIndex
  get(t, n) {
    let r;
    for (r = this._head; r !== null; r = r._nextDup)
      if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, t))
        return r;
    return null;
  }
  /**
   * Remove one {@link IterableChangeRecord_} from the list of duplicates.
   *
   * Returns whether the list of duplicates is empty.
   */
  remove(t) {
    const n = t._prevDup, r = t._nextDup;
    return n === null ? this._head = r : n._nextDup = r, r === null ? this._tail = n : r._prevDup = n, this._head === null;
  }
}
class sE {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  put(t) {
    const n = t.trackById;
    let r = this.map.get(n);
    r || (r = new Cj(), this.map.set(n, r)), r.add(t);
  }
  /**
   * Retrieve the `value` using key. Because the IterableChangeRecord_ value may be one which we
   * have already iterated over, we use the `atOrAfterIndex` to pretend it is not there.
   *
   * Use case: `[a, b, c, a, a]` if we are at index `3` which is the second `a` then asking if we
   * have any more `a`s needs to return the second `a`.
   */
  get(t, n) {
    const r = t, o = this.map.get(r);
    return o ? o.get(t, n) : null;
  }
  /**
   * Removes a {@link IterableChangeRecord_} from the list of duplicates.
   *
   * The list of duplicates also is removed from the map if it gets empty.
   */
  remove(t) {
    const n = t.trackById;
    return this.map.get(n).remove(t) && this.map.delete(n), t;
  }
  get isEmpty() {
    return this.map.size === 0;
  }
  clear() {
    this.map.clear();
  }
}
function iE(e, t, n) {
  const r = e.previousIndex;
  if (r === null)
    return r;
  let o = 0;
  return n && r < n.length && (o = n[r]), r + t + o;
}
class lT {
  constructor() {
  }
  supports(t) {
    return t instanceof Map || wm(t);
  }
  create() {
    return new Ij();
  }
}
class Ij {
  constructor() {
    this._records = /* @__PURE__ */ new Map(), this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null;
  }
  get isDirty() {
    return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null;
  }
  forEachItem(t) {
    let n;
    for (n = this._mapHead; n !== null; n = n._next)
      t(n);
  }
  forEachPreviousItem(t) {
    let n;
    for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
      t(n);
  }
  forEachChangedItem(t) {
    let n;
    for (n = this._changesHead; n !== null; n = n._nextChanged)
      t(n);
  }
  forEachAddedItem(t) {
    let n;
    for (n = this._additionsHead; n !== null; n = n._nextAdded)
      t(n);
  }
  forEachRemovedItem(t) {
    let n;
    for (n = this._removalsHead; n !== null; n = n._nextRemoved)
      t(n);
  }
  diff(t) {
    if (!t)
      t = /* @__PURE__ */ new Map();
    else if (!(t instanceof Map || wm(t)))
      throw new v(900, ngDevMode && `Error trying to diff '${J(t)}'. Only maps and objects are allowed`);
    return this.check(t) ? this : null;
  }
  onDestroy() {
  }
  /**
   * Check the current state of the map vs the previous.
   * The algorithm is optimised for when the keys do no change.
   */
  check(t) {
    this._reset();
    let n = this._mapHead;
    if (this._appendAfter = null, this._forEach(t, (r, o) => {
      if (n && n.key === o)
        this._maybeAddToChanges(n, r), this._appendAfter = n, n = n._next;
      else {
        const s = this._getOrCreateRecordForKey(o, r);
        n = this._insertBeforeOrAppend(n, s);
      }
    }), n) {
      n._prev && (n._prev._next = null), this._removalsHead = n;
      for (let r = n; r !== null; r = r._nextRemoved)
        r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null;
    }
    return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty;
  }
  /**
   * Inserts a record before `before` or append at the end of the list when `before` is null.
   *
   * Notes:
   * - This method appends at `this._appendAfter`,
   * - This method updates `this._appendAfter`,
   * - The return value is the new value for the insertion pointer.
   */
  _insertBeforeOrAppend(t, n) {
    if (t) {
      const r = t._prev;
      return n._next = t, n._prev = r, t._prev = n, r && (r._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    }
    return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null;
  }
  _getOrCreateRecordForKey(t, n) {
    if (this._records.has(t)) {
      const o = this._records.get(t);
      this._maybeAddToChanges(o, n);
      const s = o._prev, i = o._next;
      return s && (s._next = i), i && (i._prev = s), o._next = null, o._prev = null, o;
    }
    const r = new bj(t);
    return this._records.set(t, r), r.currentValue = n, this._addToAdditions(r), r;
  }
  /** @internal */
  _reset() {
    if (this.isDirty) {
      let t;
      for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
        t._nextPrevious = t._next;
      for (t = this._changesHead; t !== null; t = t._nextChanged)
        t.previousValue = t.currentValue;
      for (t = this._additionsHead; t != null; t = t._nextAdded)
        t.previousValue = t.currentValue;
      this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    }
  }
  // Add the record or a given key to the list of changes only when the value has actually changed
  _maybeAddToChanges(t, n) {
    Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t));
  }
  _addToAdditions(t) {
    this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t);
  }
  _addToChanges(t) {
    this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t);
  }
  /** @internal */
  _forEach(t, n) {
    t instanceof Map ? t.forEach(n) : Object.keys(t).forEach((r) => n(t[r], r));
  }
}
class bj {
  constructor(t) {
    this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null;
  }
}
function aE() {
  return new wo([new cT()]);
}
const jn = class jn {
  constructor(t) {
    this.factories = t;
  }
  static create(t, n) {
    if (n != null) {
      const r = n.factories.slice();
      t = t.concat(r);
    }
    return new jn(t);
  }
  /**
   * Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
   * inherited {@link IterableDiffers} instance with the provided factories and return a new
   * {@link IterableDiffers} instance.
   *
   * @usageNotes
   * ### Example
   *
   * The following example shows how to extend an existing list of factories,
   * which will only be applied to the injector for this component and its children.
   * This step is all that's required to make a new {@link IterableDiffer} available.
   *
   * ```
   * @Component({
   *   viewProviders: [
   *     IterableDiffers.extend([new ImmutableListDiffer()])
   *   ]
   * })
   * ```
   */
  static extend(t) {
    return {
      provide: jn,
      useFactory: (n) => jn.create(t, n || aE()),
      // Dependency technically isn't optional, but we can provide a better error message this way.
      deps: [[jn, new Ql(), new Ot()]]
    };
  }
  find(t) {
    const n = this.factories.find((r) => r.supports(t));
    if (n != null)
      return n;
    throw new v(901, ngDevMode && `Cannot find a differ supporting object '${t}' of type '${wj(t)}'`);
  }
};
jn.ɵprov = se({
  token: jn,
  providedIn: "root",
  factory: aE
});
let wo = jn;
function wj(e) {
  return e.name || typeof e;
}
function cE() {
  return new An([new lT()]);
}
const $n = class $n {
  constructor(t) {
    this.factories = t;
  }
  static create(t, n) {
    if (n) {
      const r = n.factories.slice();
      t = t.concat(r);
    }
    return new $n(t);
  }
  /**
   * Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
   * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
   * {@link KeyValueDiffers} instance.
   *
   * @usageNotes
   * ### Example
   *
   * The following example shows how to extend an existing list of factories,
   * which will only be applied to the injector for this component and its children.
   * This step is all that's required to make a new {@link KeyValueDiffer} available.
   *
   * ```
   * @Component({
   *   viewProviders: [
   *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
   *   ]
   * })
   * ```
   */
  static extend(t) {
    return {
      provide: $n,
      useFactory: (n) => $n.create(t, n || cE()),
      // Dependency technically isn't optional, but we can provide a better error message this way.
      deps: [[$n, new Ql(), new Ot()]]
    };
  }
  find(t) {
    const n = this.factories.find((r) => r.supports(t));
    if (n)
      return n;
    throw new v(901, ngDevMode && `Cannot find a differ supporting object '${t}'`);
  }
};
$n.ɵprov = se({
  token: $n,
  providedIn: "root",
  factory: cE
});
let An = $n;
const _j = [new lT()], Mj = [new cT()], Sj = new wo(Mj), Tj = new An(_j), Aj = tT(null, "core", []), Hr = class Hr {
  // Inject ApplicationRef to make it eager...
  constructor(t) {
  }
};
Hr.ɵfac = function(n) {
  return new (n || Hr)(He(rt));
}, Hr.ɵmod = /* @__PURE__ */ Zp({ type: Hr }), Hr.ɵinj = /* @__PURE__ */ Wl({});
let wl = Hr;
(typeof ngDevMode > "u" || ngDevMode) && it(wl, [{
  type: Fy
}], () => [{ type: rt }], null);
function Oj(e) {
}
function Pj(e) {
  const { rootComponent: t, appProviders: n, platformProviders: r, platformRef: o } = e;
  try {
    const s = (o == null ? void 0 : o.injector) ?? sj(r);
    if (s.get(bo, !1) === !0 && !e.platformRef)
      throw new v(401, ngDevMode && "Missing Platform: This may be due to using `bootstrapApplication` on the server without passing a `BootstrapContext`. Please make sure that `bootstrapApplication` is called with a `BootstrapContext.");
    (typeof ngDevMode > "u" || ngDevMode) && t !== void 0 && iN(t);
    const i = [
      Kd({}),
      { provide: Ho, useExisting: Tn },
      ...n || []
    ], a = new Zw({
      providers: i,
      parent: s,
      debugName: typeof ngDevMode > "u" || ngDevMode ? "Environment Injector" : "",
      // We skip environment initializers because we need to run them inside the NgZone, which
      // happens after we get the NgZone instance from the Injector.
      runEnvironmentInitializers: !1
    });
    return XS({
      r3Injector: a.injector,
      platformInjector: s,
      rootComponent: t
    });
  } catch (s) {
    return Promise.reject(s);
  }
}
function hp(e, t) {
  const n = e[C];
  for (let r = M; r < n.bindingStartIndex; r++)
    if (ze(e[r])) {
      const o = e[r];
      if (!(r === n.bindingStartIndex - 1)) {
        const i = n.data[r], a = _t(n, i);
        if (uk(a)) {
          t.push({ lContainer: o, lView: e, tNode: i, tDetails: a });
          continue;
        }
      }
      for (let i = ve; i < o.length; i++)
        hp(o[i], t);
    } else je(e[r]) && hp(e[r], t);
}
function xj(e) {
  var n, r;
  const t = (r = (n = e.currentTarget) == null ? void 0 : n.__jsaction_fns) == null ? void 0 : r.get(e.type);
  if (t)
    for (const o of t)
      o(e);
}
function Nj(e, t) {
  if (!t.length)
    return;
  const n = t.reduce((o, s) => o + s + ":;", ""), r = e.getAttribute(Uu.JSACTION);
  e.setAttribute(Uu.JSACTION, `${r ?? ""}${n}`);
}
const Rj = (e, t, n) => {
  const r = e, o = r.__jsaction_fns ?? /* @__PURE__ */ new Map(), s = o.get(t) ?? [];
  s.push(n), o.set(t, s), r.__jsaction_fns = o;
}, Fj = (e) => {
  e.removeAttribute(Uu.JSACTION), e.__jsaction_fns = void 0;
}, dT = new F(ngDevMode ? "EVENT_CONTRACT_DETAILS" : "", {
  providedIn: "root",
  factory: () => ({})
}), uE = /* @__PURE__ */ new Set();
function lE(e) {
  return e.get(Og, Rb);
}
function kj() {
  return [
    {
      provide: Og,
      useFactory: () => {
        var t;
        let e = !0;
        if (Dt()) {
          const n = I(dd);
          e = !!((t = window._ejsas) != null && t[n]);
        }
        return e && We("NgEventReplay"), e;
      }
    },
    {
      provide: Gt,
      useValue: () => {
        const e = I($e);
        Dt(e) && lE(e) && VD((t, n, r) => {
          Rj(t, n, r), uE.add(t);
        });
      },
      multi: !0
    },
    {
      provide: Qd,
      useFactory: () => {
        if (Dt()) {
          const e = I($e), t = I(rt);
          return () => {
            lE(e) && Yd(t).then(() => {
              const n = e.get(dT);
              Lj(n, e), uE.forEach(Fj), VD(() => {
              });
            });
          };
        }
        return () => {
        };
      },
      multi: !0
    }
  ];
}
const Lj = (e, t) => {
  const n = t.get(dd), r = window._ejsas[n], o = e.instance = new rh(new X1(r.c));
  for (const a of r.et)
    o.addEvent(a);
  for (const a of r.etc)
    o.addEvent(a);
  const s = MA(n);
  o.replayEarlyEventInfos(s), SA(n);
  const i = new yA(xj);
  IA(o, i);
};
function jj(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = t[zn], s = e.cleanup;
  if (!s || !o)
    return r;
  for (let i = 0; i < s.length; ) {
    const a = s[i++], c = s[i++];
    if (typeof a != "string")
      continue;
    const u = a;
    if (!V1(u))
      continue;
    xp(u) ? n.capture.add(u) : n.regular.add(u);
    const l = X(t[c]);
    i++;
    const d = s[i++];
    (typeof d == "boolean" || d >= 0) && (r.has(l) ? r.get(l).push(u) : r.set(l, [u]));
  }
  return r;
}
class $j {
  constructor() {
    this.views = [], this.indexByContent = /* @__PURE__ */ new Map();
  }
  add(t) {
    const n = JSON.stringify(t);
    if (!this.indexByContent.has(n)) {
      const r = this.views.length;
      return this.views.push(t), this.indexByContent.set(n, r), r;
    }
    return this.indexByContent.get(n);
  }
  getAll() {
    return this.views;
  }
}
let Bj = 0;
function fT(e) {
  return e.ssrId || (e.ssrId = `t${Bj++}`), e.ssrId;
}
function hT(e, t, n) {
  const r = [];
  return Ja(e, t, n, r), r.length;
}
function Hj(e) {
  const t = [];
  return R0(e, t), t.length;
}
function pT(e, t) {
  const n = e[me];
  return n && !n.hasAttribute(Za) ? _l(n, e, t) : null;
}
function gT(e, t) {
  const n = tg(e[me]), r = pT(n, t);
  if (r === null)
    return;
  const o = X(n[me]), s = e[Ne], i = _l(o, s, t), a = n[L], c = `${r}|${i}`;
  a.setAttribute(o, pa, c);
}
function Uj(e, t) {
  const n = e.injector, r = RR(n), o = new $j(), s = /* @__PURE__ */ new Map(), i = e._views, a = n.get(Og, Rb), c = {
    regular: /* @__PURE__ */ new Set(),
    capture: /* @__PURE__ */ new Set()
  };
  for (const d of i) {
    const f = wb(d);
    if (f !== null) {
      const h = {
        serializedViewCollection: o,
        corruptedTextNodes: s,
        isI18nHydrationEnabled: r,
        i18nChildren: /* @__PURE__ */ new Map(),
        eventTypesToReplay: c,
        shouldReplayEvents: a
      };
      ze(f) ? gT(f, h) : pT(f, h), Wj(s, t);
    }
  }
  const u = o.getAll();
  return n.get(ho).set(Mg, u), c;
}
function Vj(e, t) {
  const n = [];
  let r = "";
  for (let o = ve; o < e.length; o++) {
    let s = e[o], i, a, c;
    if (Va(s) && (s = s[M], ze(s))) {
      a = Hj(s) + 1, gT(s, t);
      const l = tg(s[me]);
      c = {
        [Ah]: l[C].ssrId,
        [ks]: a
      };
    }
    if (!c) {
      const l = s[C];
      l.type === 1 ? (i = l.ssrId, a = 1) : (i = fT(l), a = hT(l, s, l.firstChild)), c = {
        [Ah]: i,
        [ks]: a,
        ...mT(e[o], t)
      };
    }
    const u = JSON.stringify(c);
    if (n.length > 0 && u === r) {
      const l = n[n.length - 1];
      l[Xo] ?? (l[Xo] = 1), l[Xo]++;
    } else
      r = u, n.push(c);
  }
  return n;
}
function wa(e, t, n, r) {
  var s;
  const o = t.index - M;
  e[es] ?? (e[es] = {}), (s = e[es])[o] ?? (s[o] = PR(t, n, r));
}
function Lf(e, t) {
  const n = typeof t == "number" ? t : t.index - M;
  e[wr] ?? (e[wr] = []), e[wr].includes(n) || e[wr].push(n);
}
function mT(e, t) {
  const n = {}, r = e[C], o = FR(r, t), s = t.shouldReplayEvents ? jj(r, e, t.eventTypesToReplay) : null;
  for (let i = M; i < r.bindingStartIndex; i++) {
    const a = r.data[i], c = i - M, u = LR(e, i, t);
    if (u) {
      n[aa] ?? (n[aa] = {}), n[aa][c] = u.caseQueue;
      for (const l of u.disconnectedNodes)
        Lf(n, l);
      for (const l of u.disjointNodes) {
        const d = r.data[l + M];
        ngDevMode && Qn(d), wa(n, d, e, o);
      }
      continue;
    }
    if (LI(a) && !Bi(a)) {
      if (ec(a, e) && Zj(a)) {
        Lf(n, a);
        continue;
      }
      if (s && a.type & 2) {
        const l = X(e[i]);
        s.has(l) && Nj(l, s.get(l));
      }
      if (Array.isArray(a.projection)) {
        for (const l of a.projection)
          if (l)
            if (!Array.isArray(l))
              !JC(l) && !Qa(l) && (ec(l, e) ? Lf(n, l) : wa(n, l, e, o));
            else
              throw uR(X(e[i]));
      }
      if (zj(n, a, e, o), ze(e[i])) {
        const l = a.tView;
        l !== null && (n[ia] ?? (n[ia] = {}), n[ia][c] = fT(l));
        const d = e[i][me];
        if (Array.isArray(d)) {
          const f = X(d);
          f.hasAttribute(Za) || _l(f, d, t);
        }
        n[to] ?? (n[to] = {}), n[to][c] = Vj(e[i], t);
      } else if (Array.isArray(e[i]) && !eP(a)) {
        const l = X(e[i][me]);
        l.hasAttribute(Za) || _l(l, e[i], t);
      } else if (a.type & 8)
        n[Jo] ?? (n[Jo] = {}), n[Jo][c] = hT(r, e, a.child);
      else if (a.type & 144) {
        let l = a.next;
        for (; l !== null && l.type & 144; )
          l = l.next;
        l && !Qa(l) && wa(n, l, e, o);
      } else if (a.type & 1) {
        const l = X(e[i]);
        Ob(t, l);
      }
    }
  }
  return n;
}
function zj(e, t, n, r) {
  JC(t) || (t.projectionNext && t.projectionNext !== t.next && !Qa(t.projectionNext) && wa(e, t.projectionNext, n, r), t.prev === null && t.parent !== null && ec(t.parent, n) && !ec(t, n) && wa(e, t, n, r));
}
function Gj(e) {
  var n;
  const t = e[he];
  return t != null && t.constructor ? ((n = q(t.constructor)) == null ? void 0 : n.encapsulation) === _n.ShadowDom : !1;
}
function _l(e, t, n) {
  const r = t[L];
  if (TO(t) && !om() || Gj(t))
    return r.setAttribute(e, Za, ""), null;
  {
    const o = mT(t, n), s = n.serializedViewCollection.add(o);
    return r.setAttribute(e, pa, s.toString()), s;
  }
}
function Wj(e, t) {
  for (const [n, r] of e)
    n.after(t.createComment(r));
}
function Zj(e) {
  let t = e;
  for (; t != null; ) {
    if (Dr(t))
      return !0;
    t = t.parent;
  }
  return !1;
}
let dE = !1, fE = !1;
const qj = 1e4;
function Qj() {
  dE || (dE = !0, lx(), Zk(), ZL(), Yk(), tk(), yF(), KR(), _N());
}
function Yj() {
  fE || (fE = !0, lL(), NR(), VR());
}
function Kj(e) {
  const t = e.get(nr), n = `Angular hydrated ${ngDevMode.hydratedComponents} component(s) and ${ngDevMode.hydratedNodes} node(s), ${ngDevMode.componentsSkippedHydration} component(s) were skipped. Learn more at https://angular.dev/guide/hydration.`;
  t.log(n);
}
function Jj(e, t) {
  const n = Yd(e);
  if (typeof ngDevMode < "u" && ngDevMode) {
    const r = qj, o = t.get(nr), i = t.get(oe).runOutsideAngular(() => setTimeout(() => t$(r, o), r));
    n.finally(() => clearTimeout(i));
  }
  return n;
}
function Xj() {
  return Fs([
    {
      provide: ca,
      useFactory: () => {
        let e = !0;
        if (Dt()) {
          const t = I(ho, { optional: !0 });
          if (e = !!(t != null && t.get(Mg, null)), !e && typeof ngDevMode < "u" && ngDevMode) {
            const n = I(nr), r = fe(-505, "Angular hydration was requested on the client, but there was no serialized information present in the server response, thus hydration was not enabled. Make sure the `provideClientHydration()` is included into the list of providers in the server part of the application configuration.");
            n.warn(r);
          }
        }
        return e && We("NgHydration"), e;
      }
    },
    {
      provide: Gt,
      useValue: () => {
        ew(!1), Dt() && I(ca) && (n$(), Qj());
      },
      multi: !0
    },
    {
      provide: xb,
      useFactory: () => Dt() && I(ca)
    },
    {
      provide: Qd,
      useFactory: () => {
        if (Dt() && I(ca)) {
          const e = I(rt), t = I($e);
          return () => {
            Jj(e, t).then(() => {
              qR(e), typeof ngDevMode < "u" && ngDevMode && Kj(t);
            });
          };
        }
        return () => {
        };
      },
      multi: !0
    }
  ]);
}
function e$() {
  return [
    {
      provide: Nb,
      useValue: !0
    },
    {
      provide: Gt,
      useValue: () => {
        Yj(), ew(!0), We("NgI18nHydration");
      },
      multi: !0
    }
  ];
}
function t$(e, t) {
  const n = `Angular hydration expected the ApplicationRef.isStable() to emit \`true\`, but it didn't happen within ${e}ms. Angular hydration logic depends on the application becoming stable as a signal to complete hydration process.`;
  t.warn(fe(-506, n));
}
function n$() {
  var n;
  const e = Jn();
  let t;
  for (const r of e.body.childNodes)
    if (r.nodeType === Node.COMMENT_NODE && ((n = r.textContent) == null ? void 0 : n.trim()) === Ib) {
      t = r;
      break;
    }
  if (!t)
    throw new v(-507, typeof ngDevMode < "u" && ngDevMode && "Angular hydration logic detected that HTML content of this page was modified after it was produced during server side rendering. Make sure that there are no optimizations that remove comment nodes from HTML enabled on your CDN. Angular hydration relies on HTML produced by the server, including whitespaces and comment nodes.");
}
function Wn(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function ac(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}
function Mt(e) {
  return Le({
    usage: 1,
    kind: "directive",
    type: e.type
  }).compileDirectiveDeclaration(tt, `ng:///${e.type.name}/ɵfac.js`, e);
}
function z(e) {
  it(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null);
}
function r$(e) {
  XM(e.type, e.resolveDeferredDeps, (...t) => {
    const n = e.resolveMetadata(...t);
    it(e.type, n.decorators, n.ctorParameters, n.propDecorators);
  });
}
function o$(e) {
  return Le({
    usage: 1,
    kind: "component",
    type: e.type
  }).compileComponentDeclaration(tt, `ng:///${e.type.name}/ɵcmp.js`, e);
}
function G(e) {
  return Le({
    usage: 1,
    kind: s$(e.target),
    type: e.type
  }).compileFactoryDeclaration(tt, `ng:///${e.type.name}/ɵfac.js`, e);
}
function s$(e) {
  switch (e) {
    case B.Directive:
      return "directive";
    case B.Component:
      return "component";
    case B.Injectable:
      return "injectable";
    case B.Pipe:
      return "pipe";
    case B.NgModule:
      return "NgModule";
  }
}
function St(e) {
  return Le({
    usage: 1,
    kind: "injectable",
    type: e.type
  }).compileInjectableDeclaration(tt, `ng:///${e.type.name}/ɵprov.js`, e);
}
function yT(e) {
  return Le({
    usage: 1,
    kind: "NgModule",
    type: e.type
  }).compileInjectorDeclaration(tt, `ng:///${e.type.name}/ɵinj.js`, e);
}
function vT(e) {
  return Le({
    usage: 1,
    kind: "NgModule",
    type: e.type
  }).compileNgModuleDeclaration(tt, `ng:///${e.type.name}/ɵmod.js`, e);
}
function yt(e) {
  return Le({
    usage: 1,
    kind: "pipe",
    type: e.type
  }).compilePipeDeclaration(tt, `ng:///${e.type.name}/ɵpipe.js`, e);
}
function i$(e, t) {
  We("NgSignals");
  const n = eC(e);
  return t != null && t.equal && (n[ft].equal = t.equal), ngDevMode && (n.toString = () => `[Computed: ${n()}]`), n;
}
function pp(e) {
  const t = U(null);
  try {
    return e();
  } finally {
    U(t);
  }
}
const a$ = new F("", {
  providedIn: "root",
  factory: () => I(Ml)
}), Ll = class Ll {
};
Ll.ɵprov = se({
  token: Ll,
  providedIn: "root",
  factory: () => new c$()
});
let Ml = Ll;
class c$ {
  constructor() {
    this.queuedEffectCount = 0, this.queues = /* @__PURE__ */ new Map(), this.pendingTasks = I(un), this.taskId = null;
  }
  scheduleEffect(t) {
    if (this.enqueue(t), this.taskId === null) {
      const n = this.taskId = this.pendingTasks.add();
      queueMicrotask(() => {
        this.flush(), this.pendingTasks.remove(n), this.taskId = null;
      });
    }
  }
  enqueue(t) {
    const n = t.creationZone;
    this.queues.has(n) || this.queues.set(n, /* @__PURE__ */ new Set());
    const r = this.queues.get(n);
    r.has(t) || (this.queuedEffectCount++, r.add(t));
  }
  /**
   * Run all scheduled effects.
   *
   * Execution order of effects within the same zone is guaranteed to be FIFO, but there is no
   * ordering guarantee between effects scheduled in different zones.
   */
  flush() {
    for (; this.queuedEffectCount > 0; )
      for (const [t, n] of this.queues)
        t === null ? this.flushQueue(n) : t.run(() => this.flushQueue(n));
  }
  flushQueue(t) {
    for (const n of t)
      t.delete(n), this.queuedEffectCount--, n.run();
  }
}
class u$ {
  constructor(t, n, r, o, s, i) {
    this.scheduler = t, this.effectFn = n, this.creationZone = r, this.injector = s, this.watcher = h1((a) => this.runEffect(a), () => this.schedule(), i), this.unregisterOnDestroy = o == null ? void 0 : o.onDestroy(() => this.destroy());
  }
  runEffect(t) {
    try {
      this.effectFn(t);
    } catch (n) {
      const r = this.injector.get(Nn, null, { optional: !0 });
      r == null || r.handleError(n);
    }
  }
  run() {
    this.watcher.run();
  }
  schedule() {
    this.scheduler.scheduleEffect(this);
  }
  destroy() {
    var t;
    this.watcher.destroy(), (t = this.unregisterOnDestroy) == null || t.call(this);
  }
}
function gp(e, t) {
  var i;
  We("NgSignals"), ngDevMode && Sm(gp, "Call `effect` outside of a reactive context. For example, schedule the effect inside the component constructor."), !(t != null && t.injector) && pt(gp);
  const n = (t == null ? void 0 : t.injector) ?? I($e), r = (t == null ? void 0 : t.manualCleanup) !== !0 ? n.get(Kn) : null, o = new u$(n.get(a$), e, typeof Zone > "u" ? null : Zone.current, r, n, (t == null ? void 0 : t.allowSignalWrites) ?? !1), s = n.get(rr, null, { optional: !0 });
  return !s || !(s._lView[P] & 8) ? o.watcher.notify() : ((i = s._lView)[Os] ?? (i[Os] = [])).push(o.watcher.notify), o;
}
function l$(e, t) {
  ngDevMode && n0(e);
  const n = q(e), r = t.elementInjector || Jl();
  return new $i(n).create(r, t.projectableNodes, t.hostElement, t.environmentInjector);
}
function d$(e) {
  const t = q(e);
  if (!t)
    return null;
  const n = new $i(t);
  return {
    get selector() {
      return n.selector;
    },
    get type() {
      return n.componentType;
    },
    get inputs() {
      return n.inputs;
    },
    get outputs() {
      return n.outputs;
    },
    get ngContentSelectors() {
      return n.ngContentSelectors;
    },
    get isStandalone() {
      return t.standalone;
    },
    get isSignal() {
      return t.signals;
    }
  };
}
function f$(...e) {
  return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] });
}
typeof ngDevMode < "u" && ngDevMode && (Ae.$localize ?? (Ae.$localize = function() {
  throw new Error("It looks like your application or one of its dependencies is using i18n.\nAngular 9 introduced a global `$localize()` function that needs to be loaded.\nPlease run `ng add @angular/localize` from the Angular CLI.\n(For non-CLI projects, add `import '@angular/localize/init';` to your `polyfills.ts` file.\nFor server-side rendering applications add the import to your `main.server.ts` file.)");
}));
const w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ANIMATION_MODULE_TYPE: rx,
  APP_BOOTSTRAP_LISTENER: Qd,
  APP_ID: dd,
  APP_INITIALIZER: zS,
  get AfterRenderPhase() {
    return Hn;
  },
  ApplicationInitStatus: Gs,
  ApplicationModule: wl,
  ApplicationRef: rt,
  Attribute: hg,
  COMPILER_OPTIONS: KS,
  CSP_NONCE: ox,
  CUSTOM_ELEMENTS_SCHEMA: Kb,
  get ChangeDetectionStrategy() {
    return V;
  },
  ChangeDetectorRef: rr,
  Compiler: Dl,
  CompilerFactory: Z2,
  Component: Y,
  ComponentFactory: il,
  ComponentFactoryResolver: vo,
  ComponentRef: aw,
  ContentChild: AF,
  ContentChildren: Dm,
  DEFAULT_CURRENCY_CODE: Hy,
  DebugElement: nu,
  DebugEventListener: pj,
  DebugNode: Uy,
  DefaultIterableDiffer: uT,
  DestroyRef: Kn,
  Directive: Je,
  ENVIRONMENT_INITIALIZER: Gt,
  ElementRef: Rt,
  EmbeddedViewRef: hj,
  EnvironmentInjector: Pt,
  ErrorHandler: Nn,
  EventEmitter: ne,
  ExperimentalPendingTasks: bh,
  HOST_TAG_NAME: QI,
  Host: xc,
  HostAttributeToken: EP,
  HostBinding: Ry,
  HostListener: y2,
  INJECTOR: zp,
  Inject: Et,
  get InjectFlags() {
    return Z;
  },
  Injectable: Ee,
  InjectionToken: F,
  Injector: $e,
  Input: _,
  IterableDiffers: wo,
  KeyValueDiffers: An,
  LOCALE_ID: at,
  get MissingTranslationStrategy() {
    return fp;
  },
  ModuleWithComponentFactories: YS,
  NO_ERRORS_SCHEMA: Jb,
  NgModule: Fy,
  NgModuleFactory: Ww,
  NgModuleRef: tr,
  NgProbeToken: G2,
  NgZone: oe,
  Optional: Ot,
  Output: Me,
  OutputEmitterRef: yg,
  PACKAGE_ROOT_URL: nx,
  PLATFORM_ID: Er,
  PLATFORM_INITIALIZER: Cb,
  Pipe: mt,
  PlatformRef: Ws,
  Query: qc,
  QueryList: ld,
  Renderer2: er,
  RendererFactory2: im,
  get RendererStyleFlags2() {
    return $s;
  },
  Sanitizer: al,
  get SecurityContext() {
    return Xn;
  },
  Self: AC,
  SimpleChange: sI,
  SkipSelf: Ql,
  TRANSLATIONS: J2,
  TRANSLATIONS_FORMAT: X2,
  TemplateRef: Ue,
  Testability: vl,
  TestabilityRegistry: zs,
  TransferState: ho,
  Type: QC,
  VERSION: v2,
  Version: ky,
  ViewChild: PF,
  ViewChildren: OF,
  ViewContainerRef: Fe,
  get ViewEncapsulation() {
    return _n;
  },
  ViewRef: aT,
  afterNextRender: dl,
  afterRender: Yh,
  asNativeElements: gj,
  assertInInjectionContext: pt,
  assertNotInReactiveContext: Sm,
  assertPlatform: rT,
  booleanAttribute: Wn,
  computed: i$,
  contentChild: Pw,
  contentChildren: xw,
  createComponent: l$,
  createEnvironmentInjector: bm,
  createNgModule: Im,
  createNgModuleRef: QF,
  createPlatform: eT,
  createPlatformFactory: tT,
  defineInjectable: kA,
  destroyPlatform: oj,
  effect: gp,
  enableProdMode: uj,
  forwardRef: zl,
  getDebugNode: Zs,
  getModuleFactory: lj,
  getNgModuleById: dj,
  getPlatform: tu,
  importProvidersFrom: UC,
  inject: I,
  input: vg,
  isDevMode: cj,
  isSignal: gm,
  isStandalone: Vn,
  makeEnvironmentProviders: Fs,
  makeStateKey: sx,
  mergeApplicationConfig: f$,
  model: vm,
  numberAttribute: ac,
  output: eb,
  platformCore: Aj,
  provideExperimentalCheckNoChangesForDebug: ij,
  provideExperimentalZonelessChangeDetection: Y2,
  provideZoneChangeDetection: q2,
  reflectComponentType: d$,
  resolveForwardRef: $,
  runInInjectionContext: IO,
  setTestabilityGetter: VS,
  signal: bw,
  untracked: pp,
  viewChild: ym,
  viewChildren: Ow,
  ɵALLOW_MULTIPLE_PLATFORMS: bo,
  ɵAfterRenderManager: rc,
  ɵCONTAINER_HEADER_OFFSET: ve,
  ɵChangeDetectionScheduler: Ho,
  ɵChangeDetectionSchedulerImpl: Tn,
  ɵComponentFactory: il,
  ɵConsole: nr,
  ɵDEFAULT_LOCALE_ID: sc,
  ɵDEFER_BLOCK_CONFIG: l_,
  ɵDEFER_BLOCK_DEPENDENCY_INTERCEPTOR: u_,
  get ɵDeferBlockBehavior() {
    return ll;
  },
  get ɵDeferBlockState() {
    return ye;
  },
  ɵEffectScheduler: Ml,
  ɵIMAGE_CONFIG: bg,
  ɵIMAGE_CONFIG_DEFAULTS: Ig,
  ɵINJECTOR_SCOPE: Yp,
  ɵINPUT_SIGNAL_BRAND_WRITE_TYPE: AA,
  ɵINTERNAL_APPLICATION_ERROR_HANDLER: XI,
  ɵIS_HYDRATION_DOM_REUSE_ENABLED: ca,
  ɵJSACTION_EVENT_CONTRACT: dT,
  ɵLContext: sb,
  ɵLifecycleHooksFeature: lw,
  get ɵLocaleDataIndex() {
    return le;
  },
  ɵNG_COMP_DEF: Ti,
  ɵNG_DIR_DEF: Zl,
  ɵNG_ELEMENT_ID: Ts,
  ɵNG_INJ_DEF: zu,
  ɵNG_MOD_DEF: Bp,
  ɵNG_PIPE_DEF: ql,
  ɵNG_PROV_DEF: La,
  ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR: Ru,
  ɵNO_CHANGE: x,
  ɵNgModuleFactory: xd,
  ɵNoopNgZone: ud,
  ɵPROVIDED_NG_ZONE: $y,
  ɵPendingTasks: un,
  ɵReflectionCapabilities: YC,
  ɵRender3ComponentFactory: $i,
  ɵRender3ComponentRef: uw,
  ɵRender3NgModuleRef: Pd,
  ɵRuntimeError: v,
  ɵSIGNAL: ft,
  ɵSSR_CONTENT_INTEGRITY_MARKER: Ib,
  ɵTESTABILITY: US,
  ɵTESTABILITY_GETTER: Ly,
  ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT: rF,
  ɵViewRef: Bs,
  ɵXSS_SECURITY_URL: xo,
  ɵZONELESS_ENABLED: ji,
  ɵ_sanitizeHtml: Vb,
  ɵ_sanitizeUrl: hd,
  ɵallowSanitizationBypassAndThrow: Fi,
  ɵannotateForHydration: Uj,
  ɵbypassSanitizationTrustHtml: Ix,
  ɵbypassSanitizationTrustResourceUrl: Mx,
  ɵbypassSanitizationTrustScript: wx,
  ɵbypassSanitizationTrustStyle: bx,
  ɵbypassSanitizationTrustUrl: _x,
  ɵclearResolutionOfComponentResourcesQueue: Lw,
  ɵcompileComponent: OS,
  ɵcompileDirective: Ny,
  ɵcompileNgModule: MS,
  ɵcompileNgModuleDefs: SS,
  ɵcompileNgModuleFactory: JS,
  ɵcompilePipe: $S,
  ɵconvertToBitFlags: Oc,
  ɵcreateInjector: Ih,
  ɵdefaultIterableDiffers: Sj,
  ɵdefaultKeyValueDiffers: Tj,
  ɵdepsTracker: Do,
  ɵdetectChangesInViewIfRequired: QS,
  ɵdevModeEqual: _m,
  ɵfindLocaleData: Ke,
  ɵflushModuleScopingQueueAsMuchAsPossible: wS,
  ɵformatRuntimeError: fe,
  ɵgenerateStandaloneInDeclarationsError: TS,
  ɵgetAsyncClassMetadataFn: JL,
  ɵgetDebugNode: Zs,
  ɵgetDeferBlocks: hp,
  ɵgetDirectives: vb,
  ɵgetHostElement: Db,
  ɵgetInjectableDef: Tc,
  ɵgetLContext: dt,
  ɵgetLocaleCurrencyCode: eL,
  ɵgetLocalePluralCase: qm,
  ɵgetOutputDestroyRef: RP,
  ɵgetSanitizationBypassType: kb,
  ɵgetUnknownElementStrictMode: tN,
  ɵgetUnknownPropertyStrictMode: rN,
  ɵglobal: Ae,
  ɵinjectChangeDetectorRef: iT,
  ɵinternalCreateApplication: Pj,
  ɵinternalProvideZoneChangeDetection: Kd,
  ɵisBoundToModule: ZS,
  ɵisComponentDefPendingResolution: NF,
  ɵisEnvironmentProviders: Ac,
  ɵisInjectable: LA,
  ɵisNgModule: _r,
  ɵisPromise: qd,
  ɵisSubscribable: jy,
  ɵnoSideEffects: hn,
  ɵpatchComponentDefWithScope: Py,
  ɵperformanceMarkFeature: We,
  ɵreadHydrationInfo: Mb,
  ɵregisterLocaleData: Xk,
  ɵrenderDeferBlockState: In,
  ɵresetCompiledComponents: a2,
  ɵresetJitOptions: o2,
  ɵresolveComponentResources: Fw,
  ɵrestoreComponentResolutionQueue: RF,
  ɵsetAllowDuplicateNgModuleIdsForTest: $F,
  ɵsetAlternateWeakRefImpl: Oj,
  ɵsetClassDebugInfo: bS,
  ɵsetClassMetadata: it,
  ɵsetClassMetadataAsync: XM,
  ɵsetCurrentInjector: Cn,
  ɵsetDocument: ex,
  ɵsetInjectorProfilerContext: Xe,
  ɵsetLocaleId: iM,
  ɵsetUnknownElementStrictMode: eN,
  ɵsetUnknownPropertyStrictMode: nN,
  ɵstore: Gd,
  ɵstringify: J,
  ɵtransitiveScopesFor: xy,
  ɵtriggerResourceLoading: kd,
  ɵtruncateMiddle: xA,
  ɵunregisterLocaleData: tL,
  ɵunwrapSafeValue: mn,
  ɵunwrapWritableSignal: wF,
  ɵwhenStable: Yd,
  ɵwithDomHydration: Xj,
  ɵwithEventReplay: kj,
  ɵwithI18nSupport: e$,
  ɵɵCopyDefinitionFeature: Uw,
  get ɵɵFactoryTarget() {
    return B;
  },
  ɵɵHostDirectivesFeature: Vw,
  ɵɵInheritDefinitionFeature: Cm,
  ɵɵInputTransformsFeature: Gw,
  ɵɵNgOnChangesFeature: eg,
  ɵɵProvidersFeature: QM,
  ɵɵStandaloneFeature: YM,
  ɵɵadvance: D0,
  ɵɵattribute: Om,
  ɵɵattributeInterpolate1: Pm,
  ɵɵattributeInterpolate2: xm,
  ɵɵattributeInterpolate3: Nm,
  ɵɵattributeInterpolate4: Rm,
  ɵɵattributeInterpolate5: Fm,
  ɵɵattributeInterpolate6: km,
  ɵɵattributeInterpolate7: Lm,
  ɵɵattributeInterpolate8: jm,
  ɵɵattributeInterpolateV: $m,
  ɵɵclassMap: F_,
  ɵɵclassMapInterpolate1: H_,
  ɵɵclassMapInterpolate2: U_,
  ɵɵclassMapInterpolate3: V_,
  ɵɵclassMapInterpolate4: z_,
  ɵɵclassMapInterpolate5: G_,
  ɵɵclassMapInterpolate6: W_,
  ɵɵclassMapInterpolate7: Z_,
  ɵɵclassMapInterpolate8: q_,
  ɵɵclassMapInterpolateV: Q_,
  ɵɵclassProp: Um,
  ɵɵcomponentInstance: Y_,
  ɵɵconditional: K_,
  ɵɵcontentQuery: _M,
  ɵɵcontentQuerySignal: AM,
  ɵɵdeclareLet: Oy,
  ɵɵdefer: f_,
  ɵɵdeferEnableTimerScheduling: d_,
  ɵɵdeferOnHover: C_,
  ɵɵdeferOnIdle: g_,
  ɵɵdeferOnImmediate: y_,
  ɵɵdeferOnInteraction: b_,
  ɵɵdeferOnTimer: D_,
  ɵɵdeferOnViewport: __,
  ɵɵdeferPrefetchOnHover: I_,
  ɵɵdeferPrefetchOnIdle: m_,
  ɵɵdeferPrefetchOnImmediate: v_,
  ɵɵdeferPrefetchOnInteraction: w_,
  ɵɵdeferPrefetchOnTimer: E_,
  ɵɵdeferPrefetchOnViewport: M_,
  ɵɵdeferPrefetchWhen: p_,
  ɵɵdeferWhen: h_,
  ɵɵdefineComponent: LC,
  ɵɵdefineDirective: jC,
  ɵɵdefineInjectable: se,
  ɵɵdefineInjector: Wl,
  ɵɵdefineNgModule: Zp,
  ɵɵdefinePipe: $C,
  ɵɵdirectiveInject: $o,
  ɵɵdisableBindings: vI,
  ɵɵelement: zm,
  ɵɵelementContainer: Gm,
  ɵɵelementContainerEnd: Bd,
  ɵɵelementContainerStart: $d,
  ɵɵelementEnd: jd,
  ɵɵelementStart: Ld,
  ɵɵenableBindings: yI,
  ɵɵgetComponentDepsFactory: IS,
  ɵɵgetCurrentView: oM,
  ɵɵgetInheritedFactory: GI,
  ɵɵhostProperty: Wm,
  ɵɵi18n: yM,
  ɵɵi18nApply: DM,
  ɵɵi18nAttributes: vM,
  ɵɵi18nEnd: Ym,
  ɵɵi18nExp: Km,
  ɵɵi18nPostprocess: EM,
  ɵɵi18nStart: Qm,
  ɵɵinject: He,
  ɵɵinjectAttribute: ad,
  ɵɵinvalidFactory: C0,
  ɵɵinvalidFactoryDep: Vp,
  ɵɵlistener: Jm,
  ɵɵloadQuery: TM,
  ɵɵnamespaceHTML: NI,
  ɵɵnamespaceMathML: xI,
  ɵɵnamespaceSVG: PI,
  ɵɵnextContext: IM,
  ɵɵngDeclareClassMetadata: z,
  ɵɵngDeclareClassMetadataAsync: r$,
  ɵɵngDeclareComponent: o$,
  ɵɵngDeclareDirective: Mt,
  ɵɵngDeclareFactory: G,
  ɵɵngDeclareInjectable: St,
  ɵɵngDeclareInjector: yT,
  ɵɵngDeclareNgModule: vT,
  ɵɵngDeclarePipe: yt,
  ɵɵpipe: gS,
  ɵɵpipeBind1: mS,
  ɵɵpipeBind2: yS,
  ɵɵpipeBind3: vS,
  ɵɵpipeBind4: DS,
  ɵɵpipeBindV: ES,
  ɵɵprojection: wM,
  ɵɵprojectionDef: bM,
  ɵɵproperty: Bm,
  ɵɵpropertyInterpolate: ty,
  ɵɵpropertyInterpolate1: zd,
  ɵɵpropertyInterpolate2: ny,
  ɵɵpropertyInterpolate3: ry,
  ɵɵpropertyInterpolate4: oy,
  ɵɵpropertyInterpolate5: sy,
  ɵɵpropertyInterpolate6: iy,
  ɵɵpropertyInterpolate7: ay,
  ɵɵpropertyInterpolate8: cy,
  ɵɵpropertyInterpolateV: uy,
  ɵɵpureFunction0: eS,
  ɵɵpureFunction1: tS,
  ɵɵpureFunction2: nS,
  ɵɵpureFunction3: rS,
  ɵɵpureFunction4: oS,
  ɵɵpureFunction5: sS,
  ɵɵpureFunction6: iS,
  ɵɵpureFunction7: aS,
  ɵɵpureFunction8: cS,
  ɵɵpureFunctionV: uS,
  ɵɵqueryAdvance: PM,
  ɵɵqueryRefresh: SM,
  ɵɵreadContextLet: ZM,
  ɵɵreference: xM,
  ɵɵregisterNgModuleType: Em,
  ɵɵrepeater: eM,
  ɵɵrepeaterCreate: X_,
  ɵɵrepeaterTrackByIdentity: Vm,
  ɵɵrepeaterTrackByIndex: J_,
  ɵɵresetView: EI,
  ɵɵresolveBody: jg,
  ɵɵresolveDocument: t0,
  ɵɵresolveWindow: e0,
  ɵɵrestoreView: DI,
  ɵɵsanitizeHtml: zb,
  ɵɵsanitizeResourceUrl: Rg,
  ɵɵsanitizeScript: Wb,
  ɵɵsanitizeStyle: Gb,
  ɵɵsanitizeUrl: Ng,
  ɵɵsanitizeUrlOrResourceUrl: Qb,
  ɵɵsetComponentScope: KM,
  ɵɵsetNgModuleScope: JM,
  ɵɵstoreLet: WM,
  ɵɵstyleMap: Qt,
  ɵɵstyleMapInterpolate1: NM,
  ɵɵstyleMapInterpolate2: RM,
  ɵɵstyleMapInterpolate3: FM,
  ɵɵstyleMapInterpolate4: kM,
  ɵɵstyleMapInterpolate5: LM,
  ɵɵstyleMapInterpolate6: jM,
  ɵɵstyleMapInterpolate7: $M,
  ɵɵstyleMapInterpolate8: BM,
  ɵɵstyleMapInterpolateV: HM,
  ɵɵstyleProp: Hm,
  ɵɵstylePropInterpolate1: ly,
  ɵɵstylePropInterpolate2: dy,
  ɵɵstylePropInterpolate3: fy,
  ɵɵstylePropInterpolate4: hy,
  ɵɵstylePropInterpolate5: py,
  ɵɵstylePropInterpolate6: gy,
  ɵɵstylePropInterpolate7: my,
  ɵɵstylePropInterpolate8: yy,
  ɵɵstylePropInterpolateV: vy,
  ɵɵsyntheticHostListener: Xm,
  ɵɵsyntheticHostProperty: Zm,
  ɵɵtemplate: Mm,
  ɵɵtemplateRefExtractor: CS,
  ɵɵtext: UM,
  ɵɵtextInterpolate: Dy,
  ɵɵtextInterpolate1: Wd,
  ɵɵtextInterpolate2: Ey,
  ɵɵtextInterpolate3: Cy,
  ɵɵtextInterpolate4: Iy,
  ɵɵtextInterpolate5: by,
  ɵɵtextInterpolate6: wy,
  ɵɵtextInterpolate7: _y,
  ɵɵtextInterpolate8: My,
  ɵɵtextInterpolateV: Sy,
  ɵɵtrustConstantHtml: Zb,
  ɵɵtrustConstantResourceUrl: qb,
  ɵɵtwoWayBindingSet: zM,
  ɵɵtwoWayListener: Ay,
  ɵɵtwoWayProperty: Ty,
  ɵɵvalidateIframeAttribute: Bw,
  ɵɵviewQuery: MM,
  ɵɵviewQuerySignal: OM
}, Symbol.toStringTag, { value: "Module" }));
var h$ = Object.getOwnPropertyDescriptor, p$ = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? h$(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
};
let cc = class {
};
cc = p$([
  Y({
    selector: "AbsoluteLayout, absolutelayout",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<div class="ns-absolute"><ng-content></ng-content></div>',
    styles: [
      `
			.ns-absolute {
				position: relative;
				width: 100%;
				height: 100%;
			}
		`
    ]
  })
], cc);
var g$ = Object.getOwnPropertyDescriptor, m$ = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? g$(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
};
let uc = class {
};
uc = m$([
  Y({
    selector: "ActionBar, actionbar",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<header class="ns-actionbar"><ng-content></ng-content></header>',
    styles: [
      `
			.ns-actionbar {
				padding: 12px;
			}
		`
    ]
  })
], uc);
var y$ = Object.defineProperty, v$ = Object.getOwnPropertyDescriptor, DT = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? v$(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && y$(t, n, o), o;
};
let qs = class {
  constructor() {
    S(this, "tap", new ne());
  }
};
DT([
  Me()
], qs.prototype, "tap", 2);
qs = DT([
  Y({
    selector: "ActionItem, actionitem",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<button class="ns-actionitem" (click)="tap.emit($event)"><ng-content></ng-content></button>',
    styles: [
      `
			.ns-actionitem {
				background: transparent;
				border: none;
				color: inherit;
				cursor: pointer;
				padding: 8px;
			}
		`
    ]
  })
], qs);
var D$ = Object.defineProperty, E$ = Object.getOwnPropertyDescriptor, ET = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? E$(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && D$(t, n, o), o;
};
let Qs = class {
  constructor() {
    S(this, "busy", !0);
  }
};
ET([
  _()
], Qs.prototype, "busy", 2);
Qs = ET([
  Y({
    selector: "ActivityIndicator, activityindicator",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<div class="ns-activity-indicator" [class.busy]="busy"></div>',
    styles: [
      `
			.ns-activity-indicator {
				width: 20px;
				height: 20px;
				border-radius: 50%;
				border: 2px solid rgba(255, 255, 255, 0.3);
				border-top-color: currentColor;
				opacity: 0.8;
			}
			.ns-activity-indicator.busy {
				animation: ns-spin 0.8s linear infinite;
			}
			@keyframes ns-spin {
				to {
					transform: rotate(360deg);
				}
			}
		`
    ]
  })
], Qs);
var C$ = Object.defineProperty, I$ = Object.getOwnPropertyDescriptor, zy = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? I$(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && C$(t, n, o), o;
};
let _o = class {
  constructor() {
    S(this, "horizontalAlignment");
    S(this, "tap", new ne());
  }
  get btnStyle() {
    var n;
    const e = {}, t = (n = this.horizontalAlignment) == null ? void 0 : n.toLowerCase();
    return t === "center" ? (e.display = "block", e.width = "fit-content", e.marginLeft = "auto", e.marginRight = "auto", e.alignSelf = "center", e.justifySelf = "center") : t === "right" ? (e.display = "block", e.width = "fit-content", e.marginLeft = "auto", e.alignSelf = "flex-end", e.justifySelf = "end") : t === "left" && (e.display = "block", e.width = "fit-content", e.marginRight = "auto", e.alignSelf = "flex-start", e.justifySelf = "start"), e;
  }
};
zy([
  _()
], _o.prototype, "horizontalAlignment", 2);
zy([
  Me()
], _o.prototype, "tap", 2);
_o = zy([
  Y({
    selector: "Button, button[nsButton], ns-button",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<button class="ns-button" [ngStyle]="btnStyle" (click)="tap.emit($event)"><ng-content></ng-content></button>',
    styles: [
      `
			.ns-button {
				cursor: pointer;
			}
		`
    ]
  })
], _o);
var b$ = Object.defineProperty, w$ = Object.getOwnPropertyDescriptor, Jd = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? w$(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && b$(t, n, o), o;
};
let or = class {
  constructor() {
    S(this, "date");
    S(this, "dateChange", new ne());
    S(this, "change", new ne());
  }
  get valueStr() {
    if (!this.date) return "";
    const e = typeof this.date == "string" ? new Date(this.date) : this.date;
    if (Number.isNaN(e.getTime())) return "";
    const t = (n) => n < 10 ? `0${n}` : String(n);
    return `${e.getFullYear()}-${t(e.getMonth() + 1)}-${t(e.getDate())}`;
  }
  onInput(e) {
    const t = e.target.value;
    this.dateChange.emit(t), this.change.emit(t);
  }
};
Jd([
  _()
], or.prototype, "date", 2);
Jd([
  Me()
], or.prototype, "dateChange", 2);
Jd([
  Me()
], or.prototype, "change", 2);
or = Jd([
  Y({
    selector: "DatePicker, datepicker",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<input class="ns-datepicker" type="date" [value]="valueStr" (input)="onInput($event)" />',
    styles: [
      `
			.ns-datepicker {
				padding: 6px 8px;
			}
		`
    ]
  })
], or);
var _$ = Object.getOwnPropertyDescriptor, M$ = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? _$(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
};
let lc = class {
};
lc = M$([
  Y({
    selector: "DockLayout, docklayout",
    standalone: !0,
    changeDetection: V.OnPush,
    template: `
		<div class="ns-dock">
			<div class="ns-dock-top"><ng-content select="[dock='top'],[dock='Top'],[dock='TOP']"></ng-content></div>
			<div class="ns-dock-middle">
				<div class="ns-dock-left"><ng-content select="[dock='left'],[dock='Left'],[dock='LEFT']"></ng-content></div>
				<div class="ns-dock-center"><ng-content></ng-content></div>
				<div class="ns-dock-right"><ng-content select="[dock='right'],[dock='Right'],[dock='RIGHT']"></ng-content></div>
			</div>
			<div class="ns-dock-bottom"><ng-content select="[dock='bottom'],[dock='Bottom'],[dock='BOTTOM']"></ng-content></div>
		</div>
	`,
    styles: [
      `
			.ns-dock {
				display: flex;
				flex-direction: column;
				width: 100%;
				height: 100%;
			}
			.ns-dock-top,
			.ns-dock-bottom {
				flex: 0 0 auto;
			}
			.ns-dock-middle {
				display: flex;
				flex: 1 1 auto;
				min-height: 0;
			}
			.ns-dock-left,
			.ns-dock-right {
				flex: 0 0 auto;
			}
			.ns-dock-center {
				flex: 1 1 auto;
				min-width: 0;
			}
		`
    ]
  })
], lc);
var S$ = Object.getOwnPropertyDescriptor, T$ = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? S$(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
};
let dc = class {
};
dc = T$([
  Y({
    selector: "FlexboxLayout, flexboxlayout",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<div class="ns-flex"><ng-content></ng-content></div>',
    styles: [
      `
			.ns-flex {
				display: flex;
			}
		`
    ]
  })
], dc);
var A$ = Object.getOwnPropertyDescriptor, O$ = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? A$(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
};
let fc = class {
};
fc = O$([
  Y({
    selector: "Frame, frame",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<div class="ns-frame"><ng-content></ng-content></div>'
  })
], fc);
var P$ = Object.defineProperty, x$ = Object.getOwnPropertyDescriptor, Gy = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? x$(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && P$(t, n, o), o;
};
let Mo = class {
  constructor() {
    S(this, "rows");
    S(this, "columns");
  }
  get gridStyle() {
    const e = { display: "grid" }, t = this.parseSegments(this.rows), n = this.parseSegments(this.columns);
    return t && (e.gridTemplateRows = t), n && (e.gridTemplateColumns = n), e;
  }
  parseSegments(e) {
    if (!e) return;
    const t = (n) => {
      const r = n.trim();
      if (!r) return "auto";
      if (r === "*") return "1fr";
      const o = r.match(/^(\d+)\*$/);
      return o ? `${o[1]}fr` : r.toLowerCase() === "auto" ? "auto" : /^\d+$/.test(r) ? `${r}px` : r;
    };
    return e.split(",").map(t).join(" ");
  }
};
Gy([
  _()
], Mo.prototype, "rows", 2);
Gy([
  _()
], Mo.prototype, "columns", 2);
Mo = Gy([
  Y({
    selector: "GridLayout, gridlayout",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<div class="ns-grid" [ngStyle]="gridStyle"><ng-content></ng-content></div>',
    styles: [
      `
			.ns-grid {
				padding: 0px;
				width: 100%;
				height: 100%;
				box-sizing: border-box;
				min-width: 0;
				min-height: 0;
			}
		`
    ]
  })
], Mo);
/**
 * @license Angular v18.2.14
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */
let N$ = null;
function jf() {
  return N$;
}
const os = class os {
};
os.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: os, deps: [], target: B.Injectable }), os.ɵprov = St({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: os, providedIn: "platform", useFactory: () => window.navigation });
let mp = os;
z({ type: mp, decorators: [{
  type: Ee,
  args: [{ providedIn: "platform", useFactory: () => window.navigation }]
}] });
const Xi = new F(ngDevMode ? "DocumentToken" : ""), ss = class ss {
  historyGo(t) {
    throw new Error(ngDevMode ? "Not implemented" : "");
  }
};
ss.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: ss, deps: [], target: B.Injectable }), ss.ɵprov = St({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: ss, providedIn: "platform", useFactory: () => I(Ys) });
let sr = ss;
z({ type: sr, decorators: [{
  type: Ee,
  args: [{ providedIn: "platform", useFactory: () => I(Ys) }]
}] });
new F(ngDevMode ? "Location Initialized" : "");
const Ur = class Ur extends sr {
  constructor() {
    super(), this._doc = I(Xi), this._location = window.location, this._history = window.history;
  }
  getBaseHrefFromDOM() {
    return jf().getBaseHref(this._doc);
  }
  onPopState(t) {
    const n = jf().getGlobalEventTarget(this._doc, "window");
    return n.addEventListener("popstate", t, !1), () => n.removeEventListener("popstate", t);
  }
  onHashChange(t) {
    const n = jf().getGlobalEventTarget(this._doc, "window");
    return n.addEventListener("hashchange", t, !1), () => n.removeEventListener("hashchange", t);
  }
  get href() {
    return this._location.href;
  }
  get protocol() {
    return this._location.protocol;
  }
  get hostname() {
    return this._location.hostname;
  }
  get port() {
    return this._location.port;
  }
  get pathname() {
    return this._location.pathname;
  }
  get search() {
    return this._location.search;
  }
  get hash() {
    return this._location.hash;
  }
  set pathname(t) {
    this._location.pathname = t;
  }
  pushState(t, n, r) {
    this._history.pushState(t, n, r);
  }
  replaceState(t, n, r) {
    this._history.replaceState(t, n, r);
  }
  forward() {
    this._history.forward();
  }
  back() {
    this._history.back();
  }
  historyGo(t = 0) {
    this._history.go(t);
  }
  getState() {
    return this._history.state;
  }
};
Ur.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Ur, deps: [], target: B.Injectable }), Ur.ɵprov = St({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Ur, providedIn: "platform", useFactory: () => new Ur() });
let Ys = Ur;
z({ type: Ys, decorators: [{
  type: Ee,
  args: [{
    providedIn: "platform",
    useFactory: () => new Ys()
  }]
}], ctorParameters: () => [] });
function Wy(e, t) {
  if (e.length == 0)
    return t;
  if (t.length == 0)
    return e;
  let n = 0;
  return e.endsWith("/") && n++, t.startsWith("/") && n++, n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + "/" + t;
}
function hE(e) {
  const t = e.match(/#|\?|$/), n = t && t.index || e.length, r = n - (e[n - 1] === "/" ? 1 : 0);
  return e.slice(0, r) + e.slice(n);
}
function bn(e) {
  return e && e[0] !== "?" ? "?" + e : e;
}
const is = class is {
  historyGo(t) {
    throw new Error(ngDevMode ? "Not implemented" : "");
  }
};
is.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: is, deps: [], target: B.Injectable }), is.ɵprov = St({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: is, providedIn: "root", useFactory: () => I(hc) });
let ir = is;
z({ type: ir, decorators: [{
  type: Ee,
  args: [{ providedIn: "root", useFactory: () => I(hc) }]
}] });
const Xd = new F(ngDevMode ? "appBaseHref" : ""), as = class as extends ir {
  constructor(t, n) {
    var r;
    super(), this._platformLocation = t, this._removeListenerFns = [], this._baseHref = n ?? this._platformLocation.getBaseHrefFromDOM() ?? ((r = I(Xi).location) == null ? void 0 : r.origin) ?? "";
  }
  /** @nodoc */
  ngOnDestroy() {
    for (; this._removeListenerFns.length; )
      this._removeListenerFns.pop()();
  }
  onPopState(t) {
    this._removeListenerFns.push(this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t));
  }
  getBaseHref() {
    return this._baseHref;
  }
  prepareExternalUrl(t) {
    return Wy(this._baseHref, t);
  }
  path(t = !1) {
    const n = this._platformLocation.pathname + bn(this._platformLocation.search), r = this._platformLocation.hash;
    return r && t ? `${n}${r}` : n;
  }
  pushState(t, n, r, o) {
    const s = this.prepareExternalUrl(r + bn(o));
    this._platformLocation.pushState(t, n, s);
  }
  replaceState(t, n, r, o) {
    const s = this.prepareExternalUrl(r + bn(o));
    this._platformLocation.replaceState(t, n, s);
  }
  forward() {
    this._platformLocation.forward();
  }
  back() {
    this._platformLocation.back();
  }
  getState() {
    return this._platformLocation.getState();
  }
  historyGo(t = 0) {
    var n, r;
    (r = (n = this._platformLocation).historyGo) == null || r.call(n, t);
  }
};
as.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: as, deps: [{ token: sr }, { token: Xd, optional: !0 }], target: B.Injectable }), as.ɵprov = St({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: as, providedIn: "root" });
let hc = as;
z({ type: hc, decorators: [{
  type: Ee,
  args: [{ providedIn: "root" }]
}], ctorParameters: () => [{ type: sr }, { type: void 0, decorators: [{
  type: Ot
}, {
  type: Et,
  args: [Xd]
}] }] });
const cs = class cs extends ir {
  constructor(t, n) {
    super(), this._platformLocation = t, this._baseHref = "", this._removeListenerFns = [], n != null && (this._baseHref = n);
  }
  /** @nodoc */
  ngOnDestroy() {
    for (; this._removeListenerFns.length; )
      this._removeListenerFns.pop()();
  }
  onPopState(t) {
    this._removeListenerFns.push(this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t));
  }
  getBaseHref() {
    return this._baseHref;
  }
  path(t = !1) {
    const n = this._platformLocation.hash ?? "#";
    return n.length > 0 ? n.substring(1) : n;
  }
  prepareExternalUrl(t) {
    const n = Wy(this._baseHref, t);
    return n.length > 0 ? "#" + n : n;
  }
  pushState(t, n, r, o) {
    let s = this.prepareExternalUrl(r + bn(o));
    s.length == 0 && (s = this._platformLocation.pathname), this._platformLocation.pushState(t, n, s);
  }
  replaceState(t, n, r, o) {
    let s = this.prepareExternalUrl(r + bn(o));
    s.length == 0 && (s = this._platformLocation.pathname), this._platformLocation.replaceState(t, n, s);
  }
  forward() {
    this._platformLocation.forward();
  }
  back() {
    this._platformLocation.back();
  }
  getState() {
    return this._platformLocation.getState();
  }
  historyGo(t = 0) {
    var n, r;
    (r = (n = this._platformLocation).historyGo) == null || r.call(n, t);
  }
};
cs.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: cs, deps: [{ token: sr }, { token: Xd, optional: !0 }], target: B.Injectable }), cs.ɵprov = St({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: cs });
let yp = cs;
z({ type: yp, decorators: [{
  type: Ee
}], ctorParameters: () => [{ type: sr }, { type: void 0, decorators: [{
  type: Ot
}, {
  type: Et,
  args: [Xd]
}] }] });
const en = class en {
  constructor(t) {
    this._subject = new ne(), this._urlChangeListeners = [], this._urlChangeSubscription = null, this._locationStrategy = t;
    const n = this._locationStrategy.getBaseHref();
    this._basePath = F$(hE(pE(n))), this._locationStrategy.onPopState((r) => {
      this._subject.emit({
        url: this.path(!0),
        pop: !0,
        state: r.state,
        type: r.type
      });
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    var t;
    (t = this._urlChangeSubscription) == null || t.unsubscribe(), this._urlChangeListeners = [];
  }
  /**
   * Normalizes the URL path for this location.
   *
   * @param includeHash True to include an anchor fragment in the path.
   *
   * @returns The normalized URL path.
   */
  // TODO: vsavkin. Remove the boolean flag and always include hash once the deprecated router is
  // removed.
  path(t = !1) {
    return this.normalize(this._locationStrategy.path(t));
  }
  /**
   * Reports the current state of the location history.
   * @returns The current value of the `history.state` object.
   */
  getState() {
    return this._locationStrategy.getState();
  }
  /**
   * Normalizes the given path and compares to the current normalized path.
   *
   * @param path The given URL path.
   * @param query Query parameters.
   *
   * @returns True if the given URL path is equal to the current normalized path, false
   * otherwise.
   */
  isCurrentPathEqualTo(t, n = "") {
    return this.path() == this.normalize(t + bn(n));
  }
  /**
   * Normalizes a URL path by stripping any trailing slashes.
   *
   * @param url String representing a URL.
   *
   * @returns The normalized URL string.
   */
  normalize(t) {
    return en.stripTrailingSlash(R$(this._basePath, pE(t)));
  }
  /**
   * Normalizes an external URL path.
   * If the given URL doesn't begin with a leading slash (`'/'`), adds one
   * before normalizing. Adds a hash if `HashLocationStrategy` is
   * in use, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
   *
   * @param url String representing a URL.
   *
   * @returns  A normalized platform-specific URL.
   */
  prepareExternalUrl(t) {
    return t && t[0] !== "/" && (t = "/" + t), this._locationStrategy.prepareExternalUrl(t);
  }
  // TODO: rename this method to pushState
  /**
   * Changes the browser's URL to a normalized version of a given URL, and pushes a
   * new item onto the platform's history.
   *
   * @param path  URL path to normalize.
   * @param query Query parameters.
   * @param state Location history state.
   *
   */
  go(t, n = "", r = null) {
    this._locationStrategy.pushState(r, "", t, n), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + bn(n)), r);
  }
  /**
   * Changes the browser's URL to a normalized version of the given URL, and replaces
   * the top item on the platform's history stack.
   *
   * @param path  URL path to normalize.
   * @param query Query parameters.
   * @param state Location history state.
   */
  replaceState(t, n = "", r = null) {
    this._locationStrategy.replaceState(r, "", t, n), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + bn(n)), r);
  }
  /**
   * Navigates forward in the platform's history.
   */
  forward() {
    this._locationStrategy.forward();
  }
  /**
   * Navigates back in the platform's history.
   */
  back() {
    this._locationStrategy.back();
  }
  /**
   * Navigate to a specific page from session history, identified by its relative position to the
   * current page.
   *
   * @param relativePosition  Position of the target page in the history relative to the current
   *     page.
   * A negative value moves backwards, a positive value moves forwards, e.g. `location.historyGo(2)`
   * moves forward two pages and `location.historyGo(-2)` moves back two pages. When we try to go
   * beyond what's stored in the history session, we stay in the current page. Same behaviour occurs
   * when `relativePosition` equals 0.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/History_API#Moving_to_a_specific_point_in_history
   */
  historyGo(t = 0) {
    var n, r;
    (r = (n = this._locationStrategy).historyGo) == null || r.call(n, t);
  }
  /**
   * Registers a URL change listener. Use to catch updates performed by the Angular
   * framework that are not detectible through "popstate" or "hashchange" events.
   *
   * @param fn The change handler function, which take a URL and a location history state.
   * @returns A function that, when executed, unregisters a URL change listener.
   */
  onUrlChange(t) {
    return this._urlChangeListeners.push(t), this._urlChangeSubscription ?? (this._urlChangeSubscription = this.subscribe((n) => {
      this._notifyUrlChangeListeners(n.url, n.state);
    })), () => {
      var r;
      const n = this._urlChangeListeners.indexOf(t);
      this._urlChangeListeners.splice(n, 1), this._urlChangeListeners.length === 0 && ((r = this._urlChangeSubscription) == null || r.unsubscribe(), this._urlChangeSubscription = null);
    };
  }
  /** @internal */
  _notifyUrlChangeListeners(t = "", n) {
    this._urlChangeListeners.forEach((r) => r(t, n));
  }
  /**
   * Subscribes to the platform's `popState` events.
   *
   * Note: `Location.go()` does not trigger the `popState` event in the browser. Use
   * `Location.onUrlChange()` to subscribe to URL changes instead.
   *
   * @param value Event that is triggered when the state history changes.
   * @param exception The exception to throw.
   *
   * @see [onpopstate](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate)
   *
   * @returns Subscribed events.
   */
  subscribe(t, n, r) {
    return this._subject.subscribe({ next: t, error: n, complete: r });
  }
};
en.normalizeQueryParams = bn, en.joinWithSlash = Wy, en.stripTrailingSlash = hE, en.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: en, deps: [{ token: ir }], target: B.Injectable }), en.ɵprov = St({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: en, providedIn: "root", useFactory: CT });
let Sl = en;
z({ type: Sl, decorators: [{
  type: Ee,
  args: [{
    providedIn: "root",
    // See #23917
    useFactory: CT
  }]
}], ctorParameters: () => [{ type: ir }] });
function CT() {
  return new Sl(He(ir));
}
function R$(e, t) {
  if (!e || !t.startsWith(e))
    return t;
  const n = t.substring(e.length);
  return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t;
}
function pE(e) {
  return e.replace(/\/index.html$/, "");
}
function F$(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    const [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
const IT = { ADP: [void 0, void 0, 0], AFN: [void 0, "؋", 0], ALL: [void 0, void 0, 0], AMD: [void 0, "֏", 2], AOA: [void 0, "Kz"], ARS: [void 0, "$"], AUD: ["A$", "$"], AZN: [void 0, "₼"], BAM: [void 0, "KM"], BBD: [void 0, "$"], BDT: [void 0, "৳"], BHD: [void 0, void 0, 3], BIF: [void 0, void 0, 0], BMD: [void 0, "$"], BND: [void 0, "$"], BOB: [void 0, "Bs"], BRL: ["R$"], BSD: [void 0, "$"], BWP: [void 0, "P"], BYN: [void 0, void 0, 2], BYR: [void 0, void 0, 0], BZD: [void 0, "$"], CAD: ["CA$", "$", 2], CHF: [void 0, void 0, 2], CLF: [void 0, void 0, 4], CLP: [void 0, "$", 0], CNY: ["CN¥", "¥"], COP: [void 0, "$", 2], CRC: [void 0, "₡", 2], CUC: [void 0, "$"], CUP: [void 0, "$"], CZK: [void 0, "Kč", 2], DJF: [void 0, void 0, 0], DKK: [void 0, "kr", 2], DOP: [void 0, "$"], EGP: [void 0, "E£"], ESP: [void 0, "₧", 0], EUR: ["€"], FJD: [void 0, "$"], FKP: [void 0, "£"], GBP: ["£"], GEL: [void 0, "₾"], GHS: [void 0, "GH₵"], GIP: [void 0, "£"], GNF: [void 0, "FG", 0], GTQ: [void 0, "Q"], GYD: [void 0, "$", 2], HKD: ["HK$", "$"], HNL: [void 0, "L"], HRK: [void 0, "kn"], HUF: [void 0, "Ft", 2], IDR: [void 0, "Rp", 2], ILS: ["₪"], INR: ["₹"], IQD: [void 0, void 0, 0], IRR: [void 0, void 0, 0], ISK: [void 0, "kr", 0], ITL: [void 0, void 0, 0], JMD: [void 0, "$"], JOD: [void 0, void 0, 3], JPY: ["¥", void 0, 0], KHR: [void 0, "៛"], KMF: [void 0, "CF", 0], KPW: [void 0, "₩", 0], KRW: ["₩", void 0, 0], KWD: [void 0, void 0, 3], KYD: [void 0, "$"], KZT: [void 0, "₸"], LAK: [void 0, "₭", 0], LBP: [void 0, "L£", 0], LKR: [void 0, "Rs"], LRD: [void 0, "$"], LTL: [void 0, "Lt"], LUF: [void 0, void 0, 0], LVL: [void 0, "Ls"], LYD: [void 0, void 0, 3], MGA: [void 0, "Ar", 0], MGF: [void 0, void 0, 0], MMK: [void 0, "K", 0], MNT: [void 0, "₮", 2], MRO: [void 0, void 0, 0], MUR: [void 0, "Rs", 2], MXN: ["MX$", "$"], MYR: [void 0, "RM"], NAD: [void 0, "$"], NGN: [void 0, "₦"], NIO: [void 0, "C$"], NOK: [void 0, "kr", 2], NPR: [void 0, "Rs"], NZD: ["NZ$", "$"], OMR: [void 0, void 0, 3], PHP: ["₱"], PKR: [void 0, "Rs", 2], PLN: [void 0, "zł"], PYG: [void 0, "₲", 0], RON: [void 0, "lei"], RSD: [void 0, void 0, 0], RUB: [void 0, "₽"], RWF: [void 0, "RF", 0], SBD: [void 0, "$"], SEK: [void 0, "kr", 2], SGD: [void 0, "$"], SHP: [void 0, "£"], SLE: [void 0, void 0, 2], SLL: [void 0, void 0, 0], SOS: [void 0, void 0, 0], SRD: [void 0, "$"], SSP: [void 0, "£"], STD: [void 0, void 0, 0], STN: [void 0, "Db"], SYP: [void 0, "£", 0], THB: [void 0, "฿"], TMM: [void 0, void 0, 0], TND: [void 0, void 0, 3], TOP: [void 0, "T$"], TRL: [void 0, void 0, 0], TRY: [void 0, "₺"], TTD: [void 0, "$"], TWD: ["NT$", "$", 2], TZS: [void 0, void 0, 2], UAH: [void 0, "₴"], UGX: [void 0, void 0, 0], USD: ["$"], UYI: [void 0, void 0, 0], UYU: [void 0, "$"], UYW: [void 0, void 0, 4], UZS: [void 0, void 0, 2], VEF: [void 0, "Bs", 2], VND: ["₫", void 0, 0], VUV: [void 0, void 0, 0], XAF: ["FCFA", void 0, 0], XCD: ["EC$", "$"], XOF: ["F CFA", void 0, 0], XPF: ["CFPF", void 0, 0], XXX: ["¤"], YER: [void 0, void 0, 0], ZAR: [void 0, "R"], ZMK: [void 0, void 0, 0], ZMW: [void 0, "ZK"], ZWD: [void 0, void 0, 0] };
var pc;
(function(e) {
  e[e.Decimal = 0] = "Decimal", e[e.Percent = 1] = "Percent", e[e.Currency = 2] = "Currency", e[e.Scientific = 3] = "Scientific";
})(pc || (pc = {}));
var Sr;
(function(e) {
  e[e.Zero = 0] = "Zero", e[e.One = 1] = "One", e[e.Two = 2] = "Two", e[e.Few = 3] = "Few", e[e.Many = 4] = "Many", e[e.Other = 5] = "Other";
})(Sr || (Sr = {}));
var Ze;
(function(e) {
  e[e.Format = 0] = "Format", e[e.Standalone = 1] = "Standalone";
})(Ze || (Ze = {}));
var ue;
(function(e) {
  e[e.Narrow = 0] = "Narrow", e[e.Abbreviated = 1] = "Abbreviated", e[e.Wide = 2] = "Wide", e[e.Short = 3] = "Short";
})(ue || (ue = {}));
var ct;
(function(e) {
  e[e.Short = 0] = "Short", e[e.Medium = 1] = "Medium", e[e.Long = 2] = "Long", e[e.Full = 3] = "Full";
})(ct || (ct = {}));
const xe = {
  /**
   * Decimal separator.
   * For `en-US`, the dot character.
   * Example: 2,345`.`67
   */
  Decimal: 0,
  /**
   * Grouping separator, typically for thousands.
   * For `en-US`, the comma character.
   * Example: 2`,`345.67
   */
  Group: 1,
  /**
   * Sign for percentage (out of 100).
   * Example: 23.4%
   */
  PercentSign: 3,
  /**
   * Sign for negative numbers.
   * Example: -23
   */
  MinusSign: 5,
  /**
   * Computer notation for exponential value (n times a power of 10).
   * Example: 1.2E3
   */
  Exponential: 6,
  /**
   * Infinity, can be used with plus and minus.
   * Example: ∞, +∞, -∞
   */
  Infinity: 9,
  /**
   * Decimal separator for currency values (fallback to `Decimal`).
   * Example: $2,345.67
   */
  CurrencyDecimal: 12,
  /**
   * Group separator for currency values (fallback to `Group`).
   * Example: $2,345.67
   */
  CurrencyGroup: 13
};
var gE;
(function(e) {
  e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday";
})(gE || (gE = {}));
function k$(e) {
  return Ke(e)[le.LocaleId];
}
function L$(e, t, n) {
  const r = Ke(e), o = [
    r[le.DayPeriodsFormat],
    r[le.DayPeriodsStandalone]
  ], s = kt(o, t);
  return kt(s, n);
}
function j$(e, t, n) {
  const r = Ke(e), o = [
    r[le.DaysFormat],
    r[le.DaysStandalone]
  ], s = kt(o, t);
  return kt(s, n);
}
function $$(e, t, n) {
  const r = Ke(e), o = [
    r[le.MonthsFormat],
    r[le.MonthsStandalone]
  ], s = kt(o, t);
  return kt(s, n);
}
function B$(e, t) {
  const r = Ke(e)[le.Eras];
  return kt(r, t);
}
function vu(e, t) {
  const n = Ke(e);
  return kt(n[le.DateFormat], t);
}
function Du(e, t) {
  const n = Ke(e);
  return kt(n[le.TimeFormat], t);
}
function Eu(e, t) {
  const r = Ke(e)[le.DateTimeFormat];
  return kt(r, t);
}
function Tt(e, t) {
  const n = Ke(e), r = n[le.NumberSymbols][t];
  if (typeof r > "u") {
    if (t === xe.CurrencyDecimal)
      return n[le.NumberSymbols][xe.Decimal];
    if (t === xe.CurrencyGroup)
      return n[le.NumberSymbols][xe.Group];
  }
  return r;
}
function Zy(e, t) {
  return Ke(e)[le.NumberFormats][t];
}
function H$(e) {
  return Ke(e)[le.Currencies];
}
const U$ = qm;
function bT(e) {
  if (!e[le.ExtraData])
    throw new Error(`Missing extra locale data for the locale "${e[le.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`);
}
function V$(e) {
  const t = Ke(e);
  return bT(t), (t[le.ExtraData][
    2
    /* ɵExtraLocaleDataIndex.ExtraDayPeriodsRules */
  ] || []).map((r) => typeof r == "string" ? $f(r) : [$f(r[0]), $f(r[1])]);
}
function z$(e, t, n) {
  const r = Ke(e);
  bT(r);
  const o = [
    r[le.ExtraData][
      0
      /* ɵExtraLocaleDataIndex.ExtraDayPeriodFormats */
    ],
    r[le.ExtraData][
      1
      /* ɵExtraLocaleDataIndex.ExtraDayPeriodStandalone */
    ]
  ], s = kt(o, t) || [];
  return kt(s, n) || [];
}
function kt(e, t) {
  for (let n = t; n > -1; n--)
    if (typeof e[n] < "u")
      return e[n];
  throw new Error("Locale data API: locale data undefined");
}
function $f(e) {
  const [t, n] = e.split(":");
  return { hours: +t, minutes: +n };
}
function G$(e, t, n = "en") {
  const r = H$(n)[e] || IT[e] || [], o = r[
    1
    /* ɵCurrencyIndex.SymbolNarrow */
  ];
  return t === "narrow" && typeof o == "string" ? o : r[
    0
    /* ɵCurrencyIndex.Symbol */
  ] || e;
}
const W$ = 2;
function Z$(e) {
  let t;
  const n = IT[e];
  return n && (t = n[
    2
    /* ɵCurrencyIndex.NbOfDigits */
  ]), typeof t == "number" ? t : W$;
}
const q$ = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/, Go = {}, Q$ = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
var sn;
(function(e) {
  e[e.Short = 0] = "Short", e[e.ShortGMT = 1] = "ShortGMT", e[e.Long = 2] = "Long", e[e.Extended = 3] = "Extended";
})(sn || (sn = {}));
var te;
(function(e) {
  e[e.FullYear = 0] = "FullYear", e[e.Month = 1] = "Month", e[e.Date = 2] = "Date", e[e.Hours = 3] = "Hours", e[e.Minutes = 4] = "Minutes", e[e.Seconds = 5] = "Seconds", e[e.FractionalSeconds = 6] = "FractionalSeconds", e[e.Day = 7] = "Day";
})(te || (te = {}));
var ee;
(function(e) {
  e[e.DayPeriods = 0] = "DayPeriods", e[e.Days = 1] = "Days", e[e.Months = 2] = "Months", e[e.Eras = 3] = "Eras";
})(ee || (ee = {}));
function Y$(e, t, n, r) {
  let o = sB(e);
  t = En(n, t) || t;
  let i = [], a;
  for (; t; )
    if (a = Q$.exec(t), a) {
      i = i.concat(a.slice(1));
      const l = i.pop();
      if (!l)
        break;
      t = l;
    } else {
      i.push(t);
      break;
    }
  let c = o.getTimezoneOffset();
  r && (c = _T(r, c), o = oB(o, r));
  let u = "";
  return i.forEach((l) => {
    const d = nB(l);
    u += d ? d(o, n, c) : l === "''" ? "'" : l.replace(/(^'|'$)/g, "").replace(/''/g, "'");
  }), u;
}
function Tl(e, t, n) {
  const r = /* @__PURE__ */ new Date(0);
  return r.setFullYear(e, t, n), r.setHours(0, 0, 0), r;
}
function En(e, t) {
  const n = k$(e);
  if (Go[n] ?? (Go[n] = {}), Go[n][t])
    return Go[n][t];
  let r = "";
  switch (t) {
    case "shortDate":
      r = vu(e, ct.Short);
      break;
    case "mediumDate":
      r = vu(e, ct.Medium);
      break;
    case "longDate":
      r = vu(e, ct.Long);
      break;
    case "fullDate":
      r = vu(e, ct.Full);
      break;
    case "shortTime":
      r = Du(e, ct.Short);
      break;
    case "mediumTime":
      r = Du(e, ct.Medium);
      break;
    case "longTime":
      r = Du(e, ct.Long);
      break;
    case "fullTime":
      r = Du(e, ct.Full);
      break;
    case "short":
      const o = En(e, "shortTime"), s = En(e, "shortDate");
      r = Cu(Eu(e, ct.Short), [
        o,
        s
      ]);
      break;
    case "medium":
      const i = En(e, "mediumTime"), a = En(e, "mediumDate");
      r = Cu(Eu(e, ct.Medium), [
        i,
        a
      ]);
      break;
    case "long":
      const c = En(e, "longTime"), u = En(e, "longDate");
      r = Cu(Eu(e, ct.Long), [
        c,
        u
      ]);
      break;
    case "full":
      const l = En(e, "fullTime"), d = En(e, "fullDate");
      r = Cu(Eu(e, ct.Full), [
        l,
        d
      ]);
      break;
  }
  return r && (Go[n][t] = r), r;
}
function Cu(e, t) {
  return t && (e = e.replace(/\{([^}]+)}/g, function(n, r) {
    return t != null && r in t ? t[r] : n;
  })), e;
}
function Ht(e, t, n = "-", r, o) {
  let s = "";
  (e < 0 || o && e <= 0) && (o ? e = -e + 1 : (e = -e, s = n));
  let i = String(e);
  for (; i.length < t; )
    i = "0" + i;
  return r && (i = i.slice(i.length - t)), s + i;
}
function K$(e, t) {
  return Ht(e, 3).substring(0, t);
}
function Pe(e, t, n = 0, r = !1, o = !1) {
  return function(s, i) {
    let a = J$(e, s);
    if ((n > 0 || a > -n) && (a += n), e === te.Hours)
      a === 0 && n === -12 && (a = 12);
    else if (e === te.FractionalSeconds)
      return K$(a, t);
    const c = Tt(i, xe.MinusSign);
    return Ht(a, t, c, r, o);
  };
}
function J$(e, t) {
  switch (e) {
    case te.FullYear:
      return t.getFullYear();
    case te.Month:
      return t.getMonth();
    case te.Date:
      return t.getDate();
    case te.Hours:
      return t.getHours();
    case te.Minutes:
      return t.getMinutes();
    case te.Seconds:
      return t.getSeconds();
    case te.FractionalSeconds:
      return t.getMilliseconds();
    case te.Day:
      return t.getDay();
    default:
      throw new Error(`Unknown DateType value "${e}".`);
  }
}
function pe(e, t, n = Ze.Format, r = !1) {
  return function(o, s) {
    return X$(o, s, e, t, n, r);
  };
}
function X$(e, t, n, r, o, s) {
  switch (n) {
    case ee.Months:
      return $$(t, o, r)[e.getMonth()];
    case ee.Days:
      return j$(t, o, r)[e.getDay()];
    case ee.DayPeriods:
      const i = e.getHours(), a = e.getMinutes();
      if (s) {
        const u = V$(t), l = z$(t, o, r), d = u.findIndex((f) => {
          if (Array.isArray(f)) {
            const [h, p] = f, g = i >= h.hours && a >= h.minutes, D = i < p.hours || i === p.hours && a < p.minutes;
            if (h.hours < p.hours) {
              if (g && D)
                return !0;
            } else if (g || D)
              return !0;
          } else if (f.hours === i && f.minutes === a)
            return !0;
          return !1;
        });
        if (d !== -1)
          return l[d];
      }
      return L$(t, o, r)[i < 12 ? 0 : 1];
    case ee.Eras:
      return B$(t, r)[e.getFullYear() <= 0 ? 0 : 1];
    default:
      const c = n;
      throw new Error(`unexpected translation type ${c}`);
  }
}
function Iu(e) {
  return function(t, n, r) {
    const o = -1 * r, s = Tt(n, xe.MinusSign), i = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
    switch (e) {
      case sn.Short:
        return (o >= 0 ? "+" : "") + Ht(i, 2, s) + Ht(Math.abs(o % 60), 2, s);
      case sn.ShortGMT:
        return "GMT" + (o >= 0 ? "+" : "") + Ht(i, 1, s);
      case sn.Long:
        return "GMT" + (o >= 0 ? "+" : "") + Ht(i, 2, s) + ":" + Ht(Math.abs(o % 60), 2, s);
      case sn.Extended:
        return r === 0 ? "Z" : (o >= 0 ? "+" : "") + Ht(i, 2, s) + ":" + Ht(Math.abs(o % 60), 2, s);
      default:
        throw new Error(`Unknown zone width "${e}"`);
    }
  };
}
const eB = 0, Bu = 4;
function tB(e) {
  const t = Tl(e, eB, 1).getDay();
  return Tl(e, 0, 1 + (t <= Bu ? Bu : Bu + 7) - t);
}
function wT(e) {
  const t = e.getDay(), n = t === 0 ? -3 : Bu - t;
  return Tl(e.getFullYear(), e.getMonth(), e.getDate() + n);
}
function Bf(e, t = !1) {
  return function(n, r) {
    let o;
    if (t) {
      const s = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1, i = n.getDate();
      o = 1 + Math.floor((i + s) / 7);
    } else {
      const s = wT(n), i = tB(s.getFullYear()), a = s.getTime() - i.getTime();
      o = 1 + Math.round(a / 6048e5);
    }
    return Ht(o, e, Tt(r, xe.MinusSign));
  };
}
function bu(e, t = !1) {
  return function(n, r) {
    const s = wT(n).getFullYear();
    return Ht(s, e, Tt(r, xe.MinusSign), t);
  };
}
const Hf = {};
function nB(e) {
  if (Hf[e])
    return Hf[e];
  let t;
  switch (e) {
    case "G":
    case "GG":
    case "GGG":
      t = pe(ee.Eras, ue.Abbreviated);
      break;
    case "GGGG":
      t = pe(ee.Eras, ue.Wide);
      break;
    case "GGGGG":
      t = pe(ee.Eras, ue.Narrow);
      break;
    case "y":
      t = Pe(te.FullYear, 1, 0, !1, !0);
      break;
    case "yy":
      t = Pe(te.FullYear, 2, 0, !0, !0);
      break;
    case "yyy":
      t = Pe(te.FullYear, 3, 0, !1, !0);
      break;
    case "yyyy":
      t = Pe(te.FullYear, 4, 0, !1, !0);
      break;
    case "Y":
      t = bu(1);
      break;
    case "YY":
      t = bu(2, !0);
      break;
    case "YYY":
      t = bu(3);
      break;
    case "YYYY":
      t = bu(4);
      break;
    case "M":
    case "L":
      t = Pe(te.Month, 1, 1);
      break;
    case "MM":
    case "LL":
      t = Pe(te.Month, 2, 1);
      break;
    case "MMM":
      t = pe(ee.Months, ue.Abbreviated);
      break;
    case "MMMM":
      t = pe(ee.Months, ue.Wide);
      break;
    case "MMMMM":
      t = pe(ee.Months, ue.Narrow);
      break;
    case "LLL":
      t = pe(ee.Months, ue.Abbreviated, Ze.Standalone);
      break;
    case "LLLL":
      t = pe(ee.Months, ue.Wide, Ze.Standalone);
      break;
    case "LLLLL":
      t = pe(ee.Months, ue.Narrow, Ze.Standalone);
      break;
    case "w":
      t = Bf(1);
      break;
    case "ww":
      t = Bf(2);
      break;
    case "W":
      t = Bf(1, !0);
      break;
    case "d":
      t = Pe(te.Date, 1);
      break;
    case "dd":
      t = Pe(te.Date, 2);
      break;
    case "c":
    case "cc":
      t = Pe(te.Day, 1);
      break;
    case "ccc":
      t = pe(ee.Days, ue.Abbreviated, Ze.Standalone);
      break;
    case "cccc":
      t = pe(ee.Days, ue.Wide, Ze.Standalone);
      break;
    case "ccccc":
      t = pe(ee.Days, ue.Narrow, Ze.Standalone);
      break;
    case "cccccc":
      t = pe(ee.Days, ue.Short, Ze.Standalone);
      break;
    case "E":
    case "EE":
    case "EEE":
      t = pe(ee.Days, ue.Abbreviated);
      break;
    case "EEEE":
      t = pe(ee.Days, ue.Wide);
      break;
    case "EEEEE":
      t = pe(ee.Days, ue.Narrow);
      break;
    case "EEEEEE":
      t = pe(ee.Days, ue.Short);
      break;
    case "a":
    case "aa":
    case "aaa":
      t = pe(ee.DayPeriods, ue.Abbreviated);
      break;
    case "aaaa":
      t = pe(ee.DayPeriods, ue.Wide);
      break;
    case "aaaaa":
      t = pe(ee.DayPeriods, ue.Narrow);
      break;
    case "b":
    case "bb":
    case "bbb":
      t = pe(ee.DayPeriods, ue.Abbreviated, Ze.Standalone, !0);
      break;
    case "bbbb":
      t = pe(ee.DayPeriods, ue.Wide, Ze.Standalone, !0);
      break;
    case "bbbbb":
      t = pe(ee.DayPeriods, ue.Narrow, Ze.Standalone, !0);
      break;
    case "B":
    case "BB":
    case "BBB":
      t = pe(ee.DayPeriods, ue.Abbreviated, Ze.Format, !0);
      break;
    case "BBBB":
      t = pe(ee.DayPeriods, ue.Wide, Ze.Format, !0);
      break;
    case "BBBBB":
      t = pe(ee.DayPeriods, ue.Narrow, Ze.Format, !0);
      break;
    case "h":
      t = Pe(te.Hours, 1, -12);
      break;
    case "hh":
      t = Pe(te.Hours, 2, -12);
      break;
    case "H":
      t = Pe(te.Hours, 1);
      break;
    case "HH":
      t = Pe(te.Hours, 2);
      break;
    case "m":
      t = Pe(te.Minutes, 1);
      break;
    case "mm":
      t = Pe(te.Minutes, 2);
      break;
    case "s":
      t = Pe(te.Seconds, 1);
      break;
    case "ss":
      t = Pe(te.Seconds, 2);
      break;
    case "S":
      t = Pe(te.FractionalSeconds, 1);
      break;
    case "SS":
      t = Pe(te.FractionalSeconds, 2);
      break;
    case "SSS":
      t = Pe(te.FractionalSeconds, 3);
      break;
    case "Z":
    case "ZZ":
    case "ZZZ":
      t = Iu(sn.Short);
      break;
    case "ZZZZZ":
      t = Iu(sn.Extended);
      break;
    case "O":
    case "OO":
    case "OOO":
    case "z":
    case "zz":
    case "zzz":
      t = Iu(sn.ShortGMT);
      break;
    case "OOOO":
    case "ZZZZ":
    case "zzzz":
      t = Iu(sn.Long);
      break;
    default:
      return null;
  }
  return Hf[e] = t, t;
}
function _T(e, t) {
  e = e.replace(/:/g, "");
  const n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
  return isNaN(n) ? t : n;
}
function rB(e, t) {
  return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e;
}
function oB(e, t, n) {
  const o = e.getTimezoneOffset(), s = _T(t, o);
  return rB(e, -1 * (s - o));
}
function sB(e) {
  if (mE(e))
    return e;
  if (typeof e == "number" && !isNaN(e))
    return new Date(e);
  if (typeof e == "string") {
    if (e = e.trim(), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)) {
      const [o, s = 1, i = 1] = e.split("-").map((a) => +a);
      return Tl(o, s - 1, i);
    }
    const n = parseFloat(e);
    if (!isNaN(e - n))
      return new Date(n);
    let r;
    if (r = e.match(q$))
      return iB(r);
  }
  const t = new Date(e);
  if (!mE(t))
    throw new Error(`Unable to convert "${e}" into a date`);
  return t;
}
function iB(e) {
  const t = /* @__PURE__ */ new Date(0);
  let n = 0, r = 0;
  const o = e[8] ? t.setUTCFullYear : t.setFullYear, s = e[8] ? t.setUTCHours : t.setHours;
  e[9] && (n = Number(e[9] + e[10]), r = Number(e[9] + e[11])), o.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
  const i = Number(e[4] || 0) - n, a = Number(e[5] || 0) - r, c = Number(e[6] || 0), u = Math.floor(parseFloat("0." + (e[7] || 0)) * 1e3);
  return s.call(t, i, a, c, u), t;
}
function mE(e) {
  return e instanceof Date && !isNaN(e.valueOf());
}
const aB = /^(\d+)?\.((\d+)(-(\d+))?)?$/, yE = 22, Al = ".", _a = "0", cB = ";", uB = ",", Uf = "#", vE = "¤", lB = "%";
function qy(e, t, n, r, o, s, i = !1) {
  let a = "", c = !1;
  if (!isFinite(e))
    a = Tt(n, xe.Infinity);
  else {
    let u = gB(e);
    i && (u = pB(u));
    let l = t.minInt, d = t.minFrac, f = t.maxFrac;
    if (s) {
      const m = s.match(aB);
      if (m === null)
        throw new Error(`${s} is not a valid digit info`);
      const T = m[1], R = m[3], Q = m[5];
      T != null && (l = Vf(T)), R != null && (d = Vf(R)), Q != null ? f = Vf(Q) : R != null && d > f && (f = d);
    }
    mB(u, d, f);
    let h = u.digits, p = u.integerLen;
    const g = u.exponent;
    let D = [];
    for (c = h.every((m) => !m); p < l; p++)
      h.unshift(0);
    for (; p < 0; p++)
      h.unshift(0);
    p > 0 ? D = h.splice(p, h.length) : (D = h, h = [0]);
    const E = [];
    for (h.length >= t.lgSize && E.unshift(h.splice(-t.lgSize, h.length).join("")); h.length > t.gSize; )
      E.unshift(h.splice(-t.gSize, h.length).join(""));
    h.length && E.unshift(h.join("")), a = E.join(Tt(n, r)), D.length && (a += Tt(n, o) + D.join("")), g && (a += Tt(n, xe.Exponential) + "+" + g);
  }
  return e < 0 && !c ? a = t.negPre + a + t.negSuf : a = t.posPre + a + t.posSuf, a;
}
function dB(e, t, n, r, o) {
  const s = Zy(t, pc.Currency), i = Qy(s, Tt(t, xe.MinusSign));
  return i.minFrac = Z$(r), i.maxFrac = i.minFrac, qy(e, i, t, xe.CurrencyGroup, xe.CurrencyDecimal, o).replace(vE, n).replace(vE, "").trim();
}
function fB(e, t, n) {
  const r = Zy(t, pc.Percent), o = Qy(r, Tt(t, xe.MinusSign));
  return qy(e, o, t, xe.Group, xe.Decimal, n, !0).replace(new RegExp(lB, "g"), Tt(t, xe.PercentSign));
}
function hB(e, t, n) {
  const r = Zy(t, pc.Decimal), o = Qy(r, Tt(t, xe.MinusSign));
  return qy(e, o, t, xe.Group, xe.Decimal, n);
}
function Qy(e, t = "-") {
  const n = {
    minInt: 1,
    minFrac: 0,
    maxFrac: 0,
    posPre: "",
    posSuf: "",
    negPre: "",
    negSuf: "",
    gSize: 0,
    lgSize: 0
  }, r = e.split(cB), o = r[0], s = r[1], i = o.indexOf(Al) !== -1 ? o.split(Al) : [
    o.substring(0, o.lastIndexOf(_a) + 1),
    o.substring(o.lastIndexOf(_a) + 1)
  ], a = i[0], c = i[1] || "";
  n.posPre = a.substring(0, a.indexOf(Uf));
  for (let l = 0; l < c.length; l++) {
    const d = c.charAt(l);
    d === _a ? n.minFrac = n.maxFrac = l + 1 : d === Uf ? n.maxFrac = l + 1 : n.posSuf += d;
  }
  const u = a.split(uB);
  if (n.gSize = u[1] ? u[1].length : 0, n.lgSize = u[2] || u[1] ? (u[2] || u[1]).length : 0, s) {
    const l = o.length - n.posPre.length - n.posSuf.length, d = s.indexOf(Uf);
    n.negPre = s.substring(0, d).replace(/'/g, ""), n.negSuf = s.slice(d + l).replace(/'/g, "");
  } else
    n.negPre = t + n.posPre, n.negSuf = n.posSuf;
  return n;
}
function pB(e) {
  if (e.digits[0] === 0)
    return e;
  const t = e.digits.length - e.integerLen;
  return e.exponent ? e.exponent += 2 : (t === 0 ? e.digits.push(0, 0) : t === 1 && e.digits.push(0), e.integerLen += 2), e;
}
function gB(e) {
  let t = Math.abs(e) + "", n = 0, r, o, s, i, a;
  for ((o = t.indexOf(Al)) > -1 && (t = t.replace(Al, "")), (s = t.search(/e/i)) > 0 ? (o < 0 && (o = s), o += +t.slice(s + 1), t = t.substring(0, s)) : o < 0 && (o = t.length), s = 0; t.charAt(s) === _a; s++)
    ;
  if (s === (a = t.length))
    r = [0], o = 1;
  else {
    for (a--; t.charAt(a) === _a; )
      a--;
    for (o -= s, r = [], i = 0; s <= a; s++, i++)
      r[i] = Number(t.charAt(s));
  }
  return o > yE && (r = r.splice(0, yE - 1), n = o - 1, o = 1), { digits: r, exponent: n, integerLen: o };
}
function mB(e, t, n) {
  if (t > n)
    throw new Error(`The minimum number of digits after fraction (${t}) is higher than the maximum (${n}).`);
  let r = e.digits, o = r.length - e.integerLen;
  const s = Math.min(Math.max(t, o), n);
  let i = s + e.integerLen, a = r[i];
  if (i > 0) {
    r.splice(Math.max(e.integerLen, i));
    for (let d = i; d < r.length; d++)
      r[d] = 0;
  } else {
    o = Math.max(0, o), e.integerLen = 1, r.length = Math.max(1, i = s + 1), r[0] = 0;
    for (let d = 1; d < i; d++)
      r[d] = 0;
  }
  if (a >= 5)
    if (i - 1 < 0) {
      for (let d = 0; d > i; d--)
        r.unshift(0), e.integerLen++;
      r.unshift(1), e.integerLen++;
    } else
      r[i - 1]++;
  for (; o < Math.max(0, s); o++)
    r.push(0);
  let c = s !== 0;
  const u = t + e.integerLen, l = r.reduceRight(function(d, f, h, p) {
    return f = f + d, p[h] = f < 10 ? f : f - 10, c && (p[h] === 0 && h >= u ? p.pop() : c = !1), f >= 10 ? 1 : 0;
  }, 0);
  l && (r.unshift(l), e.integerLen++);
}
function Vf(e) {
  const t = parseInt(e);
  if (isNaN(t))
    throw new Error("Invalid integer literal when parsing " + e);
  return t;
}
const us = class us {
};
us.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: us, deps: [], target: B.Injectable }), us.ɵprov = St({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: us, providedIn: "root", useFactory: (t) => new gc(t), deps: [{ token: at }] });
let ar = us;
z({ type: ar, decorators: [{
  type: Ee,
  args: [{
    providedIn: "root",
    useFactory: (e) => new gc(e),
    deps: [at]
  }]
}] });
function MT(e, t, n, r) {
  let o = `=${e}`;
  if (t.indexOf(o) > -1 || (o = n.getPluralCategory(e, r), t.indexOf(o) > -1))
    return o;
  if (t.indexOf("other") > -1)
    return "other";
  throw new Error(`No plural message found for value "${e}"`);
}
const ls = class ls extends ar {
  constructor(t) {
    super(), this.locale = t;
  }
  getPluralCategory(t, n) {
    switch (U$(n || this.locale)(t)) {
      case Sr.Zero:
        return "zero";
      case Sr.One:
        return "one";
      case Sr.Two:
        return "two";
      case Sr.Few:
        return "few";
      case Sr.Many:
        return "many";
      default:
        return "other";
    }
  }
};
ls.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: ls, deps: [{ token: at }], target: B.Injectable }), ls.ɵprov = St({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: ls });
let gc = ls;
z({ type: gc, decorators: [{
  type: Ee
}], ctorParameters: () => [{ type: void 0, decorators: [{
  type: Et,
  args: [at]
}] }] });
const zf = /\s+/, DE = [], ds = class ds {
  constructor(t, n) {
    this._ngEl = t, this._renderer = n, this.initialClasses = DE, this.stateMap = /* @__PURE__ */ new Map();
  }
  set klass(t) {
    this.initialClasses = t != null ? t.trim().split(zf) : DE;
  }
  set ngClass(t) {
    this.rawClass = typeof t == "string" ? t.trim().split(zf) : t;
  }
  /*
    The NgClass directive uses the custom change detection algorithm for its inputs. The custom
    algorithm is necessary since inputs are represented as complex object or arrays that need to be
    deeply-compared.
  
    This algorithm is perf-sensitive since NgClass is used very frequently and its poor performance
    might negatively impact runtime performance of the entire change detection cycle. The design of
    this algorithm is making sure that:
    - there is no unnecessary DOM manipulation (CSS classes are added / removed from the DOM only when
    needed), even if references to bound objects change;
    - there is no memory allocation if nothing changes (even relatively modest memory allocation
    during the change detection cycle can result in GC pauses for some of the CD cycles).
  
    The algorithm works by iterating over the set of bound classes, staring with [class] binding and
    then going over [ngClass] binding. For each CSS class name:
    - check if it was seen before (this information is tracked in the state map) and if its value
    changed;
    - mark it as "touched" - names that are not marked are not present in the latest set of binding
    and we can remove such class name from the internal data structures;
  
    After iteration over all the CSS class names we've got data structure with all the information
    necessary to synchronize changes to the DOM - it is enough to iterate over the state map, flush
    changes to the DOM and reset internal data structures so those are ready for the next change
    detection cycle.
     */
  ngDoCheck() {
    for (const n of this.initialClasses)
      this._updateState(n, !0);
    const t = this.rawClass;
    if (Array.isArray(t) || t instanceof Set)
      for (const n of t)
        this._updateState(n, !0);
    else if (t != null)
      for (const n of Object.keys(t))
        this._updateState(n, !!t[n]);
    this._applyStateDiff();
  }
  _updateState(t, n) {
    const r = this.stateMap.get(t);
    r !== void 0 ? (r.enabled !== n && (r.changed = !0, r.enabled = n), r.touched = !0) : this.stateMap.set(t, { enabled: n, changed: !0, touched: !0 });
  }
  _applyStateDiff() {
    for (const t of this.stateMap) {
      const n = t[0], r = t[1];
      r.changed ? (this._toggleClass(n, r.enabled), r.changed = !1) : r.touched || (r.enabled && this._toggleClass(n, !1), this.stateMap.delete(n)), r.touched = !1;
    }
  }
  _toggleClass(t, n) {
    if (ngDevMode && typeof t != "string")
      throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${J(t)}`);
    t = t.trim(), t.length > 0 && t.split(zf).forEach((r) => {
      n ? this._renderer.addClass(this._ngEl.nativeElement, r) : this._renderer.removeClass(this._ngEl.nativeElement, r);
    });
  }
};
ds.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: ds, deps: [{ token: Rt }, { token: er }], target: B.Directive }), ds.ɵdir = Mt({ minVersion: "14.0.0", version: "18.2.14", type: ds, isStandalone: !0, selector: "[ngClass]", inputs: { klass: ["class", "klass"], ngClass: "ngClass" }, ngImport: w });
let Ks = ds;
z({ type: Ks, decorators: [{
  type: Je,
  args: [{
    selector: "[ngClass]",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: Rt }, { type: er }], propDecorators: { klass: [{
  type: _,
  args: ["class"]
}], ngClass: [{
  type: _,
  args: ["ngClass"]
}] } });
const fs = class fs {
  constructor(t) {
    this._viewContainerRef = t, this.ngComponentOutlet = null, this._inputsUsed = /* @__PURE__ */ new Map();
  }
  _needToReCreateNgModuleInstance(t) {
    return t.ngComponentOutletNgModule !== void 0 || t.ngComponentOutletNgModuleFactory !== void 0;
  }
  _needToReCreateComponentInstance(t) {
    return t.ngComponentOutlet !== void 0 || t.ngComponentOutletContent !== void 0 || t.ngComponentOutletInjector !== void 0 || this._needToReCreateNgModuleInstance(t);
  }
  /** @nodoc */
  ngOnChanges(t) {
    var n;
    if (this._needToReCreateComponentInstance(t) && (this._viewContainerRef.clear(), this._inputsUsed.clear(), this._componentRef = void 0, this.ngComponentOutlet)) {
      const r = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
      this._needToReCreateNgModuleInstance(t) && ((n = this._moduleRef) == null || n.destroy(), this.ngComponentOutletNgModule ? this._moduleRef = Im(this.ngComponentOutletNgModule, EE(r)) : this.ngComponentOutletNgModuleFactory ? this._moduleRef = this.ngComponentOutletNgModuleFactory.create(EE(r)) : this._moduleRef = void 0), this._componentRef = this._viewContainerRef.createComponent(this.ngComponentOutlet, {
        injector: r,
        ngModuleRef: this._moduleRef,
        projectableNodes: this.ngComponentOutletContent
      });
    }
  }
  /** @nodoc */
  ngDoCheck() {
    if (this._componentRef) {
      if (this.ngComponentOutletInputs)
        for (const t of Object.keys(this.ngComponentOutletInputs))
          this._inputsUsed.set(t, !0);
      this._applyInputStateDiff(this._componentRef);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    var t;
    (t = this._moduleRef) == null || t.destroy();
  }
  _applyInputStateDiff(t) {
    for (const [n, r] of this._inputsUsed)
      r ? (t.setInput(n, this.ngComponentOutletInputs[n]), this._inputsUsed.set(n, !1)) : (t.setInput(n, void 0), this._inputsUsed.delete(n));
  }
};
fs.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: fs, deps: [{ token: Fe }], target: B.Directive }), fs.ɵdir = Mt({ minVersion: "14.0.0", version: "18.2.14", type: fs, isStandalone: !0, selector: "[ngComponentOutlet]", inputs: { ngComponentOutlet: "ngComponentOutlet", ngComponentOutletInputs: "ngComponentOutletInputs", ngComponentOutletInjector: "ngComponentOutletInjector", ngComponentOutletContent: "ngComponentOutletContent", ngComponentOutletNgModule: "ngComponentOutletNgModule", ngComponentOutletNgModuleFactory: "ngComponentOutletNgModuleFactory" }, usesOnChanges: !0, ngImport: w });
let Js = fs;
z({ type: Js, decorators: [{
  type: Je,
  args: [{
    selector: "[ngComponentOutlet]",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: Fe }], propDecorators: { ngComponentOutlet: [{
  type: _
}], ngComponentOutletInputs: [{
  type: _
}], ngComponentOutletInjector: [{
  type: _
}], ngComponentOutletContent: [{
  type: _
}], ngComponentOutletNgModule: [{
  type: _
}], ngComponentOutletNgModuleFactory: [{
  type: _
}] } });
function EE(e) {
  return e.get(tr).injector;
}
class yB {
  constructor(t, n, r, o) {
    this.$implicit = t, this.ngForOf = n, this.index = r, this.count = o;
  }
  // Indicates whether this is the first item in the collection.
  get first() {
    return this.index === 0;
  }
  // Indicates whether this is the last item in the collection.
  get last() {
    return this.index === this.count - 1;
  }
  // Indicates whether an index of this item in the collection is even.
  get even() {
    return this.index % 2 === 0;
  }
  // Indicates whether an index of this item in the collection is odd.
  get odd() {
    return !this.even;
  }
}
const hs = class hs {
  /**
   * The value of the iterable expression, which can be used as a
   * [template input variable](guide/directives/structural-directives#shorthand).
   */
  set ngForOf(t) {
    this._ngForOf = t, this._ngForOfDirty = !0;
  }
  /**
   * Specifies a custom `TrackByFunction` to compute the identity of items in an iterable.
   *
   * If a custom `TrackByFunction` is not provided, `NgForOf` will use the item's [object
   * identity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
   * as the key.
   *
   * `NgForOf` uses the computed key to associate items in an iterable with DOM elements
   * it produces for these items.
   *
   * A custom `TrackByFunction` is useful to provide good user experience in cases when items in an
   * iterable rendered using `NgForOf` have a natural identifier (for example, custom ID or a
   * primary key), and this iterable could be updated with new object instances that still
   * represent the same underlying entity (for example, when data is re-fetched from the server,
   * and the iterable is recreated and re-rendered, but most of the data is still the same).
   *
   * @see {@link TrackByFunction}
   */
  set ngForTrackBy(t) {
    (typeof ngDevMode > "u" || ngDevMode) && t != null && typeof t != "function" && console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`), this._trackByFn = t;
  }
  get ngForTrackBy() {
    return this._trackByFn;
  }
  constructor(t, n, r) {
    this._viewContainer = t, this._template = n, this._differs = r, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null;
  }
  /**
   * A reference to the template that is stamped out for each item in the iterable.
   * @see [template reference variable](guide/templates/variables#template-reference-variables)
   */
  set ngForTemplate(t) {
    t && (this._template = t);
  }
  /**
   * Applies the changes when needed.
   * @nodoc
   */
  ngDoCheck() {
    if (this._ngForOfDirty) {
      this._ngForOfDirty = !1;
      const t = this._ngForOf;
      if (!this._differ && t)
        if (typeof ngDevMode > "u" || ngDevMode)
          try {
            this._differ = this._differs.find(t).create(this.ngForTrackBy);
          } catch {
            let n = `Cannot find a differ supporting object '${t}' of type '${vB(t)}'. NgFor only supports binding to Iterables, such as Arrays.`;
            throw typeof t == "object" && (n += " Did you mean to use the keyvalue pipe?"), new v(-2200, n);
          }
        else
          this._differ = this._differs.find(t).create(this.ngForTrackBy);
    }
    if (this._differ) {
      const t = this._differ.diff(this._ngForOf);
      t && this._applyChanges(t);
    }
  }
  _applyChanges(t) {
    const n = this._viewContainer;
    t.forEachOperation((r, o, s) => {
      if (r.previousIndex == null)
        n.createEmbeddedView(this._template, new yB(r.item, this._ngForOf, -1, -1), s === null ? void 0 : s);
      else if (s == null)
        n.remove(o === null ? void 0 : o);
      else if (o !== null) {
        const i = n.get(o);
        n.move(i, s), CE(i, r);
      }
    });
    for (let r = 0, o = n.length; r < o; r++) {
      const i = n.get(r).context;
      i.index = r, i.count = o, i.ngForOf = this._ngForOf;
    }
    t.forEachIdentityChange((r) => {
      const o = n.get(r.currentIndex);
      CE(o, r);
    });
  }
  /**
   * Asserts the correct type of the context for the template that `NgForOf` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `NgForOf` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(t, n) {
    return !0;
  }
};
hs.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: hs, deps: [{ token: Fe }, { token: Ue }, { token: wo }], target: B.Directive }), hs.ɵdir = Mt({ minVersion: "14.0.0", version: "18.2.14", type: hs, isStandalone: !0, selector: "[ngFor][ngForOf]", inputs: { ngForOf: "ngForOf", ngForTrackBy: "ngForTrackBy", ngForTemplate: "ngForTemplate" }, ngImport: w });
let Xs = hs;
z({ type: Xs, decorators: [{
  type: Je,
  args: [{
    selector: "[ngFor][ngForOf]",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: Fe }, { type: Ue }, { type: wo }], propDecorators: { ngForOf: [{
  type: _
}], ngForTrackBy: [{
  type: _
}], ngForTemplate: [{
  type: _
}] } });
function CE(e, t) {
  e.context.$implicit = t.item;
}
function vB(e) {
  return e.name || typeof e;
}
const ps = class ps {
  constructor(t, n) {
    this._viewContainer = t, this._context = new DB(), this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = n;
  }
  /**
   * The Boolean expression to evaluate as the condition for showing a template.
   */
  set ngIf(t) {
    this._context.$implicit = this._context.ngIf = t, this._updateView();
  }
  /**
   * A template to show if the condition expression evaluates to true.
   */
  set ngIfThen(t) {
    IE("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView();
  }
  /**
   * A template to show if the condition expression evaluates to false.
   */
  set ngIfElse(t) {
    IE("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView();
  }
  _updateView() {
    this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
  }
  /**
   * Asserts the correct type of the context for the template that `NgIf` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `NgIf` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(t, n) {
    return !0;
  }
};
ps.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: ps, deps: [{ token: Fe }, { token: Ue }], target: B.Directive }), ps.ɵdir = Mt({ minVersion: "14.0.0", version: "18.2.14", type: ps, isStandalone: !0, selector: "[ngIf]", inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" }, ngImport: w });
let ei = ps;
z({ type: ei, decorators: [{
  type: Je,
  args: [{
    selector: "[ngIf]",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: Fe }, { type: Ue }], propDecorators: { ngIf: [{
  type: _
}], ngIfThen: [{
  type: _
}], ngIfElse: [{
  type: _
}] } });
class DB {
  constructor() {
    this.$implicit = null, this.ngIf = null;
  }
}
function IE(e, t) {
  if (!!!(!t || t.createEmbeddedView))
    throw new Error(`${e} must be a TemplateRef, but received '${J(t)}'.`);
}
class Yy {
  constructor(t, n) {
    this._viewContainerRef = t, this._templateRef = n, this._created = !1;
  }
  create() {
    this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef);
  }
  destroy() {
    this._created = !1, this._viewContainerRef.clear();
  }
  enforceState(t) {
    t && !this._created ? this.create() : !t && this._created && this.destroy();
  }
}
const gs = class gs {
  constructor() {
    this._defaultViews = [], this._defaultUsed = !1, this._caseCount = 0, this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1;
  }
  set ngSwitch(t) {
    this._ngSwitch = t, this._caseCount === 0 && this._updateDefaultCases(!0);
  }
  /** @internal */
  _addCase() {
    return this._caseCount++;
  }
  /** @internal */
  _addDefault(t) {
    this._defaultViews.push(t);
  }
  /** @internal */
  _matchCase(t) {
    const n = t === this._ngSwitch;
    return this._lastCasesMatched || (this._lastCasesMatched = n), this._lastCaseCheckIndex++, this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), n;
  }
  _updateDefaultCases(t) {
    if (this._defaultViews.length > 0 && t !== this._defaultUsed) {
      this._defaultUsed = t;
      for (const n of this._defaultViews)
        n.enforceState(t);
    }
  }
};
gs.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: gs, deps: [], target: B.Directive }), gs.ɵdir = Mt({ minVersion: "14.0.0", version: "18.2.14", type: gs, isStandalone: !0, selector: "[ngSwitch]", inputs: { ngSwitch: "ngSwitch" }, ngImport: w });
let ln = gs;
z({ type: ln, decorators: [{
  type: Je,
  args: [{
    selector: "[ngSwitch]",
    standalone: !0
  }]
}], propDecorators: { ngSwitch: [{
  type: _
}] } });
const ms = class ms {
  constructor(t, n, r) {
    this.ngSwitch = r, (typeof ngDevMode > "u" || ngDevMode) && !r && ST("ngSwitchCase", "NgSwitchCase"), r._addCase(), this._view = new Yy(t, n);
  }
  /**
   * Performs case matching. For internal use only.
   * @nodoc
   */
  ngDoCheck() {
    this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
  }
};
ms.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: ms, deps: [{ token: Fe }, { token: Ue }, { token: ln, host: !0, optional: !0 }], target: B.Directive }), ms.ɵdir = Mt({ minVersion: "14.0.0", version: "18.2.14", type: ms, isStandalone: !0, selector: "[ngSwitchCase]", inputs: { ngSwitchCase: "ngSwitchCase" }, ngImport: w });
let ti = ms;
z({ type: ti, decorators: [{
  type: Je,
  args: [{
    selector: "[ngSwitchCase]",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: Fe }, { type: Ue }, { type: ln, decorators: [{
  type: Ot
}, {
  type: xc
}] }], propDecorators: { ngSwitchCase: [{
  type: _
}] } });
const ys = class ys {
  constructor(t, n, r) {
    (typeof ngDevMode > "u" || ngDevMode) && !r && ST("ngSwitchDefault", "NgSwitchDefault"), r._addDefault(new Yy(t, n));
  }
};
ys.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: ys, deps: [{ token: Fe }, { token: Ue }, { token: ln, host: !0, optional: !0 }], target: B.Directive }), ys.ɵdir = Mt({ minVersion: "14.0.0", version: "18.2.14", type: ys, isStandalone: !0, selector: "[ngSwitchDefault]", ngImport: w });
let ni = ys;
z({ type: ni, decorators: [{
  type: Je,
  args: [{
    selector: "[ngSwitchDefault]",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: Fe }, { type: Ue }, { type: ln, decorators: [{
  type: Ot
}, {
  type: xc
}] }] });
function ST(e, t) {
  throw new v(2e3, `An element with the "${e}" attribute (matching the "${t}" directive) must be located inside an element with the "ngSwitch" attribute (matching "NgSwitch" directive)`);
}
const vs = class vs {
  constructor(t) {
    this._localization = t, this._caseViews = {};
  }
  set ngPlural(t) {
    this._updateView(t);
  }
  addCase(t, n) {
    this._caseViews[t] = n;
  }
  _updateView(t) {
    this._clearViews();
    const n = Object.keys(this._caseViews), r = MT(t, n, this._localization);
    this._activateView(this._caseViews[r]);
  }
  _clearViews() {
    this._activeView && this._activeView.destroy();
  }
  _activateView(t) {
    t && (this._activeView = t, this._activeView.create());
  }
};
vs.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: vs, deps: [{ token: ar }], target: B.Directive }), vs.ɵdir = Mt({ minVersion: "14.0.0", version: "18.2.14", type: vs, isStandalone: !0, selector: "[ngPlural]", inputs: { ngPlural: "ngPlural" }, ngImport: w });
let cr = vs;
z({ type: cr, decorators: [{
  type: Je,
  args: [{
    selector: "[ngPlural]",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: ar }], propDecorators: { ngPlural: [{
  type: _
}] } });
const Ds = class Ds {
  constructor(t, n, r, o) {
    this.value = t;
    const s = !isNaN(Number(t));
    o.addCase(s ? `=${t}` : t, new Yy(r, n));
  }
};
Ds.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Ds, deps: [{ token: "ngPluralCase", attribute: !0 }, { token: Ue }, { token: Fe }, { token: cr, host: !0 }], target: B.Directive }), Ds.ɵdir = Mt({ minVersion: "14.0.0", version: "18.2.14", type: Ds, isStandalone: !0, selector: "[ngPluralCase]", ngImport: w });
let ri = Ds;
z({ type: ri, decorators: [{
  type: Je,
  args: [{
    selector: "[ngPluralCase]",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: void 0, decorators: [{
  type: hg,
  args: ["ngPluralCase"]
}] }, { type: Ue }, { type: Fe }, { type: cr, decorators: [{
  type: xc
}] }] });
const Es = class Es {
  constructor(t, n, r) {
    this._ngEl = t, this._differs = n, this._renderer = r, this._ngStyle = null, this._differ = null;
  }
  set ngStyle(t) {
    this._ngStyle = t, !this._differ && t && (this._differ = this._differs.find(t).create());
  }
  ngDoCheck() {
    if (this._differ) {
      const t = this._differ.diff(this._ngStyle);
      t && this._applyChanges(t);
    }
  }
  _setStyle(t, n) {
    const [r, o] = t.split("."), s = r.indexOf("-") === -1 ? void 0 : $s.DashCase;
    n != null ? this._renderer.setStyle(this._ngEl.nativeElement, r, o ? `${n}${o}` : n, s) : this._renderer.removeStyle(this._ngEl.nativeElement, r, s);
  }
  _applyChanges(t) {
    t.forEachRemovedItem((n) => this._setStyle(n.key, null)), t.forEachAddedItem((n) => this._setStyle(n.key, n.currentValue)), t.forEachChangedItem((n) => this._setStyle(n.key, n.currentValue));
  }
};
Es.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Es, deps: [{ token: Rt }, { token: An }, { token: er }], target: B.Directive }), Es.ɵdir = Mt({ minVersion: "14.0.0", version: "18.2.14", type: Es, isStandalone: !0, selector: "[ngStyle]", inputs: { ngStyle: "ngStyle" }, ngImport: w });
let oi = Es;
z({ type: oi, decorators: [{
  type: Je,
  args: [{
    selector: "[ngStyle]",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: Rt }, { type: An }, { type: er }], propDecorators: { ngStyle: [{
  type: _,
  args: ["ngStyle"]
}] } });
const Cs = class Cs {
  constructor(t) {
    this._viewContainerRef = t, this._viewRef = null, this.ngTemplateOutletContext = null, this.ngTemplateOutlet = null, this.ngTemplateOutletInjector = null;
  }
  ngOnChanges(t) {
    if (this._shouldRecreateView(t)) {
      const n = this._viewContainerRef;
      if (this._viewRef && n.remove(n.indexOf(this._viewRef)), !this.ngTemplateOutlet) {
        this._viewRef = null;
        return;
      }
      const r = this._createContextForwardProxy();
      this._viewRef = n.createEmbeddedView(this.ngTemplateOutlet, r, {
        injector: this.ngTemplateOutletInjector ?? void 0
      });
    }
  }
  /**
   * We need to re-create existing embedded view if either is true:
   * - the outlet changed.
   * - the injector changed.
   */
  _shouldRecreateView(t) {
    return !!t.ngTemplateOutlet || !!t.ngTemplateOutletInjector;
  }
  /**
   * For a given outlet instance, we create a proxy object that delegates
   * to the user-specified context. This allows changing, or swapping out
   * the context object completely without having to destroy/re-create the view.
   */
  _createContextForwardProxy() {
    return new Proxy({}, {
      set: (t, n, r) => this.ngTemplateOutletContext ? Reflect.set(this.ngTemplateOutletContext, n, r) : !1,
      get: (t, n, r) => {
        if (this.ngTemplateOutletContext)
          return Reflect.get(this.ngTemplateOutletContext, n, r);
      }
    });
  }
};
Cs.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Cs, deps: [{ token: Fe }], target: B.Directive }), Cs.ɵdir = Mt({ minVersion: "14.0.0", version: "18.2.14", type: Cs, isStandalone: !0, selector: "[ngTemplateOutlet]", inputs: { ngTemplateOutletContext: "ngTemplateOutletContext", ngTemplateOutlet: "ngTemplateOutlet", ngTemplateOutletInjector: "ngTemplateOutletInjector" }, usesOnChanges: !0, ngImport: w });
let si = Cs;
z({ type: si, decorators: [{
  type: Je,
  args: [{
    selector: "[ngTemplateOutlet]",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: Fe }], propDecorators: { ngTemplateOutletContext: [{
  type: _
}], ngTemplateOutlet: [{
  type: _
}], ngTemplateOutletInjector: [{
  type: _
}] } });
const bE = [
  Ks,
  Js,
  Xs,
  ei,
  si,
  oi,
  ln,
  ti,
  ni,
  cr,
  ri
];
function Jt(e, t) {
  return new v(2100, ngDevMode && `InvalidPipeArgument: '${t}' for pipe '${J(e)}'`);
}
class EB {
  createSubscription(t, n) {
    return pp(() => t.subscribe({
      next: n,
      error: (r) => {
        throw r;
      }
    }));
  }
  dispose(t) {
    pp(() => t.unsubscribe());
  }
}
class CB {
  createSubscription(t, n) {
    return t.then(n, (r) => {
      throw r;
    });
  }
  dispose(t) {
  }
}
const IB = new CB(), bB = new EB(), Vr = class Vr {
  constructor(t) {
    this._latestValue = null, this.markForCheckOnValueUpdate = !0, this._subscription = null, this._obj = null, this._strategy = null, this._ref = t;
  }
  ngOnDestroy() {
    this._subscription && this._dispose(), this._ref = null;
  }
  transform(t) {
    if (!this._obj) {
      if (t)
        try {
          this.markForCheckOnValueUpdate = !1, this._subscribe(t);
        } finally {
          this.markForCheckOnValueUpdate = !0;
        }
      return this._latestValue;
    }
    return t !== this._obj ? (this._dispose(), this.transform(t)) : this._latestValue;
  }
  _subscribe(t) {
    this._obj = t, this._strategy = this._selectStrategy(t), this._subscription = this._strategy.createSubscription(t, (n) => this._updateLatestValue(t, n));
  }
  _selectStrategy(t) {
    if (qd(t))
      return IB;
    if (jy(t))
      return bB;
    throw Jt(Vr, t);
  }
  _dispose() {
    this._strategy.dispose(this._subscription), this._latestValue = null, this._subscription = null, this._obj = null;
  }
  _updateLatestValue(t, n) {
    var r;
    t === this._obj && (this._latestValue = n, this.markForCheckOnValueUpdate && ((r = this._ref) == null || r.markForCheck()));
  }
};
Vr.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Vr, deps: [{ token: rr }], target: B.Pipe }), Vr.ɵpipe = yt({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: Vr, isStandalone: !0, name: "async", pure: !1 });
let ii = Vr;
z({ type: ii, decorators: [{
  type: mt,
  args: [{
    name: "async",
    pure: !1,
    standalone: !0
  }]
}], ctorParameters: () => [{ type: rr }] });
const zr = class zr {
  transform(t) {
    if (t == null)
      return null;
    if (typeof t != "string")
      throw Jt(zr, t);
    return t.toLowerCase();
  }
};
zr.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: zr, deps: [], target: B.Pipe }), zr.ɵpipe = yt({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: zr, isStandalone: !0, name: "lowercase" });
let ai = zr;
z({ type: ai, decorators: [{
  type: mt,
  args: [{
    name: "lowercase",
    standalone: !0
  }]
}] });
const wB = /(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g, Gr = class Gr {
  transform(t) {
    if (t == null)
      return null;
    if (typeof t != "string")
      throw Jt(Gr, t);
    return t.replace(wB, (n) => n[0].toUpperCase() + n.slice(1).toLowerCase());
  }
};
Gr.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Gr, deps: [], target: B.Pipe }), Gr.ɵpipe = yt({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: Gr, isStandalone: !0, name: "titlecase" });
let ci = Gr;
z({ type: ci, decorators: [{
  type: mt,
  args: [{
    name: "titlecase",
    standalone: !0
  }]
}] });
const Wr = class Wr {
  transform(t) {
    if (t == null)
      return null;
    if (typeof t != "string")
      throw Jt(Wr, t);
    return t.toUpperCase();
  }
};
Wr.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Wr, deps: [], target: B.Pipe }), Wr.ɵpipe = yt({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: Wr, isStandalone: !0, name: "uppercase" });
let ui = Wr;
z({ type: ui, decorators: [{
  type: mt,
  args: [{
    name: "uppercase",
    standalone: !0
  }]
}] });
const _B = "mediumDate", TT = new F(ngDevMode ? "DATE_PIPE_DEFAULT_TIMEZONE" : ""), AT = new F(ngDevMode ? "DATE_PIPE_DEFAULT_OPTIONS" : ""), Zr = class Zr {
  constructor(t, n, r) {
    this.locale = t, this.defaultTimezone = n, this.defaultOptions = r;
  }
  transform(t, n, r, o) {
    var s, i;
    if (t == null || t === "" || t !== t)
      return null;
    try {
      const a = n ?? ((s = this.defaultOptions) == null ? void 0 : s.dateFormat) ?? _B, c = r ?? ((i = this.defaultOptions) == null ? void 0 : i.timezone) ?? this.defaultTimezone ?? void 0;
      return Y$(t, a, o || this.locale, c);
    } catch (a) {
      throw Jt(Zr, a.message);
    }
  }
};
Zr.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Zr, deps: [{ token: at }, { token: TT, optional: !0 }, { token: AT, optional: !0 }], target: B.Pipe }), Zr.ɵpipe = yt({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: Zr, isStandalone: !0, name: "date" });
let li = Zr;
z({ type: li, decorators: [{
  type: mt,
  args: [{
    name: "date",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: void 0, decorators: [{
  type: Et,
  args: [at]
}] }, { type: void 0, decorators: [{
  type: Et,
  args: [TT]
}, {
  type: Ot
}] }, { type: void 0, decorators: [{
  type: Et,
  args: [AT]
}, {
  type: Ot
}] }] });
const MB = /#/g, qr = class qr {
  constructor(t) {
    this._localization = t;
  }
  /**
   * @param value the number to be formatted
   * @param pluralMap an object that mimics the ICU format, see
   * https://unicode-org.github.io/icu/userguide/format_parse/messages/.
   * @param locale a `string` defining the locale to use (uses the current {@link LOCALE_ID} by
   * default).
   */
  transform(t, n, r) {
    if (t == null)
      return "";
    if (typeof n != "object" || n === null)
      throw Jt(qr, n);
    const o = MT(t, Object.keys(n), this._localization, r);
    return n[o].replace(MB, t.toString());
  }
};
qr.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: qr, deps: [{ token: ar }], target: B.Pipe }), qr.ɵpipe = yt({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: qr, isStandalone: !0, name: "i18nPlural" });
let di = qr;
z({ type: di, decorators: [{
  type: mt,
  args: [{
    name: "i18nPlural",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: ar }] });
const Qr = class Qr {
  /**
   * @param value a string to be internationalized.
   * @param mapping an object that indicates the text that should be displayed
   * for different values of the provided `value`.
   */
  transform(t, n) {
    if (t == null)
      return "";
    if (typeof n != "object" || typeof t != "string")
      throw Jt(Qr, n);
    return n.hasOwnProperty(t) ? n[t] : n.hasOwnProperty("other") ? n.other : "";
  }
};
Qr.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Qr, deps: [], target: B.Pipe }), Qr.ɵpipe = yt({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: Qr, isStandalone: !0, name: "i18nSelect" });
let fi = Qr;
z({ type: fi, decorators: [{
  type: mt,
  args: [{
    name: "i18nSelect",
    standalone: !0
  }]
}] });
const Is = class Is {
  /**
   * @param value A value of any type to convert into a JSON-format string.
   */
  transform(t) {
    return JSON.stringify(t, null, 2);
  }
};
Is.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Is, deps: [], target: B.Pipe }), Is.ɵpipe = yt({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: Is, isStandalone: !0, name: "json", pure: !1 });
let hi = Is;
z({ type: hi, decorators: [{
  type: mt,
  args: [{
    name: "json",
    pure: !1,
    standalone: !0
  }]
}] });
function SB(e, t) {
  return { key: e, value: t };
}
const bs = class bs {
  constructor(t) {
    this.differs = t, this.keyValues = [], this.compareFn = wE;
  }
  transform(t, n = wE) {
    if (!t || !(t instanceof Map) && typeof t != "object")
      return null;
    this.differ ?? (this.differ = this.differs.find(t).create());
    const r = this.differ.diff(t), o = n !== this.compareFn;
    return r && (this.keyValues = [], r.forEachItem((s) => {
      this.keyValues.push(SB(s.key, s.currentValue));
    })), (r || o) && (this.keyValues.sort(n), this.compareFn = n), this.keyValues;
  }
};
bs.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: bs, deps: [{ token: An }], target: B.Pipe }), bs.ɵpipe = yt({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: bs, isStandalone: !0, name: "keyvalue", pure: !1 });
let pi = bs;
z({ type: pi, decorators: [{
  type: mt,
  args: [{
    name: "keyvalue",
    pure: !1,
    standalone: !0
  }]
}], ctorParameters: () => [{ type: An }] });
function wE(e, t) {
  const n = e.key, r = t.key;
  if (n === r)
    return 0;
  if (n === void 0)
    return 1;
  if (r === void 0)
    return -1;
  if (n === null)
    return 1;
  if (r === null)
    return -1;
  if (typeof n == "string" && typeof r == "string")
    return n < r ? -1 : 1;
  if (typeof n == "number" && typeof r == "number")
    return n - r;
  if (typeof n == "boolean" && typeof r == "boolean")
    return n < r ? -1 : 1;
  const o = String(n), s = String(r);
  return o == s ? 0 : o < s ? -1 : 1;
}
const Yr = class Yr {
  constructor(t) {
    this._locale = t;
  }
  transform(t, n, r) {
    if (!Ky(t))
      return null;
    r || (r = this._locale);
    try {
      const o = Jy(t);
      return hB(o, r, n);
    } catch (o) {
      throw Jt(Yr, o.message);
    }
  }
};
Yr.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Yr, deps: [{ token: at }], target: B.Pipe }), Yr.ɵpipe = yt({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: Yr, isStandalone: !0, name: "number" });
let gi = Yr;
z({ type: gi, decorators: [{
  type: mt,
  args: [{
    name: "number",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: void 0, decorators: [{
  type: Et,
  args: [at]
}] }] });
const Kr = class Kr {
  constructor(t) {
    this._locale = t;
  }
  /**
   *
   * @param value The number to be formatted as a percentage.
   * @param digitsInfo Decimal representation options, specified by a string
   * in the following format:<br>
   * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
   *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
   * Default is `1`.
   *   - `minFractionDigits`: The minimum number of digits after the decimal point.
   * Default is `0`.
   *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
   * Default is `0`.
   * @param locale A locale code for the locale format rules to use.
   * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
   * See [Setting your app locale](guide/i18n/locale-id).
   */
  transform(t, n, r) {
    if (!Ky(t))
      return null;
    r || (r = this._locale);
    try {
      const o = Jy(t);
      return fB(o, r, n);
    } catch (o) {
      throw Jt(Kr, o.message);
    }
  }
};
Kr.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Kr, deps: [{ token: at }], target: B.Pipe }), Kr.ɵpipe = yt({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: Kr, isStandalone: !0, name: "percent" });
let mi = Kr;
z({ type: mi, decorators: [{
  type: mt,
  args: [{
    name: "percent",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: void 0, decorators: [{
  type: Et,
  args: [at]
}] }] });
const Jr = class Jr {
  constructor(t, n = "USD") {
    this._locale = t, this._defaultCurrencyCode = n;
  }
  transform(t, n = this._defaultCurrencyCode, r = "symbol", o, s) {
    if (!Ky(t))
      return null;
    s || (s = this._locale), typeof r == "boolean" && ((typeof ngDevMode > "u" || ngDevMode) && console && console.warn && console.warn('Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".'), r = r ? "symbol" : "code");
    let i = n || this._defaultCurrencyCode;
    r !== "code" && (r === "symbol" || r === "symbol-narrow" ? i = G$(i, r === "symbol" ? "wide" : "narrow", s) : i = r);
    try {
      const a = Jy(t);
      return dB(a, s, i, n, o);
    } catch (a) {
      throw Jt(Jr, a.message);
    }
  }
};
Jr.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Jr, deps: [{ token: at }, { token: Hy }], target: B.Pipe }), Jr.ɵpipe = yt({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: Jr, isStandalone: !0, name: "currency" });
let yi = Jr;
z({ type: yi, decorators: [{
  type: mt,
  args: [{
    name: "currency",
    standalone: !0
  }]
}], ctorParameters: () => [{ type: void 0, decorators: [{
  type: Et,
  args: [at]
}] }, { type: void 0, decorators: [{
  type: Et,
  args: [Hy]
}] }] });
function Ky(e) {
  return !(e == null || e === "" || e !== e);
}
function Jy(e) {
  if (typeof e == "string" && !isNaN(Number(e) - parseFloat(e)))
    return Number(e);
  if (typeof e != "number")
    throw new Error(`${e} is not a number`);
  return e;
}
const Xr = class Xr {
  transform(t, n, r) {
    if (t == null)
      return null;
    if (!this.supports(t))
      throw Jt(Xr, t);
    return t.slice(n, r);
  }
  supports(t) {
    return typeof t == "string" || Array.isArray(t);
  }
};
Xr.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Xr, deps: [], target: B.Pipe }), Xr.ɵpipe = yt({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: Xr, isStandalone: !0, name: "slice", pure: !1 });
let vi = Xr;
z({ type: vi, decorators: [{
  type: mt,
  args: [{
    name: "slice",
    pure: !1,
    standalone: !0
  }]
}] });
const _E = [
  ii,
  ui,
  ai,
  hi,
  vi,
  gi,
  mi,
  ci,
  yi,
  li,
  di,
  fi,
  pi
], Bn = class Bn {
};
Bn.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Bn, deps: [], target: B.NgModule }), Bn.ɵmod = vT({ minVersion: "14.0.0", version: "18.2.14", ngImport: w, type: Bn, imports: [Ks, Js, Xs, ei, si, oi, ln, ti, ni, cr, ri, ii, ui, ai, hi, vi, gi, mi, ci, yi, li, di, fi, pi], exports: [Ks, Js, Xs, ei, si, oi, ln, ti, ni, cr, ri, ii, ui, ai, hi, vi, gi, mi, ci, yi, li, di, fi, pi] }), Bn.ɵinj = yT({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Bn });
let dn = Bn;
z({ type: dn, decorators: [{
  type: Fy,
  args: [{
    imports: [bE, _E],
    exports: [bE, _E]
  }]
}] });
const TB = "browser", AB = "server";
function OT(e) {
  return e === TB;
}
function PT(e) {
  return e === AB;
}
new ky("18.2.14");
const jl = class jl {
};
jl.ɵprov = se({
  token: jl,
  providedIn: "root",
  factory: () => OT(I(Er)) ? new OB(I(Xi), window) : new xB()
});
let ME = jl;
class OB {
  constructor(t, n) {
    this.document = t, this.window = n, this.offset = () => [0, 0];
  }
  /**
   * Configures the top offset used when scrolling to an anchor.
   * @param offset A position in screen coordinates (a tuple with x and y values)
   * or a function that returns the top offset position.
   *
   */
  setOffset(t) {
    Array.isArray(t) ? this.offset = () => t : this.offset = t;
  }
  /**
   * Retrieves the current scroll position.
   * @returns The position in screen coordinates.
   */
  getScrollPosition() {
    return [this.window.scrollX, this.window.scrollY];
  }
  /**
   * Sets the scroll position.
   * @param position The new position in screen coordinates.
   */
  scrollToPosition(t) {
    this.window.scrollTo(t[0], t[1]);
  }
  /**
   * Scrolls to an element and attempts to focus the element.
   *
   * Note that the function name here is misleading in that the target string may be an ID for a
   * non-anchor element.
   *
   * @param target The ID of an element or name of the anchor.
   *
   * @see https://html.spec.whatwg.org/#the-indicated-part-of-the-document
   * @see https://html.spec.whatwg.org/#scroll-to-fragid
   */
  scrollToAnchor(t) {
    const n = PB(this.document, t);
    n && (this.scrollToElement(n), n.focus());
  }
  /**
   * Disables automatic scroll restoration provided by the browser.
   */
  setHistoryScrollRestoration(t) {
    this.window.history.scrollRestoration = t;
  }
  /**
   * Scrolls to an element using the native offset and the specified offset set on this scroller.
   *
   * The offset can be used when we know that there is a floating header and scrolling naively to an
   * element (ex: `scrollIntoView`) leaves the element hidden behind the floating header.
   */
  scrollToElement(t) {
    const n = t.getBoundingClientRect(), r = n.left + this.window.pageXOffset, o = n.top + this.window.pageYOffset, s = this.offset();
    this.window.scrollTo(r - s[0], o - s[1]);
  }
}
function PB(e, t) {
  const n = e.getElementById(t) || e.getElementsByName(t)[0];
  if (n)
    return n;
  if (typeof e.createTreeWalker == "function" && e.body && typeof e.body.attachShadow == "function") {
    const r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT);
    let o = r.currentNode;
    for (; o; ) {
      const s = o.shadowRoot;
      if (s) {
        const i = s.getElementById(t) || s.querySelector(`[name="${t}"]`);
        if (i)
          return i;
      }
      o = r.nextNode();
    }
  }
  return null;
}
class xB {
  /**
   * Empty implementation
   */
  setOffset(t) {
  }
  /**
   * Empty implementation
   */
  getScrollPosition() {
    return [0, 0];
  }
  /**
   * Empty implementation
   */
  scrollToPosition(t) {
  }
  /**
   * Empty implementation
   */
  scrollToAnchor(t) {
  }
  /**
   * Empty implementation
   */
  setHistoryScrollRestoration(t) {
  }
}
const Xy = "20";
function rs(e, t) {
  return ev(e) ? new URL(e) : new URL(e, t.location.href);
}
function ev(e) {
  return /^https?:\/\//.test(e);
}
function SE(e) {
  return ev(e) ? new URL(e).hostname : e;
}
function NB(e) {
  if (!(typeof e == "string") || e.trim() === "")
    return !1;
  try {
    const n = new URL(e);
    return !0;
  } catch {
    return !1;
  }
}
function RB(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
function FB(e) {
  return e.startsWith("/") ? e.slice(1) : e;
}
const ea = (e) => e.src, xT = new F(ngDevMode ? "ImageLoader" : "", {
  providedIn: "root",
  factory: () => ea
});
function ef(e, t) {
  return function(r) {
    return NB(r) || kB(r, t || []), r = RB(r), [{ provide: xT, useValue: (i) => (ev(i.src) && LB(r, i.src), e(r, { ...i, src: FB(i.src) })) }];
  };
}
function kB(e, t) {
  throw new v(2959, ngDevMode && `Image loader has detected an invalid path (\`${e}\`). To fix this, supply a path using one of the following formats: ${t.join(" or ")}`);
}
function LB(e, t) {
  throw new v(2959, ngDevMode && `Image loader has detected a \`<img>\` tag with an invalid \`ngSrc\` attribute: ${t}. This image loader expects \`ngSrc\` to be a relative URL - however the provided value is an absolute URL. To fix this, provide \`ngSrc\` as a path relative to the base URL configured for this loader (\`${e}\`).`);
}
ef(jB, ngDevMode ? ["https://<ZONE>/cdn-cgi/image/<OPTIONS>/<SOURCE-IMAGE>"] : void 0);
function jB(e, t) {
  let n = "format=auto";
  return t.width && (n += `,width=${t.width}`), t.isPlaceholder && (n += `,quality=${Xy}`), `${e}/cdn-cgi/image/${n}/${t.src}`;
}
const $B = {
  name: "Cloudinary",
  testUrl: HB
}, BB = /https?\:\/\/[^\/]+\.cloudinary\.com\/.+/;
function HB(e) {
  return BB.test(e);
}
ef(UB, ngDevMode ? [
  "https://res.cloudinary.com/mysite",
  "https://mysite.cloudinary.com",
  "https://subdomain.mysite.com"
] : void 0);
function UB(e, t) {
  let r = `f_auto,${t.isPlaceholder ? "q_auto:low" : "q_auto"}`;
  return t.width && (r += `,w_${t.width}`), `${e}/image/upload/${r}/${t.src}`;
}
const VB = {
  name: "ImageKit",
  testUrl: GB
}, zB = /https?\:\/\/[^\/]+\.imagekit\.io\/.+/;
function GB(e) {
  return zB.test(e);
}
ef(WB, ngDevMode ? ["https://ik.imagekit.io/mysite", "https://subdomain.mysite.com"] : void 0);
function WB(e, t) {
  const { src: n, width: r } = t, o = [];
  r && o.push(`w-${r}`), t.isPlaceholder && o.push(`q-${Xy}`);
  const s = o.length ? [e, `tr:${o.join(",")}`, n] : [e, n];
  return new URL(s.join("/")).href;
}
const ZB = {
  name: "Imgix",
  testUrl: QB
}, qB = /https?\:\/\/[^\/]+\.imgix\.net\/.+/;
function QB(e) {
  return qB.test(e);
}
ef(YB, ngDevMode ? ["https://somepath.imgix.net/"] : void 0);
function YB(e, t) {
  const n = new URL(`${e}/${t.src}`);
  return n.searchParams.set("auto", "format"), t.width && n.searchParams.set("w", t.width.toString()), t.isPlaceholder && n.searchParams.set("q", Xy), n.href;
}
const KB = {
  name: "Netlify",
  testUrl: XB
}, JB = /https?\:\/\/[^\/]+\.netlify\.app\/.+/;
function XB(e) {
  return JB.test(e);
}
function de(e, t = !0) {
  return `The NgOptimizedImage directive ${t ? `(activated on an <img> element with the \`ngSrc="${e}"\`) ` : ""}has detected that`;
}
function NT(e) {
  if (!ngDevMode)
    throw new v(2958, `Unexpected invocation of the ${e} in the prod mode. Please make sure that the prod mode is enabled for production builds.`);
}
const ws = class ws {
  constructor() {
    this.images = /* @__PURE__ */ new Map(), this.window = null, this.observer = null;
    const t = OT(I(Er));
    NT("LCP checker");
    const n = I(Xi).defaultView;
    t && typeof PerformanceObserver < "u" && (this.window = n, this.observer = this.initPerformanceObserver());
  }
  /**
   * Inits PerformanceObserver and subscribes to LCP events.
   * Based on https://web.dev/lcp/#measure-lcp-in-javascript
   */
  initPerformanceObserver() {
    const t = new PerformanceObserver((n) => {
      var a;
      const r = n.getEntries();
      if (r.length === 0)
        return;
      const s = ((a = r[r.length - 1].element) == null ? void 0 : a.src) ?? "";
      if (s.startsWith("data:") || s.startsWith("blob:"))
        return;
      const i = this.images.get(s);
      i && (!i.priority && !i.alreadyWarnedPriority && (i.alreadyWarnedPriority = !0, eH(s)), i.modified && !i.alreadyWarnedModified && (i.alreadyWarnedModified = !0, tH(s)));
    });
    return t.observe({ type: "largest-contentful-paint", buffered: !0 }), t;
  }
  registerImage(t, n, r) {
    if (!this.observer)
      return;
    const o = {
      priority: r,
      modified: !1,
      alreadyWarnedModified: !1,
      alreadyWarnedPriority: !1
    };
    this.images.set(rs(t, this.window).href, o);
  }
  unregisterImage(t) {
    this.observer && this.images.delete(rs(t, this.window).href);
  }
  updateImage(t, n) {
    if (!this.observer)
      return;
    const r = rs(t, this.window).href, o = this.images.get(r);
    o && (o.modified = !0, this.images.set(rs(n, this.window).href, o), this.images.delete(r));
  }
  ngOnDestroy() {
    this.observer && (this.observer.disconnect(), this.images.clear());
  }
};
ws.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: ws, deps: [], target: B.Injectable }), ws.ɵprov = St({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: ws, providedIn: "root" });
let Ol = ws;
z({ type: Ol, decorators: [{
  type: Ee,
  args: [{ providedIn: "root" }]
}], ctorParameters: () => [] });
function eH(e) {
  const t = de(e);
  console.error(fe(2955, `${t} this image is the Largest Contentful Paint (LCP) element but was not marked "priority". This image should be marked "priority" in order to prioritize its loading. To fix this, add the "priority" attribute.`));
}
function tH(e) {
  const t = de(e);
  console.warn(fe(2964, `${t} this image is the Largest Contentful Paint (LCP) element and has had its "ngSrc" attribute modified. This can cause slower loading performance. It is recommended not to modify the "ngSrc" property on any image which could be the LCP element.`));
}
const nH = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "0.0.0.0"]), rH = new F(ngDevMode ? "PRECONNECT_CHECK_BLOCKLIST" : ""), _s = class _s {
  constructor() {
    this.document = I(Xi), this.isServer = PT(I(Er)), this.preconnectLinks = null, this.alreadySeen = /* @__PURE__ */ new Set(), this.window = null, this.blocklist = new Set(nH), NT("preconnect link checker");
    const t = this.document.defaultView;
    typeof t < "u" && (this.window = t);
    const n = I(rH, { optional: !0 });
    n && this.populateBlocklist(n);
  }
  populateBlocklist(t) {
    Array.isArray(t) ? RT(t, (n) => {
      this.blocklist.add(SE(n));
    }) : this.blocklist.add(SE(t));
  }
  /**
   * Checks that a preconnect resource hint exists in the head for the
   * given src.
   *
   * @param rewrittenSrc src formatted with loader
   * @param originalNgSrc ngSrc value
   */
  assertPreconnect(t, n) {
    if (this.isServer)
      return;
    const r = rs(t, this.window);
    this.blocklist.has(r.hostname) || this.alreadySeen.has(r.origin) || (this.alreadySeen.add(r.origin), this.preconnectLinks ?? (this.preconnectLinks = this.queryPreconnectLinks()), this.preconnectLinks.has(r.origin) || console.warn(fe(2956, `${de(n)} there is no preconnect tag present for this image. Preconnecting to the origin(s) that serve priority images ensures that these images are delivered as soon as possible. To fix this, please add the following element into the <head> of the document:
  <link rel="preconnect" href="${r.origin}">`)));
  }
  queryPreconnectLinks() {
    const t = /* @__PURE__ */ new Set(), r = Array.from(this.document.querySelectorAll("link[rel=preconnect]"));
    for (let o of r) {
      const s = rs(o.href, this.window);
      t.add(s.origin);
    }
    return t;
  }
  ngOnDestroy() {
    var t;
    (t = this.preconnectLinks) == null || t.clear(), this.alreadySeen.clear();
  }
};
_s.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: _s, deps: [], target: B.Injectable }), _s.ɵprov = St({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: _s, providedIn: "root" });
let Pl = _s;
z({ type: Pl, decorators: [{
  type: Ee,
  args: [{ providedIn: "root" }]
}], ctorParameters: () => [] });
function RT(e, t) {
  for (let n of e)
    Array.isArray(n) ? RT(n, t) : t(n);
}
const TE = 5, oH = new F("NG_OPTIMIZED_PRELOADED_IMAGES", {
  providedIn: "root",
  factory: () => /* @__PURE__ */ new Set()
}), Ms = class Ms {
  constructor() {
    this.preloadedImages = I(oH), this.document = I(Xi);
  }
  /**
   * @description Add a preload `<link>` to the `<head>` of the `index.html` that is served from the
   * server while using Angular Universal and SSR to kick off image loads for high priority images.
   *
   * The `sizes` (passed in from the user) and `srcset` (parsed and formatted from `ngSrcset`)
   * properties used to set the corresponding attributes, `imagesizes` and `imagesrcset`
   * respectively, on the preload `<link>` tag so that the correctly sized image is preloaded from
   * the CDN.
   *
   * {@link https://web.dev/preload-responsive-images/#imagesrcset-and-imagesizes}
   *
   * @param renderer The `Renderer2` passed in from the directive
   * @param src The original src of the image that is set on the `ngSrc` input.
   * @param srcset The parsed and formatted srcset created from the `ngSrcset` input
   * @param sizes The value of the `sizes` attribute passed in to the `<img>` tag
   */
  createPreloadLinkTag(t, n, r, o) {
    if (ngDevMode && this.preloadedImages.size >= TE)
      throw new v(2961, ngDevMode && `The \`NgOptimizedImage\` directive has detected that more than ${TE} images were marked as priority. This might negatively affect an overall performance of the page. To fix this, remove the "priority" attribute from images with less priority.`);
    if (this.preloadedImages.has(n))
      return;
    this.preloadedImages.add(n);
    const s = t.createElement("link");
    t.setAttribute(s, "as", "image"), t.setAttribute(s, "href", n), t.setAttribute(s, "rel", "preload"), t.setAttribute(s, "fetchpriority", "high"), o && t.setAttribute(s, "imageSizes", o), r && t.setAttribute(s, "imageSrcset", r), t.appendChild(this.document.head, s);
  }
};
Ms.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Ms, deps: [], target: B.Injectable }), Ms.ɵprov = St({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Ms, providedIn: "root" });
let xl = Ms;
z({ type: xl, decorators: [{
  type: Ee,
  args: [{ providedIn: "root" }]
}] });
const AE = 50, FT = /^((\s*\d+w\s*(,|$)){1,})$/, sH = /^((\s*\d+(\.\d+)?x\s*(,|$)){1,})$/, Gf = 3, Ma = 2, iH = [1, 2], aH = 640, OE = 0.1, PE = 1e3, cH = 1920, uH = 1080, lH = 15, Wf = 1e3, xE = 4e3, NE = 1e4, dH = [
  ZB,
  VB,
  $B,
  KB
], RE = 10;
let oa = 0;
const Ss = class Ss {
  constructor() {
    this.imageLoader = I(xT), this.config = fH(I(bg)), this.renderer = I(er), this.imgElement = I(Rt).nativeElement, this.injector = I($e), this.isServer = PT(I(Er)), this.preloadLinkCreator = I(xl), this.lcpObserver = ngDevMode ? this.injector.get(Ol) : null, this._renderedSrc = null, this.priority = !1, this.disableOptimizedSrcset = !1, this.fill = !1;
  }
  /** @nodoc */
  ngOnInit() {
    if (We("NgOptimizedImage"), ngDevMode) {
      const t = this.injector.get(oe);
      if (kT(this, "ngSrc", this.ngSrc), IH(this, this.ngSrcset), hH(this), this.ngSrcset && pH(this), gH(this), CH(this), this.fill ? (TH(this), t.runOutsideAngular(() => AH(this, this.imgElement, this.renderer))) : (SH(this), this.height !== void 0 && FE(this, this.height, "height"), this.width !== void 0 && FE(this, this.width, "width"), t.runOutsideAngular(() => MH(this, this.imgElement, this.renderer))), OH(this), this.ngSrcset || mH(this), yH(this, this.imageLoader), PH(this.ngSrc, this.imageLoader), xH(this, this.imageLoader), NH(this, this.imageLoader), this.lcpObserver !== null && this.injector.get(oe).runOutsideAngular(() => {
        this.lcpObserver.registerImage(this.getRewrittenSrc(), this.ngSrc, this.priority);
      }), this.priority && (this.injector.get(Pl).assertPreconnect(this.getRewrittenSrc(), this.ngSrc), !this.isServer)) {
        const r = this.injector.get(rt);
        RH(r);
      }
    }
    this.placeholder && this.removePlaceholderOnLoad(this.imgElement), this.setHostAttributes();
  }
  setHostAttributes() {
    this.fill ? this.sizes || (this.sizes = "100vw") : (this.setHostAttribute("width", this.width.toString()), this.setHostAttribute("height", this.height.toString())), this.setHostAttribute("loading", this.getLoadingBehavior()), this.setHostAttribute("fetchpriority", this.getFetchPriority()), this.setHostAttribute("ng-img", "true");
    const t = this.updateSrcAndSrcset();
    this.sizes && this.setHostAttribute("sizes", this.sizes), this.isServer && this.priority && this.preloadLinkCreator.createPreloadLinkTag(this.renderer, this.getRewrittenSrc(), t, this.sizes);
  }
  /** @nodoc */
  ngOnChanges(t) {
    var n;
    if (ngDevMode && _H(this, t, [
      "ngSrcset",
      "width",
      "height",
      "priority",
      "fill",
      "loading",
      "sizes",
      "loaderParams",
      "disableOptimizedSrcset"
    ]), t.ngSrc && !t.ngSrc.isFirstChange()) {
      const r = this._renderedSrc;
      this.updateSrcAndSrcset(!0);
      const o = this._renderedSrc;
      this.lcpObserver !== null && r && o && r !== o && this.injector.get(oe).runOutsideAngular(() => {
        var i;
        (i = this.lcpObserver) == null || i.updateImage(r, o);
      });
    }
    ngDevMode && ((n = t.placeholder) != null && n.currentValue) && !this.isServer && FH(this, this.imgElement);
  }
  callImageLoader(t) {
    let n = t;
    return this.loaderParams && (n.loaderParams = this.loaderParams), this.imageLoader(n);
  }
  getLoadingBehavior() {
    return !this.priority && this.loading !== void 0 ? this.loading : this.priority ? "eager" : "lazy";
  }
  getFetchPriority() {
    return this.priority ? "high" : "auto";
  }
  getRewrittenSrc() {
    if (!this._renderedSrc) {
      const t = { src: this.ngSrc };
      this._renderedSrc = this.callImageLoader(t);
    }
    return this._renderedSrc;
  }
  getRewrittenSrcset() {
    const t = FT.test(this.ngSrcset);
    return this.ngSrcset.split(",").filter((r) => r !== "").map((r) => {
      r = r.trim();
      const o = t ? parseFloat(r) : parseFloat(r) * this.width;
      return `${this.callImageLoader({ src: this.ngSrc, width: o })} ${r}`;
    }).join(", ");
  }
  getAutomaticSrcset() {
    return this.sizes ? this.getResponsiveSrcset() : this.getFixedSrcset();
  }
  getResponsiveSrcset() {
    var o;
    const { breakpoints: t } = this.config;
    let n = t;
    return ((o = this.sizes) == null ? void 0 : o.trim()) === "100vw" && (n = t.filter((s) => s >= aH)), n.map((s) => `${this.callImageLoader({ src: this.ngSrc, width: s })} ${s}w`).join(", ");
  }
  updateSrcAndSrcset(t = !1) {
    t && (this._renderedSrc = null);
    const n = this.getRewrittenSrc();
    this.setHostAttribute("src", n);
    let r;
    return this.ngSrcset ? r = this.getRewrittenSrcset() : this.shouldGenerateAutomaticSrcset() && (r = this.getAutomaticSrcset()), r && this.setHostAttribute("srcset", r), r;
  }
  getFixedSrcset() {
    return iH.map((n) => `${this.callImageLoader({
      src: this.ngSrc,
      width: this.width * n
    })} ${n}x`).join(", ");
  }
  shouldGenerateAutomaticSrcset() {
    let t = !1;
    return this.sizes || (t = this.width > cH || this.height > uH), !this.disableOptimizedSrcset && !this.srcset && this.imageLoader !== ea && !t;
  }
  /**
   * Returns an image url formatted for use with the CSS background-image property. Expects one of:
   * * A base64 encoded image, which is wrapped and passed through.
   * * A boolean. If true, calls the image loader to generate a small placeholder url.
   */
  generatePlaceholder(t) {
    const { placeholderResolution: n } = this.config;
    return t === !0 ? `url(${this.callImageLoader({
      src: this.ngSrc,
      width: n,
      isPlaceholder: !0
    })})` : typeof t == "string" ? `url(${t})` : null;
  }
  /**
   * Determines if blur should be applied, based on an optional boolean
   * property `blur` within the optional configuration object `placeholderConfig`.
   */
  shouldBlurPlaceholder(t) {
    return !t || !t.hasOwnProperty("blur") ? !0 : !!t.blur;
  }
  removePlaceholderOnLoad(t) {
    const n = () => {
      const s = this.injector.get(rr);
      r(), o(), this.placeholder = !1, s.markForCheck();
    }, r = this.renderer.listen(t, "load", n), o = this.renderer.listen(t, "error", n);
    tv(t, n);
  }
  /** @nodoc */
  ngOnDestroy() {
    ngDevMode && !this.priority && this._renderedSrc !== null && this.lcpObserver !== null && this.lcpObserver.unregisterImage(this._renderedSrc);
  }
  setHostAttribute(t, n) {
    this.renderer.setAttribute(this.imgElement, t, n);
  }
};
Ss.ɵfac = G({ minVersion: "12.0.0", version: "18.2.14", ngImport: w, type: Ss, deps: [], target: B.Directive }), Ss.ɵdir = Mt({ minVersion: "16.1.0", version: "18.2.14", type: Ss, isStandalone: !0, selector: "img[ngSrc]", inputs: { ngSrc: ["ngSrc", "ngSrc", LT], ngSrcset: "ngSrcset", sizes: "sizes", width: ["width", "width", ac], height: ["height", "height", ac], loading: "loading", priority: ["priority", "priority", Wn], loaderParams: "loaderParams", disableOptimizedSrcset: ["disableOptimizedSrcset", "disableOptimizedSrcset", Wn], fill: ["fill", "fill", Wn], placeholder: ["placeholder", "placeholder", jT], placeholderConfig: "placeholderConfig", src: "src", srcset: "srcset" }, host: { properties: { "style.position": 'fill ? "absolute" : null', "style.width": 'fill ? "100%" : null', "style.height": 'fill ? "100%" : null', "style.inset": 'fill ? "0" : null', "style.background-size": 'placeholder ? "cover" : null', "style.background-position": 'placeholder ? "50% 50%" : null', "style.background-repeat": 'placeholder ? "no-repeat" : null', "style.background-image": "placeholder ? generatePlaceholder(placeholder) : null", "style.filter": 'placeholder && shouldBlurPlaceholder(placeholderConfig) ? "blur(15px)" : null' } }, usesOnChanges: !0, ngImport: w });
let vp = Ss;
z({ type: vp, decorators: [{
  type: Je,
  args: [{
    standalone: !0,
    selector: "img[ngSrc]",
    host: {
      "[style.position]": 'fill ? "absolute" : null',
      "[style.width]": 'fill ? "100%" : null',
      "[style.height]": 'fill ? "100%" : null',
      "[style.inset]": 'fill ? "0" : null',
      "[style.background-size]": 'placeholder ? "cover" : null',
      "[style.background-position]": 'placeholder ? "50% 50%" : null',
      "[style.background-repeat]": 'placeholder ? "no-repeat" : null',
      "[style.background-image]": "placeholder ? generatePlaceholder(placeholder) : null",
      "[style.filter]": `placeholder && shouldBlurPlaceholder(placeholderConfig) ? "blur(${lH}px)" : null`
    }
  }]
}], propDecorators: { ngSrc: [{
  type: _,
  args: [{ required: !0, transform: LT }]
}], ngSrcset: [{
  type: _
}], sizes: [{
  type: _
}], width: [{
  type: _,
  args: [{ transform: ac }]
}], height: [{
  type: _,
  args: [{ transform: ac }]
}], loading: [{
  type: _
}], priority: [{
  type: _,
  args: [{ transform: Wn }]
}], loaderParams: [{
  type: _
}], disableOptimizedSrcset: [{
  type: _,
  args: [{ transform: Wn }]
}], fill: [{
  type: _,
  args: [{ transform: Wn }]
}], placeholder: [{
  type: _,
  args: [{ transform: jT }]
}], placeholderConfig: [{
  type: _
}], src: [{
  type: _
}], srcset: [{
  type: _
}] } });
function fH(e) {
  let t = {};
  return e.breakpoints && (t.breakpoints = e.breakpoints.sort((n, r) => n - r)), Object.assign({}, Ig, e, t);
}
function hH(e) {
  if (e.src)
    throw new v(2950, `${de(e.ngSrc)} both \`src\` and \`ngSrc\` have been set. Supplying both of these attributes breaks lazy loading. The NgOptimizedImage directive sets \`src\` itself based on the value of \`ngSrc\`. To fix this, please remove the \`src\` attribute.`);
}
function pH(e) {
  if (e.srcset)
    throw new v(2951, `${de(e.ngSrc)} both \`srcset\` and \`ngSrcset\` have been set. Supplying both of these attributes breaks lazy loading. The NgOptimizedImage directive sets \`srcset\` itself based on the value of \`ngSrcset\`. To fix this, please remove the \`srcset\` attribute.`);
}
function gH(e) {
  let t = e.ngSrc.trim();
  if (t.startsWith("data:"))
    throw t.length > AE && (t = t.substring(0, AE) + "..."), new v(2952, `${de(e.ngSrc, !1)} \`ngSrc\` is a Base64-encoded string (${t}). NgOptimizedImage does not support Base64-encoded strings. To fix this, disable the NgOptimizedImage directive for this element by removing \`ngSrc\` and using a standard \`src\` attribute instead.`);
}
function mH(e) {
  let t = e.sizes;
  if (t != null && t.match(/((\)|,)\s|^)\d+px/))
    throw new v(2952, `${de(e.ngSrc, !1)} \`sizes\` was set to a string including pixel values. For automatic \`srcset\` generation, \`sizes\` must only include responsive values, such as \`sizes="50vw"\` or \`sizes="(min-width: 768px) 50vw, 100vw"\`. To fix this, modify the \`sizes\` attribute, or provide your own \`ngSrcset\` value directly.`);
}
function yH(e, t) {
  vH(e), DH(e, t), EH(e);
}
function vH(e) {
  if (e.placeholderConfig && !e.placeholder)
    throw new v(2952, `${de(e.ngSrc, !1)} \`placeholderConfig\` options were provided for an image that does not use the \`placeholder\` attribute, and will have no effect.`);
}
function DH(e, t) {
  if (e.placeholder === !0 && t === ea)
    throw new v(2963, `${de(e.ngSrc)} the \`placeholder\` attribute is set to true but no image loader is configured (i.e. the default one is being used), which would result in the same image being used for the primary image and its placeholder. To fix this, provide a loader or remove the \`placeholder\` attribute from the image.`);
}
function EH(e) {
  if (e.placeholder && typeof e.placeholder == "string" && e.placeholder.startsWith("data:")) {
    if (e.placeholder.length > NE)
      throw new v(2965, `${de(e.ngSrc)} the \`placeholder\` attribute is set to a data URL which is longer than ${NE} characters. This is strongly discouraged, as large inline placeholders directly increase the bundle size of Angular and hurt page load performance. To fix this, generate a smaller data URL placeholder.`);
    e.placeholder.length > xE && console.warn(fe(2965, `${de(e.ngSrc)} the \`placeholder\` attribute is set to a data URL which is longer than ${xE} characters. This is discouraged, as large inline placeholders directly increase the bundle size of Angular and hurt page load performance. For better loading performance, generate a smaller data URL placeholder.`));
  }
}
function CH(e) {
  const t = e.ngSrc.trim();
  if (t.startsWith("blob:"))
    throw new v(2952, `${de(e.ngSrc)} \`ngSrc\` was set to a blob URL (${t}). Blob URLs are not supported by the NgOptimizedImage directive. To fix this, disable the NgOptimizedImage directive for this element by removing \`ngSrc\` and using a regular \`src\` attribute instead.`);
}
function kT(e, t, n) {
  const r = typeof n == "string", o = r && n.trim() === "";
  if (!r || o)
    throw new v(2952, `${de(e.ngSrc)} \`${t}\` has an invalid value (\`${n}\`). To fix this, change the value to a non-empty string.`);
}
function IH(e, t) {
  if (t == null)
    return;
  kT(e, "ngSrcset", t);
  const n = t, r = FT.test(n), o = sH.test(n);
  if (o && bH(e, n), !(r || o))
    throw new v(2952, `${de(e.ngSrc)} \`ngSrcset\` has an invalid value (\`${t}\`). To fix this, supply \`ngSrcset\` using a comma-separated list of one or more width descriptors (e.g. "100w, 200w") or density descriptors (e.g. "1x, 2x").`);
}
function bH(e, t) {
  if (!t.split(",").every((r) => r === "" || parseFloat(r) <= Gf))
    throw new v(2952, `${de(e.ngSrc)} the \`ngSrcset\` contains an unsupported image density:\`${t}\`. NgOptimizedImage generally recommends a max image density of ${Ma}x but supports image densities up to ${Gf}x. The human eye cannot distinguish between image densities greater than ${Ma}x - which makes them unnecessary for most use cases. Images that will be pinch-zoomed are typically the primary use case for ${Gf}x images. Please remove the high density descriptor and try again.`);
}
function wH(e, t) {
  let n;
  return t === "width" || t === "height" ? n = `Changing \`${t}\` may result in different attribute value applied to the underlying image element and cause layout shifts on a page.` : n = `Changing the \`${t}\` would have no effect on the underlying image element, because the resource loading has already occurred.`, new v(2953, `${de(e.ngSrc)} \`${t}\` was updated after initialization. The NgOptimizedImage directive will not react to this input change. ${n} To fix this, either switch \`${t}\` to a static value or wrap the image element in an *ngIf that is gated on the necessary value.`);
}
function _H(e, t, n) {
  n.forEach((r) => {
    if (t.hasOwnProperty(r) && !t[r].isFirstChange())
      throw r === "ngSrc" && (e = { ngSrc: t[r].previousValue }), wH(e, r);
  });
}
function FE(e, t, n) {
  const r = typeof t == "number" && t > 0, o = typeof t == "string" && /^\d+$/.test(t.trim()) && parseInt(t) > 0;
  if (!r && !o)
    throw new v(2952, `${de(e.ngSrc)} \`${n}\` has an invalid value. To fix this, provide \`${n}\` as a number greater than 0.`);
}
function MH(e, t, n) {
  const r = () => {
    o(), s();
    const i = window.getComputedStyle(t);
    let a = parseFloat(i.getPropertyValue("width")), c = parseFloat(i.getPropertyValue("height"));
    if (i.getPropertyValue("box-sizing") === "border-box") {
      const R = i.getPropertyValue("padding-top"), Q = i.getPropertyValue("padding-right"), Se = i.getPropertyValue("padding-bottom"), be = i.getPropertyValue("padding-left");
      a -= parseFloat(Q) + parseFloat(be), c -= parseFloat(R) + parseFloat(Se);
    }
    const l = a / c, d = a !== 0 && c !== 0, f = t.naturalWidth, h = t.naturalHeight, p = f / h, g = e.width, D = e.height, E = g / D, m = Math.abs(E - p) > OE, T = d && Math.abs(p - l) > OE;
    if (m)
      console.warn(fe(2952, `${de(e.ngSrc)} the aspect ratio of the image does not match the aspect ratio indicated by the width and height attributes. 
Intrinsic image size: ${f}w x ${h}h (aspect-ratio: ${wu(p)}). 
Supplied width and height attributes: ${g}w x ${D}h (aspect-ratio: ${wu(E)}). 
To fix this, update the width and height attributes.`));
    else if (T)
      console.warn(fe(2952, `${de(e.ngSrc)} the aspect ratio of the rendered image does not match the image's intrinsic aspect ratio. 
Intrinsic image size: ${f}w x ${h}h (aspect-ratio: ${wu(p)}). 
Rendered image size: ${a}w x ${c}h (aspect-ratio: ${wu(l)}). 
This issue can occur if "width" and "height" attributes are added to an image without updating the corresponding image styling. To fix this, adjust image styling. In most cases, adding "height: auto" or "width: auto" to the image styling will fix this issue.`));
    else if (!e.ngSrcset && d) {
      const R = Ma * a, Q = Ma * c, Se = f - R >= PE, be = h - Q >= PE;
      (Se || be) && console.warn(fe(2960, `${de(e.ngSrc)} the intrinsic image is significantly larger than necessary. 
Rendered image size: ${a}w x ${c}h. 
Intrinsic image size: ${f}w x ${h}h. 
Recommended intrinsic image size: ${R}w x ${Q}h. 
Note: Recommended intrinsic image size is calculated assuming a maximum DPR of ${Ma}. To improve loading time, resize the image or consider using the "ngSrcset" and "sizes" attributes.`));
    }
  }, o = n.listen(t, "load", r), s = n.listen(t, "error", () => {
    o(), s();
  });
  tv(t, r);
}
function SH(e) {
  let t = [];
  if (e.width === void 0 && t.push("width"), e.height === void 0 && t.push("height"), t.length > 0)
    throw new v(2954, `${de(e.ngSrc)} these required attributes are missing: ${t.map((n) => `"${n}"`).join(", ")}. Including "width" and "height" attributes will prevent image-related layout shifts. To fix this, include "width" and "height" attributes on the image tag or turn on "fill" mode with the \`fill\` attribute.`);
}
function TH(e) {
  if (e.width || e.height)
    throw new v(2952, `${de(e.ngSrc)} the attributes \`height\` and/or \`width\` are present along with the \`fill\` attribute. Because \`fill\` mode causes an image to fill its containing element, the size attributes have no effect and should be removed.`);
}
function AH(e, t, n) {
  const r = () => {
    o(), s();
    const i = t.clientHeight;
    e.fill && i === 0 && console.warn(fe(2952, `${de(e.ngSrc)} the height of the fill-mode image is zero. This is likely because the containing element does not have the CSS 'position' property set to one of the following: "relative", "fixed", or "absolute". To fix this problem, make sure the container element has the CSS 'position' property defined and the height of the element is not zero.`));
  }, o = n.listen(t, "load", r), s = n.listen(t, "error", () => {
    o(), s();
  });
  tv(t, r);
}
function OH(e) {
  if (e.loading && e.priority)
    throw new v(2952, `${de(e.ngSrc)} the \`loading\` attribute was used on an image that was marked "priority". Setting \`loading\` on priority images is not allowed because these images will always be eagerly loaded. To fix this, remove the “loading” attribute from the priority image.`);
  const t = ["auto", "eager", "lazy"];
  if (typeof e.loading == "string" && !t.includes(e.loading))
    throw new v(2952, `${de(e.ngSrc)} the \`loading\` attribute has an invalid value (\`${e.loading}\`). To fix this, provide a valid value ("lazy", "eager", or "auto").`);
}
function PH(e, t) {
  if (t === ea) {
    let n = "";
    for (const r of dH)
      if (r.testUrl(e)) {
        n = r.name;
        break;
      }
    n && console.warn(fe(2962, `NgOptimizedImage: It looks like your images may be hosted on the ${n} CDN, but your app is not using Angular's built-in loader for that CDN. We recommend switching to use the built-in by calling \`provide${n}Loader()\` in your \`providers\` and passing it your instance's base URL. If you don't want to use the built-in loader, define a custom loader function using IMAGE_LOADER to silence this warning.`));
  }
}
function xH(e, t) {
  e.ngSrcset && t === ea && console.warn(fe(2963, `${de(e.ngSrc)} the \`ngSrcset\` attribute is present but no image loader is configured (i.e. the default one is being used), which would result in the same image being used for all configured sizes. To fix this, provide a loader or remove the \`ngSrcset\` attribute from the image.`));
}
function NH(e, t) {
  e.loaderParams && t === ea && console.warn(fe(2963, `${de(e.ngSrc)} the \`loaderParams\` attribute is present but no image loader is configured (i.e. the default one is being used), which means that the loaderParams data will not be consumed and will not affect the URL. To fix this, provide a custom loader or remove the \`loaderParams\` attribute from the image.`));
}
async function RH(e) {
  oa === 0 ? (oa++, await Yd(e), oa > RE && console.warn(fe(2966, `NgOptimizedImage: The "priority" attribute is set to true more than ${RE} times (${oa} times). Marking too many images as "high" priority can hurt your application's LCP (https://web.dev/lcp). "Priority" should only be set on the image expected to be the page's LCP element.`))) : oa++;
}
function FH(e, t) {
  const n = window.getComputedStyle(t);
  let r = parseFloat(n.getPropertyValue("width")), o = parseFloat(n.getPropertyValue("height"));
  (r > Wf || o > Wf) && console.warn(fe(2967, `${de(e.ngSrc)} it uses a placeholder image, but at least one of the dimensions attribute (height or width) exceeds the limit of ${Wf}px. To fix this, use a smaller image as a placeholder.`));
}
function tv(e, t) {
  e.complete && e.naturalWidth && t();
}
function wu(e) {
  return Number.isInteger(e) ? e : e.toFixed(2);
}
function LT(e) {
  return typeof e == "string" ? e : mn(e);
}
function jT(e) {
  return typeof e == "string" && e !== "true" && e !== "false" && e !== "" ? e : Wn(e);
}
var kH = Object.defineProperty, LH = Object.getOwnPropertyDescriptor, $T = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? LH(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && kH(t, n, o), o;
};
let Di = class {
  constructor() {
    S(this, "html");
  }
};
$T([
  _()
], Di.prototype, "html", 2);
Di = $T([
  Y({
    selector: "HtmlView, htmlview",
    standalone: !0,
    changeDetection: V.OnPush,
    imports: [dn],
    template: `
		<div class="ns-htmlview" *ngIf="html; else projected" [innerHTML]="html"></div>
		<ng-template #projected><div class="ns-htmlview"><ng-content></ng-content></div></ng-template>
	`,
    styles: [
      `
			.ns-htmlview {
				display: block;
			}
		`
    ]
  })
], Di);
var jH = Object.defineProperty, $H = Object.getOwnPropertyDescriptor, nv = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? $H(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && jH(t, n, o), o;
};
let So = class {
  constructor() {
    S(this, "src");
    S(this, "stretch");
  }
};
nv([
  _({ required: !0 })
], So.prototype, "src", 2);
nv([
  _()
], So.prototype, "stretch", 2);
So = nv([
  Y({
    selector: "Image, image",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<img class="ns-image" [src]="src" />',
    styles: [
      `
			.ns-image {
				display: block;
				max-width: 100%;
				height: auto;
			}
		`
    ]
  })
], So);
var BH = Object.defineProperty, HH = Object.getOwnPropertyDescriptor, BT = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? HH(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && BH(t, n, o), o;
};
let Ei = class {
  constructor() {
    S(this, "src");
  }
};
BT([
  _({ required: !0 })
], Ei.prototype, "src", 2);
Ei = BT([
  Y({
    selector: "ImageCacheIt, imagecacheit",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<img class="ns-imagecacheit" [src]="src" />',
    styles: [
      `
			.ns-imagecacheit {
				display: block;
				max-width: 100%;
				height: auto;
			}
		`
    ]
  })
], Ei);
var UH = Object.defineProperty, VH = Object.getOwnPropertyDescriptor, HT = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? VH(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && UH(t, n, o), o;
};
let Ci = class {
  constructor() {
    S(this, "text");
  }
};
HT([
  _()
], Ci.prototype, "text", 2);
Ci = HT([
  Y({
    selector: "Label, label",
    standalone: !0,
    changeDetection: V.OnPush,
    imports: [dn],
    template: `
		<span class="ns-label">
			<ng-container *ngIf="text === undefined || text === null || text === ''; else textTpl">
				<ng-content></ng-content>
			</ng-container>
			<ng-template #textTpl>{{ text }}</ng-template>
		</span>
	`,
    styles: [
      `
			.ns-label {
				display: inline-block;
			}
		`
    ]
  })
], Ci);
var zH = Object.defineProperty, GH = Object.getOwnPropertyDescriptor, ru = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? GH(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && zH(t, n, o), o;
};
let On = class {
  constructor() {
    S(this, "items", []);
    S(this, "selectedIndex");
    S(this, "selectedIndexChange", new ne());
    S(this, "change", new ne());
  }
  onChange(e) {
    const t = Number(e.target.value);
    this.selectedIndexChange.emit(t), this.change.emit(t);
  }
};
ru([
  _({ required: !0 })
], On.prototype, "items", 2);
ru([
  _()
], On.prototype, "selectedIndex", 2);
ru([
  Me()
], On.prototype, "selectedIndexChange", 2);
ru([
  Me()
], On.prototype, "change", 2);
On = ru([
  Y({
    selector: "ListPicker, listpicker",
    standalone: !0,
    changeDetection: V.OnPush,
    imports: [dn],
    template: `
		<select class="ns-listpicker" [value]="selectedIndex ?? 0" (change)="onChange($event)">
			<option *ngFor="let item of items; let i = index" [value]="i">{{ item }}</option>
		</select>
	`,
    styles: [
      `
			.ns-listpicker {
				padding: 6px 8px;
			}
		`
    ]
  })
], On);
var WH = Object.getOwnPropertyDescriptor, ZH = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? WH(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
};
let mc = class {
};
mc = ZH([
  Y({
    selector: "ListView, listview",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<ul class="ns-listview"><ng-content></ng-content></ul>',
    styles: [
      `
			.ns-listview {
				list-style: none;
				margin: 0;
				padding: 0;
			}
			.ns-listview > li {
				padding: 8px 12px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.1);
			}
		`
    ]
  })
], mc);
var qH = Object.defineProperty, QH = Object.getOwnPropertyDescriptor, rv = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? QH(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && qH(t, n, o), o;
};
let To = class {
  constructor() {
    S(this, "text");
    S(this, "tap", new ne());
  }
  onClick(e) {
    var t, n;
    this.tap.emit(e), !((t = this.tap.observers) != null && t.length) && (n = window == null ? void 0 : window.history) != null && n.back && window.history.back();
  }
};
rv([
  _()
], To.prototype, "text", 2);
rv([
  Me()
], To.prototype, "tap", 2);
To = rv([
  Y({
    selector: "NavigationButton, navigationbutton",
    standalone: !0,
    changeDetection: V.OnPush,
    imports: [dn],
    template: `
		<button class="ns-navbutton" (click)="onClick($event)">
			<ng-content></ng-content>
			<ng-container *ngIf="text">{{ text }}</ng-container>
		</button>
	`,
    styles: [
      `
			.ns-navbutton {
				background: transparent;
				border: none;
				color: inherit;
				cursor: pointer;
				padding: 8px;
			}
		`
    ]
  })
], To);
var YH = Object.getOwnPropertyDescriptor, KH = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? YH(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
};
let yc = class {
};
yc = KH([
  Y({
    selector: "Page, page",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<div class="ns-page"><ng-content></ng-content></div>',
    styles: [
      `
			.ns-page {
				top: 0;
				left: 0;
				position: absolute;
				width: 100%;
				min-height: 100%;
				padding: 0px;
			}
		`
    ]
  })
], yc);
var JH = Object.getOwnPropertyDescriptor, XH = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? JH(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
};
let vc = class {
};
vc = XH([
  Y({
    selector: "Placeholder, placeholder",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<div class="ns-placeholder"><ng-content></ng-content></div>',
    styles: [
      `
			.ns-placeholder {
				display: contents;
			}
		`
    ]
  })
], vc);
var e8 = Object.defineProperty, t8 = Object.getOwnPropertyDescriptor, ov = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? t8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && e8(t, n, o), o;
};
let Ao = class {
  constructor() {
    S(this, "value");
    S(this, "max");
  }
};
ov([
  _()
], Ao.prototype, "value", 2);
ov([
  _()
], Ao.prototype, "max", 2);
Ao = ov([
  Y({
    selector: "Progress, progress[nsProgress], ns-progress",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<progress class="ns-progress" [value]="value ?? null" [max]="max ?? null"></progress>',
    styles: [
      `
			.ns-progress {
				width: 100%;
			}
		`
    ]
  })
], Ao);
var n8 = Object.getOwnPropertyDescriptor, r8 = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? n8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
};
let Dc = class {
};
Dc = r8([
  Y({
    selector: "RootLayout, rootlayout",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<div class="ns-root"><ng-content></ng-content></div>',
    styles: [
      `
			.ns-root {
				position: relative;
				width: 100%;
				height: 100%;
				display: block;
			}
		`
    ]
  })
], Dc);
var o8 = Object.getOwnPropertyDescriptor, s8 = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? o8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
};
let Ec = class {
};
Ec = s8([
  Y({
    selector: "ScrollView, scrollview",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<div class="ns-scroll"><ng-content></ng-content></div>',
    styles: [
      `
			.ns-scroll {
				overflow: auto;
				max-height: 100%;
			}
		`
    ]
  })
], Ec);
var i8 = Object.defineProperty, a8 = Object.getOwnPropertyDescriptor, tf = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? a8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && i8(t, n, o), o;
};
let ur = class {
  constructor() {
    S(this, "text");
    S(this, "textChange", new ne());
    S(this, "submit", new ne());
  }
  onInput(e) {
    this.textChange.emit(e.target.value);
  }
  onSubmit(e) {
    this.submit.emit(e.target.value);
  }
};
tf([
  _()
], ur.prototype, "text", 2);
tf([
  Me()
], ur.prototype, "textChange", 2);
tf([
  Me()
], ur.prototype, "submit", 2);
ur = tf([
  Y({
    selector: "SearchBar, searchbar",
    standalone: !0,
    changeDetection: V.OnPush,
    template: `
		<div class="ns-searchbar">
			<input type="search" [value]="text ?? ''" (input)="onInput($event)" (keyup.enter)="onSubmit($event)" />
		</div>
	`,
    styles: [
      `
			.ns-searchbar input {
				width: 100%;
				padding: 6px 8px;
			}
		`
    ]
  })
], ur);
var c8 = Object.defineProperty, u8 = Object.getOwnPropertyDescriptor, sv = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? u8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && c8(t, n, o), o;
}, l8 = (e, t) => (n, r) => t(n, r, e);
let lr = class {
  constructor(e) {
    S(this, "title");
    this.parent = e;
  }
  get display() {
    return this.parent ? this.parent.isActive(this) ? "block" : "none" : "block";
  }
};
sv([
  _({ required: !0 })
], lr.prototype, "title", 2);
sv([
  Ry("style.display")
], lr.prototype, "display", 1);
lr = sv([
  Y({
    selector: "SegmentedBarItem, segmentedbaritem",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<div class="ns-segmentedbar-item"><ng-content></ng-content></div>',
    styles: [
      `
			.ns-segmentedbar-item {
				display: block;
			}
		`
    ]
  }),
  l8(0, Ot())
], lr);
var d8 = Object.defineProperty, f8 = Object.getOwnPropertyDescriptor, ta = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? f8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && d8(t, n, o), o;
};
let fn = class {
  constructor() {
    S(this, "items");
    S(this, "selectedIndex");
    S(this, "selectedIndexChange", new ne());
    S(this, "change", new ne());
    S(this, "contentItems");
    S(this, "currentIndex", 0);
    S(this, "displayItems", []);
  }
  ngAfterContentInit() {
    var e;
    this.currentIndex = typeof this.selectedIndex == "number" ? this.selectedIndex : 0, this.refreshItems(), (e = this.contentItems) == null || e.changes.subscribe(() => this.refreshItems());
  }
  select(e) {
    this.currentIndex = e, this.selectedIndexChange.emit(e), this.change.emit(e);
  }
  isActive(e) {
    var r;
    const n = (((r = this.contentItems) == null ? void 0 : r.toArray()) ?? []).indexOf(e);
    return n < 0 ? !0 : n === this.currentIndex;
  }
  refreshItems() {
    var e;
    if (this.items && this.items.length) {
      this.displayItems = this.items;
      return;
    }
    this.displayItems = (((e = this.contentItems) == null ? void 0 : e.toArray()) ?? []).map((t) => t.title);
  }
};
ta([
  _()
], fn.prototype, "items", 2);
ta([
  _()
], fn.prototype, "selectedIndex", 2);
ta([
  Me()
], fn.prototype, "selectedIndexChange", 2);
ta([
  Me()
], fn.prototype, "change", 2);
ta([
  Dm(lr)
], fn.prototype, "contentItems", 2);
fn = ta([
  Y({
    selector: "SegmentedBar, segmentedbar",
    standalone: !0,
    changeDetection: V.OnPush,
    imports: [dn],
    template: `
		<div class="ns-segmentedbar">
			<div class="ns-segmentedbar-header">
				<button
					*ngFor="let t of displayItems; let i = index"
					class="ns-segment"
					[class.active]="i === currentIndex"
					(click)="select(i)"
				>
					{{ t }}
				</button>
			</div>
			<div class="ns-segmentedbar-body"><ng-content></ng-content></div>
		</div>
	`,
    styles: [
      `
			.ns-segmentedbar {
				display: block;
				color: inherit;
			}
			.ns-segmentedbar-header {
				display: flex;
				gap: 8px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.3);
				padding-bottom: 8px;
			}
			.ns-segment {
				background: transparent;
				border: none;
				color: #fff;
				padding: 8px 12px;
				cursor: pointer;
				opacity: 0.95;
			}
			.ns-segment.active {
				opacity: 1;
				border-bottom: 2px solid currentColor;
			}
			.ns-segmentedbar-body {
				padding-top: 12px;
			}
		`
    ]
  })
], fn);
var h8 = Object.defineProperty, p8 = Object.getOwnPropertyDescriptor, Uo = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? p8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && h8(t, n, o), o;
};
let Zt = class {
  constructor() {
    S(this, "value");
    S(this, "min");
    S(this, "max");
    S(this, "step");
    S(this, "valueChange", new ne());
    S(this, "change", new ne());
  }
  onInput(e) {
    const t = Number(e.target.value);
    this.valueChange.emit(t), this.change.emit(t);
  }
};
Uo([
  _()
], Zt.prototype, "value", 2);
Uo([
  _()
], Zt.prototype, "min", 2);
Uo([
  _()
], Zt.prototype, "max", 2);
Uo([
  _()
], Zt.prototype, "step", 2);
Uo([
  Me()
], Zt.prototype, "valueChange", 2);
Uo([
  Me()
], Zt.prototype, "change", 2);
Zt = Uo([
  Y({
    selector: "Slider, slider",
    standalone: !0,
    changeDetection: V.OnPush,
    template: `
		<input
			class="ns-slider"
			type="range"
			[min]="min ?? 0"
			[max]="max ?? 100"
			[step]="step ?? 1"
			[value]="value ?? 0"
			(input)="onInput($event)"
		/>
	`,
    styles: [
      `
			.ns-slider {
				width: 100%;
			}
		`
    ]
  })
], Zt);
var g8 = Object.getOwnPropertyDescriptor, m8 = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? g8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
};
let Cc = class {
};
Cc = m8([
  Y({
    selector: "StackLayout, stacklayout",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<div class="ns-stack"><ng-content></ng-content></div>',
    styles: [
      `
			.ns-stack {
				display: flex;
				flex-direction: column;
			}
		`
    ]
  })
], Cc);
var y8 = Object.defineProperty, v8 = Object.getOwnPropertyDescriptor, nf = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? v8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && y8(t, n, o), o;
};
let dr = class {
  constructor() {
    S(this, "checked");
    S(this, "checkedChange", new ne());
    S(this, "change", new ne());
  }
  onChange(e) {
    const t = e.target.checked;
    this.checkedChange.emit(t), this.change.emit(t);
  }
};
nf([
  _()
], dr.prototype, "checked", 2);
nf([
  Me()
], dr.prototype, "checkedChange", 2);
nf([
  Me()
], dr.prototype, "change", 2);
dr = nf([
  Y({
    selector: "Switch, switch",
    standalone: !0,
    changeDetection: V.OnPush,
    template: `
		<label class="ns-switch">
			<input type="checkbox" [checked]="checked ?? false" (change)="onChange($event)" />
			<span class="track"><span class="thumb"></span></span>
		</label>
	`,
    styles: [
      `
			.ns-switch {
				display: inline-flex;
				align-items: center;
				cursor: pointer;
			}
			.ns-switch input {
				display: none;
			}
			.ns-switch .track {
				width: 40px;
				height: 22px;
				background: rgba(255, 255, 255, 0.3);
				border-radius: 11px;
				position: relative;
				transition: background 0.2s;
			}
			.ns-switch .thumb {
				width: 18px;
				height: 18px;
				background: rgb(0, 255, 174);
				border-radius: 50%;
				position: absolute;
				top: 2px;
				left: 2px;
				transition: left 0.2s;
			}
			.ns-switch input:checked + .track {
				background: currentColor;
				opacity: 0.5;
			}
			.ns-switch input:checked + .track .thumb {
				left: 20px;
			}
		`
    ]
  })
], dr);
var D8 = Object.defineProperty, E8 = Object.getOwnPropertyDescriptor, iv = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? E8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && D8(t, n, o), o;
}, C8 = (e, t) => (n, r) => t(n, r, e);
let fr = class {
  constructor(e) {
    S(this, "title");
    this.parent = e;
  }
  get display() {
    return this.parent ? this.parent.isActive(this) ? "block" : "none" : "block";
  }
};
iv([
  _({ required: !0 })
], fr.prototype, "title", 2);
iv([
  Ry("style.display")
], fr.prototype, "display", 1);
fr = iv([
  Y({
    selector: "TabViewItem, tabviewitem",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<div class="ns-tabview-item"><ng-content></ng-content></div>',
    styles: [
      `
			.ns-tabview-item {
				display: block;
			}
		`
    ]
  }),
  C8(0, Ot())
], fr);
var I8 = Object.defineProperty, b8 = Object.getOwnPropertyDescriptor, av = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? b8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && I8(t, n, o), o;
};
let Oo = class {
  constructor() {
    S(this, "selectedIndex");
    S(this, "contentItems");
    S(this, "items", []);
    S(this, "currentIndex", 0);
  }
  ngAfterContentInit() {
    var e;
    this.currentIndex = typeof this.selectedIndex == "number" ? this.selectedIndex : 0, this.refreshItems(), (e = this.contentItems) == null || e.changes.subscribe(() => this.refreshItems());
  }
  select(e) {
    this.currentIndex = e;
  }
  isActive(e) {
    var r;
    const n = (((r = this.contentItems) == null ? void 0 : r.toArray()) ?? []).indexOf(e);
    return n < 0 ? !0 : n === this.currentIndex;
  }
  refreshItems() {
    var e;
    this.items = (((e = this.contentItems) == null ? void 0 : e.toArray()) ?? []).map((t) => t.title);
  }
};
av([
  _()
], Oo.prototype, "selectedIndex", 2);
av([
  Dm(fr)
], Oo.prototype, "contentItems", 2);
Oo = av([
  Y({
    selector: "TabView, tabview",
    standalone: !0,
    changeDetection: V.OnPush,
    imports: [dn],
    template: `
		<div class="ns-tabview">
			<div class="ns-tabview-header">
				<button
					*ngFor="let title of items; let i = index"
					class="ns-tabview-tab"
					[class.active]="i === currentIndex"
					(click)="select(i)"
				>
					{{ title }}
				</button>
			</div>
			<div class="ns-tabview-body"><ng-content></ng-content></div>
		</div>
	`,
    styles: [
      `
			.ns-tabview {
				display: block;
			}
			.ns-tabview-header {
				display: flex;
				gap: 8px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.2);
				padding-bottom: 8px;
			}
			.ns-tabview-tab {
				background: transparent;
				border: none;
				color: inherit;
				padding: 8px 12px;
				cursor: pointer;
				opacity: 0.7;
			}
			.ns-tabview-tab.active {
				opacity: 1;
				border-bottom: 2px solid currentColor;
			}
			.ns-tabview-body {
				padding-top: 12px;
			}
		`
    ]
  })
], Oo);
var w8 = Object.defineProperty, _8 = Object.getOwnPropertyDescriptor, rf = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? _8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && w8(t, n, o), o;
};
let hr = class {
  constructor() {
    S(this, "text");
    S(this, "textChange", new ne());
    S(this, "submit", new ne());
  }
  onInput(e) {
    this.textChange.emit(e.target.value);
  }
  onSubmit(e) {
    this.submit.emit(e.target.value);
  }
};
rf([
  _()
], hr.prototype, "text", 2);
rf([
  Me()
], hr.prototype, "textChange", 2);
rf([
  Me()
], hr.prototype, "submit", 2);
hr = rf([
  Y({
    selector: "TextField, textfield",
    standalone: !0,
    changeDetection: V.OnPush,
    template: `
		<input
			class="ns-textfield"
			type="text"
			[value]="text ?? ''"
			(input)="onInput($event)"
			(keyup.enter)="onSubmit($event)"
		/>
	`,
    styles: [
      `
			.ns-textfield {
				width: 100%;
				padding: 6px 8px;
			}
		`
    ]
  })
], hr);
var M8 = Object.defineProperty, S8 = Object.getOwnPropertyDescriptor, of = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? S8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && M8(t, n, o), o;
};
let pr = class {
  constructor() {
    S(this, "text");
    S(this, "textChange", new ne());
    S(this, "change", new ne());
  }
  onInput(e) {
    const t = e.target.value;
    this.textChange.emit(t), this.change.emit(t);
  }
};
of([
  _()
], pr.prototype, "text", 2);
of([
  Me()
], pr.prototype, "textChange", 2);
of([
  Me()
], pr.prototype, "change", 2);
pr = of([
  Y({
    selector: "TextView, textview",
    standalone: !0,
    changeDetection: V.OnPush,
    template: `<textarea class="ns-textview" [value]="text ?? ''" (input)="onInput($event)"></textarea>`,
    styles: [
      `
			.ns-textview {
				width: 100%;
				min-height: 80px;
				padding: 6px 8px;
			}
		`
    ]
  })
], pr);
var T8 = Object.defineProperty, A8 = Object.getOwnPropertyDescriptor, sf = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? A8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && T8(t, n, o), o;
};
let gr = class {
  constructor() {
    S(this, "time");
    S(this, "timeChange", new ne());
    S(this, "change", new ne());
  }
  onInput(e) {
    const t = e.target.value;
    this.timeChange.emit(t), this.change.emit(t);
  }
};
sf([
  _()
], gr.prototype, "time", 2);
sf([
  Me()
], gr.prototype, "timeChange", 2);
sf([
  Me()
], gr.prototype, "change", 2);
gr = sf([
  Y({
    selector: "TimePicker, timepicker",
    standalone: !0,
    changeDetection: V.OnPush,
    template: `<input class="ns-timepicker" type="time" [value]="time ?? ''" (input)="onInput($event)" />`,
    styles: [
      `
			.ns-timepicker {
				padding: 6px 8px;
			}
		`
    ]
  })
], gr);
var O8 = Object.defineProperty, P8 = Object.getOwnPropertyDescriptor, UT = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? P8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && O8(t, n, o), o;
};
let Ii = class {
  constructor() {
    S(this, "src");
  }
};
UT([
  _()
], Ii.prototype, "src", 2);
Ii = UT([
  Y({
    selector: "WebView, webview",
    standalone: !0,
    changeDetection: V.OnPush,
    imports: [dn],
    template: `
		<iframe class="ns-webview" *ngIf="src; else projected" [src]="src"></iframe>
		<ng-template #projected><div class="ns-webview"><ng-content></ng-content></div></ng-template>
	`,
    styles: [
      `
			.ns-webview {
				width: 100%;
				height: 100%;
				border: none;
			}
		`
    ]
  })
], Ii);
var x8 = Object.getOwnPropertyDescriptor, N8 = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? x8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
};
let Ic = class {
};
Ic = N8([
  Y({
    selector: "WrapLayout, wraplayout",
    standalone: !0,
    changeDetection: V.OnPush,
    template: '<div class="ns-wrap"><ng-content></ng-content></div>',
    styles: [
      `
			.ns-wrap {
				display: flex;
				flex-wrap: wrap;
			}
		`
    ]
  })
], Ic);
var R8 = Object.defineProperty, F8 = Object.getOwnPropertyDescriptor, cv = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? F8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && R8(t, n, o), o;
};
let bi = class {
  constructor(e, t) {
    S(this, "left");
    S(this, "top");
    this.el = e, this.renderer = t;
  }
  ngOnChanges() {
    const e = this.el.nativeElement;
    this.renderer.setStyle(e, "position", "absolute"), this.left !== void 0 && this.renderer.setStyle(e, "left", this.toCssPx(this.left)), this.top !== void 0 && this.renderer.setStyle(e, "top", this.toCssPx(this.top));
  }
  toCssPx(e) {
    if (typeof e == "number") return `${e}px`;
    const t = e.trim();
    return t ? /^-?\d+(\.\d+)?$/.test(t) ? `${t}px` : t : "0px";
  }
};
cv([
  _()
], bi.prototype, "left", 2);
cv([
  _()
], bi.prototype, "top", 2);
bi = cv([
  Je({
    selector: "[left],[top]",
    standalone: !0
  })
], bi);
var k8 = Object.defineProperty, L8 = Object.getOwnPropertyDescriptor, ou = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? L8(t, n) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && k8(t, n, o), o;
};
let mr = class {
  constructor(e, t) {
    S(this, "row");
    S(this, "col");
    S(this, "rowSpan");
    S(this, "colSpan");
    this.el = e, this.renderer = t;
  }
  ngOnChanges() {
    const e = this.el.nativeElement, t = this.toNumberOrUndefined(this.row), n = this.toNumberOrUndefined(this.col), r = this.toNumberOrUndefined(this.rowSpan), o = this.toNumberOrUndefined(this.colSpan);
    if (t !== void 0) {
      const s = t + 1, i = r && r > 0 ? r : 1;
      this.renderer.setStyle(e, "grid-row", `${s} / span ${i}`);
    }
    if (n !== void 0) {
      const s = n + 1, i = o && o > 0 ? o : 1;
      this.renderer.setStyle(e, "grid-column", `${s} / span ${i}`);
    }
  }
  toNumberOrUndefined(e) {
    if (e == null) return;
    const t = typeof e == "number" ? e : Number(e);
    return Number.isFinite(t) ? t : void 0;
  }
};
ou([
  _()
], mr.prototype, "row", 2);
ou([
  _()
], mr.prototype, "col", 2);
ou([
  _()
], mr.prototype, "rowSpan", 2);
ou([
  _()
], mr.prototype, "colSpan", 2);
mr = ou([
  Je({
    selector: "[row],[col],[rowSpan],[colSpan]",
    standalone: !0
  })
], mr);
const j8 = {
  AbsoluteLayout: cc,
  ActionBar: uc,
  ActionItem: qs,
  ActivityIndicator: Qs,
  Button: _o,
  DatePicker: or,
  DockLayout: lc,
  FlexboxLayout: dc,
  Frame: fc,
  GridLayout: Mo,
  HtmlView: Di,
  Image: So,
  ImageCacheIt: Ei,
  Label: Ci,
  ListPicker: On,
  ListView: mc,
  NavigationButton: To,
  Page: yc,
  Placeholder: vc,
  Progress: Ao,
  RootLayout: Dc,
  ScrollView: Ec,
  SearchBar: ur,
  SegmentedBar: fn,
  SegmentedBarItem: lr,
  Slider: Zt,
  StackLayout: Cc,
  Switch: dr,
  TabView: Oo,
  TabViewItem: fr,
  TextField: hr,
  TextView: pr,
  TimePicker: gr,
  WebView: Ii,
  WrapLayout: Ic
}, $8 = [
  cc,
  uc,
  qs,
  Qs,
  _o,
  or,
  lc,
  dc,
  fc,
  Mo,
  Di,
  So,
  Ei,
  Ci,
  On,
  mc,
  To,
  yc,
  vc,
  Ao,
  Dc,
  Ec,
  ur,
  fn,
  lr,
  Zt,
  Cc,
  dr,
  Oo,
  fr,
  hr,
  pr,
  gr,
  Ii,
  Ic,
  bi,
  mr
], B8 = o1, W8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get AbsoluteLayoutComponent() {
    return cc;
  },
  get ActionBarComponent() {
    return uc;
  },
  get ActionItemComponent() {
    return qs;
  },
  get ActivityIndicatorComponent() {
    return Qs;
  },
  get ButtonComponent() {
    return _o;
  },
  get DatePickerComponent() {
    return or;
  },
  get DockLayoutComponent() {
    return lc;
  },
  get FlexboxLayoutComponent() {
    return dc;
  },
  get FrameComponent() {
    return fc;
  },
  get GridLayoutComponent() {
    return Mo;
  },
  get HtmlViewComponent() {
    return Di;
  },
  get ImageCacheItComponent() {
    return Ei;
  },
  get ImageComponent() {
    return So;
  },
  get LabelComponent() {
    return Ci;
  },
  get ListPickerComponent() {
    return On;
  },
  get ListViewComponent() {
    return mc;
  },
  get NavigationButtonComponent() {
    return To;
  },
  get NsAbsolutePositionDirective() {
    return bi;
  },
  get NsGridPositionDirective() {
    return mr;
  },
  get PageComponent() {
    return yc;
  },
  get PlaceholderComponent() {
    return vc;
  },
  get ProgressComponent() {
    return Ao;
  },
  get RootLayoutComponent() {
    return Dc;
  },
  get ScrollViewComponent() {
    return Ec;
  },
  get SearchBarComponent() {
    return ur;
  },
  get SegmentedBarComponent() {
    return fn;
  },
  get SegmentedBarItemComponent() {
    return lr;
  },
  get SliderComponent() {
    return Zt;
  },
  get StackLayoutComponent() {
    return Cc;
  },
  get SwitchComponent() {
    return dr;
  },
  get TabViewComponent() {
    return Oo;
  },
  get TabViewItemComponent() {
    return fr;
  },
  get TextFieldComponent() {
    return hr;
  },
  get TextViewComponent() {
    return pr;
  },
  get TimePickerComponent() {
    return gr;
  },
  get WebViewComponent() {
    return Ii;
  },
  get WrapLayoutComponent() {
    return Ic;
  },
  action: UE,
  alert: jE,
  components: j8,
  composables: B8,
  confirm: $E,
  imports: $8,
  login: HE,
  prompt: BE,
  ref: bc,
  useActionBar: VE,
  useFrame: zE,
  usePage: GE
}, Symbol.toStringTag, { value: "Module" })), Z8 = {
  install(e) {
    Object.entries(kE || {}).forEach(([t, n]) => {
      e.component(t, n);
    }), e.config.globalProperties.$ns = LE || {};
  }
};
export {
  W8 as angular,
  V8 as core,
  Z8 as default
};
