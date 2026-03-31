// ─── CONTACT PAGE ───────────────────────────
// Route: /contact
// Duplicate this file → rename → add to App.jsx to create a new page
// ────────────────────────────────────────────

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="px-8 py-16">
      {/* ── HEADER ────────────────────────────── */}
      <div className="section-rule mb-16">
        <span className="tag">Get in touch</span>
        <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-none tracking-widest2 mt-1">
          Contact
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* ── INFO ────────────────────────────── */}
        <div>
          <div className="space-y-8">
            {[
              { label: "Studio Address", val: "Calle 5 Norte #38-71, Cali, Colombia" },
              { label: "Email", val: "studio@archname.com" },
              { label: "Phone", val: "+57 (2) 555-0100" },
              { label: "Hours", val: "Mon–Fri 09:00–18:00" },
            ].map(({ label, val }) => (
              <div key={label} className="border-t border-ink/10 pt-4">
                <p className="tag">{label}</p>
                <p className="text-sm font-mono mt-1">{val}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-ink text-paper p-8">
            <p className="font-display text-3xl tracking-widest2">
              THANK YOU FOR VIEWING
            </p>
            <p className="text-sm text-paper/60 mt-3 leading-relaxed">
              We look forward to discussing your next project. Our team typically
              responds within one business day.
            </p>
          </div>
        </div>

        {/* ── FORM ────────────────────────────── */}
        {sent ? (
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="font-display text-4xl tracking-widest2">Message Sent</p>
              <p className="tag mt-3">We'll be in touch shortly.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { id: "name", label: "Full Name", type: "text" },
              { id: "email", label: "Email Address", type: "email" },
              { id: "project", label: "Project Type", type: "text" },
            ].map(({ id, label, type }) => (
              <div key={id} className="border-b border-ink/20 pb-0">
                <label
                  htmlFor={id}
                  className="tag block mb-1"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  required
                  className="w-full bg-transparent text-sm font-mono py-2 outline-none border-none placeholder:text-ink/20 focus:border-b focus:border-ink"
                  placeholder="—"
                />
              </div>
            ))}

            <div className="border-b border-ink/20 pb-0">
              <label htmlFor="message" className="tag block mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full bg-transparent text-sm font-mono py-2 outline-none resize-none placeholder:text-ink/20"
                placeholder="Tell us about your project—"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-ink text-paper text-xs font-mono tracking-widest2 uppercase hover:bg-ink/80 transition-colors"
            >
              Send Message →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
