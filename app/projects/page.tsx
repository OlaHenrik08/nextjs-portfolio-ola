"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  year: string;
  status?: "live" | "coming-soon";
}

const projects: Project[] = [
  {
    title: "Next.js Portfolio",
    description:
      "Min personlige portfolio bygget med Next.js, TypeScript og Tailwind CSS. Fokus på ytelse, ren struktur og modern design med mørk fargepalett og flytende animasjoner.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/OlaHenrik08/nextjs-portfolio-ola",
    liveUrl: "https://nextjs-portfolio-ola.vercel.app/",
    year: "2026",
    status: "live",
  },
  {
    title: "Digital Solutions",
    description:
      "Min egen bedrift som tilbyr nettside-bygging, IT-support og vedlikehold for bedrifter som mangler teknisk kompetanse. Skreddersydde løsninger tilpasset kundens behov.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    githubUrl: "",
    liveUrl: "https://digilat-solutions.vercel.app/",
    year: "2026",
    status: "live",
  },
  {
    title: "CLI Info & Guide",
    description:
      "Interaktiv guide-side for kommandolinje-verktøy bygget med HTML, CSS og JavaScript. Fokus på CLI-estetikk med JSON-drevet innhold og clean terminal-design.",
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
    githubUrl: "https://github.com/OlaHenrik08/CLI-info-page",
    liveUrl: "https://cli-info-page.vercel.app/",
    year: "2026",
    status: "live",
  },
  {
    title: "Project Manager",
    description:
      "Smart prosjektstyringsverktøy for å holde oversikt over egne prosjekter. Bygget med fokus på brukervennlig design og smart funksjonalitet.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "",
    year: "2026",
    status: "coming-soon",
  },
  {
    title: "JavaScript Learning Site",
    description:
      "Interaktiv nettside laget for å øve på DOM-manipulasjon, event listeners og dynamisk innhold. Et praktisk læringsverktøy for JavaScript-konsepter.",
    tags: ["JavaScript", "HTML", "CSS", "DOM"],
    githubUrl: "https://github.com/OlaHenrik08/Javascript-Learning",
    liveUrl: "https://javascript-learning-gamma.vercel.app/",
    year: "2026",
    status: "live",
  },
  {
    title: "The Walking Dead Fan Page",
    description:
      "En stemningsfull fan-side inspirert av TV-serien The Walking Dead. Nettsiden har mørk, apokalyptisk design og presenterer karakterer, sesonger og ikoniske øyeblikk fra serien. Bygget med fokus på visuell stil, strukturert innhold og interaktivitet.",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/OlaHenrik08/Zombie-page",
    liveUrl: "https://zombie-page.vercel.app/",
    year: "2026",
    status: "live",
  },
];

function getAllTags(projects: Project[]): string[] {
  const tagSet = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return ["All", ...Array.from(tagSet).sort()];
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="card group p-6 flex flex-col hover:border-[#c8a96e]/30 transition-all duration-500"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top row: year + status + links */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#4a4842] bg-[#141414] border border-[#2a2a2a] px-3 py-1 rounded-sm">
            {project.year}
          </span>
          {project.status === "coming-soon" && (
            <span className="text-xs font-mono text-[#c8a96e] bg-[#c8a96e]/10 border border-[#c8a96e]/20 px-3 py-1 rounded-sm">
              Coming soon
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a4842] hover:text-[#c8a96e] transition-colors duration-200 text-xs tracking-wide uppercase"
            >
              GitHub
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a4842] hover:text-[#c8a96e] transition-colors duration-200 text-xs tracking-wide uppercase"
            >
              Live →
            </Link>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-display text-[#e8e6e1] mb-3 group-hover:text-[#c8a96e] transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[#7a7872] text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visible, setVisible] = useState(false);
  const allTags = getAllTags(projects);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="px-6 pt-32 pb-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="section-label">Prosjekter</p>
          <h1 className="text-5xl md:text-6xl font-display text-[#e8e6e1] leading-tight">
            Mitt arbeid
          </h1>
        </div>

        <p className="text-[#7a7872] mb-12 max-w-xl">
          Her viser jeg et utvalg av prosjektene mine - alt fra webutvikling til digitale kampanjer.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-14">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-1.5 text-xs tracking-wide uppercase rounded-sm border transition-all duration-300 ${
                activeFilter === tag
                  ? "bg-[#c8a96e] text-[#0a0a0a] border-[#c8a96e]"
                  : "text-[#7a7872] border-[#2a2a2a] hover:border-[#3d3d3d] hover:text-[#e8e6e1]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-[#4a4842] text-sm">
              Ingen prosjekter i denne kategorien ennå.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
