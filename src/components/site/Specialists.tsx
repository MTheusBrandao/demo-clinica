import specialistImg from "@/assets/specialist.jpg";

export function Specialists() {
  return (
    <section id="especialistas" className="bg-accent/30 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
            Equipe Médica
          </span>
          <h2 className="font-display text-4xl md:text-5xl">
            Especialistas que <em className="italic text-primary">você pode confiar.</em>
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <img
            src={specialistImg}
            alt="Dra. Helena Valente, dermatologista responsável técnica da Pétala"
            width={640}
            height={640}
            loading="lazy"
            className="aspect-square w-full max-w-md object-cover ring-1 ring-border"
          />
          <div>
            <h3 className="mb-2 font-display text-4xl">Dra. Helena Valente</h3>
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Dermatologia & Estética Avançada · CRM-DF 12.345 · RQE 7.890
            </p>
            <p className="mb-6 leading-relaxed text-muted">
              Membro titular da Sociedade Brasileira de Dermatologia, com mais
              de 15 anos dedicados ao rejuvenescimento facial natural. Formada
              pela USP, com fellowships em Madrid e Seul, é referência em
              harmonização facial sutil e protocolos regenerativos.
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "Harmonização Facial Avançada",
                "Protocolos Regenerativos com Bioestimuladores",
                "Skinbooster, Microagulhamento & Laser",
              ].map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span className="text-foreground/80">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}