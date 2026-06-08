import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/services/technical")({
  head: () => ({
    meta: [
      { title: "Technical Services — Forza Security" },
      {
        name: "description",
        content:
          "CCTV, access control, fire detection and perimeter protection — electronic security solutions across Kenya.",
      },
    ],
  }),
  component: Technical,
});

function Technical() {
  return (
    <>
      <PageHero
        title="Technical Services"
        subtitle="High-end electronic security systems — protecting people and property with cutting-edge technology."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Electronic Security Solutions</h2>
            <div className="h-[2px] w-12 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Forza Security consistently drives the highest possible industry standards, setting
              benchmarks for excellence while evolving to meet the changing needs of customers. We
              are dedicated to assisting in the protection of people and property by providing
              quality innovative products and solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our strategic relationships with local and international research and manufacturing
              companies enable us to provide products that meet the specific needs of each customer.
              Our technical team is well trained to install and maintain electronic security
              equipment, all monitored at our 24-hour Control Room.
            </p>
          </div>
          <div className="bg-secondary border-t-2 border-gold p-8">
            <h3 className="font-display text-xl mb-4">Technical Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Electronic Security Equipment Distribution",
                "System Installation and Maintenance",
                "Access Control — Face, Fingerprint, Access Cards, Digital Zoning",
                "CCTV and Video Monitoring",
                "Tracking and Telematics",
                "Fire Detection and Suppression",
                "Perimeter Protection & Electric Fencing",
                "Security Assessment",
                "Dedicated Control Room Systems and Software",
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
