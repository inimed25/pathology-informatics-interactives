import { useState } from "react";

type Phase = "normal" | "downtime" | "restored" | "reconciled";

const phases: Record<Phase, { label: string; status: string; detail: string }> = {
  normal: {
    label: "Normal operation",
    status: "Information pathway available",
    detail: "Instrument results move through the expected electronic pathway and routine exception monitoring continues.",
  },
  downtime: {
    label: "Downtime",
    status: "Connection unavailable",
    detail: "The laboratory activates its downtime workflow. Manual or degraded processes may create information that must later be reconciled.",
  },
  restored: {
    label: "Connection restored",
    status: "Transport is back — recovery is not finished",
    detail: "Queued and newly generated results may begin moving again, while manual entries, duplicates, missing results, or mismatched specimen states can remain.",
  },
  reconciled: {
    label: "Reconciled",
    status: "Affected information and workflows reviewed",
    detail: "The laboratory accounts for the interruption, resolves affected records and workflow states, and confirms intended operation before declaring recovery complete.",
  },
};

const order: Phase[] = ["normal", "downtime", "restored", "reconciled"];

export function InterfaceRecoveryExplorer() {
  const [phase, setPhase] = useState<Phase>("normal");
  const current = phases[phase];

  return (
    <section className="recovery-explorer" aria-labelledby="recovery-explorer-title">
      <div className="recovery-heading">
        <p className="eyebrow">Interactive concept</p>
        <h3 id="recovery-explorer-title">The interface is back. Is the laboratory recovered?</h3>
        <p>
          Follow a synthetic microbiology result pathway through downtime and
          recovery. Connectivity is only one layer of a safe information state.
        </p>
      </div>

      <div className="system-path" aria-label="Microbiology result pathway">
        {["Instrument", "Middleware", "LIS", "EHR", "Clinical team"].map((system, index) => {
          const disrupted = phase === "downtime" && index === 1;
          return (
            <div className="system-path-item" key={system}>
              <span className={disrupted ? "system-node disrupted" : "system-node"}>{system}</span>
              {index < 4 && <b className={disrupted ? "path-link disrupted" : "path-link"}>→</b>}
            </div>
          );
        })}
      </div>

      <div className="recovery-phases" role="group" aria-label="Recovery phase">
        {order.map((key, index) => (
          <button
            type="button"
            key={key}
            className={phase === key ? "active" : ""}
            aria-pressed={phase === key}
            onClick={() => setPhase(key)}
          >
            <small>0{index + 1}</small>
            <strong>{phases[key].label}</strong>
          </button>
        ))}
      </div>

      <div className="recovery-status">
        <div>
          <small>Current state</small>
          <strong>{current.status}</strong>
          <p>{current.detail}</p>
        </div>
        {(phase === "downtime" || phase === "restored") && (
          <div className="recovery-queue">
            <strong>Information requiring attention</strong>
            <span>Queued result</span>
            <span>Manual downtime result</span>
            <span>Specimen status</span>
            {phase === "restored" && <span>Duplicate / missing-result check</span>}
          </div>
        )}
        {phase === "reconciled" && (
          <div className="recovery-queue resolved">
            <strong>Reconciliation checks</strong>
            <span>Queued results accounted for</span>
            <span>Manual entries reviewed</span>
            <span>Physical + electronic workflow aligned</span>
            <span>Normal operation confirmed</span>
          </div>
        )}
      </div>

      <div className="recovery-takeaway">
        <strong>Director-level informatics principle</strong>
        <p>
          Restoration answers “can the systems communicate again?” Reconciliation
          asks whether the affected information and workflows are complete,
          correct, and synchronized. Those are not the same endpoint.
        </p>
      </div>
    </section>
  );
}
