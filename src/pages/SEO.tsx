import { Link } from "react-router-dom";

const offerings = [
  { icon: "🔍", title: "Technical SEO Audit", desc: "Deep crawl of your site's technical health — indexability, Core Web Vitals, structured data, and crawl budget." },
  { icon: "🎯", title: "Keyword Research", desc: "Data-driven keyword strategy targeting high-intent search terms your ideal customers actually use." },
  { icon: "✍️", title: "Content Strategy", desc: "Editorial calendars, topic clusters, and content briefs engineered to rank and convert." },
  { icon: "🗺️", title: "Google Business Profile", desc: "Full optimization of your GBP listing to dominate local search and Google Maps results." },
  { icon: "🔗", title: "Link Building", desc: "White-hat backlink acquisition from relevant, high-authority domains in your niche." },
  { icon: "📊", title: "Google Ads Management", desc: "ROI-focused PPC campaigns with continuous A/B testing and bid optimization." },
];

const results = [
  { metric: "147%", label: "Average organic traffic increase", period: "in 6 months" },
  { metric: "3.2×", label: "Average ROAS on Google Ads", period: "across managed accounts" },
  { metric: "#1", label: "Local rankings achieved", period: "for 85% of target keywords" },
];

export default function SEO() {
  return (
    <div className="bg-slate-950 pt-16">
      <section className="relative py-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/25 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
              📈 SEO & Digital Marketing
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Rank Higher.
              <span className="block" style={{ background: "linear-gradient(135deg, #34d399, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Grow Faster.
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We get your business to the top of Google and keep it there — through technical SEO, content, local search optimization, and paid media that actually converts.
            </p>
            <Link to="/contact" className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors">
              Get a Free SEO Audit
            </Link>
          </div>
          <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <p className="text-slate-400 text-xs font-mono mb-4">// Search Performance</p>
            {[
              { kw: "web design agency london", pos: 1, change: "+12" },
              { kw: "custom website development", pos: 2, change: "+8" },
              { kw: "seo services small business", pos: 3, change: "+19" },
              { kw: "ecommerce website builder", pos: 4, change: "+5" },
            ].map((r) => (
              <div key={r.kw} className="flex items-center justify-between py-3 border-b border-slate-800 last:border-0">
                <span className="text-slate-300 text-sm">{r.kw}</span>
                <div className="flex items-center gap-4 shrink-0 ml-4">
                  <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center">{r.pos}</span>
                  <span className="text-emerald-400 text-xs font-mono">↑{r.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((r) => (
            <div key={r.label} className="text-center">
              <p className="text-5xl font-black text-emerald-400">{r.metric}</p>
              <p className="text-white font-medium mt-2">{r.label}</p>
              <p className="text-slate-500 text-sm">{r.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-emerald-400 font-mono text-sm font-medium">// our approach</span>
            <h2 className="text-4xl font-black text-white mt-3">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o) => (
              <div key={o.title} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{o.icon}</span>
                <h3 className="text-white font-bold text-lg mb-2">{o.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-4">See Where You Stand</h2>
          <p className="text-slate-400 mb-8">We'll audit your site for free and show you exactly where the opportunities are.</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors">
            Claim Your Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
