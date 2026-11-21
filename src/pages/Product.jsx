import { Link, useParams } from "react-router-dom";
import { products } from "../data";
import { useCart } from "../cart";
import ProductCard from "../components/ProductCard";

export default function Product() {
  const { slug } = useParams();
  const cart = useCart();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="section wrap">
        <h1>This pack is not on the list.</h1>
        <Link className="pill dark" to="/shop">Back to the shop</Link>
      </main>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main className="wrap">
      <div className="product-layout" style={{ paddingTop: 24 }}>
        <div className="product-photo">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-copy">
          <div className="crumbs">
            <Link to="/shop">Shop</Link> · {product.category}
          </div>
          <p className="kicker">{product.line}</p>
          <h1>{product.name}</h1>
          <p className="summary">{product.summary}</p>
          <div className="tag-row">
            <span className="tag">{product.category}</span>
            <span className="tag">Packed to order</span>
            <span className="tag">Zaveri Bazaar</span>
          </div>
          <p>{product.description}</p>
          <div className="hero-actions">
            <button className="pill dark" onClick={() => cart.add(product)}>Add to enquire</button>
            <Link className="pill" to="/contact">Ask the shop</Link>
          </div>
        </div>
      </div>
      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <h2>Also from {product.category}</h2>
          <div className="shop-grid" style={{ marginTop: 16 }}>
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </main>
  );
}
