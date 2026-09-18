import { useState } from "react";

type Mode = "short" | "long";

export function ReadContextExplorer() {
  const [mode, setMode] = useState<Mode>("short");

  return (
    <section className="read-context-explorer" aria-labelledby="read-context-title">
      <div className="read-context-heading">
        <div>
          <p className="eyebrow">Interactive concept</p>
          <h3 id="read-context-title">Gene detected. But where is it?</h3>
          <p>
            Compare synthetic short- and long-read evidence around the same
            resistance gene. The goal is not to rank technologies, but to see
            why read length can change what genomic context can be resolved.
          </p>
        </div>
      </div>

      <div className="read-context-toggle" role="group" aria-label="Sequencing read type">
        <button type="button" className={mode === "short" ? "active" : ""} aria-pressed={mode === "short"} onClick={() => setMode("short")}>
          Short reads
        </button>
        <button type="button" className={mode === "long" ? "active" : ""} aria-pressed={mode === "long"} onClick={() => setMode("long")}>
          Long reads
        </button>
      </div>

      <div className="context-map">
        <div className="context-track chromosome">
          <span className="context-label">Chromosome-like context</span>
          <span className="context-repeat repeat-left">repeat</span>
          <span className="context-gene">resistance gene</span>
          <span className="context-repeat repeat-right">repeat</span>
        </div>
        <div className="context-track plasmid">
          <span className="context-label">Plasmid-like context</span>
          <span className="context-repeat repeat-left">repeat</span>
          <span className="context-gene">resistance gene</span>
          <span className="context-repeat repeat-right">repeat</span>
        </div>

        <div className={`context-reads ${mode}`} aria-label={mode === "short" ? "Short reads overlapping repeated sequence and resistance gene" : "Long read spanning resistance gene and unique surrounding sequence"}>
          {mode === "short" ? (
            <>
              <span style={{ left: "31%", width: "12%", top: 8 }} />
              <span style={{ left: "39%", width: "13%", top: 28 }} />
              <span style={{ left: "47%", width: "12%", top: 8 }} />
              <span style={{ left: "53%", width: "13%", top: 28 }} />
            </>
          ) : (
            <span style={{ left: "24%", width: "52%", top: 16 }} />
          )}
        </div>
      </div>

      <div className="context-interpretation">
        <strong>{mode === "short" ? "What the evidence supports" : "What additional context may become resolvable"}</strong>
        {mode === "short" ? (
          <p>
            The gene can be detected, but short fragments within repeated or
            highly similar sequence may not uniquely connect it to one genomic
            neighborhood. Gene presence and gene location are different claims.
          </p>
        ) : (
          <p>
            A sufficiently informative long read can span the gene, repeated
            sequence, and unique flanking sequence. That linkage can help resolve
            whether the determinant belongs to a particular plasmid or
            chromosomal context.
          </p>
        )}
      </div>

      <p className="context-caveat">
        <strong>Important:</strong> long reads are not automatically “better.”
        The appropriate sequencing strategy depends on intended use, platform
        performance, workflow, validation, and the biological question.
      </p>
    </section>
  );
}
