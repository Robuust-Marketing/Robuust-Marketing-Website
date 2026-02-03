"use client";

import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin, Server, Shield, Linkedin, Instagram, Facebook, Youtube, Twitter, Music2, Activity } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { type Locale } from "@/i18n/config";

type FooterLink = { name: string; href: string };

export function Footer() {
  const t = useTranslations("footer");
  const tCompany = useTranslations("company");
  const tResources = useTranslations("resources");
  const locale = useLocale() as Locale;
  const currentYear = new Date().getFullYear();

  // Use internal (Dutch) paths - next-intl Link handles translation automatically
  const services: FooterLink[] = [
    { name: "Design", href: "/diensten/design" },
    { name: "Development", href: "/diensten/development" },
    { name: "Hosting", href: "/diensten/hosting" },
    { name: locale === "nl" ? "Onderhoud" : "Maintenance", href: "/diensten/onderhoud" },
    { name: "SEO", href: "/diensten/seo" },
    { name: "Online Marketing", href: "/diensten/online-marketing" },
  ];

  const packages: FooterLink[] = [
    { name: "Solid Start", href: "/tarieven" },
    { name: "Firm Foundation", href: "/tarieven" },
  ];

  const company: FooterLink[] = [
    { name: tCompany("about.name"), href: "/over" },
    { name: tCompany("portfolio.name"), href: "/portfolio" },
    { name: tCompany("referenties.name"), href: "/referenties" },
    { name: tCompany("partners.name"), href: "/partners" },
    { name: tCompany("vacatures.name"), href: "/vacatures" },
    { name: tCompany("contact.name"), href: "/contact" },
  ];

  const resources: FooterLink[] = [
    { name: tResources("blog.name"), href: "/blog" },
    { name: tResources("kennisbank.name"), href: "/kennisbank" },
    { name: tResources("faq.name"), href: "/faq" },
    { name: tResources("support.name"), href: "/support" },
    { name: locale === "nl" ? "Tooling" : "Tools", href: "/tooling" },
    { name: locale === "nl" ? "Tarieven" : "Pricing", href: "/tarieven" },
  ];

  const legal: FooterLink[] = [
    { name: "Privacy", href: "/privacy" },
    { name: locale === "nl" ? "AVG" : "GDPR", href: "/avg" },
    { name: locale === "nl" ? "Voorwaarden" : "Terms", href: "/voorwaarden" },
  ];

  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {t("services")}
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href as any}
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
              {t("packages")}
            </h3>
            <ul className="mt-4 space-y-3">
              {packages.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href as any}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {t("company")}
              </h3>
              <ul className="mt-4 space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href as any}
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
              {t("resources")}
            </h3>
            <ul className="mt-4 space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href as any}
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
              {t("contact")}
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
                  <span>{t("netherlands")}</span>
                </div>
              </li>
            </ul>
            {/* Social Media Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/18149224/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/robuustmarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/RobuustMarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCqqewiSClIhuAeuWVh9eidQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/RobuustM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@robuustmarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors"
                aria-label="TikTok"
              >
                <Music2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 5: Trust Indicators */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {t("trustedBy")}
            </h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-background p-4 hover:border-accent/30 transition-colors">
                <div className="text-3xl font-bold text-accent tabular-nums">70+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {t("websitesManaged")}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background p-4 hover:border-accent/30 transition-colors">
                <div className="text-3xl font-bold text-accent tabular-nums">99.9%</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {t("uptimeGuarantee")}
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
                {t("hostingServers")}
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm text-white/80">
                {t("gdprCompliant")}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Logo & Copyright */}
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Robuust"
                className="h-8 w-auto"
              />
              <p className="text-sm text-muted-foreground">
                © {currentYear} Robuust Marketing. {t("allRightsReserved")}.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href as any}
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/sitemap.xml"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Sitemap
              </a>
              <a
                href="https://status.robuustmarketing.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-white transition-colors"
              >
                <Activity className="h-3.5 w-3.5" />
                Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
