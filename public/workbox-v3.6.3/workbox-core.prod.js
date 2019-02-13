;(self.babelHelpers = {
  asyncToGenerator: function(e) {
    return function() {
      var t = e.apply(this, arguments)
      return new Promise(function(e, r) {
        return (function n(o, i) {
          try {
            var c = t[o](i),
              l = c.value
          } catch (e) {
            return void r(e)
          }
          if (!c.done)
            return Promise.resolve(l).then(
              function(e) {
                n('next', e)
              },
              function(e) {
                n('throw', e)
              }
            )
          e(l)
        })('next')
      })
    }
  }
}),
  (this.workbox = this.workbox || {}),
  (this.workbox.core = (function() {
    'use strict'
    try {
      self.workbox.v['workbox:core:3.6.3'] = 1
    } catch (e) {}
    var e = { debug: 0, log: 1, warn: 2, error: 3, silent: 4 }
    const t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    let r = (() => e.warn)()
    const n = e => r <= e,
      o = e => (r = e),
      i = () => r,
      c = e.error,
      l = function(r, o, i) {
        const l = 0 === r.indexOf('group') ? c : e[r]
        if (!n(l)) return
        if (!i || ('groupCollapsed' === r && t)) return void console[r](...o)
        const s = [
          '%cworkbox',
          `background: ${i}; color: white; padding: 2px 0.5em; ` +
            'border-radius: 0.5em;'
        ]
        console[r](...s, ...o)
      },
      s = () => {
        n(c) && console.groupEnd()
      },
      u = { groupEnd: s, unprefixed: { groupEnd: s } },
      a = {
        debug: '#7f8c8d',
        log: '#2ecc71',
        warn: '#f39c12',
        error: '#c0392b',
        groupCollapsed: '#3498db'
      }
    var f, d
    Object.keys(a).forEach(
      e => (
        (e = e),
        (d = a[e]),
        (u[e] = (...t) => l(e, t, d)),
        void (u.unprefixed[e] = (...t) => l(e, t))
      )
    )
    const h = (e, ...t) => {
      let r = e
      return t.length > 0 && (r += ` :: ${JSON.stringify(t)}`), r
    }
    class p extends Error {
      constructor(e, t) {
        super(h(e, t)), (this.name = e), (this.details = t)
      }
    }
    let b = ((y = babelHelpers.asyncToGenerator(function*() {
      for (const e of g) yield e()
    })),
    function() {
      return y.apply(this, arguments)
    })
    var y
    const g = new Set()
    class v {
      constructor(
        e,
        t,
        { onupgradeneeded: r, onversionchange: n = this.e } = {}
      ) {
        ;(this.t = e), (this.r = t), (this.n = r), (this.e = n), (this.o = null)
      }
      open() {
        var e = this
        return babelHelpers.asyncToGenerator(function*() {
          if (!e.o)
            return (
              (e.o = yield new Promise(function(t, r) {
                let n = !1
                setTimeout(function() {
                  ;(n = !0),
                    r(new Error('The open request was blocked and timed out'))
                }, e.OPEN_TIMEOUT)
                const o = indexedDB.open(e.t, e.r)
                ;(o.onerror = function(e) {
                  return r(o.error)
                }),
                  (o.onupgradeneeded = function(t) {
                    n
                      ? (o.transaction.abort(), t.target.result.close())
                      : e.n && e.n(t)
                  }),
                  (o.onsuccess = function(r) {
                    const o = r.target.result
                    n ? o.close() : ((o.onversionchange = e.e), t(o))
                  })
              })),
              e
            )
        })()
      }
      get(e, ...t) {
        var r = this
        return babelHelpers.asyncToGenerator(function*() {
          return yield r.i('get', e, 'readonly', ...t)
        })()
      }
      add(e, ...t) {
        var r = this
        return babelHelpers.asyncToGenerator(function*() {
          return yield r.i('add', e, 'readwrite', ...t)
        })()
      }
      put(e, ...t) {
        var r = this
        return babelHelpers.asyncToGenerator(function*() {
          return yield r.i('put', e, 'readwrite', ...t)
        })()
      }
      delete(e, ...t) {
        var r = this
        return babelHelpers.asyncToGenerator(function*() {
          yield r.i('delete', e, 'readwrite', ...t)
        })()
      }
      deleteDatabase() {
        var e = this
        return babelHelpers.asyncToGenerator(function*() {
          e.close(),
            (e.o = null),
            yield new Promise(function(t, r) {
              const n = indexedDB.deleteDatabase(e.t)
              ;(n.onerror = function(e) {
                return r(e.target.error)
              }),
                (n.onblocked = function() {
                  return r(new Error('Deletion was blocked.'))
                }),
                (n.onsuccess = function() {
                  return t()
                })
            })
        })()
      }
      getAll(e, t, r) {
        var n = this
        return babelHelpers.asyncToGenerator(function*() {
          return 'getAll' in IDBObjectStore.prototype
            ? yield n.i('getAll', e, 'readonly', t, r)
            : yield n.getAllMatching(e, { query: t, count: r })
        })()
      }
      getAllMatching(e, t = {}) {
        var r = this
        return babelHelpers.asyncToGenerator(function*() {
          return yield r.transaction([e], 'readonly', function(r, n) {
            const o = r[e],
              i = t.index ? o.index(t.index) : o,
              c = [],
              l = t.query || null,
              s = t.direction || 'next'
            i.openCursor(l, s).onsuccess = function(e) {
              const r = e.target.result
              if (r) {
                const { primaryKey: e, key: o, value: i } = r
                c.push(t.includeKeys ? { primaryKey: e, key: o, value: i } : i),
                  t.count && c.length >= t.count ? n(c) : r.continue()
              } else n(c)
            }
          })
        })()
      }
      transaction(e, t, r) {
        var n = this
        return babelHelpers.asyncToGenerator(function*() {
          return (
            yield n.open(),
            yield new Promise(function(o, i) {
              const c = n.o.transaction(e, t)
              ;(c.onerror = function(e) {
                return i(e.target.error)
              }),
                (c.onabort = function(e) {
                  return i(e.target.error)
                }),
                (c.oncomplete = function() {
                  return o()
                })
              const l = {}
              for (const t of e) l[t] = c.objectStore(t)
              r(
                l,
                function(e) {
                  return o(e)
                },
                function() {
                  i(new Error('The transaction was manually aborted')),
                    c.abort()
                }
              )
            })
          )
        })()
      }
      i(e, t, r, ...n) {
        var o = this
        return babelHelpers.asyncToGenerator(function*() {
          yield o.open()
          return yield o.transaction([t], r, function(r, o) {
            r[t][e](...n).onsuccess = function(e) {
              o(e.target.result)
            }
          })
        })()
      }
      e(e) {
        this.close()
      }
      close() {
        this.o && this.o.close()
      }
    }
    v.prototype.OPEN_TIMEOUT = 2e3
    const w = {
        prefix: 'workbox',
        suffix: self.registration.scope,
        googleAnalytics: 'googleAnalytics',
        precache: 'precache',
        runtime: 'runtime'
      },
      m = e => [w.prefix, e, w.suffix].filter(e => e.length > 0).join('-'),
      q = {
        updateDetails: e => {
          Object.keys(w).forEach(t => {
            void 0 !== e[t] && (w[t] = e[t])
          })
        },
        getGoogleAnalyticsName: e => e || m(w.googleAnalytics),
        getPrecacheName: e => e || m(w.precache),
        getRuntimeName: e => e || m(w.runtime)
      }
    var E = 'cacheDidUpdate',
      L = 'cacheWillUpdate',
      x = 'cachedResponseWillBeUsed',
      H = 'fetchDidFail',
      N = 'requestWillFetch',
      O = (e, t) => e.filter(e => t in e)
    const k = e => {
        const t = new URL(e, location)
        return t.origin === location.origin ? t.pathname : t.href
      },
      D = (() => {
        var e = babelHelpers.asyncToGenerator(function*({
          cacheName: e,
          request: t,
          response: r,
          event: n,
          plugins: o = []
        } = {}) {
          if (!r) throw new p('cache-put-with-no-response', { url: k(t.url) })
          let i = yield P({ request: t, response: r, event: n, plugins: o })
          if (!i) return
          const c = yield caches.open(e),
            l = O(o, E)
          let s = l.length > 0 ? yield R({ cacheName: e, request: t }) : null
          try {
            yield c.put(t, i)
          } catch (e) {
            throw ('QuotaExceededError' === e.name && (yield b()), e)
          }
          for (let r of l)
            yield r[E].call(r, {
              cacheName: e,
              request: t,
              event: n,
              oldResponse: s,
              newResponse: i
            })
        })
        return function() {
          return e.apply(this, arguments)
        }
      })(),
      R = ((A = babelHelpers.asyncToGenerator(function*({
        cacheName: e,
        request: t,
        event: r,
        matchOptions: n,
        plugins: o = []
      }) {
        let i = yield (yield caches.open(e)).match(t, n)
        for (let c of o)
          x in c &&
            (i = yield c[x].call(c, {
              cacheName: e,
              request: t,
              event: r,
              matchOptions: n,
              cachedResponse: i
            }))
        return i
      })),
      function(e) {
        return A.apply(this, arguments)
      })
    var A
    const P = ((W = babelHelpers.asyncToGenerator(function*({
      request: e,
      response: t,
      event: r,
      plugins: n
    }) {
      let o = t,
        i = !1
      for (let t of n)
        if (
          L in t &&
          ((i = !0),
          !(o = yield t[L].call(t, { request: e, response: o, event: r })))
        )
          break
      return i || (o = o.ok ? o : null), o || null
    })),
    function(e) {
      return W.apply(this, arguments)
    })
    var W
    const S = { put: D, match: R },
      _ = {
        fetch: (() => {
          var e = babelHelpers.asyncToGenerator(function*({
            request: e,
            fetchOptions: t,
            event: r,
            plugins: n = []
          }) {
            if (r && r.preloadResponse) {
              const e = yield r.preloadResponse
              if (e) return e
            }
            'string' == typeof e && (e = new Request(e))
            const o = O(n, H),
              i = o.length > 0 ? e.clone() : null
            try {
              for (let t of n)
                N in t &&
                  (e = yield t[N].call(t, { request: e.clone(), event: r }))
            } catch (e) {
              throw new p('plugin-error-request-will-fetch', { thrownError: e })
            }
            const c = e.clone()
            try {
              return yield fetch(e, t)
            } catch (e) {
              for (let t of o)
                yield t[H].call(t, {
                  error: e,
                  event: r,
                  originalRequest: i.clone(),
                  request: c.clone()
                })
              throw e
            }
          })
          return function(t) {
            return e.apply(this, arguments)
          }
        })()
      }
    var j = Object.freeze({
      DBWrapper: v,
      WorkboxError: p,
      assert: null,
      cacheNames: q,
      cacheWrapper: S,
      fetchWrapper: _,
      getFriendlyURL: k,
      logger: u
    })
    var B = new class {
      constructor() {
        try {
          self.workbox.v = self.workbox.v || {}
        } catch (e) {}
      }
      get cacheNames() {
        return {
          googleAnalytics: q.getGoogleAnalyticsName(),
          precache: q.getPrecacheName(),
          runtime: q.getRuntimeName()
        }
      }
      setCacheNameDetails(e) {
        q.updateDetails(e)
      }
      get logLevel() {
        return i()
      }
      setLogLevel(t) {
        if (t > e.silent || t < e.debug)
          throw new p('invalid-value', {
            paramName: 'logLevel',
            validValueDescription:
              "Please use a value from LOG_LEVELS, i.e 'logLevel = workbox.core.LOG_LEVELS.debug'.",
            value: t
          })
        o(t)
      }
    }()
    return Object.assign(B, {
      _private: j,
      LOG_LEVELS: e,
      registerQuotaErrorCallback: function(e) {
        g.add(e)
      }
    })
  })())

//# sourceMappingURL=workbox-core.prod.js.map
