"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ArticleSection {
  title: string;
  content?: string;
  items?: string[];
  subsections?: {
    title: string;
    items: string[];
  }[];
}

interface TermsVersion {
  versionTitle: string;
  versionSubtitle: string;
  versionBadge?: string;
  articles: Record<string, ArticleSection>;
}

function TermsContent({
  articles,
  contactTitle,
  contactContent,
}: {
  articles: Record<string, ArticleSection>;
  contactTitle: string;
  contactContent: string;
}) {
  const articleKeys = Object.keys(articles);

  return (
    <div className="space-y-8">
      {articleKeys.map((key) => {
        const article = articles[key];
        return (
          <section key={key}>
            <h3 className="text-xl font-bold text-white mb-3">
              {article.title}
            </h3>

            {/* Content paragraph */}
            {article.content && (
              <p className="text-muted-foreground whitespace-pre-line mb-3">
                {article.content}
              </p>
            )}

            {/* Items list */}
            {article.items && article.items.length > 0 && (
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {article.items.map((item, index) => (
                  <li key={index} className="whitespace-pre-line">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Subsections */}
            {article.subsections && article.subsections.length > 0 && (
              <div className="space-y-5 mt-4">
                {article.subsections.map((subsection, subIndex) => (
                  <div key={subIndex}>
                    <h4 className="text-base font-semibold text-white mb-2">
                      {subsection.title}
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="whitespace-pre-line">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </section>
        );
      })}

      {/* Contact section */}
      <section>
        <h3 className="text-xl font-bold text-white mb-3">{contactTitle}</h3>
        <p className="text-muted-foreground">
          {contactContent}{" "}
          <a
            href="mailto:info@robuustmarketing.nl"
            className="text-accent hover:underline"
          >
            info@robuustmarketing.nl
          </a>
        </p>
      </section>
    </div>
  );
}

export default function VoorwaardenPageClient() {
  const t = useTranslations("voorwaardenPage");

  const currentVersion = t.raw("currentVersion") as TermsVersion;
  const newVersion = t.raw("newVersion") as TermsVersion;

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

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Content with Accordions */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible defaultValue="current" className="space-y-4">
              {/* Current Terms */}
              <AccordionItem
                value="current"
                className="rounded-2xl bg-surface border border-white/5 overflow-hidden"
              >
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-surface-hover transition-colors [&[data-state=open]>div>svg]:rotate-180">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-left">
                      <div className="flex items-center gap-3 mb-1">
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                          {currentVersion.versionTitle}
                        </h2>
                        {currentVersion.versionBadge && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-accent/20 text-accent rounded-full">
                            {currentVersion.versionBadge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {currentVersion.versionSubtitle}
                      </p>
                    </div>
                    <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 shrink-0 ml-4" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-8">
                  <div className="pt-4 border-t border-white/5">
                    <TermsContent
                      articles={currentVersion.articles}
                      contactTitle={t("contact.title")}
                      contactContent={t("contact.content")}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* New Terms */}
              <AccordionItem
                value="new"
                className="rounded-2xl bg-surface border border-white/5 overflow-hidden"
              >
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-surface-hover transition-colors [&[data-state=open]>div>svg]:rotate-180">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-left">
                      <div className="flex items-center gap-3 mb-1">
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                          {newVersion.versionTitle}
                        </h2>
                        {newVersion.versionBadge && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                            {newVersion.versionBadge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {newVersion.versionSubtitle}
                      </p>
                    </div>
                    <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 shrink-0 ml-4" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-8">
                  <div className="pt-4 border-t border-white/5">
                    <TermsContent
                      articles={newVersion.articles}
                      contactTitle={t("contact.title")}
                      contactContent={t("contact.content")}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Legal notice */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center text-sm text-muted-foreground mt-8"
            >
              {t("legalNotice")}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
