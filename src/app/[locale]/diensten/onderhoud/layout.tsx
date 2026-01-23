import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Onderhoud & SLA Pakketten | Robuust Marketing",
  description:
    "Proactieve website onderhoud pakketten met waterdichte SLA's. Van Essential tot Large - kies het pakket dat bij jouw bedrijf past.",
};

export default function OnderhoudLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
