export default function Button({ children, as: Comp = 'button', to, variant = 'ghost', className = '', ...rest }) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium uppercase tracking-widest text-xs transition-opacity duration-300';
  const variants = {
    ghost: 'border border-cream/30 px-5 py-3 text-cream hover:border-cream hover:bg-cream/5',
    outline: 'border border-cream px-6 py-3 text-cream hover:bg-cream hover:text-canvas',
  };
  const props =
    Comp === 'button'
      ? { type: 'button', ...rest }
      : { to, ...rest };

  return (
    <Comp className={`${base} ${variants[variant] ?? variants.ghost} ${className}`} {...props}>
      {children}
    </Comp>
  );
}
