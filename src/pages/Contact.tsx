import { useState } from "react";
import SocialIcon from "../components/SocialIcon";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdnpyba";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "olaniyanroland@gmail.com",
    sub: "We reply within 2 business hours",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+234 91-388-233-41",
    sub: "Mon–Sat, 8am–8pm WAT",
  },
  
];

const services = [
  "Web Development",
  "Web Design",
  "SEO & Digital Marketing",
  "E-Commerce",
  "Mobile App",
  "Other",
];

const socialLinks = [
  { label: "X", href: "https://x.com/Rolandwale80s", icon: "x" },
  { label: "Instagram", href: "https://www.instagram.com/lowskitech01", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/Papilowski", icon: "facebook" },
] as const;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          service: form.service,
          budget: form.budget,
          message: form.message,
          _subject: `New LowskiTech enquiry from ${form.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch {
      setError("Something went wrong while sending your message. Please try again or email olaniyanroland@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-950 pt-16">
      <section className="relative py-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-sky-400 font-mono text-sm font-medium">// get in touch</span>
            <h1 className="text-5xl lg:text-7xl font-black text-white mt-4 mb-6 leading-tight">
              Let's Build
              <span className="gradient-text block">Something Great</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              Tell us about your project. We'll come back to you with a tailored proposal within 48 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <div className="space-y-4 mb-10">
              {contactInfo.map((c) => (
                <div key={c.label} className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{c.icon}</span>
                    <div>
                      <p className="text-slate-500 text-xs font-mono mb-1">{c.label}</p>
                      <p className="text-white font-semibold">{c.value}</p>
                      <p className="text-slate-400 text-sm mt-0.5">{c.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <p className="text-slate-400 text-sm mb-4">Follow our work</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors text-xs font-mono"
                    aria-label={s.label}
                  >
                    <SocialIcon name={s.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-3xl mb-6">
                  ✅
                </div>
                <h3 className="text-white font-black text-3xl mb-3">Message Sent!</h3>
                <p className="text-slate-400 text-lg">
                  Thanks for reaching out. We'll review your project details and get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Alex Johnson"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  >
                    <option value="" className="text-slate-500">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Estimated Budget</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {["< $1k", "$1k–5k", "$5k–15k", "$15k+"].map((b) => (
                      <button
                        type="button"
                        key={b}
                        disabled={isSubmitting}
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                          form.budget === b
                            ? "border-sky-500 bg-sky-500/10 text-sky-400"
                            : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Tell Us About Your Project *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                  />
                </div>
                {error && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-sky-500 hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400 text-white font-bold rounded-xl transition-colors glow-blue text-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
                <p className="text-slate-500 text-xs text-center">
                  We'll respond within 48 hours. No spam, no obligation.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
