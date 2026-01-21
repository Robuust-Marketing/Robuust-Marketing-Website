"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  CheckCircle,
  FileText,
  BookOpen,
  Newspaper,
  HelpCircle,
  Phone,
  Building,
  Handshake,
  Rocket,
  Layers,
  Workflow,
  Database,
  Cloud,
  Layout,
  Clock,
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
    description: "Perfect voor starters",
    price: "vanaf €2.500",
    href: "/diensten#solid-start",
    icon: Rocket,
    featured: false,
  },
  {
    name: "Firm Foundation",
    description: "Voor groeiende bedrijven",
    price: "vanaf €7.500",
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
    name: "Support",
    description: "Hulp & ondersteuning",
    href: "/support",
    icon: Phone,
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
    name: "Referenties",
    description: "Wat klanten zeggen",
    href: "/referenties",
    icon: CheckCircle,
  },
  {
    name: "Partners",
    description: "Samenwerkingen",
    href: "/partners",
    icon: Handshake,
  },
  {
    name: "Vacatures",
    description: "Werken bij Robuust",
    href: "/vacatures",
    icon: Users,
  },
  {
    name: "Contact",
    description: "Neem contact op",
    href: "/contact",
    icon: Phone,
  },
];

type MegaMenuSection = "diensten" | "werkwijze" | "tooling" | "kennisbank" | "over" | null;

const menuItems: { name: string; key: MegaMenuSection; href: string }[] = [
  { name: "Diensten", key: "diensten", href: "/diensten" },
  { name: "Werkwijze", key: "werkwijze", href: "/werkwijze" },
  { name: "Tooling", key: "tooling", href: "/tooling" },
  { name: "Kennisbank", key: "kennisbank", href: "/kennisbank" },
  { name: "Over", key: "over", href: "/over" },
];

interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MegaMenuSection>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<MegaMenuSection>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPostMeta[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    async function fetchRecentPosts() {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        setRecentPosts(data.posts.slice(0, 2));
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      }
    }
    fetchRecentPosts();
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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-darker shadow-lg shadow-black/10" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex lg:flex-1"
        >
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="text-2xl font-bold text-white transition-colors">
              Robuust
              <span className="text-accent group-hover:text-accent-hover transition-colors">.</span>
            </span>
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden lg:flex lg:items-center lg:gap-x-1"
          onMouseLeave={handleMouseLeave}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.key)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg",
                  activeMenu === item.key
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {item.name}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    activeMenu === item.key && "rotate-180"
                  )}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="hidden lg:flex lg:flex-1 lg:justify-end"
        >
          <Button
            asChild
            size="sm"
            className="bg-accent hover:bg-accent-hover text-white font-medium px-6 glow-accent-sm hover:glow-accent transition-all duration-300"
          >
            <Link href="/contact">Start je project</Link>
          </Button>
        </motion.div>
      </nav>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full hidden lg:block"
            onMouseEnter={() => handleMouseEnter(activeMenu)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="glass border-t border-white/5">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
                {/* Diensten Mega Menu */}
                {activeMenu === "diensten" && (
                  <div className="grid grid-cols-12 gap-8">
                    {/* Main services grid */}
                    <div className="col-span-8">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        Onze Diensten
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {diensten.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.03 }}
                          >
                            <Link
                              href={item.href}
                              className="group flex items-start gap-3 rounded-xl p-3 hover:bg-white/5 transition-all duration-200"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/60 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-200">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-medium text-white group-hover:text-accent transition-colors">
                                  {item.name}
                                </p>
                                <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Pakketten sidebar */}
                    <div className="col-span-4 border-l border-white/10 pl-8">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        Pakketten
                      </p>
                      <div className="space-y-3">
                        {pakketten.map((pkg, index) => (
                          <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                          >
                            <Link
                              href={pkg.href}
                              className={cn(
                                "group block rounded-xl p-4 transition-all duration-200",
                                pkg.featured
                                  ? "bg-accent/10 border border-accent/20 hover:bg-accent/20 hover:border-accent/40"
                                  : "bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10"
                              )}
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <pkg.icon className={cn("h-5 w-5", pkg.featured ? "text-accent" : "text-white/70")} />
                                <span className={cn("font-semibold", pkg.featured ? "text-accent" : "text-white")}>
                                  {pkg.name}
                                </span>
                                {pkg.featured && (
                                  <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full border border-accent/30">
                                    Populair
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-white/50 mb-1">{pkg.description}</p>
                              <p className="text-sm font-medium text-white/70">{pkg.price}</p>
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-col gap-2">
                        <Link
                          href="/tarieven"
                          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group"
                          onClick={() => setActiveMenu(null)}
                        >
                          Bekijk alle tarieven
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                          href="/offerte"
                          className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
                          onClick={() => setActiveMenu(null)}
                        >
                          Vraag een offerte aan
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Werkwijze Mega Menu */}
                {activeMenu === "werkwijze" && (
                  <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-6">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        Onze Werkwijze
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {werkwijze.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.03 }}
                          >
                            <Link
                              href={item.href}
                              className="group flex items-start gap-3 rounded-xl p-3 hover:bg-white/5 transition-all duration-200"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/60 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-200">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-medium text-white group-hover:text-accent transition-colors">
                                  {item.name}
                                </p>
                                <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-6 border-l border-white/10 pl-8">
                      <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent mb-4">
                          <Rocket className="h-6 w-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Klaar om te starten?
                        </h4>
                        <p className="text-white/60 text-sm mb-4">
                          Plan een gratis kennismakingsgesprek en ontdek hoe wij jouw project kunnen realiseren.
                        </p>
                        <Button asChild size="sm" className="bg-accent hover:bg-accent-hover text-white">
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
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        Onze Tech Stack
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {tooling.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.03 }}
                          >
                            <Link
                              href={item.href}
                              className="group flex items-start gap-3 rounded-xl p-3 hover:bg-white/5 transition-all duration-200"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/60 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-200">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-medium text-white group-hover:text-accent transition-colors">
                                  {item.name}
                                </p>
                                <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-4 border-l border-white/10 pl-8">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        Waarom deze stack?
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Razendsnelle performance",
                          "SEO-geoptimaliseerd",
                          "Schaalbaar & onderhoudbaar",
                          "Toekomstbestendig",
                        ].map((item, index) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                            className="flex items-center gap-3 text-sm text-white/70"
                          >
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      <Link
                        href="/tooling"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group"
                        onClick={() => setActiveMenu(null)}
                      >
                        Lees meer over onze stack
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Kennisbank Mega Menu */}
                {activeMenu === "kennisbank" && (
                  <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-5">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        Leren & Ontdekken
                      </p>
                      <div className="space-y-2">
                        {kennisbank.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.03 }}
                          >
                            <Link
                              href={item.href}
                              className="group flex items-start gap-3 rounded-xl p-3 hover:bg-white/5 transition-all duration-200"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/60 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-200">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-medium text-white group-hover:text-accent transition-colors">
                                  {item.name}
                                </p>
                                <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-7 border-l border-white/10 pl-8">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        Recente artikelen
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {recentPosts.length > 0 ? recentPosts.map((post, index) => (
                          <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                          >
                            <Link
                              href={`/blog/${post.slug}`}
                              className="block rounded-xl bg-white/5 border border-white/5 p-4 hover:bg-white/10 hover:border-white/10 transition-all duration-200 group"
                              onClick={() => setActiveMenu(null)}
                            >
                              <span className="text-xs text-accent font-medium">{post.category}</span>
                              <h4 className="font-medium text-white mt-1 mb-2 group-hover:text-accent transition-colors line-clamp-1">{post.title}</h4>
                              <p className="text-sm text-white/50 line-clamp-2">{post.excerpt}</p>
                            </Link>
                          </motion.div>
                        )) : (
                          <div className="col-span-2 text-sm text-white/50">
                            Artikelen laden...
                          </div>
                        )}
                      </div>
                      <Link
                        href="/blog"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group"
                        onClick={() => setActiveMenu(null)}
                      >
                        Bekijk alle artikelen
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Over Mega Menu */}
                {activeMenu === "over" && (
                  <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-6">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        Over Robuust
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {overOns.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.03 }}
                          >
                            <Link
                              href={item.href}
                              className="group flex items-start gap-3 rounded-xl p-3 hover:bg-white/5 transition-all duration-200"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/60 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-200">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-medium text-white group-hover:text-accent transition-colors">
                                  {item.name}
                                </p>
                                <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-6 border-l border-white/10 pl-8">
                      <div className="rounded-xl bg-white/5 border border-white/5 p-5">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-white">Direct contact?</p>
                            <p className="text-sm text-white/50">We staan voor je klaar</p>
                          </div>
                          <Button asChild size="sm" className="bg-accent hover:bg-accent-hover text-white">
                            <Link href="/contact" onClick={() => setActiveMenu(null)}>
                              Contact
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {[
                          { name: "Privacy", href: "/privacy" },
                          { name: "AVG", href: "/avg" },
                          { name: "Voorwaarden", href: "/voorwaarden" },
                        ].map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="px-3 py-1.5 text-sm text-white/50 bg-white/5 rounded-full hover:bg-white/10 hover:text-white/70 transition-all duration-200"
                            onClick={() => setActiveMenu(null)}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm lg:hidden"
            >
              <div className="h-full overflow-y-auto bg-surface border-l border-white/10">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                  <Link href="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
                    <span className="text-2xl font-bold text-white">
                      Robuust<span className="text-accent">.</span>
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-lg p-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <span className="sr-only">Menu sluiten</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Navigation */}
                <div className="px-6 py-6 space-y-1">
                  {/* Diensten */}
                  <MobileMenuItem
                    name="Diensten"
                    href="/diensten"
                    isOpen={mobileSubmenu === "diensten"}
                    onToggle={() => setMobileSubmenu(mobileSubmenu === "diensten" ? null : "diensten")}
                    items={diensten}
                    onClose={closeMobileMenu}
                  />

                  {/* Werkwijze */}
                  <MobileMenuItem
                    name="Werkwijze"
                    href="/werkwijze"
                    isOpen={mobileSubmenu === "werkwijze"}
                    onToggle={() => setMobileSubmenu(mobileSubmenu === "werkwijze" ? null : "werkwijze")}
                    items={werkwijze}
                    onClose={closeMobileMenu}
                  />

                  {/* Tooling */}
                  <MobileMenuItem
                    name="Tooling"
                    href="/tooling"
                    isOpen={mobileSubmenu === "tooling"}
                    onToggle={() => setMobileSubmenu(mobileSubmenu === "tooling" ? null : "tooling")}
                    items={tooling}
                    onClose={closeMobileMenu}
                  />

                  {/* Kennisbank */}
                  <MobileMenuItem
                    name="Kennisbank"
                    href="/kennisbank"
                    isOpen={mobileSubmenu === "kennisbank"}
                    onToggle={() => setMobileSubmenu(mobileSubmenu === "kennisbank" ? null : "kennisbank")}
                    items={kennisbank}
                    onClose={closeMobileMenu}
                  />

                  {/* Over */}
                  <MobileMenuItem
                    name="Over"
                    href="/over"
                    isOpen={mobileSubmenu === "over"}
                    onToggle={() => setMobileSubmenu(mobileSubmenu === "over" ? null : "over")}
                    items={overOns}
                    onClose={closeMobileMenu}
                  />
                </div>

                {/* CTA */}
                <div className="px-6 py-6 border-t border-white/10">
                  <Button asChild className="w-full bg-accent hover:bg-accent-hover text-white glow-accent-sm">
                    <Link href="/contact" onClick={closeMobileMenu}>
                      Start je project
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// Mobile menu item component
function MobileMenuItem({
  name,
  href,
  isOpen,
  onToggle,
  items,
  onClose,
}: {
  name: string;
  href: string;
  isOpen: boolean;
  onToggle: () => void;
  items: { name: string; href: string; icon: React.ComponentType<{ className?: string }> }[];
  onClose: () => void;
}) {
  return (
    <div>
      <div className="flex w-full items-center justify-between rounded-lg text-base font-medium text-white/80 hover:text-white transition-colors">
        <Link
          href={href}
          className="flex-1 px-3 py-2.5 hover:bg-white/5 rounded-lg transition-colors"
          onClick={onClose}
        >
          {name}
        </Link>
        <button
          onClick={onToggle}
          className="px-3 py-2.5 hover:bg-white/5 rounded-lg transition-colors"
          aria-label={`${isOpen ? "Sluit" : "Open"} ${name} submenu`}
        >
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-1 space-y-1 pl-4">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={onClose}
                >
                  <item.icon className="h-4 w-4 text-accent" />
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
