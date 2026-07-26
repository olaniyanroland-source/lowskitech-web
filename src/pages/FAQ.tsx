import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Timelines vary by scope. A Starter site takes 2 weeks. A Growth site takes 4 weeks. A Business project takes 6 weeks. Complex web applications or e-commerce builds are scoped individually — typically 8–16 weeks.",
  },
  {
    q: "What information do you need to get started?",
    a: "We start with a discovery session covering your goals, target audience, brand assets (logo, fonts, colors), and any existing content. We'll send you a brief checklist after the kickoff call.",
  },
  {
    q: "Do you offer website maintenance after launch?",
    a: "Yes. Our maintenance plans start at NGN 14,900/month and cover security updates, plugin upgrades, performance monitoring, uptime checks, and minor content changes. We also offer on-demand support hours.",
  },
  {
    q: "What technologies do you use?",
    a: "Our primary stack is React / Next.js for the frontend, PHP or Laravel for backends, and MySQL for databases. We adapt to your existing stack when needed.",
  },
  {
    q: "What does SEO actually include?",
    a: "Our SEO service covers technical audits (site speed, crawlability, schema), on-page optimization (titles, meta, headings, internal links), content strategy, and link building. Monthly retainers include reporting and continuous improvement.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Every site we build is mobile-first by design. We test across iOS Safari, Android Chrome, and the most common screen sizes. We also run Core Web Vitals audits to ensure a smooth mobile experience.",
  },
  {
    q: "How many revisions are included?",
    a: "Starter includes 1 revision round. Growth includes 3. Business includes unlimited revisions during the project. We define \"revision round\" clearly in the contract so there are no disputes.",
  },
  {
    q: "Can I update the website myself after launch?",
    a: "Yes — if your project includes a CMS (Sanity, WordPress, Webflow, or Shopify), we'll train you to manage content independently. We provide a 1-hour handoff session and written documentation.",
  },
  {
    q: "What happens if I need features added later?",
    a: "We're here for the long haul. Existing clients get priority scheduling for feature additions. You can engage us on a monthly retainer or pay per project — whatever works for your budget and cadence.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We're happy to sign a mutual NDA before discussing sensitive project details. Just mention it in your initial inquiry.",
  },
  {
    q: "How do payments work?",
    a: "We invoice 50% upfront and 50% on launch. For projects over NGN 1,000,000, we offer milestone-based payment schedules. We accept bank transfer, credit card, and PayPal.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-800 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className={`font-semibold text-base transition-colors ${open ? "text-sky-400" : "text-white group-hover:text-sky-400"}`}>
          {q}
        </span>
        <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${open ? "border-sky-500 bg-sky-500/10 rotate-45" : "border-slate-700"}`}>
          <svg className="w-3 h-3 text-slate-400" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 1v10M1 6h10" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-slate-400 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="bg-slate-950 pt-16">
      <section className="relative py-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-sky-400 font-mono text-sm font-medium">// answers</span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mt-4 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Everything you need to know before starting a project with us.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-slate-800 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">Still Have Questions?</h2>
          <p className="text-slate-400 mb-8">I typically respond within 2 business hours.</p>
          <a
            href="mailto:hello@lowskitech.io"
            className="inline-block px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-colors glow-blue"
          >
            Email Us Directly
          </a>
        </div>
      </section>
    </div>
  );
}
