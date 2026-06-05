import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-charcoal/90 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand text-brand-foreground font-display font-bold text-lg">
            CC
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-white text-lg tracking-tight">
              Civil Constructions
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
              Auckland · NZ
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-brand" }}
              inactiveProps={{ className: "text-white/80" }}
              className="px-4 py-2 text-sm font-medium hover:text-brand transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0800256621"
            className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4 text-brand" />
            <span className="font-medium">0800 CLMNC1</span>
          </a>
          <Button asChild variant="brand" size="lg">
            <Link to="/quote">Get Free Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-white/10"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-charcoal animate-fade-in">
          <div className="container-wide flex flex-col py-4 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-brand bg-white/5" }}
                className="rounded-md px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild variant="brand" size="lg" className="mt-3">
              <Link to="/quote" onClick={() => setOpen(false)}>
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}