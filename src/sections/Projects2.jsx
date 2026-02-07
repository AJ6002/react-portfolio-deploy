// // // import { useState, useMemo } from "react";
// // // import { ExternalLink, Github } from "lucide-react";
// // // import InfiniteScroller from "../components/InfiniteScroller";
// // // import GlowButton from "../components/GlowButton";
// // // import { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // /* ================= CATEGORY CONFIG ================= */

// // // const categories = [
// // //   // { key: "sde", label: "SDE / Java" },
// // //   { key: "data", label: "Data Analyst" },
// // //   { key: "ml", label: "AI / ML" },
// // //   // { key: "mern", label: "MERN Stack" },
// // //   // { key: "cloud", label: "Cloud / DevOps" },
// // //   { key: "iot", label: "IoT / Embedded" },
// // // ];
// // // const [activeImage, setActiveImage] = useState(null);

// // // /* ================= TECH ICONS ================= */

// // // const techIcons = {
// // //   React: "/assets/logos/react.svg",
// // //   TailwindCSS: "/assets/logos/tailwindcss.svg",
// // //   Java: "/assets/logos/java.svg",
// // //   Spring: "/assets/logos/spring.svg",
  
// // //   // SQL: "/assets/logos/sqlite.svg",
// // //   ML: "/assets/logos/python.svg",
// // //   Node: "/assets/logos/javascript.svg",
// // //   AWS: "/assets/logos/azure.svg",
// // //   Docker: "/assets/logos/docker.svg",
// // //   ESP32: "/assets/logos/arduino.svg",

// // //   Python: "/assets/logos/python.svg",
// // //   SQL: "/assets/logos/sql.svg",
// // //   Pandas: "/assets/logos/pandas.svg",
// // //   PostgreSQL: "/assets/logos/postgresql.svg",
// // //   Excel: "/assets/logos/excel.svg",
// // //   PowerBI: "/assets/logos/powerbi.svg",
// // //   Tableau: "/assets/logos/tableau.svg",
// // //   Looker: "/assets/logos/looker.svg",
// // //   Airflow: "/assets/logos/airflow.svg",
// // //   Databricks: "/assets/logos/databricks.svg",

  
// // //   TensorFlow: "/assets/logos/tensorflow.svg",
// // //   OpenCV: "/assets/logos/opencv.svg",
// // //   OpenAI: "/assets/logos/openai.svg",
// // //   LangChain: "/assets/logos/langchain.svg",
// // //   Streamlit: "/assets/logos/Streamlit.svg",
// // //   FastAPI: "/assets/logos/fastapi.svg",
// // //   Flask: "/assets/logos/flask.svg",
// // //   Redis: "/assets/logos/redis.svg",
// // //   Neo4j: "/assets/logos/neo4j.svg",
// // //   Cypher: "/assets/logos/cypher.svg",
// // //   JSON: "/assets/logos/json.svg",
// // // };

// // // /* ================= PROJECT DATA ================= */

// // // const projects = [
// // //   /* ---------- SDE / JAVA ---------- */
// // //   {
// // //     id: 1,
// // //     title: "Spring Boot REST API",
// // //     description: "Scalable REST API with layered architecture and JWT auth.",
// // //     image: "/assets/projects/project1.png",
// // //     tags: ["Java", "Spring"],
// // //     category: "sde",
// // //     demoUrl: "#",
// // //     githubUrl: "#",
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Java File Indexer",
// // //     description: "High-performance file indexing system using multithreading.",
// // //     image: "/assets/projects/project2.jpg",
// // //     tags: ["Java"],
// // //     category: "sde",
// // //     demoUrl: "#",
// // //     githubUrl: "#",
// // //   },

