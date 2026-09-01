import { WHATSAPP_URL } from "./WhatsappFloat";

export function FinalCTA() {
  return (
    <section id="contato" className="relative px-6 py-32 text-center">
      <div className="mx-auto max-w-3xl">
        <span className="mb-6 inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
          Sua jornada começa aqui
        </span>
        <h2 className="mb-6 font-display text-4xl leading-tight md:text-6xl">
          Pronta para redescobrir{" "}
          <em className="italic text-primary">a sua melhor versão?</em>
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-muted">
          Reservamos um número limitado de avaliações por semana para garantir
          a excelência do atendimento. Agende a sua agora — em minutos pelo WhatsApp.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground px-12 py-5 text-sm font-bold uppercase tracking-widest text-background transition-transform hover:scale-[1.02]"
          >
            Solicitar Avaliação Personalizada
          </a>
          <a
            href="tel:+5561999990000"
            className="px-6 py-5 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
          >
            (61) 99999-0000
          </a>
        </div>
        <p className="mt-8 text-[10px] uppercase tracking-widest text-muted">
          Vagas limitadas para este mês · Lago Sul, Brasília
        </p>
      </div>
    </section>
  );
}