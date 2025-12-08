"use client";

import { createContext, useContext, useState } from "react";
import { CartItem, CartContextType } from "@/app/lib/definitions";

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.variantId === item.variantId);
      if (exists) {
        return prev.map((p) =>
          p.variantId === item.variantId
            ? { ...p, qty: p.qty + 1}
            : p
        );
      }
      return [...prev, item];
    });
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((p) => p.productId !== productId));
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{ items, loading, addItem, removeItem, clearCart, setItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
