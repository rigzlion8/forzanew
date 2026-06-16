import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, FileText, ShieldCheck, ChevronRight, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ThreeDHero } from "@/components/three-d-hero";
import aboutCard from "@/assets/forzasec1.0.jpg";
import servicesCard from "@/assets/forzasec1.1.jpg";
import newsCard from "@/assets/forzasec1.2.jpg";
import alarm from "@/assets/alarm.jpg";

const clients = [
  { name: "Equity Bank", url: "https://equitygroupholdings.com", bg: "bg-red-900" },
  { name: "KCB Group", url: "https://kcbgroup.com", bg: "bg-blue-900" },
  { name: "Safaricom", url: "https://www.safaricom.co.ke", bg: "bg-emerald-900" },
  { name: "Stanbic", url: "https://www.stanbicbank.co.ke", bg: "bg-sky-900" },
  { name: "UNHCR", url: "https://www.unhcr.org", bg: "bg-indigo-900" },
  { name: "Naivas", url: "https://www.naivas.co.ke", bg: "bg-orange-900" },
  { name: "Carrefour", url: "https://www.carrefour.ke", bg: "bg-blue-950" },
  { name: "Serena Hotels", url: "https://www.serenahotels.com", bg: "bg-amber-900" },
  { name: "World Food Programme", url: "https://www.wfp.org", bg: "bg-sky-950" },
  { name: "Bidco", url: "https://www.bidcoafrica.com", bg: "bg-red-950" },
  { name: "EABL", url: "https://www.eabl.com", bg: "bg-stone-900" },
  { name: "Liquid Telecom", url: "https://www.liquid.tech", bg: "bg-cyan-900" },
  { name: "Save the Children", url: "https://www.savethechildren.net", bg: "bg-rose-900" },
  { name: "Fairmont", url: "https://www.fairmont.com", bg: "bg-slate-900" },
  { name: "Airtel", url: "https://www.airtel.co.ke", bg: "bg-red-800" },
  { name: "Sarova", url: "https://www.sarovahotels.com", bg: "bg-yellow-900" },
  { name: "Co-operative Bank", url: "https://www.co-opbank.co.ke", bg: "bg-purple-900" },
  { name: "Pathfinder International", url: "https://www.pathfinder.org", bg: "bg-teal-900" },
  { name: "Telkom", url: "https://www.telkom.co.ke", bg: "bg-blue-900" },
  { name: "Quickmart", url: "https://quickmart.co.ke", bg: "bg-lime-900" },
];

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forza Security Premium Security Solutions for Kenya" },
      {
        name: "description",
        content:
          "Protect what matters most. Premium guarding, alarm response and integrated security solutions across Kenya.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <ThreeDHero>
        <div className="container-x text-white max-w-2xl">
          <div className="h-[2px] w-16 bg-gold mb-6" />
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
            Protect Your <span className="text-gold">Family</span>
            <br />& Your Future
          </h1>
          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            Protect what matters most with our world-class security solutions — and give your home,
            business and guests the assurance of true peace of mind across Kenya.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/services" className="btn-gold">
              Our Services
            </Link>
            <Link
              to="/contacts"
              className="btn-gold-outline text-white hover:bg-gold hover:text-ink"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </ThreeDHero>

      {/* WELCOME */}
      <section className="bg-ink text-white">
        <div className="container-x py-16 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl">
            Welcome to <span className="text-gold">Forza Security</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-white/70 leading-relaxed">
            Premium Security Solutions for Kenya — protecting homes, businesses and institutions
            with professionally trained personnel and cutting-edge technology.
          </p>
          <Link to="/about" className="btn-gold-outline text-gold mt-8">
            Learn More
          </Link>
        </div>
      </section>

      {/* THREE CARDS */}
      <section className="container-x py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: aboutCard,
              title: "About Forza Security",
              to: "/about",
              text: "Forza Security is Kenya's premium security solutions provider delivering tailored protection services backed by professional expertise and modern technology.",
            },
            {
              img: servicesCard,
              title: "Our Services",
              to: "/services",
              text: "Our approach is to fully assess the risks inherent at each location and design an integrated solution tailored to your needs.",
            },
            {
              img: newsCard,
              title: "Latest News",
              to: "/news",
              text: "Forza Security continues to set the standard for premium security solutions across Kenya.",
            },
          ].map((c) => (
            <article key={c.title} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Link
                  to={c.to}
                  className="absolute bottom-0 left-6 right-6 bg-gold text-ink py-3 text-center font-semibold uppercase tracking-wider text-sm translate-y-0 group-hover:bg-ink group-hover:text-gold transition-colors"
                >
                  {c.title}
                </Link>
              </div>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed text-center px-2">
                {c.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTPRINT */}
      <section className="bg-secondary py-16">
        <div className="container-x text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-ink">Our Footprint</h2>
          <div className="gold-divider" />
        </div>
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              ["Nairobi", "Headquarters"],
              ["Mombasa", "Coastal Hub"],
              ["Kisumu", "Western Hub"],
              ["Nakuru", "Rift Valley"],
              ["Eldoret", "North Rift"],
            ].map(([c, s]) => (
              <div
                key={c}
                className="bg-background border border-border p-6 hover:border-gold transition-colors"
              >
                <div className="text-2xl font-display text-ink">{c}</div>
                <div className="text-xs uppercase tracking-widest text-gold mt-1">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE STEPS */}
      <section className="container-x py-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl">Get Secured in 3 Easy Steps</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              Icon: Phone,
              num: "1.",
              title: "Let Us Call You",
              text: "Send us a request and we'll call you and help you assess your security needs.",
            },
            {
              Icon: FileText,
              num: "2.",
              title: "Free Survey & Quote",
              text: "Receive a free security quotation at your location from one of our security experts.",
            },
            {
              Icon: ShieldCheck,
              num: "3.",
              title: "Installation",
              text: "Our professional installation team will set up your world-class security solution in minutes.",
            },
          ].map(({ Icon, num, title, text }) => (
            <div key={title} className="text-center">
              <div className="mx-auto h-28 w-28 rounded-full bg-gold flex items-center justify-center mb-6">
                <Icon className="h-12 w-12 text-ink" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl">
                <span className="text-gold">{num}</span> {title}
              </h3>
              <p className="text-sm text-muted-foreground mt-3 max-w-xs mx-auto leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ALARM RESPONSE */}
      <section className="relative py-24 text-white">
        <img
          src={alarm}
          alt="Control room"
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="relative container-x text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl">Alarm Response Services</h2>
          <div className="gold-divider" />
          <p className="text-white/75 leading-relaxed">
            Your security is our highest priority. Monitoring and armed response services are
            closely integrated, combining advanced technology with dedicated manpower available 24/7
            across Kenya.
          </p>
          <Link to="/services" className="btn-gold mt-8">
            Learn More
          </Link>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="container-x py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl">Our Happy Clients</h2>
          <div className="gold-divider" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            We are proud to serve leading organizations across Kenya.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
          className="max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {chunkArray(clients, 12).map((chunk, i) => (
              <CarouselItem key={i} className="pl-4 basis-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {chunk.map((c) => (
                    <a
                      key={c.name}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-3 border border-border p-4 hover:border-gold transition-colors"
                    >
                      <div
                        className={`h-14 w-14 ${c.bg} flex items-center justify-center group-hover:ring-2 group-hover:ring-gold transition-all`}
                      >
                        <span className="text-white font-display font-bold text-lg">
                          {c.name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-xs text-center text-ink/70 font-medium group-hover:text-gold transition-colors leading-tight">
                        {c.name}
                      </span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-gold transition-colors" />
                    </a>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 border-gold text-gold hover:bg-gold hover:text-ink" />
          <CarouselNext className="hidden md:flex -right-4 border-gold text-gold hover:bg-gold hover:text-ink" />
        </Carousel>
      </section>
    </>
  );
}
