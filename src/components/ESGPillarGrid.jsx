export default function ESGPillarGrid({ pillars = [] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {pillars.map((p) => (
        <div key={p.letter} className="border border-creamBorder bg-cream/5 p-6">
          <span className="text-5xl font-bold text-cream/20">{p.letter}</span>
          <h3 className="mt-4 text-sm font-semibold text-cream">{p.title}</h3>
          <ul className="mt-4 space-y-2 text-xs text-creamMuted">
            {p.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-cream/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
