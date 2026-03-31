import Button from './Button.jsx';

export default function CtaStrip({ title, description, actions }) {
  return (
    <section className="my-section border-y border-creamBorder py-16 text-center">
      <div className="mx-auto max-w-2xl">
        {title && <h2 className="text-2xl font-bold text-cream md:text-3xl">{title}</h2>}
        {description && <p className="mt-4 text-sm text-creamMuted">{description}</p>}
        {actions && <div className="mt-8 flex flex-wrap justify-center gap-4">{actions}</div>}
      </div>
    </section>
  );
}
