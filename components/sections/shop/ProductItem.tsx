import Image from "next/image";
import { Button } from "../../ui/button";
import LikeIcon from "@/public/icons/like";
import { Product } from "@/app/lib/definitions";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductItem = ({ product }: Props) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex flex-col gap-5 relative">
        <span className="like-btn absolute bg-background rounded-full z-9! w-7 h-7 flex justify-center items-center top-5 right-3">
          <LikeIcon stroke="#807D7E" />
        </span>
        <div className="relative w-full! h-[370px]! rounded-2xl overflow-hidden">
          <Image
            alt=""
            src={ product?.product_img || ""}
            fill
            className="object-cover! "
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-bold">{product?.product_name || ""}</span>
            <span className="font-light">Explore Now!</span>
          </div>
          <div>
            <Button variant={"header"}>{product?.product_price || ""}</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
