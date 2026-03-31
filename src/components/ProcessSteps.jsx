export default function ProcessSteps({ steps = [] }) {
  return (
    <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li key={i} className="relative text-left">
          <span className="mb-3 block text-4xl font-bold text-cream/20">{String(i + 1).padStart(2, '0')}</span>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-cream">{s.title}</h4>
          <p className="mt-2 text-xs leading-relaxed text-creamMuted">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
