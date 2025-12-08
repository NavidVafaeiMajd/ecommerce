import { useCart } from "@/context/cart-context";
import { Button } from "../ui/button";
import { CartItem, Product, ProductVariant } from "@/app/lib/definitions";
import { QuantityCell } from "./cart/QuantityCell";

const AddToCart = ({ product }: { product: CartItem }) => {{}
  const { items , addItem } = useCart();
    const exists = items.find((p) => p.variantId === product?.variantId );
    console.log(exists, items , product?.variantId)
  return (
    <>
      {!exists ? (
              <Button className="px-6 py-3 rounded-lg bg-purple-600 disabled:bg-gray-500" onClick={() => { addItem(product) }}>
          Add to cart
        </Button>
      ) : (
        <QuantityCell product={product} />
      )}
    </>
  );
};

export default AddToCart;
