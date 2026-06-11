import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as Phone, M as Mail, F as Facebook, L as Linkedin, I as Instagram, T as Twitter, C as ChevronDown, X, a as Menu } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-DoFc4uZZ.css";
const faviconSvg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj4KICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIzIiBmaWxsPSIjMWExYTFhIi8+CiAgPHRleHQgeD0iMTYiIHk9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjIyIiBmaWxsPSIjYzlhODRjIj5GPC90ZXh0Pgo8L3N2Zz4K";
const MIN_TRANSITION_MS = 1500;
function PageLoader() {
  const [splashVisible, setSplashVisible] = reactExports.useState(false);
  const [splashFading, setSplashFading] = reactExports.useState(false);
  const [showSplash, setShowSplash] = reactExports.useState(false);
  const [transitionVisible, setTransitionVisible] = reactExports.useState(false);
  const [transitionFading, setTransitionFading] = reactExports.useState(false);
  const router = useRouter();
  const transitionStartRef = reactExports.useRef(0);
  const hideTimerRef = reactExports.useRef();
  reactExports.useEffect(() => {
    setShowSplash(true);
    setSplashVisible(true);
    const fadeTimer = setTimeout(() => setSplashFading(true), 4200);
    const hideTimer = setTimeout(() => {
      setSplashVisible(false);
      setShowSplash(false);
    }, 5e3);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  reactExports.useEffect(() => {
    const unsubBefore = router.subscribe("onBeforeNavigate", () => {
      if (showSplash) return;
      clearTimeout(hideTimerRef.current);
      transitionStartRef.current = Date.now();
      setTransitionVisible(true);
      setTransitionFading(false);
    });
    const unsubAfter = router.subscribe("onResolved", () => {
      if (showSplash) return;
      const elapsed = Date.now() - transitionStartRef.current;
      const remaining = Math.max(0, MIN_TRANSITION_MS - elapsed);
      hideTimerRef.current = setTimeout(() => {
        setTransitionFading(true);
        setTimeout(() => {
          setTransitionVisible(false);
          setTransitionFading(false);
        }, 600);
      }, remaining);
    });
    return () => {
      unsubBefore();
      unsubAfter();
    };
  }, [router, showSplash]);
  if (!splashVisible && !transitionVisible) return null;
  const isFading = splashVisible ? splashFading : transitionFading;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink transition-opacity duration-600 ${isFading ? "opacity-0" : "opacity-100"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "font-display text-4xl md:text-6xl font-bold tracking-tight",
            style: { color: "var(--gold)" },
            children: "Forza Security"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 relative flex items-center justify-center h-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-4 w-4 rounded-full bg-gold opacity-75 animate-ping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-gold" })
        ] })
      ]
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "btn-gold mt-6", children: "Go home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router = useRouter();
  reactExports.useEffect(() => {
    console.error(error);
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          router.invalidate();
          reset();
        },
        className: "btn-gold mt-6",
        children: "Try again"
      }
    )
  ] }) });
}
const Route$k = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Forza Security Premium Security Solutions for Kenya" },
      {
        name: "description",
        content: "Premium security solutions provider in Kenya offering manned guarding, alarm response, electronic security and integrated protection services."
      }
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: faviconSvg },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  {
    label: "Services",
    children: [
      { to: "/services", label: "Overview" },
      { to: "/services/guarding", label: "Manned Guarding" },
      { to: "/services/alarm-response", label: "Alarm Response" },
      { to: "/services/cctv", label: "CCTV Installation" },
      { to: "/services/tracking", label: "Fleet Tracking" },
      { to: "/services/cash-management", label: "Cash in Transit" },
      { to: "/services/technical", label: "Technical Services" },
      { to: "/services/courier", label: "Courier Services" },
      { to: "/services/k9", label: "K9 Security Dogs" },
      { to: "/services/special", label: "Special Services" },
      { to: "/services/home-security", label: "Home Security" },
      { to: "/services/workshop", label: "Workshop" }
    ]
  },
  { to: "/clients", label: "Our Clients" },
  { to: "/csr", label: "CSR" },
  { to: "/contacts", label: "Contacts" },
  { to: "/careers", label: "Careers" },
  { to: "/news", label: "News" }
];
function Header() {
  const [openDropdown, setOpenDropdown] = reactExports.useState(null);
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [mobileExpanded, setMobileExpanded] = reactExports.useState(null);
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setOpenDropdown(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 bg-background border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-ink text-white/70 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex justify-end items-center gap-2 sm:gap-4 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "tel:+254737033727",
          className: "flex items-center gap-1.5 hover:text-gold transition-colors whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 shrink-0" }),
            "+254 737 033 727"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "mailto:forzasec.ke@gmail.com",
          className: "hidden sm:flex items-center gap-1.5 hover:text-gold transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3 shrink-0" }),
            "forzasec.ke@gmail.com"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 ml-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", className: "hover:text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Linkedin", className: "hover:text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "hover:text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Twitter", className: "hover:text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-3.5 w-3.5" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex items-center justify-between py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 bg-ink flex items-center justify-center border border-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-display font-bold text-lg", children: "F" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold text-ink", children: "Forza" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.3em] text-gold uppercase", children: "Security" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-7", children: NAV.map(
        (n) => n.children ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative",
            onMouseEnter: () => setOpenDropdown(n.label),
            onMouseLeave: () => setOpenDropdown(null),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-sm font-medium text-ink hover:text-gold transition-colors uppercase tracking-wide flex items-center gap-1", children: [
                n.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3 w-3" })
              ] }),
              openDropdown === n.label && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 mt-1 bg-background border border-border shadow-lg min-w-[200px] py-2", children: n.children.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: c.to,
                  className: "block px-4 py-2 text-sm text-ink hover:bg-secondary hover:text-gold transition-colors",
                  onClick: () => setOpenDropdown(null),
                  children: c.label
                },
                c.to
              )) })
            ]
          },
          n.label
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            className: "text-sm font-medium text-ink hover:text-gold transition-colors uppercase tracking-wide",
            activeProps: { className: "text-gold" },
            activeOptions: { exact: n.to === "/" },
            children: n.label
          },
          n.to
        )
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contacts", className: "btn-gold hidden md:inline-flex", children: "Get a Quote" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": mobileOpen ? "Close menu" : "Open menu",
          className: "lg:hidden text-ink p-1",
          onClick: () => setMobileOpen(!mobileOpen),
          children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
        }
      )
    ] }),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden fixed inset-0 top-[73px] z-40 bg-ink/95 backdrop-blur-sm overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col px-6 py-6 gap-1", children: [
      NAV.map(
        (n) => n.children ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: "w-full flex items-center justify-between py-3 text-white/90 text-sm font-semibold uppercase tracking-wider border-b border-white/10",
              onClick: () => setMobileExpanded(mobileExpanded === n.label ? null : n.label),
              children: [
                n.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronDown,
                  {
                    className: `h-4 w-4 transition-transform ${mobileExpanded === n.label ? "rotate-180" : ""}`
                  }
                )
              ]
            }
          ),
          mobileExpanded === n.label && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4 py-2 space-y-1", children: n.children.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: c.to,
              className: "block py-2.5 text-white/70 text-sm hover:text-gold transition-colors",
              onClick: closeMobile,
              children: c.label
            },
            c.to
          )) })
        ] }, n.label) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            className: "py-3 text-white/90 text-sm font-semibold uppercase tracking-wider border-b border-white/10 hover:text-gold transition-colors",
            activeProps: { className: "text-gold" },
            activeOptions: { exact: n.to === "/" },
            onClick: closeMobile,
            children: n.label
          },
          n.to
        )
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-4 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/contacts",
          className: "btn-gold w-full text-center block",
          onClick: closeMobile,
          children: "Get a Quote"
        }
      ) })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-ink text-white/80 mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gold text-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-6 flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 font-semibold uppercase tracking-wide text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }),
        " Interested in our services? Get a quote today!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/contacts",
          className: "bg-ink text-gold px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-black/80 transition",
          children: "Get a Quote"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid md:grid-cols-3 gap-10 py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-gold text-lg mb-4", children: "About Forza Security" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-white/60", children: "Forza Security Premium Security Solutions for Kenya is dedicated to understanding and meeting our clients' precise requirements, fusing service, efficiency and reliability with technology-based security solutions." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-gold text-lg mb-4", children: "Useful Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: [
          ["Emergency Contacts", "/contacts"],
          ["Careers", "/careers"],
          ["Whistleblowing", "/contacts"],
          ["Privacy Policy", "/"],
          ["Site Map", "/"]
        ].map(([l, h]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: h, className: "hover:text-gold transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "›" }),
          l
        ] }) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-gold text-lg mb-4", children: "Find Us On Social Media" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [Linkedin, Facebook, Instagram, Twitter].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "h-10 w-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-5 text-center text-xs text-white/50", children: [
      "Forza Security Premium Security Solutions for Kenya | © Copyright",
      " ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " All Rights Reserved"
    ] }) })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$k.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] });
}
const $$splitComponentImporter$j = () => import("./services-CtZtiw1B.mjs");
const Route$j = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Forza Security"
    }, {
      name: "description",
      content: "Manned guarding, alarm response, electronic security and integrated risk management solutions across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./news-C9N-lZp_.mjs");
