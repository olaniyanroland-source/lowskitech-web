const sections = [
  {
    title: "Using This Website",
    body: [
      "You may use this website to learn about LowskiTech, review services and projects, read resources, and contact us about potential work.",
      "You agree not to misuse the website, attempt unauthorized access, interfere with website functionality, submit malicious code, or use the website for unlawful purposes.",
    ],
  },
  {
    title: "Enquiries and Project Requests",
    body: [
      "Submitting a contact form, email, WhatsApp message, or social message does not create a client relationship or guarantee that LowskiTech will accept your project.",
      "Any project work, pricing, timeline, deliverables, ownership terms, payment schedule, and support scope will be confirmed separately in a proposal, invoice, contract, or written agreement.",
    ],
  },
  {
    title: "Service Information",
    body: [
      "The website describes services such as web development, web design, SEO, e-commerce, and related digital work. Service descriptions are provided for general information and may change over time.",
      "Examples, testimonials, statistics, and portfolio items are illustrative of previous work and do not guarantee identical outcomes for every project.",
    ],
  },
  {
    title: "Payments and Project Terms",
    body: [
      "Payment terms are agreed before project work begins. Unless otherwise agreed in writing, work may require a deposit or milestone payments.",
      "Late payments, delayed client feedback, missing assets, or changes in scope may affect delivery timelines.",
    ],
  },
  {
    title: "Client Responsibilities",
    body: [
      "Clients are responsible for providing accurate project requirements, brand assets, content, access credentials, approvals, and feedback needed to complete the work.",
      "Clients must have the right to use any text, images, logos, files, trademarks, or third-party materials they provide to LowskiTech.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Unless otherwise agreed in writing, final custom work created specifically for a client is transferred after full payment is received.",
      "LowskiTech may retain ownership of pre-existing tools, processes, templates, reusable code, know-how, and internal systems used to deliver services.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Projects and this website may use third-party services such as hosting providers, domain registrars, analytics tools, payment processors, Formspree, Elfsight, social platforms, plugins, APIs, or content management systems.",
      "Third-party services are governed by their own terms and privacy policies. LowskiTech is not responsible for downtime, policy changes, data handling, pricing changes, or failures caused by third-party providers.",
    ],
  },
  {
    title: "Website Content",
    body: [
      "All website content, branding, design, text, and visual materials are owned by LowskiTech or used with permission unless otherwise stated.",
      "You may not copy, reproduce, resell, or redistribute website content without written permission, except for normal sharing of public pages with attribution.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "The website is provided on an as-is and as-available basis. While LowskiTech aims to keep information accurate and the website available, we do not guarantee uninterrupted access or error-free content.",
      "To the fullest extent permitted by law, LowskiTech will not be liable for indirect, incidental, consequential, or special damages arising from use of this website.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions about these Terms, contact LowskiTech at roland@lowskitech.com.",
      "These Terms may be updated from time to time. The latest version will be posted on this page.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <div className="bg-slate-950 pt-16">
      <section className="relative py-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6">
          <span className="text-sky-400 font-mono text-sm font-medium">// legal</span>
          <h1 className="text-5xl lg:text-6xl font-black text-white mt-4 mb-6">Terms of Service</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            These Terms explain the basic rules for using the LowskiTech website and contacting us about web design and development services.
          </p>
          <p className="text-slate-500 text-sm mt-6">Last updated: July 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-white text-xl font-bold mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-slate-400 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
