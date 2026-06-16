import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./page-shell-CVxFGxmk.mjs";
import { c as MapPin, P as Phone, M as Mail, d as Clock } from "../_libs/lucide-react.mjs";
function Contacts() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { title: "Contact Us", subtitle: "Our team is ready to help. Reach out for a quote, a question or a 24/7 response." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: [{
        Icon: MapPin,
        t: "Head Office",
        d: "Industrial Area, Nairobi, Kenya"
      }, {
        Icon: Phone,
        t: "24/7 Control Room",
        d: "+254 737 033 727"
      }, {
        Icon: Mail,
        t: "Email Us",
        d: "forzasec.ke@gmail.com"
      }, {
        Icon: Clock,
        t: "Office Hours",
        d: "Mon–Fri: 8:00 AM – 5:00 PM"
      }].map(({
        Icon,
        t,
        d
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 items-start border-l-2 border-gold pl-5 py-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-gold mt-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: d })
        ] })
      ] }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "bg-secondary p-8 border-t-2 border-gold space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: "Request a Quote" }),
        sent ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink bg-gold/30 p-4", children: "Thank you — we'll be in touch shortly." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Full Name", className: "w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "Email Address", className: "w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Phone Number", className: "w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, placeholder: "Tell us about your security needs", className: "w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-gold w-full", children: "Send Request" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Contacts as component
};
