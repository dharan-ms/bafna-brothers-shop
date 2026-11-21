import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, products } from "../data";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const active = params.get("category") || "All";
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const catOk = active === "All" || p.category === active;
      const text = `${p.name} ${p.summary} ${p.line} ${p.category}`.toLowerCase();
      return catOk && (!q || text.includes(q));
    });
  }, [active, query]);

  return (
    <main className="wrap" style={{ paddingBottom: 48 }}>
      <div className="page-hero">
        <p className="kicker">The counter</p>
        <h1>Shop everything the house packs</h1>
        <p>
          Kashmiri saffron, vegetarian silver, 24K gold leaf, and the Luxuria Signature range —
          syrups, soaps, honey, attar, and hampers. Luxury on this shelf starts at INR 250. Pack sizes are made to order.
        </p>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <div className="filters" style={{ margin: 0, flex: 1 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === active ? "on" : ""}
              onClick={() => {
                const next = new URLSearchParams(params);
                if (cat === "All") next.delete("category");
                else next.set("category", cat);
                setParams(next);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          className="field search"
          placeholder="Search saffron, soap, honey..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search products"
        />
      </div>
      <div className="shop-grid" style={{ marginTop: 22 }}>
        {list.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      {list.length === 0 && <p>Nothing matches that search. Try saffron, gold, or soap.</p>}
    </main>
  );
}
