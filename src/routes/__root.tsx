import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode, useState } from "react";
import {
  Instagram,
  Mail,
  Phone,
  Menu,
  ChevronDown,
  X,
} from "lucide-react";

const TikTok = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsApp = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

import appCss from "../styles.css?url";
import logoImg from "../assets/forzasec.jpg?url";
import { PageLoader } from "@/components/page-loader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <Link to="/" className="btn-gold mt-6">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="btn-gold mt-6"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Forza Security Premium Security Solutions for Kenya" },
      {
        name: "description",
        content:
          "Premium security solutions provider in Kenya offering manned guarding, alarm response, electronic security and integrated protection services.",
      },
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: logoImg },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

type NavItem =
  | { to: string; label: string; children?: never }
  | {
      label: string;
      to?: never;
      children: { to: string; label: string }[];
    };

const NAV: NavItem[] = [
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
      { to: "/services/workshop", label: "Workshop" },
    ],
  },
  { to: "/clients", label: "Our Clients" },
  { to: "/csr", label: "CSR" },
  { to: "/contacts", label: "Contacts" },
  { to: "/careers", label: "Careers" },
  { to: "/news", label: "News" },
];

function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="bg-ink text-white/70 text-xs">
        <div className="container-x flex justify-end items-center gap-2 sm:gap-4 py-2">
          <a
            href="tel:+254737033727"
            className="flex items-center gap-1.5 hover:text-gold transition-colors whitespace-nowrap"
          >
            <Phone className="h-3 w-3 shrink-0" />
            +254 737 033 727
          </a>
          <a
            href="mailto:forzasec.ke@gmail.com"
            className="hidden sm:flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Mail className="h-3 w-3 shrink-0" />
            forzasec.ke@gmail.com
          </a>
          <div className="flex items-center gap-2 ml-2">
            <a href="https://wa.me/message/XJYFEZP5QYEFB1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-gold">
              <WhatsApp className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.instagram.com/forza.security?utm_source=qr&igsh=MWU5YWxmbGtuOGczcw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold">
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.tiktok.com/@forza.security?_r=1&_d=f06i3ijaa1k94h&sec_uid=MS4wLjABAAAA-fqA9xKAIsGOljEufyLjoTHC1abpn-lT3iY_hmRd3SiW1pH8JYCZCtlkbXSzeaqO&share_author_id=7584761440897942584&sharer_language=en&source=h5_m&u_code=f129cgi83e7328&timestamp=1781180792&user_id=7584761440897942584&sec_user_id=MS4wLjABAAAA-fqA9xKAIsGOljEufyLjoTHC1abpn-lT3iY_hmRd3SiW1pH8JYCZCtlkbXSzeaqO&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7645069611390519041&share_link_id=a68cffe7-b36c-40fd-a69a-56e44db239ba&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-gold">
              <TikTok className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
      <div className="container-x flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Forza Security" className="h-12 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) =>
            n.children ? (
              <div
                key={n.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(n.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="text-sm font-medium text-ink hover:text-gold transition-colors uppercase tracking-wide flex items-center gap-1">
                  {n.label}
                  <ChevronDown className="h-3 w-3" />
                </button>
                {openDropdown === n.label && (
                  <div className="absolute top-full left-0 mt-1 bg-background border border-border shadow-lg min-w-[200px] py-2">
                    {n.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-4 py-2 text-sm text-ink hover:bg-secondary hover:text-gold transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-ink hover:text-gold transition-colors uppercase tracking-wide"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <Link to="/contacts" className="btn-gold hidden md:inline-flex">
          Get a Quote
        </Link>
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-ink p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] z-40 bg-ink/95 backdrop-blur-sm overflow-y-auto">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {NAV.map((n) =>
              n.children ? (
                <div key={n.label}>
                  <button
                    className="w-full flex items-center justify-between py-3 text-white/90 text-sm font-semibold uppercase tracking-wider border-b border-white/10"
                    onClick={() => setMobileExpanded(mobileExpanded === n.label ? null : n.label)}
                  >
                    {n.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileExpanded === n.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpanded === n.label && (
                    <div className="ml-4 py-2 space-y-1">
                      {n.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block py-2.5 text-white/70 text-sm hover:text-gold transition-colors"
                          onClick={closeMobile}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  className="py-3 text-white/90 text-sm font-semibold uppercase tracking-wider border-b border-white/10 hover:text-gold transition-colors"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={{ exact: n.to === "/" }}
                  onClick={closeMobile}
                >
                  {n.label}
                </Link>
              ),
            )}
            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                to="/contacts"
                className="btn-gold w-full text-center block"
                onClick={closeMobile}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/80 mt-20">
      <div className="bg-gold text-ink">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-semibold uppercase tracking-wide text-sm">
            <Mail className="h-5 w-5" /> Interested in our services? Get a quote today!
          </div>
          <Link
            to="/contacts"
            className="bg-ink text-gold px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-black/80 transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      <div className="container-x grid md:grid-cols-3 gap-10 py-14">
        <div>
          <h4 className="font-display text-gold text-lg mb-4">About Forza Security</h4>
          <p className="text-sm leading-relaxed text-white/60">
            Forza Security Premium Security Solutions for Kenya is dedicated to understanding and
            meeting our clients' precise requirements, fusing service, efficiency and reliability
            with technology-based security solutions.
          </p>
        </div>
        <div>
          <h4 className="font-display text-gold text-lg mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Emergency Contacts", "/contacts"],
              ["Careers", "/careers"],
              ["Whistleblowing", "/contacts"],
              ["Privacy Policy", "/"],
              ["Site Map", "/"],
            ].map(([l, h]) => (
              <li key={l}>
                <Link to={h} className="hover:text-gold transition-colors flex items-center gap-2">
                  <span className="text-gold">›</span>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-gold text-lg mb-4">Find Us On Social Media</h4>
          <div className="flex gap-3">
            <a
              href="https://wa.me/message/XJYFEZP5QYEFB1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="h-10 w-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <WhatsApp className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/forza.security?utm_source=qr&igsh=MWU5YWxmbGtuOGczcw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@forza.security?_r=1&_d=f06i3ijaa1k94h&sec_uid=MS4wLjABAAAA-fqA9xKAIsGOljEufyLjoTHC1abpn-lT3iY_hmRd3SiW1pH8JYCZCtlkbXSzeaqO&share_author_id=7584761440897942584&sharer_language=en&source=h5_m&u_code=f129cgi83e7328&timestamp=1781180792&user_id=7584761440897942584&sec_user_id=MS4wLjABAAAA-fqA9xKAIsGOljEufyLjoTHC1abpn-lT3iY_hmRd3SiW1pH8JYCZCtlkbXSzeaqO&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7645069611390519041&share_link_id=a68cffe7-b36c-40fd-a69a-56e44db239ba&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="h-10 w-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <TikTok className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-center text-xs text-white/50">
          Forza Security Premium Security Solutions for Kenya | © Copyright{" "}
          {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <PageLoader />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
