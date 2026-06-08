import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-shell";
import newsCard from "@/assets/news-card.jpg";
import servicesCard from "@/assets/services-card.jpg";
import aboutCard from "@/assets/about-card.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [
    { title: "News & Insights — SGA Security" },
    { name: "description", content: "Latest updates, community initiatives and security industry insights from SGA Security." },
  ]}),
  component: News,
});

const posts = [
  { img: newsCard, date: "May 2026", title: "SGA Security Welcomes Industry Partners to HQ", excerpt: "An interactive visit highlighting our role in shaping the regional security landscape." },
  { img: servicesCard, date: "Apr 2026", title: "New Armed Response Fleet Rolls Out", excerpt: "Modernized vehicles equipped with advanced telematics now patrol three additional regions." },
  { img: aboutCard, date: "Mar 2026", title: "Investing in Officer Training", excerpt: "Our new academy graduates 1,200 officers ready to deliver world-class service." },
];

function News() {
  return (
    <>
      <PageHero title="News & Insights" subtitle="What's happening at SGA Security and across the industry." />
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(p => (
            <article key={p.title} className="group">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.title} width={800} height={600} loading="lazy" className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-xs uppercase tracking-widest text-gold mt-5">{p.date}</div>
              <h3 className="font-display text-xl mt-2 group-hover:text-gold transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
