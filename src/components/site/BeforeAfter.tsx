import { useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <section id="resultados" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
            Antes & Depois
          </span>
          <h2 className="mb-4 font-display text-4xl md:text-5xl">
            Resultados <em className="italic text-primary">verdadeiramente naturais</em>
          </h2>
          <p className="mx-auto max-w-lg text-muted">
            Trabalhamos para realçar o que você já tem de melhor — nunca transformar.
            Arraste para revelar o antes e depois.
          </p>
        </div>

        <div
          ref={ref}
          className="relative aspect-[4/5] w-full overflow-hidden ring-1 ring-border select-none md:aspect-[3/2]"
          onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onClick={(e) => handleMove(e.clientX)}
        >
          <img src={afterImg} alt="Depois" width={768} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img src={beforeImg} alt="Antes" width={768} height={1024} loading="lazy" className="h-full w-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
          </div>
          <div
            className="absolute inset-y-0 z-10 flex w-px cursor-ew-resize items-center justify-center bg-primary"
            style={{ left: `${pos}%` }}
            onMouseDown={(e) => e.preventDefault()}
          >
            <div className="flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-foreground shadow-luxe ring-4 ring-background">
              <span className="text-xs">⇄</span>
            </div>
          </div>
          <span className="absolute left-4 top-4 bg-foreground/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-background backdrop-blur">Antes</span>
          <span className="absolute right-4 top-4 bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground">Depois</span>
        </div>

        <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-muted">
          *Resultados individuais podem variar. Consulte um de nossos especialistas.
        </p>
      </div>
    </section>
  );
}