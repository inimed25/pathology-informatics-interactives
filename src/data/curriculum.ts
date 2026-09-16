import type { Choice, LessonDefinition, LessonManifest, SourceReference, TopicDefinition } from "./types";

export const PIER_URL = "https://www.apcprods.org/assets/docs/pier/R5/PIER_Essentials_R5.pdf";
export const API_URL = "https://www.pathologyinformatics.org/teaching-slide-sets";

const pierSource: SourceReference = {
  label: "PIER Essentials Release 5",
  url: PIER_URL,
  license: "CC BY-NC-ND 4.0",
  use: "Curriculum alignment only; cases and learner artifacts are original.",
};

const apiSource = (sessions: number[]): SourceReference => ({
  label: `API Pathology Informatics Introductory Course — session${sessions.length === 1 ? "" : "s"} ${sessions.join(", ")}`,
  url: API_URL,
  license: "CC BY 4.0",
  use: "Foundational concepts and terminology, adapted with attribution.",
});






export const topics: TopicDefinition[] = [
  {
    id: 1,
    slug: "microbiology-informatics",
    title: "Clinical Microbiology Informatics",
    objectives: ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"],
    summary:
      "Laboratory data, decision support, automation, genomics, digital technologies, and public health applications in clinical microbiology.",
  },
];
type ManifestSeed = Omit<LessonManifest, "id" | "sources">;
type CaseSeed = {
  artifact: string;
  evidence: [string, string, ("neutral" | "warning" | "critical" | "positive")?][];
  trace: [string, string, string, string][];
  diagnosis: [string, string, string, string];
  repair: [string, string, string, string];
  tests: [string, string, boolean?][];
};
const manifests: ManifestSeed[] = [
  {
    slug: "microbiology-informatics",
    title: "Clinical Microbiology Informatics",
    topic: 1,
    pierObjectives: ["1.1"],
    durationMinutes: 30,
    difficulty: "foundational",
    interactionKinds: [],
    apiSessions: [],
    hasLocalPracticum: false,
  },
  {
    slug: "microbiology-decision-support",
    title: "Antimicrobial Decision Support and Expert Systems",
    topic: 1,
    pierObjectives: ["1.2"],
    durationMinutes: 25,
    difficulty: "applied",
    interactionKinds: [],
    apiSessions: [],
    hasLocalPracticum: false,
  },
  {
    slug: "microbiology-interfaces-automation",
    title: "Instrument Interfaces and Laboratory Automation",
    topic: 1,
    pierObjectives: ["1.3"],
    durationMinutes: 25,
    difficulty: "applied",
    interactionKinds: [],
    apiSessions: [],
    hasLocalPracticum: false,
  },
  {
    slug: "microbiology-genomics-bioinformatics",
    title: "Microbial Genomics and Bioinformatics",
    topic: 1,
    pierObjectives: ["1.4"],
    durationMinutes: 30,
    difficulty: "applied",
    interactionKinds: [],
    apiSessions: [],
    hasLocalPracticum: false,
  },
  {
    slug: "microbiology-digital-imaging-telemicrobiology",
   title: "Digital Microbiology and Emerging Technologies",
    topic: 1,
    pierObjectives: ["1.5"],
    durationMinutes: 25,
    difficulty: "applied",
    interactionKinds: [],
    apiSessions: [],
    hasLocalPracticum: false,
  },
  {
    slug: "microbiology-public-health-surveillance",
    title: "Public Health Surveillance and Microbiology Data Exchange",
    topic: 1,
    pierObjectives: ["1.6"],
    durationMinutes: 25,
    difficulty: "applied",
    interactionKinds: [],
    apiSessions: [],
    hasLocalPracticum: false,
  },
];


