import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const stats = [
  { value: "6+",   label: "Years Teaching",    sub: "In classrooms & leadership" },
  { value: "300+", label: "Students Taught",   sub: "Across online & in-person sessions" },
  { value: "3",    label: "Specialisations",    sub: "ESL, early childhood & curriculum" },
];

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    setTimeout(() => { el.style.width = "80px"; }, 800);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--forest)" }}>

      {/* Background texture */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(ellipse at 70% 50%, rgba(74,124,89,0.12) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(196,151,58,0.06) 0%, transparent 50%)`,
      }} />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div>
           
            <h2 className="font-display mb-2" style={{
  fontSize: "clamp(2rem,3.8vw,3.2rem)",
  color: "white",
  lineHeight: 1.15,
  opacity: 0,
  animation: "fadeUp 0.7s 0.3s ease forwards",
}}>
  I help families & schools
  <br />
  <em style={{ color: "var(--gold-lt)" }}>unlock every child's</em>
  <br />
  full potential.
</h2>

            {/* Value proposition */}
            <p className="text-base leading-relaxed mb-6 max-w-md" style={{
              color: "var(--muted)",
              opacity: 0,
              animation: "fadeUp 0.7s 0.5s ease forwards",
            }}>
              Through online tutoring, ESL instruction, homeschool support, and curriculum
              consulting. I bring 6+ years of classroom and leadership experience directly
              to your child or institution, wherever you are in the world.
            </p>

            {/* Stats strip */}
<div className="grid grid-cols-3 gap-3 mb-4" style={{ opacity: 0, animation: "fadeUp 0.7s 0.8s ease forwards" }}>
              {stats.map(({ value, label, sub }) => (
               <div key={label} className="text-center py-4 px-2 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(37,99,235,0.15)" }}>
                <div className="font-display text-2xl font-semibold mb-0.5" style={{ color: "var(--gold-lt)" }}>{value}</div>
               <div className="text-xs font-medium leading-tight mb-1" style={{ color: "var(--ink)" }}>{label}</div>
              <div className="text-xs leading-tight" style={{ color: "var(--muted)" }}>{sub}</div>
              </div>
                      ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-14" style={{ opacity: 0, animation: "fadeUp 0.7s 0.6s ease forwards" }}>
              <a href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "var(--gold)", color: "var(--forest)", boxShadow: "0 0 0 0 rgba(196,151,58,0)" }}>
                Explore Services
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-1 border"
                style={{ borderColor: "rgba(74,124,89,0.4)", color: "white" }}>
                Get in Touch
              </a>
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div className="flex justify-center md:justify-end" style={{ opacity: 0, animation: "fadeIn 0.9s 0.4s ease forwards" }}>
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-3xl opacity-20" style={{
                background: "linear-gradient(135deg, var(--gold) 0%, transparent 60%)",
              }} />

              {/* Photo */}
              <div className="relative rounded-3xl overflow-hidden"
                style={{ width: "320px", height: "420px", border: "1px solid rgba(74,124,89,0.2)" }}>
                <img src="/images/headshot.jpg" alt="Patience Mukami Njogu"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105" />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(to top, rgba(13,31,18,0.5) 0%, transparent 50%)",
                }} />
              </div>

              {/* Badge — rating */}
              <div className="absolute -right-6 bottom-16 flex items-center gap-2 px-4 py-2.5 rounded-2xl animate-float"
                style={{ background: "var(--gold)", animationDelay: "1s", boxShadow: "0 8px 32px rgba(196,151,58,0.3)" }}>
                <Star size={14} fill="currentColor" style={{ color: "var(--forest)" }} />
                <div>
                  <div className="text-xs font-semibold" style={{ color: "var(--forest)" }}>Top Rated</div>
                  <div className="text-xs" style={{ color: "rgba(13,31,18,0.65)" }}>Educator</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
