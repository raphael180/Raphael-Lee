"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI Researcher | Lead Frontend Engineer",
    company: "Variant Labs",
    location: "San Francisco, CA",
    period: "Aug 2023 – Oct 2025",
    highlights: [
      "Researched and implemented real-time AI generation pipelines for procedural game assets",
      "Built full-stack AI asset workflow using FastAPI with RunningHub for model orchestration",
      "Architected web and mobile applications with TypeScript, React Native, and Flutter",
      "Deployed scalable infrastructure on GCP for high-volume AI workloads",
      "Integrated Kibana logging and monitoring for performance insights",
      "Built real-time collaboration features using Firestore and WebSockets",
      "Led frontend architecture with Riverpod and Redux Toolkit",
    ],
  },
  {
    title: "Software Engineer",
    company: "TopHap",
    location: "San Ramon, CA",
    period: "Jan 2021 – Jul 2023",
    highlights: [
      "Developed TopHap Explorer mobile app from scratch using React Native",
      "Integrated AR for property identification with ARKit and ARCore",
      "Implemented GPS-based property search with Google Maps API",
      "Developed real-time data synchronization using WebSockets and AWS",
      "Built Comparative Market Analysis (CMA) feature with React Query",
      "Integrated neighborhood analysis features with external APIs",
      "Handled complex state management with Redux and Redux-Thunk",
      "Conducted rigorous testing with Jest and React Native Testing Library",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "True Prodigy Tech Solution",
    location: "McKinney, TX",
    period: "Jun 2019 – Dec 2020",
    highlights: [
      "Learned and applied React.js/React Native/TypeScript for daily tasks",
      "Designed architecture using Redux and Redux Saga for state management",
      "Delivered responsive and pixel-perfect user interfaces",
      "Implemented React Hooks to accelerate frontend rebuilds",
      "Wrote readable and bug-free code using TypeScript",
      "Used testing frameworks including Jest, Mocha, and Cypress",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Work</span> Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-8 hover:glass-strong transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <span className="font-semibold">{exp.company}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {exp.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                  >
                    <span className="text-purple-500 mt-2">▹</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

