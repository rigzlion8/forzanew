import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";
import { Shield, Radio, Truck, Camera, Lock, UserCheck, Building2, Briefcase } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Forza Security" },
      {
        name: "description",
        content:
          "Manned guarding, alarm response, electronic security and integrated risk management solutions across Kenya.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    Icon: Shield,
    t: "Manned Guarding",
    d: "Highly trained uniformed officers for residential, commercial and industrial sites.",
  },
  {
    Icon: Radio,
    t: "Alarm Response",
    d: "24/7 control room monitoring with rapid armed response units across Kenya.",
  },
  {
    Icon: Camera,
    t: "Electronic Security",
    d: "CCTV, access control and intrusion detection integrated for total visibility.",
  },
  {
    Icon: Truck,
    t: "Cash in Transit",
    d: "Secure cash and valuables movement with armored vehicles and certified crews.",
  },
  {
    Icon: Lock,
    t: "Asset Protection",
    d: "Protecting your premises, people and stock with layered security strategies.",
  },
  {
    Icon: UserCheck,
    t: "VIP & Close Protection",
    d: "Discreet, professional executive protection for high-profile individuals.",
  },
  {
    Icon: Building2,
    t: "Event Security",
    d: "From corporate gatherings to large-scale events — planned, briefed and delivered.",
  },
  {
    Icon: Briefcase,
    t: "Risk Consultancy",
    d: "Threat assessment, audits and tailored security strategy for your organization.",
  },
];

function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="A complete portfolio of security solutions — engineered around your risk profile."
      />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ Icon, t, d }) => (
            <article
              key={t}
              className="border border-border p-6 hover:border-gold transition-colors group"
            >
              <div className="h-12 w-12 bg-ink flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
                <Icon className="h-6 w-6 text-gold group-hover:text-ink" />
              </div>
              <h3 className="font-display text-lg mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </article>
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
