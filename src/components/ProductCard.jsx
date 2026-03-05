import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"

export default function ProductCard({ product, img, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (  
    <div ref={ref}
      onClick={() => navigate(`/product/${index}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer", transition: "all 0.6s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
      }}
    >
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 8, marginBottom: 16, aspectRatio: "1", background: "var(--gray-100)" }}>
        <img src={img} alt={product.name} style={{
          width: "100%", height: "80%", objectFit: "cover",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
        }} />
        <span style={{
          position: "absolute", top: 16, left: 16,
          background: "var(--red)", color: "var(--white)",
          padding: "6px 12px", borderRadius: 4, fontSize: 12, fontWeight: 700,
        }}>
          {product.badge}
        </span>
      </div>
      <div style={{ padding: "0 8px" }}>
        <div style={{ color: "var(--orange)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
          {product.category}
        </div>
        <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{product.name}</h3>
        <p style={{ color: "var(--gray-600)", fontSize: 14, marginBottom: 12 }}>{product.desc}</p>
        <div style={{ fontWeight: 800, fontSize: 20 }}>{product.price}</div>
      </div>
    </div>
    
  );
}
