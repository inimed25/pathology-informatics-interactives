import { useState } from "react";

type Scenario = "baseline" | "media-change" | "workflow-burden" | "disagreement";

const scenarios: Record<Scenario, { label: string; model: string; workflow: string; action: string; detail: string }> = {
  baseline: {
    label: "Validated baseline",
    model: "Performance within established conditions",
    workflow: "Supports intended prioritization",
    action: "Continue monitoring",
    detail: "The image inputs and workflow resemble the conditions in which performance was established, and the tool supports its intended clinical purpose.",
  },
  "media-change": {
    label: "Culture medium changes",
    model: "Unknown until evaluated",
    workflow: "Input distribution has changed",
    action: "Investigate / assess performance",
    detail: "The algorithm code is unchanged, but a change in culture medium can alter the images presented to it. Unchanged software does not guarantee unchanged system performance.",
  },
  "workflow-burden": {
    label: "High review burden",
    model: "Technical metrics may remain strong",
    workflow: "Excess flags increase review workload",
    action: "Evaluate clinical utility",
    detail: "A model can classify images accurately yet fail to improve the laboratory if its implementation creates unnecessary review, delays, or poor prioritization.",
  },
  disagreement: {
    label: "Human–algorithm disagreement",
    model: "Output conflicts with relevant evidence",
    workflow: "Exception pathway triggered",
    action: "Route for review + learn from discrepancy",
    detail: "Human oversight is most valuable at meaningful exceptions. Recurrent disagreements can reveal failure modes, changing inputs, or conditions requiring reassessment.",
  },
};

export function DigitalWorkflowExplorer() {
  const [scenario, setScenario] = useState<Scenario>("baseline");
  const current = scenarios[scenario];

  return (
    <section className="digital-workflow-explorer" aria-labelledby="digital-workflow-title">
      <div className="digital-workflow-heading">
        <p className="eyebrow">Interactive concept</p>
        <h3 id="digital-workflow-title">A good model metric is not automatically a good clinical workflow</h3>
        <p>
          Change one part of this synthetic digital microbiology workflow and
          watch why algorithm performance, clinical utility, and governance are
          related but distinct questions.
        </p>
      </div>

      <div className="digital-plate-demo" aria-label="Synthetic digital culture plate illustration">
        <div className="culture-plate" aria-hidden="true">
          <span className="colony colony-a" />
          <span className="colony colony-b" />
          <span className="colony colony-c" />
          <span className="colony colony-d" />
          <span className="colony colony-e" />
          <span className="analysis-box" />
        </div>
        <div>
          <small>Synthetic plate image</small>
          <strong>Pixels become laboratory data only inside a governed workflow</strong>
          <p>
            The image must remain linked to the correct specimen and acquisition
            conditions before an algorithmic output can safely contribute to a
            downstream result.
          </p>
        </div>
      </div>

      <div className="digital-pipeline" aria-label="Digital microbiology information pathway">
        {["Specimen / image identity", "Image acquisition", "Algorithm", "Result association", "LIS", "Clinical action"].map((item, index) => (
          <div className="digital-pipeline-item" key={item}>
            <span className={
              (scenario === "media-change" && (index === 1 || index === 2)) ||
              (scenario === "workflow-burden" && (index === 4 || index === 5)) ||
              (scenario === "disagreement" && index === 2)
                ? "attention" : ""
            }>{item}</span>
            {index < 5 && <b>→</b>}
          </div>
        ))}
      </div>

      <div className="interaction-prompt"><span aria-hidden="true">↳</span><div><strong>Try a scenario</strong><p>Select a condition below. The workflow will update to show where attention shifts and why.</p></div></div>\n\n      <div className="digital-scenarios" role="group" aria-label="Digital microbiology scenario">
        {(Object.keys(scenarios) as Scenario[]).map((key) => (
          <button type="button" key={key} className={scenario === key ? "active" : ""} aria-pressed={scenario === key} onClick={() => setScenario(key)}>
            <strong>{scenarios[key].label}</strong>
          </button>
        ))}
      </div>

      <div className="digital-readout">
        <div><small>Model question</small><strong>{current.model}</strong></div>
        <div><small>Workflow question</small><strong>{current.workflow}</strong></div>
        <div><small>Governance response</small><strong>{current.action}</strong></div>
      </div>

      <div className="digital-explanation">
        <strong>What to notice</strong>
        <p>{current.detail}</p>
      </div>

      <div className="oversight-note">
        <strong>Human oversight ≠ reviewing every automated result</strong>
        <p>
          A governed workflow creates meaningful review pathways for uncertainty,
          failures, disagreement, and conditions outside established performance
          boundaries—while avoiding blind acceptance simply because software
          produced an answer.
        </p>
      </div>
    </section>
  );
}
