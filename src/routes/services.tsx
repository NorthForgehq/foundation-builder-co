import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Compass,
  HardHat,
  Hammer,
  Home as HomeIcon,
  Layers,
  Mountain,
  Truck,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Concrete Construction Auckland | Civil Constructions" },
      { name: "description", content: "Foundations, driveways, slabs, retaining walls, civil works and commercial concrete services across Auckland." },
      { property: "og:title", content: "Concrete Services — Civil Constructions" },
      { property: "og:description", content: "Every concrete service for Auckland's homes and businesses." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Layers, title: "Concrete Foundations", desc: "Engineered footings, raft slabs and pile foundations to NZS 3604 and 3101. Built to outlast the buildings they support." },
  { icon: HardHat, title: "Civil Construction", desc: "Earthworks, drainage, kerbing and structural concrete for subdivisions, commercial and infrastructure projects." },
  { icon: Truck, title: "Driveways", desc: "Exposed aggregate, coloured, broom-finish and stamped driveways. Sealed and built to last Auckland winters." },
  { icon: Hammer, title: "Concrete Slabs", desc: "Precision-poured slabs for homes, workshops, sheds and warehouses with laser-screed finish." },
  { icon: Mountain, title: "Retaining Walls", desc: "Engineered concrete and timber-faced retaining solutions for Auckland's hillside sites." },
  { icon: Compass, title: "Site Preparation", desc: "Excavation, levelling, compaction and drainage — the right groundwork for any build." },
  { icon: HomeIcon, title: "Residential Concrete", desc: "Patios, paths, pool surrounds and decorative work for Auckland homes." },
  { icon: Wrench, title: "Commercial Concrete", desc: "Reliable, programmed concrete delivery for developers, head contractors and councils." },
  { icon: Wrench, title: "Repairs & Maintenance", desc: "Crack repair, resurfacing, sealing and ongoing maintenance for existing concrete." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every concrete service. One trusted Auckland team."
        description="From the first scope conversation to the final cure, Civil Constructions delivers complete concrete solutions for residential and commercial projects."
      />

      <section className="py-24 bg-background">
        <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative bg-background border border-border p-8 rounded-md hover:border-charcoal hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-all">
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 font-display font-semibold text-2xl text-charcoal">{s.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-charcoal/20 group-hover:text-brand transition-colors" />
              </article>
            );
          })}
        </div>

        <div className="container-wide mt-20 bg-charcoal text-white rounded-md p-10 lg:p-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl">Not sure which service you need?</h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Tell us about your project — we'll send a qualified estimator to scope it on site, free of charge.
          </p>
          <Button asChild variant="brand" size="xl" className="mt-8">
            <Link to="/quote">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}