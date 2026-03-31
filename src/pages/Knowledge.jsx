import HeroSection from '../components/HeroSection.jsx';
import KnowledgeArticleCard from '../components/KnowledgeArticleCard.jsx';
import SidebarTagsAndCallout from '../components/SidebarTagsAndCallout.jsx';

const articles = [
  {
    meta: '20 nov 2025 · 5 min',
    title: 'Buró y puntaje: qué mueve tu historial',
    excerpt: 'Entiende cómo las instituciones leen tu comportamiento de pago y qué hábitos lo fortalecen.',
    tags: ['Crédito', 'Popular'],
  },
  {
    meta: '15 nov 2025 · 7 min',
    title: 'Del trámite al desembolso: guía práctica',
    excerpt: 'Un recorrido por plazos típicos, documentos útiles y cómo evitar retrabajos en la solicitud.',
    tags: ['Préstamos', 'Popular'],
  },
  {
    meta: '8 nov 2025 · 10 min',
    title: 'Fuentes de capital para pymes en México',
    excerpt: 'Comparativa sobria entre banca, SOFOM y esquemas alternativos según etapa del negocio.',
    tags: ['Empresas'],
  },
];

export default function Knowledge() {
  return (
    <div>
      <HeroSection
        eyebrow="Biblioteca abierta"
        title="Centro de"
        highlight="conocimiento financiero"
        description="Contenidos claros para decidir con más seguridad: crédito, ahorro y prevención de fraudes."
        imageSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80"
        imageAlt="Lectura y aprendizaje"
      />
      <div className="my-section flex flex-col gap-10 lg:flex-row lg:items-start">
        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {articles.map((a) => (
            <KnowledgeArticleCard key={a.title} {...a} />
          ))}
        </div>
        <SidebarTagsAndCallout
          tags={['Buró', 'Presupuesto', 'Fraude', 'PYMES', 'Deuda', 'Tasas']}
          noticeBody="Estos materiales son educativos; para decisiones puntuales solicita asesoría formal con nosotros."
        />
      </div>
    </div>
  );
}
