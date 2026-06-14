import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./page-shell-CVxFGxmk.mjs";
import { A as Award, U as Users, f as Globe, T as Target } from "../_libs/lucide-react.mjs";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { title: "About Forza Security", subtitle: "Premium security solutions engineered for Kenya — trust, innovation and unwavering commitment to safety." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-4", children: "Who We Are" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[2px] w-12 bg-gold mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Forza Security is Kenya's premium security solutions provider delivering tailored protection services backed by professional expertise and modern technology." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "From a single guard post to nationwide armed response and integrated electronic security, we build relationships of trust that last." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [{
        Icon: Award,
        k: "10+",
        v: "Years of experience"
      }, {
        Icon: Users,
        k: "2,000+",
        v: "Security personnel"
      }, {
        Icon: Globe,
        k: "5",
        v: "Regional branches"
      }, {
        Icon: Target,
        k: "24/7",
        v: "Control room coverage"
      }].map(({
        Icon,
        k,
        v
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border p-6 hover:border-gold transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-gold mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-ink", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-1", children: v })
      ] }, v)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid md:grid-cols-3 gap-8", children: [{
      t: "Our Mission",
      d: "To provide intelligent, reliable security solutions that protect what our clients value most."
    }, {
      t: "Our Vision",
      d: "To be Kenya's most trusted and innovative premium security partner."
    }, {
      t: "Our Values",
      d: "Integrity. Excellence. Respect. Accountability. Innovation in every assignment we undertake."
    }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border-t-2 border-gold p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-3", children: c.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: c.d })
    ] }, c.t)) }) })
  ] });
}
export {
  About as component
};
