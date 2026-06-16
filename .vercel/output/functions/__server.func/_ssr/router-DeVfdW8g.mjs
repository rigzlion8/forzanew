import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as Phone, M as Mail, I as Instagram, C as ChevronDown, X, a as Menu } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-BDs2qA50.css";
const logoImg = "/assets/forzalogofinal-DV-tbAwz.png";
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
const TikTok = ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" }) });
const WhatsApp = ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" })
] });
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
const Route$i = createRootRouteWithContext()({
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
      { rel: "icon", type: "image/png", href: logoImg },
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
      { to: "/services/technical", label: "Technical Services" },
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/message/XJYFEZP5QYEFB1", target: "_blank", rel: "noopener noreferrer", "aria-label": "WhatsApp", className: "hover:text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsApp, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/forza.security?utm_source=qr&igsh=MWU5YWxmbGtuOGczcw==", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "hover:text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.tiktok.com/@forza.security?_r=1&_d=f06i3ijaa1k94h&sec_uid=MS4wLjABAAAA-fqA9xKAIsGOljEufyLjoTHC1abpn-lT3iY_hmRd3SiW1pH8JYCZCtlkbXSzeaqO&share_author_id=7584761440897942584&sharer_language=en&source=h5_m&u_code=f129cgi83e7328&timestamp=1781180792&user_id=7584761440897942584&sec_user_id=MS4wLjABAAAA-fqA9xKAIsGOljEufyLjoTHC1abpn-lT3iY_hmRd3SiW1pH8JYCZCtlkbXSzeaqO&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7645069611390519041&share_link_id=a68cffe7-b36c-40fd-a69a-56e44db239ba&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1", target: "_blank", rel: "noopener noreferrer", "aria-label": "TikTok", className: "hover:text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TikTok, { className: "h-3.5 w-3.5" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex items-center justify-between py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: "Forza Security", className: "h-12 w-auto" }) }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://wa.me/message/XJYFEZP5QYEFB1",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "WhatsApp",
              className: "h-10 w-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsApp, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.instagram.com/forza.security?utm_source=qr&igsh=MWU5YWxmbGtuOGczcw==",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Instagram",
              className: "h-10 w-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.tiktok.com/@forza.security?_r=1&_d=f06i3ijaa1k94h&sec_uid=MS4wLjABAAAA-fqA9xKAIsGOljEufyLjoTHC1abpn-lT3iY_hmRd3SiW1pH8JYCZCtlkbXSzeaqO&share_author_id=7584761440897942584&sharer_language=en&source=h5_m&u_code=f129cgi83e7328&timestamp=1781180792&user_id=7584761440897942584&sec_user_id=MS4wLjABAAAA-fqA9xKAIsGOljEufyLjoTHC1abpn-lT3iY_hmRd3SiW1pH8JYCZCtlkbXSzeaqO&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7645069611390519041&share_link_id=a68cffe7-b36c-40fd-a69a-56e44db239ba&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "TikTok",
              className: "h-10 w-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(TikTok, { className: "h-4 w-4" })
            }
          )
        ] })
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
  const { queryClient } = Route$i.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] });
}
const $$splitComponentImporter$h = () => import("./services-CtZtiw1B.mjs");
const Route$h = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Forza Security"
    }, {
      name: "description",
      content: "Manned guarding, alarm response, electronic security and integrated risk management solutions across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./news-C7Nei5b9.mjs");