// // //   /* ---------- DATA ANALYST ---------- */
// // //   /* ---------- DATA ANALYST PROJECTS ---------- */
// // // {
// // //   id: 101,
// // //   title: "Customer Transaction Risk & Churn Analysis",
// // //   description:
// // //     "Banking transaction analysis to identify inactivity patterns, early churn signals, and risky customer behavior using advanced SQL.",
// // //   image: "/assets/projects/data1.png",
// // //   // tags: ["SQL", "Analytics"],
// // //   tags: ["SQL", "PostgreSQL", "Python", "Pandas", "PowerBI"]
// // // ,
// // //   category: "data",
// // //   demoUrl: "#",
// // //   githubUrl: "#",
// // // },
// // // {
// // //   id: 102,
// // //   title: "Product Metrics & Retention Analysis",
// // //   description:
// // //     "End-to-end product analytics covering DAU/WAU/MAU, cohort retention, and feature adoption to evaluate user engagement.",
// // //   image: "/assets/projects/data2.png",
// // //   // tags: ["SQL", "Metrics"],
// // //   tags: ["SQL", "Python", "Pandas", "Tableau", "Excel"]
// // // ,
// // //   category: "data",
// // //   demoUrl: "#",
// // //   githubUrl: "#",
// // // },
// // // {
// // //   id: 103,
// // //   title: "Web-Scraped Job Market Intelligence",
// // //   description:
// // //     "Automated job-posting scraper with a custom database to analyze skill demand, salary trends, and market gaps.",
// // //   image: "/assets/projects/data3.png",
// // //   // tags: ["Python", "SQL"],
// // //   tags: ["Python", "SQL", "PostgreSQL", "Pandas", "Airflow"]
// // // ,
// // //   category: "data",
// // //   demoUrl: "#",
// // //   githubUrl: "#",
// // // },
// // // {
// // //   id: 104,
// // //   title: "Financial KPI Monitoring & Early Warning System",
// // //   description:
// // //     "Designed executive-level KPI tracking with thresholds and alerts to flag performance risks early.",
// // //   image: "/assets/projects/data4.png",
// // //   // tags: ["KPIs", "Dashboard"],
// // //   tags: ["SQL", "Python", "PowerBI", "Excel", "PostgreSQL"]
// // // ,
// // //   category: "data",
// // //   demoUrl: "#",
// // //   githubUrl: "#",
// // // },
// // // {
// // //   id: 105,
// // //   title: "Procurement Spend & Cost Optimization Analysis",
// // //   description:
// // //     "Analyzed vendor spend, concentration risk, and bundling opportunities to identify cost-reduction strategies.",
// // //   image: "/assets/projects/data5.jpg",
// // //   // tags: ["Cost", "Analytics"],
// // //   tags: ["SQL", "Python", "Pandas", "Tableau", "Excel"]
// // // ,
// // //   category: "data",
// // //   demoUrl: "#",
// // //   githubUrl: "#",
// // // },
// // // {
// // //   id: 106,
// // //   title: "E-commerce Funnel & Conversion Analysis",
// // //   description:
// // //     "Analyzed user drop-offs across the funnel and quantified revenue impact of conversion improvements.",
// // //   image: "/assets/projects/data6.png",
// // //   // tags: ["Funnel", "Analytics"],
// // //   tags: ["SQL", "Python", "Pandas", "Google Analytics", "Tableau"]
// // // ,
// // //   category: "data",
// // //   demoUrl: "#",
// // //   githubUrl: "#",
// // // },
// // // {
// // //   id: 107,
// // //   title: "Business KPI Dashboard",
// // //   description:
// // //     "Built a one-page executive dashboard tracking sales, operations, and marketing KPIs with actionable insights.",
// // //   image: "/assets/projects/data7.png",
// // //   // tags: ["Dashboard", "KPIs"],
// // //   tags: ["PowerBI", "SQL", "Excel", "PostgreSQL", "Python"]
// // // ,
// // //   category: "data",
// // //   demoUrl: "#",
// // //   githubUrl: "#",
// // // },


