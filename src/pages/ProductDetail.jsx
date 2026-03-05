import { useParams } from "react-router-dom"
import { products, productImgs } from "../data"

export default function ProductDetail() {
  // 從網址取得商品 id（例如 /product/2）
  const { id } = useParams()
  const product = products[id]
  const img     = productImgs[id]

  if (!product) return <p style={{ padding: 48 }}>找不到商品</p>

  return (
    <div style={{ padding: "80px 48px", maxWidth: 900, margin: "0 auto" }}>
      <img src={img} alt={product.name}
        style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 12 }} />
      <h1 style={{ fontSize: 36, marginTop: 32 }}>{product.name}</h1>
      <p style={{ color: "#757575", margin: "12px 0" }}>{product.desc}</p>
      <div style={{ fontSize: 28, fontWeight: 800 }}>{product.price}</div>
    </div>
  )
}