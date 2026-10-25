import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getProduct } from './data';

const Ctx = createContext(null);

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => load('aura-cart', []));
  const [wish, setWish] = useState(() => load('aura-wish', []));
  const [compare, setCompare] = useState(() => load('aura-compare', []));
  const [user, setUser] = useState(() => load('aura-user', null));
  const [orders, setOrders] = useState(() => load('aura-orders', []));
  const [drawer, setDrawer] = useState(null);
  const [notice, setNotice] = useState('');

  useEffect(() => localStorage.setItem('aura-cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('aura-wish', JSON.stringify(wish)), [wish]);
  useEffect(() => localStorage.setItem('aura-compare', JSON.stringify(compare)), [compare]);
  useEffect(() => localStorage.setItem('aura-user', JSON.stringify(user)), [user]);
  useEffect(() => localStorage.setItem('aura-orders', JSON.stringify(orders)), [orders]);

  const api = useMemo(() => {
    const detailed = cart
      .map((line) => ({ ...line, product: getProduct(line.id) }))
      .filter((line) => line.product);
    const count = detailed.reduce((sum, line) => sum + line.qty, 0);
    const total = detailed.reduce((sum, line) => sum + line.product.price * line.qty, 0);

    return {
      cart,
      wish,
      compare,
      user,
      orders,
      drawer,
      setDrawer,
      notice,
      count,
      detailed,
      total,
      add(id, size, qty = 1) {
        setCart((prev) => {
          const hit = prev.find((line) => line.id === id && line.size === size);
          if (hit) {
            return prev.map((line) =>
              line.id === id && line.size === size ? { ...line, qty: line.qty + qty } : line
            );
          }
          return [...prev, { id, size, qty }];
        });
        setDrawer('cart');
      },
      setQty(id, size, qty) {
        setCart((prev) =>
          prev.flatMap((line) => {
            if (line.id !== id || line.size !== size) return [line];
            if (qty < 1) return [];
            return [{ ...line, qty }];
          })
        );
      },
      toggleWish(id) {
        setWish((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
      },
      toggleCompare(id) {
        setCompare((prev) => {
          if (prev.includes(id)) return prev.filter((item) => item !== id);
          if (prev.length >= 3) {
            setNotice('Compare holds three pieces at a time.');
            return prev;
          }
          return [...prev, id];
        });
      },
      login(next) {
        setUser(next);
      },
      logout() {
        setUser(null);
      },
      placeOrder(draft) {
        const saved = {
          ...draft,
          id: `AU${Date.now().toString().slice(-8)}`,
          placedAt: new Date().toISOString(),
          items: detailed.map((line) => ({
            id: line.id,
            size: line.size,
            qty: line.qty,
            name: line.product.name,
            price: line.product.price,
          })),
          total,
        };
        setOrders((prev) => [saved, ...prev]);
        setCart([]);
        setDrawer(null);
        return saved;
      },
      flash(message) {
        setNotice(message);
      },
    };
  }, [cart, wish, compare, user, orders, drawer, notice]);

  useEffect(() => {
    if (!notice) return undefined;
    const timer = setTimeout(() => setNotice(''), 2600);
    return () => clearTimeout(timer);
  }, [notice]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useStore() {
  return useContext(Ctx);
}
