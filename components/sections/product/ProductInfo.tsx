import { Button } from "@/components/ui/button";
import { ColorRadioGroup } from "../shop/ColorRadioGroup";
import { SizeRadioGroup } from "../shop/SizeRadioGroup";
import Breadcrumb from "./breadcrumb";
import Image from "next/image";
import { Product } from "@/app/lib/definitions";

interface Props {
    productInfo : Product
}

const ProductInfo = ({productInfo} : Props) => {
  return (
    <div className="max-md:flex max-md:flex-col md:grid md:grid-cols-2  gap-10">
      <div >
        <div className="relative w-full! h-[400px] md:h-[785px]! rounded-2xl overflow-hidden">
          <Image
            alt=""
            src={productInfo.product_img || ""}
            fill
            className="object-cover! "
          />
        </div>
      </div>
      <div className="p-5 flex flex-col gap-10">
        <Breadcrumb gender={productInfo.gender} productName={productInfo.product_name} />
        <div className="text-2xl">
          <h2>{productInfo.product_name}</h2>
        </div>
        <div>
          <span>Select Size</span>
          <SizeRadioGroup />
        </div>
        <div>
          <span>Color Avalable</span>
          <ColorRadioGroup />
        </div>
        <div className="">
          <Button>Add to cart</Button>
          <span className="price border border-black rounded-md p-2 px-3 ml-5">
            ${productInfo.product_price}
          </span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ProductInfo;
