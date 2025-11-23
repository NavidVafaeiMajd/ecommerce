import { ProductItem } from "../shop/ProductItem";

const LimeLight = () => {
  return (
    <div>
      <h3 className="special">In The LimeLight</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default LimeLight;
