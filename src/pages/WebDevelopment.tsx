import { Link } from "react-router-dom";

const tech = [
  { name: "React", cat: "Frontend" },
  { name: "Next.js", cat: "Frontend" },
  { name: "TypeScript", cat: "Language" },
  { name: "JavaScript", cat: "Language" },
  { name: "PHP", cat: "Backend" },
  { name: "Laravel", cat: "Backend" },
  { name: "MySQL", cat: "Database" },
  { name: "GraphQL", cat: "API" },
  { name: "REST APIs", cat: "API" },
  { name: "Redis", cat: "Cache" },
];

const process = [
  { step: "01", title: "Discovery & Scoping", desc: "We map your requirements, architecture needs, and technical constraints before writing a single line of code." },
  { step: "02", title: "Design & Prototype", desc: "Interactive Figma prototypes so you can validate the experience before development begins." },
  { step: "03", title: "Agile Development", desc: "Two-week sprints with regular progress reviews. You see real progress every two weeks, guaranteed." },
  { step: "04", title: "QA & Performance", desc: "Comprehensive testing, Core Web Vitals audit, and cross-browser validation." },
  { step: "05", title: "Launch & Handoff", desc: "A polished launch checklist, full code documentation, and knowledge transfer so your project is ready to use." },
  { step: "06", title: "Support & Growth", desc: "Ongoing maintenance plans, feature additions, and performance improvements after launch." },
];

export default function WebDevelopment() {
  return (
    <div className="bg-slate-950 pt-16">
      <section className="relative py-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-6">
              ⚡ Web Development
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Code That Performs
              <span className="gradient-text block">Under Pressure</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We build web applications that scale from 100 to 10 million users without breaking a sweat. Every project is engineered for speed, reliability, and maintainability.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-colors">
                Start a Project
              </Link>
              <Link to="/portfolio" className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors">
                See Examples
              </Link>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 text-slate-500 text-xs font-mono">app.tsx</span>
            </div>
            <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
                <span className="text-purple-400">import</span>
                <span className="text-slate-300"> {"{ useState }"} </span>
                <span className="text-purple-400">from</span>
                <span className="text-emerald-300"> 'react'</span>
                {"\n\n"}
                <span className="text-sky-400">export default function</span>
                <span className="text-yellow-300"> App</span>
                <span className="text-slate-300">() {"{"}</span>
                {"\n  "}
                <span className="text-sky-400">const</span>
                <span className="text-slate-300"> [data, setData] = </span>
                <span className="text-yellow-300">useState</span>
                <span className="text-slate-300">{"([])"}</span>
                {"\n\n  "}
                <span className="text-slate-500">// Core Web Vitals: 99/100</span>
                {"\n  "}
                <span className="text-sky-400">return</span>
                <span className="text-slate-300"> {"<YourAwesomeApp />"}</span>
                {"\n}"}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Our Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tech.map((t) => (
              <div key={t.name} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-500 font-mono">{t.cat}</span>
                <span className="w-px h-3 bg-slate-700" />
                <span className="text-slate-200 font-medium text-sm">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sky-400 font-mono text-sm font-medium">// how we work</span>
            <h2 className="text-4xl font-black text-white mt-3">Our Development Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((p) => (
              <div key={p.step} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-sky-400/40 font-mono font-black text-4xl">{p.step}</span>
                <h3 className="text-white font-bold text-lg mt-2 mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-4">Let's Build Something Fast</h2>
          <p className="text-slate-400 mb-8">Tell us about your project and we'll send a proposal within 48 hours.</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-colors glow-blue">
            Get a Proposal
          </Link>
        </div>
      </section>
    </div>
  );
}
