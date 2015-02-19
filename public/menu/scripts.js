/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function(a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = gb(),
            z = gb(),
            A = gb(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = "undefined",
            D = 1 << 31,
            E = {}.hasOwnProperty,
            F = [],
            G = F.pop,
            H = F.push,
            I = F.push,
            J = F.slice,
            K = F.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"),
            T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(Q),
            W = new RegExp("^" + O + "$"),
            X = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + Q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            db = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (k = b.nodeType) && 9 !== k) return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function hb(a) {
            return a[u] = !0, a
        }

        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function jb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function kb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function nb(a) {
            return hb(function(b) {
                return b = +b, hb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v,
                g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })), c.attributes = ib(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function(a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g) return kb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function() {
                    return [0]
                }),
                last: nb(function(a, b) {
                    return [b - 1]
                }),
                eq: nb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = lb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = mb(b);

        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };

        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function rb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                    return a === b
                }, h, !0), l = rb(function(a) {
                    return K.call(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = G.call(i));
                            s = ub(s)
                        }
                        I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function(b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && m.each(arguments, function(a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(m(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return !0
    }

    function bb() {
        return !1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]);
                else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++]) ob.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y,
            c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g
                },
                boxSizingReliable: function() {
                    return null == f && i(), f
                },
                pixelPosition: function() {
                    return null == e && i(), e
                },
                reliableMarginRight: function() {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;
        while (e--)
            if (b = Tb[e] + c, b in a) return b;
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Vb(this, !0)
        },
        hide: function() {
            return Vb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() {
        return setTimeout(function() {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                m(a).hide()
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
            tweener: function(a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? dc.unshift(a) : dc.push(a)
            }
        }), m.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gc("show"),
            slideUp: gc("hide"),
            slideToggle: gc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            m.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function(a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function() {
            _b || (_b = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function() {
            clearInterval(_b), _b = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
   

    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cd
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
jQuery.noConflict();

/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
    function(e, t, n) {
        function r(n) {
            var r = t.console;
            i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
        }

        function a(t, a, i, o) {
            if (Object.defineProperty) try {
                return Object.defineProperty(t, a, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return r(o), i
                    },
                    set: function(e) {
                        r(o), i = e
                    }
                }), n
            } catch (s) {}
            e._definePropertyBroken = !0, t[a] = i
        }
        var i = {};
        e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
            i = {}, e.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var o = e("<input/>", {
                size: 1
            }).attr("size") && e.attrFn,
            s = e.attr,
            u = e.attrHooks.value && e.attrHooks.value.get || function() {
                return null
            },
            c = e.attrHooks.value && e.attrHooks.value.set || function() {
                return n
            },
            l = /^(?:input|button)$/i,
            d = /^[238]$/,
            p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            f = /^(?:checked|selected)$/i;
        a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
            var c = a.toLowerCase(),
                g = t && t.nodeType;
            return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
                get: function(t, r) {
                    var a, i = e.prop(t, r);
                    return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
                },
                set: function(t, n, r) {
                    var a;
                    return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
                }
            }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
        }, e.attrHooks.value = {
            get: function(e, t) {
                var n = (e.nodeName || "").toLowerCase();
                return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
            },
            set: function(e, t) {
                var a = (e.nodeName || "").toLowerCase();
                return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
            }
        };
        var g, h, v = e.fn.init,
            m = e.parseJSON,
            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        e.fn.init = function(t, n, a) {
            var i;
            return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
        }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
            return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
        }, e.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
            function t(e, n) {
                return new t.fn.init(e, n)
            }
            e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) {
                return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
            }, t.fn.init.prototype = t.fn;
            var n = t(document);
            return r("jQuery.sub() is deprecated"), t
        }, e.ajaxSetup({
            converters: {
                "text json": e.parseJSON
            }
        });
        var b = e.fn.data;
        e.fn.data = function(t) {
            var a, i, o = this[0];
            return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
        };
        var j = /\/(java|ecma)script/i,
            w = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function() {
            return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
        }, e.clean || (e.clean = function(t, a, i, o) {
            a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
            var s, u, c, l, d = [];
            if (e.merge(d, e.buildFragment(t, a).childNodes), i)
                for (c = function(e) {
                        return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
                    }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
            return d
        });
        var Q = e.event.add,
            x = e.event.remove,
            k = e.event.trigger,
            N = e.fn.toggle,
            T = e.fn.live,
            M = e.fn.die,
            S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            C = RegExp("\\b(?:" + S + ")\\b"),
            H = /(?:^|\s)hover(\.\S+|)\b/,
            A = function(t) {
                return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
            };
        e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) {
            e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
        }, e.event.remove = function(e, t, n, r, a) {
            x.call(this, e, A(t) || "", n, r, a)
        }, e.fn.error = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
        }, e.fn.toggle = function(t, n) {
            if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
            r("jQuery.fn.toggle(handler, handler...) is deprecated");
            var a = arguments,
                i = t.guid || e.guid++,
                o = 0,
                s = function(n) {
                    var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
                    return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
                };
            for (s.guid = i; a.length > o;) a[o++].guid = i;
            return this.click(s)
        }, e.fn.live = function(t, n, a) {
            return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
        }, e.fn.die = function(t, n) {
            return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
        }, e.event.trigger = function(e, t, n, a) {
            return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
        }, e.each(S.split("|"), function(t, n) {
            e.event.special[n] = {
                setup: function() {
                    var t = this;
                    return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                        e.event.trigger(n, null, t, !0)
                    }), e._data(this, n, e.guid++)), !1
                },
                teardown: function() {
                    return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
                }
            }
        })
    }(jQuery, window);

function getUserSetting(a, b) {
    var c = getAllUserSettings();
    return c.hasOwnProperty(a) ? c[a] : "undefined" != typeof b ? b : ""
}

function setUserSetting(a, b, c) {
    if ("object" != typeof userSettings) return !1;
    var d = userSettings.uid,
        e = wpCookies.getHash("wp-settings-" + d),
        f = userSettings.url,
        g = !!userSettings.secure;
    return a = a.toString().replace(/[^A-Za-z0-9_]/, ""), b = "number" == typeof b ? parseInt(b, 10) : b.toString().replace(/[^A-Za-z0-9_]/, ""), e = e || {}, c ? delete e[a] : e[a] = b, wpCookies.setHash("wp-settings-" + d, e, 31536e3, f, "", g), wpCookies.set("wp-settings-time-" + d, userSettings.time, 31536e3, f, "", g), a
}

function deleteUserSetting(a) {
    return setUserSetting(a, "", 1)
}

