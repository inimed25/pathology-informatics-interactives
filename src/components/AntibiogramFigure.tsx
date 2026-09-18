export function AntibiogramFigure() {
  const rows=[["Drug A","82%"],["Drug B","64%"],["Drug C","91%"],["Drug D","48%"]];
  return (
    <section className="concept-figure antibiogram-figure" aria-labelledby="antibiogram-figure-title">
      <p className="eyebrow">Original teaching figure</p>
      <h3 id="antibiogram-figure-title">Individual isolate vs population summary</h3>
      <p className="figure-lede">These synthetic values illustrate two different questions. They are not clinical recommendations or a real antibiogram.</p>
      <div className="antibiogram-compare">
        <div className="isolate-card"><small>One isolate</small><strong>MIC → applicable breakpoint → category</strong><p>Answers how this isolate is interpreted under the laboratory's validated criteria.</p></div>
        <div className="population-card"><small>Many isolates</small><div className="mini-antibiogram">{rows.map(([drug,pct])=><div key={drug}><span>{drug}</span><b>{pct} susceptible</b></div>)}</div><p>Summarizes cumulative susceptibility in a defined population and period.</p></div>
      </div>
      <div className="figure-callout"><strong>Different denominator, different purpose.</strong> An antibiogram can support stewardship and empiric-treatment strategy, but it does not redefine the breakpoint applied to an individual isolate.</div>
    </section>
  );
}
