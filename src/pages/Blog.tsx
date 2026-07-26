import { useState } from "react";

const posts = [
  {
    title: "10 Web Design Trends Dominating 2025",
    excerpt: "From bento grids to glassmorphism 2.0 — here's what's shaping the visual web this year and which trends are worth adopting.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=380&fit=crop&auto=format",
    category: "Design",
    author: "Roland",
    date: "Jul 5, 2025",
    readTime: "8 min read",
  },
  {
    title: "How to Rank Your Google Business Profile in the Top 3",
    excerpt: "The Local Pack captures 44% of clicks. Here's the exact 12-step process we use to get clients into those top 3 spots.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=380&fit=crop&auto=format",
    category: "SEO",
    author: "Roland",
    date: "Jun 28, 2025",
    readTime: "11 min read",
  },
  {
    title: "React vs Next.js in 2025: Which Should You Choose?",
    excerpt: "Both are excellent — but the right choice depends on your project's needs. We break down the trade-offs with real examples.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=380&fit=crop&auto=format",
    category: "Development",
    author: "Roland",
    date: "Jun 20, 2025",
    readTime: "10 min read",
  },
  {
    title: "Core Web Vitals 2025: What Changed and What to Fix First",
    excerpt: "Google updated the CWV rubric again. Here's what changed, what stayed, and the fastest wins for improving your scores.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=380&fit=crop&auto=format",
    category: "SEO",
    author: "Roland",
    date: "Jun 10, 2025",
    readTime: "9 min read",
  },
  {
    title: "Why Your Business Needs a Mobile-First Website (Not Just Responsive)",
    excerpt: "Responsive and mobile-first aren't the same thing. We explain the difference and why it costs businesses real money.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=380&fit=crop&auto=format",
    category: "Design",
    author: "Roland",
    date: "May 30, 2025",
    readTime: "6 min read",
  },
  {
    title: "Headless vs Traditional CMS: The 2025 Decision Guide",
    excerpt: "Contentful, Sanity, WordPress — choosing the wrong CMS costs years of pain. This guide cuts through the noise.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=380&fit=crop&auto=format",
    category: "Development",
    author: "Roland",
    date: "May 18, 2025",
    readTime: "13 min read",
  },
];

const categories = ["All", "Design", "SEO", "Development"];
const categoryColors: Record<string, string> = {
  Design: "text-violet-400 bg-violet-500/10",
  SEO: "text-emerald-400 bg-emerald-500/10",
  Development: "text-sky-400 bg-sky-500/10",
};

export default function Blog() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="bg-slate-950 pt-16">
      <section className="relative py-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-sky-400 font-mono text-sm font-medium">// resources</span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mt-4 mb-6">
            Blog & <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Practical guides on web design, development, SEO, and digital strategy — written from hands-on project experience.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 border-b border-slate-800 sticky top-16 z-30 bg-slate-950/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 flex gap-2">
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

      {/* Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300 flex flex-col">
              <div className="relative overflow-hidden h-48 bg-slate-800">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[p.category]}`}>
                    {p.category}
                  </span>
                  <span className="text-slate-500 text-xs">{p.readTime}</span>
                </div>
                <h2 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-sky-400 transition-colors flex-1">
                  {p.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-300 text-xs font-medium">{p.author}</span>
                  </div>
                  <span className="text-slate-500 text-xs">{p.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-sky-400 font-mono text-sm font-medium">// instagram</span>
            <h2 className="text-4xl font-black text-white mt-3">Latest From Instagram</h2>
          </div>
          <div
            className="elfsight-app-c5df78aa-c7e9-44e6-aa71-410282efd6e5"
            data-elfsight-app-lazy
          />
        </div>
      </section>

      <section className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-sky-400 font-mono text-sm font-medium">// tiktok</span>
            <h2 className="text-4xl font-black text-white mt-3">Latest From TikTok</h2>
          </div>
          <div
            className="elfsight-app-844a3c7e-945e-4dbd-b970-dd3d11a2c70c"
            data-elfsight-app-lazy
          />
        </div>
      </section>
    </div>
  );
}