const Route$i = createFileRoute("/news")({
  head: () => ({
    meta: [{
      title: "News & Insights — Forza Security"
    }, {
      name: "description",
      content: "Latest updates, community initiatives and security industry insights from Forza Security."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./csr-8t4CGGSb.mjs");
const Route$h = createFileRoute("/csr")({
  head: () => ({
    meta: [{
      title: "Corporate Social Responsibility — Forza Security"
    }, {
      name: "description",
      content: "Investing in the communities where we operate through education, environment, health and empowerment initiatives."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./contacts-eCueTbmM.mjs");
const Route$g = createFileRoute("/contacts")({
  head: () => ({
    meta: [{
      title: "Contact Us — Forza Security"
    }, {
      name: "description",
      content: "Reach our 24/7 control room or request a free security quote. Premium security solutions across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./clients-DuK-Zjfe.mjs");
const Route$f = createFileRoute("/clients")({
  head: () => ({
    meta: [{
      title: "Our Clients — Forza Security"
    }, {
      name: "description",
      content: "Trusted by leading organizations across banking, retail, NGO, hospitality and government sectors."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./careers-BSZGJIEN.mjs");
const Route$e = createFileRoute("/careers")({
  head: () => ({
    meta: [{
      title: "Careers — Forza Security"
    }, {
      name: "description",
      content: "Build a rewarding career in security. View open positions across our branches in Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./about-BASbi-Eb.mjs");
const Route$d = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Forza Security"
    }, {
      name: "description",
      content: "Kenya's premium security solutions provider delivering world-class protection services with professional personnel and cutting-edge technology."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./index-HeJ8lOd4.mjs");
const Route$c = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Forza Security Premium Security Solutions for Kenya"
    }, {
      name: "description",
      content: "Protect what matters most. Premium guarding, alarm response and integrated security solutions across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./services.index-hZi2CFpl.mjs");
const Route$b = createFileRoute("/services/")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./services.workshop-Db2tMzKl.mjs");
const Route$a = createFileRoute("/services/workshop")({
  head: () => ({
    meta: [{
      title: "Workshop — Forza Security"
    }, {
      name: "description",
      content: "Automotive service, body fabrication, collision repairs and 24hr recovery services in Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./services.tracking-rOWv5RHB.mjs");
const Route$9 = createFileRoute("/services/tracking")({
  head: () => ({
    meta: [{
      title: "Fleet Tracking — Forza Security"
    }, {
      name: "description",
      content: "GPS fleet and asset tracking with real-time monitoring, geofencing and telematics across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./services.technical-D_YPIGX3.mjs");
const Route$8 = createFileRoute("/services/technical")({
  head: () => ({
    meta: [{
      title: "Technical Services — Forza Security"
    }, {
      name: "description",
      content: "CCTV, access control, fire detection and perimeter protection — electronic security solutions across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./services.special-D-X6z9wF.mjs");
const Route$7 = createFileRoute("/services/special")({
  head: () => ({
    meta: [{
      title: "Special Services — Forza Security"
    }, {
      name: "description",
      content: "Event security, VIP protection, security audits, investigations and tailored special services across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./services.k9-Q8oxFAmw.mjs");
const Route$6 = createFileRoute("/services/k9")({
  head: () => ({
    meta: [{
      title: "K9 Security Dogs — Forza Security"
    }, {
      name: "description",
      content: "Trained patrol, narcotics and explosives detection dogs with expert handlers across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./services.home-security-Bgmn05US.mjs");
const Route$5 = createFileRoute("/services/home-security")({
  head: () => ({
    meta: [{
      title: "Home Security — Forza Security"
    }, {
      name: "description",
      content: "Comprehensive home security solutions protecting your family, property and peace of mind across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./services.guarding-mDTtJUzj.mjs");
const Route$4 = createFileRoute("/services/guarding")({
  head: () => ({
    meta: [{
      title: "Manned Guarding — Forza Security"
    }, {
      name: "description",
      content: "Professional day and night guards, mobile patrols and diplomatic protection services across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./services.courier-BYmFIrHb.mjs");
const Route$3 = createFileRoute("/services/courier")({
  head: () => ({
    meta: [{
      title: "Courier Services — Forza Security"
    }, {
      name: "description",
      content: "Professional national and international courier services with secure warehousing and distribution across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./services.cctv-CF3OM9TH.mjs");
const Route$2 = createFileRoute("/services/cctv")({
  head: () => ({
    meta: [{
      title: "CCTV Installation — Forza Security"
    }, {
      name: "description",
      content: "Professional CCTV installation, surveillance systems and video monitoring solutions across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./services.cash-management-DiHxrB6w.mjs");
const Route$1 = createFileRoute("/services/cash-management")({
  head: () => ({
    meta: [{
      title: "Cash in Transit — Forza Security"
    }, {
      name: "description",
      content: "Secure cash-in-transit armoured transport, ATM management and cash processing services across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./services.alarm-response-DvvlwVYM.mjs");
const Route = createFileRoute("/services/alarm-response")({
  head: () => ({
    meta: [{
      title: "Alarm Response — Forza Security"
    }, {
      name: "description",
      content: "24/7 control room monitoring with rapid armed and unarmed response units across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$j.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$k
});
const NewsRoute = Route$i.update({
  id: "/news",
  path: "/news",
  getParentRoute: () => Route$k
});
const CsrRoute = Route$h.update({
  id: "/csr",
  path: "/csr",
  getParentRoute: () => Route$k
});
const ContactsRoute = Route$g.update({
  id: "/contacts",
  path: "/contacts",
  getParentRoute: () => Route$k
});
const ClientsRoute = Route$f.update({
  id: "/clients",
  path: "/clients",
  getParentRoute: () => Route$k
});
const CareersRoute = Route$e.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$k
});
const AboutRoute = Route$d.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$k
});
const IndexRoute = Route$c.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$k
});
const ServicesIndexRoute = Route$b.update({
  id: "/",
  path: "/",
  getParentRoute: () => ServicesRoute
});
const ServicesWorkshopRoute = Route$a.update({
  id: "/workshop",
  path: "/workshop",
  getParentRoute: () => ServicesRoute
});
const ServicesTrackingRoute = Route$9.update({
  id: "/tracking",
  path: "/tracking",
  getParentRoute: () => ServicesRoute
});
const ServicesTechnicalRoute = Route$8.update({
  id: "/technical",
  path: "/technical",
  getParentRoute: () => ServicesRoute
});
const ServicesSpecialRoute = Route$7.update({
  id: "/special",
  path: "/special",
  getParentRoute: () => ServicesRoute
});
const ServicesK9Route = Route$6.update({
  id: "/k9",
  path: "/k9",
  getParentRoute: () => ServicesRoute
});
const ServicesHomeSecurityRoute = Route$5.update({
  id: "/home-security",
  path: "/home-security",
  getParentRoute: () => ServicesRoute
});
const ServicesGuardingRoute = Route$4.update({
  id: "/guarding",
  path: "/guarding",
  getParentRoute: () => ServicesRoute
});
const ServicesCourierRoute = Route$3.update({
  id: "/courier",
  path: "/courier",
  getParentRoute: () => ServicesRoute
});
const ServicesCctvRoute = Route$2.update({
  id: "/cctv",
  path: "/cctv",
  getParentRoute: () => ServicesRoute
});
const ServicesCashManagementRoute = Route$1.update({
  id: "/cash-management",
  path: "/cash-management",
  getParentRoute: () => ServicesRoute
});
const ServicesAlarmResponseRoute = Route.update({
  id: "/alarm-response",
  path: "/alarm-response",
  getParentRoute: () => ServicesRoute
});
const ServicesRouteChildren = {
  ServicesAlarmResponseRoute,
  ServicesCashManagementRoute,
  ServicesCctvRoute,
  ServicesCourierRoute,
  ServicesGuardingRoute,
  ServicesHomeSecurityRoute,
  ServicesK9Route,
  ServicesSpecialRoute,
  ServicesTechnicalRoute,
  ServicesTrackingRoute,
  ServicesWorkshopRoute,
  ServicesIndexRoute
};
const ServicesRouteWithChildren = ServicesRoute._addFileChildren(
  ServicesRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CareersRoute,
  ClientsRoute,
  ContactsRoute,
  CsrRoute,
  NewsRoute,
  ServicesRoute: ServicesRouteWithChildren
};
const routeTree = Route$k._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
