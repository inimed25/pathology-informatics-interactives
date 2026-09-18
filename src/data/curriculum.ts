import type { LessonDefinition, LessonManifest, SourceReference, TopicDefinition } from "./types";

export const PIER_URL = "https://www.apcprods.org/assets/docs/pier/R5/PIER_Essentials_R5.pdf";
export const API_URL = "https://www.pathologyinformatics.org/teaching-slide-sets";

const pierSource: SourceReference = {
  label: "PIER Essentials Release 5",
  url: PIER_URL,
  license: "CC BY-NC-ND 4.0",
use: "Curriculum alignment and competency mapping only; educational text, cases, assessment questions, and figures are independently authored and are not adapted from or reproduced from PIER materials.",
};

const apiSource = (sessions: number[]): SourceReference => ({
  label: `API Pathology Informatics Introductory Course — session${sessions.length === 1 ? "" : "s"} ${sessions.join(", ")}`,
  url: API_URL,
  license: "CC BY 4.0",
use: "Curriculum alignment and topic identification only; educational text, cases, assessment questions, and figures are independently authored and supported by cited primary, authoritative, or peer-reviewed sources.",
});

const microbiologyFoundationsSources: SourceReference[] = [
  {
    label: "CDC — Introduction to Laboratory Informatics Series",
    url: "https://www.cdc.gov/lab-training/php/courses/introduction-lab-informatics.html",
    license: "U.S. government educational resource; source cited",
    use: "Foundational framework for laboratory informatics, including data relationships, data standards, information flow, LIS functionality, interoperability, and the life of a specimen and laboratory result.",
  },
  {
    label: "LOINC Users' Guide — Microbiology",
    url: "https://loinc.org/kb/users-guide/special-cases/microbiology",
    license: "LOINC terminology documentation; source cited",
    use: "Microbiology-specific guidance on representing culture observations, specimens, result status, organism results, and antimicrobial susceptibility information using standardized terminology.",
  },
  {
    label: "Rhoads et al. — Clinical Microbiology Informatics",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4187636/",
    license: "Copyrighted peer-reviewed article; cited, not reproduced",
    use: "Clinical microbiology-specific overview of laboratory information systems, interfaces, decision support, automation, electronic reporting, and other informatics applications.",
  },
];
const antimicrobialDecisionSupportSources: SourceReference[] = [
  {
    label: "CLSI M100 — Performance Standards for Antimicrobial Susceptibility Testing",
    url: "https://clsi.org/standards/products/microbiology/documents/m100/",
    license: "Copyrighted standard; cited, not reproduced",
    use: "Primary U.S.-oriented reference for antimicrobial susceptibility interpretive criteria, breakpoint terminology, and AST reporting considerations.",
  },
  {
    label: "CLSI — Breakpoint Implementation Toolkit",
    url: "https://clsi.org/resources/breakpoint-implementation-toolkit/",
    license: "Copyrighted educational resource; cited, not reproduced",
    use: "Implementation framework for reviewing, updating, validating, and documenting antimicrobial susceptibility breakpoints in clinical laboratory systems.",
  },
  {
    label: "CLSI M39 — Analysis and Presentation of Cumulative Antimicrobial Susceptibility Test Data",
    url: "https://clsi.org/standards/products/microbiology/documents/m39/",
    license: "Copyrighted standard; cited, not reproduced",
    use: "Framework for analysis and presentation of cumulative antimicrobial susceptibility data and antibiograms.",
  },
  {
    label: "EUCAST — Expert Rules and Expected Phenotypes",
    url: "https://www.eucast.org/expert_rules_and_expected_phenotypes",
    license: "Copyrighted technical resource; cited, not reproduced",
    use: "Supplemental framework for knowledge-based interpretation of antimicrobial susceptibility patterns, expected phenotypes, and expert-rule concepts.",
  },
];

