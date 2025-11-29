import { fetchProduct } from "@/app/lib/data";
import { ProductItem } from "./ProductItem";

export async function  ProductItems() {
    const products = await fetchProduct();
  return (
    <div>
      <div>
        <h3 className="text-2xl">Shop</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        {products.map((product , index) => (
          <ProductItem key={index} product={ product } />
        ))}
      </div>
    </div>
  );
}
