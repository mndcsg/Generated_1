import HeroSection from '../components/HeroSection.jsx';
import SectionEyebrowHeading from '../components/SectionEyebrowHeading.jsx';
import TeamMemberCard from '../components/TeamMemberCard.jsx';
import BlockquoteStatement from '../components/BlockquoteStatement.jsx';
import FeatureGlassCard from '../components/FeatureGlassCard.jsx';

function Star() {
  return <span className="text-cream">★</span>;
}

export default function Team() {
  return (
    <div>
      <HeroSection
        eyebrow="Liderazgo"
        title="Equipo que"
        highlight="impulsa la visión"
        description="Perfiles senior en finanzas, legal y tecnología con trayectoria en instituciones formales."
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
        imageAlt="Colaboración en equipo"
      />
      <SectionEyebrowHeading
        align="center"
        eyebrow="Dirección"
        title="Perfiles principales"
      />
      <div className="mb-section grid gap-8 md:grid-cols-2">
        <TeamMemberCard
          name="Jorge Luis Leal Cárcamo"
          role="Administrador único"
          bio="Ha coordinado proyectos de colocación empresarial y sentó bases de gobierno corporativo alineado a la normativa."
          tags={['Estrategia', 'Crédito PYME', 'Gobierno']}
        />
        <TeamMemberCard
          name="Jorge Luis Leal Cárcamo"
          role="Representante legal"
          bio="Enfocado en activos, control operativo y relación con contrapartes institucionales."
          tags={['Riesgos', 'Activos', 'Alianzas']}
        />
      </div>
      <BlockquoteStatement
        quote="Una institución sólida se construye con confianza mutua, apego a la ley y responsabilidad social constante."
        name="Jorge Luis Leal Cárcamo"
        role="Administrador único y representante legal"
      />
      <section className="my-section">
        <SectionEyebrowHeading align="center" eyebrow="Cultura" title="Valores que guían el día a día" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureGlassCard icon={Star} title="Integridad" description="Coherencia entre lo que decimos y lo que hacemos." />
          <FeatureGlassCard icon={Star} title="Excelencia" description="Estándares exigentes en análisis y servicio." />
          <FeatureGlassCard icon={Star} title="Colaboración" description="Trabajo transversal para resolver más rápido." />
          <FeatureGlassCard icon={Star} title="Responsabilidad" description="Impacto consciente en clientes y comunidad." />
        </div>
      </section>
    </div>
  );
}