const Route$g = createFileRoute("/news")({
  head: () => ({
    meta: [{
      title: "News & Insights — Forza Security"
    }, {
      name: "description",
      content: "Latest updates, community initiatives and security industry insights from Forza Security."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./csr-8t4CGGSb.mjs");
const Route$f = createFileRoute("/csr")({
  head: () => ({
    meta: [{
      title: "Corporate Social Responsibility — Forza Security"
    }, {
      name: "description",
      content: "Investing in the communities where we operate through education, environment, health and empowerment initiatives."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./contacts-eCueTbmM.mjs");
const Route$e = createFileRoute("/contacts")({
  head: () => ({
    meta: [{
      title: "Contact Us — Forza Security"
    }, {
      name: "description",
      content: "Reach our 24/7 control room or request a free security quote. Premium security solutions across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./clients-DuK-Zjfe.mjs");
const Route$d = createFileRoute("/clients")({
  head: () => ({
    meta: [{
      title: "Our Clients — Forza Security"
    }, {
      name: "description",
      content: "Trusted by leading organizations across banking, retail, NGO, hospitality and government sectors."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./careers-BSZGJIEN.mjs");
const Route$c = createFileRoute("/careers")({
  head: () => ({
    meta: [{
      title: "Careers — Forza Security"
    }, {
      name: "description",
      content: "Build a rewarding career in security. View open positions across our branches in Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./about-CpDNwSln.mjs");
const Route$b = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Forza Security"
    }, {
      name: "description",
      content: "Kenya's premium security solutions provider delivering world-class protection services with professional personnel and cutting-edge technology."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./index-BYeAsXTq.mjs");
const Route$a = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Forza Security Premium Security Solutions for Kenya"
    }, {
      name: "description",
      content: "Protect what matters most. Premium guarding, alarm response and integrated security solutions across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./services.index-BE6I0E-l.mjs");
const Route$9 = createFileRoute("/services/")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./services.workshop-Db2tMzKl.mjs");
const Route$8 = createFileRoute("/services/workshop")({
  head: () => ({
    meta: [{
      title: "Workshop — Forza Security"
    }, {
      name: "description",
      content: "Automotive service, body fabrication, collision repairs and 24hr recovery services in Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./services.tracking-rOWv5RHB.mjs");
const Route$7 = createFileRoute("/services/tracking")({
  head: () => ({
    meta: [{
      title: "Fleet Tracking — Forza Security"
    }, {
      name: "description",
      content: "GPS fleet and asset tracking with real-time monitoring, geofencing and telematics across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./services.technical-D_YPIGX3.mjs");
const Route$6 = createFileRoute("/services/technical")({
  head: () => ({
    meta: [{
      title: "Technical Services — Forza Security"
    }, {
      name: "description",
      content: "CCTV, access control, fire detection and perimeter protection — electronic security solutions across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./services.special-Dq9-_0pz.mjs");
const Route$5 = createFileRoute("/services/special")({
  head: () => ({
    meta: [{
      title: "Special Services — Forza Security"
    }, {
      name: "description",
      content: "Event security, VIP protection, security audits, investigations and tailored special services across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./services.k9-Q8oxFAmw.mjs");
const Route$4 = createFileRoute("/services/k9")({
  head: () => ({
    meta: [{
      title: "K9 Security Dogs — Forza Security"
    }, {
      name: "description",
      content: "Trained patrol, narcotics and explosives detection dogs with expert handlers across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./services.home-security-Bgmn05US.mjs");
const Route$3 = createFileRoute("/services/home-security")({
  head: () => ({
    meta: [{
      title: "Home Security — Forza Security"
    }, {
      name: "description",
      content: "Comprehensive home security solutions protecting your family, property and peace of mind across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./services.guarding-mDTtJUzj.mjs");
const Route$2 = createFileRoute("/services/guarding")({
  head: () => ({
    meta: [{
      title: "Manned Guarding — Forza Security"
    }, {
      name: "description",
      content: "Professional day and night guards, mobile patrols and diplomatic protection services across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./services.cctv-CF3OM9TH.mjs");
const Route$1 = createFileRoute("/services/cctv")({
  head: () => ({
    meta: [{
      title: "CCTV Installation — Forza Security"
    }, {
      name: "description",
      content: "Professional CCTV installation, surveillance systems and video monitoring solutions across Kenya."
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
const ServicesRoute = Route$h.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$i
});
const NewsRoute = Route$g.update({
  id: "/news",
  path: "/news",
  getParentRoute: () => Route$i
});
const CsrRoute = Route$f.update({
  id: "/csr",
  path: "/csr",
  getParentRoute: () => Route$i
});
const ContactsRoute = Route$e.update({
  id: "/contacts",
  path: "/contacts",
  getParentRoute: () => Route$i
});
const ClientsRoute = Route$d.update({
  id: "/clients",
  path: "/clients",
  getParentRoute: () => Route$i
});
const CareersRoute = Route$c.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$i
});
const AboutRoute = Route$b.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$i
});
const IndexRoute = Route$a.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$i
});
const ServicesIndexRoute = Route$9.update({
  id: "/",
  path: "/",
  getParentRoute: () => ServicesRoute
});
const ServicesWorkshopRoute = Route$8.update({
  id: "/workshop",
  path: "/workshop",
  getParentRoute: () => ServicesRoute
});
const ServicesTrackingRoute = Route$7.update({
  id: "/tracking",
  path: "/tracking",
  getParentRoute: () => ServicesRoute
});
const ServicesTechnicalRoute = Route$6.update({
  id: "/technical",
  path: "/technical",
  getParentRoute: () => ServicesRoute
});
const ServicesSpecialRoute = Route$5.update({
  id: "/special",
  path: "/special",
  getParentRoute: () => ServicesRoute
});
const ServicesK9Route = Route$4.update({
  id: "/k9",
  path: "/k9",
  getParentRoute: () => ServicesRoute
});
const ServicesHomeSecurityRoute = Route$3.update({
  id: "/home-security",
  path: "/home-security",
  getParentRoute: () => ServicesRoute
});
const ServicesGuardingRoute = Route$2.update({
  id: "/guarding",
  path: "/guarding",
  getParentRoute: () => ServicesRoute
});
const ServicesCctvRoute = Route$1.update({
  id: "/cctv",
  path: "/cctv",
  getParentRoute: () => ServicesRoute
});
const ServicesAlarmResponseRoute = Route.update({
  id: "/alarm-response",
  path: "/alarm-response",
  getParentRoute: () => ServicesRoute
});
const ServicesRouteChildren = {
  ServicesAlarmResponseRoute,
  ServicesCctvRoute,
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
const routeTree = Route$i._addFileChildren(rootRouteChildren)._addFileTypes();
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