// // //   /* ---------- AI / ML ---------- */
// // // /* ---------- AI / ML PROJECTS ---------- */
// // // {
// // //   id: 201,
// // //   title: "Deepfake Detection Pipeline for KYC Fraud Prevention",
// // //   description:
// // //     "CNN ensemble system for detecting real vs synthetic faces in KYC workflows using EfficientNet, Xception, and ResNet50 with consensus scoring and Grad-CAM explainability.",
// // //   image: "/assets/projects/ml1.png",
// // //   // tags: ["Python", "TensorFlow", "CNN"],
// // //   tags: ["Python", "TensorFlow", "OpenCV", "Flask"]
// // // ,
// // //   category: "ml",
// // //   demoUrl: "#",
// // //   githubUrl: "#",
// // // },
// // // {
// // //   id: 202,
// // //   title: "Queue-Based Scalable RAG System",
// // //   description:
// // //     "Scalable Retrieval-Augmented Generation pipeline using async queues, vector search, and caching to enable non-blocking ingestion and low-latency LLM querying.",
// // //   image: "/assets/projects/ml2.png",
// // //   // tags: ["Python", "LangChain", "RAG"],
// // //   tags: ["Python", "LangChain", "FastAPI", "Redis", "OpenAI"]
// // // ,
// // //   category: "ml",
// // //   demoUrl: "#",
// // //   githubUrl: "#",
// // // },
// // // {
// // //   id: 203,
// // //   title: "Graph Memory Agent (LangGraph + Neo4j)",
// // //   description:
// // //     "LLM agent with persistent graph-based memory, storing and traversing conversation context using Neo4j and Cypher for long-term reasoning.",
// // //   image: "/assets/projects/ml3.png",
// // //   // tags: ["LangGraph", "Neo4j", "LLM"],
// // //   tags: ["Python", "LangChain", "Neo4j", "Cypher", "OpenAI"]
// // // ,
// // //   category: "ml",
// // //   demoUrl: "#",
// // //   githubUrl: "#",
// // // },
// // // {
// // //   id: 204,
// // //   title: "Multi-Agent LLM Debugger Suite",
// // //   description:
// // //     "Multi-agent framework for testing, comparing, and evaluating LLM prompt behavior with structured JSON outputs and an interactive inspection UI.",
// // //   image: "/assets/projects/ml4.png",
// // //   // tags: ["AutoGen", "LLM", "Agents"],
// // //   tags: ["Python", "OpenAI", "JSON", "Streamlit"]
// // // ,
// // //   category: "ml",
// // //   demoUrl: "#",
// // //   githubUrl: "#",
// // // },


// // //   /* ---------- MERN ---------- */
// // //   {
// // //     id: 7,
// // //     title: "Task Management App",
// // //     description: "Full-stack MERN app with auth and CRUD workflows.",
// // //     image: "/assets/projects/project7.jpg",
// // //     tags: ["React", "Node"],
// // //     category: "mern",
// // //     demoUrl: "#",
// // //     githubUrl: "#",
// // //   },
// // //   {
// // //     id: 8,
// // //     title: "Portfolio CMS",
// // //     description: "Content-managed portfolio using React and Node APIs.",
// // //     image: "/assets/projects/project8.jpg",
// // //     tags: ["React", "Node"],
// // //     category: "mern",
// // //     demoUrl: "#",
// // //     githubUrl: "#",
// // //   },

// // //   /* ---------- CLOUD / DEVOPS ---------- */
// // //   {
// // //     id: 9,
// // //     title: "CI/CD Pipeline Setup",
// // //     description: "Dockerized app deployed with automated CI/CD workflow.",
// // //     image: "/assets/projects/project9.jpg",
// // //     tags: ["Docker", "AWS"],
// // //     category: "cloud",
// // //     demoUrl: "#",
// // //     githubUrl: "#",
// // //   },
// // //   {
// // //     id: 10,
// // //     title: "Cloud Monitoring Stack",
// // //     description: "Deployed monitoring stack with logging and alerts.",
// // //     image: "/assets/projects/project10.jpg",
// // //     tags: ["AWS"],
// // //     category: "cloud",
// // //     demoUrl: "#",
// // //     githubUrl: "#",
// // //   },

// // //   /* ---------- IOT / EMBEDDED ---------- */
// // //   {
// // //     id: 11,
// // //     title: "IoT Health Monitor",
// // //     description: "ESP32-based sensor system with real-time monitoring.",
// // //     image: "/assets/projects/project11.jpg",
// // //     tags: ["ESP32"],
// // //     category: "iot",
// // //     demoUrl: "#",
// // //     githubUrl: "#",
// // //   },
// // //   {
// // //     id: 12,
// // //     title: "Smart Energy Meter",
// // //     description: "Embedded system for power usage tracking.",
// // //     image: "/assets/projects/project12.jpg",
// // //     tags: ["ESP32"],
// // //     category: "iot",
// // //     demoUrl: "#",
// // //     githubUrl: "#",
// // //   },
// // // ];

// // // /* ================= COMPONENT ================= */

// // // const Projects = () => {
// // //   const [activeCategory, setActiveCategory] = useState("ml");

// // //   const filteredProjects = useMemo(
// // //     () => projects.filter((p) => p.category === activeCategory),
// // //     [activeCategory]
// // //   );

