import heroImg from "@/assets/hero-portrait.jpg";
import { WHATSAPP_URL } from "./WhatsappFloat";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] flex-col overflow-hidden pt-20 md:flex-row">
      <div className="relative w-full animate-fade-up md:w-1/2">
        <img
          src={heroImg}
          alt="Mulher elegante com pele luminosa em clínica de estética premium em Brasília"
          width={1024}
          height={1280}
          className="h-[60vh] w-full object-cover md:h-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-foreground/20 via-transparent to-transparent" />
      </div>
      <div className="flex w-full animate-fade-up flex-col justify-center p-8 [animation-delay:200ms] md:w-1/2 md:p-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px w-10 bg-primary" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
            Brasília — Lago Sul
          </span>
        </div>
        <h1 className="mb-8 text-balance font-display text-5xl leading-[0.95] md:text-7xl">
          Sua beleza elevada ao{" "}
          <em className="font-medium italic text-primary">estado de arte.</em>
        </h1>
        <p className="mb-10 max-w-[45ch] text-lg font-light leading-relaxed text-muted">
          Especialistas em harmonização facial e tratamentos regenerativos com
          foco em resultados naturais, sofisticação e tecnologia avançada.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contato"
            className="bg-primary px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-foreground shadow-luxe ring-1 ring-primary/20 transition-all hover:shadow-[0_12px_40px_-8px_color-mix(in_oklab,var(--gold)_45%,transparent)]"
          >
            Agende sua Avaliação
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-8 py-4 text-center text-xs font-bold uppercase tracking-widest transition-all hover:bg-accent"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-12 border-t border-border pt-8">
          <div>
            <div className="font-display text-3xl">12k+</div>
            <div className="text-[10px] uppercase tracking-widest text-muted">
              Vidas Transformadas
            </div>
          </div>
          <div>
            <div className="font-display text-3xl">15<span className="text-primary">+</span></div>
            <div className="text-[10px] uppercase tracking-widest text-muted">
              Anos de Excelência
            </div>
          </div>
          <div>
            <div className="font-display text-3xl">SBD<span className="text-primary">/</span>SBCD</div>
            <div className="text-[10px] uppercase tracking-widest text-muted">
              Especialistas Certificados
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}