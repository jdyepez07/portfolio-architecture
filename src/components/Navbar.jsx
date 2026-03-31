import { Link, NavLink, useLocation } from "react-router-dom";
import { SITE } from "../data/projects";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-multiply">
      <div className="flex items-center justify-between px-8 py-5 bg-paper/90 backdrop-blur-sm border-b border-ink/8">
        {/* Left nav */}
        <nav className="flex gap-8">
          <NavLink to="/" className="nav-link">Architecture</NavLink>
          <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
          <NavLink to="/design" className="nav-link">Design</NavLink>
        </nav>

        {/* Center brand */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[10px] tracking-widest2 uppercase font-mono text-ink leading-none">
            {SITE.brand}
          </span>
          <span className="text-[9px] tracking-widest uppercase font-mono text-mid leading-none mt-0.5">
            {SITE.tagline}
          </span>
        </Link>

        {/* Right info */}
        <p className="text-[9px] font-mono text-mid max-w-[160px] text-right leading-relaxed hidden md:block">
          Elite architectural championship sum profiles which our sustainable
        </p>
      </div>
    </header>
  );
}
