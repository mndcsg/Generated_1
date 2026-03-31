import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';
import SectionEyebrowHeading from '../components/SectionEyebrowHeading.jsx';
import StatGrid from '../components/StatGrid.jsx';
import RiskDisclaimerCallout from '../components/RiskDisclaimerCallout.jsx';
import CtaStrip from '../components/CtaStrip.jsx';
import Button from '../components/Button.jsx';

function Tag() {
  return <span className="text-[0.55rem]">▪</span>;
}

const solutions = [
  { t: 'Capital de trabajo', d: 'Liquidez para operar sin pausas.', chips: ['Corto plazo', 'Revolvente'] },
  { t: 'Activos productivos', d: 'Maquinaria, expansión y activos duraderos.', chips: ['Mediano plazo'] },
  { t: 'Cadena de suministro', d: 'Apoyo a proveedores y clientes ancla.', chips: ['Facturas', 'Órdenes'] },
  { t: 'Innovación', d: 'Empresas de base tecnológica con garantías no tradicionales.', chips: ['PI', 'Alto crecimiento'] },
  { t: 'Comercio exterior', d: 'Operaciones de importación/exportación con flujo medido.', chips: ['FX', 'Cartas'] },
  { t: 'Proyectos verdes', d: 'Iniciativas de eficiencia energética y sostenibilidad.', chips: ['ESG'] },
];

export default function BusinessLoan() {
  return (
    <div>
      <HeroSection
        eyebrow="Personas morales"
        title="Financiamiento"
        highlight="para escalar tu empresa"
        description="Acompañamos ciclos de inversión con estructuras que respetan el flujo de tu negocio y la visión de tus socios."
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80"
        imageAlt="Ciudad y negocios"
      >
        <Button as={Link} to="/services" variant="outline">
          Ver panorama de servicios
        </Button>
      </HeroSection>
      <div className="mb-section">
        <StatGrid
          items={[
            { value: '8,500+', label: 'Empresas acompañadas' },
            { value: '32', label: 'Cobertura estatal' },
            { value: '96%', label: 'Satisfacción declarada' },
            { value: 'AAA', label: 'Calificación referencial' },
          ]}
        />
      </div>
      <SectionEyebrowHeading eyebrow="Soluciones" title="Seis enfoques frecuentes" />
      <div className="mb-section grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <article key={s.t} className="border border-creamBorder bg-cream/5 p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center border border-cream/20 text-cream">
              <Tag />
            </div>
            <h3 className="text-lg font-bold text-cream">{s.t}</h3>
            <p className="mt-2 text-xs leading-relaxed text-creamMuted">{s.d}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.chips.map((c) => (
                <span key={c} className="rounded-full border border-cream/20 px-2 py-0.5 text-[0.55rem] uppercase text-creamMuted">
                  {c}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <section className="my-section grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionEyebrowHeading eyebrow="Diferenciales" title="Socios que entienden operación" />
          <ul className="mt-6 space-y-4 text-sm text-creamMuted">
            <li>Diagnóstico compartido con dirección y áreas clave.</li>
            <li>Equipo dedicado desde estructura hasta post-desembolso.</li>
            <li>Calendarios de pago alineados a estacionalidad del sector.</li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80"
          alt="Reunión empresarial"
          className="h-72 w-full rounded-sm object-cover lg:h-96"
        />
      </section>
      <div className="my-section">
        <RiskDisclaimerCallout>
          El crédito empresarial conlleva riesgo de mercado. Dimensiona la deuda según flujo real y destino del recurso; conserva disciplina en reportes.
        </RiskDisclaimerCallout>
      </div>
      <CtaStrip title="Hablemos de tu proyecto" description="Un especialista revisará sector, ticket y plazo tentativo." />
    </div>
  );
}
