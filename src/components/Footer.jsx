import { Link } from "react-router-dom";
import { SITE } from "../data/projects";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-8 py-10 mt-24">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-2xl tracking-widest2">{SITE.brand}</p>
          <p className="tag mt-1">{SITE.tagline}</p>
        </div>
        <nav className="flex gap-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        <p className="tag">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}
