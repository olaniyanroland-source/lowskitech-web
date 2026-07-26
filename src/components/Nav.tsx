import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import lowskiLogo from "../assets/lowskitech-logo-v2.svg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Web Development", to: "/services/web-development" },
      { label: "Web Design", to: "/services/web-design" },
      { label: "SEO & Marketing", to: "/services/seo-marketing" },
    ],
  },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={lowskiLogo}
            alt="Lowski Tech"
            className="h-14 w-20 object-contain object-center"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                  {link.label}
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl shadow-black/50 overflow-hidden w-52">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2 text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-white rounded-lg transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-md border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.to}
                  className="block px-4 py-3 text-slate-300 hover:text-white font-medium transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-6 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-slate-800 mt-2">
              <Link
                to="/contact"
                className="block text-center px-5 py-3 text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-white rounded-lg transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
