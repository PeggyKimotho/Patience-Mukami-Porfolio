import { useState, useRef } from "react";
import { useInView } from "../hooks/useInView";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const items = [
  { src: "/images/work-2.jpg",  title: "Phonics Flower",          tag: "Literacy",   desc: "Word family activity reinforcing vowel sounds and early reading patterns." },
  { src: "/images/work-3.jpg",  title: "Mushroom Word Sort",      tag: "Literacy",   desc: "CVC word recognition game.Students sort rhyming words under the mushroom cap." },
  { src: "/images/work-5.jpg",  title: "Bunny Carrot Phonics",    tag: "Literacy",   desc: "Short vowel 'i' families. A hands-on craft that makes phonics memorable." },
  { src: "/images/work-7.jpg",  title: "Monster Vowel Feeder",    tag: "Literacy",   desc: "Interactive letter 'e' activity. Children 'feed' the monster words with the right vowel." },
  { src: "/images/work-8.jpg",  title: "Red Mushroom Game",       tag: "Literacy",   desc: "'U' sound word families. Bright, tactile, and impossible to forget." },
  { src: "/images/work-9.jpg",  title: "Parrot Word Wheel",       tag: "Literacy",   desc: "'At' family phonics craft. Colourful feathers reveal new words as the wheel turns." },
  { src: "/images/work-4.jpg",  title: "Heart Anatomy Diagram",   tag: "Science",    desc: "Hand-drawn and labelled heart diagram for primary Science. Made by hand, every detail." },
  { src: "/images/work-10.jpg", title: "Elephant Toothpaste",     tag: "Science",    desc: "Science experiment setup showing hydrogen peroxide, yeast, and dish soap. Visual chemistry for young learners." },
  { src: "/images/work-1.jpg",  title: "Classroom Cut-Outs",      tag: "Art & Craft", desc: "Vibrant fruit and animal illustrations for display and storytelling activities." },
];

const tags = ["All", "Literacy", "Science", "Art & Craft"];

export default function Work() {
  const { ref, inView } = useInView();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTag, setActiveTag] = useState("All");
  const [lightbox, setLightbox]   = useState<typeof items[0] | null>(null);
  const [lbIndex,  setLbIndex]    = useState(0);

  const filtered = activeTag === "All" ? items : items.filter(i => i.tag === activeTag);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -360 : 360, behavior: "smooth" });
  };

  const openLightbox = (item: typeof items[0], idx: number) => {
    setLightbox(item); setLbIndex(idx);
  };
  const lbPrev = () => {
    const i = (lbIndex - 1 + filtered.length) % filtered.length;
    setLightbox(filtered[i]); setLbIndex(i);
  };
  const lbNext = () => {
    const i = (lbIndex + 1) % filtered.length;
    setLightbox(filtered[i]); setLbIndex(i);
  };

  return (
    <section id="work" className="py-16" style={{ background: "var(--moss)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className="mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}>
          <div className="flex justify-center mb-3">
           <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--gold-lt)" }}>My Work</span>
           </div>
           <h2 className="font-display text-center mb-4" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "white", lineHeight: 1.15 }}>
            Teaching is More Than <em style={{ color: "var(--gold-lt)" }}>Words on a Board</em>
             </h2>
             <p className="text-sm text-center max-w-lg mx-auto" style={{ color: "var(--muted)" }}>
                Every resource here was designed and crafted by hand, proof that great teaching starts long before the lesson begins.
              </p>
        </div>

        {/* Filter + arrows row */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <button key={tag} onClick={() => setActiveTag(tag)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={{
                  background: activeTag === tag ? "var(--gold)" : "rgba(255,255,255,0.05)",
                  color:      activeTag === tag ? "var(--forest)" : "var(--muted)",
                  border:     `1px solid ${activeTag === tag ? "var(--gold)" : "rgba(74,124,89,0.15)"}`,
                }}>
                {tag}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {[{ dir: "left" as const, Icon: ChevronLeft }, { dir: "right" as const, Icon: ChevronRight }].map(({ dir, Icon }) => (
              <button key={dir} onClick={() => scroll(dir)}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(74,124,89,0.15)", color: "var(--muted)" }}>
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {filtered.map((item, i) => (
            <div key={item.src}
              className="group relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ width: "300px", height: "320px" }}
              onClick={() => openLightbox(item, i)}>
              <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(13,31,18,0.92) 0%, rgba(13,31,18,0.3) 60%, transparent 100%)" }}>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full self-start mb-2"
                  style={{ background: "var(--gold)", color: "var(--forest)" }}>
                  {item.tag}
                </span>
                <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.65)" }}>{item.desc}</p>
                <ZoomIn size={14} className="absolute top-4 right-4 text-white opacity-60" />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {filtered.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{ background: i === 0 ? "var(--gold)" : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
            onClick={() => setLightbox(null)}>
            <X size={18} />
          </button>
          <button className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
            onClick={(e) => { e.stopPropagation(); lbPrev(); }}>
            <ChevronLeft size={18} />
          </button>
          <button className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
            onClick={(e) => { e.stopPropagation(); lbNext(); }}>
            <ChevronRight size={18} />
          </button>
          <div className="max-w-2xl w-full mx-10" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="w-full rounded-2xl object-contain max-h-[70vh]" />
            <div className="mt-4 text-center">
              <span className="text-xs font-semibold px-3 py-1 rounded-full mr-2"
                style={{ background: "var(--gold)", color: "var(--forest)" }}>
                {lightbox.tag}
              </span>
              <h3 className="text-lg font-display text-white mt-2">{lightbox.title}</h3>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
