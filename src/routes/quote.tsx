import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Free Quote — Civil Constructions Auckland" },
      { name: "description", content: "Request a free, fixed-price quote from Auckland's trusted concrete construction team. No obligation." },
      { property: "og:title", content: "Get a Free Quote — Civil Constructions" },
      { property: "og:description", content: "Fixed-price quotes for Auckland concrete projects." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

const serviceOptions = [
  "Foundations",
  "Driveway",
  "Concrete Slab",
  "Retaining Wall",
  "Site Preparation",
  "Commercial Project",
  "Residential Project",
  "Repairs & Maintenance",
];

const timelines = ["ASAP", "Within 1 month", "1–3 months", "Planning ahead"];
const budgets = ["Under $10k", "$10k–$30k", "$30k–$75k", "$75k+"];

const schema = z.object({
  service: z.string().min(1),
  timeline: z.string().min(1),
  budget: z.string().min(1),
  location: z.string().trim().min(2).max(100),
  details: z.string().trim().min(10).max(1500),
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(30),
});

function QuotePage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    service: "",
    timeline: "",
    budget: "",
    location: "",
    details: "",
    name: "",
    email: "",
    phone: "",
  });
  const [done, setDone] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    const res = schema.safeParse(data);
    if (!res.success) {
      toast.error("Please complete all fields.");
      return;
    }
    setDone(true);
    toast.success("Quote request received!");
  };

  return (
    <>
      <PageHero
        eyebrow="Free Quote"
        title="Get a fixed-price concrete quote."
        description="Four quick steps. No obligation. A qualified estimator will be in touch within one business day."
      />

      <section className="py-24 bg-background">
        <div className="container-wide max-w-3xl">
          {done ? (
            <div className="bg-secondary border border-border rounded-md p-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-brand-foreground">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="mt-6 font-display font-bold text-3xl text-charcoal">
                Thanks — we've got your details.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Our team will review your project and call you within one business day on{" "}
                <strong className="text-charcoal">{data.phone}</strong>.
              </p>
            </div>
          ) : (
            <div className="bg-secondary border border-border rounded-md p-8 lg:p-12">
              <Stepper step={step} />

              {step === 0 && (
                <Pick
                  title="What type of project?"
                  options={serviceOptions}
                  value={data.service}
                  onPick={(v) => setData({ ...data, service: v })}
                />
              )}

              {step === 1 && (
                <div className="space-y-8">
                  <Pick
                    title="When do you need it done?"
                    options={timelines}
                    value={data.timeline}
                    onPick={(v) => setData({ ...data, timeline: v })}
                  />
                  <Pick
                    title="What's your budget?"
                    options={budgets}
                    value={data.budget}
                    onPick={(v) => setData({ ...data, budget: v })}
                  />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <h2 className="font-display font-bold text-2xl text-charcoal">Project details</h2>
                  <div className="space-y-2">
                    <Label htmlFor="location">Project location (suburb)</Label>
                    <Input id="location" className="bg-background h-12" value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="details">Tell us about the project</Label>
                    <Textarea id="details" rows={6} className="bg-background" value={data.details} onChange={(e) => setData({ ...data, details: e.target.value })} />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <h2 className="font-display font-bold text-2xl text-charcoal">Your details</h2>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" className="bg-background h-12" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" className="bg-background h-12" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" className="bg-background h-12" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-10 flex justify-between gap-3">
                <Button variant="ghost" onClick={back} disabled={step === 0} size="lg">
                  <ArrowLeft className="h-4 w-4" /> Back
                </Button>
                {step < 3 ? (
                  <Button variant="brand" size="lg" onClick={next}>
                    Continue <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="brand" size="lg" onClick={submit}>
                    Submit Request
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Stepper({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-2 mb-10">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex-1">
          <div
            className={cn(
              "h-1.5 rounded-full transition-colors",
              i <= step ? "bg-brand" : "bg-border",
            )}
          />
          <div className={cn("mt-2 text-xs uppercase tracking-wider", i <= step ? "text-charcoal" : "text-muted-foreground")}>
            Step {i + 1}
          </div>
        </div>
      ))}
    </div>
  );
}

function Pick({
  title,
  options,
  value,
  onPick,
}: {
  title: string;
  options: string[];
  value: string;
  onPick: (v: string) => void;
}) {
  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-charcoal mb-5">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onPick(o)}
            className={cn(
              "rounded-md border p-4 text-left text-sm font-medium transition-all",
              value === o
                ? "border-brand bg-brand/10 text-charcoal"
                : "border-border bg-background text-charcoal hover:border-charcoal",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}