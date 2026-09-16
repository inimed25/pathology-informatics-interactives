import type { LessonDefinition, LessonManifest, SourceReference, TopicDefinition } from "./types";

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
const digitalMicrobiologySources: SourceReference[] = [
  {
    label: "CLSI M67 — Verification of Laboratory Automation in Microbiology",
    url: "https://clsi.org/shop/standards/m67/",
    license: "Copyrighted standard; cited, not reproduced",
    use: "Primary framework for verification and implementation of microbiology laboratory automation, plate imaging, digital plate reading, image-analysis software, LIS transmission, change verification, downtime, and postverification quality assurance.",
  },
  {
    label: "Rhoads et al. — A review of the current state of digital plate reading of cultures in clinical microbiology",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4466785/",
    license: "Open-access article; CC BY",
    use: "Background on digital plate reading, image acquisition, middleware, remote consultation, image storage, and workflow considerations.",
  },
  {
    label: "Misra et al. — The Use of Machine Learning for Image Analysis Artificial Intelligence in Clinical Microbiology",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10575257/",
    license: "Open-access article; source cited",
    use: "Clinical microbiology applications, implementation considerations, validation, and limitations of image-analysis artificial intelligence.",
  },
]; 
const publicHealthSources: SourceReference[] = [
  {
    label: "CDC — Electronic Laboratory Reporting (ELR)",
    url: "https://www.cdc.gov/electronic-lab-reporting/php/about/index.html",
    license: "U.S. government educational resource; source cited",
    use: "Current overview of electronic laboratory reporting, standardized electronic exchange, and the role of ELR in public-health surveillance and outbreak response.",
  },
  {
    label: "CDC PHIN — Data Interchange Standards",
    url: "https://www.cdc.gov/phin/php/standards/data-interchange.html",
    license: "U.S. government technical documentation; source cited",
    use: "Technical framework for electronic laboratory reporting to public health, including the published HL7 Version 2.5.1 ELR implementation guide.",
  },
  {
    label: "APHL — Electronic Laboratory Reporting",
    url: "https://aphl.org/focus-areas/informatics/reporting/ELR",
    license: "Copyrighted educational resource; cited, not reproduced",
    use: "ELR workflow, standardized messaging, terminology mapping, and use of HL7, LOINC, and SNOMED in laboratory-to-public-health data exchange.",
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
  sources: digitalMicrobiologySources,
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
    sources: publicHealthSources,
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
    artifact: "Digital microbiology imaging and analysis workflow",

    evidence: [
      [
        "Digital imaging",
        "Automated microbiology systems can acquire digital images of culture media for review and analysis",
        "positive"
      ],
      [
        "Image quality",
        "Acquisition conditions and image quality influence what information is available for interpretation",
        "warning"
      ],
      [
        "Image analysis",
        "Software or machine-learning tools may assist with tasks such as detecting or classifying growth, but performance depends on the validated intended use",
        "critical"
      ],
      [
        "Workflow integration",
        "Images, analysis results, specimen identifiers, and downstream laboratory information must remain correctly associated",
        "warning"
      ]
    ],

    trace: [
      [
        "Specimen and culture",
        "Clinical microbiology laboratory",
        "Produces culture media or other visual material that may be incorporated into a digital workflow.",
        "The digital system must preserve the relationship between the image and the correct specimen, culture, and laboratory workflow."
      ],
      [
        "Image acquisition",
        "Automation / imaging system",
        "Captures digital images under defined acquisition conditions.",
        "Image quality, timing, focus, illumination, and other acquisition characteristics can influence downstream interpretation."
      ],
      [
        "Image analysis / digital review",
        "Software and microbiology personnel",
        "Images may be reviewed by humans or processed by validated image-analysis algorithms.",
        "Algorithmic output should be interpreted according to its validated intended use rather than assumed to replace microbiology expertise."
      ],
      [
        "LIS and downstream workflow",
        "Laboratory informatics",
        "Associates image-derived information with the appropriate laboratory record and communicates relevant results downstream.",
        "Implementation should verify data association, result transmission, exception handling, and the complete intended workflow."
      ]
    ],

    questions: [
      {
        question: "Why is digital plate imaging in clinical microbiology an informatics issue rather than simply a camera attached to an incubator?",
        choices: [
          "Because images, specimen identifiers, culture conditions, analysis results, and workflow states must remain correctly associated and usable across laboratory systems",
          "Because digital imaging eliminates the need for an LIS",
          "Because every culture image can automatically generate a final diagnosis",
          "Because digital images cannot be reviewed by microbiology personnel"
        ],
        correctIndex: 0,
        explanation: "Digital microbiology combines image acquisition with specimen tracking, software, workflow information, interpretation, and downstream data exchange. The information relationships are therefore as important as the imaging hardware."
      },
      {
        question: "A laboratory can successfully transmit digital culture images to a remote workstation. What does successful transmission alone establish?",
        choices: [
          "That the images are diagnostically equivalent to direct review for every intended use",
          "That the files can be transmitted, but not that acquisition, display, interpretation, and the complete workflow are adequate for the intended use",
          "That remote reviewers no longer require clinical or laboratory context",
          "That image-analysis software can be used without validation"
        ],
        correctIndex: 1,
        explanation: "Technical transmission is only one component of a digital workflow. The laboratory must consider the intended use and verify the relevant acquisition, transmission, display, interpretation, and workflow components."
      },
      {
        question: "An image-analysis algorithm was validated to identify plates with no visible growth under defined conditions. What is the safest informatics interpretation of that validation?",
        choices: [
          "The algorithm may now make any microbiology diagnosis from any image",
          "The algorithm can replace all microbiology personnel",
          "Its use should remain within the validated task, specimen or media conditions, workflow, and performance boundaries",
          "The validation remains applicable after any software or imaging-system change without further assessment"
        ],
        correctIndex: 2,
        explanation: "Validation supports a defined intended use. Performance for one image-analysis task does not automatically establish performance for different organisms, media, image conditions, decisions, or workflows."
      },
      {
        question: "A software update changes the image-analysis algorithm used by an automated culture system. What should laboratory leadership do?",
        choices: [
          "Assume the update has no effect because the imaging hardware did not change",
          "Delete all images collected before the update",
          "Allow the vendor to determine clinical acceptability without local review",
          "Assess the potential effect of the change and perform appropriate verification or change-control activities before relying on the updated workflow"
        ],
        correctIndex: 3,
        explanation: "Software and algorithm changes can alter system performance. Laboratory governance should therefore assess their impact and determine the verification needed for the intended clinical workflow."
      },
      {
        question: "What is an important potential advantage of retaining digital microbiology images?",
        choices: [
          "They can support retrospective review, consultation, quality assurance, education, or documentation when implemented appropriately",
          "They guarantee that the original culture never needs to be examined",
          "They eliminate image-storage and data-governance requirements",
          "They automatically determine organism identification and susceptibility"
        ],
        correctIndex: 0,
        explanation: "Stored images can support review and quality-related activities, but their usefulness depends on appropriate acquisition, storage, retrieval, context, and governance."
      },
      {
        question: "Which statement best describes the role of artificial intelligence or machine learning in current digital microbiology workflows?",
        choices: [
          "Any model with high accuracy in a research paper can immediately be used for patient reporting",
          "AI makes validation unnecessary because the model learns from new cases",
          "AI is useful only for administrative tasks and cannot analyze microbiology images",
          "AI can support defined image-analysis tasks, but clinical implementation requires validation, monitoring, workflow integration, and appropriate human oversight"
        ],
        correctIndex: 3,
        explanation: "Machine-learning image analysis can support microbiology workflows, but performance must be established for the intended application and incorporated into an appropriately governed clinical process."
      }
    ]
  },
   "microbiology-public-health-surveillance": {
    artifact: "Electronic laboratory reporting and public-health surveillance workflow",

    evidence: [
      [
        "Laboratory result",
        "A reportable microbiology result is finalized within the laboratory information system",
        "positive"
      ],
      [
        "Electronic laboratory reporting",
        "Structured laboratory information can be transmitted electronically to public-health agencies for surveillance and response",
        "positive"
      ],
      [
        "Terminology",
        "Standardized vocabularies support consistent interpretation of laboratory information across organizations",
        "warning"
      ],
      [
        "End-to-end interoperability",
        "Successful message delivery does not by itself establish that the receiving system interpreted every transmitted data element correctly",
        "critical"
      ]
    ],

    trace: [
      [
        "Clinical microbiology laboratory",
        "Medical technologist / microbiologist",
        "Generates and finalizes microbiology results that may meet public-health reporting requirements.",
        "Reporting requirements depend on the applicable jurisdiction and must be represented correctly in the laboratory workflow."
      ],
      [
        "LIS reporting workflow",
        "Laboratory informatics",
        "Identifies reportable information and maps laboratory data into the structures and terminology needed for electronic reporting.",
        "Local test, organism, specimen, and result concepts may require controlled mapping to standardized representations."
      ],
      [
        "Electronic laboratory reporting interface",
        "Laboratory and public-health informatics",
        "Transmits structured laboratory information to the appropriate public-health system.",
        "Message standards support transport and structure, but semantic accuracy also depends on correct coding and mapping."
      ],
      [
        "Public-health surveillance system",
        "Public-health agency",
        "Receives laboratory data for surveillance, case investigation, outbreak detection, and other public-health activities.",
        "End-to-end validation should assess whether transmitted information is received and interpreted as intended."
      ]
    ],

    questions: [
      {
        question: "What is the primary purpose of electronic laboratory reporting (ELR) in a clinical microbiology workflow?",
        choices: [
          "Automatically transmit structured laboratory information to public-health agencies for surveillance and response",
          "Replace the laboratory information system with a public-health database",
          "Send every microbiology result directly to the CDC regardless of reporting requirements",
          "Allow public-health agencies to control microbiology instruments remotely"
        ],
        correctIndex: 0,
        explanation: "ELR supports automated electronic transmission of laboratory information to public-health agencies. Reporting destinations and requirements depend on the applicable public-health jurisdiction."
      },
      {
        question: "A public-health system sends an acknowledgment indicating that an ELR message was received. What does that acknowledgment alone establish?",
        choices: [
          "Every laboratory concept in the message was interpreted correctly",
          "The message reached the receiving workflow, but additional validation is needed to establish correct processing and interpretation of its contents",
          "The patient automatically meets a national surveillance case definition",
          "No terminology mapping is required"
        ],
        correctIndex: 1,
        explanation: "Technical receipt and semantic interoperability are different. Successful delivery does not by itself prove that test, organism, specimen, result, and other concepts were interpreted as intended."
      },
      {
        question: "Why are standardized terminologies such as LOINC and SNOMED CT important in electronic laboratory reporting?",
        choices: [
          "They encrypt laboratory messages during transmission",
          "They determine which organisms will grow in culture",
          "They help represent laboratory concepts consistently so receiving systems can interpret the transmitted information",
          "They replace HL7 messaging standards"
        ],
        correctIndex: 2,
        explanation: "Standardized terminology supports semantic interoperability by providing shared representations for laboratory concepts. Messaging standards and terminology standards serve complementary rather than interchangeable roles."
      },
      {
        question: "A laboratory transmits a local organism code that is meaningful inside its LIS but unknown to the receiving public-health system. The message is delivered successfully. What is the main informatics problem?",
        choices: [
          "Analytical sensitivity failure",
          "Specimen contamination",
          "Network downtime",
          "Semantic interoperability failure caused by inadequate terminology mapping"
        ],
        correctIndex: 3,
        explanation: "The transport layer succeeded, but the receiving system may not understand the local code. Controlled terminology mapping is therefore necessary when local representations differ from those expected by the receiver."
      },
      {
        question: "Which statement best distinguishes electronic laboratory reporting (ELR) from electronic case reporting (eCR)?",
        choices: [
          "ELR primarily communicates laboratory information to public health, whereas eCR automates transmission of reportable case information from electronic health records",
          "ELR and eCR are two names for exactly the same workflow",
          "ELR is used only for genomic sequencing, whereas eCR is used only for culture results",
          "eCR replaces the need for laboratory reporting"
        ],
        correctIndex: 0,
        explanation: "ELR and eCR are complementary public-health data-exchange workflows. ELR centers on laboratory information, while eCR automates case-report information from the electronic health record."
      },
      {
        question: "Why should a laboratory avoid hard-coding public-health reporting logic and then leaving it unchanged indefinitely?",
        choices: [
          "Electronic reporting is intended to be temporary",
          "Reporting requirements, terminology, implementation guidance, and receiving-system expectations can change and therefore require governance and maintenance",
          "Public-health agencies cannot receive structured laboratory data",
          "Every reporting rule must be manually recreated for each patient"
        ],
        correctIndex: 1,
        explanation: "Public-health interfaces are maintained clinical information systems. Laboratories need ownership, change control, testing, and ongoing governance as reporting requirements and technical specifications evolve."
      }
    ]
  },
};

export const lessons: LessonDefinition[] = manifests.map((manifest, index) => {
  const item = cases[manifest.slug];

  if (!item) {
    throw new Error(`Missing case data for ${manifest.slug}`);
  }

  return {
    manifest: {
      ...manifest,
      id: String(index + 1).padStart(2, "0"),
      sources: [
        pierSource,
        ...(manifest.apiSessions.length > 0
          ? [apiSource(manifest.apiSessions)]
          : []),
        ...(manifest.sources ?? []),
      ],
    },
    artifactTitle: item.artifact,
    evidence: item.evidence.map(([label, value, tone]) => ({
      label,
      value,
      tone: tone ?? "neutral",
    })),
    trace: item.trace.map(([system, role, sees, implication]) => ({
      system,
      role,
      sees,
      implication,
    })),
    questions: item.questions.map((question, questionIndex) => ({
      id: `${manifest.slug}-q${questionIndex + 1}`,
      question: question.question,
      choices: [...question.choices],
      correctIndex: question.correctIndex,
      explanation: question.explanation,
    })),
  };
});

export const lessonBySlug = new Map(lessons.map((lesson) => [lesson.manifest.slug, lesson]));
export const topicBySlug = new Map(topics.map((topic) => [topic.slug, topic]));
