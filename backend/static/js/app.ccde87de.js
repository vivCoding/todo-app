(function (t) {
	function e(e) {
		for (var o, i, u = e[0], a = e[1], d = e[2], l = 0, O = []; l < u.length; l++) i = u[l], Object.prototype.hasOwnProperty.call(r, i) && r[i] && O.push(r[i][0]), r[i] = 0;
		for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o]);
		s && s(e);
		while (O.length) O.shift()();
		return c.push.apply(c, d || []), n()
	}

	function n() {
		for (var t, e = 0; e < c.length; e++) {
			for (var n = c[e], o = !0, u = 1; u < n.length; u++) {
				var a = n[u];
				0 !== r[a] && (o = !1)
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
	var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
		a = u.push.bind(u);
	u.push = e, u = u.slice();
	for (var d = 0; d < u.length; d++) e(u[d]);
	var s = a;
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
	"5a1c": function (t, e, n) {
		"use strict";
		n("6909")
	},
	6909: function (t, e, n) {},
	cd49: function (t, e, n) {
		"use strict";
		n.r(e);
		n("e260"), n("e6cf"), n("cca6"), n("a79d");
		var o = n("7a23"),
			r = n("0c73"),
			c = n.n(r),
			i = Object(o["f"])("h1", null, "vTodo List App", -1),
			u = Object(o["f"])("p", null, "Get jazz done.", -1),
			a = Object(o["f"])("img", {
				alt: "cat typing",
				src: c.a,
				width: "150"
			}, null, -1),
			d = Object(o["f"])("br", null, null, -1),
			s = Object(o["f"])("br", null, null, -1),
			l = Object(o["f"])("br", null, null, -1),
			O = Object(o["f"])("br", null, null, -1),
			f = Object(o["f"])("a", {
				href: "https://github.com/vivCoding/vtodo",
				target: "_blank"
			}, "GitHub", -1);

		function p(t, e, n, r, c, p) {
			var b = Object(o["y"])("router-view");
			return Object(o["r"])(), Object(o["e"])(o["a"], null, [i, u, a, Object(o["h"])(b), d, s, Object(o["f"])("button", {
				onClick: e[0] || (e[0] = function () {
					return t.createList && t.createList.apply(t, arguments)
				})
			}, "Create New List"), l, O, f], 64)
		}
		var b, j, v, h = n("6c02"),
			m = n("1da1"),
			T = n("ade3"),
			g = (n("96cf"), n("d3b7"), n("25f0"), n("4de4"), n("7db0"), n("a4d3"), n("e01a"), n("5502")),
			y = function () {
				var t = Object(m["a"])(regeneratorRuntime.mark((function t(e) {
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
			L = function () {
				var t = Object(m["a"])(regeneratorRuntime.mark((function t(e) {
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
		})(b || (b = {}));
		var _ = Object(g["a"])({
				state: {
					todos: [],
					todoListId: ""
				},
				mutations: (j = {}, Object(T["a"])(j, b.ADD_TODO, (function (t, e) {
					t.todos.push({
						id: Math.random().toString(16).substr(2, 8),
						todo: e.todo,
						completed: !1
					})
				})), Object(T["a"])(j, b.REMOVE_TODO, (function (t, e) {
					t.todos = t.todos.filter((function (t) {
						return t.id != e.id
					}))
				})), Object(T["a"])(j, b.MARK_COMPLETION, (function (t, e) {
					var n, o = t.todos.find((function (t) {
						return t.id == e.id
					}));
					o && (o.completed = null === (n = e.completed) || void 0 === n || n)
				})), Object(T["a"])(j, b.SET_TODOS, (function (t, e) {
					t.todoListId = e.todoListId, t.todos = e.todos
				})), j),
				actions: (v = {}, Object(T["a"])(v, b.SAVE_TODO_LIST, (function () {
					var t = this;
					return Object(m["a"])(regeneratorRuntime.mark((function e() {
						var n;
						return regeneratorRuntime.wrap((function (e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return n = JSON.stringify({
										todo_list_id: t.state.todoListId,
										todos: t.state.todos
									}), e.next = 3, y(n);
								case 3:
									alert("Saved list! Access this URL anytime to view it again.");
								case 4:
								case "end":
									return e.stop()
							}
						}), e)
					})))()
				})), Object(T["a"])(v, b.GET_TODO_LIST, (function (t, e) {
					return Object(m["a"])(regeneratorRuntime.mark((function n() {
						var o;
						return regeneratorRuntime.wrap((function (n) {
							while (1) switch (n.prev = n.next) {
								case 0:
									return n.next = 2, L(e.todoListId);
								case 2:
									o = n.sent, console.log(o), t.commit(b.SET_TODOS, {
										todoListId: e.todoListId,
										todos: o
									});
								case 5:
								case "end":
									return n.stop()
							}
						}), n)
					})))()
				})), v)
			}),
			w = Symbol(),
			I = function () {
				return Object(g["b"])(w)
			},
			S = _,
			C = Object(o["i"])({
				name: "App",
				setup: function () {
					var t = I(),
						e = Object(h["c"])(),
						n = Object(o["w"])();
					Object(o["E"])((function () {
						return e.params.id
					}), (function (e) {
						n.value = e, t.dispatch(b.GET_TODO_LIST, {
							todoListId: e
						})
					}));
					var r = function () {
						var t;
						null === (t = window.open("/createlist", "_blank")) || void 0 === t || t.focus()
					};
					return {
						createList: r
					}
				}
			});
		n("5a1c");
		C.render = p;
		var D = C,
			A = Object(o["f"])("strong", null, "My List ID:", -1),
			E = Object(o["g"])(),
			R = Object(o["g"])("  "),
			k = Object(o["g"])("  ");

		function x(t, e, n, r, c, i) {
			var u = Object(o["y"])("todo-input"),
				a = Object(o["y"])("todo-item");
			return Object(o["r"])(), Object(o["e"])(o["a"], null, [Object(o["f"])("p", null, [A, E, Object(o["f"])("i", null, Object(o["A"])(t.todoListId), 1)]), Object(o["h"])(u), Object(o["f"])("ul", null, [(Object(o["r"])(!0), Object(o["e"])(o["a"], null, Object(o["x"])(t.todos, (function (t) {
				return Object(o["r"])(), Object(o["d"])(a, {
					key: t.id,
					todo: t
				}, null, 8, ["todo"])
			})), 128)), Object(o["F"])(Object(o["f"])("p", null, "Nothing to do!", 512), [
				[o["D"], 0 == t.todos.length]
			])]), Object(o["f"])("button", {
				onClick: e[0] || (e[0] = function () {
					return t.saveList && t.saveList.apply(t, arguments)
				})
			}, "Save list"), R, Object(o["f"])("button", {
				onClick: e[1] || (e[1] = function () {
					return t.shareList && t.shareList.apply(t, arguments)
				})
			}, "Share List"), k], 64)
		}
		Object(o["u"])("data-v-23555080");
		var M = Object(o["g"])("  "),
			P = Object(o["g"])("  ");

		function V(t, e, n, r, c, i) {
			return Object(o["r"])(), Object(o["e"])("li", null, [Object(o["f"])("button", {
				onClick: e[0] || (e[0] = function () {
					return t.handleRemoveTodo && t.handleRemoveTodo.apply(t, arguments)
				})
			}, "Remove"), M, Object(o["f"])("button", {
				onClick: e[1] || (e[1] = function () {
					return t.handleCompletedTodo && t.handleCompletedTodo.apply(t, arguments)
				})
			}, Object(o["A"])(t.hasCompleted ? "Incomplete" : "Completed"), 1), P, Object(o["f"])("span", {
				class: Object(o["n"])({
					completed: t.hasCompleted
				})
			}, Object(o["A"])(t.item.todo), 3)])
		}
		Object(o["s"])();
		var G = Object(o["i"])({
			name: "TodoItem",
			props: {
				todo: {
					type: Object,
					required: !0
				}
			},
			setup: function (t) {
				var e = I(),
					n = Object(o["w"])(t.todo),
					r = n.value.id,
					c = function () {
						e.commit(b.REMOVE_TODO, {
							id: r
						})
					},
					i = Object(o["w"])(n.value.completed),
					u = function () {
						i.value = !i.value, e.commit(b.MARK_COMPLETION, {
							id: r,
							completed: i.value
						})
					};
				return {
					item: n,
					handleRemoveTodo: c,
					hasCompleted: i,
					handleCompletedTodo: u
				}
			}
		});
		n("2cb1");
		G.render = V, G.__scopeId = "data-v-23555080";
		var N = G,
			J = Object(o["g"])("  ");

		function K(t, e, n, r, c, i) {
			return Object(o["r"])(), Object(o["e"])(o["a"], null, [Object(o["F"])(Object(o["f"])("input", {
				"onUpdate:modelValue": e[0] || (e[0] = function (e) {
					return t.todoToAdd = e
				})
			}, null, 512), [
				[o["C"], t.todoToAdd]
			]), J, Object(o["f"])("button", {
				onClick: e[1] || (e[1] = function () {
					return t.handleAddTodo && t.handleAddTodo.apply(t, arguments)
				})
			}, "Add Todo")], 64)
		}
		var U = Object(o["i"])({
			name: "TodoInput",
			setup: function () {
				var t = I(),
					e = Object(o["w"])(""),
					n = function () {
						t.commit(b.ADD_TODO, {
							todo: e.value
						}), e.value = ""
					};
				return {
					todoToAdd: e,
					handleAddTodo: n
				}
			}
		});
		U.render = K;
		var z = U,
			F = Object(o["i"])({
				name: "TodoList",
				components: {
					TodoItem: N,
					TodoInput: z
				},
				setup: function () {
					var t = I(),
						e = function () {
							t.dispatch(b.SAVE_TODO_LIST)
						},
						n = function () {
							navigator.clipboard.writeText(window.location.href).then((function () {
								alert("Copied todo list URL to clipboard!")
							}))
						};
					return {
						todos: Object(o["b"])((function () {
							return t.state.todos
						})),
						todoListId: Object(o["b"])((function () {
							return t.state.todoListId
						})),
						saveList: e,
						shareList: n
					}
				}
			});
		F.render = x;
		var q = F,
			H = [{
				path: "/:id",
				component: q
			}],
			B = Object(h["a"])({
				history: Object(h["b"])(),
				routes: H
			}),
			Q = B;
		Object(o["c"])(D).use(Q).use(S, w).mount("#app")
	},
	ff22: function (t, e, n) {}
});
//# sourceMappingURL=app.ccde87de.js.map