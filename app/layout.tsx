import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Raphael Jeonghuan Lee | Software Engineer & AI Researcher",
  description: "Portfolio of Raphael Jeonghuan Lee - Full-stack developer, AI researcher, and mobile app engineer specializing in React Native, Flutter, and AI/ML applications.",
  keywords: "software engineer, AI researcher, React Native, Flutter, full-stack developer, portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <Navigation />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

