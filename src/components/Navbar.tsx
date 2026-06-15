import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Services",   href: "#services" },
  { label: "My Work",    href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map(l => l.href.replace("#", ""));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(13,31,18,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",      }}>
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#home" className="font-display tracking-wide flex flex-col leading-tight" style={{ color: "var(--gold)" }}>
  <span className="text-xl font-bold">Patience Mukami Njogu</span>
  <span className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: "var(--muted)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
    Educator
  </span>
</a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-bold transition-all duration-200 relative group"
                style={{ color: active === l.href.replace("#","") ? "var(--gold)" : "var(--muted)" }}>
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                  style={{
                    width: active === l.href.replace("#","") ? "100%" : "0%",
                    background: "var(--gold)",
                  }} />
              </a>
            </li>
          ))}
          <li>
            <a href="#contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20"
              style={{ background: "var(--gold)", color: "var(--forest)" }}>
              Work With Me
            </a>
          </li>
        </ul>
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "var(--gold)" }}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden px-6 pb-8 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(13,31,18,0.98)" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-base py-3 border-b font-medium"
              style={{ color: "var(--ink)", borderColor: "rgba(74,124,89,0.15)" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="mt-2 text-center font-semibold px-5 py-3 rounded-full"
            style={{ background: "var(--gold)", color: "var(--forest)" }}>
            Work With Me
          </a>
        </div>
      )}
    </header>
  );
}
