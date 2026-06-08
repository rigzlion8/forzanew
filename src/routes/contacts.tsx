import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Contact Us — Forza Security" },
      {
        name: "description",
        content:
          "Reach our 24/7 control room or request a free security quote. Premium security solutions across Kenya.",
      },
    ],
  }),
  component: Contacts,
});

function Contacts() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Our team is ready to help. Reach out for a quote, a question or a 24/7 response."
      />
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { Icon: MapPin, t: "Head Office", d: "Industrial Area, Nairobi, Kenya" },
              { Icon: Phone, t: "24/7 Control Room", d: "+254 737 033 727" },
              { Icon: Mail, t: "Email Us", d: "forzasec.ke@gmail.com" },
              { Icon: Clock, t: "Office Hours", d: "Mon–Fri: 8:00 AM – 5:00 PM" },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="flex gap-5 items-start border-l-2 border-gold pl-5 py-1">
                <Icon className="h-6 w-6 text-gold mt-1" />
                <div>
                  <div className="font-display text-lg">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-secondary p-8 border-t-2 border-gold space-y-4"
          >
            <h3 className="font-display text-2xl mb-2">Request a Quote</h3>
            {sent ? (
              <p className="text-sm text-ink bg-gold/30 p-4">
                Thank you — we'll be in touch shortly.
              </p>
            ) : (
              <>
                <input
                  required
                  placeholder="Full Name"
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none"
                />
                <input
                  required
                  placeholder="Phone Number"
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your security needs"
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none"
                />
                <button className="btn-gold w-full">Send Request</button>
              </>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}
