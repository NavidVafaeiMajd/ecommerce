import { ProductItems } from "@/components/sections/shop/ProductItems";
import { fetchGenderProduct } from "../lib/data";

const page = async () => {
  const products = await fetchGenderProduct("man");

  console.log(products);
  return (
    <div className="md:p-10">
      <ProductItems products={products} cat="Man"/>
    </div>
  );
};

export default page;
