import { Link } from "react-router-dom";

const deliverables = [
  { title: "UX Research", desc: "User interviews, competitor analysis, and journey mapping to validate design decisions." },
  { title: "Wireframing", desc: "Low-fidelity wireframes to establish layout and hierarchy before visual design begins." },
  { title: "Visual Design", desc: "High-fidelity Figma mockups with your brand identity baked into every component." },
  { title: "Design System", desc: "Reusable component libraries that keep your UI consistent as the product scales." },
  { title: "Prototyping", desc: "Clickable prototypes for usability testing and stakeholder sign-off." },
  { title: "Dev Handoff", desc: "Pixel-perfect specs, assets, and documentation so development goes smoothly." },
];

const principles = [
  { label: "Accessibility-first", desc: "WCAG AA compliant by default. Good design works for everyone." },
  { label: "Conversion-focused", desc: "Every design decision is tied to a business goal — clicks, signups, sales." },
  { label: "Performance-aware", desc: "We optimize assets and interactions to keep load times under 2 seconds." },
];

export default function WebDesign() {
  return (
    <div className="bg-slate-950 pt-16">
      <section className="relative py-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono mb-6">
              🎨 Web Design
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Designed to Stop
              <span className="block" style={{ background: "linear-gradient(135deg, #a78bfa, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                the Scroll
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We create user interfaces that are beautiful by design and strategic by intent. Every layout, color, and micro-interaction is crafted to guide users toward your goals.
            </p>
            <Link to="/contact" className="inline-block px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors">
              Start a Design Project
            </Link>
          </div>
          <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden border border-slate-800 bg-slate-800">
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=700&h=500&fit=crop&auto=format"
              alt="UI design work"
              width="700"
              height="500"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-violet-400 font-mono text-sm font-medium">// what you get</span>
            <h2 className="text-4xl font-black text-white mt-3">Design Deliverables</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((d) => (
              <div key={d.title} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-violet-500/30 transition-colors">
                <h3 className="text-white font-bold text-lg mb-2">{d.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Our Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.label} className="p-6 rounded-2xl border border-slate-800 text-center">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-violet-400 text-lg">✦</span>
                </div>
                <h3 className="text-white font-bold mb-2">{p.label}</h3>
                <p className="text-slate-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-4">Ready for a Beautiful Redesign?</h2>
          <p className="text-slate-400 mb-8">Share your brief and we'll send back initial concepts within 5 business days.</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-colors">
            Request a Design Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
