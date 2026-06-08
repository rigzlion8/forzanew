import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/services/workshop")({
  head: () => ({
    meta: [
      { title: "Workshop — Forza Security" },
      {
        name: "description",
        content:
          "Automotive service, body fabrication, collision repairs and 24hr recovery services in Kenya.",
      },
    ],
  }),
  component: Workshop,
});

function Workshop() {
  return (
    <>
      <PageHero
        title="Forza Security Workshop"
        subtitle="One of the most trusted automotive service names in the industry — quality service for all your vehicle needs."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Automotive Excellence</h2>
            <div className="h-[2px] w-12 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Forza Security Workshop has become one of the most trusted automotive service names in
              the industry. Our sophisticated diagnostic and repair facilities make us totally
              reliable for all your automobile needs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We have the best automotive service professionals whose expertise and technical
              knowledge enable us to provide quality service to all types and makes of vehicles. We
              invest in their professional development with continuous training to meet the
              ever-changing demands of the automotive industry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Personalized attention is guaranteed, ensuring your satisfaction to the highest level.
              The latest equipment and vast experience of our team join hands towards delivering
              highly prompt, courteous and quality service to our elite clientele.
            </p>
          </div>
          <div className="bg-secondary border-t-2 border-gold p-8">
            <h3 className="font-display text-xl mb-4">Workshop Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Full Car Service",
                "Body Fabrication, Welding & Painting",
                "Vehicle Engine Computer Inspection & Resetting",
                "Accidental Collision & Body Repairs",
                "24hr Recovery Services",
                "Suspension Repair & Upgrade Services",
                "Computerized Paint Colour Mixing",
                "Temperature-Controlled Paint Booth",
                "Car Wash & Detailing",
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
