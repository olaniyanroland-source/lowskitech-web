import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.lowskitech.com";
const SITE_NAME = "LowskiTech";
const DEFAULT_DESCRIPTION =
  "LowskiTech is a web development studio building fast, responsive websites, web apps, portfolios, SEO-ready pages, and digital experiences for growing businesses.";
const DEFAULT_IMAGE = `${SITE_URL}/lowskitech-logo-v2.svg`;

const routeMeta: Record<string, { title: string; description: string; keywords: string }> = {
  "/": {
    title: "LowskiTech | Web Development Studio for Fast, Modern Websites",
    description:
      "LowskiTech designs and develops fast, responsive, SEO-ready websites and web applications for startups, small businesses, creatives, and growing brands.",
    keywords:
      "LowskiTech, web development studio, web design, website developer, React developer, SEO websites, business websites",
  },
  "/about": {
    title: "About LowskiTech | Founder-Led Web Development Studio",
    description:
      "Learn about LowskiTech, a founder-led web development studio focused on clean design, reliable code, and websites that help businesses grow online.",
    keywords: "about LowskiTech, founder led web studio, Roland Olaniyan, web developer",
  },
  "/services": {
    title: "Web Design, Development and SEO Services | LowskiTech",
    description:
      "Explore LowskiTech services including web development, web design, SEO, e-commerce websites, portfolio websites, and mobile-friendly digital experiences.",
    keywords: "web development services, web design services, SEO services, e-commerce website, portfolio website",
  },
  "/services/web-development": {
    title: "Web Development Services | React, Next.js, Laravel | LowskiTech",
    description:
      "Custom web development services for fast, maintainable websites and web applications using modern frontend and backend technologies.",
    keywords: "web development, React developer, Next.js developer, Laravel developer, custom web application",
  },
  "/services/web-design": {
    title: "Web Design Services | Responsive UI and UX Design | LowskiTech",
    description:
      "Responsive web design services for businesses that need polished, user-friendly, conversion-focused websites.",
    keywords: "web design, responsive website design, UI UX design, business website design",
  },
  "/services/seo-marketing": {
    title: "SEO and Digital Marketing Services | LowskiTech",
    description:
      "SEO services for technical site health, page optimization, local visibility, content strategy, and better search performance.",
    keywords: "SEO services, technical SEO, local SEO, digital marketing, website optimization",
  },
  "/portfolio": {
    title: "LowskiTech Portfolio | Web Development Projects",
    description:
      "View selected LowskiTech web development and web design projects, including business websites, portfolio websites, and custom digital experiences.",
    keywords: "web development portfolio, website projects, LowskiTech work, portfolio websites",
  },
  "/pricing": {
    title: "Website Pricing and Packages | LowskiTech",
    description:
      "Review LowskiTech website pricing packages for starter websites, business websites, growth projects, and custom web development.",
    keywords: "website pricing, web design packages, web development pricing, website cost",
  },
  "/testimonials": {
    title: "Client Reviews and Testimonials | LowskiTech",
    description:
      "Read client reviews from businesses that worked with LowskiTech on web development, portfolio websites, and digital projects.",
    keywords: "LowskiTech reviews, web developer testimonials, client reviews",
  },
  "/blog": {
    title: "Web Design, Development and SEO Blog | LowskiTech",
    description:
      "Read practical guides from LowskiTech on web design, web development, SEO, digital strategy, and building better websites.",
    keywords: "web development blog, web design blog, SEO blog, website tips",
  },
  "/faq": {
    title: "Frequently Asked Questions | LowskiTech",
    description:
      "Answers to common questions about LowskiTech website timelines, pricing, maintenance, technologies, revisions, and project process.",
    keywords: "web design FAQ, website development questions, LowskiTech FAQ",
  },
  "/contact": {
    title: "Contact LowskiTech | Start Your Website Project",
    description:
      "Contact LowskiTech to discuss a website, web app, SEO project, e-commerce site, or digital design idea.",
    keywords: "contact web developer, hire web developer, website project enquiry, LowskiTech contact",
  },
  "/privacy-policy": {
    title: "Privacy Policy | LowskiTech",
    description:
      "Read the LowskiTech Privacy Policy to understand how website enquiries, contact form details, and third-party widgets are handled.",
    keywords: "LowskiTech privacy policy, website privacy policy",
  },
  "/terms-of-service": {
    title: "Terms of Service | LowskiTech",
    description:
      "Read the LowskiTech Terms of Service for website use, enquiries, project terms, third-party services, and intellectual property.",
    keywords: "LowskiTech terms of service, website terms, service terms",
  },
};

function setMeta(name: string, content: string, attribute: "name" | "property" = "name") {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.content = content;
}

function setLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement("link");
    tag.rel = rel;
    document.head.appendChild(tag);
  }

  tag.href = href;
}

function setJsonLd(data: object) {
  const id = "lowskitech-jsonld";
  let script = document.getElementById(id) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.text = JSON.stringify(data);
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace(/\/$/, "") || "/";
    const meta = routeMeta[path] ?? routeMeta["/"];
    const canonical = `${SITE_URL}${path === "/" ? "" : path}`;

    document.title = meta.title;
    document.documentElement.lang = "en";

    setMeta("description", meta.description);
    setMeta("keywords", meta.keywords);
    setMeta("author", "LowskiTech");
    setMeta("application-name", SITE_NAME);
    setMeta("apple-mobile-web-app-title", SITE_NAME);
    setMeta("format-detection", "telephone=no");
    setMeta("robots", "index, follow, max-image-preview:large");
    setMeta("theme-color", "#020617");

    setMeta("og:type", "website", "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.description, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:image", DEFAULT_IMAGE, "property");
    setMeta("og:image:alt", "LowskiTech web development studio logo", "property");
    setMeta("og:locale", "en_US", "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:site", "@Rolandwale80s");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setMeta("twitter:image", DEFAULT_IMAGE);

    setLink("canonical", canonical);

    setJsonLd({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: SITE_URL,
          logo: DEFAULT_IMAGE,
          description: DEFAULT_DESCRIPTION,
          email: "roland@lowskitech.com",
          telephone: "+2349138823341",
          sameAs: [
            "https://x.com/Rolandwale80s",
            "https://www.linkedin.com/company/lowskitech",
            "https://www.instagram.com/lowskitech01",
            "https://www.facebook.com/Papilowski",
          ],
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: SITE_NAME,
          url: SITE_URL,
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
        {
          "@type": "WebPage",
          "@id": `${canonical}#webpage`,
          url: canonical,
          name: meta.title,
          description: meta.description,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          inLanguage: "en",
        },
        {
          "@type": "ProfessionalService",
          "@id": `${SITE_URL}/#service`,
          name: `${SITE_NAME} Web Development Services`,
          url: `${SITE_URL}/services`,
          provider: { "@id": `${SITE_URL}/#organization` },
          serviceType: [
            "Web development",
            "Web design",
            "Technical SEO",
            "E-commerce website development",
          ],
          areaServed: "Worldwide",
        },
      ],
    });
  }, [location.pathname]);

  return null;
}
