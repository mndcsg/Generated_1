export default function StatGrid({ items = [], columns = 'grid-cols-2 lg:grid-cols-4' }) {
  return (
    <div className={`grid gap-px bg-creamBorder ${columns}`}>
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-canvas/80 px-5 py-8 text-center transition-colors hover:bg-canvas"
        >
          <p className="text-2xl font-bold text-cream md:text-3xl">{item.value}</p>
          <p className="mt-2 text-[0.65rem] uppercase tracking-widest text-creamMuted">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
