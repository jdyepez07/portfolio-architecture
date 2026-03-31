import { Link } from "react-router-dom";

export default function ProjectCard({ project, variant = "default" }) {
  if (variant === "wide") {
    return (
      <Link
        to={`/projects/${project.slug}`}
        className="group flex gap-6 section-rule hover:border-ink/40 transition-colors"
      >
        <div className="w-8 shrink-0">
          <span className="tag">{project.index}</span>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 items-start">
          <div className="col-span-1">
            <p className="text-xs font-mono uppercase tracking-widest text-mid">{project.category}</p>
            <h3 className="font-display text-3xl tracking-widest2 mt-1 group-hover:translate-x-1 transition-transform">
              {project.title}
            </h3>
            <p className="tag mt-1">{project.location} — {project.year}</p>
          </div>
          <div className="img-zoom aspect-video col-span-1">
            <img
              src={project.thumb}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block"
    >
      <div className="img-zoom aspect-[4/3] mb-3">
        <img
          src={project.thumb}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <span className="tag">{project.index}</span>
          <h3 className="font-display text-xl tracking-widest2 mt-0.5 group-hover:translate-x-1 transition-transform">
            {project.title}
          </h3>
          <p className="tag mt-0.5">{project.category}</p>
        </div>
        <span className="tag mt-1">{project.year}</span>
      </div>
    </Link>
  );
}
