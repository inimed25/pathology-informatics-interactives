import { useMemo, useState } from "react";

type ScenarioKey = "balanced" | "gap" | "uneven";

type Read = {
  start: number;
  end: number;
  lane: number;
};

const genomeLength = 100;
const adequateThreshold = 3;

const scenarios: Record<ScenarioKey, { label: string; summary: string; reads: Read[] }> = {
  balanced: {
    label: "Broad + relatively uniform",
    summary: "Reads are distributed across nearly the entire target.",
    reads: Array.from({ length: 40 }, (_, i) => ({
      start: (i * 9) % 88,
      end: Math.min(100, ((i * 9) % 88) + 18),
      lane: i % 8,
    })),
  },
  gap: {
    label: "High depth, incomplete breadth",
    summary: "Many reads pile up, but a clinically important region remains uncovered.",
    reads: [
      ...Array.from({ length: 34 }, (_, i) => ({
        start: (i * 5) % 38,
        end: ((i * 5) % 38) + 20,
        lane: i % 9,
      })),
      ...Array.from({ length: 28 }, (_, i) => ({
        start: 65 + ((i * 4) % 18),
        end: Math.min(100, 65 + ((i * 4) % 18) + 17),
        lane: i % 9,
      })),
    ],
  },
  uneven: {
    label: "Broad but poorly uniform",
    summary: "Most of the target is represented, but coverage varies substantially by position.",
    reads: [
      ...Array.from({ length: 22 }, (_, i) => ({
        start: (i * 8) % 84,
        end: Math.min(100, ((i * 8) % 84) + 20),
        lane: i % 8,
      })),
      ...Array.from({ length: 24 }, (_, i) => ({
        start: 32 + ((i * 3) % 18),
        end: 32 + ((i * 3) % 18) + 22,
        lane: i % 8,
      })),
    ],
  },
};

const clamp = (value: number) => Math.max(0, Math.min(genomeLength - 1, value));

export function CoverageExplorer() {
  const [scenarioKey, setScenarioKey] = useState<ScenarioKey>("balanced");
  const [position, setPosition] = useState(50);
  const scenario = scenarios[scenarioKey];

  const metrics = useMemo(() => {
    const depths = Array.from({ length: genomeLength }, (_, positionIndex) =>
      scenario.reads.filter(
        (read) => read.start <= positionIndex && read.end > positionIndex
      ).length
    );
    const averageDepth = depths.reduce((sum, depth) => sum + depth, 0) / genomeLength;
    const breadth =
      (depths.filter((depth) => depth >= adequateThreshold).length / genomeLength) * 100;
    const covered = depths.filter((depth) => depth > 0);
    const meanCovered = covered.reduce((sum, depth) => sum + depth, 0) / Math.max(1, covered.length);
    const variance =
      covered.reduce((sum, depth) => sum + (depth - meanCovered) ** 2, 0) /
      Math.max(1, covered.length);
    const cv = meanCovered ? Math.sqrt(variance) / meanCovered : 0;

    return {
      depths,
      averageDepth,
      breadth,
      uniformity: cv < 0.5 ? "Relatively uniform" : cv < 0.85 ? "Variable" : "Highly uneven",
    };
  }, [scenario]);

  const selectedDepth = metrics.depths[clamp(position)];

  return (
    <section className="coverage-explorer" aria-labelledby="coverage-explorer-title">
      <div className="coverage-explorer-heading">
        <div>
          <p className="eyebrow">Interactive concept</p>
          <h3 id="coverage-explorer-title">Explore depth, breadth, and uniformity</h3>
          <p>
            Switch between synthetic sequencing patterns, then select a genomic
            position to see how local depth differs from whole-target coverage.
          </p>
        </div>
        <div className="coverage-threshold">
          Adequate coverage in this teaching model: <strong>≥{adequateThreshold}×</strong>
        </div>
      </div>

      <div className="coverage-scenarios" role="group" aria-label="Coverage scenarios">
        {(Object.keys(scenarios) as ScenarioKey[]).map((key) => (
          <button
            type="button"
            key={key}
            className={scenarioKey === key ? "active" : ""}
            aria-pressed={scenarioKey === key}
            onClick={() => setScenarioKey(key)}
          >
            <strong>{scenarios[key].label}</strong>
            <small>{scenarios[key].summary}</small>
          </button>
        ))}
      </div>

      <div className="coverage-plot" aria-label="Synthetic reads aligned across a reference target">
        <div className="coverage-read-field">
          {scenario.reads.map((read, index) => (
            <span
              className="coverage-read"
              key={index}
              style={{
                left: `${read.start}%`,
                width: `${read.end - read.start}%`,
                top: `${read.lane * 18 + 8}px`,
              }}
            />
          ))}
          <span className="coverage-cursor" style={{ left: `${position}%` }} />
        </div>

        <div className="coverage-reference">
          <span>Reference target</span>
          <div />
          <span>{position}</span>
        </div>

        <label className="coverage-position-control">
          <span>Select genomic position</span>
          <input
            type="range"
            min="0"
            max="99"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
          />
        </label>
      </div>

      <dl className="coverage-metrics">
        <div>
          <dt>Depth at position {position}</dt>
          <dd>{selectedDepth}×</dd>
          <small>Reads overlapping this position</small>
        </div>
        <div>
          <dt>Average depth</dt>
          <dd>{metrics.averageDepth.toFixed(1)}×</dd>
          <small>Average across the entire target</small>
        </div>
        <div>
          <dt>Breadth ≥{adequateThreshold}×</dt>
          <dd>{metrics.breadth.toFixed(0)}%</dd>
          <small>Target positions meeting this teaching threshold</small>
        </div>
        <div>
          <dt>Uniformity pattern</dt>
          <dd>{metrics.uniformity}</dd>
          <small>How evenly reads are distributed</small>
        </div>
      </dl>

      <div className="coverage-takeaway">
        <strong>What to notice</strong>
        <p>
          Depth describes evidence at a position. Breadth asks how much of the
          intended target is adequately covered. Uniformity asks how evenly that
          coverage is distributed. A high average depth can therefore coexist
          with an important coverage gap.
        </p>
      </div>
    </section>
  );
}
