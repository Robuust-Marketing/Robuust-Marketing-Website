"use client";

import { useState, useEffect, useRef } from "react";
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

type MegaMenuSection = "diensten" | "werkwijze" | "tooling" | "kennisbank" | "over" | null;

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

  const overOns = [
    { name: tCompany("about.name"), description: tCompany("about.description"), href: "/over" as const, icon: companyIcons.about },
    { name: tCompany("portfolio.name"), description: tCompany("portfolio.description"), href: "/portfolio" as const, icon: companyIcons.portfolio },
    { name: tCompany("referenties.name"), description: tCompany("referenties.description"), href: "/referenties" as const, icon: companyIcons.referenties },
    { name: tCompany("partners.name"), description: tCompany("partners.description"), href: "/partners" as const, icon: companyIcons.partners },
    { name: tCompany("vacatures.name"), description: tCompany("vacatures.description"), href: "/vacatures" as const, icon: companyIcons.vacatures },
    { name: tCompany("contact.name"), description: tCompany("contact.description"), href: "/contact" as const, icon: companyIcons.contact },
  ];

  const menuItems = [
    { name: tNav("diensten"), key: "diensten" as const, href: "/diensten" as const },
    { name: tNav("werkwijze"), key: "werkwijze" as const, href: "/werkwijze" as const },
    { name: tNav("tooling"), key: "tooling" as const, href: "/tooling" as const },
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
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Sluit menu" : "Open menu"}
          >
            <span className="sr-only">{tNav("openMenu")}</span>
            {/* CSS-based hamburger icon for reliability */}
            <div className="relative h-6 w-6 flex flex-col justify-center items-center">
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

                {/* Tooling Mega Menu */}
                {activeMenu === "tooling" && (
                  <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-8">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        {tHeader("ourTechStack")}
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
                        {tHeader("whyThisStack")}
                      </p>
                      <ul className="space-y-3">
                        {[
                          tHeader("stackBenefits.performance"),
                          tHeader("stackBenefits.seo"),
                          tHeader("stackBenefits.scalable"),
                          tHeader("stackBenefits.futureProof"),
                        ].map((item, index) => (
                          <motion.li
                            key={index}
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
                        {tHeader("readMoreStack")}
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
                    <div className="col-span-6">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                        {tHeader("aboutRobuust")}
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
                            <p className="font-medium text-white">{tHeader("directContact")}</p>
                            <p className="text-sm text-white/50">{tHeader("weAreReady")}</p>
                          </div>
                          <Button asChild size="sm" className="bg-accent hover:bg-accent-hover text-white">
                            <Link href="/contact" onClick={() => setActiveMenu(null)}>
                              {tNav("contact")}
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {[
                          { name: "Privacy", href: "/privacy" as const },
                          { name: locale === "nl" ? "AVG" : "GDPR", href: "/avg" as const },
                          { name: locale === "nl" ? "Voorwaarden" : "Terms", href: "/voorwaarden" as const },
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
                    <img
                      src="/logo.png"
                      alt="Robuust"
                      className="h-10 w-auto"
                    />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-lg p-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <span className="sr-only">{tNav("closeMenu")}</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Navigation */}
                <div className="px-6 py-6 space-y-1">
                  {/* Diensten */}
                  <MobileMenuItem
                    name={tNav("diensten")}
                    href="/diensten"
                    isOpen={mobileSubmenu === "diensten"}
                    onToggle={() => setMobileSubmenu(mobileSubmenu === "diensten" ? null : "diensten")}
                    items={diensten}
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

                  {/* Tooling */}
                  <MobileMenuItem
                    name={tNav("tooling")}
                    href="/tooling"
                    isOpen={mobileSubmenu === "tooling"}
                    onToggle={() => setMobileSubmenu(mobileSubmenu === "tooling" ? null : "tooling")}
                    items={tooling}
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
                    items={overOns}
                    onClose={closeMobileMenu}
                  />
                </div>

                {/* Language Switcher & CTA */}
                <div className="px-6 py-6 border-t border-white/10 space-y-4">
                  <LanguageSwitcherCompact />
                  <Button asChild className="w-full bg-accent hover:bg-accent-hover text-white glow-accent-sm">
                    <Link href="/start-project" onClick={closeMobileMenu}>
                      {tHeader("cta")}
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
