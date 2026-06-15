import { useInView } from "../hooks/useInView";
import { Heart, Globe, Lightbulb, BookOpen } from "lucide-react";

const pillars = [
  { icon: Heart,     title: "Child-First Always",        desc: "Every lesson, resource, and decision starts with one question: what does this child need to thrive?" },
  { icon: Globe,     title: "Globally Minded",           desc: "I've taught across international, private, and community schools. I meet every learner where they are, culturally and academically." },
  { icon: Lightbulb, title: "Inquiry-Led Learning",      desc: "I believe curiosity is the engine of education. My sessions are structured to spark questions, not just deliver answers." },
  { icon: BookOpen,  title: "Results You Can See",       desc: "From phonics to advanced ESL, my students leave each session with measurable progress and growing confidence." },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-16" style={{ background: "var(--moss)" }}>
      <div className="max-w-6xl mx-auto px-6">

                <div className="flex justify-center mb-3"
  style={{ opacity: inView ? 1 : 0, transition: "opacity 0.7s 0.1s" }}>
  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--gold-lt)" }}>About Me</span>
</div>

<h2 className="font-display text-center mb-6 transition-all duration-700"
  style={{
    fontSize: "clamp(2rem,3vw,2.8rem)",
    color: "white",
    lineHeight: 1.15,
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(16px)",
    transitionDelay: "0.15s",
  }}>
  A Teacher Who Leads. A Leader Who <em style={{ color: "var(--gold-lt)" }}>Still Teaches.</em>
</h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Photo side */}
          <div ref={ref} className="relative transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-24px)" }}>
            <div className="relative rounded-3xl overflow-hidden"
              style={{ height: "500px", border: "1px solid rgba(74,124,89,0.2)" }}>
              <img src="/images/headshot.jpg" alt="Patience Mukami"
                className="w-full h-full object-cover object-top" />
              {/* Overlay */}
              <div className="absolute inset-0" style={{
                background: "linear-gradient(to top, rgba(13,31,18,0.7) 0%, transparent 50%)",
              }} />
              {/* Quote on photo */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-lg italic text-white leading-snug">
                  "Education is not the filling of a pail, but the lighting of a fire."
                </p>
                <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.5)" }}>— W.B. Yeats · A guiding principle</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-3xl -z-10"
              style={{ background: "rgba(196,151,58,0.1)", border: "1px solid rgba(196,151,58,0.2)" }} />
          </div>

          {/* Text side */}
          <div>

            <div className="space-y-4 mb-10 transition-all duration-700"
              style={{ opacity: inView ? 1 : 0, transitionDelay: "0.25s" }}>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                I've spent six years at the intersection of classroom teaching and academic leadership,
                not choosing one over the other, but understanding that the best educators never stop
                learning alongside their students.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Currently serving as Head of Preparatory School at Caplora International STEM School
                in Nairobi, I oversee curriculum development, mentor teaching staff, and ensure every
                child in my care enters primary school ready academically, socially, and emotionally.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Beyond my institutional role, I work with families and organisations globally,
                delivering personalised tutoring, ESL instruction, and homeschool support that
                meets students exactly where they are.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-3">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <div key={title}
                  className="p-4 rounded-2xl transition-all duration-500 hover:-translate-y-1 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(74,124,89,0.15)",
                    opacity: inView ? 1 : 0,
                    transitionDelay: `${0.3 + i * 0.08}s`,
                  }}>
                  <Icon size={16} className="mb-2" style={{ color: "var(--gold)" }} />
                  <h3 className="text-xs font-semibold mb-1" style={{ color: "white" }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
