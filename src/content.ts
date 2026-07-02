// Single source of truth for all site copy and structured data.
// Every component reads from here rather than hard-coding text.

export type ProjectStatus = "Completed" | "Ongoing" | "Research" | "In Progress";

export interface Stat {
  label: string;
  value: string;
}

export interface ProjectLinks {
  caseStudy: string;
  live?: string;
  source?: string;
  docs?: string;
}

export interface CaseStudy {
  context: string;
  myRole: string;
  approach: string;
  outcome: string;
  whatThisDemonstrates: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  status: ProjectStatus;
  techStack: string[];
  stats?: Stat[];
  links: ProjectLinks;
  featured?: boolean;
  placeholder?: boolean;
  gradient: [string, string];
  caseStudy: CaseStudy;
}

export interface ResearchItem {
  slug: string;
  title: string;
  framing: string;
  description: string;
  label: string;
  year: string;
  tags: string[];
  links: { caseStudy: string; docs?: string };
  gradient: [string, string];
  caseStudy: CaseStudy;
}

export interface ExperienceEntry {
  organization: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary?: string;
  bullets: string[];
}

export interface EducationEntry {
  institution: string;
  credential: string;
  location: string;
  date: string;
  detail?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
}

export interface Hero {
  name: string;
  role: string;
  location: string;
  tagline: string;
  valueProp: string[];
  socials: SocialLink[];
}

export interface WorkArea {
  title: string;
  description: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  url: string;
  email: string;
  phone?: string;
  resumeUrl: string;
}

export const site: SiteMeta = {
  title: "Hossein Khoshhal — Data Analytics Consultant",
  description:
    "Portfolio of Hossein Khoshhal, a public-sector data analytics consultant based in New York working on operational analytics, data governance, and decision-support tools for government and health systems.",
  url: "https://hosseinkay.github.io/Personal-Portfolio",
  email: "hosseinkhoshhal7@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const hero: Hero = {
  name: "Hossein Khoshhal",
  role: "Public-Sector Data Analytics Consultant",
  location: "New York, NY",
  tagline: "Turning messy public-sector systems into clearer decisions, stronger workflows, and usable analytical tools.",
  valueProp: [
    "I'm a data analytics consultant based in New York, focused on public-sector transformation, operational analytics, and decision-support tools.",
    "I work on messy systems where the data, process, and stakeholder reality do not line up yet — from tracing revenue leakage in tolling pipelines, to automating government procurement monitoring, to building resilient health information systems for resource-constrained clinics.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/hosseinkay", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hossein-khoshhal", icon: "linkedin" },
    { label: "Email", href: "mailto:hosseinkhoshhal7@gmail.com", icon: "email" },
  ],
};

export const workAreas: WorkArea[] = [
  {
    title: "Operational analytics",
    description:
      "Tracing how policies, transactions, and workflows actually move through complex systems — and identifying where intent breaks down in practice.",
  },
  {
    title: "Decision-support tools",
    description:
      "Building models, automations, dashboards, and workflows that help teams make better choices without adding unnecessary complexity.",
  },
  {
    title: "Public-interest technology",
    description:
      "Designing systems for governments, clinics, and communities where reliability, usability, and real-world constraints matter.",
  },
];

