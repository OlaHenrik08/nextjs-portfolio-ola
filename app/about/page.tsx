"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const experiences = [
  {
    period: "Okt 2025 - Des 2025",
    role: "Praksiselev - Utvikling",
    company: "Finago",
    description:
      "Deltok i ordinære arbeidsdager som utvikler i et profesjonelt IT-miljø. Fikk praktisk erfaring med utvikling i produksjonsnære systemer, samarbeidet med erfarne utviklere, og fikk innsikt i arkitektur, arbeidsflyt og smidige utviklingsprosesser.",
  },
  {
    period: "Uke 16, 2023",
    role: "Arbeidsuke",
    company: "SPAR Toppen",
    description:
      "Erfaring med ansvar, struktur og samarbeid i arbeidslivet. Bidro til effektiv gjennomføring av daglige oppgaver.",
  },
];

const education = [
  {
    period: "2024 - nåværende",
    institution: "Porsgrunn videregående skole",
    program: "Informasjonsteknologi og medieproduksjon (IM)",
    description:
      "Studerer webutvikling, medieproduksjon, programmering og digitale løsninger. Praktisk erfaring med React, Next.js, ASP.NET Core, MySQL, Git og mye mer.",
  },
];

const techSkills = [
  { category: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML & CSS", "Tailwind CSS"] },
  { category: "Backend & Data", items: ["ASP.NET Core (C#)", "Minimal API", "REST APIs", "MySQL", "CRUD-operasjoner"] },
  { category: "Tools & Workflow", items: ["Git & GitHub", "YAML", "Debugging", "Jira", "Feilsøking"] },
  { category: "Media & Design", items: ["Video-produksjon", "Foto", "Manus & Storyboard", "Redigering", "Digitale kampanjer"] },
];

const languages = [
  { lang: "Norsk", level: "Morsmål" },
  { lang: "Engelsk", level: "Flytende" },
  { lang: "Brasiliansk", level: "Minimalt" },
];

export default function AboutPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-6 pt-32 pb-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="section-label">Om meg</p>
          <h1 className="text-5xl md:text-6xl font-display text-[#e8e6e1] leading-tight">
            Hvem er jeg?
          </h1>
        </div>

        {/* Photo + Bio grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-24">
          {/* Photo */}
          <div className="md:col-span-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/20 to-transparent rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-sm border border-[#2a2a2a] aspect-[3/4] bg-[#141414]">
                  <Image
                    src="/photo-new.jpg"
                    alt="Ola Henrik Bjørntvedt"
                    fill
                    className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    priority
                  />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="md:col-span-3 flex flex-col justify-center space-y-5">
            <h2 className="text-2xl font-display text-[#e8e6e1]">
              Ola Henrik Bjørntvedt
            </h2>
            <p className="text-xs text-[#c8a96e] tracking-widest uppercase">
              Informasjonsteknologi - elev · Skien, Norge
            </p>
            <p className="text-[#7a7872] leading-relaxed">
              Jeg er en kreativ og nysgjerrig IM-elev med stor interesse for
              teknologi, design og digital historiefortelling. Jeg liker å jobbe
              med prosjekter der jeg kan kombinere teknisk kunnskap med kreativ
              formidling, og jeg motiveres av å lage løsninger som både ser bra
              ut og fungerer godt i praksis.
            </p>
            <p className="text-[#7a7872] leading-relaxed">
              Innen webutvikling jobber jeg blant annet med JavaScript, Next.js,
              HTML, CSS og Tailwind CSS. Jeg liker å bygge nettsider fra bunnen
              av og forstå hvordan ting henger sammen – både visuelt og teknisk.
            </p>
            <p className="text-[#7a7872] leading-relaxed">
              Jeg har også bred erfaring innen medieproduksjon, spesielt med
              foto, video, manus, storyboard og redigering. Flere av
              prosjektene mine tar for seg samfunnsrelevante temaer som
              ungdomskultur, sikkerhet og sosiale problemstillinger.
            </p>
          </div>
        </div>
         {/* Divider */}
        <div className="border-t border-[#2a3334] mb-24" />

        {/* Min bedrift */}
        <div className="mb-24">
          <p className="section-label">Min bedrift</p>
          <h2 className="text-3xl font-display text-[#e8e6e1] mb-10">
            Digital Solutions
          </h2>
          
          <div className="card p-8 border-[#7a4a35]/30">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-display text-[#e8e6e1] mb-2">
                  Digital Solutions
                </h3>
                <p className="text-[#7a4a35] text-sm tracking-wide uppercase">
                  Building Smart Solutions
                </p>
              </div>
              <span className="px-4 py-1.5 bg-[#7a4a35]/20 border border-[#7a4a35] text-[#7a4a35] text-xs tracking-widest uppercase rounded-sm">
                Coming Soon
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-[#7a8182] leading-relaxed">
                Digital Solutions er min egen bedrift som spesialiserer seg på å bygge 
                profesjonelle nettsider for bedrifter som ikke har tid, ferdigheter eller 
                ressurser til å gjøre det selv. Vi forstår at ikke alle er teknisk anlagt, 
                og det er nettopp derfor vi er her.
              </p>
              <p className="text-[#7a8182] leading-relaxed">
                Vår visjon er enkel: gjøre profesjonell web-tilstedeværelse tilgjengelig 
                for alle. Vi lager skreddersydde nettsider tilpasset dine forretningsbehov, 
                og tilbyr enkel IT-støtte når du trenger hjelp — alt tilgjengelig gjennom 
                enkle telefonsamtaler.
              </p>
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#2a3334]">
              <div className="flex items-start gap-3">
                <span className="text-[#7a4a35] text-lg">🌐</span>
                <div>
                  <h4 className="text-[#e8e6e1] text-sm font-medium mb-1">Website Creation</h4>
                  <p className="text-[#4a5455] text-xs">Skreddersydde nettsider for din bedrift</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#7a4a35] text-lg">📱</span>
                <div>
                  <h4 className="text-[#e8e6e1] text-sm font-medium mb-1">IT Phone Support</h4>
                  <p className="text-[#4a5455] text-xs">Rask teknisk hjelp over telefon</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#7a4a35] text-lg">🔧</span>
                <div>
                  <h4 className="text-[#e8e6e1] text-sm font-medium mb-1">Maintenance</h4>
                  <p className="text-[#4a5455] text-xs">Oppdateringer og vedlikehold</p>
                </div>
              </div>
            </div>

            {/* Launch note */}
            <div className="mt-6 pt-6 border-t border-[#2a3334]">
              <p className="text-[#4a5455] text-sm italic">
                Nettsiden for Digital Solutions er under utvikling og vil bli lansert snart.
              </p>
              {/* Uncomment this when the website is live:
              <Link
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#7a4a35] hover:text-[#8a6a55] text-sm mt-3 transition-colors duration-300"
              >
                Besøk Digital Solutions
                <span>→</span>
              </Link>
              */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a2a2a] mb-24" />

        {/* Experience */}
        <div className="mb-24">
          <p className="section-label">Erfaring</p>
          <h2 className="text-3xl font-display text-[#e8e6e1] mb-10">
            Profesjonell erfaring
          </h2>
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div key={i} className="card group p-6 hover:border-[#c8a96e]/30 transition-colors duration-500">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-display text-[#e8e6e1]">{exp.role}</h3>
                    <p className="text-[#c8a96e] text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-xs text-[#4a4842] font-mono bg-[#141414] border border-[#2a2a2a] px-3 py-1.5 rounded-sm whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[#7a7872] text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-24">
          <p className="section-label">Utdanning</p>
          <h2 className="text-3xl font-display text-[#e8e6e1] mb-10">
            Utdanning
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="card p-6 hover:border-[#c8a96e]/30 transition-colors duration-500">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-display text-[#e8e6e1]">{edu.program}</h3>
                  <p className="text-[#c8a96e] text-sm mt-0.5">{edu.institution}</p>
                </div>
                <span className="text-xs text-[#4a4842] font-mono bg-[#141414] border border-[#2a2a2a] px-3 py-1.5 rounded-sm whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              <p className="text-[#7a7872] text-sm leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
        

        {/* Divider */}
        <div className="border-t border-[#2a2a2a] mb-24" />

        {/* Skills grid */}
        <div className="mb-24">
          <p className="section-label">Kompetanse</p>
          <h2 className="text-3xl font-display text-[#e8e6e1] mb-10">
            Tekniske ferdigheter
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {techSkills.map((group) => (
              <div key={group.category} className="card p-6">
                <h3 className="text-sm font-medium text-[#c8a96e] tracking-wide uppercase mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <p className="section-label">Språk</p>
          <h2 className="text-3xl font-display text-[#e8e6e1] mb-10">Språk</h2>
          <div className="flex flex-wrap gap-4">
            {languages.map((l) => (
              <div key={l.lang} className="card p-5 flex items-center gap-4">
                <span className="text-[#e8e6e1] font-display text-lg">{l.lang}</span>
                <span className="text-xs text-[#4a4842] border-l border-[#2a2a2a] pl-4 tracking-wide uppercase">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