// // //   return (
// // //     <section id="projects" className="c-space py-28 relative">
// // //       <div className="container mx-auto">

// // //         {/* Heading */}
// // //         <h2 className="text-heading text-center mb-4">
// // //           Featured <span className="text-mint">Projects</span>
// // //         </h2>

// // //         <p className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto">
// // //           Projects grouped by role to showcase practical, job-ready skills.
// // //         </p>

// // //         {/* ================= TOGGLE BUTTONS ================= */}
// // //         <div className="flex flex-wrap justify-center gap-4 mb-20">
// // //           {categories.map((cat) => (
// // //             <button
// // //               key={cat.key}
// // //               onClick={() => setActiveCategory(cat.key)}
// // //               className={`
// // //                 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300
// // //                 border border-white/10
// // //                 ${
// // //                   activeCategory === cat.key
// // //                     ? "bg-mint text-black shadow-[0_0_20px_rgba(87,219,150,0.5)] scale-105"
// // //                     : "bg-white/5 text-neutral-300 hover:bg-white/10"
// // //                 }
// // //               `}
// // //             >
// // //               {cat.label}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* ================= INFINITE SCROLLER ================= */}
// // //         <InfiniteScroller key={activeCategory} speed="slow">
// // //           {filteredProjects.map((project) => (
// // //             <div
// // //               key={project.id}
// // //               className="min-w-[340px] max-w-[340px]"
// // //             >
// // //               <div className="project-card h-full">
// // //                 <div className="project-image">
// // //                   <img src={project.image} alt={project.title} />
// // //                 </div>

// // //                 <div className="project-content">

// // //                   <div className="flex items-center gap-4 mb-4">
// // //                     {project.tags.map(
// // //                       (tag) =>
// // //                         techIcons[tag] && (
// // //                           <img
// // //                             key={tag}
// // //                             src={techIcons[tag]}
// // //                             alt={tag}
// // //                             title={tag}
// // //                             className="tech-icon-pure"
// // //                           />
// // //                         )
// // //                     )}
// // //                   </div>

// // //                   <h3 className="project-title">{project.title}</h3>

// // //                   <p className="project-description">
// // //                     {project.description}
// // //                   </p>

// // //                   <div className="project-links">
// // //                     <a href={project.demoUrl} target="_blank">
// // //                       <ExternalLink size={20} />
// // //                     </a>
// // //                     <a href={project.githubUrl} target="_blank">
// // //                       <Github size={20} />
// // //                     </a>
// // //                   </div>

// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </InfiniteScroller>

// // //         {/* CTA */}
// // //         <div className="text-center mt-24">
// // //           <GlowButton href="https://github.com/aj6002">
// // //             Check My GitHub →
// // //           </GlowButton>
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Projects;


// import { useState, useMemo } from "react";
// import { ExternalLink, Github } from "lucide-react";
// import InfiniteScroller from "../components/InfiniteScroller";
// import GlowButton from "../components/GlowButton";

// /* ================= CATEGORY CONFIG ================= */

// const categories = [
//   { key: "data", label: "Data Analyst" },
//   { key: "ml", label: "AI / ML" },
//   { key: "iot", label: "IoT / Embedded" },
// ];

// /* ================= TECH ICONS ================= */

// const techIcons = {
//   // Core
//   Python: "/assets/logos/python.svg",
//   SQL: "/assets/logos/sql.svg",
//   Pandas: "/assets/logos/pandas.svg",
//   PostgreSQL: "/assets/logos/postgresql.svg",
//   Excel: "/assets/logos/excel.svg",
//   PowerBI: "/assets/logos/powerbi.svg",
//   Tableau: "/assets/logos/tableau.svg",
//   Looker: "/assets/logos/looker.svg",
//   Airflow: "/assets/logos/airflow.svg",
//   Databricks: "/assets/logos/databricks.svg",

//   // AI / ML
//   TensorFlow: "/assets/logos/tensorflow.svg",
//   OpenCV: "/assets/logos/opencv.svg",
//   OpenAI: "/assets/logos/openai.svg",
//   LangChain: "/assets/logos/langchain.svg",
//   FastAPI: "/assets/logos/fastapi.svg",
//   Flask: "/assets/logos/flask.svg",
//   Redis: "/assets/logos/redis.svg",
//   Neo4j: "/assets/logos/neo4j.svg",
//   Cypher: "/assets/logos/cypher.svg",
//   Streamlit: "/assets/logos/Streamlit.svg",
//   JSON: "/assets/logos/json.svg",

