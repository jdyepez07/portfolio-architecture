// ─── ABOUT PAGE ─────────────────────────────
// Route: /about
// Duplicate this file → rename → add to App.jsx to create a new page
// ────────────────────────────────────────────

import { PROJECTS } from "../data/projects";

const TEAM = [
  { name: "Ana Morales", role: "Principal Architect", year: "2010–" },
  { name: "Carlos Ibáñez", role: "Project Director", year: "2013–" },
  { name: "Sofía Reyes", role: "Design Lead", year: "2017–" },
  { name: "Mateo Vargas", role: "Structural Consultant", year: "2019–" },
];

const AWARDS = [
  { title: "WAN Award — Civic Architecture", year: "2024" },
  { title: "Bienal Iberoamericana — Special Mention", year: "2023" },
  { title: "WAF Shortlist — Cultural Category", year: "2022" },
  { title: "RIBA International Prize", year: "2021" },
];

export default function About() {
  return (
    <div className="px-8 py-16">
      {/* ── HEADER ────────────────────────────── */}
      <div className="section-rule mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <span className="tag">About the Studio</span>
            <h1 className="font-display text-[clamp(4rem,10vw,10rem)] leading-none tracking-widest2 mt-1">
              Archi.
            </h1>
          </div>
          <p className="text-sm text-mid leading-relaxed max-w-md mb-4">
            We are an award-winning architecture studio committed to crafting
            spaces that endure across generations. Our practice spans civic,
            residential, cultural, and infrastructure typologies.
          </p>
        </div>
      </div>

      {/* ── STUDIO IMAGE ──────────────────────── */}
      <div className="img-zoom w-full aspect-[21/9] mb-20">
        <img
          src={PROJECTS[5].hero}
          alt="Studio"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* ── DETAILS LIST ──────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
        <div>
          <h2 className="font-display text-3xl tracking-widest2 section-rule pb-4">
            Philosophy
          </h2>
          <div className="space-y-4 mt-6">
            {[
              "We believe architecture is the art of making places people want to inhabit.",
              "Every project begins with a rigorous reading of site, program, and context.",
              "We pursue structural clarity as an aesthetic principle, not merely technical necessity.",
              "Sustainability is embedded in every decision from massing to material selection.",
            ].map((d, i) => (
              <div key={i} className="flex gap-3 text-sm text-mid">
                <span className="text-ink font-mono text-xs mt-1">0{i + 1}</span>
                <p className="leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl tracking-widest2 section-rule pb-4">
            Studio
          </h2>
          <p className="text-sm text-mid leading-relaxed mt-6 max-w-md">
            Founded in 2010, our studio operates from offices in Cali and Buenos
            Aires. We maintain a deliberately small team to ensure direct partner
            involvement on every project. Our work has been recognized by the
            World Architecture Festival, the Bienal Iberoamericana de Arquitectura,
            and RIBA.
          </p>
        </div>
      </div>

      {/* ── TEAM ──────────────────────────────── */}
      <div className="mb-20">
        <h2 className="font-display text-3xl tracking-widest2 section-rule mb-8">
          Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TEAM.map((m) => (
            <div key={m.name} className="border-t border-ink/10 pt-4">
              <p className="text-sm font-mono">{m.name}</p>
              <p className="tag mt-1">{m.role}</p>
              <p className="tag mt-0.5">{m.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── AWARDS ────────────────────────────── */}
      <div className="bg-ink text-paper p-10">
        <h2 className="font-display text-3xl tracking-widest2 border-b border-paper/10 pb-4 mb-8">
          Recognition
        </h2>
        <div className="space-y-4">
          {AWARDS.map((a) => (
            <div
              key={a.title}
              className="flex items-baseline justify-between border-b border-paper/10 pb-4"
            >
              <p className="text-sm font-mono">{a.title}</p>
              <span className="tag text-paper/50 ml-4 shrink-0">{a.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
