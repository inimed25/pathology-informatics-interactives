export function OrganismMappingFigure() {
  const stages = [
    ["Laboratory concept", <i>Escherichia coli</i>, "what was identified"],
    ["Instrument code", "ORG_247", "local representation"],
    ["Mapping rule", "ORG_247 → ECOLI_LIS", "translation"],
    ["LIS concept", "ECOLI_LIS", "receiving representation"],
    ["Clinical display", <i>Escherichia coli</i>, "what the clinician sees"],
  ] as const;
  return (
    <figure className="concept-figure mapping-figure" aria-labelledby="mapping-figure-title">
      <figcaption>
        <p className="eyebrow">Concept mapping</p>
        <h3 id="mapping-figure-title">The displayed organism name hides several translations</h3>
        <p className="figure-lede">A message can transmit successfully while a mapping error changes what the receiving system understands.</p>
      </figcaption>
      <div className="mapping-stages">
        {stages.map(([label,value,note],i)=><div className="mapping-stage" key={label}><small>{label}</small><strong>{value}</strong><span>{note}</span>{i<stages.length-1&&<b aria-hidden="true">→</b>}</div>)}
      </div>
      <p className="figure-note">Similar-looking display text is not a substitute for governed concept mapping.</p>
    </figure>
  );
}
