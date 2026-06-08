import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/services/home-security")({
  head: () => ({
    meta: [
      { title: "Home Security — Forza Security" },
      {
        name: "description",
        content:
          "Comprehensive home security solutions protecting your family, property and peace of mind across Kenya.",
      },
    ],
  }),
  component: HomeSecurity,
});

function HomeSecurity() {
  return (
    <>
      <PageHero
        title="Home Security"
        subtitle="Comprehensive protection for your family, property and peace of mind."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Protect What Matters Most</h2>
            <div className="h-[2px] w-12 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your home is your sanctuary. Forza Security provides comprehensive home security
              solutions designed to protect your family, property and give you true peace of mind.
              Our approach begins with a thorough assessment of your property to identify
              vulnerabilities and design a tailored security plan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We combine professionally trained security personnel with the latest electronic
              security technology — from CCTV and alarm systems to access control and perimeter
              protection — all monitored at our 24/7 Control Room.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need a simple alarm system or a fully integrated smart security solution,
              our experts will design, install and maintain a system that fits your lifestyle and
              budget.
            </p>
          </div>
          <div className="bg-secondary border-t-2 border-gold p-8">
            <h3 className="font-display text-xl mb-4">Home Security Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Home Security Assessment & Risk Survey",
                "Intruder Alarm System Installation",
                "CCTV & Video Monitoring",
                "Access Control Systems",
                "Panic Button & 24/7 Alarm Response",
                "Perimeter Protection & Electric Fencing",
                "Smart Home Security Integration",
                "Fire Detection & Smoke Alarms",
                "Manned Guarding for Residential Estates",
                "Regular System Maintenance & Testing",
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
