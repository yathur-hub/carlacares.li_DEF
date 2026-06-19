import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, AlertTriangle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Für wen ist CarlaCares geeignet?',
      answer: 'CarlaCares richtet sich an Menschen mit psychischen Belastungen, die im Alltag Unterstützung, Struktur, Stabilisierung oder psychiatrisch-pflegerische Begleitung benötigen. Auch Angehörige und zuweisende Stellen können sich melden, wenn sie eine erste Einschätzung wünschen.'
    },
    {
      question: 'Muss ich eine Diagnose haben, um mich zu melden?',
      answer: 'Nein, für eine erste Kontaktaufnahme musst du keine Diagnose mitteilen. Es reicht, wenn du kurz beschreibst, wobei du Unterstützung suchst. Gemeinsam kann geklärt werden, ob ambulante psychiatrische Pflege passend ist und welche nächsten Schritte sinnvoll sind.'
    },
    {
      question: 'Kann ich mich auch selbst bei Carla melden?',
      answer: 'Ja. Du kannst dich selbst melden, wenn du Unterstützung im Alltag suchst oder unsicher bist, ob CarlaCares zu deiner Situation passt. Die erste Kontaktaufnahme ist bewusst einfach gehalten.'
    },
    {
      question: 'Können Angehörige Kontakt aufnehmen?',
      answer: 'Ja. Angehörige können sich melden, wenn sie Unterstützung für eine nahestehende Person suchen oder eine Situation besser einordnen möchten. Wichtig ist, dass die betroffene Person möglichst einbezogen wird und mit einer weiteren Abklärung einverstanden ist.'
    },
    {
      question: 'Wobei kann Carla im Alltag unterstützen?',
      answer: 'Carla kann zum Beispiel bei Tagesstruktur, Stabilisierung, Orientierung im Alltag, Umgang mit Belastungen, Terminen, sozialer Vernetzung oder der Koordination mit beteiligten Fachpersonen unterstützen. Der genaue Bedarf wird individuell besprochen.'
    },
    {
      question: 'Braucht es eine ärztliche Verordnung und wie funktioniert die Abrechnung?',
      answer: 'Für die Abrechnung über die Krankenversicherung braucht es in der Regel eine ärztliche Verordnung und eine fachliche Bedarfsabklärung. Ambulante psychiatrische Pflege kann dann in der Regel über die Krankenversicherung abgerechnet werden, wenn die formalen Voraussetzungen erfüllt sind. Die genaue Kostenübernahme muss jedoch im Einzelfall geklärt werden.'
    },
    {
      question: 'Können Ärztinnen, Sozialdienste oder Fachstellen Personen zuweisen?',
      answer: 'Ja. Zuweisende Stellen wie Ärztinnen, Ärzte, Sozialdienste, Kliniken, Fachstellen, Gemeinden oder Organisationen können sich melden, um eine mögliche Unterstützung oder Zusammenarbeit zu besprechen.'
    },
    {
      question: 'Ist CarlaCares die richtige Anlaufstelle bei akuten Notfällen?',
      answer: 'Nein. Bei akuten Notfällen, unmittelbarer Selbst- oder Fremdgefährdung oder einer medizinischen Krise ist CarlaCares nicht die richtige Anlaufstelle. In solchen Situationen bitte direkt den Notruf oder den zuständigen psychiatrischen Notfalldienst kontaktieren.'
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Prepare Schema.json FAQPage structured data
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 px-6 bg-secondary/15 border-t border-gray-100/50">
      {/* Dynamic structured data for indexation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-accentBrown font-black uppercase tracking-[0.2em] text-xs">
            Häufige Fragen
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">
            Was du vor der Kontaktaufnahme wissen solltest
          </h2>
          <p className="text-lg text-textDark/60 leading-relaxed">
            Hier findest du Antworten auf wichtige Fragen rund um ambulante psychiatrische Pflege, den Einstieg mit Carla, ärztliche Verordnung, Kosten und Zuweisungen.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-gray-100/70 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accentGreen/10"
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                  aria-controls={`faq-content-${idx}`}
                >
                  <span className="font-bold text-accentGreen text-base md:text-lg hover:text-accentBrown transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-accentGreen transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-accentBrown/10 text-accentBrown' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div
                  id={`faq-content-${idx}`}
                  aria-labelledby={`faq-btn-${idx}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 border-t border-gray-150' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 py-5 md:px-8 md:py-6 text-sm md:text-base text-textDark/75 leading-relaxed bg-secondary/15">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help box */}
        <div className="bg-white border border-gray-100 p-8 rounded-3xl text-center space-y-6 shadow-sm max-w-2xl mx-auto">
          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-accentGreen">Noch unsicher, ob CarlaCares passend ist?</h3>
            <p className="text-sm text-textDark/60 leading-relaxed">
              Eine kurze erste Kontaktaufnahme reicht, um die Situation einzuordnen und die nächsten Schritte zu besprechen.
            </p>
          </div>
          <div>
            <Link
              to="/kontakt"
              className="inline-block bg-accentGreen text-white px-8 py-3.5 rounded-xl font-bold hover:bg-accentBrown transition-all shadow-md hover:shadow-accentBrown/10"
            >
              Situation unverbindlich besprechen
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
