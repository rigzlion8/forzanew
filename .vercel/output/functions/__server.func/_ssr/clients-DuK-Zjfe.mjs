import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./page-shell-CVxFGxmk.mjs";
const sectors = [{
  name: "Banking & Finance",
  clients: ["Equity Bank", "KCB Group", "Stanbic", "Co-operative Bank"]
}, {
  name: "Retail",
  clients: ["Tuskys", "Naivas", "Carrefour", "Quickmart"]
}, {
  name: "NGO & Diplomatic",
  clients: ["World Food Programme", "UNHCR", "Pathfinder International", "Save the Children"]
}, {
  name: "Hospitality",
  clients: ["Serena Hotels", "Sarova", "Fairmont", "Hemingways"]
}, {
  name: "Industrial",
  clients: ["Mandela Auto Spares", "Mashru Ltd", "Bidco", "EABL"]
}, {
  name: "Telecom & Tech",
  clients: ["Safaricom", "Airtel", "Liquid Telecom", "Telkom"]
}];
function Clients() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { title: "Our Clients", subtitle: "We are proud to safeguard the operations of Kenya's most respected organizations." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: sectors.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t-2 border-gold bg-secondary p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-4", children: s.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-muted-foreground", children: s.clients.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "›" }),
        c
      ] }, c)) })
    ] }, s.name)) }) })
  ] });
}
export {
  Clients as component
};
