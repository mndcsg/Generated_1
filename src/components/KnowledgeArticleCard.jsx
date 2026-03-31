export default function KnowledgeArticleCard({ meta, title, excerpt, tags = [] }) {
  return (
    <article className="group flex flex-col border border-creamBorder bg-cream/5 transition-transform hover:-translate-y-1">
      <div className="h-40 bg-cream/10" />
      <div className="flex flex-1 flex-col p-5">
        {tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-cream/25 px-2 py-0.5 text-[0.6rem] uppercase text-creamMuted">
                {t}
              </span>
            ))}
          </div>
        )}
        {meta && <p className="mb-2 text-[0.65rem] text-creamMuted">{meta}</p>}
        <h3 className="text-base font-semibold text-cream transition-colors group-hover:text-white">{title}</h3>
        {excerpt && <p className="mt-2 flex-1 text-xs leading-relaxed text-creamMuted line-clamp-3">{excerpt}</p>}
      </div>
    </article>
  );
}
