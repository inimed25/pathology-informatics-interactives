import { useState } from "react";

type Mode = "short" | "long";

function ContextTrack({ kind, longRead = false }: { kind: "chromosome" | "plasmid"; longRead?: boolean }) {
  const plasmid = kind === "plasmid";
  return (
    <div className="read-evidence-card">
      <small>{plasmid ? "CANDIDATE PLASMID-LIKE CONTEXT" : "CANDIDATE CHROMOSOME-LIKE CONTEXT"}</small>
      <div className="read-locus">
        {longRead && plasmid && <span className="spanning-read">single long read spanning gene + repeat + unique flank</span>}
        {!longRead && <div className="short-read-cloud" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/></div>}
        <div className="locus-segments">
          <span className="unique">{plasmid ? "shared flank" : "unique A"}</span>
          <span className="repeat">repetitive sequence</span>
          <strong>gene-containing fragment</strong>
          <span className="repeat">repetitive sequence</span>
          <span className="unique">{plasmid ? "unique B" : "shared flank"}</span>
        </div>
      </div>
    </div>
  );
}

export function ReadContextExplorer() {
  const [mode, setMode] = useState<Mode>("short");
  return (
    <section className="read-context-explorer" aria-labelledby="read-context-title">
      <div className="read-context-heading"><div>
        <p className="eyebrow">Interactive concept</p>
        <h3 id="read-context-title">Gene detected. But where is it?</h3>
        <p>Compare synthetic short- and long-read evidence around the same resistance gene. The goal is not to rank technologies, but to see why read length can change what genomic context can be resolved.</p>
      </div></div>

      <div className="read-context-toggle" role="group" aria-label="Sequencing read type">
        <button type="button" className={mode === "short" ? "active" : ""} aria-pressed={mode === "short"} onClick={() => setMode("short")}>Short reads</button>
        <button type="button" className={mode === "long" ? "active" : ""} aria-pressed={mode === "long"} onClick={() => setMode("long")}>Long reads</button>
      </div>

      <div className="read-evidence-stack">
        <ContextTrack kind="chromosome" longRead={mode === "long"} />
        <ContextTrack kind="plasmid" longRead={mode === "long"} />
      </div>

      <div className="context-interpretation">
        <strong>{mode === "short" ? "What the evidence supports" : "What additional context may become resolvable"}</strong>
        {mode === "short" ? (
          <p>Short fragments can detect the gene yet remain compatible with more than one genomic neighborhood when the surrounding sequence is repetitive or highly similar. Gene presence and gene location are different claims.</p>
        ) : (
          <p>A sufficiently informative long read can bridge the gene and repetitive sequence into a unique flank. That linkage can distinguish candidate genomic neighborhoods. If the unique flank is independently established as plasmid-associated, it can support assignment of the determinant to that plasmid context.</p>
        )}
      </div>

      <p className="context-caveat"><strong>Important:</strong> long reads are not automatically “better.” The appropriate sequencing strategy depends on intended use, platform performance, workflow, validation, and the biological question.</p>
    </section>
  );
}
