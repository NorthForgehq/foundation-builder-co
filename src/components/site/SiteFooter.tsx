import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal-deep text-white/80">
      <div className="container-wide py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-5">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand text-brand-foreground font-display font-bold">
              CC
            </div>
            <span className="font-display font-bold text-white text-xl">Civil Constructions</span>
          </Link>
          <p className="text-sm leading-relaxed text-white/60 max-w-sm">
            Trusted commercial and residential concrete construction specialists, delivering
            quality, durability and precision across Auckland, New Zealand.
          </p>
          <div className="flex gap-3 pt-2">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 hover:border-brand hover:text-brand transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-brand">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-brand">Projects</Link></li>
            <li><Link to="/services" className="hover:text-brand">Services</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
            <li><Link to="/quote" className="hover:text-brand">Free Quote</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wider">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            <li>Concrete Foundations</li>
            <li>Driveways & Paths</li>
            <li>Concrete Slabs</li>
            <li>Retaining Walls</li>
            <li>Site Preparation</li>
            <li>Commercial Concrete</li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wider">
            Get in touch
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-brand" />
              <span>Auckland, New Zealand</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand" />
              <a href="tel:0800256621" className="hover:text-white">0800 CLMNC1</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand" />
              <a href="mailto:hello@civilconstructions.co.nz" className="hover:text-white">
                hello@civilconstructions.co.nz
              </a>
            </li>
          </ul>
          <div className="mt-5 overflow-hidden rounded-md border border-white/10">
            <iframe
              title="Civil Constructions on Google Maps"
              src="https://www.google.com/maps?q=Auckland%2C%20New%20Zealand&output=embed"
              width="100%"
              height="140"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block grayscale-[60%]"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Civil Constructions Ltd. All rights reserved.</p>
          <p>Building strong foundations for Auckland's future.</p>
        </div>
      </div>
    </footer>
  );
}