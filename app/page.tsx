"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "HTML & CSS",
  "Tailwind CSS",
  "C# / ASP.NET",
  "MySQL",
  "Git & GitHub",
  "Video Production",
  "Storytelling",
  "UI Design",
];

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Subtle background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Accent glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: "radial-gradient(circle, #c8a96e 0%, transparent 70%)" }}
        />

        <div className="relative max-w-4xl w-full mx-auto">
          {/* Label */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="section-label flex items-center gap-2 mb-8">
              <span className="w-6 h-px bg-[#c8a96e]" />
              Welcome to my portfolio
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl font-display font-600 leading-[1.1] text-[#e8e6e1] mb-6 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Hei, jeg er{" "}
            <span className="gradient-text italic">Ola Henrik</span>
            <br />
            <span className="text-[#4a4842] text-4xl sm:text-5xl md:text-6xl not-italic">
              — og jeg liker å bygge ting.
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-[#7a7872] text-base md:text-lg leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Kreativ IM-elev med stor interesse for webutvikling, medieproduksjon
            og digital historiefortelling. Jeg liker å kombinere teknisk kunnskap
            med kreativ formidling — og lage løsninger som både ser bra ut og
            fungerer godt i praksis.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-20 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link href="/projects" className="btn-primary">
              Se mine prosjekter
              <span className="text-lg leading-none">→</span>
            </Link>
            <Link href="/contact" className="btn-outline">
              Ta kontakt
            </Link>
          </div>

          {/* Skills row */}
          <div
            className={`transition-all duration-700 delay-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xs text-[#4a4842] tracking-widest uppercase mb-4">
              Technologies & Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className="tag"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider strip */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#2a2a2a]" />
      </div>

      {/* Brief intro section */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label">Om meg</p>
            <h2 className="text-3xl md:text-4xl font-display leading-tight text-[#e8e6e1] mb-6">
              Teknologi møter historiefortelling
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-[#7a7872] leading-relaxed">
              Jeg er elev ved Porsgrunn videregående skole, avdeling
              Informasjonsteknologi og medieproduksjon. Gjennom studieretningen
              har jeg fått praktisk erfaring med alt fra frontend- og
              backend-utvikling til video, dokumentar og digitale kampanjer.
            </p>
            <p className="text-[#7a7872] leading-relaxed">
              Jeg har hatt praksis hos Finago, der jeg arbeidet som
              praksiselev i utvikling og fikk innsikt i profesjonelle
              IT-miljøer og smidige utviklingsprosesser.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[#c8a96e] text-sm hover:gap-3 transition-all duration-300">
              Les mer om meg
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
