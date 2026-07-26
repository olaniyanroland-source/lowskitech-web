import siaoCeo from "../assets/ceo.jpeg";
import silasPhoto from "../assets/silas.jpg";

const testimonials = [
  {
    name: "Olabode Adetula",
    role: "CEO, Siao Sports Consulting Management",
    avatar: siaoCeo,
    rating: 5,
    text: "I contacted LowskiTech to build a web application for my sports consulting business. Roland delivered a sleek, user-friendly platform that exceeded my expectations. The project was completed on time and within budget, and the ongoing support has been fantastic.",
    project: "Web Application",
  },
  {
    name: "Silas Akinola",
    role: "Founder, A.S.A Studio",
    avatar: silasPhoto,
    rating: 5,
    text: "My experience with LowskiTech was exceptional. He took the time to understand my business needs and delivered a custom solution that has significantly improved our online presence. The communication was clear, and he was responsive throughout the project.",
    project: "Portfolio Website",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-slate-950 pt-16">
      <section className="relative py-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-sky-400 font-mono text-sm font-medium">// client reviews</span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mt-4 mb-6">
            What Our Clients <span className="gradient-text">Say</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            We let results — and the people who've experienced them — speak for themselves.
          </p>
        </div>
      </section>

      {/* Summary stats */}
      <section className="border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-10">
          {[
            { v: "98%", l: "Client Satisfaction Rate" },
            { v: "5/5", l: "Average Review Score" },
            { v: "5+", l: "Projects Completed" },
            { v: "2", l: "Client Reviews" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-4xl font-black text-white">{s.v}</p>
              <p className="text-slate-400 text-sm mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col">
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover bg-slate-700" />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-sky-400/70 bg-sky-500/10 px-2 py-1 rounded">{t.project}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
