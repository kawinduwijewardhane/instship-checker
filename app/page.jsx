const checks = [
  { label: "Framework", value: "Next.js" },
  { label: "Rendering", value: "Static" },
  { label: "Database", value: "Not required" },
  { label: "Environment", value: "No secrets needed" },
];

export default function Home() {
  return (
    <main className="shell">
      <div className="glow" aria-hidden="true" />
      <header className="topbar">
        <div className="brand"><span className="brand-mark">↗</span> Instship <span className="brand-muted">/ Checker</span></div>
        <span className="top-pill"><span className="status-dot" /> Demo application</span>
      </header>

      <section className="hero">
        <span className="eyebrow"><span className="status-dot" /> DEPLOYMENT TEST PROJECT</span>
        <h1>It made it <span>online.</span></h1>
        <p>If you can see this page, Instship successfully built and served your Next.js project.</p>
        <div className="actions">
          <a className="button primary" href="/health">Check health <span aria-hidden="true">↗</span></a>
          <a className="button secondary" href="https://github.com/kawinduwijewardhane/instship-checker" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="details" aria-label="Project details">
        <div className="details-head"><span>Project details</span><span className="tiny-badge">v1.0.0</span></div>
        <div className="details-grid">
          {checks.map((item) => <div className="detail" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}
        </div>
      </section>
      <footer>Built to test deployments on <strong>Instship</strong><span>Next.js · App Router</span></footer>
    </main>
  );
}
