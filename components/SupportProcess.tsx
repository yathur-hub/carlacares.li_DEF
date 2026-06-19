import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Users, Shield, Compass, AlertCircle, ArrowRight } from 'lucide-react';

const SupportProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Kontakt aufnehmen',
      description: 'Du meldest dich selbst, als Angehörige oder Angehöriger oder als zuweisende Stelle. Eine kurze Nachricht oder ein Anruf reicht, um die Situation erstmals einzuordnen.',
      icon: <Phone className="w-5 h-5 text-accentBrown" />,
    },
    {
      num: '02',
      title: 'Situation gemeinsam klären',
      description: 'Carla bespricht mit dir oder der zuweisenden Stelle, welche Unterstützung im Alltag gebraucht wird und ob eine ambulante psychiatrische Pflege passend für dich ist.',
      icon: <Users className="w-5 h-5 text-accentBrown" />,
    },
    {
      num: '03',
      title: 'Ärztliche Verordnung prüfen',
      description: 'Für die Abrechnung über die Krankenversicherung braucht es in der Regel eine ärztliche Verordnung. Carla klärt gemeinsam mit dir die nächsten Schritte dafür ab.',
      icon: <Shield className="w-5 h-5 text-accentBrown" />,
    },
    {
      num: '04',
      title: 'Begleitung im Alltag starten',
      description: 'Wenn alles geklärt ist, beginnt die Unterstützung bei dir zu Hause. Carla begleitet dich im Alltag und stimmt die Unterstützung mit den beteiligten Fachpersonen und deiner Situation ab.',
      icon: <Compass className="w-5 h-5 text-accentBrown" />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-secondary/20 border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-accentBrown font-black uppercase tracking-[0.2em] text-xs">
            Ablauf Begleitung
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">
            So funktioniert die Unterstützung
          </h2>
          <p className="text-lg text-textDark/60 leading-relaxed">
            Der Einstieg ist bewusst einfach gehalten. Gemeinsam wird geklärt, ob und wie Carla im Alltag unterstützen kann – fachlich fundiert, persönlich und auf Augenhöhe.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-[36px] border border-gray-100/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group"
            >
              <div className="space-y-6">
                {/* Top layout: step number and icon */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-extrabold text-accentGreen/15 tracking-tight select-none">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center transition-colors group-hover:bg-accentBrown/10">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-accentGreen group-hover:text-accentBrown transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-textDark/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notfall-Hinweis */}
        <div className="max-w-3xl mx-auto bg-white/80 p-6 rounded-3xl border border-red-100/60 flex gap-4 items-start shadow-sm">
          <div className="p-2 bg-red-550/10 text-red-600 rounded-xl flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-accentBrown" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-accentGreen uppercase tracking-wider">Wichtiger Hinweis</p>
            <p className="text-xs text-textDark/60 leading-relaxed">
              Bei akuten Notfällen oder unmittelbarer Gefahr ist CarlaCares nicht die richtige Anlaufstelle. In solchen Situationen kontaktiere bitte direkt den allgemeinen Notruf oder den zuständigen psychiatrischen Notfalldienst in deiner Region.
            </p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/kontakt"
            className="w-full sm:w-auto bg-accentGreen text-white px-8 py-4 rounded-xl font-bold hover:bg-accentBrown transition-all shadow-lg hover:shadow-accentBrown/20 text-center"
          >
            Erste Situation besprechen
          </Link>
          <Link
            to="/zuweisende"
            className="w-full sm:w-auto border-2 border-accentGreen/10 text-accentGreen px-8 py-4 rounded-xl font-bold hover:bg-secondary transition-all text-center"
          >
            Informationen für Zuweisende
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SupportProcess;
