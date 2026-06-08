import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";
import { Heart, GraduationCap, Leaf, HandHeart } from "lucide-react";

export const Route = createFileRoute("/csr")({
  head: () => ({ meta: [
    { title: "Corporate Social Responsibility — SGA Security" },
    { name: "description", content: "Investing in the communities where we operate through education, environment, health and empowerment initiatives." },
  ]}),
  component: CSR,
});

function CSR() {
  return (
    <>
      <PageHero title="Corporate Social Responsibility" subtitle="Giving back to the communities that have given us so much." />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { Icon: GraduationCap, t: "Education", d: "Scholarships and learning resources for talented students from underserved backgrounds." },
            { Icon: Heart, t: "Health", d: "Sponsoring health camps and contributing to medical equipment in regional hospitals." },
            { Icon: Leaf, t: "Environment", d: "Tree-planting drives and clean-up initiatives across our areas of operation." },
            { Icon: HandHeart, t: "Empowerment", d: "Training and employment programs that uplift youth and women in our communities." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="text-center p-6 border border-border hover:border-gold transition-colors">
              <Icon className="h-10 w-10 text-gold mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
