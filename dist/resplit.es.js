import nt, { forwardRef as Re, Children as be, isValidElement as Ae, createElement as Me, cloneElement as ot, Fragment as Ot, createContext as it, useContext as at, useEffect as $t, useLayoutEffect as jt, useId as At, useRef as Qe, useState as zt, useCallback as O, useMemo as et } from "react";
var Ye = { exports: {} }, he = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function kt() {
  if (tt)
    return he;
  tt = 1;
  var a = nt, s = Symbol.for("react.element"), c = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, w = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A($, R, T) {
    var g, f = {}, F = null, y = null;
    T !== void 0 && (F = "" + T), R.key !== void 0 && (F = "" + R.key), R.ref !== void 0 && (y = R.ref);
    for (g in R)
      h.call(R, g) && !x.hasOwnProperty(g) && (f[g] = R[g]);
    if ($ && $.defaultProps)
      for (g in R = $.defaultProps, R)
        f[g] === void 0 && (f[g] = R[g]);
    return { $$typeof: s, type: $, key: F, ref: y, props: f, _owner: w.current };
  }
  return he.Fragment = c, he.jsx = A, he.jsxs = A, he;
}
var Ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rt;
function Dt() {
  return rt || (rt = 1, process.env.NODE_ENV !== "production" && function() {
    var a = nt, s = Symbol.for("react.element"), c = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), $ = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), U = Symbol.iterator, G = "@@iterator";
    function Y(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = U && e[U] || e[G];
      return typeof t == "function" ? t : null;
    }
    var k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          n[l - 1] = arguments[l];
        ee("error", e, n);
      }
    }
    function ee(e, t, n) {
      {
        var l = k.ReactDebugCurrentFrame, E = l.getStackAddendum();
        E !== "" && (t += "%s", n = n.concat([E]));
        var b = n.map(function(m) {
          return String(m);
        });
        b.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var K = !1, Se = !1, te = !1, re = !1, ce = !1, N;
    N = Symbol.for("react.module.reference");
    function oe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === x || ce || e === w || e === T || e === g || re || e === y || K || Se || te || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === f || e.$$typeof === A || e.$$typeof === $ || e.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === N || e.getModuleId !== void 0));
    }
    function fe(e, t, n) {
      var l = e.displayName;
      if (l)
        return l;
      var E = t.displayName || t.name || "";
      return E !== "" ? n + "(" + E + ")" : n;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case c:
          return "Portal";
        case x:
          return "Profiler";
        case w:
          return "StrictMode";
        case T:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $:
            var t = e;
            return de(t) + ".Consumer";
          case A:
            var n = e;
            return de(n._context) + ".Provider";
          case R:
            return fe(e, e.render, "ForwardRef");
          case f:
            var l = e.displayName || null;
            return l !== null ? l : L(e.type) || "Memo";
          case F: {
            var E = e, b = E._payload, m = E._init;
            try {
              return L(m(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, Z = 0, pe, _e, Ce, we, o, r, i;
    function d() {
    }
    d.__reactDisabledLog = !0;
    function p() {
      {
        if (Z === 0) {
          pe = console.log, _e = console.info, Ce = console.warn, we = console.error, o = console.group, r = console.groupCollapsed, i = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: d,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Z++;
      }
    }
    function u() {
      {
        if (Z--, Z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, e, {
              value: pe
            }),
            info: B({}, e, {
              value: _e
            }),
            warn: B({}, e, {
              value: Ce
            }),
            error: B({}, e, {
              value: we
            }),
            group: B({}, e, {
              value: o
            }),
            groupCollapsed: B({}, e, {
              value: r
            }),
            groupEnd: B({}, e, {
              value: i
            })
          });
        }
        Z < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var S = k.ReactCurrentDispatcher, z;
    function V(e, t, n) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (E) {
            var l = E.stack.trim().match(/\n( *(at )?)/);
            z = l && l[1] || "";
          }
        return `
` + z + e;
      }
    }
    var _ = !1, H;
    {
      var xe = typeof WeakMap == "function" ? WeakMap : Map;
      H = new xe();
    }
    function X(e, t) {
      if (!e || _)
        return "";
      {
        var n = H.get(e);
        if (n !== void 0)
          return n;
      }
      var l;
      _ = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = S.current, S.current = null, p();
      try {
        if (t) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (J) {
              l = J;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (J) {
              l = J;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            l = J;
          }
          e();
        }
      } catch (J) {
        if (J && l && typeof J.stack == "string") {
          for (var v = J.stack.split(`
`), D = l.stack.split(`
`), C = v.length - 1, P = D.length - 1; C >= 1 && P >= 0 && v[C] !== D[P]; )
            P--;
          for (; C >= 1 && P >= 0; C--, P--)
            if (v[C] !== D[P]) {
              if (C !== 1 || P !== 1)
                do
                  if (C--, P--, P < 0 || v[C] !== D[P]) {
                    var M = `
` + v[C].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, M), M;
                  }
                while (C >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        _ = !1, S.current = b, u(), Error.prepareStackTrace = E;
      }
      var ue = e ? e.displayName || e.name : "", Xe = ue ? V(ue) : "";
      return typeof e == "function" && H.set(e, Xe), Xe;
    }
    function I(e, t, n) {
      return X(e, !1);
    }
    function ie(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ne(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return X(e, ie(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case T:
          return V("Suspense");
        case g:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            return I(e.render);
          case f:
            return ne(e.type, t, n);
          case F: {
            var l = e, E = l._payload, b = l._init;
            try {
              return ne(b(E), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, Te = {}, Pe = k.ReactDebugCurrentFrame;
    function ae(e) {
      if (e) {
        var t = e._owner, n = ne(e.type, e._source, t ? t.type : null);
        Pe.setExtraStackFrame(n);
      } else
        Pe.setExtraStackFrame(null);
    }
    function De(e, t, n, l, E) {
      {
        var b = Function.call.bind(q);
        for (var m in e)
          if (b(e, m)) {
            var v = void 0;
            try {
              if (typeof e[m] != "function") {
                var D = Error((l || "React class") + ": " + n + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw D.name = "Invariant Violation", D;
              }
              v = e[m](t, m, l, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              v = C;
            }
            v && !(v instanceof Error) && (ae(E), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", n, m, typeof v), ae(null)), v instanceof Error && !(v.message in Te) && (Te[v.message] = !0, ae(E), j("Failed %s type: %s", n, v.message), ae(null));
          }
      }
    }
    var Oe = Array.isArray;
    function se(e) {
      return Oe(e);
    }
    function $e(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function je(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function me(e) {
      if (je(e))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $e(e)), ve(e);
    }
    var W = k.ReactCurrentOwner, pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ue, Be, Fe;
    Fe = {};
    function vt(e) {
      if (q.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function mt(e) {
      if (q.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ht(e, t) {
      if (typeof e.ref == "string" && W.current && t && W.current.stateNode !== t) {
        var n = L(W.current.type);
        Fe[n] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(W.current.type), e.ref), Fe[n] = !0);
      }
    }
    function Et(e, t) {
      {
        var n = function() {
          Ue || (Ue = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function yt(e, t) {
      {
        var n = function() {
          Be || (Be = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var bt = function(e, t, n, l, E, b, m) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: m,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function gt(e, t, n, l, E) {
      {
        var b, m = {}, v = null, D = null;
        n !== void 0 && (me(n), v = "" + n), mt(t) && (me(t.key), v = "" + t.key), vt(t) && (D = t.ref, ht(t, E));
        for (b in t)
          q.call(t, b) && !pt.hasOwnProperty(b) && (m[b] = t[b]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (b in C)
            m[b] === void 0 && (m[b] = C[b]);
        }
        if (v || D) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && Et(m, P), D && yt(m, P);
        }
        return bt(e, v, D, E, l, W.current, m);
      }
    }
    var Ie = k.ReactCurrentOwner, qe = k.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var t = e._owner, n = ne(e.type, e._source, t ? t.type : null);
        qe.setExtraStackFrame(n);
      } else
        qe.setExtraStackFrame(null);
    }
    var Ne;
    Ne = !1;
    function Le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Ge() {
      {
        if (Ie.current) {
          var e = L(Ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Rt(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var He = {};
    function St(e) {
      {
        var t = Ge();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Je(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = St(t);
        if (He[n])
          return;
        He[n] = !0;
        var l = "";
        e && e._owner && e._owner !== Ie.current && (l = " It was passed a child from " + L(e._owner.type) + "."), le(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, l), le(null);
      }
    }
    function Ke(e, t) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var n = 0; n < e.length; n++) {
            var l = e[n];
            Le(l) && Je(l, t);
          }
        else if (Le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = Y(e);
          if (typeof E == "function" && E !== e.entries)
            for (var b = E.call(e), m; !(m = b.next()).done; )
              Le(m.value) && Je(m.value, t);
        }
      }
    }
    function _t(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === f))
          n = t.propTypes;
        else
          return;
        if (n) {
          var l = L(t);
          De(n, e.props, "prop", l, e);
        } else if (t.PropTypes !== void 0 && !Ne) {
          Ne = !0;
          var E = L(t);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ct(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var l = t[n];
          if (l !== "children" && l !== "key") {
            le(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), le(null);
            break;
          }
        }
        e.ref !== null && (le(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), le(null));
      }
    }
    function Ze(e, t, n, l, E, b) {
      {
        var m = oe(e);
        if (!m) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var D = Rt(E);
          D ? v += D : v += Ge();
          var C;
          e === null ? C = "null" : se(e) ? C = "array" : e !== void 0 && e.$$typeof === s ? (C = "<" + (L(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, v);
        }
        var P = gt(e, t, n, E, b);
        if (P == null)
          return P;
        if (m) {
          var M = t.children;
          if (M !== void 0)
            if (l)
              if (se(M)) {
                for (var ue = 0; ue < M.length; ue++)
                  Ke(M[ue], e);
                Object.freeze && Object.freeze(M);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(M, e);
        }
        return e === h ? Ct(P) : _t(P), P;
      }
    }
    function wt(e, t, n) {
      return Ze(e, t, n, !0);
    }
    function xt(e, t, n) {
      return Ze(e, t, n, !1);
    }
    var Tt = xt, Pt = wt;
    Ee.Fragment = h, Ee.jsx = Tt, Ee.jsxs = Pt;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Ye.exports = kt() : Ye.exports = Dt();
var Ft = Ye.exports;
const ge = Ft.jsx;
function ze() {
  return ze = Object.assign ? Object.assign.bind() : function(a) {
    for (var s = 1; s < arguments.length; s++) {
      var c = arguments[s];
      for (var h in c)
        Object.prototype.hasOwnProperty.call(c, h) && (a[h] = c[h]);
    }
    return a;
  }, ze.apply(this, arguments);
}
function It(a, s) {
  typeof a == "function" ? a(s) : a != null && (a.current = s);
}
function Nt(...a) {
  return (s) => a.forEach(
    (c) => It(c, s)
  );
}
const ke = /* @__PURE__ */ Re((a, s) => {
  const { children: c, ...h } = a, w = be.toArray(c), x = w.find(Mt);
  if (x) {
    const A = x.props.children, $ = w.map((R) => R === x ? be.count(A) > 1 ? be.only(null) : /* @__PURE__ */ Ae(A) ? A.props.children : null : R);
    return /* @__PURE__ */ Me(Ve, ze({}, h, {
      ref: s
    }), /* @__PURE__ */ Ae(A) ? /* @__PURE__ */ ot(A, void 0, $) : null);
  }
  return /* @__PURE__ */ Me(Ve, ze({}, h, {
    ref: s
  }), c);
});
ke.displayName = "Slot";
const Ve = /* @__PURE__ */ Re((a, s) => {
  const { children: c, ...h } = a;
  return /* @__PURE__ */ Ae(c) ? /* @__PURE__ */ ot(c, {
    ...Yt(h, c.props),
    ref: s ? Nt(s, c.ref) : c.ref
  }) : be.count(c) > 1 ? be.only(null) : null;
});
Ve.displayName = "SlotClone";
const Lt = ({ children: a }) => /* @__PURE__ */ Me(Ot, null, a);
function Mt(a) {
  return /* @__PURE__ */ Ae(a) && a.type === Lt;
}
function Yt(a, s) {
  const c = {
    ...s
  };
  for (const h in s) {
    const w = a[h], x = s[h];
    /^on[A-Z]/.test(h) ? w && x ? c[h] = (...$) => {
      x(...$), w(...$);
    } : w && (c[h] = w) : h === "style" ? c[h] = {
      ...w,
      ...x
    } : h === "className" && (c[h] = [
      w,
      x
    ].filter(Boolean).join(" "));
  }
  return {
    ...a,
    ...c
  };
}
const st = it(void 0), Xt = () => {
  const a = at(st);
  if (!a)
    throw new Error("useResplitContext must be used within a ResplitRoot");
  return a;
}, lt = it(void 0), ut = () => {
  const a = at(lt);
  if (!a)
    throw new Error("useRootContext must be used within an RootContext.Provider");
  return a;
}, Vt = {
  horizontal: "gridTemplateColumns",
  vertical: "gridTemplateRows"
}, ct = {
  horizontal: "col-resize",
  vertical: "row-resize"
}, Wt = "10px", Ut = "0fr", Bt = "0fr", Q = (a) => Number(a.replace("fr", "")), ft = (a) => Number(a.replace("px", "")), qt = (a, s) => `${a / s}fr`, dt = (a) => a.includes("px"), ye = (a, s) => dt(a) ? qt(ft(a), s) : a, We = typeof window > "u" ? $t : jt;
function Gt(a) {
  return (s) => {
    a.forEach((c) => {
      typeof c == "function" ? c(s) : c != null && (c.current = s);
    });
  };
}
const Ht = Re(function({ direction: s = "horizontal", children: c, style: h, asChild: w = !1, ...x }, A) {
  const $ = At(), R = w ? ke : "div", T = Qe(null), g = Qe(null), [f, F] = zt({}), y = O(
    (o) => {
      var r;
      return (r = g.current) == null ? void 0 : r.querySelector(`:scope > [data-resplit-order="${o}"]`);
    },
    []
  ), U = O(
    (o) => {
      var r;
      return (r = g.current) == null ? void 0 : r.style.getPropertyValue(`--resplit-${o}`);
    },
    []
  ), G = O(
    (o) => {
      const r = U(o);
      return r ? dt(r) ? ft(r) : Q(r) : 0;
    },
    [U]
  ), Y = O(
    (o, r) => {
      var d;
      if ((d = g.current) == null || d.style.setProperty(`--resplit-${o}`, r), f[o].type === "pane") {
        const p = y(o + 1);
        p == null || p.setAttribute(
          "aria-valuenow",
          String(Q(r).toFixed(2))
        );
      }
    },
    [f, y]
  ), k = O(
    (o) => {
      var r;
      return ((r = y(o)) == null ? void 0 : r.getAttribute("data-resplit-is-min")) === "true";
    },
    [y]
  ), j = O(
    (o) => {
      var r;
      return ((r = y(o)) == null ? void 0 : r.getAttribute("data-resplit-default-collapsed")) === "true";
    },
    [y]
  ), ee = O(
    (o, r) => {
      var i;
      return (i = y(o)) == null ? void 0 : i.setAttribute("data-resplit-is-min", String(r));
    },
    [y]
  ), K = O(
    (o) => {
      var r;
      return ((r = y(o)) == null ? void 0 : r.getAttribute("data-resplit-is-collapsed")) === "true";
    },
    [y]
  ), Se = O(
    (o) => {
      var r;
      return ((r = y(o)) == null ? void 0 : r.getAttribute("data-resplit-is-collapsed")) === "false";
    },
    [y]
  ), te = O(
    (o, r) => {
      var i;
      return (i = y(o)) == null ? void 0 : i.setAttribute("data-resplit-is-collapsed", String(r));
    },
    [y]
  ), re = O(
    () => {
      var o, r;
      return (s === "horizontal" ? (o = g.current) == null ? void 0 : o.offsetWidth : (r = g.current) == null ? void 0 : r.offsetHeight) || 0;
    },
    [s]
  ), ce = O(
    (o, r) => {
      let i = o, d = f[i];
      for (; i >= 0 && i < Object.values(f).length; ) {
        const p = f[i];
        if (p.type === "splitter" || k(i) && !p.collapsible || k(i) && p.collapsible && K(i))
          i += r, d = null;
        else {
          d = p;
          break;
        }
      }
      return { index: i, pane: d };
    },
    [f, K, k]
  ), N = O(
    (o, r) => {
      var Oe, se, $e, je, ve, me;
      const i = r > 0, d = r < 0, { index: p, pane: u } = d ? ce(o - 1, -1) : { index: o - 1, pane: f[o - 1] }, { index: S, pane: z } = i ? ce(o + 1, 1) : { index: o + 1, pane: f[o + 1] };
      if (!u || !z)
        return;
      const V = re();
      let _ = G(p) + r;
      const H = Q(ye(u.minSize, V)), xe = _ <= H, X = !!u.collapsible && _ <= H / 1.5;
      let I = G(S) - r;
      const ie = Q(ye(z.minSize, V)), ne = I <= ie, q = !!z.collapsible && I <= ie / 1.5;
      if (X || q) {
        if (X) {
          const W = Q(
            ye(u.collapsedSize, V)
          );
          I = I + _ - W, _ = W;
        }
        if (q) {
          const W = Q(
            ye(z.collapsedSize, V)
          );
          _ = _ + I - W, I = W;
        }
      } else
        xe && (I = I + (_ - H), _ = H), ne && (_ = _ + (I - ie), I = ie);
      Y(p, `${_}fr`), ee(p, xe);
      const Te = Se(p) && X, Pe = K(p) && !X;
      te(p, X), (Oe = u == null ? void 0 : u.onResize) == null || Oe.call(u, `${_}fr`), Te ? (se = u == null ? void 0 : u.onCollapse) == null || se.call(u, `${_}fr`) : Pe && (($e = u == null ? void 0 : u.onExpand) == null || $e.call(u, `${_}fr`)), Y(S, `${I}fr`), ee(S, ne);
      const ae = Se(S) && q, De = K(S) && !q;
      te(S, q), (je = z == null ? void 0 : z.onResize) == null || je.call(z, `${I}fr`), ae ? (ve = u == null ? void 0 : u.onCollapse) == null || ve.call(u, `${_}fr`) : De && ((me = u == null ? void 0 : u.onExpand) == null || me.call(u, `${_}fr`));
    },
    [
      f,
      ce,
      G,
      re,
      Y,
      ee,
      te
    ]
  ), oe = O(
    (o) => {
      if (T.current === null)
        return;
      const r = y(T.current);
      if (!r)
        return;
      const i = Object.entries(f).reduce(
        (z, [V, _]) => z + (_.type === "splitter" ? G(Number(V)) : 0),
        0
      ), d = re() - i, p = r.getBoundingClientRect(), S = (s === "horizontal" ? o.clientX - p.left : o.clientY - p.top) / d;
      S && N(T.current, S);
    },
    [f, s, y, G, re, N]
  ), fe = O(() => {
    var d, p, u, S;
    const o = T.current;
    if (o === null)
      return;
    (d = g.current) == null || d.setAttribute("data-resplit-resizing", "false"), o !== null && ((p = y(o)) == null || p.setAttribute("data-resplit-active", "false"));
    const r = f[o - 1];
    r.type === "pane" && ((u = r.onResizeEnd) == null || u.call(r, U(o - 1)));
    const i = f[o + 1];
    i.type === "pane" && ((S = i.onResizeEnd) == null || S.call(i, U(o + 1))), T.current = null, document.documentElement.style.cursor = "", document.documentElement.style.pointerEvents = "", document.documentElement.style.userSelect = "", window.removeEventListener("mouseup", fe), window.removeEventListener("mousemove", oe);
  }, [f, y, U, oe]), de = O(
    (o) => () => {
      var d, p, u, S;
      T.current = o, (d = g.current) == null || d.setAttribute("data-resplit-resizing", "true"), T.current !== null && ((p = y(T.current)) == null || p.setAttribute("data-resplit-active", "true"));
      const r = f[o - 1];
      r.type === "pane" && ((u = r.onResizeStart) == null || u.call(r));
      const i = f[o + 1];
      i.type === "pane" && ((S = i.onResizeStart) == null || S.call(i)), document.documentElement.style.cursor = ct[s], document.documentElement.style.pointerEvents = "none", document.documentElement.style.userSelect = "none", window.addEventListener("mouseup", fe), window.addEventListener("mousemove", oe);
    },
    [s, f, y, fe, oe]
  ), L = O(
    (o) => (r) => {
      const i = s === "horizontal", d = s === "vertical";
      if (r.key === "ArrowLeft" && i || r.key === "ArrowUp" && d)
        N(o, -0.01);
      else if (r.key === "ArrowRight" && i || r.key === "ArrowDown" && d)
        N(o, 0.01);
      else if (r.key === "Home")
        N(o, -1);
      else if (r.key === "End")
        N(o, 1);
      else if (r.key === "Enter")
        if (k(o - 1)) {
          const p = f[o - 1].initialSize || "1fr";
          N(o, Q(p));
        } else
          N(o, -1);
    },
    [s, f, N, k]
  ), B = O((o, r) => {
    F((i) => ({
      ...i,
      [o]: {
        type: "pane",
        ...r
      }
    }));
  }, []), Z = O((o, r) => {
    F((i) => ({
      ...i,
      [o]: {
        type: "splitter",
        ...r
      }
    }));
  }, []), pe = O(
    (o) => {
      try {
        o.forEach((r, i) => {
          var u, S, z;
          const d = i * 2;
          Y(d, r), ee(d, ((u = f[d]) == null ? void 0 : u.minSize) === r), te(d, ((S = f[d]) == null ? void 0 : S.collapsedSize) === r);
          const p = f[d];
          (p == null ? void 0 : p.type) === "pane" && ((z = p == null ? void 0 : p.onResize) == null || z.call(p, r));
        });
      } catch {
        throw new Error("Error while setting pane sizes!");
      }
    },
    [f, Y, ee, te]
  ), _e = Object.keys(f).length;
  We(() => {
    const o = Object.values(f).filter((r) => r.type === "pane").length;
    Object.keys(f).forEach((r) => {
      const i = Number(r), d = f[i];
      if (d.type === "pane") {
        let p;
        if (j(i) && (d != null && d.collapsedSize))
          p = ye(d == null ? void 0 : d.collapsedSize, re());
        else {
          let u = `${1 / o}fr`;
          d.initialSize !== void 0 && Q(d.initialSize) < 1 && (u = d.initialSize), p = k(i) ? "0fr" : u;
        }
        Y(i, p);
      } else
        Y(i, d.size);
    });
  }, [_e]);
  const Ce = et(
    () => ({
      id: $,
      direction: s,
      registerPane: B,
      registerSplitter: Z,
      handleSplitterMouseDown: de,
      handleSplitterKeyDown: L
    }),
    [$, s, B, Z, de, L]
  ), we = et(
    () => ({
      isPaneMinSize: k,
      isPaneCollapsed: K,
      setPaneSizes: pe
    }),
    [k, K, pe]
  );
  return /* @__PURE__ */ ge(lt.Provider, { value: Ce, children: /* @__PURE__ */ ge(st.Provider, { value: we, children: /* @__PURE__ */ ge(
    R,
    {
      ref: Gt([g, A]),
      "data-resplit-direction": s,
      "data-resplit-resizing": !1,
      style: {
        display: "grid",
        overflow: "hidden",
        [Vt[s]]: Object.keys(f).reduce(
          (o, r) => {
            const i = `minmax(0, var(--resplit-${r}))`;
            return o ? `${o} ${i}` : `${i}`;
          },
          ""
        ),
        ...h
      },
      ...x,
      children: c
    }
  ) }) });
}), Jt = Re(function({
  children: s,
  order: c,
  minSize: h = Ut,
  collapsible: w = !1,
  defaultCollapsed: x = !1,
  collapsedSize: A = Bt,
  initialSize: $,
  asChild: R = !1,
  onResize: T,
  onResizeStart: g,
  onResizeEnd: f,
  onCollapse: F,
  onExpand: y,
  ...U
}, G) {
  const Y = R ? ke : "div", { id: k, registerPane: j } = ut();
  return We(() => {
    j(String(c), {
      minSize: h,
      initialSize: $,
      collapsedSize: A,
      collapsible: w,
      onResize: T,
      onResizeStart: g,
      onResizeEnd: f,
      onCollapse: F,
      onExpand: y
    });
  }, []), /* @__PURE__ */ ge(
    Y,
    {
      id: `resplit-${k}-${c}`,
      "data-resplit-order": c,
      "data-resplit-is-min": !1,
      "data-resplit-is-collapsed": x,
      "data-resplit-default-collapsed": x,
      ref: G,
      ...U,
      children: s
    }
  );
}), Kt = Re(function({ children: s, order: c, size: h = Wt, asChild: w = !1, ...x }, A) {
  const $ = w ? ke : "div", { id: R, direction: T, registerSplitter: g, handleSplitterMouseDown: f, handleSplitterKeyDown: F } = ut();
  return We(() => {
    g(String(c), { size: h });
  }, []), // eslint-disable-next-line jsx-a11y/role-supports-aria-props, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ ge(
    $,
    {
      role: "separator",
      tabIndex: 0,
      "aria-orientation": T,
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": 1,
      "aria-controls": `resplit-${R}-${c - 1}`,
      "data-resplit-order": c,
      "data-resplit-active": !1,
      style: { cursor: ct[T] },
      onMouseDown: f(c),
      onKeyDown: F(c),
      ref: A,
      ...x,
      children: s
    }
  );
}), Qt = {
  Root: Ht,
  Pane: Jt,
  Splitter: Kt
};
export {
  Qt as Resplit,
  Jt as ResplitPane,
  Ht as ResplitRoot,
  Kt as ResplitSplitter,
  Xt as useResplitContext
};
