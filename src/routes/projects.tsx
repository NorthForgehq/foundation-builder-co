import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { cn } from "@/lib/utils";

import projDriveway from "@/assets/project-driveway.jpg";
import projCommercial from "@/assets/project-commercial.jpg";
import projRetaining from "@/assets/project-retaining.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Civil Constructions Auckland" },
      { name: "description", content: "Browse our Auckland concrete construction portfolio — residential driveways, commercial slabs, retaining walls and civil works." },
      { property: "og:title", content: "Civil Constructions Projects" },
      { property: "og:description", content: "Concrete projects across Greater Auckland." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const filters = ["All", "Commercial", "Residential", "Foundations", "Civil Works"] as const;

const projects = [
  { img: projCommercial, title: "Westgate Commercial Slab", category: "Commercial", date: "2024", location: "Westgate, Auckland" },
  { img: projDriveway, title: "Remuera Residence Driveway", category: "Residential", date: "2024", location: "Remuera" },
  { img: projRetaining, title: "Titirangi Retaining Wall", category: "Civil Works", date: "2023", location: "Titirangi" },
  { img: projCommercial, title: "Mt Wellington Warehouse Foundation", category: "Foundations", date: "2023", location: "Mt Wellington" },
  { img: projDriveway, title: "Albany Residential Subdivision", category: "Residential", date: "2024", location: "Albany" },
  { img: projRetaining, title: "North Shore Hillside Walls", category: "Civil Works", date: "2022", location: "North Shore" },
  { img: projCommercial, title: "East Tāmaki Industrial Pour", category: "Commercial", date: "2023", location: "East Tāmaki" },
  { img: projDriveway, title: "Howick Coastal Home Drive", category: "Residential", date: "2024", location: "Howick" },
  { img: projCommercial, title: "Manukau Foundation Works", category: "Foundations", date: "2024", location: "Manukau" },
];

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => active === "All" || p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A decade of Auckland's strongest concrete."
        description="Over 1000 completed projects and counting. Browse a selection of recent residential, commercial and civil works."
      />

      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-full border transition-all",
                  active === f
                    ? "bg-charcoal text-white border-charcoal"
                    : "border-border text-charcoal hover:border-charcoal",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p, i) => (
              <article key={i} className="group relative overflow-hidden rounded-md bg-charcoal aspect-[4/5]">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-white/70 mb-2">
                    <span className="text-brand font-semibold">{p.category}</span>
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    <span>{p.date}</span>
                  </div>
                  <h2 className="font-display font-bold text-white text-2xl leading-tight">{p.title}</h2>
                  <div className="text-sm text-white/60 mt-1">{p.location}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}