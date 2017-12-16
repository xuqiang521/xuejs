! function(e) {
	function t(o) {
		if (n[o]) return n[o].exports;
		var i = n[o] = {
			i: o,
			l: !1,
			exports: {}
		};
		return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
	}
	var n = {};
	t.m = e, t.c = n, t.i = function(e) {
		return e
	}, t.d = function(e, n, o) {
		t.o(e, n) || Object.defineProperty(e, n, {
			configurable: !1,
			enumerable: !0,
			get: o
		})
	}, t.n = function(e) {
		var n = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "", t(t.s = 8)
}([function(e, t, n) {
	"use strict";

	function o(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function(t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(),
		r = n(2),
		u = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(r),
		a = n(4),
		s = function() {
			function e(t, n, i, r) {
				o(this, e), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.vm = t, this.expOrFn = n, this.cb = i, this.depIds = {}, this.cbs = [], this.deps = [], this.dirty = this.lazy, this.active = this.active, "function" == typeof n ? this.getter = n : (n = n.trim(), this.getter = this.parseGetter(n)), this.value = this.lazy ? void 0 : this.get(), (0, a.initComputed)(t)
			}
			return i(e, [{
				key: "update",
				value: function() {
					this.run()
				}
			}, {
				key: "run",
				value: function() {
					var e = this.get(),
						t = this.value;
					e !== t && (this.value = e, this.cb.call(this.vm, e, t))
				}
			}, {
				key: "addDep",
				value: function(e) {
					this.depIds.hasOwnProperty(e.id) || (e.addSub(this), this.depIds[e.id] = e, this.cbs.push(this.cb))
				}
			}, {
				key: "teardown",
				value: function() {
					if (this.active) {
						this.deps.length
					}
				}
			}, {
				key: "get",
				value: function() {
					u.default.target = this;
					var e = this.getter && this.getter.call(this.vm, this.vm._data);
					return u.default.target = null, e
				}
			}, {
				key: "parseGetter",
				value: function(e) {
					if (!/[^\w.$]/.test(e)) {
						var t = e.split(".");
						return function(e) {
							for (var n = 0, o = t.length; n < o; n++) {
								if (!e) return;
								e = e[t[n]]
							}
							return e
						}
					}
				}
			}]), e
		}();
	t.default = s
}, function(e, t, n) {
	"use strict";
	var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		i = t;
	i.def = function(e, t, n, o) {
		Object.defineProperty(e, t, {
			value: n,
			enumerable: !!o,
			configurable: !0,
			writable: !0
		})
	}, i.protoAugment = function(e, t) {
		e.__proto__ = t
	}, i.copyAugment = function(e, t, n) {
		for (var o = 0, i = n.length; o < i; o++) {
			var r = n[o];
			def(e, r, t[r])
		}
	};
	var r = Object.prototype.hasOwnProperty;
	i.hasOwn = function(e, t) {
		return r.call(e, t)
	}, i.isUndef = function(e) {
		return void 0 === e || null === e
	}, i.isDef = function(e) {
		return void 0 !== e || null !== e
	}, i.isTrue = function(e) {
		return !0 === e
	}, i.isFalse = function(e) {
		return !1 === e
	}, i.isObject = function(e) {
		return null !== e && "object" === (void 0 === e ? "undefined" : o(e))
	};
	var u = String.prototype.isString;
	i.isPlainObject = function(e) {
		return "[object Object]" === u.call(e)
	}, i.isRegExp = function(e) {
		return "[object RegExp]" === u.call(e)
	}, i.isValidArrayIndex = function(e) {
		var t = parseFloat;
		return t >= 0 && Math.floor(t) === t && isFinite(e)
	}, i.noop = function() {}, i.isNative = function(e) {
		return "function" == typeof e && /native code/.test(e)
	}, i.toArray = function(e, t) {
		t = t || 0;
		for (var n = e.length - t, o = new Array(n); n--;) o[n] = e[n + t];
		return o
	}, i.toString = function(e) {
		return null == e ? "" : "object" === (void 0 === e ? "undefined" : o(e)) ? JSON.stringify(e, null, 2) : String(e)
	}, i.toNumber = function(e) {
		var t = parseFloat(e);
		return isNaN(t) ? e : t
	}, "undefined" != typeof Set && i.isNative(Set) ? i.Set = Set : i.Set = function() {
		function e() {
			this.set = Object.create(null)
		}
		return e.prototype.has = function(e) {
			return !0 === this.set[e]
		}, e.prototype.add = function(e) {
			this.set[e] = !0
		}, e.prototype.clear = function() {
			this.set = Object.create(null)
		}, e
	}(), i.extend = function(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	}, i.toObject = function(e) {
		for (var t = {}, n = 0; n < e.length; n++) e[n] && extend(t, e[n]);
		return t
	}
}, function(e, t, n) {
	"use strict";

	function o(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function(t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(),
		r = 0,
		u = function() {
			function e() {
				o(this, e), this.id = r++, this.subs = []
			}
			return i(e, [{
				key: "addSub",
				value: function(e) {
					this.subs.push(e)
				}
			}, {
				key: "removeSub",
				value: function(e) {
					var t = this.subs.indexOf(e);
					t > -1 && this.subs.splice(t, 1)
				}
			}, {
				key: "notify",
				value: function() {
					this.subs.forEach(function(e) {
						e.update()
					})
				}
			}, {
				key: "depend",
				value: function() {
					e.target.addDep(this)
				}
			}]), e
		}();
	u.target = null, t.default = u
}, function(e, t, n) {
	"use strict";

	function o(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function(t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(),
		r = n(0),
		u = (function(e) {
			e && e.__esModule
		}(r), n(9)),
		a = function() {
			function e(t, n) {
				o(this, e), this.$vm = n, this.$el = this.isElementNode(t) ? t : document.querySelector(t), this.$el && (this.$fragment = this.nodeFragment(this.$el), this.compileElement(this.$fragment), this.$el.appendChild(this.$fragment))
			}
			return i(e, [{
				key: "nodeFragment",
				value: function(e) {
					for (var t = document.createDocumentFragment(), n = void 0; n = e.firstChild;) t.appendChild(n);
					return t
				}
			}, {
				key: "compileElement",
				value: function(e) {
					var t = this,
						n = e.childNodes;
					[].slice.call(n).forEach(function(e) {
						var n = e.textContent,
							o = /\{\{((?:.|\n)+?)\}\}/g;
						t.isElementNode(e) ? t.compile(e) : t.isTextNode(e) && n.replace(o, function(n, o) {
							t.compileText(e, o)
						}), e.childNodes && e.childNodes.length && t.compileElement(e)
					})
				}
			}, {
				key: "compile",
				value: function(e) {
					var t = this,
						n = e.attributes;
					[].slice.call(n).forEach(function(n) {
						var o = n.name,
							i = o.substring(2);
						if (t.isDirective(o)) {
							var r = n.value;
							t.isEventDirective(i) ? u.CompilerUtils.eventHandler(e, t.$vm, r, i) : u.CompilerUtils[i] && u.CompilerUtils[i](e, t.$vm, r), e.removeAttribute(o)
						}
					})
				}
			}, {
				key: "compileText",
				value: function(e, t) {
					console.log(t), u.CompilerUtils.text(e, this.$vm, t)
				}
			}, {
				key: "isElementNode",
				value: function(e) {
					return 1 === e.nodeType
				}
			}, {
				key: "isTextNode",
				value: function(e) {
					return 3 === e.nodeType
				}
			}, {
				key: "isDirective",
				value: function(e) {
					return 0 === e.indexOf("x-")
				}
			}, {
				key: "isEventDirective",
				value: function(e) {
					return 0 === e.indexOf("on")
				}
			}]), e
		}();
	t.default = a
}, function(e, t, n) {
	"use strict";

	function o(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		r = n(1),
		u = o(r),
		a = n(5),
		s = n(0),
		l = o(s),
		c = n(2);
	o(c);
	t.initComputed = function(e) {
		var t = e.$options.computed;
		t && "object" === (void 0 === t ? "undefined" : i(t)) && Object.keys(t).forEach(function(n) {
			var o = t[n],
				i = "function" == typeof o ? o : o.get;
			void 0 === i && (warn('No getter function has been defined for computed property "' + n + '".', e), i = u.default.noop), Object.defineProperty(e._data, n, {
				enumerable: !0,
				configurable: !0,
				get: i,
				set: u.default.noop
			})
		})
	}, t.initWatch = function(e, t) {
		var n = e.$options.watch;
		for (var o in n) {
			var i = n[o];
			new l.default(e, o, i)
		}
	}, t.set = function(e, t, n) {
		if (Array.isArray(e) && "number" == typeof t) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
		if (u.default.hasOwn(e, t)) return e[t] = n, n;
		var o = e.__ob__;
		return o ? ((0, a.defineReactive)(o.value, t, n), o.dep.notify(), n) : (e[t] = n, n)
	}, t.del = function(e, t) {
		if (Array.isArray(e) && "number" == typeof t) return void e.splice(t, 1);
		var n = e.__ob__;
		u.default.hasOwn(e, t) && (delete e[t], n && n.dep.notify())
	}, t.mounted = function(e) {
		var t = e.$options.mounted;
		t && t()
	}, t.nextTick = function() {
		function e() {
			n = !1;
			var e = t.slice(0);
			t.length = 0;
			for (var o = 0; o < e.length; o++) e[o]()
		}
		var t = [],
			n = !1;
		if ("undefined" != typeof Promise && u.default.isNative(Promise)) {
			var o = Promise.resolve(),
				i = function(e) {
					console.error(e)
				};
			(function() {
				o.then(e).catch(i)
			})
		} else(function() {
			setTimeout(e, 0)
		});
		return function(e, o) {
			var i = void 0;
			if (t.push(function() {
					if (e) try {
						e.call(o)
					} catch (e) {
						logError(e)
					} else i && i(o)
				}), n || (n = !0, timerFunc()), !e && "undefined" != typeof Promise) return new Promise(function(e, t) {
				i = e
			})
		}
	}()
}, function(e, t, n) {
	"use strict";

	function o(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function r(e, t, n) {
		var o = new d.default,
			i = u(n);
		Object.defineProperty(e, t, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return d.default.target && (o.depend(), i && i.dep.depend()), n
			},
			set: function(e) {
				n === e || e !== e && n !== n || (n = e, i = u(e), o.notify())
			}
		})
	}

	function u(e, t) {
		if (e && "object" === (void 0 === e ? "undefined" : a(e))) {
			return c.default.hasOwn(e, "__ob__") && e.__ob__ instanceof b ? e.__ob__ : new b(e)
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.observe = t.defineReactive = t.Observer = void 0;
	var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		s = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function(t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(),
		l = n(1),
		c = o(l),
		f = n(2),
		d = o(f),
		v = n(3),
		p = (o(v), Array.prototype),
		h = Object.create(p);
	["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
		var t = h[e];
		c.default.def(h, e, function() {
			for (var n = arguments, o = arguments.length, i = new Array(o); o--;) i[o] = n[o];
			var r = t.apply(this, i),
				u = this.__ob__,
				a = void 0;
			switch (e) {
				case "push":
				case "unshift":
					a = i;
					break;
				case "splice":
					a = i.slice(2)
			}
			return a && u.observeArray(a), u.dep.notify(), r
		})
	});
	var y = Object.getOwnPropertyNames(h),
		m = "__proto__" in {},
		b = function() {
			function e(t) {
				if (i(this, e), this.value = t, this.dep = new d.default, c.default.def(t, "__ob__", this), Array.isArray(t)) {
					(m ? c.default.protoAugment : c.default.copyAugment)(t, h, y), this.observeArray(t)
				} else this.walk(t)
			}
			return s(e, [{
				key: "walk",
				value: function(e) {
					Object.keys(e).forEach(function(t) {
						r(e, t, e[t])
					})
				}
			}, {
				key: "observeArray",
				value: function(e) {
					for (var t = 0, n = e.length; t < n; t++) u(e[t])
				}
			}]), e
		}();
	t.Observer = b, t.defineReactive = r, t.observe = u
}, function(e, t) {}, function(e, t, n) {
	e.exports = '<!DOCTYPE html> <html lang=en> <head> <meta charset=UTF-8> <meta name=viewport content="width=device-width,initial-scale=1"> <meta http-equiv=X-UA-Compatible content="ie=edge"> <link rel=icon type=image/png href=' + n(10) + "> <title>xuejs</title> </head> <body> <div id=xue> <h2>{{b}}{{\" \" +a}}</h2> <input type=text x-model=a> <input type=text name=\"\" value=\"\" x-model=b> <p>{{ a }}</p> <p>{{ msg }}</p> <p>{{ msg1 }}</p> <button type=button name=button x-on:click=testToggle>change b</button> </div> </body> <script> var vm = new Xue({\n  el: '#xue',\n  data: {\n    a: 'test model',\n    b: 'hello MVVM',\n    c: [1, 2],\n    flag: true\n  },\n  methods: {\n    testToggle: function () {\n      this.flag = !this.flag;\n      this.b = this.flag ? 'hello MVVM' : 'test success'\n    }\n  },\n  computed: {\n    msg: function () {\n      return `计算出来的属性为：${this.a}, ${this.b}。`;\n    },\n    msg1: function () {\n      return `计算出来的属性为：${this.b}, ${this.a}。`;\n    }\n  },\n  mounted: function () {\n    console.log('this is mounted');\n  }\n  // watch: {\n  //   a: function (newVal, oldVal) {\n  //     console.log(newVal, oldVal);\n  //   }\n  // }\n});\nvm.$watch('a', function (newVal, oldVal) {\n  console.log(newVal, oldVal);\n}, {\n  immediate: true\n})\nvm.$watch('b', function (newVal, oldVal) {\n  console.log(newVal, oldVal);\n})\nvm.$on('test', function test () {\n  console.log('测试发布订阅实例方法$on')\n})\nvm.$on('test', function test1 () {\n  console.log('测试发布订阅实例方法$on 1')\n})\nvm.$once('test', function test2 () {\n  console.log('测试发布订阅实例方法$once')\n})\nvm.$emit('test')\nconsole.log(vm._events)\nvm.$off('test')\nconsole.log(vm._events)\nvm.c.push(4);\n// notify\n// vm.c => (3)[1, 2, 4, __ob__: Observer] <\/script> </html> "
}, function(e, t, n) {
	"use strict";

	function o(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function(t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(),
		u = n(1),
		a = o(u),
		s = n(5),
		l = n(4),
		c = n(0),
		f = o(c),
		d = n(3),
		v = o(d);
	n(7), n(6);
	var p = function() {
		function e(t) {
			i(this, e), this.$options = t || {}, this._events = Object.create(null), this.init(t), (0, l.initWatch)(this), (0, l.mounted)(this)
		}
		return r(e, [{
			key: "init",
			value: function(e) {
				var t = this._data = this.$options.data,
					n = this;
				(0, l.initComputed)(n), Object.keys(t).forEach(function(e) {
					n.proxy(e)
				}), (0, s.observe)(t, n), new v.default(e.el || document.body, n)
			}
		}, {
			key: "proxy",
			value: function(e, t, n) {
				var o = this;
				t = t || Object.defineProperty(o, e, {
					configurable: !1,
					enumerable: !0,
					get: function() {
						return o._data[e]
					},
					set: function(t) {
						o._data[e] = t
					}
				})
			}
		}, {
			key: "$set",
			value: function(e, t, n) {
				(0, l.set)(e, t, n)
			}
		}, {
			key: "$delete",
			value: function(e, t) {
				(0, l.del)(e, t)
			}
		}, {
			key: "$watch",
			value: function(e, t, n) {
				var o = this;
				n = n || {};
				var i = new f.default(o, e, t, n);
				n.immediate && t.call(o, i.value)
			}
		}, {
			key: "$on",
			value: function(e, t) {
				var n = this,
					o = this;
				if (Array.isArray(e))
					for (var i = 0, r = e.length; i < r; i++) n.$on(e[i], t);
				else(o._events[e] || (o._events[e] = [])).push(t);
				return o
			}
		}, {
			key: "$once",
			value: function(e, t) {
				function n() {
					o.$off(e, n), t.apply(o, arguments)
				}
				var o = this;
				return o.$on(e, n), o
			}
		}, {
			key: "$off",
			value: function(e, t) {
				var n = this,
					o = this;
				if (!arguments.length) return this._events = Object.create(null), o;
				if (Array.isArray(e)) {
					for (var i = 0, r = e.length; i < r; i++) n.$off(e[i], t);
					return o
				}
				var u = o._events[e];
				if (!u) return o;
				if (1 === arguments.length) return this._events[e] = null, o;
				for (var a = void 0, s = u.length; s--;)
					if ((a = u[s]) === t || a.fn === t) {
						u.splice(s, 1);
						break
					}
				return o
			}
		}, {
			key: "$emit",
			value: function(e) {
				var t = this,
					n = this._events[e];
				if (n) {
					n = n.length > 1 ? a.default.toArray(n) : n;
					for (var o = a.default.toArray(arguments, 1), i = 0, r = n.length; i < r; i++) n[i].apply(t, o)
				}
				return t
			}
		}]), e
	}();
	e.exports = window.Xue = p
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.updater = t.CompilerUtils = void 0;
	var o = n(0),
		i = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(o),
		r = null,
		u = {
			html: function(e, t, n) {
				this.bind(e, t, n, "html")
			},
			text: function(e, t, n) {
				this.bind(e, t, n, "text")
			},
			model: function(e, t, n) {
				this.bind(e, t, n, "model");
				var o = this,
					i = this._getVmVal(t, n);
				e.addEventListener("input", function(e) {
					var u = e.target.value;
					i !== u && (clearTimeout(r), r = setTimeout(function() {
						o._setVmVal(t, n, u), i = u
					}))
				})
			},
			bind: function(e, t, n, o) {
				var r = this,
					u = a[o + "Updater"],
					s = /\'|\"/g,
					l = void 0,
					c = [];
				n.split("+").forEach(function(e, o) {
					c[o] = s.test(e) ? e.replace(s, "") : (n = e, r._getVmVal(t, e))
				}), l = c.join(""), u && u(e, l), new i.default(t, n, function(n, i) {
					"model" === o ? u && u(e, n, i, t) : u && u(e, n, i)
				})
			},
			eventHandler: function(e, t, n, o) {
				var i = o.split(":")[1],
					r = t.$options.methods && t.$options.methods[n];
				i && r && e.addEventListener(i, r.bind(t), !1)
			},
			_getVmVal: function(e, t) {
				var n = e;
				return t.split(".").forEach(function(e) {
					e = e.trim(), n = n[e]
				}), n
			},
			_setVmVal: function(e, t, n) {
				var o = e,
					i = t.split(".");
				i.forEach(function(e, t) {
					e = e.trim(), t < i.length - 1 ? o = o[e] : o[e] = n
				})
			}
		},
		a = {
			htmlUpdater: function(e, t, n) {
				e.innerHTML = void 0 === t ? "" : t
			},
			textUpdater: function(e, t, n) {
				if (/\{\{((?:.|\n)+?)\}\}/g.test(e.textContent)) e.textContent = void 0 === t ? "" : t;
				else if (void 0 === n) e.textContent = e.textContent + t;
				else {
					var o = new RegExp(n);
					e.textContent = e.textContent.replace(o, t)
				}
			},
			modelUpdater: function(e, t, n, o) {
				e.value = void 0 === t ? "" : t
			}
		};
	t.CompilerUtils = u, t.updater = a
}, function(e, t) {
	e.exports = "data:image/png;base64,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"
}]);