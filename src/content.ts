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
  whatIDid: string | string[];
  result: string;
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
  avatarUrl?: string;
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
  title: "Hossein Khoshhal — Data & Technology Consultant",
  description:
    "Portfolio of Hossein Khoshhal, a data and technology consultant working on public-sector data, systems, and automation projects.",
  url: "https://hosseinkay.github.io/Personal-Portfolio",
  email: "hosseinkhoshhal7@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const hero: Hero = {
  name: "Hossein Khoshhal",
  role: "Data & Technology Consultant",
  location: "New York, NY",
  avatarUrl: "/avatar.png",
  valueProp: [
    "I'm a consultant working mainly on public-sector data, technology, and operations.",
    "My work has included benefits modernization, transportation data, automation, GIS, and health technology.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/hosseinkay", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hossein-khoshhal", icon: "linkedin" },
    { label: "Email", href: "mailto:hosseinkhoshhal7@gmail.com", icon: "email" },
  ],
};

export const workAreas: WorkArea[] = [
  {
    title: "Systems & process analysis",
    description: "I map how processes and data move through systems to figure out where problems are happening.",
  },
  {
    title: "Data & technical tools",
    description: "I use Python, SQL, GIS, optimization, and automation to answer specific operational questions.",
  },
  {
    title: "Public-sector technology",
    description:
      "Most of my work has involved government or public-interest organizations, where the solution has to fit the way people actually work.",
  },
];

