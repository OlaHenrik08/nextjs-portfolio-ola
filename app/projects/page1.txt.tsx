"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ============================================================
// ✏️  LEGG TIL DINE PROSJEKTER HER
// ============================================================
// Bare kopier en ny blokk og fylle inn dine detaljer.
// Feltene er:
//   title       – Prosjektnavn
//   description – Kort beskrivelse
//   tags        – Teknologier / kategori (array av strings)
//   githubUrl   – Link til GitHub-repo (la være "" hvis du ikke har)
//   liveUrl     – Link til live demo (la være "" hvis du ikke har)
//   year        – Året prosjektet ble laget
// ============================================================

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  year: string;
}

const projects: Project[] = [
  // ← EKSEMPEL 1: Skriv inn ditt första prosjekt her
  {
    title: "Mitt første prosjekt",
    description:
      "Beskriv hva prosjektet er, hva du laget og hva du lærte underveis. This is placeholder text – replace it with your own project description.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    githubUrl: "", // ← Lim inn din GitHub-link her
    liveUrl: "",   // ← Lim inn live demo-link her (valgfritt)
    year: "2025",
  },
  // ← EKSEMPEL 2
  {
    title: "Andre prosjekt",
    description:
      "Et annet eksempel. Beskriv prosjektet ditt her. Du kan ha so mange eller få prosjekter som du vil.",
    tags: ["JavaScript", "HTML", "CSS", "Video"],
    githubUrl: "",
    liveUrl: "",
    year: "2025",
  },
  // ← EKSEMPEL 3
  {
    title: "Tredje prosjekt",
    description:
      "Husker du et medieproduksjon-prosjekt? Du kan også legge inn dokumentarer, kampanjer eller andre typer arbeid her – ikke bare code.",
    tags: ["Dokumentar", "Video", "Manus", "Redigering"],
    githubUrl: "",
    liveUrl: "",
    year: "2024",
  },
];

// ============================================================
// FILTER-KATEGORIER (auto-generert fra alle tags)
// ============================================================
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
      {/* Top row: year + links */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-mono text-[#4a4842] bg-[#141414] border border-[#2a2a2a] px-3 py-1 rounded-sm">
          {project.year}
        </span>
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
          Her viser jeg et utvalg av prosjektene mine – alt fra webutvikling til
          medieproduksjon og digitale kampanjer.
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
              Ingen prosjekter i denne kategorien yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
