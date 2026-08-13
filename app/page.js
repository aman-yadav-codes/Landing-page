"use client";

import { useEffect, useState } from "react";

const drinks = [
  ["Cappuccino", "Double espresso · velvet milk", "$5.50"],
  ["Golden Latte", "Espresso · honey · cinnamon", "$6.00"],
  ["Cold Brew", "18-hour steep · silky finish", "$5.00"],
  ["Mocha", "Cacao · espresso · steamed milk", "$6.25"],
];

const values = [
  ["01", "Slow mornings", "A warm room, carefully sourced beans, and no reason to rush."],
  ["02", "Roasted with care", "Small-batch coffee with a balanced, golden finish in every cup."],
  ["03", "Made for you", "From your first cappuccino to your late-afternoon pick-me-up."],
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    const items = document.querySelectorAll("[data-reveal]");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  const close = () => setOpen(false);

  return (
    <main className="site-shell">
      <header className={`nav-wrap ${open ? "nav-open" : ""}`}>
        <nav className="nav container">
          <a className="brand" href="#top" onClick={close}><span className="brand-mark">C</span><span>Cappuccino</span></a>
          <div className="desktop-links"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#visit">Visit</a></div>
          <button className="order-button desktop-order" onClick={() => setToast("Your coffee order is coming right up ☕")}>Order coffee</button>
          <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/><span/></button>
        </nav>
        <div className="mobile-drawer">
          <a href="#menu" onClick={close}>Menu</a><a href="#story" onClick={close}>Our story</a><a href="#visit" onClick={close}>Visit</a>
          <button className="order-button" onClick={() => { setToast("Your coffee order is coming right up ☕"); close(); }}>Order coffee</button>
        </div>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy" data-reveal><p className="eyebrow"><span/> Golden hour, every day</p><h1>Your favorite cup, <em>made slowly.</em></h1><p className="hero-text">Cappuccino is a neighborhood coffee shop for warm conversations, excellent espresso, and the little pause you needed today.</p><div className="hero-actions"><a className="button primary" href="#menu">Explore the menu <span>↗</span></a><button className="text-button" onClick={() => setToast("Walk-ins are always welcome at Cappuccino.")}>Find a table <span>→</span></button></div><div className="hero-meta"><span>Open daily · 7am–8pm</span><span>Roasted locally</span></div></div>
        <div className="hero-art" data-reveal><div className="sun-glow"/><div className="cup-shadow"/><div className="coffee-cup"><div className="coffee"/><div className="steam steam-one"/><div className="steam steam-two"/><div className="handle"/></div><span className="art-note">House cappuccino<br/><strong>espresso · milk · art</strong></span></div>
      </section>

      <section className="ticker"><div>Freshly roasted</div><span>✦</span><div>Locally loved</div><span>✦</span><div>Slow mornings</div><span>✦</span><div>Golden afternoons</div><span>✦</span></section>

      <section className="section container" id="menu"><div className="section-heading" data-reveal><div><p className="eyebrow">The daily pour</p><h2>Good coffee, <em>no fuss.</em></h2></div><p>Our small menu is built around the drinks we would happily make for ourselves.</p></div><div className="menu-grid">{drinks.map(([name, detail, price], index) => <button className="menu-card" data-reveal key={name} style={{ "--delay": `${index * 70}ms` }} onClick={() => setToast(`${name} added to your favorites ✦`)}><span className="menu-number">0{index + 1}</span><span className="mini-cup">☕</span><span className="menu-name">{name}</span><span className="menu-detail">{detail}</span><span className="menu-bottom"><strong>{price}</strong><span>+</span></span></button>)}</div></section>

      <section className="story section container" id="story"><div className="story-image" data-reveal><div className="image-card"><span>EST. 2026</span><strong>Coffee first.<br/>Everything else<br/><em>after.</em></strong></div></div><div className="story-copy" data-reveal><p className="eyebrow">Our little corner</p><h2>A coffee shop that feels like <em>home.</em></h2><p>We believe the best cafés do more than serve a good drink. They give you a place to think, meet, read, work, or simply sit by the window for a while.</p><button className="button outline" onClick={() => setToast("Welcome to the Cappuccino family ☕")}>Meet Cappuccino <span>↗</span></button></div></section>

      <section className="values section container"><div className="section-heading compact" data-reveal><p className="eyebrow">Why we pour it this way</p><h2>The <em>good</em> stuff.</h2></div><div className="value-grid">{values.map(([number, title, text]) => <article className="value-card" data-reveal key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="visit container" id="visit" data-reveal><div><p className="eyebrow">Come by</p><h2>See you over <em>coffee.</em></h2><p>18 Golden Street · Downtown<br/>Open every day, 7am–8pm</p></div><button className="button light" onClick={() => setToast("Directions opened — see you soon!")}>Get directions <span>↗</span></button></section>

      <footer className="footer"><div className="container footer-inner"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">C</span><span>Cappuccino</span></a><p>Good coffee. Better pauses.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#visit">Visit</a></div><div><strong>Say hello</strong><a href="mailto:hello@cappuccino.cafe">hello@cappuccino.cafe</a><a href="tel:+10000000000">+1 000 000 0000</a><button onClick={() => setToast("Thanks for stopping by Cappuccino ✦")}>Instagram ↗</button></div></div><p className="copyright">© 2026 Cappuccino Coffee Shop. Made for slow mornings.</p></div></footer>

      {toast && <div className="toast" role="status"><span>✦</span><div><strong>Cappuccino</strong><p>{toast}</p></div><button aria-label="Close notification" onClick={() => setToast("")}>×</button></div>}
    </main>
  );
}
