// 前台共用 Layout（一般使用者看到的頁面）
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function FrontLayout({ children }) {
  return (
    <>
      <Banner />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}