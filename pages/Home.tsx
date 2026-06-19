import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SupportProcess from '../components/SupportProcess';
import CostAndPrescriptionSection from '../components/CostAndPrescriptionSection';
import FAQSection from '../components/FAQSection';
import { ArrowUpRight, ArrowRight, ShieldAlert, HeartHandshake, FileText, User, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  const carlaImageUrl = "https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/Carla.JPG";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Hero />

      {/* Sektion: Einstieg nach Zielgruppen */}
      <section className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <ScrollReveal duration={750}>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-accentBrown font-black uppercase tracking-[0.2em] text-xs">
                Zielgruppen & Hilfe
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">
                Für wen ist CarlaCares da?
              </h2>
              <p className="text-lg text-textDark/60 leading-relaxed">
                Ob du selbst Unterstützung suchst, eine nahestehende Person begleiten möchtest oder als Fachstelle eine Zuweisung prüfen willst – hier findest du den passenden Einstieg.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* Karte 1: Für Betroffene und Angehörige */}
            <ScrollReveal delay={50} duration={700}>
              <Link
                to="/angebot"
                className="bg-secondary/30 hover:bg-secondary/50 p-8 md:p-12 rounded-[40px] border border-gray-100/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-accentBrown/20 h-full w-full block card-interactive"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-accentBrown/15 rounded-2xl flex items-center justify-center text-accentBrown transition-transform duration-300 group-hover:scale-105">
                    <HeartHandshake className="w-7 h-7" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-accentGreen group-hover:text-accentBrown transition-colors">
                      Ich suche Unterstützung im Alltag
                    </h3>
                    <p className="text-textDark/70 leading-relaxed text-sm md:text-base">
                      Für Menschen mit psychischen Belastungen und Angehörige, die zu Hause oder im Alltag Begleitung, Struktur und Stabilisierung brauchen.
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100/50 flex items-center justify-between">
                  <span className="text-sm font-bold text-accentGreen group-hover:text-accentBrown transition-colors">
                    Unterstützung anfragen
                  </span>
                  <div className="w-10 h-10 rounded-full bg-accentGreen text-white flex items-center justify-center group-hover:bg-accentBrown transition-all group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Karte 2: Für Zuweisende */}
            <ScrollReveal delay={150} duration={700}>
              <Link
                to="/kontakt"
                className="bg-secondary/30 hover:bg-secondary/50 p-8 md:p-12 rounded-[40px] border border-gray-100/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-accentBrown/20 h-full w-full block card-interactive"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-accentGreen/10 rounded-2xl flex items-center justify-center text-accentGreen transition-transform duration-300 group-hover:scale-105">
                    <FileText className="w-7 h-7 text-accentBrown" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-accentGreen group-hover:text-accentBrown transition-colors">
                      Ich möchte eine Person zuweisen
                    </h3>
                    <p className="text-textDark/70 leading-relaxed text-sm md:text-base">
                      Für Ärztinnen, Ärzte, Sozialdienste, Kliniken, Fachstellen und Organisationen, die eine verlässliche ambulante psychiatrische Pflege suchen.
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100/50 flex items-center justify-between">
                  <span className="text-sm font-bold text-accentGreen group-hover:text-accentBrown transition-colors">
                    Zuweisung besprechen
                  </span>
                  <div className="w-10 h-10 rounded-full bg-accentGreen text-white flex items-center justify-center group-hover:bg-accentBrown transition-all group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <SupportProcess />

      <CostAndPrescriptionSection />

      {/* Sektion: Wenn der Alltag aus dem Gleichgewicht gerät */}
      <section className="py-24 px-6 bg-secondary/35 border-y border-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal duration={800}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">
                  Wenn der Alltag aus dem Gleichgewicht gerät
                </h2>
                <div className="w-20 h-1 bg-accentBrown rounded-full"></div>
              </div>
              <div className="space-y-6 text-lg text-textDark/70 leading-relaxed">
                <p>
                  Psychische Belastungen zeigen sich oft nicht nur in Gedanken oder Gefühlen, sondern ganz konkret im täglichen Leben. 
                  Struktur geht verloren, Termine werden schwierig, Selbstfürsorge fällt schwer oder soziale Kontakte brechen weg.
                </p>
                <p>
                  Ambulante psychiatrische Pflege setzt genau hier an. 
                  Nicht mit Psychotherapie, sondern mit zeitaufwendiger, praktischer Unterstützung im Alltag – angepasst an deine aktuelle Situation und Bedürfnisse.
                </p>
              </div>
              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <p className="text-xl md:text-2xl font-bold text-accentGreen leading-tight text-center">
                  "Im Mittelpunkt steht nicht eine Diagnose, sondern die Frage: 
                  Was brauchst du jetzt, um deinen Alltag bewältigen zu können?"
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150} duration={850}>
            <div className="relative">
               <div className="aspect-square bg-white rounded-[60px] p-4 shadow-xl border border-gray-100">
                  <img 
                    src="https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/Gemini_Generated_Image_tmhxectmhxectmhx.png" 
                    alt="CarlaCares bietet persönliche Begleitung und ambulante psychiatrische Pflege im Alltag" 
                    className="w-full h-full object-cover rounded-[48px]"
                  />
               </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sektion: Teaser-Bento-System für echte Unterseiten */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <ScrollReveal duration={800}>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-accentBrown font-black uppercase tracking-[0.2em] text-xs">Orientierung & Navigation</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">Ambulante psychiatrische Pflege im Überblick</h2>
              <p className="text-lg text-textDark/60 leading-relaxed">
                Finde gezielte Informationen für Betroffene, Angehörige sowie ärztliche und psychosoziale Fachstellen.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Teaser 1: Angebot */}
            <ScrollReveal delay={0} duration={650}>
              <div className="bg-secondary/30 p-8 rounded-[40px] border border-gray-100 flex flex-col h-full justify-between group card-interactive">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-accentGreen/10 rounded-2xl flex items-center justify-center text-accentGreen">
                    <HeartHandshake className="w-6 h-6 text-accentBrown" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-accentGreen">Pflege & Begleitung</h3>
                    <p className="text-sm text-textDark/60 leading-relaxed">
                      Unterstützung im gewohnten Umfeld bei der Bewältigung des Alltags, Tagesstrukturierung, Begleitung in Krisen und Umgang mit Symptomen.
                    </p>
                  </div>
                  <div className="pt-2">
                    <ul className="text-xs text-textDark/70 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accentBrown"></span>
                        Alltagsbewältigung & Strukturierung
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accentBrown"></span>
                        Krisenbegleitung & Stabilisierung
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-8">
                  <Link 
                    to="/angebot" 
                    className="w-full bg-accentGreen text-white py-4 px-6 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-accentBrown transition-all"
                  >
                    <span>Mehr zum Angebot</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Teaser 2: Über mich */}
            <ScrollReveal delay={100} duration={650}>
              <div className="bg-secondary/30 p-8 rounded-[40px] border border-gray-100 flex flex-col h-full justify-between group card-interactive">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-accentGreen/10 rounded-2xl flex items-center justify-center text-accentGreen">
                    <User className="w-6 h-6 text-accentBrown" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-accentGreen">Über mich</h3>
                    <p className="text-sm text-textDark/60 leading-relaxed">
                      Lernen Sie Carla Vanessa Carcaiso, ihre Haltung, über 15 Jahre Erfahrung aus verschiedenen Versorgungsstufen und Hund Loui kennen.
                    </p>
                  </div>
                  <div className="pt-2">
                    <ul className="text-xs text-textDark/70 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accentBrown"></span>
                        Über 15 Jahre psychiatrische Erfahrung
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accentBrown"></span>
                        Hund Loui als ruhiger Begleiter
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-8">
                  <Link 
                    to="/ueber-mich" 
                    className="w-full bg-accentGreen text-white py-4 px-6 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-accentBrown transition-all"
                  >
                    <span>Mehr über Carla erfahren</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Teaser 3: Für Zuweisende */}
            <ScrollReveal delay={200} duration={650}>
              <div className="bg-secondary/30 p-8 rounded-[40px] border border-gray-100 flex flex-col h-full justify-between group card-interactive">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-accentGreen/10 rounded-2xl flex items-center justify-center text-accentGreen">
                    <ShieldAlert className="w-6 h-6 text-accentBrown" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-accentGreen">Für Zuweisende</h3>
                    <p className="text-sm text-textDark/60 leading-relaxed">
                      Informationen und Zuweisungs-Indikationen für Ärzt:innen, Psychiater:innen, Psycholog:innen und soziale Dienste.
                    </p>
                  </div>
                  <div className="pt-2">
                    <ul className="text-xs text-textDark/70 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accentBrown"></span>
                        Indikationsklärung mit Decision-Map
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accentBrown"></span>
                        Kooperationen im Gesundheitssystem
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-8">
                  <Link 
                    to="/zuweisende" 
                    className="w-full bg-accentGreen text-white py-4 px-6 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-accentBrown transition-all"
                  >
                    <span>Informationen für Zuweisende</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Teaser 4: Abrechnung */}
            <ScrollReveal delay={100} duration={650}>
              <div className="bg-secondary/30 p-8 rounded-[40px] border border-gray-100 flex flex-col h-full justify-between group md:col-span-1 card-interactive">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-accentGreen/10 rounded-2xl flex items-center justify-center text-accentGreen">
                    <FileText className="w-6 h-6 text-accentBrown" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-accentGreen">Abrechnung</h3>
                    <p className="text-sm text-textDark/60 leading-relaxed">
                      Unterstützung als Teil der obligatorischen KVG-Krankenpflegeversicherung. Voraussetzungen, ärztliche Anordnung und Kostenübernahme.
                    </p>
                  </div>
                  <div className="pt-2">
                    <ul className="text-xs text-textDark/70 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accentBrown"></span>
                        Gesetzliche OKP/KVG-Grundversorgung
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accentBrown"></span>
                        Abrechnung über Krankenkasse
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-8">
                  <Link 
                    to="/abrechnung" 
                    className="w-full bg-accentGreen text-white py-4 px-6 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-accentBrown transition-all"
                  >
                    <span>Kosten und Verordnung klären</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Teaser 5: Kontakt (Double width or highlighted card style) */}
            <ScrollReveal delay={200} duration={650}>
              <div className="bg-accentGreen text-white p-8 rounded-[40px] shadow-xl hover:shadow-accentGreen/20 flex flex-col h-full justify-between group md:col-span-2 card-interactive">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    <Sparkles className="w-6 h-6 text-accentBrown" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">Ein erster Schritt kann Orientierung geben</h3>
                    <p className="text-sm text-white/70 leading-relaxed max-w-xl">
                      Manchmal hilft ein ruhiges Gespräch, um die eigene Situation besser einzuordnen. Wenn Sie unsicher sind, ob ambulante psychiatrische Pflege für Sie oder Ihre Angehörigen passend ist, nehmen Sie gerne Kontakt auf.
                    </p>
                  </div>
                </div>
                <div className="pt-8">
                  <Link 
                    to="/kontakt" 
                    className="w-full bg-white text-accentGreen py-4 px-6 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-accentBrown hover:text-white transition-all shadow-md"
                  >
                    <span>Kontakt aufnehmen</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" stroke="currentColor" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <FAQSection />

      {/* Sektion: Begleitung & Vertraulichkeit */}
      <section className="py-24 px-6 bg-secondary/20 text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-accentGreen">
            Fachliche Diskretion & Systemische Einbettung
          </h2>
          <p className="text-lg text-textDark/70 leading-relaxed max-w-3xl mx-auto">
            Die Tätigkeit von CarlaCares erfolgt ausschliesslich im Fürstentum Liechtenstein und ist gesetzlich in die reguläre Gesundheitsversorgung eingebettet. Wir arbeiten unter strenger Wahrung der gesetzlichen Schweigepflicht und in engem Austausch mit Ihren zuweisenden Ärzt:innen und Fachstellen.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
