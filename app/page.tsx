"use client";

import { useEffect, useRef, useState } from "react";

const treatments = [
  { image: "treat-one", category: "Kasvohoito", price: "alkaen 79 €", title: "Hehkuva iho", description: "Ihon tarpeiden mukaan suunniteltu kasvohoito, johon kuuluu alkupuhdistus, hoitavat tuotteet ja rauhallinen hieronta." },
  { image: "treat-two", category: "Rentoutushoito", price: "alkaen 69 €", title: "Syvä rauha", description: "Kasvojen, pään ja hartioiden hoito silloin, kun kaipaat ennen kaikkea pysähtymistä ja kevyempää oloa." },
  { image: "treat-three", category: "Ripset ja kulmat", price: "alkaen 39 €", title: "Huoliteltu ilme", description: "Kulmien muotoilu sekä ripsien ja kulmien värjäys omia piirteitäsi kunnioittaen." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!modalOpen) return;
    closeButton.current?.focus();
    const closeWithEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setModalOpen(false); };
    document.addEventListener("keydown", closeWithEscape);
    return () => document.removeEventListener("keydown", closeWithEscape);
  }, [modalOpen]);

  function closeModal() {
    setModalOpen(false);
    requestAnimationFrame(() => openButton.current?.focus());
  }

  return <>
    <div className="demo-note"><span>KUVITTEELLINEN SOLA STUDIO — VERKKOSIVUKONSEPTI</span></div>
    <header className="header">
      <a href="#etusivu" className="wordmark" aria-label="Sola Studio, etusivu">sola<span className="sun" aria-hidden="true">✳</span><small>SKIN & SLOW LIVING</small></a>
      <nav id="beauty-nav" className={`main-nav ${menuOpen ? "open" : ""}`} aria-label="Päänavigaatio">
        <a href="#filosofia" onClick={() => setMenuOpen(false)}>Meistä</a><a href="#hoidot" onClick={() => setMenuOpen(false)}>Hoidot</a><a href="#kokemus" onClick={() => setMenuOpen(false)}>Kokemus</a><a href="#yhteys" onClick={() => setMenuOpen(false)}>Yhteys</a>
      </nav>
      <a className="book-link" href="#yhteys">Ajanvaraus <span aria-hidden="true">↗</span></a>
      <button className="nav-toggle" aria-controls="beauty-nav" aria-expanded={menuOpen} aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
    </header>

    <main>
      <section className="hero" id="etusivu" aria-labelledby="sola-title">
        <div className="hero-left">
          <div className="micro"><span>KAUNEUSHOITOLA · KESKI-SUOMI</span><span>RAUHALLINEN HETKI SINULLE</span></div>
          <div className="hero-title-wrap"><div className="little-bloom" aria-hidden="true">✳</div><p className="intro-tag">Hoitoa iholle, lepoa mielelle.</p><h1 id="sola-title">Iholle<br /><em>hyvää.</em><br />Mielelle<br /><em>tilaa.</em></h1><p className="hero-desc">Yksilöllisiä kasvohoitoja ja kiireettömiä kohtaamisia. Jokainen käynti alkaa siitä, mitä ihosi ja olosi juuri nyt tarvitsevat.</p><a href="#hoidot" className="cta-solid">Katso hoidot <span aria-hidden="true">↗</span></a></div>
          <div className="hero-lower"><span>RAUHAA / KAUNEUTTA / TASAPAINOA</span><a href="#filosofia">Lue lisää ↓</a></div>
        </div>
        <div className="hero-right"><div className="hero-image" role="img" aria-label="Rauhallinen kasvohoito" /><div className="round-stamp" aria-hidden="true"><span>PAUSE · BREATHE · GLOW ·</span><b>✳</b></div><div className="photo-label">SOLA / OMA HETKESI</div></div>
      </section>

      <section className="intro-section section" id="filosofia">
        <div className="tiny-heading"><span className="dash" /> SOLA STUDION AJATUS</div>
        <div className="intro-grid"><div className="intro-side"><span className="rosette" aria-hidden="true">✳</span><span>VÄHEMMÄN KIIRETTÄ.<br />ENEMMÄN AIKAA SINULLE.</span></div><div className="intro-content"><h2>Kauneudenhoito<br />saa tuntua <em>helpolta.</em></h2><p>Meille hyvä hoito tarkoittaa asiantuntevaa tekemistä, kuuntelemista ja rauhaa. Valitsemme hoidon ihosi kunnon ja omien toiveidesi mukaan — ilman turhaa monimutkaisuutta.</p><a href="#kokemus" className="underline-link">Näin käynti etenee <span aria-hidden="true">↗</span></a></div></div>
      </section>

      <section className="treatments section" id="hoidot">
        <div className="tiny-heading"><span className="dash" /> HOIDOT JA HINNAT</div>
        <div className="treatment-header"><div><p className="small-italic">Valitse hetki itsellesi</p><h2>Kolme tapaa<br /><em>pysähtyä.</em></h2></div><p>Esimerkkihinnat auttavat hahmottamaan palveluvalikoimaa. Lopullinen hoito valitaan aina yhdessä.</p></div>
        <div className="treatment-grid">{treatments.map((treatment) => <article className="treatment-card" key={treatment.title}><div className={`treatment-photo ${treatment.image}`} role="img" aria-label={treatment.title} /><div className="treatment-meta"><span>{treatment.category}</span><span>{treatment.price}</span></div><h3>{treatment.title}</h3><p>{treatment.description}</p><a href="#yhteys">Kysy hoidosta <span aria-hidden="true">↗</span></a></article>)}</div>
        <p className="disclaimer">Hoidot ja hinnat ovat tämän kuvitteellisen konseptin esimerkkisisältöä.</p>
      </section>

      <section className="manifesto" id="kokemus">
        <div className="manifesto-image" role="img" aria-label="Rauhallinen hoitohuone" />
        <div className="manifesto-panel"><span className="tiny-heading"><span className="dash" /> KÄYNTI SOLASSA</span><div className="manifesto-content"><span className="soft-sun" aria-hidden="true">☼</span><h2>Tule juuri<br /><em>sellaisena</em><br />kuin olet.</h2><p>Varaamme jokaiselle asiakkaalle riittävästi aikaa. Ensin käymme läpi toiveesi, sitten saat rauhoittua hoitoon ilman kiirettä seuraavaan.</p><a href="#yhteys" className="soft-button">Tutustu ajanvaraukseen <span aria-hidden="true">↗</span></a></div><span className="manifesto-bottom">SOLA STUDIO · BEAUTY AT YOUR OWN PACE</span></div>
      </section>

      <section className="detail-section section">
        <div className="tiny-heading"><span className="dash" /> MITÄ VOIT ODOTTAA</div>
        <div className="details-layout"><h2>Yksinkertainen,<br />huolellinen<br /><em>kokemus.</em></h2><div className="detail-list"><div><span className="detail-num">01</span><div><h3>Alkukartoitus</h3><p>Keskustelemme ihostasi, arjestasi ja siitä, mitä toivot hoidolta.</p></div></div><div><span className="detail-num">02</span><div><h3>Sinulle valittu hoito</h3><p>Tuotteet ja hoidon vaiheet mukautetaan ihosi tämänhetkisiin tarpeisiin.</p></div></div><div><span className="detail-num">03</span><div><h3>Selkeät kotihoito-ohjeet</h3><p>Saat mukaasi vain olennaiset neuvot — et pitkää ostoslistaa.</p></div></div></div></div>
      </section>

      <section className="booking section" id="yhteys">
        <div className="booking-ornament" aria-hidden="true">✳</div><div className="booking-label">AJANVARAUS</div><h2>Varaa oma<br /><em>hetkesi.</em></h2><p>Tämä konseptisivusto ei vastaanota oikeita varauksia.</p><button ref={openButton} className="booking-cta" type="button" onClick={() => setModalOpen(true)}>Ajanvarauksen tiedot <span aria-hidden="true">↗</span></button><div className="booking-foot"><span>KAUNEUS ALKAA HYVÄSTÄ OLOSTA.</span><span>KONSEPTIDEMO / AJANVARAUS EI OLE KÄYTÖSSÄ.</span></div>
      </section>
    </main>

    <footer className="footer"><div className="footer-top"><a href="#etusivu" className="footer-logo">sola<span aria-hidden="true">✳</span><small>STUDIO</small></a><div><span>SOSIAALINEN MEDIA</span><p>Instagram · Pinterest</p><small>Kuvitteellinen yritys — ei oikeita somekanavia.</small></div><a href="#etusivu" className="back-top">Takaisin ylös ↑</a></div><div className="footer-bottom"><span>© 2026 SOLA STUDIO / VERKKOSIVUKONSEPTI</span><span>KUVITTEELLINEN KAUNEUSHOITOLA</span></div></footer>

    {modalOpen && <div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}><section><button ref={closeButton} className="modal-close" onClick={closeModal} aria-label="Sulje">×</button><div className="modal-flower" aria-hidden="true">✳</div><p className="small-italic">Konseptidemo</p><h2 id="dialog-title">Ajanvaraus ei ole<br /><em>vielä käytössä.</em></h2><p>Tämä on kuvitteellisen yrityksen sivustodemo. Oikeassa asiakasprojektissa painike voidaan yhdistää valittuun ajanvarausjärjestelmään.</p><button className="modal-action" onClick={closeModal}>Selvä, kiitos <span aria-hidden="true">↗</span></button></section></div>}
  </>;
}
