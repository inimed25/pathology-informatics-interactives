import { useEffect, useState } from "react";

type Lens = {
  code: string;
  label: string;
  concepts: string[];
  accent: string;
};

const lenses: Record<string, Lens> = {
  "microbiology-informatics": { code: "DATA", label: "Meaning moves with context", concepts: ["Identity", "Observation", "Interpretation"], accent: "cyan" },
  "microbiology-decision-support": { code: "AST", label: "Measurements become decisions", concepts: ["MIC", "Breakpoint", "Clinical action"], accent: "magenta" },
  "microbiology-interfaces-automation": { code: "FLOW", label: "Every interface is a translation", concepts: ["Instrument", "LIS", "EHR"], accent: "green" },
  "microbiology-genomics-bioinformatics": { code: "SEQ", label: "Sequence data become evidence", concepts: ["Reads", "Pipeline", "Interpretation"], accent: "violet" },
  "microbiology-digital-imaging-telemicrobiology": { code: "PIXEL", label: "Images become computable", concepts: ["Capture", "Model", "Review"], accent: "cyan" },
  "microbiology-public-health-surveillance": { code: "NET", label: "Laboratory data become surveillance", concepts: ["Report", "Exchange", "Response"], accent: "green" },
  "microbiology-comprehensive-cases": { code: "SYN", label: "Integrate the complete system", concepts: ["Detect", "Trace", "Govern"], accent: "magenta" },
};

export function BiotechHeroVisual() {
  return (
    <div className="biotech-hero-visual" aria-hidden="true">
      <div className="orbit orbit-a" />
      <div className="orbit orbit-b" />
      <div className="orbit orbit-c" />
      <div className="hero-core">
        <span>CMI</span>
        <small>signal / system / meaning</small>
      </div>
      <span className="hero-node node-a">01</span>
      <span className="hero-node node-b">04</span>
      <span className="hero-node node-c">07</span>
      <div className="spectral-path" />
    </div>
  );
}

export function LessonLens({ slug }: { slug: string }) {
  const lens = lenses[slug] ?? lenses["microbiology-informatics"];
  return (
    <section className={`lesson-lens lens-${lens.accent}`} aria-label="Lesson concept map">
      <p className="eyebrow">Conceptual frame</p>
      <h2>{lens.label}</h2>
      <p className="lens-summary">
        {lens.concepts.join(" → ")}. Keep this relationship in mind as you work through the lesson.
      </p>
    </section>
  );
}


export function DataJourneyIllustration() {
  const nodes = [
    ["01", "Specimen", "identity + context"],
    ["02", "Laboratory", "observation + interpretation"],
    ["03", "Systems", "mapping + transmission"],
    ["04", "Clinical use", "display + action"],
  ];
  return (
    <figure className="data-journey" aria-labelledby="data-journey-title">
      <figcaption>
        <p className="eyebrow">Information has a journey</p>
        <h2 id="data-journey-title">The result is only as reliable as the path that carries it.</h2>
      </figcaption>
      <div className="journey-visual" aria-label="Specimen to clinical action information pathway">
        <div className="journey-signal" aria-hidden="true"><span/><span/><span/><span/><span/><span/><span/></div>
        <div className="journey-nodes">
          {nodes.map(([n,title,detail]) => <div key={n}><small>{n}</small><strong>{title}</strong><span>{detail}</span></div>)}
        </div>
      </div>
    </figure>
  );
}

export function LessonChapterRail() {
  const [chapters, setChapters] = useState<Array<{ id: string; label: string }>>([]);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLElement>(".introduction-content > h2"));
    const next = headings.map((heading, index) => {
      const id = heading.id || `chapter-${index + 1}`;
      heading.id = id;
      return { id, label: heading.textContent ?? `Chapter ${index + 1}` };
    });
    setChapters(next);
  }, []);

  if (!chapters.length) return null;
  return (
    <aside className="chapter-rail" aria-label="Lesson chapters">
      <span>On this page</span>
      <ol>
        {chapters.map((chapter, index) => (
          <li key={chapter.id}><a href={`#${chapter.id}`}><i>{String(index + 1).padStart(2, "0")}</i>{chapter.label}</a></li>
        ))}
      </ol>
    </aside>
  );
}

export function GenomicsPrimer() {
  const stages = [
    ["01", "Sample", "Biology and preanalytics"],
    ["02", "Reads", "Sequence plus quality"],
    ["03", "Pipeline", "Alignment, assembly, classification"],
    ["04", "Meaning", "Clinical and epidemiologic context"],
  ];
  return (
    <section className="genomics-primer" aria-labelledby="genomics-primer-title">
      <div>
        <p className="eyebrow">The genomic signal path</p>
        <h2 id="genomics-primer-title">Four layers. One governed result.</h2>
        <p>No single metric tells the whole story. Follow how biological material becomes computational evidence—and where uncertainty can enter.</p>
      </div>
      <div className="genomics-primer-track">
        {stages.map(([number, title, detail]) => (
          <article key={number}>
            <span>{number}</span><strong>{title}</strong><small>{detail}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
