import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/services/k9")({
  head: () => ({
    meta: [
      { title: "K9 Security Dogs — Forza Security" },
      {
        name: "description",
        content:
          "Trained patrol, narcotics and explosives detection dogs with expert handlers across Kenya.",
      },
    ],
  }),
  component: K9,
});

function K9() {
  return (
    <>
      <PageHero
        title="K9 Security Dogs"
        subtitle="Highly trained security dogs and handlers — a proven asset in deterrence, detection and protection."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">K9 Security Services</h2>
            <div className="h-[2px] w-12 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Forza Security Dog Section provides trained security dogs and dog handlers for
              protection of people and property. Trained expert staff with dogs complement existing
              security procedures tailored to each client's needs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Security Patrol together with Guard Dogs are a proven asset in the reduction of theft,
              criminal damage and violent behaviour. Security Dogs are also used as sniffer dogs to
              detect explosives, narcotics and other threatening materials.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It is commonly accepted that one security patrol dog and handler team can be as
              effective as five static security officers, due to the canine's excellent olfactory
              system. Our dogs are often deployed at events like concerts, festivals, fairs,
              exhibitions and sports tournaments for crowd control, guarding and detection.
            </p>
          </div>
          <div className="bg-secondary border-t-2 border-gold p-8">
            <h3 className="font-display text-xl mb-4">K9 Services Include</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Security Patrol Dogs with Handler",
                "Narcotics Screening Dogs",
                "Explosives Screening Dogs",
                "Crowd Control",
                "Dog Obedience and Defence Training",
                "Event Security K9 Deployment",
                "Regular Training and Certification",
                "Professional Management and Supervision",
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
