"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "@/components/motion";
import { LanguageSwitcher, LanguageSwitcherCompact } from "@/components/language-switcher";
import { Link, type Locale } from "@/i18n/routing";
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
import { getPortfolioItems } from "@/data/portfolio";

// Static icon mappings (translations are loaded in component)
const dienstenIcons = {
  design: Palette,
  development: Code2,
  hosting: Server,
  onderhoud: Wrench,
  tracking: BarChart3,
  emailMarketing: Mail,
  onlineMarketing: Megaphone,
  branding: Fingerprint,
  seo: Search,
  crm: Users,
};

const pakkettenIcons = {
  solidStart: Rocket,
  firmFoundation: Layers,
};

const werkwijzeIcons = {
  approach: Workflow,
  phases: CheckCircle,
  timeline: Clock,
  collaboration: Handshake,
};

const toolingIcons = {
  wordpress: Layers,
  nextjs: Code2,
  typescript: FileText,
  tailwind: Palette,
  cms: Database,
  cloudflare: Cloud,
  nginx: Server,
};

const resourcesIcons = {
  blog: Newspaper,
  kennisbank: BookOpen,
  faq: HelpCircle,
  support: Phone,
};

const companyIcons = {
  about: Building,
  portfolio: Layout,
  referenties: CheckCircle,
  partners: Handshake,
  vacatures: Users,
  contact: Phone,
};

type MegaMenuSection = "diensten" | "portfolio" | "werkwijze" | "kennisbank" | "over" | null;

interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
}

