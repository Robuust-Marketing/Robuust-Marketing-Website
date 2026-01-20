"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Palette,
  Code2,
  Server,
  Wrench,
  BarChart3,
  Mail,
  Megaphone,
  Fingerprint,
  Search,
  Users,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  Clock,
  FileText,
  BookOpen,
  Newspaper,
  HelpCircle,
  Map,
  Shield,
  Scale,
  Phone,
  Building,
  Handshake,
  Rocket,
  Layers,
  Workflow,
  Sparkles,
  Database,
  Cloud,
  Globe,
  Cpu,
  Layout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Diensten submenu items
const diensten = [
  {
    name: "Design",
    description: "UI/UX design die converteert",
    href: "/diensten#design",
    icon: Palette,
  },
  {
    name: "Development",
    description: "React, Next.js & TypeScript",
    href: "/diensten#development",
    icon: Code2,
  },
  {
    name: "Hosting",
    description: "Enterprise-grade infrastructuur",
    href: "/diensten#hosting",
    icon: Server,
  },
  {
    name: "Onderhoud",
    description: "Proactief website onderhoud",
    href: "/diensten/onderhoud",
    icon: Wrench,
  },
  {
    name: "Tracking & Analytics",
    description: "GA4, Meta Pixel & Taggrs",
    href: "/diensten#tracking",
    icon: BarChart3,
  },
  {
    name: "Email Marketing",
    description: "Campagnes die converteren",
    href: "/diensten#email-marketing",
    icon: Mail,
  },
  {
    name: "Online Marketing",
    description: "Meta, TikTok & Google Ads",
    href: "/diensten#online-marketing",
    icon: Megaphone,
  },
  {
    name: "Branding",
    description: "Logo & huisstijl",
    href: "/diensten#branding",
    icon: Fingerprint,
  },
  {
    name: "SEO",
    description: "Organisch beter gevonden worden",
    href: "/diensten#seo",
    icon: Search,
  },
  {
    name: "CRM",
    description: "Klantrelaties optimaliseren",
    href: "/diensten#crm",
    icon: Users,
  },
];

// Pakketten
const pakketten = [
  {
    name: "Solid Start",
    description: "Perfect voor starters - vanaf €2.500",
    href: "/diensten#solid-start",
    icon: Rocket,
    featured: false,
  },
  {
    name: "Firm Foundation",
    description: "Voor groeiende bedrijven - vanaf €7.500",
    href: "/diensten#firm-foundation",
    icon: Layers,
    featured: true,
  },
];

// Werkwijze submenu
const werkwijze = [
  {
    name: "Onze aanpak",
    description: "Van intake tot oplevering",
    href: "/werkwijze",
    icon: Workflow,
  },
  {
    name: "Projectfases",
    description: "Discovery, Design, Development",
    href: "/werkwijze#fases",
    icon: CheckCircle,
  },
  {
    name: "Tijdlijn",
    description: "Wat kun je verwachten?",
    href: "/werkwijze#tijdlijn",
    icon: Clock,
  },
  {
    name: "Samenwerking",
    description: "Hoe wij communiceren",
    href: "/werkwijze#samenwerking",
    icon: Handshake,
  },
];

// Tooling submenu
const tooling = [
  {
    name: "Next.js & React",
    description: "Modern frontend framework",
    href: "/tooling#nextjs",
    icon: Code2,
  },
  {
    name: "TypeScript",
    description: "Type-safe development",
    href: "/tooling#typescript",
    icon: FileText,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first styling",
    href: "/tooling#tailwind",
    icon: Palette,
  },
  {
    name: "Headless CMS",
    description: "Contentbeheer oplossingen",
    href: "/tooling#cms",
    icon: Database,
  },
  {
    name: "Cloudflare",
    description: "CDN & Security",
    href: "/tooling#cloudflare",
    icon: Cloud,
  },
  {
    name: "NGINX",
    description: "High-performance servers",
    href: "/tooling#nginx",
    icon: Server,
  },
];

// Kennisbank submenu
const kennisbank = [
  {
    name: "Blog",
    description: "Artikelen & insights",
    href: "/blog",
    icon: Newspaper,
  },
  {
    name: "Kennisbank",
    description: "Diepgaande guides",
    href: "/kennisbank",
    icon: BookOpen,
  },
  {
    name: "FAQ",
    description: "Veelgestelde vragen",
    href: "/faq",
    icon: HelpCircle,
  },
  {
    name: "Glossary",
    description: "Begrippen uitgelegd",
    href: "/kennisbank/glossary",
    icon: FileText,
  },
];

// Over ons submenu
const overOns = [
  {
    name: "Over Robuust",
    description: "Ons verhaal & team",
    href: "/over",
    icon: Building,
  },
  {
    name: "Portfolio",
    description: "Onze beste projecten",
    href: "/portfolio",
    icon: Layout,
  },
  {
    name: "Partners",
    description: "Samenwerkingen",
    href: "/partners",
    icon: Handshake,
  },
  {
    name: "Contact",
    description: "Neem contact op",
    href: "/contact",
    icon: Phone,
  },
];

