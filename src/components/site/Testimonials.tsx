const testimonials = [
  {
    quote:
      "A Pétala mudou minha percepção sobre estética. O atendimento no Lago Sul é impecável e os resultados são tão naturais que ninguém percebe que fiz algo — apenas que estou mais descansada.",
    author: "Mariana Silveira",
    city: "Brasília — DF",
  },
  {
    quote:
      "Atendimento humano e técnico ao mesmo tempo. Saí me sentindo mais bonita e, principalmente, mais confiante. Indico de olhos fechados.",
    author: "Beatriz Lemos",
    city: "Lago Sul",
  },
  {
    quote:
      "Profissionalismo e sofisticação em cada detalhe. A clínica é um verdadeiro santuário.",
    author: "Ana Cristina M.",
    city: "Sudoeste",
  },
];

export function Testimonials() {
  return (
    <section className="bg-foreground px-6 py-24 text-background md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl md:text-5xl">
            A voz de quem viveu <em className="italic text-primary">a experiência Pétala.</em>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.author}
              className="flex flex-col border-t border-primary/30 pt-8"
              style={{ animation: `fade-up 0.9s var(--ease-cinematic) ${i * 0.12}s both` }}
            >
              <div className="mb-5 flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span key={k}>★</span>
                ))}
              </div>
              <blockquote className="mb-6 font-display text-xl italic leading-snug">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto text-[10px] font-bold uppercase tracking-widest">
                — {t.author}
                <span className="block font-normal text-background/50">{t.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}