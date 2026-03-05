import { useState } from "react";
import { featuredCards, featuredImgs } from "../data";

export default function FeaturedSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ padding: "70px 48px", maxWidth: 1920, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 48, marginBottom: 40, letterSpacing: 2 }}>
        精選推薦
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 80 }}>
        {featuredCards.map((c, i) => (
          <div key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ position: "relative", overflow: "hidden", borderRadius: 8, cursor: "pointer", aspectRatio: "1" }}
          >
            <img src={featuredImgs[i]} alt={c.alt} style={{
              width: "100%", height: "100%", objectFit: "cover",
              transform: hovered === i ? "scale(1.08)" : "scale(1)",
              transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            }} />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, padding: 32,
              background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
              color: "var(--white)",
              transform: hovered === i ? "translateY(0)" : "translateY(20px)",
              opacity: hovered === i ? 1 : 0,
              transition: "all 0.4s",
            }}>
              <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>{c.title}</h3>
              <p style={{ fontSize: 14, fontWeight: 500 }}>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
