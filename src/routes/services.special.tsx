import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/services/special")({
  head: () => ({
    meta: [
      { title: "Special Services — Forza Security" },
      {
        name: "description",
        content:
          "Event security, VIP protection, security audits, investigations and tailored special services across Kenya.",
      },
    ],
  }),
  component: Special,
});

function Special() {
  return (
    <>
      <PageHero
        title="Special Services"
        subtitle="Tailored security and safety solutions — designed for your unique requirements."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Tailored Security Solutions</h2>
            <div className="h-[2px] w-12 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Forza Security provides an array of specially tailored security and safety services
              for our client's unique needs. Whether it's a one-time event or ongoing specialized
              protection, our team has the expertise to deliver.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From event security and VIP close protection to comprehensive security audits and risk
              management, we bring intelligence-led solutions backed by decades of combined
              experience.
            </p>
          </div>
          <div className="bg-secondary border-t-2 border-gold p-8">
            <h3 className="font-display text-xl mb-4">Special Services Include</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Event Security, Crowd Control & Management",
                "VIP Close Protection and Escort Services",
                "Security Audit and Consultancy",
                "Risk Management",
                "Security, Crime Mapping & Intelligence Gathering",
                "Investigations",
                "Health and Safety including Environment Training (HS&E)",
                "Road Rescue and Towing Services",
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
