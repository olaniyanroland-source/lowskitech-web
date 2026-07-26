const sections = [
  {
    title: "Information We Collect",
    body: [
      "When you contact LowskiTech, request a quote, or submit a project enquiry, we may collect your name, email address, phone number, company name, selected service, budget range, and the details you choose to include in your message.",
      "We may also receive basic technical information through website tools and embedded services, such as browser type, device information, pages visited, referring pages, and approximate usage activity.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use your information to respond to enquiries, prepare proposals, deliver web design and development services, provide support, improve the website, prevent spam or abuse, and maintain business records.",
      "We do not sell your personal information.",
    ],
  },
  {
    title: "Form Submissions",
    body: [
      "Contact form submissions are processed through Formspree. Formspree receives the information you submit through the contact form so it can securely deliver your message to LowskiTech.",
      "Please do not submit sensitive personal information, passwords, payment card details, health information, or confidential third-party data through the contact form.",
    ],
  },
  {
    title: "Third-Party Widgets and Links",
    body: [
      "This website may include third-party widgets or links, including Elfsight widgets for social feeds and WhatsApp chat, plus links to social platforms such as X, LinkedIn, Instagram, Facebook, TikTok, and WhatsApp.",
      "Those third parties may collect information according to their own privacy policies when their content loads or when you interact with them.",
    ],
  },
  {
    title: "Cookies and Similar Technologies",
    body: [
      "LowskiTech may use cookies or similar technologies directly or through third-party services to keep the website working, load embedded content, understand website performance, and improve the user experience.",
      "You can usually manage or block cookies in your browser settings. Some embedded features may not work correctly if cookies or scripts are disabled.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "We may share information with trusted service providers only when needed to operate the website, process enquiries, communicate with you, or deliver requested services.",
      "We may also disclose information when required by law, to protect our rights, or to prevent fraud, abuse, or security issues.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We keep enquiry and project information only for as long as reasonably necessary for communication, service delivery, record keeping, legal compliance, and legitimate business purposes.",
      "You may request that we delete or update your personal information, subject to any legal or business record obligations.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Depending on your location, you may have rights to access, correct, delete, restrict, or object to certain uses of your personal information.",
      "To make a privacy request, contact us at roland@lowskitech.com.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy questions, requests, or concerns, contact LowskiTech at roland@lowskitech.com.",
      "This policy may be updated from time to time. The latest version will be posted on this page.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-950 pt-16">
      <section className="relative py-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6">
          <span className="text-sky-400 font-mono text-sm font-medium">// legal</span>
          <h1 className="text-5xl lg:text-6xl font-black text-white mt-4 mb-6">Privacy Policy</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            This Privacy Policy explains how LowskiTech collects, uses, and protects information when you use this website or contact us about a project.
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
