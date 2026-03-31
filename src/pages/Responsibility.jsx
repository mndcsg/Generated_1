import HeroSection from '../components/HeroSection.jsx';
import SectionEyebrowHeading from '../components/SectionEyebrowHeading.jsx';
import StatGrid from '../components/StatGrid.jsx';
import ServiceShowcaseCard from '../components/ServiceShowcaseCard.jsx';
import ESGPillarGrid from '../components/ESGPillarGrid.jsx';

const pillars = [
  {
    letter: 'A',
    title: 'Ambiente',
    items: ['Financiamiento con criterios ambientales', 'Huella operativa contenida', 'Oficinas eficientes'],
  },
  {
    letter: 'S',
    title: 'Sociedad',
    items: ['Becas y mentorías', 'Inclusión financiera en comunidades', 'Derechos laborales respetados'],
  },
  {
    letter: 'G',
    title: 'Gobierno',
    items: ['Cumplimiento normativo', 'Comités de transparencia', 'Ética aplicada al día a día'],
  },
];

export default function Responsibility() {
  return (
    <div>
      <HeroSection
        eyebrow="Compromiso nacional"
        title="Responsabilidad"
        highlight="que se traduce en hechos"
        description="Invertimos tiempo y recursos en educación, equidad y sostenibilidad porque el crédito también es relación de largo plazo."
        imageSrc="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=900&q=80"
        imageAlt="Comunidad"
      />
      <div className="mb-section">
        <StatGrid
          items={[
            { value: '$80M+', label: 'Aportaciones a impacto' },
            { value: '1M+', label: 'Personas beneficiadas' },
            { value: '15k t', label: 'Compensación de carbono' },
            { value: '2,000+', label: 'Iniciativas locales' },
          ]}
        />
      </div>
      <SectionEyebrowHeading eyebrow="Programas" title="Tres frentes de acción" />
      <div className="mb-section space-y-10">
        <ServiceShowcaseCard
          imageSrc="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
          kicker="Educación"
          title="Becas y acompañamiento escolar"
          description="Apoyo económico y tutorías para estudiantes con talento en contextos vulnerables."
        />
        <ServiceShowcaseCard
          reverse
          imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
          kicker="Inclusión"
          title="Finanzas formales más cercanas"
          description="Talleres gratuitos y productos accesibles en zonas rurales y periurbanas."
        />
      </div>
      <SectionEyebrowHeading eyebrow="ESG" title="Compromisos medibles" />
      <ESGPillarGrid pillars={pillars} />
    </div>
  );
}
