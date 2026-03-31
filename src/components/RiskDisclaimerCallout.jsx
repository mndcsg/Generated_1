export default function RiskDisclaimerCallout({ children }) {
  return (
    <div className="border border-cream/25 bg-cream/5 px-5 py-4 text-sm leading-relaxed text-creamMuted">
      <strong className="text-cream">Aviso de riesgo:</strong> {children}
    </div>
  );
}