//   // IoT
//   ESP32: "/assets/logos/arduino.svg",
// };

// /* ================= PROJECT DATA ================= */

// const projects = [
//   /* ---------- DATA ANALYST ---------- */
//   {
//     id: 101,
//     title: "Customer Transaction Risk & Churn Analysis",
//     description:
//       "Banking transaction analysis to identify inactivity patterns, early churn signals, and risky customer behavior.",
//     image: "/assets/projects/data1.png",
//     tags: ["SQL", "PostgreSQL", "Python", "Pandas", "PowerBI"],
//     category: "data",
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 102,
//     title: "Product Metrics & Retention Analysis",
//     description:
//       "DAU/WAU/MAU analysis with cohort retention and feature adoption metrics.",
//     image: "/assets/projects/data2.png",
//     tags: ["SQL", "Python", "Pandas", "Tableau", "Excel"],
//     category: "data",
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 103,
//     title: "Web-Scraped Job Market Intelligence",
//     description:
//       "Automated job scraping pipeline analyzing skill demand and salary trends.",
//     image: "/assets/projects/data3.png",
//     tags: ["Python", "SQL", "PostgreSQL", "Pandas", "Airflow"],
//     category: "data",
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 104,
//     title: "Financial KPI Monitoring System",
//     description:
//       "Executive KPI dashboards with thresholds and early risk alerts.",
//     image: "/assets/projects/data4.png",
//     tags: ["SQL", "Python", "PowerBI", "Excel"],
//     category: "data",
//     demoUrl: "#",
//     githubUrl: "#",
//   },

//   /* ---------- AI / ML ---------- */
//   {
//     id: 201,
//     title: "Deepfake Detection for KYC Fraud",
//     description:
//       "CNN ensemble system with Grad-CAM explainability for real vs fake face detection.",
//     image: "/assets/projects/ml1.png",
//     tags: ["Python", "TensorFlow", "OpenCV", "Flask"],
//     category: "ml",
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 202,
//     title: "Scalable RAG System",
//     description:
//       "Queue-based Retrieval-Augmented Generation pipeline with async ingestion.",
//     image: "/assets/projects/ml2.png",
//     tags: ["Python", "LangChain", "FastAPI", "Redis", "OpenAI"],
//     category: "ml",
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 203,
//     title: "Graph Memory Agent",
//     description:
//       "LLM agent with persistent Neo4j-backed graph memory for contextual reasoning.",
//     image: "/assets/projects/ml3.png",
//     tags: ["Python", "LangChain", "Neo4j", "Cypher", "OpenAI"],
//     category: "ml",
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 204,
//     title: "Multi-Agent LLM Debugger",
//     description:
//       "Framework to evaluate and compare LLM behavior with structured outputs.",
//     image: "/assets/projects/ml4.png",
//     tags: ["Python", "OpenAI", "JSON", "Streamlit"],
//     category: "ml",
//     demoUrl: "#",
//     githubUrl: "#",
//   },

//   /* ---------- IOT / EMBEDDED ---------- */
//   {
//     id: 301,
//     title: "IoT Health Monitoring System",
//     description:
//       "ESP32-based sensor platform with real-time telemetry monitoring.",
//     image: "/assets/projects/project11.jpg",
//     tags: ["ESP32"],
//     category: "iot",
//     demoUrl: "#",
//     githubUrl: "#",
//   },
// ];

// /* ================= COMPONENT ================= */

// const Projects = () => {
//   // Default category → AI / ML
//   const [activeCategory, setActiveCategory] = useState("ml");

//   const filteredProjects = useMemo(
//     () => projects.filter((p) => p.category === activeCategory),
//     [activeCategory]
//   );

//   return (
//     <section id="projects" className="c-space py-28 relative">
//       <div className="container mx-auto">

//         {/* Heading */}
//         <h2 className="text-heading text-center mb-4">
//           Featured <span className="text-mint">Projects</span>
//         </h2>

//         <p className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto">
//           Projects grouped by role to demonstrate real-world, job-ready skills.
//         </p>

