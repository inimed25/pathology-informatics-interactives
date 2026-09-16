export type Difficulty = "foundational" | "applied" | "stewardship";

export type SourceReference = {
  label: string;
  url: string;
  license: string;
  use: string;
};

export type LessonManifest = {
  id: string;
  slug: string;
  title: string;
  topic: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  pierObjectives: string[];
  durationMinutes: number;
  difficulty: Difficulty;
  interactionKinds: string[];
  apiSessions: number[];
  sources: SourceReference[];
  hasLocalPracticum: boolean;
  pilot?: "data-quality" | "interoperability" | "downtime" | "digital-pathology";
};

export type EvidenceItem = {
  label: string;
  value: string;
  tone?: "neutral" | "warning" | "critical" | "positive";
};

export type TraceStep = {
  system: string;
  role: string;
  sees: string;
  implication: string;
};

export type LessonQuestion = {
  id: string;
  question: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
};

export type LessonDefinition = {
  manifest: LessonManifest;
  artifactTitle: string;
  evidence: EvidenceItem[];
  trace: TraceStep[];
  questions: LessonQuestion[];
};

export type TopicDefinition = {
  id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  slug: string;
  title: string;
  objectives: string[];
  summary: string;
};
