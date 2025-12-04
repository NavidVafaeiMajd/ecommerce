import { ProductItems } from "@/app/components/sections/shop/ProductItems";
import { fetchGenderProduct } from "../lib/data";

const page = async () => {
  const products = await fetchGenderProduct("woman");

  console.log(products);
  return (
    <div className="md:p-10">
      <ProductItems products={products} cat="Woman" />
    </div>
  );
};

export default page;
