import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Civil Constructions Auckland" },
      { name: "description", content: "Get in touch with Civil Constructions. Auckland concrete experts ready to scope your next project." },
      { property: "og:title", content: "Contact Civil Constructions" },
      { property: "og:description", content: "Call 0800 CLMNC1 or send a message." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(6, "Phone required").max(30),
  message: z.string().trim().min(10, "Tell us a bit more").max(1500),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    toast.success("Thanks — we'll be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's build something solid."
        description="Send us a message or call directly — our team responds to every enquiry within one business day."
      />

      <section className="py-24 bg-background">
        <div className="container-wide grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {[
              { icon: Phone, t: "Call us", v: "0800 CLMNC1", href: "tel:0800256621" },
              { icon: Mail, t: "Email us", v: "hello@civilconstructions.co.nz", href: "mailto:hello@civilconstructions.co.nz" },
              { icon: MapPin, t: "Visit us", v: "Auckland, New Zealand", href: undefined as string | undefined },
            ].map((c) => {
              const Icon = c.icon;
              const Body = (
                <div className="flex gap-5 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-muted-foreground">{c.t}</div>
                    <div className="font-display font-semibold text-xl text-charcoal mt-1">{c.v}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.t} href={c.href} className="block">{Body}</a>
              ) : (
                <div key={c.t}>{Body}</div>
              );
            })}

            <div className="overflow-hidden rounded-md border border-border">
              <iframe
                title="Civil Constructions location"
                src="https://www.google.com/maps?q=Auckland%2C+New+Zealand&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 bg-secondary p-8 lg:p-12 rounded-md space-y-6">
            <h2 className="font-display font-bold text-3xl text-charcoal">Send us a message</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="name" label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} error={errors.name} />
              <Field id="email" label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} error={errors.email} />
            </div>
            <Field id="phone" label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} error={errors.phone} />
            <div className="space-y-2">
              <Label htmlFor="message">How can we help?</Label>
              <Textarea id="message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-background" />
              {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
            </div>
            <Button type="submit" variant="brand" size="xl" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} className="bg-background h-12" />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}