function getAllUserSettings() {
    return "object" != typeof userSettings ? {} : wpCookies.getHash("wp-settings-" + userSettings.uid) || {}
}
var wpCookies = {
    each: function(a, b, c) {
        var d, e;
        if (!a) return 0;
        if (c = c || a, "undefined" != typeof a.length) {
            for (d = 0, e = a.length; e > d; d++)
                if (b.call(c, a[d], d, a) === !1) return 0
        } else
            for (d in a)
                if (a.hasOwnProperty(d) && b.call(c, a[d], d, a) === !1) return 0; return 1
    },
    getHash: function(a) {
        var b, c = this.get(a);
        return c && this.each(c.split("&"), function(a) {
            a = a.split("="), b = b || {}, b[a[0]] = a[1]
        }), b
    },
    setHash: function(a, b, c, d, e, f) {
        var g = "";
        this.each(b, function(a, b) {
            g += (g ? "&" : "") + b + "=" + a
        }), this.set(a, g, c, d, e, f)
    },
    get: function(a) {
        var b, c, d = document.cookie,
            e = a + "=";
        if (d) {
            if (c = d.indexOf("; " + e), -1 === c) {
                if (c = d.indexOf(e), 0 !== c) return null
            } else c += 2;
            return b = d.indexOf(";", c), -1 === b && (b = d.length), decodeURIComponent(d.substring(c + e.length, b))
        }
    },
    set: function(a, b, c, d, e, f) {
        var g = new Date;
        "object" == typeof c && c.toGMTString ? c = c.toGMTString() : parseInt(c, 10) ? (g.setTime(g.getTime() + 1e3 * parseInt(c, 10)), c = g.toGMTString()) : c = "", document.cookie = a + "=" + encodeURIComponent(b) + (c ? "; expires=" + c : "") + (d ? "; path=" + d : "") + (e ? "; domain=" + e : "") + (f ? "; secure" : "")
    },
    remove: function(a, b, c, d) {
        this.set(a, "", -1e3, b, c, d)
    }
};
/*!
 * jQuery UI Core 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    function b(b, d) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap='#" + f + "']")[0], !!g && c(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
    }

    function c(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    a.ui = a.ui || {}, a.extend(a.ui, {
        version: "1.11.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        scrollParent: function(b) {
            var c = this.css("position"),
                d = "absolute" === c,
                e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                f = this.parents().filter(function() {
                    var b = a(this);
                    return d && "static" === b.css("position") ? !1 : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
                }).eq(0);
            return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
            })
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b)
            }
        }) : function(b, c, d) {
            return !!a.data(b, d[3])
        },
        focusable: function(c) {
            return b(c, !isNaN(a.attr(c, "tabindex")))
        },
        tabbable: function(c) {
            var d = a.attr(c, "tabindex"),
                e = isNaN(d);
            return (e || d >= 0) && b(c, !e)
        }
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
        function d(b, c, d, f) {
            return a.each(e, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }
        var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
            f = c.toLowerCase(),
            g = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + c] = function(b) {
            return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                a(this).css(f, d(this, b) + "px")
            })
        }, a.fn["outer" + c] = function(b, e) {
            return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                a(this).css(f, d(this, b, !0, e) + "px")
            })
        }
    }), a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus(), d && d.call(b)
                    }, c)
                }) : b.apply(this, arguments)
            }
        }(a.fn.focus),
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(b) {
            if (void 0 !== b) return this.css("zIndex", b);
            if (this.length)
                for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
                    if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
                    e = e.parent()
                }
            return 0
        }
    }), a.ui.plugin = {
        add: function(b, c, d) {
            var e, f = a.ui[b].prototype;
            for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
        },
        call: function(a, b, c, d) {
            var e, f = a.plugins[b];
            if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
        }
    }
});
/*!
 * jQuery UI Widget 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    var b = 0,
        c = Array.prototype.slice;
    return a.cleanData = function(b) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++) try {
                d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
            } catch (g) {}
            b(c)
        }
    }(a.cleanData), a.widget = function(b, c, d) {
        var e, f, g, h, i = {},
            j = b.split(".")[0];
        return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
            return !!a.data(b, e)
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
            return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
        }, a.extend(g, f, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
            return a.isFunction(d) ? void(i[b] = function() {
                var a = function() {
                        return c.prototype[b].apply(this, arguments)
                    },
                    e = function(a) {
                        return c.prototype[b].apply(this, a)
                    };
                return function() {
                    var b, c = this._super,
                        f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                }
            }()) : void(i[b] = d)
        }), g.prototype = a.widget.extend(h, {
            widgetEventPrefix: f ? h.widgetEventPrefix || b : b
        }, i, {
            constructor: g,
            namespace: j,
            widgetName: b,
            widgetFullName: e
        }), f ? (a.each(f._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
    }, a.widget.extend = function(b) {
        for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; h > g; g++)
            for (d in f[g]) e = f[g][d], f[g].hasOwnProperty(d) && void 0 !== e && (b[d] = a.isPlainObject(e) ? a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : e);
        return b
    }, a.widget.bridge = function(b, d) {
        var e = d.prototype.widgetFullName || b;
        a.fn[b] = function(f) {
            var g = "string" == typeof f,
                h = c.call(arguments, 1),
                i = this;
            return f = !g && h.length ? a.widget.extend.apply(null, [f].concat(h)) : f, this.each(g ? function() {
                var c, d = a.data(this, e);
                return "instance" === f ? (i = d, !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h), c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
            } : function() {
                var b = a.data(this, e);
                b ? (b.option(f || {}), b._init && b._init()) : a.data(this, e, new d(f, this))
            }), i
        }
    }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(c, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === d && this.destroy()
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(b, c) {
            var d, e, f, g = b;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof b)
                if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                    for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
                    if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
                    e[b] = c
                } else {
                    if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                    g[b] = c
                }
            return this._setOptions(g), this
        },
        _setOptions: function(a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                function h() {
                    return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^([\w:-]*)\s*(.*)$/),
                    j = i[1] + f.eventNamespace,
                    k = i[2];
                k ? e.delegate(k, j, h) : c.bind(j, h)
            })
        },
        _off: function(b, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
    }, a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {
                duration: e
            }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](), f && f.call(d[0]), c()
            })
        }
    }), a.widget
});
/*!
 * jQuery UI Mouse 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./widget"], a) : a(jQuery)
}(function(a) {
    var b = !1;
    return a(document).mouseup(function() {
        b = !1
    }), a.widget("ui.mouse", {
        version: "1.11.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName, function(c) {
                return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(c) {
            if (!b) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                var d = this,
                    e = 1 === c.which,
                    f = "string" == typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                return e && !f && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    d.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                    return d._mouseMove(a)
                }, this._mouseUpDelegate = function(a) {
                    return d._mouseUp(a)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0)) : !0
            }
        },
        _mouseMove: function(b) {
            if (this._mouseMoved) {
                if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button) return this._mouseUp(b);
                if (!b.which) return this._mouseUp(b)
            }
            return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
        },
        _mouseUp: function(c) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, c.target === this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c)), b = !1, !1
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
});
/*!
 * jQuery UI Sortable 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.sortable", a.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(a, b, c) {
            return a >= b && b + c > a
        },
        _isFloating: function(a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
        },
        _create: function() {
            var a = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === a.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function(a, b) {
            this._super(a, b), "handle" === a && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), a.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(b, c) {
            var d = null,
                e = !1,
                f = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(b), a(b.target).parents().each(function() {
                return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0
            }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), d && (!this.options.handle || c || (a(this.options.handle, d).find("*").addBack().each(function() {
                this === b.target && (e = !0)
            }), e)) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1)
        },
        _mouseStart: function(b, c, d) {
            var e, f, g = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, a.extend(this.offset, {
                    click: {
                        left: b.pageX - this.offset.left,
                        top: b.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), g.containment && this._setContainment(), g.cursor && "auto" !== g.cursor && (f = this.document.find("body"), this.storedCursor = f.css("cursor"), f.css("cursor", g.cursor), this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f)), g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", g.opacity)), g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", g.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)
                for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this));
            return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
        },
        _mouseDrag: function(b) {
            var c, d, e, f, g = this.options,
                h = !1;
            for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - a(document).scrollTop() < g.scrollSensitivity ? h = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < g.scrollSensitivity && (h = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)), b.pageX - a(document).scrollLeft() < g.scrollSensitivity ? h = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < g.scrollSensitivity && (h = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed))), h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--)
                if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], e) : !0)) {
                    if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                    this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                    break
                }
            return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(b, c) {
            if (b) {
                if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                    var d = this,
                        e = this.placeholder.offset(),
                        f = this.options.axis,
                        g = {};
                    f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() {
                        d._clear(b)
                    })
                } else this._clear(b, c);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var b = this.containers.length - 1; b >= 0; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                d = [];
            return b = b || {}, a(c).each(function() {
                var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
            }), !d.length && b.key && d.push(b.key + "="), d.join("&")
        },
        toArray: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                d = [];
            return b = b || {}, c.each(function() {
                d.push(a(b.item || this).attr(b.attribute || "id") || "")
            }), d
        },
        _intersectsWith: function(a) {
            var b = this.positionAbs.left,
                c = b + this.helperProportions.width,
                d = this.positionAbs.top,
                e = d + this.helperProportions.height,
                f = a.left,
                g = f + a.width,
                h = a.top,
                i = h + a.height,
                j = this.offset.click.top,
                k = this.offset.click.left,
                l = "x" === this.options.axis || d + j > h && i > d + j,
                m = "y" === this.options.axis || b + k > f && g > b + k,
                n = l && m;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? n : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
        },
        _intersectsWithPointer: function(a) {
            var b = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height),
                c = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width),
                d = b && c,
                e = this._getDragVerticalDirection(),
                f = this._getDragHorizontalDirection();
            return d ? this.floating ? f && "right" === f || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1) : !1
        },
        _intersectsWithSides: function(a) {
            var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height),
                c = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width),
                d = this._getDragVerticalDirection(),
                e = this._getDragHorizontalDirection();
            return this.floating && e ? "right" === e && c || "left" === e && !c : d && ("down" === d && b || "up" === d && !b)
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== a && (a > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== a && (a > 0 ? "right" : "left")
        },
        refresh: function(a) {
            return this._refreshItems(a), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function(b) {
            function c() {
                h.push(this)
            }
            var d, e, f, g, h = [],
                i = [],
                j = this._connectWith();
            if (j && b)
                for (d = j.length - 1; d >= 0; d--)
                    for (f = a(j[d]), e = f.length - 1; e >= 0; e--) g = a.data(f[e], this.widgetFullName), g && g !== this && !g.options.disabled && i.push([a.isFunction(g.options.items) ? g.options.items.call(g.element) : a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g]);
            for (i.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), d = i.length - 1; d >= 0; d--) i[d][0].each(c);
            return a(h)
        },
        _removeCurrentsFromItems: function() {
            var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = a.grep(this.items, function(a) {
                for (var c = 0; c < b.length; c++)
                    if (b[c] === a.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(b) {
            this.items = [], this.containers = [this];
            var c, d, e, f, g, h, i, j, k = this.items,
                l = [
                    [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                        item: this.currentItem
                    }) : a(this.options.items, this.element), this]
                ],
                m = this._connectWith();
            if (m && this.ready)
                for (c = m.length - 1; c >= 0; c--)
                    for (e = a(m[c]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
                        item: this.currentItem
                    }) : a(f.options.items, f.element), f]), this.containers.push(f));
            for (c = l.length - 1; c >= 0; c--)
                for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++) i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({
                    item: i,
                    instance: g,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(b) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var c, d, e, f;
            for (c = this.items.length - 1; c >= 0; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
            return this
        },
        _createPlaceholder: function(b) {
            b = b || this;
            var c, d = b.options;
            d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                element: function() {
                    var d = b.currentItem[0].nodeName.toLowerCase(),
                        e = a("<" + d + ">", b.document[0]).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === d ? b.currentItem.children().each(function() {
                        a("<td>&#160;</td>", b.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(e)
                    }) : "img" === d && e.attr("src", b.currentItem.attr("src")), c || e.css("visibility", "hidden"), e
                },
                update: function(a, e) {
                    (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
                }
            }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder)
        },
        _contactContainers: function(b) {
            var c, d, e, f, g, h, i, j, k, l, m = null,
                n = null;
            for (c = this.containers.length - 1; c >= 0; c--)
                if (!a.contains(this.currentItem[0], this.containers[c].element[0]))
                    if (this._intersectsWith(this.containers[c].containerCache)) {
                        if (m && a.contains(this.containers[c].element[0], m.element[0])) continue;
                        m = this.containers[c], n = c
                    } else this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), this.containers[c].containerCache.over = 0);
            if (m)
                if (1 === this.containers.length) this.containers[n].containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1);
                else {
                    for (e = 1e4, f = null, k = m.floating || this._isFloating(this.currentItem), g = k ? "left" : "top", h = k ? "width" : "height", l = k ? "clientX" : "clientY", d = this.items.length - 1; d >= 0; d--) a.contains(this.containers[n].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (i = this.items[d].item.offset()[g], j = !1, b[l] - i > this.items[d][h] / 2 && (j = !0), Math.abs(b[l] - i) < e && (e = Math.abs(b[l] - i), f = this.items[d], this.direction = j ? "up" : "down"));
                    if (!f && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[n]) return void(this.currentContainer.containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[n].element, !0), this._trigger("change", b, this._uiHash()), this.containers[n]._trigger("change", b, this._uiHash(this)), this.currentContainer = this.containers[n], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1
                }
        },
        _createHelper: function(b) {
            var c = this.options,
                d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
            return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var b, c, d, e = this.options;
            "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1,
                e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
            }
        },
        _generatePosition: function(b) {
            var c, d, e = this.options,
                f = b.pageX,
                g = b.pageY,
                h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(h[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
            }
        },
        _rearrange: function(a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var e = this.counter;
            this._delay(function() {
                e === this.counter && this.refreshPositions(!d)
            })
        },
        _clear: function(a, b) {
            function c(a, b, c) {
                return function(d) {
                    c._trigger(a, d, b._uiHash(b))
                }
            }
            this.reverting = !1;
            var d, e = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (d in this._storedCSS)("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) && (this._storedCSS[d] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !b && e.push(function(a) {
                    this._trigger("receive", a, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || e.push(function(a) {
                    this._trigger("update", a, this._uiHash())
                }), this !== this.currentContainer && (b || (e.push(function(a) {
                    this._trigger("remove", a, this._uiHash())
                }), e.push(function(a) {
                    return function(b) {
                        a._trigger("receive", b, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), e.push(function(a) {
                    return function(b) {
                        a._trigger("update", b, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--) b || e.push(c("deactivate", this, this.containers[d])), this.containers[d].containerCache.over && (e.push(c("out", this, this.containers[d])), this.containers[d].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !b) {
                for (d = 0; d < e.length; d++) e[d].call(this, a);
                this._trigger("stop", a, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {
            a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(b) {
            var c = b || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: b ? b.element : null
            }
        }
    })
});
/*!
 * jQuery UI Draggable 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.draggable", a.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function(a, b) {
            this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
        },
        _mouseCapture: function(b) {
            var c = this.options;
            return this._blurActiveElement(b), this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), this.handle ? (this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix), !0) : !1)
        },
        _blockFrames: function(b) {
            this.iframeBlocks = this.document.find(b).map(function() {
                var b = a(this);
                return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(b) {
            var c = this.document[0];
            if (this.handleElement.is(b.target)) try {
                c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && a(c.activeElement).blur()
            } catch (d) {}
        },
        _mouseStart: function(b) {
            var c = this.options;
            return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === a(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(b), this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._normalizeRightBottom(), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
        },
        _refreshOffsets: function(a) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: a.pageX - this.offset.left,
                top: a.pageY - this.offset.top
            }
        },
        _mouseDrag: function(b, c) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                var d = this._uiHash();
                if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
                this.position = d.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
        },
        _mouseStop: function(b) {
            var c = this,
                d = !1;
            return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                c._trigger("stop", b) !== !1 && c._clear()
            }) : this._trigger("stop", b) !== !1 && this._clear(), !1
        },
        _mouseUp: function(b) {
            return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), this.handleElement.is(b.target) && this.element.focus(), a.ui.mouse.prototype._mouseUp.call(this, b)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(b) {
            return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function(b) {
            var c = this.options,
                d = a.isFunction(c.helper),
                e = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d && e[0] === this.element[0] && this._setPositionRelative(), e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"), e
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _isRootNode: function(a) {
            return /(html|body)/i.test(a.tagName) || a === this.document[0]
        },
        _getParentOffset: function() {
            var b = this.offsetParent.offset(),
                c = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var a = this.element.position(),
                b = this._isRootNode(this.scrollParent[0]);
            return {
                top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
                left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var b, c, d, e = this.options,
                f = this.document[0];
            return this.relativeContainer = null, e.containment ? "window" === e.containment ? void(this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void(this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void(this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void(d && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c))) : void(this.containment = null)
        },
        _convertPositionTo: function(a, b) {
            b || (b = this.position);
            var c = "absolute" === a ? 1 : -1,
                d = this._isRootNode(this.scrollParent[0]);
            return {
                top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
                left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c
            }
        },
        _generatePosition: function(a, b) {
            var c, d, e, f, g = this.options,
                h = this._isRootNode(this.scrollParent[0]),
                i = a.pageX,
                j = a.pageY;
            return h && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), {
                top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function() {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function(b, c, d) {
            return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d, this], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(b, c, d) {
            var e = a.extend({}, c, {
                item: d.element
            });
            d.sortables = [], a(d.options.connectToSortable).each(function() {
                var c = a(this).sortable("instance");
                c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e))
            })
        },
        stop: function(b, c, d) {
            var e = a.extend({}, c, {
                item: d.element
            });
            d.cancelHelperRemoval = !1, a.each(d.sortables, function() {
                var a = this;
                a.isOver ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, a._storedCSS = {
                    position: a.placeholder.css("position"),
                    top: a.placeholder.css("top"),
                    left: a.placeholder.css("left")
                }, a._mouseStop(b), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, a._trigger("deactivate", b, e))
            })
        },
        drag: function(b, c, d) {
            a.each(d.sortables, function() {
                var e = !1,
                    f = this;
                f.positionAbs = d.positionAbs, f.helperProportions = d.helperProportions, f.offset.click = d.offset.click, f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function() {
                    return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), e
                })), e ? (f.isOver || (f.isOver = 1, f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function() {
                    return c.helper[0]
                }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function() {
                    this.refreshPositions()
                }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), d._refreshOffsets(b), c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, a.each(d.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function(b, c, d) {
            var e = a("body"),
                f = d.options;
            e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor)
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._cursor && a("body").css("cursor", e._cursor)
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function(b, c, d) {
            var e = a(c.helper),
                f = d.options;
            e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity)
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._opacity && a(c.helper).css("opacity", e._opacity)
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function(a, b, c) {
            c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset())
        },
        drag: function(b, c, d) {
            var e = d.options,
                f = !1,
                g = d.scrollParentNotHidden[0],
                h = d.document[0];
            g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))), f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function(b, c, d) {
            var e = d.options;
            d.snapElements = [], a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function() {
                var b = a(this),
                    c = b.offset();
                this !== d.element[0] && d.snapElements.push({
                    item: this,
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: c.top,
                    left: c.left
                })
            })
        },
        drag: function(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o = d.options,
                p = o.snapTolerance,
                q = c.offset.left,
                r = q + d.helperProportions.width,
                s = c.offset.top,
                t = s + d.helperProportions.height;
            for (m = d.snapElements.length - 1; m >= 0; m--) i = d.snapElements[m].left - d.margins.left, j = i + d.snapElements[m].width, k = d.snapElements[m].top - d.margins.top, l = k + d.snapElements[m].height, i - p > r || q > j + p || k - p > t || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
                snapItem: d.snapElements[m].item
            })), d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = Math.abs(k - t) <= p, f = Math.abs(l - s) <= p, g = Math.abs(i - r) <= p, h = Math.abs(j - q) <= p, e && (c.position.top = d._convertPositionTo("relative", {
                top: k - d.helperProportions.height,
                left: 0
            }).top), f && (c.position.top = d._convertPositionTo("relative", {
                top: l,
                left: 0
            }).top), g && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: i - d.helperProportions.width
            }).left), h && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: j
            }).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = Math.abs(k - s) <= p, f = Math.abs(l - t) <= p, g = Math.abs(i - q) <= p, h = Math.abs(j - r) <= p, e && (c.position.top = d._convertPositionTo("relative", {
                top: k,
                left: 0
            }).top), f && (c.position.top = d._convertPositionTo("relative", {
                top: l - d.helperProportions.height,
                left: 0
            }).top), g && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: i
            }).left), h && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: j - d.helperProportions.width
            }).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
                snapItem: d.snapElements[m].item
            })), d.snapElements[m].snapping = e || f || g || h || n)
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function(b, c, d) {
            var e, f = d.options,
                g = a.makeArray(a(f.stack)).sort(function(b, c) {
                    return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                });
            g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function(b) {
                a(this).css("zIndex", e + b)
            }), this.css("zIndex", e + g.length))
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function(b, c, d) {
            var e = a(c.helper),
                f = d.options;
            e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex)
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._zIndex && a(c.helper).css("zIndex", e._zIndex)
        }
    }), a.ui.draggable
});
/*!
 * jQuery UI Droppable 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/droppable/
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./mouse", "./draggable"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.droppable", {
        version: "1.11.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var b, c = this.options,
                d = c.accept;
            this.isover = !1, this.isout = !0, this.accept = a.isFunction(d) ? d : function(a) {
                return a.is(d)
            }, this.proportions = function() {
                return arguments.length ? void(b = arguments[0]) : b ? b : b = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            }, this._addToManager(c.scope), c.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function(b) {
            a.ui.ddmanager.droppables[b] = a.ui.ddmanager.droppables[b] || [], a.ui.ddmanager.droppables[b].push(this)
        },
        _splice: function(a) {
            for (var b = 0; b < a.length; b++) a[b] === this && a.splice(b, 1)
        },
        _destroy: function() {
            var b = a.ui.ddmanager.droppables[this.options.scope];
            this._splice(b), this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(b, c) {
            if ("accept" === b) this.accept = a.isFunction(c) ? c : function(a) {
                return a.is(c)
            };
            else if ("scope" === b) {
                var d = a.ui.ddmanager.droppables[this.options.scope];
                this._splice(d), this._addToManager(c)
            }
            this._super(b, c)
        },
        _activate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
        },
        _deactivate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
        },
        _over: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
        },
        _out: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
        },
        _drop: function(b, c) {
            var d = c || a.ui.ddmanager.current,
                e = !1;
            return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var c = a(this).droppable("instance");
                return c.options.greedy && !c.options.disabled && c.options.scope === d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(c, {
                    offset: c.element.offset()
                }), c.options.tolerance, b) ? (e = !0, !1) : void 0
            }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1) : !1
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        }
    }), a.ui.intersect = function() {
        function a(a, b, c) {
            return a >= b && b + c > a
        }
        return function(b, c, d, e) {
            if (!c.offset) return !1;
            var f = (b.positionAbs || b.position.absolute).left + b.margins.left,
                g = (b.positionAbs || b.position.absolute).top + b.margins.top,
                h = f + b.helperProportions.width,
                i = g + b.helperProportions.height,
                j = c.offset.left,
                k = c.offset.top,
                l = j + c.proportions().width,
                m = k + c.proportions().height;
            switch (d) {
                case "fit":
                    return f >= j && l >= h && g >= k && m >= i;
                case "intersect":
                    return j < f + b.helperProportions.width / 2 && h - b.helperProportions.width / 2 < l && k < g + b.helperProportions.height / 2 && i - b.helperProportions.height / 2 < m;
                case "pointer":
                    return a(e.pageY, k, c.proportions().height) && a(e.pageX, j, c.proportions().width);
                case "touch":
                    return (g >= k && m >= g || i >= k && m >= i || k > g && i > m) && (f >= j && l >= f || h >= j && l >= h || j > f && h > l);
                default:
                    return !1
            }
        }
    }(), a.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(b, c) {
            var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [],
                g = c ? c.type : null,
                h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
            a: for (d = 0; d < f.length; d++)
                if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                    for (e = 0; e < h.length; e++)
                        if (h[e] === f[d].element[0]) {
                            f[d].proportions().height = 0;
                            continue a
                        }
                    f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions({
                        width: f[d].element[0].offsetWidth,
                        height: f[d].element[0].offsetHeight
                    }))
                }
        },
        drop: function(b, c) {
            var d = !1;
            return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
            }), d
        },
        dragStart: function(b, c) {
            b.element.parentsUntil("body").bind("scroll.droppable", function() {
                b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
            })
        },
        drag: function(b, c) {
            b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance, c),
                        h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                    h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return a(this).droppable("instance").options.scope === e
                    }), f.length && (d = a(f[0]).droppable("instance"), d.greedyChild = "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)))
                }
            })
        },
        dragStop: function(b, c) {
            b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
        }
    }, a.ui.droppable
});
var wpAjax = jQuery.extend({
    unserialize: function(a) {
        var b, c, d, e, f = {};
        if (!a) return f;
        b = a.split("?"), b[1] && (a = b[1]), c = a.split("&");
        for (d in c)(!jQuery.isFunction(c.hasOwnProperty) || c.hasOwnProperty(d)) && (e = c[d].split("="), f[e[0]] = e[1]);
        return f
    },
    parseAjaxResponse: function(a, b, c) {
        var d = {},
            e = jQuery("#" + b).html(""),
            f = "";
        return a && "object" == typeof a && a.getElementsByTagName("wp_ajax") ? (d.responses = [], d.errors = !1, jQuery("response", a).each(function() {
            var b, e = jQuery(this),
                g = jQuery(this.firstChild);
            b = {
                action: e.attr("action"),
                what: g.get(0).nodeName,
                id: g.attr("id"),
                oldId: g.attr("old_id"),
                position: g.attr("position")
            }, b.data = jQuery("response_data", g).text(), b.supplemental = {}, jQuery("supplemental", g).children().each(function() {
                b.supplemental[this.nodeName] = jQuery(this).text()
            }).size() || (b.supplemental = !1), b.errors = [], jQuery("wp_error", g).each(function() {
                var e, g, h, i = jQuery(this).attr("code");
                e = {
                    code: i,
                    message: this.firstChild.nodeValue,
                    data: !1
                }, g = jQuery('wp_error_data[code="' + i + '"]', a), g && (e.data = g.get()), h = jQuery("form-field", g).text(), h && (i = h), c && wpAjax.invalidateForm(jQuery("#" + c + ' :input[name="' + i + '"]').parents(".form-field:first")), f += "<p>" + e.message + "</p>", b.errors.push(e), d.errors = !0
            }).size() || (b.errors = !1), d.responses.push(b)
        }), f.length && e.html('<div class="error">' + f + "</div>"), d) : isNaN(a) ? !e.html('<div class="error"><p>' + a + "</p></div>") : (a = parseInt(a, 10), -1 == a ? !e.html('<div class="error"><p>' + wpAjax.noPerm + "</p></div>") : 0 === a ? !e.html('<div class="error"><p>' + wpAjax.broken + "</p></div>") : !0)
    },
    invalidateForm: function(a) {
        return jQuery(a).addClass("form-invalid").find("input:visible").change(function() {
            jQuery(this).closest(".form-invalid").removeClass("form-invalid")
        })
    },
    validateForm: function(a) {
        return a = jQuery(a), !wpAjax.invalidateForm(a.find(".form-required").filter(function() {
            return "" === jQuery("input:visible", this).val()
        })).size()
    }
}, wpAjax || {
    noPerm: "You do not have permission to do that.",
    broken: "An unidentified error has occurred."
});
jQuery(document).ready(function(a) {
    a("form.validate").submit(function() {
        return wpAjax.validateForm(a(this))
    })
});
/*! jQuery Color v@2.1.1 with SVG Color Names http://github.com/jquery/jquery-color | jquery.org/license */
(function(a, b) {
    function m(a, b, c) {
        var d = h[b.type] || {};
        return a == null ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
    }

    function n(b) {
        var c = f(),
            d = c._rgba = [];
        return b = b.toLowerCase(), l(e, function(a, e) {
            var f, h = e.re.exec(b),
                i = h && e.parse(h),
                j = e.space || "rgba";
            if (i) return f = c[j](i), c[g[j].cache] = f[g[j].cache], d = c._rgba = f._rgba, !1
        }), d.length ? (d.join() === "0,0,0,0" && a.extend(d, k.transparent), c) : k[b]
    }

    function o(a, b, c) {
        return c = (c + 1) % 1, c * 6 < 1 ? a + (b - a) * c * 6 : c * 2 < 1 ? b : c * 3 < 2 ? a + (b - a) * (2 / 3 - c) * 6 : a
    }
    var c = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        d = /^([\-+])=\s*(\d+\.?\d*)/,
        e = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(a) {
                return [a[1], a[2], a[3], a[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(a) {
                return [a[1] * 2.55, a[2] * 2.55, a[3] * 2.55, a[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(a) {
                return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(a) {
                return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(a) {
                return [a[1], a[2] / 100, a[3] / 100, a[4]]
            }
        }],
        f = a.Color = function(b, c, d, e) {
            return new a.Color.fn.parse(b, c, d, e)
        },
        g = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        h = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        },
        i = f.support = {},
        j = a("<p>")[0],
        k, l = a.each;
    j.style.cssText = "background-color:rgba(1,1,1,.5)", i.rgba = j.style.backgroundColor.indexOf("rgba") > -1, l(g, function(a, b) {
        b.cache = "_" + a, b.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    }), f.fn = a.extend(f.prototype, {
        parse: function(c, d, e, h) {
            if (c === b) return this._rgba = [null, null, null, null], this;
            if (c.jquery || c.nodeType) c = a(c).css(d), d = b;
            var i = this,
                j = a.type(c),
                o = this._rgba = [];
            d !== b && (c = [c, d, e, h], j = "array");
            if (j === "string") return this.parse(n(c) || k._default);
            if (j === "array") return l(g.rgba.props, function(a, b) {
                o[b.idx] = m(c[b.idx], b)
            }), this;
            if (j === "object") return c instanceof f ? l(g, function(a, b) {
                c[b.cache] && (i[b.cache] = c[b.cache].slice())
            }) : l(g, function(b, d) {
                var e = d.cache;
                l(d.props, function(a, b) {
                    if (!i[e] && d.to) {
                        if (a === "alpha" || c[a] == null) return;
                        i[e] = d.to(i._rgba)
                    }
                    i[e][b.idx] = m(c[a], b, !0)
                }), i[e] && a.inArray(null, i[e].slice(0, 3)) < 0 && (i[e][3] = 1, d.from && (i._rgba = d.from(i[e])))
            }), this
        },
        is: function(a) {
            var b = f(a),
                c = !0,
                d = this;
            return l(g, function(a, e) {
                var f, g = b[e.cache];
                return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], l(e.props, function(a, b) {
                    if (g[b.idx] != null) return c = g[b.idx] === f[b.idx], c
                })), c
            }), c
        },
        _space: function() {
            var a = [],
                b = this;
            return l(g, function(c, d) {
                b[d.cache] && a.push(c)
            }), a.pop()
        },
        transition: function(a, b) {
            var c = f(a),
                d = c._space(),
                e = g[d],
                i = this.alpha() === 0 ? f("transparent") : this,
                j = i[e.cache] || e.to(i._rgba),
                k = j.slice();
            return c = c[e.cache], l(e.props, function(a, d) {
                var e = d.idx,
                    f = j[e],
                    g = c[e],
                    i = h[d.type] || {};
                if (g === null) return;
                f === null ? k[e] = g : (i.mod && (g - f > i.mod / 2 ? f += i.mod : f - g > i.mod / 2 && (f -= i.mod)), k[e] = m((g - f) * b + f, d))
            }), this[d](k)
        },
        blend: function(b) {
            if (this._rgba[3] === 1) return this;
            var c = this._rgba.slice(),
                d = c.pop(),
                e = f(b)._rgba;
            return f(a.map(c, function(a, b) {
                return (1 - d) * e[b] + d * a
            }))
        },
        toRgbaString: function() {
            var b = "rgba(",
                c = a.map(this._rgba, function(a, b) {
                    return a == null ? b > 2 ? 1 : 0 : a
                });
            return c[3] === 1 && (c.pop(), b = "rgb("), b + c.join() + ")"
        },
        toHslaString: function() {
            var b = "hsla(",
                c = a.map(this.hsla(), function(a, b) {
                    return a == null && (a = b > 2 ? 1 : 0), b && b < 3 && (a = Math.round(a * 100) + "%"), a
                });
            return c[3] === 1 && (c.pop(), b = "hsl("), b + c.join() + ")"
        },
        toHexString: function(b) {
            var c = this._rgba.slice(),
                d = c.pop();
            return b && c.push(~~(d * 255)), "#" + a.map(c, function(a) {
                return a = (a || 0).toString(16), a.length === 1 ? "0" + a : a
            }).join("")
        },
        toString: function() {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
        }
    }), f.fn.parse.prototype = f.fn, g.hsla.to = function(a) {
        if (a[0] == null || a[1] == null || a[2] == null) return [null, null, null, a[3]];
        var b = a[0] / 255,
            c = a[1] / 255,
            d = a[2] / 255,
            e = a[3],
            f = Math.max(b, c, d),
            g = Math.min(b, c, d),
            h = f - g,
            i = f + g,
            j = i * .5,
            k, l;
        return g === f ? k = 0 : b === f ? k = 60 * (c - d) / h + 360 : c === f ? k = 60 * (d - b) / h + 120 : k = 60 * (b - c) / h + 240, h === 0 ? l = 0 : j <= .5 ? l = h / i : l = h / (2 - i), [Math.round(k) % 360, l, j, e == null ? 1 : e]
    }, g.hsla.from = function(a) {
        if (a[0] == null || a[1] == null || a[2] == null) return [null, null, null, a[3]];
        var b = a[0] / 360,
            c = a[1],
            d = a[2],
            e = a[3],
            f = d <= .5 ? d * (1 + c) : d + c - d * c,
            g = 2 * d - f;
        return [Math.round(o(g, f, b + 1 / 3) * 255), Math.round(o(g, f, b) * 255), Math.round(o(g, f, b - 1 / 3) * 255), e]
    }, l(g, function(c, e) {
        var g = e.props,
            h = e.cache,
            i = e.to,
            j = e.from;
        f.fn[c] = function(c) {
            i && !this[h] && (this[h] = i(this._rgba));
            if (c === b) return this[h].slice();
            var d, e = a.type(c),
                k = e === "array" || e === "object" ? c : arguments,
                n = this[h].slice();
            return l(g, function(a, b) {
                var c = k[e === "object" ? a : b.idx];
                c == null && (c = n[b.idx]), n[b.idx] = m(c, b)
            }), j ? (d = f(j(n)), d[h] = n, d) : f(n)
        }, l(g, function(b, e) {
            if (f.fn[b]) return;
            f.fn[b] = function(f) {
                var g = a.type(f),
                    h = b === "alpha" ? this._hsla ? "hsla" : "rgba" : c,
                    i = this[h](),
                    j = i[e.idx],
                    k;
                return g === "undefined" ? j : (g === "function" && (f = f.call(this, j), g = a.type(f)), f == null && e.empty ? this : (g === "string" && (k = d.exec(f), k && (f = j + parseFloat(k[2]) * (k[1] === "+" ? 1 : -1))), i[e.idx] = f, this[h](i)))
            }
        })
    }), f.hook = function(b) {
        var c = b.split(" ");
        l(c, function(b, c) {
            a.cssHooks[c] = {
                set: function(b, d) {
                    var e, g, h = "";
                    if (a.type(d) !== "string" || (e = n(d))) {
                        d = f(e || d);
                        if (!i.rgba && d._rgba[3] !== 1) {
                            g = c === "backgroundColor" ? b.parentNode : b;
                            while ((h === "" || h === "transparent") && g && g.style) try {
                                h = a.css(g, "backgroundColor"), g = g.parentNode
                            } catch (j) {}
                            d = d.blend(h && h !== "transparent" ? h : "_default")
                        }
                        d = d.toRgbaString()
                    }
                    try {
                        b.style[c] = d
                    } catch (j) {}
                }
            }, a.fx.step[c] = function(b) {
                b.colorInit || (b.start = f(b.elem, c), b.end = f(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
            }
        })
    }, f.hook(c), a.cssHooks.borderColor = {
        expand: function(a) {
            var b = {};
            return l(["Top", "Right", "Bottom", "Left"], function(c, d) {
                b["border" + d + "Color"] = a
            }), b
        }
    }, k = a.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }
})(jQuery), jQuery.extend(jQuery.Color.names, {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    blanchedalmond: "#ffebcd",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    oldlace: "#fdf5e6",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    whitesmoke: "#f5f5f5",
    yellowgreen: "#9acd32"
});

! function(a) {
    var b, c = {
        add: "ajaxAdd",
        del: "ajaxDel",
        dim: "ajaxDim",
        process: "process",
        recolor: "recolor"
    };
    b = {
        settings: {
            url: ajaxurl,
            type: "POST",
            response: "ajax-response",
            what: "",
            alt: "alternate",
            altOffset: 0,
            addColor: null,
            delColor: null,
            dimAddColor: null,
            dimDelColor: null,
            confirm: null,
            addBefore: null,
            addAfter: null,
            delBefore: null,
            delAfter: null,
            dimBefore: null,
            dimAfter: null
        },
        nonce: function(b, c) {
            var d = wpAjax.unserialize(b.attr("href"));
            return c.nonce || d._ajax_nonce || a("#" + c.element + ' input[name="_ajax_nonce"]').val() || d._wpnonce || a("#" + c.element + ' input[name="_wpnonce"]').val() || 0
        },
        parseData: function(b, c) {
            var d, e = [];
            try {
                d = a(b).attr("data-wp-lists") || "", d = d.match(new RegExp(c + ":[\\S]+")), d && (e = d[0].split(":"))
            } catch (f) {}
            return e
        },
        pre: function(b, c, d) {
            var e, f;
            return c = a.extend({}, this.wpList.settings, {
                element: null,
                nonce: 0,
                target: b.get(0)
            }, c || {}), a.isFunction(c.confirm) && ("add" != d && (e = a("#" + c.element).css("backgroundColor"), a("#" + c.element).css("backgroundColor", "#FF9966")), f = c.confirm.call(this, b, c, d, e), "add" != d && a("#" + c.element).css("backgroundColor", e), !f) ? !1 : c
        },
        ajaxAdd: function(c, d) {
            c = a(c), d = d || {};
            var e, f, g, h, i, j = this,
                k = b.parseData(c, "add");
            return d = b.pre.call(j, c, d, "add"), d.element = k[2] || c.attr("id") || d.element || null, d.addColor = k[3] ? "#" + k[3] : d.addColor || "#FFFF33", d ? c.is('[id="' + d.element + '-submit"]') ? d.element ? (d.action = "add-" + d.what, d.nonce = b.nonce(c, d), e = a("#" + d.element + " :input").not('[name="_ajax_nonce"], [name="_wpnonce"], [name="action"]'), (f = wpAjax.validateForm("#" + d.element)) ? (d.data = a.param(a.extend({
                _ajax_nonce: d.nonce,
                action: d.action
            }, wpAjax.unserialize(k[4] || ""))), g = a.isFunction(e.fieldSerialize) ? e.fieldSerialize() : e.serialize(), g && (d.data += "&" + g), a.isFunction(d.addBefore) && (d = d.addBefore(d), !d) ? !0 : d.data.match(/_ajax_nonce=[a-f0-9]+/) ? (d.success = function(c) {
                return h = wpAjax.parseAjaxResponse(c, d.response, d.element), i = c, !h || h.errors ? !1 : !0 === h ? !0 : (jQuery.each(h.responses, function() {
                    b.add.call(j, this.data, a.extend({}, d, {
                        pos: this.position || 0,
                        id: this.id || 0,
                        oldId: this.oldId || null
                    }))
                }), j.wpList.recolor(), a(j).trigger("wpListAddEnd", [d, j.wpList]), void b.clear.call(j, "#" + d.element))
            }, d.complete = function(b, c) {
                if (a.isFunction(d.addAfter)) {
                    var e = a.extend({
                        xml: b,
                        status: c,
                        parsed: h
                    }, d);
                    d.addAfter(i, e)
                }
            }, a.ajax(d), !1) : !0) : !1) : !0 : !b.add.call(j, c, d) : !1
        },
        ajaxDel: function(c, d) {
            c = a(c), d = d || {};
            var e, f, g, h = this,
                i = b.parseData(c, "delete");
            return d = b.pre.call(h, c, d, "delete"), d.element = i[2] || d.element || null, d.delColor = i[3] ? "#" + i[3] : d.delColor || "#faa", d && d.element ? (d.action = "delete-" + d.what, d.nonce = b.nonce(c, d), d.data = a.extend({
                action: d.action,
                id: d.element.split("-").pop(),
                _ajax_nonce: d.nonce
            }, wpAjax.unserialize(i[4] || "")), a.isFunction(d.delBefore) && (d = d.delBefore(d, h), !d) ? !0 : d.data._ajax_nonce ? (e = a("#" + d.element), "none" != d.delColor ? e.css("backgroundColor", d.delColor).fadeOut(350, function() {
                h.wpList.recolor(), a(h).trigger("wpListDelEnd", [d, h.wpList])
            }) : (h.wpList.recolor(), a(h).trigger("wpListDelEnd", [d, h.wpList])), d.success = function(b) {
                return f = wpAjax.parseAjaxResponse(b, d.response, d.element), g = b, !f || f.errors ? (e.stop().stop().css("backgroundColor", "#faa").show().queue(function() {
                    h.wpList.recolor(), a(this).dequeue()
                }), !1) : void 0
            }, d.complete = function(b, c) {
                a.isFunction(d.delAfter) && e.queue(function() {
                    var e = a.extend({
                        xml: b,
                        status: c,
                        parsed: f
                    }, d);
                    d.delAfter(g, e)
                }).dequeue()
            }, a.ajax(d), !1) : !0) : !1
        },
        ajaxDim: function(c, d) {
            if ("none" == a(c).parent().css("display")) return !1;
            c = a(c), d = d || {};
            var e, f, g, h, i, j, k = this,
                l = b.parseData(c, "dim");
            return d = b.pre.call(k, c, d, "dim"), d.element = l[2] || d.element || null, d.dimClass = l[3] || d.dimClass || null, d.dimAddColor = l[4] ? "#" + l[4] : d.dimAddColor || "#FFFF33", d.dimDelColor = l[5] ? "#" + l[5] : d.dimDelColor || "#FF3333", d && d.element && d.dimClass ? (d.action = "dim-" + d.what, d.nonce = b.nonce(c, d), d.data = a.extend({
                action: d.action,
                id: d.element.split("-").pop(),
                dimClass: d.dimClass,
                _ajax_nonce: d.nonce
            }, wpAjax.unserialize(l[6] || "")), a.isFunction(d.dimBefore) && (d = d.dimBefore(d), !d) ? !0 : (e = a("#" + d.element), f = e.toggleClass(d.dimClass).is("." + d.dimClass), g = b.getColor(e), e.toggleClass(d.dimClass), h = f ? d.dimAddColor : d.dimDelColor, "none" != h ? e.animate({
                backgroundColor: h
            }, "fast").queue(function() {
                e.toggleClass(d.dimClass), a(this).dequeue()
            }).animate({
                backgroundColor: g
            }, {
                complete: function() {
                    a(this).css("backgroundColor", ""), a(k).trigger("wpListDimEnd", [d, k.wpList])
                }
            }) : a(k).trigger("wpListDimEnd", [d, k.wpList]), d.data._ajax_nonce ? (d.success = function(b) {
                return i = wpAjax.parseAjaxResponse(b, d.response, d.element), j = b, !i || i.errors ? (e.stop().stop().css("backgroundColor", "#FF3333")[f ? "removeClass" : "addClass"](d.dimClass).show().queue(function() {
                    k.wpList.recolor(), a(this).dequeue()
                }), !1) : void 0
            }, d.complete = function(b, c) {
                a.isFunction(d.dimAfter) && e.queue(function() {
                    var e = a.extend({
                        xml: b,
                        status: c,
                        parsed: i
                    }, d);
                    d.dimAfter(j, e)
                }).dequeue()
            }, a.ajax(d), !1) : !0)) : !0
        },
        getColor: function(a) {
            var b = jQuery(a).css("backgroundColor");
            return b || "#ffffff"
        },
        add: function(c, d) {
            c = a("string" == typeof c ? a.trim(c) : c);
            var e, f, g, h = a(this),
                i = !1,
                j = {
                    pos: 0,
                    id: 0,
                    oldId: null
                };
            return "string" == typeof d && (d = {
                what: d
            }), d = a.extend(j, this.wpList.settings, d), c.size() && d.what ? (d.oldId && (i = a("#" + d.what + "-" + d.oldId)), !d.id || d.id == d.oldId && i && i.size() || a("#" + d.what + "-" + d.id).remove(), i && i.size() ? (i.before(c), i.remove()) : isNaN(d.pos) ? (e = "after", "-" == d.pos.substr(0, 1) && (d.pos = d.pos.substr(1), e = "before"), f = h.find("#" + d.pos), 1 === f.size() ? f[e](c) : h.append(c)) : ("comment" != d.what || 0 === a("#" + d.element).length) && (d.pos < 0 ? h.prepend(c) : h.append(c)), d.alt && ((h.children(":visible").index(c[0]) + d.altOffset) % 2 ? c.removeClass(d.alt) : c.addClass(d.alt)), "none" != d.addColor && (g = b.getColor(c), c.css("backgroundColor", d.addColor).animate({
                backgroundColor: g
            }, {
                complete: function() {
                    a(this).css("backgroundColor", "")
                }
            })), h.each(function() {
                this.wpList.process(c)
            }), c) : !1
        },
        clear: function(b) {
            var c, d, e = this;
            b = a(b), e.wpList && b.parents("#" + e.id).size() || b.find(":input").each(function() {
                a(this).parents(".form-no-clear").size() || (c = this.type.toLowerCase(), d = this.tagName.toLowerCase(), "text" == c || "password" == c || "textarea" == d ? this.value = "" : "checkbox" == c || "radio" == c ? this.checked = !1 : "select" == d && (this.selectedIndex = null))
            })
        },
        process: function(b) {
            var c = this,
                d = a(b || document);
            d.delegate('form[data-wp-lists^="add:' + c.id + ':"]', "submit", function() {
                return c.wpList.add(this)
            }), d.delegate('a[data-wp-lists^="add:' + c.id + ':"], input[data-wp-lists^="add:' + c.id + ':"]', "click", function() {
                return c.wpList.add(this)
            }), d.delegate('[data-wp-lists^="delete:' + c.id + ':"]', "click", function() {
                return c.wpList.del(this)
            }), d.delegate('[data-wp-lists^="dim:' + c.id + ':"]', "click", function() {
                return c.wpList.dim(this)
            })
        },
        recolor: function() {
            var b, c, d = this;
            d.wpList.settings.alt && (b = a(".list-item:visible", d), b.size() || (b = a(d).children(":visible")), c = [":even", ":odd"], d.wpList.settings.altOffset % 2 && c.reverse(), b.filter(c[0]).addClass(d.wpList.settings.alt).end().filter(c[1]).removeClass(d.wpList.settings.alt))
        },
        init: function() {
            var a = this;
            a.wpList.process = function(b) {
                a.each(function() {
                    this.wpList.process(b)
                })
            }, a.wpList.recolor = function() {
                a.each(function() {
                    this.wpList.recolor()
                })
            }
        }
    }, a.fn.wpList = function(d) {
        return this.each(function() {
            var e = this;
            this.wpList = {
                settings: a.extend({}, b.settings, {
                    what: b.parseData(this, "list")[1] || ""
                }, d)
            }, a.each(c, function(a, c) {
                e.wpList[a] = function(a, d) {
                    return b[c].call(e, a, d)
                }
            })
        }), b.init.call(this), this.wpList.process(), this
    }
}(jQuery);
var postboxes;
! function(a) {
    var b = a(document);
    postboxes = {
        add_postbox_toggles: function(c, d) {
            var e = this;
            e.init(c, d), a(".postbox .hndle, .postbox .handlediv").bind("click.postboxes", function() {
                var d = a(this).parent(".postbox"),
                    f = d.attr("id");
                "dashboard_browser_nag" != f && (d.toggleClass("closed"), "press-this" != c && e.save_state(c), f && (!d.hasClass("closed") && a.isFunction(postboxes.pbshow) ? e.pbshow(f) : d.hasClass("closed") && a.isFunction(postboxes.pbhide) && e.pbhide(f)), b.trigger("postbox-toggled", d))
            }), a(".postbox .hndle a").click(function(a) {
                a.stopPropagation()
            }), a(".postbox a.dismiss").bind("click.postboxes", function() {
                var b = a(this).parents(".postbox").attr("id") + "-hide";
                return a("#" + b).prop("checked", !1).triggerHandler("click"), !1
            }), a(".hide-postbox-tog").bind("click.postboxes", function() {
                var d = a(this).val(),
                    f = a("#" + d);
                a(this).prop("checked") ? (f.show(), a.isFunction(postboxes.pbshow) && e.pbshow(d)) : (f.hide(), a.isFunction(postboxes.pbhide) && e.pbhide(d)), e.save_state(c), e._mark_area(), b.trigger("postbox-toggled", f)
            }), a('.columns-prefs input[type="radio"]').bind("click.postboxes", function() {
                var b = parseInt(a(this).val(), 10);
                b && (e._pb_edit(b), e.save_order(c))
            })
        },
        init: function(b, c) {
            var d = a(document.body).hasClass("mobile");
            a.extend(this, c || {}), a("#wpbody-content").css("overflow", "hidden"), a(".meta-box-sortables").sortable({
                placeholder: "sortable-placeholder",
                connectWith: ".meta-box-sortables",
                items: ".postbox",
                handle: ".hndle",
                cursor: "move",
                delay: d ? 200 : 0,
                distance: 2,
                tolerance: "pointer",
                forcePlaceholderSize: !0,
                helper: "clone",
                opacity: .65,
                stop: function() {
                    return a(this).find("#dashboard_browser_nag").is(":visible") && "dashboard_browser_nag" != this.firstChild.id ? void a(this).sortable("cancel") : void postboxes.save_order(b)
                },
                receive: function(b, c) {
                    "dashboard_browser_nag" == c.item[0].id && a(c.sender).sortable("cancel"), postboxes._mark_area()
                }
            }), d && (a(document.body).bind("orientationchange.postboxes", function() {
                postboxes._pb_change()
            }), this._pb_change()), this._mark_area()
        },
        save_state: function(b) {
            var c = a(".postbox").filter(".closed").map(function() {
                    return this.id
                }).get().join(","),
                d = a(".postbox").filter(":hidden").map(function() {
                    return this.id
                }).get().join(",");
            a.post(ajaxurl, {
                action: "closed-postboxes",
                closed: c,
                hidden: d,
                closedpostboxesnonce: jQuery("#closedpostboxesnonce").val(),
                page: b
            })
        },
        save_order: function(b) {
            var c, d = a(".columns-prefs input:checked").val() || 0;
            c = {
                action: "meta-box-order",
                _ajax_nonce: a("#meta-box-order-nonce").val(),
                page_columns: d,
                page: b
            }, a(".meta-box-sortables").each(function() {
                c["order[" + this.id.split("-")[0] + "]"] = a(this).sortable("toArray").join(",")
            }), a.post(ajaxurl, c)
        },
        _mark_area: function() {
            var b = a("div.postbox:visible").length,
                c = a("#post-body #side-sortables");
            a("#dashboard-widgets .meta-box-sortables:visible").each(function() {
                var c = a(this);
                1 == b || c.children(".postbox:visible").length ? c.removeClass("empty-container") : c.addClass("empty-container")
            }), c.length && (c.children(".postbox:visible").length ? c.removeClass("empty-container") : "280px" == a("#postbox-container-1").css("width") && c.addClass("empty-container"))
        },
        _pb_edit: function(b) {
            var c = a(".metabox-holder").get(0);
            c && (c.className = c.className.replace(/columns-\d+/, "columns-" + b)), a(document).trigger("postboxes-columnchange")
        },
        _pb_change: function() {
            var b = a('label.columns-prefs-1 input[type="radio"]');
            switch (window.orientation) {
                case 90:
                case -90:
                    b.length && b.is(":checked") || this._pb_edit(2);
                    break;
                case 0:
                case 180:
                    a("#poststuff").length ? this._pb_edit(1) : b.length && b.is(":checked") || this._pb_edit(2)
            }
        },
        pbshow: !1,
        pbhide: !1
    }
}(jQuery);
var wpNavMenu;
! function(a) {
    var b;
    b = wpNavMenu = {
        options: {
            menuItemDepthPerLevel: 30,
            globalMaxDepth: 11
        },
        menuList: void 0,
        targetList: void 0,
        menusChanged: !1,
        isRTL: !("undefined" == typeof isRtl || !isRtl),
        negateIfRTL: "undefined" != typeof isRtl && isRtl ? -1 : 1,
        init: function() {
            b.menuList = a("#menu-to-edit"), b.targetList = b.menuList, this.jQueryExtensions(), this.attachMenuEditListeners(), this.setupInputWithDefaultTitle(), this.attachQuickSearchListeners(), this.attachThemeLocationsListeners(), this.attachTabsPanelListeners(), this.attachUnsavedChangesListener(), b.menuList.length && this.initSortables(), menus.oneThemeLocationNoMenus && a("#posttype-page").addSelectedToMenu(b.addMenuItemToBottom), this.initManageLocations(), this.initAccessibility(), this.initToggles(), this.initPreviewing()
        },
        jQueryExtensions: function() {
            a.fn.extend({
                menuItemDepth: function() {
                    var a = this.eq(0).css(b.isRTL ? "margin-right" : "margin-left");
                    return b.pxToDepth(a && -1 != a.indexOf("px") ? a.slice(0, -2) : 0)
                },
                updateDepthClass: function(b, c) {
                    return this.each(function() {
                        var d = a(this);
                        c = c || d.menuItemDepth(), a(this).removeClass("menu-item-depth-" + c).addClass("menu-item-depth-" + b)
                    })
                },
                shiftDepthClass: function(b) {
                    return this.each(function() {
                        var c = a(this),
                            d = c.menuItemDepth();
                        a(this).removeClass("menu-item-depth-" + d).addClass("menu-item-depth-" + (d + b))
                    })
                },
                childMenuItems: function() {
                    var b = a();
                    return this.each(function() {
                        for (var c = a(this), d = c.menuItemDepth(), e = c.next(); e.length && e.menuItemDepth() > d;) b = b.add(e), e = e.next()
                    }), b
                },
                shiftHorizontally: function(b) {
                    return this.each(function() {
                        var c = a(this),
                            d = c.menuItemDepth(),
                            e = d + b;
                        c.moveHorizontally(e, d)
                    })
                },
                moveHorizontally: function(b, c) {
                    return this.each(function() {
                        var d = a(this),
                            e = d.childMenuItems(),
                            f = b - c,
                            g = d.find(".is-submenu");
                        d.updateDepthClass(b, c).updateParentMenuItemDBId(), e && e.each(function() {
                            var b = a(this),
                                c = b.menuItemDepth(),
                                d = c + f;
                            b.updateDepthClass(d, c).updateParentMenuItemDBId()
                        }), 0 === b ? g.hide() : g.show()
                    })
                },
                updateParentMenuItemDBId: function() {
                    return this.each(function() {
                        var b = a(this),
                            c = b.find(".menu-item-data-parent-id"),
                            d = parseInt(b.menuItemDepth(), 10),
                            e = d - 1,
                            f = b.prevAll(".menu-item-depth-" + e).first();
                        c.val(0 === d ? 0 : f.find(".menu-item-data-db-id").val())
                    })
                },
                hideAdvancedMenuItemFields: function() {
                    return this.each(function() {
                        var b = a(this);
                        a(".hide-column-tog").not(":checked").each(function() {
                            b.find(".field-" + a(this).val()).addClass("hidden-field")
                        })
                    })
                },
                addSelectedToMenu: function(c) {
                    return 0 === a("#menu-to-edit").length ? !1 : this.each(function() {
                        var d = a(this),
                            e = {},
                            f = d.find(menus.oneThemeLocationNoMenus && 0 === d.find(".tabs-panel-active .categorychecklist li input:checked").length ? '#page-all li input[type="checkbox"]' : ".tabs-panel-active .categorychecklist li input:checked"),
                            g = /menu-item\[([^\]]*)/;
                        return c = c || b.addMenuItemToBottom, f.length ? (d.find(".spinner").show(), a(f).each(function() {
                            var d = a(this),
                                f = g.exec(d.attr("name")),
                                h = "undefined" == typeof f[1] ? 0 : parseInt(f[1], 10);
                            this.className && -1 != this.className.indexOf("add-to-top") && (c = b.addMenuItemToTop), e[h] = d.closest("li").getItemData("add-menu-item", h)
                        }), void b.addItemToMenu(e, c, function() {
                            f.removeAttr("checked"), d.find(".spinner").hide()
                        })) : !1
                    })
                },
                getItemData: function(a, b) {
                    a = a || "menu-item";
                    var c, d = {},
                        e = ["menu-item-db-id", "menu-item-object-id", "menu-item-object", "menu-item-parent-id", "menu-item-position", "menu-item-type", "menu-item-title", "menu-item-url", "menu-item-description", "menu-item-attr-title", "menu-item-target", "menu-item-classes", "menu-item-xfn"];
                    return b || "menu-item" != a || (b = this.find(".menu-item-data-db-id").val()), b ? (this.find("input").each(function() {
                        var f;
                        for (c = e.length; c--;) "menu-item" == a ? f = e[c] + "[" + b + "]" : "add-menu-item" == a && (f = "menu-item[" + b + "][" + e[c] + "]"), this.name && f == this.name && (d[e[c]] = this.value)
                    }), d) : d
                },
                setItemData: function(b, c, d) {
                    return c = c || "menu-item", d || "menu-item" != c || (d = a(".menu-item-data-db-id", this).val()), d ? (this.find("input").each(function() {
                        var e, f = a(this);
                        a.each(b, function(a, b) {
                            "menu-item" == c ? e = a + "[" + d + "]" : "add-menu-item" == c && (e = "menu-item[" + d + "][" + a + "]"), e == f.attr("name") && f.val(b)
                        })
                    }), this) : this
                }
            })
        },
        countMenuItems: function(b) {
            return a(".menu-item-depth-" + b).length
        },
        moveMenuItem: function(c, d) {
            var e, f, g, h = a("#menu-to-edit li"),
                i = h.length,
                j = c.parents("li.menu-item"),
                k = j.childMenuItems(),
                l = j.getItemData(),
                m = parseInt(j.menuItemDepth(), 10),
                n = parseInt(j.index(), 10),
                o = j.next(),
                p = o.childMenuItems(),
                q = parseInt(o.menuItemDepth(), 10) + 1,
                r = j.prev(),
                s = parseInt(r.menuItemDepth(), 10),
                t = r.getItemData()["menu-item-db-id"];
            switch (d) {
                case "up":
                    if (f = n - 1, 0 === n) break;
                    0 === f && 0 !== m && j.moveHorizontally(0, m), 0 !== s && j.moveHorizontally(s, m), k ? (e = j.add(k), e.detach().insertBefore(h.eq(f)).updateParentMenuItemDBId()) : j.detach().insertBefore(h.eq(f)).updateParentMenuItemDBId();
                    break;
                case "down":
                    if (k) {
                        if (e = j.add(k), o = h.eq(e.length + n), p = 0 !== o.childMenuItems().length, p && (g = parseInt(o.menuItemDepth(), 10) + 1, j.moveHorizontally(g, m)), i === n + e.length) break;
                        e.detach().insertAfter(h.eq(n + e.length)).updateParentMenuItemDBId()
                    } else {
                        if (0 !== p.length && j.moveHorizontally(q, m), i === n + 1) break;
                        j.detach().insertAfter(h.eq(n + 1)).updateParentMenuItemDBId()
                    }
                    break;
                case "top":
                    if (0 === n) break;
                    k ? (e = j.add(k), e.detach().insertBefore(h.eq(0)).updateParentMenuItemDBId()) : j.detach().insertBefore(h.eq(0)).updateParentMenuItemDBId();
                    break;
                case "left":
                    if (0 === m) break;
                    j.shiftHorizontally(-1);
                    break;
                case "right":
                    if (0 === n) break;
                    if (l["menu-item-parent-id"] === t) break;
                    j.shiftHorizontally(1)
            }
            c.focus(), b.registerChange(), b.refreshKeyboardAccessibility(), b.refreshAdvancedAccessibility()
        },
        initAccessibility: function() {
            var c = a("#menu-to-edit");
            b.refreshKeyboardAccessibility(), b.refreshAdvancedAccessibility(), c.on("click", ".menus-move-up", function(c) {
                b.moveMenuItem(a(this).parents("li.menu-item").find("a.item-edit"), "up"), c.preventDefault()
            }), c.on("click", ".menus-move-down", function(c) {
                b.moveMenuItem(a(this).parents("li.menu-item").find("a.item-edit"), "down"), c.preventDefault()
            }), c.on("click", ".menus-move-top", function(c) {
                b.moveMenuItem(a(this).parents("li.menu-item").find("a.item-edit"), "top"), c.preventDefault()
            }), c.on("click", ".menus-move-left", function(c) {
                b.moveMenuItem(a(this).parents("li.menu-item").find("a.item-edit"), "left"), c.preventDefault()
            }), c.on("click", ".menus-move-right", function(c) {
                b.moveMenuItem(a(this).parents("li.menu-item").find("a.item-edit"), "right"), c.preventDefault()
            })
        },
        refreshAdvancedAccessibility: function() {
            a(".menu-item-settings .field-move a").css("display", "none"), a(".item-edit").each(function() {
                var b, c, d, e, f, g, h, i, j, k = a(this),
                    l = k.closest("li.menu-item").first(),
                    m = l.menuItemDepth(),
                    n = 0 === m,
                    o = k.closest(".menu-item-handle").find(".menu-item-title").text(),
                    p = parseInt(l.index(), 10),
                    q = n ? m : parseInt(m - 1, 10),
                    r = l.prevAll(".menu-item-depth-" + q).first().find(".menu-item-title").text(),
                    s = l.prevAll(".menu-item-depth-" + m).first().find(".menu-item-title").text(),
                    t = a("#menu-to-edit li").length,
                    u = l.nextAll(".menu-item-depth-" + m).length;
                0 !== p && (b = l.find(".menus-move-up"), b.prop("title", menus.moveUp).css("display", "inline")), 0 !== p && n && (b = l.find(".menus-move-top"), b.prop("title", menus.moveToTop).css("display", "inline")), p + 1 !== t && 0 !== p && (b = l.find(".menus-move-down"), b.prop("title", menus.moveDown).css("display", "inline")), 0 === p && 0 !== u && (b = l.find(".menus-move-down"), b.prop("title", menus.moveDown).css("display", "inline")), n || (b = l.find(".menus-move-left"), c = menus.outFrom.replace("%s", r), b.prop("title", menus.moveOutFrom.replace("%s", r)).html(c).css("display", "inline")), 0 !== p && l.find(".menu-item-data-parent-id").val() !== l.prev().find(".menu-item-data-db-id").val() && (b = l.find(".menus-move-right"), c = menus.under.replace("%s", s), b.prop("title", menus.moveUnder.replace("%s", s)).html(c).css("display", "inline")), n ? (d = a(".menu-item-depth-0"), e = d.index(l) + 1, t = d.length, f = menus.menuFocus.replace("%1$s", o).replace("%2$d", e).replace("%3$d", t)) : (g = l.prevAll(".menu-item-depth-" + parseInt(m - 1, 10)).first(), h = g.find(".menu-item-data-db-id").val(), i = g.find(".menu-item-title").text(), j = a('.menu-item .menu-item-data-parent-id[value="' + h + '"]'), e = a(j.parents(".menu-item").get().reverse()).index(l) + 1, f = menus.subMenuFocus.replace("%1$s", o).replace("%2$d", e).replace("%3$s", i)), k.prop("title", f).html(f)
            })
        },
        refreshKeyboardAccessibility: function() {
            a(".item-edit").off("focus").on("focus", function() {
                a(this).off("keydown").on("keydown", function(c) {
                    var d, e = a(this),
                        f = e.parents("li.menu-item"),
                        g = f.getItemData();
                    if ((37 == c.which || 38 == c.which || 39 == c.which || 40 == c.which) && (e.off("keydown"), 1 !== a("#menu-to-edit li").length)) {
                        switch (d = {
                            38: "up",
                            40: "down",
                            37: "left",
                            39: "right"
                        }, a("body").hasClass("rtl") && (d = {
                            38: "up",
                            40: "down",
                            39: "left",
                            37: "right"
                        }), d[c.which]) {
                            case "up":
                                b.moveMenuItem(e, "up");
                                break;
                            case "down":
                                b.moveMenuItem(e, "down");
                                break;
                            case "left":
                                b.moveMenuItem(e, "left");
                                break;
                            case "right":
                                b.moveMenuItem(e, "right")
                        }
                        return a("#edit-" + g["menu-item-db-id"]).focus(), !1
                    }
                })
            })
        },
        initPreviewing: function() {
            a("#menu-to-edit").on("change input", ".edit-menu-item-title", function(b) {
                var c, d, e = a(b.currentTarget);
                c = e.val(), d = e.closest(".menu-item").find(".menu-item-title"), c ? d.text(c).removeClass("no-title") : d.text(navMenuL10n.untitled).addClass("no-title")
            })
        },
        initToggles: function() {
            postboxes.add_postbox_toggles("nav-menus"), columns.useCheckboxesForHidden(), columns.checked = function(b) {
                a(".field-" + b).removeClass("hidden-field")
            }, columns.unchecked = function(b) {
                a(".field-" + b).addClass("hidden-field")
            }, b.menuList.hideAdvancedMenuItemFields(), a(".hide-postbox-tog").click(function() {
                var b = a(".accordion-container li.accordion-section").filter(":hidden").map(function() {
                    return this.id
                }).get().join(",");
                a.post(ajaxurl, {
                    action: "closed-postboxes",
                    hidden: b,
                    closedpostboxesnonce: jQuery("#closedpostboxesnonce").val(),
                    page: "nav-menus"
                })
            })
        },
        initSortables: function() {
            function c(a) {
                var c;
                j = a.placeholder.prev(), k = a.placeholder.next(), j[0] == a.item[0] && (j = j.prev()), k[0] == a.item[0] && (k = k.next()), l = j.length ? j.offset().top + j.height() : 0, m = k.length ? k.offset().top + k.height() / 3 : 0, h = k.length ? k.menuItemDepth() : 0, i = j.length ? (c = j.menuItemDepth() + 1) > b.options.globalMaxDepth ? b.options.globalMaxDepth : c : 0
            }

            function d(a, b) {
                a.placeholder.updateDepthClass(b, q), q = b
            }

            function e() {
                if (!s[0].className) return 0;
                var a = s[0].className.match(/menu-max-depth-(\d+)/);
                return a && a[1] ? parseInt(a[1], 10) : 0
            }

            function f(c) {
                var d, e = t;
                if (0 !== c) {
                    if (c > 0) d = p + c, d > t && (e = d);
                    else if (0 > c && p == t)
                        for (; !a(".menu-item-depth-" + e, b.menuList).length && e > 0;) e--;
                    s.removeClass("menu-max-depth-" + t).addClass("menu-max-depth-" + e), t = e
                }
            }
            var g, h, i, j, k, l, m, n, o, p, q = 0,
                r = b.menuList.offset().left,
                s = a("body"),
                t = e();
            0 !== a("#menu-to-edit li").length && a(".drag-instructions").show(), r += b.isRTL ? b.menuList.width() : 0, b.menuList.sortable({
                handle: ".menu-item-handle",
                placeholder: "sortable-placeholder",
                start: function(e, f) {
                    var h, i, j, k, l;
                    b.isRTL && (f.item[0].style.right = "auto"), o = f.item.children(".menu-item-transport"), g = f.item.menuItemDepth(), d(f, g), j = f.item.next()[0] == f.placeholder[0] ? f.item.next() : f.item, k = j.childMenuItems(), o.append(k), h = o.outerHeight(), h += h > 0 ? 1 * f.placeholder.css("margin-top").slice(0, -2) : 0, h += f.helper.outerHeight(), n = h, h -= 2, f.placeholder.height(h), p = g, k.each(function() {
                        var b = a(this).menuItemDepth();
                        p = b > p ? b : p
                    }), i = f.helper.find(".menu-item-handle").outerWidth(), i += b.depthToPx(p - g), i -= 2, f.placeholder.width(i), l = f.placeholder.next(), l.css("margin-top", n + "px"), f.placeholder.detach(), a(this).sortable("refresh"), f.item.after(f.placeholder), l.css("margin-top", 0), c(f)
                },
                stop: function(a, c) {
                    var d, e, h = q - g;
                    d = o.children().insertAfter(c.item), e = c.item.find(".item-title .is-submenu"), q > 0 ? e.show() : e.hide(), 0 !== h && (c.item.updateDepthClass(q), d.shiftDepthClass(h), f(h)), b.registerChange(), c.item.updateParentMenuItemDBId(), c.item[0].style.top = 0, b.isRTL && (c.item[0].style.left = "auto", c.item[0].style.right = 0), b.refreshKeyboardAccessibility(), b.refreshAdvancedAccessibility()
                },
                change: function(a, d) {
                    d.placeholder.parent().hasClass("menu") || (j.length ? j.after(d.placeholder) : b.menuList.prepend(d.placeholder)), c(d)
                },
                sort: function(e, f) {
                    var g = f.helper.offset(),
                        j = b.isRTL ? g.left + f.helper.width() : g.left,
                        o = b.negateIfRTL * b.pxToDepth(j - r);
                    o > i || g.top < l ? o = i : h > o && (o = h), o != q && d(f, o), m && g.top + n > m && (k.after(f.placeholder), c(f), a(this).sortable("refreshPositions"))
                }
            })
        },
        initManageLocations: function() {
            a("#menu-locations-wrap form").submit(function() {
                window.onbeforeunload = null
            }), a(".menu-location-menus select").on("change", function() {
                var b = a(this).closest("tr").find(".locations-edit-menu-link");
                a(this).find("option:selected").data("orig") ? b.show() : b.hide()
            })
        },
        attachMenuEditListeners: function() {
            var b = this;
            a("#update-nav-menu").bind("click", function(a) {
                if (a.target && a.target.className) {
                    if (-1 != a.target.className.indexOf("item-edit")) return b.eventOnClickEditLink(a.target);
                    if (-1 != a.target.className.indexOf("menu-save")) return b.eventOnClickMenuSave(a.target);
                    if (-1 != a.target.className.indexOf("menu-delete")) return b.eventOnClickMenuDelete(a.target);
                    if (-1 != a.target.className.indexOf("item-delete")) return b.eventOnClickMenuItemDelete(a.target);
                    if (-1 != a.target.className.indexOf("item-cancel")) return b.eventOnClickCancelLink(a.target)
                }
            }), a('#add-custom-links input[type="text"]').keypress(function(b) {
                13 === b.keyCode && (b.preventDefault(), a("#submit-customlinkdiv").click())
            })
        },
        setupInputWithDefaultTitle: function() {
            var b = "input-with-default-title";
            a("." + b).each(function() {
                var c = a(this),
                    d = c.attr("title"),
                    e = c.val();
                if (c.data(b, d), "" === e) c.val(d);
                else {
                    if (d == e) return;
                    c.removeClass(b)
                }
            }).focus(function() {
                var c = a(this);
                c.val() == c.data(b) && c.val("").removeClass(b)
            }).blur(function() {
                var c = a(this);
                "" === c.val() && c.addClass(b).val(c.data(b))
            }), a(".blank-slate .input-with-default-title").focus()
        },
        attachThemeLocationsListeners: function() {
            var b = a("#nav-menu-theme-locations"),
                c = {};
            c.action = "menu-locations-save", c["menu-settings-column-nonce"] = a("#menu-settings-column-nonce").val(), b.find('input[type="submit"]').click(function() {
                return b.find("select").each(function() {
                    c[this.name] = a(this).val()
                }), b.find(".spinner").show(), a.post(ajaxurl, c, function() {
                    b.find(".spinner").hide()
                }), !1
            })
        },
        attachQuickSearchListeners: function() {
            var c;
            a(".quick-search").keypress(function(d) {
                var e = a(this);
                return 13 == d.which ? (b.updateQuickSearchResults(e), !1) : (c && clearTimeout(c), void(c = setTimeout(function() {
                    b.updateQuickSearchResults(e)
                }, 400)))
            }).attr("autocomplete", "off")
        },
        updateQuickSearchResults: function(c) {
            var d, e, f = 2,
                g = c.val();
            g.length < f || (d = c.parents(".tabs-panel"), e = {
                action: "menu-quick-search",
                "response-format": "markup",
                menu: a("#menu").val(),
                "menu-settings-column-nonce": a("#menu-settings-column-nonce").val(),
                q: g,
                type: c.attr("name")
            }, a(".spinner", d).show(), a.post(ajaxurl, e, function(a) {
                b.processQuickSearchQueryResponse(a, e, d)
            }))
        },
        addCustomLink: function(c) {
            var d = a("#custom-menu-item-url").val(),
                e = a("#custom-menu-item-name").val();
            return c = c || b.addMenuItemToBottom, "" === d || "http://" == d ? !1 : (a(".customlinkdiv .spinner").show(), void this.addLinkToMenu(d, e, c, function() {
                a(".customlinkdiv .spinner").hide(), a("#custom-menu-item-name").val("").blur(), a("#custom-menu-item-url").val("http://")
            }))
        },
        addLinkToMenu: function(a, c, d, e) {
            d = d || b.addMenuItemToBottom, e = e || function() {}, b.addItemToMenu({
                "-1": {
                    "menu-item-type": "custom",
                    "menu-item-url": a,
                    "menu-item-title": c
                }
            }, d, e)
        },
        addItemToMenu: function(b, c, d) {
            var e, f = a("#menu").val(),
                g = a("#menu-settings-column-nonce").val();
            c = c || function() {}, d = d || function() {}, e = {
                action: "add-menu-item",
                menu: f,
                "menu-settings-column-nonce": g,
                "menu-item": b
            }, a.post(ajaxurl, e, function(b) {
                var f = a("#menu-instructions");
                b = a.trim(b), c(b, e), a("li.pending").hide().fadeIn("slow"), a(".drag-instructions").show(), !f.hasClass("menu-instructions-inactive") && f.siblings().length && f.addClass("menu-instructions-inactive"), d()
            })
        },
        addMenuItemToBottom: function(c) {
            a(c).hideAdvancedMenuItemFields().appendTo(b.targetList), b.refreshKeyboardAccessibility(), b.refreshAdvancedAccessibility()
        },
        addMenuItemToTop: function(c) {
            a(c).hideAdvancedMenuItemFields().prependTo(b.targetList), b.refreshKeyboardAccessibility(), b.refreshAdvancedAccessibility()
        },
        attachUnsavedChangesListener: function() {
            a("#menu-management input, #menu-management select, #menu-management, #menu-management textarea, .menu-location-menus select").change(function() {
                b.registerChange()
            }), 0 !== a("#menu-to-edit").length || 0 !== a(".menu-location-menus select").length ? window.onbeforeunload = function() {
                return b.menusChanged ? navMenuL10n.saveAlert : void 0
            } : a("#menu-settings-column").find("input,select").end().find("a").attr("href", "#").unbind("click")
        },
        registerChange: function() {
            b.menusChanged = !0
        },
        attachTabsPanelListeners: function() {
            a("#menu-settings-column").bind("click", function(c) {
                var d, e, f, g, h = a(c.target);
                if (h.hasClass("nav-tab-link")) e = h.data("type"), f = h.parents(".accordion-section-content").first(), a("input", f).removeAttr("checked"), a(".tabs-panel-active", f).removeClass("tabs-panel-active").addClass("tabs-panel-inactive"), a("#" + e, f).removeClass("tabs-panel-inactive").addClass("tabs-panel-active"), a(".tabs", f).removeClass("tabs"), h.parent().addClass("tabs"), a(".quick-search", f).focus(), c.preventDefault();
                else if (h.hasClass("select-all")) {
                    if (d = /#(.*)$/.exec(c.target.href), d && d[1]) return g = a("#" + d[1] + " .tabs-panel-active .menu-item-title input"), g.length === g.filter(":checked").length ? g.removeAttr("checked") : g.prop("checked", !0), !1
                } else {
                    if (h.hasClass("submit-add-to-menu")) return b.registerChange(), c.target.id && "submit-customlinkdiv" == c.target.id ? b.addCustomLink(b.addMenuItemToBottom) : c.target.id && -1 != c.target.id.indexOf("submit-") && a("#" + c.target.id.replace(/submit-/, "")).addSelectedToMenu(b.addMenuItemToBottom), !1;
                    if (h.hasClass("page-numbers")) return a.post(ajaxurl, c.target.href.replace(/.*\?/, "").replace(/action=([^&]*)/, "") + "&action=menu-get-metabox", function(b) {
                        if (-1 != b.indexOf("replace-id")) {
                            var c = a.parseJSON(b),
                                d = document.getElementById(c["replace-id"]),
                                e = document.createElement("div"),
                                f = document.createElement("div");
                            c.markup && d && (f.innerHTML = c.markup ? c.markup : "", d.parentNode.insertBefore(e, d), e.parentNode.removeChild(d), e.parentNode.insertBefore(f, e), e.parentNode.removeChild(e))
                        }
                    }), !1
                }
            })
        },
        eventOnClickEditLink: function(b) {
            var c, d, e = /#(.*)$/.exec(b.href);
            return e && e[1] && (c = a("#" + e[1]), d = c.parent(), 0 !== d.length) ? (d.hasClass("menu-item-edit-inactive") ? (c.data("menu-item-data") || c.data("menu-item-data", c.getItemData()), c.slideDown("fast"), d.removeClass("menu-item-edit-inactive").addClass("menu-item-edit-active")) : (c.slideUp("fast"), d.removeClass("menu-item-edit-active").addClass("menu-item-edit-inactive")), !1) : void 0
        },
        eventOnClickCancelLink: function(b) {
            var c = a(b).closest(".menu-item-settings"),
                d = a(b).closest(".menu-item");
            return d.removeClass("menu-item-edit-active").addClass("menu-item-edit-inactive"), c.setItemData(c.data("menu-item-data")).hide(), !1
        },
        eventOnClickMenuSave: function() {
            var c = "",
                d = a("#menu-name"),
                e = d.val();
            return e && e != d.attr("title") && e.replace(/\s+/, "") ? (a("#nav-menu-theme-locations select").each(function() {
                c += '<input type="hidden" name="' + this.name + '" value="' + a(this).val() + '" />'
            }), a("#update-nav-menu").append(c), b.menuList.find(".menu-item-data-position").val(function(a) {
                return a + 1
            }), window.onbeforeunload = null, !0) : (d.parent().addClass("form-invalid"), !1)
        },
        eventOnClickMenuDelete: function() {
            return window.confirm(navMenuL10n.warnDeleteMenu) ? (window.onbeforeunload = null, !0) : !1
        },
        eventOnClickMenuItemDelete: function(c) {
            var d = parseInt(c.id.replace("delete-", ""), 10);
            return b.removeMenuItem(a("#menu-item-" + d)), b.registerChange(), !1
        },
        processQuickSearchQueryResponse: function(b, c, d) {
            var e, f, g, h = {},
                i = document.getElementById("nav-menu-meta"),
                j = /menu-item[(\[^]\]*/,
                k = a("<div>").html(b).find("li");
            return k.length ? (k.each(function() {
                if (g = a(this), e = j.exec(g.html()), e && e[1]) {
                    for (f = e[1]; i.elements["menu-item[" + f + "][menu-item-type]"] || h[f];) f--;
                    h[f] = !0, f != e[1] && g.html(g.html().replace(new RegExp("menu-item\\[" + e[1] + "\\]", "g"), "menu-item[" + f + "]"))
                }
            }), a(".categorychecklist", d).html(k), void a(".spinner", d).hide()) : (a(".categorychecklist", d).html("<li><p>" + navMenuL10n.noResultsFound + "</p></li>"), void a(".spinner", d).hide())
        },
        removeMenuItem: function(b) {
            var c = b.childMenuItems();
            b.addClass("deleting").animate({
                opacity: 0,
                height: 0
            }, 350, function() {
                var d = a("#menu-instructions");
                b.remove(), c.shiftDepthClass(-1).updateParentMenuItemDBId(), 0 === a("#menu-to-edit li").length && (a(".drag-instructions").hide(), d.removeClass("menu-instructions-inactive"))
            })
        },
        depthToPx: function(a) {
            return a * b.options.menuItemDepthPerLevel
        },
        pxToDepth: function(a) {
            return Math.floor(a / b.options.menuItemDepthPerLevel)
        }
    }, a(document).ready(function() {
        wpNavMenu.init()
    })
}(jQuery);
/**
 * mOxie - multi-runtime File API & XMLHttpRequest L2 Polyfill
 * v1.2.0
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2014-01-16
 */
! function(e, t) {
    "use strict";

    function n(e, t) {
        for (var n, i = [], r = 0; r < e.length; ++r) {
            if (n = s[e[r]] || o(e[r]), !n) throw "module definition dependecy not found: " + e[r];
            i.push(n)
        }
        t.apply(null, i)
    }

    function i(e, i, r) {
        if ("string" != typeof e) throw "invalid module definition, module id must be defined and be a string";
        if (i === t) throw "invalid module definition, dependencies must be specified";
        if (r === t) throw "invalid module definition, definition function must be specified";
        n(i, function() {
            s[e] = r.apply(null, arguments)
        })
    }

    function r(e) {
        return !!s[e]
    }

    function o(t) {
        for (var n = e, i = t.split(/[.\/]/), r = 0; r < i.length; ++r) {
            if (!n[i[r]]) return;
            n = n[i[r]]
        }
        return n
    }

    function a(n) {
        for (var i = 0; i < n.length; i++) {
            for (var r = e, o = n[i], a = o.split(/[.\/]/), u = 0; u < a.length - 1; ++u) r[a[u]] === t && (r[a[u]] = {}), r = r[a[u]];
            r[a[a.length - 1]] = s[o]
        }
    }
    var s = {},
        u = "moxie/core/utils/Basic",
        c = "moxie/core/I18n",
        l = "moxie/core/utils/Mime",
        d = "moxie/core/utils/Env",
        f = "moxie/core/utils/Dom",
        p = "moxie/core/Exceptions",
        h = "moxie/core/EventTarget",
        m = "moxie/core/utils/Encode",
        g = "moxie/runtime/Runtime",
        v = "moxie/runtime/RuntimeClient",
        y = "moxie/file/Blob",
        w = "moxie/file/File",
        E = "moxie/file/FileInput",
        _ = "moxie/file/FileDrop",
        x = "moxie/runtime/RuntimeTarget",
        R = "moxie/file/FileReader",
        b = "moxie/core/utils/Url",
        T = "moxie/file/FileReaderSync",
        S = "moxie/xhr/FormData",
        A = "moxie/xhr/XMLHttpRequest",
        O = "moxie/runtime/Transporter",
        I = "moxie/image/Image",
        D = "moxie/runtime/html5/Runtime",
        N = "moxie/runtime/html5/file/Blob",
        L = "moxie/core/utils/Events",
        M = "moxie/runtime/html5/file/FileInput",
        C = "moxie/runtime/html5/file/FileDrop",
        F = "moxie/runtime/html5/file/FileReader",
        H = "moxie/runtime/html5/xhr/XMLHttpRequest",
        P = "moxie/runtime/html5/utils/BinaryReader",
        k = "moxie/runtime/html5/image/JPEGHeaders",
        U = "moxie/runtime/html5/image/ExifParser",
        B = "moxie/runtime/html5/image/JPEG",
        z = "moxie/runtime/html5/image/PNG",
        G = "moxie/runtime/html5/image/ImageInfo",
        q = "moxie/runtime/html5/image/MegaPixel",
        X = "moxie/runtime/html5/image/Image",
        j = "moxie/runtime/flash/Runtime",
        V = "moxie/runtime/flash/file/Blob",
        W = "moxie/runtime/flash/file/FileInput",
        Y = "moxie/runtime/flash/file/FileReader",
        $ = "moxie/runtime/flash/file/FileReaderSync",
        J = "moxie/runtime/flash/xhr/XMLHttpRequest",
        Z = "moxie/runtime/flash/runtime/Transporter",
        K = "moxie/runtime/flash/image/Image",
        Q = "moxie/runtime/silverlight/Runtime",
        et = "moxie/runtime/silverlight/file/Blob",
        tt = "moxie/runtime/silverlight/file/FileInput",
        nt = "moxie/runtime/silverlight/file/FileDrop",
        it = "moxie/runtime/silverlight/file/FileReader",
        rt = "moxie/runtime/silverlight/file/FileReaderSync",
        ot = "moxie/runtime/silverlight/xhr/XMLHttpRequest",
        at = "moxie/runtime/silverlight/runtime/Transporter",
        st = "moxie/runtime/silverlight/image/Image",
        ut = "moxie/runtime/html4/Runtime",
        ct = "moxie/runtime/html4/file/FileInput",
        lt = "moxie/runtime/html4/file/FileReader",
        dt = "moxie/runtime/html4/xhr/XMLHttpRequest",
        ft = "moxie/runtime/html4/image/Image";
    i(u, [], function() {
        var e = function(e) {
                var t;
                return e === t ? "undefined" : null === e ? "null" : e.nodeType ? "node" : {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
            },
            t = function(i) {
                var r;
                return n(arguments, function(o, s) {
                    s > 0 && n(o, function(n, o) {
                        n !== r && (e(i[o]) === e(n) && ~a(e(n), ["array", "object"]) ? t(i[o], n) : i[o] = n)
                    })
                }), i
            },
            n = function(e, t) {
                var n, i, r, o;
                if (e) {
                    try {
                        n = e.length
                    } catch (a) {
                        n = o
                    }
                    if (n === o) {
                        for (i in e)
                            if (e.hasOwnProperty(i) && t(e[i], i) === !1) return
                    } else
                        for (r = 0; n > r; r++)
                            if (t(e[r], r) === !1) return
                }
            },
            i = function(t) {
                var n;
                if (!t || "object" !== e(t)) return !0;
                for (n in t) return !1;
                return !0
            },
            r = function(t, n) {
                function i(r) {
                    "function" === e(t[r]) && t[r](function(e) {
                        ++r < o && !e ? i(r) : n(e)
                    })
                }
                var r = 0,
                    o = t.length;
                "function" !== e(n) && (n = function() {}), t && t.length || n(), i(r)
            },
            o = function(e, t) {
                var i = 0,
                    r = e.length,
                    o = new Array(r);
                n(e, function(e, n) {
                    e(function(e) {
                        if (e) return t(e);
                        var a = [].slice.call(arguments);
                        a.shift(), o[n] = a, i++, i === r && (o.unshift(null), t.apply(this, o))
                    })
                })
            },
            a = function(e, t) {
                if (t) {
                    if (Array.prototype.indexOf) return Array.prototype.indexOf.call(t, e);
                    for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e) return n
                }
                return -1
            },
            s = function(t, n) {
                var i = [];
                "array" !== e(t) && (t = [t]), "array" !== e(n) && (n = [n]);
                for (var r in t) - 1 === a(t[r], n) && i.push(t[r]);
                return i.length ? i : !1
            },
            u = function(e, t) {
                var i = [];
                return n(e, function(e) {
                    -1 !== a(e, t) && i.push(e)
                }), i.length ? i : null
            },
            c = function(e) {
                var t, n = [];
                for (t = 0; t < e.length; t++) n[t] = e[t];
                return n
            },
            l = function() {
                var e = 0;
                return function(t) {
                    var n = (new Date).getTime().toString(32),
                        i;
                    for (i = 0; 5 > i; i++) n += Math.floor(65535 * Math.random()).toString(32);
                    return (t || "o_") + n + (e++).toString(32)
                }
            }(),
            d = function(e) {
                return e ? String.prototype.trim ? String.prototype.trim.call(e) : e.toString().replace(/^\s*/, "").replace(/\s*$/, "") : e
            },
            f = function(e) {
                if ("string" != typeof e) return e;
                var t = {
                        t: 1099511627776,
                        g: 1073741824,
                        m: 1048576,
                        k: 1024
                    },
                    n;
                return e = /^([0-9]+)([mgk]?)$/.exec(e.toLowerCase().replace(/[^0-9mkg]/g, "")), n = e[2], e = +e[1], t.hasOwnProperty(n) && (e *= t[n]), e
            };
        return {
            guid: l,
            typeOf: e,
            extend: t,
            each: n,
            isEmptyObj: i,
            inSeries: r,
            inParallel: o,
            inArray: a,
            arrayDiff: s,
            arrayIntersect: u,
            toArray: c,
            trim: d,
            parseSizeStr: f
        }
    }), i(c, [u], function(e) {
        var t = {};
        return {
            addI18n: function(n) {
                return e.extend(t, n)
            },
            translate: function(e) {
                return t[e] || e
            },
            _: function(e) {
                return this.translate(e)
            },
            sprintf: function(t) {
                var n = [].slice.call(arguments, 1);
                return t.replace(/%[a-z]/g, function() {
                    var t = n.shift();
                    return "undefined" !== e.typeOf(t) ? t : ""
                })
            }
        }
    }), i(l, [u, c], function(e, t) {
        var n = "application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe",
            i = {
                mimes: {},
                extensions: {},
                addMimeType: function(e) {
                    var t = e.split(/,/),
                        n, i, r;
                    for (n = 0; n < t.length; n += 2) {
                        for (r = t[n + 1].split(/ /), i = 0; i < r.length; i++) this.mimes[r[i]] = t[n];
                        this.extensions[t[n]] = r
                    }
                },
                extList2mimes: function(t, n) {
                    var i = this,
                        r, o, a, s, u = [];
                    for (o = 0; o < t.length; o++)
                        for (r = t[o].extensions.split(/\s*,\s*/), a = 0; a < r.length; a++) {
                            if ("*" === r[a]) return [];
                            if (s = i.mimes[r[a]]) - 1 === e.inArray(s, u) && u.push(s);
                            else {
                                if (!n || !/^\w+$/.test(r[a])) return [];
                                u.push("." + r[a])
                            }
                        }
                    return u
                },
                mimes2exts: function(t) {
                    var n = this,
                        i = [];
                    return e.each(t, function(t) {
                        if ("*" === t) return i = [], !1;
                        var r = t.match(/^(\w+)\/(\*|\w+)$/);
                        r && ("*" === r[2] ? e.each(n.extensions, function(e, t) {
                            new RegExp("^" + r[1] + "/").test(t) && [].push.apply(i, n.extensions[t])
                        }) : n.extensions[t] && [].push.apply(i, n.extensions[t]))
                    }), i
                },
                mimes2extList: function(n) {
                    var i = [],
                        r = [];
                    return "string" === e.typeOf(n) && (n = e.trim(n).split(/\s*,\s*/)), r = this.mimes2exts(n), i.push({
                        title: t.translate("Files"),
                        extensions: r.length ? r.join(",") : "*"
                    }), i.mimes = n, i
                },
                getFileExtension: function(e) {
                    var t = e && e.match(/\.([^.]+)$/);
                    return t ? t[1].toLowerCase() : ""
                },
                getFileMime: function(e) {
                    return this.mimes[this.getFileExtension(e)] || ""
                }
            };
        return i.addMimeType(n), i
    }), i(d, [u], function(e) {
        function t(e, t, n) {
            var i = 0,
                r = 0,
                o = 0,
                a = {
                    dev: -6,
                    alpha: -5,
                    a: -5,
                    beta: -4,
                    b: -4,
                    RC: -3,
                    rc: -3,
                    "#": -2,
                    p: 1,
                    pl: 1
                },
                s = function(e) {
                    return e = ("" + e).replace(/[_\-+]/g, "."), e = e.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, "."), e.length ? e.split(".") : [-8]
                },
                u = function(e) {
                    return e ? isNaN(e) ? a[e] || -7 : parseInt(e, 10) : 0
                };
            for (e = s(e), t = s(t), r = Math.max(e.length, t.length), i = 0; r > i; i++)
                if (e[i] != t[i]) {
                    if (e[i] = u(e[i]), t[i] = u(t[i]), e[i] < t[i]) {
                        o = -1;
                        break
                    }
                    if (e[i] > t[i]) {
                        o = 1;
                        break
                    }
                }
            if (!n) return o;
            switch (n) {
                case ">":
                case "gt":
                    return o > 0;
                case ">=":
                case "ge":
                    return o >= 0;
                case "<=":
                case "le":
                    return 0 >= o;
                case "==":
                case "=":
                case "eq":
                    return 0 === o;
                case "<>":
                case "!=":
                case "ne":
                    return 0 !== o;
                case "":
                case "<":
                case "lt":
                    return 0 > o;
                default:
                    return null
            }
        }
        var n = function(e) {
                var t = "",
                    n = "?",
                    i = "function",
                    r = "undefined",
                    o = "object",
                    a = "major",
                    s = "model",
                    u = "name",
                    c = "type",
                    l = "vendor",
                    d = "version",
                    f = "architecture",
                    p = "console",
                    h = "mobile",
                    m = "tablet",
                    g = {
                        has: function(e, t) {
                            return -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                        },
                        lowerize: function(e) {
                            return e.toLowerCase()
                        }
                    },
                    v = {
                        rgx: function() {
                            for (var t, n = 0, a, s, u, c, l, d, f = arguments; n < f.length; n += 2) {
                                var p = f[n],
                                    h = f[n + 1];
                                if (typeof t === r) {
                                    t = {};
                                    for (u in h) c = h[u], typeof c === o ? t[c[0]] = e : t[c] = e
                                }
                                for (a = s = 0; a < p.length; a++)
                                    if (l = p[a].exec(this.getUA())) {
                                        for (u = 0; u < h.length; u++) d = l[++s], c = h[u], typeof c === o && c.length > 0 ? 2 == c.length ? t[c[0]] = typeof c[1] == i ? c[1].call(this, d) : c[1] : 3 == c.length ? t[c[0]] = typeof c[1] !== i || c[1].exec && c[1].test ? d ? d.replace(c[1], c[2]) : e : d ? c[1].call(this, d, c[2]) : e : 4 == c.length && (t[c[0]] = d ? c[3].call(this, d.replace(c[1], c[2])) : e) : t[c] = d ? d : e;
                                        break
                                    }
                                if (l) break
                            }
                            return t
                        },
                        str: function(t, i) {
                            for (var r in i)
                                if (typeof i[r] === o && i[r].length > 0) {
                                    for (var a = 0; a < i[r].length; a++)
                                        if (g.has(i[r][a], t)) return r === n ? e : r
                                } else if (g.has(i[r], t)) return r === n ? e : r;
                            return t
                        }
                    },
                    y = {
                        browser: {
                            oldsafari: {
                                major: {
                                    1: ["/8", "/1", "/3"],
                                    2: "/4",
                                    "?": "/"
                                },
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            }
                        },
                        device: {
                            sprint: {
                                model: {
                                    "Evo Shift 4G": "7373KT"
                                },
                                vendor: {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2000: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    RT: "ARM"
                                }
                            }
                        }
                    },
                    w = {
                        browser: [
                            [/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i],
                            [u, d, a],
                            [/\s(opr)\/((\d+)?[\w\.]+)/i],
                            [
                                [u, "Opera"], d, a
                            ],
                            [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i],
                            [u, d, a],
                            [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],
                            [
                                [u, "IE"], d, a
                            ],
                            [/(yabrowser)\/((\d+)?[\w\.]+)/i],
                            [
                                [u, "Yandex"], d, a
                            ],
                            [/(comodo_dragon)\/((\d+)?[\w\.]+)/i],
                            [
                                [u, /_/g, " "], d, a
                            ],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i],
                            [u, d, a],
                            [/(dolfin)\/((\d+)?[\w\.]+)/i],
                            [
                                [u, "Dolphin"], d, a
                            ],
                            [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],
                            [
                                [u, "Chrome"], d, a
                            ],
                            [/((?:android.+))version\/((\d+)?[\w\.]+)\smobile\ssafari/i],
                            [
                                [u, "Android Browser"], d, a
                            ],
                            [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],
                            [d, a, [u, "Mobile Safari"]],
                            [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],
                            [d, a, u],
                            [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],
                            [u, [a, v.str, y.browser.oldsafari.major],
                                [d, v.str, y.browser.oldsafari.version]
                            ],
                            [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i],
                            [u, d, a],
                            [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],
                            [
                                [u, "Netscape"], d, a
                            ],
                            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i],
                            [u, d, a]
                        ],
                        engine: [
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [u, d],
                            [/rv\:([\w\.]+).*(gecko)/i],
                            [d, u]
                        ],
                        os: [
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            [u, [d, v.str, y.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [u, "Windows"],
                                [d, v.str, y.os.windows.version]
                            ],
                            [/\((bb)(10);/i],
                            [
                                [u, "BlackBerry"], d
                            ],
                            [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)\/([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i],
                            [u, d],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                            [
                                [u, "Symbian"], d
                            ],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [u, "Firefox OS"], d
                            ],
                            [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                            [u, d],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [u, "Chromium OS"], d
                            ],
                            [/(sunos)\s?([\w\.]+\d)*/i],
                            [
                                [u, "Solaris"], d
                            ],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                            [u, d],
                            [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                            [
                                [u, "iOS"],
                                [d, /_/g, "."]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i],
                            [u, [d, /_/g, "."]],
                            [/(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i, /(unix)\s?([\w\.]+)*/i],
                            [u, d]
                        ]
                    },
                    E = function(e) {
                        var n = e || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : t);
                        this.getBrowser = function() {
                            return v.rgx.apply(this, w.browser)
                        }, this.getEngine = function() {
                            return v.rgx.apply(this, w.engine)
                        }, this.getOS = function() {
                            return v.rgx.apply(this, w.os)
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS()
                            }
                        }, this.getUA = function() {
                            return n
                        }, this.setUA = function(e) {
                            return n = e, this
                        }, this.setUA(n)
                    };
                return (new E).getResult()
            }(),
            i = function() {
                var t = {
                    define_property: function() {
                        return !1
                    }(),
                    create_canvas: function() {
                        var e = document.createElement("canvas");
                        return !(!e.getContext || !e.getContext("2d"))
                    }(),
                    return_response_type: function(t) {
                        try {
                            if (-1 !== e.inArray(t, ["", "text", "document"])) return !0;
                            if (window.XMLHttpRequest) {
                                var n = new XMLHttpRequest;
                                if (n.open("get", "/"), "responseType" in n) return n.responseType = t, n.responseType !== t ? !1 : !0
                            }
                        } catch (i) {}
                        return !1
                    },
                    use_data_uri: function() {
                        var e = new Image;
                        return e.onload = function() {
                            t.use_data_uri = 1 === e.width && 1 === e.height
                        }, setTimeout(function() {
                            e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                        }, 1), !1
                    }(),
                    use_data_uri_over32kb: function() {
                        return t.use_data_uri && ("IE" !== r.browser || r.version >= 9)
                    },
                    use_data_uri_of: function(e) {
                        return t.use_data_uri && 33e3 > e || t.use_data_uri_over32kb()
                    },
                    use_fileinput: function() {
                        var e = document.createElement("input");
                        return e.setAttribute("type", "file"), !e.disabled
                    }
                };
                return function(n) {
                    var i = [].slice.call(arguments);
                    return i.shift(), "function" === e.typeOf(t[n]) ? t[n].apply(this, i) : !!t[n]
                }
            }(),
            r = {
                can: i,
                browser: n.browser.name,
                version: parseFloat(n.browser.major),
                os: n.os.name,
                osVersion: n.os.version,
                verComp: t,
                swf_url: "../flash/Moxie.swf",
                xap_url: "../silverlight/Moxie.xap",
                global_event_dispatcher: "moxie.core.EventTarget.instance.dispatchEvent"
            };
        return r.OS = r.os, r
    }), i(f, [d], function(e) {
        var t = function(e) {
                return "string" != typeof e ? e : document.getElementById(e)
            },
            n = function(e, t) {
                if (!e.className) return !1;
                var n = new RegExp("(^|\\s+)" + t + "(\\s+|$)");
                return n.test(e.className)
            },
            i = function(e, t) {
                n(e, t) || (e.className = e.className ? e.className.replace(/\s+$/, "") + " " + t : t)
            },
            r = function(e, t) {
                if (e.className) {
                    var n = new RegExp("(^|\\s+)" + t + "(\\s+|$)");
                    e.className = e.className.replace(n, function(e, t, n) {
                        return " " === t && " " === n ? " " : ""
                    })
                }
            },
            o = function(e, t) {
                return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null)[t] : void 0
            },
            a = function(t, n) {
                function i(e) {
                    var t, n, i = 0,
                        r = 0;
                    return e && (n = e.getBoundingClientRect(), t = "CSS1Compat" === s.compatMode ? s.documentElement : s.body, i = n.left + t.scrollLeft, r = n.top + t.scrollTop), {
                        x: i,
                        y: r
                    }
                }
                var r = 0,
                    o = 0,
                    a, s = document,
                    u, c;
                if (t = t, n = n || s.body, t && t.getBoundingClientRect && "IE" === e.browser && (!s.documentMode || s.documentMode < 8)) return u = i(t), c = i(n), {
                    x: u.x - c.x,
                    y: u.y - c.y
                };
                for (a = t; a && a != n && a.nodeType;) r += a.offsetLeft || 0, o += a.offsetTop || 0, a = a.offsetParent;
                for (a = t.parentNode; a && a != n && a.nodeType;) r -= a.scrollLeft || 0, o -= a.scrollTop || 0, a = a.parentNode;
                return {
                    x: r,
                    y: o
                }
            },
            s = function(e) {
                return {
                    w: e.offsetWidth || e.clientWidth,
                    h: e.offsetHeight || e.clientHeight
                }
            };
        return {
            get: t,
            hasClass: n,
            addClass: i,
            removeClass: r,
            getStyle: o,
            getPos: a,
            getSize: s
        }
    }), i(p, [u], function(e) {
        function t(e, t) {
            var n;
            for (n in e)
                if (e[n] === t) return n;
            return null
        }
        return {
            RuntimeError: function() {
                function n(e) {
                    this.code = e, this.name = t(i, e), this.message = this.name + ": RuntimeError " + this.code
                }
                var i = {
                    NOT_INIT_ERR: 1,
                    NOT_SUPPORTED_ERR: 9,
                    JS_ERR: 4
                };
                return e.extend(n, i), n.prototype = Error.prototype, n
            }(),
            OperationNotAllowedException: function() {
                function t(e) {
                    this.code = e, this.name = "OperationNotAllowedException"
                }
                return e.extend(t, {
                    NOT_ALLOWED_ERR: 1
                }), t.prototype = Error.prototype, t
            }(),
            ImageError: function() {
                function n(e) {
                    this.code = e, this.name = t(i, e), this.message = this.name + ": ImageError " + this.code
                }
                var i = {
                    WRONG_FORMAT: 1,
                    MAX_RESOLUTION_ERR: 2
                };
                return e.extend(n, i), n.prototype = Error.prototype, n
            }(),
            FileException: function() {
                function n(e) {
                    this.code = e, this.name = t(i, e), this.message = this.name + ": FileException " + this.code
                }
                var i = {
                    NOT_FOUND_ERR: 1,
                    SECURITY_ERR: 2,
                    ABORT_ERR: 3,
                    NOT_READABLE_ERR: 4,
                    ENCODING_ERR: 5,
                    NO_MODIFICATION_ALLOWED_ERR: 6,
                    INVALID_STATE_ERR: 7,
                    SYNTAX_ERR: 8
                };
                return e.extend(n, i), n.prototype = Error.prototype, n
            }(),
            DOMException: function() {
                function n(e) {
                    this.code = e, this.name = t(i, e), this.message = this.name + ": DOMException " + this.code
                }
                var i = {
                    INDEX_SIZE_ERR: 1,
                    DOMSTRING_SIZE_ERR: 2,
                    HIERARCHY_REQUEST_ERR: 3,
                    WRONG_DOCUMENT_ERR: 4,
                    INVALID_CHARACTER_ERR: 5,
                    NO_DATA_ALLOWED_ERR: 6,
                    NO_MODIFICATION_ALLOWED_ERR: 7,
                    NOT_FOUND_ERR: 8,
                    NOT_SUPPORTED_ERR: 9,
                    INUSE_ATTRIBUTE_ERR: 10,
                    INVALID_STATE_ERR: 11,
                    SYNTAX_ERR: 12,
                    INVALID_MODIFICATION_ERR: 13,
                    NAMESPACE_ERR: 14,
                    INVALID_ACCESS_ERR: 15,
                    VALIDATION_ERR: 16,
                    TYPE_MISMATCH_ERR: 17,
                    SECURITY_ERR: 18,
                    NETWORK_ERR: 19,
                    ABORT_ERR: 20,
                    URL_MISMATCH_ERR: 21,
                    QUOTA_EXCEEDED_ERR: 22,
                    TIMEOUT_ERR: 23,
                    INVALID_NODE_TYPE_ERR: 24,
                    DATA_CLONE_ERR: 25
                };
                return e.extend(n, i), n.prototype = Error.prototype, n
            }(),
            EventException: function() {
                function t(e) {
                    this.code = e, this.name = "EventException"
                }
                return e.extend(t, {
                    UNSPECIFIED_EVENT_TYPE_ERR: 0
                }), t.prototype = Error.prototype, t
            }()
        }
    }), i(h, [p, u], function(e, t) {
        function n() {
            var n = {};
            t.extend(this, {
                uid: null,
                init: function() {
                    this.uid || (this.uid = t.guid("uid_"))
                },
                addEventListener: function(e, i, r, o) {
                    var a = this,
                        s;
                    return e = t.trim(e), /\s/.test(e) ? (t.each(e.split(/\s+/), function(e) {
                        a.addEventListener(e, i, r, o)
                    }), void 0) : (e = e.toLowerCase(), r = parseInt(r, 10) || 0, s = n[this.uid] && n[this.uid][e] || [], s.push({
                        fn: i,
                        priority: r,
                        scope: o || this
                    }), n[this.uid] || (n[this.uid] = {}), n[this.uid][e] = s, void 0)
                },
                hasEventListener: function(e) {
                    return e ? !(!n[this.uid] || !n[this.uid][e]) : !!n[this.uid]
                },
                removeEventListener: function(e, i) {
                    e = e.toLowerCase();
                    var r = n[this.uid] && n[this.uid][e],
                        o;
                    if (r) {
                        if (i) {
                            for (o = r.length - 1; o >= 0; o--)
                                if (r[o].fn === i) {
                                    r.splice(o, 1);
                                    break
                                }
                        } else r = [];
                        r.length || (delete n[this.uid][e], t.isEmptyObj(n[this.uid]) && delete n[this.uid])
                    }
                },
                removeAllEventListeners: function() {
                    n[this.uid] && delete n[this.uid]
                },
                dispatchEvent: function(i) {
                    var r, o, a, s, u = {},
                        c = !0,
                        l;
                    if ("string" !== t.typeOf(i)) {
                        if (s = i, "string" !== t.typeOf(s.type)) throw new e.EventException(e.EventException.UNSPECIFIED_EVENT_TYPE_ERR);
                        i = s.type, s.total !== l && s.loaded !== l && (u.total = s.total, u.loaded = s.loaded), u.async = s.async || !1
                    }
                    if (-1 !== i.indexOf("::") ? function(e) {
                            r = e[0], i = e[1]
                        }(i.split("::")) : r = this.uid, i = i.toLowerCase(), o = n[r] && n[r][i]) {
                        o.sort(function(e, t) {
                            return t.priority - e.priority
                        }), a = [].slice.call(arguments), a.shift(), u.type = i, a.unshift(u);
                        var d = [];
                        t.each(o, function(e) {
                            a[0].target = e.scope, u.async ? d.push(function(t) {
                                setTimeout(function() {
                                    t(e.fn.apply(e.scope, a) === !1)
                                }, 1)
                            }) : d.push(function(t) {
                                t(e.fn.apply(e.scope, a) === !1)
                            })
                        }), d.length && t.inSeries(d, function(e) {
                            c = !e
                        })
                    }
                    return c
                },
                bind: function() {
                    this.addEventListener.apply(this, arguments)
                },
                unbind: function() {
                    this.removeEventListener.apply(this, arguments)
                },
                unbindAll: function() {
                    this.removeAllEventListeners.apply(this, arguments)
                },
                trigger: function() {
                    return this.dispatchEvent.apply(this, arguments)
                },
                convertEventPropsToHandlers: function(e) {
                    var n;
                    "array" !== t.typeOf(e) && (e = [e]);
                    for (var i = 0; i < e.length; i++) n = "on" + e[i], "function" === t.typeOf(this[n]) ? this.addEventListener(e[i], this[n]) : "undefined" === t.typeOf(this[n]) && (this[n] = null)
                }
            })
        }
        return n.instance = new n, n
    }), i(m, [], function() {
        var e = function(e) {
                return unescape(encodeURIComponent(e))
            },
            t = function(e) {
                return decodeURIComponent(escape(e))
            },
            n = function(e, n) {
                if ("function" == typeof window.atob) return n ? t(window.atob(e)) : window.atob(e);
                var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    r, o, a, s, u, c, l, d, f = 0,
                    p = 0,
                    h = "",
                    m = [];
                if (!e) return e;
                e += "";
                do s = i.indexOf(e.charAt(f++)), u = i.indexOf(e.charAt(f++)), c = i.indexOf(e.charAt(f++)), l = i.indexOf(e.charAt(f++)), d = s << 18 | u << 12 | c << 6 | l, r = 255 & d >> 16, o = 255 & d >> 8, a = 255 & d, m[p++] = 64 == c ? String.fromCharCode(r) : 64 == l ? String.fromCharCode(r, o) : String.fromCharCode(r, o, a); while (f < e.length);
                return h = m.join(""), n ? t(h) : h
            },
            i = function(t, n) {
                if (n && e(t), "function" == typeof window.btoa) return window.btoa(t);
                var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    r, o, a, s, u, c, l, d, f = 0,
                    p = 0,
                    h = "",
                    m = [];
                if (!t) return t;
                do r = t.charCodeAt(f++), o = t.charCodeAt(f++), a = t.charCodeAt(f++), d = r << 16 | o << 8 | a, s = 63 & d >> 18, u = 63 & d >> 12, c = 63 & d >> 6, l = 63 & d, m[p++] = i.charAt(s) + i.charAt(u) + i.charAt(c) + i.charAt(l); while (f < t.length);
                h = m.join("");
                var g = t.length % 3;
                return (g ? h.slice(0, g - 3) : h) + "===".slice(g || 3)
            };
        return {
            utf8_encode: e,
            utf8_decode: t,
            atob: n,
            btoa: i
        }
    }), i(g, [u, f, h], function(e, t, n) {
        function i(n, r, a, s, u) {
            var c = this,
                l, d = e.guid(r + "_"),
                f = u || "browser";
            n = n || {}, o[d] = this, a = e.extend({
                access_binary: !1,
                access_image_binary: !1,
                display_media: !1,
                do_cors: !1,
                drag_and_drop: !1,
                filter_by_extension: !0,
                resize_image: !1,
                report_upload_progress: !1,
                return_response_headers: !1,
                return_response_type: !1,
                return_status_code: !0,
                send_custom_headers: !1,
                select_file: !1,
                select_folder: !1,
                select_multiple: !0,
                send_binary_string: !1,
                send_browser_cookies: !0,
                send_multipart: !0,
                slice_blob: !1,
                stream_upload: !1,
                summon_file_dialog: !1,
                upload_filesize: !0,
                use_http_method: !0
            }, a), n.preferred_caps && (f = i.getMode(s, n.preferred_caps, f)), l = function() {
                var t = {};
                return {
                    exec: function(e, n, i, r) {
                        return l[n] && (t[e] || (t[e] = {
                            context: this,
                            instance: new l[n]
                        }), t[e].instance[i]) ? t[e].instance[i].apply(this, r) : void 0
                    },
                    removeInstance: function(e) {
                        delete t[e]
                    },
                    removeAllInstances: function() {
                        var n = this;
                        e.each(t, function(t, i) {
                            "function" === e.typeOf(t.instance.destroy) && t.instance.destroy.call(t.context), n.removeInstance(i)
                        })
                    }
                }
            }(), e.extend(this, {
                initialized: !1,
                uid: d,
                type: r,
                mode: i.getMode(s, n.required_caps, f),
                shimid: d + "_container",
                clients: 0,
                options: n,
                can: function(t, n) {
                    var r = arguments[2] || a;
                    if ("string" === e.typeOf(t) && "undefined" === e.typeOf(n) && (t = i.parseCaps(t)), "object" === e.typeOf(t)) {
                        for (var o in t)
                            if (!this.can(o, t[o], r)) return !1;
                        return !0
                    }
                    return "function" === e.typeOf(r[t]) ? r[t].call(this, n) : n === r[t]
                },
                getShimContainer: function() {
                    var n, i = t.get(this.shimid);
                    return i || (n = this.options.container ? t.get(this.options.container) : document.body, i = document.createElement("div"), i.id = this.shimid, i.className = "moxie-shim moxie-shim-" + this.type, e.extend(i.style, {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden"
                    }), n.appendChild(i), n = null), i
                },
                getShim: function() {
                    return l
                },
                shimExec: function(e, t) {
                    var n = [].slice.call(arguments, 2);
                    return c.getShim().exec.call(this, this.uid, e, t, n)
                },
                exec: function(e, t) {
                    var n = [].slice.call(arguments, 2);
                    return c[e] && c[e][t] ? c[e][t].apply(this, n) : c.shimExec.apply(this, arguments)
                },
                destroy: function() {
                    if (c) {
                        var e = t.get(this.shimid);
                        e && e.parentNode.removeChild(e), l && l.removeAllInstances(), this.unbindAll(), delete o[this.uid], this.uid = null, d = c = l = e = null
                    }
                }
            }), this.mode && n.required_caps && !this.can(n.required_caps) && (this.mode = !1)
        }
        var r = {},
            o = {};
        return i.order = "html5,flash,silverlight,html4", i.getRuntime = function(e) {
            return o[e] ? o[e] : !1
        }, i.addConstructor = function(e, t) {
            t.prototype = n.instance, r[e] = t
        }, i.getConstructor = function(e) {
            return r[e] || null
        }, i.getInfo = function(e) {
            var t = i.getRuntime(e);
            return t ? {
                uid: t.uid,
                type: t.type,
                mode: t.mode,
                can: function() {
                    return t.can.apply(t, arguments)
                }
            } : null
        }, i.parseCaps = function(t) {
            var n = {};
            return "string" !== e.typeOf(t) ? t || {} : (e.each(t.split(","), function(e) {
                n[e] = !0
            }), n)
        }, i.can = function(e, t) {
            var n, r = i.getConstructor(e),
                o;
            return r ? (n = new r({
                required_caps: t
            }), o = n.mode, n.destroy(), !!o) : !1
        }, i.thatCan = function(e, t) {
            var n = (t || i.order).split(/\s*,\s*/);
            for (var r in n)
                if (i.can(n[r], e)) return n[r];
            return null
        }, i.getMode = function(t, n, i) {
            var r = null;
            if ("undefined" === e.typeOf(i) && (i = "browser"), n && !e.isEmptyObj(t)) {
                if (e.each(n, function(n, i) {
                        if (t.hasOwnProperty(i)) {
                            var o = t[i](n);
                            if ("string" == typeof o && (o = [o]), r) {
                                if (!(r = e.arrayIntersect(r, o))) return r = !1
                            } else r = o
                        }
                    }), r) return -1 !== e.inArray(i, r) ? i : r[0];
                if (r === !1) return !1
            }
            return i
        }, i.capTrue = function() {
            return !0
        }, i.capFalse = function() {
            return !1
        }, i.capTest = function(e) {
            return function() {
                return !!e
            }
        }, i
    }), i(v, [p, u, g], function(e, t, n) {
        return function i() {
            var i;
            t.extend(this, {
                connectRuntime: function(r) {
                    function o(t) {
                        var s, u;
                        return t.length ? (s = t.shift(), (u = n.getConstructor(s)) ? (i = new u(r), i.bind("Init", function() {
                            i.initialized = !0, setTimeout(function() {
                                i.clients++, a.trigger("RuntimeInit", i)
                            }, 1)
                        }), i.bind("Error", function() {
                            i.destroy(), o(t)
                        }), i.mode ? (i.init(), void 0) : (i.trigger("Error"), void 0)) : (o(t), void 0)) : (a.trigger("RuntimeError", new e.RuntimeError(e.RuntimeError.NOT_INIT_ERR)), i = null, void 0)
                    }
                    var a = this,
                        s;
                    if ("string" === t.typeOf(r) ? s = r : "string" === t.typeOf(r.ruid) && (s = r.ruid), s) {
                        if (i = n.getRuntime(s)) return i.clients++, i;
                        throw new e.RuntimeError(e.RuntimeError.NOT_INIT_ERR)
                    }
                    o((r.runtime_order || n.order).split(/\s*,\s*/))
                },
                getRuntime: function() {
                    return i && i.uid ? i : (i = null, null)
                },
                disconnectRuntime: function() {
                    i && --i.clients <= 0 && (i.destroy(), i = null)
                }
            })
        }
    }), i(y, [u, m, v], function(e, t, n) {
        function i(o, a) {
            function s(t, n, o) {
                var a, s = r[this.uid];
                return "string" === e.typeOf(s) && s.length ? (a = new i(null, {
                    type: o,
                    size: n - t
                }), a.detach(s.substr(t, a.size)), a) : null
            }
            n.call(this), o && this.connectRuntime(o), a ? "string" === e.typeOf(a) && (a = {
                data: a
            }) : a = {}, e.extend(this, {
                uid: a.uid || e.guid("uid_"),
                ruid: o,
                size: a.size || 0,
                type: a.type || "",
                slice: function(e, t, n) {
                    return this.isDetached() ? s.apply(this, arguments) : this.getRuntime().exec.call(this, "Blob", "slice", this.getSource(), e, t, n)
                },
                getSource: function() {
                    return r[this.uid] ? r[this.uid] : null
                },
                detach: function(e) {
                    this.ruid && (this.getRuntime().exec.call(this, "Blob", "destroy", r[this.uid]), this.disconnectRuntime(), this.ruid = null), e = e || "";
                    var n = e.match(/^data:([^;]*);base64,/);
                    n && (this.type = n[1], e = t.atob(e.substring(e.indexOf("base64,") + 7))), this.size = e.length, r[this.uid] = e
                },
                isDetached: function() {
                    return !this.ruid && "string" === e.typeOf(r[this.uid])
                },
                destroy: function() {
                    this.detach(), delete r[this.uid]
                }
            }), a.data ? this.detach(a.data) : r[this.uid] = a
        }
        var r = {};
        return i
    }), i(w, [u, l, y], function(e, t, n) {
        function i(i, r) {
            var o, a;
            if (r || (r = {}), a = r.type && "" !== r.type ? r.type : t.getFileMime(r.name), r.name) o = r.name.replace(/\\/g, "/"), o = o.substr(o.lastIndexOf("/") + 1);
            else {
                var s = a.split("/")[0];
                o = e.guid(("" !== s ? s : "file") + "_"), t.extensions[a] && (o += "." + t.extensions[a][0])
            }
            n.apply(this, arguments), e.extend(this, {
                type: a || "",
                name: o || e.guid("file_"),
                lastModifiedDate: r.lastModifiedDate || (new Date).toLocaleString()
            })
        }
        return i.prototype = n.prototype, i
    }), i(E, [u, l, f, p, h, c, w, g, v], function(e, t, n, i, r, o, a, s, u) {
        function c(r) {
            var c = this,
                d, f, p;
            if (-1 !== e.inArray(e.typeOf(r), ["string", "node"]) && (r = {
                    browse_button: r
                }), f = n.get(r.browse_button), !f) throw new i.DOMException(i.DOMException.NOT_FOUND_ERR);
            p = {
                accept: [{
                    title: o.translate("All Files"),
                    extensions: "*"
                }],
                name: "file",
                multiple: !1,
                required_caps: !1,
                container: f.parentNode || document.body
            }, r = e.extend({}, p, r), "string" == typeof r.required_caps && (r.required_caps = s.parseCaps(r.required_caps)), "string" == typeof r.accept && (r.accept = t.mimes2extList(r.accept)), d = n.get(r.container), d || (d = document.body), "static" === n.getStyle(d, "position") && (d.style.position = "relative"), d = f = null, u.call(c), e.extend(c, {
                uid: e.guid("uid_"),
                ruid: null,
                shimid: null,
                files: null,
                init: function() {
                    c.convertEventPropsToHandlers(l), c.bind("RuntimeInit", function(t, i) {
                        c.ruid = i.uid, c.shimid = i.shimid, c.bind("Ready", function() {
                            c.trigger("Refresh")
                        }, 999), c.bind("Change", function() {
                            var t = i.exec.call(c, "FileInput", "getFiles");
                            c.files = [], e.each(t, function(e) {
                                return 0 === e.size ? !0 : (c.files.push(new a(c.ruid, e)), void 0)
                            })
                        }, 999), c.bind("Refresh", function() {
                            var t, o, a, s;
                            a = n.get(r.browse_button), s = n.get(i.shimid), a && (t = n.getPos(a, n.get(r.container)), o = n.getSize(a), s && e.extend(s.style, {
                                top: t.y + "px",
                                left: t.x + "px",
                                width: o.w + "px",
                                height: o.h + "px"
                            })), s = a = null
                        }), i.exec.call(c, "FileInput", "init", r)
                    }), c.connectRuntime(e.extend({}, r, {
                        required_caps: {
                            select_file: !0
                        }
                    }))
                },
                disable: function(t) {
                    var n = this.getRuntime();
                    n && n.exec.call(this, "FileInput", "disable", "undefined" === e.typeOf(t) ? !0 : t)
                },
                refresh: function() {
                    c.trigger("Refresh")
                },
                destroy: function() {
                    var t = this.getRuntime();
                    t && (t.exec.call(this, "FileInput", "destroy"), this.disconnectRuntime()), "array" === e.typeOf(this.files) && e.each(this.files, function(e) {
                        e.destroy()
                    }), this.files = null
                }
            })
        }
        var l = ["ready", "change", "cancel", "mouseenter", "mouseleave", "mousedown", "mouseup"];
        return c.prototype = r.instance, c
    }), i(_, [c, f, p, u, w, v, h, l], function(e, t, n, i, r, o, a, s) {
        function u(n) {
            var a = this,
                u;
            "string" == typeof n && (n = {
                drop_zone: n
            }), u = {
                accept: [{
                    title: e.translate("All Files"),
                    extensions: "*"
                }],
                required_caps: {
                    drag_and_drop: !0
                }
            }, n = "object" == typeof n ? i.extend({}, u, n) : u, n.container = t.get(n.drop_zone) || document.body, "static" === t.getStyle(n.container, "position") && (n.container.style.position = "relative"), "string" == typeof n.accept && (n.accept = s.mimes2extList(n.accept)), o.call(a), i.extend(a, {
                uid: i.guid("uid_"),
                ruid: null,
                files: null,
                init: function() {
                    a.convertEventPropsToHandlers(c), a.bind("RuntimeInit", function(e, t) {
                        a.ruid = t.uid, a.bind("Drop", function() {
                            var e = t.exec.call(a, "FileDrop", "getFiles");
                            a.files = [], i.each(e, function(e) {
                                a.files.push(new r(a.ruid, e))
                            })
                        }, 999), t.exec.call(a, "FileDrop", "init", n), a.dispatchEvent("ready")
                    }), a.connectRuntime(n)
                },
                destroy: function() {
                    var e = this.getRuntime();
                    e && (e.exec.call(this, "FileDrop", "destroy"), this.disconnectRuntime()), this.files = null
                }
            })
        }
        var c = ["ready", "dragenter", "dragleave", "drop", "error"];
        return u.prototype = a.instance, u
    }), i(x, [u, v, h], function(e, t, n) {
        function i() {
            this.uid = e.guid("uid_"), t.call(this), this.destroy = function() {
                this.disconnectRuntime(), this.unbindAll()
            }
        }
        return i.prototype = n.instance, i
    }), i(R, [u, m, p, h, y, w, x], function(e, t, n, i, r, o, a) {
        function s() {
            function i(e, i) {
                function l(e) {
                    o.readyState = s.DONE, o.error = e, o.trigger("error"), d()
                }

                function d() {
                    c.destroy(), c = null, o.trigger("loadend")
                }

                function f(t) {
                    c.bind("Error", function(e, t) {
                        l(t)
                    }), c.bind("Progress", function(e) {
                        o.result = t.exec.call(c, "FileReader", "getResult"), o.trigger(e)
                    }), c.bind("Load", function(e) {
                        o.readyState = s.DONE, o.result = t.exec.call(c, "FileReader", "getResult"), o.trigger(e), d()
                    }), t.exec.call(c, "FileReader", "read", e, i)
                }
                if (c = new a, this.convertEventPropsToHandlers(u), this.readyState === s.LOADING) return l(new n.DOMException(n.DOMException.INVALID_STATE_ERR));
                if (this.readyState = s.LOADING, this.trigger("loadstart"), i instanceof r)
                    if (i.isDetached()) {
                        var p = i.getSource();
                        switch (e) {
                            case "readAsText":
                            case "readAsBinaryString":
                                this.result = p;
                                break;
                            case "readAsDataURL":
                                this.result = "data:" + i.type + ";base64," + t.btoa(p)
                        }
                        this.readyState = s.DONE, this.trigger("load"), d()
                    } else f(c.connectRuntime(i.ruid));
                else l(new n.DOMException(n.DOMException.NOT_FOUND_ERR))
            }
            var o = this,
                c;
            e.extend(this, {
                uid: e.guid("uid_"),
                readyState: s.EMPTY,
                result: null,
                error: null,
                readAsBinaryString: function(e) {
                    i.call(this, "readAsBinaryString", e)
                },
                readAsDataURL: function(e) {
                    i.call(this, "readAsDataURL", e)
                },
                readAsText: function(e) {
                    i.call(this, "readAsText", e)
                },
                abort: function() {
                    this.result = null, -1 === e.inArray(this.readyState, [s.EMPTY, s.DONE]) && (this.readyState === s.LOADING && (this.readyState = s.DONE), c && c.getRuntime().exec.call(this, "FileReader", "abort"), this.trigger("abort"), this.trigger("loadend"))
                },
                destroy: function() {
                    this.abort(), c && (c.getRuntime().exec.call(this, "FileReader", "destroy"), c.disconnectRuntime()), o = c = null
                }
            })
        }
        var u = ["loadstart", "progress", "load", "abort", "error", "loadend"];
        return s.EMPTY = 0, s.LOADING = 1, s.DONE = 2, s.prototype = i.instance, s
    }), i(b, [], function() {
        var e = function(t, n) {
                for (var i = ["source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment"], r = i.length, o = {
                        http: 80,
                        https: 443
                    }, a = {}, s = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/, u = s.exec(t || ""); r--;) u[r] && (a[i[r]] = u[r]);
                if (!a.scheme) {
                    n && "string" != typeof n || (n = e(n || document.location.href)), a.scheme = n.scheme, a.host = n.host, a.port = n.port;
                    var c = "";
                    /^[^\/]/.test(a.path) && (c = n.path, /(\/|\/[^\.]+)$/.test(c) ? c += "/" : c = c.replace(/\/[^\/]+$/, "/")), a.path = c + (a.path || "")
                }
                return a.port || (a.port = o[a.scheme] || 80), a.port = parseInt(a.port, 10), a.path || (a.path = "/"), delete a.source, a
            },
            t = function(t) {
                var n = {
                        http: 80,
                        https: 443
                    },
                    i = e(t);
                return i.scheme + "://" + i.host + (i.port !== n[i.scheme] ? ":" + i.port : "") + i.path + (i.query ? i.query : "")
            },
            n = function(t) {
                function n(e) {
                    return [e.scheme, e.host, e.port].join("/")
                }
                return "string" == typeof t && (t = e(t)), n(e()) === n(t)
            };
        return {
            parseUrl: e,
            resolveUrl: t,
            hasSameOrigin: n
        }
    }), i(T, [u, v, m], function(e, t, n) {
        return function() {
            function i(e, t) {
                if (!t.isDetached()) {
                    var i = this.connectRuntime(t.ruid).exec.call(this, "FileReaderSync", "read", e, t);
                    return this.disconnectRuntime(), i
                }
                var r = t.getSource();
                switch (e) {
                    case "readAsBinaryString":
                        return r;
                    case "readAsDataURL":
                        return "data:" + t.type + ";base64," + n.btoa(r);
                    case "readAsText":
                        for (var o = "", a = 0, s = r.length; s > a; a++) o += String.fromCharCode(r[a]);
                        return o
                }
            }
            t.call(this), e.extend(this, {
                uid: e.guid("uid_"),
                readAsBinaryString: function(e) {
                    return i.call(this, "readAsBinaryString", e)
                },
                readAsDataURL: function(e) {
                    return i.call(this, "readAsDataURL", e)
                },
                readAsText: function(e) {
                    return i.call(this, "readAsText", e)
                }
            })
        }
    }), i(S, [p, u, y], function(e, t, n) {
        function i() {
            var e, i = [];
            t.extend(this, {
                append: function(r, o) {
                    var a = this,
                        s = t.typeOf(o);
                    o instanceof n ? e = {
                        name: r,
                        value: o
                    } : "array" === s ? (r += "[]", t.each(o, function(e) {
                        a.append(r, e)
                    })) : "object" === s ? t.each(o, function(e, t) {
                        a.append(r + "[" + t + "]", e)
                    }) : "null" === s || "undefined" === s || "number" === s && isNaN(o) ? a.append(r, "false") : i.push({
                        name: r,
                        value: o.toString()
                    })
                },
                hasBlob: function() {
                    return !!this.getBlob()
                },
                getBlob: function() {
                    return e && e.value || null
                },
                getBlobName: function() {
                    return e && e.name || null
                },
                each: function(n) {
                    t.each(i, function(e) {
                        n(e.value, e.name)
                    }), e && n(e.value, e.name)
                },
                destroy: function() {
                    e = null, i = []
                }
            })
        }
        return i
    }), i(A, [u, p, h, m, b, g, x, y, T, S, d, l], function(e, t, n, i, r, o, a, s, u, c, l, d) {
        function f() {
            this.uid = e.guid("uid_")
        }

        function p() {
            function n(e, t) {
                return y.hasOwnProperty(e) ? 1 === arguments.length ? l.can("define_property") ? y[e] : v[e] : (l.can("define_property") ? y[e] = t : v[e] = t, void 0) : void 0
            }

            function u(t) {
                function i() {
                    k.destroy(), k = null, s.dispatchEvent("loadend"), s = null
                }

                function r(r) {
                    k.bind("LoadStart", function(e) {
                        n("readyState", p.LOADING), s.dispatchEvent("readystatechange"), s.dispatchEvent(e), I && s.upload.dispatchEvent(e)
                    }), k.bind("Progress", function(e) {
                        n("readyState") !== p.LOADING && (n("readyState", p.LOADING), s.dispatchEvent("readystatechange")), s.dispatchEvent(e)
                    }), k.bind("UploadProgress", function(e) {
                        I && s.upload.dispatchEvent({
                            type: "progress",
                            lengthComputable: !1,
                            total: e.total,
                            loaded: e.loaded
                        })
                    }), k.bind("Load", function(t) {
                        n("readyState", p.DONE), n("status", Number(r.exec.call(k, "XMLHttpRequest", "getStatus") || 0)), n("statusText", h[n("status")] || ""), n("response", r.exec.call(k, "XMLHttpRequest", "getResponse", n("responseType"))), ~e.inArray(n("responseType"), ["text", ""]) ? n("responseText", n("response")) : "document" === n("responseType") && n("responseXML", n("response")), U = r.exec.call(k, "XMLHttpRequest", "getAllResponseHeaders"), s.dispatchEvent("readystatechange"), n("status") > 0 ? (I && s.upload.dispatchEvent(t), s.dispatchEvent(t)) : (N = !0, s.dispatchEvent("error")), i()
                    }), k.bind("Abort", function(e) {
                        s.dispatchEvent(e), i()
                    }), k.bind("Error", function(e) {
                        N = !0, n("readyState", p.DONE), s.dispatchEvent("readystatechange"), D = !0, s.dispatchEvent(e), i()
                    }), r.exec.call(k, "XMLHttpRequest", "send", {
                        url: E,
                        method: _,
                        async: w,
                        user: R,
                        password: b,
                        headers: x,
                        mimeType: S,
                        encoding: T,
                        responseType: s.responseType,
                        withCredentials: s.withCredentials,
                        options: P
                    }, t)
                }
                var s = this;
                M = (new Date).getTime(), k = new a, "string" == typeof P.required_caps && (P.required_caps = o.parseCaps(P.required_caps)), P.required_caps = e.extend({}, P.required_caps, {
                    return_response_type: s.responseType
                }), t instanceof c && (P.required_caps.send_multipart = !0), L || (P.required_caps.do_cors = !0), P.ruid ? r(k.connectRuntime(P)) : (k.bind("RuntimeInit", function(e, t) {
                    r(t)
                }), k.bind("RuntimeError", function(e, t) {
                    s.dispatchEvent("RuntimeError", t)
                }), k.connectRuntime(P))
            }

            function g() {
                n("responseText", ""), n("responseXML", null), n("response", null), n("status", 0), n("statusText", ""), M = C = null
            }
            var v = this,
                y = {
                    timeout: 0,
                    readyState: p.UNSENT,
                    withCredentials: !1,
                    status: 0,
                    statusText: "",
                    responseType: "",
                    responseXML: null,
                    responseText: null,
                    response: null
                },
                w = !0,
                E, _, x = {},
                R, b, T = null,
                S = null,
                A = !1,
                O = !1,
                I = !1,
                D = !1,
                N = !1,
                L = !1,
                M, C, F = null,
                H = null,
                P = {},
                k, U = "",
                B;
            e.extend(this, y, {
                uid: e.guid("uid_"),
                upload: new f,
                open: function(o, a, s, u, c) {
                    var l;
                    if (!o || !a) throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                    if (/[\u0100-\uffff]/.test(o) || i.utf8_encode(o) !== o) throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                    if (~e.inArray(o.toUpperCase(), ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT", "TRACE", "TRACK"]) && (_ = o.toUpperCase()), ~e.inArray(_, ["CONNECT", "TRACE", "TRACK"])) throw new t.DOMException(t.DOMException.SECURITY_ERR);
                    if (a = i.utf8_encode(a), l = r.parseUrl(a), L = r.hasSameOrigin(l), E = r.resolveUrl(a), (u || c) && !L) throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);
                    if (R = u || l.user, b = c || l.pass, w = s || !0, w === !1 && (n("timeout") || n("withCredentials") || "" !== n("responseType"))) throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);
                    A = !w, O = !1, x = {}, g.call(this), n("readyState", p.OPENED), this.convertEventPropsToHandlers(["readystatechange"]), this.dispatchEvent("readystatechange")
                },
                setRequestHeader: function(r, o) {
                    var a = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
                    if (n("readyState") !== p.OPENED || O) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                    if (/[\u0100-\uffff]/.test(r) || i.utf8_encode(r) !== r) throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                    return r = e.trim(r).toLowerCase(), ~e.inArray(r, a) || /^(proxy\-|sec\-)/.test(r) ? !1 : (x[r] ? x[r] += ", " + o : x[r] = o, !0)
                },
                getAllResponseHeaders: function() {
                    return U || ""
                },
                getResponseHeader: function(t) {
                    return t = t.toLowerCase(), N || ~e.inArray(t, ["set-cookie", "set-cookie2"]) ? null : U && "" !== U && (B || (B = {}, e.each(U.split(/\r\n/), function(t) {
                        var n = t.split(/:\s+/);
                        2 === n.length && (n[0] = e.trim(n[0]), B[n[0].toLowerCase()] = {
                            header: n[0],
                            value: e.trim(n[1])
                        })
                    })), B.hasOwnProperty(t)) ? B[t].header + ": " + B[t].value : null
                },
                overrideMimeType: function(i) {
                    var r, o;
                    if (~e.inArray(n("readyState"), [p.LOADING, p.DONE])) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                    if (i = e.trim(i.toLowerCase()), /;/.test(i) && (r = i.match(/^([^;]+)(?:;\scharset\=)?(.*)$/)) && (i = r[1], r[2] && (o = r[2])), !d.mimes[i]) throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                    F = i, H = o
                },
                send: function(n, r) {
                    if (P = "string" === e.typeOf(r) ? {
                            ruid: r
                        } : r ? r : {}, this.convertEventPropsToHandlers(m), this.upload.convertEventPropsToHandlers(m), this.readyState !== p.OPENED || O) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                    if (n instanceof s) P.ruid = n.ruid, S = n.type || "application/octet-stream";
                    else if (n instanceof c) {
                        if (n.hasBlob()) {
                            var o = n.getBlob();
                            P.ruid = o.ruid, S = o.type || "application/octet-stream"
                        }
                    } else "string" == typeof n && (T = "UTF-8", S = "text/plain;charset=UTF-8", n = i.utf8_encode(n));
                    this.withCredentials || (this.withCredentials = P.required_caps && P.required_caps.send_browser_cookies && !L), I = !A && this.upload.hasEventListener(), N = !1, D = !n, A || (O = !0), u.call(this, n)
                },
                abort: function() {
                    if (N = !0, A = !1, ~e.inArray(n("readyState"), [p.UNSENT, p.OPENED, p.DONE])) n("readyState", p.UNSENT);
                    else {
                        if (n("readyState", p.DONE), O = !1, !k) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                        k.getRuntime().exec.call(k, "XMLHttpRequest", "abort", D), D = !0
                    }
                },
                destroy: function() {
                    k && ("function" === e.typeOf(k.destroy) && k.destroy(), k = null), this.unbindAll(), this.upload && (this.upload.unbindAll(), this.upload = null)
                }
            })
        }
        var h = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            306: "Reserved",
            307: "Temporary Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Request Entity Too Large",
            414: "Request-URI Too Long",
            415: "Unsupported Media Type",
            416: "Requested Range Not Satisfiable",
            417: "Expectation Failed",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            426: "Upgrade Required",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            510: "Not Extended"
        };
        f.prototype = n.instance;
        var m = ["loadstart", "progress", "abort", "error", "load", "timeout", "loadend"],
            g = 1,
            v = 2;
        return p.UNSENT = 0, p.OPENED = 1, p.HEADERS_RECEIVED = 2, p.LOADING = 3, p.DONE = 4, p.prototype = n.instance, p
    }), i(O, [u, m, v, h], function(e, t, n, i) {
        function r() {
            function i() {
                l = d = 0, c = this.result = null
            }

            function o(t, n) {
                var i = this;
                u = n, i.bind("TransportingProgress", function(t) {
                    d = t.loaded, l > d && -1 === e.inArray(i.state, [r.IDLE, r.DONE]) && a.call(i)
                }, 999), i.bind("TransportingComplete", function() {
                    d = l, i.state = r.DONE, c = null, i.result = u.exec.call(i, "Transporter", "getAsBlob", t || "")
                }, 999), i.state = r.BUSY, i.trigger("TransportingStarted"), a.call(i)
            }

            function a() {
                var e = this,
                    n, i = l - d;
                f > i && (f = i), n = t.btoa(c.substr(d, f)), u.exec.call(e, "Transporter", "receive", n, l)
            }
            var s, u, c, l, d, f;
            n.call(this), e.extend(this, {
                uid: e.guid("uid_"),
                state: r.IDLE,
                result: null,
                transport: function(t, n, r) {
                    var a = this;
                    if (r = e.extend({
                            chunk_size: 204798
                        }, r), (s = r.chunk_size % 3) && (r.chunk_size += 3 - s), f = r.chunk_size, i.call(this), c = t, l = t.length, "string" === e.typeOf(r) || r.ruid) o.call(a, n, this.connectRuntime(r));
                    else {
                        var u = function(e, t) {
                            a.unbind("RuntimeInit", u), o.call(a, n, t)
                        };
                        this.bind("RuntimeInit", u), this.connectRuntime(r)
                    }
                },
                abort: function() {
                    var e = this;
                    e.state = r.IDLE, u && (u.exec.call(e, "Transporter", "clear"), e.trigger("TransportingAborted")), i.call(e)
                },
                destroy: function() {
                    this.unbindAll(), u = null, this.disconnectRuntime(), i.call(this)
                }
            })
        }
        return r.IDLE = 0, r.BUSY = 1, r.DONE = 2, r.prototype = i.instance, r
    }), i(I, [u, f, p, T, A, g, v, O, d, h, y, w, m], function(e, t, n, i, r, o, a, s, u, c, l, d, f) {
        function p() {
            function i(e) {
                e || (e = this.getRuntime().exec.call(this, "Image", "getInfo")), this.size = e.size, this.width = e.width, this.height = e.height, this.type = e.type, this.meta = e.meta, "" === this.name && (this.name = e.name)
            }

            function c(t) {
                var i = e.typeOf(t);
                try {
                    if (t instanceof p) {
                        if (!t.size) throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                        m.apply(this, arguments)
                    } else if (t instanceof l) {
                        if (!~e.inArray(t.type, ["image/jpeg", "image/png"])) throw new n.ImageError(n.ImageError.WRONG_FORMAT);
                        g.apply(this, arguments)
                    } else if (-1 !== e.inArray(i, ["blob", "file"])) c.call(this, new d(null, t), arguments[1]);
                    else if ("string" === i) /^data:[^;]*;base64,/.test(t) ? c.call(this, new l(null, {
                        data: t
                    }), arguments[1]) : v.apply(this, arguments);
                    else {
                        if ("node" !== i || "img" !== t.nodeName.toLowerCase()) throw new n.DOMException(n.DOMException.TYPE_MISMATCH_ERR);
                        c.call(this, t.src, arguments[1])
                    }
                } catch (r) {
                    this.trigger("error", r)
                }
            }

            function m(t, n) {
                var i = this.connectRuntime(t.ruid);
                this.ruid = i.uid, i.exec.call(this, "Image", "loadFromImage", t, "undefined" === e.typeOf(n) ? !0 : n)
            }

            function g(t, n) {
                function i(e) {
                    r.ruid = e.uid, e.exec.call(r, "Image", "loadFromBlob", t)
                }
                var r = this;
                r.name = t.name || "", t.isDetached() ? (this.bind("RuntimeInit", function(e, t) {
                    i(t)
                }), n && "string" == typeof n.required_caps && (n.required_caps = o.parseCaps(n.required_caps)), this.connectRuntime(e.extend({
                    required_caps: {
                        access_image_binary: !0,
                        resize_image: !0
                    }
                }, n))) : i(this.connectRuntime(t.ruid))
            }

            function v(e, t) {
                var n = this,
                    i;
                i = new r, i.open("get", e), i.responseType = "blob", i.onprogress = function(e) {
                    n.trigger(e)
                }, i.onload = function() {
                    g.call(n, i.response, !0)
                }, i.onerror = function(e) {
                    n.trigger(e)
                }, i.onloadend = function() {
                    i.destroy()
                }, i.bind("RuntimeError", function(e, t) {
                    n.trigger("RuntimeError", t)
                }), i.send(null, t)
            }
            a.call(this), e.extend(this, {
                uid: e.guid("uid_"),
                ruid: null,
                name: "",
                size: 0,
                width: 0,
                height: 0,
                type: "",
                meta: {},
                clone: function() {
                    this.load.apply(this, arguments)
                },
                load: function() {
                    this.bind("Load Resize", function() {
                        i.call(this)
                    }, 999), this.convertEventPropsToHandlers(h), c.apply(this, arguments)
                },
                downsize: function(t, i, r, o) {
                    try {
                        if (!this.size) throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                        if (this.width > p.MAX_RESIZE_WIDTH || this.height > p.MAX_RESIZE_HEIGHT) throw new n.ImageError(n.ImageError.MAX_RESOLUTION_ERR);
                        (!t && !i || "undefined" === e.typeOf(r)) && (r = !1), t = t || this.width, i = i || this.height, o = "undefined" === e.typeOf(o) ? !0 : !!o, this.getRuntime().exec.call(this, "Image", "downsize", t, i, r, o)
                    } catch (a) {
                        this.trigger("error", a)
                    }
                },
                crop: function(e, t, n) {
                    this.downsize(e, t, !0, n)
                },
                getAsCanvas: function() {
                    if (!u.can("create_canvas")) throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);
                    var e = this.connectRuntime(this.ruid);
                    return e.exec.call(this, "Image", "getAsCanvas")
                },
                getAsBlob: function(e, t) {
                    if (!this.size) throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                    return e || (e = "image/jpeg"), "image/jpeg" !== e || t || (t = 90), this.getRuntime().exec.call(this, "Image", "getAsBlob", e, t)
                },
                getAsDataURL: function(e, t) {
                    if (!this.size) throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                    return this.getRuntime().exec.call(this, "Image", "getAsDataURL", e, t)
                },
                getAsBinaryString: function(e, t) {
                    var n = this.getAsDataURL(e, t);
                    return f.atob(n.substring(n.indexOf("base64,") + 7))
                },
                embed: function(i) {
                    function r() {
                        if (u.can("create_canvas")) {
                            var t = a.getAsCanvas();
                            if (t) return i.appendChild(t), t = null, a.destroy(), o.trigger("embedded"), void 0
                        }
                        var r = a.getAsDataURL(c, l);
                        if (!r) throw new n.ImageError(n.ImageError.WRONG_FORMAT);
                        if (u.can("use_data_uri_of", r.length)) i.innerHTML = '<img src="' + r + '" width="' + a.width + '" height="' + a.height + '" />', a.destroy(), o.trigger("embedded");
                        else {
                            var d = new s;
                            d.bind("TransportingComplete", function() {
                                v = o.connectRuntime(this.result.ruid), o.bind("Embedded", function() {
                                    e.extend(v.getShimContainer().style, {
                                        top: "0px",
                                        left: "0px",
                                        width: a.width + "px",
                                        height: a.height + "px"
                                    }), v = null
                                }, 999), v.exec.call(o, "ImageView", "display", this.result.uid, m, g), a.destroy()
                            }), d.transport(f.atob(r.substring(r.indexOf("base64,") + 7)), c, e.extend({}, h, {
                                required_caps: {
                                    display_media: !0
                                },
                                runtime_order: "flash,silverlight",
                                container: i
                            }))
                        }
                    }
                    var o = this,
                        a, c, l, d, h = arguments[1] || {},
                        m = this.width,
                        g = this.height,
                        v;
                    try {
                        if (!(i = t.get(i))) throw new n.DOMException(n.DOMException.INVALID_NODE_TYPE_ERR);
                        if (!this.size) throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                        if (this.width > p.MAX_RESIZE_WIDTH || this.height > p.MAX_RESIZE_HEIGHT) throw new n.ImageError(n.ImageError.MAX_RESOLUTION_ERR);
                        if (c = h.type || this.type || "image/jpeg", l = h.quality || 90, d = "undefined" !== e.typeOf(h.crop) ? h.crop : !1, h.width) m = h.width, g = h.height || m;
                        else {
                            var y = t.getSize(i);
                            y.w && y.h && (m = y.w, g = y.h)
                        }
                        return a = new p, a.bind("Resize", function() {
                            r.call(o)
                        }), a.bind("Load", function() {
                            a.downsize(m, g, d, !1)
                        }), a.clone(this, !1), a
                    } catch (w) {
                        this.trigger("error", w)
                    }
                },
                destroy: function() {
                    this.ruid && (this.getRuntime().exec.call(this, "Image", "destroy"), this.disconnectRuntime()), this.unbindAll()
                }
            })
        }
        var h = ["progress", "load", "error", "resize", "embedded"];
        return p.MAX_RESIZE_WIDTH = 6500, p.MAX_RESIZE_HEIGHT = 6500, p.prototype = c.instance, p
    }), i(D, [u, p, g, d], function(e, t, n, i) {
        function r(t) {
            var r = this,
                s = n.capTest,
                u = n.capTrue,
                c = e.extend({
                    access_binary: s(window.FileReader || window.File && window.File.getAsDataURL),
                    access_image_binary: function() {
                        return r.can("access_binary") && !!a.Image
                    },
                    display_media: s(i.can("create_canvas") || i.can("use_data_uri_over32kb")),
                    do_cors: s(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
                    drag_and_drop: s(function() {
                        var e = document.createElement("div");
                        return ("draggable" in e || "ondragstart" in e && "ondrop" in e) && ("IE" !== i.browser || i.version > 9)
                    }()),
                    filter_by_extension: s(function() {
                        return "Chrome" === i.browser && i.version >= 28 || "IE" === i.browser && i.version >= 10
                    }()),
                    return_response_headers: u,
                    return_response_type: function(e) {
                        return "json" === e && window.JSON ? !0 : i.can("return_response_type", e)
                    },
                    return_status_code: u,
                    report_upload_progress: s(window.XMLHttpRequest && (new XMLHttpRequest).upload),
                    resize_image: function() {
                        return r.can("access_binary") && i.can("create_canvas")
                    },
                    select_file: function() {
                        return i.can("use_fileinput") && window.File
                    },
                    select_folder: function() {
                        return r.can("select_file") && "Chrome" === i.browser && i.version >= 21
                    },
                    select_multiple: function() {
                        return !(!r.can("select_file") || "Safari" === i.browser && "Windows" === i.os || "iOS" === i.os && i.verComp(i.osVersion, "7.0.4", "<"))
                    },
                    send_binary_string: s(window.XMLHttpRequest && ((new XMLHttpRequest).sendAsBinary || window.Uint8Array && window.ArrayBuffer)),
                    send_custom_headers: s(window.XMLHttpRequest),
                    send_multipart: function() {
                        return !!(window.XMLHttpRequest && (new XMLHttpRequest).upload && window.FormData) || r.can("send_binary_string")
                    },
                    slice_blob: s(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)),
                    stream_upload: function() {
                        return r.can("slice_blob") && r.can("send_multipart")
                    },
                    summon_file_dialog: s(function() {
                        return "Firefox" === i.browser && i.version >= 4 || "Opera" === i.browser && i.version >= 12 || "IE" === i.browser && i.version >= 10 || !!~e.inArray(i.browser, ["Chrome", "Safari"])
                    }()),
                    upload_filesize: u
                }, arguments[2]);
            n.call(this, t, arguments[1] || o, c), e.extend(this, {
                init: function() {
                    this.trigger("Init")
                },
                destroy: function(e) {
                    return function() {
                        e.call(r), e = r = null
                    }
                }(this.destroy)
            }), e.extend(this.getShim(), a)
        }
        var o = "html5",
            a = {};
        return n.addConstructor(o, r), a
    }), i(N, [D, y], function(e, t) {
        function n() {
            function e(e, t, n) {
                var i;
                if (!window.File.prototype.slice) return (i = window.File.prototype.webkitSlice || window.File.prototype.mozSlice) ? i.call(e, t, n) : null;
                try {
                    return e.slice(), e.slice(t, n)
                } catch (r) {
                    return e.slice(t, n - t)
                }
            }
            this.slice = function() {
                return new t(this.getRuntime().uid, e.apply(this, arguments))
            }
        }
        return e.Blob = n
    }), i(L, [u], function(e) {
        function t() {
            this.returnValue = !1
        }

        function n() {
            this.cancelBubble = !0
        }
        var i = {},
            r = "moxie_" + e.guid(),
            o = function(o, a, s, u) {
                var c, l;
                a = a.toLowerCase(), o.addEventListener ? (c = s, o.addEventListener(a, c, !1)) : o.attachEvent && (c = function() {
                    var e = window.event;
                    e.target || (e.target = e.srcElement), e.preventDefault = t, e.stopPropagation = n, s(e)
                }, o.attachEvent("on" + a, c)), o[r] || (o[r] = e.guid()), i.hasOwnProperty(o[r]) || (i[o[r]] = {}), l = i[o[r]], l.hasOwnProperty(a) || (l[a] = []), l[a].push({
                    func: c,
                    orig: s,
                    key: u
                })
            },
            a = function(t, n, o) {
                var a, s;
                if (n = n.toLowerCase(), t[r] && i[t[r]] && i[t[r]][n]) {
                    a = i[t[r]][n];
                    for (var u = a.length - 1; u >= 0 && (a[u].orig !== o && a[u].key !== o || (t.removeEventListener ? t.removeEventListener(n, a[u].func, !1) : t.detachEvent && t.detachEvent("on" + n, a[u].func), a[u].orig = null, a[u].func = null, a.splice(u, 1), o === s)); u--);
                    if (a.length || delete i[t[r]][n], e.isEmptyObj(i[t[r]])) {
                        delete i[t[r]];
                        try {
                            delete t[r]
                        } catch (c) {
                            t[r] = s
                        }
                    }
                }
            },
            s = function(t, n) {
                t && t[r] && e.each(i[t[r]], function(e, i) {
                    a(t, i, n)
                })
            };
        return {
            addEvent: o,
            removeEvent: a,
            removeAllEvents: s
        }
    }), i(M, [D, u, f, L, l, d], function(e, t, n, i, r, o) {
        function a() {
            var e = [],
                a;
            t.extend(this, {
                init: function(s) {
                    var u = this,
                        c = u.getRuntime(),
                        l, d, f, p, h, m;
                    a = s, e = [], f = a.accept.mimes || r.extList2mimes(a.accept, c.can("filter_by_extension")), d = c.getShimContainer(), d.innerHTML = '<input id="' + c.uid + '" type="file" style="font-size:999px;opacity:0;"' + (a.multiple && c.can("select_multiple") ? "multiple" : "") + (a.directory && c.can("select_folder") ? "webkitdirectory directory" : "") + (f ? ' accept="' + f.join(",") + '"' : "") + " />", l = n.get(c.uid), t.extend(l.style, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }), p = n.get(a.browse_button), c.can("summon_file_dialog") && ("static" === n.getStyle(p, "position") && (p.style.position = "relative"), h = parseInt(n.getStyle(p, "z-index"), 10) || 1, p.style.zIndex = h, d.style.zIndex = h - 1, i.addEvent(p, "click", function(e) {
                        var t = n.get(c.uid);
                        t && !t.disabled && t.click(), e.preventDefault()
                    }, u.uid)), m = c.can("summon_file_dialog") ? p : d, i.addEvent(m, "mouseover", function() {
                        u.trigger("mouseenter")
                    }, u.uid), i.addEvent(m, "mouseout", function() {
                        u.trigger("mouseleave")
                    }, u.uid), i.addEvent(m, "mousedown", function() {
                        u.trigger("mousedown")
                    }, u.uid), i.addEvent(n.get(a.container), "mouseup", function() {
                        u.trigger("mouseup")
                    }, u.uid), l.onchange = function g() {
                        if (e = [], a.directory ? t.each(this.files, function(t) {
                                "." !== t.name && e.push(t)
                            }) : e = [].slice.call(this.files), "IE" !== o.browser) this.value = "";
                        else {
                            var n = this.cloneNode(!0);
                            this.parentNode.replaceChild(n, this), n.onchange = g
                        }
                        u.trigger("change")
                    }, u.trigger({
                        type: "ready",
                        async: !0
                    }), d = null
                },
                getFiles: function() {
                    return e
                },
                disable: function(e) {
                    var t = this.getRuntime(),
                        i;
                    (i = n.get(t.uid)) && (i.disabled = !!e)
                },
                destroy: function() {
                    var t = this.getRuntime(),
                        r = t.getShim(),
                        o = t.getShimContainer();
                    i.removeAllEvents(o, this.uid), i.removeAllEvents(a && n.get(a.container), this.uid), i.removeAllEvents(a && n.get(a.browse_button), this.uid), o && (o.innerHTML = ""), r.removeInstance(this.uid), e = a = o = r = null
                }
            })
        }
        return e.FileInput = a
    }), i(C, [D, u, f, L, l], function(e, t, n, i, r) {
        function o() {
            function e(e) {
                for (var n = [], i = 0; i < e.length; i++)[].push.apply(n, e[i].extensions.split(/\s*,\s*/));
                return -1 === t.inArray("*", n) ? n : []
            }

            function o(e) {
                var n = r.getFileExtension(e.name);
                return !n || !d.length || -1 !== t.inArray(n, d)
            }

            function a(e, n) {
                var i = [];
                t.each(e, function(e) {
                    var t = e.webkitGetAsEntry();
                    if (t)
                        if (t.isFile) {
                            var n = e.getAsFile();
                            o(n) && l.push(n)
                        } else i.push(t)
                }), i.length ? s(i, n) : n()
            }

            function s(e, n) {
                var i = [];
                t.each(e, function(e) {
                    i.push(function(t) {
                        u(e, t)
                    })
                }), t.inSeries(i, function() {
                    n()
                })
            }

            function u(e, t) {
                e.isFile ? e.file(function(e) {
                    o(e) && l.push(e), t()
                }, function() {
                    t()
                }) : e.isDirectory ? c(e, t) : t()
            }

            function c(e, t) {
                function n(e) {
                    r.readEntries(function(t) {
                        t.length ? ([].push.apply(i, t), n(e)) : e()
                    }, e)
                }
                var i = [],
                    r = e.createReader();
                n(function() {
                    s(i, t)
                })
            }
            var l = [],
                d = [],
                f;
            t.extend(this, {
                init: function(n) {
                    var r = this,
                        s;
                    f = n, d = e(f.accept), s = f.container, i.addEvent(s, "dragover", function(e) {
                        e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "copy"
                    }, r.uid), i.addEvent(s, "drop", function(e) {
                        e.preventDefault(), e.stopPropagation(), l = [], e.dataTransfer.items && e.dataTransfer.items[0].webkitGetAsEntry ? a(e.dataTransfer.items, function() {
                            r.trigger("drop")
                        }) : (t.each(e.dataTransfer.files, function(e) {
                            o(e) && l.push(e)
                        }), r.trigger("drop"))
                    }, r.uid), i.addEvent(s, "dragenter", function(e) {
                        e.preventDefault(), e.stopPropagation(), r.trigger("dragenter")
                    }, r.uid), i.addEvent(s, "dragleave", function(e) {
                        e.preventDefault(), e.stopPropagation(), r.trigger("dragleave")
                    }, r.uid)
                },
                getFiles: function() {
                    return l
                },
                destroy: function() {
                    i.removeAllEvents(f && n.get(f.container), this.uid), l = d = f = null
                }
            })
        }
        return e.FileDrop = o
    }), i(F, [D, m, u], function(e, t, n) {
        function i() {
            function e(e) {
                return t.atob(e.substring(e.indexOf("base64,") + 7))
            }
            var i, r = !1;
            n.extend(this, {
                read: function(e, t) {
                    var o = this;
                    i = new window.FileReader, i.addEventListener("progress", function(e) {
                        o.trigger(e)
                    }), i.addEventListener("load", function(e) {
                        o.trigger(e)
                    }), i.addEventListener("error", function(e) {
                        o.trigger(e, i.error)
                    }), i.addEventListener("loadend", function() {
                        i = null
                    }), "function" === n.typeOf(i[e]) ? (r = !1, i[e](t.getSource())) : "readAsBinaryString" === e && (r = !0, i.readAsDataURL(t.getSource()))
                },
                getResult: function() {
                    return i && i.result ? r ? e(i.result) : i.result : null
                },
                abort: function() {
                    i && i.abort()
                },
                destroy: function() {
                    i = null
                }
            })
        }
        return e.FileReader = i
    }), i(H, [D, u, l, b, w, y, S, p, d], function(e, t, n, i, r, o, a, s, u) {
        function c() {
            function e(e, t) {
                var n = this,
                    i, r;
                i = t.getBlob().getSource(), r = new window.FileReader, r.onload = function() {
                    t.append(t.getBlobName(), new o(null, {
                        type: i.type,
                        data: r.result
                    })), f.send.call(n, e, t)
                }, r.readAsBinaryString(i)
            }

            function c() {
                return !window.XMLHttpRequest || "IE" === u.browser && u.version < 8 ? function() {
                    for (var e = ["Msxml2.XMLHTTP.6.0", "Microsoft.XMLHTTP"], t = 0; t < e.length; t++) try {
                        return new ActiveXObject(e[t])
                    } catch (n) {}
                }() : new window.XMLHttpRequest
            }

            function l(e) {
                var t = e.responseXML,
                    n = e.responseText;
                return "IE" === u.browser && n && t && !t.documentElement && /[^\/]+\/[^\+]+\+xml/.test(e.getResponseHeader("Content-Type")) && (t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = !1, t.validateOnParse = !1, t.loadXML(n)), t && ("IE" === u.browser && 0 !== t.parseError || !t.documentElement || "parsererror" === t.documentElement.tagName) ? null : t
            }

            function d(e) {
                var t = "----moxieboundary" + (new Date).getTime(),
                    n = "--",
                    i = "\r\n",
                    r = "",
                    a = this.getRuntime();
                if (!a.can("send_binary_string")) throw new s.RuntimeError(s.RuntimeError.NOT_SUPPORTED_ERR);
                return p.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + t), e.each(function(e, a) {
                    r += e instanceof o ? n + t + i + 'Content-Disposition: form-data; name="' + a + '"; filename="' + unescape(encodeURIComponent(e.name || "blob")) + '"' + i + "Content-Type: " + (e.type || "application/octet-stream") + i + i + e.getSource() + i : n + t + i + 'Content-Disposition: form-data; name="' + a + '"' + i + i + unescape(encodeURIComponent(e)) + i
                }), r += n + t + n + i
            }
            var f = this,
                p, h;
            t.extend(this, {
                send: function(n, r) {
                    var s = this,
                        l = "Mozilla" === u.browser && u.version >= 4 && u.version < 7,
                        f = "Android Browser" === u.browser,
                        m = !1;
                    if (h = n.url.replace(/^.+?\/([\w\-\.]+)$/, "$1").toLowerCase(), p = c(), p.open(n.method, n.url, n.async, n.user, n.password), r instanceof o) r.isDetached() && (m = !0), r = r.getSource();
                    else if (r instanceof a) {
                        if (r.hasBlob())
                            if (r.getBlob().isDetached()) r = d.call(s, r), m = !0;
                            else if ((l || f) && "blob" === t.typeOf(r.getBlob().getSource()) && window.FileReader) return e.call(s, n, r), void 0;
                        if (r instanceof a) {
                            var g = new window.FormData;
                            r.each(function(e, t) {
                                e instanceof o ? g.append(t, e.getSource()) : g.append(t, e)
                            }), r = g
                        }
                    }
                    p.upload ? (n.withCredentials && (p.withCredentials = !0), p.addEventListener("load", function(e) {
                        s.trigger(e)
                    }), p.addEventListener("error", function(e) {
                        s.trigger(e)
                    }), p.addEventListener("progress", function(e) {
                        s.trigger(e)
                    }), p.upload.addEventListener("progress", function(e) {
                        s.trigger({
                            type: "UploadProgress",
                            loaded: e.loaded,
                            total: e.total
                        })
                    })) : p.onreadystatechange = function v() {
                        switch (p.readyState) {
                            case 1:
                                break;
                            case 2:
                                break;
                            case 3:
                                var e, t;
                                try {
                                    i.hasSameOrigin(n.url) && (e = p.getResponseHeader("Content-Length") || 0), p.responseText && (t = p.responseText.length)
                                } catch (r) {
                                    e = t = 0
                                }
                                s.trigger({
                                    type: "progress",
                                    lengthComputable: !!e,
                                    total: parseInt(e, 10),
                                    loaded: t
                                });
                                break;
                            case 4:
                                p.onreadystatechange = function() {}, 0 === p.status ? s.trigger("error") : s.trigger("load")
                        }
                    }, t.isEmptyObj(n.headers) || t.each(n.headers, function(e, t) {
                        p.setRequestHeader(t, e)
                    }), "" !== n.responseType && "responseType" in p && (p.responseType = "json" !== n.responseType || u.can("return_response_type", "json") ? n.responseType : "text"), m ? p.sendAsBinary ? p.sendAsBinary(r) : function() {
                        for (var e = new Uint8Array(r.length), t = 0; t < r.length; t++) e[t] = 255 & r.charCodeAt(t);
                        p.send(e.buffer)
                    }() : p.send(r), s.trigger("loadstart")
                },
                getStatus: function() {
                    try {
                        if (p) return p.status
                    } catch (e) {}
                    return 0
                },
                getResponse: function(e) {
                    var t = this.getRuntime();
                    try {
                        switch (e) {
                            case "blob":
                                var i = new r(t.uid, p.response),
                                    o = p.getResponseHeader("Content-Disposition");
                                if (o) {
                                    var a = o.match(/filename=([\'\"'])([^\1]+)\1/);
                                    a && (h = a[2])
                                }
                                return i.name = h, i.type || (i.type = n.getFileMime(h)), i;
                            case "json":
                                return u.can("return_response_type", "json") ? p.response : 200 === p.status && window.JSON ? JSON.parse(p.responseText) : null;
                            case "document":
                                return l(p);
                            default:
                                return "" !== p.responseText ? p.responseText : null
                        }
                    } catch (s) {
                        return null
                    }
                },
                getAllResponseHeaders: function() {
                    try {
                        return p.getAllResponseHeaders()
                    } catch (e) {}
                    return ""
                },
                abort: function() {
                    p && p.abort()
                },
                destroy: function() {
                    f = h = null
                }
            })
        }
        return e.XMLHttpRequest = c
    }), i(P, [], function() {
        return function() {
            function e(e, t) {
                var n = r ? 0 : -8 * (t - 1),
                    i = 0,
                    a;
                for (a = 0; t > a; a++) i |= o.charCodeAt(e + a) << Math.abs(n + 8 * a);
                return i
            }

            function n(e, t, n) {
                n = 3 === arguments.length ? n : o.length - t - 1, o = o.substr(0, t) + e + o.substr(n + t)
            }

            function i(e, t, i) {
                var o = "",
                    a = r ? 0 : -8 * (i - 1),
                    s;
                for (s = 0; i > s; s++) o += String.fromCharCode(255 & t >> Math.abs(a + 8 * s));
                n(o, e, i)
            }
            var r = !1,
                o;
            return {
                II: function(e) {
                    return e === t ? r : (r = e, void 0)
                },
                init: function(e) {
                    r = !1, o = e
                },
                SEGMENT: function(e, t, i) {
                    switch (arguments.length) {
                        case 1:
                            return o.substr(e, o.length - e - 1);
                        case 2:
                            return o.substr(e, t);
                        case 3:
                            n(i, e, t);
                            break;
                        default:
                            return o
                    }
                },
                BYTE: function(t) {
                    return e(t, 1)
                },
                SHORT: function(t) {
                    return e(t, 2)
                },
                LONG: function(n, r) {
                    return r === t ? e(n, 4) : (i(n, r, 4), void 0)
                },
                SLONG: function(t) {
                    var n = e(t, 4);
                    return n > 2147483647 ? n - 4294967296 : n
                },
                STRING: function(t, n) {
                    var i = "";
                    for (n += t; n > t; t++) i += String.fromCharCode(e(t, 1));
                    return i
                }
            }
        }
    }), i(k, [P], function(e) {
        return function t(n) {
            var i = [],
                r, o, a, s = 0;
            if (r = new e, r.init(n), 65496 === r.SHORT(0)) {
                for (o = 2; o <= n.length;)
                    if (a = r.SHORT(o), a >= 65488 && 65495 >= a) o += 2;
                    else {
                        if (65498 === a || 65497 === a) break;
                        s = r.SHORT(o + 2) + 2, a >= 65505 && 65519 >= a && i.push({
                            hex: a,
                            name: "APP" + (15 & a),
                            start: o,
                            length: s,
                            segment: r.SEGMENT(o, s)
                        }), o += s
                    }
                return r.init(null), {
                    headers: i,
                    restore: function(e) {
                        var t, n;
                        for (r.init(e), o = 65504 == r.SHORT(2) ? 4 + r.SHORT(4) : 2, n = 0, t = i.length; t > n; n++) r.SEGMENT(o, 0, i[n].segment), o += i[n].length;
                        return e = r.SEGMENT(), r.init(null), e
                    },
                    strip: function(e) {
                        var n, i, o;
                        for (i = new t(e), n = i.headers, i.purge(), r.init(e), o = n.length; o--;) r.SEGMENT(n[o].start, n[o].length, "");
                        return e = r.SEGMENT(), r.init(null), e
                    },
                    get: function(e) {
                        for (var t = [], n = 0, r = i.length; r > n; n++) i[n].name === e.toUpperCase() && t.push(i[n].segment);
                        return t
                    },
                    set: function(e, t) {
                        var n = [],
                            r, o, a;
                        for ("string" == typeof t ? n.push(t) : n = t, r = o = 0, a = i.length; a > r && (i[r].name === e.toUpperCase() && (i[r].segment = n[o], i[r].length = n[o].length, o++), !(o >= n.length)); r++);
                    },
                    purge: function() {
                        i = [], r.init(null), r = null
                    }
                }
            }
        }
    }), i(U, [u, P], function(e, n) {
        return function i() {
            function i(e, n) {
                var i = a.SHORT(e),
                    r, o, s, u, d, f, p, h, m = [],
                    g = {};
                for (r = 0; i > r; r++)
                    if (p = f = e + 12 * r + 2, s = n[a.SHORT(p)], s !== t) {
                        switch (u = a.SHORT(p += 2), d = a.LONG(p += 2), p += 4, m = [], u) {
                            case 1:
                            case 7:
                                for (d > 4 && (p = a.LONG(p) + c.tiffHeader), o = 0; d > o; o++) m[o] = a.BYTE(p + o);
                                break;
                            case 2:
                                d > 4 && (p = a.LONG(p) + c.tiffHeader), g[s] = a.STRING(p, d - 1);
                                continue;
                            case 3:
                                for (d > 2 && (p = a.LONG(p) + c.tiffHeader), o = 0; d > o; o++) m[o] = a.SHORT(p + 2 * o);
                                break;
                            case 4:
                                for (d > 1 && (p = a.LONG(p) + c.tiffHeader), o = 0; d > o; o++) m[o] = a.LONG(p + 4 * o);
                                break;
                            case 5:
                                for (p = a.LONG(p) + c.tiffHeader, o = 0; d > o; o++) m[o] = a.LONG(p + 4 * o) / a.LONG(p + 4 * o + 4);
                                break;
                            case 9:
                                for (p = a.LONG(p) + c.tiffHeader, o = 0; d > o; o++) m[o] = a.SLONG(p + 4 * o);
                                break;
                            case 10:
                                for (p = a.LONG(p) + c.tiffHeader, o = 0; d > o; o++) m[o] = a.SLONG(p + 4 * o) / a.SLONG(p + 4 * o + 4);
                                break;
                            default:
                                continue
                        }
                        h = 1 == d ? m[0] : m, g[s] = l.hasOwnProperty(s) && "object" != typeof h ? l[s][h] : h
                    }
                return g
            }

            function r() {
                var e = c.tiffHeader;
                return a.II(18761 == a.SHORT(e)), 42 !== a.SHORT(e += 2) ? !1 : (c.IFD0 = c.tiffHeader + a.LONG(e += 2), u = i(c.IFD0, s.tiff), "ExifIFDPointer" in u && (c.exifIFD = c.tiffHeader + u.ExifIFDPointer, delete u.ExifIFDPointer), "GPSInfoIFDPointer" in u && (c.gpsIFD = c.tiffHeader + u.GPSInfoIFDPointer, delete u.GPSInfoIFDPointer), !0)
            }

            function o(e, t, n) {
                var i, r, o, u = 0;
                if ("string" == typeof t) {
                    var l = s[e.toLowerCase()];
                    for (var d in l)
                        if (l[d] === t) {
                            t = d;
                            break
                        }
                }
                i = c[e.toLowerCase() + "IFD"], r = a.SHORT(i);
                for (var f = 0; r > f; f++)
                    if (o = i + 12 * f + 2, a.SHORT(o) == t) {
                        u = o + 8;
                        break
                    }
                return u ? (a.LONG(u, n), !0) : !1
            }
            var a, s, u, c = {},
                l;
            return a = new n, s = {
                tiff: {
                    274: "Orientation",
                    270: "ImageDescription",
                    271: "Make",
                    272: "Model",
                    305: "Software",
                    34665: "ExifIFDPointer",
                    34853: "GPSInfoIFDPointer"
                },
                exif: {
                    36864: "ExifVersion",
                    40961: "ColorSpace",
                    40962: "PixelXDimension",
                    40963: "PixelYDimension",
                    36867: "DateTimeOriginal",
                    33434: "ExposureTime",
                    33437: "FNumber",
                    34855: "ISOSpeedRatings",
                    37377: "ShutterSpeedValue",
                    37378: "ApertureValue",
                    37383: "MeteringMode",
                    37384: "LightSource",
                    37385: "Flash",
                    37386: "FocalLength",
                    41986: "ExposureMode",
                    41987: "WhiteBalance",
                    41990: "SceneCaptureType",
                    41988: "DigitalZoomRatio",
                    41992: "Contrast",
                    41993: "Saturation",
                    41994: "Sharpness"
                },
                gps: {
                    0: "GPSVersionID",
                    1: "GPSLatitudeRef",
                    2: "GPSLatitude",
                    3: "GPSLongitudeRef",
                    4: "GPSLongitude"
                }
            }, l = {
                ColorSpace: {
                    1: "sRGB",
                    0: "Uncalibrated"
                },
                MeteringMode: {
                    0: "Unknown",
                    1: "Average",
                    2: "CenterWeightedAverage",
                    3: "Spot",
                    4: "MultiSpot",
                    5: "Pattern",
                    6: "Partial",
                    255: "Other"
                },
                LightSource: {
                    1: "Daylight",
                    2: "Fliorescent",
                    3: "Tungsten",
                    4: "Flash",
                    9: "Fine weather",
                    10: "Cloudy weather",
                    11: "Shade",
                    12: "Daylight fluorescent (D 5700 - 7100K)",
                    13: "Day white fluorescent (N 4600 -5400K)",
                    14: "Cool white fluorescent (W 3900 - 4500K)",
                    15: "White fluorescent (WW 3200 - 3700K)",
                    17: "Standard light A",
                    18: "Standard light B",
                    19: "Standard light C",
                    20: "D55",
                    21: "D65",
                    22: "D75",
                    23: "D50",
                    24: "ISO studio tungsten",
                    255: "Other"
                },
                Flash: {
                    0: "Flash did not fire.",
                    1: "Flash fired.",
                    5: "Strobe return light not detected.",
                    7: "Strobe return light detected.",
                    9: "Flash fired, compulsory flash mode",
                    13: "Flash fired, compulsory flash mode, return light not detected",
                    15: "Flash fired, compulsory flash mode, return light detected",
                    16: "Flash did not fire, compulsory flash mode",
                    24: "Flash did not fire, auto mode",
                    25: "Flash fired, auto mode",
                    29: "Flash fired, auto mode, return light not detected",
                    31: "Flash fired, auto mode, return light detected",
                    32: "No flash function",
                    65: "Flash fired, red-eye reduction mode",
                    69: "Flash fired, red-eye reduction mode, return light not detected",
                    71: "Flash fired, red-eye reduction mode, return light detected",
                    73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                    77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                    79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                    89: "Flash fired, auto mode, red-eye reduction mode",
                    93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                    95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
                },
                ExposureMode: {
                    0: "Auto exposure",
                    1: "Manual exposure",
                    2: "Auto bracket"
                },
                WhiteBalance: {
                    0: "Auto white balance",
                    1: "Manual white balance"
                },
                SceneCaptureType: {
                    0: "Standard",
                    1: "Landscape",
                    2: "Portrait",
                    3: "Night scene"
                },
                Contrast: {
                    0: "Normal",
                    1: "Soft",
                    2: "Hard"
                },
                Saturation: {
                    0: "Normal",
                    1: "Low saturation",
                    2: "High saturation"
                },
                Sharpness: {
                    0: "Normal",
                    1: "Soft",
                    2: "Hard"
                },
                GPSLatitudeRef: {
                    N: "North latitude",
                    S: "South latitude"
                },
                GPSLongitudeRef: {
                    E: "East longitude",
                    W: "West longitude"
                }
            }, {
                init: function(e) {
                    return c = {
                        tiffHeader: 10
                    }, e !== t && e.length ? (a.init(e), 65505 === a.SHORT(0) && "EXIF\0" === a.STRING(4, 5).toUpperCase() ? r() : !1) : !1
                },
                TIFF: function() {
                    return u
                },
                EXIF: function() {
                    var t;
                    if (t = i(c.exifIFD, s.exif), t.ExifVersion && "array" === e.typeOf(t.ExifVersion)) {
                        for (var n = 0, r = ""; n < t.ExifVersion.length; n++) r += String.fromCharCode(t.ExifVersion[n]);
                        t.ExifVersion = r
                    }
                    return t
                },
                GPS: function() {
                    var t;
                    return t = i(c.gpsIFD, s.gps), t.GPSVersionID && "array" === e.typeOf(t.GPSVersionID) && (t.GPSVersionID = t.GPSVersionID.join(".")), t
                },
                setExif: function(e, t) {
                    return "PixelXDimension" !== e && "PixelYDimension" !== e ? !1 : o("exif", e, t)
                },
                getBinary: function() {
                    return a.SEGMENT()
                },
                purge: function() {
                    a.init(null), a = u = null, c = {}
                }
            }
        }
    }), i(B, [u, p, k, P, U], function(e, t, n, i, r) {
        function o(o) {
            function a() {
                for (var e = 0, t, n; e <= u.length;) {
                    if (t = c.SHORT(e += 2), t >= 65472 && 65475 >= t) return e += 5, {
                        height: c.SHORT(e),
                        width: c.SHORT(e += 2)
                    };
                    n = c.SHORT(e += 2), e += n - 2
                }
                return null
            }

            function s() {
                d && l && c && (d.purge(), l.purge(), c.init(null), u = f = l = d = c = null)
            }
            var u, c, l, d, f, p;
            if (u = o, c = new i, c.init(u), 65496 !== c.SHORT(0)) throw new t.ImageError(t.ImageError.WRONG_FORMAT);
            l = new n(o), d = new r, p = !!d.init(l.get("app1")[0]), f = a.call(this), e.extend(this, {
                type: "image/jpeg",
                size: u.length,
                width: f && f.width || 0,
                height: f && f.height || 0,
                setExif: function(t, n) {
                    return p ? ("object" === e.typeOf(t) ? e.each(t, function(e, t) {
                        d.setExif(t, e)
                    }) : d.setExif(t, n), l.set("app1", d.getBinary()), void 0) : !1
                },
                writeHeaders: function() {
                    return arguments.length ? l.restore(arguments[0]) : u = l.restore(u)
                },
                stripHeaders: function(e) {
                    return l.strip(e)
                },
                purge: function() {
                    s.call(this)
                }
            }), p && (this.meta = {
                tiff: d.TIFF(),
                exif: d.EXIF(),
                gps: d.GPS()
            })
        }
        return o
    }), i(z, [p, u, P], function(e, t, n) {
        function i(i) {
            function r() {
                var e, t;
                return e = a.call(this, 8), "IHDR" == e.type ? (t = e.start, {
                    width: u.LONG(t),
                    height: u.LONG(t += 4)
                }) : null
            }

            function o() {
                u && (u.init(null), s = d = c = l = u = null)
            }

            function a(e) {
                var t, n, i, r;
                return t = u.LONG(e), n = u.STRING(e += 4, 4), i = e += 4, r = u.LONG(e + t), {
                    length: t,
                    type: n,
                    start: i,
                    CRC: r
                }
            }
            var s, u, c, l, d;
            s = i, u = new n, u.init(s),
                function() {
                    var t = 0,
                        n = 0,
                        i = [35152, 20039, 3338, 6666];
                    for (n = 0; n < i.length; n++, t += 2)
                        if (i[n] != u.SHORT(t)) throw new e.ImageError(e.ImageError.WRONG_FORMAT)
                }(), d = r.call(this), t.extend(this, {
                    type: "image/png",
                    size: s.length,
                    width: d.width,
                    height: d.height,
                    purge: function() {
                        o.call(this)
                    }
                }), o.call(this)
        }
        return i
    }), i(G, [u, p, B, z], function(e, t, n, i) {
        return function(r) {
            var o = [n, i],
                a;
            a = function() {
                for (var e = 0; e < o.length; e++) try {
                    return new o[e](r)
                } catch (n) {}
                throw new t.ImageError(t.ImageError.WRONG_FORMAT)
            }(), e.extend(this, {
                type: "",
                size: 0,
                width: 0,
                height: 0,
                setExif: function() {},
                writeHeaders: function(e) {
                    return e
                },
                stripHeaders: function(e) {
                    return e
                },
                purge: function() {}
            }), e.extend(this, a), this.purge = function() {
                a.purge(), a = null
            }
        }
    }), i(q, [], function() {
        function e(e, i, r) {
            var o = e.naturalWidth,
                a = e.naturalHeight,
                s = r.width,
                u = r.height,
                c = r.x || 0,
                l = r.y || 0,
                d = i.getContext("2d");
            t(e) && (o /= 2, a /= 2);
            var f = 1024,
                p = document.createElement("canvas");
            p.width = p.height = f;
            for (var h = p.getContext("2d"), m = n(e, o, a), g = 0; a > g;) {
                for (var v = g + f > a ? a - g : f, y = 0; o > y;) {
                    var w = y + f > o ? o - y : f;
                    h.clearRect(0, 0, f, f), h.drawImage(e, -y, -g);
                    var E = y * s / o + c << 0,
                        _ = Math.ceil(w * s / o),
                        x = g * u / a / m + l << 0,
                        R = Math.ceil(v * u / a / m);
                    d.drawImage(p, 0, 0, w, v, E, x, _, R), y += f
                }
                g += f
            }
            p = h = null
        }

        function t(e) {
            var t = e.naturalWidth,
                n = e.naturalHeight;
            if (t * n > 1048576) {
                var i = document.createElement("canvas");
                i.width = i.height = 1;
                var r = i.getContext("2d");
                return r.drawImage(e, -t + 1, 0), 0 === r.getImageData(0, 0, 1, 1).data[3]
            }
            return !1
        }

        function n(e, t, n) {
            var i = document.createElement("canvas");
            i.width = 1, i.height = n;
            var r = i.getContext("2d");
            r.drawImage(e, 0, 0);
            for (var o = r.getImageData(0, 0, 1, n).data, a = 0, s = n, u = n; u > a;) {
                var c = o[4 * (u - 1) + 3];
                0 === c ? s = u : a = u, u = s + a >> 1
            }
            i = null;
            var l = u / n;
            return 0 === l ? 1 : l
        }
        return {
            isSubsampled: t,
            renderTo: e
        }
    }), i(X, [D, u, p, m, w, G, q, l, d], function(e, t, n, i, r, o, a, s, u) {
        function c() {
            function e() {
                if (!E && !y) throw new n.ImageError(n.DOMException.INVALID_STATE_ERR);
                return E || y
            }

            function c(e) {
                return i.atob(e.substring(e.indexOf("base64,") + 7))
            }

            function l(e, t) {
                return "data:" + (t || "") + ";base64," + i.btoa(e)
            }

            function d(e) {
                var t = this;
                y = new Image, y.onerror = function() {
                    g.call(this), t.trigger("error", new n.ImageError(n.ImageError.WRONG_FORMAT))
                }, y.onload = function() {
                    t.trigger("load")
                }, y.src = /^data:[^;]*;base64,/.test(e) ? e : l(e, x.type)
            }

            function f(e, t) {
                var i = this,
                    r;
                return window.FileReader ? (r = new FileReader, r.onload = function() {
                    t(this.result)
                }, r.onerror = function() {
                    i.trigger("error", new n.FileException(n.FileException.NOT_READABLE_ERR))
                }, r.readAsDataURL(e), void 0) : t(e.getAsDataURL())
            }

            function p(n, i, r, o) {
                var a = this,
                    s, u, c = 0,
                    l = 0,
                    d, f, p, g;
                if (b = o, g = this.meta && this.meta.tiff && this.meta.tiff.Orientation || 1, -1 !== t.inArray(g, [5, 6, 7, 8])) {
                    var v = n;
                    n = i, i = v
                }
                return d = e(), u = r ? Math.max : Math.min, s = u(n / d.width, i / d.height), s > 1 && (!r || o) ? (this.trigger("Resize"), void 0) : (E || (E = document.createElement("canvas")), f = Math.round(d.width * s), p = Math.round(d.height * s), r ? (E.width = n, E.height = i, f > n && (c = Math.round((f - n) / 2)), p > i && (l = Math.round((p - i) / 2))) : (E.width = f, E.height = p), b || m(E.width, E.height, g), h.call(this, d, E, -c, -l, f, p), this.width = E.width, this.height = E.height, R = !0, a.trigger("Resize"), void 0)
            }

            function h(e, t, n, i, r, o) {
                if ("iOS" === u.OS) a.renderTo(e, t, {
                    width: r,
                    height: o,
                    x: n,
                    y: i
                });
                else {
                    var s = t.getContext("2d");
                    s.drawImage(e, n, i, r, o)
                }
            }

            function m(e, t, n) {
                switch (n) {
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        E.width = t, E.height = e;
                        break;
                    default:
                        E.width = e, E.height = t
                }
                var i = E.getContext("2d");
                switch (n) {
                    case 2:
                        i.translate(e, 0), i.scale(-1, 1);
                        break;
                    case 3:
                        i.translate(e, t), i.rotate(Math.PI);
                        break;
                    case 4:
                        i.translate(0, t), i.scale(1, -1);
                        break;
                    case 5:
                        i.rotate(.5 * Math.PI), i.scale(1, -1);
                        break;
                    case 6:
                        i.rotate(.5 * Math.PI), i.translate(0, -t);
                        break;
                    case 7:
                        i.rotate(.5 * Math.PI), i.translate(e, -t), i.scale(-1, 1);
                        break;
                    case 8:
                        i.rotate(-.5 * Math.PI), i.translate(-e, 0)
                }
            }

            function g() {
                w && (w.purge(), w = null), _ = y = E = x = null, R = !1
            }
            var v = this,
                y, w, E, _, x, R = !1,
                b = !0;
            t.extend(this, {
                loadFromBlob: function(e) {
                    var t = this,
                        i = t.getRuntime(),
                        r = arguments.length > 1 ? arguments[1] : !0;
                    if (!i.can("access_binary")) throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);
                    return x = e, e.isDetached() ? (_ = e.getSource(), d.call(this, _), void 0) : (f.call(this, e.getSource(), function(e) {
                        r && (_ = c(e)), d.call(t, e)
                    }), void 0)
                },
                loadFromImage: function(e, t) {
                    this.meta = e.meta, x = new r(null, {
                        name: e.name,
                        size: e.size,
                        type: e.type
                    }), d.call(this, t ? _ = e.getAsBinaryString() : e.getAsDataURL())
                },
                getInfo: function() {
                    var t = this.getRuntime(),
                        n;
                    return !w && _ && t.can("access_image_binary") && (w = new o(_)), n = {
                        width: e().width || 0,
                        height: e().height || 0,
                        type: x.type || s.getFileMime(x.name),
                        size: _ && _.length || x.size || 0,
                        name: x.name || "",
                        meta: w && w.meta || this.meta || {}
                    }
                },
                downsize: function() {
                    p.apply(this, arguments)
                },
                getAsCanvas: function() {
                    return E && (E.id = this.uid + "_canvas"), E
                },
                getAsBlob: function(e, t) {
                    return e !== this.type && p.call(this, this.width, this.height, !1), new r(null, {
                        name: x.name || "",
                        type: e,
                        data: v.getAsBinaryString.call(this, e, t)
                    })
                },
                getAsDataURL: function(e) {
                    var t = arguments[1] || 90;
                    if (!R) return y.src;
                    if ("image/jpeg" !== e) return E.toDataURL("image/png");
                    try {
                        return E.toDataURL("image/jpeg", t / 100)
                    } catch (n) {
                        return E.toDataURL("image/jpeg")
                    }
                },
                getAsBinaryString: function(e, t) {
                    if (!R) return _ || (_ = c(v.getAsDataURL(e, t))), _;
                    if ("image/jpeg" !== e) _ = c(v.getAsDataURL(e, t));
                    else {
                        var n;
                        t || (t = 90);
                        try {
                            n = E.toDataURL("image/jpeg", t / 100)
                        } catch (i) {
                            n = E.toDataURL("image/jpeg")
                        }
                        _ = c(n), w && (_ = w.stripHeaders(_), b && (w.meta && w.meta.exif && w.setExif({
                            PixelXDimension: this.width,
                            PixelYDimension: this.height
                        }), _ = w.writeHeaders(_)), w.purge(), w = null)
                    }
                    return R = !1, _
                },
                destroy: function() {
                    v = null, g.call(this), this.getRuntime().getShim().removeInstance(this.uid)
                }
            })
        }
        return e.Image = c
    }), i(j, [u, d, f, p, g], function(e, t, n, i, r) {
        function o() {
            var e;
            try {
                e = navigator.plugins["Shockwave Flash"], e = e.description
            } catch (t) {
                try {
                    e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
                } catch (n) {
                    e = "0.0"
                }
            }
            return e = e.match(/\d+/g), parseFloat(e[0] + "." + e[1])
        }

        function a(a) {
            var c = this,
                l;
            a = e.extend({
                swf_url: t.swf_url
            }, a), r.call(this, a, s, {
                access_binary: function(e) {
                    return e && "browser" === c.mode
                },
                access_image_binary: function(e) {
                    return e && "browser" === c.mode
                },
                display_media: r.capTrue,
                do_cors: r.capTrue,
                drag_and_drop: !1,
                report_upload_progress: function() {
                    return "client" === c.mode
                },
                resize_image: r.capTrue,
                return_response_headers: !1,
                return_response_type: function(t) {
                    return "json" === t && window.JSON ? !0 : !e.arrayDiff(t, ["", "text", "document"]) || "browser" === c.mode
                },
                return_status_code: function(t) {
                    return "browser" === c.mode || !e.arrayDiff(t, [200, 404])
                },
                select_file: r.capTrue,
                select_multiple: r.capTrue,
                send_binary_string: function(e) {
                    return e && "browser" === c.mode
                },
                send_browser_cookies: function(e) {
                    return e && "browser" === c.mode
                },
                send_custom_headers: function(e) {
                    return e && "browser" === c.mode
                },
                send_multipart: r.capTrue,
                slice_blob: r.capTrue,
                stream_upload: function(e) {
                    return e && "browser" === c.mode
                },
                summon_file_dialog: !1,
                upload_filesize: function(t) {
                    return e.parseSizeStr(t) <= 2097152 || "client" === c.mode
                },
                use_http_method: function(t) {
                    return !e.arrayDiff(t, ["GET", "POST"])
                }
            }, {
                access_binary: function(e) {
                    return e ? "browser" : "client"
                },
                access_image_binary: function(e) {
                    return e ? "browser" : "client"
                },
                report_upload_progress: function(e) {
                    return e ? "browser" : "client"
                },
                return_response_type: function(t) {
                    return e.arrayDiff(t, ["", "text", "json", "document"]) ? "browser" : ["client", "browser"]
                },
                return_status_code: function(t) {
                    return e.arrayDiff(t, [200, 404]) ? "browser" : ["client", "browser"]
                },
                send_binary_string: function(e) {
                    return e ? "browser" : "client"
                },
                send_browser_cookies: function(e) {
                    return e ? "browser" : "client"
                },
                send_custom_headers: function(e) {
                    return e ? "browser" : "client"
                },
                stream_upload: function(e) {
                    return e ? "client" : "browser"
                },
                upload_filesize: function(t) {
                    return e.parseSizeStr(t) >= 2097152 ? "client" : "browser"
                }
            }, "client"), o() < 10 && (this.mode = !1), e.extend(this, {
                getShim: function() {
                    return n.get(this.uid)
                },
                shimExec: function(e, t) {
                    var n = [].slice.call(arguments, 2);
                    return c.getShim().exec(this.uid, e, t, n)
                },
                init: function() {
                    var n, r, o;
                    o = this.getShimContainer(), e.extend(o.style, {
                        position: "absolute",
                        top: "-8px",
                        left: "-8px",
                        width: "9px",
                        height: "9px",
                        overflow: "hidden"
                    }), n = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + a.swf_url + '" ', "IE" === t.browser && (n += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '), n += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + a.swf_url + '" />' + '<param name="flashvars" value="uid=' + escape(this.uid) + "&target=" + t.global_event_dispatcher + '" />' + '<param name="wmode" value="transparent" />' + '<param name="allowscriptaccess" value="always" />' + "</object>", "IE" === t.browser ? (r = document.createElement("div"), o.appendChild(r), r.outerHTML = n, r = o = null) : o.innerHTML = n, l = setTimeout(function() {
                        c && !c.initialized && c.trigger("Error", new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR))
                    }, 5e3)
                },
                destroy: function(e) {
                    return function() {
                        e.call(c), clearTimeout(l), a = l = e = c = null
                    }
                }(this.destroy)
            }, u)
        }
        var s = "flash",
            u = {};
        return r.addConstructor(s, a), u
    }), i(V, [j, y], function(e, t) {
        var n = {
            slice: function(e, n, i, r) {
                var o = this.getRuntime();
                return 0 > n ? n = Math.max(e.size + n, 0) : n > 0 && (n = Math.min(n, e.size)), 0 > i ? i = Math.max(e.size + i, 0) : i > 0 && (i = Math.min(i, e.size)), e = o.shimExec.call(this, "Blob", "slice", n, i, r || ""), e && (e = new t(o.uid, e)), e
            }
        };
        return e.Blob = n
    }), i(W, [j], function(e) {
        var t = {
            init: function(e) {
                this.getRuntime().shimExec.call(this, "FileInput", "init", {
                    name: e.name,
                    accept: e.accept,
                    multiple: e.multiple
                }), this.trigger("ready")
            }
        };
        return e.FileInput = t
    }), i(Y, [j, m], function(e, t) {
        function n(e, n) {
            switch (n) {
                case "readAsText":
                    return t.atob(e, "utf8");
                case "readAsBinaryString":
                    return t.atob(e);
                case "readAsDataURL":
                    return e
            }
            return null
        }
        var i = "",
            r = {
                read: function(e, t) {
                    var r = this,
                        o = r.getRuntime();
                    return "readAsDataURL" === e && (i = "data:" + (t.type || "") + ";base64,"), r.bind("Progress", function(t, r) {
                        r && (i += n(r, e))
                    }), o.shimExec.call(this, "FileReader", "readAsBase64", t.uid)
                },
                getResult: function() {
                    return i
                },
                destroy: function() {
                    i = null
                }
            };
        return e.FileReader = r
    }), i($, [j, m], function(e, t) {
        function n(e, n) {
            switch (n) {
                case "readAsText":
                    return t.atob(e, "utf8");
                case "readAsBinaryString":
                    return t.atob(e);
                case "readAsDataURL":
                    return e
            }
            return null
        }
        var i = {
            read: function(e, t) {
                var i, r = this.getRuntime();
                return (i = r.shimExec.call(this, "FileReaderSync", "readAsBase64", t.uid)) ? ("readAsDataURL" === e && (i = "data:" + (t.type || "") + ";base64," + i), n(i, e, t.type)) : null
            }
        };
        return e.FileReaderSync = i
    }), i(J, [j, u, y, w, T, S, O], function(e, t, n, i, r, o, a) {
        var s = {
            send: function(e, i) {
                function r() {
                    e.transport = l.mode, l.shimExec.call(c, "XMLHttpRequest", "send", e, i)
                }

                function s(e, t) {
                    l.shimExec.call(c, "XMLHttpRequest", "appendBlob", e, t.uid), i = null, r()
                }

                function u(e, t) {
                    var n = new a;
                    n.bind("TransportingComplete", function() {
                        t(this.result)
                    }), n.transport(e.getSource(), e.type, {
                        ruid: l.uid
                    })
                }
                var c = this,
                    l = c.getRuntime();
                if (t.isEmptyObj(e.headers) || t.each(e.headers, function(e, t) {
                        l.shimExec.call(c, "XMLHttpRequest", "setRequestHeader", t, e.toString())
                    }), i instanceof o) {
                    var d;
                    if (i.each(function(e, t) {
                            e instanceof n ? d = t : l.shimExec.call(c, "XMLHttpRequest", "append", t, e)
                        }), i.hasBlob()) {
                        var f = i.getBlob();
                        f.isDetached() ? u(f, function(e) {
                            f.destroy(), s(d, e)
                        }) : s(d, f)
                    } else i = null, r()
                } else i instanceof n ? i.isDetached() ? u(i, function(e) {
                    i.destroy(), i = e.uid, r()
                }) : (i = i.uid, r()) : r()
            },
            getResponse: function(e) {
                var n, o, a = this.getRuntime();
                if (o = a.shimExec.call(this, "XMLHttpRequest", "getResponseAsBlob")) {
                    if (o = new i(a.uid, o), "blob" === e) return o;
                    try {
                        if (n = new r, ~t.inArray(e, ["", "text"])) return n.readAsText(o);
                        if ("json" === e && window.JSON) return JSON.parse(n.readAsText(o))
                    } finally {
                        o.destroy()
                    }
                }
                return null
            },
            abort: function(e) {
                var t = this.getRuntime();
                t.shimExec.call(this, "XMLHttpRequest", "abort"), this.dispatchEvent("readystatechange"), this.dispatchEvent("abort")
            }
        };
        return e.XMLHttpRequest = s
    }), i(Z, [j, y], function(e, t) {
        var n = {
            getAsBlob: function(e) {
                var n = this.getRuntime(),
                    i = n.shimExec.call(this, "Transporter", "getAsBlob", e);
                return i ? new t(n.uid, i) : null
            }
        };
        return e.Transporter = n
    }), i(K, [j, u, O, y, T], function(e, t, n, i, r) {
        var o = {
            loadFromBlob: function(e) {
                function t(e) {
                    r.shimExec.call(i, "Image", "loadFromBlob", e.uid), i = r = null
                }
                var i = this,
                    r = i.getRuntime();
                if (e.isDetached()) {
                    var o = new n;
                    o.bind("TransportingComplete", function() {
                        t(o.result.getSource())
                    }), o.transport(e.getSource(), e.type, {
                        ruid: r.uid
                    })
                } else t(e.getSource())
            },
            loadFromImage: function(e) {
                var t = this.getRuntime();
                return t.shimExec.call(this, "Image", "loadFromImage", e.uid)
            },
            getAsBlob: function(e, t) {
                var n = this.getRuntime(),
                    r = n.shimExec.call(this, "Image", "getAsBlob", e, t);
                return r ? new i(n.uid, r) : null
            },
            getAsDataURL: function() {
                var e = this.getRuntime(),
                    t = e.Image.getAsBlob.apply(this, arguments),
                    n;
                return t ? (n = new r, n.readAsDataURL(t)) : null
            }
        };
        return e.Image = o
    }), i(Q, [u, d, f, p, g], function(e, t, n, i, r) {
        function o(e) {
            var t = !1,
                n = null,
                i, r, o, a, s, u = 0;
            try {
                try {
                    n = new ActiveXObject("AgControl.AgControl"), n.IsVersionSupported(e) && (t = !0), n = null
                } catch (c) {
                    var l = navigator.plugins["Silverlight Plug-In"];
                    if (l) {
                        for (i = l.description, "1.0.30226.2" === i && (i = "2.0.30226.2"), r = i.split("."); r.length > 3;) r.pop();
                        for (; r.length < 4;) r.push(0);
                        for (o = e.split("."); o.length > 4;) o.pop();
                        do a = parseInt(o[u], 10), s = parseInt(r[u], 10), u++; while (u < o.length && a === s);
                        s >= a && !isNaN(a) && (t = !0)
                    }
                }
            } catch (d) {
                t = !1
            }
            return t
        }

        function a(a) {
            var c = this,
                l;
            a = e.extend({
                xap_url: t.xap_url
            }, a), r.call(this, a, s, {
                access_binary: r.capTrue,
                access_image_binary: r.capTrue,
                display_media: r.capTrue,
                do_cors: r.capTrue,
                drag_and_drop: !1,
                report_upload_progress: r.capTrue,
                resize_image: r.capTrue,
                return_response_headers: function(e) {
                    return e && "client" === c.mode
                },
                return_response_type: function(e) {
                    return "json" !== e ? !0 : !!window.JSON
                },
                return_status_code: function(t) {
                    return "client" === c.mode || !e.arrayDiff(t, [200, 404])
                },
                select_file: r.capTrue,
                select_multiple: r.capTrue,
                send_binary_string: r.capTrue,
                send_browser_cookies: function(e) {
                    return e && "browser" === c.mode
                },
                send_custom_headers: function(e) {
                    return e && "client" === c.mode
                },
                send_multipart: r.capTrue,
                slice_blob: r.capTrue,
                stream_upload: !0,
                summon_file_dialog: !1,
                upload_filesize: r.capTrue,
                use_http_method: function(t) {
                    return "client" === c.mode || !e.arrayDiff(t, ["GET", "POST"])
                }
            }, {
                return_response_headers: function(e) {
                    return e ? "client" : "browser"
                },
                return_status_code: function(t) {
                    return e.arrayDiff(t, [200, 404]) ? "client" : ["client", "browser"]
                },
                send_browser_cookies: function(e) {
                    return e ? "browser" : "client"
                },
                send_custom_headers: function(e) {
                    return e ? "client" : "browser"
                },
                use_http_method: function(t) {
                    return e.arrayDiff(t, ["GET", "POST"]) ? "client" : ["client", "browser"]
                }
            }), o("2.0.31005.0") && "Opera" !== t.browser || (this.mode = !1), e.extend(this, {
                getShim: function() {
                    return n.get(this.uid).content.Moxie
                },
                shimExec: function(e, t) {
                    var n = [].slice.call(arguments, 2);
                    return c.getShim().exec(this.uid, e, t, n)
                },
                init: function() {
                    var e;
                    e = this.getShimContainer(), e.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;">' + '<param name="source" value="' + a.xap_url + '"/>' + '<param name="background" value="Transparent"/>' + '<param name="windowless" value="true"/>' + '<param name="enablehtmlaccess" value="true"/>' + '<param name="initParams" value="uid=' + this.uid + ",target=" + t.global_event_dispatcher + '"/>' + "</object>", l = setTimeout(function() {
                        c && !c.initialized && c.trigger("Error", new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR))
                    }, "Windows" !== t.OS ? 1e4 : 5e3)
                },
                destroy: function(e) {
                    return function() {
                        e.call(c), clearTimeout(l), a = l = e = c = null
                    }
                }(this.destroy)
            }, u)
        }
        var s = "silverlight",
            u = {};
        return r.addConstructor(s, a), u
    }), i(et, [Q, u, V], function(e, t, n) {
        return e.Blob = t.extend({}, n)
    }), i(tt, [Q], function(e) {
        var t = {
            init: function(e) {
                function t(e) {
                    for (var t = "", n = 0; n < e.length; n++) t += ("" !== t ? "|" : "") + e[n].title + " | *." + e[n].extensions.replace(/,/g, ";*.");
                    return t
                }
                this.getRuntime().shimExec.call(this, "FileInput", "init", t(e.accept), e.name, e.multiple), this.trigger("ready")
            }
        };
        return e.FileInput = t
    }), i(nt, [Q, f, L], function(e, t, n) {
        var i = {
            init: function() {
                var e = this,
                    i = e.getRuntime(),
                    r;
                return r = i.getShimContainer(), n.addEvent(r, "dragover", function(e) {
                    e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "copy"
                }, e.uid), n.addEvent(r, "dragenter", function(e) {
                    e.preventDefault();
                    var n = t.get(i.uid).dragEnter(e);
                    n && e.stopPropagation()
                }, e.uid), n.addEvent(r, "drop", function(e) {
                    e.preventDefault();
                    var n = t.get(i.uid).dragDrop(e);
                    n && e.stopPropagation()
                }, e.uid), i.shimExec.call(this, "FileDrop", "init")
            }
        };
        return e.FileDrop = i
    }), i(it, [Q, u, Y], function(e, t, n) {
        return e.FileReader = t.extend({}, n)
    }), i(rt, [Q, u, $], function(e, t, n) {
        return e.FileReaderSync = t.extend({}, n)
    }), i(ot, [Q, u, J], function(e, t, n) {
        return e.XMLHttpRequest = t.extend({}, n)
    }), i(at, [Q, u, Z], function(e, t, n) {
        return e.Transporter = t.extend({}, n)
    }), i(st, [Q, u, K], function(e, t, n) {
        return e.Image = t.extend({}, n, {
            getInfo: function() {
                var e = this.getRuntime(),
                    n = ["tiff", "exif", "gps"],
                    i = {
                        meta: {}
                    },
                    r = e.shimExec.call(this, "Image", "getInfo");
                return r.meta && t.each(n, function(e) {
                    var t = r.meta[e],
                        n, o, a, s;
                    if (t && t.keys)
                        for (i.meta[e] = {}, o = 0, a = t.keys.length; a > o; o++) n = t.keys[o], s = t[n], s && (/^(\d|[1-9]\d+)$/.test(s) ? s = parseInt(s, 10) : /^\d*\.\d+$/.test(s) && (s = parseFloat(s)), i.meta[e][n] = s)
                }), i.width = parseInt(r.width, 10), i.height = parseInt(r.height, 10), i.size = parseInt(r.size, 10), i.type = r.type, i.name = r.name, i
            }
        })
    }), i(ut, [u, p, g, d], function(e, t, n, i) {
        function r(t) {
            var r = this,
                s = n.capTest,
                u = n.capTrue;
            n.call(this, t, o, {
                access_binary: s(window.FileReader || window.File && File.getAsDataURL),
                access_image_binary: !1,
                display_media: s(a.Image && (i.can("create_canvas") || i.can("use_data_uri_over32kb"))),
                do_cors: !1,
                drag_and_drop: !1,
                filter_by_extension: s(function() {
                    return "Chrome" === i.browser && i.version >= 28 || "IE" === i.browser && i.version >= 10
                }()),
                resize_image: function() {
                    return a.Image && r.can("access_binary") && i.can("create_canvas")
                },
                report_upload_progress: !1,
                return_response_headers: !1,
                return_response_type: function(t) {
                    return "json" === t && window.JSON ? !0 : !!~e.inArray(t, ["text", "document", ""])
                },
                return_status_code: function(t) {
                    return !e.arrayDiff(t, [200, 404])
                },
                select_file: function() {
                    return i.can("use_fileinput")
                },
                select_multiple: !1,
                send_binary_string: !1,
                send_custom_headers: !1,
                send_multipart: !0,
                slice_blob: !1,
                stream_upload: function() {
                    return r.can("select_file")
                },
                summon_file_dialog: s(function() {
                    return "Firefox" === i.browser && i.version >= 4 || "Opera" === i.browser && i.version >= 12 || !!~e.inArray(i.browser, ["Chrome", "Safari"])
                }()),
                upload_filesize: u,
                use_http_method: function(t) {
                    return !e.arrayDiff(t, ["GET", "POST"])
                }
            }), e.extend(this, {
                init: function() {
                    this.trigger("Init")
                },
                destroy: function(e) {
                    return function() {
                        e.call(r), e = r = null
                    }
                }(this.destroy)
            }), e.extend(this.getShim(), a)
        }
        var o = "html4",
            a = {};
        return n.addConstructor(o, r), a
    }), i(ct, [ut, u, f, L, l, d], function(e, t, n, i, r, o) {
        function a() {
            function e() {
                var r = this,
                    l = r.getRuntime(),
                    d, f, p, h, m, g;
                g = t.guid("uid_"), d = l.getShimContainer(), a && (p = n.get(a + "_form"), p && t.extend(p.style, {
                    top: "100%"
                })), h = document.createElement("form"), h.setAttribute("id", g + "_form"), h.setAttribute("method", "post"), h.setAttribute("enctype", "multipart/form-data"), h.setAttribute("encoding", "multipart/form-data"), t.extend(h.style, {
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }), m = document.createElement("input"), m.setAttribute("id", g), m.setAttribute("type", "file"), m.setAttribute("name", c.name || "Filedata"), m.setAttribute("accept", u.join(",")), t.extend(m.style, {
                    fontSize: "999px",
                    opacity: 0
                }), h.appendChild(m), d.appendChild(h), t.extend(m.style, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }), "IE" === o.browser && o.version < 10 && t.extend(m.style, {
                    filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)"
                }), m.onchange = function() {
                    var t;
                    this.value && (t = this.files ? this.files[0] : {
                        name: this.value
                    }, s = [t], this.onchange = function() {}, e.call(r), r.bind("change", function i() {
                        var e = n.get(g),
                            t = n.get(g + "_form"),
                            o;
                        r.unbind("change", i), r.files.length && e && t && (o = r.files[0], e.setAttribute("id", o.uid), t.setAttribute("id", o.uid + "_form"), t.setAttribute("target", o.uid + "_iframe")), e = t = null
                    }, 998), m = h = null, r.trigger("change"))
                }, l.can("summon_file_dialog") && (f = n.get(c.browse_button), i.removeEvent(f, "click", r.uid), i.addEvent(f, "click", function(e) {
                    m && !m.disabled && m.click(), e.preventDefault()
                }, r.uid)), a = g, d = p = f = null
            }
            var a, s = [],
                u = [],
                c;
            t.extend(this, {
                init: function(t) {
                    var o = this,
                        a = o.getRuntime(),
                        s;
                    c = t, u = t.accept.mimes || r.extList2mimes(t.accept, a.can("filter_by_extension")), s = a.getShimContainer(),
                        function() {
                            var e, r, u;
                            e = n.get(t.browse_button), a.can("summon_file_dialog") && ("static" === n.getStyle(e, "position") && (e.style.position = "relative"), r = parseInt(n.getStyle(e, "z-index"), 10) || 1, e.style.zIndex = r, s.style.zIndex = r - 1), u = a.can("summon_file_dialog") ? e : s, i.addEvent(u, "mouseover", function() {
                                o.trigger("mouseenter")
                            }, o.uid), i.addEvent(u, "mouseout", function() {
                                o.trigger("mouseleave")
                            }, o.uid), i.addEvent(u, "mousedown", function() {
                                o.trigger("mousedown")
                            }, o.uid), i.addEvent(n.get(t.container), "mouseup", function() {
                                o.trigger("mouseup")
                            }, o.uid), e = null
                        }(), e.call(this), s = null, o.trigger({
                            type: "ready",
                            async: !0
                        })
                },
                getFiles: function() {
                    return s
                },
                disable: function(e) {
                    var t;
                    (t = n.get(a)) && (t.disabled = !!e)
                },
                destroy: function() {
                    var e = this.getRuntime(),
                        t = e.getShim(),
                        r = e.getShimContainer();
                    i.removeAllEvents(r, this.uid), i.removeAllEvents(c && n.get(c.container), this.uid), i.removeAllEvents(c && n.get(c.browse_button), this.uid), r && (r.innerHTML = ""), t.removeInstance(this.uid), a = s = u = c = r = t = null
                }
            })
        }
        return e.FileInput = a
    }), i(lt, [ut, F], function(e, t) {
        return e.FileReader = t
    }), i(dt, [ut, u, f, b, p, L, y, S], function(e, t, n, i, r, o, a, s) {
        function u() {
            function e(e) {
                var t = this,
                    i, r, a, s, u = !1;
                if (l) {
                    if (i = l.id.replace(/_iframe$/, ""), r = n.get(i + "_form")) {
                        for (a = r.getElementsByTagName("input"), s = a.length; s--;) switch (a[s].getAttribute("type")) {
                            case "hidden":
                                a[s].parentNode.removeChild(a[s]);
                                break;
                            case "file":
                                u = !0
                        }
                        a = [], u || r.parentNode.removeChild(r), r = null
                    }
                    setTimeout(function() {
                        o.removeEvent(l, "load", t.uid), l.parentNode && l.parentNode.removeChild(l);
                        var n = t.getRuntime().getShimContainer();
                        n.children.length || n.parentNode.removeChild(n), n = l = null, e()
                    }, 1)
                }
            }
            var u, c, l;
            t.extend(this, {
                send: function(d, f) {
                    function p() {
                        var n = m.getShimContainer() || document.body,
                            r = document.createElement("div");
                        r.innerHTML = '<iframe id="' + g + '_iframe" name="' + g + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>', l = r.firstChild, n.appendChild(l), o.addEvent(l, "load", function() {
                            var n;
                            try {
                                n = l.contentWindow.document || l.contentDocument || window.frames[l.id].document, /^4(0[0-9]|1[0-7]|2[2346])\s/.test(n.title) ? u = n.title.replace(/^(\d+).*$/, "$1") : (u = 200, c = t.trim(n.body.innerHTML), h.trigger({
                                    type: "progress",
                                    loaded: c.length,
                                    total: c.length
                                }), w && h.trigger({
                                    type: "uploadprogress",
                                    loaded: w.size || 1025,
                                    total: w.size || 1025
                                }))
                            } catch (r) {
                                if (!i.hasSameOrigin(d.url)) return e.call(h, function() {
                                    h.trigger("error")
                                }), void 0;
                                u = 404
                            }
                            e.call(h, function() {
                                h.trigger("load")
                            })
                        }, h.uid)
                    }
                    var h = this,
                        m = h.getRuntime(),
                        g, v, y, w;
                    if (u = c = null, f instanceof s && f.hasBlob()) {
                        if (w = f.getBlob(), g = w.uid, y = n.get(g), v = n.get(g + "_form"), !v) throw new r.DOMException(r.DOMException.NOT_FOUND_ERR)
                    } else g = t.guid("uid_"), v = document.createElement("form"), v.setAttribute("id", g + "_form"), v.setAttribute("method", d.method), v.setAttribute("enctype", "multipart/form-data"), v.setAttribute("encoding", "multipart/form-data"), v.setAttribute("target", g + "_iframe"), m.getShimContainer().appendChild(v);
                    f instanceof s && f.each(function(e, n) {
                        if (e instanceof a) y && y.setAttribute("name", n);
                        else {
                            var i = document.createElement("input");
                            t.extend(i, {
                                type: "hidden",
                                name: n,
                                value: e
                            }), y ? v.insertBefore(i, y) : v.appendChild(i)
                        }
                    }), v.setAttribute("action", d.url), p(), v.submit(), h.trigger("loadstart")
                },
                getStatus: function() {
                    return u
                },
                getResponse: function(e) {
                    if ("json" === e && "string" === t.typeOf(c) && window.JSON) try {
                        return JSON.parse(c.replace(/^\s*<pre[^>]*>/, "").replace(/<\/pre>\s*$/, ""))
                    } catch (n) {
                        return null
                    }
                    return c
                },
                abort: function() {
                    var t = this;
                    l && l.contentWindow && (l.contentWindow.stop ? l.contentWindow.stop() : l.contentWindow.document.execCommand ? l.contentWindow.document.execCommand("Stop") : l.src = "about:blank"), e.call(this, function() {
                        t.dispatchEvent("abort")
                    })
                }
            })
        }
        return e.XMLHttpRequest = u
    }), i(ft, [ut, X], function(e, t) {
        return e.Image = t
    }), a([u, c, l, d, f, p, h, m, g, v, y, w, E, _, x, R, b, T, S, A, O, I, L])
}(this);;
(function() {
    "use strict";
    var e = {},
        t = moxie.core.utils.Basic.inArray;
    return function n(r) {
        var i, s;
        for (i in r) s = typeof r[i], s === "object" && !~t(i, ["Exceptions", "Env", "Mime"]) ? n(r[i]) : s === "function" && (e[i] = r[i])
    }(window.moxie), e.Env = window.moxie.core.utils.Env, e.Mime = window.moxie.core.utils.Mime, e.Exceptions = window.moxie.core.Exceptions, window.mOxie = e, window.o || (window.o = e), e
})();
/**
 * Plupload - multi-runtime File Uploader
 * v2.1.1
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2014-01-16
 */
