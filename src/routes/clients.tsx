import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients — Forza Security" },
      {
        name: "description",
        content:
          "Trusted by leading organizations across banking, retail, NGO, hospitality and government sectors.",
      },
    ],
  }),
  component: Clients,
});

const sectors = [
  {
    name: "Banking & Finance",
    clients: ["Equity Bank", "KCB Group", "Stanbic", "Co-operative Bank"],
  },
  { name: "Retail", clients: ["Tuskys", "Naivas", "Carrefour", "Quickmart"] },
  {
    name: "NGO & Diplomatic",
    clients: ["World Food Programme", "UNHCR", "Pathfinder International", "Save the Children"],
  },
  { name: "Hospitality", clients: ["Serena Hotels", "Sarova", "Fairmont", "Hemingways"] },
  { name: "Industrial", clients: ["Mandela Auto Spares", "Mashru Ltd", "Bidco", "EABL"] },
  { name: "Telecom & Tech", clients: ["Safaricom", "Airtel", "Liquid Telecom", "Telkom"] },
];

function Clients() {
  return (
    <>
      <PageHero
        title="Our Clients"
        subtitle="We are proud to safeguard the operations of Kenya's most respected organizations."
      />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((s) => (
            <div key={s.name} className="border-t-2 border-gold bg-secondary p-8">
              <h3 className="font-display text-xl mb-4">{s.name}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {s.clients.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-gold">›</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
