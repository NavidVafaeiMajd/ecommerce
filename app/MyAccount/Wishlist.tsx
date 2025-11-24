import { Button } from "@/components/ui/button";
import CliseIcon from "@/public/icons/colse";
import Image from "next/image";

const Wishlist = () => {
  return (
    <>
      <div className="text-foreground! mb-5">
        <h3 className="special mb-2!"> Wishlist</h3>
      </div>
      <div className="flex flex-col gap-5">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="border-b border-gray-300 last:border-none pb-4"
          >
            <WishlistItem />
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;

function WishlistItem() {
  return (
    <div className="flex gap-5 items-center justify-between!">
      <div>
        <CliseIcon />
      </div>
      <div className="relative w-25! h-25! rounded-2xl overflow-hidden">
        <Image alt="" src={"/home/test2.svg"} fill className="object-cover! " />
      </div>
      <div className="flex flex-col">
        <h4>Blue Flower Print Crop Top</h4>
        <span>
          Color : <span>Yellow</span>
        </span>
        <span>
          Quantity : <span>1</span>
        </span>
      </div>
      <div>
        <span className="text-ring">$20.00</span>
      </div>
      <div>
        <Button>Add To Cart</Button>
      </div>
    </div>
  );
}
