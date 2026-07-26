import { Link } from "react-router-dom";
import lowskiLogo from "../assets/lowskitech-logo-v2.svg";
import SocialIcon from "./SocialIcon";

const footerLinks = {
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Pricing", to: "/pricing" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "Blog", to: "/blog" },
  ],
  Services: [
    { label: "Web Development", to: "/services/web-development" },
    { label: "Web Design", to: "/services/web-design" },
    { label: "SEO & Marketing", to: "/services/seo-marketing" },
    { label: "All Services", to: "/services" },
  ],
  Support: [
    { label: "FAQ", to: "/faq" },
    { label: "Contact Us", to: "/contact" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms of Service", to: "/terms-of-service" },
  ],
};

const socialLinks = [
  { label: "X", href: "https://x.com/Rolandwale80s", icon: "x" },
  { label: "Instagram", href: "https://www.instagram.com/lowskitech01", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/Papilowski", icon: "facebook" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={lowskiLogo}
                alt="Lowski Tech"
                width="144"
                height="112"
                loading="lazy"
                decoding="async"
                className="h-28 w-36 object-contain object-center"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              We build digital experiences that drive growth — from high-performance websites to full-scale digital marketing strategies.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors text-xs font-mono"
                  aria-label={s.label}
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} LowskiTech. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
