"use client";

import { CartItem } from "@/app/lib/definitions";
import { useCart } from "@/context/cart-context";

export function QuantityCell({product} : {product: CartItem}) {
    const { items, decreaseItem , addItem } = useCart();
    const exists = items.find((p) => p.variantId === product?.variantId );
    console.log(exists)
  return (
    <div className="flex items-center justify-center gap-6 bg-grayColor! px-6 py-3 rounded-2xl max-w-30!">
      <button
        onClick={() => decreaseItem(product)}
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
