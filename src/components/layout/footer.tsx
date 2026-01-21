import Link from "next/link";
import { Mail, Phone, MapPin, Server, Shield } from "lucide-react";

const services = [
  { name: "Design", href: "/diensten/design" },
  { name: "Development", href: "/diensten/development" },
  { name: "Hosting", href: "/diensten/hosting" },
  { name: "Onderhoud", href: "/diensten/onderhoud" },
  { name: "SEO", href: "/diensten/seo" },
  { name: "Online Marketing", href: "/diensten/online-marketing" },
];

const packages = [
  { name: "Solid Start", href: "/tarieven" },
  { name: "Firm Foundation", href: "/tarieven" },
];

const company = [
  { name: "Over Robuust", href: "/over" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Referenties", href: "/referenties" },
  { name: "Partners", href: "/partners" },
  { name: "Vacatures", href: "/vacatures" },
  { name: "Contact", href: "/contact" },
];

const resources = [
  { name: "Blog", href: "/blog" },
  { name: "Kennisbank", href: "/kennisbank" },
  { name: "FAQ", href: "/faq" },
  { name: "Support", href: "/support" },
  { name: "Tooling", href: "/tooling" },
  { name: "Tarieven", href: "/tarieven" },
];

const legal = [
  { name: "Privacy", href: "/privacy" },
  { name: "AVG", href: "/avg" },
  { name: "Voorwaarden", href: "/voorwaarden" },
  { name: "Sitemap", href: "/sitemap.xml" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Diensten
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Packages & Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Pakketten
            </h3>
            <ul className="mt-4 space-y-3">
              {packages.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Bedrijf
              </h3>
              <ul className="mt-4 space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:info@robuustmarketing.nl"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@robuustmarketing.nl
                </a>
              </li>
              <li>
                <a
                  href="tel:+31850604877"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +31 85 060 48 77
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>Nederland</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Trust Indicators */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Vertrouwd Door
            </h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-background p-4 hover:border-accent/30 transition-colors">
                <div className="text-3xl font-bold text-accent">70+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Websites beheerd
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background p-4 hover:border-accent/30 transition-colors">
                <div className="text-3xl font-bold text-accent">99.9%</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Uptime garantie
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Server className="h-5 w-5 text-accent" />
              <span className="text-sm text-white/80">
                Hosting op dedicated Europese servers (Duitsland/Finland)
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm text-white/80">
                Volledig AVG-compliant
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Logo & Copyright */}
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold text-white">
                Robuust<span className="text-accent">.</span>
              </span>
              <p className="text-sm text-muted-foreground">
                © {currentYear} Robuust Marketing. Alle rechten voorbehouden.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
