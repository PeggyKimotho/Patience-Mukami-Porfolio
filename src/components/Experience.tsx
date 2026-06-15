import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { MapPin, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    title: "Head of Preparatory School",
    org: "Caplora International STEM School",
    period: "2023 – Present",
    location: "Nairobi, Kenya",
    desc: "Leading the preparatory division of an internationally recognised STEM institution, overseeing curriculum design, mentoring teaching staff, managing parent relations, and driving academic excellence across all preparatory classes.",
    current: true,
  },
  {
    title: "Kindergarten Class Teacher",
    org: "Loresho Ridge School",
    period: "2022 – 2023",
    location: "Nairobi, Kenya",
    desc: "Delivered creative, CBC-aligned instruction for early years learners. Built strong literacy and numeracy foundations through hands-on, play-based teaching methods.",
    current: false,
  },
  {
    title: "Online ESL & Homeschool Teacher",
    org: "Freelance / Private Clients",
    period: "2020 – 2022",
    location: "Remote",
    desc: "Provided personalised ESL instruction and homeschool support to students across diverse age groups and backgrounds. Adapted curriculum to individual needs and delivered sessions via digital platforms.",
    current: false,
  },
  {
    title: "Class Teacher",
    org: "Aga Khan Primary School",
    period: "2019 – 2020",
    location: "Nairobi, Kenya",
    desc: "Taught across primary grades in a multicultural, high-standards environment. Collaborated with staff to align teaching approaches and support holistic student development.",
    current: false,
  },
];

const education = [
  { degree: "Bachelor of Arts in Education", institution: "KCA University", status: "In Progress" },
  { degree: "Diploma in Education (Early Childhood & Primary)", institution: "Kenya Institute of Professional Studies", status: "Completed" },
  { degree: "Certificate in Psychology", institution: "Kenya Institute of Professional Studies", status: "Completed" },
  { degree: "Certificate in Customer Care", institution: "Kenya Institute of Professional Studies", status: "Completed" },
  { degree: "Certificate in Online Teaching Methods", institution: "Professional Development Institute", status: "Completed" },
];

export default function Experience() {
  const { ref, inView } = useInView();
  const { ref: eduRef, inView: eduInView } = useInView();
  const eduScrollRef = useRef<HTMLDivElement>(null);
const eduScroll = (dir: "left" | "right") => {
  if (!eduScrollRef.current) return;
  eduScrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
};

  return (
    <section id="experience" className="py-16" style={{ background: "var(--forest)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Experience */}
        <div ref={ref} className="mb-20">
          <div className="mb-12 transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}>
            <div className="flex justify-center mb-3">
  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--gold-lt)" }}>Career Journey</span>
</div>
<h2 className="font-display text-center" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "white", lineHeight: 1.15 }}>
  A Track Record <em style={{ color: "var(--gold-lt)" }}>Worth Knowing</em>
</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "rgba(74,124,89,0.2)" }} />
            <div className="space-y-6">
              {items.map((item, i) => (
                <div key={i} className="md:pl-16 relative transition-all duration-700"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-20px)",
                    transitionDelay: `${i * 0.12}s`,
                  }}>
                  {/* Dot */}
                  <div className="absolute left-3 top-5 w-4 h-4 rounded-full border-2 hidden md:flex items-center justify-center"
                    style={{
                      background: item.current ? "var(--gold)" : "var(--forest)",
                      borderColor: item.current ? "var(--gold)" : "var(--sage)",
                    }} />

                  <div className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: item.current ? "1px solid rgba(196,151,58,0.3)" : "1px solid rgba(74,124,89,0.1)",
                    }}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        {item.current && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full mr-2"
                            style={{ background: "rgba(196,151,58,0.15)", color: "var(--gold)" }}>
                            Current
                          </span>
                        )}
                        <h3 className="font-semibold mt-1" style={{ color: "white" }}>{item.title}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <Briefcase size={12} style={{ color: "var(--sage)" }} />
                          <span className="text-sm" style={{ color: "var(--sage)" }}>{item.org}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs mb-1" style={{ color: "var(--muted)" }}>{item.period}</div>
                        <div className="flex items-center gap-1 justify-end">
                          <MapPin size={11} style={{ color: "var(--muted)" }} />
                          <span className="text-xs" style={{ color: "var(--muted)" }}>{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div ref={eduRef}>
          <div className="mb-10 transition-all duration-700"
            style={{ opacity: eduInView ? 1 : 0, transform: eduInView ? "translateY(0)" : "translateY(20px)" }}>
         <div className="flex items-center gap-4 mb-8">
  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--gold-lt)" }}>Education & Certifications</span>
</div>
          </div>

         <div className="relative">
  {/* Left arrow */}
  <button onClick={() => eduScroll("left")}
    className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
    style={{ background: "var(--gold)", color: "white" }}>
    <ChevronLeft size={16} />
  </button>

  {/* Scrollable cards */}
  <div ref={eduScrollRef} className="flex gap-4 overflow-x-auto px-1 pb-2"
    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
    {education.map((item, i) => (
      <div key={i} className="flex-shrink-0 p-5 rounded-2xl transition-all duration-500 hover:-translate-y-1"
        style={{
          width: "280px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(37,99,235,0.12)",
          opacity: eduInView ? 1 : 0,
          transitionDelay: `${i * 0.08}s`,
        }}>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            background: item.status === "In Progress" ? "rgba(37,99,235,0.15)" : "rgba(37,99,235,0.1)",
            color: item.status === "In Progress" ? "var(--gold-lt)" : "var(--muted)",
          }}>
          {item.status}
        </span>
        <h3 className="font-semibold text-sm mt-3 mb-1" style={{ color: "white" }}>{item.degree}</h3>
        <p className="text-xs" style={{ color: "var(--muted)" }}>{item.institution}</p>
      </div>
    ))}
  </div>

  {/* Right arrow */}
  <button onClick={() => eduScroll("right")}
    className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
    style={{ background: "var(--gold)", color: "white" }}>
    <ChevronRight size={16} />
  </button>
</div>
        </div>
      </div>
    </section>
  );
}
