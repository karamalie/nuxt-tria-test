import { Z as g, _ as k, O as L, a as O, L as p, s as m, e as x, b as f, p as y, B as h, c as b } from "./auth-manager-BLHwoT4w.mjs";
class $ extends f {
  constructor({ callbackSelector: e, cause: a, data: l, extraData: o, sender: d, urls: t }) {
    var c;
    super(a.shortMessage || "An error occurred while fetching for an offchain result.", {
      cause: a,
      metaMessages: [
        ...a.metaMessages || [],
        (c = a.metaMessages) != null && c.length ? "" : [],
        "Offchain Gateway Call:",
        t && [
          "  Gateway URL(s):",
          ...t.map((u) => `    ${y(u)}`)
        ],
        `  Sender: ${d}`,
        `  Data: ${l}`,
        `  Callback selector: ${e}`,
        `  Extra data: ${o}`
      ].flat()
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "OffchainLookupError"
    });
  }
}
class v extends f {
  constructor({ result: e, url: a }) {
    super("Offchain gateway response is malformed. Response data must be a hex value.", {
      metaMessages: [
        `Gateway URL: ${y(a)}`,
        `Response: ${m(e)}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "OffchainLookupResponseMalformedError"
    });
  }
}
class M extends f {
  constructor({ sender: e, to: a }) {
    super("Reverted sender address does not match target contract address (`to`).", {
      metaMessages: [
        `Contract address: ${a}`,
        `OffchainLookup sender address: ${e}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "OffchainLookupSenderMismatchError"
    });
  }
}
function S(r, e) {
  if (!h(r, { strict: !1 }))
    throw new b({ address: r });
  if (!h(e, { strict: !1 }))
    throw new b({ address: e });
  return r.toLowerCase() === e.toLowerCase();
}
const T = "0x556f1830", C = {
  name: "OffchainLookup",
  type: "error",
  inputs: [
    {
      name: "sender",
      type: "address"
    },
    {
      name: "urls",
      type: "string[]"
    },
    {
      name: "callData",
      type: "bytes"
    },
    {
      name: "callbackFunction",
      type: "bytes4"
    },
    {
      name: "extraData",
      type: "bytes"
    }
  ]
};
async function A(r, { blockNumber: e, blockTag: a, data: l, to: o }) {
  const { args: d } = g({
    data: l,
    abi: [C]
  }), [t, c, u, s, n] = d;
  try {
    if (!S(o, t))
      throw new M({ sender: t, to: o });
    const i = await D({ data: u, sender: t, urls: c }), { data: w } = await k(r, {
      blockNumber: e,
      blockTag: a,
      data: L([
        s,
        O([{ type: "bytes" }, { type: "bytes" }], [i, n])
      ]),
      to: o
    });
    return w;
  } catch (i) {
    throw new $({
      callbackSelector: s,
      cause: i,
      data: l,
      extraData: n,
      sender: t,
      urls: c
    });
  }
}
async function D({ data: r, sender: e, urls: a }) {
  var l;
  let o = new Error("An unknown error occurred.");
  for (let d = 0; d < a.length; d++) {
    const t = a[d], c = t.includes("{data}") ? "GET" : "POST", u = c === "POST" ? { data: r, sender: e } : void 0;
    try {
      const s = await fetch(t.replace("{sender}", e).replace("{data}", r), {
        body: JSON.stringify(u),
        method: c
      });
      let n;
      if ((l = s.headers.get("Content-Type")) != null && l.startsWith("application/json") ? n = (await s.json()).data : n = await s.text(), !s.ok) {
        o = new p({
          body: u,
          details: n != null && n.error ? m(n.error) : s.statusText,
          headers: s.headers,
          status: s.status,
          url: t
        });
        continue;
      }
      if (!x(n)) {
        o = new v({
          result: n,
          url: t
        });
        continue;
      }
      return n;
    } catch (s) {
      o = new p({
        body: u,
        details: s.message,
        url: t
      });
    }
  }
  throw o;
}
export {
  D as ccipFetch,
  A as offchainLookup,
  C as offchainLookupAbiItem,
  T as offchainLookupSignature
};
