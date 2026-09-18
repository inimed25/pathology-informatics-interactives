export function AntibiogramFigure() {
  const rows=[["Drug A",82],["Drug B",64],["Drug C",91],["Drug D",48]];
  return (
    <figure className="concept-figure antibiogram-figure" aria-labelledby="antibiogram-figure-title">
      <figcaption>
        <p className="eyebrow">Two different denominators</p>
        <h3 id="antibiogram-figure-title">An isolate result and an antibiogram answer different questions</h3>
        <p className="figure-lede">Synthetic values below are for teaching only.</p>
      </figcaption>
      <div className="antibiogram-compare">
        <div className="isolate-card"><small>Individual isolate</small><strong>MIC → breakpoint → category</strong><p>Interprets this isolate using the laboratory's applicable validated criteria.</p></div>
        <div className="population-card"><small>Cumulative population</small><div className="mini-antibiogram">{rows.map(([drug,pct])=><div key={drug}><span>{drug}</span><span className="susceptibility-track" aria-label={`${pct}% susceptible`}><i style={{width:`${pct}%`}} /></span><b>{pct}%</b></div>)}</div><p>Summarizes susceptibility across a defined population and period.</p></div>
      </div>
      <p className="figure-note">Population susceptibility can inform empiric strategy; it does not redefine the breakpoint for an individual isolate.</p>
    </figure>
  );
}
