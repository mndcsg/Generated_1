export default function BlockquoteStatement({ quote, name, role }) {
  return (
    <figure className="mx-auto max-w-3xl border border-creamBorder bg-cream/5 px-8 py-12 text-center">
      <blockquote className="text-lg font-medium leading-relaxed text-cream md:text-2xl">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-8">
        <div className="mx-auto mb-3 h-px w-12 bg-cream/40" />
        <p className="text-sm font-semibold text-cream">{name}</p>
        {role && <p className="mt-1 text-xs text-creamMuted">{role}</p>}
      </figcaption>
    </figure>
  );
}
