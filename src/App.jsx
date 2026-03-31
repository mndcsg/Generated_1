import { Routes, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Technology from './pages/Technology.jsx';
import Team from './pages/Team.jsx';
import Knowledge from './pages/Knowledge.jsx';
import Responsibility from './pages/Responsibility.jsx';
import PersonalLoan from './pages/PersonalLoan.jsx';
import BusinessLoan from './pages/BusinessLoan.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-cream">
      <SiteHeader />
      <div className="pl-56 min-h-screen flex flex-col">
        <main className="flex-1 px-gutter py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/team" element={<Team />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/responsibility" element={<Responsibility />} />
            <Route path="/personal-loan" element={<PersonalLoan />} />
            <Route path="/business-loan" element={<BusinessLoan />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
