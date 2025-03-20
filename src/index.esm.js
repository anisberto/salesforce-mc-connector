var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var src = {exports: {}};

(function (module, exports) {
  !function (e, p) {
    module.exports = p() ;
  }(commonjsGlobal, function () {

    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : {};
    function p(e) {
      return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var a = {
      exports: {}
    };
    return function (p) {
      p.exports = function () {
        var p = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
        function a(e) {
          return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
        }
        var d = {
          exports: {}
        };
        return function (e) {
          e.exports = function () {
            var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== p ? p : "undefined" != typeof self ? self : {};
            function a(e) {
              return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
            }
            var d = {
              exports: {}
            };
            return function (p) {
              p.exports = function () {
                var p = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
                function a(e) {
                  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
                }
                function d(e) {
                  if (e.__esModule) return e;
                  var p = e.default;
                  if ("function" == typeof p) {
                    var a = function e() {
                      return this instanceof e ? Reflect.construct(p, arguments, this.constructor) : p.apply(this, arguments);
                    };
                    a.prototype = p.prototype;
                  } else a = {};
                  return Object.defineProperty(a, "__esModule", {
                    value: true
                  }), Object.keys(e).forEach(function (p) {
                    var d = Object.getOwnPropertyDescriptor(e, p);
                    Object.defineProperty(a, p, d.get ? d : {
                      enumerable: true,
                      get: function () {
                        return e[p];
                      }
                    });
                  }), a;
                }
                var t,
                  i = {
                    exports: {}
                  };
                function r() {}
                function l() {
                  l.init.call(this);
                }
                function m(e) {
                  return void 0 === e._maxListeners ? l.defaultMaxListeners : e._maxListeners;
                }
                function n(e, p, a, d) {
                  var t, i, l, n;
                  if ("function" != typeof a) throw new TypeError('"listener" argument must be a function');
                  if ((i = e._events) ? (i.newListener && (e.emit("newListener", p, a.listener ? a.listener : a), i = e._events), l = i[p]) : (i = e._events = new r(), e._eventsCount = 0), l) {
                    if ("function" == typeof l ? l = i[p] = d ? [a, l] : [l, a] : d ? l.unshift(a) : l.push(a), !l.warned && (t = m(e)) && t > 0 && l.length > t) {
                      l.warned = true;
                      var o = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + p + " listeners added. Use emitter.setMaxListeners() to increase limit");
                      o.name = "MaxListenersExceededWarning", o.emitter = e, o.type = p, o.count = l.length, n = o, "function" == typeof console.warn ? console.warn(n) : console.log(n);
                    }
                  } else l = i[p] = a, ++e._eventsCount;
                  return e;
                }
                function o(e, p, a) {
                  var d = false;
                  function t() {
                    e.removeListener(p, t), d || (d = true, a.apply(e, arguments));
                  }
                  return t.listener = a, t;
                }
                function s(e) {
                  var p = this._events;
                  if (p) {
                    var a = p[e];
                    if ("function" == typeof a) return 1;
                    if (a) return a.length;
                  }
                  return 0;
                }
                function u(e, p) {
                  for (var a = new Array(p); p--;) a[p] = e[p];
                  return a;
                }
                r.prototype = Object.create(null), l.EventEmitter = l, l.usingDomains = false, l.prototype.domain = void 0, l.prototype._events = void 0, l.prototype._maxListeners = void 0, l.defaultMaxListeners = 10, l.init = function () {
                  this.domain = null, l.usingDomains && (!t.active || this instanceof t.Domain || (this.domain = t.active)), this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new r(), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
                }, l.prototype.setMaxListeners = function (e) {
                  if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
                  return this._maxListeners = e, this;
                }, l.prototype.getMaxListeners = function () {
                  return m(this);
                }, l.prototype.emit = function (e) {
                  var p,
                    a,
                    d,
                    t,
                    i,
                    r,
                    l,
                    m = "error" === e;
                  if (r = this._events) m = m && null == r.error;else if (!m) return false;
                  if (l = this.domain, m) {
                    if (p = arguments[1], !l) {
                      if (p instanceof Error) throw p;
                      var n = new Error('Uncaught, unspecified "error" event. (' + p + ")");
                      throw n.context = p, n;
                    }
                    return p || (p = new Error('Uncaught, unspecified "error" event')), p.domainEmitter = this, p.domain = l, p.domainThrown = false, l.emit("error", p), false;
                  }
                  if (!(a = r[e])) return false;
                  var o = "function" == typeof a;
                  switch (d = arguments.length) {
                    case 1:
                      !function (e, p, a) {
                        if (p) e.call(a);else for (var d = e.length, t = u(e, d), i = 0; i < d; ++i) t[i].call(a);
                      }(a, o, this);
                      break;
                    case 2:
                      !function (e, p, a, d) {
                        if (p) e.call(a, d);else for (var t = e.length, i = u(e, t), r = 0; r < t; ++r) i[r].call(a, d);
                      }(a, o, this, arguments[1]);
                      break;
                    case 3:
                      !function (e, p, a, d, t) {
                        if (p) e.call(a, d, t);else for (var i = e.length, r = u(e, i), l = 0; l < i; ++l) r[l].call(a, d, t);
                      }(a, o, this, arguments[1], arguments[2]);
                      break;
                    case 4:
                      !function (e, p, a, d, t, i) {
                        if (p) e.call(a, d, t, i);else for (var r = e.length, l = u(e, r), m = 0; m < r; ++m) l[m].call(a, d, t, i);
                      }(a, o, this, arguments[1], arguments[2], arguments[3]);
                      break;
                    default:
                      for (t = new Array(d - 1), i = 1; i < d; i++) t[i - 1] = arguments[i];
                      !function (e, p, a, d) {
                        if (p) e.apply(a, d);else for (var t = e.length, i = u(e, t), r = 0; r < t; ++r) i[r].apply(a, d);
                      }(a, o, this, t);
                  }
                  return true;
                }, l.prototype.addListener = function (e, p) {
                  return n(this, e, p, false);
                }, l.prototype.on = l.prototype.addListener, l.prototype.prependListener = function (e, p) {
                  return n(this, e, p, true);
                }, l.prototype.once = function (e, p) {
                  if ("function" != typeof p) throw new TypeError('"listener" argument must be a function');
                  return this.on(e, o(this, e, p)), this;
                }, l.prototype.prependOnceListener = function (e, p) {
                  if ("function" != typeof p) throw new TypeError('"listener" argument must be a function');
                  return this.prependListener(e, o(this, e, p)), this;
                }, l.prototype.removeListener = function (e, p) {
                  var a, d, t, i, l;
                  if ("function" != typeof p) throw new TypeError('"listener" argument must be a function');
                  if (!(d = this._events)) return this;
                  if (!(a = d[e])) return this;
                  if (a === p || a.listener && a.listener === p) 0 == --this._eventsCount ? this._events = new r() : (delete d[e], d.removeListener && this.emit("removeListener", e, a.listener || p));else if ("function" != typeof a) {
                    for (t = -1, i = a.length; i-- > 0;) if (a[i] === p || a[i].listener && a[i].listener === p) {
                      l = a[i].listener, t = i;
                      break;
                    }
                    if (t < 0) return this;
                    if (1 === a.length) {
                      if (a[0] = void 0, 0 == --this._eventsCount) return this._events = new r(), this;
                      delete d[e];
                    } else !function (e, p) {
                      for (var a = p, d = a + 1, t = e.length; d < t; a += 1, d += 1) e[a] = e[d];
                      e.pop();
                    }(a, t);
                    d.removeListener && this.emit("removeListener", e, l || p);
                  }
                  return this;
                }, l.prototype.off = function (e, p) {
                  return this.removeListener(e, p);
                }, l.prototype.removeAllListeners = function (e) {
                  var p, a;
                  if (!(a = this._events)) return this;
                  if (!a.removeListener) return 0 === arguments.length ? (this._events = new r(), this._eventsCount = 0) : a[e] && (0 == --this._eventsCount ? this._events = new r() : delete a[e]), this;
                  if (0 === arguments.length) {
                    for (var d, t = Object.keys(a), i = 0; i < t.length; ++i) "removeListener" !== (d = t[i]) && this.removeAllListeners(d);
                    return this.removeAllListeners("removeListener"), this._events = new r(), this._eventsCount = 0, this;
                  }
                  if ("function" == typeof (p = a[e])) this.removeListener(e, p);else if (p) do {
                    this.removeListener(e, p[p.length - 1]);
                  } while (p[0]);
                  return this;
                }, l.prototype.listeners = function (e) {
                  var p,
                    a = this._events;
                  return a && (p = a[e]) ? "function" == typeof p ? [p.listener || p] : function (e) {
                    for (var p = new Array(e.length), a = 0; a < p.length; ++a) p[a] = e[a].listener || e[a];
                    return p;
                  }(p) : [];
                }, l.listenerCount = function (e, p) {
                  return "function" == typeof e.listenerCount ? e.listenerCount(p) : s.call(e, p);
                }, l.prototype.listenerCount = s, l.prototype.eventNames = function () {
                  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
                };
                var h = void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                  f = [],
                  c = [],
                  v = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  w = false;
                function _() {
                  w = true;
                  for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = 0; p < 64; ++p) f[p] = e[p], c[e.charCodeAt(p)] = p;
                  c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63;
                }
                function g(e, p, a) {
                  for (var d, t, i = [], r = p; r < a; r += 3) d = (e[r] << 16) + (e[r + 1] << 8) + e[r + 2], i.push(f[(t = d) >> 18 & 63] + f[t >> 12 & 63] + f[t >> 6 & 63] + f[63 & t]);
                  return i.join("");
                }
                function b(e) {
                  var p;
                  w || _();
                  for (var a = e.length, d = a % 3, t = "", i = [], r = 16383, l = 0, m = a - d; l < m; l += r) i.push(g(e, l, l + r > m ? m : l + r));
                  return 1 === d ? (p = e[a - 1], t += f[p >> 2], t += f[p << 4 & 63], t += "==") : 2 === d && (p = (e[a - 2] << 8) + e[a - 1], t += f[p >> 10], t += f[p >> 4 & 63], t += f[p << 2 & 63], t += "="), i.push(t), i.join("");
                }
                function y(e, p, a, d, t) {
                  var i,
                    r,
                    l = 8 * t - d - 1,
                    m = (1 << l) - 1,
                    n = m >> 1,
                    o = -7,
                    s = a ? t - 1 : 0,
                    u = a ? -1 : 1,
                    h = e[p + s];
                  for (s += u, i = h & (1 << -o) - 1, h >>= -o, o += l; o > 0; i = 256 * i + e[p + s], s += u, o -= 8);
                  for (r = i & (1 << -o) - 1, i >>= -o, o += d; o > 0; r = 256 * r + e[p + s], s += u, o -= 8);
                  if (0 === i) i = 1 - n;else {
                    if (i === m) return r ? NaN : 1 / 0 * (h ? -1 : 1);
                    r += Math.pow(2, d), i -= n;
                  }
                  return (h ? -1 : 1) * r * Math.pow(2, i - d);
                }
                function N(e, p, a, d, t, i) {
                  var r,
                    l,
                    m,
                    n = 8 * i - t - 1,
                    o = (1 << n) - 1,
                    s = o >> 1,
                    u = 23 === t ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    h = d ? 0 : i - 1,
                    f = d ? 1 : -1,
                    c = p < 0 || 0 === p && 1 / p < 0 ? 1 : 0;
                  for (p = Math.abs(p), isNaN(p) || p === 1 / 0 ? (l = isNaN(p) ? 1 : 0, r = o) : (r = Math.floor(Math.log(p) / Math.LN2), p * (m = Math.pow(2, -r)) < 1 && (r--, m *= 2), (p += r + s >= 1 ? u / m : u * Math.pow(2, 1 - s)) * m >= 2 && (r++, m /= 2), r + s >= o ? (l = 0, r = o) : r + s >= 1 ? (l = (p * m - 1) * Math.pow(2, t), r += s) : (l = p * Math.pow(2, s - 1) * Math.pow(2, t), r = 0)); t >= 8; e[a + h] = 255 & l, h += f, l /= 256, t -= 8);
                  for (r = r << t | l, n += t; n > 0; e[a + h] = 255 & r, h += f, r /= 256, n -= 8);
                  e[a + h - f] |= 128 * c;
                }
                var S = {}.toString,
                  D = Array.isArray || function (e) {
                    return "[object Array]" == S.call(e);
                  };
                function T() {
                  return V.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                }
                function E(e, p) {
                  if (T() < p) throw new RangeError("Invalid typed array length");
                  return V.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(p)).__proto__ = V.prototype : (null === e && (e = new V(p)), e.length = p), e;
                }
                function V(e, p, a) {
                  if (!(V.TYPED_ARRAY_SUPPORT || this instanceof V)) return new V(e, p, a);
                  if ("number" == typeof e) {
                    if ("string" == typeof p) throw new Error("If encoding is specified then the first argument must be a string");
                    return R(this, e);
                  }
                  return A(this, e, p, a);
                }
                function A(e, p, a, d) {
                  if ("number" == typeof p) throw new TypeError('"value" argument must not be a number');
                  return "undefined" != typeof ArrayBuffer && p instanceof ArrayBuffer ? function (e, p, a, d) {
                    if (p.byteLength, a < 0 || p.byteLength < a) throw new RangeError("'offset' is out of bounds");
                    if (p.byteLength < a + (d || 0)) throw new RangeError("'length' is out of bounds");
                    return p = void 0 === a && void 0 === d ? new Uint8Array(p) : void 0 === d ? new Uint8Array(p, a) : new Uint8Array(p, a, d), V.TYPED_ARRAY_SUPPORT ? (e = p).__proto__ = V.prototype : e = x(e, p), e;
                  }(e, p, a, d) : "string" == typeof p ? function (e, p, a) {
                    if ("string" == typeof a && "" !== a || (a = "utf8"), !V.isEncoding(a)) throw new TypeError('"encoding" must be a valid string encoding');
                    var d = 0 | L(p, a),
                      t = (e = E(e, d)).write(p, a);
                    return t !== d && (e = e.slice(0, t)), e;
                  }(e, p, a) : function (e, p) {
                    if (O(p)) {
                      var a = 0 | C(p.length);
                      return 0 === (e = E(e, a)).length || p.copy(e, 0, 0, a), e;
                    }
                    if (p) {
                      if ("undefined" != typeof ArrayBuffer && p.buffer instanceof ArrayBuffer || "length" in p) return "number" != typeof p.length || (d = p.length) != d ? E(e, 0) : x(e, p);
                      if ("Buffer" === p.type && D(p.data)) return x(e, p.data);
                    }
                    var d;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                  }(e, p);
                }
                function k(e) {
                  if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                  if (e < 0) throw new RangeError('"size" argument must not be negative');
                }
                function R(e, p) {
                  if (k(p), e = E(e, p < 0 ? 0 : 0 | C(p)), !V.TYPED_ARRAY_SUPPORT) for (var a = 0; a < p; ++a) e[a] = 0;
                  return e;
                }
                function x(e, p) {
                  var a = p.length < 0 ? 0 : 0 | C(p.length);
                  e = E(e, a);
                  for (var d = 0; d < a; d += 1) e[d] = 255 & p[d];
                  return e;
                }
                function C(e) {
                  if (e >= T()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + T().toString(16) + " bytes");
                  return 0 | e;
                }
                function O(e) {
                  return !(null == e || !e._isBuffer);
                }
                function L(e, p) {
                  if (O(e)) return e.length;
                  if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                  "string" != typeof e && (e = "" + e);
                  var a = e.length;
                  if (0 === a) return 0;
                  for (var d = false;;) switch (p) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return a;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                      return le(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * a;
                    case "hex":
                      return a >>> 1;
                    case "base64":
                      return me(e).length;
                    default:
                      if (d) return le(e).length;
                      p = ("" + p).toLowerCase(), d = true;
                  }
                }
                function B(e, p, a) {
                  var d = false;
                  if ((void 0 === p || p < 0) && (p = 0), p > this.length) return "";
                  if ((void 0 === a || a > this.length) && (a = this.length), a <= 0) return "";
                  if ((a >>>= 0) <= (p >>>= 0)) return "";
                  for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                      return G(this, p, a);
                    case "utf8":
                    case "utf-8":
                      return $(this, p, a);
                    case "ascii":
                      return K(this, p, a);
                    case "latin1":
                    case "binary":
                      return W(this, p, a);
                    case "base64":
                      return H(this, p, a);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return X(this, p, a);
                    default:
                      if (d) throw new TypeError("Unknown encoding: " + e);
                      e = (e + "").toLowerCase(), d = true;
                  }
                }
                function U(e, p, a) {
                  var d = e[p];
                  e[p] = e[a], e[a] = d;
                }
                function P(e, p, a, d, t) {
                  if (0 === e.length) return -1;
                  if ("string" == typeof a ? (d = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, isNaN(a) && (a = t ? 0 : e.length - 1), a < 0 && (a = e.length + a), a >= e.length) {
                    if (t) return -1;
                    a = e.length - 1;
                  } else if (a < 0) {
                    if (!t) return -1;
                    a = 0;
                  }
                  if ("string" == typeof p && (p = V.from(p, d)), O(p)) return 0 === p.length ? -1 : z(e, p, a, d, t);
                  if ("number" == typeof p) return p &= 255, V.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? t ? Uint8Array.prototype.indexOf.call(e, p, a) : Uint8Array.prototype.lastIndexOf.call(e, p, a) : z(e, [p], a, d, t);
                  throw new TypeError("val must be string, number or Buffer");
                }
                function z(e, p, a, d, t) {
                  var i,
                    r = 1,
                    l = e.length,
                    m = p.length;
                  if (void 0 !== d && ("ucs2" === (d = String(d).toLowerCase()) || "ucs-2" === d || "utf16le" === d || "utf-16le" === d)) {
                    if (e.length < 2 || p.length < 2) return -1;
                    r = 2, l /= 2, m /= 2, a /= 2;
                  }
                  function n(e, p) {
                    return 1 === r ? e[p] : e.readUInt16BE(p * r);
                  }
                  if (t) {
                    var o = -1;
                    for (i = a; i < l; i++) if (n(e, i) === n(p, -1 === o ? 0 : i - o)) {
                      if (-1 === o && (o = i), i - o + 1 === m) return o * r;
                    } else -1 !== o && (i -= i - o), o = -1;
                  } else for (a + m > l && (a = l - m), i = a; i >= 0; i--) {
                    for (var s = true, u = 0; u < m; u++) if (n(e, i + u) !== n(p, u)) {
                      s = false;
                      break;
                    }
                    if (s) return i;
                  }
                  return -1;
                }
                function F(e, p, a, d) {
                  a = Number(a) || 0;
                  var t = e.length - a;
                  d ? (d = Number(d)) > t && (d = t) : d = t;
                  var i = p.length;
                  if (i % 2 != 0) throw new TypeError("Invalid hex string");
                  d > i / 2 && (d = i / 2);
                  for (var r = 0; r < d; ++r) {
                    var l = parseInt(p.substr(2 * r, 2), 16);
                    if (isNaN(l)) return r;
                    e[a + r] = l;
                  }
                  return r;
                }
                function I(e, p, a, d) {
                  return ne(le(p, e.length - a), e, a, d);
                }
                function M(e, p, a, d) {
                  return ne(function (e) {
                    for (var p = [], a = 0; a < e.length; ++a) p.push(255 & e.charCodeAt(a));
                    return p;
                  }(p), e, a, d);
                }
                function j(e, p, a, d) {
                  return M(e, p, a, d);
                }
                function q(e, p, a, d) {
                  return ne(me(p), e, a, d);
                }
                function Z(e, p, a, d) {
                  return ne(function (e, p) {
                    for (var a, d, t, i = [], r = 0; r < e.length && !((p -= 2) < 0); ++r) d = (a = e.charCodeAt(r)) >> 8, t = a % 256, i.push(t), i.push(d);
                    return i;
                  }(p, e.length - a), e, a, d);
                }
                function H(e, p, a) {
                  return 0 === p && a === e.length ? b(e) : b(e.slice(p, a));
                }
                function $(e, p, a) {
                  a = Math.min(e.length, a);
                  for (var d = [], t = p; t < a;) {
                    var i,
                      r,
                      l,
                      m,
                      n = e[t],
                      o = null,
                      s = n > 239 ? 4 : n > 223 ? 3 : n > 191 ? 2 : 1;
                    if (t + s <= a) switch (s) {
                      case 1:
                        n < 128 && (o = n);
                        break;
                      case 2:
                        128 == (192 & (i = e[t + 1])) && (m = (31 & n) << 6 | 63 & i) > 127 && (o = m);
                        break;
                      case 3:
                        i = e[t + 1], r = e[t + 2], 128 == (192 & i) && 128 == (192 & r) && (m = (15 & n) << 12 | (63 & i) << 6 | 63 & r) > 2047 && (m < 55296 || m > 57343) && (o = m);
                        break;
                      case 4:
                        i = e[t + 1], r = e[t + 2], l = e[t + 3], 128 == (192 & i) && 128 == (192 & r) && 128 == (192 & l) && (m = (15 & n) << 18 | (63 & i) << 12 | (63 & r) << 6 | 63 & l) > 65535 && m < 1114112 && (o = m);
                    }
                    null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, d.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), d.push(o), t += s;
                  }
                  return function (e) {
                    var p = e.length;
                    if (p <= Y) return String.fromCharCode.apply(String, e);
                    for (var a = "", d = 0; d < p;) a += String.fromCharCode.apply(String, e.slice(d, d += Y));
                    return a;
                  }(d);
                }
                V.TYPED_ARRAY_SUPPORT = void 0 === h.TYPED_ARRAY_SUPPORT || h.TYPED_ARRAY_SUPPORT, T(), V.poolSize = 8192, V._augment = function (e) {
                  return e.__proto__ = V.prototype, e;
                }, V.from = function (e, p, a) {
                  return A(null, e, p, a);
                }, V.TYPED_ARRAY_SUPPORT && (V.prototype.__proto__ = Uint8Array.prototype, V.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && V[Symbol.species]), V.alloc = function (e, p, a) {
                  return function (e, p, a, d) {
                    return k(p), p <= 0 ? E(e, p) : void 0 !== a ? "string" == typeof d ? E(e, p).fill(a, d) : E(e, p).fill(a) : E(e, p);
                  }(null, e, p, a);
                }, V.allocUnsafe = function (e) {
                  return R(null, e);
                }, V.allocUnsafeSlow = function (e) {
                  return R(null, e);
                }, V.isBuffer = oe, V.compare = function (e, p) {
                  if (!O(e) || !O(p)) throw new TypeError("Arguments must be Buffers");
                  if (e === p) return 0;
                  for (var a = e.length, d = p.length, t = 0, i = Math.min(a, d); t < i; ++t) if (e[t] !== p[t]) {
                    a = e[t], d = p[t];
                    break;
                  }
                  return a < d ? -1 : d < a ? 1 : 0;
                }, V.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return true;
                    default:
                      return false;
                  }
                }, V.concat = function (e, p) {
                  if (!D(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                  if (0 === e.length) return V.alloc(0);
                  var a;
                  if (void 0 === p) for (p = 0, a = 0; a < e.length; ++a) p += e[a].length;
                  var d = V.allocUnsafe(p),
                    t = 0;
                  for (a = 0; a < e.length; ++a) {
                    var i = e[a];
                    if (!O(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                    i.copy(d, t), t += i.length;
                  }
                  return d;
                }, V.byteLength = L, V.prototype._isBuffer = true, V.prototype.swap16 = function () {
                  var e = this.length;
                  if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                  for (var p = 0; p < e; p += 2) U(this, p, p + 1);
                  return this;
                }, V.prototype.swap32 = function () {
                  var e = this.length;
                  if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                  for (var p = 0; p < e; p += 4) U(this, p, p + 3), U(this, p + 1, p + 2);
                  return this;
                }, V.prototype.swap64 = function () {
                  var e = this.length;
                  if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                  for (var p = 0; p < e; p += 8) U(this, p, p + 7), U(this, p + 1, p + 6), U(this, p + 2, p + 5), U(this, p + 3, p + 4);
                  return this;
                }, V.prototype.toString = function () {
                  var e = 0 | this.length;
                  return 0 === e ? "" : 0 === arguments.length ? $(this, 0, e) : B.apply(this, arguments);
                }, V.prototype.equals = function (e) {
                  if (!O(e)) throw new TypeError("Argument must be a Buffer");
                  return this === e || 0 === V.compare(this, e);
                }, V.prototype.inspect = function () {
                  var e = "";
                  return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">";
                }, V.prototype.compare = function (e, p, a, d, t) {
                  if (!O(e)) throw new TypeError("Argument must be a Buffer");
                  if (void 0 === p && (p = 0), void 0 === a && (a = e ? e.length : 0), void 0 === d && (d = 0), void 0 === t && (t = this.length), p < 0 || a > e.length || d < 0 || t > this.length) throw new RangeError("out of range index");
                  if (d >= t && p >= a) return 0;
                  if (d >= t) return -1;
                  if (p >= a) return 1;
                  if (this === e) return 0;
                  for (var i = (t >>>= 0) - (d >>>= 0), r = (a >>>= 0) - (p >>>= 0), l = Math.min(i, r), m = this.slice(d, t), n = e.slice(p, a), o = 0; o < l; ++o) if (m[o] !== n[o]) {
                    i = m[o], r = n[o];
                    break;
                  }
                  return i < r ? -1 : r < i ? 1 : 0;
                }, V.prototype.includes = function (e, p, a) {
                  return -1 !== this.indexOf(e, p, a);
                }, V.prototype.indexOf = function (e, p, a) {
                  return P(this, e, p, a, true);
                }, V.prototype.lastIndexOf = function (e, p, a) {
                  return P(this, e, p, a, false);
                }, V.prototype.write = function (e, p, a, d) {
                  if (void 0 === p) d = "utf8", a = this.length, p = 0;else if (void 0 === a && "string" == typeof p) d = p, a = this.length, p = 0;else {
                    if (!isFinite(p)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    p |= 0, isFinite(a) ? (a |= 0, void 0 === d && (d = "utf8")) : (d = a, a = void 0);
                  }
                  var t = this.length - p;
                  if ((void 0 === a || a > t) && (a = t), e.length > 0 && (a < 0 || p < 0) || p > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                  d || (d = "utf8");
                  for (var i = false;;) switch (d) {
                    case "hex":
                      return F(this, e, p, a);
                    case "utf8":
                    case "utf-8":
                      return I(this, e, p, a);
                    case "ascii":
                      return M(this, e, p, a);
                    case "latin1":
                    case "binary":
                      return j(this, e, p, a);
                    case "base64":
                      return q(this, e, p, a);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return Z(this, e, p, a);
                    default:
                      if (i) throw new TypeError("Unknown encoding: " + d);
                      d = ("" + d).toLowerCase(), i = true;
                  }
                }, V.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                  };
                };
                var Y = 4096;
                function K(e, p, a) {
                  var d = "";
                  a = Math.min(e.length, a);
                  for (var t = p; t < a; ++t) d += String.fromCharCode(127 & e[t]);
                  return d;
                }
                function W(e, p, a) {
                  var d = "";
                  a = Math.min(e.length, a);
                  for (var t = p; t < a; ++t) d += String.fromCharCode(e[t]);
                  return d;
                }
                function G(e, p, a) {
                  var d = e.length;
                  (!p || p < 0) && (p = 0), (!a || a < 0 || a > d) && (a = d);
                  for (var t = "", i = p; i < a; ++i) t += re(e[i]);
                  return t;
                }
                function X(e, p, a) {
                  for (var d = e.slice(p, a), t = "", i = 0; i < d.length; i += 2) t += String.fromCharCode(d[i] + 256 * d[i + 1]);
                  return t;
                }
                function J(e, p, a) {
                  if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                  if (e + p > a) throw new RangeError("Trying to access beyond buffer length");
                }
                function Q(e, p, a, d, t, i) {
                  if (!O(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                  if (p > t || p < i) throw new RangeError('"value" argument is out of bounds');
                  if (a + d > e.length) throw new RangeError("Index out of range");
                }
                function ee(e, p, a, d) {
                  p < 0 && (p = 65535 + p + 1);
                  for (var t = 0, i = Math.min(e.length - a, 2); t < i; ++t) e[a + t] = (p & 255 << 8 * (d ? t : 1 - t)) >>> 8 * (d ? t : 1 - t);
                }
                function pe(e, p, a, d) {
                  p < 0 && (p = 4294967295 + p + 1);
                  for (var t = 0, i = Math.min(e.length - a, 4); t < i; ++t) e[a + t] = p >>> 8 * (d ? t : 3 - t) & 255;
                }
                function ae(e, p, a, d, t, i) {
                  if (a + d > e.length) throw new RangeError("Index out of range");
                  if (a < 0) throw new RangeError("Index out of range");
                }
                function de(e, p, a, d, t) {
                  return t || ae(e, 0, a, 4), N(e, p, a, d, 23, 4), a + 4;
                }
                function te(e, p, a, d, t) {
                  return t || ae(e, 0, a, 8), N(e, p, a, d, 52, 8), a + 8;
                }
                V.prototype.slice = function (e, p) {
                  var a,
                    d = this.length;
                  if ((e = ~~e) < 0 ? (e += d) < 0 && (e = 0) : e > d && (e = d), (p = void 0 === p ? d : ~~p) < 0 ? (p += d) < 0 && (p = 0) : p > d && (p = d), p < e && (p = e), V.TYPED_ARRAY_SUPPORT) (a = this.subarray(e, p)).__proto__ = V.prototype;else {
                    var t = p - e;
                    a = new V(t, void 0);
                    for (var i = 0; i < t; ++i) a[i] = this[i + e];
                  }
                  return a;
                }, V.prototype.readUIntLE = function (e, p, a) {
                  e |= 0, p |= 0, a || J(e, p, this.length);
                  for (var d = this[e], t = 1, i = 0; ++i < p && (t *= 256);) d += this[e + i] * t;
                  return d;
                }, V.prototype.readUIntBE = function (e, p, a) {
                  e |= 0, p |= 0, a || J(e, p, this.length);
                  for (var d = this[e + --p], t = 1; p > 0 && (t *= 256);) d += this[e + --p] * t;
                  return d;
                }, V.prototype.readUInt8 = function (e, p) {
                  return p || J(e, 1, this.length), this[e];
                }, V.prototype.readUInt16LE = function (e, p) {
                  return p || J(e, 2, this.length), this[e] | this[e + 1] << 8;
                }, V.prototype.readUInt16BE = function (e, p) {
                  return p || J(e, 2, this.length), this[e] << 8 | this[e + 1];
                }, V.prototype.readUInt32LE = function (e, p) {
                  return p || J(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
                }, V.prototype.readUInt32BE = function (e, p) {
                  return p || J(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
                }, V.prototype.readIntLE = function (e, p, a) {
                  e |= 0, p |= 0, a || J(e, p, this.length);
                  for (var d = this[e], t = 1, i = 0; ++i < p && (t *= 256);) d += this[e + i] * t;
                  return d >= (t *= 128) && (d -= Math.pow(2, 8 * p)), d;
                }, V.prototype.readIntBE = function (e, p, a) {
                  e |= 0, p |= 0, a || J(e, p, this.length);
                  for (var d = p, t = 1, i = this[e + --d]; d > 0 && (t *= 256);) i += this[e + --d] * t;
                  return i >= (t *= 128) && (i -= Math.pow(2, 8 * p)), i;
                }, V.prototype.readInt8 = function (e, p) {
                  return p || J(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
                }, V.prototype.readInt16LE = function (e, p) {
                  p || J(e, 2, this.length);
                  var a = this[e] | this[e + 1] << 8;
                  return 32768 & a ? 4294901760 | a : a;
                }, V.prototype.readInt16BE = function (e, p) {
                  p || J(e, 2, this.length);
                  var a = this[e + 1] | this[e] << 8;
                  return 32768 & a ? 4294901760 | a : a;
                }, V.prototype.readInt32LE = function (e, p) {
                  return p || J(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
                }, V.prototype.readInt32BE = function (e, p) {
                  return p || J(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
                }, V.prototype.readFloatLE = function (e, p) {
                  return p || J(e, 4, this.length), y(this, e, true, 23, 4);
                }, V.prototype.readFloatBE = function (e, p) {
                  return p || J(e, 4, this.length), y(this, e, false, 23, 4);
                }, V.prototype.readDoubleLE = function (e, p) {
                  return p || J(e, 8, this.length), y(this, e, true, 52, 8);
                }, V.prototype.readDoubleBE = function (e, p) {
                  return p || J(e, 8, this.length), y(this, e, false, 52, 8);
                }, V.prototype.writeUIntLE = function (e, p, a, d) {
                  e = +e, p |= 0, a |= 0, d || Q(this, e, p, a, Math.pow(2, 8 * a) - 1, 0);
                  var t = 1,
                    i = 0;
                  for (this[p] = 255 & e; ++i < a && (t *= 256);) this[p + i] = e / t & 255;
                  return p + a;
                }, V.prototype.writeUIntBE = function (e, p, a, d) {
                  e = +e, p |= 0, a |= 0, d || Q(this, e, p, a, Math.pow(2, 8 * a) - 1, 0);
                  var t = a - 1,
                    i = 1;
                  for (this[p + t] = 255 & e; --t >= 0 && (i *= 256);) this[p + t] = e / i & 255;
                  return p + a;
                }, V.prototype.writeUInt8 = function (e, p, a) {
                  return e = +e, p |= 0, a || Q(this, e, p, 1, 255, 0), V.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[p] = 255 & e, p + 1;
                }, V.prototype.writeUInt16LE = function (e, p, a) {
                  return e = +e, p |= 0, a || Q(this, e, p, 2, 65535, 0), V.TYPED_ARRAY_SUPPORT ? (this[p] = 255 & e, this[p + 1] = e >>> 8) : ee(this, e, p, true), p + 2;
                }, V.prototype.writeUInt16BE = function (e, p, a) {
                  return e = +e, p |= 0, a || Q(this, e, p, 2, 65535, 0), V.TYPED_ARRAY_SUPPORT ? (this[p] = e >>> 8, this[p + 1] = 255 & e) : ee(this, e, p, false), p + 2;
                }, V.prototype.writeUInt32LE = function (e, p, a) {
                  return e = +e, p |= 0, a || Q(this, e, p, 4, 4294967295, 0), V.TYPED_ARRAY_SUPPORT ? (this[p + 3] = e >>> 24, this[p + 2] = e >>> 16, this[p + 1] = e >>> 8, this[p] = 255 & e) : pe(this, e, p, true), p + 4;
                }, V.prototype.writeUInt32BE = function (e, p, a) {
                  return e = +e, p |= 0, a || Q(this, e, p, 4, 4294967295, 0), V.TYPED_ARRAY_SUPPORT ? (this[p] = e >>> 24, this[p + 1] = e >>> 16, this[p + 2] = e >>> 8, this[p + 3] = 255 & e) : pe(this, e, p, false), p + 4;
                }, V.prototype.writeIntLE = function (e, p, a, d) {
                  if (e = +e, p |= 0, !d) {
                    var t = Math.pow(2, 8 * a - 1);
                    Q(this, e, p, a, t - 1, -t);
                  }
                  var i = 0,
                    r = 1,
                    l = 0;
                  for (this[p] = 255 & e; ++i < a && (r *= 256);) e < 0 && 0 === l && 0 !== this[p + i - 1] && (l = 1), this[p + i] = (e / r | 0) - l & 255;
                  return p + a;
                }, V.prototype.writeIntBE = function (e, p, a, d) {
                  if (e = +e, p |= 0, !d) {
                    var t = Math.pow(2, 8 * a - 1);
                    Q(this, e, p, a, t - 1, -t);
                  }
                  var i = a - 1,
                    r = 1,
                    l = 0;
                  for (this[p + i] = 255 & e; --i >= 0 && (r *= 256);) e < 0 && 0 === l && 0 !== this[p + i + 1] && (l = 1), this[p + i] = (e / r | 0) - l & 255;
                  return p + a;
                }, V.prototype.writeInt8 = function (e, p, a) {
                  return e = +e, p |= 0, a || Q(this, e, p, 1, 127, -128), V.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[p] = 255 & e, p + 1;
                }, V.prototype.writeInt16LE = function (e, p, a) {
                  return e = +e, p |= 0, a || Q(this, e, p, 2, 32767, -32768), V.TYPED_ARRAY_SUPPORT ? (this[p] = 255 & e, this[p + 1] = e >>> 8) : ee(this, e, p, true), p + 2;
                }, V.prototype.writeInt16BE = function (e, p, a) {
                  return e = +e, p |= 0, a || Q(this, e, p, 2, 32767, -32768), V.TYPED_ARRAY_SUPPORT ? (this[p] = e >>> 8, this[p + 1] = 255 & e) : ee(this, e, p, false), p + 2;
                }, V.prototype.writeInt32LE = function (e, p, a) {
                  return e = +e, p |= 0, a || Q(this, e, p, 4, 2147483647, -2147483648), V.TYPED_ARRAY_SUPPORT ? (this[p] = 255 & e, this[p + 1] = e >>> 8, this[p + 2] = e >>> 16, this[p + 3] = e >>> 24) : pe(this, e, p, true), p + 4;
                }, V.prototype.writeInt32BE = function (e, p, a) {
                  return e = +e, p |= 0, a || Q(this, e, p, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), V.TYPED_ARRAY_SUPPORT ? (this[p] = e >>> 24, this[p + 1] = e >>> 16, this[p + 2] = e >>> 8, this[p + 3] = 255 & e) : pe(this, e, p, false), p + 4;
                }, V.prototype.writeFloatLE = function (e, p, a) {
                  return de(this, e, p, true, a);
                }, V.prototype.writeFloatBE = function (e, p, a) {
                  return de(this, e, p, false, a);
                }, V.prototype.writeDoubleLE = function (e, p, a) {
                  return te(this, e, p, true, a);
                }, V.prototype.writeDoubleBE = function (e, p, a) {
                  return te(this, e, p, false, a);
                }, V.prototype.copy = function (e, p, a, d) {
                  if (a || (a = 0), d || 0 === d || (d = this.length), p >= e.length && (p = e.length), p || (p = 0), d > 0 && d < a && (d = a), d === a) return 0;
                  if (0 === e.length || 0 === this.length) return 0;
                  if (p < 0) throw new RangeError("targetStart out of bounds");
                  if (a < 0 || a >= this.length) throw new RangeError("sourceStart out of bounds");
                  if (d < 0) throw new RangeError("sourceEnd out of bounds");
                  d > this.length && (d = this.length), e.length - p < d - a && (d = e.length - p + a);
                  var t,
                    i = d - a;
                  if (this === e && a < p && p < d) for (t = i - 1; t >= 0; --t) e[t + p] = this[t + a];else if (i < 1e3 || !V.TYPED_ARRAY_SUPPORT) for (t = 0; t < i; ++t) e[t + p] = this[t + a];else Uint8Array.prototype.set.call(e, this.subarray(a, a + i), p);
                  return i;
                }, V.prototype.fill = function (e, p, a, d) {
                  if ("string" == typeof e) {
                    if ("string" == typeof p ? (d = p, p = 0, a = this.length) : "string" == typeof a && (d = a, a = this.length), 1 === e.length) {
                      var t = e.charCodeAt(0);
                      t < 256 && (e = t);
                    }
                    if (void 0 !== d && "string" != typeof d) throw new TypeError("encoding must be a string");
                    if ("string" == typeof d && !V.isEncoding(d)) throw new TypeError("Unknown encoding: " + d);
                  } else "number" == typeof e && (e &= 255);
                  if (p < 0 || this.length < p || this.length < a) throw new RangeError("Out of range index");
                  if (a <= p) return this;
                  var i;
                  if (p >>>= 0, a = void 0 === a ? this.length : a >>> 0, e || (e = 0), "number" == typeof e) for (i = p; i < a; ++i) this[i] = e;else {
                    var r = O(e) ? e : le(new V(e, d).toString()),
                      l = r.length;
                    for (i = 0; i < a - p; ++i) this[i + p] = r[i % l];
                  }
                  return this;
                };
                var ie = /[^+\/0-9A-Za-z-_]/g;
                function re(e) {
                  return e < 16 ? "0" + e.toString(16) : e.toString(16);
                }
                function le(e, p) {
                  var a;
                  p = p || 1 / 0;
                  for (var d = e.length, t = null, i = [], r = 0; r < d; ++r) {
                    if ((a = e.charCodeAt(r)) > 55295 && a < 57344) {
                      if (!t) {
                        if (a > 56319) {
                          (p -= 3) > -1 && i.push(239, 191, 189);
                          continue;
                        }
                        if (r + 1 === d) {
                          (p -= 3) > -1 && i.push(239, 191, 189);
                          continue;
                        }
                        t = a;
                        continue;
                      }
                      if (a < 56320) {
                        (p -= 3) > -1 && i.push(239, 191, 189), t = a;
                        continue;
                      }
                      a = 65536 + (t - 55296 << 10 | a - 56320);
                    } else t && (p -= 3) > -1 && i.push(239, 191, 189);
                    if (t = null, a < 128) {
                      if ((p -= 1) < 0) break;
                      i.push(a);
                    } else if (a < 2048) {
                      if ((p -= 2) < 0) break;
                      i.push(a >> 6 | 192, 63 & a | 128);
                    } else if (a < 65536) {
                      if ((p -= 3) < 0) break;
                      i.push(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128);
                    } else {
                      if (!(a < 1114112)) throw new Error("Invalid code point");
                      if ((p -= 4) < 0) break;
                      i.push(a >> 18 | 240, a >> 12 & 63 | 128, a >> 6 & 63 | 128, 63 & a | 128);
                    }
                  }
                  return i;
                }
                function me(e) {
                  return function (e) {
                    var p, a, d, t, i, r;
                    w || _();
                    var l = e.length;
                    if (l % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    i = "=" === e[l - 2] ? 2 : "=" === e[l - 1] ? 1 : 0, r = new v(3 * l / 4 - i), d = i > 0 ? l - 4 : l;
                    var m = 0;
                    for (p = 0, a = 0; p < d; p += 4, a += 3) t = c[e.charCodeAt(p)] << 18 | c[e.charCodeAt(p + 1)] << 12 | c[e.charCodeAt(p + 2)] << 6 | c[e.charCodeAt(p + 3)], r[m++] = t >> 16 & 255, r[m++] = t >> 8 & 255, r[m++] = 255 & t;
                    return 2 === i ? (t = c[e.charCodeAt(p)] << 2 | c[e.charCodeAt(p + 1)] >> 4, r[m++] = 255 & t) : 1 === i && (t = c[e.charCodeAt(p)] << 10 | c[e.charCodeAt(p + 1)] << 4 | c[e.charCodeAt(p + 2)] >> 2, r[m++] = t >> 8 & 255, r[m++] = 255 & t), r;
                  }(function (e) {
                    if ((e = function (e) {
                      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                    }(e).replace(ie, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e;
                  }(e));
                }
                function ne(e, p, a, d) {
                  for (var t = 0; t < d && !(t + a >= p.length || t >= e.length); ++t) p[t + a] = e[t];
                  return t;
                }
                function oe(e) {
                  return null != e && (!!e._isBuffer || se(e) || function (e) {
                    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && se(e.slice(0, 0));
                  }(e));
                }
                function se(e) {
                  return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
                }
                function ue() {
                  throw new Error("setTimeout has not been defined");
                }
                function he() {
                  throw new Error("clearTimeout has not been defined");
                }
                var fe = ue,
                  ce = he;
                function ve(e) {
                  if (fe === setTimeout) return setTimeout(e, 0);
                  if ((fe === ue || !fe) && setTimeout) return fe = setTimeout, setTimeout(e, 0);
                  try {
                    return fe(e, 0);
                  } catch (p) {
                    try {
                      return fe.call(null, e, 0);
                    } catch (p) {
                      return fe.call(this, e, 0);
                    }
                  }
                }
                "function" == typeof h.setTimeout && (fe = setTimeout), "function" == typeof h.clearTimeout && (ce = clearTimeout);
                var we,
                  _e = [],
                  ge = false,
                  be = -1;
                function ye() {
                  ge && we && (ge = false, we.length ? _e = we.concat(_e) : be = -1, _e.length && Ne());
                }
                function Ne() {
                  if (!ge) {
                    var e = ve(ye);
                    ge = true;
                    for (var p = _e.length; p;) {
                      for (we = _e, _e = []; ++be < p;) we && we[be].run();
                      be = -1, p = _e.length;
                    }
                    we = null, ge = false, function (e) {
                      if (ce === clearTimeout) return clearTimeout(e);
                      if ((ce === he || !ce) && clearTimeout) return ce = clearTimeout, clearTimeout(e);
                      try {
                        return ce(e);
                      } catch (p) {
                        try {
                          return ce.call(null, e);
                        } catch (p) {
                          return ce.call(this, e);
                        }
                      }
                    }(e);
                  }
                }
                function Se(e) {
                  var p = new Array(arguments.length - 1);
                  if (arguments.length > 1) for (var a = 1; a < arguments.length; a++) p[a - 1] = arguments[a];
                  _e.push(new De(e, p)), 1 !== _e.length || ge || ve(Ne);
                }
                function De(e, p) {
                  this.fun = e, this.array = p;
                }
                function Te() {}
                De.prototype.run = function () {
                  this.fun.apply(null, this.array);
                };
                var Ee,
                  Ve = Te,
                  Ae = Te,
                  ke = Te,
                  Re = Te,
                  xe = Te,
                  Ce = Te,
                  Oe = Te,
                  Le = h.performance || {},
                  Be = Le.now || Le.mozNow || Le.msNow || Le.oNow || Le.webkitNow || function () {
                    return new Date().getTime();
                  },
                  Ue = new Date(),
                  Pe = {
                    nextTick: Se,
                    title: "browser",
                    browser: true,
                    env: {},
                    argv: [],
                    version: "",
                    versions: {},
                    on: Ve,
                    addListener: Ae,
                    once: ke,
                    off: Re,
                    removeListener: xe,
                    removeAllListeners: Ce,
                    emit: Oe,
                    binding: function (e) {
                      throw new Error("process.binding is not supported");
                    },
                    cwd: function () {
                      return "/";
                    },
                    chdir: function (e) {
                      throw new Error("process.chdir is not supported");
                    },
                    umask: function () {
                      return 0;
                    },
                    hrtime: function (e) {
                      var p = .001 * Be.call(Le),
                        a = Math.floor(p),
                        d = Math.floor(p % 1 * 1e9);
                      return e && (a -= e[0], (d -= e[1]) < 0 && (a--, d += 1e9)), [a, d];
                    },
                    platform: "browser",
                    release: {},
                    config: {},
                    uptime: function () {
                      return (new Date() - Ue) / 1e3;
                    }
                  };
                Ee = "function" == typeof Object.create ? function (e, p) {
                  e.super_ = p, e.prototype = Object.create(p.prototype, {
                    constructor: {
                      value: e,
                      enumerable: false,
                      writable: true,
                      configurable: true
                    }
                  });
                } : function (e, p) {
                  e.super_ = p;
                  var a = function () {};
                  a.prototype = p.prototype, e.prototype = new a(), e.prototype.constructor = e;
                };
                var ze = /%[sdj%]/g;
                function Fe(e) {
                  if (!Xe(e)) {
                    for (var p = [], a = 0; a < arguments.length; a++) p.push(qe(arguments[a]));
                    return p.join(" ");
                  }
                  a = 1;
                  for (var d = arguments, t = d.length, i = String(e).replace(ze, function (e) {
                      if ("%%" === e) return "%";
                      if (a >= t) return e;
                      switch (e) {
                        case "%s":
                          return String(d[a++]);
                        case "%d":
                          return Number(d[a++]);
                        case "%j":
                          try {
                            return JSON.stringify(d[a++]);
                          } catch (e) {
                            return "[Circular]";
                          }
                        default:
                          return e;
                      }
                    }), r = d[a]; a < t; r = d[++a]) Ge(r) || !ep(r) ? i += " " + r : i += " " + qe(r);
                  return i;
                }
                function Ie(e, p) {
                  if (Je(h.process)) return function () {
                    return Ie(e, p).apply(this, arguments);
                  };
                  if (true === Pe.noDeprecation) return e;
                  var a = false;
                  return function () {
                    if (!a) {
                      if (Pe.throwDeprecation) throw new Error(p);
                      Pe.traceDeprecation ? console.trace(p) : console.error(p), a = true;
                    }
                    return e.apply(this, arguments);
                  };
                }
                var Me,
                  je = {};
                function qe(e, p) {
                  var a = {
                    seen: [],
                    stylize: He
                  };
                  return arguments.length >= 3 && (a.depth = arguments[2]), arguments.length >= 4 && (a.colors = arguments[3]), We(p) ? a.showHidden = p : p && function (e, p) {
                    if (!p || !ep(p)) return e;
                    for (var a = Object.keys(p), d = a.length; d--;) e[a[d]] = p[a[d]];
                  }(a, p), Je(a.showHidden) && (a.showHidden = false), Je(a.depth) && (a.depth = 2), Je(a.colors) && (a.colors = false), Je(a.customInspect) && (a.customInspect = true), a.colors && (a.stylize = Ze), $e(a, e, a.depth);
                }
                function Ze(e, p) {
                  var a = qe.styles[p];
                  return a ? "[" + qe.colors[a][0] + "m" + e + "[" + qe.colors[a][1] + "m" : e;
                }
                function He(e, p) {
                  return e;
                }
                function $e(e, p, a) {
                  if (e.customInspect && p && dp(p.inspect) && p.inspect !== qe && (!p.constructor || p.constructor.prototype !== p)) {
                    var d = p.inspect(a, e);
                    return Xe(d) || (d = $e(e, d, a)), d;
                  }
                  var t = function (e, p) {
                    if (Je(p)) return e.stylize("undefined", "undefined");
                    if (Xe(p)) {
                      var a = "'" + JSON.stringify(p).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                      return e.stylize(a, "string");
                    }
                    return "number" == typeof p ? e.stylize("" + p, "number") : We(p) ? e.stylize("" + p, "boolean") : Ge(p) ? e.stylize("null", "null") : void 0;
                  }(e, p);
                  if (t) return t;
                  var i = Object.keys(p),
                    r = function (e) {
                      var p = {};
                      return e.forEach(function (e, a) {
                        p[e] = true;
                      }), p;
                    }(i);
                  if (e.showHidden && (i = Object.getOwnPropertyNames(p)), ap(p) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0)) return Ye(p);
                  if (0 === i.length) {
                    if (dp(p)) {
                      var l = p.name ? ": " + p.name : "";
                      return e.stylize("[Function" + l + "]", "special");
                    }
                    if (Qe(p)) return e.stylize(RegExp.prototype.toString.call(p), "regexp");
                    if (pp(p)) return e.stylize(Date.prototype.toString.call(p), "date");
                    if (ap(p)) return Ye(p);
                  }
                  var m,
                    n,
                    o = "",
                    s = false,
                    u = ["{", "}"];
                  return m = p, Array.isArray(m) && (s = true, u = ["[", "]"]), dp(p) && (o = " [Function" + (p.name ? ": " + p.name : "") + "]"), Qe(p) && (o = " " + RegExp.prototype.toString.call(p)), pp(p) && (o = " " + Date.prototype.toUTCString.call(p)), ap(p) && (o = " " + Ye(p)), 0 !== i.length || s && 0 != p.length ? a < 0 ? Qe(p) ? e.stylize(RegExp.prototype.toString.call(p), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(p), n = s ? function (e, p, a, d, t) {
                    for (var i = [], r = 0, l = p.length; r < l; ++r) ip(p, String(r)) ? i.push(Ke(e, p, a, d, String(r), true)) : i.push("");
                    return t.forEach(function (t) {
                      t.match(/^\d+$/) || i.push(Ke(e, p, a, d, t, true));
                    }), i;
                  }(e, p, a, r, i) : i.map(function (d) {
                    return Ke(e, p, a, r, d, s);
                  }), e.seen.pop(), function (e, p, a) {
                    var d = e.reduce(function (e, p) {
                      return p.indexOf("\n"), e + p.replace(/\u001b\[\d\d?m/g, "").length + 1;
                    }, 0);
                    return d > 60 ? a[0] + ("" === p ? "" : p + "\n ") + " " + e.join(",\n  ") + " " + a[1] : a[0] + p + " " + e.join(", ") + " " + a[1];
                  }(n, o, u)) : u[0] + o + u[1];
                }
                function Ye(e) {
                  return "[" + Error.prototype.toString.call(e) + "]";
                }
                function Ke(e, p, a, d, t, i) {
                  var r, l, m;
                  if ((m = Object.getOwnPropertyDescriptor(p, t) || {
                    value: p[t]
                  }).get ? l = m.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : m.set && (l = e.stylize("[Setter]", "special")), ip(d, t) || (r = "[" + t + "]"), l || (e.seen.indexOf(m.value) < 0 ? (l = Ge(a) ? $e(e, m.value, null) : $e(e, m.value, a - 1)).indexOf("\n") > -1 && (l = i ? l.split("\n").map(function (e) {
                    return "  " + e;
                  }).join("\n").substr(2) : "\n" + l.split("\n").map(function (e) {
                    return "   " + e;
                  }).join("\n")) : l = e.stylize("[Circular]", "special")), Je(r)) {
                    if (i && t.match(/^\d+$/)) return l;
                    (r = JSON.stringify("" + t)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (r = r.substr(1, r.length - 2), r = e.stylize(r, "name")) : (r = r.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), r = e.stylize(r, "string"));
                  }
                  return r + ": " + l;
                }
                function We(e) {
                  return "boolean" == typeof e;
                }
                function Ge(e) {
                  return null === e;
                }
                function Xe(e) {
                  return "string" == typeof e;
                }
                function Je(e) {
                  return void 0 === e;
                }
                function Qe(e) {
                  return ep(e) && "[object RegExp]" === tp(e);
                }
                function ep(e) {
                  return "object" == typeof e && null !== e;
                }
                function pp(e) {
                  return ep(e) && "[object Date]" === tp(e);
                }
                function ap(e) {
                  return ep(e) && ("[object Error]" === tp(e) || e instanceof Error);
                }
                function dp(e) {
                  return "function" == typeof e;
                }
                function tp(e) {
                  return Object.prototype.toString.call(e);
                }
                function ip(e, p) {
                  return Object.prototype.hasOwnProperty.call(e, p);
                }
                function rp() {
                  this.head = null, this.tail = null, this.length = 0;
                }
                qe.colors = {
                  bold: [1, 22],
                  italic: [3, 23],
                  underline: [4, 24],
                  inverse: [7, 27],
                  white: [37, 39],
                  grey: [90, 39],
                  black: [30, 39],
                  blue: [34, 39],
                  cyan: [36, 39],
                  green: [32, 39],
                  magenta: [35, 39],
                  red: [31, 39],
                  yellow: [33, 39]
                }, qe.styles = {
                  special: "cyan",
                  number: "yellow",
                  boolean: "yellow",
                  undefined: "grey",
                  null: "bold",
                  string: "green",
                  date: "magenta",
                  regexp: "red"
                }, rp.prototype.push = function (e) {
                  var p = {
                    data: e,
                    next: null
                  };
                  this.length > 0 ? this.tail.next = p : this.head = p, this.tail = p, ++this.length;
                }, rp.prototype.unshift = function (e) {
                  var p = {
                    data: e,
                    next: this.head
                  };
                  0 === this.length && (this.tail = p), this.head = p, ++this.length;
                }, rp.prototype.shift = function () {
                  if (0 !== this.length) {
                    var e = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
                  }
                }, rp.prototype.clear = function () {
                  this.head = this.tail = null, this.length = 0;
                }, rp.prototype.join = function (e) {
                  if (0 === this.length) return "";
                  for (var p = this.head, a = "" + p.data; p = p.next;) a += e + p.data;
                  return a;
                }, rp.prototype.concat = function (e) {
                  if (0 === this.length) return V.alloc(0);
                  if (1 === this.length) return this.head.data;
                  for (var p = V.allocUnsafe(e >>> 0), a = this.head, d = 0; a;) a.data.copy(p, d), d += a.data.length, a = a.next;
                  return p;
                };
                var lp = V.isEncoding || function (e) {
                  switch (e && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                      return true;
                    default:
                      return false;
                  }
                };
                function mp(e) {
                  switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), function (e) {
                    if (e && !lp(e)) throw new Error("Unknown encoding: " + e);
                  }(e), this.encoding) {
                    case "utf8":
                      this.surrogateSize = 3;
                      break;
                    case "ucs2":
                    case "utf16le":
                      this.surrogateSize = 2, this.detectIncompleteChar = op;
                      break;
                    case "base64":
                      this.surrogateSize = 3, this.detectIncompleteChar = sp;
                      break;
                    default:
                      return void (this.write = np);
                  }
                  this.charBuffer = new V(6), this.charReceived = 0, this.charLength = 0;
                }
                function np(e) {
                  return e.toString(this.encoding);
                }
                function op(e) {
                  this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0;
                }
                function sp(e) {
                  this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0;
                }
                mp.prototype.write = function (e) {
                  for (var p = ""; this.charLength;) {
                    var a = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
                    if (e.copy(this.charBuffer, this.charReceived, 0, a), this.charReceived += a, this.charReceived < this.charLength) return "";
                    if (e = e.slice(a, e.length), !((d = (p = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(p.length - 1)) >= 55296 && d <= 56319)) {
                      if (this.charReceived = this.charLength = 0, 0 === e.length) return p;
                      break;
                    }
                    this.charLength += this.surrogateSize, p = "";
                  }
                  this.detectIncompleteChar(e);
                  var d,
                    t = e.length;
                  if (this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, t), t -= this.charReceived), t = (p += e.toString(this.encoding, 0, t)).length - 1, (d = p.charCodeAt(t)) >= 55296 && d <= 56319) {
                    var i = this.surrogateSize;
                    return this.charLength += i, this.charReceived += i, this.charBuffer.copy(this.charBuffer, i, 0, i), e.copy(this.charBuffer, 0, 0, i), p.substring(0, t);
                  }
                  return p;
                }, mp.prototype.detectIncompleteChar = function (e) {
                  for (var p = e.length >= 3 ? 3 : e.length; p > 0; p--) {
                    var a = e[e.length - p];
                    if (1 == p && a >> 5 == 6) {
                      this.charLength = 2;
                      break;
                    }
                    if (p <= 2 && a >> 4 == 14) {
                      this.charLength = 3;
                      break;
                    }
                    if (p <= 3 && a >> 3 == 30) {
                      this.charLength = 4;
                      break;
                    }
                  }
                  this.charReceived = p;
                }, mp.prototype.end = function (e) {
                  var p = "";
                  if (e && e.length && (p = this.write(e)), this.charReceived) {
                    var a = this.charReceived,
                      d = this.charBuffer,
                      t = this.encoding;
                    p += d.slice(0, a).toString(t);
                  }
                  return p;
                }, fp.ReadableState = hp;
                var up = function (e) {
                  return Je(Me) && (Me = Pe.env.NODE_DEBUG || ""), e = e.toUpperCase(), je[e] || (new RegExp("\\b" + e + "\\b", "i").test(Me) ? je[e] = function () {
                    var p = Fe.apply(null, arguments);
                    console.error("%s %d: %s", e, 0, p);
                  } : je[e] = function () {}), je[e];
                }("stream");
                function hp(e, p) {
                  e = e || {}, this.objectMode = !!e.objectMode, p instanceof jp && (this.objectMode = this.objectMode || !!e.readableObjectMode);
                  var a = e.highWaterMark,
                    d = this.objectMode ? 16 : 16384;
                  this.highWaterMark = a || 0 === a ? a : d, this.highWaterMark = ~~this.highWaterMark, this.buffer = new rp(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.defaultEncoding = e.defaultEncoding || "utf8", this.ranOut = false, this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, e.encoding && (this.decoder = new mp(e.encoding), this.encoding = e.encoding);
                }
                function fp(e) {
                  if (!(this instanceof fp)) return new fp(e);
                  this._readableState = new hp(e, this), this.readable = true, e && "function" == typeof e.read && (this._read = e.read), l.call(this);
                }
                function cp(e, p, a, d, t) {
                  var i = function (e, p) {
                    var a = null;
                    return V.isBuffer(p) || "string" == typeof p || null == p || e.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a;
                  }(p, a);
                  if (i) e.emit("error", i);else if (null === a) p.reading = false, function (e, p) {
                    if (!p.ended) {
                      if (p.decoder) {
                        var a = p.decoder.end();
                        a && a.length && (p.buffer.push(a), p.length += p.objectMode ? 1 : a.length);
                      }
                      p.ended = true, _p(e);
                    }
                  }(e, p);else if (p.objectMode || a && a.length > 0) {
                    if (p.ended && !t) {
                      var r = new Error("stream.push() after EOF");
                      e.emit("error", r);
                    } else if (p.endEmitted && t) {
                      var l = new Error("stream.unshift() after end event");
                      e.emit("error", l);
                    } else {
                      var m;
                      !p.decoder || t || d || (a = p.decoder.write(a), m = !p.objectMode && 0 === a.length), t || (p.reading = false), m || (p.flowing && 0 === p.length && !p.sync ? (e.emit("data", a), e.read(0)) : (p.length += p.objectMode ? 1 : a.length, t ? p.buffer.unshift(a) : p.buffer.push(a), p.needReadable && _p(e))), function (e, p) {
                        p.readingMore || (p.readingMore = true, Se(bp, e, p));
                      }(e, p);
                    }
                  } else t || (p.reading = false);
                  return function (e) {
                    return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length);
                  }(p);
                }
                Ee(fp, l), fp.prototype.push = function (e, p) {
                  var a = this._readableState;
                  return a.objectMode || "string" != typeof e || (p = p || a.defaultEncoding) !== a.encoding && (e = V.from(e, p), p = ""), cp(this, a, e, p, false);
                }, fp.prototype.unshift = function (e) {
                  return cp(this, this._readableState, e, "", true);
                }, fp.prototype.isPaused = function () {
                  return false === this._readableState.flowing;
                }, fp.prototype.setEncoding = function (e) {
                  return this._readableState.decoder = new mp(e), this._readableState.encoding = e, this;
                };
                var vp = 8388608;
                function wp(e, p) {
                  return e <= 0 || 0 === p.length && p.ended ? 0 : p.objectMode ? 1 : e != e ? p.flowing && p.length ? p.buffer.head.data.length : p.length : (e > p.highWaterMark && (p.highWaterMark = function (e) {
                    return e >= vp ? e = vp : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
                  }(e)), e <= p.length ? e : p.ended ? p.length : (p.needReadable = true, 0));
                }
                function _p(e) {
                  var p = e._readableState;
                  p.needReadable = false, p.emittedReadable || (up("emitReadable", p.flowing), p.emittedReadable = true, p.sync ? Se(gp, e) : gp(e));
                }
                function gp(e) {
                  up("emit readable"), e.emit("readable"), Sp(e);
                }
                function bp(e, p) {
                  for (var a = p.length; !p.reading && !p.flowing && !p.ended && p.length < p.highWaterMark && (up("maybeReadMore read 0"), e.read(0), a !== p.length);) a = p.length;
                  p.readingMore = false;
                }
                function yp(e) {
                  up("readable nexttick read 0"), e.read(0);
                }
                function Np(e, p) {
                  p.reading || (up("resume read 0"), e.read(0)), p.resumeScheduled = false, p.awaitDrain = 0, e.emit("resume"), Sp(e), p.flowing && !p.reading && e.read(0);
                }
                function Sp(e) {
                  var p = e._readableState;
                  for (up("flow", p.flowing); p.flowing && null !== e.read(););
                }
                function Dp(e, p) {
                  return 0 === p.length ? null : (p.objectMode ? a = p.buffer.shift() : !e || e >= p.length ? (a = p.decoder ? p.buffer.join("") : 1 === p.buffer.length ? p.buffer.head.data : p.buffer.concat(p.length), p.buffer.clear()) : a = function (e, p, a) {
                    var d;
                    return e < p.head.data.length ? (d = p.head.data.slice(0, e), p.head.data = p.head.data.slice(e)) : d = e === p.head.data.length ? p.shift() : a ? function (e, p) {
                      var a = p.head,
                        d = 1,
                        t = a.data;
                      for (e -= t.length; a = a.next;) {
                        var i = a.data,
                          r = e > i.length ? i.length : e;
                        if (r === i.length ? t += i : t += i.slice(0, e), 0 == (e -= r)) {
                          r === i.length ? (++d, a.next ? p.head = a.next : p.head = p.tail = null) : (p.head = a, a.data = i.slice(r));
                          break;
                        }
                        ++d;
                      }
                      return p.length -= d, t;
                    }(e, p) : function (e, p) {
                      var a = V.allocUnsafe(e),
                        d = p.head,
                        t = 1;
                      for (d.data.copy(a), e -= d.data.length; d = d.next;) {
                        var i = d.data,
                          r = e > i.length ? i.length : e;
                        if (i.copy(a, a.length - e, 0, r), 0 == (e -= r)) {
                          r === i.length ? (++t, d.next ? p.head = d.next : p.head = p.tail = null) : (p.head = d, d.data = i.slice(r));
                          break;
                        }
                        ++t;
                      }
                      return p.length -= t, a;
                    }(e, p), d;
                  }(e, p.buffer, p.decoder), a);
                  var a;
                }
                function Tp(e) {
                  var p = e._readableState;
                  if (p.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                  p.endEmitted || (p.ended = true, Se(Ep, p, e));
                }
                function Ep(e, p) {
                  e.endEmitted || 0 !== e.length || (e.endEmitted = true, p.readable = false, p.emit("end"));
                }
                function Vp(e, p) {
                  for (var a = 0, d = e.length; a < d; a++) if (e[a] === p) return a;
                  return -1;
                }
                function Ap() {}
                function kp(e, p, a) {
                  this.chunk = e, this.encoding = p, this.callback = a, this.next = null;
                }
                function Rp(e, p) {
                  Object.defineProperty(this, "buffer", {
                    get: Ie(function () {
                      return this.getBuffer();
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
                  }), e = e || {}, this.objectMode = !!e.objectMode, p instanceof jp && (this.objectMode = this.objectMode || !!e.writableObjectMode);
                  var a = e.highWaterMark,
                    d = this.objectMode ? 16 : 16384;
                  this.highWaterMark = a || 0 === a ? a : d, this.highWaterMark = ~~this.highWaterMark, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false;
                  var t = false === e.decodeStrings;
                  this.decodeStrings = !t, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function (e) {
                    !function (e, p) {
                      var a = e._writableState,
                        d = a.sync,
                        t = a.writecb;
                      if (function (e) {
                        e.writing = false, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
                      }(a), p) !function (e, p, a, d, t) {
                        --p.pendingcb, a ? Se(t, d) : t(d), e._writableState.errorEmitted = true, e.emit("error", d);
                      }(e, a, d, p, t);else {
                        var i = Bp(a);
                        i || a.corked || a.bufferProcessing || !a.bufferedRequest || Lp(e, a), d ? Se(Op, e, a, i, t) : Op(e, a, i, t);
                      }
                    }(p, e);
                  }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.bufferedRequestCount = 0, this.corkedRequestsFree = new zp(this);
                }
                function xp(e) {
                  if (!(this instanceof xp || this instanceof jp)) return new xp(e);
                  this._writableState = new Rp(e, this), this.writable = true, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev)), l.call(this);
                }
                function Cp(e, p, a, d, t, i, r) {
                  p.writelen = d, p.writecb = r, p.writing = true, p.sync = true, a ? e._writev(t, p.onwrite) : e._write(t, i, p.onwrite), p.sync = false;
                }
                function Op(e, p, a, d) {
                  a || function (e, p) {
                    0 === p.length && p.needDrain && (p.needDrain = false, e.emit("drain"));
                  }(e, p), p.pendingcb--, d(), Pp(e, p);
                }
                function Lp(e, p) {
                  p.bufferProcessing = true;
                  var a = p.bufferedRequest;
                  if (e._writev && a && a.next) {
                    var d = p.bufferedRequestCount,
                      t = new Array(d),
                      i = p.corkedRequestsFree;
                    i.entry = a;
                    for (var r = 0; a;) t[r] = a, a = a.next, r += 1;
                    Cp(e, p, true, p.length, t, "", i.finish), p.pendingcb++, p.lastBufferedRequest = null, i.next ? (p.corkedRequestsFree = i.next, i.next = null) : p.corkedRequestsFree = new zp(p);
                  } else {
                    for (; a;) {
                      var l = a.chunk,
                        m = a.encoding,
                        n = a.callback;
                      if (Cp(e, p, false, p.objectMode ? 1 : l.length, l, m, n), a = a.next, p.writing) break;
                    }
                    null === a && (p.lastBufferedRequest = null);
                  }
                  p.bufferedRequestCount = 0, p.bufferedRequest = a, p.bufferProcessing = false;
                }
                function Bp(e) {
                  return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
                }
                function Up(e, p) {
                  p.prefinished || (p.prefinished = true, e.emit("prefinish"));
                }
                function Pp(e, p) {
                  var a = Bp(p);
                  return a && (0 === p.pendingcb ? (Up(e, p), p.finished = true, e.emit("finish")) : Up(e, p)), a;
                }
                function zp(e) {
                  var p = this;
                  this.next = null, this.entry = null, this.finish = function (a) {
                    var d = p.entry;
                    for (p.entry = null; d;) {
                      var t = d.callback;
                      e.pendingcb--, t(a), d = d.next;
                    }
                    e.corkedRequestsFree ? e.corkedRequestsFree.next = p : e.corkedRequestsFree = p;
                  };
                }
                fp.prototype.read = function (e) {
                  up("read", e), e = parseInt(e, 10);
                  var p = this._readableState,
                    a = e;
                  if (0 !== e && (p.emittedReadable = false), 0 === e && p.needReadable && (p.length >= p.highWaterMark || p.ended)) return up("read: emitReadable", p.length, p.ended), 0 === p.length && p.ended ? Tp(this) : _p(this), null;
                  if (0 === (e = wp(e, p)) && p.ended) return 0 === p.length && Tp(this), null;
                  var d,
                    t = p.needReadable;
                  return up("need readable", t), (0 === p.length || p.length - e < p.highWaterMark) && up("length less than watermark", t = true), p.ended || p.reading ? up("reading or ended", t = false) : t && (up("do read"), p.reading = true, p.sync = true, 0 === p.length && (p.needReadable = true), this._read(p.highWaterMark), p.sync = false, p.reading || (e = wp(a, p))), null === (d = e > 0 ? Dp(e, p) : null) ? (p.needReadable = true, e = 0) : p.length -= e, 0 === p.length && (p.ended || (p.needReadable = true), a !== e && p.ended && Tp(this)), null !== d && this.emit("data", d), d;
                }, fp.prototype._read = function (e) {
                  this.emit("error", new Error("not implemented"));
                }, fp.prototype.pipe = function (e, p) {
                  var a = this,
                    d = this._readableState;
                  switch (d.pipesCount) {
                    case 0:
                      d.pipes = e;
                      break;
                    case 1:
                      d.pipes = [d.pipes, e];
                      break;
                    default:
                      d.pipes.push(e);
                  }
                  d.pipesCount += 1, up("pipe count=%d opts=%j", d.pipesCount, p);
                  var t = p && false === p.end ? n : r;
                  function i(e) {
                    up("onunpipe"), e === a && n();
                  }
                  function r() {
                    up("onend"), e.end();
                  }
                  d.endEmitted ? Se(t) : a.once("end", t), e.on("unpipe", i);
                  var l = function (e) {
                    return function () {
                      var p = e._readableState;
                      up("pipeOnDrain", p.awaitDrain), p.awaitDrain && p.awaitDrain--, 0 === p.awaitDrain && e.listeners("data").length && (p.flowing = true, Sp(e));
                    };
                  }(a);
                  e.on("drain", l);
                  var m = false;
                  function n() {
                    up("cleanup"), e.removeListener("close", h), e.removeListener("finish", f), e.removeListener("drain", l), e.removeListener("error", u), e.removeListener("unpipe", i), a.removeListener("end", r), a.removeListener("end", n), a.removeListener("data", s), m = true, !d.awaitDrain || e._writableState && !e._writableState.needDrain || l();
                  }
                  var o = false;
                  function s(p) {
                    up("ondata"), o = false, false !== e.write(p) || o || ((1 === d.pipesCount && d.pipes === e || d.pipesCount > 1 && -1 !== Vp(d.pipes, e)) && !m && (up("false write response, pause", a._readableState.awaitDrain), a._readableState.awaitDrain++, o = true), a.pause());
                  }
                  function u(p) {
                    var a;
                    up("onerror", p), c(), e.removeListener("error", u), 0 === (a = "error", e.listeners(a).length) && e.emit("error", p);
                  }
                  function h() {
                    e.removeListener("finish", f), c();
                  }
                  function f() {
                    up("onfinish"), e.removeListener("close", h), c();
                  }
                  function c() {
                    up("unpipe"), a.unpipe(e);
                  }
                  return a.on("data", s), function (e, p, a) {
                    if ("function" == typeof e.prependListener) return e.prependListener(p, a);
                    e._events && e._events[p] ? Array.isArray(e._events[p]) ? e._events[p].unshift(a) : e._events[p] = [a, e._events[p]] : e.on(p, a);
                  }(e, "error", u), e.once("close", h), e.once("finish", f), e.emit("pipe", a), d.flowing || (up("pipe resume"), a.resume()), e;
                }, fp.prototype.unpipe = function (e) {
                  var p = this._readableState;
                  if (0 === p.pipesCount) return this;
                  if (1 === p.pipesCount) return e && e !== p.pipes || (e || (e = p.pipes), p.pipes = null, p.pipesCount = 0, p.flowing = false, e && e.emit("unpipe", this)), this;
                  if (!e) {
                    var a = p.pipes,
                      d = p.pipesCount;
                    p.pipes = null, p.pipesCount = 0, p.flowing = false;
                    for (var t = 0; t < d; t++) a[t].emit("unpipe", this);
                    return this;
                  }
                  var i = Vp(p.pipes, e);
                  return -1 === i || (p.pipes.splice(i, 1), p.pipesCount -= 1, 1 === p.pipesCount && (p.pipes = p.pipes[0]), e.emit("unpipe", this)), this;
                }, fp.prototype.on = function (e, p) {
                  var a = l.prototype.on.call(this, e, p);
                  if ("data" === e) false !== this._readableState.flowing && this.resume();else if ("readable" === e) {
                    var d = this._readableState;
                    d.endEmitted || d.readableListening || (d.readableListening = d.needReadable = true, d.emittedReadable = false, d.reading ? d.length && _p(this) : Se(yp, this));
                  }
                  return a;
                }, fp.prototype.addListener = fp.prototype.on, fp.prototype.resume = function () {
                  var e = this._readableState;
                  return e.flowing || (up("resume"), e.flowing = true, function (e, p) {
                    p.resumeScheduled || (p.resumeScheduled = true, Se(Np, e, p));
                  }(this, e)), this;
                }, fp.prototype.pause = function () {
                  return up("call pause flowing=%j", this._readableState.flowing), false !== this._readableState.flowing && (up("pause"), this._readableState.flowing = false, this.emit("pause")), this;
                }, fp.prototype.wrap = function (e) {
                  var p = this._readableState,
                    a = false,
                    d = this;
                  for (var t in e.on("end", function () {
                    if (up("wrapped end"), p.decoder && !p.ended) {
                      var e = p.decoder.end();
                      e && e.length && d.push(e);
                    }
                    d.push(null);
                  }), e.on("data", function (t) {
                    up("wrapped data"), p.decoder && (t = p.decoder.write(t)), p.objectMode && null == t || (p.objectMode || t && t.length) && (d.push(t) || (a = true, e.pause()));
                  }), e) void 0 === this[t] && "function" == typeof e[t] && (this[t] = function (p) {
                    return function () {
                      return e[p].apply(e, arguments);
                    };
                  }(t));
                  return function (e, p) {
                    for (var a = 0, d = e.length; a < d; a++) p(e[a], a);
                  }(["error", "close", "destroy", "pause", "resume"], function (p) {
                    e.on(p, d.emit.bind(d, p));
                  }), d._read = function (p) {
                    up("wrapped _read", p), a && (a = false, e.resume());
                  }, d;
                }, fp._fromList = Dp, xp.WritableState = Rp, Ee(xp, l), Rp.prototype.getBuffer = function () {
                  for (var e = this.bufferedRequest, p = []; e;) p.push(e), e = e.next;
                  return p;
                }, xp.prototype.pipe = function () {
                  this.emit("error", new Error("Cannot pipe, not readable"));
                }, xp.prototype.write = function (e, p, a) {
                  var d = this._writableState,
                    t = false;
                  return "function" == typeof p && (a = p, p = null), V.isBuffer(e) ? p = "buffer" : p || (p = d.defaultEncoding), "function" != typeof a && (a = Ap), d.ended ? function (e, p) {
                    var a = new Error("write after end");
                    e.emit("error", a), Se(p, a);
                  }(this, a) : function (e, p, a, d) {
                    var t = true,
                      i = false;
                    return null === a ? i = new TypeError("May not write null values to stream") : V.isBuffer(a) || "string" == typeof a || void 0 === a || p.objectMode || (i = new TypeError("Invalid non-string/buffer chunk")), i && (e.emit("error", i), Se(d, i), t = false), t;
                  }(this, d, e, a) && (d.pendingcb++, t = function (e, p, a, d, t) {
                    a = function (e, p, a) {
                      return e.objectMode || false === e.decodeStrings || "string" != typeof p || (p = V.from(p, a)), p;
                    }(p, a, d), V.isBuffer(a) && (d = "buffer");
                    var i = p.objectMode ? 1 : a.length;
                    p.length += i;
                    var r = p.length < p.highWaterMark;
                    if (r || (p.needDrain = true), p.writing || p.corked) {
                      var l = p.lastBufferedRequest;
                      p.lastBufferedRequest = new kp(a, d, t), l ? l.next = p.lastBufferedRequest : p.bufferedRequest = p.lastBufferedRequest, p.bufferedRequestCount += 1;
                    } else Cp(e, p, false, i, a, d, t);
                    return r;
                  }(this, d, e, p, a)), t;
                }, xp.prototype.cork = function () {
                  this._writableState.corked++;
                }, xp.prototype.uncork = function () {
                  var e = this._writableState;
                  e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || Lp(this, e));
                }, xp.prototype.setDefaultEncoding = function (e) {
                  if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
                  return this._writableState.defaultEncoding = e, this;
                }, xp.prototype._write = function (e, p, a) {
                  a(new Error("not implemented"));
                }, xp.prototype._writev = null, xp.prototype.end = function (e, p, a) {
                  var d = this._writableState;
                  "function" == typeof e ? (a = e, e = null, p = null) : "function" == typeof p && (a = p, p = null), null != e && this.write(e, p), d.corked && (d.corked = 1, this.uncork()), d.ending || d.finished || function (e, p, a) {
                    p.ending = true, Pp(e, p), a && (p.finished ? Se(a) : e.once("finish", a)), p.ended = true, e.writable = false;
                  }(this, d, a);
                }, Ee(jp, fp);
                for (var Fp = Object.keys(xp.prototype), Ip = 0; Ip < Fp.length; Ip++) {
                  var Mp = Fp[Ip];
                  jp.prototype[Mp] || (jp.prototype[Mp] = xp.prototype[Mp]);
                }
                function jp(e) {
                  if (!(this instanceof jp)) return new jp(e);
                  fp.call(this, e), xp.call(this, e), e && false === e.readable && (this.readable = false), e && false === e.writable && (this.writable = false), this.allowHalfOpen = true, e && false === e.allowHalfOpen && (this.allowHalfOpen = false), this.once("end", qp);
                }
                function qp() {
                  this.allowHalfOpen || this._writableState.ended || Se(Zp, this);
                }
                function Zp(e) {
                  e.end();
                }
                function Hp(e) {
                  this.afterTransform = function (p, a) {
                    return function (e, p, a) {
                      var d = e._transformState;
                      d.transforming = false;
                      var t = d.writecb;
                      if (!t) return e.emit("error", new Error("no writecb in Transform class"));
                      d.writechunk = null, d.writecb = null, null != a && e.push(a), t(p);
                      var i = e._readableState;
                      i.reading = false, (i.needReadable || i.length < i.highWaterMark) && e._read(i.highWaterMark);
                    }(e, p, a);
                  }, this.needTransform = false, this.transforming = false, this.writecb = null, this.writechunk = null, this.writeencoding = null;
                }
                function $p(e) {
                  if (!(this instanceof $p)) return new $p(e);
                  jp.call(this, e), this._transformState = new Hp(this);
                  var p = this;
                  this._readableState.needReadable = true, this._readableState.sync = false, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.once("prefinish", function () {
                    "function" == typeof this._flush ? this._flush(function (e) {
                      Yp(p, e);
                    }) : Yp(p);
                  });
                }
                function Yp(e, p) {
                  if (p) return e.emit("error", p);
                  var a = e._writableState,
                    d = e._transformState;
                  if (a.length) throw new Error("Calling transform done when ws.length != 0");
                  if (d.transforming) throw new Error("Calling transform done when still transforming");
                  return e.push(null);
                }
                function Kp(e) {
                  if (!(this instanceof Kp)) return new Kp(e);
                  $p.call(this, e);
                }
                function Wp() {
                  l.call(this);
                }
                Ee($p, jp), $p.prototype.push = function (e, p) {
                  return this._transformState.needTransform = false, jp.prototype.push.call(this, e, p);
                }, $p.prototype._transform = function (e, p, a) {
                  throw new Error("Not implemented");
                }, $p.prototype._write = function (e, p, a) {
                  var d = this._transformState;
                  if (d.writecb = a, d.writechunk = e, d.writeencoding = p, !d.transforming) {
                    var t = this._readableState;
                    (d.needTransform || t.needReadable || t.length < t.highWaterMark) && this._read(t.highWaterMark);
                  }
                }, $p.prototype._read = function (e) {
                  var p = this._transformState;
                  null !== p.writechunk && p.writecb && !p.transforming ? (p.transforming = true, this._transform(p.writechunk, p.writeencoding, p.afterTransform)) : p.needTransform = true;
                }, Ee(Kp, $p), Kp.prototype._transform = function (e, p, a) {
                  a(null, e);
                }, Ee(Wp, l), Wp.Readable = fp, Wp.Writable = xp, Wp.Duplex = jp, Wp.Transform = $p, Wp.PassThrough = Kp, Wp.Stream = Wp, Wp.prototype.pipe = function (e, p) {
                  var a = this;
                  function d(p) {
                    e.writable && false === e.write(p) && a.pause && a.pause();
                  }
                  function t() {
                    a.readable && a.resume && a.resume();
                  }
                  a.on("data", d), e.on("drain", t), e._isStdio || p && false === p.end || (a.on("end", r), a.on("close", m));
                  var i = false;
                  function r() {
                    i || (i = true, e.end());
                  }
                  function m() {
                    i || (i = true, "function" == typeof e.destroy && e.destroy());
                  }
                  function n(e) {
                    if (o(), 0 === l.listenerCount(this, "error")) throw e;
                  }
                  function o() {
                    a.removeListener("data", d), e.removeListener("drain", t), a.removeListener("end", r), a.removeListener("close", m), a.removeListener("error", n), e.removeListener("error", n), a.removeListener("end", o), a.removeListener("close", o), e.removeListener("close", o);
                  }
                  return a.on("error", n), e.on("error", n), a.on("end", o), a.on("close", o), e.on("close", o), e.emit("pipe", a), e;
                };
                var Gp,
                  Xp,
                  Jp = d(Object.freeze({
                    __proto__: null,
                    Duplex: jp,
                    PassThrough: Kp,
                    Readable: fp,
                    Stream: Wp,
                    Transform: $p,
                    Writable: xp,
                    default: Wp
                  })),
                  Qp = ma(h.fetch) && ma(h.ReadableStream);
                function ea(e) {
                  Xp || (Xp = new h.XMLHttpRequest()).open("GET", h.location.host ? "/" : "https://example.com");
                  try {
                    return Xp.responseType = e, Xp.responseType === e;
                  } catch (e) {
                    return false;
                  }
                }
                var pa = void 0 !== h.ArrayBuffer,
                  aa = pa && ma(h.ArrayBuffer.prototype.slice),
                  da = pa && ea("arraybuffer"),
                  ta = !Qp && aa && ea("ms-stream"),
                  ia = !Qp && pa && ea("moz-chunked-arraybuffer"),
                  ra = ma(Xp.overrideMimeType),
                  la = ma(h.VBArray);
                function ma(e) {
                  return "function" == typeof e;
                }
                Xp = null;
                var na = 3,
                  oa = 4;
                function sa(e, p, a) {
                  var d,
                    t = this;
                  if (fp.call(t), t._mode = a, t.headers = {}, t.rawHeaders = [], t.trailers = {}, t.rawTrailers = [], t.on("end", function () {
                    Pe.nextTick(function () {
                      t.emit("close");
                    });
                  }), "fetch" === a) {
                    t._fetchResponse = p, t.url = p.url, t.statusCode = p.status, t.statusMessage = p.statusText;
                    for (var i, r, l = p.headers[Symbol.iterator](); i = (r = l.next()).value, !r.done;) t.headers[i[0].toLowerCase()] = i[1], t.rawHeaders.push(i[0], i[1]);
                    var m = p.body.getReader();
                    (d = function () {
                      m.read().then(function (e) {
                        t._destroyed || (e.done ? t.push(null) : (t.push(new V(e.value)), d()));
                      });
                    })();
                  } else if (t._xhr = e, t._pos = 0, t.url = e.responseURL, t.statusCode = e.status, t.statusMessage = e.statusText, e.getAllResponseHeaders().split(/\r?\n/).forEach(function (e) {
                    var p = e.match(/^([^:]+):\s*(.*)/);
                    if (p) {
                      var a = p[1].toLowerCase();
                      "set-cookie" === a ? (void 0 === t.headers[a] && (t.headers[a] = []), t.headers[a].push(p[2])) : void 0 !== t.headers[a] ? t.headers[a] += ", " + p[2] : t.headers[a] = p[2], t.rawHeaders.push(p[1], p[2]);
                    }
                  }), t._charset = "x-user-defined", !ra) {
                    var n = t.rawHeaders["mime-type"];
                    if (n) {
                      var o = n.match(/;\s*charset=([^;])(;|$)/);
                      o && (t._charset = o[1].toLowerCase());
                    }
                    t._charset || (t._charset = "utf-8");
                  }
                }
                function ua(e) {
                  var p,
                    a = this;
                  xp.call(a), a._opts = e, a._body = [], a._headers = {}, e.auth && a.setHeader("Authorization", "Basic " + new V(e.auth).toString("base64")), Object.keys(e.headers).forEach(function (p) {
                    a.setHeader(p, e.headers[p]);
                  });
                  var d = true;
                  if ("disable-fetch" === e.mode) d = false, p = true;else if ("prefer-streaming" === e.mode) p = false;else if ("allow-wrong-content-type" === e.mode) p = !ra;else {
                    if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode) throw new Error("Invalid value for opts.mode");
                    p = true;
                  }
                  a._mode = function (e, p) {
                    return Qp && p ? "fetch" : ia ? "moz-chunked-arraybuffer" : ta ? "ms-stream" : da && e ? "arraybuffer" : la && e ? "text:vbarray" : "text";
                  }(p, d), a.on("finish", function () {
                    a._onFinish();
                  });
                }
                Ee(sa, fp), sa.prototype._read = function () {}, sa.prototype._onXHRProgress = function () {
                  var e = this,
                    p = e._xhr,
                    a = null;
                  switch (e._mode) {
                    case "text:vbarray":
                      if (p.readyState !== oa) break;
                      try {
                        a = new h.VBArray(p.responseBody).toArray();
                      } catch (e) {}
                      if (null !== a) {
                        e.push(new V(a));
                        break;
                      }
                    case "text":
                      try {
                        a = p.responseText;
                      } catch (p) {
                        e._mode = "text:vbarray";
                        break;
                      }
                      if (a.length > e._pos) {
                        var d = a.substr(e._pos);
                        if ("x-user-defined" === e._charset) {
                          for (var t = new V(d.length), i = 0; i < d.length; i++) t[i] = 255 & d.charCodeAt(i);
                          e.push(t);
                        } else e.push(d, e._charset);
                        e._pos = a.length;
                      }
                      break;
                    case "arraybuffer":
                      if (p.readyState !== oa || !p.response) break;
                      a = p.response, e.push(new V(new Uint8Array(a)));
                      break;
                    case "moz-chunked-arraybuffer":
                      if (a = p.response, p.readyState !== na || !a) break;
                      e.push(new V(new Uint8Array(a)));
                      break;
                    case "ms-stream":
                      if (a = p.response, p.readyState !== na) break;
                      var r = new h.MSStreamReader();
                      r.onprogress = function () {
                        r.result.byteLength > e._pos && (e.push(new V(new Uint8Array(r.result.slice(e._pos)))), e._pos = r.result.byteLength);
                      }, r.onload = function () {
                        e.push(null);
                      }, r.readAsArrayBuffer(a);
                  }
                  e._xhr.readyState === oa && "ms-stream" !== e._mode && e.push(null);
                }, Ee(ua, xp);
                var ha = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
                ua.prototype.setHeader = function (e, p) {
                  var a = e.toLowerCase();
                  -1 === ha.indexOf(a) && (this._headers[a] = {
                    name: e,
                    value: p
                  });
                }, ua.prototype.getHeader = function (e) {
                  return this._headers[e.toLowerCase()].value;
                }, ua.prototype.removeHeader = function (e) {
                  delete this._headers[e.toLowerCase()];
                }, ua.prototype._onFinish = function () {
                  var e = this;
                  if (!e._destroyed) {
                    var p,
                      a = e._opts,
                      d = e._headers;
                    if ("POST" !== a.method && "PUT" !== a.method && "PATCH" !== a.method || (p = function () {
                      if (void 0 !== Gp) return Gp;
                      try {
                        new h.Blob([new ArrayBuffer(1)]), Gp = !0;
                      } catch (e) {
                        Gp = false;
                      }
                      return Gp;
                    }() ? new h.Blob(e._body.map(function (e) {
                      return function (e) {
                        if (e instanceof Uint8Array) {
                          if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength) return e.buffer;
                          if ("function" == typeof e.buffer.slice) return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                        }
                        if (oe(e)) {
                          for (var p = new Uint8Array(e.length), a = e.length, d = 0; d < a; d++) p[d] = e[d];
                          return p.buffer;
                        }
                        throw new Error("Argument must be a Buffer");
                      }(e);
                    }), {
                      type: (d["content-type"] || {}).value || ""
                    }) : V.concat(e._body).toString()), "fetch" === e._mode) {
                      var t = Object.keys(d).map(function (e) {
                        return [d[e].name, d[e].value];
                      });
                      h.fetch(e._opts.url, {
                        method: e._opts.method,
                        headers: t,
                        body: p,
                        mode: "cors",
                        credentials: a.withCredentials ? "include" : "same-origin"
                      }).then(function (p) {
                        e._fetchResponse = p, e._connect();
                      }, function (p) {
                        e.emit("error", p);
                      });
                    } else {
                      var i = e._xhr = new h.XMLHttpRequest();
                      try {
                        i.open(e._opts.method, e._opts.url, !0);
                      } catch (p) {
                        return void Pe.nextTick(function () {
                          e.emit("error", p);
                        });
                      }
                      "responseType" in i && (i.responseType = e._mode.split(":")[0]), "withCredentials" in i && (i.withCredentials = !!a.withCredentials), "text" === e._mode && "overrideMimeType" in i && i.overrideMimeType("text/plain; charset=x-user-defined"), Object.keys(d).forEach(function (e) {
                        i.setRequestHeader(d[e].name, d[e].value);
                      }), e._response = null, i.onreadystatechange = function () {
                        switch (i.readyState) {
                          case na:
                          case oa:
                            e._onXHRProgress();
                        }
                      }, "moz-chunked-arraybuffer" === e._mode && (i.onprogress = function () {
                        e._onXHRProgress();
                      }), i.onerror = function () {
                        e._destroyed || e.emit("error", new Error("XHR error"));
                      };
                      try {
                        i.send(p);
                      } catch (p) {
                        return void Pe.nextTick(function () {
                          e.emit("error", p);
                        });
                      }
                    }
                  }
                }, ua.prototype._onXHRProgress = function () {
                  var e = this;
                  (function (e) {
                    try {
                      var p = e.status;
                      return null !== p && 0 !== p;
                    } catch (e) {
                      return false;
                    }
                  })(e._xhr) && !e._destroyed && (e._response || e._connect(), e._response._onXHRProgress());
                }, ua.prototype._connect = function () {
                  var e = this;
                  e._destroyed || (e._response = new sa(e._xhr, e._fetchResponse, e._mode), e.emit("response", e._response));
                }, ua.prototype._write = function (e, p, a) {
                  this._body.push(e), a();
                }, ua.prototype.abort = ua.prototype.destroy = function () {
                  var e = this;
                  e._destroyed = true, e._response && (e._response._destroyed = true), e._xhr && e._xhr.abort();
                }, ua.prototype.end = function (e, p, a) {
                  "function" == typeof e && (a = e, e = void 0), xp.prototype.end.call(this, e, p, a);
                }, ua.prototype.flushHeaders = function () {}, ua.prototype.setTimeout = function () {}, ua.prototype.setNoDelay = function () {}, ua.prototype.setSocketKeepAlive = function () {};
                /*! https://mths.be/punycode v1.4.1 by @mathias */
                var fa = 2147483647,
                  ca = 36,
                  va = /^xn--/,
                  wa = /[^\x20-\x7E]/,
                  _a = /[\x2E\u3002\uFF0E\uFF61]/g,
                  ga = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                  },
                  ba = Math.floor,
                  ya = String.fromCharCode;
                function Na(e) {
                  throw new RangeError(ga[e]);
                }
                function Sa(e, p) {
                  for (var a = e.length, d = []; a--;) d[a] = p(e[a]);
                  return d;
                }
                function Da(e, p) {
                  var a = e.split("@"),
                    d = "";
                  return a.length > 1 && (d = a[0] + "@", e = a[1]), d + Sa((e = e.replace(_a, ".")).split("."), p).join(".");
                }
                function Ta(e) {
                  for (var p, a, d = [], t = 0, i = e.length; t < i;) (p = e.charCodeAt(t++)) >= 55296 && p <= 56319 && t < i ? 56320 == (64512 & (a = e.charCodeAt(t++))) ? d.push(((1023 & p) << 10) + (1023 & a) + 65536) : (d.push(p), t--) : d.push(p);
                  return d;
                }
                function Ea(e) {
                  return Sa(e, function (e) {
                    var p = "";
                    return e > 65535 && (p += ya((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), p + ya(e);
                  }).join("");
                }
                function Va(e, p) {
                  return e + 22 + 75 * (e < 26) - ((0 != p) << 5);
                }
                function Aa(e, p, a) {
                  var d = 0;
                  for (e = a ? ba(e / 700) : e >> 1, e += ba(e / p); e > 455; d += ca) e = ba(e / 35);
                  return ba(d + 36 * e / (e + 38));
                }
                function ka(e) {
                  var p,
                    a,
                    d,
                    t,
                    i,
                    r,
                    l,
                    m,
                    n,
                    o,
                    s,
                    u = [],
                    h = e.length,
                    f = 0,
                    c = 128,
                    v = 72;
                  for ((a = e.lastIndexOf("-")) < 0 && (a = 0), d = 0; d < a; ++d) e.charCodeAt(d) >= 128 && Na("not-basic"), u.push(e.charCodeAt(d));
                  for (t = a > 0 ? a + 1 : 0; t < h;) {
                    for (i = f, r = 1, l = ca; t >= h && Na("invalid-input"), ((m = (s = e.charCodeAt(t++)) - 48 < 10 ? s - 22 : s - 65 < 26 ? s - 65 : s - 97 < 26 ? s - 97 : ca) >= ca || m > ba((fa - f) / r)) && Na("overflow"), f += m * r, !(m < (n = l <= v ? 1 : l >= v + 26 ? 26 : l - v)); l += ca) r > ba(fa / (o = ca - n)) && Na("overflow"), r *= o;
                    v = Aa(f - i, p = u.length + 1, 0 == i), ba(f / p) > fa - c && Na("overflow"), c += ba(f / p), f %= p, u.splice(f++, 0, c);
                  }
                  return Ea(u);
                }
                function Ra(e) {
                  var p,
                    a,
                    d,
                    t,
                    i,
                    r,
                    l,
                    m,
                    n,
                    o,
                    s,
                    u,
                    h,
                    f,
                    c,
                    v = [];
                  for (u = (e = Ta(e)).length, p = 128, a = 0, i = 72, r = 0; r < u; ++r) (s = e[r]) < 128 && v.push(ya(s));
                  for (d = t = v.length, t && v.push("-"); d < u;) {
                    for (l = fa, r = 0; r < u; ++r) (s = e[r]) >= p && s < l && (l = s);
                    for (l - p > ba((fa - a) / (h = d + 1)) && Na("overflow"), a += (l - p) * h, p = l, r = 0; r < u; ++r) if ((s = e[r]) < p && ++a > fa && Na("overflow"), s == p) {
                      for (m = a, n = ca; !(m < (o = n <= i ? 1 : n >= i + 26 ? 26 : n - i)); n += ca) c = m - o, f = ca - o, v.push(ya(Va(o + c % f, 0))), m = ba(c / f);
                      v.push(ya(Va(m, 0))), i = Aa(a, h, d == t), a = 0, ++d;
                    }
                    ++a, ++p;
                  }
                  return v.join("");
                }
                function xa(e) {
                  return Da(e, function (e) {
                    return va.test(e) ? ka(e.slice(4).toLowerCase()) : e;
                  });
                }
                function Ca(e) {
                  return Da(e, function (e) {
                    return wa.test(e) ? "xn--" + Ra(e) : e;
                  });
                }
                var Oa = "1.4.1",
                  La = {
                    decode: Ta,
                    encode: Ea
                  },
                  Ba = {
                    version: Oa,
                    ucs2: La,
                    toASCII: Ca,
                    toUnicode: xa,
                    encode: Ra,
                    decode: ka
                  },
                  Ua = Object.freeze({
                    __proto__: null,
                    decode: ka,
                    default: Ba,
                    encode: Ra,
                    toASCII: Ca,
                    toUnicode: xa,
                    ucs2: La,
                    version: Oa
                  });
                function Pa(e, p) {
                  return Object.prototype.hasOwnProperty.call(e, p);
                }
                var za = Array.isArray || function (e) {
                  return "[object Array]" === Object.prototype.toString.call(e);
                };
                function Fa(e) {
                  switch (typeof e) {
                    case "string":
                      return e;
                    case "boolean":
                      return e ? "true" : "false";
                    case "number":
                      return isFinite(e) ? e : "";
                    default:
                      return "";
                  }
                }
                function Ia(e, p) {
                  if (e.map) return e.map(p);
                  for (var a = [], d = 0; d < e.length; d++) a.push(p(e[d], d));
                  return a;
                }
                var Ma = Object.keys || function (e) {
                  var p = [];
                  for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && p.push(a);
                  return p;
                };
                function ja(e, p, a, d) {
                  p = p || "&", a = a || "=";
                  var t = {};
                  if ("string" != typeof e || 0 === e.length) return t;
                  var i = /\+/g,
                    r = 1e3,
                    l = (e = e.split(p)).length;
                  l > r && (l = r);
                  for (var m = 0; m < l; ++m) {
                    var n,
                      o,
                      s,
                      u,
                      h = e[m].replace(i, "%20"),
                      f = h.indexOf(a);
                    f >= 0 ? (n = h.substr(0, f), o = h.substr(f + 1)) : (n = h, o = ""), s = decodeURIComponent(n), u = decodeURIComponent(o), Pa(t, s) ? za(t[s]) ? t[s].push(u) : t[s] = [t[s], u] : t[s] = u;
                  }
                  return t;
                }
                const qa = h.URL,
                  Za = h.URLSearchParams;
                var Ha = {
                  parse: rd,
                  resolve: sd,
                  resolveObject: ud,
                  fileURLToPath: md,
                  format: nd,
                  Url: $a,
                  URL: qa,
                  URLSearchParams: Za
                };
                function $a() {
                  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
                }
                var Ya = /^([a-z0-9.+-]+:)/i,
                  Ka = /:[0-9]*$/,
                  Wa = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                  Ga = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                  Xa = ["'"].concat(Ga),
                  Ja = ["%", "/", "?", ";", "#"].concat(Xa),
                  Qa = ["/", "?", "#"],
                  ed = 255,
                  pd = /^[+a-z0-9A-Z_-]{0,63}$/,
                  ad = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                  dd = {
                    javascript: true,
                    "javascript:": true
                  },
                  td = {
                    javascript: true,
                    "javascript:": true
                  },
                  id = {
                    http: true,
                    https: true,
                    ftp: true,
                    gopher: true,
                    file: true,
                    "http:": true,
                    "https:": true,
                    "ftp:": true,
                    "gopher:": true,
                    "file:": true
                  };
                function rd(e, p, a) {
                  if (e && ep(e) && e instanceof $a) return e;
                  var d = new $a();
                  return d.parse(e, p, a), d;
                }
                function ld(e, p, a, d) {
                  if (!Xe(p)) throw new TypeError("Parameter 'url' must be a string, not " + typeof p);
                  var t = p.indexOf("?"),
                    i = -1 !== t && t < p.indexOf("#") ? "?" : "#",
                    r = p.split(i);
                  r[0] = r[0].replace(/\\/g, "/");
                  var l = p = r.join(i);
                  if (l = l.trim(), !d && 1 === p.split("#").length) {
                    var m = Wa.exec(l);
                    if (m) return e.path = l, e.href = l, e.pathname = m[1], m[2] ? (e.search = m[2], e.query = a ? ja(e.search.substr(1)) : e.search.substr(1)) : a && (e.search = "", e.query = {}), e;
                  }
                  var n,
                    o,
                    s,
                    u,
                    h = Ya.exec(l);
                  if (h) {
                    var f = (h = h[0]).toLowerCase();
                    e.protocol = f, l = l.substr(h.length);
                  }
                  if (d || h || l.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var c = "//" === l.substr(0, 2);
                    !c || h && td[h] || (l = l.substr(2), e.slashes = true);
                  }
                  if (!td[h] && (c || h && !id[h])) {
                    var v,
                      w,
                      _ = -1;
                    for (n = 0; n < Qa.length; n++) -1 !== (o = l.indexOf(Qa[n])) && (-1 === _ || o < _) && (_ = o);
                    for (-1 !== (w = -1 === _ ? l.lastIndexOf("@") : l.lastIndexOf("@", _)) && (v = l.slice(0, w), l = l.slice(w + 1), e.auth = decodeURIComponent(v)), _ = -1, n = 0; n < Ja.length; n++) -1 !== (o = l.indexOf(Ja[n])) && (-1 === _ || o < _) && (_ = o);
                    -1 === _ && (_ = l.length), e.host = l.slice(0, _), l = l.slice(_), hd(e), e.hostname = e.hostname || "";
                    var g = "[" === e.hostname[0] && "]" === e.hostname[e.hostname.length - 1];
                    if (!g) {
                      var b = e.hostname.split(/\./);
                      for (n = 0, s = b.length; n < s; n++) {
                        var y = b[n];
                        if (y && !y.match(pd)) {
                          for (var N = "", S = 0, D = y.length; S < D; S++) y.charCodeAt(S) > 127 ? N += "x" : N += y[S];
                          if (!N.match(pd)) {
                            var T = b.slice(0, n),
                              E = b.slice(n + 1),
                              V = y.match(ad);
                            V && (T.push(V[1]), E.unshift(V[2])), E.length && (l = "/" + E.join(".") + l), e.hostname = T.join(".");
                            break;
                          }
                        }
                      }
                    }
                    e.hostname.length > ed ? e.hostname = "" : e.hostname = e.hostname.toLowerCase(), g || (e.hostname = Ca(e.hostname)), u = e.port ? ":" + e.port : "";
                    var A = e.hostname || "";
                    e.host = A + u, e.href += e.host, g && (e.hostname = e.hostname.substr(1, e.hostname.length - 2), "/" !== l[0] && (l = "/" + l));
                  }
                  if (!dd[f]) for (n = 0, s = Xa.length; n < s; n++) {
                    var k = Xa[n];
                    if (-1 !== l.indexOf(k)) {
                      var R = encodeURIComponent(k);
                      R === k && (R = escape(k)), l = l.split(k).join(R);
                    }
                  }
                  var x = l.indexOf("#");
                  -1 !== x && (e.hash = l.substr(x), l = l.slice(0, x));
                  var C = l.indexOf("?");
                  if (-1 !== C ? (e.search = l.substr(C), e.query = l.substr(C + 1), a && (e.query = ja(e.query)), l = l.slice(0, C)) : a && (e.search = "", e.query = {}), l && (e.pathname = l), id[f] && e.hostname && !e.pathname && (e.pathname = "/"), e.pathname || e.search) {
                    u = e.pathname || "";
                    var O = e.search || "";
                    e.path = u + O;
                  }
                  return e.href = od(e), e;
                }
                function md(e) {
                  if ("string" == typeof e) e = new $a().parse(e);else if (!(e instanceof $a)) throw new TypeError('The "path" argument must be of type string or an instance of URL. Received type ' + typeof e + String(e));
                  if ("file:" !== e.protocol) throw new TypeError("The URL must be of scheme file");
                  return function (e) {
                    const p = e.pathname;
                    for (let e = 0; e < p.length; e++) if ("%" === p[e]) {
                      const a = 32 | p.codePointAt(e + 2);
                      if ("2" === p[e + 1] && 102 === a) throw new TypeError("must not include encoded / characters");
                    }
                    return decodeURIComponent(p);
                  }(e);
                }
                function nd(e) {
                  return Xe(e) && (e = ld({}, e)), od(e);
                }
                function od(e) {
                  var p = e.auth || "";
                  p && (p = (p = encodeURIComponent(p)).replace(/%3A/i, ":"), p += "@");
                  var a,
                    d,
                    t,
                    i = e.protocol || "",
                    r = e.pathname || "",
                    l = e.hash || "",
                    m = false,
                    n = "";
                  e.host ? m = p + e.host : e.hostname && (m = p + (-1 === e.hostname.indexOf(":") ? e.hostname : "[" + this.hostname + "]"), e.port && (m += ":" + e.port)), e.query && ep(e.query) && Object.keys(e.query).length && (a = e.query, d = d || "&", t = t || "=", null === a && (a = void 0), n = "object" == typeof a ? Ia(Ma(a), function (e) {
                    var p = encodeURIComponent(Fa(e)) + t;
                    return za(a[e]) ? Ia(a[e], function (e) {
                      return p + encodeURIComponent(Fa(e));
                    }).join(d) : p + encodeURIComponent(Fa(a[e]));
                  }).join(d) : "");
                  var o = e.search || n && "?" + n || "";
                  return i && ":" !== i.substr(-1) && (i += ":"), e.slashes || (!i || id[i]) && false !== m ? (m = "//" + (m || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : m || (m = ""), l && "#" !== l.charAt(0) && (l = "#" + l), o && "?" !== o.charAt(0) && (o = "?" + o), i + m + (r = r.replace(/[?#]/g, function (e) {
                    return encodeURIComponent(e);
                  })) + (o = o.replace("#", "%23")) + l;
                }
                function sd(e, p) {
                  return rd(e, false, true).resolve(p);
                }
                function ud(e, p) {
                  return e ? rd(e, false, true).resolveObject(p) : p;
                }
                function hd(e) {
                  var p = e.host,
                    a = Ka.exec(p);
                  a && (":" !== (a = a[0]) && (e.port = a.substr(1)), p = p.substr(0, p.length - a.length)), p && (e.hostname = p);
                }
                $a.prototype.parse = function (e, p, a) {
                  return ld(this, e, p, a);
                }, $a.prototype.format = function () {
                  return od(this);
                }, $a.prototype.resolve = function (e) {
                  return this.resolveObject(rd(e, false, true)).format();
                }, $a.prototype.resolveObject = function (e) {
                  if (Xe(e)) {
                    var p = new $a();
                    p.parse(e, false, true), e = p;
                  }
                  for (var a, d = new $a(), t = Object.keys(this), i = 0; i < t.length; i++) {
                    var r = t[i];
                    d[r] = this[r];
                  }
                  if (d.hash = e.hash, "" === e.href) return d.href = d.format(), d;
                  if (e.slashes && !e.protocol) {
                    for (var l = Object.keys(e), m = 0; m < l.length; m++) {
                      var n = l[m];
                      "protocol" !== n && (d[n] = e[n]);
                    }
                    return id[d.protocol] && d.hostname && !d.pathname && (d.path = d.pathname = "/"), d.href = d.format(), d;
                  }
                  if (e.protocol && e.protocol !== d.protocol) {
                    if (!id[e.protocol]) {
                      for (var o = Object.keys(e), s = 0; s < o.length; s++) {
                        var u = o[s];
                        d[u] = e[u];
                      }
                      return d.href = d.format(), d;
                    }
                    if (d.protocol = e.protocol, e.host || td[e.protocol]) d.pathname = e.pathname;else {
                      for (a = (e.pathname || "").split("/"); a.length && !(e.host = a.shift()););
                      e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== a[0] && a.unshift(""), a.length < 2 && a.unshift(""), d.pathname = a.join("/");
                    }
                    if (d.search = e.search, d.query = e.query, d.host = e.host || "", d.auth = e.auth, d.hostname = e.hostname || e.host, d.port = e.port, d.pathname || d.search) {
                      var h = d.pathname || "",
                        f = d.search || "";
                      d.path = h + f;
                    }
                    return d.slashes = d.slashes || e.slashes, d.href = d.format(), d;
                  }
                  var c,
                    v = d.pathname && "/" === d.pathname.charAt(0),
                    w = e.host || e.pathname && "/" === e.pathname.charAt(0),
                    _ = w || v || d.host && e.pathname,
                    g = _,
                    b = d.pathname && d.pathname.split("/") || [],
                    y = d.protocol && !id[d.protocol];
                  if (a = e.pathname && e.pathname.split("/") || [], y && (d.hostname = "", d.port = null, d.host && ("" === b[0] ? b[0] = d.host : b.unshift(d.host)), d.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === a[0] ? a[0] = e.host : a.unshift(e.host)), e.host = null), _ = _ && ("" === a[0] || "" === b[0])), w) d.host = e.host || "" === e.host ? e.host : d.host, d.hostname = e.hostname || "" === e.hostname ? e.hostname : d.hostname, d.search = e.search, d.query = e.query, b = a;else if (a.length) b || (b = []), b.pop(), b = b.concat(a), d.search = e.search, d.query = e.query;else if (null != e.search) return y && (d.hostname = d.host = b.shift(), (c = !!(d.host && d.host.indexOf("@") > 0) && d.host.split("@")) && (d.auth = c.shift(), d.host = d.hostname = c.shift())), d.search = e.search, d.query = e.query, Ge(d.pathname) && Ge(d.search) || (d.path = (d.pathname ? d.pathname : "") + (d.search ? d.search : "")), d.href = d.format(), d;
                  if (!b.length) return d.pathname = null, d.search ? d.path = "/" + d.search : d.path = null, d.href = d.format(), d;
                  for (var N = b.slice(-1)[0], S = (d.host || e.host || b.length > 1) && ("." === N || ".." === N) || "" === N, D = 0, T = b.length; T >= 0; T--) "." === (N = b[T]) ? b.splice(T, 1) : ".." === N ? (b.splice(T, 1), D++) : D && (b.splice(T, 1), D--);
                  if (!_ && !g) for (; D--; D) b.unshift("..");
                  !_ || "" === b[0] || b[0] && "/" === b[0].charAt(0) || b.unshift(""), S && "/" !== b.join("/").substr(-1) && b.push("");
                  var E = "" === b[0] || b[0] && "/" === b[0].charAt(0);
                  return y && (d.hostname = d.host = E ? "" : b.length ? b.shift() : "", (c = !!(d.host && d.host.indexOf("@") > 0) && d.host.split("@")) && (d.auth = c.shift(), d.host = d.hostname = c.shift())), (_ = _ || d.host && b.length) && !E && b.unshift(""), b.length ? d.pathname = b.join("/") : (d.pathname = null, d.path = null), Ge(d.pathname) && Ge(d.search) || (d.path = (d.pathname ? d.pathname : "") + (d.search ? d.search : "")), d.auth = e.auth || d.auth, d.slashes = d.slashes || e.slashes, d.href = d.format(), d;
                }, $a.prototype.parseHost = function () {
                  return hd(this);
                };
                var fd = Object.freeze({
                  __proto__: null,
                  URL: qa,
                  URLSearchParams: Za,
                  Url: $a,
                  default: Ha,
                  fileURLToPath: md,
                  format: nd,
                  parse: rd,
                  resolve: sd,
                  resolveObject: ud
                });
                function cd(e, p) {
                  "string" == typeof e && (e = rd(e));
                  var a = -1 === h.location.protocol.search(/^https?:$/) ? "http:" : "",
                    d = e.protocol || a,
                    t = e.hostname || e.host,
                    i = e.port,
                    r = e.path || "/";
                  t && -1 !== t.indexOf(":") && (t = "[" + t + "]"), e.url = (t ? d + "//" + t : "") + (i ? ":" + i : "") + r, e.method = (e.method || "GET").toUpperCase(), e.headers = e.headers || {};
                  var l = new ua(e);
                  return p && l.on("response", p), l;
                }
                function vd(e, p) {
                  var a = cd(e, p);
                  return a.end(), a;
                }
                function wd() {}
                wd.defaultMaxSockets = 4;
                var _d = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"],
                  gd = {
                    100: "Continue",
                    101: "Switching Protocols",
                    102: "Processing",
                    200: "OK",
                    201: "Created",
                    202: "Accepted",
                    203: "Non-Authoritative Information",
                    204: "No Content",
                    205: "Reset Content",
                    206: "Partial Content",
                    207: "Multi-Status",
                    300: "Multiple Choices",
                    301: "Moved Permanently",
                    302: "Moved Temporarily",
                    303: "See Other",
                    304: "Not Modified",
                    305: "Use Proxy",
                    307: "Temporary Redirect",
                    400: "Bad Request",
                    401: "Unauthorized",
                    402: "Payment Required",
                    403: "Forbidden",
                    404: "Not Found",
                    405: "Method Not Allowed",
                    406: "Not Acceptable",
                    407: "Proxy Authentication Required",
                    408: "Request Time-out",
                    409: "Conflict",
                    410: "Gone",
                    411: "Length Required",
                    412: "Precondition Failed",
                    413: "Request Entity Too Large",
                    414: "Request-URI Too Large",
                    415: "Unsupported Media Type",
                    416: "Requested Range Not Satisfiable",
                    417: "Expectation Failed",
                    418: "I'm a teapot",
                    422: "Unprocessable Entity",
                    423: "Locked",
                    424: "Failed Dependency",
                    425: "Unordered Collection",
                    426: "Upgrade Required",
                    428: "Precondition Required",
                    429: "Too Many Requests",
                    431: "Request Header Fields Too Large",
                    500: "Internal Server Error",
                    501: "Not Implemented",
                    502: "Bad Gateway",
                    503: "Service Unavailable",
                    504: "Gateway Time-out",
                    505: "HTTP Version Not Supported",
                    506: "Variant Also Negotiates",
                    507: "Insufficient Storage",
                    509: "Bandwidth Limit Exceeded",
                    510: "Not Extended",
                    511: "Network Authentication Required"
                  },
                  bd = {
                    request: cd,
                    get: vd,
                    Agent: wd,
                    METHODS: _d,
                    STATUS_CODES: gd
                  },
                  yd = d(Object.freeze({
                    __proto__: null,
                    Agent: wd,
                    METHODS: _d,
                    STATUS_CODES: gd,
                    default: bd,
                    get: vd,
                    request: cd
                  })),
                  Nd = d(fd),
                  Sd = d(Ua);
                function Dd(e, p) {
                  "string" == typeof e && (e = rd(e));
                  var a = -1 === h.location.protocol.search(/^https?:$/) ? "http:" : "",
                    d = e.protocol || a,
                    t = e.hostname || e.host,
                    i = e.port,
                    r = e.path || "/";
                  t && -1 !== t.indexOf(":") && (t = "[" + t + "]"), e.url = (t ? d + "//" + t : "") + (i ? ":" + i : "") + r, e.method = (e.method || "GET").toUpperCase(), e.headers = e.headers || {};
                  var l = new ua(e);
                  return p && l.on("response", p), l;
                }
                function Td(e, p) {
                  var a = Dd(e, p);
                  return a.end(), a;
                }
                function Ed() {}
                Ed.defaultMaxSockets = 4;
                var Vd = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"],
                  Ad = {
                    100: "Continue",
                    101: "Switching Protocols",
                    102: "Processing",
                    200: "OK",
                    201: "Created",
                    202: "Accepted",
                    203: "Non-Authoritative Information",
                    204: "No Content",
                    205: "Reset Content",
                    206: "Partial Content",
                    207: "Multi-Status",
                    300: "Multiple Choices",
                    301: "Moved Permanently",
                    302: "Moved Temporarily",
                    303: "See Other",
                    304: "Not Modified",
                    305: "Use Proxy",
                    307: "Temporary Redirect",
                    400: "Bad Request",
                    401: "Unauthorized",
                    402: "Payment Required",
                    403: "Forbidden",
                    404: "Not Found",
                    405: "Method Not Allowed",
                    406: "Not Acceptable",
                    407: "Proxy Authentication Required",
                    408: "Request Time-out",
                    409: "Conflict",
                    410: "Gone",
                    411: "Length Required",
                    412: "Precondition Failed",
                    413: "Request Entity Too Large",
                    414: "Request-URI Too Large",
                    415: "Unsupported Media Type",
                    416: "Requested Range Not Satisfiable",
                    417: "Expectation Failed",
                    418: "I'm a teapot",
                    422: "Unprocessable Entity",
                    423: "Locked",
                    424: "Failed Dependency",
                    425: "Unordered Collection",
                    426: "Upgrade Required",
                    428: "Precondition Required",
                    429: "Too Many Requests",
                    431: "Request Header Fields Too Large",
                    500: "Internal Server Error",
                    501: "Not Implemented",
                    502: "Bad Gateway",
                    503: "Service Unavailable",
                    504: "Gateway Time-out",
                    505: "HTTP Version Not Supported",
                    506: "Variant Also Negotiates",
                    507: "Insufficient Storage",
                    509: "Bandwidth Limit Exceeded",
                    510: "Not Extended",
                    511: "Network Authentication Required"
                  },
                  kd = {
                    request: Dd,
                    get: Td,
                    Agent: Ed,
                    METHODS: Vd,
                    STATUS_CODES: Ad
                  },
                  Rd = d(Object.freeze({
                    __proto__: null,
                    Agent: Ed,
                    METHODS: Vd,
                    STATUS_CODES: Ad,
                    default: kd,
                    get: Td,
                    request: Dd
                  })),
                  xd = {
                    2: "need dictionary",
                    1: "stream end",
                    0: "",
                    "-1": "file error",
                    "-2": "stream error",
                    "-3": "data error",
                    "-4": "insufficient memory",
                    "-5": "buffer error",
                    "-6": "incompatible version"
                  };
                function Cd() {
                  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
                }
                function Od(e, p, a, d, t) {
                  if (p.subarray && e.subarray) e.set(p.subarray(a, a + d), t);else for (var i = 0; i < d; i++) e[t + i] = p[a + i];
                }
                var Ld = Uint8Array,
                  Bd = Uint16Array,
                  Ud = Int32Array;
                function Pd(e) {
                  for (var p = e.length; --p >= 0;) e[p] = 0;
                }
                var zd = 256,
                  Fd = 286,
                  Id = 30,
                  Md = 15,
                  jd = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                  qd = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                  Zd = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                  Hd = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                  $d = new Array(576);
                Pd($d);
                var Yd = new Array(60);
                Pd(Yd);
                var Kd = new Array(512);
                Pd(Kd);
                var Wd = new Array(256);
                Pd(Wd);
                var Gd = new Array(29);
                Pd(Gd);
                var Xd,
                  Jd,
                  Qd,
                  et = new Array(Id);
                function pt(e, p, a, d, t) {
                  this.static_tree = e, this.extra_bits = p, this.extra_base = a, this.elems = d, this.max_length = t, this.has_stree = e && e.length;
                }
                function at(e, p) {
                  this.dyn_tree = e, this.max_code = 0, this.stat_desc = p;
                }
                function dt(e) {
                  return e < 256 ? Kd[e] : Kd[256 + (e >>> 7)];
                }
                function tt(e, p) {
                  e.pending_buf[e.pending++] = 255 & p, e.pending_buf[e.pending++] = p >>> 8 & 255;
                }
                function it(e, p, a) {
                  e.bi_valid > 16 - a ? (e.bi_buf |= p << e.bi_valid & 65535, tt(e, e.bi_buf), e.bi_buf = p >> 16 - e.bi_valid, e.bi_valid += a - 16) : (e.bi_buf |= p << e.bi_valid & 65535, e.bi_valid += a);
                }
                function rt(e, p, a) {
                  it(e, a[2 * p], a[2 * p + 1]);
                }
                function lt(e, p) {
                  var a = 0;
                  do {
                    a |= 1 & e, e >>>= 1, a <<= 1;
                  } while (--p > 0);
                  return a >>> 1;
                }
                function mt(e, p, a) {
                  var d,
                    t,
                    i = new Array(16),
                    r = 0;
                  for (d = 1; d <= Md; d++) i[d] = r = r + a[d - 1] << 1;
                  for (t = 0; t <= p; t++) {
                    var l = e[2 * t + 1];
                    0 !== l && (e[2 * t] = lt(i[l]++, l));
                  }
                }
                function nt(e) {
                  var p;
                  for (p = 0; p < Fd; p++) e.dyn_ltree[2 * p] = 0;
                  for (p = 0; p < Id; p++) e.dyn_dtree[2 * p] = 0;
                  for (p = 0; p < 19; p++) e.bl_tree[2 * p] = 0;
                  e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
                }
                function ot(e) {
                  e.bi_valid > 8 ? tt(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
                }
                function st(e, p, a, d) {
                  var t = 2 * p,
                    i = 2 * a;
                  return e[t] < e[i] || e[t] === e[i] && d[p] <= d[a];
                }
                function ut(e, p, a) {
                  for (var d = e.heap[a], t = a << 1; t <= e.heap_len && (t < e.heap_len && st(p, e.heap[t + 1], e.heap[t], e.depth) && t++, !st(p, d, e.heap[t], e.depth));) e.heap[a] = e.heap[t], a = t, t <<= 1;
                  e.heap[a] = d;
                }
                function ht(e, p, a) {
                  var d,
                    t,
                    i,
                    r,
                    l = 0;
                  if (0 !== e.last_lit) do {
                    d = e.pending_buf[e.d_buf + 2 * l] << 8 | e.pending_buf[e.d_buf + 2 * l + 1], t = e.pending_buf[e.l_buf + l], l++, 0 === d ? rt(e, t, p) : (rt(e, (i = Wd[t]) + zd + 1, p), 0 !== (r = jd[i]) && it(e, t -= Gd[i], r), rt(e, i = dt(--d), a), 0 !== (r = qd[i]) && it(e, d -= et[i], r));
                  } while (l < e.last_lit);
                  rt(e, 256, p);
                }
                function ft(e, p) {
                  var a,
                    d,
                    t,
                    i = p.dyn_tree,
                    r = p.stat_desc.static_tree,
                    l = p.stat_desc.has_stree,
                    m = p.stat_desc.elems,
                    n = -1;
                  for (e.heap_len = 0, e.heap_max = 573, a = 0; a < m; a++) 0 !== i[2 * a] ? (e.heap[++e.heap_len] = n = a, e.depth[a] = 0) : i[2 * a + 1] = 0;
                  for (; e.heap_len < 2;) i[2 * (t = e.heap[++e.heap_len] = n < 2 ? ++n : 0)] = 1, e.depth[t] = 0, e.opt_len--, l && (e.static_len -= r[2 * t + 1]);
                  for (p.max_code = n, a = e.heap_len >> 1; a >= 1; a--) ut(e, i, a);
                  t = m;
                  do {
                    a = e.heap[1], e.heap[1] = e.heap[e.heap_len--], ut(e, i, 1), d = e.heap[1], e.heap[--e.heap_max] = a, e.heap[--e.heap_max] = d, i[2 * t] = i[2 * a] + i[2 * d], e.depth[t] = (e.depth[a] >= e.depth[d] ? e.depth[a] : e.depth[d]) + 1, i[2 * a + 1] = i[2 * d + 1] = t, e.heap[1] = t++, ut(e, i, 1);
                  } while (e.heap_len >= 2);
                  e.heap[--e.heap_max] = e.heap[1], function (e, p) {
                    var a,
                      d,
                      t,
                      i,
                      r,
                      l,
                      m = p.dyn_tree,
                      n = p.max_code,
                      o = p.stat_desc.static_tree,
                      s = p.stat_desc.has_stree,
                      u = p.stat_desc.extra_bits,
                      h = p.stat_desc.extra_base,
                      f = p.stat_desc.max_length,
                      c = 0;
                    for (i = 0; i <= Md; i++) e.bl_count[i] = 0;
                    for (m[2 * e.heap[e.heap_max] + 1] = 0, a = e.heap_max + 1; a < 573; a++) (i = m[2 * m[2 * (d = e.heap[a]) + 1] + 1] + 1) > f && (i = f, c++), m[2 * d + 1] = i, d > n || (e.bl_count[i]++, r = 0, d >= h && (r = u[d - h]), l = m[2 * d], e.opt_len += l * (i + r), s && (e.static_len += l * (o[2 * d + 1] + r)));
                    if (0 !== c) {
                      do {
                        for (i = f - 1; 0 === e.bl_count[i];) i--;
                        e.bl_count[i]--, e.bl_count[i + 1] += 2, e.bl_count[f]--, c -= 2;
                      } while (c > 0);
                      for (i = f; 0 !== i; i--) for (d = e.bl_count[i]; 0 !== d;) (t = e.heap[--a]) > n || (m[2 * t + 1] !== i && (e.opt_len += (i - m[2 * t + 1]) * m[2 * t], m[2 * t + 1] = i), d--);
                    }
                  }(e, p), mt(i, n, e.bl_count);
                }
                function ct(e, p, a) {
                  var d,
                    t,
                    i = -1,
                    r = p[1],
                    l = 0,
                    m = 7,
                    n = 4;
                  for (0 === r && (m = 138, n = 3), p[2 * (a + 1) + 1] = 65535, d = 0; d <= a; d++) t = r, r = p[2 * (d + 1) + 1], ++l < m && t === r || (l < n ? e.bl_tree[2 * t] += l : 0 !== t ? (t !== i && e.bl_tree[2 * t]++, e.bl_tree[32]++) : l <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++, l = 0, i = t, 0 === r ? (m = 138, n = 3) : t === r ? (m = 6, n = 3) : (m = 7, n = 4));
                }
                function vt(e, p, a) {
                  var d,
                    t,
                    i = -1,
                    r = p[1],
                    l = 0,
                    m = 7,
                    n = 4;
                  for (0 === r && (m = 138, n = 3), d = 0; d <= a; d++) if (t = r, r = p[2 * (d + 1) + 1], !(++l < m && t === r)) {
                    if (l < n) do {
                      rt(e, t, e.bl_tree);
                    } while (0 != --l);else 0 !== t ? (t !== i && (rt(e, t, e.bl_tree), l--), rt(e, 16, e.bl_tree), it(e, l - 3, 2)) : l <= 10 ? (rt(e, 17, e.bl_tree), it(e, l - 3, 3)) : (rt(e, 18, e.bl_tree), it(e, l - 11, 7));
                    l = 0, i = t, 0 === r ? (m = 138, n = 3) : t === r ? (m = 6, n = 3) : (m = 7, n = 4);
                  }
                }
                Pd(et);
                var wt = false;
                function _t(e) {
                  wt || (function () {
                    var e,
                      p,
                      a,
                      d,
                      t,
                      i = new Array(16);
                    for (a = 0, d = 0; d < 28; d++) for (Gd[d] = a, e = 0; e < 1 << jd[d]; e++) Wd[a++] = d;
                    for (Wd[a - 1] = d, t = 0, d = 0; d < 16; d++) for (et[d] = t, e = 0; e < 1 << qd[d]; e++) Kd[t++] = d;
                    for (t >>= 7; d < Id; d++) for (et[d] = t << 7, e = 0; e < 1 << qd[d] - 7; e++) Kd[256 + t++] = d;
                    for (p = 0; p <= Md; p++) i[p] = 0;
                    for (e = 0; e <= 143;) $d[2 * e + 1] = 8, e++, i[8]++;
                    for (; e <= 255;) $d[2 * e + 1] = 9, e++, i[9]++;
                    for (; e <= 279;) $d[2 * e + 1] = 7, e++, i[7]++;
                    for (; e <= 287;) $d[2 * e + 1] = 8, e++, i[8]++;
                    for (mt($d, 287, i), e = 0; e < Id; e++) Yd[2 * e + 1] = 5, Yd[2 * e] = lt(e, 5);
                    Xd = new pt($d, jd, 257, Fd, Md), Jd = new pt(Yd, qd, 0, Id, Md), Qd = new pt(new Array(0), Zd, 0, 19, 7);
                  }(), wt = true), e.l_desc = new at(e.dyn_ltree, Xd), e.d_desc = new at(e.dyn_dtree, Jd), e.bl_desc = new at(e.bl_tree, Qd), e.bi_buf = 0, e.bi_valid = 0, nt(e);
                }
                function gt(e, p, a, d) {
                  it(e, 0 + (d ? 1 : 0), 3), function (e, p, a) {
                    ot(e), tt(e, a), tt(e, ~a), Od(e.pending_buf, e.window, p, a, e.pending), e.pending += a;
                  }(e, p, a);
                }
                function bt(e) {
                  it(e, 2, 3), rt(e, 256, $d), function (e) {
                    16 === e.bi_valid ? (tt(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
                  }(e);
                }
                function yt(e, p, a, d) {
                  var t,
                    i,
                    r = 0;
                  e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function (e) {
                    var p,
                      a = 4093624447;
                    for (p = 0; p <= 31; p++, a >>>= 1) if (1 & a && 0 !== e.dyn_ltree[2 * p]) return 0;
                    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
                    for (p = 32; p < zd; p++) if (0 !== e.dyn_ltree[2 * p]) return 1;
                    return 0;
                  }(e)), ft(e, e.l_desc), ft(e, e.d_desc), r = function (e) {
                    var p;
                    for (ct(e, e.dyn_ltree, e.l_desc.max_code), ct(e, e.dyn_dtree, e.d_desc.max_code), ft(e, e.bl_desc), p = 18; p >= 3 && 0 === e.bl_tree[2 * Hd[p] + 1]; p--);
                    return e.opt_len += 3 * (p + 1) + 5 + 5 + 4, p;
                  }(e), t = e.opt_len + 3 + 7 >>> 3, (i = e.static_len + 3 + 7 >>> 3) <= t && (t = i)) : t = i = a + 5, a + 4 <= t && -1 !== p ? gt(e, p, a, d) : 4 === e.strategy || i === t ? (it(e, 2 + (d ? 1 : 0), 3), ht(e, $d, Yd)) : (it(e, 4 + (d ? 1 : 0), 3), function (e, p, a, d) {
                    var t;
                    for (it(e, p - 257, 5), it(e, a - 1, 5), it(e, d - 4, 4), t = 0; t < d; t++) it(e, e.bl_tree[2 * Hd[t] + 1], 3);
                    vt(e, e.dyn_ltree, p - 1), vt(e, e.dyn_dtree, a - 1);
                  }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, r + 1), ht(e, e.dyn_ltree, e.dyn_dtree)), nt(e), d && ot(e);
                }
                function Nt(e, p, a) {
                  return e.pending_buf[e.d_buf + 2 * e.last_lit] = p >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & p, e.pending_buf[e.l_buf + e.last_lit] = 255 & a, e.last_lit++, 0 === p ? e.dyn_ltree[2 * a]++ : (e.matches++, p--, e.dyn_ltree[2 * (Wd[a] + zd + 1)]++, e.dyn_dtree[2 * dt(p)]++), e.last_lit === e.lit_bufsize - 1;
                }
                function St(e, p, a, d) {
                  for (var t = 65535 & e, i = e >>> 16 & 65535, r = 0; 0 !== a;) {
                    a -= r = a > 2e3 ? 2e3 : a;
                    do {
                      i = i + (t = t + p[d++] | 0) | 0;
                    } while (--r);
                    t %= 65521, i %= 65521;
                  }
                  return t | i << 16;
                }
                var Dt = function () {
                  for (var e, p = [], a = 0; a < 256; a++) {
                    e = a;
                    for (var d = 0; d < 8; d++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                    p[a] = e;
                  }
                  return p;
                }();
                function Tt(e, p, a, d) {
                  var t = Dt,
                    i = d + a;
                  e ^= -1;
                  for (var r = d; r < i; r++) e = e >>> 8 ^ t[255 & (e ^ p[r])];
                  return ~e;
                }
                var Et,
                  Vt = -2,
                  At = 258,
                  kt = 262,
                  Rt = 103,
                  xt = 113,
                  Ct = 666;
                function Ot(e, p) {
                  return e.msg = xd[p], p;
                }
                function Lt(e) {
                  return (e << 1) - (e > 4 ? 9 : 0);
                }
                function Bt(e) {
                  for (var p = e.length; --p >= 0;) e[p] = 0;
                }
                function Ut(e) {
                  var p = e.state,
                    a = p.pending;
                  a > e.avail_out && (a = e.avail_out), 0 !== a && (Od(e.output, p.pending_buf, p.pending_out, a, e.next_out), e.next_out += a, p.pending_out += a, e.total_out += a, e.avail_out -= a, p.pending -= a, 0 === p.pending && (p.pending_out = 0));
                }
                function Pt(e, p) {
                  yt(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, p), e.block_start = e.strstart, Ut(e.strm);
                }
                function zt(e, p) {
                  e.pending_buf[e.pending++] = p;
                }
                function Ft(e, p) {
                  e.pending_buf[e.pending++] = p >>> 8 & 255, e.pending_buf[e.pending++] = 255 & p;
                }
                function It(e, p) {
                  var a,
                    d,
                    t = e.max_chain_length,
                    i = e.strstart,
                    r = e.prev_length,
                    l = e.nice_match,
                    m = e.strstart > e.w_size - kt ? e.strstart - (e.w_size - kt) : 0,
                    n = e.window,
                    o = e.w_mask,
                    s = e.prev,
                    u = e.strstart + At,
                    h = n[i + r - 1],
                    f = n[i + r];
                  e.prev_length >= e.good_match && (t >>= 2), l > e.lookahead && (l = e.lookahead);
                  do {
                    if (n[(a = p) + r] === f && n[a + r - 1] === h && n[a] === n[i] && n[++a] === n[i + 1]) {
                      i += 2, a++;
                      do {} while (n[++i] === n[++a] && n[++i] === n[++a] && n[++i] === n[++a] && n[++i] === n[++a] && n[++i] === n[++a] && n[++i] === n[++a] && n[++i] === n[++a] && n[++i] === n[++a] && i < u);
                      if (d = At - (u - i), i = u - At, d > r) {
                        if (e.match_start = p, r = d, d >= l) break;
                        h = n[i + r - 1], f = n[i + r];
                      }
                    }
                  } while ((p = s[p & o]) > m && 0 != --t);
                  return r <= e.lookahead ? r : e.lookahead;
                }
                function Mt(e) {
                  var p,
                    a,
                    d,
                    t,
                    i,
                    r,
                    l,
                    m,
                    n,
                    o,
                    s = e.w_size;
                  do {
                    if (t = e.window_size - e.lookahead - e.strstart, e.strstart >= s + (s - kt)) {
                      Od(e.window, e.window, s, s, 0), e.match_start -= s, e.strstart -= s, e.block_start -= s, p = a = e.hash_size;
                      do {
                        d = e.head[--p], e.head[p] = d >= s ? d - s : 0;
                      } while (--a);
                      p = a = s;
                      do {
                        d = e.prev[--p], e.prev[p] = d >= s ? d - s : 0;
                      } while (--a);
                      t += s;
                    }
                    if (0 === e.strm.avail_in) break;
                    if (r = e.strm, l = e.window, m = e.strstart + e.lookahead, n = t, o = void 0, (o = r.avail_in) > n && (o = n), a = 0 === o ? 0 : (r.avail_in -= o, Od(l, r.input, r.next_in, o, m), 1 === r.state.wrap ? r.adler = St(r.adler, l, o, m) : 2 === r.state.wrap && (r.adler = Tt(r.adler, l, o, m)), r.next_in += o, r.total_in += o, o), e.lookahead += a, e.lookahead + e.insert >= 3) for (i = e.strstart - e.insert, e.ins_h = e.window[i], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[i + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[i + 3 - 1]) & e.hash_mask, e.prev[i & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = i, i++, e.insert--, !(e.lookahead + e.insert < 3)););
                  } while (e.lookahead < kt && 0 !== e.strm.avail_in);
                }
                function jt(e, p) {
                  for (var a, d;;) {
                    if (e.lookahead < kt) {
                      if (Mt(e), e.lookahead < kt && 0 === p) return 1;
                      if (0 === e.lookahead) break;
                    }
                    if (a = 0, e.lookahead >= 3 && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, a = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== a && e.strstart - a <= e.w_size - kt && (e.match_length = It(e, a)), e.match_length >= 3) {
                      if (d = Nt(e, e.strstart - e.match_start, e.match_length - 3), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                        e.match_length--;
                        do {
                          e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, a = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
                        } while (0 != --e.match_length);
                        e.strstart++;
                      } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                    } else d = Nt(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
                    if (d && (Pt(e, false), 0 === e.strm.avail_out)) return 1;
                  }
                  return e.insert = e.strstart < 2 ? e.strstart : 2, 4 === p ? (Pt(e, true), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (Pt(e, false), 0 === e.strm.avail_out) ? 1 : 2;
                }
                function qt(e, p) {
                  for (var a, d, t;;) {
                    if (e.lookahead < kt) {
                      if (Mt(e), e.lookahead < kt && 0 === p) return 1;
                      if (0 === e.lookahead) break;
                    }
                    if (a = 0, e.lookahead >= 3 && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, a = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = 2, 0 !== a && e.prev_length < e.max_lazy_match && e.strstart - a <= e.w_size - kt && (e.match_length = It(e, a), e.match_length <= 5 && (1 === e.strategy || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)), e.prev_length >= 3 && e.match_length <= e.prev_length) {
                      t = e.strstart + e.lookahead - 3, d = Nt(e, e.strstart - 1 - e.prev_match, e.prev_length - 3), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                      do {
                        ++e.strstart <= t && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, a = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
                      } while (0 != --e.prev_length);
                      if (e.match_available = 0, e.match_length = 2, e.strstart++, d && (Pt(e, false), 0 === e.strm.avail_out)) return 1;
                    } else if (e.match_available) {
                      if ((d = Nt(e, 0, e.window[e.strstart - 1])) && Pt(e, false), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return 1;
                    } else e.match_available = 1, e.strstart++, e.lookahead--;
                  }
                  return e.match_available && (d = Nt(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < 2 ? e.strstart : 2, 4 === p ? (Pt(e, true), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (Pt(e, false), 0 === e.strm.avail_out) ? 1 : 2;
                }
                function Zt(e, p, a, d, t) {
                  this.good_length = e, this.max_lazy = p, this.nice_length = a, this.max_chain = d, this.func = t;
                }
                function Ht() {
                  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = 8, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Bd(1146), this.dyn_dtree = new Bd(122), this.bl_tree = new Bd(78), Bt(this.dyn_ltree), Bt(this.dyn_dtree), Bt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Bd(16), this.heap = new Bd(573), Bt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Bd(573), Bt(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
                }
                function $t(e) {
                  var p,
                    a = function (e) {
                      var p;
                      return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = 2, (p = e.state).pending = 0, p.pending_out = 0, p.wrap < 0 && (p.wrap = -p.wrap), p.status = p.wrap ? 42 : xt, e.adler = 2 === p.wrap ? 0 : 1, p.last_flush = 0, _t(p), 0) : Ot(e, Vt);
                    }(e);
                  return 0 === a && ((p = e.state).window_size = 2 * p.w_size, Bt(p.head), p.max_lazy_match = Et[p.level].max_lazy, p.good_match = Et[p.level].good_length, p.nice_match = Et[p.level].nice_length, p.max_chain_length = Et[p.level].max_chain, p.strstart = 0, p.block_start = 0, p.lookahead = 0, p.insert = 0, p.match_length = p.prev_length = 2, p.match_available = 0, p.ins_h = 0), a;
                }
                function Yt(e, p) {
                  var a, d, t, i;
                  if (!e || !e.state || p > 5 || p < 0) return e ? Ot(e, Vt) : Vt;
                  if (d = e.state, !e.output || !e.input && 0 !== e.avail_in || d.status === Ct && 4 !== p) return Ot(e, 0 === e.avail_out ? -5 : Vt);
                  if (d.strm = e, a = d.last_flush, d.last_flush = p, 42 === d.status) if (2 === d.wrap) e.adler = 0, zt(d, 31), zt(d, 139), zt(d, 8), d.gzhead ? (zt(d, (d.gzhead.text ? 1 : 0) + (d.gzhead.hcrc ? 2 : 0) + (d.gzhead.extra ? 4 : 0) + (d.gzhead.name ? 8 : 0) + (d.gzhead.comment ? 16 : 0)), zt(d, 255 & d.gzhead.time), zt(d, d.gzhead.time >> 8 & 255), zt(d, d.gzhead.time >> 16 & 255), zt(d, d.gzhead.time >> 24 & 255), zt(d, 9 === d.level ? 2 : d.strategy >= 2 || d.level < 2 ? 4 : 0), zt(d, 255 & d.gzhead.os), d.gzhead.extra && d.gzhead.extra.length && (zt(d, 255 & d.gzhead.extra.length), zt(d, d.gzhead.extra.length >> 8 & 255)), d.gzhead.hcrc && (e.adler = Tt(e.adler, d.pending_buf, d.pending, 0)), d.gzindex = 0, d.status = 69) : (zt(d, 0), zt(d, 0), zt(d, 0), zt(d, 0), zt(d, 0), zt(d, 9 === d.level ? 2 : d.strategy >= 2 || d.level < 2 ? 4 : 0), zt(d, 3), d.status = xt);else {
                    var r = 8 + (d.w_bits - 8 << 4) << 8;
                    r |= (d.strategy >= 2 || d.level < 2 ? 0 : d.level < 6 ? 1 : 6 === d.level ? 2 : 3) << 6, 0 !== d.strstart && (r |= 32), r += 31 - r % 31, d.status = xt, Ft(d, r), 0 !== d.strstart && (Ft(d, e.adler >>> 16), Ft(d, 65535 & e.adler)), e.adler = 1;
                  }
                  if (69 === d.status) if (d.gzhead.extra) {
                    for (t = d.pending; d.gzindex < (65535 & d.gzhead.extra.length) && (d.pending !== d.pending_buf_size || (d.gzhead.hcrc && d.pending > t && (e.adler = Tt(e.adler, d.pending_buf, d.pending - t, t)), Ut(e), t = d.pending, d.pending !== d.pending_buf_size));) zt(d, 255 & d.gzhead.extra[d.gzindex]), d.gzindex++;
                    d.gzhead.hcrc && d.pending > t && (e.adler = Tt(e.adler, d.pending_buf, d.pending - t, t)), d.gzindex === d.gzhead.extra.length && (d.gzindex = 0, d.status = 73);
                  } else d.status = 73;
                  if (73 === d.status) if (d.gzhead.name) {
                    t = d.pending;
                    do {
                      if (d.pending === d.pending_buf_size && (d.gzhead.hcrc && d.pending > t && (e.adler = Tt(e.adler, d.pending_buf, d.pending - t, t)), Ut(e), t = d.pending, d.pending === d.pending_buf_size)) {
                        i = 1;
                        break;
                      }
                      i = d.gzindex < d.gzhead.name.length ? 255 & d.gzhead.name.charCodeAt(d.gzindex++) : 0, zt(d, i);
                    } while (0 !== i);
                    d.gzhead.hcrc && d.pending > t && (e.adler = Tt(e.adler, d.pending_buf, d.pending - t, t)), 0 === i && (d.gzindex = 0, d.status = 91);
                  } else d.status = 91;
                  if (91 === d.status) if (d.gzhead.comment) {
                    t = d.pending;
                    do {
                      if (d.pending === d.pending_buf_size && (d.gzhead.hcrc && d.pending > t && (e.adler = Tt(e.adler, d.pending_buf, d.pending - t, t)), Ut(e), t = d.pending, d.pending === d.pending_buf_size)) {
                        i = 1;
                        break;
                      }
                      i = d.gzindex < d.gzhead.comment.length ? 255 & d.gzhead.comment.charCodeAt(d.gzindex++) : 0, zt(d, i);
                    } while (0 !== i);
                    d.gzhead.hcrc && d.pending > t && (e.adler = Tt(e.adler, d.pending_buf, d.pending - t, t)), 0 === i && (d.status = Rt);
                  } else d.status = Rt;
                  if (d.status === Rt && (d.gzhead.hcrc ? (d.pending + 2 > d.pending_buf_size && Ut(e), d.pending + 2 <= d.pending_buf_size && (zt(d, 255 & e.adler), zt(d, e.adler >> 8 & 255), e.adler = 0, d.status = xt)) : d.status = xt), 0 !== d.pending) {
                    if (Ut(e), 0 === e.avail_out) return d.last_flush = -1, 0;
                  } else if (0 === e.avail_in && Lt(p) <= Lt(a) && 4 !== p) return Ot(e, -5);
                  if (d.status === Ct && 0 !== e.avail_in) return Ot(e, -5);
                  if (0 !== e.avail_in || 0 !== d.lookahead || 0 !== p && d.status !== Ct) {
                    var l = 2 === d.strategy ? function (e, p) {
                      for (var a;;) {
                        if (0 === e.lookahead && (Mt(e), 0 === e.lookahead)) {
                          if (0 === p) return 1;
                          break;
                        }
                        if (e.match_length = 0, a = Nt(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, a && (Pt(e, false), 0 === e.strm.avail_out)) return 1;
                      }
                      return e.insert = 0, 4 === p ? (Pt(e, true), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (Pt(e, false), 0 === e.strm.avail_out) ? 1 : 2;
                    }(d, p) : 3 === d.strategy ? function (e, p) {
                      for (var a, d, t, i, r = e.window;;) {
                        if (e.lookahead <= At) {
                          if (Mt(e), e.lookahead <= At && 0 === p) return 1;
                          if (0 === e.lookahead) break;
                        }
                        if (e.match_length = 0, e.lookahead >= 3 && e.strstart > 0 && (d = r[t = e.strstart - 1]) === r[++t] && d === r[++t] && d === r[++t]) {
                          i = e.strstart + At;
                          do {} while (d === r[++t] && d === r[++t] && d === r[++t] && d === r[++t] && d === r[++t] && d === r[++t] && d === r[++t] && d === r[++t] && t < i);
                          e.match_length = At - (i - t), e.match_length > e.lookahead && (e.match_length = e.lookahead);
                        }
                        if (e.match_length >= 3 ? (a = Nt(e, 1, e.match_length - 3), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (a = Nt(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), a && (Pt(e, false), 0 === e.strm.avail_out)) return 1;
                      }
                      return e.insert = 0, 4 === p ? (Pt(e, true), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (Pt(e, false), 0 === e.strm.avail_out) ? 1 : 2;
                    }(d, p) : Et[d.level].func(d, p);
                    if (3 !== l && 4 !== l || (d.status = Ct), 1 === l || 3 === l) return 0 === e.avail_out && (d.last_flush = -1), 0;
                    if (2 === l && (1 === p ? bt(d) : 5 !== p && (gt(d, 0, 0, false), 3 === p && (Bt(d.head), 0 === d.lookahead && (d.strstart = 0, d.block_start = 0, d.insert = 0))), Ut(e), 0 === e.avail_out)) return d.last_flush = -1, 0;
                  }
                  return 4 !== p ? 0 : d.wrap <= 0 ? 1 : (2 === d.wrap ? (zt(d, 255 & e.adler), zt(d, e.adler >> 8 & 255), zt(d, e.adler >> 16 & 255), zt(d, e.adler >> 24 & 255), zt(d, 255 & e.total_in), zt(d, e.total_in >> 8 & 255), zt(d, e.total_in >> 16 & 255), zt(d, e.total_in >> 24 & 255)) : (Ft(d, e.adler >>> 16), Ft(d, 65535 & e.adler)), Ut(e), d.wrap > 0 && (d.wrap = -d.wrap), 0 !== d.pending ? 0 : 1);
                }
                function Kt(e, p) {
                  var a, d, t, i, r, l, m, n, o, s, u, h, f, c, v, w, _, g, b, y, N, S, D, T, E;
                  a = e.state, d = e.next_in, T = e.input, t = d + (e.avail_in - 5), i = e.next_out, E = e.output, r = i - (p - e.avail_out), l = i + (e.avail_out - 257), m = a.dmax, n = a.wsize, o = a.whave, s = a.wnext, u = a.window, h = a.hold, f = a.bits, c = a.lencode, v = a.distcode, w = (1 << a.lenbits) - 1, _ = (1 << a.distbits) - 1;
                  e: do {
                    f < 15 && (h += T[d++] << f, f += 8, h += T[d++] << f, f += 8), g = c[h & w];
                    p: for (;;) {
                      if (h >>>= b = g >>> 24, f -= b, 0 == (b = g >>> 16 & 255)) E[i++] = 65535 & g;else {
                        if (!(16 & b)) {
                          if (64 & b) {
                            if (32 & b) {
                              a.mode = 12;
                              break e;
                            }
                            e.msg = "invalid literal/length code", a.mode = 30;
                            break e;
                          }
                          g = c[(65535 & g) + (h & (1 << b) - 1)];
                          continue p;
                        }
                        for (y = 65535 & g, (b &= 15) && (f < b && (h += T[d++] << f, f += 8), y += h & (1 << b) - 1, h >>>= b, f -= b), f < 15 && (h += T[d++] << f, f += 8, h += T[d++] << f, f += 8), g = v[h & _];;) {
                          if (h >>>= b = g >>> 24, f -= b, 16 & (b = g >>> 16 & 255)) {
                            if (N = 65535 & g, f < (b &= 15) && (h += T[d++] << f, (f += 8) < b && (h += T[d++] << f, f += 8)), (N += h & (1 << b) - 1) > m) {
                              e.msg = "invalid distance too far back", a.mode = 30;
                              break e;
                            }
                            if (h >>>= b, f -= b, N > (b = i - r)) {
                              if ((b = N - b) > o && a.sane) {
                                e.msg = "invalid distance too far back", a.mode = 30;
                                break e;
                              }
                              if (S = 0, D = u, 0 === s) {
                                if (S += n - b, b < y) {
                                  y -= b;
                                  do {
                                    E[i++] = u[S++];
                                  } while (--b);
                                  S = i - N, D = E;
                                }
                              } else if (s < b) {
                                if (S += n + s - b, (b -= s) < y) {
                                  y -= b;
                                  do {
                                    E[i++] = u[S++];
                                  } while (--b);
                                  if (S = 0, s < y) {
                                    y -= b = s;
                                    do {
                                      E[i++] = u[S++];
                                    } while (--b);
                                    S = i - N, D = E;
                                  }
                                }
                              } else if (S += s - b, b < y) {
                                y -= b;
                                do {
                                  E[i++] = u[S++];
                                } while (--b);
                                S = i - N, D = E;
                              }
                              for (; y > 2;) E[i++] = D[S++], E[i++] = D[S++], E[i++] = D[S++], y -= 3;
                              y && (E[i++] = D[S++], y > 1 && (E[i++] = D[S++]));
                            } else {
                              S = i - N;
                              do {
                                E[i++] = E[S++], E[i++] = E[S++], E[i++] = E[S++], y -= 3;
                              } while (y > 2);
                              y && (E[i++] = E[S++], y > 1 && (E[i++] = E[S++]));
                            }
                            break;
                          }
                          if (64 & b) {
                            e.msg = "invalid distance code", a.mode = 30;
                            break e;
                          }
                          g = v[(65535 & g) + (h & (1 << b) - 1)];
                        }
                      }
                      break;
                    }
                  } while (d < t && i < l);
                  d -= y = f >> 3, h &= (1 << (f -= y << 3)) - 1, e.next_in = d, e.next_out = i, e.avail_in = d < t ? t - d + 5 : 5 - (d - t), e.avail_out = i < l ? l - i + 257 : 257 - (i - l), a.hold = h, a.bits = f;
                }
                Et = [new Zt(0, 0, 0, 0, function (e, p) {
                  var a = 65535;
                  for (a > e.pending_buf_size - 5 && (a = e.pending_buf_size - 5);;) {
                    if (e.lookahead <= 1) {
                      if (Mt(e), 0 === e.lookahead && 0 === p) return 1;
                      if (0 === e.lookahead) break;
                    }
                    e.strstart += e.lookahead, e.lookahead = 0;
                    var d = e.block_start + a;
                    if ((0 === e.strstart || e.strstart >= d) && (e.lookahead = e.strstart - d, e.strstart = d, Pt(e, false), 0 === e.strm.avail_out)) return 1;
                    if (e.strstart - e.block_start >= e.w_size - kt && (Pt(e, false), 0 === e.strm.avail_out)) return 1;
                  }
                  return e.insert = 0, 4 === p ? (Pt(e, true), 0 === e.strm.avail_out ? 3 : 4) : (e.strstart > e.block_start && (Pt(e, false), e.strm.avail_out), 1);
                }), new Zt(4, 4, 8, 4, jt), new Zt(4, 5, 16, 8, jt), new Zt(4, 6, 32, 32, jt), new Zt(4, 4, 16, 16, qt), new Zt(8, 16, 32, 32, qt), new Zt(8, 16, 128, 128, qt), new Zt(8, 32, 128, 256, qt), new Zt(32, 128, 258, 1024, qt), new Zt(32, 258, 258, 4096, qt)];
                var Wt = 15,
                  Gt = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                  Xt = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                  Jt = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                  Qt = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                function ei(e, p, a, d, t, i, r, l) {
                  var m,
                    n,
                    o,
                    s,
                    u,
                    h,
                    f,
                    c,
                    v,
                    w = l.bits,
                    _ = 0,
                    g = 0,
                    b = 0,
                    y = 0,
                    N = 0,
                    S = 0,
                    D = 0,
                    T = 0,
                    E = 0,
                    V = 0,
                    A = null,
                    k = 0,
                    R = new Bd(16),
                    x = new Bd(16),
                    C = null,
                    O = 0;
                  for (_ = 0; _ <= Wt; _++) R[_] = 0;
                  for (g = 0; g < d; g++) R[p[a + g]]++;
                  for (N = w, y = Wt; y >= 1 && 0 === R[y]; y--);
                  if (N > y && (N = y), 0 === y) return t[i++] = 20971520, t[i++] = 20971520, l.bits = 1, 0;
                  for (b = 1; b < y && 0 === R[b]; b++);
                  for (N < b && (N = b), T = 1, _ = 1; _ <= Wt; _++) if (T <<= 1, (T -= R[_]) < 0) return -1;
                  if (T > 0 && (0 === e || 1 !== y)) return -1;
                  for (x[1] = 0, _ = 1; _ < Wt; _++) x[_ + 1] = x[_] + R[_];
                  for (g = 0; g < d; g++) 0 !== p[a + g] && (r[x[p[a + g]]++] = g);
                  if (0 === e ? (A = C = r, h = 19) : 1 === e ? (A = Gt, k -= 257, C = Xt, O -= 257, h = 256) : (A = Jt, C = Qt, h = -1), V = 0, g = 0, _ = b, u = i, S = N, D = 0, o = -1, s = (E = 1 << N) - 1, 1 === e && E > 852 || 2 === e && E > 592) return 1;
                  for (;;) {
                    f = _ - D, r[g] < h ? (c = 0, v = r[g]) : r[g] > h ? (c = C[O + r[g]], v = A[k + r[g]]) : (c = 96, v = 0), m = 1 << _ - D, b = n = 1 << S;
                    do {
                      t[u + (V >> D) + (n -= m)] = f << 24 | c << 16 | v;
                    } while (0 !== n);
                    for (m = 1 << _ - 1; V & m;) m >>= 1;
                    if (0 !== m ? (V &= m - 1, V += m) : V = 0, g++, 0 == --R[_]) {
                      if (_ === y) break;
                      _ = p[a + r[g]];
                    }
                    if (_ > N && (V & s) !== o) {
                      for (0 === D && (D = N), u += b, T = 1 << (S = _ - D); S + D < y && !((T -= R[S + D]) <= 0);) S++, T <<= 1;
                      if (E += 1 << S, 1 === e && E > 852 || 2 === e && E > 592) return 1;
                      t[o = V & s] = N << 24 | S << 16 | u - i;
                    }
                  }
                  return 0 !== V && (t[u + V] = _ - D << 24 | 64 << 16), l.bits = N, 0;
                }
                var pi = -2,
                  ai = 12,
                  di = 30;
                function ti(e) {
                  return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
                }
                function ii() {
                  this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Bd(320), this.work = new Bd(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
                }
                function ri(e) {
                  var p;
                  return e && e.state ? ((p = e.state).wsize = 0, p.whave = 0, p.wnext = 0, function (e) {
                    var p;
                    return e && e.state ? (p = e.state, e.total_in = e.total_out = p.total = 0, e.msg = "", p.wrap && (e.adler = 1 & p.wrap), p.mode = 1, p.last = 0, p.havedict = 0, p.dmax = 32768, p.head = null, p.hold = 0, p.bits = 0, p.lencode = p.lendyn = new Ud(852), p.distcode = p.distdyn = new Ud(592), p.sane = 1, p.back = -1, 0) : pi;
                  }(e)) : pi;
                }
                function li(e, p) {
                  var a, d;
                  return e ? (d = new ii(), e.state = d, d.window = null, a = function (e, p) {
                    var a, d;
                    return e && e.state ? (d = e.state, p < 0 ? (a = 0, p = -p) : (a = 1 + (p >> 4), p < 48 && (p &= 15)), p && (p < 8 || p > 15) ? pi : (null !== d.window && d.wbits !== p && (d.window = null), d.wrap = a, d.wbits = p, ri(e))) : pi;
                  }(e, p), 0 !== a && (e.state = null), a) : pi;
                }
                var mi,
                  ni,
                  oi,
                  si = true;
                function ui(e) {
                  if (si) {
                    var p;
                    for (mi = new Ud(512), ni = new Ud(32), p = 0; p < 144;) e.lens[p++] = 8;
                    for (; p < 256;) e.lens[p++] = 9;
                    for (; p < 280;) e.lens[p++] = 7;
                    for (; p < 288;) e.lens[p++] = 8;
                    for (ei(1, e.lens, 0, 288, mi, 0, e.work, {
                      bits: 9
                    }), p = 0; p < 32;) e.lens[p++] = 5;
                    ei(2, e.lens, 0, 32, ni, 0, e.work, {
                      bits: 5
                    }), si = false;
                  }
                  e.lencode = mi, e.lenbits = 9, e.distcode = ni, e.distbits = 5;
                }
                function hi(e, p) {
                  var a,
                    d,
                    t,
                    i,
                    r,
                    l,
                    m,
                    n,
                    o,
                    s,
                    u,
                    h,
                    f,
                    c,
                    v,
                    w,
                    _,
                    g,
                    b,
                    y,
                    N,
                    S,
                    D,
                    T,
                    E = 0,
                    V = new Ld(4),
                    A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                  if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return pi;
                  (a = e.state).mode === ai && (a.mode = 13), r = e.next_out, t = e.output, m = e.avail_out, i = e.next_in, d = e.input, l = e.avail_in, n = a.hold, o = a.bits, s = l, u = m, S = 0;
                  e: for (;;) switch (a.mode) {
                    case 1:
                      if (0 === a.wrap) {
                        a.mode = 13;
                        break;
                      }
                      for (; o < 16;) {
                        if (0 === l) break e;
                        l--, n += d[i++] << o, o += 8;
                      }
                      if (2 & a.wrap && 35615 === n) {
                        a.check = 0, V[0] = 255 & n, V[1] = n >>> 8 & 255, a.check = Tt(a.check, V, 2, 0), n = 0, o = 0, a.mode = 2;
                        break;
                      }
                      if (a.flags = 0, a.head && (a.head.done = false), !(1 & a.wrap) || (((255 & n) << 8) + (n >> 8)) % 31) {
                        e.msg = "incorrect header check", a.mode = di;
                        break;
                      }
                      if (8 != (15 & n)) {
                        e.msg = "unknown compression method", a.mode = di;
                        break;
                      }
                      if (o -= 4, N = 8 + (15 & (n >>>= 4)), 0 === a.wbits) a.wbits = N;else if (N > a.wbits) {
                        e.msg = "invalid window size", a.mode = di;
                        break;
                      }
                      a.dmax = 1 << N, e.adler = a.check = 1, a.mode = 512 & n ? 10 : ai, n = 0, o = 0;
                      break;
                    case 2:
                      for (; o < 16;) {
                        if (0 === l) break e;
                        l--, n += d[i++] << o, o += 8;
                      }
                      if (a.flags = n, 8 != (255 & a.flags)) {
                        e.msg = "unknown compression method", a.mode = di;
                        break;
                      }
                      if (57344 & a.flags) {
                        e.msg = "unknown header flags set", a.mode = di;
                        break;
                      }
                      a.head && (a.head.text = n >> 8 & 1), 512 & a.flags && (V[0] = 255 & n, V[1] = n >>> 8 & 255, a.check = Tt(a.check, V, 2, 0)), n = 0, o = 0, a.mode = 3;
                    case 3:
                      for (; o < 32;) {
                        if (0 === l) break e;
                        l--, n += d[i++] << o, o += 8;
                      }
                      a.head && (a.head.time = n), 512 & a.flags && (V[0] = 255 & n, V[1] = n >>> 8 & 255, V[2] = n >>> 16 & 255, V[3] = n >>> 24 & 255, a.check = Tt(a.check, V, 4, 0)), n = 0, o = 0, a.mode = 4;
                    case 4:
                      for (; o < 16;) {
                        if (0 === l) break e;
                        l--, n += d[i++] << o, o += 8;
                      }
                      a.head && (a.head.xflags = 255 & n, a.head.os = n >> 8), 512 & a.flags && (V[0] = 255 & n, V[1] = n >>> 8 & 255, a.check = Tt(a.check, V, 2, 0)), n = 0, o = 0, a.mode = 5;
                    case 5:
                      if (1024 & a.flags) {
                        for (; o < 16;) {
                          if (0 === l) break e;
                          l--, n += d[i++] << o, o += 8;
                        }
                        a.length = n, a.head && (a.head.extra_len = n), 512 & a.flags && (V[0] = 255 & n, V[1] = n >>> 8 & 255, a.check = Tt(a.check, V, 2, 0)), n = 0, o = 0;
                      } else a.head && (a.head.extra = null);
                      a.mode = 6;
                    case 6:
                      if (1024 & a.flags && ((h = a.length) > l && (h = l), h && (a.head && (N = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Array(a.head.extra_len)), Od(a.head.extra, d, i, h, N)), 512 & a.flags && (a.check = Tt(a.check, d, h, i)), l -= h, i += h, a.length -= h), a.length)) break e;
                      a.length = 0, a.mode = 7;
                    case 7:
                      if (2048 & a.flags) {
                        if (0 === l) break e;
                        h = 0;
                        do {
                          N = d[i + h++], a.head && N && a.length < 65536 && (a.head.name += String.fromCharCode(N));
                        } while (N && h < l);
                        if (512 & a.flags && (a.check = Tt(a.check, d, h, i)), l -= h, i += h, N) break e;
                      } else a.head && (a.head.name = null);
                      a.length = 0, a.mode = 8;
                    case 8:
                      if (4096 & a.flags) {
                        if (0 === l) break e;
                        h = 0;
                        do {
                          N = d[i + h++], a.head && N && a.length < 65536 && (a.head.comment += String.fromCharCode(N));
                        } while (N && h < l);
                        if (512 & a.flags && (a.check = Tt(a.check, d, h, i)), l -= h, i += h, N) break e;
                      } else a.head && (a.head.comment = null);
                      a.mode = 9;
                    case 9:
                      if (512 & a.flags) {
                        for (; o < 16;) {
                          if (0 === l) break e;
                          l--, n += d[i++] << o, o += 8;
                        }
                        if (n !== (65535 & a.check)) {
                          e.msg = "header crc mismatch", a.mode = di;
                          break;
                        }
                        n = 0, o = 0;
                      }
                      a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = true), e.adler = a.check = 0, a.mode = ai;
                      break;
                    case 10:
                      for (; o < 32;) {
                        if (0 === l) break e;
                        l--, n += d[i++] << o, o += 8;
                      }
                      e.adler = a.check = ti(n), n = 0, o = 0, a.mode = 11;
                    case 11:
                      if (0 === a.havedict) return e.next_out = r, e.avail_out = m, e.next_in = i, e.avail_in = l, a.hold = n, a.bits = o, 2;
                      e.adler = a.check = 1, a.mode = ai;
                    case ai:
                      if (5 === p || 6 === p) break e;
                    case 13:
                      if (a.last) {
                        n >>>= 7 & o, o -= 7 & o, a.mode = 27;
                        break;
                      }
                      for (; o < 3;) {
                        if (0 === l) break e;
                        l--, n += d[i++] << o, o += 8;
                      }
                      switch (a.last = 1 & n, o -= 1, 3 & (n >>>= 1)) {
                        case 0:
                          a.mode = 14;
                          break;
                        case 1:
                          if (ui(a), a.mode = 20, 6 === p) {
                            n >>>= 2, o -= 2;
                            break e;
                          }
                          break;
                        case 2:
                          a.mode = 17;
                          break;
                        case 3:
                          e.msg = "invalid block type", a.mode = di;
                      }
                      n >>>= 2, o -= 2;
                      break;
                    case 14:
                      for (n >>>= 7 & o, o -= 7 & o; o < 32;) {
                        if (0 === l) break e;
                        l--, n += d[i++] << o, o += 8;
                      }
                      if ((65535 & n) != (n >>> 16 ^ 65535)) {
                        e.msg = "invalid stored block lengths", a.mode = di;
                        break;
                      }
                      if (a.length = 65535 & n, n = 0, o = 0, a.mode = 15, 6 === p) break e;
                    case 15:
                      a.mode = 16;
                    case 16:
                      if (h = a.length) {
                        if (h > l && (h = l), h > m && (h = m), 0 === h) break e;
                        Od(t, d, i, h, r), l -= h, i += h, m -= h, r += h, a.length -= h;
                        break;
                      }
                      a.mode = ai;
                      break;
                    case 17:
                      for (; o < 14;) {
                        if (0 === l) break e;
                        l--, n += d[i++] << o, o += 8;
                      }
                      if (a.nlen = 257 + (31 & n), n >>>= 5, o -= 5, a.ndist = 1 + (31 & n), n >>>= 5, o -= 5, a.ncode = 4 + (15 & n), n >>>= 4, o -= 4, a.nlen > 286 || a.ndist > 30) {
                        e.msg = "too many length or distance symbols", a.mode = di;
                        break;
                      }
                      a.have = 0, a.mode = 18;
                    case 18:
                      for (; a.have < a.ncode;) {
                        for (; o < 3;) {
                          if (0 === l) break e;
                          l--, n += d[i++] << o, o += 8;
                        }
                        a.lens[A[a.have++]] = 7 & n, n >>>= 3, o -= 3;
                      }
                      for (; a.have < 19;) a.lens[A[a.have++]] = 0;
                      if (a.lencode = a.lendyn, a.lenbits = 7, D = {
                        bits: a.lenbits
                      }, S = ei(0, a.lens, 0, 19, a.lencode, 0, a.work, D), a.lenbits = D.bits, S) {
                        e.msg = "invalid code lengths set", a.mode = di;
                        break;
                      }
                      a.have = 0, a.mode = 19;
                    case 19:
                      for (; a.have < a.nlen + a.ndist;) {
                        for (; w = (E = a.lencode[n & (1 << a.lenbits) - 1]) >>> 16 & 255, _ = 65535 & E, !((v = E >>> 24) <= o);) {
                          if (0 === l) break e;
                          l--, n += d[i++] << o, o += 8;
                        }
                        if (_ < 16) n >>>= v, o -= v, a.lens[a.have++] = _;else {
                          if (16 === _) {
                            for (T = v + 2; o < T;) {
                              if (0 === l) break e;
                              l--, n += d[i++] << o, o += 8;
                            }
                            if (n >>>= v, o -= v, 0 === a.have) {
                              e.msg = "invalid bit length repeat", a.mode = di;
                              break;
                            }
                            N = a.lens[a.have - 1], h = 3 + (3 & n), n >>>= 2, o -= 2;
                          } else if (17 === _) {
                            for (T = v + 3; o < T;) {
                              if (0 === l) break e;
                              l--, n += d[i++] << o, o += 8;
                            }
                            o -= v, N = 0, h = 3 + (7 & (n >>>= v)), n >>>= 3, o -= 3;
                          } else {
                            for (T = v + 7; o < T;) {
                              if (0 === l) break e;
                              l--, n += d[i++] << o, o += 8;
                            }
                            o -= v, N = 0, h = 11 + (127 & (n >>>= v)), n >>>= 7, o -= 7;
                          }
                          if (a.have + h > a.nlen + a.ndist) {
                            e.msg = "invalid bit length repeat", a.mode = di;
                            break;
                          }
                          for (; h--;) a.lens[a.have++] = N;
                        }
                      }
                      if (a.mode === di) break;
                      if (0 === a.lens[256]) {
                        e.msg = "invalid code -- missing end-of-block", a.mode = di;
                        break;
                      }
                      if (a.lenbits = 9, D = {
                        bits: a.lenbits
                      }, S = ei(1, a.lens, 0, a.nlen, a.lencode, 0, a.work, D), a.lenbits = D.bits, S) {
                        e.msg = "invalid literal/lengths set", a.mode = di;
                        break;
                      }
                      if (a.distbits = 6, a.distcode = a.distdyn, D = {
                        bits: a.distbits
                      }, S = ei(2, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, D), a.distbits = D.bits, S) {
                        e.msg = "invalid distances set", a.mode = di;
                        break;
                      }
                      if (a.mode = 20, 6 === p) break e;
                    case 20:
                      a.mode = 21;
                    case 21:
                      if (l >= 6 && m >= 258) {
                        e.next_out = r, e.avail_out = m, e.next_in = i, e.avail_in = l, a.hold = n, a.bits = o, Kt(e, u), r = e.next_out, t = e.output, m = e.avail_out, i = e.next_in, d = e.input, l = e.avail_in, n = a.hold, o = a.bits, a.mode === ai && (a.back = -1);
                        break;
                      }
                      for (a.back = 0; w = (E = a.lencode[n & (1 << a.lenbits) - 1]) >>> 16 & 255, _ = 65535 & E, !((v = E >>> 24) <= o);) {
                        if (0 === l) break e;
                        l--, n += d[i++] << o, o += 8;
                      }
                      if (w && !(240 & w)) {
                        for (g = v, b = w, y = _; w = (E = a.lencode[y + ((n & (1 << g + b) - 1) >> g)]) >>> 16 & 255, _ = 65535 & E, !(g + (v = E >>> 24) <= o);) {
                          if (0 === l) break e;
                          l--, n += d[i++] << o, o += 8;
                        }
                        n >>>= g, o -= g, a.back += g;
                      }
                      if (n >>>= v, o -= v, a.back += v, a.length = _, 0 === w) {
                        a.mode = 26;
                        break;
                      }
                      if (32 & w) {
                        a.back = -1, a.mode = ai;
                        break;
                      }
                      if (64 & w) {
                        e.msg = "invalid literal/length code", a.mode = di;
                        break;
                      }
                      a.extra = 15 & w, a.mode = 22;
                    case 22:
                      if (a.extra) {
                        for (T = a.extra; o < T;) {
                          if (0 === l) break e;
                          l--, n += d[i++] << o, o += 8;
                        }
                        a.length += n & (1 << a.extra) - 1, n >>>= a.extra, o -= a.extra, a.back += a.extra;
                      }
                      a.was = a.length, a.mode = 23;
                    case 23:
                      for (; w = (E = a.distcode[n & (1 << a.distbits) - 1]) >>> 16 & 255, _ = 65535 & E, !((v = E >>> 24) <= o);) {
                        if (0 === l) break e;
                        l--, n += d[i++] << o, o += 8;
                      }
                      if (!(240 & w)) {
                        for (g = v, b = w, y = _; w = (E = a.distcode[y + ((n & (1 << g + b) - 1) >> g)]) >>> 16 & 255, _ = 65535 & E, !(g + (v = E >>> 24) <= o);) {
                          if (0 === l) break e;
                          l--, n += d[i++] << o, o += 8;
                        }
                        n >>>= g, o -= g, a.back += g;
                      }
                      if (n >>>= v, o -= v, a.back += v, 64 & w) {
                        e.msg = "invalid distance code", a.mode = di;
                        break;
                      }
                      a.offset = _, a.extra = 15 & w, a.mode = 24;
                    case 24:
                      if (a.extra) {
                        for (T = a.extra; o < T;) {
                          if (0 === l) break e;
                          l--, n += d[i++] << o, o += 8;
                        }
                        a.offset += n & (1 << a.extra) - 1, n >>>= a.extra, o -= a.extra, a.back += a.extra;
                      }
                      if (a.offset > a.dmax) {
                        e.msg = "invalid distance too far back", a.mode = di;
                        break;
                      }
                      a.mode = 25;
                    case 25:
                      if (0 === m) break e;
                      if (h = u - m, a.offset > h) {
                        if ((h = a.offset - h) > a.whave && a.sane) {
                          e.msg = "invalid distance too far back", a.mode = di;
                          break;
                        }
                        h > a.wnext ? (h -= a.wnext, f = a.wsize - h) : f = a.wnext - h, h > a.length && (h = a.length), c = a.window;
                      } else c = t, f = r - a.offset, h = a.length;
                      h > m && (h = m), m -= h, a.length -= h;
                      do {
                        t[r++] = c[f++];
                      } while (--h);
                      0 === a.length && (a.mode = 21);
                      break;
                    case 26:
                      if (0 === m) break e;
                      t[r++] = a.length, m--, a.mode = 21;
                      break;
                    case 27:
                      if (a.wrap) {
                        for (; o < 32;) {
                          if (0 === l) break e;
                          l--, n |= d[i++] << o, o += 8;
                        }
                        if (u -= m, e.total_out += u, a.total += u, u && (e.adler = a.check = a.flags ? Tt(a.check, t, u, r - u) : St(a.check, t, u, r - u)), u = m, (a.flags ? n : ti(n)) !== a.check) {
                          e.msg = "incorrect data check", a.mode = di;
                          break;
                        }
                        n = 0, o = 0;
                      }
                      a.mode = 28;
                    case 28:
                      if (a.wrap && a.flags) {
                        for (; o < 32;) {
                          if (0 === l) break e;
                          l--, n += d[i++] << o, o += 8;
                        }
                        if (n !== (4294967295 & a.total)) {
                          e.msg = "incorrect length check", a.mode = di;
                          break;
                        }
                        n = 0, o = 0;
                      }
                      a.mode = 29;
                    case 29:
                      S = 1;
                      break e;
                    case di:
                      S = -3;
                      break e;
                    case 31:
                      return -4;
                    default:
                      return pi;
                  }
                  return e.next_out = r, e.avail_out = m, e.next_in = i, e.avail_in = l, a.hold = n, a.bits = o, (a.wsize || u !== e.avail_out && a.mode < di && (a.mode < 27 || 4 !== p)) && function (e, p, a, d) {
                    var t,
                      i = e.state;
                    null === i.window && (i.wsize = 1 << i.wbits, i.wnext = 0, i.whave = 0, i.window = new Ld(i.wsize)), d >= i.wsize ? (Od(i.window, p, a - i.wsize, i.wsize, 0), i.wnext = 0, i.whave = i.wsize) : ((t = i.wsize - i.wnext) > d && (t = d), Od(i.window, p, a - d, t, i.wnext), (d -= t) ? (Od(i.window, p, a - d, d, 0), i.wnext = d, i.whave = i.wsize) : (i.wnext += t, i.wnext === i.wsize && (i.wnext = 0), i.whave < i.wsize && (i.whave += t)));
                  }(e, e.output, e.next_out, u - e.avail_out), s -= e.avail_in, u -= e.avail_out, e.total_in += s, e.total_out += u, a.total += u, a.wrap && u && (e.adler = a.check = a.flags ? Tt(a.check, t, u, e.next_out - u) : St(a.check, t, u, e.next_out - u)), e.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === ai ? 128 : 0) + (20 === a.mode || 15 === a.mode ? 256 : 0), (0 === s && 0 === u || 4 === p) && 0 === S && (S = -5), S;
                }
                function fi(e) {
                  if (e < 1 || e > 7) throw new TypeError("Bad argument");
                  this.mode = e, this.init_done = false, this.write_in_progress = false, this.pending_close = false, this.windowBits = 0, this.level = 0, this.memLevel = 0, this.strategy = 0, this.dictionary = null;
                }
                function ci(e, p) {
                  for (var a = 0; a < e.length; a++) this[p + a] = e[a];
                }
                fi.prototype.init = function (e, p, a, d, t) {
                  var i;
                  switch (this.windowBits = e, this.level = p, this.memLevel = a, this.strategy = d, 3 !== this.mode && 4 !== this.mode || (this.windowBits += 16), 7 === this.mode && (this.windowBits += 32), 5 !== this.mode && 6 !== this.mode || (this.windowBits = -this.windowBits), this.strm = new Cd(), this.mode) {
                    case 1:
                    case 3:
                    case 5:
                      i = function (e, p, a, d, t, i) {
                        if (!e) return Vt;
                        var r = 1;
                        if (-1 === p && (p = 6), d < 0 ? (r = 0, d = -d) : d > 15 && (r = 2, d -= 16), t < 1 || t > 9 || 8 !== a || d < 8 || d > 15 || p < 0 || p > 9 || i < 0 || i > 4) return Ot(e, Vt);
                        8 === d && (d = 9);
                        var l = new Ht();
                        return e.state = l, l.strm = e, l.wrap = r, l.gzhead = null, l.w_bits = d, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = t + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + 3 - 1) / 3), l.window = new Ld(2 * l.w_size), l.head = new Bd(l.hash_size), l.prev = new Bd(l.w_size), l.lit_bufsize = 1 << t + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new Ld(l.pending_buf_size), l.d_buf = 1 * l.lit_bufsize, l.l_buf = 3 * l.lit_bufsize, l.level = p, l.strategy = i, l.method = a, $t(e);
                      }(this.strm, this.level, 8, this.windowBits, this.memLevel, this.strategy);
                      break;
                    case 2:
                    case 4:
                    case 6:
                    case 7:
                      i = li(this.strm, this.windowBits);
                      break;
                    default:
                      throw new Error("Unknown mode " + this.mode);
                  }
                  0 === i ? (this.write_in_progress = false, this.init_done = true) : this._error(i);
                }, fi.prototype.params = function () {
                  throw new Error("deflateParams Not supported");
                }, fi.prototype._writeCheck = function () {
                  if (!this.init_done) throw new Error("write before init");
                  if (0 === this.mode) throw new Error("already finalized");
                  if (this.write_in_progress) throw new Error("write already in progress");
                  if (this.pending_close) throw new Error("close is pending");
                }, fi.prototype.write = function (e, p, a, d, t, i, r) {
                  this._writeCheck(), this.write_in_progress = true;
                  var l = this;
                  return Pe.nextTick(function () {
                    l.write_in_progress = false;
                    var m = l._write(e, p, a, d, t, i, r);
                    l.callback(m[0], m[1]), l.pending_close && l.close();
                  }), this;
                }, fi.prototype.writeSync = function (e, p, a, d, t, i, r) {
                  return this._writeCheck(), this._write(e, p, a, d, t, i, r);
                }, fi.prototype._write = function (e, p, a, d, t, i, r) {
                  if (this.write_in_progress = true, 0 !== e && 1 !== e && 2 !== e && 3 !== e && 4 !== e && 5 !== e) throw new Error("Invalid flush value");
                  null == p && (p = new V(0), d = 0, a = 0), t._set ? t.set = t._set : t.set = ci;
                  var l,
                    m = this.strm;
                  switch (m.avail_in = d, m.input = p, m.next_in = a, m.avail_out = r, m.output = t, m.next_out = i, this.mode) {
                    case 1:
                    case 3:
                    case 5:
                      l = Yt(m, e);
                      break;
                    case 7:
                    case 2:
                    case 4:
                    case 6:
                      l = hi(m, e);
                      break;
                    default:
                      throw new Error("Unknown mode " + this.mode);
                  }
                  return this._checkError(l, m, e) || this._error(l), this.write_in_progress = false, [m.avail_in, m.avail_out];
                }, fi.prototype._checkError = function (e, p, a) {
                  switch (e) {
                    case 0:
                    case -5:
                      if (0 !== p.avail_out && 4 === a) return false;
                      break;
                    case 1:
                      break;
                    default:
                      return false;
                  }
                  return true;
                }, fi.prototype.close = function () {
                  this.write_in_progress ? this.pending_close = true : (this.pending_close = false, 1 === this.mode || 3 === this.mode || 5 === this.mode ? function (e) {
                    var p;
                    e && e.state && (42 !== (p = e.state.status) && 69 !== p && 73 !== p && 91 !== p && p !== Rt && p !== xt && p !== Ct ? Ot(e, Vt) : (e.state = null, p === xt && Ot(e, -3)));
                  }(this.strm) : function (e) {
                    if (!e || !e.state) return pi;
                    var p = e.state;
                    p.window && (p.window = null), e.state = null;
                  }(this.strm), this.mode = 0);
                }, fi.prototype.reset = function () {
                  switch (this.mode) {
                    case 1:
                    case 5:
                      oi = $t(this.strm);
                      break;
                    case 2:
                    case 6:
                      oi = ri(this.strm);
                  }
                  0 !== oi && this._error(oi);
                }, fi.prototype._error = function (e) {
                  this.onerror(xd[e] + ": " + this.strm.msg, e), this.write_in_progress = false, this.pending_close && this.close();
                };
                var vi = Object.freeze({
                    __proto__: null,
                    DEFLATE: 1,
                    DEFLATERAW: 5,
                    GUNZIP: 4,
                    GZIP: 3,
                    INFLATE: 2,
                    INFLATERAW: 6,
                    NONE: 0,
                    UNZIP: 7,
                    Z_BEST_COMPRESSION: 9,
                    Z_BEST_SPEED: 1,
                    Z_BINARY: 0,
                    Z_BLOCK: 5,
                    Z_BUF_ERROR: -5,
                    Z_DATA_ERROR: -3,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_DEFLATED: 8,
                    Z_ERRNO: -1,
                    Z_FILTERED: 1,
                    Z_FINISH: 4,
                    Z_FIXED: 4,
                    Z_FULL_FLUSH: 3,
                    Z_HUFFMAN_ONLY: 2,
                    Z_NEED_DICT: 2,
                    Z_NO_COMPRESSION: 0,
                    Z_NO_FLUSH: 0,
                    Z_OK: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_RLE: 3,
                    Z_STREAM_END: 1,
                    Z_STREAM_ERROR: -2,
                    Z_SYNC_FLUSH: 2,
                    Z_TEXT: 1,
                    Z_TREES: 6,
                    Z_UNKNOWN: 2,
                    Zlib: fi
                  }),
                  wi = {};
                Object.keys(vi).forEach(function (e) {
                  wi[e] = vi[e];
                }), wi.Z_MIN_WINDOWBITS = 8, wi.Z_MAX_WINDOWBITS = 15, wi.Z_DEFAULT_WINDOWBITS = 15, wi.Z_MIN_CHUNK = 64, wi.Z_MAX_CHUNK = 1 / 0, wi.Z_DEFAULT_CHUNK = 16384, wi.Z_MIN_MEMLEVEL = 1, wi.Z_MAX_MEMLEVEL = 9, wi.Z_DEFAULT_MEMLEVEL = 8, wi.Z_MIN_LEVEL = -1, wi.Z_MAX_LEVEL = 9, wi.Z_DEFAULT_LEVEL = wi.Z_DEFAULT_COMPRESSION;
                var _i = {
                  Z_OK: wi.Z_OK,
                  Z_STREAM_END: wi.Z_STREAM_END,
                  Z_NEED_DICT: wi.Z_NEED_DICT,
                  Z_ERRNO: wi.Z_ERRNO,
                  Z_STREAM_ERROR: wi.Z_STREAM_ERROR,
                  Z_DATA_ERROR: wi.Z_DATA_ERROR,
                  Z_MEM_ERROR: wi.Z_MEM_ERROR,
                  Z_BUF_ERROR: wi.Z_BUF_ERROR,
                  Z_VERSION_ERROR: wi.Z_VERSION_ERROR
                };
                function gi(e) {
                  return new ji(e);
                }
                function bi(e) {
                  return new qi(e);
                }
                function yi(e) {
                  return new $i(e);
                }
                function Ni(e) {
                  return new Yi(e);
                }
                function Si(e) {
                  return new Zi(e);
                }
                function Di(e) {
                  return new Hi(e);
                }
                function Ti(e) {
                  return new Ki(e);
                }
                function Ei(e, p, a) {
                  return "function" == typeof p && (a = p, p = {}), Ii(new ji(p), e, a);
                }
                function Vi(e, p) {
                  return Mi(new ji(p), e);
                }
                function Ai(e, p, a) {
                  return "function" == typeof p && (a = p, p = {}), Ii(new Zi(p), e, a);
                }
                function ki(e, p) {
                  return Mi(new Zi(p), e);
                }
                function Ri(e, p, a) {
                  return "function" == typeof p && (a = p, p = {}), Ii(new $i(p), e, a);
                }
                function xi(e, p) {
                  return Mi(new $i(p), e);
                }
                function Ci(e, p, a) {
                  return "function" == typeof p && (a = p, p = {}), Ii(new Ki(p), e, a);
                }
                function Oi(e, p) {
                  return Mi(new Ki(p), e);
                }
                function Li(e, p, a) {
                  return "function" == typeof p && (a = p, p = {}), Ii(new qi(p), e, a);
                }
                function Bi(e, p) {
                  return Mi(new qi(p), e);
                }
                function Ui(e, p, a) {
                  return "function" == typeof p && (a = p, p = {}), Ii(new Hi(p), e, a);
                }
                function Pi(e, p) {
                  return Mi(new Hi(p), e);
                }
                function zi(e, p, a) {
                  return "function" == typeof p && (a = p, p = {}), Ii(new Yi(p), e, a);
                }
                function Fi(e, p) {
                  return Mi(new Yi(p), e);
                }
                function Ii(e, p, a) {
                  var d = [],
                    t = 0;
                  function i() {
                    for (var p; null !== (p = e.read());) d.push(p), t += p.length;
                    e.once("readable", i);
                  }
                  function r() {
                    var p = V.concat(d, t);
                    d = [], a(null, p), e.close();
                  }
                  e.on("error", function (p) {
                    e.removeListener("end", r), e.removeListener("readable", i), a(p);
                  }), e.on("end", r), e.end(p), i();
                }
                function Mi(e, p) {
                  if ("string" == typeof p && (p = new V(p)), !V.isBuffer(p)) throw new TypeError("Not a string or buffer");
                  var a = wi.Z_FINISH;
                  return e._processChunk(p, a);
                }
                function ji(e) {
                  if (!(this instanceof ji)) return new ji(e);
                  Wi.call(this, e, wi.DEFLATE);
                }
                function qi(e) {
                  if (!(this instanceof qi)) return new qi(e);
                  Wi.call(this, e, wi.INFLATE);
                }
                function Zi(e) {
                  if (!(this instanceof Zi)) return new Zi(e);
                  Wi.call(this, e, wi.GZIP);
                }
                function Hi(e) {
                  if (!(this instanceof Hi)) return new Hi(e);
                  Wi.call(this, e, wi.GUNZIP);
                }
                function $i(e) {
                  if (!(this instanceof $i)) return new $i(e);
                  Wi.call(this, e, wi.DEFLATERAW);
                }
                function Yi(e) {
                  if (!(this instanceof Yi)) return new Yi(e);
                  Wi.call(this, e, wi.INFLATERAW);
                }
                function Ki(e) {
                  if (!(this instanceof Ki)) return new Ki(e);
                  Wi.call(this, e, wi.UNZIP);
                }
                function Wi(e, p) {
                  if (this._opts = e = e || {}, this._chunkSize = e.chunkSize || wi.Z_DEFAULT_CHUNK, $p.call(this, e), e.flush && e.flush !== wi.Z_NO_FLUSH && e.flush !== wi.Z_PARTIAL_FLUSH && e.flush !== wi.Z_SYNC_FLUSH && e.flush !== wi.Z_FULL_FLUSH && e.flush !== wi.Z_FINISH && e.flush !== wi.Z_BLOCK) throw new Error("Invalid flush flag: " + e.flush);
                  if (this._flushFlag = e.flush || wi.Z_NO_FLUSH, e.chunkSize && (e.chunkSize < wi.Z_MIN_CHUNK || e.chunkSize > wi.Z_MAX_CHUNK)) throw new Error("Invalid chunk size: " + e.chunkSize);
                  if (e.windowBits && (e.windowBits < wi.Z_MIN_WINDOWBITS || e.windowBits > wi.Z_MAX_WINDOWBITS)) throw new Error("Invalid windowBits: " + e.windowBits);
                  if (e.level && (e.level < wi.Z_MIN_LEVEL || e.level > wi.Z_MAX_LEVEL)) throw new Error("Invalid compression level: " + e.level);
                  if (e.memLevel && (e.memLevel < wi.Z_MIN_MEMLEVEL || e.memLevel > wi.Z_MAX_MEMLEVEL)) throw new Error("Invalid memLevel: " + e.memLevel);
                  if (e.strategy && e.strategy != wi.Z_FILTERED && e.strategy != wi.Z_HUFFMAN_ONLY && e.strategy != wi.Z_RLE && e.strategy != wi.Z_FIXED && e.strategy != wi.Z_DEFAULT_STRATEGY) throw new Error("Invalid strategy: " + e.strategy);
                  if (e.dictionary && !V.isBuffer(e.dictionary)) throw new Error("Invalid dictionary: it should be a Buffer instance");
                  this._binding = new wi.Zlib(p);
                  var a = this;
                  this._hadError = false, this._binding.onerror = function (e, p) {
                    a._binding = null, a._hadError = true;
                    var d = new Error(e);
                    d.errno = p, d.code = _i[p], a.emit("error", d);
                  };
                  var d = wi.Z_DEFAULT_COMPRESSION;
                  "number" == typeof e.level && (d = e.level);
                  var t = wi.Z_DEFAULT_STRATEGY;
                  "number" == typeof e.strategy && (t = e.strategy), this._binding.init(e.windowBits || wi.Z_DEFAULT_WINDOWBITS, d, e.memLevel || wi.Z_DEFAULT_MEMLEVEL, t, e.dictionary), this._buffer = new V(this._chunkSize), this._offset = 0, this._closed = false, this._level = d, this._strategy = t, this.once("end", this.close);
                }
                Object.keys(_i).forEach(function (e) {
                  _i[_i[e]] = e;
                }), Ee(Wi, $p), Wi.prototype.params = function (e, p, a) {
                  if (e < wi.Z_MIN_LEVEL || e > wi.Z_MAX_LEVEL) throw new RangeError("Invalid compression level: " + e);
                  if (p != wi.Z_FILTERED && p != wi.Z_HUFFMAN_ONLY && p != wi.Z_RLE && p != wi.Z_FIXED && p != wi.Z_DEFAULT_STRATEGY) throw new TypeError("Invalid strategy: " + p);
                  if (this._level !== e || this._strategy !== p) {
                    var d = this;
                    this.flush(wi.Z_SYNC_FLUSH, function () {
                      d._binding.params(e, p), d._hadError || (d._level = e, d._strategy = p, a && a());
                    });
                  } else Pe.nextTick(a);
                }, Wi.prototype.reset = function () {
                  return this._binding.reset();
                }, Wi.prototype._flush = function (e) {
                  this._transform(new V(0), "", e);
                }, Wi.prototype.flush = function (e, p) {
                  var a = this._writableState;
                  if (("function" == typeof e || void 0 === e && !p) && (p = e, e = wi.Z_FULL_FLUSH), a.ended) p && Pe.nextTick(p);else if (a.ending) p && this.once("end", p);else if (a.needDrain) {
                    var d = this;
                    this.once("drain", function () {
                      d.flush(p);
                    });
                  } else this._flushFlag = e, this.write(new V(0), "", p);
                }, Wi.prototype.close = function (e) {
                  if (e && Pe.nextTick(e), !this._closed) {
                    this._closed = true, this._binding.close();
                    var p = this;
                    Pe.nextTick(function () {
                      p.emit("close");
                    });
                  }
                }, Wi.prototype._transform = function (e, p, a) {
                  var d,
                    t = this._writableState,
                    i = (t.ending || t.ended) && (!e || t.length === e.length);
                  if (null === !e && !V.isBuffer(e)) return a(new Error("invalid input"));
                  i ? d = wi.Z_FINISH : (d = this._flushFlag, e.length >= t.length && (this._flushFlag = this._opts.flush || wi.Z_NO_FLUSH)), this._processChunk(e, d, a);
                }, Wi.prototype._processChunk = function (e, p, a) {
                  var d = e && e.length,
                    t = this._chunkSize - this._offset,
                    i = 0,
                    r = this,
                    l = "function" == typeof a;
                  if (!l) {
                    var m,
                      n = [],
                      o = 0;
                    this.on("error", function (e) {
                      m = e;
                    });
                    do {
                      var s = this._binding.writeSync(p, e, i, d, this._buffer, this._offset, t);
                    } while (!this._hadError && f(s[0], s[1]));
                    if (this._hadError) throw m;
                    var u = V.concat(n, o);
                    return this.close(), u;
                  }
                  var h = this._binding.write(p, e, i, d, this._buffer, this._offset, t);
                  function f(m, s) {
                    if (!r._hadError) {
                      var u = t - s;
                      if (function (e) {
                        if (!e) throw new Error("have should not go down");
                      }(u >= 0), u > 0) {
                        var h = r._buffer.slice(r._offset, r._offset + u);
                        r._offset += u, l ? r.push(h) : (n.push(h), o += h.length);
                      }
                      if ((0 === s || r._offset >= r._chunkSize) && (t = r._chunkSize, r._offset = 0, r._buffer = new V(r._chunkSize)), 0 === s) {
                        if (i += d - m, d = m, !l) return true;
                        var c = r._binding.write(p, e, i, d, r._buffer, r._offset, r._chunkSize);
                        return c.callback = f, void (c.buffer = e);
                      }
                      if (!l) return false;
                      a();
                    }
                  }
                  h.buffer = e, h.callback = f;
                }, Ee(ji, Wi), Ee(qi, Wi), Ee(Zi, Wi), Ee(Hi, Wi), Ee($i, Wi), Ee(Yi, Wi), Ee(Ki, Wi);
                var Gi = {
                    codes: _i,
                    createDeflate: gi,
                    createInflate: bi,
                    createDeflateRaw: yi,
                    createInflateRaw: Ni,
                    createGzip: Si,
                    createGunzip: Di,
                    createUnzip: Ti,
                    deflate: Ei,
                    deflateSync: Vi,
                    gzip: Ai,
                    gzipSync: ki,
                    deflateRaw: Ri,
                    deflateRawSync: xi,
                    unzip: Ci,
                    unzipSync: Oi,
                    inflate: Li,
                    inflateSync: Bi,
                    gunzip: Ui,
                    gunzipSync: Pi,
                    inflateRaw: zi,
                    inflateRawSync: Fi,
                    Deflate: ji,
                    Inflate: qi,
                    Gzip: Zi,
                    Gunzip: Hi,
                    DeflateRaw: $i,
                    InflateRaw: Yi,
                    Unzip: Ki,
                    Zlib: Wi
                  },
                  Xi = d(Object.freeze({
                    __proto__: null,
                    Deflate: ji,
                    DeflateRaw: $i,
                    Gunzip: Hi,
                    Gzip: Zi,
                    Inflate: qi,
                    InflateRaw: Yi,
                    Unzip: Ki,
                    Zlib: Wi,
                    codes: _i,
                    createDeflate: gi,
                    createDeflateRaw: yi,
                    createGunzip: Di,
                    createGzip: Si,
                    createInflate: bi,
                    createInflateRaw: Ni,
                    createUnzip: Ti,
                    default: Gi,
                    deflate: Ei,
                    deflateRaw: Ri,
                    deflateRawSync: xi,
                    deflateSync: Vi,
                    gunzip: Ui,
                    gunzipSync: Pi,
                    gzip: Ai,
                    gzipSync: ki,
                    inflate: Li,
                    inflateRaw: zi,
                    inflateRawSync: Fi,
                    inflateSync: Bi,
                    unzip: Ci,
                    unzipSync: Oi
                  }));
                return function (e) {
                  e.exports = function (e, a, d, t, i, r) {
                    function l(e) {
                      return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
                    }
                    function m(e) {
                      if (e.__esModule) return e;
                      var p = e.default;
                      if ("function" == typeof p) {
                        var a = function e() {
                          return this instanceof e ? Reflect.construct(p, arguments, this.constructor) : p.apply(this, arguments);
                        };
                        a.prototype = p.prototype;
                      } else a = {};
                      return Object.defineProperty(a, "__esModule", {
                        value: true
                      }), Object.keys(e).forEach(function (p) {
                        var d = Object.getOwnPropertyDescriptor(e, p);
                        Object.defineProperty(a, p, d.get ? d : {
                          enumerable: true,
                          get: function () {
                            return e[p];
                          }
                        });
                      }), a;
                    }
                    var n = {
                        exports: {}
                      },
                      o = {},
                      s = {
                        exports: {}
                      },
                      u = {},
                      h = u;
                    function f(e) {
                      return e < 0 ? -1 : 1;
                    }
                    function c(e, p) {
                      p.unsigned || --e;
                      const a = p.unsigned ? 0 : -Math.pow(2, e),
                        d = Math.pow(2, e) - 1,
                        t = p.moduloBitLength ? Math.pow(2, p.moduloBitLength) : Math.pow(2, e),
                        i = p.moduloBitLength ? Math.pow(2, p.moduloBitLength - 1) : Math.pow(2, e - 1);
                      return function (e, r) {
                        r || (r = {});
                        let l = +e;
                        if (r.enforceRange) {
                          if (!Number.isFinite(l)) throw new TypeError("Argument is not a finite number");
                          if (l = f(l) * Math.floor(Math.abs(l)), l < a || l > d) throw new TypeError("Argument is not in byte range");
                          return l;
                        }
                        if (!isNaN(l) && r.clamp) return l = function (e) {
                          return e % 1 != .5 || 1 & e ? Math.round(e) : Math.floor(e);
                        }(l), l < a && (l = a), l > d && (l = d), l;
                        if (!Number.isFinite(l) || 0 === l) return 0;
                        if (l = f(l) * Math.floor(Math.abs(l)), l %= t, !p.unsigned && l >= i) return l - t;
                        if (p.unsigned) if (l < 0) l += t;else if (-0 === l) return 0;
                        return l;
                      };
                    }
                    u.void = function () {}, u.boolean = function (e) {
                      return !!e;
                    }, u.byte = c(8, {
                      unsigned: false
                    }), u.octet = c(8, {
                      unsigned: true
                    }), u.short = c(16, {
                      unsigned: false
                    }), u["unsigned short"] = c(16, {
                      unsigned: true
                    }), u.long = c(32, {
                      unsigned: false
                    }), u["unsigned long"] = c(32, {
                      unsigned: true
                    }), u["long long"] = c(32, {
                      unsigned: false,
                      moduloBitLength: 64
                    }), u["unsigned long long"] = c(32, {
                      unsigned: true,
                      moduloBitLength: 64
                    }), u.double = function (e) {
                      const p = +e;
                      if (!Number.isFinite(p)) throw new TypeError("Argument is not a finite floating-point value");
                      return p;
                    }, u["unrestricted double"] = function (e) {
                      const p = +e;
                      if (isNaN(p)) throw new TypeError("Argument is NaN");
                      return p;
                    }, u.float = u.double, u["unrestricted float"] = u["unrestricted double"], u.DOMString = function (e, p) {
                      return p || (p = {}), p.treatNullAsEmptyString && null === e ? "" : String(e);
                    }, u.ByteString = function (e, p) {
                      const a = String(e);
                      let d;
                      for (let e = 0; void 0 !== (d = a.codePointAt(e)); ++e) if (d > 255) throw new TypeError("Argument is not a valid bytestring");
                      return a;
                    }, u.USVString = function (e) {
                      const p = String(e),
                        a = p.length,
                        d = [];
                      for (let e = 0; e < a; ++e) {
                        const t = p.charCodeAt(e);
                        if (t < 55296 || t > 57343) d.push(String.fromCodePoint(t));else if (56320 <= t && t <= 57343) d.push(String.fromCodePoint(65533));else if (e === a - 1) d.push(String.fromCodePoint(65533));else {
                          const a = p.charCodeAt(e + 1);
                          if (56320 <= a && a <= 57343) {
                            const p = 1023 & t,
                              i = 1023 & a;
                            d.push(String.fromCodePoint(65536 + 1024 * p + i)), ++e;
                          } else d.push(String.fromCodePoint(65533));
                        }
                      }
                      return d.join("");
                    }, u.Date = function (e, p) {
                      if (!(e instanceof Date)) throw new TypeError("Argument is not a Date object");
                      if (!isNaN(e)) return e;
                    }, u.RegExp = function (e, p) {
                      return e instanceof RegExp || (e = new RegExp(e)), e;
                    };
                    var v = {
                      exports: {}
                    };
                    !function (e) {
                      e.exports.mixin = function (e, p) {
                        const a = Object.getOwnPropertyNames(p);
                        for (let d = 0; d < a.length; ++d) Object.defineProperty(e, a[d], Object.getOwnPropertyDescriptor(p, a[d]));
                      }, e.exports.wrapperSymbol = Symbol("wrapper"), e.exports.implSymbol = Symbol("impl"), e.exports.wrapperForImpl = function (p) {
                        return p[e.exports.wrapperSymbol];
                      }, e.exports.implForWrapper = function (p) {
                        return p[e.exports.implSymbol];
                      };
                    }(v);
                    var w = v.exports,
                      _ = {},
                      g = {
                        exports: {}
                      },
                      b = {},
                      y = t,
                      N = [[[0, 44], "disallowed_STD3_valid"], [[45, 46], "valid"], [[47, 47], "disallowed_STD3_valid"], [[48, 57], "valid"], [[58, 64], "disallowed_STD3_valid"], [[65, 65], "mapped", [97]], [[66, 66], "mapped", [98]], [[67, 67], "mapped", [99]], [[68, 68], "mapped", [100]], [[69, 69], "mapped", [101]], [[70, 70], "mapped", [102]], [[71, 71], "mapped", [103]], [[72, 72], "mapped", [104]], [[73, 73], "mapped", [105]], [[74, 74], "mapped", [106]], [[75, 75], "mapped", [107]], [[76, 76], "mapped", [108]], [[77, 77], "mapped", [109]], [[78, 78], "mapped", [110]], [[79, 79], "mapped", [111]], [[80, 80], "mapped", [112]], [[81, 81], "mapped", [113]], [[82, 82], "mapped", [114]], [[83, 83], "mapped", [115]], [[84, 84], "mapped", [116]], [[85, 85], "mapped", [117]], [[86, 86], "mapped", [118]], [[87, 87], "mapped", [119]], [[88, 88], "mapped", [120]], [[89, 89], "mapped", [121]], [[90, 90], "mapped", [122]], [[91, 96], "disallowed_STD3_valid"], [[97, 122], "valid"], [[123, 127], "disallowed_STD3_valid"], [[128, 159], "disallowed"], [[160, 160], "disallowed_STD3_mapped", [32]], [[161, 167], "valid", [], "NV8"], [[168, 168], "disallowed_STD3_mapped", [32, 776]], [[169, 169], "valid", [], "NV8"], [[170, 170], "mapped", [97]], [[171, 172], "valid", [], "NV8"], [[173, 173], "ignored"], [[174, 174], "valid", [], "NV8"], [[175, 175], "disallowed_STD3_mapped", [32, 772]], [[176, 177], "valid", [], "NV8"], [[178, 178], "mapped", [50]], [[179, 179], "mapped", [51]], [[180, 180], "disallowed_STD3_mapped", [32, 769]], [[181, 181], "mapped", [956]], [[182, 182], "valid", [], "NV8"], [[183, 183], "valid"], [[184, 184], "disallowed_STD3_mapped", [32, 807]], [[185, 185], "mapped", [49]], [[186, 186], "mapped", [111]], [[187, 187], "valid", [], "NV8"], [[188, 188], "mapped", [49, 8260, 52]], [[189, 189], "mapped", [49, 8260, 50]], [[190, 190], "mapped", [51, 8260, 52]], [[191, 191], "valid", [], "NV8"], [[192, 192], "mapped", [224]], [[193, 193], "mapped", [225]], [[194, 194], "mapped", [226]], [[195, 195], "mapped", [227]], [[196, 196], "mapped", [228]], [[197, 197], "mapped", [229]], [[198, 198], "mapped", [230]], [[199, 199], "mapped", [231]], [[200, 200], "mapped", [232]], [[201, 201], "mapped", [233]], [[202, 202], "mapped", [234]], [[203, 203], "mapped", [235]], [[204, 204], "mapped", [236]], [[205, 205], "mapped", [237]], [[206, 206], "mapped", [238]], [[207, 207], "mapped", [239]], [[208, 208], "mapped", [240]], [[209, 209], "mapped", [241]], [[210, 210], "mapped", [242]], [[211, 211], "mapped", [243]], [[212, 212], "mapped", [244]], [[213, 213], "mapped", [245]], [[214, 214], "mapped", [246]], [[215, 215], "valid", [], "NV8"], [[216, 216], "mapped", [248]], [[217, 217], "mapped", [249]], [[218, 218], "mapped", [250]], [[219, 219], "mapped", [251]], [[220, 220], "mapped", [252]], [[221, 221], "mapped", [253]], [[222, 222], "mapped", [254]], [[223, 223], "deviation", [115, 115]], [[224, 246], "valid"], [[247, 247], "valid", [], "NV8"], [[248, 255], "valid"], [[256, 256], "mapped", [257]], [[257, 257], "valid"], [[258, 258], "mapped", [259]], [[259, 259], "valid"], [[260, 260], "mapped", [261]], [[261, 261], "valid"], [[262, 262], "mapped", [263]], [[263, 263], "valid"], [[264, 264], "mapped", [265]], [[265, 265], "valid"], [[266, 266], "mapped", [267]], [[267, 267], "valid"], [[268, 268], "mapped", [269]], [[269, 269], "valid"], [[270, 270], "mapped", [271]], [[271, 271], "valid"], [[272, 272], "mapped", [273]], [[273, 273], "valid"], [[274, 274], "mapped", [275]], [[275, 275], "valid"], [[276, 276], "mapped", [277]], [[277, 277], "valid"], [[278, 278], "mapped", [279]], [[279, 279], "valid"], [[280, 280], "mapped", [281]], [[281, 281], "valid"], [[282, 282], "mapped", [283]], [[283, 283], "valid"], [[284, 284], "mapped", [285]], [[285, 285], "valid"], [[286, 286], "mapped", [287]], [[287, 287], "valid"], [[288, 288], "mapped", [289]], [[289, 289], "valid"], [[290, 290], "mapped", [291]], [[291, 291], "valid"], [[292, 292], "mapped", [293]], [[293, 293], "valid"], [[294, 294], "mapped", [295]], [[295, 295], "valid"], [[296, 296], "mapped", [297]], [[297, 297], "valid"], [[298, 298], "mapped", [299]], [[299, 299], "valid"], [[300, 300], "mapped", [301]], [[301, 301], "valid"], [[302, 302], "mapped", [303]], [[303, 303], "valid"], [[304, 304], "mapped", [105, 775]], [[305, 305], "valid"], [[306, 307], "mapped", [105, 106]], [[308, 308], "mapped", [309]], [[309, 309], "valid"], [[310, 310], "mapped", [311]], [[311, 312], "valid"], [[313, 313], "mapped", [314]], [[314, 314], "valid"], [[315, 315], "mapped", [316]], [[316, 316], "valid"], [[317, 317], "mapped", [318]], [[318, 318], "valid"], [[319, 320], "mapped", [108, 183]], [[321, 321], "mapped", [322]], [[322, 322], "valid"], [[323, 323], "mapped", [324]], [[324, 324], "valid"], [[325, 325], "mapped", [326]], [[326, 326], "valid"], [[327, 327], "mapped", [328]], [[328, 328], "valid"], [[329, 329], "mapped", [700, 110]], [[330, 330], "mapped", [331]], [[331, 331], "valid"], [[332, 332], "mapped", [333]], [[333, 333], "valid"], [[334, 334], "mapped", [335]], [[335, 335], "valid"], [[336, 336], "mapped", [337]], [[337, 337], "valid"], [[338, 338], "mapped", [339]], [[339, 339], "valid"], [[340, 340], "mapped", [341]], [[341, 341], "valid"], [[342, 342], "mapped", [343]], [[343, 343], "valid"], [[344, 344], "mapped", [345]], [[345, 345], "valid"], [[346, 346], "mapped", [347]], [[347, 347], "valid"], [[348, 348], "mapped", [349]], [[349, 349], "valid"], [[350, 350], "mapped", [351]], [[351, 351], "valid"], [[352, 352], "mapped", [353]], [[353, 353], "valid"], [[354, 354], "mapped", [355]], [[355, 355], "valid"], [[356, 356], "mapped", [357]], [[357, 357], "valid"], [[358, 358], "mapped", [359]], [[359, 359], "valid"], [[360, 360], "mapped", [361]], [[361, 361], "valid"], [[362, 362], "mapped", [363]], [[363, 363], "valid"], [[364, 364], "mapped", [365]], [[365, 365], "valid"], [[366, 366], "mapped", [367]], [[367, 367], "valid"], [[368, 368], "mapped", [369]], [[369, 369], "valid"], [[370, 370], "mapped", [371]], [[371, 371], "valid"], [[372, 372], "mapped", [373]], [[373, 373], "valid"], [[374, 374], "mapped", [375]], [[375, 375], "valid"], [[376, 376], "mapped", [255]], [[377, 377], "mapped", [378]], [[378, 378], "valid"], [[379, 379], "mapped", [380]], [[380, 380], "valid"], [[381, 381], "mapped", [382]], [[382, 382], "valid"], [[383, 383], "mapped", [115]], [[384, 384], "valid"], [[385, 385], "mapped", [595]], [[386, 386], "mapped", [387]], [[387, 387], "valid"], [[388, 388], "mapped", [389]], [[389, 389], "valid"], [[390, 390], "mapped", [596]], [[391, 391], "mapped", [392]], [[392, 392], "valid"], [[393, 393], "mapped", [598]], [[394, 394], "mapped", [599]], [[395, 395], "mapped", [396]], [[396, 397], "valid"], [[398, 398], "mapped", [477]], [[399, 399], "mapped", [601]], [[400, 400], "mapped", [603]], [[401, 401], "mapped", [402]], [[402, 402], "valid"], [[403, 403], "mapped", [608]], [[404, 404], "mapped", [611]], [[405, 405], "valid"], [[406, 406], "mapped", [617]], [[407, 407], "mapped", [616]], [[408, 408], "mapped", [409]], [[409, 411], "valid"], [[412, 412], "mapped", [623]], [[413, 413], "mapped", [626]], [[414, 414], "valid"], [[415, 415], "mapped", [629]], [[416, 416], "mapped", [417]], [[417, 417], "valid"], [[418, 418], "mapped", [419]], [[419, 419], "valid"], [[420, 420], "mapped", [421]], [[421, 421], "valid"], [[422, 422], "mapped", [640]], [[423, 423], "mapped", [424]], [[424, 424], "valid"], [[425, 425], "mapped", [643]], [[426, 427], "valid"], [[428, 428], "mapped", [429]], [[429, 429], "valid"], [[430, 430], "mapped", [648]], [[431, 431], "mapped", [432]], [[432, 432], "valid"], [[433, 433], "mapped", [650]], [[434, 434], "mapped", [651]], [[435, 435], "mapped", [436]], [[436, 436], "valid"], [[437, 437], "mapped", [438]], [[438, 438], "valid"], [[439, 439], "mapped", [658]], [[440, 440], "mapped", [441]], [[441, 443], "valid"], [[444, 444], "mapped", [445]], [[445, 451], "valid"], [[452, 454], "mapped", [100, 382]], [[455, 457], "mapped", [108, 106]], [[458, 460], "mapped", [110, 106]], [[461, 461], "mapped", [462]], [[462, 462], "valid"], [[463, 463], "mapped", [464]], [[464, 464], "valid"], [[465, 465], "mapped", [466]], [[466, 466], "valid"], [[467, 467], "mapped", [468]], [[468, 468], "valid"], [[469, 469], "mapped", [470]], [[470, 470], "valid"], [[471, 471], "mapped", [472]], [[472, 472], "valid"], [[473, 473], "mapped", [474]], [[474, 474], "valid"], [[475, 475], "mapped", [476]], [[476, 477], "valid"], [[478, 478], "mapped", [479]], [[479, 479], "valid"], [[480, 480], "mapped", [481]], [[481, 481], "valid"], [[482, 482], "mapped", [483]], [[483, 483], "valid"], [[484, 484], "mapped", [485]], [[485, 485], "valid"], [[486, 486], "mapped", [487]], [[487, 487], "valid"], [[488, 488], "mapped", [489]], [[489, 489], "valid"], [[490, 490], "mapped", [491]], [[491, 491], "valid"], [[492, 492], "mapped", [493]], [[493, 493], "valid"], [[494, 494], "mapped", [495]], [[495, 496], "valid"], [[497, 499], "mapped", [100, 122]], [[500, 500], "mapped", [501]], [[501, 501], "valid"], [[502, 502], "mapped", [405]], [[503, 503], "mapped", [447]], [[504, 504], "mapped", [505]], [[505, 505], "valid"], [[506, 506], "mapped", [507]], [[507, 507], "valid"], [[508, 508], "mapped", [509]], [[509, 509], "valid"], [[510, 510], "mapped", [511]], [[511, 511], "valid"], [[512, 512], "mapped", [513]], [[513, 513], "valid"], [[514, 514], "mapped", [515]], [[515, 515], "valid"], [[516, 516], "mapped", [517]], [[517, 517], "valid"], [[518, 518], "mapped", [519]], [[519, 519], "valid"], [[520, 520], "mapped", [521]], [[521, 521], "valid"], [[522, 522], "mapped", [523]], [[523, 523], "valid"], [[524, 524], "mapped", [525]], [[525, 525], "valid"], [[526, 526], "mapped", [527]], [[527, 527], "valid"], [[528, 528], "mapped", [529]], [[529, 529], "valid"], [[530, 530], "mapped", [531]], [[531, 531], "valid"], [[532, 532], "mapped", [533]], [[533, 533], "valid"], [[534, 534], "mapped", [535]], [[535, 535], "valid"], [[536, 536], "mapped", [537]], [[537, 537], "valid"], [[538, 538], "mapped", [539]], [[539, 539], "valid"], [[540, 540], "mapped", [541]], [[541, 541], "valid"], [[542, 542], "mapped", [543]], [[543, 543], "valid"], [[544, 544], "mapped", [414]], [[545, 545], "valid"], [[546, 546], "mapped", [547]], [[547, 547], "valid"], [[548, 548], "mapped", [549]], [[549, 549], "valid"], [[550, 550], "mapped", [551]], [[551, 551], "valid"], [[552, 552], "mapped", [553]], [[553, 553], "valid"], [[554, 554], "mapped", [555]], [[555, 555], "valid"], [[556, 556], "mapped", [557]], [[557, 557], "valid"], [[558, 558], "mapped", [559]], [[559, 559], "valid"], [[560, 560], "mapped", [561]], [[561, 561], "valid"], [[562, 562], "mapped", [563]], [[563, 563], "valid"], [[564, 566], "valid"], [[567, 569], "valid"], [[570, 570], "mapped", [11365]], [[571, 571], "mapped", [572]], [[572, 572], "valid"], [[573, 573], "mapped", [410]], [[574, 574], "mapped", [11366]], [[575, 576], "valid"], [[577, 577], "mapped", [578]], [[578, 578], "valid"], [[579, 579], "mapped", [384]], [[580, 580], "mapped", [649]], [[581, 581], "mapped", [652]], [[582, 582], "mapped", [583]], [[583, 583], "valid"], [[584, 584], "mapped", [585]], [[585, 585], "valid"], [[586, 586], "mapped", [587]], [[587, 587], "valid"], [[588, 588], "mapped", [589]], [[589, 589], "valid"], [[590, 590], "mapped", [591]], [[591, 591], "valid"], [[592, 680], "valid"], [[681, 685], "valid"], [[686, 687], "valid"], [[688, 688], "mapped", [104]], [[689, 689], "mapped", [614]], [[690, 690], "mapped", [106]], [[691, 691], "mapped", [114]], [[692, 692], "mapped", [633]], [[693, 693], "mapped", [635]], [[694, 694], "mapped", [641]], [[695, 695], "mapped", [119]], [[696, 696], "mapped", [121]], [[697, 705], "valid"], [[706, 709], "valid", [], "NV8"], [[710, 721], "valid"], [[722, 727], "valid", [], "NV8"], [[728, 728], "disallowed_STD3_mapped", [32, 774]], [[729, 729], "disallowed_STD3_mapped", [32, 775]], [[730, 730], "disallowed_STD3_mapped", [32, 778]], [[731, 731], "disallowed_STD3_mapped", [32, 808]], [[732, 732], "disallowed_STD3_mapped", [32, 771]], [[733, 733], "disallowed_STD3_mapped", [32, 779]], [[734, 734], "valid", [], "NV8"], [[735, 735], "valid", [], "NV8"], [[736, 736], "mapped", [611]], [[737, 737], "mapped", [108]], [[738, 738], "mapped", [115]], [[739, 739], "mapped", [120]], [[740, 740], "mapped", [661]], [[741, 745], "valid", [], "NV8"], [[746, 747], "valid", [], "NV8"], [[748, 748], "valid"], [[749, 749], "valid", [], "NV8"], [[750, 750], "valid"], [[751, 767], "valid", [], "NV8"], [[768, 831], "valid"], [[832, 832], "mapped", [768]], [[833, 833], "mapped", [769]], [[834, 834], "valid"], [[835, 835], "mapped", [787]], [[836, 836], "mapped", [776, 769]], [[837, 837], "mapped", [953]], [[838, 846], "valid"], [[847, 847], "ignored"], [[848, 855], "valid"], [[856, 860], "valid"], [[861, 863], "valid"], [[864, 865], "valid"], [[866, 866], "valid"], [[867, 879], "valid"], [[880, 880], "mapped", [881]], [[881, 881], "valid"], [[882, 882], "mapped", [883]], [[883, 883], "valid"], [[884, 884], "mapped", [697]], [[885, 885], "valid"], [[886, 886], "mapped", [887]], [[887, 887], "valid"], [[888, 889], "disallowed"], [[890, 890], "disallowed_STD3_mapped", [32, 953]], [[891, 893], "valid"], [[894, 894], "disallowed_STD3_mapped", [59]], [[895, 895], "mapped", [1011]], [[896, 899], "disallowed"], [[900, 900], "disallowed_STD3_mapped", [32, 769]], [[901, 901], "disallowed_STD3_mapped", [32, 776, 769]], [[902, 902], "mapped", [940]], [[903, 903], "mapped", [183]], [[904, 904], "mapped", [941]], [[905, 905], "mapped", [942]], [[906, 906], "mapped", [943]], [[907, 907], "disallowed"], [[908, 908], "mapped", [972]], [[909, 909], "disallowed"], [[910, 910], "mapped", [973]], [[911, 911], "mapped", [974]], [[912, 912], "valid"], [[913, 913], "mapped", [945]], [[914, 914], "mapped", [946]], [[915, 915], "mapped", [947]], [[916, 916], "mapped", [948]], [[917, 917], "mapped", [949]], [[918, 918], "mapped", [950]], [[919, 919], "mapped", [951]], [[920, 920], "mapped", [952]], [[921, 921], "mapped", [953]], [[922, 922], "mapped", [954]], [[923, 923], "mapped", [955]], [[924, 924], "mapped", [956]], [[925, 925], "mapped", [957]], [[926, 926], "mapped", [958]], [[927, 927], "mapped", [959]], [[928, 928], "mapped", [960]], [[929, 929], "mapped", [961]], [[930, 930], "disallowed"], [[931, 931], "mapped", [963]], [[932, 932], "mapped", [964]], [[933, 933], "mapped", [965]], [[934, 934], "mapped", [966]], [[935, 935], "mapped", [967]], [[936, 936], "mapped", [968]], [[937, 937], "mapped", [969]], [[938, 938], "mapped", [970]], [[939, 939], "mapped", [971]], [[940, 961], "valid"], [[962, 962], "deviation", [963]], [[963, 974], "valid"], [[975, 975], "mapped", [983]], [[976, 976], "mapped", [946]], [[977, 977], "mapped", [952]], [[978, 978], "mapped", [965]], [[979, 979], "mapped", [973]], [[980, 980], "mapped", [971]], [[981, 981], "mapped", [966]], [[982, 982], "mapped", [960]], [[983, 983], "valid"], [[984, 984], "mapped", [985]], [[985, 985], "valid"], [[986, 986], "mapped", [987]], [[987, 987], "valid"], [[988, 988], "mapped", [989]], [[989, 989], "valid"], [[990, 990], "mapped", [991]], [[991, 991], "valid"], [[992, 992], "mapped", [993]], [[993, 993], "valid"], [[994, 994], "mapped", [995]], [[995, 995], "valid"], [[996, 996], "mapped", [997]], [[997, 997], "valid"], [[998, 998], "mapped", [999]], [[999, 999], "valid"], [[1e3, 1e3], "mapped", [1001]], [[1001, 1001], "valid"], [[1002, 1002], "mapped", [1003]], [[1003, 1003], "valid"], [[1004, 1004], "mapped", [1005]], [[1005, 1005], "valid"], [[1006, 1006], "mapped", [1007]], [[1007, 1007], "valid"], [[1008, 1008], "mapped", [954]], [[1009, 1009], "mapped", [961]], [[1010, 1010], "mapped", [963]], [[1011, 1011], "valid"], [[1012, 1012], "mapped", [952]], [[1013, 1013], "mapped", [949]], [[1014, 1014], "valid", [], "NV8"], [[1015, 1015], "mapped", [1016]], [[1016, 1016], "valid"], [[1017, 1017], "mapped", [963]], [[1018, 1018], "mapped", [1019]], [[1019, 1019], "valid"], [[1020, 1020], "valid"], [[1021, 1021], "mapped", [891]], [[1022, 1022], "mapped", [892]], [[1023, 1023], "mapped", [893]], [[1024, 1024], "mapped", [1104]], [[1025, 1025], "mapped", [1105]], [[1026, 1026], "mapped", [1106]], [[1027, 1027], "mapped", [1107]], [[1028, 1028], "mapped", [1108]], [[1029, 1029], "mapped", [1109]], [[1030, 1030], "mapped", [1110]], [[1031, 1031], "mapped", [1111]], [[1032, 1032], "mapped", [1112]], [[1033, 1033], "mapped", [1113]], [[1034, 1034], "mapped", [1114]], [[1035, 1035], "mapped", [1115]], [[1036, 1036], "mapped", [1116]], [[1037, 1037], "mapped", [1117]], [[1038, 1038], "mapped", [1118]], [[1039, 1039], "mapped", [1119]], [[1040, 1040], "mapped", [1072]], [[1041, 1041], "mapped", [1073]], [[1042, 1042], "mapped", [1074]], [[1043, 1043], "mapped", [1075]], [[1044, 1044], "mapped", [1076]], [[1045, 1045], "mapped", [1077]], [[1046, 1046], "mapped", [1078]], [[1047, 1047], "mapped", [1079]], [[1048, 1048], "mapped", [1080]], [[1049, 1049], "mapped", [1081]], [[1050, 1050], "mapped", [1082]], [[1051, 1051], "mapped", [1083]], [[1052, 1052], "mapped", [1084]], [[1053, 1053], "mapped", [1085]], [[1054, 1054], "mapped", [1086]], [[1055, 1055], "mapped", [1087]], [[1056, 1056], "mapped", [1088]], [[1057, 1057], "mapped", [1089]], [[1058, 1058], "mapped", [1090]], [[1059, 1059], "mapped", [1091]], [[1060, 1060], "mapped", [1092]], [[1061, 1061], "mapped", [1093]], [[1062, 1062], "mapped", [1094]], [[1063, 1063], "mapped", [1095]], [[1064, 1064], "mapped", [1096]], [[1065, 1065], "mapped", [1097]], [[1066, 1066], "mapped", [1098]], [[1067, 1067], "mapped", [1099]], [[1068, 1068], "mapped", [1100]], [[1069, 1069], "mapped", [1101]], [[1070, 1070], "mapped", [1102]], [[1071, 1071], "mapped", [1103]], [[1072, 1103], "valid"], [[1104, 1104], "valid"], [[1105, 1116], "valid"], [[1117, 1117], "valid"], [[1118, 1119], "valid"], [[1120, 1120], "mapped", [1121]], [[1121, 1121], "valid"], [[1122, 1122], "mapped", [1123]], [[1123, 1123], "valid"], [[1124, 1124], "mapped", [1125]], [[1125, 1125], "valid"], [[1126, 1126], "mapped", [1127]], [[1127, 1127], "valid"], [[1128, 1128], "mapped", [1129]], [[1129, 1129], "valid"], [[1130, 1130], "mapped", [1131]], [[1131, 1131], "valid"], [[1132, 1132], "mapped", [1133]], [[1133, 1133], "valid"], [[1134, 1134], "mapped", [1135]], [[1135, 1135], "valid"], [[1136, 1136], "mapped", [1137]], [[1137, 1137], "valid"], [[1138, 1138], "mapped", [1139]], [[1139, 1139], "valid"], [[1140, 1140], "mapped", [1141]], [[1141, 1141], "valid"], [[1142, 1142], "mapped", [1143]], [[1143, 1143], "valid"], [[1144, 1144], "mapped", [1145]], [[1145, 1145], "valid"], [[1146, 1146], "mapped", [1147]], [[1147, 1147], "valid"], [[1148, 1148], "mapped", [1149]], [[1149, 1149], "valid"], [[1150, 1150], "mapped", [1151]], [[1151, 1151], "valid"], [[1152, 1152], "mapped", [1153]], [[1153, 1153], "valid"], [[1154, 1154], "valid", [], "NV8"], [[1155, 1158], "valid"], [[1159, 1159], "valid"], [[1160, 1161], "valid", [], "NV8"], [[1162, 1162], "mapped", [1163]], [[1163, 1163], "valid"], [[1164, 1164], "mapped", [1165]], [[1165, 1165], "valid"], [[1166, 1166], "mapped", [1167]], [[1167, 1167], "valid"], [[1168, 1168], "mapped", [1169]], [[1169, 1169], "valid"], [[1170, 1170], "mapped", [1171]], [[1171, 1171], "valid"], [[1172, 1172], "mapped", [1173]], [[1173, 1173], "valid"], [[1174, 1174], "mapped", [1175]], [[1175, 1175], "valid"], [[1176, 1176], "mapped", [1177]], [[1177, 1177], "valid"], [[1178, 1178], "mapped", [1179]], [[1179, 1179], "valid"], [[1180, 1180], "mapped", [1181]], [[1181, 1181], "valid"], [[1182, 1182], "mapped", [1183]], [[1183, 1183], "valid"], [[1184, 1184], "mapped", [1185]], [[1185, 1185], "valid"], [[1186, 1186], "mapped", [1187]], [[1187, 1187], "valid"], [[1188, 1188], "mapped", [1189]], [[1189, 1189], "valid"], [[1190, 1190], "mapped", [1191]], [[1191, 1191], "valid"], [[1192, 1192], "mapped", [1193]], [[1193, 1193], "valid"], [[1194, 1194], "mapped", [1195]], [[1195, 1195], "valid"], [[1196, 1196], "mapped", [1197]], [[1197, 1197], "valid"], [[1198, 1198], "mapped", [1199]], [[1199, 1199], "valid"], [[1200, 1200], "mapped", [1201]], [[1201, 1201], "valid"], [[1202, 1202], "mapped", [1203]], [[1203, 1203], "valid"], [[1204, 1204], "mapped", [1205]], [[1205, 1205], "valid"], [[1206, 1206], "mapped", [1207]], [[1207, 1207], "valid"], [[1208, 1208], "mapped", [1209]], [[1209, 1209], "valid"], [[1210, 1210], "mapped", [1211]], [[1211, 1211], "valid"], [[1212, 1212], "mapped", [1213]], [[1213, 1213], "valid"], [[1214, 1214], "mapped", [1215]], [[1215, 1215], "valid"], [[1216, 1216], "disallowed"], [[1217, 1217], "mapped", [1218]], [[1218, 1218], "valid"], [[1219, 1219], "mapped", [1220]], [[1220, 1220], "valid"], [[1221, 1221], "mapped", [1222]], [[1222, 1222], "valid"], [[1223, 1223], "mapped", [1224]], [[1224, 1224], "valid"], [[1225, 1225], "mapped", [1226]], [[1226, 1226], "valid"], [[1227, 1227], "mapped", [1228]], [[1228, 1228], "valid"], [[1229, 1229], "mapped", [1230]], [[1230, 1230], "valid"], [[1231, 1231], "valid"], [[1232, 1232], "mapped", [1233]], [[1233, 1233], "valid"], [[1234, 1234], "mapped", [1235]], [[1235, 1235], "valid"], [[1236, 1236], "mapped", [1237]], [[1237, 1237], "valid"], [[1238, 1238], "mapped", [1239]], [[1239, 1239], "valid"], [[1240, 1240], "mapped", [1241]], [[1241, 1241], "valid"], [[1242, 1242], "mapped", [1243]], [[1243, 1243], "valid"], [[1244, 1244], "mapped", [1245]], [[1245, 1245], "valid"], [[1246, 1246], "mapped", [1247]], [[1247, 1247], "valid"], [[1248, 1248], "mapped", [1249]], [[1249, 1249], "valid"], [[1250, 1250], "mapped", [1251]], [[1251, 1251], "valid"], [[1252, 1252], "mapped", [1253]], [[1253, 1253], "valid"], [[1254, 1254], "mapped", [1255]], [[1255, 1255], "valid"], [[1256, 1256], "mapped", [1257]], [[1257, 1257], "valid"], [[1258, 1258], "mapped", [1259]], [[1259, 1259], "valid"], [[1260, 1260], "mapped", [1261]], [[1261, 1261], "valid"], [[1262, 1262], "mapped", [1263]], [[1263, 1263], "valid"], [[1264, 1264], "mapped", [1265]], [[1265, 1265], "valid"], [[1266, 1266], "mapped", [1267]], [[1267, 1267], "valid"], [[1268, 1268], "mapped", [1269]], [[1269, 1269], "valid"], [[1270, 1270], "mapped", [1271]], [[1271, 1271], "valid"], [[1272, 1272], "mapped", [1273]], [[1273, 1273], "valid"], [[1274, 1274], "mapped", [1275]], [[1275, 1275], "valid"], [[1276, 1276], "mapped", [1277]], [[1277, 1277], "valid"], [[1278, 1278], "mapped", [1279]], [[1279, 1279], "valid"], [[1280, 1280], "mapped", [1281]], [[1281, 1281], "valid"], [[1282, 1282], "mapped", [1283]], [[1283, 1283], "valid"], [[1284, 1284], "mapped", [1285]], [[1285, 1285], "valid"], [[1286, 1286], "mapped", [1287]], [[1287, 1287], "valid"], [[1288, 1288], "mapped", [1289]], [[1289, 1289], "valid"], [[1290, 1290], "mapped", [1291]], [[1291, 1291], "valid"], [[1292, 1292], "mapped", [1293]], [[1293, 1293], "valid"], [[1294, 1294], "mapped", [1295]], [[1295, 1295], "valid"], [[1296, 1296], "mapped", [1297]], [[1297, 1297], "valid"], [[1298, 1298], "mapped", [1299]], [[1299, 1299], "valid"], [[1300, 1300], "mapped", [1301]], [[1301, 1301], "valid"], [[1302, 1302], "mapped", [1303]], [[1303, 1303], "valid"], [[1304, 1304], "mapped", [1305]], [[1305, 1305], "valid"], [[1306, 1306], "mapped", [1307]], [[1307, 1307], "valid"], [[1308, 1308], "mapped", [1309]], [[1309, 1309], "valid"], [[1310, 1310], "mapped", [1311]], [[1311, 1311], "valid"], [[1312, 1312], "mapped", [1313]], [[1313, 1313], "valid"], [[1314, 1314], "mapped", [1315]], [[1315, 1315], "valid"], [[1316, 1316], "mapped", [1317]], [[1317, 1317], "valid"], [[1318, 1318], "mapped", [1319]], [[1319, 1319], "valid"], [[1320, 1320], "mapped", [1321]], [[1321, 1321], "valid"], [[1322, 1322], "mapped", [1323]], [[1323, 1323], "valid"], [[1324, 1324], "mapped", [1325]], [[1325, 1325], "valid"], [[1326, 1326], "mapped", [1327]], [[1327, 1327], "valid"], [[1328, 1328], "disallowed"], [[1329, 1329], "mapped", [1377]], [[1330, 1330], "mapped", [1378]], [[1331, 1331], "mapped", [1379]], [[1332, 1332], "mapped", [1380]], [[1333, 1333], "mapped", [1381]], [[1334, 1334], "mapped", [1382]], [[1335, 1335], "mapped", [1383]], [[1336, 1336], "mapped", [1384]], [[1337, 1337], "mapped", [1385]], [[1338, 1338], "mapped", [1386]], [[1339, 1339], "mapped", [1387]], [[1340, 1340], "mapped", [1388]], [[1341, 1341], "mapped", [1389]], [[1342, 1342], "mapped", [1390]], [[1343, 1343], "mapped", [1391]], [[1344, 1344], "mapped", [1392]], [[1345, 1345], "mapped", [1393]], [[1346, 1346], "mapped", [1394]], [[1347, 1347], "mapped", [1395]], [[1348, 1348], "mapped", [1396]], [[1349, 1349], "mapped", [1397]], [[1350, 1350], "mapped", [1398]], [[1351, 1351], "mapped", [1399]], [[1352, 1352], "mapped", [1400]], [[1353, 1353], "mapped", [1401]], [[1354, 1354], "mapped", [1402]], [[1355, 1355], "mapped", [1403]], [[1356, 1356], "mapped", [1404]], [[1357, 1357], "mapped", [1405]], [[1358, 1358], "mapped", [1406]], [[1359, 1359], "mapped", [1407]], [[1360, 1360], "mapped", [1408]], [[1361, 1361], "mapped", [1409]], [[1362, 1362], "mapped", [1410]], [[1363, 1363], "mapped", [1411]], [[1364, 1364], "mapped", [1412]], [[1365, 1365], "mapped", [1413]], [[1366, 1366], "mapped", [1414]], [[1367, 1368], "disallowed"], [[1369, 1369], "valid"], [[1370, 1375], "valid", [], "NV8"], [[1376, 1376], "disallowed"], [[1377, 1414], "valid"], [[1415, 1415], "mapped", [1381, 1410]], [[1416, 1416], "disallowed"], [[1417, 1417], "valid", [], "NV8"], [[1418, 1418], "valid", [], "NV8"], [[1419, 1420], "disallowed"], [[1421, 1422], "valid", [], "NV8"], [[1423, 1423], "valid", [], "NV8"], [[1424, 1424], "disallowed"], [[1425, 1441], "valid"], [[1442, 1442], "valid"], [[1443, 1455], "valid"], [[1456, 1465], "valid"], [[1466, 1466], "valid"], [[1467, 1469], "valid"], [[1470, 1470], "valid", [], "NV8"], [[1471, 1471], "valid"], [[1472, 1472], "valid", [], "NV8"], [[1473, 1474], "valid"], [[1475, 1475], "valid", [], "NV8"], [[1476, 1476], "valid"], [[1477, 1477], "valid"], [[1478, 1478], "valid", [], "NV8"], [[1479, 1479], "valid"], [[1480, 1487], "disallowed"], [[1488, 1514], "valid"], [[1515, 1519], "disallowed"], [[1520, 1524], "valid"], [[1525, 1535], "disallowed"], [[1536, 1539], "disallowed"], [[1540, 1540], "disallowed"], [[1541, 1541], "disallowed"], [[1542, 1546], "valid", [], "NV8"], [[1547, 1547], "valid", [], "NV8"], [[1548, 1548], "valid", [], "NV8"], [[1549, 1551], "valid", [], "NV8"], [[1552, 1557], "valid"], [[1558, 1562], "valid"], [[1563, 1563], "valid", [], "NV8"], [[1564, 1564], "disallowed"], [[1565, 1565], "disallowed"], [[1566, 1566], "valid", [], "NV8"], [[1567, 1567], "valid", [], "NV8"], [[1568, 1568], "valid"], [[1569, 1594], "valid"], [[1595, 1599], "valid"], [[1600, 1600], "valid", [], "NV8"], [[1601, 1618], "valid"], [[1619, 1621], "valid"], [[1622, 1624], "valid"], [[1625, 1630], "valid"], [[1631, 1631], "valid"], [[1632, 1641], "valid"], [[1642, 1645], "valid", [], "NV8"], [[1646, 1647], "valid"], [[1648, 1652], "valid"], [[1653, 1653], "mapped", [1575, 1652]], [[1654, 1654], "mapped", [1608, 1652]], [[1655, 1655], "mapped", [1735, 1652]], [[1656, 1656], "mapped", [1610, 1652]], [[1657, 1719], "valid"], [[1720, 1721], "valid"], [[1722, 1726], "valid"], [[1727, 1727], "valid"], [[1728, 1742], "valid"], [[1743, 1743], "valid"], [[1744, 1747], "valid"], [[1748, 1748], "valid", [], "NV8"], [[1749, 1756], "valid"], [[1757, 1757], "disallowed"], [[1758, 1758], "valid", [], "NV8"], [[1759, 1768], "valid"], [[1769, 1769], "valid", [], "NV8"], [[1770, 1773], "valid"], [[1774, 1775], "valid"], [[1776, 1785], "valid"], [[1786, 1790], "valid"], [[1791, 1791], "valid"], [[1792, 1805], "valid", [], "NV8"], [[1806, 1806], "disallowed"], [[1807, 1807], "disallowed"], [[1808, 1836], "valid"], [[1837, 1839], "valid"], [[1840, 1866], "valid"], [[1867, 1868], "disallowed"], [[1869, 1871], "valid"], [[1872, 1901], "valid"], [[1902, 1919], "valid"], [[1920, 1968], "valid"], [[1969, 1969], "valid"], [[1970, 1983], "disallowed"], [[1984, 2037], "valid"], [[2038, 2042], "valid", [], "NV8"], [[2043, 2047], "disallowed"], [[2048, 2093], "valid"], [[2094, 2095], "disallowed"], [[2096, 2110], "valid", [], "NV8"], [[2111, 2111], "disallowed"], [[2112, 2139], "valid"], [[2140, 2141], "disallowed"], [[2142, 2142], "valid", [], "NV8"], [[2143, 2207], "disallowed"], [[2208, 2208], "valid"], [[2209, 2209], "valid"], [[2210, 2220], "valid"], [[2221, 2226], "valid"], [[2227, 2228], "valid"], [[2229, 2274], "disallowed"], [[2275, 2275], "valid"], [[2276, 2302], "valid"], [[2303, 2303], "valid"], [[2304, 2304], "valid"], [[2305, 2307], "valid"], [[2308, 2308], "valid"], [[2309, 2361], "valid"], [[2362, 2363], "valid"], [[2364, 2381], "valid"], [[2382, 2382], "valid"], [[2383, 2383], "valid"], [[2384, 2388], "valid"], [[2389, 2389], "valid"], [[2390, 2391], "valid"], [[2392, 2392], "mapped", [2325, 2364]], [[2393, 2393], "mapped", [2326, 2364]], [[2394, 2394], "mapped", [2327, 2364]], [[2395, 2395], "mapped", [2332, 2364]], [[2396, 2396], "mapped", [2337, 2364]], [[2397, 2397], "mapped", [2338, 2364]], [[2398, 2398], "mapped", [2347, 2364]], [[2399, 2399], "mapped", [2351, 2364]], [[2400, 2403], "valid"], [[2404, 2405], "valid", [], "NV8"], [[2406, 2415], "valid"], [[2416, 2416], "valid", [], "NV8"], [[2417, 2418], "valid"], [[2419, 2423], "valid"], [[2424, 2424], "valid"], [[2425, 2426], "valid"], [[2427, 2428], "valid"], [[2429, 2429], "valid"], [[2430, 2431], "valid"], [[2432, 2432], "valid"], [[2433, 2435], "valid"], [[2436, 2436], "disallowed"], [[2437, 2444], "valid"], [[2445, 2446], "disallowed"], [[2447, 2448], "valid"], [[2449, 2450], "disallowed"], [[2451, 2472], "valid"], [[2473, 2473], "disallowed"], [[2474, 2480], "valid"], [[2481, 2481], "disallowed"], [[2482, 2482], "valid"], [[2483, 2485], "disallowed"], [[2486, 2489], "valid"], [[2490, 2491], "disallowed"], [[2492, 2492], "valid"], [[2493, 2493], "valid"], [[2494, 2500], "valid"], [[2501, 2502], "disallowed"], [[2503, 2504], "valid"], [[2505, 2506], "disallowed"], [[2507, 2509], "valid"], [[2510, 2510], "valid"], [[2511, 2518], "disallowed"], [[2519, 2519], "valid"], [[2520, 2523], "disallowed"], [[2524, 2524], "mapped", [2465, 2492]], [[2525, 2525], "mapped", [2466, 2492]], [[2526, 2526], "disallowed"], [[2527, 2527], "mapped", [2479, 2492]], [[2528, 2531], "valid"], [[2532, 2533], "disallowed"], [[2534, 2545], "valid"], [[2546, 2554], "valid", [], "NV8"], [[2555, 2555], "valid", [], "NV8"], [[2556, 2560], "disallowed"], [[2561, 2561], "valid"], [[2562, 2562], "valid"], [[2563, 2563], "valid"], [[2564, 2564], "disallowed"], [[2565, 2570], "valid"], [[2571, 2574], "disallowed"], [[2575, 2576], "valid"], [[2577, 2578], "disallowed"], [[2579, 2600], "valid"], [[2601, 2601], "disallowed"], [[2602, 2608], "valid"], [[2609, 2609], "disallowed"], [[2610, 2610], "valid"], [[2611, 2611], "mapped", [2610, 2620]], [[2612, 2612], "disallowed"], [[2613, 2613], "valid"], [[2614, 2614], "mapped", [2616, 2620]], [[2615, 2615], "disallowed"], [[2616, 2617], "valid"], [[2618, 2619], "disallowed"], [[2620, 2620], "valid"], [[2621, 2621], "disallowed"], [[2622, 2626], "valid"], [[2627, 2630], "disallowed"], [[2631, 2632], "valid"], [[2633, 2634], "disallowed"], [[2635, 2637], "valid"], [[2638, 2640], "disallowed"], [[2641, 2641], "valid"], [[2642, 2648], "disallowed"], [[2649, 2649], "mapped", [2582, 2620]], [[2650, 2650], "mapped", [2583, 2620]], [[2651, 2651], "mapped", [2588, 2620]], [[2652, 2652], "valid"], [[2653, 2653], "disallowed"], [[2654, 2654], "mapped", [2603, 2620]], [[2655, 2661], "disallowed"], [[2662, 2676], "valid"], [[2677, 2677], "valid"], [[2678, 2688], "disallowed"], [[2689, 2691], "valid"], [[2692, 2692], "disallowed"], [[2693, 2699], "valid"], [[2700, 2700], "valid"], [[2701, 2701], "valid"], [[2702, 2702], "disallowed"], [[2703, 2705], "valid"], [[2706, 2706], "disallowed"], [[2707, 2728], "valid"], [[2729, 2729], "disallowed"], [[2730, 2736], "valid"], [[2737, 2737], "disallowed"], [[2738, 2739], "valid"], [[2740, 2740], "disallowed"], [[2741, 2745], "valid"], [[2746, 2747], "disallowed"], [[2748, 2757], "valid"], [[2758, 2758], "disallowed"], [[2759, 2761], "valid"], [[2762, 2762], "disallowed"], [[2763, 2765], "valid"], [[2766, 2767], "disallowed"], [[2768, 2768], "valid"], [[2769, 2783], "disallowed"], [[2784, 2784], "valid"], [[2785, 2787], "valid"], [[2788, 2789], "disallowed"], [[2790, 2799], "valid"], [[2800, 2800], "valid", [], "NV8"], [[2801, 2801], "valid", [], "NV8"], [[2802, 2808], "disallowed"], [[2809, 2809], "valid"], [[2810, 2816], "disallowed"], [[2817, 2819], "valid"], [[2820, 2820], "disallowed"], [[2821, 2828], "valid"], [[2829, 2830], "disallowed"], [[2831, 2832], "valid"], [[2833, 2834], "disallowed"], [[2835, 2856], "valid"], [[2857, 2857], "disallowed"], [[2858, 2864], "valid"], [[2865, 2865], "disallowed"], [[2866, 2867], "valid"], [[2868, 2868], "disallowed"], [[2869, 2869], "valid"], [[2870, 2873], "valid"], [[2874, 2875], "disallowed"], [[2876, 2883], "valid"], [[2884, 2884], "valid"], [[2885, 2886], "disallowed"], [[2887, 2888], "valid"], [[2889, 2890], "disallowed"], [[2891, 2893], "valid"], [[2894, 2901], "disallowed"], [[2902, 2903], "valid"], [[2904, 2907], "disallowed"], [[2908, 2908], "mapped", [2849, 2876]], [[2909, 2909], "mapped", [2850, 2876]], [[2910, 2910], "disallowed"], [[2911, 2913], "valid"], [[2914, 2915], "valid"], [[2916, 2917], "disallowed"], [[2918, 2927], "valid"], [[2928, 2928], "valid", [], "NV8"], [[2929, 2929], "valid"], [[2930, 2935], "valid", [], "NV8"], [[2936, 2945], "disallowed"], [[2946, 2947], "valid"], [[2948, 2948], "disallowed"], [[2949, 2954], "valid"], [[2955, 2957], "disallowed"], [[2958, 2960], "valid"], [[2961, 2961], "disallowed"], [[2962, 2965], "valid"], [[2966, 2968], "disallowed"], [[2969, 2970], "valid"], [[2971, 2971], "disallowed"], [[2972, 2972], "valid"], [[2973, 2973], "disallowed"], [[2974, 2975], "valid"], [[2976, 2978], "disallowed"], [[2979, 2980], "valid"], [[2981, 2983], "disallowed"], [[2984, 2986], "valid"], [[2987, 2989], "disallowed"], [[2990, 2997], "valid"], [[2998, 2998], "valid"], [[2999, 3001], "valid"], [[3002, 3005], "disallowed"], [[3006, 3010], "valid"], [[3011, 3013], "disallowed"], [[3014, 3016], "valid"], [[3017, 3017], "disallowed"], [[3018, 3021], "valid"], [[3022, 3023], "disallowed"], [[3024, 3024], "valid"], [[3025, 3030], "disallowed"], [[3031, 3031], "valid"], [[3032, 3045], "disallowed"], [[3046, 3046], "valid"], [[3047, 3055], "valid"], [[3056, 3058], "valid", [], "NV8"], [[3059, 3066], "valid", [], "NV8"], [[3067, 3071], "disallowed"], [[3072, 3072], "valid"], [[3073, 3075], "valid"], [[3076, 3076], "disallowed"], [[3077, 3084], "valid"], [[3085, 3085], "disallowed"], [[3086, 3088], "valid"], [[3089, 3089], "disallowed"], [[3090, 3112], "valid"], [[3113, 3113], "disallowed"], [[3114, 3123], "valid"], [[3124, 3124], "valid"], [[3125, 3129], "valid"], [[3130, 3132], "disallowed"], [[3133, 3133], "valid"], [[3134, 3140], "valid"], [[3141, 3141], "disallowed"], [[3142, 3144], "valid"], [[3145, 3145], "disallowed"], [[3146, 3149], "valid"], [[3150, 3156], "disallowed"], [[3157, 3158], "valid"], [[3159, 3159], "disallowed"], [[3160, 3161], "valid"], [[3162, 3162], "valid"], [[3163, 3167], "disallowed"], [[3168, 3169], "valid"], [[3170, 3171], "valid"], [[3172, 3173], "disallowed"], [[3174, 3183], "valid"], [[3184, 3191], "disallowed"], [[3192, 3199], "valid", [], "NV8"], [[3200, 3200], "disallowed"], [[3201, 3201], "valid"], [[3202, 3203], "valid"], [[3204, 3204], "disallowed"], [[3205, 3212], "valid"], [[3213, 3213], "disallowed"], [[3214, 3216], "valid"], [[3217, 3217], "disallowed"], [[3218, 3240], "valid"], [[3241, 3241], "disallowed"], [[3242, 3251], "valid"], [[3252, 3252], "disallowed"], [[3253, 3257], "valid"], [[3258, 3259], "disallowed"], [[3260, 3261], "valid"], [[3262, 3268], "valid"], [[3269, 3269], "disallowed"], [[3270, 3272], "valid"], [[3273, 3273], "disallowed"], [[3274, 3277], "valid"], [[3278, 3284], "disallowed"], [[3285, 3286], "valid"], [[3287, 3293], "disallowed"], [[3294, 3294], "valid"], [[3295, 3295], "disallowed"], [[3296, 3297], "valid"], [[3298, 3299], "valid"], [[3300, 3301], "disallowed"], [[3302, 3311], "valid"], [[3312, 3312], "disallowed"], [[3313, 3314], "valid"], [[3315, 3328], "disallowed"], [[3329, 3329], "valid"], [[3330, 3331], "valid"], [[3332, 3332], "disallowed"], [[3333, 3340], "valid"], [[3341, 3341], "disallowed"], [[3342, 3344], "valid"], [[3345, 3345], "disallowed"], [[3346, 3368], "valid"], [[3369, 3369], "valid"], [[3370, 3385], "valid"], [[3386, 3386], "valid"], [[3387, 3388], "disallowed"], [[3389, 3389], "valid"], [[3390, 3395], "valid"], [[3396, 3396], "valid"], [[3397, 3397], "disallowed"], [[3398, 3400], "valid"], [[3401, 3401], "disallowed"], [[3402, 3405], "valid"], [[3406, 3406], "valid"], [[3407, 3414], "disallowed"], [[3415, 3415], "valid"], [[3416, 3422], "disallowed"], [[3423, 3423], "valid"], [[3424, 3425], "valid"], [[3426, 3427], "valid"], [[3428, 3429], "disallowed"], [[3430, 3439], "valid"], [[3440, 3445], "valid", [], "NV8"], [[3446, 3448], "disallowed"], [[3449, 3449], "valid", [], "NV8"], [[3450, 3455], "valid"], [[3456, 3457], "disallowed"], [[3458, 3459], "valid"], [[3460, 3460], "disallowed"], [[3461, 3478], "valid"], [[3479, 3481], "disallowed"], [[3482, 3505], "valid"], [[3506, 3506], "disallowed"], [[3507, 3515], "valid"], [[3516, 3516], "disallowed"], [[3517, 3517], "valid"], [[3518, 3519], "disallowed"], [[3520, 3526], "valid"], [[3527, 3529], "disallowed"], [[3530, 3530], "valid"], [[3531, 3534], "disallowed"], [[3535, 3540], "valid"], [[3541, 3541], "disallowed"], [[3542, 3542], "valid"], [[3543, 3543], "disallowed"], [[3544, 3551], "valid"], [[3552, 3557], "disallowed"], [[3558, 3567], "valid"], [[3568, 3569], "disallowed"], [[3570, 3571], "valid"], [[3572, 3572], "valid", [], "NV8"], [[3573, 3584], "disallowed"], [[3585, 3634], "valid"], [[3635, 3635], "mapped", [3661, 3634]], [[3636, 3642], "valid"], [[3643, 3646], "disallowed"], [[3647, 3647], "valid", [], "NV8"], [[3648, 3662], "valid"], [[3663, 3663], "valid", [], "NV8"], [[3664, 3673], "valid"], [[3674, 3675], "valid", [], "NV8"], [[3676, 3712], "disallowed"], [[3713, 3714], "valid"], [[3715, 3715], "disallowed"], [[3716, 3716], "valid"], [[3717, 3718], "disallowed"], [[3719, 3720], "valid"], [[3721, 3721], "disallowed"], [[3722, 3722], "valid"], [[3723, 3724], "disallowed"], [[3725, 3725], "valid"], [[3726, 3731], "disallowed"], [[3732, 3735], "valid"], [[3736, 3736], "disallowed"], [[3737, 3743], "valid"], [[3744, 3744], "disallowed"], [[3745, 3747], "valid"], [[3748, 3748], "disallowed"], [[3749, 3749], "valid"], [[3750, 3750], "disallowed"], [[3751, 3751], "valid"], [[3752, 3753], "disallowed"], [[3754, 3755], "valid"], [[3756, 3756], "disallowed"], [[3757, 3762], "valid"], [[3763, 3763], "mapped", [3789, 3762]], [[3764, 3769], "valid"], [[3770, 3770], "disallowed"], [[3771, 3773], "valid"], [[3774, 3775], "disallowed"], [[3776, 3780], "valid"], [[3781, 3781], "disallowed"], [[3782, 3782], "valid"], [[3783, 3783], "disallowed"], [[3784, 3789], "valid"], [[3790, 3791], "disallowed"], [[3792, 3801], "valid"], [[3802, 3803], "disallowed"], [[3804, 3804], "mapped", [3755, 3737]], [[3805, 3805], "mapped", [3755, 3745]], [[3806, 3807], "valid"], [[3808, 3839], "disallowed"], [[3840, 3840], "valid"], [[3841, 3850], "valid", [], "NV8"], [[3851, 3851], "valid"], [[3852, 3852], "mapped", [3851]], [[3853, 3863], "valid", [], "NV8"], [[3864, 3865], "valid"], [[3866, 3871], "valid", [], "NV8"], [[3872, 3881], "valid"], [[3882, 3892], "valid", [], "NV8"], [[3893, 3893], "valid"], [[3894, 3894], "valid", [], "NV8"], [[3895, 3895], "valid"], [[3896, 3896], "valid", [], "NV8"], [[3897, 3897], "valid"], [[3898, 3901], "valid", [], "NV8"], [[3902, 3906], "valid"], [[3907, 3907], "mapped", [3906, 4023]], [[3908, 3911], "valid"], [[3912, 3912], "disallowed"], [[3913, 3916], "valid"], [[3917, 3917], "mapped", [3916, 4023]], [[3918, 3921], "valid"], [[3922, 3922], "mapped", [3921, 4023]], [[3923, 3926], "valid"], [[3927, 3927], "mapped", [3926, 4023]], [[3928, 3931], "valid"], [[3932, 3932], "mapped", [3931, 4023]], [[3933, 3944], "valid"], [[3945, 3945], "mapped", [3904, 4021]], [[3946, 3946], "valid"], [[3947, 3948], "valid"], [[3949, 3952], "disallowed"], [[3953, 3954], "valid"], [[3955, 3955], "mapped", [3953, 3954]], [[3956, 3956], "valid"], [[3957, 3957], "mapped", [3953, 3956]], [[3958, 3958], "mapped", [4018, 3968]], [[3959, 3959], "mapped", [4018, 3953, 3968]], [[3960, 3960], "mapped", [4019, 3968]], [[3961, 3961], "mapped", [4019, 3953, 3968]], [[3962, 3968], "valid"], [[3969, 3969], "mapped", [3953, 3968]], [[3970, 3972], "valid"], [[3973, 3973], "valid", [], "NV8"], [[3974, 3979], "valid"], [[3980, 3983], "valid"], [[3984, 3986], "valid"], [[3987, 3987], "mapped", [3986, 4023]], [[3988, 3989], "valid"], [[3990, 3990], "valid"], [[3991, 3991], "valid"], [[3992, 3992], "disallowed"], [[3993, 3996], "valid"], [[3997, 3997], "mapped", [3996, 4023]], [[3998, 4001], "valid"], [[4002, 4002], "mapped", [4001, 4023]], [[4003, 4006], "valid"], [[4007, 4007], "mapped", [4006, 4023]], [[4008, 4011], "valid"], [[4012, 4012], "mapped", [4011, 4023]], [[4013, 4013], "valid"], [[4014, 4016], "valid"], [[4017, 4023], "valid"], [[4024, 4024], "valid"], [[4025, 4025], "mapped", [3984, 4021]], [[4026, 4028], "valid"], [[4029, 4029], "disallowed"], [[4030, 4037], "valid", [], "NV8"], [[4038, 4038], "valid"], [[4039, 4044], "valid", [], "NV8"], [[4045, 4045], "disallowed"], [[4046, 4046], "valid", [], "NV8"], [[4047, 4047], "valid", [], "NV8"], [[4048, 4049], "valid", [], "NV8"], [[4050, 4052], "valid", [], "NV8"], [[4053, 4056], "valid", [], "NV8"], [[4057, 4058], "valid", [], "NV8"], [[4059, 4095], "disallowed"], [[4096, 4129], "valid"], [[4130, 4130], "valid"], [[4131, 4135], "valid"], [[4136, 4136], "valid"], [[4137, 4138], "valid"], [[4139, 4139], "valid"], [[4140, 4146], "valid"], [[4147, 4149], "valid"], [[4150, 4153], "valid"], [[4154, 4159], "valid"], [[4160, 4169], "valid"], [[4170, 4175], "valid", [], "NV8"], [[4176, 4185], "valid"], [[4186, 4249], "valid"], [[4250, 4253], "valid"], [[4254, 4255], "valid", [], "NV8"], [[4256, 4293], "disallowed"], [[4294, 4294], "disallowed"], [[4295, 4295], "mapped", [11559]], [[4296, 4300], "disallowed"], [[4301, 4301], "mapped", [11565]], [[4302, 4303], "disallowed"], [[4304, 4342], "valid"], [[4343, 4344], "valid"], [[4345, 4346], "valid"], [[4347, 4347], "valid", [], "NV8"], [[4348, 4348], "mapped", [4316]], [[4349, 4351], "valid"], [[4352, 4441], "valid", [], "NV8"], [[4442, 4446], "valid", [], "NV8"], [[4447, 4448], "disallowed"], [[4449, 4514], "valid", [], "NV8"], [[4515, 4519], "valid", [], "NV8"], [[4520, 4601], "valid", [], "NV8"], [[4602, 4607], "valid", [], "NV8"], [[4608, 4614], "valid"], [[4615, 4615], "valid"], [[4616, 4678], "valid"], [[4679, 4679], "valid"], [[4680, 4680], "valid"], [[4681, 4681], "disallowed"], [[4682, 4685], "valid"], [[4686, 4687], "disallowed"], [[4688, 4694], "valid"], [[4695, 4695], "disallowed"], [[4696, 4696], "valid"], [[4697, 4697], "disallowed"], [[4698, 4701], "valid"], [[4702, 4703], "disallowed"], [[4704, 4742], "valid"], [[4743, 4743], "valid"], [[4744, 4744], "valid"], [[4745, 4745], "disallowed"], [[4746, 4749], "valid"], [[4750, 4751], "disallowed"], [[4752, 4782], "valid"], [[4783, 4783], "valid"], [[4784, 4784], "valid"], [[4785, 4785], "disallowed"], [[4786, 4789], "valid"], [[4790, 4791], "disallowed"], [[4792, 4798], "valid"], [[4799, 4799], "disallowed"], [[4800, 4800], "valid"], [[4801, 4801], "disallowed"], [[4802, 4805], "valid"], [[4806, 4807], "disallowed"], [[4808, 4814], "valid"], [[4815, 4815], "valid"], [[4816, 4822], "valid"], [[4823, 4823], "disallowed"], [[4824, 4846], "valid"], [[4847, 4847], "valid"], [[4848, 4878], "valid"], [[4879, 4879], "valid"], [[4880, 4880], "valid"], [[4881, 4881], "disallowed"], [[4882, 4885], "valid"], [[4886, 4887], "disallowed"], [[4888, 4894], "valid"], [[4895, 4895], "valid"], [[4896, 4934], "valid"], [[4935, 4935], "valid"], [[4936, 4954], "valid"], [[4955, 4956], "disallowed"], [[4957, 4958], "valid"], [[4959, 4959], "valid"], [[4960, 4960], "valid", [], "NV8"], [[4961, 4988], "valid", [], "NV8"], [[4989, 4991], "disallowed"], [[4992, 5007], "valid"], [[5008, 5017], "valid", [], "NV8"], [[5018, 5023], "disallowed"], [[5024, 5108], "valid"], [[5109, 5109], "valid"], [[5110, 5111], "disallowed"], [[5112, 5112], "mapped", [5104]], [[5113, 5113], "mapped", [5105]], [[5114, 5114], "mapped", [5106]], [[5115, 5115], "mapped", [5107]], [[5116, 5116], "mapped", [5108]], [[5117, 5117], "mapped", [5109]], [[5118, 5119], "disallowed"], [[5120, 5120], "valid", [], "NV8"], [[5121, 5740], "valid"], [[5741, 5742], "valid", [], "NV8"], [[5743, 5750], "valid"], [[5751, 5759], "valid"], [[5760, 5760], "disallowed"], [[5761, 5786], "valid"], [[5787, 5788], "valid", [], "NV8"], [[5789, 5791], "disallowed"], [[5792, 5866], "valid"], [[5867, 5872], "valid", [], "NV8"], [[5873, 5880], "valid"], [[5881, 5887], "disallowed"], [[5888, 5900], "valid"], [[5901, 5901], "disallowed"], [[5902, 5908], "valid"], [[5909, 5919], "disallowed"], [[5920, 5940], "valid"], [[5941, 5942], "valid", [], "NV8"], [[5943, 5951], "disallowed"], [[5952, 5971], "valid"], [[5972, 5983], "disallowed"], [[5984, 5996], "valid"], [[5997, 5997], "disallowed"], [[5998, 6e3], "valid"], [[6001, 6001], "disallowed"], [[6002, 6003], "valid"], [[6004, 6015], "disallowed"], [[6016, 6067], "valid"], [[6068, 6069], "disallowed"], [[6070, 6099], "valid"], [[6100, 6102], "valid", [], "NV8"], [[6103, 6103], "valid"], [[6104, 6107], "valid", [], "NV8"], [[6108, 6108], "valid"], [[6109, 6109], "valid"], [[6110, 6111], "disallowed"], [[6112, 6121], "valid"], [[6122, 6127], "disallowed"], [[6128, 6137], "valid", [], "NV8"], [[6138, 6143], "disallowed"], [[6144, 6149], "valid", [], "NV8"], [[6150, 6150], "disallowed"], [[6151, 6154], "valid", [], "NV8"], [[6155, 6157], "ignored"], [[6158, 6158], "disallowed"], [[6159, 6159], "disallowed"], [[6160, 6169], "valid"], [[6170, 6175], "disallowed"], [[6176, 6263], "valid"], [[6264, 6271], "disallowed"], [[6272, 6313], "valid"], [[6314, 6314], "valid"], [[6315, 6319], "disallowed"], [[6320, 6389], "valid"], [[6390, 6399], "disallowed"], [[6400, 6428], "valid"], [[6429, 6430], "valid"], [[6431, 6431], "disallowed"], [[6432, 6443], "valid"], [[6444, 6447], "disallowed"], [[6448, 6459], "valid"], [[6460, 6463], "disallowed"], [[6464, 6464], "valid", [], "NV8"], [[6465, 6467], "disallowed"], [[6468, 6469], "valid", [], "NV8"], [[6470, 6509], "valid"], [[6510, 6511], "disallowed"], [[6512, 6516], "valid"], [[6517, 6527], "disallowed"], [[6528, 6569], "valid"], [[6570, 6571], "valid"], [[6572, 6575], "disallowed"], [[6576, 6601], "valid"], [[6602, 6607], "disallowed"], [[6608, 6617], "valid"], [[6618, 6618], "valid", [], "XV8"], [[6619, 6621], "disallowed"], [[6622, 6623], "valid", [], "NV8"], [[6624, 6655], "valid", [], "NV8"], [[6656, 6683], "valid"], [[6684, 6685], "disallowed"], [[6686, 6687], "valid", [], "NV8"], [[6688, 6750], "valid"], [[6751, 6751], "disallowed"], [[6752, 6780], "valid"], [[6781, 6782], "disallowed"], [[6783, 6793], "valid"], [[6794, 6799], "disallowed"], [[6800, 6809], "valid"], [[6810, 6815], "disallowed"], [[6816, 6822], "valid", [], "NV8"], [[6823, 6823], "valid"], [[6824, 6829], "valid", [], "NV8"], [[6830, 6831], "disallowed"], [[6832, 6845], "valid"], [[6846, 6846], "valid", [], "NV8"], [[6847, 6911], "disallowed"], [[6912, 6987], "valid"], [[6988, 6991], "disallowed"], [[6992, 7001], "valid"], [[7002, 7018], "valid", [], "NV8"], [[7019, 7027], "valid"], [[7028, 7036], "valid", [], "NV8"], [[7037, 7039], "disallowed"], [[7040, 7082], "valid"], [[7083, 7085], "valid"], [[7086, 7097], "valid"], [[7098, 7103], "valid"], [[7104, 7155], "valid"], [[7156, 7163], "disallowed"], [[7164, 7167], "valid", [], "NV8"], [[7168, 7223], "valid"], [[7224, 7226], "disallowed"], [[7227, 7231], "valid", [], "NV8"], [[7232, 7241], "valid"], [[7242, 7244], "disallowed"], [[7245, 7293], "valid"], [[7294, 7295], "valid", [], "NV8"], [[7296, 7359], "disallowed"], [[7360, 7367], "valid", [], "NV8"], [[7368, 7375], "disallowed"], [[7376, 7378], "valid"], [[7379, 7379], "valid", [], "NV8"], [[7380, 7410], "valid"], [[7411, 7414], "valid"], [[7415, 7415], "disallowed"], [[7416, 7417], "valid"], [[7418, 7423], "disallowed"], [[7424, 7467], "valid"], [[7468, 7468], "mapped", [97]], [[7469, 7469], "mapped", [230]], [[7470, 7470], "mapped", [98]], [[7471, 7471], "valid"], [[7472, 7472], "mapped", [100]], [[7473, 7473], "mapped", [101]], [[7474, 7474], "mapped", [477]], [[7475, 7475], "mapped", [103]], [[7476, 7476], "mapped", [104]], [[7477, 7477], "mapped", [105]], [[7478, 7478], "mapped", [106]], [[7479, 7479], "mapped", [107]], [[7480, 7480], "mapped", [108]], [[7481, 7481], "mapped", [109]], [[7482, 7482], "mapped", [110]], [[7483, 7483], "valid"], [[7484, 7484], "mapped", [111]], [[7485, 7485], "mapped", [547]], [[7486, 7486], "mapped", [112]], [[7487, 7487], "mapped", [114]], [[7488, 7488], "mapped", [116]], [[7489, 7489], "mapped", [117]], [[7490, 7490], "mapped", [119]], [[7491, 7491], "mapped", [97]], [[7492, 7492], "mapped", [592]], [[7493, 7493], "mapped", [593]], [[7494, 7494], "mapped", [7426]], [[7495, 7495], "mapped", [98]], [[7496, 7496], "mapped", [100]], [[7497, 7497], "mapped", [101]], [[7498, 7498], "mapped", [601]], [[7499, 7499], "mapped", [603]], [[7500, 7500], "mapped", [604]], [[7501, 7501], "mapped", [103]], [[7502, 7502], "valid"], [[7503, 7503], "mapped", [107]], [[7504, 7504], "mapped", [109]], [[7505, 7505], "mapped", [331]], [[7506, 7506], "mapped", [111]], [[7507, 7507], "mapped", [596]], [[7508, 7508], "mapped", [7446]], [[7509, 7509], "mapped", [7447]], [[7510, 7510], "mapped", [112]], [[7511, 7511], "mapped", [116]], [[7512, 7512], "mapped", [117]], [[7513, 7513], "mapped", [7453]], [[7514, 7514], "mapped", [623]], [[7515, 7515], "mapped", [118]], [[7516, 7516], "mapped", [7461]], [[7517, 7517], "mapped", [946]], [[7518, 7518], "mapped", [947]], [[7519, 7519], "mapped", [948]], [[7520, 7520], "mapped", [966]], [[7521, 7521], "mapped", [967]], [[7522, 7522], "mapped", [105]], [[7523, 7523], "mapped", [114]], [[7524, 7524], "mapped", [117]], [[7525, 7525], "mapped", [118]], [[7526, 7526], "mapped", [946]], [[7527, 7527], "mapped", [947]], [[7528, 7528], "mapped", [961]], [[7529, 7529], "mapped", [966]], [[7530, 7530], "mapped", [967]], [[7531, 7531], "valid"], [[7532, 7543], "valid"], [[7544, 7544], "mapped", [1085]], [[7545, 7578], "valid"], [[7579, 7579], "mapped", [594]], [[7580, 7580], "mapped", [99]], [[7581, 7581], "mapped", [597]], [[7582, 7582], "mapped", [240]], [[7583, 7583], "mapped", [604]], [[7584, 7584], "mapped", [102]], [[7585, 7585], "mapped", [607]], [[7586, 7586], "mapped", [609]], [[7587, 7587], "mapped", [613]], [[7588, 7588], "mapped", [616]], [[7589, 7589], "mapped", [617]], [[7590, 7590], "mapped", [618]], [[7591, 7591], "mapped", [7547]], [[7592, 7592], "mapped", [669]], [[7593, 7593], "mapped", [621]], [[7594, 7594], "mapped", [7557]], [[7595, 7595], "mapped", [671]], [[7596, 7596], "mapped", [625]], [[7597, 7597], "mapped", [624]], [[7598, 7598], "mapped", [626]], [[7599, 7599], "mapped", [627]], [[7600, 7600], "mapped", [628]], [[7601, 7601], "mapped", [629]], [[7602, 7602], "mapped", [632]], [[7603, 7603], "mapped", [642]], [[7604, 7604], "mapped", [643]], [[7605, 7605], "mapped", [427]], [[7606, 7606], "mapped", [649]], [[7607, 7607], "mapped", [650]], [[7608, 7608], "mapped", [7452]], [[7609, 7609], "mapped", [651]], [[7610, 7610], "mapped", [652]], [[7611, 7611], "mapped", [122]], [[7612, 7612], "mapped", [656]], [[7613, 7613], "mapped", [657]], [[7614, 7614], "mapped", [658]], [[7615, 7615], "mapped", [952]], [[7616, 7619], "valid"], [[7620, 7626], "valid"], [[7627, 7654], "valid"], [[7655, 7669], "valid"], [[7670, 7675], "disallowed"], [[7676, 7676], "valid"], [[7677, 7677], "valid"], [[7678, 7679], "valid"], [[7680, 7680], "mapped", [7681]], [[7681, 7681], "valid"], [[7682, 7682], "mapped", [7683]], [[7683, 7683], "valid"], [[7684, 7684], "mapped", [7685]], [[7685, 7685], "valid"], [[7686, 7686], "mapped", [7687]], [[7687, 7687], "valid"], [[7688, 7688], "mapped", [7689]], [[7689, 7689], "valid"], [[7690, 7690], "mapped", [7691]], [[7691, 7691], "valid"], [[7692, 7692], "mapped", [7693]], [[7693, 7693], "valid"], [[7694, 7694], "mapped", [7695]], [[7695, 7695], "valid"], [[7696, 7696], "mapped", [7697]], [[7697, 7697], "valid"], [[7698, 7698], "mapped", [7699]], [[7699, 7699], "valid"], [[7700, 7700], "mapped", [7701]], [[7701, 7701], "valid"], [[7702, 7702], "mapped", [7703]], [[7703, 7703], "valid"], [[7704, 7704], "mapped", [7705]], [[7705, 7705], "valid"], [[7706, 7706], "mapped", [7707]], [[7707, 7707], "valid"], [[7708, 7708], "mapped", [7709]], [[7709, 7709], "valid"], [[7710, 7710], "mapped", [7711]], [[7711, 7711], "valid"], [[7712, 7712], "mapped", [7713]], [[7713, 7713], "valid"], [[7714, 7714], "mapped", [7715]], [[7715, 7715], "valid"], [[7716, 7716], "mapped", [7717]], [[7717, 7717], "valid"], [[7718, 7718], "mapped", [7719]], [[7719, 7719], "valid"], [[7720, 7720], "mapped", [7721]], [[7721, 7721], "valid"], [[7722, 7722], "mapped", [7723]], [[7723, 7723], "valid"], [[7724, 7724], "mapped", [7725]], [[7725, 7725], "valid"], [[7726, 7726], "mapped", [7727]], [[7727, 7727], "valid"], [[7728, 7728], "mapped", [7729]], [[7729, 7729], "valid"], [[7730, 7730], "mapped", [7731]], [[7731, 7731], "valid"], [[7732, 7732], "mapped", [7733]], [[7733, 7733], "valid"], [[7734, 7734], "mapped", [7735]], [[7735, 7735], "valid"], [[7736, 7736], "mapped", [7737]], [[7737, 7737], "valid"], [[7738, 7738], "mapped", [7739]], [[7739, 7739], "valid"], [[7740, 7740], "mapped", [7741]], [[7741, 7741], "valid"], [[7742, 7742], "mapped", [7743]], [[7743, 7743], "valid"], [[7744, 7744], "mapped", [7745]], [[7745, 7745], "valid"], [[7746, 7746], "mapped", [7747]], [[7747, 7747], "valid"], [[7748, 7748], "mapped", [7749]], [[7749, 7749], "valid"], [[7750, 7750], "mapped", [7751]], [[7751, 7751], "valid"], [[7752, 7752], "mapped", [7753]], [[7753, 7753], "valid"], [[7754, 7754], "mapped", [7755]], [[7755, 7755], "valid"], [[7756, 7756], "mapped", [7757]], [[7757, 7757], "valid"], [[7758, 7758], "mapped", [7759]], [[7759, 7759], "valid"], [[7760, 7760], "mapped", [7761]], [[7761, 7761], "valid"], [[7762, 7762], "mapped", [7763]], [[7763, 7763], "valid"], [[7764, 7764], "mapped", [7765]], [[7765, 7765], "valid"], [[7766, 7766], "mapped", [7767]], [[7767, 7767], "valid"], [[7768, 7768], "mapped", [7769]], [[7769, 7769], "valid"], [[7770, 7770], "mapped", [7771]], [[7771, 7771], "valid"], [[7772, 7772], "mapped", [7773]], [[7773, 7773], "valid"], [[7774, 7774], "mapped", [7775]], [[7775, 7775], "valid"], [[7776, 7776], "mapped", [7777]], [[7777, 7777], "valid"], [[7778, 7778], "mapped", [7779]], [[7779, 7779], "valid"], [[7780, 7780], "mapped", [7781]], [[7781, 7781], "valid"], [[7782, 7782], "mapped", [7783]], [[7783, 7783], "valid"], [[7784, 7784], "mapped", [7785]], [[7785, 7785], "valid"], [[7786, 7786], "mapped", [7787]], [[7787, 7787], "valid"], [[7788, 7788], "mapped", [7789]], [[7789, 7789], "valid"], [[7790, 7790], "mapped", [7791]], [[7791, 7791], "valid"], [[7792, 7792], "mapped", [7793]], [[7793, 7793], "valid"], [[7794, 7794], "mapped", [7795]], [[7795, 7795], "valid"], [[7796, 7796], "mapped", [7797]], [[7797, 7797], "valid"], [[7798, 7798], "mapped", [7799]], [[7799, 7799], "valid"], [[7800, 7800], "mapped", [7801]], [[7801, 7801], "valid"], [[7802, 7802], "mapped", [7803]], [[7803, 7803], "valid"], [[7804, 7804], "mapped", [7805]], [[7805, 7805], "valid"], [[7806, 7806], "mapped", [7807]], [[7807, 7807], "valid"], [[7808, 7808], "mapped", [7809]], [[7809, 7809], "valid"], [[7810, 7810], "mapped", [7811]], [[7811, 7811], "valid"], [[7812, 7812], "mapped", [7813]], [[7813, 7813], "valid"], [[7814, 7814], "mapped", [7815]], [[7815, 7815], "valid"], [[7816, 7816], "mapped", [7817]], [[7817, 7817], "valid"], [[7818, 7818], "mapped", [7819]], [[7819, 7819], "valid"], [[7820, 7820], "mapped", [7821]], [[7821, 7821], "valid"], [[7822, 7822], "mapped", [7823]], [[7823, 7823], "valid"], [[7824, 7824], "mapped", [7825]], [[7825, 7825], "valid"], [[7826, 7826], "mapped", [7827]], [[7827, 7827], "valid"], [[7828, 7828], "mapped", [7829]], [[7829, 7833], "valid"], [[7834, 7834], "mapped", [97, 702]], [[7835, 7835], "mapped", [7777]], [[7836, 7837], "valid"], [[7838, 7838], "mapped", [115, 115]], [[7839, 7839], "valid"], [[7840, 7840], "mapped", [7841]], [[7841, 7841], "valid"], [[7842, 7842], "mapped", [7843]], [[7843, 7843], "valid"], [[7844, 7844], "mapped", [7845]], [[7845, 7845], "valid"], [[7846, 7846], "mapped", [7847]], [[7847, 7847], "valid"], [[7848, 7848], "mapped", [7849]], [[7849, 7849], "valid"], [[7850, 7850], "mapped", [7851]], [[7851, 7851], "valid"], [[7852, 7852], "mapped", [7853]], [[7853, 7853], "valid"], [[7854, 7854], "mapped", [7855]], [[7855, 7855], "valid"], [[7856, 7856], "mapped", [7857]], [[7857, 7857], "valid"], [[7858, 7858], "mapped", [7859]], [[7859, 7859], "valid"], [[7860, 7860], "mapped", [7861]], [[7861, 7861], "valid"], [[7862, 7862], "mapped", [7863]], [[7863, 7863], "valid"], [[7864, 7864], "mapped", [7865]], [[7865, 7865], "valid"], [[7866, 7866], "mapped", [7867]], [[7867, 7867], "valid"], [[7868, 7868], "mapped", [7869]], [[7869, 7869], "valid"], [[7870, 7870], "mapped", [7871]], [[7871, 7871], "valid"], [[7872, 7872], "mapped", [7873]], [[7873, 7873], "valid"], [[7874, 7874], "mapped", [7875]], [[7875, 7875], "valid"], [[7876, 7876], "mapped", [7877]], [[7877, 7877], "valid"], [[7878, 7878], "mapped", [7879]], [[7879, 7879], "valid"], [[7880, 7880], "mapped", [7881]], [[7881, 7881], "valid"], [[7882, 7882], "mapped", [7883]], [[7883, 7883], "valid"], [[7884, 7884], "mapped", [7885]], [[7885, 7885], "valid"], [[7886, 7886], "mapped", [7887]], [[7887, 7887], "valid"], [[7888, 7888], "mapped", [7889]], [[7889, 7889], "valid"], [[7890, 7890], "mapped", [7891]], [[7891, 7891], "valid"], [[7892, 7892], "mapped", [7893]], [[7893, 7893], "valid"], [[7894, 7894], "mapped", [7895]], [[7895, 7895], "valid"], [[7896, 7896], "mapped", [7897]], [[7897, 7897], "valid"], [[7898, 7898], "mapped", [7899]], [[7899, 7899], "valid"], [[7900, 7900], "mapped", [7901]], [[7901, 7901], "valid"], [[7902, 7902], "mapped", [7903]], [[7903, 7903], "valid"], [[7904, 7904], "mapped", [7905]], [[7905, 7905], "valid"], [[7906, 7906], "mapped", [7907]], [[7907, 7907], "valid"], [[7908, 7908], "mapped", [7909]], [[7909, 7909], "valid"], [[7910, 7910], "mapped", [7911]], [[7911, 7911], "valid"], [[7912, 7912], "mapped", [7913]], [[7913, 7913], "valid"], [[7914, 7914], "mapped", [7915]], [[7915, 7915], "valid"], [[7916, 7916], "mapped", [7917]], [[7917, 7917], "valid"], [[7918, 7918], "mapped", [7919]], [[7919, 7919], "valid"], [[7920, 7920], "mapped", [7921]], [[7921, 7921], "valid"], [[7922, 7922], "mapped", [7923]], [[7923, 7923], "valid"], [[7924, 7924], "mapped", [7925]], [[7925, 7925], "valid"], [[7926, 7926], "mapped", [7927]], [[7927, 7927], "valid"], [[7928, 7928], "mapped", [7929]], [[7929, 7929], "valid"], [[7930, 7930], "mapped", [7931]], [[7931, 7931], "valid"], [[7932, 7932], "mapped", [7933]], [[7933, 7933], "valid"], [[7934, 7934], "mapped", [7935]], [[7935, 7935], "valid"], [[7936, 7943], "valid"], [[7944, 7944], "mapped", [7936]], [[7945, 7945], "mapped", [7937]], [[7946, 7946], "mapped", [7938]], [[7947, 7947], "mapped", [7939]], [[7948, 7948], "mapped", [7940]], [[7949, 7949], "mapped", [7941]], [[7950, 7950], "mapped", [7942]], [[7951, 7951], "mapped", [7943]], [[7952, 7957], "valid"], [[7958, 7959], "disallowed"], [[7960, 7960], "mapped", [7952]], [[7961, 7961], "mapped", [7953]], [[7962, 7962], "mapped", [7954]], [[7963, 7963], "mapped", [7955]], [[7964, 7964], "mapped", [7956]], [[7965, 7965], "mapped", [7957]], [[7966, 7967], "disallowed"], [[7968, 7975], "valid"], [[7976, 7976], "mapped", [7968]], [[7977, 7977], "mapped", [7969]], [[7978, 7978], "mapped", [7970]], [[7979, 7979], "mapped", [7971]], [[7980, 7980], "mapped", [7972]], [[7981, 7981], "mapped", [7973]], [[7982, 7982], "mapped", [7974]], [[7983, 7983], "mapped", [7975]], [[7984, 7991], "valid"], [[7992, 7992], "mapped", [7984]], [[7993, 7993], "mapped", [7985]], [[7994, 7994], "mapped", [7986]], [[7995, 7995], "mapped", [7987]], [[7996, 7996], "mapped", [7988]], [[7997, 7997], "mapped", [7989]], [[7998, 7998], "mapped", [7990]], [[7999, 7999], "mapped", [7991]], [[8e3, 8005], "valid"], [[8006, 8007], "disallowed"], [[8008, 8008], "mapped", [8e3]], [[8009, 8009], "mapped", [8001]], [[8010, 8010], "mapped", [8002]], [[8011, 8011], "mapped", [8003]], [[8012, 8012], "mapped", [8004]], [[8013, 8013], "mapped", [8005]], [[8014, 8015], "disallowed"], [[8016, 8023], "valid"], [[8024, 8024], "disallowed"], [[8025, 8025], "mapped", [8017]], [[8026, 8026], "disallowed"], [[8027, 8027], "mapped", [8019]], [[8028, 8028], "disallowed"], [[8029, 8029], "mapped", [8021]], [[8030, 8030], "disallowed"], [[8031, 8031], "mapped", [8023]], [[8032, 8039], "valid"], [[8040, 8040], "mapped", [8032]], [[8041, 8041], "mapped", [8033]], [[8042, 8042], "mapped", [8034]], [[8043, 8043], "mapped", [8035]], [[8044, 8044], "mapped", [8036]], [[8045, 8045], "mapped", [8037]], [[8046, 8046], "mapped", [8038]], [[8047, 8047], "mapped", [8039]], [[8048, 8048], "valid"], [[8049, 8049], "mapped", [940]], [[8050, 8050], "valid"], [[8051, 8051], "mapped", [941]], [[8052, 8052], "valid"], [[8053, 8053], "mapped", [942]], [[8054, 8054], "valid"], [[8055, 8055], "mapped", [943]], [[8056, 8056], "valid"], [[8057, 8057], "mapped", [972]], [[8058, 8058], "valid"], [[8059, 8059], "mapped", [973]], [[8060, 8060], "valid"], [[8061, 8061], "mapped", [974]], [[8062, 8063], "disallowed"], [[8064, 8064], "mapped", [7936, 953]], [[8065, 8065], "mapped", [7937, 953]], [[8066, 8066], "mapped", [7938, 953]], [[8067, 8067], "mapped", [7939, 953]], [[8068, 8068], "mapped", [7940, 953]], [[8069, 8069], "mapped", [7941, 953]], [[8070, 8070], "mapped", [7942, 953]], [[8071, 8071], "mapped", [7943, 953]], [[8072, 8072], "mapped", [7936, 953]], [[8073, 8073], "mapped", [7937, 953]], [[8074, 8074], "mapped", [7938, 953]], [[8075, 8075], "mapped", [7939, 953]], [[8076, 8076], "mapped", [7940, 953]], [[8077, 8077], "mapped", [7941, 953]], [[8078, 8078], "mapped", [7942, 953]], [[8079, 8079], "mapped", [7943, 953]], [[8080, 8080], "mapped", [7968, 953]], [[8081, 8081], "mapped", [7969, 953]], [[8082, 8082], "mapped", [7970, 953]], [[8083, 8083], "mapped", [7971, 953]], [[8084, 8084], "mapped", [7972, 953]], [[8085, 8085], "mapped", [7973, 953]], [[8086, 8086], "mapped", [7974, 953]], [[8087, 8087], "mapped", [7975, 953]], [[8088, 8088], "mapped", [7968, 953]], [[8089, 8089], "mapped", [7969, 953]], [[8090, 8090], "mapped", [7970, 953]], [[8091, 8091], "mapped", [7971, 953]], [[8092, 8092], "mapped", [7972, 953]], [[8093, 8093], "mapped", [7973, 953]], [[8094, 8094], "mapped", [7974, 953]], [[8095, 8095], "mapped", [7975, 953]], [[8096, 8096], "mapped", [8032, 953]], [[8097, 8097], "mapped", [8033, 953]], [[8098, 8098], "mapped", [8034, 953]], [[8099, 8099], "mapped", [8035, 953]], [[8100, 8100], "mapped", [8036, 953]], [[8101, 8101], "mapped", [8037, 953]], [[8102, 8102], "mapped", [8038, 953]], [[8103, 8103], "mapped", [8039, 953]], [[8104, 8104], "mapped", [8032, 953]], [[8105, 8105], "mapped", [8033, 953]], [[8106, 8106], "mapped", [8034, 953]], [[8107, 8107], "mapped", [8035, 953]], [[8108, 8108], "mapped", [8036, 953]], [[8109, 8109], "mapped", [8037, 953]], [[8110, 8110], "mapped", [8038, 953]], [[8111, 8111], "mapped", [8039, 953]], [[8112, 8113], "valid"], [[8114, 8114], "mapped", [8048, 953]], [[8115, 8115], "mapped", [945, 953]], [[8116, 8116], "mapped", [940, 953]], [[8117, 8117], "disallowed"], [[8118, 8118], "valid"], [[8119, 8119], "mapped", [8118, 953]], [[8120, 8120], "mapped", [8112]], [[8121, 8121], "mapped", [8113]], [[8122, 8122], "mapped", [8048]], [[8123, 8123], "mapped", [940]], [[8124, 8124], "mapped", [945, 953]], [[8125, 8125], "disallowed_STD3_mapped", [32, 787]], [[8126, 8126], "mapped", [953]], [[8127, 8127], "disallowed_STD3_mapped", [32, 787]], [[8128, 8128], "disallowed_STD3_mapped", [32, 834]], [[8129, 8129], "disallowed_STD3_mapped", [32, 776, 834]], [[8130, 8130], "mapped", [8052, 953]], [[8131, 8131], "mapped", [951, 953]], [[8132, 8132], "mapped", [942, 953]], [[8133, 8133], "disallowed"], [[8134, 8134], "valid"], [[8135, 8135], "mapped", [8134, 953]], [[8136, 8136], "mapped", [8050]], [[8137, 8137], "mapped", [941]], [[8138, 8138], "mapped", [8052]], [[8139, 8139], "mapped", [942]], [[8140, 8140], "mapped", [951, 953]], [[8141, 8141], "disallowed_STD3_mapped", [32, 787, 768]], [[8142, 8142], "disallowed_STD3_mapped", [32, 787, 769]], [[8143, 8143], "disallowed_STD3_mapped", [32, 787, 834]], [[8144, 8146], "valid"], [[8147, 8147], "mapped", [912]], [[8148, 8149], "disallowed"], [[8150, 8151], "valid"], [[8152, 8152], "mapped", [8144]], [[8153, 8153], "mapped", [8145]], [[8154, 8154], "mapped", [8054]], [[8155, 8155], "mapped", [943]], [[8156, 8156], "disallowed"], [[8157, 8157], "disallowed_STD3_mapped", [32, 788, 768]], [[8158, 8158], "disallowed_STD3_mapped", [32, 788, 769]], [[8159, 8159], "disallowed_STD3_mapped", [32, 788, 834]], [[8160, 8162], "valid"], [[8163, 8163], "mapped", [944]], [[8164, 8167], "valid"], [[8168, 8168], "mapped", [8160]], [[8169, 8169], "mapped", [8161]], [[8170, 8170], "mapped", [8058]], [[8171, 8171], "mapped", [973]], [[8172, 8172], "mapped", [8165]], [[8173, 8173], "disallowed_STD3_mapped", [32, 776, 768]], [[8174, 8174], "disallowed_STD3_mapped", [32, 776, 769]], [[8175, 8175], "disallowed_STD3_mapped", [96]], [[8176, 8177], "disallowed"], [[8178, 8178], "mapped", [8060, 953]], [[8179, 8179], "mapped", [969, 953]], [[8180, 8180], "mapped", [974, 953]], [[8181, 8181], "disallowed"], [[8182, 8182], "valid"], [[8183, 8183], "mapped", [8182, 953]], [[8184, 8184], "mapped", [8056]], [[8185, 8185], "mapped", [972]], [[8186, 8186], "mapped", [8060]], [[8187, 8187], "mapped", [974]], [[8188, 8188], "mapped", [969, 953]], [[8189, 8189], "disallowed_STD3_mapped", [32, 769]], [[8190, 8190], "disallowed_STD3_mapped", [32, 788]], [[8191, 8191], "disallowed"], [[8192, 8202], "disallowed_STD3_mapped", [32]], [[8203, 8203], "ignored"], [[8204, 8205], "deviation", []], [[8206, 8207], "disallowed"], [[8208, 8208], "valid", [], "NV8"], [[8209, 8209], "mapped", [8208]], [[8210, 8214], "valid", [], "NV8"], [[8215, 8215], "disallowed_STD3_mapped", [32, 819]], [[8216, 8227], "valid", [], "NV8"], [[8228, 8230], "disallowed"], [[8231, 8231], "valid", [], "NV8"], [[8232, 8238], "disallowed"], [[8239, 8239], "disallowed_STD3_mapped", [32]], [[8240, 8242], "valid", [], "NV8"], [[8243, 8243], "mapped", [8242, 8242]], [[8244, 8244], "mapped", [8242, 8242, 8242]], [[8245, 8245], "valid", [], "NV8"], [[8246, 8246], "mapped", [8245, 8245]], [[8247, 8247], "mapped", [8245, 8245, 8245]], [[8248, 8251], "valid", [], "NV8"], [[8252, 8252], "disallowed_STD3_mapped", [33, 33]], [[8253, 8253], "valid", [], "NV8"], [[8254, 8254], "disallowed_STD3_mapped", [32, 773]], [[8255, 8262], "valid", [], "NV8"], [[8263, 8263], "disallowed_STD3_mapped", [63, 63]], [[8264, 8264], "disallowed_STD3_mapped", [63, 33]], [[8265, 8265], "disallowed_STD3_mapped", [33, 63]], [[8266, 8269], "valid", [], "NV8"], [[8270, 8274], "valid", [], "NV8"], [[8275, 8276], "valid", [], "NV8"], [[8277, 8278], "valid", [], "NV8"], [[8279, 8279], "mapped", [8242, 8242, 8242, 8242]], [[8280, 8286], "valid", [], "NV8"], [[8287, 8287], "disallowed_STD3_mapped", [32]], [[8288, 8288], "ignored"], [[8289, 8291], "disallowed"], [[8292, 8292], "ignored"], [[8293, 8293], "disallowed"], [[8294, 8297], "disallowed"], [[8298, 8303], "disallowed"], [[8304, 8304], "mapped", [48]], [[8305, 8305], "mapped", [105]], [[8306, 8307], "disallowed"], [[8308, 8308], "mapped", [52]], [[8309, 8309], "mapped", [53]], [[8310, 8310], "mapped", [54]], [[8311, 8311], "mapped", [55]], [[8312, 8312], "mapped", [56]], [[8313, 8313], "mapped", [57]], [[8314, 8314], "disallowed_STD3_mapped", [43]], [[8315, 8315], "mapped", [8722]], [[8316, 8316], "disallowed_STD3_mapped", [61]], [[8317, 8317], "disallowed_STD3_mapped", [40]], [[8318, 8318], "disallowed_STD3_mapped", [41]], [[8319, 8319], "mapped", [110]], [[8320, 8320], "mapped", [48]], [[8321, 8321], "mapped", [49]], [[8322, 8322], "mapped", [50]], [[8323, 8323], "mapped", [51]], [[8324, 8324], "mapped", [52]], [[8325, 8325], "mapped", [53]], [[8326, 8326], "mapped", [54]], [[8327, 8327], "mapped", [55]], [[8328, 8328], "mapped", [56]], [[8329, 8329], "mapped", [57]], [[8330, 8330], "disallowed_STD3_mapped", [43]], [[8331, 8331], "mapped", [8722]], [[8332, 8332], "disallowed_STD3_mapped", [61]], [[8333, 8333], "disallowed_STD3_mapped", [40]], [[8334, 8334], "disallowed_STD3_mapped", [41]], [[8335, 8335], "disallowed"], [[8336, 8336], "mapped", [97]], [[8337, 8337], "mapped", [101]], [[8338, 8338], "mapped", [111]], [[8339, 8339], "mapped", [120]], [[8340, 8340], "mapped", [601]], [[8341, 8341], "mapped", [104]], [[8342, 8342], "mapped", [107]], [[8343, 8343], "mapped", [108]], [[8344, 8344], "mapped", [109]], [[8345, 8345], "mapped", [110]], [[8346, 8346], "mapped", [112]], [[8347, 8347], "mapped", [115]], [[8348, 8348], "mapped", [116]], [[8349, 8351], "disallowed"], [[8352, 8359], "valid", [], "NV8"], [[8360, 8360], "mapped", [114, 115]], [[8361, 8362], "valid", [], "NV8"], [[8363, 8363], "valid", [], "NV8"], [[8364, 8364], "valid", [], "NV8"], [[8365, 8367], "valid", [], "NV8"], [[8368, 8369], "valid", [], "NV8"], [[8370, 8373], "valid", [], "NV8"], [[8374, 8376], "valid", [], "NV8"], [[8377, 8377], "valid", [], "NV8"], [[8378, 8378], "valid", [], "NV8"], [[8379, 8381], "valid", [], "NV8"], [[8382, 8382], "valid", [], "NV8"], [[8383, 8399], "disallowed"], [[8400, 8417], "valid", [], "NV8"], [[8418, 8419], "valid", [], "NV8"], [[8420, 8426], "valid", [], "NV8"], [[8427, 8427], "valid", [], "NV8"], [[8428, 8431], "valid", [], "NV8"], [[8432, 8432], "valid", [], "NV8"], [[8433, 8447], "disallowed"], [[8448, 8448], "disallowed_STD3_mapped", [97, 47, 99]], [[8449, 8449], "disallowed_STD3_mapped", [97, 47, 115]], [[8450, 8450], "mapped", [99]], [[8451, 8451], "mapped", [176, 99]], [[8452, 8452], "valid", [], "NV8"], [[8453, 8453], "disallowed_STD3_mapped", [99, 47, 111]], [[8454, 8454], "disallowed_STD3_mapped", [99, 47, 117]], [[8455, 8455], "mapped", [603]], [[8456, 8456], "valid", [], "NV8"], [[8457, 8457], "mapped", [176, 102]], [[8458, 8458], "mapped", [103]], [[8459, 8462], "mapped", [104]], [[8463, 8463], "mapped", [295]], [[8464, 8465], "mapped", [105]], [[8466, 8467], "mapped", [108]], [[8468, 8468], "valid", [], "NV8"], [[8469, 8469], "mapped", [110]], [[8470, 8470], "mapped", [110, 111]], [[8471, 8472], "valid", [], "NV8"], [[8473, 8473], "mapped", [112]], [[8474, 8474], "mapped", [113]], [[8475, 8477], "mapped", [114]], [[8478, 8479], "valid", [], "NV8"], [[8480, 8480], "mapped", [115, 109]], [[8481, 8481], "mapped", [116, 101, 108]], [[8482, 8482], "mapped", [116, 109]], [[8483, 8483], "valid", [], "NV8"], [[8484, 8484], "mapped", [122]], [[8485, 8485], "valid", [], "NV8"], [[8486, 8486], "mapped", [969]], [[8487, 8487], "valid", [], "NV8"], [[8488, 8488], "mapped", [122]], [[8489, 8489], "valid", [], "NV8"], [[8490, 8490], "mapped", [107]], [[8491, 8491], "mapped", [229]], [[8492, 8492], "mapped", [98]], [[8493, 8493], "mapped", [99]], [[8494, 8494], "valid", [], "NV8"], [[8495, 8496], "mapped", [101]], [[8497, 8497], "mapped", [102]], [[8498, 8498], "disallowed"], [[8499, 8499], "mapped", [109]], [[8500, 8500], "mapped", [111]], [[8501, 8501], "mapped", [1488]], [[8502, 8502], "mapped", [1489]], [[8503, 8503], "mapped", [1490]], [[8504, 8504], "mapped", [1491]], [[8505, 8505], "mapped", [105]], [[8506, 8506], "valid", [], "NV8"], [[8507, 8507], "mapped", [102, 97, 120]], [[8508, 8508], "mapped", [960]], [[8509, 8510], "mapped", [947]], [[8511, 8511], "mapped", [960]], [[8512, 8512], "mapped", [8721]], [[8513, 8516], "valid", [], "NV8"], [[8517, 8518], "mapped", [100]], [[8519, 8519], "mapped", [101]], [[8520, 8520], "mapped", [105]], [[8521, 8521], "mapped", [106]], [[8522, 8523], "valid", [], "NV8"], [[8524, 8524], "valid", [], "NV8"], [[8525, 8525], "valid", [], "NV8"], [[8526, 8526], "valid"], [[8527, 8527], "valid", [], "NV8"], [[8528, 8528], "mapped", [49, 8260, 55]], [[8529, 8529], "mapped", [49, 8260, 57]], [[8530, 8530], "mapped", [49, 8260, 49, 48]], [[8531, 8531], "mapped", [49, 8260, 51]], [[8532, 8532], "mapped", [50, 8260, 51]], [[8533, 8533], "mapped", [49, 8260, 53]], [[8534, 8534], "mapped", [50, 8260, 53]], [[8535, 8535], "mapped", [51, 8260, 53]], [[8536, 8536], "mapped", [52, 8260, 53]], [[8537, 8537], "mapped", [49, 8260, 54]], [[8538, 8538], "mapped", [53, 8260, 54]], [[8539, 8539], "mapped", [49, 8260, 56]], [[8540, 8540], "mapped", [51, 8260, 56]], [[8541, 8541], "mapped", [53, 8260, 56]], [[8542, 8542], "mapped", [55, 8260, 56]], [[8543, 8543], "mapped", [49, 8260]], [[8544, 8544], "mapped", [105]], [[8545, 8545], "mapped", [105, 105]], [[8546, 8546], "mapped", [105, 105, 105]], [[8547, 8547], "mapped", [105, 118]], [[8548, 8548], "mapped", [118]], [[8549, 8549], "mapped", [118, 105]], [[8550, 8550], "mapped", [118, 105, 105]], [[8551, 8551], "mapped", [118, 105, 105, 105]], [[8552, 8552], "mapped", [105, 120]], [[8553, 8553], "mapped", [120]], [[8554, 8554], "mapped", [120, 105]], [[8555, 8555], "mapped", [120, 105, 105]], [[8556, 8556], "mapped", [108]], [[8557, 8557], "mapped", [99]], [[8558, 8558], "mapped", [100]], [[8559, 8559], "mapped", [109]], [[8560, 8560], "mapped", [105]], [[8561, 8561], "mapped", [105, 105]], [[8562, 8562], "mapped", [105, 105, 105]], [[8563, 8563], "mapped", [105, 118]], [[8564, 8564], "mapped", [118]], [[8565, 8565], "mapped", [118, 105]], [[8566, 8566], "mapped", [118, 105, 105]], [[8567, 8567], "mapped", [118, 105, 105, 105]], [[8568, 8568], "mapped", [105, 120]], [[8569, 8569], "mapped", [120]], [[8570, 8570], "mapped", [120, 105]], [[8571, 8571], "mapped", [120, 105, 105]], [[8572, 8572], "mapped", [108]], [[8573, 8573], "mapped", [99]], [[8574, 8574], "mapped", [100]], [[8575, 8575], "mapped", [109]], [[8576, 8578], "valid", [], "NV8"], [[8579, 8579], "disallowed"], [[8580, 8580], "valid"], [[8581, 8584], "valid", [], "NV8"], [[8585, 8585], "mapped", [48, 8260, 51]], [[8586, 8587], "valid", [], "NV8"], [[8588, 8591], "disallowed"], [[8592, 8682], "valid", [], "NV8"], [[8683, 8691], "valid", [], "NV8"], [[8692, 8703], "valid", [], "NV8"], [[8704, 8747], "valid", [], "NV8"], [[8748, 8748], "mapped", [8747, 8747]], [[8749, 8749], "mapped", [8747, 8747, 8747]], [[8750, 8750], "valid", [], "NV8"], [[8751, 8751], "mapped", [8750, 8750]], [[8752, 8752], "mapped", [8750, 8750, 8750]], [[8753, 8799], "valid", [], "NV8"], [[8800, 8800], "disallowed_STD3_valid"], [[8801, 8813], "valid", [], "NV8"], [[8814, 8815], "disallowed_STD3_valid"], [[8816, 8945], "valid", [], "NV8"], [[8946, 8959], "valid", [], "NV8"], [[8960, 8960], "valid", [], "NV8"], [[8961, 8961], "valid", [], "NV8"], [[8962, 9e3], "valid", [], "NV8"], [[9001, 9001], "mapped", [12296]], [[9002, 9002], "mapped", [12297]], [[9003, 9082], "valid", [], "NV8"], [[9083, 9083], "valid", [], "NV8"], [[9084, 9084], "valid", [], "NV8"], [[9085, 9114], "valid", [], "NV8"], [[9115, 9166], "valid", [], "NV8"], [[9167, 9168], "valid", [], "NV8"], [[9169, 9179], "valid", [], "NV8"], [[9180, 9191], "valid", [], "NV8"], [[9192, 9192], "valid", [], "NV8"], [[9193, 9203], "valid", [], "NV8"], [[9204, 9210], "valid", [], "NV8"], [[9211, 9215], "disallowed"], [[9216, 9252], "valid", [], "NV8"], [[9253, 9254], "valid", [], "NV8"], [[9255, 9279], "disallowed"], [[9280, 9290], "valid", [], "NV8"], [[9291, 9311], "disallowed"], [[9312, 9312], "mapped", [49]], [[9313, 9313], "mapped", [50]], [[9314, 9314], "mapped", [51]], [[9315, 9315], "mapped", [52]], [[9316, 9316], "mapped", [53]], [[9317, 9317], "mapped", [54]], [[9318, 9318], "mapped", [55]], [[9319, 9319], "mapped", [56]], [[9320, 9320], "mapped", [57]], [[9321, 9321], "mapped", [49, 48]], [[9322, 9322], "mapped", [49, 49]], [[9323, 9323], "mapped", [49, 50]], [[9324, 9324], "mapped", [49, 51]], [[9325, 9325], "mapped", [49, 52]], [[9326, 9326], "mapped", [49, 53]], [[9327, 9327], "mapped", [49, 54]], [[9328, 9328], "mapped", [49, 55]], [[9329, 9329], "mapped", [49, 56]], [[9330, 9330], "mapped", [49, 57]], [[9331, 9331], "mapped", [50, 48]], [[9332, 9332], "disallowed_STD3_mapped", [40, 49, 41]], [[9333, 9333], "disallowed_STD3_mapped", [40, 50, 41]], [[9334, 9334], "disallowed_STD3_mapped", [40, 51, 41]], [[9335, 9335], "disallowed_STD3_mapped", [40, 52, 41]], [[9336, 9336], "disallowed_STD3_mapped", [40, 53, 41]], [[9337, 9337], "disallowed_STD3_mapped", [40, 54, 41]], [[9338, 9338], "disallowed_STD3_mapped", [40, 55, 41]], [[9339, 9339], "disallowed_STD3_mapped", [40, 56, 41]], [[9340, 9340], "disallowed_STD3_mapped", [40, 57, 41]], [[9341, 9341], "disallowed_STD3_mapped", [40, 49, 48, 41]], [[9342, 9342], "disallowed_STD3_mapped", [40, 49, 49, 41]], [[9343, 9343], "disallowed_STD3_mapped", [40, 49, 50, 41]], [[9344, 9344], "disallowed_STD3_mapped", [40, 49, 51, 41]], [[9345, 9345], "disallowed_STD3_mapped", [40, 49, 52, 41]], [[9346, 9346], "disallowed_STD3_mapped", [40, 49, 53, 41]], [[9347, 9347], "disallowed_STD3_mapped", [40, 49, 54, 41]], [[9348, 9348], "disallowed_STD3_mapped", [40, 49, 55, 41]], [[9349, 9349], "disallowed_STD3_mapped", [40, 49, 56, 41]], [[9350, 9350], "disallowed_STD3_mapped", [40, 49, 57, 41]], [[9351, 9351], "disallowed_STD3_mapped", [40, 50, 48, 41]], [[9352, 9371], "disallowed"], [[9372, 9372], "disallowed_STD3_mapped", [40, 97, 41]], [[9373, 9373], "disallowed_STD3_mapped", [40, 98, 41]], [[9374, 9374], "disallowed_STD3_mapped", [40, 99, 41]], [[9375, 9375], "disallowed_STD3_mapped", [40, 100, 41]], [[9376, 9376], "disallowed_STD3_mapped", [40, 101, 41]], [[9377, 9377], "disallowed_STD3_mapped", [40, 102, 41]], [[9378, 9378], "disallowed_STD3_mapped", [40, 103, 41]], [[9379, 9379], "disallowed_STD3_mapped", [40, 104, 41]], [[9380, 9380], "disallowed_STD3_mapped", [40, 105, 41]], [[9381, 9381], "disallowed_STD3_mapped", [40, 106, 41]], [[9382, 9382], "disallowed_STD3_mapped", [40, 107, 41]], [[9383, 9383], "disallowed_STD3_mapped", [40, 108, 41]], [[9384, 9384], "disallowed_STD3_mapped", [40, 109, 41]], [[9385, 9385], "disallowed_STD3_mapped", [40, 110, 41]], [[9386, 9386], "disallowed_STD3_mapped", [40, 111, 41]], [[9387, 9387], "disallowed_STD3_mapped", [40, 112, 41]], [[9388, 9388], "disallowed_STD3_mapped", [40, 113, 41]], [[9389, 9389], "disallowed_STD3_mapped", [40, 114, 41]], [[9390, 9390], "disallowed_STD3_mapped", [40, 115, 41]], [[9391, 9391], "disallowed_STD3_mapped", [40, 116, 41]], [[9392, 9392], "disallowed_STD3_mapped", [40, 117, 41]], [[9393, 9393], "disallowed_STD3_mapped", [40, 118, 41]], [[9394, 9394], "disallowed_STD3_mapped", [40, 119, 41]], [[9395, 9395], "disallowed_STD3_mapped", [40, 120, 41]], [[9396, 9396], "disallowed_STD3_mapped", [40, 121, 41]], [[9397, 9397], "disallowed_STD3_mapped", [40, 122, 41]], [[9398, 9398], "mapped", [97]], [[9399, 9399], "mapped", [98]], [[9400, 9400], "mapped", [99]], [[9401, 9401], "mapped", [100]], [[9402, 9402], "mapped", [101]], [[9403, 9403], "mapped", [102]], [[9404, 9404], "mapped", [103]], [[9405, 9405], "mapped", [104]], [[9406, 9406], "mapped", [105]], [[9407, 9407], "mapped", [106]], [[9408, 9408], "mapped", [107]], [[9409, 9409], "mapped", [108]], [[9410, 9410], "mapped", [109]], [[9411, 9411], "mapped", [110]], [[9412, 9412], "mapped", [111]], [[9413, 9413], "mapped", [112]], [[9414, 9414], "mapped", [113]], [[9415, 9415], "mapped", [114]], [[9416, 9416], "mapped", [115]], [[9417, 9417], "mapped", [116]], [[9418, 9418], "mapped", [117]], [[9419, 9419], "mapped", [118]], [[9420, 9420], "mapped", [119]], [[9421, 9421], "mapped", [120]], [[9422, 9422], "mapped", [121]], [[9423, 9423], "mapped", [122]], [[9424, 9424], "mapped", [97]], [[9425, 9425], "mapped", [98]], [[9426, 9426], "mapped", [99]], [[9427, 9427], "mapped", [100]], [[9428, 9428], "mapped", [101]], [[9429, 9429], "mapped", [102]], [[9430, 9430], "mapped", [103]], [[9431, 9431], "mapped", [104]], [[9432, 9432], "mapped", [105]], [[9433, 9433], "mapped", [106]], [[9434, 9434], "mapped", [107]], [[9435, 9435], "mapped", [108]], [[9436, 9436], "mapped", [109]], [[9437, 9437], "mapped", [110]], [[9438, 9438], "mapped", [111]], [[9439, 9439], "mapped", [112]], [[9440, 9440], "mapped", [113]], [[9441, 9441], "mapped", [114]], [[9442, 9442], "mapped", [115]], [[9443, 9443], "mapped", [116]], [[9444, 9444], "mapped", [117]], [[9445, 9445], "mapped", [118]], [[9446, 9446], "mapped", [119]], [[9447, 9447], "mapped", [120]], [[9448, 9448], "mapped", [121]], [[9449, 9449], "mapped", [122]], [[9450, 9450], "mapped", [48]], [[9451, 9470], "valid", [], "NV8"], [[9471, 9471], "valid", [], "NV8"], [[9472, 9621], "valid", [], "NV8"], [[9622, 9631], "valid", [], "NV8"], [[9632, 9711], "valid", [], "NV8"], [[9712, 9719], "valid", [], "NV8"], [[9720, 9727], "valid", [], "NV8"], [[9728, 9747], "valid", [], "NV8"], [[9748, 9749], "valid", [], "NV8"], [[9750, 9751], "valid", [], "NV8"], [[9752, 9752], "valid", [], "NV8"], [[9753, 9753], "valid", [], "NV8"], [[9754, 9839], "valid", [], "NV8"], [[9840, 9841], "valid", [], "NV8"], [[9842, 9853], "valid", [], "NV8"], [[9854, 9855], "valid", [], "NV8"], [[9856, 9865], "valid", [], "NV8"], [[9866, 9873], "valid", [], "NV8"], [[9874, 9884], "valid", [], "NV8"], [[9885, 9885], "valid", [], "NV8"], [[9886, 9887], "valid", [], "NV8"], [[9888, 9889], "valid", [], "NV8"], [[9890, 9905], "valid", [], "NV8"], [[9906, 9906], "valid", [], "NV8"], [[9907, 9916], "valid", [], "NV8"], [[9917, 9919], "valid", [], "NV8"], [[9920, 9923], "valid", [], "NV8"], [[9924, 9933], "valid", [], "NV8"], [[9934, 9934], "valid", [], "NV8"], [[9935, 9953], "valid", [], "NV8"], [[9954, 9954], "valid", [], "NV8"], [[9955, 9955], "valid", [], "NV8"], [[9956, 9959], "valid", [], "NV8"], [[9960, 9983], "valid", [], "NV8"], [[9984, 9984], "valid", [], "NV8"], [[9985, 9988], "valid", [], "NV8"], [[9989, 9989], "valid", [], "NV8"], [[9990, 9993], "valid", [], "NV8"], [[9994, 9995], "valid", [], "NV8"], [[9996, 10023], "valid", [], "NV8"], [[10024, 10024], "valid", [], "NV8"], [[10025, 10059], "valid", [], "NV8"], [[10060, 10060], "valid", [], "NV8"], [[10061, 10061], "valid", [], "NV8"], [[10062, 10062], "valid", [], "NV8"], [[10063, 10066], "valid", [], "NV8"], [[10067, 10069], "valid", [], "NV8"], [[10070, 10070], "valid", [], "NV8"], [[10071, 10071], "valid", [], "NV8"], [[10072, 10078], "valid", [], "NV8"], [[10079, 10080], "valid", [], "NV8"], [[10081, 10087], "valid", [], "NV8"], [[10088, 10101], "valid", [], "NV8"], [[10102, 10132], "valid", [], "NV8"], [[10133, 10135], "valid", [], "NV8"], [[10136, 10159], "valid", [], "NV8"], [[10160, 10160], "valid", [], "NV8"], [[10161, 10174], "valid", [], "NV8"], [[10175, 10175], "valid", [], "NV8"], [[10176, 10182], "valid", [], "NV8"], [[10183, 10186], "valid", [], "NV8"], [[10187, 10187], "valid", [], "NV8"], [[10188, 10188], "valid", [], "NV8"], [[10189, 10189], "valid", [], "NV8"], [[10190, 10191], "valid", [], "NV8"], [[10192, 10219], "valid", [], "NV8"], [[10220, 10223], "valid", [], "NV8"], [[10224, 10239], "valid", [], "NV8"], [[10240, 10495], "valid", [], "NV8"], [[10496, 10763], "valid", [], "NV8"], [[10764, 10764], "mapped", [8747, 8747, 8747, 8747]], [[10765, 10867], "valid", [], "NV8"], [[10868, 10868], "disallowed_STD3_mapped", [58, 58, 61]], [[10869, 10869], "disallowed_STD3_mapped", [61, 61]], [[10870, 10870], "disallowed_STD3_mapped", [61, 61, 61]], [[10871, 10971], "valid", [], "NV8"], [[10972, 10972], "mapped", [10973, 824]], [[10973, 11007], "valid", [], "NV8"], [[11008, 11021], "valid", [], "NV8"], [[11022, 11027], "valid", [], "NV8"], [[11028, 11034], "valid", [], "NV8"], [[11035, 11039], "valid", [], "NV8"], [[11040, 11043], "valid", [], "NV8"], [[11044, 11084], "valid", [], "NV8"], [[11085, 11087], "valid", [], "NV8"], [[11088, 11092], "valid", [], "NV8"], [[11093, 11097], "valid", [], "NV8"], [[11098, 11123], "valid", [], "NV8"], [[11124, 11125], "disallowed"], [[11126, 11157], "valid", [], "NV8"], [[11158, 11159], "disallowed"], [[11160, 11193], "valid", [], "NV8"], [[11194, 11196], "disallowed"], [[11197, 11208], "valid", [], "NV8"], [[11209, 11209], "disallowed"], [[11210, 11217], "valid", [], "NV8"], [[11218, 11243], "disallowed"], [[11244, 11247], "valid", [], "NV8"], [[11248, 11263], "disallowed"], [[11264, 11264], "mapped", [11312]], [[11265, 11265], "mapped", [11313]], [[11266, 11266], "mapped", [11314]], [[11267, 11267], "mapped", [11315]], [[11268, 11268], "mapped", [11316]], [[11269, 11269], "mapped", [11317]], [[11270, 11270], "mapped", [11318]], [[11271, 11271], "mapped", [11319]], [[11272, 11272], "mapped", [11320]], [[11273, 11273], "mapped", [11321]], [[11274, 11274], "mapped", [11322]], [[11275, 11275], "mapped", [11323]], [[11276, 11276], "mapped", [11324]], [[11277, 11277], "mapped", [11325]], [[11278, 11278], "mapped", [11326]], [[11279, 11279], "mapped", [11327]], [[11280, 11280], "mapped", [11328]], [[11281, 11281], "mapped", [11329]], [[11282, 11282], "mapped", [11330]], [[11283, 11283], "mapped", [11331]], [[11284, 11284], "mapped", [11332]], [[11285, 11285], "mapped", [11333]], [[11286, 11286], "mapped", [11334]], [[11287, 11287], "mapped", [11335]], [[11288, 11288], "mapped", [11336]], [[11289, 11289], "mapped", [11337]], [[11290, 11290], "mapped", [11338]], [[11291, 11291], "mapped", [11339]], [[11292, 11292], "mapped", [11340]], [[11293, 11293], "mapped", [11341]], [[11294, 11294], "mapped", [11342]], [[11295, 11295], "mapped", [11343]], [[11296, 11296], "mapped", [11344]], [[11297, 11297], "mapped", [11345]], [[11298, 11298], "mapped", [11346]], [[11299, 11299], "mapped", [11347]], [[11300, 11300], "mapped", [11348]], [[11301, 11301], "mapped", [11349]], [[11302, 11302], "mapped", [11350]], [[11303, 11303], "mapped", [11351]], [[11304, 11304], "mapped", [11352]], [[11305, 11305], "mapped", [11353]], [[11306, 11306], "mapped", [11354]], [[11307, 11307], "mapped", [11355]], [[11308, 11308], "mapped", [11356]], [[11309, 11309], "mapped", [11357]], [[11310, 11310], "mapped", [11358]], [[11311, 11311], "disallowed"], [[11312, 11358], "valid"], [[11359, 11359], "disallowed"], [[11360, 11360], "mapped", [11361]], [[11361, 11361], "valid"], [[11362, 11362], "mapped", [619]], [[11363, 11363], "mapped", [7549]], [[11364, 11364], "mapped", [637]], [[11365, 11366], "valid"], [[11367, 11367], "mapped", [11368]], [[11368, 11368], "valid"], [[11369, 11369], "mapped", [11370]], [[11370, 11370], "valid"], [[11371, 11371], "mapped", [11372]], [[11372, 11372], "valid"], [[11373, 11373], "mapped", [593]], [[11374, 11374], "mapped", [625]], [[11375, 11375], "mapped", [592]], [[11376, 11376], "mapped", [594]], [[11377, 11377], "valid"], [[11378, 11378], "mapped", [11379]], [[11379, 11379], "valid"], [[11380, 11380], "valid"], [[11381, 11381], "mapped", [11382]], [[11382, 11383], "valid"], [[11384, 11387], "valid"], [[11388, 11388], "mapped", [106]], [[11389, 11389], "mapped", [118]], [[11390, 11390], "mapped", [575]], [[11391, 11391], "mapped", [576]], [[11392, 11392], "mapped", [11393]], [[11393, 11393], "valid"], [[11394, 11394], "mapped", [11395]], [[11395, 11395], "valid"], [[11396, 11396], "mapped", [11397]], [[11397, 11397], "valid"], [[11398, 11398], "mapped", [11399]], [[11399, 11399], "valid"], [[11400, 11400], "mapped", [11401]], [[11401, 11401], "valid"], [[11402, 11402], "mapped", [11403]], [[11403, 11403], "valid"], [[11404, 11404], "mapped", [11405]], [[11405, 11405], "valid"], [[11406, 11406], "mapped", [11407]], [[11407, 11407], "valid"], [[11408, 11408], "mapped", [11409]], [[11409, 11409], "valid"], [[11410, 11410], "mapped", [11411]], [[11411, 11411], "valid"], [[11412, 11412], "mapped", [11413]], [[11413, 11413], "valid"], [[11414, 11414], "mapped", [11415]], [[11415, 11415], "valid"], [[11416, 11416], "mapped", [11417]], [[11417, 11417], "valid"], [[11418, 11418], "mapped", [11419]], [[11419, 11419], "valid"], [[11420, 11420], "mapped", [11421]], [[11421, 11421], "valid"], [[11422, 11422], "mapped", [11423]], [[11423, 11423], "valid"], [[11424, 11424], "mapped", [11425]], [[11425, 11425], "valid"], [[11426, 11426], "mapped", [11427]], [[11427, 11427], "valid"], [[11428, 11428], "mapped", [11429]], [[11429, 11429], "valid"], [[11430, 11430], "mapped", [11431]], [[11431, 11431], "valid"], [[11432, 11432], "mapped", [11433]], [[11433, 11433], "valid"], [[11434, 11434], "mapped", [11435]], [[11435, 11435], "valid"], [[11436, 11436], "mapped", [11437]], [[11437, 11437], "valid"], [[11438, 11438], "mapped", [11439]], [[11439, 11439], "valid"], [[11440, 11440], "mapped", [11441]], [[11441, 11441], "valid"], [[11442, 11442], "mapped", [11443]], [[11443, 11443], "valid"], [[11444, 11444], "mapped", [11445]], [[11445, 11445], "valid"], [[11446, 11446], "mapped", [11447]], [[11447, 11447], "valid"], [[11448, 11448], "mapped", [11449]], [[11449, 11449], "valid"], [[11450, 11450], "mapped", [11451]], [[11451, 11451], "valid"], [[11452, 11452], "mapped", [11453]], [[11453, 11453], "valid"], [[11454, 11454], "mapped", [11455]], [[11455, 11455], "valid"], [[11456, 11456], "mapped", [11457]], [[11457, 11457], "valid"], [[11458, 11458], "mapped", [11459]], [[11459, 11459], "valid"], [[11460, 11460], "mapped", [11461]], [[11461, 11461], "valid"], [[11462, 11462], "mapped", [11463]], [[11463, 11463], "valid"], [[11464, 11464], "mapped", [11465]], [[11465, 11465], "valid"], [[11466, 11466], "mapped", [11467]], [[11467, 11467], "valid"], [[11468, 11468], "mapped", [11469]], [[11469, 11469], "valid"], [[11470, 11470], "mapped", [11471]], [[11471, 11471], "valid"], [[11472, 11472], "mapped", [11473]], [[11473, 11473], "valid"], [[11474, 11474], "mapped", [11475]], [[11475, 11475], "valid"], [[11476, 11476], "mapped", [11477]], [[11477, 11477], "valid"], [[11478, 11478], "mapped", [11479]], [[11479, 11479], "valid"], [[11480, 11480], "mapped", [11481]], [[11481, 11481], "valid"], [[11482, 11482], "mapped", [11483]], [[11483, 11483], "valid"], [[11484, 11484], "mapped", [11485]], [[11485, 11485], "valid"], [[11486, 11486], "mapped", [11487]], [[11487, 11487], "valid"], [[11488, 11488], "mapped", [11489]], [[11489, 11489], "valid"], [[11490, 11490], "mapped", [11491]], [[11491, 11492], "valid"], [[11493, 11498], "valid", [], "NV8"], [[11499, 11499], "mapped", [11500]], [[11500, 11500], "valid"], [[11501, 11501], "mapped", [11502]], [[11502, 11505], "valid"], [[11506, 11506], "mapped", [11507]], [[11507, 11507], "valid"], [[11508, 11512], "disallowed"], [[11513, 11519], "valid", [], "NV8"], [[11520, 11557], "valid"], [[11558, 11558], "disallowed"], [[11559, 11559], "valid"], [[11560, 11564], "disallowed"], [[11565, 11565], "valid"], [[11566, 11567], "disallowed"], [[11568, 11621], "valid"], [[11622, 11623], "valid"], [[11624, 11630], "disallowed"], [[11631, 11631], "mapped", [11617]], [[11632, 11632], "valid", [], "NV8"], [[11633, 11646], "disallowed"], [[11647, 11647], "valid"], [[11648, 11670], "valid"], [[11671, 11679], "disallowed"], [[11680, 11686], "valid"], [[11687, 11687], "disallowed"], [[11688, 11694], "valid"], [[11695, 11695], "disallowed"], [[11696, 11702], "valid"], [[11703, 11703], "disallowed"], [[11704, 11710], "valid"], [[11711, 11711], "disallowed"], [[11712, 11718], "valid"], [[11719, 11719], "disallowed"], [[11720, 11726], "valid"], [[11727, 11727], "disallowed"], [[11728, 11734], "valid"], [[11735, 11735], "disallowed"], [[11736, 11742], "valid"], [[11743, 11743], "disallowed"], [[11744, 11775], "valid"], [[11776, 11799], "valid", [], "NV8"], [[11800, 11803], "valid", [], "NV8"], [[11804, 11805], "valid", [], "NV8"], [[11806, 11822], "valid", [], "NV8"], [[11823, 11823], "valid"], [[11824, 11824], "valid", [], "NV8"], [[11825, 11825], "valid", [], "NV8"], [[11826, 11835], "valid", [], "NV8"], [[11836, 11842], "valid", [], "NV8"], [[11843, 11903], "disallowed"], [[11904, 11929], "valid", [], "NV8"], [[11930, 11930], "disallowed"], [[11931, 11934], "valid", [], "NV8"], [[11935, 11935], "mapped", [27597]], [[11936, 12018], "valid", [], "NV8"], [[12019, 12019], "mapped", [40863]], [[12020, 12031], "disallowed"], [[12032, 12032], "mapped", [19968]], [[12033, 12033], "mapped", [20008]], [[12034, 12034], "mapped", [20022]], [[12035, 12035], "mapped", [20031]], [[12036, 12036], "mapped", [20057]], [[12037, 12037], "mapped", [20101]], [[12038, 12038], "mapped", [20108]], [[12039, 12039], "mapped", [20128]], [[12040, 12040], "mapped", [20154]], [[12041, 12041], "mapped", [20799]], [[12042, 12042], "mapped", [20837]], [[12043, 12043], "mapped", [20843]], [[12044, 12044], "mapped", [20866]], [[12045, 12045], "mapped", [20886]], [[12046, 12046], "mapped", [20907]], [[12047, 12047], "mapped", [20960]], [[12048, 12048], "mapped", [20981]], [[12049, 12049], "mapped", [20992]], [[12050, 12050], "mapped", [21147]], [[12051, 12051], "mapped", [21241]], [[12052, 12052], "mapped", [21269]], [[12053, 12053], "mapped", [21274]], [[12054, 12054], "mapped", [21304]], [[12055, 12055], "mapped", [21313]], [[12056, 12056], "mapped", [21340]], [[12057, 12057], "mapped", [21353]], [[12058, 12058], "mapped", [21378]], [[12059, 12059], "mapped", [21430]], [[12060, 12060], "mapped", [21448]], [[12061, 12061], "mapped", [21475]], [[12062, 12062], "mapped", [22231]], [[12063, 12063], "mapped", [22303]], [[12064, 12064], "mapped", [22763]], [[12065, 12065], "mapped", [22786]], [[12066, 12066], "mapped", [22794]], [[12067, 12067], "mapped", [22805]], [[12068, 12068], "mapped", [22823]], [[12069, 12069], "mapped", [22899]], [[12070, 12070], "mapped", [23376]], [[12071, 12071], "mapped", [23424]], [[12072, 12072], "mapped", [23544]], [[12073, 12073], "mapped", [23567]], [[12074, 12074], "mapped", [23586]], [[12075, 12075], "mapped", [23608]], [[12076, 12076], "mapped", [23662]], [[12077, 12077], "mapped", [23665]], [[12078, 12078], "mapped", [24027]], [[12079, 12079], "mapped", [24037]], [[12080, 12080], "mapped", [24049]], [[12081, 12081], "mapped", [24062]], [[12082, 12082], "mapped", [24178]], [[12083, 12083], "mapped", [24186]], [[12084, 12084], "mapped", [24191]], [[12085, 12085], "mapped", [24308]], [[12086, 12086], "mapped", [24318]], [[12087, 12087], "mapped", [24331]], [[12088, 12088], "mapped", [24339]], [[12089, 12089], "mapped", [24400]], [[12090, 12090], "mapped", [24417]], [[12091, 12091], "mapped", [24435]], [[12092, 12092], "mapped", [24515]], [[12093, 12093], "mapped", [25096]], [[12094, 12094], "mapped", [25142]], [[12095, 12095], "mapped", [25163]], [[12096, 12096], "mapped", [25903]], [[12097, 12097], "mapped", [25908]], [[12098, 12098], "mapped", [25991]], [[12099, 12099], "mapped", [26007]], [[12100, 12100], "mapped", [26020]], [[12101, 12101], "mapped", [26041]], [[12102, 12102], "mapped", [26080]], [[12103, 12103], "mapped", [26085]], [[12104, 12104], "mapped", [26352]], [[12105, 12105], "mapped", [26376]], [[12106, 12106], "mapped", [26408]], [[12107, 12107], "mapped", [27424]], [[12108, 12108], "mapped", [27490]], [[12109, 12109], "mapped", [27513]], [[12110, 12110], "mapped", [27571]], [[12111, 12111], "mapped", [27595]], [[12112, 12112], "mapped", [27604]], [[12113, 12113], "mapped", [27611]], [[12114, 12114], "mapped", [27663]], [[12115, 12115], "mapped", [27668]], [[12116, 12116], "mapped", [27700]], [[12117, 12117], "mapped", [28779]], [[12118, 12118], "mapped", [29226]], [[12119, 12119], "mapped", [29238]], [[12120, 12120], "mapped", [29243]], [[12121, 12121], "mapped", [29247]], [[12122, 12122], "mapped", [29255]], [[12123, 12123], "mapped", [29273]], [[12124, 12124], "mapped", [29275]], [[12125, 12125], "mapped", [29356]], [[12126, 12126], "mapped", [29572]], [[12127, 12127], "mapped", [29577]], [[12128, 12128], "mapped", [29916]], [[12129, 12129], "mapped", [29926]], [[12130, 12130], "mapped", [29976]], [[12131, 12131], "mapped", [29983]], [[12132, 12132], "mapped", [29992]], [[12133, 12133], "mapped", [3e4]], [[12134, 12134], "mapped", [30091]], [[12135, 12135], "mapped", [30098]], [[12136, 12136], "mapped", [30326]], [[12137, 12137], "mapped", [30333]], [[12138, 12138], "mapped", [30382]], [[12139, 12139], "mapped", [30399]], [[12140, 12140], "mapped", [30446]], [[12141, 12141], "mapped", [30683]], [[12142, 12142], "mapped", [30690]], [[12143, 12143], "mapped", [30707]], [[12144, 12144], "mapped", [31034]], [[12145, 12145], "mapped", [31160]], [[12146, 12146], "mapped", [31166]], [[12147, 12147], "mapped", [31348]], [[12148, 12148], "mapped", [31435]], [[12149, 12149], "mapped", [31481]], [[12150, 12150], "mapped", [31859]], [[12151, 12151], "mapped", [31992]], [[12152, 12152], "mapped", [32566]], [[12153, 12153], "mapped", [32593]], [[12154, 12154], "mapped", [32650]], [[12155, 12155], "mapped", [32701]], [[12156, 12156], "mapped", [32769]], [[12157, 12157], "mapped", [32780]], [[12158, 12158], "mapped", [32786]], [[12159, 12159], "mapped", [32819]], [[12160, 12160], "mapped", [32895]], [[12161, 12161], "mapped", [32905]], [[12162, 12162], "mapped", [33251]], [[12163, 12163], "mapped", [33258]], [[12164, 12164], "mapped", [33267]], [[12165, 12165], "mapped", [33276]], [[12166, 12166], "mapped", [33292]], [[12167, 12167], "mapped", [33307]], [[12168, 12168], "mapped", [33311]], [[12169, 12169], "mapped", [33390]], [[12170, 12170], "mapped", [33394]], [[12171, 12171], "mapped", [33400]], [[12172, 12172], "mapped", [34381]], [[12173, 12173], "mapped", [34411]], [[12174, 12174], "mapped", [34880]], [[12175, 12175], "mapped", [34892]], [[12176, 12176], "mapped", [34915]], [[12177, 12177], "mapped", [35198]], [[12178, 12178], "mapped", [35211]], [[12179, 12179], "mapped", [35282]], [[12180, 12180], "mapped", [35328]], [[12181, 12181], "mapped", [35895]], [[12182, 12182], "mapped", [35910]], [[12183, 12183], "mapped", [35925]], [[12184, 12184], "mapped", [35960]], [[12185, 12185], "mapped", [35997]], [[12186, 12186], "mapped", [36196]], [[12187, 12187], "mapped", [36208]], [[12188, 12188], "mapped", [36275]], [[12189, 12189], "mapped", [36523]], [[12190, 12190], "mapped", [36554]], [[12191, 12191], "mapped", [36763]], [[12192, 12192], "mapped", [36784]], [[12193, 12193], "mapped", [36789]], [[12194, 12194], "mapped", [37009]], [[12195, 12195], "mapped", [37193]], [[12196, 12196], "mapped", [37318]], [[12197, 12197], "mapped", [37324]], [[12198, 12198], "mapped", [37329]], [[12199, 12199], "mapped", [38263]], [[12200, 12200], "mapped", [38272]], [[12201, 12201], "mapped", [38428]], [[12202, 12202], "mapped", [38582]], [[12203, 12203], "mapped", [38585]], [[12204, 12204], "mapped", [38632]], [[12205, 12205], "mapped", [38737]], [[12206, 12206], "mapped", [38750]], [[12207, 12207], "mapped", [38754]], [[12208, 12208], "mapped", [38761]], [[12209, 12209], "mapped", [38859]], [[12210, 12210], "mapped", [38893]], [[12211, 12211], "mapped", [38899]], [[12212, 12212], "mapped", [38913]], [[12213, 12213], "mapped", [39080]], [[12214, 12214], "mapped", [39131]], [[12215, 12215], "mapped", [39135]], [[12216, 12216], "mapped", [39318]], [[12217, 12217], "mapped", [39321]], [[12218, 12218], "mapped", [39340]], [[12219, 12219], "mapped", [39592]], [[12220, 12220], "mapped", [39640]], [[12221, 12221], "mapped", [39647]], [[12222, 12222], "mapped", [39717]], [[12223, 12223], "mapped", [39727]], [[12224, 12224], "mapped", [39730]], [[12225, 12225], "mapped", [39740]], [[12226, 12226], "mapped", [39770]], [[12227, 12227], "mapped", [40165]], [[12228, 12228], "mapped", [40565]], [[12229, 12229], "mapped", [40575]], [[12230, 12230], "mapped", [40613]], [[12231, 12231], "mapped", [40635]], [[12232, 12232], "mapped", [40643]], [[12233, 12233], "mapped", [40653]], [[12234, 12234], "mapped", [40657]], [[12235, 12235], "mapped", [40697]], [[12236, 12236], "mapped", [40701]], [[12237, 12237], "mapped", [40718]], [[12238, 12238], "mapped", [40723]], [[12239, 12239], "mapped", [40736]], [[12240, 12240], "mapped", [40763]], [[12241, 12241], "mapped", [40778]], [[12242, 12242], "mapped", [40786]], [[12243, 12243], "mapped", [40845]], [[12244, 12244], "mapped", [40860]], [[12245, 12245], "mapped", [40864]], [[12246, 12271], "disallowed"], [[12272, 12283], "disallowed"], [[12284, 12287], "disallowed"], [[12288, 12288], "disallowed_STD3_mapped", [32]], [[12289, 12289], "valid", [], "NV8"], [[12290, 12290], "mapped", [46]], [[12291, 12292], "valid", [], "NV8"], [[12293, 12295], "valid"], [[12296, 12329], "valid", [], "NV8"], [[12330, 12333], "valid"], [[12334, 12341], "valid", [], "NV8"], [[12342, 12342], "mapped", [12306]], [[12343, 12343], "valid", [], "NV8"], [[12344, 12344], "mapped", [21313]], [[12345, 12345], "mapped", [21316]], [[12346, 12346], "mapped", [21317]], [[12347, 12347], "valid", [], "NV8"], [[12348, 12348], "valid"], [[12349, 12349], "valid", [], "NV8"], [[12350, 12350], "valid", [], "NV8"], [[12351, 12351], "valid", [], "NV8"], [[12352, 12352], "disallowed"], [[12353, 12436], "valid"], [[12437, 12438], "valid"], [[12439, 12440], "disallowed"], [[12441, 12442], "valid"], [[12443, 12443], "disallowed_STD3_mapped", [32, 12441]], [[12444, 12444], "disallowed_STD3_mapped", [32, 12442]], [[12445, 12446], "valid"], [[12447, 12447], "mapped", [12424, 12426]], [[12448, 12448], "valid", [], "NV8"], [[12449, 12542], "valid"], [[12543, 12543], "mapped", [12467, 12488]], [[12544, 12548], "disallowed"], [[12549, 12588], "valid"], [[12589, 12589], "valid"], [[12590, 12592], "disallowed"], [[12593, 12593], "mapped", [4352]], [[12594, 12594], "mapped", [4353]], [[12595, 12595], "mapped", [4522]], [[12596, 12596], "mapped", [4354]], [[12597, 12597], "mapped", [4524]], [[12598, 12598], "mapped", [4525]], [[12599, 12599], "mapped", [4355]], [[12600, 12600], "mapped", [4356]], [[12601, 12601], "mapped", [4357]], [[12602, 12602], "mapped", [4528]], [[12603, 12603], "mapped", [4529]], [[12604, 12604], "mapped", [4530]], [[12605, 12605], "mapped", [4531]], [[12606, 12606], "mapped", [4532]], [[12607, 12607], "mapped", [4533]], [[12608, 12608], "mapped", [4378]], [[12609, 12609], "mapped", [4358]], [[12610, 12610], "mapped", [4359]], [[12611, 12611], "mapped", [4360]], [[12612, 12612], "mapped", [4385]], [[12613, 12613], "mapped", [4361]], [[12614, 12614], "mapped", [4362]], [[12615, 12615], "mapped", [4363]], [[12616, 12616], "mapped", [4364]], [[12617, 12617], "mapped", [4365]], [[12618, 12618], "mapped", [4366]], [[12619, 12619], "mapped", [4367]], [[12620, 12620], "mapped", [4368]], [[12621, 12621], "mapped", [4369]], [[12622, 12622], "mapped", [4370]], [[12623, 12623], "mapped", [4449]], [[12624, 12624], "mapped", [4450]], [[12625, 12625], "mapped", [4451]], [[12626, 12626], "mapped", [4452]], [[12627, 12627], "mapped", [4453]], [[12628, 12628], "mapped", [4454]], [[12629, 12629], "mapped", [4455]], [[12630, 12630], "mapped", [4456]], [[12631, 12631], "mapped", [4457]], [[12632, 12632], "mapped", [4458]], [[12633, 12633], "mapped", [4459]], [[12634, 12634], "mapped", [4460]], [[12635, 12635], "mapped", [4461]], [[12636, 12636], "mapped", [4462]], [[12637, 12637], "mapped", [4463]], [[12638, 12638], "mapped", [4464]], [[12639, 12639], "mapped", [4465]], [[12640, 12640], "mapped", [4466]], [[12641, 12641], "mapped", [4467]], [[12642, 12642], "mapped", [4468]], [[12643, 12643], "mapped", [4469]], [[12644, 12644], "disallowed"], [[12645, 12645], "mapped", [4372]], [[12646, 12646], "mapped", [4373]], [[12647, 12647], "mapped", [4551]], [[12648, 12648], "mapped", [4552]], [[12649, 12649], "mapped", [4556]], [[12650, 12650], "mapped", [4558]], [[12651, 12651], "mapped", [4563]], [[12652, 12652], "mapped", [4567]], [[12653, 12653], "mapped", [4569]], [[12654, 12654], "mapped", [4380]], [[12655, 12655], "mapped", [4573]], [[12656, 12656], "mapped", [4575]], [[12657, 12657], "mapped", [4381]], [[12658, 12658], "mapped", [4382]], [[12659, 12659], "mapped", [4384]], [[12660, 12660], "mapped", [4386]], [[12661, 12661], "mapped", [4387]], [[12662, 12662], "mapped", [4391]], [[12663, 12663], "mapped", [4393]], [[12664, 12664], "mapped", [4395]], [[12665, 12665], "mapped", [4396]], [[12666, 12666], "mapped", [4397]], [[12667, 12667], "mapped", [4398]], [[12668, 12668], "mapped", [4399]], [[12669, 12669], "mapped", [4402]], [[12670, 12670], "mapped", [4406]], [[12671, 12671], "mapped", [4416]], [[12672, 12672], "mapped", [4423]], [[12673, 12673], "mapped", [4428]], [[12674, 12674], "mapped", [4593]], [[12675, 12675], "mapped", [4594]], [[12676, 12676], "mapped", [4439]], [[12677, 12677], "mapped", [4440]], [[12678, 12678], "mapped", [4441]], [[12679, 12679], "mapped", [4484]], [[12680, 12680], "mapped", [4485]], [[12681, 12681], "mapped", [4488]], [[12682, 12682], "mapped", [4497]], [[12683, 12683], "mapped", [4498]], [[12684, 12684], "mapped", [4500]], [[12685, 12685], "mapped", [4510]], [[12686, 12686], "mapped", [4513]], [[12687, 12687], "disallowed"], [[12688, 12689], "valid", [], "NV8"], [[12690, 12690], "mapped", [19968]], [[12691, 12691], "mapped", [20108]], [[12692, 12692], "mapped", [19977]], [[12693, 12693], "mapped", [22235]], [[12694, 12694], "mapped", [19978]], [[12695, 12695], "mapped", [20013]], [[12696, 12696], "mapped", [19979]], [[12697, 12697], "mapped", [30002]], [[12698, 12698], "mapped", [20057]], [[12699, 12699], "mapped", [19993]], [[12700, 12700], "mapped", [19969]], [[12701, 12701], "mapped", [22825]], [[12702, 12702], "mapped", [22320]], [[12703, 12703], "mapped", [20154]], [[12704, 12727], "valid"], [[12728, 12730], "valid"], [[12731, 12735], "disallowed"], [[12736, 12751], "valid", [], "NV8"], [[12752, 12771], "valid", [], "NV8"], [[12772, 12783], "disallowed"], [[12784, 12799], "valid"], [[12800, 12800], "disallowed_STD3_mapped", [40, 4352, 41]], [[12801, 12801], "disallowed_STD3_mapped", [40, 4354, 41]], [[12802, 12802], "disallowed_STD3_mapped", [40, 4355, 41]], [[12803, 12803], "disallowed_STD3_mapped", [40, 4357, 41]], [[12804, 12804], "disallowed_STD3_mapped", [40, 4358, 41]], [[12805, 12805], "disallowed_STD3_mapped", [40, 4359, 41]], [[12806, 12806], "disallowed_STD3_mapped", [40, 4361, 41]], [[12807, 12807], "disallowed_STD3_mapped", [40, 4363, 41]], [[12808, 12808], "disallowed_STD3_mapped", [40, 4364, 41]], [[12809, 12809], "disallowed_STD3_mapped", [40, 4366, 41]], [[12810, 12810], "disallowed_STD3_mapped", [40, 4367, 41]], [[12811, 12811], "disallowed_STD3_mapped", [40, 4368, 41]], [[12812, 12812], "disallowed_STD3_mapped", [40, 4369, 41]], [[12813, 12813], "disallowed_STD3_mapped", [40, 4370, 41]], [[12814, 12814], "disallowed_STD3_mapped", [40, 44032, 41]], [[12815, 12815], "disallowed_STD3_mapped", [40, 45208, 41]], [[12816, 12816], "disallowed_STD3_mapped", [40, 45796, 41]], [[12817, 12817], "disallowed_STD3_mapped", [40, 46972, 41]], [[12818, 12818], "disallowed_STD3_mapped", [40, 47560, 41]], [[12819, 12819], "disallowed_STD3_mapped", [40, 48148, 41]], [[12820, 12820], "disallowed_STD3_mapped", [40, 49324, 41]], [[12821, 12821], "disallowed_STD3_mapped", [40, 50500, 41]], [[12822, 12822], "disallowed_STD3_mapped", [40, 51088, 41]], [[12823, 12823], "disallowed_STD3_mapped", [40, 52264, 41]], [[12824, 12824], "disallowed_STD3_mapped", [40, 52852, 41]], [[12825, 12825], "disallowed_STD3_mapped", [40, 53440, 41]], [[12826, 12826], "disallowed_STD3_mapped", [40, 54028, 41]], [[12827, 12827], "disallowed_STD3_mapped", [40, 54616, 41]], [[12828, 12828], "disallowed_STD3_mapped", [40, 51452, 41]], [[12829, 12829], "disallowed_STD3_mapped", [40, 50724, 51204, 41]], [[12830, 12830], "disallowed_STD3_mapped", [40, 50724, 54980, 41]], [[12831, 12831], "disallowed"], [[12832, 12832], "disallowed_STD3_mapped", [40, 19968, 41]], [[12833, 12833], "disallowed_STD3_mapped", [40, 20108, 41]], [[12834, 12834], "disallowed_STD3_mapped", [40, 19977, 41]], [[12835, 12835], "disallowed_STD3_mapped", [40, 22235, 41]], [[12836, 12836], "disallowed_STD3_mapped", [40, 20116, 41]], [[12837, 12837], "disallowed_STD3_mapped", [40, 20845, 41]], [[12838, 12838], "disallowed_STD3_mapped", [40, 19971, 41]], [[12839, 12839], "disallowed_STD3_mapped", [40, 20843, 41]], [[12840, 12840], "disallowed_STD3_mapped", [40, 20061, 41]], [[12841, 12841], "disallowed_STD3_mapped", [40, 21313, 41]], [[12842, 12842], "disallowed_STD3_mapped", [40, 26376, 41]], [[12843, 12843], "disallowed_STD3_mapped", [40, 28779, 41]], [[12844, 12844], "disallowed_STD3_mapped", [40, 27700, 41]], [[12845, 12845], "disallowed_STD3_mapped", [40, 26408, 41]], [[12846, 12846], "disallowed_STD3_mapped", [40, 37329, 41]], [[12847, 12847], "disallowed_STD3_mapped", [40, 22303, 41]], [[12848, 12848], "disallowed_STD3_mapped", [40, 26085, 41]], [[12849, 12849], "disallowed_STD3_mapped", [40, 26666, 41]], [[12850, 12850], "disallowed_STD3_mapped", [40, 26377, 41]], [[12851, 12851], "disallowed_STD3_mapped", [40, 31038, 41]], [[12852, 12852], "disallowed_STD3_mapped", [40, 21517, 41]], [[12853, 12853], "disallowed_STD3_mapped", [40, 29305, 41]], [[12854, 12854], "disallowed_STD3_mapped", [40, 36001, 41]], [[12855, 12855], "disallowed_STD3_mapped", [40, 31069, 41]], [[12856, 12856], "disallowed_STD3_mapped", [40, 21172, 41]], [[12857, 12857], "disallowed_STD3_mapped", [40, 20195, 41]], [[12858, 12858], "disallowed_STD3_mapped", [40, 21628, 41]], [[12859, 12859], "disallowed_STD3_mapped", [40, 23398, 41]], [[12860, 12860], "disallowed_STD3_mapped", [40, 30435, 41]], [[12861, 12861], "disallowed_STD3_mapped", [40, 20225, 41]], [[12862, 12862], "disallowed_STD3_mapped", [40, 36039, 41]], [[12863, 12863], "disallowed_STD3_mapped", [40, 21332, 41]], [[12864, 12864], "disallowed_STD3_mapped", [40, 31085, 41]], [[12865, 12865], "disallowed_STD3_mapped", [40, 20241, 41]], [[12866, 12866], "disallowed_STD3_mapped", [40, 33258, 41]], [[12867, 12867], "disallowed_STD3_mapped", [40, 33267, 41]], [[12868, 12868], "mapped", [21839]], [[12869, 12869], "mapped", [24188]], [[12870, 12870], "mapped", [25991]], [[12871, 12871], "mapped", [31631]], [[12872, 12879], "valid", [], "NV8"], [[12880, 12880], "mapped", [112, 116, 101]], [[12881, 12881], "mapped", [50, 49]], [[12882, 12882], "mapped", [50, 50]], [[12883, 12883], "mapped", [50, 51]], [[12884, 12884], "mapped", [50, 52]], [[12885, 12885], "mapped", [50, 53]], [[12886, 12886], "mapped", [50, 54]], [[12887, 12887], "mapped", [50, 55]], [[12888, 12888], "mapped", [50, 56]], [[12889, 12889], "mapped", [50, 57]], [[12890, 12890], "mapped", [51, 48]], [[12891, 12891], "mapped", [51, 49]], [[12892, 12892], "mapped", [51, 50]], [[12893, 12893], "mapped", [51, 51]], [[12894, 12894], "mapped", [51, 52]], [[12895, 12895], "mapped", [51, 53]], [[12896, 12896], "mapped", [4352]], [[12897, 12897], "mapped", [4354]], [[12898, 12898], "mapped", [4355]], [[12899, 12899], "mapped", [4357]], [[12900, 12900], "mapped", [4358]], [[12901, 12901], "mapped", [4359]], [[12902, 12902], "mapped", [4361]], [[12903, 12903], "mapped", [4363]], [[12904, 12904], "mapped", [4364]], [[12905, 12905], "mapped", [4366]], [[12906, 12906], "mapped", [4367]], [[12907, 12907], "mapped", [4368]], [[12908, 12908], "mapped", [4369]], [[12909, 12909], "mapped", [4370]], [[12910, 12910], "mapped", [44032]], [[12911, 12911], "mapped", [45208]], [[12912, 12912], "mapped", [45796]], [[12913, 12913], "mapped", [46972]], [[12914, 12914], "mapped", [47560]], [[12915, 12915], "mapped", [48148]], [[12916, 12916], "mapped", [49324]], [[12917, 12917], "mapped", [50500]], [[12918, 12918], "mapped", [51088]], [[12919, 12919], "mapped", [52264]], [[12920, 12920], "mapped", [52852]], [[12921, 12921], "mapped", [53440]], [[12922, 12922], "mapped", [54028]], [[12923, 12923], "mapped", [54616]], [[12924, 12924], "mapped", [52280, 44256]], [[12925, 12925], "mapped", [51452, 51032]], [[12926, 12926], "mapped", [50864]], [[12927, 12927], "valid", [], "NV8"], [[12928, 12928], "mapped", [19968]], [[12929, 12929], "mapped", [20108]], [[12930, 12930], "mapped", [19977]], [[12931, 12931], "mapped", [22235]], [[12932, 12932], "mapped", [20116]], [[12933, 12933], "mapped", [20845]], [[12934, 12934], "mapped", [19971]], [[12935, 12935], "mapped", [20843]], [[12936, 12936], "mapped", [20061]], [[12937, 12937], "mapped", [21313]], [[12938, 12938], "mapped", [26376]], [[12939, 12939], "mapped", [28779]], [[12940, 12940], "mapped", [27700]], [[12941, 12941], "mapped", [26408]], [[12942, 12942], "mapped", [37329]], [[12943, 12943], "mapped", [22303]], [[12944, 12944], "mapped", [26085]], [[12945, 12945], "mapped", [26666]], [[12946, 12946], "mapped", [26377]], [[12947, 12947], "mapped", [31038]], [[12948, 12948], "mapped", [21517]], [[12949, 12949], "mapped", [29305]], [[12950, 12950], "mapped", [36001]], [[12951, 12951], "mapped", [31069]], [[12952, 12952], "mapped", [21172]], [[12953, 12953], "mapped", [31192]], [[12954, 12954], "mapped", [30007]], [[12955, 12955], "mapped", [22899]], [[12956, 12956], "mapped", [36969]], [[12957, 12957], "mapped", [20778]], [[12958, 12958], "mapped", [21360]], [[12959, 12959], "mapped", [27880]], [[12960, 12960], "mapped", [38917]], [[12961, 12961], "mapped", [20241]], [[12962, 12962], "mapped", [20889]], [[12963, 12963], "mapped", [27491]], [[12964, 12964], "mapped", [19978]], [[12965, 12965], "mapped", [20013]], [[12966, 12966], "mapped", [19979]], [[12967, 12967], "mapped", [24038]], [[12968, 12968], "mapped", [21491]], [[12969, 12969], "mapped", [21307]], [[12970, 12970], "mapped", [23447]], [[12971, 12971], "mapped", [23398]], [[12972, 12972], "mapped", [30435]], [[12973, 12973], "mapped", [20225]], [[12974, 12974], "mapped", [36039]], [[12975, 12975], "mapped", [21332]], [[12976, 12976], "mapped", [22812]], [[12977, 12977], "mapped", [51, 54]], [[12978, 12978], "mapped", [51, 55]], [[12979, 12979], "mapped", [51, 56]], [[12980, 12980], "mapped", [51, 57]], [[12981, 12981], "mapped", [52, 48]], [[12982, 12982], "mapped", [52, 49]], [[12983, 12983], "mapped", [52, 50]], [[12984, 12984], "mapped", [52, 51]], [[12985, 12985], "mapped", [52, 52]], [[12986, 12986], "mapped", [52, 53]], [[12987, 12987], "mapped", [52, 54]], [[12988, 12988], "mapped", [52, 55]], [[12989, 12989], "mapped", [52, 56]], [[12990, 12990], "mapped", [52, 57]], [[12991, 12991], "mapped", [53, 48]], [[12992, 12992], "mapped", [49, 26376]], [[12993, 12993], "mapped", [50, 26376]], [[12994, 12994], "mapped", [51, 26376]], [[12995, 12995], "mapped", [52, 26376]], [[12996, 12996], "mapped", [53, 26376]], [[12997, 12997], "mapped", [54, 26376]], [[12998, 12998], "mapped", [55, 26376]], [[12999, 12999], "mapped", [56, 26376]], [[13e3, 13e3], "mapped", [57, 26376]], [[13001, 13001], "mapped", [49, 48, 26376]], [[13002, 13002], "mapped", [49, 49, 26376]], [[13003, 13003], "mapped", [49, 50, 26376]], [[13004, 13004], "mapped", [104, 103]], [[13005, 13005], "mapped", [101, 114, 103]], [[13006, 13006], "mapped", [101, 118]], [[13007, 13007], "mapped", [108, 116, 100]], [[13008, 13008], "mapped", [12450]], [[13009, 13009], "mapped", [12452]], [[13010, 13010], "mapped", [12454]], [[13011, 13011], "mapped", [12456]], [[13012, 13012], "mapped", [12458]], [[13013, 13013], "mapped", [12459]], [[13014, 13014], "mapped", [12461]], [[13015, 13015], "mapped", [12463]], [[13016, 13016], "mapped", [12465]], [[13017, 13017], "mapped", [12467]], [[13018, 13018], "mapped", [12469]], [[13019, 13019], "mapped", [12471]], [[13020, 13020], "mapped", [12473]], [[13021, 13021], "mapped", [12475]], [[13022, 13022], "mapped", [12477]], [[13023, 13023], "mapped", [12479]], [[13024, 13024], "mapped", [12481]], [[13025, 13025], "mapped", [12484]], [[13026, 13026], "mapped", [12486]], [[13027, 13027], "mapped", [12488]], [[13028, 13028], "mapped", [12490]], [[13029, 13029], "mapped", [12491]], [[13030, 13030], "mapped", [12492]], [[13031, 13031], "mapped", [12493]], [[13032, 13032], "mapped", [12494]], [[13033, 13033], "mapped", [12495]], [[13034, 13034], "mapped", [12498]], [[13035, 13035], "mapped", [12501]], [[13036, 13036], "mapped", [12504]], [[13037, 13037], "mapped", [12507]], [[13038, 13038], "mapped", [12510]], [[13039, 13039], "mapped", [12511]], [[13040, 13040], "mapped", [12512]], [[13041, 13041], "mapped", [12513]], [[13042, 13042], "mapped", [12514]], [[13043, 13043], "mapped", [12516]], [[13044, 13044], "mapped", [12518]], [[13045, 13045], "mapped", [12520]], [[13046, 13046], "mapped", [12521]], [[13047, 13047], "mapped", [12522]], [[13048, 13048], "mapped", [12523]], [[13049, 13049], "mapped", [12524]], [[13050, 13050], "mapped", [12525]], [[13051, 13051], "mapped", [12527]], [[13052, 13052], "mapped", [12528]], [[13053, 13053], "mapped", [12529]], [[13054, 13054], "mapped", [12530]], [[13055, 13055], "disallowed"], [[13056, 13056], "mapped", [12450, 12497, 12540, 12488]], [[13057, 13057], "mapped", [12450, 12523, 12501, 12449]], [[13058, 13058], "mapped", [12450, 12531, 12506, 12450]], [[13059, 13059], "mapped", [12450, 12540, 12523]], [[13060, 13060], "mapped", [12452, 12491, 12531, 12464]], [[13061, 13061], "mapped", [12452, 12531, 12481]], [[13062, 13062], "mapped", [12454, 12457, 12531]], [[13063, 13063], "mapped", [12456, 12473, 12463, 12540, 12489]], [[13064, 13064], "mapped", [12456, 12540, 12459, 12540]], [[13065, 13065], "mapped", [12458, 12531, 12473]], [[13066, 13066], "mapped", [12458, 12540, 12512]], [[13067, 13067], "mapped", [12459, 12452, 12522]], [[13068, 13068], "mapped", [12459, 12521, 12483, 12488]], [[13069, 13069], "mapped", [12459, 12525, 12522, 12540]], [[13070, 13070], "mapped", [12460, 12525, 12531]], [[13071, 13071], "mapped", [12460, 12531, 12510]], [[13072, 13072], "mapped", [12462, 12460]], [[13073, 13073], "mapped", [12462, 12491, 12540]], [[13074, 13074], "mapped", [12461, 12517, 12522, 12540]], [[13075, 13075], "mapped", [12462, 12523, 12480, 12540]], [[13076, 13076], "mapped", [12461, 12525]], [[13077, 13077], "mapped", [12461, 12525, 12464, 12521, 12512]], [[13078, 13078], "mapped", [12461, 12525, 12513, 12540, 12488, 12523]], [[13079, 13079], "mapped", [12461, 12525, 12527, 12483, 12488]], [[13080, 13080], "mapped", [12464, 12521, 12512]], [[13081, 13081], "mapped", [12464, 12521, 12512, 12488, 12531]], [[13082, 13082], "mapped", [12463, 12523, 12476, 12452, 12525]], [[13083, 13083], "mapped", [12463, 12525, 12540, 12493]], [[13084, 13084], "mapped", [12465, 12540, 12473]], [[13085, 13085], "mapped", [12467, 12523, 12490]], [[13086, 13086], "mapped", [12467, 12540, 12509]], [[13087, 13087], "mapped", [12469, 12452, 12463, 12523]], [[13088, 13088], "mapped", [12469, 12531, 12481, 12540, 12512]], [[13089, 13089], "mapped", [12471, 12522, 12531, 12464]], [[13090, 13090], "mapped", [12475, 12531, 12481]], [[13091, 13091], "mapped", [12475, 12531, 12488]], [[13092, 13092], "mapped", [12480, 12540, 12473]], [[13093, 13093], "mapped", [12487, 12471]], [[13094, 13094], "mapped", [12489, 12523]], [[13095, 13095], "mapped", [12488, 12531]], [[13096, 13096], "mapped", [12490, 12494]], [[13097, 13097], "mapped", [12494, 12483, 12488]], [[13098, 13098], "mapped", [12495, 12452, 12484]], [[13099, 13099], "mapped", [12497, 12540, 12475, 12531, 12488]], [[13100, 13100], "mapped", [12497, 12540, 12484]], [[13101, 13101], "mapped", [12496, 12540, 12524, 12523]], [[13102, 13102], "mapped", [12500, 12450, 12473, 12488, 12523]], [[13103, 13103], "mapped", [12500, 12463, 12523]], [[13104, 13104], "mapped", [12500, 12467]], [[13105, 13105], "mapped", [12499, 12523]], [[13106, 13106], "mapped", [12501, 12449, 12521, 12483, 12489]], [[13107, 13107], "mapped", [12501, 12451, 12540, 12488]], [[13108, 13108], "mapped", [12502, 12483, 12471, 12455, 12523]], [[13109, 13109], "mapped", [12501, 12521, 12531]], [[13110, 13110], "mapped", [12504, 12463, 12479, 12540, 12523]], [[13111, 13111], "mapped", [12506, 12477]], [[13112, 13112], "mapped", [12506, 12491, 12498]], [[13113, 13113], "mapped", [12504, 12523, 12484]], [[13114, 13114], "mapped", [12506, 12531, 12473]], [[13115, 13115], "mapped", [12506, 12540, 12472]], [[13116, 13116], "mapped", [12505, 12540, 12479]], [[13117, 13117], "mapped", [12509, 12452, 12531, 12488]], [[13118, 13118], "mapped", [12508, 12523, 12488]], [[13119, 13119], "mapped", [12507, 12531]], [[13120, 13120], "mapped", [12509, 12531, 12489]], [[13121, 13121], "mapped", [12507, 12540, 12523]], [[13122, 13122], "mapped", [12507, 12540, 12531]], [[13123, 13123], "mapped", [12510, 12452, 12463, 12525]], [[13124, 13124], "mapped", [12510, 12452, 12523]], [[13125, 13125], "mapped", [12510, 12483, 12495]], [[13126, 13126], "mapped", [12510, 12523, 12463]], [[13127, 13127], "mapped", [12510, 12531, 12471, 12519, 12531]], [[13128, 13128], "mapped", [12511, 12463, 12525, 12531]], [[13129, 13129], "mapped", [12511, 12522]], [[13130, 13130], "mapped", [12511, 12522, 12496, 12540, 12523]], [[13131, 13131], "mapped", [12513, 12460]], [[13132, 13132], "mapped", [12513, 12460, 12488, 12531]], [[13133, 13133], "mapped", [12513, 12540, 12488, 12523]], [[13134, 13134], "mapped", [12516, 12540, 12489]], [[13135, 13135], "mapped", [12516, 12540, 12523]], [[13136, 13136], "mapped", [12518, 12450, 12531]], [[13137, 13137], "mapped", [12522, 12483, 12488, 12523]], [[13138, 13138], "mapped", [12522, 12521]], [[13139, 13139], "mapped", [12523, 12500, 12540]], [[13140, 13140], "mapped", [12523, 12540, 12502, 12523]], [[13141, 13141], "mapped", [12524, 12512]], [[13142, 13142], "mapped", [12524, 12531, 12488, 12466, 12531]], [[13143, 13143], "mapped", [12527, 12483, 12488]], [[13144, 13144], "mapped", [48, 28857]], [[13145, 13145], "mapped", [49, 28857]], [[13146, 13146], "mapped", [50, 28857]], [[13147, 13147], "mapped", [51, 28857]], [[13148, 13148], "mapped", [52, 28857]], [[13149, 13149], "mapped", [53, 28857]], [[13150, 13150], "mapped", [54, 28857]], [[13151, 13151], "mapped", [55, 28857]], [[13152, 13152], "mapped", [56, 28857]], [[13153, 13153], "mapped", [57, 28857]], [[13154, 13154], "mapped", [49, 48, 28857]], [[13155, 13155], "mapped", [49, 49, 28857]], [[13156, 13156], "mapped", [49, 50, 28857]], [[13157, 13157], "mapped", [49, 51, 28857]], [[13158, 13158], "mapped", [49, 52, 28857]], [[13159, 13159], "mapped", [49, 53, 28857]], [[13160, 13160], "mapped", [49, 54, 28857]], [[13161, 13161], "mapped", [49, 55, 28857]], [[13162, 13162], "mapped", [49, 56, 28857]], [[13163, 13163], "mapped", [49, 57, 28857]], [[13164, 13164], "mapped", [50, 48, 28857]], [[13165, 13165], "mapped", [50, 49, 28857]], [[13166, 13166], "mapped", [50, 50, 28857]], [[13167, 13167], "mapped", [50, 51, 28857]], [[13168, 13168], "mapped", [50, 52, 28857]], [[13169, 13169], "mapped", [104, 112, 97]], [[13170, 13170], "mapped", [100, 97]], [[13171, 13171], "mapped", [97, 117]], [[13172, 13172], "mapped", [98, 97, 114]], [[13173, 13173], "mapped", [111, 118]], [[13174, 13174], "mapped", [112, 99]], [[13175, 13175], "mapped", [100, 109]], [[13176, 13176], "mapped", [100, 109, 50]], [[13177, 13177], "mapped", [100, 109, 51]], [[13178, 13178], "mapped", [105, 117]], [[13179, 13179], "mapped", [24179, 25104]], [[13180, 13180], "mapped", [26157, 21644]], [[13181, 13181], "mapped", [22823, 27491]], [[13182, 13182], "mapped", [26126, 27835]], [[13183, 13183], "mapped", [26666, 24335, 20250, 31038]], [[13184, 13184], "mapped", [112, 97]], [[13185, 13185], "mapped", [110, 97]], [[13186, 13186], "mapped", [956, 97]], [[13187, 13187], "mapped", [109, 97]], [[13188, 13188], "mapped", [107, 97]], [[13189, 13189], "mapped", [107, 98]], [[13190, 13190], "mapped", [109, 98]], [[13191, 13191], "mapped", [103, 98]], [[13192, 13192], "mapped", [99, 97, 108]], [[13193, 13193], "mapped", [107, 99, 97, 108]], [[13194, 13194], "mapped", [112, 102]], [[13195, 13195], "mapped", [110, 102]], [[13196, 13196], "mapped", [956, 102]], [[13197, 13197], "mapped", [956, 103]], [[13198, 13198], "mapped", [109, 103]], [[13199, 13199], "mapped", [107, 103]], [[13200, 13200], "mapped", [104, 122]], [[13201, 13201], "mapped", [107, 104, 122]], [[13202, 13202], "mapped", [109, 104, 122]], [[13203, 13203], "mapped", [103, 104, 122]], [[13204, 13204], "mapped", [116, 104, 122]], [[13205, 13205], "mapped", [956, 108]], [[13206, 13206], "mapped", [109, 108]], [[13207, 13207], "mapped", [100, 108]], [[13208, 13208], "mapped", [107, 108]], [[13209, 13209], "mapped", [102, 109]], [[13210, 13210], "mapped", [110, 109]], [[13211, 13211], "mapped", [956, 109]], [[13212, 13212], "mapped", [109, 109]], [[13213, 13213], "mapped", [99, 109]], [[13214, 13214], "mapped", [107, 109]], [[13215, 13215], "mapped", [109, 109, 50]], [[13216, 13216], "mapped", [99, 109, 50]], [[13217, 13217], "mapped", [109, 50]], [[13218, 13218], "mapped", [107, 109, 50]], [[13219, 13219], "mapped", [109, 109, 51]], [[13220, 13220], "mapped", [99, 109, 51]], [[13221, 13221], "mapped", [109, 51]], [[13222, 13222], "mapped", [107, 109, 51]], [[13223, 13223], "mapped", [109, 8725, 115]], [[13224, 13224], "mapped", [109, 8725, 115, 50]], [[13225, 13225], "mapped", [112, 97]], [[13226, 13226], "mapped", [107, 112, 97]], [[13227, 13227], "mapped", [109, 112, 97]], [[13228, 13228], "mapped", [103, 112, 97]], [[13229, 13229], "mapped", [114, 97, 100]], [[13230, 13230], "mapped", [114, 97, 100, 8725, 115]], [[13231, 13231], "mapped", [114, 97, 100, 8725, 115, 50]], [[13232, 13232], "mapped", [112, 115]], [[13233, 13233], "mapped", [110, 115]], [[13234, 13234], "mapped", [956, 115]], [[13235, 13235], "mapped", [109, 115]], [[13236, 13236], "mapped", [112, 118]], [[13237, 13237], "mapped", [110, 118]], [[13238, 13238], "mapped", [956, 118]], [[13239, 13239], "mapped", [109, 118]], [[13240, 13240], "mapped", [107, 118]], [[13241, 13241], "mapped", [109, 118]], [[13242, 13242], "mapped", [112, 119]], [[13243, 13243], "mapped", [110, 119]], [[13244, 13244], "mapped", [956, 119]], [[13245, 13245], "mapped", [109, 119]], [[13246, 13246], "mapped", [107, 119]], [[13247, 13247], "mapped", [109, 119]], [[13248, 13248], "mapped", [107, 969]], [[13249, 13249], "mapped", [109, 969]], [[13250, 13250], "disallowed"], [[13251, 13251], "mapped", [98, 113]], [[13252, 13252], "mapped", [99, 99]], [[13253, 13253], "mapped", [99, 100]], [[13254, 13254], "mapped", [99, 8725, 107, 103]], [[13255, 13255], "disallowed"], [[13256, 13256], "mapped", [100, 98]], [[13257, 13257], "mapped", [103, 121]], [[13258, 13258], "mapped", [104, 97]], [[13259, 13259], "mapped", [104, 112]], [[13260, 13260], "mapped", [105, 110]], [[13261, 13261], "mapped", [107, 107]], [[13262, 13262], "mapped", [107, 109]], [[13263, 13263], "mapped", [107, 116]], [[13264, 13264], "mapped", [108, 109]], [[13265, 13265], "mapped", [108, 110]], [[13266, 13266], "mapped", [108, 111, 103]], [[13267, 13267], "mapped", [108, 120]], [[13268, 13268], "mapped", [109, 98]], [[13269, 13269], "mapped", [109, 105, 108]], [[13270, 13270], "mapped", [109, 111, 108]], [[13271, 13271], "mapped", [112, 104]], [[13272, 13272], "disallowed"], [[13273, 13273], "mapped", [112, 112, 109]], [[13274, 13274], "mapped", [112, 114]], [[13275, 13275], "mapped", [115, 114]], [[13276, 13276], "mapped", [115, 118]], [[13277, 13277], "mapped", [119, 98]], [[13278, 13278], "mapped", [118, 8725, 109]], [[13279, 13279], "mapped", [97, 8725, 109]], [[13280, 13280], "mapped", [49, 26085]], [[13281, 13281], "mapped", [50, 26085]], [[13282, 13282], "mapped", [51, 26085]], [[13283, 13283], "mapped", [52, 26085]], [[13284, 13284], "mapped", [53, 26085]], [[13285, 13285], "mapped", [54, 26085]], [[13286, 13286], "mapped", [55, 26085]], [[13287, 13287], "mapped", [56, 26085]], [[13288, 13288], "mapped", [57, 26085]], [[13289, 13289], "mapped", [49, 48, 26085]], [[13290, 13290], "mapped", [49, 49, 26085]], [[13291, 13291], "mapped", [49, 50, 26085]], [[13292, 13292], "mapped", [49, 51, 26085]], [[13293, 13293], "mapped", [49, 52, 26085]], [[13294, 13294], "mapped", [49, 53, 26085]], [[13295, 13295], "mapped", [49, 54, 26085]], [[13296, 13296], "mapped", [49, 55, 26085]], [[13297, 13297], "mapped", [49, 56, 26085]], [[13298, 13298], "mapped", [49, 57, 26085]], [[13299, 13299], "mapped", [50, 48, 26085]], [[13300, 13300], "mapped", [50, 49, 26085]], [[13301, 13301], "mapped", [50, 50, 26085]], [[13302, 13302], "mapped", [50, 51, 26085]], [[13303, 13303], "mapped", [50, 52, 26085]], [[13304, 13304], "mapped", [50, 53, 26085]], [[13305, 13305], "mapped", [50, 54, 26085]], [[13306, 13306], "mapped", [50, 55, 26085]], [[13307, 13307], "mapped", [50, 56, 26085]], [[13308, 13308], "mapped", [50, 57, 26085]], [[13309, 13309], "mapped", [51, 48, 26085]], [[13310, 13310], "mapped", [51, 49, 26085]], [[13311, 13311], "mapped", [103, 97, 108]], [[13312, 19893], "valid"], [[19894, 19903], "disallowed"], [[19904, 19967], "valid", [], "NV8"], [[19968, 40869], "valid"], [[40870, 40891], "valid"], [[40892, 40899], "valid"], [[40900, 40907], "valid"], [[40908, 40908], "valid"], [[40909, 40917], "valid"], [[40918, 40959], "disallowed"], [[40960, 42124], "valid"], [[42125, 42127], "disallowed"], [[42128, 42145], "valid", [], "NV8"], [[42146, 42147], "valid", [], "NV8"], [[42148, 42163], "valid", [], "NV8"], [[42164, 42164], "valid", [], "NV8"], [[42165, 42176], "valid", [], "NV8"], [[42177, 42177], "valid", [], "NV8"], [[42178, 42180], "valid", [], "NV8"], [[42181, 42181], "valid", [], "NV8"], [[42182, 42182], "valid", [], "NV8"], [[42183, 42191], "disallowed"], [[42192, 42237], "valid"], [[42238, 42239], "valid", [], "NV8"], [[42240, 42508], "valid"], [[42509, 42511], "valid", [], "NV8"], [[42512, 42539], "valid"], [[42540, 42559], "disallowed"], [[42560, 42560], "mapped", [42561]], [[42561, 42561], "valid"], [[42562, 42562], "mapped", [42563]], [[42563, 42563], "valid"], [[42564, 42564], "mapped", [42565]], [[42565, 42565], "valid"], [[42566, 42566], "mapped", [42567]], [[42567, 42567], "valid"], [[42568, 42568], "mapped", [42569]], [[42569, 42569], "valid"], [[42570, 42570], "mapped", [42571]], [[42571, 42571], "valid"], [[42572, 42572], "mapped", [42573]], [[42573, 42573], "valid"], [[42574, 42574], "mapped", [42575]], [[42575, 42575], "valid"], [[42576, 42576], "mapped", [42577]], [[42577, 42577], "valid"], [[42578, 42578], "mapped", [42579]], [[42579, 42579], "valid"], [[42580, 42580], "mapped", [42581]], [[42581, 42581], "valid"], [[42582, 42582], "mapped", [42583]], [[42583, 42583], "valid"], [[42584, 42584], "mapped", [42585]], [[42585, 42585], "valid"], [[42586, 42586], "mapped", [42587]], [[42587, 42587], "valid"], [[42588, 42588], "mapped", [42589]], [[42589, 42589], "valid"], [[42590, 42590], "mapped", [42591]], [[42591, 42591], "valid"], [[42592, 42592], "mapped", [42593]], [[42593, 42593], "valid"], [[42594, 42594], "mapped", [42595]], [[42595, 42595], "valid"], [[42596, 42596], "mapped", [42597]], [[42597, 42597], "valid"], [[42598, 42598], "mapped", [42599]], [[42599, 42599], "valid"], [[42600, 42600], "mapped", [42601]], [[42601, 42601], "valid"], [[42602, 42602], "mapped", [42603]], [[42603, 42603], "valid"], [[42604, 42604], "mapped", [42605]], [[42605, 42607], "valid"], [[42608, 42611], "valid", [], "NV8"], [[42612, 42619], "valid"], [[42620, 42621], "valid"], [[42622, 42622], "valid", [], "NV8"], [[42623, 42623], "valid"], [[42624, 42624], "mapped", [42625]], [[42625, 42625], "valid"], [[42626, 42626], "mapped", [42627]], [[42627, 42627], "valid"], [[42628, 42628], "mapped", [42629]], [[42629, 42629], "valid"], [[42630, 42630], "mapped", [42631]], [[42631, 42631], "valid"], [[42632, 42632], "mapped", [42633]], [[42633, 42633], "valid"], [[42634, 42634], "mapped", [42635]], [[42635, 42635], "valid"], [[42636, 42636], "mapped", [42637]], [[42637, 42637], "valid"], [[42638, 42638], "mapped", [42639]], [[42639, 42639], "valid"], [[42640, 42640], "mapped", [42641]], [[42641, 42641], "valid"], [[42642, 42642], "mapped", [42643]], [[42643, 42643], "valid"], [[42644, 42644], "mapped", [42645]], [[42645, 42645], "valid"], [[42646, 42646], "mapped", [42647]], [[42647, 42647], "valid"], [[42648, 42648], "mapped", [42649]], [[42649, 42649], "valid"], [[42650, 42650], "mapped", [42651]], [[42651, 42651], "valid"], [[42652, 42652], "mapped", [1098]], [[42653, 42653], "mapped", [1100]], [[42654, 42654], "valid"], [[42655, 42655], "valid"], [[42656, 42725], "valid"], [[42726, 42735], "valid", [], "NV8"], [[42736, 42737], "valid"], [[42738, 42743], "valid", [], "NV8"], [[42744, 42751], "disallowed"], [[42752, 42774], "valid", [], "NV8"], [[42775, 42778], "valid"], [[42779, 42783], "valid"], [[42784, 42785], "valid", [], "NV8"], [[42786, 42786], "mapped", [42787]], [[42787, 42787], "valid"], [[42788, 42788], "mapped", [42789]], [[42789, 42789], "valid"], [[42790, 42790], "mapped", [42791]], [[42791, 42791], "valid"], [[42792, 42792], "mapped", [42793]], [[42793, 42793], "valid"], [[42794, 42794], "mapped", [42795]], [[42795, 42795], "valid"], [[42796, 42796], "mapped", [42797]], [[42797, 42797], "valid"], [[42798, 42798], "mapped", [42799]], [[42799, 42801], "valid"], [[42802, 42802], "mapped", [42803]], [[42803, 42803], "valid"], [[42804, 42804], "mapped", [42805]], [[42805, 42805], "valid"], [[42806, 42806], "mapped", [42807]], [[42807, 42807], "valid"], [[42808, 42808], "mapped", [42809]], [[42809, 42809], "valid"], [[42810, 42810], "mapped", [42811]], [[42811, 42811], "valid"], [[42812, 42812], "mapped", [42813]], [[42813, 42813], "valid"], [[42814, 42814], "mapped", [42815]], [[42815, 42815], "valid"], [[42816, 42816], "mapped", [42817]], [[42817, 42817], "valid"], [[42818, 42818], "mapped", [42819]], [[42819, 42819], "valid"], [[42820, 42820], "mapped", [42821]], [[42821, 42821], "valid"], [[42822, 42822], "mapped", [42823]], [[42823, 42823], "valid"], [[42824, 42824], "mapped", [42825]], [[42825, 42825], "valid"], [[42826, 42826], "mapped", [42827]], [[42827, 42827], "valid"], [[42828, 42828], "mapped", [42829]], [[42829, 42829], "valid"], [[42830, 42830], "mapped", [42831]], [[42831, 42831], "valid"], [[42832, 42832], "mapped", [42833]], [[42833, 42833], "valid"], [[42834, 42834], "mapped", [42835]], [[42835, 42835], "valid"], [[42836, 42836], "mapped", [42837]], [[42837, 42837], "valid"], [[42838, 42838], "mapped", [42839]], [[42839, 42839], "valid"], [[42840, 42840], "mapped", [42841]], [[42841, 42841], "valid"], [[42842, 42842], "mapped", [42843]], [[42843, 42843], "valid"], [[42844, 42844], "mapped", [42845]], [[42845, 42845], "valid"], [[42846, 42846], "mapped", [42847]], [[42847, 42847], "valid"], [[42848, 42848], "mapped", [42849]], [[42849, 42849], "valid"], [[42850, 42850], "mapped", [42851]], [[42851, 42851], "valid"], [[42852, 42852], "mapped", [42853]], [[42853, 42853], "valid"], [[42854, 42854], "mapped", [42855]], [[42855, 42855], "valid"], [[42856, 42856], "mapped", [42857]], [[42857, 42857], "valid"], [[42858, 42858], "mapped", [42859]], [[42859, 42859], "valid"], [[42860, 42860], "mapped", [42861]], [[42861, 42861], "valid"], [[42862, 42862], "mapped", [42863]], [[42863, 42863], "valid"], [[42864, 42864], "mapped", [42863]], [[42865, 42872], "valid"], [[42873, 42873], "mapped", [42874]], [[42874, 42874], "valid"], [[42875, 42875], "mapped", [42876]], [[42876, 42876], "valid"], [[42877, 42877], "mapped", [7545]], [[42878, 42878], "mapped", [42879]], [[42879, 42879], "valid"], [[42880, 42880], "mapped", [42881]], [[42881, 42881], "valid"], [[42882, 42882], "mapped", [42883]], [[42883, 42883], "valid"], [[42884, 42884], "mapped", [42885]], [[42885, 42885], "valid"], [[42886, 42886], "mapped", [42887]], [[42887, 42888], "valid"], [[42889, 42890], "valid", [], "NV8"], [[42891, 42891], "mapped", [42892]], [[42892, 42892], "valid"], [[42893, 42893], "mapped", [613]], [[42894, 42894], "valid"], [[42895, 42895], "valid"], [[42896, 42896], "mapped", [42897]], [[42897, 42897], "valid"], [[42898, 42898], "mapped", [42899]], [[42899, 42899], "valid"], [[42900, 42901], "valid"], [[42902, 42902], "mapped", [42903]], [[42903, 42903], "valid"], [[42904, 42904], "mapped", [42905]], [[42905, 42905], "valid"], [[42906, 42906], "mapped", [42907]], [[42907, 42907], "valid"], [[42908, 42908], "mapped", [42909]], [[42909, 42909], "valid"], [[42910, 42910], "mapped", [42911]], [[42911, 42911], "valid"], [[42912, 42912], "mapped", [42913]], [[42913, 42913], "valid"], [[42914, 42914], "mapped", [42915]], [[42915, 42915], "valid"], [[42916, 42916], "mapped", [42917]], [[42917, 42917], "valid"], [[42918, 42918], "mapped", [42919]], [[42919, 42919], "valid"], [[42920, 42920], "mapped", [42921]], [[42921, 42921], "valid"], [[42922, 42922], "mapped", [614]], [[42923, 42923], "mapped", [604]], [[42924, 42924], "mapped", [609]], [[42925, 42925], "mapped", [620]], [[42926, 42927], "disallowed"], [[42928, 42928], "mapped", [670]], [[42929, 42929], "mapped", [647]], [[42930, 42930], "mapped", [669]], [[42931, 42931], "mapped", [43859]], [[42932, 42932], "mapped", [42933]], [[42933, 42933], "valid"], [[42934, 42934], "mapped", [42935]], [[42935, 42935], "valid"], [[42936, 42998], "disallowed"], [[42999, 42999], "valid"], [[43e3, 43e3], "mapped", [295]], [[43001, 43001], "mapped", [339]], [[43002, 43002], "valid"], [[43003, 43007], "valid"], [[43008, 43047], "valid"], [[43048, 43051], "valid", [], "NV8"], [[43052, 43055], "disallowed"], [[43056, 43065], "valid", [], "NV8"], [[43066, 43071], "disallowed"], [[43072, 43123], "valid"], [[43124, 43127], "valid", [], "NV8"], [[43128, 43135], "disallowed"], [[43136, 43204], "valid"], [[43205, 43213], "disallowed"], [[43214, 43215], "valid", [], "NV8"], [[43216, 43225], "valid"], [[43226, 43231], "disallowed"], [[43232, 43255], "valid"], [[43256, 43258], "valid", [], "NV8"], [[43259, 43259], "valid"], [[43260, 43260], "valid", [], "NV8"], [[43261, 43261], "valid"], [[43262, 43263], "disallowed"], [[43264, 43309], "valid"], [[43310, 43311], "valid", [], "NV8"], [[43312, 43347], "valid"], [[43348, 43358], "disallowed"], [[43359, 43359], "valid", [], "NV8"], [[43360, 43388], "valid", [], "NV8"], [[43389, 43391], "disallowed"], [[43392, 43456], "valid"], [[43457, 43469], "valid", [], "NV8"], [[43470, 43470], "disallowed"], [[43471, 43481], "valid"], [[43482, 43485], "disallowed"], [[43486, 43487], "valid", [], "NV8"], [[43488, 43518], "valid"], [[43519, 43519], "disallowed"], [[43520, 43574], "valid"], [[43575, 43583], "disallowed"], [[43584, 43597], "valid"], [[43598, 43599], "disallowed"], [[43600, 43609], "valid"], [[43610, 43611], "disallowed"], [[43612, 43615], "valid", [], "NV8"], [[43616, 43638], "valid"], [[43639, 43641], "valid", [], "NV8"], [[43642, 43643], "valid"], [[43644, 43647], "valid"], [[43648, 43714], "valid"], [[43715, 43738], "disallowed"], [[43739, 43741], "valid"], [[43742, 43743], "valid", [], "NV8"], [[43744, 43759], "valid"], [[43760, 43761], "valid", [], "NV8"], [[43762, 43766], "valid"], [[43767, 43776], "disallowed"], [[43777, 43782], "valid"], [[43783, 43784], "disallowed"], [[43785, 43790], "valid"], [[43791, 43792], "disallowed"], [[43793, 43798], "valid"], [[43799, 43807], "disallowed"], [[43808, 43814], "valid"], [[43815, 43815], "disallowed"], [[43816, 43822], "valid"], [[43823, 43823], "disallowed"], [[43824, 43866], "valid"], [[43867, 43867], "valid", [], "NV8"], [[43868, 43868], "mapped", [42791]], [[43869, 43869], "mapped", [43831]], [[43870, 43870], "mapped", [619]], [[43871, 43871], "mapped", [43858]], [[43872, 43875], "valid"], [[43876, 43877], "valid"], [[43878, 43887], "disallowed"], [[43888, 43888], "mapped", [5024]], [[43889, 43889], "mapped", [5025]], [[43890, 43890], "mapped", [5026]], [[43891, 43891], "mapped", [5027]], [[43892, 43892], "mapped", [5028]], [[43893, 43893], "mapped", [5029]], [[43894, 43894], "mapped", [5030]], [[43895, 43895], "mapped", [5031]], [[43896, 43896], "mapped", [5032]], [[43897, 43897], "mapped", [5033]], [[43898, 43898], "mapped", [5034]], [[43899, 43899], "mapped", [5035]], [[43900, 43900], "mapped", [5036]], [[43901, 43901], "mapped", [5037]], [[43902, 43902], "mapped", [5038]], [[43903, 43903], "mapped", [5039]], [[43904, 43904], "mapped", [5040]], [[43905, 43905], "mapped", [5041]], [[43906, 43906], "mapped", [5042]], [[43907, 43907], "mapped", [5043]], [[43908, 43908], "mapped", [5044]], [[43909, 43909], "mapped", [5045]], [[43910, 43910], "mapped", [5046]], [[43911, 43911], "mapped", [5047]], [[43912, 43912], "mapped", [5048]], [[43913, 43913], "mapped", [5049]], [[43914, 43914], "mapped", [5050]], [[43915, 43915], "mapped", [5051]], [[43916, 43916], "mapped", [5052]], [[43917, 43917], "mapped", [5053]], [[43918, 43918], "mapped", [5054]], [[43919, 43919], "mapped", [5055]], [[43920, 43920], "mapped", [5056]], [[43921, 43921], "mapped", [5057]], [[43922, 43922], "mapped", [5058]], [[43923, 43923], "mapped", [5059]], [[43924, 43924], "mapped", [5060]], [[43925, 43925], "mapped", [5061]], [[43926, 43926], "mapped", [5062]], [[43927, 43927], "mapped", [5063]], [[43928, 43928], "mapped", [5064]], [[43929, 43929], "mapped", [5065]], [[43930, 43930], "mapped", [5066]], [[43931, 43931], "mapped", [5067]], [[43932, 43932], "mapped", [5068]], [[43933, 43933], "mapped", [5069]], [[43934, 43934], "mapped", [5070]], [[43935, 43935], "mapped", [5071]], [[43936, 43936], "mapped", [5072]], [[43937, 43937], "mapped", [5073]], [[43938, 43938], "mapped", [5074]], [[43939, 43939], "mapped", [5075]], [[43940, 43940], "mapped", [5076]], [[43941, 43941], "mapped", [5077]], [[43942, 43942], "mapped", [5078]], [[43943, 43943], "mapped", [5079]], [[43944, 43944], "mapped", [5080]], [[43945, 43945], "mapped", [5081]], [[43946, 43946], "mapped", [5082]], [[43947, 43947], "mapped", [5083]], [[43948, 43948], "mapped", [5084]], [[43949, 43949], "mapped", [5085]], [[43950, 43950], "mapped", [5086]], [[43951, 43951], "mapped", [5087]], [[43952, 43952], "mapped", [5088]], [[43953, 43953], "mapped", [5089]], [[43954, 43954], "mapped", [5090]], [[43955, 43955], "mapped", [5091]], [[43956, 43956], "mapped", [5092]], [[43957, 43957], "mapped", [5093]], [[43958, 43958], "mapped", [5094]], [[43959, 43959], "mapped", [5095]], [[43960, 43960], "mapped", [5096]], [[43961, 43961], "mapped", [5097]], [[43962, 43962], "mapped", [5098]], [[43963, 43963], "mapped", [5099]], [[43964, 43964], "mapped", [5100]], [[43965, 43965], "mapped", [5101]], [[43966, 43966], "mapped", [5102]], [[43967, 43967], "mapped", [5103]], [[43968, 44010], "valid"], [[44011, 44011], "valid", [], "NV8"], [[44012, 44013], "valid"], [[44014, 44015], "disallowed"], [[44016, 44025], "valid"], [[44026, 44031], "disallowed"], [[44032, 55203], "valid"], [[55204, 55215], "disallowed"], [[55216, 55238], "valid", [], "NV8"], [[55239, 55242], "disallowed"], [[55243, 55291], "valid", [], "NV8"], [[55292, 55295], "disallowed"], [[55296, 57343], "disallowed"], [[57344, 63743], "disallowed"], [[63744, 63744], "mapped", [35912]], [[63745, 63745], "mapped", [26356]], [[63746, 63746], "mapped", [36554]], [[63747, 63747], "mapped", [36040]], [[63748, 63748], "mapped", [28369]], [[63749, 63749], "mapped", [20018]], [[63750, 63750], "mapped", [21477]], [[63751, 63752], "mapped", [40860]], [[63753, 63753], "mapped", [22865]], [[63754, 63754], "mapped", [37329]], [[63755, 63755], "mapped", [21895]], [[63756, 63756], "mapped", [22856]], [[63757, 63757], "mapped", [25078]], [[63758, 63758], "mapped", [30313]], [[63759, 63759], "mapped", [32645]], [[63760, 63760], "mapped", [34367]], [[63761, 63761], "mapped", [34746]], [[63762, 63762], "mapped", [35064]], [[63763, 63763], "mapped", [37007]], [[63764, 63764], "mapped", [27138]], [[63765, 63765], "mapped", [27931]], [[63766, 63766], "mapped", [28889]], [[63767, 63767], "mapped", [29662]], [[63768, 63768], "mapped", [33853]], [[63769, 63769], "mapped", [37226]], [[63770, 63770], "mapped", [39409]], [[63771, 63771], "mapped", [20098]], [[63772, 63772], "mapped", [21365]], [[63773, 63773], "mapped", [27396]], [[63774, 63774], "mapped", [29211]], [[63775, 63775], "mapped", [34349]], [[63776, 63776], "mapped", [40478]], [[63777, 63777], "mapped", [23888]], [[63778, 63778], "mapped", [28651]], [[63779, 63779], "mapped", [34253]], [[63780, 63780], "mapped", [35172]], [[63781, 63781], "mapped", [25289]], [[63782, 63782], "mapped", [33240]], [[63783, 63783], "mapped", [34847]], [[63784, 63784], "mapped", [24266]], [[63785, 63785], "mapped", [26391]], [[63786, 63786], "mapped", [28010]], [[63787, 63787], "mapped", [29436]], [[63788, 63788], "mapped", [37070]], [[63789, 63789], "mapped", [20358]], [[63790, 63790], "mapped", [20919]], [[63791, 63791], "mapped", [21214]], [[63792, 63792], "mapped", [25796]], [[63793, 63793], "mapped", [27347]], [[63794, 63794], "mapped", [29200]], [[63795, 63795], "mapped", [30439]], [[63796, 63796], "mapped", [32769]], [[63797, 63797], "mapped", [34310]], [[63798, 63798], "mapped", [34396]], [[63799, 63799], "mapped", [36335]], [[63800, 63800], "mapped", [38706]], [[63801, 63801], "mapped", [39791]], [[63802, 63802], "mapped", [40442]], [[63803, 63803], "mapped", [30860]], [[63804, 63804], "mapped", [31103]], [[63805, 63805], "mapped", [32160]], [[63806, 63806], "mapped", [33737]], [[63807, 63807], "mapped", [37636]], [[63808, 63808], "mapped", [40575]], [[63809, 63809], "mapped", [35542]], [[63810, 63810], "mapped", [22751]], [[63811, 63811], "mapped", [24324]], [[63812, 63812], "mapped", [31840]], [[63813, 63813], "mapped", [32894]], [[63814, 63814], "mapped", [29282]], [[63815, 63815], "mapped", [30922]], [[63816, 63816], "mapped", [36034]], [[63817, 63817], "mapped", [38647]], [[63818, 63818], "mapped", [22744]], [[63819, 63819], "mapped", [23650]], [[63820, 63820], "mapped", [27155]], [[63821, 63821], "mapped", [28122]], [[63822, 63822], "mapped", [28431]], [[63823, 63823], "mapped", [32047]], [[63824, 63824], "mapped", [32311]], [[63825, 63825], "mapped", [38475]], [[63826, 63826], "mapped", [21202]], [[63827, 63827], "mapped", [32907]], [[63828, 63828], "mapped", [20956]], [[63829, 63829], "mapped", [20940]], [[63830, 63830], "mapped", [31260]], [[63831, 63831], "mapped", [32190]], [[63832, 63832], "mapped", [33777]], [[63833, 63833], "mapped", [38517]], [[63834, 63834], "mapped", [35712]], [[63835, 63835], "mapped", [25295]], [[63836, 63836], "mapped", [27138]], [[63837, 63837], "mapped", [35582]], [[63838, 63838], "mapped", [20025]], [[63839, 63839], "mapped", [23527]], [[63840, 63840], "mapped", [24594]], [[63841, 63841], "mapped", [29575]], [[63842, 63842], "mapped", [30064]], [[63843, 63843], "mapped", [21271]], [[63844, 63844], "mapped", [30971]], [[63845, 63845], "mapped", [20415]], [[63846, 63846], "mapped", [24489]], [[63847, 63847], "mapped", [19981]], [[63848, 63848], "mapped", [27852]], [[63849, 63849], "mapped", [25976]], [[63850, 63850], "mapped", [32034]], [[63851, 63851], "mapped", [21443]], [[63852, 63852], "mapped", [22622]], [[63853, 63853], "mapped", [30465]], [[63854, 63854], "mapped", [33865]], [[63855, 63855], "mapped", [35498]], [[63856, 63856], "mapped", [27578]], [[63857, 63857], "mapped", [36784]], [[63858, 63858], "mapped", [27784]], [[63859, 63859], "mapped", [25342]], [[63860, 63860], "mapped", [33509]], [[63861, 63861], "mapped", [25504]], [[63862, 63862], "mapped", [30053]], [[63863, 63863], "mapped", [20142]], [[63864, 63864], "mapped", [20841]], [[63865, 63865], "mapped", [20937]], [[63866, 63866], "mapped", [26753]], [[63867, 63867], "mapped", [31975]], [[63868, 63868], "mapped", [33391]], [[63869, 63869], "mapped", [35538]], [[63870, 63870], "mapped", [37327]], [[63871, 63871], "mapped", [21237]], [[63872, 63872], "mapped", [21570]], [[63873, 63873], "mapped", [22899]], [[63874, 63874], "mapped", [24300]], [[63875, 63875], "mapped", [26053]], [[63876, 63876], "mapped", [28670]], [[63877, 63877], "mapped", [31018]], [[63878, 63878], "mapped", [38317]], [[63879, 63879], "mapped", [39530]], [[63880, 63880], "mapped", [40599]], [[63881, 63881], "mapped", [40654]], [[63882, 63882], "mapped", [21147]], [[63883, 63883], "mapped", [26310]], [[63884, 63884], "mapped", [27511]], [[63885, 63885], "mapped", [36706]], [[63886, 63886], "mapped", [24180]], [[63887, 63887], "mapped", [24976]], [[63888, 63888], "mapped", [25088]], [[63889, 63889], "mapped", [25754]], [[63890, 63890], "mapped", [28451]], [[63891, 63891], "mapped", [29001]], [[63892, 63892], "mapped", [29833]], [[63893, 63893], "mapped", [31178]], [[63894, 63894], "mapped", [32244]], [[63895, 63895], "mapped", [32879]], [[63896, 63896], "mapped", [36646]], [[63897, 63897], "mapped", [34030]], [[63898, 63898], "mapped", [36899]], [[63899, 63899], "mapped", [37706]], [[63900, 63900], "mapped", [21015]], [[63901, 63901], "mapped", [21155]], [[63902, 63902], "mapped", [21693]], [[63903, 63903], "mapped", [28872]], [[63904, 63904], "mapped", [35010]], [[63905, 63905], "mapped", [35498]], [[63906, 63906], "mapped", [24265]], [[63907, 63907], "mapped", [24565]], [[63908, 63908], "mapped", [25467]], [[63909, 63909], "mapped", [27566]], [[63910, 63910], "mapped", [31806]], [[63911, 63911], "mapped", [29557]], [[63912, 63912], "mapped", [20196]], [[63913, 63913], "mapped", [22265]], [[63914, 63914], "mapped", [23527]], [[63915, 63915], "mapped", [23994]], [[63916, 63916], "mapped", [24604]], [[63917, 63917], "mapped", [29618]], [[63918, 63918], "mapped", [29801]], [[63919, 63919], "mapped", [32666]], [[63920, 63920], "mapped", [32838]], [[63921, 63921], "mapped", [37428]], [[63922, 63922], "mapped", [38646]], [[63923, 63923], "mapped", [38728]], [[63924, 63924], "mapped", [38936]], [[63925, 63925], "mapped", [20363]], [[63926, 63926], "mapped", [31150]], [[63927, 63927], "mapped", [37300]], [[63928, 63928], "mapped", [38584]], [[63929, 63929], "mapped", [24801]], [[63930, 63930], "mapped", [20102]], [[63931, 63931], "mapped", [20698]], [[63932, 63932], "mapped", [23534]], [[63933, 63933], "mapped", [23615]], [[63934, 63934], "mapped", [26009]], [[63935, 63935], "mapped", [27138]], [[63936, 63936], "mapped", [29134]], [[63937, 63937], "mapped", [30274]], [[63938, 63938], "mapped", [34044]], [[63939, 63939], "mapped", [36988]], [[63940, 63940], "mapped", [40845]], [[63941, 63941], "mapped", [26248]], [[63942, 63942], "mapped", [38446]], [[63943, 63943], "mapped", [21129]], [[63944, 63944], "mapped", [26491]], [[63945, 63945], "mapped", [26611]], [[63946, 63946], "mapped", [27969]], [[63947, 63947], "mapped", [28316]], [[63948, 63948], "mapped", [29705]], [[63949, 63949], "mapped", [30041]], [[63950, 63950], "mapped", [30827]], [[63951, 63951], "mapped", [32016]], [[63952, 63952], "mapped", [39006]], [[63953, 63953], "mapped", [20845]], [[63954, 63954], "mapped", [25134]], [[63955, 63955], "mapped", [38520]], [[63956, 63956], "mapped", [20523]], [[63957, 63957], "mapped", [23833]], [[63958, 63958], "mapped", [28138]], [[63959, 63959], "mapped", [36650]], [[63960, 63960], "mapped", [24459]], [[63961, 63961], "mapped", [24900]], [[63962, 63962], "mapped", [26647]], [[63963, 63963], "mapped", [29575]], [[63964, 63964], "mapped", [38534]], [[63965, 63965], "mapped", [21033]], [[63966, 63966], "mapped", [21519]], [[63967, 63967], "mapped", [23653]], [[63968, 63968], "mapped", [26131]], [[63969, 63969], "mapped", [26446]], [[63970, 63970], "mapped", [26792]], [[63971, 63971], "mapped", [27877]], [[63972, 63972], "mapped", [29702]], [[63973, 63973], "mapped", [30178]], [[63974, 63974], "mapped", [32633]], [[63975, 63975], "mapped", [35023]], [[63976, 63976], "mapped", [35041]], [[63977, 63977], "mapped", [37324]], [[63978, 63978], "mapped", [38626]], [[63979, 63979], "mapped", [21311]], [[63980, 63980], "mapped", [28346]], [[63981, 63981], "mapped", [21533]], [[63982, 63982], "mapped", [29136]], [[63983, 63983], "mapped", [29848]], [[63984, 63984], "mapped", [34298]], [[63985, 63985], "mapped", [38563]], [[63986, 63986], "mapped", [40023]], [[63987, 63987], "mapped", [40607]], [[63988, 63988], "mapped", [26519]], [[63989, 63989], "mapped", [28107]], [[63990, 63990], "mapped", [33256]], [[63991, 63991], "mapped", [31435]], [[63992, 63992], "mapped", [31520]], [[63993, 63993], "mapped", [31890]], [[63994, 63994], "mapped", [29376]], [[63995, 63995], "mapped", [28825]], [[63996, 63996], "mapped", [35672]], [[63997, 63997], "mapped", [20160]], [[63998, 63998], "mapped", [33590]], [[63999, 63999], "mapped", [21050]], [[64e3, 64e3], "mapped", [20999]], [[64001, 64001], "mapped", [24230]], [[64002, 64002], "mapped", [25299]], [[64003, 64003], "mapped", [31958]], [[64004, 64004], "mapped", [23429]], [[64005, 64005], "mapped", [27934]], [[64006, 64006], "mapped", [26292]], [[64007, 64007], "mapped", [36667]], [[64008, 64008], "mapped", [34892]], [[64009, 64009], "mapped", [38477]], [[64010, 64010], "mapped", [35211]], [[64011, 64011], "mapped", [24275]], [[64012, 64012], "mapped", [20800]], [[64013, 64013], "mapped", [21952]], [[64014, 64015], "valid"], [[64016, 64016], "mapped", [22618]], [[64017, 64017], "valid"], [[64018, 64018], "mapped", [26228]], [[64019, 64020], "valid"], [[64021, 64021], "mapped", [20958]], [[64022, 64022], "mapped", [29482]], [[64023, 64023], "mapped", [30410]], [[64024, 64024], "mapped", [31036]], [[64025, 64025], "mapped", [31070]], [[64026, 64026], "mapped", [31077]], [[64027, 64027], "mapped", [31119]], [[64028, 64028], "mapped", [38742]], [[64029, 64029], "mapped", [31934]], [[64030, 64030], "mapped", [32701]], [[64031, 64031], "valid"], [[64032, 64032], "mapped", [34322]], [[64033, 64033], "valid"], [[64034, 64034], "mapped", [35576]], [[64035, 64036], "valid"], [[64037, 64037], "mapped", [36920]], [[64038, 64038], "mapped", [37117]], [[64039, 64041], "valid"], [[64042, 64042], "mapped", [39151]], [[64043, 64043], "mapped", [39164]], [[64044, 64044], "mapped", [39208]], [[64045, 64045], "mapped", [40372]], [[64046, 64046], "mapped", [37086]], [[64047, 64047], "mapped", [38583]], [[64048, 64048], "mapped", [20398]], [[64049, 64049], "mapped", [20711]], [[64050, 64050], "mapped", [20813]], [[64051, 64051], "mapped", [21193]], [[64052, 64052], "mapped", [21220]], [[64053, 64053], "mapped", [21329]], [[64054, 64054], "mapped", [21917]], [[64055, 64055], "mapped", [22022]], [[64056, 64056], "mapped", [22120]], [[64057, 64057], "mapped", [22592]], [[64058, 64058], "mapped", [22696]], [[64059, 64059], "mapped", [23652]], [[64060, 64060], "mapped", [23662]], [[64061, 64061], "mapped", [24724]], [[64062, 64062], "mapped", [24936]], [[64063, 64063], "mapped", [24974]], [[64064, 64064], "mapped", [25074]], [[64065, 64065], "mapped", [25935]], [[64066, 64066], "mapped", [26082]], [[64067, 64067], "mapped", [26257]], [[64068, 64068], "mapped", [26757]], [[64069, 64069], "mapped", [28023]], [[64070, 64070], "mapped", [28186]], [[64071, 64071], "mapped", [28450]], [[64072, 64072], "mapped", [29038]], [[64073, 64073], "mapped", [29227]], [[64074, 64074], "mapped", [29730]], [[64075, 64075], "mapped", [30865]], [[64076, 64076], "mapped", [31038]], [[64077, 64077], "mapped", [31049]], [[64078, 64078], "mapped", [31048]], [[64079, 64079], "mapped", [31056]], [[64080, 64080], "mapped", [31062]], [[64081, 64081], "mapped", [31069]], [[64082, 64082], "mapped", [31117]], [[64083, 64083], "mapped", [31118]], [[64084, 64084], "mapped", [31296]], [[64085, 64085], "mapped", [31361]], [[64086, 64086], "mapped", [31680]], [[64087, 64087], "mapped", [32244]], [[64088, 64088], "mapped", [32265]], [[64089, 64089], "mapped", [32321]], [[64090, 64090], "mapped", [32626]], [[64091, 64091], "mapped", [32773]], [[64092, 64092], "mapped", [33261]], [[64093, 64094], "mapped", [33401]], [[64095, 64095], "mapped", [33879]], [[64096, 64096], "mapped", [35088]], [[64097, 64097], "mapped", [35222]], [[64098, 64098], "mapped", [35585]], [[64099, 64099], "mapped", [35641]], [[64100, 64100], "mapped", [36051]], [[64101, 64101], "mapped", [36104]], [[64102, 64102], "mapped", [36790]], [[64103, 64103], "mapped", [36920]], [[64104, 64104], "mapped", [38627]], [[64105, 64105], "mapped", [38911]], [[64106, 64106], "mapped", [38971]], [[64107, 64107], "mapped", [24693]], [[64108, 64108], "mapped", [148206]], [[64109, 64109], "mapped", [33304]], [[64110, 64111], "disallowed"], [[64112, 64112], "mapped", [20006]], [[64113, 64113], "mapped", [20917]], [[64114, 64114], "mapped", [20840]], [[64115, 64115], "mapped", [20352]], [[64116, 64116], "mapped", [20805]], [[64117, 64117], "mapped", [20864]], [[64118, 64118], "mapped", [21191]], [[64119, 64119], "mapped", [21242]], [[64120, 64120], "mapped", [21917]], [[64121, 64121], "mapped", [21845]], [[64122, 64122], "mapped", [21913]], [[64123, 64123], "mapped", [21986]], [[64124, 64124], "mapped", [22618]], [[64125, 64125], "mapped", [22707]], [[64126, 64126], "mapped", [22852]], [[64127, 64127], "mapped", [22868]], [[64128, 64128], "mapped", [23138]], [[64129, 64129], "mapped", [23336]], [[64130, 64130], "mapped", [24274]], [[64131, 64131], "mapped", [24281]], [[64132, 64132], "mapped", [24425]], [[64133, 64133], "mapped", [24493]], [[64134, 64134], "mapped", [24792]], [[64135, 64135], "mapped", [24910]], [[64136, 64136], "mapped", [24840]], [[64137, 64137], "mapped", [24974]], [[64138, 64138], "mapped", [24928]], [[64139, 64139], "mapped", [25074]], [[64140, 64140], "mapped", [25140]], [[64141, 64141], "mapped", [25540]], [[64142, 64142], "mapped", [25628]], [[64143, 64143], "mapped", [25682]], [[64144, 64144], "mapped", [25942]], [[64145, 64145], "mapped", [26228]], [[64146, 64146], "mapped", [26391]], [[64147, 64147], "mapped", [26395]], [[64148, 64148], "mapped", [26454]], [[64149, 64149], "mapped", [27513]], [[64150, 64150], "mapped", [27578]], [[64151, 64151], "mapped", [27969]], [[64152, 64152], "mapped", [28379]], [[64153, 64153], "mapped", [28363]], [[64154, 64154], "mapped", [28450]], [[64155, 64155], "mapped", [28702]], [[64156, 64156], "mapped", [29038]], [[64157, 64157], "mapped", [30631]], [[64158, 64158], "mapped", [29237]], [[64159, 64159], "mapped", [29359]], [[64160, 64160], "mapped", [29482]], [[64161, 64161], "mapped", [29809]], [[64162, 64162], "mapped", [29958]], [[64163, 64163], "mapped", [30011]], [[64164, 64164], "mapped", [30237]], [[64165, 64165], "mapped", [30239]], [[64166, 64166], "mapped", [30410]], [[64167, 64167], "mapped", [30427]], [[64168, 64168], "mapped", [30452]], [[64169, 64169], "mapped", [30538]], [[64170, 64170], "mapped", [30528]], [[64171, 64171], "mapped", [30924]], [[64172, 64172], "mapped", [31409]], [[64173, 64173], "mapped", [31680]], [[64174, 64174], "mapped", [31867]], [[64175, 64175], "mapped", [32091]], [[64176, 64176], "mapped", [32244]], [[64177, 64177], "mapped", [32574]], [[64178, 64178], "mapped", [32773]], [[64179, 64179], "mapped", [33618]], [[64180, 64180], "mapped", [33775]], [[64181, 64181], "mapped", [34681]], [[64182, 64182], "mapped", [35137]], [[64183, 64183], "mapped", [35206]], [[64184, 64184], "mapped", [35222]], [[64185, 64185], "mapped", [35519]], [[64186, 64186], "mapped", [35576]], [[64187, 64187], "mapped", [35531]], [[64188, 64188], "mapped", [35585]], [[64189, 64189], "mapped", [35582]], [[64190, 64190], "mapped", [35565]], [[64191, 64191], "mapped", [35641]], [[64192, 64192], "mapped", [35722]], [[64193, 64193], "mapped", [36104]], [[64194, 64194], "mapped", [36664]], [[64195, 64195], "mapped", [36978]], [[64196, 64196], "mapped", [37273]], [[64197, 64197], "mapped", [37494]], [[64198, 64198], "mapped", [38524]], [[64199, 64199], "mapped", [38627]], [[64200, 64200], "mapped", [38742]], [[64201, 64201], "mapped", [38875]], [[64202, 64202], "mapped", [38911]], [[64203, 64203], "mapped", [38923]], [[64204, 64204], "mapped", [38971]], [[64205, 64205], "mapped", [39698]], [[64206, 64206], "mapped", [40860]], [[64207, 64207], "mapped", [141386]], [[64208, 64208], "mapped", [141380]], [[64209, 64209], "mapped", [144341]], [[64210, 64210], "mapped", [15261]], [[64211, 64211], "mapped", [16408]], [[64212, 64212], "mapped", [16441]], [[64213, 64213], "mapped", [152137]], [[64214, 64214], "mapped", [154832]], [[64215, 64215], "mapped", [163539]], [[64216, 64216], "mapped", [40771]], [[64217, 64217], "mapped", [40846]], [[64218, 64255], "disallowed"], [[64256, 64256], "mapped", [102, 102]], [[64257, 64257], "mapped", [102, 105]], [[64258, 64258], "mapped", [102, 108]], [[64259, 64259], "mapped", [102, 102, 105]], [[64260, 64260], "mapped", [102, 102, 108]], [[64261, 64262], "mapped", [115, 116]], [[64263, 64274], "disallowed"], [[64275, 64275], "mapped", [1396, 1398]], [[64276, 64276], "mapped", [1396, 1381]], [[64277, 64277], "mapped", [1396, 1387]], [[64278, 64278], "mapped", [1406, 1398]], [[64279, 64279], "mapped", [1396, 1389]], [[64280, 64284], "disallowed"], [[64285, 64285], "mapped", [1497, 1460]], [[64286, 64286], "valid"], [[64287, 64287], "mapped", [1522, 1463]], [[64288, 64288], "mapped", [1506]], [[64289, 64289], "mapped", [1488]], [[64290, 64290], "mapped", [1491]], [[64291, 64291], "mapped", [1492]], [[64292, 64292], "mapped", [1499]], [[64293, 64293], "mapped", [1500]], [[64294, 64294], "mapped", [1501]], [[64295, 64295], "mapped", [1512]], [[64296, 64296], "mapped", [1514]], [[64297, 64297], "disallowed_STD3_mapped", [43]], [[64298, 64298], "mapped", [1513, 1473]], [[64299, 64299], "mapped", [1513, 1474]], [[64300, 64300], "mapped", [1513, 1468, 1473]], [[64301, 64301], "mapped", [1513, 1468, 1474]], [[64302, 64302], "mapped", [1488, 1463]], [[64303, 64303], "mapped", [1488, 1464]], [[64304, 64304], "mapped", [1488, 1468]], [[64305, 64305], "mapped", [1489, 1468]], [[64306, 64306], "mapped", [1490, 1468]], [[64307, 64307], "mapped", [1491, 1468]], [[64308, 64308], "mapped", [1492, 1468]], [[64309, 64309], "mapped", [1493, 1468]], [[64310, 64310], "mapped", [1494, 1468]], [[64311, 64311], "disallowed"], [[64312, 64312], "mapped", [1496, 1468]], [[64313, 64313], "mapped", [1497, 1468]], [[64314, 64314], "mapped", [1498, 1468]], [[64315, 64315], "mapped", [1499, 1468]], [[64316, 64316], "mapped", [1500, 1468]], [[64317, 64317], "disallowed"], [[64318, 64318], "mapped", [1502, 1468]], [[64319, 64319], "disallowed"], [[64320, 64320], "mapped", [1504, 1468]], [[64321, 64321], "mapped", [1505, 1468]], [[64322, 64322], "disallowed"], [[64323, 64323], "mapped", [1507, 1468]], [[64324, 64324], "mapped", [1508, 1468]], [[64325, 64325], "disallowed"], [[64326, 64326], "mapped", [1510, 1468]], [[64327, 64327], "mapped", [1511, 1468]], [[64328, 64328], "mapped", [1512, 1468]], [[64329, 64329], "mapped", [1513, 1468]], [[64330, 64330], "mapped", [1514, 1468]], [[64331, 64331], "mapped", [1493, 1465]], [[64332, 64332], "mapped", [1489, 1471]], [[64333, 64333], "mapped", [1499, 1471]], [[64334, 64334], "mapped", [1508, 1471]], [[64335, 64335], "mapped", [1488, 1500]], [[64336, 64337], "mapped", [1649]], [[64338, 64341], "mapped", [1659]], [[64342, 64345], "mapped", [1662]], [[64346, 64349], "mapped", [1664]], [[64350, 64353], "mapped", [1658]], [[64354, 64357], "mapped", [1663]], [[64358, 64361], "mapped", [1657]], [[64362, 64365], "mapped", [1700]], [[64366, 64369], "mapped", [1702]], [[64370, 64373], "mapped", [1668]], [[64374, 64377], "mapped", [1667]], [[64378, 64381], "mapped", [1670]], [[64382, 64385], "mapped", [1671]], [[64386, 64387], "mapped", [1677]], [[64388, 64389], "mapped", [1676]], [[64390, 64391], "mapped", [1678]], [[64392, 64393], "mapped", [1672]], [[64394, 64395], "mapped", [1688]], [[64396, 64397], "mapped", [1681]], [[64398, 64401], "mapped", [1705]], [[64402, 64405], "mapped", [1711]], [[64406, 64409], "mapped", [1715]], [[64410, 64413], "mapped", [1713]], [[64414, 64415], "mapped", [1722]], [[64416, 64419], "mapped", [1723]], [[64420, 64421], "mapped", [1728]], [[64422, 64425], "mapped", [1729]], [[64426, 64429], "mapped", [1726]], [[64430, 64431], "mapped", [1746]], [[64432, 64433], "mapped", [1747]], [[64434, 64449], "valid", [], "NV8"], [[64450, 64466], "disallowed"], [[64467, 64470], "mapped", [1709]], [[64471, 64472], "mapped", [1735]], [[64473, 64474], "mapped", [1734]], [[64475, 64476], "mapped", [1736]], [[64477, 64477], "mapped", [1735, 1652]], [[64478, 64479], "mapped", [1739]], [[64480, 64481], "mapped", [1733]], [[64482, 64483], "mapped", [1737]], [[64484, 64487], "mapped", [1744]], [[64488, 64489], "mapped", [1609]], [[64490, 64491], "mapped", [1574, 1575]], [[64492, 64493], "mapped", [1574, 1749]], [[64494, 64495], "mapped", [1574, 1608]], [[64496, 64497], "mapped", [1574, 1735]], [[64498, 64499], "mapped", [1574, 1734]], [[64500, 64501], "mapped", [1574, 1736]], [[64502, 64504], "mapped", [1574, 1744]], [[64505, 64507], "mapped", [1574, 1609]], [[64508, 64511], "mapped", [1740]], [[64512, 64512], "mapped", [1574, 1580]], [[64513, 64513], "mapped", [1574, 1581]], [[64514, 64514], "mapped", [1574, 1605]], [[64515, 64515], "mapped", [1574, 1609]], [[64516, 64516], "mapped", [1574, 1610]], [[64517, 64517], "mapped", [1576, 1580]], [[64518, 64518], "mapped", [1576, 1581]], [[64519, 64519], "mapped", [1576, 1582]], [[64520, 64520], "mapped", [1576, 1605]], [[64521, 64521], "mapped", [1576, 1609]], [[64522, 64522], "mapped", [1576, 1610]], [[64523, 64523], "mapped", [1578, 1580]], [[64524, 64524], "mapped", [1578, 1581]], [[64525, 64525], "mapped", [1578, 1582]], [[64526, 64526], "mapped", [1578, 1605]], [[64527, 64527], "mapped", [1578, 1609]], [[64528, 64528], "mapped", [1578, 1610]], [[64529, 64529], "mapped", [1579, 1580]], [[64530, 64530], "mapped", [1579, 1605]], [[64531, 64531], "mapped", [1579, 1609]], [[64532, 64532], "mapped", [1579, 1610]], [[64533, 64533], "mapped", [1580, 1581]], [[64534, 64534], "mapped", [1580, 1605]], [[64535, 64535], "mapped", [1581, 1580]], [[64536, 64536], "mapped", [1581, 1605]], [[64537, 64537], "mapped", [1582, 1580]], [[64538, 64538], "mapped", [1582, 1581]], [[64539, 64539], "mapped", [1582, 1605]], [[64540, 64540], "mapped", [1587, 1580]], [[64541, 64541], "mapped", [1587, 1581]], [[64542, 64542], "mapped", [1587, 1582]], [[64543, 64543], "mapped", [1587, 1605]], [[64544, 64544], "mapped", [1589, 1581]], [[64545, 64545], "mapped", [1589, 1605]], [[64546, 64546], "mapped", [1590, 1580]], [[64547, 64547], "mapped", [1590, 1581]], [[64548, 64548], "mapped", [1590, 1582]], [[64549, 64549], "mapped", [1590, 1605]], [[64550, 64550], "mapped", [1591, 1581]], [[64551, 64551], "mapped", [1591, 1605]], [[64552, 64552], "mapped", [1592, 1605]], [[64553, 64553], "mapped", [1593, 1580]], [[64554, 64554], "mapped", [1593, 1605]], [[64555, 64555], "mapped", [1594, 1580]], [[64556, 64556], "mapped", [1594, 1605]], [[64557, 64557], "mapped", [1601, 1580]], [[64558, 64558], "mapped", [1601, 1581]], [[64559, 64559], "mapped", [1601, 1582]], [[64560, 64560], "mapped", [1601, 1605]], [[64561, 64561], "mapped", [1601, 1609]], [[64562, 64562], "mapped", [1601, 1610]], [[64563, 64563], "mapped", [1602, 1581]], [[64564, 64564], "mapped", [1602, 1605]], [[64565, 64565], "mapped", [1602, 1609]], [[64566, 64566], "mapped", [1602, 1610]], [[64567, 64567], "mapped", [1603, 1575]], [[64568, 64568], "mapped", [1603, 1580]], [[64569, 64569], "mapped", [1603, 1581]], [[64570, 64570], "mapped", [1603, 1582]], [[64571, 64571], "mapped", [1603, 1604]], [[64572, 64572], "mapped", [1603, 1605]], [[64573, 64573], "mapped", [1603, 1609]], [[64574, 64574], "mapped", [1603, 1610]], [[64575, 64575], "mapped", [1604, 1580]], [[64576, 64576], "mapped", [1604, 1581]], [[64577, 64577], "mapped", [1604, 1582]], [[64578, 64578], "mapped", [1604, 1605]], [[64579, 64579], "mapped", [1604, 1609]], [[64580, 64580], "mapped", [1604, 1610]], [[64581, 64581], "mapped", [1605, 1580]], [[64582, 64582], "mapped", [1605, 1581]], [[64583, 64583], "mapped", [1605, 1582]], [[64584, 64584], "mapped", [1605, 1605]], [[64585, 64585], "mapped", [1605, 1609]], [[64586, 64586], "mapped", [1605, 1610]], [[64587, 64587], "mapped", [1606, 1580]], [[64588, 64588], "mapped", [1606, 1581]], [[64589, 64589], "mapped", [1606, 1582]], [[64590, 64590], "mapped", [1606, 1605]], [[64591, 64591], "mapped", [1606, 1609]], [[64592, 64592], "mapped", [1606, 1610]], [[64593, 64593], "mapped", [1607, 1580]], [[64594, 64594], "mapped", [1607, 1605]], [[64595, 64595], "mapped", [1607, 1609]], [[64596, 64596], "mapped", [1607, 1610]], [[64597, 64597], "mapped", [1610, 1580]], [[64598, 64598], "mapped", [1610, 1581]], [[64599, 64599], "mapped", [1610, 1582]], [[64600, 64600], "mapped", [1610, 1605]], [[64601, 64601], "mapped", [1610, 1609]], [[64602, 64602], "mapped", [1610, 1610]], [[64603, 64603], "mapped", [1584, 1648]], [[64604, 64604], "mapped", [1585, 1648]], [[64605, 64605], "mapped", [1609, 1648]], [[64606, 64606], "disallowed_STD3_mapped", [32, 1612, 1617]], [[64607, 64607], "disallowed_STD3_mapped", [32, 1613, 1617]], [[64608, 64608], "disallowed_STD3_mapped", [32, 1614, 1617]], [[64609, 64609], "disallowed_STD3_mapped", [32, 1615, 1617]], [[64610, 64610], "disallowed_STD3_mapped", [32, 1616, 1617]], [[64611, 64611], "disallowed_STD3_mapped", [32, 1617, 1648]], [[64612, 64612], "mapped", [1574, 1585]], [[64613, 64613], "mapped", [1574, 1586]], [[64614, 64614], "mapped", [1574, 1605]], [[64615, 64615], "mapped", [1574, 1606]], [[64616, 64616], "mapped", [1574, 1609]], [[64617, 64617], "mapped", [1574, 1610]], [[64618, 64618], "mapped", [1576, 1585]], [[64619, 64619], "mapped", [1576, 1586]], [[64620, 64620], "mapped", [1576, 1605]], [[64621, 64621], "mapped", [1576, 1606]], [[64622, 64622], "mapped", [1576, 1609]], [[64623, 64623], "mapped", [1576, 1610]], [[64624, 64624], "mapped", [1578, 1585]], [[64625, 64625], "mapped", [1578, 1586]], [[64626, 64626], "mapped", [1578, 1605]], [[64627, 64627], "mapped", [1578, 1606]], [[64628, 64628], "mapped", [1578, 1609]], [[64629, 64629], "mapped", [1578, 1610]], [[64630, 64630], "mapped", [1579, 1585]], [[64631, 64631], "mapped", [1579, 1586]], [[64632, 64632], "mapped", [1579, 1605]], [[64633, 64633], "mapped", [1579, 1606]], [[64634, 64634], "mapped", [1579, 1609]], [[64635, 64635], "mapped", [1579, 1610]], [[64636, 64636], "mapped", [1601, 1609]], [[64637, 64637], "mapped", [1601, 1610]], [[64638, 64638], "mapped", [1602, 1609]], [[64639, 64639], "mapped", [1602, 1610]], [[64640, 64640], "mapped", [1603, 1575]], [[64641, 64641], "mapped", [1603, 1604]], [[64642, 64642], "mapped", [1603, 1605]], [[64643, 64643], "mapped", [1603, 1609]], [[64644, 64644], "mapped", [1603, 1610]], [[64645, 64645], "mapped", [1604, 1605]], [[64646, 64646], "mapped", [1604, 1609]], [[64647, 64647], "mapped", [1604, 1610]], [[64648, 64648], "mapped", [1605, 1575]], [[64649, 64649], "mapped", [1605, 1605]], [[64650, 64650], "mapped", [1606, 1585]], [[64651, 64651], "mapped", [1606, 1586]], [[64652, 64652], "mapped", [1606, 1605]], [[64653, 64653], "mapped", [1606, 1606]], [[64654, 64654], "mapped", [1606, 1609]], [[64655, 64655], "mapped", [1606, 1610]], [[64656, 64656], "mapped", [1609, 1648]], [[64657, 64657], "mapped", [1610, 1585]], [[64658, 64658], "mapped", [1610, 1586]], [[64659, 64659], "mapped", [1610, 1605]], [[64660, 64660], "mapped", [1610, 1606]], [[64661, 64661], "mapped", [1610, 1609]], [[64662, 64662], "mapped", [1610, 1610]], [[64663, 64663], "mapped", [1574, 1580]], [[64664, 64664], "mapped", [1574, 1581]], [[64665, 64665], "mapped", [1574, 1582]], [[64666, 64666], "mapped", [1574, 1605]], [[64667, 64667], "mapped", [1574, 1607]], [[64668, 64668], "mapped", [1576, 1580]], [[64669, 64669], "mapped", [1576, 1581]], [[64670, 64670], "mapped", [1576, 1582]], [[64671, 64671], "mapped", [1576, 1605]], [[64672, 64672], "mapped", [1576, 1607]], [[64673, 64673], "mapped", [1578, 1580]], [[64674, 64674], "mapped", [1578, 1581]], [[64675, 64675], "mapped", [1578, 1582]], [[64676, 64676], "mapped", [1578, 1605]], [[64677, 64677], "mapped", [1578, 1607]], [[64678, 64678], "mapped", [1579, 1605]], [[64679, 64679], "mapped", [1580, 1581]], [[64680, 64680], "mapped", [1580, 1605]], [[64681, 64681], "mapped", [1581, 1580]], [[64682, 64682], "mapped", [1581, 1605]], [[64683, 64683], "mapped", [1582, 1580]], [[64684, 64684], "mapped", [1582, 1605]], [[64685, 64685], "mapped", [1587, 1580]], [[64686, 64686], "mapped", [1587, 1581]], [[64687, 64687], "mapped", [1587, 1582]], [[64688, 64688], "mapped", [1587, 1605]], [[64689, 64689], "mapped", [1589, 1581]], [[64690, 64690], "mapped", [1589, 1582]], [[64691, 64691], "mapped", [1589, 1605]], [[64692, 64692], "mapped", [1590, 1580]], [[64693, 64693], "mapped", [1590, 1581]], [[64694, 64694], "mapped", [1590, 1582]], [[64695, 64695], "mapped", [1590, 1605]], [[64696, 64696], "mapped", [1591, 1581]], [[64697, 64697], "mapped", [1592, 1605]], [[64698, 64698], "mapped", [1593, 1580]], [[64699, 64699], "mapped", [1593, 1605]], [[64700, 64700], "mapped", [1594, 1580]], [[64701, 64701], "mapped", [1594, 1605]], [[64702, 64702], "mapped", [1601, 1580]], [[64703, 64703], "mapped", [1601, 1581]], [[64704, 64704], "mapped", [1601, 1582]], [[64705, 64705], "mapped", [1601, 1605]], [[64706, 64706], "mapped", [1602, 1581]], [[64707, 64707], "mapped", [1602, 1605]], [[64708, 64708], "mapped", [1603, 1580]], [[64709, 64709], "mapped", [1603, 1581]], [[64710, 64710], "mapped", [1603, 1582]], [[64711, 64711], "mapped", [1603, 1604]], [[64712, 64712], "mapped", [1603, 1605]], [[64713, 64713], "mapped", [1604, 1580]], [[64714, 64714], "mapped", [1604, 1581]], [[64715, 64715], "mapped", [1604, 1582]], [[64716, 64716], "mapped", [1604, 1605]], [[64717, 64717], "mapped", [1604, 1607]], [[64718, 64718], "mapped", [1605, 1580]], [[64719, 64719], "mapped", [1605, 1581]], [[64720, 64720], "mapped", [1605, 1582]], [[64721, 64721], "mapped", [1605, 1605]], [[64722, 64722], "mapped", [1606, 1580]], [[64723, 64723], "mapped", [1606, 1581]], [[64724, 64724], "mapped", [1606, 1582]], [[64725, 64725], "mapped", [1606, 1605]], [[64726, 64726], "mapped", [1606, 1607]], [[64727, 64727], "mapped", [1607, 1580]], [[64728, 64728], "mapped", [1607, 1605]], [[64729, 64729], "mapped", [1607, 1648]], [[64730, 64730], "mapped", [1610, 1580]], [[64731, 64731], "mapped", [1610, 1581]], [[64732, 64732], "mapped", [1610, 1582]], [[64733, 64733], "mapped", [1610, 1605]], [[64734, 64734], "mapped", [1610, 1607]], [[64735, 64735], "mapped", [1574, 1605]], [[64736, 64736], "mapped", [1574, 1607]], [[64737, 64737], "mapped", [1576, 1605]], [[64738, 64738], "mapped", [1576, 1607]], [[64739, 64739], "mapped", [1578, 1605]], [[64740, 64740], "mapped", [1578, 1607]], [[64741, 64741], "mapped", [1579, 1605]], [[64742, 64742], "mapped", [1579, 1607]], [[64743, 64743], "mapped", [1587, 1605]], [[64744, 64744], "mapped", [1587, 1607]], [[64745, 64745], "mapped", [1588, 1605]], [[64746, 64746], "mapped", [1588, 1607]], [[64747, 64747], "mapped", [1603, 1604]], [[64748, 64748], "mapped", [1603, 1605]], [[64749, 64749], "mapped", [1604, 1605]], [[64750, 64750], "mapped", [1606, 1605]], [[64751, 64751], "mapped", [1606, 1607]], [[64752, 64752], "mapped", [1610, 1605]], [[64753, 64753], "mapped", [1610, 1607]], [[64754, 64754], "mapped", [1600, 1614, 1617]], [[64755, 64755], "mapped", [1600, 1615, 1617]], [[64756, 64756], "mapped", [1600, 1616, 1617]], [[64757, 64757], "mapped", [1591, 1609]], [[64758, 64758], "mapped", [1591, 1610]], [[64759, 64759], "mapped", [1593, 1609]], [[64760, 64760], "mapped", [1593, 1610]], [[64761, 64761], "mapped", [1594, 1609]], [[64762, 64762], "mapped", [1594, 1610]], [[64763, 64763], "mapped", [1587, 1609]], [[64764, 64764], "mapped", [1587, 1610]], [[64765, 64765], "mapped", [1588, 1609]], [[64766, 64766], "mapped", [1588, 1610]], [[64767, 64767], "mapped", [1581, 1609]], [[64768, 64768], "mapped", [1581, 1610]], [[64769, 64769], "mapped", [1580, 1609]], [[64770, 64770], "mapped", [1580, 1610]], [[64771, 64771], "mapped", [1582, 1609]], [[64772, 64772], "mapped", [1582, 1610]], [[64773, 64773], "mapped", [1589, 1609]], [[64774, 64774], "mapped", [1589, 1610]], [[64775, 64775], "mapped", [1590, 1609]], [[64776, 64776], "mapped", [1590, 1610]], [[64777, 64777], "mapped", [1588, 1580]], [[64778, 64778], "mapped", [1588, 1581]], [[64779, 64779], "mapped", [1588, 1582]], [[64780, 64780], "mapped", [1588, 1605]], [[64781, 64781], "mapped", [1588, 1585]], [[64782, 64782], "mapped", [1587, 1585]], [[64783, 64783], "mapped", [1589, 1585]], [[64784, 64784], "mapped", [1590, 1585]], [[64785, 64785], "mapped", [1591, 1609]], [[64786, 64786], "mapped", [1591, 1610]], [[64787, 64787], "mapped", [1593, 1609]], [[64788, 64788], "mapped", [1593, 1610]], [[64789, 64789], "mapped", [1594, 1609]], [[64790, 64790], "mapped", [1594, 1610]], [[64791, 64791], "mapped", [1587, 1609]], [[64792, 64792], "mapped", [1587, 1610]], [[64793, 64793], "mapped", [1588, 1609]], [[64794, 64794], "mapped", [1588, 1610]], [[64795, 64795], "mapped", [1581, 1609]], [[64796, 64796], "mapped", [1581, 1610]], [[64797, 64797], "mapped", [1580, 1609]], [[64798, 64798], "mapped", [1580, 1610]], [[64799, 64799], "mapped", [1582, 1609]], [[64800, 64800], "mapped", [1582, 1610]], [[64801, 64801], "mapped", [1589, 1609]], [[64802, 64802], "mapped", [1589, 1610]], [[64803, 64803], "mapped", [1590, 1609]], [[64804, 64804], "mapped", [1590, 1610]], [[64805, 64805], "mapped", [1588, 1580]], [[64806, 64806], "mapped", [1588, 1581]], [[64807, 64807], "mapped", [1588, 1582]], [[64808, 64808], "mapped", [1588, 1605]], [[64809, 64809], "mapped", [1588, 1585]], [[64810, 64810], "mapped", [1587, 1585]], [[64811, 64811], "mapped", [1589, 1585]], [[64812, 64812], "mapped", [1590, 1585]], [[64813, 64813], "mapped", [1588, 1580]], [[64814, 64814], "mapped", [1588, 1581]], [[64815, 64815], "mapped", [1588, 1582]], [[64816, 64816], "mapped", [1588, 1605]], [[64817, 64817], "mapped", [1587, 1607]], [[64818, 64818], "mapped", [1588, 1607]], [[64819, 64819], "mapped", [1591, 1605]], [[64820, 64820], "mapped", [1587, 1580]], [[64821, 64821], "mapped", [1587, 1581]], [[64822, 64822], "mapped", [1587, 1582]], [[64823, 64823], "mapped", [1588, 1580]], [[64824, 64824], "mapped", [1588, 1581]], [[64825, 64825], "mapped", [1588, 1582]], [[64826, 64826], "mapped", [1591, 1605]], [[64827, 64827], "mapped", [1592, 1605]], [[64828, 64829], "mapped", [1575, 1611]], [[64830, 64831], "valid", [], "NV8"], [[64832, 64847], "disallowed"], [[64848, 64848], "mapped", [1578, 1580, 1605]], [[64849, 64850], "mapped", [1578, 1581, 1580]], [[64851, 64851], "mapped", [1578, 1581, 1605]], [[64852, 64852], "mapped", [1578, 1582, 1605]], [[64853, 64853], "mapped", [1578, 1605, 1580]], [[64854, 64854], "mapped", [1578, 1605, 1581]], [[64855, 64855], "mapped", [1578, 1605, 1582]], [[64856, 64857], "mapped", [1580, 1605, 1581]], [[64858, 64858], "mapped", [1581, 1605, 1610]], [[64859, 64859], "mapped", [1581, 1605, 1609]], [[64860, 64860], "mapped", [1587, 1581, 1580]], [[64861, 64861], "mapped", [1587, 1580, 1581]], [[64862, 64862], "mapped", [1587, 1580, 1609]], [[64863, 64864], "mapped", [1587, 1605, 1581]], [[64865, 64865], "mapped", [1587, 1605, 1580]], [[64866, 64867], "mapped", [1587, 1605, 1605]], [[64868, 64869], "mapped", [1589, 1581, 1581]], [[64870, 64870], "mapped", [1589, 1605, 1605]], [[64871, 64872], "mapped", [1588, 1581, 1605]], [[64873, 64873], "mapped", [1588, 1580, 1610]], [[64874, 64875], "mapped", [1588, 1605, 1582]], [[64876, 64877], "mapped", [1588, 1605, 1605]], [[64878, 64878], "mapped", [1590, 1581, 1609]], [[64879, 64880], "mapped", [1590, 1582, 1605]], [[64881, 64882], "mapped", [1591, 1605, 1581]], [[64883, 64883], "mapped", [1591, 1605, 1605]], [[64884, 64884], "mapped", [1591, 1605, 1610]], [[64885, 64885], "mapped", [1593, 1580, 1605]], [[64886, 64887], "mapped", [1593, 1605, 1605]], [[64888, 64888], "mapped", [1593, 1605, 1609]], [[64889, 64889], "mapped", [1594, 1605, 1605]], [[64890, 64890], "mapped", [1594, 1605, 1610]], [[64891, 64891], "mapped", [1594, 1605, 1609]], [[64892, 64893], "mapped", [1601, 1582, 1605]], [[64894, 64894], "mapped", [1602, 1605, 1581]], [[64895, 64895], "mapped", [1602, 1605, 1605]], [[64896, 64896], "mapped", [1604, 1581, 1605]], [[64897, 64897], "mapped", [1604, 1581, 1610]], [[64898, 64898], "mapped", [1604, 1581, 1609]], [[64899, 64900], "mapped", [1604, 1580, 1580]], [[64901, 64902], "mapped", [1604, 1582, 1605]], [[64903, 64904], "mapped", [1604, 1605, 1581]], [[64905, 64905], "mapped", [1605, 1581, 1580]], [[64906, 64906], "mapped", [1605, 1581, 1605]], [[64907, 64907], "mapped", [1605, 1581, 1610]], [[64908, 64908], "mapped", [1605, 1580, 1581]], [[64909, 64909], "mapped", [1605, 1580, 1605]], [[64910, 64910], "mapped", [1605, 1582, 1580]], [[64911, 64911], "mapped", [1605, 1582, 1605]], [[64912, 64913], "disallowed"], [[64914, 64914], "mapped", [1605, 1580, 1582]], [[64915, 64915], "mapped", [1607, 1605, 1580]], [[64916, 64916], "mapped", [1607, 1605, 1605]], [[64917, 64917], "mapped", [1606, 1581, 1605]], [[64918, 64918], "mapped", [1606, 1581, 1609]], [[64919, 64920], "mapped", [1606, 1580, 1605]], [[64921, 64921], "mapped", [1606, 1580, 1609]], [[64922, 64922], "mapped", [1606, 1605, 1610]], [[64923, 64923], "mapped", [1606, 1605, 1609]], [[64924, 64925], "mapped", [1610, 1605, 1605]], [[64926, 64926], "mapped", [1576, 1582, 1610]], [[64927, 64927], "mapped", [1578, 1580, 1610]], [[64928, 64928], "mapped", [1578, 1580, 1609]], [[64929, 64929], "mapped", [1578, 1582, 1610]], [[64930, 64930], "mapped", [1578, 1582, 1609]], [[64931, 64931], "mapped", [1578, 1605, 1610]], [[64932, 64932], "mapped", [1578, 1605, 1609]], [[64933, 64933], "mapped", [1580, 1605, 1610]], [[64934, 64934], "mapped", [1580, 1581, 1609]], [[64935, 64935], "mapped", [1580, 1605, 1609]], [[64936, 64936], "mapped", [1587, 1582, 1609]], [[64937, 64937], "mapped", [1589, 1581, 1610]], [[64938, 64938], "mapped", [1588, 1581, 1610]], [[64939, 64939], "mapped", [1590, 1581, 1610]], [[64940, 64940], "mapped", [1604, 1580, 1610]], [[64941, 64941], "mapped", [1604, 1605, 1610]], [[64942, 64942], "mapped", [1610, 1581, 1610]], [[64943, 64943], "mapped", [1610, 1580, 1610]], [[64944, 64944], "mapped", [1610, 1605, 1610]], [[64945, 64945], "mapped", [1605, 1605, 1610]], [[64946, 64946], "mapped", [1602, 1605, 1610]], [[64947, 64947], "mapped", [1606, 1581, 1610]], [[64948, 64948], "mapped", [1602, 1605, 1581]], [[64949, 64949], "mapped", [1604, 1581, 1605]], [[64950, 64950], "mapped", [1593, 1605, 1610]], [[64951, 64951], "mapped", [1603, 1605, 1610]], [[64952, 64952], "mapped", [1606, 1580, 1581]], [[64953, 64953], "mapped", [1605, 1582, 1610]], [[64954, 64954], "mapped", [1604, 1580, 1605]], [[64955, 64955], "mapped", [1603, 1605, 1605]], [[64956, 64956], "mapped", [1604, 1580, 1605]], [[64957, 64957], "mapped", [1606, 1580, 1581]], [[64958, 64958], "mapped", [1580, 1581, 1610]], [[64959, 64959], "mapped", [1581, 1580, 1610]], [[64960, 64960], "mapped", [1605, 1580, 1610]], [[64961, 64961], "mapped", [1601, 1605, 1610]], [[64962, 64962], "mapped", [1576, 1581, 1610]], [[64963, 64963], "mapped", [1603, 1605, 1605]], [[64964, 64964], "mapped", [1593, 1580, 1605]], [[64965, 64965], "mapped", [1589, 1605, 1605]], [[64966, 64966], "mapped", [1587, 1582, 1610]], [[64967, 64967], "mapped", [1606, 1580, 1610]], [[64968, 64975], "disallowed"], [[64976, 65007], "disallowed"], [[65008, 65008], "mapped", [1589, 1604, 1746]], [[65009, 65009], "mapped", [1602, 1604, 1746]], [[65010, 65010], "mapped", [1575, 1604, 1604, 1607]], [[65011, 65011], "mapped", [1575, 1603, 1576, 1585]], [[65012, 65012], "mapped", [1605, 1581, 1605, 1583]], [[65013, 65013], "mapped", [1589, 1604, 1593, 1605]], [[65014, 65014], "mapped", [1585, 1587, 1608, 1604]], [[65015, 65015], "mapped", [1593, 1604, 1610, 1607]], [[65016, 65016], "mapped", [1608, 1587, 1604, 1605]], [[65017, 65017], "mapped", [1589, 1604, 1609]], [[65018, 65018], "disallowed_STD3_mapped", [1589, 1604, 1609, 32, 1575, 1604, 1604, 1607, 32, 1593, 1604, 1610, 1607, 32, 1608, 1587, 1604, 1605]], [[65019, 65019], "disallowed_STD3_mapped", [1580, 1604, 32, 1580, 1604, 1575, 1604, 1607]], [[65020, 65020], "mapped", [1585, 1740, 1575, 1604]], [[65021, 65021], "valid", [], "NV8"], [[65022, 65023], "disallowed"], [[65024, 65039], "ignored"], [[65040, 65040], "disallowed_STD3_mapped", [44]], [[65041, 65041], "mapped", [12289]], [[65042, 65042], "disallowed"], [[65043, 65043], "disallowed_STD3_mapped", [58]], [[65044, 65044], "disallowed_STD3_mapped", [59]], [[65045, 65045], "disallowed_STD3_mapped", [33]], [[65046, 65046], "disallowed_STD3_mapped", [63]], [[65047, 65047], "mapped", [12310]], [[65048, 65048], "mapped", [12311]], [[65049, 65049], "disallowed"], [[65050, 65055], "disallowed"], [[65056, 65059], "valid"], [[65060, 65062], "valid"], [[65063, 65069], "valid"], [[65070, 65071], "valid"], [[65072, 65072], "disallowed"], [[65073, 65073], "mapped", [8212]], [[65074, 65074], "mapped", [8211]], [[65075, 65076], "disallowed_STD3_mapped", [95]], [[65077, 65077], "disallowed_STD3_mapped", [40]], [[65078, 65078], "disallowed_STD3_mapped", [41]], [[65079, 65079], "disallowed_STD3_mapped", [123]], [[65080, 65080], "disallowed_STD3_mapped", [125]], [[65081, 65081], "mapped", [12308]], [[65082, 65082], "mapped", [12309]], [[65083, 65083], "mapped", [12304]], [[65084, 65084], "mapped", [12305]], [[65085, 65085], "mapped", [12298]], [[65086, 65086], "mapped", [12299]], [[65087, 65087], "mapped", [12296]], [[65088, 65088], "mapped", [12297]], [[65089, 65089], "mapped", [12300]], [[65090, 65090], "mapped", [12301]], [[65091, 65091], "mapped", [12302]], [[65092, 65092], "mapped", [12303]], [[65093, 65094], "valid", [], "NV8"], [[65095, 65095], "disallowed_STD3_mapped", [91]], [[65096, 65096], "disallowed_STD3_mapped", [93]], [[65097, 65100], "disallowed_STD3_mapped", [32, 773]], [[65101, 65103], "disallowed_STD3_mapped", [95]], [[65104, 65104], "disallowed_STD3_mapped", [44]], [[65105, 65105], "mapped", [12289]], [[65106, 65106], "disallowed"], [[65107, 65107], "disallowed"], [[65108, 65108], "disallowed_STD3_mapped", [59]], [[65109, 65109], "disallowed_STD3_mapped", [58]], [[65110, 65110], "disallowed_STD3_mapped", [63]], [[65111, 65111], "disallowed_STD3_mapped", [33]], [[65112, 65112], "mapped", [8212]], [[65113, 65113], "disallowed_STD3_mapped", [40]], [[65114, 65114], "disallowed_STD3_mapped", [41]], [[65115, 65115], "disallowed_STD3_mapped", [123]], [[65116, 65116], "disallowed_STD3_mapped", [125]], [[65117, 65117], "mapped", [12308]], [[65118, 65118], "mapped", [12309]], [[65119, 65119], "disallowed_STD3_mapped", [35]], [[65120, 65120], "disallowed_STD3_mapped", [38]], [[65121, 65121], "disallowed_STD3_mapped", [42]], [[65122, 65122], "disallowed_STD3_mapped", [43]], [[65123, 65123], "mapped", [45]], [[65124, 65124], "disallowed_STD3_mapped", [60]], [[65125, 65125], "disallowed_STD3_mapped", [62]], [[65126, 65126], "disallowed_STD3_mapped", [61]], [[65127, 65127], "disallowed"], [[65128, 65128], "disallowed_STD3_mapped", [92]], [[65129, 65129], "disallowed_STD3_mapped", [36]], [[65130, 65130], "disallowed_STD3_mapped", [37]], [[65131, 65131], "disallowed_STD3_mapped", [64]], [[65132, 65135], "disallowed"], [[65136, 65136], "disallowed_STD3_mapped", [32, 1611]], [[65137, 65137], "mapped", [1600, 1611]], [[65138, 65138], "disallowed_STD3_mapped", [32, 1612]], [[65139, 65139], "valid"], [[65140, 65140], "disallowed_STD3_mapped", [32, 1613]], [[65141, 65141], "disallowed"], [[65142, 65142], "disallowed_STD3_mapped", [32, 1614]], [[65143, 65143], "mapped", [1600, 1614]], [[65144, 65144], "disallowed_STD3_mapped", [32, 1615]], [[65145, 65145], "mapped", [1600, 1615]], [[65146, 65146], "disallowed_STD3_mapped", [32, 1616]], [[65147, 65147], "mapped", [1600, 1616]], [[65148, 65148], "disallowed_STD3_mapped", [32, 1617]], [[65149, 65149], "mapped", [1600, 1617]], [[65150, 65150], "disallowed_STD3_mapped", [32, 1618]], [[65151, 65151], "mapped", [1600, 1618]], [[65152, 65152], "mapped", [1569]], [[65153, 65154], "mapped", [1570]], [[65155, 65156], "mapped", [1571]], [[65157, 65158], "mapped", [1572]], [[65159, 65160], "mapped", [1573]], [[65161, 65164], "mapped", [1574]], [[65165, 65166], "mapped", [1575]], [[65167, 65170], "mapped", [1576]], [[65171, 65172], "mapped", [1577]], [[65173, 65176], "mapped", [1578]], [[65177, 65180], "mapped", [1579]], [[65181, 65184], "mapped", [1580]], [[65185, 65188], "mapped", [1581]], [[65189, 65192], "mapped", [1582]], [[65193, 65194], "mapped", [1583]], [[65195, 65196], "mapped", [1584]], [[65197, 65198], "mapped", [1585]], [[65199, 65200], "mapped", [1586]], [[65201, 65204], "mapped", [1587]], [[65205, 65208], "mapped", [1588]], [[65209, 65212], "mapped", [1589]], [[65213, 65216], "mapped", [1590]], [[65217, 65220], "mapped", [1591]], [[65221, 65224], "mapped", [1592]], [[65225, 65228], "mapped", [1593]], [[65229, 65232], "mapped", [1594]], [[65233, 65236], "mapped", [1601]], [[65237, 65240], "mapped", [1602]], [[65241, 65244], "mapped", [1603]], [[65245, 65248], "mapped", [1604]], [[65249, 65252], "mapped", [1605]], [[65253, 65256], "mapped", [1606]], [[65257, 65260], "mapped", [1607]], [[65261, 65262], "mapped", [1608]], [[65263, 65264], "mapped", [1609]], [[65265, 65268], "mapped", [1610]], [[65269, 65270], "mapped", [1604, 1570]], [[65271, 65272], "mapped", [1604, 1571]], [[65273, 65274], "mapped", [1604, 1573]], [[65275, 65276], "mapped", [1604, 1575]], [[65277, 65278], "disallowed"], [[65279, 65279], "ignored"], [[65280, 65280], "disallowed"], [[65281, 65281], "disallowed_STD3_mapped", [33]], [[65282, 65282], "disallowed_STD3_mapped", [34]], [[65283, 65283], "disallowed_STD3_mapped", [35]], [[65284, 65284], "disallowed_STD3_mapped", [36]], [[65285, 65285], "disallowed_STD3_mapped", [37]], [[65286, 65286], "disallowed_STD3_mapped", [38]], [[65287, 65287], "disallowed_STD3_mapped", [39]], [[65288, 65288], "disallowed_STD3_mapped", [40]], [[65289, 65289], "disallowed_STD3_mapped", [41]], [[65290, 65290], "disallowed_STD3_mapped", [42]], [[65291, 65291], "disallowed_STD3_mapped", [43]], [[65292, 65292], "disallowed_STD3_mapped", [44]], [[65293, 65293], "mapped", [45]], [[65294, 65294], "mapped", [46]], [[65295, 65295], "disallowed_STD3_mapped", [47]], [[65296, 65296], "mapped", [48]], [[65297, 65297], "mapped", [49]], [[65298, 65298], "mapped", [50]], [[65299, 65299], "mapped", [51]], [[65300, 65300], "mapped", [52]], [[65301, 65301], "mapped", [53]], [[65302, 65302], "mapped", [54]], [[65303, 65303], "mapped", [55]], [[65304, 65304], "mapped", [56]], [[65305, 65305], "mapped", [57]], [[65306, 65306], "disallowed_STD3_mapped", [58]], [[65307, 65307], "disallowed_STD3_mapped", [59]], [[65308, 65308], "disallowed_STD3_mapped", [60]], [[65309, 65309], "disallowed_STD3_mapped", [61]], [[65310, 65310], "disallowed_STD3_mapped", [62]], [[65311, 65311], "disallowed_STD3_mapped", [63]], [[65312, 65312], "disallowed_STD3_mapped", [64]], [[65313, 65313], "mapped", [97]], [[65314, 65314], "mapped", [98]], [[65315, 65315], "mapped", [99]], [[65316, 65316], "mapped", [100]], [[65317, 65317], "mapped", [101]], [[65318, 65318], "mapped", [102]], [[65319, 65319], "mapped", [103]], [[65320, 65320], "mapped", [104]], [[65321, 65321], "mapped", [105]], [[65322, 65322], "mapped", [106]], [[65323, 65323], "mapped", [107]], [[65324, 65324], "mapped", [108]], [[65325, 65325], "mapped", [109]], [[65326, 65326], "mapped", [110]], [[65327, 65327], "mapped", [111]], [[65328, 65328], "mapped", [112]], [[65329, 65329], "mapped", [113]], [[65330, 65330], "mapped", [114]], [[65331, 65331], "mapped", [115]], [[65332, 65332], "mapped", [116]], [[65333, 65333], "mapped", [117]], [[65334, 65334], "mapped", [118]], [[65335, 65335], "mapped", [119]], [[65336, 65336], "mapped", [120]], [[65337, 65337], "mapped", [121]], [[65338, 65338], "mapped", [122]], [[65339, 65339], "disallowed_STD3_mapped", [91]], [[65340, 65340], "disallowed_STD3_mapped", [92]], [[65341, 65341], "disallowed_STD3_mapped", [93]], [[65342, 65342], "disallowed_STD3_mapped", [94]], [[65343, 65343], "disallowed_STD3_mapped", [95]], [[65344, 65344], "disallowed_STD3_mapped", [96]], [[65345, 65345], "mapped", [97]], [[65346, 65346], "mapped", [98]], [[65347, 65347], "mapped", [99]], [[65348, 65348], "mapped", [100]], [[65349, 65349], "mapped", [101]], [[65350, 65350], "mapped", [102]], [[65351, 65351], "mapped", [103]], [[65352, 65352], "mapped", [104]], [[65353, 65353], "mapped", [105]], [[65354, 65354], "mapped", [106]], [[65355, 65355], "mapped", [107]], [[65356, 65356], "mapped", [108]], [[65357, 65357], "mapped", [109]], [[65358, 65358], "mapped", [110]], [[65359, 65359], "mapped", [111]], [[65360, 65360], "mapped", [112]], [[65361, 65361], "mapped", [113]], [[65362, 65362], "mapped", [114]], [[65363, 65363], "mapped", [115]], [[65364, 65364], "mapped", [116]], [[65365, 65365], "mapped", [117]], [[65366, 65366], "mapped", [118]], [[65367, 65367], "mapped", [119]], [[65368, 65368], "mapped", [120]], [[65369, 65369], "mapped", [121]], [[65370, 65370], "mapped", [122]], [[65371, 65371], "disallowed_STD3_mapped", [123]], [[65372, 65372], "disallowed_STD3_mapped", [124]], [[65373, 65373], "disallowed_STD3_mapped", [125]], [[65374, 65374], "disallowed_STD3_mapped", [126]], [[65375, 65375], "mapped", [10629]], [[65376, 65376], "mapped", [10630]], [[65377, 65377], "mapped", [46]], [[65378, 65378], "mapped", [12300]], [[65379, 65379], "mapped", [12301]], [[65380, 65380], "mapped", [12289]], [[65381, 65381], "mapped", [12539]], [[65382, 65382], "mapped", [12530]], [[65383, 65383], "mapped", [12449]], [[65384, 65384], "mapped", [12451]], [[65385, 65385], "mapped", [12453]], [[65386, 65386], "mapped", [12455]], [[65387, 65387], "mapped", [12457]], [[65388, 65388], "mapped", [12515]], [[65389, 65389], "mapped", [12517]], [[65390, 65390], "mapped", [12519]], [[65391, 65391], "mapped", [12483]], [[65392, 65392], "mapped", [12540]], [[65393, 65393], "mapped", [12450]], [[65394, 65394], "mapped", [12452]], [[65395, 65395], "mapped", [12454]], [[65396, 65396], "mapped", [12456]], [[65397, 65397], "mapped", [12458]], [[65398, 65398], "mapped", [12459]], [[65399, 65399], "mapped", [12461]], [[65400, 65400], "mapped", [12463]], [[65401, 65401], "mapped", [12465]], [[65402, 65402], "mapped", [12467]], [[65403, 65403], "mapped", [12469]], [[65404, 65404], "mapped", [12471]], [[65405, 65405], "mapped", [12473]], [[65406, 65406], "mapped", [12475]], [[65407, 65407], "mapped", [12477]], [[65408, 65408], "mapped", [12479]], [[65409, 65409], "mapped", [12481]], [[65410, 65410], "mapped", [12484]], [[65411, 65411], "mapped", [12486]], [[65412, 65412], "mapped", [12488]], [[65413, 65413], "mapped", [12490]], [[65414, 65414], "mapped", [12491]], [[65415, 65415], "mapped", [12492]], [[65416, 65416], "mapped", [12493]], [[65417, 65417], "mapped", [12494]], [[65418, 65418], "mapped", [12495]], [[65419, 65419], "mapped", [12498]], [[65420, 65420], "mapped", [12501]], [[65421, 65421], "mapped", [12504]], [[65422, 65422], "mapped", [12507]], [[65423, 65423], "mapped", [12510]], [[65424, 65424], "mapped", [12511]], [[65425, 65425], "mapped", [12512]], [[65426, 65426], "mapped", [12513]], [[65427, 65427], "mapped", [12514]], [[65428, 65428], "mapped", [12516]], [[65429, 65429], "mapped", [12518]], [[65430, 65430], "mapped", [12520]], [[65431, 65431], "mapped", [12521]], [[65432, 65432], "mapped", [12522]], [[65433, 65433], "mapped", [12523]], [[65434, 65434], "mapped", [12524]], [[65435, 65435], "mapped", [12525]], [[65436, 65436], "mapped", [12527]], [[65437, 65437], "mapped", [12531]], [[65438, 65438], "mapped", [12441]], [[65439, 65439], "mapped", [12442]], [[65440, 65440], "disallowed"], [[65441, 65441], "mapped", [4352]], [[65442, 65442], "mapped", [4353]], [[65443, 65443], "mapped", [4522]], [[65444, 65444], "mapped", [4354]], [[65445, 65445], "mapped", [4524]], [[65446, 65446], "mapped", [4525]], [[65447, 65447], "mapped", [4355]], [[65448, 65448], "mapped", [4356]], [[65449, 65449], "mapped", [4357]], [[65450, 65450], "mapped", [4528]], [[65451, 65451], "mapped", [4529]], [[65452, 65452], "mapped", [4530]], [[65453, 65453], "mapped", [4531]], [[65454, 65454], "mapped", [4532]], [[65455, 65455], "mapped", [4533]], [[65456, 65456], "mapped", [4378]], [[65457, 65457], "mapped", [4358]], [[65458, 65458], "mapped", [4359]], [[65459, 65459], "mapped", [4360]], [[65460, 65460], "mapped", [4385]], [[65461, 65461], "mapped", [4361]], [[65462, 65462], "mapped", [4362]], [[65463, 65463], "mapped", [4363]], [[65464, 65464], "mapped", [4364]], [[65465, 65465], "mapped", [4365]], [[65466, 65466], "mapped", [4366]], [[65467, 65467], "mapped", [4367]], [[65468, 65468], "mapped", [4368]], [[65469, 65469], "mapped", [4369]], [[65470, 65470], "mapped", [4370]], [[65471, 65473], "disallowed"], [[65474, 65474], "mapped", [4449]], [[65475, 65475], "mapped", [4450]], [[65476, 65476], "mapped", [4451]], [[65477, 65477], "mapped", [4452]], [[65478, 65478], "mapped", [4453]], [[65479, 65479], "mapped", [4454]], [[65480, 65481], "disallowed"], [[65482, 65482], "mapped", [4455]], [[65483, 65483], "mapped", [4456]], [[65484, 65484], "mapped", [4457]], [[65485, 65485], "mapped", [4458]], [[65486, 65486], "mapped", [4459]], [[65487, 65487], "mapped", [4460]], [[65488, 65489], "disallowed"], [[65490, 65490], "mapped", [4461]], [[65491, 65491], "mapped", [4462]], [[65492, 65492], "mapped", [4463]], [[65493, 65493], "mapped", [4464]], [[65494, 65494], "mapped", [4465]], [[65495, 65495], "mapped", [4466]], [[65496, 65497], "disallowed"], [[65498, 65498], "mapped", [4467]], [[65499, 65499], "mapped", [4468]], [[65500, 65500], "mapped", [4469]], [[65501, 65503], "disallowed"], [[65504, 65504], "mapped", [162]], [[65505, 65505], "mapped", [163]], [[65506, 65506], "mapped", [172]], [[65507, 65507], "disallowed_STD3_mapped", [32, 772]], [[65508, 65508], "mapped", [166]], [[65509, 65509], "mapped", [165]], [[65510, 65510], "mapped", [8361]], [[65511, 65511], "disallowed"], [[65512, 65512], "mapped", [9474]], [[65513, 65513], "mapped", [8592]], [[65514, 65514], "mapped", [8593]], [[65515, 65515], "mapped", [8594]], [[65516, 65516], "mapped", [8595]], [[65517, 65517], "mapped", [9632]], [[65518, 65518], "mapped", [9675]], [[65519, 65528], "disallowed"], [[65529, 65531], "disallowed"], [[65532, 65532], "disallowed"], [[65533, 65533], "disallowed"], [[65534, 65535], "disallowed"], [[65536, 65547], "valid"], [[65548, 65548], "disallowed"], [[65549, 65574], "valid"], [[65575, 65575], "disallowed"], [[65576, 65594], "valid"], [[65595, 65595], "disallowed"], [[65596, 65597], "valid"], [[65598, 65598], "disallowed"], [[65599, 65613], "valid"], [[65614, 65615], "disallowed"], [[65616, 65629], "valid"], [[65630, 65663], "disallowed"], [[65664, 65786], "valid"], [[65787, 65791], "disallowed"], [[65792, 65794], "valid", [], "NV8"], [[65795, 65798], "disallowed"], [[65799, 65843], "valid", [], "NV8"], [[65844, 65846], "disallowed"], [[65847, 65855], "valid", [], "NV8"], [[65856, 65930], "valid", [], "NV8"], [[65931, 65932], "valid", [], "NV8"], [[65933, 65935], "disallowed"], [[65936, 65947], "valid", [], "NV8"], [[65948, 65951], "disallowed"], [[65952, 65952], "valid", [], "NV8"], [[65953, 65999], "disallowed"], [[66e3, 66044], "valid", [], "NV8"], [[66045, 66045], "valid"], [[66046, 66175], "disallowed"], [[66176, 66204], "valid"], [[66205, 66207], "disallowed"], [[66208, 66256], "valid"], [[66257, 66271], "disallowed"], [[66272, 66272], "valid"], [[66273, 66299], "valid", [], "NV8"], [[66300, 66303], "disallowed"], [[66304, 66334], "valid"], [[66335, 66335], "valid"], [[66336, 66339], "valid", [], "NV8"], [[66340, 66351], "disallowed"], [[66352, 66368], "valid"], [[66369, 66369], "valid", [], "NV8"], [[66370, 66377], "valid"], [[66378, 66378], "valid", [], "NV8"], [[66379, 66383], "disallowed"], [[66384, 66426], "valid"], [[66427, 66431], "disallowed"], [[66432, 66461], "valid"], [[66462, 66462], "disallowed"], [[66463, 66463], "valid", [], "NV8"], [[66464, 66499], "valid"], [[66500, 66503], "disallowed"], [[66504, 66511], "valid"], [[66512, 66517], "valid", [], "NV8"], [[66518, 66559], "disallowed"], [[66560, 66560], "mapped", [66600]], [[66561, 66561], "mapped", [66601]], [[66562, 66562], "mapped", [66602]], [[66563, 66563], "mapped", [66603]], [[66564, 66564], "mapped", [66604]], [[66565, 66565], "mapped", [66605]], [[66566, 66566], "mapped", [66606]], [[66567, 66567], "mapped", [66607]], [[66568, 66568], "mapped", [66608]], [[66569, 66569], "mapped", [66609]], [[66570, 66570], "mapped", [66610]], [[66571, 66571], "mapped", [66611]], [[66572, 66572], "mapped", [66612]], [[66573, 66573], "mapped", [66613]], [[66574, 66574], "mapped", [66614]], [[66575, 66575], "mapped", [66615]], [[66576, 66576], "mapped", [66616]], [[66577, 66577], "mapped", [66617]], [[66578, 66578], "mapped", [66618]], [[66579, 66579], "mapped", [66619]], [[66580, 66580], "mapped", [66620]], [[66581, 66581], "mapped", [66621]], [[66582, 66582], "mapped", [66622]], [[66583, 66583], "mapped", [66623]], [[66584, 66584], "mapped", [66624]], [[66585, 66585], "mapped", [66625]], [[66586, 66586], "mapped", [66626]], [[66587, 66587], "mapped", [66627]], [[66588, 66588], "mapped", [66628]], [[66589, 66589], "mapped", [66629]], [[66590, 66590], "mapped", [66630]], [[66591, 66591], "mapped", [66631]], [[66592, 66592], "mapped", [66632]], [[66593, 66593], "mapped", [66633]], [[66594, 66594], "mapped", [66634]], [[66595, 66595], "mapped", [66635]], [[66596, 66596], "mapped", [66636]], [[66597, 66597], "mapped", [66637]], [[66598, 66598], "mapped", [66638]], [[66599, 66599], "mapped", [66639]], [[66600, 66637], "valid"], [[66638, 66717], "valid"], [[66718, 66719], "disallowed"], [[66720, 66729], "valid"], [[66730, 66815], "disallowed"], [[66816, 66855], "valid"], [[66856, 66863], "disallowed"], [[66864, 66915], "valid"], [[66916, 66926], "disallowed"], [[66927, 66927], "valid", [], "NV8"], [[66928, 67071], "disallowed"], [[67072, 67382], "valid"], [[67383, 67391], "disallowed"], [[67392, 67413], "valid"], [[67414, 67423], "disallowed"], [[67424, 67431], "valid"], [[67432, 67583], "disallowed"], [[67584, 67589], "valid"], [[67590, 67591], "disallowed"], [[67592, 67592], "valid"], [[67593, 67593], "disallowed"], [[67594, 67637], "valid"], [[67638, 67638], "disallowed"], [[67639, 67640], "valid"], [[67641, 67643], "disallowed"], [[67644, 67644], "valid"], [[67645, 67646], "disallowed"], [[67647, 67647], "valid"], [[67648, 67669], "valid"], [[67670, 67670], "disallowed"], [[67671, 67679], "valid", [], "NV8"], [[67680, 67702], "valid"], [[67703, 67711], "valid", [], "NV8"], [[67712, 67742], "valid"], [[67743, 67750], "disallowed"], [[67751, 67759], "valid", [], "NV8"], [[67760, 67807], "disallowed"], [[67808, 67826], "valid"], [[67827, 67827], "disallowed"], [[67828, 67829], "valid"], [[67830, 67834], "disallowed"], [[67835, 67839], "valid", [], "NV8"], [[67840, 67861], "valid"], [[67862, 67865], "valid", [], "NV8"], [[67866, 67867], "valid", [], "NV8"], [[67868, 67870], "disallowed"], [[67871, 67871], "valid", [], "NV8"], [[67872, 67897], "valid"], [[67898, 67902], "disallowed"], [[67903, 67903], "valid", [], "NV8"], [[67904, 67967], "disallowed"], [[67968, 68023], "valid"], [[68024, 68027], "disallowed"], [[68028, 68029], "valid", [], "NV8"], [[68030, 68031], "valid"], [[68032, 68047], "valid", [], "NV8"], [[68048, 68049], "disallowed"], [[68050, 68095], "valid", [], "NV8"], [[68096, 68099], "valid"], [[68100, 68100], "disallowed"], [[68101, 68102], "valid"], [[68103, 68107], "disallowed"], [[68108, 68115], "valid"], [[68116, 68116], "disallowed"], [[68117, 68119], "valid"], [[68120, 68120], "disallowed"], [[68121, 68147], "valid"], [[68148, 68151], "disallowed"], [[68152, 68154], "valid"], [[68155, 68158], "disallowed"], [[68159, 68159], "valid"], [[68160, 68167], "valid", [], "NV8"], [[68168, 68175], "disallowed"], [[68176, 68184], "valid", [], "NV8"], [[68185, 68191], "disallowed"], [[68192, 68220], "valid"], [[68221, 68223], "valid", [], "NV8"], [[68224, 68252], "valid"], [[68253, 68255], "valid", [], "NV8"], [[68256, 68287], "disallowed"], [[68288, 68295], "valid"], [[68296, 68296], "valid", [], "NV8"], [[68297, 68326], "valid"], [[68327, 68330], "disallowed"], [[68331, 68342], "valid", [], "NV8"], [[68343, 68351], "disallowed"], [[68352, 68405], "valid"], [[68406, 68408], "disallowed"], [[68409, 68415], "valid", [], "NV8"], [[68416, 68437], "valid"], [[68438, 68439], "disallowed"], [[68440, 68447], "valid", [], "NV8"], [[68448, 68466], "valid"], [[68467, 68471], "disallowed"], [[68472, 68479], "valid", [], "NV8"], [[68480, 68497], "valid"], [[68498, 68504], "disallowed"], [[68505, 68508], "valid", [], "NV8"], [[68509, 68520], "disallowed"], [[68521, 68527], "valid", [], "NV8"], [[68528, 68607], "disallowed"], [[68608, 68680], "valid"], [[68681, 68735], "disallowed"], [[68736, 68736], "mapped", [68800]], [[68737, 68737], "mapped", [68801]], [[68738, 68738], "mapped", [68802]], [[68739, 68739], "mapped", [68803]], [[68740, 68740], "mapped", [68804]], [[68741, 68741], "mapped", [68805]], [[68742, 68742], "mapped", [68806]], [[68743, 68743], "mapped", [68807]], [[68744, 68744], "mapped", [68808]], [[68745, 68745], "mapped", [68809]], [[68746, 68746], "mapped", [68810]], [[68747, 68747], "mapped", [68811]], [[68748, 68748], "mapped", [68812]], [[68749, 68749], "mapped", [68813]], [[68750, 68750], "mapped", [68814]], [[68751, 68751], "mapped", [68815]], [[68752, 68752], "mapped", [68816]], [[68753, 68753], "mapped", [68817]], [[68754, 68754], "mapped", [68818]], [[68755, 68755], "mapped", [68819]], [[68756, 68756], "mapped", [68820]], [[68757, 68757], "mapped", [68821]], [[68758, 68758], "mapped", [68822]], [[68759, 68759], "mapped", [68823]], [[68760, 68760], "mapped", [68824]], [[68761, 68761], "mapped", [68825]], [[68762, 68762], "mapped", [68826]], [[68763, 68763], "mapped", [68827]], [[68764, 68764], "mapped", [68828]], [[68765, 68765], "mapped", [68829]], [[68766, 68766], "mapped", [68830]], [[68767, 68767], "mapped", [68831]], [[68768, 68768], "mapped", [68832]], [[68769, 68769], "mapped", [68833]], [[68770, 68770], "mapped", [68834]], [[68771, 68771], "mapped", [68835]], [[68772, 68772], "mapped", [68836]], [[68773, 68773], "mapped", [68837]], [[68774, 68774], "mapped", [68838]], [[68775, 68775], "mapped", [68839]], [[68776, 68776], "mapped", [68840]], [[68777, 68777], "mapped", [68841]], [[68778, 68778], "mapped", [68842]], [[68779, 68779], "mapped", [68843]], [[68780, 68780], "mapped", [68844]], [[68781, 68781], "mapped", [68845]], [[68782, 68782], "mapped", [68846]], [[68783, 68783], "mapped", [68847]], [[68784, 68784], "mapped", [68848]], [[68785, 68785], "mapped", [68849]], [[68786, 68786], "mapped", [68850]], [[68787, 68799], "disallowed"], [[68800, 68850], "valid"], [[68851, 68857], "disallowed"], [[68858, 68863], "valid", [], "NV8"], [[68864, 69215], "disallowed"], [[69216, 69246], "valid", [], "NV8"], [[69247, 69631], "disallowed"], [[69632, 69702], "valid"], [[69703, 69709], "valid", [], "NV8"], [[69710, 69713], "disallowed"], [[69714, 69733], "valid", [], "NV8"], [[69734, 69743], "valid"], [[69744, 69758], "disallowed"], [[69759, 69759], "valid"], [[69760, 69818], "valid"], [[69819, 69820], "valid", [], "NV8"], [[69821, 69821], "disallowed"], [[69822, 69825], "valid", [], "NV8"], [[69826, 69839], "disallowed"], [[69840, 69864], "valid"], [[69865, 69871], "disallowed"], [[69872, 69881], "valid"], [[69882, 69887], "disallowed"], [[69888, 69940], "valid"], [[69941, 69941], "disallowed"], [[69942, 69951], "valid"], [[69952, 69955], "valid", [], "NV8"], [[69956, 69967], "disallowed"], [[69968, 70003], "valid"], [[70004, 70005], "valid", [], "NV8"], [[70006, 70006], "valid"], [[70007, 70015], "disallowed"], [[70016, 70084], "valid"], [[70085, 70088], "valid", [], "NV8"], [[70089, 70089], "valid", [], "NV8"], [[70090, 70092], "valid"], [[70093, 70093], "valid", [], "NV8"], [[70094, 70095], "disallowed"], [[70096, 70105], "valid"], [[70106, 70106], "valid"], [[70107, 70107], "valid", [], "NV8"], [[70108, 70108], "valid"], [[70109, 70111], "valid", [], "NV8"], [[70112, 70112], "disallowed"], [[70113, 70132], "valid", [], "NV8"], [[70133, 70143], "disallowed"], [[70144, 70161], "valid"], [[70162, 70162], "disallowed"], [[70163, 70199], "valid"], [[70200, 70205], "valid", [], "NV8"], [[70206, 70271], "disallowed"], [[70272, 70278], "valid"], [[70279, 70279], "disallowed"], [[70280, 70280], "valid"], [[70281, 70281], "disallowed"], [[70282, 70285], "valid"], [[70286, 70286], "disallowed"], [[70287, 70301], "valid"], [[70302, 70302], "disallowed"], [[70303, 70312], "valid"], [[70313, 70313], "valid", [], "NV8"], [[70314, 70319], "disallowed"], [[70320, 70378], "valid"], [[70379, 70383], "disallowed"], [[70384, 70393], "valid"], [[70394, 70399], "disallowed"], [[70400, 70400], "valid"], [[70401, 70403], "valid"], [[70404, 70404], "disallowed"], [[70405, 70412], "valid"], [[70413, 70414], "disallowed"], [[70415, 70416], "valid"], [[70417, 70418], "disallowed"], [[70419, 70440], "valid"], [[70441, 70441], "disallowed"], [[70442, 70448], "valid"], [[70449, 70449], "disallowed"], [[70450, 70451], "valid"], [[70452, 70452], "disallowed"], [[70453, 70457], "valid"], [[70458, 70459], "disallowed"], [[70460, 70468], "valid"], [[70469, 70470], "disallowed"], [[70471, 70472], "valid"], [[70473, 70474], "disallowed"], [[70475, 70477], "valid"], [[70478, 70479], "disallowed"], [[70480, 70480], "valid"], [[70481, 70486], "disallowed"], [[70487, 70487], "valid"], [[70488, 70492], "disallowed"], [[70493, 70499], "valid"], [[70500, 70501], "disallowed"], [[70502, 70508], "valid"], [[70509, 70511], "disallowed"], [[70512, 70516], "valid"], [[70517, 70783], "disallowed"], [[70784, 70853], "valid"], [[70854, 70854], "valid", [], "NV8"], [[70855, 70855], "valid"], [[70856, 70863], "disallowed"], [[70864, 70873], "valid"], [[70874, 71039], "disallowed"], [[71040, 71093], "valid"], [[71094, 71095], "disallowed"], [[71096, 71104], "valid"], [[71105, 71113], "valid", [], "NV8"], [[71114, 71127], "valid", [], "NV8"], [[71128, 71133], "valid"], [[71134, 71167], "disallowed"], [[71168, 71232], "valid"], [[71233, 71235], "valid", [], "NV8"], [[71236, 71236], "valid"], [[71237, 71247], "disallowed"], [[71248, 71257], "valid"], [[71258, 71295], "disallowed"], [[71296, 71351], "valid"], [[71352, 71359], "disallowed"], [[71360, 71369], "valid"], [[71370, 71423], "disallowed"], [[71424, 71449], "valid"], [[71450, 71452], "disallowed"], [[71453, 71467], "valid"], [[71468, 71471], "disallowed"], [[71472, 71481], "valid"], [[71482, 71487], "valid", [], "NV8"], [[71488, 71839], "disallowed"], [[71840, 71840], "mapped", [71872]], [[71841, 71841], "mapped", [71873]], [[71842, 71842], "mapped", [71874]], [[71843, 71843], "mapped", [71875]], [[71844, 71844], "mapped", [71876]], [[71845, 71845], "mapped", [71877]], [[71846, 71846], "mapped", [71878]], [[71847, 71847], "mapped", [71879]], [[71848, 71848], "mapped", [71880]], [[71849, 71849], "mapped", [71881]], [[71850, 71850], "mapped", [71882]], [[71851, 71851], "mapped", [71883]], [[71852, 71852], "mapped", [71884]], [[71853, 71853], "mapped", [71885]], [[71854, 71854], "mapped", [71886]], [[71855, 71855], "mapped", [71887]], [[71856, 71856], "mapped", [71888]], [[71857, 71857], "mapped", [71889]], [[71858, 71858], "mapped", [71890]], [[71859, 71859], "mapped", [71891]], [[71860, 71860], "mapped", [71892]], [[71861, 71861], "mapped", [71893]], [[71862, 71862], "mapped", [71894]], [[71863, 71863], "mapped", [71895]], [[71864, 71864], "mapped", [71896]], [[71865, 71865], "mapped", [71897]], [[71866, 71866], "mapped", [71898]], [[71867, 71867], "mapped", [71899]], [[71868, 71868], "mapped", [71900]], [[71869, 71869], "mapped", [71901]], [[71870, 71870], "mapped", [71902]], [[71871, 71871], "mapped", [71903]], [[71872, 71913], "valid"], [[71914, 71922], "valid", [], "NV8"], [[71923, 71934], "disallowed"], [[71935, 71935], "valid"], [[71936, 72383], "disallowed"], [[72384, 72440], "valid"], [[72441, 73727], "disallowed"], [[73728, 74606], "valid"], [[74607, 74648], "valid"], [[74649, 74649], "valid"], [[74650, 74751], "disallowed"], [[74752, 74850], "valid", [], "NV8"], [[74851, 74862], "valid", [], "NV8"], [[74863, 74863], "disallowed"], [[74864, 74867], "valid", [], "NV8"], [[74868, 74868], "valid", [], "NV8"], [[74869, 74879], "disallowed"], [[74880, 75075], "valid"], [[75076, 77823], "disallowed"], [[77824, 78894], "valid"], [[78895, 82943], "disallowed"], [[82944, 83526], "valid"], [[83527, 92159], "disallowed"], [[92160, 92728], "valid"], [[92729, 92735], "disallowed"], [[92736, 92766], "valid"], [[92767, 92767], "disallowed"], [[92768, 92777], "valid"], [[92778, 92781], "disallowed"], [[92782, 92783], "valid", [], "NV8"], [[92784, 92879], "disallowed"], [[92880, 92909], "valid"], [[92910, 92911], "disallowed"], [[92912, 92916], "valid"], [[92917, 92917], "valid", [], "NV8"], [[92918, 92927], "disallowed"], [[92928, 92982], "valid"], [[92983, 92991], "valid", [], "NV8"], [[92992, 92995], "valid"], [[92996, 92997], "valid", [], "NV8"], [[92998, 93007], "disallowed"], [[93008, 93017], "valid"], [[93018, 93018], "disallowed"], [[93019, 93025], "valid", [], "NV8"], [[93026, 93026], "disallowed"], [[93027, 93047], "valid"], [[93048, 93052], "disallowed"], [[93053, 93071], "valid"], [[93072, 93951], "disallowed"], [[93952, 94020], "valid"], [[94021, 94031], "disallowed"], [[94032, 94078], "valid"], [[94079, 94094], "disallowed"], [[94095, 94111], "valid"], [[94112, 110591], "disallowed"], [[110592, 110593], "valid"], [[110594, 113663], "disallowed"], [[113664, 113770], "valid"], [[113771, 113775], "disallowed"], [[113776, 113788], "valid"], [[113789, 113791], "disallowed"], [[113792, 113800], "valid"], [[113801, 113807], "disallowed"], [[113808, 113817], "valid"], [[113818, 113819], "disallowed"], [[113820, 113820], "valid", [], "NV8"], [[113821, 113822], "valid"], [[113823, 113823], "valid", [], "NV8"], [[113824, 113827], "ignored"], [[113828, 118783], "disallowed"], [[118784, 119029], "valid", [], "NV8"], [[119030, 119039], "disallowed"], [[119040, 119078], "valid", [], "NV8"], [[119079, 119080], "disallowed"], [[119081, 119081], "valid", [], "NV8"], [[119082, 119133], "valid", [], "NV8"], [[119134, 119134], "mapped", [119127, 119141]], [[119135, 119135], "mapped", [119128, 119141]], [[119136, 119136], "mapped", [119128, 119141, 119150]], [[119137, 119137], "mapped", [119128, 119141, 119151]], [[119138, 119138], "mapped", [119128, 119141, 119152]], [[119139, 119139], "mapped", [119128, 119141, 119153]], [[119140, 119140], "mapped", [119128, 119141, 119154]], [[119141, 119154], "valid", [], "NV8"], [[119155, 119162], "disallowed"], [[119163, 119226], "valid", [], "NV8"], [[119227, 119227], "mapped", [119225, 119141]], [[119228, 119228], "mapped", [119226, 119141]], [[119229, 119229], "mapped", [119225, 119141, 119150]], [[119230, 119230], "mapped", [119226, 119141, 119150]], [[119231, 119231], "mapped", [119225, 119141, 119151]], [[119232, 119232], "mapped", [119226, 119141, 119151]], [[119233, 119261], "valid", [], "NV8"], [[119262, 119272], "valid", [], "NV8"], [[119273, 119295], "disallowed"], [[119296, 119365], "valid", [], "NV8"], [[119366, 119551], "disallowed"], [[119552, 119638], "valid", [], "NV8"], [[119639, 119647], "disallowed"], [[119648, 119665], "valid", [], "NV8"], [[119666, 119807], "disallowed"], [[119808, 119808], "mapped", [97]], [[119809, 119809], "mapped", [98]], [[119810, 119810], "mapped", [99]], [[119811, 119811], "mapped", [100]], [[119812, 119812], "mapped", [101]], [[119813, 119813], "mapped", [102]], [[119814, 119814], "mapped", [103]], [[119815, 119815], "mapped", [104]], [[119816, 119816], "mapped", [105]], [[119817, 119817], "mapped", [106]], [[119818, 119818], "mapped", [107]], [[119819, 119819], "mapped", [108]], [[119820, 119820], "mapped", [109]], [[119821, 119821], "mapped", [110]], [[119822, 119822], "mapped", [111]], [[119823, 119823], "mapped", [112]], [[119824, 119824], "mapped", [113]], [[119825, 119825], "mapped", [114]], [[119826, 119826], "mapped", [115]], [[119827, 119827], "mapped", [116]], [[119828, 119828], "mapped", [117]], [[119829, 119829], "mapped", [118]], [[119830, 119830], "mapped", [119]], [[119831, 119831], "mapped", [120]], [[119832, 119832], "mapped", [121]], [[119833, 119833], "mapped", [122]], [[119834, 119834], "mapped", [97]], [[119835, 119835], "mapped", [98]], [[119836, 119836], "mapped", [99]], [[119837, 119837], "mapped", [100]], [[119838, 119838], "mapped", [101]], [[119839, 119839], "mapped", [102]], [[119840, 119840], "mapped", [103]], [[119841, 119841], "mapped", [104]], [[119842, 119842], "mapped", [105]], [[119843, 119843], "mapped", [106]], [[119844, 119844], "mapped", [107]], [[119845, 119845], "mapped", [108]], [[119846, 119846], "mapped", [109]], [[119847, 119847], "mapped", [110]], [[119848, 119848], "mapped", [111]], [[119849, 119849], "mapped", [112]], [[119850, 119850], "mapped", [113]], [[119851, 119851], "mapped", [114]], [[119852, 119852], "mapped", [115]], [[119853, 119853], "mapped", [116]], [[119854, 119854], "mapped", [117]], [[119855, 119855], "mapped", [118]], [[119856, 119856], "mapped", [119]], [[119857, 119857], "mapped", [120]], [[119858, 119858], "mapped", [121]], [[119859, 119859], "mapped", [122]], [[119860, 119860], "mapped", [97]], [[119861, 119861], "mapped", [98]], [[119862, 119862], "mapped", [99]], [[119863, 119863], "mapped", [100]], [[119864, 119864], "mapped", [101]], [[119865, 119865], "mapped", [102]], [[119866, 119866], "mapped", [103]], [[119867, 119867], "mapped", [104]], [[119868, 119868], "mapped", [105]], [[119869, 119869], "mapped", [106]], [[119870, 119870], "mapped", [107]], [[119871, 119871], "mapped", [108]], [[119872, 119872], "mapped", [109]], [[119873, 119873], "mapped", [110]], [[119874, 119874], "mapped", [111]], [[119875, 119875], "mapped", [112]], [[119876, 119876], "mapped", [113]], [[119877, 119877], "mapped", [114]], [[119878, 119878], "mapped", [115]], [[119879, 119879], "mapped", [116]], [[119880, 119880], "mapped", [117]], [[119881, 119881], "mapped", [118]], [[119882, 119882], "mapped", [119]], [[119883, 119883], "mapped", [120]], [[119884, 119884], "mapped", [121]], [[119885, 119885], "mapped", [122]], [[119886, 119886], "mapped", [97]], [[119887, 119887], "mapped", [98]], [[119888, 119888], "mapped", [99]], [[119889, 119889], "mapped", [100]], [[119890, 119890], "mapped", [101]], [[119891, 119891], "mapped", [102]], [[119892, 119892], "mapped", [103]], [[119893, 119893], "disallowed"], [[119894, 119894], "mapped", [105]], [[119895, 119895], "mapped", [106]], [[119896, 119896], "mapped", [107]], [[119897, 119897], "mapped", [108]], [[119898, 119898], "mapped", [109]], [[119899, 119899], "mapped", [110]], [[119900, 119900], "mapped", [111]], [[119901, 119901], "mapped", [112]], [[119902, 119902], "mapped", [113]], [[119903, 119903], "mapped", [114]], [[119904, 119904], "mapped", [115]], [[119905, 119905], "mapped", [116]], [[119906, 119906], "mapped", [117]], [[119907, 119907], "mapped", [118]], [[119908, 119908], "mapped", [119]], [[119909, 119909], "mapped", [120]], [[119910, 119910], "mapped", [121]], [[119911, 119911], "mapped", [122]], [[119912, 119912], "mapped", [97]], [[119913, 119913], "mapped", [98]], [[119914, 119914], "mapped", [99]], [[119915, 119915], "mapped", [100]], [[119916, 119916], "mapped", [101]], [[119917, 119917], "mapped", [102]], [[119918, 119918], "mapped", [103]], [[119919, 119919], "mapped", [104]], [[119920, 119920], "mapped", [105]], [[119921, 119921], "mapped", [106]], [[119922, 119922], "mapped", [107]], [[119923, 119923], "mapped", [108]], [[119924, 119924], "mapped", [109]], [[119925, 119925], "mapped", [110]], [[119926, 119926], "mapped", [111]], [[119927, 119927], "mapped", [112]], [[119928, 119928], "mapped", [113]], [[119929, 119929], "mapped", [114]], [[119930, 119930], "mapped", [115]], [[119931, 119931], "mapped", [116]], [[119932, 119932], "mapped", [117]], [[119933, 119933], "mapped", [118]], [[119934, 119934], "mapped", [119]], [[119935, 119935], "mapped", [120]], [[119936, 119936], "mapped", [121]], [[119937, 119937], "mapped", [122]], [[119938, 119938], "mapped", [97]], [[119939, 119939], "mapped", [98]], [[119940, 119940], "mapped", [99]], [[119941, 119941], "mapped", [100]], [[119942, 119942], "mapped", [101]], [[119943, 119943], "mapped", [102]], [[119944, 119944], "mapped", [103]], [[119945, 119945], "mapped", [104]], [[119946, 119946], "mapped", [105]], [[119947, 119947], "mapped", [106]], [[119948, 119948], "mapped", [107]], [[119949, 119949], "mapped", [108]], [[119950, 119950], "mapped", [109]], [[119951, 119951], "mapped", [110]], [[119952, 119952], "mapped", [111]], [[119953, 119953], "mapped", [112]], [[119954, 119954], "mapped", [113]], [[119955, 119955], "mapped", [114]], [[119956, 119956], "mapped", [115]], [[119957, 119957], "mapped", [116]], [[119958, 119958], "mapped", [117]], [[119959, 119959], "mapped", [118]], [[119960, 119960], "mapped", [119]], [[119961, 119961], "mapped", [120]], [[119962, 119962], "mapped", [121]], [[119963, 119963], "mapped", [122]], [[119964, 119964], "mapped", [97]], [[119965, 119965], "disallowed"], [[119966, 119966], "mapped", [99]], [[119967, 119967], "mapped", [100]], [[119968, 119969], "disallowed"], [[119970, 119970], "mapped", [103]], [[119971, 119972], "disallowed"], [[119973, 119973], "mapped", [106]], [[119974, 119974], "mapped", [107]], [[119975, 119976], "disallowed"], [[119977, 119977], "mapped", [110]], [[119978, 119978], "mapped", [111]], [[119979, 119979], "mapped", [112]], [[119980, 119980], "mapped", [113]], [[119981, 119981], "disallowed"], [[119982, 119982], "mapped", [115]], [[119983, 119983], "mapped", [116]], [[119984, 119984], "mapped", [117]], [[119985, 119985], "mapped", [118]], [[119986, 119986], "mapped", [119]], [[119987, 119987], "mapped", [120]], [[119988, 119988], "mapped", [121]], [[119989, 119989], "mapped", [122]], [[119990, 119990], "mapped", [97]], [[119991, 119991], "mapped", [98]], [[119992, 119992], "mapped", [99]], [[119993, 119993], "mapped", [100]], [[119994, 119994], "disallowed"], [[119995, 119995], "mapped", [102]], [[119996, 119996], "disallowed"], [[119997, 119997], "mapped", [104]], [[119998, 119998], "mapped", [105]], [[119999, 119999], "mapped", [106]], [[12e4, 12e4], "mapped", [107]], [[120001, 120001], "mapped", [108]], [[120002, 120002], "mapped", [109]], [[120003, 120003], "mapped", [110]], [[120004, 120004], "disallowed"], [[120005, 120005], "mapped", [112]], [[120006, 120006], "mapped", [113]], [[120007, 120007], "mapped", [114]], [[120008, 120008], "mapped", [115]], [[120009, 120009], "mapped", [116]], [[120010, 120010], "mapped", [117]], [[120011, 120011], "mapped", [118]], [[120012, 120012], "mapped", [119]], [[120013, 120013], "mapped", [120]], [[120014, 120014], "mapped", [121]], [[120015, 120015], "mapped", [122]], [[120016, 120016], "mapped", [97]], [[120017, 120017], "mapped", [98]], [[120018, 120018], "mapped", [99]], [[120019, 120019], "mapped", [100]], [[120020, 120020], "mapped", [101]], [[120021, 120021], "mapped", [102]], [[120022, 120022], "mapped", [103]], [[120023, 120023], "mapped", [104]], [[120024, 120024], "mapped", [105]], [[120025, 120025], "mapped", [106]], [[120026, 120026], "mapped", [107]], [[120027, 120027], "mapped", [108]], [[120028, 120028], "mapped", [109]], [[120029, 120029], "mapped", [110]], [[120030, 120030], "mapped", [111]], [[120031, 120031], "mapped", [112]], [[120032, 120032], "mapped", [113]], [[120033, 120033], "mapped", [114]], [[120034, 120034], "mapped", [115]], [[120035, 120035], "mapped", [116]], [[120036, 120036], "mapped", [117]], [[120037, 120037], "mapped", [118]], [[120038, 120038], "mapped", [119]], [[120039, 120039], "mapped", [120]], [[120040, 120040], "mapped", [121]], [[120041, 120041], "mapped", [122]], [[120042, 120042], "mapped", [97]], [[120043, 120043], "mapped", [98]], [[120044, 120044], "mapped", [99]], [[120045, 120045], "mapped", [100]], [[120046, 120046], "mapped", [101]], [[120047, 120047], "mapped", [102]], [[120048, 120048], "mapped", [103]], [[120049, 120049], "mapped", [104]], [[120050, 120050], "mapped", [105]], [[120051, 120051], "mapped", [106]], [[120052, 120052], "mapped", [107]], [[120053, 120053], "mapped", [108]], [[120054, 120054], "mapped", [109]], [[120055, 120055], "mapped", [110]], [[120056, 120056], "mapped", [111]], [[120057, 120057], "mapped", [112]], [[120058, 120058], "mapped", [113]], [[120059, 120059], "mapped", [114]], [[120060, 120060], "mapped", [115]], [[120061, 120061], "mapped", [116]], [[120062, 120062], "mapped", [117]], [[120063, 120063], "mapped", [118]], [[120064, 120064], "mapped", [119]], [[120065, 120065], "mapped", [120]], [[120066, 120066], "mapped", [121]], [[120067, 120067], "mapped", [122]], [[120068, 120068], "mapped", [97]], [[120069, 120069], "mapped", [98]], [[120070, 120070], "disallowed"], [[120071, 120071], "mapped", [100]], [[120072, 120072], "mapped", [101]], [[120073, 120073], "mapped", [102]], [[120074, 120074], "mapped", [103]], [[120075, 120076], "disallowed"], [[120077, 120077], "mapped", [106]], [[120078, 120078], "mapped", [107]], [[120079, 120079], "mapped", [108]], [[120080, 120080], "mapped", [109]], [[120081, 120081], "mapped", [110]], [[120082, 120082], "mapped", [111]], [[120083, 120083], "mapped", [112]], [[120084, 120084], "mapped", [113]], [[120085, 120085], "disallowed"], [[120086, 120086], "mapped", [115]], [[120087, 120087], "mapped", [116]], [[120088, 120088], "mapped", [117]], [[120089, 120089], "mapped", [118]], [[120090, 120090], "mapped", [119]], [[120091, 120091], "mapped", [120]], [[120092, 120092], "mapped", [121]], [[120093, 120093], "disallowed"], [[120094, 120094], "mapped", [97]], [[120095, 120095], "mapped", [98]], [[120096, 120096], "mapped", [99]], [[120097, 120097], "mapped", [100]], [[120098, 120098], "mapped", [101]], [[120099, 120099], "mapped", [102]], [[120100, 120100], "mapped", [103]], [[120101, 120101], "mapped", [104]], [[120102, 120102], "mapped", [105]], [[120103, 120103], "mapped", [106]], [[120104, 120104], "mapped", [107]], [[120105, 120105], "mapped", [108]], [[120106, 120106], "mapped", [109]], [[120107, 120107], "mapped", [110]], [[120108, 120108], "mapped", [111]], [[120109, 120109], "mapped", [112]], [[120110, 120110], "mapped", [113]], [[120111, 120111], "mapped", [114]], [[120112, 120112], "mapped", [115]], [[120113, 120113], "mapped", [116]], [[120114, 120114], "mapped", [117]], [[120115, 120115], "mapped", [118]], [[120116, 120116], "mapped", [119]], [[120117, 120117], "mapped", [120]], [[120118, 120118], "mapped", [121]], [[120119, 120119], "mapped", [122]], [[120120, 120120], "mapped", [97]], [[120121, 120121], "mapped", [98]], [[120122, 120122], "disallowed"], [[120123, 120123], "mapped", [100]], [[120124, 120124], "mapped", [101]], [[120125, 120125], "mapped", [102]], [[120126, 120126], "mapped", [103]], [[120127, 120127], "disallowed"], [[120128, 120128], "mapped", [105]], [[120129, 120129], "mapped", [106]], [[120130, 120130], "mapped", [107]], [[120131, 120131], "mapped", [108]], [[120132, 120132], "mapped", [109]], [[120133, 120133], "disallowed"], [[120134, 120134], "mapped", [111]], [[120135, 120137], "disallowed"], [[120138, 120138], "mapped", [115]], [[120139, 120139], "mapped", [116]], [[120140, 120140], "mapped", [117]], [[120141, 120141], "mapped", [118]], [[120142, 120142], "mapped", [119]], [[120143, 120143], "mapped", [120]], [[120144, 120144], "mapped", [121]], [[120145, 120145], "disallowed"], [[120146, 120146], "mapped", [97]], [[120147, 120147], "mapped", [98]], [[120148, 120148], "mapped", [99]], [[120149, 120149], "mapped", [100]], [[120150, 120150], "mapped", [101]], [[120151, 120151], "mapped", [102]], [[120152, 120152], "mapped", [103]], [[120153, 120153], "mapped", [104]], [[120154, 120154], "mapped", [105]], [[120155, 120155], "mapped", [106]], [[120156, 120156], "mapped", [107]], [[120157, 120157], "mapped", [108]], [[120158, 120158], "mapped", [109]], [[120159, 120159], "mapped", [110]], [[120160, 120160], "mapped", [111]], [[120161, 120161], "mapped", [112]], [[120162, 120162], "mapped", [113]], [[120163, 120163], "mapped", [114]], [[120164, 120164], "mapped", [115]], [[120165, 120165], "mapped", [116]], [[120166, 120166], "mapped", [117]], [[120167, 120167], "mapped", [118]], [[120168, 120168], "mapped", [119]], [[120169, 120169], "mapped", [120]], [[120170, 120170], "mapped", [121]], [[120171, 120171], "mapped", [122]], [[120172, 120172], "mapped", [97]], [[120173, 120173], "mapped", [98]], [[120174, 120174], "mapped", [99]], [[120175, 120175], "mapped", [100]], [[120176, 120176], "mapped", [101]], [[120177, 120177], "mapped", [102]], [[120178, 120178], "mapped", [103]], [[120179, 120179], "mapped", [104]], [[120180, 120180], "mapped", [105]], [[120181, 120181], "mapped", [106]], [[120182, 120182], "mapped", [107]], [[120183, 120183], "mapped", [108]], [[120184, 120184], "mapped", [109]], [[120185, 120185], "mapped", [110]], [[120186, 120186], "mapped", [111]], [[120187, 120187], "mapped", [112]], [[120188, 120188], "mapped", [113]], [[120189, 120189], "mapped", [114]], [[120190, 120190], "mapped", [115]], [[120191, 120191], "mapped", [116]], [[120192, 120192], "mapped", [117]], [[120193, 120193], "mapped", [118]], [[120194, 120194], "mapped", [119]], [[120195, 120195], "mapped", [120]], [[120196, 120196], "mapped", [121]], [[120197, 120197], "mapped", [122]], [[120198, 120198], "mapped", [97]], [[120199, 120199], "mapped", [98]], [[120200, 120200], "mapped", [99]], [[120201, 120201], "mapped", [100]], [[120202, 120202], "mapped", [101]], [[120203, 120203], "mapped", [102]], [[120204, 120204], "mapped", [103]], [[120205, 120205], "mapped", [104]], [[120206, 120206], "mapped", [105]], [[120207, 120207], "mapped", [106]], [[120208, 120208], "mapped", [107]], [[120209, 120209], "mapped", [108]], [[120210, 120210], "mapped", [109]], [[120211, 120211], "mapped", [110]], [[120212, 120212], "mapped", [111]], [[120213, 120213], "mapped", [112]], [[120214, 120214], "mapped", [113]], [[120215, 120215], "mapped", [114]], [[120216, 120216], "mapped", [115]], [[120217, 120217], "mapped", [116]], [[120218, 120218], "mapped", [117]], [[120219, 120219], "mapped", [118]], [[120220, 120220], "mapped", [119]], [[120221, 120221], "mapped", [120]], [[120222, 120222], "mapped", [121]], [[120223, 120223], "mapped", [122]], [[120224, 120224], "mapped", [97]], [[120225, 120225], "mapped", [98]], [[120226, 120226], "mapped", [99]], [[120227, 120227], "mapped", [100]], [[120228, 120228], "mapped", [101]], [[120229, 120229], "mapped", [102]], [[120230, 120230], "mapped", [103]], [[120231, 120231], "mapped", [104]], [[120232, 120232], "mapped", [105]], [[120233, 120233], "mapped", [106]], [[120234, 120234], "mapped", [107]], [[120235, 120235], "mapped", [108]], [[120236, 120236], "mapped", [109]], [[120237, 120237], "mapped", [110]], [[120238, 120238], "mapped", [111]], [[120239, 120239], "mapped", [112]], [[120240, 120240], "mapped", [113]], [[120241, 120241], "mapped", [114]], [[120242, 120242], "mapped", [115]], [[120243, 120243], "mapped", [116]], [[120244, 120244], "mapped", [117]], [[120245, 120245], "mapped", [118]], [[120246, 120246], "mapped", [119]], [[120247, 120247], "mapped", [120]], [[120248, 120248], "mapped", [121]], [[120249, 120249], "mapped", [122]], [[120250, 120250], "mapped", [97]], [[120251, 120251], "mapped", [98]], [[120252, 120252], "mapped", [99]], [[120253, 120253], "mapped", [100]], [[120254, 120254], "mapped", [101]], [[120255, 120255], "mapped", [102]], [[120256, 120256], "mapped", [103]], [[120257, 120257], "mapped", [104]], [[120258, 120258], "mapped", [105]], [[120259, 120259], "mapped", [106]], [[120260, 120260], "mapped", [107]], [[120261, 120261], "mapped", [108]], [[120262, 120262], "mapped", [109]], [[120263, 120263], "mapped", [110]], [[120264, 120264], "mapped", [111]], [[120265, 120265], "mapped", [112]], [[120266, 120266], "mapped", [113]], [[120267, 120267], "mapped", [114]], [[120268, 120268], "mapped", [115]], [[120269, 120269], "mapped", [116]], [[120270, 120270], "mapped", [117]], [[120271, 120271], "mapped", [118]], [[120272, 120272], "mapped", [119]], [[120273, 120273], "mapped", [120]], [[120274, 120274], "mapped", [121]], [[120275, 120275], "mapped", [122]], [[120276, 120276], "mapped", [97]], [[120277, 120277], "mapped", [98]], [[120278, 120278], "mapped", [99]], [[120279, 120279], "mapped", [100]], [[120280, 120280], "mapped", [101]], [[120281, 120281], "mapped", [102]], [[120282, 120282], "mapped", [103]], [[120283, 120283], "mapped", [104]], [[120284, 120284], "mapped", [105]], [[120285, 120285], "mapped", [106]], [[120286, 120286], "mapped", [107]], [[120287, 120287], "mapped", [108]], [[120288, 120288], "mapped", [109]], [[120289, 120289], "mapped", [110]], [[120290, 120290], "mapped", [111]], [[120291, 120291], "mapped", [112]], [[120292, 120292], "mapped", [113]], [[120293, 120293], "mapped", [114]], [[120294, 120294], "mapped", [115]], [[120295, 120295], "mapped", [116]], [[120296, 120296], "mapped", [117]], [[120297, 120297], "mapped", [118]], [[120298, 120298], "mapped", [119]], [[120299, 120299], "mapped", [120]], [[120300, 120300], "mapped", [121]], [[120301, 120301], "mapped", [122]], [[120302, 120302], "mapped", [97]], [[120303, 120303], "mapped", [98]], [[120304, 120304], "mapped", [99]], [[120305, 120305], "mapped", [100]], [[120306, 120306], "mapped", [101]], [[120307, 120307], "mapped", [102]], [[120308, 120308], "mapped", [103]], [[120309, 120309], "mapped", [104]], [[120310, 120310], "mapped", [105]], [[120311, 120311], "mapped", [106]], [[120312, 120312], "mapped", [107]], [[120313, 120313], "mapped", [108]], [[120314, 120314], "mapped", [109]], [[120315, 120315], "mapped", [110]], [[120316, 120316], "mapped", [111]], [[120317, 120317], "mapped", [112]], [[120318, 120318], "mapped", [113]], [[120319, 120319], "mapped", [114]], [[120320, 120320], "mapped", [115]], [[120321, 120321], "mapped", [116]], [[120322, 120322], "mapped", [117]], [[120323, 120323], "mapped", [118]], [[120324, 120324], "mapped", [119]], [[120325, 120325], "mapped", [120]], [[120326, 120326], "mapped", [121]], [[120327, 120327], "mapped", [122]], [[120328, 120328], "mapped", [97]], [[120329, 120329], "mapped", [98]], [[120330, 120330], "mapped", [99]], [[120331, 120331], "mapped", [100]], [[120332, 120332], "mapped", [101]], [[120333, 120333], "mapped", [102]], [[120334, 120334], "mapped", [103]], [[120335, 120335], "mapped", [104]], [[120336, 120336], "mapped", [105]], [[120337, 120337], "mapped", [106]], [[120338, 120338], "mapped", [107]], [[120339, 120339], "mapped", [108]], [[120340, 120340], "mapped", [109]], [[120341, 120341], "mapped", [110]], [[120342, 120342], "mapped", [111]], [[120343, 120343], "mapped", [112]], [[120344, 120344], "mapped", [113]], [[120345, 120345], "mapped", [114]], [[120346, 120346], "mapped", [115]], [[120347, 120347], "mapped", [116]], [[120348, 120348], "mapped", [117]], [[120349, 120349], "mapped", [118]], [[120350, 120350], "mapped", [119]], [[120351, 120351], "mapped", [120]], [[120352, 120352], "mapped", [121]], [[120353, 120353], "mapped", [122]], [[120354, 120354], "mapped", [97]], [[120355, 120355], "mapped", [98]], [[120356, 120356], "mapped", [99]], [[120357, 120357], "mapped", [100]], [[120358, 120358], "mapped", [101]], [[120359, 120359], "mapped", [102]], [[120360, 120360], "mapped", [103]], [[120361, 120361], "mapped", [104]], [[120362, 120362], "mapped", [105]], [[120363, 120363], "mapped", [106]], [[120364, 120364], "mapped", [107]], [[120365, 120365], "mapped", [108]], [[120366, 120366], "mapped", [109]], [[120367, 120367], "mapped", [110]], [[120368, 120368], "mapped", [111]], [[120369, 120369], "mapped", [112]], [[120370, 120370], "mapped", [113]], [[120371, 120371], "mapped", [114]], [[120372, 120372], "mapped", [115]], [[120373, 120373], "mapped", [116]], [[120374, 120374], "mapped", [117]], [[120375, 120375], "mapped", [118]], [[120376, 120376], "mapped", [119]], [[120377, 120377], "mapped", [120]], [[120378, 120378], "mapped", [121]], [[120379, 120379], "mapped", [122]], [[120380, 120380], "mapped", [97]], [[120381, 120381], "mapped", [98]], [[120382, 120382], "mapped", [99]], [[120383, 120383], "mapped", [100]], [[120384, 120384], "mapped", [101]], [[120385, 120385], "mapped", [102]], [[120386, 120386], "mapped", [103]], [[120387, 120387], "mapped", [104]], [[120388, 120388], "mapped", [105]], [[120389, 120389], "mapped", [106]], [[120390, 120390], "mapped", [107]], [[120391, 120391], "mapped", [108]], [[120392, 120392], "mapped", [109]], [[120393, 120393], "mapped", [110]], [[120394, 120394], "mapped", [111]], [[120395, 120395], "mapped", [112]], [[120396, 120396], "mapped", [113]], [[120397, 120397], "mapped", [114]], [[120398, 120398], "mapped", [115]], [[120399, 120399], "mapped", [116]], [[120400, 120400], "mapped", [117]], [[120401, 120401], "mapped", [118]], [[120402, 120402], "mapped", [119]], [[120403, 120403], "mapped", [120]], [[120404, 120404], "mapped", [121]], [[120405, 120405], "mapped", [122]], [[120406, 120406], "mapped", [97]], [[120407, 120407], "mapped", [98]], [[120408, 120408], "mapped", [99]], [[120409, 120409], "mapped", [100]], [[120410, 120410], "mapped", [101]], [[120411, 120411], "mapped", [102]], [[120412, 120412], "mapped", [103]], [[120413, 120413], "mapped", [104]], [[120414, 120414], "mapped", [105]], [[120415, 120415], "mapped", [106]], [[120416, 120416], "mapped", [107]], [[120417, 120417], "mapped", [108]], [[120418, 120418], "mapped", [109]], [[120419, 120419], "mapped", [110]], [[120420, 120420], "mapped", [111]], [[120421, 120421], "mapped", [112]], [[120422, 120422], "mapped", [113]], [[120423, 120423], "mapped", [114]], [[120424, 120424], "mapped", [115]], [[120425, 120425], "mapped", [116]], [[120426, 120426], "mapped", [117]], [[120427, 120427], "mapped", [118]], [[120428, 120428], "mapped", [119]], [[120429, 120429], "mapped", [120]], [[120430, 120430], "mapped", [121]], [[120431, 120431], "mapped", [122]], [[120432, 120432], "mapped", [97]], [[120433, 120433], "mapped", [98]], [[120434, 120434], "mapped", [99]], [[120435, 120435], "mapped", [100]], [[120436, 120436], "mapped", [101]], [[120437, 120437], "mapped", [102]], [[120438, 120438], "mapped", [103]], [[120439, 120439], "mapped", [104]], [[120440, 120440], "mapped", [105]], [[120441, 120441], "mapped", [106]], [[120442, 120442], "mapped", [107]], [[120443, 120443], "mapped", [108]], [[120444, 120444], "mapped", [109]], [[120445, 120445], "mapped", [110]], [[120446, 120446], "mapped", [111]], [[120447, 120447], "mapped", [112]], [[120448, 120448], "mapped", [113]], [[120449, 120449], "mapped", [114]], [[120450, 120450], "mapped", [115]], [[120451, 120451], "mapped", [116]], [[120452, 120452], "mapped", [117]], [[120453, 120453], "mapped", [118]], [[120454, 120454], "mapped", [119]], [[120455, 120455], "mapped", [120]], [[120456, 120456], "mapped", [121]], [[120457, 120457], "mapped", [122]], [[120458, 120458], "mapped", [97]], [[120459, 120459], "mapped", [98]], [[120460, 120460], "mapped", [99]], [[120461, 120461], "mapped", [100]], [[120462, 120462], "mapped", [101]], [[120463, 120463], "mapped", [102]], [[120464, 120464], "mapped", [103]], [[120465, 120465], "mapped", [104]], [[120466, 120466], "mapped", [105]], [[120467, 120467], "mapped", [106]], [[120468, 120468], "mapped", [107]], [[120469, 120469], "mapped", [108]], [[120470, 120470], "mapped", [109]], [[120471, 120471], "mapped", [110]], [[120472, 120472], "mapped", [111]], [[120473, 120473], "mapped", [112]], [[120474, 120474], "mapped", [113]], [[120475, 120475], "mapped", [114]], [[120476, 120476], "mapped", [115]], [[120477, 120477], "mapped", [116]], [[120478, 120478], "mapped", [117]], [[120479, 120479], "mapped", [118]], [[120480, 120480], "mapped", [119]], [[120481, 120481], "mapped", [120]], [[120482, 120482], "mapped", [121]], [[120483, 120483], "mapped", [122]], [[120484, 120484], "mapped", [305]], [[120485, 120485], "mapped", [567]], [[120486, 120487], "disallowed"], [[120488, 120488], "mapped", [945]], [[120489, 120489], "mapped", [946]], [[120490, 120490], "mapped", [947]], [[120491, 120491], "mapped", [948]], [[120492, 120492], "mapped", [949]], [[120493, 120493], "mapped", [950]], [[120494, 120494], "mapped", [951]], [[120495, 120495], "mapped", [952]], [[120496, 120496], "mapped", [953]], [[120497, 120497], "mapped", [954]], [[120498, 120498], "mapped", [955]], [[120499, 120499], "mapped", [956]], [[120500, 120500], "mapped", [957]], [[120501, 120501], "mapped", [958]], [[120502, 120502], "mapped", [959]], [[120503, 120503], "mapped", [960]], [[120504, 120504], "mapped", [961]], [[120505, 120505], "mapped", [952]], [[120506, 120506], "mapped", [963]], [[120507, 120507], "mapped", [964]], [[120508, 120508], "mapped", [965]], [[120509, 120509], "mapped", [966]], [[120510, 120510], "mapped", [967]], [[120511, 120511], "mapped", [968]], [[120512, 120512], "mapped", [969]], [[120513, 120513], "mapped", [8711]], [[120514, 120514], "mapped", [945]], [[120515, 120515], "mapped", [946]], [[120516, 120516], "mapped", [947]], [[120517, 120517], "mapped", [948]], [[120518, 120518], "mapped", [949]], [[120519, 120519], "mapped", [950]], [[120520, 120520], "mapped", [951]], [[120521, 120521], "mapped", [952]], [[120522, 120522], "mapped", [953]], [[120523, 120523], "mapped", [954]], [[120524, 120524], "mapped", [955]], [[120525, 120525], "mapped", [956]], [[120526, 120526], "mapped", [957]], [[120527, 120527], "mapped", [958]], [[120528, 120528], "mapped", [959]], [[120529, 120529], "mapped", [960]], [[120530, 120530], "mapped", [961]], [[120531, 120532], "mapped", [963]], [[120533, 120533], "mapped", [964]], [[120534, 120534], "mapped", [965]], [[120535, 120535], "mapped", [966]], [[120536, 120536], "mapped", [967]], [[120537, 120537], "mapped", [968]], [[120538, 120538], "mapped", [969]], [[120539, 120539], "mapped", [8706]], [[120540, 120540], "mapped", [949]], [[120541, 120541], "mapped", [952]], [[120542, 120542], "mapped", [954]], [[120543, 120543], "mapped", [966]], [[120544, 120544], "mapped", [961]], [[120545, 120545], "mapped", [960]], [[120546, 120546], "mapped", [945]], [[120547, 120547], "mapped", [946]], [[120548, 120548], "mapped", [947]], [[120549, 120549], "mapped", [948]], [[120550, 120550], "mapped", [949]], [[120551, 120551], "mapped", [950]], [[120552, 120552], "mapped", [951]], [[120553, 120553], "mapped", [952]], [[120554, 120554], "mapped", [953]], [[120555, 120555], "mapped", [954]], [[120556, 120556], "mapped", [955]], [[120557, 120557], "mapped", [956]], [[120558, 120558], "mapped", [957]], [[120559, 120559], "mapped", [958]], [[120560, 120560], "mapped", [959]], [[120561, 120561], "mapped", [960]], [[120562, 120562], "mapped", [961]], [[120563, 120563], "mapped", [952]], [[120564, 120564], "mapped", [963]], [[120565, 120565], "mapped", [964]], [[120566, 120566], "mapped", [965]], [[120567, 120567], "mapped", [966]], [[120568, 120568], "mapped", [967]], [[120569, 120569], "mapped", [968]], [[120570, 120570], "mapped", [969]], [[120571, 120571], "mapped", [8711]], [[120572, 120572], "mapped", [945]], [[120573, 120573], "mapped", [946]], [[120574, 120574], "mapped", [947]], [[120575, 120575], "mapped", [948]], [[120576, 120576], "mapped", [949]], [[120577, 120577], "mapped", [950]], [[120578, 120578], "mapped", [951]], [[120579, 120579], "mapped", [952]], [[120580, 120580], "mapped", [953]], [[120581, 120581], "mapped", [954]], [[120582, 120582], "mapped", [955]], [[120583, 120583], "mapped", [956]], [[120584, 120584], "mapped", [957]], [[120585, 120585], "mapped", [958]], [[120586, 120586], "mapped", [959]], [[120587, 120587], "mapped", [960]], [[120588, 120588], "mapped", [961]], [[120589, 120590], "mapped", [963]], [[120591, 120591], "mapped", [964]], [[120592, 120592], "mapped", [965]], [[120593, 120593], "mapped", [966]], [[120594, 120594], "mapped", [967]], [[120595, 120595], "mapped", [968]], [[120596, 120596], "mapped", [969]], [[120597, 120597], "mapped", [8706]], [[120598, 120598], "mapped", [949]], [[120599, 120599], "mapped", [952]], [[120600, 120600], "mapped", [954]], [[120601, 120601], "mapped", [966]], [[120602, 120602], "mapped", [961]], [[120603, 120603], "mapped", [960]], [[120604, 120604], "mapped", [945]], [[120605, 120605], "mapped", [946]], [[120606, 120606], "mapped", [947]], [[120607, 120607], "mapped", [948]], [[120608, 120608], "mapped", [949]], [[120609, 120609], "mapped", [950]], [[120610, 120610], "mapped", [951]], [[120611, 120611], "mapped", [952]], [[120612, 120612], "mapped", [953]], [[120613, 120613], "mapped", [954]], [[120614, 120614], "mapped", [955]], [[120615, 120615], "mapped", [956]], [[120616, 120616], "mapped", [957]], [[120617, 120617], "mapped", [958]], [[120618, 120618], "mapped", [959]], [[120619, 120619], "mapped", [960]], [[120620, 120620], "mapped", [961]], [[120621, 120621], "mapped", [952]], [[120622, 120622], "mapped", [963]], [[120623, 120623], "mapped", [964]], [[120624, 120624], "mapped", [965]], [[120625, 120625], "mapped", [966]], [[120626, 120626], "mapped", [967]], [[120627, 120627], "mapped", [968]], [[120628, 120628], "mapped", [969]], [[120629, 120629], "mapped", [8711]], [[120630, 120630], "mapped", [945]], [[120631, 120631], "mapped", [946]], [[120632, 120632], "mapped", [947]], [[120633, 120633], "mapped", [948]], [[120634, 120634], "mapped", [949]], [[120635, 120635], "mapped", [950]], [[120636, 120636], "mapped", [951]], [[120637, 120637], "mapped", [952]], [[120638, 120638], "mapped", [953]], [[120639, 120639], "mapped", [954]], [[120640, 120640], "mapped", [955]], [[120641, 120641], "mapped", [956]], [[120642, 120642], "mapped", [957]], [[120643, 120643], "mapped", [958]], [[120644, 120644], "mapped", [959]], [[120645, 120645], "mapped", [960]], [[120646, 120646], "mapped", [961]], [[120647, 120648], "mapped", [963]], [[120649, 120649], "mapped", [964]], [[120650, 120650], "mapped", [965]], [[120651, 120651], "mapped", [966]], [[120652, 120652], "mapped", [967]], [[120653, 120653], "mapped", [968]], [[120654, 120654], "mapped", [969]], [[120655, 120655], "mapped", [8706]], [[120656, 120656], "mapped", [949]], [[120657, 120657], "mapped", [952]], [[120658, 120658], "mapped", [954]], [[120659, 120659], "mapped", [966]], [[120660, 120660], "mapped", [961]], [[120661, 120661], "mapped", [960]], [[120662, 120662], "mapped", [945]], [[120663, 120663], "mapped", [946]], [[120664, 120664], "mapped", [947]], [[120665, 120665], "mapped", [948]], [[120666, 120666], "mapped", [949]], [[120667, 120667], "mapped", [950]], [[120668, 120668], "mapped", [951]], [[120669, 120669], "mapped", [952]], [[120670, 120670], "mapped", [953]], [[120671, 120671], "mapped", [954]], [[120672, 120672], "mapped", [955]], [[120673, 120673], "mapped", [956]], [[120674, 120674], "mapped", [957]], [[120675, 120675], "mapped", [958]], [[120676, 120676], "mapped", [959]], [[120677, 120677], "mapped", [960]], [[120678, 120678], "mapped", [961]], [[120679, 120679], "mapped", [952]], [[120680, 120680], "mapped", [963]], [[120681, 120681], "mapped", [964]], [[120682, 120682], "mapped", [965]], [[120683, 120683], "mapped", [966]], [[120684, 120684], "mapped", [967]], [[120685, 120685], "mapped", [968]], [[120686, 120686], "mapped", [969]], [[120687, 120687], "mapped", [8711]], [[120688, 120688], "mapped", [945]], [[120689, 120689], "mapped", [946]], [[120690, 120690], "mapped", [947]], [[120691, 120691], "mapped", [948]], [[120692, 120692], "mapped", [949]], [[120693, 120693], "mapped", [950]], [[120694, 120694], "mapped", [951]], [[120695, 120695], "mapped", [952]], [[120696, 120696], "mapped", [953]], [[120697, 120697], "mapped", [954]], [[120698, 120698], "mapped", [955]], [[120699, 120699], "mapped", [956]], [[120700, 120700], "mapped", [957]], [[120701, 120701], "mapped", [958]], [[120702, 120702], "mapped", [959]], [[120703, 120703], "mapped", [960]], [[120704, 120704], "mapped", [961]], [[120705, 120706], "mapped", [963]], [[120707, 120707], "mapped", [964]], [[120708, 120708], "mapped", [965]], [[120709, 120709], "mapped", [966]], [[120710, 120710], "mapped", [967]], [[120711, 120711], "mapped", [968]], [[120712, 120712], "mapped", [969]], [[120713, 120713], "mapped", [8706]], [[120714, 120714], "mapped", [949]], [[120715, 120715], "mapped", [952]], [[120716, 120716], "mapped", [954]], [[120717, 120717], "mapped", [966]], [[120718, 120718], "mapped", [961]], [[120719, 120719], "mapped", [960]], [[120720, 120720], "mapped", [945]], [[120721, 120721], "mapped", [946]], [[120722, 120722], "mapped", [947]], [[120723, 120723], "mapped", [948]], [[120724, 120724], "mapped", [949]], [[120725, 120725], "mapped", [950]], [[120726, 120726], "mapped", [951]], [[120727, 120727], "mapped", [952]], [[120728, 120728], "mapped", [953]], [[120729, 120729], "mapped", [954]], [[120730, 120730], "mapped", [955]], [[120731, 120731], "mapped", [956]], [[120732, 120732], "mapped", [957]], [[120733, 120733], "mapped", [958]], [[120734, 120734], "mapped", [959]], [[120735, 120735], "mapped", [960]], [[120736, 120736], "mapped", [961]], [[120737, 120737], "mapped", [952]], [[120738, 120738], "mapped", [963]], [[120739, 120739], "mapped", [964]], [[120740, 120740], "mapped", [965]], [[120741, 120741], "mapped", [966]], [[120742, 120742], "mapped", [967]], [[120743, 120743], "mapped", [968]], [[120744, 120744], "mapped", [969]], [[120745, 120745], "mapped", [8711]], [[120746, 120746], "mapped", [945]], [[120747, 120747], "mapped", [946]], [[120748, 120748], "mapped", [947]], [[120749, 120749], "mapped", [948]], [[120750, 120750], "mapped", [949]], [[120751, 120751], "mapped", [950]], [[120752, 120752], "mapped", [951]], [[120753, 120753], "mapped", [952]], [[120754, 120754], "mapped", [953]], [[120755, 120755], "mapped", [954]], [[120756, 120756], "mapped", [955]], [[120757, 120757], "mapped", [956]], [[120758, 120758], "mapped", [957]], [[120759, 120759], "mapped", [958]], [[120760, 120760], "mapped", [959]], [[120761, 120761], "mapped", [960]], [[120762, 120762], "mapped", [961]], [[120763, 120764], "mapped", [963]], [[120765, 120765], "mapped", [964]], [[120766, 120766], "mapped", [965]], [[120767, 120767], "mapped", [966]], [[120768, 120768], "mapped", [967]], [[120769, 120769], "mapped", [968]], [[120770, 120770], "mapped", [969]], [[120771, 120771], "mapped", [8706]], [[120772, 120772], "mapped", [949]], [[120773, 120773], "mapped", [952]], [[120774, 120774], "mapped", [954]], [[120775, 120775], "mapped", [966]], [[120776, 120776], "mapped", [961]], [[120777, 120777], "mapped", [960]], [[120778, 120779], "mapped", [989]], [[120780, 120781], "disallowed"], [[120782, 120782], "mapped", [48]], [[120783, 120783], "mapped", [49]], [[120784, 120784], "mapped", [50]], [[120785, 120785], "mapped", [51]], [[120786, 120786], "mapped", [52]], [[120787, 120787], "mapped", [53]], [[120788, 120788], "mapped", [54]], [[120789, 120789], "mapped", [55]], [[120790, 120790], "mapped", [56]], [[120791, 120791], "mapped", [57]], [[120792, 120792], "mapped", [48]], [[120793, 120793], "mapped", [49]], [[120794, 120794], "mapped", [50]], [[120795, 120795], "mapped", [51]], [[120796, 120796], "mapped", [52]], [[120797, 120797], "mapped", [53]], [[120798, 120798], "mapped", [54]], [[120799, 120799], "mapped", [55]], [[120800, 120800], "mapped", [56]], [[120801, 120801], "mapped", [57]], [[120802, 120802], "mapped", [48]], [[120803, 120803], "mapped", [49]], [[120804, 120804], "mapped", [50]], [[120805, 120805], "mapped", [51]], [[120806, 120806], "mapped", [52]], [[120807, 120807], "mapped", [53]], [[120808, 120808], "mapped", [54]], [[120809, 120809], "mapped", [55]], [[120810, 120810], "mapped", [56]], [[120811, 120811], "mapped", [57]], [[120812, 120812], "mapped", [48]], [[120813, 120813], "mapped", [49]], [[120814, 120814], "mapped", [50]], [[120815, 120815], "mapped", [51]], [[120816, 120816], "mapped", [52]], [[120817, 120817], "mapped", [53]], [[120818, 120818], "mapped", [54]], [[120819, 120819], "mapped", [55]], [[120820, 120820], "mapped", [56]], [[120821, 120821], "mapped", [57]], [[120822, 120822], "mapped", [48]], [[120823, 120823], "mapped", [49]], [[120824, 120824], "mapped", [50]], [[120825, 120825], "mapped", [51]], [[120826, 120826], "mapped", [52]], [[120827, 120827], "mapped", [53]], [[120828, 120828], "mapped", [54]], [[120829, 120829], "mapped", [55]], [[120830, 120830], "mapped", [56]], [[120831, 120831], "mapped", [57]], [[120832, 121343], "valid", [], "NV8"], [[121344, 121398], "valid"], [[121399, 121402], "valid", [], "NV8"], [[121403, 121452], "valid"], [[121453, 121460], "valid", [], "NV8"], [[121461, 121461], "valid"], [[121462, 121475], "valid", [], "NV8"], [[121476, 121476], "valid"], [[121477, 121483], "valid", [], "NV8"], [[121484, 121498], "disallowed"], [[121499, 121503], "valid"], [[121504, 121504], "disallowed"], [[121505, 121519], "valid"], [[121520, 124927], "disallowed"], [[124928, 125124], "valid"], [[125125, 125126], "disallowed"], [[125127, 125135], "valid", [], "NV8"], [[125136, 125142], "valid"], [[125143, 126463], "disallowed"], [[126464, 126464], "mapped", [1575]], [[126465, 126465], "mapped", [1576]], [[126466, 126466], "mapped", [1580]], [[126467, 126467], "mapped", [1583]], [[126468, 126468], "disallowed"], [[126469, 126469], "mapped", [1608]], [[126470, 126470], "mapped", [1586]], [[126471, 126471], "mapped", [1581]], [[126472, 126472], "mapped", [1591]], [[126473, 126473], "mapped", [1610]], [[126474, 126474], "mapped", [1603]], [[126475, 126475], "mapped", [1604]], [[126476, 126476], "mapped", [1605]], [[126477, 126477], "mapped", [1606]], [[126478, 126478], "mapped", [1587]], [[126479, 126479], "mapped", [1593]], [[126480, 126480], "mapped", [1601]], [[126481, 126481], "mapped", [1589]], [[126482, 126482], "mapped", [1602]], [[126483, 126483], "mapped", [1585]], [[126484, 126484], "mapped", [1588]], [[126485, 126485], "mapped", [1578]], [[126486, 126486], "mapped", [1579]], [[126487, 126487], "mapped", [1582]], [[126488, 126488], "mapped", [1584]], [[126489, 126489], "mapped", [1590]], [[126490, 126490], "mapped", [1592]], [[126491, 126491], "mapped", [1594]], [[126492, 126492], "mapped", [1646]], [[126493, 126493], "mapped", [1722]], [[126494, 126494], "mapped", [1697]], [[126495, 126495], "mapped", [1647]], [[126496, 126496], "disallowed"], [[126497, 126497], "mapped", [1576]], [[126498, 126498], "mapped", [1580]], [[126499, 126499], "disallowed"], [[126500, 126500], "mapped", [1607]], [[126501, 126502], "disallowed"], [[126503, 126503], "mapped", [1581]], [[126504, 126504], "disallowed"], [[126505, 126505], "mapped", [1610]], [[126506, 126506], "mapped", [1603]], [[126507, 126507], "mapped", [1604]], [[126508, 126508], "mapped", [1605]], [[126509, 126509], "mapped", [1606]], [[126510, 126510], "mapped", [1587]], [[126511, 126511], "mapped", [1593]], [[126512, 126512], "mapped", [1601]], [[126513, 126513], "mapped", [1589]], [[126514, 126514], "mapped", [1602]], [[126515, 126515], "disallowed"], [[126516, 126516], "mapped", [1588]], [[126517, 126517], "mapped", [1578]], [[126518, 126518], "mapped", [1579]], [[126519, 126519], "mapped", [1582]], [[126520, 126520], "disallowed"], [[126521, 126521], "mapped", [1590]], [[126522, 126522], "disallowed"], [[126523, 126523], "mapped", [1594]], [[126524, 126529], "disallowed"], [[126530, 126530], "mapped", [1580]], [[126531, 126534], "disallowed"], [[126535, 126535], "mapped", [1581]], [[126536, 126536], "disallowed"], [[126537, 126537], "mapped", [1610]], [[126538, 126538], "disallowed"], [[126539, 126539], "mapped", [1604]], [[126540, 126540], "disallowed"], [[126541, 126541], "mapped", [1606]], [[126542, 126542], "mapped", [1587]], [[126543, 126543], "mapped", [1593]], [[126544, 126544], "disallowed"], [[126545, 126545], "mapped", [1589]], [[126546, 126546], "mapped", [1602]], [[126547, 126547], "disallowed"], [[126548, 126548], "mapped", [1588]], [[126549, 126550], "disallowed"], [[126551, 126551], "mapped", [1582]], [[126552, 126552], "disallowed"], [[126553, 126553], "mapped", [1590]], [[126554, 126554], "disallowed"], [[126555, 126555], "mapped", [1594]], [[126556, 126556], "disallowed"], [[126557, 126557], "mapped", [1722]], [[126558, 126558], "disallowed"], [[126559, 126559], "mapped", [1647]], [[126560, 126560], "disallowed"], [[126561, 126561], "mapped", [1576]], [[126562, 126562], "mapped", [1580]], [[126563, 126563], "disallowed"], [[126564, 126564], "mapped", [1607]], [[126565, 126566], "disallowed"], [[126567, 126567], "mapped", [1581]], [[126568, 126568], "mapped", [1591]], [[126569, 126569], "mapped", [1610]], [[126570, 126570], "mapped", [1603]], [[126571, 126571], "disallowed"], [[126572, 126572], "mapped", [1605]], [[126573, 126573], "mapped", [1606]], [[126574, 126574], "mapped", [1587]], [[126575, 126575], "mapped", [1593]], [[126576, 126576], "mapped", [1601]], [[126577, 126577], "mapped", [1589]], [[126578, 126578], "mapped", [1602]], [[126579, 126579], "disallowed"], [[126580, 126580], "mapped", [1588]], [[126581, 126581], "mapped", [1578]], [[126582, 126582], "mapped", [1579]], [[126583, 126583], "mapped", [1582]], [[126584, 126584], "disallowed"], [[126585, 126585], "mapped", [1590]], [[126586, 126586], "mapped", [1592]], [[126587, 126587], "mapped", [1594]], [[126588, 126588], "mapped", [1646]], [[126589, 126589], "disallowed"], [[126590, 126590], "mapped", [1697]], [[126591, 126591], "disallowed"], [[126592, 126592], "mapped", [1575]], [[126593, 126593], "mapped", [1576]], [[126594, 126594], "mapped", [1580]], [[126595, 126595], "mapped", [1583]], [[126596, 126596], "mapped", [1607]], [[126597, 126597], "mapped", [1608]], [[126598, 126598], "mapped", [1586]], [[126599, 126599], "mapped", [1581]], [[126600, 126600], "mapped", [1591]], [[126601, 126601], "mapped", [1610]], [[126602, 126602], "disallowed"], [[126603, 126603], "mapped", [1604]], [[126604, 126604], "mapped", [1605]], [[126605, 126605], "mapped", [1606]], [[126606, 126606], "mapped", [1587]], [[126607, 126607], "mapped", [1593]], [[126608, 126608], "mapped", [1601]], [[126609, 126609], "mapped", [1589]], [[126610, 126610], "mapped", [1602]], [[126611, 126611], "mapped", [1585]], [[126612, 126612], "mapped", [1588]], [[126613, 126613], "mapped", [1578]], [[126614, 126614], "mapped", [1579]], [[126615, 126615], "mapped", [1582]], [[126616, 126616], "mapped", [1584]], [[126617, 126617], "mapped", [1590]], [[126618, 126618], "mapped", [1592]], [[126619, 126619], "mapped", [1594]], [[126620, 126624], "disallowed"], [[126625, 126625], "mapped", [1576]], [[126626, 126626], "mapped", [1580]], [[126627, 126627], "mapped", [1583]], [[126628, 126628], "disallowed"], [[126629, 126629], "mapped", [1608]], [[126630, 126630], "mapped", [1586]], [[126631, 126631], "mapped", [1581]], [[126632, 126632], "mapped", [1591]], [[126633, 126633], "mapped", [1610]], [[126634, 126634], "disallowed"], [[126635, 126635], "mapped", [1604]], [[126636, 126636], "mapped", [1605]], [[126637, 126637], "mapped", [1606]], [[126638, 126638], "mapped", [1587]], [[126639, 126639], "mapped", [1593]], [[126640, 126640], "mapped", [1601]], [[126641, 126641], "mapped", [1589]], [[126642, 126642], "mapped", [1602]], [[126643, 126643], "mapped", [1585]], [[126644, 126644], "mapped", [1588]], [[126645, 126645], "mapped", [1578]], [[126646, 126646], "mapped", [1579]], [[126647, 126647], "mapped", [1582]], [[126648, 126648], "mapped", [1584]], [[126649, 126649], "mapped", [1590]], [[126650, 126650], "mapped", [1592]], [[126651, 126651], "mapped", [1594]], [[126652, 126703], "disallowed"], [[126704, 126705], "valid", [], "NV8"], [[126706, 126975], "disallowed"], [[126976, 127019], "valid", [], "NV8"], [[127020, 127023], "disallowed"], [[127024, 127123], "valid", [], "NV8"], [[127124, 127135], "disallowed"], [[127136, 127150], "valid", [], "NV8"], [[127151, 127152], "disallowed"], [[127153, 127166], "valid", [], "NV8"], [[127167, 127167], "valid", [], "NV8"], [[127168, 127168], "disallowed"], [[127169, 127183], "valid", [], "NV8"], [[127184, 127184], "disallowed"], [[127185, 127199], "valid", [], "NV8"], [[127200, 127221], "valid", [], "NV8"], [[127222, 127231], "disallowed"], [[127232, 127232], "disallowed"], [[127233, 127233], "disallowed_STD3_mapped", [48, 44]], [[127234, 127234], "disallowed_STD3_mapped", [49, 44]], [[127235, 127235], "disallowed_STD3_mapped", [50, 44]], [[127236, 127236], "disallowed_STD3_mapped", [51, 44]], [[127237, 127237], "disallowed_STD3_mapped", [52, 44]], [[127238, 127238], "disallowed_STD3_mapped", [53, 44]], [[127239, 127239], "disallowed_STD3_mapped", [54, 44]], [[127240, 127240], "disallowed_STD3_mapped", [55, 44]], [[127241, 127241], "disallowed_STD3_mapped", [56, 44]], [[127242, 127242], "disallowed_STD3_mapped", [57, 44]], [[127243, 127244], "valid", [], "NV8"], [[127245, 127247], "disallowed"], [[127248, 127248], "disallowed_STD3_mapped", [40, 97, 41]], [[127249, 127249], "disallowed_STD3_mapped", [40, 98, 41]], [[127250, 127250], "disallowed_STD3_mapped", [40, 99, 41]], [[127251, 127251], "disallowed_STD3_mapped", [40, 100, 41]], [[127252, 127252], "disallowed_STD3_mapped", [40, 101, 41]], [[127253, 127253], "disallowed_STD3_mapped", [40, 102, 41]], [[127254, 127254], "disallowed_STD3_mapped", [40, 103, 41]], [[127255, 127255], "disallowed_STD3_mapped", [40, 104, 41]], [[127256, 127256], "disallowed_STD3_mapped", [40, 105, 41]], [[127257, 127257], "disallowed_STD3_mapped", [40, 106, 41]], [[127258, 127258], "disallowed_STD3_mapped", [40, 107, 41]], [[127259, 127259], "disallowed_STD3_mapped", [40, 108, 41]], [[127260, 127260], "disallowed_STD3_mapped", [40, 109, 41]], [[127261, 127261], "disallowed_STD3_mapped", [40, 110, 41]], [[127262, 127262], "disallowed_STD3_mapped", [40, 111, 41]], [[127263, 127263], "disallowed_STD3_mapped", [40, 112, 41]], [[127264, 127264], "disallowed_STD3_mapped", [40, 113, 41]], [[127265, 127265], "disallowed_STD3_mapped", [40, 114, 41]], [[127266, 127266], "disallowed_STD3_mapped", [40, 115, 41]], [[127267, 127267], "disallowed_STD3_mapped", [40, 116, 41]], [[127268, 127268], "disallowed_STD3_mapped", [40, 117, 41]], [[127269, 127269], "disallowed_STD3_mapped", [40, 118, 41]], [[127270, 127270], "disallowed_STD3_mapped", [40, 119, 41]], [[127271, 127271], "disallowed_STD3_mapped", [40, 120, 41]], [[127272, 127272], "disallowed_STD3_mapped", [40, 121, 41]], [[127273, 127273], "disallowed_STD3_mapped", [40, 122, 41]], [[127274, 127274], "mapped", [12308, 115, 12309]], [[127275, 127275], "mapped", [99]], [[127276, 127276], "mapped", [114]], [[127277, 127277], "mapped", [99, 100]], [[127278, 127278], "mapped", [119, 122]], [[127279, 127279], "disallowed"], [[127280, 127280], "mapped", [97]], [[127281, 127281], "mapped", [98]], [[127282, 127282], "mapped", [99]], [[127283, 127283], "mapped", [100]], [[127284, 127284], "mapped", [101]], [[127285, 127285], "mapped", [102]], [[127286, 127286], "mapped", [103]], [[127287, 127287], "mapped", [104]], [[127288, 127288], "mapped", [105]], [[127289, 127289], "mapped", [106]], [[127290, 127290], "mapped", [107]], [[127291, 127291], "mapped", [108]], [[127292, 127292], "mapped", [109]], [[127293, 127293], "mapped", [110]], [[127294, 127294], "mapped", [111]], [[127295, 127295], "mapped", [112]], [[127296, 127296], "mapped", [113]], [[127297, 127297], "mapped", [114]], [[127298, 127298], "mapped", [115]], [[127299, 127299], "mapped", [116]], [[127300, 127300], "mapped", [117]], [[127301, 127301], "mapped", [118]], [[127302, 127302], "mapped", [119]], [[127303, 127303], "mapped", [120]], [[127304, 127304], "mapped", [121]], [[127305, 127305], "mapped", [122]], [[127306, 127306], "mapped", [104, 118]], [[127307, 127307], "mapped", [109, 118]], [[127308, 127308], "mapped", [115, 100]], [[127309, 127309], "mapped", [115, 115]], [[127310, 127310], "mapped", [112, 112, 118]], [[127311, 127311], "mapped", [119, 99]], [[127312, 127318], "valid", [], "NV8"], [[127319, 127319], "valid", [], "NV8"], [[127320, 127326], "valid", [], "NV8"], [[127327, 127327], "valid", [], "NV8"], [[127328, 127337], "valid", [], "NV8"], [[127338, 127338], "mapped", [109, 99]], [[127339, 127339], "mapped", [109, 100]], [[127340, 127343], "disallowed"], [[127344, 127352], "valid", [], "NV8"], [[127353, 127353], "valid", [], "NV8"], [[127354, 127354], "valid", [], "NV8"], [[127355, 127356], "valid", [], "NV8"], [[127357, 127358], "valid", [], "NV8"], [[127359, 127359], "valid", [], "NV8"], [[127360, 127369], "valid", [], "NV8"], [[127370, 127373], "valid", [], "NV8"], [[127374, 127375], "valid", [], "NV8"], [[127376, 127376], "mapped", [100, 106]], [[127377, 127386], "valid", [], "NV8"], [[127387, 127461], "disallowed"], [[127462, 127487], "valid", [], "NV8"], [[127488, 127488], "mapped", [12411, 12363]], [[127489, 127489], "mapped", [12467, 12467]], [[127490, 127490], "mapped", [12469]], [[127491, 127503], "disallowed"], [[127504, 127504], "mapped", [25163]], [[127505, 127505], "mapped", [23383]], [[127506, 127506], "mapped", [21452]], [[127507, 127507], "mapped", [12487]], [[127508, 127508], "mapped", [20108]], [[127509, 127509], "mapped", [22810]], [[127510, 127510], "mapped", [35299]], [[127511, 127511], "mapped", [22825]], [[127512, 127512], "mapped", [20132]], [[127513, 127513], "mapped", [26144]], [[127514, 127514], "mapped", [28961]], [[127515, 127515], "mapped", [26009]], [[127516, 127516], "mapped", [21069]], [[127517, 127517], "mapped", [24460]], [[127518, 127518], "mapped", [20877]], [[127519, 127519], "mapped", [26032]], [[127520, 127520], "mapped", [21021]], [[127521, 127521], "mapped", [32066]], [[127522, 127522], "mapped", [29983]], [[127523, 127523], "mapped", [36009]], [[127524, 127524], "mapped", [22768]], [[127525, 127525], "mapped", [21561]], [[127526, 127526], "mapped", [28436]], [[127527, 127527], "mapped", [25237]], [[127528, 127528], "mapped", [25429]], [[127529, 127529], "mapped", [19968]], [[127530, 127530], "mapped", [19977]], [[127531, 127531], "mapped", [36938]], [[127532, 127532], "mapped", [24038]], [[127533, 127533], "mapped", [20013]], [[127534, 127534], "mapped", [21491]], [[127535, 127535], "mapped", [25351]], [[127536, 127536], "mapped", [36208]], [[127537, 127537], "mapped", [25171]], [[127538, 127538], "mapped", [31105]], [[127539, 127539], "mapped", [31354]], [[127540, 127540], "mapped", [21512]], [[127541, 127541], "mapped", [28288]], [[127542, 127542], "mapped", [26377]], [[127543, 127543], "mapped", [26376]], [[127544, 127544], "mapped", [30003]], [[127545, 127545], "mapped", [21106]], [[127546, 127546], "mapped", [21942]], [[127547, 127551], "disallowed"], [[127552, 127552], "mapped", [12308, 26412, 12309]], [[127553, 127553], "mapped", [12308, 19977, 12309]], [[127554, 127554], "mapped", [12308, 20108, 12309]], [[127555, 127555], "mapped", [12308, 23433, 12309]], [[127556, 127556], "mapped", [12308, 28857, 12309]], [[127557, 127557], "mapped", [12308, 25171, 12309]], [[127558, 127558], "mapped", [12308, 30423, 12309]], [[127559, 127559], "mapped", [12308, 21213, 12309]], [[127560, 127560], "mapped", [12308, 25943, 12309]], [[127561, 127567], "disallowed"], [[127568, 127568], "mapped", [24471]], [[127569, 127569], "mapped", [21487]], [[127570, 127743], "disallowed"], [[127744, 127776], "valid", [], "NV8"], [[127777, 127788], "valid", [], "NV8"], [[127789, 127791], "valid", [], "NV8"], [[127792, 127797], "valid", [], "NV8"], [[127798, 127798], "valid", [], "NV8"], [[127799, 127868], "valid", [], "NV8"], [[127869, 127869], "valid", [], "NV8"], [[127870, 127871], "valid", [], "NV8"], [[127872, 127891], "valid", [], "NV8"], [[127892, 127903], "valid", [], "NV8"], [[127904, 127940], "valid", [], "NV8"], [[127941, 127941], "valid", [], "NV8"], [[127942, 127946], "valid", [], "NV8"], [[127947, 127950], "valid", [], "NV8"], [[127951, 127955], "valid", [], "NV8"], [[127956, 127967], "valid", [], "NV8"], [[127968, 127984], "valid", [], "NV8"], [[127985, 127991], "valid", [], "NV8"], [[127992, 127999], "valid", [], "NV8"], [[128e3, 128062], "valid", [], "NV8"], [[128063, 128063], "valid", [], "NV8"], [[128064, 128064], "valid", [], "NV8"], [[128065, 128065], "valid", [], "NV8"], [[128066, 128247], "valid", [], "NV8"], [[128248, 128248], "valid", [], "NV8"], [[128249, 128252], "valid", [], "NV8"], [[128253, 128254], "valid", [], "NV8"], [[128255, 128255], "valid", [], "NV8"], [[128256, 128317], "valid", [], "NV8"], [[128318, 128319], "valid", [], "NV8"], [[128320, 128323], "valid", [], "NV8"], [[128324, 128330], "valid", [], "NV8"], [[128331, 128335], "valid", [], "NV8"], [[128336, 128359], "valid", [], "NV8"], [[128360, 128377], "valid", [], "NV8"], [[128378, 128378], "disallowed"], [[128379, 128419], "valid", [], "NV8"], [[128420, 128420], "disallowed"], [[128421, 128506], "valid", [], "NV8"], [[128507, 128511], "valid", [], "NV8"], [[128512, 128512], "valid", [], "NV8"], [[128513, 128528], "valid", [], "NV8"], [[128529, 128529], "valid", [], "NV8"], [[128530, 128532], "valid", [], "NV8"], [[128533, 128533], "valid", [], "NV8"], [[128534, 128534], "valid", [], "NV8"], [[128535, 128535], "valid", [], "NV8"], [[128536, 128536], "valid", [], "NV8"], [[128537, 128537], "valid", [], "NV8"], [[128538, 128538], "valid", [], "NV8"], [[128539, 128539], "valid", [], "NV8"], [[128540, 128542], "valid", [], "NV8"], [[128543, 128543], "valid", [], "NV8"], [[128544, 128549], "valid", [], "NV8"], [[128550, 128551], "valid", [], "NV8"], [[128552, 128555], "valid", [], "NV8"], [[128556, 128556], "valid", [], "NV8"], [[128557, 128557], "valid", [], "NV8"], [[128558, 128559], "valid", [], "NV8"], [[128560, 128563], "valid", [], "NV8"], [[128564, 128564], "valid", [], "NV8"], [[128565, 128576], "valid", [], "NV8"], [[128577, 128578], "valid", [], "NV8"], [[128579, 128580], "valid", [], "NV8"], [[128581, 128591], "valid", [], "NV8"], [[128592, 128639], "valid", [], "NV8"], [[128640, 128709], "valid", [], "NV8"], [[128710, 128719], "valid", [], "NV8"], [[128720, 128720], "valid", [], "NV8"], [[128721, 128735], "disallowed"], [[128736, 128748], "valid", [], "NV8"], [[128749, 128751], "disallowed"], [[128752, 128755], "valid", [], "NV8"], [[128756, 128767], "disallowed"], [[128768, 128883], "valid", [], "NV8"], [[128884, 128895], "disallowed"], [[128896, 128980], "valid", [], "NV8"], [[128981, 129023], "disallowed"], [[129024, 129035], "valid", [], "NV8"], [[129036, 129039], "disallowed"], [[129040, 129095], "valid", [], "NV8"], [[129096, 129103], "disallowed"], [[129104, 129113], "valid", [], "NV8"], [[129114, 129119], "disallowed"], [[129120, 129159], "valid", [], "NV8"], [[129160, 129167], "disallowed"], [[129168, 129197], "valid", [], "NV8"], [[129198, 129295], "disallowed"], [[129296, 129304], "valid", [], "NV8"], [[129305, 129407], "disallowed"], [[129408, 129412], "valid", [], "NV8"], [[129413, 129471], "disallowed"], [[129472, 129472], "valid", [], "NV8"], [[129473, 131069], "disallowed"], [[131070, 131071], "disallowed"], [[131072, 173782], "valid"], [[173783, 173823], "disallowed"], [[173824, 177972], "valid"], [[177973, 177983], "disallowed"], [[177984, 178205], "valid"], [[178206, 178207], "disallowed"], [[178208, 183969], "valid"], [[183970, 194559], "disallowed"], [[194560, 194560], "mapped", [20029]], [[194561, 194561], "mapped", [20024]], [[194562, 194562], "mapped", [20033]], [[194563, 194563], "mapped", [131362]], [[194564, 194564], "mapped", [20320]], [[194565, 194565], "mapped", [20398]], [[194566, 194566], "mapped", [20411]], [[194567, 194567], "mapped", [20482]], [[194568, 194568], "mapped", [20602]], [[194569, 194569], "mapped", [20633]], [[194570, 194570], "mapped", [20711]], [[194571, 194571], "mapped", [20687]], [[194572, 194572], "mapped", [13470]], [[194573, 194573], "mapped", [132666]], [[194574, 194574], "mapped", [20813]], [[194575, 194575], "mapped", [20820]], [[194576, 194576], "mapped", [20836]], [[194577, 194577], "mapped", [20855]], [[194578, 194578], "mapped", [132380]], [[194579, 194579], "mapped", [13497]], [[194580, 194580], "mapped", [20839]], [[194581, 194581], "mapped", [20877]], [[194582, 194582], "mapped", [132427]], [[194583, 194583], "mapped", [20887]], [[194584, 194584], "mapped", [20900]], [[194585, 194585], "mapped", [20172]], [[194586, 194586], "mapped", [20908]], [[194587, 194587], "mapped", [20917]], [[194588, 194588], "mapped", [168415]], [[194589, 194589], "mapped", [20981]], [[194590, 194590], "mapped", [20995]], [[194591, 194591], "mapped", [13535]], [[194592, 194592], "mapped", [21051]], [[194593, 194593], "mapped", [21062]], [[194594, 194594], "mapped", [21106]], [[194595, 194595], "mapped", [21111]], [[194596, 194596], "mapped", [13589]], [[194597, 194597], "mapped", [21191]], [[194598, 194598], "mapped", [21193]], [[194599, 194599], "mapped", [21220]], [[194600, 194600], "mapped", [21242]], [[194601, 194601], "mapped", [21253]], [[194602, 194602], "mapped", [21254]], [[194603, 194603], "mapped", [21271]], [[194604, 194604], "mapped", [21321]], [[194605, 194605], "mapped", [21329]], [[194606, 194606], "mapped", [21338]], [[194607, 194607], "mapped", [21363]], [[194608, 194608], "mapped", [21373]], [[194609, 194611], "mapped", [21375]], [[194612, 194612], "mapped", [133676]], [[194613, 194613], "mapped", [28784]], [[194614, 194614], "mapped", [21450]], [[194615, 194615], "mapped", [21471]], [[194616, 194616], "mapped", [133987]], [[194617, 194617], "mapped", [21483]], [[194618, 194618], "mapped", [21489]], [[194619, 194619], "mapped", [21510]], [[194620, 194620], "mapped", [21662]], [[194621, 194621], "mapped", [21560]], [[194622, 194622], "mapped", [21576]], [[194623, 194623], "mapped", [21608]], [[194624, 194624], "mapped", [21666]], [[194625, 194625], "mapped", [21750]], [[194626, 194626], "mapped", [21776]], [[194627, 194627], "mapped", [21843]], [[194628, 194628], "mapped", [21859]], [[194629, 194630], "mapped", [21892]], [[194631, 194631], "mapped", [21913]], [[194632, 194632], "mapped", [21931]], [[194633, 194633], "mapped", [21939]], [[194634, 194634], "mapped", [21954]], [[194635, 194635], "mapped", [22294]], [[194636, 194636], "mapped", [22022]], [[194637, 194637], "mapped", [22295]], [[194638, 194638], "mapped", [22097]], [[194639, 194639], "mapped", [22132]], [[194640, 194640], "mapped", [20999]], [[194641, 194641], "mapped", [22766]], [[194642, 194642], "mapped", [22478]], [[194643, 194643], "mapped", [22516]], [[194644, 194644], "mapped", [22541]], [[194645, 194645], "mapped", [22411]], [[194646, 194646], "mapped", [22578]], [[194647, 194647], "mapped", [22577]], [[194648, 194648], "mapped", [22700]], [[194649, 194649], "mapped", [136420]], [[194650, 194650], "mapped", [22770]], [[194651, 194651], "mapped", [22775]], [[194652, 194652], "mapped", [22790]], [[194653, 194653], "mapped", [22810]], [[194654, 194654], "mapped", [22818]], [[194655, 194655], "mapped", [22882]], [[194656, 194656], "mapped", [136872]], [[194657, 194657], "mapped", [136938]], [[194658, 194658], "mapped", [23020]], [[194659, 194659], "mapped", [23067]], [[194660, 194660], "mapped", [23079]], [[194661, 194661], "mapped", [23e3]], [[194662, 194662], "mapped", [23142]], [[194663, 194663], "mapped", [14062]], [[194664, 194664], "disallowed"], [[194665, 194665], "mapped", [23304]], [[194666, 194667], "mapped", [23358]], [[194668, 194668], "mapped", [137672]], [[194669, 194669], "mapped", [23491]], [[194670, 194670], "mapped", [23512]], [[194671, 194671], "mapped", [23527]], [[194672, 194672], "mapped", [23539]], [[194673, 194673], "mapped", [138008]], [[194674, 194674], "mapped", [23551]], [[194675, 194675], "mapped", [23558]], [[194676, 194676], "disallowed"], [[194677, 194677], "mapped", [23586]], [[194678, 194678], "mapped", [14209]], [[194679, 194679], "mapped", [23648]], [[194680, 194680], "mapped", [23662]], [[194681, 194681], "mapped", [23744]], [[194682, 194682], "mapped", [23693]], [[194683, 194683], "mapped", [138724]], [[194684, 194684], "mapped", [23875]], [[194685, 194685], "mapped", [138726]], [[194686, 194686], "mapped", [23918]], [[194687, 194687], "mapped", [23915]], [[194688, 194688], "mapped", [23932]], [[194689, 194689], "mapped", [24033]], [[194690, 194690], "mapped", [24034]], [[194691, 194691], "mapped", [14383]], [[194692, 194692], "mapped", [24061]], [[194693, 194693], "mapped", [24104]], [[194694, 194694], "mapped", [24125]], [[194695, 194695], "mapped", [24169]], [[194696, 194696], "mapped", [14434]], [[194697, 194697], "mapped", [139651]], [[194698, 194698], "mapped", [14460]], [[194699, 194699], "mapped", [24240]], [[194700, 194700], "mapped", [24243]], [[194701, 194701], "mapped", [24246]], [[194702, 194702], "mapped", [24266]], [[194703, 194703], "mapped", [172946]], [[194704, 194704], "mapped", [24318]], [[194705, 194706], "mapped", [140081]], [[194707, 194707], "mapped", [33281]], [[194708, 194709], "mapped", [24354]], [[194710, 194710], "mapped", [14535]], [[194711, 194711], "mapped", [144056]], [[194712, 194712], "mapped", [156122]], [[194713, 194713], "mapped", [24418]], [[194714, 194714], "mapped", [24427]], [[194715, 194715], "mapped", [14563]], [[194716, 194716], "mapped", [24474]], [[194717, 194717], "mapped", [24525]], [[194718, 194718], "mapped", [24535]], [[194719, 194719], "mapped", [24569]], [[194720, 194720], "mapped", [24705]], [[194721, 194721], "mapped", [14650]], [[194722, 194722], "mapped", [14620]], [[194723, 194723], "mapped", [24724]], [[194724, 194724], "mapped", [141012]], [[194725, 194725], "mapped", [24775]], [[194726, 194726], "mapped", [24904]], [[194727, 194727], "mapped", [24908]], [[194728, 194728], "mapped", [24910]], [[194729, 194729], "mapped", [24908]], [[194730, 194730], "mapped", [24954]], [[194731, 194731], "mapped", [24974]], [[194732, 194732], "mapped", [25010]], [[194733, 194733], "mapped", [24996]], [[194734, 194734], "mapped", [25007]], [[194735, 194735], "mapped", [25054]], [[194736, 194736], "mapped", [25074]], [[194737, 194737], "mapped", [25078]], [[194738, 194738], "mapped", [25104]], [[194739, 194739], "mapped", [25115]], [[194740, 194740], "mapped", [25181]], [[194741, 194741], "mapped", [25265]], [[194742, 194742], "mapped", [25300]], [[194743, 194743], "mapped", [25424]], [[194744, 194744], "mapped", [142092]], [[194745, 194745], "mapped", [25405]], [[194746, 194746], "mapped", [25340]], [[194747, 194747], "mapped", [25448]], [[194748, 194748], "mapped", [25475]], [[194749, 194749], "mapped", [25572]], [[194750, 194750], "mapped", [142321]], [[194751, 194751], "mapped", [25634]], [[194752, 194752], "mapped", [25541]], [[194753, 194753], "mapped", [25513]], [[194754, 194754], "mapped", [14894]], [[194755, 194755], "mapped", [25705]], [[194756, 194756], "mapped", [25726]], [[194757, 194757], "mapped", [25757]], [[194758, 194758], "mapped", [25719]], [[194759, 194759], "mapped", [14956]], [[194760, 194760], "mapped", [25935]], [[194761, 194761], "mapped", [25964]], [[194762, 194762], "mapped", [143370]], [[194763, 194763], "mapped", [26083]], [[194764, 194764], "mapped", [26360]], [[194765, 194765], "mapped", [26185]], [[194766, 194766], "mapped", [15129]], [[194767, 194767], "mapped", [26257]], [[194768, 194768], "mapped", [15112]], [[194769, 194769], "mapped", [15076]], [[194770, 194770], "mapped", [20882]], [[194771, 194771], "mapped", [20885]], [[194772, 194772], "mapped", [26368]], [[194773, 194773], "mapped", [26268]], [[194774, 194774], "mapped", [32941]], [[194775, 194775], "mapped", [17369]], [[194776, 194776], "mapped", [26391]], [[194777, 194777], "mapped", [26395]], [[194778, 194778], "mapped", [26401]], [[194779, 194779], "mapped", [26462]], [[194780, 194780], "mapped", [26451]], [[194781, 194781], "mapped", [144323]], [[194782, 194782], "mapped", [15177]], [[194783, 194783], "mapped", [26618]], [[194784, 194784], "mapped", [26501]], [[194785, 194785], "mapped", [26706]], [[194786, 194786], "mapped", [26757]], [[194787, 194787], "mapped", [144493]], [[194788, 194788], "mapped", [26766]], [[194789, 194789], "mapped", [26655]], [[194790, 194790], "mapped", [26900]], [[194791, 194791], "mapped", [15261]], [[194792, 194792], "mapped", [26946]], [[194793, 194793], "mapped", [27043]], [[194794, 194794], "mapped", [27114]], [[194795, 194795], "mapped", [27304]], [[194796, 194796], "mapped", [145059]], [[194797, 194797], "mapped", [27355]], [[194798, 194798], "mapped", [15384]], [[194799, 194799], "mapped", [27425]], [[194800, 194800], "mapped", [145575]], [[194801, 194801], "mapped", [27476]], [[194802, 194802], "mapped", [15438]], [[194803, 194803], "mapped", [27506]], [[194804, 194804], "mapped", [27551]], [[194805, 194805], "mapped", [27578]], [[194806, 194806], "mapped", [27579]], [[194807, 194807], "mapped", [146061]], [[194808, 194808], "mapped", [138507]], [[194809, 194809], "mapped", [146170]], [[194810, 194810], "mapped", [27726]], [[194811, 194811], "mapped", [146620]], [[194812, 194812], "mapped", [27839]], [[194813, 194813], "mapped", [27853]], [[194814, 194814], "mapped", [27751]], [[194815, 194815], "mapped", [27926]], [[194816, 194816], "mapped", [27966]], [[194817, 194817], "mapped", [28023]], [[194818, 194818], "mapped", [27969]], [[194819, 194819], "mapped", [28009]], [[194820, 194820], "mapped", [28024]], [[194821, 194821], "mapped", [28037]], [[194822, 194822], "mapped", [146718]], [[194823, 194823], "mapped", [27956]], [[194824, 194824], "mapped", [28207]], [[194825, 194825], "mapped", [28270]], [[194826, 194826], "mapped", [15667]], [[194827, 194827], "mapped", [28363]], [[194828, 194828], "mapped", [28359]], [[194829, 194829], "mapped", [147153]], [[194830, 194830], "mapped", [28153]], [[194831, 194831], "mapped", [28526]], [[194832, 194832], "mapped", [147294]], [[194833, 194833], "mapped", [147342]], [[194834, 194834], "mapped", [28614]], [[194835, 194835], "mapped", [28729]], [[194836, 194836], "mapped", [28702]], [[194837, 194837], "mapped", [28699]], [[194838, 194838], "mapped", [15766]], [[194839, 194839], "mapped", [28746]], [[194840, 194840], "mapped", [28797]], [[194841, 194841], "mapped", [28791]], [[194842, 194842], "mapped", [28845]], [[194843, 194843], "mapped", [132389]], [[194844, 194844], "mapped", [28997]], [[194845, 194845], "mapped", [148067]], [[194846, 194846], "mapped", [29084]], [[194847, 194847], "disallowed"], [[194848, 194848], "mapped", [29224]], [[194849, 194849], "mapped", [29237]], [[194850, 194850], "mapped", [29264]], [[194851, 194851], "mapped", [149e3]], [[194852, 194852], "mapped", [29312]], [[194853, 194853], "mapped", [29333]], [[194854, 194854], "mapped", [149301]], [[194855, 194855], "mapped", [149524]], [[194856, 194856], "mapped", [29562]], [[194857, 194857], "mapped", [29579]], [[194858, 194858], "mapped", [16044]], [[194859, 194859], "mapped", [29605]], [[194860, 194861], "mapped", [16056]], [[194862, 194862], "mapped", [29767]], [[194863, 194863], "mapped", [29788]], [[194864, 194864], "mapped", [29809]], [[194865, 194865], "mapped", [29829]], [[194866, 194866], "mapped", [29898]], [[194867, 194867], "mapped", [16155]], [[194868, 194868], "mapped", [29988]], [[194869, 194869], "mapped", [150582]], [[194870, 194870], "mapped", [30014]], [[194871, 194871], "mapped", [150674]], [[194872, 194872], "mapped", [30064]], [[194873, 194873], "mapped", [139679]], [[194874, 194874], "mapped", [30224]], [[194875, 194875], "mapped", [151457]], [[194876, 194876], "mapped", [151480]], [[194877, 194877], "mapped", [151620]], [[194878, 194878], "mapped", [16380]], [[194879, 194879], "mapped", [16392]], [[194880, 194880], "mapped", [30452]], [[194881, 194881], "mapped", [151795]], [[194882, 194882], "mapped", [151794]], [[194883, 194883], "mapped", [151833]], [[194884, 194884], "mapped", [151859]], [[194885, 194885], "mapped", [30494]], [[194886, 194887], "mapped", [30495]], [[194888, 194888], "mapped", [30538]], [[194889, 194889], "mapped", [16441]], [[194890, 194890], "mapped", [30603]], [[194891, 194891], "mapped", [16454]], [[194892, 194892], "mapped", [16534]], [[194893, 194893], "mapped", [152605]], [[194894, 194894], "mapped", [30798]], [[194895, 194895], "mapped", [30860]], [[194896, 194896], "mapped", [30924]], [[194897, 194897], "mapped", [16611]], [[194898, 194898], "mapped", [153126]], [[194899, 194899], "mapped", [31062]], [[194900, 194900], "mapped", [153242]], [[194901, 194901], "mapped", [153285]], [[194902, 194902], "mapped", [31119]], [[194903, 194903], "mapped", [31211]], [[194904, 194904], "mapped", [16687]], [[194905, 194905], "mapped", [31296]], [[194906, 194906], "mapped", [31306]], [[194907, 194907], "mapped", [31311]], [[194908, 194908], "mapped", [153980]], [[194909, 194910], "mapped", [154279]], [[194911, 194911], "disallowed"], [[194912, 194912], "mapped", [16898]], [[194913, 194913], "mapped", [154539]], [[194914, 194914], "mapped", [31686]], [[194915, 194915], "mapped", [31689]], [[194916, 194916], "mapped", [16935]], [[194917, 194917], "mapped", [154752]], [[194918, 194918], "mapped", [31954]], [[194919, 194919], "mapped", [17056]], [[194920, 194920], "mapped", [31976]], [[194921, 194921], "mapped", [31971]], [[194922, 194922], "mapped", [32e3]], [[194923, 194923], "mapped", [155526]], [[194924, 194924], "mapped", [32099]], [[194925, 194925], "mapped", [17153]], [[194926, 194926], "mapped", [32199]], [[194927, 194927], "mapped", [32258]], [[194928, 194928], "mapped", [32325]], [[194929, 194929], "mapped", [17204]], [[194930, 194930], "mapped", [156200]], [[194931, 194931], "mapped", [156231]], [[194932, 194932], "mapped", [17241]], [[194933, 194933], "mapped", [156377]], [[194934, 194934], "mapped", [32634]], [[194935, 194935], "mapped", [156478]], [[194936, 194936], "mapped", [32661]], [[194937, 194937], "mapped", [32762]], [[194938, 194938], "mapped", [32773]], [[194939, 194939], "mapped", [156890]], [[194940, 194940], "mapped", [156963]], [[194941, 194941], "mapped", [32864]], [[194942, 194942], "mapped", [157096]], [[194943, 194943], "mapped", [32880]], [[194944, 194944], "mapped", [144223]], [[194945, 194945], "mapped", [17365]], [[194946, 194946], "mapped", [32946]], [[194947, 194947], "mapped", [33027]], [[194948, 194948], "mapped", [17419]], [[194949, 194949], "mapped", [33086]], [[194950, 194950], "mapped", [23221]], [[194951, 194951], "mapped", [157607]], [[194952, 194952], "mapped", [157621]], [[194953, 194953], "mapped", [144275]], [[194954, 194954], "mapped", [144284]], [[194955, 194955], "mapped", [33281]], [[194956, 194956], "mapped", [33284]], [[194957, 194957], "mapped", [36766]], [[194958, 194958], "mapped", [17515]], [[194959, 194959], "mapped", [33425]], [[194960, 194960], "mapped", [33419]], [[194961, 194961], "mapped", [33437]], [[194962, 194962], "mapped", [21171]], [[194963, 194963], "mapped", [33457]], [[194964, 194964], "mapped", [33459]], [[194965, 194965], "mapped", [33469]], [[194966, 194966], "mapped", [33510]], [[194967, 194967], "mapped", [158524]], [[194968, 194968], "mapped", [33509]], [[194969, 194969], "mapped", [33565]], [[194970, 194970], "mapped", [33635]], [[194971, 194971], "mapped", [33709]], [[194972, 194972], "mapped", [33571]], [[194973, 194973], "mapped", [33725]], [[194974, 194974], "mapped", [33767]], [[194975, 194975], "mapped", [33879]], [[194976, 194976], "mapped", [33619]], [[194977, 194977], "mapped", [33738]], [[194978, 194978], "mapped", [33740]], [[194979, 194979], "mapped", [33756]], [[194980, 194980], "mapped", [158774]], [[194981, 194981], "mapped", [159083]], [[194982, 194982], "mapped", [158933]], [[194983, 194983], "mapped", [17707]], [[194984, 194984], "mapped", [34033]], [[194985, 194985], "mapped", [34035]], [[194986, 194986], "mapped", [34070]], [[194987, 194987], "mapped", [160714]], [[194988, 194988], "mapped", [34148]], [[194989, 194989], "mapped", [159532]], [[194990, 194990], "mapped", [17757]], [[194991, 194991], "mapped", [17761]], [[194992, 194992], "mapped", [159665]], [[194993, 194993], "mapped", [159954]], [[194994, 194994], "mapped", [17771]], [[194995, 194995], "mapped", [34384]], [[194996, 194996], "mapped", [34396]], [[194997, 194997], "mapped", [34407]], [[194998, 194998], "mapped", [34409]], [[194999, 194999], "mapped", [34473]], [[195e3, 195e3], "mapped", [34440]], [[195001, 195001], "mapped", [34574]], [[195002, 195002], "mapped", [34530]], [[195003, 195003], "mapped", [34681]], [[195004, 195004], "mapped", [34600]], [[195005, 195005], "mapped", [34667]], [[195006, 195006], "mapped", [34694]], [[195007, 195007], "disallowed"], [[195008, 195008], "mapped", [34785]], [[195009, 195009], "mapped", [34817]], [[195010, 195010], "mapped", [17913]], [[195011, 195011], "mapped", [34912]], [[195012, 195012], "mapped", [34915]], [[195013, 195013], "mapped", [161383]], [[195014, 195014], "mapped", [35031]], [[195015, 195015], "mapped", [35038]], [[195016, 195016], "mapped", [17973]], [[195017, 195017], "mapped", [35066]], [[195018, 195018], "mapped", [13499]], [[195019, 195019], "mapped", [161966]], [[195020, 195020], "mapped", [162150]], [[195021, 195021], "mapped", [18110]], [[195022, 195022], "mapped", [18119]], [[195023, 195023], "mapped", [35488]], [[195024, 195024], "mapped", [35565]], [[195025, 195025], "mapped", [35722]], [[195026, 195026], "mapped", [35925]], [[195027, 195027], "mapped", [162984]], [[195028, 195028], "mapped", [36011]], [[195029, 195029], "mapped", [36033]], [[195030, 195030], "mapped", [36123]], [[195031, 195031], "mapped", [36215]], [[195032, 195032], "mapped", [163631]], [[195033, 195033], "mapped", [133124]], [[195034, 195034], "mapped", [36299]], [[195035, 195035], "mapped", [36284]], [[195036, 195036], "mapped", [36336]], [[195037, 195037], "mapped", [133342]], [[195038, 195038], "mapped", [36564]], [[195039, 195039], "mapped", [36664]], [[195040, 195040], "mapped", [165330]], [[195041, 195041], "mapped", [165357]], [[195042, 195042], "mapped", [37012]], [[195043, 195043], "mapped", [37105]], [[195044, 195044], "mapped", [37137]], [[195045, 195045], "mapped", [165678]], [[195046, 195046], "mapped", [37147]], [[195047, 195047], "mapped", [37432]], [[195048, 195048], "mapped", [37591]], [[195049, 195049], "mapped", [37592]], [[195050, 195050], "mapped", [37500]], [[195051, 195051], "mapped", [37881]], [[195052, 195052], "mapped", [37909]], [[195053, 195053], "mapped", [166906]], [[195054, 195054], "mapped", [38283]], [[195055, 195055], "mapped", [18837]], [[195056, 195056], "mapped", [38327]], [[195057, 195057], "mapped", [167287]], [[195058, 195058], "mapped", [18918]], [[195059, 195059], "mapped", [38595]], [[195060, 195060], "mapped", [23986]], [[195061, 195061], "mapped", [38691]], [[195062, 195062], "mapped", [168261]], [[195063, 195063], "mapped", [168474]], [[195064, 195064], "mapped", [19054]], [[195065, 195065], "mapped", [19062]], [[195066, 195066], "mapped", [38880]], [[195067, 195067], "mapped", [168970]], [[195068, 195068], "mapped", [19122]], [[195069, 195069], "mapped", [169110]], [[195070, 195071], "mapped", [38923]], [[195072, 195072], "mapped", [38953]], [[195073, 195073], "mapped", [169398]], [[195074, 195074], "mapped", [39138]], [[195075, 195075], "mapped", [19251]], [[195076, 195076], "mapped", [39209]], [[195077, 195077], "mapped", [39335]], [[195078, 195078], "mapped", [39362]], [[195079, 195079], "mapped", [39422]], [[195080, 195080], "mapped", [19406]], [[195081, 195081], "mapped", [170800]], [[195082, 195082], "mapped", [39698]], [[195083, 195083], "mapped", [4e4]], [[195084, 195084], "mapped", [40189]], [[195085, 195085], "mapped", [19662]], [[195086, 195086], "mapped", [19693]], [[195087, 195087], "mapped", [40295]], [[195088, 195088], "mapped", [172238]], [[195089, 195089], "mapped", [19704]], [[195090, 195090], "mapped", [172293]], [[195091, 195091], "mapped", [172558]], [[195092, 195092], "mapped", [172689]], [[195093, 195093], "mapped", [40635]], [[195094, 195094], "mapped", [19798]], [[195095, 195095], "mapped", [40697]], [[195096, 195096], "mapped", [40702]], [[195097, 195097], "mapped", [40709]], [[195098, 195098], "mapped", [40719]], [[195099, 195099], "mapped", [40726]], [[195100, 195100], "mapped", [40763]], [[195101, 195101], "mapped", [173568]], [[195102, 196605], "disallowed"], [[196606, 196607], "disallowed"], [[196608, 262141], "disallowed"], [[262142, 262143], "disallowed"], [[262144, 327677], "disallowed"], [[327678, 327679], "disallowed"], [[327680, 393213], "disallowed"], [[393214, 393215], "disallowed"], [[393216, 458749], "disallowed"], [[458750, 458751], "disallowed"], [[458752, 524285], "disallowed"], [[524286, 524287], "disallowed"], [[524288, 589821], "disallowed"], [[589822, 589823], "disallowed"], [[589824, 655357], "disallowed"], [[655358, 655359], "disallowed"], [[655360, 720893], "disallowed"], [[720894, 720895], "disallowed"], [[720896, 786429], "disallowed"], [[786430, 786431], "disallowed"], [[786432, 851965], "disallowed"], [[851966, 851967], "disallowed"], [[851968, 917501], "disallowed"], [[917502, 917503], "disallowed"], [[917504, 917504], "disallowed"], [[917505, 917505], "disallowed"], [[917506, 917535], "disallowed"], [[917536, 917631], "disallowed"], [[917632, 917759], "disallowed"], [[917760, 917999], "ignored"], [[918e3, 983037], "disallowed"], [[983038, 983039], "disallowed"], [[983040, 1048573], "disallowed"], [[1048574, 1048575], "disallowed"], [[1048576, 1114109], "disallowed"], [[1114110, 1114111], "disallowed"]],
                      S = {
                        TRANSITIONAL: 0,
                        NONTRANSITIONAL: 1
                      };
                    function D(e) {
                      return e.split("\0").map(function (e) {
                        return e.normalize("NFC");
                      }).join("\0");
                    }
                    function T(e) {
                      for (var p = 0, a = N.length - 1; p <= a;) {
                        var d = Math.floor((p + a) / 2),
                          t = N[d];
                        if (t[0][0] <= e && t[0][1] >= e) return t;
                        t[0][0] > e ? a = d - 1 : p = d + 1;
                      }
                      return null;
                    }
                    var E = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
                    function V(e) {
                      return e.replace(E, "_").length;
                    }
                    var A = /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDE2C-\uDE37\uDEDF-\uDEEA\uDF01-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDE30-\uDE40\uDEAB-\uDEB7]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]/;
                    function k(e, p) {
                      "xn--" === e.substr(0, 4) && (e = y.toUnicode(e));
                      var a = false;
                      (D(e) !== e || "-" === e[3] && "-" === e[4] || "-" === e[0] || "-" === e[e.length - 1] || -1 !== e.indexOf(".") || 0 === e.search(A)) && (a = true);
                      for (var d = V(e), t = 0; t < d; ++t) {
                        var i = T(e.codePointAt(t));
                        if (R === S.TRANSITIONAL && "valid" !== i[1] || R === S.NONTRANSITIONAL && "valid" !== i[1] && "deviation" !== i[1]) {
                          a = true;
                          break;
                        }
                      }
                      return {
                        label: e,
                        error: a
                      };
                    }
                    function R(e, p, a) {
                      var d = function (e, p, a) {
                        for (var d = false, t = "", i = V(e), r = 0; r < i; ++r) {
                          var l = e.codePointAt(r),
                            m = T(l);
                          switch (m[1]) {
                            case "disallowed":
                              d = true, t += String.fromCodePoint(l);
                              break;
                            case "ignored":
                              break;
                            case "mapped":
                              t += String.fromCodePoint.apply(String, m[2]);
                              break;
                            case "deviation":
                              t += a === S.TRANSITIONAL ? String.fromCodePoint.apply(String, m[2]) : String.fromCodePoint(l);
                              break;
                            case "valid":
                              t += String.fromCodePoint(l);
                              break;
                            case "disallowed_STD3_mapped":
                              p ? (d = true, t += String.fromCodePoint(l)) : t += String.fromCodePoint.apply(String, m[2]);
                              break;
                            case "disallowed_STD3_valid":
                              p && (d = true), t += String.fromCodePoint(l);
                          }
                        }
                        return {
                          string: t,
                          error: d
                        };
                      }(e, p, a);
                      d.string = D(d.string);
                      for (var t = d.string.split("."), i = 0; i < t.length; ++i) try {
                        var r = k(t[i]);
                        t[i] = r.label, d.error = d.error || r.error;
                      } catch (e) {
                        d.error = true;
                      }
                      return {
                        string: t.join("."),
                        error: d.error
                      };
                    }
                    b.toASCII = function (e, p, a, d) {
                      var t = R(e, p, a),
                        i = t.string.split(".");
                      if (i = i.map(function (e) {
                        try {
                          return y.toASCII(e);
                        } catch (p) {
                          return t.error = true, e;
                        }
                      }), d) {
                        var r = i.slice(0, i.length - 1).join(".").length;
                        (r.length > 253 || 0 === r.length) && (t.error = true);
                        for (var l = 0; l < i.length; ++l) if (i.length > 63 || 0 === i.length) {
                          t.error = true;
                          break;
                        }
                      }
                      return t.error ? null : i.join(".");
                    }, b.toUnicode = function (e, p) {
                      var a = R(e, p, S.NONTRANSITIONAL);
                      return {
                        domain: a.string,
                        error: a.error
                      };
                    }, b.PROCESSING_OPTIONS = S, function (e) {
                      const p = t,
                        a = b,
                        d = {
                          ftp: 21,
                          file: null,
                          gopher: 70,
                          http: 80,
                          https: 443,
                          ws: 80,
                          wss: 443
                        },
                        i = Symbol("failure");
                      function r(e) {
                        return p.ucs2.decode(e).length;
                      }
                      function l(e, p) {
                        const a = e[p];
                        return isNaN(a) ? void 0 : String.fromCodePoint(a);
                      }
                      function m(e) {
                        return e >= 48 && e <= 57;
                      }
                      function n(e) {
                        return e >= 65 && e <= 90 || e >= 97 && e <= 122;
                      }
                      function o(e) {
                        return m(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
                      }
                      function s(e) {
                        return "." === e || "%2e" === e.toLowerCase();
                      }
                      function u(e) {
                        return 2 === e.length && n(e.codePointAt(0)) && (":" === e[1] || "|" === e[1]);
                      }
                      function h(e) {
                        return void 0 !== d[e];
                      }
                      function f(e) {
                        return h(e.scheme);
                      }
                      function c(e) {
                        let p = e.toString(16).toUpperCase();
                        return 1 === p.length && (p = "0" + p), "%" + p;
                      }
                      function v(e) {
                        return e <= 31 || e > 126;
                      }
                      const w = new Set([32, 34, 35, 60, 62, 63, 96, 123, 125]);
                      function _(e) {
                        return v(e) || w.has(e);
                      }
                      const g = new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);
                      function y(e) {
                        return _(e) || g.has(e);
                      }
                      function N(e, p) {
                        const a = String.fromCodePoint(e);
                        return p(e) ? function (e) {
                          const p = new Buffer(e);
                          let a = "";
                          for (let e = 0; e < p.length; ++e) a += c(p[e]);
                          return a;
                        }(a) : a;
                      }
                      function S(e) {
                        let p = 10;
                        return e.length >= 2 && "0" === e.charAt(0) && "x" === e.charAt(1).toLowerCase() ? (e = e.substring(2), p = 16) : e.length >= 2 && "0" === e.charAt(0) && (e = e.substring(1), p = 8), "" === e ? 0 : (10 === p ? /[^0-9]/ : 16 === p ? /[^0-9A-Fa-f]/ : /[^0-7]/).test(e) ? i : parseInt(e, p);
                      }
                      function D(e, d) {
                        if ("[" === e[0]) return "]" !== e[e.length - 1] ? i : function (e) {
                          const a = [0, 0, 0, 0, 0, 0, 0, 0];
                          let d = 0,
                            t = null,
                            r = 0;
                          if (58 === (e = p.ucs2.decode(e))[r]) {
                            if (58 !== e[r + 1]) return i;
                            r += 2, ++d, t = d;
                          }
                          for (; r < e.length;) {
                            if (8 === d) return i;
                            if (58 === e[r]) {
                              if (null !== t) return i;
                              ++r, ++d, t = d;
                              continue;
                            }
                            let p = 0,
                              n = 0;
                            for (; n < 4 && o(e[r]);) p = 16 * p + parseInt(l(e, r), 16), ++r, ++n;
                            if (46 === e[r]) {
                              if (0 === n) return i;
                              if (r -= n, d > 6) return i;
                              let p = 0;
                              for (; void 0 !== e[r];) {
                                let t = null;
                                if (p > 0) {
                                  if (!(46 === e[r] && p < 4)) return i;
                                  ++r;
                                }
                                if (!m(e[r])) return i;
                                for (; m(e[r]);) {
                                  const p = parseInt(l(e, r));
                                  if (null === t) t = p;else {
                                    if (0 === t) return i;
                                    t = 10 * t + p;
                                  }
                                  if (t > 255) return i;
                                  ++r;
                                }
                                a[d] = 256 * a[d] + t, ++p, 2 !== p && 4 !== p || ++d;
                              }
                              if (4 !== p) return i;
                              break;
                            }
                            if (58 === e[r]) {
                              if (++r, void 0 === e[r]) return i;
                            } else if (void 0 !== e[r]) return i;
                            a[d] = p, ++d;
                          }
                          if (null !== t) {
                            let e = d - t;
                            for (d = 7; 0 !== d && e > 0;) {
                              const p = a[t + e - 1];
                              a[t + e - 1] = a[d], a[d] = p, --d, --e;
                            }
                          } else if (null === t && 8 !== d) return i;
                          return a;
                        }(e.substring(1, e.length - 1));
                        if (!d) return function (e) {
                          if (-1 !== e.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/)) return i;
                          let a = "";
                          const d = p.ucs2.decode(e);
                          for (let e = 0; e < d.length; ++e) a += N(d[e], v);
                          return a;
                        }(e);
                        const t = function (e) {
                            const p = new Buffer(e),
                              a = [];
                            for (let e = 0; e < p.length; ++e) 37 !== p[e] ? a.push(p[e]) : 37 === p[e] && o(p[e + 1]) && o(p[e + 2]) ? (a.push(parseInt(p.slice(e + 1, e + 3).toString(), 16)), e += 2) : a.push(p[e]);
                            return new Buffer(a).toString();
                          }(e),
                          r = a.toASCII(t, false, a.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
                        if (null === r) return i;
                        if (-1 !== r.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/)) return i;
                        const n = function (e) {
                          const p = e.split(".");
                          if ("" === p[p.length - 1] && p.length > 1 && p.pop(), p.length > 4) return e;
                          const a = [];
                          for (const d of p) {
                            if ("" === d) return e;
                            const p = S(d);
                            if (p === i) return e;
                            a.push(p);
                          }
                          for (let e = 0; e < a.length - 1; ++e) if (a[e] > 255) return i;
                          if (a[a.length - 1] >= Math.pow(256, 5 - a.length)) return i;
                          let d = a.pop(),
                            t = 0;
                          for (const e of a) d += e * Math.pow(256, 3 - t), ++t;
                          return d;
                        }(r);
                        return "number" == typeof n || n === i ? n : r;
                      }
                      function T(e) {
                        return "number" == typeof e ? function (e) {
                          let p = "",
                            a = e;
                          for (let e = 1; e <= 4; ++e) p = String(a % 256) + p, 4 !== e && (p = "." + p), a = Math.floor(a / 256);
                          return p;
                        }(e) : e instanceof Array ? "[" + function (e) {
                          let p = "";
                          const a = function (e) {
                            let p = null,
                              a = 1,
                              d = null,
                              t = 0;
                            for (let i = 0; i < e.length; ++i) 0 !== e[i] ? (t > a && (p = d, a = t), d = null, t = 0) : (null === d && (d = i), ++t);
                            return t > a && (p = d, a = t), {
                              idx: p,
                              len: a
                            };
                          }(e).idx;
                          let d = false;
                          for (let t = 0; t <= 7; ++t) d && 0 === e[t] || (d && (d = false), a !== t ? (p += e[t].toString(16), 7 !== t && (p += ":")) : (p += 0 === t ? "::" : ":", d = true));
                          return p;
                        }(e) + "]" : e;
                      }
                      function E(e) {
                        const p = e.path;
                        var a;
                        0 !== p.length && ("file" === e.scheme && 1 === p.length && (a = p[0], /^[A-Za-z]:$/.test(a)) || p.pop());
                      }
                      function V(e) {
                        return "" !== e.username || "" !== e.password;
                      }
                      function A(e, a, d, t, r) {
                        if (this.pointer = 0, this.input = e, this.base = a || null, this.encodingOverride = d || "utf-8", this.stateOverride = r, this.url = t, this.failure = false, this.parseError = false, !this.url) {
                          this.url = {
                            scheme: "",
                            username: "",
                            password: "",
                            host: null,
                            port: null,
                            path: [],
                            query: null,
                            fragment: null,
                            cannotBeABaseURL: false
                          };
                          const e = function (e) {
                            return e.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
                          }(this.input);
                          e !== this.input && (this.parseError = true), this.input = e;
                        }
                        const l = function (e) {
                          return e.replace(/\u0009|\u000A|\u000D/g, "");
                        }(this.input);
                        for (l !== this.input && (this.parseError = true), this.input = l, this.state = r || "scheme start", this.buffer = "", this.atFlag = false, this.arrFlag = false, this.passwordTokenSeenFlag = false, this.input = p.ucs2.decode(this.input); this.pointer <= this.input.length; ++this.pointer) {
                          const e = this.input[this.pointer],
                            p = isNaN(e) ? void 0 : String.fromCodePoint(e),
                            a = this["parse " + this.state](e, p);
                          if (!a) break;
                          if (a === i) {
                            this.failure = true;
                            break;
                          }
                        }
                      }
                      A.prototype["parse scheme start"] = function (e, p) {
                        if (n(e)) this.buffer += p.toLowerCase(), this.state = "scheme";else {
                          if (this.stateOverride) return this.parseError = true, i;
                          this.state = "no scheme", --this.pointer;
                        }
                        return true;
                      }, A.prototype["parse scheme"] = function (e, p) {
                        if (function (e) {
                          return n(e) || m(e);
                        }(e) || 43 === e || 45 === e || 46 === e) this.buffer += p.toLowerCase();else if (58 === e) {
                          if (this.stateOverride) {
                            if (f(this.url) && !h(this.buffer)) return false;
                            if (!f(this.url) && h(this.buffer)) return false;
                            if ((V(this.url) || null !== this.url.port) && "file" === this.buffer) return false;
                            if ("file" === this.url.scheme && ("" === this.url.host || null === this.url.host)) return false;
                          }
                          if (this.url.scheme = this.buffer, this.buffer = "", this.stateOverride) return false;
                          "file" === this.url.scheme ? (47 === this.input[this.pointer + 1] && 47 === this.input[this.pointer + 2] || (this.parseError = true), this.state = "file") : f(this.url) && null !== this.base && this.base.scheme === this.url.scheme ? this.state = "special relative or authority" : f(this.url) ? this.state = "special authority slashes" : 47 === this.input[this.pointer + 1] ? (this.state = "path or authority", ++this.pointer) : (this.url.cannotBeABaseURL = true, this.url.path.push(""), this.state = "cannot-be-a-base-URL path");
                        } else {
                          if (this.stateOverride) return this.parseError = true, i;
                          this.buffer = "", this.state = "no scheme", this.pointer = -1;
                        }
                        return true;
                      }, A.prototype["parse no scheme"] = function (e) {
                        return null === this.base || this.base.cannotBeABaseURL && 35 !== e ? i : (this.base.cannotBeABaseURL && 35 === e ? (this.url.scheme = this.base.scheme, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.url.cannotBeABaseURL = true, this.state = "fragment") : "file" === this.base.scheme ? (this.state = "file", --this.pointer) : (this.state = "relative", --this.pointer), true);
                      }, A.prototype["parse special relative or authority"] = function (e) {
                        return 47 === e && 47 === this.input[this.pointer + 1] ? (this.state = "special authority ignore slashes", ++this.pointer) : (this.parseError = true, this.state = "relative", --this.pointer), true;
                      }, A.prototype["parse path or authority"] = function (e) {
                        return 47 === e ? this.state = "authority" : (this.state = "path", --this.pointer), true;
                      }, A.prototype["parse relative"] = function (e) {
                        return this.url.scheme = this.base.scheme, isNaN(e) ? (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = this.base.query) : 47 === e ? this.state = "relative slash" : 63 === e ? (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = "", this.state = "query") : 35 === e ? (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.state = "fragment") : f(this.url) && 92 === e ? (this.parseError = true, this.state = "relative slash") : (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(0, this.base.path.length - 1), this.state = "path", --this.pointer), true;
                      }, A.prototype["parse relative slash"] = function (e) {
                        return !f(this.url) || 47 !== e && 92 !== e ? 47 === e ? this.state = "authority" : (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.state = "path", --this.pointer) : (92 === e && (this.parseError = true), this.state = "special authority ignore slashes"), true;
                      }, A.prototype["parse special authority slashes"] = function (e) {
                        return 47 === e && 47 === this.input[this.pointer + 1] ? (this.state = "special authority ignore slashes", ++this.pointer) : (this.parseError = true, this.state = "special authority ignore slashes", --this.pointer), true;
                      }, A.prototype["parse special authority ignore slashes"] = function (e) {
                        return 47 !== e && 92 !== e ? (this.state = "authority", --this.pointer) : this.parseError = true, true;
                      }, A.prototype["parse authority"] = function (e, p) {
                        if (64 === e) {
                          this.parseError = true, this.atFlag && (this.buffer = "%40" + this.buffer), this.atFlag = true;
                          const e = r(this.buffer);
                          for (let p = 0; p < e; ++p) {
                            const e = this.buffer.codePointAt(p);
                            if (58 === e && !this.passwordTokenSeenFlag) {
                              this.passwordTokenSeenFlag = true;
                              continue;
                            }
                            const a = N(e, y);
                            this.passwordTokenSeenFlag ? this.url.password += a : this.url.username += a;
                          }
                          this.buffer = "";
                        } else if (isNaN(e) || 47 === e || 63 === e || 35 === e || f(this.url) && 92 === e) {
                          if (this.atFlag && "" === this.buffer) return this.parseError = true, i;
                          this.pointer -= r(this.buffer) + 1, this.buffer = "", this.state = "host";
                        } else this.buffer += p;
                        return true;
                      }, A.prototype["parse hostname"] = A.prototype["parse host"] = function (e, p) {
                        if (this.stateOverride && "file" === this.url.scheme) --this.pointer, this.state = "file host";else if (58 !== e || this.arrFlag) {
                          if (isNaN(e) || 47 === e || 63 === e || 35 === e || f(this.url) && 92 === e) {
                            if (--this.pointer, f(this.url) && "" === this.buffer) return this.parseError = true, i;
                            if (this.stateOverride && "" === this.buffer && (V(this.url) || null !== this.url.port)) return this.parseError = true, false;
                            const e = D(this.buffer, f(this.url));
                            if (e === i) return i;
                            if (this.url.host = e, this.buffer = "", this.state = "path start", this.stateOverride) return false;
                          } else 91 === e ? this.arrFlag = true : 93 === e && (this.arrFlag = false), this.buffer += p;
                        } else {
                          if ("" === this.buffer) return this.parseError = true, i;
                          const e = D(this.buffer, f(this.url));
                          if (e === i) return i;
                          if (this.url.host = e, this.buffer = "", this.state = "port", "hostname" === this.stateOverride) return false;
                        }
                        return true;
                      }, A.prototype["parse port"] = function (e, p) {
                        if (m(e)) this.buffer += p;else {
                          if (!(isNaN(e) || 47 === e || 63 === e || 35 === e || f(this.url) && 92 === e || this.stateOverride)) return this.parseError = true, i;
                          if ("" !== this.buffer) {
                            const e = parseInt(this.buffer);
                            if (e > Math.pow(2, 16) - 1) return this.parseError = true, i;
                            this.url.port = e === (a = this.url.scheme, d[a]) ? null : e, this.buffer = "";
                          }
                          if (this.stateOverride) return false;
                          this.state = "path start", --this.pointer;
                        }
                        var a;
                        return true;
                      };
                      const k = new Set([47, 92, 63, 35]);
                      A.prototype["parse file"] = function (e) {
                        var p, a;
                        return this.url.scheme = "file", 47 === e || 92 === e ? (92 === e && (this.parseError = true), this.state = "file slash") : null !== this.base && "file" === this.base.scheme ? isNaN(e) ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = this.base.query) : 63 === e ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = "", this.state = "query") : 35 === e ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.state = "fragment") : (this.input.length - this.pointer - 1 == 0 || (p = e, a = this.input[this.pointer + 1], !n(p) || 58 !== a && 124 !== a) || this.input.length - this.pointer - 1 >= 2 && !k.has(this.input[this.pointer + 2]) ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), E(this.url)) : this.parseError = true, this.state = "path", --this.pointer) : (this.state = "path", --this.pointer), true;
                      }, A.prototype["parse file slash"] = function (e) {
                        var p;
                        return 47 === e || 92 === e ? (92 === e && (this.parseError = true), this.state = "file host") : (null !== this.base && "file" === this.base.scheme && (2 === (p = this.base.path[0]).length && n(p.codePointAt(0)) && ":" === p[1] ? this.url.path.push(this.base.path[0]) : this.url.host = this.base.host), this.state = "path", --this.pointer), true;
                      }, A.prototype["parse file host"] = function (e, p) {
                        if (isNaN(e) || 47 === e || 92 === e || 63 === e || 35 === e) {
                          if (--this.pointer, !this.stateOverride && u(this.buffer)) this.parseError = true, this.state = "path";else if ("" === this.buffer) {
                            if (this.url.host = "", this.stateOverride) return false;
                            this.state = "path start";
                          } else {
                            let e = D(this.buffer, f(this.url));
                            if (e === i) return i;
                            if ("localhost" === e && (e = ""), this.url.host = e, this.stateOverride) return false;
                            this.buffer = "", this.state = "path start";
                          }
                        } else this.buffer += p;
                        return true;
                      }, A.prototype["parse path start"] = function (e) {
                        return f(this.url) ? (92 === e && (this.parseError = true), this.state = "path", 47 !== e && 92 !== e && --this.pointer) : this.stateOverride || 63 !== e ? this.stateOverride || 35 !== e ? void 0 !== e && (this.state = "path", 47 !== e && --this.pointer) : (this.url.fragment = "", this.state = "fragment") : (this.url.query = "", this.state = "query"), true;
                      }, A.prototype["parse path"] = function (e) {
                        if (isNaN(e) || 47 === e || f(this.url) && 92 === e || !this.stateOverride && (63 === e || 35 === e)) {
                          if (f(this.url) && 92 === e && (this.parseError = true), ".." === (p = (p = this.buffer).toLowerCase()) || "%2e." === p || ".%2e" === p || "%2e%2e" === p ? (E(this.url), 47 === e || f(this.url) && 92 === e || this.url.path.push("")) : !s(this.buffer) || 47 === e || f(this.url) && 92 === e ? s(this.buffer) || ("file" === this.url.scheme && 0 === this.url.path.length && u(this.buffer) && ("" !== this.url.host && null !== this.url.host && (this.parseError = true, this.url.host = ""), this.buffer = this.buffer[0] + ":"), this.url.path.push(this.buffer)) : this.url.path.push(""), this.buffer = "", "file" === this.url.scheme && (void 0 === e || 63 === e || 35 === e)) for (; this.url.path.length > 1 && "" === this.url.path[0];) this.parseError = true, this.url.path.shift();
                          63 === e && (this.url.query = "", this.state = "query"), 35 === e && (this.url.fragment = "", this.state = "fragment");
                        } else 37 !== e || o(this.input[this.pointer + 1]) && o(this.input[this.pointer + 2]) || (this.parseError = true), this.buffer += N(e, _);
                        var p;
                        return true;
                      }, A.prototype["parse cannot-be-a-base-URL path"] = function (e) {
                        return 63 === e ? (this.url.query = "", this.state = "query") : 35 === e ? (this.url.fragment = "", this.state = "fragment") : (isNaN(e) || 37 === e || (this.parseError = true), 37 !== e || o(this.input[this.pointer + 1]) && o(this.input[this.pointer + 2]) || (this.parseError = true), isNaN(e) || (this.url.path[0] = this.url.path[0] + N(e, v))), true;
                      }, A.prototype["parse query"] = function (e, p) {
                        if (isNaN(e) || !this.stateOverride && 35 === e) {
                          f(this.url) && "ws" !== this.url.scheme && "wss" !== this.url.scheme || (this.encodingOverride = "utf-8");
                          const p = new Buffer(this.buffer);
                          for (let e = 0; e < p.length; ++e) p[e] < 33 || p[e] > 126 || 34 === p[e] || 35 === p[e] || 60 === p[e] || 62 === p[e] ? this.url.query += c(p[e]) : this.url.query += String.fromCodePoint(p[e]);
                          this.buffer = "", 35 === e && (this.url.fragment = "", this.state = "fragment");
                        } else 37 !== e || o(this.input[this.pointer + 1]) && o(this.input[this.pointer + 2]) || (this.parseError = true), this.buffer += p;
                        return true;
                      }, A.prototype["parse fragment"] = function (e) {
                        return isNaN(e) || (0 === e ? this.parseError = true : (37 !== e || o(this.input[this.pointer + 1]) && o(this.input[this.pointer + 2]) || (this.parseError = true), this.url.fragment += N(e, v))), true;
                      }, e.exports.serializeURL = function (e, p) {
                        let a = e.scheme + ":";
                        if (null !== e.host ? (a += "//", "" === e.username && "" === e.password || (a += e.username, "" !== e.password && (a += ":" + e.password), a += "@"), a += T(e.host), null !== e.port && (a += ":" + e.port)) : null === e.host && "file" === e.scheme && (a += "//"), e.cannotBeABaseURL) a += e.path[0];else for (const p of e.path) a += "/" + p;
                        return null !== e.query && (a += "?" + e.query), p || null === e.fragment || (a += "#" + e.fragment), a;
                      }, e.exports.serializeURLOrigin = function (p) {
                        switch (p.scheme) {
                          case "blob":
                            try {
                              return e.exports.serializeURLOrigin(e.exports.parseURL(p.path[0]));
                            } catch (e) {
                              return "null";
                            }
                          case "ftp":
                          case "gopher":
                          case "http":
                          case "https":
                          case "ws":
                          case "wss":
                            return function (e) {
                              let p = e.scheme + "://";
                              return p += T(e.host), null !== e.port && (p += ":" + e.port), p;
                            }({
                              scheme: p.scheme,
                              host: p.host,
                              port: p.port
                            });
                          case "file":
                            return "file://";
                          default:
                            return "null";
                        }
                      }, e.exports.basicURLParse = function (e, p) {
                        void 0 === p && (p = {});
                        const a = new A(e, p.baseURL, p.encodingOverride, p.url, p.stateOverride);
                        return a.failure ? "failure" : a.url;
                      }, e.exports.setTheUsername = function (e, a) {
                        e.username = "";
                        const d = p.ucs2.decode(a);
                        for (let p = 0; p < d.length; ++p) e.username += N(d[p], y);
                      }, e.exports.setThePassword = function (e, a) {
                        e.password = "";
                        const d = p.ucs2.decode(a);
                        for (let p = 0; p < d.length; ++p) e.password += N(d[p], y);
                      }, e.exports.serializeHost = T, e.exports.cannotHaveAUsernamePasswordPort = function (e) {
                        return null === e.host || "" === e.host || e.cannotBeABaseURL || "file" === e.scheme;
                      }, e.exports.serializeInteger = function (e) {
                        return String(e);
                      }, e.exports.parseURL = function (p, a) {
                        return void 0 === a && (a = {}), e.exports.basicURLParse(p, {
                          baseURL: a.baseURL,
                          encodingOverride: a.encodingOverride
                        });
                      };
                    }(g);
                    var x = g.exports;
                    const C = x;
                    _.implementation = class {
                      constructor(e) {
                        const p = e[0],
                          a = e[1];
                        let d = null;
                        if (void 0 !== a && (d = C.basicURLParse(a), "failure" === d)) throw new TypeError("Invalid base URL");
                        const t = C.basicURLParse(p, {
                          baseURL: d
                        });
                        if ("failure" === t) throw new TypeError("Invalid URL");
                        this._url = t;
                      }
                      get href() {
                        return C.serializeURL(this._url);
                      }
                      set href(e) {
                        const p = C.basicURLParse(e);
                        if ("failure" === p) throw new TypeError("Invalid URL");
                        this._url = p;
                      }
                      get origin() {
                        return C.serializeURLOrigin(this._url);
                      }
                      get protocol() {
                        return this._url.scheme + ":";
                      }
                      set protocol(e) {
                        C.basicURLParse(e + ":", {
                          url: this._url,
                          stateOverride: "scheme start"
                        });
                      }
                      get username() {
                        return this._url.username;
                      }
                      set username(e) {
                        C.cannotHaveAUsernamePasswordPort(this._url) || C.setTheUsername(this._url, e);
                      }
                      get password() {
                        return this._url.password;
                      }
                      set password(e) {
                        C.cannotHaveAUsernamePasswordPort(this._url) || C.setThePassword(this._url, e);
                      }
                      get host() {
                        const e = this._url;
                        return null === e.host ? "" : null === e.port ? C.serializeHost(e.host) : C.serializeHost(e.host) + ":" + C.serializeInteger(e.port);
                      }
                      set host(e) {
                        this._url.cannotBeABaseURL || C.basicURLParse(e, {
                          url: this._url,
                          stateOverride: "host"
                        });
                      }
                      get hostname() {
                        return null === this._url.host ? "" : C.serializeHost(this._url.host);
                      }
                      set hostname(e) {
                        this._url.cannotBeABaseURL || C.basicURLParse(e, {
                          url: this._url,
                          stateOverride: "hostname"
                        });
                      }
                      get port() {
                        return null === this._url.port ? "" : C.serializeInteger(this._url.port);
                      }
                      set port(e) {
                        C.cannotHaveAUsernamePasswordPort(this._url) || ("" === e ? this._url.port = null : C.basicURLParse(e, {
                          url: this._url,
                          stateOverride: "port"
                        }));
                      }
                      get pathname() {
                        return this._url.cannotBeABaseURL ? this._url.path[0] : 0 === this._url.path.length ? "" : "/" + this._url.path.join("/");
                      }
                      set pathname(e) {
                        this._url.cannotBeABaseURL || (this._url.path = [], C.basicURLParse(e, {
                          url: this._url,
                          stateOverride: "path start"
                        }));
                      }
                      get search() {
                        return null === this._url.query || "" === this._url.query ? "" : "?" + this._url.query;
                      }
                      set search(e) {
                        const p = this._url;
                        if ("" === e) return void (p.query = null);
                        const a = "?" === e[0] ? e.substring(1) : e;
                        p.query = "", C.basicURLParse(a, {
                          url: p,
                          stateOverride: "query"
                        });
                      }
                      get hash() {
                        return null === this._url.fragment || "" === this._url.fragment ? "" : "#" + this._url.fragment;
                      }
                      set hash(e) {
                        if ("" === e) return void (this._url.fragment = null);
                        const p = "#" === e[0] ? e.substring(1) : e;
                        this._url.fragment = "", C.basicURLParse(p, {
                          url: this._url,
                          stateOverride: "fragment"
                        });
                      }
                      toJSON() {
                        return this.href;
                      }
                    }, function (e) {
                      const p = h,
                        a = w,
                        d = _,
                        t = a.implSymbol;
                      function i(a) {
                        if (!this || this[t] || !(this instanceof i)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
                        if (arguments.length < 1) throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
                        const d = [];
                        for (let e = 0; e < arguments.length && e < 2; ++e) d[e] = arguments[e];
                        d[0] = p.USVString(d[0]), void 0 !== d[1] && (d[1] = p.USVString(d[1])), e.exports.setup(this, d);
                      }
                      i.prototype.toJSON = function () {
                        if (!this || !e.exports.is(this)) throw new TypeError("Illegal invocation");
                        const p = [];
                        for (let e = 0; e < arguments.length && e < 0; ++e) p[e] = arguments[e];
                        return this[t].toJSON.apply(this[t], p);
                      }, Object.defineProperty(i.prototype, "href", {
                        get() {
                          return this[t].href;
                        },
                        set(e) {
                          e = p.USVString(e), this[t].href = e;
                        },
                        enumerable: true,
                        configurable: true
                      }), i.prototype.toString = function () {
                        if (!this || !e.exports.is(this)) throw new TypeError("Illegal invocation");
                        return this.href;
                      }, Object.defineProperty(i.prototype, "origin", {
                        get() {
                          return this[t].origin;
                        },
                        enumerable: true,
                        configurable: true
                      }), Object.defineProperty(i.prototype, "protocol", {
                        get() {
                          return this[t].protocol;
                        },
                        set(e) {
                          e = p.USVString(e), this[t].protocol = e;
                        },
                        enumerable: true,
                        configurable: true
                      }), Object.defineProperty(i.prototype, "username", {
                        get() {
                          return this[t].username;
                        },
                        set(e) {
                          e = p.USVString(e), this[t].username = e;
                        },
                        enumerable: true,
                        configurable: true
                      }), Object.defineProperty(i.prototype, "password", {
                        get() {
                          return this[t].password;
                        },
                        set(e) {
                          e = p.USVString(e), this[t].password = e;
                        },
                        enumerable: true,
                        configurable: true
                      }), Object.defineProperty(i.prototype, "host", {
                        get() {
                          return this[t].host;
                        },
                        set(e) {
                          e = p.USVString(e), this[t].host = e;
                        },
                        enumerable: true,
                        configurable: true
                      }), Object.defineProperty(i.prototype, "hostname", {
                        get() {
                          return this[t].hostname;
                        },
                        set(e) {
                          e = p.USVString(e), this[t].hostname = e;
                        },
                        enumerable: true,
                        configurable: true
                      }), Object.defineProperty(i.prototype, "port", {
                        get() {
                          return this[t].port;
                        },
                        set(e) {
                          e = p.USVString(e), this[t].port = e;
                        },
                        enumerable: true,
                        configurable: true
                      }), Object.defineProperty(i.prototype, "pathname", {
                        get() {
                          return this[t].pathname;
                        },
                        set(e) {
                          e = p.USVString(e), this[t].pathname = e;
                        },
                        enumerable: true,
                        configurable: true
                      }), Object.defineProperty(i.prototype, "search", {
                        get() {
                          return this[t].search;
                        },
                        set(e) {
                          e = p.USVString(e), this[t].search = e;
                        },
                        enumerable: true,
                        configurable: true
                      }), Object.defineProperty(i.prototype, "hash", {
                        get() {
                          return this[t].hash;
                        },
                        set(e) {
                          e = p.USVString(e), this[t].hash = e;
                        },
                        enumerable: true,
                        configurable: true
                      }), e.exports = {
                        is: e => !!e && e[t] instanceof d.implementation,
                        create(e, p) {
                          let a = Object.create(i.prototype);
                          return this.setup(a, e, p), a;
                        },
                        setup(e, p, i) {
                          i || (i = {}), i.wrapper = e, e[t] = new d.implementation(p, i), e[t][a.wrapperSymbol] = e;
                        },
                        interface: i,
                        expose: {
                          Window: {
                            URL: i
                          },
                          Worker: {
                            URL: i
                          }
                        }
                      };
                    }(s);
                    var O = s.exports;
                    o.URL = O.interface, o.serializeURL = x.serializeURL, o.serializeURLOrigin = x.serializeURLOrigin, o.basicURLParse = x.basicURLParse, o.setTheUsername = x.setTheUsername, o.setThePassword = x.setThePassword, o.serializeHost = x.serializeHost, o.serializeInteger = x.serializeInteger, o.parseURL = x.parseURL;
                    const L = e.Readable,
                      B = Symbol("buffer"),
                      U = Symbol("type");
                    class P {
                      constructor() {
                        this[U] = "";
                        const e = arguments[0],
                          p = arguments[1],
                          a = [];
                        let d = 0;
                        if (e) {
                          const p = e,
                            t = Number(p.length);
                          for (let e = 0; e < t; e++) {
                            const t = p[e];
                            let i;
                            i = t instanceof Buffer ? t : ArrayBuffer.isView(t) ? Buffer.from(t.buffer, t.byteOffset, t.byteLength) : t instanceof ArrayBuffer ? Buffer.from(t) : t instanceof P ? t[B] : Buffer.from("string" == typeof t ? t : String(t)), d += i.length, a.push(i);
                          }
                        }
                        this[B] = Buffer.concat(a);
                        let t = p && void 0 !== p.type && String(p.type).toLowerCase();
                        t && !/[^\u0020-\u007E]/.test(t) && (this[U] = t);
                      }
                      get size() {
                        return this[B].length;
                      }
                      get type() {
                        return this[U];
                      }
                      text() {
                        return Promise.resolve(this[B].toString());
                      }
                      arrayBuffer() {
                        const e = this[B],
                          p = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                        return Promise.resolve(p);
                      }
                      stream() {
                        const e = new L();
                        return e._read = function () {}, e.push(this[B]), e.push(null), e;
                      }
                      toString() {
                        return "[object Blob]";
                      }
                      slice() {
                        const e = this.size,
                          p = arguments[0],
                          a = arguments[1];
                        let d, t;
                        d = void 0 === p ? 0 : p < 0 ? Math.max(e + p, 0) : Math.min(p, e), t = void 0 === a ? e : a < 0 ? Math.max(e + a, 0) : Math.min(a, e);
                        const i = Math.max(t - d, 0),
                          r = this[B].slice(d, d + i),
                          l = new P([], {
                            type: arguments[2]
                          });
                        return l[B] = r, l;
                      }
                    }
                    function z(e, p, a) {
                      Error.call(this, e), this.message = e, this.type = p, a && (this.code = this.errno = a.code), Error.captureStackTrace(this, this.constructor);
                    }
                    let F;
                    Object.defineProperties(P.prototype, {
                      size: {
                        enumerable: true
                      },
                      type: {
                        enumerable: true
                      },
                      slice: {
                        enumerable: true
                      }
                    }), Object.defineProperty(P.prototype, Symbol.toStringTag, {
                      value: "Blob",
                      writable: false,
                      enumerable: false,
                      configurable: true
                    }), z.prototype = Object.create(Error.prototype), z.prototype.constructor = z, z.prototype.name = "FetchError";
                    try {
                      F = require("encoding").convert;
                    } catch (e) {}
                    const I = Symbol("Body internals"),
                      M = e.PassThrough;
                    function j(p) {
                      var a = this,
                        d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = d.size;
                      let i = void 0 === t ? 0 : t;
                      var r = d.timeout;
                      let l = void 0 === r ? 0 : r;
                      null == p ? p = null : Z(p) ? p = Buffer.from(p.toString()) : H(p) || Buffer.isBuffer(p) || ("[object ArrayBuffer]" === Object.prototype.toString.call(p) ? p = Buffer.from(p) : ArrayBuffer.isView(p) ? p = Buffer.from(p.buffer, p.byteOffset, p.byteLength) : p instanceof e || (p = Buffer.from(String(p)))), this[I] = {
                        body: p,
                        disturbed: false,
                        error: null
                      }, this.size = i, this.timeout = l, p instanceof e && p.on("error", function (e) {
                        const p = "AbortError" === e.name ? e : new z(`Invalid response body while trying to fetch ${a.url}: ${e.message}`, "system", e);
                        a[I].error = p;
                      });
                    }
                    function q() {
                      var p = this;
                      if (this[I].disturbed) return j.Promise.reject(new TypeError(`body used already for: ${this.url}`));
                      if (this[I].disturbed = true, this[I].error) return j.Promise.reject(this[I].error);
                      let a = this.body;
                      if (null === a) return j.Promise.resolve(Buffer.alloc(0));
                      if (H(a) && (a = a.stream()), Buffer.isBuffer(a)) return j.Promise.resolve(a);
                      if (!(a instanceof e)) return j.Promise.resolve(Buffer.alloc(0));
                      let d = [],
                        t = 0,
                        i = false;
                      return new j.Promise(function (e, r) {
                        let l;
                        p.timeout && (l = setTimeout(function () {
                          i = true, r(new z(`Response timeout while trying to fetch ${p.url} (over ${p.timeout}ms)`, "body-timeout"));
                        }, p.timeout)), a.on("error", function (e) {
                          "AbortError" === e.name ? (i = true, r(e)) : r(new z(`Invalid response body while trying to fetch ${p.url}: ${e.message}`, "system", e));
                        }), a.on("data", function (e) {
                          if (!i && null !== e) {
                            if (p.size && t + e.length > p.size) return i = true, void r(new z(`content size at ${p.url} over limit: ${p.size}`, "max-size"));
                            t += e.length, d.push(e);
                          }
                        }), a.on("end", function () {
                          if (!i) {
                            clearTimeout(l);
                            try {
                              e(Buffer.concat(d, t));
                            } catch (e) {
                              r(new z(`Could not create Buffer from response body for ${p.url}: ${e.message}`, "system", e));
                            }
                          }
                        });
                      });
                    }
                    function Z(e) {
                      return "object" == typeof e && "function" == typeof e.append && "function" == typeof e.delete && "function" == typeof e.get && "function" == typeof e.getAll && "function" == typeof e.has && "function" == typeof e.set && ("URLSearchParams" === e.constructor.name || "[object URLSearchParams]" === Object.prototype.toString.call(e) || "function" == typeof e.sort);
                    }
                    function H(e) {
                      return "object" == typeof e && "function" == typeof e.arrayBuffer && "string" == typeof e.type && "function" == typeof e.stream && "function" == typeof e.constructor && "string" == typeof e.constructor.name && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag]);
                    }
                    function $(p) {
                      let a,
                        d,
                        t = p.body;
                      if (p.bodyUsed) throw new Error("cannot clone body after it is used");
                      return t instanceof e && "function" != typeof t.getBoundary && (a = new M(), d = new M(), t.pipe(a), t.pipe(d), p[I].body = a, t = d), t;
                    }
                    function Y(p) {
                      return null === p ? null : "string" == typeof p ? "text/plain;charset=UTF-8" : Z(p) ? "application/x-www-form-urlencoded;charset=UTF-8" : H(p) ? p.type || null : Buffer.isBuffer(p) || "[object ArrayBuffer]" === Object.prototype.toString.call(p) || ArrayBuffer.isView(p) ? null : "function" == typeof p.getBoundary ? `multipart/form-data;boundary=${p.getBoundary()}` : p instanceof e ? null : "text/plain;charset=UTF-8";
                    }
                    function K(e) {
                      const p = e.body;
                      return null === p ? 0 : H(p) ? p.size : Buffer.isBuffer(p) ? p.length : p && "function" == typeof p.getLengthSync && (p._lengthRetrievers && 0 == p._lengthRetrievers.length || p.hasKnownLength && p.hasKnownLength()) ? p.getLengthSync() : null;
                    }
                    j.prototype = {
                      get body() {
                        return this[I].body;
                      },
                      get bodyUsed() {
                        return this[I].disturbed;
                      },
                      arrayBuffer() {
                        return q.call(this).then(function (e) {
                          return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                        });
                      },
                      blob() {
                        let e = this.headers && this.headers.get("content-type") || "";
                        return q.call(this).then(function (p) {
                          return Object.assign(new P([], {
                            type: e.toLowerCase()
                          }), {
                            [B]: p
                          });
                        });
                      },
                      json() {
                        var e = this;
                        return q.call(this).then(function (p) {
                          try {
                            return JSON.parse(p.toString());
                          } catch (p) {
                            return j.Promise.reject(new z(`invalid json response body at ${e.url} reason: ${p.message}`, "invalid-json"));
                          }
                        });
                      },
                      text() {
                        return q.call(this).then(function (e) {
                          return e.toString();
                        });
                      },
                      buffer() {
                        return q.call(this);
                      },
                      textConverted() {
                        var e = this;
                        return q.call(this).then(function (p) {
                          return function (e, p) {
                            if ("function" != typeof F) throw new Error("The package `encoding` must be installed to use the textConverted() function");
                            const a = p.get("content-type");
                            let d,
                              t,
                              i = "utf-8";
                            return a && (d = /charset=([^;]*)/i.exec(a)), t = e.slice(0, 1024).toString(), !d && t && (d = /<meta.+?charset=(['"])(.+?)\1/i.exec(t)), !d && t && (d = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(t), d || (d = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(t), d && d.pop()), d && (d = /charset=(.*)/i.exec(d.pop()))), !d && t && (d = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(t)), d && (i = d.pop(), "gb2312" !== i && "gbk" !== i || (i = "gb18030")), F(e, "UTF-8", i).toString();
                          }(p, e.headers);
                        });
                      }
                    }, Object.defineProperties(j.prototype, {
                      body: {
                        enumerable: true
                      },
                      bodyUsed: {
                        enumerable: true
                      },
                      arrayBuffer: {
                        enumerable: true
                      },
                      blob: {
                        enumerable: true
                      },
                      json: {
                        enumerable: true
                      },
                      text: {
                        enumerable: true
                      }
                    }), j.mixIn = function (e) {
                      for (const p of Object.getOwnPropertyNames(j.prototype)) if (!(p in e)) {
                        const a = Object.getOwnPropertyDescriptor(j.prototype, p);
                        Object.defineProperty(e, p, a);
                      }
                    }, j.Promise = p.Promise;
                    const W = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,
                      G = /[^\t\x20-\x7e\x80-\xff]/;
                    function X(e) {
                      if (e = `${e}`, W.test(e) || "" === e) throw new TypeError(`${e} is not a legal HTTP header name`);
                    }
                    function J(e) {
                      if (e = `${e}`, G.test(e)) throw new TypeError(`${e} is not a legal HTTP header value`);
                    }
                    function Q(e, p) {
                      p = p.toLowerCase();
                      for (const a in e) if (a.toLowerCase() === p) return a;
                    }
                    const ee = Symbol("map");
                    class pe {
                      constructor() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                        if (this[ee] = Object.create(null), e instanceof pe) {
                          const p = e.raw(),
                            a = Object.keys(p);
                          for (const e of a) for (const a of p[e]) this.append(e, a);
                        } else if (null == e) ;else {
                          if ("object" != typeof e) throw new TypeError("Provided initializer must be an object");
                          {
                            const p = e[Symbol.iterator];
                            if (null != p) {
                              if ("function" != typeof p) throw new TypeError("Header pairs must be iterable");
                              const a = [];
                              for (const p of e) {
                                if ("object" != typeof p || "function" != typeof p[Symbol.iterator]) throw new TypeError("Each header pair must be iterable");
                                a.push(Array.from(p));
                              }
                              for (const e of a) {
                                if (2 !== e.length) throw new TypeError("Each header pair must be a name/value tuple");
                                this.append(e[0], e[1]);
                              }
                            } else for (const p of Object.keys(e)) {
                              const a = e[p];
                              this.append(p, a);
                            }
                          }
                        }
                      }
                      get(e) {
                        X(e = `${e}`);
                        const p = Q(this[ee], e);
                        return void 0 === p ? null : this[ee][p].join(", ");
                      }
                      forEach(e) {
                        let p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                          a = ae(this),
                          d = 0;
                        for (; d < a.length;) {
                          var t = a[d];
                          const i = t[0],
                            r = t[1];
                          e.call(p, r, i, this), a = ae(this), d++;
                        }
                      }
                      set(e, p) {
                        p = `${p}`, X(e = `${e}`), J(p);
                        const a = Q(this[ee], e);
                        this[ee][void 0 !== a ? a : e] = [p];
                      }
                      append(e, p) {
                        p = `${p}`, X(e = `${e}`), J(p);
                        const a = Q(this[ee], e);
                        void 0 !== a ? this[ee][a].push(p) : this[ee][e] = [p];
                      }
                      has(e) {
                        return X(e = `${e}`), void 0 !== Q(this[ee], e);
                      }
                      delete(e) {
                        X(e = `${e}`);
                        const p = Q(this[ee], e);
                        void 0 !== p && delete this[ee][p];
                      }
                      raw() {
                        return this[ee];
                      }
                      keys() {
                        return te(this, "key");
                      }
                      values() {
                        return te(this, "value");
                      }
                      [Symbol.iterator]() {
                        return te(this, "key+value");
                      }
                    }
                    function ae(e) {
                      let p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "key+value";
                      return Object.keys(e[ee]).sort().map("key" === p ? function (e) {
                        return e.toLowerCase();
                      } : "value" === p ? function (p) {
                        return e[ee][p].join(", ");
                      } : function (p) {
                        return [p.toLowerCase(), e[ee][p].join(", ")];
                      });
                    }
                    pe.prototype.entries = pe.prototype[Symbol.iterator], Object.defineProperty(pe.prototype, Symbol.toStringTag, {
                      value: "Headers",
                      writable: false,
                      enumerable: false,
                      configurable: true
                    }), Object.defineProperties(pe.prototype, {
                      get: {
                        enumerable: true
                      },
                      forEach: {
                        enumerable: true
                      },
                      set: {
                        enumerable: true
                      },
                      append: {
                        enumerable: true
                      },
                      has: {
                        enumerable: true
                      },
                      delete: {
                        enumerable: true
                      },
                      keys: {
                        enumerable: true
                      },
                      values: {
                        enumerable: true
                      },
                      entries: {
                        enumerable: true
                      }
                    });
                    const de = Symbol("internal");
                    function te(e, p) {
                      const a = Object.create(ie);
                      return a[de] = {
                        target: e,
                        kind: p,
                        index: 0
                      }, a;
                    }
                    const ie = Object.setPrototypeOf({
                      next() {
                        if (!this || Object.getPrototypeOf(this) !== ie) throw new TypeError("Value of `this` is not a HeadersIterator");
                        var e = this[de];
                        const p = e.target,
                          a = e.kind,
                          d = e.index,
                          t = ae(p, a);
                        return d >= t.length ? {
                          value: void 0,
                          done: true
                        } : (this[de].index = d + 1, {
                          value: t[d],
                          done: false
                        });
                      }
                    }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
                    function re(e) {
                      const p = Object.assign({
                          __proto__: null
                        }, e[ee]),
                        a = Q(e[ee], "Host");
                      return void 0 !== a && (p[a] = p[a][0]), p;
                    }
                    Object.defineProperty(ie, Symbol.toStringTag, {
                      value: "HeadersIterator",
                      writable: false,
                      enumerable: false,
                      configurable: true
                    });
                    const le = Symbol("Response internals"),
                      me = a.STATUS_CODES;
                    class ne {
                      constructor() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                          p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        j.call(this, e, p);
                        const a = p.status || 200,
                          d = new pe(p.headers);
                        if (null != e && !d.has("Content-Type")) {
                          const p = Y(e);
                          p && d.append("Content-Type", p);
                        }
                        this[le] = {
                          url: p.url,
                          status: a,
                          statusText: p.statusText || me[a],
                          headers: d,
                          counter: p.counter
                        };
                      }
                      get url() {
                        return this[le].url || "";
                      }
                      get status() {
                        return this[le].status;
                      }
                      get ok() {
                        return this[le].status >= 200 && this[le].status < 300;
                      }
                      get redirected() {
                        return this[le].counter > 0;
                      }
                      get statusText() {
                        return this[le].statusText;
                      }
                      get headers() {
                        return this[le].headers;
                      }
                      clone() {
                        return new ne($(this), {
                          url: this.url,
                          status: this.status,
                          statusText: this.statusText,
                          headers: this.headers,
                          ok: this.ok,
                          redirected: this.redirected
                        });
                      }
                    }
                    j.mixIn(ne.prototype), Object.defineProperties(ne.prototype, {
                      url: {
                        enumerable: true
                      },
                      status: {
                        enumerable: true
                      },
                      ok: {
                        enumerable: true
                      },
                      redirected: {
                        enumerable: true
                      },
                      statusText: {
                        enumerable: true
                      },
                      headers: {
                        enumerable: true
                      },
                      clone: {
                        enumerable: true
                      }
                    }), Object.defineProperty(ne.prototype, Symbol.toStringTag, {
                      value: "Response",
                      writable: false,
                      enumerable: false,
                      configurable: true
                    });
                    const oe = Symbol("Request internals"),
                      se = d.URL || o.URL,
                      ue = d.parse,
                      he = d.format;
                    function fe(e) {
                      return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e) && (e = new se(e).toString()), ue(e);
                    }
                    const ce = "destroy" in e.Readable.prototype;
                    function ve(e) {
                      return "object" == typeof e && "object" == typeof e[oe];
                    }
                    class we {
                      constructor(e) {
                        let p,
                          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        ve(e) ? p = fe(e.url) : (p = e && e.href ? fe(e.href) : fe(`${e}`), e = {});
                        let d = a.method || e.method || "GET";
                        if (d = d.toUpperCase(), (null != a.body || ve(e) && null !== e.body) && ("GET" === d || "HEAD" === d)) throw new TypeError("Request with GET/HEAD method cannot have body");
                        let t = null != a.body ? a.body : ve(e) && null !== e.body ? $(e) : null;
                        j.call(this, t, {
                          timeout: a.timeout || e.timeout || 0,
                          size: a.size || e.size || 0
                        });
                        const i = new pe(a.headers || e.headers || {});
                        if (null != t && !i.has("Content-Type")) {
                          const e = Y(t);
                          e && i.append("Content-Type", e);
                        }
                        let r = ve(e) ? e.signal : null;
                        if ("signal" in a && (r = a.signal), null != r && !function (e) {
                          const p = e && "object" == typeof e && Object.getPrototypeOf(e);
                          return !(!p || "AbortSignal" !== p.constructor.name);
                        }(r)) throw new TypeError("Expected signal to be an instanceof AbortSignal");
                        this[oe] = {
                          method: d,
                          redirect: a.redirect || e.redirect || "follow",
                          headers: i,
                          parsedURL: p,
                          signal: r
                        }, this.follow = void 0 !== a.follow ? a.follow : void 0 !== e.follow ? e.follow : 20, this.compress = void 0 !== a.compress ? a.compress : void 0 === e.compress || e.compress, this.counter = a.counter || e.counter || 0, this.agent = a.agent || e.agent;
                      }
                      get method() {
                        return this[oe].method;
                      }
                      get url() {
                        return he(this[oe].parsedURL);
                      }
                      get headers() {
                        return this[oe].headers;
                      }
                      get redirect() {
                        return this[oe].redirect;
                      }
                      get signal() {
                        return this[oe].signal;
                      }
                      clone() {
                        return new we(this);
                      }
                    }
                    function _e(e) {
                      Error.call(this, e), this.type = "aborted", this.message = e, Error.captureStackTrace(this, this.constructor);
                    }
                    j.mixIn(we.prototype), Object.defineProperty(we.prototype, Symbol.toStringTag, {
                      value: "Request",
                      writable: false,
                      enumerable: false,
                      configurable: true
                    }), Object.defineProperties(we.prototype, {
                      method: {
                        enumerable: true
                      },
                      url: {
                        enumerable: true
                      },
                      headers: {
                        enumerable: true
                      },
                      redirect: {
                        enumerable: true
                      },
                      clone: {
                        enumerable: true
                      },
                      signal: {
                        enumerable: true
                      }
                    }), _e.prototype = Object.create(Error.prototype), _e.prototype.constructor = _e, _e.prototype.name = "AbortError";
                    const ge = d.URL || o.URL,
                      be = e.PassThrough;
                    function ye(p, d) {
                      if (!ye.Promise) throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
                      return j.Promise = ye.Promise, new ye.Promise(function (t, l) {
                        const m = new we(p, d),
                          n = function (p) {
                            const a = p[oe].parsedURL,
                              d = new pe(p[oe].headers);
                            if (d.has("Accept") || d.set("Accept", "*/*"), !a.protocol || !a.hostname) throw new TypeError("Only absolute URLs are supported");
                            if (!/^https?:$/.test(a.protocol)) throw new TypeError("Only HTTP(S) protocols are supported");
                            if (p.signal && p.body instanceof e.Readable && !ce) throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
                            let t = null;
                            if (null == p.body && /^(POST|PUT)$/i.test(p.method) && (t = "0"), null != p.body) {
                              const e = K(p);
                              "number" == typeof e && (t = String(e));
                            }
                            t && d.set("Content-Length", t), d.has("User-Agent") || d.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"), p.compress && !d.has("Accept-Encoding") && d.set("Accept-Encoding", "gzip,deflate");
                            let i = p.agent;
                            return "function" == typeof i && (i = i(a)), Object.assign({}, a, {
                              method: p.method,
                              headers: re(d),
                              agent: i
                            });
                          }(m),
                          o = ("https:" === n.protocol ? i : a).request,
                          s = m.signal;
                        let u = null;
                        const h = function () {
                          let p = new _e("The user aborted a request.");
                          l(p), m.body && m.body instanceof e.Readable && Ne(m.body, p), u && u.body && u.body.emit("error", p);
                        };
                        if (s && s.aborted) return void h();
                        const f = function () {
                            h(), w();
                          },
                          c = o(n);
                        let v;
                        function w() {
                          c.abort(), s && s.removeEventListener("abort", f), clearTimeout(v);
                        }
                        s && s.addEventListener("abort", f), m.timeout && c.once("socket", function (e) {
                          v = setTimeout(function () {
                            l(new z(`network timeout at: ${m.url}`, "request-timeout")), w();
                          }, m.timeout);
                        }), c.on("error", function (e) {
                          l(new z(`request to ${m.url} failed, reason: ${e.message}`, "system", e)), u && u.body && Ne(u.body, e), w();
                        }), function (e, p) {
                          let a;
                          e.on("socket", function (e) {
                            a = e;
                          }), e.on("response", function (e) {
                            const d = e.headers;
                            "chunked" !== d["transfer-encoding"] || d["content-length"] || e.once("close", function (e) {
                              if (a && a.listenerCount("data") > 0 && !e) {
                                const e = new Error("Premature close");
                                e.code = "ERR_STREAM_PREMATURE_CLOSE", p(e);
                              }
                            });
                          });
                        }(c, function (e) {
                          s && s.aborted || u && u.body && Ne(u.body, e);
                        }), parseInt(process.version.substring(1)) < 14 && c.on("socket", function (e) {
                          e.addListener("close", function (p) {
                            const a = e.listenerCount("data") > 0;
                            if (u && a && !p && (!s || !s.aborted)) {
                              const e = new Error("Premature close");
                              e.code = "ERR_STREAM_PREMATURE_CLOSE", u.body.emit("error", e);
                            }
                          });
                        }), c.on("response", function (e) {
                          clearTimeout(v);
                          const p = function (e) {
                            const p = new pe();
                            for (const a of Object.keys(e)) if (!W.test(a)) if (Array.isArray(e[a])) for (const d of e[a]) G.test(d) || (void 0 === p[ee][a] ? p[ee][a] = [d] : p[ee][a].push(d));else G.test(e[a]) || (p[ee][a] = [e[a]]);
                            return p;
                          }(e.headers);
                          if (ye.isRedirect(e.statusCode)) {
                            const d = p.get("Location");
                            let i = null;
                            try {
                              i = null === d ? null : new ge(d, m.url).toString();
                            } catch (e) {
                              if ("manual" !== m.redirect) return l(new z(`uri requested responds with an invalid redirect URL: ${d}`, "invalid-redirect")), void w();
                            }
                            switch (m.redirect) {
                              case "error":
                                return l(new z(`uri requested responds with a redirect, redirect mode is set to error: ${m.url}`, "no-redirect")), void w();
                              case "manual":
                                if (null !== i) try {
                                  p.set("Location", i);
                                } catch (e) {
                                  l(e);
                                }
                                break;
                              case "follow":
                                if (null === i) break;
                                if (m.counter >= m.follow) return l(new z(`maximum redirect reached at: ${m.url}`, "max-redirect")), void w();
                                const d = {
                                  headers: new pe(m.headers),
                                  follow: m.follow,
                                  counter: m.counter + 1,
                                  agent: m.agent,
                                  compress: m.compress,
                                  method: m.method,
                                  body: m.body,
                                  signal: m.signal,
                                  timeout: m.timeout,
                                  size: m.size
                                };
                                if (!function (e, p) {
                                  const a = new ge(p).hostname,
                                    d = new ge(e).hostname;
                                  return a === d || "." === a[a.length - d.length - 1] && a.endsWith(d);
                                }(m.url, i) || (a = m.url, new ge(i).protocol !== new ge(a).protocol)) for (const e of ["authorization", "www-authenticate", "cookie", "cookie2"]) d.headers.delete(e);
                                return 303 !== e.statusCode && m.body && null === K(m) ? (l(new z("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), void w()) : (303 !== e.statusCode && (301 !== e.statusCode && 302 !== e.statusCode || "POST" !== m.method) || (d.method = "GET", d.body = void 0, d.headers.delete("content-length")), t(ye(new we(i, d))), void w());
                            }
                          }
                          var a;
                          e.once("end", function () {
                            s && s.removeEventListener("abort", f);
                          });
                          let d = e.pipe(new be());
                          const i = {
                              url: m.url,
                              status: e.statusCode,
                              statusText: e.statusMessage,
                              headers: p,
                              size: m.size,
                              timeout: m.timeout,
                              counter: m.counter
                            },
                            n = p.get("Content-Encoding");
                          if (!m.compress || "HEAD" === m.method || null === n || 204 === e.statusCode || 304 === e.statusCode) return u = new ne(d, i), void t(u);
                          const o = {
                            flush: r.Z_SYNC_FLUSH,
                            finishFlush: r.Z_SYNC_FLUSH
                          };
                          if ("gzip" == n || "x-gzip" == n) return d = d.pipe(r.createGunzip(o)), u = new ne(d, i), void t(u);
                          if ("deflate" == n || "x-deflate" == n) {
                            const p = e.pipe(new be());
                            return p.once("data", function (e) {
                              d = 8 == (15 & e[0]) ? d.pipe(r.createInflate()) : d.pipe(r.createInflateRaw()), u = new ne(d, i), t(u);
                            }), void p.on("end", function () {
                              u || (u = new ne(d, i), t(u));
                            });
                          }
                          if ("br" == n && "function" == typeof r.createBrotliDecompress) return d = d.pipe(r.createBrotliDecompress()), u = new ne(d, i), void t(u);
                          u = new ne(d, i), t(u);
                        }), function (e, p) {
                          const a = p.body;
                          null === a ? e.end() : H(a) ? a.stream().pipe(e) : Buffer.isBuffer(a) ? (e.write(a), e.end()) : a.pipe(e);
                        }(c, m);
                      });
                    }
                    function Ne(e, p) {
                      e.destroy ? e.destroy(p) : (e.emit("error", p), e.end());
                    }
                    ye.isRedirect = function (e) {
                      return 301 === e || 302 === e || 303 === e || 307 === e || 308 === e;
                    }, ye.Promise = p.Promise;
                    var Se = m(Object.freeze({
                      __proto__: null,
                      AbortError: _e,
                      FetchError: z,
                      Headers: pe,
                      Request: we,
                      Response: ne,
                      default: ye
                    }));
                    !function (e, p) {
                      const a = Se,
                        d = a.default || a,
                        t = function (e, p) {
                          return /^\/\//.test(e) && (e = "https:" + e), d.call(this, e, p);
                        };
                      t.ponyfill = true, e.exports = p = t, p.fetch = t, p.Headers = a.Headers, p.Request = a.Request, p.Response = a.Response, p.default = t;
                    }(n, n.exports);
                    var De = l(n.exports);
                    class Te {
                      constructor() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.accessKey = e.accessKey || "", this.secretKey = e.secretKey || "", this.baseUrl = e.baseUrl || "https://mcapi.salesforce.com/data/v1", this.timeout = e.timeout || 3e4, this.maxRetries = e.maxRetries || 3, this.retryDelay = e.retryDelay || 1e3, this.token = null, this.tokenExpiry = null, this.dataExtensions = {}, e.dataExtensionKey && this.addDataExtension("default", e.dataExtensionKey);
                      }
                      setCredentials() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.accessKey = e.accessKey || this.accessKey, this.secretKey = e.secretKey || this.secretKey, this.baseUrl = e.baseUrl || this.baseUrl;
                      }
                      addDataExtension(e, p) {
                        return this.dataExtensions[e] = p, this;
                      }
                      removeDataExtension(e) {
                        return delete this.dataExtensions[e], this;
                      }
                      _getDataExtensionKey() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                        const p = this.dataExtensions[e];
                        if (!p) throw new Error(`Data Extension "${e}" não encontrada. Use addDataExtension() para registrá-la.`);
                        return p;
                      }
                      async _getToken() {
                        if (this.token && this.tokenExpiry && new Date() < this.tokenExpiry) return this.token;
                        try {
                          const e = await De(`${this.baseUrl}/auth`, {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                              accessKey: this.accessKey,
                              secretKey: this.secretKey
                            })
                          });
                          if (!e.ok) throw new Error(`Erro de autenticação: ${e.status} ${e.statusText}`);
                          const p = await e.json();
                          this.token = p.token;
                          const a = 1e3 * (p.expiresIn || 3600);
                          return this.tokenExpiry = new Date(Date.now() + a), this.token;
                        } catch (e) {
                          throw new Error(`Falha na obtenção do token: ${e.message}`);
                        }
                      }
                      async _executeWithRetry(e) {
                        let p;
                        for (let a = 0; a < this.maxRetries; a++) try {
                          return await e();
                        } catch (e) {
                          if (p = e, e.status && [429, 500, 502, 503, 504].includes(e.status)) {
                            const e = this.retryDelay * Math.pow(2, a);
                            await new Promise(p => setTimeout(p, e));
                            continue;
                          }
                          throw e;
                        }
                        throw p;
                      }
                      _validateDataFormat(e) {
                        if (!Array.isArray(e)) throw new Error("Os dados devem estar em formato de array");
                        for (const p of e) {
                          if (!p.keys || "object" != typeof p.keys || 0 === Object.keys(p.keys).length) throw new Error('Cada item deve ter uma propriedade "keys" não vazia');
                          if (!p.values || "object" != typeof p.values) throw new Error('Cada item deve ter uma propriedade "values"');
                        }
                        return true;
                      }
                      async _request(e, p) {
                        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        const d = {
                          method: p,
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${await this._getToken()}`
                          },
                          timeout: this.timeout
                        };
                        return a && (d.body = JSON.stringify(a)), this._executeWithRetry(async () => {
                          const p = await De(`${this.baseUrl}${e}`, d);
                          if (!p.ok) {
                            const e = await p.json().catch(() => ({})),
                              a = new Error(`Erro na requisição: ${p.status} ${p.statusText}`);
                            throw a.status = p.status, a.details = e, a;
                          }
                          return p.json();
                        });
                      }
                      _buildFilterQuery(e) {
                        if (!e || 0 === Object.keys(e).length) return "";
                        const p = [];
                        return Object.entries(e).forEach(e => {
                          let [a, d] = e;
                          "string" != typeof d && "number" != typeof d && "boolean" != typeof d || p.push(`${a}=${encodeURIComponent(d)}`);
                        }), e.$filter && p.push(`$filter=${encodeURIComponent(e.$filter)}`), e.$orderby && p.push(`$orderby=${encodeURIComponent(e.$orderby)}`), e.$top && p.push(`$top=${e.$top}`), e.$skip && p.push(`$skip=${e.$skip}`), p.length > 0 ? `?${p.join("&")}` : "";
                      }
                      async upsertData(e) {
                        let p = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
                        const a = this._getDataExtensionKey(p);
                        this._validateDataFormat(e);
                        const d = `/dataextensions/key:${a}/rows`;
                        return this._request(d, "POST", e);
                      }
                      async insertData(e) {
                        let p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                        return this.upsertData(e, {
                          operation: "insert"
                        }, p);
                      }
                      async updateData(e) {
                        let p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                        return this.upsertData(e, {
                          operation: "update"
                        }, p);
                      }
                      async queryData() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                        const a = `/dataextensions/key:${this._getDataExtensionKey(p)}/rows${this._buildFilterQuery(e)}`;
                        return this._request(a, "GET");
                      }
                      async queryWithOData(e) {
                        let p = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
                        const a = {
                          $filter: e,
                          ...(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                        };
                        return this.queryData(a, p);
                      }
                      async findByKey(e, p) {
                        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
                        const d = {
                            $filter: `${e} eq '${p}'`,
                            $top: 1
                          },
                          t = await this.queryData(d, a);
                        return t.length > 0 ? t[0] : null;
                      }
                      static createDataObject(e, p) {
                        return {
                          keys: e,
                          values: p
                        };
                      }
                      static createDataCollection(e) {
                        return e.map(e => Te.createDataObject(e.keys, e.values));
                      }
                    }
                    return Te;
                  }(Jp, yd, Nd, Sd, Rd, Xi);
                }(i), a(i.exports);
              }();
            }(d), a(d.exports);
          }();
        }(d), a(d.exports);
      }();
    }(a), p(a.exports);
  });
})(src);
var srcExports = src.exports;
var index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

export { index as default };
//# sourceMappingURL=index.esm.js.map
