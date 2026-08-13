export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <a className="brand" href="#">Launch</a>
        <a className="nav-link" href="#contact">Get started</a>
      </nav>

      <section className="hero">
        <p className="eyebrow">Built with Next.js</p>
        <h1>Turn your idea into a landing page people remember.</h1>
        <p className="subtitle">
          A clean, responsive starter designed to help you launch quickly and
          iterate without fighting your codebase.
        </p>
        <div className="actions">
          <a className="button primary" href="#contact">Start building</a>
          <a className="button secondary" href="#features">Explore features</a>
        </div>
      </section>

      <section id="features" className="features">
        <article>
          <span>01</span>
          <h2>Fast</h2>
          <p>Next.js App Router gives you a strong foundation for production.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Responsive</h2>
          <p>Designed to look polished across phones, tablets, and desktops.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Simple</h2>
          <p>A small, understandable codebase that is easy to extend.</p>
        </article>
      </section>

      <footer id="contact" className="footer">
        <p>Ready to launch?</p>
        <a href="mailto:hello@example.com">hello@example.com</a>
      </footer>
    </main>
  );
}
