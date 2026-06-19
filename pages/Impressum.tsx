import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Header */}
      <section className="bg-white pt-16 md:pt-24 pb-12 md:pb-16 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-accentGreen tracking-tight">
            Impressum
          </h1>
          <p className="text-lg text-accentBrown uppercase tracking-wider font-bold">
            Gesetzliche Angaben gemäss den gesetzlichen Richtlinien
          </p>
          <div className="w-20 h-1 bg-accentBrown rounded-full mt-4"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 bg-secondary/30 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100 space-y-12 text-textDark text-sm md:text-base leading-relaxed">
          
          {/* Main Info */}
          <div className="grid md:grid-cols-2 gap-12 border-b border-gray-100 pb-12">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-accentGreen uppercase tracking-widest text-xs">Herausgeberin & Diensteanbieterin</h2>
              <div className="text-lg">
                <p className="font-bold text-accentGreen">Carla Vanessa Carcaiso</p>
                <p className="text-textDark/80">Ambulante psychiatrische Pflegefachfrau</p>
                <p className="text-textDark/80 mt-2">Selbstständige Tätigkeit bewilligt</p>
                <p className="text-textDark/80">im Fürstentum Liechtenstein</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-accentGreen uppercase tracking-widest text-xs">Direktkontakt</h2>
              <div className="text-lg">
                <p className="flex items-center gap-2">
                  <span className="font-bold text-accentGreen">Telefon:</span> 
                  <a href="tel:+41791940718" className="text-accentBrown hover:underline font-bold">+41 79 194 07 18</a>
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <span className="font-bold text-accentGreen">E-Mail:</span> 
                  <a href="mailto:carla@carlacares.li" className="text-accentBrown hover:underline font-bold">carla@carlacares.li</a>
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <span className="font-bold text-accentGreen">Webseite:</span> 
                  <span className="text-textDark/70">www.carlacares.li</span>
                </p>
              </div>
            </div>
          </div>

          {/* Licenses & Supervisory Boards */}
          <div className="space-y-8 border-b border-gray-100 pb-12">
            <h2 className="text-2xl font-bold text-accentGreen">Aufsicht & Verband</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-secondary/50 rounded-3xl space-y-2">
                <h3 className="font-bold text-accentGreen">Zuständige Aufsichtsbehörde</h3>
                <p className="text-sm text-textDark/80">
                  Amt für Gesundheit Liechtenstein (AG)<br />
                  Äulestrasse 51, Postfach 684<br />
                  9490 Vaduz, Fürstentum Liechtenstein<br />
                  Webseite: <a href="https://www.llv.li" target="_blank" rel="noopener noreferrer" className="text-accentBrown hover:underline">www.llv.li</a>
                </p>
              </div>

              <div className="p-6 bg-secondary/50 rounded-3xl space-y-2">
                <h3 className="font-bold text-accentGreen">Berufsverband & Krankenkassenvertrag</h3>
                <p className="text-sm text-textDark/80">
                  Mitglied beim Liechtensteinischen Krankenkassenverband (LKV).<br />
                  Anerkannte Leistungserbringerin im Rahmen der obligatorischen Krankenpflegeversicherung (OKP) gemäss KLV.
                </p>
              </div>
            </div>

            <div className="p-6 bg-accentGreen/5 rounded-3xl space-y-2">
              <h3 className="font-bold text-accentGreen">Berufsbezeichnung & Ausbildung</h3>
              <p className="text-sm text-textDark/80">
                Dipl. Pflegefachfrau für Psychiatrie (Höhere Fachschule, HF), Ausbildung absolviert in der Schweiz. Bewilligung zur selbstständigen Berufsausübung erteilt durch die Regierung des Fürstentums Liechtenstein.
              </p>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-accentGreen">Haftungs- & Rechtshinweise</h2>
            
            <div className="space-y-4 text-xs md:text-sm text-textDark/80">
              <p>
                <strong>Haftungsausschluss für Inhalte:</strong> Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.
              </p>
              <p>
                <strong>Haftungsausschluss für externe Links:</strong> Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p>
                <strong>Urheberrechtsschutz:</strong> Die durch die Seitenbetreiberin erstellten Inhalte, Fotos und Strukturen auf dieser Website unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der Urheberin. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Impressum;
