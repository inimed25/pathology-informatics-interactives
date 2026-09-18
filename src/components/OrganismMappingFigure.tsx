export function OrganismMappingFigure() {
  const stages = [
    ["Microbiology concept", "Escherichia coli", "What the laboratory identified"],
    ["Instrument representation", "ORG_247", "A local identifier used by one system"],
    ["Mapping layer", "ORG_247 → ECOLI_LIS", "Translation between system representations"],
    ["LIS concept", "ECOLI_LIS", "The receiving laboratory concept"],
    ["Displayed result", "Escherichia coli", "What the clinician sees"],
  ];
  return (
    <section className="concept-figure mapping-figure" aria-labelledby="mapping-figure-title">
      <p className="eyebrow">Original teaching figure</p>
      <h3 id="mapping-figure-title">One organism, several system representations</h3>
      <p className="figure-lede">The microbiologist sees a concept and a name. Information systems may depend on identifiers and mappings that are invisible to the clinician.</p>
      <div className="mapping-stages">
        {stages.map(([label,value,note],i)=><div className="mapping-stage" key={label}><small>{label}</small><strong>{value}</strong><span>{note}</span>{i<stages.length-1&&<b aria-hidden="true">→</b>}</div>)}
      </div>
      <div className="figure-callout"><strong>What can fail?</strong> A message can travel successfully while an absent, incorrect, or overly broad mapping changes the downstream representation. Similar-looking display text is not a substitute for governed concept mapping.</div>
    </section>
  );
}
