;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    145: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'pageQuery', function() {
          return l
        })
      var a = n(7),
        r = n.n(a),
        o = n(0),
        i = n.n(o),
        c = n(153),
        s = n(154),
        u = (function(e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e = this.props.data.site.siteMetadata.title
              return i.a.createElement(
                c.a,
                { location: this.props.location, title: e },
                i.a.createElement(s.a, { title: '404: Not Found' }),
                i.a.createElement('h1', null, 'Not Found'),
                i.a.createElement(
                  'p',
                  null,
                  "You just hit a route that doesn't exist... the sadness."
                )
              )
            }),
            t
          )
        })(i.a.Component)
      t.default = u
      var l = '1097489062'
    },
    149: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'graphql', function() {
          return f
        }),
        n.d(t, 'StaticQueryContext', function() {
          return p
        }),
        n.d(t, 'StaticQuery', function() {
          return m
        })
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        c = n(148),
        s = n.n(c)
      n.d(t, 'Link', function() {
        return s.a
      }),
        n.d(t, 'withPrefix', function() {
          return c.withPrefix
        }),
        n.d(t, 'navigate', function() {
          return c.navigate
        }),
        n.d(t, 'push', function() {
          return c.push
        }),
        n.d(t, 'replace', function() {
          return c.replace
        }),
        n.d(t, 'navigateTo', function() {
          return c.navigateTo
        })
      var u = n(151),
        l = n.n(u)
      n.d(t, 'PageRenderer', function() {
        return l.a
      })
      var d = n(33)
      n.d(t, 'parsePath', function() {
        return d.a
      })
      var p = r.a.createContext({}),
        m = function(e) {
          return r.a.createElement(p.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function f() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      m.propTypes = {
        data: i.a.object,
        query: i.a.string.isRequired,
        render: i.a.func,
        children: i.a.func
      }
    },
    150: function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return s
      }),
        n.d(t, 'b', function() {
          return u
        })
      var a = n(163),
        r = n.n(a),
        o = n(164),
        i = n.n(o)
      ;(i.a.overrideThemeStyles = function() {
        return { 'a.gatsby-resp-image-link': { boxShadow: 'none' } }
      }),
        delete i.a.googleFonts
      var c = new r.a(i.a)
      var s = c.rhythm,
        u = c.scale
    },
    151: function(e, t, n) {
      var a
      e.exports = ((a = n(152)) && a.default) || a
    },
    152: function(e, t, n) {
      'use strict'
      n.r(t)
      n(32)
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        c = n(53),
        s = n(2),
        u = function(e) {
          var t = e.location,
            n = s.default.getResourcesForPathnameSync(t.pathname)
          return r.a.createElement(
            c.a,
            Object.assign({ location: t, pageResources: n }, n.json)
          )
        }
      ;(u.propTypes = {
        location: i.a.shape({ pathname: i.a.string.isRequired }).isRequired
      }),
        (t.default = u)
    },
    153: function(e, t, n) {
      'use strict'
      n(32)
      var a = n(7),
        r = n.n(a),
        o = n(0),
        i = n.n(o),
        c = n(149),
        s = n(150),
        u = (function(e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                n = t.location,
                a = t.title,
                r = t.children
              return (
                (e =
                  '/' === n.pathname
                    ? i.a.createElement(
                        'h1',
                        {
                          style: Object.assign({}, Object(s.b)(1.5), {
                            marginBottom: Object(s.a)(1.5),
                            marginTop: 0
                          })
                        },
                        i.a.createElement(
                          c.Link,
                          {
                            style: {
                              boxShadow: 'none',
                              textDecoration: 'none',
                              color: 'inherit'
                            },
                            to: '/'
                          },
                          a
                        )
                      )
                    : i.a.createElement(
                        'h3',
                        {
                          style: {
                            fontFamily: 'Montserrat, sans-serif',
                            marginTop: 0
                          }
                        },
                        i.a.createElement(
                          c.Link,
                          {
                            style: {
                              boxShadow: 'none',
                              textDecoration: 'none',
                              color: 'inherit'
                            },
                            to: '/'
                          },
                          a
                        )
                      )),
                i.a.createElement(
                  'div',
                  {
                    style: {
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: Object(s.a)(24),
                      padding: Object(s.a)(1.5) + ' ' + Object(s.a)(0.75)
                    }
                  },
                  i.a.createElement('header', null, e),
                  i.a.createElement('main', null, r),
                  i.a.createElement(
                    'footer',
                    {
                      style: {
                        marginTop: Object(s.a)(2.5),
                        paddingTop: Object(s.a)(1)
                      }
                    },
                    i.a.createElement(
                      'div',
                      { style: { float: 'right' } },
                      i.a.createElement(
                        'a',
                        {
                          href: '/rss.xml',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        },
                        'rss'
                      )
                    ),
                    i.a.createElement(
                      'a',
                      {
                        href: 'https://twitter.com/doregand',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      },
                      'twitter'
                    ),
                    ' ',
                    '•',
                    ' ',
                    i.a.createElement(
                      'a',
                      {
                        href: 'https://github.com/Oregand',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      },
                      'github'
                    ),
                    ' ',
                    '•',
                    ' ',
                    i.a.createElement(
                      'a',
                      {
                        href:
                          'https://stackoverflow.com/users/1788750/david-oregan',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      },
                      'stack overflow'
                    )
                  )
                )
              )
            }),
            t
          )
        })(i.a.Component)
      t.a = u
    },
    154: function(e, t, n) {
      'use strict'
      var a = n(155),
        r = n(0),
        o = n.n(r),
        i = n(4),
        c = n.n(i),
        s = n(165),
        u = n.n(s),
        l = n(149)
      function d(e) {
        var t = e.description,
          n = e.lang,
          r = e.meta,
          i = e.keywords,
          c = e.title
        return o.a.createElement(l.StaticQuery, {
          query: p,
          render: function(e) {
            var a = t || e.site.siteMetadata.description
            return o.a.createElement(u.a, {
              htmlAttributes: { lang: n },
              title: c,
              titleTemplate: '%s | ' + e.site.siteMetadata.title,
              meta: [
                { name: 'description', content: a },
                { property: 'og:title', content: c },
                { property: 'og:description', content: a },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:card', content: 'summary' },
                {
                  name: 'twitter:creator',
                  content: e.site.siteMetadata.author
                },
                { name: 'twitter:title', content: c },
                { name: 'twitter:description', content: a }
              ]
                .concat(
                  i.length > 0
                    ? { name: 'keywords', content: i.join(', ') }
                    : []
                )
                .concat(r)
            })
          },
          data: a
        })
      }
      ;(d.defaultProps = { lang: 'en', meta: [], keywords: [] }),
        (d.propTypes = {
          description: c.a.string,
          lang: c.a.string,
          meta: c.a.array,
          keywords: c.a.arrayOf(c.a.string),
          title: c.a.string.isRequired
        }),
        (t.a = d)
      var p = '1025518380'
    },
    155: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title: 'Get. Shit. Done.',
              description:
                "Personal blog by David O'Regan. I explain with words and code.",
              author: "David O'Regan"
            }
          }
        }
      }
    }
  }
])
//# sourceMappingURL=component---src-pages-404-js-b537d21d61d63246a6f8.js.map
