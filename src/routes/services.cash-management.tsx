import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/services/cash-management")({
  head: () => ({
    meta: [
      { title: "Cash in Transit — Forza Security" },
      {
        name: "description",
        content:
          "Secure cash-in-transit armoured transport, ATM management and cash processing services across Kenya.",
      },
    ],
  }),
  component: CashManagement,
});

function CashManagement() {
  return (
    <>
      <PageHero
        title="Cash in Transit & Cash Management"
        subtitle="Secure, efficient and tailored cash management solutions — from armoured transport to vaulting services."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Cash Security Solutions</h2>
            <div className="h-[2px] w-12 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Forza Security has the expertise and experience to provide efficient and secure cash
              management services that can be tailored to meet the requirements of each customer.
              These services are carried out by professional security personnel who have undergone
              specialized training and extensive vetting procedures to meet the highest industry
              standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our Cash-In-Transit fleet of vehicles are fully armoured and equipped with
              sophisticated interlocking systems — all tracked and monitored at our Control Rooms.
              Typical clients include financial institutions, retail outlets, petrol stations,
              government bodies, churches and restaurants.
            </p>
          </div>
          <div className="bg-secondary border-t-2 border-gold p-8">
            <h3 className="font-display text-xl mb-4">Cash Management Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Armoured CIT Transport with Crew & Armed Escort",
                "Cash Air Operations",
                "Cash Handling and Sorting",
                "ATM Stuffing and Maintenance",
                "Point of Sale Cash Solutions",
                "Secure Vaulting",
                "Forex and Valuables IMPEX",
                "Payroll Preparation and Pay-Outs",
                "Implant Financial Staff and Tellers",
                "All-Risk Insurance Cover for CIT",
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