export function Header() {
  const locale = useLocale() as Locale;
  const t = useTranslations();
  const tNav = useTranslations("navigation");
  const tHeader = useTranslations("header");
  const tServices = useTranslations("services");
  const tPackages = useTranslations("packages");
  const tWerkwijze = useTranslations("werkwijze");
  const tTooling = useTranslations("tooling");
  const tResources = useTranslations("resources");
  const tCompany = useTranslations("company");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MegaMenuSection>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<MegaMenuSection>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPostMeta[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Build translated menu data - Link component auto-translates paths
  const diensten = [
    { name: tServices("design.name"), description: tServices("design.description"), href: "/diensten/design" as const, icon: dienstenIcons.design },
    { name: tServices("development.name"), description: tServices("development.description"), href: "/diensten/development" as const, icon: dienstenIcons.development },
    { name: tServices("hosting.name"), description: tServices("hosting.description"), href: "/diensten/hosting" as const, icon: dienstenIcons.hosting },
    { name: tServices("onderhoud.name"), description: tServices("onderhoud.description"), href: "/diensten/onderhoud" as const, icon: dienstenIcons.onderhoud },
    { name: tServices("tracking.name"), description: tServices("tracking.description"), href: "/diensten/tracking" as const, icon: dienstenIcons.tracking },
    { name: tServices("emailMarketing.name"), description: tServices("emailMarketing.description"), href: "/diensten/email-marketing" as const, icon: dienstenIcons.emailMarketing },
    { name: tServices("onlineMarketing.name"), description: tServices("onlineMarketing.description"), href: "/diensten/online-marketing" as const, icon: dienstenIcons.onlineMarketing },
    { name: tServices("branding.name"), description: tServices("branding.description"), href: "/diensten/branding" as const, icon: dienstenIcons.branding },
    { name: tServices("seo.name"), description: tServices("seo.description"), href: "/diensten/seo" as const, icon: dienstenIcons.seo },
    { name: tServices("crm.name"), description: tServices("crm.description"), href: "/diensten/crm" as const, icon: dienstenIcons.crm },
  ];

  const pakketten = [
    { name: tPackages("solidStart.name"), description: tPackages("solidStart.description"), price: tPackages("solidStart.price"), href: { pathname: "/tarieven" as const, hash: "solid-start" }, icon: pakkettenIcons.solidStart, featured: false },
    { name: tPackages("firmFoundation.name"), description: tPackages("firmFoundation.description"), price: tPackages("firmFoundation.price"), href: { pathname: "/tarieven" as const, hash: "firm-foundation" }, icon: pakkettenIcons.firmFoundation, featured: true },
  ];

  const werkwijze = [
    { name: tWerkwijze("approach.name"), description: tWerkwijze("approach.description"), href: "/werkwijze" as const, icon: werkwijzeIcons.approach },
    { name: tWerkwijze("phases.name"), description: tWerkwijze("phases.description"), href: { pathname: "/werkwijze" as const, hash: "fases" }, icon: werkwijzeIcons.phases },
    { name: tWerkwijze("timeline.name"), description: tWerkwijze("timeline.description"), href: { pathname: "/werkwijze" as const, hash: "tijdlijn" }, icon: werkwijzeIcons.timeline },
    { name: tWerkwijze("collaboration.name"), description: tWerkwijze("collaboration.description"), href: { pathname: "/werkwijze" as const, hash: "samenwerking" }, icon: werkwijzeIcons.collaboration },
  ];

  const tooling = [
    { name: tTooling("wordpress.name"), description: tTooling("wordpress.description"), href: "/tooling/wordpress" as const, icon: toolingIcons.wordpress },
    { name: tTooling("nextjs.name"), description: tTooling("nextjs.description"), href: "/tooling/nextjs" as const, icon: toolingIcons.nextjs },
    { name: tTooling("typescript.name"), description: tTooling("typescript.description"), href: "/tooling/typescript" as const, icon: toolingIcons.typescript },
    { name: tTooling("tailwind.name"), description: tTooling("tailwind.description"), href: "/tooling/tailwind" as const, icon: toolingIcons.tailwind },
    { name: tTooling("cms.name"), description: tTooling("cms.description"), href: "/tooling/cms" as const, icon: toolingIcons.cms },
    { name: tTooling("cloudflare.name"), description: tTooling("cloudflare.description"), href: "/tooling/cloudflare" as const, icon: toolingIcons.cloudflare },
    { name: tTooling("nginx.name"), description: tTooling("nginx.description"), href: "/tooling/nginx" as const, icon: toolingIcons.nginx },
  ];

  const kennisbank = [
    { name: tResources("blog.name"), description: tResources("blog.description"), href: "/blog" as const, icon: resourcesIcons.blog },
    { name: tResources("kennisbank.name"), description: tResources("kennisbank.description"), href: "/kennisbank" as const, icon: resourcesIcons.kennisbank },
    { name: tResources("faq.name"), description: tResources("faq.description"), href: "/faq" as const, icon: resourcesIcons.faq },
    { name: tResources("support.name"), description: tResources("support.description"), href: "/support" as const, icon: resourcesIcons.support },
  ];

  // Portfolio items for mega menu
  const portfolioItems = getPortfolioItems(locale);

  const overOns = [
    { name: tCompany("about.name"), description: tCompany("about.description"), href: "/over" as const, icon: companyIcons.about },
    { name: tCompany("referenties.name"), description: tCompany("referenties.description"), href: "/referenties" as const, icon: companyIcons.referenties },
    { name: tCompany("partners.name"), description: tCompany("partners.description"), href: "/partners" as const, icon: companyIcons.partners },
    { name: tCompany("vacatures.name"), description: tCompany("vacatures.description"), href: "/vacatures" as const, icon: companyIcons.vacatures },
    { name: tCompany("contact.name"), description: tCompany("contact.description"), href: "/contact" as const, icon: companyIcons.contact },
  ];

  const menuItems = [
    { name: tNav("diensten"), key: "diensten" as const, href: "/diensten" as const },
    { name: tNav("portfolio"), key: "portfolio" as const, href: "/portfolio" as const },
    { name: tNav("werkwijze"), key: "werkwijze" as const, href: "/werkwijze" as const },
    { name: tNav("kennisbank"), key: "kennisbank" as const, href: "/kennisbank" as const },
    { name: tNav("over"), key: "over" as const, href: "/over" as const },
  ];

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
        const res = await fetch(`/api/blog?locale=${locale}`);
        const data = await res.json();
        setRecentPosts(data.posts.slice(0, 2));
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      }
    }
    fetchRecentPosts();
  }, [locale]);

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

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

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
            <img
              src="/logo.png"
              alt="Robuust"
              className="h-10 w-auto"
            />
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-white/80 hover:text-white hover:bg-white/5 transition-colors touch-manipulation"
            onPointerDown={(e) => {
              // Use pointerDown for faster mobile response
              e.preventDefault();
              toggleMobileMenu();
            }}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Sluit menu" : "Open menu"}
          >
            <span className="sr-only">{tNav("openMenu")}</span>
            {/* CSS-based hamburger icon for reliability */}
            <div className="relative h-6 w-6 flex flex-col justify-center items-center pointer-events-none">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-all duration-300 ease-out",
                  mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-all duration-300 ease-out",
                  mobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-all duration-300 ease-out",
                  mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                )}
              />
            </div>
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

        {/* Language Switcher & CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4"
        >
          <LanguageSwitcher />
          <Button
            asChild
            size="sm"
            className="bg-accent hover:bg-accent-hover text-white font-medium px-6 glow-accent-sm hover:glow-accent transition-all duration-300"
          >
            <Link href="/start-project">{tHeader("cta")}</Link>
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
                        {tHeader("ourServices")}
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
                        {tHeader("packages")}
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
                                    {tHeader("popular")}
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
                          {tHeader("viewAllPricing")}
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                          href="/offerte"
                          className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
                          onClick={() => setActiveMenu(null)}
                        >
                          {tHeader("requestQuote")}
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
                        {tHeader("ourApproach")}
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
                          {tHeader("readyToStart")}
                        </h4>
                        <p className="text-white/60 text-sm mb-4">
                          {tHeader("readyToStartDescription")}
                        </p>
                        <Button asChild size="sm" className="bg-accent hover:bg-accent-hover text-white">
                          <Link href="/contact" onClick={() => setActiveMenu(null)}>
                            {tHeader("scheduleCall")}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Portfolio Mega Menu */}
                {activeMenu === "portfolio" && (
                  <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-8">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        {tHeader("ourWork")}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {portfolioItems
                          .filter((item) => ["growteq", "den-hartog", "villary", "idrw"].includes(item.slug))
                          .map((item, index) => (
                          <motion.div
                            key={item.slug}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.03 }}
                          >
                            <Link
                              href={{ pathname: "/portfolio/[slug]", params: { slug: item.slug } }}
                              className="group block rounded-xl overflow-hidden bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-200"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="aspect-[16/10] relative overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-3 left-3">
                                  <div className="bg-white rounded-lg p-1.5 shadow-lg">
                                    <img
                                      src={`https://www.google.com/s2/favicons?domain=${new URL(item.url).hostname}&sz=256`}
                                      alt={`${item.name} favicon`}
                                      className="h-6 w-6 object-contain"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="p-3">
                                <p className="font-medium text-white text-sm group-hover:text-accent transition-colors truncate">
                                  {item.name}
                                </p>
                                <p className="text-xs text-white/50 truncate">
                                  {item.category}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-4 border-l border-white/10 pl-8 flex flex-col">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        {tHeader("clientReview")}
                      </p>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="rounded-xl bg-white/5 border border-white/5 p-4"
                      >
                        <div className="flex gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="h-3 w-3 text-accent fill-accent" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-white/80 text-xs leading-relaxed mb-3">
                          &ldquo;{tHeader("testimonialQuote")}&rdquo;
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center">
                            <span className="text-accent text-[10px] font-semibold">A</span>
                          </div>
                          <div>
                            <p className="text-white text-xs font-medium">{tHeader("testimonialAuthor")}</p>
                            <p className="text-white/50 text-[10px]">{tHeader("testimonialRole")} - Growteq</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          className="rounded-lg bg-white/5 p-3 text-center"
                        >
                          <p className="text-accent font-bold text-lg">55+</p>
                          <p className="text-white/50 text-[10px]">{tHeader("statsWebsites")}</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="rounded-lg bg-white/5 p-3 text-center"
                        >
                          <p className="text-accent font-bold text-lg">8+</p>
                          <p className="text-white/50 text-[10px]">{tHeader("statsYears")}</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 }}
                          className="rounded-lg bg-white/5 p-3 text-center"
                        >
                          <p className="text-accent font-bold text-lg">100%</p>
                          <p className="text-white/50 text-[10px]">{tHeader("statsSatisfied")}</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="rounded-lg bg-white/5 p-3 text-center"
                        >
                          <p className="text-accent font-bold text-sm">WordPress</p>
                          <p className="text-white/50 text-[10px]">{tHeader("statsTech")}</p>
                        </motion.div>
                      </div>

                      <Link
                        href="/portfolio"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group"
                        onClick={() => setActiveMenu(null)}
                      >
                        {tHeader("viewAllCases")}
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
                        {tHeader("learnAndDiscover")}
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
                        {tHeader("recentArticles")}
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
                              href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
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
                            {tHeader("loadingArticles")}
                          </div>
                        )}
                      </div>
                      <Link
                        href="/blog"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group"
                        onClick={() => setActiveMenu(null)}
                      >
                        {tHeader("viewAllArticles")}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Over Mega Menu */}
                {activeMenu === "over" && (
                  <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-5">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        {tHeader("aboutRobuust")}
                      </p>
                      <div className="space-y-2">
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

                    <div className="col-span-7 border-l border-white/10 pl-8">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        {tHeader("ourTools")}
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
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/60 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-200">
                                <item.icon className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="font-medium text-sm text-white group-hover:text-accent transition-colors">
                                  {item.name}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      <Link
                        href="/tooling"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group"
                        onClick={() => setActiveMenu(null)}
                      >
                        {tHeader("viewAllTools")}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu - Fullscreen */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Fullscreen menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full w-full overflow-y-auto bg-background"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <Link href="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
                  <img
                    src="/logo.png"
                    alt="Robuust"
                    className="h-10 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-lg p-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-colors touch-manipulation"
                  onPointerDown={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                  }}
                >
                  <span className="sr-only">{tNav("closeMenu")}</span>
                  <X className="h-6 w-6 pointer-events-none" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation - Centered content */}
              <div className="flex flex-col min-h-[calc(100vh-73px)]">
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-2 max-w-md mx-auto">
                    {/* Diensten */}
                    <MobileMenuItem
                      name={tNav("diensten")}
                      href="/diensten"
                      isOpen={mobileSubmenu === "diensten"}
                      onToggle={() => setMobileSubmenu(mobileSubmenu === "diensten" ? null : "diensten")}
                      items={diensten}
                      onClose={closeMobileMenu}
                    />

                    {/* Portfolio */}
                    <MobileMenuItem
                      name={tNav("portfolio")}
                      href="/portfolio"
                      isOpen={mobileSubmenu === "portfolio"}
                      onToggle={() => setMobileSubmenu(mobileSubmenu === "portfolio" ? null : "portfolio")}
                      items={portfolioItems.slice(0, 6).map(item => ({
                        name: item.name,
                        href: { pathname: "/portfolio/[slug]" as const, params: { slug: item.slug } },
                        icon: Layout,
                      }))}
                      onClose={closeMobileMenu}
                    />

                    {/* Werkwijze */}
                    <MobileMenuItem
                      name={tNav("werkwijze")}
                      href="/werkwijze"
                      isOpen={mobileSubmenu === "werkwijze"}
                      onToggle={() => setMobileSubmenu(mobileSubmenu === "werkwijze" ? null : "werkwijze")}
                      items={werkwijze}
                      onClose={closeMobileMenu}
                    />

                    {/* Kennisbank */}
                    <MobileMenuItem
                      name={tNav("kennisbank")}
                      href="/kennisbank"
                      isOpen={mobileSubmenu === "kennisbank"}
                      onToggle={() => setMobileSubmenu(mobileSubmenu === "kennisbank" ? null : "kennisbank")}
                      items={kennisbank}
                      onClose={closeMobileMenu}
                    />

                    {/* Over */}
                    <MobileMenuItem
                      name={tNav("over")}
                      href="/over"
                      isOpen={mobileSubmenu === "over"}
                      onToggle={() => setMobileSubmenu(mobileSubmenu === "over" ? null : "over")}
                      items={[...overOns, ...tooling.slice(0, 3)]}
                      onClose={closeMobileMenu}
                    />
                  </nav>
                </div>

                {/* Language Switcher & CTA - Fixed at bottom */}
                <div className="px-6 py-6 border-t border-white/10">
                  <div className="max-w-md mx-auto space-y-4">
                    <LanguageSwitcherCompact />
                    <Button asChild className="w-full bg-accent hover:bg-accent-hover text-white glow-accent-sm">
                      <Link href="/start-project" onClick={closeMobileMenu}>
                        {tHeader("cta")}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// Mobile menu item component
type LinkHref = React.ComponentProps<typeof Link>["href"];

function MobileMenuItem({
  name,
  href,
  isOpen,
  onToggle,
  items,
  onClose,
}: {
  name: string;
  href: LinkHref;
  isOpen: boolean;
  onToggle: () => void;
  items: { name: string; href: LinkHref; icon: React.ComponentType<{ className?: string }> }[];
  onClose: () => void;
}) {
  return (
    <div className="border-b border-white/5 last:border-b-0">
      <div className="flex w-full items-center justify-between text-lg font-medium text-white/90 hover:text-white transition-colors">
        <Link
          href={href}
          className="flex-1 px-4 py-4 hover:bg-white/5 rounded-lg transition-colors"
          onClick={onClose}
        >
          {name}
        </Link>
        <button
          onClick={onToggle}
          className="px-4 py-4 hover:bg-white/5 rounded-lg transition-colors"
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
            <div className="pb-4 pl-4 space-y-1">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-base text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={onClose}
                >
                  <item.icon className="h-5 w-5 text-accent" />
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
