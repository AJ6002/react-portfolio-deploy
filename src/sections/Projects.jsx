import { useState, useMemo } from "react";
import { ExternalLink, Github } from "lucide-react";
import InfiniteScroller from "../components/InfiniteScroller";
import GlowButton from "../components/GlowButton";

/* ================= TECH ICON MAP ================= */
const techIcons = {
  python: "/assets/logos/python.svg",
  tensorflow: "/assets/logos/tensorflow.svg",
  opencv: "/assets/logos/opencv.svg",
  flask: "/assets/logos/flask.svg",
  fastapi: "/assets/logos/fastapi.svg",
  langchain: "/assets/logos/langchain.svg",
  neo4j: "/assets/logos/neo4j.svg",
  redis: "/assets/logos/redis.svg",
  streamlit: "/assets/logos/Streamlit.svg",
  sql: "/assets/logos/sql.svg",
  pandas: "/assets/logos/pandas.svg",
  powerbi: "/assets/logos/powerbi.svg",
};

/* ================= PROJECT DATA ================= */
const projects = [
  /* ---------- AI / ML ---------- */
  {
    id: 1,
    title: "Deepfake Detection for KYC Fraud",
    description:
      "CNN ensemble system to detect synthetic faces in KYC pipelines with Grad-CAM explainability.",
    image: "/assets/projects/ml1.png",
    tags: ["python", "tensorflow", "opencv", "flask"],
    category: "aiml",
  },
  {
    id: 2,
    title: "Graph Memory Agent",
    description:
      "LLM agent with persistent memory using LangGraph and Neo4j for contextual reasoning.",
    image: "/assets/projects/ml2.png",
    tags: ["python", "langchain", "neo4j", "redis"],
    category: "aiml",
  },
  {
    id: 3,
    title: "Multi-Agent LLM Debugger",
    description:
      "Framework to test and compare LLM prompt behavior with structured outputs.",
    image: "/assets/projects/ml3.png",
    tags: ["python", "langchain", "streamlit"],
    category: "aiml",
  },

  /* ---------- DATA ANALYST ---------- */
  {
    id: 4,
    title: "Customer Transaction Risk Analysis",
    description:
      "SQL-driven banking analysis to detect churn, inactivity, and risk patterns.",
    image: "/assets/projects/data1.png",
    tags: ["sql", "python", "pandas"],
    category: "data",
  },
  {
    id: 5,
    title: "Product Metrics & Retention Analysis",
    description:
      "DAU/WAU/MAU, cohort retention, and feature adoption analytics.",
    image: "/assets/projects/data2.png",
    tags: ["sql", "pandas", "powerbi"],
    category: "data",
  },
  {
    id: 6,
    title: "Web-Scraped Job Market Intelligence",
    description:
      "Automated scraper analyzing skill demand and salary trends.",
    image: "/assets/projects/data3.png",
    tags: ["python", "sql", "pandas"],
    category: "data",
  },

  /* ---------- JAVA / SDE ---------- */
  {
    id: 7,
    title: "Enterprise Order Management System",
    description:
      "Spring-based backend system with transactional integrity and REST APIs.",
    image: "/assets/projects/project3.jpg",
    tags: ["sql"],
    category: "java",
  },
];

/* ================= CATEGORIES ================= */
const categories = [
  { key: "aiml", label: "AI / ML" },
  { key: "data", label: "Data Analyst" },
  { key: "java", label: "SDE / Java" },
  { key: "mern", label: "MERN Stack", disabled: true },
  { key: "cloud", label: "Cloud / DevOps", disabled: true },
  { key: "iot", label: "IoT / Embedded", disabled: true },
];

const Projects = () => {
  /* Default = AI / ML */
  const [activeCategory, setActiveCategory] = useState("aiml");

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section id="projects" className="c-space py-28 relative">
      <div className="container mx-auto">

        {/* ===== Heading ===== */}
        <h2 className="text-heading text-center mb-4">
          Featured <span className="text-mint">Projects</span>
        </h2>

        <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">
          Projects categorized by role and technical focus.
        </p>

        {/* ===== Toggle Buttons ===== */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              disabled={cat.disabled}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  activeCategory === cat.key
                    ? "bg-mint text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }
                ${cat.disabled ? "opacity-40 cursor-not-allowed" : ""}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ===== Infinite Scroller ===== */}
        <InfiniteScroller key={activeCategory} speed="slow">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="min-w-[340px] max-w-[340px]"
            >
              <div className="project-card h-full">

                {/* Image */}
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                {/* Content */}
                <div className="project-content">

                  {/* Tech Icons */}
                  <div className="flex items-center gap-4 mb-4">
                    {project.tags.map(
                      (tag) =>
                        techIcons[tag] && (
                          <img
                            key={tag}
                            src={techIcons[tag]}
                            alt={tag}
                            title={tag}
                            className="tech-icon-pure"
                          />
                        )
                    )}
                  </div>

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-links">
                    <a href="#" target="_blank">
                      <ExternalLink size={20} />
                    </a>
                    <a href="#" target="_blank">
                      <Github size={20} />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </InfiniteScroller>

        {/* ===== GitHub CTA ===== */}
        <div className="text-center mt-24">
          <GlowButton>
            Check My GitHub →
          </GlowButton>
        </div>

      </div>
    </section>
  );
};

export default Projects;
