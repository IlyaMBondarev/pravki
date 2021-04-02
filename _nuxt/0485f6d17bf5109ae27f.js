(window.webpackJsonp = window.webpackJsonp || []).push([
	[6], {
		210: function (t, e, n) {
			"use strict";
			n.r(e);
			var r = n(23),
				l = (n(17), n(15), n(120), {
					data: function () {
						return {
							swiperOptionMain: {
								slidesPerView: 1,
								centeredSlides: !0,
								spaceBetween: 10,
								autoplay: !0
							}
						}
					},
					head: function () {
						return {
							title: this.$store.state.pages.data[3]._yoast_wpseo_title,
							meta: [{
								hid: "description",
								id: "description",
								name: "description",
								content: this.$store.state.pages.data[3]._yoast_wpseo_metadesc
							}]
						}
					},
					computed: {
						sliderContent: function () {
							for (var t = [], e = 0, n = Object.entries(this.$store.state.general.data.slider); e < n.length; e++) {
								var l = Object(r.a)(n[e], 2),
									o = l[0],
									c = l[1];
								t[o] = {
									title: c.title,
									subTitle: c.subtitle,
									price: c.description
								}
							}
							return t
						},
						general: function () {
							return this.$store.state.general.data
						}
					}
				}),
				o = n(9),
				component = Object(o.a)(l, (function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "page"
					}, [n("div", {
						staticClass: "page--main"
					}, [n("img", {
						staticClass: "beograd",
						attrs: {
							src: "/img/img-logo-main.png",
							alt: "img-logo"
						}
					}), t._v(" "), n("div", {
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
					}, [t._m(0), t._v(" "), n("div", {
						staticClass: "phone"
					}, [t._v("\n                        юриста\n                        "), n("a", {
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
					}, [t._v("\n                        бухгалтера\n                        "), n("a", {
						attrs: {
							href: "tel:" + t.general.bookerPhone
						}
					}, [t._v(t._s(t.general.bookerPhone))])])])])]), t._v(" "), n("div", {
						directives: [{
							name: "swiper",
							rawName: "v-swiper:mySwiper",
							value: t.swiperOptionMain,
							expression: "swiperOptionMain",
							arg: "mySwiper"
						}],
						ref: "swiper",
						staticClass: "main--slider"
					}, [n("div", {
						staticClass: "swiper-wrapper"
					}, t._l(t.sliderContent, (function (e, r) {
						return n("div", {
							key: r,
							staticClass: "swiper-slide",
							attrs: {
								"data-swiper-autoplay": t.$store.state.general.data.sliderInterval
							}
						}, [n("div", {
							staticClass: "title"
						}, [n("span", [t._v(t._s(e.title))]), t._v("\n                        " + t._s(e.subTitle) + "\n                    ")]), t._v(" "), n("div", {
							staticClass: "price"
						}, [t._v(t._s(e.price))]), t._v(" "), n("div", {
							staticClass: "quantity"
						}, [n("span", {
							staticClass: "current"
						}, [t._v(t._s(r < 9 ? "0" + (r + 1) : r + 1))]), t._v("/\n                        "), n("span", {
							staticClass: "all"
						}, [t._v(t._s(t.sliderContent.length < 10 ? "0" + t.sliderContent.length : t.sliderContent.length))])])])
					})), 0)])])])
				}), [function () {
					var t = this.$createElement,
						e = this._self._c || t;
					return e("div", {
						staticClass: "title"
					}, [e("span", [this._v("Бесплатная")]), this._v(" "), e("span", [this._v("консультация")])])
				}], !1, null, null, null);
			e.default = component.exports
		}
	}
]);