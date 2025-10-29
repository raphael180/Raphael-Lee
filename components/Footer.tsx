import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/raphael-jeonghuan-lee", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/raphael180", label: "GitHub" },
  { icon: Mail, href: "mailto:raphaeljeonghuanlee45@gmail.com", label: "Email" },
  { icon: ExternalLink, href: "https://raphael-lee.vercel.app", label: "Portfolio" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Raphael Jeonghuan Lee. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

