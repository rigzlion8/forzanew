import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, FileText, ShieldCheck, ChevronRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import aboutCard from "@/assets/about-card.jpg";
import servicesCard from "@/assets/services-card.jpg";
import newsCard from "@/assets/news-card.jpg";
import alarm from "@/assets/alarm.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SGA Security — Premier Protection Services" },
      { name: "description", content: "Protect what matters most. Premium guarding, alarm response and integrated security solutions across East Africa." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <img src={hero} alt="Security officer in luxury lobby" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-x text-white max-w-2xl">
            <div className="h-[2px] w-16 bg-gold mb-6" />
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              Protect Your <span className="text-gold">Family</span><br />& Your Future
            </h1>
            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              Protect what matters most with our world-class security solutions — and give your home, business and guests the assurance of true peace of mind.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="btn-gold">Our Services</Link>
              <Link to="/contacts" className="btn-gold-outline text-white hover:bg-gold hover:text-ink">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="bg-ink text-white">
        <div className="container-x py-16 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl">Welcome to <span className="text-gold">SGA Security</span></h2>
          <div className="gold-divider" />
          <p className="text-white/70 leading-relaxed">
            We are a multinational security solutions provider with over 55 years of operating experience and over 20,000 personnel across the region.
          </p>
          <Link to="/about" className="btn-gold-outline text-gold mt-8">Learn More</Link>
        </div>
      </section>

      {/* THREE CARDS */}
      <section className="container-x py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { img: aboutCard, title: "About SGA Security", to: "/about", text: "SGA Security is the region's leading security services provider with fixed base operations across East Africa servicing top tier clients." },
            { img: servicesCard, title: "Our Services", to: "/services", text: "Our approach is to fully assess the risks inherent at each location and design an integrated solution tailored to your needs." },
            { img: newsCard, title: "Latest News", to: "/news", text: "SGA Security recently welcomed industry partners to its headquarters for an interactive visit highlighting its role and future." },
          ].map(c => (
            <article key={c.title} className="group">
              <div className="relative overflow-hidden">
                <img src={c.img} alt={c.title} width={800} height={600} loading="lazy" className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <Link to={c.to} className="absolute bottom-0 left-6 right-6 bg-gold text-ink py-3 text-center font-semibold uppercase tracking-wider text-sm translate-y-0 group-hover:bg-ink group-hover:text-gold transition-colors">
                  {c.title}
                </Link>
              </div>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed text-center px-2">{c.text}</p>
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
              ["Kenya", "Headquarters"], ["Uganda", "Regional Hub"], ["Tanzania", "Coastal Ops"], ["Rwanda", "Field Office"], ["Burundi", "Field Office"],
            ].map(([c, s]) => (
              <div key={c} className="bg-background border border-border p-6 hover:border-gold transition-colors">
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
            { Icon: Phone, num: "1.", title: "Let Us Call You", text: "Send us a request and we'll call you and help you assess your security needs." },
            { Icon: FileText, num: "2.", title: "Free Survey & Quote", text: "Receive a free security quotation at your location from one of our security experts." },
            { Icon: ShieldCheck, num: "3.", title: "Installation", text: "Our professional installation team will set up your world-class security solution in minutes." },
          ].map(({ Icon, num, title, text }) => (
            <div key={title} className="text-center">
              <div className="mx-auto h-28 w-28 rounded-full bg-gold flex items-center justify-center mb-6">
                <Icon className="h-12 w-12 text-ink" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl"><span className="text-gold">{num}</span> {title}</h3>
              <p className="text-sm text-muted-foreground mt-3 max-w-xs mx-auto leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ALARM RESPONSE */}
      <section className="relative py-24 text-white">
        <img src={alarm} alt="Control room" width={1600} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="relative container-x text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl">Alarm Response Services</h2>
          <div className="gold-divider" />
          <p className="text-white/75 leading-relaxed">
            Your security is our highest priority. Monitoring and armed response services are closely integrated, combining hi-tech solutions with dedicated manpower available 24/7. Our regional control rooms dispatch instantly when an activation signal is received.
          </p>
          <Link to="/services" className="btn-gold mt-8">Learn More</Link>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="container-x py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl">Our Happy Clients</h2>
          <div className="gold-divider" />
          <p className="text-muted-foreground max-w-xl mx-auto">We are proud to call you our client. Below is a small selection of the organizations who trust us.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {["Mashru Ltd", "World Food", "Tuskys", "Mandela Auto", "Pathfinder", "Equity", "Safaricom", "KCB", "Nation", "UNHCR"].map(n => (
            <div key={n} className="h-24 border border-border flex items-center justify-center text-ink/60 font-display hover:border-gold hover:text-gold transition-colors">
              {n}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
