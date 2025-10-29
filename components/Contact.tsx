"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "raphaeljeonghuanlee45",
    href: "mailto:raphaeljeonghuanlee45@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(409) 916-7535",
    href: "tel:+14099167535",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Austin, TX",
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/raphael-jeonghuan-lee", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/raphael180", label: "GitHub" },
  { icon: ExternalLink, href: "https://raphael-lee.vercel.app", label: "Portfolio" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <p className="text-lg text-gray-300 text-center mb-8">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const content = method.href ? (
                <a
                  href={method.href}
                  className="flex flex-col items-center text-center p-6 glass-strong rounded-xl hover:bg-white/10 transition-all group"
                >
                  <Icon className="text-purple-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <span className="text-sm text-gray-400 mb-1">{method.label}</span>
                  <span className="text-white font-medium">{method.value}</span>
                </a>
              ) : (
                <div className="flex flex-col items-center text-center p-6 glass-strong rounded-xl">
                  <Icon className="text-purple-400 mb-3" size={28} />
                  <span className="text-sm text-gray-400 mb-1">{method.label}</span>
                  <span className="text-white font-medium">{method.value}</span>
                </div>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {content}
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/10">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-strong rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

