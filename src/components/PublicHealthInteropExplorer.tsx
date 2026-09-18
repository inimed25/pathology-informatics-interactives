import { useState } from "react";

type Scenario = "correct" | "bad-map" | "rule-change";

const scenarios: Record<Scenario, { label: string; transport: string; meaning: string; surveillance: string; detail: string }> = {
  correct: {
    label: "Correct mapping",
    transport: "Message received",
    meaning: "Intended concept preserved",
    surveillance: "Record is interpretable for its intended use",
    detail: "Technical exchange and semantic representation are both behaving as intended in this synthetic example.",
  },
  "bad-map": {
    label: "Wrong organism mapping",
    transport: "Message received + acknowledged",
    meaning: "Wrong standardized concept",
    surveillance: "Downstream counts may be distorted",
    detail: "The interface can successfully transport a message that carries the wrong meaning. An acknowledgment is evidence about a technical stage—not proof that every clinical concept was interpreted correctly.",
  },
  "rule-change": {
    label: "Reporting rule changes",
    transport: "Message pathway still works",
    meaning: "Individual concepts may be correct",
    surveillance: "More records enter the dataset",
    detail: "An apparent surveillance increase can follow a change in the data-generating pipeline. Before concluding that biology changed, ask whether reporting, testing, mapping, completeness, or inclusion logic changed.",
  },
};

export function PublicHealthInteropExplorer() {
  const [scenario, setScenario] = useState<Scenario>("correct");
  const current = scenarios[scenario];

  return (
    <section className="public-health-explorer" aria-labelledby="public-health-explorer-title">
      <div className="public-health-heading">
        <p className="eyebrow">Interactive concept</p>
        <h3 id="public-health-explorer-title">Message delivered ≠ meaning preserved</h3>
        <p>
          Follow a synthetic microbiology result from the laboratory into public
          health and see why transport, semantic interoperability, and
          surveillance interpretation are separate questions.
        </p>
      </div>

      <div className="ph-path" aria-label="Electronic laboratory reporting pathway">
        {["Microbiology result", "LIS", "Reporting logic", "ELR / HL7 exchange", "Public-health system", "Surveillance"].map((item, index) => {
          const attention =
            (scenario === "bad-map" && (index === 1 || index === 4)) ||
            (scenario === "rule-change" && index === 2);
          return (
            <div className="ph-path-item" key={item}>
              <span className={attention ? "attention" : ""}>{item}</span>
              {index < 5 && <b>→</b>}
            </div>
          );
        })}
      </div>

      <div className="ph-scenarios" role="group" aria-label="Interoperability scenario">
        {(Object.keys(scenarios) as Scenario[]).map((key) => (
          <button type="button" key={key} className={scenario === key ? "active" : ""} aria-pressed={scenario === key} onClick={() => setScenario(key)}>
            <strong>{scenarios[key].label}</strong>
          </button>
        ))}
      </div>

      <div className="ph-readout">
        <div><small>Transport</small><strong>{current.transport}</strong></div>
        <div><small>Semantics</small><strong>{current.meaning}</strong></div>
        <div><small>Surveillance consequence</small><strong>{current.surveillance}</strong></div>
      </div>

      <div className="ph-explanation">
        <strong>What to notice</strong>
        <p>{current.detail}</p>
      </div>

      <div className="ph-standard-note">
        <span><strong>HL7</strong><small>How structured information is exchanged</small></span>
        <b>+</b>
        <span><strong>Terminology</strong><small>How clinical concepts are represented</small></span>
        <b>→</b>
        <span><strong>Interoperable meaning</strong><small>Requires both transport and interpretable semantics</small></span>
      </div>
    </section>
  );
}
