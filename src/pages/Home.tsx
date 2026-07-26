import { Link } from "react-router-dom";
import workPhoto from "../assets/siaosports.png";
import asaPhoto from "../assets/asastudio.png";
import portfolio from "../assets/portfolio.png";
import siaoCeo from "../assets/ceo.jpeg";
import silasPhoto from "../assets/silas.jpg";
const services = [
  {
    icon: "⚡",
    title: "Web Development",
    desc: "Fast, scalable web applications built with React, Next.js, and Node.js.",
    to: "/services/web-development",
  },
  {
    icon: "🎨",
    title: "Web Design",
    desc: "Pixel-perfect UI/UX design that converts visitors into customers.",
    to: "/services/web-design",
  },
  {
    icon: "📈",
    title: "SEO & Marketing",
    desc: "Dominate search results and grow your digital presence organically.",
    to: "/services/seo-marketing",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    desc: "Custom online stores on Shopify, WooCommerce, or headless stacks.",
    to: "/services",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "Cross-platform mobile experiences with React Native.",
    to: "/services",
  },
];

const projects = [
  {
    title: "Sport Consulting Agency",
    category: "Web App",
    image: workPhoto,
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Photo Studio Portfolio",
    category: "Portfolio",
    image: asaPhoto,
    tags: ["JavaScript", "HTML/Tailwind", "SEO"],
  },
  {
    title: "Portfolio",
    category: "Web App",
    image: portfolio,
    tags: ["JavaScript", "CSS", "HTML"],
  },
];

const testimonials = [
  {
    name: "Olabode Adetula",
    role: "CEO, Siao Sports Consulting Management",
    avatar: siaoCeo,
    text: "I contacted LowskiTech to build a web application for my sports consulting business. Roland delivered a sleek, user-friendly platform that exceeded my expectations. The project was completed on time and within budget, and the ongoing support has been fantastic.",
  },
  {
    name: "Silas Akinola",
    role: "Founder, A.S.A Studio",
    avatar: silasPhoto,
    text: "My experience with LowskiTech was exceptional. He took the time to understand my business needs and delivered a custom solution that has significantly improved our online presence. The communication was clear, and he was responsive throughout the project.",
  },
];

const stats = [
  { value: "5+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "2+", label: "Years Experience" },
  { value: "1", label: "Founder-Led Studio" },
];

export default function Home() {
  return (
    <div className="bg-slate-950">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/30 via-transparent to-indigo-950/30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-mono font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              Web Development Hub
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
              Building Digital{" "}
              <span className="gradient-text">Experiences</span>{" "}
              That Convert
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              We design, develop, and optimize high-performance websites and web apps that grow your business — from concept to launch and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="px-7 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-colors glow-blue"
              >
                View Our Work
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors"
              >
                Get a Free Quote →
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-10">
              {[
                { v: "React", c: "text-sky-400" },
                { v: "Next.js", c: "text-slate-300" },
                { v: "Node.js", c: "text-emerald-400" },
                { v: "Laravel", c: "text-amber-400" },
              ].map((t) => (
                <span key={t.v} className={`text-xs font-mono font-medium ${t.c} opacity-70`}>
                  {t.v}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/60">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=480&fit=crop&auto=format"
                alt="Web development in action"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-4 -right-4 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-white text-sm font-semibold">Project Live</span>
              </div>
              <p className="text-slate-400 text-xs mt-0.5">Deployed 2 min ago</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 shadow-xl">
              <p className="text-slate-400 text-xs">Core Web Vitals</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-emerald-400 font-mono font-bold text-sm">98</span>
                <span className="text-emerald-400 font-mono font-bold text-sm">96</span>
                <span className="text-emerald-400 font-mono font-bold text-sm">100</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-black text-white">{s.value}</p>
              <p className="text-slate-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sky-400 font-mono text-sm font-medium">// what we do</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Services That Drive Results
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            End-to-end digital solutions for ambitious businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900/80 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-sky-400 transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              <span className="inline-flex items-center gap-1 text-sky-400 text-sm mt-4 font-medium">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-sky-400 font-mono text-sm font-medium">// our work</span>
              <h2 className="text-4xl font-black text-white mt-3">Featured Projects</h2>
            </div>
            <Link to="/portfolio" className="text-sky-400 hover:text-sky-300 font-medium transition-colors text-sm">
              View all projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="group rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 bg-slate-900">
                <div className="relative overflow-hidden h-52 bg-slate-800">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur text-xs text-slate-300 font-mono border border-slate-700">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sky-400 font-mono text-sm font-medium">// client words</span>
          <h2 className="text-4xl font-black text-white mt-3">What Clients Say</h2>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover bg-slate-700" />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/testimonials" className="text-sky-400 hover:text-sky-300 font-medium text-sm transition-colors">
            Read all reviews →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 grid-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Ready to Build Something{" "}
            <span className="gradient-text">Remarkable?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Let's turn your vision into a high-performing digital product. Free consultation, no obligations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-colors text-lg glow-blue"
            >
              Start Your Project
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold rounded-xl transition-colors text-lg"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
