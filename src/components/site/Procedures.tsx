import harmImg from "@/assets/proc-harmonizacao.jpg";
import botoxImg from "@/assets/proc-botox.jpg";
import labialImg from "@/assets/proc-labial.jpg";
import bioImg from "@/assets/proc-bioestimuladores.jpg";
import skinImg from "@/assets/proc-skinbooster.jpg";
import laserImg from "@/assets/proc-laser.jpg";

export function Procedures() {
  return (
    <section id="procedimentos" className="bg-background px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
            Protocolos exclusivos
          </span>
          <h2 className="mb-4 font-display text-4xl md:text-5xl">
            Curadoria de <em className="italic text-primary">alta performance</em>
          </h2>
          <p className="mx-auto max-w-xl text-muted">
            Tratamentos signature combinando tecnologia, ciência e o refinamento da
            estética avançada para resultados duradouros.
          </p>
        </div>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-4 md:grid-flow-dense">
          {/* Harmonização — large */}
          <article className="group relative col-span-1 overflow-hidden bg-background ring-1 ring-border md:col-span-2 md:row-span-2 md:auto-rows-[260px]">
            <img src={harmImg} alt="Harmonização facial" width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent p-8 text-background">
              <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/90">Signature</span>
              <h3 className="mb-2 font-display text-3xl">Harmonização Facial</h3>
              <p className="mb-4 max-w-xs text-sm opacity-80">Equilíbrio, simetria e proporção respeitando seus traços originais.</p>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Saiba mais →</span>
            </div>
          </article>

          {/* Botox */}
          <article className="group relative overflow-hidden bg-background ring-1 ring-border">
            <img src={botoxImg} alt="Toxina botulínica" width={768} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/70 to-transparent p-6 text-background">
              <h3 className="font-display text-xl">Toxina Botulínica</h3>
              <p className="text-[10px] uppercase tracking-widest opacity-70">Suavização natural</p>
            </div>
          </article>

          {/* Preenchimento Labial */}
          <article className="group relative overflow-hidden bg-background ring-1 ring-border">
            <img src={labialImg} alt="Preenchimento labial" width={768} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/70 to-transparent p-6 text-background">
              <h3 className="font-display text-xl">Preenchimento Labial</h3>
              <p className="text-[10px] uppercase tracking-widest opacity-70">Volume & contorno</p>
            </div>
          </article>

          {/* Bioestimuladores — tall */}
          <article className="group relative overflow-hidden bg-background ring-1 ring-border md:row-span-2">
            <img src={bioImg} alt="Bioestimuladores de colágeno" width={768} height={1280} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 via-primary/20 to-transparent p-8 text-foreground">
              <h3 className="mb-1 font-display text-2xl">Bioestimuladores</h3>
              <p className="text-[10px] font-medium uppercase tracking-widest opacity-80">Firmeza & Colágeno</p>
            </div>
          </article>

          {/* Skinbooster — wide */}
          <article className="group relative overflow-hidden bg-background ring-1 ring-border md:col-span-2">
            <img src={skinImg} alt="Skinbooster e hidratação profunda" width={1280} height={640} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/75 to-transparent p-8 text-background">
              <h3 className="mb-1 font-display text-2xl">Skinbooster & Hidratação Profunda</h3>
              <p className="text-[10px] uppercase tracking-widest opacity-70">Brilho · Textura · Viço</p>
            </div>
          </article>

          {/* Laser */}
          <article className="group relative overflow-hidden bg-background ring-1 ring-border">
            <img src={laserImg} alt="Laser e depilação a laser" width={768} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute left-4 top-4 bg-background/90 px-3 py-1 text-[9px] font-bold uppercase tracking-widest backdrop-blur">
              Tecnologia
            </span>
            <div className="absolute inset-0 flex items-end p-6">
              <h3 className="font-display text-xl text-background drop-shadow-md">Laser & Depilação</h3>
            </div>
          </article>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-widest text-muted">
          {["Limpeza de Pele Premium", "Peeling", "Emagrecimento Estético", "Microagulhamento", "Drenagem Linfática"].map((t) => (
            <span key={t} className="before:mr-3 before:text-primary before:content-['◆']">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}