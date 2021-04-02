(window.webpackJsonp = window.webpackJsonp || []).push([
	[3], {
		211: function (t, e, n) {
			"use strict";
			n.r(e);
			var r = {
				validate: function (t) {
					var e = t.store,
						n = t.route,
						r = t.redirect;
					return !!e.state.services.pagesUslugi.some((function (t) {
						return t.slug === n.params.slug
					})) || r("/404")
				},
				components: {
					PerfectScrollbar: n(84).PerfectScrollbar
				},
				data: function () {
					return {
						tabKey: 0,
						blockHeight: 0,
						scrolTab: null
					}
				},
				head: function () {
					return {
						title: this.service._yoast_wpseo_title,
						meta: [{
							hid: "description",
							id: "description",
							name: "description",
							content: this.service._yoast_wpseo_metadesc
						}]
					}
				},
				methods: {
					setHeight: function () {
						this.blockHeight = this.$refs.heightTitleTab.clientHeight + this.$refs.heightNavTab.clientHeight + 45
					},
					activeScrolTab: function () {
						this.scrolTab = window.innerWidth > 1024
					}
				},
				computed: {
					service: function () {
						var t, e = this;
						if (this.$route.params.slug) return this.$store.state.services.pagesUslugi.map((function (n) {
							n.slug === e.$route.params.slug && (t = n)
						})), t
					}
				},
				mounted: function () {
					this.$nextTick((function () {
						window.addEventListener("resize", this.setHeight), this.setHeight(), window.addEventListener("resize", this.activeScrolTab), this.activeScrolTab()
					}))
				}
			},
				c = n(9),
				component = Object(c.a)(r, (function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "page"
					}, [n("div", {
						staticClass: "page--tabs"
					}, [n("h1", {
						ref: "heightTitleTab",
						staticClass: "h1",
						domProps: {
							innerHTML: t._s(t.service.title.rendered.replace(" | ", "<br> "))
						}
					}), t._v(" "), n("div", {
						ref: "heightNavTab",
						staticClass: "tabs--nav"
					}, [n("ul", t._l(t.service.acf.tabs, (function (e, r) {
						return n("li", {
							key: e.title,
							class: r != t.tabKey ? "" : "is-active",
							on: {
								click: function (e) {
									t.tabKey = r
								}
							}
						}, [t._v(t._s(e.title))])
					})), 0)]), t._v(" "), t._l(t.service.acf.tabs, (function (e, r) {
						return n("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: t.tabKey == r,
								expression: "tabKey == key"
							}],
							key: e.title,
							staticClass: "tabs--content",
							style: "height: calc( 100% - " + t.blockHeight + "px)"
						}, [n("perfect-scrollbar", [t._l(e.content, (function (text, e) {
							return [n("div", {
								key: "el_" + e,
								class: e % 2 ? "text right" : "text left",
								domProps: {
									innerHTML: t._s(text)
								}
							})]
						}))], 2)], 1)
					}))], 2)])
				}), [], !1, null, null, null);
			e.default = component.exports
		}
	}
]);