"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";

const projects = [
  {
    name: "TryVariant",
    period: "Mar 2025 – Oct 2025",
    type: "Social Media Game Platform",
    tech: ["Flutter", "TypeScript", "Python", "Hugging Face"],
    description: "A cross-platform AI Game Generator that transforms text prompts into fully playable games with dynamic levels, mechanics, and assets.",
    highlights: [
      "Developed cross-platform AI Game Generator transforming text prompts into playable games",
      "Designed AI asset pipeline with FastAPI, integrated with RunningHub for model orchestration",
      "Architected web and mobile applications sharing logic and UI components across platforms",
    ],
    gradient: "from-purple-600 to-pink-600",
  },
  {
    name: "TopHap Explorer",
    period: "Dec 2022 – Jul 2023",
    type: "Real Estate AR App",
    tech: ["React Native", "Google Maps", "AWS"],
    description: "Full-featured real estate mobile app providing real-time property data, neighborhood insights, and market analytics with AR capabilities.",
    highlights: [
      "Developed full-featured real estate mobile app from scratch using React Native",
      "Integrated AR with ARKit and ARCore for instant property identification",
      "Implemented GPS-based discovery via Google Maps API with Redux-Thunk",
      "Built real-time synchronization and CMA features using AWS, WebSockets, and React Query",
    ],
    gradient: "from-blue-600 to-cyan-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="gradient-border h-full">
                <div className="gradient-border-content h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Calendar size={14} />
                        <span className="text-sm">{project.period}</span>
                      </div>
                      <p className="text-purple-400 text-sm font-medium mb-4">{project.type}</p>
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                  </div>

                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full glass text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} font-bold mt-1`}>
                          ▹
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

