import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/services/alarm-response")({
  head: () => ({
    meta: [
      { title: "Alarm Response — Forza Security" },
      {
        name: "description",
        content:
          "24/7 control room monitoring with rapid armed and unarmed response units across Kenya.",
      },
    ],
  }),
  component: AlarmResponse,
});

function AlarmResponse() {
  return (
    <>
      <PageHero
        title="Alarm Response"
        subtitle="Your security is our highest priority — monitoring and armed response services closely integrated 24/7."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Rapid Response When You Need It</h2>
            <div className="h-[2px] w-12 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Forza Security, your security is our highest priority. Monitoring and armed
              response services are closely integrated, combining advanced technology with dedicated
              manpower that is there when you need it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When an activation signal is received at our Control Room, professional and
              well-trained staff will coordinate and dispatch armed or unarmed response teams to
              verify whether the activation was inadvertent or if an actual security breach has
              taken place.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Forza Security alarm response agents will verify the status of your property, facility
              or residence. Once a threat has been identified, the response agent will immediately
              notify our Control Room to dispatch law enforcement.
            </p>
          </div>
          <div className="bg-secondary border-t-2 border-gold p-8">
            <h3 className="font-display text-xl mb-4">Alarm Response Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "24/7 Control Room Monitoring",
                "Strategically Based Radio-Dispatched Response Vehicles",
                "Highly Trained Unarmed and Armed Units",
                "Fleet of Vehicles Equipped with Satellite Tracking",
                "K9 Tracker Dogs Response Unit on Call",
                "Self-Testing Digital Alarm Transmitters with Anti-Tamper",
                "SMS Alerts for Client Notification",
                "Roadside Rescue Service for Clients",
                "Video Alarm Verification",
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
      <section className="bg-secondary py-16">
        <Section>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-background border-t-2 border-gold p-8">
              <h3 className="font-display text-xl mb-4">Fire Alarm Response</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Forza Security is a fully accredited fire safety and prevention provider offering
                services that include design, supply, installation and commission of a wide range of
                fire alarms — from detection and protection systems to suppression, emergency
                lighting and nurse call systems.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Fire Alarm Solutions",
                  "Portable Fire Extinguishers",
                  "Fire Risk Assessment",
                  "Fire Signage",
                  "Regular Service and Maintenance",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gold">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background border-t-2 border-gold p-8">
              <h3 className="font-display text-xl mb-4">Fire Monitoring & Response</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our fire alarm response team will carry out an assessment of your premises to ensure
                that the fire solution offered is tailored to meet each client's specific
                requirements. Regular service and maintenance is conducted for both fire and
                security equipment to ensure that all systems are in good condition at all times.
              </p>
            </div>
          </div>
        </Section>
      </section>
    </>
  );
}