;
(function(e, t, n) {
    function s(e) {
        function r(e, t, r) {
            var i = {
                chunks: "slice_blob",
                jpgresize: "send_binary_string",
                pngresize: "send_binary_string",
                progress: "report_upload_progress",
                multi_selection: "select_multiple",
                dragdrop: "drag_and_drop",
                drop_element: "drag_and_drop",
                headers: "send_custom_headers",
                canSendBinary: "send_binary",
                triggerDialog: "summon_file_dialog"
            };
            i[e] ? n[i[e]] = t : r || (n[e] = t)
        }
        var t = e.required_features,
            n = {};
        return typeof t == "string" ? o.each(t.split(/\s*,\s*/), function(e) {
            r(e, !0)
        }) : typeof t == "object" ? o.each(t, function(e, t) {
            r(t, e)
        }) : t === !0 && (e.multipart || (n.send_binary_string = !0), e.chunk_size > 0 && (n.slice_blob = !0), e.resize.enabled && (n.send_binary_string = !0), o.each(e, function(e, t) {
            r(t, !!e, !0)
        })), n
    }
    var r = e.setTimeout,
        i = {},
        o = {
            VERSION: "2.1.1",
            STOPPED: 1,
            STARTED: 2,
            QUEUED: 1,
            UPLOADING: 2,
            FAILED: 4,
            DONE: 5,
            GENERIC_ERROR: -100,
            HTTP_ERROR: -200,
            IO_ERROR: -300,
            SECURITY_ERROR: -400,
            INIT_ERROR: -500,
            FILE_SIZE_ERROR: -600,
            FILE_EXTENSION_ERROR: -601,
            FILE_DUPLICATE_ERROR: -602,
            IMAGE_FORMAT_ERROR: -700,
            IMAGE_MEMORY_ERROR: -701,
            IMAGE_DIMENSIONS_ERROR: -702,
            mimeTypes: t.mimes,
            ua: t.ua,
            typeOf: t.typeOf,
            extend: t.extend,
            guid: t.guid,
            get: function(n) {
                var r = [],
                    i;
                t.typeOf(n) !== "array" && (n = [n]);
                var s = n.length;
                while (s--) i = t.get(n[s]), i && r.push(i);
                return r.length ? r : null
            },
            each: t.each,
            getPos: t.getPos,
            getSize: t.getSize,
            xmlEncode: function(e) {
                var t = {
                        "<": "lt",
                        ">": "gt",
                        "&": "amp",
                        '"': "quot",
                        "'": "#39"
                    },
                    n = /[<>&\"\']/g;
                return e ? ("" + e).replace(n, function(e) {
                    return t[e] ? "&" + t[e] + ";" : e
                }) : e
            },
            toArray: t.toArray,
            inArray: t.inArray,
            addI18n: t.addI18n,
            translate: t.translate,
            isEmptyObj: t.isEmptyObj,
            hasClass: t.hasClass,
            addClass: t.addClass,
            removeClass: t.removeClass,
            getStyle: t.getStyle,
            addEvent: t.addEvent,
            removeEvent: t.removeEvent,
            removeAllEvents: t.removeAllEvents,
            cleanName: function(e) {
                var t, n;
                n = [/[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g, "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u"];
                for (t = 0; t < n.length; t += 2) e = e.replace(n[t], n[t + 1]);
                return e = e.replace(/\s+/g, "_"), e = e.replace(/[^a-z0-9_\-\.]+/gi, ""), e
            },
            buildUrl: function(e, t) {
                var n = "";
                return o.each(t, function(e, t) {
                    n += (n ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(e)
                }), n && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e
            },
            formatSize: function(e) {
                function t(e, t) {
                    return Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
                }
                if (e === n || /\D/.test(e)) return o.translate("N/A");
                var r = Math.pow(1024, 4);
                return e > r ? t(e / r, 1) + " " + o.translate("tb") : e > (r /= 1024) ? t(e / r, 1) + " " + o.translate("gb") : e > (r /= 1024) ? t(e / r, 1) + " " + o.translate("mb") : e > 1024 ? Math.round(e / 1024) + " " + o.translate("kb") : e + " " + o.translate("b")
            },
            parseSize: t.parseSizeStr,
            predictRuntime: function(e, n) {
                var r, i;
                return r = new o.Uploader(e), i = t.Runtime.thatCan(r.getOption().required_features, n || e.runtimes), r.destroy(), i
            },
            addFileFilter: function(e, t) {
                i[e] = t
            }
        };
    o.addFileFilter("mime_types", function(e, t, n) {
        e.length && !e.regexp.test(t.name) ? (this.trigger("Error", {
            code: o.FILE_EXTENSION_ERROR,
            message: o.translate("File extension error."),
            file: t
        }), n(!1)) : n(!0)
    }), o.addFileFilter("max_file_size", function(e, t, n) {
        var r;
        e = o.parseSize(e), t.size !== r && e && t.size > e ? (this.trigger("Error", {
            code: o.FILE_SIZE_ERROR,
            message: o.translate("File size error."),
            file: t
        }), n(!1)) : n(!0)
    }), o.addFileFilter("prevent_duplicates", function(e, t, n) {
        if (e) {
            var r = this.files.length;
            while (r--)
                if (t.name === this.files[r].name && t.size === this.files[r].size) {
                    this.trigger("Error", {
                        code: o.FILE_DUPLICATE_ERROR,
                        message: o.translate("Duplicate file error."),
                        file: t
                    }), n(!1);
                    return
                }
        }
        n(!0)
    }), o.Uploader = function(e) {
        function g() {
            var e, t = 0,
                n;
            if (this.state == o.STARTED) {
                for (n = 0; n < f.length; n++) !e && f[n].status == o.QUEUED ? (e = f[n], this.trigger("BeforeUpload", e) && (e.status = o.UPLOADING, this.trigger("UploadFile", e))) : t++;
                t == f.length && (this.state !== o.STOPPED && (this.state = o.STOPPED, this.trigger("StateChanged")), this.trigger("UploadComplete", f))
            }
        }

        function y(e) {
            e.percent = e.size > 0 ? Math.ceil(e.loaded / e.size * 100) : 100, b()
        }

        function b() {
            var e, t;
            d.reset();
            for (e = 0; e < f.length; e++) t = f[e], t.size !== n ? (d.size += t.origSize, d.loaded += t.loaded * t.origSize / t.size) : d.size = n, t.status == o.DONE ? d.uploaded++ : t.status == o.FAILED ? d.failed++ : d.queued++;
            d.size === n ? d.percent = f.length > 0 ? Math.ceil(d.uploaded / f.length * 100) : 0 : (d.bytesPerSec = Math.ceil(d.loaded / ((+(new Date) - p || 1) / 1e3)), d.percent = d.size > 0 ? Math.ceil(d.loaded / d.size * 100) : 0)
        }

        function w() {
            var e = c[0] || h[0];
            return e ? e.getRuntime().uid : !1
        }

        function E(e, n) {
            if (e.ruid) {
                var r = t.Runtime.getInfo(e.ruid);
                if (r) return r.can(n)
            }
            return !1
        }

        function S() {
            this.bind("FilesAdded", C), this.bind("CancelUpload", M), this.bind("BeforeUpload", k), this.bind("UploadFile", L), this.bind("UploadProgress", A), this.bind("StateChanged", O), this.bind("QueueChanged", b), this.bind("Error", D), this.bind("FileUploaded", _), this.bind("Destroy", P)
        }

        function x(e, n) {
            var r = this,
                i = 0,
                s = [],
                u = {
                    accept: e.filters.mime_types,
                    runtime_order: e.runtimes,
                    required_caps: e.required_features,
                    preferred_caps: l,
                    swf_url: e.flash_swf_url,
                    xap_url: e.silverlight_xap_url
                };
            o.each(e.runtimes.split(/\s*,\s*/), function(t) {
                e[t] && (u[t] = e[t])
            }), e.browse_button && o.each(e.browse_button, function(n) {
                s.push(function(s) {
                    var a = new t.FileInput(o.extend({}, u, {
                        name: e.file_data_name,
                        multiple: e.multi_selection,
                        container: e.container,
                        browse_button: n
                    }));
                    a.onready = function() {
                        var e = t.Runtime.getInfo(this.ruid);
                        t.extend(r.features, {
                            chunks: e.can("slice_blob"),
                            multipart: e.can("send_multipart"),
                            multi_selection: e.can("select_multiple")
                        }), i++, c.push(this), s()
                    }, a.onchange = function() {
                        r.addFile(this.files)
                    }, a.bind("mouseenter mouseleave mousedown mouseup", function(r) {
                        v || (e.browse_button_hover && ("mouseenter" === r.type ? t.addClass(n, e.browse_button_hover) : "mouseleave" === r.type && t.removeClass(n, e.browse_button_hover)), e.browse_button_active && ("mousedown" === r.type ? t.addClass(n, e.browse_button_active) : "mouseup" === r.type && t.removeClass(n, e.browse_button_active)))
                    }), a.bind("error runtimeerror", function() {
                        a = null, s()
                    }), a.init()
                })
            }), e.drop_element && o.each(e.drop_element, function(e) {
                s.push(function(n) {
                    var s = new t.FileDrop(o.extend({}, u, {
                        drop_zone: e
                    }));
                    s.onready = function() {
                        var e = t.Runtime.getInfo(this.ruid);
                        r.features.dragdrop = e.can("drag_and_drop"), i++, h.push(this), n()
                    }, s.ondrop = function() {
                        r.addFile(this.files)
                    }, s.bind("error runtimeerror", function() {
                        s = null, n()
                    }), s.init()
                })
            }), t.inSeries(s, function() {
                typeof n == "function" && n(i)
            })
        }

        function T(e, n, r) {
            var i = new t.Image;
            try {
                i.onload = function() {
                    i.downsize(n.width, n.height, n.crop, n.preserve_headers)
                }, i.onresize = function() {
                    r(this.getAsBlob(e.type, n.quality)), this.destroy()
                }, i.onerror = function() {
                    r(e)
                }, i.load(e)
            } catch (s) {
                r(e)
            }
        }

        function N(e, n, r) {
            function f(e, t, n) {
                var r = a[e];
                switch (e) {
                    case "max_file_size":
                        e === "max_file_size" && (a.max_file_size = a.filters.max_file_size = t);
                        break;
                    case "chunk_size":
                        if (t = o.parseSize(t)) a[e] = t;
                        break;
                    case "filters":
                        o.typeOf(t) === "array" && (t = {
                            mime_types: t
                        }), n ? o.extend(a.filters, t) : a.filters = t, t.mime_types && (a.filters.mime_types.regexp = function(e) {
                            var t = [];
                            return o.each(e, function(e) {
                                o.each(e.extensions.split(/,/), function(e) {
                                    /^\s*\*\s*$/.test(e) ? t.push("\\.*") : t.push("\\." + e.replace(new RegExp("[" + "/^$.*+?|()[]{}\\".replace(/./g, "\\$&") + "]", "g"), "\\$&"))
                                })
                            }), new RegExp("(" + t.join("|") + ")$", "i")
                        }(a.filters.mime_types));
                        break;
                    case "resize":
                        n ? o.extend(a.resize, t, {
                            enabled: !0
                        }) : a.resize = t;
                        break;
                    case "prevent_duplicates":
                        a.prevent_duplicates = a.filters.prevent_duplicates = !!t;
                        break;
                    case "browse_button":
                    case "drop_element":
                        t = o.get(t);
                    case "container":
                    case "runtimes":
                    case "multi_selection":
                    case "flash_swf_url":
                    case "silverlight_xap_url":
                        a[e] = t, n || (u = !0);
                        break;
                    default:
                        a[e] = t
                }
                n || i.trigger("OptionChanged", e, t, r)
            }
            var i = this,
                u = !1;
            typeof e == "object" ? o.each(e, function(e, t) {
                f(t, e, r)
            }) : f(e, n, r), r ? (a.required_features = s(o.extend({}, a)), l = s(o.extend({}, a, {
                required_features: !0
            }))) : u && (i.trigger("Destroy"), x.call(i, a, function(e) {
                e ? (i.runtime = t.Runtime.getInfo(w()).type, i.trigger("Init", {
                    runtime: i.runtime
                }), i.trigger("PostInit")) : i.trigger("Error", {
                    code: o.INIT_ERROR,
                    message: o.translate("Init error.")
                })
            }))
        }

        function C(e, t) {
            [].push.apply(f, t), e.trigger("QueueChanged"), e.refresh()
        }

        function k(e, t) {
            if (a.unique_names) {
                var n = t.name.match(/\.([^.]+)$/),
                    r = "part";
                n && (r = n[1]), t.target_name = t.id + "." + r
            }
        }

        function L(e, n) {
            function h() {
                u-- > 0 ? r(p, 1e3) : (n.loaded = f, e.trigger("Error", {
                    code: o.HTTP_ERROR,
                    message: o.translate("HTTP Error."),
                    file: n,
                    response: m.responseText,
                    status: m.status,
                    responseHeaders: m.getAllResponseHeaders()
                }))
            }

            function p() {
                var d, v, g, y;
                if (n.status == o.DONE || n.status == o.FAILED || e.state == o.STOPPED) return;
                g = {
                    name: n.target_name || n.name
                }, s && a.chunks && c.size > s ? (y = Math.min(s, c.size - f), d = c.slice(f, f + y)) : (y = c.size, d = c), s && a.chunks && (e.settings.send_chunk_number ? (g.chunk = Math.ceil(f / s), g.chunks = Math.ceil(c.size / s)) : (g.offset = f, g.total = c.size)), m = new t.XMLHttpRequest, m.upload && (m.upload.onprogress = function(t) {
                    n.loaded = Math.min(n.size, f + t.loaded), e.trigger("UploadProgress", n)
                }), m.onload = function() {
                    if (m.status >= 400) {
                        h();
                        return
                    }
                    u = e.settings.max_retries, y < c.size ? (d.destroy(), f += y, n.loaded = Math.min(f, c.size), e.trigger("ChunkUploaded", n, {
                        offset: n.loaded,
                        total: c.size,
                        response: m.responseText,
                        status: m.status,
                        responseHeaders: m.getAllResponseHeaders()
                    }), t.Env.browser === "Android Browser" && e.trigger("UploadProgress", n)) : n.loaded = n.size, d = v = null, !f || f >= c.size ? (n.size != n.origSize && (c.destroy(), c = null), e.trigger("UploadProgress", n), n.status = o.DONE, e.trigger("FileUploaded", n, {
                        response: m.responseText,
                        status: m.status,
                        responseHeaders: m.getAllResponseHeaders()
                    })) : r(p, 1)
                }, m.onerror = function() {
                    h()
                }, m.onloadend = function() {
                    this.destroy(), m = null
                }, e.settings.multipart && a.multipart ? (g.name = n.target_name || n.name, m.open("post", i, !0), o.each(e.settings.headers, function(e, t) {
                    m.setRequestHeader(t, e)
                }), v = new t.FormData, o.each(o.extend(g, e.settings.multipart_params), function(e, t) {
                    v.append(t, e)
                }), v.append(e.settings.file_data_name, d), m.send(v, {
                    runtime_order: e.settings.runtimes,
                    required_caps: e.settings.required_features,
                    preferred_caps: l,
                    swf_url: e.settings.flash_swf_url,
                    xap_url: e.settings.silverlight_xap_url
                })) : (i = o.buildUrl(e.settings.url, o.extend(g, e.settings.multipart_params)), m.open("post", i, !0), m.setRequestHeader("Content-Type", "application/octet-stream"), o.each(e.settings.headers, function(e, t) {
                    m.setRequestHeader(t, e)
                }), m.send(d, {
                    runtime_order: e.settings.runtimes,
                    required_caps: e.settings.required_features,
                    preferred_caps: l,
                    swf_url: e.settings.flash_swf_url,
                    xap_url: e.settings.silverlight_xap_url
                }))
            }
            var i = e.settings.url,
                s = e.settings.chunk_size,
                u = e.settings.max_retries,
                a = e.features,
                f = 0,
                c;
            n.loaded && (f = n.loaded = s * Math.floor(n.loaded / s)), c = n.getSource(), e.settings.resize.enabled && E(c, "send_binary_string") && !!~t.inArray(c.type, ["image/jpeg", "image/png"]) ? T.call(this, c, e.settings.resize, function(e) {
                c = e, n.size = e.size, p()
            }) : p()
        }

        function A(e, t) {
            y(t)
        }

        function O(e) {
            if (e.state == o.STARTED) p = +(new Date);
            else if (e.state == o.STOPPED)
                for (var t = e.files.length - 1; t >= 0; t--) e.files[t].status == o.UPLOADING && (e.files[t].status = o.QUEUED, b())
        }

        function M() {
            m && m.abort()
        }

        function _(e) {
            b(), r(function() {
                g.call(e)
            }, 1)
        }

        function D(e, t) {
            t.file && (t.file.status = o.FAILED, y(t.file), e.state == o.STARTED && (e.trigger("CancelUpload"), r(function() {
                g.call(e)
            }, 1)))
        }

        function P(e) {
            e.stop(), o.each(f, function(e) {
                e.destroy()
            }), f = [], c.length && (o.each(c, function(e) {
                e.destroy()
            }), c = []), h.length && (o.each(h, function(e) {
                e.destroy()
            }), h = []), l = {}, v = !1, p = m = null, d.reset()
        }
        var u = o.guid(),
            a, f = [],
            l = {},
            c = [],
            h = [],
            p, d, v = !1,
            m;
        a = {
            runtimes: t.Runtime.order,
            max_retries: 0,
            chunk_size: 0,
            multipart: !0,
            multi_selection: !0,
            file_data_name: "file",
            flash_swf_url: "js/Moxie.swf",
            silverlight_xap_url: "js/Moxie.xap",
            filters: {
                mime_types: [],
                prevent_duplicates: !1,
                max_file_size: 0
            },
            resize: {
                enabled: !1,
                preserve_headers: !0,
                crop: !1
            },
            send_chunk_number: !0
        }, N.call(this, e, null, !0), d = new o.QueueProgress, o.extend(this, {
            id: u,
            uid: u,
            state: o.STOPPED,
            features: {},
            runtime: null,
            files: f,
            settings: a,
            total: d,
            init: function() {
                var e = this;
                typeof a.preinit == "function" ? a.preinit(e) : o.each(a.preinit, function(t, n) {
                    e.bind(n, t)
                });
                if (!a.browse_button || !a.url) {
                    this.trigger("Error", {
                        code: o.INIT_ERROR,
                        message: o.translate("Init error.")
                    });
                    return
                }
                S.call(this), x.call(this, a, function(n) {
                    typeof a.init == "function" ? a.init(e) : o.each(a.init, function(t, n) {
                        e.bind(n, t)
                    }), n ? (e.runtime = t.Runtime.getInfo(w()).type, e.trigger("Init", {
                        runtime: e.runtime
                    }), e.trigger("PostInit")) : e.trigger("Error", {
                        code: o.INIT_ERROR,
                        message: o.translate("Init error.")
                    })
                })
            },
            setOption: function(e, t) {
                N.call(this, e, t, !this.runtime)
            },
            getOption: function(e) {
                return e ? a[e] : a
            },
            refresh: function() {
                c.length && o.each(c, function(e) {
                    e.trigger("Refresh")
                }), this.trigger("Refresh")
            },
            start: function() {
                this.state != o.STARTED && (this.state = o.STARTED, this.trigger("StateChanged"), g.call(this))
            },
            stop: function() {
                this.state != o.STOPPED && (this.state = o.STOPPED, this.trigger("StateChanged"), this.trigger("CancelUpload"))
            },
            disableBrowse: function() {
                v = arguments[0] !== n ? arguments[0] : !0, c.length && o.each(c, function(e) {
                    e.disable(v)
                }), this.trigger("DisableBrowse", v)
            },
            getFile: function(e) {
                var t;
                for (t = f.length - 1; t >= 0; t--)
                    if (f[t].id === e) return f[t]
            },
            addFile: function(e, n) {
                function l(e, n) {
                    var r = [];
                    t.each(s.settings.filters, function(t, n) {
                        i[n] && r.push(function(r) {
                            i[n].call(s, t, e, function(e) {
                                r(!e)
                            })
                        })
                    }), t.inSeries(r, n)
                }

                function c(e) {
                    var i = t.typeOf(e);
                    if (e instanceof t.File) {
                        if (!e.ruid && !e.isDetached()) {
                            if (!f) return !1;
                            e.ruid = f, e.connectRuntime(f)
                        }
                        c(new o.File(e))
                    } else e instanceof t.Blob ? (c(e.getSource()), e.destroy()) : e instanceof o.File ? (n && (e.name = n), u.push(function(t) {
                        l(e, function(n) {
                            n || (a.push(e), s.trigger("FileFiltered", e)), r(t, 1)
                        })
                    })) : t.inArray(i, ["file", "blob"]) !== -1 ? c(new t.File(null, e)) : i === "node" && t.typeOf(e.files) === "filelist" ? t.each(e.files, c) : i === "array" && (n = null, t.each(e, c))
                }
                var s = this,
                    u = [],
                    a = [],
                    f;
                f = w(), c(e), u.length && t.inSeries(u, function() {
                    a.length && s.trigger("FilesAdded", a)
                })
            },
            removeFile: function(e) {
                var t = typeof e == "string" ? e : e.id;
                for (var n = f.length - 1; n >= 0; n--)
                    if (f[n].id === t) return this.splice(n, 1)[0]
            },
            splice: function(e, t) {
                var r = f.splice(e === n ? 0 : e, t === n ? f.length : t),
                    i = !1;
                return this.state == o.STARTED && (i = !0, this.stop()), this.trigger("FilesRemoved", r), o.each(r, function(e) {
                    e.destroy()
                }), this.trigger("QueueChanged"), this.refresh(), i && this.start(), r
            },
            bind: function(e, t, n) {
                var r = this;
                o.Uploader.prototype.bind.call(this, e, function() {
                    var e = [].slice.call(arguments);
                    return e.splice(0, 1, r), t.apply(this, e)
                }, 0, n)
            },
            destroy: function() {
                this.trigger("Destroy"), a = d = null, this.unbindAll()
            }
        })
    }, o.Uploader.prototype = t.EventTarget.instance, o.File = function() {
        function n(n) {
            o.extend(this, {
                id: o.guid(),
                name: n.name || n.fileName,
                type: n.type || "",
                size: n.size || n.fileSize,
                origSize: n.size || n.fileSize,
                loaded: 0,
                percent: 0,
                status: o.QUEUED,
                lastModifiedDate: n.lastModifiedDate || (new Date).toLocaleString(),
                getNative: function() {
                    var e = this.getSource().getSource();
                    return t.inArray(t.typeOf(e), ["blob", "file"]) !== -1 ? e : null
                },
                getSource: function() {
                    return e[this.id] ? e[this.id] : null
                },
                destroy: function() {
                    var t = this.getSource();
                    t && (t.destroy(), delete e[this.id])
                }
            }), e[this.id] = n
        }
        var e = {};
        return n
    }(), o.QueueProgress = function() {
        var e = this;
        e.size = 0, e.loaded = 0, e.uploaded = 0, e.failed = 0, e.queued = 0, e.percent = 0, e.bytesPerSec = 0, e.reset = function() {
            e.size = e.loaded = e.uploaded = e.failed = e.queued = e.percent = e.bytesPerSec = 0
        }
    }, e.plupload = o
})(window, mOxie);
var JSON;
JSON || (JSON = {}),
    function() {
        "use strict";

        function f(a) {
            return 10 > a ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g, h = gap,
                i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length, c = 0; f > c; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    else
                        for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c)
                for (d = 0; c > d; d += 1) indent += " ";
            else "string" == typeof c && (indent = c);
            if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
            return str("", {
                "": a
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e)
                    for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }();