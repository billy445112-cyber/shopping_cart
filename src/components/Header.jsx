import { useState } from "react";

const navLinks = ["限時優惠", "新品發售", "男款", "女款", "兒童"];

export default function Header({ onLoginClick, isLoggedIn, userName, onLogout }) {
  const [dropOpen, setDropOpen] = useState(false);

  const navStyle = {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "16px 48px", maxWidth: 1920, margin: "0 auto",
  };
  const logoStyle = {
    fontFamily: "'Bebas Neue',sans-serif", fontSize: 42, fontWeight: 700,
    letterSpacing: 2, color: "var(--black)", textDecoration: "none",
  };
  const iconBtnStyle = {
    width: 36, height: 36, borderRadius: "50%", background: "transparent",
    border: "none", cursor: "pointer", display: "flex",
    alignItems: "center", justifyContent: "center",
  };
  const avatarStyle = {
    width: 36, height: 36, borderRadius: "50%", background: "var(--black)",
    color: "var(--white)", display: "flex", alignItems: "center",
    justifyContent: "center", fontWeight: 700, cursor: "pointer", fontSize: 14,
  };
  const dropItemStyle = {
    display: "flex", alignItems: "center", gap: 10,
    padding: "12px 20px", cursor: "pointer", fontSize: 14, fontWeight: 500,
  };

  return (
    <header style={{ position: "sticky", top: 0, background: "var(--white)", zIndex: 1000, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <nav style={navStyle}>
        {/* Logo */}
        <a href="#" style={logoStyle}>WOOJI</a>

        {/* Nav Links */}
        <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map(n => (
            <li key={n}>
              <a href="#" style={{ textDecoration: "none", color: "var(--black)", fontWeight: 600, fontSize: 15 }}>{n}</a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Search */}
          <div style={{ background: "var(--gray-100)", padding: "8px 16px", borderRadius: 24, display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input type="text" placeholder="搜尋" style={{ border: "none", background: "transparent", outline: "none", width: 180, fontSize: 14 }} />
          </div>

          {/* Wishlist */}
          <button style={iconBtnStyle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>

          {/* Cart */}
          <button style={iconBtnStyle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </button>

          {/* Login / Avatar */}
          {!isLoggedIn ? (
            <button style={iconBtnStyle} onClick={onLoginClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
          ) : (
            <div style={{ position: "relative" }}>
              <div style={avatarStyle} onClick={() => setDropOpen(v => !v)}>
                {userName.charAt(0).toUpperCase()}
              </div>
              {dropOpen && (
                <div style={{
                  position: "absolute", top: "calc(100% + 8px)", right: 0,
                  background: "var(--white)", borderRadius: 8,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)", minWidth: 180, zIndex: 200, padding: "8px 0",
                }}>
                  {["我的帳戶", "訂單記錄", "我的收藏"].map(label => (
                    <div key={label} style={dropItemStyle}>{label}</div>
                  ))}
                  <div style={{ borderTop: "1px solid var(--gray-200)", margin: "8px 0" }} />
                  <div style={{ ...dropItemStyle, color: "var(--red)" }}
                    onClick={() => { onLogout(); setDropOpen(false); }}>
                    登出
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
