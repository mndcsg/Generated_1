export default function TeamMemberCard({ name, role, bio, tags = [] }) {
  return (
    <article className="border border-creamBorder bg-cream/5 p-6 transition-transform hover:-translate-y-0.5">
      <header className="mb-4 border-b border-creamBorder pb-4">
        <h3 className="text-lg font-bold text-cream">{name}</h3>
        <p className="mt-1 text-sm font-medium text-creamMuted">{role}</p>
      </header>
      <p className="text-xs leading-relaxed text-creamMuted line-clamp-4">{bio}</p>
      {tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t} className="rounded-full border border-cream/20 px-3 py-1 text-[0.6rem] uppercase tracking-wider text-creamMuted">
              {t}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
