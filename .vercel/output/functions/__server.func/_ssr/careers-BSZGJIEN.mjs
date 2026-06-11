import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero, S as Section } from "./page-shell-CVxFGxmk.mjs";
import { d as MapPin, B as Briefcase } from "../_libs/lucide-react.mjs";
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
const jobs = [{
  t: "Security Officer",
  loc: "Nairobi, Kenya",
  type: "Full-time"
}, {
  t: "Control Room Operator",
  loc: "Nairobi, Kenya",
  type: "Shift"
}, {
  t: "Armed Response Driver",
  loc: "Mombasa, Kenya",
  type: "Full-time"
}, {
  t: "Operations Supervisor",
  loc: "Nakuru, Kenya",
  type: "Full-time"
}, {
  t: "Sales Executive",
  loc: "Mombasa, Kenya",
  type: "Full-time"
}, {
  t: "CCTV Technician",
  loc: "Kisumu, Kenya",
  type: "Full-time"
}];
function Careers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { title: "Careers", subtitle: "Join a team that takes pride in protecting people, property and possibility." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: jobs.map((j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 border border-border p-6 hover:border-gold transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg", children: j.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 text-xs text-muted-foreground mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 text-gold" }),
            j.loc
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3 w-3 text-gold" }),
            j.type
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contacts", className: "btn-gold-outline text-ink hover:bg-gold", children: "Apply" })
    ] }, j.t)) }) })
  ] });
}
export {
  Careers as component
};
