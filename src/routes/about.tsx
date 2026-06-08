import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";
import { Award, Globe, Users, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Forza Security" },
      {
        name: "description",
        content:
          "Kenya's premium security solutions provider delivering world-class protection services with professional personnel and cutting-edge technology.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        title="About Forza Security"
        subtitle="Premium security solutions engineered for Kenya — trust, innovation and unwavering commitment to safety."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Who We Are</h2>
            <div className="h-[2px] w-12 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Forza Security is Kenya's premium security solutions provider delivering tailored
              protection services backed by professional expertise and modern technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From a single guard post to nationwide armed response and integrated electronic
              security, we build relationships of trust that last.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { Icon: Award, k: "55+", v: "Years of experience" },
              { Icon: Users, k: "20,000+", v: "Security personnel" },
              { Icon: Globe, k: "5", v: "Regional branches" },
              { Icon: Target, k: "24/7", v: "Control room coverage" },
            ].map(({ Icon, k, v }) => (
              <div key={v} className="border border-border p-6 hover:border-gold transition-colors">
                <Icon className="h-7 w-7 text-gold mb-3" />
                <div className="font-display text-3xl text-ink">{k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <section className="bg-secondary py-16">
        <div className="container-x grid md:grid-cols-3 gap-8">
          {[
            {
              t: "Our Mission",
              d: "To provide intelligent, reliable security solutions that protect what our clients value most.",
            },
            {
              t: "Our Vision",
              d: "To be Kenya's most trusted and innovative premium security partner.",
            },
            {
              t: "Our Values",
              d: "Integrity. Excellence. Respect. Accountability. Innovation in every assignment we undertake.",
            },
          ].map((c) => (
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
