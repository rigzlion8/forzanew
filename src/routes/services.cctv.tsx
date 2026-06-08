import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/services/cctv")({
  head: () => ({
    meta: [
      { title: "CCTV Installation — Forza Security" },
      {
        name: "description",
        content:
          "Professional CCTV installation, surveillance systems and video monitoring solutions across Kenya.",
      },
    ],
  }),
  component: CCTV,
});

function CCTV() {
  return (
    <>
      <PageHero
        title="CCTV Installation"
        subtitle="Professional surveillance systems — designed, installed and monitored for total peace of mind."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Surveillance You Can Trust</h2>
            <div className="h-[2px] w-12 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Forza Security provides professional CCTV installation services tailored to your
              specific security requirements. Whether for your home, business or industrial
              facility, our expert technicians design and deploy surveillance systems that give you
              complete visibility and control.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We offer a full range of camera technologies — from high-definition IP cameras and
              night vision to thermal imaging and license plate recognition. Every system is
              integrated with our 24/7 Control Room for live monitoring and instant response.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our after-sales support includes regular maintenance, system health checks and
              upgrades to ensure your surveillance infrastructure stays current and reliable.
            </p>
          </div>
          <div className="bg-secondary border-t-2 border-gold p-8">
            <h3 className="font-display text-xl mb-4">CCTV Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Site Survey & Security Assessment",
                "HD IP Camera Installation",
                "Night Vision & Infrared Cameras",
                "Thermal Imaging Cameras",
                "License Plate Recognition (LPR)",
                "Remote Viewing via Mobile & Desktop",
                "Video Analytics & Motion Detection",
                "24/7 Control Room Monitoring",
                "System Maintenance & Upgrades",
                "Network Video Recorder (NVR) Setup",
                "Cloud Backup & Storage Solutions",
                "Wireless CCTV Systems",
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
      <section className="bg-ink text-white py-16">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl">Why Choose Our CCTV Solutions?</h2>
          <div className="gold-divider" />
          <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
            {[
              {
                t: "Expert Installation",
                d: "Certified technicians with years of experience ensure proper placement, cabling and configuration.",
              },
              {
                t: "24/7 Monitoring",
                d: "All systems are connected to our Control Room for round-the-clock surveillance and rapid response.",
              },
              {
                t: "After-Sales Care",
                d: "Regular maintenance visits, system health checks and firmware updates keep your system running optimally.",
              },
            ].map(({ t, d }) => (
              <div
                key={t}
                className="border border-white/20 p-6 hover:border-gold transition-colors"
              >
                <h3 className="font-display text-gold text-lg mb-2">{t}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="/contacts" className="btn-gold">
              Request a Free Site Survey
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
