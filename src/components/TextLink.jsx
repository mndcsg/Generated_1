import { Link } from 'react-router-dom';

export default function TextLink({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cream underline-offset-4 transition-opacity hover:opacity-70 ${className}`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
