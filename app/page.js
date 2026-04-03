export default function DipaSystemsHomepage() { const services = [ { title: 'Konstruktion & Engineering', points: [ '2D- und 3D-CAD-Konstruktion für Stahlbau und Maschinenbau', 'Ausarbeitung fertigungsgerechter Zeichnungen und technischer Unterlagen', 'Entwicklung von Baugruppen, Vorrichtungen und Sonderlösungen', 'Konstruktive Optimierung bestehender Komponenten und Systeme', ], }, { title: 'Technische Analyse & Dokumentation', points: [ 'Technische Analyse von Systemen, Baugruppen und Funktionszusammenhängen', 'Erstellung strukturierter technischer Dokumentation und Projektdokumente', 'Aufbereitung technischer Inhalte für Fertigung, Montage und Inbetriebnahme', 'Dokumentationsunterstützung für Prüfstände, Maschinen und Sonderaufbauten', ], }, { title: 'Montage & Inbetriebnahme', points: [ 'Montageunterstützung für Maschinen, Stahlbaugruppen und technische Anlagen', 'Begleitung bei Aufbau, Inbetriebnahme und Funktionsprüfung', 'Schnittstellenabstimmung zwischen Konstruktion, Fertigung und Betrieb', 'Praxisnahe Unterstützung bis zur betriebsbereiten Übergabe', ], }, { title: 'Bausätze & Systemlösungen', points: [ 'Konzeption modularer Bausätze für Stahlbau- und Maschinenbauanwendungen', 'Auslegung montagegerechter Systemkomponenten und Verbindungsprinzipien', 'Standardisierte Lösungen mit Anpassung an projektspezifische Randbedingungen', 'Dokumentation, Stücklisten und technische Begleitunterlagen aus einer Hand', ], }, ];

const portfolio = [ { title: 'Stahlbau-Komponenten & Sonderkonstruktionen', text: 'Planung und Ausarbeitung individueller Stahlbau-Lösungen, von tragenden Baugruppen über Halterungen bis zu montagegerechten Sonderkonstruktionen.', }, { title: 'Maschinenbau-Baugruppen & Vorrichtungen', text: 'Konstruktion technischer Baugruppen, Vorrichtungen, Halter und funktionsorientierter Lösungen für Fertigung, Versuch und Betrieb.', }, { title: 'Prüftechnik, Analyse & Dokumentation', text: 'Technische Auswertung, Dokumentation und strukturierte Begleitung von Projekten im Umfeld Maschinenbau, Prüftechnik und Inbetriebnahme.', }, ];

const configuratorOptions = { area: ['Stahlbau', 'Maschinenbau', 'Prüftechnik', 'Montage & Inbetriebnahme'], service: ['Konstruktion', 'Analyse & Dokumentation', 'Fertigungsvorbereitung', 'Montageunterstützung', 'Bausatz/Systemlösung'], scope: ['Einzelteil', 'Baugruppe', 'Komplettlösung'], };

return ( <main className="min-h-screen bg-slate-950 text-slate-100"> <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900"> <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8"> <div className="flex items-center justify-between"> <div> <div className="text-2xl font-semibold tracking-[0.2em] text-white">DIPA <span className="text-blue-400">SYSTEMS</span></div> <div className="mt-1 text-sm text-slate-400">Konstruktion · Stahlbau · Maschinenbau</div> </div> <nav className="hidden gap-6 text-sm text-slate-300 md:flex"> <a href="#leistungen" className="hover:text-white">Leistungen</a> <a href="#portfolio" className="hover:text-white">Portfolio</a> <a href="#ueber-mich" className="hover:text-white">Über mich</a> <a href="#konfigurator" className="hover:text-white">Projektanfrage</a> </nav> </div> </div> </section>

<section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
    <div>
      <div className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1 text-sm text-blue-300">
        Technische Lösungen für Industrie und individuelle Projekte
      </div>
      <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
        Konstruktion, technische Analyse und praxisnahe Umsetzung im <span className="text-blue-400">Stahlbau</span> und <span className="text-blue-400">Maschinenbau</span>
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        DIPA Systems unterstützt bei der Entwicklung, Ausarbeitung und Umsetzung technischer Lösungen – von der Konstruktion über Analyse und Dokumentation bis hin zu Montage, Inbetriebnahme und modularen Bausatzkonzepten.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a href="#konfigurator" className="rounded-2xl bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">Projekt anfragen</a>
        <a href="#leistungen" className="rounded-2xl border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white">Leistungen ansehen</a>
      </div>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/20">
      <div className="mb-4 text-sm uppercase tracking-[0.2em] text-slate-400">Schwerpunkte</div>
      <div className="grid gap-4">
        {['Konstruktion & Engineering', 'Technische Analyse & Dokumentation', 'Montage & Inbetriebnahme', 'Bausätze & Systemlösungen'].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-200">
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>

  <section id="leistungen" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
    <div className="mb-10 max-w-3xl">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">Leistungen</h2>
      <p className="mt-4 text-slate-300">
        Der Fokus liegt auf fachlich sauberer Ausarbeitung, technischer Verständlichkeit und praxisnaher Umsetzbarkeit – sowohl für individuelle Einzelprojekte als auch für standardisierbare Systeme und Bausätze.
      </p>
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service) => (
        <div key={service.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/10">
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            {service.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>

  <section id="portfolio" className="border-y border-slate-800 bg-slate-900/40">
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Portfolio</h2>
        <p className="mt-4 text-slate-300">
          Beispielhafte Einsatzfelder und Projektarten, in denen DIPA Systems Leistungen strukturiert und fachlich fundiert einbringen kann.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {portfolio.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-blue-300">Projektfeld</div>
            <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section id="ueber-mich" className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
      <div className="text-sm uppercase tracking-[0.18em] text-blue-300">Über mich</div>
      <h2 className="mt-3 text-3xl font-semibold text-white">Technisches Verständnis mit Umsetzungsfokus</h2>
    </div>
    <div className="text-slate-300">
      <p className="text-lg leading-8">
        Ich bin <span className="font-semibold text-white">Luca di Paola</span>, Industriemeister und Ingenieur mit Erfahrung im Maschinenbau, Stahlbau und in der Prüftechnik.
      </p>
      <p className="mt-5 leading-8">
        Mein fachlicher Hintergrund verbindet praktische Erfahrung in technischen Projekten mit strukturiertem Engineering. Dadurch kann ich nicht nur Bauteile und Baugruppen ausarbeiten, sondern technische Zusammenhänge analysieren, dokumentieren und bis in Montage und Inbetriebnahme begleiten.
      </p>
      <p className="mt-5 leading-8">
        DIPA Systems steht für sachlich durchdachte Lösungen, klare technische Kommunikation und umsetzbare Ergebnisse – vom Einzelteil bis zur Systemlösung.
      </p>
    </div>
  </section>

  <section id="konfigurator" className="border-t border-slate-800 bg-slate-900/40">
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Erste Projektanfrage</h2>
        <p className="mt-4 text-slate-300">
          Dieser erste Anfrage-Konfigurator dient zur strukturierten Vorqualifizierung eines Projekts. So lassen sich Anforderungen, Leistungsumfang und Einsatzfeld frühzeitig klar erfassen.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
          <label className="mb-2 block text-sm font-medium text-slate-200">Fachbereich</label>
          <select className="mb-5 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none">
            {configuratorOptions.area.map((option) => <option key={option}>{option}</option>)}
          </select>

          <label className="mb-2 block text-sm font-medium text-slate-200">Leistungsart</label>
          <select className="mb-5 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none">
            {configuratorOptions.service.map((option) => <option key={option}>{option}</option>)}
          </select>

          <label className="mb-2 block text-sm font-medium text-slate-200">Projektumfang</label>
          <select className="mb-5 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none">
            {configuratorOptions.scope.map((option) => <option key={option}>{option}</option>)}
          </select>

          <label className="mb-2 block text-sm font-medium text-slate-200">Kurzbeschreibung</label>
          <textarea className="min-h-[140px] w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none" placeholder="Projekt, Bauteil, Baugruppe, System oder Anforderung kurz beschreiben" />

          <button className="mt-5 rounded-2xl bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-400">
            Anfrage vorbereiten
          </button>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
          <div className="text-sm uppercase tracking-[0.18em] text-blue-300">Typische Anfragen</div>
          <div className="mt-5 grid gap-4">
            {[
              'Konstruktive Ausarbeitung einer Stahlbau-Baugruppe',
              'Technische Dokumentation für Montage und Inbetriebnahme',
              'Entwicklung eines modularen Bausatzkonzepts',
              'Analyse und Strukturierung technischer Zusammenhänge im Prüfumfeld',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-4 text-slate-200">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

        <section id="kontakt" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
    <div className="mb-10 max-w-3xl">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">Kontakt</h2>
      <p className="mt-4 text-slate-300">
        Für Anfragen zu Konstruktion, technischen Analysen, Montage, Inbetriebnahme oder modularen Bausatzlösungen kann das folgende Formular als erste Projektanfrage genutzt werden. Die Formularfunktion ist aktuell als Layout vorbereitet und kann im nächsten Schritt technisch angebunden werden.
      </p>
    </div>
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="text-sm uppercase tracking-[0.18em] text-blue-300">Kontaktdaten</div>
        <div className="mt-5 space-y-4 text-slate-300">
          <p><span className="font-medium text-white">Unternehmen:</span> DIPA Systems</p>
          <p><span className="font-medium text-white">Ansprechpartner:</span> Luca di Paola</p>
          <p><span className="font-medium text-white">E-Mail:</span> info@dipa-systems.de</p>
          <p><span className="font-medium text-white">Telefon:</span> +49 (0) 000 0000000</p>
          <p><span className="font-medium text-white">Standort:</span> Baden-Württemberg</p>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none" placeholder="Name" />
          <input className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none" placeholder="E-Mail" />
        </div>
        <input className="mt-4 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none" placeholder="Betreff / Projektbezeichnung" />
        <textarea className="mt-4 min-h-[160px] w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none" placeholder="Projekt, Anforderungen, Bauteile, Baugruppen oder gewünschte Unterstützung kurz beschreiben" />
        <button className="mt-5 rounded-2xl bg-slate-700 px-6 py-3 text-sm font-medium text-slate-200">
          Formular derzeit ohne Versandfunktion
        </button>
      </div>
    </div>
  </section>

  <footer className="border-t border-slate-800">
    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div className="flex flex-wrap gap-4">
        <a href="#" className="hover:text-white">Impressum</a>
        <a href="#" className="hover:text-white">Datenschutz</a>
      </div>
      <div>DIPA <span className="text-blue-400">SYSTEMS</span></div>
      <div>Konstruktion · Stahlbau · Maschinenbau · Technische Analyse · Montage & Inbetriebnahme</div>
    </div>
  </footer>
</main>

); }
