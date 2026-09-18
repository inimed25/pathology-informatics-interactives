export function LabEcosystemFigure() {
  const instruments=["Blood culture","MALDI-TOF","AST platform","Molecular platform"];
  return (
    <figure className="concept-figure ecosystem-figure" aria-labelledby="ecosystem-title">
      <figcaption>
        <p className="eyebrow">System architecture</p>
        <h3 id="ecosystem-title">Where microbiology data actually travel</h3>
        <p className="figure-lede">Multiple instruments can share dependencies before results reach the clinical record. That is why one interface failure can have a wider footprint than one assay.</p>
      </figcaption>
      <div className="ecosystem-map">
        <div className="instrument-bank">{instruments.map(x=><span key={x}>{x}</span>)}</div>
        <b aria-hidden="true">→</b><div className="ecosystem-hub"><small>Translation + workflow</small><strong>Instrument server / middleware</strong><span>codes · rules · queues · exceptions</span></div>
        <b aria-hidden="true">→</b><div className="ecosystem-hub"><small>Laboratory record</small><strong>LIS</strong><span>specimen · result · status · verification</span></div>
        <b aria-hidden="true">→</b><div className="ecosystem-end"><strong>EHR</strong><span>Clinical team</span></div>
      </div>
      <p className="figure-note"><strong>Operational consequence:</strong> restoring connectivity is only part of recovery; information created during the interruption still has to be reconciled.</p>
    </figure>
  );
}
