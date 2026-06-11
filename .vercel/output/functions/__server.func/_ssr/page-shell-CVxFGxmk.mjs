import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function PageHero({ title, subtitle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ink text-white py-20 border-b-2 border-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider" }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 max-w-2xl mx-auto", children: subtitle })
  ] }) });
}
function Section({ children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: `container-x py-16 ${className}`, children });
}
export {
  PageHero as P,
  Section as S
};
