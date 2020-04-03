/*! Build a418bcbf9cdbd41bc8ae8ba37957e2d2d6580b76:1585886604271 */
!function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
            return e[t]
        }.bind(null, o));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "https://cdn.getrewardful.com/packs/", r(r.s = 121)
}({
    10: function (e, t, r) {
        var n, o;

        function a(e) {
            return (a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        !function (i) {
            var c;
            if (void 0 === (o = "function" === typeof (n = i) ? n.call(t, r, t, e) : n) || (e.exports = o), c = !0, "object" === a(t) && (e.exports = i(), c = !0), !c) {
                var u = window.Cookies, l = window.Cookies = i();
                l.noConflict = function () {
                    return window.Cookies = u, l
                }
            }
        }((function () {
            function e() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r) t[n] = r[n]
                }
                return t
            }

            function t(e) {
                return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
            }

            return function r(n) {
                function o() {
                }

                function a(t, r, a) {
                    if ("undefined" !== typeof document) {
                        "number" === typeof (a = e({path: "/"}, o.defaults, a)).expires && (a.expires = new Date(1 * new Date + 864e5 * a.expires)), a.expires = a.expires ? a.expires.toUTCString() : "";
                        try {
                            var i = JSON.stringify(r);
                            /^[\{\[]/.test(i) && (r = i)
                        } catch (l) {
                        }
                        r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                        var c = "";
                        for (var u in a) a[u] && (c += "; " + u, !0 !== a[u] && (c += "=" + a[u].split(";")[0]));
                        return document.cookie = t + "=" + r + c
                    }
                }

                function i(e, r) {
                    if ("undefined" !== typeof document) {
                        for (var o = {}, a = document.cookie ? document.cookie.split("; ") : [], i = 0; i < a.length; i++) {
                            var c = a[i].split("="), u = c.slice(1).join("=");
                            r || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                            try {
                                var l = t(c[0]);
                                if (u = (n.read || n)(u, l) || t(u), r) try {
                                    u = JSON.parse(u)
                                } catch (f) {
                                }
                                if (o[l] = u, e === l) break
                            } catch (f) {
                            }
                        }
                        return e ? o[e] : o
                    }
                }

                return o.set = a, o.get = function (e) {
                    return i(e, !1)
                }, o.getJSON = function (e) {
                    return i(e, !0)
                }, o.remove = function (t, r) {
                    a(t, "", e(r, {expires: -1}))
                }, o.defaults = {}, o.withConverter = r, o
            }((function () {
            }))
        }))
    }, 121: function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(10), o = r.n(n);

        function a(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function i(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function c(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var u = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }

            var t, r, n;
            return t = e, n = [{
                key: "set", value: function (e, t, r) {
                    return r ? (t.cookie = function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? a(Object(r), !0).forEach((function (t) {
                                i(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({}, r), r.expires && (r.expires = new Date(r.expires), delete t.cookie.expires), o.a.set(e, t, r)) : o.a.set(e, t), this.get(e)
                }
            }, {
                key: "get", value: function (e) {
                    return o.a.getJSON(e) || null
                }
            }, {
                key: "delete", value: function (e) {
                    var t = o.a.getJSON(e) || null;
                    return t && t.cookie ? o.a.remove(e, t.cookie) : o.a.remove(e)
                }
            }], (r = null) && c(t.prototype, r), n && c(t, n), e
        }();

        function l(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function f(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function s(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        var d = function () {
            return u.delete(h.storeKey)
        }, p = function (e) {
            return e.response && e.response.error ? e.response.error : e.statusText ? e.statusText : "Unknown server error."
        };

        function y(e, t, r) {
            var n = function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function (t) {
                        s(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }({}, E.metadata, {}, r), o = new XMLHttpRequest;
            return o.open(e, t), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Accept", "application/json"), o.responseType = "json", o.onload = function () {
                200 !== o.status ? (console.error("[Rewardful] Request failed: ".concat(e, " ").concat(t)), console.error("=> (".concat(o.status, "): ").concat(p(o))), d()) : (u.set(h.storeKey, o.response.referral, o.response.cookie), E._trackComplete = !0, window.dispatchEvent(new CustomEvent("Rewardful.tracked")))
            }, o.onerror = function () {
                console.error("[Rewardful] Request failed: ".concat(e, " ").concat(t))
            }, o.send(JSON.stringify(n))
        }

        var h = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }

            var t, r, n;
            return t = e, n = [{
                key: "get", value: function () {
                    return u.get(e.storeKey)
                }
            }, {
                key: "exists", value: function () {
                    var e = this.get();
                    return Boolean(e && e.id)
                }
            }, {
                key: "create", value: function (e) {
                    return y("POST", E.config.API_HOST + "/referrals", {link_token: e})
                }
            }, {
                key: "update", value: function () {
                    var t = e.get().id;
                    return t ? this.load(t) : (console.error("Referral.update() called but there is no stored referral."), d(), !1)
                }
            }, {
                key: "load", value: function (e) {
                    return y("PUT", E.config.API_HOST + "/referrals/".concat(e))
                }
            }, {
                key: "id", get: function () {
                    return (this.get() || {id: ""}).id
                }
            }, {
                key: "storeKey", get: function () {
                    return "rewardful.referral"
                }
            }, {
                key: "affiliate", get: function () {
                    return this.get() && this.get().affiliate || !1
                }
            }, {
                key: "campaign", get: function () {
                    return this.get() && this.get().campaign || !1
                }
            }, {
                key: "coupon", get: function () {
                    return this.get() && this.get().coupon || !1
                }
            }, {
                key: "domain", get: function () {
                    var e = this.get();
                    return e && e.cookie && e.cookie.domain || !1
                }
            }], (r = null) && l(t.prototype, r), n && l(t, n), e
        }(), w = function (e, t) {
            var r = new URLSearchParams(e.search.substring(1));
            Object.keys(t).forEach((function (e) {
                return r.set(e, t[e])
            })), e.search = r.toString()
        }, b = function (e) {
            try {
                return e.toLowerCase().replace(/\s/g, "").split(",").filter((function (e) {
                    return e
                }))
            } catch (t) {
                return []
            }
        }, v = function (e) {
            return document.querySelectorAll('a[href*="'.concat(e, '"]:not([data-referral])'))
        }, m = {
            addSearchParamsToLink: w, parseDomains: b, linksToDomain: v, attach: function (e) {
                var t = Rewardful.referral, r = Rewardful.domain;
                t && b(e.domains).filter((function (t) {
                    return t !== r && t !== e.location.hostname
                })).forEach((function (e) {
                    v(e).forEach((function (e) {
                        w(e, {referral: t}), e.dataset.referral = !0
                    }))
                }))
            }
        };

        function g(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function k(e, t) {
            if (e && e.match) {
                var r = (e = e.toLowerCase()).match(t);
                if (r && r[1]) return r[1]
            }
            return !1
        }

        var O = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._location = t
            }

            var t, r, n;
            return t = e, (r = [{
                key: "referral", get: function () {
                    return !(!this._location || !this._location.search) && k(this._location.search, /referral=([0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12})/i)
                }
            }, {
                key: "searchToken", get: function () {
                    return !(!this._location || !this._location.search) && k(this._location.search, /via=([a-z0-9\-]+)/i)
                }
            }, {
                key: "hashToken", get: function () {
                    return !(!this._location || !this._location.hash) && k(this._location.hash, /via-([a-z0-9\-]+)/i)
                }
            }, {
                key: "token", get: function () {
                    return this.searchToken || this.hashToken || !1
                }
            }]) && g(t.prototype, r), n && g(t, n), e
        }();

        function _(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var j = function (e, t, r) {
            var n = e.elements[t];
            return n || ((n = document.createElement("input")).name = t, e.appendChild(n)), n.type = "hidden", n.value = r, n
        }, P = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }

            var t, r, n;
            return t = e, n = [{
                key: "all", value: function () {
                    return document.querySelectorAll("form[data-rewardful]")
                }
            }, {
                key: "attach", value: function () {
                    this.all().forEach(this.add)
                }
            }, {
                key: "add", value: function (e) {
                    var t = {referral: j(e, e.dataset.rewardfulParamName || "referral", E.referral)};
                    return E.coupon && E.coupon.id && (t.coupon = j(e, "coupon", E.coupon.id)), t
                }
            }], (r = null) && _(t.prototype, r), n && _(t, n), e
        }(), S = function () {
            if ("function" === typeof window.CustomEvent) return !1;

            function e(e, t) {
                t = t || {bubbles: !1, cancelable: !1, detail: void 0};
                var r = document.createEvent("CustomEvent");
                return r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r
            }

            e.prototype = window.Event.prototype, window.CustomEvent = e
        };

        function C(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var R = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }

            var t, r, n;
            return t = e, n = [{
                key: "reset", value: function () {
                    this._apiKey = null, this._location = !1, this._tracked = !1, this._trackComplete = !1, this._link = null, this._setup = !1
                }
            }, {
                key: "setup", value: function (e) {
                    return this._setup ? (console.warn("Rewardful is already setup."), !1) : e ? e.apiKey ? e.window ? (S(), this._apiKey = e.apiKey, this._link = new O(e.window.location), this._setup = !0, this._metadata = {
                        api_key: this.apiKey,
                        location: e.window.location.toString(),
                        referrer: e.window.document && e.window.document.referrer || "",
                        title: e.window.document && e.window.document.title || ""
                    }, !0) : (console.error("Rewardful.setup requires a `window` parameter."), !1) : (console.error("Rewardful.setup requires an `apiKey` parameter."), !1) : (console.error("Rewardful.setup requires an `apiKey` and `window` parameter."), !1)
                }
            }, {
                key: "track", value: function () {
                    return this._setup ? this._tracked ? (console.warn("Rewardful.track() can only be called once."), !1) : (h.exists() ? h.update() : this.link.referral ? h.load(this.link.referral) : this.link.token && h.create(this.link.token), this._tracked = !0, !0) : (console.error("Rewardful.setup() must be called before Rewardful.track()."), !1)
                }
            }, {
                key: "tracked", get: function () {
                    return this._trackComplete
                }
            }, {
                key: "metadata", get: function () {
                    return this._metadata
                }
            }, {
                key: "link", get: function () {
                    return this._link
                }
            }, {
                key: "referral", get: function () {
                    return h.id
                }
            }, {
                key: "affiliate", get: function () {
                    return h.affiliate
                }
            }, {
                key: "campaign", get: function () {
                    return h.campaign
                }
            }, {
                key: "coupon", get: function () {
                    return h.coupon
                }
            }, {
                key: "apiKey", get: function () {
                    return this._apiKey ? this._apiKey : (console.error("Rewardful API key is not set."), !1)
                }
            }, {
                key: "domain", get: function () {
                    return h.domain
                }
            }, {
                key: "config", get: function () {
                    return {API_HOST: "https://api.getrewardful.com"}
                }
            }, {
                key: "version", get: function () {
                    return {timestamp: 1585886604271, sha: "a418bcbf9cdbd41bc8ae8ba37957e2d2d6580b76"}
                }
            }], (r = null) && C(t.prototype, r), n && C(t, n), e
        }();
        R.Forms = P, R.Links = m, R.reset();
        var E = R;
        !function () {
            if (window && window._rewardful_loaded) console.warn("Rewardful is already loaded."); else {
                window._rewardful_loaded = !0;
                try {
                    var e = document.querySelector("script[data-rewardful]");
                    if (e) {
                        E.setup({apiKey: e.getAttribute("data-rewardful"), window: window});
                        var t = function () {
                            E.Forms.attach(), E.Links.attach({
                                domains: e.getAttribute("data-domains"),
                                location: window.location
                            })
                        };
                        window.addEventListener("Rewardful.tracked", (function () {
                            t(), document.addEventListener("readystatechange", t)
                        })), E.track(), window.Rewardful = E
                    } else console.error("Could not load Rewardful: make sure the <script> tag includes data-rewardful='<API-KEY>'")
                } catch (r) {
                    console.error("Rewardful failed to initialize: ".concat(r))
                }
            }
        }()
    }
});
//# sourceMappingURL=rw.js.map