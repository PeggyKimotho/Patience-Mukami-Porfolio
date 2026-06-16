import { useInView } from "../hooks/useInView";
import { Mail, Phone, Send, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { ref, inView } = useInView();
  const [, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1.5px solid rgba(74,124,89,0.2)",
    background: "rgba(255,255,255,0.03)",
    color: "white",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="py-16" style={{ background: "var(--forest)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}>
          <div className="flex justify-center mb-3">
  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--gold-lt)" }}>Get in Touch</span>
</div>
<h2 className="font-display text-center" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "white", lineHeight: 1.15 }}>
  Let's Start a <em style={{ color: "var(--gold-lt)" }}>Conversation</em>
</h2>
<p className="text-sm mt-4 max-w-md text-center mx-auto" style={{ color: "var(--muted)" }}>
  Whether you're a parent, a school, or an organisation, I'd love to hear from you. Reach out and let's talk about how I can help.
</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Info */}
          <div className="space-y-4 transition-all duration-700 delay-100"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-20px)" }}>
            {[
              { icon: Mail,    label: "Email",    value: "patience.mukami@gmail.com",        href: "mailto:patience.mukami@gmail.com" },
              { icon: Phone,   label: "Phone",    value: "+254 704848900 ",                  href: "tel:+254 704848900" },
              { icon: ExternalLink, label: "LinkedIn", value: "Connect with me on LinkedIn",     href: "https://www.linkedin.com/in/patience-mukami-94917b239/" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,124,89,0.12)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(196,151,58,0.12)" }}>
                  <Icon size={16} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "var(--muted)" }}>{label}</div>
                  {href
  ? <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline" style={{ color: "white" }}>{value}</a>
  : <span className="text-sm font-medium" style={{ color: "white" }}>{value}</span>
}
                </div>
              </div>
            ))}

            {/* Availability note */}
            <div className="p-5 rounded-2xl" style={{ background: "rgba(196,151,58,0.08)", border: "1px solid rgba(196,151,58,0.2)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs font-semibold" style={{ color: "var(--gold)" }}>Currently Available</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                I'm open to new tutoring clients, curriculum consulting engagements, and homeschool partnerships. Response time is typically within 24 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="transition-all duration-700 delay-200"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(20px)" }}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(196,151,58,0.15)" }}>
                  <Send size={24} style={{ color: "var(--gold)" }} />
                </div>
                <h3 className="font-display text-2xl text-white mb-2">Message Sent!</h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 p-7 rounded-3xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,124,89,0.12)" }}>
                <h3 className="font-display text-xl text-white mb-2">Send a Message</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Name", "Email"].map(field => (
                    <div key={field}>
                      <label className="text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "var(--muted)" }}>{field}</label>
                      <input type={field === "Email" ? "email" : "text"} placeholder={field} required
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(74,124,89,0.2)")}
                        onChange={e => setForm(f => ({ ...f, [field.toLowerCase()]: e.target.value }))} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "var(--muted)" }}>Subject</label>
                  <input type="text" placeholder="What can I help with?" required style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(74,124,89,0.2)")}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: "var(--muted)" }}>Message</label>
                  <textarea rows={4} placeholder="Tell me more about what you're looking for..." required
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(74,124,89,0.2)")}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                </div>
                <button type="submit"
                  className="w-full py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: "var(--gold)", color: "var(--forest)" }}>
                  Send Message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
