import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robuust Marketing | High-End Web Development & Hosting",
  description:
    "Premium web development en hosting voor MKB bedrijven. Waterdichte SLA's, 70+ websites beheerd, maatwerk oplossingen met React en WordPress.",
};

// This root layout is only used as a fallback
// The main layout is in [locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
