import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-royal-blue to-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              High-End Web Development
              <span className="block text-gold">met Waterdichte SLA's</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate">
              Premium web development en hosting voor MKB bedrijven. 70+
              websites beheerd, maatwerk oplossingen met React en WordPress.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90">
                <Link href="/contact">Start je Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/portfolio">Bekijk Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy">70+</div>
              <div className="mt-2 text-sm text-slate">Websites Beheerd</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy">99.9%</div>
              <div className="mt-2 text-sm text-slate">Uptime Garantie</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy">15+</div>
              <div className="mt-2 text-sm text-slate">Jaar Ervaring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy">24/7</div>
              <div className="mt-2 text-sm text-slate">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Onze Diensten
            </h2>
            <p className="mt-4 text-lg text-slate">
              Van design tot deployment, wij regelen alles voor jouw digitale
              succes.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {["Design", "Development", "Hosting", "SEO", "Marketing", "Onderhoud"].map(
              (service) => (
                <div
                  key={service}
                  className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-navy">
                    {service}
                  </h3>
                  <p className="mt-2 text-sm text-slate">
                    High-end {service.toLowerCase()} oplossingen voor jouw
                    bedrijf.
                  </p>
                </div>
              )
            )}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/diensten">Alle Diensten Bekijken</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Klaar voor een high-end website?
          </h2>
          <p className="mt-4 text-lg text-slate">
            Neem contact op voor een vrijblijvend gesprek.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90">
              <Link href="/contact">Neem Contact Op</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
