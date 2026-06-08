import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/services/guarding")({
  head: () => ({
    meta: [
      { title: "Manned Guarding — Forza Security" },
      {
        name: "description",
        content:
          "Professional day and night guards, mobile patrols and diplomatic protection services across Kenya.",
      },
    ],
  }),
  component: Guarding,
});

function Guarding() {
  return (
    <>
      <PageHero
        title="Manned Guarding"
        subtitle="Professional physical security combined with technology — tailored to your exact requirements."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Physical Security Services</h2>
            <div className="h-[2px] w-12 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Forza Security provides physical security services in combination with technology
              based on specific client requirements. Our approach embraces people, procedures,
              intelligence and technology to achieve real value and peace of mind while effectively
              offering a package of tailor-made security solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Based on the needs of our clients, Forza Security offers the latest technology and
              supporting tools such as digital cameras, guarding monitoring systems, fixed and
              remote alarm response, sensor lights in combination with Control Room services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our guarding services expand from airports to malls, commercial to residential
              buildings, manned guarding to canine security patrols. All personnel are specifically
              trained to match client's exact requirements, ensuring our security officers have the
              skills and confidence to fully comply with contracted service requirements.
            </p>
          </div>
          <div className="bg-secondary border-t-2 border-gold p-8">
            <h3 className="font-display text-xl mb-4">Our Guarding Services Include</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Day & Night Guards",
                "Mobile Patrols",
                "Diplomatic Protection",
                "Guard Alert Patrol Systems",
                "Non-Core Implant Staff",
                "Armed Guarding (in cooperation with Police)",
                "Canine Security Patrols",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