// Footer links in mega menu
const footerLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "AVG", href: "/avg" },
  { name: "Voorwaarden", href: "/voorwaarden" },
];

type MegaMenuSection = "diensten" | "werkwijze" | "tooling" | "kennisbank" | "over" | null;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MegaMenuSection>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<MegaMenuSection>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu: MegaMenuSection) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300",
        "top-0",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-navy">
              Robuust<span className="text-gold">.</span>
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menu openen</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div
          ref={menuRef}
          className="hidden lg:flex lg:items-center lg:gap-x-1"
          onMouseLeave={handleMouseLeave}
        >
          {/* Diensten */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("diensten")}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:text-navy rounded-lg hover:bg-gray-50">
              Diensten
              <ChevronDown className={cn("h-4 w-4 transition-transform", activeMenu === "diensten" && "rotate-180")} />
            </button>
          </div>

          {/* Werkwijze */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("werkwijze")}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:text-navy rounded-lg hover:bg-gray-50">
              Werkwijze
              <ChevronDown className={cn("h-4 w-4 transition-transform", activeMenu === "werkwijze" && "rotate-180")} />
            </button>
          </div>

          {/* Tooling */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("tooling")}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:text-navy rounded-lg hover:bg-gray-50">
              Tooling
              <ChevronDown className={cn("h-4 w-4 transition-transform", activeMenu === "tooling" && "rotate-180")} />
            </button>
          </div>

          {/* Kennisbank */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("kennisbank")}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:text-navy rounded-lg hover:bg-gray-50">
              Kennisbank
              <ChevronDown className={cn("h-4 w-4 transition-transform", activeMenu === "kennisbank" && "rotate-180")} />
            </button>
          </div>

          {/* Over */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("over")}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:text-navy rounded-lg hover:bg-gray-50">
              Over
              <ChevronDown className={cn("h-4 w-4 transition-transform", activeMenu === "over" && "rotate-180")} />
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild size="sm">
            <Link href="/contact">Start je project</Link>
          </Button>
        </div>
      </nav>

      {/* Mega Menu Dropdowns */}
      {activeMenu && (
        <div
          className="absolute left-0 right-0 top-full hidden lg:block"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-white shadow-xl border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
              {/* Diensten Mega Menu */}
              {activeMenu === "diensten" && (
                <div className="grid grid-cols-12 gap-8">
                  {/* Main services grid */}
                  <div className="col-span-8">
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Onze Diensten
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {diensten.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex items-start gap-4 rounded-xl p-3 hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium text-navy group-hover:text-gold transition-colors">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Pakketten sidebar */}
                  <div className="col-span-4 border-l border-gray-100 pl-8">
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Pakketten
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {pakketten.map((pkg) => (
                        <Link
                          key={pkg.name}
                          href={pkg.href}
                          className={cn(
                            "group block rounded-xl p-4 transition-colors",
                            pkg.featured
                              ? "bg-gold/5 border border-gold/20 hover:bg-gold/10"
                              : "bg-gray-50 hover:bg-gray-100"
                          )}
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <pkg.icon className={cn("h-5 w-5", pkg.featured ? "text-gold" : "text-navy")} />
                            <span className={cn("font-semibold", pkg.featured ? "text-gold" : "text-navy")}>
                              {pkg.name}
                            </span>
                            {pkg.featured && (
                              <span className="text-xs bg-gold text-white px-2 py-0.5 rounded-full">
                                Populair
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{pkg.description}</p>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href="/diensten"
                      className="mt-6 flex items-center gap-2 text-sm font-medium text-gold hover:text-gold/80 transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      Bekijk alle diensten
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Werkwijze Mega Menu */}
              {activeMenu === "werkwijze" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-6">
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Onze Werkwijze
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {werkwijze.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex items-start gap-4 rounded-xl p-3 hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium text-navy group-hover:text-gold transition-colors">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-6 border-l border-gray-100 pl-8">
                    <div className="rounded-2xl bg-gradient-to-br from-navy to-navy/90 p-6 text-white">
                      <Sparkles className="h-8 w-8 text-gold mb-4" />
                      <h4 className="text-lg font-semibold mb-2">
                        Klaar om te starten?
                      </h4>
                      <p className="text-white/80 text-sm mb-4">
                        Plan een gratis kennismakingsgesprek en ontdek hoe wij jouw project kunnen realiseren.
                      </p>
                      <Button asChild size="sm" variant="secondary" className="bg-white text-navy hover:bg-gray-100">
                        <Link href="/contact" onClick={() => setActiveMenu(null)}>
                          Plan een gesprek
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Tooling Mega Menu */}
              {activeMenu === "tooling" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-8">
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Onze Tech Stack
                      </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {tooling.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex items-start gap-3 rounded-xl p-3 hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium text-navy group-hover:text-gold transition-colors">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-4 border-l border-gray-100 pl-8">
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Waarom deze stack?
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Razendsnelle performance
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        SEO-geoptimaliseerd
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Schaalbaar & onderhoudbaar
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Toekomstbestendig
                      </li>
                    </ul>
                    <Link
                      href="/tooling"
                      className="mt-6 flex items-center gap-2 text-sm font-medium text-gold hover:text-gold/80 transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      Lees meer over onze stack
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Kennisbank Mega Menu */}
              {activeMenu === "kennisbank" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-5">
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Leren & Ontdekken
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {kennisbank.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex items-start gap-4 rounded-xl p-3 hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium text-navy group-hover:text-gold transition-colors">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-7 border-l border-gray-100 pl-8">
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Recente artikelen
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl border border-gray-100 p-4 hover:border-gold/30 transition-colors">
                        <span className="text-xs text-gold font-medium">Development</span>
                        <h4 className="font-medium text-navy mt-1 mb-2">Next.js 15: Wat is nieuw?</h4>
                        <p className="text-sm text-gray-500">De belangrijkste updates en features...</p>
                      </div>
                      <div className="rounded-xl border border-gray-100 p-4 hover:border-gold/30 transition-colors">
                        <span className="text-xs text-gold font-medium">SEO</span>
                        <h4 className="font-medium text-navy mt-1 mb-2">Core Web Vitals in 2025</h4>
                        <p className="text-sm text-gray-500">Hoe je website sneller maken...</p>
                      </div>
                    </div>
                    <Link
                      href="/blog"
                      className="mt-6 flex items-center gap-2 text-sm font-medium text-gold hover:text-gold/80 transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      Bekijk alle artikelen
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Over Mega Menu */}
              {activeMenu === "over" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-6">
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Over Robuust
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {overOns.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex items-start gap-4 rounded-xl p-3 hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium text-navy group-hover:text-gold transition-colors">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-6 border-l border-gray-100 pl-8">
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Snelle links
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {footerLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="px-3 py-1.5 text-sm text-gray-600 bg-gray-50 rounded-full hover:bg-gray-100 hover:text-navy transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <p className="font-medium text-navy">Direct contact?</p>
                          <p className="text-sm text-gray-500">We staan voor je klaar</p>
                        </div>
                        <Button asChild size="sm">
                          <Link href="/contact" onClick={() => setActiveMenu(null)}>
                            Contact
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-black/20" onClick={closeMobileMenu} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <Link href="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
                <span className="text-2xl font-bold text-navy">
                  Robuust<span className="text-gold">.</span>
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-charcoal"
                onClick={closeMobileMenu}
              >
                <span className="sr-only">Menu sluiten</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="px-6 py-6">
              {/* Mobile Navigation */}
              <div className="space-y-1">
                {/* Diensten */}
                <div>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === "diensten" ? null : "diensten")}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-charcoal hover:bg-gray-50"
                  >
                    Diensten
                    <ChevronDown className={cn("h-5 w-5 transition-transform", mobileSubmenu === "diensten" && "rotate-180")} />
                  </button>
                  {mobileSubmenu === "diensten" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {diensten.slice(0, 6).map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          onClick={closeMobileMenu}
                        >
                          <item.icon className="h-4 w-4 text-gold" />
                          {item.name}
                        </Link>
                      ))}
                      <Link
                        href="/diensten"
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gold"
                        onClick={closeMobileMenu}
                      >
                        Alle diensten
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Werkwijze */}
                <div>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === "werkwijze" ? null : "werkwijze")}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-charcoal hover:bg-gray-50"
                  >
                    Werkwijze
                    <ChevronDown className={cn("h-5 w-5 transition-transform", mobileSubmenu === "werkwijze" && "rotate-180")} />
                  </button>
                  {mobileSubmenu === "werkwijze" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {werkwijze.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          onClick={closeMobileMenu}
                        >
                          <item.icon className="h-4 w-4 text-gold" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tooling */}
                <div>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === "tooling" ? null : "tooling")}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-charcoal hover:bg-gray-50"
                  >
                    Tooling
                    <ChevronDown className={cn("h-5 w-5 transition-transform", mobileSubmenu === "tooling" && "rotate-180")} />
                  </button>
                  {mobileSubmenu === "tooling" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {tooling.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          onClick={closeMobileMenu}
                        >
                          <item.icon className="h-4 w-4 text-gold" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Kennisbank */}
                <div>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === "kennisbank" ? null : "kennisbank")}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-charcoal hover:bg-gray-50"
                  >
                    Kennisbank
                    <ChevronDown className={cn("h-5 w-5 transition-transform", mobileSubmenu === "kennisbank" && "rotate-180")} />
                  </button>
                  {mobileSubmenu === "kennisbank" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {kennisbank.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          onClick={closeMobileMenu}
                        >
                          <item.icon className="h-4 w-4 text-gold" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Over */}
                <div>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === "over" ? null : "over")}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-charcoal hover:bg-gray-50"
                  >
                    Over
                    <ChevronDown className={cn("h-5 w-5 transition-transform", mobileSubmenu === "over" && "rotate-180")} />
                  </button>
                  {mobileSubmenu === "over" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {overOns.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          onClick={closeMobileMenu}
                        >
                          <item.icon className="h-4 w-4 text-gold" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer links */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="px-3 py-1.5 text-sm text-gray-500 bg-gray-50 rounded-full"
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={closeMobileMenu}>
                    Start je project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
