/* ===========================
   PROJECTS
   =========================== */

export const myProjects = [
  /* ================= DATA ANALYTICS ================= */

  {
    id: 1,
    title: "Customer Transaction Risk & Churn Analysis",
    description:
      "Analyzed banking transaction data to identify early churn signals, inactivity patterns, and risky customer behavior.",
    subDescription: [
      "Analyzed large-scale transaction datasets using advanced SQL queries and window functions.",
      "Engineered behavioral features to detect early churn and risk indicators.",
      "Built PowerBI dashboards to surface high-risk customers and inactivity trends.",
      "Delivered insights designed to support proactive retention strategies.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/data1.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "SQL", path: "/assets/logos/sql.svg" },
      { id: 3, name: "Pandas", path: "/assets/logos/pandas.svg" },
      { id: 4, name: "PowerBI", path: "/assets/logos/powerbi.svg" },
    ],
  },

  {
    id: 2,
    title: "Product Metrics & Retention Analysis",
    description:
      "End-to-end product analytics project focused on engagement metrics, retention cohorts, and feature adoption.",
    subDescription: [
      "Calculated DAU, WAU, MAU, retention cohorts, and churn metrics using SQL.",
      "Performed cohort-based analysis to evaluate long-term user engagement.",
      "Visualized retention and adoption trends using Tableau dashboards.",
      "Translated raw metrics into actionable product insights.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/data2.png",
    tags: [
      { id: 1, name: "SQL", path: "/assets/logos/sql.svg" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      { id: 3, name: "Pandas", path: "/assets/logos/pandas.svg" },
      { id: 4, name: "Tableau", path: "/assets/logos/tableau.svg" },
    ],
  },

  {
    id: 3,
    title: "Web-Scraped Job Market Intelligence",
    description:
      "Automated job market analysis pipeline to track skill demand, salary trends, and emerging technology gaps.",
    subDescription: [
      "Built Python-based web scrapers to collect job postings across multiple platforms.",
      "Stored structured job data in PostgreSQL for downstream analysis.",
      "Analyzed trends in skill demand, compensation ranges, and market gaps.",
      "Designed repeatable pipelines using scheduled workflows.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/data3.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
      { id: 3, name: "Pandas", path: "/assets/logos/pandas.svg" },
      { id: 4, name: "Airflow", path: "/assets/logos/airflow.svg" },
    ],
  },

  {
    id: 4,
    title: "Financial KPI Monitoring & Early Warning System",
    description:
      "Executive-level KPI tracking system designed to flag financial risks and performance anomalies early.",
    subDescription: [
      "Designed SQL pipelines to aggregate financial KPIs across departments.",
      "Implemented threshold-based monitoring logic using Python.",
      "Built executive dashboards highlighting risks and performance deviations.",
      "Enabled data-driven decision-making through clear visual summaries.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/data4.png",
    tags: [
      { id: 1, name: "SQL", path: "/assets/logos/sql.svg" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      { id: 3, name: "PowerBI", path: "/assets/logos/powerbi.svg" },
      { id: 4, name: "Excel", path: "/assets/logos/excel.svg" },
    ],
  },

  {
    id: 5,
    title: "Procurement Spend & Cost Optimization Analysis",
    description:
      "Analyzed procurement data to identify cost-saving opportunities, vendor concentration risks, and spend inefficiencies.",
    subDescription: [
      "Evaluated vendor spend patterns using SQL and Python.",
      "Identified cost-reduction opportunities through bundling and supplier optimization.",
      "Analyzed concentration risks across procurement categories.",
      "Delivered insights through interactive Tableau dashboards.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/data5.jpg",
    tags: [
      { id: 1, name: "SQL", path: "/assets/logos/sql.svg" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      { id: 3, name: "Pandas", path: "/assets/logos/pandas.svg" },
      { id: 4, name: "Tableau", path: "/assets/logos/tableau.svg" },
    ],
  },

  {
    id: 6,
    title: "E-commerce Funnel & Conversion Analysis",
    description:
      "Funnel analysis project quantifying user drop-offs and revenue impact across e-commerce stages.",
    subDescription: [
      "Mapped end-to-end user funnels from visit to purchase.",
      "Quantified conversion losses at each stage using SQL.",
      "Estimated revenue impact of funnel optimizations.",
      "Delivered conversion insights through visual analytics.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/data6.png",
    tags: [
      { id: 1, name: "SQL", path: "/assets/logos/sql.svg" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      { id: 3, name: "Pandas", path: "/assets/logos/pandas.svg" },
      { id: 4, name: "Tableau", path: "/assets/logos/tableau.svg" },
    ],
  },

  {
    id: 7,
    title: "Business KPI Dashboard",
    description:
      "One-page executive dashboard consolidating sales, operations, and marketing KPIs.",
    subDescription: [
      "Designed a unified KPI framework across business functions.",
      "Built SQL-backed data models for consistent metric definitions.",
      "Delivered a clean, executive-ready PowerBI dashboard.",
      "Focused on clarity, prioritization, and actionable insights.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/data7.png",
    tags: [
      { id: 1, name: "PowerBI", path: "/assets/logos/powerbi.svg" },
      { id: 2, name: "SQL", path: "/assets/logos/sql.svg" },
      { id: 3, name: "Excel", path: "/assets/logos/excel.svg" },
      { id: 4, name: "Python", path: "/assets/logos/python.svg" },
    ],
  },

  /* ================= AI / ML ================= */

  {
    id: 8,
    title: "Deepfake Detection Pipeline for KYC Fraud Prevention",
    description:
      "CNN ensemble system for detecting real vs synthetic faces in KYC verification workflows.",
    subDescription: [
      "Built an ensemble of pretrained CNNs for deepfake classification.",
      "Applied Grad-CAM visualizations for model explainability.",
      "Developed an inference API for real-time verification workflows.",
      "Focused on robustness and generalization across datasets.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ml1.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "TensorFlow", path: "/assets/logos/tensorflow.svg" },
      { id: 3, name: "OpenCV", path: "/assets/logos/opencv.svg" },
      { id: 4, name: "Flask", path: "/assets/logos/flask.svg" },
    ],
  },

  {
    id: 9,
    title: "Queue-Based Scalable RAG System",
    description:
      "Scalable Retrieval-Augmented Generation pipeline supporting asynchronous ingestion and low-latency querying.",
    subDescription: [
      "Designed async pipelines for document ingestion and embedding.",
      "Implemented vector search and retrieval using LangChain.",
      "Integrated Redis queues for non-blocking processing.",
      "Exposed inference APIs using FastAPI.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ml2.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "LangChain", path: "/assets/logos/langchain.svg" },
      { id: 3, name: "FastAPI", path: "/assets/logos/fastapi.svg" },
      { id: 4, name: "Redis", path: "/assets/logos/redis.svg" },
    ],
  },

  {
    id: 10,
    title: "Graph Memory Agent (LangGraph + Neo4j)",
    description:
      "LLM agent with persistent graph-based memory enabling contextual reasoning across conversations.",
    subDescription: [
      "Modeled long-term conversational memory using a Neo4j graph.",
      "Stored and traversed context using Cypher queries.",
      "Integrated LangChain agents for reasoning and tool use.",
      "Enabled contextual follow-ups across sessions.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ml3.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Neo4j", path: "/assets/logos/neo4j.svg" },
      { id: 3, name: "Cypher", path: "/assets/logos/cypher.svg" },
      { id: 4, name: "OpenAI", path: "/assets/logos/openai.svg" },
    ],
  },

  {
    id: 11,
    title: "Multi-Agent LLM Debugger Suite",
    description:
      "Framework for testing, comparing, and analyzing LLM prompt behavior across multiple agents.",
    subDescription: [
      "Built multi-agent evaluation pipelines for prompt experimentation.",
      "Structured outputs using JSON for systematic comparison.",
      "Developed an interactive inspection UI with Streamlit.",
      "Focused on debugging, observability, and prompt reliability.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ml4.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "OpenAI", path: "/assets/logos/openai.svg" },
      { id: 3, name: "Streamlit", path: "/assets/logos/streamlit.svg" },
      { id: 4, name: "JSON", path: "/assets/logos/json.svg" },
    ],
  },
];

/* ===========================
   SOCIALS
   =========================== */

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aj6002",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/AJ6002",
    icon: "/assets/logos/github.svg",
  },
];

/* ===========================
   EXPERIENCE
   =========================== */

export const experiences = [
  {
    title: "Data Analyst / ML Engineer",
    job: "Project-Driven & Research-Focused Work",
    date: "2023–Present",
    contents: [
      "Designed end-to-end analytics pipelines from raw data to executive dashboards.",
      "Built machine learning systems for fraud detection, NLP, and intelligent retrieval.",
      "Worked extensively with SQL, Python, and modern analytics tooling.",
      "Focused on explainability, scalability, and real-world business impact.",
    ],
  },
];

/* ===========================
   REVIEWS (PLACEHOLDER)
   =========================== */

export const reviews = [
  {
    name: "Hiring Manager",
    username: "Tech Company",
    body:
      "Strong analytical thinking with the ability to translate complex data into clear business insights.",
    img: "https://robohash.org/manager",
  },
];