const interfacesAutomationSources: SourceReference[] = [
  {
    label: "CLSI M67 — Verification of Laboratory Automation in Microbiology",
    url: "https://clsi.org/shop/standards/m67/",
    license: "Copyrighted standard; cited, not reproduced",
    use: "Microbiology-specific guidance for verification and implementation of laboratory automation, including results transmission to the LIS, quality assurance, downtime, and verification after relevant changes.",
  },
  {
    label: "CLSI AUTO16 — Next-Generation In Vitro Diagnostic Instrument Interface",
    url: "https://clsi.org/shop/standards/auto16/",
    license: "Copyrighted standard; cited, not reproduced",
    use: "Technical framework for data exchange between in vitro diagnostic instruments, middleware, laboratory information systems, and other systems managing analytical workflows.",
  },
  {
    label: "CMS — CLIA State Operations Manual, Appendix C",
    url: "https://www.cms.gov/regulations-and-guidance/legislation/clia/downloads/app-c_survey-procedures-igs-for-labs-labs-svcs-final.pdf",
    license: "U.S. government regulatory and interpretive guidance; source cited",
    use: "CLIA regulatory and interpretive framework for accurate, reliable, and timely transmission of patient-specific laboratory information to the final report destination.",
  },
    {
    label: "College of American Pathologists — Interface Result Integrity",
    url: "https://www.cap.org/member-resources/clinical-informatics-resources/dont-forget-your-rules-when-harmonizing-laboratory-testing-across-multiple-sites",
    license: "Copyrighted accreditation guidance; cited, not reproduced",
    use: "CAP accreditation guidance addressing verification of accurate patient-result transmission before interface implementation and after changes that could affect result integrity.",
  },
  {
    label: "Rhoads et al. — Clinical Microbiology Informatics",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4187636/",
    license: "Copyrighted peer-reviewed article; cited, not reproduced",
    use: "Clinical microbiology informatics review describing MALDI-TOF identification as comparison of microbial mass spectra with spectral reference databases and discussing the importance of database quality for accurate organism identification.",
  },
  {
    label: "FDA — Multiplex Nucleic Acid Assays for Identification of Microorganisms and Resistance Markers from Positive Blood Cultures",
    url: "https://www.fda.gov/medical-devices/guidance-documents-medical-devices-and-radiation-emitting-products/multiplex-nucleic-acid-assay-identification-microorganisms-and-resistance-markers-positive-blood",
    license: "U.S. government regulatory guidance; source cited",
    use: "FDA guidance for multiplex positive-blood-culture molecular assays that detect microorganisms and antimicrobial resistance markers, including intended-use and interpretation limitations and the role of conventional culture and susceptibility testing.",
  },
];

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
  {
  label: "CLSI MM18 — Interpretive Criteria for Identification of Bacteria and Fungi by Targeted DNA Sequencing",
  url: "https://clsi.org/shop/standards/mm18/",
  license: "Copyrighted standard; cited, not reproduced",
  use: "Sanger-based targeted sequencing of cultured bacterial and fungal isolates, including 16S rRNA and ITS targets, sequence quality, reference databases, interpretation, reporting, and limitations; cited for targeted-sequencing principles rather than NGS-specific guidance.",
},
  {
  label: "Chiu & Miller — Clinical Metagenomics",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6858796/",
  license: "Peer-reviewed open-access article; source cited",
  use: "Clinical metagenomic sequencing workflow, host and background sequence, contamination, taxonomic classification, reference databases, clinical interpretation, validation, and bioinformatics quality management.",
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
   label: "Burns et al. — The Use of Machine Learning for Image Analysis Artificial Intelligence in Clinical Microbiology",
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
  {
      label: "CDC — Electronic Case Reporting (eCR)",
    url: "https://www.cdc.gov/ecr/php/about/",
    license: "U.S. government educational resource; source cited",
    use: "Definition and workflow of electronic case reporting, including automated exchange of case-report information between electronic health records and public-health agencies.",
  },
];
const comprehensiveCaseSources: SourceReference[] = [
  ...microbiologyFoundationsSources,
  ...antimicrobialDecisionSupportSources,
  ...interfacesAutomationSources,
  ...microbialGenomicsSources,
  ...digitalMicrobiologySources,
  ...publicHealthSources,
];
export const topics: TopicDefinition[] = [
  {
    id: 1,
    slug: "microbiology-informatics",
    title: "Clinical Microbiology Informatics",
    objectives: ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7"],
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
    sources: microbiologyFoundationsSources,
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
sources: antimicrobialDecisionSupportSources,
hasLocalPracticum: false,
  },
  {
    slug: "microbiology-interfaces-automation",
    title: "Instrumentation, Interfaces, and Laboratory Automation",
    topic: 1,
    pierObjectives: ["1.3"],
    durationMinutes: 25,
    difficulty: "applied",
    interactionKinds: [],
    apiSessions: [],
sources: interfacesAutomationSources,
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
    {
  slug: "microbiology-comprehensive-cases",
  title: "Comprehensive Clinical Microbiology Informatics Cases",
  topic: 1,
  pierObjectives: ["1.7"],
  durationMinutes: 30,
  difficulty: "applied",
  interactionKinds: [],
  apiSessions: [],
  sources: comprehensiveCaseSources,
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
          "Microbiology results are primarily more complex because preliminary findings should be stored as free text while final findings should be stored as discrete data",
          "Microbiology results are primarily more complex because each stage of testing creates an independent observation that does not need to remain linked to earlier stages",
          "Microbiology results are primarily more complex because preliminary and final findings must be maintained in separate information systems"
        ],
        correctIndex: 0,
        explanation: "Microbiology workflows can generate interconnected and evolving information such as specimen details, organism identification, susceptibility results, preliminary findings, and final interpretations."
      },
      {
        question: "Which statement best distinguishes the LIS from the EHR in a microbiology workflow?",
        choices: [
          "The LIS stores instrument-generated data, while the EHR applies the laboratory's interpretive rules before results are displayed",
          "The LIS manages laboratory workflow and results, while the EHR presents laboratory information within the broader clinical record",
          "The LIS manages instrument connections, while the EHR manages specimen processing, verification, and laboratory result correction",
          "The LIS manages results until transmission, after which the EHR becomes the authoritative system for correcting laboratory content"
        ],
        correctIndex: 1,
        explanation: "The LIS supports laboratory-specific workflows and result management, whereas the EHR integrates laboratory information with the broader patient record."
      },
            {
        question: "An identification instrument correctly identifies an isolate, but the organism uses a local instrument code that is mapped incorrectly in the interface. The LIS therefore displays a different organism even though the message transmitted successfully. What is the primary informatics problem?",
        choices: [
          "The analytical identification failed because the instrument generated the wrong organism",
          "The specimen-tracking workflow failed because the result was associated with the wrong patient",
          "Semantic interoperability failed because the organism mapping did not preserve the intended concept",
          "The interface transport failed because the electronic message did not reach the LIS"
        ],
        correctIndex: 2,
        explanation: "The analytical identification and electronic transmission can both succeed while the downstream meaning is wrong. Instruments and receiving systems may use different organism identifiers, so mappings must preserve the intended organism concept across the information pathway."
      },
      {
        question: "Why is structured microbiology data valuable for downstream informatics applications?",
        choices: [
          "Structured data allow receiving systems to infer equivalent concepts reliably even when terminology mappings have not been defined",
          "Structured data preserve meaning automatically when sending and receiving systems use fields with different definitions",
          "Structured data make free text unnecessary for contextual or interpretive information that does not fit predefined fields",
          "Structured data allow information to be more reliably searched, exchanged, and used by computational systems"
        ],
        correctIndex: 3,
        explanation: "Structured representation supports consistent exchange and computational use of laboratory information, although terminology, mappings, interfaces, and governance still require validation."
      },
      {
        question: "During implementation of a new electronic result workflow, which responsibility most clearly requires microbiology director oversight?",
        choices: [
          "Does the information retain its intended meaning and reach the appropriate users and systems throughout the workflow?",
          "Confirming analytical performance while allowing the technical team to determine independently how results should be represented downstream",
          "Approving local organism codes while leaving preservation of specimen-organism-susceptibility relationships to each receiving system",
          "Confirming successful interface acknowledgments before go-live while delegating downstream display review and post-implementation monitoring"
        ],
        correctIndex: 0,
      explanation: "The microbiology director helps ensure that laboratory information remains clinically accurate and meaningful as it moves through systems and reaches downstream users. Technical implementation may involve LIS, interface, and IT specialists, but microbiology expertise is essential for validating the clinical meaning of the workflow."
      },
      {
        question: "A blood-culture positivity dashboard shows a marked decrease immediately after an LIS interface change. The dashboard calculation is reproducible. What should be evaluated before concluding that positivity truly decreased?",
        choices: [
          "Compare total culture volume alone, because a stable total would exclude an interface-related data problem",
          "Review the organisms among positive cultures first, because a change in species distribution would establish whether the trend is real",
          "Interpret the trend using the unchanged dashboard logic and evaluate interface integrity as a separate validation issue",
          "Compare the source population, record completeness, relevant mappings, and denominator before and after the interface change"
        ],
        correctIndex: 3,
        explanation: "A technically correct calculation can still be misleading if the underlying population, completeness, mappings, provenance, or denominator changed. Data fitness should be verified before interpreting the observed difference as a true clinical or laboratory trend."
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
        question: "Why is it important for an AST information system to distinguish an MIC from its categorical susceptibility interpretation?",
        choices: [
          "Because the categorical interpretation is the original analytical result, while the MIC is recalculated whenever breakpoints change",
          "Because the MIC is interpreted from the patient's clinical history, while the categorical interpretation is generated directly by the AST method",
          "Because storing both allows the LIS to report whichever value indicates the greater degree of antimicrobial resistance",
          "Because the MIC is an analytical measurement, while the categorical interpretation depends on applicable interpretive criteria that may change"
        ],
        correctIndex: 3,
        explanation: "The MIC is the analytical susceptibility measurement, while the categorical interpretation depends on the applicable interpretive criteria. Keeping these concepts distinct is important because interpretation can change when breakpoints or other relevant criteria are updated even when the measured MIC does not."
      },
      {
        question: "What is the primary informatics purpose of an AST expert rule?",
        choices: [
          "Apply defined knowledge-based logic to susceptibility data so important or inconsistent organism-drug patterns can be flagged or handled appropriately",
          "Convert every MIC into a susceptibility category without requiring organism-drug-specific breakpoint configuration",
          "Apply local antibiogram percentages to modify the categorical interpretation of an individual patient's isolate",
          "Translate an MIC directly into a patient-specific treatment recommendation without additional clinical information"
        ],
        correctIndex: 0,
        explanation: "Expert systems apply predefined logic to AST patterns. They can support recognition and handling of clinically important or biologically inconsistent results, but their rules require governance and do not replace professional judgment."
      },
      {
        question: "A new AST instrument sends the correct MIC to the LIS, but the susceptibility category displayed in the EHR is incorrect. What should the informatics investigation prioritize?",
        choices: [
          "Repeating the MIC because disagreement with the displayed category establishes that the analytical measurement failed",
          "Reviewing only the EHR display label because a correct MIC excludes problems in upstream interpretive configuration",
          "Confirming the category generated by the instrument without reviewing later mappings or transformations in the reporting pathway",
          "The breakpoint version, interpretive rules, mappings, and transformations across the instrument-to-EHR pathway"
        ],
        correctIndex: 3,
        explanation: "A correct analytical measurement can still produce an incorrect downstream report if interpretive criteria, expert rules, mappings, or interface transformations are wrong or outdated."
      },
      {
        question: "A laboratory is building an automated antibiogram from LIS data. Individual AST results are accurate, but the resulting susceptibility summary appears inconsistent with prior reports. Which issue is most important to evaluate?",
        choices: [
          "Whether the source population, duplicate-isolate handling, inclusion rules, organism/antimicrobial mappings, and extraction logic are appropriate",
          "Whether the final percentages resemble the prior report closely enough to confirm that the automated extraction is functioning correctly",
          "Whether a sample of individual results is accurate, because valid source results establish that the aggregate calculation is also valid",
          "Whether uncommon resistance patterns can be excluded from the dataset until the summary becomes consistent with historical results"
        ],
        correctIndex: 0,
        explanation: "An automated antibiogram depends on more than accurate individual AST results. The source population, inclusion and duplicate-isolate rules, mappings, and extraction logic must support the intended cumulative susceptibility summary."
      },
      {
        question: "Why must AST expert rules and breakpoint configurations be actively governed rather than left indefinitely at vendor defaults?",
        choices: [
          "Keeping the original rules unchanged preserves longitudinal consistency, so later standards changes should be addressed only through report comments",
          "Vendor maintenance establishes that current rules are appropriate locally as long as the software update installs successfully",
          "Breakpoint governance is primarily needed when the AST method changes because interpretive-criteria updates do not affect stored measurements",
          "Interpretive standards and laboratory policies can change, and outdated logic may produce inappropriate susceptibility reporting"
        ],
        correctIndex: 3,
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
  question: "What is a major advantage of a bidirectional interface between the LIS and a microbiology instrument?",
  choices: [
    "It allows orders and identifiers to move from the LIS to the instrument while results and other data can return to the LIS",
    "It allows orders and results to move in both directions, so each system can maintain independent patient and specimen identifiers",
    "It allows mappings maintained in the LIS to be applied by the instrument without corresponding interface configuration",
    "It ensures that corrections entered in either system are automatically synchronized throughout the complete reporting pathway"
  ],
  correctIndex: 0,
  explanation: "Bidirectional communication supports information flow in both directions. For example, orders and patient or specimen identifiers may be transmitted from the LIS to the instrument, while results and other instrument-generated data return to the LIS. This can reduce manual transcription and support workflow efficiency, but bidirectionality does not eliminate the need for accurate identifiers, mappings, configuration, validation, or exception handling."
},
     {
  question: "Which validation plan provides the strongest evidence that a new microbiology instrument interface is ready for clinical use?",
  choices: [
    "Confirm that the instrument can connect to the network and that transmitted results can reach the EHR",
    "Test multiple representative positive and negative results and confirm that the expected values are transmitted",
    "Use the vendor's interface test results and locally confirm one common result because the underlying interface design is shared across installations",
    "Verify representative orders, identifiers, results, mappings, exceptions, and downstream display across the intended end-to-end workflow"
  ],
  correctIndex: 3,
  explanation: "Connectivity, successful transmission, and vendor testing can each provide useful information, but none alone establishes that the locally implemented clinical workflow is functioning correctly. Local interface validation should represent the intended use and verify relevant orders, identifiers, results, mappings, transformations, exceptions, and downstream representation because laboratory-specific configurations and system relationships can affect result integrity."
},
    {
  question: "Which statement best describes middleware in a clinical microbiology information architecture?",
  choices: [
    "It is software used primarily to store the complete longitudinal patient record while the LIS manages only instrument communication",
    "It is software positioned between systems that can facilitate data exchange, workflow management, transformation, or rules-based processing",
    "It is a standardized interface protocol that determines how all microbiology instruments format and transmit results",
    "It is software that replaces the LIS by directly managing instrument data and reporting all results to the EHR"
  ],
  correctIndex: 1,
  explanation: "Middleware is software that operates between instruments and other information systems and may support functions such as routing, transformation, workflow management, rules, or data exchange. Its role is implementation-dependent: middleware is not itself a universal messaging standard, an EHR, or automatically a replacement for the LIS. Understanding the specific functions assigned to middleware is important when tracing data flow, validating interfaces, troubleshooting results, and planning downtime or change control."
},
     {
  question: "A laboratory introduces automated plate inoculation, incubation, transport, and digital imaging. Why is this also an informatics implementation rather than only a hardware implementation?",
  choices: [
    "The physical automation can be validated independently because specimen identity is established before plates enter the automated workflow",
    "Automated systems generate and exchange specimen, workflow, image, and status information that must remain correctly linked across the laboratory process",
    "The implementation becomes an informatics workflow only if digital images are transmitted outside the automation system",
    "The implementation becomes an informatics workflow only if the automation software is permitted to autoverify patient results"
  ],
  correctIndex: 1,
  explanation: "Laboratory automation connects physical specimen processing with information flow. Specimen identity, location, processing steps, incubation status, images, interpretations, and downstream results may be generated or updated across interconnected systems. These data must remain correctly associated with the physical specimen throughout the automated workflow."
},
{
  question: "After a validated microbiology interface is implemented, a software update changes an organism mapping table. Results continue transmitting without interface errors. How should the laboratory respond?",
  choices: [
    "Confirm that representative results still transmit successfully because continued transmission indicates that the interface remains valid",
    "Assess whether the mapping change could affect result integrity and perform appropriate representative verification under the laboratory's change-control process",
    "Repeat the original analytical validation of the identification instrument because the organism terminology has changed",
    "Review the new mapping table for accuracy and resume routine reporting without additional verification if no obvious configuration errors are found"
  ],
  correctIndex: 1,
  explanation: "A mapping change can affect the meaning of transmitted information even when the interface remains connected and results continue to move between systems. The laboratory should assess the scope and potential impact of the change and perform representative verification appropriate to that risk. Successful transmission, review of the mapping table, or repeating unrelated analytical validation alone would not establish that affected results remain correct throughout the reporting workflow."
},
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
        question: "An influenza A sequencing workflow produces high-quality reads across most of the viral genome. One genomic region has almost no usable reads, although the average sequencing depth across the genome is high. What does this imply about coverage?",
        choices: [
          "The entire genome can be interpreted confidently because the average sequencing depth is high",
          "The poorly covered region may remain inadequately characterized despite high average depth elsewhere",
          "The finding primarily indicates poor mapping quality across the entire genome",
          "High average depth compensates for inadequate breadth of coverage"
        ],
        correctIndex: 1,
        explanation: "Depth and breadth describe different aspects of coverage. Depth describes how many reads support a genomic position, while breadth describes how much of the intended genome or target has adequate coverage. High depth across well-covered regions cannot compensate for a region with little or no usable sequence. Therefore, conclusions about that poorly covered region may remain unsupported even when the overall average depth looks excellent."
      },
      {
        question: "A sequencing read from a Klebsiella pneumoniae isolate has high base-quality scores, but the sequence is very similar to DNA found at several locations in the genome. How should these quality measures be interpreted?",
        choices: [
          "The read can be placed confidently because high base quality also indicates high mapping quality",
          "The nucleotide calls may be reliable, but the genomic location may still be uncertain",
          "The read should be excluded because sequence occurring at multiple locations necessarily indicates contamination",
          "The read demonstrates that all matching genomic locations contain the same sequence"
        ],
        correctIndex: 1,
        explanation: "Base quality and mapping quality answer different questions. Base quality estimates confidence that individual nucleotides were read correctly. Mapping quality reflects confidence that a read has been assigned to the correct location relative to a reference. A read can therefore contain highly reliable nucleotide calls while still being difficult to place uniquely when similar or repetitive sequences occur at multiple genomic locations."
      },
      {
        question: "A laboratory is analyzing WGS data from a Klebsiella pneumoniae isolate. The team wants to determine whether the isolate contains genomic content that may not be represented in the selected reference genome, including potentially novel plasmid-associated sequence. Which approach is most directly suited to that question?",
        choices: [
          "Reference alignment, because all reads must first match the reference before novel sequence can be identified",
          "Increasing sequencing depth, because sufficient depth eliminates dependence on the reference",
          "De novo assembly, because reads can be reconstructed into longer sequences without using a particular reference as the primary reconstruction framework",
          "Variant calling against the reference, because VCF represents all genomic content"
        ],
        correctIndex: 2,
        explanation: "Reference alignment asks where reads fit relative to a selected reference and is useful for analyses such as variant detection and comparison within a common coordinate system. De novo assembly instead reconstructs overlapping reads into contigs without requiring placement onto a particular reference as the primary reconstruction strategy. This can help characterize genomic content that is absent from the selected reference. Importantly, de novo assembly is not automatically more accurate or complete; its quality still depends on the sequencing data, assembly method, and intended use."
      },
      {
        question: "WGS of a Klebsiella pneumoniae isolate detects a carbapenemase gene using high-quality short-read sequencing. The clinical team asks whether the gene is located on a plasmid that may facilitate its spread between bacteria. Which response best distinguishes gene detection from determination of genomic context?",
        choices: [
          "Detection of the gene establishes that it is plasmid-associated because resistance genes are generally carried on plasmids",
          "High sequencing depth is sufficient to determine whether the gene is located on a plasmid or chromosome",
          "The gene should be considered chromosomal unless plasmid DNA was separately extracted before sequencing",
          "Gene detection establishes that the sequence is present, but determining its genomic context may require additional evidence capable of linking the gene to surrounding sequence"
        ],
        correctIndex: 3,
        explanation: "Detecting a resistance gene and determining where that gene resides are different analytical questions. Short reads may provide strong evidence that the gene is present while still being unable to resolve its surrounding genomic structure, particularly when repetitive sequences or mobile genetic elements complicate reconstruction. Longer reads or other appropriately validated approaches may provide the additional sequence context needed to link the gene confidently to a plasmid or chromosome. High depth alone does not solve this structural problem."
      },
      {
        question: "Sequencing of an influenza A specimen identifies a nucleotide variant in 30% of the informative reads at a well-covered position. The remaining reads support the reference nucleotide. What can be concluded from the VAF alone?",
        choices: [
          "The specimen contains two distinct influenza strains because an intermediate VAF is sufficient to establish a mixed infection",
          "The variant is unlikely to represent a biological minority population because clinically meaningful variants should constitute most informative reads",
          "The 30% VAF indicates that a subset of the sequence reads supports the variant, but additional evidence is needed to determine whether this reflects a mixed population, within-host diversity, contamination, artifact, or another explanation",
          "The consensus sequence should contain the variant because VAF values above 25% meet a general consensus threshold"
        ],
        correctIndex: 2,
        explanation: "VAF describes the proportion of informative reads supporting a variant; it does not by itself identify what biological population produced those reads. A 30% VAF means that approximately 30% of informative reads at that position support the variant. It could reflect a minority microbial population, within-host diversity, a mixed infection, contamination, or sequencing/alignment artifact. Even a high VAF does not by itself establish a new strain; strain or lineage interpretation generally depends on a broader pattern of genomic information. Additional quality data, controls, genomic context, and validated interpretive criteria are therefore needed."
      },
      {
        question: "A laboratory compares Klebsiella pneumoniae isolates during a possible hospital outbreak. One validated workflow reports the number of high-confidence nucleotide differences across comparable genomic positions. Another assigns sequence variants to a standardized set of core-genome loci and compares the resulting allele profiles. Which statement best describes these approaches?",
        choices: [
          "The first is SNP-based analysis, while the second is cgMLST. Their reported distances represent genomic differences differently and should not be treated as interchangeable",
          "Both are SNP-based analyses because every genomic comparison ultimately measures individual nucleotide differences",
          "The first is cgMLST, while the second is wgMLST because both evaluate multiple genomic locations",
          "The methods should produce numerically equivalent distances when applied to the same isolates"
        ],
        correctIndex: 0,
        explanation: "SNP-based analysis compares nucleotide-level differences across genomic positions included in a defined analysis. cgMLST instead compares allele assignments across a standardized set of core-genome loci. Thus, five SNPs and five allele differences are not equivalent measurements, even if they come from the same isolates. Reference or scheme selection, quality control, filtering, and other analytical choices can also influence the resulting comparison."
      },
      {
        question: "During investigation of a possible hospital outbreak, WGS shows that two Klebsiella pneumoniae isolates are highly genetically related using the laboratory's validated genomic-analysis workflow. What conclusion does this result support?",
        choices: [
          "The isolates' genomic similarity proves that Patient A transmitted the organism directly to Patient B",
          "The isolates' genomic similarity supports a recent shared ancestry or epidemiologic relationship, but genomic data alone do not establish direct transmission or its direction",
          "The isolates must have been acquired during the same hospitalization because highly related isolates cannot circulate outside the hospital",
          "Direct transmission can be established once the genomic distance falls below any published SNP or allele threshold"
        ],
        correctIndex: 1,
        explanation: "High genomic relatedness can provide strong evidence that isolates are epidemiologically associated, but it does not by itself establish who infected whom or even that transmission occurred directly between those two patients. A shared source, unsampled intermediate patient, environmental reservoir, or other transmission pathway may produce closely related isolates. Interpretation therefore integrates genomic findings with timing, location, exposures, infection-control information, and other epidemiologic evidence. There is also no universal SNP or allele cutoff that can be applied across organisms and analytical methods to prove direct transmission."
      },
      {
        question: "A laboratory updates the reference genome used in a validated SNP-based outbreak-analysis pipeline. The software runs successfully after the change and produces genomic-distance results for all isolates. What should the laboratory do before clinical use?",
        choices: [
          "Confirm that the updated pipeline completes successfully and that routine sequence-quality metrics remain within range",
          "Reprocess representative read sets and confirm that the pipeline produces genomic distances without reviewing differences from the prior workflow",
          "Evaluate the effect of the reference change on variant calling, comparable genomic positions, genomic distances, and the laboratory's intended interpretation before using the updated workflow clinically",
          "Select the reference that yields the broadest comparable genome because maximizing included positions establishes clinical suitability"
        ],
        correctIndex: 2,
        explanation: "A computational pipeline completing without an error only demonstrates that it ran; it does not establish that the resulting analysis remains appropriate for its intended clinical or public-health use. Reference selection can influence read alignment, which positions are reliably comparable, variant calls, and ultimately calculated genomic distances. A meaningful reference or pipeline change therefore requires evaluation of its downstream analytical and interpretive effects before results are relied upon."
      },
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
        question: "A digital microbiology algorithm was validated to identify culture plates with no visible growth. Six months after implementation, performance worsens specifically for one type of culture medium after the laboratory changes to a different manufacturer. What does this pattern suggest?",
        choices: [
          "Because the software is unchanged, the laboratory should investigate imaging hardware before considering the change in culture medium",
          "Algorithm performance can depend on the data and environment in which it operates, so changes in inputs or workflow can affect performance and may require monitoring and reassessment",
          "The original validation remains sufficient because the performance change is limited to one medium and does not affect the overall dataset",
          "The laboratory should restore prior performance by adjusting the decision threshold before determining whether the input distribution changed"
        ],
        correctIndex: 1,
        explanation: "Algorithm performance depends not only on the software itself but also on the data and workflow in which it operates. Relevant factors can include culture-medium type or manufacturer, incubation conditions, image-acquisition timing, illumination, focus, resolution, imaging hardware, organism distribution, specimen characteristics, and local workflow. Changes in these factors can shift the data presented to the algorithm even when its code has not changed. Post-implementation monitoring can identify performance changes and help determine whether investigation, verification, workflow modification, or other corrective action is needed."
      },
      {
        question: "A digital microbiology algorithm identifies culture plates requiring additional review with 95% accuracy during validation. After implementation, microbiologists report that the system generates large numbers of unnecessary review flags during the busiest part of the day, slowing plate review and occasionally delaying attention to higher-priority cultures. How should the laboratory evaluate this result?",
        choices: [
          "The algorithm remains clinically successful because 95% accuracy establishes adequate performance",
          "The laboratory should repeat the original accuracy study because workflow effects are adequately addressed once the model-performance result is reproduced",
          "Analytical or model performance is only part of implementation; the laboratory should also evaluate how the system affects workflow, workload, prioritization, errors, turnaround time, and its intended clinical purpose",
          "The laboratory should increase the algorithm's decision threshold until the number of alerts becomes acceptable, without additional evaluation"
        ],
        correctIndex: 2,
        explanation: "Strong model-performance metrics do not by themselves establish clinical utility. A digital system can perform its defined computational task well while still creating excessive workload, disrupting prioritization, delaying turnaround, or otherwise failing to support its intended clinical or operational purpose."
      },
      {
        question: "A digital plate-reading system has been validated to automatically classify certain culture plates as having no visible growth. During routine use, the system encounters an image that does not meet its predefined image-quality requirements because part of the plate is obscured. How should the system handle this image?",
        choices: [
          "Report no growth when the unobscured portion meets the algorithm's negative-growth criteria",
          "Generate a classification but attach an image-quality warning for review after the result enters the reporting workflow",
          "Route the case through a defined exception pathway, such as human review, rather than forcing an automated classification outside acceptable input conditions",
          "Repeat automated acquisition until the system produces a classification, regardless of whether the image-quality requirement is met"
        ],
        correctIndex: 2,
        explanation: "Automated workflows need defined exception pathways for cases in which the system cannot safely perform its intended task. Depending on the implementation, image-quality failures or unexpected inputs may trigger a hold, flag, repeat acquisition, human review, or another validated workflow. Human oversight can be concentrated where uncertainty, failure, or conditions outside established boundaries require judgment."
      },
      {
        question: "A laboratory has extensively validated an AI algorithm for classifying digital culture-plate images. After implementation, the algorithm correctly identifies a positive plate, but an interface mapping error associates its output with the wrong specimen record in the LIS. What does this scenario demonstrate?",
        choices: [
          "The algorithm was inadequately trained because a properly trained model would detect the LIS error",
          "Strong algorithm performance does not establish validity of the complete clinical workflow; specimen association, interfaces, mappings, result routing, and downstream reporting also require appropriate validation and monitoring",
          "The laboratory should validate only the LIS because the algorithm produced the correct classification",
          "End-to-end validation is unnecessary when both the algorithm and LIS have been validated separately"
        ],
        correctIndex: 1,
        explanation: "An algorithm can perform its computational task correctly while the overall clinical system still produces an unsafe result. End-to-end implementation includes specimen and image identity, image acquisition, algorithmic analysis, result association, interfaces and mappings, the LIS, and downstream reporting or action. Validation therefore needs to support the complete intended workflow."
      },
      {
        question: "A digital microbiology system flags a culture plate as likely no growth. During review, however, the microbiologist sees a subtle colony morphology that appears clinically significant and is not typical of the images on which the system was validated. How should the discrepancy be handled?",
        choices: [
          "Accept the automated classification because the algorithm was validated for this task and isolated disagreements are expected within its measured error rate",
          "Override the automated result based on the microbiologist's interpretation, but treat the disagreement as an isolated case that does not require further review if the final report is corrected",
          "Follow the defined review or escalation process, use appropriate human judgment to resolve the result, and capture the discrepancy for quality monitoring or investigation when appropriate",
          "Withhold the result until the algorithm can be retrained to recognize the observed morphology"
        ],
        correctIndex: 2,
        explanation: "Decision support should not create automation bias, in which users accept a computational output simply because the system produced it. Human oversight should provide a defined way to recognize, investigate, and appropriately override outputs that conflict with relevant microbiologic evidence or fall outside expected conditions. Capturing meaningful discrepancies can also reveal systematic failure modes, changing inputs, or conditions that warrant reassessment."
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
        question: "A patient has a laboratory-confirmed infection that is reportable to public health. The microbiology laboratory electronically sends the organism and test result to the health department. Separately, information from the patient's EHR, including relevant clinical and demographic information, is electronically submitted as part of case reporting. Which statement best describes these workflows?",
        choices: [
          "Both are ELR because any electronic information sent to public health is considered laboratory reporting",
          "The laboratory-result transmission is ELR, while automated transmission of reportable case information from the EHR is eCR; the two can provide complementary information to public health",
          "ELR and eCR are competing standards, so a health department generally uses one or the other",
          "eCR is the process by which the laboratory converts local test codes into LOINC codes before sending an ELR message"
        ],
        correctIndex: 1,
        explanation: "Electronic laboratory reporting (ELR) communicates structured laboratory information to public-health agencies. Electronic case reporting (eCR) supports automated reporting of reportable case information from the EHR and can include clinical and demographic context. They are distinct but complementary workflows: the laboratory may contribute microbiologic evidence through ELR while eCR contributes broader case information."
      },
      {
        question: "A laboratory correctly validates ELR for a newly reportable organism. A year later, the jurisdiction changes its reporting requirements so that only results meeting additional criteria should be automatically reported. The laboratory's ELR configuration is never updated, so it continues sending results according to the old rule. What informatics principle does this illustrate?",
        choices: [
          "Once an ELR interface has been validated, reporting-rule changes are primarily the responsibility of the receiving public-health agency",
          "The interface should transmit every microbiology result so that public health can determine which results are reportable",
          "Reporting logic is a governed component of the information system; changes in jurisdictional requirements may require review, configuration changes, testing, documentation, and ongoing monitoring",
          "Standard terminology such as LOINC automatically updates a laboratory's jurisdiction-specific reporting rules"
        ],
        correctIndex: 2,
        explanation: "ELR depends not only on transporting and correctly representing results but also on determining what should be reported, under which conditions, and to which destination. Reporting requirements can vary by jurisdiction and change over time, so previously correct automation can become incorrect if reporting logic is not maintained."
      },
      {
        question: "A laboratory is validating ELR for a new molecular assay. Test messages leave the LIS successfully, pass through the interface, and receive acknowledgments from the public-health system. The laboratory therefore concludes that ELR validation is complete. What important step is still missing?",
        choices: [
          "Confirming that the receiving public-health system receives and interprets representative patient, specimen, test, organism or result, and other required information as intended",
          "Replacing all local LIS codes with standardized terminology before the assay can be reported",
          "Confirming that every reportable result is also transmitted through eCR",
          "Demonstrating that the public-health agency uses the laboratory result to initiate an investigation"
        ],
        correctIndex: 0,
        explanation: "Successful transmission and acknowledgment demonstrate important parts of the technical pathway, but end-to-end validation goes further. The laboratory should evaluate whether representative information reaches the intended destination with its meaning preserved, including relevant mappings, reporting logic, routing, receiving-system interpretation, and appropriate exception scenarios."
      },
      {
        question: "A public-health surveillance system shows an apparent increase in infections caused by a particular organism. Before concluding that incidence has truly increased, the laboratory discovers that it recently changed its organism coding and several local organism codes were remapped. What should be evaluated first?",
        choices: [
          "Confirm that the underlying laboratory results were finalized, because final status establishes that the surveillance trend is independent of coding changes",
          "Investigate whether the mapping change altered how organisms are represented, counted, or grouped in the surveillance data before interpreting the apparent trend",
          "Recalculate the trend using only results generated after the terminology change, without reconciling the historical and current coding schemes",
          "Compare the trend with clinical case counts before reviewing the mapping change, because agreement would validate the surveillance data"
        ],
        correctIndex: 1,
        explanation: "Surveillance depends on the quality and interpretability of its underlying data. Changes in mappings, terminology, reporting logic, completeness, duplicates, or other data-processing steps can create apparent changes in surveillance patterns even when the underlying epidemiology has not changed. A change in the data does not necessarily mean a change in the biology."
      },
    ]
  },
  

  "microbiology-comprehensive-cases": {
    artifact: "Integrated clinical microbiology informatics cases",

    evidence: [
      [
        "Capstone",
        "Integrated cases apply concepts across the clinical microbiology informatics curriculum",
        "positive"
      ]
    ],

    trace: [
      [
        "Clinical microbiology informatics workflow",
        "Microbiology director",
        "Integrates laboratory, informatics, quality, and clinical information across systems.",
        "Capstone cases require application of concepts from multiple curriculum modules."
      ]
    ],

    questions: [
  {
    question:
      "A newly implemented microbiology interface transmits an instrument identification correctly, but the EHR displays a different organism. Investigation shows that the transmitted local organism code was mapped to the wrong standardized concept. Which finding best characterizes the primary informatics failure?",
    choices: [
      "The transmitted code reached the receiving system but was associated with the wrong organism concept.",
      "The identification method generated an organism result outside the laboratory's established analytical performance.",
      "The interface altered the specimen identifier while preserving the organism identification generated by the instrument.",
      "The receiving system correctly interpreted the organism but displayed it in a different section of the patient record."
    ],
    correctIndex: 0,
    explanation:
      "This is a semantic interoperability failure. Successful transmission establishes that information moved between systems, but it does not establish that the receiving system preserved its intended meaning. Here, an incorrect terminology mapping caused the organism code to represent the wrong concept."
  },
  {
    question:
      "After correcting the organism mapping, which verification strategy provides the strongest evidence that the interface is ready for clinical use?",
    choices: [
      "Reproduce the originally incorrect organism result and confirm that its mapping has been corrected.",
      "Verify representative organism mappings within the LIS and separately confirm that the EHR receives interface messages.",
      "Test representative organisms, identifiers, mappings, transformations, and downstream displays across the intended end-to-end workflow.",
      "Review the vendor's interface specification and compare the corrected mapping table with its recommended configuration."
    ],
    correctIndex: 2,
    explanation:
      "End-to-end verification provides stronger evidence than checking only the corrected mapping or individual system components. Representative testing should establish that identifiers, terminology mappings, transformations, transmission, and downstream representation preserve the intended information throughout the clinical workflow."
  },

  {
    question:
      "A laboratory updates its AST breakpoint configuration. For a previously tested organism-drug combination, the MIC remains unchanged but the categorical interpretation changes. Which explanation best accounts for this observation?",
    choices: [
      "The unchanged MIC indicates that the categorical change most likely arose from an interface transformation downstream of AST interpretation.",
      "The MIC and categorical interpretation represent independent analytical measurements that may legitimately disagree after an update.",
      "The categorical change indicates that the isolate's susceptibility phenotype changed despite preservation of the original MIC.",
      "The MIC is the measurement, while the category results from applying interpretive criteria that can change independently of that measurement."
    ],
    correctIndex: 3,
    explanation:
      "The MIC is the analytical measurement, whereas the categorical interpretation results from applying breakpoint criteria to that measurement. Updating those criteria can therefore change the reported category without changing the underlying MIC."
  },
  {
    question:
      "During the same breakpoint update, the laboratory discovers that middleware still contains an older interpretive rule. What is the best response?",
    choices: [
      "Correct the middleware rule and verify only isolates whose interpretations differed between the old and new breakpoints.",
      "Reconcile the breakpoint and rule configurations and verify representative affected results through the reporting pathway under documented change control.",
      "Retain the older middleware rule until sufficient prospective patient results are available to compare both configurations.",
      "Disable middleware interpretation and allow the LIS breakpoint configuration to determine all susceptibility reporting."
    ],
    correctIndex: 1,
    explanation:
      "Breakpoint implementation is an end-to-end configuration and change-control issue. The laboratory should reconcile potentially conflicting interpretive logic and verify representative affected results through the intended reporting pathway rather than evaluating only one component in isolation."
  },
        
  {
    question:
      "A rapid molecular panel performed on a positive blood culture detects an organism and a resistance marker before phenotypic AST is available. Which interpretation best supports appropriate reporting?",
    choices: [
      "Report the marker as genotypic resistance information within the assay's validated scope, distinct from the phenotypic AST profile.",
      "Translate the marker into categorical AST results for affected drugs whenever the molecular mechanism is well characterized.",
      "Withhold the resistance marker until phenotypic testing establishes whether its presence produces the expected susceptibility pattern.",
      "Report the marker independently of organism identification so downstream systems can interpret its significance according to local treatment rules."
    ],
    correctIndex: 0,
    explanation:
      "A molecular resistance marker provides genotypic information within the assay's validated intended use and limitations. It should not automatically be converted into phenotypic susceptibility categories. Reporting should preserve the distinction between the molecular finding and the phenotypic AST profile that may subsequently become available."
  },

    {
    question:
      "The resistance marker is transmitted to the EHR as a standalone result without its associated organism or interpretive context. What is the principal informatics concern?",
    choices: [
      "The interface should transmit molecular findings only after phenotypic AST establishes their clinical relevance.",
      "The marker should instead be converted into an organism-level susceptibility category before electronic transmission.",
      "The information model should preserve meaningful relationships among organism identification, resistance marker, interpretation, and report context.",
      "The organism and resistance marker should remain separate because linking data elements introduces additional interface dependencies."
    ],
    correctIndex: 2,
    explanation:
      "Microbiology results often consist of related data elements whose meaning depends on context. The information model and reporting workflow should preserve clinically meaningful relationships among the organism, resistance marker, interpretation, and other report context rather than transmitting a potentially misleading isolated finding."
  },
  {
    question:
      "A validated microbial NGS pipeline for resistance-gene detection receives a reference-database and software update. When the laboratory reprocesses the same FASTQ files, several findings differ from the previous pipeline version. What does this result demonstrate about computational components?",
    choices: [
      "The updated results should supersede the original findings because newer databases generally contain more complete genomic information.",
      "Computational components can influence analytical output and should be governed as components of the validated clinical workflow.",
      "The sequencing component remains validated, so review can be limited to whether the updated findings are biologically plausible.",
      "The discrepancies primarily indicate sequencing instability because validated computational changes should preserve results generated from identical FASTQ files."
    ],
    correctIndex: 1,
    explanation:
      "Clinical NGS results depend on computational components as well as sequence generation. Changes to software, reference databases, parameters, or related pipeline components can alter analytical output and therefore require laboratory governance and an assessment of their effect on the validated workflow."
  },
  {
    question:
      "Before implementing the NGS pipeline update, which approach provides the strongest evaluation of its potential impact?",
    choices: [
      "Repeat sequencing of representative isolates and confirm that sequencing quality metrics remain within the original acceptance criteria.",
      "Compare old and new outputs, investigate discrepancies, and implement the update if the newly detected determinants are biologically credible.",
      "Verify every previously validated genomic target using an independent reference method before allowing any computational update.",
      "Assess the update's impact on intended use, evaluate affected performance using predefined criteria, and determine the necessary extent of verification or revalidation."
    ],
      correctIndex: 3,
    explanation:
      "A computational update should be evaluated according to its potential effect on the pipeline's validated intended use. An impact assessment and predefined acceptance criteria help determine which performance characteristics require verification or whether more extensive revalidation is necessary."
  },
  {
    question:
      "An automated culture system uses digital images and a validated algorithm to identify plates with no visible growth under specified conditions. Which proposed use remains within the validation evidence?",
    choices: [
      "Use the algorithm for negative-growth classification and closely related plate interpretations when image-acquisition parameters remain unchanged.",
      "Use it for the validated negative-growth task under the established media, imaging, workflow, and performance conditions.",
      "Allow additional classifications when microbiologists manually review algorithm outputs before final reporting.",
      "Extend it to additional media after demonstrating that image quality metrics are comparable with those in the original validation."
    ],
    correctIndex: 1,
    explanation:
      "Validation supports the defined intended use under the conditions in which performance was established. It does not automatically establish acceptable performance for additional classifications, media, or workflows, even when acquisition parameters appear similar or human review is added."
  },
  {
    question:
      "After implementation, the vendor releases a software update that modifies the image-analysis algorithm but does not change the imaging hardware. How should the laboratory manage this update?",
    choices: [
      "Repeat the original validation protocol in full because any algorithm modification constitutes a new analytical system.",
      "Verify image acquisition and LIS transmission because those are the locally controlled portions of the workflow.",
      "Assess the nature and potential impact of the algorithm change and perform documented verification or validation appropriate to that impact.",
      "Compare a subset of old and new algorithm classifications and proceed if no clinically important discrepancies are identified."
    ],
    correctIndex: 2,
        explanation:
      "A software or algorithm change can affect analytical performance even when hardware is unchanged. The laboratory should assess the nature and potential impact of the change and use that assessment to determine and document the appropriate extent of verification or validation."
  },
  {
    question:
      "During an outbreak investigation, several patient isolates of the same bacterial species are highly similar by a validated whole-genome sequencing relatedness pipeline. Which interpretation best integrates the genomic result into the investigation?",
    choices: [
      "Treat genomic similarity as evidence supporting relatedness and integrate it with temporal, spatial, epidemiologic, and other relevant information when evaluating transmission.",
      "Classify the isolates as belonging to the same transmission chain when genomic similarity exceeds the laboratory's validated relatedness threshold.",
      "Use epidemiologic data primarily to resolve isolates whose genomic results fall outside the laboratory's relatedness threshold.",
      "Consider genomic and epidemiologic findings independently so that contextual information does not bias interpretation of sequence relatedness."
    ],
    correctIndex: 0,
    explanation:
      "Genomic similarity can support relatedness among isolates, but it does not independently establish a specific transmission pathway. Interpretation should integrate validated genomic findings with temporal, spatial, epidemiologic, and other relevant evidence."
  },
  {
    question:
      "During the same investigation, an ELR message is successfully acknowledged by the receiving public-health system, but review shows that the laboratory's local organism code was mapped to the wrong standardized concept. What should the laboratory conclude?",
    choices: [
      "The acknowledgment validates transport and terminology mapping, so the discrepancy most likely occurred within the public-health surveillance application.",
      "The error demonstrates that standardized terminology should replace local organism codes throughout the laboratory's internal LIS workflow.",
      "The mapping should be corrected prospectively because successful message receipt establishes integrity of previously transmitted information.",
      "Successful transport did not establish semantic correctness; the mapping and affected end-to-end reporting pathway require investigation, correction, and appropriate verification."
    ],
    correctIndex: 3,
    explanation:
      "An acknowledgment can establish successful message receipt without establishing that transmitted concepts were interpreted correctly. An incorrect terminology mapping is a semantic interoperability problem and requires investigation of the affected workflow, correction of the mapping, and appropriate end-to-end verification."
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
