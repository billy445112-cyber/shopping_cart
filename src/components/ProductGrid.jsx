import { products, productImgs } from "../data";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section style={{ padding: "10px 48px", maxWidth: 1920, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 48, marginBottom: 40, letterSpacing: 2 }}>
        熱銷商品
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 32 }}>
        {products.map((p, i) => (
          <ProductCard key={i} product={p} img={productImgs[i]} index={i} />
        ))}
      </div>
    </section>
  );
}
