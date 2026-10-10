import { R as React__default, r as reactExports } from "./vendor-react-CCnVVUMc.js";
function u() {
  return (u = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
    }
    return e;
  }).apply(this, arguments);
}
function c(e, r) {
  if (null == e) return {};
  var n, t, o = {}, a = Object.keys(e);
  for (t = 0; t < a.length; t++) r.indexOf(n = a[t]) >= 0 || (o[n] = e[n]);
  return o;
}
function i(e) {
  var n = reactExports.useRef(e), t = reactExports.useRef(function(e2) {
    n.current && n.current(e2);
  });
  return n.current = e, t.current;
}
var s = function(e, r, n) {
  return void 0 === r && (r = 0), void 0 === n && (n = 1), e > n ? n : e < r ? r : e;
}, f = function(e) {
  return "touches" in e;
}, v = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, d = function(e, r, n) {
  var t = e.getBoundingClientRect(), o = f(r) ? (function(e2, r2) {
    for (var n2 = 0; n2 < e2.length; n2++) if (e2[n2].identifier === r2) return e2[n2];
    return e2[0];
  })(r.touches, n) : r;
  return { left: s((o.pageX - (t.left + v(e).pageXOffset)) / t.width), top: s((o.pageY - (t.top + v(e).pageYOffset)) / t.height) };
}, h = function(e) {
  !f(e) && e.preventDefault();
}, g = React__default.memo(function(o) {
  var a = o.onMove, l = o.onKey, s2 = o.onEnd, g2 = c(o, ["onMove", "onKey", "onEnd"]), m2 = reactExports.useRef(null), p2 = i(a), b2 = i(l), _ = i(s2), E2 = reactExports.useRef(null), C2 = reactExports.useRef(false), x = reactExports.useMemo(function() {
    var e = function(e2) {
      h(e2), (f(e2) ? e2.touches.length > 0 : e2.buttons > 0) && m2.current ? p2(d(m2.current, e2, E2.current)) : (n(false), _());
    }, r = function() {
      n(false), _();
    };
    function n(n2) {
      var t = C2.current, o2 = v(m2.current), a2 = n2 ? o2.addEventListener : o2.removeEventListener;
      a2(t ? "touchmove" : "mousemove", e), a2(t ? "touchend" : "mouseup", r);
    }
    return [function(e2) {
      var r2 = e2.nativeEvent, t = m2.current;
      if (t && (h(r2), !(function(e3, r3) {
        return r3 && !f(e3);
      })(r2, C2.current) && t)) {
        if (f(r2)) {
          C2.current = true;
          var o2 = r2.changedTouches || [];
          o2.length && (E2.current = o2[0].identifier);
        }
        t.focus(), p2(d(t, r2, E2.current)), n(true);
      }
    }, function(e2) {
      var r2 = e2.which || e2.keyCode;
      r2 < 37 || r2 > 40 || (e2.preventDefault(), b2({ left: 39 === r2 ? 0.05 : 37 === r2 ? -0.05 : 0, top: 40 === r2 ? 0.05 : 38 === r2 ? -0.05 : 0 }));
    }, function(e2) {
      var r2 = e2.which || e2.keyCode;
      r2 >= 37 && r2 <= 40 && _();
    }, n];
  }, [b2, p2, _]), H = x[0], M = x[1], N = x[2], w2 = x[3];
  return reactExports.useEffect(function() {
    return w2;
  }, [w2]), React__default.createElement("div", u({}, g2, { onTouchStart: H, onMouseDown: H, className: "react-colorful__interactive", ref: m2, onKeyDown: M, onKeyUp: N, tabIndex: 0, role: "slider" }));
}), m = function(e) {
  return e.filter(Boolean).join(" ");
}, p = function(r) {
  var n = r.color, t = r.left, o = r.top, a = void 0 === o ? 0.5 : o, l = m(["react-colorful__pointer", r.className]);
  return React__default.createElement("div", { className: l, style: { top: 100 * a + "%", left: 100 * t + "%" } }, React__default.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: n } }));
}, b = function(e, r, n) {
  return void 0 === r && (r = 0), void 0 === n && (n = Math.pow(10, r)), Math.round(n * e) / n;
}, E = function(e) {
  return L(C(e));
}, C = function(e) {
  return "#" === e[0] && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: 4 === e.length ? b(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: 8 === e.length ? b(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, w = function(e) {
  return D(I(e));
}, y = function(e) {
  var r = e.s, n = e.v, t = e.a, o = (200 - r) * n / 100;
  return { h: b(e.h), s: b(o > 0 && o < 200 ? r * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: b(o / 2), a: b(t, 2) };
}, q = function(e) {
  var r = y(e);
  return "hsl(" + r.h + ", " + r.s + "%, " + r.l + "%)";
}, I = function(e) {
  var r = e.h, n = e.s, t = e.v, o = e.a;
  r = r / 360 * 6, n /= 100, t /= 100;
  var a = Math.floor(r), l = t * (1 - n), u2 = t * (1 - (r - a) * n), c2 = t * (1 - (1 - r + a) * n), i2 = a % 6;
  return { r: b(255 * [t, u2, l, l, c2, t][i2]), g: b(255 * [c2, t, t, u2, l, l][i2]), b: b(255 * [l, l, c2, t, t, u2][i2]), a: b(o, 2) };
}, B = function(e) {
  var r = e.toString(16);
  return r.length < 2 ? "0" + r : r;
}, D = function(e) {
  var r = e.r, n = e.g, t = e.b, o = e.a, a = o < 1 ? B(b(255 * o)) : "";
  return "#" + B(r) + B(n) + B(t) + a;
}, L = function(e) {
  var r = e.r, n = e.g, t = e.b, o = e.a, a = Math.max(r, n, t), l = a - Math.min(r, n, t), u2 = l ? a === r ? (n - t) / l : a === n ? 2 + (t - r) / l : 4 + (r - n) / l : 0;
  return { h: b(60 * (u2 < 0 ? u2 + 6 : u2)), s: b(a ? l / a * 100 : 0), v: b(a / 255 * 100), a: o };
}, S = React__default.memo(function(r) {
  var n = r.hue, t = r.onChange, o = r.onChangeEnd, a = m(["react-colorful__hue", r.className]);
  return React__default.createElement("div", { className: a }, React__default.createElement(g, { onMove: function(e) {
    t({ h: 360 * e.left });
  }, onKey: function(e) {
    t({ h: s(n + 360 * e.left, 0, 360) });
  }, onEnd: o, "aria-label": "Hue", "aria-valuenow": b(n), "aria-valuemax": "360", "aria-valuemin": "0" }, React__default.createElement(p, { className: "react-colorful__hue-pointer", left: n / 360, color: q({ h: n, s: 100, v: 100, a: 1 }) })));
}), T = React__default.memo(function(r) {
  var n = r.hsva, t = r.onChange, o = r.onChangeEnd, a = { backgroundColor: q({ h: n.h, s: 100, v: 100, a: 1 }) };
  return React__default.createElement("div", { className: "react-colorful__saturation", style: a }, React__default.createElement(g, { onMove: function(e) {
    t({ s: 100 * e.left, v: 100 - 100 * e.top });
  }, onKey: function(e) {
    t({ s: s(n.s + 100 * e.left, 0, 100), v: s(n.v - 100 * e.top, 0, 100) });
  }, onEnd: o, "aria-label": "Color", "aria-valuetext": "Saturation " + b(n.s) + "%, Brightness " + b(n.v) + "%" }, React__default.createElement(p, { className: "react-colorful__saturation-pointer", top: 1 - n.v / 100, left: n.s / 100, color: q(n) })));
}), F = function(e, r) {
  if (e === r) return true;
  for (var n in e) if (e[n] !== r[n]) return false;
  return true;
}, X = function(e, r) {
  return e.toLowerCase() === r.toLowerCase() || F(C(e), C(r));
};
function Y(e, n, l, u2) {
  var c2 = i(l), s2 = i(u2), f2 = reactExports.useState(function() {
    return e.toHsva(n);
  }), v2 = f2[0], d2 = f2[1], h2 = reactExports.useRef({ color: n, hsva: v2 }), g2 = reactExports.useRef(false);
  reactExports.useEffect(function() {
    if (!e.equal(n, h2.current.color)) {
      var r = e.toHsva(n);
      h2.current = { hsva: r, color: n }, d2(r), g2.current = false;
    }
  }, [n, e]), reactExports.useEffect(function() {
    var r;
    F(v2, h2.current.hsva) || e.equal(r = e.fromHsva(v2), h2.current.color) || (h2.current = { hsva: v2, color: r }, c2(r), g2.current = true);
  }, [v2, e, c2]);
  var m2 = reactExports.useCallback(function(e2) {
    d2(function(r) {
      return Object.assign({}, r, e2);
    });
  }, []), p2 = reactExports.useCallback(function() {
    g2.current && (g2.current = false, s2(h2.current.color));
  }, [s2]);
  return [v2, m2, p2];
}
var U = "undefined" != typeof window ? reactExports.useLayoutEffect : reactExports.useEffect, V = function() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}, G = /* @__PURE__ */ new Map(), J = function(e) {
  U(function() {
    var r = e.current ? e.current.ownerDocument : document;
    if (void 0 !== r && !G.has(r)) {
      var n = r.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, G.set(r, n);
      var t = V();
      t && n.setAttribute("nonce", t), r.head.appendChild(n);
    }
  }, []);
}, Q = function(n) {
  var t = n.className, o = n.colorModel, a = n.color, l = void 0 === a ? o.defaultColor : a, i2 = n.onChange, s2 = n.onChangeEnd, f2 = c(n, ["className", "colorModel", "color", "onChange", "onChangeEnd"]), v2 = reactExports.useRef(null);
  J(v2);
  var d2 = Y(o, l, i2, s2), h2 = d2[0], g2 = d2[1], p2 = d2[2], b2 = m(["react-colorful", t]);
  return React__default.createElement("div", u({}, f2, { ref: v2, className: b2 }), React__default.createElement(T, { hsva: h2, onChange: g2, onChangeEnd: p2 }), React__default.createElement(S, { hue: h2.h, onChange: g2, onChangeEnd: p2, className: "react-colorful__last-control" }));
}, W = { defaultColor: "000", toHsva: E, fromHsva: function(e) {
  return w({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: X }, Z = function(r) {
  return React__default.createElement(Q, u({}, r, { colorModel: W }));
}, Me = { defaultColor: { r: 0, g: 0, b: 0 }, toHsva: function(e) {
  return L({ r: e.r, g: e.g, b: e.b, a: 1 });
}, fromHsva: function(e) {
  return { r: (r = I(e)).r, g: r.g, b: r.b };
  var r;
}, equal: F }, Ne = function(r) {
  return React__default.createElement(Q, u({}, r, { colorModel: Me }));
};
export {
  Ne as N,
  Z
};
