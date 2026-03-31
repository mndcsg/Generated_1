/**
 * Layout asimétrico: imagen abajo a la izquierda, titular a la derecha (alineado con tokens 1).
 */
export default function HeroSection({
  eyebrow,
  title,
  highlight,
  description,
  imageSrc,
  imageAlt = '',
  children,
}) {
  return (
    <section className="relative mb-section min-h-[70vh]">
      <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="order-2 lg:order-1 lg:col-span-5 lg:row-span-2">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-72 w-full object-cover object-top sm:h-96 lg:h-[28rem] rounded-sm"
            />
          ) : (
            <div className="h-72 bg-cream/5 sm:h-96 lg:h-[28rem] rounded-sm" aria-hidden />
          )}
        </div>
        <div className="order-1 flex flex-col justify-end lg:order-2 lg:col-span-7 lg:pb-8">
          {eyebrow && (
            <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-creamMuted">{eyebrow}</p>
          )}
          <h1 className="text-5xl font-bold leading-[0.95] text-cream md:text-7xl lg:text-8xl">
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-cream">{highlight}</span>
              </>
            )}
          </h1>
          {description && <p className="mt-8 max-w-xl text-sm leading-relaxed text-creamMuted">{description}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
