import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Header */}
      <section className="bg-white pt-16 md:pt-24 pb-12 md:pb-16 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-accentGreen tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-lg text-accentBrown uppercase tracking-wider font-bold">
            Umgang mit Ihren persönlichen Daten bei CarlaCares
          </p>
          <div className="w-20 h-1 bg-accentBrown rounded-full mt-4"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 bg-secondary/30 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100 space-y-12 text-textDark text-sm md:text-base leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-accentGreen">1. Einleitung und Geltungsbereich</h2>
            <p>
              Als selbstständige ambulante psychiatrische Pflegefachfrau im Fürstentum Liechtenstein nehme ich den Schutz Ihrer persönlichen, gesundheitlichen und pflegerischen Daten ausserordentlich ernst. In dieser Datenschutzerklärung informiere ich Sie darüber, welche Daten bei der Nutzung meiner Website carlacares.li sowie im Rahmen meiner beruflichen Pflegetätigkeit erhoben und wie diese verarbeitet werden.
            </p>
            <p>
              Die rechtlichen Grundlagen basieren auf dem Gesetz über den Datenschutz (DSG) sowie der europäischen Datenschutz-Grundverordnung (DSGVO), die im Fürstentum Liechtenstein anwendbar ist.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-accentGreen">2. Verantwortliche Stelle</h2>
            <p className="font-bold">Verantwortlich für die Datenverarbeitung:</p>
            <div className="p-6 bg-secondary/50 rounded-2xl border border-gray-100 italic">
              Carla Vanessa Carcaiso<br />
              Ambulante psychiatrische Pflege<br />
              Fürstentum Liechtenstein<br />
              E-Mail: <a href="mailto:carla@carlacares.li" className="text-accentBrown hover:underline font-bold">carla@carlacares.li</a><br />
              Telefon: <a href="tel:+41791940718" className="text-accentBrown hover:underline font-bold">+41 79 194 07 18</a>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-accentGreen">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-bold text-accentGreen/80">a) Server-Logfiles</h3>
            <p>
              Beim Zugriff auf meine Website werden automatisch Informationen durch den Webhosting-Provider erfasst und in sogenannten Server-Logfiles gespeichert. Diese Übermittlung erfolgt automatisch durch Ihren Browser:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Referrer-URL (von welcher Website Sie zu mir gelangt sind)</li>
              <li>Typ und Version Ihres Webbrowsers sowie Ihr Betriebssystem</li>
              <li>Hostname und gekürzte IP-Adresse des zugreifenden Geräts</li>
              <li>Uhrzeit und Datum des Serverzugriffs</li>
            </ul>
            <p>
              Diese Daten sind nicht bestimmten Personen zuordenbar und dienen der technischen Gewährleistung von Stabilität und Sicherheit der Website.
            </p>

            <h3 className="text-lg font-bold text-accentGreen/80 pt-4">b) Kontaktformular & E-Mail-Anfragen</h3>
            <p>
              Wenn Sie mir per Kontaktformular oder E-Mail eine Anfrage zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer, Anfrageinhalt bzw. Anfragebetreff) zum Zwecke der Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne Ihre ausdrückliche Einwilligung weiter.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-accentGreen">4. Datenverarbeitung im Pflege- und Abrechnungsverhältnis</h2>
            <p>
              Die Erhebung und Verarbeitung von Gesundheits- und Behandlungsdaten ist eine zwingende Voraussetzung für die Durchführung der ambulanten psychiatrischen Pflege.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Umfang:</strong> Stammdaten (Name, Geburtsdatum, Adresse), Versicherungsnummer, Diagnoseberichte, ärztliche Verordnungen, Pflegeplanungen, Verlaufsberichte sowie Abrechnungsdaten.</li>
              <li><strong>Zweck:</strong> Erfüllung der pflegerischen Leistungen, gesetzlich vorgeschriebene Pflegedokumentation sowie Einreichung der Abrechnung bei KVG-Krankenkassen über die entsprechenden liechtensteinischen Abrechnungsstellen.</li>
              <li><strong>Weitergabe:</strong> Eine Weitergabe an Dritte (insbesondere behandelnde Ärzte, Psychiater, Therapeuten oder Versicherungen) erfolgt ausschliesslich auf gesetzlicher Basis oder nach Erteilung Ihrer schriftlichen Schweigepflichtsentbindung.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-accentGreen">5. Speicherdauer</h2>
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Verarbeitungszweck oder aufgrund gesetzlicher Aufbewahrungsfristen (im Gesundheitswesen in Liechtenstein in der Regel mindestens 10 bis 20 Jahre für Behandlungsunterlagen) erforderlich ist. Über das Kontaktformular übermittelte Daten, die nicht zu einem Behandlungs- oder Pflegeverhältnis führen, werden nach abschliessender Bearbeitung gelöscht.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-accentGreen">6. Ihre Rechte</h2>
            <p>
              Sie haben im Rahmen der anwendbaren datenschutzrechtlichen Bestimmungen jederzeit das Recht auf:
            </p>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-secondary/50 rounded-2xl space-y-1">
                <span className="font-bold text-accentGreen text-sm block">Auskunft & Berichtigung</span>
                <span className="text-xs text-textDark/80">Kostenfreie Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie deren Richtigstellung.</span>
              </div>
              <div className="p-4 bg-secondary/50 rounded-2xl space-y-1">
                <span className="font-bold text-accentGreen text-sm block">Löschung & Einschränkung</span>
                <span className="text-xs text-textDark/80">Löschung Ihrer Daten oder Einschränkung derer Verarbeitung, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</span>
              </div>
              <div className="p-4 bg-secondary/50 rounded-2xl space-y-1">
                <span className="font-bold text-accentGreen text-sm block">Widerrufsrecht</span>
                <span className="text-xs text-textDark/80">Widerruf der einmal erteilten Einwilligung zur Datenverarbeitung für zukünftige Wirkungen.</span>
              </div>
              <div className="p-4 bg-secondary/50 rounded-2xl space-y-1">
                <span className="font-bold text-accentGreen text-sm block">Beschwerderecht</span>
                <span className="text-xs text-textDark/80">Beschwerde bei der zuständigen Aufsichtsbehörde (Datenschutzstelle Liechtenstein, Vaduz).</span>
              </div>
            </div>
            <p className="pt-4 text-xs text-textDark/60">
              Für Fragen zu Ihren Rechten können Sie sich jederzeit unter den im Impressum oder oben genannten Kontaktdaten an mich wenden.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-accentGreen">7. Datensicherheit</h2>
            <p>
              Zum Schutz Ihrer Daten nutzen wir Sicherheitsmassnahmen, die dem aktuellen Stand der Technik entsprechen. Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung, zu erkennen an dem Schloss-Symbol in der Adresszeile Ihres Webbrowsers.
            </p>
            <p className="text-xs text-textDark/40">
              Stand dieser Datenschutzerklärung: Juni 2026. Nachträgliche Anpassungen aufgrund gesetzlicher Änderungen bleiben vorbehalten.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Datenschutz;
