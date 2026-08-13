const drinks = [
  ["Velvet Latte", "Espresso, steamed milk, vanilla bean", "$5.50"],
  ["Honey Cortado", "Double espresso, silky milk, wildflower honey", "$5.00"],
  ["Golden Mocha", "Dark chocolate, espresso, sea salt foam", "$6.00"],
  ["Maple Cold Brew", "Slow-steeped coffee, maple, oat milk", "$5.75"],
];

export default function Home() {
  return <main className="site-shell">
    <header className="nav-wrap"><nav className="nav">
      <a className="brand" href="#top"><span className="brand-mark">GH</span><span>Golden Hour</span></a>
      <div className="nav-links"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#visit">Visit</a></div>
      <a className="nav-cta" href="#visit">Find a table</a>
    </nav></header>

    <section id="top" className="hero">
      <div className="hero-copy"><p className="eyebrow">Coffee · Pastry · Good company</p>
        <h1>A slower cup in a <em>golden</em> kind of place.</h1>
        <p className="hero-text">Golden Hour is a neighborhood coffee shop built around beautiful coffee, fresh pastries, and the little pause between where you were and where you&apos;re going.</p>
        <div className="hero-actions"><a className="button button-dark" href="#menu">Explore the menu <span>↗</span></a><a className="text-link" href="#story">Meet the coffee <span>↓</span></a></div>
      </div>
      <div className="hero-art"><div className="sun-glow"/><div className="steam steam-one"/><div className="steam steam-two"/><div className="cup"><div className="cup-rim"/><div className="coffee"/><div className="cup-body"><span>GH</span></div><div className="cup-handle"/></div><span className="art-note">EST. 2024 · BREW SLOWLY</span></div>
    </section>

    <section className="marquee"><span>Single origin</span><b>✦</b><span>Fresh pastry</span><b>✦</b><span>Slow mornings</span><b>✦</b><span>Good people</span><b>✦</b></section>

    <section id="menu" className="section menu-section"><div className="section-heading"><div><p className="eyebrow">Today at Golden Hour</p><h2>Our <em>favorites.</em></h2></div><p>Simple drinks, thoughtful ingredients, no fuss. Ask us what&apos;s fresh when you arrive.</p></div>
      <div className="menu-grid">{drinks.map(([name, desc, price]) => <article className="menu-card" key={name}><div className="menu-icon">☕</div><div className="menu-meta"><h3>{name}</h3><strong>{price}</strong></div><p>{desc}</p></article>)}</div>
    </section>

    <section id="story" className="story-section"><div className="story-image"><div className="image-card"><span>THE HOUSE BLEND</span><strong>Warm.<br/>Rich.<br/><em>Unhurried.</em></strong><small>100% ARABICA</small></div></div><div className="story-copy"><p className="eyebrow">Why we&apos;re here</p><h2>Coffee tastes better when there&apos;s <em>time</em> for it.</h2><p>We started Golden Hour with a simple idea: make a place that feels like the best part of the day. Thoughtful roasters, small-batch baking, and a room warm enough to make you forget your phone.</p><a className="text-link dark-link" href="#visit">Read our story <span>↗</span></a></div></section>

    <section className="section highlights"><article><span>01</span><h3>Roasted with care</h3><p>Small-batch beans selected for chocolate, caramel, and warm nutty notes.</p></article><article><span>02</span><h3>Made to linger</h3><p>A calm room, soft light, and a table worth staying at for one more cup.</p></article><article><span>03</span><h3>Always welcoming</h3><p>Your morning ritual, afternoon reset, or evening catch-up starts here.</p></article></section>

    <section id="visit" className="visit-section"><div><p className="eyebrow">Come by</p><h2>Meet us at <em>golden hour.</em></h2><p className="visit-copy">18 Willow Street, Downtown<br/>Mon–Fri 7am–6pm · Sat–Sun 8am–5pm</p></div><a className="button button-light" href="mailto:hello@goldenhour.coffee">Say hello <span>↗</span></a></section>
    <footer className="footer"><div className="footer-brand"><span className="brand-mark">GH</span><strong>Golden Hour Coffee</strong></div><p>Made for slow mornings and everything after.</p><a href="mailto:hello@goldenhour.coffee">hello@goldenhour.coffee</a></footer>
  </main>;
}
