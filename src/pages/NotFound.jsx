// ─── 404 PAGE ───────────────────────────────
// Route: * (catch-all)
// Duplicate this file → rename → add to App.jsx to create a new page
// ────────────────────────────────────────────

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="px-8 py-32 flex flex-col items-center justify-center text-center min-h-[80vh]">
      <span className="tag mb-4">404</span>
      <h1 className="font-display text-[clamp(5rem,20vw,18rem)] leading-none tracking-widest2 text-ink/10">
        Lost
      </h1>
      <p className="text-sm text-mid mt-6 max-w-sm leading-relaxed">
        The page you're looking for doesn't exist. Perhaps you navigated to an
        address that has changed or never existed.
      </p>
      <Link
        to="/"
        className="mt-8 px-10 py-3 border border-ink text-xs font-mono tracking-widest2 uppercase hover:bg-ink hover:text-paper transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
