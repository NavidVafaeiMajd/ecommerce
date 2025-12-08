"use client";

import { useEffect } from "react";
import { useCart } from "@/context/cart-context";
import { useSession } from "../lib/auth-client";

export function useCartSync() {
  const { data: session } = useSession();
  const { items, setItems, clearCart } = useCart();

  // Load cart from localStorage for Guest
  useEffect(() => {
    if (!session?.user) {
      const saved = localStorage.getItem("cart");
      if (saved) setItems(JSON.parse(saved));
    }
  }, [session]);

  // Save Guest cart to localStorage
  useEffect(() => {
    if (!session?.user) {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items, session]);

  // Merge cart after login
  useEffect(() => {
    if (session?.user) {
      const guest = JSON.parse(localStorage.getItem("cart") || "[]");

      if (guest.length > 0) {
        fetch("/api/cart/merge", {
          method: "POST",
          body: JSON.stringify({ items: guest }),
        })
          .then(() => {
            localStorage.removeItem("cart");
            clearCart();
          })
          .catch(console.error);
      }

      // Load server cart after merge
      fetch("/api/cart")
        .then((res) => res.json())
        .then((serverCart) => setItems(serverCart));
    }
  }, [session]);
}
