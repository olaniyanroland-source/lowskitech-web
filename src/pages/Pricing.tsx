import { Link } from "react-router-dom";

const DIRECT_PHONE_HREF = "tel:+2349138823341";

const plans = [
  {
    name: "Starter",
    price: "₦350,000",
    period: "one-time",
    desc: "Perfect for small businesses needing a clean, professional online presence.",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "Google Analytics",
      "1 revision round",
      "2-week delivery",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "₦750,000",
    period: "one-time",
    desc: "For growing businesses ready to invest in a site that drives serious leads.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "CMS integration",
      "On-page SEO",
      "Speed optimization",
      "3 revision rounds",
      "4-week delivery",
      "30-day post-launch support",
    ],
    cta: "Start Growing",
    highlight: true,
  },
  {
    name: "Business",
    price: "₦1,500,000",
    period: "one-time",
    desc: "Full website build plus an SEO strategy to get you ranking and converting.",
    features: [
      "Unlimited pages",
      "Advanced UX research",
      "Full design system",
      "Blog / resource hub",
      "3-month SEO campaign",
      "Google Ads setup",
      "Unlimited revisions",
      "6-week delivery",
      "90-day support",
    ],
    cta: "Get Business",
    highlight: false,
  },
];

const addons = [
  { name: "Monthly SEO Retainer", price: "From ₦39,000/mo" },
  { name: "Google Ads Management", price: "From ₦49,900/mo" },
  { name: "Website Maintenance", price: "From ₦19,900/mo" },
  { name: "Dynamic E-Commerce Store", price: "From ₦550,000" },
  { name: "Static E-Commerce Store", price: "From ₦300,000" },
  { name: "Custom Web Application", price: "From ₦1,000,000" },
];

export default function Pricing() {
  return (
    <div className="bg-slate-950 pt-16">
      <section className="relative py-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-sky-400 font-mono text-sm font-medium">// investment</span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mt-4 mb-6">
            Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            No mystery quotes. Here's what we charge and exactly what you get.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                p.highlight
                  ? "bg-sky-500/5 border-2 border-sky-500"
                  : "bg-slate-900 border border-slate-800"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-sky-500 text-white text-xs font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{p.name}</h3>
                <p className="text-slate-400 text-sm">{p.desc}</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-black text-white">{p.price}</span>
                <span className="text-slate-500 text-sm ml-2">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                  p.highlight
                    ? "bg-sky-500 hover:bg-sky-400 text-white"
                    : "border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-2xl mb-2">Enterprise</h3>
              <p className="text-slate-400">Complex projects requiring custom architecture, focused delivery, or multi-phase roadmaps.</p>
            </div>
            <Link to="/contact" className="shrink-0 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-colors border border-slate-700">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Add-On Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((a) => (
              <div key={a.name} className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-300 font-medium text-sm">{a.name}</span>
                <span className="text-sky-400 font-mono text-sm font-semibold">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">Not Sure Which Plan Fits?</h2>
          <p className="text-slate-400 mb-8">Book a free 30-minute call and we'll recommend the right scope for your goals and budget.</p>
          <a href={DIRECT_PHONE_HREF} className="inline-block px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-colors glow-blue">
            Schedule a Free Call
          </a>
        </div>
      </section>
    </div>
  );
}
