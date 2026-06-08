import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";
import { MapPin, Briefcase } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Forza Security" },
      {
        name: "description",
        content:
          "Build a rewarding career in security. View open positions across our branches in Kenya.",
      },
    ],
  }),
  component: Careers,
});

const jobs = [
  { t: "Security Officer", loc: "Nairobi, Kenya", type: "Full-time" },
  { t: "Control Room Operator", loc: "Nairobi, Kenya", type: "Shift" },
  { t: "Armed Response Driver", loc: "Mombasa, Kenya", type: "Full-time" },
  { t: "Operations Supervisor", loc: "Nakuru, Kenya", type: "Full-time" },
  { t: "Sales Executive", loc: "Mombasa, Kenya", type: "Full-time" },
  { t: "CCTV Technician", loc: "Kisumu, Kenya", type: "Full-time" },
];

function Careers() {
  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Join a team that takes pride in protecting people, property and possibility."
      />
      <Section>
        <div className="grid gap-4">
          {jobs.map((j) => (
            <div
              key={j.t}
              className="flex flex-wrap items-center justify-between gap-4 border border-border p-6 hover:border-gold transition-colors"
            >
              <div>
                <h3 className="font-display text-lg">{j.t}</h3>
                <div className="flex gap-4 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-gold" />
                    {j.loc}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-3 w-3 text-gold" />
                    {j.type}
                  </span>
                </div>
              </div>
              <Link to="/contacts" className="btn-gold-outline text-ink hover:bg-gold">
                Apply
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
