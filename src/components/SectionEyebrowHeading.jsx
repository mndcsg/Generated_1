export default function SectionEyebrowHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const wrap = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`mb-12 max-w-3xl ${wrap}`}>
      {eyebrow && (
        <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-creamMuted">{eyebrow}</p>
      )}
      {title && <h2 className="text-3xl font-bold leading-tight text-cream md:text-4xl">{title}</h2>}
      {subtitle && <p className="mt-4 text-sm leading-relaxed text-creamMuted">{subtitle}</p>}
    </div>
  );
}
