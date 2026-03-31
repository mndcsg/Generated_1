import HeroSection from '../components/HeroSection.jsx';
import SectionEyebrowHeading from '../components/SectionEyebrowHeading.jsx';
import StatGrid from '../components/StatGrid.jsx';
import ServiceShowcaseCard from '../components/ServiceShowcaseCard.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import CtaStrip from '../components/CtaStrip.jsx';

export default function Services() {
  return (
    <div>
      <HeroSection
        eyebrow="Oferta integral"
        title="Portafolio de"
        highlight="servicios financieros"
        description="Integramos soluciones para hogares y empresas con un mismo estándar de análisis, transparencia y seguimiento."
        imageSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80"
        imageAlt="Reunión de servicios"
      />
      <div className="mb-section">
        <StatGrid
          items={[
            { value: '1.2M+', label: 'Clientes de persona física' },
            { value: '8,500+', label: 'Relaciones empresariales' },
            { value: '28', label: 'Entidades con presencia' },
            { value: '18', label: 'Años en cumplimiento' },
          ]}
        />
      </div>
      <SectionEyebrowHeading
        eyebrow="Dos verticales"
        title="Personas y empresas, mismo estándar"
        subtitle="Diseñamos la propuesta según el perfil de riesgo y la necesidad puntual."
      />
      <div className="mb-section space-y-10">
        <ServiceShowcaseCard
          imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
          kicker="Personas físicas"
          title="Crédito personal"
          description="Cubrimos escenarios de consumo sensato, mejoras de vivienda, estudios y gastos de salud, con esquema de pagos claro desde el inicio."
          to="/personal-loan"
          linkLabel="Ampliar información"
        />
        <ServiceShowcaseCard
          reverse
          imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
          kicker="Personas morales"
          title="Crédito empresarial"
          description="Estructuras para capital de circulante, activos y proveeduría, con seguimiento después del desembolso."
          to="/business-loan"
          linkLabel="Ampliar información"
        />
      </div>
      <SectionEyebrowHeading
        eyebrow="Cómo trabajamos"
        title="Ruta de servicio ordenada"
        subtitle="Cada hito queda documentado para que sepas en qué etapa vas."
      />
      <ProcessSteps
        steps={[
          { title: 'Diagnóstico inicial', body: 'Escuchamos objetivos y restricciones reales antes de proponer.' },
          { title: 'Expediente', body: 'Te guiamos en la documentación esencial para agilizar revisión.' },
          { title: 'Evaluación', body: 'Modelos cuantitativos y criterio humano en conjunto.' },
          { title: 'Estructura', body: 'Presentamos montos, plazos y condiciones con lenguaje llano.' },
          { title: 'Dispersión', body: 'Al cerrar formalidades, coordinamos la entrega acordada.' },
        ]}
      />
      <CtaStrip title="¿Buscas una propuesta a tu medida?" description="Podemos orientarte según sector y tamaño." />
    </div>
  );
}
