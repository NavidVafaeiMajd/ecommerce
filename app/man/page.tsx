import { ProductItems } from "@/components/sections/shop/ProductItems";
import { fetchGenderProduct, fetchProduct } from "../lib/data";

const page = async () => {
  const products = await fetchGenderProduct("man");

  return (
    <div className="md:p-10">
      <ProductItems products={products} />
    </div>
  );
};

export default page;
