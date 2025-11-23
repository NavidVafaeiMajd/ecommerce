import { ProductItem } from "./ProductItem";

export function ProductItems() {
  return (
    <div>
      <div>
        <h3 className="text-2xl">Shop</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        {[...Array(5)].map((_, index) => (
          <ProductItem key={index} />
        ))}
      </div>
    </div>
  );
}
