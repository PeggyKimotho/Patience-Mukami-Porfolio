const links = ["Home", "About", "Services", "My Work", "Experience", "Contact"];
const hrefs = ["#home", "#about", "#services", "#work", "#experience", "#contact"];

export default function Footer() {
  return (
    <footer className="py-8" style={{ background: "var(--moss)", borderTop: "1px solid rgba(74,124,89,0.15)" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Patience Mukami Njogu · All rights reserved
        </p>
        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((l, i) => (
            <a key={l} href={hrefs[i]}
              className="text-xs transition-colors hover:opacity-100"
              style={{ color: "var(--muted)" }}>
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
