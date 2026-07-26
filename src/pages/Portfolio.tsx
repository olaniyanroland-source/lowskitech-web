import { useState } from "react";
import asaPhoto from "../assets/asastudio.png";
import portfolio from "../assets/portfolio.png";
import workPhoto from "../assets/siaosports.png";

const projects = [
  {
    title: "Sport Consulting Agency",
    client: "Siao Sports Consulting Management",
    category: "Web App",
    image: workPhoto,
    tags: ["React", "TypeScript", "Tailwind"],
    desc: "A sleek web application for a sports consulting business, built to present services clearly and help clients connect with the brand.",
    result: "Professional platform launched on time",
  },
  {
    title: "Photo Studio Portfolio",
    client: "A.S.A Studio",
    category: "Portfolio",
    image: asaPhoto,
    tags: ["JavaScript", "HTML/Tailwind", "SEO"],
    desc: "A clean portfolio site for a photography studio, designed to showcase creative work and improve the studio's online presence.",
    result: "Stronger online presence for the studio",
  },
  {
    title: "Portfolio",
    client: "Personal Portfolio",
    category: "Web App",
    image: portfolio,
    tags: ["JavaScript", "CSS", "HTML"],
    desc: "A responsive personal portfolio built to present projects, skills, and contact information in a simple, polished experience.",
    result: "Fast, responsive portfolio experience",
  },
];

const categories = ["All", "Web App", "Portfolio"];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="bg-slate-950 pt-16">
      <section className="relative py-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-sky-400 font-mono text-sm font-medium">// our work</span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mt-4 mb-6">
            Projects That <span className="gradient-text">Move Metrics</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Every project here delivered measurable business results — not just a pretty website.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-slate-800 sticky top-16 z-30 bg-slate-950/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active === c
                  ? "bg-sky-500 text-white"
                  : "border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <div key={p.title} className="group rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 bg-slate-900 transition-all duration-300">
              <div className="relative overflow-hidden h-60 bg-slate-800">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur text-xs font-mono text-slate-300 border border-slate-700">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-white font-bold text-xl">{p.title}</h3>
                    <p className="text-slate-500 text-sm">{p.client}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-2 mb-4 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <span className="text-emerald-400 text-xs">📊</span>
                  <span className="text-emerald-400 text-sm font-medium">{p.result}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
