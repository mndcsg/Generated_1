import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/services', label: 'Servicios' },
  { to: '/technology', label: 'Tecnología' },
  { to: '/team', label: 'Equipo' },
  { to: '/knowledge', label: 'Educación' },
  { to: '/responsibility', label: 'Responsabilidad' },
  { to: '/personal-loan', label: 'Crédito personal' },
  { to: '/business-loan', label: 'Crédito empresarial' },
];

export default function SiteHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 flex h-full w-56 flex-col border-r border-creamBorder bg-canvas px-6 py-10">
      <div className="mb-12 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-cream">
        J&amp;J Beyond
      </div>
      <nav className="flex flex-1 flex-col gap-3 text-xs font-medium uppercase tracking-widest text-creamMuted">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `transition-opacity duration-300 hover:text-cream ${isActive ? 'text-cream opacity-100' : 'opacity-80'}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <p className="mt-auto text-[0.6rem] uppercase tracking-[0.25em] text-creamMuted">
        Desplázate para explorar
      </p>
    </header>
  );
}
