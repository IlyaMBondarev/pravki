(window.webpackJsonp = window.webpackJsonp || []).push([
	[0], {
		1: function (t, e, n) {
			"use strict";
			n.d(e, "i", (function () {
				return m
			})), n.d(e, "j", (function () {
				return x
			})), n.d(e, "a", (function () {
				return w
			})), n.d(e, "o", (function () {
				return v
			})), n.d(e, "e", (function () {
				return _
			})), n.d(e, "f", (function () {
				return y
			})), n.d(e, "c", (function () {
				return k
			})), n.d(e, "n", (function () {
				return C
			})), n.d(e, "h", (function () {
				return E
			})), n.d(e, "p", (function () {
				return $
			})), n.d(e, "k", (function () {
				return O
			})), n.d(e, "m", (function () {
				return z
			})), n.d(e, "d", (function () {
				return S
			})), n.d(e, "b", (function () {
				return R
			})), n.d(e, "g", (function () {
				return L
			})), n.d(e, "l", (function () {
				return T
			}));
			n(73), n(28);
			var r = n(23),
				o = (n(74), n(154), n(155), n(32)),
				c = (n(103), n(104), n(158), n(161), n(75), n(14), n(2)),
				l = (n(62), n(17), n(15), n(57), n(43), n(31)),
				d = n(0);

			function h(object, t) {
				var e = Object.keys(object);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(object);
					t && (n = n.filter((function (t) {
						return Object.getOwnPropertyDescriptor(object, t).enumerable
					}))), e.push.apply(e, n)
				}
				return e
			}

			function f(t) {
				for (var i = 1; i < arguments.length; i++) {
					var source = null != arguments[i] ? arguments[i] : {};
					i % 2 ? h(Object(source), !0).forEach((function (e) {
						Object(l.a)(t, e, source[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function (e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
					}))
				}
				return t
			}

			function m(t) {
				d.a.config.errorHandler && d.a.config.errorHandler(t)
			}

			function x(t) {
				return t.then((function (t) {
					return t.default || t
				}))
			}

			function w(t, e) {
				if (e || !t.options.__hasNuxtData) {
					var n = t.options._originDataFn || t.options.data || function () {
						return {}
					};
					t.options._originDataFn = n, t.options.data = function () {
						var data = n.call(this, this);
						return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), f({}, data, {}, e)
					}, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
				}
			}

			function v(t) {
				return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = d.a.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
			}

			function _(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
				return Array.prototype.concat.apply([], t.matched.map((function (t, r) {
					return Object.keys(t[n]).map((function (o) {
						return e && e.push(r), t[n][o]
					}))
				})))
			}

			function y(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return _(t, e, "instances")
			}

			function k(t, e) {
				return Array.prototype.concat.apply([], t.matched.map((function (t, n) {
					return Object.keys(t.components).reduce((function (r, o) {
						return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
					}), [])
				})))
			}

			function C(t, e) {
				return Promise.all(k(t, function () {
					var t = Object(c.a)(regeneratorRuntime.mark((function t(n, r, o, c) {
						return regeneratorRuntime.wrap((function (t) {
							for (; ;) switch (t.prev = t.next) {
								case 0:
									if ("function" != typeof n || n.options) {
										t.next = 4;
										break
									}
									return t.next = 3, n();
								case 3:
									n = t.sent;
								case 4:
									return o.components[c] = n = v(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
								case 6:
								case "end":
									return t.stop()
							}
						}), t)
					})));
					return function (e, n, r, o) {
						return t.apply(this, arguments)
					}
				}()))
			}

			function E(t) {
				return j.apply(this, arguments)
			}

			function j() {
				return (j = Object(c.a)(regeneratorRuntime.mark((function t(e) {
					return regeneratorRuntime.wrap((function (t) {
						for (; ;) switch (t.prev = t.next) {
							case 0:
								if (e) {
									t.next = 2;
									break
								}
								return t.abrupt("return");
							case 2:
								return t.next = 4, C(e);
							case 4:
								return t.abrupt("return", f({}, e, {
									meta: _(e).map((function (t, n) {
										return f({}, t.options.meta, {}, (e.matched[n] || {}).meta)
									}))
								}));
							case 5:
							case "end":
								return t.stop()
						}
					}), t)
				})))).apply(this, arguments)
			}

			function $(t, e) {
				return A.apply(this, arguments)
			}

			function A() {
				return (A = Object(c.a)(regeneratorRuntime.mark((function t(e, n) {
					var c, l, d, h;
					return regeneratorRuntime.wrap((function (t) {
						for (; ;) switch (t.prev = t.next) {
							case 0:
								return e.context || (e.context = {
									isStatic: !1,
									isDev: !1,
									isHMR: !1,
									app: e,
									store: e.store,
									payload: n.payload,
									error: n.error,
									base: "/",
									env: {
										baseUrl: "https://wordpress.bukvoed.ru/"
									}
								}, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function (t, path, n) {
									if (t) {
										e.context._redirected = !0;
										var r = Object(o.a)(path);
										if ("number" == typeof t || "undefined" !== r && "object" !== r || (n = path || {}, path = t, r = Object(o.a)(path), t = 302), "object" === r && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = I(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
										e.context.next({
											path: path,
											query: n,
											status: t
										})
									}
								}, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([E(n.route), E(n.from)]);
							case 3:
								c = t.sent, l = Object(r.a)(c, 2), d = l[0], h = l[1], n.route && (e.context.route = d), n.from && (e.context.from = h), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
							case 15:
							case "end":
								return t.stop()
						}
					}), t)
				})))).apply(this, arguments)
			}

			function O(t, e) {
				return !t.length || e._redirected || e._errored ? Promise.resolve() : z(t[0], e).then((function () {
					return O(t.slice(1), e)
				}))
			}

			function z(t, e) {
				var n;
				return (n = 2 === t.length ? new Promise((function (n) {
					t(e, (function (t, data) {
						t && e.error(t), n(data = data || {})
					}))
				})) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
			}

			function S(base, t) {
				var path = decodeURI(window.location.pathname);
				return "hash" === t ? window.location.hash.replace(/^#\//, "") : (base && 0 === path.indexOf(base) && (path = path.slice(base.length)), (path || "/") + window.location.search + window.location.hash)
			}

			function R(t, e) {
				return function (t, e) {
					for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(o.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", D(e)));
					return function (e, r) {
						for (var path = "", data = e || {}, o = (r || {}).pretty ? N : encodeURIComponent, c = 0; c < t.length; c++) {
							var l = t[c];
							if ("string" != typeof l) {
								var d = data[l.name || "pathMatch"],
									h = void 0;
								if (null == d) {
									if (l.optional) {
										l.partial && (path += l.prefix);
										continue
									}
									throw new TypeError('Expected "' + l.name + '" to be defined')
								}
								if (Array.isArray(d)) {
									if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
									if (0 === d.length) {
										if (l.optional) continue;
										throw new TypeError('Expected "' + l.name + '" to not be empty')
									}
									for (var f = 0; f < d.length; f++) {
										if (h = o(d[f]), !n[c].test(h)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(h) + "`");
										path += (0 === f ? l.prefix : l.delimiter) + h
									}
								} else {
									if (h = l.asterisk ? N(d, !0) : o(d), !n[c].test(h)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + h + '"');
									path += l.prefix + h
								}
							} else path += l
						}
						return path
					}
				}(function (t, e) {
					var n, r = [],
						o = 0,
						c = 0,
						path = "",
						l = e && e.delimiter || "/";
					for (; null != (n = P.exec(t));) {
						var d = n[0],
							h = n[1],
							f = n.index;
						if (path += t.slice(c, f), c = f + d.length, h) path += h[1];
						else {
							var m = t[c],
								x = n[2],
								w = n[3],
								v = n[4],
								_ = n[5],
								y = n[6],
								k = n[7];
							path && (r.push(path), path = "");
							var C = null != x && null != m && m !== x,
								E = "+" === y || "*" === y,
								j = "?" === y || "*" === y,
								$ = n[2] || l,
								pattern = v || _;
							r.push({
								name: w || o++,
								prefix: x || "",
								delimiter: $,
								optional: j,
								repeat: E,
								partial: C,
								asterisk: Boolean(k),
								pattern: pattern ? B(pattern) : k ? ".*" : "[^" + M($) + "]+?"
							})
						}
					}
					c < t.length && (path += t.substr(c));
					path && r.push(path);
					return r
				}(t, e), e)
			}

			function L(t, e) {
				var n = {},
					r = f({}, t, {}, e);
				for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
				return n
			}

			function T(t) {
				var e;
				if (t.message || "string" == typeof t) e = t.message || t;
				else try {
					e = JSON.stringify(t, null, 2)
				} catch (n) {
					e = "[".concat(t.constructor.name, "]")
				}
				return f({}, t, {
					message: e,
					statusCode: t.statusCode || t.status || t.response && t.response.status || 500
				})
			}
			window.onNuxtReadyCbs = [], window.onNuxtReady = function (t) {
				window.onNuxtReadyCbs.push(t)
			};
			var P = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

			function N(t, e) {
				var n = e ? /[?#]/g : /[/?#]/g;
				return encodeURI(t).replace(n, (function (t) {
					return "%" + t.charCodeAt(0).toString(16).toUpperCase()
				}))
			}

			function M(t) {
				return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
			}

			function B(t) {
				return t.replace(/([=!:$/()])/g, "\\$1")
			}

			function D(t) {
				return t && t.sensitive ? "" : "i"
			}

			function I(t, e) {
				var n, o = t.indexOf("://"); - 1 !== o ? (n = t.substring(0, o), t = t.substring(o + 3)) : t.startsWith("//") && (t = t.substring(2));
				var c, l = t.split("/"),
					d = (n ? n + "://" : "//") + l.shift(),
					path = l.filter(Boolean).join("/");
				if (2 === (l = path.split("#")).length) {
					var h = l,
						f = Object(r.a)(h, 2);
					path = f[0], c = f[1]
				}
				return d += path ? "/" + path : "", e && "{}" !== JSON.stringify(e) && (d += (2 === t.split("?").length ? "&" : "?") + function (t) {
					return Object.keys(t).sort().map((function (e) {
						var n = t[e];
						return null == n ? "" : Array.isArray(n) ? n.slice().map((function (t) {
							return [e, "=", t].join("")
						})).join("&") : e + "=" + n
					})).filter(Boolean).join("&")
				}(e)), d += c ? "#" + c : ""
			}
		},
		121: function (t, e, n) {
			t.exports = n(122)
		},
		122: function (t, e, n) {
			"use strict";
			n.r(e),
				function (t) {
					n(62), n(49), n(28);
					var e = n(32),
						r = (n(14), n(132), n(2)),
						o = (n(56), n(70), n(17), n(15), n(57), n(43), n(98), n(136), n(148), n(150), n(0)),
						c = n(114),
						l = n(82),
						d = n(1),
						h = n(16),
						f = n(61);
					o.a.component(f.a.name, f.a), o.a.component("NLink", f.a), t.fetch || (t.fetch = c.a);
					var m, x, w = [],
						v = window.__NUXT__ || {};
					Object.assign(o.a.config, {
						silent: !0,
						performance: !1
					});
					var _ = o.a.config.errorHandler || console.error;

					function y(t, e, n) {
						var r = function (component) {
							var t = function (component, t) {
								if (!component || !component.options || !component.options[t]) return {};
								var option = component.options[t];
								if ("function" == typeof option) {
									for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
									return option.apply(void 0, n)
								}
								return option
							}(component, "transition", e, n) || {};
							return "string" == typeof t ? {
								name: t
							} : t
						};
						return t.map((function (t) {
							var e = Object.assign({}, r(t));
							if (n && n.matched.length && n.matched[0].components.default) {
								var o = r(n.matched[0].components.default);
								Object.keys(o).filter((function (t) {
									return o[t] && t.toLowerCase().includes("leave")
								})).forEach((function (t) {
									e[t] = o[t]
								}))
							}
							return e
						}))
					}

					function k(t, e, n) {
						return C.apply(this, arguments)
					}

					function C() {
						return (C = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
							var o, c, l, h, f = this;
							return regeneratorRuntime.wrap((function (t) {
								for (; ;) switch (t.prev = t.next) {
									case 0:
										if (this._pathChanged = Boolean(m.nuxt.err) || n.path !== e.path, this._queryChanged = JSON.stringify(e.query) !== JSON.stringify(n.query), this._diffQuery = this._queryChanged ? Object(d.g)(e.query, n.query) : [], this._pathChanged && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 4, this._pathChanged || !this._queryChanged) {
											t.next = 11;
											break
										}
										return t.next = 8, Object(d.n)(e, (function (t, e) {
											return {
												Component: t,
												instance: e
											}
										}));
									case 8:
										o = t.sent, o.some((function (t) {
											var r = t.Component,
												o = t.instance,
												c = r.options.watchQuery;
											return !0 === c || (Array.isArray(c) ? c.some((function (t) {
												return f._diffQuery[t]
											})) : "function" == typeof c && c.apply(o, [e.query, n.query]))
										})) && this.$loading.start && !this.$loading.manual && this.$loading.start();
									case 11:
										r(), t.next = 25;
										break;
									case 14:
										if (t.prev = 14, t.t0 = t.catch(4), c = t.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, h = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(h)) {
											t.next = 22;
											break
										}
										return window.location.reload(!0), t.abrupt("return");
									case 22:
										this.error({
											statusCode: l,
											message: h
										}), this.$nuxt.$emit("routeChanged", e, n, c), r();
									case 25:
									case "end":
										return t.stop()
								}
							}), t, this, [
								[4, 14]
							])
						})))).apply(this, arguments)
					}

					function E(t, e) {
						return v.serverRendered && e && Object(d.a)(t, e), t._Ctor = t, t
					}

					function j(t) {
						var path = Object(d.d)(t.options.base, t.options.mode);
						return Object(d.c)(t.match(path), function () {
							var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, c) {
								var l;
								return regeneratorRuntime.wrap((function (t) {
									for (; ;) switch (t.prev = t.next) {
										case 0:
											if ("function" != typeof e || e.options) {
												t.next = 4;
												break
											}
											return t.next = 3, e();
										case 3:
											e = t.sent;
										case 4:
											return l = E(Object(d.o)(e), v.data ? v.data[c] : null), r.components[o] = l, t.abrupt("return", l);
										case 7:
										case "end":
											return t.stop()
									}
								}), t)
							})));
							return function (e, n, r, o, c) {
								return t.apply(this, arguments)
							}
						}())
					}

					function $(t, e, n) {
						var r = this,
							o = [],
							c = !1;
						if (void 0 !== n && (o = [], (n = Object(d.o)(n)).options.middleware && (o = o.concat(n.options.middleware)), t.forEach((function (t) {
							t.options.middleware && (o = o.concat(t.options.middleware))
						}))), o = o.map((function (t) {
							return "function" == typeof t ? t : ("function" != typeof l.a[t] && (c = !0, r.error({
								statusCode: 500,
								message: "Unknown middleware " + t
							})), l.a[t])
						})), !c) return Object(d.k)(o, e)
					}

					function A(t, e, n) {
						return O.apply(this, arguments)
					}

					function O() {
						return (O = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
							var o, c, l, f, x, v, _, k, C, E, j, A, O, z, S, R, L, T, P = this;
							return regeneratorRuntime.wrap((function (t) {
								for (; ;) switch (t.prev = t.next) {
									case 0:
										if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
											t.next = 2;
											break
										}
										return t.abrupt("return", r());
									case 2:
										return e === n ? w = [] : (o = [], w = Object(d.e)(n, o).map((function (t, i) {
											return Object(d.b)(n.matched[o[i]].path)(n.params)
										}))), c = !1, l = function (path) {
											n.path === path.path && P.$loading.finish && P.$loading.finish(), n.path !== path.path && P.$loading.pause && P.$loading.pause(), c || (c = !0, r(path))
										}, t.next = 7, Object(d.p)(m, {
											route: e,
											from: n,
											next: l.bind(this)
										});
									case 7:
										if (this._dateLastError = m.nuxt.dateErr, this._hadError = Boolean(m.nuxt.err), f = [], (x = Object(d.e)(e, f)).length) {
											t.next = 26;
											break
										}
										return t.next = 14, $.call(this, x, m.context);
									case 14:
										if (!c) {
											t.next = 16;
											break
										}
										return t.abrupt("return");
									case 16:
										return v = (h.a.options || h.a).layout, t.next = 19, this.loadLayout("function" == typeof v ? v.call(h.a, m.context) : v);
									case 19:
										return _ = t.sent, t.next = 22, $.call(this, x, m.context, _);
									case 22:
										if (!c) {
											t.next = 24;
											break
										}
										return t.abrupt("return");
									case 24:
										return m.context.error({
											statusCode: 404,
											message: "This page could not be found"
										}), t.abrupt("return", r());
									case 26:
										return x.forEach((function (t) {
											t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
										})), this.setTransitions(y(x, e, n)), t.prev = 28, t.next = 31, $.call(this, x, m.context);
									case 31:
										if (!c) {
											t.next = 33;
											break
										}
										return t.abrupt("return");
									case 33:
										if (!m.context._errored) {
											t.next = 35;
											break
										}
										return t.abrupt("return", r());
									case 35:
										return "function" == typeof (k = x[0].options.layout) && (k = k(m.context)), t.next = 39, this.loadLayout(k);
									case 39:
										return k = t.sent, t.next = 42, $.call(this, x, m.context, k);
									case 42:
										if (!c) {
											t.next = 44;
											break
										}
										return t.abrupt("return");
									case 44:
										if (!m.context._errored) {
											t.next = 46;
											break
										}
										return t.abrupt("return", r());
									case 46:
										C = !0, t.prev = 47, E = !0, j = !1, A = void 0, t.prev = 51, O = x[Symbol.iterator]();
									case 53:
										if (E = (z = O.next()).done) {
											t.next = 65;
											break
										}
										if ("function" == typeof (S = z.value).options.validate) {
											t.next = 57;
											break
										}
										return t.abrupt("continue", 62);
									case 57:
										return t.next = 59, S.options.validate(m.context);
									case 59:
										if (C = t.sent) {
											t.next = 62;
											break
										}
										return t.abrupt("break", 65);
									case 62:
										E = !0, t.next = 53;
										break;
									case 65:
										t.next = 71;
										break;
									case 67:
										t.prev = 67, t.t0 = t.catch(51), j = !0, A = t.t0;
									case 71:
										t.prev = 71, t.prev = 72, E || null == O.return || O.return();
									case 74:
										if (t.prev = 74, !j) {
											t.next = 77;
											break
										}
										throw A;
									case 77:
										return t.finish(74);
									case 78:
										return t.finish(71);
									case 79:
										t.next = 85;
										break;
									case 81:
										return t.prev = 81, t.t1 = t.catch(47), this.error({
											statusCode: t.t1.statusCode || "500",
											message: t.t1.message
										}), t.abrupt("return", r());
									case 85:
										if (C) {
											t.next = 88;
											break
										}
										return this.error({
											statusCode: 404,
											message: "This page could not be found"
										}), t.abrupt("return", r());
									case 88:
										return t.next = 90, Promise.all(x.map((function (t, i) {
											if (t._path = Object(d.b)(e.matched[f[i]].path)(e.params), t._dataRefresh = !1, P._pathChanged && P._queryChanged || t._path !== w[i]) t._dataRefresh = !0;
											else if (!P._pathChanged && P._queryChanged) {
												var r = t.options.watchQuery;
												!0 === r ? t._dataRefresh = !0 : Array.isArray(r) ? t._dataRefresh = r.some((function (t) {
													return P._diffQuery[t]
												})) : "function" == typeof r && (R || (R = Object(d.f)(e)), t._dataRefresh = r.apply(R[i], [e.query, n.query]))
											}
											if (P._hadError || !P._isMounted || t._dataRefresh) {
												var o = [],
													c = t.options.asyncData && "function" == typeof t.options.asyncData,
													l = Boolean(t.options.fetch),
													h = c && l ? 30 : 45;
												if (c) {
													var x = Object(d.m)(t.options.asyncData, m.context).then((function (e) {
														Object(d.a)(t, e), P.$loading.increase && P.$loading.increase(h)
													}));
													o.push(x)
												}
												if (P.$loading.manual = !1 === t.options.loading, l) {
													var p = t.options.fetch(m.context);
													p && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function (t) {
														P.$loading.increase && P.$loading.increase(h)
													})), o.push(p)
												}
												return Promise.all(o)
											}
										})));
									case 90:
										c || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), r()), t.next = 107;
										break;
									case 93:
										if (t.prev = 93, t.t2 = t.catch(28), "ERR_REDIRECT" !== (L = t.t2 || {}).message) {
											t.next = 98;
											break
										}
										return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, L));
									case 98:
										return w = [], Object(d.i)(L), "function" == typeof (T = (h.a.options || h.a).layout) && (T = T(m.context)), t.next = 104, this.loadLayout(T);
									case 104:
										this.error(L), this.$nuxt.$emit("routeChanged", e, n, L), r();
									case 107:
									case "end":
										return t.stop()
								}
							}), t, this, [
								[28, 93],
								[47, 81],
								[51, 67, 71, 79],
								[72, , 74, 78]
							])
						})))).apply(this, arguments)
					}

					function z(t, n) {
						Object(d.c)(t, (function (t, n, r, c) {
							return "object" !== Object(e.a)(t) || t.options || ((t = o.a.extend(t))._Ctor = t, r.components[c] = t), t
						}))
					}

					function S(t) {
						this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error();
						var e = this.$options.nuxt.err ? (h.a.options || h.a).layout : t.matched[0].components.default.options.layout;
						"function" == typeof e && (e = e(m.context)), this.setLayout(e)
					}

					function R(t, e) {
						var n = this;
						if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
							var r = Object(d.f)(t),
								c = Object(d.e)(t);
							o.a.nextTick((function () {
								r.forEach((function (t, i) {
									if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
										var e = t.constructor.options.data.call(t);
										for (var n in e) o.a.set(t.$data, n, e[n]);
										window.$nuxt.$nextTick((function () {
											window.$nuxt.$emit("triggerScroll")
										}))
									}
								})), S.call(n, t)
							}))
						}
					}

					function L(t) {
						window.onNuxtReadyCbs.forEach((function (e) {
							"function" == typeof e && e(t)
						})), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), x.afterEach((function (e, n) {
							o.a.nextTick((function () {
								return t.$nuxt.$emit("routeChanged", e, n)
							}))
						}))
					}

					function T() {
						return (T = Object(r.a)(regeneratorRuntime.mark((function t(e) {
							var n, r, c, l, h;
							return regeneratorRuntime.wrap((function (t) {
								for (; ;) switch (t.prev = t.next) {
									case 0:
										return m = e.app, x = e.router, e.store, n = new o.a(m), r = v.layout || "default", t.next = 7, n.loadLayout(r);
									case 7:
										return n.setLayout(r), c = function () {
											n.$mount("#__nuxt"), x.afterEach(z), x.afterEach(R.bind(n)), o.a.nextTick((function () {
												L(n)
											}))
										}, t.next = 11, Promise.all(j(x));
									case 11:
										if (l = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), l.length && (n.setTransitions(y(l, x.currentRoute)), w = x.currentRoute.matched.map((function (t) {
											return Object(d.b)(t.path)(x.currentRoute.params)
										}))), n.$loading = {}, v.error && n.error(v.error), x.beforeEach(k.bind(n)), x.beforeEach(A.bind(n)), !v.serverRendered) {
											t.next = 21;
											break
										}
										return c(), t.abrupt("return");
									case 21:
										h = function () {
											z(x.currentRoute, x.currentRoute), S.call(n, x.currentRoute), c()
										}, A.call(n, x.currentRoute, x.currentRoute, (function (path) {
											if (path) {
												var t = x.afterEach((function (e, n) {
													t(), h()
												}));
												x.push(path, void 0, (function (t) {
													t && _(t)
												}))
											} else h()
										}));
									case 23:
									case "end":
										return t.stop()
								}
							}), t)
						})))).apply(this, arguments)
					}
					Object(h.b)().then((function (t) {
						return T.apply(this, arguments)
					})).catch(_)
				}.call(this, n(24))
		},
		151: function (t, e, n) {
			"use strict";
			n.r(e), e.default = function (t) {
				if (!t.route.matched.length > 0) return t.redirect("/404")
			}
		},
		16: function (t, e, n) {
			"use strict";
			n.d(e, "b", (function () {
				return bt
			})), n.d(e, "a", (function () {
				return O
			}));
			n(14), n(73), n(28), n(17), n(15), n(57);
			var r = n(2),
				o = n(31),
				c = (n(43), n(0)),
				l = n(115),
				d = n(83),
				h = n.n(d),
				f = n(34),
				m = n.n(f),
				x = n(44),
				w = n(1);
			"scrollRestoration" in window.history && (window.history.scrollRestoration = "manual", window.addEventListener("beforeunload", (function () {
				window.history.scrollRestoration = "auto"
			})), window.addEventListener("load", (function () {
				window.history.scrollRestoration = "manual"
			})));
			var v = function () { },
				_ = x.a.prototype.push;
			x.a.prototype.push = function (t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
					n = arguments.length > 2 ? arguments[2] : void 0;
				return _.call(this, t, e, n)
			}, c.a.use(x.a);
			var y = {
				mode: "history",
				base: decodeURI("/"),
				linkActiveClass: "nuxt-link-active",
				linkExactActiveClass: "nuxt-link-exact-active",
				scrollBehavior: function (t, e, n) {
					var r = !1,
						o = Object(w.e)(t);
					(o.length < 2 && o.every((function (t) {
						return !1 !== t.options.scrollToTop
					})) || o.some((function (t) {
						return t.options.scrollToTop
					}))) && (r = {
						x: 0,
						y: 0
					}), n && (r = n);
					var c = window.$nuxt;
					return t.path === e.path && t.hash !== e.hash && c.$nextTick((function () {
						return c.$emit("triggerScroll")
					})), new Promise((function (e) {
						c.$once("triggerScroll", (function () {
							if (t.hash) {
								var n = t.hash;
								void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
								try {
									document.querySelector(n) && (r = {
										selector: n
									})
								} catch (t) {
									console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
								}
							}
							e(r)
						}))
					}))
				},
				routes: [{
					path: "/404",
					component: function () {
						return Object(w.j)(n.e(2).then(n.bind(null, 207)))
					},
					name: "404"
				}, {
					path: "/about",
					component: function () {
						return Object(w.j)(n.e(4).then(n.bind(null, 208)))
					},
					name: "about"
				}, {
					path: "/contact",
					component: function () {
						return Object(w.j)(n.e(5).then(n.bind(null, 209)))
					},
					name: "contact"
				}, {
					path: "/",
					component: function () {
						return Object(w.j)(n.e(6).then(n.bind(null, 210)))
					},
					name: "index"
				}, {
					path: "/:slug",
					component: function () {
						return Object(w.j)(n.e(3).then(n.bind(null, 211)))
					},
					name: "slug"
				}],
				fallback: !1
			};

			function k() {
				return new x.a(y)
			}
			var C = {
				name: "NuxtChild",
				functional: !0,
				props: {
					nuxtChildKey: {
						type: String,
						default: ""
					},
					keepAlive: Boolean,
					keepAliveProps: {
						type: Object,
						default: void 0
					}
				},
				render: function (t, e) {
					var n = e.parent,
						data = e.data,
						r = e.props;
					data.nuxtChild = !0;
					for (var o = n, c = n.$nuxt.nuxt.transitions, l = n.$nuxt.nuxt.defaultTransition, d = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && d++, n = n.$parent;
					data.nuxtChildDepth = d;
					var h = c[d] || l,
						f = {};
					E.forEach((function (t) {
						void 0 !== h[t] && (f[t] = h[t])
					}));
					var m = {};
					j.forEach((function (t) {
						"function" == typeof h[t] && (m[t] = h[t].bind(o))
					}));
					var x = m.beforeEnter;
					if (m.beforeEnter = function (t) {
						if (window.$nuxt.$nextTick((function () {
							window.$nuxt.$emit("triggerScroll")
						})), x) return x.call(o, t)
					}, !1 === h.css) {
						var w = m.leave;
						(!w || w.length < 2) && (m.leave = function (t, e) {
							w && w.call(o, t), o.$nextTick(e)
						})
					}
					var v = t("routerView", data);
					return r.keepAlive && (v = t("keep-alive", {
						props: r.keepAliveProps
					}, [v])), t("transition", {
						props: f,
						on: m
					}, [v])
				}
			},
				E = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
				j = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
				$ = {
					name: "NuxtError",
					props: {
						error: {
							type: Object,
							default: null
						}
					},
					computed: {
						statusCode: function () {
							return this.error && this.error.statusCode || 500
						},
						message: function () {
							return this.error.message || "Error"
						}
					},
					head: function () {
						return {
							title: this.message,
							meta: [{
								name: "viewport",
								content: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
							}]
						}
					}
				},
				A = (n(165), n(9)),
				O = Object(A.a)($, (function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "__nuxt-error-page"
					}, [n("div", {
						staticClass: "error"
					}, [n("svg", {
						attrs: {
							xmlns: "http://www.w3.org/2000/svg",
							width: "90",
							height: "90",
							fill: "#DBE1EC",
							viewBox: "0 0 48 48"
						}
					}, [n("path", {
						attrs: {
							d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
						}
					})]), t._v(" "), n("div", {
						staticClass: "title"
					}, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? n("p", {
						staticClass: "description"
					}, [n("NuxtLink", {
						staticClass: "error-link",
						attrs: {
							to: "/"
						}
					}, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
				}), [function () {
					var t = this.$createElement,
						e = this._self._c || t;
					return e("div", {
						staticClass: "logo"
					}, [e("a", {
						attrs: {
							href: "https://nuxtjs.org",
							target: "_blank",
							rel: "noopener"
						}
					}, [this._v("Nuxt.js")])])
				}], !1, null, null, null).exports,
				z = (n(103), n(104), n(75), n(23)),
				S = {
					name: "Nuxt",
					components: {
						NuxtChild: C,
						NuxtError: O
					},
					props: {
						nuxtChildKey: {
							type: String,
							default: void 0
						},
						keepAlive: Boolean,
						keepAliveProps: {
							type: Object,
							default: void 0
						},
						name: {
							type: String,
							default: "default"
						}
					},
					errorCaptured: function (t) {
						this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
					},
					computed: {
						routerViewKey: function () {
							if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(w.b)(this.$route.matched[0].path)(this.$route.params);
							var t = Object(z.a)(this.$route.matched, 1)[0];
							if (!t) return this.$route.path;
							var e = t.components.default;
							if (e && e.options) {
								var n = e.options;
								if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
							}
							return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
						}
					},
					beforeCreate: function () {
						c.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
					},
					render: function (t) {
						var e = this;
						return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function () {
							return e.errorFromNuxtError = !1
						})), t("div", {}, [t("h2", "An error occured while showing the error page"), t("p", "Unfortunately an error occured and while showing the error page another error occured"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
							props: {
								to: "/"
							}
						}, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function () {
							return e.displayingNuxtError = !1
						})), t(O, {
							props: {
								error: this.nuxt.err
							}
						})) : t("NuxtChild", {
							key: this.routerViewKey,
							props: this.$props
						})
					}
				},
				R = (n(62), {
					name: "NuxtLoading",
					data: function () {
						return {
							percent: 0,
							show: !1,
							canSucceed: !0,
							reversed: !1,
							skipTimerCount: 0,
							rtl: !1,
							throttle: 200,
							duration: 5e3,
							continuous: !1
						}
					},
					computed: {
						left: function () {
							return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
						}
					},
					beforeDestroy: function () {
						this.clear()
					},
					methods: {
						clear: function () {
							clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
						},
						start: function () {
							var t = this;
							return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function () {
								return t.startTimer()
							}), this.throttle) : this.startTimer(), this
						},
						set: function (t) {
							return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
						},
						get: function () {
							return this.percent
						},
						increase: function (t) {
							return this.percent = Math.min(100, Math.floor(this.percent + t)), this
						},
						decrease: function (t) {
							return this.percent = Math.max(0, Math.floor(this.percent - t)), this
						},
						pause: function () {
							return clearInterval(this._timer), this
						},
						resume: function () {
							return this.startTimer(), this
						},
						finish: function () {
							return this.percent = this.reversed ? 0 : 100, this.hide(), this
						},
						hide: function () {
							var t = this;
							return this.clear(), setTimeout((function () {
								t.show = !1, t.$nextTick((function () {
									t.percent = 0, t.reversed = !1
								}))
							}), 500), this
						},
						fail: function () {
							return this.canSucceed = !1, this
						},
						startTimer: function () {
							var t = this;
							this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function () {
								t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
							}), 100)
						}
					},
					render: function (t) {
						var e = t(!1);
						return this.show && (e = t("div", {
							staticClass: "nuxt-progress",
							class: {
								"nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
							},
							style: {
								width: this.percent + "%",
								left: this.left
							}
						})), e
					}
				}),
				L = (n(167), Object(A.a)(R, void 0, void 0, !1, null, null, null).exports),
				T = (n(169), n(171), n(183), n(120), {
					components: {
						PerfectScrollbar: n(84).PerfectScrollbar
					},
					name: "Services",
					data: function () {
						return {
							uslugiActive: !1,
							clientWidth: "",
							swiperOptions: {
								slidesPerView: 1,
								centeredSlides: !0,
								spaceBetween: 10,
								pagination: {
									el: ".swiper-pagination",
									clickable: !0
								},
								autoplay: !0
							},
							statusSlider: null,
							statusScrolUslugi: null,
							blockHeightUslugi: 0,
							calcSlider: 0
						}
					},
					watch: {
						$route: function () {
							this.uslugiActive = !1, document.body.classList.remove("overflow")
						}
					},
					methods: {
						setClientWidth: function () {
							this.clientWidth = document.documentElement.clientWidth
						},
						scrolUslugi: function () {
							this.statusScrolUslugi = document.documentElement.clientHeight > 750 && document.documentElement.clientWidth >= 1366
						},
						setHeightUslugi: function () {
							this.blockHeightUslugi = this.$refs.heightTitleUslugi.clientHeight + this.$refs.swiper.clientHeight
						},
						activeSlider: function () {
							this.statusSlider = document.documentElement.clientWidth < 750
						},
						closeUslugi: function () {
							this.uslugiActive = !this.uslugiActive, document.body.classList.toggle("overflow")
						}
					},
					mounted: function () {
						this.$nextTick((function () {
							window.addEventListener("resize", this.setClientWidth), this.setClientWidth(), window.addEventListener("resize", this.activeSlider), this.activeSlider(), window.addEventListener("resize", this.setHeightUslugi), this.setHeightUslugi(), window.addEventListener("resize", this.scrolUslugi), this.scrolUslugi()
						}))
					},
					computed: {
						eagleActive: function () {
							return "index" == this.$route.name
						},
						sliders: function () {
							for (var t = [], e = 0, n = Object.entries(this.$store.state.general.data.slider); e < n.length; e++) {
								var r = Object(z.a)(n[e], 2),
									o = r[0],
									c = r[1];
								t[o] = {
									title: c.title,
									subtitle: c.subtitle,
									price: c.description
								}
							}
							return t
						}
					}
				}),
				P = Object(A.a)(T, (function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						class: "index" == t.$route.name && t.clientWidth > 1024 ? "services active" : "services"
					}, [n("div", {
						ref: "heightTitleUslugi",
						staticClass: "services--title",
						on: {
							click: t.closeUslugi
						}
					}, [t._v("Наши Услуги")]), t._v(" "), t.statusScrolUslugi ? n("div", {
						staticClass: "services--wrap",
						class: {
							active: t.uslugiActive
						}
					}, t._l(t.$store.state.services.pagesUslugi, (function (e, r) {
						return n("n-link", {
							key: r,
							staticClass: "service",
							attrs: {
								to: "/" + e.slug
							},
							on: {
								click: function (e) {
									t.uslugiActiv = !1
								}
							}
						}, [n("div", {
							staticClass: "wrap first"
						}, [n("div", {
							staticClass: "service__marker"
						})]), t._v(" "), n("div", {
							staticClass: "service__title",
							domProps: {
								innerHTML: t._s(e.title.rendered.replace(" | ", "<br>"))
							}
						})])
					})), 1) : n("perfect-scrollbar", {
						class: {
							active: t.uslugiActive
						},
						style: "height: calc( 100% - " + t.blockHeightUslugi + "px);"
					}, [n("div", {
						staticClass: "services--wrap"
					}, t._l(t.$store.state.services.pagesUslugi, (function (e, r) {
						return n("n-link", {
							key: r,
							staticClass: "service",
							attrs: {
								to: "/" + e.slug
							},
							on: {
								click: function (e) {
									t.uslugiActiv = !1
								}
							}
						}, [n("div", {
							staticClass: "wrap first"
						}, [n("div", {
							staticClass: "service__marker"
						})]), t._v(" "), n("div", {
							staticClass: "service__title",
							domProps: {
								innerHTML: t._s(e.title.rendered.replace(" | ", "<br>"))
							}
						})])
					})), 1)]), t._v(" "), n("div", {
						directives: [{
							name: "swiper",
							rawName: "v-swiper:mySwiper",
							value: t.swiperOptions,
							expression: "swiperOptions",
							arg: "mySwiper"
						}],
						ref: "swiper",
						staticClass: "services--slider swi"
					}, [n("div", {
						staticClass: "swiper-wrapper"
					}, t._l(t.sliders, (function (e, r) {
						return n("div", {
							key: r,
							staticClass: "swiper-slide",
							attrs: {
								"data-swiper-autoplay": t.$store.state.general.data.sliderInterval
							}
						}, [n("div", {
							staticClass: "title"
						}, [n("span", [t._v(t._s(e.title))]), t._v("\n            " + t._s(e.subtitle) + "\n          ")]), t._v(" "), n("div", {
							staticClass: "price"
						}, [t._v(t._s(e.price))]), t._v(" "), n("div", {
							staticClass: "quantity"
						}, [n("span", {
							staticClass: "current"
						}, [t._v(t._s(r < 9 ? "0" + (r + 1) : r + 1))]), t._v("/\n            "), n("span", {
							staticClass: "all"
						}, [t._v(t._s(t.sliders.length < 10 ? "0" + t.sliders.length : t.sliders.length))])])])
					})), 0), t._v(" "), n("div", {
						staticClass: "swiper-pagination swiper-pagination-bullets"
					})])], 1)
				}), [], !1, null, "17a6f4c6", null).exports,
				N = (n(74), n(56), n(70), {
					name: "Navigation",
					data: function () {
						return {
							menuOpen: !1
						}
					},
					computed: {
						activeLink: function () {
							return this.$route.path.split("/").includes(this.$route.params.slug)
						},
						options: function () {
							return this.$store.state.options.data
						},
						general: function () {
							return this.$store.state.general.data
						},
						nav: function () {
							var nav = [{
								title: this.$store.state.pages.data[3].title.rendered,
								link: "/"
							}, {
								title: this.$store.state.pages.data[2].title.rendered,
								link: "/" + this.$store.state.services.pagesUslugi[0].slug
							}, {
								title: this.$store.state.pages.data[1].title.rendered,
								link: "/about"
							}, {
								title: this.$store.state.pages.data[0].title.rendered,
								link: "/contact"
							}];
							return nav
						}
					}
				}),
				M = Object(A.a)(N, (function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "nav",
						class: {
							active: t.$attrs.menu
						}
					}, [n("div", {
						staticClass: "close-menu",
						on: {
							click: function (e) {
								return t.$emit("closeMenu")
							}
						}
					}, [n("svg", {
						staticClass: "close",
						staticStyle: {
							"enable-background": "new 2.2 191.99 409.81 409.81"
						},
						attrs: {
							version: "1.1",
							id: "Capa_1",
							xmlns: "http://www.w3.org/2000/svg",
							"xmlns:xlink": "http://www.w3.org/1999/xlink",
							x: "0px",
							y: "0px",
							viewBox: "2.2 191.99 409.81 409.81",
							"xml:space": "preserve"
						}
					}, [n("path", {
						attrs: {
							d: "M7.2,596.8c6.66,6.66,17.47,6.66,24.13,0L207,421.13L382.67,596.8c6.78,6.55,17.58,6.36,24.13-0.42\n\tc6.39-6.61,6.39-17.1,0-23.71L231.13,397L406.8,221.33c6.78-6.55,6.97-17.35,0.42-24.13s-17.35-6.97-24.13-0.42\n\tc-0.14,0.14-0.28,0.28-0.42,0.42L207,372.87L31.33,197.2c-6.78-6.55-17.58-6.36-24.13,0.42c-6.39,6.61-6.39,17.1,0,23.71L182.87,397\n\tL7.2,572.67C0.54,579.33,0.54,590.13,7.2,596.8z"
						}
					})])]), t._v(" "), n("div", {
						staticClass: "menu"
					}, [n("div", {
						staticClass: "menu__wrap"
					}, t._l(t.nav, (function (e, r) {
						return n("n-link", {
							key: r,
							class: 1 === r && t.activeLink ? "menu--section is-active" : "menu--section",
							attrs: {
								to: e.link,
								exact: !r
							}
						}, [n("div", {
							staticClass: "menu--section__marker"
						}), t._v(" "), n("div", {
							staticClass: "menu--section__title"
						}, [t._v(t._s(e.title))])])
					})), 1)]), t._v(" "), n("div", {
						staticClass: "consultation"
					}, [n("div", {
						staticClass: "consultation__phone"
					}, [n("a", {
						attrs: {
							href: "tel:" + t.general.lawyerPhone
						}
					}, [n("img", {
						attrs: {
							src: "/img/icn-call1.png",
							alt: ""
						}
					})]), t._v(" "), n("div", {
						staticClass: "text-info"
					}, [n("div", {
						staticClass: "title"
					}, [t._v("Бесплатная консультация")]), t._v(" "), n("div", {
						staticClass: "phone"
					}, [t._v("\n                            юриста\n                            "), n("a", {
						attrs: {
							href: "tel:" + t.general.lawyerPhone
						}
					}, [t._v(t._s(t.general.lawyerPhone))])])])]), t._v(" "), n("div", {
						staticClass: "consultation__phone"
					}, [n("a", {
						attrs: {
							href: "tel:" + t.general.bookerPhone
						}
					}, [n("img", {
						attrs: {
							src: "/img/icn-call2.png",
							alt: ""
						}
					})]), t._v(" "), n("div", {
						staticClass: "text-info"
					}, [n("div", {
						staticClass: "title"
					}, [t._v("Бесплатная консультация")]), t._v(" "), n("div", {
						staticClass: "phone"
					}, [t._v("\n                            бухгалтера\n                            "), n("a", {
						attrs: {
							href: "tel:" + t.general.bookerPhone
						}
					}, [t._v(t._s(t.general.bookerPhone))])])])])]), t._v(" "), n("div", {
						staticClass: "info"
					}, [n("div", {
						staticClass: "address"
					}, [n("div", {
						staticClass: "address__street"
					}, [t._v(t._s(t.options.address))]), t._v(" "), n("a", {
						staticClass: "address__mail",
						attrs: {
							href: "mailto:" + t.options.email
						}
					}, [n("img", {
						attrs: {
							src: "/img/icn-mail.png",
							alt: "mail"
						}
					}), t._v(t._s(t.options.email) + "\n                    ")]), t._v(" "), n("div", {
						staticClass: "address__metro"
					}, [n("img", {
						attrs: {
							src: "/img/icn-metro.png",
							alt: "metro"
						}
					}), t._v(t._s(t.options.metro) + "\n                    ")])]), t._v(" "), n("div", {
						staticClass: "contacts"
					}, [n("div", {
						staticClass: "contacts__phone"
					}, [t._v("Правовое управление " + t._s(t.options.legalPhone))]), t._v(" "), n("div", {
						staticClass: "contacts__phone"
					}, [t._v("Финансовое управление " + t._s(t.options.financialPhone))])])])])
				}), [], !1, null, "60d3073c", null).exports,
				B = {
					middleware: "errorRedirect",
					components: {
						Navigation: M,
						Services: P
					},
					data: function () {
						return {
							status: !1,
							statusContent: ""
						}
					},
					head: function () {
						return {
							title: this.$store.state.options.data.site_title,
							meta: [{
								hid: "description",
								name: "description",
								content: this.$store.state.options.data.site_description
							}]
						}
					},
					watch: {
						$route: function () {
							this.status = !1, document.body.classList.remove("overflow")
						}
					},
					computed: {
						bgImage: function () {
							return "index" == this.$route.name ? "/img/bg-main-test.jpg" : "/img/bg-inner.jpg"
						},
						eagleImage: function () {
							return "index" == this.$route.name ? "/img/img-eagle-main.png" : "/img/img-eagle-inner.png"
						},
						options: function () {
							return this.$store.state.options.data
						}
					},
					methods: {
						contentHeight: function () {
							this.statusContent = window.innerWidth < 1365 && window.innerHeight < 1e3 ? this.statusContent = "height:100%;" : this.statusContent = ""
						},
						openMenu: function () {
							this.status = !0, document.body.classList.add("overflow")
						},
						closeMenu: function () {
							this.status = !1, document.body.classList.remove("overflow")
						}
					},
					mounted: function () {
						this.$nextTick((function () {
							window.addEventListener("resize", this.contentHeight), this.contentHeight()
						}))
					}
				},
				D = (n(186), {
					name: "errorPage",
					components: {
						Navigation: M
					},
					data: function () {
						return {
							status: !1
						}
					},
					watch: {
						$route: function () {
							this.status = !1, document.body.classList.remove("overflow")
						}
					},
					created: function () {
						this.$nuxt.error({
							statusCode: 404
						})
					},
					computed: {
						options: function () {
							return this.$store.state.options.data
						}
					},
					methods: {
						openMenu: function () {
							this.status = !0, document.body.classList.add("overflow")
						},
						closeMenu: function () {
							this.status = !1, document.body.classList.remove("overflow")
						}
					}
				}),
				I = {
					_default: Object(A.a)(B, (function () {
						var t = this,
							e = t.$createElement,
							n = t._self._c || e;
						return n("div", {
							staticClass: "container",
							style: "background-image: url(" + t.bgImage + ")"
						}, [n("header", [n("div", {
							staticClass: "burger",
							on: {
								click: t.openMenu
							}
						}, [n("svg", {
							staticClass: "open",
							staticStyle: {
								"enable-background": "new 0 0 253.87 173.99"
							},
							attrs: {
								xmlns: "http://www.w3.org/2000/svg",
								"xmlns:xlink": "http://www.w3.org/1999/xlink",
								version: "1.1",
								id: "Слой_1",
								x: "0px",
								y: "0px",
								viewBox: "0 0 253.87 173.99",
								"xml:space": "preserve"
							}
						}, [n("path", {
							attrs: {
								d: "M245.93,19.25c4.38,0,7.93-4.31,7.93-9.62c0-5.31-3.55-9.63-7.93-9.63l-238,0C3.56,0,0,4.31,0,9.63  c0,5.31,3.56,9.62,7.93,9.62H245.93L245.93,19.25z M245.93,19.25"
							}
						}), t._v(" "), n("path", {
							attrs: {
								d: "M6.75,77.37C3.03,77.37,0,81.68,0,86.99c0,5.31,3.03,9.63,6.75,9.63h202.51c3.73,0,6.75-4.31,6.75-9.63  c0-5.31-3.02-9.62-6.75-9.62H6.75L6.75,77.37z M6.75,77.37"
							}
						}), t._v(" "), n("path", {
							attrs: {
								d: "M7.93,154.74c-4.38,0-7.93,4.31-7.93,9.62c0,5.31,3.56,9.63,7.93,9.63H166.6c4.38,0,7.93-4.31,7.93-9.63  c0-5.31-3.56-9.62-7.93-9.62H7.93L7.93,154.74z M7.93,154.74"
							}
						})])]), t._v(" "), n("a", {
							staticClass: "logo",
							attrs: {
								href: "/"
							}
						}, [n("img", {
							attrs: {
								src: t.options.logo.url,
								alt: t.options.logo.alt
							}
						})]), t._v(" "), n("div", {
							staticClass: "address"
						}, [n("div", {
							staticClass: "address__street"
						}, [t._v(t._s(t.options.address))]), t._v(" "), n("a", {
							staticClass: "address__mail",
							attrs: {
								href: "mailto:" + t.options.email
							}
						}, [n("img", {
							attrs: {
								src: "/img/icn-mail.png",
								alt: "mail"
							}
						}), t._v(t._s(t.options.email) + "\n            ")]), t._v(" "), n("div", {
							staticClass: "address__metro"
						}, [n("img", {
							attrs: {
								src: "/img/icn-metro.png",
								alt: "metro"
							}
						}), t._v(t._s(t.options.metro) + "\n            ")])]), t._v(" "), n("div", {
							staticClass: "contacts"
						}, [n("div", {
							staticClass: "contacts__phone"
						}, [t._v("Правовое управление " + t._s(t.options.legalPhone))]), t._v(" "), n("div", {
							staticClass: "contacts__phone"
						}, [t._v("Финансовое управление " + t._s(t.options.financialPhone))])])]), t._v(" "), n("div", {
							staticClass: "content",
							style: "" + t.statusContent
						}, [n("Navigation", {
							attrs: {
								menu: t.status
							},
							on: {
								closeMenu: t.closeMenu
							}
						}), t._v(" "), n("nuxt"), t._v(" "), n("Services"), t._v(" "), n("img", {
							staticClass: "eagle",
							attrs: {
								src: t.eagleImage,
								alt: "eagle"
							}
						})], 1), t._v(" "), n("footer", [n("div", {
							staticClass: "logo footer-element"
						}, [n("img", {
							attrs: {
								src: t.options.logoN1.url,
								alt: t.options.logoN1.alt
							}
						})]), t._v(" "), n("div", {
							staticClass: "bukvoed footer-element"
						}, [n("img", {
							attrs: {
								src: t.options.logoN2.url,
								alt: t.options.logoN2.alt
							}
						})]), t._v(" "), n("div", {
							staticClass: "copy-paste footer-element"
						}, [t._v(t._s(t.options.text))]), t._v(" "), t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), n("div", {
							staticClass: "years footer-element",
							domProps: {
								innerHTML: t._s(t.options.copyright)
							}
						}), t._v(" "), n("div", {
							staticClass: "copy-paste-tablet"
						}, [t._v(t._s(t.options.text))]), t._v(" "), t._m(3)])])
					}), [function () {
						var t = this.$createElement,
							e = this._self._c || t;
						return e("div", {
							staticClass: "designer footer-element"
						}, [e("div", {
							staticClass: "title"
						}, [this._v("Дизайн сайта")]), this._v(" "), e("a", {
							staticClass: "logo",
							attrs: {
								href: "http://www.olesya-design.ru/"
							}
						}, [e("img", {
							attrs: {
								src: "/img/icn-logo-designer.png",
								alt: ""
							}
						})])])
					}, function () {
						var t = this.$createElement,
							e = this._self._c || t;
						return e("div", {
							staticClass: "developer footer-element"
						}, [e("div", {
							staticClass: "title"
						}, [this._v("Разработка сайта")]), this._v(" "), e("a", {
							staticClass: "logo",
							attrs: {
								href: "https://rocketcompany.website/"
							}
						}, [e("img", {
							attrs: {
								src: "/img/icn-rocket-company.png",
								alt: "RocketCompany"
							}
						})])])
					}, function () {
						var t = this.$createElement,
							e = this._self._c || t;
						return e("div", {
							staticClass: "counters footer-element"
						}, [e("div", {
							staticClass: "counters__item"
						}, [e("a", {
							attrs: {
								href: "//www.liveinternet.ru/click",
								target: "_blank"
							}
						}, [e("img", {
							staticStyle: {
								border: "0"
							},
							attrs: {
								id: "licnt13BA",
								width: "88",
								height: "31",
								title: "LiveInternet: показано число просмотров за 24 часа, посетителей за 24 часа и за сегодня",
								src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7",
								alt: ""
							}
						})])]), this._v(" "), e("div", {
							staticClass: "counters__item"
						}, [e("a", {
							attrs: {
								href: "https://webmaster.yandex.ru/siteinfo/?site=bukvoed.ru"
							}
						}, [e("img", {
							attrs: {
								width: "88",
								height: "31",
								alt: "",
								border: "0",
								src: "https://yandex.ru/cycounter?bukvoed.ru&theme=dark&lang=ru"
							}
						})])]), this._v(" "), e("div", {
							staticClass: "counters__item mob"
						}, [e("a", {
							attrs: {
								href: "//www.liveinternet.ru/click",
								target: "_blank"
							}
						}, [e("img", {
							staticStyle: {
								border: "0"
							},
							attrs: {
								id: "licnt95B9",
								width: "88",
								height: "15",
								title: "LiveInternet: показано число посетителей за сегодня",
								src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7",
								alt: ""
							}
						})])])])
					}, function () {
						var t = this.$createElement,
							e = this._self._c || t;
						return e("div", [e("img", {
							staticStyle: {
								position: "absolute",
								left: "-9999px"
							},
							attrs: {
								src: "https://mc.yandex.ru/watch/65000209",
								alt: ""
							}
						})])
					}], !1, null, null, null).exports,
					_errorPage: Object(A.a)(D, (function () {
						var t = this,
							e = t.$createElement,
							n = t._self._c || e;
						return n("div", {
							staticClass: "container error"
						}, [n("header", [n("div", {
							staticClass: "burger",
							on: {
								click: t.openMenu
							}
						}, [n("svg", {
							staticClass: "open",
							staticStyle: {
								"enable-background": "new 0 0 253.87 173.99"
							},
							attrs: {
								xmlns: "http://www.w3.org/2000/svg",
								"xmlns:xlink": "http://www.w3.org/1999/xlink",
								version: "1.1",
								id: "Слой_1",
								x: "0px",
								y: "0px",
								viewBox: "0 0 253.87 173.99",
								"xml:space": "preserve"
							}
						}, [n("path", {
							attrs: {
								d: "M245.93,19.25c4.38,0,7.93-4.31,7.93-9.62c0-5.31-3.55-9.63-7.93-9.63l-238,0C3.56,0,0,4.31,0,9.63  c0,5.31,3.56,9.62,7.93,9.62H245.93L245.93,19.25z M245.93,19.25"
							}
						}), t._v(" "), n("path", {
							attrs: {
								d: "M6.75,77.37C3.03,77.37,0,81.68,0,86.99c0,5.31,3.03,9.63,6.75,9.63h202.51c3.73,0,6.75-4.31,6.75-9.63  c0-5.31-3.02-9.62-6.75-9.62H6.75L6.75,77.37z M6.75,77.37"
							}
						}), t._v(" "), n("path", {
							attrs: {
								d: "M7.93,154.74c-4.38,0-7.93,4.31-7.93,9.62c0,5.31,3.56,9.63,7.93,9.63H166.6c4.38,0,7.93-4.31,7.93-9.63  c0-5.31-3.56-9.62-7.93-9.62H7.93L7.93,154.74z M7.93,154.74"
							}
						})])]), t._v(" "), n("a", {
							staticClass: "logo",
							attrs: {
								href: "/"
							}
						}, [n("img", {
							attrs: {
								src: t.options.logo.url,
								alt: t.options.logo.alt
							}
						})]), t._v(" "), n("div", {
							staticClass: "address"
						}, [n("div", {
							staticClass: "address__street"
						}, [t._v(t._s(t.options.address))]), t._v(" "), n("a", {
							staticClass: "address__mail",
							attrs: {
								href: "mailto:" + t.options.email
							}
						}, [n("img", {
							attrs: {
								src: "/img/icn-mail.png",
								alt: "mail"
							}
						}), t._v(t._s(t.options.email) + "\n                ")]), t._v(" "), n("div", {
							staticClass: "address__metro"
						}, [n("img", {
							attrs: {
								src: "/img/icn-metro.png",
								alt: "metro"
							}
						}), t._v(t._s(t.options.metro) + "\n                ")])]), t._v(" "), n("div", {
							staticClass: "contacts"
						}, [n("div", {
							staticClass: "contacts__phone"
						}, [t._v("Правовое управление " + t._s(t.options.legalPhone))]), t._v(" "), n("div", {
							staticClass: "contacts__phone"
						}, [t._v("Финансовое управление " + t._s(t.options.financialPhone))])])]), t._v(" "), n("div", {
							staticClass: "content"
						}, [n("Navigation", {
							attrs: {
								menu: t.status
							},
							on: {
								closeMenu: t.closeMenu
							}
						})], 1), t._v(" "), n("div", {
							staticClass: "page-erroor"
						}, [n("div", {
							staticClass: "page-erroor--wrap"
						}, [n("nuxt-link", {
							staticClass: "go-main",
							attrs: {
								to: "/"
							}
						}, [t._v("Вернуться на главную")])], 1)]), t._v(" "), n("footer", [n("div", {
							staticClass: "logo footer-element"
						}, [n("img", {
							attrs: {
								src: t.options.logoN1.url,
								alt: t.options.logoN1.alt
							}
						})]), t._v(" "), n("div", {
							staticClass: "bukvoed footer-element"
						}, [n("img", {
							attrs: {
								src: t.options.logoN2.url,
								alt: t.options.logoN2.alt
							}
						})]), t._v(" "), n("div", {
							staticClass: "copy-paste footer-element"
						}, [t._v(t._s(t.options.text))]), t._v(" "), t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), n("div", {
							staticClass: "years footer-element",
							domProps: {
								innerHTML: t._s(t.options.copyright)
							}
						}), t._v(" "), n("div", {
							staticClass: "copy-paste-tablet"
						}, [t._v(t._s(t.options.text))]), t._v(" "), t._m(3)])])
					}), [function () {
						var t = this.$createElement,
							e = this._self._c || t;
						return e("div", {
							staticClass: "designer footer-element"
						}, [e("div", {
							staticClass: "title"
						}, [this._v("Дизайн сайта")]), this._v(" "), e("a", {
							staticClass: "logo",
							attrs: {
								href: "http://www.olesya-design.ru/"
							}
						}, [e("img", {
							attrs: {
								src: "/img/icn-logo-designer.png",
								alt: ""
							}
						})])])
					}, function () {
						var t = this.$createElement,
							e = this._self._c || t;
						return e("div", {
							staticClass: "developer footer-element"
						}, [e("div", {
							staticClass: "title"
						}, [this._v("Разработка сайта")]), this._v(" "), e("a", {
							staticClass: "logo",
							attrs: {
								href: "https://rocketcompany.website/"
							}
						}, [e("img", {
							attrs: {
								src: "/img/icn-rocket-company.png",
								alt: "RocketCompany"
							}
						})])])
					}, function () {
						var t = this.$createElement,
							e = this._self._c || t;
						return e("div", {
							staticClass: "counters footer-element"
						}, [e("div", {
							staticClass: "counters__item"
						}, [e("a", {
							attrs: {
								href: "//www.liveinternet.ru/click",
								target: "_blank"
							}
						}, [e("img", {
							staticStyle: {
								border: "0"
							},
							attrs: {
								id: "licnt13BA",
								width: "88",
								height: "31",
								title: "LiveInternet: показано число просмотров за 24 часа, посетителей за 24 часа и за сегодня",
								src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7",
								alt: ""
							}
						})])]), this._v(" "), e("div", {
							staticClass: "counters__item"
						}, [e("a", {
							attrs: {
								href: "https://webmaster.yandex.ru/siteinfo/?site=bukvoed.ru"
							}
						}, [e("img", {
							attrs: {
								width: "88",
								height: "31",
								alt: "",
								border: "0",
								src: "https://yandex.ru/cycounter?bukvoed.ru&theme=dark&lang=ru"
							}
						})])]), this._v(" "), e("div", {
							staticClass: "counters__item mob"
						}, [e("a", {
							attrs: {
								href: "//www.liveinternet.ru/click",
								target: "_blank"
							}
						}, [e("img", {
							staticStyle: {
								border: "0"
							},
							attrs: {
								id: "licnt95B9",
								width: "88",
								height: "15",
								title: "LiveInternet: показано число посетителей за сегодня",
								src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7",
								alt: ""
							}
						})])])])
					}, function () {
						var t = this.$createElement,
							e = this._self._c || t;
						return e("div", [e("img", {
							staticStyle: {
								position: "absolute",
								left: "-9999px"
							},
							attrs: {
								src: "https://mc.yandex.ru/watch/65000209",
								alt: ""
							}
						})])
					}], !1, null, null, null).exports
				},
				U = {
					head: {
						title: "beograd",
						meta: [{
							charset: "utf-8"
						}, {
							name: "viewport",
							content: "width=device-width, initial-scale=1"
						}, {
							hid: "description",
							name: "description",
							content: "My best Nuxt.js project"
						}],
						link: [{
							rel: "icon",
							type: "image/x-icon",
							href: "https://wordpress.bukvoed.ru/wp-content/uploads/2020/06/icn-logo-header.png"
						}],
						style: [],
						script: []
					},
					render: function (t, e) {
						var n = t("NuxtLoading", {
							ref: "loading"
						}),
							r = t(this.layout || "nuxt"),
							o = t("div", {
								domProps: {
									id: "__layout"
								},
								key: this.layoutName
							}, [r]),
							c = t("transition", {
								props: {
									name: "layout",
									mode: "out-in"
								},
								on: {
									beforeEnter: function (t) {
										window.$nuxt.$nextTick((function () {
											window.$nuxt.$emit("triggerScroll")
										}))
									}
								}
							}, [o]);
						return t("div", {
							domProps: {
								id: "__nuxt"
							}
						}, [n, c])
					},
					data: function () {
						return {
							isOnline: !0,
							layout: null,
							layoutName: ""
						}
					},
					beforeCreate: function () {
						c.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
					},
					created: function () {
						c.a.prototype.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
					},
					mounted: function () {
						this.$loading = this.$refs.loading
					},
					watch: {
						"nuxt.err": "errorChanged"
					},
					computed: {
						isOffline: function () {
							return !this.isOnline
						}
					},
					methods: {
						refreshOnlineStatus: function () {
							void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
						},
						refresh: function () {
							var t = this;
							return Object(r.a)(regeneratorRuntime.mark((function e() {
								var n, r;
								return regeneratorRuntime.wrap((function (e) {
									for (; ;) switch (e.prev = e.next) {
										case 0:
											if ((n = Object(w.f)(t.$route)).length) {
												e.next = 3;
												break
											}
											return e.abrupt("return");
										case 3:
											return t.$loading.start(), r = n.map((function (e) {
												var p = [];
												return e.$options.fetch && p.push(Object(w.m)(e.$options.fetch, t.context)), e.$options.asyncData && p.push(Object(w.m)(e.$options.asyncData, t.context).then((function (t) {
													for (var n in t) c.a.set(e.$data, n, t[n])
												}))), Promise.all(p)
											})), e.prev = 5, e.next = 8, Promise.all(r);
										case 8:
											e.next = 15;
											break;
										case 10:
											e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(), Object(w.i)(e.t0), t.error(e.t0);
										case 15:
											t.$loading.finish();
										case 16:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[5, 10]
								])
							})))()
						},
						errorChanged: function () {
							this.nuxt.err && this.$loading && (this.$loading.fail && this.$loading.fail(), this.$loading.finish && this.$loading.finish())
						},
						setLayout: function (t) {
							return t && I["_" + t] || (t = "default"), this.layoutName = t, this.layout = I["_" + t], this.layout
						},
						loadLayout: function (t) {
							return t && I["_" + t] || (t = "default"), Promise.resolve(I["_" + t])
						}
					},
					components: {
						NuxtLoading: L
					}
				},
				H = (n(49), n(33));
			c.a.use(H.a);
			var G = ["state", "getters", "actions", "mutations"],
				W = {};
			(W = function (t, e) {
				if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
				return "function" != typeof t && (t = Object.assign({}, t)), Q(t, e)
			}(n(188), "store/index.js")).modules = W.modules || {}, J(n(79), "modules/about.js"), J(n(81), "modules/contact.js"), J(n(78), "modules/general.js"), J(n(77), "modules/options.js"), J(n(80), "modules/pages.js"), J(n(76), "modules/services.js");
			var F = W instanceof Function ? W : function () {
				return new H.a.Store(Object.assign({
					strict: !1
				}, W))
			};

			function Q(t, e) {
				if (t.state && "function" != typeof t.state) {
					console.warn("'state' should be a method that returns an object in ".concat(e));
					var n = Object.assign({}, t.state);
					t = Object.assign({}, t, {
						state: function () {
							return n
						}
					})
				}
				return t
			}

			function J(t, e) {
				t = t.default || t;
				var n = e.replace(/\.(js|mjs)$/, "").split("/"),
					r = n[n.length - 1],
					o = "store/".concat(e);
				if (t = "state" === r ? function (t, e) {
					if ("function" != typeof t) {
						console.warn("".concat(e, " should export a method that returns an object"));
						var n = Object.assign({}, t);
						return function () {
							return n
						}
					}
					return Q(t, e)
				}(t, o) : Q(t, o), G.includes(r)) {
					var c = r;
					V(K(W, n, {
						isProperty: !0
					}), t, c)
				} else {
					"index" === r && (n.pop(), r = n[n.length - 1]);
					var l = K(W, n),
						d = !0,
						h = !1,
						f = void 0;
					try {
						for (var m, x = G[Symbol.iterator](); !(d = (m = x.next()).done); d = !0) {
							var w = m.value;
							V(l, t[w], w)
						}
					} catch (t) {
						h = !0, f = t
					} finally {
						try {
							d || null == x.return || x.return()
						} finally {
							if (h) throw f
						}
					} !1 === t.namespaced && delete l.namespaced
				}
			}

			function K(t, e) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					r = n.isProperty,
					o = void 0 !== r && r;
				if (!e.length || o && 1 === e.length) return t;
				var c = e.shift();
				return t.modules[c] = t.modules[c] || {}, t.modules[c].namespaced = !0, t.modules[c].modules = t.modules[c].modules || {}, K(t.modules[c], e, {
					isProperty: o
				})
			}

			function V(t, e, n) {
				e && ("state" === n ? t.state = e || t.state : t[n] = Object.assign({}, t[n], e))
			}
			var X = n(45),
				Z = n.n(X),
				Y = n(117),
				tt = n.n(Y);
			for (var et = {
				setBaseURL: function (t) {
					this.defaults.baseURL = t
				},
				setHeader: function (t, e) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
						r = !0,
						o = !1,
						c = void 0;
					try {
						for (var l, d = (Array.isArray(n) ? n : [n])[Symbol.iterator](); !(r = (l = d.next()).done); r = !0) {
							var h = l.value;
							if (!e) return void delete this.defaults.headers[h][t];
							this.defaults.headers[h][t] = e
						}
					} catch (t) {
						o = !0, c = t
					} finally {
						try {
							r || null == d.return || d.return()
						} finally {
							if (o) throw c
						}
					}
				},
				setToken: function (t, e) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
						r = t ? (e ? e + " " : "") + t : null;
					this.setHeader("Authorization", r, n)
				},
				onRequest: function (t) {
					this.interceptors.request.use((function (e) {
						return t(e) || e
					}))
				},
				onResponse: function (t) {
					this.interceptors.response.use((function (e) {
						return t(e) || e
					}))
				},
				onRequestError: function (t) {
					this.interceptors.request.use(void 0, (function (e) {
						return t(e) || Promise.reject(e)
					}))
				},
				onResponseError: function (t) {
					this.interceptors.response.use(void 0, (function (e) {
						return t(e) || Promise.reject(e)
					}))
				},
				onError: function (t) {
					this.onRequestError(t), this.onResponseError(t)
				},
				create: function (t) {
					return ot(tt()(t, this.defaults))
				}
			}, nt = function () {
				var t = at[it];
				et["$" + t] = function () {
					return this[t].apply(this, arguments).then((function (t) {
						return t && t.data
					}))
				}
			}, it = 0, at = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; it < at.length; it++) nt();
			var ot = function (t) {
				var e = Z.a.create(t);
				return e.CancelToken = Z.a.CancelToken, e.isCancel = Z.a.isCancel,
					function (t) {
						for (var e in et) t[e] = et[e].bind(t)
					}(e), st(e), e
			},
				st = function (t) {
					var e = {
						finish: function () { },
						start: function () { },
						fail: function () { },
						set: function () { }
					},
						n = function () {
							return window.nuxt && window.nuxt.$loading && window.nuxt.$loading.set ? window.nuxt.$loading : e
						},
						r = 0;
					t.onRequest((function (t) {
						t && !1 === t.progress || r++
					})), t.onResponse((function (t) {
						t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0, n().finish())
					})), t.onError((function (t) {
						t && t.config && !1 === t.config.progress || (r--, Z.a.isCancel(t) || (n().fail(), n().finish()))
					}));
					var o = function (t) {
						if (r) {
							var progress = 100 * t.loaded / (t.total * r);
							n().set(Math.min(100, progress))
						}
					};
					t.defaults.onUploadProgress = o, t.defaults.onDownloadProgress = o
				},
				ct = function (t, e) {
					var n = ot({
						baseURL: "http://localhost:3000/",
						headers: {
							common: {
								Accept: "application/json, text/plain, */*"
							},
							delete: {},
							get: {},
							head: {},
							post: {},
							put: {},
							patch: {}
						}
					});
					t.$axios = n, e("axios", n)
				},
				pt = n(118),
				lt = n.n(pt);
			c.a.use(lt.a);
			var ut = n(119);
			c.a.use(ut.a, {
				apiKey: "",
				lang: "ru_RU",
				coordorder: "latlong",
				version: "2.1"
			});
			var ht = function (t) {
				var e, s;
				t.app;
				e = document, s = screen, e.getElementById("licnt13BA").src = "//counter.yadro.ru/hit?t11.3;r" + escape(e.referrer) + (void 0 === s ? "" : ";s" + s.width + "*" + s.height + "*" + (s.colorDepth ? s.colorDepth : s.pixelDepth)) + ";u" + escape(e.URL) + ";h" + escape(e.title.substring(0, 150)) + ";" + Math.random()
			},
				ft = function (t) {
					var e, s;
					t.app;
					e = document, s = screen, e.getElementById("licnt95B9").src = "//counter.yadro.ru/hit?t23.2;r" + escape(e.referrer) + (void 0 === s ? "" : ";s" + s.width + "*" + s.height + "*" + (s.colorDepth ? s.colorDepth : s.pixelDepth)) + ";u" + escape(e.URL) + ";h" + escape(e.title.substring(0, 150)) + ";" + Math.random()
				},
				mt = function (t) {
					var e, n, r, o, a;
					t.app;
					e = window, n = document, r = "script", e.ym = e.ym || function () {
						(e.ym.a = e.ym.a || []).push(arguments)
					}, e.ym.l = 1 * new Date, o = n.createElement(r), a = n.getElementsByTagName(r)[0], o.async = 1, o.src = "https://mc.yandex.ru/metrika/tag.js", a.parentNode.insertBefore(o, a), ym(65693062, "init", {
						clickmap: !0,
						trackLinks: !0,
						accurateTrackBounce: !0,
						webvisor: !0
					})
				},
				gt = function (t) {
					var i, s, e, n, a, r, o = t.app;
					i = window, s = document, e = "script", n = "ga", i.GoogleAnalyticsObject = n, i.ga = i.ga || function () {
						(i.ga.q = i.ga.q || []).push(arguments)
					}, i.ga.l = 1 * new Date, a = s.createElement(e), r = s.getElementsByTagName(e)[0], a.async = 1, a.src = "https://www.google-analytics.com/analytics.js", r.parentNode.insertBefore(a, r), ga("create", "UA-168238987-1", "auto"), o.router.afterEach((function (t, e) {
						ga("set", "page", t.fullPath), ga("send", "pageview")
					}))
				};

			function xt(object, t) {
				var e = Object.keys(object);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(object);
					t && (n = n.filter((function (t) {
						return Object.getOwnPropertyDescriptor(object, t).enumerable
					}))), e.push.apply(e, n)
				}
				return e
			}

			function wt(t) {
				for (var i = 1; i < arguments.length; i++) {
					var source = null != arguments[i] ? arguments[i] : {};
					i % 2 ? xt(Object(source), !0).forEach((function (e) {
						Object(o.a)(t, e, source[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : xt(Object(source)).forEach((function (e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
					}))
				}
				return t
			}
			c.a.component(h.a.name, h.a), c.a.component(m.a.name, wt({}, m.a, {
				render: function (t, e) {
					return m.a._warned || (m.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), m.a.render(t, e)
				}
			})), c.a.component(C.name, C), c.a.component("NChild", C), c.a.component(S.name, S), c.a.use(l.a, {
				keyName: "head",
				attribute: "data-n-head",
				ssrAttribute: "data-n-head-ssr",
				tagIDKeyName: "hid"
			});
			var vt = {
				name: "page",
				mode: "out-in",
				appear: !1,
				appearClass: "appear",
				appearActiveClass: "appear-active",
				appearToClass: "appear-to"
			};

			function bt(t) {
				return _t.apply(this, arguments)
			}

			function _t() {
				return (_t = Object(r.a)(regeneratorRuntime.mark((function t(e) {
					var n, r, o, l, d, h, path, f;
					return regeneratorRuntime.wrap((function (t) {
						for (; ;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, k();
							case 2:
								return n = t.sent, (r = F(e)).$router = n, o = r.registerModule, r.registerModule = function (path, t, e) {
									return o.call(r, path, t, Object.assign({
										preserveState: !0
									}, e))
								}, l = wt({
									store: r,
									router: n,
									nuxt: {
										defaultTransition: vt,
										transitions: [vt],
										setTransitions: function (t) {
											return Array.isArray(t) || (t = [t]), t = t.map((function (t) {
												return t = t ? "string" == typeof t ? Object.assign({}, vt, {
													name: t
												}) : Object.assign({}, vt, t) : vt
											})), this.$options.nuxt.transitions = t, t
										},
										err: null,
										dateErr: null,
										error: function (t) {
											t = t || null, l.context._errored = Boolean(t), t = t ? Object(w.l)(t) : null;
											var n = this.nuxt || this.$options.nuxt;
											return n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
										}
									}
								}, U), r.app = l, d = e ? e.next : function (t) {
									return l.router.push(t)
								}, e ? h = n.resolve(e.url).route : (path = Object(w.d)(n.options.base, n.options.mode), h = n.resolve(path).route), t.next = 13, Object(w.p)(l, {
									store: r,
									route: h,
									next: d,
									error: l.nuxt.error.bind(l),
									payload: e ? e.payload : void 0,
									req: e ? e.req : void 0,
									res: e ? e.res : void 0,
									beforeRenderFns: e ? e.beforeRenderFns : void 0,
									ssrContext: e
								});
							case 13:
								return f = function (t, e) {
									if (!t) throw new Error("inject(key, value) has no key provided");
									if (void 0 === e) throw new Error("inject(key, value) has no value provided");
									l[t = "$" + t] = e, r[t] = l[t];
									var n = "__nuxt_" + t + "_installed__";
									c.a[n] || (c.a[n] = !0, c.a.use((function () {
										Object.prototype.hasOwnProperty.call(c.a, t) || Object.defineProperty(c.a.prototype, t, {
											get: function () {
												return this.$root.$options[t]
											}
										})
									})))
								}, window.__NUXT__ && window.__NUXT__.state && r.replaceState(window.__NUXT__.state), t.next = 18, ct(l.context, f);
							case 18:
								t.next = 21;
								break;
							case 21:
								t.next = 24;
								break;
							case 24:
								return t.next = 27, ht(l.context);
							case 27:
								return t.next = 30, ft(l.context);
							case 30:
								return t.next = 33, mt(l.context);
							case 33:
								return t.next = 36, gt(l.context);
							case 36:
								t.next = 39;
								break;
							case 39:
								return t.abrupt("return", {
									store: r,
									app: l,
									router: n
								});
							case 40:
							case "end":
								return t.stop()
						}
					}), t)
				})))).apply(this, arguments)
			}
		},
		165: function (t, e, n) {
			"use strict";
			var r = n(58);
			n.n(r).a
		},
		166: function (t, e, n) {
			(e = n(29)(!1)).push([t.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]), t.exports = e
		},
		167: function (t, e, n) {
			"use strict";
			var r = n(59);
			n.n(r).a
		},
		168: function (t, e, n) {
			(e = n(29)(!1)).push([t.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]), t.exports = e
		},
		169: function (t, e, n) {
			var content = n(170);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, n(30).default)("db85c866", content, !0, {
				sourceMap: !1
			})
		},
		170: function (t, e, n) {
			(e = n(29)(!1)).push([t.i, ".swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:50%;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:opacity .3s;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-progressbar.swiper-pagination-white{background:hsla(0,0%,100%,.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12) infinite;animation:swiper-preloader-spin 1s steps(12) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\")}@-webkit-keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}.ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{height:15px;bottom:0}.ps__rail-x,.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;position:absolute}.ps__rail-y{width:15px;right:0}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}.ps{position:relative}html{font-family:Gilroy;font-size:16px}html body{color:#fff;background-color:#111419}.container,html body.overflow{overflow:hidden}.container{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh;background-repeat:no-repeat;background-size:cover;background-position:100%;transition:.2s;background-color:#141821}@media screen and (max-width:1024px){.container{background-image:url(/img/bg-main-tablet.jpg)!important;background-position:50%}}.container.error .content{position:absolute}.container.error .content .nav{display:none;z-index:2}.container header{position:absolute;z-index:10;display:flex;align-items:center;padding:15px 0 0 40px;color:#70747e;font-size:18px;line-height:28px;word-spacing:3px}@media screen and (max-width:1440px){.container header{padding-left:15px}}@media screen and (max-width:1365px){.container header{font-size:14px}}@media screen and (max-width:1024px){.container header{padding:0;z-index:99}}.container header .burger{display:none}@media screen and (max-width:1024px){.container header .burger{display:flex;align-items:center;justify-content:center;width:65px;height:65px;background:#2a2f39;border-radius:0 0 20px 0}.container header .burger svg{width:30px;height:30px;fill:#858a96}.container header .burger:hover{cursor:pointer;background:#2f3540}}@media screen and (max-width:749px){.container header .burger{width:40px;height:40px;border-radius:0 0 10px 0}.container header .burger svg{width:20px;height:20px;fill:#858a96}}.container header a{color:#70747e;font-size:18px;line-height:28px;text-decoration:none}@media screen and (max-width:1365px){.container header a{font-size:14px}}.container header a.logo{display:flex}@media screen and (max-width:1024px){.container header a.logo{display:none}}.container header .address{display:flex;justify-content:space-between;flex-wrap:wrap;max-width:322px;width:100%;margin-top:-15px;margin-left:37px}@media screen and (max-width:1365px){.container header .address{max-width:265px}}@media screen and (max-width:1024px){.container header .address{margin-top:0}}@media screen and (max-width:749px){.container header .address{display:none}}.container header .address__street{width:100%}.container header .address__mail{display:flex;align-items:center}.container header .address__mail img{margin-right:10px}.container header .address__metro{display:flex;align-items:center}.container header .address__metro img{margin-right:10px}.container header .contacts{margin-top:-15px;margin-left:37px}@media screen and (max-width:1024px){.container header .contacts{display:none}}.container .content{display:flex;justify-content:space-between;height:calc(100vh - 70px)}@media screen and (max-width:1365px){.container .content{height:auto}}@media screen and (max-width:1024px){.container .content{position:relative;min-height:calc(100vh - 117px)}}@media screen and (max-width:749px){.container .content{min-height:calc(100vh - 35px)}}.container .content .nav{position:relative;z-index:1;max-width:423px;width:423px;padding-top:115px;padding-left:40px;margin-bottom:20px}@media screen and (max-width:1440px){.container .content .nav{padding-left:15px}}@media screen and (max-width:1024px){.container .content .nav{display:none}.container .content .nav.active{display:block;position:fixed;max-width:calc(100% - 280px);width:100%;height:100%;background:rgba(27,29,35,.93);z-index:99;margin:0;padding:0}.container .content .nav.active .close-menu{display:flex;align-items:center;justify-content:center;width:65px;height:65px;background:#2a2f39;border-radius:0 0 20px 0}.container .content .nav.active .close-menu svg{width:35px;height:35px;fill:#858a96}.container .content .nav.active .close-menu:hover{cursor:pointer;background:#2f3540}.container .content .nav.active .menu{height:auto;margin-top:70px;margin-left:50px}.container .content .nav.active .menu:after,.container .content .nav.active .menu:before{display:none}.container .content .nav.active .menu__wrap:before{left:-50px}}@media screen and (max-width:749px){.container .content .nav.active{display:block;max-width:100%;min-width:100vw;width:100%;min-height:100vh;height:100%;overflow:scroll}.container .content .nav.active .close-menu{width:40px;height:40px;min-height:40px;border-radius:0 0 10px 0}.container .content .nav.active .close-menu svg{width:20px;height:20px}.container .content .nav.active .menu{height:auto;margin-top:40px;margin-left:30px}.container .content .nav.active .menu__wrap:before{left:-30px}}.container .content .nav .close-menu{display:none}.container .content .nav .menu{position:relative;display:flex;flex-direction:column;justify-content:center;height:calc(100% - 170px);margin-left:25px;margin-bottom:20px}@media screen and (max-width:1365px){.container .content .nav .menu{height:calc(100% - 280px)}}.container .content .nav .menu:before{margin-bottom:20px}.container .content .nav .menu:after,.container .content .nav .menu:before{position:relative;left:11px;content:\"\";height:30%;border-left:1px solid #2a2c31}.container .content .nav .menu:after{margin-top:20px}.container .content .nav .menu__wrap{position:relative}.container .content .nav .menu__wrap:before{content:\"\";position:absolute;left:-65px;width:12px;height:100%;background:#2a2f39;border-radius:0 10px 10px 0}@media screen and (max-width:749px){.container .content .nav .menu__wrap:before{width:10px}}.container .content .nav .menu--section{display:flex;align-items:center;margin-bottom:35px;min-height:26px;text-decoration:none}@media screen and (max-width:749px){.container .content .nav .menu--section{margin-bottom:20px}}.container .content .nav .menu--section.is-active,.container .content .nav .menu--section.nuxt-link-active,.container .content .nav .menu--section:hover{cursor:pointer}.container .content .nav .menu--section.is-active .menu--section__marker,.container .content .nav .menu--section.nuxt-link-active .menu--section__marker,.container .content .nav .menu--section:hover .menu--section__marker{position:relative}.container .content .nav .menu--section.is-active .menu--section__marker:before,.container .content .nav .menu--section.nuxt-link-active .menu--section__marker:before,.container .content .nav .menu--section:hover .menu--section__marker:before{position:absolute;top:4px;left:4px;width:12px;height:12px;display:block;content:\"\";border-radius:50%;background:#c81818}@media screen and (max-width:749px){.container .content .nav .menu--section.is-active .menu--section__marker:before,.container .content .nav .menu--section.nuxt-link-active .menu--section__marker:before,.container .content .nav .menu--section:hover .menu--section__marker:before{width:8px;height:8px;top:2px;left:2.4px}}.container .content .nav .menu--section.is-active .menu--section__title,.container .content .nav .menu--section.nuxt-link-active .menu--section__title,.container .content .nav .menu--section:hover .menu--section__title{font-weight:600;position:relative}.container .content .nav .menu--section.is-active .menu--section__title:before,.container .content .nav .menu--section.nuxt-link-active .menu--section__title:before,.container .content .nav .menu--section:hover .menu--section__title:before{position:absolute;top:50%;left:-30px;content:\"\";width:25px;height:1px;background:#2a2c31}@media screen and (max-width:749px){.container .content .nav .menu--section.is-active .menu--section__title:before,.container .content .nav .menu--section.nuxt-link-active .menu--section__title:before,.container .content .nav .menu--section:hover .menu--section__title:before{width:10px;left:-13px}}.container .content .nav .menu--section:last-child{margin-bottom:0}.container .content .nav .menu--section__marker{width:24px;height:24px;background:#1d2027;border-radius:50%;border:2px solid #2a2c31}@media screen and (max-width:749px){.container .content .nav .menu--section__marker{width:16px;height:16px}}.container .content .nav .menu--section__title{margin-left:35px;font-size:21px;color:#aaacb2}@media screen and (max-width:1365px){.container .content .nav .menu--section__title{font-size:16px}}@media screen and (max-width:1024px){.container .content .nav .menu--section__title{font-size:21px}}@media screen and (max-width:749px){.container .content .nav .menu--section__title{font-size:16px;margin-left:16px}}.container .content .nav .consultation{width:100%}@media screen and (max-width:1024px){.container .content .nav .consultation{display:flex;flex-direction:column;justify-content:center;width:auto;min-height:calc(100% - 515px);position:relative;margin-left:20px}.container .content .nav .consultation:before{margin-bottom:15px}.container .content .nav .consultation:after,.container .content .nav .consultation:before{display:block;position:relative;left:32px;content:\"\";height:70px;border-left:1px solid #3a3d44}.container .content .nav .consultation:after{margin-top:15px}}@media screen and (max-width:749px){.container .content .nav .consultation{min-height:130px;height:30%}.container .content .nav .consultation:after,.container .content .nav .consultation:before{width:2px;left:18px;height:30%}}.container .content .nav .consultation__phone{display:flex;align-items:center;margin-bottom:20px;margin-left:5px}@media screen and (max-width:1365px){.container .content .nav .consultation__phone{flex-direction:column;align-items:start}}@media screen and (max-width:1024px){.container .content .nav .consultation__phone{flex-direction:row;align-items:center;margin-left:0}}.container .content .nav .consultation__phone:last-child{margin-bottom:0}.container .content .nav .consultation__phone img{margin-right:20px;border-radius:50%;transition:.2s}.container .content .nav .consultation__phone img:hover{box-shadow:0 0 11px 0 rgba(198,20,20,.5)}@media screen and (max-width:1024px){.container .content .nav .consultation__phone img{height:70px}}@media screen and (max-width:749px){.container .content .nav .consultation__phone img{height:40px}}.container .content .nav .consultation__phone .text-info{white-space:nowrap}@media screen and (max-width:1365px){.container .content .nav .consultation__phone .text-info{white-space:normal}}.container .content .nav .consultation__phone .text-info .title{font-size:1vw;font-weight:400;color:#c81818}@media screen and (max-width:1024px){.container .content .nav .consultation__phone .text-info .title{font-size:18px}}@media screen and (max-width:749px){.container .content .nav .consultation__phone .text-info .title{font-size:14px}}.container .content .nav .consultation__phone .text-info .phone{font-size:1vw;font-weight:900;color:#70747e}@media screen and (max-width:1024px){.container .content .nav .consultation__phone .text-info .phone{font-size:18px}}@media screen and (max-width:749px){.container .content .nav .consultation__phone .text-info .phone{font-size:14px}}.container .content .nav .consultation__phone .text-info .phone a{font-size:1vw;font-weight:600;color:#70747e;text-decoration:none;margin-left:5px}.container .content .nav .consultation__phone .text-info .phone a:hover{color:#c81818}@media screen and (max-width:1024px){.container .content .nav .consultation__phone .text-info .phone a{font-size:18px}}@media screen and (max-width:749px){.container .content .nav .consultation__phone .text-info .phone a{font-size:14px}}.container .content .nav .info{display:none}@media screen and (max-width:1024px){.container .content .nav .info{display:block;color:#70747e;font-size:18px;line-height:28px;word-spacing:3px;font-size:14px}.container .content .nav .info a{color:#70747e;font-size:18px;line-height:28px;text-decoration:none;font-size:14px}.container .content .nav .info .address{display:flex;justify-content:space-between;flex-wrap:wrap;max-width:265px;width:100%;margin-top:0;margin-left:37px;margin-bottom:30px}.container .content .nav .info .address__street{width:100%}.container .content .nav .info .address__mail{display:flex;align-items:center}.container .content .nav .info .address__mail img{margin-right:10px}.container .content .nav .info .address__metro{display:flex;align-items:center}.container .content .nav .info .address__metro img{margin-right:10px}.container .content .nav .info .contacts{margin-top:0;margin-left:37px}}@media screen and (max-width:749px){.container .content .nav .info{margin-top:20px;margin-bottom:20px}.container .content .nav .info,.container .content .nav .info a{font-size:11px!important;line-height:15px}.container .content .nav .info .address{max-width:220px;margin-bottom:15px}.container .content .nav .info .address__street{width:100%}.container .content .nav .info .address__mail img,.container .content .nav .info .address__metro img{height:10px}.container .content .nav .info .contacts{max-width:240px;margin-top:0;margin-left:37px;font-size:11px!important}.container .content .nav .info .contacts__phone{font-size:11px!important}}.container .content .services{width:42vw}@media screen and (max-width:1600px){.container .content .services{width:39vw}}@media screen and (max-width:1365px){.container .content .services{min-width:280px;width:280px;display:flex;flex-direction:column;justify-content:space-between}}@media screen and (max-width:749px){.container .content .services{min-width:120px;width:120px;position:absolute;width:100%;right:0;top:0}}.container .content .services.active{position:relative;z-index:0}.container .content .services.active:before{position:absolute;content:url(/img/img-eagle-main-test.png);left:-670px;bottom:-85px}@media screen and (max-width:1024px){.container .content .services.active:before{display:none}}@media screen and (max-width:749px){.container .content .services .ps{display:none}.container .content .services .ps.active{display:block;position:-webkit-sticky;position:sticky;bottom:0;left:0;width:100%;height:100vh!important;padding:50px 15px 15px;background:rgba(27,29,35,.93);z-index:98}}.container .content .services--title{position:relative;padding:43px 0 35px 11px;font-size:39px;font-weight:600;line-height:26px;color:#4b525f;text-transform:uppercase}@media screen and (max-width:1365px){.container .content .services--title{font-size:36px;padding:20px 0 20px 11px}}@media screen and (max-width:749px){.container .content .services--title{width:130px;margin-left:auto;font-size:16px;padding:10px 10px 0 0;z-index:200}}.container .content .services--title:before{position:absolute;top:0;content:\"\";width:100%;height:5px;background:#2a2f39}.container .content .services--wrap{display:flex;flex-direction:column;justify-content:space-between;min-height:calc(100% - 250px);position:relative;padding-right:30px;padding-top:25px;padding-bottom:40px}@media screen and (max-width:1365px){.container .content .services--wrap{height:auto;min-height:calc(100% - 217px);padding-top:0}}.container .content .services--wrap .service{position:relative;display:flex;align-items:center;height:60px;z-index:1;text-decoration:none}@media screen and (max-width:1365px){.container .content .services--wrap .service{min-height:60px;max-height:100px;height:100px}}@media screen and (max-width:749px){.container .content .services--wrap .service{min-height:45px;max-height:45px;height:45px}}.container .content .services--wrap .service:last-child{margin-bottom:0}.container .content .services--wrap .service:nth-child(2) .service__title{margin-right:37px}.container .content .services--wrap .service.nuxt-link-active,.container .content .services--wrap .service:hover{cursor:pointer}.container .content .services--wrap .service.nuxt-link-active .service__marker,.container .content .services--wrap .service:hover .service__marker{position:relative}.container .content .services--wrap .service.nuxt-link-active .service__marker:before,.container .content .services--wrap .service:hover .service__marker:before{position:absolute;top:4px;left:4px;width:12px;height:12px;display:block;content:\"\";border-radius:50%;background:#c81818}@media screen and (max-width:749px){.container .content .services--wrap .service.nuxt-link-active .service__marker:before,.container .content .services--wrap .service:hover .service__marker:before{top:3px;left:3px;width:8px;height:8px}}.container .content .services--wrap .service.nuxt-link-active .service__title,.container .content .services--wrap .service:hover .service__title{font-weight:600;position:relative}.container .content .services--wrap .service.nuxt-link-active .service__title:before,.container .content .services--wrap .service:hover .service__title:before{position:absolute;top:50%;left:-20px;content:\"\";width:10px;height:1px;background:#2a2c31}.container .content .services--wrap .service .wrap{position:relative}.container .content .services--wrap .service .wrap.first:before{position:absolute;left:21%;top:-40px;content:\"\";width:1px;height:20px;background:#2a2c31}@media screen and (max-width:749px){.container .content .services--wrap .service .wrap.first:before{top:-15px;height:10px}}.container .content .services--wrap .service .wrap:after{position:absolute;left:21%;bottom:-60px;content:\"\";width:1px;height:45px;background:#2a2c31}@media screen and (max-width:749px){.container .content .services--wrap .service .wrap:after{height:15px;bottom:-20px}}.container .content .services--wrap .service__marker{min-width:24px;height:24px;margin-right:30px;background:#1d2027;border-radius:50%;border:2px solid #2a2c31}@media screen and (max-width:749px){.container .content .services--wrap .service__marker{min-width:16px;height:16px;margin-right:20px;border:1px solid #2a2c31}}.container .content .services--wrap .service__title{font-size:19px;font-size:1vw;color:#aaacb2;line-height:24px;text-align:left;word-wrap:break-word}@media screen and (max-width:1365px){.container .content .services--wrap .service__title{font-size:14px}}@media screen and (max-width:749px){.container .content .services--wrap .service__title{line-height:16px}}.container .content .services--slider{margin-left:11px;border-left:1px solid #2a2c31;overflow:hidden;max-width:402px;width:100%}@media screen and (max-width:1024px){.container .content .services--slider{border:none}}@media screen and (max-width:749px){.container .content .services--slider{display:none;position:fixed;width:55%;height:15%;right:0;bottom:35px;border:none}}.container .content .services--slider .swiper-wrapper .swiper-slide{height:145px;padding:15px 10px 10px 30px;background:#7d0404 url(/img/bg-slider.png) no-repeat 100%;background-size:cover;border-radius:20px 0 20px 0}@media screen and (max-width:749px){.container .content .services--slider .swiper-wrapper .swiper-slide{width:55%;height:auto;padding-left:10px;font-size:12px;line-height:13px;border-radius:20px 0 0 0}}.container .content .services--slider .swiper-wrapper .swiper-slide .title{display:flex;flex-direction:column;position:relative;font-size:1.3vw;font-weight:600;line-height:20px;color:#dadada;padding-bottom:10px}.container .content .services--slider .swiper-wrapper .swiper-slide .title span{font-weight:400}@media screen and (max-width:1365px){.container .content .services--slider .swiper-wrapper .swiper-slide .title{font-size:14px}}@media screen and (max-width:749px){.container .content .services--slider .swiper-wrapper .swiper-slide .title{font-size:12px;line-height:13px}}.container .content .services--slider .swiper-wrapper .swiper-slide .title:before{position:absolute;bottom:0;left:0;content:\"\";height:1px;width:100px;background:#d30e0e}.container .content .services--slider .swiper-wrapper .swiper-slide .price{padding-top:10px;font-size:1.3vw;line-height:30px;font-weight:600;color:#dadada}@media screen and (max-width:1365px){.container .content .services--slider .swiper-wrapper .swiper-slide .price{font-size:14px}}@media screen and (max-width:749px){.container .content .services--slider .swiper-wrapper .swiper-slide .price{font-size:12px;line-height:13px}}.container .content .services--slider .swiper-wrapper .swiper-slide .quantity{position:absolute;right:20px;bottom:10px;font-size:10px}@media screen and (max-width:1365px){.container .content .services--slider .swiper-wrapper .swiper-slide .quantity{bottom:30px}}.container .content .services--slider .swiper-wrapper .swiper-slide .quantity .current{margin-right:10px;font-size:12px}.container .content .services--slider .swiper-wrapper .swiper-slide .quantity .all{margin-left:10px;font-size:10px}.container .content .services--slider .swiper-pagination{left:0}@media screen and (max-width:1365px){.container .content .services--slider .swiper-pagination{left:0}}@media screen and (max-width:749px){.container .content .services--slider .swiper-pagination{left:5%}}.container .content .services--slider .swiper-pagination-bullet{max-width:15px;width:100%;height:3px;border-radius:0;background:#fff;opacity:1;transform:scale(1);transform:translateX(0)}.container .content .services--slider .swiper-pagination-bullet-active{background:#d30e0e}@media screen and (max-width:749px){.container .content .services--slider .swiper-pagination-bullet{max-width:12px;height:2px}}.container .content .page{position:relative;z-index:1;display:flex;flex-direction:column;width:100%;margin:104px 70px 20px 50px}@media screen and (max-width:1600px){.container .content .page{margin:104px 20px 20px}}@media screen and (max-width:1440px){.container .content .page{margin:104px 15px 20px}}@media screen and (max-width:1024px){.container .content .page{margin:70px 15px 20px 0}}@media screen and (max-width:749px){.container .content .page{margin:40px 0 0}}.container .content .page .h1{padding:70px 0 40px;font-size:2.1vw;line-height:40px;color:#4b525f}@media screen and (max-width:1600px){.container .content .page .h1{padding:40px 0}}@media screen and (max-width:1365px){.container .content .page .h1{padding:20px 0}}@media screen and (max-width:1024px){.container .content .page .h1{font-size:25px}}@media screen and (max-width:749px){.container .content .page .h1{padding:25px 0 10px;font-size:18px;line-height:20px}}.container .content .page--main{display:flex;align-items:center;width:100%}@media screen and (max-width:1024px){.container .content .page--main{align-items:start;flex-direction:column;justify-content:space-between;height:100%}}.container .content .page--main img.beograd{margin-top:150px;margin-left:-130px}@media screen and (max-width:1440px){.container .content .page--main img.beograd{margin-left:0;padding-right:10px;max-width:600px;width:100%}}@media screen and (max-width:1024px){.container .content .page--main img.beograd{margin-top:25px;margin-left:50px;max-width:400px}}@media screen and (max-width:749px){.container .content .page--main img.beograd{margin-top:25px;margin-left:30px;max-width:280px}}.container .content .page--main .consultation{display:none}@media screen and (max-width:1024px){.container .content .page--main .consultation{display:flex;flex-direction:column;justify-content:center;width:auto;min-height:calc(100% - 180px);position:relative;margin-left:30px;margin-bottom:10px}.container .content .page--main .consultation:before{display:block;position:relative;left:32px;content:\"\";height:30%;margin-bottom:15px;border-left:1px solid #3a3d44}.container .content .page--main .consultation:after{display:block;position:relative;left:32px;content:\"\";height:30%;margin-top:15px;border-left:1px solid #3a3d44}.container .content .page--main .consultation__phone{display:flex;flex-direction:column;align-items:flex-start;margin-bottom:20px;margin-left:5px}.container .content .page--main .consultation__phone:last-child{margin-bottom:0}.container .content .page--main .consultation__phone img{margin-right:20px;border-radius:50%;transition:.2s}.container .content .page--main .consultation__phone img:hover{box-shadow:0 0 11px 0 rgba(198,20,20,.5)}.container .content .page--main .consultation__phone .text-info{white-space:nowrap}.container .content .page--main .consultation__phone .text-info .title{display:flex;flex-direction:column;font-size:18px;font-weight:400;color:#c81818}.container .content .page--main .consultation__phone .text-info .phone{display:flex;flex-direction:column;font-size:18px;font-weight:900;color:#70747e}.container .content .page--main .consultation__phone .text-info .phone a{font-size:18px;font-weight:600;color:#70747e;text-decoration:none;margin-left:5px}.container .content .page--main .consultation__phone .text-info .phone a:hover{color:#c81818}}@media screen and (max-width:749px){.container .content .page--main .consultation{width:auto;min-height:calc(100% - 250px);margin-left:30px}.container .content .page--main .consultation:before{display:block;position:relative;left:32px;content:\"\";height:30%;margin-bottom:15px;border-left:1px solid #3a3d44}.container .content .page--main .consultation:after{display:none}.container .content .page--main .consultation__phone{align-items:flex-start;flex-direction:column;margin-bottom:20px;margin-left:5px}.container .content .page--main .consultation__phone:last-child{margin-bottom:0}.container .content .page--main .consultation__phone img{margin-right:20px;height:50px;margin-bottom:5px}.container .content .page--main .consultation__phone .text-info{white-space:normal}.container .content .page--main .consultation__phone .text-info .title{font-size:12px;max-width:100px}.container .content .page--main .consultation__phone .text-info .phone{font-size:12px}.container .content .page--main .consultation__phone .text-info .phone a{display:none}}.container .content .page--main .main--slider{margin-left:11px;border-left:1px solid #2a2c31;overflow:hidden;max-width:402px;width:100%}@media screen and (max-width:1024px){.container .content .page--main .main--slider{border:none}}@media screen and (max-width:749px){.container .content .page--main .main--slider{position:absolute;right:0;bottom:0;width:180px;height:100px;border:none}}.container .content .page--main .main--slider .swiper-wrapper .swiper-slide{display:none;padding:15px 0 0 30px;background:#7d0404 url(/img/bg-slider.png) no-repeat 100%;background-size:cover}@media screen and (max-width:749px){.container .content .page--main .main--slider .swiper-wrapper .swiper-slide{display:block;padding-left:10px;font-size:12px;line-height:13px;border-radius:20px 0 20px 0}}.container .content .page--main .main--slider .swiper-wrapper .swiper-slide .title{position:relative;font-size:1.3vw;font-weight:600;line-height:30px;color:#dadada;padding-bottom:10px}.container .content .page--main .main--slider .swiper-wrapper .swiper-slide .title span{font-weight:400}@media screen and (max-width:1365px){.container .content .page--main .main--slider .swiper-wrapper .swiper-slide .title{font-size:14px}}@media screen and (max-width:749px){.container .content .page--main .main--slider .swiper-wrapper .swiper-slide .title{font-size:12px;line-height:13px}}.container .content .page--main .main--slider .swiper-wrapper .swiper-slide .title:before{position:absolute;bottom:0;left:0;content:\"\";height:1px;width:100px;background:#d30e0e}.container .content .page--main .main--slider .swiper-wrapper .swiper-slide .price{padding-top:10px;font-size:1.3vw;line-height:30px;font-weight:600;color:#dadada}@media screen and (max-width:1365px){.container .content .page--main .main--slider .swiper-wrapper .swiper-slide .price{font-size:14px}}@media screen and (max-width:749px){.container .content .page--main .main--slider .swiper-wrapper .swiper-slide .price{font-size:12px;line-height:13px}}.container .content .page--main .main--slider .swiper-wrapper .swiper-slide .quantity{position:absolute;right:20px;bottom:10px;font-size:10px}.container .content .page--main .main--slider .swiper-wrapper .swiper-slide .quantity .current{margin-right:10px;font-size:12px}.container .content .page--main .main--slider .swiper-wrapper .swiper-slide .quantity .all{margin-left:10px;font-size:10px}.container .content .page--tabs{height:100%;padding-left:50px;border-left:1px solid #363c47}@media screen and (max-width:1365px){.container .content .page--tabs{padding-left:15px}}@media screen and (max-width:1024px){.container .content .page--tabs{border:none;padding-left:30px}}@media screen and (max-width:749px){.container .content .page--tabs{padding-left:0}}@media screen and (max-width:749px){.container .content .page--tabs .h1{margin-left:25px}}.container .content .page--tabs .tabs--nav ul{display:flex;justify-content:space-between;padding:15px 0;border-top:1px solid #353a44;border-bottom:1px solid #353a44}@media screen and (max-width:1024px){.container .content .page--tabs .tabs--nav ul{flex-direction:column}}@media screen and (max-width:749px){.container .content .page--tabs .tabs--nav ul{padding:10px 25px}}.container .content .page--tabs .tabs--nav ul li{list-style:none;margin-right:10px;font-size:1.2vw;line-height:24px;color:#9a9ca2}@media screen and (max-width:1365px){.container .content .page--tabs .tabs--nav ul li{font-size:16px}}@media screen and (max-width:1024px){.container .content .page--tabs .tabs--nav ul li{position:relative;display:flex;font-size:19px;margin-bottom:15px;padding-left:35px}.container .content .page--tabs .tabs--nav ul li:last-child{margin-bottom:0}.container .content .page--tabs .tabs--nav ul li:before{position:absolute;left:0;top:2px;display:block;content:\"\";width:20px;height:20px;background:#1d2027;border-radius:50%;border:2px solid #2a2c31}}@media screen and (max-width:749px){.container .content .page--tabs .tabs--nav ul li{font-size:14px;line-height:23px;margin-bottom:10px}.container .content .page--tabs .tabs--nav ul li:before{left:0;top:2px;width:16px;height:16px}}.container .content .page--tabs .tabs--nav ul li:last-child{margin-right:0}.container .content .page--tabs .tabs--nav ul li.is-active,.container .content .page--tabs .tabs--nav ul li:hover{cursor:pointer;font-weight:900;color:#c81818}@media screen and (max-width:1024px){.container .content .page--tabs .tabs--nav ul li.is-active:after,.container .content .page--tabs .tabs--nav ul li:hover:after{display:block;content:\"\";position:absolute;top:7px;left:5px;width:10px;height:10px;background:#c81818;border-radius:50%}}@media screen and (max-width:749px){.container .content .page--tabs .tabs--nav ul li.is-active:after,.container .content .page--tabs .tabs--nav ul li:hover:after{top:6px;left:4.4px;width:8px;height:8px}}.container .content .page--tabs .ps{position:relative;height:100%;padding-right:10px}@media screen and (max-width:1024px){.container .content .page--tabs .ps{padding-right:0}}@media screen and (max-width:749px){.container .content .page--tabs .ps{padding:0 25px}}.container .content .page--tabs .ps__rail-y{background-color:transparent}.container .content .page--tabs .tabs--content{overflow:hidden;height:100%;margin-top:30px}@media screen and (max-width:1365px){.container .content .page--tabs .tabs--content{margin-top:20px}}.container .content .page--tabs .tabs--content .text{font-size:1vw;font-weight:400;text-align:left;color:#aaacb2;line-height:24px}@media screen and (max-width:1365px){.container .content .page--tabs .tabs--content .text{font-size:16px}}@media screen and (max-width:749px){.container .content .page--tabs .tabs--content .text{font-size:11px;line-height:14px}}.container .content .page--tabs .tabs--content .text ul li,.container .content .page--tabs .tabs--content .text ul ol{margin-bottom:10px}.container .content .page--tabs .tabs--content .text ul li:last-child,.container .content .page--tabs .tabs--content .text ul ol:last-child{margin-bottom:0}@media screen and (max-width:749px){.container .content .page--tabs .tabs--content .text ul li,.container .content .page--tabs .tabs--content .text ul ol{margin-bottom:10px}}@media screen and (max-width:749px){.container .content .page--tabs .tabs--content .text ul{padding-left:10px}}.container .content .page--tabs .tabs--content .text.left{max-width:620px;width:100%}@media screen and (max-width:749px){.container .content .page--tabs .tabs--content .text.left{max-width:250px}}.container .content .page--tabs .tabs--content .text.right{max-width:600px;width:100%;margin:10px 0 10px auto;padding:10px 0;border-top:1px solid #393e49;border-bottom:1px solid #393e49}@media screen and (max-width:749px){.container .content .page--tabs .tabs--content .text.right{max-width:250px;padding:10px 0;margin:10px 0 10px auto}}.container .content .page--tabs .tabs--content .text:last-child.right{margin-bottom:0;border-bottom:none}.container .content .page--contact{height:100%;padding-left:50px;border-left:1px solid #363c47}@media screen and (max-width:1440px){.container .content .page--contact{padding-left:20px}}@media screen and (max-width:1024px){.container .content .page--contact{border:none}}@media screen and (max-width:749px){.container .content .page--contact{padding:0 30px}}.container .content .page--contact .info{display:flex;justify-content:space-between}@media screen and (max-width:1365px){.container .content .page--contact .info{flex-direction:column}}.container .content .page--contact .info .info__main{width:40%;margin-top:40px}@media screen and (max-width:1366px){.container .content .page--contact .info .info__main{margin-top:20px}}@media screen and (max-width:1365px){.container .content .page--contact .info .info__main{width:100%;margin-top:0}}.container .content .page--contact .info .info__main .text{font-size:1.1vw;font-weight:400;line-height:30px;color:#70747e}@media screen and (max-width:1365px){.container .content .page--contact .info .info__main .text{font-size:18px}}@media screen and (max-width:749px){.container .content .page--contact .info .info__main .text{font-size:12px;line-height:15px}}.container .content .page--contact .info .info__main .address{margin-bottom:20px}@media screen and (max-width:1024px){.container .content .page--contact .info .info__main .address{margin-bottom:10px}}.container .content .page--contact .info .info__main .phones{padding:20px 0;border-top:1px solid #393e49;border-bottom:1px solid #393e49}@media screen and (max-width:1024px){.container .content .page--contact .info .info__main .phones{padding:0;border:none}.container .content .page--contact .info .info__main .phones:before{content:\"\";display:block;width:390px;border-top:1px solid #393e49;margin-bottom:10px}.container .content .page--contact .info .info__main .phones:after{content:\"\";display:block;width:390px;border-top:1px solid #393e49;margin-top:10px}}@media screen and (max-width:749px){.container .content .page--contact .info .info__main .phones:after,.container .content .page--contact .info .info__main .phones:before{width:180px}}.container .content .page--contact .info .info__main .phones .phone{display:flex;flex-direction:column}.container .content .page--contact .info .info__main .phones .phone:first-child{margin-bottom:20px}@media screen and (max-width:1024px){.container .content .page--contact .info .info__main .phones .phone:first-child{margin-bottom:10px}}.container .content .page--contact .info .info__main .email{display:block;margin-top:20px;text-decoration:none}@media screen and (max-width:1024px){.container .content .page--contact .info .info__main .email{margin-top:10px}}.container .content .page--contact .info .info__map{width:calc(60% - 20px);margin-left:20px}@media screen and (max-width:1365px){.container .content .page--contact .info .info__map{width:100%;margin-left:0;margin-top:20px}}@media screen and (max-width:749px){.container .content .page--contact .info .info__map{margin-top:10px}}.container .content .page--contact .info .info__map .ymap-container{width:100%;height:400px}@media screen and (max-width:1366px){.container .content .page--contact .info .info__map .ymap-container{height:300px!important}}@media screen and (max-width:749px){.container .content .page--contact .info .info__map .ymap-container{height:200px!important}}@media screen and (max-width:1366px){.container .content .page--contact .info .info__map .ymap-container>div>ymaps>ymaps{height:300px!important}}@media screen and (max-width:749px){.container .content .page--contact .info .info__map .ymap-container>div>ymaps>ymaps{height:200px!important}}.container .eagle{display:none}@media screen and (max-width:1024px){.container .eagle{display:block;position:absolute;bottom:0;right:40%;height:75%;width:auto;z-index:0}}@media screen and (max-width:749px){.container .eagle{width:auto;height:75%;right:20%}}.container footer{position:relative;z-index:2;display:flex;min-height:70px;align-items:center;justify-content:space-between;padding:5px 20px;background:#13151a;font-size:12px;line-height:24px;font-weight:400;color:#76787d}@media screen and (max-width:1440px){.container footer{padding:5px 15px}.container footer .footer-element{margin-right:10px}.container footer .footer-element:last-child{margin-right:0}}@media screen and (max-width:1365px){.container footer .footer-element{margin-right:10px}.container footer .footer-element:last-child{margin-right:0}}@media screen and (max-width:1024px){.container footer{min-height:117px}.container footer .footer-element{margin-right:5px}.container footer .footer-element:last-child{margin-right:0}}@media screen and (max-width:1024px){.container footer{flex-wrap:wrap;justify-content:space-between}}@media screen and (max-width:749px){.container footer{min-height:25px;justify-content:center}.container footer .footer-element{display:none!important}.container footer .footer-element:last-child{display:block!important}}.container footer .copy-paste{width:25%;text-align:center}@media screen and (max-width:1024px){.container footer .copy-paste{display:none}}.container footer .designer{display:flex;align-items:center;flex-direction:column;justify-content:center}.container footer .designer a{height:25px}@media screen and (max-width:1365px){.container footer .designer{flex-direction:column}}.container footer .developer{display:flex;flex-direction:column;align-items:center}.container footer .developer .title{white-space:nowrap}.container footer .developer .logo img{width:auto;height:20px}.container footer .counters{display:flex;align-items:center}.container footer .counters__item{margin-right:10px}.container footer .counters__item:last-child{margin-right:0}@media screen and (max-width:1024px){.container footer .counters__item{display:none}}.container footer .counters__item.mob{display:none}@media screen and (max-width:1024px){.container footer .counters__item.mob{display:block}}@media screen and (max-width:749px){.container footer .years{display:block!important}}.container footer .years br{display:none}@media screen and (max-width:1024px){.container footer .years br{display:block}}@media screen and (max-width:749px){.container footer .years br{display:none}}.container footer .copy-paste-tablet{display:none}@media screen and (max-width:1440px){.container footer .copy-paste-tablet{margin-right:10px}.container footer .copy-paste-tablet:last-child{margin-right:0}}@media screen and (max-width:1365px){.container footer .copy-paste-tablet{margin-right:10px}.container footer .copy-paste-tablet:last-child{margin-right:0}}@media screen and (max-width:1024px){.container footer .copy-paste-tablet{margin-right:5px}.container footer .copy-paste-tablet:last-child{margin-right:0}}@media screen and (max-width:1024px){.container footer .copy-paste-tablet{display:block}}@media screen and (max-width:749px){.container footer .copy-paste-tablet{display:none}}.container .page-erroor{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;height:calc(100vh - 70px);background-image:url(/img/bg-404-v1.jpg);background-size:auto;background-position:50%;background-repeat:no-repeat}@media screen and (max-width:1024px){.container .page-erroor{height:calc(100vh - 117px);background-image:url(/img/bg-404-1024-v1.jpg)}}@media screen and (max-width:749px){.container .page-erroor{height:calc(100vh - 34px);background-image:url(/img/bg-404-768-v1.jpg)}}.container .page-erroor--wrap{height:auto}.container .page-erroor--wrap .go-main{position:absolute;top:50%;left:50%;display:flex;align-items:center;justify-content:center;width:250px;height:50px;margin-top:50px;margin-left:90px;transform:rotate3d(.5,0,1,-15deg) translate(-50%,-50%);text-decoration:none;font-size:18px;color:#70747e;border:2px solid #70747e;border-radius:30px}.container .page-erroor--wrap .go-main:hover{border-color:#c81818;color:#c81818}@media screen and (max-width:1024px){.container .page-erroor--wrap .go-main{margin-top:20px;margin-left:35px}}@media screen and (max-width:749px){.container .page-erroor--wrap .go-main{width:150px;height:40px;font-size:12px}}", ""]), t.exports = e
		},
		171: function (t, e, n) {
			var content = n(172);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, n(30).default)("3e7ab538", content, !0, {
				sourceMap: !1
			})
		},
		172: function (t, e, n) {
			var r = n(29),
				o = n(173),
				c = n(174),
				l = n(175),
				d = n(176),
				h = n(177),
				f = n(178),
				m = n(179),
				x = n(180),
				w = n(181),
				v = n(182);
			e = r(!1);
			var _ = o(c),
				y = o(l),
				k = o(d),
				C = o(h),
				E = o(f),
				j = o(m),
				$ = o(x),
				A = o(w),
				O = o(v);
			e.push([t.i, "@font-face{font-family:Gilroy;src:url(" + _ + ') format("embedded-opentype"),url(' + y + ') format("woff"),url(' + k + ') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:Gilroy;src:url(' + C + ') format("embedded-opentype"),url(' + E + ') format("woff"),url(' + j + ') format("truetype");font-weight:600;font-style:normal}@font-face{font-family:Gilroy;src:url(' + $ + ') format("embedded-opentype"),url(' + A + ') format("woff"),url(' + O + ') format("truetype");font-weight:900;font-style:normal}', ""]), t.exports = e
		},
		174: function (t, e, n) {
			t.exports = n.p + "fonts/59525ce.eot"
		},
		175: function (t, e, n) {
			t.exports = n.p + "fonts/8e8705d.woff"
		},
		176: function (t, e, n) {
			t.exports = n.p + "fonts/ae5e725.ttf"
		},
		177: function (t, e, n) {
			t.exports = n.p + "fonts/5e111ca.eot"
		},
		178: function (t, e, n) {
			t.exports = n.p + "fonts/32750b0.woff"
		},
		179: function (t, e, n) {
			t.exports = n.p + "fonts/3cf0ee2.ttf"
		},
		180: function (t, e, n) {
			t.exports = n.p + "fonts/2b2e536.eot"
		},
		181: function (t, e, n) {
			t.exports = n.p + "fonts/989947b.woff"
		},
		182: function (t, e, n) {
			t.exports = n.p + "fonts/05bdf30.ttf"
		},
		186: function (t, e, n) {
			"use strict";
			var r = n(60);
			n.n(r).a
		},
		187: function (t, e, n) {
			(e = n(29)(!1)).push([t.i, "*,:after,:before{box-sizing:border-box;margin:0}", ""]), t.exports = e
		},
		188: function (t, e, n) {
			"use strict";
			n.r(e);
			var r = n(0),
				o = n(33),
				c = n(76),
				l = n(77),
				d = n(78),
				h = n(79),
				f = n(80),
				m = n(81);
			r.a.use(o.a);
			e.default = function () {
				return new o.a.Store({
					modules: {
						services: c.default,
						options: l.default,
						general: d.default,
						about: h.default,
						pages: f.default,
						contact: m.default
					}
				})
			}
		},
		58: function (t, e, n) {
			var content = n(166);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, n(30).default)("72daabed", content, !0, {
				sourceMap: !1
			})
		},
		59: function (t, e, n) {
			var content = n(168);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, n(30).default)("3191d5ad", content, !0, {
				sourceMap: !1
			})
		},
		60: function (t, e, n) {
			var content = n(187);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, n(30).default)("932a8f60", content, !0, {
				sourceMap: !1
			})
		},
		61: function (t, e, n) {
			"use strict";
			n(15), n(49), n(28), n(17), n(56), n(70);
			var r = n(0),
				o = window.requestIdleCallback || function (t) {
					var e = Date.now();
					return setTimeout((function () {
						t({
							didTimeout: !1,
							timeRemaining: function () {
								return Math.max(0, 50 - (Date.now() - e))
							}
						})
					}), 1)
				},
				c = window.cancelIdleCallback || function (t) {
					clearTimeout(t)
				},
				l = window.IntersectionObserver && new window.IntersectionObserver((function (t) {
					t.forEach((function (t) {
						var e = t.intersectionRatio,
							link = t.target;
						e <= 0 || link.__prefetch()
					}))
				}));
			e.a = {
				name: "NuxtLink",
				extends: r.a.component("RouterLink"),
				props: {
					prefetch: {
						type: Boolean,
						default: !0
					},
					noPrefetch: {
						type: Boolean,
						default: !1
					}
				},
				mounted: function () {
					this.prefetch && !this.noPrefetch && (this.handleId = o(this.observe, {
						timeout: 2e3
					}))
				},
				beforeDestroy: function () {
					c(this.handleId), this.__observed && (l.unobserve(this.$el), delete this.$el.__prefetch)
				},
				methods: {
					observe: function () {
						l && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), l.observe(this.$el), this.__observed = !0)
					},
					shouldPrefetch: function () {
						return this.getPrefetchComponents().length > 0
					},
					canPrefetch: function () {
						var t = navigator.connection;
						return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
					},
					getPrefetchComponents: function () {
						return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function (t) {
							return t.components.default
						})).filter((function (t) {
							return "function" == typeof t && !t.options && !t.__prefetched
						}))
					},
					prefetchLink: function () {
						if (this.canPrefetch()) {
							l.unobserve(this.$el);
							var t = this.getPrefetchComponents(),
								e = !0,
								n = !1,
								r = void 0;
							try {
								for (var o, c = t[Symbol.iterator](); !(e = (o = c.next()).done); e = !0) {
									var d = o.value,
										h = d();
									h instanceof Promise && h.catch((function () { })), d.__prefetched = !0
								}
							} catch (t) {
								n = !0, r = t
							} finally {
								try {
									e || null == c.return || c.return()
								} finally {
									if (n) throw r
								}
							}
						}
					}
				}
			}
		},
		76: function (t, e, n) {
			"use strict";
			n.r(e);
			n(14);
			var r = n(2),
				o = {
					nuxtServerInit: function (t) {
						var e = this,
							n = t.commit;
						return Object(r.a)(regeneratorRuntime.mark((function t() {
							var data;
							return regeneratorRuntime.wrap((function (t) {
								for (; ;) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, e.$axios.$get("https://wordpress.bukvoed.ru/wp-json/wp/v2/services?order=asc");
									case 2:
										data = t.sent, n("SET_SERVICES", data);
									case 4:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					}
				};
			e.default = {
				state: {
					pagesUslugi: []
				},
				mutations: {
					SET_SERVICES: function (t, data) {
						t.pagesUslugi = data
					}
				},
				actions: o
			}
		},
		77: function (t, e, n) {
			"use strict";
			n.r(e);
			n(14);
			var r = n(2),
				o = {
					nuxtServerInit: function (t) {
						var e = this,
							n = t.commit;
						return Object(r.a)(regeneratorRuntime.mark((function t() {
							var data;
							return regeneratorRuntime.wrap((function (t) {
								for (; ;) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, e.$axios.$get("https://wordpress.bukvoed.ru/wp-json/api/options");
									case 2:
										data = t.sent, n("SET_OPTIONS", data);
									case 4:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					}
				};
			e.default = {
				state: {
					data: {}
				},
				mutations: {
					SET_OPTIONS: function (t, data) {
						t.data = data
					}
				},
				actions: o
			}
		},
		78: function (t, e, n) {
			"use strict";
			n.r(e);
			n(14);
			var r = n(2),
				o = {
					nuxtServerInit: function (t) {
						var e = this,
							n = t.commit;
						return Object(r.a)(regeneratorRuntime.mark((function t() {
							var data;
							return regeneratorRuntime.wrap((function (t) {
								for (; ;) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, e.$axios.$get("https://wordpress.bukvoed.ru/wp-json/api/general");
									case 2:
										data = t.sent, n("SET_GENERAL", data);
									case 4:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					}
				};
			e.default = {
				state: {
					data: {}
				},
				mutations: {
					SET_GENERAL: function (t, data) {
						t.data = data
					}
				},
				actions: o
			}
		},
		79: function (t, e, n) {
			"use strict";
			n.r(e);
			n(14);
			var r = n(2),
				o = {
					nuxtServerInit: function (t) {
						var e = this,
							n = t.commit;
						return Object(r.a)(regeneratorRuntime.mark((function t() {
							var data;
							return regeneratorRuntime.wrap((function (t) {
								for (; ;) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, e.$axios.$get("https://wordpress.bukvoed.ru/wp-json/api/about-page");
									case 2:
										data = t.sent, n("SET_ABOUT", data);
									case 4:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					}
				};
			e.default = {
				state: {
					data: {}
				},
				mutations: {
					SET_ABOUT: function (t, data) {
						t.data = data
					}
				},
				actions: o
			}
		},
		80: function (t, e, n) {
			"use strict";
			n.r(e);
			n(14);
			var r = n(2),
				o = {
					nuxtServerInit: function (t) {
						var e = this,
							n = t.commit;
						return Object(r.a)(regeneratorRuntime.mark((function t() {
							var data;
							return regeneratorRuntime.wrap((function (t) {
								for (; ;) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, e.$axios.$get("https://wordpress.bukvoed.ru/wp-json/wp/v2/pages");
									case 2:
										data = t.sent, n("SET_PAGES", data);
									case 4:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					}
				};
			e.default = {
				state: {
					data: {}
				},
				mutations: {
					SET_PAGES: function (t, data) {
						t.data = data
					}
				},
				actions: o
			}
		},
		81: function (t, e, n) {
			"use strict";
			n.r(e);
			n(14);
			var r = n(2),
				o = {
					nuxtServerInit: function (t) {
						var e = this,
							n = t.commit;
						return Object(r.a)(regeneratorRuntime.mark((function t() {
							var data;
							return regeneratorRuntime.wrap((function (t) {
								for (; ;) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, e.$axios.$get("https://wordpress.bukvoed.ru/wp-json/api/contacts-page");
									case 2:
										data = t.sent, n("SET_CONTACT", data);
									case 4:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					}
				};
			e.default = {
				state: {
					data: {}
				},
				mutations: {
					SET_CONTACT: function (t, data) {
						t.data = data
					}
				},
				actions: o
			}
		},
		82: function (t, e, n) {
			"use strict";
			var r = {};
			r.errorRedirect = n(151), r.errorRedirect = r.errorRedirect.default || r.errorRedirect, e.a = r
		}
	},
	[
		[121, 7, 1, 8]
	]
]);