export const projects: Project[] = [
  {
    slug: "congestion-pricing-revenue-integrity-audit",
    title: "Congestion Pricing Revenue Integrity Audit",
    tagline: "Tracing $16M in leaked toll revenue through the pipeline",
    description:
      "Assessed tolling data pipelines, processing logic, and governance controls for a major transportation revenue system, helping surface approximately $16 million in uncollected revenue.",
    year: "2025",
    status: "Completed",
    techStack: ["SQL", "Data Governance", "Process Audit", "Data Lake Pipelines"],
    stats: [
      { label: "Uncollected revenue identified", value: "$16M" },
      { label: "Scope", value: "End-to-end tolling pipeline" },
    ],
    links: {
      caseStudy: "/projects/congestion-pricing-revenue-integrity-audit",
    },
    featured: true,
    gradient: ["#0f2a3f", "#0b0d0f"],
    caseStudy: {
      context:
        "The MTA's congestion pricing program depends on a complex tolling ecosystem: camera captures, transponder reads, transaction matching, business rules, exception handling, and data lake reporting. In a system that large, revenue leakage can hide inside operational edge cases rather than obvious reporting gaps.",
      myRole:
        "As part of the Guidehouse engagement team, I helped assess the end-to-end transaction flow, focusing on data governance controls, processing logic, reporting pipelines, and exception workflows. My work centered on translating technical transaction behavior into audit findings that could be understood by both data and program stakeholders.",
      approach:
        "I traced transactions across the pipeline from initial capture through business rule enforcement and reconciliation, looking for places where system logic, control design, or exception handling could cause valid tolling events to fall out of the revenue process.",
      outcome:
        "The audit surfaced approximately $16 million in uncollected toll revenue tied to failures in transaction processing logic, business rule enforcement, and exception handling. More importantly, the finding gave the client a traceable basis for remediation rather than a vague revenue gap.",
      whatThisDemonstrates:
        "This project reflects the kind of work I'm most interested in: using data to understand how a public-sector system actually behaves, identifying where operational intent breaks down, and turning that analysis into decisions leaders can act on.",
    },
  },
  {
    slug: "benefits-modernization-operating-model-design",
    title: "Benefits Modernization & Operating Model Design",
    tagline: "Mapping how California's benefits programs actually run",
    description:
      "Supported a large-scale modernization initiative for California's Disability Insurance and Paid Family Leave programs, translating complex claims workflows into future-state requirements for an integrated claims management system.",
    year: "2025",
    status: "Ongoing",
    techStack: ["Business Process Reengineering", "Requirements Definition", "Stakeholder Facilitation", "DMAIC"],
    stats: [
      { label: "User stories mapped", value: "400+" },
      { label: "Programs in scope", value: "5 statewide benefit programs" },
    ],
    links: {
      caseStudy: "/projects/benefits-modernization-operating-model-design",
    },
    featured: true,
    gradient: ["#1e2a38", "#0b0d0f"],
    caseStudy: {
      context:
        "California's benefits programs depend on complex claims workflows involving policy rules, staff processes, legacy systems, and program-specific exceptions. Modernizing that environment required more than documenting requirements — it required understanding how the work actually happened across teams.",
      myRole:
        "I co-led process discovery and business process reengineering workstreams, facilitating sessions with program subject-matter experts, documenting current-state workflows, validating pain points, and helping define future-state operating needs across multiple benefit programs.",
      approach:
        "I used structured process improvement and DMAIC-style methods to map end-to-end workflows, identify root causes of operational inefficiencies, surface policy and system constraints, and translate findings into requirements for the Integrated Claims Management System.",
      outcome:
        "The work helped create clearer, more actionable inputs for system design by grounding technology decisions in real operational needs, staff workflows, and program constraints.",
      whatThisDemonstrates:
        "This project reflects my ability to work in ambiguity, facilitate with non-technical stakeholders, and turn messy operational processes into structured requirements for modernization.",
    },
  },
  {
    slug: "offline-capable-clinical-emr-system",
    title: "Offline-Capable Clinical EMR System",
    tagline: "Keeping core clinical workflows running through outages",
    description:
      "Led the design of a resilient electronic medical records system for a clinic in Haiti, built to keep core workflows available during internet and power disruptions.",
    year: "2025",
    status: "Completed",
    techStack: ["Raspberry Pi", "Docker", "Supabase", "Local-First Architecture", "Systems Design"],
    links: {
      caseStudy: "/projects/offline-capable-clinical-emr-system",
    },
    featured: true,
    gradient: ["#122b1f", "#0b0d0f"],
    caseStudy: {
      context:
        "The clinic was transitioning away from paper-based records in an environment where internet connectivity and electricity could not be assumed. A standard cloud-only health records system would not be reliable enough for day-to-day clinical use.",
      myRole:
        "I served as systems project manager and helped lead the solution architecture, deployment planning, documentation, and knowledge transfer for the EMR system.",
      approach:
        "The system used a local LAN-based setup with Supabase in Docker on a Raspberry Pi, allowing the application to preserve core functionality during outages. The project emphasized usability, data integrity, and maintainability rather than technical complexity for its own sake.",
      outcome:
        "The result was a more resilient clinical data system designed around the clinic's real operating environment, with documentation and handoff materials to support long-term local ownership.",
      whatThisDemonstrates: "I care about systems that work in the real world — not just under ideal technical conditions.",
    },
  },
  {
    slug: "government-procurement-intelligence-platform",
    title: "Government Procurement Intelligence Platform",
    tagline: "From manual solicitation hunting to a sub-minute automated scan",
    description:
      "Built a Python-based workflow to monitor public-sector solicitations, reducing opportunity review time to under one minute and saving roughly 200 hours annually.",
    year: "2025",
    status: "Completed",
    techStack: ["Python", "Playwright", "BeautifulSoup", "OpenPyXL", "Excel"],
    stats: [
      { label: "Review time", value: "< 1 min" },
      { label: "Time saved annually", value: "~200 hrs" },
    ],
    links: {
      caseStudy: "/projects/government-procurement-intelligence-platform",
    },
    featured: true,
    gradient: ["#0f3a35", "#0b0d0f"],
    caseStudy: {
      context:
        "Public-sector business development teams have to track solicitations across dozens of disconnected state and local procurement portals. Checking each one manually was slow and easy to fall behind on, which limited how many opportunities the team could realistically track.",
      myRole:
        "I built and maintained the tool as part of my work supporting Guidehouse's public-sector pursuits, from the initial scraping logic through the reporting format the team actually used day to day.",
      approach:
        "The workflow uses Python with Playwright and BeautifulSoup to pull solicitation data from target portals on a schedule, then OpenPyXL to normalize everything into a single Excel report. The point was never scraping for its own sake — it was turning fragmented public procurement sources into something the business development team could use to make go/no-go decisions.",
      outcome:
        "What used to take an analyst manually checking multiple portals now runs in under a minute, saving roughly 200 hours of review time a year and freeing that time for qualification and proposal work.",
      whatThisDemonstrates:
        "I can turn repetitive information-gathering work into lightweight tools that improve how teams monitor opportunities and make decisions.",
    },
  },
  {
    slug: "responsible-ai-red-teaming",
    title: "Responsible AI Red Teaming",
    tagline: "Testing how frontier models hold up under pressure",
    description:
      "Supported AI safety evaluation work focused on how leading language models respond under adversarial prompting, misinformation risks, misuse scenarios, and ethical safeguard tests.",
    year: "2024",
    status: "Completed",
    techStack: ["Adversarial Testing", "LLM Evaluation", "AI Safety"],
    links: {
      caseStudy: "/projects/responsible-ai-red-teaming",
    },
    gradient: ["#2a1f3d", "#0b0d0f"],
    caseStudy: {
      context:
        "Frontier language models are increasingly used in situations where a wrong or manipulated answer has real consequences. As part of NIST's ARIA program, I worked on evaluating how models including GPT-4o, Claude, Gemini, and Llama actually behave when pushed toward misinformation, policy circumvention, or unsafe outputs.",
      myRole: "I conducted adversarial testing against these models and documented the failure modes I found.",
      approach:
        "The work involved designing prompts intended to surface weaknesses, documenting failure modes, and synthesizing patterns across model responses — then translating those findings into recommendations for stronger model guardrails and responsible AI controls.",
      outcome:
        "The findings fed into a broader evaluation of model robustness, safety safeguards, and deployment risk — the kind of groundwork that has to happen before these systems are trusted in high-impact settings.",
      whatThisDemonstrates:
        "I'm not only interested in building analytical systems — I'm also interested in how those systems behave under pressure, where they fail, and what governance structures are needed before they're used in high-impact environments.",
    },
  },
  {
    slug: "public-health-risk-signal-analysis",
    title: "Public Health Risk Signal Analysis",
    tagline: "Turning prescription data into oversight priorities",
    description:
      "Built Python and GIS workflows to analyze substance-related indicators and prescription data for Allegheny County Department of Human Services.",
    year: "2024",
    status: "Completed",
    techStack: ["Python", "GIS", "Public Health"],
    links: {
      caseStudy: "/projects/public-health-risk-signal-analysis",
    },
    gradient: ["#301418", "#0b0d0f"],
    caseStudy: {
      context:
        "Allegheny County needed a way to look at prescription and substance-use data geographically, not just as raw numbers, to help focus limited oversight resources where they'd matter most.",
      myRole: "I built the analytical workflows and presented findings directly to county stakeholders.",
      approach:
        "I combined Python-based statistical analysis with GIS to look for geographic and statistical patterns in substance-related indicators and prescription data, focused on surfacing risk signals rather than drawing conclusions on their own.",
      outcome:
        "The work helped county leadership better understand potential risk signals, prioritize oversight, and make more informed intervention decisions.",
      whatThisDemonstrates:
        "I can translate complex public health data into patterns and recommendations that are usable for non-technical decision-makers.",
    },
  },
  {
    slug: "pharmacy-access-optimization",
    title: "Pharmacy Access Optimization",
    tagline: "Where should a city's next pharmacy go?",
    description:
      "Used GIS, optimization modeling, and demographic data to identify candidate pharmacy locations that could improve healthcare access in underserved Chicago communities.",
    year: "2024",
    status: "Research",
    techStack: ["Gurobi", "GIS", "Optimization", "Python"],
    links: {
      caseStudy: "/projects/pharmacy-access-optimization",
    },
    gradient: ["#1a1030", "#0b0d0f"],
    caseStudy: {
      context:
        "Pharmacy access isn't evenly distributed across a city, and the neighborhoods with the least access are often the ones with the greatest underlying need — the kind of gap sometimes called a pharmacy desert.",
      myRole: "I built the underlying optimization model and the analysis behind it.",
      approach:
        "I framed the siting decision as a maximum coverage location problem and used Gurobi to solve it, layering in GIS, OpenStreetMap, Census, and CDC data so the model weighed accessibility, demographic need, and disease burden together rather than distance alone. The goal was a decision-support tool, not just a model — something that could show stakeholders the tradeoffs between siting choices in the highest-need, highest-opportunity areas, not just a single 'optimal' answer.",
      outcome:
        "The result is a ranked, defensible set of candidate pharmacy locations for underserved Chicago communities, and the analytical foundation for a follow-on interactive tool that lets people explore those tradeoffs directly.",
      whatThisDemonstrates: "I can turn an optimization model into something that supports a real decision, not just a technically correct answer.",
    },
  },
  {
    slug: "pharmacy-desert-app",
    title: "Pharmacy Desert App",
    tagline: "Turning the optimization research into an interactive tool",
    description:
      "An interactive companion to the pharmacy access research above — letting stakeholders explore siting tradeoffs directly instead of reading them off a static report. This card is a placeholder until the live tool is ready.",
    year: "2026",
    status: "In Progress",
    techStack: ["Python", "GIS", "Optimization"],
    links: {
      caseStudy: "/projects/pharmacy-desert-app",
    },
    placeholder: true,
    gradient: ["#1c1c22", "#0b0d0f"],
    caseStudy: {
      context:
        "The pharmacy access optimization research (see Pharmacy Access Optimization) produces a ranked set of candidate locations, but that output currently lives in static reports and notebooks — not something a stakeholder can explore on their own.",
      myRole: "I'm building this as a follow-on to the original research.",
      approach:
        "This project will wrap the underlying optimization model in an interactive interface so users can adjust parameters — coverage radius, number of new sites, demographic weighting — and see the recommended siting decisions update in response.",
      outcome: "In progress. This write-up will be filled in once the live tool is deployed.",
      whatThisDemonstrates:
        "I like to take research past the report stage, into something a stakeholder could actually sit down and use.",
    },
  },
];

