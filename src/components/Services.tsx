import { useInView } from "../hooks/useInView";
import { BookOpen, Globe, Home, LayoutTemplate } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Online Tutoring",
    tag: "Ages 5–16",
    desc: "Personalised one-on-one sessions tailored to your child's curriculum, pace, and learning style. From foundational literacy to exam preparation.",
    points: ["CBC & IGCSE aligned", "Flexible scheduling", "Progress reports"],
    accent: "var(--gold)",
  },
  {
    icon: Globe,
    title: "ESL Instruction",
    tag: "All Levels",
    desc: "English as a Second Language for children and adults. Conversational fluency, academic writing, pronunciation, and comprehension, all structured around real-world use.",
    points: ["Beginner to advanced", "Academic & conversational", "US/UK English focus"],
    accent: "var(--sage)",
  },
  {
    icon: Home,
    title: "Homeschool Support",
    tag: "Customised",
    desc: "Full homeschool curriculum planning and daily session delivery. I partner with parents to build a structured, enriching education at home.",
    points: ["Curriculum planning", "Daily lesson delivery", "Parent collaboration"],
    accent: "var(--gold-lt)",
  },
  {
    icon: LayoutTemplate,
    title: "Curriculum Consulting",
    tag: "Schools & Orgs",
    desc: "For schools, learning centres, and educational organisations looking to improve or design preparatory curricula. I bring hands-on leadership experience to every engagement.",
    points: ["Needs assessment", "Curriculum design", "Staff development"],
    accent: "var(--muted)",
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-16" style={{ background: "var(--forest)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}>
          <div className="flex justify-center mb-3">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--gold-lt)" }}>What I Offer</span>
          </div>
           <h2 className="font-display text-center" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "white", lineHeight: 1.15 }}>
            Services Built Around <em style={{ color: "var(--gold-lt)" }}>Your Child's Growth</em>
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map(({ icon: Icon, title, tag, desc, points, accent }, i) => (
            <div key={title}
  className="group p-7 rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] cursor-default"
  style={{
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(37,99,235,0.12)",
    opacity: inView ? 1 : 0,
    transitionDelay: `${i * 0.1}s`,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    boxShadow: "0 0 0 0 rgba(37,99,235,0)",
    transition: "all 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
  }}
  onMouseEnter={e => {
    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(37,99,235,0.2)";
    (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,99,235,0.5)";
  }}
  onMouseLeave={e => {
    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 rgba(37,99,235,0)";
    (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,99,235,0.12)";
  }}>
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: `${accent}18` }}>
                  <Icon size={20} style={{ color: accent }} />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.06)", color: "var(--muted)" }}>
                  {tag}
                </span>
              </div>

              <h3 className="font-display text-xl mb-3" style={{ color: "white" }}>{title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>{desc}</p>

              {/* Points */}
              <ul className="space-y-2 mb-6">
                {points.map(p => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: accent }} />
                    <span className="text-xs" style={{ color: "var(--muted)" }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
  <a href="#contact"
    className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25"
    style={{ background: "var(--gold)", color: "white" }}>
    Let's Talk →
  </a>
</div>
      </div>
    </section>
  );
}
