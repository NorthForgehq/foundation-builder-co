import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  HardHat,
  Hammer,
  Home as HomeIcon,
  Layers,
  MapPinned,
  Mountain,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Users,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import projDriveway from "@/assets/project-driveway.jpg";
import projCommercial from "@/assets/project-commercial.jpg";
import projRetaining from "@/assets/project-retaining.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Civil Constructions — Auckland Concrete Construction Experts" },
      {
        name: "description",
        content:
          "Premium commercial & residential concrete construction in Auckland. Foundations, driveways, slabs, retaining walls, civil works. Get a free quote today.",
      },
      { property: "og:title", content: "Civil Constructions — Auckland Concrete Experts" },
      {
        property: "og:description",
        content:
          "15+ years building Auckland's foundations. Quality, durability and precision on every project.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "1000+", label: "Projects Completed" },
  { value: "2400+", label: "Happy Clients" },
  { value: "100%", label: "Quality Commitment" },
];

const services = [
  { icon: Layers, title: "Concrete Foundations", desc: "Engineered foundations built to NZS standards for any load." },
  { icon: HardHat, title: "Civil Construction", desc: "Full-scale civil works from earthworks to structural concrete." },
  { icon: Truck, title: "Driveways", desc: "Premium exposed, coloured and broom-finish driveways." },
  { icon: Hammer, title: "Concrete Slabs", desc: "Precision-poured slabs for homes, workshops and warehouses." },
  { icon: Mountain, title: "Retaining Walls", desc: "Engineered retaining solutions for Auckland's varied terrain." },
  { icon: Compass, title: "Site Preparation", desc: "Earthworks, drainage and ground prep done right the first time." },
  { icon: HomeIcon, title: "Residential Projects", desc: "Bespoke concrete work for homes across Auckland." },
  { icon: Wrench, title: "Commercial Projects", desc: "Reliable concrete delivery for developers and contractors." },
];

const projects = [
  { img: projCommercial, title: "Westgate Commercial Slab", category: "Commercial", date: "2024", size: "lg" },
  { img: projDriveway, title: "Remuera Residence Driveway", category: "Residential", date: "2024", size: "md" },
  { img: projRetaining, title: "Titirangi Retaining Wall", category: "Civil Works", date: "2023", size: "md" },
  { img: projCommercial, title: "Mt Wellington Warehouse Foundation", category: "Foundations", date: "2023", size: "md" },
  { img: projDriveway, title: "Albany Residential Subdivision", category: "Residential", date: "2024", size: "md" },
  { img: projRetaining, title: "North Shore Hillside Walls", category: "Civil Works", date: "2022", size: "lg" },
];

const filters = ["All", "Commercial", "Residential", "Foundations", "Civil Works"] as const;

const whyUs = [
  { icon: Users, title: "Experienced Team", desc: "Tradespeople averaging 12+ years on the tools." },
  { icon: ShieldCheck, title: "Licensed Professionals", desc: "Fully LBP-certified and Site Safe accredited." },
  { icon: Truck, title: "Modern Equipment", desc: "Latest pumps, lasers and finishing gear on every job." },
  { icon: ClipboardCheck, title: "On-Time Delivery", desc: "Programmed schedules we hit — without compromise." },
  { icon: HardHat, title: "Safety First", desc: "Zero-harm site culture backed by daily toolbox talks." },
  { icon: Award, title: "Quality Guaranteed", desc: "10-year workmanship warranty on every pour." },
];

