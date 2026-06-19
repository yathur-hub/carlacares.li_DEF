import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CareAndSupport from './pages/CareAndSupport';
import Billing from './pages/Billing';
import AboutMe from './pages/AboutMe';
import Referrers from './pages/Referrers';
import Kontakt from './pages/Kontakt';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';
import Footer from './components/Footer';
import Page from './components/Page';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white selection:bg-accentBrown/20">
        <Header />
        
        <main className="flex-grow overflow-hidden">
          <Routes>
            <Route 
              path="/" 
              element={
                <Page 
                  title="CarlaCares | Ambulante psychiatrische Pflege in Liechtenstein"
                  description="CarlaCares begleitet Menschen im Alltag bei ambulanter psychiatrischer Pflege, fachlicher Unterstützung und persönlicher Stabilisierung."
                >
                  <Home />
                </Page>
              } 
            />
            <Route 
              path="/angebot" 
              element={
                <Page 
                  title="Angebot | Ambulante psychiatrische Pflege"
                  description="Erfahren Sie, wie CarlaCares Menschen im Alltag begleitet, Stabilität fördert und ambulante psychiatrische Pflege individuell gestaltet."
                >
                  <CareAndSupport />
                </Page>
              } 
            />
            <Route 
              path="/ueber-mich" 
              element={
                <Page 
                  title="Über mich | Carla Vanessa Carcaiso"
                  description="Lernen Sie Carla Vanessa Carcaiso, ihre Haltung, Erfahrung und Arbeitsweise in der ambulanten psychiatrischen Pflege kennen."
                >
                  <AboutMe />
                </Page>
              } 
            />
            <Route 
              path="/zuweisende" 
              element={
                <Page 
                  title="Für Zuweisende | CarlaCares"
                  description="Informationen für Ärzt:innen, Psychiater:innen, Psycholog:innen, Sozialdienste und Fachstellen zur Zusammenarbeit mit CarlaCares."
                >
                  <Referrers />
                </Page>
              } 
            />
            <Route 
              path="/abrechnung" 
              element={
                <Page 
                  title="Abrechnung | CarlaCares"
                  description="Informationen zu Verordnung, Kostenübernahme und Abrechnung ambulanter psychiatrischer Pflege bei CarlaCares."
                >
                  <Billing />
                </Page>
              } 
            />
            <Route 
              path="/kontakt" 
              element={
                <Page 
                  title="Kontakt | CarlaCares"
                  description="Nehmen Sie Kontakt mit CarlaCares auf für Fragen, Zuweisungen oder Informationen zur ambulanten psychiatrischen Pflege."
                >
                  <Kontakt />
                </Page>
              } 
            />
            <Route 
              path="/datenschutz" 
              element={
                <Page 
                  title="Datenschutz | CarlaCares"
                  description="Datenschutzerklärung für die Dienstleistungen von CarlaCares in Liechtenstein."
                >
                  <Datenschutz />
                </Page>
              } 
            />
            <Route 
              path="/impressum" 
              element={
                <Page 
                  title="Impressum | CarlaCares"
                  description="Gesetzliche Angaben und Impressum für CarlaCares."
                >
                  <Impressum />
                </Page>
              } 
            />
            {/* Fallback route */}
            <Route 
              path="*" 
              element={
                <Page 
                  title="404 - Seite nicht gefunden | CarlaCares"
                  description="Die gesuchte Seite konnte nicht gefunden werden."
                >
                  <div className="py-24 px-6 text-center max-w-lg mx-auto space-y-6">
                    <h1 className="text-4xl font-extrabold text-accentGreen">404 - Seite nicht gefunden</h1>
                    <p className="text-textDark/60">Die gewünschte Seite existiert leider nicht.</p>
                    <Link to="/" className="inline-block bg-accentGreen text-white px-8 py-3 rounded-xl font-bold hover:bg-accentBrown transition-colors">
                      Zurück zur Startseite
                    </Link>
                  </div>
                </Page>
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
