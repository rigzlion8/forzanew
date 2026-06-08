import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/services/courier")({
  head: () => ({
    meta: [
      { title: "Courier Services — Forza Security" },
      {
        name: "description",
        content:
          "Professional national and international courier services with secure warehousing and distribution across Kenya.",
      },
    ],
  }),
  component: Courier,
});

function Courier() {
  return (
    <>
      <PageHero
        title="Courier Services"
        subtitle="Professional and efficient courier services — secure delivery, warehousing and distribution solutions."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Reliable Courier Solutions</h2>
            <div className="h-[2px] w-12 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Forza Security Courier provides a range of professional and efficient courier
              services. With experienced and friendly staff, we are dedicated to catering to all
              client delivery needs within a large network of branches, depots and drop-off points
              across Kenya.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Contact us today for a chat — our team will be in touch with you to answer all your
              shipment enquiries and process your order.
            </p>
          </div>
          <div className="bg-secondary border-t-2 border-gold p-8">
            <h3 className="font-display text-xl mb-4">Courier Services Include</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "National and International Courier",
                "High-Value Manned Courier",
                "Dedicated Air Courier",
                "Secure and Bonded Warehousing",
                "Contract Storage and Distribution",
                "Messenger and Mailroom Services",
                "Distribution and Supply Chain",
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