//         {/* ================= TOGGLE BUTTONS ================= */}
//         <div className="flex flex-wrap justify-center gap-5 mb-20">
//           {categories.map((cat) => (
//             <button
//               key={cat.key}
//               onClick={() => setActiveCategory(cat.key)}
//               className={`
//                 px-10 py-4 rounded-full text-base font-medium
//                 transition-all duration-300 border border-white/10
//                 ${
//                   activeCategory === cat.key
//                     ? "bg-mint text-black scale-105 shadow-[0_0_25px_rgba(87,219,150,0.55)]"
//                     : "bg-white/5 text-neutral-300 hover:bg-white/10"
//                 }
//               `}
//             >
//               {cat.label}
//             </button>
//           ))}
//         </div>

//         {/* ================= INFINITE SCROLLER ================= */}
//         <InfiniteScroller key={activeCategory} speed="slow">
//           {filteredProjects.map((project) => (
//             <div key={project.id} className="min-w-[340px] max-w-[340px]">
//               <div className="project-card h-full">

//                 <div className="project-image">
//                   <img src={project.image} alt={project.title} />
//                 </div>

//                 <div className="project-content">

//                   <div className="flex items-center gap-4 mb-4">
//                     {project.tags.map(
//                       (tag) =>
//                         techIcons[tag] && (
//                           <img
//                             key={tag}
//                             src={techIcons[tag]}
//                             alt={tag}
//                             title={tag}
//                             className="tech-icon-pure"
//                           />
//                         )
//                     )}
//                   </div>

//                   <h3 className="project-title">{project.title}</h3>

//                   <p className="project-description">
//                     {project.description}
//                   </p>

//                   <div className="project-links">
//                     <a href={project.demoUrl} target="_blank" rel="noreferrer">
//                       <ExternalLink size={20} />
//                     </a>
//                     <a href={project.githubUrl} target="_blank" rel="noreferrer">
//                       <Github size={20} />
//                     </a>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </InfiniteScroller>

//         {/* CTA */}
//         <div className="text-center mt-24">
//           <GlowButton href="https://github.com/aj6002">
//             Check My GitHub →
//           </GlowButton>
//         </div>

//       </div>
//     </section>
//   );
// };

// // export default Projects;
// // import { useState, useMemo } from "react";
// // import { ExternalLink, Github } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";

// // import InfiniteScroller from "../components/InfiniteScroller";
// // import GlowButton from "../components/GlowButton";
// // import { useState, useMemo } from "react";
// // import ProjectDetails from "../components/ProjectDetails";

// // /* ================= CATEGORY CONFIG ================= */
// // const [selectedProject, setSelectedProject] = useState(null);

// // const categories = [
// //   { key: "data", label: "Data Analyst" },
// //   { key: "ml", label: "AI / ML" },
// //   { key: "iot", label: "IoT / Embedded" },
// // ];

// // /* ================= TECH ICONS ================= */

// // const techIcons = {
// //   // Core
// //   Python: "/assets/logos/python.svg",
// //   SQL: "/assets/logos/sql.svg",
// //   Pandas: "/assets/logos/pandas.svg",
// //   PostgreSQL: "/assets/logos/postgresql.svg",
// //   Excel: "/assets/logos/excel.svg",
// //   PowerBI: "/assets/logos/powerbi.svg",
// //   Tableau: "/assets/logos/tableau.svg",
// //   Looker: "/assets/logos/looker.svg",
// //   Airflow: "/assets/logos/airflow.svg",
// //   Databricks: "/assets/logos/databricks.svg",

// //   // AI / ML
// //   TensorFlow: "/assets/logos/tensorflow.svg",
// //   OpenCV: "/assets/logos/opencv.svg",
// //   OpenAI: "/assets/logos/openai.svg",
// //   LangChain: "/assets/logos/langchain.svg",
// //   Streamlit: "/assets/logos/Streamlit.svg",
// //   FastAPI: "/assets/logos/fastapi.svg",
// //   Flask: "/assets/logos/flask.svg",
// //   Redis: "/assets/logos/redis.svg",
// //   Neo4j: "/assets/logos/neo4j.svg",
// //   Cypher: "/assets/logos/cypher.svg",
// //   JSON: "/assets/logos/json.svg",

// //   // IoT
// //   ESP32: "/assets/logos/arduino.svg",
// // };

// // /* ================= PROJECT DATA ================= */

