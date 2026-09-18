export function LabEcosystemFigure() {
  const instruments=["Blood culture","MALDI-TOF","AST platform","Molecular platform"];
  return (
    <section className="concept-figure ecosystem-figure" aria-labelledby="ecosystem-title">
      <p className="eyebrow">Original teaching figure</p>
      <h3 id="ecosystem-title">A microbiology laboratory is an information ecosystem</h3>
      <p className="figure-lede">Different instruments generate different data, but their outputs can converge on shared servers, middleware, interfaces, and downstream clinical systems.</p>
      <div className="ecosystem-map">
        <div className="instrument-bank">{instruments.map(x=><span key={x}>{x}</span>)}</div>
        <b>→</b><div className="ecosystem-hub"><small>Translation + workflow</small><strong>Instrument server / middleware</strong><span>codes · rules · queues · exceptions</span></div>
        <b>→</b><div className="ecosystem-hub"><small>Laboratory record</small><strong>LIS</strong><span>specimen · result · status · verification</span></div>
        <b>→</b><div className="ecosystem-end"><strong>EHR</strong><span>Clinical team</span></div>
      </div>
      <div className="figure-callout"><strong>Why this matters:</strong> a failure at a shared dependency can affect multiple assays at once. Restoring connectivity still requires reconciliation of the information created during the interruption.</div>
    </section>
  );
}
