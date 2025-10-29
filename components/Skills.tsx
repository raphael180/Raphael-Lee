"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Shield,
  TestTube,
  Brain,
  GitBranch,
  Package,
  Server,
  Globe,
  MessageSquare,
  FileCode,
  Box,
  Network,
  Settings,
  Zap,
  Hexagon,
  Smartphone,
  Gamepad,
  Flame,
} from "lucide-react";

// Technology icon mapping
const getTechIcon = (tech: string) => {
  const iconMap: Record<string, { icon: any; color: string }> = {
    // Languages
    JavaScript: { icon: Code2, color: "#F7DF1E" },
    TypeScript: { icon: Code2, color: "#3178C6" },
    Java: { icon: Hexagon, color: "#ED8B00" },
    Kotlin: { icon: Code2, color: "#7F52FF" },
    Swift: { icon: Code2, color: "#FA7343" },
    Python: { icon: Code2, color: "#3776AB" },
    Dart: { icon: Code2, color: "#0175C2" },

    // Frameworks
    React: { icon: Hexagon, color: "#61DAFB" },
    "Next.js": { icon: Globe, color: "#000000" },
    "React Native": { icon: Smartphone, color: "#61DAFB" },
    Flutter: { icon: Smartphone, color: "#02569B" },
    "Node.js": { icon: Server, color: "#339933" },
    "Express.js": { icon: Network, color: "#000000" },
    "Phaser.js": { icon: Gamepad, color: "#FF0000" },

    // Databases
    MySQL: { icon: Database, color: "#4479A1" },
    PostgreSQL: { icon: Database, color: "#4169E1" },
    SQLite: { icon: Database, color: "#003B57" },
    MongoDB: { icon: Database, color: "#47A248" },
    Redis: { icon: Database, color: "#DC382D" },
    "AWS DynamoDB": { icon: Database, color: "#FF9900" },

    // Cloud & DevOps
    AWS: { icon: Cloud, color: "#FF9900" },
    Firebase: { icon: Flame, color: "#FFCA28" },
    WebSocket: { icon: MessageSquare, color: "#010101" },
    GraphQL: { icon: Network, color: "#E10098" },
    Docker: { icon: Box, color: "#2496ED" },
    "CI/CD": { icon: Zap, color: "#FF6B6B" },

    // Testing
    Jest: { icon: TestTube, color: "#C21325" },
    Cypress: { icon: TestTube, color: "#17202C" },
    Sentry: { icon: Shield, color: "#362D59" },
    "React Testing Library": { icon: TestTube, color: "#61DAFB" },

    // Tools
    Git: { icon: GitBranch, color: "#F05032" },
    GitHub: { icon: GitBranch, color: "#181717" },
    Bitbucket: { icon: GitBranch, color: "#0052CC" },
    Jira: { icon: Package, color: "#0052CC" },
    Slack: { icon: MessageSquare, color: "#4A154B" },
    "VS Code": { icon: FileCode, color: "#007ACC" },
    Xcode: { icon: Code2, color: "#147EFB" },
    "Android Studio": { icon: Settings, color: "#3DDC84" },

    // AI & ML
    "Hugging Face": { icon: Brain, color: "#FFD21E" },
    "Diffusion Models": { icon: Brain, color: "#8B5CF6" },
    "Prompt Engineering": { icon: Brain, color: "#6366F1" },
    "AI Context Remixing": { icon: Brain, color: "#EC4899" },

    // Others
    JWT: { icon: Shield, color: "#000000" },
    OAuth: { icon: Shield, color: "#4285F4" },
  };

  // Try to find exact match first, then try partial matches
  if (iconMap[tech]) return iconMap[tech];

  // Fallback for partial matches
  const techLower = tech.toLowerCase();
  for (const [key, value] of Object.entries(iconMap)) {
    if (techLower.includes(key.toLowerCase()) || key.toLowerCase().includes(techLower)) {
      return value;
    }
  }

  // Default fallback
  return { icon: Code2, color: "#8B5CF6" };
};

// Flatten all skills into a single array
const allSkills = [
  "Flutter",
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Node.js",
  "Express.js",
  "Firebase",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "SQLite",
  "Redis",
  "GraphQL",
  "Docker",
  "Git",
  "GitHub",
  "Jest",
  "Cypress",
  "Python",
  "Java",
  "Kotlin",
  "Swift",
  "Dart",
  "Phaser.js",
  "JWT",
  "OAuth",
  "Sentry",
  "React Testing Library",
  "Bitbucket",
  "Jira",
  "Slack",
  "VS Code",
  "Xcode",
  "Android Studio",
  "CI/CD",
  "Hugging Face",
  "WebSocket",
  "AWS DynamoDB",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Skills</span> & Technologies
        </motion.h2>

        <div className="glass rounded-2xl p-4 md:p-6 border border-white/10">
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-3">
            {allSkills.map((skill, index) => {
              const { icon: Icon, color } = getTechIcon(skill);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02, duration: 0.3 }}
                  className="flex flex-col items-center justify-center p-3 md:p-4 aspect-square border border-white/5 rounded-lg bg-black/20 hover:bg-white/5 hover:border-white/10 transition-all group cursor-default"
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  <div className="mb-2 md:mb-3 flex items-center justify-center h-10 md:h-12">
                    <Icon
                      size={28}
                      className="md:w-8 md:h-8 transition-transform group-hover:scale-110"
                      style={{ color }}
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs text-center text-gray-300 group-hover:text-white transition-colors font-medium leading-tight">
                    {skill}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
