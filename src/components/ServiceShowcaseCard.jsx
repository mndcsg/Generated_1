import TextLink from './TextLink.jsx';

export default function ServiceShowcaseCard({
  imageSrc,
  imageAlt,
  kicker,
  title,
  description,
  to,
  linkLabel,
  reverse = false,
}) {
  return (
    <article className="grid border border-creamBorder bg-cream/5 lg:grid-cols-2">
      <div className={`overflow-hidden ${reverse ? 'lg:order-2' : ''}`}>
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt || ''} className="h-64 w-full min-h-[16rem] object-cover object-top lg:h-full" />
        ) : (
          <div className="h-64 min-h-[16rem] bg-cream/10 lg:h-full" />
        )}
      </div>
      <div className={`flex flex-col justify-center p-8 lg:p-12 ${reverse ? 'lg:order-1' : ''}`}>
        {kicker && <p className="mb-2 text-[0.65rem] uppercase tracking-[0.3em] text-creamMuted">{kicker}</p>}
        <h3 className="text-2xl font-bold text-cream">{title}</h3>
        {description && <p className="mt-4 text-sm leading-relaxed text-creamMuted">{description}</p>}
        {to && linkLabel && (
          <div className="mt-6">
            <TextLink to={to}>{linkLabel}</TextLink>
          </div>
        )}
      </div>
    </article>
  );
}
