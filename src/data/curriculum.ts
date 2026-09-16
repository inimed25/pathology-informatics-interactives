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

const microbialGenomicsSources: SourceReference[] = [
  {
    label: "CLSI MM24 — Molecular Methods for Genotyping and Strain Typing of Infectious Organisms",
    url: "https://clsi.org/shop/standards/mm24/",
    license: "Copyrighted standard; cited, not reproduced",
    use: "Framework for infectious-organism genotyping, strain typing, validation, interpretation, reporting, and clinical utility.",
  },
  {
    label: "CDC — What is Genomic Sequencing?",
    url: "https://www.cdc.gov/advanced-molecular-detection/about/what-is-genomic-sequencing.html",
    license: "U.S. government educational resource; source cited",
    use: "Pathogen-specific sequencing workflow, including sequence reads, assembly, reference alignment, and interpretation.",
  },
  {
    label: "CDC — Advanced Molecular Detection",
    url: "https://www.cdc.gov/advanced-molecular-detection/about/index.html",
    license: "U.S. government educational resource; source cited",
    use: "Integration of pathogen genomics, bioinformatics, and epidemiology in infectious-disease surveillance and outbreak investigation.",
  },
  {
    label: "NCBI Sequence Read Archive — File Format Guide",
    url: "https://www.ncbi.nlm.nih.gov/sra/docs/submitformats/",
    license: "U.S. government technical documentation; source cited",
    use: "Technical definitions and distinctions among FASTQ, FASTA, SAM, and BAM sequence-data formats.",
  },
  {
    label: "GA4GH — HTS Format Specifications",
    url: "https://samtools.github.io/hts-specs/",
    license: "Open technical specifications; source cited",
    use: "Canonical specifications and terminology for SAM/BAM and VCF/BCF genomic data formats.",
  },
];






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
type MCQSeed = {
  question: string;
  choices: [string, string, string, string];
  correctIndex: number;
  explanation: string;
};

type CaseSeed = {
  artifact: string;
  evidence: [string, string, ("neutral" | "warning" | "critical" | "positive")?][];
  trace: [string, string, string, string][];
  questions: MCQSeed[];
};

