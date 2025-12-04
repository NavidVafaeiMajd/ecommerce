"use client";

import { QuantityCell } from "@/app/components/sections/cart/QuantityCell";
import TrashIcon from "@/public/icons/trash";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";

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

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "product",
    header: "Product Dtailes",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: () => (
      <div>
        <QuantityCell />
      </div>
    ),
  },
  {
    accessorKey: "shipping",
    header: "Shipping",
  },
  {
    accessorKey: "subtotal",
    header: "Subtotal",
  },
  {
    id: "action",
    header: "Action",
    cell: () => {
      return (
        <div className="text-right font-medium">
          <TrashIcon />
        </div>
      );
    },
  },
];
