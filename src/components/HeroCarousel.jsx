import { useState, useEffect } from "react";
import { slides } from "../data";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
      {slides.map((s, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          background: s.bg,
          opacity: i === current ? 1 : 0,
          transition: "opacity 1s ease-in-out",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            textAlign: "center", color: "var(--white)",
            maxWidth: 800, padding: 40,
            animation: i === current ? "slideUp 0.8s ease-out" : "none",
          }}>
            <h1 style={{
              fontFamily: "'Bebas Neue',sans-serif", fontSize: 96,
              lineHeight: 1, marginBottom: 24, letterSpacing: 4,
              textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
            }}>
              {s.title}
            </h1>
            <p style={{ fontSize: 20, marginBottom: 32, fontWeight: 500, textShadow: "1px 1px 4px rgba(0,0,0,0.3)" }}>
              {s.desc}
            </p>
            <a href="#" style={{
              display: "inline-block", padding: "16px 48px",
              background: "var(--white)", color: "var(--black)",
              textDecoration: "none", borderRadius: 32, fontWeight: 700,
              fontSize: 16, border: "2px solid var(--white)", transition: "all 0.3s",
            }}>
              {s.cta}
            </a>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 12 }}>
        {slides.map((_, i) => (
          <span key={i} onClick={() => setCurrent(i)} style={{
            display: "block",
            width: i === current ? 36 : 12, height: 12,
            borderRadius: i === current ? 6 : "50%",
            background: i === current ? "var(--white)" : "rgba(255,255,255,0.5)",
            cursor: "pointer", transition: "all 0.3s",
          }} />
        ))}
      </div>
    </section>
  );
}
