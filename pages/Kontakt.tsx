import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Kontakt: React.FC = () => {
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'Erstgespräch',
    requesterType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [apiError, setApiError] = useState('');

  const requesterOptions = [
    { id: 'Betroffene Person', label: 'Betroffene Person' },
    { id: 'Angehörige Person', label: 'Angehörige Person' },
    { id: 'Ärztin / Arzt', label: 'Ärztin / Arzt' },
    { id: 'Sozialdienst / Amt', label: 'Sozialdienst / Amt' },
    { id: 'Klinik / Fachstelle', label: 'Klinik / Fachstelle' },
    { id: 'Organisation', label: 'Organisation' },
    { id: 'Andere', label: 'Andere' },
  ];

  const getMessageHelperText = () => {
    switch (formData.requesterType) {
      case 'Betroffene Person':
        return 'Erzähl kurz, wobei du dir Unterstützung wünschst. Es reicht eine grobe Beschreibung.';
      case 'Angehörige Person':
        return 'Beschreibe kurz, für wen du Unterstützung suchst und ob die betroffene Person über die Anfrage informiert ist.';
      case 'Ärztin / Arzt':
      case 'Sozialdienst / Amt':
      case 'Klinik / Fachstelle':
      case 'Organisation':
        return 'Beschreibe kurz die Situation und ob eine ärztliche Verordnung oder eine Zuweisung bereits vorliegt.';
      case 'Andere':
        return 'Beschreibe kurz dein Anliegen, damit Carla deine Anfrage richtig einordnen kann.';
      default:
        return 'Wie kann ich Ihnen helfen? Beschreiben Sie kurz Ihr Anliegen...';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.requesterType) {
      setValidationError('Bitte wähle aus, in welcher Rolle du dich meldest.');
      const element = document.getElementById('requester-type-container');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    } else {
      setValidationError('');
    }

    setIsSubmitting(true);
    setApiError('');

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          salutation: formData.salutation,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          requesterType: formData.requesterType,
          message: formData.message,
          pageUrl: window.location.href,
          source: "carlacares.li Kontaktformular"
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          salutation: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: 'Erstgespräch',
          requesterType: '',
          message: ''
        });
      } else {
        throw new Error('Server respondierte mit einem Fehler-Status.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setApiError('Die Anfrage konnte leider nicht versendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie CarlaCares direkt per E-Mail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const carlaImageUrl = "https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/Carla.JPG";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="bg-white pt-16 md:pt-24 pb-12 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-accentGreen tracking-tight leading-tight">
                Kontakt
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-accentBrown uppercase tracking-wider">
                Der erste Schritt zu persönlicher Unterstützung
              </h2>
            </div>
            <p className="text-lg md:text-xl text-textDark/70 leading-relaxed max-w-3xl">
              Ob für eine kurze Frage, eine detaillierte Abklärung oder eine konkrete Zuweisung – nehmen Sie unverbindlich Kontakt auf. Ein erstes Gespräch kann helfen, Orientierung zu gewinnen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-16 md:py-24 px-6 bg-secondary/30 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Contact & Availability Info */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Person profile */}
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm flex items-center space-x-6">
              <div className="w-20 h-20 rounded-full border-2 border-accentBrown overflow-hidden flex-shrink-0">
                <img 
                  src={carlaImageUrl} 
                  alt="Carla Vanessa Carcaiso" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-accentGreen">Carla Vanessa Carcaiso</p>
                <p className="text-xs font-bold text-accentBrown uppercase tracking-widest">Inhaberin CarlaCares</p>
                <p className="text-xs text-textDark/50 mt-1">Dipl. Pflegefachfrau HF</p>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-accentGreen">Direkte Kontaktwege</h3>
              <div className="grid gap-6">
                
                <a href="mailto:carla@carlacares.li" className="flex items-start space-x-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-accentGreen/5 group-hover:bg-accentGreen/10 flex items-center justify-center text-accentBrown flex-shrink-0 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-textDark/40">E-Mail</p>
                    <p className="font-bold text-accentGreen mt-1 text-lg group-hover:text-accentBrown transition-colors">carla@carlacares.li</p>
                    <p className="text-sm text-textDark/60 mt-0.5">Sichere Verbindung für Ihre Anfrage.</p>
                  </div>
                </a>

                <a href="tel:+41791940718" className="flex items-start space-x-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-accentGreen/5 group-hover:bg-accentGreen/10 flex items-center justify-center text-accentBrown flex-shrink-0 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-textDark/40">Telefon</p>
                    <p className="font-bold text-accentGreen mt-1 text-lg group-hover:text-accentBrown transition-colors">+41 79 194 07 18</p>
                    <p className="text-sm text-textDark/60 mt-0.5">Sollte ich im Einsatz sein, hinterlassen Sie eine Nachricht.</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-accentGreen/5 flex items-center justify-center text-accentBrown flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-textDark/40">Einsatzgebiet</p>
                    <p className="font-bold text-accentGreen mt-1 text-lg">Fürstentum Liechtenstein</p>
                    <p className="text-sm text-textDark/60 mt-0.5">Individuelle aufsuchende Begleitung bei Ihnen zu Hause.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Note on availability */}
            <div className="bg-accentGreen/5 border-l-4 border-accentBrown p-8 rounded-3xl space-y-4">
              <div className="flex items-center space-x-3 text-accentGreen">
                <Clock className="w-5 h-5 flex-shrink-0 text-accentBrown" />
                <h4 className="font-bold font-sans">Erreichbarkeit & Termine</h4>
              </div>
              <div className="text-sm text-textDark/75 space-y-2 leading-relaxed">
                <p><strong>Telefonische Anfragen:</strong> Montag bis Freitag, zu üblichen Bürozeiten.</p>
                <p><strong>Termine:</strong> Ausschließlich nach vorheriger Vereinbarung bei Ihnen zu Hause.</p>
                <p><strong>Antwortzeit:</strong> Ich bemühe mich, schriftliche Anfragen innerhalb von 24 bis 48 Stunden zu beantworten.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[50px] shadow-xl border border-gray-100">
            {isSuccess ? (
              <div className="text-center py-12 space-y-6 animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-accentGreen/10 rounded-full flex items-center justify-center text-accentGreen mx-auto">
                  <CheckCircle2 className="w-12 h-12 text-accentBrown" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-accentGreen">Vielen Dank</h3>
                  <p className="text-textDark/75 max-w-md mx-auto leading-relaxed">
                    Ihre Anfrage wurde erfolgreich übermittelt. Carla meldet sich so bald wie möglich persönlich bei Ihnen.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-accentGreen text-white px-8 py-3 rounded-xl font-bold hover:bg-accentBrown transition-all"
                >
                  Neue Nachricht schreiben
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-accentGreen">Nimm unverbindlich Kontakt auf</h3>
                  <p className="text-sm text-textDark/70">
                    Ob du selbst Unterstützung suchst, dich als Angehörige Person meldest oder eine Person zuweisen möchtest – Carla nimmt sich Zeit für eine erste Einordnung deiner Situation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                  {/* Anrede */}
                  <div className="space-y-2 sm:col-span-3">
                    <label htmlFor="salutation" className="block text-xs font-bold uppercase tracking-widest text-textDark/60">
                      Anrede *
                    </label>
                    <div className="relative">
                      <select
                        id="salutation"
                        name="salutation"
                        required
                        value={formData.salutation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accentGreen/20 focus:border-accentBrown transition-all text-textDark text-sm appearance-none cursor-pointer"
                      >
                        <option value="" disabled hidden>Anrede</option>
                        <option value="Frau">Frau</option>
                        <option value="Herr">Herr</option>
                        <option value="Divers">Divers</option>
                        <option value="Keine">Keine Angabe</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-accentBrown">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Vorname */}
                  <div className="space-y-2 sm:col-span-4">
                    <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-widest text-textDark/60">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Vorname"
                      className="w-full px-4 py-3 bg-secondary border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accentGreen/20 focus:border-accentBrown transition-all text-textDark placeholder-textDark/30 text-sm"
                    />
                  </div>

                  {/* Nachname */}
                  <div className="space-y-2 sm:col-span-5">
                    <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-widest text-textDark/60">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Nachname"
                      className="w-full px-4 py-3 bg-secondary border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accentGreen/20 focus:border-accentBrown transition-all text-textDark placeholder-textDark/30 text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-textDark/60">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="beispiel@domain.com"
                    className="w-full px-4 py-3 bg-secondary border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accentGreen/20 focus:border-accentBrown transition-all text-textDark placeholder-textDark/30 text-sm"
                  />
                </div>

                {/* Ich melde mich als select cards */}
                <div id="requester-type-container" className="space-y-3 scroll-mt-24">
                  <label className="block text-xs font-bold uppercase tracking-widest text-textDark/60">
                    Ich melde mich als *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {requesterOptions.map((opt) => {
                      const isSelected = formData.requesterType === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, requesterType: opt.id }));
                            if (validationError) setValidationError('');
                          }}
                          className={`px-4 py-3.5 rounded-xl border text-sm font-semibold transition-all text-left flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-accentGreen/20 ${
                            isSelected
                              ? 'bg-accentGreen text-white border-accentGreen shadow-sm'
                              : 'bg-secondary hover:bg-secondary/70 text-textDark border-gray-100'
                          }`}
                        >
                          <span>{opt.label}</span>
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                            isSelected ? 'border-white bg-white' : 'border-gray-300 bg-transparent'
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-accentGreen"></span>}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {validationError && (
                    <p className="text-sm font-bold text-red-600 pl-1">{validationError}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-textDark/60">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+423 000 00 00"
                      className="w-full px-4 py-3 bg-secondary border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accentGreen/20 focus:border-accentBrown transition-all text-textDark placeholder-textDark/30 text-sm"
                    />
                  </div>
                  {/* Subject selector */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-textDark/60">
                      Anfragegrund
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accentGreen/20 focus:border-accentBrown transition-all text-textDark text-sm appearance-none cursor-pointer"
                      >
                        <option value="Erstgespräch">Erstgespräch / Kennenlernen</option>
                        <option value="Unterstützungsanfrage">Unterstützung im Alltag</option>
                        <option value="Zuweisung">Zuweisung (Fachperson)</option>
                        <option value="Abrechnung">Abrechnung & Verordnung</option>
                        <option value="Sonstiges">Allgemeine Frage</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-accentBrown">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-textDark/60">
                      Ihre Nachricht *
                    </label>
                    {formData.requesterType && (
                      <span className="text-xs font-serif italic text-accentBrown leading-tight animate-in fade-in duration-300">
                        {getMessageHelperText()}
                      </span>
                    )}
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={formData.requesterType ? getMessageHelperText() : "Wie kann ich Ihnen helfen? Beschreiben Sie kurz Ihr Anliegen..."}
                    className="w-full px-4 py-3 bg-secondary border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accentGreen/20 focus:border-accentBrown transition-all text-textDark placeholder-textDark/30 text-sm resize-none"
                  ></textarea>
                </div>

                <div className="text-xs text-textDark/40 flex items-start gap-2">
                  <input type="checkbox" id="consent" required className="mt-0.5 rounded cursor-pointer" />
                  <label htmlFor="consent" className="cursor-pointer select-none">
                    Ich willige ein, dass meine Daten zur Bearbeitung der Anfrage elektronisch verarbeitet und sicher gespeichert werden. Ein Zugriff erfolgt ausschliesslich durch CarlaCares.
                  </label>
                </div>

                {apiError && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600 font-medium">
                    {apiError}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accentGreen text-white py-4 px-8 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-accentBrown transition-all shadow-lg disabled:bg-gray-200 disabled:text-textDark/45"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Anfrage senden</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Trust banner about medical emergencies */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-block bg-accentBrown/10 text-accentBrown px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-[10px]">
            Wichtiger Hinweis bei Krisen
          </div>
          <h3 className="text-2xl font-bold text-accentGreen">Im Notfall</h3>
          <p className="text-textDark/70 text-sm leading-relaxed max-w-2xl mx-auto">
            Als ambulante Pflegefachperson kann ich keine 24-stündige Krisenabdeckung oder Notfallbereitschaft garantieren.
            In akuten psychischen Notsituationen oder bei unmittelbarer Eigen- oder Fremdgefährdung wenden Sie sich bitte direkt an Ihren behandelnden Arzt bzw. Psychiater, den ärztlichen Notfalldienst oder die Rettungskräfte unter <strong>112</strong> (Notruf Liechtenstein/Europa).
          </p>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
