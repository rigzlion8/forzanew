import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { A as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
import { a as aboutCard, s as servicesCard, n as newsCard } from "./forzasec1.0-BlYSnPnJ.mjs";
import { P as Phone, F as FileText, S as ShieldCheck, E as ExternalLink, f as ArrowLeft, g as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = reactExports.createContext(null);
function useCarousel() {
  const context = reactExports.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = reactExports.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const onSelect = reactExports.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = reactExports.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = reactExports.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  reactExports.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  reactExports.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
function spawnParticle(w, h) {
  const type = Math.random() < 0.15 ? "line" : Math.random() < 0.5 ? "shard" : "dot";
  return {
    x: (Math.random() - 0.5) * w * 2,
    y: (Math.random() - 0.5) * h * 2,
    z: 100 + Math.random() * 600,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3 - 0.2,
    vz: 0.3 + Math.random() * 0.7,
    size: type === "dot" ? 1.5 + Math.random() * 2 : 3 + Math.random() * 5,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.02,
    opacity: 0,
    targetOpacity: 0.15 + Math.random() * 0.45,
    type
  };
}
function drawShard(ctx, x, y, size, rotation, opacity) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.beginPath();
  const s = size * 1.4;
  ctx.moveTo(0, -s);
  ctx.lineTo(s * 0.7, 0);
  ctx.lineTo(0, s * 0.6);
  ctx.lineTo(-s * 0.7, 0);
  ctx.closePath();
  ctx.fillStyle = `rgba(201, 168, 76, ${opacity})`;
  ctx.fill();
  ctx.strokeStyle = `rgba(201, 168, 76, ${opacity * 0.5})`;
  ctx.lineWidth = 0.5;
  ctx.stroke();
  ctx.restore();
}
function drawLine(ctx, x, y, size, rotation, opacity) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.strokeStyle = `rgba(201, 168, 76, ${opacity * 0.6})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(-size, 0);
  ctx.lineTo(size, 0);
  ctx.stroke();
  ctx.restore();
}
function ThreeDHero({ children }) {
  const canvasRef = reactExports.useRef(null);
  const mouseRef = reactExports.useRef({ x: 0, y: 0 });
  const particlesRef = reactExports.useRef([]);
  const animFrameRef = reactExports.useRef(0);
  const dimensionsRef = reactExports.useRef({ w: 0, h: 0 });
  const handleMouse = reactExports.useCallback((e) => {
    const { w, h } = dimensionsRef.current;
    mouseRef.current = {
      x: (e.clientX / w - 0.5) * 2,
      y: (e.clientY / h - 0.5) * 2
    };
  }, []);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = 0;
    let h = 0;
    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      w = rect?.width ?? window.innerWidth;
      h = rect?.height ?? window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimensionsRef.current = { w, h };
    };
    resize();
    const maxParticles = 120;
    while (particlesRef.current.length < maxParticles) {
      particlesRef.current.push(spawnParticle(w, h));
    }
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);
    function drawShield(cx, cy, s, alpha) {
      ctx.save();
      ctx.translate(cx, cy - s * 0.1);
      ctx.beginPath();
      const r = s * 1.5;
      ctx.moveTo(0, -r);
      ctx.bezierCurveTo(r * 0.9, -r * 0.8, r, r * 0.3, 0, r * 1.1);
      ctx.bezierCurveTo(-r, r * 0.3, -r * 0.9, -r * 0.8, 0, -r);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, -r, 0, r);
      grad.addColorStop(0, `rgba(201, 168, 76, ${alpha * 0.6})`);
      grad.addColorStop(0.5, `rgba(201, 168, 76, ${alpha * 0.1})`);
      grad.addColorStop(1, `rgba(201, 168, 76, ${alpha * 0.3})`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }
    let shieldPulse = 0;
    function animate() {
      shieldPulse += 8e-3;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const { x: mx, y: my } = mouseRef.current;
      const shieldAlpha = 0.3 + Math.sin(shieldPulse) * 0.1;
      const shieldSize = Math.min(w, h) * 0.18;
      drawShield(cx, cy, shieldSize, shieldAlpha);
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.z -= p.vz;
        p.rotation += p.rotationSpeed;
        p.opacity += (p.targetOpacity - p.opacity) * 0.02;
        const perspective = 400 / (400 + p.z);
        const px = cx + (p.x - mx * 80) * perspective;
        const py = cy + (p.y - my * 80) * perspective;
        const sz = p.size * perspective;
        const alpha = p.opacity * Math.min(1, perspective * 2);
        if (p.z <= -100 || p.z > 700) {
          particles[i] = spawnParticle(w, h);
          particles[i].z = 600;
          continue;
        }
        if (alpha <= 0.02) continue;
        if (p.type === "shard") drawShard(ctx, px, py, sz, p.rotation, alpha);
        else if (p.type === "line") drawLine(ctx, px, py, sz * 1.5, p.rotation, alpha);
        else {
          ctx.beginPath();
          ctx.arc(px, py, sz, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 168, 76, ${alpha * 0.7})`;
          ctx.fill();
        }
      }
      animFrameRef.current = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [handleMouse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "absolute inset-0 h-full w-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-10 flex items-center", children })
  ] });
}
const alarm = "/assets/alarm-BhB2orjx.jpg";
const clients = [{
  name: "Equity Bank",
  url: "https://equitygroupholdings.com",
  bg: "bg-red-900"
}, {
  name: "KCB Group",
  url: "https://kcbgroup.com",
  bg: "bg-blue-900"
}, {
  name: "Safaricom",
  url: "https://www.safaricom.co.ke",
  bg: "bg-emerald-900"
}, {
  name: "Stanbic",
  url: "https://www.stanbicbank.co.ke",
  bg: "bg-sky-900"
}, {
  name: "UNHCR",
  url: "https://www.unhcr.org",
  bg: "bg-indigo-900"
}, {
  name: "Naivas",
  url: "https://www.naivas.co.ke",
  bg: "bg-orange-900"
}, {
  name: "Carrefour",
  url: "https://www.carrefour.ke",
  bg: "bg-blue-950"
}, {
  name: "Serena Hotels",
  url: "https://www.serenahotels.com",
  bg: "bg-amber-900"
}, {
  name: "World Food Programme",
  url: "https://www.wfp.org",
  bg: "bg-sky-950"
}, {
  name: "Bidco",
  url: "https://www.bidcoafrica.com",
  bg: "bg-red-950"
}, {
  name: "EABL",
  url: "https://www.eabl.com",
  bg: "bg-stone-900"
}, {
  name: "Liquid Telecom",
  url: "https://www.liquid.tech",
  bg: "bg-cyan-900"
}, {
  name: "Save the Children",
  url: "https://www.savethechildren.net",
  bg: "bg-rose-900"
}, {
  name: "Fairmont",
  url: "https://www.fairmont.com",
  bg: "bg-slate-900"
}, {
  name: "Airtel",
  url: "https://www.airtel.co.ke",
  bg: "bg-red-800"
}, {
  name: "Sarova",
  url: "https://www.sarovahotels.com",
  bg: "bg-yellow-900"
}, {
  name: "Co-operative Bank",
  url: "https://www.co-opbank.co.ke",
  bg: "bg-purple-900"
}, {
  name: "Pathfinder International",
  url: "https://www.pathfinder.org",
  bg: "bg-teal-900"
}, {
  name: "Telkom",
  url: "https://www.telkom.co.ke",
  bg: "bg-blue-900"
}, {
  name: "Quickmart",
  url: "https://quickmart.co.ke",
  bg: "bg-lime-900"
}];
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThreeDHero, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-white max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[2px] w-16 bg-gold mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-6xl font-bold leading-tight", children: [
        "Protect Your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Family" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "& Your Future"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-white/80 text-lg leading-relaxed", children: "Protect what matters most with our world-class security solutions — and give your home, business and guests the assurance of true peace of mind across Kenya." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "btn-gold", children: "Our Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contacts", className: "btn-gold-outline text-white hover:bg-gold hover:text-ink", children: "Get a Quote" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ink text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-16 text-center max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl", children: [
        "Welcome to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Forza Security" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 leading-relaxed", children: "Premium Security Solutions for Kenya — protecting homes, businesses and institutions with professionally trained personnel and cutting-edge technology." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "btn-gold-outline text-gold mt-8", children: "Learn More" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [{
      img: aboutCard,
      title: "About Forza Security",
      to: "/about",
      text: "Forza Security is Kenya's premium security solutions provider delivering tailored protection services backed by professional expertise and modern technology."
    }, {
      img: servicesCard,
      title: "Our Services",
      to: "/services",
      text: "Our approach is to fully assess the risks inherent at each location and design an integrated solution tailored to your needs."
    }, {
      img: newsCard,
      title: "Latest News",
      to: "/news",
      text: "Forza Security continues to set the standard for premium security solutions across Kenya."
    }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: c.title, width: 800, height: 600, loading: "lazy", className: "aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: c.to, className: "absolute bottom-0 left-6 right-6 bg-gold text-ink py-3 text-center font-semibold uppercase tracking-wider text-sm translate-y-0 group-hover:bg-ink group-hover:text-gold transition-colors", children: c.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-muted-foreground leading-relaxed text-center px-2", children: c.text })
    ] }, c.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-secondary py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-ink", children: "Our Footprint" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-6 text-center", children: [["Nairobi", "Headquarters"], ["Mombasa", "Coastal Hub"], ["Kisumu", "Western Hub"], ["Nakuru", "Rift Valley"], ["Eldoret", "North Rift"]].map(([c, s]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border p-6 hover:border-gold transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display text-ink", children: c }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-gold mt-1", children: s })
      ] }, c)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl", children: "Get Secured in 3 Easy Steps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-10", children: [{
        Icon: Phone,
        num: "1.",
        title: "Let Us Call You",
        text: "Send us a request and we'll call you and help you assess your security needs."
      }, {
        Icon: FileText,
        num: "2.",
        title: "Free Survey & Quote",
        text: "Receive a free security quotation at your location from one of our security experts."
      }, {
        Icon: ShieldCheck,
        num: "3.",
        title: "Installation",
        text: "Our professional installation team will set up your world-class security solution in minutes."
      }].map(({
        Icon,
        num,
        title,
        text
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-28 w-28 rounded-full bg-gold flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-12 w-12 text-ink", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: num }),
          " ",
          title
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3 max-w-xs mx-auto leading-relaxed", children: text })
      ] }, title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: alarm, alt: "Control room", width: 1600, height: 900, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-ink/85" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative container-x text-center max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl", children: "Alarm Response Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 leading-relaxed", children: "Your security is our highest priority. Monitoring and armed response services are closely integrated, combining advanced technology with dedicated manpower available 24/7 across Kenya." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "btn-gold mt-8", children: "Learn More" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl", children: "Our Happy Clients" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "We are proud to serve leading organizations across Kenya." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { opts: {
        align: "start",
        loop: true
      }, plugins: [Autoplay({
        delay: 3e3,
        stopOnInteraction: false
      })], className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-4", children: chunkArray(clients, 12).map((chunk, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "pl-4 basis-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4", children: chunk.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.url, target: "_blank", rel: "noopener noreferrer", className: "group flex flex-col items-center gap-3 border border-border p-4 hover:border-gold transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-14 w-14 ${c.bg} flex items-center justify-center group-hover:ring-2 group-hover:ring-gold transition-all`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-display font-bold text-lg", children: c.name.charAt(0) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-center text-ink/70 font-medium group-hover:text-gold transition-colors leading-tight", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3 text-muted-foreground group-hover:text-gold transition-colors" })
        ] }, c.name)) }) }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "hidden md:flex -left-4 border-gold text-gold hover:bg-gold hover:text-ink" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "hidden md:flex -right-4 border-gold text-gold hover:bg-gold hover:text-ink" })
      ] })
    ] })
  ] });
}
export {
  Index as component
};
