import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    quote: "Patience has a rare gift, she makes every child feel seen. My daughter went from dreading English lessons to asking for more. The progress in just 8 weeks was remarkable.",
    name: "Sarah M.",
    role: "Parent · Houston, Texas",
    initials: "SM",
  },
  {
    quote: "We brought Patience in to consult on our preparatory curriculum and she transformed how our teachers approach early literacy. Practical, passionate, and deeply knowledgeable.",
    name: "Dr. James O.",
    role: "Head of School · Nairobi",
    initials: "JO",
  },
  {
    quote: "My son was struggling with reading at grade level. After three months of homeschool sessions with Patience, he's ahead of his class and genuinely loves learning. Life-changing.",
    name: "Linda K.",
    role: "Parent · London, UK",
    initials: "LK",
  },
];

export default function Impact() {
  const { ref: tRef, inView: tInView } = useInView();

  return (
    <section className="py-28" style={{ background: "var(--moss)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Testimonials */}
        <div ref={tRef}>
          <div className="mb-10 transition-all duration-700"
            style={{ opacity: tInView ? 1 : 0, transform: tInView ? "translateY(0)" : "translateY(20px)" }}>
            
           <div className="flex justify-center mb-3">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--gold-lt)" }}>Testimonials</span>
           </div>
            <h2 className="font-display text-center" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "white", lineHeight: 1.15 }}>
             What Families & <em style={{ color: "var(--gold-lt)" }}>Schools Say</em>
             </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i}
                className="p-6 rounded-2xl flex flex-col transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(74,124,89,0.12)",
                  opacity: tInView ? 1 : 0,
                  transitionDelay: `${i * 0.12}s`,
                }}>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} style={{ color: "var(--gold)", fontSize: "12px" }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "var(--muted)" }}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: "rgba(196,151,58,0.2)", color: "var(--gold)" }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "white" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
