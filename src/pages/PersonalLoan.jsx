import HeroSection from '../components/HeroSection.jsx';
import SectionEyebrowHeading from '../components/SectionEyebrowHeading.jsx';
import FeatureGlassCard from '../components/FeatureGlassCard.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import RiskDisclaimerCallout from '../components/RiskDisclaimerCallout.jsx';
import CtaStrip from '../components/CtaStrip.jsx';

function Mark() {
  return <span className="text-[0.5rem]">●</span>;
}

export default function PersonalLoan() {
  return (
    <div>
      <HeroSection
        eyebrow="Personas físicas"
        title="Crédito personal"
        highlight="con respaldo profesional"
        description="Diseñamos esquemas para distintas etapas de vida: hogar, movilidad, salud y proyectos personales, con calendario de pagos comprensible."
        imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80"
        imageAlt="Planeación personal"
      />
      <section className="my-section">
        <SectionEyebrowHeading
          eyebrow="Productos"
          title="Variantes frecuentes"
          subtitle="Cada línea se ajusta al perfil y a la finalidad declarada."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: 'Vivienda y remodelación', d: 'Mejoras habitacionales con plazos acordes a tu flujo.' },
            { t: 'Movilidad', d: 'Adquisición o sustitución de vehículo con valuación documentada.' },
            { t: 'Educación', d: 'Colegiaturas y especialización sin frenar otros objetivos.' },
            { t: 'Salud', d: 'Gastos médicos relevantes con esquema de amortización claro.' },
            { t: 'Microactividad', d: 'Liquidez para emprendedores con operación comprobable.' },
            { t: 'Consumo planeado', d: 'Eventos y equipamiento con disciplina de pago.' },
          ].map((x) => (
            <FeatureGlassCard key={x.t} icon={Mark} title={x.t} description={x.d} />
          ))}
        </div>
      </section>
      <SectionEyebrowHeading eyebrow="Por qué con nosotros" title="Ventajas que suman" />
      <div className="mb-section grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <FeatureGlassCard icon={Mark} title="Tiempos ágiles" description="Proceso digital asistido y revisión humana focalizada." />
        <FeatureGlassCard icon={Mark} title="Papeles claros" description="Checklist mínimo viable para no dar vueltas." />
        <FeatureGlassCard icon={Mark} title="Pagos flexibles" description="Esquemas que respetan estacionalidad de ingresos." />
        <FeatureGlassCard icon={Mark} title="Asesor dedicado" description="Un interlocutor durante toda la operación." />
      </div>
      <SectionEyebrowHeading eyebrow="Pasos" title="Cómo avanza tu solicitud" />
      <ProcessSteps
        steps={[
          { title: 'Conversación inicial', body: 'Planteamos meta y capacidad de pago realista.' },
          { title: 'Expediente digital', body: 'Cargas documentos con asistencia puntual.' },
          { title: 'Dictamen', body: 'Motor cuantitativo + validación experta.' },
          { title: 'Desembolso', body: 'Transferencia según lo pactado tras firma.' },
        ]}
      />
      <div className="my-section">
        <RiskDisclaimerCallout>
          Todo préstamo implica obligación de pago. Ajusta monto y plazo a tu capacidad para no comprometer tu estabilidad; ante dudas, pregunta a un asesor.
        </RiskDisclaimerCallout>
      </div>
      <CtaStrip title="¿Listo para revisar números?" description="Agenda una sesión breve sin compromiso." />
    </div>
  );
}
