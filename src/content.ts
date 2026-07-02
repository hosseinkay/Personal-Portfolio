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
  problem: string;
  approach: string;
  outcome: string;
  tech: string;
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
  valueProp: string;
  socials: SocialLink[];
}

export interface SiteMeta {
  title: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  resumeUrl: string;
}

export const site: SiteMeta = {
  title: "Hossein Khoshhal — Data Analytics Consultant",
  description:
    "Portfolio of Hossein Khoshhal, a data analytics consultant working across public-sector modernization, tolling revenue integrity, health systems, and geospatial optimization research.",
  url: "https://hosseinkay.github.io/Personal-Portfolio",
  email: "hosseinkhoshhal7@gmail.com",
  phone: "+1 (571) 338-9858",
  resumeUrl: "/resume.pdf",
};

export const hero: Hero = {
  name: "Hossein Khoshhal",
  role: "Data Analytics Consultant",
  location: "New York, NY",
  valueProp:
    "I trace complex systems back to the decisions that broke them — recovering millions in revenue leakage, automating hours out of manual workflows, and modeling equitable access to public services.",
  socials: [
    { label: "GitHub", href: "https://github.com/hosseinkay", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hossein-khoshhal", icon: "linkedin" },
    { label: "Email", href: "mailto:hosseinkhoshhal7@gmail.com", icon: "email" },
  ],
};

export const projects: Project[] = [
  {
    slug: "congestion-pricing-revenue-integrity-audit",
    title: "Congestion Pricing Revenue Integrity Audit",
    tagline: "Tracing $16M in leaked toll revenue through the pipeline",
    description:
      "Assessed data governance controls, transaction processing logic, and data lake reporting pipelines behind the MTA's congestion pricing program. Traced end-to-end transaction flows across one of the nation's largest tolling ecosystems to identify control deficiencies, processing defects, and exception-handling gaps — surfacing approximately $16 million in uncollected toll revenue.",
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
      problem:
        "The Metropolitan Transportation Authority's congestion pricing program processes an enormous volume of tolling transactions across cameras, transponders, and exception workflows. Revenue leakage anywhere in that chain is easy to lose in aggregate reporting and hard to trace back to a root cause.",
      approach:
        "Working within Guidehouse's engagement team, I assessed the data governance controls, transaction processing logic, and data lake reporting pipelines supporting the program. I traced transaction flows end-to-end — from initial capture through business rule enforcement to final reconciliation — to isolate where control deficiencies, processing defects, and exception-handling gaps were letting revenue slip through.",
      outcome:
        "The audit identified approximately $16 million in uncollected toll revenue attributable to failures in transaction processing logic, business rule enforcement, and exception-handling controls, giving the client a concrete, traceable basis for remediation across one of the largest tolling ecosystems in the country.",
      tech: "SQL-based transaction tracing, data lake reporting pipelines, and process/control-audit methodology applied across a large-scale government data ecosystem.",
    },
  },
  {
    slug: "government-procurement-intelligence-platform",
    title: "Government Procurement Intelligence Platform",
    tagline: "From manual solicitation hunting to a sub-minute automated scan",
    description:
      "Built a Python-based procurement intelligence platform using Playwright, BeautifulSoup, and OpenPyXL to automate government solicitation monitoring across state and local portals. The tool replaced manual, browser-by-browser searching with a scheduled scan-and-report workflow, cutting opportunity review time to under a minute and saving roughly 200 hours of analyst time per year.",
    year: "2025",
    status: "Completed",
    techStack: ["Python", "Playwright", "BeautifulSoup", "OpenPyXL", "Automation", "Web Scraping"],
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
      problem:
        "Public-sector business development teams track solicitations across dozens of disconnected state and local procurement portals. Manually checking each portal for new or updated opportunities was slow, repetitive, and easy to fall behind on — directly limiting how many pursuits the team could realistically track.",
      approach:
        "I built a Python-based procurement intelligence platform combining Playwright and BeautifulSoup for resilient, portal-by-portal scraping with OpenPyXL for structured Excel reporting. The tool automated the monitoring workflow end-to-end: scanning target portals on a schedule, normalizing solicitation metadata, and generating a consolidated report ready for review.",
      outcome:
        "What used to take an analyst manually scanning multiple portals now runs in under a minute, saving approximately 200 hours of manual review time per year and letting the team spend that time on qualification and proposal work instead of searching.",
      tech: "Python, Playwright for browser automation, BeautifulSoup for HTML parsing, and OpenPyXL for automated Excel report generation.",
    },
  },
  {
    slug: "offline-capable-clinical-emr-system",
    title: "Offline-Capable Clinical EMR System",
    tagline: "A resilient EMR for a clinic that can't rely on the grid",
    description:
      "Led design and deployment of an offline-capable electronic medical record platform for a rural healthcare clinic in Haiti serving communities with unreliable power and internet connectivity. Architected a resilient local-cloud infrastructure using Flutter, PostgreSQL, Docker, and Supabase, and directed a multidisciplinary team of developers and data scientists through design, implementation, and deployment.",
    year: "2025",
    status: "Completed",
    techStack: ["Flutter", "PostgreSQL", "Docker", "Supabase", "Systems Design"],
    links: {
      caseStudy: "/projects/offline-capable-clinical-emr-system",
    },
    gradient: ["#122b1f", "#0b0d0f"],
    caseStudy: {
      problem:
        "A rural clinic in Haiti needed a modern electronic medical record system, but standard cloud-first EMR platforms assume reliable power and internet — assumptions that don't hold in a setting where both can disappear for hours at a time. A dropped connection couldn't mean dropped patient data.",
      approach:
        "As Systems Project Manager for FLM Haiti, I led the design and deployment of an EMR platform built around a resilient local-cloud architecture: Flutter on the client for a consistent offline-first interface, PostgreSQL for durable local data storage, Docker to keep the deployment reproducible on modest clinic hardware, and Supabase to synchronize back to the cloud whenever connectivity returned. I directed a multidisciplinary team of developers and data scientists through system design, stakeholder engagement, and on-the-ground deployment.",
      outcome:
        "The clinic now runs on a system that keeps functioning through outages instead of stalling clinical operations, with synchronization handled automatically once connectivity is restored — continuity of care no longer depends on continuity of infrastructure.",
      tech: "Flutter, PostgreSQL, Docker, and Supabase, combined into an offline-first local-cloud architecture.",
    },
  },
  {
    slug: "optimizing-pharmacy-access-decision-analytics",
    title: "Optimizing Pharmacy Access with Decision Analytics",
    tagline: "Where should a city put its next pharmacy?",
    description:
      "Developed a Gurobi-based Maximal Covering Location Problem (MCLP) model to identify optimal pharmacy locations in underserved Chicago communities. Combined GIS, OpenStreetMap, Census, and CDC data to evaluate accessibility, demographic need, and disease burden, improving equitable access to healthcare resources. This research is the analytical basis for a follow-on interactive tool — see the in-progress Pharmacy Desert App below.",
    year: "2024",
    status: "Research",
    techStack: ["Gurobi", "GIS", "Optimization", "Python"],
    links: {
      caseStudy: "/projects/optimizing-pharmacy-access-decision-analytics",
    },
    gradient: ["#1a1030", "#0b0d0f"],
    caseStudy: {
      problem:
        "Pharmacy access is not evenly distributed across a city, and the communities with the least access are often the ones with the greatest underlying need. Deciding where a limited number of new pharmacy sites would do the most good is a combinatorial siting problem, not a matter of intuition or availability of vacant lots.",
      approach:
        "I developed a Gurobi-based Maximal Covering Location Problem (MCLP) model to formalize the siting decision as an optimization problem: given a fixed number of candidate sites, maximize the population covered within a reasonable access threshold. I layered in GIS and OpenStreetMap data for the underlying street and travel network, Census data for demographic need, and CDC data for disease burden, so the model was optimizing for accessibility and need simultaneously rather than distance alone.",
      outcome:
        "The model produces a ranked, defensible set of candidate pharmacy locations that improve coverage for underserved Chicago communities, and it now serves as the analytical foundation for a follow-on interactive tool — the Pharmacy Desert App — that will let stakeholders explore these siting decisions directly.",
      tech: "Gurobi for mixed-integer optimization, GIS and OpenStreetMap for spatial and network data, and Census/CDC datasets for demographic and health-burden inputs.",
    },
  },
  {
    slug: "substance-use-disorder-provider-analytics",
    title: "Substance-Use Disorder Provider Analytics",
    tagline: "Flagging outlier prescribers before they become a crisis",
    description:
      "Leveraged Python, GIS, and prescription datasets to analyze substance-use disorder indicators across Allegheny County, developing analytical workflows that integrated geospatial and statistical analysis to identify providers with atypically high volumes of Schedule II narcotics prescriptions. Presented findings to county stakeholders to inform public health oversight, investigative prioritization, and intervention planning.",
    year: "2024",
    status: "Completed",
    techStack: ["Python", "GIS", "Public Health"],
    links: {
      caseStudy: "/projects/substance-use-disorder-provider-analytics",
    },
    gradient: ["#301418", "#0b0d0f"],
    caseStudy: {
      problem:
        "Allegheny County's Department of Human Services needed a way to identify healthcare providers whose Schedule II narcotics prescribing patterns were statistical outliers, as an early input into public health oversight and investigative prioritization — without relying on anecdote or complaint volume alone.",
      approach:
        "I built analytical workflows in Python that combined prescription datasets with GIS layers, integrating geospatial and statistical analysis to surface providers with atypically high prescription volumes relative to their peers and geography. Findings were packaged for a non-technical stakeholder audience and presented directly to county decision-makers.",
      outcome:
        "The workflow gave county stakeholders a data-driven, geographically grounded way to prioritize oversight and intervention planning, translating raw prescription data into actionable public health insight.",
      tech: "Python for statistical analysis, GIS for geospatial modeling, and county prescription datasets as the underlying data source.",
    },
  },
  {
    slug: "pharmacy-desert-app",
    title: "Pharmacy Desert App",
    tagline: "Turning the MCLP research into an interactive tool",
    description:
      "An interactive companion to the Chicago pharmacy-access optimization research — letting stakeholders explore candidate pharmacy siting decisions directly rather than reading them off a static report. Currently in progress; this card is a placeholder until the live tool is wired up.",
    year: "2026",
    status: "In Progress",
    techStack: ["Python", "GIS", "Optimization"],
    links: {
      caseStudy: "/projects/pharmacy-desert-app",
    },
    placeholder: true,
    gradient: ["#1c1c22", "#0b0d0f"],
    caseStudy: {
      problem:
        "The MCLP-based pharmacy siting research (see Optimizing Pharmacy Access with Decision Analytics) produces a ranked set of candidate locations, but that output currently lives in static reports and notebooks — not something a stakeholder can explore on their own.",
      approach:
        "This project will wrap the underlying optimization model in an interactive interface so users can adjust parameters — coverage radius, number of new sites, demographic weighting — and see the recommended siting decisions update in response.",
      outcome:
        "In progress. This write-up will be filled in once the live tool is deployed.",
      tech: "Planned: Python optimization backend from the original MCLP research, paired with an interactive front end.",
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
      problem:
        "Most health information system architecture assumes stable power and connectivity. In resource-constrained communities, that assumption breaks routinely, and when it does, standard architectures either lose data or lock clinicians out of the record entirely — at exactly the moment care can least afford it.",
      approach:
        "This research develops and evaluates a resilient health information system architecture purpose-built for resource-constrained settings, directly informed by the offline-capable EMR work built for a rural Haitian clinic. It examines how to preserve data integrity and synchronization guarantees when connectivity is intermittent by design rather than exceptional.",
      outcome:
        "The work was accepted for presentation at the 2025 AMIA Annual Symposium, demonstrating architectural approaches that maintain continuity of care and data integrity despite unreliable infrastructure — evidence that offline-first design is a viable path for health systems serving underserved communities, not just a workaround.",
      tech: "Health information system architecture research, synchronization and data-integrity evaluation methodology, grounded in real-world offline-first EMR deployment.",
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
    bullets: [
      "Led process discovery and operating model design efforts for California's Integrated Claims Management System modernization, mapping 400+ user stories and developing future-state workflows across five statewide benefit programs.",
      "Served as the primary client-facing facilitator for the modernization effort, partnering daily with 30+ program directors, managers, analysts, and executive stakeholders to translate siloed processes, pain points, and business requirements into a unified future-state operating model.",
      "Assessed data governance controls, transaction processing logic, and data lake reporting pipelines supporting the Metropolitan Transportation Authority's congestion pricing program, tracing end-to-end transaction flows to identify control deficiencies, processing defects, and revenue leakage across one of the nation's largest tolling ecosystems.",
      "Identified approximately $16 million in uncollected toll revenue by uncovering failures in transaction processing logic, business rule enforcement, and exception-handling controls.",
      "Developed a Python-based procurement intelligence platform using Playwright, BeautifulSoup, and OpenPyXL that automated government solicitation monitoring, reducing opportunity scanning review time to under a minute, saving roughly 200 hours annually.",
      "Authored proposal approaches, staffing models, qualifications packages, and executive presentation materials supporting public-sector pursuits across Maryland, New York State, and New York City, contributing to three contract awards totaling approximately $3 million.",
    ],
  },
  {
    organization: "FLM Haiti",
    role: "Systems Project Manager",
    location: "Pittsburgh, PA",
    start: "Jan. 2025",
    end: "July 2025",
    bullets: [
      "Led design and deployment of an offline-capable electronic medical record platform for a rural healthcare clinic serving communities with unreliable power and internet connectivity.",
      "Architected a resilient local-cloud infrastructure using Flutter, PostgreSQL, Docker, and Supabase to ensure continuity of clinical operations during outages.",
      "Directed a multidisciplinary team of developers and data scientists through system design, implementation, stakeholder engagement, and deployment.",
    ],
  },
  {
    organization: "National Institute of Standards and Technology (NIST)",
    role: "Generative AI Security Analyst (ARIA)",
    location: "Remote",
    start: "Aug. 2024",
    end: "Dec. 2024",
    bullets: [
      "Conducted adversarial testing of frontier large language models including GPT-4o, Claude, Gemini, and Llama to identify vulnerabilities related to misinformation, policy circumvention, and AI safety controls.",
      "Developed attack methodologies and documented findings used to evaluate model robustness, security safeguards, and responsible AI deployment risks.",
    ],
  },
  {
    organization: "Allegheny County Department of Human Services (DHS)",
    role: "Data Analytics Consultant",
    location: "Pittsburgh, PA",
    start: "Dec. 2023",
    end: "May 2024",
    bullets: [
      "Leveraged Python, GIS, and prescription datasets to analyze substance-use disorder indicators across Allegheny County, developing analytical workflows that integrated geospatial and statistical analysis to identify providers with atypically high volumes of Schedule II narcotics prescriptions.",
      "Presented findings and data-driven recommendations to county stakeholders, translating complex analytical results into actionable insights that informed public health oversight, investigative prioritization, and intervention planning.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    institution: "Carnegie Mellon University",
    credential: "Master of Science, Data Analytics — Public Policy Management",
    location: "Pittsburgh, PA",
    date: "May 2025",
    detail:
      "Coursework: Database Management, Econometrics, Operationalizing AI, Python, Management Consulting, Machine Learning, Optimization, Decision Analytics, Cloud Security, Product Management, Accounting & Financial Analytics, Agent Based Modeling.",
  },
  {
    institution: "George Mason University",
    credential: "B.A. Philosophy, B.A. International Politics — Minor: Data Analytics",
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
  { name: "AWS Certified Cloud Practitioner" },
  { name: "Lean Six Sigma Yellow Belt" },
];

export const nav = [
  { index: "01", label: "Projects", href: "#projects" },
  { index: "02", label: "Experience", href: "#experience" },
  { index: "03", label: "About", href: "#about" },
];
