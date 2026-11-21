import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="pcard">
      <Link to={`/shop/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="line">{product.line}</div>
      <h3>{product.name}</h3>
      <Link className="pill dark" to={`/shop/${product.slug}`}>Shop now</Link>
    </article>
  );
}