export const projects: Project[] = [
  {
    slug: "congestion-pricing-revenue-integrity-audit",
    title: "Congestion Pricing Revenue Integrity Audit",
    tagline: "Reviewing tolling data and revenue controls end to end",
    description:
      "I worked with the engagement team reviewing how toll transactions moved through data governance controls and processing logic for a major transportation revenue system.",
    year: "2025",
    status: "Completed",
    techStack: ["SQL", "Data Governance", "Process Audit", "Data Lake Pipelines"],
    stats: [
      { label: "Estimated uncollected revenue", value: "~$16M" },
      { label: "Scope", value: "End-to-end tolling pipeline" },
    ],
    links: {
      caseStudy: "/projects/congestion-pricing-revenue-integrity-audit",
    },
    featured: true,
    gradient: ["#0f2a3f", "#0b0d0f"],
    caseStudy: {
      context:
        "The MTA's congestion pricing program runs on a large tolling system: camera captures, transponder reads, transaction matching, business rules, exception handling, and reporting. Revenue leakage in a system like that tends to hide in operational edge cases, not in the obvious places.",
      whatIDid:
        "I was part of the Guidehouse engagement team reviewing this program. I focused on data governance controls, transaction processing logic, exception handling, and the data lake reporting pipeline, tracing transactions from initial capture through business rule enforcement and reconciliation to see where valid tolling events were falling out of the revenue process.",
      result:
        "The engagement identified approximately $16 million in uncollected toll revenue tied to gaps in transaction processing logic, business rule enforcement, and exception handling. That gave the client a specific, traceable basis for fixing the underlying controls instead of a vague revenue gap.",
    },
  },
  {
    slug: "benefits-modernization-operating-model-design",
    title: "Benefits Modernization & Operating Model Design",
    tagline: "Mapping current-state workflows for California's benefits programs",
    description: "I worked with program staff to map how claims were handled today and turn that into requirements for the new system.",
    year: "2025–Present",
    status: "Ongoing",
    techStack: ["Process Mapping", "Requirements Definition", "Stakeholder Workshops", "DMAIC"],
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
        "California's Disability Insurance and Paid Family Leave programs run on workflows built from policy rules, staff processes, legacy systems, and program-specific exceptions. Modernizing that meant understanding how the work actually happened before anyone could write requirements for a new system.",
      whatIDid: [
        "Co-led process discovery workshops with program subject-matter experts across multiple benefit programs",
        "Documented current-state workflows and validated pain points with staff",
        "Mapped 400+ user stories and translated them into future-state requirements for the Integrated Claims Management System",
        "Used DMAIC-style process improvement methods to identify root causes of operational inefficiencies",
      ],
      result:
        "The workshops and documentation gave the client requirements for the new system based on how staff actually worked day to day, rather than how the process was written down on paper. The engagement is ongoing.",
    },
  },
  {
    slug: "offline-capable-clinical-emr-system",
    title: "Offline-Capable Clinical EMR System",
    tagline: "Building an EMR that could keep working during power and internet outages",
    description:
      "This started as a Carnegie Mellon capstone project. I worked with a small team to design an electronic medical records system for a clinic in Haiti that needed to keep working without reliable power or internet.",
    year: "2025",
    status: "Completed",
    techStack: ["Raspberry Pi", "Docker", "Supabase", "Local Network"],
    links: {
      caseStudy: "/projects/offline-capable-clinical-emr-system",
    },
    featured: true,
    gradient: ["#122b1f", "#0b0d0f"],
    caseStudy: {
      context:
        "FLM Haiti runs a clinic that was moving from paper records to a digital system, in a place where power and internet cannot be assumed to work. This started as a capstone project through Carnegie Mellon, working directly with the clinic.",
      whatIDid:
        "I was the systems project manager for a small team of developers and data scientists. I helped design the system architecture, plan the deployment, and put together documentation so clinic staff could keep running the system after we left. The system ran on a Raspberry Pi with Docker and Supabase over a local network, so the clinic's core workflows kept working even without an internet connection.",
      result:
        "We designed, built, and deployed the system to the clinic, along with documentation and handoff materials for the local team to maintain it going forward.",
    },
  },
  {
    slug: "government-procurement-intelligence-platform",
    title: "Government Procurement Monitoring Automation",
    tagline: "Automating government solicitation monitoring with Python",
    description:
      "I built a Python script that checks state and local procurement portals and pulls new solicitations into one report, instead of someone checking each site by hand.",
    year: "2025",
    status: "Completed",
    techStack: ["Python", "Playwright", "BeautifulSoup", "OpenPyXL", "Excel"],
    stats: [
      { label: "Review time", value: "< 1 min" },
      { label: "Estimated time saved per year", value: "~200 hrs" },
    ],
    links: {
      caseStudy: "/projects/government-procurement-intelligence-platform",
    },
    featured: true,
    gradient: ["#0f3a35", "#0b0d0f"],
    caseStudy: {
      context:
        "Business development teams at Guidehouse had to check dozens of separate state and local procurement portals by hand to find new solicitations worth pursuing. That took time and was easy to fall behind on.",
      whatIDid:
        "I built a Python workflow using Playwright and BeautifulSoup to pull solicitation listings from target portals on a schedule, then used OpenPyXL to put everything into one Excel report the team could scan quickly.",
      result:
        "The team now gets a consolidated report instead of checking each portal manually. Based on the prior manual review time, I estimate this saves around 200 hours of work a year.",
    },
  },
  {
    slug: "pharmacy-access-optimization",
    title: "Chicago Pharmacy Access Optimization",
    tagline: "Testing where new pharmacies could improve access in Chicago",
    description:
      "I used Gurobi to test where new pharmacy locations could cover the most people in underserved Chicago neighborhoods, and I'm now turning that analysis into an interactive tool.",
    year: "2024–Present",
    status: "Ongoing",
    techStack: ["Gurobi", "GIS", "Optimization", "Python"],
    links: {
      caseStudy: "/projects/pharmacy-access-optimization",
    },
    featured: true,
    gradient: ["#1a1030", "#0b0d0f"],
    caseStudy: {
      context:
        "Pharmacy access isn't the same across a city, and the neighborhoods with the least access are often the ones with the greatest need, sometimes called a pharmacy desert.",
      whatIDid:
        "I built a Maximum Coverage Location Problem model in Gurobi to test where new pharmacy locations would cover the most people within a reasonable travel distance. I combined GIS and OpenStreetMap data for the street network with Census and CDC data for demographic need and disease burden, so the model considered accessibility, need, and disease burden together rather than distance alone.",
      result:
        "The model produces a ranked set of candidate pharmacy locations for underserved Chicago neighborhoods. I'm now working on turning that analysis into an interactive tool where someone could adjust assumptions like coverage radius or number of new sites and see how the recommended locations change. That tool isn't live yet.",
    },
  },
  {
    slug: "responsible-ai-red-teaming",
    title: "LLM Red Teaming and AI Safety Evaluation",
    tagline: "Testing how language models respond to adversarial prompts",
    description:
      "As part of NIST's ARIA program, I tested how models like GPT-4o, Claude, Gemini, and Llama responded to prompts designed to produce misinformation or unsafe outputs.",
    year: "2024",
    status: "Completed",
    techStack: ["Adversarial Testing", "LLM Evaluation"],
    links: {
      caseStudy: "/projects/responsible-ai-red-teaming",
    },
    gradient: ["#2a1f3d", "#0b0d0f"],
    caseStudy: {
      context:
        "NIST's ARIA program evaluates how large language models behave under adversarial conditions before they're trusted in higher-stakes settings.",
      whatIDid:
        "I tested models including GPT-4o, Claude, Gemini, and Llama with prompts designed to produce misinformation, get around usage policies, or bypass safety controls. I documented the failure modes I found and looked for patterns across models.",
      result: "My findings fed into a broader evaluation of model robustness and safety safeguards used by the program to inform guardrail recommendations.",
    },
  },
  {
    slug: "public-health-risk-signal-analysis",
    title: "Prescription Data & GIS Analysis",
    tagline: "Mapping prescription data patterns for Allegheny County",
    description: "I used Python and GIS to look at substance-related prescription data across Allegheny County and help staff spot patterns worth a closer look.",
    year: "2024",
    status: "Completed",
    techStack: ["Python", "GIS", "Public Health"],
    links: {
      caseStudy: "/projects/public-health-risk-signal-analysis",
    },
    gradient: ["#301418", "#0b0d0f"],
    caseStudy: {
      context:
        "Allegheny County's Department of Human Services wanted to look at substance-related prescription data geographically instead of just as raw numbers, to help focus limited oversight resources.",
      whatIDid:
        "I built Python workflows combined with GIS to look for geographic and statistical patterns in the prescription data, then presented the findings to county stakeholders.",
      result: "The analysis helped stakeholders identify patterns that warranted further review and factored into how the county prioritized oversight.",
    },
  },
];

