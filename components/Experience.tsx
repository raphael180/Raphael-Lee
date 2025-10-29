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

// Get company initials from company name
const getCompanyInitials = (company: string) => {
  const words = company.split(" ");
  if (words.length >= 2) {
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }
  return company.substring(0, 2).toUpperCase();
};

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

        <div className="relative">
          {/* Timeline vertical line on the left */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600"></div>

          <div className="space-y-12 md:space-y-16 pl-20 md:pl-32">
            {experiences.map((exp, index) => {
              const initials = getCompanyInitials(exp.company);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  {/* Timeline dot with company initials */}
                  <div className="absolute -left-[2.75rem] md:-left-[3.75rem] transform -translate-x-1/2 -translate-y-1/2 top-0">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-purple-500 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      ></motion.div>
                      <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-black z-10 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xs md:text-sm">
                          {initials}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    className="glass rounded-2xl p-6 md:p-8 hover:glass-strong transition-all relative group"
                    whileHover={{ scale: 1.01, x: 5 }}
                  >
                    {/* Period badge */}
                    <div className="absolute -top-3 left-6 md:left-8 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full text-xs font-semibold text-white shadow-lg">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-purple-400 mb-4">
                        <span className="font-semibold text-base">{exp.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2.5 mt-6">
                        {exp.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + i * 0.05 }}
                          >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold mt-1.5 flex-shrink-0">
                              ▹
                            </span>
                            <span className="leading-relaxed">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Gradient accent on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-purple-600/0 group-hover:from-purple-600/5 group-hover:via-pink-600/5 group-hover:to-purple-600/5 transition-all pointer-events-none"></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
