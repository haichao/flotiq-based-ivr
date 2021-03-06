/*!
 * rete-minimap-plugin v0.3.1
 * (c) 2021 Vitaliy Stoliarov
 * Released under the MIT license.
 */
var runtime = (function (o) {
  "use strict";
  var l,
    t = Object.prototype,
    c = t.hasOwnProperty,
    n = "function" == typeof Symbol ? Symbol : {},
    i = n.iterator || "@@iterator",
    e = n.asyncIterator || "@@asyncIterator",
    r = n.toStringTag || "@@toStringTag";
  function a(t, n, e, r) {
    var i = n && n.prototype instanceof s ? n : s,
      o = Object.create(i.prototype),
      a = new _(r || []);
    return (
      (o._invoke = (function (o, a, s) {
        var l = h;
        return function (t, n) {
          if (l === d) throw new Error("Generator is already running");
          if (l === f) {
            if ("throw" === t) throw n;
            return O();
          }
          for (s.method = t, s.arg = n; ; ) {
            var e = s.delegate;
            if (e) {
              var r = C(e, s);
              if (r) {
                if (r === m) continue;
                return r;
              }
            }
            if ("next" === s.method) s.sent = s._sent = s.arg;
            else if ("throw" === s.method) {
              if (l === h) throw ((l = f), s.arg);
              s.dispatchException(s.arg);
            } else "return" === s.method && s.abrupt("return", s.arg);
            l = d;
            var i = u(o, a, s);
            if ("normal" === i.type) {
              if (((l = s.done ? f : p), i.arg === m)) continue;
              return { value: i.arg, done: s.done };
            }
            "throw" === i.type &&
              ((l = f), (s.method = "throw"), (s.arg = i.arg));
          }
        };
      })(t, e, a)),
      o
    );
  }
  function u(t, n, e) {
    try {
      return { type: "normal", arg: t.call(n, e) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  o.wrap = a;
  var h = "suspendedStart",
    p = "suspendedYield",
    d = "executing",
    f = "completed",
    m = {};
  function s() {}
  function v() {}
  function g() {}
  var y = {};
  y[i] = function () {
    return this;
  };
  var A = Object.getPrototypeOf,
    w = A && A(A(S([])));
  w && w !== t && c.call(w, i) && (y = w);
  var x = (g.prototype = s.prototype = Object.create(y));
  function b(t) {
    ["next", "throw", "return"].forEach(function (n) {
      t[n] = function (t) {
        return this._invoke(n, t);
      };
    });
  }
  function E(l) {
    var n;
    this._invoke = function (e, r) {
      function t() {
        return new Promise(function (t, n) {
          !(function n(t, e, r, i) {
            var o = u(l[t], l, e);
            if ("throw" !== o.type) {
              var a = o.arg,
                s = a.value;
              return s && "object" == typeof s && c.call(s, "__await")
                ? Promise.resolve(s.__await).then(
                    function (t) {
                      n("next", t, r, i);
                    },
                    function (t) {
                      n("throw", t, r, i);
                    }
                  )
                : Promise.resolve(s).then(
                    function (t) {
                      (a.value = t), r(a);
                    },
                    function (t) {
                      return n("throw", t, r, i);
                    }
                  );
            }
            i(o.arg);
          })(e, r, t, n);
        });
      }
      return (n = n ? n.then(t, t) : t());
    };
  }
  function C(t, n) {
    var e = t.iterator[n.method];
    if (e === l) {
      if (((n.delegate = null), "throw" === n.method)) {
        if (
          t.iterator.return &&
          ((n.method = "return"), (n.arg = l), C(t, n), "throw" === n.method)
        )
          return m;
        (n.method = "throw"),
          (n.arg = new TypeError(
            "The iterator does not provide a 'throw' method"
          ));
      }
      return m;
    }
    var r = u(e, t.iterator, n.arg);
    if ("throw" === r.type)
      return (n.method = "throw"), (n.arg = r.arg), (n.delegate = null), m;
    var i = r.arg;
    return i
      ? i.done
        ? ((n[t.resultName] = i.value),
          (n.next = t.nextLoc),
          "return" !== n.method && ((n.method = "next"), (n.arg = l)),
          (n.delegate = null),
          m)
        : i
      : ((n.method = "throw"),
        (n.arg = new TypeError("iterator result is not an object")),
        (n.delegate = null),
        m);
  }
  function L(t) {
    var n = { tryLoc: t[0] };
    1 in t && (n.catchLoc = t[1]),
      2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
      this.tryEntries.push(n);
  }
  function k(t) {
    var n = t.completion || {};
    (n.type = "normal"), delete n.arg, (t.completion = n);
  }
  function _(t) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      t.forEach(L, this),
      this.reset(!0);
  }
  function S(n) {
    if (n) {
      var t = n[i];
      if (t) return t.call(n);
      if ("function" == typeof n.next) return n;
      if (!isNaN(n.length)) {
        var e = -1,
          r = function t() {
            for (; ++e < n.length; )
              if (c.call(n, e)) return (t.value = n[e]), (t.done = !1), t;
            return (t.value = l), (t.done = !0), t;
          };
        return (r.next = r);
      }
    }
    return { next: O };
  }
  function O() {
    return { value: l, done: !0 };
  }
  return (
    (v.prototype = x.constructor = g),
    (g.constructor = v),
    (g[r] = v.displayName = "GeneratorFunction"),
    (o.isGeneratorFunction = function (t) {
      var n = "function" == typeof t && t.constructor;
      return (
        !!n && (n === v || "GeneratorFunction" === (n.displayName || n.name))
      );
    }),
    (o.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, g)
          : ((t.__proto__ = g), r in t || (t[r] = "GeneratorFunction")),
        (t.prototype = Object.create(x)),
        t
      );
    }),
    (o.awrap = function (t) {
      return { __await: t };
    }),
    b(E.prototype),
    (E.prototype[e] = function () {
      return this;
    }),
    (o.AsyncIterator = E),
    (o.async = function (t, n, e, r) {
      var i = new E(a(t, n, e, r));
      return o.isGeneratorFunction(n)
        ? i
        : i.next().then(function (t) {
            return t.done ? t.value : i.next();
          });
    }),
    b(x),
    (x[r] = "Generator"),
    (x[i] = function () {
      return this;
    }),
    (x.toString = function () {
      return "[object Generator]";
    }),
    (o.keys = function (e) {
      var r = [];
      for (var t in e) r.push(t);
      return (
        r.reverse(),
        function t() {
          for (; r.length; ) {
            var n = r.pop();
            if (n in e) return (t.value = n), (t.done = !1), t;
          }
          return (t.done = !0), t;
        }
      );
    }),
    (o.values = S),
    (_.prototype = {
      constructor: _,
      reset: function (t) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = l),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = l),
          this.tryEntries.forEach(k),
          !t)
        )
          for (var n in this)
            "t" === n.charAt(0) &&
              c.call(this, n) &&
              !isNaN(+n.slice(1)) &&
              (this[n] = l);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function t(t, n) {
          return (
            (o.type = "throw"),
            (o.arg = e),
            (r.next = t),
            n && ((r.method = "next"), (r.arg = l)),
            !!n
          );
        }
        for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
          var i = this.tryEntries[n],
            o = i.completion;
          if ("root" === i.tryLoc) return t("end");
          if (i.tryLoc <= this.prev) {
            var a = c.call(i, "catchLoc"),
              s = c.call(i, "finallyLoc");
            if (a && s) {
              if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return t(i.finallyLoc);
            } else if (a) {
              if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
            } else {
              if (!s) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return t(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, n) {
        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
          var r = this.tryEntries[e];
          if (
            r.tryLoc <= this.prev &&
            c.call(r, "finallyLoc") &&
            this.prev < r.finallyLoc
          ) {
            var i = r;
            break;
          }
        }
        i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= n &&
          n <= i.finallyLoc &&
          (i = null);
        var o = i ? i.completion : {};
        return (
          (o.type = t),
          (o.arg = n),
          i
            ? ((this.method = "next"), (this.next = i.finallyLoc), m)
            : this.complete(o)
        );
      },
      complete: function (t, n) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && n && (this.next = n),
          m
        );
      },
      finish: function (t) {
        for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
          var e = this.tryEntries[n];
          if (e.finallyLoc === t)
            return this.complete(e.completion, e.afterLoc), k(e), m;
        }
      },
      catch: function (t) {
        for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
          var e = this.tryEntries[n];
          if (e.tryLoc === t) {
            var r = e.completion;
            if ("throw" === r.type) {
              var i = r.arg;
              k(e);
            }
            return i;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (t, n, e) {
        return (
          (this.delegate = { iterator: S(t), resultName: n, nextLoc: e }),
          "next" === this.method && (this.arg = l),
          m
        );
      }
    }),
    o
  );
})("object" == typeof module ? module.exports : {});
try {
  regeneratorRuntime = runtime;
} catch (t) {
  Function("r", "regeneratorRuntime = r")(runtime);
}
!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? n(exports, require("vue"))
    : "function" == typeof define && define.amd
    ? define(["exports", "vue"], n)
    : n(((t = t || self).MinimapPlugin = {}), t.Vue);
})(this, function (t, o) {
  "use strict";
  function i(t, n, e) {
    return (
      n in t
        ? Object.defineProperty(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (t[n] = e),
      t
    );
  }
  function n(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(e);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(e).filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })
        )),
        r.forEach(function (t) {
          i(n, t, e[t]);
        });
    }
    return n;
  }
  function h(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) {
          for (var n = 0, e = new Array(t.length); n < t.length; n++)
            e[n] = t[n];
          return e;
        }
      })(t) ||
      (function (t) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      })(t) ||
      (function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      })()
    );
  }
  o = o && o.hasOwnProperty("default") ? o.default : o;
  var e = {
    props: ["size", "nodes", "views", "view"],
    data: function () {
      return {
        transform: {
          ox: 0,
          oy: 0,
          scale: function () {
            return 1;
          },
          invert: function () {
            return 1;
          }
        }
      };
    },
    mounted: function () {
      var s = this;
      !(function (a, t, n, e) {
        var s = 2 < arguments.length && void 0 !== n ? n : function () {},
          l = 3 < arguments.length && void 0 !== e ? e : function () {},
          c = null;
        t.addEventListener("click", function (t) {
          if (((c = s()), "mini-viewport" !== t.target.className)) {
            var n = a.getBoundingClientRect(),
              e = n.left + window.scrollX,
              r = n.top + window.scrollY,
              i = e - (t.pageX - n.width / 2),
              o = r - (t.pageY - n.height / 2);
            l(i, o, c);
          }
        });
      })(
        this.$refs.viewport,
        this.$refs.area,
        function () {
          return n({}, s.view.area.transform);
        },
        function (t, n, e) {
          var r = e.x,
            i = e.y,
            o = e.k,
            a = s.transform.invert;
          s.view.area.translate(r + o * a(t), i + o * a(n));
        }
      ),
        (function (t, n, e) {
          var r = 1 < arguments.length && void 0 !== n ? n : function () {},
            i = 2 < arguments.length && void 0 !== e ? e : function () {},
            o = null,
            a = null;
          t.addEventListener("mousedown", function (t) {
            (a = r()), (o = [t.pageX, t.pageY]);
          }),
            window.addEventListener("mousemove", function (t) {
              if (o) {
                var n = o[0] - t.pageX,
                  e = o[1] - t.pageY;
                i(n, e, a);
              }
            }),
            window.addEventListener("mouseup", function () {
              o = null;
            });
        })(
          this.$refs.viewport,
          function () {
            return n({}, s.view.area.transform);
          },
          function (t, n, e) {
            var r = e.x,
              i = e.y,
              o = e.k,
              a = s.transform.invert;
            s.view.area.translate(r + o * a(t), i + o * a(n));
          }
        ),
        this.updateTransform();
    },
    watch: {
      size: function () {
        this.updateTransform();
      }
    },
    methods: {
      mapClass: function () {
        return i({}, this.size, !0);
      },
      updateTransform: function () {
        var t = (function (t, n) {
            var e = 1 < arguments.length && void 0 !== n ? n : function () {},
              r = t.map(function (t) {
                return t.position[0];
              }),
              i = t.map(function (t) {
                return t.position[0] + e(t).clientWidth;
              }),
              o = t.map(function (t) {
                return t.position[1];
              }),
              a = t.map(function (t) {
                return t.position[1] + e(t).clientHeight;
              }),
              s = Math.min.apply(Math, h(r)),
              l = Math.max.apply(Math, h(i)),
              c = Math.min.apply(Math, h(o)),
              u = Math.max.apply(Math, h(a));
            return {
              left: s,
              right: l,
              top: c,
              bottom: u,
              width: l - s,
              height: u - c
            };
          })(this.nodes, this.nv),
          n = t.left,
          e = t.top,
          r = t.width,
          i = t.height,
          o = Math.max(2e3, Math.max(r, i)),
          a = this.$refs.area.clientWidth,
          s = this.$refs.area.clientHeight,
          l = (o - r) / 2 - n,
          c = ((o * s) / a - i) / 2 - e;
        this.transform = {
          scale: function (t) {
            return t * (a / o);
          },
          invert: function (t) {
            return t / (a / o);
          },
          ox: l,
          oy: c
        };
      },
      px: function (t) {
        return t + "px";
      },
      nv: function (t) {
        return this.views.get(t).el;
      },
      nodeStyle: function (t) {
        var n = this.transform,
          e = n.ox,
          r = n.oy,
          i = n.scale;
        return {
          left: this.px(i(e + t.position[0])),
          top: this.px(i(r + t.position[1])),
          width: this.px(i(this.nv(t).clientWidth)),
          height: this.px(i(this.nv(t).clientHeight))
        };
      },
      viewportStyle: function () {
        var t = this.transform,
          n = t.ox,
          e = t.oy,
          r = t.scale,
          i = this.view.area.transform,
          o = i.x,
          a = i.y,
          s = i.k,
          l = this.view.container.clientWidth,
          c = this.view.container.clientHeight;
        return {
          left: this.px(r(n - o / s)),
          top: this.px(r(e - a / s)),
          width: this.px(r(l / s)),
          height: this.px(r(c / s))
        };
      }
    }
  };
  var l,
    r = function (t, n, e, r, i, o, a, s, l, c) {
      "boolean" != typeof a && ((l = s), (s = a), (a = !1));
      var u,
        h = "function" == typeof e ? e.options : e;
      if (
        (t &&
          t.render &&
          ((h.render = t.render),
          (h.staticRenderFns = t.staticRenderFns),
          (h._compiled = !0),
          i && (h.functional = !0)),
        r && (h._scopeId = r),
        o
          ? ((u = function (t) {
              (t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (t = __VUE_SSR_CONTEXT__),
                n && n.call(this, l(t)),
                t && t._registeredComponents && t._registeredComponents.add(o);
            }),
            (h._ssrRegister = u))
          : n &&
            (u = a
              ? function () {
                  n.call(this, c(this.$root.$options.shadowRoot));
                }
              : function (t) {
                  n.call(this, s(t));
                }),
        u)
      )
        if (h.functional) {
          var p = h.render;
          h.render = function (t, n) {
            return u.call(n), p(t, n);
          };
        } else {
          var d = h.beforeCreate;
          h.beforeCreate = d ? [].concat(d, u) : [u];
        }
      return e;
    },
    c =
      "undefined" != typeof navigator &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  var u = {};
  function a(t) {
    return function (t, n) {
      return (function (t, n) {
        var e = c ? n.media || "default" : t,
          r = u[e] || (u[e] = { ids: new Set(), styles: [] });
        if (!r.ids.has(t)) {
          r.ids.add(t);
          var i = n.source;
          if (
            (n.map &&
              ((i += "\n/*# sourceURL=" + n.map.sources[0] + " */"),
              (i +=
                "\n/*# sourceMappingURL=data:application/json;base64," +
                btoa(unescape(encodeURIComponent(JSON.stringify(n.map)))) +
                " */")),
            r.element ||
              ((r.element = document.createElement("style")),
              (r.element.type = "text/css"),
              n.media && r.element.setAttribute("media", n.media),
              void 0 === l &&
                (l = document.head || document.getElementsByTagName("head")[0]),
              l.appendChild(r.element)),
            "styleSheet" in r.element)
          )
            r.styles.push(i),
              (r.element.styleSheet.cssText = r.styles
                .filter(Boolean)
                .join("\n"));
          else {
            var o = r.ids.size - 1,
              a = document.createTextNode(i),
              s = r.element.childNodes;
            s[o] && r.element.removeChild(s[o]),
              s.length
                ? r.element.insertBefore(a, s[o])
                : r.element.appendChild(a);
          }
        }
      })(t, n);
    };
  }
  function s() {
    var n = this,
      t = n.$createElement,
      e = n._self._c || t;
    return e("div", { staticClass: "minimap", class: n.mapClass() }, [
      e(
        "div",
        {
          ref: "area",
          staticClass: "area",
          on: {
            mousedown: function (t) {
              t.stopPropagation(), t.preventDefault();
            }
          }
        },
        [
          n._l(n.nodes, function (t) {
            return e("div", {
              staticClass: "mini-node",
              style: n.nodeStyle(t)
            });
          }),
          e("div", {
            ref: "viewport",
            staticClass: "mini-viewport",
            style: n.viewportStyle()
          })
        ],
        2
      )
    ]);
  }
  var p = e,
    d =
      ((s._withStripped = !0),
      r(
        { render: s, staticRenderFns: [] },
        function (t) {
          t &&
            t("data-v-1313ab62_0", {
              source:
                ".minimap[data-v-1313ab62] {\n  position: absolute;\n  right: 24px;\n  bottom: 24px;\n  background: rgba(89, 132, 152, 0.1);\n  padding: 20px;\n  overflow: hidden;\n  border: 1px solid #b1b7ff;\n  border-radius: 8px;\n}\n.minimap.small[data-v-1313ab62] {\n  width: 150px;\n  height: 150px;\n}\n.minimap[data-v-1313ab62], .minimap.middle[data-v-1313ab62] {\n  width: 220px;\n  height: 220px;\n}\n.minimap.large[data-v-1313ab62] {\n  width: 300px;\n  height: 300px;\n}\n.minimap .area[data-v-1313ab62] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.minimap .mini-node[data-v-1313ab62] {\n  position: absolute;\n  background: rgba(110, 136, 255, 0.8);\n}\n.minimap .mini-viewport[data-v-1313ab62] {\n  position: absolute;\n  background: rgba(255, 251, 128, 0.32);\n  border: 1px solid #ffe52b;\n}\n\n/*# sourceMappingURL=Map.vue.map */",
              map: {
                version: 3,
                sources: [
                  "/Users/leadia/Downloads/minimap-plugin-master/src/Map.vue",
                  "Map.vue"
                ],
                names: [],
                mappings:
                  "AAiHA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,mCAAA;EACA,aAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;AChHA;ADiHA;EACA,YAAA;EACA,aAAA;AC/GA;ADgHA;EACA,YAAA;EACA,aAAA;AC9GA;AD+GA;EACA,YAAA;EACA,aAAA;AC7GA;AD8GA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;AC5GA;AD6GA;EACA,kBAAA;EACA,oCAAA;AC3GA;AD4GA;EACA,kBAAA;EACA,qCAAA;EACA,yBAAA;AC1GA;;AAEA,kCAAkC",
                file: "Map.vue",
                sourcesContent: [
                  '<template lang="pug">\n.minimap(:class="mapClass()")\n    .area(ref="area", @mousedown.stop.prevent="")\n        .mini-node(\n            v-for="node in nodes"\n            :style="nodeStyle(node)"\n        )\n        .mini-viewport(ref="viewport"\n            :style="viewportStyle()"\n        )\n</template>\n\n<script>\nimport { drag } from "./drag";\nimport { click } from "./click";\nimport { nodesBBox } from "./utils";\n\nexport default {\n  props: ["size", "nodes", "views", "view"],\n  data() {\n    return {\n      transform: { ox: 0, oy: 0, scale: () => 1, invert: () => 1 },\n    };\n  },\n  mounted() {\n    click(\n      this.$refs.viewport,\n      this.$refs.area,\n      () => {\n        return { ...this.view.area.transform };\n      },\n      (dx, dy, initial) => {\n        let { x, y, k } = initial;\n        let { invert } = this.transform;\n\n        this.view.area.translate(x + k * invert(dx), y + k * invert(dy));\n      }\n    );\n\n    drag(\n      this.$refs.viewport,\n      () => {\n        return { ...this.view.area.transform };\n      },\n      (dx, dy, initial) => {\n        let { x, y, k } = initial;\n        let { invert } = this.transform;\n\n        this.view.area.translate(x + k * invert(dx), y + k * invert(dy));\n      }\n    );\n    this.updateTransform();\n  },\n  watch: {\n    size() {\n      this.updateTransform();\n    },\n  },\n  methods: {\n    mapClass() {\n      return {\n        [this.size]: true,\n      };\n    },\n    updateTransform() {\n      let { left, top, width, height } = nodesBBox(this.nodes, this.nv);\n      let space = Math.max(2000, Math.max(width, height));\n      let w = this.$refs.area.clientWidth;\n      let h = this.$refs.area.clientHeight;\n      let ox = (space - width) / 2 - left;\n      let oy = ((space * h) / w - height) / 2 - top;\n\n      this.transform = {\n        scale: (v) => v * (w / space),\n        invert: (v) => v / (w / space),\n        ox,\n        oy,\n      };\n    },\n    px(v) {\n      return v + "px";\n    },\n    nv(node) {\n      return this.views.get(node).el;\n    },\n    nodeStyle(node) {\n      let { ox, oy, scale } = this.transform;\n\n      return {\n        left: this.px(scale(ox + node.position[0])),\n        top: this.px(scale(oy + node.position[1])),\n        width: this.px(scale(this.nv(node).clientWidth)),\n        height: this.px(scale(this.nv(node).clientHeight)),\n      };\n    },\n    viewportStyle() {\n      let { ox, oy, scale } = this.transform;\n      let { x, y, k } = this.view.area.transform;\n      let width = this.view.container.clientWidth;\n      let height = this.view.container.clientHeight;\n\n      return {\n        left: this.px(scale(ox - x / k)),\n        top: this.px(scale(oy - y / k)),\n        width: this.px(scale(width / k)),\n        height: this.px(scale(height / k)),\n      };\n    },\n  },\n};\n</script>\n\n<style lang="sass" scoped>\n.minimap\n    position: absolute\n    right: 24px\n    bottom: 24px\n    background: rgba(89, 132, 152, 0.1)\n    padding: 20px\n    overflow: hidden\n    border: 1px solid #b1b7ff\n    border-radius: 8px\n    &.small\n        width: 150px\n        height: 150px\n    &, &.middle\n        width: 220px\n        height: 220px\n    &.large\n        width: 300px\n        height: 300px\n    .area\n        position: relative\n        width: 100%\n        height: 100%\n    .mini-node\n        position: absolute\n        background: rgba(110, 136, 255, 0.8)\n    .mini-viewport\n        position: absolute\n        background: rgba(255, 251, 128, 0.32)\n        border: 1px solid #ffe52b\n</style>\n',
                  ".minimap {\n  position: absolute;\n  right: 24px;\n  bottom: 24px;\n  background: rgba(89, 132, 152, 0.1);\n  padding: 20px;\n  overflow: hidden;\n  border: 1px solid #b1b7ff;\n  border-radius: 8px;\n}\n.minimap.small {\n  width: 150px;\n  height: 150px;\n}\n.minimap, .minimap.middle {\n  width: 220px;\n  height: 220px;\n}\n.minimap.large {\n  width: 300px;\n  height: 300px;\n}\n.minimap .area {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.minimap .mini-node {\n  position: absolute;\n  background: rgba(110, 136, 255, 0.8);\n}\n.minimap .mini-viewport {\n  position: absolute;\n  background: rgba(255, 251, 128, 0.32);\n  border: 1px solid #ffe52b;\n}\n\n/*# sourceMappingURL=Map.vue.map */"
                ]
              },
              media: void 0
            });
        },
        p,
        "data-v-1313ab62",
        !(s._withStripped = !0),
        void 0,
        a,
        void 0
      )),
    f = { SMALL: "small", MIDDLE: "middle", LARGE: "large" };
  var m = n(
    {
      install: function (n, e) {
        o.observable(e),
          (e.enable = !1 !== e.enable),
          (e.size = e.size || f.MIDDLE);
        var t = document.createElement("div");
        function r() {
          return i.$children[0] && i.$children[0].updateTransform();
        }
        n.view.container.appendChild(t);
        var i = new o({
          render: function (t) {
            return e.enable
              ? t(d, {
                  props: {
                    size: e.size,
                    nodes: n.nodes,
                    views: n.view.nodes,
                    view: n.view
                  }
                })
              : null;
          }
        }).$mount(t);
        n.on("nodetranslated nodecreated noderemoved translated zoomed", r),
          window.addEventListener("resize", r),
          n.on("destroy", function () {
            window.removeEventListener("resize", r);
          });
      }
    },
    f
  );
  (t.default = m), Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=minimap-plugin.min.js.map
