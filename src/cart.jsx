import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const KEY = "bafna-enquire";

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  const api = useMemo(() => {
    const count = items.reduce((n, item) => n + item.qty, 0);
    return {
      items,
      count,
      open,
      setOpen,
      add(product) {
        setItems((list) => {
          const found = list.find((item) => item.id === product.id);
          if (found) {
            return list.map((item) =>
              item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            );
          }
          return [
            ...list,
            {
              id: product.id,
              slug: product.slug,
              name: product.name,
              image: product.image,
              qty: 1,
            },
          ];
        });
        setOpen(true);
      },
      setQty(id, qty) {
        setItems((list) =>
          qty <= 0 ? list.filter((item) => item.id !== id) : list.map((item) => (item.id === id ? { ...item, qty } : item))
        );
      },
      remove(id) {
        setItems((list) => list.filter((item) => item.id !== id));
      },
      clear() {
        setItems([]);
      },
    };
  }, [items, open]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
