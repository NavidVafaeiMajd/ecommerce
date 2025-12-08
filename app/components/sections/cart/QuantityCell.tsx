"use client";

import { CartItem, Product, ProductVariant } from "@/app/lib/definitions";
import { useCart } from "@/context/cart-context";
import { useState } from "react";

export function QuantityCell({product} : {product: CartItem}) {
  const [value, setValue] = useState(1);
    const { items, removeItem, clearCart , addItem } = useCart();
    const exists = items.find((p) => p.variantId === product?.variantId );
    console.log(exists)
  return (
    <div className="flex items-center justify-center gap-6 bg-grayColor! px-6 py-3 rounded-2xl max-w-30!">
      <button
        onClick={() => value > 0 && setValue(value - 1)}
        className=""
      >
        −
      </button>

      <span>{exists?.qty}</span>

      <button
        onClick={() => { addItem(product) }}
        className=""
      >
        +
      </button>
    </div>
  );
}