export const research: ResearchItem[] = [
  {
    slug: "resilient-health-information-systems-underserved-communities",
    title: "Resilient Health Information Systems for Underserved Communities",
    framing: "How do you keep a health record system trustworthy when the power and the internet can't be?",
    description:
      "Research accepted for presentation at the 2025 American Medical Informatics Association (AMIA) Annual Symposium. Developed and evaluated a resilient health information system architecture for resource-constrained communities, demonstrating approaches to maintain data integrity, synchronization, and continuity of care despite unreliable internet connectivity and power infrastructure.",
    label: "Independent / Academic research",
    year: "2025",
    tags: ["Health Informatics", "Systems Architecture", "Offline-First", "AMIA 2025"],
    links: {
      caseStudy: "/research/resilient-health-information-systems-underserved-communities",
    },
    gradient: ["#0f2a3f", "#0b0d0f"],
    caseStudy: {
      context:
        "Most health information system architecture assumes stable power and connectivity. In resource-constrained communities, that assumption breaks routinely, and when it does, standard architectures either lose data or lock clinicians out of the record entirely — at exactly the moment care can least afford it.",
      myRole:
        "I developed and evaluated the underlying architecture, building directly on the offline-capable EMR work from the FLM Haiti clinic deployment.",
      approach:
        "This research develops and evaluates a resilient health information system architecture purpose-built for resource-constrained settings. It examines how to preserve data integrity and synchronization guarantees when connectivity is intermittent by design rather than exceptional.",
      outcome:
        "The work was accepted for presentation at the 2025 AMIA Annual Symposium, demonstrating architectural approaches that maintain continuity of care and data integrity despite unreliable infrastructure — evidence that offline-first design is a viable path for health systems serving underserved communities, not just a workaround.",
      whatThisDemonstrates:
        "I'm interested in taking what I learn on client and volunteer work further than the engagement requires, when the underlying question is worth it.",
    },
  },
];

