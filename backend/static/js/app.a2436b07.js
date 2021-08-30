(function (t) {
	function e(e) {
		for (var o, i, a = e[0], u = e[1], d = e[2], l = 0, f = []; l < a.length; l++) i = a[l], Object.prototype.hasOwnProperty.call(r, i) && r[i] && f.push(r[i][0]), r[i] = 0;
		for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (t[o] = u[o]);
		s && s(e);
		while (f.length) f.shift()();
		return c.push.apply(c, d || []), n()
	}

	function n() {
		for (var t, e = 0; e < c.length; e++) {
			for (var n = c[e], o = !0, a = 1; a < n.length; a++) {
				var u = n[a];
				0 !== r[u] && (o = !1)
			}
			o && (c.splice(e--, 1), t = i(i.s = n[0]))
		}
		return t
	}
	var o = {},
		r = {
			app: 0
		},
		c = [];

	function i(e) {
		if (o[e]) return o[e].exports;
		var n = o[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports
	}
	i.m = t, i.c = o, i.d = function (t, e, n) {
		i.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	}, i.r = function (t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, i.t = function (t, e) {
		if (1 & e && (t = i(t)), 8 & e) return t;
		if (4 & e && "object" === typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (i.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var o in t) i.d(n, o, function (e) {
				return t[e]
			}.bind(null, o));
		return n
	}, i.n = function (t) {
		var e = t && t.__esModule ? function () {
			return t["default"]
		} : function () {
			return t
		};
		return i.d(e, "a", e), e
	}, i.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, i.p = "/";
	var a = window["webpackJsonp"] = window["webpackJsonp"] || [],
		u = a.push.bind(a);
	a.push = e, a = a.slice();
	for (var d = 0; d < a.length; d++) e(a[d]);
	var s = u;
	c.push([0, "chunk-vendors"]), n()
})({
	0: function (t, e, n) {
		t.exports = n("cd49")
	},
	"0c73": function (t, e, n) {
		t.exports = n.p + "static/img/cat_typing.385ee88e.gif"
	},
	"2cb1": function (t, e, n) {
		"use strict";
		n("ff22")
	},
	"60a8": function (t, e, n) {},
	"80bc": function (t, e, n) {
		"use strict";
		n("60a8")
	},
	cd49: function (t, e, n) {
		"use strict";
		n.r(e);
		n("e260"), n("e6cf"), n("cca6"), n("a79d");
		var o = n("7a23"),
			r = n("0c73"),
			c = n.n(r),
			i = Object(o["f"])("h1", null, "vTodo List App", -1),
			a = Object(o["f"])("p", null, "Get jazz done.", -1),
			u = Object(o["f"])("img", {
				alt: "cat typing",
				src: c.a,
				width: "150"
			}, null, -1);

		function d(t, e, n, r, c, d) {
			var s = Object(o["y"])("router-view");
			return Object(o["r"])(), Object(o["e"])(o["a"], null, [i, a, u, Object(o["h"])(s)], 64)
		}
		var s, l, f, O = n("6c02"),
			b = n("1da1"),
			p = n("ade3"),
			j = (n("96cf"), n("d3b7"), n("25f0"), n("4de4"), n("7db0"), n("a4d3"), n("e01a"), n("5502")),
			v = function () {
				var t = Object(b["a"])(regeneratorRuntime.mark((function t(e) {
					return regeneratorRuntime.wrap((function (t) {
						while (1) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, fetch("/api/savelist", {
									method: "POST",
									headers: {
										"Content-Type": "application/json"
									},
									body: e
								}).then((function (t) {
									return t.json()
								})).then((function (t) {
									console.log(t)
								}));
							case 2:
							case "end":
								return t.stop()
						}
					}), t)
				})));
				return function (e) {
					return t.apply(this, arguments)
				}
			}(),
			h = function () {
				var t = Object(b["a"])(regeneratorRuntime.mark((function t(e) {
					var n;
					return regeneratorRuntime.wrap((function (t) {
						while (1) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, fetch("/api/".concat(e), {
									method: "GET",
									headers: {
										"Content-Type": "application/json"
									}
								}).then((function (t) {
									return 200 != t.status ? {
										id: "",
										todos: []
									} : t.json()
								})).then((function (t) {
									return t
								}));
							case 2:
								return n = t.sent, t.abrupt("return", n.todos);
							case 4:
							case "end":
								return t.stop()
						}
					}), t)
				})));
				return function (e) {
					return t.apply(this, arguments)
				}
			}();
		(function (t) {
			t["ADD_TODO"] = "addTodo", t["REMOVE_TODO"] = "removeTodo", t["MARK_COMPLETION"] = "markCompletion", t["SAVE_TODO_LIST"] = "saveTodoList", t["GET_TODO_LIST"] = "getTodoList", t["SET_TODOS"] = "setTodoLists"
		})(s || (s = {}));
		var m = Object(j["a"])({
				state: {
					todos: [],
					todoListId: ""
				},
				mutations: (l = {}, Object(p["a"])(l, s.ADD_TODO, (function (t, e) {
					t.todos.push({
						id: Math.random().toString(16).substr(2, 8),
						todo: e.todo,
						completed: !1
					})
				})), Object(p["a"])(l, s.REMOVE_TODO, (function (t, e) {
					t.todos = t.todos.filter((function (t) {
						return t.id != e.id
					}))
				})), Object(p["a"])(l, s.MARK_COMPLETION, (function (t, e) {
					var n, o = t.todos.find((function (t) {
						return t.id == e.id
					}));
					o && (o.completed = null === (n = e.completed) || void 0 === n || n)
				})), Object(p["a"])(l, s.SET_TODOS, (function (t, e) {
					t.todoListId = e.todoListId, t.todos = e.todos
				})), l),
				actions: (f = {}, Object(p["a"])(f, s.SAVE_TODO_LIST, (function () {
					var t = this;
					return Object(b["a"])(regeneratorRuntime.mark((function e() {
						var n;
						return regeneratorRuntime.wrap((function (e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return n = JSON.stringify({
										todo_list_id: t.state.todoListId,
										todos: t.state.todos
									}), e.next = 3, v(n);
								case 3:
									alert("Saved list! Access this URL anytime to view it again.");
								case 4:
								case "end":
									return e.stop()
							}
						}), e)
					})))()
				})), Object(p["a"])(f, s.GET_TODO_LIST, (function (t, e) {
					return Object(b["a"])(regeneratorRuntime.mark((function n() {
						var o;
						return regeneratorRuntime.wrap((function (n) {
							while (1) switch (n.prev = n.next) {
								case 0:
									return n.next = 2, h(e.todoListId);
								case 2:
									o = n.sent, console.log(o), t.commit(s.SET_TODOS, {
										todoListId: e.todoListId,
										todos: o
									});
								case 5:
								case "end":
									return n.stop()
							}
						}), n)
					})))()
				})), f)
			}),
			T = Symbol(),
			g = function () {
				return Object(j["b"])(T)
			},
			y = m,
			L = Object(o["i"])({
				name: "App",
				setup: function () {
					var t = g(),
						e = Object(O["c"])(),
						n = Object(o["w"])();
					Object(o["E"])((function () {
						return e.params.id
					}), (function (e) {
						n.value = e, t.dispatch(s.GET_TODO_LIST, {
							todoListId: e
						})
					}))
				}
			});
		n("80bc");
		L.render = d;
		var _ = L;
		Object(o["u"])("data-v-5c5ba4f1");
		var w = Object(o["f"])("strong", null, "My List ID:", -1),
			I = Object(o["g"])(),
			S = Object(o["g"])("  "),
			C = Object(o["g"])("  "),
			D = Object(o["f"])("br", null, null, -1),
			A = Object(o["f"])("br", null, null, -1),
			E = Object(o["f"])("a", {
				href: "https://github.com/vivCoding/vtodo",
				target: "_blank"
			}, "GitHub", -1);

		function R(t, e, n, r, c, i) {
			var a = Object(o["y"])("todo-input"),
				u = Object(o["y"])("todo-item");
			return Object(o["r"])(), Object(o["e"])(o["a"], null, [Object(o["f"])("p", null, [w, I, Object(o["f"])("i", null, Object(o["A"])(t.todoListId), 1)]), Object(o["h"])(a), Object(o["f"])("ul", null, [(Object(o["r"])(!0), Object(o["e"])(o["a"], null, Object(o["x"])(t.todos, (function (t) {
				return Object(o["r"])(), Object(o["d"])(u, {
					key: t.id,
					todo: t
				}, null, 8, ["todo"])
			})), 128)), Object(o["F"])(Object(o["f"])("p", null, "Nothing to do!", 512), [
				[o["D"], 0 == t.todos.length]
			])]), Object(o["f"])("button", {
				onClick: e[0] || (e[0] = function () {
					return t.saveList && t.saveList.apply(t, arguments)
				})
			}, "Save list"), S, Object(o["f"])("button", {
				onClick: e[1] || (e[1] = function () {
					return t.shareList && t.shareList.apply(t, arguments)
				})
			}, "Share List"), C, Object(o["f"])("button", {
				onClick: e[2] || (e[2] = function () {
					return t.createList && t.createList.apply(t, arguments)
				})
			}, "Create New List"), D, A, E], 64)
		}
		Object(o["s"])(), Object(o["u"])("data-v-23555080");
		var k = Object(o["g"])("  "),
			x = Object(o["g"])("  ");

		function M(t, e, n, r, c, i) {
			return Object(o["r"])(), Object(o["e"])("li", null, [Object(o["f"])("button", {
				onClick: e[0] || (e[0] = function () {
					return t.handleRemoveTodo && t.handleRemoveTodo.apply(t, arguments)
				})
			}, "Remove"), k, Object(o["f"])("button", {
				onClick: e[1] || (e[1] = function () {
					return t.handleCompletedTodo && t.handleCompletedTodo.apply(t, arguments)
				})
			}, Object(o["A"])(t.hasCompleted ? "Incomplete" : "Completed"), 1), x, Object(o["f"])("span", {
				class: Object(o["n"])({
					completed: t.hasCompleted
				})
			}, Object(o["A"])(t.item.todo), 3)])
		}
		Object(o["s"])();
		var P = Object(o["i"])({
			name: "TodoItem",
			props: {
				todo: {
					type: Object,
					required: !0
				}
			},
			setup: function (t) {
				var e = g(),
					n = Object(o["w"])(t.todo),
					r = n.value.id,
					c = function () {
						e.commit(s.REMOVE_TODO, {
							id: r
						})
					},
					i = Object(o["w"])(n.value.completed),
					a = function () {
						i.value = !i.value, e.commit(s.MARK_COMPLETION, {
							id: r,
							completed: i.value
						})
					};
				return {
					item: n,
					handleRemoveTodo: c,
					hasCompleted: i,
					handleCompletedTodo: a
				}
			}
		});
		n("2cb1");
		P.render = M, P.__scopeId = "data-v-23555080";
		var V = P,
			G = Object(o["g"])("  ");

		function N(t, e, n, r, c, i) {
			return Object(o["r"])(), Object(o["e"])(o["a"], null, [Object(o["F"])(Object(o["f"])("input", {
				"onUpdate:modelValue": e[0] || (e[0] = function (e) {
					return t.todoToAdd = e
				})
			}, null, 512), [
				[o["C"], t.todoToAdd]
			]), G, Object(o["f"])("button", {
				onClick: e[1] || (e[1] = function () {
					return t.handleAddTodo && t.handleAddTodo.apply(t, arguments)
				})
			}, "Add Todo")], 64)
		}
		var J = Object(o["i"])({
			name: "TodoInput",
			setup: function () {
				var t = g(),
					e = Object(o["w"])(""),
					n = function () {
						t.commit(s.ADD_TODO, {
							todo: e.value
						}), e.value = ""
					};
				return {
					todoToAdd: e,
					handleAddTodo: n
				}
			}
		});
		J.render = N;
		var K = J,
			U = Object(o["i"])({
				name: "TodoList",
				components: {
					TodoItem: V,
					TodoInput: K
				},
				setup: function () {
					var t = g(),
						e = function () {
							t.dispatch(s.SAVE_TODO_LIST)
						},
						n = function () {
							navigator.clipboard.writeText(window.location.href).then((function () {
								alert("Copied todo list URL to clipboard!")
							}))
						},
						r = function () {
							var t;
							null === (t = window.open("/", "_blank")) || void 0 === t || t.focus()
						};
					return {
						todos: Object(o["b"])((function () {
							return t.state.todos
						})),
						todoListId: Object(o["b"])((function () {
							return t.state.todoListId
						})),
						saveList: e,
						shareList: n,
						createList: r
					}
				}
			});
		n("e9fc");
		U.render = R, U.__scopeId = "data-v-5c5ba4f1";
		var z = U,
			F = [{
				path: "/:id",
				component: z
			}],
			q = Object(O["a"])({
				history: Object(O["b"])(),
				routes: F
			}),
			H = q;
		Object(o["c"])(_).use(H).use(y, T).mount("#app")
	},
	e022: function (t, e, n) {},
	e9fc: function (t, e, n) {
		"use strict";
		n("e022")
	},
	ff22: function (t, e, n) {}
});
//# sourceMappingURL=app.a2436b07.js.map