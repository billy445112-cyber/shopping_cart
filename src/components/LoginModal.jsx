import { useState } from "react";

export default function LoginModal({ onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputStyle = {
    width: "100%", padding: "12px 16px",
    border: "1px solid var(--gray-200)", borderRadius: 8,
    fontSize: 14, outline: "none", marginTop: 8,
  };
  const btnStyle = {
    width: "100%", padding: 14, background: "var(--black)",
    color: "var(--white)", border: "none", borderRadius: 8,
    fontWeight: 700, fontSize: 16, cursor: "pointer", marginTop: 24,
  };

  const handleSubmit = () => {
    if (email && password) {
      onLogin(email.split("@")[0]);
      onClose();
    }
  };

  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2000 }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div style={{ background: "var(--white)", borderRadius: 16, padding: "48px 40px", width: "100%", maxWidth: 420, position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", fontSize: 24, cursor: "pointer" }}>×</button>

        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 36, marginBottom: 8 }}>會員登入</h2>
        <p style={{ color: "var(--gray-600)", fontSize: 14, marginBottom: 32 }}>登入以享受專屬會員優惠</p>

        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 13, fontWeight: 600 }}>電子郵件</label>
          <input style={inputStyle} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" />
        </div>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600 }}>密碼</label>
          <input style={inputStyle} type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
        </div>

        <button style={btnStyle} onClick={handleSubmit}>登入</button>

        <p style={{ textAlign: "center", marginTop: 20, fontSize: 14, color: "var(--gray-600)" }}>
          還沒有帳號？<a href="#" style={{ color: "var(--black)", fontWeight: 700 }}>立即註冊</a>
        </p>
      </div>
    </div>
  );
}
