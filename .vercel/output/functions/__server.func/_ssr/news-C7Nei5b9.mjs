import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./page-shell-CVxFGxmk.mjs";
import { n as newsCard, s as servicesCard, a as aboutCard } from "./forzasec1.0-BlYSnPnJ.mjs";
const posts = [{
  img: newsCard,
  date: "May 2026",
  title: "Forza Security Welcomes Industry Partners to HQ",
  excerpt: "An interactive visit highlighting our role in shaping Kenya's security landscape."
}, {
  img: servicesCard,
  date: "Apr 2026",
  title: "New Armed Response Fleet Rolls Out",
  excerpt: "Modernized vehicles equipped with advanced telematics now patrol additional regions across Kenya."
}, {
  img: aboutCard,
  date: "Mar 2026",
  title: "Investing in Officer Training",
  excerpt: "Our training academy graduates officers ready to deliver premium security service."
}];
function News() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { title: "News & Insights", subtitle: "What's happening at Forza Security and across the industry." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, width: 800, height: 600, loading: "lazy", className: "aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-gold mt-5", children: p.date }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mt-2 group-hover:text-gold transition-colors", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 leading-relaxed", children: p.excerpt })
    ] }, p.title)) }) })
  ] });
}
export {
  News as component
};
