import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import rolandPhoto from "../assets/roland-portrait.jpg";
import workPhoto from "../assets/work-optimized.jpg";

const values = [
  { title: "Craftsmanship", desc: "We write clean, maintainable code and design with obsessive attention to detail." },
  { title: "Transparency", desc: "No hidden fees, no surprises. You always know what we're building and why." },
  { title: "Results-Driven", desc: "Every pixel, line of code, and campaign exists to drive measurable business outcomes." },
  { title: "Partnership", desc: "We're not vendors — we're long-term partners invested in your continued growth." },
];

const founder = [
  {
    name: "Roland Olaniyan",
    role: "Founder & Web Developer",
    image: rolandPhoto,
    bio: "Designing and developing focused digital experiences for businesses that need clear, reliable results.",
  },
];

const storySteps = [
  {
    eyebrow: "01 / focus",
    title: "A personal studio touch",
    desc: "Clients work directly with Roland, so strategy, design, development, and delivery stay clear from the first conversation.",
  },
  {
    eyebrow: "02 / process",
    title: "Built at the desk",
    desc: "Most of the work happens in focused build sessions: refining layouts, writing code, testing pages, and shaping every detail for real users.",
  },
  {
    eyebrow: "03 / code",
    title: "Live build energy",
    desc: "The final stretch is where ideas turn into polished screens, clean code, fast pages, and a launch-ready experience.",
  },
];

const codeLines = [
  "const brief = await listenToClient();",
  "const flow = mapUserJourney(brief.goals);",
  "design.sections.forEach(polishDetails);",
  "build.components({ responsive: true });",
  "await testPages(['mobile', 'desktop']);",
  "deploy.site({ speed: 'fast', seo: true });",
  "console.log('LowskiTech launch ready');",
];

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

function CodingScreen({ reveal }: { reveal: number }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.28),transparent_32%),linear-gradient(135deg,#020617_0%,#0f172a_52%,#111827_100%)] px-5 transition-[opacity,transform] duration-700"
      style={{
        opacity: reveal,
        transform: `scale(${0.96 + reveal * 0.04}) translateY(${(1 - reveal) * 28}px)`,
      }}
      aria-hidden={reveal < 0.08}
    >
      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-sky-300/20 bg-slate-950/90 shadow-2xl shadow-sky-950/50">
        <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 truncate font-mono text-xs text-slate-400">lowskitech/about-motion.tsx</span>
        </div>
        <div className="relative h-72 overflow-hidden p-5 font-mono text-sm leading-7 text-slate-300">
          <div className="coding-track space-y-1">
            {[...codeLines, ...codeLines].map((line, index) => (
              <div key={`${line}-${index}`} className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="select-none text-right text-slate-600">{String((index % codeLines.length) + 1).padStart(2, "0")}</span>
                <span>
                  <span className="text-sky-300">{line.split("(")[0]}</span>
                  <span className="text-slate-500">(</span>
                  <span className="text-emerald-300">{line.includes("(") ? line.slice(line.indexOf("(") + 1, line.lastIndexOf(")")) : line}</span>
                  <span className="text-slate-500">)</span>
                  <span className="text-slate-500">;</span>
                </span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2 border-t border-slate-800 bg-slate-950/90 pt-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.85)]" />
            <span className="font-mono text-xs text-emerald-300">building responsive pages</span>
            <span className="h-4 w-2 animate-pulse bg-sky-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const nextProgress = travel > 0 ? clamp(-rect.top / travel) : 0;

      setProgress(nextProgress);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const computerFadeIn = clamp((progress - 0.36) / 0.18);
  const codeReveal = clamp((progress - 0.68) / 0.18);
  const computerReveal = computerFadeIn * (1 - codeReveal);
  const portraitReveal = 1 - computerFadeIn;
  const activeStep = progress < 0.36 ? 0 : progress < 0.68 ? 1 : 2;
  const activeStory = storySteps[activeStep];

  return (
    <section ref={sectionRef} className="relative min-h-[320vh] bg-slate-950">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
        <img
          src={rolandPhoto}
          alt="Roland Olaniyan portrait"
          width="478"
          height="720"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top transition-[opacity,transform,filter] duration-700"
          style={{
            opacity: portraitReveal,
            transform: `scale(${1 + progress * 0.05}) translateY(${-progress * 12}px)`,
            filter: `saturate(${1 - computerFadeIn * 0.22})`,
          }}
        />
        <img
          src={workPhoto}
          alt="Roland working on a computer"
          width="405"
          height="720"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center transition-[opacity,transform,filter] duration-700"
          style={{
            opacity: computerReveal,
            transform: `scale(${1.08 - computerFadeIn * 0.05}) translateY(${(1 - computerFadeIn) * 32}px)`,
            filter: `contrast(${0.95 + computerFadeIn * 0.1})`,
          }}
        />
        <CodingScreen reveal={codeReveal} />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-slate-950/10" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
        <div
          className="absolute left-0 top-0 h-1 bg-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.75)] transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-8 sm:pb-12 lg:pb-16">
            <div className="max-w-2xl">
              <span className="font-mono text-sm font-medium text-sky-300">// our story</span>
              <h2 className="mt-3 text-4xl font-black leading-tight text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
                Built by a Solo Web Developer
              </h2>
            </div>

            <div className="max-w-xl border-l border-sky-300/60 pl-5">
              <span className="font-mono text-xs text-sky-300">{activeStory.eyebrow}</span>
              <h3 className="mt-2 text-xl font-black text-white drop-shadow-2xl sm:text-2xl">
                {activeStory.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200 drop-shadow-xl sm:text-base">
                {activeStory.desc}
              </p>
            </div>

            <div className="flex gap-2" aria-hidden="true">
              {storySteps.map((step, index) => (
                <span
                  key={step.title}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeStep === index ? "w-12 bg-sky-300" : "w-5 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="bg-slate-950 pt-16">
      {/* Header */}
      <section className="relative py-24 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-sky-400 font-mono text-sm font-medium">// about lowskitech</span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mt-4 mb-6 max-w-3xl leading-tight">
            We Build the Web for{" "}
            <span className="gradient-text">Ambitious Brands</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
            LowskiTech is a solo web development studio helping businesses compete and win in the digital economy.
            <br />
            lowskitech is a web development studio that turns ideas into fast, functional, good-looking websites and applications. We work with founders, small businesses, and teams who need a digital presence that actually works — not just one that looks nice in a mockup.
          </p>
        </div>
      </section>

      {/* Story */}
      <ScrollStory />

      {/* Mission & Values */}
      <section className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-sky-400 font-mono text-sm font-medium">// what drives us</span>
            <h2 className="text-4xl font-black text-white mt-4 mb-4">Mission & Values</h2>
            <p className="text-slate-400 text-lg">
              Our mission: make world-class web technology accessible to any business ready to invest in growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sky-400 font-mono text-sm font-medium">// founder</span>
            <h2 className="text-4xl font-black text-white mt-4">The Person Behind the Work</h2>
          </div>
          <div className="mx-auto grid max-w-md grid-cols-1 gap-6">
            {founder.map((m) => (
              <div key={m.name} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 group">
                <div className="w-28 h-36 rounded-2xl overflow-hidden mb-4 bg-slate-800">
                  <img
                    src={m.image}
                    alt={m.name}
                    width="112"
                    height="144"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-white font-bold text-lg">{m.name}</h3>
                <p className="text-sky-400 text-sm font-medium mb-2">{m.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400 mb-8">I'd love to hear about your project and explore how LowskiTech can help.</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-colors glow-blue"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
