google.maps.__gjsload__('overlay', function(_) {
    var Ly = function(a) {
            this.g = a
        },
        bba = function() {},
        My = function(a) {
            a.Uh = a.Uh || new bba;
            return a.Uh
        },
        Ny = function(a) {
            this.Ha = new _.Hi(function() {
                var b = a.Uh;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.kh && a.onAdd) a.onAdd();
                        b.kh = !0;
                        a.draw()
                    }
                } else {
                    if (b.kh)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.kh = !1
                }
            }, 0)
        },
        cba = function(a, b) {
            function c() {
                return _.Ii(e.Ha)
            }
            var d = My(a),
                e = d.zg;
            e || (e = d.zg = new Ny(a));
            _.B(d.Da || [], _.M.removeListener);
            var f = d.Ka = d.Ka || new _.zv,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.jk = d.jk || new Ly(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Da = [_.M.addListener(a, "panes_changed", c), _.M.addListener(g, "zoom_changed", c), _.M.addListener(g, "offset_changed", c), _.M.addListener(b, "projection_changed", c), _.M.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.bg && (_.P(b, "Ox"),
                _.$n("Ox", "-p", a))
        },
        Ry = function(a) {
            if (a) {
                var b = a.getMap();
                if (dba(a) !== b && b && b instanceof _.bg) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Oy(b, a, c.overlayLayer) : c.i.then(function(d) {
                        d = d.mb;
                        var e = new Py(b, d);
                        d.lb(e);
                        c.overlayLayer = e;
                        Qy(a);
                        Ry(a)
                    })
                }
            }
        },
        Qy = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, _.ao("Ox", "-p", b.g), b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.nd(b), b.i && (b.i = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        dba = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Oy = function(a, b, c) {
            this.map = a;
            this.g = b;
            this.j = c;
            this.i = !1;
            _.P(this.map, "Ox");
            _.$n("Ox", "-p", this.g);
            c.hd(this)
        },
        Sy = function(a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        },
        Py = function(a, b) {
            this.o = a;
            this.j = b;
            this.g = null;
            this.i = []
        };
    _.A(Ly, _.N);
    Ly.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Le(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var Ty = {};
    _.A(Ny, _.N);
    Ty.hd = function(a) {
        if (a) {
            var b = a.getMap();
            (My(a).Vj || null) !== b && (b && cba(a, b), My(a).Vj = b)
        }
    };
    Ty.nd = function(a) {
        var b = My(a),
            c = b.Ka;
        c && c.unbindAll();
        (c = b.jk) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Da && _.B(b.Da, _.M.removeListener);
        b.Da = null;
        b.zg && (b.zg.Ha.Ob(), b.zg = null);
        _.ao("Ox", "-p", a);
        delete My(a).Vj
    };
    var Uy = {};
    Oy.prototype.draw = function() {
        this.i || (this.i = !0, this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw()
    };
    Py.prototype.dispose = function() {};
    Py.prototype.Sb = function(a, b, c, d, e, f, g, h) {
        var k = this.g = this.g || new _.Pq(this.o, this.j, function() {});
        k.Sb(a, b, c, d, e, f, g, h);
        a = _.p(this.i);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Sy(b, k), b.draw()
    };
    Py.prototype.hd = function(a) {
        this.i.push(a);
        this.g && Sy(a, this.g);
        this.j.refresh()
    };
    Py.prototype.nd = function(a) {
        _.Wa(this.i, a)
    };
    Uy.hd = Ry;
    Uy.nd = Qy;
    _.If("overlay", {
        Ui: function(a) {
            if (a) {
                (0, Ty.nd)(a);
                (0, Uy.nd)(a);
                var b = a.getMap();
                b && (b instanceof _.bg ? (0, Uy.hd)(a) : (0, Ty.hd)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.Jr(a, {
                onClick: function(b) {
                    return _.er(b.event)
                },
                Ib: function(b) {
                    return _.br(b)
                },
                Vd: function(b) {
                    return _.cr(b)
                },
                Zb: function(b) {
                    return _.cr(b)
                },
                Lb: function(b) {
                    return _.dr(b)
                }
            }).Ae(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.Mf);
            a.addEventListener("contextmenu", _.Mf);
            a.addEventListener("dblclick", _.Mf);
            a.addEventListener("mousedown",
                _.Mf);
            a.addEventListener("mousemove", _.Mf);
            a.addEventListener("MSPointerDown", _.Mf);
            a.addEventListener("pointerdown", _.Mf);
            a.addEventListener("touchstart", _.Mf);
            a.addEventListener("wheel", _.Mf)
        }
    });
});