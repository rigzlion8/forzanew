import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";
import {
  Shield,
  Radio,
  Truck,
  Camera,
  Lock,
  UserCheck,
  Building2,
  Briefcase,
  Dog,
  Wrench,
  Package,
  Satellite,
} from "lucide-react";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
});

const services = [
  {
    Icon: Shield,
    t: "Manned Guarding",
    d: "Highly trained uniformed officers for residential, commercial and industrial sites.",
    to: "/services/guarding",
  },
  {
    Icon: Radio,
    t: "Alarm Response",
    d: "24/7 control room monitoring with rapid armed response units across Kenya.",
    to: "/services/alarm-response",
  },
  {
    Icon: Camera,
    t: "Technical Services",
    d: "CCTV, access control, fire detection and perimeter protection for total visibility.",
    to: "/services/technical",
  },
  {
    Icon: Truck,
    t: "Cash in Transit",
    d: "Secure cash and valuables movement with armored vehicles and certified crews.",
    to: "/services/cash-management",
  },
  {
    Icon: Satellite,
    t: "Tracking",
    d: "GPS fleet and asset tracking with real-time monitoring at our 24/7 control room.",
    to: "/services/tracking",
  },
  {
    Icon: Dog,
    t: "K9 Security Dogs",
    d: "Trained patrol, narcotics and explosives detection dogs with expert handlers.",
    to: "/services/k9",
  },
  {
    Icon: Package,
    t: "Courier Services",
    d: "National and international courier, high-value manned delivery and warehousing.",
    to: "/services/courier",
  },
  {
    Icon: Building2,
    t: "Event Security",
    d: "From corporate gatherings to large-scale events — planned, briefed and delivered.",
    to: "/services/special",
  },
  {
    Icon: UserCheck,
    t: "VIP & Close Protection",
    d: "Discreet, professional executive protection for high-profile individuals.",
    to: "/services/special",
  },
  {
    Icon: Briefcase,
    t: "Risk Consultancy",
    d: "Threat assessment, audits, investigations and tailored security strategy.",
    to: "/services/special",
  },
  {
    Icon: Lock,
    t: "Home Security",
    d: "Comprehensive home security solutions for your family and property.",
    to: "/services/home-security",
  },
  {
    Icon: Wrench,
    t: "Workshop",
    d: "Automotive service, body repairs and 24hr recovery services.",
    to: "/services/workshop",
  },
];

function ServicesIndex() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="A complete portfolio of security solutions — engineered around your risk profile."
      />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ Icon, t, d, to }) => (
            <Link
              key={t}
              to={to}
              className="border border-border p-6 hover:border-gold transition-colors group"
            >
              <div className="h-12 w-12 bg-ink flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
                <Icon className="h-6 w-6 text-gold group-hover:text-ink" />
              </div>
              <h3 className="font-display text-lg mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </Link>
          ))}
        </div>
      </Section>
      <section className="bg-ink text-white py-16">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl">Need a tailored solution?</h2>
          <div className="gold-divider" />
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Our specialists will assess your site and design a security plan that fits.
          </p>
          <Link to="/contacts" className="btn-gold">
            Request a Free Survey
          </Link>
        </div>
      </section>
    </>
  );
}
