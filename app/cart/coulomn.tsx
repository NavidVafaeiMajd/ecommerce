"use client";

import { QuantityCell } from "@/app/components/sections/cart/QuantityCell";
import TrashIcon from "@/public/icons/trash";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { CartItem } from "../lib/definitions";
import { useCart } from "@/context/cart-context";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  product: string;
  price: number;
  quantity: number;
  shipping: number;
  subtotal: number;

  [key: string]: string | number | boolean | null | undefined;
};
export const columns: ColumnDef<CartItem>[] = [
  {
    accessorKey: "productName",
    header: "Product Dtailes",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "color",
    header: "Color",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => {
      const product = row.original; 

      return (
        <div>
          <QuantityCell product={product} />
        </div>
      );
    },
  },
  {
    accessorKey: "subtotal",
    header: "Subtotal",
  },
  {
    id: "action",
    header: "Action",
    cell: ({row}) => {
            const variantId = row.original.variantId; 

      return (
        <div className="text-right font-medium">
          <TrashIcon variantId={variantId} />
        </div>
      );
    },
  },
];
