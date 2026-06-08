import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";
import { Award, Globe, Users, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us — SGA Security" },
    { name: "description", content: "55+ years of experience and 20,000+ personnel delivering world-class security services across East Africa." },
  ]}),
  component: About,
});

function About() {
  return (
    <>
      <PageHero title="About SGA Security" subtitle="Five decades of trust, innovation and unwavering commitment to safety." />
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Who We Are</h2>
            <div className="h-[2px] w-12 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              SGA Security is the region's leading security services provider with fixed base operations across East Africa. We deliver tailored security solutions that combine professionally trained manpower with leading-edge technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From a single guard post to nationwide armed response and integrated electronic security, we build relationships of trust that span decades.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { Icon: Award, k: "55+", v: "Years of experience" },
              { Icon: Users, k: "20,000+", v: "Security personnel" },
              { Icon: Globe, k: "5", v: "Countries of operation" },
              { Icon: Target, k: "24/7", v: "Control room coverage" },
            ].map(({ Icon, k, v }) => (
              <div key={v} className="border border-border p-6 hover:border-gold transition-colors">
                <Icon className="h-7 w-7 text-gold mb-3" />
                <div className="font-display text-3xl text-ink">{k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <section className="bg-secondary py-16">
        <div className="container-x grid md:grid-cols-3 gap-8">
          {[
            { t: "Our Mission", d: "To provide intelligent, reliable security solutions that protect what our clients value most." },
            { t: "Our Vision", d: "To be the most trusted and innovative security partner across Africa." },
            { t: "Our Values", d: "Integrity. Excellence. Respect. Accountability. Innovation in every assignment we undertake." },
          ].map(c => (
            <div key={c.t} className="bg-background border-t-2 border-gold p-8">
              <h3 className="font-display text-xl mb-3">{c.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
