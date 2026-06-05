import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, CheckCircle2, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Civil Constructions Auckland" },
      { name: "description", content: "Meet the Auckland concrete team behind 1000+ delivered projects. Our story, values, certifications and people." },
      { property: "og:title", content: "About Civil Constructions" },
      { property: "og:description", content: "15+ years building Auckland's foundations." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, t: "Safety First", d: "Site Safe accredited with zero-harm culture." },
  { icon: Award, t: "Craftsmanship", d: "10-year workmanship warranty on every pour." },
  { icon: Users, t: "People First", d: "Long-term trades, long-term client relationships." },
  { icon: CheckCircle2, t: "Accountability", d: "Fixed prices, clear timelines, no surprises." },
];

const team = [
  { name: "David Clark", role: "Founder & Managing Director", initials: "DC" },
  { name: "Michael Tane", role: "Operations Manager", initials: "MT" },
  { name: "Aroha Ngata", role: "Project Coordinator", initials: "AN" },
  { name: "Steve Williams", role: "Lead Concrete Foreman", initials: "SW" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Civil Constructions"
        title="Built on Auckland soil. Trusted on every job."
        description="Since 2010 we've poured the foundations beneath thousands of Auckland homes, warehouses and civil projects — earning a reputation for craftsmanship, safety and straight-up honesty."
      />

      <section className="py-24 lg:py-32 bg-background">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={aboutImg}
            alt="Civil Constructions team on site"
            loading="lazy"
            width={1200}
            height={1200}
            className="aspect-[4/5] w-full object-cover rounded-sm shadow-2xl"
          />
          <div>
            <div className="eyebrow mb-4">Our story</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-charcoal leading-tight">
              A family-run team that grew into Auckland's go-to concrete crew.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Civil Constructions started in 2010 with one ute, one mixer and a commitment
                that's never changed: do the job right, every time. Fifteen years later we run
                multiple crews across Greater Auckland, but the standards haven't budged.
              </p>
              <p>
                We're proudly LBP-certified, Site Safe accredited and a member of the New Zealand
                Concrete Contractors Association. Every project — residential driveway or
                100-tonne commercial slab — gets the same disciplined approach.
              </p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {["Licensed Building Practitioners", "Site Safe Certified", "10-Year Warranty", "NZCCA Member"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-charcoal">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow mb-3">Our values</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-charcoal">
              What we stand for.
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.t} className="bg-background border border-border p-8 rounded-md hover:border-brand transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand/10 text-brand">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg text-charcoal">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-wide">
          <div className="eyebrow mb-3">Leadership</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-charcoal max-w-2xl">
            The people behind every pour.
          </h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-[4/5] bg-charcoal text-white flex items-center justify-center font-display font-bold text-5xl rounded-sm group-hover:bg-brand transition-colors">
                  {m.initials}
                </div>
                <div className="mt-4">
                  <div className="font-display font-semibold text-lg text-charcoal">{m.name}</div>
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="brand" size="xl">
              <Link to="/quote">Work with our team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}