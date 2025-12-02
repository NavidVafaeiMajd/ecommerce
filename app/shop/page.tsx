import { ProductItems } from "@/components/sections/shop/ProductItems";
import { fetchProducts } from "../lib/data";

const page = async () => {
  const products = await fetchProducts();

  console.log("Product List:", products);
  return (
    <div className="md:p-10">
      <ProductItems products={products} />
    </div>
  );
};

export default page;
