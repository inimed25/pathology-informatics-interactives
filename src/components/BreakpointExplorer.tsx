import { useState } from "react";

type Criteria = "previous" | "updated";

const interpretations = {
  previous: { label: "Previous criteria", category: "Susceptible", note: "The stored MIC is interpreted using the earlier teaching configuration." },
  updated: { label: "Updated criteria", category: "Intermediate", note: "The same stored MIC is reinterpreted after a breakpoint configuration change." },
} satisfies Record<Criteria, { label: string; category: string; note: string }>;

export function BreakpointExplorer() {
  const [criteria, setCriteria] = useState<Criteria>("previous");
  const result = interpretations[criteria];

  return (
    <section className="breakpoint-explorer" aria-labelledby="breakpoint-explorer-title">
      <div className="breakpoint-heading">
        <p className="eyebrow">Interactive concept</p>
        <h3 id="breakpoint-explorer-title">The MIC stayed the same. Why did the interpretation change?</h3>
        <p>
          This synthetic example isolates the informatics concept: an analytical
          measurement can remain unchanged while maintained interpretive
          knowledge changes the categorical result.
        </p>
      </div>

      <div className="mic-illustration" aria-label="Synthetic broth microdilution illustration">
        <div>
          <small>Synthetic AST illustration</small>
          <strong>First, the laboratory measures an MIC</strong>
          <p>
            In this simplified broth microdilution-style row, visible growth
            decreases as antimicrobial concentration increases. The MIC is the
            lowest tested concentration without visible growth.
          </p>
        </div>
        <div className="mic-well-panel">
          <div className="mic-wells" aria-hidden="true">
            {["0.25", "0.5", "1", "2", "4", "8"].map((value, index) => (
              <div className="mic-well-wrap" key={value}>
                <span className={index < 3 ? "mic-well growth" : "mic-well clear"} />
                <small>{value}</small>
              </div>
            ))}
          </div>
          <div className="mic-marker"><span>↑</span><strong>MIC = 2 µg/mL</strong></div>
        </div>
      </div>

      <div className="breakpoint-flow" aria-label="AST measurement to interpretation">
        <div className="breakpoint-node">
          <small>Analytical measurement</small>
          <strong>MIC = 2 µg/mL</strong>
          <span>unchanged</span>
        </div>
        <span className="breakpoint-arrow" aria-hidden="true">→</span>
        <div className="breakpoint-node criteria-node">
          <small>Interpretive knowledge</small>
          <strong>{result.label}</strong>
          <span>configured criteria</span>
        </div>
        <span className="breakpoint-arrow" aria-hidden="true">→</span>
        <div className="breakpoint-node result-node">
          <small>Categorical interpretation</small>
          <strong>{result.category}</strong>
          <span>derived result</span>
        </div>
      </div>

      <div className="breakpoint-controls" role="group" aria-label="Breakpoint configuration">
        {(Object.keys(interpretations) as Criteria[]).map((key) => (
          <button
            type="button"
            key={key}
            className={criteria === key ? "active" : ""}
            aria-pressed={criteria === key}
            onClick={() => setCriteria(key)}
          >
            <strong>{interpretations[key].label}</strong>
            <small>{key === "previous" ? "Before implementation" : "After implementation"}</small>
          </button>
        ))}
      </div>

      <div className="breakpoint-explanation">
        <strong>What changed?</strong>
        <p>{result.note}</p>
        <p>
          In a real laboratory, the applicable category depends on the specific
          organism, antimicrobial, method, and current validated interpretive
          criteria. The categories here are deliberately synthetic rather than
          a clinical breakpoint table.
        </p>
      </div>

      <div className="breakpoint-dependency">
        <strong>A breakpoint update can be a dependency-network change</strong>
        <div>
          <span>AST system</span><b>→</b><span>Expert rules</span><b>→</b>
          <span>Reporting logic</span><b>→</b><span>LIS / interface</span><b>→</b>
          <span>Downstream CDS</span>
        </div>
        <p>
          The director's informatics task is not merely to know the new
          criterion, but to identify every governed component that may depend on it.
        </p>
      </div>
    </section>
  );
}
