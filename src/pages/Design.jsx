// ─── DESIGN PAGE ────────────────────────────
// Route: /design
// Duplicate this file → rename → add to App.jsx to create a new page
// ────────────────────────────────────────────

import { PROJECTS } from "../data/projects";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    index: "01",
    title: "Architecture",
    desc: "New construction across residential, civic, cultural, and commercial typologies. From concept through construction documentation.",
  },
  {
    index: "02",
    title: "Urban Design",
    desc: "Master planning, public space design, and strategic frameworks for cities and districts at every scale.",
  },
  {
    index: "03",
    title: "Interior Design",
    desc: "Spatial programming, material selection, and bespoke joinery design for project interiors.",
  },
  {
    index: "04",
    title: "Renovation",
    desc: "Adaptive reuse and renovation projects that respect the existing fabric while introducing contemporary interventions.",
  },
];

export default function Design() {
  return (
    <div className="px-8 py-16">
      {/* ── HEADER ────────────────────────────── */}
      <div className="section-rule mb-16">
        <span className="tag">Capabilities</span>
        <h1 className="font-display text-[clamp(4rem,10vw,10rem)] leading-none tracking-widest2 mt-1">
          Design
        </h1>
      </div>

      {/* ── SERVICES GRID ─────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-20">
        {SERVICES.map((s) => (
          <div
            key={s.index}
            className="border border-ink/10 p-8 hover:bg-ink hover:text-paper transition-colors group"
          >
            <span className="tag group-hover:text-paper/50">{s.index}</span>
            <h3 className="font-display text-4xl tracking-widest2 mt-2">{s.title}</h3>
            <p className="text-sm text-mid group-hover:text-paper/70 leading-relaxed mt-3 max-w-sm">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ── PROCESS ───────────────────────────── */}
      <div className="mb-20">
        <h2 className="font-display text-3xl tracking-widest2 section-rule mb-12">
          Process
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-ink/10" />
          <div className="space-y-10 pl-16">
            {[
              { step: "01", title: "Brief & Analysis", desc: "Site visit, program analysis, client workshops." },
              { step: "02", title: "Concept Design", desc: "Spatial diagrams, massing studies, precedent research." },
              { step: "03", title: "Developed Design", desc: "Floor plans, elevations, sections, material palette." },
              { step: "04", title: "Documentation", desc: "Construction drawings, specifications, tender." },
              { step: "05", title: "Construction", desc: "Site observation, RFI response, quality review." },
            ].map((p) => (
              <div key={p.step} className="relative">
                <div className="absolute -left-10 w-5 h-5 rounded-full border-2 border-ink bg-paper flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-ink" />
                </div>
                <span className="tag">{p.step}</span>
                <h3 className="text-sm font-mono mt-0.5">{p.title}</h3>
                <p className="text-xs text-mid mt-1 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SELECTED IMAGES STRIP ─────────────── */}
      <div className="grid grid-cols-3 gap-3">
        {PROJECTS.slice(3, 6).map((p) => (
          <Link key={p.id} to={`/projects/${p.slug}`} className="img-zoom aspect-video">
            <img
              src={p.thumb}
              alt={p.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