type ManifestSeed = Omit<LessonManifest, "id" | "sources"> & {
  sources?: SourceReference[];
};
const manifests: ManifestSeed[] = [
  {
    slug: "microbiology-informatics",
    title: "Foundations of Clinical Microbiology Informatics",
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
    sources: microbialGenomicsSources,
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
    artifact: "Clinical microbiology information lifecycle",

    evidence: [
      ["Specimen", "A single specimen can generate multiple related observations over time", "positive"],
      ["Laboratory workflow", "Manual and automated processes contribute data to the microbiology record", "positive"],
      ["LIS", "Organizes, stores, and communicates laboratory information", "positive"],
      ["Downstream use", "Microbiology data may be consumed by clinicians, decision-support tools, infection prevention, and public health systems", "warning"]
    ],

    trace: [
      [
        "Clinical microbiology laboratory",
        "Medical technologist",
        "Generates and updates specimen, organism, identification, susceptibility, and other microbiology data.",
        "Microbiology information may evolve as testing progresses rather than appearing as a single final numeric result."
      ],
      [
        "Instrument / middleware",
        "Laboratory informatics",
        "Produces or transforms structured laboratory data before it reaches the LIS.",
        "Interfaces and mappings must preserve the meaning and relationships of the data."
      ],
      [
        "LIS",
        "Microbiology laboratory",
        "Organizes results within the laboratory workflow and transmits reportable information downstream.",
        "The LIS is a central component of laboratory information management but is not the same system as the EHR."
      ],
      [
        "EHR and downstream systems",
        "Clinicians and other data users",
        "Consume microbiology information for patient care, decision support, surveillance, and other purposes.",
        "Correct transmission alone is insufficient if the receiving system does not preserve or interpret the information correctly."
      ]
    ],

    questions: [
      {
        question: "Why can clinical microbiology data be more difficult to represent than a single quantitative chemistry result?",
        choices: [
          "Microbiology results may contain multiple related observations that evolve during the laboratory workflow",
          "Microbiology results cannot be stored electronically",
          "All microbiology testing produces only narrative free text",
          "Microbiology instruments do not generate structured data"
        ],
        correctIndex: 0,
        explanation: "Microbiology workflows can generate interconnected and evolving information such as specimen details, organism identification, susceptibility results, preliminary findings, and final interpretations."
      },
      {
        question: "Which statement best distinguishes the LIS from the EHR in a microbiology workflow?",
        choices: [
          "The EHR performs organism identification while the LIS performs susceptibility testing",
          "The LIS manages laboratory workflow and results, while the EHR presents laboratory information within the broader clinical record",
          "The LIS and EHR are different names for the same information system",
          "The EHR replaces the need for laboratory middleware and interfaces"
        ],
        correctIndex: 1,
        explanation: "The LIS supports laboratory-specific workflows and result management, whereas the EHR integrates laboratory information with the broader patient record."
      },
      {
        question: "A microbiology result is transmitted successfully from the LIS to another system, but the receiving system assigns the organism to the wrong concept. What type of problem has occurred?",
        choices: [
          "Analytical sensitivity failure",
          "Specimen collection failure",
          "Semantic interoperability failure",
          "Instrument calibration failure"
        ],
        correctIndex: 2,
        explanation: "Successful transport does not guarantee preservation of meaning. Semantic interoperability requires the receiving system to interpret the transmitted information as intended."
      },
      {
        question: "Why is structured microbiology data valuable for downstream informatics applications?",
        choices: [
          "Structured data eliminate the need for microbiologist interpretation",
          "Structured data guarantee that every interface is correctly configured",
          "Structured data prevent laboratory results from changing after preliminary reporting",
          "Structured data allow information to be more reliably searched, exchanged, and used by computational systems"
        ],
        correctIndex: 3,
        explanation: "Structured representation supports consistent exchange and computational use of laboratory information, although terminology, mappings, interfaces, and governance still require validation."
      },
      {
        question: "Which question best reflects the microbiology director's informatics responsibility when implementing a new electronic result workflow?",
        choices: [
          "Does the information retain its intended meaning and reach the appropriate users and systems throughout the workflow?",
          "Can the instrument generate a result without any human involvement?",
          "Can every microbiology result be converted into a single numeric value?",
          "Can the laboratory eliminate all manual review?"
        ],
        correctIndex: 0,
        explanation: "Clinical microbiology informatics requires attention to the complete information lifecycle, including generation, transformation, transmission, interpretation, presentation, validation, and governance."
      }
    ]
  },
  "microbiology-decision-support": {
    artifact: "Antimicrobial susceptibility testing informatics workflow",

    evidence: [
      ["AST measurement", "An instrument or method generates an MIC or other susceptibility measurement", "positive"],
      ["Breakpoint interpretation", "The measurement is interpreted using organism-drug-specific criteria", "positive"],
      ["Expert rules", "Additional logic may modify, suppress, or flag results based on resistance knowledge", "warning"],
      ["Downstream report", "The final susceptibility information must remain correctly associated with the organism and antimicrobial", "critical"]
    ],

    trace: [
      [
        "AST method / instrument",
        "Medical technologist",
        "Generates MICs or other antimicrobial susceptibility measurements.",
        "The analytical measurement is not identical to its categorical interpretation."
      ],
      [
        "Breakpoint / expert system",
        "Microbiology laboratory",
        "Applies interpretive criteria and laboratory rules to organism-drug combinations.",
        "Changes to breakpoints or expert rules can change the reported interpretation without changing the measured MIC."
      ],
      [
        "LIS",
        "Laboratory informatics",
        "Stores organism, antimicrobial, measurement, categorical interpretation, and associated comments.",
        "These related data elements must remain correctly linked and represented."
      ],
      [
        "Clinical report",
        "Clinical team",
        "Uses the reported susceptibility information to support antimicrobial decision-making.",
        "Incorrect mappings, outdated rules, or inappropriate suppression can alter the information presented to clinicians."
      ]
    ],

    questions: [
      {
        question: "An isolate has an MIC of 2 µg/mL for an antimicrobial. What does the MIC represent?",
        choices: [
          "The probability that treatment will succeed in the patient",
          "The lowest tested antimicrobial concentration that inhibits visible growth under defined test conditions",
          "The categorical interpretation assigned by the LIS",
          "The percentage of isolates susceptible to that antimicrobial"
        ],
        correctIndex: 1,
        explanation: "The MIC is an in vitro susceptibility measurement. A susceptible, intermediate, susceptible-dose dependent, or resistant category is an interpretation applied using appropriate breakpoint criteria."
      },
      {
        question: "A laboratory updates an antimicrobial breakpoint. The measured MIC for a stored organism-drug example remains unchanged, but its categorical interpretation changes. What best explains this?",
        choices: [
          "The organism developed resistance after testing",
          "The AST instrument retrospectively changed its measurement",
          "Breakpoints translate susceptibility measurements into interpretive categories, so a breakpoint change can alter the category without altering the MIC",
          "MICs and categorical interpretations are independent laboratory tests"
        ],
        correctIndex: 2,
        explanation: "The MIC is the analytical measurement, while the categorical interpretation depends on the breakpoint applied to that organism-drug combination. Informatics systems therefore need controlled and validated breakpoint updates."
      },
      {
        question: "What is the primary informatics purpose of an AST expert rule?",
        choices: [
          "Apply defined knowledge-based logic to susceptibility data so important or inconsistent organism-drug patterns can be flagged or handled appropriately",
          "Replace all review by microbiology personnel",
          "Calculate the hospital antibiogram directly from a single patient's isolate",
          "Determine the patient's antimicrobial dose using only the MIC"
        ],
        correctIndex: 0,
        explanation: "Expert systems apply predefined logic to AST patterns. They can support recognition and handling of clinically important or biologically inconsistent results, but their rules require governance and do not replace professional judgment."
      },
      {
        question: "A new AST instrument sends the correct MIC to the LIS, but the susceptibility category displayed in the EHR is incorrect. What should be investigated first from an informatics perspective?",
        choices: [
          "Only the physical incubation temperature of the AST instrument",
          "Whether the patient has already received antibiotics",
          "Whether the organism grew on the original culture plate",
          "The breakpoint version, interpretive rules, mappings, and transformations across the instrument-to-EHR pathway"
        ],
        correctIndex: 3,
        explanation: "A correct analytical measurement can still produce an incorrect downstream report if interpretive criteria, expert rules, mappings, or interface transformations are wrong or outdated."
      },
      {
        question: "Which statement best distinguishes an antibiogram from an individual isolate's AST report?",
        choices: [
          "An antibiogram summarizes susceptibility patterns across a defined collection of isolates, whereas an AST report describes results for an individual isolate",
          "An antibiogram is another name for an MIC",
          "An antibiogram determines the breakpoint used by the AST instrument",
          "An antibiogram contains only resistant organisms"
        ],
        correctIndex: 0,
        explanation: "An antibiogram aggregates susceptibility results across isolates to summarize local susceptibility patterns. It is conceptually different from the AST result generated for an individual isolate."
      },
      {
        question: "Why must AST expert rules and breakpoint configurations be actively governed rather than left indefinitely at vendor defaults?",
        choices: [
          "Vendor software cannot store MIC values",
          "Interpretive standards and laboratory policies can change, and outdated logic may produce inappropriate susceptibility reporting",
          "Every AST result should be manually entered into the EHR",
          "Expert rules are used only for billing"
        ],
        correctIndex: 1,
        explanation: "AST interpretation is dependent on maintained rules and standards. Laboratories need defined ownership, validation, change control, and monitoring so updates do not create unintended downstream reporting errors."
      }
    ]
  },
   "microbiology-interfaces-automation": {
    artifact: "Microbiology instrument and automation data pathway",

    evidence: [
      ["Instrument", "Microbiology instruments generate identification, susceptibility, molecular, imaging, or other laboratory data", "positive"],
      ["Interface / middleware", "Electronic connections transmit and may transform data between laboratory systems", "warning"],
      ["LIS", "Receives and manages laboratory information within the microbiology workflow", "positive"],
      ["Automation", "Automated specimen processing, incubation, imaging, and related software create additional data flows that require verification", "warning"]
    ],

    trace: [
      [
        "Microbiology instrument",
        "Medical technologist",
        "Generates results or workflow data associated with a specimen or isolate.",
        "Instrument output must remain associated with the correct patient, specimen, test, and organism."
      ],
      [
        "Interface / middleware",
        "Laboratory informatics",
        "Transmits and may transform orders, results, identifiers, and workflow information.",
        "A technically successful transmission can still contain an incorrect mapping or transformation."
      ],
      [
        "LIS",
        "Microbiology laboratory",
        "Receives, stores, organizes, and reports microbiology information.",
        "The laboratory must verify that transmitted information is represented accurately in the receiving system."
      ],
      [
        "EHR / downstream system",
        "Clinical team",
        "Displays or consumes laboratory information for clinical care and other downstream uses.",
        "End-to-end validation should assess the information as it is ultimately presented or consumed."
      ]
    ],

    questions: [
      {
        question: "What is the primary function of an electronic interface between a microbiology instrument and the LIS?",
        choices: [
          "Determine whether an organism is clinically significant",
          "Exchange laboratory information electronically between systems",
          "Replace the microbiology director",
          "Determine antimicrobial breakpoints"
        ],
        correctIndex: 1,
        explanation: "An interface enables electronic exchange of information between systems. In microbiology, this can include orders, specimen or isolate identifiers, organism identifications, susceptibility data, and other results."
      },
      {
        question: "What is a major advantage of a bidirectional instrument interface?",
        choices: [
          "Information can move both from the LIS to the instrument and from the instrument back to the LIS",
          "Every transmitted result can be released without review",
          "The instrument no longer requires quality control",
          "Local terminology no longer requires mapping"
        ],
        correctIndex: 0,
        explanation: "Bidirectional communication allows information such as orders and identifiers to move toward the instrument while results and other data return electronically to the LIS, reducing reliance on manual transcription."
      },
      {
        question: "An instrument correctly identifies an isolate as organism X, but the LIS displays organism Y after electronic transmission. The interface reports no transmission error. What is the most likely informatics problem?",
        choices: [
          "Failure of organism growth",
          "Incorrect antimicrobial breakpoint",
          "Incorrect mapping or transformation between systems",
          "Failure of the mass spectrometer vacuum system"
        ],
        correctIndex: 2,
        explanation: "Technical delivery of a message does not guarantee semantic correctness. An incorrect code mapping or transformation can cause the receiving system to represent a different organism even though transmission succeeded."
      },
      {
        question: "What is the most appropriate approach when validating a new microbiology instrument interface?",
        choices: [
          "Confirm only that the instrument can connect to the network",
          "Test only one common negative result",
          "Assume the vendor's interface validation is sufficient for the local laboratory",
          "Verify representative orders, identifiers, results, mappings, exceptions, and downstream display across the intended workflow"
        ],
        correctIndex: 3,
        explanation: "Interface validation should assess whether information remains accurate and reliable throughout its intended use, including transmission, transformation, storage, retrieval, and downstream representation."
      },
      {
        question: "Which statement best describes middleware in a clinical microbiology information architecture?",
        choices: [
          "It is always the legal medical record",
          "It is software positioned between systems that can facilitate data exchange, workflow management, or rules-based processing",
          "It is another name for the microbiology incubator",
          "It eliminates the need for an LIS"
        ],
        correctIndex: 1,
        explanation: "Middleware can connect instruments and information systems and may support workflow management, data transformation, or rules. Its exact role depends on the laboratory architecture."
      },
      {
        question: "A laboratory introduces automated plate inoculation, incubation, transport, and digital imaging. Why is this also an informatics implementation rather than only a hardware implementation?",
        choices: [
          "Automation eliminates the need to track specimens",
          "Automated systems generate and exchange specimen, workflow, image, and status information that must remain correctly linked across the laboratory process",
          "Digital images cannot be stored electronically",
          "Automation requires every culture result to be reported numerically"
        ],
        correctIndex: 1,
        explanation: "Microbiology laboratory automation depends on coordinated physical and information workflows. Specimen identity, processing steps, incubation, imaging, interpretation, and downstream results must remain correctly associated as information moves through the system."
      }
    ]
  },
    "microbiology-genomics-bioinformatics": {
    artifact: "Clinical microbiology NGS pipeline implementation and validation",

    evidence: [
      [
        "Raw sequence data",
        "Sequencing produces reads with associated quality information that require computational processing before clinical interpretation",
        "positive"
      ],
      [
        "Bioinformatics workflow",
        "Quality control, alignment or assembly, and downstream analyses transform sequence data into interpretable microbial genomic information",
        "warning"
      ],
      [
        "Pipeline configuration",
        "Reference sequences, databases, software versions, parameters, and thresholds can influence analytical results",
        "critical"
      ],
      [
        "Clinical interpretation",
        "Genomic findings must be interpreted within the intended clinical, infection-prevention, or public-health use case",
        "warning"
      ]
    ],

    trace: [
      [
        "Sequencing and FASTQ",
        "Clinical microbiology laboratory",
        "Generates sequence reads and associated base-quality information.",
        "Raw sequencing output is not itself a clinical interpretation; data quality and specimen identity must be assessed before downstream analysis."
      ],
      [
        "Quality control and preprocessing",
        "Laboratory / bioinformatics workflow",
        "Evaluates whether sequence data are suitable for the intended analysis and may perform defined preprocessing steps.",
        "Acceptance criteria and preprocessing choices should be specified and validated for the intended clinical application."
      ],
      [
        "Alignment or assembly",
        "Bioinformatics pipeline",
        "Reads may be aligned to a reference sequence or assembled into longer contiguous sequences, depending on the workflow.",
        "Reference selection, algorithms, software versions, and parameters can influence downstream results."
      ],
      [
        "Microbial genomic analysis",
        "Clinical microbiology / bioinformatics",
        "Uses processed sequence data for applications such as variant analysis, resistance-marker detection, typing, or relatedness assessment.",
        "Databases, thresholds, algorithms, and reportable targets require defined governance and change control."
      ],
      [
        "Interpretation and reporting",
        "Microbiology director / clinical team / public health",
        "Integrates validated genomic results with microbiologic, clinical, epidemiologic, or infection-prevention context.",
        "The meaning of a genomic result depends on the validated intended use of the pipeline and should not exceed what the assay and analysis have established."
      ]
    ],

    questions: [
      {
        question: "A laboratory receives FASTQ files from a sequencing run. What information should the microbiology director understand these files to contain?",
        choices: [
          "Only a final list of clinically significant variants",
          "Sequence reads together with associated per-base quality information",
          "Only assembled microbial chromosomes",
          "Only antimicrobial resistance interpretations"
        ],
        correctIndex: 1,
        explanation: "FASTQ represents sequencing reads and associated quality information. It is an upstream data format rather than a final clinical interpretation."
      },
      {
        question: "Which statement best distinguishes reference alignment from de novo assembly in a microbial sequencing workflow?",
        choices: [
          "Reference alignment places reads relative to a reference sequence, whereas de novo assembly reconstructs longer sequences from reads without requiring that same mapping strategy",
          "Reference alignment produces FASTQ files, whereas assembly produces raw instrument signals",
          "Assembly can only be used for human genomes",
          "The two terms describe identical computational processes"
        ],
        correctIndex: 0,
        explanation: "Reference-based workflows determine how reads relate to a selected reference, while de novo assembly reconstructs longer contiguous sequences from the reads. The appropriate approach depends on the intended microbial analysis."
      },
      {
        question: "A pipeline produces a BAM file after mapping microbial sequence reads to a reference genome. What does the BAM file primarily represent?",
        choices: [
          "A compressed representation of sequence alignment information",
          "A hospital antibiogram",
          "A final clinical microbiology report",
          "A database of antimicrobial breakpoints"
        ],
        correctIndex: 0,
        explanation: "BAM is the binary compressed representation of the SAM alignment format and can store reads and information about their alignment to reference sequences."
      },
      {
        question: "A microbial variant-calling workflow produces a VCF file. What is the most useful conceptual interpretation of this file for a microbiology director?",
        choices: [
          "It is a structured representation of sequence variants identified relative to a reference or analysis framework",
          "It contains the original unprocessed sequencing reads",
          "It is the instrument maintenance log",
          "It automatically establishes the clinical significance of every detected variant"
        ],
        correctIndex: 0,
        explanation: "VCF is a structured format for representing sequence variation. A variant call still requires appropriate analytical validation and biological or clinical interpretation."
      },
      {
        question: "During validation of a new microbial NGS pipeline, which approach best evaluates the bioinformatics component?",
        choices: [
          "Confirm only that the sequencing instrument successfully exports files",
          "Evaluate representative positive, negative, challenging, and relevant variant or organism scenarios across the complete pipeline using predefined acceptance criteria",
          "Validate only the graphical appearance of the final report",
          "Accept the pipeline because the software vendor has already tested it"
        ],
        correctIndex: 1,
        explanation: "Clinical implementation requires validation of the workflow for its intended use. The bioinformatics component should be challenged with representative data and predefined acceptance criteria rather than assuming successful file generation establishes analytical validity."
      },
      {
        question: "A validated resistance-gene pipeline is updated to a substantially newer reference database. Why should the laboratory treat this as an informatics governance event?",
        choices: [
          "Database content can alter which genomic features are recognized or interpreted, so the effect of the change should be assessed under laboratory change-control procedures",
          "Reference databases never affect analytical output",
          "Only sequencing hardware changes require review",
          "Database updates automatically invalidate every previous patient result"
        ],
        correctIndex: 0,
        explanation: "Bioinformatics pipelines depend on controlled computational components such as databases, software, parameters, and thresholds. Changes can affect results and therefore require documented assessment appropriate to their potential impact."
      },
      {
        question: "Two patient isolates are highly similar by a validated genomic relatedness pipeline. What is the most appropriate interpretation?",
        choices: [
          "The genomic finding supports relatedness, but transmission conclusions should incorporate epidemiologic and other relevant context",
          "Whole-genome similarity proves direct patient-to-patient transmission",
          "The isolates must have been collected on the same day",
          "Epidemiologic information is unnecessary once sequencing has been performed"
        ],
        correctIndex: 0,
        explanation: "Genomic relatedness can provide strong evidence during an outbreak investigation, but interpretation of transmission requires integration with epidemiologic context and the characteristics of the validated genomic method."
      },
      {
        question: "Which responsibility most clearly belongs to microbiology leadership when implementing a clinical NGS pipeline?",
        choices: [
          "Personally writing every software component in the pipeline",
          "Understanding the pipeline's intended use, inputs, outputs, quality criteria, limitations, validation, reporting logic, and change-control process",
          "Memorizing the source code of every bioinformatics tool",
          "Delegating all computational decisions without laboratory oversight"
        ],
        correctIndex: 1,
        explanation: "A microbiology director does not need to function as the pipeline's software engineer, but should be able to understand and govern the analytical workflow sufficiently to evaluate validation, limitations, changes, failures, and clinical interpretation."
      }
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
     sources: [
  pierSource,
  ...(manifest.apiSessions.length > 0 ? [apiSource(manifest.apiSessions)] : []),
  ...(manifest.sources ?? []),
],
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
