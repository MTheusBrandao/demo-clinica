export function Footer() {
  return (
    <footer className="border-t border-border bg-accent/20 px-6 pb-10 pt-20">
      <div className="mx-auto mb-16 grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <span className="mb-6 block font-display text-2xl font-medium tracking-tight">
            Pétala<span className="text-primary">.</span>
          </span>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            Clínica de estética premium em Brasília — referência em
            harmonização facial, dermatologia estética e bem-estar. Protocolos
            exclusivos no Lago Sul.
          </p>
          <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
            <a href="https://wa.me/5561999990000" target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp</a>
          </div>
        </div>
        <div>
          <h5 className="mb-6 text-[10px] font-bold uppercase tracking-widest">Onde estamos</h5>
          <address className="text-sm not-italic leading-relaxed text-muted">
            SHIS QI 05, Conjunto 10, Bloco C<br />
            Lago Sul, Brasília — DF<br />
            CEP 71615-100
          </address>
          <p className="mt-4 text-sm font-bold">(61) 99999-0000</p>
          <p className="mt-1 text-sm text-muted">contato@petalaestetica.com.br</p>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-muted">Seg–Sex 09h–19h · Sáb 09h–13h</p>
        </div>
        <div className="h-64 overflow-hidden ring-1 ring-border md:h-auto">
          <iframe
            title="Localização Pétala Estética — Lago Sul, Brasília"
            src="https://www.google.com/maps?q=Lago+Sul+Bras%C3%ADlia+DF&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full grayscale"
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-border pt-10 text-[10px] uppercase tracking-widest text-muted md:flex-row">
        <p>© {new Date().getFullYear()} Pétala Estética Brasília — Todos os direitos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-foreground">Política de Privacidade</a>
          <a href="#" className="hover:text-foreground">Termos</a>
        </div>
      </div>
    </footer>
  );
}