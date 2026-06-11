import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./page-shell-CVxFGxmk.mjs";
import { G as GraduationCap, H as Heart, b as Leaf, c as HandHeart } from "../_libs/lucide-react.mjs";
function CSR() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { title: "Corporate Social Responsibility", subtitle: "Giving back to the communities that have given us so much." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [{
      Icon: GraduationCap,
      t: "Education",
      d: "Scholarships and learning resources for talented students from underserved backgrounds."
    }, {
      Icon: Heart,
      t: "Health",
      d: "Sponsoring health camps and contributing to medical equipment in regional hospitals."
    }, {
      Icon: Leaf,
      t: "Environment",
      d: "Tree-planting drives and clean-up initiatives across our areas of operation."
    }, {
      Icon: HandHeart,
      t: "Empowerment",
      d: "Training and employment programs that uplift youth and women in our communities."
    }].map(({
      Icon,
      t,
      d
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 border border-border hover:border-gold transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-10 w-10 text-gold mx-auto mb-4", strokeWidth: 1.5 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-2", children: t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: d })
    ] }, t)) }) })
  ] });
}
export {
  CSR as component
};