const cases: Record<string, CaseSeed> = {
  "microbiology-informatics": {
    artifact: "Clinical microbiology informatics workflow",
    evidence: [
      ["Microbiology data", "Generated across the laboratory workflow", "positive"],
      ["Genomic sequencing", "Produces large amounts of digital data", "warning"],
      ["Bioinformatics", "Required to convert sequence data into interpretable information", "warning"],
      ["Clinical question", "Should determine the analysis and reporting approach", "positive"]
    ],
    trace: [
      ["Clinical laboratory", "Microbiologist", "Generates organism identification, susceptibility, molecular, and genomic data.", "The laboratory produces multiple data types that require integration."],
      ["Sequencing", "Laboratory scientist", "Generates raw sequence data.", "Raw sequencing output is not yet a clinical result."],
      ["Bioinformatics", "Bioinformatician", "Processes, compares, and annotates sequence data.", "Analysis converts raw data into interpretable genomic information."],
      ["Clinical/public health interpretation", "Microbiology director", "Combines genomic findings with clinical and epidemiologic context.", "Genomic relatedness alone does not prove transmission."]
    ],
    diagnosis: [
      "What is the key informatics principle?",
      "The clinical question should determine how genomic data are analyzed and interpreted",
      "The same WGS pipeline should be used for every clinical question",
      "Generating sequence data is sufficient for clinical implementation"
    ],
    repair: [
      "What is needed for successful implementation?",
      "Integrate validated sequencing, bioinformatics, interpretation, reporting, governance, and workflow",
      "Purchase a sequencing instrument and use default software",
      "Store only the final report and discard all underlying data"
    ],
    tests: [
      ["Outbreak investigation", "Pipeline supports isolate relatedness analysis", false],
      ["Resistance analysis", "Relevant resistance genes or mutations can be assessed", false],
      ["Reporting", "Results are translated into clinically meaningful information", false],
      ["Governance", "Pipeline changes and interpretation are validated and monitored", false]
    ]
  },
"microbiology-decision-support": {
  artifact: "Antimicrobial susceptibility decision-support review",

  evidence: [
    ["Susceptibility result", "Organism-drug combinations generate categorical interpretations", "positive"],
    ["Expert rule", "Certain resistance patterns trigger interpretive rules", "warning"],
    ["Clinical context", "Laboratory data alone may not capture the full treatment context", "warning"],
    ["Rule maintenance", "Rules require validation and updates when standards change", "critical"]
  ],

  trace: [
    [
      "AST instrument",
      "Medical technologist",
      "Generates antimicrobial susceptibility measurements and preliminary interpretations.",
      "Instrument output becomes an input to downstream decision support."
    ],
    [
      "Expert system",
      "Microbiology laboratory",
      "Applies predefined rules to susceptibility patterns.",
      "Rules can help identify unusual or clinically important resistance phenotypes."
    ],
    [
      "LIS",
      "Laboratory informatics",
      "Stores and transmits susceptibility results and interpretive comments.",
      "Decision-support output must be represented accurately in the laboratory report."
    ],
    [
      "Clinical team",
      "Clinician",
      "Uses the microbiology report alongside patient-specific information.",
      "Laboratory decision support informs care but does not replace clinical judgment."
    ]
  ],

  diagnosis: [
    "What is the main informatics risk in this workflow?",
    "An outdated or poorly validated expert rule can produce misleading antimicrobial interpretations",
    "Expert systems eliminate the need for laboratory review",
    "Susceptibility results do not require structured data"
  ],

  repair: [
    "What is the best approach to governing the expert system?",
    "Validate rules, assign ownership, update them when standards change, and monitor their downstream effects",
    "Use the vendor defaults indefinitely",
    "Disable interpretive comments and report only raw measurements"
  ],

  tests: [
    ["Known resistance phenotype", "The expert rule produces the expected interpretation", false],
    ["Rule update", "Changes are validated before clinical use", false],
    ["Routine susceptible isolate", "The system does not generate an inappropriate resistance warning", false],
    ["Clinical report", "Interpretive output is transmitted accurately to the LIS/EHR", false]
  ]
},
  "microbiology-interfaces-automation": {
  artifact: "Automated microbiology instrument interface review",

  evidence: [
    ["Analyzer", "Identification and susceptibility results are generated automatically", "positive"],
    ["Interface", "Results are transmitted electronically to the LIS", "positive"],
    ["Result mapping", "One organism code is mapped incorrectly in the receiving system", "critical"],
    ["Exception handling", "Failed transmissions require manual review", "warning"]
  ],

  trace: [
    [
      "Microbiology instrument",
      "Medical technologist",
      "Generates organism identification and susceptibility data.",
      "Automation produces structured results that must retain their meaning downstream."
    ],
    [
      "Middleware/interface",
      "Laboratory informatics",
      "Transforms and transmits instrument data.",
      "Mapping and transformation rules can alter how results are represented."
    ],
    [
      "LIS",
      "Microbiology laboratory",
      "Receives and stores the transmitted result.",
      "Successful transmission does not guarantee that every field was interpreted correctly."
    ],
    [
      "EHR",
      "Clinical team",
      "Displays the final microbiology report.",
      "Interface errors can propagate into information used for patient care."
    ]
  ],

  diagnosis: [
    "What is the main informatics problem?",
    "The interface transmits data successfully but does not preserve the meaning of every result",
    "The microbiology analyzer cannot generate electronic results",
    "All automated results require manual transcription"
  ],

  repair: [
    "What is the best response before go-live?",
    "Correct the mapping and validate representative results and exceptions across the complete instrument-to-EHR pathway",
    "Confirm only that the interface connection is active",
    "Allow the incorrect mapping and correct affected reports manually"
  ],

  tests: [
    ["Common organism", "Identification is represented correctly downstream", false],
    ["Mapped organism", "Correct organism identity is preserved across systems", false],
    ["Susceptibility result", "Interpretation reaches the correct patient and organism", false],
    ["Interface failure", "The result enters a visible and recoverable exception workflow", false]
  ]
},
  "microbiology-genomics-bioinformatics": {
  artifact: "Microbial whole-genome sequencing outbreak investigation",

  evidence: [
    ["Sequencing", "Whole-genome sequencing completed for suspected outbreak isolates", "positive"],
    ["Quality control", "Sequence quality varies across isolates", "warning"],
    ["Bioinformatics pipeline", "Isolates are compared using a validated genomic workflow", "positive"],
    ["Epidemiology", "Patient overlap and exposure data are incomplete", "warning"]
  ],

  trace: [
    [
      "Sequencer",
      "Laboratory scientist",
      "Generates raw sequence reads from microbial isolates.",
      "Raw reads require quality assessment and bioinformatics processing before interpretation."
    ],
    [
      "Bioinformatics pipeline",
      "Bioinformatician",
      "Processes sequence data and compares isolates.",
      "Pipeline parameters, reference data, and analytical methods influence the resulting genomic relationships."
    ],
    [
      "Genomic analysis",
      "Microbiology laboratory",
      "Identifies clusters of genetically similar isolates.",
      "Genomic similarity can support but does not independently establish transmission."
    ],
    [
      "Outbreak investigation",
      "Infection prevention and public health",
      "Combines genomic findings with patient locations, dates, and exposures.",
      "Epidemiologic context is required to interpret whether genomic relationships are consistent with transmission."
    ]
  ],

  diagnosis: [
    "What is the main informatics concern when interpreting these results?",
    "Genomic relationships depend on a validated analytical pipeline and must be interpreted with epidemiologic context",
    "Whole-genome sequencing can directly prove transmission between patients",
    "Raw sequence reads can be interpreted without bioinformatics processing"
  ],

  repair: [
    "What is the best approach to the investigation?",
    "Verify sequence quality, use a validated bioinformatics workflow, document analytical parameters, and integrate genomic findings with epidemiologic data",
    "Classify every genetically similar isolate as direct transmission",
    "Use whichever analysis pipeline produces the clearest cluster"
  ],

  tests: [
    ["Sequence quality", "Each isolate meets defined quality criteria before comparison", false],
    ["Pipeline", "Analysis uses validated and documented parameters", false],
    ["Genomic cluster", "Relatedness is interpreted using an appropriate genomic method", false],
    ["Epidemiology", "Patient and exposure information is considered alongside genomic findings", false]
  ]
},
  "microbiology-digital-imaging-telemicrobiology": {
  artifact: "Remote microbiology image consultation",

  evidence: [
    ["Digital image", "Gram-stain image transmitted for remote consultation", "positive"],
    ["Image quality", "Fine cellular detail is inconsistently visible", "warning"],
    ["Remote display", "Display characteristics have not been validated", "critical"],
    ["Clinical context", "Specimen source and preliminary culture findings are available", "positive"]
  ],

  trace: [
    [
      "Image acquisition",
      "Medical technologist",
      "Captures a representative microscopic field.",
      "Focus, resolution, color, and field selection influence what information is available remotely."
    ],
    [
      "Image transmission",
      "Laboratory information system",
      "Transfers the image and associated case information.",
      "Successful transmission does not establish that the image is adequate for interpretation."
    ],
    [
      "Remote workstation",
      "Consulting microbiologist",
      "Displays the image for remote review.",
      "Display characteristics can affect visualization of diagnostically important features."
    ],
    [
      "Clinical interpretation",
      "Microbiology laboratory",
      "Integrates the remote interpretation with specimen and culture information.",
      "Digital images should be interpreted within the appropriate laboratory and clinical context."
    ]
  ],

  diagnosis: [
    "What is the main informatics concern?",
    "The complete imaging pathway has not been validated for reliable remote interpretation",
    "Any successfully transmitted image is adequate for diagnosis",
    "Clinical context is unnecessary when reviewing microbiology images"
  ],

  repair: [
    "What should be done before routine telemicrobiology use?",
    "Validate representative image types, acquisition methods, transmission, displays, and escalation procedures",
    "Validate only that the image file can be transmitted",
    "Allow each remote reviewer to determine independently whether their display is adequate"
  ],

  tests: [
    ["Gram stain", "Fine morphologic detail remains interpretable remotely", false],
    ["Image acquisition", "Focus and representative field selection meet defined criteria", false],
    ["Remote display", "Validated displays preserve necessary visual information", false],
    ["Escalation", "Uncertain or inadequate images trigger direct review or additional imaging", false]
  ]
},
  "microbiology-public-health-surveillance": {
  artifact: "Electronic microbiology report to public health",

  evidence: [
    ["Laboratory result", "Reportable organism identified and finalized in the LIS", "positive"],
    ["Electronic transmission", "Public health system acknowledges receipt", "positive"],
    ["Organism terminology", "Laboratory-specific organism code is transmitted", "warning"],
    ["Specimen source", "Sent as unstructured free text", "warning"]
  ],

  trace: [
    [
      "Clinical microbiology laboratory",
      "Medical technologist",
      "Finalizes the organism identification and associated result.",
      "The laboratory result is meaningful within the local LIS."
    ],
    [
      "LIS reporting workflow",
      "Laboratory informatics",
      "Identifies the result as reportable and prepares data for transmission.",
      "Reporting rules and mappings determine what information leaves the laboratory."
    ],
    [
      "Electronic interface",
      "Interface team",
      "Transmits the report to the public health system.",
      "Successful transport confirms receipt but not necessarily correct interpretation."
    ],
    [
      "Public health surveillance system",
      "Public health agency",
      "Uses incoming laboratory data for surveillance and investigation.",
      "Local codes or unstructured information may prevent automated interpretation."
    ]
  ],

  diagnosis: [
    "What is the main informatics problem?",
    "The report was transmitted successfully, but local terminology and unstructured data may prevent semantic interoperability",
    "The public health system failed because electronic reporting cannot support microbiology",
    "An acknowledgment proves that every transmitted field was interpreted correctly"
  ],

  repair: [
    "What is the best approach?",
    "Map reportable data to agreed terminology and structured fields, validate receiver interpretation, and maintain the reporting workflow as requirements change",
    "Continue sending local codes because the message is technically delivered",
    "Convert the entire report into free text so humans can interpret it"
  ],

  tests: [
    ["Reportable organism", "Maps to the expected public health concept", false],
    ["Specimen source", "Uses an agreed structured representation", false],
    ["Transmission", "Message reaches the intended public health system", false],
    ["Receiver interpretation", "Incoming data are correctly processed for surveillance", false]
    ]
  },
};

