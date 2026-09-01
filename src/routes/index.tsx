import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Procedures } from "@/components/site/Procedures";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Testimonials } from "@/components/site/Testimonials";
import { Specialists } from "@/components/site/Specialists";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsappFloat } from "@/components/site/WhatsappFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pétala — Clínica de Estética Premium em Brasília | Lago Sul" },
      { name: "description", content: "Clínica de estética premium em Brasília. Harmonização facial, botox, preenchimento, bioestimuladores e tecnologias avançadas no Lago Sul. Agende sua avaliação." },
      { property: "og:title", content: "Pétala — Estética Premium em Brasília" },
      { property: "og:description", content: "Harmonização facial, dermatologia estética e tratamentos premium no Lago Sul, Brasília. Resultados naturais e sofisticação." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "keywords", content: "clínica de estética Brasília, harmonização facial Brasília, botox Brasília DF, estética premium Brasília, clínica estética Lago Sul, dermatologia estética Brasília" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Pétala Estética Premium",
          image: "/og-image.jpg",
          telephone: "+55-61-99999-0000",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "SHIS QI 05, Conjunto 10, Bloco C",
            addressLocality: "Brasília",
            addressRegion: "DF",
            postalCode: "71615-100",
            addressCountry: "BR",
          },
          areaServed: "Brasília — DF",
          medicalSpecialty: ["Dermatology", "CosmeticDermatology"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Procedures />
        <BeforeAfter />
        <Testimonials />
        <Specialists />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
