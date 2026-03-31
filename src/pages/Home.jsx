import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';
import SectionEyebrowHeading from '../components/SectionEyebrowHeading.jsx';
import StatGrid from '../components/StatGrid.jsx';
import ServiceShowcaseCard from '../components/ServiceShowcaseCard.jsx';
import FeatureGlassCard from '../components/FeatureGlassCard.jsx';
import CtaStrip from '../components/CtaStrip.jsx';
import Button from '../components/Button.jsx';

const img = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80';

function DotIcon() {
  return <span className="h-2 w-2 rounded-full bg-cream" />;
}

export default function Home() {
  return (
    <div>
      <HeroSection
        eyebrow="Operación transparente · Enfoque serio"
        title="Para el mañana,"
        highlight="soluciones financieras con rigor"
        description="Llevamos casi dos décadas acompañando personas y empresas en México con análisis de riesgo cuidadoso y acompañamiento cercano en cada etapa del financiamiento."
        imageSrc={img}
        imageAlt="Equipo analizando información financiera"
      >
        <Button as={Link} to="/services" variant="outline">
          Explorar oferta
        </Button>
      </HeroSection>

      <StatGrid
        items={[
          { value: '18', label: 'Años de trayectoria' },
          { value: '114k+', label: 'Personas atendidas' },
          { value: '475M+', label: 'Recursos colocados' },
        ]}
        columns="grid-cols-3"
      />

      <section className="my-section">
        <SectionEyebrowHeading
          align="center"
          eyebrow="Líneas centrales"
          title="Servicios financieros con enfoque profesional"
          subtitle="Acompañamos el ciclo de vida patrimonial y empresarial con propuestas hechas a medida."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <ServiceShowcaseCard
            imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
            imageAlt="Familia planificando"
            kicker="Personas"
            title="Crédito orientado a personas"
            description="Alternativas ágiles para consumo, vivienda, estudios y salud, con tiempos de respuesta competitivos y trato directo."
            to="/personal-loan"
            linkLabel="Ver línea personal"
          />
          <ServiceShowcaseCard
            reverse
            imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
            imageAlt="Edificios corporativos"
            kicker="Empresas"
            title="Financiamiento para negocios"
            description="Estructuras para capital de trabajo, proyectos y cadena de suministro, alineadas a la etapa de crecimiento de cada compañía."
            to="/business-loan"
            linkLabel="Ver línea empresarial"
          />
        </div>
      </section>

      <section className="my-section grid gap-6 md:grid-cols-2">
        <FeatureGlassCard
          icon={DotIcon}
          title="Cumplimiento normativo"
          description="Procesos alineados a la regulación aplicable y controles internos documentados."
        />
        <FeatureGlassCard
          icon={DotIcon}
          title="Equipo multidisciplina"
          description="Perfiles en finanzas, tecnología y cumplimiento colaborando en cada operación."
        />
        <FeatureGlassCard
          icon={DotIcon}
          title="Tecnología de soporte"
          description="Herramientas que ordenan datos y aceleran evaluaciones sin sacrificar prudencia."
        />
        <FeatureGlassCard
          icon={DotIcon}
          title="Trato cercano"
          description="Priorizamos claridad en cada paso: plazos, requisitos y expectativas bien explicados."
        />
      </section>

      <CtaStrip
        title="¿Quieres iniciar una conversación?"
        description="Nuestro equipo puede orientarte sobre educación financiera y alternativas disponibles."
        actions={
          <Button as={Link} to="/knowledge" variant="ghost">
            Ir al centro de conocimiento
          </Button>
        }
      />
    </div>
  );
}
