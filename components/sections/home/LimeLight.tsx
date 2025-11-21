import { ProductItem } from "../ProductItem";

const LimeLight = () => {
  return (
    <div>
      <h3 className="special">In The LimeLight</h3>
      <div className="grid grid-cols-4 gap-10">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default LimeLight;
