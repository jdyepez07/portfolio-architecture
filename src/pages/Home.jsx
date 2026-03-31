// ─── HOME PAGE ──────────────────────────────
// Route: /
// Duplicate this file → rename → add to App.jsx to create a new page
// ────────────────────────────────────────────

import { Link } from "react-router-dom";
import { PROJECTS, SITE } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const featured = PROJECTS[0];

  return (
    <div>
      {/* ── HERO ──────────────────────────────── */}
      <section className="px-8 pt-12 pb-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-end min-h-[85vh]">
        <div className="self-end pb-12">
          {/* Brand badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-7 h-7 rounded-full border border-ink flex items-center justify-center">
              <span className="text-[8px] font-mono">★</span>
            </div>
            <div>
              <p className="text-xs font-mono font-medium leading-none">{SITE.brand}</p>
              <p className="tag leading-none mt-0.5">{SITE.tagline}</p>
            </div>
          </div>

          {/* Big title */}
          <h1 className="font-display text-[clamp(5rem,14vw,13rem)] leading-none tracking-widest2 -ml-1">
            ARCHITEC-
            <br />
            TURE
          </h1>

          {/* Star rating row */}
          <div className="flex items-center gap-2 mt-6">
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-ink text-sm">★</span>
              ))}
            </div>
            <span className="tag">4.9</span>
          </div>

          {/* Label */}
          <div className="flex items-center gap-2 mt-3">
            <div className="w-8 h-px bg-ink" />
            <span className="tag">Clean · Presentation · Template 20XX</span>
          </div>

          {/* Description */}
          <p className="text-sm font-body text-mid leading-relaxed mt-6 max-w-sm">
            Elite architectural championship of sustainable forms, materials, and
            spatial sequences that challenge and redefine our built environment.
          </p>
        </div>

        {/* Hero image */}
        <div className="img-zoom h-[70vh] self-stretch">
          <Link to={`/projects/${featured.slug}`}>
            <img
              src={featured.hero}
              alt={featured.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </Link>
        </div>
      </section>

      {/* ── INDEX STRIP ───────────────────────── */}
      <section className="px-8 mt-24">
        <div className="flex items-center justify-between mb-10 section-rule">
          <h2 className="font-display text-4xl tracking-widest2">Selected Work</h2>
          <Link to="/portfolio" className="nav-link">View All →</Link>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
          {PROJECTS.slice(0, 6).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ───────────────────────── */}
      <section className="px-8 mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center section-rule pt-12">
        <div>
          <span className="tag">About the Studio</span>
          <h2 className="font-display text-5xl tracking-widest2 mt-2">Archi.</h2>
          <p className="text-sm text-mid leading-relaxed mt-4 max-w-md">
            We are an award-winning architecture studio committed to crafting spaces
            that endure. Our work spans civic, residential, cultural, and
            infrastructure typologies across Latin America and beyond.
          </p>
          <Link
            to="/about"
            className="inline-block mt-6 text-xs font-mono tracking-widest2 uppercase border-b border-ink pb-0.5 hover:text-mid transition-colors"
          >
            Learn More →
          </Link>
        </div>
        <div className="img-zoom aspect-video">
          <img
            src={PROJECTS[5].hero}
            alt="Studio"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────── */}
      <section className="px-8 mt-24 py-16 bg-ink text-paper text-center">
        <span className="tag text-paper/50">Get in touch</span>
        <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-none tracking-widest2 mt-3">
          THANK YOU FOR VIEWING
        </h2>
        <Link
          to="/contact"
          className="inline-block mt-8 px-10 py-3 border border-paper text-xs font-mono tracking-widest2 uppercase hover:bg-paper hover:text-ink transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