// // const projects = [
// //   /* ---------- DATA ANALYST ---------- */
// //   {
// //     id: 101,
// //     title: "Customer Transaction Risk & Churn Analysis",
// //     description:
// //       "Identified inactivity patterns, early churn signals, and risky customer behavior using advanced SQL analytics.",
// //     image: "/assets/projects/data1.png",
// //     tags: ["SQL", "PostgreSQL", "Python", "Pandas", "PowerBI"],
// //     category: "data",
// //   },
// //   {
// //     id: 102,
// //     title: "Product Metrics & Retention Analysis",
// //     description:
// //       "DAU/WAU/MAU, cohort retention, and feature adoption analysis for product decision-making.",
// //     image: "/assets/projects/data2.png",
// //     tags: ["SQL", "Python", "Pandas", "Tableau", "Excel"],
// //     category: "data",
// //   },
// //   {
// //     id: 103,
// //     title: "Web-Scraped Job Market Intelligence",
// //     description:
// //       "Automated job scraping pipeline analyzing skill demand, salary trends, and market gaps.",
// //     image: "/assets/projects/data3.png",
// //     tags: ["Python", "SQL", "PostgreSQL", "Pandas", "Airflow"],
// //     category: "data",
// //   },

// //   /* ---------- AI / ML ---------- */
// //   {
// //     id: 201,
// //     title: "Deepfake Detection for KYC Fraud Prevention",
// //     description:
// //       "CNN ensemble detecting synthetic faces using EfficientNet, Xception, and Grad-CAM explainability.",
// //     image: "/assets/projects/ml1.png",
// //     tags: ["Python", "TensorFlow", "OpenCV", "Flask"],
// //     category: "ml",
// //   },
// //   {
// //     id: 202,
// //     title: "Queue-Based Scalable RAG System",
// //     description:
// //       "Async Retrieval-Augmented Generation system with vector search and caching.",
// //     image: "/assets/projects/ml2.png",
// //     tags: ["Python", "LangChain", "FastAPI", "Redis", "OpenAI"],
// //     category: "ml",
// //   },
// //   {
// //     id: 203,
// //     title: "Graph Memory Agent (Neo4j + LangGraph)",
// //     description:
// //       "Persistent LLM memory using graph traversal for long-term reasoning.",
// //     image: "/assets/projects/ml3.png",
// //     tags: ["Python", "LangChain", "Neo4j", "Cypher", "OpenAI"],
// //     category: "ml",
// //   },
// //   {
// //     id: 204,
// //     title: "Multi-Agent LLM Debugger Suite",
// //     description:
// //       "Framework for testing and comparing LLM behavior with structured outputs.",
// //     image: "/assets/projects/ml4.png",
// //     tags: ["Python", "OpenAI", "JSON", "Streamlit"],
// //     category: "ml",
// //   },

// //   /* ---------- IOT ---------- */
// //   {
// //     id: 301,
// //     title: "IoT Health Monitoring System",
// //     description:
// //       "ESP32-based sensor system with real-time monitoring and alerts.",
// //     image: "/assets/projects/project11.jpg",
// //     tags: ["ESP32"],
// //     category: "iot",
// //   },
// // ];

// // /* ================= COMPONENT ================= */

// // const Projects = () => {
// //   const [activeCategory, setActiveCategory] = useState("ml"); // default AI/ML
// //   const [activeProject, setActiveProject] = useState(null);

// //   const filteredProjects = useMemo(
// //     () => projects.filter((p) => p.category === activeCategory),
// //     [activeCategory]
// //   );

// //   return (
// //     <section id="projects" className="c-space py-28 relative">
// //       <div className="container mx-auto">

// //         {/* Heading */}
// //         <h2 className="text-heading text-center mb-4">
// //           Featured <span className="text-mint">Projects</span>
// //         </h2>

// //         <p className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto">
// //           Projects grouped by role to highlight job-ready, real-world skills.
// //         </p>

// //         {/* ===== CATEGORY TOGGLES ===== */}
// //         <div className="flex flex-wrap justify-center gap-5 mb-20">
// //           {categories.map((cat) => (
// //             <button
// //               key={cat.key}
// //               onClick={() => setActiveCategory(cat.key)}
// //               className={`px-9 py-4 rounded-full text-base font-medium transition-all duration-300 border
// //                 ${
// //                   activeCategory === cat.key
// //                     ? "bg-mint text-black shadow-[0_0_25px_rgba(87,219,150,0.5)] scale-105"
// //                     : "bg-white/5 text-neutral-300 hover:bg-white/10 border-white/10"
// //                 }`}
// //             >
// //               {cat.label}
// //             </button>
// //           ))}
// //         </div>

