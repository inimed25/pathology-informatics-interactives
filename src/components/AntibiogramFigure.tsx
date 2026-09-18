export function AntibiogramFigure() {
  const rows=[["Drug A",82],["Drug B",64],["Drug C",91],["Drug D",48]] as const;
  return (
    <figure className="concept-figure antibiogram-figure" aria-labelledby="antibiogram-figure-title">
      <figcaption>
        <p className="eyebrow">Individual result vs population summary</p>
        <h3 id="antibiogram-figure-title">One isolate and an antibiogram answer different questions</h3>
        <p className="figure-lede">Synthetic values below are for teaching only.</p>
      </figcaption>
      <div className="antibiogram-compare clear-antibiogram">
        <section className="isolate-card">
          <small>ONE PATIENT · ONE ISOLATE</small>
          <div className="isolate-flow"><span>MIC</span><i>→</i><span>breakpoint</span><i>→</i><strong>category</strong></div>
          <p>Interprets this isolate using the laboratory's applicable validated criteria.</p>
        </section>
        <section className="population-card">
          <small>MANY QUALIFYING ISOLATES · DEFINED PERIOD</small>
          <div className="mini-antibiogram">{rows.map(([drug,pct])=><div key={drug}><span>{drug}</span><span className="susceptibility-track" aria-label={`${pct}% susceptible`}><i style={{width:`${pct}%`}} /></span><b>{pct}%</b></div>)}</div>
          <p>Summarizes susceptibility across a defined population after inclusion and analysis rules are applied.</p>
        </section>
      </div>
      <p className="figure-note"><strong>Do not interchange them:</strong> a cumulative susceptibility percentage can inform population-level decisions; it does not redefine the breakpoint for an individual isolate.</p>
    </figure>
  );
}
