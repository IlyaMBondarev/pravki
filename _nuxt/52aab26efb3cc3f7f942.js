(window.webpackJsonp = window.webpackJsonp || []).push([
	[4], {
		208: function (t, e, n) {
			"use strict";
			n.r(e);
			var c = {
				components: {
					PerfectScrollbar: n(84).PerfectScrollbar
				},
				data: function () {
					return {
						tabKey: 1,
						blockHeight: 0,
						scrolTab: null
					}
				},
				head: function () {
					return {
						title: this.$store.state.pages.data[2]._yoast_wpseo_title,
						meta: [{
							hid: "description",
							id: "description",
							name: "description",
							content: this.$store.state.pages.data[2]._yoast_wpseo_metadesc
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
					title: function () {
						return this.$store.state.about.data.page
					},
					tabs: function () {
						return this.$store.state.about.data.tabs
					}
				},
				mounted: function () {
					this.$nextTick((function () {
						window.addEventListener("resize", this.setHeight), this.setHeight(), window.addEventListener("resize", this.activeScrolTab), this.activeScrolTab()
					}))
				}
			},
				o = n(9),
				component = Object(o.a)(c, (function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "page"
					}, [n("div", {
						staticClass: "page--tabs"
					}, [n("h1", {
						ref: "heightTitleTab",
						staticClass: "h1"
					}, [t._v(t._s(t.title))]), t._v(" "), n("div", {
						ref: "heightNavTab",
						staticClass: "tabs--nav"
					}, [n("ul", t._l(t.tabs, (function (e, c) {
						return n("li", {
							key: e.title,
							class: c != t.tabKey ? "" : "is-active",
							on: {
								click: function (e) {
									t.tabKey = c
								}
							}
						}, [t._v(t._s(e.title))])
					})), 0)]), t._v(" "), t._l(t.tabs, (function (e, c) {
						return n("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: t.tabKey == c,
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