'use client';
import { ProductItems } from "@/components/sections/shop/ProductItems";
import { fetchProducts } from "../lib/data";


const Page =  () => {



  return (
    <div className="md:p-10">
      <ProductItems products={products} />
    </div>
  );
};

export default Page;