export const research: ResearchItem[] = [
  {
    slug: "resilient-health-information-systems-underserved-communities",
    title: "Resilient Health Information Systems for Underserved Communities",
    framing: "How do you keep a health record system trustworthy when the power and the internet can't be?",
    description:
      "Presented at the 2025 American Medical Informatics Association (AMIA) Annual Symposium. This research looks at a resilient health information system architecture for resource-constrained communities, focused on maintaining data integrity and continuity of care when internet and power are unreliable.",
    label: "Independent / Academic research",
    year: "2025",
    tags: ["Health Informatics", "Systems Architecture", "Offline-First", "AMIA 2025"],
    links: {
      caseStudy: "/research/resilient-health-information-systems-underserved-communities",
    },
    gradient: ["#0f2a3f", "#0b0d0f"],
    caseStudy: {
      context:
        "Most health information systems assume steady power and internet access. In resource-constrained communities, that assumption doesn't hold, and when it breaks, standard systems tend to lose data or lock clinicians out of the record.",
      whatIDid:
        "I developed and evaluated the system architecture, building on the offline-capable EMR work from the FLM Haiti clinic project. The research looks at how to preserve data integrity and synchronization when connectivity is intermittent by design, rather than occasionally interrupted.",
      result: "This work was presented as a poster at the 2025 AMIA Annual Symposium.",
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
    summary: "At Guidehouse, I work on public-sector modernization for state and local government clients. My work has included process discovery, data pipeline review, and building automation tools.",
    bullets: [
      "Co-led process discovery for a statewide benefits modernization effort, working with program staff to turn claims workflows into requirements for the new system.",
      "Reviewed tolling data pipelines, processing logic, and revenue controls for a major transportation system as part of the engagement team, helping identify approximately $16M in uncollected revenue.",
      "Built a Python tool that automated government solicitation monitoring, cutting review time to under a minute and saving an estimated 200 hours a year.",
    ],
  },
  {
    organization: "FLM Haiti",
    role: "Systems Project Manager (Capstone Project)",
    location: "Pittsburgh, PA",
    start: "Jan. 2025",
    end: "July 2025",
    summary: "This was a capstone project through Carnegie Mellon, working with FLM Haiti, a clinic in Haiti, to build a records system that didn't depend on steady power or internet.",
    bullets: [
      "Served as systems project manager for a small team of developers and data scientists.",
      "Helped design the system architecture, plan deployment, and hand off documentation to the clinic's local team.",
    ],
  },
  {
    organization: "National Institute of Standards and Technology (NIST)",
    role: "Generative AI Security Analyst (ARIA)",
    location: "Remote",
    start: "Aug. 2024",
    end: "Dec. 2024",
    bullets: [
      "Tested large language models, including GPT-4o, Claude, Gemini, and Llama, for misinformation, misuse, and safety risks.",
      "Documented failure patterns and shared recommendations for stronger safety guardrails.",
    ],
  },
  {
    organization: "Allegheny County Department of Human Services (DHS)",
    role: "Data Analytics Consultant",
    location: "Pittsburgh, PA",
    start: "Dec. 2023",
    end: "May 2024",
    bullets: [
      "Analyzed substance-related prescription data with Python and GIS to support public health oversight.",
      "Presented findings to county stakeholders to help prioritize follow-up.",
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
