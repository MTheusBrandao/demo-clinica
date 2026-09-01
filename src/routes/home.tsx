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

export function HomePage() {
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
