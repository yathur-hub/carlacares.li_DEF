import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, HelpCircle, FileCheck, Coins } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CostAndPrescriptionSection: React.FC = () => {
  const points = [
    {
      title: 'Ärztliche Verordnung',
      description: 'Für den Start braucht es üblicherweise eine ärztliche Verordnung. Diese kann zum Beispiel durch eine behandelnde Ärztin oder einen behandelnden Arzt ausgestellt werden.',
      icon: <FileCheck className="w-5 h-5 text-accentBrown" />,
    },
    {
      title: 'Fachliche Bedarfsabklärung',
      description: 'Vor Beginn wird geklärt, welche Unterstützung sinnvoll ist und in welchem Umfang Carla im Alltag begleiten kann.',
      icon: <ClipboardList className="w-5 h-5 text-accentBrown" />,
    },
    {
      title: 'Klärung der Kostenübernahme',
      description: 'Die Abrechnung hängt von den individuellen Voraussetzungen und den geltenden Vorgaben ab. Carla unterstützt dabei, die nächsten Schritte verständlich einzuordnen.',
      icon: <Coins className="w-5 h-5 text-accentBrown" />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white border-b border-gray-100/85">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <ScrollReveal duration={700}>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-accentBrown font-black uppercase tracking-[0.2em] text-xs">
              Kosten & Verordnung
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">
              Kosten, Verordnung und nächste Schritte
            </h2>
            <p className="text-lg text-textDark/60 leading-relaxed">
              Ambulante psychiatrische Pflege kann in der Regel über die Krankenversicherung abgerechnet werden, wenn eine ärztliche Verordnung und eine fachliche Bedarfsabklärung vorliegen. Carla erklärt dir oder der zuweisenden Stelle, welche Schritte dafür notwendig sind.
            </p>
          </div>
        </ScrollReveal>

        {/* Content points as columns */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {points.map((point, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} duration={650}>
              <div 
                className="bg-secondary/35 p-8 rounded-[36px] border border-gray-100/60 flex flex-col h-full justify-between card-interactive group"
              >
                <div className="space-y-6">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-gray-50 shadow-sm transition-colors group-hover:bg-accentBrown/10">
                    {point.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-accentGreen group-hover:text-accentBrown transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-sm text-textDark/70 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quiet disclaimer warning box */}
        <div className="max-w-3xl mx-auto bg-secondary/40 p-6 rounded-3xl border border-gray-100 flex gap-4 items-start shadow-sm">
          <div className="p-2 bg-accentBrown/10 text-accentBrown rounded-xl flex-shrink-0">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-accentGreen uppercase tracking-wider">Ergänzender Hinweis</p>
            <p className="text-xs text-textDark/60 leading-relaxed">
              Die genaue Kostenübernahme muss im Einzelfall geklärt werden. CarlaCares gibt keine Garantie für eine automatische Übernahme durch die Krankenversicherung.
            </p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/kontakt"
            className="w-full sm:w-auto bg-accentGreen text-white px-8 py-4 rounded-xl font-bold hover:bg-accentBrown transition-all shadow-lg hover:shadow-accentBrown/20 text-center"
          >
            Kosten & Start klären
          </Link>
          <Link
            to="/kontakt"
            className="w-full sm:w-auto border-2 border-accentGreen/10 text-accentGreen px-8 py-4 rounded-xl font-bold hover:bg-secondary transition-all text-center"
          >
            Zuweisung besprechen
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CostAndPrescriptionSection;
