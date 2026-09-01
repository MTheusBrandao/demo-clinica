import clinicImg from "@/assets/clinic-interior.jpg";

const pillars = [
  { n: "01", title: "Tecnologia de Elite", text: "Equipamentos certificados pela Anvisa e FDA, dos protocolos mais avançados do mundo." },
  { n: "02", title: "Olhar Individual", text: "Cada rosto é único. Planos personalizados para resultados verdadeiramente naturais." },
  { n: "03", title: "Atendimento Humanizado", text: "Uma jornada de cuidado absoluto, com escuta atenta e ambiente reservado." },
];

export function About() {
  return (
    <section id="sobre" className="bg-accent/30 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-20 md:items-center">
        <div className="relative">
          <img
            src={clinicImg}
            alt="Interior da clínica Pétala em Brasília com mármore e tons champanhe"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover ring-1 ring-border"
          />
          <div className="absolute -bottom-6 -right-6 hidden bg-foreground p-8 text-background lg:block">
            <p className="mb-1 font-display text-4xl text-primary">15</p>
            <p className="text-[10px] uppercase tracking-widest opacity-70">Anos de história</p>
          </div>
        </div>
        <div>
          <span className="mb-6 inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
            A Clínica
          </span>
          <h2 className="mb-8 text-balance font-display text-4xl leading-tight md:text-5xl">
            Ciência e arte em <em className="italic text-primary">perfeita harmonia.</em>
          </h2>
          <p className="mb-10 text-pretty text-base leading-relaxed text-muted md:text-lg">
            No coração de Brasília, a Pétala foi concebida para oferecer uma experiência
            de cuidado absoluto. Combinamos protocolos dermatológicos rigorosos com um
            olhar artístico para a harmonização facial e o bem-estar de cada paciente.
          </p>
          <ul className="space-y-6">
            {pillars.map((p) => (
              <li key={p.n} className="flex items-start gap-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 font-display text-sm italic text-primary">
                  {p.n}
                </span>
                <div>
                  <h4 className="mb-1 text-sm font-semibold uppercase tracking-wide">{p.title}</h4>
                  <p className="text-sm leading-relaxed text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}