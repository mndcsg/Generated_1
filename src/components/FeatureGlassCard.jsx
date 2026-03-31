export default function FeatureGlassCard({ title, description, icon: Icon }) {
  return (
    <div className="border border-creamBorder bg-cream/5 p-6 transition-colors hover:border-cream/30 hover:bg-cream/10">
      {Icon && (
        <div className="mb-4 flex h-10 w-10 items-center justify-center border border-cream/20 text-cream">
          <Icon />
        </div>
      )}
      <h4 className="text-sm font-semibold text-cream">{title}</h4>
      {description && <p className="mt-2 text-xs leading-relaxed text-creamMuted">{description}</p>}
    </div>
  );
}
