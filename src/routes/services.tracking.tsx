import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/services/tracking")({
  head: () => ({
    meta: [
      { title: "Fleet Tracking — Forza Security" },
      {
        name: "description",
        content:
          "GPS fleet and asset tracking with real-time monitoring, geofencing and telematics across Kenya.",
      },
    ],
  }),
  component: Tracking,
});

function Tracking() {
  return (
    <>
      <PageHero
        title="Tracking & Telematics"
        subtitle="Know where your assets are at all times — real-time GPS monitoring from our 24/7 control room."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Fleet & Asset Tracking</h2>
            <div className="h-[2px] w-12 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a business owner, you want to know how your vehicles are being handled, where they
              have travelled to and ensure that your drivers are arriving on time to your customers.
              Forza Security fleet tracking solutions allow clients to monitor fleet and assets in
              real-time, save on fuel costs and improve the safety and efficiency of your entire
              fleet.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Forza Security uses GPS and Satellite systems to monitor installed units at our
              24-hour operational Control Room where all alerts are logged and reported — including
              Geofencing, remote immobilization and route monitoring.
            </p>
          </div>
          <div className="bg-secondary border-t-2 border-gold p-8">
            <h3 className="font-display text-xl mb-4">Tracking Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Real-Time GPS Fleet Tracking",
                "Asset Tracking (Including Movable Containers)",
                "Geofencing Alerts",
                "Remote Vehicle Immobilization",
                "Route Monitoring",
                "Telematics Control Systems",
                "Outsourced Fleet Management",
                "Investigation Support",
                "Driver Behavior Monitoring",
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