const feedbackFor = (_label: string, correct: boolean, repair = false) =>
  correct
    ? repair ? "This fixes the problem and includes the checks needed before approval." : "This explains the findings at each step."
    : repair ? "This does not fix the source of the problem or include enough validation." : "This does not explain all of the findings.";

const toChoices = (labels: [string, string, string], repair = false): Choice[] => labels.map((label, index) => ({
  id: index === 0 ? repair ? "validated" : "correct" : index === 1 ? "narrow" : "unsafe",
  label,
  correct: index === 0,
  feedback: feedbackFor(label, index === 0, repair),
}));

export const lessons: LessonDefinition[] = manifests.map((manifest, index) => {
  const item = cases[manifest.slug];
  if (!item) throw new Error(`Missing case data for ${manifest.slug}`);
  return {
      manifest: {
      ...manifest,
      id: String(index + 1).padStart(2, "0"),
      sources: [pierSource, apiSource(manifest.apiSessions)],
    },
    artifactTitle: item.artifact,
    evidence: item.evidence.map(([label, value, tone]) => ({ label, value, tone: tone ?? "neutral" })),
    trace: item.trace.map(([system, role, sees, implication]) => ({ system, role, sees, implication })),
    decisionPrompt: item.diagnosis[0],
    decisionChoices: toChoices(item.diagnosis.slice(1) as [string, string, string]),
    repairPrompt: item.repair[0],
    repairChoices: toChoices(item.repair.slice(1) as [string, string, string], true),
    validationCases: item.tests.map(([name, note, strict]) => ({ name, note, passingRepairs: strict === false ? ["validated"] : ["validated", "narrow"] })),
  };
});

export const lessonBySlug = new Map(lessons.map((lesson) => [lesson.manifest.slug, lesson]));
export const topicBySlug = new Map(topics.map((topic) => [topic.slug, topic]));
