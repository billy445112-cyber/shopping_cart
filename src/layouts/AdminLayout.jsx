// 後台共用 Layout（管理員用）
export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <aside>/* 側邊選單 */</aside>
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}