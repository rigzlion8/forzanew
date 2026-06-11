import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero, S as Section } from "./page-shell-CVxFGxmk.mjs";
import { k as Shield, R as Radio, l as Camera, m as Truck, n as Satellite, D as Dog, o as Package, p as Building2, q as UserCheck, B as Briefcase, r as Lock, W as Wrench } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const services = [{
  Icon: Shield,
  t: "Manned Guarding",
  d: "Highly trained uniformed officers for residential, commercial and industrial sites.",
  to: "/services/guarding"
}, {
  Icon: Radio,
  t: "Alarm Response",
  d: "24/7 control room monitoring with rapid armed response units across Kenya.",
  to: "/services/alarm-response"
}, {
  Icon: Camera,
  t: "Technical Services",
  d: "CCTV, access control, fire detection and perimeter protection for total visibility.",
  to: "/services/technical"
}, {
  Icon: Truck,
  t: "Cash in Transit",
  d: "Secure cash and valuables movement with armored vehicles and certified crews.",
  to: "/services/cash-management"
}, {
  Icon: Satellite,
  t: "Tracking",
  d: "GPS fleet and asset tracking with real-time monitoring at our 24/7 control room.",
  to: "/services/tracking"
}, {
  Icon: Dog,
  t: "K9 Security Dogs",
  d: "Trained patrol, narcotics and explosives detection dogs with expert handlers.",
  to: "/services/k9"
}, {
  Icon: Package,
  t: "Courier Services",
  d: "National and international courier, high-value manned delivery and warehousing.",
  to: "/services/courier"
}, {
  Icon: Building2,
  t: "Event Security",
  d: "From corporate gatherings to large-scale events — planned, briefed and delivered.",
  to: "/services/special"
}, {
  Icon: UserCheck,
  t: "VIP & Close Protection",
  d: "Discreet, professional executive protection for high-profile individuals.",
  to: "/services/special"
}, {
  Icon: Briefcase,
  t: "Risk Consultancy",
  d: "Threat assessment, audits, investigations and tailored security strategy.",
  to: "/services/special"
}, {
  Icon: Lock,
  t: "Home Security",
  d: "Comprehensive home security solutions for your family and property.",
  to: "/services/home-security"
}, {
  Icon: Wrench,
  t: "Workshop",
  d: "Automotive service, body repairs and 24hr recovery services.",
  to: "/services/workshop"
}];
function ServicesIndex() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { title: "Our Services", subtitle: "A complete portfolio of security solutions — engineered around your risk profile." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: services.map(({
      Icon,
      t,
      d,
      to
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "border border-border p-6 hover:border-gold transition-colors group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 bg-ink flex items-center justify-center mb-5 group-hover:bg-gold transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-gold group-hover:text-ink" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-2", children: t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: d })
    ] }, t)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ink text-white py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "Need a tailored solution?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 max-w-xl mx-auto mb-8", children: "Our specialists will assess your site and design a security plan that fits." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contacts", className: "btn-gold", children: "Request a Free Survey" })
    ] }) })
  ] });
}
export {
  ServicesIndex as component
};
