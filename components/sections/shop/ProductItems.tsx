'use client';
import { ProductItem } from "./ProductItem";
import { Product } from "@/app/lib/definitions";

export function  ProductItems({products , cat} : {products? : Product[], cat?: string}) {
  return (
    <>
    <div>
      <div>
        <h3 className="text-2xl">{cat || "Shop"} </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        { products?.map((product , index) => (
          <ProductItem key={index} product={ product } />
        ))}
      </div>
    </div></>
  );
}
