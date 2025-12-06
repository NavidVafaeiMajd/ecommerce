'use client';
import { ProductItem } from "./ProductItem";
import { ProductListItem } from "@/app/lib/definitions";

export function ProductItems({ products, cat }: { products?: ProductListItem[], cat?: string }) {
  console.log(products)
  return (
    <>
    <div>
      <div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
      { products?.length!==0 ? products?.map((product , index) => (
          <ProductItem key={index} product={ product } />
        )) :<><h3 className="text-center">NOT FOUND ENYTHING</h3></>}
      </div>
    </div></>
  );
}
