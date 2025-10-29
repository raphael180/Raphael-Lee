"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const contactInfo = [
  { icon: MapPin, text: "Austin, TX" },
  { icon: Phone, text: "(409) 916-7535" },
  { icon: Mail, text: "raphaeljeonghuanlee45@gmail.com" },
  { icon: ExternalLink, text: "linkedin.com/in/raphael-jeonghuan-lee", link: "https://linkedin.com/in/raphael-jeonghuan-lee" },
  { icon: ExternalLink, text: "github.com/raphael180", link: "https://github.com/raphael180" },
  { icon: ExternalLink, text: "raphael-lee.vercel.app", link: "https://raphael-lee.vercel.app" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="gradient-text">About</span> Me
          </h2>

          <div className="glass rounded-2xl p-8 md:p-12 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Software Engineer and AI Researcher with a strong background in
              full-stack development, mobile applications, and AI/ML integration. I specialize in
              building cross-platform applications using React Native and Flutter, creating seamless
              user experiences that bridge web and mobile platforms.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise includes developing AI-powered applications, real-time data synchronization,
              and architecting scalable systems on cloud platforms. I'm passionate about translating
              cutting-edge research into production-grade software that users love.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    <span className="text-sm">{item.text}</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 text-gray-300">
                    <Icon size={20} className="flex-shrink-0" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                );

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {content}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