export const experience: ExperienceEntry[] = [
  {
    organization: "Guidehouse — State & Local Government",
    role: "Consultant",
    location: "New York, NY",
    start: "July 2025",
    end: "Present",
    summary:
      "At Guidehouse, I work on public-sector modernization, revenue integrity, and business development analytics for state and local government clients. My work spans stakeholder facilitation, process discovery, data pipeline assessment, control testing, and automation.",
    bullets: [
      "Co-led discovery and operating model design for a statewide benefits modernization effort, translating claims workflows and SME input into future-state requirements.",
      "Assessed tolling data pipelines, processing logic, and governance controls for a major transportation revenue system, helping identify approximately $16M in uncollected revenue.",
      "Built a Python procurement intelligence workflow that reduced solicitation review time to under one minute and saved roughly 200 hours annually.",
    ],
  },
  {
    organization: "FLM Haiti",
    role: "Systems Project Manager",
    location: "Pittsburgh, PA",
    start: "Jan. 2025",
    end: "July 2025",
    bullets: [
      "Led design and deployment of an offline-capable EMR system for a rural clinic, built to keep core workflows running without reliable power or internet.",
      "Directed a multidisciplinary team through architecture, deployment, and documentation handoff.",
    ],
  },
  {
    organization: "National Institute of Standards and Technology (NIST)",
    role: "Generative AI Security Analyst (ARIA)",
    location: "Remote",
    start: "Aug. 2024",
    end: "Dec. 2024",
    bullets: [
      "Conducted adversarial testing of frontier language models — GPT-4o, Claude, Gemini, and Llama — to surface misinformation, misuse, and safety risks.",
      "Documented failure patterns and translated findings into recommendations for stronger model guardrails.",
    ],
  },
  {
    organization: "Allegheny County Department of Human Services (DHS)",
    role: "Data Analytics Consultant",
    location: "Pittsburgh, PA",
    start: "Dec. 2023",
    end: "May 2024",
    bullets: [
      "Analyzed substance-related indicators and prescription data using Python and GIS to support public health oversight.",
      "Presented findings to county stakeholders to help prioritize investigative and intervention decisions.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    institution: "Carnegie Mellon University",
    credential: "M.S., Data Analytics – Public Policy & Management",
    location: "Pittsburgh, PA",
    date: "May 2025",
  },
  {
    institution: "George Mason University",
    credential: "B.A., International Politics · B.A., Philosophy",
    location: "Fairfax, VA",
    date: "May 2022",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Core Tools",
    items: ["Python", "SQL", "PostgreSQL", "Tableau", "Databricks", "AWS", "ArcGIS", "Docker", "MongoDB", "R", "Gurobi", "Excel", "Git"],
  },
];

export const certifications: Certification[] = [
  { name: "Databricks Machine Learning Engineer Associate" },
  { name: "AWS Cloud Practitioner" },
  { name: "Lean Six Sigma Yellow Belt" },
];

export const nav = [
  { index: "01", label: "Projects", href: "#projects" },
  { index: "02", label: "Experience", href: "#experience" },
  { index: "03", label: "About", href: "#about" },
];
