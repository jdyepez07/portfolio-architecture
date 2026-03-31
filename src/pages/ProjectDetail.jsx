// ─── PROJECT DETAIL PAGE ────────────────────
// Route: /projects/:slug
// Duplicate this file → rename → add to App.jsx to create a new page
// ────────────────────────────────────────────

import { useParams, Link, useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.slug === slug);
  const idx = PROJECTS.indexOf(project);
  const prev = PROJECTS[idx - 1];
  const next = PROJECTS[idx + 1];

  if (!project) {
    return (
      <div className="px-8 py-32 text-center">
        <p className="font-display text-4xl tracking-widest2">Project Not Found</p>
        <Link to="/portfolio" className="nav-link mt-6 inline-block">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* ── HERO ──────────────────────────────── */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={project.hero}
          alt={project.title}
          className="w-full h-full object-cover grayscale"
        />
        {/* Overlay label */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-ink/60 to-transparent">
          <span className="tag text-paper/70">Project {project.index}</span>
          <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-none tracking-widest2 text-paper mt-1">
            {project.title}
          </h1>
        </div>
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 text-paper text-xs font-mono tracking-widest2 uppercase border border-paper/40 px-4 py-2 hover:bg-paper hover:text-ink transition-colors"
        >
          ← Back
        </button>
      </div>

      {/* ── META ROW ──────────────────────────── */}
      <div className="px-8 py-8 border-b border-ink/10 flex flex-wrap gap-8">
        {[
          ["Category", project.category],
          ["Location", project.location],
          ["Year", project.year],
        ].map(([label, val]) => (
          <div key={label}>
            <p className="tag">{label}</p>
            <p className="text-sm font-mono mt-0.5">{val}</p>
          </div>
        ))}
        <div className="ml-auto flex gap-2 items-center">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[9px] font-mono tracking-widest uppercase px-2 py-1 border border-ink/20 text-mid"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── CONTENT ───────────────────────────── */}
      <div className="px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: description */}
        <div>
          <h2 className="font-display text-4xl tracking-widest2">{project.subtitle}</h2>
          <p className="text-sm text-mid leading-relaxed mt-4 max-w-md">
            {project.description}
          </p>

          {/* Thumbnail strip */}
          <div className="flex gap-3 mt-10">
            {project.gallery.slice(0, 2).map((img, i) => (
              <div key={i} className="img-zoom flex-1 aspect-video">
                <img
                  src={img}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
          <p className="tag mt-3">
            Agrimethane frequentuequelove dendriment, it will equipped web.
          </p>
        </div>

        {/* Right: details list */}
        <div>
          <h3 className="text-xs font-mono tracking-widest uppercase mb-4">Details :</h3>
          <ul className="space-y-3">
            {project.details.map((d, i) => (
              <li key={i} className="flex gap-3 text-sm text-mid">
                <span className="text-ink mt-0.5">•</span>
                <span className="leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>

          {/* Large gallery image */}
          <div className="img-zoom mt-10 aspect-[4/3]">
            <img
              src={project.gallery[2] || project.hero}
              alt="Detail"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Page indicator dots */}
          <div className="flex gap-2 mt-4">
            {PROJECTS.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === idx ? "bg-ink" : "bg-ink/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── PREV / NEXT ───────────────────────── */}
      <div className="px-8 pb-16 border-t border-ink/10 pt-8 flex justify-between">
        {prev ? (
          <Link to={`/projects/${prev.slug}`} className="group flex items-center gap-3">
            <span className="text-mid text-xl group-hover:text-ink transition-colors">←</span>
            <div>
              <p className="tag">Previous</p>
              <p className="font-display text-2xl tracking-widest2 group-hover:translate-x-1 transition-transform">
                {prev.title}
              </p>
            </div>
          </Link>
        ) : <div />}

        {next && (
          <Link to={`/projects/${next.slug}`} className="group flex items-center gap-3 text-right">
            <div>
              <p className="tag">Next</p>
              <p className="font-display text-2xl tracking-widest2 group-hover:-translate-x-1 transition-transform">
                {next.title}
              </p>
            </div>
            <span className="text-mid text-xl group-hover:text-ink transition-colors">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
