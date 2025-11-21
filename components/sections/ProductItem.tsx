import Image from "next/image";
import { Button } from "../ui/button";

export const ProductItem = () => {
  return (
    <div className="flex flex-col gap-5 relative">
      <span className="like-btn absolute bg-background rounded-full z-9! p-2 top-5 right-3">
        <Image alt="" src={"/icons/like.svg"} width={15} height={15} className="object-cover! z-9! "  />
      </span>
      <div className="relative w-full! h-[370px]! rounded-2xl overflow-hidden">
        <Image alt="" src={"/home/test2.svg"} fill className="object-cover! " />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-bold">Shirt</span>
          <span className="font-light">Explore Now!</span>
        </div>
        <div>
          <Button variant={"header"}>$123.000</Button>
        </div>
      </div>
    </div>
  );
};

