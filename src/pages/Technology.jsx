import HeroSection from '../components/HeroSection.jsx';
import SectionEyebrowHeading from '../components/SectionEyebrowHeading.jsx';
import FeatureGlassCard from '../components/FeatureGlassCard.jsx';

function Chip() {
  return <span className="text-lg">◆</span>;
}

export default function Technology() {
  return (
    <div>
      <HeroSection
        eyebrow="Innovación responsable"
        title="Plataforma y modelos"
        highlight="que ordenan el riesgo"
        description="Combinamos datos, automatización y supervisión humana para acelerar sin perder prudencia."
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80"
        imageAlt="Circuitos y tecnología"
      />
      <section className="my-section">
        <SectionEyebrowHeading
          eyebrow="Capacidades"
          title="Tres pilares tecnológicos"
          subtitle="Desarrollo interno iterativo al servicio del negocio."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          <FeatureGlassCard
            icon={Chip}
            title="Motor analítico"
            description="Modelos que integran señales múltiples para perfilar riesgo con contexto."
          />
          <FeatureGlassCard
            icon={Chip}
            title="Protección de datos"
            description="Controles de acceso, cifrado en tránsito y gobierno de la información."
          />
          <FeatureGlassCard
            icon={Chip}
            title="Orquestación de flujos"
            description="Menos fricción operativa entre solicitud, dictamen y dispersión."
          />
        </div>
      </section>
    </div>
  );
}
