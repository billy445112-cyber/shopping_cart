import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import TopBanner   from "./components/TopBanner"
import Header      from "./components/Header"
import Footer      from "./components/Footer"
import LoginModal  from "./components/LoginModal"

import Home          from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"

import "./styles/global.css"

export default function App() {
  const [showLogin, setShowLogin]   = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName]     = useState("")

  const handleLogin  = (name) => { setIsLoggedIn(true);  setUserName(name) }
  const handleLogout = ()     => { setIsLoggedIn(false); setUserName("") }

  return (
    // BrowserRouter 包住整個應用程式，啟用路由功能
    <BrowserRouter>
      <TopBanner />
      <Header
        onLoginClick={() => setShowLogin(true)}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogout={handleLogout}
      />

      {/* 路由設定：根據網址顯示對應頁面 */}
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />

      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      )}
    </BrowserRouter>
  )
}