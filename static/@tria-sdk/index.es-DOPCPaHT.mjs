import { g as ra, d as ia, f as q_ } from "./auth-manager-BLHwoT4w.mjs";
const z_ = {}, F_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: z_
}, Symbol.toStringTag, { value: "Module" })), H_ = /* @__PURE__ */ ra(F_);
var Tu = { exports: {} }, jn = typeof Reflect == "object" ? Reflect : null, Zl = jn && typeof jn.apply == "function" ? jn.apply : function(e, t, s) {
  return Function.prototype.apply.call(e, t, s);
}, ko;
jn && typeof jn.ownKeys == "function" ? ko = jn.ownKeys : Object.getOwnPropertySymbols ? ko = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : ko = function(e) {
  return Object.getOwnPropertyNames(e);
};
function B_(i) {
  console && console.warn && console.warn(i);
}
var zd = Number.isNaN || function(e) {
  return e !== e;
};
function ot() {
  ot.init.call(this);
}
Tu.exports = ot;
Tu.exports.once = W_;
ot.EventEmitter = ot;
ot.prototype._events = void 0;
ot.prototype._eventsCount = 0;
ot.prototype._maxListeners = void 0;
var ef = 10;
function na(i) {
  if (typeof i != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof i);
}
Object.defineProperty(ot, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return ef;
  },
  set: function(i) {
    if (typeof i != "number" || i < 0 || zd(i))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + i + ".");
    ef = i;
  }
});
ot.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
ot.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || zd(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Fd(i) {
  return i._maxListeners === void 0 ? ot.defaultMaxListeners : i._maxListeners;
}
ot.prototype.getMaxListeners = function() {
  return Fd(this);
};
ot.prototype.emit = function(e) {
  for (var t = [], s = 1; s < arguments.length; s++)
    t.push(arguments[s]);
  var o = e === "error", c = this._events;
  if (c !== void 0)
    o = o && c.error === void 0;
  else if (!o)
    return !1;
  if (o) {
    var d;
    if (t.length > 0 && (d = t[0]), d instanceof Error)
      throw d;
    var f = new Error("Unhandled error." + (d ? " (" + d.message + ")" : ""));
    throw f.context = d, f;
  }
  var y = c[e];
  if (y === void 0)
    return !1;
  if (typeof y == "function")
    Zl(y, this, t);
  else
    for (var g = y.length, m = Vd(y, g), s = 0; s < g; ++s)
      Zl(m[s], this, t);
  return !0;
};
function Hd(i, e, t, s) {
  var o, c, d;
  if (na(t), c = i._events, c === void 0 ? (c = i._events = /* @__PURE__ */ Object.create(null), i._eventsCount = 0) : (c.newListener !== void 0 && (i.emit(
    "newListener",
    e,
    t.listener ? t.listener : t
  ), c = i._events), d = c[e]), d === void 0)
    d = c[e] = t, ++i._eventsCount;
  else if (typeof d == "function" ? d = c[e] = s ? [t, d] : [d, t] : s ? d.unshift(t) : d.push(t), o = Fd(i), o > 0 && d.length > o && !d.warned) {
    d.warned = !0;
    var f = new Error("Possible EventEmitter memory leak detected. " + d.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    f.name = "MaxListenersExceededWarning", f.emitter = i, f.type = e, f.count = d.length, B_(f);
  }
  return i;
}
ot.prototype.addListener = function(e, t) {
  return Hd(this, e, t, !1);
};
ot.prototype.on = ot.prototype.addListener;
ot.prototype.prependListener = function(e, t) {
  return Hd(this, e, t, !0);
};
function K_() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Bd(i, e, t) {
  var s = { fired: !1, wrapFn: void 0, target: i, type: e, listener: t }, o = K_.bind(s);
  return o.listener = t, s.wrapFn = o, o;
}
ot.prototype.once = function(e, t) {
  return na(t), this.on(e, Bd(this, e, t)), this;
};
ot.prototype.prependOnceListener = function(e, t) {
  return na(t), this.prependListener(e, Bd(this, e, t)), this;
};
ot.prototype.removeListener = function(e, t) {
  var s, o, c, d, f;
  if (na(t), o = this._events, o === void 0)
    return this;
  if (s = o[e], s === void 0)
    return this;
  if (s === t || s.listener === t)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete o[e], o.removeListener && this.emit("removeListener", e, s.listener || t));
  else if (typeof s != "function") {
    for (c = -1, d = s.length - 1; d >= 0; d--)
      if (s[d] === t || s[d].listener === t) {
        f = s[d].listener, c = d;
        break;
      }
    if (c < 0)
      return this;
    c === 0 ? s.shift() : k_(s, c), s.length === 1 && (o[e] = s[0]), o.removeListener !== void 0 && this.emit("removeListener", e, f || t);
  }
  return this;
};
ot.prototype.off = ot.prototype.removeListener;
ot.prototype.removeAllListeners = function(e) {
  var t, s, o;
  if (s = this._events, s === void 0)
    return this;
  if (s.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : s[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete s[e]), this;
  if (arguments.length === 0) {
    var c = Object.keys(s), d;
    for (o = 0; o < c.length; ++o)
      d = c[o], d !== "removeListener" && this.removeAllListeners(d);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (t = s[e], typeof t == "function")
    this.removeListener(e, t);
  else if (t !== void 0)
    for (o = t.length - 1; o >= 0; o--)
      this.removeListener(e, t[o]);
  return this;
};
function Kd(i, e, t) {
  var s = i._events;
  if (s === void 0)
    return [];
  var o = s[e];
  return o === void 0 ? [] : typeof o == "function" ? t ? [o.listener || o] : [o] : t ? V_(o) : Vd(o, o.length);
}
ot.prototype.listeners = function(e) {
  return Kd(this, e, !0);
};
ot.prototype.rawListeners = function(e) {
  return Kd(this, e, !1);
};
ot.listenerCount = function(i, e) {
  return typeof i.listenerCount == "function" ? i.listenerCount(e) : kd.call(i, e);
};
ot.prototype.listenerCount = kd;
function kd(i) {
  var e = this._events;
  if (e !== void 0) {
    var t = e[i];
    if (typeof t == "function")
      return 1;
    if (t !== void 0)
      return t.length;
  }
  return 0;
}
ot.prototype.eventNames = function() {
  return this._eventsCount > 0 ? ko(this._events) : [];
};
function Vd(i, e) {
  for (var t = new Array(e), s = 0; s < e; ++s)
    t[s] = i[s];
  return t;
}
function k_(i, e) {
  for (; e + 1 < i.length; e++)
    i[e] = i[e + 1];
  i.pop();
}
function V_(i) {
  for (var e = new Array(i.length), t = 0; t < e.length; ++t)
    e[t] = i[t].listener || i[t];
  return e;
}
function W_(i, e) {
  return new Promise(function(t, s) {
    function o(d) {
      i.removeListener(e, c), s(d);
    }
    function c() {
      typeof i.removeListener == "function" && i.removeListener("error", o), t([].slice.call(arguments));
    }
    Wd(i, e, c, { once: !0 }), e !== "error" && G_(i, o, { once: !0 });
  });
}
function G_(i, e, t) {
  typeof i.on == "function" && Wd(i, "error", e, t);
}
function Wd(i, e, t, s) {
  if (typeof i.on == "function")
    s.once ? i.once(e, t) : i.on(e, t);
  else if (typeof i.addEventListener == "function")
    i.addEventListener(e, function o(c) {
      s.once && i.removeEventListener(e, o), t(c);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof i);
}
var Ar = Tu.exports;
const Ru = /* @__PURE__ */ ia(Ar);
var Nu = {}, sa = {}, $e = {}, Gd = {};
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  function e(f, y) {
    var g = f >>> 16 & 65535, m = f & 65535, D = y >>> 16 & 65535, I = y & 65535;
    return m * I + (g * I + m * D << 16 >>> 0) | 0;
  }
  i.mul = Math.imul || e;
  function t(f, y) {
    return f + y | 0;
  }
  i.add = t;
  function s(f, y) {
    return f - y | 0;
  }
  i.sub = s;
  function o(f, y) {
    return f << y | f >>> 32 - y;
  }
  i.rotl = o;
  function c(f, y) {
    return f << 32 - y | f >>> y;
  }
  i.rotr = c;
  function d(f) {
    return typeof f == "number" && isFinite(f) && Math.floor(f) === f;
  }
  i.isInteger = Number.isInteger || d, i.MAX_SAFE_INTEGER = 9007199254740991, i.isSafeInteger = function(f) {
    return i.isInteger(f) && f >= -i.MAX_SAFE_INTEGER && f <= i.MAX_SAFE_INTEGER;
  };
})(Gd);
Object.defineProperty($e, "__esModule", { value: !0 });
var Yd = Gd;
function Y_(i, e) {
  return e === void 0 && (e = 0), (i[e + 0] << 8 | i[e + 1]) << 16 >> 16;
}
$e.readInt16BE = Y_;
function J_(i, e) {
  return e === void 0 && (e = 0), (i[e + 0] << 8 | i[e + 1]) >>> 0;
}
$e.readUint16BE = J_;
function Q_(i, e) {
  return e === void 0 && (e = 0), (i[e + 1] << 8 | i[e]) << 16 >> 16;
}
$e.readInt16LE = Q_;
function X_(i, e) {
  return e === void 0 && (e = 0), (i[e + 1] << 8 | i[e]) >>> 0;
}
$e.readUint16LE = X_;
function Jd(i, e, t) {
  return e === void 0 && (e = new Uint8Array(2)), t === void 0 && (t = 0), e[t + 0] = i >>> 8, e[t + 1] = i >>> 0, e;
}
$e.writeUint16BE = Jd;
$e.writeInt16BE = Jd;
function Qd(i, e, t) {
  return e === void 0 && (e = new Uint8Array(2)), t === void 0 && (t = 0), e[t + 0] = i >>> 0, e[t + 1] = i >>> 8, e;
}
$e.writeUint16LE = Qd;
$e.writeInt16LE = Qd;
function uu(i, e) {
  return e === void 0 && (e = 0), i[e] << 24 | i[e + 1] << 16 | i[e + 2] << 8 | i[e + 3];
}
$e.readInt32BE = uu;
function hu(i, e) {
  return e === void 0 && (e = 0), (i[e] << 24 | i[e + 1] << 16 | i[e + 2] << 8 | i[e + 3]) >>> 0;
}
$e.readUint32BE = hu;
function lu(i, e) {
  return e === void 0 && (e = 0), i[e + 3] << 24 | i[e + 2] << 16 | i[e + 1] << 8 | i[e];
}
$e.readInt32LE = lu;
function fu(i, e) {
  return e === void 0 && (e = 0), (i[e + 3] << 24 | i[e + 2] << 16 | i[e + 1] << 8 | i[e]) >>> 0;
}
$e.readUint32LE = fu;
function Yo(i, e, t) {
  return e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0), e[t + 0] = i >>> 24, e[t + 1] = i >>> 16, e[t + 2] = i >>> 8, e[t + 3] = i >>> 0, e;
}
$e.writeUint32BE = Yo;
$e.writeInt32BE = Yo;
function Jo(i, e, t) {
  return e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0), e[t + 0] = i >>> 0, e[t + 1] = i >>> 8, e[t + 2] = i >>> 16, e[t + 3] = i >>> 24, e;
}
$e.writeUint32LE = Jo;
$e.writeInt32LE = Jo;
function Z_(i, e) {
  e === void 0 && (e = 0);
  var t = uu(i, e), s = uu(i, e + 4);
  return t * 4294967296 + s - (s >> 31) * 4294967296;
}
$e.readInt64BE = Z_;
function eb(i, e) {
  e === void 0 && (e = 0);
  var t = hu(i, e), s = hu(i, e + 4);
  return t * 4294967296 + s;
}
$e.readUint64BE = eb;
function tb(i, e) {
  e === void 0 && (e = 0);
  var t = lu(i, e), s = lu(i, e + 4);
  return s * 4294967296 + t - (t >> 31) * 4294967296;
}
$e.readInt64LE = tb;
function rb(i, e) {
  e === void 0 && (e = 0);
  var t = fu(i, e), s = fu(i, e + 4);
  return s * 4294967296 + t;
}
$e.readUint64LE = rb;
function Xd(i, e, t) {
  return e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0), Yo(i / 4294967296 >>> 0, e, t), Yo(i >>> 0, e, t + 4), e;
}
$e.writeUint64BE = Xd;
$e.writeInt64BE = Xd;
function Zd(i, e, t) {
  return e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0), Jo(i >>> 0, e, t), Jo(i / 4294967296 >>> 0, e, t + 4), e;
}
$e.writeUint64LE = Zd;
$e.writeInt64LE = Zd;
function ib(i, e, t) {
  if (t === void 0 && (t = 0), i % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (i / 8 > e.length - t)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var s = 0, o = 1, c = i / 8 + t - 1; c >= t; c--)
    s += e[c] * o, o *= 256;
  return s;
}
$e.readUintBE = ib;
function nb(i, e, t) {
  if (t === void 0 && (t = 0), i % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (i / 8 > e.length - t)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var s = 0, o = 1, c = t; c < t + i / 8; c++)
    s += e[c] * o, o *= 256;
  return s;
}
$e.readUintLE = nb;
function sb(i, e, t, s) {
  if (t === void 0 && (t = new Uint8Array(i / 8)), s === void 0 && (s = 0), i % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Yd.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var o = 1, c = i / 8 + s - 1; c >= s; c--)
    t[c] = e / o & 255, o *= 256;
  return t;
}
$e.writeUintBE = sb;
function ob(i, e, t, s) {
  if (t === void 0 && (t = new Uint8Array(i / 8)), s === void 0 && (s = 0), i % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Yd.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var o = 1, c = s; c < s + i / 8; c++)
    t[c] = e / o & 255, o *= 256;
  return t;
}
$e.writeUintLE = ob;
function ab(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat32(e);
}
$e.readFloat32BE = ab;
function cb(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat32(e, !0);
}
$e.readFloat32LE = cb;
function ub(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat64(e);
}
$e.readFloat64BE = ub;
function hb(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat64(e, !0);
}
$e.readFloat64LE = hb;
function lb(i, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(t, i), e;
}
$e.writeFloat32BE = lb;
function fb(i, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(t, i, !0), e;
}
$e.writeFloat32LE = fb;
function db(i, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(t, i), e;
}
$e.writeFloat64BE = db;
function pb(i, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(t, i, !0), e;
}
$e.writeFloat64LE = pb;
var Tr = {};
Object.defineProperty(Tr, "__esModule", { value: !0 });
function gb(i) {
  for (var e = 0; e < i.length; e++)
    i[e] = 0;
  return i;
}
Tr.wipe = gb;
Object.defineProperty(sa, "__esModule", { value: !0 });
var er = $e, du = Tr, yb = 20;
function vb(i, e, t) {
  for (var s = 1634760805, o = 857760878, c = 2036477234, d = 1797285236, f = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], y = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], g = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], m = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], D = t[19] << 24 | t[18] << 16 | t[17] << 8 | t[16], I = t[23] << 24 | t[22] << 16 | t[21] << 8 | t[20], T = t[27] << 24 | t[26] << 16 | t[25] << 8 | t[24], P = t[31] << 24 | t[30] << 16 | t[29] << 8 | t[28], F = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], B = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], ie = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], L = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], j = s, O = o, A = c, E = d, u = f, _ = y, W = g, G = m, se = D, ue = I, de = T, b = P, C = F, ee = B, Q = ie, k = L, V = 0; V < yb; V += 2)
    j = j + u | 0, C ^= j, C = C >>> 16 | C << 16, se = se + C | 0, u ^= se, u = u >>> 20 | u << 12, O = O + _ | 0, ee ^= O, ee = ee >>> 16 | ee << 16, ue = ue + ee | 0, _ ^= ue, _ = _ >>> 20 | _ << 12, A = A + W | 0, Q ^= A, Q = Q >>> 16 | Q << 16, de = de + Q | 0, W ^= de, W = W >>> 20 | W << 12, E = E + G | 0, k ^= E, k = k >>> 16 | k << 16, b = b + k | 0, G ^= b, G = G >>> 20 | G << 12, A = A + W | 0, Q ^= A, Q = Q >>> 24 | Q << 8, de = de + Q | 0, W ^= de, W = W >>> 25 | W << 7, E = E + G | 0, k ^= E, k = k >>> 24 | k << 8, b = b + k | 0, G ^= b, G = G >>> 25 | G << 7, O = O + _ | 0, ee ^= O, ee = ee >>> 24 | ee << 8, ue = ue + ee | 0, _ ^= ue, _ = _ >>> 25 | _ << 7, j = j + u | 0, C ^= j, C = C >>> 24 | C << 8, se = se + C | 0, u ^= se, u = u >>> 25 | u << 7, j = j + _ | 0, k ^= j, k = k >>> 16 | k << 16, de = de + k | 0, _ ^= de, _ = _ >>> 20 | _ << 12, O = O + W | 0, C ^= O, C = C >>> 16 | C << 16, b = b + C | 0, W ^= b, W = W >>> 20 | W << 12, A = A + G | 0, ee ^= A, ee = ee >>> 16 | ee << 16, se = se + ee | 0, G ^= se, G = G >>> 20 | G << 12, E = E + u | 0, Q ^= E, Q = Q >>> 16 | Q << 16, ue = ue + Q | 0, u ^= ue, u = u >>> 20 | u << 12, A = A + G | 0, ee ^= A, ee = ee >>> 24 | ee << 8, se = se + ee | 0, G ^= se, G = G >>> 25 | G << 7, E = E + u | 0, Q ^= E, Q = Q >>> 24 | Q << 8, ue = ue + Q | 0, u ^= ue, u = u >>> 25 | u << 7, O = O + W | 0, C ^= O, C = C >>> 24 | C << 8, b = b + C | 0, W ^= b, W = W >>> 25 | W << 7, j = j + _ | 0, k ^= j, k = k >>> 24 | k << 8, de = de + k | 0, _ ^= de, _ = _ >>> 25 | _ << 7;
  er.writeUint32LE(j + s | 0, i, 0), er.writeUint32LE(O + o | 0, i, 4), er.writeUint32LE(A + c | 0, i, 8), er.writeUint32LE(E + d | 0, i, 12), er.writeUint32LE(u + f | 0, i, 16), er.writeUint32LE(_ + y | 0, i, 20), er.writeUint32LE(W + g | 0, i, 24), er.writeUint32LE(G + m | 0, i, 28), er.writeUint32LE(se + D | 0, i, 32), er.writeUint32LE(ue + I | 0, i, 36), er.writeUint32LE(de + T | 0, i, 40), er.writeUint32LE(b + P | 0, i, 44), er.writeUint32LE(C + F | 0, i, 48), er.writeUint32LE(ee + B | 0, i, 52), er.writeUint32LE(Q + ie | 0, i, 56), er.writeUint32LE(k + L | 0, i, 60);
}
function ep(i, e, t, s, o) {
  if (o === void 0 && (o = 0), i.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (s.length < t.length)
    throw new Error("ChaCha: destination is shorter than source");
  var c, d;
  if (o === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    c = new Uint8Array(16), d = c.length - e.length, c.set(e, d);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    c = e, d = o;
  }
  for (var f = new Uint8Array(64), y = 0; y < t.length; y += 64) {
    vb(f, c, i);
    for (var g = y; g < y + 64 && g < t.length; g++)
      s[g] = t[g] ^ f[g - y];
    wb(c, 0, d);
  }
  return du.wipe(f), o === 0 && du.wipe(c), s;
}
sa.streamXOR = ep;
function mb(i, e, t, s) {
  return s === void 0 && (s = 0), du.wipe(t), ep(i, e, t, t, s);
}
sa.stream = mb;
function wb(i, e, t) {
  for (var s = 1; t--; )
    s = s + (i[e] & 255) | 0, i[e] = s & 255, s >>>= 8, e++;
  if (s > 0)
    throw new Error("ChaCha: counter overflow");
}
var tp = {}, zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
function _b(i, e, t) {
  return ~(i - 1) & e | i - 1 & t;
}
zi.select = _b;
function bb(i, e) {
  return (i | 0) - (e | 0) - 1 >>> 31 & 1;
}
zi.lessOrEqual = bb;
function rp(i, e) {
  if (i.length !== e.length)
    return 0;
  for (var t = 0, s = 0; s < i.length; s++)
    t |= i[s] ^ e[s];
  return 1 & t - 1 >>> 8;
}
zi.compare = rp;
function Eb(i, e) {
  return i.length === 0 || e.length === 0 ? !1 : rp(i, e) !== 0;
}
zi.equal = Eb;
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = zi, t = Tr;
  i.DIGEST_LENGTH = 16;
  var s = (
    /** @class */
    function() {
      function d(f) {
        this.digestLength = i.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var y = f[0] | f[1] << 8;
        this._r[0] = y & 8191;
        var g = f[2] | f[3] << 8;
        this._r[1] = (y >>> 13 | g << 3) & 8191;
        var m = f[4] | f[5] << 8;
        this._r[2] = (g >>> 10 | m << 6) & 7939;
        var D = f[6] | f[7] << 8;
        this._r[3] = (m >>> 7 | D << 9) & 8191;
        var I = f[8] | f[9] << 8;
        this._r[4] = (D >>> 4 | I << 12) & 255, this._r[5] = I >>> 1 & 8190;
        var T = f[10] | f[11] << 8;
        this._r[6] = (I >>> 14 | T << 2) & 8191;
        var P = f[12] | f[13] << 8;
        this._r[7] = (T >>> 11 | P << 5) & 8065;
        var F = f[14] | f[15] << 8;
        this._r[8] = (P >>> 8 | F << 8) & 8191, this._r[9] = F >>> 5 & 127, this._pad[0] = f[16] | f[17] << 8, this._pad[1] = f[18] | f[19] << 8, this._pad[2] = f[20] | f[21] << 8, this._pad[3] = f[22] | f[23] << 8, this._pad[4] = f[24] | f[25] << 8, this._pad[5] = f[26] | f[27] << 8, this._pad[6] = f[28] | f[29] << 8, this._pad[7] = f[30] | f[31] << 8;
      }
      return d.prototype._blocks = function(f, y, g) {
        for (var m = this._fin ? 0 : 2048, D = this._h[0], I = this._h[1], T = this._h[2], P = this._h[3], F = this._h[4], B = this._h[5], ie = this._h[6], L = this._h[7], j = this._h[8], O = this._h[9], A = this._r[0], E = this._r[1], u = this._r[2], _ = this._r[3], W = this._r[4], G = this._r[5], se = this._r[6], ue = this._r[7], de = this._r[8], b = this._r[9]; g >= 16; ) {
          var C = f[y + 0] | f[y + 1] << 8;
          D += C & 8191;
          var ee = f[y + 2] | f[y + 3] << 8;
          I += (C >>> 13 | ee << 3) & 8191;
          var Q = f[y + 4] | f[y + 5] << 8;
          T += (ee >>> 10 | Q << 6) & 8191;
          var k = f[y + 6] | f[y + 7] << 8;
          P += (Q >>> 7 | k << 9) & 8191;
          var V = f[y + 8] | f[y + 9] << 8;
          F += (k >>> 4 | V << 12) & 8191, B += V >>> 1 & 8191;
          var J = f[y + 10] | f[y + 11] << 8;
          ie += (V >>> 14 | J << 2) & 8191;
          var re = f[y + 12] | f[y + 13] << 8;
          L += (J >>> 11 | re << 5) & 8191;
          var _e = f[y + 14] | f[y + 15] << 8;
          j += (re >>> 8 | _e << 8) & 8191, O += _e >>> 5 | m;
          var oe = 0, be = oe;
          be += D * A, be += I * (5 * b), be += T * (5 * de), be += P * (5 * ue), be += F * (5 * se), oe = be >>> 13, be &= 8191, be += B * (5 * G), be += ie * (5 * W), be += L * (5 * _), be += j * (5 * u), be += O * (5 * E), oe += be >>> 13, be &= 8191;
          var le = oe;
          le += D * E, le += I * A, le += T * (5 * b), le += P * (5 * de), le += F * (5 * ue), oe = le >>> 13, le &= 8191, le += B * (5 * se), le += ie * (5 * G), le += L * (5 * W), le += j * (5 * _), le += O * (5 * u), oe += le >>> 13, le &= 8191;
          var me = oe;
          me += D * u, me += I * E, me += T * A, me += P * (5 * b), me += F * (5 * de), oe = me >>> 13, me &= 8191, me += B * (5 * ue), me += ie * (5 * se), me += L * (5 * G), me += j * (5 * W), me += O * (5 * _), oe += me >>> 13, me &= 8191;
          var H = oe;
          H += D * _, H += I * u, H += T * E, H += P * A, H += F * (5 * b), oe = H >>> 13, H &= 8191, H += B * (5 * de), H += ie * (5 * ue), H += L * (5 * se), H += j * (5 * G), H += O * (5 * W), oe += H >>> 13, H &= 8191;
          var z = oe;
          z += D * W, z += I * _, z += T * u, z += P * E, z += F * A, oe = z >>> 13, z &= 8191, z += B * (5 * b), z += ie * (5 * de), z += L * (5 * ue), z += j * (5 * se), z += O * (5 * G), oe += z >>> 13, z &= 8191;
          var U = oe;
          U += D * G, U += I * W, U += T * _, U += P * u, U += F * E, oe = U >>> 13, U &= 8191, U += B * A, U += ie * (5 * b), U += L * (5 * de), U += j * (5 * ue), U += O * (5 * se), oe += U >>> 13, U &= 8191;
          var l = oe;
          l += D * se, l += I * G, l += T * W, l += P * _, l += F * u, oe = l >>> 13, l &= 8191, l += B * E, l += ie * A, l += L * (5 * b), l += j * (5 * de), l += O * (5 * ue), oe += l >>> 13, l &= 8191;
          var R = oe;
          R += D * ue, R += I * se, R += T * G, R += P * W, R += F * _, oe = R >>> 13, R &= 8191, R += B * u, R += ie * E, R += L * A, R += j * (5 * b), R += O * (5 * de), oe += R >>> 13, R &= 8191;
          var ae = oe;
          ae += D * de, ae += I * ue, ae += T * se, ae += P * G, ae += F * W, oe = ae >>> 13, ae &= 8191, ae += B * _, ae += ie * u, ae += L * E, ae += j * A, ae += O * (5 * b), oe += ae >>> 13, ae &= 8191;
          var fe = oe;
          fe += D * b, fe += I * de, fe += T * ue, fe += P * se, fe += F * G, oe = fe >>> 13, fe &= 8191, fe += B * W, fe += ie * _, fe += L * u, fe += j * E, fe += O * A, oe += fe >>> 13, fe &= 8191, oe = (oe << 2) + oe | 0, oe = oe + be | 0, be = oe & 8191, oe = oe >>> 13, le += oe, D = be, I = le, T = me, P = H, F = z, B = U, ie = l, L = R, j = ae, O = fe, y += 16, g -= 16;
        }
        this._h[0] = D, this._h[1] = I, this._h[2] = T, this._h[3] = P, this._h[4] = F, this._h[5] = B, this._h[6] = ie, this._h[7] = L, this._h[8] = j, this._h[9] = O;
      }, d.prototype.finish = function(f, y) {
        y === void 0 && (y = 0);
        var g = new Uint16Array(10), m, D, I, T;
        if (this._leftover) {
          for (T = this._leftover, this._buffer[T++] = 1; T < 16; T++)
            this._buffer[T] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (m = this._h[1] >>> 13, this._h[1] &= 8191, T = 2; T < 10; T++)
          this._h[T] += m, m = this._h[T] >>> 13, this._h[T] &= 8191;
        for (this._h[0] += m * 5, m = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += m, m = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += m, g[0] = this._h[0] + 5, m = g[0] >>> 13, g[0] &= 8191, T = 1; T < 10; T++)
          g[T] = this._h[T] + m, m = g[T] >>> 13, g[T] &= 8191;
        for (g[9] -= 8192, D = (m ^ 1) - 1, T = 0; T < 10; T++)
          g[T] &= D;
        for (D = ~D, T = 0; T < 10; T++)
          this._h[T] = this._h[T] & D | g[T];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, I = this._h[0] + this._pad[0], this._h[0] = I & 65535, T = 1; T < 8; T++)
          I = (this._h[T] + this._pad[T] | 0) + (I >>> 16) | 0, this._h[T] = I & 65535;
        return f[y + 0] = this._h[0] >>> 0, f[y + 1] = this._h[0] >>> 8, f[y + 2] = this._h[1] >>> 0, f[y + 3] = this._h[1] >>> 8, f[y + 4] = this._h[2] >>> 0, f[y + 5] = this._h[2] >>> 8, f[y + 6] = this._h[3] >>> 0, f[y + 7] = this._h[3] >>> 8, f[y + 8] = this._h[4] >>> 0, f[y + 9] = this._h[4] >>> 8, f[y + 10] = this._h[5] >>> 0, f[y + 11] = this._h[5] >>> 8, f[y + 12] = this._h[6] >>> 0, f[y + 13] = this._h[6] >>> 8, f[y + 14] = this._h[7] >>> 0, f[y + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, d.prototype.update = function(f) {
        var y = 0, g = f.length, m;
        if (this._leftover) {
          m = 16 - this._leftover, m > g && (m = g);
          for (var D = 0; D < m; D++)
            this._buffer[this._leftover + D] = f[y + D];
          if (g -= m, y += m, this._leftover += m, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (g >= 16 && (m = g - g % 16, this._blocks(f, y, m), y += m, g -= m), g) {
          for (var D = 0; D < g; D++)
            this._buffer[this._leftover + D] = f[y + D];
          this._leftover += g;
        }
        return this;
      }, d.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var f = new Uint8Array(16);
        return this.finish(f), f;
      }, d.prototype.clean = function() {
        return t.wipe(this._buffer), t.wipe(this._r), t.wipe(this._h), t.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, d;
    }()
  );
  i.Poly1305 = s;
  function o(d, f) {
    var y = new s(d);
    y.update(f);
    var g = y.digest();
    return y.clean(), g;
  }
  i.oneTimeAuth = o;
  function c(d, f) {
    return d.length !== i.DIGEST_LENGTH || f.length !== i.DIGEST_LENGTH ? !1 : e.equal(d, f);
  }
  i.equal = c;
})(tp);
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = sa, t = tp, s = Tr, o = $e, c = zi;
  i.KEY_LENGTH = 32, i.NONCE_LENGTH = 12, i.TAG_LENGTH = 16;
  var d = new Uint8Array(16), f = (
    /** @class */
    function() {
      function y(g) {
        if (this.nonceLength = i.NONCE_LENGTH, this.tagLength = i.TAG_LENGTH, g.length !== i.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(g);
      }
      return y.prototype.seal = function(g, m, D, I) {
        if (g.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var T = new Uint8Array(16);
        T.set(g, T.length - g.length);
        var P = new Uint8Array(32);
        e.stream(this._key, T, P, 4);
        var F = m.length + this.tagLength, B;
        if (I) {
          if (I.length !== F)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          B = I;
        } else
          B = new Uint8Array(F);
        return e.streamXOR(this._key, T, m, B, 4), this._authenticate(B.subarray(B.length - this.tagLength, B.length), P, B.subarray(0, B.length - this.tagLength), D), s.wipe(T), B;
      }, y.prototype.open = function(g, m, D, I) {
        if (g.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (m.length < this.tagLength)
          return null;
        var T = new Uint8Array(16);
        T.set(g, T.length - g.length);
        var P = new Uint8Array(32);
        e.stream(this._key, T, P, 4);
        var F = new Uint8Array(this.tagLength);
        if (this._authenticate(F, P, m.subarray(0, m.length - this.tagLength), D), !c.equal(F, m.subarray(m.length - this.tagLength, m.length)))
          return null;
        var B = m.length - this.tagLength, ie;
        if (I) {
          if (I.length !== B)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          ie = I;
        } else
          ie = new Uint8Array(B);
        return e.streamXOR(this._key, T, m.subarray(0, m.length - this.tagLength), ie, 4), s.wipe(T), ie;
      }, y.prototype.clean = function() {
        return s.wipe(this._key), this;
      }, y.prototype._authenticate = function(g, m, D, I) {
        var T = new t.Poly1305(m);
        I && (T.update(I), I.length % 16 > 0 && T.update(d.subarray(I.length % 16))), T.update(D), D.length % 16 > 0 && T.update(d.subarray(D.length % 16));
        var P = new Uint8Array(8);
        I && o.writeUint64LE(I.length, P), T.update(P), o.writeUint64LE(D.length, P), T.update(P);
        for (var F = T.digest(), B = 0; B < F.length; B++)
          g[B] = F[B];
        T.clean(), s.wipe(F), s.wipe(P);
      }, y;
    }()
  );
  i.ChaCha20Poly1305 = f;
})(Nu);
var ip = {}, Os = {}, Lu = {};
Object.defineProperty(Lu, "__esModule", { value: !0 });
function Db(i) {
  return typeof i.saveState < "u" && typeof i.restoreState < "u" && typeof i.cleanSavedState < "u";
}
Lu.isSerializableHash = Db;
Object.defineProperty(Os, "__esModule", { value: !0 });
var ri = Lu, Sb = zi, Ib = Tr, np = (
  /** @class */
  function() {
    function i(e, t) {
      this._finished = !1, this._inner = new e(), this._outer = new e(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var s = new Uint8Array(this.blockSize);
      t.length > this.blockSize ? this._inner.update(t).finish(s).clean() : s.set(t);
      for (var o = 0; o < s.length; o++)
        s[o] ^= 54;
      this._inner.update(s);
      for (var o = 0; o < s.length; o++)
        s[o] ^= 106;
      this._outer.update(s), ri.isSerializableHash(this._inner) && ri.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Ib.wipe(s);
    }
    return i.prototype.reset = function() {
      if (!ri.isSerializableHash(this._inner) || !ri.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, i.prototype.clean = function() {
      ri.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), ri.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, i.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, i.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, i.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, i.prototype.saveState = function() {
      if (!ri.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, i.prototype.restoreState = function(e) {
      if (!ri.isSerializableHash(this._inner) || !ri.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, i.prototype.cleanSavedState = function(e) {
      if (!ri.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, i;
  }()
);
Os.HMAC = np;
function xb(i, e, t) {
  var s = new np(i, e);
  s.update(t);
  var o = s.digest();
  return s.clean(), o;
}
Os.hmac = xb;
Os.equal = Sb.equal;
Object.defineProperty(ip, "__esModule", { value: !0 });
var tf = Os, rf = Tr, Ob = (
  /** @class */
  function() {
    function i(e, t, s, o) {
      s === void 0 && (s = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = o;
      var c = tf.hmac(this._hash, s, t);
      this._hmac = new tf.HMAC(e, c), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return i.prototype._fillBuffer = function() {
      this._counter[0]++;
      var e = this._counter[0];
      if (e === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, i.prototype.expand = function(e) {
      for (var t = new Uint8Array(e), s = 0; s < t.length; s++)
        this._bufpos === this._buffer.length && this._fillBuffer(), t[s] = this._buffer[this._bufpos++];
      return t;
    }, i.prototype.clean = function() {
      this._hmac.clean(), rf.wipe(this._buffer), rf.wipe(this._counter), this._bufpos = 0;
    }, i;
  }()
), Pb = ip.HKDF = Ob, Fn = {}, oa = {}, aa = {};
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.BrowserRandomSource = void 0;
const nf = 65536;
class Cb {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const t = new Uint8Array(e);
    for (let s = 0; s < t.length; s += nf)
      this._crypto.getRandomValues(t.subarray(s, s + Math.min(t.length - s, nf)));
    return t;
  }
}
aa.BrowserRandomSource = Cb;
function Ab(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ca = {};
Object.defineProperty(ca, "__esModule", { value: !0 });
ca.NodeRandomSource = void 0;
const Tb = Tr;
class Rb {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Ab < "u") {
      const e = H_;
      e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let t = this._crypto.randomBytes(e);
    if (t.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const s = new Uint8Array(e);
    for (let o = 0; o < s.length; o++)
      s[o] = t[o];
    return (0, Tb.wipe)(t), s;
  }
}
ca.NodeRandomSource = Rb;
Object.defineProperty(oa, "__esModule", { value: !0 });
oa.SystemRandomSource = void 0;
const Nb = aa, Lb = ca;
class Ub {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Nb.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Lb.NodeRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Node";
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
}
oa.SystemRandomSource = Ub;
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 }), i.randomStringForEntropy = i.randomString = i.randomUint32 = i.randomBytes = i.defaultRandomSource = void 0;
  const e = oa, t = $e, s = Tr;
  i.defaultRandomSource = new e.SystemRandomSource();
  function o(g, m = i.defaultRandomSource) {
    return m.randomBytes(g);
  }
  i.randomBytes = o;
  function c(g = i.defaultRandomSource) {
    const m = o(4, g), D = (0, t.readUint32LE)(m);
    return (0, s.wipe)(m), D;
  }
  i.randomUint32 = c;
  const d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function f(g, m = d, D = i.defaultRandomSource) {
    if (m.length < 2)
      throw new Error("randomString charset is too short");
    if (m.length > 256)
      throw new Error("randomString charset is too long");
    let I = "";
    const T = m.length, P = 256 - 256 % T;
    for (; g > 0; ) {
      const F = o(Math.ceil(g * 256 / P), D);
      for (let B = 0; B < F.length && g > 0; B++) {
        const ie = F[B];
        ie < P && (I += m.charAt(ie % T), g--);
      }
      (0, s.wipe)(F);
    }
    return I;
  }
  i.randomString = f;
  function y(g, m = d, D = i.defaultRandomSource) {
    const I = Math.ceil(g / (Math.log(m.length) / Math.LN2));
    return f(I, m, D);
  }
  i.randomStringForEntropy = y;
})(Fn);
var ua = {};
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = $e, t = Tr;
  i.DIGEST_LENGTH = 32, i.BLOCK_SIZE = 64;
  var s = (
    /** @class */
    function() {
      function f() {
        this.digestLength = i.DIGEST_LENGTH, this.blockSize = i.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return f.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, f.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, f.prototype.clean = function() {
        t.wipe(this._buffer), t.wipe(this._temp), this.reset();
      }, f.prototype.update = function(y, g) {
        if (g === void 0 && (g = y.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var m = 0;
        if (this._bytesHashed += g, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && g > 0; )
            this._buffer[this._bufferLength++] = y[m++], g--;
          this._bufferLength === this.blockSize && (c(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (g >= this.blockSize && (m = c(this._temp, this._state, y, m, g), g %= this.blockSize); g > 0; )
          this._buffer[this._bufferLength++] = y[m++], g--;
        return this;
      }, f.prototype.finish = function(y) {
        if (!this._finished) {
          var g = this._bytesHashed, m = this._bufferLength, D = g / 536870912 | 0, I = g << 3, T = g % 64 < 56 ? 64 : 128;
          this._buffer[m] = 128;
          for (var P = m + 1; P < T - 8; P++)
            this._buffer[P] = 0;
          e.writeUint32BE(D, this._buffer, T - 8), e.writeUint32BE(I, this._buffer, T - 4), c(this._temp, this._state, this._buffer, 0, T), this._finished = !0;
        }
        for (var P = 0; P < this.digestLength / 4; P++)
          e.writeUint32BE(this._state[P], y, P * 4);
        return this;
      }, f.prototype.digest = function() {
        var y = new Uint8Array(this.digestLength);
        return this.finish(y), y;
      }, f.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, f.prototype.restoreState = function(y) {
        return this._state.set(y.state), this._bufferLength = y.bufferLength, y.buffer && this._buffer.set(y.buffer), this._bytesHashed = y.bytesHashed, this._finished = !1, this;
      }, f.prototype.cleanSavedState = function(y) {
        t.wipe(y.state), y.buffer && t.wipe(y.buffer), y.bufferLength = 0, y.bytesHashed = 0;
      }, f;
    }()
  );
  i.SHA256 = s;
  var o = new Int32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  function c(f, y, g, m, D) {
    for (; D >= 64; ) {
      for (var I = y[0], T = y[1], P = y[2], F = y[3], B = y[4], ie = y[5], L = y[6], j = y[7], O = 0; O < 16; O++) {
        var A = m + O * 4;
        f[O] = e.readUint32BE(g, A);
      }
      for (var O = 16; O < 64; O++) {
        var E = f[O - 2], u = (E >>> 17 | E << 15) ^ (E >>> 19 | E << 13) ^ E >>> 10;
        E = f[O - 15];
        var _ = (E >>> 7 | E << 25) ^ (E >>> 18 | E << 14) ^ E >>> 3;
        f[O] = (u + f[O - 7] | 0) + (_ + f[O - 16] | 0);
      }
      for (var O = 0; O < 64; O++) {
        var u = (((B >>> 6 | B << 26) ^ (B >>> 11 | B << 21) ^ (B >>> 25 | B << 7)) + (B & ie ^ ~B & L) | 0) + (j + (o[O] + f[O] | 0) | 0) | 0, _ = ((I >>> 2 | I << 30) ^ (I >>> 13 | I << 19) ^ (I >>> 22 | I << 10)) + (I & T ^ I & P ^ T & P) | 0;
        j = L, L = ie, ie = B, B = F + u | 0, F = P, P = T, T = I, I = u + _ | 0;
      }
      y[0] += I, y[1] += T, y[2] += P, y[3] += F, y[4] += B, y[5] += ie, y[6] += L, y[7] += j, m += 64, D -= 64;
    }
    return m;
  }
  function d(f) {
    var y = new s();
    y.update(f);
    var g = y.digest();
    return y.clean(), g;
  }
  i.hash = d;
})(ua);
var Uu = {};
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 }), i.sharedKey = i.generateKeyPair = i.generateKeyPairFromSeed = i.scalarMultBase = i.scalarMult = i.SHARED_KEY_LENGTH = i.SECRET_KEY_LENGTH = i.PUBLIC_KEY_LENGTH = void 0;
  const e = Fn, t = Tr;
  i.PUBLIC_KEY_LENGTH = 32, i.SECRET_KEY_LENGTH = 32, i.SHARED_KEY_LENGTH = 32;
  function s(O) {
    const A = new Float64Array(16);
    if (O)
      for (let E = 0; E < O.length; E++)
        A[E] = O[E];
    return A;
  }
  const o = new Uint8Array(32);
  o[0] = 9;
  const c = s([56129, 1]);
  function d(O) {
    let A = 1;
    for (let E = 0; E < 16; E++) {
      let u = O[E] + A + 65535;
      A = Math.floor(u / 65536), O[E] = u - A * 65536;
    }
    O[0] += A - 1 + 37 * (A - 1);
  }
  function f(O, A, E) {
    const u = ~(E - 1);
    for (let _ = 0; _ < 16; _++) {
      const W = u & (O[_] ^ A[_]);
      O[_] ^= W, A[_] ^= W;
    }
  }
  function y(O, A) {
    const E = s(), u = s();
    for (let _ = 0; _ < 16; _++)
      u[_] = A[_];
    d(u), d(u), d(u);
    for (let _ = 0; _ < 2; _++) {
      E[0] = u[0] - 65517;
      for (let G = 1; G < 15; G++)
        E[G] = u[G] - 65535 - (E[G - 1] >> 16 & 1), E[G - 1] &= 65535;
      E[15] = u[15] - 32767 - (E[14] >> 16 & 1);
      const W = E[15] >> 16 & 1;
      E[14] &= 65535, f(u, E, 1 - W);
    }
    for (let _ = 0; _ < 16; _++)
      O[2 * _] = u[_] & 255, O[2 * _ + 1] = u[_] >> 8;
  }
  function g(O, A) {
    for (let E = 0; E < 16; E++)
      O[E] = A[2 * E] + (A[2 * E + 1] << 8);
    O[15] &= 32767;
  }
  function m(O, A, E) {
    for (let u = 0; u < 16; u++)
      O[u] = A[u] + E[u];
  }
  function D(O, A, E) {
    for (let u = 0; u < 16; u++)
      O[u] = A[u] - E[u];
  }
  function I(O, A, E) {
    let u, _, W = 0, G = 0, se = 0, ue = 0, de = 0, b = 0, C = 0, ee = 0, Q = 0, k = 0, V = 0, J = 0, re = 0, _e = 0, oe = 0, be = 0, le = 0, me = 0, H = 0, z = 0, U = 0, l = 0, R = 0, ae = 0, fe = 0, Ie = 0, He = 0, ke = 0, Me = 0, gt = 0, yt = 0, qe = E[0], xe = E[1], Ne = E[2], Le = E[3], ze = E[4], Pe = E[5], Ue = E[6], Se = E[7], Ce = E[8], Be = E[9], Oe = E[10], Ve = E[11], Ge = E[12], et = E[13], tt = E[14], Qe = E[15];
    u = A[0], W += u * qe, G += u * xe, se += u * Ne, ue += u * Le, de += u * ze, b += u * Pe, C += u * Ue, ee += u * Se, Q += u * Ce, k += u * Be, V += u * Oe, J += u * Ve, re += u * Ge, _e += u * et, oe += u * tt, be += u * Qe, u = A[1], G += u * qe, se += u * xe, ue += u * Ne, de += u * Le, b += u * ze, C += u * Pe, ee += u * Ue, Q += u * Se, k += u * Ce, V += u * Be, J += u * Oe, re += u * Ve, _e += u * Ge, oe += u * et, be += u * tt, le += u * Qe, u = A[2], se += u * qe, ue += u * xe, de += u * Ne, b += u * Le, C += u * ze, ee += u * Pe, Q += u * Ue, k += u * Se, V += u * Ce, J += u * Be, re += u * Oe, _e += u * Ve, oe += u * Ge, be += u * et, le += u * tt, me += u * Qe, u = A[3], ue += u * qe, de += u * xe, b += u * Ne, C += u * Le, ee += u * ze, Q += u * Pe, k += u * Ue, V += u * Se, J += u * Ce, re += u * Be, _e += u * Oe, oe += u * Ve, be += u * Ge, le += u * et, me += u * tt, H += u * Qe, u = A[4], de += u * qe, b += u * xe, C += u * Ne, ee += u * Le, Q += u * ze, k += u * Pe, V += u * Ue, J += u * Se, re += u * Ce, _e += u * Be, oe += u * Oe, be += u * Ve, le += u * Ge, me += u * et, H += u * tt, z += u * Qe, u = A[5], b += u * qe, C += u * xe, ee += u * Ne, Q += u * Le, k += u * ze, V += u * Pe, J += u * Ue, re += u * Se, _e += u * Ce, oe += u * Be, be += u * Oe, le += u * Ve, me += u * Ge, H += u * et, z += u * tt, U += u * Qe, u = A[6], C += u * qe, ee += u * xe, Q += u * Ne, k += u * Le, V += u * ze, J += u * Pe, re += u * Ue, _e += u * Se, oe += u * Ce, be += u * Be, le += u * Oe, me += u * Ve, H += u * Ge, z += u * et, U += u * tt, l += u * Qe, u = A[7], ee += u * qe, Q += u * xe, k += u * Ne, V += u * Le, J += u * ze, re += u * Pe, _e += u * Ue, oe += u * Se, be += u * Ce, le += u * Be, me += u * Oe, H += u * Ve, z += u * Ge, U += u * et, l += u * tt, R += u * Qe, u = A[8], Q += u * qe, k += u * xe, V += u * Ne, J += u * Le, re += u * ze, _e += u * Pe, oe += u * Ue, be += u * Se, le += u * Ce, me += u * Be, H += u * Oe, z += u * Ve, U += u * Ge, l += u * et, R += u * tt, ae += u * Qe, u = A[9], k += u * qe, V += u * xe, J += u * Ne, re += u * Le, _e += u * ze, oe += u * Pe, be += u * Ue, le += u * Se, me += u * Ce, H += u * Be, z += u * Oe, U += u * Ve, l += u * Ge, R += u * et, ae += u * tt, fe += u * Qe, u = A[10], V += u * qe, J += u * xe, re += u * Ne, _e += u * Le, oe += u * ze, be += u * Pe, le += u * Ue, me += u * Se, H += u * Ce, z += u * Be, U += u * Oe, l += u * Ve, R += u * Ge, ae += u * et, fe += u * tt, Ie += u * Qe, u = A[11], J += u * qe, re += u * xe, _e += u * Ne, oe += u * Le, be += u * ze, le += u * Pe, me += u * Ue, H += u * Se, z += u * Ce, U += u * Be, l += u * Oe, R += u * Ve, ae += u * Ge, fe += u * et, Ie += u * tt, He += u * Qe, u = A[12], re += u * qe, _e += u * xe, oe += u * Ne, be += u * Le, le += u * ze, me += u * Pe, H += u * Ue, z += u * Se, U += u * Ce, l += u * Be, R += u * Oe, ae += u * Ve, fe += u * Ge, Ie += u * et, He += u * tt, ke += u * Qe, u = A[13], _e += u * qe, oe += u * xe, be += u * Ne, le += u * Le, me += u * ze, H += u * Pe, z += u * Ue, U += u * Se, l += u * Ce, R += u * Be, ae += u * Oe, fe += u * Ve, Ie += u * Ge, He += u * et, ke += u * tt, Me += u * Qe, u = A[14], oe += u * qe, be += u * xe, le += u * Ne, me += u * Le, H += u * ze, z += u * Pe, U += u * Ue, l += u * Se, R += u * Ce, ae += u * Be, fe += u * Oe, Ie += u * Ve, He += u * Ge, ke += u * et, Me += u * tt, gt += u * Qe, u = A[15], be += u * qe, le += u * xe, me += u * Ne, H += u * Le, z += u * ze, U += u * Pe, l += u * Ue, R += u * Se, ae += u * Ce, fe += u * Be, Ie += u * Oe, He += u * Ve, ke += u * Ge, Me += u * et, gt += u * tt, yt += u * Qe, W += 38 * le, G += 38 * me, se += 38 * H, ue += 38 * z, de += 38 * U, b += 38 * l, C += 38 * R, ee += 38 * ae, Q += 38 * fe, k += 38 * Ie, V += 38 * He, J += 38 * ke, re += 38 * Me, _e += 38 * gt, oe += 38 * yt, _ = 1, u = W + _ + 65535, _ = Math.floor(u / 65536), W = u - _ * 65536, u = G + _ + 65535, _ = Math.floor(u / 65536), G = u - _ * 65536, u = se + _ + 65535, _ = Math.floor(u / 65536), se = u - _ * 65536, u = ue + _ + 65535, _ = Math.floor(u / 65536), ue = u - _ * 65536, u = de + _ + 65535, _ = Math.floor(u / 65536), de = u - _ * 65536, u = b + _ + 65535, _ = Math.floor(u / 65536), b = u - _ * 65536, u = C + _ + 65535, _ = Math.floor(u / 65536), C = u - _ * 65536, u = ee + _ + 65535, _ = Math.floor(u / 65536), ee = u - _ * 65536, u = Q + _ + 65535, _ = Math.floor(u / 65536), Q = u - _ * 65536, u = k + _ + 65535, _ = Math.floor(u / 65536), k = u - _ * 65536, u = V + _ + 65535, _ = Math.floor(u / 65536), V = u - _ * 65536, u = J + _ + 65535, _ = Math.floor(u / 65536), J = u - _ * 65536, u = re + _ + 65535, _ = Math.floor(u / 65536), re = u - _ * 65536, u = _e + _ + 65535, _ = Math.floor(u / 65536), _e = u - _ * 65536, u = oe + _ + 65535, _ = Math.floor(u / 65536), oe = u - _ * 65536, u = be + _ + 65535, _ = Math.floor(u / 65536), be = u - _ * 65536, W += _ - 1 + 37 * (_ - 1), _ = 1, u = W + _ + 65535, _ = Math.floor(u / 65536), W = u - _ * 65536, u = G + _ + 65535, _ = Math.floor(u / 65536), G = u - _ * 65536, u = se + _ + 65535, _ = Math.floor(u / 65536), se = u - _ * 65536, u = ue + _ + 65535, _ = Math.floor(u / 65536), ue = u - _ * 65536, u = de + _ + 65535, _ = Math.floor(u / 65536), de = u - _ * 65536, u = b + _ + 65535, _ = Math.floor(u / 65536), b = u - _ * 65536, u = C + _ + 65535, _ = Math.floor(u / 65536), C = u - _ * 65536, u = ee + _ + 65535, _ = Math.floor(u / 65536), ee = u - _ * 65536, u = Q + _ + 65535, _ = Math.floor(u / 65536), Q = u - _ * 65536, u = k + _ + 65535, _ = Math.floor(u / 65536), k = u - _ * 65536, u = V + _ + 65535, _ = Math.floor(u / 65536), V = u - _ * 65536, u = J + _ + 65535, _ = Math.floor(u / 65536), J = u - _ * 65536, u = re + _ + 65535, _ = Math.floor(u / 65536), re = u - _ * 65536, u = _e + _ + 65535, _ = Math.floor(u / 65536), _e = u - _ * 65536, u = oe + _ + 65535, _ = Math.floor(u / 65536), oe = u - _ * 65536, u = be + _ + 65535, _ = Math.floor(u / 65536), be = u - _ * 65536, W += _ - 1 + 37 * (_ - 1), O[0] = W, O[1] = G, O[2] = se, O[3] = ue, O[4] = de, O[5] = b, O[6] = C, O[7] = ee, O[8] = Q, O[9] = k, O[10] = V, O[11] = J, O[12] = re, O[13] = _e, O[14] = oe, O[15] = be;
  }
  function T(O, A) {
    I(O, A, A);
  }
  function P(O, A) {
    const E = s();
    for (let u = 0; u < 16; u++)
      E[u] = A[u];
    for (let u = 253; u >= 0; u--)
      T(E, E), u !== 2 && u !== 4 && I(E, E, A);
    for (let u = 0; u < 16; u++)
      O[u] = E[u];
  }
  function F(O, A) {
    const E = new Uint8Array(32), u = new Float64Array(80), _ = s(), W = s(), G = s(), se = s(), ue = s(), de = s();
    for (let Q = 0; Q < 31; Q++)
      E[Q] = O[Q];
    E[31] = O[31] & 127 | 64, E[0] &= 248, g(u, A);
    for (let Q = 0; Q < 16; Q++)
      W[Q] = u[Q];
    _[0] = se[0] = 1;
    for (let Q = 254; Q >= 0; --Q) {
      const k = E[Q >>> 3] >>> (Q & 7) & 1;
      f(_, W, k), f(G, se, k), m(ue, _, G), D(_, _, G), m(G, W, se), D(W, W, se), T(se, ue), T(de, _), I(_, G, _), I(G, W, ue), m(ue, _, G), D(_, _, G), T(W, _), D(G, se, de), I(_, G, c), m(_, _, se), I(G, G, _), I(_, se, de), I(se, W, u), T(W, ue), f(_, W, k), f(G, se, k);
    }
    for (let Q = 0; Q < 16; Q++)
      u[Q + 16] = _[Q], u[Q + 32] = G[Q], u[Q + 48] = W[Q], u[Q + 64] = se[Q];
    const b = u.subarray(32), C = u.subarray(16);
    P(b, b), I(C, C, b);
    const ee = new Uint8Array(32);
    return y(ee, C), ee;
  }
  i.scalarMult = F;
  function B(O) {
    return F(O, o);
  }
  i.scalarMultBase = B;
  function ie(O) {
    if (O.length !== i.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${i.SECRET_KEY_LENGTH} bytes`);
    const A = new Uint8Array(O);
    return {
      publicKey: B(A),
      secretKey: A
    };
  }
  i.generateKeyPairFromSeed = ie;
  function L(O) {
    const A = (0, e.randomBytes)(32, O), E = ie(A);
    return (0, t.wipe)(A), E;
  }
  i.generateKeyPair = L;
  function j(O, A, E = !1) {
    if (O.length !== i.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (A.length !== i.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const u = F(O, A);
    if (E) {
      let _ = 0;
      for (let W = 0; W < u.length; W++)
        _ |= u[W];
      if (_ === 0)
        throw new Error("X25519: invalid shared key");
    }
    return u;
  }
  i.sharedKey = j;
})(Uu);
function $u(i) {
  return globalThis.Buffer != null ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : i;
}
function sp(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? $u(globalThis.Buffer.allocUnsafe(i)) : new Uint8Array(i);
}
function pu(i, e) {
  e || (e = i.reduce((o, c) => o + c.length, 0));
  const t = sp(e);
  let s = 0;
  for (const o of i)
    t.set(o, s), s += o.length;
  return $u(t);
}
function $b(i, e) {
  if (i.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++)
    t[s] = 255;
  for (var o = 0; o < i.length; o++) {
    var c = i.charAt(o), d = c.charCodeAt(0);
    if (t[d] !== 255)
      throw new TypeError(c + " is ambiguous");
    t[d] = o;
  }
  var f = i.length, y = i.charAt(0), g = Math.log(f) / Math.log(256), m = Math.log(256) / Math.log(f);
  function D(P) {
    if (P instanceof Uint8Array || (ArrayBuffer.isView(P) ? P = new Uint8Array(P.buffer, P.byteOffset, P.byteLength) : Array.isArray(P) && (P = Uint8Array.from(P))), !(P instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (P.length === 0)
      return "";
    for (var F = 0, B = 0, ie = 0, L = P.length; ie !== L && P[ie] === 0; )
      ie++, F++;
    for (var j = (L - ie) * m + 1 >>> 0, O = new Uint8Array(j); ie !== L; ) {
      for (var A = P[ie], E = 0, u = j - 1; (A !== 0 || E < B) && u !== -1; u--, E++)
        A += 256 * O[u] >>> 0, O[u] = A % f >>> 0, A = A / f >>> 0;
      if (A !== 0)
        throw new Error("Non-zero carry");
      B = E, ie++;
    }
    for (var _ = j - B; _ !== j && O[_] === 0; )
      _++;
    for (var W = y.repeat(F); _ < j; ++_)
      W += i.charAt(O[_]);
    return W;
  }
  function I(P) {
    if (typeof P != "string")
      throw new TypeError("Expected String");
    if (P.length === 0)
      return new Uint8Array();
    var F = 0;
    if (P[F] !== " ") {
      for (var B = 0, ie = 0; P[F] === y; )
        B++, F++;
      for (var L = (P.length - F) * g + 1 >>> 0, j = new Uint8Array(L); P[F]; ) {
        var O = t[P.charCodeAt(F)];
        if (O === 255)
          return;
        for (var A = 0, E = L - 1; (O !== 0 || A < ie) && E !== -1; E--, A++)
          O += f * j[E] >>> 0, j[E] = O % 256 >>> 0, O = O / 256 >>> 0;
        if (O !== 0)
          throw new Error("Non-zero carry");
        ie = A, F++;
      }
      if (P[F] !== " ") {
        for (var u = L - ie; u !== L && j[u] === 0; )
          u++;
        for (var _ = new Uint8Array(B + (L - u)), W = B; u !== L; )
          _[W++] = j[u++];
        return _;
      }
    }
  }
  function T(P) {
    var F = I(P);
    if (F)
      return F;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: D,
    decodeUnsafe: I,
    decode: T
  };
}
var Mb = $b, jb = Mb;
const qb = (i) => {
  if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
    return i;
  if (i instanceof ArrayBuffer)
    return new Uint8Array(i);
  if (ArrayBuffer.isView(i))
    return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
  throw new Error("Unknown type, must be binary type");
}, zb = (i) => new TextEncoder().encode(i), Fb = (i) => new TextDecoder().decode(i);
class Hb {
  constructor(e, t, s) {
    this.name = e, this.prefix = t, this.baseEncode = s;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Bb {
  constructor(e, t, s) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = s;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return op(this, e);
  }
}
class Kb {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return op(this, e);
  }
  decode(e) {
    const t = e[0], s = this.decoders[t];
    if (s)
      return s.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const op = (i, e) => new Kb({
  ...i.decoders || { [i.prefix]: i },
  ...e.decoders || { [e.prefix]: e }
});
class kb {
  constructor(e, t, s, o) {
    this.name = e, this.prefix = t, this.baseEncode = s, this.baseDecode = o, this.encoder = new Hb(e, t, s), this.decoder = new Bb(e, t, o);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const ha = ({ name: i, prefix: e, encode: t, decode: s }) => new kb(i, e, t, s), Ps = ({ prefix: i, name: e, alphabet: t }) => {
  const { encode: s, decode: o } = jb(t, e);
  return ha({
    prefix: i,
    name: e,
    encode: s,
    decode: (c) => qb(o(c))
  });
}, Vb = (i, e, t, s) => {
  const o = {};
  for (let m = 0; m < e.length; ++m)
    o[e[m]] = m;
  let c = i.length;
  for (; i[c - 1] === "="; )
    --c;
  const d = new Uint8Array(c * t / 8 | 0);
  let f = 0, y = 0, g = 0;
  for (let m = 0; m < c; ++m) {
    const D = o[i[m]];
    if (D === void 0)
      throw new SyntaxError(`Non-${s} character`);
    y = y << t | D, f += t, f >= 8 && (f -= 8, d[g++] = 255 & y >> f);
  }
  if (f >= t || 255 & y << 8 - f)
    throw new SyntaxError("Unexpected end of data");
  return d;
}, Wb = (i, e, t) => {
  const s = e[e.length - 1] === "=", o = (1 << t) - 1;
  let c = "", d = 0, f = 0;
  for (let y = 0; y < i.length; ++y)
    for (f = f << 8 | i[y], d += 8; d > t; )
      d -= t, c += e[o & f >> d];
  if (d && (c += e[o & f << t - d]), s)
    for (; c.length * t & 7; )
      c += "=";
  return c;
}, Jt = ({ name: i, prefix: e, bitsPerChar: t, alphabet: s }) => ha({
  prefix: e,
  name: i,
  encode(o) {
    return Wb(o, s, t);
  },
  decode(o) {
    return Vb(o, s, t, i);
  }
}), Gb = ha({
  prefix: "\0",
  name: "identity",
  encode: (i) => Fb(i),
  decode: (i) => zb(i)
}), Yb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Gb
}, Symbol.toStringTag, { value: "Module" })), Jb = Jt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Qb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Jb
}, Symbol.toStringTag, { value: "Module" })), Xb = Jt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Zb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Xb
}, Symbol.toStringTag, { value: "Module" })), e1 = Ps({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), t1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: e1
}, Symbol.toStringTag, { value: "Module" })), r1 = Jt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), i1 = Jt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), n1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: r1,
  base16upper: i1
}, Symbol.toStringTag, { value: "Module" })), s1 = Jt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), o1 = Jt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), a1 = Jt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), c1 = Jt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), u1 = Jt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), h1 = Jt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), l1 = Jt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), f1 = Jt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), d1 = Jt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), p1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: s1,
  base32hex: u1,
  base32hexpad: l1,
  base32hexpadupper: f1,
  base32hexupper: h1,
  base32pad: a1,
  base32padupper: c1,
  base32upper: o1,
  base32z: d1
}, Symbol.toStringTag, { value: "Module" })), g1 = Ps({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), y1 = Ps({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), v1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: g1,
  base36upper: y1
}, Symbol.toStringTag, { value: "Module" })), m1 = Ps({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), w1 = Ps({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), _1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: m1,
  base58flickr: w1
}, Symbol.toStringTag, { value: "Module" })), b1 = Jt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), E1 = Jt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), D1 = Jt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), S1 = Jt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), I1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: b1,
  base64pad: E1,
  base64url: D1,
  base64urlpad: S1
}, Symbol.toStringTag, { value: "Module" })), ap = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), x1 = ap.reduce((i, e, t) => (i[t] = e, i), []), O1 = ap.reduce((i, e, t) => (i[e.codePointAt(0)] = t, i), []);
function P1(i) {
  return i.reduce((e, t) => (e += x1[t], e), "");
}
function C1(i) {
  const e = [];
  for (const t of i) {
    const s = O1[t.codePointAt(0)];
    if (s === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const A1 = ha({
  prefix: "🚀",
  name: "base256emoji",
  encode: P1,
  decode: C1
}), T1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: A1
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const sf = {
  ...Yb,
  ...Qb,
  ...Zb,
  ...t1,
  ...n1,
  ...p1,
  ...v1,
  ..._1,
  ...I1,
  ...T1
};
function cp(i, e, t, s) {
  return {
    name: i,
    prefix: e,
    encoder: {
      name: i,
      prefix: e,
      encode: t
    },
    decoder: { decode: s }
  };
}
const of = cp("utf8", "u", (i) => "u" + new TextDecoder("utf8").decode(i), (i) => new TextEncoder().encode(i.substring(1))), zc = cp("ascii", "a", (i) => {
  let e = "a";
  for (let t = 0; t < i.length; t++)
    e += String.fromCharCode(i[t]);
  return e;
}, (i) => {
  i = i.substring(1);
  const e = sp(i.length);
  for (let t = 0; t < i.length; t++)
    e[t] = i.charCodeAt(t);
  return e;
}), up = {
  utf8: of,
  "utf-8": of,
  hex: sf.base16,
  latin1: zc,
  ascii: zc,
  binary: zc,
  ...sf
};
function br(i, e = "utf8") {
  const t = up[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? $u(globalThis.Buffer.from(i, "utf-8")) : t.decoder.decode(`${t.prefix}${i}`);
}
function fr(i, e = "utf8") {
  const t = up[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(i.buffer, i.byteOffset, i.byteLength).toString("utf8") : t.encoder.encode(i).substring(1);
}
var af = function(i, e, t) {
  if (t || arguments.length === 2)
    for (var s = 0, o = e.length, c; s < o; s++)
      (c || !(s in e)) && (c || (c = Array.prototype.slice.call(e, 0, s)), c[s] = e[s]);
  return i.concat(c || Array.prototype.slice.call(e));
}, R1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(e, t, s) {
      this.name = e, this.version = t, this.os = s, this.type = "browser";
    }
    return i;
  }()
), N1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return i;
  }()
), L1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(e, t, s, o) {
      this.name = e, this.version = t, this.os = s, this.bot = o, this.type = "bot-device";
    }
    return i;
  }()
), U1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function i() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return i;
  }()
), $1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function i() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return i;
  }()
), M1 = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, j1 = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, cf = 3, q1 = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", M1]
], uf = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function z1(i) {
  return i ? hf(i) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new $1() : typeof navigator < "u" ? hf(navigator.userAgent) : B1();
}
function F1(i) {
  return i !== "" && q1.reduce(function(e, t) {
    var s = t[0], o = t[1];
    if (e)
      return e;
    var c = o.exec(i);
    return !!c && [s, c];
  }, !1);
}
function hf(i) {
  var e = F1(i);
  if (!e)
    return null;
  var t = e[0], s = e[1];
  if (t === "searchbot")
    return new U1();
  var o = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
  o ? o.length < cf && (o = af(af([], o, !0), K1(cf - o.length), !0)) : o = [];
  var c = o.join("."), d = H1(i), f = j1.exec(i);
  return f && f[1] ? new L1(t, c, d, f[1]) : new R1(t, c, d);
}
function H1(i) {
  for (var e = 0, t = uf.length; e < t; e++) {
    var s = uf[e], o = s[0], c = s[1], d = c.exec(i);
    if (d)
      return o;
  }
  return null;
}
function B1() {
  var i = typeof process < "u" && "v14.17.0";
  return i ? new N1("v14.17.0".slice(1)) : null;
}
function K1(i) {
  for (var e = [], t = 0; t < i; t++)
    e.push("0");
  return e;
}
var ve = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var gu = function(i, e) {
  return gu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, s) {
    t.__proto__ = s;
  } || function(t, s) {
    for (var o in s)
      s.hasOwnProperty(o) && (t[o] = s[o]);
  }, gu(i, e);
};
function k1(i, e) {
  gu(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var yu = function() {
  return yu = Object.assign || function(e) {
    for (var t, s = 1, o = arguments.length; s < o; s++) {
      t = arguments[s];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, yu.apply(this, arguments);
};
function V1(i, e) {
  var t = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) && e.indexOf(s) < 0 && (t[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, s = Object.getOwnPropertySymbols(i); o < s.length; o++)
      e.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[o]) && (t[s[o]] = i[s[o]]);
  return t;
}
function W1(i, e, t, s) {
  var o = arguments.length, c = o < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, t) : s, d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    c = Reflect.decorate(i, e, t, s);
  else
    for (var f = i.length - 1; f >= 0; f--)
      (d = i[f]) && (c = (o < 3 ? d(c) : o > 3 ? d(e, t, c) : d(e, t)) || c);
  return o > 3 && c && Object.defineProperty(e, t, c), c;
}
function G1(i, e) {
  return function(t, s) {
    e(t, s, i);
  };
}
function Y1(i, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(i, e);
}
function J1(i, e, t, s) {
  function o(c) {
    return c instanceof t ? c : new t(function(d) {
      d(c);
    });
  }
  return new (t || (t = Promise))(function(c, d) {
    function f(m) {
      try {
        g(s.next(m));
      } catch (D) {
        d(D);
      }
    }
    function y(m) {
      try {
        g(s.throw(m));
      } catch (D) {
        d(D);
      }
    }
    function g(m) {
      m.done ? c(m.value) : o(m.value).then(f, y);
    }
    g((s = s.apply(i, e || [])).next());
  });
}
function Q1(i, e) {
  var t = { label: 0, sent: function() {
    if (c[0] & 1)
      throw c[1];
    return c[1];
  }, trys: [], ops: [] }, s, o, c, d;
  return d = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function f(g) {
    return function(m) {
      return y([g, m]);
    };
  }
  function y(g) {
    if (s)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (s = 1, o && (c = g[0] & 2 ? o.return : g[0] ? o.throw || ((c = o.return) && c.call(o), 0) : o.next) && !(c = c.call(o, g[1])).done)
          return c;
        switch (o = 0, c && (g = [g[0] & 2, c.value]), g[0]) {
          case 0:
          case 1:
            c = g;
            break;
          case 4:
            return t.label++, { value: g[1], done: !1 };
          case 5:
            t.label++, o = g[1], g = [0];
            continue;
          case 7:
            g = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (c = t.trys, !(c = c.length > 0 && c[c.length - 1]) && (g[0] === 6 || g[0] === 2)) {
              t = 0;
              continue;
            }
            if (g[0] === 3 && (!c || g[1] > c[0] && g[1] < c[3])) {
              t.label = g[1];
              break;
            }
            if (g[0] === 6 && t.label < c[1]) {
              t.label = c[1], c = g;
              break;
            }
            if (c && t.label < c[2]) {
              t.label = c[2], t.ops.push(g);
              break;
            }
            c[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        g = e.call(i, t);
      } catch (m) {
        g = [6, m], o = 0;
      } finally {
        s = c = 0;
      }
    if (g[0] & 5)
      throw g[1];
    return { value: g[0] ? g[1] : void 0, done: !0 };
  }
}
function X1(i, e, t, s) {
  s === void 0 && (s = t), i[s] = e[t];
}
function Z1(i, e) {
  for (var t in i)
    t !== "default" && !e.hasOwnProperty(t) && (e[t] = i[t]);
}
function vu(i) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && i[e], s = 0;
  if (t)
    return t.call(i);
  if (i && typeof i.length == "number")
    return {
      next: function() {
        return i && s >= i.length && (i = void 0), { value: i && i[s++], done: !i };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function hp(i, e) {
  var t = typeof Symbol == "function" && i[Symbol.iterator];
  if (!t)
    return i;
  var s = t.call(i), o, c = [], d;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = s.next()).done; )
      c.push(o.value);
  } catch (f) {
    d = { error: f };
  } finally {
    try {
      o && !o.done && (t = s.return) && t.call(s);
    } finally {
      if (d)
        throw d.error;
    }
  }
  return c;
}
function eE() {
  for (var i = [], e = 0; e < arguments.length; e++)
    i = i.concat(hp(arguments[e]));
  return i;
}
function tE() {
  for (var i = 0, e = 0, t = arguments.length; e < t; e++)
    i += arguments[e].length;
  for (var s = Array(i), o = 0, e = 0; e < t; e++)
    for (var c = arguments[e], d = 0, f = c.length; d < f; d++, o++)
      s[o] = c[d];
  return s;
}
function Ds(i) {
  return this instanceof Ds ? (this.v = i, this) : new Ds(i);
}
function rE(i, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = t.apply(i, e || []), o, c = [];
  return o = {}, d("next"), d("throw"), d("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function d(I) {
    s[I] && (o[I] = function(T) {
      return new Promise(function(P, F) {
        c.push([I, T, P, F]) > 1 || f(I, T);
      });
    });
  }
  function f(I, T) {
    try {
      y(s[I](T));
    } catch (P) {
      D(c[0][3], P);
    }
  }
  function y(I) {
    I.value instanceof Ds ? Promise.resolve(I.value.v).then(g, m) : D(c[0][2], I);
  }
  function g(I) {
    f("next", I);
  }
  function m(I) {
    f("throw", I);
  }
  function D(I, T) {
    I(T), c.shift(), c.length && f(c[0][0], c[0][1]);
  }
}
function iE(i) {
  var e, t;
  return e = {}, s("next"), s("throw", function(o) {
    throw o;
  }), s("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function s(o, c) {
    e[o] = i[o] ? function(d) {
      return (t = !t) ? { value: Ds(i[o](d)), done: o === "return" } : c ? c(d) : d;
    } : c;
  }
}
function nE(i) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = i[Symbol.asyncIterator], t;
  return e ? e.call(i) : (i = typeof vu == "function" ? vu(i) : i[Symbol.iterator](), t = {}, s("next"), s("throw"), s("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function s(c) {
    t[c] = i[c] && function(d) {
      return new Promise(function(f, y) {
        d = i[c](d), o(f, y, d.done, d.value);
      });
    };
  }
  function o(c, d, f, y) {
    Promise.resolve(y).then(function(g) {
      c({ value: g, done: f });
    }, d);
  }
}
function sE(i, e) {
  return Object.defineProperty ? Object.defineProperty(i, "raw", { value: e }) : i.raw = e, i;
}
function oE(i) {
  if (i && i.__esModule)
    return i;
  var e = {};
  if (i != null)
    for (var t in i)
      Object.hasOwnProperty.call(i, t) && (e[t] = i[t]);
  return e.default = i, e;
}
function aE(i) {
  return i && i.__esModule ? i : { default: i };
}
function cE(i, e) {
  if (!e.has(i))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(i);
}
function uE(i, e, t) {
  if (!e.has(i))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(i, t), t;
}
const hE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return yu;
  },
  __asyncDelegator: iE,
  __asyncGenerator: rE,
  __asyncValues: nE,
  __await: Ds,
  __awaiter: J1,
  __classPrivateFieldGet: cE,
  __classPrivateFieldSet: uE,
  __createBinding: X1,
  __decorate: W1,
  __exportStar: Z1,
  __extends: k1,
  __generator: Q1,
  __importDefault: aE,
  __importStar: oE,
  __makeTemplateObject: sE,
  __metadata: Y1,
  __param: G1,
  __read: hp,
  __rest: V1,
  __spread: eE,
  __spreadArrays: tE,
  __values: vu
}, Symbol.toStringTag, { value: "Module" })), si = /* @__PURE__ */ ra(hE);
var Fc = {}, fs = {}, lf;
function lE() {
  if (lf)
    return fs;
  lf = 1, Object.defineProperty(fs, "__esModule", { value: !0 }), fs.delay = void 0;
  function i(e) {
    return new Promise((t) => {
      setTimeout(() => {
        t(!0);
      }, e);
    });
  }
  return fs.delay = i, fs;
}
var rn = {}, Hc = {}, nn = {}, ff;
function fE() {
  return ff || (ff = 1, Object.defineProperty(nn, "__esModule", { value: !0 }), nn.ONE_THOUSAND = nn.ONE_HUNDRED = void 0, nn.ONE_HUNDRED = 100, nn.ONE_THOUSAND = 1e3), nn;
}
var Bc = {}, df;
function dE() {
  return df || (df = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 }), i.ONE_YEAR = i.FOUR_WEEKS = i.THREE_WEEKS = i.TWO_WEEKS = i.ONE_WEEK = i.THIRTY_DAYS = i.SEVEN_DAYS = i.FIVE_DAYS = i.THREE_DAYS = i.ONE_DAY = i.TWENTY_FOUR_HOURS = i.TWELVE_HOURS = i.SIX_HOURS = i.THREE_HOURS = i.ONE_HOUR = i.SIXTY_MINUTES = i.THIRTY_MINUTES = i.TEN_MINUTES = i.FIVE_MINUTES = i.ONE_MINUTE = i.SIXTY_SECONDS = i.THIRTY_SECONDS = i.TEN_SECONDS = i.FIVE_SECONDS = i.ONE_SECOND = void 0, i.ONE_SECOND = 1, i.FIVE_SECONDS = 5, i.TEN_SECONDS = 10, i.THIRTY_SECONDS = 30, i.SIXTY_SECONDS = 60, i.ONE_MINUTE = i.SIXTY_SECONDS, i.FIVE_MINUTES = i.ONE_MINUTE * 5, i.TEN_MINUTES = i.ONE_MINUTE * 10, i.THIRTY_MINUTES = i.ONE_MINUTE * 30, i.SIXTY_MINUTES = i.ONE_MINUTE * 60, i.ONE_HOUR = i.SIXTY_MINUTES, i.THREE_HOURS = i.ONE_HOUR * 3, i.SIX_HOURS = i.ONE_HOUR * 6, i.TWELVE_HOURS = i.ONE_HOUR * 12, i.TWENTY_FOUR_HOURS = i.ONE_HOUR * 24, i.ONE_DAY = i.TWENTY_FOUR_HOURS, i.THREE_DAYS = i.ONE_DAY * 3, i.FIVE_DAYS = i.ONE_DAY * 5, i.SEVEN_DAYS = i.ONE_DAY * 7, i.THIRTY_DAYS = i.ONE_DAY * 30, i.ONE_WEEK = i.SEVEN_DAYS, i.TWO_WEEKS = i.ONE_WEEK * 2, i.THREE_WEEKS = i.ONE_WEEK * 3, i.FOUR_WEEKS = i.ONE_WEEK * 4, i.ONE_YEAR = i.ONE_DAY * 365;
  }(Bc)), Bc;
}
var pf;
function lp() {
  return pf || (pf = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 });
    const e = si;
    e.__exportStar(fE(), i), e.__exportStar(dE(), i);
  }(Hc)), Hc;
}
var gf;
function pE() {
  if (gf)
    return rn;
  gf = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.fromMiliseconds = rn.toMiliseconds = void 0;
  const i = lp();
  function e(s) {
    return s * i.ONE_THOUSAND;
  }
  rn.toMiliseconds = e;
  function t(s) {
    return Math.floor(s / i.ONE_THOUSAND);
  }
  return rn.fromMiliseconds = t, rn;
}
var yf;
function gE() {
  return yf || (yf = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 });
    const e = si;
    e.__exportStar(lE(), i), e.__exportStar(pE(), i);
  }(Fc)), Fc;
}
var Ln = {}, vf;
function yE() {
  if (vf)
    return Ln;
  vf = 1, Object.defineProperty(Ln, "__esModule", { value: !0 }), Ln.Watch = void 0;
  class i {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(t) {
      if (this.timestamps.has(t))
        throw new Error(`Watch already started for label: ${t}`);
      this.timestamps.set(t, { started: Date.now() });
    }
    stop(t) {
      const s = this.get(t);
      if (typeof s.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${t}`);
      const o = Date.now() - s.started;
      this.timestamps.set(t, { started: s.started, elapsed: o });
    }
    get(t) {
      const s = this.timestamps.get(t);
      if (typeof s > "u")
        throw new Error(`No timestamp found for label: ${t}`);
      return s;
    }
    elapsed(t) {
      const s = this.get(t);
      return s.elapsed || Date.now() - s.started;
    }
  }
  return Ln.Watch = i, Ln.default = i, Ln;
}
var Kc = {}, ds = {}, mf;
function vE() {
  if (mf)
    return ds;
  mf = 1, Object.defineProperty(ds, "__esModule", { value: !0 }), ds.IWatch = void 0;
  class i {
  }
  return ds.IWatch = i, ds;
}
var wf;
function mE() {
  return wf || (wf = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 }), si.__exportStar(vE(), i);
  }(Kc)), Kc;
}
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = si;
  e.__exportStar(gE(), i), e.__exportStar(yE(), i), e.__exportStar(mE(), i), e.__exportStar(lp(), i);
})(ve);
var ft = {};
Object.defineProperty(ft, "__esModule", { value: !0 });
ft.getLocalStorage = ft.getLocalStorageOrThrow = ft.getCrypto = ft.getCryptoOrThrow = fp = ft.getLocation = ft.getLocationOrThrow = ju = ft.getNavigator = ft.getNavigatorOrThrow = Mu = ft.getDocument = ft.getDocumentOrThrow = ft.getFromWindowOrThrow = ft.getFromWindow = void 0;
function un(i) {
  let e;
  return typeof window < "u" && typeof window[i] < "u" && (e = window[i]), e;
}
ft.getFromWindow = un;
function Hn(i) {
  const e = un(i);
  if (!e)
    throw new Error(`${i} is not defined in Window`);
  return e;
}
ft.getFromWindowOrThrow = Hn;
function wE() {
  return Hn("document");
}
ft.getDocumentOrThrow = wE;
function _E() {
  return un("document");
}
var Mu = ft.getDocument = _E;
function bE() {
  return Hn("navigator");
}
ft.getNavigatorOrThrow = bE;
function EE() {
  return un("navigator");
}
var ju = ft.getNavigator = EE;
function DE() {
  return Hn("location");
}
ft.getLocationOrThrow = DE;
function SE() {
  return un("location");
}
var fp = ft.getLocation = SE;
function IE() {
  return Hn("crypto");
}
ft.getCryptoOrThrow = IE;
function xE() {
  return un("crypto");
}
ft.getCrypto = xE;
function OE() {
  return Hn("localStorage");
}
ft.getLocalStorageOrThrow = OE;
function PE() {
  return un("localStorage");
}
ft.getLocalStorage = PE;
var qu = {};
Object.defineProperty(qu, "__esModule", { value: !0 });
var dp = qu.getWindowMetadata = void 0;
const _f = ft;
function CE() {
  let i, e;
  try {
    i = _f.getDocumentOrThrow(), e = _f.getLocationOrThrow();
  } catch {
    return null;
  }
  function t() {
    const D = i.getElementsByTagName("link"), I = [];
    for (let T = 0; T < D.length; T++) {
      const P = D[T], F = P.getAttribute("rel");
      if (F && F.toLowerCase().indexOf("icon") > -1) {
        const B = P.getAttribute("href");
        if (B)
          if (B.toLowerCase().indexOf("https:") === -1 && B.toLowerCase().indexOf("http:") === -1 && B.indexOf("//") !== 0) {
            let ie = e.protocol + "//" + e.host;
            if (B.indexOf("/") === 0)
              ie += B;
            else {
              const L = e.pathname.split("/");
              L.pop();
              const j = L.join("/");
              ie += j + "/" + B;
            }
            I.push(ie);
          } else if (B.indexOf("//") === 0) {
            const ie = e.protocol + B;
            I.push(ie);
          } else
            I.push(B);
      }
    }
    return I;
  }
  function s(...D) {
    const I = i.getElementsByTagName("meta");
    for (let T = 0; T < I.length; T++) {
      const P = I[T], F = ["itemprop", "property", "name"].map((B) => P.getAttribute(B)).filter((B) => B ? D.includes(B) : !1);
      if (F.length && F) {
        const B = P.getAttribute("content");
        if (B)
          return B;
      }
    }
    return "";
  }
  function o() {
    let D = s("name", "og:site_name", "og:title", "twitter:title");
    return D || (D = i.title), D;
  }
  function c() {
    return s("description", "og:description", "twitter:description", "keywords");
  }
  const d = o(), f = c(), y = e.origin, g = t();
  return {
    description: f,
    url: y,
    icons: g,
    name: d
  };
}
dp = qu.getWindowMetadata = CE;
var Ss = {}, AE = (i) => encodeURIComponent(i).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), pp = "%[a-f0-9]{2}", bf = new RegExp("(" + pp + ")|([^%]+?)", "gi"), Ef = new RegExp("(" + pp + ")+", "gi");
function mu(i, e) {
  try {
    return [decodeURIComponent(i.join(""))];
  } catch {
  }
  if (i.length === 1)
    return i;
  e = e || 1;
  var t = i.slice(0, e), s = i.slice(e);
  return Array.prototype.concat.call([], mu(t), mu(s));
}
function TE(i) {
  try {
    return decodeURIComponent(i);
  } catch {
    for (var e = i.match(bf) || [], t = 1; t < e.length; t++)
      i = mu(e, t).join(""), e = i.match(bf) || [];
    return i;
  }
}
function RE(i) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, t = Ef.exec(i); t; ) {
    try {
      e[t[0]] = decodeURIComponent(t[0]);
    } catch {
      var s = TE(t[0]);
      s !== t[0] && (e[t[0]] = s);
    }
    t = Ef.exec(i);
  }
  e["%C2"] = "�";
  for (var o = Object.keys(e), c = 0; c < o.length; c++) {
    var d = o[c];
    i = i.replace(new RegExp(d, "g"), e[d]);
  }
  return i;
}
var NE = function(i) {
  if (typeof i != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof i + "`");
  try {
    return i = i.replace(/\+/g, " "), decodeURIComponent(i);
  } catch {
    return RE(i);
  }
}, LE = (i, e) => {
  if (!(typeof i == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [i];
  const t = i.indexOf(e);
  return t === -1 ? [i] : [
    i.slice(0, t),
    i.slice(t + e.length)
  ];
}, UE = function(i, e) {
  for (var t = {}, s = Object.keys(i), o = Array.isArray(e), c = 0; c < s.length; c++) {
    var d = s[c], f = i[d];
    (o ? e.indexOf(d) !== -1 : e(d, f, i)) && (t[d] = f);
  }
  return t;
};
(function(i) {
  const e = AE, t = NE, s = LE, o = UE, c = (L) => L == null, d = Symbol("encodeFragmentIdentifier");
  function f(L) {
    switch (L.arrayFormat) {
      case "index":
        return (j) => (O, A) => {
          const E = O.length;
          return A === void 0 || L.skipNull && A === null || L.skipEmptyString && A === "" ? O : A === null ? [...O, [m(j, L), "[", E, "]"].join("")] : [
            ...O,
            [m(j, L), "[", m(E, L), "]=", m(A, L)].join("")
          ];
        };
      case "bracket":
        return (j) => (O, A) => A === void 0 || L.skipNull && A === null || L.skipEmptyString && A === "" ? O : A === null ? [...O, [m(j, L), "[]"].join("")] : [...O, [m(j, L), "[]=", m(A, L)].join("")];
      case "colon-list-separator":
        return (j) => (O, A) => A === void 0 || L.skipNull && A === null || L.skipEmptyString && A === "" ? O : A === null ? [...O, [m(j, L), ":list="].join("")] : [...O, [m(j, L), ":list=", m(A, L)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const j = L.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (O) => (A, E) => E === void 0 || L.skipNull && E === null || L.skipEmptyString && E === "" ? A : (E = E === null ? "" : E, A.length === 0 ? [[m(O, L), j, m(E, L)].join("")] : [[A, m(E, L)].join(L.arrayFormatSeparator)]);
      }
      default:
        return (j) => (O, A) => A === void 0 || L.skipNull && A === null || L.skipEmptyString && A === "" ? O : A === null ? [...O, m(j, L)] : [...O, [m(j, L), "=", m(A, L)].join("")];
    }
  }
  function y(L) {
    let j;
    switch (L.arrayFormat) {
      case "index":
        return (O, A, E) => {
          if (j = /\[(\d*)\]$/.exec(O), O = O.replace(/\[\d*\]$/, ""), !j) {
            E[O] = A;
            return;
          }
          E[O] === void 0 && (E[O] = {}), E[O][j[1]] = A;
        };
      case "bracket":
        return (O, A, E) => {
          if (j = /(\[\])$/.exec(O), O = O.replace(/\[\]$/, ""), !j) {
            E[O] = A;
            return;
          }
          if (E[O] === void 0) {
            E[O] = [A];
            return;
          }
          E[O] = [].concat(E[O], A);
        };
      case "colon-list-separator":
        return (O, A, E) => {
          if (j = /(:list)$/.exec(O), O = O.replace(/:list$/, ""), !j) {
            E[O] = A;
            return;
          }
          if (E[O] === void 0) {
            E[O] = [A];
            return;
          }
          E[O] = [].concat(E[O], A);
        };
      case "comma":
      case "separator":
        return (O, A, E) => {
          const u = typeof A == "string" && A.includes(L.arrayFormatSeparator), _ = typeof A == "string" && !u && D(A, L).includes(L.arrayFormatSeparator);
          A = _ ? D(A, L) : A;
          const W = u || _ ? A.split(L.arrayFormatSeparator).map((G) => D(G, L)) : A === null ? A : D(A, L);
          E[O] = W;
        };
      case "bracket-separator":
        return (O, A, E) => {
          const u = /(\[\])$/.test(O);
          if (O = O.replace(/\[\]$/, ""), !u) {
            E[O] = A && D(A, L);
            return;
          }
          const _ = A === null ? [] : A.split(L.arrayFormatSeparator).map((W) => D(W, L));
          if (E[O] === void 0) {
            E[O] = _;
            return;
          }
          E[O] = [].concat(E[O], _);
        };
      default:
        return (O, A, E) => {
          if (E[O] === void 0) {
            E[O] = A;
            return;
          }
          E[O] = [].concat(E[O], A);
        };
    }
  }
  function g(L) {
    if (typeof L != "string" || L.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function m(L, j) {
    return j.encode ? j.strict ? e(L) : encodeURIComponent(L) : L;
  }
  function D(L, j) {
    return j.decode ? t(L) : L;
  }
  function I(L) {
    return Array.isArray(L) ? L.sort() : typeof L == "object" ? I(Object.keys(L)).sort((j, O) => Number(j) - Number(O)).map((j) => L[j]) : L;
  }
  function T(L) {
    const j = L.indexOf("#");
    return j !== -1 && (L = L.slice(0, j)), L;
  }
  function P(L) {
    let j = "";
    const O = L.indexOf("#");
    return O !== -1 && (j = L.slice(O)), j;
  }
  function F(L) {
    L = T(L);
    const j = L.indexOf("?");
    return j === -1 ? "" : L.slice(j + 1);
  }
  function B(L, j) {
    return j.parseNumbers && !Number.isNaN(Number(L)) && typeof L == "string" && L.trim() !== "" ? L = Number(L) : j.parseBooleans && L !== null && (L.toLowerCase() === "true" || L.toLowerCase() === "false") && (L = L.toLowerCase() === "true"), L;
  }
  function ie(L, j) {
    j = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, j), g(j.arrayFormatSeparator);
    const O = y(j), A = /* @__PURE__ */ Object.create(null);
    if (typeof L != "string" || (L = L.trim().replace(/^[?#&]/, ""), !L))
      return A;
    for (const E of L.split("&")) {
      if (E === "")
        continue;
      let [u, _] = s(j.decode ? E.replace(/\+/g, " ") : E, "=");
      _ = _ === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(j.arrayFormat) ? _ : D(_, j), O(D(u, j), _, A);
    }
    for (const E of Object.keys(A)) {
      const u = A[E];
      if (typeof u == "object" && u !== null)
        for (const _ of Object.keys(u))
          u[_] = B(u[_], j);
      else
        A[E] = B(u, j);
    }
    return j.sort === !1 ? A : (j.sort === !0 ? Object.keys(A).sort() : Object.keys(A).sort(j.sort)).reduce((E, u) => {
      const _ = A[u];
      return _ && typeof _ == "object" && !Array.isArray(_) ? E[u] = I(_) : E[u] = _, E;
    }, /* @__PURE__ */ Object.create(null));
  }
  i.extract = F, i.parse = ie, i.stringify = (L, j) => {
    if (!L)
      return "";
    j = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, j), g(j.arrayFormatSeparator);
    const O = (_) => j.skipNull && c(L[_]) || j.skipEmptyString && L[_] === "", A = f(j), E = {};
    for (const _ of Object.keys(L))
      O(_) || (E[_] = L[_]);
    const u = Object.keys(E);
    return j.sort !== !1 && u.sort(j.sort), u.map((_) => {
      const W = L[_];
      return W === void 0 ? "" : W === null ? m(_, j) : Array.isArray(W) ? W.length === 0 && j.arrayFormat === "bracket-separator" ? m(_, j) + "[]" : W.reduce(A(_), []).join("&") : m(_, j) + "=" + m(W, j);
    }).filter((_) => _.length > 0).join("&");
  }, i.parseUrl = (L, j) => {
    j = Object.assign({
      decode: !0
    }, j);
    const [O, A] = s(L, "#");
    return Object.assign(
      {
        url: O.split("?")[0] || "",
        query: ie(F(L), j)
      },
      j && j.parseFragmentIdentifier && A ? { fragmentIdentifier: D(A, j) } : {}
    );
  }, i.stringifyUrl = (L, j) => {
    j = Object.assign({
      encode: !0,
      strict: !0,
      [d]: !0
    }, j);
    const O = T(L.url).split("?")[0] || "", A = i.extract(L.url), E = i.parse(A, { sort: !1 }), u = Object.assign(E, L.query);
    let _ = i.stringify(u, j);
    _ && (_ = `?${_}`);
    let W = P(L.url);
    return L.fragmentIdentifier && (W = `#${j[d] ? m(L.fragmentIdentifier, j) : L.fragmentIdentifier}`), `${O}${_}${W}`;
  }, i.pick = (L, j, O) => {
    O = Object.assign({
      parseFragmentIdentifier: !0,
      [d]: !1
    }, O);
    const { url: A, query: E, fragmentIdentifier: u } = i.parseUrl(L, O);
    return i.stringifyUrl({
      url: A,
      query: o(E, j),
      fragmentIdentifier: u
    }, O);
  }, i.exclude = (L, j, O) => {
    const A = Array.isArray(j) ? (E) => !j.includes(E) : (E, u) => !j(E, u);
    return i.pick(L, A, O);
  };
})(Ss);
const $E = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe"
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe"
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe"
  }
}, ME = ":";
function jE(i) {
  const [e, t] = i.split(ME);
  return { namespace: e, reference: t };
}
function qE(i, e = []) {
  const t = [];
  return Object.keys(i).forEach((s) => {
    if (e.length && !e.includes(s))
      return;
    const o = i[s];
    t.push(...o.accounts);
  }), t;
}
function gp(i, e) {
  return i.includes(":") ? [i] : e.chains || [];
}
const yp = "base10", lr = "base16", wu = "base64pad", zu = "utf8", vp = 0, hn = 1, zE = 0, Df = 1, _u = 12, Fu = 32;
function FE() {
  const i = Uu.generateKeyPair();
  return { privateKey: fr(i.secretKey, lr), publicKey: fr(i.publicKey, lr) };
}
function bu() {
  const i = Fn.randomBytes(Fu);
  return fr(i, lr);
}
function HE(i, e) {
  const t = Uu.sharedKey(br(i, lr), br(e, lr), !0), s = new Pb(ua.SHA256, t).expand(Fu);
  return fr(s, lr);
}
function BE(i) {
  const e = ua.hash(br(i, lr));
  return fr(e, lr);
}
function qn(i) {
  const e = ua.hash(br(i, zu));
  return fr(e, lr);
}
function KE(i) {
  return br(`${i}`, yp);
}
function Cs(i) {
  return Number(fr(i, yp));
}
function kE(i) {
  const e = KE(typeof i.type < "u" ? i.type : vp);
  if (Cs(e) === hn && typeof i.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof i.senderPublicKey < "u" ? br(i.senderPublicKey, lr) : void 0, s = typeof i.iv < "u" ? br(i.iv, lr) : Fn.randomBytes(_u), o = new Nu.ChaCha20Poly1305(br(i.symKey, lr)).seal(s, br(i.message, zu));
  return WE({ type: e, sealed: o, iv: s, senderPublicKey: t });
}
function VE(i) {
  const e = new Nu.ChaCha20Poly1305(br(i.symKey, lr)), { sealed: t, iv: s } = Qo(i.encoded), o = e.open(s, t);
  if (o === null)
    throw new Error("Failed to decrypt");
  return fr(o, zu);
}
function WE(i) {
  if (Cs(i.type) === hn) {
    if (typeof i.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return fr(pu([i.type, i.senderPublicKey, i.iv, i.sealed]), wu);
  }
  return fr(pu([i.type, i.iv, i.sealed]), wu);
}
function Qo(i) {
  const e = br(i, wu), t = e.slice(zE, Df), s = Df;
  if (Cs(t) === hn) {
    const f = s + Fu, y = f + _u, g = e.slice(s, f), m = e.slice(f, y), D = e.slice(y);
    return { type: t, sealed: D, iv: m, senderPublicKey: g };
  }
  const o = s + _u, c = e.slice(s, o), d = e.slice(o);
  return { type: t, sealed: d, iv: c };
}
function GE(i, e) {
  const t = Qo(i);
  return mp({ type: Cs(t.type), senderPublicKey: typeof t.senderPublicKey < "u" ? fr(t.senderPublicKey, lr) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function mp(i) {
  const e = (i == null ? void 0 : i.type) || vp;
  if (e === hn) {
    if (typeof (i == null ? void 0 : i.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (i == null ? void 0 : i.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: i == null ? void 0 : i.senderPublicKey, receiverPublicKey: i == null ? void 0 : i.receiverPublicKey };
}
function Sf(i) {
  return i.type === hn && typeof i.senderPublicKey == "string" && typeof i.receiverPublicKey == "string";
}
var YE = Object.defineProperty, If = Object.getOwnPropertySymbols, JE = Object.prototype.hasOwnProperty, QE = Object.prototype.propertyIsEnumerable, xf = (i, e, t) => e in i ? YE(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Of = (i, e) => {
  for (var t in e || (e = {}))
    JE.call(e, t) && xf(i, t, e[t]);
  if (If)
    for (var t of If(e))
      QE.call(e, t) && xf(i, t, e[t]);
  return i;
};
const XE = "ReactNative", Cr = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, ZE = "js";
function Hu() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Bn() {
  return !Mu() && !!ju() && navigator.product === XE;
}
function Kn() {
  return !Hu() && !!ju() && !!Mu();
}
function As() {
  return Bn() ? Cr.reactNative : Hu() ? Cr.node : Kn() ? Cr.browser : Cr.unknown;
}
function eD() {
  var i;
  try {
    return Bn() && typeof window < "u" && typeof (window == null ? void 0 : window.Application) < "u" ? (i = window.Application) == null ? void 0 : i.applicationId : void 0;
  } catch {
    return;
  }
}
function tD(i, e) {
  let t = Ss.parse(i);
  return t = Of(Of({}, t), e), i = Ss.stringify(t), i;
}
function rD() {
  return dp() || { name: "", description: "", url: "", icons: [""] };
}
function iD() {
  if (As() === Cr.reactNative && typeof window < "u" && typeof (window == null ? void 0 : window.Platform) < "u") {
    const { OS: t, Version: s } = window.Platform;
    return [t, s].join("-");
  }
  const i = z1();
  if (i === null)
    return "unknown";
  const e = i.os ? i.os.replace(" ", "").toLowerCase() : "unknown";
  return i.type === "browser" ? [e, i.name, i.version].join("-") : [e, i.version].join("-");
}
function nD() {
  var i;
  const e = As();
  return e === Cr.browser ? [e, ((i = fp()) == null ? void 0 : i.host) || "unknown"].join(":") : e;
}
function sD(i, e, t) {
  const s = iD(), o = nD();
  return [[i, e].join("-"), [ZE, t].join("-"), s, o].join("/");
}
function oD({ protocol: i, version: e, relayUrl: t, sdkVersion: s, auth: o, projectId: c, useOnCloseEvent: d, bundleId: f }) {
  const y = t.split("?"), g = sD(i, e, s), m = { auth: o, ua: g, projectId: c, useOnCloseEvent: d || void 0, origin: f || void 0 }, D = tD(y[1] || "", m);
  return y[0] + "?" + D;
}
function an(i, e) {
  return i.filter((t) => e.includes(t)).length === i.length;
}
function wp(i) {
  return Object.fromEntries(i.entries());
}
function _p(i) {
  return new Map(Object.entries(i));
}
function $n(i = ve.FIVE_MINUTES, e) {
  const t = ve.toMiliseconds(i || ve.FIVE_MINUTES);
  let s, o, c;
  return { resolve: (d) => {
    c && s && (clearTimeout(c), s(d));
  }, reject: (d) => {
    c && o && (clearTimeout(c), o(d));
  }, done: () => new Promise((d, f) => {
    c = setTimeout(() => {
      f(new Error(e));
    }, t), s = d, o = f;
  }) };
}
function Is(i, e, t) {
  return new Promise(async (s, o) => {
    const c = setTimeout(() => o(new Error(t)), e);
    try {
      const d = await i;
      s(d);
    } catch (d) {
      o(d);
    }
    clearTimeout(c);
  });
}
function bp(i, e) {
  if (typeof e == "string" && e.startsWith(`${i}:`))
    return e;
  if (i.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (i.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${i}`);
}
function aD(i) {
  return bp("topic", i);
}
function cD(i) {
  return bp("id", i);
}
function Ep(i) {
  const [e, t] = i.split(":"), s = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string")
    s.topic = t;
  else if (e === "id" && Number.isInteger(Number(t)))
    s.id = Number(t);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${t}`);
  return s;
}
function Pr(i, e) {
  return ve.fromMiliseconds((e || Date.now()) + ve.toMiliseconds(i));
}
function Mi(i) {
  return Date.now() >= ve.toMiliseconds(i);
}
function Ut(i, e) {
  return `${i}${e ? `:${e}` : ""}`;
}
function kc(i = [], e = []) {
  return [.../* @__PURE__ */ new Set([...i, ...e])];
}
async function uD({ id: i, topic: e, wcDeepLink: t }) {
  try {
    if (!t)
      return;
    const s = typeof t == "string" ? JSON.parse(t) : t;
    let o = s == null ? void 0 : s.href;
    if (typeof o != "string")
      return;
    o.endsWith("/") && (o = o.slice(0, -1));
    const c = `${o}/wc?requestId=${i}&sessionTopic=${e}`, d = As();
    d === Cr.browser ? c.startsWith("https://") ? window.open(c, "_blank", "noreferrer noopener") : window.open(c, "_self", "noreferrer noopener") : d === Cr.reactNative && typeof (window == null ? void 0 : window.Linking) < "u" && await window.Linking.openURL(c);
  } catch (s) {
    console.error(s);
  }
}
async function hD(i, e) {
  try {
    return await i.getItem(e) || (Kn() ? localStorage.getItem(e) : void 0);
  } catch (t) {
    console.error(t);
  }
}
const lD = "irn";
function Eu(i) {
  return (i == null ? void 0 : i.relay) || { protocol: lD };
}
function Vo(i) {
  const e = $E[i];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${i}`);
  return e;
}
var fD = Object.defineProperty, dD = Object.defineProperties, pD = Object.getOwnPropertyDescriptors, Pf = Object.getOwnPropertySymbols, gD = Object.prototype.hasOwnProperty, yD = Object.prototype.propertyIsEnumerable, Cf = (i, e, t) => e in i ? fD(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, vD = (i, e) => {
  for (var t in e || (e = {}))
    gD.call(e, t) && Cf(i, t, e[t]);
  if (Pf)
    for (var t of Pf(e))
      yD.call(e, t) && Cf(i, t, e[t]);
  return i;
}, mD = (i, e) => dD(i, pD(e));
function wD(i, e = "-") {
  const t = {}, s = "relay" + e;
  return Object.keys(i).forEach((o) => {
    if (o.startsWith(s)) {
      const c = o.replace(s, ""), d = i[o];
      t[c] = d;
    }
  }), t;
}
function Af(i) {
  i = i.includes("wc://") ? i.replace("wc://", "") : i, i = i.includes("wc:") ? i.replace("wc:", "") : i;
  const e = i.indexOf(":"), t = i.indexOf("?") !== -1 ? i.indexOf("?") : void 0, s = i.substring(0, e), o = i.substring(e + 1, t).split("@"), c = typeof t < "u" ? i.substring(t) : "", d = Ss.parse(c);
  return { protocol: s, topic: _D(o[0]), version: parseInt(o[1], 10), symKey: d.symKey, relay: wD(d), expiryTimestamp: d.expiryTimestamp ? parseInt(d.expiryTimestamp, 10) : void 0 };
}
function _D(i) {
  return i.startsWith("//") ? i.substring(2) : i;
}
function bD(i, e = "-") {
  const t = "relay", s = {};
  return Object.keys(i).forEach((o) => {
    const c = t + e + o;
    i[o] && (s[c] = i[o]);
  }), s;
}
function ED(i) {
  return `${i.protocol}:${i.topic}@${i.version}?` + Ss.stringify(mD(vD({ symKey: i.symKey }, bD(i.relay)), { expiryTimestamp: i.expiryTimestamp }));
}
function kn(i) {
  const e = [];
  return i.forEach((t) => {
    const [s, o] = t.split(":");
    e.push(`${s}:${o}`);
  }), e;
}
function DD(i) {
  const e = [];
  return Object.values(i).forEach((t) => {
    e.push(...kn(t.accounts));
  }), e;
}
function SD(i, e) {
  const t = [];
  return Object.values(i).forEach((s) => {
    kn(s.accounts).includes(e) && t.push(...s.methods);
  }), t;
}
function ID(i, e) {
  const t = [];
  return Object.values(i).forEach((s) => {
    kn(s.accounts).includes(e) && t.push(...s.events);
  }), t;
}
function Bu(i) {
  return i.includes(":");
}
function ws(i) {
  return Bu(i) ? i.split(":")[0] : i;
}
const xD = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, OD = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function ce(i, e) {
  const { message: t, code: s } = OD[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function _t(i, e) {
  const { message: t, code: s } = xD[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function ni(i, e) {
  return Array.isArray(i) ? typeof e < "u" && i.length ? i.every(e) : !0 : !1;
}
function xs(i) {
  return Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length;
}
function hr(i) {
  return typeof i > "u";
}
function Gt(i, e) {
  return e && hr(i) ? !0 : typeof i == "string" && !!i.trim().length;
}
function Ku(i, e) {
  return e && hr(i) ? !0 : typeof i == "number" && !isNaN(i);
}
function PD(i, e) {
  const { requiredNamespaces: t } = e, s = Object.keys(i.namespaces), o = Object.keys(t);
  let c = !0;
  return an(o, s) ? (s.forEach((d) => {
    const { accounts: f, methods: y, events: g } = i.namespaces[d], m = kn(f), D = t[d];
    (!an(gp(d, D), m) || !an(D.methods, y) || !an(D.events, g)) && (c = !1);
  }), c) : !1;
}
function Xo(i) {
  return Gt(i, !1) && i.includes(":") ? i.split(":").length === 2 : !1;
}
function CD(i) {
  if (Gt(i, !1) && i.includes(":")) {
    const e = i.split(":");
    if (e.length === 3) {
      const t = e[0] + ":" + e[1];
      return !!e[2] && Xo(t);
    }
  }
  return !1;
}
function AD(i) {
  if (Gt(i, !1))
    try {
      return typeof new URL(i) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function TD(i) {
  var e;
  return (e = i == null ? void 0 : i.proposer) == null ? void 0 : e.publicKey;
}
function RD(i) {
  return i == null ? void 0 : i.topic;
}
function ND(i, e) {
  let t = null;
  return Gt(i == null ? void 0 : i.publicKey, !1) || (t = ce("MISSING_OR_INVALID", `${e} controller public key should be a string`)), t;
}
function Tf(i) {
  let e = !0;
  return ni(i) ? i.length && (e = i.every((t) => Gt(t, !1))) : e = !1, e;
}
function LD(i, e, t) {
  let s = null;
  return ni(e) && e.length ? e.forEach((o) => {
    s || Xo(o) || (s = _t("UNSUPPORTED_CHAINS", `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`));
  }) : Xo(i) || (s = _t("UNSUPPORTED_CHAINS", `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), s;
}
function UD(i, e, t) {
  let s = null;
  return Object.entries(i).forEach(([o, c]) => {
    if (s)
      return;
    const d = LD(o, gp(o, c), `${e} ${t}`);
    d && (s = d);
  }), s;
}
function $D(i, e) {
  let t = null;
  return ni(i) ? i.forEach((s) => {
    t || CD(s) || (t = _t("UNSUPPORTED_ACCOUNTS", `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`));
  }) : t = _t("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t;
}
function MD(i, e) {
  let t = null;
  return Object.values(i).forEach((s) => {
    if (t)
      return;
    const o = $D(s == null ? void 0 : s.accounts, `${e} namespace`);
    o && (t = o);
  }), t;
}
function jD(i, e) {
  let t = null;
  return Tf(i == null ? void 0 : i.methods) ? Tf(i == null ? void 0 : i.events) || (t = _t("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : t = _t("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), t;
}
function Dp(i, e) {
  let t = null;
  return Object.values(i).forEach((s) => {
    if (t)
      return;
    const o = jD(s, `${e}, namespace`);
    o && (t = o);
  }), t;
}
function qD(i, e, t) {
  let s = null;
  if (i && xs(i)) {
    const o = Dp(i, e);
    o && (s = o);
    const c = UD(i, e, t);
    c && (s = c);
  } else
    s = ce("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return s;
}
function Vc(i, e) {
  let t = null;
  if (i && xs(i)) {
    const s = Dp(i, e);
    s && (t = s);
    const o = MD(i, e);
    o && (t = o);
  } else
    t = ce("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return t;
}
function Sp(i) {
  return Gt(i.protocol, !0);
}
function zD(i, e) {
  let t = !1;
  return e && !i ? t = !0 : i && ni(i) && i.length && i.forEach((s) => {
    t = Sp(s);
  }), t;
}
function FD(i) {
  return typeof i == "number";
}
function _r(i) {
  return typeof i < "u" && typeof i !== null;
}
function HD(i) {
  return !(!i || typeof i != "object" || !i.code || !Ku(i.code, !1) || !i.message || !Gt(i.message, !1));
}
function BD(i) {
  return !(hr(i) || !Gt(i.method, !1));
}
function KD(i) {
  return !(hr(i) || hr(i.result) && hr(i.error) || !Ku(i.id, !1) || !Gt(i.jsonrpc, !1));
}
function kD(i) {
  return !(hr(i) || !Gt(i.name, !1));
}
function Rf(i, e) {
  return !(!Xo(e) || !DD(i).includes(e));
}
function VD(i, e, t) {
  return Gt(t, !1) ? SD(i, e).includes(t) : !1;
}
function WD(i, e, t) {
  return Gt(t, !1) ? ID(i, e).includes(t) : !1;
}
function Nf(i, e, t) {
  let s = null;
  const o = GD(i), c = YD(e), d = Object.keys(o), f = Object.keys(c), y = Lf(Object.keys(i)), g = Lf(Object.keys(e)), m = y.filter((D) => !g.includes(D));
  return m.length && (s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${m.toString()}
      Received: ${Object.keys(e).toString()}`)), an(d, f) || (s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${d.toString()}
      Approved: ${f.toString()}`)), Object.keys(e).forEach((D) => {
    if (!D.includes(":") || s)
      return;
    const I = kn(e[D].accounts);
    I.includes(D) || (s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${D}
        Required: ${D}
        Approved: ${I.toString()}`));
  }), d.forEach((D) => {
    s || (an(o[D].methods, c[D].methods) ? an(o[D].events, c[D].events) || (s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${D}`)) : s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${D}`));
  }), s;
}
function GD(i) {
  const e = {};
  return Object.keys(i).forEach((t) => {
    var s;
    t.includes(":") ? e[t] = i[t] : (s = i[t].chains) == null || s.forEach((o) => {
      e[o] = { methods: i[t].methods, events: i[t].events };
    });
  }), e;
}
function Lf(i) {
  return [...new Set(i.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function YD(i) {
  const e = {};
  return Object.keys(i).forEach((t) => {
    if (t.includes(":"))
      e[t] = i[t];
    else {
      const s = kn(i[t].accounts);
      s == null || s.forEach((o) => {
        e[o] = { accounts: i[t].accounts.filter((c) => c.includes(`${o}:`)), methods: i[t].methods, events: i[t].events };
      });
    }
  }), e;
}
function JD(i, e) {
  return Ku(i, !1) && i <= e.max && i >= e.min;
}
function Uf() {
  const i = As();
  return new Promise((e) => {
    switch (i) {
      case Cr.browser:
        e(QD());
        break;
      case Cr.reactNative:
        e(XD());
        break;
      case Cr.node:
        e(ZD());
        break;
      default:
        e(!0);
    }
  });
}
function QD() {
  return Kn() && (navigator == null ? void 0 : navigator.onLine);
}
async function XD() {
  if (Bn() && typeof window < "u" && window != null && window.NetInfo) {
    const i = await (window == null ? void 0 : window.NetInfo.fetch());
    return i == null ? void 0 : i.isConnected;
  }
  return !0;
}
function ZD() {
  return !0;
}
function e3(i) {
  switch (As()) {
    case Cr.browser:
      t3(i);
      break;
    case Cr.reactNative:
      r3(i);
      break;
  }
}
function t3(i) {
  !Bn() && Kn() && (window.addEventListener("online", () => i(!0)), window.addEventListener("offline", () => i(!1)));
}
function r3(i) {
  Bn() && typeof window < "u" && window != null && window.NetInfo && (window == null || window.NetInfo.addEventListener((e) => i(e == null ? void 0 : e.isConnected)));
}
const Wc = {};
let qo = class {
  static get(e) {
    return Wc[e];
  }
  static set(e, t) {
    Wc[e] = t;
  }
  static delete(e) {
    delete Wc[e];
  }
};
const i3 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, n3 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, s3 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function o3(i, e) {
  if (i === "__proto__" || i === "constructor" && e && typeof e == "object" && "prototype" in e) {
    a3(i);
    return;
  }
  return e;
}
function a3(i) {
  console.warn(`[destr] Dropping "${i}" key to prevent prototype pollution.`);
}
function zo(i, e = {}) {
  if (typeof i != "string")
    return i;
  const t = i.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    i[0] === '"' && i.endsWith('"') && !i.includes("\\")
  )
    return t.slice(1, -1);
  if (t.length <= 9) {
    const s = t.toLowerCase();
    if (s === "true")
      return !0;
    if (s === "false")
      return !1;
    if (s === "undefined")
      return;
    if (s === "null")
      return null;
    if (s === "nan")
      return Number.NaN;
    if (s === "infinity")
      return Number.POSITIVE_INFINITY;
    if (s === "-infinity")
      return Number.NEGATIVE_INFINITY;
  }
  if (!s3.test(i)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return i;
  }
  try {
    if (i3.test(i) || n3.test(i)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(i, o3);
    }
    return JSON.parse(i);
  } catch (s) {
    if (e.strict)
      throw s;
    return i;
  }
}
function c3(i) {
  return !i || typeof i.then != "function" ? Promise.resolve(i) : i;
}
function Wt(i, ...e) {
  try {
    return c3(i(...e));
  } catch (t) {
    return Promise.reject(t);
  }
}
function u3(i) {
  const e = typeof i;
  return i === null || e !== "object" && e !== "function";
}
function h3(i) {
  const e = Object.getPrototypeOf(i);
  return !e || e.isPrototypeOf(Object);
}
function Wo(i) {
  if (u3(i))
    return String(i);
  if (h3(i) || Array.isArray(i))
    return JSON.stringify(i);
  if (typeof i.toJSON == "function")
    return Wo(i.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Ip() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Du = "base64:";
function l3(i) {
  if (typeof i == "string")
    return i;
  Ip();
  const e = Buffer.from(i).toString("base64");
  return Du + e;
}
function f3(i) {
  return typeof i != "string" || !i.startsWith(Du) ? i : (Ip(), Buffer.from(i.slice(Du.length), "base64"));
}
function wr(i) {
  return i ? i.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function d3(...i) {
  return wr(i.join(":"));
}
function Fo(i) {
  return i = wr(i), i ? i + ":" : "";
}
const p3 = "memory", g3 = () => {
  const i = /* @__PURE__ */ new Map();
  return {
    name: p3,
    options: {},
    hasItem(e) {
      return i.has(e);
    },
    getItem(e) {
      return i.get(e) ?? null;
    },
    getItemRaw(e) {
      return i.get(e) ?? null;
    },
    setItem(e, t) {
      i.set(e, t);
    },
    setItemRaw(e, t) {
      i.set(e, t);
    },
    removeItem(e) {
      i.delete(e);
    },
    getKeys() {
      return Array.from(i.keys());
    },
    clear() {
      i.clear();
    },
    dispose() {
      i.clear();
    }
  };
};
function y3(i = {}) {
  const e = {
    mounts: { "": i.driver || g3() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, t = (g) => {
    for (const m of e.mountpoints)
      if (g.startsWith(m))
        return {
          base: m,
          relativeKey: g.slice(m.length),
          driver: e.mounts[m]
        };
    return {
      base: "",
      relativeKey: g,
      driver: e.mounts[""]
    };
  }, s = (g, m) => e.mountpoints.filter(
    (D) => D.startsWith(g) || m && g.startsWith(D)
  ).map((D) => ({
    relativeBase: g.length > D.length ? g.slice(D.length) : void 0,
    mountpoint: D,
    driver: e.mounts[D]
  })), o = (g, m) => {
    if (e.watching) {
      m = wr(m);
      for (const D of e.watchListeners)
        D(g, m);
    }
  }, c = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const g in e.mounts)
        e.unwatch[g] = await $f(
          e.mounts[g],
          o,
          g
        );
    }
  }, d = async () => {
    if (e.watching) {
      for (const g in e.unwatch)
        await e.unwatch[g]();
      e.unwatch = {}, e.watching = !1;
    }
  }, f = (g, m, D) => {
    const I = /* @__PURE__ */ new Map(), T = (P) => {
      let F = I.get(P.base);
      return F || (F = {
        driver: P.driver,
        base: P.base,
        items: []
      }, I.set(P.base, F)), F;
    };
    for (const P of g) {
      const F = typeof P == "string", B = wr(F ? P : P.key), ie = F ? void 0 : P.value, L = F || !P.options ? m : { ...m, ...P.options }, j = t(B);
      T(j).items.push({
        key: B,
        value: ie,
        relativeKey: j.relativeKey,
        options: L
      });
    }
    return Promise.all([...I.values()].map((P) => D(P))).then(
      (P) => P.flat()
    );
  }, y = {
    // Item
    hasItem(g, m = {}) {
      g = wr(g);
      const { relativeKey: D, driver: I } = t(g);
      return Wt(I.hasItem, D, m);
    },
    getItem(g, m = {}) {
      g = wr(g);
      const { relativeKey: D, driver: I } = t(g);
      return Wt(I.getItem, D, m).then(
        (T) => zo(T)
      );
    },
    getItems(g, m) {
      return f(g, m, (D) => D.driver.getItems ? Wt(
        D.driver.getItems,
        D.items.map((I) => ({
          key: I.relativeKey,
          options: I.options
        })),
        m
      ).then(
        (I) => I.map((T) => ({
          key: d3(D.base, T.key),
          value: zo(T.value)
        }))
      ) : Promise.all(
        D.items.map((I) => Wt(
          D.driver.getItem,
          I.relativeKey,
          I.options
        ).then((T) => ({
          key: I.key,
          value: zo(T)
        })))
      ));
    },
    getItemRaw(g, m = {}) {
      g = wr(g);
      const { relativeKey: D, driver: I } = t(g);
      return I.getItemRaw ? Wt(I.getItemRaw, D, m) : Wt(I.getItem, D, m).then(
        (T) => f3(T)
      );
    },
    async setItem(g, m, D = {}) {
      if (m === void 0)
        return y.removeItem(g);
      g = wr(g);
      const { relativeKey: I, driver: T } = t(g);
      T.setItem && (await Wt(T.setItem, I, Wo(m), D), T.watch || o("update", g));
    },
    async setItems(g, m) {
      await f(g, m, async (D) => {
        D.driver.setItems && await Wt(
          D.driver.setItems,
          D.items.map((I) => ({
            key: I.relativeKey,
            value: Wo(I.value),
            options: I.options
          })),
          m
        ), D.driver.setItem && await Promise.all(
          D.items.map((I) => Wt(
            D.driver.setItem,
            I.relativeKey,
            Wo(I.value),
            I.options
          ))
        );
      });
    },
    async setItemRaw(g, m, D = {}) {
      if (m === void 0)
        return y.removeItem(g, D);
      g = wr(g);
      const { relativeKey: I, driver: T } = t(g);
      if (T.setItemRaw)
        await Wt(T.setItemRaw, I, m, D);
      else if (T.setItem)
        await Wt(T.setItem, I, l3(m), D);
      else
        return;
      T.watch || o("update", g);
    },
    async removeItem(g, m = {}) {
      typeof m == "boolean" && (m = { removeMeta: m }), g = wr(g);
      const { relativeKey: D, driver: I } = t(g);
      I.removeItem && (await Wt(I.removeItem, D, m), (m.removeMeta || m.removeMata) && await Wt(I.removeItem, D + "$", m), I.watch || o("remove", g));
    },
    // Meta
    async getMeta(g, m = {}) {
      typeof m == "boolean" && (m = { nativeOnly: m }), g = wr(g);
      const { relativeKey: D, driver: I } = t(g), T = /* @__PURE__ */ Object.create(null);
      if (I.getMeta && Object.assign(T, await Wt(I.getMeta, D, m)), !m.nativeOnly) {
        const P = await Wt(
          I.getItem,
          D + "$",
          m
        ).then((F) => zo(F));
        P && typeof P == "object" && (typeof P.atime == "string" && (P.atime = new Date(P.atime)), typeof P.mtime == "string" && (P.mtime = new Date(P.mtime)), Object.assign(T, P));
      }
      return T;
    },
    setMeta(g, m, D = {}) {
      return this.setItem(g + "$", m, D);
    },
    removeMeta(g, m = {}) {
      return this.removeItem(g + "$", m);
    },
    // Keys
    async getKeys(g, m = {}) {
      g = Fo(g);
      const D = s(g, !0);
      let I = [];
      const T = [];
      for (const P of D) {
        const B = (await Wt(
          P.driver.getKeys,
          P.relativeBase,
          m
        )).map((ie) => P.mountpoint + wr(ie)).filter((ie) => !I.some((L) => ie.startsWith(L)));
        T.push(...B), I = [
          P.mountpoint,
          ...I.filter((ie) => !ie.startsWith(P.mountpoint))
        ];
      }
      return g ? T.filter((P) => P.startsWith(g) && !P.endsWith("$")) : T.filter((P) => !P.endsWith("$"));
    },
    // Utils
    async clear(g, m = {}) {
      g = Fo(g), await Promise.all(
        s(g, !1).map(async (D) => {
          if (D.driver.clear)
            return Wt(D.driver.clear, D.relativeBase, m);
          if (D.driver.removeItem) {
            const I = await D.driver.getKeys(D.relativeBase || "", m);
            return Promise.all(
              I.map((T) => D.driver.removeItem(T, m))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((g) => Mf(g))
      );
    },
    async watch(g) {
      return await c(), e.watchListeners.push(g), async () => {
        e.watchListeners = e.watchListeners.filter(
          (m) => m !== g
        ), e.watchListeners.length === 0 && await d();
      };
    },
    async unwatch() {
      e.watchListeners = [], await d();
    },
    // Mount
    mount(g, m) {
      if (g = Fo(g), g && e.mounts[g])
        throw new Error(`already mounted at ${g}`);
      return g && (e.mountpoints.push(g), e.mountpoints.sort((D, I) => I.length - D.length)), e.mounts[g] = m, e.watching && Promise.resolve($f(m, o, g)).then((D) => {
        e.unwatch[g] = D;
      }).catch(console.error), y;
    },
    async unmount(g, m = !0) {
      g = Fo(g), !(!g || !e.mounts[g]) && (e.watching && g in e.unwatch && (e.unwatch[g](), delete e.unwatch[g]), m && await Mf(e.mounts[g]), e.mountpoints = e.mountpoints.filter((D) => D !== g), delete e.mounts[g]);
    },
    getMount(g = "") {
      g = wr(g) + ":";
      const m = t(g);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(g = "", m = {}) {
      return g = wr(g), s(g, m.parents).map((I) => ({
        driver: I.driver,
        base: I.mountpoint
      }));
    }
  };
  return y;
}
function $f(i, e, t) {
  return i.watch ? i.watch((s, o) => e(s, t + o)) : () => {
  };
}
async function Mf(i) {
  typeof i.dispose == "function" && await Wt(i.dispose);
}
function ln(i) {
  return new Promise((e, t) => {
    i.oncomplete = i.onsuccess = () => e(i.result), i.onabort = i.onerror = () => t(i.error);
  });
}
function xp(i, e) {
  const t = indexedDB.open(i);
  t.onupgradeneeded = () => t.result.createObjectStore(e);
  const s = ln(t);
  return (o, c) => s.then((d) => c(d.transaction(e, o).objectStore(e)));
}
let Gc;
function Ts() {
  return Gc || (Gc = xp("keyval-store", "keyval")), Gc;
}
function jf(i, e = Ts()) {
  return e("readonly", (t) => ln(t.get(i)));
}
function v3(i, e, t = Ts()) {
  return t("readwrite", (s) => (s.put(e, i), ln(s.transaction)));
}
function m3(i, e = Ts()) {
  return e("readwrite", (t) => (t.delete(i), ln(t.transaction)));
}
function w3(i = Ts()) {
  return i("readwrite", (e) => (e.clear(), ln(e.transaction)));
}
function _3(i, e) {
  return i.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, ln(i.transaction);
}
function b3(i = Ts()) {
  return i("readonly", (e) => {
    if (e.getAllKeys)
      return ln(e.getAllKeys());
    const t = [];
    return _3(e, (s) => t.push(s.key)).then(() => t);
  });
}
const E3 = (i) => JSON.stringify(i, (e, t) => typeof t == "bigint" ? t.toString() + "n" : t), D3 = (i) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, t = i.replace(e, '$1"$2n"$3');
  return JSON.parse(t, (s, o) => typeof o == "string" && o.match(/^\d+n$/) ? BigInt(o.substring(0, o.length - 1)) : o);
};
function Rs(i) {
  if (typeof i != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof i}`);
  try {
    return D3(i);
  } catch {
    return i;
  }
}
function cn(i) {
  return typeof i == "string" ? i : E3(i) || "";
}
const S3 = "idb-keyval";
var I3 = (i = {}) => {
  const e = i.base && i.base.length > 0 ? `${i.base}:` : "", t = (o) => e + o;
  let s;
  return i.dbName && i.storeName && (s = xp(i.dbName, i.storeName)), { name: S3, options: i, async hasItem(o) {
    return !(typeof await jf(t(o), s) > "u");
  }, async getItem(o) {
    return await jf(t(o), s) ?? null;
  }, setItem(o, c) {
    return v3(t(o), c, s);
  }, removeItem(o) {
    return m3(t(o), s);
  }, getKeys() {
    return b3(s);
  }, clear() {
    return w3(s);
  } };
};
const x3 = "WALLET_CONNECT_V2_INDEXED_DB", O3 = "keyvaluestorage";
let P3 = class {
  constructor() {
    this.indexedDb = y3({ driver: I3({ dbName: x3, storeName: O3 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e) => [e.key, e.value]);
  }
  async getItem(e) {
    const t = await this.indexedDb.getItem(e);
    if (t !== null)
      return t;
  }
  async setItem(e, t) {
    await this.indexedDb.setItem(e, cn(t));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var Yc = typeof globalThis < "u" ? globalThis : typeof window < "u" || typeof window < "u" ? window : typeof self < "u" ? self : {}, Go = { exports: {} };
(function() {
  let i;
  function e() {
  }
  i = e, i.prototype.getItem = function(t) {
    return this.hasOwnProperty(t) ? String(this[t]) : null;
  }, i.prototype.setItem = function(t, s) {
    this[t] = String(s);
  }, i.prototype.removeItem = function(t) {
    delete this[t];
  }, i.prototype.clear = function() {
    const t = this;
    Object.keys(t).forEach(function(s) {
      t[s] = void 0, delete t[s];
    });
  }, i.prototype.key = function(t) {
    return t = t || 0, Object.keys(this)[t];
  }, i.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof Yc < "u" && Yc.localStorage ? Go.exports = Yc.localStorage : typeof window < "u" && window.localStorage ? Go.exports = window.localStorage : Go.exports = new e();
})();
function C3(i) {
  var e;
  return [i[0], Rs((e = i[1]) != null ? e : "")];
}
class A3 {
  constructor() {
    this.localStorage = Go.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(C3);
  }
  async getItem(e) {
    const t = this.localStorage.getItem(e);
    if (t !== null)
      return Rs(t);
  }
  async setItem(e, t) {
    this.localStorage.setItem(e, cn(t));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const T3 = "wc_storage_version", qf = 1, R3 = async (i, e, t) => {
  const s = T3, o = await e.getItem(s);
  if (o && o >= qf) {
    t(e);
    return;
  }
  const c = await i.getKeys();
  if (!c.length) {
    t(e);
    return;
  }
  const d = [];
  for (; c.length; ) {
    const f = c.shift();
    if (!f)
      continue;
    const y = f.toLowerCase();
    if (y.includes("wc@") || y.includes("walletconnect") || y.includes("wc_") || y.includes("wallet_connect")) {
      const g = await i.getItem(f);
      await e.setItem(f, g), d.push(f);
    }
  }
  await e.setItem(s, qf), t(e), N3(i, d);
}, N3 = async (i, e) => {
  e.length && e.forEach(async (t) => {
    await i.removeItem(t);
  });
};
let L3 = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (t) => {
      this.storage = t, this.initialized = !0;
    };
    const e = new A3();
    this.storage = e;
    try {
      const t = new P3();
      R3(e, t, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, t) {
    return await this.initialize(), this.storage.setItem(e, t);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized || await new Promise((e) => {
      const t = setInterval(() => {
        this.initialized && (clearInterval(t), e());
      }, 20);
    });
  }
};
var Vn = {}, ps = {}, Jc = {}, gs = {};
let fn = class {
};
const U3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: fn
}, Symbol.toStringTag, { value: "Module" })), $3 = /* @__PURE__ */ ra(U3);
var zf;
function M3() {
  if (zf)
    return gs;
  zf = 1, Object.defineProperty(gs, "__esModule", { value: !0 }), gs.IHeartBeat = void 0;
  const i = $3;
  class e extends i.IEvents {
    constructor(s) {
      super();
    }
  }
  return gs.IHeartBeat = e, gs;
}
var Ff;
function Op() {
  return Ff || (Ff = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 }), si.__exportStar(M3(), i);
  }(Jc)), Jc;
}
var Qc = {}, sn = {}, Hf;
function j3() {
  if (Hf)
    return sn;
  Hf = 1, Object.defineProperty(sn, "__esModule", { value: !0 }), sn.HEARTBEAT_EVENTS = sn.HEARTBEAT_INTERVAL = void 0;
  const i = ve;
  return sn.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, sn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, sn;
}
var Bf;
function Pp() {
  return Bf || (Bf = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 }), si.__exportStar(j3(), i);
  }(Qc)), Qc;
}
var Kf;
function q3() {
  if (Kf)
    return ps;
  Kf = 1, Object.defineProperty(ps, "__esModule", { value: !0 }), ps.HeartBeat = void 0;
  const i = si, e = Ar, t = ve, s = Op(), o = Pp();
  class c extends s.IHeartBeat {
    constructor(f) {
      super(f), this.events = new e.EventEmitter(), this.interval = o.HEARTBEAT_INTERVAL, this.interval = (f == null ? void 0 : f.interval) || o.HEARTBEAT_INTERVAL;
    }
    static init(f) {
      return i.__awaiter(this, void 0, void 0, function* () {
        const y = new c(f);
        return yield y.init(), y;
      });
    }
    init() {
      return i.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(f, y) {
      this.events.on(f, y);
    }
    once(f, y) {
      this.events.once(f, y);
    }
    off(f, y) {
      this.events.off(f, y);
    }
    removeListener(f, y) {
      this.events.removeListener(f, y);
    }
    initialize() {
      return i.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), t.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(o.HEARTBEAT_EVENTS.pulse);
    }
  }
  return ps.HeartBeat = c, ps;
}
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = si;
  e.__exportStar(q3(), i), e.__exportStar(Op(), i), e.__exportStar(Pp(), i);
})(Vn);
var Je = {}, Xc, kf;
function z3() {
  if (kf)
    return Xc;
  kf = 1;
  function i(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return '"[Circular]"';
    }
  }
  Xc = e;
  function e(t, s, o) {
    var c = o && o.stringify || i, d = 1;
    if (typeof t == "object" && t !== null) {
      var f = s.length + d;
      if (f === 1)
        return t;
      var y = new Array(f);
      y[0] = c(t);
      for (var g = 1; g < f; g++)
        y[g] = c(s[g]);
      return y.join(" ");
    }
    if (typeof t != "string")
      return t;
    var m = s.length;
    if (m === 0)
      return t;
    for (var D = "", I = 1 - d, T = -1, P = t && t.length || 0, F = 0; F < P; ) {
      if (t.charCodeAt(F) === 37 && F + 1 < P) {
        switch (T = T > -1 ? T : 0, t.charCodeAt(F + 1)) {
          case 100:
          case 102:
            if (I >= m || s[I] == null)
              break;
            T < F && (D += t.slice(T, F)), D += Number(s[I]), T = F + 2, F++;
            break;
          case 105:
            if (I >= m || s[I] == null)
              break;
            T < F && (D += t.slice(T, F)), D += Math.floor(Number(s[I])), T = F + 2, F++;
            break;
          case 79:
          case 111:
          case 106:
            if (I >= m || s[I] === void 0)
              break;
            T < F && (D += t.slice(T, F));
            var B = typeof s[I];
            if (B === "string") {
              D += "'" + s[I] + "'", T = F + 2, F++;
              break;
            }
            if (B === "function") {
              D += s[I].name || "<anonymous>", T = F + 2, F++;
              break;
            }
            D += c(s[I]), T = F + 2, F++;
            break;
          case 115:
            if (I >= m)
              break;
            T < F && (D += t.slice(T, F)), D += String(s[I]), T = F + 2, F++;
            break;
          case 37:
            T < F && (D += t.slice(T, F)), D += "%", T = F + 2, F++, I--;
            break;
        }
        ++I;
      }
      ++F;
    }
    return T === -1 ? t : (T < P && (D += t.slice(T)), D);
  }
  return Xc;
}
var Zc, Vf;
function F3() {
  if (Vf)
    return Zc;
  Vf = 1;
  const i = z3();
  Zc = o;
  const e = A().console || {}, t = {
    mapHttpRequest: P,
    mapHttpResponse: P,
    wrapRequestSerializer: F,
    wrapResponseSerializer: F,
    wrapErrorSerializer: F,
    req: P,
    res: P,
    err: I
  };
  function s(E, u) {
    return Array.isArray(E) ? E.filter(function(W) {
      return W !== "!stdSerializers.err";
    }) : E === !0 ? Object.keys(u) : !1;
  }
  function o(E) {
    E = E || {}, E.browser = E.browser || {};
    const u = E.browser.transmit;
    if (u && typeof u.send != "function")
      throw Error("pino: transmit option must have a send function");
    const _ = E.browser.write || e;
    E.browser.write && (E.browser.asObject = !0);
    const W = E.serializers || {}, G = s(E.browser.serialize, W);
    let se = E.browser.serialize;
    Array.isArray(E.browser.serialize) && E.browser.serialize.indexOf("!stdSerializers.err") > -1 && (se = !1);
    const ue = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof _ == "function" && (_.error = _.fatal = _.warn = _.info = _.debug = _.trace = _), E.enabled === !1 && (E.level = "silent");
    const de = E.level || "info", b = Object.create(_);
    b.log || (b.log = B), Object.defineProperty(b, "levelVal", {
      get: ee
    }), Object.defineProperty(b, "level", {
      get: Q,
      set: k
    });
    const C = {
      transmit: u,
      serialize: G,
      asObject: E.browser.asObject,
      levels: ue,
      timestamp: T(E)
    };
    b.levels = o.levels, b.level = de, b.setMaxListeners = b.getMaxListeners = b.emit = b.addListener = b.on = b.prependListener = b.once = b.prependOnceListener = b.removeListener = b.removeAllListeners = b.listeners = b.listenerCount = b.eventNames = b.write = b.flush = B, b.serializers = W, b._serialize = G, b._stdErrSerialize = se, b.child = V, u && (b._logEvent = D());
    function ee() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function Q() {
      return this._level;
    }
    function k(J) {
      if (J !== "silent" && !this.levels.values[J])
        throw Error("unknown level " + J);
      this._level = J, c(C, b, "error", "log"), c(C, b, "fatal", "error"), c(C, b, "warn", "error"), c(C, b, "info", "log"), c(C, b, "debug", "log"), c(C, b, "trace", "log");
    }
    function V(J, re) {
      if (!J)
        throw new Error("missing bindings for child Pino");
      re = re || {}, G && J.serializers && (re.serializers = J.serializers);
      const _e = re.serializers;
      if (G && _e) {
        var oe = Object.assign({}, W, _e), be = E.browser.serialize === !0 ? Object.keys(oe) : G;
        delete J.serializers, y([J], be, oe, this._stdErrSerialize);
      }
      function le(me) {
        this._childLevel = (me._childLevel | 0) + 1, this.error = g(me, J, "error"), this.fatal = g(me, J, "fatal"), this.warn = g(me, J, "warn"), this.info = g(me, J, "info"), this.debug = g(me, J, "debug"), this.trace = g(me, J, "trace"), oe && (this.serializers = oe, this._serialize = be), u && (this._logEvent = D(
          [].concat(me._logEvent.bindings, J)
        ));
      }
      return le.prototype = this, new le(this);
    }
    return b;
  }
  o.levels = {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  }, o.stdSerializers = t, o.stdTimeFunctions = Object.assign({}, { nullTime: ie, epochTime: L, unixTime: j, isoTime: O });
  function c(E, u, _, W) {
    const G = Object.getPrototypeOf(u);
    u[_] = u.levelVal > u.levels.values[_] ? B : G[_] ? G[_] : e[_] || e[W] || B, d(E, u, _);
  }
  function d(E, u, _) {
    !E.transmit && u[_] === B || (u[_] = /* @__PURE__ */ function(W) {
      return function() {
        const se = E.timestamp(), ue = new Array(arguments.length), de = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var b = 0; b < ue.length; b++)
          ue[b] = arguments[b];
        if (E.serialize && !E.asObject && y(ue, this._serialize, this.serializers, this._stdErrSerialize), E.asObject ? W.call(de, f(this, _, ue, se)) : W.apply(de, ue), E.transmit) {
          const C = E.transmit.level || u.level, ee = o.levels.values[C], Q = o.levels.values[_];
          if (Q < ee)
            return;
          m(this, {
            ts: se,
            methodLevel: _,
            methodValue: Q,
            transmitLevel: C,
            transmitValue: o.levels.values[E.transmit.level || u.level],
            send: E.transmit.send,
            val: u.levelVal
          }, ue);
        }
      };
    }(u[_]));
  }
  function f(E, u, _, W) {
    E._serialize && y(_, E._serialize, E.serializers, E._stdErrSerialize);
    const G = _.slice();
    let se = G[0];
    const ue = {};
    W && (ue.time = W), ue.level = o.levels.values[u];
    let de = (E._childLevel | 0) + 1;
    if (de < 1 && (de = 1), se !== null && typeof se == "object") {
      for (; de-- && typeof G[0] == "object"; )
        Object.assign(ue, G.shift());
      se = G.length ? i(G.shift(), G) : void 0;
    } else
      typeof se == "string" && (se = i(G.shift(), G));
    return se !== void 0 && (ue.msg = se), ue;
  }
  function y(E, u, _, W) {
    for (const G in E)
      if (W && E[G] instanceof Error)
        E[G] = o.stdSerializers.err(E[G]);
      else if (typeof E[G] == "object" && !Array.isArray(E[G]))
        for (const se in E[G])
          u && u.indexOf(se) > -1 && se in _ && (E[G][se] = _[se](E[G][se]));
  }
  function g(E, u, _) {
    return function() {
      const W = new Array(1 + arguments.length);
      W[0] = u;
      for (var G = 1; G < W.length; G++)
        W[G] = arguments[G - 1];
      return E[_].apply(this, W);
    };
  }
  function m(E, u, _) {
    const W = u.send, G = u.ts, se = u.methodLevel, ue = u.methodValue, de = u.val, b = E._logEvent.bindings;
    y(
      _,
      E._serialize || Object.keys(E.serializers),
      E.serializers,
      E._stdErrSerialize === void 0 ? !0 : E._stdErrSerialize
    ), E._logEvent.ts = G, E._logEvent.messages = _.filter(function(C) {
      return b.indexOf(C) === -1;
    }), E._logEvent.level.label = se, E._logEvent.level.value = ue, W(se, E._logEvent, de), E._logEvent = D(b);
  }
  function D(E) {
    return {
      ts: 0,
      messages: [],
      bindings: E || [],
      level: { label: "", value: 0 }
    };
  }
  function I(E) {
    const u = {
      type: E.constructor.name,
      msg: E.message,
      stack: E.stack
    };
    for (const _ in E)
      u[_] === void 0 && (u[_] = E[_]);
    return u;
  }
  function T(E) {
    return typeof E.timestamp == "function" ? E.timestamp : E.timestamp === !1 ? ie : L;
  }
  function P() {
    return {};
  }
  function F(E) {
    return E;
  }
  function B() {
  }
  function ie() {
    return !1;
  }
  function L() {
    return Date.now();
  }
  function j() {
    return Math.round(Date.now() / 1e3);
  }
  function O() {
    return new Date(Date.now()).toISOString();
  }
  function A() {
    function E(u) {
      return typeof u < "u" && u;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return E(self) || E(window) || E(this) || {};
    }
  }
  return Zc;
}
var on = {}, Wf;
function Cp() {
  return Wf || (Wf = 1, Object.defineProperty(on, "__esModule", { value: !0 }), on.PINO_CUSTOM_CONTEXT_KEY = on.PINO_LOGGER_DEFAULTS = void 0, on.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, on.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), on;
}
var cr = {}, Gf;
function H3() {
  if (Gf)
    return cr;
  Gf = 1, Object.defineProperty(cr, "__esModule", { value: !0 }), cr.generateChildLogger = cr.formatChildLoggerContext = cr.getLoggerContext = cr.setBrowserLoggerContext = cr.getBrowserLoggerContext = cr.getDefaultLoggerOptions = void 0;
  const i = Cp();
  function e(f) {
    return Object.assign(Object.assign({}, f), { level: (f == null ? void 0 : f.level) || i.PINO_LOGGER_DEFAULTS.level });
  }
  cr.getDefaultLoggerOptions = e;
  function t(f, y = i.PINO_CUSTOM_CONTEXT_KEY) {
    return f[y] || "";
  }
  cr.getBrowserLoggerContext = t;
  function s(f, y, g = i.PINO_CUSTOM_CONTEXT_KEY) {
    return f[g] = y, f;
  }
  cr.setBrowserLoggerContext = s;
  function o(f, y = i.PINO_CUSTOM_CONTEXT_KEY) {
    let g = "";
    return typeof f.bindings > "u" ? g = t(f, y) : g = f.bindings().context || "", g;
  }
  cr.getLoggerContext = o;
  function c(f, y, g = i.PINO_CUSTOM_CONTEXT_KEY) {
    const m = o(f, g);
    return m.trim() ? `${m}/${y}` : y;
  }
  cr.formatChildLoggerContext = c;
  function d(f, y, g = i.PINO_CUSTOM_CONTEXT_KEY) {
    const m = c(f, y, g), D = f.child({ context: m });
    return s(D, m, g);
  }
  return cr.generateChildLogger = d, cr;
}
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 }), i.pino = void 0;
  const e = si, t = e.__importDefault(F3());
  Object.defineProperty(i, "pino", { enumerable: !0, get: function() {
    return t.default;
  } }), e.__exportStar(Cp(), i), e.__exportStar(H3(), i);
})(Je);
class B3 extends fn {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
let K3 = class extends fn {
  constructor(e, t) {
    super(), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
}, k3 = class {
  constructor(e, t) {
    this.logger = e, this.core = t;
  }
}, V3 = class extends fn {
  constructor(e, t) {
    super(), this.relayer = e, this.logger = t;
  }
}, W3 = class extends fn {
  constructor(e) {
    super();
  }
}, G3 = class {
  constructor(e, t, s, o) {
    this.core = e, this.logger = t, this.name = s;
  }
};
class Y3 extends fn {
  constructor(e, t) {
    super(), this.relayer = e, this.logger = t;
  }
}
let J3 = class extends fn {
  constructor(e, t) {
    super(), this.core = e, this.logger = t;
  }
}, Q3 = class {
  constructor(e, t) {
    this.projectId = e, this.logger = t;
  }
}, X3 = class {
  constructor(e, t) {
    this.projectId = e, this.logger = t;
  }
}, Z3 = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, eS = class {
  constructor(e) {
    this.client = e;
  }
};
var ku = {}, Ap = {};
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = $e, t = Tr;
  i.DIGEST_LENGTH = 64, i.BLOCK_SIZE = 128;
  var s = (
    /** @class */
    function() {
      function f() {
        this.digestLength = i.DIGEST_LENGTH, this.blockSize = i.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return f.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, f.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, f.prototype.clean = function() {
        t.wipe(this._buffer), t.wipe(this._tempHi), t.wipe(this._tempLo), this.reset();
      }, f.prototype.update = function(y, g) {
        if (g === void 0 && (g = y.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var m = 0;
        if (this._bytesHashed += g, this._bufferLength > 0) {
          for (; this._bufferLength < i.BLOCK_SIZE && g > 0; )
            this._buffer[this._bufferLength++] = y[m++], g--;
          this._bufferLength === this.blockSize && (c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (g >= this.blockSize && (m = c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, y, m, g), g %= this.blockSize); g > 0; )
          this._buffer[this._bufferLength++] = y[m++], g--;
        return this;
      }, f.prototype.finish = function(y) {
        if (!this._finished) {
          var g = this._bytesHashed, m = this._bufferLength, D = g / 536870912 | 0, I = g << 3, T = g % 128 < 112 ? 128 : 256;
          this._buffer[m] = 128;
          for (var P = m + 1; P < T - 8; P++)
            this._buffer[P] = 0;
          e.writeUint32BE(D, this._buffer, T - 8), e.writeUint32BE(I, this._buffer, T - 4), c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, T), this._finished = !0;
        }
        for (var P = 0; P < this.digestLength / 8; P++)
          e.writeUint32BE(this._stateHi[P], y, P * 8), e.writeUint32BE(this._stateLo[P], y, P * 8 + 4);
        return this;
      }, f.prototype.digest = function() {
        var y = new Uint8Array(this.digestLength);
        return this.finish(y), y;
      }, f.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, f.prototype.restoreState = function(y) {
        return this._stateHi.set(y.stateHi), this._stateLo.set(y.stateLo), this._bufferLength = y.bufferLength, y.buffer && this._buffer.set(y.buffer), this._bytesHashed = y.bytesHashed, this._finished = !1, this;
      }, f.prototype.cleanSavedState = function(y) {
        t.wipe(y.stateHi), t.wipe(y.stateLo), y.buffer && t.wipe(y.buffer), y.bufferLength = 0, y.bytesHashed = 0;
      }, f;
    }()
  );
  i.SHA512 = s;
  var o = new Int32Array([
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ]);
  function c(f, y, g, m, D, I, T) {
    for (var P = g[0], F = g[1], B = g[2], ie = g[3], L = g[4], j = g[5], O = g[6], A = g[7], E = m[0], u = m[1], _ = m[2], W = m[3], G = m[4], se = m[5], ue = m[6], de = m[7], b, C, ee, Q, k, V, J, re; T >= 128; ) {
      for (var _e = 0; _e < 16; _e++) {
        var oe = 8 * _e + I;
        f[_e] = e.readUint32BE(D, oe), y[_e] = e.readUint32BE(D, oe + 4);
      }
      for (var _e = 0; _e < 80; _e++) {
        var be = P, le = F, me = B, H = ie, z = L, U = j, l = O, R = A, ae = E, fe = u, Ie = _, He = W, ke = G, Me = se, gt = ue, yt = de;
        if (b = A, C = de, k = C & 65535, V = C >>> 16, J = b & 65535, re = b >>> 16, b = (L >>> 14 | G << 18) ^ (L >>> 18 | G << 14) ^ (G >>> 9 | L << 23), C = (G >>> 14 | L << 18) ^ (G >>> 18 | L << 14) ^ (L >>> 9 | G << 23), k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, b = L & j ^ ~L & O, C = G & se ^ ~G & ue, k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, b = o[_e * 2], C = o[_e * 2 + 1], k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, b = f[_e % 16], C = y[_e % 16], k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, ee = J & 65535 | re << 16, Q = k & 65535 | V << 16, b = ee, C = Q, k = C & 65535, V = C >>> 16, J = b & 65535, re = b >>> 16, b = (P >>> 28 | E << 4) ^ (E >>> 2 | P << 30) ^ (E >>> 7 | P << 25), C = (E >>> 28 | P << 4) ^ (P >>> 2 | E << 30) ^ (P >>> 7 | E << 25), k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, b = P & F ^ P & B ^ F & B, C = E & u ^ E & _ ^ u & _, k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, R = J & 65535 | re << 16, yt = k & 65535 | V << 16, b = H, C = He, k = C & 65535, V = C >>> 16, J = b & 65535, re = b >>> 16, b = ee, C = Q, k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, H = J & 65535 | re << 16, He = k & 65535 | V << 16, F = be, B = le, ie = me, L = H, j = z, O = U, A = l, P = R, u = ae, _ = fe, W = Ie, G = He, se = ke, ue = Me, de = gt, E = yt, _e % 16 === 15)
          for (var oe = 0; oe < 16; oe++)
            b = f[oe], C = y[oe], k = C & 65535, V = C >>> 16, J = b & 65535, re = b >>> 16, b = f[(oe + 9) % 16], C = y[(oe + 9) % 16], k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, ee = f[(oe + 1) % 16], Q = y[(oe + 1) % 16], b = (ee >>> 1 | Q << 31) ^ (ee >>> 8 | Q << 24) ^ ee >>> 7, C = (Q >>> 1 | ee << 31) ^ (Q >>> 8 | ee << 24) ^ (Q >>> 7 | ee << 25), k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, ee = f[(oe + 14) % 16], Q = y[(oe + 14) % 16], b = (ee >>> 19 | Q << 13) ^ (Q >>> 29 | ee << 3) ^ ee >>> 6, C = (Q >>> 19 | ee << 13) ^ (ee >>> 29 | Q << 3) ^ (Q >>> 6 | ee << 26), k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, f[oe] = J & 65535 | re << 16, y[oe] = k & 65535 | V << 16;
      }
      b = P, C = E, k = C & 65535, V = C >>> 16, J = b & 65535, re = b >>> 16, b = g[0], C = m[0], k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, g[0] = P = J & 65535 | re << 16, m[0] = E = k & 65535 | V << 16, b = F, C = u, k = C & 65535, V = C >>> 16, J = b & 65535, re = b >>> 16, b = g[1], C = m[1], k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, g[1] = F = J & 65535 | re << 16, m[1] = u = k & 65535 | V << 16, b = B, C = _, k = C & 65535, V = C >>> 16, J = b & 65535, re = b >>> 16, b = g[2], C = m[2], k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, g[2] = B = J & 65535 | re << 16, m[2] = _ = k & 65535 | V << 16, b = ie, C = W, k = C & 65535, V = C >>> 16, J = b & 65535, re = b >>> 16, b = g[3], C = m[3], k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, g[3] = ie = J & 65535 | re << 16, m[3] = W = k & 65535 | V << 16, b = L, C = G, k = C & 65535, V = C >>> 16, J = b & 65535, re = b >>> 16, b = g[4], C = m[4], k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, g[4] = L = J & 65535 | re << 16, m[4] = G = k & 65535 | V << 16, b = j, C = se, k = C & 65535, V = C >>> 16, J = b & 65535, re = b >>> 16, b = g[5], C = m[5], k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, g[5] = j = J & 65535 | re << 16, m[5] = se = k & 65535 | V << 16, b = O, C = ue, k = C & 65535, V = C >>> 16, J = b & 65535, re = b >>> 16, b = g[6], C = m[6], k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, g[6] = O = J & 65535 | re << 16, m[6] = ue = k & 65535 | V << 16, b = A, C = de, k = C & 65535, V = C >>> 16, J = b & 65535, re = b >>> 16, b = g[7], C = m[7], k += C & 65535, V += C >>> 16, J += b & 65535, re += b >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, g[7] = A = J & 65535 | re << 16, m[7] = de = k & 65535 | V << 16, I += 128, T -= 128;
    }
    return I;
  }
  function d(f) {
    var y = new s();
    y.update(f);
    var g = y.digest();
    return y.clean(), g;
  }
  i.hash = d;
})(Ap);
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 }), i.convertSecretKeyToX25519 = i.convertPublicKeyToX25519 = i.verify = i.sign = i.extractPublicKeyFromSecretKey = i.generateKeyPair = i.generateKeyPairFromSeed = i.SEED_LENGTH = i.SECRET_KEY_LENGTH = i.PUBLIC_KEY_LENGTH = i.SIGNATURE_LENGTH = void 0;
  const e = Fn, t = Ap, s = Tr;
  i.SIGNATURE_LENGTH = 64, i.PUBLIC_KEY_LENGTH = 32, i.SECRET_KEY_LENGTH = 64, i.SEED_LENGTH = 32;
  function o(H) {
    const z = new Float64Array(16);
    if (H)
      for (let U = 0; U < H.length; U++)
        z[U] = H[U];
    return z;
  }
  const c = new Uint8Array(32);
  c[0] = 9;
  const d = o(), f = o([1]), y = o([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]), g = o([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]), m = o([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]), D = o([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]), I = o([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function T(H, z) {
    for (let U = 0; U < 16; U++)
      H[U] = z[U] | 0;
  }
  function P(H) {
    let z = 1;
    for (let U = 0; U < 16; U++) {
      let l = H[U] + z + 65535;
      z = Math.floor(l / 65536), H[U] = l - z * 65536;
    }
    H[0] += z - 1 + 37 * (z - 1);
  }
  function F(H, z, U) {
    const l = ~(U - 1);
    for (let R = 0; R < 16; R++) {
      const ae = l & (H[R] ^ z[R]);
      H[R] ^= ae, z[R] ^= ae;
    }
  }
  function B(H, z) {
    const U = o(), l = o();
    for (let R = 0; R < 16; R++)
      l[R] = z[R];
    P(l), P(l), P(l);
    for (let R = 0; R < 2; R++) {
      U[0] = l[0] - 65517;
      for (let fe = 1; fe < 15; fe++)
        U[fe] = l[fe] - 65535 - (U[fe - 1] >> 16 & 1), U[fe - 1] &= 65535;
      U[15] = l[15] - 32767 - (U[14] >> 16 & 1);
      const ae = U[15] >> 16 & 1;
      U[14] &= 65535, F(l, U, 1 - ae);
    }
    for (let R = 0; R < 16; R++)
      H[2 * R] = l[R] & 255, H[2 * R + 1] = l[R] >> 8;
  }
  function ie(H, z) {
    let U = 0;
    for (let l = 0; l < 32; l++)
      U |= H[l] ^ z[l];
    return (1 & U - 1 >>> 8) - 1;
  }
  function L(H, z) {
    const U = new Uint8Array(32), l = new Uint8Array(32);
    return B(U, H), B(l, z), ie(U, l);
  }
  function j(H) {
    const z = new Uint8Array(32);
    return B(z, H), z[0] & 1;
  }
  function O(H, z) {
    for (let U = 0; U < 16; U++)
      H[U] = z[2 * U] + (z[2 * U + 1] << 8);
    H[15] &= 32767;
  }
  function A(H, z, U) {
    for (let l = 0; l < 16; l++)
      H[l] = z[l] + U[l];
  }
  function E(H, z, U) {
    for (let l = 0; l < 16; l++)
      H[l] = z[l] - U[l];
  }
  function u(H, z, U) {
    let l, R, ae = 0, fe = 0, Ie = 0, He = 0, ke = 0, Me = 0, gt = 0, yt = 0, qe = 0, xe = 0, Ne = 0, Le = 0, ze = 0, Pe = 0, Ue = 0, Se = 0, Ce = 0, Be = 0, Oe = 0, Ve = 0, Ge = 0, et = 0, tt = 0, Qe = 0, rr = 0, dr = 0, Jr = 0, ir = 0, oi = 0, xi = 0, Hi = 0, St = U[0], vt = U[1], It = U[2], xt = U[3], Et = U[4], mt = U[5], $t = U[6], Mt = U[7], Ot = U[8], jt = U[9], Pt = U[10], Tt = U[11], Ct = U[12], lt = U[13], qt = U[14], zt = U[15];
    l = z[0], ae += l * St, fe += l * vt, Ie += l * It, He += l * xt, ke += l * Et, Me += l * mt, gt += l * $t, yt += l * Mt, qe += l * Ot, xe += l * jt, Ne += l * Pt, Le += l * Tt, ze += l * Ct, Pe += l * lt, Ue += l * qt, Se += l * zt, l = z[1], fe += l * St, Ie += l * vt, He += l * It, ke += l * xt, Me += l * Et, gt += l * mt, yt += l * $t, qe += l * Mt, xe += l * Ot, Ne += l * jt, Le += l * Pt, ze += l * Tt, Pe += l * Ct, Ue += l * lt, Se += l * qt, Ce += l * zt, l = z[2], Ie += l * St, He += l * vt, ke += l * It, Me += l * xt, gt += l * Et, yt += l * mt, qe += l * $t, xe += l * Mt, Ne += l * Ot, Le += l * jt, ze += l * Pt, Pe += l * Tt, Ue += l * Ct, Se += l * lt, Ce += l * qt, Be += l * zt, l = z[3], He += l * St, ke += l * vt, Me += l * It, gt += l * xt, yt += l * Et, qe += l * mt, xe += l * $t, Ne += l * Mt, Le += l * Ot, ze += l * jt, Pe += l * Pt, Ue += l * Tt, Se += l * Ct, Ce += l * lt, Be += l * qt, Oe += l * zt, l = z[4], ke += l * St, Me += l * vt, gt += l * It, yt += l * xt, qe += l * Et, xe += l * mt, Ne += l * $t, Le += l * Mt, ze += l * Ot, Pe += l * jt, Ue += l * Pt, Se += l * Tt, Ce += l * Ct, Be += l * lt, Oe += l * qt, Ve += l * zt, l = z[5], Me += l * St, gt += l * vt, yt += l * It, qe += l * xt, xe += l * Et, Ne += l * mt, Le += l * $t, ze += l * Mt, Pe += l * Ot, Ue += l * jt, Se += l * Pt, Ce += l * Tt, Be += l * Ct, Oe += l * lt, Ve += l * qt, Ge += l * zt, l = z[6], gt += l * St, yt += l * vt, qe += l * It, xe += l * xt, Ne += l * Et, Le += l * mt, ze += l * $t, Pe += l * Mt, Ue += l * Ot, Se += l * jt, Ce += l * Pt, Be += l * Tt, Oe += l * Ct, Ve += l * lt, Ge += l * qt, et += l * zt, l = z[7], yt += l * St, qe += l * vt, xe += l * It, Ne += l * xt, Le += l * Et, ze += l * mt, Pe += l * $t, Ue += l * Mt, Se += l * Ot, Ce += l * jt, Be += l * Pt, Oe += l * Tt, Ve += l * Ct, Ge += l * lt, et += l * qt, tt += l * zt, l = z[8], qe += l * St, xe += l * vt, Ne += l * It, Le += l * xt, ze += l * Et, Pe += l * mt, Ue += l * $t, Se += l * Mt, Ce += l * Ot, Be += l * jt, Oe += l * Pt, Ve += l * Tt, Ge += l * Ct, et += l * lt, tt += l * qt, Qe += l * zt, l = z[9], xe += l * St, Ne += l * vt, Le += l * It, ze += l * xt, Pe += l * Et, Ue += l * mt, Se += l * $t, Ce += l * Mt, Be += l * Ot, Oe += l * jt, Ve += l * Pt, Ge += l * Tt, et += l * Ct, tt += l * lt, Qe += l * qt, rr += l * zt, l = z[10], Ne += l * St, Le += l * vt, ze += l * It, Pe += l * xt, Ue += l * Et, Se += l * mt, Ce += l * $t, Be += l * Mt, Oe += l * Ot, Ve += l * jt, Ge += l * Pt, et += l * Tt, tt += l * Ct, Qe += l * lt, rr += l * qt, dr += l * zt, l = z[11], Le += l * St, ze += l * vt, Pe += l * It, Ue += l * xt, Se += l * Et, Ce += l * mt, Be += l * $t, Oe += l * Mt, Ve += l * Ot, Ge += l * jt, et += l * Pt, tt += l * Tt, Qe += l * Ct, rr += l * lt, dr += l * qt, Jr += l * zt, l = z[12], ze += l * St, Pe += l * vt, Ue += l * It, Se += l * xt, Ce += l * Et, Be += l * mt, Oe += l * $t, Ve += l * Mt, Ge += l * Ot, et += l * jt, tt += l * Pt, Qe += l * Tt, rr += l * Ct, dr += l * lt, Jr += l * qt, ir += l * zt, l = z[13], Pe += l * St, Ue += l * vt, Se += l * It, Ce += l * xt, Be += l * Et, Oe += l * mt, Ve += l * $t, Ge += l * Mt, et += l * Ot, tt += l * jt, Qe += l * Pt, rr += l * Tt, dr += l * Ct, Jr += l * lt, ir += l * qt, oi += l * zt, l = z[14], Ue += l * St, Se += l * vt, Ce += l * It, Be += l * xt, Oe += l * Et, Ve += l * mt, Ge += l * $t, et += l * Mt, tt += l * Ot, Qe += l * jt, rr += l * Pt, dr += l * Tt, Jr += l * Ct, ir += l * lt, oi += l * qt, xi += l * zt, l = z[15], Se += l * St, Ce += l * vt, Be += l * It, Oe += l * xt, Ve += l * Et, Ge += l * mt, et += l * $t, tt += l * Mt, Qe += l * Ot, rr += l * jt, dr += l * Pt, Jr += l * Tt, ir += l * Ct, oi += l * lt, xi += l * qt, Hi += l * zt, ae += 38 * Ce, fe += 38 * Be, Ie += 38 * Oe, He += 38 * Ve, ke += 38 * Ge, Me += 38 * et, gt += 38 * tt, yt += 38 * Qe, qe += 38 * rr, xe += 38 * dr, Ne += 38 * Jr, Le += 38 * ir, ze += 38 * oi, Pe += 38 * xi, Ue += 38 * Hi, R = 1, l = ae + R + 65535, R = Math.floor(l / 65536), ae = l - R * 65536, l = fe + R + 65535, R = Math.floor(l / 65536), fe = l - R * 65536, l = Ie + R + 65535, R = Math.floor(l / 65536), Ie = l - R * 65536, l = He + R + 65535, R = Math.floor(l / 65536), He = l - R * 65536, l = ke + R + 65535, R = Math.floor(l / 65536), ke = l - R * 65536, l = Me + R + 65535, R = Math.floor(l / 65536), Me = l - R * 65536, l = gt + R + 65535, R = Math.floor(l / 65536), gt = l - R * 65536, l = yt + R + 65535, R = Math.floor(l / 65536), yt = l - R * 65536, l = qe + R + 65535, R = Math.floor(l / 65536), qe = l - R * 65536, l = xe + R + 65535, R = Math.floor(l / 65536), xe = l - R * 65536, l = Ne + R + 65535, R = Math.floor(l / 65536), Ne = l - R * 65536, l = Le + R + 65535, R = Math.floor(l / 65536), Le = l - R * 65536, l = ze + R + 65535, R = Math.floor(l / 65536), ze = l - R * 65536, l = Pe + R + 65535, R = Math.floor(l / 65536), Pe = l - R * 65536, l = Ue + R + 65535, R = Math.floor(l / 65536), Ue = l - R * 65536, l = Se + R + 65535, R = Math.floor(l / 65536), Se = l - R * 65536, ae += R - 1 + 37 * (R - 1), R = 1, l = ae + R + 65535, R = Math.floor(l / 65536), ae = l - R * 65536, l = fe + R + 65535, R = Math.floor(l / 65536), fe = l - R * 65536, l = Ie + R + 65535, R = Math.floor(l / 65536), Ie = l - R * 65536, l = He + R + 65535, R = Math.floor(l / 65536), He = l - R * 65536, l = ke + R + 65535, R = Math.floor(l / 65536), ke = l - R * 65536, l = Me + R + 65535, R = Math.floor(l / 65536), Me = l - R * 65536, l = gt + R + 65535, R = Math.floor(l / 65536), gt = l - R * 65536, l = yt + R + 65535, R = Math.floor(l / 65536), yt = l - R * 65536, l = qe + R + 65535, R = Math.floor(l / 65536), qe = l - R * 65536, l = xe + R + 65535, R = Math.floor(l / 65536), xe = l - R * 65536, l = Ne + R + 65535, R = Math.floor(l / 65536), Ne = l - R * 65536, l = Le + R + 65535, R = Math.floor(l / 65536), Le = l - R * 65536, l = ze + R + 65535, R = Math.floor(l / 65536), ze = l - R * 65536, l = Pe + R + 65535, R = Math.floor(l / 65536), Pe = l - R * 65536, l = Ue + R + 65535, R = Math.floor(l / 65536), Ue = l - R * 65536, l = Se + R + 65535, R = Math.floor(l / 65536), Se = l - R * 65536, ae += R - 1 + 37 * (R - 1), H[0] = ae, H[1] = fe, H[2] = Ie, H[3] = He, H[4] = ke, H[5] = Me, H[6] = gt, H[7] = yt, H[8] = qe, H[9] = xe, H[10] = Ne, H[11] = Le, H[12] = ze, H[13] = Pe, H[14] = Ue, H[15] = Se;
  }
  function _(H, z) {
    u(H, z, z);
  }
  function W(H, z) {
    const U = o();
    let l;
    for (l = 0; l < 16; l++)
      U[l] = z[l];
    for (l = 253; l >= 0; l--)
      _(U, U), l !== 2 && l !== 4 && u(U, U, z);
    for (l = 0; l < 16; l++)
      H[l] = U[l];
  }
  function G(H, z) {
    const U = o();
    let l;
    for (l = 0; l < 16; l++)
      U[l] = z[l];
    for (l = 250; l >= 0; l--)
      _(U, U), l !== 1 && u(U, U, z);
    for (l = 0; l < 16; l++)
      H[l] = U[l];
  }
  function se(H, z) {
    const U = o(), l = o(), R = o(), ae = o(), fe = o(), Ie = o(), He = o(), ke = o(), Me = o();
    E(U, H[1], H[0]), E(Me, z[1], z[0]), u(U, U, Me), A(l, H[0], H[1]), A(Me, z[0], z[1]), u(l, l, Me), u(R, H[3], z[3]), u(R, R, g), u(ae, H[2], z[2]), A(ae, ae, ae), E(fe, l, U), E(Ie, ae, R), A(He, ae, R), A(ke, l, U), u(H[0], fe, Ie), u(H[1], ke, He), u(H[2], He, Ie), u(H[3], fe, ke);
  }
  function ue(H, z, U) {
    for (let l = 0; l < 4; l++)
      F(H[l], z[l], U);
  }
  function de(H, z) {
    const U = o(), l = o(), R = o();
    W(R, z[2]), u(U, z[0], R), u(l, z[1], R), B(H, l), H[31] ^= j(U) << 7;
  }
  function b(H, z, U) {
    T(H[0], d), T(H[1], f), T(H[2], f), T(H[3], d);
    for (let l = 255; l >= 0; --l) {
      const R = U[l / 8 | 0] >> (l & 7) & 1;
      ue(H, z, R), se(z, H), se(H, H), ue(H, z, R);
    }
  }
  function C(H, z) {
    const U = [o(), o(), o(), o()];
    T(U[0], m), T(U[1], D), T(U[2], f), u(U[3], m, D), b(H, U, z);
  }
  function ee(H) {
    if (H.length !== i.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${i.SEED_LENGTH} bytes`);
    const z = (0, t.hash)(H);
    z[0] &= 248, z[31] &= 127, z[31] |= 64;
    const U = new Uint8Array(32), l = [o(), o(), o(), o()];
    C(l, z), de(U, l);
    const R = new Uint8Array(64);
    return R.set(H), R.set(U, 32), {
      publicKey: U,
      secretKey: R
    };
  }
  i.generateKeyPairFromSeed = ee;
  function Q(H) {
    const z = (0, e.randomBytes)(32, H), U = ee(z);
    return (0, s.wipe)(z), U;
  }
  i.generateKeyPair = Q;
  function k(H) {
    if (H.length !== i.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${i.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(H.subarray(32));
  }
  i.extractPublicKeyFromSecretKey = k;
  const V = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ]);
  function J(H, z) {
    let U, l, R, ae;
    for (l = 63; l >= 32; --l) {
      for (U = 0, R = l - 32, ae = l - 12; R < ae; ++R)
        z[R] += U - 16 * z[l] * V[R - (l - 32)], U = Math.floor((z[R] + 128) / 256), z[R] -= U * 256;
      z[R] += U, z[l] = 0;
    }
    for (U = 0, R = 0; R < 32; R++)
      z[R] += U - (z[31] >> 4) * V[R], U = z[R] >> 8, z[R] &= 255;
    for (R = 0; R < 32; R++)
      z[R] -= U * V[R];
    for (l = 0; l < 32; l++)
      z[l + 1] += z[l] >> 8, H[l] = z[l] & 255;
  }
  function re(H) {
    const z = new Float64Array(64);
    for (let U = 0; U < 64; U++)
      z[U] = H[U];
    for (let U = 0; U < 64; U++)
      H[U] = 0;
    J(H, z);
  }
  function _e(H, z) {
    const U = new Float64Array(64), l = [o(), o(), o(), o()], R = (0, t.hash)(H.subarray(0, 32));
    R[0] &= 248, R[31] &= 127, R[31] |= 64;
    const ae = new Uint8Array(64);
    ae.set(R.subarray(32), 32);
    const fe = new t.SHA512();
    fe.update(ae.subarray(32)), fe.update(z);
    const Ie = fe.digest();
    fe.clean(), re(Ie), C(l, Ie), de(ae, l), fe.reset(), fe.update(ae.subarray(0, 32)), fe.update(H.subarray(32)), fe.update(z);
    const He = fe.digest();
    re(He);
    for (let ke = 0; ke < 32; ke++)
      U[ke] = Ie[ke];
    for (let ke = 0; ke < 32; ke++)
      for (let Me = 0; Me < 32; Me++)
        U[ke + Me] += He[ke] * R[Me];
    return J(ae.subarray(32), U), ae;
  }
  i.sign = _e;
  function oe(H, z) {
    const U = o(), l = o(), R = o(), ae = o(), fe = o(), Ie = o(), He = o();
    return T(H[2], f), O(H[1], z), _(R, H[1]), u(ae, R, y), E(R, R, H[2]), A(ae, H[2], ae), _(fe, ae), _(Ie, fe), u(He, Ie, fe), u(U, He, R), u(U, U, ae), G(U, U), u(U, U, R), u(U, U, ae), u(U, U, ae), u(H[0], U, ae), _(l, H[0]), u(l, l, ae), L(l, R) && u(H[0], H[0], I), _(l, H[0]), u(l, l, ae), L(l, R) ? -1 : (j(H[0]) === z[31] >> 7 && E(H[0], d, H[0]), u(H[3], H[0], H[1]), 0);
  }
  function be(H, z, U) {
    const l = new Uint8Array(32), R = [o(), o(), o(), o()], ae = [o(), o(), o(), o()];
    if (U.length !== i.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${i.SIGNATURE_LENGTH} bytes`);
    if (oe(ae, H))
      return !1;
    const fe = new t.SHA512();
    fe.update(U.subarray(0, 32)), fe.update(H), fe.update(z);
    const Ie = fe.digest();
    return re(Ie), b(R, ae, Ie), C(ae, U.subarray(32)), se(R, ae), de(l, R), !ie(U, l);
  }
  i.verify = be;
  function le(H) {
    let z = [o(), o(), o(), o()];
    if (oe(z, H))
      throw new Error("Ed25519: invalid public key");
    let U = o(), l = o(), R = z[1];
    A(U, f, R), E(l, f, R), W(l, l), u(U, U, l);
    let ae = new Uint8Array(32);
    return B(ae, U), ae;
  }
  i.convertPublicKeyToX25519 = le;
  function me(H) {
    const z = (0, t.hash)(H.subarray(0, 32));
    z[0] &= 248, z[31] &= 127, z[31] |= 64;
    const U = new Uint8Array(z.subarray(0, 32));
    return (0, s.wipe)(z), U;
  }
  i.convertSecretKeyToX25519 = me;
})(ku);
const tS = "EdDSA", rS = "JWT", Tp = ".", Rp = "base64url", iS = "utf8", nS = "utf8", sS = ":", oS = "did", aS = "key", Yf = "base58btc", cS = "z", uS = "K36", hS = 32;
function Zo(i) {
  return fr(br(cn(i), iS), Rp);
}
function Np(i) {
  const e = br(uS, Yf), t = cS + fr(pu([e, i]), Yf);
  return [oS, aS, t].join(sS);
}
function lS(i) {
  return fr(i, Rp);
}
function fS(i) {
  return br([Zo(i.header), Zo(i.payload)].join(Tp), nS);
}
function dS(i) {
  return [
    Zo(i.header),
    Zo(i.payload),
    lS(i.signature)
  ].join(Tp);
}
function Jf(i = Fn.randomBytes(hS)) {
  return ku.generateKeyPairFromSeed(i);
}
async function pS(i, e, t, s, o = ve.fromMiliseconds(Date.now())) {
  const c = { alg: tS, typ: rS }, d = Np(s.publicKey), f = o + t, y = { iss: d, sub: i, aud: e, iat: o, exp: f }, g = fS({ header: c, payload: y }), m = ku.sign(s.secretKey, g);
  return dS({ header: c, payload: y, signature: m });
}
const gS = "PARSE_ERROR", yS = "INVALID_REQUEST", vS = "METHOD_NOT_FOUND", mS = "INVALID_PARAMS", Lp = "INTERNAL_ERROR", Vu = "SERVER_ERROR", wS = [-32700, -32600, -32601, -32602, -32603], Es = {
  [gS]: { code: -32700, message: "Parse error" },
  [yS]: { code: -32600, message: "Invalid Request" },
  [vS]: { code: -32601, message: "Method not found" },
  [mS]: { code: -32602, message: "Invalid params" },
  [Lp]: { code: -32603, message: "Internal error" },
  [Vu]: { code: -32e3, message: "Server error" }
}, Up = Vu;
function _S(i) {
  return wS.includes(i);
}
function Qf(i) {
  return Object.keys(Es).includes(i) ? Es[i] : Es[Up];
}
function bS(i) {
  const e = Object.values(Es).find((t) => t.code === i);
  return e || Es[Up];
}
function $p(i, e, t) {
  return i.message.includes("getaddrinfo ENOTFOUND") || i.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${t} RPC url at ${e}`) : i;
}
var Mp = {}, mi = {}, Xf;
function ES() {
  if (Xf)
    return mi;
  Xf = 1, Object.defineProperty(mi, "__esModule", { value: !0 }), mi.isBrowserCryptoAvailable = mi.getSubtleCrypto = mi.getBrowerCrypto = void 0;
  function i() {
    return (window == null ? void 0 : window.crypto) || (window == null ? void 0 : window.msCrypto) || {};
  }
  mi.getBrowerCrypto = i;
  function e() {
    const s = i();
    return s.subtle || s.webkitSubtle;
  }
  mi.getSubtleCrypto = e;
  function t() {
    return !!i() && !!e();
  }
  return mi.isBrowserCryptoAvailable = t, mi;
}
var wi = {}, Zf;
function DS() {
  if (Zf)
    return wi;
  Zf = 1, Object.defineProperty(wi, "__esModule", { value: !0 }), wi.isBrowser = wi.isNode = wi.isReactNative = void 0;
  function i() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  wi.isReactNative = i;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  wi.isNode = e;
  function t() {
    return !i() && !e();
  }
  return wi.isBrowser = t, wi;
}
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = si;
  e.__exportStar(ES(), i), e.__exportStar(DS(), i);
})(Mp);
function Wu(i = 3) {
  const e = Date.now() * Math.pow(10, i), t = Math.floor(Math.random() * Math.pow(10, i));
  return e + t;
}
function jp(i = 6) {
  return BigInt(Wu(i));
}
function zn(i, e, t) {
  return {
    id: t || Wu(),
    jsonrpc: "2.0",
    method: i,
    params: e
  };
}
function la(i, e) {
  return {
    id: i,
    jsonrpc: "2.0",
    result: e
  };
}
function fa(i, e, t) {
  return {
    id: i,
    jsonrpc: "2.0",
    error: SS(e, t)
  };
}
function SS(i, e) {
  return typeof i > "u" ? Qf(Lp) : (typeof i == "string" && (i = Object.assign(Object.assign({}, Qf(Vu)), { message: i })), typeof e < "u" && (i.data = e), _S(i.code) && (i = bS(i.code)), i);
}
class IS {
}
class xS extends IS {
  constructor() {
    super();
  }
}
class OS extends xS {
  constructor(e) {
    super();
  }
}
const PS = "^https?:", CS = "^wss?:";
function AS(i) {
  const e = i.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function qp(i, e) {
  const t = AS(i);
  return typeof t > "u" ? !1 : new RegExp(e).test(t);
}
function ed(i) {
  return qp(i, PS);
}
function td(i) {
  return qp(i, CS);
}
function TS(i) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(i);
}
function zp(i) {
  return typeof i == "object" && "id" in i && "jsonrpc" in i && i.jsonrpc === "2.0";
}
function Gu(i) {
  return zp(i) && "method" in i;
}
function da(i) {
  return zp(i) && (Di(i) || Yr(i));
}
function Di(i) {
  return "result" in i;
}
function Yr(i) {
  return "error" in i;
}
class Si extends OS {
  constructor(e) {
    super(e), this.events = new Ar.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async request(e, t) {
    return this.requestStrict(zn(e.method, e.params || [], e.id || jp().toString()), t);
  }
  async requestStrict(e, t) {
    return new Promise(async (s, o) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (c) {
          o(c);
        }
      this.events.on(`${e.id}`, (c) => {
        Yr(c) ? o(c.error) : s(c.result);
      });
      try {
        await this.connection.send(e, t);
      } catch (c) {
        o(c);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), da(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
      type: e.method,
      data: e.params
    });
  }
  onClose(e) {
    e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (e) => this.onPayload(e)), this.connection.on("close", (e) => this.onClose(e)), this.connection.on("error", (e) => this.events.emit("error", e)), this.connection.on("register_error", (e) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
}
const RS = () => typeof WebSocket < "u" ? WebSocket : typeof window < "u" && typeof window.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), NS = () => typeof WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", rd = (i) => i.split("?")[0], id = 10, LS = RS();
let US = class {
  constructor(e) {
    if (this.url = e, this.events = new Ar.EventEmitter(), this.registering = !1, !td(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (s) => {
        this.onClose(s), e();
      }, this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(cn(e));
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  register(e = this.url) {
    if (!td(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((s, o) => {
        this.events.once("register_error", (c) => {
          this.resetMaxListeners(), o(c);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return o(new Error("WebSocket connection is missing or invalid"));
          s(this.socket);
        });
      });
    }
    return this.url = e, this.registering = !0, new Promise((t, s) => {
      const o = new URLSearchParams(e).get("origin"), c = Mp.isReactNative() ? { headers: { origin: o } } : { rejectUnauthorized: !TS(e) }, d = new LS(e, [], c);
      NS() ? d.onerror = (f) => {
        const y = f;
        s(this.emitError(y.error));
      } : d.on("error", (f) => {
        s(this.emitError(f));
      }), d.onopen = () => {
        this.onOpen(d), t(d);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (t) => this.onPayload(t), e.onclose = (t) => this.onClose(t), this.socket = e, this.registering = !1, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u")
      return;
    const t = typeof e.data == "string" ? Rs(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const s = this.parseError(t), o = s.message || s.toString(), c = fa(e, o);
    this.events.emit("payload", c);
  }
  parseError(e, t = this.url) {
    return $p(e, rd(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > id && this.events.setMaxListeners(id);
  }
  emitError(e) {
    const t = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${rd(this.url)}`));
    return this.events.emit("register_error", t), t;
  }
};
var ea = { exports: {} };
ea.exports;
(function(i, e) {
  var t = 200, s = "__lodash_hash_undefined__", o = 1, c = 2, d = 9007199254740991, f = "[object Arguments]", y = "[object Array]", g = "[object AsyncFunction]", m = "[object Boolean]", D = "[object Date]", I = "[object Error]", T = "[object Function]", P = "[object GeneratorFunction]", F = "[object Map]", B = "[object Number]", ie = "[object Null]", L = "[object Object]", j = "[object Promise]", O = "[object Proxy]", A = "[object RegExp]", E = "[object Set]", u = "[object String]", _ = "[object Symbol]", W = "[object Undefined]", G = "[object WeakMap]", se = "[object ArrayBuffer]", ue = "[object DataView]", de = "[object Float32Array]", b = "[object Float64Array]", C = "[object Int8Array]", ee = "[object Int16Array]", Q = "[object Int32Array]", k = "[object Uint8Array]", V = "[object Uint8ClampedArray]", J = "[object Uint16Array]", re = "[object Uint32Array]", _e = /[\\^$.*+?()[\]{}|]/g, oe = /^\[object .+?Constructor\]$/, be = /^(?:0|[1-9]\d*)$/, le = {};
  le[de] = le[b] = le[C] = le[ee] = le[Q] = le[k] = le[V] = le[J] = le[re] = !0, le[f] = le[y] = le[se] = le[m] = le[ue] = le[D] = le[I] = le[T] = le[F] = le[B] = le[L] = le[A] = le[E] = le[u] = le[G] = !1;
  var me = typeof window == "object" && window && window.Object === Object && window, H = typeof self == "object" && self && self.Object === Object && self, z = me || H || Function("return this")(), U = e && !e.nodeType && e, l = U && !0 && i && !i.nodeType && i, R = l && l.exports === U, ae = R && me.process, fe = function() {
    try {
      return ae && ae.binding && ae.binding("util");
    } catch {
    }
  }(), Ie = fe && fe.isTypedArray;
  function He(S, $) {
    for (var te = -1, pe = S == null ? 0 : S.length, ct = 0, Te = []; ++te < pe; ) {
      var dt = S[te];
      $(dt, te, S) && (Te[ct++] = dt);
    }
    return Te;
  }
  function ke(S, $) {
    for (var te = -1, pe = $.length, ct = S.length; ++te < pe; )
      S[ct + te] = $[te];
    return S;
  }
  function Me(S, $) {
    for (var te = -1, pe = S == null ? 0 : S.length; ++te < pe; )
      if ($(S[te], te, S))
        return !0;
    return !1;
  }
  function gt(S, $) {
    for (var te = -1, pe = Array(S); ++te < S; )
      pe[te] = $(te);
    return pe;
  }
  function yt(S) {
    return function($) {
      return S($);
    };
  }
  function qe(S, $) {
    return S.has($);
  }
  function xe(S, $) {
    return S == null ? void 0 : S[$];
  }
  function Ne(S) {
    var $ = -1, te = Array(S.size);
    return S.forEach(function(pe, ct) {
      te[++$] = [ct, pe];
    }), te;
  }
  function Le(S, $) {
    return function(te) {
      return S($(te));
    };
  }
  function ze(S) {
    var $ = -1, te = Array(S.size);
    return S.forEach(function(pe) {
      te[++$] = pe;
    }), te;
  }
  var Pe = Array.prototype, Ue = Function.prototype, Se = Object.prototype, Ce = z["__core-js_shared__"], Be = Ue.toString, Oe = Se.hasOwnProperty, Ve = function() {
    var S = /[^.]+$/.exec(Ce && Ce.keys && Ce.keys.IE_PROTO || "");
    return S ? "Symbol(src)_1." + S : "";
  }(), Ge = Se.toString, et = RegExp(
    "^" + Be.call(Oe).replace(_e, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), tt = R ? z.Buffer : void 0, Qe = z.Symbol, rr = z.Uint8Array, dr = Se.propertyIsEnumerable, Jr = Pe.splice, ir = Qe ? Qe.toStringTag : void 0, oi = Object.getOwnPropertySymbols, xi = tt ? tt.isBuffer : void 0, Hi = Le(Object.keys, Object), St = Er(z, "DataView"), vt = Er(z, "Map"), It = Er(z, "Promise"), xt = Er(z, "Set"), Et = Er(z, "WeakMap"), mt = Er(Object, "create"), $t = ci(St), Mt = ci(vt), Ot = ci(It), jt = ci(xt), Pt = ci(Et), Tt = Qe ? Qe.prototype : void 0, Ct = Tt ? Tt.valueOf : void 0;
  function lt(S) {
    var $ = -1, te = S == null ? 0 : S.length;
    for (this.clear(); ++$ < te; ) {
      var pe = S[$];
      this.set(pe[0], pe[1]);
    }
  }
  function qt() {
    this.__data__ = mt ? mt(null) : {}, this.size = 0;
  }
  function zt(S) {
    var $ = this.has(S) && delete this.__data__[S];
    return this.size -= $ ? 1 : 0, $;
  }
  function ya(S) {
    var $ = this.__data__;
    if (mt) {
      var te = $[S];
      return te === s ? void 0 : te;
    }
    return Oe.call($, S) ? $[S] : void 0;
  }
  function va(S) {
    var $ = this.__data__;
    return mt ? $[S] !== void 0 : Oe.call($, S);
  }
  function ma(S, $) {
    var te = this.__data__;
    return this.size += this.has(S) ? 0 : 1, te[S] = mt && $ === void 0 ? s : $, this;
  }
  lt.prototype.clear = qt, lt.prototype.delete = zt, lt.prototype.get = ya, lt.prototype.has = va, lt.prototype.set = ma;
  function Rr(S) {
    var $ = -1, te = S == null ? 0 : S.length;
    for (this.clear(); ++$ < te; ) {
      var pe = S[$];
      this.set(pe[0], pe[1]);
    }
  }
  function wa() {
    this.__data__ = [], this.size = 0;
  }
  function _a(S) {
    var $ = this.__data__, te = Bi($, S);
    if (te < 0)
      return !1;
    var pe = $.length - 1;
    return te == pe ? $.pop() : Jr.call($, te, 1), --this.size, !0;
  }
  function ba(S) {
    var $ = this.__data__, te = Bi($, S);
    return te < 0 ? void 0 : $[te][1];
  }
  function Ea(S) {
    return Bi(this.__data__, S) > -1;
  }
  function Da(S, $) {
    var te = this.__data__, pe = Bi(te, S);
    return pe < 0 ? (++this.size, te.push([S, $])) : te[pe][1] = $, this;
  }
  Rr.prototype.clear = wa, Rr.prototype.delete = _a, Rr.prototype.get = ba, Rr.prototype.has = Ea, Rr.prototype.set = Da;
  function ai(S) {
    var $ = -1, te = S == null ? 0 : S.length;
    for (this.clear(); ++$ < te; ) {
      var pe = S[$];
      this.set(pe[0], pe[1]);
    }
  }
  function pn() {
    this.size = 0, this.__data__ = {
      hash: new lt(),
      map: new (vt || Rr)(),
      string: new lt()
    };
  }
  function Sa(S) {
    var $ = Oi(this, S).delete(S);
    return this.size -= $ ? 1 : 0, $;
  }
  function gn(S) {
    return Oi(this, S).get(S);
  }
  function Ia(S) {
    return Oi(this, S).has(S);
  }
  function xa(S, $) {
    var te = Oi(this, S), pe = te.size;
    return te.set(S, $), this.size += te.size == pe ? 0 : 1, this;
  }
  ai.prototype.clear = pn, ai.prototype.delete = Sa, ai.prototype.get = gn, ai.prototype.has = Ia, ai.prototype.set = xa;
  function yn(S) {
    var $ = -1, te = S == null ? 0 : S.length;
    for (this.__data__ = new ai(); ++$ < te; )
      this.add(S[$]);
  }
  function Ls(S) {
    return this.__data__.set(S, s), this;
  }
  function Us(S) {
    return this.__data__.has(S);
  }
  yn.prototype.add = yn.prototype.push = Ls, yn.prototype.has = Us;
  function Hr(S) {
    var $ = this.__data__ = new Rr(S);
    this.size = $.size;
  }
  function Oa() {
    this.__data__ = new Rr(), this.size = 0;
  }
  function Pa(S) {
    var $ = this.__data__, te = $.delete(S);
    return this.size = $.size, te;
  }
  function Ca(S) {
    return this.__data__.get(S);
  }
  function Aa(S) {
    return this.__data__.has(S);
  }
  function $s(S, $) {
    var te = this.__data__;
    if (te instanceof Rr) {
      var pe = te.__data__;
      if (!vt || pe.length < t - 1)
        return pe.push([S, $]), this.size = ++te.size, this;
      te = this.__data__ = new ai(pe);
    }
    return te.set(S, $), this.size = te.size, this;
  }
  Hr.prototype.clear = Oa, Hr.prototype.delete = Pa, Hr.prototype.get = Ca, Hr.prototype.has = Aa, Hr.prototype.set = $s;
  function Ms(S, $) {
    var te = wn(S), pe = !te && Ys(S), ct = !te && !pe && Yn(S), Te = !te && !pe && !ct && Xs(S), dt = te || pe || ct || Te, Ft = dt ? gt(S.length, String) : [], Xe = Ft.length;
    for (var ut in S)
      ($ || Oe.call(S, ut)) && !(dt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ut == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ct && (ut == "offset" || ut == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Te && (ut == "buffer" || ut == "byteLength" || ut == "byteOffset") || // Skip index properties.
      Ks(ut, Xe))) && Ft.push(ut);
    return Ft;
  }
  function Bi(S, $) {
    for (var te = S.length; te--; )
      if (Gs(S[te][0], $))
        return te;
    return -1;
  }
  function Wn(S, $, te) {
    var pe = $(S);
    return wn(S) ? pe : ke(pe, te(S));
  }
  function Ki(S) {
    return S == null ? S === void 0 ? W : ie : ir && ir in Object(S) ? Hs(S) : Na(S);
  }
  function Gn(S) {
    return Vi(S) && Ki(S) == f;
  }
  function ki(S, $, te, pe, ct) {
    return S === $ ? !0 : S == null || $ == null || !Vi(S) && !Vi($) ? S !== S && $ !== $ : js(S, $, te, pe, ki, ct);
  }
  function js(S, $, te, pe, ct, Te) {
    var dt = wn(S), Ft = wn($), Xe = dt ? y : Qr(S), ut = Ft ? y : Qr($);
    Xe = Xe == f ? L : Xe, ut = ut == f ? L : ut;
    var Rt = Xe == L, pr = ut == L, Ht = Xe == ut;
    if (Ht && Yn(S)) {
      if (!Yn($))
        return !1;
      dt = !0, Rt = !1;
    }
    if (Ht && !Rt)
      return Te || (Te = new Hr()), dt || Xs(S) ? vn(S, $, te, pe, ct, Te) : Ra(S, $, Xe, te, pe, ct, Te);
    if (!(te & o)) {
      var pt = Rt && Oe.call(S, "__wrapped__"), nr = pr && Oe.call($, "__wrapped__");
      if (pt || nr) {
        var Br = pt ? S.value() : S, Nr = nr ? $.value() : $;
        return Te || (Te = new Hr()), ct(Br, Nr, te, pe, Te);
      }
    }
    return Ht ? (Te || (Te = new Hr()), Fs(S, $, te, pe, ct, Te)) : !1;
  }
  function Ta(S) {
    if (!Qs(S) || Vs(S))
      return !1;
    var $ = _n(S) ? et : oe;
    return $.test(ci(S));
  }
  function qs(S) {
    return Vi(S) && Js(S.length) && !!le[Ki(S)];
  }
  function zs(S) {
    if (!Ws(S))
      return Hi(S);
    var $ = [];
    for (var te in Object(S))
      Oe.call(S, te) && te != "constructor" && $.push(te);
    return $;
  }
  function vn(S, $, te, pe, ct, Te) {
    var dt = te & o, Ft = S.length, Xe = $.length;
    if (Ft != Xe && !(dt && Xe > Ft))
      return !1;
    var ut = Te.get(S);
    if (ut && Te.get($))
      return ut == $;
    var Rt = -1, pr = !0, Ht = te & c ? new yn() : void 0;
    for (Te.set(S, $), Te.set($, S); ++Rt < Ft; ) {
      var pt = S[Rt], nr = $[Rt];
      if (pe)
        var Br = dt ? pe(nr, pt, Rt, $, S, Te) : pe(pt, nr, Rt, S, $, Te);
      if (Br !== void 0) {
        if (Br)
          continue;
        pr = !1;
        break;
      }
      if (Ht) {
        if (!Me($, function(Nr, Xr) {
          if (!qe(Ht, Xr) && (pt === Nr || ct(pt, Nr, te, pe, Te)))
            return Ht.push(Xr);
        })) {
          pr = !1;
          break;
        }
      } else if (!(pt === nr || ct(pt, nr, te, pe, Te))) {
        pr = !1;
        break;
      }
    }
    return Te.delete(S), Te.delete($), pr;
  }
  function Ra(S, $, te, pe, ct, Te, dt) {
    switch (te) {
      case ue:
        if (S.byteLength != $.byteLength || S.byteOffset != $.byteOffset)
          return !1;
        S = S.buffer, $ = $.buffer;
      case se:
        return !(S.byteLength != $.byteLength || !Te(new rr(S), new rr($)));
      case m:
      case D:
      case B:
        return Gs(+S, +$);
      case I:
        return S.name == $.name && S.message == $.message;
      case A:
      case u:
        return S == $ + "";
      case F:
        var Ft = Ne;
      case E:
        var Xe = pe & o;
        if (Ft || (Ft = ze), S.size != $.size && !Xe)
          return !1;
        var ut = dt.get(S);
        if (ut)
          return ut == $;
        pe |= c, dt.set(S, $);
        var Rt = vn(Ft(S), Ft($), pe, ct, Te, dt);
        return dt.delete(S), Rt;
      case _:
        if (Ct)
          return Ct.call(S) == Ct.call($);
    }
    return !1;
  }
  function Fs(S, $, te, pe, ct, Te) {
    var dt = te & o, Ft = mn(S), Xe = Ft.length, ut = mn($), Rt = ut.length;
    if (Xe != Rt && !dt)
      return !1;
    for (var pr = Xe; pr--; ) {
      var Ht = Ft[pr];
      if (!(dt ? Ht in $ : Oe.call($, Ht)))
        return !1;
    }
    var pt = Te.get(S);
    if (pt && Te.get($))
      return pt == $;
    var nr = !0;
    Te.set(S, $), Te.set($, S);
    for (var Br = dt; ++pr < Xe; ) {
      Ht = Ft[pr];
      var Nr = S[Ht], Xr = $[Ht];
      if (pe)
        var Jn = dt ? pe(Xr, Nr, Ht, $, S, Te) : pe(Nr, Xr, Ht, S, $, Te);
      if (!(Jn === void 0 ? Nr === Xr || ct(Nr, Xr, te, pe, Te) : Jn)) {
        nr = !1;
        break;
      }
      Br || (Br = Ht == "constructor");
    }
    if (nr && !Br) {
      var Wi = S.constructor, kt = $.constructor;
      Wi != kt && "constructor" in S && "constructor" in $ && !(typeof Wi == "function" && Wi instanceof Wi && typeof kt == "function" && kt instanceof kt) && (nr = !1);
    }
    return Te.delete(S), Te.delete($), nr;
  }
  function mn(S) {
    return Wn(S, $a, Bs);
  }
  function Oi(S, $) {
    var te = S.__data__;
    return ks($) ? te[typeof $ == "string" ? "string" : "hash"] : te.map;
  }
  function Er(S, $) {
    var te = xe(S, $);
    return Ta(te) ? te : void 0;
  }
  function Hs(S) {
    var $ = Oe.call(S, ir), te = S[ir];
    try {
      S[ir] = void 0;
      var pe = !0;
    } catch {
    }
    var ct = Ge.call(S);
    return pe && ($ ? S[ir] = te : delete S[ir]), ct;
  }
  var Bs = oi ? function(S) {
    return S == null ? [] : (S = Object(S), He(oi(S), function($) {
      return dr.call(S, $);
    }));
  } : at, Qr = Ki;
  (St && Qr(new St(new ArrayBuffer(1))) != ue || vt && Qr(new vt()) != F || It && Qr(It.resolve()) != j || xt && Qr(new xt()) != E || Et && Qr(new Et()) != G) && (Qr = function(S) {
    var $ = Ki(S), te = $ == L ? S.constructor : void 0, pe = te ? ci(te) : "";
    if (pe)
      switch (pe) {
        case $t:
          return ue;
        case Mt:
          return F;
        case Ot:
          return j;
        case jt:
          return E;
        case Pt:
          return G;
      }
    return $;
  });
  function Ks(S, $) {
    return $ = $ ?? d, !!$ && (typeof S == "number" || be.test(S)) && S > -1 && S % 1 == 0 && S < $;
  }
  function ks(S) {
    var $ = typeof S;
    return $ == "string" || $ == "number" || $ == "symbol" || $ == "boolean" ? S !== "__proto__" : S === null;
  }
  function Vs(S) {
    return !!Ve && Ve in S;
  }
  function Ws(S) {
    var $ = S && S.constructor, te = typeof $ == "function" && $.prototype || Se;
    return S === te;
  }
  function Na(S) {
    return Ge.call(S);
  }
  function ci(S) {
    if (S != null) {
      try {
        return Be.call(S);
      } catch {
      }
      try {
        return S + "";
      } catch {
      }
    }
    return "";
  }
  function Gs(S, $) {
    return S === $ || S !== S && $ !== $;
  }
  var Ys = Gn(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Gn : function(S) {
    return Vi(S) && Oe.call(S, "callee") && !dr.call(S, "callee");
  }, wn = Array.isArray;
  function La(S) {
    return S != null && Js(S.length) && !_n(S);
  }
  var Yn = xi || st;
  function Ua(S, $) {
    return ki(S, $);
  }
  function _n(S) {
    if (!Qs(S))
      return !1;
    var $ = Ki(S);
    return $ == T || $ == P || $ == g || $ == O;
  }
  function Js(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= d;
  }
  function Qs(S) {
    var $ = typeof S;
    return S != null && ($ == "object" || $ == "function");
  }
  function Vi(S) {
    return S != null && typeof S == "object";
  }
  var Xs = Ie ? yt(Ie) : qs;
  function $a(S) {
    return La(S) ? Ms(S) : zs(S);
  }
  function at() {
    return [];
  }
  function st() {
    return !1;
  }
  i.exports = Ua;
})(ea, ea.exports);
var $S = ea.exports;
const MS = /* @__PURE__ */ ia($S);
function jS(i, e) {
  return e = e || {}, new Promise(function(t, s) {
    var o = new XMLHttpRequest(), c = [], d = [], f = {}, y = function() {
      return { ok: (o.status / 100 | 0) == 2, statusText: o.statusText, status: o.status, url: o.responseURL, text: function() {
        return Promise.resolve(o.responseText);
      }, json: function() {
        return Promise.resolve(o.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([o.response]));
      }, clone: y, headers: { keys: function() {
        return c;
      }, entries: function() {
        return d;
      }, get: function(m) {
        return f[m.toLowerCase()];
      }, has: function(m) {
        return m.toLowerCase() in f;
      } } };
    };
    for (var g in o.open(e.method || "get", i, !0), o.onload = function() {
      o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(m, D, I) {
        c.push(D = D.toLowerCase()), d.push([D, I]), f[D] = f[D] ? f[D] + "," + I : I;
      }), t(y());
    }, o.onerror = s, o.withCredentials = e.credentials == "include", e.headers)
      o.setRequestHeader(g, e.headers[g]);
    o.send(e.body || null);
  });
}
const qS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jS
}, Symbol.toStringTag, { value: "Module" })), nd = /* @__PURE__ */ ra(qS);
var zS = self.fetch || (self.fetch = nd.default || nd);
const FS = /* @__PURE__ */ ia(zS);
function HS(i, e) {
  if (i.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++)
    t[s] = 255;
  for (var o = 0; o < i.length; o++) {
    var c = i.charAt(o), d = c.charCodeAt(0);
    if (t[d] !== 255)
      throw new TypeError(c + " is ambiguous");
    t[d] = o;
  }
  var f = i.length, y = i.charAt(0), g = Math.log(f) / Math.log(256), m = Math.log(256) / Math.log(f);
  function D(P) {
    if (P instanceof Uint8Array || (ArrayBuffer.isView(P) ? P = new Uint8Array(P.buffer, P.byteOffset, P.byteLength) : Array.isArray(P) && (P = Uint8Array.from(P))), !(P instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (P.length === 0)
      return "";
    for (var F = 0, B = 0, ie = 0, L = P.length; ie !== L && P[ie] === 0; )
      ie++, F++;
    for (var j = (L - ie) * m + 1 >>> 0, O = new Uint8Array(j); ie !== L; ) {
      for (var A = P[ie], E = 0, u = j - 1; (A !== 0 || E < B) && u !== -1; u--, E++)
        A += 256 * O[u] >>> 0, O[u] = A % f >>> 0, A = A / f >>> 0;
      if (A !== 0)
        throw new Error("Non-zero carry");
      B = E, ie++;
    }
    for (var _ = j - B; _ !== j && O[_] === 0; )
      _++;
    for (var W = y.repeat(F); _ < j; ++_)
      W += i.charAt(O[_]);
    return W;
  }
  function I(P) {
    if (typeof P != "string")
      throw new TypeError("Expected String");
    if (P.length === 0)
      return new Uint8Array();
    var F = 0;
    if (P[F] !== " ") {
      for (var B = 0, ie = 0; P[F] === y; )
        B++, F++;
      for (var L = (P.length - F) * g + 1 >>> 0, j = new Uint8Array(L); P[F]; ) {
        var O = t[P.charCodeAt(F)];
        if (O === 255)
          return;
        for (var A = 0, E = L - 1; (O !== 0 || A < ie) && E !== -1; E--, A++)
          O += f * j[E] >>> 0, j[E] = O % 256 >>> 0, O = O / 256 >>> 0;
        if (O !== 0)
          throw new Error("Non-zero carry");
        ie = A, F++;
      }
      if (P[F] !== " ") {
        for (var u = L - ie; u !== L && j[u] === 0; )
          u++;
        for (var _ = new Uint8Array(B + (L - u)), W = B; u !== L; )
          _[W++] = j[u++];
        return _;
      }
    }
  }
  function T(P) {
    var F = I(P);
    if (F)
      return F;
    throw new Error(`Non-${e} character`);
  }
  return { encode: D, decodeUnsafe: I, decode: T };
}
var BS = HS, KS = BS;
const Fp = (i) => {
  if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
    return i;
  if (i instanceof ArrayBuffer)
    return new Uint8Array(i);
  if (ArrayBuffer.isView(i))
    return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
  throw new Error("Unknown type, must be binary type");
}, kS = (i) => new TextEncoder().encode(i), VS = (i) => new TextDecoder().decode(i);
class WS {
  constructor(e, t, s) {
    this.name = e, this.prefix = t, this.baseEncode = s;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class GS {
  constructor(e, t, s) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = s;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Hp(this, e);
  }
}
class YS {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Hp(this, e);
  }
  decode(e) {
    const t = e[0], s = this.decoders[t];
    if (s)
      return s.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Hp = (i, e) => new YS({ ...i.decoders || { [i.prefix]: i }, ...e.decoders || { [e.prefix]: e } });
class JS {
  constructor(e, t, s, o) {
    this.name = e, this.prefix = t, this.baseEncode = s, this.baseDecode = o, this.encoder = new WS(e, t, s), this.decoder = new GS(e, t, o);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const pa = ({ name: i, prefix: e, encode: t, decode: s }) => new JS(i, e, t, s), Ns = ({ prefix: i, name: e, alphabet: t }) => {
  const { encode: s, decode: o } = KS(t, e);
  return pa({ prefix: i, name: e, encode: s, decode: (c) => Fp(o(c)) });
}, QS = (i, e, t, s) => {
  const o = {};
  for (let m = 0; m < e.length; ++m)
    o[e[m]] = m;
  let c = i.length;
  for (; i[c - 1] === "="; )
    --c;
  const d = new Uint8Array(c * t / 8 | 0);
  let f = 0, y = 0, g = 0;
  for (let m = 0; m < c; ++m) {
    const D = o[i[m]];
    if (D === void 0)
      throw new SyntaxError(`Non-${s} character`);
    y = y << t | D, f += t, f >= 8 && (f -= 8, d[g++] = 255 & y >> f);
  }
  if (f >= t || 255 & y << 8 - f)
    throw new SyntaxError("Unexpected end of data");
  return d;
}, XS = (i, e, t) => {
  const s = e[e.length - 1] === "=", o = (1 << t) - 1;
  let c = "", d = 0, f = 0;
  for (let y = 0; y < i.length; ++y)
    for (f = f << 8 | i[y], d += 8; d > t; )
      d -= t, c += e[o & f >> d];
  if (d && (c += e[o & f << t - d]), s)
    for (; c.length * t & 7; )
      c += "=";
  return c;
}, Qt = ({ name: i, prefix: e, bitsPerChar: t, alphabet: s }) => pa({ prefix: e, name: i, encode(o) {
  return XS(o, s, t);
}, decode(o) {
  return QS(o, s, t, i);
} }), ZS = pa({ prefix: "\0", name: "identity", encode: (i) => VS(i), decode: (i) => kS(i) });
var eI = Object.freeze({ __proto__: null, identity: ZS });
const tI = Qt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var rI = Object.freeze({ __proto__: null, base2: tI });
const iI = Qt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var nI = Object.freeze({ __proto__: null, base8: iI });
const sI = Ns({ prefix: "9", name: "base10", alphabet: "0123456789" });
var oI = Object.freeze({ __proto__: null, base10: sI });
const aI = Qt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), cI = Qt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var uI = Object.freeze({ __proto__: null, base16: aI, base16upper: cI });
const hI = Qt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), lI = Qt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), fI = Qt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), dI = Qt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), pI = Qt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), gI = Qt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), yI = Qt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), vI = Qt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), mI = Qt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var wI = Object.freeze({ __proto__: null, base32: hI, base32upper: lI, base32pad: fI, base32padupper: dI, base32hex: pI, base32hexupper: gI, base32hexpad: yI, base32hexpadupper: vI, base32z: mI });
const _I = Ns({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), bI = Ns({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var EI = Object.freeze({ __proto__: null, base36: _I, base36upper: bI });
const DI = Ns({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), SI = Ns({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var II = Object.freeze({ __proto__: null, base58btc: DI, base58flickr: SI });
const xI = Qt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), OI = Qt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), PI = Qt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), CI = Qt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var AI = Object.freeze({ __proto__: null, base64: xI, base64pad: OI, base64url: PI, base64urlpad: CI });
const Bp = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), TI = Bp.reduce((i, e, t) => (i[t] = e, i), []), RI = Bp.reduce((i, e, t) => (i[e.codePointAt(0)] = t, i), []);
function NI(i) {
  return i.reduce((e, t) => (e += TI[t], e), "");
}
function LI(i) {
  const e = [];
  for (const t of i) {
    const s = RI[t.codePointAt(0)];
    if (s === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const UI = pa({ prefix: "🚀", name: "base256emoji", encode: NI, decode: LI });
var $I = Object.freeze({ __proto__: null, base256emoji: UI }), MI = Kp, sd = 128, jI = 127, qI = ~jI, zI = Math.pow(2, 31);
function Kp(i, e, t) {
  e = e || [], t = t || 0;
  for (var s = t; i >= zI; )
    e[t++] = i & 255 | sd, i /= 128;
  for (; i & qI; )
    e[t++] = i & 255 | sd, i >>>= 7;
  return e[t] = i | 0, Kp.bytes = t - s + 1, e;
}
var FI = Su, HI = 128, od = 127;
function Su(i, s) {
  var t = 0, s = s || 0, o = 0, c = s, d, f = i.length;
  do {
    if (c >= f)
      throw Su.bytes = 0, new RangeError("Could not decode varint");
    d = i[c++], t += o < 28 ? (d & od) << o : (d & od) * Math.pow(2, o), o += 7;
  } while (d >= HI);
  return Su.bytes = c - s, t;
}
var BI = Math.pow(2, 7), KI = Math.pow(2, 14), kI = Math.pow(2, 21), VI = Math.pow(2, 28), WI = Math.pow(2, 35), GI = Math.pow(2, 42), YI = Math.pow(2, 49), JI = Math.pow(2, 56), QI = Math.pow(2, 63), XI = function(i) {
  return i < BI ? 1 : i < KI ? 2 : i < kI ? 3 : i < VI ? 4 : i < WI ? 5 : i < GI ? 6 : i < YI ? 7 : i < JI ? 8 : i < QI ? 9 : 10;
}, ZI = { encode: MI, decode: FI, encodingLength: XI }, kp = ZI;
const ad = (i, e, t = 0) => (kp.encode(i, e, t), e), cd = (i) => kp.encodingLength(i), Iu = (i, e) => {
  const t = e.byteLength, s = cd(i), o = s + cd(t), c = new Uint8Array(o + t);
  return ad(i, c, 0), ad(t, c, s), c.set(e, o), new e6(i, t, e, c);
};
class e6 {
  constructor(e, t, s, o) {
    this.code = e, this.size = t, this.digest = s, this.bytes = o;
  }
}
const Vp = ({ name: i, code: e, encode: t }) => new t6(i, e, t);
class t6 {
  constructor(e, t, s) {
    this.name = e, this.code = t, this.encode = s;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? Iu(this.code, t) : t.then((s) => Iu(this.code, s));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Wp = (i) => async (e) => new Uint8Array(await crypto.subtle.digest(i, e)), r6 = Vp({ name: "sha2-256", code: 18, encode: Wp("SHA-256") }), i6 = Vp({ name: "sha2-512", code: 19, encode: Wp("SHA-512") });
var n6 = Object.freeze({ __proto__: null, sha256: r6, sha512: i6 });
const Gp = 0, s6 = "identity", Yp = Fp, o6 = (i) => Iu(Gp, Yp(i)), a6 = { code: Gp, name: s6, encode: Yp, digest: o6 };
var c6 = Object.freeze({ __proto__: null, identity: a6 });
new TextEncoder(), new TextDecoder();
const ud = { ...eI, ...rI, ...nI, ...oI, ...uI, ...wI, ...EI, ...II, ...AI, ...$I };
({ ...n6, ...c6 });
function Jp(i) {
  return globalThis.Buffer != null ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : i;
}
function u6(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Jp(globalThis.Buffer.allocUnsafe(i)) : new Uint8Array(i);
}
function Qp(i, e, t, s) {
  return { name: i, prefix: e, encoder: { name: i, prefix: e, encode: t }, decoder: { decode: s } };
}
const hd = Qp("utf8", "u", (i) => "u" + new TextDecoder("utf8").decode(i), (i) => new TextEncoder().encode(i.substring(1))), eu = Qp("ascii", "a", (i) => {
  let e = "a";
  for (let t = 0; t < i.length; t++)
    e += String.fromCharCode(i[t]);
  return e;
}, (i) => {
  i = i.substring(1);
  const e = u6(i.length);
  for (let t = 0; t < i.length; t++)
    e[t] = i.charCodeAt(t);
  return e;
}), h6 = { utf8: hd, "utf-8": hd, hex: ud.base16, latin1: eu, ascii: eu, binary: eu, ...ud };
function l6(i, e = "utf8") {
  const t = h6[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Jp(globalThis.Buffer.from(i, "utf-8")) : t.decoder.decode(`${t.prefix}${i}`);
}
const Xp = "wc", f6 = 2, Yu = "core", ji = `${Xp}@2:${Yu}:`, d6 = { name: Yu, logger: "error" }, p6 = { database: ":memory:" }, g6 = "crypto", ld = "client_ed25519_seed", y6 = ve.ONE_DAY, v6 = "keychain", m6 = "0.3", w6 = "messages", _6 = "0.3", b6 = ve.SIX_HOURS, E6 = "publisher", Zp = "irn", D6 = "error", eg = "wss://relay.walletconnect.com", fd = "wss://relay.walletconnect.org", S6 = "relayer", tr = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, I6 = "_subscription", _i = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, x6 = ve.ONE_SECOND, O6 = "2.11.1", P6 = 1e4, C6 = "0.3", A6 = "WALLETCONNECT_CLIENT_ID", Gr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, T6 = "subscription", R6 = "0.3", N6 = ve.FIVE_SECONDS * 1e3, L6 = "pairing", U6 = "0.3", ys = { wc_pairingDelete: { req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: ve.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ve.ONE_DAY, prompt: !1, tag: 0 } } }, _s = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, ii = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, $6 = "history", M6 = "0.3", j6 = "expirer", Fr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, q6 = "0.3", tu = "verify-api", Mn = "https://verify.walletconnect.com", xu = "https://verify.walletconnect.org", z6 = [Mn, xu], F6 = "echo", H6 = "https://echo.walletconnect.com";
class B6 {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = v6, this.version = m6, this.initialized = !1, this.storagePrefix = ji, this.init = async () => {
      if (!this.initialized) {
        const s = await this.getKeyChain();
        typeof s < "u" && (this.keychain = s), this.initialized = !0;
      }
    }, this.has = (s) => (this.isInitialized(), this.keychain.has(s)), this.set = async (s, o) => {
      this.isInitialized(), this.keychain.set(s, o), await this.persist();
    }, this.get = (s) => {
      this.isInitialized();
      const o = this.keychain.get(s);
      if (typeof o > "u") {
        const { message: c } = ce("NO_MATCHING_KEY", `${this.name}: ${s}`);
        throw new Error(c);
      }
      return o;
    }, this.del = async (s) => {
      this.isInitialized(), this.keychain.delete(s), await this.persist();
    }, this.core = e, this.logger = Je.generateChildLogger(t, this.name);
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, wp(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? _p(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class K6 {
  constructor(e, t, s) {
    this.core = e, this.logger = t, this.name = g6, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (o) => (this.isInitialized(), this.keychain.has(o)), this.getClientId = async () => {
      this.isInitialized();
      const o = await this.getClientSeed(), c = Jf(o);
      return Np(c.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const o = FE();
      return this.setPrivateKey(o.publicKey, o.privateKey);
    }, this.signJWT = async (o) => {
      this.isInitialized();
      const c = await this.getClientSeed(), d = Jf(c), f = bu();
      return await pS(f, o, y6, d);
    }, this.generateSharedKey = (o, c, d) => {
      this.isInitialized();
      const f = this.getPrivateKey(o), y = HE(f, c);
      return this.setSymKey(y, d);
    }, this.setSymKey = async (o, c) => {
      this.isInitialized();
      const d = c || BE(o);
      return await this.keychain.set(d, o), d;
    }, this.deleteKeyPair = async (o) => {
      this.isInitialized(), await this.keychain.del(o);
    }, this.deleteSymKey = async (o) => {
      this.isInitialized(), await this.keychain.del(o);
    }, this.encode = async (o, c, d) => {
      this.isInitialized();
      const f = mp(d), y = cn(c);
      if (Sf(f)) {
        const I = f.senderPublicKey, T = f.receiverPublicKey;
        o = await this.generateSharedKey(I, T);
      }
      const g = this.getSymKey(o), { type: m, senderPublicKey: D } = f;
      return kE({ type: m, symKey: g, message: y, senderPublicKey: D });
    }, this.decode = async (o, c, d) => {
      this.isInitialized();
      const f = GE(c, d);
      if (Sf(f)) {
        const y = f.receiverPublicKey, g = f.senderPublicKey;
        o = await this.generateSharedKey(y, g);
      }
      try {
        const y = this.getSymKey(o), g = VE({ symKey: y, encoded: c });
        return Rs(g);
      } catch (y) {
        this.logger.error(`Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`), this.logger.error(y);
      }
    }, this.getPayloadType = (o) => {
      const c = Qo(o);
      return Cs(c.type);
    }, this.getPayloadSenderPublicKey = (o) => {
      const c = Qo(o);
      return c.senderPublicKey ? fr(c.senderPublicKey, lr) : void 0;
    }, this.core = e, this.logger = Je.generateChildLogger(t, this.name), this.keychain = s || new B6(this.core, this.logger);
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(ld);
    } catch {
      e = bu(), await this.keychain.set(ld, e);
    }
    return l6(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class k6 extends k3 {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = w6, this.version = _6, this.initialized = !1, this.storagePrefix = ji, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const s = await this.getRelayerMessages();
          typeof s < "u" && (this.messages = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (s) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (s, o) => {
      this.isInitialized();
      const c = qn(o);
      let d = this.messages.get(s);
      return typeof d > "u" && (d = {}), typeof d[c] < "u" || (d[c] = o, this.messages.set(s, d), await this.persist()), c;
    }, this.get = (s) => {
      this.isInitialized();
      let o = this.messages.get(s);
      return typeof o > "u" && (o = {}), o;
    }, this.has = (s, o) => {
      this.isInitialized();
      const c = this.get(s), d = qn(o);
      return typeof c[d] < "u";
    }, this.del = async (s) => {
      this.isInitialized(), this.messages.delete(s), await this.persist();
    }, this.logger = Je.generateChildLogger(e, this.name), this.core = t;
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, wp(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? _p(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class V6 extends V3 {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new Ar.EventEmitter(), this.name = E6, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = ve.toMiliseconds(ve.TEN_SECONDS * 2), this.needsTransportRestart = !1, this.publish = async (s, o, c) => {
      var d;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: o, opts: c } });
      try {
        const f = (c == null ? void 0 : c.ttl) || b6, y = Eu(c), g = (c == null ? void 0 : c.prompt) || !1, m = (c == null ? void 0 : c.tag) || 0, D = (c == null ? void 0 : c.id) || jp().toString(), I = { topic: s, message: o, opts: { ttl: f, relay: y, prompt: g, tag: m, id: D } }, T = setTimeout(() => this.queue.set(D, I), this.publishTimeout);
        try {
          await await Is(this.rpcPublish(s, o, f, y, g, m, D), this.publishTimeout, `Failed to publish payload, please try again. id:${D} tag:${m}`), this.removeRequestFromQueue(D), this.relayer.events.emit(tr.publish, I);
        } catch (P) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (d = c == null ? void 0 : c.internal) != null && d.throwOnFailedPublish)
            throw this.removeRequestFromQueue(D), P;
          return;
        } finally {
          clearTimeout(T);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: o, opts: c } });
      } catch (f) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(f), f;
      }
    }, this.on = (s, o) => {
      this.events.on(s, o);
    }, this.once = (s, o) => {
      this.events.once(s, o);
    }, this.off = (s, o) => {
      this.events.off(s, o);
    }, this.removeListener = (s, o) => {
      this.events.removeListener(s, o);
    }, this.relayer = e, this.logger = Je.generateChildLogger(t, this.name), this.registerEventListeners();
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  rpcPublish(e, t, s, o, c, d, f) {
    var y, g, m, D;
    const I = { method: Vo(o.protocol).publish, params: { topic: e, message: t, ttl: s, prompt: c, tag: d }, id: f };
    return hr((y = I.params) == null ? void 0 : y.prompt) && ((g = I.params) == null || delete g.prompt), hr((m = I.params) == null ? void 0 : m.tag) && ((D = I.params) == null || delete D.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: I }), this.relayer.request(I);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: s, opts: o } = e;
      await this.publish(t, s, o);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Vn.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(tr.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(tr.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class W6 {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t) => {
      const s = this.get(e);
      this.exists(e, t) || this.map.set(e, [...s, t]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const s = this.get(e);
      if (!this.exists(e, t))
        return;
      const o = s.filter((c) => c !== t);
      if (!o.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, o);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var G6 = Object.defineProperty, Y6 = Object.defineProperties, J6 = Object.getOwnPropertyDescriptors, dd = Object.getOwnPropertySymbols, Q6 = Object.prototype.hasOwnProperty, X6 = Object.prototype.propertyIsEnumerable, pd = (i, e, t) => e in i ? G6(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, vs = (i, e) => {
  for (var t in e || (e = {}))
    Q6.call(e, t) && pd(i, t, e[t]);
  if (dd)
    for (var t of dd(e))
      X6.call(e, t) && pd(i, t, e[t]);
  return i;
}, ru = (i, e) => Y6(i, J6(e));
class Z6 extends Y3 {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new W6(), this.events = new Ar.EventEmitter(), this.name = T6, this.version = R6, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = ji, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (s, o) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: o } });
      try {
        const c = Eu(o), d = { topic: s, relay: c };
        this.pending.set(s, d);
        const f = await this.rpcSubscribe(s, c);
        return this.onSubscribe(f, d), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: o } }), f;
      } catch (c) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(c), c;
      }
    }, this.unsubscribe = async (s, o) => {
      await this.restartToComplete(), this.isInitialized(), typeof (o == null ? void 0 : o.id) < "u" ? await this.unsubscribeById(s, o.id, o) : await this.unsubscribeByTopic(s, o);
    }, this.isSubscribed = async (s) => {
      if (this.topics.includes(s))
        return !0;
      const o = `${this.pendingSubscriptionWatchLabel}_${s}`;
      return await new Promise((c, d) => {
        const f = new ve.Watch();
        f.start(o);
        const y = setInterval(() => {
          !this.pending.has(s) && this.topics.includes(s) && (clearInterval(y), f.stop(o), c(!0)), f.elapsed(o) >= N6 && (clearInterval(y), f.stop(o), d(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => !1);
    }, this.on = (s, o) => {
      this.events.on(s, o);
    }, this.once = (s, o) => {
      this.events.once(s, o);
    }, this.off = (s, o) => {
      this.events.off(s, o);
    }, this.removeListener = (s, o) => {
      this.events.removeListener(s, o);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = Je.generateChildLogger(t, this.name), this.clientId = "";
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let s = !1;
    try {
      s = this.getSubscription(e).topic === t;
    } catch {
    }
    return s;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const s = this.topicMap.get(e);
    await Promise.all(s.map(async (o) => await this.unsubscribeById(e, o, t)));
  }
  async unsubscribeById(e, t, s) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: s } });
    try {
      const o = Eu(s);
      await this.rpcUnsubscribe(e, t, o);
      const c = _t("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, c), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: s } });
    } catch (o) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(o), o;
    }
  }
  async rpcSubscribe(e, t) {
    const s = { method: Vo(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await Is(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(tr.connection_stalled);
    }
    return qn(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const t = e[0].relay, s = { method: Vo(t.protocol).batchSubscribe, params: { topics: e.map((o) => o.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await Is(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(tr.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, s) {
    const o = { method: Vo(s.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: o }), this.relayer.request(o);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, ru(vs({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, vs({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, s) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, s), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, vs({}, t)), this.topicMap.set(t.topic, e), this.events.emit(Gr.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: s } = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const s = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(s.topic, e), this.events.emit(Gr.deleted, ru(vs({}, s), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Gr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(Gr.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: t } = ce("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const t = await this.rpcBatchSubscribe(e);
    ni(t) && this.onBatchSubscribe(t.map((s, o) => ru(vs({}, e[o]), { id: s })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed)
      return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Vn.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(tr.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(tr.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Gr.created, async (e) => {
      const t = Gr.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    }), this.events.on(Gr.deleted, async (e) => {
      const t = Gr.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e());
      }, this.pollingInterval);
    });
  }
}
var e2 = Object.defineProperty, gd = Object.getOwnPropertySymbols, t2 = Object.prototype.hasOwnProperty, r2 = Object.prototype.propertyIsEnumerable, yd = (i, e, t) => e in i ? e2(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, i2 = (i, e) => {
  for (var t in e || (e = {}))
    t2.call(e, t) && yd(i, t, e[t]);
  if (gd)
    for (var t of gd(e))
      r2.call(e, t) && yd(i, t, e[t]);
  return i;
};
class n2 extends W3 {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Ar.EventEmitter(), this.name = S6, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = /* @__PURE__ */ new Map(), this.request = async (t) => {
      this.logger.debug("Publishing Request Payload");
      const s = t.id, o = this.provider.request(t);
      this.requestsInFlight.set(s, { promise: o, request: t });
      try {
        return await this.toEstablishConnection(), await o;
      } catch (c) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(c), c;
      } finally {
        this.requestsInFlight.delete(s);
      }
    }, this.onPayloadHandler = (t) => {
      this.onProviderPayload(t);
    }, this.onConnectHandler = () => {
      this.events.emit(tr.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (t) => {
      this.logger.error(t), this.events.emit(tr.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(_i.payload, this.onPayloadHandler), this.provider.on(_i.connect, this.onConnectHandler), this.provider.on(_i.disconnect, this.onDisconnectHandler), this.provider.on(_i.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Je.generateChildLogger(e.logger, this.name) : Je.pino(Je.getDefaultLoggerOptions({ level: e.logger || D6 })), this.messages = new k6(this.logger, e.core), this.subscriber = new Z6(this, this.logger), this.publisher = new V6(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || eg, this.projectId = e.projectId, this.bundleId = eD(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${fd}...`), await this.restartTransport(fd);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, P6);
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, s) {
    this.isInitialized(), await this.publisher.publish(e, t, s), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now() });
  }
  async subscribe(e, t) {
    var s;
    this.isInitialized();
    let o = ((s = this.subscriber.topicMap.get(e)) == null ? void 0 : s[0]) || "";
    if (o)
      return o;
    let c;
    const d = (f) => {
      f.topic === e && (this.subscriber.off(Gr.created, d), c());
    };
    return await Promise.all([new Promise((f) => {
      c = f, this.subscriber.on(Gr.created, d);
    }), new Promise(async (f) => {
      o = await this.subscriber.subscribe(e, t), f();
    })]), o;
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."), this.requestsInFlight.forEach(async (e) => {
      await e.promise;
    })), this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Is(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((t) => {
          if (!this.initialized)
            return t();
          this.subscriber.once(Gr.resubscribed, () => {
            t();
          });
        }), new Promise(async (t, s) => {
          try {
            await Is(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (o) {
            s(o);
            return;
          }
          t();
        })]);
      } catch (t) {
        this.logger.error(t);
        const s = t;
        if (!this.isConnectionStalled(s.message))
          throw t;
        this.provider.events.emit(_i.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Uf())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Si(new US(oD({ sdkVersion: O6, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: s } = e;
    await this.messages.set(t, s);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: s } = e;
    if (!s || s.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
    if (!await this.subscriber.isSubscribed(t))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
    const o = this.messages.has(t, s);
    return o && this.logger.debug(`Ignoring duplicate message: ${s}`), o;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Gu(e)) {
      if (!e.method.endsWith(I6))
        return;
      const t = e.params, { topic: s, message: o, publishedAt: c } = t.data, d = { topic: s, message: o, publishedAt: c };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(i2({ type: "event", event: t.id }, d)), this.events.emit(t.id, d), await this.acknowledgePayload(e), await this.onMessageEvent(d);
    } else
      da(e) && this.events.emit(tr.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(tr.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = la(e.id, !0);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(_i.payload, this.onPayloadHandler), this.provider.off(_i.connect, this.onConnectHandler), this.provider.off(_i.disconnect, this.onDisconnectHandler), this.provider.off(_i.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(tr.connection_stalled, () => {
      this.restartTransport().catch((t) => this.logger.error(t));
    });
    let e = await Uf();
    e3(async (t) => {
      this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch((s) => this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(tr.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, ve.toMiliseconds(x6)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress)
        return await new Promise((e) => {
          const t = setInterval(() => {
            this.connected && (clearInterval(t), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var s2 = Object.defineProperty, vd = Object.getOwnPropertySymbols, o2 = Object.prototype.hasOwnProperty, a2 = Object.prototype.propertyIsEnumerable, md = (i, e, t) => e in i ? s2(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, wd = (i, e) => {
  for (var t in e || (e = {}))
    o2.call(e, t) && md(i, t, e[t]);
  if (vd)
    for (var t of vd(e))
      a2.call(e, t) && md(i, t, e[t]);
  return i;
};
class ga extends G3 {
  constructor(e, t, s, o = ji, c = void 0) {
    super(e, t, s, o), this.core = e, this.logger = t, this.name = s, this.map = /* @__PURE__ */ new Map(), this.version = C6, this.cached = [], this.initialized = !1, this.storagePrefix = ji, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((d) => {
        this.getKey && d !== null && !hr(d) ? this.map.set(this.getKey(d), d) : TD(d) ? this.map.set(d.id, d) : RD(d) && this.map.set(d.topic, d);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (d, f) => {
      this.isInitialized(), this.map.has(d) ? await this.update(d, f) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: d, value: f }), this.map.set(d, f), await this.persist());
    }, this.get = (d) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: d }), this.getData(d)), this.getAll = (d) => (this.isInitialized(), d ? this.values.filter((f) => Object.keys(d).every((y) => MS(f[y], d[y]))) : this.values), this.update = async (d, f) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: d, update: f });
      const y = wd(wd({}, this.getData(d)), f);
      this.map.set(d, y), await this.persist();
    }, this.delete = async (d, f) => {
      this.isInitialized(), this.map.has(d) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: d, reason: f }), this.map.delete(d), await this.persist());
    }, this.logger = Je.generateChildLogger(t, this.name), this.storagePrefix = o, this.getKey = c;
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: s } = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(s), new Error(s);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: t } = ce("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class c2 {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = L6, this.version = U6, this.events = new Ru(), this.initialized = !1, this.storagePrefix = ji, this.ignoredPayloadTypes = [hn], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: s }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...s])];
    }, this.create = async () => {
      this.isInitialized();
      const s = bu(), o = await this.core.crypto.setSymKey(s), c = Pr(ve.FIVE_MINUTES), d = { protocol: Zp }, f = { topic: o, expiry: c, relay: d, active: !1 }, y = ED({ protocol: this.core.protocol, version: this.core.version, topic: o, symKey: s, relay: d, expiryTimestamp: c });
      return await this.pairings.set(o, f), await this.core.relayer.subscribe(o), this.core.expirer.set(o, c), { topic: o, uri: y };
    }, this.pair = async (s) => {
      this.isInitialized(), this.isValidPair(s);
      const { topic: o, symKey: c, relay: d, expiryTimestamp: f } = Af(s.uri);
      let y;
      if (this.pairings.keys.includes(o) && (y = this.pairings.get(o), y.active))
        throw new Error(`Pairing already exists: ${o}. Please try again with a new connection URI.`);
      const g = f || Pr(ve.FIVE_MINUTES), m = { topic: o, relay: d, expiry: g, active: !1 };
      return await this.pairings.set(o, m), this.core.expirer.set(o, g), s.activatePairing && await this.activate({ topic: o }), this.events.emit(_s.create, m), this.core.crypto.keychain.has(o) || (await this.core.crypto.setSymKey(c, o), await this.core.relayer.subscribe(o, { relay: d })), m;
    }, this.activate = async ({ topic: s }) => {
      this.isInitialized();
      const o = Pr(ve.THIRTY_DAYS);
      await this.pairings.update(s, { active: !0, expiry: o }), this.core.expirer.set(s, o);
    }, this.ping = async (s) => {
      this.isInitialized(), await this.isValidPing(s);
      const { topic: o } = s;
      if (this.pairings.keys.includes(o)) {
        const c = await this.sendRequest(o, "wc_pairingPing", {}), { done: d, resolve: f, reject: y } = $n();
        this.events.once(Ut("pairing_ping", c), ({ error: g }) => {
          g ? y(g) : f();
        }), await d();
      }
    }, this.updateExpiry = async ({ topic: s, expiry: o }) => {
      this.isInitialized(), await this.pairings.update(s, { expiry: o });
    }, this.updateMetadata = async ({ topic: s, metadata: o }) => {
      this.isInitialized(), await this.pairings.update(s, { peerMetadata: o });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (s) => {
      this.isInitialized(), await this.isValidDisconnect(s);
      const { topic: o } = s;
      this.pairings.keys.includes(o) && (await this.sendRequest(o, "wc_pairingDelete", _t("USER_DISCONNECTED")), await this.deletePairing(o));
    }, this.sendRequest = async (s, o, c) => {
      const d = zn(o, c), f = await this.core.crypto.encode(s, d), y = ys[o].req;
      return this.core.history.set(s, d), this.core.relayer.publish(s, f, y), d.id;
    }, this.sendResult = async (s, o, c) => {
      const d = la(s, c), f = await this.core.crypto.encode(o, d), y = await this.core.history.get(o, s), g = ys[y.request.method].res;
      await this.core.relayer.publish(o, f, g), await this.core.history.resolve(d);
    }, this.sendError = async (s, o, c) => {
      const d = fa(s, c), f = await this.core.crypto.encode(o, d), y = await this.core.history.get(o, s), g = ys[y.request.method] ? ys[y.request.method].res : ys.unregistered_method.res;
      await this.core.relayer.publish(o, f, g), await this.core.history.resolve(d);
    }, this.deletePairing = async (s, o) => {
      await this.core.relayer.unsubscribe(s), await Promise.all([this.pairings.delete(s, _t("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), o ? Promise.resolve() : this.core.expirer.del(s)]);
    }, this.cleanup = async () => {
      const s = this.pairings.getAll().filter((o) => Mi(o.expiry));
      await Promise.all(s.map((o) => this.deletePairing(o.topic)));
    }, this.onRelayEventRequest = (s) => {
      const { topic: o, payload: c } = s;
      switch (c.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(o, c);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(o, c);
        default:
          return this.onUnknownRpcMethodRequest(o, c);
      }
    }, this.onRelayEventResponse = async (s) => {
      const { topic: o, payload: c } = s, d = (await this.core.history.get(o, c.id)).request.method;
      switch (d) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(o, c);
        default:
          return this.onUnknownRpcMethodResponse(d);
      }
    }, this.onPairingPingRequest = async (s, o) => {
      const { id: c } = o;
      try {
        this.isValidPing({ topic: s }), await this.sendResult(c, s, !0), this.events.emit(_s.ping, { id: c, topic: s });
      } catch (d) {
        await this.sendError(c, s, d), this.logger.error(d);
      }
    }, this.onPairingPingResponse = (s, o) => {
      const { id: c } = o;
      setTimeout(() => {
        Di(o) ? this.events.emit(Ut("pairing_ping", c), {}) : Yr(o) && this.events.emit(Ut("pairing_ping", c), { error: o.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (s, o) => {
      const { id: c } = o;
      try {
        this.isValidDisconnect({ topic: s }), await this.deletePairing(s), this.events.emit(_s.delete, { id: c, topic: s });
      } catch (d) {
        await this.sendError(c, s, d), this.logger.error(d);
      }
    }, this.onUnknownRpcMethodRequest = async (s, o) => {
      const { id: c, method: d } = o;
      try {
        if (this.registeredMethods.includes(d))
          return;
        const f = _t("WC_METHOD_UNSUPPORTED", d);
        await this.sendError(c, s, f), this.logger.error(f);
      } catch (f) {
        await this.sendError(c, s, f), this.logger.error(f);
      }
    }, this.onUnknownRpcMethodResponse = (s) => {
      this.registeredMethods.includes(s) || this.logger.error(_t("WC_METHOD_UNSUPPORTED", s));
    }, this.isValidPair = (s) => {
      var o;
      if (!_r(s)) {
        const { message: d } = ce("MISSING_OR_INVALID", `pair() params: ${s}`);
        throw new Error(d);
      }
      if (!AD(s.uri)) {
        const { message: d } = ce("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
        throw new Error(d);
      }
      const c = Af(s.uri);
      if (!((o = c == null ? void 0 : c.relay) != null && o.protocol)) {
        const { message: d } = ce("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(d);
      }
      if (!(c != null && c.symKey)) {
        const { message: d } = ce("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(d);
      }
      if (c != null && c.expiryTimestamp && ve.toMiliseconds(c == null ? void 0 : c.expiryTimestamp) < Date.now()) {
        const { message: d } = ce("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(d);
      }
    }, this.isValidPing = async (s) => {
      if (!_r(s)) {
        const { message: c } = ce("MISSING_OR_INVALID", `ping() params: ${s}`);
        throw new Error(c);
      }
      const { topic: o } = s;
      await this.isValidPairingTopic(o);
    }, this.isValidDisconnect = async (s) => {
      if (!_r(s)) {
        const { message: c } = ce("MISSING_OR_INVALID", `disconnect() params: ${s}`);
        throw new Error(c);
      }
      const { topic: o } = s;
      await this.isValidPairingTopic(o);
    }, this.isValidPairingTopic = async (s) => {
      if (!Gt(s, !1)) {
        const { message: o } = ce("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
        throw new Error(o);
      }
      if (!this.pairings.keys.includes(s)) {
        const { message: o } = ce("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
        throw new Error(o);
      }
      if (Mi(this.pairings.get(s).expiry)) {
        await this.deletePairing(s);
        const { message: o } = ce("EXPIRED", `pairing topic: ${s}`);
        throw new Error(o);
      }
    }, this.core = e, this.logger = Je.generateChildLogger(t, this.name), this.pairings = new ga(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(tr.message, async (e) => {
      const { topic: t, message: s } = e;
      if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))
        return;
      const o = await this.core.crypto.decode(t, s);
      try {
        Gu(o) ? (this.core.history.set(t, o), this.onRelayEventRequest({ topic: t, payload: o })) : da(o) && (await this.core.history.resolve(o), await this.onRelayEventResponse({ topic: t, payload: o }), this.core.history.delete(t, o.id));
      } catch (c) {
        this.logger.error(c);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Fr.expired, async (e) => {
      const { topic: t } = Ep(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(_s.expire, { topic: t }));
    });
  }
}
class u2 extends K3 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new Ar.EventEmitter(), this.name = $6, this.version = M6, this.cached = [], this.initialized = !1, this.storagePrefix = ji, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (s, o, c) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: s, request: o, chainId: c }), this.records.has(o.id))
        return;
      const d = { id: o.id, topic: s, request: { method: o.method, params: o.params || null }, chainId: c, expiry: Pr(ve.THIRTY_DAYS) };
      this.records.set(d.id, d), this.events.emit(ii.created, d);
    }, this.resolve = async (s) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: s }), !this.records.has(s.id))
        return;
      const o = await this.getRecord(s.id);
      typeof o.response > "u" && (o.response = Yr(s) ? { error: s.error } : { result: s.result }, this.records.set(o.id, o), this.events.emit(ii.updated, o));
    }, this.get = async (s, o) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: s, id: o }), await this.getRecord(o)), this.delete = (s, o) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: o }), this.values.forEach((c) => {
        if (c.topic === s) {
          if (typeof o < "u" && c.id !== o)
            return;
          this.records.delete(c.id), this.events.emit(ii.deleted, c);
        }
      });
    }, this.exists = async (s, o) => (this.isInitialized(), this.records.has(o) ? (await this.getRecord(o)).topic === s : !1), this.on = (s, o) => {
      this.events.on(s, o);
    }, this.once = (s, o) => {
      this.events.once(s, o);
    }, this.off = (s, o) => {
      this.events.off(s, o);
    }, this.removeListener = (s, o) => {
      this.events.removeListener(s, o);
    }, this.logger = Je.generateChildLogger(t, this.name);
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u")
        return;
      const s = { topic: t.topic, request: zn(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(s);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: s } = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(ii.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: t } = ce("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(ii.created, (e) => {
      const t = ii.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(ii.updated, (e) => {
      const t = ii.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(ii.deleted, (e) => {
      const t = ii.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.core.heartbeat.on(Vn.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        ve.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class h2 extends J3 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new Ar.EventEmitter(), this.name = j6, this.version = q6, this.cached = [], this.initialized = !1, this.storagePrefix = ji, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (s) => {
      try {
        const o = this.formatTarget(s);
        return typeof this.getExpiration(o) < "u";
      } catch {
        return !1;
      }
    }, this.set = (s, o) => {
      this.isInitialized();
      const c = this.formatTarget(s), d = { target: c, expiry: o };
      this.expirations.set(c, d), this.checkExpiry(c, d), this.events.emit(Fr.created, { target: c, expiration: d });
    }, this.get = (s) => {
      this.isInitialized();
      const o = this.formatTarget(s);
      return this.getExpiration(o);
    }, this.del = (s) => {
      if (this.isInitialized(), this.has(s)) {
        const o = this.formatTarget(s), c = this.getExpiration(o);
        this.expirations.delete(o), this.events.emit(Fr.deleted, { target: o, expiration: c });
      }
    }, this.on = (s, o) => {
      this.events.on(s, o);
    }, this.once = (s, o) => {
      this.events.once(s, o);
    }, this.off = (s, o) => {
      this.events.off(s, o);
    }, this.removeListener = (s, o) => {
      this.events.removeListener(s, o);
    }, this.logger = Je.generateChildLogger(t, this.name);
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string")
      return aD(e);
    if (typeof e == "number")
      return cD(e);
    const { message: t } = ce("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Fr.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: t } = ce("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: s } = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(s), new Error(s);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: s } = t;
    ve.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(Fr.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Vn.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Fr.created, (e) => {
      const t = Fr.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(Fr.expired, (e) => {
      const t = Fr.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(Fr.deleted, (e) => {
      const t = Fr.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class l2 extends Q3 {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.name = tu, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (s) => {
      if (this.verifyDisabled || Bn() || !Kn())
        return;
      const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      this.verifyUrl !== o && this.removeIframe(), this.verifyUrl = o;
      try {
        await this.createIframe();
      } catch (c) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(c);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = xu;
        try {
          await this.createIframe();
        } catch (c) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(c), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (s) => {
      this.initialized ? this.sendPost(s.attestationId) : (this.addToQueue(s.attestationId), await this.init());
    }, this.resolve = async (s) => {
      if (this.isDevEnv)
        return "";
      const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      let c;
      try {
        c = await this.fetchAttestation(s.attestationId, o);
      } catch (d) {
        this.logger.info(`failed to resolve attestation: ${s.attestationId} from url: ${o}`), this.logger.info(d), c = await this.fetchAttestation(s.attestationId, xu);
      }
      return c;
    }, this.fetchAttestation = async (s, o) => {
      this.logger.info(`resolving attestation: ${s} from url: ${o}`);
      const c = this.startAbortTimer(ve.ONE_SECOND * 2), d = await fetch(`${o}/attestation/${s}`, { signal: this.abortController.signal });
      return clearTimeout(c), d.status === 200 ? await d.json() : void 0;
    }, this.addToQueue = (s) => {
      this.queue.push(s);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((s) => this.sendPost(s)), this.queue = []);
    }, this.sendPost = (s) => {
      var o;
      try {
        if (!this.iframe)
          return;
        (o = this.iframe.contentWindow) == null || o.postMessage(s, "*"), this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let s;
      const o = (c) => {
        c.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", o), s());
      };
      await Promise.race([new Promise((c) => {
        if (document.getElementById(tu))
          return c();
        window.addEventListener("message", o);
        const d = document.createElement("iframe");
        d.id = tu, d.src = `${this.verifyUrl}/${this.projectId}`, d.style.display = "none", document.body.append(d), this.iframe = d, s = c;
      }), new Promise((c, d) => setTimeout(() => {
        window.removeEventListener("message", o), d("verify iframe load timeout");
      }, ve.toMiliseconds(ve.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (s) => {
      let o = s || Mn;
      return z6.includes(o) || (this.logger.info(`verify url: ${o}, not included in trusted list, assigning default: ${Mn}`), o = Mn), o;
    }, this.logger = Je.generateChildLogger(t, this.name), this.verifyUrl = Mn, this.abortController = new AbortController(), this.isDevEnv = Hu() && process.env.IS_VITEST;
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), ve.toMiliseconds(e));
  }
}
class f2 extends X3 {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.context = F6, this.registerDeviceToken = async (s) => {
      const { clientId: o, token: c, notificationType: d, enableEncrypted: f = !1 } = s, y = `${H6}/${this.projectId}/clients`;
      await FS(y, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: o, type: d, token: c, always_raw: f }) });
    }, this.logger = Je.generateChildLogger(t, this.context);
  }
}
var d2 = Object.defineProperty, _d = Object.getOwnPropertySymbols, p2 = Object.prototype.hasOwnProperty, g2 = Object.prototype.propertyIsEnumerable, bd = (i, e, t) => e in i ? d2(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Ed = (i, e) => {
  for (var t in e || (e = {}))
    p2.call(e, t) && bd(i, t, e[t]);
  if (_d)
    for (var t of _d(e))
      g2.call(e, t) && bd(i, t, e[t]);
  return i;
};
class Ju extends B3 {
  constructor(e) {
    super(e), this.protocol = Xp, this.version = f6, this.name = Yu, this.events = new Ar.EventEmitter(), this.initialized = !1, this.on = (s, o) => this.events.on(s, o), this.once = (s, o) => this.events.once(s, o), this.off = (s, o) => this.events.off(s, o), this.removeListener = (s, o) => this.events.removeListener(s, o), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || eg, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Je.pino(Je.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || d6.logger }));
    this.logger = Je.generateChildLogger(t, this.name), this.heartbeat = new Vn.HeartBeat(), this.crypto = new K6(this, this.logger, e == null ? void 0 : e.keychain), this.history = new u2(this, this.logger), this.expirer = new h2(this, this.logger), this.storage = e != null && e.storage ? e.storage : new L3(Ed(Ed({}, p6), e == null ? void 0 : e.storageOptions)), this.relayer = new n2({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new c2(this, this.logger), this.verify = new l2(this.projectId || "", this.logger), this.echoClient = new f2(this.projectId || "", this.logger);
  }
  static async init(e) {
    const t = new Ju(e);
    await t.initialize();
    const s = await t.crypto.getClientId();
    return await t.storage.setItem(A6, s), t;
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
}
const y2 = Ju, tg = "wc", rg = 2, ig = "client", Qu = `${tg}@${rg}:${ig}:`, iu = { name: ig, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Dd = "WALLETCONNECT_DEEPLINK_CHOICE", v2 = "proposal", ng = "Proposal expired", m2 = "session", Ho = ve.SEVEN_DAYS, w2 = "engine", bi = { wc_sessionPropose: { req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, nu = { min: ve.FIVE_MINUTES, max: ve.SEVEN_DAYS }, Ei = { idle: "IDLE", active: "ACTIVE" }, _2 = "request", b2 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var E2 = Object.defineProperty, D2 = Object.defineProperties, S2 = Object.getOwnPropertyDescriptors, Sd = Object.getOwnPropertySymbols, I2 = Object.prototype.hasOwnProperty, x2 = Object.prototype.propertyIsEnumerable, Id = (i, e, t) => e in i ? E2(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, ur = (i, e) => {
  for (var t in e || (e = {}))
    I2.call(e, t) && Id(i, t, e[t]);
  if (Sd)
    for (var t of Sd(e))
      x2.call(e, t) && Id(i, t, e[t]);
  return i;
}, Un = (i, e) => D2(i, S2(e));
class O2 extends eS {
  constructor(e) {
    super(e), this.name = w2, this.events = new Ru(), this.initialized = !1, this.ignoredPayloadTypes = [hn], this.requestQueue = { state: Ei.idle, queue: [] }, this.sessionRequestQueue = { state: Ei.idle, queue: [] }, this.requestQueueDelay = ve.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(bi) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, ve.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (t) => {
      await this.isInitialized();
      const s = Un(ur({}, t), { requiredNamespaces: t.requiredNamespaces || {}, optionalNamespaces: t.optionalNamespaces || {} });
      await this.isValidConnect(s);
      const { pairingTopic: o, requiredNamespaces: c, optionalNamespaces: d, sessionProperties: f, relays: y } = s;
      let g = o, m, D = !1;
      if (g && (D = this.client.core.pairing.pairings.get(g).active), !g || !D) {
        const { topic: O, uri: A } = await this.client.core.pairing.create();
        g = O, m = A;
      }
      const I = await this.client.core.crypto.generateKeyPair(), T = bi.wc_sessionPropose.req.ttl || ve.FIVE_MINUTES, P = Pr(T), F = ur({ requiredNamespaces: c, optionalNamespaces: d, relays: y ?? [{ protocol: Zp }], proposer: { publicKey: I, metadata: this.client.metadata }, expiryTimestamp: P }, f && { sessionProperties: f }), { reject: B, resolve: ie, done: L } = $n(T, ng);
      if (this.events.once(Ut("session_connect"), async ({ error: O, session: A }) => {
        if (O)
          B(O);
        else if (A) {
          A.self.publicKey = I;
          const E = Un(ur({}, A), { requiredNamespaces: F.requiredNamespaces, optionalNamespaces: F.optionalNamespaces });
          await this.client.session.set(A.topic, E), await this.setExpiry(A.topic, A.expiry), g && await this.client.core.pairing.updateMetadata({ topic: g, metadata: A.peer.metadata }), ie(E);
        }
      }), !g) {
        const { message: O } = ce("NO_MATCHING_KEY", `connect() pairing topic: ${g}`);
        throw new Error(O);
      }
      const j = await this.sendRequest({ topic: g, method: "wc_sessionPropose", params: F, throwOnFailedPublish: !0 });
      return await this.setProposal(j, ur({ id: j }, F)), { uri: m, approval: L };
    }, this.pair = async (t) => (await this.isInitialized(), await this.client.core.pairing.pair(t)), this.approve = async (t) => {
      await this.isInitialized(), await this.isValidApprove(t);
      const { id: s, relayProtocol: o, namespaces: c, sessionProperties: d } = t, f = this.client.proposal.get(s);
      let { pairingTopic: y, proposer: g, requiredNamespaces: m, optionalNamespaces: D } = f;
      y = y || "";
      const I = await this.client.core.crypto.generateKeyPair(), T = g.publicKey, P = await this.client.core.crypto.generateSharedKey(I, T);
      y && s && (await this.client.core.pairing.updateMetadata({ topic: y, metadata: g.metadata }), await this.sendResult({ id: s, topic: y, result: { relay: { protocol: o ?? "irn" }, responderPublicKey: I } }), await this.client.proposal.delete(s, _t("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: y }));
      const F = ur({ relay: { protocol: o ?? "irn" }, namespaces: c, pairingTopic: y, controller: { publicKey: I, metadata: this.client.metadata }, expiry: Pr(Ho) }, d && { sessionProperties: d });
      await this.client.core.relayer.subscribe(P);
      const B = Un(ur({}, F), { topic: P, requiredNamespaces: m, optionalNamespaces: D, pairingTopic: y, acknowledged: !1, self: F.controller, peer: { publicKey: g.publicKey, metadata: g.metadata }, controller: I });
      await this.client.session.set(P, B);
      try {
        await this.sendRequest({ topic: P, method: "wc_sessionSettle", params: F, throwOnFailedPublish: !0 });
      } catch (ie) {
        throw this.client.logger.error(ie), this.client.session.delete(P, _t("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(P), ie;
      }
      return await this.setExpiry(P, Pr(Ho)), { topic: P, acknowledged: () => new Promise((ie) => setTimeout(() => ie(this.client.session.get(P)), 500)) };
    }, this.reject = async (t) => {
      await this.isInitialized(), await this.isValidReject(t);
      const { id: s, reason: o } = t, { pairingTopic: c } = this.client.proposal.get(s);
      c && (await this.sendError(s, c, o), await this.client.proposal.delete(s, _t("USER_DISCONNECTED")));
    }, this.update = async (t) => {
      await this.isInitialized(), await this.isValidUpdate(t);
      const { topic: s, namespaces: o } = t, c = await this.sendRequest({ topic: s, method: "wc_sessionUpdate", params: { namespaces: o } }), { done: d, resolve: f, reject: y } = $n();
      return this.events.once(Ut("session_update", c), ({ error: g }) => {
        g ? y(g) : f();
      }), await this.client.session.update(s, { namespaces: o }), { acknowledged: d };
    }, this.extend = async (t) => {
      await this.isInitialized(), await this.isValidExtend(t);
      const { topic: s } = t, o = await this.sendRequest({ topic: s, method: "wc_sessionExtend", params: {} }), { done: c, resolve: d, reject: f } = $n();
      return this.events.once(Ut("session_extend", o), ({ error: y }) => {
        y ? f(y) : d();
      }), await this.setExpiry(s, Pr(Ho)), { acknowledged: c };
    }, this.request = async (t) => {
      await this.isInitialized(), await this.isValidRequest(t);
      const { chainId: s, request: o, topic: c, expiry: d = bi.wc_sessionRequest.req.ttl } = t, f = Wu(), { done: y, resolve: g, reject: m } = $n(d, "Request expired. Please try again.");
      return this.events.once(Ut("session_request", f), ({ error: D, result: I }) => {
        D ? m(D) : g(I);
      }), await Promise.all([new Promise(async (D) => {
        await this.sendRequest({ clientRpcId: f, topic: c, method: "wc_sessionRequest", params: { request: Un(ur({}, o), { expiryTimestamp: Pr(d) }), chainId: s }, expiry: d, throwOnFailedPublish: !0 }).catch((I) => m(I)), this.client.events.emit("session_request_sent", { topic: c, request: o, chainId: s, id: f }), D();
      }), new Promise(async (D) => {
        const I = await hD(this.client.core.storage, Dd);
        uD({ id: f, topic: c, wcDeepLink: I }), D();
      }), y()]).then((D) => D[2]);
    }, this.respond = async (t) => {
      await this.isInitialized(), await this.isValidRespond(t);
      const { topic: s, response: o } = t, { id: c } = o;
      Di(o) ? await this.sendResult({ id: c, topic: s, result: o.result, throwOnFailedPublish: !0 }) : Yr(o) && await this.sendError(c, s, o.error), this.cleanupAfterResponse(t);
    }, this.ping = async (t) => {
      await this.isInitialized(), await this.isValidPing(t);
      const { topic: s } = t;
      if (this.client.session.keys.includes(s)) {
        const o = await this.sendRequest({ topic: s, method: "wc_sessionPing", params: {} }), { done: c, resolve: d, reject: f } = $n();
        this.events.once(Ut("session_ping", o), ({ error: y }) => {
          y ? f(y) : d();
        }), await c();
      } else
        this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({ topic: s });
    }, this.emit = async (t) => {
      await this.isInitialized(), await this.isValidEmit(t);
      const { topic: s, event: o, chainId: c } = t;
      await this.sendRequest({ topic: s, method: "wc_sessionEvent", params: { event: o, chainId: c } });
    }, this.disconnect = async (t) => {
      await this.isInitialized(), await this.isValidDisconnect(t);
      const { topic: s } = t;
      if (this.client.session.keys.includes(s))
        await this.sendRequest({ topic: s, method: "wc_sessionDelete", params: _t("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: s, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(s))
        await this.client.core.pairing.disconnect({ topic: s });
      else {
        const { message: o } = ce("MISMATCHED_TOPIC", `Session or pairing topic not found: ${s}`);
        throw new Error(o);
      }
    }, this.find = (t) => (this.isInitialized(), this.client.session.getAll().filter((s) => PD(s, t))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async (t) => {
      if (t.pairingTopic)
        try {
          const s = this.client.core.pairing.pairings.get(t.pairingTopic), o = this.client.core.pairing.pairings.getAll().filter((c) => {
            var d, f;
            return ((d = c.peerMetadata) == null ? void 0 : d.url) && ((f = c.peerMetadata) == null ? void 0 : f.url) === t.peer.metadata.url && c.topic && c.topic !== s.topic;
          });
          if (o.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${o.length} duplicate pairing(s)`), await Promise.all(o.map((c) => this.client.core.pairing.disconnect({ topic: c.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (s) {
          this.client.logger.error(s);
        }
    }, this.deleteSession = async (t) => {
      const { topic: s, expirerHasDeleted: o = !1, emitEvent: c = !0, id: d = 0 } = t, { self: f } = this.client.session.get(s);
      await this.client.core.relayer.unsubscribe(s), await this.client.session.delete(s, _t("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(f.publicKey) && await this.client.core.crypto.deleteKeyPair(f.publicKey), this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s), o || this.client.core.expirer.del(s), this.client.core.storage.removeItem(Dd).catch((y) => this.client.logger.warn(y)), this.getPendingSessionRequests().forEach((y) => {
        y.topic === s && this.deletePendingSessionRequest(y.id, _t("USER_DISCONNECTED"));
      }), c && this.client.events.emit("session_delete", { id: d, topic: s });
    }, this.deleteProposal = async (t, s) => {
      await Promise.all([this.client.proposal.delete(t, _t("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(t)]);
    }, this.deletePendingSessionRequest = async (t, s, o = !1) => {
      await Promise.all([this.client.pendingRequest.delete(t, s), o ? Promise.resolve() : this.client.core.expirer.del(t)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((c) => c.id !== t), o && (this.sessionRequestQueue.state = Ei.idle, this.client.events.emit("session_request_expire", { id: t }));
    }, this.setExpiry = async (t, s) => {
      this.client.session.keys.includes(t) && await this.client.session.update(t, { expiry: s }), this.client.core.expirer.set(t, s);
    }, this.setProposal = async (t, s) => {
      await this.client.proposal.set(t, s), this.client.core.expirer.set(t, Pr(bi.wc_sessionPropose.req.ttl));
    }, this.setPendingSessionRequest = async (t) => {
      const { id: s, topic: o, params: c, verifyContext: d } = t, f = c.request.expiryTimestamp || Pr(bi.wc_sessionRequest.req.ttl);
      await this.client.pendingRequest.set(s, { id: s, topic: o, params: c, verifyContext: d }), f && this.client.core.expirer.set(s, f);
    }, this.sendRequest = async (t) => {
      const { topic: s, method: o, params: c, expiry: d, relayRpcId: f, clientRpcId: y, throwOnFailedPublish: g } = t, m = zn(o, c, y);
      if (Kn() && b2.includes(o)) {
        const T = qn(JSON.stringify(m));
        this.client.core.verify.register({ attestationId: T });
      }
      const D = await this.client.core.crypto.encode(s, m), I = bi[o].req;
      return d && (I.ttl = d), f && (I.id = f), this.client.core.history.set(s, m), g ? (I.internal = Un(ur({}, I.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, D, I)) : this.client.core.relayer.publish(s, D, I).catch((T) => this.client.logger.error(T)), m.id;
    }, this.sendResult = async (t) => {
      const { id: s, topic: o, result: c, throwOnFailedPublish: d } = t, f = la(s, c), y = await this.client.core.crypto.encode(o, f), g = await this.client.core.history.get(o, s), m = bi[g.request.method].res;
      d ? (m.internal = Un(ur({}, m.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(o, y, m)) : this.client.core.relayer.publish(o, y, m).catch((D) => this.client.logger.error(D)), await this.client.core.history.resolve(f);
    }, this.sendError = async (t, s, o) => {
      const c = fa(t, o), d = await this.client.core.crypto.encode(s, c), f = await this.client.core.history.get(s, t), y = bi[f.request.method].res;
      this.client.core.relayer.publish(s, d, y), await this.client.core.history.resolve(c);
    }, this.cleanup = async () => {
      const t = [], s = [];
      this.client.session.getAll().forEach((o) => {
        let c = !1;
        Mi(o.expiry) && (c = !0), this.client.core.crypto.keychain.has(o.topic) || (c = !0), c && t.push(o.topic);
      }), this.client.proposal.getAll().forEach((o) => {
        Mi(o.expiryTimestamp) && s.push(o.id);
      }), await Promise.all([...t.map((o) => this.deleteSession({ topic: o })), ...s.map((o) => this.deleteProposal(o))]);
    }, this.onRelayEventRequest = async (t) => {
      this.requestQueue.queue.push(t), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === Ei.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = Ei.active;
        const t = this.requestQueue.queue.shift();
        if (t)
          try {
            this.processRequest(t), await new Promise((s) => setTimeout(s, 300));
          } catch (s) {
            this.client.logger.warn(s);
          }
      }
      this.requestQueue.state = Ei.idle;
    }, this.processRequest = (t) => {
      const { topic: s, payload: o } = t, c = o.method;
      switch (c) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s, o);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s, o);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s, o);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s, o);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s, o);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s, o);
        case "wc_sessionRequest":
          return this.onSessionRequest(s, o);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s, o);
        default:
          return this.client.logger.info(`Unsupported request method ${c}`);
      }
    }, this.onRelayEventResponse = async (t) => {
      const { topic: s, payload: o } = t, c = (await this.client.core.history.get(s, o.id)).request.method;
      switch (c) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s, o);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s, o);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s, o);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s, o);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s, o);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s, o);
        default:
          return this.client.logger.info(`Unsupported response method ${c}`);
      }
    }, this.onRelayEventUnknownPayload = (t) => {
      const { topic: s } = t, { message: o } = ce("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(o);
    }, this.onSessionProposeRequest = async (t, s) => {
      const { params: o, id: c } = s;
      try {
        this.isValidConnect(ur({}, s.params));
        const d = o.expiryTimestamp || Pr(bi.wc_sessionPropose.req.ttl), f = ur({ id: c, pairingTopic: t, expiryTimestamp: d }, o);
        await this.setProposal(c, f);
        const y = qn(JSON.stringify(s)), g = await this.getVerifyContext(y, f.proposer.metadata);
        this.client.events.emit("session_proposal", { id: c, params: f, verifyContext: g });
      } catch (d) {
        await this.sendError(c, t, d), this.client.logger.error(d);
      }
    }, this.onSessionProposeResponse = async (t, s) => {
      const { id: o } = s;
      if (Di(s)) {
        const { result: c } = s;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: c });
        const d = this.client.proposal.get(o);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: d });
        const f = d.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: f });
        const y = c.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: y });
        const g = await this.client.core.crypto.generateSharedKey(f, y);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: g });
        const m = await this.client.core.relayer.subscribe(g);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: m }), await this.client.core.pairing.activate({ topic: t });
      } else
        Yr(s) && (await this.client.proposal.delete(o, _t("USER_DISCONNECTED")), this.events.emit(Ut("session_connect"), { error: s.error }));
    }, this.onSessionSettleRequest = async (t, s) => {
      const { id: o, params: c } = s;
      try {
        this.isValidSessionSettleRequest(c);
        const { relay: d, controller: f, expiry: y, namespaces: g, sessionProperties: m, pairingTopic: D } = s.params, I = ur({ topic: t, relay: d, expiry: y, namespaces: g, acknowledged: !0, pairingTopic: D, requiredNamespaces: {}, optionalNamespaces: {}, controller: f.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: f.publicKey, metadata: f.metadata } }, m && { sessionProperties: m });
        await this.sendResult({ id: s.id, topic: t, result: !0 }), this.events.emit(Ut("session_connect"), { session: I }), this.cleanupDuplicatePairings(I);
      } catch (d) {
        await this.sendError(o, t, d), this.client.logger.error(d);
      }
    }, this.onSessionSettleResponse = async (t, s) => {
      const { id: o } = s;
      Di(s) ? (await this.client.session.update(t, { acknowledged: !0 }), this.events.emit(Ut("session_approve", o), {})) : Yr(s) && (await this.client.session.delete(t, _t("USER_DISCONNECTED")), this.events.emit(Ut("session_approve", o), { error: s.error }));
    }, this.onSessionUpdateRequest = async (t, s) => {
      const { params: o, id: c } = s;
      try {
        const d = `${t}_session_update`, f = qo.get(d);
        if (f && this.isRequestOutOfSync(f, c)) {
          this.client.logger.info(`Discarding out of sync request - ${c}`);
          return;
        }
        this.isValidUpdate(ur({ topic: t }, o)), await this.client.session.update(t, { namespaces: o.namespaces }), await this.sendResult({ id: c, topic: t, result: !0 }), this.client.events.emit("session_update", { id: c, topic: t, params: o }), qo.set(d, c);
      } catch (d) {
        await this.sendError(c, t, d), this.client.logger.error(d);
      }
    }, this.isRequestOutOfSync = (t, s) => parseInt(s.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, s) => {
      const { id: o } = s;
      Di(s) ? this.events.emit(Ut("session_update", o), {}) : Yr(s) && this.events.emit(Ut("session_update", o), { error: s.error });
    }, this.onSessionExtendRequest = async (t, s) => {
      const { id: o } = s;
      try {
        this.isValidExtend({ topic: t }), await this.setExpiry(t, Pr(Ho)), await this.sendResult({ id: o, topic: t, result: !0 }), this.client.events.emit("session_extend", { id: o, topic: t });
      } catch (c) {
        await this.sendError(o, t, c), this.client.logger.error(c);
      }
    }, this.onSessionExtendResponse = (t, s) => {
      const { id: o } = s;
      Di(s) ? this.events.emit(Ut("session_extend", o), {}) : Yr(s) && this.events.emit(Ut("session_extend", o), { error: s.error });
    }, this.onSessionPingRequest = async (t, s) => {
      const { id: o } = s;
      try {
        this.isValidPing({ topic: t }), await this.sendResult({ id: o, topic: t, result: !0 }), this.client.events.emit("session_ping", { id: o, topic: t });
      } catch (c) {
        await this.sendError(o, t, c), this.client.logger.error(c);
      }
    }, this.onSessionPingResponse = (t, s) => {
      const { id: o } = s;
      setTimeout(() => {
        Di(s) ? this.events.emit(Ut("session_ping", o), {}) : Yr(s) && this.events.emit(Ut("session_ping", o), { error: s.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (t, s) => {
      const { id: o } = s;
      try {
        this.isValidDisconnect({ topic: t, reason: s.params }), await Promise.all([new Promise((c) => {
          this.client.core.relayer.once(tr.publish, async () => {
            c(await this.deleteSession({ topic: t, id: o }));
          });
        }), this.sendResult({ id: o, topic: t, result: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: t, error: _t("USER_DISCONNECTED") })]);
      } catch (c) {
        this.client.logger.error(c);
      }
    }, this.onSessionRequest = async (t, s) => {
      const { id: o, params: c } = s;
      try {
        this.isValidRequest(ur({ topic: t }, c));
        const d = qn(JSON.stringify(zn("wc_sessionRequest", c, o))), f = this.client.session.get(t), y = await this.getVerifyContext(d, f.peer.metadata), g = { id: o, topic: t, params: c, verifyContext: y };
        await this.setPendingSessionRequest(g), this.addSessionRequestToSessionRequestQueue(g), this.processSessionRequestQueue();
      } catch (d) {
        await this.sendError(o, t, d), this.client.logger.error(d);
      }
    }, this.onSessionRequestResponse = (t, s) => {
      const { id: o } = s;
      Di(s) ? this.events.emit(Ut("session_request", o), { result: s.result }) : Yr(s) && this.events.emit(Ut("session_request", o), { error: s.error });
    }, this.onSessionEventRequest = async (t, s) => {
      const { id: o, params: c } = s;
      try {
        const d = `${t}_session_event_${c.event.name}`, f = qo.get(d);
        if (f && this.isRequestOutOfSync(f, o)) {
          this.client.logger.info(`Discarding out of sync request - ${o}`);
          return;
        }
        this.isValidEmit(ur({ topic: t }, c)), this.client.events.emit("session_event", { id: o, topic: t, params: c }), qo.set(d, o);
      } catch (d) {
        await this.sendError(o, t, d), this.client.logger.error(d);
      }
    }, this.addSessionRequestToSessionRequestQueue = (t) => {
      this.sessionRequestQueue.queue.push(t);
    }, this.cleanupAfterResponse = (t) => {
      this.deletePendingSessionRequest(t.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = Ei.idle, this.processSessionRequestQueue();
      }, ve.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: s }) => {
      const o = this.client.core.history.pending;
      o.length > 0 && o.filter((c) => c.topic === t && c.request.method === "wc_sessionRequest").forEach((c) => {
        this.events.emit(Ut("session_request", c.request.id), { error: s });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === Ei.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const t = this.sessionRequestQueue.queue[0];
      if (!t) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = Ei.active, this.client.events.emit("session_request", t);
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onPairingCreated = (t) => {
      if (t.active)
        return;
      const s = this.client.proposal.getAll().find((o) => o.pairingTopic === t.topic);
      s && this.onSessionProposeRequest(t.topic, zn("wc_sessionPropose", { requiredNamespaces: s.requiredNamespaces, optionalNamespaces: s.optionalNamespaces, relays: s.relays, proposer: s.proposer, sessionProperties: s.sessionProperties }, s.id));
    }, this.isValidConnect = async (t) => {
      if (!_r(t)) {
        const { message: y } = ce("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
        throw new Error(y);
      }
      const { pairingTopic: s, requiredNamespaces: o, optionalNamespaces: c, sessionProperties: d, relays: f } = t;
      if (hr(s) || await this.isValidPairingTopic(s), !zD(f, !0)) {
        const { message: y } = ce("MISSING_OR_INVALID", `connect() relays: ${f}`);
        throw new Error(y);
      }
      !hr(o) && xs(o) !== 0 && this.validateNamespaces(o, "requiredNamespaces"), !hr(c) && xs(c) !== 0 && this.validateNamespaces(c, "optionalNamespaces"), hr(d) || this.validateSessionProps(d, "sessionProperties");
    }, this.validateNamespaces = (t, s) => {
      const o = qD(t, "connect()", s);
      if (o)
        throw new Error(o.message);
    }, this.isValidApprove = async (t) => {
      if (!_r(t))
        throw new Error(ce("MISSING_OR_INVALID", `approve() params: ${t}`).message);
      const { id: s, namespaces: o, relayProtocol: c, sessionProperties: d } = t;
      await this.isValidProposalId(s);
      const f = this.client.proposal.get(s), y = Vc(o, "approve()");
      if (y)
        throw new Error(y.message);
      const g = Nf(f.requiredNamespaces, o, "approve()");
      if (g)
        throw new Error(g.message);
      if (!Gt(c, !0)) {
        const { message: m } = ce("MISSING_OR_INVALID", `approve() relayProtocol: ${c}`);
        throw new Error(m);
      }
      hr(d) || this.validateSessionProps(d, "sessionProperties");
    }, this.isValidReject = async (t) => {
      if (!_r(t)) {
        const { message: c } = ce("MISSING_OR_INVALID", `reject() params: ${t}`);
        throw new Error(c);
      }
      const { id: s, reason: o } = t;
      if (await this.isValidProposalId(s), !HD(o)) {
        const { message: c } = ce("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(o)}`);
        throw new Error(c);
      }
    }, this.isValidSessionSettleRequest = (t) => {
      if (!_r(t)) {
        const { message: g } = ce("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
        throw new Error(g);
      }
      const { relay: s, controller: o, namespaces: c, expiry: d } = t;
      if (!Sp(s)) {
        const { message: g } = ce("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(g);
      }
      const f = ND(o, "onSessionSettleRequest()");
      if (f)
        throw new Error(f.message);
      const y = Vc(c, "onSessionSettleRequest()");
      if (y)
        throw new Error(y.message);
      if (Mi(d)) {
        const { message: g } = ce("EXPIRED", "onSessionSettleRequest()");
        throw new Error(g);
      }
    }, this.isValidUpdate = async (t) => {
      if (!_r(t)) {
        const { message: y } = ce("MISSING_OR_INVALID", `update() params: ${t}`);
        throw new Error(y);
      }
      const { topic: s, namespaces: o } = t;
      await this.isValidSessionTopic(s);
      const c = this.client.session.get(s), d = Vc(o, "update()");
      if (d)
        throw new Error(d.message);
      const f = Nf(c.requiredNamespaces, o, "update()");
      if (f)
        throw new Error(f.message);
    }, this.isValidExtend = async (t) => {
      if (!_r(t)) {
        const { message: o } = ce("MISSING_OR_INVALID", `extend() params: ${t}`);
        throw new Error(o);
      }
      const { topic: s } = t;
      await this.isValidSessionTopic(s);
    }, this.isValidRequest = async (t) => {
      if (!_r(t)) {
        const { message: y } = ce("MISSING_OR_INVALID", `request() params: ${t}`);
        throw new Error(y);
      }
      const { topic: s, request: o, chainId: c, expiry: d } = t;
      await this.isValidSessionTopic(s);
      const { namespaces: f } = this.client.session.get(s);
      if (!Rf(f, c)) {
        const { message: y } = ce("MISSING_OR_INVALID", `request() chainId: ${c}`);
        throw new Error(y);
      }
      if (!BD(o)) {
        const { message: y } = ce("MISSING_OR_INVALID", `request() ${JSON.stringify(o)}`);
        throw new Error(y);
      }
      if (!VD(f, c, o.method)) {
        const { message: y } = ce("MISSING_OR_INVALID", `request() method: ${o.method}`);
        throw new Error(y);
      }
      if (d && !JD(d, nu)) {
        const { message: y } = ce("MISSING_OR_INVALID", `request() expiry: ${d}. Expiry must be a number (in seconds) between ${nu.min} and ${nu.max}`);
        throw new Error(y);
      }
    }, this.isValidRespond = async (t) => {
      var s;
      if (!_r(t)) {
        const { message: d } = ce("MISSING_OR_INVALID", `respond() params: ${t}`);
        throw new Error(d);
      }
      const { topic: o, response: c } = t;
      try {
        await this.isValidSessionTopic(o);
      } catch (d) {
        throw (s = t == null ? void 0 : t.response) != null && s.id && this.cleanupAfterResponse(t), d;
      }
      if (!KD(c)) {
        const { message: d } = ce("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(c)}`);
        throw new Error(d);
      }
    }, this.isValidPing = async (t) => {
      if (!_r(t)) {
        const { message: o } = ce("MISSING_OR_INVALID", `ping() params: ${t}`);
        throw new Error(o);
      }
      const { topic: s } = t;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async (t) => {
      if (!_r(t)) {
        const { message: f } = ce("MISSING_OR_INVALID", `emit() params: ${t}`);
        throw new Error(f);
      }
      const { topic: s, event: o, chainId: c } = t;
      await this.isValidSessionTopic(s);
      const { namespaces: d } = this.client.session.get(s);
      if (!Rf(d, c)) {
        const { message: f } = ce("MISSING_OR_INVALID", `emit() chainId: ${c}`);
        throw new Error(f);
      }
      if (!kD(o)) {
        const { message: f } = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
        throw new Error(f);
      }
      if (!WD(d, c, o.name)) {
        const { message: f } = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
        throw new Error(f);
      }
    }, this.isValidDisconnect = async (t) => {
      if (!_r(t)) {
        const { message: o } = ce("MISSING_OR_INVALID", `disconnect() params: ${t}`);
        throw new Error(o);
      }
      const { topic: s } = t;
      await this.isValidSessionOrPairingTopic(s);
    }, this.getVerifyContext = async (t, s) => {
      const o = { verified: { verifyUrl: s.verifyUrl || Mn, validation: "UNKNOWN", origin: s.url || "" } };
      try {
        const c = await this.client.core.verify.resolve({ attestationId: t, verifyUrl: s.verifyUrl });
        c && (o.verified.origin = c.origin, o.verified.isScam = c.isScam, o.verified.validation = c.origin === new URL(s.url).origin ? "VALID" : "INVALID");
      } catch (c) {
        this.client.logger.info(c);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(o)}`), o;
    }, this.validateSessionProps = (t, s) => {
      Object.values(t).forEach((o) => {
        if (!Gt(o, !1)) {
          const { message: c } = ce("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(o)}`);
          throw new Error(c);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(tr.message, async (e) => {
      const { topic: t, message: s } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s)))
        return;
      const o = await this.client.core.crypto.decode(t, s);
      try {
        Gu(o) ? (this.client.core.history.set(t, o), this.onRelayEventRequest({ topic: t, payload: o })) : da(o) ? (await this.client.core.history.resolve(o), await this.onRelayEventResponse({ topic: t, payload: o }), this.client.core.history.delete(t, o.id)) : this.onRelayEventUnknownPayload({ topic: t, payload: o });
      } catch (c) {
        this.client.logger.error(c);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Fr.expired, async (e) => {
      const { topic: t, id: s } = Ep(e.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, ce("EXPIRED"), !0);
      t ? this.client.session.keys.includes(t) && (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: t })) : s && (await this.deleteProposal(s, !0), this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(_s.create, (e) => this.onPairingCreated(e));
  }
  isValidPairingTopic(e) {
    if (!Gt(e, !1)) {
      const { message: t } = ce("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: t } = ce("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (Mi(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: t } = ce("EXPIRED", `pairing topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(e) {
    if (!Gt(e, !1)) {
      const { message: t } = ce("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(t);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: t } = ce("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (Mi(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: t } = ce("EXPIRED", `session topic: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: t } = ce("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(t);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Gt(e, !1)) {
      const { message: t } = ce("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(t);
    } else {
      const { message: t } = ce("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(t);
    }
  }
  async isValidProposalId(e) {
    if (!FD(e)) {
      const { message: t } = ce("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: t } = ce("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (Mi(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: t } = ce("EXPIRED", `proposal id: ${e}`);
      throw new Error(t);
    }
  }
}
class P2 extends ga {
  constructor(e, t) {
    super(e, t, v2, Qu), this.core = e, this.logger = t;
  }
}
let C2 = class extends ga {
  constructor(e, t) {
    super(e, t, m2, Qu), this.core = e, this.logger = t;
  }
};
class A2 extends ga {
  constructor(e, t) {
    super(e, t, _2, Qu, (s) => s.id), this.core = e, this.logger = t;
  }
}
let T2 = class sg extends Z3 {
  constructor(e) {
    super(e), this.protocol = tg, this.version = rg, this.name = iu.name, this.events = new Ar.EventEmitter(), this.on = (s, o) => this.events.on(s, o), this.once = (s, o) => this.events.once(s, o), this.off = (s, o) => this.events.off(s, o), this.removeListener = (s, o) => this.events.removeListener(s, o), this.removeAllListeners = (s) => this.events.removeAllListeners(s), this.connect = async (s) => {
      try {
        return await this.engine.connect(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.pair = async (s) => {
      try {
        return await this.engine.pair(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.approve = async (s) => {
      try {
        return await this.engine.approve(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.reject = async (s) => {
      try {
        return await this.engine.reject(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.update = async (s) => {
      try {
        return await this.engine.update(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.extend = async (s) => {
      try {
        return await this.engine.extend(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.request = async (s) => {
      try {
        return await this.engine.request(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.respond = async (s) => {
      try {
        return await this.engine.respond(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.ping = async (s) => {
      try {
        return await this.engine.ping(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.emit = async (s) => {
      try {
        return await this.engine.emit(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.disconnect = async (s) => {
      try {
        return await this.engine.disconnect(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.find = (s) => {
      try {
        return this.engine.find(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = (e == null ? void 0 : e.name) || iu.name, this.metadata = (e == null ? void 0 : e.metadata) || rD();
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Je.pino(Je.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || iu.logger }));
    this.core = (e == null ? void 0 : e.core) || new y2(e), this.logger = Je.generateChildLogger(t, this.name), this.session = new C2(this.core, this.logger), this.proposal = new P2(this.core, this.logger), this.pendingRequest = new A2(this.core, this.logger), this.engine = new O2(this);
  }
  static async init(e) {
    const t = new sg(e);
    return await t.initialize(), t;
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
};
var Ou = { exports: {} };
(function(i, e) {
  var t = typeof self < "u" ? self : q_, s = function() {
    function c() {
      this.fetch = !1, this.DOMException = t.DOMException;
    }
    return c.prototype = t, new c();
  }();
  (function(c) {
    (function(d) {
      var f = {
        searchParams: "URLSearchParams" in c,
        iterable: "Symbol" in c && "iterator" in Symbol,
        blob: "FileReader" in c && "Blob" in c && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in c,
        arrayBuffer: "ArrayBuffer" in c
      };
      function y(b) {
        return b && DataView.prototype.isPrototypeOf(b);
      }
      if (f.arrayBuffer)
        var g = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], m = ArrayBuffer.isView || function(b) {
          return b && g.indexOf(Object.prototype.toString.call(b)) > -1;
        };
      function D(b) {
        if (typeof b != "string" && (b = String(b)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(b))
          throw new TypeError("Invalid character in header field name");
        return b.toLowerCase();
      }
      function I(b) {
        return typeof b != "string" && (b = String(b)), b;
      }
      function T(b) {
        var C = {
          next: function() {
            var ee = b.shift();
            return { done: ee === void 0, value: ee };
          }
        };
        return f.iterable && (C[Symbol.iterator] = function() {
          return C;
        }), C;
      }
      function P(b) {
        this.map = {}, b instanceof P ? b.forEach(function(C, ee) {
          this.append(ee, C);
        }, this) : Array.isArray(b) ? b.forEach(function(C) {
          this.append(C[0], C[1]);
        }, this) : b && Object.getOwnPropertyNames(b).forEach(function(C) {
          this.append(C, b[C]);
        }, this);
      }
      P.prototype.append = function(b, C) {
        b = D(b), C = I(C);
        var ee = this.map[b];
        this.map[b] = ee ? ee + ", " + C : C;
      }, P.prototype.delete = function(b) {
        delete this.map[D(b)];
      }, P.prototype.get = function(b) {
        return b = D(b), this.has(b) ? this.map[b] : null;
      }, P.prototype.has = function(b) {
        return this.map.hasOwnProperty(D(b));
      }, P.prototype.set = function(b, C) {
        this.map[D(b)] = I(C);
      }, P.prototype.forEach = function(b, C) {
        for (var ee in this.map)
          this.map.hasOwnProperty(ee) && b.call(C, this.map[ee], ee, this);
      }, P.prototype.keys = function() {
        var b = [];
        return this.forEach(function(C, ee) {
          b.push(ee);
        }), T(b);
      }, P.prototype.values = function() {
        var b = [];
        return this.forEach(function(C) {
          b.push(C);
        }), T(b);
      }, P.prototype.entries = function() {
        var b = [];
        return this.forEach(function(C, ee) {
          b.push([ee, C]);
        }), T(b);
      }, f.iterable && (P.prototype[Symbol.iterator] = P.prototype.entries);
      function F(b) {
        if (b.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        b.bodyUsed = !0;
      }
      function B(b) {
        return new Promise(function(C, ee) {
          b.onload = function() {
            C(b.result);
          }, b.onerror = function() {
            ee(b.error);
          };
        });
      }
      function ie(b) {
        var C = new FileReader(), ee = B(C);
        return C.readAsArrayBuffer(b), ee;
      }
      function L(b) {
        var C = new FileReader(), ee = B(C);
        return C.readAsText(b), ee;
      }
      function j(b) {
        for (var C = new Uint8Array(b), ee = new Array(C.length), Q = 0; Q < C.length; Q++)
          ee[Q] = String.fromCharCode(C[Q]);
        return ee.join("");
      }
      function O(b) {
        if (b.slice)
          return b.slice(0);
        var C = new Uint8Array(b.byteLength);
        return C.set(new Uint8Array(b)), C.buffer;
      }
      function A() {
        return this.bodyUsed = !1, this._initBody = function(b) {
          this._bodyInit = b, b ? typeof b == "string" ? this._bodyText = b : f.blob && Blob.prototype.isPrototypeOf(b) ? this._bodyBlob = b : f.formData && FormData.prototype.isPrototypeOf(b) ? this._bodyFormData = b : f.searchParams && URLSearchParams.prototype.isPrototypeOf(b) ? this._bodyText = b.toString() : f.arrayBuffer && f.blob && y(b) ? (this._bodyArrayBuffer = O(b.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : f.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(b) || m(b)) ? this._bodyArrayBuffer = O(b) : this._bodyText = b = Object.prototype.toString.call(b) : this._bodyText = "", this.headers.get("content-type") || (typeof b == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : f.searchParams && URLSearchParams.prototype.isPrototypeOf(b) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, f.blob && (this.blob = function() {
          var b = F(this);
          if (b)
            return b;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? F(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(ie);
        }), this.text = function() {
          var b = F(this);
          if (b)
            return b;
          if (this._bodyBlob)
            return L(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(j(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, f.formData && (this.formData = function() {
          return this.text().then(W);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var E = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function u(b) {
        var C = b.toUpperCase();
        return E.indexOf(C) > -1 ? C : b;
      }
      function _(b, C) {
        C = C || {};
        var ee = C.body;
        if (b instanceof _) {
          if (b.bodyUsed)
            throw new TypeError("Already read");
          this.url = b.url, this.credentials = b.credentials, C.headers || (this.headers = new P(b.headers)), this.method = b.method, this.mode = b.mode, this.signal = b.signal, !ee && b._bodyInit != null && (ee = b._bodyInit, b.bodyUsed = !0);
        } else
          this.url = String(b);
        if (this.credentials = C.credentials || this.credentials || "same-origin", (C.headers || !this.headers) && (this.headers = new P(C.headers)), this.method = u(C.method || this.method || "GET"), this.mode = C.mode || this.mode || null, this.signal = C.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && ee)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(ee);
      }
      _.prototype.clone = function() {
        return new _(this, { body: this._bodyInit });
      };
      function W(b) {
        var C = new FormData();
        return b.trim().split("&").forEach(function(ee) {
          if (ee) {
            var Q = ee.split("="), k = Q.shift().replace(/\+/g, " "), V = Q.join("=").replace(/\+/g, " ");
            C.append(decodeURIComponent(k), decodeURIComponent(V));
          }
        }), C;
      }
      function G(b) {
        var C = new P(), ee = b.replace(/\r?\n[\t ]+/g, " ");
        return ee.split(/\r?\n/).forEach(function(Q) {
          var k = Q.split(":"), V = k.shift().trim();
          if (V) {
            var J = k.join(":").trim();
            C.append(V, J);
          }
        }), C;
      }
      A.call(_.prototype);
      function se(b, C) {
        C || (C = {}), this.type = "default", this.status = C.status === void 0 ? 200 : C.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in C ? C.statusText : "OK", this.headers = new P(C.headers), this.url = C.url || "", this._initBody(b);
      }
      A.call(se.prototype), se.prototype.clone = function() {
        return new se(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new P(this.headers),
          url: this.url
        });
      }, se.error = function() {
        var b = new se(null, { status: 0, statusText: "" });
        return b.type = "error", b;
      };
      var ue = [301, 302, 303, 307, 308];
      se.redirect = function(b, C) {
        if (ue.indexOf(C) === -1)
          throw new RangeError("Invalid status code");
        return new se(null, { status: C, headers: { location: b } });
      }, d.DOMException = c.DOMException;
      try {
        new d.DOMException();
      } catch {
        d.DOMException = function(C, ee) {
          this.message = C, this.name = ee;
          var Q = Error(C);
          this.stack = Q.stack;
        }, d.DOMException.prototype = Object.create(Error.prototype), d.DOMException.prototype.constructor = d.DOMException;
      }
      function de(b, C) {
        return new Promise(function(ee, Q) {
          var k = new _(b, C);
          if (k.signal && k.signal.aborted)
            return Q(new d.DOMException("Aborted", "AbortError"));
          var V = new XMLHttpRequest();
          function J() {
            V.abort();
          }
          V.onload = function() {
            var re = {
              status: V.status,
              statusText: V.statusText,
              headers: G(V.getAllResponseHeaders() || "")
            };
            re.url = "responseURL" in V ? V.responseURL : re.headers.get("X-Request-URL");
            var _e = "response" in V ? V.response : V.responseText;
            ee(new se(_e, re));
          }, V.onerror = function() {
            Q(new TypeError("Network request failed"));
          }, V.ontimeout = function() {
            Q(new TypeError("Network request failed"));
          }, V.onabort = function() {
            Q(new d.DOMException("Aborted", "AbortError"));
          }, V.open(k.method, k.url, !0), k.credentials === "include" ? V.withCredentials = !0 : k.credentials === "omit" && (V.withCredentials = !1), "responseType" in V && f.blob && (V.responseType = "blob"), k.headers.forEach(function(re, _e) {
            V.setRequestHeader(_e, re);
          }), k.signal && (k.signal.addEventListener("abort", J), V.onreadystatechange = function() {
            V.readyState === 4 && k.signal.removeEventListener("abort", J);
          }), V.send(typeof k._bodyInit > "u" ? null : k._bodyInit);
        });
      }
      return de.polyfill = !0, c.fetch || (c.fetch = de, c.Headers = P, c.Request = _, c.Response = se), d.Headers = P, d.Request = _, d.Response = se, d.fetch = de, Object.defineProperty(d, "__esModule", { value: !0 }), d;
    })({});
  })(s), s.fetch.ponyfill = !0, delete s.fetch.polyfill;
  var o = s;
  e = o.fetch, e.default = o.fetch, e.fetch = o.fetch, e.Headers = o.Headers, e.Request = o.Request, e.Response = o.Response, i.exports = e;
})(Ou, Ou.exports);
var R2 = Ou.exports;
const xd = /* @__PURE__ */ ia(R2), N2 = {
  Accept: "application/json",
  "Content-Type": "application/json"
}, L2 = "POST", Od = {
  headers: N2,
  method: L2
}, Pd = 10;
class Fi {
  constructor(e, t = !1) {
    if (this.url = e, this.disableProviderPing = t, this.events = new Ar.EventEmitter(), this.isAvailable = !1, this.registering = !1, !ed(e))
      throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
    this.url = e, this.disableProviderPing = t;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    if (!this.isAvailable)
      throw new Error("Connection already closed");
    this.onClose();
  }
  async send(e, t) {
    this.isAvailable || await this.register();
    try {
      const s = cn(e), c = await (await xd(this.url, Object.assign(Object.assign({}, Od), { body: s }))).json();
      this.onPayload({ data: c });
    } catch (s) {
      this.onError(e.id, s);
    }
  }
  async register(e = this.url) {
    if (!ed(e))
      throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((s, o) => {
        this.events.once("register_error", (c) => {
          this.resetMaxListeners(), o(c);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u")
            return o(new Error("HTTP connection is missing or invalid"));
          s();
        });
      });
    }
    this.url = e, this.registering = !0;
    try {
      if (!this.disableProviderPing) {
        const t = cn({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await xd(e, Object.assign(Object.assign({}, Od), { body: t }));
      }
      this.onOpen();
    } catch (t) {
      const s = this.parseError(t);
      throw this.events.emit("register_error", s), this.onClose(), s;
    }
  }
  onOpen() {
    this.isAvailable = !0, this.registering = !1, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = !1, this.registering = !1, this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data > "u")
      return;
    const t = typeof e.data == "string" ? Rs(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const s = this.parseError(t), o = s.message || s.toString(), c = fa(e, o);
    this.events.emit("payload", c);
  }
  parseError(e, t = this.url) {
    return $p(e, t, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Pd && this.events.setMaxListeners(Pd);
  }
}
const Cd = "error", U2 = "wss://relay.walletconnect.com", $2 = "wc", M2 = "universal_provider", Ad = `${$2}@2:${M2}:`, j2 = "https://rpc.walletconnect.com/v1/", Ii = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var ms = typeof globalThis < "u" ? globalThis : typeof window < "u" || typeof window < "u" ? window : typeof self < "u" ? self : {}, Pu = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(i, e) {
  (function() {
    var t, s = "4.17.21", o = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", f = "Invalid `variable` option passed into `_.template`", y = "__lodash_hash_undefined__", g = 500, m = "__lodash_placeholder__", D = 1, I = 2, T = 4, P = 1, F = 2, B = 1, ie = 2, L = 4, j = 8, O = 16, A = 32, E = 64, u = 128, _ = 256, W = 512, G = 30, se = "...", ue = 800, de = 16, b = 1, C = 2, ee = 3, Q = 1 / 0, k = 9007199254740991, V = 17976931348623157e292, J = NaN, re = 4294967295, _e = re - 1, oe = re >>> 1, be = [["ary", u], ["bind", B], ["bindKey", ie], ["curry", j], ["curryRight", O], ["flip", W], ["partial", A], ["partialRight", E], ["rearg", _]], le = "[object Arguments]", me = "[object Array]", H = "[object AsyncFunction]", z = "[object Boolean]", U = "[object Date]", l = "[object DOMException]", R = "[object Error]", ae = "[object Function]", fe = "[object GeneratorFunction]", Ie = "[object Map]", He = "[object Number]", ke = "[object Null]", Me = "[object Object]", gt = "[object Promise]", yt = "[object Proxy]", qe = "[object RegExp]", xe = "[object Set]", Ne = "[object String]", Le = "[object Symbol]", ze = "[object Undefined]", Pe = "[object WeakMap]", Ue = "[object WeakSet]", Se = "[object ArrayBuffer]", Ce = "[object DataView]", Be = "[object Float32Array]", Oe = "[object Float64Array]", Ve = "[object Int8Array]", Ge = "[object Int16Array]", et = "[object Int32Array]", tt = "[object Uint8Array]", Qe = "[object Uint8ClampedArray]", rr = "[object Uint16Array]", dr = "[object Uint32Array]", Jr = /\b__p \+= '';/g, ir = /\b(__p \+=) '' \+/g, oi = /(__e\(.*?\)|\b__t\)) \+\n'';/g, xi = /&(?:amp|lt|gt|quot|#39);/g, Hi = /[&<>"']/g, St = RegExp(xi.source), vt = RegExp(Hi.source), It = /<%-([\s\S]+?)%>/g, xt = /<%([\s\S]+?)%>/g, Et = /<%=([\s\S]+?)%>/g, mt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $t = /^\w*$/, Mt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ot = /[\\^$.*+?()[\]{}|]/g, jt = RegExp(Ot.source), Pt = /^\s+/, Tt = /\s/, Ct = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, lt = /\{\n\/\* \[wrapped with (.+)\] \*/, qt = /,? & /, zt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ya = /[()=,{}\[\]\/\s]/, va = /\\(\\)?/g, ma = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Rr = /\w*$/, wa = /^[-+]0x[0-9a-f]+$/i, _a = /^0b[01]+$/i, ba = /^\[object .+?Constructor\]$/, Ea = /^0o[0-7]+$/i, Da = /^(?:0|[1-9]\d*)$/, ai = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, pn = /($^)/, Sa = /['\n\r\u2028\u2029\\]/g, gn = "\\ud800-\\udfff", Ia = "\\u0300-\\u036f", xa = "\\ufe20-\\ufe2f", yn = "\\u20d0-\\u20ff", Ls = Ia + xa + yn, Us = "\\u2700-\\u27bf", Hr = "a-z\\xdf-\\xf6\\xf8-\\xff", Oa = "\\xac\\xb1\\xd7\\xf7", Pa = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ca = "\\u2000-\\u206f", Aa = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", $s = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ms = "\\ufe0e\\ufe0f", Bi = Oa + Pa + Ca + Aa, Wn = "['’]", Ki = "[" + gn + "]", Gn = "[" + Bi + "]", ki = "[" + Ls + "]", js = "\\d+", Ta = "[" + Us + "]", qs = "[" + Hr + "]", zs = "[^" + gn + Bi + js + Us + Hr + $s + "]", vn = "\\ud83c[\\udffb-\\udfff]", Ra = "(?:" + ki + "|" + vn + ")", Fs = "[^" + gn + "]", mn = "(?:\\ud83c[\\udde6-\\uddff]){2}", Oi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Er = "[" + $s + "]", Hs = "\\u200d", Bs = "(?:" + qs + "|" + zs + ")", Qr = "(?:" + Er + "|" + zs + ")", Ks = "(?:" + Wn + "(?:d|ll|m|re|s|t|ve))?", ks = "(?:" + Wn + "(?:D|LL|M|RE|S|T|VE))?", Vs = Ra + "?", Ws = "[" + Ms + "]?", Na = "(?:" + Hs + "(?:" + [Fs, mn, Oi].join("|") + ")" + Ws + Vs + ")*", ci = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Gs = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ys = Ws + Vs + Na, wn = "(?:" + [Ta, mn, Oi].join("|") + ")" + Ys, La = "(?:" + [Fs + ki + "?", ki, mn, Oi, Ki].join("|") + ")", Yn = RegExp(Wn, "g"), Ua = RegExp(ki, "g"), _n = RegExp(vn + "(?=" + vn + ")|" + La + Ys, "g"), Js = RegExp([Er + "?" + qs + "+" + Ks + "(?=" + [Gn, Er, "$"].join("|") + ")", Qr + "+" + ks + "(?=" + [Gn, Er + Bs, "$"].join("|") + ")", Er + "?" + Bs + "+" + Ks, Er + "+" + ks, Gs, ci, js, wn].join("|"), "g"), Qs = RegExp("[" + Hs + gn + Ls + Ms + "]"), Vi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Xs = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], $a = -1, at = {};
    at[Be] = at[Oe] = at[Ve] = at[Ge] = at[et] = at[tt] = at[Qe] = at[rr] = at[dr] = !0, at[le] = at[me] = at[Se] = at[z] = at[Ce] = at[U] = at[R] = at[ae] = at[Ie] = at[He] = at[Me] = at[qe] = at[xe] = at[Ne] = at[Pe] = !1;
    var st = {};
    st[le] = st[me] = st[Se] = st[Ce] = st[z] = st[U] = st[Be] = st[Oe] = st[Ve] = st[Ge] = st[et] = st[Ie] = st[He] = st[Me] = st[qe] = st[xe] = st[Ne] = st[Le] = st[tt] = st[Qe] = st[rr] = st[dr] = !0, st[R] = st[ae] = st[Pe] = !1;
    var S = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, $ = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, te = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, pe = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, ct = parseFloat, Te = parseInt, dt = typeof ms == "object" && ms && ms.Object === Object && ms, Ft = typeof self == "object" && self && self.Object === Object && self, Xe = dt || Ft || Function("return this")(), ut = e && !e.nodeType && e, Rt = ut && !0 && i && !i.nodeType && i, pr = Rt && Rt.exports === ut, Ht = pr && dt.process, pt = function() {
      try {
        var M = Rt && Rt.require && Rt.require("util").types;
        return M || Ht && Ht.binding && Ht.binding("util");
      } catch {
      }
    }(), nr = pt && pt.isArrayBuffer, Br = pt && pt.isDate, Nr = pt && pt.isMap, Xr = pt && pt.isRegExp, Jn = pt && pt.isSet, Wi = pt && pt.isTypedArray;
    function kt(M, Y, K) {
      switch (K.length) {
        case 0:
          return M.call(Y);
        case 1:
          return M.call(Y, K[0]);
        case 2:
          return M.call(Y, K[0], K[1]);
        case 3:
          return M.call(Y, K[0], K[1], K[2]);
      }
      return M.apply(Y, K);
    }
    function cg(M, Y, K, ge) {
      for (var Ae = -1, rt = M == null ? 0 : M.length; ++Ae < rt; ) {
        var Bt = M[Ae];
        Y(ge, Bt, K(Bt), M);
      }
      return ge;
    }
    function Lr(M, Y) {
      for (var K = -1, ge = M == null ? 0 : M.length; ++K < ge && Y(M[K], K, M) !== !1; )
        ;
      return M;
    }
    function ug(M, Y) {
      for (var K = M == null ? 0 : M.length; K-- && Y(M[K], K, M) !== !1; )
        ;
      return M;
    }
    function eh(M, Y) {
      for (var K = -1, ge = M == null ? 0 : M.length; ++K < ge; )
        if (!Y(M[K], K, M))
          return !1;
      return !0;
    }
    function Pi(M, Y) {
      for (var K = -1, ge = M == null ? 0 : M.length, Ae = 0, rt = []; ++K < ge; ) {
        var Bt = M[K];
        Y(Bt, K, M) && (rt[Ae++] = Bt);
      }
      return rt;
    }
    function Zs(M, Y) {
      var K = M == null ? 0 : M.length;
      return !!K && bn(M, Y, 0) > -1;
    }
    function Ma(M, Y, K) {
      for (var ge = -1, Ae = M == null ? 0 : M.length; ++ge < Ae; )
        if (K(Y, M[ge]))
          return !0;
      return !1;
    }
    function wt(M, Y) {
      for (var K = -1, ge = M == null ? 0 : M.length, Ae = Array(ge); ++K < ge; )
        Ae[K] = Y(M[K], K, M);
      return Ae;
    }
    function Ci(M, Y) {
      for (var K = -1, ge = Y.length, Ae = M.length; ++K < ge; )
        M[Ae + K] = Y[K];
      return M;
    }
    function ja(M, Y, K, ge) {
      var Ae = -1, rt = M == null ? 0 : M.length;
      for (ge && rt && (K = M[++Ae]); ++Ae < rt; )
        K = Y(K, M[Ae], Ae, M);
      return K;
    }
    function hg(M, Y, K, ge) {
      var Ae = M == null ? 0 : M.length;
      for (ge && Ae && (K = M[--Ae]); Ae--; )
        K = Y(K, M[Ae], Ae, M);
      return K;
    }
    function qa(M, Y) {
      for (var K = -1, ge = M == null ? 0 : M.length; ++K < ge; )
        if (Y(M[K], K, M))
          return !0;
      return !1;
    }
    var lg = za("length");
    function fg(M) {
      return M.split("");
    }
    function dg(M) {
      return M.match(zt) || [];
    }
    function th(M, Y, K) {
      var ge;
      return K(M, function(Ae, rt, Bt) {
        if (Y(Ae, rt, Bt))
          return ge = rt, !1;
      }), ge;
    }
    function eo(M, Y, K, ge) {
      for (var Ae = M.length, rt = K + (ge ? 1 : -1); ge ? rt-- : ++rt < Ae; )
        if (Y(M[rt], rt, M))
          return rt;
      return -1;
    }
    function bn(M, Y, K) {
      return Y === Y ? Ig(M, Y, K) : eo(M, rh, K);
    }
    function pg(M, Y, K, ge) {
      for (var Ae = K - 1, rt = M.length; ++Ae < rt; )
        if (ge(M[Ae], Y))
          return Ae;
      return -1;
    }
    function rh(M) {
      return M !== M;
    }
    function ih(M, Y) {
      var K = M == null ? 0 : M.length;
      return K ? Ha(M, Y) / K : J;
    }
    function za(M) {
      return function(Y) {
        return Y == null ? t : Y[M];
      };
    }
    function Fa(M) {
      return function(Y) {
        return M == null ? t : M[Y];
      };
    }
    function nh(M, Y, K, ge, Ae) {
      return Ae(M, function(rt, Bt, ht) {
        K = ge ? (ge = !1, rt) : Y(K, rt, Bt, ht);
      }), K;
    }
    function gg(M, Y) {
      var K = M.length;
      for (M.sort(Y); K--; )
        M[K] = M[K].value;
      return M;
    }
    function Ha(M, Y) {
      for (var K, ge = -1, Ae = M.length; ++ge < Ae; ) {
        var rt = Y(M[ge]);
        rt !== t && (K = K === t ? rt : K + rt);
      }
      return K;
    }
    function Ba(M, Y) {
      for (var K = -1, ge = Array(M); ++K < M; )
        ge[K] = Y(K);
      return ge;
    }
    function yg(M, Y) {
      return wt(Y, function(K) {
        return [K, M[K]];
      });
    }
    function sh(M) {
      return M && M.slice(0, uh(M) + 1).replace(Pt, "");
    }
    function Dr(M) {
      return function(Y) {
        return M(Y);
      };
    }
    function Ka(M, Y) {
      return wt(Y, function(K) {
        return M[K];
      });
    }
    function Qn(M, Y) {
      return M.has(Y);
    }
    function oh(M, Y) {
      for (var K = -1, ge = M.length; ++K < ge && bn(Y, M[K], 0) > -1; )
        ;
      return K;
    }
    function ah(M, Y) {
      for (var K = M.length; K-- && bn(Y, M[K], 0) > -1; )
        ;
      return K;
    }
    function vg(M, Y) {
      for (var K = M.length, ge = 0; K--; )
        M[K] === Y && ++ge;
      return ge;
    }
    var mg = Fa(S), wg = Fa($);
    function _g(M) {
      return "\\" + pe[M];
    }
    function bg(M, Y) {
      return M == null ? t : M[Y];
    }
    function En(M) {
      return Qs.test(M);
    }
    function Eg(M) {
      return Vi.test(M);
    }
    function Dg(M) {
      for (var Y, K = []; !(Y = M.next()).done; )
        K.push(Y.value);
      return K;
    }
    function ka(M) {
      var Y = -1, K = Array(M.size);
      return M.forEach(function(ge, Ae) {
        K[++Y] = [Ae, ge];
      }), K;
    }
    function ch(M, Y) {
      return function(K) {
        return M(Y(K));
      };
    }
    function Ai(M, Y) {
      for (var K = -1, ge = M.length, Ae = 0, rt = []; ++K < ge; ) {
        var Bt = M[K];
        (Bt === Y || Bt === m) && (M[K] = m, rt[Ae++] = K);
      }
      return rt;
    }
    function to(M) {
      var Y = -1, K = Array(M.size);
      return M.forEach(function(ge) {
        K[++Y] = ge;
      }), K;
    }
    function Sg(M) {
      var Y = -1, K = Array(M.size);
      return M.forEach(function(ge) {
        K[++Y] = [ge, ge];
      }), K;
    }
    function Ig(M, Y, K) {
      for (var ge = K - 1, Ae = M.length; ++ge < Ae; )
        if (M[ge] === Y)
          return ge;
      return -1;
    }
    function xg(M, Y, K) {
      for (var ge = K + 1; ge--; )
        if (M[ge] === Y)
          return ge;
      return ge;
    }
    function Dn(M) {
      return En(M) ? Pg(M) : lg(M);
    }
    function Kr(M) {
      return En(M) ? Cg(M) : fg(M);
    }
    function uh(M) {
      for (var Y = M.length; Y-- && Tt.test(M.charAt(Y)); )
        ;
      return Y;
    }
    var Og = Fa(te);
    function Pg(M) {
      for (var Y = _n.lastIndex = 0; _n.test(M); )
        ++Y;
      return Y;
    }
    function Cg(M) {
      return M.match(_n) || [];
    }
    function Ag(M) {
      return M.match(Js) || [];
    }
    var Tg = function M(Y) {
      Y = Y == null ? Xe : Sn.defaults(Xe.Object(), Y, Sn.pick(Xe, Xs));
      var K = Y.Array, ge = Y.Date, Ae = Y.Error, rt = Y.Function, Bt = Y.Math, ht = Y.Object, Va = Y.RegExp, Rg = Y.String, Ur = Y.TypeError, ro = K.prototype, Ng = rt.prototype, In = ht.prototype, io = Y["__core-js_shared__"], no = Ng.toString, nt = In.hasOwnProperty, Lg = 0, hh = function() {
        var r = /[^.]+$/.exec(io && io.keys && io.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
      }(), so = In.toString, Ug = no.call(ht), $g = Xe._, Mg = Va("^" + no.call(nt).replace(Ot, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), oo = pr ? Y.Buffer : t, Ti = Y.Symbol, ao = Y.Uint8Array, lh = oo ? oo.allocUnsafe : t, co = ch(ht.getPrototypeOf, ht), fh = ht.create, dh = In.propertyIsEnumerable, uo = ro.splice, ph = Ti ? Ti.isConcatSpreadable : t, Xn = Ti ? Ti.iterator : t, Gi = Ti ? Ti.toStringTag : t, ho = function() {
        try {
          var r = Zi(ht, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), jg = Y.clearTimeout !== Xe.clearTimeout && Y.clearTimeout, qg = ge && ge.now !== Xe.Date.now && ge.now, zg = Y.setTimeout !== Xe.setTimeout && Y.setTimeout, lo = Bt.ceil, fo = Bt.floor, Wa = ht.getOwnPropertySymbols, Fg = oo ? oo.isBuffer : t, gh = Y.isFinite, Hg = ro.join, Bg = ch(ht.keys, ht), Kt = Bt.max, Xt = Bt.min, Kg = ge.now, kg = Y.parseInt, yh = Bt.random, Vg = ro.reverse, Ga = Zi(Y, "DataView"), Zn = Zi(Y, "Map"), Ya = Zi(Y, "Promise"), xn = Zi(Y, "Set"), es = Zi(Y, "WeakMap"), ts = Zi(ht, "create"), po = es && new es(), On = {}, Wg = en(Ga), Gg = en(Zn), Yg = en(Ya), Jg = en(xn), Qg = en(es), go = Ti ? Ti.prototype : t, rs = go ? go.valueOf : t, vh = go ? go.toString : t;
      function v(r) {
        if (At(r) && !Re(r) && !(r instanceof Ye)) {
          if (r instanceof $r)
            return r;
          if (nt.call(r, "__wrapped__"))
            return ml(r);
        }
        return new $r(r);
      }
      var Pn = /* @__PURE__ */ function() {
        function r() {
        }
        return function(n) {
          if (!Dt(n))
            return {};
          if (fh)
            return fh(n);
          r.prototype = n;
          var a = new r();
          return r.prototype = t, a;
        };
      }();
      function yo() {
      }
      function $r(r, n) {
        this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = t;
      }
      v.templateSettings = { escape: It, evaluate: xt, interpolate: Et, variable: "", imports: { _: v } }, v.prototype = yo.prototype, v.prototype.constructor = v, $r.prototype = Pn(yo.prototype), $r.prototype.constructor = $r;
      function Ye(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = re, this.__views__ = [];
      }
      function Xg() {
        var r = new Ye(this.__wrapped__);
        return r.__actions__ = gr(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = gr(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = gr(this.__views__), r;
      }
      function Zg() {
        if (this.__filtered__) {
          var r = new Ye(this);
          r.__dir__ = -1, r.__filtered__ = !0;
        } else
          r = this.clone(), r.__dir__ *= -1;
        return r;
      }
      function ey() {
        var r = this.__wrapped__.value(), n = this.__dir__, a = Re(r), h = n < 0, p = a ? r.length : 0, w = fv(0, p, this.__views__), x = w.start, N = w.end, q = N - x, X = h ? N : x - 1, Z = this.__iteratees__, ne = Z.length, he = 0, ye = Xt(q, this.__takeCount__);
        if (!a || !h && p == q && ye == q)
          return Fh(r, this.__actions__);
        var Ee = [];
        e:
          for (; q-- && he < ye; ) {
            X += n;
            for (var Fe = -1, De = r[X]; ++Fe < ne; ) {
              var We = Z[Fe], Ze = We.iteratee, xr = We.type, ar = Ze(De);
              if (xr == C)
                De = ar;
              else if (!ar) {
                if (xr == b)
                  continue e;
                break e;
              }
            }
            Ee[he++] = De;
          }
        return Ee;
      }
      Ye.prototype = Pn(yo.prototype), Ye.prototype.constructor = Ye;
      function Yi(r) {
        var n = -1, a = r == null ? 0 : r.length;
        for (this.clear(); ++n < a; ) {
          var h = r[n];
          this.set(h[0], h[1]);
        }
      }
      function ty() {
        this.__data__ = ts ? ts(null) : {}, this.size = 0;
      }
      function ry(r) {
        var n = this.has(r) && delete this.__data__[r];
        return this.size -= n ? 1 : 0, n;
      }
      function iy(r) {
        var n = this.__data__;
        if (ts) {
          var a = n[r];
          return a === y ? t : a;
        }
        return nt.call(n, r) ? n[r] : t;
      }
      function ny(r) {
        var n = this.__data__;
        return ts ? n[r] !== t : nt.call(n, r);
      }
      function sy(r, n) {
        var a = this.__data__;
        return this.size += this.has(r) ? 0 : 1, a[r] = ts && n === t ? y : n, this;
      }
      Yi.prototype.clear = ty, Yi.prototype.delete = ry, Yi.prototype.get = iy, Yi.prototype.has = ny, Yi.prototype.set = sy;
      function ui(r) {
        var n = -1, a = r == null ? 0 : r.length;
        for (this.clear(); ++n < a; ) {
          var h = r[n];
          this.set(h[0], h[1]);
        }
      }
      function oy() {
        this.__data__ = [], this.size = 0;
      }
      function ay(r) {
        var n = this.__data__, a = vo(n, r);
        if (a < 0)
          return !1;
        var h = n.length - 1;
        return a == h ? n.pop() : uo.call(n, a, 1), --this.size, !0;
      }
      function cy(r) {
        var n = this.__data__, a = vo(n, r);
        return a < 0 ? t : n[a][1];
      }
      function uy(r) {
        return vo(this.__data__, r) > -1;
      }
      function hy(r, n) {
        var a = this.__data__, h = vo(a, r);
        return h < 0 ? (++this.size, a.push([r, n])) : a[h][1] = n, this;
      }
      ui.prototype.clear = oy, ui.prototype.delete = ay, ui.prototype.get = cy, ui.prototype.has = uy, ui.prototype.set = hy;
      function hi(r) {
        var n = -1, a = r == null ? 0 : r.length;
        for (this.clear(); ++n < a; ) {
          var h = r[n];
          this.set(h[0], h[1]);
        }
      }
      function ly() {
        this.size = 0, this.__data__ = { hash: new Yi(), map: new (Zn || ui)(), string: new Yi() };
      }
      function fy(r) {
        var n = Co(this, r).delete(r);
        return this.size -= n ? 1 : 0, n;
      }
      function dy(r) {
        return Co(this, r).get(r);
      }
      function py(r) {
        return Co(this, r).has(r);
      }
      function gy(r, n) {
        var a = Co(this, r), h = a.size;
        return a.set(r, n), this.size += a.size == h ? 0 : 1, this;
      }
      hi.prototype.clear = ly, hi.prototype.delete = fy, hi.prototype.get = dy, hi.prototype.has = py, hi.prototype.set = gy;
      function Ji(r) {
        var n = -1, a = r == null ? 0 : r.length;
        for (this.__data__ = new hi(); ++n < a; )
          this.add(r[n]);
      }
      function yy(r) {
        return this.__data__.set(r, y), this;
      }
      function vy(r) {
        return this.__data__.has(r);
      }
      Ji.prototype.add = Ji.prototype.push = yy, Ji.prototype.has = vy;
      function kr(r) {
        var n = this.__data__ = new ui(r);
        this.size = n.size;
      }
      function my() {
        this.__data__ = new ui(), this.size = 0;
      }
      function wy(r) {
        var n = this.__data__, a = n.delete(r);
        return this.size = n.size, a;
      }
      function _y(r) {
        return this.__data__.get(r);
      }
      function by(r) {
        return this.__data__.has(r);
      }
      function Ey(r, n) {
        var a = this.__data__;
        if (a instanceof ui) {
          var h = a.__data__;
          if (!Zn || h.length < o - 1)
            return h.push([r, n]), this.size = ++a.size, this;
          a = this.__data__ = new hi(h);
        }
        return a.set(r, n), this.size = a.size, this;
      }
      kr.prototype.clear = my, kr.prototype.delete = wy, kr.prototype.get = _y, kr.prototype.has = by, kr.prototype.set = Ey;
      function mh(r, n) {
        var a = Re(r), h = !a && tn(r), p = !a && !h && $i(r), w = !a && !h && !p && Rn(r), x = a || h || p || w, N = x ? Ba(r.length, Rg) : [], q = N.length;
        for (var X in r)
          (n || nt.call(r, X)) && !(x && (X == "length" || p && (X == "offset" || X == "parent") || w && (X == "buffer" || X == "byteLength" || X == "byteOffset") || pi(X, q))) && N.push(X);
        return N;
      }
      function wh(r) {
        var n = r.length;
        return n ? r[oc(0, n - 1)] : t;
      }
      function Dy(r, n) {
        return Ao(gr(r), Qi(n, 0, r.length));
      }
      function Sy(r) {
        return Ao(gr(r));
      }
      function Ja(r, n, a) {
        (a !== t && !Vr(r[n], a) || a === t && !(n in r)) && li(r, n, a);
      }
      function is(r, n, a) {
        var h = r[n];
        (!(nt.call(r, n) && Vr(h, a)) || a === t && !(n in r)) && li(r, n, a);
      }
      function vo(r, n) {
        for (var a = r.length; a--; )
          if (Vr(r[a][0], n))
            return a;
        return -1;
      }
      function Iy(r, n, a, h) {
        return Ri(r, function(p, w, x) {
          n(h, p, a(p), x);
        }), h;
      }
      function _h(r, n) {
        return r && ei(n, Vt(n), r);
      }
      function xy(r, n) {
        return r && ei(n, vr(n), r);
      }
      function li(r, n, a) {
        n == "__proto__" && ho ? ho(r, n, { configurable: !0, enumerable: !0, value: a, writable: !0 }) : r[n] = a;
      }
      function Qa(r, n) {
        for (var a = -1, h = n.length, p = K(h), w = r == null; ++a < h; )
          p[a] = w ? t : Tc(r, n[a]);
        return p;
      }
      function Qi(r, n, a) {
        return r === r && (a !== t && (r = r <= a ? r : a), n !== t && (r = r >= n ? r : n)), r;
      }
      function Mr(r, n, a, h, p, w) {
        var x, N = n & D, q = n & I, X = n & T;
        if (a && (x = p ? a(r, h, p, w) : a(r)), x !== t)
          return x;
        if (!Dt(r))
          return r;
        var Z = Re(r);
        if (Z) {
          if (x = pv(r), !N)
            return gr(r, x);
        } else {
          var ne = Zt(r), he = ne == ae || ne == fe;
          if ($i(r))
            return Kh(r, N);
          if (ne == Me || ne == le || he && !p) {
            if (x = q || he ? {} : ul(r), !N)
              return q ? iv(r, xy(x, r)) : rv(r, _h(x, r));
          } else {
            if (!st[ne])
              return p ? r : {};
            x = gv(r, ne, N);
          }
        }
        w || (w = new kr());
        var ye = w.get(r);
        if (ye)
          return ye;
        w.set(r, x), jl(r) ? r.forEach(function(De) {
          x.add(Mr(De, n, a, De, r, w));
        }) : $l(r) && r.forEach(function(De, We) {
          x.set(We, Mr(De, n, a, We, r, w));
        });
        var Ee = X ? q ? vc : yc : q ? vr : Vt, Fe = Z ? t : Ee(r);
        return Lr(Fe || r, function(De, We) {
          Fe && (We = De, De = r[We]), is(x, We, Mr(De, n, a, We, r, w));
        }), x;
      }
      function Oy(r) {
        var n = Vt(r);
        return function(a) {
          return bh(a, r, n);
        };
      }
      function bh(r, n, a) {
        var h = a.length;
        if (r == null)
          return !h;
        for (r = ht(r); h--; ) {
          var p = a[h], w = n[p], x = r[p];
          if (x === t && !(p in r) || !w(x))
            return !1;
        }
        return !0;
      }
      function Eh(r, n, a) {
        if (typeof r != "function")
          throw new Ur(d);
        return hs(function() {
          r.apply(t, a);
        }, n);
      }
      function ns(r, n, a, h) {
        var p = -1, w = Zs, x = !0, N = r.length, q = [], X = n.length;
        if (!N)
          return q;
        a && (n = wt(n, Dr(a))), h ? (w = Ma, x = !1) : n.length >= o && (w = Qn, x = !1, n = new Ji(n));
        e:
          for (; ++p < N; ) {
            var Z = r[p], ne = a == null ? Z : a(Z);
            if (Z = h || Z !== 0 ? Z : 0, x && ne === ne) {
              for (var he = X; he--; )
                if (n[he] === ne)
                  continue e;
              q.push(Z);
            } else
              w(n, ne, h) || q.push(Z);
          }
        return q;
      }
      var Ri = Yh(Zr), Dh = Yh(Za, !0);
      function Py(r, n) {
        var a = !0;
        return Ri(r, function(h, p, w) {
          return a = !!n(h, p, w), a;
        }), a;
      }
      function mo(r, n, a) {
        for (var h = -1, p = r.length; ++h < p; ) {
          var w = r[h], x = n(w);
          if (x != null && (N === t ? x === x && !Ir(x) : a(x, N)))
            var N = x, q = w;
        }
        return q;
      }
      function Cy(r, n, a, h) {
        var p = r.length;
        for (a = je(a), a < 0 && (a = -a > p ? 0 : p + a), h = h === t || h > p ? p : je(h), h < 0 && (h += p), h = a > h ? 0 : zl(h); a < h; )
          r[a++] = n;
        return r;
      }
      function Sh(r, n) {
        var a = [];
        return Ri(r, function(h, p, w) {
          n(h, p, w) && a.push(h);
        }), a;
      }
      function Yt(r, n, a, h, p) {
        var w = -1, x = r.length;
        for (a || (a = vv), p || (p = []); ++w < x; ) {
          var N = r[w];
          n > 0 && a(N) ? n > 1 ? Yt(N, n - 1, a, h, p) : Ci(p, N) : h || (p[p.length] = N);
        }
        return p;
      }
      var Xa = Jh(), Ih = Jh(!0);
      function Zr(r, n) {
        return r && Xa(r, n, Vt);
      }
      function Za(r, n) {
        return r && Ih(r, n, Vt);
      }
      function wo(r, n) {
        return Pi(n, function(a) {
          return gi(r[a]);
        });
      }
      function Xi(r, n) {
        n = Li(n, r);
        for (var a = 0, h = n.length; r != null && a < h; )
          r = r[ti(n[a++])];
        return a && a == h ? r : t;
      }
      function xh(r, n, a) {
        var h = n(r);
        return Re(r) ? h : Ci(h, a(r));
      }
      function sr(r) {
        return r == null ? r === t ? ze : ke : Gi && Gi in ht(r) ? lv(r) : Sv(r);
      }
      function ec(r, n) {
        return r > n;
      }
      function Ay(r, n) {
        return r != null && nt.call(r, n);
      }
      function Ty(r, n) {
        return r != null && n in ht(r);
      }
      function Ry(r, n, a) {
        return r >= Xt(n, a) && r < Kt(n, a);
      }
      function tc(r, n, a) {
        for (var h = a ? Ma : Zs, p = r[0].length, w = r.length, x = w, N = K(w), q = 1 / 0, X = []; x--; ) {
          var Z = r[x];
          x && n && (Z = wt(Z, Dr(n))), q = Xt(Z.length, q), N[x] = !a && (n || p >= 120 && Z.length >= 120) ? new Ji(x && Z) : t;
        }
        Z = r[0];
        var ne = -1, he = N[0];
        e:
          for (; ++ne < p && X.length < q; ) {
            var ye = Z[ne], Ee = n ? n(ye) : ye;
            if (ye = a || ye !== 0 ? ye : 0, !(he ? Qn(he, Ee) : h(X, Ee, a))) {
              for (x = w; --x; ) {
                var Fe = N[x];
                if (!(Fe ? Qn(Fe, Ee) : h(r[x], Ee, a)))
                  continue e;
              }
              he && he.push(Ee), X.push(ye);
            }
          }
        return X;
      }
      function Ny(r, n, a, h) {
        return Zr(r, function(p, w, x) {
          n(h, a(p), w, x);
        }), h;
      }
      function ss(r, n, a) {
        n = Li(n, r), r = dl(r, n);
        var h = r == null ? r : r[ti(qr(n))];
        return h == null ? t : kt(h, r, a);
      }
      function Oh(r) {
        return At(r) && sr(r) == le;
      }
      function Ly(r) {
        return At(r) && sr(r) == Se;
      }
      function Uy(r) {
        return At(r) && sr(r) == U;
      }
      function os(r, n, a, h, p) {
        return r === n ? !0 : r == null || n == null || !At(r) && !At(n) ? r !== r && n !== n : $y(r, n, a, h, os, p);
      }
      function $y(r, n, a, h, p, w) {
        var x = Re(r), N = Re(n), q = x ? me : Zt(r), X = N ? me : Zt(n);
        q = q == le ? Me : q, X = X == le ? Me : X;
        var Z = q == Me, ne = X == Me, he = q == X;
        if (he && $i(r)) {
          if (!$i(n))
            return !1;
          x = !0, Z = !1;
        }
        if (he && !Z)
          return w || (w = new kr()), x || Rn(r) ? ol(r, n, a, h, p, w) : uv(r, n, q, a, h, p, w);
        if (!(a & P)) {
          var ye = Z && nt.call(r, "__wrapped__"), Ee = ne && nt.call(n, "__wrapped__");
          if (ye || Ee) {
            var Fe = ye ? r.value() : r, De = Ee ? n.value() : n;
            return w || (w = new kr()), p(Fe, De, a, h, w);
          }
        }
        return he ? (w || (w = new kr()), hv(r, n, a, h, p, w)) : !1;
      }
      function My(r) {
        return At(r) && Zt(r) == Ie;
      }
      function rc(r, n, a, h) {
        var p = a.length, w = p, x = !h;
        if (r == null)
          return !w;
        for (r = ht(r); p--; ) {
          var N = a[p];
          if (x && N[2] ? N[1] !== r[N[0]] : !(N[0] in r))
            return !1;
        }
        for (; ++p < w; ) {
          N = a[p];
          var q = N[0], X = r[q], Z = N[1];
          if (x && N[2]) {
            if (X === t && !(q in r))
              return !1;
          } else {
            var ne = new kr();
            if (h)
              var he = h(X, Z, q, r, n, ne);
            if (!(he === t ? os(Z, X, P | F, h, ne) : he))
              return !1;
          }
        }
        return !0;
      }
      function Ph(r) {
        if (!Dt(r) || wv(r))
          return !1;
        var n = gi(r) ? Mg : ba;
        return n.test(en(r));
      }
      function jy(r) {
        return At(r) && sr(r) == qe;
      }
      function qy(r) {
        return At(r) && Zt(r) == xe;
      }
      function zy(r) {
        return At(r) && $o(r.length) && !!at[sr(r)];
      }
      function Ch(r) {
        return typeof r == "function" ? r : r == null ? mr : typeof r == "object" ? Re(r) ? Rh(r[0], r[1]) : Th(r) : Ql(r);
      }
      function ic(r) {
        if (!us(r))
          return Bg(r);
        var n = [];
        for (var a in ht(r))
          nt.call(r, a) && a != "constructor" && n.push(a);
        return n;
      }
      function Fy(r) {
        if (!Dt(r))
          return Dv(r);
        var n = us(r), a = [];
        for (var h in r)
          h == "constructor" && (n || !nt.call(r, h)) || a.push(h);
        return a;
      }
      function nc(r, n) {
        return r < n;
      }
      function Ah(r, n) {
        var a = -1, h = yr(r) ? K(r.length) : [];
        return Ri(r, function(p, w, x) {
          h[++a] = n(p, w, x);
        }), h;
      }
      function Th(r) {
        var n = wc(r);
        return n.length == 1 && n[0][2] ? ll(n[0][0], n[0][1]) : function(a) {
          return a === r || rc(a, r, n);
        };
      }
      function Rh(r, n) {
        return bc(r) && hl(n) ? ll(ti(r), n) : function(a) {
          var h = Tc(a, r);
          return h === t && h === n ? Rc(a, r) : os(n, h, P | F);
        };
      }
      function _o(r, n, a, h, p) {
        r !== n && Xa(n, function(w, x) {
          if (p || (p = new kr()), Dt(w))
            Hy(r, n, x, a, _o, h, p);
          else {
            var N = h ? h(Dc(r, x), w, x + "", r, n, p) : t;
            N === t && (N = w), Ja(r, x, N);
          }
        }, vr);
      }
      function Hy(r, n, a, h, p, w, x) {
        var N = Dc(r, a), q = Dc(n, a), X = x.get(q);
        if (X) {
          Ja(r, a, X);
          return;
        }
        var Z = w ? w(N, q, a + "", r, n, x) : t, ne = Z === t;
        if (ne) {
          var he = Re(q), ye = !he && $i(q), Ee = !he && !ye && Rn(q);
          Z = q, he || ye || Ee ? Re(N) ? Z = N : Nt(N) ? Z = gr(N) : ye ? (ne = !1, Z = Kh(q, !0)) : Ee ? (ne = !1, Z = kh(q, !0)) : Z = [] : ls(q) || tn(q) ? (Z = N, tn(N) ? Z = Fl(N) : (!Dt(N) || gi(N)) && (Z = ul(q))) : ne = !1;
        }
        ne && (x.set(q, Z), p(Z, q, h, w, x), x.delete(q)), Ja(r, a, Z);
      }
      function Nh(r, n) {
        var a = r.length;
        if (a)
          return n += n < 0 ? a : 0, pi(n, a) ? r[n] : t;
      }
      function Lh(r, n, a) {
        n.length ? n = wt(n, function(w) {
          return Re(w) ? function(x) {
            return Xi(x, w.length === 1 ? w[0] : w);
          } : w;
        }) : n = [mr];
        var h = -1;
        n = wt(n, Dr(we()));
        var p = Ah(r, function(w, x, N) {
          var q = wt(n, function(X) {
            return X(w);
          });
          return { criteria: q, index: ++h, value: w };
        });
        return gg(p, function(w, x) {
          return tv(w, x, a);
        });
      }
      function By(r, n) {
        return Uh(r, n, function(a, h) {
          return Rc(r, h);
        });
      }
      function Uh(r, n, a) {
        for (var h = -1, p = n.length, w = {}; ++h < p; ) {
          var x = n[h], N = Xi(r, x);
          a(N, x) && as(w, Li(x, r), N);
        }
        return w;
      }
      function Ky(r) {
        return function(n) {
          return Xi(n, r);
        };
      }
      function sc(r, n, a, h) {
        var p = h ? pg : bn, w = -1, x = n.length, N = r;
        for (r === n && (n = gr(n)), a && (N = wt(r, Dr(a))); ++w < x; )
          for (var q = 0, X = n[w], Z = a ? a(X) : X; (q = p(N, Z, q, h)) > -1; )
            N !== r && uo.call(N, q, 1), uo.call(r, q, 1);
        return r;
      }
      function $h(r, n) {
        for (var a = r ? n.length : 0, h = a - 1; a--; ) {
          var p = n[a];
          if (a == h || p !== w) {
            var w = p;
            pi(p) ? uo.call(r, p, 1) : uc(r, p);
          }
        }
        return r;
      }
      function oc(r, n) {
        return r + fo(yh() * (n - r + 1));
      }
      function ky(r, n, a, h) {
        for (var p = -1, w = Kt(lo((n - r) / (a || 1)), 0), x = K(w); w--; )
          x[h ? w : ++p] = r, r += a;
        return x;
      }
      function ac(r, n) {
        var a = "";
        if (!r || n < 1 || n > k)
          return a;
        do
          n % 2 && (a += r), n = fo(n / 2), n && (r += r);
        while (n);
        return a;
      }
      function Ke(r, n) {
        return Sc(fl(r, n, mr), r + "");
      }
      function Vy(r) {
        return wh(Nn(r));
      }
      function Wy(r, n) {
        var a = Nn(r);
        return Ao(a, Qi(n, 0, a.length));
      }
      function as(r, n, a, h) {
        if (!Dt(r))
          return r;
        n = Li(n, r);
        for (var p = -1, w = n.length, x = w - 1, N = r; N != null && ++p < w; ) {
          var q = ti(n[p]), X = a;
          if (q === "__proto__" || q === "constructor" || q === "prototype")
            return r;
          if (p != x) {
            var Z = N[q];
            X = h ? h(Z, q, N) : t, X === t && (X = Dt(Z) ? Z : pi(n[p + 1]) ? [] : {});
          }
          is(N, q, X), N = N[q];
        }
        return r;
      }
      var Mh = po ? function(r, n) {
        return po.set(r, n), r;
      } : mr, Gy = ho ? function(r, n) {
        return ho(r, "toString", { configurable: !0, enumerable: !1, value: Lc(n), writable: !0 });
      } : mr;
      function Yy(r) {
        return Ao(Nn(r));
      }
      function jr(r, n, a) {
        var h = -1, p = r.length;
        n < 0 && (n = -n > p ? 0 : p + n), a = a > p ? p : a, a < 0 && (a += p), p = n > a ? 0 : a - n >>> 0, n >>>= 0;
        for (var w = K(p); ++h < p; )
          w[h] = r[h + n];
        return w;
      }
      function Jy(r, n) {
        var a;
        return Ri(r, function(h, p, w) {
          return a = n(h, p, w), !a;
        }), !!a;
      }
      function bo(r, n, a) {
        var h = 0, p = r == null ? h : r.length;
        if (typeof n == "number" && n === n && p <= oe) {
          for (; h < p; ) {
            var w = h + p >>> 1, x = r[w];
            x !== null && !Ir(x) && (a ? x <= n : x < n) ? h = w + 1 : p = w;
          }
          return p;
        }
        return cc(r, n, mr, a);
      }
      function cc(r, n, a, h) {
        var p = 0, w = r == null ? 0 : r.length;
        if (w === 0)
          return 0;
        n = a(n);
        for (var x = n !== n, N = n === null, q = Ir(n), X = n === t; p < w; ) {
          var Z = fo((p + w) / 2), ne = a(r[Z]), he = ne !== t, ye = ne === null, Ee = ne === ne, Fe = Ir(ne);
          if (x)
            var De = h || Ee;
          else
            X ? De = Ee && (h || he) : N ? De = Ee && he && (h || !ye) : q ? De = Ee && he && !ye && (h || !Fe) : ye || Fe ? De = !1 : De = h ? ne <= n : ne < n;
          De ? p = Z + 1 : w = Z;
        }
        return Xt(w, _e);
      }
      function jh(r, n) {
        for (var a = -1, h = r.length, p = 0, w = []; ++a < h; ) {
          var x = r[a], N = n ? n(x) : x;
          if (!a || !Vr(N, q)) {
            var q = N;
            w[p++] = x === 0 ? 0 : x;
          }
        }
        return w;
      }
      function qh(r) {
        return typeof r == "number" ? r : Ir(r) ? J : +r;
      }
      function Sr(r) {
        if (typeof r == "string")
          return r;
        if (Re(r))
          return wt(r, Sr) + "";
        if (Ir(r))
          return vh ? vh.call(r) : "";
        var n = r + "";
        return n == "0" && 1 / r == -Q ? "-0" : n;
      }
      function Ni(r, n, a) {
        var h = -1, p = Zs, w = r.length, x = !0, N = [], q = N;
        if (a)
          x = !1, p = Ma;
        else if (w >= o) {
          var X = n ? null : av(r);
          if (X)
            return to(X);
          x = !1, p = Qn, q = new Ji();
        } else
          q = n ? [] : N;
        e:
          for (; ++h < w; ) {
            var Z = r[h], ne = n ? n(Z) : Z;
            if (Z = a || Z !== 0 ? Z : 0, x && ne === ne) {
              for (var he = q.length; he--; )
                if (q[he] === ne)
                  continue e;
              n && q.push(ne), N.push(Z);
            } else
              p(q, ne, a) || (q !== N && q.push(ne), N.push(Z));
          }
        return N;
      }
      function uc(r, n) {
        return n = Li(n, r), r = dl(r, n), r == null || delete r[ti(qr(n))];
      }
      function zh(r, n, a, h) {
        return as(r, n, a(Xi(r, n)), h);
      }
      function Eo(r, n, a, h) {
        for (var p = r.length, w = h ? p : -1; (h ? w-- : ++w < p) && n(r[w], w, r); )
          ;
        return a ? jr(r, h ? 0 : w, h ? w + 1 : p) : jr(r, h ? w + 1 : 0, h ? p : w);
      }
      function Fh(r, n) {
        var a = r;
        return a instanceof Ye && (a = a.value()), ja(n, function(h, p) {
          return p.func.apply(p.thisArg, Ci([h], p.args));
        }, a);
      }
      function hc(r, n, a) {
        var h = r.length;
        if (h < 2)
          return h ? Ni(r[0]) : [];
        for (var p = -1, w = K(h); ++p < h; )
          for (var x = r[p], N = -1; ++N < h; )
            N != p && (w[p] = ns(w[p] || x, r[N], n, a));
        return Ni(Yt(w, 1), n, a);
      }
      function Hh(r, n, a) {
        for (var h = -1, p = r.length, w = n.length, x = {}; ++h < p; ) {
          var N = h < w ? n[h] : t;
          a(x, r[h], N);
        }
        return x;
      }
      function lc(r) {
        return Nt(r) ? r : [];
      }
      function fc(r) {
        return typeof r == "function" ? r : mr;
      }
      function Li(r, n) {
        return Re(r) ? r : bc(r, n) ? [r] : vl(it(r));
      }
      var Qy = Ke;
      function Ui(r, n, a) {
        var h = r.length;
        return a = a === t ? h : a, !n && a >= h ? r : jr(r, n, a);
      }
      var Bh = jg || function(r) {
        return Xe.clearTimeout(r);
      };
      function Kh(r, n) {
        if (n)
          return r.slice();
        var a = r.length, h = lh ? lh(a) : new r.constructor(a);
        return r.copy(h), h;
      }
      function dc(r) {
        var n = new r.constructor(r.byteLength);
        return new ao(n).set(new ao(r)), n;
      }
      function Xy(r, n) {
        var a = n ? dc(r.buffer) : r.buffer;
        return new r.constructor(a, r.byteOffset, r.byteLength);
      }
      function Zy(r) {
        var n = new r.constructor(r.source, Rr.exec(r));
        return n.lastIndex = r.lastIndex, n;
      }
      function ev(r) {
        return rs ? ht(rs.call(r)) : {};
      }
      function kh(r, n) {
        var a = n ? dc(r.buffer) : r.buffer;
        return new r.constructor(a, r.byteOffset, r.length);
      }
      function Vh(r, n) {
        if (r !== n) {
          var a = r !== t, h = r === null, p = r === r, w = Ir(r), x = n !== t, N = n === null, q = n === n, X = Ir(n);
          if (!N && !X && !w && r > n || w && x && q && !N && !X || h && x && q || !a && q || !p)
            return 1;
          if (!h && !w && !X && r < n || X && a && p && !h && !w || N && a && p || !x && p || !q)
            return -1;
        }
        return 0;
      }
      function tv(r, n, a) {
        for (var h = -1, p = r.criteria, w = n.criteria, x = p.length, N = a.length; ++h < x; ) {
          var q = Vh(p[h], w[h]);
          if (q) {
            if (h >= N)
              return q;
            var X = a[h];
            return q * (X == "desc" ? -1 : 1);
          }
        }
        return r.index - n.index;
      }
      function Wh(r, n, a, h) {
        for (var p = -1, w = r.length, x = a.length, N = -1, q = n.length, X = Kt(w - x, 0), Z = K(q + X), ne = !h; ++N < q; )
          Z[N] = n[N];
        for (; ++p < x; )
          (ne || p < w) && (Z[a[p]] = r[p]);
        for (; X--; )
          Z[N++] = r[p++];
        return Z;
      }
      function Gh(r, n, a, h) {
        for (var p = -1, w = r.length, x = -1, N = a.length, q = -1, X = n.length, Z = Kt(w - N, 0), ne = K(Z + X), he = !h; ++p < Z; )
          ne[p] = r[p];
        for (var ye = p; ++q < X; )
          ne[ye + q] = n[q];
        for (; ++x < N; )
          (he || p < w) && (ne[ye + a[x]] = r[p++]);
        return ne;
      }
      function gr(r, n) {
        var a = -1, h = r.length;
        for (n || (n = K(h)); ++a < h; )
          n[a] = r[a];
        return n;
      }
      function ei(r, n, a, h) {
        var p = !a;
        a || (a = {});
        for (var w = -1, x = n.length; ++w < x; ) {
          var N = n[w], q = h ? h(a[N], r[N], N, a, r) : t;
          q === t && (q = r[N]), p ? li(a, N, q) : is(a, N, q);
        }
        return a;
      }
      function rv(r, n) {
        return ei(r, _c(r), n);
      }
      function iv(r, n) {
        return ei(r, al(r), n);
      }
      function Do(r, n) {
        return function(a, h) {
          var p = Re(a) ? cg : Iy, w = n ? n() : {};
          return p(a, r, we(h, 2), w);
        };
      }
      function Cn(r) {
        return Ke(function(n, a) {
          var h = -1, p = a.length, w = p > 1 ? a[p - 1] : t, x = p > 2 ? a[2] : t;
          for (w = r.length > 3 && typeof w == "function" ? (p--, w) : t, x && or(a[0], a[1], x) && (w = p < 3 ? t : w, p = 1), n = ht(n); ++h < p; ) {
            var N = a[h];
            N && r(n, N, h, w);
          }
          return n;
        });
      }
      function Yh(r, n) {
        return function(a, h) {
          if (a == null)
            return a;
          if (!yr(a))
            return r(a, h);
          for (var p = a.length, w = n ? p : -1, x = ht(a); (n ? w-- : ++w < p) && h(x[w], w, x) !== !1; )
            ;
          return a;
        };
      }
      function Jh(r) {
        return function(n, a, h) {
          for (var p = -1, w = ht(n), x = h(n), N = x.length; N--; ) {
            var q = x[r ? N : ++p];
            if (a(w[q], q, w) === !1)
              break;
          }
          return n;
        };
      }
      function nv(r, n, a) {
        var h = n & B, p = cs(r);
        function w() {
          var x = this && this !== Xe && this instanceof w ? p : r;
          return x.apply(h ? a : this, arguments);
        }
        return w;
      }
      function Qh(r) {
        return function(n) {
          n = it(n);
          var a = En(n) ? Kr(n) : t, h = a ? a[0] : n.charAt(0), p = a ? Ui(a, 1).join("") : n.slice(1);
          return h[r]() + p;
        };
      }
      function An(r) {
        return function(n) {
          return ja(Yl(Gl(n).replace(Yn, "")), r, "");
        };
      }
      function cs(r) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new r();
            case 1:
              return new r(n[0]);
            case 2:
              return new r(n[0], n[1]);
            case 3:
              return new r(n[0], n[1], n[2]);
            case 4:
              return new r(n[0], n[1], n[2], n[3]);
            case 5:
              return new r(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new r(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new r(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var a = Pn(r.prototype), h = r.apply(a, n);
          return Dt(h) ? h : a;
        };
      }
      function sv(r, n, a) {
        var h = cs(r);
        function p() {
          for (var w = arguments.length, x = K(w), N = w, q = Tn(p); N--; )
            x[N] = arguments[N];
          var X = w < 3 && x[0] !== q && x[w - 1] !== q ? [] : Ai(x, q);
          if (w -= X.length, w < a)
            return rl(r, n, So, p.placeholder, t, x, X, t, t, a - w);
          var Z = this && this !== Xe && this instanceof p ? h : r;
          return kt(Z, this, x);
        }
        return p;
      }
      function Xh(r) {
        return function(n, a, h) {
          var p = ht(n);
          if (!yr(n)) {
            var w = we(a, 3);
            n = Vt(n), a = function(N) {
              return w(p[N], N, p);
            };
          }
          var x = r(n, a, h);
          return x > -1 ? p[w ? n[x] : x] : t;
        };
      }
      function Zh(r) {
        return di(function(n) {
          var a = n.length, h = a, p = $r.prototype.thru;
          for (r && n.reverse(); h--; ) {
            var w = n[h];
            if (typeof w != "function")
              throw new Ur(d);
            if (p && !x && Po(w) == "wrapper")
              var x = new $r([], !0);
          }
          for (h = x ? h : a; ++h < a; ) {
            w = n[h];
            var N = Po(w), q = N == "wrapper" ? mc(w) : t;
            q && Ec(q[0]) && q[1] == (u | j | A | _) && !q[4].length && q[9] == 1 ? x = x[Po(q[0])].apply(x, q[3]) : x = w.length == 1 && Ec(w) ? x[N]() : x.thru(w);
          }
          return function() {
            var X = arguments, Z = X[0];
            if (x && X.length == 1 && Re(Z))
              return x.plant(Z).value();
            for (var ne = 0, he = a ? n[ne].apply(this, X) : Z; ++ne < a; )
              he = n[ne].call(this, he);
            return he;
          };
        });
      }
      function So(r, n, a, h, p, w, x, N, q, X) {
        var Z = n & u, ne = n & B, he = n & ie, ye = n & (j | O), Ee = n & W, Fe = he ? t : cs(r);
        function De() {
          for (var We = arguments.length, Ze = K(We), xr = We; xr--; )
            Ze[xr] = arguments[xr];
          if (ye)
            var ar = Tn(De), Or = vg(Ze, ar);
          if (h && (Ze = Wh(Ze, h, p, ye)), w && (Ze = Gh(Ze, w, x, ye)), We -= Or, ye && We < X) {
            var Lt = Ai(Ze, ar);
            return rl(r, n, So, De.placeholder, a, Ze, Lt, N, q, X - We);
          }
          var Wr = ne ? a : this, vi = he ? Wr[r] : r;
          return We = Ze.length, N ? Ze = Iv(Ze, N) : Ee && We > 1 && Ze.reverse(), Z && q < We && (Ze.length = q), this && this !== Xe && this instanceof De && (vi = Fe || cs(vi)), vi.apply(Wr, Ze);
        }
        return De;
      }
      function el(r, n) {
        return function(a, h) {
          return Ny(a, r, n(h), {});
        };
      }
      function Io(r, n) {
        return function(a, h) {
          var p;
          if (a === t && h === t)
            return n;
          if (a !== t && (p = a), h !== t) {
            if (p === t)
              return h;
            typeof a == "string" || typeof h == "string" ? (a = Sr(a), h = Sr(h)) : (a = qh(a), h = qh(h)), p = r(a, h);
          }
          return p;
        };
      }
      function pc(r) {
        return di(function(n) {
          return n = wt(n, Dr(we())), Ke(function(a) {
            var h = this;
            return r(n, function(p) {
              return kt(p, h, a);
            });
          });
        });
      }
      function xo(r, n) {
        n = n === t ? " " : Sr(n);
        var a = n.length;
        if (a < 2)
          return a ? ac(n, r) : n;
        var h = ac(n, lo(r / Dn(n)));
        return En(n) ? Ui(Kr(h), 0, r).join("") : h.slice(0, r);
      }
      function ov(r, n, a, h) {
        var p = n & B, w = cs(r);
        function x() {
          for (var N = -1, q = arguments.length, X = -1, Z = h.length, ne = K(Z + q), he = this && this !== Xe && this instanceof x ? w : r; ++X < Z; )
            ne[X] = h[X];
          for (; q--; )
            ne[X++] = arguments[++N];
          return kt(he, p ? a : this, ne);
        }
        return x;
      }
      function tl(r) {
        return function(n, a, h) {
          return h && typeof h != "number" && or(n, a, h) && (a = h = t), n = yi(n), a === t ? (a = n, n = 0) : a = yi(a), h = h === t ? n < a ? 1 : -1 : yi(h), ky(n, a, h, r);
        };
      }
      function Oo(r) {
        return function(n, a) {
          return typeof n == "string" && typeof a == "string" || (n = zr(n), a = zr(a)), r(n, a);
        };
      }
      function rl(r, n, a, h, p, w, x, N, q, X) {
        var Z = n & j, ne = Z ? x : t, he = Z ? t : x, ye = Z ? w : t, Ee = Z ? t : w;
        n |= Z ? A : E, n &= ~(Z ? E : A), n & L || (n &= ~(B | ie));
        var Fe = [r, n, p, ye, ne, Ee, he, N, q, X], De = a.apply(t, Fe);
        return Ec(r) && pl(De, Fe), De.placeholder = h, gl(De, r, n);
      }
      function gc(r) {
        var n = Bt[r];
        return function(a, h) {
          if (a = zr(a), h = h == null ? 0 : Xt(je(h), 292), h && gh(a)) {
            var p = (it(a) + "e").split("e"), w = n(p[0] + "e" + (+p[1] + h));
            return p = (it(w) + "e").split("e"), +(p[0] + "e" + (+p[1] - h));
          }
          return n(a);
        };
      }
      var av = xn && 1 / to(new xn([, -0]))[1] == Q ? function(r) {
        return new xn(r);
      } : Mc;
      function il(r) {
        return function(n) {
          var a = Zt(n);
          return a == Ie ? ka(n) : a == xe ? Sg(n) : yg(n, r(n));
        };
      }
      function fi(r, n, a, h, p, w, x, N) {
        var q = n & ie;
        if (!q && typeof r != "function")
          throw new Ur(d);
        var X = h ? h.length : 0;
        if (X || (n &= ~(A | E), h = p = t), x = x === t ? x : Kt(je(x), 0), N = N === t ? N : je(N), X -= p ? p.length : 0, n & E) {
          var Z = h, ne = p;
          h = p = t;
        }
        var he = q ? t : mc(r), ye = [r, n, a, h, p, Z, ne, w, x, N];
        if (he && Ev(ye, he), r = ye[0], n = ye[1], a = ye[2], h = ye[3], p = ye[4], N = ye[9] = ye[9] === t ? q ? 0 : r.length : Kt(ye[9] - X, 0), !N && n & (j | O) && (n &= ~(j | O)), !n || n == B)
          var Ee = nv(r, n, a);
        else
          n == j || n == O ? Ee = sv(r, n, N) : (n == A || n == (B | A)) && !p.length ? Ee = ov(r, n, a, h) : Ee = So.apply(t, ye);
        var Fe = he ? Mh : pl;
        return gl(Fe(Ee, ye), r, n);
      }
      function nl(r, n, a, h) {
        return r === t || Vr(r, In[a]) && !nt.call(h, a) ? n : r;
      }
      function sl(r, n, a, h, p, w) {
        return Dt(r) && Dt(n) && (w.set(n, r), _o(r, n, t, sl, w), w.delete(n)), r;
      }
      function cv(r) {
        return ls(r) ? t : r;
      }
      function ol(r, n, a, h, p, w) {
        var x = a & P, N = r.length, q = n.length;
        if (N != q && !(x && q > N))
          return !1;
        var X = w.get(r), Z = w.get(n);
        if (X && Z)
          return X == n && Z == r;
        var ne = -1, he = !0, ye = a & F ? new Ji() : t;
        for (w.set(r, n), w.set(n, r); ++ne < N; ) {
          var Ee = r[ne], Fe = n[ne];
          if (h)
            var De = x ? h(Fe, Ee, ne, n, r, w) : h(Ee, Fe, ne, r, n, w);
          if (De !== t) {
            if (De)
              continue;
            he = !1;
            break;
          }
          if (ye) {
            if (!qa(n, function(We, Ze) {
              if (!Qn(ye, Ze) && (Ee === We || p(Ee, We, a, h, w)))
                return ye.push(Ze);
            })) {
              he = !1;
              break;
            }
          } else if (!(Ee === Fe || p(Ee, Fe, a, h, w))) {
            he = !1;
            break;
          }
        }
        return w.delete(r), w.delete(n), he;
      }
      function uv(r, n, a, h, p, w, x) {
        switch (a) {
          case Ce:
            if (r.byteLength != n.byteLength || r.byteOffset != n.byteOffset)
              return !1;
            r = r.buffer, n = n.buffer;
          case Se:
            return !(r.byteLength != n.byteLength || !w(new ao(r), new ao(n)));
          case z:
          case U:
          case He:
            return Vr(+r, +n);
          case R:
            return r.name == n.name && r.message == n.message;
          case qe:
          case Ne:
            return r == n + "";
          case Ie:
            var N = ka;
          case xe:
            var q = h & P;
            if (N || (N = to), r.size != n.size && !q)
              return !1;
            var X = x.get(r);
            if (X)
              return X == n;
            h |= F, x.set(r, n);
            var Z = ol(N(r), N(n), h, p, w, x);
            return x.delete(r), Z;
          case Le:
            if (rs)
              return rs.call(r) == rs.call(n);
        }
        return !1;
      }
      function hv(r, n, a, h, p, w) {
        var x = a & P, N = yc(r), q = N.length, X = yc(n), Z = X.length;
        if (q != Z && !x)
          return !1;
        for (var ne = q; ne--; ) {
          var he = N[ne];
          if (!(x ? he in n : nt.call(n, he)))
            return !1;
        }
        var ye = w.get(r), Ee = w.get(n);
        if (ye && Ee)
          return ye == n && Ee == r;
        var Fe = !0;
        w.set(r, n), w.set(n, r);
        for (var De = x; ++ne < q; ) {
          he = N[ne];
          var We = r[he], Ze = n[he];
          if (h)
            var xr = x ? h(Ze, We, he, n, r, w) : h(We, Ze, he, r, n, w);
          if (!(xr === t ? We === Ze || p(We, Ze, a, h, w) : xr)) {
            Fe = !1;
            break;
          }
          De || (De = he == "constructor");
        }
        if (Fe && !De) {
          var ar = r.constructor, Or = n.constructor;
          ar != Or && "constructor" in r && "constructor" in n && !(typeof ar == "function" && ar instanceof ar && typeof Or == "function" && Or instanceof Or) && (Fe = !1);
        }
        return w.delete(r), w.delete(n), Fe;
      }
      function di(r) {
        return Sc(fl(r, t, bl), r + "");
      }
      function yc(r) {
        return xh(r, Vt, _c);
      }
      function vc(r) {
        return xh(r, vr, al);
      }
      var mc = po ? function(r) {
        return po.get(r);
      } : Mc;
      function Po(r) {
        for (var n = r.name + "", a = On[n], h = nt.call(On, n) ? a.length : 0; h--; ) {
          var p = a[h], w = p.func;
          if (w == null || w == r)
            return p.name;
        }
        return n;
      }
      function Tn(r) {
        var n = nt.call(v, "placeholder") ? v : r;
        return n.placeholder;
      }
      function we() {
        var r = v.iteratee || Uc;
        return r = r === Uc ? Ch : r, arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function Co(r, n) {
        var a = r.__data__;
        return mv(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
      }
      function wc(r) {
        for (var n = Vt(r), a = n.length; a--; ) {
          var h = n[a], p = r[h];
          n[a] = [h, p, hl(p)];
        }
        return n;
      }
      function Zi(r, n) {
        var a = bg(r, n);
        return Ph(a) ? a : t;
      }
      function lv(r) {
        var n = nt.call(r, Gi), a = r[Gi];
        try {
          r[Gi] = t;
          var h = !0;
        } catch {
        }
        var p = so.call(r);
        return h && (n ? r[Gi] = a : delete r[Gi]), p;
      }
      var _c = Wa ? function(r) {
        return r == null ? [] : (r = ht(r), Pi(Wa(r), function(n) {
          return dh.call(r, n);
        }));
      } : jc, al = Wa ? function(r) {
        for (var n = []; r; )
          Ci(n, _c(r)), r = co(r);
        return n;
      } : jc, Zt = sr;
      (Ga && Zt(new Ga(new ArrayBuffer(1))) != Ce || Zn && Zt(new Zn()) != Ie || Ya && Zt(Ya.resolve()) != gt || xn && Zt(new xn()) != xe || es && Zt(new es()) != Pe) && (Zt = function(r) {
        var n = sr(r), a = n == Me ? r.constructor : t, h = a ? en(a) : "";
        if (h)
          switch (h) {
            case Wg:
              return Ce;
            case Gg:
              return Ie;
            case Yg:
              return gt;
            case Jg:
              return xe;
            case Qg:
              return Pe;
          }
        return n;
      });
      function fv(r, n, a) {
        for (var h = -1, p = a.length; ++h < p; ) {
          var w = a[h], x = w.size;
          switch (w.type) {
            case "drop":
              r += x;
              break;
            case "dropRight":
              n -= x;
              break;
            case "take":
              n = Xt(n, r + x);
              break;
            case "takeRight":
              r = Kt(r, n - x);
              break;
          }
        }
        return { start: r, end: n };
      }
      function dv(r) {
        var n = r.match(lt);
        return n ? n[1].split(qt) : [];
      }
      function cl(r, n, a) {
        n = Li(n, r);
        for (var h = -1, p = n.length, w = !1; ++h < p; ) {
          var x = ti(n[h]);
          if (!(w = r != null && a(r, x)))
            break;
          r = r[x];
        }
        return w || ++h != p ? w : (p = r == null ? 0 : r.length, !!p && $o(p) && pi(x, p) && (Re(r) || tn(r)));
      }
      function pv(r) {
        var n = r.length, a = new r.constructor(n);
        return n && typeof r[0] == "string" && nt.call(r, "index") && (a.index = r.index, a.input = r.input), a;
      }
      function ul(r) {
        return typeof r.constructor == "function" && !us(r) ? Pn(co(r)) : {};
      }
      function gv(r, n, a) {
        var h = r.constructor;
        switch (n) {
          case Se:
            return dc(r);
          case z:
          case U:
            return new h(+r);
          case Ce:
            return Xy(r, a);
          case Be:
          case Oe:
          case Ve:
          case Ge:
          case et:
          case tt:
          case Qe:
          case rr:
          case dr:
            return kh(r, a);
          case Ie:
            return new h();
          case He:
          case Ne:
            return new h(r);
          case qe:
            return Zy(r);
          case xe:
            return new h();
          case Le:
            return ev(r);
        }
      }
      function yv(r, n) {
        var a = n.length;
        if (!a)
          return r;
        var h = a - 1;
        return n[h] = (a > 1 ? "& " : "") + n[h], n = n.join(a > 2 ? ", " : " "), r.replace(Ct, `{
/* [wrapped with ` + n + `] */
`);
      }
      function vv(r) {
        return Re(r) || tn(r) || !!(ph && r && r[ph]);
      }
      function pi(r, n) {
        var a = typeof r;
        return n = n ?? k, !!n && (a == "number" || a != "symbol" && Da.test(r)) && r > -1 && r % 1 == 0 && r < n;
      }
      function or(r, n, a) {
        if (!Dt(a))
          return !1;
        var h = typeof n;
        return (h == "number" ? yr(a) && pi(n, a.length) : h == "string" && n in a) ? Vr(a[n], r) : !1;
      }
      function bc(r, n) {
        if (Re(r))
          return !1;
        var a = typeof r;
        return a == "number" || a == "symbol" || a == "boolean" || r == null || Ir(r) ? !0 : $t.test(r) || !mt.test(r) || n != null && r in ht(n);
      }
      function mv(r) {
        var n = typeof r;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? r !== "__proto__" : r === null;
      }
      function Ec(r) {
        var n = Po(r), a = v[n];
        if (typeof a != "function" || !(n in Ye.prototype))
          return !1;
        if (r === a)
          return !0;
        var h = mc(a);
        return !!h && r === h[0];
      }
      function wv(r) {
        return !!hh && hh in r;
      }
      var _v = io ? gi : qc;
      function us(r) {
        var n = r && r.constructor, a = typeof n == "function" && n.prototype || In;
        return r === a;
      }
      function hl(r) {
        return r === r && !Dt(r);
      }
      function ll(r, n) {
        return function(a) {
          return a == null ? !1 : a[r] === n && (n !== t || r in ht(a));
        };
      }
      function bv(r) {
        var n = Lo(r, function(h) {
          return a.size === g && a.clear(), h;
        }), a = n.cache;
        return n;
      }
      function Ev(r, n) {
        var a = r[1], h = n[1], p = a | h, w = p < (B | ie | u), x = h == u && a == j || h == u && a == _ && r[7].length <= n[8] || h == (u | _) && n[7].length <= n[8] && a == j;
        if (!(w || x))
          return r;
        h & B && (r[2] = n[2], p |= a & B ? 0 : L);
        var N = n[3];
        if (N) {
          var q = r[3];
          r[3] = q ? Wh(q, N, n[4]) : N, r[4] = q ? Ai(r[3], m) : n[4];
        }
        return N = n[5], N && (q = r[5], r[5] = q ? Gh(q, N, n[6]) : N, r[6] = q ? Ai(r[5], m) : n[6]), N = n[7], N && (r[7] = N), h & u && (r[8] = r[8] == null ? n[8] : Xt(r[8], n[8])), r[9] == null && (r[9] = n[9]), r[0] = n[0], r[1] = p, r;
      }
      function Dv(r) {
        var n = [];
        if (r != null)
          for (var a in ht(r))
            n.push(a);
        return n;
      }
      function Sv(r) {
        return so.call(r);
      }
      function fl(r, n, a) {
        return n = Kt(n === t ? r.length - 1 : n, 0), function() {
          for (var h = arguments, p = -1, w = Kt(h.length - n, 0), x = K(w); ++p < w; )
            x[p] = h[n + p];
          p = -1;
          for (var N = K(n + 1); ++p < n; )
            N[p] = h[p];
          return N[n] = a(x), kt(r, this, N);
        };
      }
      function dl(r, n) {
        return n.length < 2 ? r : Xi(r, jr(n, 0, -1));
      }
      function Iv(r, n) {
        for (var a = r.length, h = Xt(n.length, a), p = gr(r); h--; ) {
          var w = n[h];
          r[h] = pi(w, a) ? p[w] : t;
        }
        return r;
      }
      function Dc(r, n) {
        if (!(n === "constructor" && typeof r[n] == "function") && n != "__proto__")
          return r[n];
      }
      var pl = yl(Mh), hs = zg || function(r, n) {
        return Xe.setTimeout(r, n);
      }, Sc = yl(Gy);
      function gl(r, n, a) {
        var h = n + "";
        return Sc(r, yv(h, xv(dv(h), a)));
      }
      function yl(r) {
        var n = 0, a = 0;
        return function() {
          var h = Kg(), p = de - (h - a);
          if (a = h, p > 0) {
            if (++n >= ue)
              return arguments[0];
          } else
            n = 0;
          return r.apply(t, arguments);
        };
      }
      function Ao(r, n) {
        var a = -1, h = r.length, p = h - 1;
        for (n = n === t ? h : n; ++a < n; ) {
          var w = oc(a, p), x = r[w];
          r[w] = r[a], r[a] = x;
        }
        return r.length = n, r;
      }
      var vl = bv(function(r) {
        var n = [];
        return r.charCodeAt(0) === 46 && n.push(""), r.replace(Mt, function(a, h, p, w) {
          n.push(p ? w.replace(va, "$1") : h || a);
        }), n;
      });
      function ti(r) {
        if (typeof r == "string" || Ir(r))
          return r;
        var n = r + "";
        return n == "0" && 1 / r == -Q ? "-0" : n;
      }
      function en(r) {
        if (r != null) {
          try {
            return no.call(r);
          } catch {
          }
          try {
            return r + "";
          } catch {
          }
        }
        return "";
      }
      function xv(r, n) {
        return Lr(be, function(a) {
          var h = "_." + a[0];
          n & a[1] && !Zs(r, h) && r.push(h);
        }), r.sort();
      }
      function ml(r) {
        if (r instanceof Ye)
          return r.clone();
        var n = new $r(r.__wrapped__, r.__chain__);
        return n.__actions__ = gr(r.__actions__), n.__index__ = r.__index__, n.__values__ = r.__values__, n;
      }
      function Ov(r, n, a) {
        (a ? or(r, n, a) : n === t) ? n = 1 : n = Kt(je(n), 0);
        var h = r == null ? 0 : r.length;
        if (!h || n < 1)
          return [];
        for (var p = 0, w = 0, x = K(lo(h / n)); p < h; )
          x[w++] = jr(r, p, p += n);
        return x;
      }
      function Pv(r) {
        for (var n = -1, a = r == null ? 0 : r.length, h = 0, p = []; ++n < a; ) {
          var w = r[n];
          w && (p[h++] = w);
        }
        return p;
      }
      function Cv() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var n = K(r - 1), a = arguments[0], h = r; h--; )
          n[h - 1] = arguments[h];
        return Ci(Re(a) ? gr(a) : [a], Yt(n, 1));
      }
      var Av = Ke(function(r, n) {
        return Nt(r) ? ns(r, Yt(n, 1, Nt, !0)) : [];
      }), Tv = Ke(function(r, n) {
        var a = qr(n);
        return Nt(a) && (a = t), Nt(r) ? ns(r, Yt(n, 1, Nt, !0), we(a, 2)) : [];
      }), Rv = Ke(function(r, n) {
        var a = qr(n);
        return Nt(a) && (a = t), Nt(r) ? ns(r, Yt(n, 1, Nt, !0), t, a) : [];
      });
      function Nv(r, n, a) {
        var h = r == null ? 0 : r.length;
        return h ? (n = a || n === t ? 1 : je(n), jr(r, n < 0 ? 0 : n, h)) : [];
      }
      function Lv(r, n, a) {
        var h = r == null ? 0 : r.length;
        return h ? (n = a || n === t ? 1 : je(n), n = h - n, jr(r, 0, n < 0 ? 0 : n)) : [];
      }
      function Uv(r, n) {
        return r && r.length ? Eo(r, we(n, 3), !0, !0) : [];
      }
      function $v(r, n) {
        return r && r.length ? Eo(r, we(n, 3), !0) : [];
      }
      function Mv(r, n, a, h) {
        var p = r == null ? 0 : r.length;
        return p ? (a && typeof a != "number" && or(r, n, a) && (a = 0, h = p), Cy(r, n, a, h)) : [];
      }
      function wl(r, n, a) {
        var h = r == null ? 0 : r.length;
        if (!h)
          return -1;
        var p = a == null ? 0 : je(a);
        return p < 0 && (p = Kt(h + p, 0)), eo(r, we(n, 3), p);
      }
      function _l(r, n, a) {
        var h = r == null ? 0 : r.length;
        if (!h)
          return -1;
        var p = h - 1;
        return a !== t && (p = je(a), p = a < 0 ? Kt(h + p, 0) : Xt(p, h - 1)), eo(r, we(n, 3), p, !0);
      }
      function bl(r) {
        var n = r == null ? 0 : r.length;
        return n ? Yt(r, 1) : [];
      }
      function jv(r) {
        var n = r == null ? 0 : r.length;
        return n ? Yt(r, Q) : [];
      }
      function qv(r, n) {
        var a = r == null ? 0 : r.length;
        return a ? (n = n === t ? 1 : je(n), Yt(r, n)) : [];
      }
      function zv(r) {
        for (var n = -1, a = r == null ? 0 : r.length, h = {}; ++n < a; ) {
          var p = r[n];
          h[p[0]] = p[1];
        }
        return h;
      }
      function El(r) {
        return r && r.length ? r[0] : t;
      }
      function Fv(r, n, a) {
        var h = r == null ? 0 : r.length;
        if (!h)
          return -1;
        var p = a == null ? 0 : je(a);
        return p < 0 && (p = Kt(h + p, 0)), bn(r, n, p);
      }
      function Hv(r) {
        var n = r == null ? 0 : r.length;
        return n ? jr(r, 0, -1) : [];
      }
      var Bv = Ke(function(r) {
        var n = wt(r, lc);
        return n.length && n[0] === r[0] ? tc(n) : [];
      }), Kv = Ke(function(r) {
        var n = qr(r), a = wt(r, lc);
        return n === qr(a) ? n = t : a.pop(), a.length && a[0] === r[0] ? tc(a, we(n, 2)) : [];
      }), kv = Ke(function(r) {
        var n = qr(r), a = wt(r, lc);
        return n = typeof n == "function" ? n : t, n && a.pop(), a.length && a[0] === r[0] ? tc(a, t, n) : [];
      });
      function Vv(r, n) {
        return r == null ? "" : Hg.call(r, n);
      }
      function qr(r) {
        var n = r == null ? 0 : r.length;
        return n ? r[n - 1] : t;
      }
      function Wv(r, n, a) {
        var h = r == null ? 0 : r.length;
        if (!h)
          return -1;
        var p = h;
        return a !== t && (p = je(a), p = p < 0 ? Kt(h + p, 0) : Xt(p, h - 1)), n === n ? xg(r, n, p) : eo(r, rh, p, !0);
      }
      function Gv(r, n) {
        return r && r.length ? Nh(r, je(n)) : t;
      }
      var Yv = Ke(Dl);
      function Dl(r, n) {
        return r && r.length && n && n.length ? sc(r, n) : r;
      }
      function Jv(r, n, a) {
        return r && r.length && n && n.length ? sc(r, n, we(a, 2)) : r;
      }
      function Qv(r, n, a) {
        return r && r.length && n && n.length ? sc(r, n, t, a) : r;
      }
      var Xv = di(function(r, n) {
        var a = r == null ? 0 : r.length, h = Qa(r, n);
        return $h(r, wt(n, function(p) {
          return pi(p, a) ? +p : p;
        }).sort(Vh)), h;
      });
      function Zv(r, n) {
        var a = [];
        if (!(r && r.length))
          return a;
        var h = -1, p = [], w = r.length;
        for (n = we(n, 3); ++h < w; ) {
          var x = r[h];
          n(x, h, r) && (a.push(x), p.push(h));
        }
        return $h(r, p), a;
      }
      function Ic(r) {
        return r == null ? r : Vg.call(r);
      }
      function e0(r, n, a) {
        var h = r == null ? 0 : r.length;
        return h ? (a && typeof a != "number" && or(r, n, a) ? (n = 0, a = h) : (n = n == null ? 0 : je(n), a = a === t ? h : je(a)), jr(r, n, a)) : [];
      }
      function t0(r, n) {
        return bo(r, n);
      }
      function r0(r, n, a) {
        return cc(r, n, we(a, 2));
      }
      function i0(r, n) {
        var a = r == null ? 0 : r.length;
        if (a) {
          var h = bo(r, n);
          if (h < a && Vr(r[h], n))
            return h;
        }
        return -1;
      }
      function n0(r, n) {
        return bo(r, n, !0);
      }
      function s0(r, n, a) {
        return cc(r, n, we(a, 2), !0);
      }
      function o0(r, n) {
        var a = r == null ? 0 : r.length;
        if (a) {
          var h = bo(r, n, !0) - 1;
          if (Vr(r[h], n))
            return h;
        }
        return -1;
      }
      function a0(r) {
        return r && r.length ? jh(r) : [];
      }
      function c0(r, n) {
        return r && r.length ? jh(r, we(n, 2)) : [];
      }
      function u0(r) {
        var n = r == null ? 0 : r.length;
        return n ? jr(r, 1, n) : [];
      }
      function h0(r, n, a) {
        return r && r.length ? (n = a || n === t ? 1 : je(n), jr(r, 0, n < 0 ? 0 : n)) : [];
      }
      function l0(r, n, a) {
        var h = r == null ? 0 : r.length;
        return h ? (n = a || n === t ? 1 : je(n), n = h - n, jr(r, n < 0 ? 0 : n, h)) : [];
      }
      function f0(r, n) {
        return r && r.length ? Eo(r, we(n, 3), !1, !0) : [];
      }
      function d0(r, n) {
        return r && r.length ? Eo(r, we(n, 3)) : [];
      }
      var p0 = Ke(function(r) {
        return Ni(Yt(r, 1, Nt, !0));
      }), g0 = Ke(function(r) {
        var n = qr(r);
        return Nt(n) && (n = t), Ni(Yt(r, 1, Nt, !0), we(n, 2));
      }), y0 = Ke(function(r) {
        var n = qr(r);
        return n = typeof n == "function" ? n : t, Ni(Yt(r, 1, Nt, !0), t, n);
      });
      function v0(r) {
        return r && r.length ? Ni(r) : [];
      }
      function m0(r, n) {
        return r && r.length ? Ni(r, we(n, 2)) : [];
      }
      function w0(r, n) {
        return n = typeof n == "function" ? n : t, r && r.length ? Ni(r, t, n) : [];
      }
      function xc(r) {
        if (!(r && r.length))
          return [];
        var n = 0;
        return r = Pi(r, function(a) {
          if (Nt(a))
            return n = Kt(a.length, n), !0;
        }), Ba(n, function(a) {
          return wt(r, za(a));
        });
      }
      function Sl(r, n) {
        if (!(r && r.length))
          return [];
        var a = xc(r);
        return n == null ? a : wt(a, function(h) {
          return kt(n, t, h);
        });
      }
      var _0 = Ke(function(r, n) {
        return Nt(r) ? ns(r, n) : [];
      }), b0 = Ke(function(r) {
        return hc(Pi(r, Nt));
      }), E0 = Ke(function(r) {
        var n = qr(r);
        return Nt(n) && (n = t), hc(Pi(r, Nt), we(n, 2));
      }), D0 = Ke(function(r) {
        var n = qr(r);
        return n = typeof n == "function" ? n : t, hc(Pi(r, Nt), t, n);
      }), S0 = Ke(xc);
      function I0(r, n) {
        return Hh(r || [], n || [], is);
      }
      function x0(r, n) {
        return Hh(r || [], n || [], as);
      }
      var O0 = Ke(function(r) {
        var n = r.length, a = n > 1 ? r[n - 1] : t;
        return a = typeof a == "function" ? (r.pop(), a) : t, Sl(r, a);
      });
      function Il(r) {
        var n = v(r);
        return n.__chain__ = !0, n;
      }
      function P0(r, n) {
        return n(r), r;
      }
      function To(r, n) {
        return n(r);
      }
      var C0 = di(function(r) {
        var n = r.length, a = n ? r[0] : 0, h = this.__wrapped__, p = function(w) {
          return Qa(w, r);
        };
        return n > 1 || this.__actions__.length || !(h instanceof Ye) || !pi(a) ? this.thru(p) : (h = h.slice(a, +a + (n ? 1 : 0)), h.__actions__.push({ func: To, args: [p], thisArg: t }), new $r(h, this.__chain__).thru(function(w) {
          return n && !w.length && w.push(t), w;
        }));
      });
      function A0() {
        return Il(this);
      }
      function T0() {
        return new $r(this.value(), this.__chain__);
      }
      function R0() {
        this.__values__ === t && (this.__values__ = ql(this.value()));
        var r = this.__index__ >= this.__values__.length, n = r ? t : this.__values__[this.__index__++];
        return { done: r, value: n };
      }
      function N0() {
        return this;
      }
      function L0(r) {
        for (var n, a = this; a instanceof yo; ) {
          var h = ml(a);
          h.__index__ = 0, h.__values__ = t, n ? p.__wrapped__ = h : n = h;
          var p = h;
          a = a.__wrapped__;
        }
        return p.__wrapped__ = r, n;
      }
      function U0() {
        var r = this.__wrapped__;
        if (r instanceof Ye) {
          var n = r;
          return this.__actions__.length && (n = new Ye(this)), n = n.reverse(), n.__actions__.push({ func: To, args: [Ic], thisArg: t }), new $r(n, this.__chain__);
        }
        return this.thru(Ic);
      }
      function $0() {
        return Fh(this.__wrapped__, this.__actions__);
      }
      var M0 = Do(function(r, n, a) {
        nt.call(r, a) ? ++r[a] : li(r, a, 1);
      });
      function j0(r, n, a) {
        var h = Re(r) ? eh : Py;
        return a && or(r, n, a) && (n = t), h(r, we(n, 3));
      }
      function q0(r, n) {
        var a = Re(r) ? Pi : Sh;
        return a(r, we(n, 3));
      }
      var z0 = Xh(wl), F0 = Xh(_l);
      function H0(r, n) {
        return Yt(Ro(r, n), 1);
      }
      function B0(r, n) {
        return Yt(Ro(r, n), Q);
      }
      function K0(r, n, a) {
        return a = a === t ? 1 : je(a), Yt(Ro(r, n), a);
      }
      function xl(r, n) {
        var a = Re(r) ? Lr : Ri;
        return a(r, we(n, 3));
      }
      function Ol(r, n) {
        var a = Re(r) ? ug : Dh;
        return a(r, we(n, 3));
      }
      var k0 = Do(function(r, n, a) {
        nt.call(r, a) ? r[a].push(n) : li(r, a, [n]);
      });
      function V0(r, n, a, h) {
        r = yr(r) ? r : Nn(r), a = a && !h ? je(a) : 0;
        var p = r.length;
        return a < 0 && (a = Kt(p + a, 0)), Mo(r) ? a <= p && r.indexOf(n, a) > -1 : !!p && bn(r, n, a) > -1;
      }
      var W0 = Ke(function(r, n, a) {
        var h = -1, p = typeof n == "function", w = yr(r) ? K(r.length) : [];
        return Ri(r, function(x) {
          w[++h] = p ? kt(n, x, a) : ss(x, n, a);
        }), w;
      }), G0 = Do(function(r, n, a) {
        li(r, a, n);
      });
      function Ro(r, n) {
        var a = Re(r) ? wt : Ah;
        return a(r, we(n, 3));
      }
      function Y0(r, n, a, h) {
        return r == null ? [] : (Re(n) || (n = n == null ? [] : [n]), a = h ? t : a, Re(a) || (a = a == null ? [] : [a]), Lh(r, n, a));
      }
      var J0 = Do(function(r, n, a) {
        r[a ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Q0(r, n, a) {
        var h = Re(r) ? ja : nh, p = arguments.length < 3;
        return h(r, we(n, 4), a, p, Ri);
      }
      function X0(r, n, a) {
        var h = Re(r) ? hg : nh, p = arguments.length < 3;
        return h(r, we(n, 4), a, p, Dh);
      }
      function Z0(r, n) {
        var a = Re(r) ? Pi : Sh;
        return a(r, Uo(we(n, 3)));
      }
      function em(r) {
        var n = Re(r) ? wh : Vy;
        return n(r);
      }
      function tm(r, n, a) {
        (a ? or(r, n, a) : n === t) ? n = 1 : n = je(n);
        var h = Re(r) ? Dy : Wy;
        return h(r, n);
      }
      function rm(r) {
        var n = Re(r) ? Sy : Yy;
        return n(r);
      }
      function im(r) {
        if (r == null)
          return 0;
        if (yr(r))
          return Mo(r) ? Dn(r) : r.length;
        var n = Zt(r);
        return n == Ie || n == xe ? r.size : ic(r).length;
      }
      function nm(r, n, a) {
        var h = Re(r) ? qa : Jy;
        return a && or(r, n, a) && (n = t), h(r, we(n, 3));
      }
      var sm = Ke(function(r, n) {
        if (r == null)
          return [];
        var a = n.length;
        return a > 1 && or(r, n[0], n[1]) ? n = [] : a > 2 && or(n[0], n[1], n[2]) && (n = [n[0]]), Lh(r, Yt(n, 1), []);
      }), No = qg || function() {
        return Xe.Date.now();
      };
      function om(r, n) {
        if (typeof n != "function")
          throw new Ur(d);
        return r = je(r), function() {
          if (--r < 1)
            return n.apply(this, arguments);
        };
      }
      function Pl(r, n, a) {
        return n = a ? t : n, n = r && n == null ? r.length : n, fi(r, u, t, t, t, t, n);
      }
      function Cl(r, n) {
        var a;
        if (typeof n != "function")
          throw new Ur(d);
        return r = je(r), function() {
          return --r > 0 && (a = n.apply(this, arguments)), r <= 1 && (n = t), a;
        };
      }
      var Oc = Ke(function(r, n, a) {
        var h = B;
        if (a.length) {
          var p = Ai(a, Tn(Oc));
          h |= A;
        }
        return fi(r, h, n, a, p);
      }), Al = Ke(function(r, n, a) {
        var h = B | ie;
        if (a.length) {
          var p = Ai(a, Tn(Al));
          h |= A;
        }
        return fi(n, h, r, a, p);
      });
      function Tl(r, n, a) {
        n = a ? t : n;
        var h = fi(r, j, t, t, t, t, t, n);
        return h.placeholder = Tl.placeholder, h;
      }
      function Rl(r, n, a) {
        n = a ? t : n;
        var h = fi(r, O, t, t, t, t, t, n);
        return h.placeholder = Rl.placeholder, h;
      }
      function Nl(r, n, a) {
        var h, p, w, x, N, q, X = 0, Z = !1, ne = !1, he = !0;
        if (typeof r != "function")
          throw new Ur(d);
        n = zr(n) || 0, Dt(a) && (Z = !!a.leading, ne = "maxWait" in a, w = ne ? Kt(zr(a.maxWait) || 0, n) : w, he = "trailing" in a ? !!a.trailing : he);
        function ye(Lt) {
          var Wr = h, vi = p;
          return h = p = t, X = Lt, x = r.apply(vi, Wr), x;
        }
        function Ee(Lt) {
          return X = Lt, N = hs(We, n), Z ? ye(Lt) : x;
        }
        function Fe(Lt) {
          var Wr = Lt - q, vi = Lt - X, Xl = n - Wr;
          return ne ? Xt(Xl, w - vi) : Xl;
        }
        function De(Lt) {
          var Wr = Lt - q, vi = Lt - X;
          return q === t || Wr >= n || Wr < 0 || ne && vi >= w;
        }
        function We() {
          var Lt = No();
          if (De(Lt))
            return Ze(Lt);
          N = hs(We, Fe(Lt));
        }
        function Ze(Lt) {
          return N = t, he && h ? ye(Lt) : (h = p = t, x);
        }
        function xr() {
          N !== t && Bh(N), X = 0, h = q = p = N = t;
        }
        function ar() {
          return N === t ? x : Ze(No());
        }
        function Or() {
          var Lt = No(), Wr = De(Lt);
          if (h = arguments, p = this, q = Lt, Wr) {
            if (N === t)
              return Ee(q);
            if (ne)
              return Bh(N), N = hs(We, n), ye(q);
          }
          return N === t && (N = hs(We, n)), x;
        }
        return Or.cancel = xr, Or.flush = ar, Or;
      }
      var am = Ke(function(r, n) {
        return Eh(r, 1, n);
      }), cm = Ke(function(r, n, a) {
        return Eh(r, zr(n) || 0, a);
      });
      function um(r) {
        return fi(r, W);
      }
      function Lo(r, n) {
        if (typeof r != "function" || n != null && typeof n != "function")
          throw new Ur(d);
        var a = function() {
          var h = arguments, p = n ? n.apply(this, h) : h[0], w = a.cache;
          if (w.has(p))
            return w.get(p);
          var x = r.apply(this, h);
          return a.cache = w.set(p, x) || w, x;
        };
        return a.cache = new (Lo.Cache || hi)(), a;
      }
      Lo.Cache = hi;
      function Uo(r) {
        if (typeof r != "function")
          throw new Ur(d);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !r.call(this);
            case 1:
              return !r.call(this, n[0]);
            case 2:
              return !r.call(this, n[0], n[1]);
            case 3:
              return !r.call(this, n[0], n[1], n[2]);
          }
          return !r.apply(this, n);
        };
      }
      function hm(r) {
        return Cl(2, r);
      }
      var lm = Qy(function(r, n) {
        n = n.length == 1 && Re(n[0]) ? wt(n[0], Dr(we())) : wt(Yt(n, 1), Dr(we()));
        var a = n.length;
        return Ke(function(h) {
          for (var p = -1, w = Xt(h.length, a); ++p < w; )
            h[p] = n[p].call(this, h[p]);
          return kt(r, this, h);
        });
      }), Pc = Ke(function(r, n) {
        var a = Ai(n, Tn(Pc));
        return fi(r, A, t, n, a);
      }), Ll = Ke(function(r, n) {
        var a = Ai(n, Tn(Ll));
        return fi(r, E, t, n, a);
      }), fm = di(function(r, n) {
        return fi(r, _, t, t, t, n);
      });
      function dm(r, n) {
        if (typeof r != "function")
          throw new Ur(d);
        return n = n === t ? n : je(n), Ke(r, n);
      }
      function pm(r, n) {
        if (typeof r != "function")
          throw new Ur(d);
        return n = n == null ? 0 : Kt(je(n), 0), Ke(function(a) {
          var h = a[n], p = Ui(a, 0, n);
          return h && Ci(p, h), kt(r, this, p);
        });
      }
      function gm(r, n, a) {
        var h = !0, p = !0;
        if (typeof r != "function")
          throw new Ur(d);
        return Dt(a) && (h = "leading" in a ? !!a.leading : h, p = "trailing" in a ? !!a.trailing : p), Nl(r, n, { leading: h, maxWait: n, trailing: p });
      }
      function ym(r) {
        return Pl(r, 1);
      }
      function vm(r, n) {
        return Pc(fc(n), r);
      }
      function mm() {
        if (!arguments.length)
          return [];
        var r = arguments[0];
        return Re(r) ? r : [r];
      }
      function wm(r) {
        return Mr(r, T);
      }
      function _m(r, n) {
        return n = typeof n == "function" ? n : t, Mr(r, T, n);
      }
      function bm(r) {
        return Mr(r, D | T);
      }
      function Em(r, n) {
        return n = typeof n == "function" ? n : t, Mr(r, D | T, n);
      }
      function Dm(r, n) {
        return n == null || bh(r, n, Vt(n));
      }
      function Vr(r, n) {
        return r === n || r !== r && n !== n;
      }
      var Sm = Oo(ec), Im = Oo(function(r, n) {
        return r >= n;
      }), tn = Oh(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Oh : function(r) {
        return At(r) && nt.call(r, "callee") && !dh.call(r, "callee");
      }, Re = K.isArray, xm = nr ? Dr(nr) : Ly;
      function yr(r) {
        return r != null && $o(r.length) && !gi(r);
      }
      function Nt(r) {
        return At(r) && yr(r);
      }
      function Om(r) {
        return r === !0 || r === !1 || At(r) && sr(r) == z;
      }
      var $i = Fg || qc, Pm = Br ? Dr(Br) : Uy;
      function Cm(r) {
        return At(r) && r.nodeType === 1 && !ls(r);
      }
      function Am(r) {
        if (r == null)
          return !0;
        if (yr(r) && (Re(r) || typeof r == "string" || typeof r.splice == "function" || $i(r) || Rn(r) || tn(r)))
          return !r.length;
        var n = Zt(r);
        if (n == Ie || n == xe)
          return !r.size;
        if (us(r))
          return !ic(r).length;
        for (var a in r)
          if (nt.call(r, a))
            return !1;
        return !0;
      }
      function Tm(r, n) {
        return os(r, n);
      }
      function Rm(r, n, a) {
        a = typeof a == "function" ? a : t;
        var h = a ? a(r, n) : t;
        return h === t ? os(r, n, t, a) : !!h;
      }
      function Cc(r) {
        if (!At(r))
          return !1;
        var n = sr(r);
        return n == R || n == l || typeof r.message == "string" && typeof r.name == "string" && !ls(r);
      }
      function Nm(r) {
        return typeof r == "number" && gh(r);
      }
      function gi(r) {
        if (!Dt(r))
          return !1;
        var n = sr(r);
        return n == ae || n == fe || n == H || n == yt;
      }
      function Ul(r) {
        return typeof r == "number" && r == je(r);
      }
      function $o(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= k;
      }
      function Dt(r) {
        var n = typeof r;
        return r != null && (n == "object" || n == "function");
      }
      function At(r) {
        return r != null && typeof r == "object";
      }
      var $l = Nr ? Dr(Nr) : My;
      function Lm(r, n) {
        return r === n || rc(r, n, wc(n));
      }
      function Um(r, n, a) {
        return a = typeof a == "function" ? a : t, rc(r, n, wc(n), a);
      }
      function $m(r) {
        return Ml(r) && r != +r;
      }
      function Mm(r) {
        if (_v(r))
          throw new Ae(c);
        return Ph(r);
      }
      function jm(r) {
        return r === null;
      }
      function qm(r) {
        return r == null;
      }
      function Ml(r) {
        return typeof r == "number" || At(r) && sr(r) == He;
      }
      function ls(r) {
        if (!At(r) || sr(r) != Me)
          return !1;
        var n = co(r);
        if (n === null)
          return !0;
        var a = nt.call(n, "constructor") && n.constructor;
        return typeof a == "function" && a instanceof a && no.call(a) == Ug;
      }
      var Ac = Xr ? Dr(Xr) : jy;
      function zm(r) {
        return Ul(r) && r >= -k && r <= k;
      }
      var jl = Jn ? Dr(Jn) : qy;
      function Mo(r) {
        return typeof r == "string" || !Re(r) && At(r) && sr(r) == Ne;
      }
      function Ir(r) {
        return typeof r == "symbol" || At(r) && sr(r) == Le;
      }
      var Rn = Wi ? Dr(Wi) : zy;
      function Fm(r) {
        return r === t;
      }
      function Hm(r) {
        return At(r) && Zt(r) == Pe;
      }
      function Bm(r) {
        return At(r) && sr(r) == Ue;
      }
      var Km = Oo(nc), km = Oo(function(r, n) {
        return r <= n;
      });
      function ql(r) {
        if (!r)
          return [];
        if (yr(r))
          return Mo(r) ? Kr(r) : gr(r);
        if (Xn && r[Xn])
          return Dg(r[Xn]());
        var n = Zt(r), a = n == Ie ? ka : n == xe ? to : Nn;
        return a(r);
      }
      function yi(r) {
        if (!r)
          return r === 0 ? r : 0;
        if (r = zr(r), r === Q || r === -Q) {
          var n = r < 0 ? -1 : 1;
          return n * V;
        }
        return r === r ? r : 0;
      }
      function je(r) {
        var n = yi(r), a = n % 1;
        return n === n ? a ? n - a : n : 0;
      }
      function zl(r) {
        return r ? Qi(je(r), 0, re) : 0;
      }
      function zr(r) {
        if (typeof r == "number")
          return r;
        if (Ir(r))
          return J;
        if (Dt(r)) {
          var n = typeof r.valueOf == "function" ? r.valueOf() : r;
          r = Dt(n) ? n + "" : n;
        }
        if (typeof r != "string")
          return r === 0 ? r : +r;
        r = sh(r);
        var a = _a.test(r);
        return a || Ea.test(r) ? Te(r.slice(2), a ? 2 : 8) : wa.test(r) ? J : +r;
      }
      function Fl(r) {
        return ei(r, vr(r));
      }
      function Vm(r) {
        return r ? Qi(je(r), -k, k) : r === 0 ? r : 0;
      }
      function it(r) {
        return r == null ? "" : Sr(r);
      }
      var Wm = Cn(function(r, n) {
        if (us(n) || yr(n)) {
          ei(n, Vt(n), r);
          return;
        }
        for (var a in n)
          nt.call(n, a) && is(r, a, n[a]);
      }), Hl = Cn(function(r, n) {
        ei(n, vr(n), r);
      }), jo = Cn(function(r, n, a, h) {
        ei(n, vr(n), r, h);
      }), Gm = Cn(function(r, n, a, h) {
        ei(n, Vt(n), r, h);
      }), Ym = di(Qa);
      function Jm(r, n) {
        var a = Pn(r);
        return n == null ? a : _h(a, n);
      }
      var Qm = Ke(function(r, n) {
        r = ht(r);
        var a = -1, h = n.length, p = h > 2 ? n[2] : t;
        for (p && or(n[0], n[1], p) && (h = 1); ++a < h; )
          for (var w = n[a], x = vr(w), N = -1, q = x.length; ++N < q; ) {
            var X = x[N], Z = r[X];
            (Z === t || Vr(Z, In[X]) && !nt.call(r, X)) && (r[X] = w[X]);
          }
        return r;
      }), Xm = Ke(function(r) {
        return r.push(t, sl), kt(Bl, t, r);
      });
      function Zm(r, n) {
        return th(r, we(n, 3), Zr);
      }
      function ew(r, n) {
        return th(r, we(n, 3), Za);
      }
      function tw(r, n) {
        return r == null ? r : Xa(r, we(n, 3), vr);
      }
      function rw(r, n) {
        return r == null ? r : Ih(r, we(n, 3), vr);
      }
      function iw(r, n) {
        return r && Zr(r, we(n, 3));
      }
      function nw(r, n) {
        return r && Za(r, we(n, 3));
      }
      function sw(r) {
        return r == null ? [] : wo(r, Vt(r));
      }
      function ow(r) {
        return r == null ? [] : wo(r, vr(r));
      }
      function Tc(r, n, a) {
        var h = r == null ? t : Xi(r, n);
        return h === t ? a : h;
      }
      function aw(r, n) {
        return r != null && cl(r, n, Ay);
      }
      function Rc(r, n) {
        return r != null && cl(r, n, Ty);
      }
      var cw = el(function(r, n, a) {
        n != null && typeof n.toString != "function" && (n = so.call(n)), r[n] = a;
      }, Lc(mr)), uw = el(function(r, n, a) {
        n != null && typeof n.toString != "function" && (n = so.call(n)), nt.call(r, n) ? r[n].push(a) : r[n] = [a];
      }, we), hw = Ke(ss);
      function Vt(r) {
        return yr(r) ? mh(r) : ic(r);
      }
      function vr(r) {
        return yr(r) ? mh(r, !0) : Fy(r);
      }
      function lw(r, n) {
        var a = {};
        return n = we(n, 3), Zr(r, function(h, p, w) {
          li(a, n(h, p, w), h);
        }), a;
      }
      function fw(r, n) {
        var a = {};
        return n = we(n, 3), Zr(r, function(h, p, w) {
          li(a, p, n(h, p, w));
        }), a;
      }
      var dw = Cn(function(r, n, a) {
        _o(r, n, a);
      }), Bl = Cn(function(r, n, a, h) {
        _o(r, n, a, h);
      }), pw = di(function(r, n) {
        var a = {};
        if (r == null)
          return a;
        var h = !1;
        n = wt(n, function(w) {
          return w = Li(w, r), h || (h = w.length > 1), w;
        }), ei(r, vc(r), a), h && (a = Mr(a, D | I | T, cv));
        for (var p = n.length; p--; )
          uc(a, n[p]);
        return a;
      });
      function gw(r, n) {
        return Kl(r, Uo(we(n)));
      }
      var yw = di(function(r, n) {
        return r == null ? {} : By(r, n);
      });
      function Kl(r, n) {
        if (r == null)
          return {};
        var a = wt(vc(r), function(h) {
          return [h];
        });
        return n = we(n), Uh(r, a, function(h, p) {
          return n(h, p[0]);
        });
      }
      function vw(r, n, a) {
        n = Li(n, r);
        var h = -1, p = n.length;
        for (p || (p = 1, r = t); ++h < p; ) {
          var w = r == null ? t : r[ti(n[h])];
          w === t && (h = p, w = a), r = gi(w) ? w.call(r) : w;
        }
        return r;
      }
      function mw(r, n, a) {
        return r == null ? r : as(r, n, a);
      }
      function ww(r, n, a, h) {
        return h = typeof h == "function" ? h : t, r == null ? r : as(r, n, a, h);
      }
      var kl = il(Vt), Vl = il(vr);
      function _w(r, n, a) {
        var h = Re(r), p = h || $i(r) || Rn(r);
        if (n = we(n, 4), a == null) {
          var w = r && r.constructor;
          p ? a = h ? new w() : [] : Dt(r) ? a = gi(w) ? Pn(co(r)) : {} : a = {};
        }
        return (p ? Lr : Zr)(r, function(x, N, q) {
          return n(a, x, N, q);
        }), a;
      }
      function bw(r, n) {
        return r == null ? !0 : uc(r, n);
      }
      function Ew(r, n, a) {
        return r == null ? r : zh(r, n, fc(a));
      }
      function Dw(r, n, a, h) {
        return h = typeof h == "function" ? h : t, r == null ? r : zh(r, n, fc(a), h);
      }
      function Nn(r) {
        return r == null ? [] : Ka(r, Vt(r));
      }
      function Sw(r) {
        return r == null ? [] : Ka(r, vr(r));
      }
      function Iw(r, n, a) {
        return a === t && (a = n, n = t), a !== t && (a = zr(a), a = a === a ? a : 0), n !== t && (n = zr(n), n = n === n ? n : 0), Qi(zr(r), n, a);
      }
      function xw(r, n, a) {
        return n = yi(n), a === t ? (a = n, n = 0) : a = yi(a), r = zr(r), Ry(r, n, a);
      }
      function Ow(r, n, a) {
        if (a && typeof a != "boolean" && or(r, n, a) && (n = a = t), a === t && (typeof n == "boolean" ? (a = n, n = t) : typeof r == "boolean" && (a = r, r = t)), r === t && n === t ? (r = 0, n = 1) : (r = yi(r), n === t ? (n = r, r = 0) : n = yi(n)), r > n) {
          var h = r;
          r = n, n = h;
        }
        if (a || r % 1 || n % 1) {
          var p = yh();
          return Xt(r + p * (n - r + ct("1e-" + ((p + "").length - 1))), n);
        }
        return oc(r, n);
      }
      var Pw = An(function(r, n, a) {
        return n = n.toLowerCase(), r + (a ? Wl(n) : n);
      });
      function Wl(r) {
        return Nc(it(r).toLowerCase());
      }
      function Gl(r) {
        return r = it(r), r && r.replace(ai, mg).replace(Ua, "");
      }
      function Cw(r, n, a) {
        r = it(r), n = Sr(n);
        var h = r.length;
        a = a === t ? h : Qi(je(a), 0, h);
        var p = a;
        return a -= n.length, a >= 0 && r.slice(a, p) == n;
      }
      function Aw(r) {
        return r = it(r), r && vt.test(r) ? r.replace(Hi, wg) : r;
      }
      function Tw(r) {
        return r = it(r), r && jt.test(r) ? r.replace(Ot, "\\$&") : r;
      }
      var Rw = An(function(r, n, a) {
        return r + (a ? "-" : "") + n.toLowerCase();
      }), Nw = An(function(r, n, a) {
        return r + (a ? " " : "") + n.toLowerCase();
      }), Lw = Qh("toLowerCase");
      function Uw(r, n, a) {
        r = it(r), n = je(n);
        var h = n ? Dn(r) : 0;
        if (!n || h >= n)
          return r;
        var p = (n - h) / 2;
        return xo(fo(p), a) + r + xo(lo(p), a);
      }
      function $w(r, n, a) {
        r = it(r), n = je(n);
        var h = n ? Dn(r) : 0;
        return n && h < n ? r + xo(n - h, a) : r;
      }
      function Mw(r, n, a) {
        r = it(r), n = je(n);
        var h = n ? Dn(r) : 0;
        return n && h < n ? xo(n - h, a) + r : r;
      }
      function jw(r, n, a) {
        return a || n == null ? n = 0 : n && (n = +n), kg(it(r).replace(Pt, ""), n || 0);
      }
      function qw(r, n, a) {
        return (a ? or(r, n, a) : n === t) ? n = 1 : n = je(n), ac(it(r), n);
      }
      function zw() {
        var r = arguments, n = it(r[0]);
        return r.length < 3 ? n : n.replace(r[1], r[2]);
      }
      var Fw = An(function(r, n, a) {
        return r + (a ? "_" : "") + n.toLowerCase();
      });
      function Hw(r, n, a) {
        return a && typeof a != "number" && or(r, n, a) && (n = a = t), a = a === t ? re : a >>> 0, a ? (r = it(r), r && (typeof n == "string" || n != null && !Ac(n)) && (n = Sr(n), !n && En(r)) ? Ui(Kr(r), 0, a) : r.split(n, a)) : [];
      }
      var Bw = An(function(r, n, a) {
        return r + (a ? " " : "") + Nc(n);
      });
      function Kw(r, n, a) {
        return r = it(r), a = a == null ? 0 : Qi(je(a), 0, r.length), n = Sr(n), r.slice(a, a + n.length) == n;
      }
      function kw(r, n, a) {
        var h = v.templateSettings;
        a && or(r, n, a) && (n = t), r = it(r), n = jo({}, n, h, nl);
        var p = jo({}, n.imports, h.imports, nl), w = Vt(p), x = Ka(p, w), N, q, X = 0, Z = n.interpolate || pn, ne = "__p += '", he = Va((n.escape || pn).source + "|" + Z.source + "|" + (Z === Et ? ma : pn).source + "|" + (n.evaluate || pn).source + "|$", "g"), ye = "//# sourceURL=" + (nt.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++$a + "]") + `
`;
        r.replace(he, function(De, We, Ze, xr, ar, Or) {
          return Ze || (Ze = xr), ne += r.slice(X, Or).replace(Sa, _g), We && (N = !0, ne += `' +
__e(` + We + `) +
'`), ar && (q = !0, ne += `';
` + ar + `;
__p += '`), Ze && (ne += `' +
((__t = (` + Ze + `)) == null ? '' : __t) +
'`), X = Or + De.length, De;
        }), ne += `';
`;
        var Ee = nt.call(n, "variable") && n.variable;
        if (!Ee)
          ne = `with (obj) {
` + ne + `
}
`;
        else if (ya.test(Ee))
          throw new Ae(f);
        ne = (q ? ne.replace(Jr, "") : ne).replace(ir, "$1").replace(oi, "$1;"), ne = "function(" + (Ee || "obj") + `) {
` + (Ee ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (q ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ne + `return __p
}`;
        var Fe = Jl(function() {
          return rt(w, ye + "return " + ne).apply(t, x);
        });
        if (Fe.source = ne, Cc(Fe))
          throw Fe;
        return Fe;
      }
      function Vw(r) {
        return it(r).toLowerCase();
      }
      function Ww(r) {
        return it(r).toUpperCase();
      }
      function Gw(r, n, a) {
        if (r = it(r), r && (a || n === t))
          return sh(r);
        if (!r || !(n = Sr(n)))
          return r;
        var h = Kr(r), p = Kr(n), w = oh(h, p), x = ah(h, p) + 1;
        return Ui(h, w, x).join("");
      }
      function Yw(r, n, a) {
        if (r = it(r), r && (a || n === t))
          return r.slice(0, uh(r) + 1);
        if (!r || !(n = Sr(n)))
          return r;
        var h = Kr(r), p = ah(h, Kr(n)) + 1;
        return Ui(h, 0, p).join("");
      }
      function Jw(r, n, a) {
        if (r = it(r), r && (a || n === t))
          return r.replace(Pt, "");
        if (!r || !(n = Sr(n)))
          return r;
        var h = Kr(r), p = oh(h, Kr(n));
        return Ui(h, p).join("");
      }
      function Qw(r, n) {
        var a = G, h = se;
        if (Dt(n)) {
          var p = "separator" in n ? n.separator : p;
          a = "length" in n ? je(n.length) : a, h = "omission" in n ? Sr(n.omission) : h;
        }
        r = it(r);
        var w = r.length;
        if (En(r)) {
          var x = Kr(r);
          w = x.length;
        }
        if (a >= w)
          return r;
        var N = a - Dn(h);
        if (N < 1)
          return h;
        var q = x ? Ui(x, 0, N).join("") : r.slice(0, N);
        if (p === t)
          return q + h;
        if (x && (N += q.length - N), Ac(p)) {
          if (r.slice(N).search(p)) {
            var X, Z = q;
            for (p.global || (p = Va(p.source, it(Rr.exec(p)) + "g")), p.lastIndex = 0; X = p.exec(Z); )
              var ne = X.index;
            q = q.slice(0, ne === t ? N : ne);
          }
        } else if (r.indexOf(Sr(p), N) != N) {
          var he = q.lastIndexOf(p);
          he > -1 && (q = q.slice(0, he));
        }
        return q + h;
      }
      function Xw(r) {
        return r = it(r), r && St.test(r) ? r.replace(xi, Og) : r;
      }
      var Zw = An(function(r, n, a) {
        return r + (a ? " " : "") + n.toUpperCase();
      }), Nc = Qh("toUpperCase");
      function Yl(r, n, a) {
        return r = it(r), n = a ? t : n, n === t ? Eg(r) ? Ag(r) : dg(r) : r.match(n) || [];
      }
      var Jl = Ke(function(r, n) {
        try {
          return kt(r, t, n);
        } catch (a) {
          return Cc(a) ? a : new Ae(a);
        }
      }), e_ = di(function(r, n) {
        return Lr(n, function(a) {
          a = ti(a), li(r, a, Oc(r[a], r));
        }), r;
      });
      function t_(r) {
        var n = r == null ? 0 : r.length, a = we();
        return r = n ? wt(r, function(h) {
          if (typeof h[1] != "function")
            throw new Ur(d);
          return [a(h[0]), h[1]];
        }) : [], Ke(function(h) {
          for (var p = -1; ++p < n; ) {
            var w = r[p];
            if (kt(w[0], this, h))
              return kt(w[1], this, h);
          }
        });
      }
      function r_(r) {
        return Oy(Mr(r, D));
      }
      function Lc(r) {
        return function() {
          return r;
        };
      }
      function i_(r, n) {
        return r == null || r !== r ? n : r;
      }
      var n_ = Zh(), s_ = Zh(!0);
      function mr(r) {
        return r;
      }
      function Uc(r) {
        return Ch(typeof r == "function" ? r : Mr(r, D));
      }
      function o_(r) {
        return Th(Mr(r, D));
      }
      function a_(r, n) {
        return Rh(r, Mr(n, D));
      }
      var c_ = Ke(function(r, n) {
        return function(a) {
          return ss(a, r, n);
        };
      }), u_ = Ke(function(r, n) {
        return function(a) {
          return ss(r, a, n);
        };
      });
      function $c(r, n, a) {
        var h = Vt(n), p = wo(n, h);
        a == null && !(Dt(n) && (p.length || !h.length)) && (a = n, n = r, r = this, p = wo(n, Vt(n)));
        var w = !(Dt(a) && "chain" in a) || !!a.chain, x = gi(r);
        return Lr(p, function(N) {
          var q = n[N];
          r[N] = q, x && (r.prototype[N] = function() {
            var X = this.__chain__;
            if (w || X) {
              var Z = r(this.__wrapped__), ne = Z.__actions__ = gr(this.__actions__);
              return ne.push({ func: q, args: arguments, thisArg: r }), Z.__chain__ = X, Z;
            }
            return q.apply(r, Ci([this.value()], arguments));
          });
        }), r;
      }
      function h_() {
        return Xe._ === this && (Xe._ = $g), this;
      }
      function Mc() {
      }
      function l_(r) {
        return r = je(r), Ke(function(n) {
          return Nh(n, r);
        });
      }
      var f_ = pc(wt), d_ = pc(eh), p_ = pc(qa);
      function Ql(r) {
        return bc(r) ? za(ti(r)) : Ky(r);
      }
      function g_(r) {
        return function(n) {
          return r == null ? t : Xi(r, n);
        };
      }
      var y_ = tl(), v_ = tl(!0);
      function jc() {
        return [];
      }
      function qc() {
        return !1;
      }
      function m_() {
        return {};
      }
      function w_() {
        return "";
      }
      function __() {
        return !0;
      }
      function b_(r, n) {
        if (r = je(r), r < 1 || r > k)
          return [];
        var a = re, h = Xt(r, re);
        n = we(n), r -= re;
        for (var p = Ba(h, n); ++a < r; )
          n(a);
        return p;
      }
      function E_(r) {
        return Re(r) ? wt(r, ti) : Ir(r) ? [r] : gr(vl(it(r)));
      }
      function D_(r) {
        var n = ++Lg;
        return it(r) + n;
      }
      var S_ = Io(function(r, n) {
        return r + n;
      }, 0), I_ = gc("ceil"), x_ = Io(function(r, n) {
        return r / n;
      }, 1), O_ = gc("floor");
      function P_(r) {
        return r && r.length ? mo(r, mr, ec) : t;
      }
      function C_(r, n) {
        return r && r.length ? mo(r, we(n, 2), ec) : t;
      }
      function A_(r) {
        return ih(r, mr);
      }
      function T_(r, n) {
        return ih(r, we(n, 2));
      }
      function R_(r) {
        return r && r.length ? mo(r, mr, nc) : t;
      }
      function N_(r, n) {
        return r && r.length ? mo(r, we(n, 2), nc) : t;
      }
      var L_ = Io(function(r, n) {
        return r * n;
      }, 1), U_ = gc("round"), $_ = Io(function(r, n) {
        return r - n;
      }, 0);
      function M_(r) {
        return r && r.length ? Ha(r, mr) : 0;
      }
      function j_(r, n) {
        return r && r.length ? Ha(r, we(n, 2)) : 0;
      }
      return v.after = om, v.ary = Pl, v.assign = Wm, v.assignIn = Hl, v.assignInWith = jo, v.assignWith = Gm, v.at = Ym, v.before = Cl, v.bind = Oc, v.bindAll = e_, v.bindKey = Al, v.castArray = mm, v.chain = Il, v.chunk = Ov, v.compact = Pv, v.concat = Cv, v.cond = t_, v.conforms = r_, v.constant = Lc, v.countBy = M0, v.create = Jm, v.curry = Tl, v.curryRight = Rl, v.debounce = Nl, v.defaults = Qm, v.defaultsDeep = Xm, v.defer = am, v.delay = cm, v.difference = Av, v.differenceBy = Tv, v.differenceWith = Rv, v.drop = Nv, v.dropRight = Lv, v.dropRightWhile = Uv, v.dropWhile = $v, v.fill = Mv, v.filter = q0, v.flatMap = H0, v.flatMapDeep = B0, v.flatMapDepth = K0, v.flatten = bl, v.flattenDeep = jv, v.flattenDepth = qv, v.flip = um, v.flow = n_, v.flowRight = s_, v.fromPairs = zv, v.functions = sw, v.functionsIn = ow, v.groupBy = k0, v.initial = Hv, v.intersection = Bv, v.intersectionBy = Kv, v.intersectionWith = kv, v.invert = cw, v.invertBy = uw, v.invokeMap = W0, v.iteratee = Uc, v.keyBy = G0, v.keys = Vt, v.keysIn = vr, v.map = Ro, v.mapKeys = lw, v.mapValues = fw, v.matches = o_, v.matchesProperty = a_, v.memoize = Lo, v.merge = dw, v.mergeWith = Bl, v.method = c_, v.methodOf = u_, v.mixin = $c, v.negate = Uo, v.nthArg = l_, v.omit = pw, v.omitBy = gw, v.once = hm, v.orderBy = Y0, v.over = f_, v.overArgs = lm, v.overEvery = d_, v.overSome = p_, v.partial = Pc, v.partialRight = Ll, v.partition = J0, v.pick = yw, v.pickBy = Kl, v.property = Ql, v.propertyOf = g_, v.pull = Yv, v.pullAll = Dl, v.pullAllBy = Jv, v.pullAllWith = Qv, v.pullAt = Xv, v.range = y_, v.rangeRight = v_, v.rearg = fm, v.reject = Z0, v.remove = Zv, v.rest = dm, v.reverse = Ic, v.sampleSize = tm, v.set = mw, v.setWith = ww, v.shuffle = rm, v.slice = e0, v.sortBy = sm, v.sortedUniq = a0, v.sortedUniqBy = c0, v.split = Hw, v.spread = pm, v.tail = u0, v.take = h0, v.takeRight = l0, v.takeRightWhile = f0, v.takeWhile = d0, v.tap = P0, v.throttle = gm, v.thru = To, v.toArray = ql, v.toPairs = kl, v.toPairsIn = Vl, v.toPath = E_, v.toPlainObject = Fl, v.transform = _w, v.unary = ym, v.union = p0, v.unionBy = g0, v.unionWith = y0, v.uniq = v0, v.uniqBy = m0, v.uniqWith = w0, v.unset = bw, v.unzip = xc, v.unzipWith = Sl, v.update = Ew, v.updateWith = Dw, v.values = Nn, v.valuesIn = Sw, v.without = _0, v.words = Yl, v.wrap = vm, v.xor = b0, v.xorBy = E0, v.xorWith = D0, v.zip = S0, v.zipObject = I0, v.zipObjectDeep = x0, v.zipWith = O0, v.entries = kl, v.entriesIn = Vl, v.extend = Hl, v.extendWith = jo, $c(v, v), v.add = S_, v.attempt = Jl, v.camelCase = Pw, v.capitalize = Wl, v.ceil = I_, v.clamp = Iw, v.clone = wm, v.cloneDeep = bm, v.cloneDeepWith = Em, v.cloneWith = _m, v.conformsTo = Dm, v.deburr = Gl, v.defaultTo = i_, v.divide = x_, v.endsWith = Cw, v.eq = Vr, v.escape = Aw, v.escapeRegExp = Tw, v.every = j0, v.find = z0, v.findIndex = wl, v.findKey = Zm, v.findLast = F0, v.findLastIndex = _l, v.findLastKey = ew, v.floor = O_, v.forEach = xl, v.forEachRight = Ol, v.forIn = tw, v.forInRight = rw, v.forOwn = iw, v.forOwnRight = nw, v.get = Tc, v.gt = Sm, v.gte = Im, v.has = aw, v.hasIn = Rc, v.head = El, v.identity = mr, v.includes = V0, v.indexOf = Fv, v.inRange = xw, v.invoke = hw, v.isArguments = tn, v.isArray = Re, v.isArrayBuffer = xm, v.isArrayLike = yr, v.isArrayLikeObject = Nt, v.isBoolean = Om, v.isBuffer = $i, v.isDate = Pm, v.isElement = Cm, v.isEmpty = Am, v.isEqual = Tm, v.isEqualWith = Rm, v.isError = Cc, v.isFinite = Nm, v.isFunction = gi, v.isInteger = Ul, v.isLength = $o, v.isMap = $l, v.isMatch = Lm, v.isMatchWith = Um, v.isNaN = $m, v.isNative = Mm, v.isNil = qm, v.isNull = jm, v.isNumber = Ml, v.isObject = Dt, v.isObjectLike = At, v.isPlainObject = ls, v.isRegExp = Ac, v.isSafeInteger = zm, v.isSet = jl, v.isString = Mo, v.isSymbol = Ir, v.isTypedArray = Rn, v.isUndefined = Fm, v.isWeakMap = Hm, v.isWeakSet = Bm, v.join = Vv, v.kebabCase = Rw, v.last = qr, v.lastIndexOf = Wv, v.lowerCase = Nw, v.lowerFirst = Lw, v.lt = Km, v.lte = km, v.max = P_, v.maxBy = C_, v.mean = A_, v.meanBy = T_, v.min = R_, v.minBy = N_, v.stubArray = jc, v.stubFalse = qc, v.stubObject = m_, v.stubString = w_, v.stubTrue = __, v.multiply = L_, v.nth = Gv, v.noConflict = h_, v.noop = Mc, v.now = No, v.pad = Uw, v.padEnd = $w, v.padStart = Mw, v.parseInt = jw, v.random = Ow, v.reduce = Q0, v.reduceRight = X0, v.repeat = qw, v.replace = zw, v.result = vw, v.round = U_, v.runInContext = M, v.sample = em, v.size = im, v.snakeCase = Fw, v.some = nm, v.sortedIndex = t0, v.sortedIndexBy = r0, v.sortedIndexOf = i0, v.sortedLastIndex = n0, v.sortedLastIndexBy = s0, v.sortedLastIndexOf = o0, v.startCase = Bw, v.startsWith = Kw, v.subtract = $_, v.sum = M_, v.sumBy = j_, v.template = kw, v.times = b_, v.toFinite = yi, v.toInteger = je, v.toLength = zl, v.toLower = Vw, v.toNumber = zr, v.toSafeInteger = Vm, v.toString = it, v.toUpper = Ww, v.trim = Gw, v.trimEnd = Yw, v.trimStart = Jw, v.truncate = Qw, v.unescape = Xw, v.uniqueId = D_, v.upperCase = Zw, v.upperFirst = Nc, v.each = xl, v.eachRight = Ol, v.first = El, $c(v, function() {
        var r = {};
        return Zr(v, function(n, a) {
          nt.call(v.prototype, a) || (r[a] = n);
        }), r;
      }(), { chain: !1 }), v.VERSION = s, Lr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        v[r].placeholder = v;
      }), Lr(["drop", "take"], function(r, n) {
        Ye.prototype[r] = function(a) {
          a = a === t ? 1 : Kt(je(a), 0);
          var h = this.__filtered__ && !n ? new Ye(this) : this.clone();
          return h.__filtered__ ? h.__takeCount__ = Xt(a, h.__takeCount__) : h.__views__.push({ size: Xt(a, re), type: r + (h.__dir__ < 0 ? "Right" : "") }), h;
        }, Ye.prototype[r + "Right"] = function(a) {
          return this.reverse()[r](a).reverse();
        };
      }), Lr(["filter", "map", "takeWhile"], function(r, n) {
        var a = n + 1, h = a == b || a == ee;
        Ye.prototype[r] = function(p) {
          var w = this.clone();
          return w.__iteratees__.push({ iteratee: we(p, 3), type: a }), w.__filtered__ = w.__filtered__ || h, w;
        };
      }), Lr(["head", "last"], function(r, n) {
        var a = "take" + (n ? "Right" : "");
        Ye.prototype[r] = function() {
          return this[a](1).value()[0];
        };
      }), Lr(["initial", "tail"], function(r, n) {
        var a = "drop" + (n ? "" : "Right");
        Ye.prototype[r] = function() {
          return this.__filtered__ ? new Ye(this) : this[a](1);
        };
      }), Ye.prototype.compact = function() {
        return this.filter(mr);
      }, Ye.prototype.find = function(r) {
        return this.filter(r).head();
      }, Ye.prototype.findLast = function(r) {
        return this.reverse().find(r);
      }, Ye.prototype.invokeMap = Ke(function(r, n) {
        return typeof r == "function" ? new Ye(this) : this.map(function(a) {
          return ss(a, r, n);
        });
      }), Ye.prototype.reject = function(r) {
        return this.filter(Uo(we(r)));
      }, Ye.prototype.slice = function(r, n) {
        r = je(r);
        var a = this;
        return a.__filtered__ && (r > 0 || n < 0) ? new Ye(a) : (r < 0 ? a = a.takeRight(-r) : r && (a = a.drop(r)), n !== t && (n = je(n), a = n < 0 ? a.dropRight(-n) : a.take(n - r)), a);
      }, Ye.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, Ye.prototype.toArray = function() {
        return this.take(re);
      }, Zr(Ye.prototype, function(r, n) {
        var a = /^(?:filter|find|map|reject)|While$/.test(n), h = /^(?:head|last)$/.test(n), p = v[h ? "take" + (n == "last" ? "Right" : "") : n], w = h || /^find/.test(n);
        p && (v.prototype[n] = function() {
          var x = this.__wrapped__, N = h ? [1] : arguments, q = x instanceof Ye, X = N[0], Z = q || Re(x), ne = function(We) {
            var Ze = p.apply(v, Ci([We], N));
            return h && he ? Ze[0] : Ze;
          };
          Z && a && typeof X == "function" && X.length != 1 && (q = Z = !1);
          var he = this.__chain__, ye = !!this.__actions__.length, Ee = w && !he, Fe = q && !ye;
          if (!w && Z) {
            x = Fe ? x : new Ye(this);
            var De = r.apply(x, N);
            return De.__actions__.push({ func: To, args: [ne], thisArg: t }), new $r(De, he);
          }
          return Ee && Fe ? r.apply(this, N) : (De = this.thru(ne), Ee ? h ? De.value()[0] : De.value() : De);
        });
      }), Lr(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var n = ro[r], a = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", h = /^(?:pop|shift)$/.test(r);
        v.prototype[r] = function() {
          var p = arguments;
          if (h && !this.__chain__) {
            var w = this.value();
            return n.apply(Re(w) ? w : [], p);
          }
          return this[a](function(x) {
            return n.apply(Re(x) ? x : [], p);
          });
        };
      }), Zr(Ye.prototype, function(r, n) {
        var a = v[n];
        if (a) {
          var h = a.name + "";
          nt.call(On, h) || (On[h] = []), On[h].push({ name: n, func: a });
        }
      }), On[So(t, ie).name] = [{ name: "wrapper", func: t }], Ye.prototype.clone = Xg, Ye.prototype.reverse = Zg, Ye.prototype.value = ey, v.prototype.at = C0, v.prototype.chain = A0, v.prototype.commit = T0, v.prototype.next = R0, v.prototype.plant = L0, v.prototype.reverse = U0, v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = $0, v.prototype.first = v.prototype.head, Xn && (v.prototype[Xn] = N0), v;
    }, Sn = Tg();
    Rt ? ((Rt.exports = Sn)._ = Sn, ut._ = Sn) : Xe._ = Sn;
  }).call(ms);
})(Pu, Pu.exports);
var q2 = Object.defineProperty, z2 = Object.defineProperties, F2 = Object.getOwnPropertyDescriptors, Td = Object.getOwnPropertySymbols, H2 = Object.prototype.hasOwnProperty, B2 = Object.prototype.propertyIsEnumerable, Rd = (i, e, t) => e in i ? q2(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Bo = (i, e) => {
  for (var t in e || (e = {}))
    H2.call(e, t) && Rd(i, t, e[t]);
  if (Td)
    for (var t of Td(e))
      B2.call(e, t) && Rd(i, t, e[t]);
  return i;
}, K2 = (i, e) => z2(i, F2(e));
function qi(i, e, t) {
  var s;
  const o = jE(i);
  return ((s = e.rpcMap) == null ? void 0 : s[o.reference]) || `${j2}?chainId=${o.namespace}:${o.reference}&projectId=${t}`;
}
function dn(i) {
  return i.includes(":") ? i.split(":")[1] : i;
}
function og(i) {
  return i.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function k2(i, e) {
  const t = Object.keys(e.namespaces).filter((o) => o.includes(i));
  if (!t.length)
    return [];
  const s = [];
  return t.forEach((o) => {
    const c = e.namespaces[o].accounts;
    s.push(...c);
  }), s;
}
function Nd(i = {}, e = {}) {
  const t = Ld(i), s = Ld(e);
  return Pu.exports.merge(t, s);
}
function Ld(i) {
  var e, t, s, o;
  const c = {};
  if (!xs(i))
    return c;
  for (const [d, f] of Object.entries(i)) {
    const y = Bu(d) ? [d] : f.chains, g = f.methods || [], m = f.events || [], D = f.rpcMap || {}, I = ws(d);
    c[I] = K2(Bo(Bo({}, c[I]), f), { chains: kc(y, (e = c[I]) == null ? void 0 : e.chains), methods: kc(g, (t = c[I]) == null ? void 0 : t.methods), events: kc(m, (s = c[I]) == null ? void 0 : s.events), rpcMap: Bo(Bo({}, D), (o = c[I]) == null ? void 0 : o.rpcMap) });
  }
  return c;
}
function V2(i) {
  return i.includes(":") ? i.split(":")[2] : i;
}
function W2(i) {
  const e = {};
  for (const [t, s] of Object.entries(i)) {
    const o = s.methods || [], c = s.events || [], d = s.accounts || [], f = Bu(t) ? [t] : s.chains ? s.chains : og(s.accounts);
    e[t] = { chains: f, methods: o, events: c, accounts: d };
  }
  return e;
}
function su(i) {
  return typeof i == "number" ? i : i.includes("0x") ? parseInt(i, 16) : (i = i.includes(":") ? i.split(":")[1] : i, isNaN(Number(i)) ? i : Number(i));
}
const ag = {}, bt = (i) => ag[i], ou = (i, e) => {
  ag[i] = e;
};
class G2 {
  constructor(e) {
    this.name = "polkadot", this.namespace = e.namespace, this.events = bt("events"), this.client = bt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var s;
      const o = dn(t);
      e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || qi(e, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Si(new Fi(s, bt("disableProviderPing")));
  }
}
class Y2 {
  constructor(e) {
    this.name = "eip155", this.namespace = e.namespace, this.events = bt("events"), this.client = bt("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(e) {
    switch (e.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId.toString();
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  createHttpProvider(e, t) {
    const s = t || qi(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Si(new Fi(s, bt("disableProviderPing")));
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var s;
      const o = parseInt(dn(t));
      e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t]);
    }), e;
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const e = this.chainId, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  async handleSwitchChain(e) {
    var t, s;
    let o = e.request.params ? (t = e.request.params[0]) == null ? void 0 : t.chainId : "0x0";
    o = o.startsWith("0x") ? o : `0x${o}`;
    const c = parseInt(o, 16);
    if (this.isChainApproved(c))
      this.setDefaultChain(`${c}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({ topic: e.topic, request: { method: e.request.method, params: [{ chainId: o }] }, chainId: (s = this.namespace.chains) == null ? void 0 : s[0] }), this.setDefaultChain(`${c}`);
    else
      throw new Error(`Failed to switch to chain 'eip155:${c}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
}
class J2 {
  constructor(e) {
    this.name = "solana", this.namespace = e.namespace, this.events = bt("events"), this.client = bt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var s;
      const o = dn(t);
      e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || qi(e, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Si(new Fi(s, bt("disableProviderPing")));
  }
}
class Q2 {
  constructor(e) {
    this.name = "cosmos", this.namespace = e.namespace, this.events = bt("events"), this.client = bt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var s;
      const o = dn(t);
      e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || qi(e, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Si(new Fi(s, bt("disableProviderPing")));
  }
}
class X2 {
  constructor(e) {
    this.name = "cip34", this.namespace = e.namespace, this.events = bt("events"), this.client = bt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      const s = this.getCardanoRPCUrl(t), o = dn(t);
      e[o] = this.createHttpProvider(o, s);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  getCardanoRPCUrl(e) {
    const t = this.namespace.rpcMap;
    if (t)
      return t[e];
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || this.getCardanoRPCUrl(e);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Si(new Fi(s, bt("disableProviderPing")));
  }
}
class Z2 {
  constructor(e) {
    this.name = "elrond", this.namespace = e.namespace, this.events = bt("events"), this.client = bt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var s;
      const o = dn(t);
      e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || qi(e, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Si(new Fi(s, bt("disableProviderPing")));
  }
}
class ex {
  constructor(e) {
    this.name = "multiversx", this.namespace = e.namespace, this.events = bt("events"), this.client = bt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var s;
      const o = dn(t);
      e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || qi(e, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Si(new Fi(s, bt("disableProviderPing")));
  }
}
class tx {
  constructor(e) {
    this.name = "near", this.namespace = e.namespace, this.events = bt("events"), this.client = bt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (this.chainId = e, !this.httpProviders[e]) {
      const s = t || qi(`${this.name}:${e}`, this.namespace);
      if (!s)
        throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, s);
    }
    this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var s;
      e[t] = this.createHttpProvider(t, (s = this.namespace.rpcMap) == null ? void 0 : s[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || qi(e, this.namespace);
    return typeof s > "u" ? void 0 : new Si(new Fi(s, bt("disableProviderPing")));
  }
}
var rx = Object.defineProperty, ix = Object.defineProperties, nx = Object.getOwnPropertyDescriptors, Ud = Object.getOwnPropertySymbols, sx = Object.prototype.hasOwnProperty, ox = Object.prototype.propertyIsEnumerable, $d = (i, e, t) => e in i ? rx(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Ko = (i, e) => {
  for (var t in e || (e = {}))
    sx.call(e, t) && $d(i, t, e[t]);
  if (Ud)
    for (var t of Ud(e))
      ox.call(e, t) && $d(i, t, e[t]);
  return i;
}, au = (i, e) => ix(i, nx(e));
class Xu {
  constructor(e) {
    this.events = new Ru(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Je.pino(Je.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Cd })), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || !1;
  }
  static async init(e) {
    const t = new Xu(e);
    return await t.initialize(), t;
  }
  async request(e, t, s) {
    const [o, c] = this.validateChain(t);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(o).request({ request: Ko({}, e), chainId: `${o}:${c}`, topic: this.session.topic, expiry: s });
  }
  sendAsync(e, t, s, o) {
    const c = (/* @__PURE__ */ new Date()).getTime();
    this.request(e, s, o).then((d) => t(null, la(c, d))).catch((d) => t(d, void 0));
  }
  async enable() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var e;
    if (!this.session)
      throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (e = this.session) == null ? void 0 : e.topic, reason: _t("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(e) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing)
      return await this.pair(e.pairingTopic);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    this.shouldAbortPairingAttempt = !1;
    let t = 0;
    do {
      if (this.shouldAbortPairingAttempt)
        throw new Error("Pairing aborted");
      if (t >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: s, approval: o } = await this.client.connect({ pairingTopic: e, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      s && (this.uri = s, this.events.emit("display_uri", s)), await o().then((c) => {
        this.session = c;
        const d = W2(c.namespaces);
        this.namespaces = Nd(this.namespaces, d), this.persist("namespaces", this.namespaces);
      }).catch((c) => {
        if (c.message !== ng)
          throw c;
        t++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(e, t) {
    try {
      if (!this.session)
        return;
      const [s, o] = this.validateChain(e);
      this.getProvider(s).setDefaultChain(o, t);
    } catch (s) {
      if (!/Please call connect/.test(s.message))
        throw s;
    }
  }
  async cleanupPendingPairings(e = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const t = this.client.pairing.getAll();
    if (ni(t)) {
      for (const s of t)
        e.deletePairings ? this.client.core.expirer.set(s.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
      this.logger.info(`Inactive pairings cleared: ${t.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const e = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await T2.init({ logger: this.providerOpts.logger || Cd, relayUrl: this.providerOpts.relayUrl || U2, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error("Session not initialized. Please call connect() before enable()");
    const e = [...new Set(Object.keys(this.session.namespaces).map((t) => ws(t)))];
    ou("client", this.client), ou("events", this.events), ou("disableProviderPing", this.disableProviderPing), e.forEach((t) => {
      if (!this.session)
        return;
      const s = k2(t, this.session), o = og(s), c = Nd(this.namespaces, this.optionalNamespaces), d = au(Ko({}, c[t]), { accounts: s, chains: o });
      switch (t) {
        case "eip155":
          this.rpcProviders[t] = new Y2({ namespace: d });
          break;
        case "solana":
          this.rpcProviders[t] = new J2({ namespace: d });
          break;
        case "cosmos":
          this.rpcProviders[t] = new Q2({ namespace: d });
          break;
        case "polkadot":
          this.rpcProviders[t] = new G2({ namespace: d });
          break;
        case "cip34":
          this.rpcProviders[t] = new X2({ namespace: d });
          break;
        case "elrond":
          this.rpcProviders[t] = new Z2({ namespace: d });
          break;
        case "multiversx":
          this.rpcProviders[t] = new ex({ namespace: d });
          break;
        case "near":
          this.rpcProviders[t] = new tx({ namespace: d });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      this.events.emit("session_ping", e);
    }), this.client.on("session_event", (e) => {
      const { params: t } = e, { event: s } = t;
      if (s.name === "accountsChanged") {
        const o = s.data;
        o && ni(o) && this.events.emit("accountsChanged", o.map(V2));
      } else if (s.name === "chainChanged") {
        const o = t.chainId, c = t.event.data, d = ws(o), f = su(o) !== su(c) ? `${d}:${su(c)}` : o;
        this.onChainChanged(f);
      } else
        this.events.emit(s.name, s.data);
      this.events.emit("session_event", e);
    }), this.client.on("session_update", ({ topic: e, params: t }) => {
      var s;
      const { namespaces: o } = t, c = (s = this.client) == null ? void 0 : s.session.get(e);
      this.session = au(Ko({}, c), { namespaces: o }), this.onSessionUpdate(), this.events.emit("session_update", { topic: e, params: t });
    }), this.client.on("session_delete", async (e) => {
      await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", au(Ko({}, _t("USER_DISCONNECTED")), { data: e.topic }));
    }), this.on(Ii.DEFAULT_CHAIN_CHANGED, (e) => {
      this.onChainChanged(e, !0);
    });
  }
  getProvider(e) {
    if (!this.rpcProviders[e])
      throw new Error(`Provider not found: ${e}`);
    return this.rpcProviders[e];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var t;
      this.getProvider(e).updateNamespace((t = this.session) == null ? void 0 : t.namespaces[e]);
    });
  }
  setNamespaces(e) {
    const { namespaces: t, optionalNamespaces: s, sessionProperties: o } = e;
    t && Object.keys(t).length && (this.namespaces = t), s && Object.keys(s).length && (this.optionalNamespaces = s), this.sessionProperties = o, this.persist("namespaces", t), this.persist("optionalNamespaces", s);
  }
  validateChain(e) {
    const [t, s] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length)
      return [t, s];
    if (t && !Object.keys(this.namespaces || {}).map((d) => ws(d)).includes(t))
      throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
    if (t && s)
      return [t, s];
    const o = ws(Object.keys(this.namespaces)[0]), c = this.rpcProviders[o].getDefaultChain();
    return [o, c];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  onChainChanged(e, t = !1) {
    if (!this.namespaces)
      return;
    const [s, o] = this.validateChain(e);
    o && (t || this.getProvider(s).setDefaultChain(o), this.namespaces[s] ? this.namespaces[s].defaultChain = o : this.namespaces[`${s}:${o}`] ? this.namespaces[`${s}:${o}`].defaultChain = o : this.namespaces[`${s}:${o}`] = { defaultChain: o }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", o));
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(e, t) {
    this.client.core.storage.setItem(`${Ad}/${e}`, t);
  }
  async getFromStore(e) {
    return await this.client.core.storage.getItem(`${Ad}/${e}`);
  }
}
const ax = Xu, cx = "wc", ux = "ethereum_provider", hx = `${cx}@2:${ux}:`, lx = "https://rpc.walletconnect.com/v1/", Cu = ["eth_sendTransaction", "personal_sign"], fx = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"], Au = ["chainChanged", "accountsChanged"], dx = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var px = Object.defineProperty, gx = Object.defineProperties, yx = Object.getOwnPropertyDescriptors, Md = Object.getOwnPropertySymbols, vx = Object.prototype.hasOwnProperty, mx = Object.prototype.propertyIsEnumerable, jd = (i, e, t) => e in i ? px(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, bs = (i, e) => {
  for (var t in e || (e = {}))
    vx.call(e, t) && jd(i, t, e[t]);
  if (Md)
    for (var t of Md(e))
      mx.call(e, t) && jd(i, t, e[t]);
  return i;
}, qd = (i, e) => gx(i, yx(e));
function ta(i) {
  return Number(i[0].split(":")[1]);
}
function cu(i) {
  return `0x${i.toString(16)}`;
}
function wx(i) {
  const { chains: e, optionalChains: t, methods: s, optionalMethods: o, events: c, optionalEvents: d, rpcMap: f } = i;
  if (!ni(e))
    throw new Error("Invalid chains");
  const y = { chains: e, methods: s || Cu, events: c || Au, rpcMap: bs({}, e.length ? { [ta(e)]: f[ta(e)] } : {}) }, g = c == null ? void 0 : c.filter((T) => !Au.includes(T)), m = s == null ? void 0 : s.filter((T) => !Cu.includes(T));
  if (!t && !d && !o && !(g != null && g.length) && !(m != null && m.length))
    return { required: e.length ? y : void 0 };
  const D = (g == null ? void 0 : g.length) && (m == null ? void 0 : m.length) || !t, I = { chains: [...new Set(D ? y.chains.concat(t || []) : t)], methods: [...new Set(y.methods.concat(o != null && o.length ? o : fx))], events: [...new Set(y.events.concat(d != null && d.length ? d : dx))], rpcMap: f };
  return { required: e.length ? y : void 0, optional: t.length ? I : void 0 };
}
class Zu {
  constructor() {
    this.events = new Ar.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = hx, this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = (e) => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {};
  }
  static async init(e) {
    const t = new Zu();
    return await t.initialize(e), t;
  }
  async request(e, t) {
    return await this.signer.request(e, this.formatChainId(this.chainId), t);
  }
  sendAsync(e, t, s) {
    this.signer.sendAsync(e, t, this.formatChainId(this.chainId), s);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(e) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: t, optional: s } = wx(this.rpc);
    try {
      const o = await new Promise(async (d, f) => {
        var y;
        this.rpc.showQrModal && ((y = this.modal) == null || y.subscribeModal((g) => {
          !g.open && !this.signer.session && (this.signer.abortPairingAttempt(), f(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(qd(bs({ namespaces: bs({}, t && { [this.namespace]: t }) }, s && { optionalNamespaces: { [this.namespace]: s } }), { pairingTopic: e == null ? void 0 : e.pairingTopic })).then((g) => {
          d(g);
        }).catch((g) => {
          f(new Error(g.message));
        });
      });
      if (!o)
        return;
      const c = qE(o.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : c), this.setAccounts(c), this.events.emit("connect", { chainId: cu(this.chainId) });
    } catch (o) {
      throw this.signer.logger.error(o), o;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: t } = e, { event: s } = t;
      s.name === "accountsChanged" ? (this.accounts = this.parseAccounts(s.data), this.events.emit("accountsChanged", this.accounts)) : s.name === "chainChanged" ? this.setChainId(this.formatChainId(s.data)) : this.events.emit(s.name, s.data), this.events.emit("session_event", e);
    }), this.signer.on("chainChanged", (e) => {
      const t = parseInt(e);
      this.chainId = t, this.events.emit("chainChanged", cu(this.chainId)), this.persist();
    }), this.signer.on("session_update", (e) => {
      this.events.emit("session_update", e);
    }), this.signer.on("session_delete", (e) => {
      this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", qd(bs({}, _t("USER_DISCONNECTED")), { data: e.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (e) => {
      var t, s;
      this.rpc.showQrModal && ((t = this.modal) == null || t.closeModal(), (s = this.modal) == null || s.openModal({ uri: e })), this.events.emit("display_uri", e);
    });
  }
  switchEthereumChain(e) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: e.toString(16) }] });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const t = e.filter((s) => this.isCompatibleChainId(s)).map((s) => this.parseChainId(s));
    t.length && (this.chainId = t[0], this.events.emit("chainChanged", cu(this.chainId)), this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const t = this.parseChainId(e);
      this.chainId = t, this.switchEthereumChain(t);
    }
  }
  parseAccountId(e) {
    const [t, s, o] = e.split(":");
    return { chainId: `${t}:${s}`, address: o };
  }
  setAccounts(e) {
    this.accounts = e.filter((t) => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map((t) => this.parseAccountId(t).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    var t, s;
    const o = (t = e == null ? void 0 : e.chains) != null ? t : [], c = (s = e == null ? void 0 : e.optionalChains) != null ? s : [], d = o.concat(c);
    if (!d.length)
      throw new Error("No chains specified in either `chains` or `optionalChains`");
    const f = o.length ? (e == null ? void 0 : e.methods) || Cu : [], y = o.length ? (e == null ? void 0 : e.events) || Au : [], g = (e == null ? void 0 : e.optionalMethods) || [], m = (e == null ? void 0 : e.optionalEvents) || [], D = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(d, e.projectId), I = (e == null ? void 0 : e.qrModalOptions) || void 0;
    return { chains: o == null ? void 0 : o.map((T) => this.formatChainId(T)), optionalChains: c.map((T) => this.formatChainId(T)), methods: f, events: y, optionalMethods: g, optionalEvents: m, rpcMap: D, showQrModal: !!(e != null && e.showQrModal), qrModalOptions: I, projectId: e.projectId, metadata: e.metadata };
  }
  buildRpcMap(e, t) {
    const s = {};
    return e.forEach((o) => {
      s[o] = this.getRpcUrl(o, t);
    }), s;
  }
  async initialize(e) {
    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? ta(this.rpc.chains) : ta(this.rpc.optionalChains), this.signer = await ax.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: e.disableProviderPing, relayUrl: e.relayUrl, storageOptions: e.storageOptions }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let t;
      try {
        const { WalletConnectModal: s } = await import("./index-CkfYfOAR.mjs").then((o) => o.i);
        t = s;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (t)
        try {
          this.modal = new t(bs({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
        } catch (s) {
          throw this.signer.logger.error(s), new Error("Could not generate WalletConnectModal Instance");
        }
    }
  }
  loadConnectOpts(e) {
    if (!e)
      return;
    const { chains: t, optionalChains: s, rpcMap: o } = e;
    t && ni(t) && (this.rpc.chains = t.map((c) => this.formatChainId(c)), t.forEach((c) => {
      this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c);
    })), s && ni(s) && (this.rpc.optionalChains = [], this.rpc.optionalChains = s == null ? void 0 : s.map((c) => this.formatChainId(c)), s.forEach((c) => {
      this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c);
    }));
  }
  getRpcUrl(e, t) {
    var s;
    return ((s = this.rpc.rpcMap) == null ? void 0 : s[e]) || `${lx}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (!this.session)
      return;
    const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
    this.setChainIds(e ? [this.formatChainId(e)] : t == null ? void 0 : t.accounts), this.setAccounts(t == null ? void 0 : t.accounts);
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String ? [this.parseAccount(e)] : e.map((t) => this.parseAccount(t));
  }
}
const Mx = Zu;
export {
  Mx as EthereumProvider,
  dx as OPTIONAL_EVENTS,
  fx as OPTIONAL_METHODS,
  Au as REQUIRED_EVENTS,
  Cu as REQUIRED_METHODS,
  Zu as default
};
