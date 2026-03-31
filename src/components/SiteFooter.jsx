export default function SiteFooter() {
  return (
    <footer className="border-t border-creamBorder px-gutter py-6 text-[0.65rem] uppercase tracking-[0.2em] text-creamMuted">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>© 2026 J&amp;J Beyond, S.A. de C.V., SOFOM, E.N.R.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#/" className="transition-opacity hover:opacity-100">
            Aviso de privacidad
          </a>
          <a href="#/" className="transition-opacity hover:opacity-100">
            Términos
          </a>
          <a href="#/" className="transition-opacity hover:opacity-100">
            Riesgos
          </a>
        </div>
      </div>
      <p className="mt-3 max-w-2xl text-[0.55rem] normal-case tracking-normal text-creamMuted">
        La información aquí mostrada es orientativa; no sustituye asesoría financiera personalizada.
      </p>
    </footer>
  );
}
