import { footerColumns } from "../data";

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", color: "var(--white)", padding: "80px 48px 40px" }}>
      <div style={{ maxWidth: 1920, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 48, marginBottom: 48 }}>
        {footerColumns.map(col => (
          <div key={col.title}>
            <h4 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, marginBottom: 24, letterSpacing: 1 }}>
              {col.title}
            </h4>
            <ul style={{ listStyle: "none" }}>
              {col.links.map(l => (
                <li key={l} style={{ marginBottom: 12 }}>
                  <a href="#" style={{ color: "var(--gray-300)", textDecoration: "none", fontSize: 14 }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, textAlign: "center", color: "var(--gray-600)", fontSize: 14 }}>
        © 2026 WOOJI, Inc. 版權所有 | 隱私權政策 | 使用條款
      </div>
    </footer>
  );
}