const process = [
  { n: "01", title: "Consultation", desc: "We listen, scope, and align on your vision and budget." },
  { n: "02", title: "Site Assessment", desc: "On-site visit to assess access, ground and constraints." },
  { n: "03", title: "Planning", desc: "Engineered drawings, programme and fixed-price quote." },
  { n: "04", title: "Construction", desc: "Tight-knit crews execute to spec with daily updates." },
  { n: "05", title: "Quality Inspection", desc: "Independent checks before any concrete is signed off." },
  { n: "06", title: "Project Delivery", desc: "Walk-through, handover and our 10-year guarantee." },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Remuera",
    rating: 5,
    quote:
      "Civil Constructions transformed our driveway and outdoor area. The finish is flawless and the team was professional from quote to handover.",
  },
  {
    name: "James Patterson",
    role: "Director, Patterson Developments",
    rating: 5,
    quote:
      "We've used Civil for three commercial slabs now. Always on programme, always to spec. They've become our go-to concrete partner.",
  },
  {
    name: "Mele Tupou",
    role: "Project Manager, Auckland Build Co.",
    rating: 5,
    quote:
      "Outstanding workmanship on a complex retaining wall job. Communication was excellent and safety on site was second to none.",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <WhyUs />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative -mt-20 min-h-[100dvh] flex items-end overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Concrete construction site in Auckland at sunset"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/40 to-transparent" />
      </div>

      <div className="container-wide relative pb-24 pt-40 lg:pb-32 lg:pt-44">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6 animate-fade-in">
            <span className="h-px w-8 bg-brand" />
            Auckland Concrete Specialists
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight animate-fade-in">
            Building Strong
            <br />
            Foundations for
            <br />
            <span className="text-brand">Auckland's Future.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-white/75 leading-relaxed animate-fade-in">
            Trusted commercial & residential concrete construction specialists delivering
            quality, durability and precision on every project.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in">
            <Button asChild variant="brand" size="xl">
              <Link to="/quote">
                Get Free Quote <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link to="/projects">View Projects</Link>
            </Button>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">
            {["Licensed Building Practitioners", "Site Safe Certified", "10-Year Guarantee"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative bg-charcoal-deep text-white py-20 lg:py-24">
      <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left border-l-2 border-brand pl-6">
            <div className="font-display font-bold text-5xl lg:text-6xl text-white">
              {s.value}
            </div>
            <div className="mt-3 text-sm uppercase tracking-wider text-white/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 hidden lg:block h-32 w-32 border-l-4 border-t-4 border-brand" />
          <img
            src={aboutImg}
            alt="Civil Constructions team reviewing plans on site"
            loading="lazy"
            width={1200}
            height={1200}
            className="relative aspect-[4/5] w-full object-cover rounded-sm shadow-2xl"
          />
          <div className="absolute -bottom-8 -right-4 lg:-right-12 bg-brand text-brand-foreground p-6 lg:p-8 max-w-xs shadow-2xl">
            <div className="font-display font-bold text-4xl">15+</div>
            <div className="text-sm uppercase tracking-wider mt-1">Years building Auckland</div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About Civil Constructions"
            title="Concrete Construction Experts You Can Trust."
            description="From residential foundations to large commercial pours, we bring 15+ years of disciplined craftsmanship to every site across Auckland. Safety, quality and reliability aren't slogans — they're how we operate."
          />

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { t: "Our Mission", d: "Deliver concrete that outlasts the buildings it supports." },
              { t: "Our Vision", d: "Be Auckland's most trusted concrete partner." },
              { t: "Core Values", d: "Integrity. Precision. Accountability." },
            ].map((b) => (
              <div key={b.t} className="border-t-2 border-brand pt-4">
                <div className="font-display font-semibold text-charcoal text-lg">{b.t}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button asChild variant="default" size="lg" className="bg-charcoal hover:bg-charcoal/90">
              <Link to="/about">
                Learn more about us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="What we do"
            title="Concrete services, end-to-end."
            description="From the first scope conversation to the final cure, we deliver every stage of your concrete project under one trusted roof."
          />
          <Button asChild variant="outline" size="lg" className="border-charcoal text-charcoal">
            <Link to="/services">All Services <ArrowUpRight className="h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-md overflow-hidden">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-background p-8 hover:bg-charcoal transition-all duration-500 cursor-pointer"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-all duration-500 group-hover:rotate-6">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display font-semibold text-xl text-charcoal group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-white/70 transition-colors leading-relaxed">
                  {s.desc}
                </p>
                <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-charcoal/20 group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Work we're proud to put our name on."
          />
          <div className="flex flex-wrap gap-2">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <article
              key={`${p.title}-${i}`}
              className={cn(
                "group relative overflow-hidden rounded-md bg-charcoal aspect-[4/5]",
                p.size === "lg" && "lg:row-span-2 lg:aspect-auto lg:min-h-[640px]",
              )}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-white/70 mb-2">
                  <span className="text-brand font-semibold">{p.category}</span>
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <span>{p.date}</span>
                </div>
                <h3 className="font-display font-bold text-white text-2xl lg:text-3xl leading-tight">
                  {p.title}
                </h3>
              </div>
              <div className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full glass-card opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal text-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Why Civil Constructions"
          title="Six reasons Auckland builders keep coming back."
          align="center"
          light
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-lg overflow-hidden">
          {whyUs.map((w) => {
            const Icon = w.icon;
            return (
              <div key={w.title} className="bg-charcoal p-8 hover:bg-charcoal-deep transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand/15 text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-xl text-white">{w.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Process"
          title="Six steps. Zero surprises."
          description="A disciplined process that keeps your project on time, on budget and on spec."
          align="center"
        />
        <div className="mt-20 relative grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {process.map((p) => (
            <div key={p.n} className="relative pl-20">
              <div className="absolute left-0 top-0 font-display font-bold text-7xl text-brand/20 leading-none">
                {p.n}
              </div>
              <h3 className="font-display font-semibold text-xl text-charcoal">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container-wide max-w-4xl text-center">
        <SectionHeading
          eyebrow="Client Stories"
          title="What our clients say."
          align="center"
        />

        <div className="mt-14 relative bg-background rounded-md p-10 lg:p-14 shadow-xl border border-border">
          <Quote className="absolute top-6 left-6 h-12 w-12 text-brand/20" />
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, idx) => (
              <Star key={idx} className="h-5 w-5 fill-brand text-brand" />
            ))}
          </div>
          <p className="font-display text-xl lg:text-2xl text-charcoal leading-relaxed">
            "{t.quote}"
          </p>
          <div className="mt-8 flex flex-col items-center gap-1">
            <div className="h-14 w-14 rounded-full bg-brand text-brand-foreground flex items-center justify-center font-display font-bold text-lg mb-2">
              {t.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="font-semibold text-charcoal">{t.name}</div>
            <div className="text-sm text-muted-foreground">{t.role}</div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  idx === i ? "w-8 bg-brand" : "w-2 bg-border hover:bg-concrete",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ctaBg}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal/90 to-charcoal/70" />
      </div>
      <div className="container-wide relative py-24 lg:py-32 text-white">
        <div className="max-w-3xl">
          <div className="eyebrow mb-5">
            <Sparkles className="h-4 w-4" /> Ready to build?
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05]">
            Ready to start your next concrete project?
          </h2>
          <p className="mt-6 text-lg text-white/75 max-w-xl">
            Get a fixed-price quote from Auckland's most trusted concrete team — no obligation,
            no surprises.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="brand" size="xl">
              <Link to="/quote">Request Free Consultation <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href="tel:0800256621">
                <Phone className="h-5 w-5" /> 0800 CLMNC1
              </a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-white/60">
            <MapPinned className="h-4 w-4 text-brand" /> Serving Greater Auckland, NZ
          </div>
        </div>
      </div>
    </section>
  );
}