// //         {/* ===== INFINITE SCROLLER ===== */}
// //         <InfiniteScroller key={activeCategory} speed="slow">
// //           {filteredProjects.map((project) => (
// //             <motion.div
// //               key={project.id}
// //               layout
// //               onClick={() => setActiveProject(project)}
// //               className="min-w-[340px] max-w-[340px] cursor-pointer"
// //             >
// //               <motion.div
// //                 layout
// //                 className=""
// //                 whileHover={{ scale: 1.03 }}
// //               >
// //                 <div className="project-image">
// //                   <img src={project.image} alt={project.title} />
// //                 </div>

// //                 <div className="project-content">
// //                   <div className="flex items-center gap-4 mb-4">
// //                     {project.tags.map(
// //                       (tag) =>
// //                         techIcons[tag] && (
// //                           <img
// //                             key={tag}
// //                             src={techIcons[tag]}
// //                             alt={tag}
// //                             className="tech-icon-pure"
// //                           />
// //                         )
// //                     )}
// //                   </div>

// //                   <h3 className="project-title">{project.title}</h3>

// //                   <p className="project-description">
// //                     {project.description}
// //                   </p>

// //                   <div className="project-links">
// //                     <ExternalLink size={20} />
// //                     <Github size={20} />
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </motion.div>
// //           ))}
// //         </InfiniteScroller>

// //         {/* ===== CTA ===== */}
// //         <div className="text-center mt-24">
// //           <GlowButton href="https://github.com/aj6002">
// //             Check My GitHub →
// //           </GlowButton>
// //         </div>

// //         {/* ===== FOCUSED CARD OVERLAY ===== */}
// //         <AnimatePresence>
// //   {activeProject && (
// //     <>
// //       {/* BACKDROP */}
// //       <motion.div
// //         className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         exit={{ opacity: 0 }}
// //         onClick={() => setActiveProject(null)}
// //       />

// //       {/* MODAL */}
// //       <motion.div
// //         className="fixed inset-0 z-50 flex items-center justify-center px-4"
// //         initial={{ scale: 0.9, opacity: 0 }}
// //         animate={{ scale: 1, opacity: 1 }}
// //         exit={{ scale: 0.9, opacity: 0 }}
// //         transition={{ type: "spring", stiffness: 260, damping: 22 }}
// //       >
// //         {/* STOP CLICK FROM CLOSING */}
// //         <div onClick={(e) => e.stopPropagation()}>
// //           <div className="project-card max-w-[640px] w-full">

// //             {/* IMAGE */}
// //             <div className="project-image">
// //               <img
// //                 src={activeProject.image}
// //                 alt={activeProject.title}
// //               />
// //             </div>

// //             {/* CONTENT */}
// //             <div className="project-content">

// //               {/* TECH ICONS */}
// //               <div className="flex items-center gap-4 mb-5">
// //                 {activeProject.tags.map(
// //                   (tag) =>
// //                     techIcons[tag] && (
// //                       <img
// //                         key={tag}
// //                         src={techIcons[tag]}
// //                         alt={tag}
// //                         title={tag}
// //                         className="tech-icon-pure"
// //                       />
// //                     )
// //                 )}
// //               </div>

// //               <h3 className="project-title text-xl">
// //                 {activeProject.title}
// //               </h3>

// //               <p className="project-description mt-3">
// //                 {activeProject.description}
// //               </p>

// //               {/* LINKS */}
// //               <div className="project-links mt-6 flex gap-5">
// //                 <a
// //                   href={activeProject.demoUrl || "#"}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="hover:text-mint transition"
// //                 >
// //                   <ExternalLink size={22} />
// //                 </a>

// //                 <a
// //                   href={activeProject.githubUrl || "#"}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="hover:text-mint transition"
// //                 >
// //                   <Github size={22} />
// //                 </a>
// //               </div>

// //             </div>
// //           </div>
// //         </div>
// //       </motion.div>
// //     </>
// //   )}
// // </AnimatePresence>


// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

