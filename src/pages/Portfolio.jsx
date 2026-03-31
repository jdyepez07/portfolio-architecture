// ─── PORTFOLIO PAGE ─────────────────────────
// Route: /portfolio
// Duplicate this file → rename → add to App.jsx to create a new page
// ────────────────────────────────────────────

import { useState } from "react";
import { PROJECTS } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const CATEGORIES = ["All", ...new Set(PROJECTS.map((p) => p.category))];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="px-8 py-16">
      {/* ── PAGE HEADER ───────────────────────── */}
      <div className="section-rule mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="tag">Index / Content</span>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-none tracking-widest2 mt-1">
              Portfolio
            </h1>
            <p className="tag mt-2">Presentation Template</p>
          </div>
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[10px] tracking-widest2 uppercase font-mono px-3 py-1.5 border transition-colors ${
                  active === cat
                    ? "bg-ink text-paper border-ink"
                    : "border-ink/20 text-mid hover:border-ink/60 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4-column INDEX TABLE (top) ─────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mb-20 border-b border-ink/10 pb-20">
        {[0, 1, 2, 3].map((i) => (
          <div key={i}>
            <span className="tag">0{i + 1}.</span>
            <p className="text-xs font-mono mt-1">Content Name</p>
            <p className="text-[10px] font-mono text-mid mt-2 leading-relaxed">
              Elite architectural championship sum profiles which our sustainable
              built environment, adjudicial advo venient.
            </p>
          </div>
        ))}
      </div>

      {/* ── PROJECT GRID ──────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {/* ── LIST VIEW (wide) ──────────────────── */}
      <div className="mt-24">
        <h2 className="font-display text-3xl tracking-widest2 section-rule pb-8 mb-0">
          Full Index
        </h2>
        <div className="flex flex-col gap-8 mt-8">
          {filtered.map((p) => (
            <ProjectCard key={p.id + "-wide"} project={p} variant="wide" />
          ))}
        </div>
      </div>
    </div>
  );
}
