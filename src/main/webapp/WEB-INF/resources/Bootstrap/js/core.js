! function(a) {
	var b = "1.0.1",
		c = "20140701001",
		d = parseInt(b.replace(/\./g, "") + c, 16),
		e = a.document,
		f = location.hostname,
		g = {
			scriptReady: function(a, b) {
				var c = e.getElementById(a);
				c.readyState ? c.onreadystatechange = function() {
					(c.attachEvent ? "complete" === c.readyState : "loading" !== c.readyState) && (c.onreadystatechange = null, b && b())
				} : c.onload = function() {
					b && b()
				}
			},
			getScript: function(a) {
				var b = e.createElement("script");
				b.type = "text/javascript", b.charset = "utf-8", b.defer = "defer", b.async = "async", b.src = a, e.getElementsByTagName("head")[0].appendChild(b)
			},
			getComboUrl: function() {
				var a = "";
				for(var b in k) a += (0 == b ? "" : ",") + m[k[b]] + ".js";
				return l + "??" + a + "?v=" + d
			},
			returnJson: function(a) {
				return new Function("return " + a)()
			}
		},
		h = e.getElementById("coreNode"),
		i = h ? g.returnJson(h.getAttribute("data-config") || "{}") : {},
		j = i.plus ? i.plus.join(",") : "",
		k = [],
		l = "http://img2.233.com/x/",
		m = {
			sea: "sea-modules/seajs/seajs/2.2.1/sea",
			seaConfig: "sea-config",
			seaCombo: "sea-modules/seajs/seajs-combo/1.0.1/seajs-combo",
			jquery: "sea-modules/jquery/jquery/1.11.0/jquery",
			tongji: "plus/tj/1.0.0/tongji",
			global: "plus/global"
		},
		n = {
			isReady: !1,
			init: !1,
			ready: function(a) {
				if(!n.init)
					if(n.init = !0, e.addEventListener) e.addEventListener("DOMContentLoaded", function() {
						e.removeEventListener("DOMContentLoaded", arguments.callee, !1), a()
					}, !1);
					else if(e.attachEvent && (e.attachEvent("onreadystatechange", function() {
						"complete" === e.readyState && (e.detachEvent("onreadystatechange", arguments.callee), a())
					}), e.documentElement.doScroll && "undefined" == typeof window.frameElement)) {
					if(n.isReady) return;
					try {
						e.documentElement.doScroll("left")
					} catch(b) {
						return setTimeout(arguments.callee, 0), void 0
					}
					a()
				}
			}
		};
	k.push("sea"),
	k.push("seaConfig"), 
	k.push("seaCombo"), 
	/jQuery/gi.test(j) && k.push("jquery"), 
	a.document.write('<script id="JS_core" charset="utf-8" src="' + g.getComboUrl() + '"></script>'), 
	g.scriptReady("JS_core"), 
	n.ready(function() {
		/233.com/gi.test(f) && g.getScript(l + m.tongji + ".js?v=" + b)
	}), 
	a.core = {
		version: b,
		update: c,
		timestamp: d,
		utils: g,
		ready: n.ready
	}
}(window);