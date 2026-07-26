import { Link } from "react-router-dom";

const DIRECT_PHONE_HREF = "tel:+2349138823341";

const services = [
  {
    icon: "⚡",
    title: "Web Development",
    desc: "Custom web applications built with modern stacks. We deliver fast, scalable, and maintainable code that grows with your business.",
    highlights: ["React / Next.js", "Node.js APIs", "Database design", "Performance optimization"],
    to: "/services/web-development",
    accent: "from-sky-500 to-cyan-400",
  },
  {
    icon: "🎨",
    title: "Web Design",
    desc: "Strategic UI/UX design focused on conversions. Beautiful, accessible interfaces crafted in Figma and brought to life precisely.",
    highlights: ["UX research", "Figma prototypes", "Design systems", "Responsive layouts"],
    to: "/services/web-design",
    accent: "from-violet-500 to-purple-400",
  },
  {
    icon: "📈",
    title: "SEO & Digital Marketing",
    desc: "Data-driven strategies that put you at the top of search results and keep you there. From on-page SEO to Google Ads management.",
    highlights: ["Keyword research", "Technical SEO", "Google Ads", "Google Business Profile"],
    to: "/services/seo-marketing",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    desc: "Online stores that sell. Custom Shopify themes, WooCommerce builds, or headless commerce — we know how to drive cart conversions.",
    highlights: ["Shopify development", "WooCommerce", "Payment integration", "Inventory systems"],
    to: "/services",
    accent: "from-orange-500 to-amber-400",
  },
  {
    icon: "📱",
    title: "Mobile Applications",
    desc: "Cross-platform mobile apps with React Native. One codebase, two stores — shipped fast without compromising native feel.",
    highlights: ["React Native", "iOS & Android", "Push notifications", "App Store submission"],
    to: "/services",
    accent: "from-pink-500 to-rose-400",
  },
];

export default function Services() {
  return (
    <div className="bg-slate-950 pt-16">
      <section className="relative py-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-sky-400 font-mono text-sm font-medium">// what we offer</span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mt-4 mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            End-to-end digital solutions — from initial strategy through development, launch, and ongoing growth.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 group hover:border-slate-600 transition-all">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center text-2xl mb-6`}>
                {s.icon}
              </div>
              <h3 className="text-white font-bold text-2xl mb-3">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">{s.desc}</p>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1 h-1 rounded-full bg-sky-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                to={s.to}
                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium text-sm transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-slate-400 mb-8 text-lg">Book a free 30-minute strategy call. We'll map out exactly what you need.</p>
          <a
            href={DIRECT_PHONE_HREF}
            className="inline-block px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-colors glow-blue"
          >
            Book a Free Call
          </a>
        </div>
      </section>
    </div>
  );
}
