import { Instagram } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsappFloat";

export function Nav() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md md:px-12">
      <a href="#top" className="font-display text-2xl font-medium tracking-tight">
        Pétala<span className="text-primary">.</span>
      </a>
      <div className="hidden gap-10 text-[10px] font-medium uppercase tracking-[0.25em] text-muted md:flex">
        <a href="#sobre" className="transition-colors hover:text-foreground">Sobre</a>
        <a href="#procedimentos" className="transition-colors hover:text-foreground">Procedimentos</a>
        <a href="#resultados" className="transition-colors hover:text-foreground">Resultados</a>
        <a href="#especialistas" className="transition-colors hover:text-foreground">Equipe</a>
        <a href="#contato" className="transition-colors hover:text-foreground">Contato</a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://instagram.com/petala.estetica"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-primary hover:text-primary"
        >
          <Instagram className="h-4 w-4" strokeWidth={1.5} />
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-background transition-all hover:bg-foreground/90"
        >
          Agendar
        </a>
      </div>
    </nav>
  );
}