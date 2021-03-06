google.maps.__gjsload__('search_impl', function(_) {
    var H$ = function(a) {
            _.D(this, a, 4)
        },
        iqa = function(a) {
            I$ || (I$ = {
                T: "sssM",
                $: ["ss"]
            });
            var b = I$;
            return _.Fi.g(a.Oa(), b)
        },
        jqa = function(a, b) {
            a.g[0] = b
        },
        kqa = function(a, b) {
            a.g[2] = b
        },
        J$ = function(a) {
            _.D(this, a, 3)
        },
        K$ = function() {
            var a = _.pk,
                b = _.gj;
            this.i = _.I;
            this.g = _.pm(_.Nu, a, _.Ov + "/maps/api/js/LayersService.GetFeature", b)
        },
        nqa = function(a, b, c) {
            var d = _.MI(new K$);
            c.Bj = (0, _.y)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.tV(c, _.UV(b));
            var e = [];
            e.push(_.M.addListener(c, "click", (0, _.y)(lqa, null, a)));
            _.B(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.M.addListener(c, f, (0, _.y)(mqa, null, a, f)))
            });
            e.push(_.M.addListener(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.i = e
        },
        lqa = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.ym(e, 1) ? new _.J(_.wc(e.getLocation(), 0), _.wc(e.getLocation(), 1)) : null;
                f.fields = {};
                for (var g = 0, h = _.Cc(e, 2); g < h; ++g) {
                    var k = new _.hW(_.Bc(e, 2, g));
                    f.fields[k.getKey()] = k.hb()
                }
            }
            _.M.trigger(a, "click", b, c, d, f)
        },
        mqa = function(a,
            b, c, d, e, f, g) {
            var h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.M.trigger(a, b, c, d, e, h, g)
        },
        L$ = function() {},
        I$;
    _.A(H$, _.C);
    H$.prototype.getParameter = function(a) {
        return new _.hW(_.Bc(this, 3, a))
    };
    _.A(J$, _.C);
    J$.prototype.getStatus = function() {
        return _.vc(this, 0, -1)
    };
    J$.prototype.getLocation = function() {
        return new _.On(this.g[1])
    };
    K$.prototype.load = function(a, b) {
        function c(g) {
            g = new J$(g);
            b(g)
        }
        var d = new H$;
        jqa(d, a.layerId.split("|")[0]);
        d.g[1] = a.g;
        kqa(d, _.le(_.me(this.i)));
        for (var e in a.parameters) {
            var f = new _.hW(_.Ac(d, 3));
            f.g[0] = e;
            f.g[1] = a.parameters[e]
        }
        a = iqa(d);
        this.g(a, c, c);
        return a
    };
    K$.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    L$.prototype.Xl = function(a) {
        if (_.gi[15]) {
            var b = a.o,
                c = a.o = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.g, b.set(b.get().Xc(a.g))) : a.g && _.VV(a.g, b) && (_.B(a.i || [], _.M.removeListener), a.i = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("geopoliticalLayer");
                b = new _.ko;
                d = d.split("|");
                b.layerId = d[0];
                for (var l = 1; l < d.length; ++l) {
                    var m = d[l].split(":");
                    b.parameters[m[0]] = m[1]
                }
                e && (b.spotlightDescription = new _.Ps(e));
                f && (b.paintExperimentIds =
                    f.slice(0));
                g && (b.styler = new _.no(g));
                h && (b.mapsApiLayer = new _.Em(h));
                b.eg = new _.Dm(k);
                a.g = b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = c.__gm.g, a.set(_.$m(a.get(), b))) : nqa(a, c, b);
                _.P(c, "Lg")
            }
        }
    };
    _.If("search_impl", new L$);
});