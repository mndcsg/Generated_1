export default function SidebarTagsAndCallout({ tags = [], popularTitle = 'Temas frecuentes', noticeTitle = 'Aviso editorial', noticeBody }) {
  return (
    <aside className="flex w-full flex-col gap-6 lg:max-w-xs lg:shrink-0">
      <div className="border border-creamBorder bg-cream/5">
        <div className="border-b border-creamBorder px-4 py-3">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-cream">{popularTitle}</h3>
        </div>
        <div className="flex flex-wrap gap-2 p-4">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              className="rounded-full border border-cream/20 px-2.5 py-1 text-[0.6rem] text-creamMuted transition-colors hover:border-cream/50 hover:text-cream"
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      {noticeBody && (
        <div className="border border-creamBorder p-4 text-xs leading-relaxed text-creamMuted">
          <p className="mb-2 font-semibold text-cream">{noticeTitle}</p>
          {noticeBody}
        </div>
      )}
    </aside>
  );
}
