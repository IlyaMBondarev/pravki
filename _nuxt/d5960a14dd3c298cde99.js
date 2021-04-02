(window.webpackJsonp = window.webpackJsonp || []).push([
	[5], {
		209: function (t, e, o) {
			"use strict";
			o.r(e);
			var n = o(23),
				r = (o(17), o(15), o(120), {
					data: function () {
						return {
							title: "",
							mapData: "",
							iconMark: {
								layout: "default#image",
								imageHref: "/img/icn-map-marker.png"
							}
						}
					},
					head: function () {
						return {
							title: this.$store.state.pages.data[0]._yoast_wpseo_title,
							meta: [{
								hid: "description",
								id: "description",
								name: "description",
								content: this.$store.state.pages.data[0]._yoast_wpseo_metadesc
							}]
						}
					},
					computed: {
						options: function () {
							return this.$store.state.options.data
						},
						coords: function () {
							for (var t, e = 0, o = Object.entries(this.$store.state.contact.data.ya_data.marks); e < o.length; e++) {
								var r = Object(n.a)(o[e], 2);
								r[0];
								t = r[1].coords
							}
							return t
						}
					}
				}),
				c = o(9),
				component = Object(c.a)(r, (function () {
					var t = this,
						e = t.$createElement,
						o = t._self._c || e;
					return o("div", {
						staticClass: "page"
					}, [o("div", {
						staticClass: "page--contact"
					}, [o("h1", {
						staticClass: "h1"
					}, [t._v(t._s(t.title))]), t._v(" "), o("div", {
						staticClass: "info"
					}, [o("div", {
						staticClass: "info__main"
					}, [o("div", {
						attrs: {
							itemscope: "",
							itemtype: "http://schema.org/Organization"
						}
					}, [o("div", {
						staticClass: "address text"
					}, [o("span", {
						attrs: {
							itemprop: "streetAddress"
						}
					}, [t._v(t._s(t.options.address))])]), t._v(" "), o("div", {
						staticClass: "phones"
					}, [o("div", {
						staticClass: "phone text"
					}, [t._v("\n                            Правовое управление\n                            "), o("span", {
						attrs: {
							itemprop: "telephone"
						}
					}, [t._v(t._s(t.options.legalPhone))])]), t._v(" "), o("div", {
						staticClass: "phone text"
					}, [t._v("\n                            Финансовое управление\n                            "), o("span", {
						attrs: {
							itemprop: "telephone"
						}
					}, [t._v(t._s(t.options.financialPhone))])])]), t._v(" "), o("span", {
						attrs: {
							itemprop: "email"
						}
					}, [o("a", {
						staticClass: "email text",
						attrs: {
							href: "mailto:" + t.options.email
						}
					}, [t._v(t._s(t.options.email))])])])]), t._v(" "), o("div", {
						staticClass: "info__map"
					}, [o("yandex-map", {
						attrs: {
							coords: t.coords,
							zoom: "14"
						}
					}, [o("ymap-marker", {
						attrs: {
							coords: t.coords,
							"marker-id": 132,
							"marker-type": "placemark",
							icon: t.iconMark
						}
					})], 1)], 1)])])])
				}), [], !1, null, null, null);
			e.default = component.exports
		}
	}
]);