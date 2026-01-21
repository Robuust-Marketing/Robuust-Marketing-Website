"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Check,
  Calendar,
  Briefcase,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/data/portfolio";

const serviceLabels: Record<string, string> = {
  design: "Design",
  development: "Development",
  hosting: "Hosting",
  maintenance: "Onderhoud",
  tracking: "Tracking & Analytics",
  "email-marketing": "Email Marketing",
  "online-marketing": "Online Marketing",
  branding: "Branding",
  seo: "SEO",
  crm: "CRM",
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;

  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects
  const currentIndex = portfolioItems.findIndex((p) => p.slug === slug);
  const nextProject = portfolioItems[currentIndex + 1] || portfolioItems[0];
  const prevProject =
    portfolioItems[currentIndex - 1] || portfolioItems[portfolioItems.length - 1];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative pb-12">
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(197, 60, 11, 0.1) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Terug naar portfolio
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Category and type */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  {project.industry}
                </span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    project.projectType === "new"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {project.projectType === "new" ? "Nieuw gebouwd" : "Redesign"}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-6"
              >
                {project.name}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-lg mb-8"
              >
                {project.description}
              </motion.p>

              {/* Meta info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-6 mb-8"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    {project.category}
                  </span>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent-hover text-white"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Bekijk live website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-video rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 relative overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/10 text-9xl font-bold">
                  {project.name.charAt(0)}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-surface p-8 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <span className="text-red-400 text-lg font-bold">?</span>
                </div>
                <h2 className="text-2xl font-bold text-white">De uitdaging</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 p-8 border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Check className="h-5 w-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-white">Onze oplossing</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Resultaten</h2>
            <p className="text-muted-foreground">
              Wat dit project heeft opgeleverd
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5 text-center"
              >
                <div className="text-2xl font-bold text-accent mb-2">
                  {result.metric}
                </div>
                <p className="text-sm text-muted-foreground">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Used */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ingezette diensten
            </h2>
            <p className="text-muted-foreground">
              De expertise die we hebben ingezet voor dit project
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {project.services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/diensten/${service}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/10 hover:border-accent/30 transition-colors"
                >
                  <Wrench className="h-4 w-4 text-accent" />
                  <span className="text-white text-sm">
                    {serviceLabels[service] || service}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-4 py-2 rounded-full bg-white/5 text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/portfolio/${prevProject.slug}`}
                className="block rounded-2xl bg-surface p-6 border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <ArrowLeft className="h-4 w-4" />
                  Vorig project
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                  {prevProject.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {prevProject.industry}
                </p>
              </Link>
            </motion.div>

            {/* Next */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="block rounded-2xl bg-surface p-6 border border-white/5 hover:border-white/10 transition-colors group text-right"
              >
                <div className="flex items-center justify-end gap-2 text-muted-foreground text-sm mb-2">
                  Volgend project
                  <ArrowRight className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                  {nextProject.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {nextProject.industry}
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Ook zo&apos;n resultaat?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Laten we bespreken hoe we jouw website naar een hoger niveau kunnen
            tillen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start je project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/portfolio">Bekijk meer projecten</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
